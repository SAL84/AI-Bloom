import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE — confident falsehoods, the honesty line, skills
 * ------------------------------------------------------------------ */

export const WhyItMakesThingsUpDiagram = () => {
  const lanes = [
    {
      x: 30,
      c: COLORS.emerald,
      h: 'FLUENT — AND IT HAPPENS TO BE RIGHT',
      q: '“Canberra is the capital of Australia.”',
      n: ['The likely continuation also matched', 'the way the world actually is.'],
      v: 'Right by overlap, not by checking'
    },
    {
      x: 410,
      c: COLORS.red,
      h: 'FLUENT — AND IT IS SIMPLY WRONG',
      q: '“Her second novel opens with that line.”',
      n: ['The likely continuation had nothing', 'real sitting behind it this time.'],
      v: 'Wrong, and worded exactly the same'
    }
  ];
  const tells = [
    { t: 'Check it elsewhere', a: 'against something that is', b: 'not the same model' },
    { t: 'Ask for the source', a: 'then actually open it — a', b: 'link can be invented too' },
    { t: 'Notice the topic', a: 'niche, recent or very exact', b: 'facts are the risky ones' },
    { t: 'Treat tone as style', a: 'confidence and hedging are', b: 'writing choices, not proof' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="Nothing in how an answer is worded tells you whether it is true — the wording was chosen by the same process either way">
      <defs>
        <marker id="arrowWIM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why it says wrong things so convincingly</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the confident tone is not evidence — it is just how the words came out</text>

      <rect x="280" y="52" width="240" height="36" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="600">You ask it a question</text>
      <line x1="400" y1="90" x2="400" y2="102" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowWIM)" />

      <rect x="150" y="104" width="500" height="70" rx="10" fill={COLORS.slate700} />
      <text x="400" y="128" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">It picks a likely next piece, then another, then another</text>
      <text x="400" y="148" textAnchor="middle" fill={COLORS.white} fontSize="9.4" opacity="0.9">There is no separate step where it checks whether what it is saying is true,</text>
      <text x="400" y="163" textAnchor="middle" fill={COLORS.white} fontSize="9.4" opacity="0.9">and no internal flag that lights up when it has started guessing</text>

      <path d="M 400 176 L 400 186 M 210 186 L 590 186" fill="none" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="210" y1="186" x2="210" y2="196" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowWIM)" />
      <line x1="590" y1="186" x2="590" y2="196" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowWIM)" />

      {lanes.map((l, i) => (
        <g key={i}>
          <rect x={l.x} y="200" width="360" height="142" rx="10" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <rect x={l.x} y="200" width="360" height="28" rx="10" fill={l.c} />
          <text x={l.x + 180} y="219" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{l.h}</text>
          <text x={l.x + 180} y="248" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="600">{l.q}</text>
          <text x={l.x + 180} y="270" textAnchor="middle" fill={COLORS.slate600} fontSize="9.4">{l.n[0]}</text>
          <text x={l.x + 180} y="284" textAnchor="middle" fill={COLORS.slate600} fontSize="9.4">{l.n[1]}</text>
          <text x={l.x + 180} y="303" textAnchor="middle" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">CONFIDENCE IN THE WORDING</text>
          <rect x={l.x + 40} y="309" width="280" height="11" rx="5.5" fill={COLORS.amber} />
          <text x={l.x + 180} y="335" textAnchor="middle" fill={l.c} fontSize="9.6" fontWeight="700">{l.v}</text>
        </g>
      ))}

      <rect x="30" y="352" width="740" height="32" rx="8" fill={COLORS.slate900} />
      <text x="400" y="373" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Same process, same tone, same certainty — the difference is not visible in the text</text>

      <text x="30" y="402" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT ACTUALLY TELLS YOU WHICH ONE YOU GOT</text>
      {tells.map((t, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="410" width="176" height="62" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <text x={118 + i * 188} y="430" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{t.t}</text>
          <text x={118 + i * 188} y="447" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{t.a}</text>
          <text x={118 + i * 188} y="459" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{t.b}</text>
        </g>
      ))}
      <text x="400" y="492" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">There is no moment where it knows the answer and decides to give you a different one</text>
    </DiagramFrame>
  );
};

