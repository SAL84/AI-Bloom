import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — closing the loop between production and evals
 * ------------------------------------------------------------------ */

export const ObservabilityLoopDiagram = () => {
  const nodes = [
    { x: 300, y: 60, n: '1', c: COLORS.blue, t: 'Traced production runs', s: 'inputs, tool calls, outputs' },
    { x: 560, y: 144, n: '2', c: COLORS.amber, t: 'Failures surfaced', s: 'clustered and prioritised' },
    { x: 560, y: 298, n: '3', c: COLORS.cyan, t: 'Added to the eval set', s: 'the representative ones' },
    { x: 300, y: 382, n: '4', c: COLORS.emerald, t: 'Fix the cause', s: 'prompt, retrieval or guard' },
    { x: 40, y: 298, n: '5', c: COLORS.emerald, t: 'Regression run', s: 'the whole set, not the fix' },
    { x: 40, y: 144, n: '6', c: COLORS.blue, t: 'Redeploy', s: 'then watch the traces again' }
  ];
  const arrows = [
    'M 506 104 L 606 138',
    'M 660 212 L 660 290',
    'M 606 368 L 506 402',
    'M 294 402 L 194 368',
    'M 140 292 L 140 214',
    'M 194 138 L 294 104'
  ];
  const centre = [
    'Real users generate failure modes',
    'that nobody on the team thought',
    'to write down. Every one you find',
    'is a test case you did not have',
    'to invent — take it and keep it.'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="An eval set that never grows is a set that stops catching things — production is where the next test case comes from">
      <defs>
        <marker id="arrowOBL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Closing the loop between what ships and what you test</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the loop only counts as closed when real failures end up back in the suite</text>

      {arrows.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowOBL)" />
      ))}

      <rect x="272" y="176" width="256" height="148" rx="12" fill={COLORS.slate900} />
      <text x="400" y="202" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">PRODUCTION IS THE BEST</text>
      <text x="400" y="218" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">SOURCE OF EVAL CASES</text>
      <line x1="292" y1="230" x2="508" y2="230" stroke={COLORS.slate700} strokeWidth="1" />
      {centre.map((t, i) => (
        <text key={i} x="400" y={250 + i * 14} textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">{t}</text>
      ))}

      {nodes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width="200" height="64" rx="10" fill={COLORS.white} stroke={b.c} strokeWidth="2" />
          <circle cx={b.x + 22} cy={b.y + 32} r="12" fill={b.c} />
          <text x={b.x + 22} y={b.y + 36} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{b.n}</text>
          <text x={b.x + 42} y={b.y + 28} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{b.t}</text>
          <text x={b.x + 42} y={b.y + 46} fill={COLORS.slate600} fontSize="8.6">{b.s}</text>
        </g>
      ))}
      <text x="400" y="478" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Without the trace you never see the failure; without the eval case you fix it once and lose it</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * HEALTHCARE — conceptual only, no figures, no clinical guidance
 * ------------------------------------------------------------------ */

