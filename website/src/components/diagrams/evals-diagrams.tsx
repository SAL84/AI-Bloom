import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE (14–18)
 * ------------------------------------------------------------------ */

export const EvalDrivenLoopDiagram = () => {
  const chain = [
    { x: 30, head: '1 · BUILD', l1: 'prompt · model', l2: 'retrieval · tools' },
    { x: 182, head: '2 · RUN EVALS', l1: 'score every case', l2: 'automatically' },
    { x: 334, head: '3 · ERROR ANALYSIS', l1: 'read the failures,', l2: 'label the real causes' },
    { x: 486, head: '4 · FIX ONE THING', l1: 'so you know what', l2: 'moved the number' },
    { x: 638, head: '5 · RE-RUN', l1: 'same set, compared', l2: 'against the last score' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 420" caption="Evals turn shipping into a measured loop — and every production failure is a missing test case, not just an incident">
      <defs>
        <marker id="arrowEDL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The eval-driven development loop</text>

      <rect x="270" y="42" width="260" height="58" rx="10" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="66" textAnchor="middle" fill={COLORS.blue} fontSize="12" fontWeight="700">EVAL SET</text>
      <text x="400" y="86" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">cases · expected behaviour · graders</text>

      <polyline points="300,100 248,100 248,144" fill="none" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowEDL)" />

      {chain.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="150" width="132" height="76" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
          <rect x={c.x} y="150" width="132" height="24" rx="8" fill={COLORS.slate700} />
          <text x={c.x + 66} y="167" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">{c.head}</text>
          <text x={c.x + 66} y="194" textAnchor="middle" fill={COLORS.slate900} fontSize="9.5">{c.l1}</text>
          <text x={c.x + 66} y="210" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{c.l2}</text>
          {i < 4 && <line x1={c.x + 133} y1="188" x2={c.x + 149} y2="188" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowEDL)" />}
        </g>
      ))}

      <polyline points="704,148 704,118 400,118 400,144" fill="none" stroke={COLORS.amber} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrowEDL)" />
      <text x="552" y="112" textAnchor="middle" fill={COLORS.amber} fontSize="9.5" fontWeight="700">still failing — analyse again, do not guess again</text>

      <line x1="704" y1="228" x2="704" y2="258" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowEDL)" />
      <text x="712" y="248" fill={COLORS.emerald} fontSize="9" fontWeight="700">passes</text>
      <rect x="638" y="262" width="132" height="54" rx="8" fill={COLORS.emerald} />
      <text x="704" y="285" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">SHIP</text>
      <text x="704" y="303" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">score clears the bar</text>

      <rect x="30" y="290" width="340" height="88" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="290" width="340" height="26" rx="8" fill={COLORS.red} />
      <text x="200" y="308" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PRODUCTION — the real distribution</text>
      {['Real users hit paths the eval set never had', 'Thumbs-down, complaints, silent wrong answers', 'Every incident is a case you were missing'].map((t, i) => (
        <text key={i} x="44" y={336 + i * 18} fill={COLORS.slate700} fontSize="9.5">{t}</text>
      ))}

      <polyline points="30,320 14,320 14,71 264,71" fill="none" stroke={COLORS.red} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrowEDL)" />
      <text x="150" y="62" textAnchor="middle" fill={COLORS.red} fontSize="9.5" fontWeight="700">failures become new eval cases</text>

      <text x="400" y="406" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The loop only tightens if the eval set grows from reality — a frozen eval set stops finding anything</text>
    </DiagramFrame>
  );
};

