import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ EVALS M4 — ev4l3 to ev4l6 ============ */

export const ScalableHumanReviewDiagram = () => {
  const fatigue = [
    { x: 46, a: 'cap batch length —', b: 'late labels are worse' },
    { x: 228, a: 'rotate gold cases through', b: 'batches to catch drift' },
    { x: 410, a: 'blind and randomise the', b: 'order — position effects' },
    { x: 592, a: 're-run an old batch —', b: 'do labels still hold?' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 504" caption="Human review scales by sampling deliberately, measuring reviewer agreement, and countering fatigue — not by trying to review everything.">
      <defs>
        <marker id="arrowSHRa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Human review never reaches zero — spend it where it discriminates</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">automate the checkable, delegate the articulable to judges — what remains is judgement, and it is the scarce input</text>

      <text x="180" y="68" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontWeight="700">EVERY OUTPUT, THREE TIERS</text>
      <rect x="60" y="76" width="240" height="40" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="180" y="92" textAnchor="middle" fill={COLORS.slate700} fontSize="8.2" fontWeight="700">automated graders</text>
      <text x="180" y="105" textAnchor="middle" fill={COLORS.slate500} fontSize="7">anything with a checkable definition</text>
      <line x1="180" y1="118" x2="180" y2="128" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSHRa)" />
      <rect x="85" y="130" width="190" height="40" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="180" y="146" textAnchor="middle" fill={COLORS.blue} fontSize="8.2" fontWeight="700">model judges</text>
      <text x="180" y="159" textAnchor="middle" fill={COLORS.slate500} fontSize="7">criteria you can write down</text>
      <line x1="180" y1="172" x2="180" y2="182" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSHRa)" />
      <rect x="110" y="184" width="140" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="180" y="202" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">human tier</text>
      <text x="180" y="215" textAnchor="middle" fill={COLORS.slate500} fontSize="7">irreducible judgement</text>
      <text x="180" y="248" textAnchor="middle" fill={COLORS.emerald} fontSize="7.4" fontWeight="700">a permanent tier — it shrinks as</text>
      <text x="180" y="260" textAnchor="middle" fill={COLORS.emerald} fontSize="7.4" fontWeight="700">rubrics improve, never to zero</text>
      <text x="180" y="280" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2" fontStyle="italic">appropriateness, tone, safety in</text>
      <text x="180" y="292" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2" fontStyle="italic">context, whether it actually helps</text>

      <rect x="350" y="58" width="420" height="116" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="350" y="58" width="420" height="20" rx="9" fill={COLORS.blue} />
      <text x="560" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SAMPLE DELIBERATELY, NOT UNIFORMLY</text>
      <text x="366" y="92" fill={COLORS.slate600} fontSize="7.6">a small random sample keeps the base rate honest</text>
      <text x="366" y="105" fill={COLORS.slate600} fontSize="7.6">stratify on top: high-stakes slices, borderline cases,</text>
      <text x="366" y="118" fill={COLORS.slate600} fontSize="7.6">grader disagreements, and verdict flips between versions</text>
      <text x="366" y="131" fill={COLORS.slate600} fontSize="7.6">uniform sampling re-confirms what automation already knew</text>
      <text x="366" y="152" fill={COLORS.blue} fontSize="7.8" fontWeight="700">record the sampling scheme beside every number it produces</text>

      <rect x="350" y="186" width="420" height="110" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="350" y="186" width="420" height="20" rx="9" fill={COLORS.amber} />
      <text x="560" y="200" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TWO REVIEWERS DISAGREE MORE THAN THEY EXPECT</text>
      <text x="366" y="220" fill={COLORS.slate600} fontSize="7.6">double-label part of every batch; track agreement as a metric</text>
      <text x="366" y="233" fill={COLORS.slate600} fontSize="7.6">low agreement is a rubric defect — swap adjectives for</text>
      <text x="366" y="246" fill={COLORS.slate600} fontSize="7.6">observable conditions, anchor scale points with examples</text>
      <text x="366" y="268" fill={COLORS.amber} fontSize="7.8" fontWeight="700">human agreement caps any judge validated against those labels</text>

      <rect x="30" y="310" width="740" height="80" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="310" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="324" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FATIGUE AND DRIFT — COUNTER THEM MECHANICALLY</text>
      {fatigue.map((f, i) => (
        <g key={i}>
          <rect x={f.x} y="340" width="172" height="36" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x={f.x + 86} y="354" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{f.a}</text>
          <text x={f.x + 86} y="366" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{f.b}</text>
        </g>
      ))}

      <rect x="30" y="402" width="740" height="26" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="419" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">REVIEW WHERE VERSIONS DIFFER — IDENTICAL-AND-FINE CASES TEACH YOU NOTHING</text>

      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PERMANENT TIER — SAMPLED, CALIBRATED, AND PROTECTED FROM FATIGUE</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the process exists to allocate expert attention, not to review everything</text>
    </DiagramFrame>
  );
};

