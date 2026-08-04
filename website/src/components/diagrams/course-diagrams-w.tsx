import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULE 1: WHAT YOU CAN ACTUALLY BUILD NOW ============ */

export const VibecodingMeaningDiagram = () => {
  const steps = [
    { c: COLORS.blue, h: '1 · YOU DESCRIBE IT', l: ['"a page where someone', 'enters their email and', 'I get notified"'] },
    { c: COLORS.cyan, h: '2 · THE AI WRITES IT', l: ['it turns your words into', 'the exact instructions a', 'computer needs'] },
    { c: COLORS.emerald, h: '3 · YOU JUDGE IT', l: ['try it, look at it, and', 'say exactly what is', 'wrong or missing'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 420" caption="You describe, the AI writes the exact instructions, and you judge what comes back — saying what is wrong is how it gets better.">
      <defs>
        <marker id="arrowVCMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
        <marker id="arrowVCMb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The whole loop: you describe, the AI writes, you judge</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">you are directing a very fast, very literal helper — it has read a huge amount of code, but knows nothing about you</text>

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 265} y="62" width="210" height="80" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 265} y="62" width="210" height="20" rx="9" fill={s.c} />
          <text x={135 + i * 265} y="76" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <text key={j} x={42 + i * 265} y={96 + j * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          {i < 2 && <line x1={244 + i * 265} y1="102" x2={291 + i * 265} y2="102" stroke={COLORS.blue} strokeWidth="1.6" markerEnd="url(#arrowVCMa)" />}
        </g>
      ))}
      <path d="M 665 142 L 665 166 L 135 166 L 135 148" fill="none" stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowVCMb)" />
      <text x="400" y="186" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontStyle="italic">saying what is wrong starts the loop again — each round gets closer to what you meant</text>

      <rect x="30" y="200" width="360" height="86" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="200" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="214" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHAT YOU BRING</text>
      <text x="44" y="236" fill={COLORS.slate600} fontSize="8.3">the idea, the judgement and the taste —</text>
      <text x="44" y="250" fill={COLORS.slate600} fontSize="8.3">you decide what it is for, and whether</text>
      <text x="44" y="264" fill={COLORS.slate600} fontSize="8.3">what came back is actually right</text>

      <rect x="410" y="200" width="360" height="86" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="200" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="214" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHAT THE AI BRINGS</text>
      <text x="424" y="236" fill={COLORS.slate600} fontSize="8.3">speed, patience, and the exact wording</text>
      <text x="424" y="250" fill={COLORS.slate600} fontSize="8.3">a computer needs — but it knows nothing</text>
      <text x="424" y="264" fill={COLORS.slate600} fontSize="8.3">about your business until you tell it</text>

      <rect x="30" y="298" width="740" height="50" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="318" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">IT DOES EXACTLY WHAT YOU SAID — WHICH IS NOT ALWAYS WHAT YOU MEANT</text>
      <text x="400" y="334" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">clear thinking about what you want is now the hard part — not typing speed</text>

      <rect x="30" y="360" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="380" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">YOU ARE NOT PRETENDING TO BE AN ENGINEER — AND THIS IS NOT MAGIC</text>
      <text x="400" y="397" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the skill is explaining clearly what you want to exist, then looking hard at what comes back</text>
    </DiagramFrame>
  );
};

