import type { Course } from '../../types/course';

// ── Inline SVG diagrams for kids ─────────────────────────────────────────────

const SVG_ROBOT_LEARNER = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Books stack -->
  <rect x="30" y="180" width="100" height="16" rx="4" fill="#f87171"/>
  <rect x="35" y="162" width="90" height="16" rx="4" fill="#fb923c"/>
  <rect x="40" y="144" width="80" height="16" rx="4" fill="#facc15"/>
  <!-- Robot body -->
  <rect x="180" y="120" width="120" height="100" rx="16" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- Robot head -->
  <rect x="195" y="70" width="90" height="72" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- Eyes -->
  <circle cx="220" cy="100" r="10" fill="#1d4ed8"/>
  <circle cx="260" cy="100" r="10" fill="#1d4ed8"/>
  <circle cx="223" cy="97" r="4" fill="#fff"/>
  <circle cx="263" cy="97" r="4" fill="#fff"/>
  <!-- Smile -->
  <path d="M215 118 Q240 132 265 118" stroke="#1d4ed8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Antenna -->
  <line x1="240" y1="70" x2="240" y2="48" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="240" cy="42" r="7" fill="#60a5fa"/>
  <!-- Arms -->
  <rect x="145" y="130" width="35" height="16" rx="8" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
  <rect x="300" y="130" width="35" height="16" rx="8" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
  <!-- Legs -->
  <rect x="205" y="220" width="30" height="28" rx="8" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
  <rect x="245" y="220" width="30" height="28" rx="8" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
  <!-- Data dots flying to robot -->
  <circle cx="390" cy="90" r="7" fill="#a78bfa"/>
  <circle cx="430" cy="130" r="5" fill="#34d399"/>
  <circle cx="460" cy="80" r="6" fill="#f87171"/>
  <circle cx="500" cy="110" r="8" fill="#facc15"/>
  <circle cx="415" cy="170" r="5" fill="#60a5fa"/>
  <!-- Arrows pointing to robot -->
  <line x1="382" y1="95" x2="345" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr-kids1)"/>
  <line x1="420" y1="138" x2="360" y2="155" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arr-kids1)"/>
  <defs>
    <marker id="arr-kids1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <!-- Labels -->
  <text x="80" y="135" text-anchor="middle" font-size="11" fill="#64748b">Billions of examples</text>
  <text x="402" y="82" font-size="11" fill="#7c3aed">Images</text>
  <text x="442" y="128" font-size="11" fill="#059669">Text</text>
  <text x="472" y="74" font-size="11" fill="#dc2626">Code</text>
  <text x="514" y="108" font-size="11" fill="#b45309">Data</text>
  <!-- Title -->
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI learns from millions of examples</text>
</svg>`;

const SVG_CHATBOT = `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- User bubble -->
  <rect x="30" y="40" width="200" height="60" rx="18" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="50,100 70,100 50,120" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="65" text-anchor="middle" font-size="12" fill="#0369a1" font-weight="600">You type a question</text>
  <text x="130" y="82" text-anchor="middle" font-size="11" fill="#0284c7">"What is a black hole?"</text>
  <!-- Arrow right -->
  <line x1="240" y1="90" x2="310" y2="90" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-chat)"/>
  <!-- Robot -->
  <rect x="310" y="60" width="60" height="60" rx="14" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="327" cy="84" r="6" fill="#7c3aed"/>
  <circle cx="343" cy="84" r="6" fill="#7c3aed"/>
  <path d="M322 98 Q335 108 348 98" stroke="#7c3aed" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="340" y="140" text-anchor="middle" font-size="10" fill="#6d28d9">AI Chatbot</text>
  <!-- Arrow right -->
  <line x1="378" y1="90" x2="448" y2="90" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-chat)"/>
  <!-- AI bubble -->
  <rect x="330" y="155" width="200" height="65" rx="18" fill="#d1fae5" stroke="#34d399" stroke-width="2"/>
  <polygon points="350,155 370,155 350,135" fill="#d1fae5" stroke="#34d399" stroke-width="2"/>
  <text x="430" y="180" text-anchor="middle" font-size="12" fill="#065f46" font-weight="600">AI answers back</text>
  <text x="430" y="197" text-anchor="middle" font-size="10" fill="#047857">"A black hole is a region</text>
  <text x="430" y="211" text-anchor="middle" font-size="10" fill="#047857">of space where gravity..."</text>
  <!-- Caution -->
  <rect x="30" y="170" width="185" height="48" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="45" y="190" font-size="11" fill="#92400e" font-weight="600">⚠ Always check!</text>
  <text x="45" y="207" font-size="10" fill="#78350f">AI can sound confident</text>
  <text x="45" y="219" font-size="10" fill="#78350f">but still be wrong.</text>
  <defs>
    <marker id="arr-chat" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">How a chatbot conversation works</text>
</svg>`;

const SVG_AGENT_LOOP = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Center robot -->
  <rect x="220" y="95" width="120" height="80" rx="16" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
  <circle cx="252" cy="123" r="9" fill="#7c3aed"/>
  <circle cx="308" cy="123" r="9" fill="#7c3aed"/>
  <path d="M248 140 Q280 154 312 140" stroke="#7c3aed" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="280" y="188" text-anchor="middle" font-size="11" fill="#6d28d9" font-weight="600">AI Agent</text>
  <!-- THINK -->
  <rect x="30" y="30" width="120" height="52" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="90" y="53" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8">🧠 THINK</text>
  <text x="90" y="71" text-anchor="middle" font-size="10" fill="#1e40af">What should I do next?</text>
  <!-- ACT -->
  <rect x="410" y="30" width="120" height="52" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="470" y="53" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">⚡ ACT</text>
  <text x="470" y="71" text-anchor="middle" font-size="10" fill="#047857">Search · Write · Click</text>
  <!-- OBSERVE -->
  <rect x="30" y="178" width="120" height="52" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="90" y="201" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">👀 OBSERVE</text>
  <text x="90" y="219" text-anchor="middle" font-size="10" fill="#78350f">What happened?</text>
  <!-- DONE -->
  <rect x="410" y="178" width="120" height="52" rx="12" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="470" y="201" text-anchor="middle" font-size="13" font-weight="700" fill="#9d174d">✅ DONE</text>
  <text x="470" y="219" text-anchor="middle" font-size="10" fill="#be185d">Goal achieved!</text>
  <!-- Arrows -->
  <path d="M150 55 Q200 55 220 115" stroke="#3b82f6" stroke-width="2" fill="none" stroke-dasharray="6,3" marker-end="url(#arr-agent)"/>
  <path d="M340 115 Q380 55 410 55" stroke="#10b981" stroke-width="2" fill="none" stroke-dasharray="6,3" marker-end="url(#arr-agent)"/>
  <path d="M340 155 Q380 205 410 205" stroke="#ec4899" stroke-width="2" fill="none" stroke-dasharray="6,3" marker-end="url(#arr-agent)"/>
  <path d="M220 155 Q180 205 150 205" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="6,3" marker-end="url(#arr-agent)"/>
  <path d="M90 178 Q90 120 90 82" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="4,3" marker-end="url(#arr-agent)"/>
  <defs>
    <marker id="arr-agent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">The Agent Loop — how AI agents solve problems</text>
</svg>`;

