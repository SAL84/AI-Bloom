import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ PROMPTING M5 (pr5l3–pr5l4) & EVALS M4 (ev4l1–ev4l2) ============ */

export const OwnMaterialDiagram = () => {
  const chips = [
    { x: 46, w: 222, t: 'quote the sentence it came from' },
    { x: 280, w: 222, t: 'section number beside each point' },
    { x: 514, w: 240, t: 'separate stated from inferred' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Pasting the real material — with instructions for using it, quotes to check it, and a pause before anything sensitive — beats any clever wording.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Your material beats its general knowledge</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the real transcript, the real policy, the real numbers — and the habits that make pasting actually work</text>

      <rect x="30" y="58" width="360" height="126" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">GENERAL KNOWLEDGE — GENERAL ANSWERS</text>
      <rect x="46" y="86" width="328" height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="210" y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">you: "What are best practices for handover notes?"</text>
      <rect x="46" y="114" width="328" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="210" y="127" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">generic advice that would fit any team anywhere —</text>
      <text x="210" y="139" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">nothing about your handovers</text>
      <text x="210" y="170" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontWeight="700">no instruction conjures facts it was never given</text>

      <rect x="410" y="58" width="360" height="126" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">YOUR MATERIAL — ANSWERS ABOUT YOUR SITUATION</text>
      <rect x="426" y="86" width="328" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="99" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">you: "Using only the three handover notes below, list</text>
      <text x="590" y="111" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">what each covers and what is missing from all three."</text>
      <rect x="426" y="126" width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="140" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">an answer that can only be about your notes</text>
      <text x="590" y="170" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">say what to do with it, not just that it is there</text>

      <rect x="30" y="198" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="216" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">SAY WHAT TO DO WHEN THE MATERIAL DOES NOT CONTAIN THE ANSWER</text>
      <text x="400" y="232" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">"if the material does not say, write 'not stated' rather than inferring" — otherwise the gap gets quietly filled</text>

      <rect x="30" y="260" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="260" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="274" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">QUOTE IT BACK SO YOU CAN CHECK — TURN TRUST INTO A SPOT-CHECK</text>
      {chips.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="290" width={c.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.4" />
          <text x={c.x + c.w / 2} y="305" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{c.t}</text>
        </g>
      ))}
      <text x="400" y="334" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">anchored answers drift less into generic content — and spot-checking three quotes beats re-reading the source</text>

      <rect x="30" y="360" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="360" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="374" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PAUSE BEFORE YOU PASTE — TWO QUESTIONS FIRST</text>
      <rect x="46" y="388" width="352" height="26" rx="7" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="222" y="404" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">"would I be comfortable if this appeared where I do not control it?"</text>
      <rect x="414" y="388" width="340" height="26" rx="7" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="584" y="404" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">"does the task actually need this part at all?"</text>
      <text x="400" y="428" textAnchor="middle" fill={COLORS.slate600} fontSize="8">credentials, personal data and confidential material deserve the pause — placeholders and rounded figures usually keep the task intact</text>
      <text x="400" y="442" textAnchor="middle" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">know which tools your organisation approves — a personal account is a separate decision</text>

      <rect x="30" y="460" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="480" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PASTE THE REAL MATERIAL, CONSTRAIN IT TO THE MATERIAL, CHECK IT AGAINST THE MATERIAL</text>
      <text x="400" y="497" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">and pause before pasting anything you would not want to see somewhere else</text>
    </DiagramFrame>
  );
};

