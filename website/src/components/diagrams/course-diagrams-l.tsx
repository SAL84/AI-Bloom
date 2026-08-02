import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * PRACTITIONER — what to study, how to keep learning, and why vibes
 * stop working once there is more than one of anything
 * ------------------------------------------------------------------ */

export const WhatToStudyDiagram = () => {
  const foundations = [
    { t: 'Statistics', l: ['sampling, uncertainty,', 'what a number can mean'] },
    { t: 'Systems thinking', l: ['how parts interact and', 'where they fail together'] },
    { t: 'Writing clearly', l: ['the bottleneck on every', 'idea you want to land'] },
    { t: 'A real domain', l: ['medicine, law, music —', 'something to apply it to'] }
  ];
  const practices = [
    { x: 166, dx: 160, y: 172, t: 'Debugging — forming and testing a hypothesis' },
    { x: 166, dx: 160, y: 190, t: 'Evaluation — telling better from worse' },
    { x: 410, dx: 404, y: 172, t: 'Working with people — scoping and review' },
    { x: 410, dx: 404, y: 190, t: 'Reading a system you did not write' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Pick subjects from the bottom of the stack, because the top of it is the part you can relearn in a week">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What to study when the tooling keeps changing underneath you</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">three layers, stacked by how long what you learn there stays worth knowing</text>

      <rect x="250" y="58" width="300" height="64" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="250" y="58" width="300" height="24" rx="10" fill={COLORS.amber} />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.white} fontSize="9.8" fontWeight="700">TODAY&apos;S TOOLS AND FRAMEWORKS</text>
      <text x="400" y="95" textAnchor="middle" fill={COLORS.slate700} fontSize="8.6">The current models, libraries, IDEs</text>
      <text x="400" y="106" textAnchor="middle" fill={COLORS.slate700} fontSize="8.6">and agent frameworks of the month</text>
      <text x="400" y="118" textAnchor="middle" fill={COLORS.amber} fontSize="8.2" fontStyle="italic">shortest half-life — expect to replace it</text>
      <text x="240" y="94" textAnchor="end" fill={COLORS.amber} fontSize="8.4" fontWeight="700">FASTEST TO DECAY</text>
      <text x="560" y="94" fill={COLORS.slate500} fontSize="8.4">learn it while you are using it</text>

      <rect x="150" y="130" width="500" height="88" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="150" y="130" width="500" height="24" rx="10" fill={COLORS.blue} />
      <text x="400" y="147" textAnchor="middle" fill={COLORS.white} fontSize="9.8" fontWeight="700">TRANSFERABLE PRACTICES</text>
      {practices.map((p, i) => (
        <g key={i}>
          <circle cx={p.dx} cy={p.y - 3} r="2.5" fill={COLORS.blue} />
          <text x={p.x} y={p.y} fill={COLORS.slate700} fontSize="8.6">{p.t}</text>
        </g>
      ))}
      <text x="400" y="208" textAnchor="middle" fill={COLORS.blue} fontSize="8.2" fontStyle="italic">these transfer across tools, jobs and decades</text>
      <text x="140" y="176" textAnchor="end" fill={COLORS.blue} fontSize="8.4" fontWeight="700">DECAYS SLOWLY</text>
      <text x="660" y="176" fill={COLORS.slate500} fontSize="8.4">practise deliberately</text>

      <rect x="30" y="226" width="740" height="108" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="226" width="740" height="24" rx="10" fill={COLORS.emerald} />
      <text x="400" y="243" textAnchor="middle" fill={COLORS.white} fontSize="9.8" fontWeight="700">DURABLE FOUNDATIONS</text>
      {foundations.map((f, i) => (
        <g key={i}>
          <rect x={44 + i * 178} y="258" width="164" height="60" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={126 + i * 178} y="276" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{f.t}</text>
          {f.l.map((t, j) => (
            <text key={j} x={126 + i * 178} y={292 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
        </g>
      ))}
      <text x="400" y="328" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontStyle="italic">slowest to decay — worth years, not weekends</text>

      <rect x="30" y="346" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="366" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Choose subjects by the bottom of the stack; pick up the top of it as you need it</text>

      <rect x="30" y="390" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="408" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The layer that changes fastest is also the one that is cheapest to relearn</text>
      <text x="400" y="422" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A foundation you cannot look up in an afternoon is the one worth spending years on</text>
      <text x="400" y="456" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Learn the tools on top of something — never instead of something</text>
    </DiagramFrame>
  );
};

export const KeepLearningDiagram = () => {
  const steps = [
    {
      t: 'BUILD SOMETHING SMALL',
      l: ['Small enough to finish this', 'week. A script, a page, a', 'tiny agent with one job.'],
      n: 'scope it to one weekend'
    },
    {
      t: 'HIT A REAL PROBLEM',
      l: ['It breaks, or it is slow, or', 'the output is wrong. Now you', 'have a question worth asking.'],
      n: 'the problem picks the topic'
    },
    {
      t: 'READ NARROWLY',
      l: ['Read only what answers that', 'question — one doc, one paper,', 'one section. Then stop.'],
      n: 'depth beats breadth here'
    },
    {
      t: 'SHARE OR EXPLAIN IT',
      l: ['Write it up, teach someone,', 'or answer the same question', 'for the next person along.'],
      n: 'explaining finds the holes'
    }
  ];
  const chips = ['Watch the tutorial', 'Save the paper', 'Star the repo', 'Read the thread', 'Feel behind'];
  return (
    <DiagramFrame viewBox="0 0 800 438" caption="Reading without building evaporates — a project is what turns what you read into something you keep">
      <defs>
        <marker id="arrowKLD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowKLDloop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How to stay current without trying to read everything</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a loop small enough to actually run, next to the habit that feels like learning and is not</text>

      <text x="30" y="60" fill={COLORS.emerald} fontSize="10" fontWeight="700">THE LOOP THAT COMPOUNDS</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="70" width="176" height="100" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <rect x={30 + i * 188} y="70" width="176" height="24" rx="10" fill={COLORS.emerald} />
          <text x={118 + i * 188} y="87" textAnchor="middle" fill={COLORS.white} fontSize="9.4" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x={40 + i * 188} y={112 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          <text x={118 + i * 188} y="158" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">{s.n}</text>
          {i < 3 && <line x1={208 + i * 188} y1="120" x2={216 + i * 188} y2="120" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowKLD)" />}
        </g>
      ))}
      <path d="M 682 170 L 682 186 L 118 186 L 118 174" fill="none" stroke={COLORS.emerald} strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrowKLDloop)" />
      <text x="400" y="200" textAnchor="middle" fill={COLORS.emerald} fontSize="8.6" fontWeight="700">repeat, with what you now know</text>

      <text x="30" y="226" fill={COLORS.red} fontSize="10" fontWeight="700">THE FAILURE MODE THAT LOOKS EXACTLY LIKE LEARNING</text>
      <rect x="30" y="234" width="740" height="104" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="234" width="740" height="26" rx="10" fill={COLORS.red} />
      <text x="400" y="252" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CONSUMING ENDLESSLY WITHOUT BUILDING ANYTHING</text>
      {chips.map((c, i) => (
        <g key={i}>
          <rect x={50 + i * 144} y="272" width="124" height="26" rx="13" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1" />
          <text x={112 + i * 144} y="289" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4">{c}</text>
          {i < 4 && <line x1={178 + i * 144} y1="285" x2={190 + i * 144} y2="285" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowKLD)" />}
        </g>
      ))}
      <text x="50" y="314" fill={COLORS.slate700} fontSize="8.8">Each item feels like progress, and none of it produces a problem you had to solve,</text>
      <text x="50" y="328" fill={COLORS.slate700} fontSize="8.8">so nothing sticks — and the feed refills faster than any person can read it.</text>

      <rect x="30" y="352" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="370" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Building is what turns reading into something you can still use next month</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">You do not need to keep up with everything — you need one project that keeps asking questions</text>
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Pick the smallest thing you could build this week, and let it tell you what to read</text>
    </DiagramFrame>
  );
};

export const VibesDontScaleDiagram = () => {
  const breaks = [
    { t: 'Cases multiply', l: ['Ten examples you can hold', 'in your head at once. Two', 'hundred of them you cannot.'] },
    { t: 'Memory fades', l: ['You cannot recall how last', "month's version handled", 'this exact awkward input.'] },
    { t: 'Reviewers disagree', l: ['Two people read the same', 'output and rate it', 'differently, with no rubric.'] },
    { t: 'Regressions hide', l: ['A change fixes what you', 'looked at and quietly', 'breaks what you did not.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="Informal judgement is a fine first eval and a terrible fifth one — the crossing arrives sooner than expected">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where &quot;it seems better&quot; stops being an answer</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">what one person can hold in their head is flat; what the system needs checked is not</text>

      <text x="30" y="56" fill={COLORS.slate500} fontSize="8" fontWeight="700">CONFIDENCE</text>
      <rect x="612" y="62" width="158" height="100" rx="8" fill={COLORS.slate50} stroke={COLORS.slate200} strokeWidth="1" />
      <line x1="618" y1="80" x2="636" y2="80" stroke={COLORS.emerald} strokeWidth="2.5" />
      <text x="642" y="76" fill={COLORS.slate700} fontSize="8.2">What informal</text>
      <text x="642" y="87" fill={COLORS.slate700} fontSize="8.2">judgement covers</text>
      <line x1="618" y1="110" x2="636" y2="110" stroke={COLORS.blue} strokeWidth="2.5" />
      <text x="642" y="106" fill={COLORS.slate700} fontSize="8.2">What you need to</text>
      <text x="642" y="117" fill={COLORS.slate700} fontSize="8.2">know to be sure</text>
      <circle cx="627" cy="140" r="5" fill={COLORS.amber} />
      <text x="642" y="137" fill={COLORS.slate700} fontSize="8.2">Where vibes stop</text>
      <text x="642" y="148" fill={COLORS.slate700} fontSize="8.2">being enough</text>

      <line x1="80" y1="66" x2="80" y2="200" stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="80" y1="200" x2="600" y2="200" stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="74" y="70" textAnchor="end" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">HIGH</text>
      <text x="74" y="202" textAnchor="end" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">LOW</text>
      <polyline points="80,86 145,88 210,94 275,112 340,140 405,166 470,182 535,190 600,194" fill="none" stroke={COLORS.emerald} strokeWidth="2.5" />
      <polyline points="80,180 145,172 210,158 275,136 340,112 405,92 470,80 535,74 600,70" fill="none" stroke={COLORS.blue} strokeWidth="2.5" />
      <line x1="305" y1="130" x2="305" y2="200" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="305" cy="125" r="5" fill={COLORS.amber} />
      <text x="120" y="130" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">vibes are fine here</text>
      <text x="400" y="145" fill={COLORS.red} fontSize="8.4" fontWeight="700">and not fine here</text>
      <text x="90" y="214" fill={COLORS.slate500} fontSize="8">a handful</text>
      <text x="598" y="214" textAnchor="end" fill={COLORS.slate500} fontSize="8">hundreds</text>
      <text x="340" y="230" textAnchor="middle" fill={COLORS.slate500} fontSize="8.6">cases, users, reviewers and weeks — all of them going up</text>

      <text x="30" y="240" fill={COLORS.red} fontSize="10" fontWeight="700">WHAT BREAKS</text>
      {breaks.map((b, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="244" width="176" height="76" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <text x={118 + i * 188} y="264" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{b.t}</text>
          {b.l.map((t, j) => (
            <text key={j} x={40 + i * 188} y={282 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="332" width="740" height="32" rx="8" fill={COLORS.blue} />
      <text x="400" y="352" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Past the crossing you are not comparing systems any more, you are comparing memories</text>

      <rect x="30" y="376" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="394" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The crossing is not a milestone you notice — it is one you find out you passed</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Write the handful of cases down while they still fit in your head, and score them the same way twice</text>
      <text x="400" y="442" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The moment two people disagree about whether it improved, you needed a number yesterday</text>
    </DiagramFrame>
  );
};

export const CostOfNoEvalsDiagram = () => {
  const costs = [
    {
      t: 'SHIPPED REGRESSIONS',
      l: ['The change looked fine to', 'you, so out it went. A', 'user found what you did', 'not, and said so publicly.']
    },
    {
      t: 'NO WAY TO COMPARE',
      l: ['Two candidate prompts.', 'Both look plausible. You', 'pick the one you wrote', 'most recently.']
    },
    {
      t: 'WHACK-A-MOLE FIXES',
      l: ['You patch the one case in', 'front of you and break', 'three you are not looking', 'at. Nobody notices.']
    },
    {
      t: 'STUCK ON OLD MODELS',
      l: ['A newer model is out. You', 'cannot show it is better', 'for your task, so you do', 'not make the case.']
    },
    {
      t: 'SLOW, FEARFUL RELEASES',
      l: ['Every release is a guess,', 'so it needs a meeting, a', 'sign-off and a person', 'watching it all night.']
    }
  ];
  const buys = [
    { t: 'Catch it before users do', l: ['A failing case blocks the', 'release instead of turning', 'up later as a complaint.'] },
    { t: 'Compare two candidates', l: ['Same cases, same scoring.', 'The better one wins on the', 'number, not on who asked.'] },
    { t: 'See the side effects', l: ['The fix that breaks three', 'other cases shows up in', 'the very same run.'] },
    { t: 'Justify the upgrade', l: ['A score on your own task', 'is the argument. Vendor', 'benchmarks are not.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 424" caption="Five separate-looking problems, one root cause — none of them can be fixed without measuring something">
      <defs>
        <marker id="arrowCNE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What an eval gap actually costs you</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">five symptoms that get treated separately and all trace back to the same missing thing</text>

      {costs.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 150} y="56" width="140" height="80" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <rect x={30 + i * 150} y="56" width="140" height="24" rx="10" fill={COLORS.red} />
          <text x={100 + i * 150} y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.8" fontWeight="700">{c.t}</text>
          {c.l.map((t, j) => (
            <text key={j} x={40 + i * 150} y={94 + j * 11} fill={COLORS.slate600} fontSize="7.8">{t}</text>
          ))}
          <line x1={100 + i * 150} y1="138" x2={400 - (2 - i) * 26} y2="170" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowCNE)" />
        </g>
      ))}

      <rect x="200" y="176" width="400" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="198" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">ONE MISSING CAPABILITY: MEASUREMENT</text>
      <text x="400" y="216" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">no repeatable way to say whether a change made it better or worse</text>

      <text x="30" y="250" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT EVEN A MINIMAL EVAL SUITE BUYS BACK</text>
      {buys.map((b, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="258" width="176" height="68" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <text x={118 + i * 188} y="278" textAnchor="middle" fill={COLORS.emerald} fontSize="9.4" fontWeight="700">{b.t}</text>
          {b.l.map((t, j) => (
            <text key={j} x={40 + i * 188} y={295 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="338" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="356" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Every one of those five costs is the same missing thing wearing a different face</text>
      <text x="400" y="370" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">You are not slow because the work is hard — you are slow because nothing tells you it is safe</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The cheapest eval suite is twenty cases and a spreadsheet, and it still beats an opinion</text>
    </DiagramFrame>
  );
};