const SVG_CAREERS = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Card 1: Engineer -->
  <rect x="20" y="50" width="100" height="120" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="90" text-anchor="middle" font-size="28">⚙️</text>
  <text x="70" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">AI</text>
  <text x="70" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Engineer</text>
  <text x="70" y="148" text-anchor="middle" font-size="9" fill="#1e40af">Builds AI</text>
  <text x="70" y="160" text-anchor="middle" font-size="9" fill="#1e40af">systems</text>
  <!-- Card 2: Ethicist -->
  <rect x="135" y="50" width="100" height="120" rx="14" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="185" y="90" text-anchor="middle" font-size="28">⚖️</text>
  <text x="185" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">AI</text>
  <text x="185" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Ethicist</text>
  <text x="185" y="148" text-anchor="middle" font-size="9" fill="#047857">Keeps AI</text>
  <text x="185" y="160" text-anchor="middle" font-size="9" fill="#047857">fair &amp; safe</text>
  <!-- Card 3: Data Scientist -->
  <rect x="250" y="50" width="100" height="120" rx="14" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="300" y="90" text-anchor="middle" font-size="28">📊</text>
  <text x="300" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">Data</text>
  <text x="300" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">Scientist</text>
  <text x="300" y="148" text-anchor="middle" font-size="9" fill="#5b21b6">Finds patterns</text>
  <text x="300" y="160" text-anchor="middle" font-size="9" fill="#5b21b6">in data</text>
  <!-- Card 4: Product Manager -->
  <rect x="365" y="50" width="100" height="120" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="415" y="90" text-anchor="middle" font-size="28">🎯</text>
  <text x="415" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">AI Product</text>
  <text x="415" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Manager</text>
  <text x="415" y="148" text-anchor="middle" font-size="9" fill="#78350f">Decides what</text>
  <text x="415" y="160" text-anchor="middle" font-size="9" fill="#78350f">AI to build</text>
  <!-- Card 5: You -->
  <rect x="480" y="50" width="62" height="120" rx="14" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="511" y="90" text-anchor="middle" font-size="28">🌟</text>
  <text x="511" y="119" text-anchor="middle" font-size="11" font-weight="700" fill="#9d174d">YOU?</text>
  <text x="511" y="148" text-anchor="middle" font-size="9" fill="#be185d">Any</text>
  <text x="511" y="160" text-anchor="middle" font-size="9" fill="#be185d">field!</text>
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI careers — there's a role for everyone</text>
  <text x="280" y="200" text-anchor="middle" font-size="10" fill="#64748b">Medicine · Music · Law · Gaming · Education — AI is in all of them</text>
</svg>`;

const SVG_CYBERSAFETY = `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Shield -->
  <path d="M280 30 L380 70 L380 150 Q380 210 280 230 Q180 210 180 150 L180 70 Z" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
  <path d="M280 50 L360 82 L360 150 Q360 198 280 216 Q200 198 200 150 L200 82 Z" fill="#bfdbfe" stroke="#60a5fa" stroke-width="1.5"/>
  <!-- Lock -->
  <rect x="255" y="120" width="50" height="40" rx="8" fill="#1d4ed8"/>
  <path d="M263 120 L263 108 Q263 90 280 90 Q297 90 297 108 L297 120" stroke="#1d4ed8" stroke-width="5" fill="none" stroke-linecap="round"/>
  <circle cx="280" cy="138" r="6" fill="#bfdbfe"/>
  <!-- Don't share labels -->
  <rect x="20" y="40" width="140" height="40" rx="10" fill="#fee2e2" stroke="#f87171" stroke-width="1.5"/>
  <text x="90" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">🚫 Don't share</text>
  <text x="90" y="72" text-anchor="middle" font-size="10" fill="#b91c1c">passwords or home address</text>
  <rect x="20" y="100" width="140" height="40" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="90" y="117" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">⚠ Think first</text>
  <text x="90" y="132" text-anchor="middle" font-size="10" fill="#78350f">before sharing personal info</text>
  <rect x="20" y="160" width="140" height="40" rx="10" fill="#fee2e2" stroke="#f87171" stroke-width="1.5"/>
  <text x="90" y="177" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">🚫 Not real</text>
  <text x="90" y="192" text-anchor="middle" font-size="10" fill="#b91c1c">AI images can be fake</text>
  <!-- Safe labels -->
  <rect x="400" y="40" width="140" height="40" rx="10" fill="#d1fae5" stroke="#34d399" stroke-width="1.5"/>
  <text x="470" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">✅ Always OK</text>
  <text x="470" y="72" text-anchor="middle" font-size="10" fill="#047857">ask questions &amp; learn</text>
  <rect x="400" y="100" width="140" height="40" rx="10" fill="#d1fae5" stroke="#34d399" stroke-width="1.5"/>
  <text x="470" y="117" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">✅ Smart move</text>
  <text x="470" y="132" text-anchor="middle" font-size="10" fill="#047857">double-check AI answers</text>
  <rect x="400" y="160" width="140" height="40" rx="10" fill="#d1fae5" stroke="#34d399" stroke-width="1.5"/>
  <text x="470" y="177" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">✅ Tell a trusted adult</text>
  <text x="470" y="192" text-anchor="middle" font-size="10" fill="#047857">if something feels wrong</text>
  <text x="280" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Your AI Safety Shield</text>
</svg>`;

const SVG_DEEPFAKE = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Real photo frame -->
  <rect x="30" y="50" width="180" height="140" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="2.5"/>
  <text x="120" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#15803d">REAL ✅</text>
  <circle cx="120" cy="110" r="45" fill="#bbf7d0" stroke="#22c55e" stroke-width="2"/>
  <circle cx="107" cy="98" r="7" fill="#15803d"/>
  <circle cx="133" cy="98" r="7" fill="#15803d"/>
  <path d="M103 125 Q120 138 137 125" stroke="#15803d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="120" y="172" text-anchor="middle" font-size="10" fill="#166534">Taken by a real camera</text>
  <!-- VS -->
  <text x="280" y="130" text-anchor="middle" font-size="20" font-weight="900" fill="#64748b">VS</text>
  <!-- Fake photo frame -->
  <rect x="350" y="50" width="180" height="140" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="440" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#be123c">DEEPFAKE ❌</text>
  <circle cx="440" cy="110" r="45" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
  <circle cx="427" cy="98" r="7" fill="#be123c"/>
  <circle cx="453" cy="98" r="7" fill="#be123c"/>
  <path d="M427 128 Q440 118 453 128" stroke="#be123c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Glitch lines on fake -->
  <line x1="370" y1="80" x2="510" y2="80" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,8" opacity="0.5"/>
  <line x1="370" y1="100" x2="510" y2="100" stroke="#f43f5e" stroke-width="1" stroke-dasharray="8,4" opacity="0.3"/>
  <line x1="370" y1="140" x2="510" y2="140" stroke="#f43f5e" stroke-width="1" stroke-dasharray="4,8" opacity="0.5"/>
  <text x="440" y="172" text-anchor="middle" font-size="10" fill="#9f1239">Made by AI — never existed</text>
  <!-- Tips -->
  <text x="280" y="210" text-anchor="middle" font-size="10" fill="#64748b">Tip: look for blurry edges, weird backgrounds, unnatural eyes</text>
  <text x="280" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Real vs Deepfake — can you tell the difference?</text>
</svg>`;

