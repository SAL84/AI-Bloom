import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ REAL PRODUCTS — MODULE 2: BUILDING AND TESTING ============ */
export const CollapsedSliceDiagram = () => {
  const invisible = [
    ['data', 'where the bookings actually live, and what happens when one of them is wrong'],
    ['accounts', 'who can sign in, and who is allowed to see what'],
    ['shipping', 'how a change reaches customers without breaking what they are using'],
    ['watching', 'how you find out it broke — before the groomer does'],
    ['support', 'who answers the email when a customer is locked out on a Saturday'],
  ];
  const wrong = [
    'the gap between prototype and product looks',
    'smaller than it used to — while staying exactly',
    'as wide as it always was',
    'judgement recalibrated on the demo is judgement',
    'trained on the wrong evidence',
  ];
  const speed = [
    '· the admin view — the whole week at a glance,',
    '  not a customer page she was never meant to use',
    '· the cancellation flow — a customer frees a slot',
    '  without ringing mid-groom',
    '· each arrives in hours, not days, like the first screen',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="AI collapsed the cost of the demo slice — the part that was always cheapest to show — while everything the screens rely on stayed the same size.">
      <defs><marker id="arrowRPb1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The weekend collapsed exactly the slice that shows off best</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the screens got cheap; everything the screens quietly rely on did not get cheaper at all</text>
      <rect x="30" y="56" width="740" height="220" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SAME PRODUCT, BEFORE AND AFTER THE FAST WEEKEND</text>
      <text x="122" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">before AI</text>
      <text x="287" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">with AI</text>
      <rect x="70" y="92" width="105" height="34" rx="4" fill={COLORS.amber} />
      <text x="122" y="112" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">the screens</text>
      <rect x="235" y="118" width="105" height="10" rx="3" fill={COLORS.amber} />
      <text x="345" y="114" fill={COLORS.amber} fontSize="6.4" fontWeight="700">the screens</text>
      <line x1="178" y1="109" x2="231" y2="122" stroke={COLORS.slate500} strokeWidth="1.3" strokeDasharray="4 3" markerEnd="url(#arrowRPb1)" />
      <text x="205" y="102" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">AI collapsed this</text>
      <text x="430" y="86" fill={COLORS.red} fontSize="7.4" fontWeight="700">WHAT STAYED EXACTLY AS EXPENSIVE</text>
      {invisible.map((row, i) => (
        <g key={i}>
          <rect x="70" y={132 + i * 26} width="105" height="22" rx="3" fill={COLORS.slate500} />
          <text x="122" y={146 + i * 26} textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">{row[0]}</text>
          <rect x="235" y={132 + i * 26} width="105" height="22" rx="3" fill={COLORS.slate500} />
          <text x="287" y={146 + i * 26} textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">{row[0]}</text>
          <line x1="344" y1={143 + i * 26} x2="424" y2={143 + i * 26} stroke={COLORS.slate300} strokeWidth="1" />
          <text x="430" y={146 + i * 26} fill={COLORS.slate600} fontSize="6.9">{row[1]}</text>
        </g>
      ))}
      <text x="430" y="264" fill={COLORS.red} fontSize="7.2" fontStyle="italic">“it took a weekend” — true about the slice, false about the product</text>
      <text x="122" y="268" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4" fontStyle="italic">none of these were in the demo</text>
      <rect x="30" y="286" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="286" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="299" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE WRONG CONCLUSION</text>
      {wrong.map((t, i) => <text key={i} x="44" y={316 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="382" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">nobody’s fault, and still your problem</text>
      <rect x="410" y="286" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="286" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="299" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SPEED IS REAL — KEEP USING IT</text>
      {speed.map((t, i) => <text key={i} x="424" y={316 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="382" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the mistake was never believing AI is fast — it is</text>
      <rect x="30" y="400" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE SCREENS WERE NEVER THE EXPENSIVE PART — EVEN BEFORE AI</text> <text x="400" y="437" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">keep the speed, correct the conclusion: visible work became cheap, and visible work was always the small share</text>
    </DiagramFrame>
  );
};
export const DemoVsProductWorksDiagram = () => {
  const demo = [
    '· worked once — a single pass along the happy path',
    '· worked for you — the one person who knows what to press',
    '· worked on your machine — your settings, your fast connection',
    '· worked with friendly data, entered by someone hoping it would succeed',
  ];
  const product = [
    '· keeps working — for months, not for a moment',
    '· for strangers — nobody standing behind them, knowing the order',
    '· on old phones, with patchy signal',
    '· with input nobody would design for',
  ];
  const cases = [
    { c: ['two owners tap the same ten', 'o’clock slot within a second'], a: ['only one dog can be groomed —', 'the page refuses one politely'] },
    { c: ['a thumb double-taps the', 'confirm button'], a: ['one intention becomes one', 'appointment, never two'] },
    { c: ['a booking arrives for a dog', 'the system has never met'], a: ['the record has to mean', 'something anyway'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 444" caption="The demo’s “works” carries four hidden qualifiers; a product gets to keep none of them.">
      <defs><marker id="arrowRPb2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">“It works” is two different claims wearing the same word</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">one claim is about a moment with you watching; the other is about time, and strangers</text>
      <rect x="30" y="56" width="360" height="132" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE DEMO’S CLAIM — A MOMENT</text>
      {demo.map((t, i) => <text key={i} x="44" y={92 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="156" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">none of it was cheating — a prototype is allowed all four qualifiers</text>
      <text x="44" y="168" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">and every one of them was quietly propping up the result</text>
      <rect x="410" y="56" width="360" height="132" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="590" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE PRODUCT’S CLAIM — TIME AND STRANGERS</text>
      {product.map((t, i) => <text key={i} x="424" y={92 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="156" fill={COLORS.blue} fontSize="7" fontWeight="700">a product is what remains after your presence is subtracted</text>
      <text x="424" y="168" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">which is the entire point of having built it</text>
      <rect x="30" y="200" width="740" height="150" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="200" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="213" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE GROOMER’S PAGE MEETS A REAL SATURDAY — NOBODY IS DOING ANYTHING WRONG</text>
      {cases.map((k, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="228" width="228" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          {k.c.map((t, j) => <text key={j} x={160 + i * 246} y={242 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
          <line x1={160 + i * 246} y1="264" x2={160 + i * 246} y2="276" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowRPb2)" />
          <rect x={46 + i * 246} y="280" width="228" height="34" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
          {k.a.map((t, j) => <text key={j} x={160 + i * 246} y={294 + j * 11} textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">{t}</text>)}
        </g>
      ))}
      <text x="400" y="330" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">each awkward case needs an answer chosen on purpose, not left to chance — a different, slower activity from building</text>
      <text x="400" y="342" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">more screens do not close the gap — adding the cancellation flow does nothing to make the double-tap safe</text>
      <rect x="30" y="360" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="380" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A DEMO CLAIMS A MOMENT; A PRODUCT CLAIMS MONTHS AND STRANGERS</text> <text x="400" y="397" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">going looking for the awkward cases is where the real workmanship of this stage lives</text>
    </DiagramFrame>
  );
};
export const ChecksWhileYouSleepDiagram = () => {
  const decay = [42, 38, 32, 24, 15, 8];
  const promises = [
    '· a taken slot never shows as free',
    '· a double-tap makes exactly one booking',
    '· the groomer’s email goes out within a minute',
  ];
  const costs = [
    'writing them is cheap now — “add the cancellation flow, and add a check that a cancelled slot shows as free again”',
    'the habit is the expensive part: every new promise gets its check, and a failing check is believed, never deleted',
    'in a one-person product nobody will catch you cheating — the discipline of never shipping past a failing check is yours alone',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="A machine-run check is a promise about your product, tried automatically on every change — your checklist stops depending on you.">
      <defs><marker id="arrowRPb3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The checklist learns to run itself</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Vibecoding taught you to run the whole list after every change — this lesson promotes that habit, not replaces it</text>
      <rect x="30" y="56" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE HAND-RUN LIST — DECAYS WITH ATTENTION</text>
      {decay.map((h, i) => <rect key={i} x={56 + i * 34} y={148 - h} width="24" height={h} rx="2" fill={i < 2 ? COLORS.amber : COLORS.slate300} />)}
      <line x1="50" y1="148" x2="266" y2="148" stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="158" y="158" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">how often the list really gets run, change after change →</text>
      <text x="280" y="106" fill={COLORS.slate600} fontSize="6.8">a product gets changed</text>
      <text x="280" y="117" fill={COLORS.slate600} fontSize="6.8">for years — and any</text>
      <text x="280" y="128" fill={COLORS.slate600} fontSize="6.8">change can break some-</text>
      <text x="280" y="139" fill={COLORS.slate600} fontSize="6.8">thing far from it</text>
      <text x="44" y="174" fill={COLORS.slate600} fontSize="7.2">you skip it once — the change was tiny — and you are right</text>
      <text x="44" y="186" fill={COLORS.slate600} fontSize="7.2">then you skip it again, and you are right again — at first</text>
      <text x="44" y="199" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">attention decays fastest when nothing has gone wrong for a while</text>
      <rect x="410" y="56" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">MACHINE-RUN PROMISES — NO ATTENTION TO LOSE</text>
      {decay.map((h, i) => <rect key={i} x={436 + i * 34} y="106" width="24" height="42" rx="2" fill={COLORS.emerald} />)}
      <line x1="430" y1="148" x2="646" y2="148" stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="538" y="158" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">every promise, tried on every change, identically →</text>
      <text x="660" y="106" fill={COLORS.slate600} fontSize="6.8">at two in the</text>
      <text x="660" y="117" fill={COLORS.slate600} fontSize="6.8">afternoon or</text>
      <text x="660" y="128" fill={COLORS.slate600} fontSize="6.8">eleven at night,</text>
      <text x="660" y="139" fill={COLORS.slate600} fontSize="6.8">on holiday</text>
      {promises.map((t, i) => <text key={i} x="424" y={174 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="700" y="199" textAnchor="end" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">your checklist is the raw material</text>
      <rect x="30" y="216" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="234" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">WHAT HAPPENS ON EVERY CHANGE — THE TINY ONE AND THE FRIGHTENING ONE ALIKE</text>
      <rect x="46" y="250" width="150" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="121" y="268" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">you change something</text>
      <line x1="200" y1="264" x2="222" y2="264" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowRPb3)" />
      <rect x="226" y="250" width="164" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
      <text x="308" y="268" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">every promise is tried, automatically</text>
      <line x1="394" y1="258" x2="428" y2="250" stroke={COLORS.emerald} strokeWidth="1.3" markerEnd="url(#arrowRPb3)" />
      <line x1="394" y1="270" x2="428" y2="284" stroke={COLORS.red} strokeWidth="1.3" markerEnd="url(#arrowRPb3)" />
      <rect x="432" y="238" width="322" height="26" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" />
      <text x="593" y="255" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">every promise holds — the change goes through</text>
      <rect x="432" y="272" width="322" height="26" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="593" y="289" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">one breaks — refused before it reaches anyone, and you are told which</text>
      <rect x="30" y="318" width="740" height="72" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHAT THIS HONESTLY COSTS</text>
      {costs.map((t, i) => <text key={i} x="400" y={350 + i * 13} textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="30" y="398" width="740" height="34" rx="7" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
      <text x="400" y="412" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">one boundary: if your product has AI inside it, testing whether its answers are any good is a different discipline —</text>
      <text x="400" y="424" textAnchor="middle" fill={COLORS.cyan} fontSize="7.2" fontWeight="700">the course ‘Does Your AI Actually Work?’ teaches it; for everything else, promises and checks are enough</text>
      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">YOUR CHECKLIST STOPS DEPENDING ON YOU REMEMBERING TO RUN IT</text> <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">hand-run lists decay at the speed of attention — machines have none to lose</text>
    </DiagramFrame>
  );
};
export const LedgerAfterDemoDiagram = () => {
  const spent = [
    { w: 60, c: COLORS.blue, t: 'demo · 2' },
    { w: 90, c: COLORS.cyan, t: 'plan · 3' },
    { w: 120, c: COLORS.emerald, t: 'build & checks · 4' },
  ];
  const remaining = [
    { w: 270, t: 'data, accounts, services · 9' },
    { w: 150, t: 'ship & run · 5' },
  ];
  const eyes = [
    '· every page exists, and every check passes',
    '· the admin view works; the cancellation flow works',
    '· nothing left to click that does not do its job',
  ];
  const ledger = [
    '· well under half the product exists',
    '· the majority was never going to be visible on screen',
    '· from here you are buying properties, not pixels',
  ];
  const remains = ['data', 'accounts', 'hidden services', 'shipping', 'watching', 'support'];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Nine days of twenty-three are spent, everything visible is finished — and well under half the product exists.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Nine days of twenty-three — and everything on screen is finished</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your eyes and the ledger disagree about how done this is, and both are right</text>
      <rect x="30" y="56" width="740" height="130" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE LEDGER SO FAR — 2 + 3 + 4 = 9 OF THE 23 DAYS THIS COURSE COUNTS HONESTLY</text>
      {spent.map((s, i) => {
        const x = 55 + spent.slice(0, i).reduce((a, b) => a + b.w, 0);
        return (
          <g key={i}>
            <rect x={x} y="96" width={s.w - 3} height="26" rx="3" fill={s.c} />
            <text x={x + s.w / 2 - 1} y="112" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">{s.t}</text>
          </g>
        );
      })}
      {remaining.map((r, i) => {
        const x = 325 + (i === 0 ? 0 : 270);
        return (
          <g key={i}>
            <rect x={x} y="96" width={r.w - 3} height="26" rx="3" fill={COLORS.slate100} stroke={COLORS.amber} strokeWidth="1.4" strokeDasharray="5 3" />
            <text x={x + r.w / 2 - 1} y="112" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">{r.t}</text>
          </g>
        );
      })}
      <text x="190" y="138" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">9 days spent — everything you can see is in here</text>
      <text x="535" y="138" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">the missing fourteen — none of it changes how the product looks</text>
      <text x="400" y="156" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">from here on you are no longer buying pixels — you are buying survives a mistake, notices its own failures, runs without you</text>
      <text x="400" y="172" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">and beyond the 23: the second year, which is not a build stage at all — and turns out to be the longest line of the lot</text>
      <rect x="30" y="196" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="196" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="209" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT YOUR EYES SAY</text>
      {eyes.map((t, i) => <text key={i} x="44" y={232 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="286" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">it looks finished — and that is real, not an illusion</text>
      <rect x="410" y="196" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="196" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="209" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT THE LEDGER SAYS</text>
      {ledger.map((t, i) => <text key={i} x="424" y={232 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="286" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">exactly how the demo misled you — and why the ledger is worth keeping</text>
      <rect x="30" y="310" width="740" height="102" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="310" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="323" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE MOST TEMPTING MOMENT TO STOP — WHERE MOST VIBECODED PRODUCTS QUIETLY SHIP</text>
      {remains.map((t, i) => (
        <g key={i}>
          <rect x={46 + i * 120} y="336" width="112" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={102 + i * 120} y="349" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      <text x="400" y="372" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">shipping here means strangers on a product with no practised way to recover their data, no thought-through accounts,</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and no answer for the week the email service has a bad day — Vibecoding’s ‘Before You Let Anyone Else Use It’ still applies</text>
      <text x="400" y="400" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">you may ship a demo — just do not mistake that for shipping a product</text>
      <rect x="30" y="422" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="442" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EVERYTHING VISIBLE IS DONE, AND WELL UNDER HALF THE PRODUCT EXISTS</text> <text x="400" y="459" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">both facts are true at once — the distance between demo and product is the next two modules</text>
    </DiagramFrame>
  );
};
