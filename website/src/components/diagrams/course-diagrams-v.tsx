import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULE 5: REVIEW, TRUST & LIMITS ============ */

export const RunPresentationDiagram = () => {
  const minis = [
    { x: 292, y: 116, c: COLORS.blue, h: 'THE DIFF', l: ['what will actually change,', 'shown as a delta'] },
    { x: 524, y: 116, c: COLORS.cyan, h: 'EXACT PARAMETERS', l: ['of the pending action, not', 'a summary of them'] },
    { x: 292, y: 174, c: COLORS.blue, h: 'CITED SOURCES', l: ['the passages relied on,', 'with paths back to them'] },
    { x: 524, y: 174, c: COLORS.emerald, h: 'VERIFICATION RESULTS', l: ['what was checked and', 'what it returned'] },
  ];
  const narrative = ['reads well; may be accurate', 'or a plausible reconstruction', '— the text alone cannot', 'tell you which'];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="A reviewer judges diffs, parameters, sources and verification results — the generated explanation sits beside that record and never replaces it">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Show the evidence beside the story, never the story alone</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the agent's explanation is generated text about a process it has no privileged access to — fluent, and possibly a reconstruction</text>

      <rect x="30" y="58" width="740" height="250" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE REVIEW SURFACE</text>

      <rect x="44" y="86" width="220" height="148" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="44" y="86" width="220" height="20" rx="9" fill={COLORS.amber} />
      <text x="154" y="100" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">THE NARRATIVE — AN AID</text>
      {narrative.map((t, i) => (
        <text key={i} x="56" y={124 + i * 13} fill={COLORS.slate600} fontSize="7.9">{t}</text>
      ))}
      <text x="56" y="192" fill={COLORS.amber} fontSize="7.9" fontStyle="italic">persuasive out of proportion</text>
      <text x="56" y="205" fill={COLORS.amber} fontSize="7.9" fontStyle="italic">to its evidential value</text>

      <rect x="280" y="86" width="476" height="148" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="280" y="86" width="476" height="20" rx="9" fill={COLORS.emerald} />
      <text x="518" y="100" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">THE ARTEFACTS — THE BASIS FOR THE DECISION</text>
      {minis.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={m.y} width="222" height="52" rx="7" fill={COLORS.slate50} stroke={m.c} strokeWidth="1.5" />
          <text x={m.x + 10} y={m.y + 16} fill={m.c} fontSize="7.6" fontWeight="700">{m.h}</text>
          <text x={m.x + 10} y={m.y + 30} fill={COLORS.slate600} fontSize="7.3">{m.l[0]}</text>
          <text x={m.x + 10} y={m.y + 42} fill={COLORS.slate600} fontSize="7.3">{m.l[1]}</text>
        </g>
      ))}

      <text x="44" y="264" fill={COLORS.slate700} fontSize="8" fontWeight="700">ORIGIN, TAGGED —</text>
      <rect x="150" y="250" width="170" height="22" rx="11" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="235" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">from your own records</text>
      <rect x="332" y="250" width="230" height="22" rx="11" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="447" y="264" textAnchor="middle" fill={COLORS.red} fontSize="7.4">from an inbound email — EXTERNAL</text>
      <rect x="574" y="250" width="182" height="22" rx="11" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="665" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">from stored memory — dated</text>
      <text x="400" y="292" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">an action derived from an inbound email is a different proposition from one derived from your records</text>

      <rect x="30" y="320" width="740" height="30" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="339" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">WHERE THE SUMMARY AND THE TRACE DISAGREE, THE TRACE IS THE FACT</text>

      <rect x="30" y="362" width="740" height="60" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="382" textAnchor="middle" fill={COLORS.blue} fontSize="8.6" fontWeight="700">FOR LARGE CHANGES, SHOW THE SHAPE BEFORE THE DETAIL — OUTLIERS FIRST</text>
      <text x="400" y="398" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">how many records, of what type, in which systems — with the outliers surfaced first</text>
      <text x="400" y="411" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">people spot the thing that does not belong far better than they confirm a hundred that do</text>

      <rect x="30" y="434" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="454" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE EXPLANATION IS SHOWN BESIDE THE RECORD, NEVER IN PLACE OF IT</text>
      <text x="400" y="471" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">a fluent rationale convinces through prose quality — give the reviewer things they can check against their own knowledge</text>
    </DiagramFrame>
  );
};