const SVG_TIMELINE = `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI through the decades</text>
  <line x1="40" y1="100" x2="520" y2="100" stroke="#cbd5e1" stroke-width="3"/>
  <circle cx="80" cy="100" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="80" y="96" text-anchor="middle" font-size="16">💡</text>
  <text x="80" y="108" text-anchor="middle" font-size="8" fill="#92400e" font-weight="700">1950s</text>
  <text x="80" y="140" text-anchor="middle" font-size="9" fill="#64748b">First ideas</text>
  <circle cx="200" cy="100" r="22" fill="#fee2e2" stroke="#f87171" stroke-width="2.5"/>
  <text x="200" y="96" text-anchor="middle" font-size="16">♟️</text>
  <text x="200" y="108" text-anchor="middle" font-size="8" fill="#991b1b" font-weight="700">1980s</text>
  <text x="200" y="140" text-anchor="middle" font-size="9" fill="#64748b">Chess AI</text>
  <circle cx="310" cy="100" r="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="310" y="96" text-anchor="middle" font-size="16">👁️</text>
  <text x="310" y="108" text-anchor="middle" font-size="8" fill="#1d4ed8" font-weight="700">2012</text>
  <text x="310" y="140" text-anchor="middle" font-size="9" fill="#64748b">Sees images!</text>
  <circle cx="410" cy="100" r="22" fill="#d1fae5" stroke="#10b981" stroke-width="2.5"/>
  <text x="410" y="96" text-anchor="middle" font-size="16">📖</text>
  <text x="410" y="108" text-anchor="middle" font-size="8" fill="#065f46" font-weight="700">2017</text>
  <text x="410" y="140" text-anchor="middle" font-size="9" fill="#64748b">Reads text!</text>
  <circle cx="500" cy="100" r="22" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="500" y="96" text-anchor="middle" font-size="16">🤖</text>
  <text x="500" y="108" text-anchor="middle" font-size="8" fill="#6d28d9" font-weight="700">2022</text>
  <text x="500" y="140" text-anchor="middle" font-size="9" fill="#64748b">ChatGPT!</text>
  <text x="80" y="65" text-anchor="middle" font-size="8" fill="#94a3b8">Start</text>
  <text x="500" y="65" text-anchor="middle" font-size="8" fill="#94a3b8">Now</text>
  <text x="280" y="180" text-anchor="middle" font-size="10" fill="#64748b">Each era brought a new breakthrough that changed everything</text>
</svg>`;

const SVG_HOW_AI_LEARNS = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">How AI learns: show it enough examples!</text>
  <rect x="20" y="40" width="130" height="140" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="85" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Lots of pictures</text>
  <text x="45" y="90" font-size="22">🐱</text><text x="85" y="90" font-size="22">🐱</text><text x="125" y="90" font-size="22">🐱</text>
  <text x="45" y="120" font-size="22">🐱</text><text x="85" y="120" font-size="22">🐱</text><text x="125" y="120" font-size="22">🐱</text>
  <text x="85" y="155" text-anchor="middle" font-size="10" fill="#78350f">All labelled "cat"</text>
  <path d="M158 110 L200 110" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arr-learn)"/>
  <rect x="208" y="60" width="144" height="100" rx="16" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="262" cy="100" r="12" fill="#1d4ed8"/><circle cx="298" cy="100" r="12" fill="#1d4ed8"/>
  <circle cx="265" cy="97" r="4" fill="#fff"/><circle cx="301" cy="97" r="4" fill="#fff"/>
  <path d="M256 118 Q280 130 304 118" stroke="#1d4ed8" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="280" y="145" text-anchor="middle" font-size="10" fill="#1e40af">AI brain learning…</text>
  <path d="M360 110 L402 110" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arr-learn)"/>
  <rect x="408" y="60" width="132" height="100" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="474" y="95" text-anchor="middle" font-size="30">🐱</text>
  <text x="474" y="122" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">"That's a cat!"</text>
  <text x="474" y="140" text-anchor="middle" font-size="10" fill="#047857">✅ Correct!</text>
  <defs><marker id="arr-learn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
  <text x="280" y="200" text-anchor="middle" font-size="10" fill="#64748b">After billions of examples, AI gets very good at recognising patterns</text>
</svg>`;

const SVG_AI_ML_DL = `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- All ellipses drawn first so text always renders on top -->
  <ellipse cx="280" cy="118" rx="255" ry="105" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
  <ellipse cx="280" cy="140" rx="185" ry="75" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <ellipse cx="280" cy="158" rx="110" ry="46" fill="#d1fae5" stroke="#10b981" stroke-width="2.5"/>
  <!-- AI label — in the yellow ring above ML top (140−75=65) -->
  <text x="280" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#92400e">🤖 Artificial Intelligence</text>
  <text x="280" y="46" text-anchor="middle" font-size="10" fill="#78350f">Anything that makes a machine seem smart</text>
  <!-- ML label — in the blue ring above DL top (158−46=112) -->
  <text x="280" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="#1d4ed8">📊 Machine Learning</text>
  <text x="280" y="96" text-anchor="middle" font-size="10" fill="#1e40af">AI that learns from examples</text>
  <!-- DL label — inside green ellipse -->
  <text x="280" y="152" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">🧠 Deep Learning</text>
  <text x="280" y="168" text-anchor="middle" font-size="10" fill="#047857">Uses layers of virtual neurons</text>
  <text x="280" y="240" text-anchor="middle" font-size="10" fill="#64748b">ChatGPT, Claude and Gemini are all inside Deep Learning</text>
</svg>`;

const SVG_HALLUCINATION = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Why AI sometimes makes things up</text>
  <rect x="30" y="45" width="220" height="70" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="140" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">😊 You ask:</text>
  <text x="140" y="86" text-anchor="middle" font-size="11" fill="#1e40af">"Who invented</text>
  <text x="140" y="100" text-anchor="middle" font-size="11" fill="#1e40af">the telephone?"</text>
  <rect x="30" y="135" width="220" height="60" rx="14" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="140" y="157" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">✅ Confident answer:</text>
  <text x="140" y="173" text-anchor="middle" font-size="11" fill="#047857">"Alexander Graham Bell"</text>
  <text x="140" y="188" text-anchor="middle" font-size="9" fill="#047857">(This is actually correct!)</text>
  <rect x="310" y="45" width="220" height="70" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="420" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">😊 You ask:</text>
  <text x="420" y="86" text-anchor="middle" font-size="11" fill="#1e40af">"What books did</text>
  <text x="420" y="100" text-anchor="middle" font-size="11" fill="#1e40af">Einstein write?"</text>
  <rect x="310" y="135" width="220" height="60" rx="14" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="420" y="157" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">❌ Still confident:</text>
  <text x="420" y="173" text-anchor="middle" font-size="11" fill="#b91c1c">"The Theory of Everything"</text>
  <text x="420" y="188" text-anchor="middle" font-size="9" fill="#9f1239">(That book doesn't exist!)</text>
  <text x="280" y="210" text-anchor="middle" font-size="10" fill="#64748b">AI always sounds confident — even when it's wrong. Always check important facts!</text>
</svg>`;

