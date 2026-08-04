import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULES 2-3: ITERATING & WHEN IT BREAKS ============ */

export const DescribeTheGapDiagram = () => {
  const slots = [
    { h: 'WHAT I SEE', t: 'the list shows every booking' },
    { h: 'WHAT I EXPECTED', t: 'only bookings for the chosen date' },
    { h: 'THE DIFFERENCE', t: 'it is not filtering by date' },
  ];
  const spiral = ['"this is wrong — try again"', 'the AI guesses what you meant', 'a rewrite that loses working parts'];
  return (
    <DiagramFrame viewBox="0 0 800 446" caption="Describe the difference between what you got and what you wanted — a precise gap gets a precise change, a complaint gets a guess.">
      <defs>
        <marker id="arrowDTGa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Say the gap, not the verdict</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">"wrong" and "bad" carry no information — the difference between got and wanted carries all of it</text>

      <rect x="30" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE VERDICT — SAYS NOTHING</text>
      {spiral.map((t, i) => (
        <g key={i}>
          <rect x="58" y={92 + i * 46} width="304" height="28" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
          <text x="210" y={110 + i * 46} textAnchor="middle" fill={COLORS.slate700} fontSize="8">{t}</text>
          {i < 2 && <line x1="210" y1={120 + i * 46} x2="210" y2={134 + i * 46} stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowDTGa)" />}
        </g>
      ))}
      <text x="210" y="232" textAnchor="middle" fill={COLORS.red} fontSize="8.2" fontWeight="700">no information in, a guess out</text>

      <rect x="410" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE GAP — SAYS EVERYTHING</text>
      {slots.map((s, i) => (
        <g key={i}>
          <rect x="438" y={90 + i * 44} width="304" height="38" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x="450" y={104 + i * 44} fill={COLORS.emerald} fontSize="7.4" fontWeight="700">{s.h}</text>
          <text x="450" y={118 + i * 44} fill={COLORS.slate600} fontSize="8">{s.t}</text>
        </g>
      ))}
      <text x="590" y="236" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">a precise gap points at a precise change</text>

      <rect x="30" y="262" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="281" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">ASK FOR THE CHANGE — NOT A FRESH START</text>
      <text x="400" y="297" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">say "keep everything else, change this one thing" — starting over trades known problems for unknown ones</text>

      <rect x="30" y="322" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="341" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">THREE OR FOUR FAILED ROUNDS? CHANGE THE APPROACH, NOT THE WORDING</text>
      <text x="400" y="357" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">maybe two of your wishes quietly contradict each other — and good enough is a real finish line</text>

      <rect x="30" y="382" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DESCRIBE THE DIFFERENCE BETWEEN WHAT YOU GOT AND WHAT YOU WANTED</text>
      <text x="400" y="419" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">if you cannot name the gap, you have not yet decided what you want — decide first, then ask</text>
    </DiagramFrame>
  );
};

