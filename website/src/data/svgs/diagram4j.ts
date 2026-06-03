export const diagram4j = `<svg width="100%" viewBox="0 0 840 480" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Robotics &amp; Automation: AI in the Physical World</title>
<desc>Diagram showing the robotic stack of perception, planning, and action; the four major categories of robotics deployment; and the foundation models now reshaping the field.</desc>

<!-- TITLE -->
<text x="420" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3d3d3a" font-family='"Anthropic Sans", -apple-system, "system-ui", "Segoe UI", sans-serif'>Robotics &amp; Automation: AI in the Physical World</text>

<!-- ── THE ROBOTIC STACK ────────────────────────────────── -->
<text x="420" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>The robotic stack — every robot runs this loop</text>

<rect x="40" y="60" width="232" height="68" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<rect x="54" y="74" width="92" height="18" rx="4" fill="#2563eb"/>
<text x="100" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Perception</text>
<text x="156" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>What is around me?</text>
<text x="156" y="120" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Cameras · LiDAR · IMUs · touch</text>

<text x="290" y="98" text-anchor="middle" font-size="18" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="304" y="60" width="232" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<rect x="318" y="74" width="92" height="18" rx="4" fill="#d97706"/>
<text x="364" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Planning</text>
<text x="420" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>What should I do next?</text>
<text x="420" y="120" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Goal · path · grasp · sequence</text>

<text x="554" y="98" text-anchor="middle" font-size="18" fill="#94a3b8" font-family='"Anthropic Sans", -apple-system, sans-serif'>→</text>

<rect x="568" y="60" width="232" height="68" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
<rect x="582" y="74" width="92" height="18" rx="4" fill="#059669"/>
<text x="628" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Action</text>
<text x="684" y="106" text-anchor="middle" font-size="9" font-weight="600" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>How do I move?</text>
<text x="684" y="120" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>Motors · grippers · wheels · joints</text>

<!-- Feedback loop arrow -->
<path d="M 156 132 Q 156 156 200 156 L 640 156 Q 684 156 684 132" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="5 3"/>
<text x="420" y="170" text-anchor="middle" font-size="9" font-style="italic" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Closed loop — sensors observe the result, the cycle repeats</text>

<!-- ── FOUR CATEGORIES (2x2 grid) ───────────────────────── -->
<text x="420" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>Where robotics lives today</text>

<!-- Industrial (purple) -->
<rect x="12" y="206" width="404" height="76" rx="10" fill="#ede9fe"/>
<rect x="26" y="220" width="140" height="18" rx="4" fill="#7c3aed"/>
<text x="96" y="232" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Industrial &amp; Warehouse</text>
<text x="214" y="252" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95" font-family='"Anthropic Sans", -apple-system, sans-serif'>Mature, profitable, scaling fast</text>
<text x="214" y="268" text-anchor="middle" font-size="9" fill="#3b0764" font-family='"Anthropic Sans", -apple-system, sans-serif'>Assembly · pick-and-place · Amazon fulfilment · cobots</text>

<!-- Autonomous Vehicles (blue) -->
<rect x="424" y="206" width="404" height="76" rx="10" fill="#eff6ff"/>
<rect x="438" y="220" width="140" height="18" rx="4" fill="#2563eb"/>
<text x="508" y="232" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Autonomous Vehicles</text>
<text x="626" y="252" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a" font-family='"Anthropic Sans", -apple-system, sans-serif'>From driver-assist to driverless service</text>
<text x="626" y="268" text-anchor="middle" font-size="9" fill="#172554" font-family='"Anthropic Sans", -apple-system, sans-serif'>Waymo · Tesla FSD · trucking · drones · delivery bots</text>

<!-- Humanoid (amber) -->
<rect x="12" y="290" width="404" height="76" rx="10" fill="#fef3c7"/>
<rect x="26" y="304" width="140" height="18" rx="4" fill="#d97706"/>
<text x="96" y="316" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Humanoid Robots</text>
<text x="214" y="336" text-anchor="middle" font-size="10" font-weight="700" fill="#78350f" font-family='"Anthropic Sans", -apple-system, sans-serif'>The 2025–2027 frontier</text>
<text x="214" y="352" text-anchor="middle" font-size="9" fill="#451a03" font-family='"Anthropic Sans", -apple-system, sans-serif'>Tesla Optimus · Figure · 1X · Boston Dynamics Atlas</text>

<!-- Service & Surgical (green) -->
<rect x="424" y="290" width="404" height="76" rx="10" fill="#ecfdf5"/>
<rect x="438" y="304" width="140" height="18" rx="4" fill="#059669"/>
<text x="508" y="316" text-anchor="middle" font-size="10" font-weight="600" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Service &amp; Surgical</text>
<text x="626" y="336" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Specialised, high-value, regulated</text>
<text x="626" y="352" text-anchor="middle" font-size="9" fill="#022c22" font-family='"Anthropic Sans", -apple-system, sans-serif'>da Vinci · cleaning &amp; delivery · agriculture · inspection</text>

<!-- ── FOUNDATION MODELS FOR ROBOTICS ──────────────────── -->
<rect x="12" y="376" width="816" height="60" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="1.5"/>
<text x="420" y="394" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b" font-family='"Anthropic Sans", -apple-system, sans-serif'>Foundation models for robotics — what LLMs did for text, VLAs are doing for action</text>
<text x="420" y="412" text-anchor="middle" font-size="9" fill="#475569" font-family='"Anthropic Sans", -apple-system, sans-serif'>RT-2 · PaLM-E · π0 · OpenVLA — vision-language-action models trained across robots and tasks</text>
<text x="420" y="426" text-anchor="middle" font-size="9" fill="#64748b" font-family='"Anthropic Sans", -apple-system, sans-serif'>The shift: from "program every behaviour" to "give the robot a goal in natural language"</text>

<!-- ── INSIGHT BAR ─────────────────────────────────────── -->
<rect x="12" y="448" width="816" height="22" rx="6" fill="#d97706"/>
<text x="420" y="463" text-anchor="middle" font-size="10" font-weight="700" fill="white" font-family='"Anthropic Sans", -apple-system, sans-serif'>Software ate the world — robotics is how AI now reaches it</text>

</svg>`;
