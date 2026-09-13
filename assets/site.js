
(function(){
  var root=document.documentElement, tb=document.getElementById('theme');
  function cur(){return root.getAttribute('data-theme')||
    (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}
  if(tb) tb.addEventListener('click',function(){
    root.setAttribute('data-theme', cur()==='dark'?'light':'dark');});

  var q=document.getElementById('q'),
      cards=[].slice.call(document.querySelectorAll('.card')),
      groups=[].slice.call(document.querySelectorAll('.group[data-group]')),
      navs=[].slice.call(document.querySelectorAll('.nav-links a')),
      mechs=[].slice.call(document.querySelectorAll('.badges.mechrow a')),
      out=document.getElementById('shown'), empty=document.getElementById('empty'), active='';

  function paint(){
    navs.forEach(function(a){
      var g=a.getAttribute('href').slice(1);
      if(g===active || (active==='' && g==='top')) a.setAttribute('aria-current','page');
      else a.removeAttribute('aria-current');
    });
    mechs.forEach(function(a){
      a.style.opacity = (!active || a.dataset.g===active) ? '1' : '.42';
    });
  }
  function apply(){
    var t=(q&&q.value||'').toLowerCase().trim(), n=0;
    cards.forEach(function(c){
      var on=(!active||c.dataset.g===active)&&(!t||(c.dataset.s||'').indexOf(t)>-1);
      c.classList.toggle('is-hidden',!on); if(on) n++;
    });
    groups.forEach(function(g){
      g.hidden=!g.querySelectorAll('.card:not(.is-hidden)').length;});
    if(out) out.textContent=n+(n===1?' entry':' entries');
    if(empty) empty.hidden=n>0;
    paint();
  }
  function select(g){ active=(active===g)?'':g; apply(); }

  navs.forEach(function(a){
    var g=a.getAttribute('href').slice(1);
    a.addEventListener('click',function(){
      if(g==='top'){active='';apply();return;}
      if(g==='related'){active='';apply();return;}
      active=g; apply();
    });
  });
  mechs.forEach(function(a){
    a.addEventListener('click',function(){ select(a.dataset.g); });
  });
  if(q) q.addEventListener('input', apply);
  paint();
})();