export const GoldenDatasetDiagram = () => {
  const row1 = [
    { x: 30, w: 210, color: COLORS.slate700, head: 'PRODUCTION TRAFFIC', l1: 'Everything real users send', l2: 'Long tail, repeats, typos, off-topic' },
    { x: 270, w: 210, color: COLORS.blue, head: 'SAMPLE, DO NOT SCRAPE', l1: 'Stratify by intent and difficulty', l2: 'Mirror the real usage mix' },
    { x: 510, w: 260, color: COLORS.cyan, head: 'LABEL EACH CASE', l1: 'Input · expected behaviour · grading rule', l2: 'Two labellers; resolve disagreements, do not average' }
  ];
  const splits = [
    { x: 100, cx: 250, color: COLORS.emerald, head: 'DEV SET  ·  ~70%', lines: ['You look at it constantly', 'Tune prompts, retrieval and models here', 'Expect to overfit it — that is its job'] },
    { x: 440, cx: 590, color: COLORS.red, head: 'HELD-OUT SET  ·  ~30%', lines: ['Locked. Never tuned against.', 'Run it before a release, and rarely', 'Optimise against it once and it is a dev set'] }
  ];
  const coverage = [
    { x: 46, t: 'Real mix', s: 'match traffic proportions' },
    { x: 226, t: 'Known edges', s: 'adversarial, empty, huge, multilingual' },
    { x: 406, t: 'Costly cases', s: 'over-sample what hurts most' },
    { x: 586, t: 'Fresh cases', s: 'add as the product and users shift' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 444" caption="A golden set is curated, not collected — and the held-out split is only worth anything for as long as nobody tunes against it">
      <defs>
        <marker id="arrowGD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Curating the golden eval set</text>

      {row1.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y="48" width={r.w} height="84" rx="8" fill={COLORS.white} stroke={r.color} strokeWidth="2" />
          <rect x={r.x} y="48" width={r.w} height="26" rx="8" fill={r.color} />
          <text x={r.x + r.w / 2} y="66" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{r.head}</text>
          <text x={r.x + r.w / 2} y="98" textAnchor="middle" fill={COLORS.slate900} fontSize="9.5" fontWeight="600">{r.l1}</text>
          <text x={r.x + r.w / 2} y="118" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{r.l2}</text>
          {i < 2 && <line x1={r.x + r.w} y1="90" x2={r.x + r.w + 26} y2="90" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowGD)" />}
        </g>
      ))}

      <line x1="640" y1="132" x2="640" y2="150" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="250" y1="150" x2="640" y2="150" stroke={COLORS.slate500} strokeWidth="2" />
      {[250, 590].map((x, i) => (
        <line key={i} x1={x} y1="150" x2={x} y2="172" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowGD)" />
      ))}
      <text x="420" y="144" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">split once, by case — never leak near-duplicates across the line</text>

      {splits.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="176" width="300" height="112" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
          <rect x={s.x} y="176" width="300" height="28" rx="8" fill={s.color} />
          <text x={s.cx} y="196" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{s.head}</text>
          {s.lines.map((l, j) => (
            <g key={j}>
              <circle cx={s.x + 18} cy={224 + j * 22} r="3" fill={s.color} />
              <text x={s.x + 30} y={228 + j * 22} fill={COLORS.slate700} fontSize="10">{l}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="306" width="740" height="100" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="306" width="740" height="28" rx="8" fill={COLORS.amber} />
      <text x="400" y="325" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">COVERAGE = THE REAL DISTRIBUTION + THE EDGES YOU ALREADY KNOW ABOUT</text>
      {coverage.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="344" width="170" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={c.x + 85} y="364" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{c.t}</text>
          <text x={c.x + 85} y="380" textAnchor="middle" fill={COLORS.slate500} fontSize="8.5">{c.s}</text>
        </g>
      ))}

      <text x="400" y="432" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A set that does not look like production measures a product you are not shipping</text>
    </DiagramFrame>
  );
};