export const ProductionTestingDiagram = () => {
  const reasons = [
    { x: 46, a: 'your case mix is not', b: 'the live traffic mix' },
    { x: 228, a: 'rubric quality is not what', b: 'users actually prefer' },
    { x: 410, a: 'production carries context', b: 'the harness never sees' },
    { x: 592, a: 'caching, retries, fallbacks', b: 'sit outside the eval path' },
  ];
  const stages = [
    { x: 46, t: '5%' },
    { x: 160, t: '25%' },
    { x: 274, t: '50%' },
    { x: 388, t: '100%' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Test live with A/B splits randomised by user, behind guardrail metrics whose stopping thresholds were agreed before launch — and read the curve, not the first days.">
      <defs>
        <marker id="arrowPTDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowPTDb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Offline blocks harm — online decides whether you were right</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your case mix is not the traffic mix and your rubric is not the user — so test live, behind guardrails agreed in advance</text>

      <rect x="30" y="58" width="740" height="66" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontWeight="700">WHY OFFLINE AND ONLINE DISAGREE — STRUCTURALLY, NOT ACCIDENTALLY</text>
      {reasons.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y="82" width="172" height="34" rx="7" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.3" />
          <text x={r.x + 86} y="95" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{r.a}</text>
          <text x={r.x + 86} y="107" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{r.b}</text>
        </g>
      ))}

      <rect x="30" y="136" width="460" height="144" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="136" width="460" height="20" rx="9" fill={COLORS.blue} />
      <text x="260" y="150" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A FAIR COMPARISON ON LIVE TRAFFIC</text>
      <rect x="46" y="166" width="96" height="30" rx="7" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="94" y="184" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">live traffic</text>
      <line x1="144" y1="181" x2="158" y2="181" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTDa)" />
      <rect x="162" y="166" width="146" height="30" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="235" y="178" textAnchor="middle" fill={COLORS.slate700} fontSize="7">randomise by</text>
      <text x="235" y="189" textAnchor="middle" fill={COLORS.slate700} fontSize="7">user or session</text>
      <line x1="310" y1="174" x2="326" y2="170" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTDa)" />
      <line x1="310" y1="188" x2="326" y2="200" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTDa)" />
      <rect x="330" y="158" width="140" height="24" rx="7" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="400" y="173" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">A — current version</text>
      <rect x="330" y="190" width="140" height="24" rx="7" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.8" />
      <text x="400" y="205" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">B — the candidate</text>
      <text x="46" y="230" fill={COLORS.slate600} fontSize="7.6">fix the primary metric and the smallest effect worth</text>
      <text x="46" y="243" fill={COLORS.slate600} fontSize="7.6">acting on before launch; segment the results after —</text>
      <text x="46" y="256" fill={COLORS.slate600} fontSize="7.6">an aggregate win can hide a segment that got worse</text>
      <text x="46" y="272" fill={COLORS.blue} fontSize="7.8" fontWeight="700">no peeking — stopping on a favourable read manufactures wins</text>

      <rect x="510" y="136" width="260" height="144" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="510" y="136" width="260" height="20" rx="9" fill={COLORS.red} />
      <text x="640" y="150" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">GUARDRAILS — AGREED STOPS</text>
      <text x="526" y="170" fill={COLORS.slate600} fontSize="7.4">name what must not degrade</text>
      <text x="526" y="182" fill={COLORS.slate600} fontSize="7.4">and set thresholds first:</text>
      <text x="526" y="196" fill={COLORS.slate700} fontSize="7.4">error rate · tail latency ·</text>
      <text x="526" y="208" fill={COLORS.slate700} fontSize="7.4">cost per success · refusal ·</text>
      <text x="526" y="220" fill={COLORS.slate700} fontSize="7.4">escalation · safety checks</text>
      <text x="526" y="244" fill={COLORS.red} fontSize="7.6" fontWeight="700">the stop is mechanical — in the</text>
      <text x="526" y="256" fill={COLORS.red} fontSize="7.6" fontWeight="700">moment there is always a story</text>

      <rect x="30" y="292" width="740" height="56" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="292" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="305" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">ROLL OUT PROGRESSIVELY — GUARDRAILS EVALUATED AT EVERY STAGE</text>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="318" width="80" height="22" rx="11" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={s.x + 40} y="332" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">{s.t}</text>
          {i < 3 && <line x1={s.x + 84} y1="329" x2={s.x + 100} y2="329" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowPTDb)" />}
        </g>
      ))}
      <text x="510" y="326" fill={COLORS.slate600} fontSize="7.2">rollback tested before you need it —</text>
      <text x="510" y="337" fill={COLORS.slate600} fontSize="7.2">an unactionable guardrail is a dashboard</text>

      <rect x="30" y="360" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="360" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="374" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TWO CURVES THAT DISTORT EARLY READINGS</text>
      <line x1="46" y1="392" x2="46" y2="440" stroke={COLORS.slate300} strokeWidth="1.2" />
      <line x1="46" y1="440" x2="360" y2="440" stroke={COLORS.slate300} strokeWidth="1.2" />
      <path d="M 52 398 C 130 400, 200 428, 352 432" fill="none" stroke={COLORS.cyan} strokeWidth="2" />
      <path d="M 52 434 C 130 432, 200 408, 352 400" fill="none" stroke={COLORS.blue} strokeWidth="2" />
      <text x="390" y="400" fill={COLORS.cyan} fontSize="7.4" fontWeight="700">novelty — inflates the first days, then decays</text>
      <text x="390" y="414" fill={COLORS.blue} fontSize="7.4" fontWeight="700">learning — depresses a real improvement until users adjust</text>
      <text x="390" y="430" fill={COLORS.slate600} fontSize="7.6">run long enough to see the curve, not the point</text>
      <text x="390" y="443" fill={COLORS.slate600} fontSize="7.6">split returning from first-time users — only one feels novelty</text>

      <rect x="30" y="460" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="480" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FIX THE METRIC AND THE STOPS BEFORE LAUNCH — THEN LET THEM DECIDE</text>
      <text x="400" y="497" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">in the moment there is always a plausible story for a bad number</text>
    </DiagramFrame>
  );
};