export const TrustCurveDiagram = () => {
  const treads = [
    { cx: 122, y: 272, l: ['1 · propose,', 'human executes'] },
    { cx: 250, y: 212, l: ['2 · act, approval on', 'consequential actions'] },
    { cx: 380, y: 152, l: ['3 · approve a subset,', 'sample the rest'] },
    { cx: 502, y: 92, l: ['4 · autonomous in limits,', 'review by exception'] },
  ];
  const gates = [[185, 242], [315, 182], [445, 122]];
  const evidence = [
    ['approval rate on the gate,', 'and whether it was read'],
    ['disagreement rate in', 'sampled review of the rest'],
    ['failure classes whose cost', 'cannot be absorbed'],
    ['enough reviewed volume to', 'support any conclusion'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 488" caption="Autonomy starts narrow and widens per action type as approval rates, sampled disagreement and failure classes justify each stage — with named conditions that narrow it again">
      <defs>
        <marker id="arrowTCDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowTCDb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The trust curve — autonomy is widened, not chosen</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the right level is not knowable in advance — start narrow, and let each stage produce the evidence for the next</text>

      <text x="30" y="62" fill={COLORS.slate500} fontSize="8">autonomy</text>
      <line x1="60" y1="300" x2="60" y2="66" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTCDa)" />
      <line x1="60" y1="300" x2="565" y2="300" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTCDa)" />
      <text x="310" y="318" textAnchor="middle" fill={COLORS.slate500} fontSize="8">accumulated evidence →</text>

      <path d="M 60 272 H 185 V 212 H 315 V 152 H 445 V 92 H 560" fill="none" stroke={COLORS.blue} strokeWidth="2.5" />
      {treads.map((t, i) => (
        <g key={i}>
          <text x={t.cx} y={t.y - 20} textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{t.l[0]}</text>
          <text x={t.cx} y={t.y - 9} textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{t.l[1]}</text>
        </g>
      ))}
      {gates.map((g, i) => (
        <g key={i}>
          <circle cx={g[0]} cy={g[1]} r="5" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <text x={g[0]} y={g[1] + 2.5} textAnchor="middle" fill={COLORS.emerald} fontSize="7">✓</text>
        </g>
      ))}
      <line x1="535" y1="98" x2="535" y2="142" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowTCDb)" />
      <text x="530" y="158" textAnchor="middle" fill={COLORS.red} fontSize="7">narrowing</text>
      <text x="530" y="168" textAnchor="middle" fill={COLORS.red} fontSize="7">is routine</text>

      <rect x="580" y="66" width="190" height="244" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="580" y="66" width="190" height="22" rx="10" fill={COLORS.emerald} />
      <text x="675" y="81" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">EVIDENCE TO WIDEN</text>
      {evidence.map((e, i) => (
        <g key={i}>
          <circle cx="594" cy={101 + i * 30} r="2" fill={COLORS.emerald} />
          <text x="602" y={104 + i * 30} fill={COLORS.slate600} fontSize="7.6">{e[0]}</text>
          <text x="602" y={116 + i * 30} fill={COLORS.slate600} fontSize="7.6">{e[1]}</text>
        </g>
      ))}
      <text x="594" y="230" fill={COLORS.red} fontSize="7.8" fontWeight="700">AND A REVERSE GEAR</text>
      <text x="594" y="243" fill={COLORS.slate600} fontSize="7.6">name what narrows autonomy</text>
      <text x="594" y="255" fill={COLORS.slate600} fontSize="7.6">again — a control that can</text>
      <text x="594" y="267" fill={COLORS.slate600} fontSize="7.6">only loosen is not a control</text>

      <text x="310" y="336" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">each stage generates the evidence that justifies the next — that is why they run in order</text>

      <rect x="30" y="348" width="360" height="62" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="44" y="368" fill={COLORS.blue} fontSize="8.4" fontWeight="700">WIDEN PER ACTION TYPE, NOT PER AGENT</text>
      <text x="44" y="384" fill={COLORS.slate600} fontSize="8.2">fully trusted to draft, not at all trusted to</text>
      <text x="44" y="397" fill={COLORS.slate600} fontSize="8.2">send — each action type sits at its own stage</text>
      <rect x="410" y="348" width="360" height="62" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="424" y="368" fill={COLORS.amber} fontSize="8.4" fontWeight="700">WRITE THE CRITERIA BEFORE YOU ARRIVE</text>
      <text x="424" y="384" fill={COLORS.slate600} fontSize="8.2">decided in advance is a different conversation</text>
      <text x="424" y="397" fill={COLORS.slate600} fontSize="8.2">from one held under delivery pressure</text>

      <rect x="30" y="422" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="442" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AUTONOMY IS WIDENED ON EVIDENCE, AND IT CAN GO BACKWARDS</text>
      <text x="400" y="459" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">publish real performance to reviewers — over-trust builds silently through good runs; under-trust follows one visible failure</text>
    </DiagramFrame>
  );
};