export const LLMJudgeBiasDiagram = () => {
  const biases = [
    { x: 30, cx: 150, head: 'POSITION BIAS', d1: 'Prefers whichever answer it', d2: 'reads first — or last.', fix: 'Swap the order, run twice, average.' },
    { x: 280, cx: 400, head: 'VERBOSITY BIAS', d1: 'Rewards length and confident', d2: 'tone over being correct.', fix: 'Score against an explicit rubric.' },
    { x: 530, cx: 650, head: 'SELF-PREFERENCE', d1: 'Rates text from its own model', d2: 'family above everyone else.', fix: 'Judge with a different model family.' }
  ];
  const calib = [
    { x: 46, t: '1 · HUMAN-LABEL A SLICE', s1: '~100 real cases,', s2: 'labelled by people' },
    { x: 226, t: '2 · RUN THE JUDGE', s1: 'same slice,', s2: 'same rubric' },
    { x: 406, t: '3 · MEASURE AGREEMENT', s1: 'Cohen kappa, not', s2: 'raw accuracy' },
    { x: 586, t: '4 · TIGHTEN AND REPEAT', s1: 'rewrite the rubric', s2: 'until it clears your bar' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="An LLM judge is a model under test, not a measuring instrument — until you have measured its agreement with humans">
      <defs>
        <marker id="arrowLJB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">LLM-as-judge and its known failure modes</text>

      <rect x="60" y="48" width="140" height="46" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="130" y="76" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="600">Response A</text>
      <rect x="60" y="104" width="140" height="46" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="130" y="132" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="600">Response B</text>
      <line x1="202" y1="72" x2="272" y2="94" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLJB)" />
      <line x1="202" y1="128" x2="272" y2="114" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLJB)" />

      <rect x="280" y="54" width="240" height="100" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="280" y="54" width="240" height="28" rx="10" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">LLM-AS-JUDGE</text>
      <text x="400" y="104" textAnchor="middle" fill={COLORS.slate900} fontSize="10">scores an answer, or picks a winner</text>
      <text x="400" y="122" textAnchor="middle" fill={COLORS.slate600} fontSize="10">cheap, fast, and it scales to every run</text>
      <text x="400" y="142" textAnchor="middle" fill={COLORS.red} fontSize="10" fontWeight="700">but it is a model, with model failure modes</text>

      <line x1="522" y1="104" x2="574" y2="104" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowLJB)" />
      <rect x="580" y="76" width="160" height="56" rx="8" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="660" y="100" textAnchor="middle" fill={COLORS.blue} fontSize="11" fontWeight="700">Verdict</text>
      <text x="660" y="118" textAnchor="middle" fill={COLORS.slate700} fontSize="10">A wins  ·  4 / 5</text>

      <line x1="400" y1="154" x2="400" y2="176" stroke={COLORS.slate400} strokeWidth="2" strokeDasharray="4 3" />
      <line x1="150" y1="176" x2="650" y2="176" stroke={COLORS.slate400} strokeWidth="2" strokeDasharray="4 3" />
      {[150, 400, 650].map((x, i) => (
        <line key={i} x1={x} y1="176" x2={x} y2="186" stroke={COLORS.slate400} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowLJB)" />
      ))}

      {biases.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y="190" width="240" height="112" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <rect x={b.x} y="190" width="240" height="26" rx="8" fill={COLORS.red} />
          <text x={b.cx} y="208" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{b.head}</text>
          <text x={b.x + 12} y="238" fill={COLORS.slate900} fontSize="9.5">{b.d1}</text>
          <text x={b.x + 12} y="254" fill={COLORS.slate900} fontSize="9.5">{b.d2}</text>
          <line x1={b.x + 12} y1="266" x2={b.x + 228} y2="266" stroke={COLORS.slate200} strokeWidth="1.5" />
          <text x={b.x + 12} y="282" fill={COLORS.emerald} fontSize="9" fontWeight="700">MITIGATION</text>
          <text x={b.x + 12} y="296" fill={COLORS.slate600} fontSize="9.5">{b.fix}</text>
        </g>
      ))}

      <rect x="30" y="322" width="740" height="104" rx="10" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="322" width="740" height="28" rx="10" fill={COLORS.emerald} />
      <text x="400" y="341" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">CALIBRATION — the step that turns a judge into a measurement</text>
      {calib.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="362" width="172" height="54" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={c.x + 86} y="380" textAnchor="middle" fill={COLORS.slate900} fontSize="9.5" fontWeight="700">{c.t}</text>
          <text x={c.x + 86} y="395" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{c.s1}</text>
          <text x={c.x + 86} y="409" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{c.s2}</text>
          {i < 3 && <line x1={c.x + 173} y1="389" x2={c.x + 179} y2="389" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowLJB)" />}
        </g>
      ))}

      <text x="400" y="450" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Recalibrate whenever the rubric, the judge model or the task changes — agreement does not carry over</text>
    </DiagramFrame>
  );
};