export const WhatYouCanBuildDiagram = () => {
  const levels = [
    {
      c: COLORS.emerald, h: 'LEVEL 1 · WORKS RELIABLY TODAY — START HERE',
      l: ['landing pages · waitlists · internal tools that replace a messy spreadsheet', 'automations that move info between apps · charts from data you already have'],
      a: 'small data, few users, no real harm if it is briefly wrong', ac: COLORS.emerald,
    },
    {
      c: COLORS.blue, h: 'LEVEL 2 · A REAL APP — SIGN-IN AND SAVED RECORDS',
      l: ['a booking system for your studio · a client portal · a simple job board', 'people create things, and those things are still there tomorrow'],
      a: 'storing other people\'s details changes your duty — a leaked list is serious', ac: COLORS.amber,
    },
    {
      c: COLORS.cyan, h: 'LEVEL 3 · AI FEATURES INSIDE YOUR APP',
      l: ['summarise notes · draft replies · tag enquiries · answer questions', 'a handful of lines to wire up — a service does the hard part for you'],
      a: 'every use costs money, and wrong answers arrive looking exactly like right ones', ac: COLORS.amber,
    },
  ];
  const shape = [
    { x: 60, w: 190, t: 'a small amount of data' },
    { x: 280, w: 230, t: 'a few users, mostly known to you' },
    { x: 540, w: 210, t: 'briefly wrong = no real harm' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 510" caption="Pages, tools and automations work reliably today; real apps and AI features are in reach — but storing other people's data raises the stakes.">
      <defs>
        <marker id="arrowWYBa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three levels you can genuinely build</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">all three are within reach for a non-engineer — each level just asks a little more care than the last</text>

      {levels.map((lv, i) => (
        <g key={i}>
          <rect x="30" y={58 + i * 104} width="660" height="96" rx="9" fill={COLORS.white} stroke={lv.c} strokeWidth="2" />
          <rect x="30" y={58 + i * 104} width="660" height="20" rx="9" fill={lv.c} />
          <text x="360" y={72 + i * 104} textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{lv.h}</text>
          {lv.l.map((t, j) => (
            <text key={j} x="44" y={92 + i * 104 + j * 14} fill={COLORS.slate600} fontSize="8.3">{t}</text>
          ))}
          <text x="44" y={126 + i * 104} fill={lv.ac} fontSize="8.2" fontWeight="700">{lv.a}</text>
        </g>
      ))}
      <line x1="735" y1="70" x2="735" y2="352" stroke={COLORS.amber} strokeWidth="1.6" markerEnd="url(#arrowWYBa)" />
      <text x="735" y="196" textAnchor="middle" fill={COLORS.amber} fontSize="7.4">stakes</text>
      <text x="735" y="207" textAnchor="middle" fill={COLORS.amber} fontSize="7.4">rise</text>

      <rect x="30" y="372" width="740" height="56" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="390" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE SHAPE THEY ALL SHARE</text>
      {shape.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="398" width={p.w} height="22" rx="11" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x={p.x + p.w / 2} y="412" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{p.t}</text>
        </g>
      ))}

      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IF IT REPLACES A SPREADSHEET, A FORM, OR A JOB YOU DO BY HAND — BUILD IT</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">start at level one and climb when you need to — module five covers the care levels two and three deserve</text>
    </DiagramFrame>
  );
};

export const WhatNotToBuildDiagram = () => {
  const zones = [
    { h: 'REAL MONEY', l: ['holding card details,', 'balances or payouts', 'yourself'] },
    { h: 'HEALTH & SAFETY', l: ['symptoms, medication —', 'anything someone might', 'act on medically'] },
    { h: 'HEAVY SCALE', l: ['thousands of users at', 'once — prototypes', 'assume a handful'] },
    { h: 'STRICT RULES', l: ['children\'s data, health', 'records, finance — rules', 'shape the whole design'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="If being wrong overnight means real harm — money, health, leaked data — do not build it alone; hand the risky part to a specialist.">
      <defs>
        <marker id="arrowWNBa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Some things should not be your first solo build</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">not because the code is too hard — because of what happens when it quietly goes wrong</text>

      {zones.map((z, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="58" width="176" height="92" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <rect x={30 + i * 188} y="58" width="176" height="20" rx="9" fill={COLORS.red} />
          <text x={118 + i * 188} y="72" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">{z.h}</text>
          {z.l.map((t, j) => (
            <text key={j} x={40 + i * 188} y={92 + j * 13} fill={COLORS.slate600} fontSize="7.9">{t}</text>
          ))}
        </g>
      ))}

      <rect x="170" y="166" width="460" height="52" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="186" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">THE ONE QUESTION THAT SORTS IT</text>
      <text x="400" y="203" textAnchor="middle" fill={COLORS.slate700} fontSize="8.6">if this is wrong at 3am and nobody notices for a week, what happens?</text>
      <line x1="330" y1="218" x2="222" y2="240" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWNBa)" />
      <line x1="470" y1="218" x2="578" y2="240" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWNBa)" />

      <rect x="30" y="244" width="360" height="88" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="244" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="258" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A SMALL, FIXABLE MESS → BUILD IT</text>
      <text x="44" y="280" fill={COLORS.slate600} fontSize="8.2">an old price shown · a tracker miscounts ·</text>
      <text x="44" y="293" fill={COLORS.slate600} fontSize="8.2">a double booking and an apology</text>
      <text x="44" y="312" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">visible, fixable failures are safe to learn in</text>

      <rect x="410" y="244" width="360" height="88" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="244" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="258" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">REAL HARM → NOT ALONE</text>
      <text x="424" y="280" fill={COLORS.slate600} fontSize="8.2">money gone · a person hurt · a customer</text>
      <text x="424" y="293" fill={COLORS.slate600} fontSize="8.2">list leaked — with your name on it</text>
      <text x="424" y="312" fill={COLORS.red} fontSize="8.2" fontWeight="700">get qualified help, or do not build it yet</text>

      <rect x="30" y="348" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">YOU CAN STILL BUILD NEAR THE DANGER — HAND THE RISKY PART TO A SPECIALIST</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">send buyers to a payment company's own checkout instead of ever touching card numbers yourself</text>

      <rect x="30" y="412" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="432" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">YOUR CONFIDENCE IS NOT EVIDENCE — THE SIZE OF THE CONSEQUENCE DECIDES</text>
      <text x="400" y="449" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">ask what the worst realistic outcome is, not whether the code runs — and let the answer pick your project</text>
    </DiagramFrame>
  );
};

