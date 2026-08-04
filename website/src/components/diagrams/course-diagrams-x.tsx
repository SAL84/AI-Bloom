import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULES 1-2: TOOLS & FROM IDEA TO FIRST VERSION ============ */

export const VibecodingToolsDiagram = () => {
  const cats = [
    {
      c: COLORS.blue, h: 'CHAT ASSISTANTS',
      l: ['a conversation window — you describe, code', 'comes back, and you put it somewhere yourself'],
      eg: 'e.g. Claude · ChatGPT · Gemini',
      best: 'best for: a quick explanation or one small script',
    },
    {
      c: COLORS.cyan, h: 'IN-EDITOR ASSISTANTS',
      l: ['they sit where your code lives, can see every', 'file, and can change several at once'],
      eg: 'e.g. Cursor · GitHub Copilot · Claude Code',
      best: 'best for: changing something that already exists',
    },
    {
      c: COLORS.emerald, h: 'PROMPT-TO-APP BUILDERS',
      l: ['you describe an app and get a working thing,', 'already running on the internet'],
      eg: 'e.g. Lovable · Replit · Bolt · v0',
      best: 'best for: the fastest start on something new',
    },
    {
      c: COLORS.slate600, h: 'HOSTING & DATABASES',
      l: ['the plumbing — hosting puts it at a real web', 'address; a database keeps what your app stores'],
      eg: 'e.g. Vercel · Netlify · Supabase · Firebase',
      best: 'builders bundle these; otherwise you choose',
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="The four categories are the durable part — pick by what you are making, and check what is current before spending time or money.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four kinds of tool — the categories outlast the names</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">products here launch, merge, get bought and disappear inside a year — learn the shape, not the brand</text>

      <rect x="30" y="58" width="740" height="44" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">EVERY NAME BELOW IS AN EXAMPLE AT THE TIME OF WRITING — NOT A RECOMMENDATION, NOT A RANKING</text>
      <text x="400" y="92" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">this page dates faster than any other in the library — check what people are shipping with before you commit</text>

      {cats.map((cat, i) => (
        <g key={i}>
          <rect x={30 + (i % 2) * 380} y={114 + Math.floor(i / 2) * 130} width="360" height="118" rx="9" fill={COLORS.white} stroke={cat.c} strokeWidth="2" />
          <rect x={30 + (i % 2) * 380} y={114 + Math.floor(i / 2) * 130} width="360" height="20" rx="9" fill={cat.c} />
          <text x={210 + (i % 2) * 380} y={128 + Math.floor(i / 2) * 130} textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">{cat.h}</text>
          {cat.l.map((t, j) => (
            <text key={j} x={44 + (i % 2) * 380} y={150 + Math.floor(i / 2) * 130 + j * 14} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          <text x={44 + (i % 2) * 380} y={186 + Math.floor(i / 2) * 130} fill={COLORS.slate500} fontSize="8" fontStyle="italic">{cat.eg}</text>
          <text x={44 + (i % 2) * 380} y={206 + Math.floor(i / 2) * 130} fill={cat.c} fontSize="8.1" fontWeight="700">{cat.best}</text>
        </g>
      ))}

      <rect x="30" y="378" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="397" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">PICK BY THE SHAPE OF YOUR PROJECT, NOT BY WHICHEVER TOOL IS LOUDEST THIS MONTH</text>
      <text x="400" y="413" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">using two together is normal — a builder for the first version, an in-editor assistant once you outgrow it</text>

      <rect x="30" y="438" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="457" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE SKILLS IN THIS COURSE BELONG TO YOU, NOT TO ANY PRODUCT</text>
      <text x="400" y="473" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">clear descriptions, one change at a time, saved copies and honest testing transfer to whatever comes next</text>
    </DiagramFrame>
  );
};

export const PlainLanguageSpecDiagram = () => {
  const sections = [
    { c: COLORS.blue, h: 'WHO IS IT FOR?', l: ['one concrete person — their device, what they', 'already know, how much patience they have'] },
    { c: COLORS.blue, h: 'WHAT MUST IT DO?', l: ['the actions someone can take, listed plainly,', 'in the order they would happen'] },
    { c: COLORS.red, h: 'WHAT MUST IT NEVER DO?', l: ['the part people skip — if you never say visitors', 'cannot see each other\'s entries, nothing implies it'] },
    { c: COLORS.emerald, h: 'WHAT IS TRUE WHEN IT IS DONE', l: ['5–10 statements you can check in under a minute,', 'written before you build, while your eyes are clear'] },
  ];
  const flow = [
    { c: COLORS.blue, h: 'PASTE THE WHOLE SPEC', l: 'as context, every session' },
    { c: COLORS.cyan, h: 'ASK FOR ONE SMALL PIECE', l: 'not the whole document at once' },
    { c: COLORS.emerald, h: 'CHECK AGAINST THE DONE LIST', l: 'the statements you wrote first' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Who it is for, what it must do, what it must never do, and what is true when done — then paste it all in and ask for one small piece.">
      <defs>
        <marker id="arrowPLSa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A spec is three questions and a finish line, in ordinary sentences</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">no technical document needed — unstated assumptions are not implied, they are simply absent</text>

      <rect x="30" y="58" width="400" height="310" rx="10" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <rect x="30" y="58" width="400" height="22" rx="10" fill={COLORS.slate600} />
      <text x="230" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE WHOLE SPEC — ONE PAGE, PLAIN SENTENCES</text>
      {sections.map((s, i) => (
        <g key={i}>
          <rect x="44" y={90 + i * 68} width="372" height="58" rx="8" fill={COLORS.slate50} stroke={s.c} strokeWidth="1.6" />
          <text x="56" y={107 + i * 68} fill={s.c} fontSize="8.3" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <text key={j} x="56" y={122 + i * 68 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
        </g>
      ))}

      {flow.map((f, i) => (
        <g key={i}>
          <rect x="450" y={70 + i * 70} width="320" height="46" rx="9" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <text x="610" y={88 + i * 70} textAnchor="middle" fill={f.c} fontSize="8.6" fontWeight="700">{f.h}</text>
          <text x="610" y={104 + i * 70} textAnchor="middle" fill={COLORS.slate600} fontSize="7.9">{f.l}</text>
          {i < 2 && <line x1="610" y1={116 + i * 70} x2="610" y2={136 + i * 70} stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowPLSa)" />}
        </g>
      ))}
      <rect x="450" y="280" width="320" height="88" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="464" y="300" fill={COLORS.red} fontSize="8.4" fontWeight="700">A WISH PLUS A WIDE REQUEST</text>
      <text x="464" y="316" fill={COLORS.slate600} fontSize="8.1">without the spec it guesses; without the</text>
      <text x="464" y="330" fill={COLORS.slate600} fontSize="8.1">small piece it attempts everything — what</text>
      <text x="464" y="344" fill={COLORS.slate600} fontSize="8.1">comes back is broad, shallow and hard to fix</text>

      <rect x="30" y="384" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">KEEP THE SPEC IN A FILE YOU CAN PASTE AGAIN</text>
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">conversations forget and tools restart — re-stating the same constraints stops the slow drift</text>

      <rect x="30" y="442" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">VAGUE SPOTS GET FILLED WITH GUESSES — REMOVE THE GUESS WHERE IT WOULD ANNOY YOU</text>
      <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">and say what happens when things go wrong — the unhappy paths are where generated software is thinnest</text>
    </DiagramFrame>
  );
};

export const OneThingAtATimeDiagram = () => {
  const pile = ['one giant request', 'a pile of code arrives, untested together', 'something is wrong — but which part?'];
  const steps = ['ask for one small change', 'try it — does it work?', 'save a copy of the working version', 'ask for the next thing'];
  const order = [
    { x: 56, w: 140, t: 'something on screen' },
    { x: 224, w: 180, t: 'the core action, end to end' },
    { x: 432, w: 160, t: 'handle the wrong cases' },
    { x: 620, w: 130, t: 'make it look right' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Ask for one change, check it works, save a copy, then ask for the next — so a break always has exactly one suspect.">
      <defs>
        <marker id="arrowOTTa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
        <marker id="arrowOTTb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowOTTc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One change per request — so there is only ever one suspect</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">asking for everything at once feels efficient, and it is the most reliable way to get stuck</text>

      <rect x="30" y="58" width="360" height="200" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="10" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE PILE — EVERYTHING AT ONCE</text>
      {pile.map((t, i) => (
        <g key={i}>
          <rect x="60" y={90 + i * 44} width="300" height="28" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
          <text x="210" y={108 + i * 44} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
          {i < 2 && <line x1="210" y1={118 + i * 44} x2="210" y2={130 + i * 44} stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowOTTa)" />}
        </g>
      ))}
      <text x="60" y="230" fill={COLORS.red} fontSize="8" fontWeight="700">vague complaint → more changes → lost —</text>
      <text x="60" y="244" fill={COLORS.red} fontSize="8" fontWeight="700">you no longer know what was ever working</text>

      <rect x="410" y="58" width="360" height="200" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="10" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE STAIRCASE — ONE THING AT A TIME</text>
      {steps.map((t, i) => (
        <g key={i}>
          <rect x="440" y={88 + i * 34} width="300" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x="590" y={104 + i * 34} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
          {i < 3 && <line x1="590" y1={112 + i * 34} x2="590" y2={120 + i * 34} stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowOTTb)" />}
        </g>
      ))}
      <text x="440" y="240" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">if it breaks, there is exactly one change to suspect</text>

      <rect x="30" y="274" width="740" height="76" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="274" width="740" height="20" rx="10" fill={COLORS.blue} />
      <text x="400" y="288" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A SENSIBLE ORDER — SPINE FIRST, LOOKS LAST</text>
      {order.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="304" width={p.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="320" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
          {i < 3 && <line x1={p.x + p.w + 4} y1="317" x2={order[i + 1].x - 4} y2="317" stroke={COLORS.blue} strokeWidth="1.4" markerEnd="url(#arrowOTTc)" />}
        </g>
      ))}
      <text x="400" y="344" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">looks are the cheapest thing to change and the biggest time sink — polish only after the flow works</text>

      <rect x="30" y="366" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="385" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">BEFORE EVERY CHANGE, COPY THE VERSION THAT WORKS</text>
      <text x="400" y="401" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">a dated folder is unglamorous and completely enough — "go back" only works if there is a back to go to</text>

      <rect x="30" y="426" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="445" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CHECK EACH PIECE WORKS BEFORE YOU ASK FOR THE NEXT ONE</text>
      <text x="400" y="461" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a known-working floor under your feet is what makes the next step safe to take</text>
    </DiagramFrame>
  );
};

export const ScreensAndFlowsDiagram = () => {
  const flowSteps = [
    'lands on the home page',
    'presses Book',
    'picks a date and time still free',
    'enters name and email',
    'sees a confirmation with details',
    'I get an email — behind the scenes',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Walk through the screen top to bottom and write the flow as numbered steps — the same numbers become your test script later.">
      <defs>
        <marker id="arrowSCFa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Describe a screen like a room, and a flow as numbered steps</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">what is there, what can be pressed, and what changes after — that is enough to build from</text>

      <rect x="30" y="58" width="360" height="280" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="210" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE SCREEN — TOP TO BOTTOM, LIKE A ROOM</text>
      <rect x="70" y="88" width="170" height="190" rx="8" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="1.6" />
      <text x="155" y="112" textAnchor="middle" fill={COLORS.slate700} fontSize="8.5" fontWeight="700">Join the list</text>
      <rect x="86" y="130" width="138" height="22" rx="4" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="94" y="144" fill={COLORS.slate400} fontSize="7.5">your email</text>
      <rect x="86" y="162" width="138" height="24" rx="5" fill={COLORS.emerald} />
      <text x="155" y="178" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">Join</text>
      <line x1="155" y1="186" x2="155" y2="210" stroke={COLORS.emerald} strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrowSCFa)" />
      <rect x="86" y="214" width="138" height="34" rx="5" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="155" y="228" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">Thanks — check</text>
      <text x="155" y="240" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">your inbox</text>
      <text x="252" y="112" fill={COLORS.slate600} fontSize="7.8">say what is at the top</text>
      <text x="252" y="142" fill={COLORS.slate600} fontSize="7.8">name every control</text>
      <text x="252" y="176" fill={COLORS.slate600} fontSize="7.8">say what pressing it does</text>
      <text x="252" y="222" fill={COLORS.slate600} fontSize="7.8">say what changes after</text>
      <text x="252" y="234" fill={COLORS.slate600} fontSize="7.8">the press — not just</text>
      <text x="252" y="246" fill={COLORS.slate600} fontSize="7.8">what triggers it</text>
      <rect x="44" y="296" width="332" height="32" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="210" y="309" textAnchor="middle" fill={COLORS.red} fontSize="7.6">"clean and modern" carries no information —</text>
      <text x="210" y="321" textAnchor="middle" fill={COLORS.red} fontSize="7.6">it gets you someone else's taste</text>

      <rect x="410" y="58" width="360" height="280" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="590" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE FLOW — SCREENS PLUS ARROWS, NUMBERED</text>
      <line x1="436" y1="100" x2="436" y2="250" stroke={COLORS.slate300} strokeWidth="1.4" />
      {flowSteps.map((t, i) => (
        <g key={i}>
          <circle cx="436" cy={100 + i * 30} r="9" fill={COLORS.blue} />
          <text x="436" y={103 + i * 30} textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">{i + 1}</text>
          <text x="454" y={103 + i * 30} fill={COLORS.slate600} fontSize="8.2">{t}</text>
        </g>
      ))}
      <text x="590" y="304" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">later, the same numbers are your test script —</text>
      <text x="590" y="317" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">"step 4 fails" beats "booking is broken"</text>

      <rect x="30" y="354" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="373" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">BORROW INSTEAD OF INVENTING — NAME PATTERNS PEOPLE ALREADY KNOW</text>
      <text x="400" y="389" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">"like a normal checkout" says a lot in four words — and point at the exact part of a site you like</text>

      <rect x="30" y="414" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="433" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">NAME THE PARTS, THE PRESSES, AND WHAT CHANGES AFTER</text>
      <text x="400" y="449" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">that twenty-second description is specific enough to build from and short enough to write</text>
    </DiagramFrame>
  );
};

export const NotWhatYouPicturedDiagram = () => {
  const piles = [
    {
      c: COLORS.amber, h: 'WRONG UNDERSTANDING',
      l: ['it built something else', 'entirely — your description', 'missed the point'],
      a: ['restate the goal from', 'the top — do not tweak'],
    },
    {
      c: COLORS.blue, h: 'WRONG DETAILS',
      l: ['the right thing with wrong', 'specifics — colour, order,', 'a missing field'],
      a: ['name the exact fix,', 'one at a time'],
    },
    {
      c: COLORS.red, h: 'WRONG BEHAVIOUR',
      l: ['looks right, but does the', 'wrong thing when used —', 'nothing on screen warns you'],
      a: ['take this pile most', 'seriously — it hides'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="A first result that differs from the picture in your head is a draft, not a failure — sort what is wrong into three piles before reacting.">
      <defs>
        <marker id="arrowNPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The first version will not match the picture in your head</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your head holds a hundred details you never wrote down — the result reflects only the part you said</text>

      <rect x="30" y="58" width="740" height="40" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">IT IS A DRAFT TO REACT TO — NOT A VERDICT ON YOUR IDEA, OR ON YOU</text>
      <text x="400" y="90" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">skilled builders are not better at first prompts — they are quick to say precisely what is wrong</text>

      <rect x="300" y="114" width="200" height="34" rx="9" fill={COLORS.slate900} />
      <text x="400" y="135" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">WHAT CAME BACK</text>
      <line x1="350" y1="148" x2="162" y2="174" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowNPDa)" />
      <line x1="400" y1="148" x2="400" y2="174" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowNPDa)" />
      <line x1="450" y1="148" x2="638" y2="174" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowNPDa)" />

      {piles.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 256} y="178" width="228" height="116" rx="9" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={30 + i * 256} y="178" width="228" height="20" rx="9" fill={p.c} />
          <text x={144 + i * 256} y="192" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{p.h}</text>
          {p.l.map((t, j) => (
            <text key={j} x={42 + i * 256} y={214 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
          {p.a.map((t, j) => (
            <text key={j} x={42 + i * 256} y={262 + j * 13} fill={p.c} fontSize="8" fontWeight="700">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="310" width="740" height="44" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="328" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">THE CLASSIC TIME SINK — ENDLESS SMALL TWEAKS TO A MISUNDERSTANDING</text>
      <text x="400" y="344" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">when the understanding is wrong, adjusting details cannot fix it — go back and restate what you want</text>

      <rect x="30" y="368" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="388" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">SOMETIMES WHAT CAME BACK IS BETTER THAN WHAT YOU ASKED FOR</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">seeing a thing exist reveals what thinking never does — update the spec rather than defending it</text>

      <rect x="30" y="434" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="453" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SORT WHAT IS WRONG INTO THREE PILES BEFORE YOU REACT</text>
      <text x="400" y="469" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">each pile needs a different response — and mixing them up is where the time goes</text>
    </DiagramFrame>
  );
};