export const RegressionSuiteDiagram = () => {
  const changes = ['Prompt edit', 'Model upgrade', 'Retrieval tweak'];
  const ciLines = ['Every case, every grader', 'N repeats per case', 'Model version + prompt hash pinned', 'Latency and cost captured too', 'Runs on the PR, not after merge'];
  const cmpLines = ['Score delta per metric', 'Per-case pass to fail flips', 'New failures listed by name', 'Wins reported as well as losses', 'A diff, not a single number'];
  const nd = [
    { x: 46, t: 'Repeat each case', s1: 'run N times, report mean', s2: 'and spread, not one sample' },
    { x: 290, t: 'Gate on a band', s1: 'fail on a drop beyond the', s2: 'band, not on any wobble' },
    { x: 534, t: 'Pin what you can', s1: 'temperature, seed, model', s2: 'version, dataset hash' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="CI for AI is a diff against a baseline, not a green tick — and a noisy system needs a tolerance band before it needs a stricter gate">
      <defs>
        <marker id="arrowRS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="20" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The regression suite in CI</text>
      <text x="105" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">A CHANGE LANDS</text>

      {changes.map((c, i) => (
        <g key={i}>
          <rect x="30" y={56 + i * 44} width="150" height="38" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
          <text x="105" y={80 + i * 44} textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="600">{c}</text>
          <line x1="180" y1={75 + i * 44} x2="196" y2={75 + i * 44} stroke={COLORS.slate400} strokeWidth="1.5" />
        </g>
      ))}
      <line x1="196" y1="75" x2="196" y2="163" stroke={COLORS.slate400} strokeWidth="1.5" />
      <line x1="196" y1="119" x2="216" y2="119" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRS)" />

      <rect x="220" y="48" width="180" height="142" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="220" y="48" width="180" height="28" rx="8" fill={COLORS.blue} />
      <text x="310" y="67" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">EVAL SUITE RUNS</text>
      {ciLines.map((l, i) => (
        <text key={i} x="232" y={98 + i * 18} fill={COLORS.slate700} fontSize="9.5">{l}</text>
      ))}

      <line x1="402" y1="119" x2="426" y2="119" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRS)" />

      <rect x="430" y="48" width="180" height="142" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="430" y="48" width="180" height="28" rx="8" fill={COLORS.cyan} />
      <text x="520" y="67" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">COMPARE TO BASELINE</text>
      {cmpLines.map((l, i) => (
        <text key={i} x="442" y={98 + i * 18} fill={COLORS.slate700} fontSize="9.5">{l}</text>
      ))}

      <line x1="612" y1="119" x2="634" y2="119" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRS)" />

      <rect x="638" y="76" width="132" height="86" rx="8" fill={COLORS.white} stroke={COLORS.slate900} strokeWidth="2" />
      <rect x="638" y="76" width="132" height="26" rx="8" fill={COLORS.slate900} />
      <text x="704" y="94" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RELEASE GATE</text>
      <text x="704" y="124" textAnchor="middle" fill={COLORS.slate900} fontSize="10" fontWeight="600">regressions</text>
      <text x="704" y="142" textAnchor="middle" fill={COLORS.slate900} fontSize="10" fontWeight="600">block the merge</text>

      <line x1="704" y1="162" x2="704" y2="200" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="510" y1="200" x2="704" y2="200" stroke={COLORS.slate500} strokeWidth="2" />
      {[510, 690].map((x, i) => (
        <line key={i} x1={x} y1="200" x2={x} y2="222" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRS)" />
      ))}

      <rect x="30" y="224" width="380" height="86" rx="8" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <rect x="30" y="224" width="380" height="26" rx="8" fill={COLORS.slate600} />
      <text x="220" y="242" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE BASELINE</text>
      {['Last release scores, per case and per metric', 'Stored with model version, prompt hash, dataset hash', 'Re-baselined deliberately — never silently'].map((t, i) => (
        <text key={i} x="44" y={268 + i * 17} fill={COLORS.slate700} fontSize="9.5">{t}</text>
      ))}
      <polyline points="412,262 520,262 520,194" fill="none" stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowRS)" />

      <rect x="430" y="224" width="160" height="86" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="430" y="224" width="160" height="26" rx="8" fill={COLORS.emerald} />
      <text x="510" y="242" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SHIP IT</text>
      {['No regression past the band', 'Baseline moves to this run', 'Deltas posted on the PR'].map((t, i) => (
        <text key={i} x="442" y={268 + i * 17} fill={COLORS.slate700} fontSize="9">{t}</text>
      ))}

      <rect x="610" y="224" width="160" height="86" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="610" y="224" width="160" height="26" rx="8" fill={COLORS.red} />
      <text x="690" y="242" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BLOCK AND TRIAGE</text>
      {['Named cases regressed', 'Fix, or accept with a reason', 'Never re-run until green'].map((t, i) => (
        <text key={i} x="622" y={268 + i * 17} fill={COLORS.slate700} fontSize="9">{t}</text>
      ))}

      <rect x="30" y="330" width="740" height="96" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="330" width="740" height="28" rx="10" fill={COLORS.amber} />
      <text x="400" y="349" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">NON-DETERMINISM — the same input does not give you the same output</text>
      {nd.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y="366" width="236" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={n.x + 118} y="384" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{n.t}</text>
          <text x={n.x + 118} y="398" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{n.s1}</text>
          <text x={n.x + 118} y="410" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{n.s2}</text>
        </g>
      ))}

      <text x="400" y="450" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Without a stored baseline there is no regression — only a score nobody can argue with</text>
    </DiagramFrame>
  );
};