export const QualityCostLatencyDiagram = () => {
  const rows = [
    { y: 100, name: 'A — strongest model, long context', q: '92', c: '$0.84', l: '3.8 s', kept: true, stroke: COLORS.slate300 },
    { y: 128, name: 'B — small model + retry check', q: '89', c: '$0.19', l: '1.2 s', kept: true, stroke: COLORS.emerald },
    { y: 156, name: 'C — mid model, deep retrieval', q: '85', c: '$0.31', l: '2.9 s', kept: false, stroke: COLORS.red },
    { y: 184, name: 'D — large model, verbose prompts', q: '88', c: '$0.44', l: '4.1 s', kept: false, stroke: COLORS.red },
  ];
  const bars = [
    { y: 100, w: 182, label: 'A 91', fill: COLORS.blue },
    { y: 112, w: 180, label: 'B 90', fill: COLORS.emerald },
    { y: 142, w: 168, label: 'A 84', fill: COLORS.blue },
    { y: 154, w: 122, label: 'B 61', fill: COLORS.emerald },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="The frontier decision is made in a table — quality, cost per success and tail latency on one row, dominated options discarded, and the remaining gap priced.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Rank on quality alone and you answer a question nobody asked</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the frontier chart shows the shape — the decision happens in a table with all three numbers on one row</text>

      <rect x="30" y="58" width="460" height="188" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="460" height="20" rx="9" fill={COLORS.blue} />
      <text x="260" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">EVERY CANDIDATE — THREE NUMBERS TOGETHER</text>
      <text x="56" y="92" fill={COLORS.slate500} fontSize="6.8" fontWeight="700">CONFIGURATION</text>
      <text x="288" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontWeight="700">QUALITY</text>
      <text x="365" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontWeight="700">COST / SUCCESS</text>
      <text x="443" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontWeight="700">P95 LATENCY</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="46" y={r.y} width="428" height="24" rx="6" fill={r.kept ? COLORS.slate50 : 'none'} stroke={r.stroke} strokeWidth={r.kept ? 1.4 : 1.2} strokeDasharray={r.kept ? undefined : '4 3'} />
          <text x="56" y={r.y + 15} fill={r.kept ? COLORS.slate700 : COLORS.slate400} fontSize="7.2">{r.name}</text>
          <text x="288" y={r.y + 15} textAnchor="middle" fill={r.kept ? COLORS.slate700 : COLORS.slate400} fontSize="7.4" fontWeight="700">{r.q}</text>
          <text x="365" y={r.y + 15} textAnchor="middle" fill={r.kept ? COLORS.slate700 : COLORS.slate400} fontSize="7.4" fontWeight="700">{r.c}</text>
          <text x="443" y={r.y + 15} textAnchor="middle" fill={r.kept ? COLORS.slate700 : COLORS.slate400} fontSize="7.4" fontWeight="700">{r.l}</text>
        </g>
      ))}
      <text x="260" y="224" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">C and D are beaten on every axis by B — discarded without argument</text>
      <text x="260" y="238" textAnchor="middle" fill={COLORS.emerald} fontSize="7.4" fontWeight="700">what remains is a real choice: three quality points for 4.4× the cost</text>

      <rect x="510" y="58" width="260" height="188" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="510" y="58" width="260" height="20" rx="9" fill={COLORS.cyan} />
      <text x="640" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE GAP IS CONCENTRATED</text>
      <text x="526" y="94" fill={COLORS.slate600} fontSize="7.2" fontWeight="700">routine traffic (86% of cases)</text>
      <text x="526" y="136" fill={COLORS.slate600} fontSize="7.2" fontWeight="700">hard slice (14% of cases)</text>
      {bars.map((b, i) => (
        <g key={i}>
          <rect x="526" y={b.y} width={b.w} height="9" rx="2" fill={b.fill} opacity="0.85" />
          <text x={530 + b.w} y={b.y + 8} fill={COLORS.slate600} fontSize="6.6">{b.label}</text>
        </g>
      ))}
      <text x="526" y="182" fill={COLORS.slate600} fontSize="7.4">the advantage lives almost entirely</text>
      <text x="526" y="194" fill={COLORS.slate600} fontSize="7.4">in one hard segment of the traffic</text>
      <text x="526" y="216" fill={COLORS.cyan} fontSize="7.4" fontWeight="700">an argument for routing — not for</text>
      <text x="526" y="228" fill={COLORS.cyan} fontSize="7.4" fontWeight="700">one model everywhere</text>

      <rect x="30" y="260" width="740" height="56" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="260" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="273" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">IF YOU ROUTE, EVALUATE END TO END AND WATCH THE ESCALATION RATE</text>
      <text x="400" y="294" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9">a router that misclassifies difficulty answers worse than the small model and costs more than the large one — it paid for both</text>
      <text x="400" y="308" textAnchor="middle" fill={COLORS.slate500} fontSize="7.9" fontStyle="italic">traffic drift changes the economics silently — escalation rate is a metric in its own right</text>

      <rect x="30" y="328" width="740" height="72" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="328" width="740" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="342" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PRICE THE GAP SO SOMEONE CAN DECIDE</text>
      <text x="400" y="362" textAnchor="middle" fill={COLORS.slate600} fontSize="8">compare fairly — same suite, prompts re-tuned per model — then convert: what the gap costs per month at real volume,</text>
      <text x="400" y="376" textAnchor="middle" fill={COLORS.slate600} fontSize="8">against what the failures it prevents would have cost</text>
      <text x="400" y="393" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">an unpriced difference is debated, never decided</text>

      <rect x="30" y="412" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="432" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DISCARD THE DOMINATED, PRICE WHAT REMAINS, CHOOSE ON PURPOSE</text>
      <text x="400" y="449" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">quality flattens before cost — the strongest option rarely wins on value</text>
    </DiagramFrame>
  );
};

