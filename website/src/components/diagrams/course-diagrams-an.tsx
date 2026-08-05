import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AI FOR CYBERSECURITY — MODULE 7: EVALUATING AI SECURITY PRODUCTS ============ */

export const VendorDueDiligenceDiagram = () => {
  const cards = [
    { x: 30, y: 58, c: COLORS.blue, h: '1 · THE MODEL, NOT THE MARKETING', q: [
      'Which model is under the hood — and who builds and trains it?',
      'Where does inference actually run?',
      'Frozen or continuously retrained — on what cadence?',
      'Classical ML with a chat interface? Fine — price it as such',
    ], note: 'adjectives instead of architecture are hiding something structural' },
    { x: 410, y: 58, c: COLORS.cyan, h: '2 · FOLLOW YOUR DATA — CUSTODY BEFORE CAPABILITY', q: [
      'Does anything we send you train your models — contractually?',
      'Genuine tenant isolation, or logical separation?',
      'What is retained, for how long — and can we set it?',
      'Where does processing happen — can we pin the region?',
    ], note: 'certifications describe control audits, not model-pipeline flows' },
    { x: 30, y: 198, c: COLORS.amber, h: '3 · ASK ABOUT FAILURE BEFORE FEATURES', q: [
      'When the model is uncertain, does it say so?',
      'What does a false negative look like operationally?',
      '"Describe your last significant false negative"',
      'How are regressions detected — and disclosed?',
    ], note: 'failure specifics signal maturity; failure denial is a warning' },
    { x: 410, y: 198, c: COLORS.emerald, h: "4 · THE VENDOR'S OWN SOC IS THE TELL", q: [
      '"What does your own SOC use this for, exactly?"',
      'What does your own team not trust it to do?',
      'What is the internal analyst override rate?',
      'A reference call with a practitioner, not a champion',
    ], note: 'that texture is impossible to fake — generalities are the flag' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 452" caption="Open with the model, settle data custody, ask about failure, and make the vendor's own SOC testify — the vague answer is itself the finding.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four question families that cut through the marketing</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">press until you get architecture, numbers, and specifics — evasion is data too</text>

      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="360" height="128" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y={c.y} width="360" height="18" rx="9" fill={c.c} />
          <text x={c.x + 180} y={c.y + 13} textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">{c.h}</text>
          {c.q.map((q, j) => (
            <text key={j} x={c.x + 14} y={c.y + 35 + j * 17} fill={COLORS.slate600} fontSize="7.2">{q}</text>
          ))}
          <line x1={c.x + 14} y1={c.y + 102} x2={c.x + 346} y2={c.y + 102} stroke={COLORS.slate200} strokeWidth="1" />
          <text x={c.x + 180} y={c.y + 116} textAnchor="middle" fill={c.c} fontSize="6.8" fontStyle="italic">{c.note}</text>
        </g>
      ))}

      <rect x="30" y="338" width="740" height="30" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="357" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontWeight="700">GET THE COMMITMENTS INTO THE CONTRACT, NOT THE SLIDE DECK — POLICIES CHANGE UNILATERALLY</text>

      <rect x="30" y="380" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="400" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE ANSWERS DETERMINE DATA EXPOSURE, DETECTION FRESHNESS, AND DRIFT AFTER YOU SIGN</text>
      <text x="400" y="417" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a vendor who cannot say which model, whose data, and what failure looks like is hiding the structure</text>
    </DiagramFrame>
  );
};