export const AcademicHonestyLineDiagram = () => {
  const steps = [
    { tag: 'FINE', c: COLORS.emerald, t1: 'Explaining', t2: 'a concept', s: ['you still do the', 'thinking afterwards'] },
    { tag: 'FINE', c: COLORS.emerald, t1: 'Checking your', t2: 'reasoning', s: ['it finds the gap —', 'you go and fix it'] },
    { tag: 'USUALLY FINE', c: COLORS.amber, t1: 'Suggesting', t2: 'a structure', s: ['the shape is a hint,', 'the content is yours'] },
    { tag: 'GREY AREA', c: COLORS.amber, t1: 'Rewriting your', t2: 'sentences', s: ['your ideas start', 'sounding like its voice'] },
    { tag: 'NOT YOURS', c: COLORS.red, t1: 'Writing it', t2: 'for you', s: ['the work is not', 'yours in any sense'] }
  ];
  const moves = [
    'The teacher, and what they have already said',
    'The subject, and what the task is testing',
    'Whether the process is the point, or the output',
    'What the brief asks you to actually show'
  ];
  const cost = [
    'Getting caught is the small risk, and not the point.',
    'The real cost is that the skill never arrives.',
    'The work gets handed in either way — only one version',
    'leaves you able to do the next one on your own.'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 412" caption="The useful test is not what a rule says — it is whether you could sit down tomorrow and do the same thing unaided">
      <defs>
        <linearGradient id="gradAHL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="50%" stopColor={COLORS.amber} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where the line sits in schoolwork</text>
      <text x="400" y="38" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same tool, five different amounts of help</text>

      <rect x="30" y="48" width="740" height="20" rx="10" fill="url(#gradAHL)" />
      <text x="46" y="62" fill={COLORS.white} fontSize="9" fontWeight="700">CLEARLY FINE</text>
      <text x="754" y="62" textAnchor="end" fill={COLORS.white} fontSize="9" fontWeight="700">CLEARLY CHEATING</text>

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 150} y="88" width="140" height="152" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 150} y="88" width="140" height="24" rx="10" fill={s.c} />
          <text x={100 + i * 150} y="105" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{s.tag}</text>
          <text x={100 + i * 150} y="136" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{s.t1}</text>
          <text x={100 + i * 150} y="152" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{s.t2}</text>
          <line x1={42 + i * 150} y1="166" x2={158 + i * 150} y2="166" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={100 + i * 150} y="184" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{s.s[0]}</text>
          <text x={100 + i * 150} y="196" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{s.s[1]}</text>
          <text x={100 + i * 150} y="222" textAnchor="middle" fill={s.c} fontSize="9" fontWeight="700">{i + 1}</text>
        </g>
      ))}

      <line x1="475" y1="76" x2="475" y2="252" stroke={COLORS.red} strokeWidth="2" strokeDasharray="6 4" />
      <text x="475" y="266" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">WHERE THE LINE USUALLY FALLS</text>

      <rect x="30" y="284" width="360" height="92" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="284" width="360" height="26" rx="10" fill={COLORS.amber} />
      <text x="210" y="302" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BUT IT MOVES, DEPENDING ON</text>
      {moves.map((m, i) => (
        <g key={i}>
          <circle cx="48" cy={319 + i * 16} r="2.5" fill={COLORS.amber} />
          <text x="60" y={322 + i * 16} fill={COLORS.slate700} fontSize="9.4">{m}</text>
        </g>
      ))}

      <rect x="410" y="284" width="360" height="92" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="284" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="302" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE ACTUAL COST OF CROSSING IT</text>
      {cost.map((c, i) => (
        <text key={i} x="426" y={324 + i * 16} fill={COLORS.slate700} fontSize="9.4">{c}</text>
      ))}
      <text x="400" y="398" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">If you cannot explain and defend it out loud tomorrow, it is not your work yet</text>
    </DiagramFrame>
  );
};

