import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR FINANCE — MODULE 1: THE HONEST MAP ============ */
export const HonestMapFinanceDiagram = () => {
  const cards = [
    { x: 30, c: COLORS.emerald, h: 'WHAT THIS COURSE IS', l: ['educational orientation for people who have to think', 'clearly about AI inside a regulated institution —', 'vocabulary, the shape of the arguments, and the', 'questions worth putting to somebody accountable'] },
    { x: 410, c: COLORS.red, h: 'WHAT IT IS NOT', l: ['not investment advice · not financial advice', 'not legal advice · not compliance advice', 'no view on any security, product, counterparty', 'or customer · no advisory relationship of any kind'] },
  ];
  const who = [['your regulator', 'and supervisor'], ['your licence', 'conditions'], ['your model risk', 'policy'], ['legal and', 'compliance']];
  const axes = [
    { x: 30, h: 'BY JURISDICTION', l: ['US banking supervision, EU financial', 'regulation, UK conduct and prudential', 'rules — overlapping in principle,', 'diverging sharply in detail'] },
    { x: 280, h: 'BY INSTITUTION TYPE', l: ['bank, insurer, asset manager,', 'broker-dealer, payments firm —', 'different duties over identical', 'technology'] },
    { x: 530, h: 'BY LICENCE AND SUPERVISION', l: ['licence conditions, and group', 'versus entity supervision, change', 'the answer for the same use case'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Whether a use is permitted at your firm is answered by your rulebook and your supervisor, never by a course.">
      <defs><marker id="arrowHMFa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">This course is orientation — the answer about permission lives elsewhere</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nothing here is investment, financial, legal or compliance advice, and no lesson creates an advisory relationship</text>
      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="56" width="360" height="96" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="56" width="360" height="18" rx="9" fill={c.c} /> <text x={c.x + 180} y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => <text key={j} x={c.x + 16} y={90 + j * 13} fill={COLORS.slate600} fontSize="7.8">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="164" width="740" height="112" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="182" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">“MAY WE USE THIS HERE?” — THE FOUR PLACES THE ANSWER ACTUALLY COMES FROM</text>
      <rect x="46" y="196" width="150" height="48" rx="7" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.6" /> <text x="121" y="214" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a specific use, in a</text> <text x="121" y="226" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">specific place, at your firm</text>
      <line x1="200" y1="220" x2="234" y2="220" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowHMFa)" />
      {who.map((w, i) => (
        <g key={i}>
          <rect x={240 + i * 132} y="196" width="124" height="48" rx="7" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" /> <text x={302 + i * 132} y="216" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">{w[0]}</text> <text x={302 + i * 132} y="230" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">{w[1]}</text>
        </g>
      ))}
      <text x="400" y="262" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">a course cannot answer this — and describing a capability is not endorsing it</text>
      {axes.map((a, i) => (
        <g key={i}>
          <rect x={a.x} y="286" width="240" height="88" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
          <rect x={a.x} y="286" width="240" height="16" rx="9" fill={COLORS.cyan} /> <text x={a.x + 120} y="298" textAnchor="middle" fill={COLORS.white} fontSize="7.2" fontWeight="700">{a.h}</text>
          {a.l.map((t, j) => <text key={j} x={a.x + 12} y={318 + j * 12} fill={COLORS.slate600} fontSize="7.4">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="382" width="740" height="40" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="397" textAnchor="middle" fill={COLORS.amber} fontSize="7.6" fontWeight="700">DELIBERATELY THIN: NO THRESHOLDS, CUT-OFFS OR PARAMETER CHOICES · NO VENDORS, PRODUCTS OR MODEL VERSIONS NAMED</text> <text x="400" y="411" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">no signal construction or strategy design · the deployment evidence base is young and mostly vendor-reported</text>
      <rect x="30" y="430" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="450" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DESCRIBING A CAPABILITY IS NOT PERMISSION TO DEPLOY IT</text> <text x="400" y="467" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">permission comes from your regulator, licence, model risk policy and legal function — in combination, and nowhere else</text>
    </DiagramFrame>
  );
};
export const ModelsNotNewDiagram = () => {
  const era = ['credit scorecards', 'fraud detection', 'pricing and valuation', 'capital and stress', 'actuarial', 'AML monitoring', 'execution algorithms'];
  const changed = [
    { x: 30, h: 'UNSTRUCTURED TEXT BECAME USABLE', l: ['contracts, filings, emails, call', 'transcripts and scanned', 'correspondence, at volume'] },
    { x: 280, h: 'LANGUAGE IS NOW THE INTERFACE', l: ['a non-technical user can direct', 'a system in prose — widening', 'who can invoke a model'] },
    { x: 530, h: 'THE OUTPUT IS GENERATIVE', l: ['prose that reads as reasoned', 'replaces a score or a class', 'label'] },
  ];
  const rows = [
    ['deterministic — the same input gives the same output', 'identical inputs may produce different outputs between runs'],
    ['stable, numeric, structured inputs', 'the input is a prompt plus a retrieved corpus, both undocumented'],
    ['a measurable outcome to backtest against', 'no single realised outcome to compare a paragraph with'],
    ['coefficients and relationships somebody can inspect', 'weights you cannot see, and an explanation you must construct'],
    ['a release that you control', 'the provider can change the model with no release on your side'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Finance already governs models; what is new is generative output, which the old validation machinery cannot backtest.">
      <defs><marker id="arrowMNNa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Not a new industry for models — but the old machinery assumes a different one</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">scorecards, fraud, valuation, capital, actuarial, monitoring and execution models all predate this wave</text>
      <rect x="30" y="54" width="740" height="84" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="46" y="70" fill={COLORS.slate500} fontSize="8" fontWeight="700">HALF A CENTURY OF STATISTICAL DECISIONING IN FINANCE</text>
      <line x1="46" y1="94" x2="752" y2="94" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowMNNa)" />
      {era.map((t, i) => (
        <g key={i}>
          <circle cx={96 + i * 101} cy="94" r="3.4" fill={COLORS.blue} />
          <text x={96 + i * 101} y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{t}</text>
        </g>
      ))}
      <text x="400" y="128" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">and the supervisory apparatus built around them — model risk definitions, independent validation, inventory, documentation, governance</text>
      {changed.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="146" width="240" height="72" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
          <rect x={c.x} y="146" width="240" height="16" rx="9" fill={COLORS.cyan} /> <text x={c.x + 120} y="158" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => <text key={j} x={c.x + 12} y={176 + j * 12} fill={COLORS.slate600} fontSize="7.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="232" textAnchor="middle" fill={COLORS.red} fontSize="8" fontStyle="italic">a score can be backtested against an outcome and a paragraph cannot — that is the governance problem</text>
      <rect x="30" y="244" width="740" height="128" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="220" y="262" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">THE MACHINERY QUIETLY ASSUMES</text> <text x="588" y="262" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">AN LLM FEATURE CAN BREACH ALL FIVE</text>
      <line x1="412" y1="270" x2="412" y2="362" stroke={COLORS.slate300} strokeWidth="1.2" />
      {rows.map((r, i) => (
        <g key={i}>
          <text x="46" y={286 + i * 20} fill={COLORS.slate600} fontSize="7.8">{r[0]}</text>
          <text x="424" y={286 + i * 20} fill={COLORS.red} fontSize="7.8">{r[1]}</text>
        </g>
      ))}
      <rect x="30" y="380" width="740" height="36" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="394" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">THE CONTINUITY IS BOTH COMFORT AND TRAP</text> <text x="400" y="407" textAnchor="middle" fill={COLORS.slate600} fontSize="8">extend the regime you have — forced through unchanged it yields metrics that measure nothing; declared out of scope it gets no oversight at all</text>
      <rect x="30" y="424" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="444" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">OBLIGATIONS ATTACH TO THE USE AND THE OUTCOME, NOT TO THE ARCHITECTURE</text> <text x="400" y="461" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">record which of the old assumptions still hold for this use — that decision is the work</text>
    </DiagramFrame>
  );
};
export const WhereItHelpsFinanceDiagram = () => {
  const conds = [
    { h: 'HIGH-FIDELITY SOURCE', l: ['the text is in front of the model,', 'not recalled from training'], c: COLORS.blue },
    { h: 'VOLUME IS THE CONSTRAINT', l: ['human reading time is the actual', 'bottleneck in the process'], c: COLORS.blue },
    { h: 'REVIEW ALREADY EXISTS', l: ['the control is native to the', 'workflow, not bolted on'], c: COLORS.blue },
    { h: 'THE REVIEWER CAN TELL', l: ['an error is detectable against the', 'source sitting next to it'], c: COLORS.emerald },
  ];
  const good = [
    'onboarding — entity extraction, ownership resolution, adverse-media summary',
    'alert triage — case assembly, prior-alert summary, first-pass narrative',
    'claims and contracts — intake, covenant and clause location, consistency checks',
    'research — compressing filings, transcripts and reports read at speed',
    'client-service drafting — a first pass a person reviews before it is sent',
  ];
  const bad = [
    ['investment recommendations and client advice', 'engages the local advice regime — MiFID II suitability in the EU,', 'Regulation Best Interest and the fiduciary standard in the US'],
    ['autonomous execution', 'removes the review step that made the others acceptable, and loses', 'money faster than anyone can intervene'],
    ['a language model in place of a scored credit decision', 'forfeits the stability and explanation consumer-credit rules', 'in the US and EU assume'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 458" caption="Ask which obligation attaches to the output before asking whether the model is good enough at the task.">
      <defs><marker id="arrowWIHa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Documents in, structure out — and the test that decides</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">four conditions have to hold together, and the fourth does most of the work</text>
      {conds.map((c, i) => (
        <g key={i}>
          <rect x="30" y={58 + i * 48} width="200" height="44" rx="7" fill={COLORS.white} stroke={c.c} strokeWidth={i === 3 ? 2 : 1.5} /> <text x="42" y={72 + i * 48} fill={c.c} fontSize="7.2" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => <text key={j} x="42" y={84 + i * 48 + j * 11} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
        </g>
      ))}
      <line x1="234" y1="152" x2="352" y2="140" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowWIHa)" />
      <line x1="234" y1="182" x2="352" y2="256" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowWIHa)" />
      <text x="248" y="216" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">all four hold</text>
      <text x="248" y="228" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">— or one fails</text>
      <rect x="30" y="258" width="200" height="60" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" /> <text x="42" y="272" fill={COLORS.red} fontSize="7" fontWeight="700">IF THE FOURTH FAILS</text> <text x="42" y="286" fill={COLORS.slate600} fontSize="6.8">the task has quietly moved into</text>
      <text x="42" y="297" fill={COLORS.slate600} fontSize="6.8">a much higher risk category —</text>
      <text x="42" y="308" fill={COLORS.slate600} fontSize="6.8">however routine it feels</text>
      <rect x="360" y="58" width="410" height="164" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="360" y="58" width="410" height="18" rx="9" fill={COLORS.emerald} /> <text x="565" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">EARNS ITS PLACE TODAY</text>
      {good.map((t, i) => <text key={i} x="374" y={94 + i * 20} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="374" y="194" fill={COLORS.amber} fontSize="6.8" fontStyle="italic">what stays human: the escalation or filing decision and its recorded rationale</text>
      <text x="374" y="207" fill={COLORS.amber} fontSize="6.8" fontStyle="italic">missed alerts are silent — measure what the assistant deprioritised, not only what it surfaced</text>
      <rect x="360" y="232" width="410" height="122" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="360" y="232" width="410" height="18" rx="9" fill={COLORS.red} /> <text x="565" y="245" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">DOES NOT EARN ITS PLACE</text>
      {bad.map((b, i) => (
        <g key={i}>
          <text x="374" y={264 + i * 32} fill={COLORS.slate700} fontSize="7.2" fontWeight="700">{b[0]}</text>
          <text x="374" y={275 + i * 32} fill={COLORS.slate600} fontSize="6.4">{b[1]}</text>
          <text x="374" y={285 + i * 32} fill={COLORS.slate600} fontSize="6.4">{b[2]}</text>
        </g>
      ))}
      <rect x="30" y="364" width="740" height="28" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="382" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">THE COMMON FAILURE EACH TIME: NO GROUND TRUTH IN FRONT OF THE MODEL, HIGH CONSEQUENCE, A DUTY THE OUTPUT CANNOT MEET</text>
      <rect x="30" y="400" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE REVIEWER MUST BE ABLE TO SPOT A WRONG ANSWER AGAINST THE SOURCE</text> <text x="400" y="437" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">anything sent to a client is also a retained, supervised business communication</text>
    </DiagramFrame>
  );
};
export const WherePilotsDieDiagram = () => {
  const gates = [
    { h: 'DATA AND LINEAGE', l: ['duplicate, unresolved', 'entity data; contested', 'golden sources'], d: 'hand-cleaned extract' },
    { h: 'LEGACY INTEGRATION', l: ['batch windows, change', 'freezes, releases in', 'quarters'], d: 'output nobody sees' },
    { h: 'GOVERNANCE SIGN-OFF', l: ['classification, then', 'validation, data', 'protection, procurement'], d: 'queue after the demo' },
    { h: 'PRODUCTION OWNERSHIP', l: ['pilots are staffed by', 'enthusiasts; production', 'by whoever is on shift'], d: 'champion moved role' },
    { h: 'VENDOR CONCENTRATION', l: ['a provider update is a', 'change to your model —', 'and it is correlated'], d: 'silent model update' },
  ];
  const path = [['model risk', 'classification'], ['independent', 'validation queue'], ['second-line', 'review'], ['data protection', 'assessment'], ['records retention', 'treatment'], ['procurement and', 'third-party risk'], ['committee —', 'meets monthly']];
  const asks = [
    { h: 'ACCOUNTABLE OWNER', l: ['a named person in the first line,', 'not a role that is vacant'] },
    { h: 'MONITORING', l: ['which thresholds, and on whose', 'desk does the alert land'] },
    { h: 'THE ORDINARY DAY', l: ['who takes the call when a user', 'says the output looks wrong'] },
    { h: 'THE OFF SWITCH', l: ['who is authorised to switch it', 'off, and without a committee'] },
    { h: 'PROVIDER UPDATES', l: ['who re-validates — and how you', 'would know it had happened'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 436" caption="A pilot on a hand-cleaned extract proves nothing about production data you cannot reproduce at run time.">
      <defs><marker id="arrowWPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate300} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The pilot works — then it meets five things nobody scoped</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model is rarely the cause of death, and every one of these is foreseeable before you build</text>
      <line x1="30" y1="102" x2="762" y2="102" stroke={COLORS.slate200} strokeWidth="10" markerEnd="url(#arrowWPDa)" />
      <rect x="30" y="76" width="76" height="52" rx="7" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.6" /> <text x="68" y="98" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the demo</text> <text x="68" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="7">works</text>
      <rect x="686" y="76" width="76" height="52" rx="7" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" /> <text x="724" y="98" textAnchor="middle" fill={COLORS.slate600} fontSize="7">in front of</text> <text x="724" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="7">a real user</text>
      {gates.map((g, i) => (
        <g key={i}>
          <rect x={116 + i * 114} y="76" width="104" height="52" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
          <rect x={116 + i * 114} y="76" width="104" height="16" rx="7" fill={COLORS.red} /> <text x={168 + i * 114} y="87" textAnchor="middle" fill={COLORS.white} fontSize="6.2" fontWeight="700">{g.h}</text>
          {g.l.map((t, j) => <text key={j} x={168 + i * 114} y={104 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
          <line x1={168 + i * 114} y1="130" x2={168 + i * 114} y2="138" stroke={COLORS.red} strokeWidth="1.4" />
          <text x={168 + i * 114} y="150" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontStyle="italic">{g.d}</text>
        </g>
      ))}
      <rect x="30" y="164" width="740" height="76" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="164" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="177" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE APPROVAL PATH — KNOWABLE IN ADVANCE, RARELY MAPPED</text>
      {path.map((p, i) => (
        <g key={i}>
          <rect x={42 + i * 104} y="190" width="100" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x={92 + i * 104} y="203" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{p[0]}</text> <text x={92 + i * 104} y="213" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{p[1]}</text>
        </g>
      ))}
      <text x="400" y="234" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">map this before you build — teams that discover it after the demo have built something that cannot be deployed</text>
      <rect x="30" y="250" width="740" height="82" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="268" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">ASK THESE BEFORE THE PILOT, NOT ON THE FIRST ORDINARY WORKING DAY AFTER GO-LIVE</text>
      {asks.map((a, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="276" width="140" height="44" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.4" /> <text x={112 + i * 146} y="290" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{a.h}</text>
          {a.l.map((t, j) => <text key={j} x={112 + i * 146} y={302 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="340" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="360" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PRE-MORTEM COSTS AN HOUR — KILL THE USE CASE ON PAPER BEFORE ANYONE BUILDS IT</text> <text x="400" y="377" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">name the owner, the thresholds, the escalation path and the off switch while the plan can still change</text>
    </DiagramFrame>
  );
};
export const OfficeRiskProfileDiagram = () => {
  const cols = [
    { x: 30, c: COLORS.red, h: 'FRONT OFFICE', b: 'the customer and the market bear it', l: ['· a wrong client message is a mis-selling and', '  conduct exposure, not a drafting error', '· anything shading toward a recommendation', '  engages the advice regime that applies:', '  MiFID II suitability in the EU; Regulation Best', '  Interest and the fiduciary standard in the US', '· assisted communications are still retained,', '  supervised business records', '· algorithmic trading: testing, risk limits and a', '  halt that has actually been exercised'], f: 'surfaces outward — it leaves the firm' },
    { x: 280, c: COLORS.amber, h: 'MIDDLE OFFICE', b: 'the firm bears it, quietly', l: ['· risk measurement, limit monitoring, validation', '  and surveillance', '· you do not lose money on the day — you stop', '  knowing your own exposure, and find out at', '  the worst possible moment', '· a surveillance tool that under-flags', '  manufactures the appearance of a clean book'], f: 'silent until the moment it is expensive' },
    { x: 530, c: COLORS.blue, h: 'BACK OFFICE', b: 'the firm bears it, visibly', l: ['· reconciliation breaks and settlement errors', '· misstated ledgers and inaccurate regulatory', '  returns — all reportable events', '· under many regimes the wrong return is itself', '  a breach, independent of the error behind it'], f: 'a correction then carries two problems, not one' },
  ];
  const qs = ['where does the output land?', 'which duty attaches there?', 'whose consequence when it is wrong?'];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="The risk lives in where the output lands, not in the model — so a blanket firm-wide position on AI is useless.">
      <defs><marker id="arrowORPa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One tool, three consequences — and three different people answering</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the technology is identical; the consequence, the regulatory hook and the accountable person all differ</text>
      <rect x="300" y="56" width="200" height="36" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="400" y="72" textAnchor="middle" fill={COLORS.slate700} fontSize="8" fontWeight="700">the same summarisation assistant</text> <text x="400" y="85" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8">identical capability, identical output</text>
      <line x1="330" y1="92" x2="150" y2="106" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowORPa)" />
      <line x1="400" y1="92" x2="400" y2="106" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowORPa)" />
      <line x1="470" y1="92" x2="650" y2="106" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowORPa)" />
      {cols.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="112" width="240" height="212" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="112" width="240" height="18" rx="9" fill={c.c} /> <text x={c.x + 120} y="125" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{c.h}</text> <text x={c.x + 12} y="146" fill={c.c} fontSize="7.2" fontWeight="700">{c.b}</text>
          {c.l.map((t, j) => <text key={j} x={c.x + 12} y={162 + j * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
          <line x1={c.x + 12} y1="296" x2={c.x + 228} y2="296" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={c.x + 12} y="312" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">{c.f}</text>
        </g>
      ))}
      <rect x="30" y="334" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="400" y="350" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">THE MEANINGFUL UNIT IS THE SPECIFIC USE IN A SPECIFIC PLACE</text>
      {qs.map((q, i) => (
        <g key={i}>
          <rect x={42 + i * 246} y="358" width="232" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x={158 + i * 246} y="376" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">{q}</text>
        </g>
      ))}
      <rect x="30" y="406" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="426" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">MIDDLE-OFFICE FAILURES DO NOT LOSE MONEY ON THE DAY — THEY REMOVE YOUR KNOWLEDGE OF YOUR EXPOSURE</text> <text x="400" y="443" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">first question on any proposal: whose consequence is it when this output is wrong?</text>
    </DiagramFrame>
  );
};
/* ============ AI FOR FINANCE — MODULE 2: MODEL RISK AND EXPLAINABILITY ============ */
export const ModelRiskFrameDiagram = () => {
  const pillars = [
    { x: 300, h: 'DEVELOPMENT AND USE', l: ['robust design, documented', 'assumptions, and use within', 'the stated purpose'] },
    { x: 460, h: 'INDEPENDENT VALIDATION', l: ['a separate exercise, by', 'people with the standing', 'and incentive to say no'] },
    { x: 620, h: 'GOVERNANCE AND CONTROLS', l: ['policies, committees and', 'the authority that makes', 'the first two happen'] },
  ];
  const covers = ['conceptual soundness — design and assumptions fit', 'the intended use', 'ongoing monitoring — performance tracked against', 'thresholds after deployment', 'outcomes analysis — results against realised', 'outcomes and sensible benchmarks'];
  const strains = [
    ['nothing to backtest — no', 'single realised outcome for', 'a text output'],
    ['the prompt and the retrieval', 'corpus are part of the model', 'and belong in its documents'],
    ['identical inputs can produce', 'different outputs, breaking', 'reproducibility tests'],
    ['the population the system', 'sees has no stable', 'definition'],
    ['the provider controls the', 'weights — it can change with', 'no release on your side'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 436" caption="Bring an AI feature into the model risk regime and tier it by materiality — adapt the techniques, never skip the validation.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The frame you already have — and the five places it strains</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">model risk was defined long before this technology, and these features land inside it</text>
      <rect x="30" y="56" width="250" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="56" width="250" height="16" rx="9" fill={COLORS.red} /> <text x="155" y="68" textAnchor="middle" fill={COLORS.white} fontSize="7.2" fontWeight="700">TWO SOURCES OF MODEL RISK</text> <text x="42" y="88" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">1 · the model is wrong</text>
      <text x="42" y="100" fill={COLORS.slate600} fontSize="7">incorrect output drives the decision</text>
      <text x="42" y="118" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">2 · it is sound, used outside its purpose</text>
      <text x="42" y="130" fill={COLORS.slate600} fontSize="7">the more common and more expensive of</text>
      <text x="42" y="142" fill={COLORS.slate600} fontSize="7">the two, and the harder one to see</text>
      <rect x="30" y="164" width="250" height="104" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="164" width="250" height="16" rx="9" fill={COLORS.blue} /> <text x="155" y="176" textAnchor="middle" fill={COLORS.white} fontSize="7.2" fontWeight="700">WHAT VALIDATION COVERS</text>
      {covers.map((t, i) => <text key={i} x="42" y={196 + i * 12} fill={i % 2 === 0 ? COLORS.slate700 : COLORS.slate600} fontSize="6.8">{t}</text>)}
      <rect x="300" y="56" width="470" height="24" rx="6" fill={COLORS.slate700} /> <text x="535" y="72" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">MODEL RISK MANAGEMENT</text>
      {pillars.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="86" width="140" height="90" rx="7" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
          <rect x={p.x} y="86" width="140" height="16" rx="7" fill={COLORS.blue} /> <text x={p.x + 70} y="97" textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">{p.h}</text>
          {p.l.map((t, j) => <text key={j} x={p.x + 8} y={118 + j * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
        </g>
      ))}
      <rect x="300" y="182" width="470" height="16" rx="5" fill={COLORS.slate200} /> <text x="535" y="194" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">US banking supervision and the UK prudential regulator both set these expectations; other regimes mirror them</text>
      <rect x="300" y="206" width="470" height="62" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="312" y="222" fill={COLORS.emerald} fontSize="8" fontWeight="700">EFFECTIVE CHALLENGE — MOSTLY AN ORGANISATIONAL PROPERTY</text> <text x="312" y="236" fill={COLORS.slate600} fontSize="7.2">validation is not testing by the build team — it needs competence, standing and the incentive to say no</text>
      <text x="312" y="248" fill={COLORS.red} fontSize="7.4">it fails quietly when the validator reports to the model owner, is under-resourced,</text>
      <text x="312" y="260" fill={COLORS.red} fontSize="7.4">or arrives after the launch date has already been announced</text>
      <rect x="30" y="280" width="740" height="92" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="298" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">WHERE THE FRAME STRAINS — ADAPT THE TECHNIQUES, NEVER SKIP THE VALIDATION</text>
      {strains.map((s, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="306" width="140" height="52" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
          {s.map((t, j) => <text key={j} x={112 + i * 146} y={322 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="380" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="400" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BRING IT INTO SCOPE AND TIER IT BY MATERIALITY</text> <text x="400" y="417" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">arguing that it is not a model is the answer that fails — and misuse outside intended purpose is the costlier source</text>
    </DiagramFrame>
  );
};
export const ExplainThisDecisionDiagram = () => {
  const askers = [
    { x: 30, h: 'THE SUPERVISOR', a: ['asks: was it conceptually sound,', 'validated, and used as intended?'], w: 'wants: process and evidence', s: ['answered from: the validation file', 'and the documentation'] },
    { x: 280, h: 'THE COMPLAINT HANDLER', a: ['asks: was this customer treated', 'fairly, and what was relied on?'], w: 'wants: this one case', s: ['answered from: the record of', 'what drove this decision'] },
    { x: 530, h: 'THE DECLINED CUSTOMER', a: ['asks: what was it about me, and', 'what could I change?'], w: 'wants: a reason they can act on', s: ['answered from: specific principal', 'reasons, in plain language'] },
  ];
  const glob = ['which factors the model uses, and how it was developed', 'the alternatives considered and why each was set aside', 'whether relationships are constrained to move sensibly', 'performance by segment, not a headline average', 'this is what a validation file contains and a supervisor examines'];
  const casel = ['why this application, at this time, produced this outcome', 'in terms the person could plausibly act on', 'which part came from the model, a policy rule, or a human', 'stable — the same case gives the same reasons tomorrow', 'this is what a complaint or an adverse action needs'];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Both explanations must exist, they are produced by different work, and neither excuses the absence of the other.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three people ask for an explanation — and mean three different things</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the word hides a demand about process, a demand about one case, and a demand for something a person can act on</text>
      {askers.map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="56" width="240" height="104" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={k.x} y="56" width="240" height="18" rx="9" fill={COLORS.blue} /> <text x={k.x + 120} y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{k.h}</text>
          {k.a.map((t, j) => <text key={j} x={k.x + 12} y={88 + j * 11} fill={COLORS.slate600} fontSize="7">{t}</text>)}
          <text x={k.x + 12} y="124" fill={COLORS.blue} fontSize="7.2" fontWeight="700">{k.w}</text>
          {k.s.map((t, j) => <text key={j} x={k.x + 12} y={140 + j * 11} fill={COLORS.slate600} fontSize="7">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="170" width="740" height="42" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="186" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">US consumer credit: ECOA and Regulation B require specific principal reasons on an adverse action</text> <text x="400" y="200" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">EU: data protection law restricts solely automated decisions with significant effects — inserting meaningful review changes which rules apply</text>
      <rect x="30" y="222" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="222" width="360" height="18" rx="9" fill={COLORS.blue} /> <text x="210" y="235" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">GLOBAL EXPLANATION — THE MODEL OVERALL</text>
      {glob.map((t, i) => <text key={i} x="44" y={256 + i * 14} fill={i === 4 ? COLORS.slate500 : COLORS.slate600} fontSize="7.4" fontStyle={i === 4 ? 'italic' : 'normal'}>{t}</text>)}
      <rect x="410" y="222" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="222" width="360" height="18" rx="9" fill={COLORS.cyan} /> <text x="590" y="235" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CASE-LEVEL EXPLANATION — THIS DECISION</text>
      {casel.map((t, i) => <text key={i} x="424" y={256 + i * 14} fill={i === 4 ? COLORS.slate500 : COLORS.slate600} fontSize="7.4" fontStyle={i === 4 ? 'italic' : 'normal'}>{t}</text>)}
      <text x="400" y="338" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontStyle="italic">firms routinely offer one where the other is required — they are not substitutes for each other</text>
      <rect x="30" y="346" width="740" height="76" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" /> <text x="400" y="364" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">ATTRIBUTION IS NOT THE SAME AS A REASON</text>
      <line x1="400" y1="372" x2="400" y2="412" stroke={COLORS.slate200} strokeWidth="1.2" />
      <text x="46" y="382" fill={COLORS.red} fontSize="7.4">it describes the arithmetic of the model, not the situation</text>
      <text x="46" y="394" fill={COLORS.red} fontSize="7.4">of the customer — genuinely useful for debugging</text>
      <text x="46" y="406" fill={COLORS.red} fontSize="7.4">methods, baselines and correlated inputs reorder it</text>
      <text x="414" y="382" fill={COLORS.emerald} fontSize="7.4">a reason must be truthful about the decision made,</text>
      <text x="414" y="394" fill={COLORS.emerald} fontSize="7.4">specific enough for the person to act on, and stable</text>
      <text x="414" y="406" fill={COLORS.emerald} fontSize="7.4">where the duty is strict, prefer an interpretable model</text>
      <rect x="30" y="430" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="450" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PER-CASE CHART DOES NOT ANSWER A SUPERVISOR, AND FEATURE IMPORTANCE DOES NOT ANSWER A CUSTOMER</text> <text x="400" y="467" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">test how much your explanations move under a different method or baseline before you rely on them</text>
    </DiagramFrame>
  );
};
export const ProxyDiscriminationDiagram = () => {
  const proxies = ['postcode and geography', 'employer', 'education institution', 'occupation category', 'channel and device', 'language of application', 'merchant and transaction patterns', 'alternative data for thin-file applicants'];
  const label = ['a credit model learns from outcomes observed only on', 'applicants approved under previous policy — so historic', 'decisions are baked into the target the new model is', 'trained to reproduce; reject inference estimates the', 'unobserved outcome, which is an estimate, not a fix'];
  const testing = ['you cannot test what you do not measure — some US mortgage', 'contexts require collecting applicant demographic data while', 'other regimes restrict collecting or inferring it at all', 'estimated group membership carries error into the result', 'test pricing, limits, terms, overrides and error rates too'];
  const lda = ['a substantial legitimate business need?', 'a less discriminatory alternative that meets it?', 'the record of the search and the options set aside'];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Fair lending exposure runs on outcomes, so excluding the variable is not by itself a defence.">
      <defs><marker id="arrowPXDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The model does not see it — and reconstructs it anyway</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a model with enough correlated features rebuilds a characteristic nobody supplied to it, and nobody chose that</text>
      <text x="105" y="98" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">EXCLUDED FROM THE INPUTS</text>
      <rect x="30" y="105" width="150" height="40" rx="7" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.6" strokeDasharray="5 3" /> <text x="105" y="129" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2">race · ethnicity · gender</text>
      <line x1="38" y1="141" x2="172" y2="109" stroke={COLORS.red} strokeWidth="1.6" />
      {proxies.map((t, i) => (
        <g key={i}>
          <rect x="210" y={60 + i * 19} width="210" height="16" rx="4" fill={COLORS.white} stroke={i === 7 ? COLORS.amber : COLORS.slate300} strokeWidth="1.2" /> <text x="315" y={71 + i * 19} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
          <line x1="424" y1={68 + i * 19} x2="466" y2="135" stroke={COLORS.slate300} strokeWidth="1" />
        </g>
      ))}
      <rect x="470" y="110" width="110" height="50" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="525" y="132" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">the model</text> <text x="525" y="146" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">facially neutral</text>
      <line x1="584" y1="135" x2="616" y2="135" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowPXDa)" />
      <rect x="620" y="110" width="150" height="50" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" /> <text x="695" y="130" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontWeight="700">materially worse outcomes</text> <text x="695" y="144" textAnchor="middle" fill={COLORS.slate600} fontSize="7">for a protected group</text>
      <path d="M 470 158 C 380 236, 180 236, 105 149" fill="none" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowPXDa)" />
      <text x="290" y="248" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">reconstructed without anyone choosing it — richer feature sets increase proxy capacity</text>
      <rect x="30" y="258" width="360" height="84" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="258" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="210" y="271" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SUBTLER PROBLEM IS THE LABEL</text>
      {label.map((t, i) => <text key={i} x="44" y={290 + i * 11} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="410" y="258" width="360" height="84" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="258" width="360" height="18" rx="9" fill={COLORS.blue} /> <text x="590" y="271" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">TESTING FOR DISPARATE OUTCOMES</text>
      {testing.map((t, i) => <text key={i} x="424" y={290 + i * 11} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="30" y="352" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="368" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">WHERE A DISPARITY APPEARS IN US LENDING — WHAT THE ECOA AND FAIR HOUSING ACT STRUCTURE ASKS NEXT</text>
      {lda.map((t, i) => (
        <g key={i}>
          <rect x={42 + i * 244} y="376" width="228" height="26" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" /> <text x={156 + i * 244} y="393" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>
        </g>
      ))}
      <rect x="30" y="420" width="740" height="28" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="438" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">fairness metrics conflict mathematically, so choosing between them is a senior policy decision · testing standards for LLM components in a decision chain are unsettled</text>
      <rect x="30" y="456" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">“THE MODEL DOES NOT SEE RACE” IS A STATEMENT ABOUT INPUTS — THE LAW ASKS ABOUT OUTCOMES</text> <text x="400" y="493" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">in US lending, discriminatory effect can support a challenge without any showing of intent</text>
    </DiagramFrame>
  );
};
export const ModelInventoryDiagram = () => {
  const fields = ['owner', 'intended use and limits', 'materiality tier', 'validation status and date', 'dependencies — data and models', 'monitoring arrangements'];
  const missing = ['models embedded inside purchased systems', 'consequential spreadsheets and end-user computing tools', 'AI features adopted by a business team without going', 'through technology procurement — the fastest-growing gap'];
  const docs = [['intended use and stated', 'limitations'], ['data sources and lineage'], ['development record —', 'alternatives rejected'], ['segment-level performance,', 'not a headline average'], ['validation report — findings', 'and approval conditions'], ['monitoring plan with', 'named thresholds'], ['the review design'], ['a decommissioning plan']];
  const changes = ['retrain', 'reweighting', 'new input source', 'moved cut-off', 'edited prompt', 'swapped corpus', 'provider upgrade'];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="If it is not in the inventory it is not managed — and a changed model is a new model.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The inventory is the spine — and the entries that go missing are predictable</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a retrain, a moved cut-off, an edited prompt or a provider-side upgrade is a change to the thing that was approved</text>
      <rect x="30" y="56" width="380" height="118" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="380" height="18" rx="9" fill={COLORS.blue} /> <text x="220" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT AN INVENTORY ENTRY RECORDS</text>
      {fields.map((t, i) => (
        <g key={i}>
          <rect x={46 + (i % 2) * 190} y={84 + Math.floor(i / 2) * 30} width="170" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x={131 + (i % 2) * 190} y={100 + Math.floor(i / 2) * 30} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      <rect x="430" y="56" width="340" height="118" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" strokeDasharray="6 4" /> <text x="600" y="74" textAnchor="middle" fill={COLORS.red} fontSize="8" fontWeight="700">ROUTINELY MISSING FROM IT</text>
      {missing.map((t, i) => <text key={i} x="444" y={92 + i * 13} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="444" y="152" fill={COLORS.amber} fontSize="7" fontStyle="italic">materiality tiering keeps oversight proportionate — without</text>
      <text x="444" y="164" fill={COLORS.amber} fontSize="7" fontStyle="italic">it, everything is over-governed or quietly ignored</text>
      <rect x="30" y="186" width="740" height="132" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="204" textAnchor="middle" fill={COLORS.slate700} fontSize="8.2" fontWeight="700">DOCUMENTATION THAT MUST EXIST BEFORE DEPLOYMENT — WRITTEN AFTER GO-LIVE IT IS A DIFFERENT ARTEFACT, AND SUPERVISORS CAN TELL</text>
      {docs.map((d, i) => (
        <g key={i}>
          <rect x={42 + (i % 4) * 182} y={214 + Math.floor(i / 4) * 38} width="176" height="34" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
          {d.map((t, j) => <text key={j} x={130 + (i % 4) * 182} y={(d.length === 1 ? 235 : 229) + Math.floor(i / 4) * 38 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="298" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">in the EU, the AI Act’s Annex III places creditworthiness assessment and credit scoring of natural persons in the high-risk tier,</text>
      <text x="400" y="310" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and covers risk assessment and pricing in life and health insurance — carving out systems used purely to detect financial fraud</text>
      <rect x="30" y="328" width="740" height="116" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="328" width="740" height="18" rx="9" fill={COLORS.amber} /> <text x="400" y="341" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A CHANGED MODEL IS A NEW MODEL</text>
      {changes.map((t, i) => (
        <g key={i}>
          <rect x={42 + i * 104} y="356" width="100" height="24" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" /> <text x={92 + i * 104} y="371" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>
        </g>
      ))}
      <text x="400" y="396" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">each raises the same question — does the approval still stand? materiality sets the depth, and the answer is recorded</text>
      <text x="400" y="418" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontWeight="700">THE HARD CASE IS THE CHANGE YOU DID NOT INITIATE</text>
      <text x="400" y="432" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">contract for advance notice, keep a held-out evaluation set, and monitor for behaviour shifts — a silent upgrade will not announce itself</text>
      <rect x="30" y="452" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE USUAL WEAKNESS IS COMPLETENESS, NOT FORMAT</text> <text x="400" y="489" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">business-adopted AI features bypass technology procurement, and that is the fastest-growing category of all</text>
    </DiagramFrame>
  );
};
export const VendorModelRiskDiagram = () => {
  const stays = ['the model inventory entry', 'the materiality tier it is given', 'independent validation of it', 'ongoing monitoring of its outputs', 'the answer when a supervisor asks why'];
  const moved = ['the build', 'the hosting and the weights', 'some of the testing evidence'];
  const obtain = [['intended use and known', 'limitations, stated plainly'], ['development and testing', 'evidence for your validators'], ['performance by segment on', 'a population like yours'], ['advance notice of changes,', 'with a right to test first'], ['audit and information rights', 'that reach subcontractors'], ['incident notification and', 'support, with real timescales'], ['data handling — including', 'whether it may train a model'], ['an exit path, with the data', 'and artefacts to leave with']];
  const comp = ['heavier outcome monitoring', 'benchmarking', 'challenger comparison'];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="A purchased model is still your model — inventoried, tiered, validated and monitored by you.">
      <defs><marker id="arrowVMRa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Outsourcing the build does not outsource the accountability</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">supervisors across jurisdictions converge on one point: a firm remains responsible for what it outsources</text>
      <rect x="30" y="56" width="740" height="150" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="400" y1="62" x2="400" y2="188" stroke={COLORS.slate400} strokeWidth="1.6" strokeDasharray="6 4" />
      <text x="200" y="74" textAnchor="middle" fill={COLORS.blue} fontSize="8" fontWeight="700">STAYS INSIDE YOUR FIRM</text>
      <text x="590" y="74" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontWeight="700">SITS WITH THE PROVIDER</text>
      {stays.map((t, i) => (
        <g key={i}>
          <rect x="46" y={82 + i * 18} width="330" height="16" rx="4" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.2" /> <text x="211" y={93 + i * 18} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      {moved.map((t, i) => (
        <g key={i}>
          <rect x="424" y={82 + i * 18} width="330" height="16" rx="4" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" /> <text x="589" y={93 + i * 18} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      <text x="589" y="150" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">“the vendor validated it” is not a validation</text>
      <text x="589" y="162" textAnchor="middle" fill={COLORS.slate600} fontSize="7">a supervisor will not accept a redirection to a supplier</text>
      <text x="400" y="178" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontWeight="700">accountability does not cross this line, in any major regime</text>
      <text x="400" y="198" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">vendor self-certification is evidence to weigh, not validation to rely on — in the EU, DORA formalises third-party risk and oversight of critical providers</text>
      <rect x="30" y="216" width="740" height="122" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="400" y="234" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">DILIGENCE AS A LIST OF THINGS YOU MUST BE ABLE TO OBTAIN — NOT A QUESTIONNAIRE</text>
      {obtain.map((o, i) => (
        <g key={i}>
          <rect x={42 + (i % 4) * 182} y={244 + Math.floor(i / 4) * 40} width="176" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {o.map((t, j) => <text key={j} x={130 + (i % 4) * 182} y={259 + Math.floor(i / 4) * 40 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="330" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">if a provider cannot show performance on a population like yours, that absence is itself a finding to record</text>
      <rect x="30" y="348" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="366" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">WHERE OPACITY LIMITS VALIDATION — NAME THE COMPENSATING CONTROLS, DO NOT IMPLY EQUIVALENCE</text>
      {comp.map((t, i) => (
        <g key={i}>
          <rect x={42 + i * 244} y="374" width="228" height="26" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" /> <text x={156 + i * 244} y="391" textAnchor="middle" fill={COLORS.slate600} fontSize="7">{t}</text>
        </g>
      ))}
      <text x="400" y="414" textAnchor="middle" fill={COLORS.red} fontSize="7.4">prompts, evaluations, tuning and integrations do not port cleanly — an exit plan never exercised is a document, not a capability</text>
      <text x="400" y="428" textAnchor="middle" fill={COLORS.red} fontSize="7.4">and your supplier is very likely your competitors’ supplier too, so one behaviour change moves outputs across many firms at once</text>
      <rect x="30" y="444" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RESPONSIBILITY FOR AN OUTSOURCED ACTIVITY STAYS WITH THE FIRM</text> <text x="400" y="481" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">module 3 takes the shared-supplier problem to the market level, where it stops being a procurement question</text>
    </DiagramFrame>
  );
};
