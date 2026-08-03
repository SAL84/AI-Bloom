// Cartoon SVG art set A for the AI for Kids course (ages 8–14).
// Bright, rounded, friendly — one consistent visual family.
// All artwork uses viewBox "0 0 560 260"; marker/gradient ids are suffixed per
// constant so several diagrams can safely share one page.

export const SVG_ROBOT_LEARNER = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="rl-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Robots learn from examples</text>

  <!-- Book pile -->
  <rect x="26" y="196" width="152" height="26" rx="9" fill="#f87171" stroke="#334155" stroke-width="3"/>
  <line x1="48" y1="202" x2="48" y2="216" stroke="#334155" stroke-width="3"/>
  <rect x="34" y="170" width="136" height="26" rx="9" fill="#fb923c" stroke="#334155" stroke-width="3"/>
  <line x1="56" y1="176" x2="56" y2="190" stroke="#334155" stroke-width="3"/>
  <rect x="42" y="144" width="120" height="26" rx="9" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <line x1="64" y1="150" x2="64" y2="164" stroke="#334155" stroke-width="3"/>
  <text x="102" y="244" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Lots of books</text>

  <!-- Robot -->
  <rect x="176" y="168" width="54" height="18" rx="9" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <rect x="306" y="168" width="54" height="18" rx="9" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <rect x="236" y="212" width="24" height="30" rx="10" fill="#3b82f6" stroke="#334155" stroke-width="3"/>
  <rect x="276" y="212" width="24" height="30" rx="10" fill="#3b82f6" stroke="#334155" stroke-width="3"/>
  <rect x="226" y="158" width="84" height="62" rx="18" fill="#3b82f6" stroke="#334155" stroke-width="3"/>
  <line x1="268" y1="68" x2="268" y2="46" stroke="#334155" stroke-width="3"/>
  <circle cx="268" cy="38" r="9" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <rect x="208" y="68" width="120" height="92" rx="22" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <circle cx="220" cy="134" r="8" fill="#f472b6"/>
  <circle cx="316" cy="134" r="8" fill="#f472b6"/>
  <circle cx="242" cy="110" r="16" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="294" cy="110" r="16" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="245" cy="112" r="7" fill="#334155"/>
  <circle cx="297" cy="112" r="7" fill="#334155"/>
  <circle cx="241" cy="107" r="3" fill="#ffffff"/>
  <circle cx="293" cy="107" r="3" fill="#ffffff"/>
  <path d="M238 136 Q268 156 298 136" fill="none" stroke="#334155" stroke-width="3"/>

  <!-- Example cards -->
  <rect x="410" y="52" width="132" height="48" rx="16" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <text x="476" y="82" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">Pictures</text>
  <rect x="410" y="110" width="132" height="48" rx="16" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <text x="476" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">Words</text>
  <rect x="410" y="168" width="132" height="48" rx="16" fill="#fb923c" stroke="#334155" stroke-width="3"/>
  <text x="476" y="198" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">Sounds</text>
  <path d="M404 76 Q374 84 344 102" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#rl-arrow)"/>
  <path d="M404 134 L344 128" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#rl-arrow)"/>
  <path d="M404 192 Q384 190 368 180" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#rl-arrow)"/>

  <!-- Sparkles -->
  <path d="M192 54 Q195 61 202 64 Q195 67 192 74 Q189 67 182 64 Q189 61 192 54 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M350 50 Q353 57 360 60 Q353 63 350 70 Q347 63 340 60 Q347 57 350 50 Z" fill="#f472b6" stroke="#334155" stroke-width="2"/>
  <path d="M150 116 Q152 121 157 123 Q152 125 150 130 Q148 125 143 123 Q148 121 150 116 Z" fill="#34d399" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_CHATBOT = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="cb-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Chatting with an AI</text>

  <!-- Child -->
  <rect x="42" y="150" width="62" height="62" rx="22" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <circle cx="73" cy="112" r="34" fill="#fcd34d" stroke="#334155" stroke-width="3"/>
  <path d="M43 100 Q48 72 73 72 Q98 72 103 100 Q88 84 73 86 Q58 88 43 100 Z" fill="#fb923c" stroke="#334155" stroke-width="3"/>
  <circle cx="62" cy="114" r="6" fill="#334155"/>
  <circle cx="86" cy="114" r="6" fill="#334155"/>
  <circle cx="64" cy="111" r="2.4" fill="#ffffff"/>
  <circle cx="88" cy="111" r="2.4" fill="#ffffff"/>
  <path d="M60 128 Q73 140 86 128" fill="none" stroke="#334155" stroke-width="3"/>
  <circle cx="50" cy="126" r="6" fill="#f472b6"/>
  <circle cx="98" cy="126" r="6" fill="#f472b6"/>
  <text x="73" y="238" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">You</text>

  <!-- Question bubble -->
  <path d="M150 98 L120 126 L178 100 Z" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <rect x="138" y="44" width="210" height="58" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="243" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#334155">What is a black hole?</text>
  <path d="M354 62 Q402 54 430 86" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#cb-arrow)"/>

  <!-- Answer bubble -->
  <path d="M392 158 L438 168 L388 192 Z" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <rect x="196" y="152" width="206" height="64" rx="20" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <text x="299" y="180" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">Space where gravity</text>
  <text x="299" y="202" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">is super strong!</text>
  <path d="M190 188 Q150 200 114 174" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#cb-arrow)"/>

  <!-- Robot -->
  <rect x="452" y="162" width="70" height="56" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <line x1="487" y1="78" x2="487" y2="54" stroke="#334155" stroke-width="3"/>
  <circle cx="487" cy="46" r="9" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <rect x="438" y="78" width="98" height="86" rx="22" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <circle cx="446" cy="138" r="7" fill="#f472b6"/>
  <circle cx="528" cy="138" r="7" fill="#f472b6"/>
  <circle cx="464" cy="116" r="14" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="510" cy="116" r="14" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="466" cy="118" r="6" fill="#334155"/>
  <circle cx="512" cy="118" r="6" fill="#334155"/>
  <circle cx="462" cy="113" r="2.6" fill="#ffffff"/>
  <circle cx="508" cy="113" r="2.6" fill="#ffffff"/>
  <path d="M460 138 Q487 154 514 138" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="487" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">AI friend</text>

  <!-- Sparkles -->
  <path d="M404 38 Q407 45 414 48 Q407 51 404 58 Q401 51 394 48 Q401 45 404 38 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M166 136 Q168 141 173 143 Q168 145 166 150 Q164 145 159 143 Q164 141 166 136 Z" fill="#f472b6" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_AGENT_LOOP = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="al-a1" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#3b82f6"/>
    </marker>
    <marker id="al-a2" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#fb923c"/>
    </marker>
    <marker id="al-a3" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#22c55e"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">The agent loop</text>

  <!-- Loop arrows -->
  <path d="M168 74 Q280 40 392 74" fill="none" stroke="#3b82f6" stroke-width="4" marker-end="url(#al-a1)"/>
  <path d="M470 120 Q506 200 358 222" fill="none" stroke="#fb923c" stroke-width="4" marker-end="url(#al-a2)"/>
  <path d="M204 220 Q56 208 88 124" fill="none" stroke="#22c55e" stroke-width="4" marker-end="url(#al-a3)"/>

  <!-- Steps -->
  <rect x="24" y="56" width="140" height="60" rx="18" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="94" y="84" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">THINK</text>
  <text x="94" y="104" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">What next?</text>
  <rect x="396" y="56" width="140" height="60" rx="18" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <text x="466" y="84" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">DO</text>
  <text x="466" y="104" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Take action</text>
  <rect x="210" y="190" width="140" height="58" rx="18" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <text x="280" y="216" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">CHECK</text>
  <text x="280" y="236" text-anchor="middle" font-size="12" font-weight="600" fill="#334155">Did it work?</text>

  <!-- Agent -->
  <rect x="252" y="148" width="56" height="28" rx="12" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <circle cx="232" cy="112" r="8" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <circle cx="328" cy="112" r="8" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <rect x="238" y="78" width="84" height="74" rx="20" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <circle cx="258" cy="108" r="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="302" cy="108" r="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="260" cy="110" r="5.5" fill="#334155"/>
  <circle cx="304" cy="110" r="5.5" fill="#334155"/>
  <circle cx="256" cy="105" r="2.4" fill="#ffffff"/>
  <circle cx="300" cy="105" r="2.4" fill="#ffffff"/>
  <path d="M256 128 Q280 142 304 128" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="280" y="170" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Agent</text>

  <!-- Sparkles -->
  <path d="M196 172 Q199 179 206 182 Q199 185 196 192 Q193 185 186 182 Q193 179 196 172 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M376 168 Q379 175 386 178 Q379 181 376 188 Q373 181 366 178 Q373 175 376 168 Z" fill="#f472b6" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_TIMELINE = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">AI through the years</text>

  <!-- Track -->
  <path d="M516 116 L546 133 L516 150 Z" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <rect x="42" y="126" width="478" height="14" rx="7" fill="#fbbf24" stroke="#334155" stroke-width="3"/>

  <!-- 1950s -->
  <circle cx="70" cy="133" r="30" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="70" y="143" text-anchor="middle" font-size="26">💡</text>
  <text x="70" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">1950s</text>
  <text x="70" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">First ideas</text>
  <!-- 1997 -->
  <circle cx="174" cy="133" r="30" fill="#f87171" stroke="#334155" stroke-width="3"/>
  <text x="174" y="143" text-anchor="middle" font-size="26">♟️</text>
  <text x="174" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">1997</text>
  <text x="174" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Beats chess</text>
  <!-- 2012 -->
  <circle cx="278" cy="133" r="30" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <text x="278" y="143" text-anchor="middle" font-size="26">👁️</text>
  <text x="278" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">2012</text>
  <text x="278" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Sees images</text>
  <!-- 2017 -->
  <circle cx="382" cy="133" r="30" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <text x="382" y="143" text-anchor="middle" font-size="26">📖</text>
  <text x="382" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">2017</text>
  <text x="382" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Reads words</text>
  <!-- today -->
  <circle cx="486" cy="133" r="30" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <text x="486" y="143" text-anchor="middle" font-size="26">🤖</text>
  <text x="486" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">Today</text>
  <text x="486" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AI helpers</text>

  <text x="280" y="238" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Every step made AI smarter</text>

  <!-- Sparkles -->
  <path d="M524 88 Q527 95 534 98 Q527 101 524 108 Q521 101 514 98 Q521 95 524 88 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M32 96 Q34 101 39 103 Q34 105 32 110 Q30 105 25 103 Q30 101 32 96 Z" fill="#34d399" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_HOW_AI_LEARNS = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="hal-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Show it lots of examples</text>

  <!-- Examples in -->
  <rect x="22" y="52" width="156" height="158" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="100" y="76" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">Examples</text>
  <rect x="34" y="86" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <rect x="80" y="86" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <rect x="126" y="86" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <rect x="34" y="134" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <rect x="80" y="134" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <rect x="126" y="134" width="40" height="40" rx="12" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <text x="54" y="115" text-anchor="middle" font-size="24">🐱</text>
  <text x="100" y="115" text-anchor="middle" font-size="24">🐱</text>
  <text x="146" y="115" text-anchor="middle" font-size="24">🐱</text>
  <text x="54" y="163" text-anchor="middle" font-size="24">🐱</text>
  <text x="100" y="163" text-anchor="middle" font-size="24">🐱</text>
  <text x="146" y="163" text-anchor="middle" font-size="24">🐱</text>
  <text x="100" y="197" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">all say cat</text>
  <path d="M182 130 L200 130" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#hal-arrow)"/>

  <!-- Learner -->
  <circle cx="210" cy="124" r="8" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <circle cx="350" cy="124" r="8" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <rect x="214" y="82" width="132" height="100" rx="24" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <circle cx="248" cy="124" r="16" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="312" cy="124" r="16" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="250" cy="126" r="7" fill="#334155"/>
  <circle cx="314" cy="126" r="7" fill="#334155"/>
  <circle cx="246" cy="120" r="3" fill="#ffffff"/>
  <circle cx="310" cy="120" r="3" fill="#ffffff"/>
  <path d="M244 152 Q280 172 316 152" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="280" y="204" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Finds the pattern</text>
  <path d="M362 130 L388 130" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#hal-arrow)"/>

  <!-- Result out -->
  <rect x="394" y="70" width="146" height="124" rx="20" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <text x="467" y="134" text-anchor="middle" font-size="40">🐱</text>
  <text x="467" y="174" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">That is a cat!</text>

  <text x="280" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Now it can spot brand new cats</text>

  <!-- Sparkles -->
  <path d="M406 54 Q409 61 416 64 Q409 67 406 74 Q403 67 396 64 Q403 61 406 54 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M528 208 Q531 215 538 218 Q531 221 528 228 Q525 221 518 218 Q525 215 528 208 Z" fill="#f472b6" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_AI_ML_DL = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">AI is the big box</text>

  <rect x="26" y="42" width="508" height="200" rx="30" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <text x="50" y="76" font-size="15" font-weight="800" fill="#334155">Artificial Intelligence</text>

  <rect x="68" y="90" width="424" height="140" rx="26" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="92" y="120" font-size="15" font-weight="800" fill="#334155">Machine Learning</text>

  <rect x="112" y="134" width="336" height="82" rx="22" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <text x="150" y="182" text-anchor="middle" font-size="26">🤖</text>
  <text x="410" y="182" text-anchor="middle" font-size="26">🧠</text>
  <text x="280" y="172" text-anchor="middle" font-size="17" font-weight="800" fill="#334155">Deep Learning</text>
  <text x="280" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">chatbots live here</text>

  <!-- Sparkles -->
  <path d="M500 62 Q503 69 510 72 Q503 75 500 82 Q497 75 490 72 Q497 69 500 62 Z" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <path d="M452 108 Q455 115 462 118 Q455 121 452 128 Q449 121 442 118 Q449 115 452 108 Z" fill="#ffffff" stroke="#334155" stroke-width="2"/>
  <path d="M96 208 Q99 215 106 218 Q99 221 96 228 Q93 221 86 218 Q93 215 96 208 Z" fill="#ffffff" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_HALLUCINATION = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Sure sounding, still wrong</text>

  <!-- Robot -->
  <rect x="44" y="170" width="68" height="52" rx="18" fill="#3b82f6" stroke="#334155" stroke-width="3"/>
  <line x1="78" y1="88" x2="78" y2="66" stroke="#334155" stroke-width="3"/>
  <circle cx="78" cy="58" r="9" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <rect x="30" y="88" width="96" height="84" rx="22" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <circle cx="56" cy="124" r="14" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="100" cy="124" r="14" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="58" cy="126" r="6" fill="#334155"/>
  <circle cx="102" cy="126" r="6" fill="#334155"/>
  <circle cx="54" cy="121" r="2.6" fill="#ffffff"/>
  <circle cx="98" cy="121" r="2.6" fill="#ffffff"/>
  <path d="M52 146 Q78 164 104 146" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="78" y="242" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">AI</text>

  <!-- Confident wrong claim -->
  <path d="M148 126 L118 142 L154 154 Z" fill="#f87171" stroke="#334155" stroke-width="3"/>
  <rect x="146" y="76" width="214" height="88" rx="22" fill="#f87171" stroke="#334155" stroke-width="3"/>
  <text x="253" y="112" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Einstein wrote</text>
  <text x="253" y="138" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">The Star Book!</text>
  <circle cx="352" cy="72" r="18" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <path d="M345 65 L359 79" fill="none" stroke="#f87171" stroke-width="4"/>
  <path d="M359 65 L345 79" fill="none" stroke="#f87171" stroke-width="4"/>

  <!-- Puzzled child -->
  <rect x="430" y="152" width="72" height="64" rx="24" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <circle cx="466" cy="114" r="36" fill="#fcd34d" stroke="#334155" stroke-width="3"/>
  <path d="M430 104 Q434 76 466 76 Q498 76 502 104 Q486 88 466 90 Q446 92 430 104 Z" fill="#fb923c" stroke="#334155" stroke-width="3"/>
  <path d="M440 100 Q450 90 460 98" fill="none" stroke="#334155" stroke-width="3"/>
  <path d="M472 102 L492 102" fill="none" stroke="#334155" stroke-width="3"/>
  <circle cx="452" cy="116" r="6" fill="#334155"/>
  <circle cx="482" cy="116" r="6" fill="#334155"/>
  <circle cx="454" cy="113" r="2.4" fill="#ffffff"/>
  <circle cx="484" cy="113" r="2.4" fill="#ffffff"/>
  <path d="M452 138 Q459 131 466 138 Q473 145 480 138" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="466" y="240" text-anchor="middle" font-size="14" font-weight="700" fill="#334155">You</text>
  <text x="518" y="84" text-anchor="middle" font-size="30" font-weight="800" fill="#a78bfa">?</text>
  <text x="404" y="70" text-anchor="middle" font-size="20" font-weight="800" fill="#38bdf8">?</text>

  <text x="280" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Always double-check!</text>
