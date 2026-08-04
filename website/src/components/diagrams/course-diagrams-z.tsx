import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULES 3-4: WRONG TOOL & IS IT ANY GOOD? ============ */

export const WrongToolDiagram = () => {
  const signals = [
    'the same problem keeps coming back after being "fixed"',
    'fixing one thing now breaks unrelated things',
    'suggestions contradict what it said an hour ago',
    'you need something the tool simply cannot reach',
  ];
  const options = [
    {
      c: COLORS.blue, h: 'MOVE TO A STRONGER TOOL',
      l: ['from a prompt-to-app builder', 'to an in-editor assistant,', 'where you can see and', 'change everything'],
      i: 'more control, more to learn',
    },
    {
      c: COLORS.cyan, h: 'BUY, DO NOT BUILD',
      l: ['an existing product that', 'already does it — a booking', 'service with your name on', 'it beats a homemade one'],
      i: 'not building is a real answer',
    },
    {
      c: COLORS.emerald, h: 'BRING IN A PERSON',
      l: ['a few hours of an engineer', 'on the one stuck problem —', 'your spec and prototype make', 'you a cheap client to help'],
      i: 'targeted help, not a handover',
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="When the same problems keep returning, the tool has hit its ceiling — move sideways to another tool, a ready-made product, or a person.">
      <defs>
        <marker id="arrowWTJa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Sometimes it is the tool — not you, and not your wording</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">hitting a ceiling is normal — spending three more days pushing against it is the expensive part</text>

      <rect x="30" y="58" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOUR SIGNS YOU HAVE HIT THE TOOL'S CEILING — NOT YOUR OWN</text>
      {signals.map((t, i) => (
        <g key={i}>
          <rect x={46 + (i % 2) * 360} y={86 + Math.floor(i / 2) * 38} width="348" height="30" rx="7" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
          <text x={220 + (i % 2) * 360} y={105 + Math.floor(i / 2) * 38} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
        </g>
      ))}

      <line x1="400" y1="168" x2="400" y2="188" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowWTJa)" />
      <text x="414" y="182" fill={COLORS.slate600} fontSize="7.8">the fix is a different move, not a better sentence</text>

      {options.map((o, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="192" width="236" height="118" rx="9" fill={COLORS.white} stroke={o.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="192" width="236" height="20" rx="9" fill={o.c} />
          <text x={148 + i * 252} y="206" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">{o.h}</text>
          {o.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={226 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
          <text x={42 + i * 252} y="296" fill={o.c} fontSize="7.9" fontStyle="italic">{o.i}</text>
        </g>
      ))}

      <rect x="30" y="326" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="345" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">SWITCHING IS NOT ADMITTING DEFEAT</text>
      <text x="400" y="361" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">the goal is the outcome, not the construction — the code was only ever a means to it</text>

      <rect x="30" y="386" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="406" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHEN THE PROJECT OUTGROWS THE TOOL, MOVE SIDEWAYS — DO NOT PUSH HARDER</text>
      <text x="400" y="423" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">change the shape of tool, buy the ready-made thing, or hire help for the one blockage</text>
    </DiagramFrame>
  );
};

export const GoodLooksLikeDiagram = () => {
  const items = [
    { t: 'a visitor can send the form and I get an email', never: false },
    { t: 'entering a past date is refused, with a clear message', never: false },
    { t: 'it is usable on a phone', never: false },
    { t: 'nobody can ever see anyone else\'s bookings', never: true },
    { t: 'no email goes out without me pressing a button', never: true },
    { t: 'the same slot can never be booked twice', never: true },
  ];
  const cards = [
    {
      c: COLORS.blue, h: 'WHY BEFORE, NOT AFTER',
      l: ['written afterwards, the list just', 'describes whatever you built — it', 'tests nothing; written before, some', 'items will fail, which is the point'],
    },
    {
      c: COLORS.red, h: 'THE NEVERS ARE THE SILENT ONES',
      l: ['nobody complains about seeing data', 'they should not have seen — negative', 'checks catch the failures that are', 'invisible from the outside'],
    },
    {
      c: COLORS.amber, h: 'SHORT ENOUGH TO SURVIVE',
      l: ['ten items ≈ five minutes gets run', 'for months; thirty gets run twice —', 'add an item only when a real', 'failure surprises you'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 478" caption="Before you build, write five to ten plain sentences that define working — including a few things that must never happen.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Write down what good looks like — before you build</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">five to ten plain sentences, each one checkable by hand in under a minute</text>

      <rect x="30" y="58" width="370" height="280" rx="10" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <text x="215" y="82" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">MY LIST — WHAT "WORKING" MEANS</text>
      {items.map((it, i) => (
        <g key={i}>
          <rect x="50" y={92 + i * 28} width="11" height="11" rx="2" fill={COLORS.white} stroke={it.never ? COLORS.red : COLORS.emerald} strokeWidth="1.6" />
          <text x="70" y={101 + i * 28} fill={COLORS.slate600} fontSize="8.1">{it.t}</text>
          {it.never && <text x="380" y={101 + i * 28} textAnchor="end" fill={COLORS.red} fontSize="6.8" fontWeight="700">NEVER</text>}
        </g>
      ))}
      <line x1="50" y1="266" x2="380" y2="266" stroke={COLORS.slate200} strokeWidth="1.4" />
      <rect x="50" y="280" width="11" height="11" rx="2" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="68" y="289" fill={COLORS.slate500} fontSize="7.6">must happen</text>
      <rect x="160" y="280" width="11" height="11" rx="2" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="178" y="289" fill={COLORS.slate500} fontSize="7.6">must never happen — the silent ones</text>
      <text x="215" y="316" textAnchor="middle" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">each line takes under a minute to check by hand</text>

      {cards.map((c, i) => (
        <g key={i}>
          <rect x="420" y={58 + i * 96} width="350" height="84" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x="420" y={58 + i * 96} width="350" height="20" rx="9" fill={c.c} />
          <text x="595" y={72 + i * 96} textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x="434" y={92 + i * 96 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="354" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="373" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">KEEP IT IN ONE FILE, NEXT TO YOUR SPEC</text>
      <text x="400" y="389" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">not scattered through chat history — you will paste it, run it and grow it for months</text>

      <rect x="30" y="414" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="434" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE LIST IS WHAT WORKING MEANS — EVERYTHING ELSE IS PREFERENCE</text>
      <text x="400" y="451" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">preference may change daily; the list changes only when you deliberately decide it should</text>
    </DiagramFrame>
  );
};

export const WholeListEveryTimeDiagram = () => {
  const parts = ['the booking form', 'the email step', 'the sign-in'];
  const pills = [
    { x: 70, w: 160, t: 'change one thing' },
    { x: 280, w: 160, t: 'check every item' },
    { x: 490, w: 130, t: 'save a copy' },
    { x: 670, w: 80, t: 'repeat' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 516" caption="After every change, run the whole list — the change you asked for is not the only thing that changed.">
      <defs>
        <marker id="arrowWLEa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowWLEb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
        <marker id="arrowWLEc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">You changed one thing — that is not the only thing that changed</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an AI editing your project can touch places you were never told about</text>

      <rect x="30" y="58" width="740" height="112" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="50" y="78" width="260" height="32" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="180" y="91" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9">you asked for one change:</text>
      <text x="180" y="104" textAnchor="middle" fill={COLORS.blue} fontSize="8" fontWeight="700">"fix the booking form"</text>
      {parts.map((t, i) => (
        <g key={i}>
          <rect x="430" y={66 + i * 34} width="170" height="26" rx="7" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.3" />
          <text x="515" y={83 + i * 34} textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">{t}</text>
        </g>
      ))}
      <line x1="314" y1="84" x2="424" y2="79" stroke={COLORS.blue} strokeWidth="1.6" markerEnd="url(#arrowWLEc)" />
      <line x1="314" y1="100" x2="424" y2="113" stroke={COLORS.amber} strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arrowWLEb)" />
      <line x1="314" y1="106" x2="424" y2="147" stroke={COLORS.amber} strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arrowWLEb)" />
      <text x="612" y="110" fill={COLORS.amber} fontSize="7.8" fontStyle="italic">the change ripples into</text>
      <text x="612" y="124" fill={COLORS.amber} fontSize="7.8" fontStyle="italic">places you never looked</text>

      <rect x="30" y="186" width="740" height="96" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="186" width="740" height="20" rx="10" fill={COLORS.emerald} />
      <text x="400" y="200" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE CORE LOOP — RUN THE WHOLE LIST, NOT JUST THE PART YOU TOUCHED</text>
      {pills.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="214" width={p.w} height="28" rx="14" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="231" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{p.t}</text>
          {i < 3 && <line x1={p.x + p.w + 4} y1="228" x2={pills[i + 1].x - 4} y2="228" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowWLEa)" />}
        </g>
      ))}
      <text x="400" y="266" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">the point is catching the break you were not looking for — the one that otherwise reaches a real user</text>

      <rect x="30" y="298" width="360" height="78" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="298" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="312" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOUR CHANGES, THEN ONE CHECK</text>
      <text x="44" y="332" fill={COLORS.slate600} fontSize="8.2">a failure now has four suspects and</text>
      <text x="44" y="346" fill={COLORS.slate600} fontSize="8.2">no evidence — you are back to guessing</text>
      <text x="44" y="364" fill={COLORS.red} fontSize="8" fontWeight="700">guessing is the doom loop's front door</text>

      <rect x="410" y="298" width="360" height="78" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="298" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="312" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">ONE CHANGE, THEN A CHECK</text>
      <text x="424" y="332" fill={COLORS.slate600} fontSize="8.2">a failure has exactly one possible</text>
      <text x="424" y="346" fill={COLORS.slate600} fontSize="8.2">cause — the fix is usually obvious</text>
      <text x="424" y="364" fill={COLORS.emerald} fontSize="8" fontWeight="700">while you still know what you did</text>

      <rect x="30" y="388" width="740" height="50" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="407" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">KEEP A ONE-MINUTE LOG — DATE · WHAT CHANGED · WHAT PASSED</text>
      <text x="400" y="423" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">it turns "I think it used to work" into "it passed Tuesday, and I changed the email step Wednesday"</text>

      <rect x="30" y="450" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AFTER EVERY CHANGE, RUN EVERYTHING — THEN SAVE A COPY</text>
      <text x="400" y="487" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">change one thing, check everything, save, repeat — there is nothing more clever underneath</text>
    </DiagramFrame>
  );
};

export const TestWithOthersDiagram = () => {
  const watch = [
    '1 · give a task, not a tour — "book',
    '     yourself a slot for Tuesday"',
    '2 · then say nothing at all',
    '3 · note every pause and hover —',
    '     each one marks a design problem',
    '4 · do not rescue them — rescuing',
    '     destroys the data you came for',
    '5 · afterwards ask: "what did you',
    '     expect to happen there?"',
  ];
  const xs = [
    { x: 150, y: 160 },
    { x: 225, y: 145 },
    { x: 190, y: 200 },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="You dodge your own broken paths without noticing — hand it to someone else, give them a task, and stay silent while they try.">
      <defs>
        <marker id="arrowTWOa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowTWOb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">You cannot test your own thing — you know too much</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your testing confirms your intentions; only another person walks the paths you route around</text>

      <rect x="30" y="58" width="360" height="210" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="210" y="78" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE PATHS YOU CANNOT SEE</text>
      <rect x="50" y="100" width="50" height="22" rx="11" fill={COLORS.emerald} />
      <text x="75" y="114" textAnchor="middle" fill={COLORS.white} fontSize="7.5" fontWeight="700">YOU</text>
      <rect x="300" y="100" width="64" height="22" rx="11" fill={COLORS.blue} />
      <text x="332" y="114" textAnchor="middle" fill={COLORS.white} fontSize="7.5" fontWeight="700">FINISH</text>
      <path d="M 104 111 C 160 86, 250 86, 294 111" fill="none" stroke={COLORS.emerald} strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrowTWOa)" />
      {xs.map((p, i) => (
        <g key={i}>
          <line x1={p.x - 6} y1={p.y - 6} x2={p.x + 6} y2={p.y + 6} stroke={COLORS.red} strokeWidth="2.2" />
          <line x1={p.x - 6} y1={p.y + 6} x2={p.x + 6} y2={p.y - 6} stroke={COLORS.red} strokeWidth="2.2" />
        </g>
      ))}
      <rect x="50" y="176" width="96" height="22" rx="11" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="98" y="190" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontWeight="700">A STRANGER</text>
      <line x1="150" y1="190" x2="180" y2="198" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowTWOb)" />
      <text x="210" y="238" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">your route bends around the broken parts —</text>
      <text x="210" y="251" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">automatically, and invisibly to you</text>

      <rect x="410" y="58" width="360" height="210" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="10" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">HOW TO WATCH PROPERLY</text>
      {watch.map((t, i) => (
        <text key={i} x="426" y={92 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
      ))}
      <text x="426" y="222" fill={COLORS.emerald} fontSize="7.9" fontStyle="italic">the silence is where all the findings are</text>

      <rect x="30" y="284" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="304" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">MAKE HONESTY EASY — FRAME IT AS A FAULT HUNT</text>
      <text x="400" y="320" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">"tell me every annoying thing — I need to find what is broken" — and pick someone like your real user</text>

      <rect x="30" y="348" width="740" height="56" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">"IT WAS FINE" — SAID AFTER TWENTY SECONDS HUNTING FOR THE BUTTON</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">people are polite; their hands are not — when words and hands disagree, believe the hands</text>

      <rect x="30" y="416" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="436" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HAND IT OVER, GIVE A TASK, AND BE QUIET</text>
      <text x="400" y="453" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">ten silent minutes watching someone else teaches more than a day of your own clicking</text>
    </DiagramFrame>
  );
};

export const WorkedWhenITriedDiagram = () => {
  const cases = [
    'submit the form empty', 'a name in the email box',
    'press the button twice, fast', 'refresh halfway through',
    'use it on a phone', 'a paragraph in a one-word box',
    'fresh browser, not signed in', 'go back and submit again',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 468" caption="One success under ideal conditions shows the thing can work — trying the awkward cases, twice, and again tomorrow shows it does.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">"It worked when I tried it" — the most dangerous sentence here</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">you tried it once, under ideal conditions — that is a single observation, not evidence it works</text>

      <rect x="30" y="58" width="300" height="150" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="300" height="20" rx="9" fill={COLORS.emerald} />
      <text x="180" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">YOUR ONE TRY — THE GREEN TICK</text>
      <circle cx="70" cy="112" r="15" fill={COLORS.emerald} />
      <path d="M 63 112 L 68 118 L 78 104" fill="none" stroke={COLORS.white} strokeWidth="2.5" />
      <text x="96" y="100" fill={COLORS.slate600} fontSize="8">once, on your machine, with</text>
      <text x="96" y="114" fill={COLORS.slate600} fontSize="8">your data, on your network,</text>
      <text x="96" y="128" fill={COLORS.slate600} fontSize="8">in the way you had in mind</text>
      <text x="46" y="158" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">proof it can work — not proof it works</text>
      <text x="46" y="176" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">generated code handles the intended path</text>
      <text x="46" y="189" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">well, and every other path thinly</text>

      <rect x="350" y="58" width="420" height="150" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="350" y="58" width="420" height="20" rx="9" fill={COLORS.amber} />
      <text x="560" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHAT YOU HAVE NOT TRIED YET — FIVE MINUTES OF AWKWARD CASES</text>
      {cases.map((t, i) => (
        <g key={i}>
          <rect x={366 + (i % 2) * 206} y={86 + Math.floor(i / 2) * 28} width="186" height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
          <text x={459 + (i % 2) * 206} y={101 + Math.floor(i / 2) * 28} textAnchor="middle" fill={COLORS.slate700} fontSize="7.5">{t}</text>
        </g>
      ))}

      <rect x="30" y="224" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="246" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">TIME AND REPETITION FIND MORE</text>
      <text x="400" y="262" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">run your list twice in a row — second tries fail because something is left over from the first</text>
      <text x="400" y="278" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">run it again tomorrow, and with more data — things expire overnight, and lists slow down as they grow</text>

      <rect x="30" y="304" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <text x="210" y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8" fontWeight="700">"I HAVE SEEN IT SUCCEED"</text>
      <text x="210" y="344" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">one observation under ideal conditions</text>
      <text x="210" y="358" textAnchor="middle" fill={COLORS.slate500} fontSize="8.2" fontStyle="italic">— capability</text>

      <rect x="410" y="304" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="590" y="326" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">"IT WORKS FOR OTHER PEOPLE"</text>
      <text x="590" y="344" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">awkward cases, twice, tomorrow, someone else</text>
      <text x="590" y="358" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontStyle="italic">— reliability</text>

      <text x="400" y="388" textAnchor="middle" fill={COLORS.red} fontSize="8.2" fontStyle="italic">most prototype disappointment lives in the gap between these two sentences</text>

      <rect x="30" y="404" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="424" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ONE GREEN RUN IS A START, NOT A VERDICT</text>
      <text x="400" y="441" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">five minutes of awkward cases, a second run, and a next-day run catch most of what a prototype hides</text>
    </DiagramFrame>
  );
};