export const BreakingIsNormalDiagram = () => {
  const broken = ['one specific thing stopped working', 'you still know what you just changed', 'you know which saved version was good'];
  const lost = ['you no longer know what state it is in,', 'or which version was good, or what', 'you have changed since'];
  const habits = [
    { x: 50, w: 225, t: 'save a copy before each change' },
    { x: 293, w: 215, t: 'change one thing at a time' },
    { x: 526, w: 225, t: 'check it after every change' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 516" caption="Breaking things is the normal state of building — the real danger is stacking unchecked changes until broken turns into lost.">
      <defs>
        <marker id="arrowBINa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">It will break — and that is Tuesday, not a verdict</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the private theory that competent people never hit this is simply false</text>

      <rect x="30" y="58" width="740" height="40" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">THE SCREEN WILL GO BLANK AT SOME POINT — FOR EVERYONE</text>
      <text x="400" y="90" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">thirty-year veterans feel the same chest-drop — they have just learned it is temporary and fixable</text>

      <rect x="30" y="112" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="112" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="210" y="126" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">BROKEN — A NORMAL STATE</text>
      {broken.map((t, i) => (
        <text key={i} x="44" y={146 + i * 14} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}
      <text x="44" y="200" fill={COLORS.amber} fontSize="8.2" fontWeight="700">a bad hour at most — fixed and forgotten</text>

      <rect x="410" y="112" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="112" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="126" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">LOST — THE EXPENSIVE STATE</text>
      {lost.map((t, i) => (
        <text key={i} x="424" y={146 + i * 14} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}
      <text x="424" y="200" fill={COLORS.red} fontSize="8.2" fontWeight="700">this is what eats a whole weekend</text>

      <path d="M 210 262 L 210 278 L 590 278 L 590 266" fill="none" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowBINa)" />
      <text x="400" y="294" textAnchor="middle" fill={COLORS.red} fontSize="8" fontStyle="italic">a run of changes, none of them checked, is how broken turns into lost</text>

      <rect x="30" y="306" width="740" height="74" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="324" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">THE THREE HABITS THAT KEEP YOU ON THE LEFT-HAND SIDE</text>
      {habits.map((h, i) => (
        <g key={i}>
          <rect x={h.x} y="336" width={h.w} height="26" rx="13" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={h.x + h.w / 2} y="352" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{h.t}</text>
        </g>
      ))}

      <rect x="30" y="392" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="411" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">WHEN IT BREAKS: STOP, AND TAKE THIRTY SECONDS</text>
      <text x="400" y="427" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">write down what you changed, what you expected and what happened — before you type anything</text>

      <rect x="30" y="452" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BROKEN IS A STATE TO WORK FROM — NOT A VERDICT ON YOU</text>
      <text x="400" y="489" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">everyone who builds software breaks it constantly — and if you are angry, ten minutes away is free</text>
    </DiagramFrame>
  );
};

export const ReadingErrorsDiagram = () => {
  const stack = ['at handleSubmit (form.js: 88)', 'at onClick (app.js: 19)', 'at render (main.js: 301)', 'at run (main.js: 340)'];
  return (
    <DiagramFrame viewBox="0 0 800 510" caption="You do not need to understand an error message — capture all of it and pass it on; the top line and the file name do the work.">
      <defs>
        <marker id="arrowREMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">An error message is not written for you — and that is fine</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">most messages have three parts, and only the first two matter to you</text>

      <rect x="30" y="58" width="460" height="200" rx="10" fill={COLORS.slate900} />
      <circle cx="52" cy="76" r="4" fill={COLORS.slate600} />
      <circle cx="66" cy="76" r="4" fill={COLORS.slate600} />
      <circle cx="80" cy="76" r="4" fill={COLORS.slate600} />
      <rect x="40" y="90" width="250" height="22" rx="4" fill="none" stroke={COLORS.emerald} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="46" y="104" fill={COLORS.red} fontSize="9" fontWeight="700">Error: cannot read "name" of undefined</text>
      <rect x="40" y="115" width="190" height="20" rx="4" fill="none" stroke={COLORS.blue} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="46" y="128" fill={COLORS.blueMid} fontSize="8.5">at BookingForm — form.js, line 42</text>
      <rect x="40" y="142" width="210" height="84" rx="4" fill="none" stroke={COLORS.slate500} strokeWidth="1.2" strokeDasharray="4 3" />
      {stack.map((t, i) => (
        <text key={i} x="46" y={158 + i * 14} fill={COLORS.slate500} fontSize="8">{t}</text>
      ))}
      <text x="46" y="220" fill={COLORS.slate500} fontSize="8" fontStyle="italic">…and twelve more lines like this</text>

      <rect x="510" y="62" width="260" height="74" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.8" />
      <text x="522" y="80" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">THE TOP LINE — WHAT WENT WRONG</text>
      <text x="522" y="94" fill={COLORS.slate600} fontSize="7.9">read it loosely: "something</text>
      <text x="522" y="107" fill={COLORS.slate600} fontSize="7.9">expected a thing that was not</text>
      <text x="522" y="120" fill={COLORS.slate600} fontSize="7.9">there" — that much is enough</text>
      <line x1="506" y1="99" x2="296" y2="101" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowREMa)" />

      <rect x="510" y="146" width="260" height="60" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="522" y="164" fill={COLORS.blue} fontSize="7.8" fontWeight="700">THE FILE AND THE LINE — WHERE</text>
      <text x="522" y="178" fill={COLORS.slate600} fontSize="7.9">the exact place it happened —</text>
      <text x="522" y="191" fill={COLORS.slate600} fontSize="7.9">keep it; never retype it</text>
      <line x1="506" y1="176" x2="236" y2="128" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowREMa)" />

      <rect x="510" y="216" width="260" height="74" rx="9" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.8" />
      <text x="522" y="234" fill={COLORS.slate600} fontSize="7.8" fontWeight="700">THE LONG LIST — MOSTLY NOISE</text>
      <text x="522" y="248" fill={COLORS.slate600} fontSize="7.9">the road it travelled to get</text>
      <text x="522" y="261" fill={COLORS.slate600} fontSize="7.9">there — for your purposes,</text>
      <text x="522" y="274" fill={COLORS.slate600} fontSize="7.9">skim straight past it</text>
      <line x1="506" y1="246" x2="256" y2="192" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowREMa)" />

      <rect x="30" y="306" width="360" height="68" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="306" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="320" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">COPY THE WHOLE THING</text>
      <text x="44" y="340" fill={COLORS.slate600} fontSize="8.2">select it, copy it, paste it all — with the</text>
      <text x="44" y="354" fill={COLORS.slate600} fontSize="8.2">file names, line numbers and exact wording</text>

      <rect x="410" y="306" width="360" height="68" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="306" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="320" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHERE MESSAGES HIDE</text>
      <text x="424" y="340" fill={COLORS.slate600} fontSize="8.2">the browser console and your tool's logs —</text>
      <text x="424" y="354" fill={COLORS.slate600} fontSize="8.2">find them early, while nothing is on fire</text>

      <rect x="30" y="386" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="405" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">NOT EVERYTHING RED IS YOUR PROBLEM</text>
      <text x="400" y="421" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">clear the panel, make the problem happen again, and read only what appears at that exact moment</text>

      <rect x="30" y="446" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="466" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CAPTURE IT ACCURATELY — UNDERSTANDING IT IS OPTIONAL</text>
      <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">"nothing happened" almost always means "I have not found the message yet"</text>
    </DiagramFrame>
  );
};

export const GivingAIContextDiagram = () => {
  const slots = [
    { h: 'WHAT I DID', t: '"I filled in the booking form and pressed Confirm"' },
    { h: 'WHAT I EXPECTED', t: '"a confirmation page, and an email to me"' },
    { h: 'WHAT ACTUALLY HAPPENED', t: '"a blank page — here is the whole error: [pasted]"' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="The AI cannot see your screen — tell it what you did, what you expected and what actually happened, with the full error attached.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Report it like you would to a colleague who was not in the room</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the fix you get back is only as good as the description you gave — nothing is obvious unless you say it</text>

      <rect x="30" y="58" width="420" height="240" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="420" height="20" rx="10" fill={COLORS.blue} />
      <text x="240" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE THREE-PART REPORT — SAY ALL OF IT, EVERY TIME</text>
      {slots.map((s, i) => (
        <g key={i}>
          <rect x="46" y={88 + i * 48} width="388" height="42" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x="58" y={103 + i * 48} fill={COLORS.blue} fontSize="7.4" fontWeight="700">{i + 1} · {s.h}</text>
          <text x="58" y={117 + i * 48} fill={COLORS.slate600} fontSize="8">{s.t}</text>
        </g>
      ))}
      <rect x="46" y="238" width="388" height="52" rx="7" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="58" y="253" fill={COLORS.emerald} fontSize="7.4" fontWeight="700">THE DETAIL THAT NARROWS EVERYTHING</text>
      <text x="58" y="267" fill={COLORS.slate600} fontSize="8">"it worked before we added the date filter"</text>
      <text x="58" y="281" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">the cause is almost always inside that change</text>

      <rect x="470" y="58" width="300" height="84" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="470" y="58" width="300" height="20" rx="9" fill={COLORS.red} />
      <text x="620" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE WEAK REPORT</text>
      <text x="482" y="92" fill={COLORS.slate600} fontSize="8.2">"the booking is broken" forces a</text>
      <text x="482" y="105" fill={COLORS.slate600} fontSize="8.2">guess between a dozen possible</text>
      <text x="482" y="118" fill={COLORS.slate600} fontSize="8.2">failures — say which one you saw</text>

      <rect x="470" y="154" width="300" height="84" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="470" y="154" width="300" height="20" rx="9" fill={COLORS.amber} />
      <text x="620" y="168" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SAY THE ODD DETAILS TOO</text>
      <text x="482" y="188" fill={COLORS.slate600} fontSize="8.2">you updated something, moved a</text>
      <text x="482" y="201" fill={COLORS.slate600} fontSize="8.2">file, changed networks — say it</text>
      <text x="482" y="214" fill={COLORS.slate600} fontSize="8.2">anyway and let the AI decide</text>

      <rect x="470" y="250" width="300" height="72" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="470" y="250" width="300" height="20" rx="9" fill={COLORS.cyan} />
      <text x="620" y="264" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHEN THE FIX COMES BACK, ASK</text>
      <text x="482" y="284" fill={COLORS.slate600} fontSize="8.2">"what was wrong, and what did you</text>
      <text x="482" y="297" fill={COLORS.slate600} fontSize="8.2">change?" — fifteen seconds that</text>
      <text x="482" y="310" fill={COLORS.slate600} fontSize="8.2">slowly builds your own map</text>

      <rect x="30" y="338" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="357" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">WATCH FOR THE FIX THAT DELETES THE FEATURE</text>
      <text x="400" y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">some fixes make the error vanish by removing the check that was failing — asking is how you catch it</text>

      <rect x="30" y="398" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="418" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT I DID · WHAT I EXPECTED · WHAT ACTUALLY HAPPENED</text>
      <text x="400" y="435" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">attach the full error text, and name the last change made before it broke</text>
    </DiagramFrame>
  );
};

export const DoomLoopDiagram = () => {
  const escape = [
    'stop — no "one more try"',
    'return to the last saved, checked version',
    'discard everything since — the hour is',
    'already spent, and the code it made is',
    'a tangle of fixes for fixes',
    'then: one change · check · save · repeat',
  ];
  const rules = [
    'three failed fixes on one problem = revert',
    'never stack a change on an unchecked one',
    'thirty minutes stuck = step away',
    'decide these rules while you are calm',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Each fix breaking a new thing is the doom loop — the way out is backwards, to the last version you saved and checked.">
      <defs>
        <marker id="arrowDLPa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
        <marker id="arrowDLPb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The doom loop, and the way out — which points backwards</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each fix lands on code that keeps shifting underneath — with no solid point to compare against</text>

      <rect x="30" y="96" width="400" height="224" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="230" y="114" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">THE DOOM LOOP — EVERY TURN DIGS DEEPER</text>
      <rect x="160" y="126" width="140" height="30" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="230" y="145" textAnchor="middle" fill={COLORS.slate700} fontSize="8">something breaks</text>
      <rect x="250" y="246" width="160" height="44" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="330" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="8">the fix "works" —</text>
      <text x="330" y="278" textAnchor="middle" fill={COLORS.slate700} fontSize="8">a new thing breaks</text>
      <rect x="50" y="246" width="160" height="44" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="130" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="8">try another fix,</text>
      <text x="130" y="278" textAnchor="middle" fill={COLORS.slate700} fontSize="8">checking less each time</text>
      <line x1="288" y1="160" x2="326" y2="240" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowDLPa)" />
      <line x1="244" y1="268" x2="216" y2="268" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowDLPa)" />
      <line x1="134" y1="240" x2="172" y2="160" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowDLPa)" />
      <text x="230" y="192" textAnchor="middle" fill={COLORS.red} fontSize="8" fontStyle="italic">an hour later you are</text>
      <text x="230" y="205" textAnchor="middle" fill={COLORS.red} fontSize="8" fontStyle="italic">further from working</text>
      <text x="230" y="218" textAnchor="middle" fill={COLORS.red} fontSize="8" fontStyle="italic">than when you started</text>
      <text x="230" y="308" textAnchor="middle" fill={COLORS.red} fontSize="7.8">frustration speeds you up exactly when you should slow down</text>

      <line x1="414" y1="264" x2="466" y2="196" stroke={COLORS.emerald} strokeWidth="2.2" markerEnd="url(#arrowDLPb)" />
      <text x="408" y="228" textAnchor="end" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">the way out</text>

      <rect x="470" y="96" width="300" height="114" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="470" y="96" width="300" height="20" rx="9" fill={COLORS.emerald} />
      <text x="620" y="110" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE WAY OUT IS BACKWARDS</text>
      {escape.map((t, i) => (
        <text key={i} x="482" y={132 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
      ))}

      <rect x="470" y="222" width="300" height="84" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="470" y="222" width="300" height="20" rx="9" fill={COLORS.amber} />
      <text x="620" y="236" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">RULES THAT STOP IT STARTING</text>
      {rules.map((t, i) => (
        <text key={i} x="482" y={256 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
      ))}

      <rect x="470" y="318" width="300" height="62" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="470" y="318" width="300" height="20" rx="9" fill={COLORS.cyan} />
      <text x="620" y="332" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">OR START A FRESH CONVERSATION</text>
      <text x="482" y="352" fill={COLORS.slate600} fontSize="8">long chats hoard wrong turns — open a clean</text>
      <text x="482" y="365" fill={COLORS.slate600} fontSize="8">one, paste the spec and the problem, and</text>
      <text x="482" y="378" fill={COLORS.slate600} fontSize="8">keep the code — drop only the argument</text>

      <rect x="30" y="396" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="416" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THREE FAILED FIXES MEANS STOP — GO BACK TO THE LAST SAVED, CHECKED VERSION</text>
      <text x="400" y="433" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the loop, not the tools, ends most first projects — and saved copies are the only door out</text>
    </DiagramFrame>
  );
};
