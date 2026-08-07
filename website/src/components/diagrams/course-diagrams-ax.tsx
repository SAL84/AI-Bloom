import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ FROM PROTOTYPE TO PRODUCT — MODULE 5: THE SECOND YEAR ============ */
export const SoftwareRotDiagram = () => {
  const services = [
    '· the platform retires the exact feature you happen to use',
    '· prices change under the hosting and the database',
    '· the email service tightens its rules — confirmations',
    '  that arrived for a year start landing in spam',
  ];
  const world = [
    '· prices go up in January — the page still shows the old ones',
    '· Saturday hours change, and the slots do not',
    '· a second groomer joins — the app offers one column',
    '· closed for a week in August — the page takes bookings anyway',
  ];
  const upkeep = [
    '· renewing the things that expire',
    '· nudging a service that changed its rules',
    '· adjusting the slots for the season',
    '· restoring something from a backup, once or twice',
  ];
  const decay = ['one small wrongness at a time', 'the groomer stops trusting the page', 'she goes back to the phone'];
  const trust = [30, 25, 20, 15, 10, 5];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="Software decays while standing perfectly still — the ground it stands on was never yours to keep still.">
      <defs><marker id="arrowRPe1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Nothing moved on your side — and it broke anyway</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a booking page that worked flawlessly in March can quietly fail in October, with no change from you at all</text>
      <rect x="30" y="54" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SERVICES UNDERNEATH CHANGE THEIR SIDE</text>
      {services.map((t, i) => <text key={i} x="44" y={88 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="146" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">nobody is punishing you — those companies are simply</text>
      <text x="44" y="156" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">running their own products, and yours stands on top of theirs</text>
      <rect x="410" y="54" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="54" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="590" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE WORLD THE APP DESCRIBES MOVES TOO</text>
      {world.map((t, i) => <text key={i} x="424" y={88 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="146" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">a booking page describes a business at one moment —</text>
      <text x="424" y="156" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the app does not know the world moved; somebody must tell it</text>
      <line x1="210" y1="174" x2="330" y2="198" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPe1)" />
      <line x1="590" y1="174" x2="470" y2="198" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPe1)" />
      <rect x="290" y="200" width="220" height="30" rx="7" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.6" />
      <text x="400" y="213" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">the app you never touched</text> <text x="400" y="224" textAnchor="middle" fill={COLORS.red} fontSize="6.8">quietly wrong by October</text>
      <text x="400" y="246" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">nobody broke anything, and yet the app is now wrong — and wrong never announces itself; the page looks as confident as ever</text>
      <rect x="30" y="258" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="258" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="271" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">BUDGETED: ABOUT ONE DAY A MONTH, YEAR TWO</text>
      {upkeep.map((t, i) => <text key={i} x="44" y={292 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="352" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">named in advance, a modest line item — no new features,</text>
      <text x="44" y="362" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">just keeping a business&rsquo;s booking system standing</text>
      <rect x="410" y="258" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="258" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="271" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">SKIPPED: THE QUIET DEGRADATION</text>
      {decay.map((t, i) => <text key={i} x="424" y={292 + i * 13} fill={i === 2 ? COLORS.red : COLORS.slate600} fontSize="7.2" fontWeight={i === 2 ? '700' : '400'}>{'· ' + t}</text>)}
      {trust.map((h, i) => <rect key={i} x={620 + i * 22} y={324 - h} width="16" height={h} rx="2" fill={i > 3 ? COLORS.red : COLORS.slate300} />)}
      <text x="674" y="336" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">trust in the page, month by month →</text>
      <text x="424" y="352" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">skipping the upkeep does not save the time — it trades a</text>
      <text x="424" y="362" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">line item for a slow loss nobody sees until the phone rings</text>
      <text x="400" y="392" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">the difference between the two columns is entirely in the expecting — expected, it is a line item; discovered, it feels like a betrayal</text>
      <rect x="30" y="404" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="424" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PRODUCTS ARE NOT FINISHED — THEY ARE KEPT, THE WAY A GARDEN IS KEPT, OR THEY ARE LOST</text> <text x="400" y="441" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">&ldquo;we changed nothing&rdquo; feels like it ought to be a defence — it is not one that is available to you</text>
    </DiagramFrame>
  );
};
export const HandoverTestDiagram = () => {
  const head = ['every password', 'where each bill arrives', 'the it-broke habits', 'the put-it-back steps', 'which service does what', 'the awkward customer’s quirk'];
  const page = [
    ['1', 'where the app runs, and how to sign in'],
    ['2', 'where the data lives, where the backups live — and when you last restored one'],
    ['3', 'the services it stands on, and where each bill arrives'],
    ['4', 'how to put back the last good version — the exact steps, written, not remembered'],
    ['5', 'the five recurring support problems, with their fixes, from your support notes'],
  ];
  const test = [
    ['a capable friend —', 'sensible, not an engineer'],
    ['only the page —', 'and you stay quiet'],
    ['one hour', 'on the clock'],
  ];
  const tasks = ['sign in', 'find last month’s bill', 'put back the last good version', 'answer the commonest support email'];
  return (
    <DiagramFrame viewBox="0 0 800 452" caption="The bus factor, asked kindly: if you took three weeks of holiday, what would happen to the bookings?">
      <defs><marker id="arrowRPe2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Could anyone else run this?</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the prototype was yours, and that was fine — the product belongs to the business, and real customers plan Saturdays around it</text>
      <rect x="30" y="54" width="264" height="176" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="264" height="18" rx="9" fill={COLORS.red} />
      <text x="162" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">TODAY, IT ALL LIVES IN ONE HEAD</text>
      {head.map((t, i) => (
        <g key={i}>
          <rect x={44 + (i % 2) * 120} y={80 + Math.floor(i / 2) * 26} width="114" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.1" />
          <text x={101 + (i % 2) * 120} y={93 + Math.floor(i / 2) * 26} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>
        </g>
      ))}
      <text x="44" y="172" fill={COLORS.red} fontSize="6.8" fontWeight="700">a product one person can run is a</text>
      <text x="44" y="182" fill={COLORS.red} fontSize="6.8" fontWeight="700">liability wearing a success costume</text>
      <text x="44" y="198" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">nothing dramatic needs to go wrong —</text>
      <text x="44" y="208" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">a holiday will do it; so will flu; so will</text>
      <text x="44" y="218" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">you, reasonably, moving to your next idea</text>
      <line x1="298" y1="142" x2="332" y2="142" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowRPe2)" />
      <text x="315" y="134" textAnchor="middle" fill={COLORS.emerald} fontSize="6.4">this week</text>
      <rect x="336" y="54" width="434" height="176" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="336" y="54" width="434" height="18" rx="9" fill={COLORS.emerald} />
      <text x="553" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE HANDOVER FILE — ONE HONEST PAGE, KEPT WHERE THE BUSINESS CAN FIND IT</text>
      {page.map((p, i) => (
        <g key={i}>
          <rect x="350" y={80 + i * 22} width="15" height="15" rx="4" fill={COLORS.emerald} />
      <text x={357.5} y={91 + i * 22} textAnchor="middle" fill={COLORS.white} fontSize="7.2" fontWeight="700">{p[0]}</text>
          <text x="372" y={91 + i * 22} fill={COLORS.slate600} fontSize="7.2">{p[1]}</text>
        </g>
      ))}
      <line x1="350" y1="192" x2="756" y2="192" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="350" y="206" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">notice what is not on the page: anything about the code — a person taking over does not</text>
      <text x="350" y="216" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">need to read it any more than you did; running a product is locations, steps and habits</text>
      <rect x="30" y="242" width="740" height="128" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="242" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="255" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE TEST — HAND IT OVER LIKE A STRANGER, BECAUSE YOUR OWN HEAD CARRIES INVISIBLE HELP</text>
      {test.map((t, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="268" width="232" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={162 + i * 246} y="281" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{t[0]}</text>
          <text x={162 + i * 246} y="292" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t[1]}</text>
        </g>
      ))}
      <text x="46" y="314" fill={COLORS.slate600} fontSize="7">ask them to talk you through taking over:</text>
      {tasks.map((t, i) => (
        <g key={i}>
          <rect x={216 + i * 138} y="304" width="130" height="14" rx="7" fill={COLORS.blueLight} />
          <text x={281 + i * 138} y="314" textAnchor="middle" fill={COLORS.blue} fontSize="6.2">{t}</text>
        </g>
      ))}
      <text x="400" y="334" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">every place they get stuck is a line the page is missing — and every missing line still lives only in your head</text>
      <text x="400" y="348" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">update the page, then repeat once a year, or whenever something big changes — like testing your app as a stranger, but for your head</text>
      <text x="400" y="360" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">you are not preparing for disaster, exactly — you are removing the single point of failure that is you</text>
      <rect x="30" y="382" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PRODUCT THAT BENEFITS FROM YOU — NOT ONE THAT NEEDS YOU</text> <text x="400" y="419" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">which is what the business always needed it to be — one honest page is the whole distance between the two</text>
    </DiagramFrame>
  );
};
export const WeekendVsRealProductDiagram = () => {
  const groupColor = [COLORS.blue, COLORS.amber, COLORS.cyan];
  const rows: { g: number; n: string; d: string; w: string[]; p: string[] }[] = [
    { g: 0, n: '1', d: 'Where the data lives', w: ['wherever the tool happened', 'to put it'], p: ['a database chosen on purpose —', 'a shape you decided'] },
    { g: 0, n: '2', d: 'What happens when data is wrong', w: ['a shrug'], p: ['a plan — a wrong booking costs', 'somebody a real Saturday'] },
    { g: 0, n: '3', d: 'Backups actually restored', w: ['a hopeful copy,', 'never restored'], p: ['a restore you have practised,', 'and timed'] },
    { g: 0, n: '4', d: 'Accounts and resets', w: ['one shared login'], p: ['real accounts, the weekly', 'lockout handled calmly'] },
    { g: 0, n: '5', d: 'Who can see what', w: ['whoever finds the link'], p: ['enforced by the product,', 'not hidden by the screen'] },
    { g: 1, n: '6', d: 'Email that actually arrives', w: ['sends email, and hopes'], p: ['a proper email service — a confirmation', 'in spam is a lost booking'] },
    { g: 1, n: '7', d: 'Taking payment', w: ['never touches money'], p: ['an invoice sent by hand — or a payment', 'provider, never your own pages'] },
    { g: 1, n: '8', d: 'Getting changes to users', w: ['editing the live thing'], p: ['changed where customers are not,', 'then shipped deliberately, checks first'] },
    { g: 1, n: '9', d: 'Undoing a bad change', w: ['panic'], p: ['rollback — the steps known', 'before they were needed'] },
    { g: 2, n: '10', d: 'Knowing it broke', w: ['silence'], p: ['a heartbeat, an error log, a weekly', 'number you would notice going to zero'] },
    { g: 2, n: '11', d: 'Cost at real usage', w: ['a free tier, and luck'], p: ['a bill you have estimated,', 'and capped'] },
    { g: 2, n: '12', d: 'Support — who answers', w: ['nobody'], p: ['you, on one channel you read, with an', 'honest reply-time promise'] },
    { g: 2, n: '13', d: 'Updates and rot', w: ['“finished”'], p: ['about a day a month,', 'priced in advance'] },
    { g: 2, n: '14', d: 'Handover — could anyone else run it', w: ['no — it lives in', 'one head'], p: ['one honest page,', 'tested on a friend'] },
    { g: 2, n: '15', d: 'The second year', w: ['never considered'], p: ['budgeted — improvement is a', 'choice rather than a rescue'] },
  ];
  const ledger = [
    { d: 2, c: COLORS.red, t: 'demo 2' },
    { d: 3, c: COLORS.blue, t: 'plan 3' },
    { d: 4, c: COLORS.cyan, t: 'build 4' },
    { d: 9, c: COLORS.amber, t: 'below the screen 9' },
    { d: 5, c: COLORS.emerald, t: 'ship & watch 5' },
  ];
  const y0 = 64;
  const rowH = 25;
  let lx = 46;
  return (
    <DiagramFrame viewBox="0 0 800 560" caption="Fifteen dimensions, and every one invisible in a demo — the version on the right is decided, practised and owned.">
      <text x="400" y="20" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The weekend build and the real product, side by side</text>
      <text x="400" y="36" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">the lesson the whole course has been walking towards — and barely any of it is about code</text>
      <rect x="30" y="46" width="222" height="15" rx="4" fill={COLORS.slate700} />
      <text x="141" y="57" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">THE DIMENSION</text>
      <rect x="256" y="46" width="250" height="15" rx="4" fill={COLORS.red} />
      <text x="381" y="57" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">THE WEEKEND BUILD</text>
      <rect x="510" y="46" width="260" height="15" rx="4" fill={COLORS.emerald} />
      <text x="640" y="57" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">THE REAL PRODUCT</text>
      {rows.map((r, i) => (
        <g key={i}>
          {i % 2 === 0 && <rect x="30" y={y0 + i * rowH} width="740" height={rowH} fill={COLORS.slate100} rx="2" />}
          <rect x="30" y={y0 + i * rowH + 2} width="4" height={rowH - 4} rx="2" fill={groupColor[r.g]} />
          <rect x="40" y={y0 + i * rowH + 5.5} width="14" height="14" rx="4" fill={groupColor[r.g]} />
      <text x="47" y={y0 + i * rowH + 15.5} textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">{r.n}</text>
          <text x="60" y={y0 + i * rowH + 15.5} fill={COLORS.slate700} fontSize="7" fontWeight="700">{r.d}</text>
          {r.w.map((t, j) => <text key={j} x="262" y={y0 + i * rowH + (r.w.length === 1 ? 15 : 11 + j * 9.5)} fill={COLORS.slate500} fontSize="6.6">{t}</text>)}
          {r.p.map((t, j) => <text key={j} x="516" y={y0 + i * rowH + (r.p.length === 1 ? 15 : 11 + j * 9.5)} fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <line x1="254" y1="46" x2="254" y2={y0 + 15 * rowH} stroke={COLORS.slate300} strokeWidth="1" />
      <line x1="508" y1="46" x2="508" y2={y0 + 15 * rowH} stroke={COLORS.slate300} strokeWidth="1" />
      <rect x="46" y="444" width="8" height="8" rx="2" fill={COLORS.blue} /><text x="58" y="451" fill={COLORS.slate500} fontSize="6.6">the data (1–5)</text>
      <rect x="140" y="444" width="8" height="8" rx="2" fill={COLORS.amber} /><text x="152" y="451" fill={COLORS.slate500} fontSize="6.6">services and shipping (6–9)</text>
      <rect x="280" y="444" width="8" height="8" rx="2" fill={COLORS.cyan} /><text x="292" y="451" fill={COLORS.slate500} fontSize="6.6">running it (10–15)</text>
      <text x="754" y="451" textAnchor="end" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">most rows needed a decision, not a new technical skill</text>
      <rect x="30" y="458" width="740" height="50" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="46" y="473" fill={COLORS.blue} fontSize="8" fontWeight="700">THE LEDGER, COMPLETE — DAYS TO A REAL FIRST VERSION</text>
      <text x="754" y="473" textAnchor="end" fill={COLORS.slate900} fontSize="8.4" fontWeight="700">= 23 days</text>
      {ledger.map((s, i) => {
        const x = lx;
        lx += s.d * 28;
        return (
          <g key={i}>
            <rect x={x} y="479" width={s.d * 28 - 3} height="11" rx="3" fill={s.c} />
            <text x={x + (s.d * 28 - 3) / 2} y="500" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{s.t}</text>
          </g>
        );
      })}
      <text x="712" y="487.5" fill={COLORS.slate500} fontSize="6.4">the demo was</text>
      <text x="712" y="497" fill={COLORS.slate500} fontSize="6.4">2 of the 23</text>
      <rect x="30" y="516" width="740" height="42" rx="10" fill={COLORS.slate900} />
      <text x="400" y="534" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE DEMO WAS 2 DAYS OF 23 — UNDER A TENTH OF THE WHOLE</text> <text x="400" y="549" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">every line was walkable, none needed an engineering degree, and you have now watched each decision being made</text>
    </DiagramFrame>
  );
};
export const GenuinelyShippableDiagram = () => {
  const shape = [
    ['bounded users', 'two hundred customers,', 'not two hundred thousand'],
    ['bounded data', 'inventoried — you could look', 'someone in the eye about it'],
    ['reversible actions', 'anything the product does', 'can be undone'],
    ['a person in the loop', 'wherever a mistake would', 'touch somebody'],
  ];
  const cannot = [
    '· mistakes that cannot be undone',
    '· ground where the law has strong opinions —',
    '  moving money, health, children’s data',
    '· action on its own, at a scale no person could review',
    '· anything you could not afford to watch',
  ];
  const boundary = [
    ['can a person see', 'what the product does?'],
    ['can a person', 'catch a mistake?'],
    ['can a person', 'reverse it?'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 484" caption="The honest map: more than the doubters say, less than the demo implied — and the boundary is supervision.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">More than the doubters say, less than the demo implied</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">what a non-engineer with AI can honestly put in front of real customers — and stand behind for years</text>
      <rect x="30" y="54" width="356" height="204" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="54" width="356" height="18" rx="9" fill={COLORS.emerald} />
      <text x="208" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">YOU CAN GENUINELY SHIP THIS</text>
      <text x="208" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">a real product for a real small business, run responsibly for years</text>
      {shape.map((s, i) => (
        <g key={i}>
          <rect x={44 + (i % 2) * 166} y={94 + Math.floor(i / 2) * 50} width="160" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={124 + (i % 2) * 166} y={108 + Math.floor(i / 2) * 50} textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">{s[0]}</text>
          <text x={124 + (i % 2) * 166} y={119 + Math.floor(i / 2) * 50} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{s[1]}</text>
          <text x={124 + (i % 2) * 166} y={129 + Math.floor(i / 2) * 50} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{s[2]}</text>
        </g>
      ))}
      <text x="44" y="210" fill={COLORS.slate600} fontSize="6.8">the groomer&rsquo;s booking page is exactly this shape — and so are</text>
      <text x="44" y="221" fill={COLORS.slate600} fontSize="6.8">the club rota, the tuition scheduler, the repair-shop job board</text>
      <text x="44" y="238" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">five years ago each needed an engineer or went unbuilt —</text>
      <text x="44" y="248" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">and mostly they went unbuilt; that is the change</text>
      <line x1="400" y1="60" x2="400" y2="252" stroke={COLORS.slate400} strokeWidth="1.4" strokeDasharray="5 4" />
      <rect x="414" y="54" width="356" height="204" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="414" y="54" width="356" height="18" rx="9" fill={COLORS.red} />
      <text x="592" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">NOT YET — HOWEVER GOOD THE DEMO</text>
      <text x="592" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">some products you still cannot responsibly ship</text>
      {cannot.map((t, i) => <text key={i} x="428" y={102 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <line x1="428" y1="178" x2="756" y2="178" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="428" y="194" fill={COLORS.red} fontSize="6.8" fontWeight="700">the most useful test of all is the last one</text>
      <text x="428" y="206" fill={COLORS.slate600} fontSize="6.8">running a product means watching it, answering for it,</text>
      <text x="428" y="217" fill={COLORS.slate600} fontSize="6.8">and putting it back when it breaks</text>
      <text x="428" y="238" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the demo&rsquo;s confidence does not change any of this —</text>
      <text x="428" y="248" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">no demo, however dazzling, has ever moved the line</text>
      <rect x="30" y="270" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="270" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="283" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHERE THE BOUNDARY ACTUALLY SITS — SUPERVISION, NOT INTELLIGENCE</text>
      {boundary.map((b, i) => (
        <g key={i}>
          <rect x={70 + i * 230} y="296" width="200" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={170 + i * 230} y="310" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">{b[0]}</text>
          <text x={170 + i * 230} y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{b[1]}</text>
        </g>
      ))}
      <text x="400" y="348" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">not your intelligence, and not the AI&rsquo;s — the line Vibecoding drew for prototypes holds for products too</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">a booking page one business relies on every working day, for years — backed up, watched,</text>
      <text x="400" y="397" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">supported, ready to hand over — is a real product in every sense that matters</text>
      <text x="400" y="412" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">it beats the Gmail rebuild, because the Gmail rebuild was never going to be anyone&rsquo;s clever weekend</text>
      <rect x="30" y="426" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="446" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">&ldquo;I CAN BUILD THINGS&rdquo; IS TRUE — &ldquo;THE DEMO WAS MOST OF THE WORK&rdquo; NEVER WAS</text> <text x="400" y="463" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">seen clearly, the ratio is not a disappointment — it is a plan, and this shape of product is now yours to make</text>
    </DiagramFrame>
  );
};
