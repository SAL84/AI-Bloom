export const diagram4g = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>On-Device &amp; Open-Weight AI: Three Architectures, One Decision</title>
<desc>Diagram comparing three AI deployment architectures — on-device, self-hosted open-weight, and cloud frontier API — with their tradeoffs and the decision framework for choosing between them.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>On-Device &amp; Open-Weight AI: Three Architectures, One Decision</text>

<!-- ── THREE COLUMNS ────────────────────────────────────── -->

<!-- On-Device (left, green) -->
<rect x="12" y="42" width="268" height="316" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<rect x="26" y="56" width="120" height="20" rx="4" fill="#059669"/>
<text x="86" y="69" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>On-Device</text>
<text x="146" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Runs locally on your hardware</text>

<text x="146" y="118" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>WHO'S DOING IT</text>
<text x="146" y="132" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Apple Intelligence</text>
<text x="146" y="146" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Gemini Nano · Llama 3.2</text>
<text x="146" y="160" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Phi-4-mini on edge devices</text>

<rect x="26" y="172" width="240" height="80" rx="6" fill="#bbf7d0"/>
<text x="146" y="190" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>WINS ON</text>
<text x="146" y="206" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Privacy — data never leaves device</text>
<text x="146" y="222" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Latency — millisecond responses</text>
<text x="146" y="238" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Offline — no network required</text>

<text x="146" y="270" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>USE WHEN</text>
<text x="146" y="286" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Data sensitivity is highest</text>
<text x="146" y="302" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Sub-50ms latency required</text>
<text x="146" y="318" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Intermittent connectivity</text>
<text x="146" y="342" text-anchor="middle" font-size="9" font-style="italic" fill="#065f46" font-family='"Anthropic Sans", -apple-system, sans-serif'>Trade-off: capped capability</text>

<!-- Self-hosted Open-Weight (centre, amber) -->
<rect x="288" y="42" width="264" height="316" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<rect x="302" y="56" width="180" height="20" rx="4" fill="#d97706"/>
<text x="392" y="69" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Self-Hosted Open-Weight</text>
<text x="420" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>Your infrastructure, public weights</text>

<text x="420" y="118" text-anchor="middle" font-size="9" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>WHO'S DOING IT</text>
<text x="420" y="132" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Llama 3 (8B / 70B)</text>
<text x="420" y="146" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Mistral · Mixtral · Phi-4</text>
<text x="420" y="160" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Qwen — frontier-competitive</text>

<rect x="302" y="172" width="236" height="80" rx="6" fill="#fde68a"/>
<text x="420" y="190" text-anchor="middle" font-size="9" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>WINS ON</text>
<text x="420" y="206" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>No vendor lock-in or licence fees</text>
<text x="420" y="222" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Fine-tune freely on your own data</text>
<text x="420" y="238" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Data residency &amp; sovereignty solved</text>

<text x="420" y="270" text-anchor="middle" font-size="9" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>USE WHEN</text>
<text x="420" y="286" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Regulation forbids third-party data</text>
<text x="420" y="302" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>API cost &gt; self-hosted break-even</text>
<text x="420" y="318" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Fine-tuning is core to the product</text>
<text x="420" y="342" text-anchor="middle" font-size="9" font-style="italic" fill="#92400e" font-family='"Anthropic Sans", -apple-system, sans-serif'>Trade-off: operate the GPU stack</text>

<!-- Cloud Frontier API (right, blue) -->
<rect x="560" y="42" width="268" height="316" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<rect x="574" y="56" width="160" height="20" rx="4" fill="#2563eb"/>
<text x="654" y="69" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cloud Frontier API</text>
<text x="694" y="94" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>Vendor-hosted, max capability</text>

<text x="694" y="118" text-anchor="middle" font-size="9" font-weight="600" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>WHO'S DOING IT</text>
<text x="694" y="132" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>OpenAI · Anthropic</text>
<text x="694" y="146" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Google · xAI</text>
<text x="694" y="160" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Frontier model APIs</text>

<rect x="574" y="172" width="240" height="80" rx="6" fill="#bfdbfe"/>
<text x="694" y="190" text-anchor="middle" font-size="9" font-weight="600" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>WINS ON</text>
<text x="694" y="206" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Frontier capability &amp; reasoning</text>
<text x="694" y="222" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>No infrastructure to run</text>
<text x="694" y="238" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Fast iteration via API change</text>

<text x="694" y="270" text-anchor="middle" font-size="9" font-weight="600" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>USE WHEN</text>
<text x="694" y="286" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>You need top-of-frontier quality</text>
<text x="694" y="302" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Volume below break-even</text>
<text x="694" y="318" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Data sensitivity is manageable</text>
<text x="694" y="342" text-anchor="middle" font-size="9" font-style="italic" fill="#1e40af" font-family='"Anthropic Sans", -apple-system, sans-serif'>Trade-off: data leaves your boundary</text>

<!-- ── HYBRID PATTERN BANNER ────────────────────────────── -->
<rect x="12" y="372" width="816" height="64" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="1"/>
<text x="420" y="392" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>The 2026 default: hybrid</text>
<text x="420" y="410" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>On-device or open-weight for sensitive &amp; routine work · cloud frontier for the hard cases that need maximum capability</text>
<text x="420" y="426" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Route by data sensitivity, task complexity, and cost — not by vendor relationship</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="444" width="816" height="24" rx="8" fill="#059669"/>
<text x="420" y="460" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cloud-only is no longer the default — data sovereignty objections now have technical answers</text>

</svg>`;