export const WeekendSizingDiagram = () => {
  const pills = [
    { x: 42, w: 90, t: 'accounts', hot: false },
    { x: 146, w: 90, t: 'payments', hot: false },
    { x: 250, w: 110, t: 'notifications', hot: false },
    { x: 374, w: 100, t: 'admin panel', hot: false },
    { x: 488, w: 95, t: 'mobile app', hot: false },
    { x: 597, w: 160, t: 'THE ONE CORE ACTION', hot: true },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Cut the idea down to its one core action, fake the rest by hand, and write your finish line down before you start.">
      <defs>
        <marker id="arrowWKSa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Shrink the idea before you describe it</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">every idea arrives as a year of work — the weekend version is in there, and you have to cut your way to it</text>

      <rect x="30" y="58" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE IDEA AS IT ARRIVES — A YEAR OF WORK YOU WOULD ABANDON IN WEEK THREE</text>
      {pills.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="90" width={p.w} height="24" rx="12" fill={p.hot ? COLORS.white : COLORS.slate50} stroke={p.hot ? COLORS.emerald : COLORS.slate300} strokeWidth={p.hot ? 1.8 : 1.2} />
          <text x={p.x + p.w / 2} y="105" textAnchor="middle" fill={p.hot ? COLORS.emerald : COLORS.slate500} fontSize="7.6" fontWeight={p.hot ? '700' : '400'}>{p.t}</text>
        </g>
      ))}

      <line x1="400" y1="132" x2="400" y2="152" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowWKSa)" />
      <text x="414" y="146" fill={COLORS.slate600} fontSize="7.8">keep only the action that makes it worth anything — cut the rest</text>

      <rect x="105" y="156" width="590" height="64" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="105" y="156" width="590" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="170" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE ONE THING — ONE SENTENCE, EXACTLY ONE VERB</text>
      <text x="121" y="192" fill={COLORS.slate600} fontSize="8.3">"someone lists a thing, and someone else can see it" — that is a marketplace</text>
      <text x="121" y="206" fill={COLORS.slate600} fontSize="8.3">accounts, admin panels and settings are almost never version one</text>

      <line x1="400" y1="220" x2="400" y2="240" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowWKSa)" />
      <text x="414" y="234" fill={COLORS.slate600} fontSize="7.8">do the supporting work yourself, quietly, at a laptop</text>

      <rect x="180" y="244" width="440" height="64" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="180" y="244" width="440" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="258" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">FAKE EVERYTHING YOU CAN</text>
      <text x="196" y="280" fill={COLORS.slate600} fontSize="8.3">notifications = an email you forward · payment = an invoice you send</text>
      <text x="196" y="294" fill={COLORS.slate600} fontSize="8.3">automate a step only once doing it by hand bores you</text>

      <line x1="400" y1="308" x2="400" y2="328" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowWKSa)" />
      <text x="414" y="322" fill={COLORS.slate600} fontSize="7.8">now it fits in a weekend</text>

      <rect x="255" y="332" width="290" height="64" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="255" y="332" width="290" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="346" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WEEKEND-SIZED</text>
      <text x="400" y="368" textAnchor="middle" fill={COLORS.slate600} fontSize="8.3">three sentences · one first user</text>
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="8.3">one thing you will learn from it</text>

      <rect x="30" y="410" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="428" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">WRITE THE FINISH LINE DOWN BEFORE YOU START</text>
      <text x="400" y="444" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">there is no natural stopping point — you can always add one more thing, and the AI will happily add it</text>

      <rect x="30" y="466" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="485" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IF YOU DO NOT CHOOSE THE SCOPE, THE AI WILL ATTEMPT ALL OF IT</text>
      <text x="400" y="502" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">what comes back is broad, shallow and impossible to fix — strip it back on paper first</text>
    </DiagramFrame>
  );
};

