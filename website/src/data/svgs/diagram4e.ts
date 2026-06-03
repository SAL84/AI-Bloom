export const diagram4e = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>AI Safety &amp; Alignment: Three Properties, Two Layers</title>
<desc>Diagram showing three properties of safe AI — Alignment, Robustness, Interpretability — and the two layers where safety is implemented: training time and runtime.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>AI Safety &amp; Alignment: Three Properties, Two Layers</text>

<!-- ── THREE PROPERTIES (top row) ───────────────────────── -->
<text x="420" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Three properties of a safe AI system</text>

<!-- Alignment (purple) -->
<rect x="12" y="60" width="268" height="148" rx="12" fill="#ede9fe"/>
<rect x="26" y="74" width="120" height="18" rx="4" fill="#7c3aed"/>
<text x="86" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Alignment</text>
<text x="146" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Does the AI do what we intend?</text>
<text x="146" y="128" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Pursues intended goals — not</text>
<text x="146" y="142" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>literal instructions or proxy metrics</text>
<rect x="26" y="156" width="240" height="42" rx="6" fill="#ddd6fe"/>
<text x="146" y="174" text-anchor="middle" font-size="9" font-weight="600" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Failure mode: reward hacking</text>
<text x="146" y="190" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Goodhart's Law in action</text>

<!-- Robustness (blue) -->
<rect x="288" y="60" width="268" height="148" rx="12" fill="#eff6ff"/>
<rect x="302" y="74" width="120" height="18" rx="4" fill="#2563eb"/>
<text x="362" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Robustness</text>
<text x="422" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Holds up under unexpected input?</text>
<text x="422" y="128" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Behaves correctly under adversarial</text>
<text x="422" y="142" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>or out-of-distribution inputs</text>
<rect x="302" y="156" width="240" height="42" rx="6" fill="#bfdbfe"/>
<text x="422" y="174" text-anchor="middle" font-size="9" font-weight="600" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Failure mode: jailbreak &amp; prompt injection</text>
<text x="422" y="190" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Tested via red-teaming</text>

<!-- Interpretability (amber) -->
<rect x="564" y="60" width="264" height="148" rx="12" fill="#fef3c7"/>
<rect x="578" y="74" width="120" height="18" rx="4" fill="#d97706"/>
<text x="638" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Interpretability</text>
<text x="696" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Can you understand why?</text>
<text x="696" y="128" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>If you can't see why it decided,</text>
<text x="696" y="142" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>you can't catch when it's wrong</text>
<rect x="578" y="156" width="236" height="42" rx="6" fill="#fde68a"/>
<text x="696" y="174" text-anchor="middle" font-size="9" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Required for audit &amp; oversight</text>
<text x="696" y="190" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Chain-of-thought · confidence scores</text>

<!-- ── TWO LAYERS (bottom row) ──────────────────────────── -->
<text x="420" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Two layers where safety is built in</text>

<!-- Training-time (left, green) -->
<rect x="12" y="244" width="404" height="186" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<rect x="26" y="258" width="170" height="20" rx="4" fill="#059669"/>
<text x="111" y="271" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Training-time safety</text>
<text x="214" y="294" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Properties baked into the weights</text>
<text x="214" y="312" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>By the time the model ships, these behaviours</text>
<text x="214" y="326" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>are part of how the model thinks</text>
<rect x="26" y="338" width="372" height="76" rx="6" fill="#bbf7d0"/>
<text x="214" y="358" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>SFT — instruction tuning on curated examples</text>
<text x="214" y="374" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>RLHF / DPO — shaped by human preferences</text>
<text x="214" y="390" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Constitutional AI — self-critique against principles</text>
<text x="214" y="406" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Red-teaming — adversarial probing before release</text>

<!-- Runtime (right, red) -->
<rect x="424" y="244" width="404" height="186" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<rect x="438" y="258" width="170" height="20" rx="4" fill="#dc2626"/>
<text x="523" y="271" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Runtime safety</text>
<text x="626" y="294" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Guardrails on the live model</text>
<text x="626" y="312" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Sits between the user and the model, filtering</text>
<text x="626" y="326" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>every request and every response</text>
<rect x="438" y="338" width="372" height="76" rx="6" fill="#fecaca"/>
<text x="626" y="358" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Output filters — catch harmful or off-scope content</text>
<text x="626" y="374" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Scope &amp; policy limits — define what's allowed</text>
<text x="626" y="390" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Prompt-injection defence — block adversarial inputs</text>
<text x="626" y="406" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>PII detection — redact sensitive data in transit</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="442" width="816" height="24" rx="8" fill="#059669"/>
<text x="420" y="458" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Neither layer is sufficient alone — frontier alignment is harder, not easier, as capability grows</text>

</svg>`;