const SVG_PROMPTING = `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Better question = better answer</text>
  <rect x="20" y="40" width="240" height="70" rx="12" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="140" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">😐 Vague prompt</text>
  <text x="140" y="76" text-anchor="middle" font-size="12" font-weight="600" fill="#b91c1c">"Tell me about space"</text>
  <rect x="20" y="125" width="240" height="60" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="10" fill="#78350f">AI gives a very general, long</text>
  <text x="140" y="159" text-anchor="middle" font-size="10" fill="#78350f">answer about everything in space.</text>
  <text x="140" y="174" text-anchor="middle" font-size="9" fill="#92400e">Not very useful 😕</text>
  <rect x="300" y="40" width="240" height="70" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="420" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">🌟 Good prompt</text>
  <text x="420" y="74" text-anchor="middle" font-size="10" font-weight="600" fill="#047857">"Explain black holes in 3</text>
  <text x="420" y="88" text-anchor="middle" font-size="10" font-weight="600" fill="#047857">simple steps for a 12-year-old"</text>
  <rect x="300" y="125" width="240" height="60" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="420" y="145" text-anchor="middle" font-size="10" fill="#047857">AI gives exactly 3 clear steps,</text>
  <text x="420" y="159" text-anchor="middle" font-size="10" fill="#047857">perfectly matched to your level!</text>
  <text x="420" y="174" text-anchor="middle" font-size="9" fill="#065f46">Super useful! 🎉</text>
  <text x="280" y="200" text-anchor="middle" font-size="10" fill="#64748b">Add: who you are · what format · how long · what level</text>
</svg>`;

const SVG_AI_CREATIVE = `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI can be creative too!</text>
  <rect x="160" y="40" width="240" height="50" rx="12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
  <text x="280" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">You type a description...</text>
  <text x="280" y="79" text-anchor="middle" font-size="11" fill="#64748b">"a cat in space wearing a crown"</text>
  <path d="M230 96 L190 126" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-cr)"/>
  <path d="M280 96 L280 126" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-cr)"/>
  <path d="M330 96 L370 126" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-cr)"/>
  <rect x="20" y="130" width="140" height="65" rx="12" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="90" y="152" text-anchor="middle" font-size="22">🎨</text>
  <text x="90" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#9d174d">AI Image</text>
  <text x="90" y="186" text-anchor="middle" font-size="9" fill="#be185d">Generates a picture!</text>
  <rect x="210" y="130" width="140" height="65" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="280" y="152" text-anchor="middle" font-size="22">🎵</text>
  <text x="280" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">AI Music</text>
  <text x="280" y="186" text-anchor="middle" font-size="9" fill="#1e40af">Composes a song!</text>
  <rect x="400" y="130" width="140" height="65" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="470" y="152" text-anchor="middle" font-size="22">🎬</text>
  <text x="470" y="172" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">AI Video</text>
  <text x="470" y="186" text-anchor="middle" font-size="9" fill="#047857">Creates a clip!</text>
  <defs><marker id="arr-cr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
</svg>`;

const SVG_STEP_LOOP = `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">How an agent solves a problem — step by step</text>
  <rect x="20" y="45" width="108" height="110" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="74" y="78" text-anchor="middle" font-size="24">🎯</text>
  <text x="74" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Step 1</text>
  <text x="74" y="119" text-anchor="middle" font-size="10" fill="#1e40af">Understand</text>
  <text x="74" y="133" text-anchor="middle" font-size="10" fill="#1e40af">the goal</text>
  <path d="M130 100 L152 100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-step)"/>
  <rect x="155" y="45" width="108" height="110" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="209" y="78" text-anchor="middle" font-size="24">🔍</text>
  <text x="209" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Step 2</text>
  <text x="209" y="119" text-anchor="middle" font-size="10" fill="#047857">Plan the</text>
  <text x="209" y="133" text-anchor="middle" font-size="10" fill="#047857">next action</text>
  <path d="M265 100 L287 100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-step)"/>
  <rect x="290" y="45" width="108" height="110" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="344" y="78" text-anchor="middle" font-size="24">⚡</text>
  <text x="344" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Step 3</text>
  <text x="344" y="119" text-anchor="middle" font-size="10" fill="#78350f">Do the action</text>
  <text x="344" y="133" text-anchor="middle" font-size="10" fill="#78350f">(search, write…)</text>
  <path d="M400 100 L422 100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-step)"/>
  <rect x="425" y="45" width="115" height="110" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="482" y="78" text-anchor="middle" font-size="24">🔁</text>
  <text x="482" y="103" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">Step 4</text>
  <text x="482" y="119" text-anchor="middle" font-size="10" fill="#5b21b6">Check result,</text>
  <text x="482" y="133" text-anchor="middle" font-size="10" fill="#5b21b6">repeat or done!</text>
  <defs><marker id="arr-step" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/></marker></defs>
  <text x="280" y="180" text-anchor="middle" font-size="10" fill="#64748b">Agents keep looping until the job is finished!</text>
</svg>`;

const SVG_AI_DECISIONS = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">When should AI decide — and when should YOU?</text>
  <line x1="280" y1="50" x2="280" y2="80" stroke="#94a3b8" stroke-width="2"/>
  <line x1="100" y1="80" x2="460" y2="80" stroke="#94a3b8" stroke-width="2"/>
  <text x="140" y="72" text-anchor="middle" font-size="11" fill="#94a3b8">AI can handle</text>
  <text x="420" y="72" text-anchor="middle" font-size="11" fill="#94a3b8">Human needed</text>
  <rect x="20" y="90" width="230" height="110" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="60" y="115" font-size="13">✅</text><text x="80" y="115" font-size="10" fill="#065f46">Sort your playlist</text>
  <text x="60" y="135" font-size="13">✅</text><text x="80" y="135" font-size="10" fill="#065f46">Summarise an article</text>
  <text x="60" y="155" font-size="13">✅</text><text x="80" y="155" font-size="10" fill="#065f46">Set a reminder</text>
  <text x="60" y="175" font-size="13">✅</text><text x="80" y="175" font-size="10" fill="#065f46">Translate a sentence</text>
  <rect x="310" y="90" width="230" height="110" rx="12" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="350" y="115" font-size="13">⚠️</text><text x="373" y="115" font-size="10" fill="#991b1b">Medical decisions</text>
  <text x="350" y="135" font-size="13">⚠️</text><text x="373" y="135" font-size="10" fill="#991b1b">Hiring someone</text>
  <text x="350" y="155" font-size="13">⚠️</text><text x="373" y="155" font-size="10" fill="#991b1b">Sending important emails</text>
  <text x="350" y="175" font-size="13">⚠️</text><text x="373" y="175" font-size="10" fill="#991b1b">Anything that hurts people</text>
  <text x="280" y="212" text-anchor="middle" font-size="10" fill="#64748b">Rule: bigger consequences = more human involvement needed</text>
