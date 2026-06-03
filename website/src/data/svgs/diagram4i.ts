export const diagram4i = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Natural Language Processing: From Rules to LLMs</title>
<desc>Diagram showing the evolution of NLP from rule-based systems through statistical and neural methods to modern LLMs, with the core NLP tasks and where LLMs absorbed them.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Natural Language Processing: From Rules to LLMs</text>

<!-- ── EVOLUTION TIMELINE ───────────────────────────────── -->
<text x="420" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>How NLP evolved — four eras, each absorbed by the next</text>

<!-- Era 1: Rule-based -->
<rect x="12" y="60" width="196" height="86" rx="10" fill="#fef3c7"/>
<rect x="26" y="74" width="100" height="18" rx="4" fill="#d97706"/>
<text x="76" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>1950s — Rules</text>
<text x="110" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Hand-written grammar</text>
<text x="110" y="124" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Linguists encode patterns</text>
<text x="110" y="138" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Brittle, English-centric</text>

<text x="218" y="108" text-anchor="middle" font-size="18" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Era 2: Statistical -->
<rect x="232" y="60" width="172" height="86" rx="10" fill="#eff6ff"/>
<rect x="246" y="74" width="116" height="18" rx="4" fill="#2563eb"/>
<text x="304" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>1990s — Statistics</text>
<text x="318" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Learn from data</text>
<text x="318" y="124" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>n-grams, HMMs, SVMs</text>
<text x="318" y="138" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Feature engineering required</text>

<text x="414" y="108" text-anchor="middle" font-size="18" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Era 3: Neural -->
<rect x="428" y="60" width="172" height="86" rx="10" fill="#ecfdf5"/>
<rect x="442" y="74" width="116" height="18" rx="4" fill="#059669"/>
<text x="500" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>2013 — Neural</text>
<text x="514" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>End-to-end learning</text>
<text x="514" y="124" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>word2vec, RNNs, LSTMs</text>
<text x="514" y="138" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Embeddings replace features</text>

<text x="610" y="108" text-anchor="middle" font-size="18" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Era 4: LLMs -->
<rect x="624" y="60" width="204" height="86" rx="10" fill="#ede9fe"/>
<rect x="638" y="74" width="140" height="18" rx="4" fill="#7c3aed"/>
<text x="708" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>2018+ — LLMs</text>
<text x="726" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>One model, every task</text>
<text x="726" y="124" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Transformers + scale</text>
<text x="726" y="138" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Zero-shot generalisation</text>

<!-- ── CORE NLP TASKS (2x3 grid) ────────────────────────── -->
<text x="420" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Core NLP tasks — still running in every product you use</text>

<rect x="12" y="184" width="268" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="146" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Classification</text>
<text x="146" y="222" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Spam · sentiment · intent · topic</text>
<text x="146" y="238" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Where most production NLP still lives</text>

<rect x="288" y="184" width="264" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="420" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Named Entity Recognition</text>
<text x="420" y="222" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>People · places · orgs · CVEs · IOCs</text>
<text x="420" y="238" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>The backbone of structured extraction</text>

<rect x="560" y="184" width="268" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="694" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Translation</text>
<text x="694" y="222" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cross-language fluent text</text>
<text x="694" y="238" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>200+ languages now mainstream</text>

<rect x="12" y="256" width="268" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="146" y="276" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Summarisation</text>
<text x="146" y="294" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Documents · transcripts · threads</text>
<text x="146" y="310" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Extractive and abstractive variants</text>

<rect x="288" y="256" width="264" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="420" y="276" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Question Answering</text>
<text x="420" y="294" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Closed-book and retrieval-grounded</text>
<text x="420" y="310" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>The interface most users now expect</text>

<rect x="560" y="256" width="268" height="64" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="694" y="276" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Speech ⇄ Text</text>
<text x="694" y="294" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Whisper · TTS · voice assistants</text>
<text x="694" y="310" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Pipeline glue for multimodal agents</text>

<!-- ── WHAT LLMs CHANGED ────────────────────────────────── -->
<rect x="12" y="336" width="816" height="92" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
<text x="420" y="356" text-anchor="middle" font-size="11" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>What LLMs changed — and what they didn't</text>
<text x="214" y="378" text-anchor="middle" font-size="9" font-weight="600" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>LLMs subsume most NLP tasks zero-shot</text>
<text x="214" y="394" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>One prompt replaces a fine-tuned model</text>
<text x="214" y="410" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Build pipelines in days, not quarters</text>

<text x="626" y="378" text-anchor="middle" font-size="9" font-weight="600" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Specialist NLP still wins on cost &amp; latency</text>
<text x="626" y="394" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>High-volume spam &amp; intent classifiers stay small</text>
<text x="626" y="410" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Hybrid is the production pattern in 2026</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="442" width="816" height="24" rx="8" fill="#7c3aed"/>
<text x="420" y="458" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>NLP didn't disappear into LLMs — it became the way most software talks to humans</text>

</svg>`;