export const PromptingCeilingDiagram = () => {
  const gaps = [
    {
      x: 30, c: COLORS.blue, h: 'KNOWLEDGE GAP',
      lines: ['the information it needs is', 'simply not available to it'],
      fix: ['fix → supply the material or', 'use a system that retrieves it'],
    },
    {
      x: 286, c: COLORS.amber, h: 'CAPABILITY GAP',
      lines: ['needs exact calculation, live', 'data, or an action in a system'],
      fix: ['fix → a calculator, a database,', 'a proper tool'],
    },
    {
      x: 542, c: COLORS.red, h: 'JUDGEMENT GAP',
      lines: ['a call that should not be', 'delegated in the first place'],
      fix: ['fix → this one stays yours;', 'no prompt changes that'],
    },
  ];
  const row1 = [
    { x: 46, w: 226, t: 'the prompt is longer than the output' },
    { x: 284, w: 226, t: 'branching rules written in prose' },
    { x: 522, w: 232, t: 'identical output needed every time' },
  ];
  const row2 = [
    { x: 46, w: 346, t: 'it depends on information nobody ever wrote down' },
    { x: 408, w: 346, t: 'three genuinely different approaches have failed' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Prompting fixes instruction gaps only — knowledge, capability and judgement gaps need supplied material, a real tool, or your own decision.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where a better prompt stops being the answer</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">prompting closes instruction gaps — the other three gaps need something other than nicer wording</text>

      {gaps.map((g, i) => (
        <g key={i}>
          <rect x={g.x} y="58" width="228" height="98" rx="8" fill={COLORS.white} stroke={g.c} strokeWidth="2" />
          <rect x={g.x} y="58" width="228" height="18" rx="8" fill={g.c} />
          <text x={g.x + 114} y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{g.h}</text>
          {g.lines.map((t, j) => (
            <text key={j} x={g.x + 114} y={92 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">{t}</text>
          ))}
          {g.fix.map((t, j) => (
            <text key={j} x={g.x + 114} y={126 + j * 12} textAnchor="middle" fill={g.c} fontSize="7.2" fontWeight="700">{t}</text>
          ))}
        </g>
      ))}

      <text x="400" y="168" textAnchor="middle" fill={COLORS.amber} fontSize="8" fontWeight="700">THE CEILING — ABOVE THIS LINE, BETTER WORDING CHANGES NOTHING</text>
      <line x1="30" y1="174" x2="770" y2="174" stroke={COLORS.amber} strokeWidth="1.8" strokeDasharray="7 5" />

      <rect x="30" y="186" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="204" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">INSTRUCTION GAP — THE ONLY ONE PROMPTING FIXES</text>
      <text x="400" y="220" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">the model could do it if it understood what you wanted — here a better prompt is exactly the right tool, and it goes a long way</text>

      <rect x="30" y="248" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="248" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="262" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FIVE SIGNALS YOU HAVE HIT THE CEILING</text>
      {row1.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="276" width={s.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={s.x + s.w / 2} y="291" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{s.t}</text>
        </g>
      ))}
      {row2.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="306" width={s.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={s.x + s.w / 2} y="321" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{s.t}</text>
        </g>
      ))}

      <rect x="30" y="354" width="740" height="72" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="354" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE SKILL UNDERNEATH — SPECIFICATION</text>
      <text x="400" y="392" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">deciding what you want, who it is for, and what good looks like — the same skill as a clear brief or a good delegation</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">interfaces keep getting easier; knowing what you actually want never becomes obsolete</text>

      <rect x="30" y="438" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHEN THE GAP IS NOT INSTRUCTION, THE FIX IS NOT A BETTER PROMPT</text>
      <text x="400" y="475" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">supply the knowledge, switch the tool, or keep the judgement — deciding what you want is the work</text>
    </DiagramFrame>
  );
};