export const SensitivitySpecificityDiagram = () => {
  const curveA = 'M 130 246 C 218 246, 224 112, 290 112 C 356 112, 362 246, 450 246 Z';
  const curveB = 'M 320 246 C 408 246, 414 112, 480 112 C 546 112, 552 246, 640 246 Z';
  const cost = [
    'A missed case that was treatable and serious pulls',
    'the threshold one way. A false alarm that leads to',
    'something invasive and frightening pulls it back.'
  ];
  const base = [
    'The same test behaves differently in a group where',
    'the condition is common than in one where it is',
    'rare — which is why screening is not diagnosis.'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 488" caption="Moving the line does not make a test better — it decides which of the two mistakes you would rather make">
      <defs>
        <marker id="arrowSSDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
        <marker id="arrowSSDb" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 10 0 L 0 5 L 10 10 z" fill={COLORS.amber} />
        </marker>
        <clipPath id="clipSSDleft">
          <rect x="40" y="100" width="345" height="152" />
        </clipPath>
        <clipPath id="clipSSDright">
          <rect x="385" y="100" width="375" height="152" />
        </clipPath>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The trade you are actually making when you set a threshold</text>
      <text x="400" y="38" textAnchor="middle" fill={COLORS.slate500} fontSize="10">shape only — no numbers, because the numbers depend entirely on the setting</text>

      <rect x="30" y="48" width="740" height="224" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="385" y="64" textAnchor="middle" fill={COLORS.amber} fontSize="9" fontWeight="700">OPERATING THRESHOLD</text>
      <line x1="320" y1="74" x2="450" y2="74" stroke={COLORS.amber} strokeWidth="2" markerEnd="url(#arrowSSDa)" markerStart="url(#arrowSSDb)" />

      <path d={curveA} fill={COLORS.slate200} stroke={COLORS.slate400} strokeWidth="2" />
      <path d={curveB} fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" opacity="0.85" />
      <path d={curveA} fill={COLORS.amber} opacity="0.5" clipPath="url(#clipSSDright)" />
      <path d={curveB} fill={COLORS.red} opacity="0.45" clipPath="url(#clipSSDleft)" />

      <line x1="385" y1="82" x2="385" y2="252" stroke={COLORS.amber} strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="230" y="190" textAnchor="middle" fill={COLORS.slate600} fontSize="9.6" fontWeight="700">people without</text>
      <text x="230" y="204" textAnchor="middle" fill={COLORS.slate600} fontSize="9.6" fontWeight="700">the condition</text>
      <text x="545" y="190" textAnchor="middle" fill={COLORS.blue} fontSize="9.6" fontWeight="700">people with</text>
      <text x="545" y="204" textAnchor="middle" fill={COLORS.blue} fontSize="9.6" fontWeight="700">the condition</text>

      <line x1="100" y1="246" x2="670" y2="246" stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="100" y="264" fill={COLORS.slate500} fontSize="8.6">test reads more negative</text>
      <text x="670" y="264" textAnchor="end" fill={COLORS.slate500} fontSize="8.6">test reads more positive</text>

      <path d="M 372 238 L 250 282" fill="none" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 398 238 L 550 282" fill="none" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="4 3" />

      <rect x="30" y="284" width="360" height="62" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="284" width="360" height="24" rx="10" fill={COLORS.red} />
      <text x="210" y="301" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">MISSED CASES</text>
      <text x="210" y="324" textAnchor="middle" fill={COLORS.slate700} fontSize="9.4">The condition is present, the test does not flag it,</text>
      <text x="210" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="9.4">and it may only be found later, if at all.</text>

      <rect x="410" y="284" width="360" height="62" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="284" width="360" height="24" rx="10" fill={COLORS.amber} />
      <text x="590" y="301" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">FALSE ALARMS</text>
      <text x="590" y="324" textAnchor="middle" fill={COLORS.slate700} fontSize="9.4">Flagged, then found not to have it after all —</text>
      <text x="590" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="9.4">worry, cost, and a follow-up that was not needed.</text>

      <rect x="30" y="358" width="360" height="96" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="358" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="210" y="376" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT EACH MISTAKE COSTS</text>
      {cost.map((t, i) => (
        <text key={i} x="46" y={402 + i * 16} fill={COLORS.slate700} fontSize="9.4">{t}</text>
      ))}

      <rect x="410" y="358" width="360" height="96" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="358" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="590" y="376" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HOW COMMON IT IS IN THIS GROUP</text>
      {base.map((t, i) => (
        <text key={i} x="426" y={402 + i * 16} fill={COLORS.slate700} fontSize="9.4">{t}</text>
      ))}
      <text x="400" y="476" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">There is no setting that is simply better — only one chosen for a stated purpose and population</text>
    </DiagramFrame>
  );
};

