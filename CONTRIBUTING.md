# Contributing to Awesome RSI

This list holds the papers that pass a single test, given below. The much larger literatures on self-improving and self-evolving agents are covered by the lists linked at the bottom of the README.

## The test

> Is the thing that produces round N+1's improvement different from the thing that produced round N's, because the loop itself changed it?

The modification has to reach the component performing the modification.

**Passes.** An agent that edits the source it runs from, including the code deciding what to edit. An optimizer whose own prompt, policy or code is optimized by the same procedure. A meta-search that writes new agent designs, operators or memory architectures and then searches the archive it just extended. A machine that rewrites itself under a proof obligation.

**Does not pass**, whatever it calls itself. Skill, memory, experience or playbook accumulation with a hand-written update rule. Prompt, workflow or harness editing performed by a fixed optimizer. Self-training, self-play, self-rewarding, self-critique or test-time adaptation with a fixed recipe. Continual and lifelong learning with a fixed adaptation mechanism. Multi-agent co-evolution under a fixed co-evolution rule. A framework running a fixed meta-loop over agents in order to improve some external artifact rather than itself.

The burden is on the entry, and the default answer is no.

## Opening a pull request

**To add an entry**, answer one question in the description: *which component does the loop modify, and where does the paper say so?* Quote the sentence. A title, an abstract that says "self-evolving", and a rising benchmark curve are each insufficient on their own.

**To remove an entry**, do the same in reverse: name the component that stays fixed, and quote the paper. Every entry here is a claim, so demoting one is as useful as adding one. Several borderline calls are listed below.

Also check that:

- the entry is not already listed;
- the primary link is the paper or preprint, and the arXiv ID in the badge matches it;
- the official code repository is linked when one exists;
- `python3 scripts/check_links.py README.md` passes.

### Borderline calls already made

These were judged to pass, and they are the ones most worth arguing about. If you disagree, open an issue and name the mechanism.

- **Meta^n** states that its meta-operation stays fixed while the input grows, which is close to the line.
- **Continual Harness** refines its own prompt, sub-agents and skills, and whether the refiner is inside that set is not fully explicit.
- **SEAL** passes because the self-edit policy is trained by the same loop it drives, not merely applied by it.
- The **self-referential meta-learning** papers in the formal group are trained by a fixed outer objective, so their self-reference is architectural rather than procedural.

Judged to fail, and worth recording because they are often assumed to pass: model-harness co-evolution where a fixed critic edits a separate agent, bi-level meta-learning with a fixed outer loop, and self-improvement benchmarks, whose own machinery never changes.

## Which group

| Group | What the loop reaches |
|:--|:--|
| 🧬 Rewrites Its Own Code | the source the agent is executing |
| ♻️ Optimizes Its Own Optimizer | the optimization procedure, applied to itself |
| 🧩 Edits the Harness That Edits | the scaffold, including the component doing the editing |
| 🌱 Searches Over Its Own Designs | an archive of agents, operators or architectures the meta level wrote |
| ♾️ Formal Self-Referential Machines | a theorem or a machine rather than a running system |

Where a paper fits two groups, pick the one its central claim rests on.

## Entry format

One line per entry. A paper carries its real title, quoted, exactly as printed. Do not paraphrase it.

~~~markdown
- ⭐ [Darwin Godel Machine](https://arxiv.org/abs/2505.22954), "Open-Ended Evolution of Self-Improving Agents". [badges]
~~~

Where the title reads `Name: Something`, drop the `Name:` prefix, since the entry name carries it. Where the entry name already is the full title, leave the title out rather than printing it twice. arXiv titles sometimes contain math markup; write the plain-text form, since Markdown will not render it.

The separator is a comma. The `⭐` prefix marks an editor's pick, and on a list this size it should stay rare.

### Badge conventions

| Badge | Pattern | Notes |
|:--|:--|:--|
| arXiv | `badge/arXiv-<ID>-B31B1B` | the **real** arXiv id in the label, never the word "Paper"; unlinked when the entry name already points at the paper. Old-style ids need the slash encoded, `cs%2F0309048` |
| Venue | `badge/<Venue>_<Year>-4B5563` | conference acceptance, unlinked; only where DBLP indexes it or the authors state it in the arXiv comment |
| Journal | `badge/<Venue>-<Year>-006633` | Nature, Science, Nature Machine Intelligence |
| Code | `github/stars/OWNER/REPO?...&label=Code&color=181717` | one badge carries both the repo link and the live star count |
| Daily Papers | `badge/dynamic/json?url=...huggingface.co/api/papers/<ID>&query=$.upvotes` | live upvote count, only where the papers page exists |
| Website | `badge/Website-2EA44F` | official project page |

Do not add a venue badge from memory. An invented arXiv id fails the link check and an unindexed Hugging Face page returns 404, so those fail loudly; venue acceptance has no such check, which is exactly why it needs a source.

## Checks

~~~bash
npm install
npm run lint     # structure, dead links, duplicate links, table of contents
npm run links    # every URL resolves
~~~

`npm run lint` runs awesome-lint with one rule switched off, the one requiring a dash between the link and the description, since this list uses the paper-list convention instead.

## Responsible use

Every system here can write code and change its own configuration without a human reading each step, and several of the papers document loops that ended up optimizing their evaluator. Do not describe an entry as reliable, autonomous or safely bounded unless the linked work provides evidence, and keep sandboxing and rollback limitations visible.

By contributing, you agree that your contribution can be distributed under the repository's [CC BY 4.0 license](LICENSE).