export const DocAnswerTestingDiagram = () => {
  const check1 = [
    'label each case\'s supporting passages once, reuse forever',
    'recall@k — the share of cases with a correct passage',
    'among the k you actually pass to the model',
    'measure at several k — missing and mis-ranked',
    'are different problems with different fixes',
  ];
  const check2 = [
    'split the answer into claims; check each against',
    'the supplied passages — concrete beats holistic',
    'track separately: unsupported additions and',
    'omissions of what the context plainly contained',
  ];
  const traps = [
    { x: 46, w: 222, a: 'unanswerable cases — the only', b: 'correct output admits the gap' },
    { x: 284, w: 222, a: 'near-miss cases — invite', b: 'blending corpus with memory' },
    { x: 522, w: 232, a: 'changed-answer cases — show', b: 'which source it really used' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 458" caption="A wrong grounded answer has two different causes — check whether the right passage was found and whether every claim used it, before reading the end-to-end score.">
      <defs>
        <marker id="arrowDATa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One symptom, two root causes — grade the stages separately</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">either nothing useful was found, or the right passage was found and misused — one number cannot tell you which</text>

      <rect x="30" y="66" width="104" height="36" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="82" y="88" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">question</text>
      <line x1="136" y1="84" x2="154" y2="84" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowDATa)" />
      <rect x="158" y="60" width="150" height="48" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="233" y="79" textAnchor="middle" fill={COLORS.blue} fontSize="8.6" fontWeight="700">RETRIEVAL</text>
      <text x="233" y="93" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2">search the corpus</text>
      <line x1="310" y1="84" x2="328" y2="84" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowDATa)" />
      <rect x="332" y="66" width="120" height="36" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="392" y="82" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">passages</text>
      <text x="392" y="95" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8">the top k found</text>
      <line x1="454" y1="84" x2="472" y2="84" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowDATa)" />
      <rect x="476" y="60" width="150" height="48" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="551" y="79" textAnchor="middle" fill={COLORS.cyan} fontSize="8.6" fontWeight="700">GENERATION</text>
      <text x="551" y="93" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2">answer from them</text>
      <line x1="628" y1="84" x2="646" y2="84" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowDATa)" />
      <rect x="650" y="66" width="120" height="36" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="710" y="88" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">answer</text>

      <line x1="233" y1="108" x2="216" y2="130" stroke={COLORS.blue} strokeWidth="1.3" strokeDasharray="4 3" />
      <line x1="551" y1="108" x2="576" y2="130" stroke={COLORS.cyan} strokeWidth="1.3" strokeDasharray="4 3" />

      <rect x="30" y="132" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="132" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="146" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CHECK 1 — WAS THE RIGHT PASSAGE FOUND?</text>
      {check1.map((t, i) => (
        <text key={i} x="46" y={164 + i * 13} fill={COLORS.slate600} fontSize="7.6">{t}</text>
      ))}
      <text x="46" y="231" fill={COLORS.blue} fontSize="7.6" fontWeight="700">position matters — buried deep is not near the top</text>

      <rect x="410" y="132" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="132" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="146" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CHECK 2 — IS EVERY CLAIM SUPPORTED?</text>
      {check2.map((t, i) => (
        <text key={i} x="426" y={164 + i * 13} fill={COLORS.slate600} fontSize="7.6">{t}</text>
      ))}
      <text x="426" y="218" fill={COLORS.cyan} fontSize="7.6" fontWeight="700">grounded ≠ correct — a faithful answer to a stale</text>
      <text x="426" y="231" fill={COLORS.cyan} fontSize="7.6" fontWeight="700">source is a corpus problem, fixed elsewhere</text>

      <rect x="30" y="256" width="740" height="124" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="256" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="270" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE CHARACTERISTIC FAILURE — FLUENT, PLAUSIBLE, UNSUPPORTED</text>
      <text x="400" y="290" textAnchor="middle" fill={COLORS.slate600} fontSize="8">retrieval found nothing useful, so the model wrote a well-formatted answer from its own knowledge — and it passes a helpfulness rubric</text>
      {traps.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y="300" width={t.w} height="36" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x={t.x + t.w / 2} y="314" textAnchor="middle" fill={COLORS.slate700} fontSize="7.3">{t.a}</text>
          <text x={t.x + t.w / 2} y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="7.3">{t.b}</text>
        </g>
      ))}
      <text x="400" y="360" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">require citations, then verify them mechanically — a citation that does not support its sentence is worse than none</text>

      <rect x="30" y="394" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">GRADE RETRIEVAL AND GENERATION SEPARATELY — THEN REPORT END TO END</text>
      <text x="400" y="431" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the end-to-end number stays the headline; the stage numbers say where the next sprint goes</text>
    </DiagramFrame>
  );
};