export const SkepticalDemoDiagram = () => {
  const reel = [
    'golden alerts, chosen because the product shines on them',
    'log schemas the vendor built the parsers for',
    'entity names the model has seen a thousand times',
    'a 90-second triage shown as an edited cut',
  ];
  const insist = [
    'one of your real, sanitised alerts — run live',
    'natural-language query against your field names',
    'an alert the product gets wrong, and the recovery',
    'degraded modes: source outages, timeouts, conflicts',
  ];
  const agentic = [
    ['which decisions are made', 'with no human, exactly?'],
    ['approval gates configurable', 'per action class?'],
    ['can autonomy be shrunk', 'after deployment?'],
    ['one full investigation', 'trace, end to end'],
  ];
  const pilot = [
    ['success criteria written', 'before it starts'],
    ['a defined finish line', 'and a walk-away'],
    ['your alert mix and volume,', 'not a suggested subset'],
    ['staffed honestly — unused', 'pilots prove nothing'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="Demo data is curated to succeed — bring your own sanitised alert, ask to see a miss, make the vendor operationalise agentic, and let a time-boxed pilot decide.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The demo is theirs — the evidence has to be yours</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nothing in a polished demo predicts behaviour on your telemetry and your naming conventions</text>

      <rect x="30" y="58" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHAT THE HIGHLIGHT REEL SHOWS</text>
      {reel.map((t, i) => (
        <text key={i} x="44" y={93 + i * 17} fill={COLORS.slate600} fontSize="7.2">{t}</text>
      ))}
      <line x1="44" y1="160" x2="376" y2="160" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="210" y="174" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">weeks of &quot;environment preparation&quot; forecasts the deployment</text>

      <rect x="410" y="58" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHAT YOU ASK TO SEE</text>
      {insist.map((t, i) => (
        <text key={i} x="424" y={93 + i * 17} fill={COLORS.slate600} fontSize="7.2">{t}</text>
      ))}
      <line x1="424" y1="160" x2="756" y2="160" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="590" y="174" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontStyle="italic">a vendor comfortable demoing failure has measured it</text>

      <rect x="30" y="198" width="740" height="66" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="216" textAnchor="middle" fill={COLORS.amber} fontSize="8.2" fontWeight="700">PIN DOWN WHAT &quot;AGENTIC&quot; MEANS HERE — MAKE THE WORD OPERATIONAL</text>
      {agentic.map((a, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="224" width="172" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={132 + i * 186} y="236" textAnchor="middle" fill={COLORS.slate700} fontSize="6.4">{a[0]}</text>
          <text x={132 + i * 186} y="247" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{a[1]}</text>
        </g>
      ))}
      <text x="400" y="278" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">no producible trace means autonomy that is theatre, or real and unauditable — both end the conversation</text>

      <rect x="30" y="292" width="740" height="66" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="310" textAnchor="middle" fill={COLORS.blue} fontSize="8.2" fontWeight="700">THE PILOT IS THE REAL DEMO — TIME-BOXED, IN YOUR ENVIRONMENT</text>
      {pilot.map((p, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="318" width="172" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={132 + i * 186} y="330" textAnchor="middle" fill={COLORS.slate700} fontSize="6.4">{p[0]}</text>
          <text x={132 + i * 186} y="341" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{p[1]}</text>
        </g>
      ))}
      <text x="400" y="372" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">beware the perpetual proof-of-value: months of drift, your integration effort, unearned deal momentum</text>

      <rect x="30" y="384" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="404" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BRING YOUR OWN DATA, ASK TO SEE A MISS, AND MAKE THE PILOT THE DECISION POINT</text>
      <text x="400" y="421" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the unhappy path is where analysts live during real incidents — a demo that never goes there has shown you nothing</text>
    </DiagramFrame>
  );
};

export const VendorPushbackDiagram = () => {
  const rows = [
    {
      q: ['What is your', 'hallucination rate?'],
      g: ['grounded in retrieved evidence with', 'citations; a measured unsupported-claim', 'rate, with its methodology'],
      e: ['"highly accurate", "latest models",', '"we have guardrails" — reassurance,', 'with no measurement behind it'],
    },
    {
      q: ['Who answers for a wrong', 'autonomous action?'],
      g: ['attributable and reversible; destructive', 'actions approval-gated by default;', 'incident process in the contract'],
      e: ['"you configured it" — autonomy in the', 'pitch, your responsibility in the', 'contract; believe the contract'],
    },
    {
      q: ['Where does inference run,', 'and who holds the keys?'],
      g: ['named regions, the full subprocessor', 'chain, key revocation that provably', 'severs access'],
      e: ['"we are compliant" — an audit answer', 'to an architecture question;', 'frameworks lag AI data flows'],
    },
    {
      q: ['Who controls', 'model changes?'],
      g: ['advance notice, regression results,', 'version pinning or staged rollout,', 'changelogs specific enough to audit'],
      e: ['"you always get our latest" — the', 'baseline shifts silently under', 'your detection stack'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 408" caption="Every pushback separates engineering from reassurance — good answers arrive with mechanisms and measured numbers, evasive ones with adjectives and a subject change.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four pushbacks, two kinds of answer</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">good answers sound like engineering and measurement — evasive answers sound like reassurance</text>

      <rect x="30" y="62" width="170" height="16" rx="4" fill={COLORS.slate600} />
      <text x="115" y="73" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">THE PUSHBACK</text>
      <rect x="210" y="62" width="275" height="16" rx="4" fill={COLORS.emerald} />
      <text x="347" y="73" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">A GOOD ANSWER SOUNDS LIKE</text>
      <rect x="495" y="62" width="275" height="16" rx="4" fill={COLORS.red} />
      <text x="632" y="73" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">AN EVASIVE ANSWER SOUNDS LIKE</text>

      {rows.map((r, i) => {
        const y = 88 + i * 56;
        return (
          <g key={i}>
            <rect x="30" y={y} width="170" height="48" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
            <text x="115" y={y + 21} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{r.q[0]}</text>
            <text x="115" y={y + 32} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{r.q[1]}</text>
            <rect x="210" y={y} width="275" height="48" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
            {r.g.map((t, j) => (
              <text key={j} x="220" y={y + 14 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
            ))}
            <rect x="495" y={y} width="275" height="48" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
            {r.e.map((t, j) => (
              <text key={j} x="505" y={y + 14 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
            ))}
          </g>
        );
      })}

      <text x="400" y="320" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2" fontStyle="italic">the difference is in kind: the good answer assumes the model will fail and contains it — the evasive answer hopes</text>

      <rect x="30" y="334" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="354" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IN A SOC, HOPING IS NOT A CONTROL</text>
      <text x="400" y="371" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">when the pitch and the contract describe different products, believe the contract</text>
    </DiagramFrame>
  );
};

export const HonestBusinessCaseDiagram = () => {
  const flow = [
    { x: 30, h: 'alerts / day', s: 'in the classes it touches' },
    { x: 222, h: 'minutes saved / alert', s: 'today vs with the product' },
    { x: 414, h: 'loaded analyst cost', s: 'your rate, not a benchmark' },
    { x: 606, h: 'gross saving', s: 'before the discounts' },
  ];
  const discounts = [
    ['count only the alert classes', 'the product genuinely covers'],
    ['ramp the benefit over adoption', 'months, not from signature'],
    ['saved hours count only where', 'they demonstrably go'],
  ];
  const omits = [
    '+ integration and parser engineering',
    '+ tuning time before advertised accuracy',
    '+ sampled review of auto-closed alerts',
    '+ training and process change',
    '+ licence growth as data volume rises',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 504" caption="Build the case from your own ticketing data, add the lines vendor calculators omit, and price the miss as carefully as the noise.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Arithmetic you can do on one page — done honestly</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your alert mix and close times are knowable facts — anchor the case in them, not in vendor benchmarks</text>

      {flow.map((f, i) => (
        <g key={i}>
          <rect x={f.x} y="58" width="160" height="42" rx="7" fill={COLORS.white} stroke={i === 3 ? COLORS.emerald : COLORS.blue} strokeWidth="2" />
          <text x={f.x + 80} y="75" textAnchor="middle" fill={i === 3 ? COLORS.emerald : COLORS.blue} fontSize="7.6" fontWeight="700">{f.h}</text>
          <text x={f.x + 80} y="90" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{f.s}</text>
        </g>
      ))}
      <text x="206" y="84" textAnchor="middle" fill={COLORS.slate500} fontSize="13" fontWeight="700">×</text>
      <text x="398" y="84" textAnchor="middle" fill={COLORS.slate500} fontSize="13" fontWeight="700">×</text>
      <text x="590" y="84" textAnchor="middle" fill={COLORS.slate500} fontSize="13" fontWeight="700">=</text>

      <rect x="30" y="112" width="740" height="62" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="128" textAnchor="middle" fill={COLORS.amber} fontSize="7.8" fontWeight="700">THE HONESTY DISCOUNTS — APPLY BEFORE ANYONE SEES THE NUMBER</text>
      {discounts.map((d, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="136" width="228" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="148" textAnchor="middle" fill={COLORS.slate700} fontSize="6.4">{d[0]}</text>
          <text x={160 + i * 240} y="159" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{d[1]}</text>
        </g>
      ))}

      <rect x="30" y="186" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="186" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="199" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHAT THE CALCULATOR OMITS</text>
      {omits.map((t, i) => (
        <text key={i} x="46" y={220 + i * 15} fill={COLORS.slate600} fontSize="7">{t}</text>
      ))}
      <text x="210" y="300" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontStyle="italic">auto-closed alerts still need sampled human review</text>

      <rect x="410" y="186" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="186" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="590" y="199" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHAT IT QUIETLY INFLATES</text>
      <text x="426" y="220" fill={COLORS.slate600} fontSize="7">− benchmark savings from customers with ideal telemetry</text>
      <text x="426" y="235" fill={COLORS.slate600} fontSize="7">− full adoption assumed from day one</text>
      <line x1="426" y1="248" x2="754" y2="248" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="590" y="264" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">rebuild it: their numbers and your costs side by side —</text>
      <text x="590" y="276" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">the gap between the two totals is itself diligence</text>
      <text x="590" y="296" textAnchor="middle" fill={COLORS.amber} fontSize="6.6" fontStyle="italic">present it back — the reaction is part of the evaluation</text>

      <rect x="30" y="320" width="740" height="88" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8" fontWeight="700">PRICE BOTH FAILURE DIRECTIONS — AND ASK WHO CONTROLS THE THRESHOLD THAT TRADES THEM</text>
      <rect x="46" y="346" width="340" height="54" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="216" y="360" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">THE COST OF NOISE — PAID NOW</text>
      <text x="216" y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">analyst hours and attention — a noisy product</text>
      <text x="216" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">retrains the team to dismiss alerts, degrading</text>
      <text x="216" y="395" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">real coverage while the dashboards look fine</text>
      <rect x="414" y="346" width="340" height="54" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="584" y="360" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">THE COST OF A MISS — PAID LATER</text>
      <text x="584" y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">incidents, dwell time, historical breach cost</text>
      <text x="584" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">in your sector — invisible until the day</text>
      <text x="584" y="395" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">it is an incident</text>

      <text x="400" y="422" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">suppression is the easiest metric to improve and the most dangerous — the miss it creates stays invisible</text>

      <rect x="30" y="436" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BUILD IT FROM YOUR OWN TICKETING DATA — VOLUMES AND CLOSE TIMES ARE FACTS YOU OWN</text>
      <text x="400" y="473" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">&quot;analyst hours saved&quot; that nobody reallocates is a number on a slide, not a return</text>
    </DiagramFrame>
  );
};

export const BuyerSituationsDiagram = () => {
  const cards = [
    {
      x: 30, c: COLORS.blue, h: 'ADDING TO A STACK YOU KEEP',
      dom: ['integration reality — the AI layer is', 'only as good as its telemetry access'],
      probe: ['each connector: who built it, who', 'maintains it, who fixes an API break', 'the delta over AI features already', 'licensed in tools you own'],
      mistake: ['shelfware: a strong product beside', 'the stack, not wired into it'],
    },
    {
      x: 282, c: COLORS.amber, h: 'REPLACING AN INCUMBENT',
      dom: ['switching costs — the incumbent is', 'tuned by years of detections + process'],
      probe: ['the migration story in specifics:', 'history, custom detections, parallel', 'running at double cost — evidence on', 'your data before the contract'],
      mistake: ['anger-driven displacement —', 'frustration is not evidence'],
    },
    {
      x: 534, c: COLORS.cyan, h: 'BUILDING FRESH',
      dom: ['freedom and its risk — no baseline', 'to measure vendor claims against'],
      probe: ['design governance in from day one:', 'identity, audit trails, approval gates', 'pilot the few capabilities you can', 'validate before platform commitment'],
      mistake: ['early platform lock-in — "one', 'platform" is a claim, not a fact'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 380" caption="Adding, replacing, and building fresh demand different evaluations — name your situation first, or the vendor will name it for you.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The same product, three different evaluations</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">vendors classify you on the first call and calibrate the pitch — classify yourself first</text>

      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="64" width="236" height="188" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="64" width="236" height="18" rx="9" fill={c.c} />
          <text x={c.x + 118} y="77" textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{c.h}</text>
          <text x={c.x + 12} y="96" fill={c.c} fontSize="6.2" fontWeight="700">WHAT DOMINATES</text>
          {c.dom.map((t, j) => (
            <text key={j} x={c.x + 12} y={108 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
          ))}
          <text x={c.x + 12} y="136" fill={c.c} fontSize="6.2" fontWeight="700">PROBE HARDEST</text>
          {c.probe.map((t, j) => (
            <text key={j} x={c.x + 12} y={148 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
          ))}
          <rect x={c.x + 12} y="196" width="212" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={c.x + 118} y="209" textAnchor="middle" fill={COLORS.red} fontSize="6.2" fontWeight="700">THE CHARACTERISTIC MISTAKE</text>
          {c.mistake.map((t, j) => (
            <text key={j} x={c.x + 118} y={221 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="264" width="740" height="30" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="283" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontWeight="700">NAME YOUR SITUATION BEFORE THE FIRST MEETING — THE RIGHT CRITERIA COME FROM IT, NOT THE DECK</text>

      <rect x="30" y="306" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="326" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EACH SITUATION HAS ITS OWN DOMINANT RISK AND ITS OWN CHARACTERISTIC MISTAKE</text>
      <text x="400" y="343" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">unclassified buyers get steered into the framing with the largest deal size</text>
    </DiagramFrame>
  );
};

export const SecurityPromptingDiagram = () => {
  const cards = [
    {
      x: 30, h: 'SUMMARISING ALERTS + INCIDENTS',
      pattern: ['state the role and audience,', 'constrain the format — timeline,', 'assets, actions, open questions —', 'then paste the source material'],
      check: ['every timestamp, hostname, and', 'indicator checked against source', '— gaps get plausible fabrication'],
    },
    {
      x: 282, h: 'DRAFTING COMMS UNDER PRESSURE',
      pattern: ['give the facts, the audience,', 'and the desired reader action —', 'let it handle register: exec', 'summary, notice, status update'],
      check: ['factual claims, liability wording,', 'and the decision to send stay', 'human — drafts are discoverable'],
    },
    {
      x: 534, h: 'QUERYING DOCS AND STANDARDS',
      pattern: ['supply the document, then ask', 'for gaps, contradictions, or', 'application to a scenario —', 'require quoted passages'],
      check: ['un-supplied documents get', 'answered from stale training', 'data — treat it as a rumour'],
    },
  ];
  const line = [
    ['know your tier — consumer', 'tools may train on input;', 'enterprise must forbid it'],
    ['sanitise by default —', 'placeholders and masked', 'IPs keep the value'],
    ['never paste credentials,', 'live evidence, or unpatched', 'vulnerability detail'],
    ['prompt history is a record', '— assume everything typed', 'persists somewhere'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 392" caption="Summarise, draft, and interrogate documents with structured prompts — then verify every fact, and keep credentials and live evidence out of anything unapproved.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three daily wins, one hard line</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">role, audience, format, then the raw material — and verify before anything travels</text>

      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="58" width="236" height="134" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={c.x} y="58" width="236" height="18" rx="9" fill={COLORS.blue} />
          <text x={c.x + 118} y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{c.h}</text>
          <text x={c.x + 12} y="89" fill={COLORS.blue} fontSize="6.2" fontWeight="700">THE PATTERN</text>
          {c.pattern.map((t, j) => (
            <text key={j} x={c.x + 12} y={100 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
          ))}
          <text x={c.x + 12} y="150" fill={COLORS.emerald} fontSize="6.2" fontWeight="700">THE CHECK</text>
          {c.check.map((t, j) => (
            <text key={j} x={c.x + 12} y={161 + j * 11} fill={COLORS.slate600} fontSize="6.6">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="204" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="204" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="217" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE CONFIDENTIALITY LINE — SECURITY PROMPTS ARE SENSITIVE BY DEFAULT</text>
      {line.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="230" width="172" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {c.map((t, j) => (
            <text key={j} x={132 + i * 186} y={243 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>
          ))}
        </g>
      ))}

      <text x="400" y="302" textAnchor="middle" fill={COLORS.slate600} fontSize="7" fontStyle="italic">your organisation&apos;s AI use policy should name approved tools per data class — know it before you type</text>

      <rect x="30" y="316" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE OUTPUT IS A DRAFT THAT SAVES THIRTY MINUTES — NEVER A RECORD YOU CAN SIGN</text>
      <text x="400" y="353" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a summariser smooths over gaps with plausible fabrication exactly where the record is thinnest</text>
    </DiagramFrame>
  );
};