export const OversightAtVolumeDiagram = () => {
  const row1 = [
    { x: 44, w: 250, t: 'small random stratum — keeps the base rate honest' },
    { x: 306, w: 146, t: 'high value or reach' },
    { x: 464, w: 146, t: 'failed checks or retries' },
    { x: 622, w: 134, t: 'tail step counts' },
  ];
  const row2 = [
    { x: 44, w: 180, t: 'low stated confidence' },
    { x: 236, w: 220, t: 'recently widened action types' },
    { x: 468, w: 230, t: 'material that arrived from outside' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="At volume humans can sample, handle exceptions and set policy — assurance on every action has to come from structural controls, and oversight quality itself is measured">
      <defs>
        <marker id="arrowOAVa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowOAVb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">At thousands of actions a day, attention does not scale</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">no arrangement of people meaningfully reviews every action — put humans where they work and make per-action control structural</text>

      <rect x="30" y="88" width="170" height="70" rx="10" fill={COLORS.slate900} />
      <text x="115" y="118" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">THOUSANDS OF</text>
      <text x="115" y="134" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">ACTIONS A DAY</text>
      <line x1="200" y1="108" x2="244" y2="96" stroke={COLORS.emerald} strokeWidth="3" markerEnd="url(#arrowOAVa)" />
      <text x="214" y="90" fill={COLORS.emerald} fontSize="7">all of it</text>
      <line x1="200" y1="140" x2="244" y2="180" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowOAVb)" />
      <text x="208" y="166" fill={COLORS.blue} fontSize="7">a fraction</text>

      <rect x="250" y="58" width="520" height="74" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="266" y="80" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">EVERY ACTION — CONTROL IS STRUCTURAL</text>
      <text x="266" y="96" fill={COLORS.slate600} fontSize="8.2">deterministic policy checks · credential and scope limits · staged execution with a delay window</text>
      <text x="266" y="112" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">these scale with volume</text>

      <rect x="250" y="146" width="520" height="74" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="266" y="168" fill={COLORS.blue} fontSize="8.8" fontWeight="700">A REVIEWED FRACTION — WHERE PEOPLE WORK</text>
      <text x="266" y="184" fill={COLORS.slate600} fontSize="8.2">sample review · exception handling · incident investigation · policy · autonomy decisions</text>
      <text x="266" y="200" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">judgement, not assurance on every action</text>

      <rect x="30" y="234" width="740" height="118" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="234" width="740" height="22" rx="10" fill={COLORS.cyan} />
      <text x="400" y="249" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">SAMPLING THAT DISCRIMINATES — A SMALL RANDOM STRATUM, THEN WHERE THE INFORMATION IS</text>
      {row1.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="266" width={p.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
          <text x={p.x + p.w / 2} y="281" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
        </g>
      ))}
      {row2.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="298" width={p.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
          <text x={p.x + p.w / 2} y="313" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
        </g>
      ))}
      <text x="400" y="340" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">rotate the emphasis, and close the loop — every finding becomes a stored case or a change, or review has no output</text>

      <rect x="30" y="366" width="740" height="76" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="366" width="740" height="20" rx="10" fill={COLORS.red} />
      <text x="400" y="380" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">OVERSIGHT THEATRE — THE SYMPTOMS ARE MEASURABLE</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">near-total approval in seconds · a sample with no finding this quarter · an escalation count of zero</text>
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">a policy naming controls the runtime does not have · an override path used routinely with no record</text>
      <text x="400" y="434" textAnchor="middle" fill={COLORS.red} fontSize="8" fontWeight="700">a gate approved essentially always is unnecessary or broken — the one bad option is leaving it unexamined</text>

      <rect x="30" y="454" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="473" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PEOPLE SAMPLE, DECIDE AND SET POLICY — STRUCTURE CONTROLS EVERY ACTION</text>
      <text x="400" y="490" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a design implying per-action human assurance at volume describes an aspiration — instrument oversight like everything else</text>
    </DiagramFrame>
  );
};