export const LocalValidationDiagram = () => {
  const diffs = [
    { t: 'Population mix', l: ['Different ages, conditions', 'and referral routes from the', 'group it was validated on.'] },
    { t: 'Equipment and inputs', l: ['Different scanners, settings,', 'assays and record systems', 'produce different inputs.'] },
    { t: 'Workflow', l: ['Where it sits in the pathway', 'changes who sees the output', 'and what happens next.'] },
    { t: 'Prevalence', l: ['How common the condition is', 'here changes what a flag is', 'worth to whoever reads it.'] }
  ];
  const checks = [
    { t: 'A local sample', s: 'representative of who you see' },
    { t: 'A pre-agreed bar', s: 'set before you look at results' },
    { t: 'A named owner', s: 'who can say no to go-live' },
    { t: 'A written record', s: 'of what was checked and how' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Published performance travels with the setting it was measured in — not with the model file">
      <defs>
        <marker id="arrowLVD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why a model has to be revalidated where it will be used</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">four things change on the way in, and each of them moves the behaviour</text>

      <rect x="250" y="52" width="300" height="44" rx="10" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">A model validated somewhere else</text>
      <text x="400" y="89" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">strong published results, on their data</text>
      <line x1="400" y1="98" x2="400" y2="108" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLVD)" />

      {diffs.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="112" width="176" height="104" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
          <rect x={30 + i * 188} y="112" width="176" height="26" rx="10" fill={COLORS.amber} />
          <text x={118 + i * 188} y="130" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{d.t}</text>
          {d.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={156 + j * 15} fill={COLORS.slate700} fontSize="8.6">{t}</text>
          ))}
          <line x1={118 + i * 188} y1="218" x2={118 + i * 188} y2="232" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLVD)" />
        </g>
      ))}

      <rect x="30" y="240" width="740" height="92" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="240" width="740" height="26" rx="10" fill={COLORS.blue} />
      <text x="400" y="258" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">LOCAL VALIDATION — ON YOUR OWN DATA, IN YOUR OWN SETTING</text>
      {checks.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="274" width="170" height="48" rx="8" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={127 + i * 182} y="293" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{c.t}</text>
          <text x={127 + i * 182} y="308" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">{c.s}</text>
        </g>
      ))}

      <path d="M 400 334 L 400 344 M 270 344 L 530 344" fill="none" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="270" y1="344" x2="270" y2="354" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLVD)" />
      <line x1="530" y1="344" x2="530" y2="354" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLVD)" />

      <rect x="150" y="360" width="240" height="48" rx="10" fill={COLORS.emerald} />
      <text x="270" y="382" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">APPROVED FOR LOCAL USE</text>
      <text x="270" y="398" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.95">with the scope written down</text>

      <rect x="410" y="360" width="240" height="48" rx="10" fill={COLORS.red} />
      <text x="530" y="382" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">HELD BACK OR NARROWED</text>
      <text x="530" y="398" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.95">until it works here too</text>

      <line x1="270" y1="410" x2="270" y2="418" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLVD)" />
      <rect x="30" y="420" width="740" height="34" rx="8" fill={COLORS.slate900} />
      <text x="400" y="442" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Then it keeps being checked — populations drift, equipment changes, workflows quietly move</text>
      <text x="400" y="472" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Performance is a property of a model in a place, not a property of the model</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * LEGAL — process, defensibility and review protocols
 * ------------------------------------------------------------------ */

export const TARPrecedentDiagram = () => {
  const stages = [
    {
      c: COLORS.blue, t: 'Seed set',
      l: ['A sample of documents is', 'read and coded by people', 'who know the matter and', 'the issues in dispute.'],
      n: 'Human judgement, recorded'
    },
    {
      c: COLORS.blue, t: 'Classifier trained',
      l: ['A classifier learns from', 'those coded decisions —', 'what relevant means in', 'this matter, not in general.'],
      n: 'It learns your standard'
    },
    {
      c: COLORS.cyan, t: 'Corpus ranked',
      l: ['Every remaining document', 'is scored and ordered,', 'most likely relevant', 'first, least likely last.'],
      n: 'Effort goes where it pays'
    },
    {
      c: COLORS.emerald, t: 'Sampling and validation',
      l: ['Independent samples from', 'across the ranking give', 'an estimate of what the', 'process would leave out.'],
      n: 'Measured, not assumed'
    }
  ];
  const yes = [
    'The protocol was written down before it was run',
    'Who did what, and when, is on the record',
    'Recall was measured rather than asserted',
    'The sampling was independent of the ranking',
    'The method can be explained to the other side'
  ];
  const no = [
    'The tool is sophisticated',
    'The vendor says it performs well',
    'It surfaced a great many documents',
    'Nobody checked what it left behind',
    'The method was never written down anywhere'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Assisted review survives challenge on the strength of its documentation and its sampling, not on the sophistication of the tool">
      <defs>
        <marker id="arrowTAR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Technology-assisted review, and where its defensibility comes from</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">humans set the standard, the classifier scales it, and sampling shows what it cost</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="54" width="170" height="140" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 190} y="54" width="170" height="28" rx="10" fill={s.c} />
          <text x={115 + i * 190} y="73" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x={42 + i * 190} y={100 + j * 14} fill={COLORS.slate700} fontSize="8.7">{t}</text>
          ))}
          <line x1={42 + i * 190} y1="156" x2={188 + i * 190} y2="156" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={115 + i * 190} y="174" textAnchor="middle" fill={s.c} fontSize="8.2" fontWeight="700">{s.n}</text>
          {i < 3 && <line x1={202 + i * 190} y1="124" x2={216 + i * 190} y2="124" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowTAR)" />}
        </g>
      ))}

      <rect x="30" y="210" width="360" height="140" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="210" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="210" y="228" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT MAKES IT DEFENSIBLE</text>
      {yes.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={249 + i * 20} r="3" fill={COLORS.emerald} />
          <text x="60" y={253 + i * 20} fill={COLORS.slate700} fontSize="9.4">{t}</text>
        </g>
      ))}

      <rect x="410" y="210" width="360" height="140" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="210" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="228" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT DOES NOT MAKE IT DEFENSIBLE</text>
      {no.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={249 + i * 20} r="3" fill={COLORS.red} />
          <text x="440" y={253 + i * 20} fill={COLORS.slate700} fontSize="9.4">{t}</text>
        </g>
      ))}

      <rect x="30" y="364" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Defensibility is a property of the process, not of the software</text>
      <text x="400" y="401" textAnchor="middle" fill={COLORS.slate300} fontSize="9.8">What can be shown, sampled and explained is what survives a challenge</text>
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The question put to the method is never was it clever — it is can you show what it missed</text>
    </DiagramFrame>
  );
};

