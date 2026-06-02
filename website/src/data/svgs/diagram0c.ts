export const diagram0c = `<svg width="100%" viewBox="0 0 840 568" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Three misconceptions that mislead AI buyers</title>
<desc>Three sections: base rate fallacy (accuracy vs precision), frozen weights (prediction vs understanding), and frozen deployment (no live learning).</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Three misconceptions that mislead AI buyers</text>

<!-- ── SECTION 1: Base rate fallacy ──────────────────────────────────── -->
<rect x="12" y="34" width="816" height="272" rx="12" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>

<rect x="26" y="48" width="126" height="18" rx="4" fill="#fee2e2" stroke="#fca5a5" stroke-width="0.5"/>
<text x="89" y="60" text-anchor="middle" font-size="10" font-weight="600" fill="#dc2626" font-family='"Anthropic Sans", -apple-system, sans-serif'>Misconception 1</text>
<text x="500" y="60" text-anchor="middle" font-size="11" font-weight="600" fill="#dc2626" font-family='"Anthropic Sans", -apple-system, sans-serif'>"More accuracy = better AI" — False</text>

<text x="420" y="80" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Accuracy is meaningless without knowing the base rate</text>
<text x="420" y="97" text-anchor="middle" font-size="10" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Scenario: 100,000 items classified · 1% actual positives (1,000 items) · 99% accurate model</text>

<!-- Column headers -->
<text x="316" y="117" text-anchor="middle" font-size="11" font-weight="600" fill="#374151" font-family='"Anthropic Sans", -apple-system, sans-serif'>Actually Positive</text>
<text x="638" y="117" text-anchor="middle" font-size="11" font-weight="600" fill="#374151" font-family='"Anthropic Sans", -apple-system, sans-serif'>Actually Negative</text>

<!-- Row labels -->
<text x="116" y="164" text-anchor="middle" font-size="10" font-weight="600" fill="#374151" font-family='"Anthropic Sans", -apple-system, sans-serif'>Flagged</text>
<text x="116" y="246" text-anchor="middle" font-size="10" font-weight="600" fill="#374151" font-family='"Anthropic Sans", -apple-system, sans-serif'>Not flagged</text>

<!-- TP -->
<g onclick="sendPrompt('What is a true positive in AI evaluation? Give me a practical example.')">
  <rect x="142" y="125" width="260" height="72" rx="6" fill="#d1fae5" style="cursor:pointer"/>
  <text x="272" y="160" text-anchor="middle" font-size="24" font-weight="700" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>990</text>
  <text x="272" y="183" text-anchor="middle" font-size="10" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>True Positives ✓</text>
</g>

<!-- FP -->
<g onclick="sendPrompt('What is the base rate fallacy in AI? Why do false positives flood the system when real events are rare?')">
  <rect x="420" y="125" width="392" height="72" rx="6" fill="#fee2e2" style="cursor:pointer"/>
  <text x="616" y="160" text-anchor="middle" font-size="24" font-weight="700" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>990</text>
  <text x="616" y="183" text-anchor="middle" font-size="10" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>False Positives ✗</text>
</g>

<!-- FN -->
<rect x="142" y="207" width="260" height="72" rx="6" fill="#fff7ed" stroke="#fed7aa" stroke-width="1"/>
<text x="272" y="242" text-anchor="middle" font-size="24" font-weight="700" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>10</text>
<text x="272" y="265" text-anchor="middle" font-size="10" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>False Negatives</text>

<!-- TN -->
<rect x="420" y="207" width="392" height="72" rx="6" fill="#eff6ff"/>
<text x="616" y="242" text-anchor="middle" font-size="24" font-weight="700" fill="#1e40af" font-family='"Anthropic Sans", -apple-system, sans-serif'>98,010</text>
<text x="616" y="265" text-anchor="middle" font-size="10" fill="#1e40af" font-family='"Anthropic Sans", -apple-system, sans-serif'>True Negatives ✓</text>

<!-- Insight bar -->
<rect x="26" y="289" width="800" height="10" rx="5" fill="#f59e0b"/>
<text x="420" y="301" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Precision = 50%: for every real positive found, the model produces one false alarm — this is the number that predicts real-world experience</text>

<!-- ── SECTION 2: Frozen weights (left) ────────────────────────────── -->
<rect x="12" y="316" width="400" height="140" rx="12" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>

<rect x="26" y="330" width="126" height="18" rx="4" fill="#ede9fe" stroke="#c4b5fd" stroke-width="0.5"/>
<text x="89" y="342" text-anchor="middle" font-size="10" font-weight="600" fill="#7c3aed" font-family='"Anthropic Sans", -apple-system, sans-serif'>Misconception 2</text>
<text x="270" y="342" text-anchor="middle" font-size="10" font-weight="600" fill="#7c3aed" font-family='"Anthropic Sans", -apple-system, sans-serif'>"AI knows things like a human" — False</text>

<text x="212" y="360" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Models predict from patterns — they don't understand</text>

<!-- Flow: Training data → Frozen weights → Output -->
<rect x="32" y="374" width="82" height="34" rx="6" fill="#ede9fe"/>
<text x="73" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>Training</text>
<text x="73" y="402" text-anchor="middle" font-size="9" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>data</text>

<text x="128" y="395" text-anchor="middle" font-size="14" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="142" y="374" width="82" height="34" rx="6" fill="#fef3c7"/>
<text x="183" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>Frozen</text>
<text x="183" y="402" text-anchor="middle" font-size="9" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>weights</text>

<text x="238" y="395" text-anchor="middle" font-size="14" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="252" y="374" width="82" height="34" rx="6" fill="#fee2e2"/>
<text x="293" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Probabilistic</text>
<text x="293" y="402" text-anchor="middle" font-size="9" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>output</text>

<text x="212" y="428" text-anchor="middle" font-size="10" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>No memory · No understanding · Confident wrong answers</text>
<text x="212" y="443" text-anchor="middle" font-size="10" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>are expected behaviour from a probabilistic system</text>

<!-- ── SECTION 3: No live learning (right) ─────────────────────────── -->
<rect x="428" y="316" width="400" height="140" rx="12" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>

<rect x="442" y="330" width="126" height="18" rx="4" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="0.5"/>
<text x="505" y="342" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>Misconception 3</text>
<text x="686" y="342" text-anchor="middle" font-size="10" font-weight="600" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>"AI keeps learning from me" — False</text>

<text x="628" y="360" text-anchor="middle" font-size="11" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Deployed models are frozen — retraining is on vendor schedule</text>

<!-- Timeline: Training cut-off → Deployed → You use → - - → Next training? -->
<rect x="448" y="374" width="72" height="34" rx="6" fill="#ede9fe"/>
<text x="484" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>Training</text>
<text x="484" y="402" text-anchor="middle" font-size="9" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>cut-off</text>

<text x="532" y="395" text-anchor="middle" font-size="14" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="546" y="374" width="72" height="34" rx="6" fill="#fef3c7"/>
<text x="582" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>Model</text>
<text x="582" y="402" text-anchor="middle" font-size="9" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>deployed</text>

<text x="630" y="395" text-anchor="middle" font-size="14" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="644" y="374" width="72" height="34" rx="6" fill="#f0f9ff"/>
<text x="680" y="389" text-anchor="middle" font-size="9" font-weight="600" fill="#0369a1" font-family='"Anthropic Sans", -apple-system, sans-serif'>You use</text>
<text x="680" y="402" text-anchor="middle" font-size="9" fill="#0369a1" font-family='"Anthropic Sans", -apple-system, sans-serif'>it</text>

<text x="730" y="389" text-anchor="middle" font-size="11" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>- - -</text>
<text x="776" y="384" text-anchor="middle" font-size="8" fill="#94a3b8" font-style="italic" font-family='"Anthropic Sans", -apple-system, sans-serif'>next training</text>
<text x="776" y="396" text-anchor="middle" font-size="8" fill="#94a3b8" font-style="italic" font-family='"Anthropic Sans", -apple-system, sans-serif'>run (someday)</text>

<text x="628" y="428" text-anchor="middle" font-size="10" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Your feedback flows to the next version — not the live model</text>
<text x="628" y="443" text-anchor="middle" font-size="10" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Ask: retraining cadence and what signal drives it</text>

<!-- ── BOTTOM BAR: Three questions ─────────────────────────────────── -->
<rect x="12" y="466" width="816" height="90" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
<text x="420" y="484" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Three questions to ask any AI vendor</text>

<rect x="26" y="492" width="250" height="54" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="151" y="512" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>What is the base rate in your</text>
<text x="151" y="526" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>real-world environment?</text>
<text x="151" y="540" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Calibrates precision expectations</text>

<rect x="295" y="492" width="250" height="54" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="420" y="512" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>What does it output when</text>
<text x="420" y="526" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>it doesn't know?</text>
<text x="420" y="540" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Surfaces hallucination and fallback behaviour</text>

<rect x="564" y="492" width="250" height="54" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="689" y="512" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>How often is the model retrained</text>
<text x="689" y="526" text-anchor="middle" font-size="10" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>and on what signal?</text>
<text x="689" y="540" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Identifies model freshness risk</text>

</svg>`;