export const ForbiddenActionsDiagram = () => {
  const rows = [
    { y: 140, e: 'never send external communications without approval', c: COLORS.blue, f: 'a policy check on parameters, before dispatch' },
    { y: 182, e: 'never read or write records outside this customer\'s scope', c: COLORS.emerald, f: 'credential scope — the token cannot reach them' },
    { y: 224, e: 'never move more than £500 without a person', c: COLORS.blue, f: 'a validation rule — a hard threshold on the amount' },
    { y: 266, e: 'never write to the billing system at all', c: COLORS.emerald, f: 'the write tool is simply absent from the toolset' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Every prohibition maps to a runtime enforcement point — and where none exists, the honest answer is a recorded gap with detection and a defined response">
      <defs>
        <marker id="arrowFBAa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Write down what it may never do — then wire it in</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a prohibition in the prompt is a preference expressed to a probabilistic system; the same rule in the runtime is a property</text>

      <rect x="30" y="58" width="360" height="50" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="44" y="78" fill={COLORS.red} fontSize="8.6" fontWeight="700">IN THE PROMPT — A PREFERENCE</text>
      <text x="44" y="94" fill={COLORS.slate600} fontSize="8.2">usually followed, guaranteed never</text>
      <rect x="410" y="58" width="360" height="50" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="424" y="78" fill={COLORS.emerald} fontSize="8.6" fontWeight="700">IN THE RUNTIME — A PROPERTY</text>
      <text x="424" y="94" fill={COLORS.slate600} fontSize="8.2">checked before dispatch, every single time</text>

      <text x="195" y="130" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE WRITTEN LIST — SPECIFIC ENOUGH TO IMPLEMENT</text>
      <text x="605" y="130" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE ENFORCEMENT POINT IN THE RUNTIME</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="30" y={r.y} width="330" height="30" rx="7" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="1.6" />
          <text x="195" y={r.y + 19} textAnchor="middle" fill={COLORS.slate700} fontSize="7.7">{r.e}</text>
          <line x1="364" y1={r.y + 15} x2="436" y2={r.y + 15} stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowFBAa)" />
          <rect x="440" y={r.y} width="330" height="30" rx="7" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          <text x="605" y={r.y + 19} textAnchor="middle" fill={r.c} fontSize="7.7">{r.f}</text>
        </g>
      ))}
      <rect x="30" y="308" width="330" height="36" rx="7" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="1.6" />
      <text x="195" y="330" textAnchor="middle" fill={COLORS.slate700} fontSize="7.7">never act on instructions found in retrieved content</text>
      <line x1="364" y1="326" x2="436" y2="326" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowFBAa)" />
      <rect x="440" y="308" width="330" height="36" rx="7" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.8" />
      <text x="605" y="324" textAnchor="middle" fill={COLORS.amber} fontSize="7.7" fontWeight="700">no structural point exists — an honest detection,</text>
      <text x="605" y="337" textAnchor="middle" fill={COLORS.amber} fontSize="7.7" fontWeight="700">with a defined response, written down</text>
      <text x="400" y="364" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">the entries you cannot enforce are exactly the ones worth knowing about — record the gap instead of assuming it away</text>

      <rect x="30" y="378" width="740" height="60" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="398" textAnchor="middle" fill={COLORS.blue} fontSize="8.6" fontWeight="700">AN OWNER, A CADENCE, A CHANGE PROCESS — OR IT DESCRIBES A SYSTEM NOBODY RUNS</text>
      <text x="400" y="414" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">review on toolset changes, wider autonomy, new data sources and after incidents — a new tool asks what must be forbidden about it</text>
      <text x="400" y="428" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">test the important entries in the pipeline: attempt the prohibited action, assert it is refused</text>

      <rect x="30" y="450" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="469" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN UNVERIFIED PROHIBITION IS A CLAIM — AND CLAIMS ARE WHAT INCIDENT REVIEWS ARE MADE OF</text>
      <text x="400" y="486" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">drafting the list reliably exposes assumptions the team did not know it disagreed on — write it before an incident does</text>
    </DiagramFrame>
  );
};
