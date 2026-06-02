export const diagram4b = `<svg width="100%" viewBox="0 0 840 510" role="img" xmlns="http://www.w3.org/2000/svg">
<title>AI Ethics &amp; Safety: Four Pillars of Responsible AI</title>
<desc>2x2 grid of the four pillars of responsible AI — Fairness and Bias, Transparency, Accountability, and Safety and Alignment — with mitigation approaches and key questions at the bottom.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>AI Ethics &amp; Safety: Four Pillars of Responsible AI</text>

<!-- ── PILLAR 1: Fairness & Bias (top-left, red) ───────── -->
<rect x="12" y="36" width="400" height="170" rx="12" fill="#fee2e2"/>
<rect x="26" y="50" width="126" height="18" rx="4" fill="#dc2626"/>
<text x="89" y="62" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Fairness &amp; Bias</text>
<text x="212" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>AI reflects its training data — flaws included</text>
<text x="212" y="100" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Representation bias: underrepresented groups get worse results</text>
<text x="212" y="116" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Historical bias: past discrimination becomes a learned statistical pattern</text>
<text x="212" y="132" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Measurement bias: optimising the metric, not the actual goal you care about</text>
<rect x="26" y="146" width="372" height="48" rx="6" fill="#fecaca"/>
<text x="212" y="164" text-anchor="middle" font-size="10" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Real impact: hiring, lending, healthcare triage, law enforcement</text>
<text x="212" y="180" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Mitigation: diverse training data · bias audits · disaggregated evaluation</text>

<!-- ── PILLAR 2: Transparency (top-right, purple) ─────── -->
<rect x="428" y="36" width="400" height="170" rx="12" fill="#ede9fe"/>
<rect x="442" y="50" width="126" height="18" rx="4" fill="#7c3aed"/>
<text x="505" y="62" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Transparency</text>
<text x="628" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Can you understand why the AI decided?</text>
<text x="628" y="100" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Explainability: outputs should be traceable to reasoning, not just confidence</text>
<text x="628" y="116" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Uncertainty: the model should signal when it is guessing, not act certain</text>
<text x="628" y="132" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Model cards: documentation of training data, known limitations, test results</text>
<rect x="442" y="146" width="372" height="48" rx="6" fill="#ddd6fe"/>
<text x="628" y="164" text-anchor="middle" font-size="10" font-weight="600" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Ask: can it explain its reasoning? Does it signal uncertainty?</text>
<text x="628" y="180" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Techniques: chain-of-thought · attention visualisation · confidence scores</text>

<!-- ── PILLAR 3: Accountability (bottom-left, amber) ───── -->
<rect x="12" y="216" width="400" height="170" rx="12" fill="#fef3c7"/>
<rect x="26" y="230" width="126" height="18" rx="4" fill="#d97706"/>
<text x="89" y="242" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Accountability</text>
<text x="212" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Who is responsible when AI gets it wrong?</text>
<text x="212" y="280" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Human oversight: consequential decisions need a human in or on the loop</text>
<text x="212" y="296" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Audit trails: log AI decisions so they can be reviewed and challenged later</text>
<text x="212" y="312" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Governance policy: define which decisions AI can make autonomously</text>
<rect x="26" y="328" width="372" height="48" rx="6" fill="#fde68a"/>
<text x="212" y="346" text-anchor="middle" font-size="10" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>EU AI Act assigns accountability by risk tier — from minimal to high-risk</text>
<text x="212" y="362" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Practice: red-teaming · human review gates · incident reporting policies</text>

<!-- ── PILLAR 4: Safety & Alignment (bottom-right, green) -->
<rect x="428" y="216" width="400" height="170" rx="12" fill="#ecfdf5"/>
<rect x="442" y="230" width="126" height="18" rx="4" fill="#059669"/>
<text x="505" y="242" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Safety &amp; Alignment</text>
<text x="628" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Does the AI do what we actually intend?</text>
<text x="628" y="280" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Alignment: AI pursues intended goals, not literal or proxy instructions</text>
<text x="628" y="296" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Robustness: behaves correctly under adversarial or unexpected inputs</text>
<text x="628" y="312" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Guardrails: runtime filters for harmful, off-scope, or biased outputs</text>
<rect x="442" y="328" width="372" height="48" rx="6" fill="#bbf7d0"/>
<text x="628" y="346" text-anchor="middle" font-size="10" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Techniques: RLHF · Constitutional AI · red-teaming · output filtering</text>
<text x="628" y="362" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Frontier concern: as models grow more capable, alignment becomes harder</text>

<!-- ── BOTTOM: Three key questions ───────────────────── -->
<rect x="12" y="396" width="816" height="80" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
<text x="420" y="414" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Three questions to ask about any AI system making consequential decisions</text>

<rect x="26" y="422" width="250" height="44" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="151" y="441" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Could this system be biased</text>
<text x="151" y="456" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>against any group using it?</text>

<rect x="296" y="422" width="248" height="44" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="420" y="441" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Can you explain why it made</text>
<text x="420" y="456" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>this specific decision?</text>

<rect x="564" y="422" width="250" height="44" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="689" y="441" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Who is accountable when</text>
<text x="689" y="456" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>this system is wrong?</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="484" width="816" height="20" rx="6" fill="#059669"/>
<text x="420" y="498" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Responsible AI is not a constraint on capability — it is the foundation for sustained trust</text>

</svg>`;