export const EvalTeamHabitDiagram = () => {
  const cards = [
    {
      x: 40, y: 58, c: COLORS.blue, h: '1 · SOMEONE OWNS THE CASE SET',
      lines: ['cases come from everyone — support, experts,', 'whoever handled the last incident', 'the standard for a good case comes from one', 'accountable person, on a scheduled review cadence'],
      bold: 'the authority to delete cases is the real test',
    },
    {
      x: 420, y: 58, c: COLORS.cyan, h: '2 · DEFINED UPDATE TRIGGERS',
      lines: ['incidents, complaints that reveal a class, new', 'features, and drift in who asks what', 'incident cases are free — a real user already', 'found the failure, and it certainly matters'],
      bold: 'no case within the week usually means never',
    },
    {
      x: 420, y: 196, c: COLORS.red, h: '3 · WRITTEN RELEASE GATES',
      lines: ['hard gates: safety, schema validity, floors on', 'the critical slice, every past-incident case', 'report-only inside the noise band — gates that', 'cry wolf get switched off within a month'],
      bold: 'write the override path down before it is needed',
    },
    {
      x: 40, y: 196, c: COLORS.amber, h: '4 · IS IT STILL INFORMING ANYTHING?',
      lines: ['the dangerous state: green for months while no', 'decision has turned on it', 'symptoms: re-run until pass, cases nobody can', 'explain, headline numbers quoted unread'],
      bold: 'the real metric: did a decision change because of it?',
    },
  ];
  const loop = [
    { x: 46, w: 110, t: 'production incident', strong: false },
    { x: 172, w: 70, t: 'the trace', strong: false },
    { x: 258, w: 84, t: 'a draft case', strong: false },
    { x: 358, w: 118, t: 'fails before the fix', strong: false },
    { x: 492, w: 96, t: 'passes after it', strong: false },
    { x: 604, w: 110, t: 'into the suite', strong: true },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="Evaluation becomes a team habit when the case set has an owner, defined triggers update it, written gates block releases, and someone checks it still changes decisions.">
      <defs>
        <marker id="arrowETHa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowETHb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">An eval suite is a habit — owned, triggered, gated, consulted</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">it stays alive the way any shared practice does: someone owns it, defined events update it, releases depend on it</text>

      {cards.map((k, i) => (
        <g key={i}>
          <rect x={k.x} y={k.y} width="340" height="116" rx="9" fill={COLORS.white} stroke={k.c} strokeWidth="2" />
          <rect x={k.x} y={k.y} width="340" height="18" rx="9" fill={k.c} />
          <text x={k.x + 170} y={k.y + 13} textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">{k.h}</text>
          {k.lines.map((t, j) => (
            <text key={j} x={k.x + 14} y={k.y + 32 + j * 12} fill={COLORS.slate600} fontSize="7.3">{t}</text>
          ))}
          <text x={k.x + 14} y={k.y + 92} fill={k.c} fontSize="7.5" fontWeight="700">{k.bold}</text>
        </g>
      ))}
      <line x1="384" y1="116" x2="416" y2="116" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowETHa)" />
      <line x1="590" y1="178" x2="590" y2="192" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowETHa)" />
      <line x1="416" y1="254" x2="384" y2="254" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowETHa)" />
      <line x1="210" y1="192" x2="210" y2="178" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowETHa)" />

      <rect x="30" y="326" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="326" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="339" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">THE SHORTEST LOOP — FROM INCIDENT TO PERMANENT CASE</text>
      {loop.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="354" width={c.w} height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth={c.strong ? 2 : 1.3} />
          <text x={c.x + c.w / 2} y="369" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontWeight={c.strong ? 700 : 400}>{c.t}</text>
          {i < 5 && <line x1={c.x + c.w + 3} y1="366" x2={loop[i + 1].x - 3} y2="366" stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowETHb)" />}
        </g>
      ))}

      <rect x="30" y="402" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="422" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">OWNED, TRIGGERED, GATED — AND MEASURED BY THE DECISIONS IT CHANGES</text>
      <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a green suite no decision depends on is documentation, not a control</text>
    </DiagramFrame>
  );
};