export const HumanReviewProtocolDiagram = () => {
  const parts = [
    {
      tag: 'WHAT', t: 'What must be checked',
      l: ['A named list of checks,', 'each one a question with', 'a yes or no answer — not', 'a general look over it.'],
      n: 'Vague checks get skipped'
    },
    {
      tag: 'WHO', t: 'Who checks it',
      l: ['A role, and a person in it,', 'with the standing to say no', 'and the time budgeted to', 'actually do the reading.'],
      n: 'Everyone means no one'
    },
    {
      tag: 'EVIDENCE', t: 'What gets recorded',
      l: ['What was checked, by whom,', 'what was found, and what', 'changed as a result —', 'stored with the output.'],
      n: 'Unrecorded is unreviewed'
    },
    {
      tag: 'SIGN-OFF', t: 'Where it is signed',
      l: ['A defined point before the', 'output leaves. Nothing', 'goes past it unsigned, and', 'the signature has a name.'],
      n: 'A gate, not a suggestion'
    }
  ];
  const decay = [
    { t: 'We always review it', s: 'the policy says so' },
    { t: 'Volume rises', s: 'the queue outgrows the time' },
    { t: 'Reading becomes skimming', s: 'then just a tick in a box' },
    { t: 'Rubber stamp', s: 'signed, but nothing was read' }
  ];
  const keeps = [
    { t: 'Bound the volume', a: 'review capacity is a limit,', b: 'not an aspiration' },
    { t: 'Sample the sign-offs', a: 'check the checkers, on a', b: 'small slice, regularly' },
    { t: 'Make skipping visible', a: 'an unsigned output should', b: 'not be able to leave' },
    { t: 'Count the catches', a: 'a review that never finds', b: 'anything is not reviewing' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 488" caption="The difference between a control and a formality is whether anything can actually be stopped at it">
      <defs>
        <marker id="arrowHRP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A human review step that survives contact with a busy week</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the policy is never the problem — the missing specifics are</text>

      <rect x="30" y="52" width="740" height="28" rx="8" fill={COLORS.emerald} />
      <text x="400" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A REVIEW PROTOCOL THAT GETS FOLLOWED — FOUR THINGS WRITTEN DOWN IN ADVANCE</text>

      {parts.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="88" width="176" height="152" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <rect x={30 + i * 188} y="88" width="176" height="26" rx="10" fill={COLORS.emerald} />
          <text x={118 + i * 188} y="106" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">{p.tag}</text>
          <text x={118 + i * 188} y="132" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{p.t}</text>
          {p.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={152 + j * 15} fill={COLORS.slate700} fontSize="8.6">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="210" x2={194 + i * 188} y2="210" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={118 + i * 188} y="228" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{p.n}</text>
        </g>
      ))}

      <text x="30" y="262" fill={COLORS.red} fontSize="10" fontWeight="700">WITHOUT THOSE FOUR, THE SAME POLICY DEGRADES LIKE THIS</text>
      {decay.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="272" width="170" height="56" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
          <text x={115 + i * 190} y="294" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{d.t}</text>
          <text x={115 + i * 190} y="310" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{d.s}</text>
          {i < 3 && <line x1={202 + i * 190} y1="300" x2={216 + i * 190} y2="300" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowHRP)" />}
        </g>
      ))}

      <rect x="30" y="342" width="740" height="34" rx="8" fill={COLORS.amber} />
      <text x="400" y="364" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The policy did not change — the time available did, and nothing in the process noticed</text>

      <text x="30" y="392" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT KEEPS THE PROTOCOL FROM DECAYING</text>
      {keeps.map((k, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="398" width="176" height="56" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={118 + i * 188} y="418" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{k.t}</text>
          <text x={118 + i * 188} y="434" textAnchor="middle" fill={COLORS.slate600} fontSize="8.3">{k.a}</text>
          <text x={118 + i * 188} y="446" textAnchor="middle" fill={COLORS.slate600} fontSize="8.3">{k.b}</text>
        </g>
      ))}
      <text x="400" y="476" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A review that has never rejected anything is not a control — it is a signature</text>
    </DiagramFrame>
  );
};