</svg>`;

const SVG_AI_SENSES = `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI can see, hear, and understand the world</text>
  <rect x="200" y="60" width="160" height="110" rx="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="252" cy="100" r="12" fill="#1d4ed8"/><circle cx="308" cy="100" r="12" fill="#1d4ed8"/>
  <circle cx="255" cy="97" r="5" fill="#fff"/><circle cx="311" cy="97" r="5" fill="#fff"/>
  <path d="M245 122 Q280 136 315 122" stroke="#1d4ed8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="280" y="155" text-anchor="middle" font-size="10" fill="#1e40af">Multimodal AI</text>
  <rect x="20" y="70" width="130" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="85" y="90" text-anchor="middle" font-size="18">📷</text>
  <text x="85" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#92400e">Vision — sees photos</text>
  <rect x="20" y="140" width="130" height="50" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="85" y="160" text-anchor="middle" font-size="18">🎤</text>
  <text x="85" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="#065f46">Hearing — voice AI</text>
  <rect x="410" y="70" width="130" height="50" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="475" y="90" text-anchor="middle" font-size="18">💬</text>
  <text x="475" y="108" text-anchor="middle" font-size="10" font-weight="700" fill="#6d28d9">Reading — text AI</text>
  <rect x="410" y="140" width="130" height="50" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="475" y="160" text-anchor="middle" font-size="18">🏥</text>
  <text x="475" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="#9d174d">X-rays — medical AI</text>
  <line x1="152" y1="95" x2="198" y2="103" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="152" y1="165" x2="198" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="362" y1="103" x2="408" y2="95" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="362" y1="140" x2="408" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="280" y="210" text-anchor="middle" font-size="10" fill="#64748b">AI is already in your life: face unlock, voice assistants, photo search</text>
</svg>`;

const SVG_FAIR_AI = `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI learns from humans — so it can inherit our biases</text>
  <circle cx="280" cy="110" r="55" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="262" cy="95" r="10" fill="#1d4ed8"/><circle cx="298" cy="95" r="10" fill="#1d4ed8"/>
  <circle cx="265" cy="92" r="3.5" fill="#fff"/><circle cx="301" cy="92" r="3.5" fill="#fff"/>
  <path d="M258 110 Q280 122 302 110" stroke="#1d4ed8" stroke-width="2" fill="none" stroke-linecap="round"/>
  <text x="280" y="140" text-anchor="middle" font-size="9" fill="#1e40af">AI trained on data</text>
  <circle cx="90" cy="80" r="22" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
  <text x="90" y="86" text-anchor="middle" font-size="18">👧</text>
  <circle cx="90" cy="150" r="22" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="90" y="156" text-anchor="middle" font-size="18">👦</text>
  <circle cx="470" cy="80" r="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="470" y="86" text-anchor="middle" font-size="18">🧑</text>
  <circle cx="470" cy="150" r="22" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="470" y="156" text-anchor="middle" font-size="18">👩</text>
  <circle cx="150" cy="40" r="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="150" y="46" text-anchor="middle" font-size="18">🧒</text>
  <circle cx="410" cy="40" r="22" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="410" y="46" text-anchor="middle" font-size="18">👴</text>
  <text x="280" y="185" text-anchor="middle" font-size="10" fill="#64748b">If training data isn't diverse, AI treats some people unfairly</text>
  <text x="280" y="200" text-anchor="middle" font-size="10" fill="#64748b">Fix: use diverse data + test for fairness + have humans check</text>
</svg>`;

const SVG_TRICK = `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">AI-powered tricks — how to spot them</text>
  <rect x="20" y="40" width="240" height="80" rx="12" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="130" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">🎣 Fake urgent message</text>
  <text x="130" y="80" text-anchor="middle" font-size="10" fill="#b91c1c">"Your account is locked!</text>
  <text x="130" y="94" text-anchor="middle" font-size="10" fill="#b91c1c">Click NOW to fix it!!!"</text>
  <text x="130" y="110" text-anchor="middle" font-size="9" fill="#991b1b">⚠ AI can write these in seconds</text>
  <rect x="300" y="40" width="240" height="80" rx="12" fill="#fee2e2" stroke="#f87171" stroke-width="2"/>
  <text x="420" y="62" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">🎭 Fake voice call</text>
  <text x="420" y="80" text-anchor="middle" font-size="10" fill="#b91c1c">"Hi, it's Mum — I need</text>
  <text x="420" y="94" text-anchor="middle" font-size="10" fill="#b91c1c">money urgently, please help!"</text>
  <text x="420" y="110" text-anchor="middle" font-size="9" fill="#991b1b">⚠ AI can clone any voice</text>
  <rect x="110" y="140" width="340" height="55" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="280" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">🛡 Your protection</text>
  <text x="280" y="176" text-anchor="middle" font-size="10" fill="#047857">Slow down · Verify directly · Never act from panic</text>
  <text x="280" y="190" text-anchor="middle" font-size="10" fill="#047857">If it feels urgent and scary — it's probably a trick!</text>
</svg>`;

const SVG_SAFETY_RULES = `<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Your 5 AI safety rules</text>
  <rect x="20" y="35" width="520" height="34" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="49" font-size="15">⏸️</text><text x="72" y="49" font-size="11" font-weight="700" fill="#1d4ed8">Rule 1: </text><text x="118" y="49" font-size="11" fill="#1e40af">Pause before sharing — does this AI really need this info?</text>
  <text x="50" y="62" font-size="9" fill="#3b82f6">Never share: your address, school name, passwords, or phone number</text>
  <rect x="20" y="77" width="520" height="34" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="50" y="91" font-size="15">🔎</text><text x="72" y="91" font-size="11" font-weight="700" fill="#065f46">Rule 2: </text><text x="118" y="91" font-size="11" fill="#047857">Verify before trusting — check important AI facts elsewhere</text>
  <text x="50" y="104" font-size="9" fill="#10b981">AI can sound very confident while being completely wrong</text>
  <rect x="20" y="119" width="520" height="34" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="50" y="133" font-size="15">🤔</text><text x="72" y="133" font-size="11" font-weight="700" fill="#92400e">Rule 3: </text><text x="118" y="133" font-size="11" fill="#78350f">Question what you see — photos, videos and voices can be AI-made</text>
  <text x="50" y="146" font-size="9" fill="#f59e0b">Deepfakes are getting harder to spot every year</text>
  <rect x="20" y="161" width="250" height="34" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="50" y="175" font-size="15">🙋</text><text x="72" y="175" font-size="11" font-weight="700" fill="#6d28d9">Rule 4: </text><text x="118" y="175" font-size="11" fill="#5b21b6">Tell a trusted adult if anything feels wrong</text>
  <rect x="290" y="161" width="250" height="34" rx="10" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <text x="320" y="175" font-size="15">💝</text><text x="342" y="175" font-size="11" font-weight="700" fill="#9d174d">Rule 5: </text><text x="388" y="175" font-size="11" fill="#be185d">Be kind — AI learns from us</text>