export const MultiStepAgentTestingDiagram = () => {
  const steps = [
    { x: 46, c: COLORS.amber, a: 'step 1 — parses the ID', b: 'subtly wrong' },
    { x: 228, c: COLORS.slate400, a: 'step 2 — looks it up', b: 'confident, on a bad premise' },
    { x: 410, c: COLORS.slate400, a: 'step 3 — updates a record', b: 'the wrong one' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Gate agent runs on the final outcome, but assert after every step — late failures have early causes, and only replayable failures become regression cases.">
      <defs>
        <marker id="arrowMATa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The error shows up at the end — the cause lives at the start</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an agent run has an outcome and a trajectory, and grading only one of them misleads in a different way each</text>

      <rect x="30" y="58" width="740" height="124" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PER-STEP ASSERTIONS — FAIL WHERE THE PREMISE BROKE</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="90" width="158" height="36" rx="7" fill={COLORS.slate50} stroke={s.c} strokeWidth="1.5" />
          <text x={s.x + 79} y="104" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{s.a}</text>
          <text x={s.x + 79} y="117" textAnchor="middle" fill={s.c === COLORS.amber ? COLORS.amber : COLORS.slate500} fontSize="6.8">{s.b}</text>
          <line x1={s.x + 162} y1="108" x2={s.x + 178} y2="108" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowMATa)" />
        </g>
      ))}
      <rect x="592" y="90" width="162" height="36" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="673" y="104" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">visible failure</text>
      <text x="673" y="117" textAnchor="middle" fill={COLORS.red} fontSize="6.8">cause: step 1</text>
      <rect x="46" y="136" width="158" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="125" y="150" textAnchor="middle" fill={COLORS.emerald} fontSize="7.2" fontWeight="700">assert here: valid ID?</text>
      <text x="220" y="150" fill={COLORS.emerald} fontSize="7.2" fontWeight="700">→ state what must be true after each step — the run now fails at step 1, not step 3</text>
      <text x="400" y="172" textAnchor="middle" fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">and check the tool calls themselves: right tool, valid arguments, arguments matching what the user actually asked</text>

      <rect x="30" y="196" width="360" height="92" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="196" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="210" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">OUTCOME-ONLY GRADING</text>
      <text x="46" y="228" fill={COLORS.slate600} fontSize="7.6">passes the lucky run — right end state reached</text>
      <text x="46" y="240" fill={COLORS.slate600} fontSize="7.6">through six wasteful calls and one destructive</text>
      <text x="46" y="252" fill={COLORS.slate600} fontSize="7.6">action that happened to be reversible</text>
      <text x="46" y="274" fill={COLORS.red} fontSize="7.8" fontWeight="700">an incident waiting for the luck to run out</text>

      <rect x="410" y="196" width="360" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="196" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="590" y="210" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TRAJECTORY-ONLY GRADING</text>
      <text x="426" y="228" fill={COLORS.slate600} fontSize="7.6">fails the agent that found a better path than</text>
      <text x="426" y="240" fill={COLORS.slate600} fontSize="7.6">the route you imagined when writing the test</text>
      <text x="426" y="274" fill={COLORS.amber} fontSize="7.8" fontWeight="700">punishes improvement for being unfamiliar</text>

      <rect x="30" y="300" width="740" height="28" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="318" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">GATE ON THE OUTCOME — READ THE TRAJECTORY AS DIAGNOSIS, NOT VERDICT</text>

      <rect x="30" y="342" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="342" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="210" y="356" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WORK DONE IS A QUALITY SIGNAL</text>
      <text x="46" y="374" fill={COLORS.slate600} fontSize="7.6">track steps, tool calls, tokens and cost per</text>
      <text x="46" y="386" fill={COLORS.slate600} fontSize="7.6">successful run — a big rise is a regression</text>
      <text x="46" y="398" fill={COLORS.slate600} fontSize="7.6">even when the success rate improved</text>
      <text x="46" y="420" fill={COLORS.cyan} fontSize="7.8" fontWeight="700">read the tail — looping and retrying live there</text>

      <rect x="410" y="342" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="342" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="590" y="356" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CAPTURE ENOUGH TO REPLAY</text>
      <text x="426" y="374" fill={COLORS.slate600} fontSize="7.6">assembled prompts, exact arguments, raw</text>
      <text x="426" y="386" fill={COLORS.slate600} fontSize="7.6">results, model versions, starting state —</text>
      <text x="426" y="398" fill={COLORS.slate600} fontSize="7.6">then fork the trace at the failing step</text>
      <text x="426" y="420" fill={COLORS.blue} fontSize="7.8" fontWeight="700">a failure you cannot replay never becomes a case</text>

      <rect x="30" y="460" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="480" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">GATE ON OUTCOME, ASSERT PER STEP, AND KEEP EVERY REPLAYABLE FAILURE</text>
      <text x="400" y="497" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">an agent eval suite is largely a collection of past failures with assertions attached</text>
    </DiagramFrame>
  );
};
