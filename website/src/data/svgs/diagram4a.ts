export const diagram4a = `<svg width="100%" viewBox="0 0 840 420" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Multimodal AI: One Model, Every Sense</title>
<desc>Flow diagram showing text, image, audio, and video inputs entering a unified transformer model, which produces text answers, generated images, transcripts, and cross-modal analysis as outputs.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Multimodal AI: One Model, Every Sense</text>

<!-- ── INPUTS (left panel) ──────────────────────────────── -->
<rect x="12" y="36" width="228" height="338" rx="12" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
<text x="126" y="54" text-anchor="middle" font-size="10" font-weight="600" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>INPUTS — what you can send</text>

<rect x="26" y="62" width="200" height="68" rx="8" fill="#ede9fe"/>
<text x="126" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>Text</text>
<text x="126" y="100" text-anchor="middle" font-size="9" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Questions, prompts, documents</text>
<text x="126" y="114" text-anchor="middle" font-size="9" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>instructions, code, structured data</text>

<rect x="26" y="140" width="200" height="68" rx="8" fill="#eff6ff"/>
<text x="126" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af" font-family='"Anthropic Sans", -apple-system, sans-serif'>Image</text>
<text x="126" y="178" text-anchor="middle" font-size="9" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Screenshots, photos, diagrams</text>
<text x="126" y="192" text-anchor="middle" font-size="9" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>charts, scanned docs, UI designs</text>

<rect x="26" y="218" width="200" height="68" rx="8" fill="#fef3c7"/>
<text x="126" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>Audio</text>
<text x="126" y="256" text-anchor="middle" font-size="9" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Meetings, voice notes, podcasts</text>
<text x="126" y="270" text-anchor="middle" font-size="9" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>customer calls, lecture recordings</text>

<rect x="26" y="296" width="200" height="68" rx="8" fill="#ecfdf5"/>
<text x="126" y="318" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>Video</text>
<text x="126" y="334" text-anchor="middle" font-size="9" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Screen recordings, demos, clips</text>
<text x="126" y="348" text-anchor="middle" font-size="9" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>tutorials, security footage, reviews</text>

<!-- ARROW left → center -->
<text x="252" y="213" text-anchor="middle" font-size="24" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- ── TRANSFORMER (center) ────────────────────────────── -->
<rect x="268" y="36" width="304" height="338" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
<text x="420" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Unified Transformer</text>
<text x="420" y="84" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Shared architecture processes all modalities in one model</text>

<rect x="284" y="96" width="272" height="42" rx="6" fill="#e2e8f0"/>
<text x="420" y="116" text-anchor="middle" font-size="10" font-weight="600" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Attention over all tokens simultaneously</text>
<text x="420" y="130" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Text, image, and audio tokens attend to each other</text>

<rect x="284" y="148" width="272" height="42" rx="6" fill="#e2e8f0"/>
<text x="420" y="168" text-anchor="middle" font-size="10" font-weight="600" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Shared embedding space</text>
<text x="420" y="182" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>All modalities mapped to one representation</text>

<rect x="284" y="200" width="272" height="42" rx="6" fill="#e2e8f0"/>
<text x="420" y="220" text-anchor="middle" font-size="10" font-weight="600" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cross-modal reasoning</text>
<text x="420" y="234" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>"Describe what's wrong with this chart" — text + image together</text>

<rect x="284" y="252" width="272" height="42" rx="6" fill="#e2e8f0"/>
<text x="420" y="272" text-anchor="middle" font-size="10" font-weight="600" fill="#334155" font-family='"Anthropic Sans", -apple-system, sans-serif'>Single API call — one request, one response</text>
<text x="420" y="286" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>No separate model per modality required</text>

<text x="420" y="326" text-anchor="middle" font-size="9" font-weight="600" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>GPT-4o · Gemini Ultra · Claude 3.7 Sonnet · Llama 3.2 Vision</text>
<text x="420" y="342" text-anchor="middle" font-size="9" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>2025: audio + video understanding mainstream across frontier models</text>

<!-- ARROW center → right -->
<text x="585" y="213" text-anchor="middle" font-size="24" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- ── OUTPUTS (right panel) ───────────────────────────── -->
<rect x="600" y="36" width="228" height="338" rx="12" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
<text x="714" y="54" text-anchor="middle" font-size="10" font-weight="600" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>OUTPUTS — what you receive</text>

<rect x="614" y="62" width="200" height="68" rx="8" fill="#ede9fe"/>
<text x="714" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9" font-family='"Anthropic Sans", -apple-system, sans-serif'>Text Answer</text>
<text x="714" y="100" text-anchor="middle" font-size="9" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Summaries, analysis, reasoning</text>
<text x="714" y="114" text-anchor="middle" font-size="9" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>structured reports, generated code</text>

<rect x="614" y="140" width="200" height="68" rx="8" fill="#eff6ff"/>
<text x="714" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af" font-family='"Anthropic Sans", -apple-system, sans-serif'>Generated Images</text>
<text x="714" y="178" text-anchor="middle" font-size="9" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Illustrations, UI mockups</text>
<text x="714" y="192" text-anchor="middle" font-size="9" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>visual explanations, diagrams</text>

<rect x="614" y="218" width="200" height="68" rx="8" fill="#fef3c7"/>
<text x="714" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>Transcript &amp; Speech</text>
<text x="714" y="256" text-anchor="middle" font-size="9" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Meeting notes, voiceovers</text>
<text x="714" y="270" text-anchor="middle" font-size="9" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>language translation, text-to-speech</text>

<rect x="614" y="296" width="200" height="68" rx="8" fill="#ecfdf5"/>
<text x="714" y="318" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cross-Modal Analysis</text>
<text x="714" y="334" text-anchor="middle" font-size="9" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>"Explain the trend in this chart"</text>
<text x="714" y="348" text-anchor="middle" font-size="9" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>"Who spoke at 3:22 in this recording?"</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="384" width="816" height="24" rx="8" fill="#1e40af"/>
<text x="420" y="400" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>One API call replaces a dozen specialised tools — text, image, audio and video unified under a single model</text>

</svg>`;
