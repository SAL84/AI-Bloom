import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ FROM PROTOTYPE TO PRODUCT — MODULE 1: BEFORE YOU BUILD THE REST ============ */
export const ProductBehindTheDemoDiagram = () => {
  const layers = [
    ['the data', 'recorded properly, backed up, restorable'],
    ['accounts', 'each customer kept to their own bookings'],
    ['shipping', 'putting it where people can rely on it'],
    ['watching', 'knowing it broke before the customer says so'],
    ['support and fixes', 'the late-night email · the second year'],
  ];
  const gmail = [
    'the screen fills with something real, and the thought arrives —',
    'but Gmail is not hard because the code is hard:',
    '· spam filtering at a scale you cannot picture',
    '· twenty years of edge cases · compliance · migration',
    '· a sending reputation earned message by message',
    '· a support organisation · uptime millions plan around',
  ];
  const right = [
    'you genuinely can make working software now — that is real',
    'AI collapsed the cost of the first slice: the visible screens,',
    'the happy path, the demo — and left everything else untouched',
    'so the gap feels smaller while staying exactly as wide as ever',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="The demo is the small visible slice of a much larger product — the stack is drawn to the ledger’s true scale.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The demo is the visible slice — the product is everything underneath</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the ability you felt is real; the conclusion you drew from it needs correcting</text>
      <rect x="30" y="56" width="310" height="290" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <rect x="30" y="56" width="310" height="18" rx="9" fill={COLORS.slate700} />
      <text x="185" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE WHOLE PRODUCT, DRAWN TO SCALE</text>
      <rect x="42" y="80" width="286" height="24" rx="4" fill={COLORS.blue} />
      <text x="185" y="95" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">the demo — screens and the happy path · 2 days</text>
      <line x1="36" y1="110" x2="334" y2="110" stroke={COLORS.slate400} strokeWidth="1.4" strokeDasharray="6 4" />
      <text x="185" y="121" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4" fontStyle="italic">everything below this line is invisible from the screen</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="42" y={128 + i * 40} width="286" height="36" rx="4" fill={COLORS.slate100} stroke={COLORS.slate400} strokeWidth="1.2" />
          <text x="185" y={142 + i * 40} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{l[0]}</text>
          <text x="185" y={155 + i * 40} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{l[1]}</text>
        </g>
      ))}
      <text x="185" y="337" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the other 21 days live down here</text>
      <rect x="360" y="56" width="410" height="130" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="360" y="56" width="410" height="18" rx="9" fill={COLORS.red} />
      <text x="565" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE WRONG CONCLUSION — “I COULD REBUILD GMAIL”</text>
      {gmail.map((t, i) => <text key={i} x="374" y={88 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="374" y="170" fill={COLORS.red} fontSize="7" fontStyle="italic">the feeling deserves respect — the ability is real, the conclusion is not</text>
      <rect x="360" y="196" width="410" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="360" y="196" width="410" height="18" rx="9" fill={COLORS.emerald} />
      <text x="565" y="209" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE RIGHT CONCLUSION — SHIP WITH YOUR EYES OPEN</text>
      {right.map((t, i) => <text key={i} x="374" y={228 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="360" y="302" width="410" height="42" rx="7" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.4" />
      <text x="565" y="320" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontWeight="700">the demo is 2 of 23 days — under a tenth</text>
      <text x="565" y="334" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the stack on the left is drawn to exactly that proportion</text>
      <rect x="30" y="354" width="740" height="50" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.blue} fontSize="7.6" fontWeight="700">THE EFFORT LEDGER — THE CLOSEST THING THIS COURSE HAS TO A PROMISE</text>
      <rect x="46" y="374" width="708" height="12" rx="3" fill={COLORS.slate300} />
      <rect x="46" y="374" width="62" height="12" rx="3" fill={COLORS.blue} />
      <text x="46" y="398" fill={COLORS.blue} fontSize="6.4" fontWeight="700">2 days — the weekend, already spent</text>
      <text x="754" y="398" textAnchor="end" fill={COLORS.slate600} fontSize="6.4">the other 21 — every one walked in plain sight, with its own line and its own reason</text>
      <rect x="30" y="412" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE DEMO WAS ALWAYS THE EASY PART</text> <text x="400" y="446" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">under a tenth is a map, not a reason to stop — you will ship, knowing exactly what you took on</text>
    </DiagramFrame>
  );
};
export const AskDontImagineDiagram = () => {
  const imagined = [
    'a person calmly picks a free slot',
    'the groomer reads an email and is pleased',
    'the average case, every time — because the',
    'average case is all imagination ever produces',
  ];
  const realDay = [
    '· the phone rings mid-groom — bookings taken',
    '  with wet hands, or missed entirely',
    '· Saturdays are chaos: everyone wants ten',
    '  o’clock, and nobody wants February',
    '· regulars book the same slot every six weeks, and',
    '  would be puzzled to be asked what she already knows',
  ];
  const quiet = [
    ['cancellations — and the', 'question of how late', 'is too late'],
    ['the dog that is not well', 'on the morning of', 'the appointment'],
    ['the customer with two', 'dogs, one slot booked,', 'both expected done'],
    ['the August week the shop', 'closes — or the page sells', 'slots that cannot happen'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Ask what actually happens, not what should happen — the quiet requirements feel like weather to the people living with them.">
      <defs><marker id="arrowRPa2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The version people rely on cannot be built from imagination</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">imagination reliably produces the average case, and real life is made of the other kind</text>
      <rect x="30" y="56" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT YOU IMAGINED FROM YOUR OWN SCREEN</text>
      {imagined.map((t, i) => <text key={i} x="46" y={92 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="46" y="158" fill={COLORS.slate500} fontSize="7" fontStyle="italic">close enough for a demo — and only for a demo</text>
      <rect x="410" y="56" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE GROOMER’S REAL DAY — SPEND A MORNING WATCHING</text>
      {realDay.map((t, i) => <text key={i} x="424" y={88 + i * 11.5} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="424" y="164" fill={COLORS.emerald} fontSize="7" fontStyle="italic">none of this was visible from inside the prototype</text>
      <rect x="30" y="184" width="740" height="98" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="184" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="197" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE REQUIREMENTS NOBODY VOLUNTEERS — TO THE PEOPLE LIVING WITH THEM, THEY FEEL LIKE WEATHER</text>
      {quiet.map((q, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="210" width="176" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {q.map((t, j) => <text key={j} x={130 + i * 182} y={223 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="270" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">not rare cases to the business — they are Tuesday · collect them now, while each is a line in a plan, not later, when each is a day of rework</text>
      <rect x="30" y="292" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="292" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="305" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT A BOOKING BECOMES ONCE PEOPLE RELY ON IT</text>
      <rect x="46" y="322" width="190" height="38" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="141" y="337" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">on your screen</text> <text x="141" y="351" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">a row of text in a list</text>
      <line x1="240" y1="341" x2="294" y2="341" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowRPa2)" />
      <rect x="300" y="316" width="454" height="52" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="527" y="331" textAnchor="middle" fill={COLORS.blue} fontSize="7" fontWeight="700">in the world: a promise two people plan around</text>
      <text x="527" y="344" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the groomer sets aside an hour and turns other work away</text>
      <text x="527" y="356" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the owner books the afternoon off — and tells the dog, who has opinions</text>
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">software that holds promises has a different job from software that displays rows — this whole course is about the difference</text>
      <rect x="30" y="414" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="434" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN HOUR OF ASKING SAVES DAYS OF BUILDING THE WRONG THING BEAUTIFULLY</text> <text x="400" y="451" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the groomer knows things about Saturdays that staring at your own screen will never surface — and she will tell you, if you ask</text>
    </DiagramFrame>
  );
};
export const NotListDiagram = () => {
  const rows = [
    { wish: 'online payment', hand: 'invoices sent by hand, exactly as today', mins: '20 min a week', date: 'look again: month 3' },
    { wish: 'automatic reminders', hand: 'a calendar note and a text sent by thumb', mins: '10 min a week', date: 'look again: month 3' },
    { wish: 'a loyalty scheme', hand: 'a card and a stamp', mins: 'moments', date: 'look again: month 6' },
    { wish: 'an app', hand: 'the same page, opened in the phone’s browser', mins: 'none at all', date: 'look again: month 6' },
  ];
  const test = [
    'no workable by-hand version? then it may not',
    'belong on the list — it may be version one’s real job',
    'if the workaround truly costs minutes, building it',
    'now buys almost nothing, and pays in ledger days',
  ];
  const cost = [
    'an afternoon to build — that part really is cheap now',
    'but everything you ship must then be run, supported',
    'and maintained: it can break, confuse a customer, and',
    'turn up in the late-night email, in its second year',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 434" caption="A not-list is not a confession of weakness — each item is a decision with a date, and every argument becomes a scheduling question.">
      <defs><marker id="arrowRPa3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Everything cut to make the weekend possible comes back, wearing better arguments</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the answer is a written list of what version one refuses to do — not now, with a review date, never a never</text>
      <rect x="30" y="56" width="740" height="170" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE NOT-LIST — EVERY ITEM EARNS ITS PLACE THE SAME WAY</text>
      <text x="52" y="90" fill={COLORS.slate500} fontSize="6.6" fontWeight="700">VERSION ONE REFUSES</text>
      <text x="260" y="90" fill={COLORS.slate500} fontSize="6.6" fontWeight="700">BY HAND INSTEAD</text>
      <text x="536" y="90" fill={COLORS.slate500} fontSize="6.6" fontWeight="700">WHAT IT COSTS</text>
      <text x="644" y="90" fill={COLORS.slate500} fontSize="6.6" fontWeight="700">THE DATE</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="46" y={100 + i * 28} width="160" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x="126" y={113 + i * 28} textAnchor="middle" fill={COLORS.slate600} fontSize="7">{r.wish}</text>
          <line x1="54" y1={110 + i * 28} x2="198" y2={110 + i * 28} stroke={COLORS.red} strokeWidth="1.4" />
          <line x1="210" y1={110 + i * 28} x2="248" y2={110 + i * 28} stroke={COLORS.slate500} strokeWidth="1.2" markerEnd="url(#arrowRPa3)" />
          <text x="260" y={113 + i * 28} fill={COLORS.slate600} fontSize="7.2">{r.hand}</text>
          <text x="536" y={113 + i * 28} fill={COLORS.emerald} fontSize="7" fontWeight="700">{r.mins}</text>
          <text x="644" y={113 + i * 28} fill={COLORS.amber} fontSize="7" fontWeight="700">{r.date}</text>
        </g>
      ))}
      <text x="400" y="218" textAnchor="middle" fill={COLORS.slate500} fontSize="7" fontStyle="italic">the wish-list is not wrong — reminders would genuinely help this business. it is early: version one has one job, becoming the way bookings are taken</text>
      <rect x="30" y="236" width="360" height="102" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="236" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="249" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE TEST THAT KEEPS A NOT-LIST HONEST</text>
      {test.map((t, i) => <text key={i} x="46" y={270 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="46" y="328" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">by-hand is the cheapest way to learn a feature’s worth</text>
      <rect x="410" y="236" width="360" height="102" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="236" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="249" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT EVERY YES ACTUALLY COSTS</text>
      {cost.map((t, i) => <text key={i} x="424" y={270 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="328" fill={COLORS.red} fontSize="6.8" fontStyle="italic">a little of every week afterwards, indefinitely — a subscription</text>
      <text x="400" y="356" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">the AI makes reminders an afternoon’s work, which makes yes feel free — every yes is bought with days from the ledger</text>
      <rect x="30" y="368" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="388" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">NOBODY REGRETS A SMALL VERSION ONE THAT WORKS</text> <text x="400" y="405" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">people regret large ones that almost do — refusing things you could easily build feels wrong at first, and it is the skill</text>
    </DiagramFrame>
  );
};
export const StagePlanLedgerDiagram = () => {
  const stages = [
    { c: COLORS.blue, t: 'THE PROTOTYPE', l: ['the weekend: screens', 'and the happy path'], d: '2 days — spent' },
    { c: COLORS.cyan, t: 'EXPLORE AND PLAN', l: ['the job, the not-list,', 'this stage plan'], d: '3 days' },
    { c: COLORS.amber, t: 'BUILD AND CHECKS', l: ['the rest of the screens,', 'checks that run alone'], d: '4 days' },
    { c: COLORS.red, t: 'BELOW THE SCREEN', l: ['data done properly, accounts,', 'the services you depend on'], d: '9 days — the biggest' },
    { c: COLORS.emerald, t: 'SHIP AND WATCH', l: ['shipping, watching, fixing', 'what week one reveals'], d: '5 days' },
  ];
  const gates = [
    ['you have decided to make it real,', 'not only to demonstrate it'],
    ['the job is understood and the', 'refusals are down in writing'],
    ['the screens exist and the checks', 'pass without you watching'],
    ['data safe and restorable · accounts hold —', 'only now does the link go anywhere public'],
  ];
  const bars = [{ w: 62, n: '2' }, { w: 92, n: '3' }, { w: 123, n: '4' }, { w: 277, n: '9' }, { w: 154, n: '5' }];
  const whyL = [
    'reality argues with tasks, not with truths — a service',
    'behaves oddly, the groomer remembers something vital,',
    'a week disappears into family life · a task list meets this',
    'badly: half-done items pile up until it describes nothing',
  ];
  const whyR = [
    'however the details move, the gates still hold: data',
    'safe before accounts, accounts before the public link',
    'you always know where you stand, by asking one plain',
    'question — what is true so far?',
  ];
  let bx = 46;
  const barX = bars.map((b) => { const x = bx; bx += b.w; return x; });
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="A stage is a gate with a plain question attached — is this true yet? — and the ledger is drawn to scale beneath it.">
      <defs><marker id="arrowRPa4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Five stages, four gates — and an honest line in the ledger for each</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a task list says what you will do; a stage plan says what must be true before you move on</text>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 153} y="54" width="128" height="60" rx="7" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 153} y="54" width="128" height="16" rx="7" fill={s.c} />
          <text x={94 + i * 153} y="65" textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => <text key={j} x={94 + i * 153} y={81 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
          <text x={94 + i * 153} y="108" textAnchor="middle" fill={s.c} fontSize="7" fontWeight="700">{s.d}</text>
          {i < 4 && <line x1={160 + i * 153} y1="84" x2={181 + i * 153} y2="84" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPa4)" />}
        </g>
      ))}
      {gates.map((g, i) => (
        <g key={i}>
          <line x1={170.5 + i * 153} y1="90" x2={170.5 + i * 153} y2="128" stroke={COLORS.slate400} strokeWidth="1.2" strokeDasharray="3 3" />
          <rect x={90.5 + i * 153} y="128" width="160" height="44" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          <text x={170.5 + i * 153} y="141" textAnchor="middle" fill={COLORS.slate700} fontSize="6.4" fontWeight="700">GATE — IS THIS TRUE YET?</text>
          {g.map((t, j) => <text key={j} x={170.5 + i * 153} y={153 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="186" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="400" y="204" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE LEDGER, DRAWN TO SCALE — 23 DAYS TO A REAL FIRST VERSION</text>
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={barX[i]} y="212" width={b.w - 2} height="20" rx="3" fill={stages[i].c} />
          <text x={barX[i] + (b.w - 2) / 2} y="226" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{b.n}</text>
        </g>
      ))}
      <text x="46" y="244" fill={COLORS.blue} fontSize="6.4" fontWeight="700">the demo — under a tenth</text>
      <text x="461" y="244" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">the biggest line is work you cannot see from the screen at all</text>
      <text x="400" y="260" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">illustrative estimates for the groomer’s page, never promises about your project — the numbers drift, the shape transfers</text>
      <rect x="30" y="282" width="740" height="90" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="282" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="295" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHY A PLAN MADE OF STAGES SURVIVES CONTACT WITH REALITY</text>
      {whyL.map((t, i) => <text key={i} x="46" y={314 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      {whyR.map((t, i) => <text key={i} x="410" y={314 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">done with a stage is quiet — nothing shiny, just a yes with evidence behind it · the demo earned applause; the rest mostly earns a nod</text>
      <rect x="30" y="400" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">YOU CAN TICK OFF TASKS ALL WEEK WHILE NOTHING IMPORTANT BECOMES TRUE</text> <text x="400" y="437" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a gate tells you exactly where you stand — and real products are built out of nods, 23 honest days at a time</text>
    </DiagramFrame>
  );
};