</svg>`;

export const SVG_PROMPTING = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="pr-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Ask better, get better</text>

  <!-- Fuzzy ask -->
  <rect x="24" y="48" width="246" height="76" rx="20" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <text x="147" y="76" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Fuzzy ask</text>
  <text x="147" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Tell me about space</text>
  <path d="M147 128 L147 148" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#pr-arrow)"/>
  <rect x="24" y="154" width="246" height="84" rx="20" fill="#f87171" stroke="#334155" stroke-width="3"/>
  <circle cx="72" cy="196" r="26" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="62" cy="190" r="4" fill="#334155"/>
  <circle cx="82" cy="190" r="4" fill="#334155"/>
  <path d="M60 208 L84 208" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="180" y="192" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">Fuzzy answer</text>
  <text x="180" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">not much help</text>

  <!-- Clear ask -->
  <rect x="290" y="48" width="246" height="76" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="413" y="74" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Clear ask</text>
  <text x="413" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Explain black holes</text>
  <text x="413" y="114" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">in 3 easy steps</text>
  <path d="M413 128 L413 148" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#pr-arrow)"/>
  <rect x="290" y="154" width="246" height="84" rx="20" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <circle cx="338" cy="196" r="26" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <circle cx="328" cy="188" r="4" fill="#334155"/>
  <circle cx="348" cy="188" r="4" fill="#334155"/>
  <path d="M326 200 Q338 214 350 200" fill="none" stroke="#334155" stroke-width="3"/>
  <text x="444" y="192" text-anchor="middle" font-size="14" font-weight="800" fill="#334155">Just right!</text>
  <text x="444" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">3 clear steps</text>

  <text x="280" y="254" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">Add details!</text>

  <!-- Sparkles -->
  <path d="M508 166 Q511 173 518 176 Q511 179 508 186 Q505 179 498 176 Q505 173 508 166 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M304 60 Q307 67 314 70 Q307 73 304 80 Q301 73 294 70 Q301 67 304 60 Z" fill="#ffffff" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_AI_CREATIVE = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="cr-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">AI makes new things</text>

  <rect x="150" y="44" width="260" height="56" rx="20" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <text x="280" y="79" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">A cat in space!</text>

  <path d="M240 104 L124 130" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#cr-arrow)"/>
  <path d="M280 104 L280 130" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#cr-arrow)"/>
  <path d="M320 104 L436 130" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#cr-arrow)"/>

  <rect x="24" y="138" width="150" height="94" rx="20" fill="#f472b6" stroke="#334155" stroke-width="3"/>
  <text x="99" y="188" text-anchor="middle" font-size="34">🎨</text>
  <text x="99" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Art</text>
  <rect x="205" y="138" width="150" height="94" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <text x="280" y="188" text-anchor="middle" font-size="34">🎵</text>
  <text x="280" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Music</text>
  <rect x="386" y="138" width="150" height="94" rx="20" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <text x="461" y="188" text-anchor="middle" font-size="34">📖</text>
  <text x="461" y="218" text-anchor="middle" font-size="15" font-weight="800" fill="#334155">Stories</text>

  <text x="280" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">You imagine, AI creates</text>

  <!-- Sparkles -->
  <path d="M60 58 Q64 67 73 71 Q64 75 60 84 Q56 75 47 71 Q56 67 60 58 Z" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
  <path d="M500 58 Q504 67 513 71 Q504 75 500 84 Q496 75 487 71 Q496 67 500 58 Z" fill="#34d399" stroke="#334155" stroke-width="2"/>
  <path d="M128 100 Q131 107 138 110 Q131 113 128 120 Q125 113 118 110 Q125 107 128 100 Z" fill="#f472b6" stroke="#334155" stroke-width="2"/>
  <path d="M430 100 Q433 107 440 110 Q433 113 430 120 Q427 113 420 110 Q427 107 430 100 Z" fill="#a78bfa" stroke="#334155" stroke-width="2"/>
  <path d="M32 112 Q34 117 39 119 Q34 121 32 126 Q30 121 25 119 Q30 117 32 112 Z" fill="#38bdf8" stroke="#334155" stroke-width="2"/>
  <path d="M528 116 Q530 121 535 123 Q530 125 528 130 Q526 125 521 123 Q526 121 528 116 Z" fill="#fb923c" stroke="#334155" stroke-width="2"/>
</svg>`;

