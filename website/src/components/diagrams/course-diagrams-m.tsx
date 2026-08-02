import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * EVALUATION — a rubric two independent raters can both apply
 * ------------------------------------------------------------------ */

export const SharedRubricDiagram = () => {
  const levels = [
    { n: 'LEVEL 1 — UNACCEPTABLE', c: COLORS.red },
    { n: 'LEVEL 2 — ACCEPTABLE', c: COLORS.blue },
    { n: 'LEVEL 3 — EXEMPLARY', c: COLORS.emerald }
  ];
  const rows = [
    {
      d: ['Faithfulness', 'to the source'],
      cells: [
        { l: ['Contains a claim the source', 'does not support.'], a: 'anchor: cites a figure not in the source' },
        { l: ['Every claim traceable to the', 'source; nothing invented.'], a: 'anchor: each point maps to a passage' },
        { l: ['Traceable, and flags where the', 'source is silent.'], a: 'anchor: notes where the source is silent' }
      ]
    },
    {
      d: ['Instruction', 'compliance'],
      cells: [
        { l: ['Ignores a stated constraint', 'on format, length or scope.'], a: 'anchor: asked for bullets, got prose' },
        { l: ['Meets every stated', 'constraint.'], a: 'anchor: bullets, in the order asked' },
        { l: ['Meets them, and asks when two', 'constraints conflict.'], a: 'anchor: flags that two constraints clash' }
      ]
    },
    {
      d: ['Completeness', 'of coverage'],
      cells: [
        { l: ['Omits a part of the request', 'without saying so.'], a: 'anchor: answers one of two questions' },
        { l: ['Covers every part of the', 'request.'], a: 'anchor: both questions answered' },
        { l: ['Covers it, and names what it', 'deliberately left out.'], a: 'anchor: names what it left out' }
      ]
    }
  ];
  const test = [
    { t: 'Score it twice, independently', l: ['Two raters, no discussion,', 'the same set of outputs.'] },
    { t: 'Read every disagreement', l: ['Each one marks a place the', 'descriptor failed to decide.'] },
    { t: 'Fix the rubric, not the raters', l: ['Rewrite the level until the', 'two would have had to agree.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 560" caption="The rubric is the specification — if it does not decide the case, neither the human nor the model can">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A rubric a human and a model can both apply to the same output</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">named dimensions, concrete level descriptors, and a worked example anchoring each level</text>

      <text x="30" y="62" fill={COLORS.slate700} fontSize="10" fontWeight="700">DIMENSIONS DOWN, LEVELS ACROSS — EVERY CELL SAYS WHAT THE TEXT DOES, NOT HOW GOOD IT FEELS</text>
      {levels.map((lv, j) => (
        <g key={j}>
          <rect x={166 + j * 200} y="70" width="194" height="20" rx="6" fill={lv.c} />
          <text x={263 + j * 200} y="84" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{lv.n}</text>
        </g>
      ))}
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="30" y={94 + i * 58} width="130" height="52" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
          {r.d.map((t, k) => (
            <text key={k} x="95" y={117 + i * 58 + k * 11} textAnchor="middle" fill={COLORS.slate900} fontSize="8.6" fontWeight="700">{t}</text>
          ))}
          {r.cells.map((c, j) => (
            <g key={j}>
              <rect x={166 + j * 200} y={94 + i * 58} width="194" height="52" rx="8" fill={COLORS.white} stroke={levels[j].c} strokeWidth="1.6" />
              {c.l.map((t, k) => (
                <text key={k} x={176 + j * 200} y={109 + i * 58 + k * 10} fill={COLORS.slate700} fontSize="7.6">{t}</text>
              ))}
              <text x={176 + j * 200} y={136 + i * 58} fill={COLORS.slate500} fontSize="7.2" fontStyle="italic">{c.a}</text>
            </g>
          ))}
        </g>
      ))}

      <text x="30" y="284" fill={COLORS.slate700} fontSize="10" fontWeight="700">WHY A JUDGE MODEL AND A HUMAN DISAGREE — IT IS USUALLY THE WORDING</text>
      <rect x="30" y="292" width="360" height="88" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="292" width="360" height="24" rx="10" fill={COLORS.red} />
      <text x="210" y="309" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">VAGUE CRITERION — “IS THE ANSWER GOOD?”</text>
      <text x="44" y="332" fill={COLORS.slate600} fontSize="8.4">Two raters read “good” differently and nothing in the rubric</text>
      <text x="44" y="344" fill={COLORS.slate600} fontSize="8.4">settles it. The judge model inherits exactly the same</text>
      <text x="44" y="356" fill={COLORS.slate600} fontSize="8.4">ambiguity — so judge-human disagreement is a rubric defect.</text>
      <text x="44" y="372" fill={COLORS.red} fontSize="7.8" fontStyle="italic">Same output, two raters, two different scores — and no way to settle it.</text>

      <rect x="410" y="292" width="360" height="88" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="292" width="360" height="24" rx="10" fill={COLORS.emerald} />
      <text x="590" y="309" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">CONCRETE DESCRIPTOR — WHAT THE TEXT DOES</text>
      <text x="424" y="332" fill={COLORS.slate600} fontSize="8.4">Each level names an observable property of the text, so two</text>
      <text x="424" y="344" fill={COLORS.slate600} fontSize="8.4">raters check the same thing — and so does the judge. What is</text>
      <text x="424" y="356" fill={COLORS.slate600} fontSize="8.4">left is real ambiguity in the output, not in the wording.</text>
      <text x="424" y="372" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">Same output, two raters, the same score, checked the same way.</text>

      <text x="30" y="398" fill={COLORS.blue} fontSize="10" fontWeight="700">THE TEST OF A RUBRIC IS AGREEMENT, NOT ELEGANCE</text>
      {test.map((t, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="406" width="236" height="62" rx="10" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={148 + i * 252} y="426" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{t.t}</text>
          {t.l.map((s, j) => (
            <text key={j} x={42 + i * 252} y={442 + j * 12} fill={COLORS.slate600} fontSize="8.4">{s}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="480" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="498" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A rubric works when two independent raters reach the same score without conferring</text>
      <text x="400" y="512" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Vague criteria are exactly why a judge and a human disagree — fix the words, not the judge</text>
      <text x="400" y="542" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Write the levels so a stranger could score the same output and land in the same place</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * CI FOR PROMPTS AND AGENTS — the eval suite as a merge gate
 * ------------------------------------------------------------------ */

export const CIForPromptsAndAgentsDiagram = () => {
  const changes = [
    { n: 'PROMPT TEXT', l: ['A wording change is a', 'behaviour change.'] },
    { n: 'TOOL DEFINITION', l: ['New tool, new schema, or', 'a new description.'] },
    { n: 'MODEL VERSION', l: ['A pinned version moved,', 'or the provider shipped.'] },
    { n: 'RETRIEVAL CONFIG', l: ['Chunking, index contents,', 'top-k, or the reranker.'] }
  ];
  const hermetic = [
    { t: 'External calls mocked', s: 'Tool calls hit recorded fixtures, not live services.' },
    { t: 'Environment pinned', s: 'Model version, decoding settings and seeds all fixed.' },
    { t: 'Reruns must agree', s: 'An unchanged system that scores differently is broken.' }
  ];
  const suites = [
    { n: 'Grounding suite', base: 88, now: 92, s: 'same', c: COLORS.emerald },
    { n: 'Refusal boundary', base: 74, now: 86, s: 'better', c: COLORS.emerald },
    { n: 'Tool selection', base: 96, now: 58, s: 'REGRESSION', c: COLORS.red },
    { n: 'Multi-turn recovery', base: 66, now: 68, s: 'same', c: COLORS.emerald }
  ];
  const gates = [
    { c: COLORS.emerald, n: 'NO REGRESSION → MERGE', l: ['Every suite at or above the', 'baseline, so it merges with', 'the run attached to the PR.'] },
    { c: COLORS.red, n: 'REGRESSION → BLOCKED', l: ['A suite dropped. The merge', 'stops until it is fixed or', 'explicitly signed off.'] },
    { c: COLORS.amber, n: 'INTENDED CHANGE → REBASELINE', l: ['The new behaviour is the', 'wanted one, so the baseline', 'moves — as a reviewed commit.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 558" caption="Ordinary software engineering discipline — the only new part is that the unit under test is a prompt">
      <defs>
        <marker id="arrowCIPA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Continuous integration for prompts, tools and agents</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a change lands, the suite runs hermetically, results are diffed against the baseline, and a gate decides</text>

      {changes.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="52" width="176" height="64" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={30 + i * 188} y="52" width="176" height="22" rx="10" fill={COLORS.blue} />
          <text x={118 + i * 188} y="67" textAnchor="middle" fill={COLORS.white} fontSize="8.8" fontWeight="700">{c.n}</text>
          {c.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={90 + j * 12} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
          <line x1={118 + i * 188} y1="116" x2={118 + i * 188} y2="126" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCIPA)" />
        </g>
      ))}

      <rect x="30" y="128" width="740" height="30" rx="8" fill={COLORS.slate700} />
      <text x="400" y="148" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Any one of these changes behaviour, so any one of them triggers the same run</text>

      <rect x="30" y="170" width="360" height="150" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="170" width="360" height="26" rx="10" fill={COLORS.cyan} />
      <text x="210" y="188" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HERMETIC RUN — NO OUTSIDE WORLD</text>
      <text x="44" y="212" fill={COLORS.slate700} fontSize="8.4">Same inputs, same fixtures, same versions — so a difference in</text>
      <text x="44" y="224" fill={COLORS.slate700} fontSize="8.4">the output means a difference in the system, not in the weather.</text>
      {hermetic.map((h, i) => (
        <g key={i}>
          <circle cx="50" cy={241 + i * 26} r="3" fill={COLORS.cyan} />
          <text x="62" y={244 + i * 26} fill={COLORS.slate900} fontSize="8.8" fontWeight="700">{h.t}</text>
          <text x="62" y={255 + i * 26} fill={COLORS.slate600} fontSize="8">{h.s}</text>
        </g>
      ))}

      <rect x="410" y="170" width="360" height="150" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="410" y="170" width="360" height="26" rx="10" fill={COLORS.slate700} />
      <text x="590" y="188" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DIFF AGAINST THE STORED BASELINE</text>
      <text x="424" y="208" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">bar = this run · tick = baseline · every suite compared, not the mean</text>
      {suites.map((s, i) => (
        <g key={i}>
          <text x="424" y={226 + i * 26} fill={COLORS.slate700} fontSize="8.2">{s.n}</text>
          <rect x="558" y={218 + i * 26} width="120" height="10" rx="5" fill={COLORS.slate100} />
          <rect x="558" y={218 + i * 26} width={s.now} height="10" rx="5" fill={s.c} />
          <line x1={558 + s.base} y1={214 + i * 26} x2={558 + s.base} y2={232 + i * 26} stroke={COLORS.slate900} strokeWidth="1.5" />
          <text x="692" y={226 + i * 26} fill={s.c} fontSize="7.8" fontWeight="700">{s.s}</text>
        </g>
      ))}

      <rect x="30" y="332" width="740" height="30" rx="8" fill={COLORS.slate900} />
      <text x="400" y="352" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Prompts are code — version-controlled, reviewed, diffed, never edited straight into production</text>

      <text x="30" y="382" fill={COLORS.slate700} fontSize="10" fontWeight="700">THE GATE — WHAT ACTUALLY HAPPENS TO THE MERGE</text>
      {gates.map((g, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="390" width="236" height="76" rx="10" fill={COLORS.white} stroke={g.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="390" width="236" height="22" rx="10" fill={g.c} />
          <text x={148 + i * 252} y="405" textAnchor="middle" fill={COLORS.white} fontSize="8.8" fontWeight="700">{g.n}</text>
          {g.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={428 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="478" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="496" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A gate that never blocks anything is not a gate — it is a report nobody reads</text>
      <text x="400" y="510" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Without a hermetic suite and a stored baseline, “it feels better” is your only evidence</text>
      <text x="400" y="540" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Mocked externals are what make two runs comparable — a live dependency turns the suite into noise</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AUTOMATED RED-TEAMING — coverage it buys, coverage it cannot
 * ------------------------------------------------------------------ */

export const AutomatedRedTeamLimitsDiagram = () => {
  const strong = [
    { t: 'Breadth across known categories', l: ['Every category anyone has already', 'written down, checked on every release.'] },
    { t: 'Volume no team could match', l: ['Thousands of variations generated and', 'scored without anyone getting tired.'] },
    { t: 'Regression on past findings', l: ['Anything found once becomes a test that', 'runs for ever afterwards.'] },
    { t: 'Cheap enough to run constantly', l: ['Cost per run falls far enough that it can', 'gate every change, not just releases.'] }
  ];
  const weak = [
    { t: 'Genuinely novel framings', l: ['A generator recombines what it was given —', 'the framing nobody described is not in it.'] },
    { t: 'Domain-specific abuse', l: ['What counts as harm in one setting is', 'invisible without somebody who works in it.'] },
    { t: 'Multi-turn social engineering', l: ['Pressure built patiently across many turns,', 'adapting to whatever was just conceded.'] },
    { t: 'Anything needing real-world context', l: ['Who the users are, what is at stake, and', 'what would actually be done with the output.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 534" caption="Defensive framing only — the purpose of adversarial testing is to fix what it finds">
      <defs>
        <marker id="arrowARTL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What automated adversarial testing covers, and what it cannot</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">breadth and repetition are cheap; novelty, context and patience are not</text>

      <rect x="30" y="52" width="360" height="212" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="52" width="360" height="28" rx="10" fill={COLORS.emerald} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE AUTOMATED GENERATION IS STRONG</text>
      {strong.map((s, i) => (
        <g key={i}>
          <circle cx="50" cy={95 + i * 44} r="3" fill={COLORS.emerald} />
          <text x="62" y={98 + i * 44} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x="62" y={111 + i * 44 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="410" y="52" width="360" height="212" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="52" width="360" height="28" rx="10" fill={COLORS.red} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE IT DOES NOT REACH</text>
      {weak.map((w, i) => (
        <g key={i}>
          <circle cx="430" cy={95 + i * 44} r="3" fill={COLORS.red} />
          <text x="442" y={98 + i * 44} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{w.t}</text>
          {w.l.map((t, j) => (
            <text key={j} x="442" y={111 + i * 44 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="276" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="297" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Automation is a floor that never drops, not a ceiling that keeps rising</text>

      <rect x="30" y="320" width="740" height="110" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="44" y="340" fill={COLORS.slate700} fontSize="10" fontWeight="700">THE SPACE OF THINGS THAT COULD GO WRONG</text>
      <rect x="44" y="350" width="712" height="44" rx="6" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="44" y="350" width="420" height="44" rx="6" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1.5" />
      <text x="254" y="369" textAnchor="middle" fill={COLORS.blue} fontSize="9" fontWeight="700">AUTOMATED GENERATION COVERS THIS</text>
      <text x="254" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">the categories somebody has already named</text>
      <text x="610" y="369" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">AND NOT THIS</text>
      <text x="610" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">no generator samples what nobody has described</text>
      <line x1="650" y1="418" x2="650" y2="398" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowARTL)" />
      <text x="650" y="426" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">a skilled human adversary works here</text>

      <rect x="30" y="442" width="740" height="50" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Automation widens coverage; it does not replace a skilled human adversary</text>
      <text x="400" y="474" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The human finds the category that was never on the list</text>
      <text x="400" y="486" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Then that category becomes an automated check, and the floor rises by one</text>
      <text x="400" y="516" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Coverage is a claim about what you looked for, never a claim about what is there</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * DISCRIMINATION VS USEFULNESS — qualitative, no figures
 * ------------------------------------------------------------------ */

export const AUCvsUtilityDiagram = () => {
  const blind = [
    { t: 'The operating point you actually ship', s: 'You deploy one threshold, not the whole curve the metric averaged over.' },
    { t: 'Prevalence in the population you deploy into', s: 'The same threshold gives a different mix of alerts where the base rate differs.' },
    { t: 'The cost asymmetry between the two error types', s: 'A missed case and a false alarm rarely carry anything like the same harm.' },
    { t: 'Whether the output changes what anyone does', s: 'An output that leaves management identical is inert, however well it ranks.' }
  ];
  const story = [
    { x: 44, t: 'The model separates well', l: ['Patients who later deteriorate', 'rank above those who do not,', 'right across the curve.'] },
    { x: 290, t: 'So a group gets flagged', l: ['A subset of the ward is', 'surfaced each morning as', 'elevated risk.'] },
    { x: 536, t: 'And then nothing differs', l: ['Those patients were already on', 'the observation schedule the', 'protocol specifies anyway.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 536" caption="Educational orientation only — no threshold, no tool and no course of action is recommended here">
      <defs>
        <marker id="arrowAUCU" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why strong discrimination is not clinical usefulness</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the metric averages over every threshold; usefulness depends on the one you actually operate at</text>

      <rect x="30" y="52" width="300" height="190" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="52" width="300" height="26" rx="10" fill={COLORS.blue} />
      <text x="180" y="70" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">WHAT THE METRIC SUMMARISES</text>
      <text x="64" y="86" fill={COLORS.slate400} fontSize="7.4" fontWeight="700">more cases caught ↑</text>
      <rect x="64" y="90" width="230" height="120" rx="4" fill={COLORS.slate50} stroke={COLORS.slate200} strokeWidth="1.5" />
      <line x1="64" y1="210" x2="294" y2="90" stroke={COLORS.slate300} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 64 210 C 96 138, 140 108, 294 96" fill="none" stroke={COLORS.blue} strokeWidth="2.5" />
      <circle cx="146" cy="116" r="4" fill={COLORS.red} />
      <text x="156" y="118" fill={COLORS.red} fontSize="7.6" fontWeight="700">you operate here</text>
      <text x="176" y="178" fill={COLORS.slate500} fontSize="7.4">the metric averages</text>
      <text x="176" y="189" fill={COLORS.slate500} fontSize="7.4">over the whole curve</text>
      <text x="64" y="224" fill={COLORS.slate400} fontSize="7.4" fontWeight="700">more false alarms →</text>

      <rect x="320" y="52" width="450" height="190" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="320" y="52" width="450" height="26" rx="10" fill={COLORS.amber} />
      <text x="545" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT THE SAME METRIC IS BLIND TO</text>
      {blind.map((b, i) => (
        <g key={i}>
          <circle cx="336" cy={93 + i * 34} r="3" fill={COLORS.amber} />
          <text x="348" y={96 + i * 34} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{b.t}</text>
          <text x="348" y={109 + i * 34} fill={COLORS.slate600} fontSize="8.4">{b.s}</text>
        </g>
      ))}

      <rect x="30" y="254" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="275" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Discrimination is a property of the ranking; usefulness is a property of the decision</text>

      <rect x="30" y="298" width="740" height="134" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="30" y="298" width="740" height="26" rx="10" fill={COLORS.slate700} />
      <text x="400" y="316" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A WORKED CASE — EXCELLENT DISCRIMINATION, NO CHANGE IN MANAGEMENT</text>
      {story.map((s, i) => (
        <g key={i}>
          <text x={s.x} y="346" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x={s.x} y={362 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}
      <line x1="252" y1="374" x2="272" y2="374" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowAUCU)" />
      <line x1="498" y1="374" x2="518" y2="374" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowAUCU)" />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">No earlier test, no different treatment, no changed escalation — and the metric was still excellent</text>

      <rect x="30" y="444" width="740" height="50" rx="10" fill={COLORS.slate900} />
      <text x="400" y="462" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Ask which decision changes, for whom, at which operating point — then ask how well it ranks</text>
      <text x="400" y="476" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A model that ranks beautifully and changes nothing has produced information, not value</text>
      <text x="400" y="488" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The metric can open the argument; only the decision can finish it</text>
    </DiagramFrame>
  );
};
