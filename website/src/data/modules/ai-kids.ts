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
  <text x="160" y="80" font-size="11" fill="#64748b">Billions of</text>
  <text x="160" y="93" font-size="11" fill="#64748b">examples</text>
  <text x="390" y="82" font-size="11" fill="#7c3aed">Images</text>
  <text x="432" y="125" font-size="11" fill="#059669">Text</text>
  <text x="462" y="74" font-size="11" fill="#dc2626">Code</text>
  <text x="496" y="104" font-size="11" fill="#b45309">Data</text>
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
          imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
          slides: [{
            heading: 'A Quick Tour of AI History',
            body: 'People have dreamed about thinking machines for a long time. Let\'s take a quick trip through the highlights — from robots in stories to the AI assistants you can talk to today.',
            bullets: [
              '1950s: Scientists first asked "can machines think?" — and started trying to find out',
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
          imageUrl: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1655635643617-72e0b62b9278?w=800&auto=format&fit=crop&q=80',
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
      title: 'Talking AI',
      icon: 'brain',
      summary: 'ChatGPT, Claude, Gemini — how do they work? And why do they sometimes make things up?',
      lessons: [
        {
          id: 'ak2l1',
          title: 'What Is a Chatbot?',
          imageUrl: 'https://images.unsplash.com/photo-1655720408254-7e32b93fdbcb?w=800&auto=format&fit=crop&q=80',
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
          id: 'ak2l2',
          title: 'Why AI Sometimes Makes Things Up',
          imageUrl: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&auto=format&fit=crop&q=80',
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
        { q: 'What is an AI "hallucination"?', options: ['When the AI sees images that aren\'t there', 'When the AI makes up a confident-sounding but incorrect answer', 'When the AI refuses to answer a question', 'When the AI generates weird images'], correct: 1 },
        { q: 'What is "prompting" when talking to AI?', options: ['Restarting the AI when it gets stuck', 'Choosing how to ask your question to get a better answer', 'Giving the AI a personality', 'Uploading files to the AI'], correct: 1 },
      ],
    },
    {
      id: 'ak-m3',
      title: 'AI Agents',
      icon: 'layers',
      summary: 'When AI stops just talking and starts actually doing things in the world — what changes?',
      lessons: [
        {
          id: 'ak3l1',
          title: 'What Is an AI Agent?',
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1633281256183-c0f106f70d76?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1560186640-e1e086054c25?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?w=800&auto=format&fit=crop&q=80',
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
          imageUrl: 'https://images.unsplash.com/photo-1566341013475-5a3244e59e1d?w=800&auto=format&fit=crop&q=80',
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