export const SkillsShiftDiagram = () => {
  const cols = [
    {
      x: 30, c: COLORS.emerald, h: 'WORTH MORE', s: 'harder to hand over',
      items: [
        { t: 'Judgement', d: 'deciding what is worth doing at all' },
        { t: 'Verification', d: 'checking a claim against something real' },
        { t: 'Asking good questions', d: 'a vague ask gets a vague answer' },
        { t: 'Domain depth', d: 'you cannot check what you do not know' },
        { t: 'Working with people', d: 'trust, disagreement, persuasion, care' }
      ],
      n: ['These are the parts that decide', 'whether the output is any good']
    },
    {
      x: 280, c: COLORS.amber, h: 'CHANGED, NOT GONE', s: 'same job, new centre of gravity',
      items: [
        { t: 'Writing', d: 'drafting is quick — deciding is not' },
        { t: 'Research', d: 'finding is easy — judging is not' },
        { t: 'Making things', d: 'more output, and more reviewing' },
        { t: 'Learning a subject', d: 'quick to start, easy to fool yourself' }
      ],
      n: ['The mechanics move; the taste', 'and the standards stay with you']
    },
    {
      x: 530, c: COLORS.slate500, h: 'WORTH LESS', s: 'easy to hand over',
      items: [
        { t: 'Routine drafting', d: 'the first pass at ordinary text' },
        { t: 'Rote recall', d: 'holding facts you could look up' },
        { t: 'Mechanical formatting', d: 'tidying, converting, reshaping' }
      ],
      n: ['Still worth being able to do —', 'just no longer what you sell']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 474" caption="Every skill in the rising column is one you need in order to check the falling ones — that is not a coincidence">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Which of your skills gain, and which quietly lose value</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">no dates and no predictions — just the direction things have been moving</text>

      {cols.map((col, i) => (
        <g key={i}>
          <rect x={col.x} y="52" width="240" height="340" rx="10" fill={COLORS.white} stroke={col.c} strokeWidth="2" />
          <rect x={col.x} y="52" width="240" height="30" rx="10" fill={col.c} />
          <text x={col.x + 120} y="72" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{col.h}</text>
          <text x={col.x + 120} y="98" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">{col.s}</text>
          {col.items.map((it, j) => (
            <g key={j}>
              <rect x={col.x + 14} y={110 + j * 48} width="4" height="34" rx="2" fill={col.c} />
              <text x={col.x + 26} y={126 + j * 48} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{it.t}</text>
              <text x={col.x + 26} y={141 + j * 48} fill={COLORS.slate600} fontSize="8.7">{it.d}</text>
            </g>
          ))}
          <line x1={col.x + 16} y1="348" x2={col.x + 224} y2="348" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={col.x + 120} y="366" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6" fontStyle="italic">{col.n[0]}</text>
          <text x={col.x + 120} y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6" fontStyle="italic">{col.n[1]}</text>
        </g>
      ))}

      <rect x="30" y="404" width="740" height="36" rx="10" fill={COLORS.slate900} />
      <text x="400" y="427" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The pattern is not about speed — it is about which half of the work still needs you inside it</text>
      <text x="400" y="462" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Nothing in the right-hand column is useless — it is just no longer the thing you get hired for</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — reading benchmarks, and what an eval asks
 * ------------------------------------------------------------------ */

export const BenchmarkHonestyDiagram = () => {
  const cards = [
    {
      c: COLORS.red, t: 'Contamination', s: 'did it see the test already?',
      l: ['Public test items get', 'scraped into training sets.', 'Then the score measures', 'memory, not capability.'],
      ask: 'Was anything held out?'
    },
    {
      c: COLORS.amber, t: 'Narrow coverage', s: 'one task, one shape',
      l: ['Often one format, one', 'language, one length.', 'Strong here says little', 'about anything else.'],
      ask: 'What is not tested?'
    },
    {
      c: COLORS.amber, t: 'Saturation', s: 'crowded at the ceiling',
      l: ['Near the top, the gaps', 'between models shrink', 'into noise — and the last', 'items are often wrong.'],
      ask: 'Is there headroom left?'
    },
    {
      c: COLORS.blue, t: 'Construct gap', s: 'their task, not yours',
      l: ['The benchmark measures', 'its own task. Yours has', 'your data, your users and', 'your cost of failure.'],
      ask: 'Is this even my task?'
    }
  ];
  const dos = [
    { t: 'Read it as a ceiling', a: 'it hints at what is possible,', b: 'not at what you will get' },
    { t: 'Build a small set of your own', a: 'real cases from your own users beat', b: 'any row on a public leaderboard' },
    { t: 'Re-run it on every change', a: 'your set is the only one that moves', b: 'when your system actually moves' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="A leaderboard tells you something about the leaderboard — only your own cases tell you about your own system">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Reading a public benchmark without being fooled by it</text>

      <rect x="30" y="48" width="740" height="52" rx="10" fill={COLORS.slate700} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">A headline result: the new model tops a well-known public benchmark</text>
      <text x="400" y="90" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">Before you conclude anything about your own system, four questions stand in the way</text>

      {cards.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="112" width="176" height="176" rx="10" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={30 + i * 188} y="112" width="176" height="28" rx="10" fill={c.c} />
          <text x={118 + i * 188} y="131" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{c.t}</text>
          <text x={118 + i * 188} y="154" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{c.s}</text>
          {c.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={174 + j * 15} fill={COLORS.slate700} fontSize="8.6">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="238" x2={194 + i * 188} y2="238" stroke={COLORS.slate200} strokeWidth="1" />
          <rect x={40 + i * 188} y="248" width="156" height="22" rx="11" fill={COLORS.slate100} stroke={c.c} strokeWidth="1" />
          <text x={118 + i * 188} y="263" textAnchor="middle" fill={c.c} fontSize="8.2" fontWeight="700">{c.ask}</text>
        </g>
      ))}

      <rect x="30" y="300" width="740" height="34" rx="8" fill={COLORS.amber} />
      <text x="400" y="322" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">None of this makes a benchmark useless — it makes it a weak proxy for your case</text>

      <rect x="30" y="346" width="740" height="96" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.emerald} fontSize="10.5" fontWeight="700">WHAT TO DO WITH THE NUMBER INSTEAD</text>
      {dos.map((d, i) => (
        <g key={i}>
          <rect x={42 + i * 242} y="378" width="230" height="56" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={157 + i * 242} y="398" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{d.t}</text>
          <text x={157 + i * 242} y="413" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{d.a}</text>
          <text x={157 + i * 242} y="425" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{d.b}</text>
        </g>
      ))}
      <text x="400" y="464" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A public score is an exam someone else set — your own small eval set is the one graded on your work</text>
    </DiagramFrame>
  );
};

export const TaskVsQualityMetricsDiagram = () => {
  const lanes = [
    {
      x: 30, c: COLORS.blue, h: 'DID IT COMPLETE THE TASK?', s: 'an outcome you can recompute',
      checks: ['Did it return the expected structure?', 'Was the right tool called, with the right input?', 'Did the record actually get created?', 'Did it finish inside the time budget?'],
      inst: 'Assertions, schema checks, exit codes, replayed traces',
      shape: 'Pass or fail, or a score anyone can recompute'
    },
    {
      x: 410, c: COLORS.cyan, h: 'WAS THE OUTPUT ANY GOOD?', s: 'a judgement someone has to make',
      checks: ['Is the summary faithful to the source?', 'Is the tone right for the person reading it?', 'Is the answer useful, not just correct?', 'Would a reviewer be happy to send this out?'],
      inst: 'A written rubric, human raters, or a model acting as judge',
      shape: 'A graded judgement, only as good as rater agreement'
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Two questions, two instruments — blend them into one number and you can no longer tell which half broke">
      <defs>
        <marker id="arrowTQM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Task completion and output quality are not the same measurement</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">one run, two questions, and two entirely different sets of instruments</text>

      <rect x="250" y="52" width="300" height="34" rx="8" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">One run of the system</text>
      <path d="M 400 88 L 400 94 M 210 94 L 590 94" fill="none" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="210" y1="94" x2="210" y2="102" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowTQM)" />
      <line x1="590" y1="94" x2="590" y2="102" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowTQM)" />

      {lanes.map((l, i) => (
        <g key={i}>
          <rect x={l.x} y="104" width="360" height="232" rx="10" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <rect x={l.x} y="104" width="360" height="28" rx="10" fill={l.c} />
          <text x={l.x + 180} y="123" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{l.h}</text>
          <text x={l.x + 180} y="150" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">{l.s}</text>
          <text x={l.x + 16} y="172" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">TYPICAL CHECKS</text>
          {l.checks.map((t, j) => (
            <g key={j}>
              <circle cx={l.x + 22} cy={185 + j * 17} r="2.5" fill={l.c} />
              <text x={l.x + 32} y={188 + j * 17} fill={COLORS.slate700} fontSize="9.4">{t}</text>
            </g>
          ))}
          <line x1={l.x + 16} y1="252" x2={l.x + 344} y2="252" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={l.x + 16} y="268" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">INSTRUMENTATION</text>
          <text x={l.x + 16} y="282" fill={COLORS.slate700} fontSize="9.4">{l.inst}</text>
          <text x={l.x + 16} y="300" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">SHAPE OF THE ANSWER</text>
          <text x={l.x + 16} y="314" fill={COLORS.slate700} fontSize="9.4">{l.shape}</text>
        </g>
      ))}

      <rect x="30" y="350" width="740" height="32" rx="8" fill={COLORS.red} />
      <text x="400" y="371" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Report them as one blended number and both of these failures vanish into the average</text>

      <rect x="30" y="392" width="360" height="62" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="46" y="412" fill={COLORS.amber} fontSize="10" fontWeight="700">COMPLETED, AND STILL BAD</text>
      <text x="46" y="430" fill={COLORS.slate700} fontSize="9.4">Every assertion green. The answer was fluent, confidently</text>
      <text x="46" y="444" fill={COLORS.slate700} fontSize="9.4">wrong, and nothing in the suite was grading that at all.</text>

      <rect x="410" y="392" width="360" height="62" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="426" y="412" fill={COLORS.amber} fontSize="10" fontWeight="700">GOOD, AND STILL FAILED</text>
      <text x="426" y="430" fill={COLORS.slate700} fontSize="9.4">The text was excellent and the rubric loved it. The tool</text>
      <text x="426" y="444" fill={COLORS.slate700} fontSize="9.4">call never fired, so nothing ever reached the user.</text>

      <text x="400" y="478" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Instrument them separately, report them separately, and let each one fail on its own terms</text>
    </DiagramFrame>
  );
};