</svg>`;

const SVG_GENAI_LLM = `<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="280" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">Generative AI — AI that generates brand-new content</text>
  <!-- Input -->
  <rect x="20" y="35" width="140" height="88" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="90" y="57" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">📝 Your prompt</text>
  <text x="90" y="74" text-anchor="middle" font-size="10" fill="#1e40af">"Write a poem</text>
  <text x="90" y="88" text-anchor="middle" font-size="10" fill="#1e40af">about the ocean"</text>
  <text x="90" y="110" text-anchor="middle" font-size="9" fill="#3b82f6">(text · question · idea)</text>
  <!-- Arrow → -->
  <path d="M163 79 L190 79" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arr-g)"/>
  <!-- LLM Brain -->
  <rect x="193" y="25" width="174" height="118" rx="16" fill="#ede9fe" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="280" y="47" text-anchor="middle" font-size="12" font-weight="700" fill="#6d28d9">🧠 Large Language Model</text>
  <rect x="212" y="56" width="136" height="11" rx="4" fill="#c4b5fd"/>
  <rect x="212" y="71" width="136" height="11" rx="4" fill="#a78bfa"/>
  <rect x="212" y="86" width="136" height="11" rx="4" fill="#8b5cf6"/>
  <text x="280" y="111" text-anchor="middle" font-size="9" fill="#4c1d95">Trained on billions of texts</text>
  <text x="280" y="125" text-anchor="middle" font-size="9" fill="#4c1d95">Predicts next word, again and again</text>
  <!-- Arrow → -->
  <path d="M370 79 L397 79" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#arr-g)"/>
  <!-- Output -->
  <rect x="400" y="35" width="140" height="88" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="470" y="57" text-anchor="middle" font-size="12" font-weight="700" fill="#065f46">✨ New content!</text>
  <text x="470" y="74" text-anchor="middle" font-size="10" fill="#047857">"Waves of silver</text>
  <text x="470" y="88" text-anchor="middle" font-size="10" fill="#047857">crash on the shore..."</text>
  <text x="470" y="110" text-anchor="middle" font-size="9" fill="#059669">Never existed before!</text>
  <!-- What GenAI creates -->
  <rect x="20" y="158" width="520" height="48" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="280" y="178" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">GenAI can create:</text>
  <text x="280" y="197" text-anchor="middle" font-size="12" fill="#64748b">📝 Text · 🎨 Images · 🎵 Music · 💻 Code · 🎬 Video</text>
  <defs>
    <marker id="arr-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <text x="280" y="232" text-anchor="middle" font-size="10" fill="#64748b">ChatGPT, Claude, Gemini — all powered by LLMs</text>