export const SVG_STEP_LOOP = `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" stroke-linecap="round" stroke-linejoin="round">
  <defs>
    <marker id="st-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
      <path d="M0,0 L0,8 L9,4 z" fill="#334155"/>
    </marker>
  </defs>
  <text x="280" y="26" text-anchor="middle" font-size="16" font-weight="800" fill="#334155">Big job, small steps</text>

  <rect x="26" y="48" width="106" height="132" rx="20" fill="#38bdf8" stroke="#334155" stroke-width="3"/>
  <circle cx="79" cy="82" r="20" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <text x="79" y="89" text-anchor="middle" font-size="19" font-weight="800" fill="#334155">1</text>
  <text x="79" y="136" text-anchor="middle" font-size="26">🎯</text>
  <text x="79" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Understand</text>

  <path d="M136 114 L156 114" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#st-arrow)"/>

  <rect x="160" y="48" width="106" height="132" rx="20" fill="#34d399" stroke="#334155" stroke-width="3"/>
  <circle cx="213" cy="82" r="20" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <text x="213" y="89" text-anchor="middle" font-size="19" font-weight="800" fill="#334155">2</text>
  <text x="213" y="136" text-anchor="middle" font-size="26">🗺️</text>
  <text x="213" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Plan</text>

  <path d="M270 114 L290 114" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#st-arrow)"/>

  <rect x="294" y="48" width="106" height="132" rx="20" fill="#fbbf24" stroke="#334155" stroke-width="3"/>
  <circle cx="347" cy="82" r="20" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <text x="347" y="89" text-anchor="middle" font-size="19" font-weight="800" fill="#334155">3</text>
  <text x="347" y="136" text-anchor="middle" font-size="26">⚡</text>
  <text x="347" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Do it</text>

  <path d="M404 114 L424 114" fill="none" stroke="#334155" stroke-width="3" marker-end="url(#st-arrow)"/>

  <rect x="428" y="48" width="106" height="132" rx="20" fill="#a78bfa" stroke="#334155" stroke-width="3"/>
  <circle cx="481" cy="82" r="20" fill="#ffffff" stroke="#334155" stroke-width="3"/>
  <text x="481" y="89" text-anchor="middle" font-size="19" font-weight="800" fill="#334155">4</text>
  <text x="481" y="136" text-anchor="middle" font-size="26">✅</text>
  <text x="481" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Check</text>

  <path d="M481 186 Q481 220 400 220 L160 220 Q79 220 79 190" fill="none" stroke="#f472b6" stroke-width="4" stroke-dasharray="9 7" marker-end="url(#st-arrow)"/>
  <text x="280" y="242" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">then go again!</text>
</svg>`;
