(function () {
  "use strict";
  var root = document.documentElement;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* theme */
  var saved = store("rsi-theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  var tt = document.querySelector("[data-role=theme]");
  if (tt) tt.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next); store("rsi-theme", next);
  });

  /* wall: filter, search, sort, cards per row */
  var wall = document.querySelector(".wall");
  if (!wall) return;
  var cards = [].slice.call(wall.querySelectorAll(".card"));
  var chapters = [].slice.call(wall.querySelectorAll(".chapter"));
  var empty = wall.querySelector(".empty");
  var countEl = document.querySelector("[data-role=count]");
  var q = document.querySelector("[data-role=q]");
  var state = { g: "all", sort: "curated", q: "" };

  /* strip colour follows the column: one colour per column, left to right, six at most then repeat */
  function paint() {
    var n = getComputedStyle(wall).gridTemplateColumns.split(" ").length || 1, i = 0;
    [].forEach.call(wall.children, function (el) {
      if (el.hidden) return;
      if (el.classList.contains("chapter")) { i = 0; return; }
      if (!el.classList.contains("card")) return;
      var k = (i % n) % 6;
      el.classList.remove("b0", "b1", "b2", "b3", "b4", "b5"); el.classList.add("b" + k); i++;
    });
  }

  function apply() {
    var terms = state.q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\s+/).filter(Boolean);
    var shown = 0, perGroup = {};
    cards.forEach(function (c) {
      var hay = c.getAttribute("data-s");
      var ok = (state.g === "all" || c.getAttribute("data-g") === state.g) &&
        terms.every(function (t) { return hay.indexOf(t) !== -1; });
      c.hidden = !ok;
      if (ok) { shown++; perGroup[c.getAttribute("data-g")] = 1; }
    });
    var key = {
      curated: function (c) { return +c.getAttribute("data-i"); },
      stars: function (c) { return -(+c.getAttribute("data-stars")) * 1000 + (+c.getAttribute("data-i")); },
      newest: function (c) { return -(+c.getAttribute("data-d")); },
      oldest: function (c) { return +c.getAttribute("data-d"); }
    }[state.sort];
    var sorted = cards.slice().sort(function (a, b) { return key(a) - key(b); });
    var frag = document.createDocumentFragment();
    if (state.sort === "curated") {
      chapters.forEach(function (h) {
        var g = h.getAttribute("data-g");
        h.hidden = !perGroup[g];
        frag.appendChild(h);
        sorted.forEach(function (c) { if (c.getAttribute("data-g") === g) frag.appendChild(c); });
      });
    } else {
      chapters.forEach(function (h) { h.hidden = true; frag.appendChild(h); });
      sorted.forEach(function (c) { frag.appendChild(c); });
    }
    frag.appendChild(empty);
    wall.appendChild(frag);
    empty.hidden = shown > 0;
    if (countEl) countEl.textContent = shown + (shown === 1 ? " card" : " cards");
    paint();
  }

  [].forEach.call(document.querySelectorAll("[data-role=chip]"), function (b) {
    b.addEventListener("click", function () {
      state.g = b.getAttribute("data-g");
      [].forEach.call(document.querySelectorAll("[data-role=chip]"), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      apply();
    });
  });
  [].forEach.call(document.querySelectorAll("[data-role=sort] button"), function (b) {
    b.addEventListener("click", function () {
      state.sort = b.getAttribute("data-sort");
      [].forEach.call(document.querySelectorAll("[data-role=sort] button"), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      apply();
    });
  });
  if (q) {
    q.addEventListener("input", function () { state.q = q.value.trim(); apply(); });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement !== q) { ev.preventDefault(); q.focus(); }
      if (ev.key === "Escape" && document.activeElement === q) { q.value = ""; state.q = ""; apply(); q.blur(); }
    });
  }
  /* columns: as many ~260px cards as the wall holds, remembered per screen class */
  function colKey() { return "rsi-cols2-" + (window.innerWidth < 1024 ? "t" : window.innerWidth < 1600 ? "d" : "w"); }
  function fit() { return Math.max(2, Math.min(7, Math.floor((wall.clientWidth + 18) / (258 + 18)))); }
  var cols = +(store(colKey()) || 0) || fit();
  var out = document.querySelector("[data-role=cols]");
  function setCols(n, keep) {
    cols = Math.max(2, Math.min(8, n));
    root.style.setProperty("--cols", cols); if (out) out.textContent = cols; if (keep) store(colKey(), String(cols));
    paint();
  }
  setCols(cols);
  window.addEventListener("resize", function () { if (!store(colKey())) setCols(fit()); else paint(); });
  [].forEach.call(document.querySelectorAll("[data-role=colstep]"), function (b) {
    b.addEventListener("click", function () { setCols(cols + (+b.getAttribute("data-step")), true); });
  });
  apply();

  /* cards tilt toward the pointer and the foil follows it */
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!still && fine) {
    cards.forEach(function (c) {
      c.addEventListener("pointermove", function (ev) {
        var r = c.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        c.classList.add("tracking");
        c.style.setProperty("--ry", ((x - .5) * 9).toFixed(2) + "deg");
        c.style.setProperty("--rx", ((.5 - y) * 7).toFixed(2) + "deg");
        c.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
        c.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      });
      c.addEventListener("pointerleave", function () {
        c.classList.remove("tracking");
        c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* manga focus lines across the sky banner, drawn once */
  var cv = document.querySelector(".sky canvas");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d");
    function lines() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
      var W = r.width, H = r.height;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var cx = W * 0.8, cy = H * 0.42, R = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) + 20;
      var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      for (var a = 0; a < Math.PI * 2; a += 0.035 + rnd() * 0.05) {
        var inner = Math.min(W, H) * (0.55 + rnd() * 0.5), w = 0.004 + rnd() * 0.01;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
        ctx.lineTo(cx + Math.cos(a - w) * R, cy + Math.sin(a - w) * R);
        ctx.lineTo(cx + Math.cos(a + w) * R, cy + Math.sin(a + w) * R);
        ctx.closePath(); ctx.fill();
      }
    }
    lines();
    window.addEventListener("resize", lines);
  }
})();