export const RedTeamLoopDiagram = () => {
  const steps = [
    { x: 30, head: '1 · GENERATE CASES', lines: ['By category: prompt', 'injection, exfiltration,', 'jailbreak, tool misuse,', 'harmful content'] },
    { x: 180, head: '2 · EXECUTE', lines: ['Against the real system', 'in the agreed', 'environment. Log every', 'prompt and response.'] },
    { x: 330, head: '3 · TRIAGE', lines: ['Severity by likelihood.', 'Reproduce twice before', 'you file it. Drop the', 'one-off flukes.'] },
    { x: 480, head: '4 · REPORT AND FIX', lines: ['Named owner, evidence,', 'repro steps. The fix is', 'a change shipped, not', 'a note in a doc.'] },
    { x: 630, head: '5 · RETEST', lines: ['Re-run the exact case.', 'Then add it to the', 'regression suite so it', 'cannot come back.'] }
  ];
  const sev = [
    { x: 46, color: COLORS.red, t: 'CRITICAL', s1: 'data exfiltration or a full', s2: 'policy bypass — stop, escalate' },
    { x: 226, color: COLORS.amber, t: 'HIGH', s1: 'reliable jailbreak with real', s2: 'harm — fix before release' },
    { x: 406, color: COLORS.blue, t: 'MEDIUM', s1: 'works sometimes, limited', s2: 'impact — backlog with a date' },
    { x: 586, color: COLORS.slate500, t: 'LOW', s1: 'cosmetic or already', s2: 'mitigated — log and move on' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 438" caption="Red teaming without written scope is not testing — the authorisation gate is the first control, and everything downstream depends on it">
      <defs>
        <marker id="arrowRTL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="20" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The authorised red-team cycle</text>

      <rect x="30" y="38" width="740" height="78" rx="10" fill="#fef2f2" stroke={COLORS.red} strokeWidth="3" />
      <rect x="46" y="30" width="112" height="18" rx="9" fill={COLORS.red} />
      <text x="102" y="43" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">ENTRY GATE</text>
      <text x="400" y="68" textAnchor="middle" fill={COLORS.red} fontSize="15" fontWeight="700">STEP 0 — SCOPE AND WRITTEN AUTHORISATION</text>
      <text x="400" y="88" textAnchor="middle" fill={COLORS.slate700} fontSize="10">systems in scope · categories allowed · data you must not touch · named contact · stop conditions · start and end dates</text>
      <text x="400" y="106" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">No signed scope, no test. Everything below this line stays off-limits until the gate is passed.</text>

      <line x1="400" y1="116" x2="400" y2="142" stroke={COLORS.red} strokeWidth="2.5" markerEnd="url(#arrowRTL)" />

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="146" width="138" height="100" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
          <rect x={s.x} y="146" width="138" height="26" rx="8" fill={COLORS.slate700} />
          <text x={s.x + 69} y="164" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">{s.head}</text>
          {s.lines.map((l, j) => (
            <text key={j} x={s.x + 69} y={192 + j * 14} textAnchor="middle" fill={COLORS.slate700} fontSize="8.5">{l}</text>
          ))}
          {i < 4 && <line x1={s.x + 139} y1="196" x2={s.x + 148} y2="196" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRTL)" />}
        </g>
      ))}

      <polyline points="699,246 699,272 99,272 99,250" fill="none" stroke={COLORS.blue} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrowRTL)" />
      <text x="400" y="290" textAnchor="middle" fill={COLORS.blue} fontSize="10" fontWeight="700">Findings become new cases — the loop re-runs every release, inside the same signed scope</text>

      <rect x="30" y="306" width="740" height="96" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="30" y="306" width="740" height="28" rx="10" fill={COLORS.slate700} />
      <text x="400" y="325" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">SEVERITY TRIAGE — what &quot;found something&quot; is allowed to mean</text>
      {sev.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="342" width="172" height="52" rx="6" fill={COLORS.slate50} stroke={s.color} strokeWidth="1.5" />
          <text x={s.x + 86} y="360" textAnchor="middle" fill={s.color} fontSize="10.5" fontWeight="700">{s.t}</text>
          <text x={s.x + 86} y="375" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{s.s1}</text>
          <text x={s.x + 86} y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{s.s2}</text>
        </g>
      ))}

      <text x="400" y="426" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A finding that is not reproduced, owned and retested is an anecdote, not a fixed vulnerability</text>
    </DiagramFrame>
  );
};