export const PrototypeStagesDiagram = () => {
  const stages = [
    { c: COLORS.blue, h: 'PROTOTYPE', l: ['exists to answer a question', 'runs on your machine', 'allowed to break', 'one user: you'], i: 'fragile is fine here' },
    { c: COLORS.cyan, h: 'FRIENDS CAN TRY', l: ['lives on the internet', 'survives ordinary use', 'a little real data, from', 'people who will forgive you'], i: 'small and real' },
    { c: COLORS.amber, h: 'REAL PRODUCT', l: ['used by strangers who', 'will not forgive you', 'stays up · protects data', 'fixable at midnight'], i: 'a serious commitment' },
  ];
  const stepUps = [
    {
      c: COLORS.cyan, h: 'STEP UP: PROTOTYPE → FRIENDS',
      l: ['it leaves your laptop and goes online', 'other people\'s data starts to arrive', 'passwords and keys come out of the code'],
    },
    {
      c: COLORS.amber, h: 'STEP UP: FRIENDS → STRANGERS',
      l: ['you know it broke without being told', 'a spare copy of the data exists', 'a cap on what it can cost you', 'a plan for when it fails while you sleep'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="A prototype, something friends can try, and a real product are three different things — each roughly ten times the work of the last.">
      <defs>
        <marker id="arrowPSTa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three very different things people call "an app"</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">knowing which one you have is the difference between confidence and delusion</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 264} y="58" width="212" height="118" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 264} y="58" width="212" height="20" rx="9" fill={s.c} />
          <text x={136 + i * 264} y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <text key={j} x={42 + i * 264} y={94 + j * 13} fill={COLORS.slate600} fontSize="8.1">{t}</text>
          ))}
          <text x={42 + i * 264} y="164" fill={s.c} fontSize="7.9" fontStyle="italic">{s.i}</text>
          {i < 2 && (
            <g>
              <line x1={246 + i * 264} y1="112" x2={290 + i * 264} y2="112" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowPSTa)" />
              <text x={268 + i * 264} y="102" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2">≈10×</text>
              <text x={268 + i * 264} y="126" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2">work</text>
            </g>
          )}
        </g>
      ))}

      {stepUps.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 380} y="192" width="360" height="104" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 380} y="192" width="360" height="20" rx="9" fill={s.c} />
          <text x={210 + i * 380} y="206" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <g key={j}>
              <circle cx={48 + i * 380} cy={225 + j * 15} r="2" fill={s.c} />
              <text x={56 + i * 380} y={228 + j * 15} fill={COLORS.slate600} fontSize="8.2">{t}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="312" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="331" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">NONE OF THIS WORK IS VISIBLE ON THE SCREEN — WHICH IS WHY IT GETS SKIPPED</text>
      <text x="400" y="347" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">a finished-looking app can be zero percent of the way to a real product — looks and readiness are separate</text>

      <rect x="30" y="372" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="392" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">"THIS IS A WORKING PROTOTYPE — NOT READY FOR CUSTOMERS YET"</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">that sentence costs nothing, buys credibility, and keeps your own estimate of the remaining work honest</text>

      <rect x="30" y="436" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SAY WHICH ONE YOU HAVE — OUT LOUD, ESPECIALLY TO OTHER PEOPLE</text>
      <text x="400" y="473" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the gap between a finished-looking demo and a product is where reputations are lost</text>
    </DiagramFrame>
  );
};
