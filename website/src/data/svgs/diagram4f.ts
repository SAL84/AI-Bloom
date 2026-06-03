export const diagram4f = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Agentic AI Goes Mainstream: From Copilot to Autonomous Agent</title>
<desc>Diagram showing the trust spectrum from copilot to fully autonomous agent, the multi-agent orchestrator pattern, and the production reliability stack required for agents that actually work.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Agentic AI Goes Mainstream: Trust Spectrum &amp; Production Stack</text>

<!-- ── TRUST SPECTRUM (top row) ─────────────────────────── -->
<text x="420" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Trust spectrum — from assisting humans to acting on their behalf</text>

<!-- Copilot (purple) -->
<rect x="12" y="60" width="196" height="118" rx="12" fill="#ede9fe"/>
<rect x="26" y="74" width="100" height="18" rx="4" fill="#7c3aed"/>
<text x="76" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Copilot</text>
<text x="110" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Suggests, human decides</text>
<text x="110" y="126" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>"Help me write this email"</text>
<text x="110" y="142" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Human writes, AI assists</text>
<text x="110" y="158" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Every action is approved</text>

<text x="218" y="123" text-anchor="middle" font-size="20" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Human-in-loop (blue) -->
<rect x="232" y="60" width="172" height="118" rx="12" fill="#eff6ff"/>
<rect x="246" y="74" width="116" height="18" rx="4" fill="#2563eb"/>
<text x="304" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Human-in-loop</text>
<text x="318" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>AI proposes, human approves</text>
<text x="318" y="126" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Agent plans, gates pause</text>
<text x="318" y="142" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>for confirmation on actions</text>
<text x="318" y="158" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Safe default for new agents</text>

<text x="414" y="123" text-anchor="middle" font-size="20" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Human-on-loop (amber) -->
<rect x="428" y="60" width="172" height="118" rx="12" fill="#fef3c7"/>
<rect x="442" y="74" width="116" height="18" rx="4" fill="#d97706"/>
<text x="500" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Human-on-loop</text>
<text x="514" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>AI acts, human reviews</text>
<text x="514" y="126" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Agent acts autonomously,</text>
<text x="514" y="142" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>humans audit outcomes</text>
<text x="514" y="158" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Most production agents in 2026</text>

<text x="610" y="123" text-anchor="middle" font-size="20" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<!-- Autonomous (red) -->
<rect x="624" y="60" width="204" height="118" rx="12" fill="#fee2e2"/>
<rect x="638" y="74" width="120" height="18" rx="4" fill="#dc2626"/>
<text x="698" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Autonomous</text>
<text x="726" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b" font-family='"Anthropic Sans", -apple-system, sans-serif'>AI acts independently</text>
<text x="726" y="126" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>No per-action review;</text>
<text x="726" y="142" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>audited periodically</text>
<text x="726" y="158" text-anchor="middle" font-size="9" fill="#7f1d1d" font-family='"Anthropic Sans", -apple-system, sans-serif'>Reserved for low-stakes &amp; reversible</text>

<!-- ── MULTI-AGENT ARCHITECTURE ─────────────────────────── -->
<text x="420" y="206" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Multi-agent: orchestrator delegates to specialist sub-agents</text>

<!-- Orchestrator (centre, slate) -->
<rect x="320" y="220" width="200" height="48" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
<text x="420" y="240" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Orchestrator Agent</text>
<text x="420" y="256" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Plans tasks · routes to specialists · synthesises results</text>

<!-- Connector lines -->
<line x1="370" y1="268" x2="120" y2="290" stroke="#94a3b8" stroke-width="1"/>
<line x1="420" y1="268" x2="420" y2="290" stroke="#94a3b8" stroke-width="1"/>
<line x1="470" y1="268" x2="720" y2="290" stroke="#94a3b8" stroke-width="1"/>

<!-- Sub-agents (3 specialist tiles) -->
<rect x="36" y="290" width="168" height="46" rx="8" fill="#ede9fe"/>
<text x="120" y="308" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Threat Intel Agent</text>
<text x="120" y="324" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Enriches with IOC context</text>

<rect x="336" y="290" width="168" height="46" rx="8" fill="#eff6ff"/>
<text x="420" y="308" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>EDR Agent</text>
<text x="420" y="324" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Queries endpoint telemetry</text>

<rect x="636" y="290" width="168" height="46" rx="8" fill="#ecfdf5"/>
<text x="720" y="308" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>IAM Agent</text>
<text x="720" y="324" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Inspects identity &amp; access</text>

<text x="420" y="354" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Each agent gets least-privilege tool access — MCP / A2A protocols handle discovery and delegation</text>

<!-- ── PRODUCTION RELIABILITY STACK ─────────────────────── -->
<rect x="12" y="366" width="816" height="72" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
<text x="420" y="384" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Production reliability — what separates demos from systems that actually work</text>

<rect x="26" y="394" width="156" height="34" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="104" y="408" text-anchor="middle" font-size="9" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Tracing</text>
<text x="104" y="421" text-anchor="middle" font-size="8" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>every call &amp; result</text>

<rect x="194" y="394" width="156" height="34" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="272" y="408" text-anchor="middle" font-size="9" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>State &amp; resume</text>
<text x="272" y="421" text-anchor="middle" font-size="8" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>no restarts from zero</text>

<rect x="362" y="394" width="156" height="34" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="440" y="408" text-anchor="middle" font-size="9" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Retry &amp; backoff</text>
<text x="440" y="421" text-anchor="middle" font-size="8" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>partial failure resilience</text>

<rect x="530" y="394" width="148" height="34" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="604" y="408" text-anchor="middle" font-size="9" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Escalation</text>
<text x="604" y="421" text-anchor="middle" font-size="8" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>pause &amp; ask when unsure</text>

<rect x="690" y="394" width="124" height="34" rx="6" fill="white" stroke="#e2e8f0" stroke-width="1"/>
<text x="752" y="408" text-anchor="middle" font-size="9" font-weight="600" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Rollback</text>
<text x="752" y="421" text-anchor="middle" font-size="8" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>undo destructive acts</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="446" width="816" height="22" rx="6" fill="#2563eb"/>
<text x="420" y="461" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>The qualitative shift: from approving every keystroke to reviewing outcomes — governance moves to the audit layer</text>

</svg>`;
