<div align="center">

<img src="assets/fig1.webp" alt="Awesome RSI: an outer loop that inspects, refines and redeploys the improver, wrapped around an inner loop where an agent acts, is evaluated, is modified and retained; above it the components a loop can write to, from model and memory through code and tools to the evaluator and the update rule" width="100%">

# Awesome RSI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Papers in which the loop that improves a system also changes the thing doing the improving.

![Papers](https://img.shields.io/badge/papers-39-B31B1B?style=flat-square&logo=arxiv&logoColor=white)
![Groups](https://img.shields.io/badge/mechanisms-5-8A2BE2?style=flat-square&logo=bookstack&logoColor=white)
![With code](https://img.shields.io/badge/with%20code-17-181717?style=flat-square&logo=github&logoColor=white)
![Stars](https://img.shields.io/badge/repo%20stars-12k-F59E0B?style=flat-square&logo=starship&logoColor=white)
![Daily Papers](https://img.shields.io/badge/%F0%9F%A4%97%20daily%20papers-25-FFD21E?style=flat-square)
[![License](https://img.shields.io/badge/license-CC%20BY%204.0-10B981?style=flat-square&logo=creativecommons&logoColor=white)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-2EA44F?style=flat-square&logo=git&logoColor=white)](#contributing)

🧬 Rewrites its own code · ♻️ Optimizes its own optimizer · 🧩 Edits the harness that edits · 🌱 Searches its own designs · ♾️ Formal machines

</div>

---

## Contents

- [🔥 News](#-news)
- [🧬 Rewrites Its Own Code](#-rewrites-its-own-code) (10)
- [♻️ Optimizes Its Own Optimizer](#-optimizes-its-own-optimizer) (12)
- [🧩 Edits the Harness That Edits](#-edits-the-harness-that-edits) (4)
- [🌱 Searches Over Its Own Designs](#-searches-over-its-own-designs) (4)
- [♾️ Formal Self-Referential Machines](#-formal-self-referential-machines) (9)
- [🔗 Where the Rest of the Field Is](#-where-the-rest-of-the-field-is) (10)

---

## 🔥 News

🚀 **2026-09 · Repository launch.** PRs welcome.

---

## 🧬 Rewrites Its Own Code

The agent's working directory contains the agent, so an edit can land on the part that decides what to edit next.

- ⭐ [Darwin Godel Machine](https://arxiv.org/abs/2505.22954), "Open-Ended Evolution of Self-Improving Agents". ![arXiv](https://img.shields.io/badge/arXiv-2505.22954-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/jennyzzt/dgm?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/jennyzzt/dgm) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2505.22954&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2505.22954) [![Website](https://img.shields.io/badge/Website-2EA44F?style=flat-square&logo=googlechrome&logoColor=white)](https://sakana.ai/dgm/)
- ⭐ [Gödel Agent](https://arxiv.org/abs/2410.04444), "A Self-Referential Agent Framework for Recursive Self-Improvement". ![ACL 2025](https://img.shields.io/badge/ACL_2025-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2410.04444-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/Arvid-pku/Godel_Agent?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Arvid-pku/Godel_Agent) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2410.04444&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2410.04444)
- ⭐ [A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228). ![arXiv](https://img.shields.io/badge/arXiv-2504.15228-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/MaximeRobeyns/self_improving_coding_agent?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/MaximeRobeyns/self_improving_coding_agent) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2504.15228&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2504.15228)
- [Hyperagents](https://arxiv.org/abs/2603.19461). ![arXiv](https://img.shields.io/badge/arXiv-2603.19461-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/facebookresearch/HyperAgents?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/facebookresearch/HyperAgents) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2603.19461&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2603.19461)
- [Group-Evolving Agents](https://arxiv.org/abs/2602.04837), "Open-Ended Self-Improvement via Experience Sharing". ![arXiv](https://img.shields.io/badge/arXiv-2602.04837-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/UCSB-AI/GEA?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/UCSB-AI/GEA) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2602.04837&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2602.04837)
- [Huxley-Gödel Machine](https://arxiv.org/abs/2510.21614), "Human-Level Coding Agent Development by an Approximation of the Optimal Self-Improving Machine". ![arXiv](https://img.shields.io/badge/arXiv-2510.21614-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/metauto-ai/HGM?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/metauto-ai/HGM) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2510.21614&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2510.21614)
- [Live-SWE-agent](https://arxiv.org/abs/2511.13646), "Can Software Engineering Agents Self-Evolve on the Fly?". ![arXiv](https://img.shields.io/badge/arXiv-2511.13646-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/OpenAutoCoder/live-swe-agent?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/OpenAutoCoder/live-swe-agent) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2511.13646&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2511.13646)
- [MOSS](https://arxiv.org/abs/2605.22794), "Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems". ![arXiv](https://img.shields.io/badge/arXiv-2605.22794-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/hkgai-official/Moss?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/hkgai-official/Moss) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2605.22794&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2605.22794)
- [Bounded Recursive Self-Improvement](https://arxiv.org/abs/1312.6764). ![arXiv](https://img.shields.io/badge/arXiv-1312.6764-B31B1B?style=flat-square)
- [Mendel Gödel Machine](https://arxiv.org/abs/2608.07645), "Recursive Self-Improving Coding Agents via Comparative Evolution". ![arXiv](https://img.shields.io/badge/arXiv-2608.07645-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2608.07645&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2608.07645)

---

## ♻️ Optimizes Its Own Optimizer

The improvement is produced by a procedure, and that procedure is applied to itself.

- ⭐ [Self-Taught Optimizer (STOP)](https://arxiv.org/abs/2310.02304), "Recursively Self-Improving Code Generation". ![arXiv](https://img.shields.io/badge/arXiv-2310.02304-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/microsoft/stop?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/microsoft/stop) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2310.02304&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2310.02304)
- ⭐ [Self-Adapting Language Models](https://arxiv.org/abs/2506.10943). ![arXiv](https://img.shields.io/badge/arXiv-2506.10943-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/Continual-Intelligence/SEAL?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/Continual-Intelligence/SEAL) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2506.10943&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2506.10943)
- ⭐ [Promptbreeder](https://arxiv.org/abs/2309.16797), "Self-Referential Self-Improvement Via Prompt Evolution". ![ICML 2024](https://img.shields.io/badge/ICML_2024-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2309.16797-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2309.16797&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2309.16797)
- [Meta^n](https://arxiv.org/abs/2608.24735), "Recursive Self-Improvement through Emergent Depth". ![arXiv](https://img.shields.io/badge/arXiv-2608.24735-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/minnesotanlp/meta-n?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/minnesotanlp/meta-n) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2608.24735&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2608.24735)
- [metaTextGrad](https://arxiv.org/abs/2505.18524), "Automatically optimizing language model optimizers". ![NeurIPS 2025](https://img.shields.io/badge/NeurIPS_2025-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2505.18524-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/zou-group/metatextgrad?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/zou-group/metatextgrad) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2505.18524&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2505.18524)
- [SePO](https://arxiv.org/abs/2606.04465), "Self-Evolving Prompt Agent for System Prompt Optimization". ![arXiv](https://img.shields.io/badge/arXiv-2606.04465-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/taowangcheng/SePO?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/taowangcheng/SePO) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2606.04465&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2606.04465)
- [MetaSkill-Evolve](https://arxiv.org/abs/2607.05297), "Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution". ![arXiv](https://img.shields.io/badge/arXiv-2607.05297-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2607.05297&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2607.05297)
- [Learning to Evolve](https://arxiv.org/abs/2604.20714), "A Self-Improving Framework for Multi-Agent Systems via Textual Parameter Graph Optimization". ![arXiv](https://img.shields.io/badge/arXiv-2604.20714-B31B1B?style=flat-square)
- [Metalearning Continual Learning Algorithms](https://arxiv.org/abs/2312.00276). ![TMLR 2025](https://img.shields.io/badge/TMLR_2025-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2312.00276-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2312.00276&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2312.00276)
- [Arbitrary Order Meta-Learning with Simple Population-Based Evolution](https://arxiv.org/abs/2303.09478). ![arXiv](https://img.shields.io/badge/arXiv-2303.09478-B31B1B?style=flat-square)
- [Eliminating Meta Optimization Through Self-Referential Meta Learning](https://arxiv.org/abs/2212.14392). ![arXiv](https://img.shields.io/badge/arXiv-2212.14392-B31B1B?style=flat-square)
- [A Modern Self-Referential Weight Matrix That Learns to Modify Itself](https://arxiv.org/abs/2202.05780). ![ICML 2022](https://img.shields.io/badge/ICML_2022-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2202.05780-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2202.05780&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2202.05780)

---

## 🧩 Edits the Harness That Edits

The scaffold around the model is the substrate, and the component doing the scaffold editing is inside the substrate.

- [Ouroboros](https://arxiv.org/abs/2608.08311), "A Self-Developing Frontier Coding Agent with Reviewed Core Evolution". ![arXiv](https://img.shields.io/badge/arXiv-2608.08311-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/razzant/ouroboros?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/razzant/ouroboros) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2608.08311&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2608.08311)
- [Continual Harness](https://arxiv.org/abs/2605.09998), "Online Adaptation for Self-Improving Foundation Agents". ![arXiv](https://img.shields.io/badge/arXiv-2605.09998-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/sethkarten/continual-harness?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/sethkarten/continual-harness) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2605.09998&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2605.09998)
- [Self-Harness](https://arxiv.org/abs/2606.09498), "Harnesses That Improve Themselves". ![arXiv](https://img.shields.io/badge/arXiv-2606.09498-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2606.09498&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2606.09498)
- [EvoTrainer](https://arxiv.org/abs/2606.03108), "Co-Evolving LLM Policies and Training Harnesses for Autonomous Agentic Reinforcement Learning". ![arXiv](https://img.shields.io/badge/arXiv-2606.03108-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2606.03108&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2606.03108)

---

## 🌱 Searches Over Its Own Designs

A meta level writes candidate agents, operators or memory architectures as code, then searches the archive it just extended.

- ⭐ [Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435). ![arXiv](https://img.shields.io/badge/arXiv-2408.08435-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/ShengranHu/ADAS?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/ShengranHu/ADAS) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2408.08435&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2408.08435)
- [The Red Queen Gödel Machine](https://arxiv.org/abs/2606.26294), "Co-Evolving Agents and Their Evaluators". ![arXiv](https://img.shields.io/badge/arXiv-2606.26294-B31B1B?style=flat-square) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2606.26294&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2606.26294)
- [Learning to Continually Learn via Meta-learning Agentic Memory Designs](https://arxiv.org/abs/2602.07755). ![arXiv](https://img.shields.io/badge/arXiv-2602.07755-B31B1B?style=flat-square) [![Code](https://img.shields.io/github/stars/zksha/alma?style=flat-square&logo=github&label=Code&color=181717)](https://github.com/zksha/alma) [![Daily Papers](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fhuggingface.co%2Fapi%2Fpapers%2F2602.07755&query=%24.upvotes&label=%F0%9F%A4%97%20Daily&color=FFD21E&style=flat-square)](https://huggingface.co/papers/2602.07755)
- [AlgoEvolve](https://arxiv.org/abs/2606.26173), "LLM-driven Meta-evolution of Algorithmic Trading Programs". ![arXiv](https://img.shields.io/badge/arXiv-2606.26173-B31B1B?style=flat-square)

---

## ♾️ Formal Self-Referential Machines

Machines and theorems, where the question was first posed: what self-modification can be proved to buy, and at what cost.

- ⭐ [Godel Machines](https://arxiv.org/abs/cs/0309048), "Self-Referential Universal Problem Solvers Making Provably Optimal Self-Improvements". ![arXiv](https://img.shields.io/badge/arXiv-cs%2F0309048-B31B1B?style=flat-square)
- [From Seed AI to Technological Singularity via Recursively Self-Improving Software](https://arxiv.org/abs/1502.06512). ![arXiv](https://img.shields.io/badge/arXiv-1502.06512-B31B1B?style=flat-square)
- [Self-Reference in Large Language Models: The Introspection Threshold for Recursive Self-Improvement](https://arxiv.org/abs/2607.04277). ![arXiv](https://img.shields.io/badge/arXiv-2607.04277-B31B1B?style=flat-square)
- [Performance of Bounded-Rational Agents With the Ability to Self-Modify](https://arxiv.org/abs/2011.06275). ![AAAI 2021](https://img.shields.io/badge/AAAI_2021-4B5563?style=flat-square) ![arXiv](https://img.shields.io/badge/arXiv-2011.06275-B31B1B?style=flat-square)
- [A Formulation of Recursive Self-Improvement and Its Possible Efficiency](https://arxiv.org/abs/1805.06610). ![arXiv](https://img.shields.io/badge/arXiv-1805.06610-B31B1B?style=flat-square)
- [Self-Modification of Policy and Utility Function in Rational Agents](https://arxiv.org/abs/1605.03142). ![arXiv](https://img.shields.io/badge/arXiv-1605.03142-B31B1B?style=flat-square)
- [The Unverifiability of Artificial General Intelligence (AGI) Alignment, Static and Dynamic: From Trakhtenbrot's Wall to the Safety-Generality Tension](https://arxiv.org/abs/2606.28639). ![arXiv](https://img.shields.io/badge/arXiv-2606.28639-B31B1B?style=flat-square)
- [What does a system modify when it modifies itself?](https://arxiv.org/abs/2603.27611). ![arXiv](https://img.shields.io/badge/arXiv-2603.27611-B31B1B?style=flat-square)
- [SGM](https://arxiv.org/abs/2510.10232), "A Statistical Godel Machine for Risk-Controlled Recursive Self-Modification". ![arXiv](https://img.shields.io/badge/arXiv-2510.10232-B31B1B?style=flat-square)

---

## 🔗 Where the Rest of the Field Is

Self-improving and self-evolving agents, prompt optimization, memory and skill libraries, benchmarks and safety work are all out of scope here. These lists cover them.

- [Awesome AI Scientist](https://github.com/Omni-Scientist/Awesome-AI-Scientist), Sibling list, for AI systems that do science rather than improve themselves. [![List](https://img.shields.io/github/stars/Omni-Scientist/Awesome-AI-Scientist?style=flat-square&logo=github&label=List&color=181717)](https://github.com/Omni-Scientist/Awesome-AI-Scientist)
- [awesome-rsi (lobehub)](https://github.com/lobehub/awesome-rsi), Research map of RSI organized by model level, harness level and automated AI R&D. [![List](https://img.shields.io/github/stars/lobehub/awesome-rsi?style=flat-square&logo=github&label=List&color=181717)](https://github.com/lobehub/awesome-rsi)
- [awesome-rsi (pinkbubblebubble)](https://github.com/pinkbubblebubble/awesome-rsi), Evidence-labelled collection with an explicit inclusion decision procedure. [![List](https://img.shields.io/github/stars/pinkbubblebubble/awesome-rsi?style=flat-square&logo=github&label=List&color=181717)](https://github.com/pinkbubblebubble/awesome-rsi)
- [Awesome-Self-Evolving-Agents](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents), Companion list to the what, when, how and where to evolve survey. [![List](https://img.shields.io/github/stars/XMUDeepLIT/Awesome-Self-Evolving-Agents?style=flat-square&logo=github&label=List&color=181717)](https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents)
- [Awesome-Self-Improving-Agents](https://github.com/selfimproving-agent/awesome-Self-Improving-Agents), Reading list for self-improvement in foundation-model agentic systems. [![List](https://img.shields.io/github/stars/selfimproving-agent/awesome-Self-Improving-Agents?style=flat-square&logo=github&label=List&color=181717)](https://github.com/selfimproving-agent/awesome-Self-Improving-Agents)
- [Awesome-Harness-Self-Improvement](https://github.com/leezythu/Awesome-Harness-Self-Improvement), Focused on the harness layer, bilingual, with an explicit optimization ladder. [![List](https://img.shields.io/github/stars/leezythu/Awesome-Harness-Self-Improvement?style=flat-square&logo=github&label=List&color=181717)](https://github.com/leezythu/Awesome-Harness-Self-Improvement)
- [awesome-recursive-self-improving-agents](https://github.com/D2I-ai/awesome-recursive-self-improving-agents), Living index for the foundation, framework and future directions survey. [![List](https://img.shields.io/github/stars/D2I-ai/awesome-recursive-self-improving-agents?style=flat-square&logo=github&label=List&color=181717)](https://github.com/D2I-ai/awesome-recursive-self-improving-agents)
- [Awesome-Agent-Harness](https://github.com/Gloriaameng/Awesome-Agent-Harness), Survey-backed list of agent harness designs. [![List](https://img.shields.io/github/stars/Gloriaameng/Awesome-Agent-Harness?style=flat-square&logo=github&label=List&color=181717)](https://github.com/Gloriaameng/Awesome-Agent-Harness)
- [awesome-automl-papers](https://github.com/hibayesian/awesome-automl-papers), The pre-LLM automated machine learning literature this field grew out of. [![List](https://img.shields.io/github/stars/hibayesian/awesome-automl-papers?style=flat-square&logo=github&label=List&color=181717)](https://github.com/hibayesian/awesome-automl-papers)
- [Awesome-RL-for-LRMs](https://github.com/TsinghuaC3I/Awesome-RL-for-LRMs), Reinforcement learning for large reasoning models, the training half of the weight-level loop. [![List](https://img.shields.io/github/stars/TsinghuaC3I/Awesome-RL-for-LRMs?style=flat-square&logo=github&label=List&color=181717)](https://github.com/TsinghuaC3I/Awesome-RL-for-LRMs)

---

## Contributing

Open a pull request. Link the paper, add the code repository if there is one, and say in one line which component of the system the improvement loop modifies. See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format.

---

## Footnotes

```bibtex
@misc{awesome_rsi,
  title        = {Awesome RSI},
  year         = {2026},
  howpublished = {\url{https://github.com/Omni-Scientist/Awesome-RSI}},
  note         = {Papers in which the improvement loop modifies its own machinery}
}
```