</svg>`;

// ─────────────────────────────────────────────────────────────────────────────

const aiKids: Course = {
  id: 'ai-kids',
  title: 'AI for Kids',
  subtitle: 'Discover how AI works, what it can do, and where YOU fit in the future it\'s creating',
  glossary: [],
  modules: [
    {
      id: 'ak-m1',
      title: 'What Is AI?',
      icon: 'zap',
      summary: 'Meet your new digital helper — and find out how it actually thinks (spoiler: not like you do).',
      lessons: [
        {
          id: 'ak1l1',
          title: 'AI Is Like a Very Fast Learner',
          inlineSvg: SVG_ROBOT_LEARNER,
          inlineSvgId: 'ak1l1',
          slides: [{
            heading: 'Meet AI — Your New Digital Helper',
            body: 'Imagine a student who has read every book in every library in the world, and can answer questions about any of them in seconds. That\'s a little like what AI can do — except instead of reading books, it learned from billions of websites, articles, and conversations.',
            bullets: [
              'AI stands for Artificial Intelligence — "artificial" means made by humans',
              'AI is not magic — it\'s a program that learned patterns from lots and lots of examples',
              'AI is very good at some things (writing, answering questions, recognising pictures)',
              'AI is not good at everything — it can\'t taste food, feel emotions, or truly understand the world',
            ],
          }],
        },
        {
          id: 'ak1l2',
          title: 'AI Through the Ages',
          inlineSvg: SVG_TIMELINE,
          inlineSvgId: 'ak1l2',
          slides: [{
            heading: 'A Quick Tour of AI History',
            body: 'People have dreamed about thinking machines for a long time. Let\'s take a quick trip through the highlights — from robots in stories to the AI assistants you can talk to today.',
            bullets: [
              '1950s: Scientists started wondering — could a machine ever be smart like a person? They got curious and went looking for the answer',
              '1980s: AI could beat humans at chess — but only at chess',
              '2012: AI learned to recognise pictures better than humans — a big breakthrough',
              '2017: A new invention called the "transformer" made language AI possible',
              '2022: ChatGPT launched — and AI became something everyone could use',
            ],
          }],
        },
        {
          id: 'ak1l3',
          title: 'How Does AI Actually Learn?',
          inlineSvg: SVG_HOW_AI_LEARNS,
          inlineSvgId: 'ak1l3',
          slides: [{
            heading: 'Learning Like You — But Very Different',
            body: 'When you learn to ride a bike, you practice, fall down, and get better. AI learns in a similar way — but instead of bikes, it practices with data. Millions and millions of examples.',
            bullets: [
              'Show AI 10,000 pictures of cats with the label "cat" — it learns what a cat looks like',
              'If it guesses wrong, it adjusts — like correcting a mistake in your homework',
              'Do this billions of times and the AI gets very good',
              'AI doesn\'t understand cats the way you do — it just learned the pattern',
            ],
          }],
        },
        {
          id: 'ak1l4',
          title: 'AI, ML, and Deep Learning',
          inlineSvg: SVG_AI_ML_DL,
          inlineSvgId: 'ak1l4',
          slides: [{
            heading: 'What\'s the Difference?',
            body: 'You\'ve probably heard these words used interchangeably. But they\'re actually different things — like how "sport" is different from "football" which is different from "penalty kicks."',
            bullets: [
              'AI is the big idea: machines that do smart things',
              'Machine Learning is one way to make AI: teach it from examples',
              'Deep Learning is a powerful type of ML: uses layers of virtual "neurons"',
              'It\'s like: sport → football → penalty kicks. Each one fits inside the next',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'How does AI learn?', options: ['It is programmed with all the answers', 'It learns from millions of examples and corrects its mistakes', 'It reads books on its own', 'Scientists tell it what to do every time'], correct: 1 },
        { q: 'Which of these best describes the relationship between AI, ML, and Deep Learning?', options: ['They are three different names for the same thing', 'ML is inside AI, Deep Learning is inside ML', 'Deep Learning came before AI', 'They are completely unrelated fields'], correct: 1 },
      ],
    },
    {
      id: 'ak-m2',
      title: 'Chat with AI',
      icon: 'brain',
      summary: 'Meet the AI you can talk to, peek behind the scenes at the LLMs powering it, and learn how to spot when it\'s wrong.',
      lessons: [
        {
          id: 'ak2l1',
          title: 'What Is a Chatbot?',
          inlineSvg: SVG_CHATBOT,
          inlineSvgId: 'ak2l1',
          slides: [{
            heading: 'Meet the AI That Talks',
            body: 'A chatbot is an AI you can have a conversation with. You type something (or say it), and it replies. But unlike texting a friend, the chatbot doesn\'t actually understand what you\'re saying — it\'s doing something much more clever.',
            bullets: [
              'Chatbots predict what words should come next based on what you wrote',
              'They learned how to do this from billions of conversations and articles',
              'Famous chatbots: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)',
              'They can write stories, explain science, help with homework, and answer questions',
            ],
          }],
        },
        {
          id: 'ak2l0',
          title: 'What\'s Behind a Chatbot? (Meet the LLM)',
          inlineSvg: SVG_GENAI_LLM,
          inlineSvgId: 'ak2l0',
          slides: [{
            heading: 'AI That Generates — Not Just Looks Things Up',
            body: 'You just met a chatbot. Now let\'s open the hood. Every chatbot you\'ve heard of has a "brain" inside called a Large Language Model — or LLM for short. An LLM is a kind of AI that has read billions of texts and learned how words fit together. LLMs are the engine of what we call Generative AI: AI that doesn\'t just look things up — it generates brand-new stuff every time.',
            bullets: [
              'Large Language Model (LLM) — an AI trained on billions of texts that learned how language works',
              'LLMs work by predicting the next word, then the next, then the next — over and over at enormous scale',
              'The "large" in LLM means the model saw billions of examples while it was learning',
              'Generative AI (GenAI) is the bigger family — AI that can generate text, images, music, code or video',
              'Unlike a search engine (which finds existing pages), GenAI makes something new each time',
            ],
          }],
        },
        {
          id: 'ak2l2',
          title: 'Why AI Sometimes Makes Things Up',
          inlineSvg: SVG_HALLUCINATION,
          inlineSvgId: 'ak2l2',
          slides: [{
            heading: 'When AI Gets It Wrong',
            body: 'AI chatbots are designed to always give you a response. The problem is: sometimes they don\'t know the answer — but instead of saying "I don\'t know," they make up something that sounds right. This is called a "hallucination."',
            bullets: [
              'AI generates the most likely-sounding answer — but likely isn\'t always correct',
              'It\'s like someone confidently giving you directions even when they don\'t know the way',
              'Always double-check important facts from an AI with a reliable source',
              'AI companies are working hard to make this happen less often',
            ],
          }],
        },
        {
          id: 'ak2l3',
          title: 'Prompting: Talk to AI Like a Pro',
          inlineSvg: SVG_PROMPTING,
          inlineSvgId: 'ak2l3',
          slides: [{
            heading: 'The Better You Ask, the Better the Answer',
            body: 'The words you use when talking to AI really matter. A vague question gets a vague answer. A clear, detailed question gets a much better one. This skill is called "prompting" — and it\'s one of the most useful things you can learn.',
            bullets: [
              'Bad prompt: "Tell me about space" → very general answer',
              'Better prompt: "Explain how black holes form in simple terms for a 12-year-old"',
              'You can tell AI what role to play: "Act as a friendly science teacher and explain..."',
              'You can ask for a specific format: "Give me 5 bullet points" or "Write it as a story"',
            ],
          }],
        },
        {
          id: 'ak2l4',
          title: 'AI Art, Music & Videos',
          inlineSvg: SVG_AI_CREATIVE,
          inlineSvgId: 'ak2l4',
          slides: [{
            heading: 'AI Gets Creative',
            body: 'AI isn\'t just for text. Today\'s AI can generate stunning images from a description, compose music, and even create video. This raises exciting questions — and tricky ones too.',
            bullets: [
              'Image AI: type "a cat wearing a space suit on the moon" and get a picture',
              'Music AI: generate a song in any style or mood',
              'Video AI: describe a scene and watch it appear (Sora, Runway)',
              'Big question: if AI made it, who owns it? Should it say it was AI-made?',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What does LLM stand for?', options: ['Logic Learning Machine', 'Large Language Model', 'Layered Logic Module', 'Language Learning Mechanism'], correct: 1 },
        { q: 'What is an AI "hallucination"?', options: ['When the AI sees images that aren\'t there', 'When the AI makes up a confident-sounding but incorrect answer', 'When the AI refuses to answer a question', 'When the AI generates weird images'], correct: 1 },
        { q: 'What is "prompting" when talking to AI?', options: ['Restarting the AI when it gets stuck', 'Choosing how to ask your question to get a better answer', 'Giving the AI a personality', 'Uploading files to the AI'], correct: 1 },
      ],
    },
    {
      id: 'ak-m3',
      title: 'Agentic AI',
      icon: 'layers',
      summary: 'When AI stops just chatting and starts taking real-world actions — searching, coding, booking, deciding — what changes?',
      lessons: [
        {
          id: 'ak3l1',
          title: 'What Is an AI Agent?',
          inlineSvg: SVG_AGENT_LOOP,
          inlineSvgId: 'ak3l1',
          slides: [{
            heading: 'AI That Takes Action',
            body: 'A chatbot answers questions. An AI agent goes further — it can take actions: search the web, write code and run it, send emails, or book a flight. It\'s like the difference between giving someone advice and actually doing the task for them.',
            bullets: [
              'A chatbot: "Here\'s how you could book a flight..."',
              'An AI agent: searches flights, compares prices, and books one for you',
              'Agents use "tools" — like a web browser, calculator, or email app',
              'Examples: AI that does your research, writes code, or manages your calendar',
            ],
          }],
        },
        {
          id: 'ak3l2',
          title: 'The Agent Loop: Think, Try, Learn',
          inlineSvg: SVG_STEP_LOOP,
          inlineSvgId: 'ak3l2',
          slides: [{
            heading: 'How Agents Solve Problems Step by Step',
            body: 'AI agents don\'t just guess once — they work through problems in a loop: think about what to do, try an action, see what happens, then think again. This is called the "agent loop."',
            bullets: [
              'Think: "What\'s the best next step to solve this problem?"',
              'Act: try something — search the web, run some code, read a file',
              'Observe: see what the result was',
              'Repeat until the job is done (or until they give up!)',
              'It\'s like how you work through a difficult puzzle — step by step',
            ],
          }],
        },
        {
          id: 'ak3l3',
          title: 'Should AI Make Decisions for Us?',
          inlineSvg: SVG_AI_DECISIONS,
          inlineSvgId: 'ak3l3',
          slides: [{
            heading: 'The Big Question About Autonomy',
            body: 'When AI agents can take actions in the world, we have to decide: how much should they do on their own? Some decisions are fine to delegate. Others should always have a human in charge.',
            bullets: [
              'Fine to delegate: organising your calendar, finding information, writing first drafts',
              'Be careful: sending important emails, spending money, making medical decisions',
              'Never without a human: decisions that could hurt someone',
              'Good rule of thumb: the bigger the consequence, the more a human should be involved',
              'Your job isn\'t to be replaced by AI — it\'s to be the human who decides wisely',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What makes an AI agent different from a chatbot?', options: ['Agents are smarter than chatbots', 'Agents can take actions in the world, not just answer questions', 'Agents never make mistakes', 'Agents don\'t need the internet'], correct: 1 },
        { q: 'Which decision should ALWAYS involve a human?', options: ['Picking a playlist', 'Organising a to-do list', 'Decisions that could hurt someone', 'Setting a morning alarm'], correct: 2 },
      ],
    },
    {
      id: 'ak-m4',
      title: 'AI & Your Future',
      icon: 'shield',
      summary: 'What AI can and can\'t do, why fairness matters, and the amazing careers waiting for the people who understand it.',
      lessons: [
        {
          id: 'ak4l1',
          title: 'AI That Sees and Hears',
          inlineSvg: SVG_AI_SENSES,
          inlineSvgId: 'ak4l1',
          slides: [{
            heading: 'Beyond Words',
            body: 'AI isn\'t just about text and chat. Modern AI can look at a photo and describe what\'s in it, listen to music and identify the artist, or watch a video and summarise what happened. This is called multimodal AI.',
            bullets: [
              'Vision AI: recognises faces, reads text in images, spots objects in photos',
              'Voice AI: turns speech into text, generates speech from text',
              'Medical AI: analyses X-rays and scans to help doctors spot problems',
              'These AIs are already in your life: face unlock, voice assistants, photo search',
            ],
          }],
        },
        {
          id: 'ak4l2',
          title: 'Being Fair with AI',
          inlineSvg: SVG_FAIR_AI,
          inlineSvgId: 'ak4l2',
          slides: [{
            heading: 'AI Can Be Biased — Here\'s Why',
            body: 'AI learns from data created by humans. And humans aren\'t always fair. So sometimes AI picks up unfair patterns from the data and repeats them. This is called bias — and fixing it is one of the most important challenges in AI.',
            bullets: [
              'If most photos of doctors in training data show men, AI may assume doctors are men',
              'This can cause real harm: unfair job rejections, wrong medical diagnoses',
              'Fixing it requires diverse data, careful testing, and human review',
              'People who care about fairness AND understand AI are incredibly valuable',
            ],
          }],
        },
        {
          id: 'ak4l3',
          title: 'Careers with AI — What Will You Build?',
          inlineSvg: SVG_CAREERS,
          inlineSvgId: 'ak4l3',
          slides: [{
            heading: 'The Jobs of the Future Need You',
            body: 'AI is creating whole new careers — and changing existing ones. The people who will shape the future of AI aren\'t just coders. They\'re also artists, ethicists, teachers, doctors, storytellers, and problem-solvers.',
            bullets: [
              'AI Engineer: builds the systems and models that power AI products',
              'AI Ethicist: makes sure AI is used fairly and safely',
              'Data Scientist: finds patterns in data that teach AI what to do',
              'AI Product Manager: decides what AI products to build and why',
              'AI in Every Field: medicine, music, law, education, gaming — AI is in all of them',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is "bias" in AI?', options: ['When AI gets tired from too much use', 'When AI picks up and repeats unfair patterns from its training data', 'When AI prefers certain users over others intentionally', 'When AI\'s code has programming errors'], correct: 1 },
        { q: 'Which of these is NOT an AI-related career?', options: ['AI Engineer', 'AI Ethicist', 'Data Scientist', 'Mechanical plumber (non-AI)'], correct: 3 },
      ],
    },
    {
      id: 'ak-m5',
      title: 'Staying Safe with AI',
      icon: 'shield-alert',
      summary: 'AI is powerful — and that means knowing how to use it safely matters. Learn to protect yourself online.',
      lessons: [
        {
          id: 'ak5l1',
          title: 'Your Personal Info Is Precious',
          inlineSvg: SVG_CYBERSAFETY,
          inlineSvgId: 'ak5l1',
          slides: [{
            heading: 'What Should You Never Tell an AI?',
            body: 'Chatbots feel like friendly conversations — but they\'re software. The company behind the AI may store what you type. Some things should stay private, no matter who (or what) is asking.',
            bullets: [
              'Never share your full name, home address, school name, or phone number with AI',
              'Never share passwords — not even with "helpful" AI assistants',
              'Treat an AI chatbot like a public notice board, not a private diary',
              'If a website asks for personal info before letting you use AI, ask a trusted adult first',
              'Your data is valuable — protect it like you\'d protect your lunch money',
            ],
          }],
        },
        {
          id: 'ak5l2',
          title: 'Deepfakes: When Seeing Isn\'t Believing',
          inlineSvg: SVG_DEEPFAKE,
          inlineSvgId: 'ak5l2',
          slides: [{
            heading: 'AI Can Create Things That Never Happened',
            body: 'AI can now generate photos, videos, and audio of real people saying or doing things they never said or did. These are called deepfakes — and they\'re getting harder to spot.',
            bullets: [
              'A deepfake video might show a famous person saying something they never said',
              'Deepfake photos can create fake "evidence" of events that didn\'t happen',
              'Signs of a deepfake: blurry edges, weird eyes, unnatural shadows, voice that sounds slightly off',
              'Rule of thumb: if something seems shocking or unbelievable — it might be fake',
              'Always check the original source before sharing anything that could be a deepfake',
            ],
          }],
        },
        {
          id: 'ak5l3',
          title: 'AI Trying to Trick You',
          inlineSvg: SVG_TRICK,
          inlineSvgId: 'ak5l3',
          slides: [{
            heading: 'Scams, Manipulation, and AI-Powered Tricks',
            body: 'Some people use AI to create fake messages, fake voices, or fake urgency to trick you into doing something. This is called social engineering — and AI makes it much easier for bad actors to do.',
            bullets: [
              'Scam messages: AI can write very convincing fake emails pretending to be your bank or school',
              'Voice cloning: AI can clone a voice — a "phone call from mum" might not be mum',
              'Fake urgency: "You must act NOW!" is almost always a manipulation tactic',
              'If something feels off, it probably is — slow down and check',
              'When in doubt, contact the real person or organisation directly (don\'t use the number in the message)',
            ],
          }],
        },
        {
          id: 'ak5l4',
          title: 'Your AI Safety Rules',
          inlineSvg: SVG_SAFETY_RULES,
          inlineSvgId: 'ak5l4',
          slides: [{
            heading: 'Five Rules Every Digital Kid Should Know',
            body: 'Just like there are rules for crossing the road safely, there are rules for using AI safely. These five rules will protect you — today and as AI gets even more powerful.',
            bullets: [
              '1. Pause before you share — does this AI need this information?',
              '2. Verify before you trust — check important AI answers with another source',
              '3. Question what you see — photos, videos, and audio can be AI-generated',
              '4. Tell a trusted adult — if anything online makes you uncomfortable',
              '5. Be kind — AI learns from humans; don\'t teach it unkind patterns',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'Which of these is safe to share with an AI chatbot?', options: ['Your home address', 'Your school name', 'A question about your homework topic', 'Your phone number'], correct: 2 },
        { q: 'What is a "deepfake"?', options: ['A very deep photo filter', 'AI-generated media showing real people doing things they never did', 'A type of AI chatbot that refuses to answer', 'A fake AI company'], correct: 1 },
        { q: 'If you get a message saying "Act NOW or your account will be deleted!" — what should you do?', options: ['Act immediately — it must be important', 'Slow down, verify the message is real before doing anything', 'Share it with friends so they know too', 'Reply to ask for more information'], correct: 1 },
      ],
    },
  ],
};

export default aiKids;
