import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULE 2: CONTEXT ENGINEERING ============ */

export const ContextAssemblyDiagram = () => {
  const bars = [70, 100, 130, 160, 190, 224];
  const parts = ['goal', 'history', 'scratchpad', 'retrieved', 'budget'];
  return (
    <DiagramFrame viewBox="0 0 800 410" caption="If you cannot print a step's exact context without re-running the agent, it is accumulating rather than being assembled">
      <defs>
        <marker id="arrowCAa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Context is assembled, not accumulated</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">build each call's context fresh from run state — not whatever the transcript has grown into</text>

      <rect x="30" y="58" width="260" height="248" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="260" height="24" rx="10" fill={COLORS.red} />
      <text x="160" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">ACCUMULATION</text>
      <text x="244" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="7">limit</text>
      <line x1="244" y1="96" x2="244" y2="186" stroke={COLORS.slate400} strokeWidth="1" strokeDasharray="3 3" />
      {bars.map((w, i) => (
        <rect key={i} x="44" y={98 + i * 15} width={w} height="9" rx="3" fill={i === bars.length - 1 ? COLORS.red : COLORS.slate300} />
      ))}
      <text x="44" y="206" fill={COLORS.slate600} fontSize="8.3">appended to since the run began,</text>
      <text x="44" y="220" fill={COLORS.slate600} fontSize="8.3">trimmed only when something overflows —</text>
      <text x="44" y="234" fill={COLORS.slate600} fontSize="8.3">what to leave out is never decided</text>
      <text x="160" y="258" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontStyle="italic">omission decisions, quietly deferred</text>
      <text x="160" y="272" textAnchor="middle" fill={COLORS.slate500} fontSize="8">where agents drift into trouble</text>

      {parts.map((p, i) => {
        const x = 316 + i * 90;
        return (
          <g key={i}>
            <rect x={x} y="66" width="84" height="24" rx="12" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
            <text x={x + 42} y="82" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{p}</text>
            <line x1={x + 42} y1="92" x2={470 + i * 45} y2="132" stroke={COLORS.blue} strokeWidth="1.2" markerEnd="url(#arrowCAa)" />
          </g>
        );
      })}
      <rect x="448" y="136" width="224" height="56" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="560" y="158" textAnchor="middle" fill={COLORS.blue} fontSize="10" fontWeight="700">assemble(run state)</text>
      <text x="560" y="174" textAnchor="middle" fill={COLORS.slate600} fontSize="8">a pure function — testable, versioned</text>
      <line x1="560" y1="194" x2="560" y2="214" stroke={COLORS.blue} strokeWidth="1.2" markerEnd="url(#arrowCAa)" />
      <rect x="385" y="218" width="350" height="52" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="560" y="239" textAnchor="middle" fill={COLORS.emerald} fontSize="9.5" fontWeight="700">the exact message list for this call</text>
      <text x="560" y="255" textAnchor="middle" fill={COLORS.slate600} fontSize="8.3">every section present on purpose, sized and ordered</text>

      <rect x="30" y="322" width="740" height="56" rx="10" fill={COLORS.slate900} />
      <text x="400" y="344" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE MATURITY BENCHMARK</text>
      <text x="400" y="362" textAnchor="middle" fill={COLORS.white} fontSize="9.4" opacity="0.9">Print the exact context for step nine of a stored run without executing anything, and say why each section is present</text>
    </DiagramFrame>
  );
};

export const ContextCurationDiagram = () => {
  const claimants = [
    {
      c: COLORS.blue, h: 'SYSTEM INSTRUCTIONS', v: 'earn place by changing behaviour',
      l: ['paragraphs added after one bad', 'output have usually never been', 'shown to change anything'],
    },
    {
      c: COLORS.amber, h: 'TOOL DEFINITIONS', v: 'a recurring charge, every step',
      l: ['every name, description and', 'schema is re-sent each call —', 'an unused tool is pure overhead'],
    },
    {
      c: COLORS.cyan, h: 'RETRIEVED MATERIAL', v: 'scope to the step, not the task',
      l: ['fetch what this step needs;', 're-fetching often beats carrying', 'a document through twenty calls'],
    },
    {
      c: COLORS.red, h: 'HISTORY', v: 'accumulates by default',
      l: ['the section most in need of a', 'policy — raw history is the', 'lowest information density'],
    },
    {
      c: COLORS.emerald, h: 'SCRATCHPAD', v: 'best value per token',
      l: ['the distilled working state —', 'and the most neglected section', 'in most agents'],
    },
    {
      c: COLORS.blue, h: 'CURRENT OBSERVATIONS', v: 'the point of the loop',
      l: ['what just happened is what the', 'next action turns on — keep it', 'adjacent to generation'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 452" caption="Every section must justify itself per step against one question — does the model need this to choose the next action">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What earns its place in the window</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">six claimants compete for tokens, and each has to justify itself differently</text>

      <rect x="30" y="54" width="740" height="30" rx="8" fill={COLORS.slate900} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">THE PER-STEP TEST — does the model need this to choose the next action?</text>

      {claimants.map((cl, i) => {
        const x = 30 + (i % 3) * 252;
        const y = 96 + Math.floor(i / 3) * 130;
        return (
          <g key={i}>
            <rect x={x} y={y} width="236" height="118" rx="9" fill={COLORS.white} stroke={cl.c} strokeWidth="2" />
            <rect x={x} y={y} width="236" height="22" rx="9" fill={cl.c} />
            <text x={x + 118} y={y + 15} textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{cl.h}</text>
            <text x={x + 12} y={y + 40} fill={cl.c} fontSize="8.8" fontWeight="700">{cl.v}</text>
            {cl.l.map((t, j) => (
              <text key={j} x={x + 12} y={y + 58 + j * 13} fill={COLORS.slate600} fontSize="8.3">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="362" width="740" height="56" rx="10" fill={COLORS.slate900} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HISTORY GETS A POLICY, NOT A DEFAULT</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">Recent turns verbatim · older results distilled to outcome and identifiers · failures compressed to the lesson they taught</text>
    </DiagramFrame>
  );
};

export const ContextOrderingDiagram = () => {
  const zones = [
    {
      y: 66, h: 84, c: COLORS.emerald, t: 'STABLE OPENING',
      l: ['system instructions,', 'run-wide constraints'], gy: 100, gw: 64,
    },
    {
      y: 150, h: 140, c: COLORS.amber, t: 'THE MIDDLE',
      l: ['background documents,', 'older history — bulk you', 'are not relying on'], gy: 214, gw: 18,
    },
    {
      y: 290, h: 86, c: COLORS.emerald, t: 'THE END',
      l: ['next-action material,', 'restated constraints'], gy: 327, gw: 60,
    },
  ];
  const cards = [
    {
      y: 64, c: COLORS.blue, t: 'PUT EARLY — the layer that governs the whole run',
      l: ['the constraint that holds for the entire run is', 'stated here, in the stable opening region the', 'model uses reliably'],
    },
    {
      y: 172, c: COLORS.amber, t: 'THE MIDDLE — only what can afford to be ignored',
      l: ['degradation here is tolerable because nothing', 'critical depends on it — a key constraint buried', 'mid-context fails intermittently, the worst way'],
    },
    {
      y: 280, c: COLORS.emerald, t: 'PUT LAST — beside where generation begins',
      l: ['the material that governs the next action, plus', 'hard constraints restated each step — short, and', 'rendered from run state so they cannot drift'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Run-wide constraints go early, next-action material and restated constraints go last, and the middle gets only what can afford to be ignored">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Position is not neutral</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">models attend unevenly — beginning and end are used reliably; the middle is where material goes to be ignored</text>

      <text x="160" y="60" textAnchor="middle" fill={COLORS.slate400} fontSize="7.5" fontWeight="700">THE ASSEMBLED CONTEXT</text>
      <text x="296" y="60" textAnchor="middle" fill={COLORS.slate400} fontSize="7.5" fontWeight="700">ATTENTION</text>
      {zones.map((z, i) => (
        <g key={i}>
          <rect x="70" y={z.y} width="180" height={z.h} fill={z.c} fillOpacity={z.c === COLORS.amber ? 0.12 : 0.14} stroke={z.c} strokeWidth="1.5" />
          <text x="160" y={z.y + 24} textAnchor="middle" fill={z.c} fontSize="8.8" fontWeight="700">{z.t}</text>
          {z.l.map((t, j) => (
            <text key={j} x="160" y={z.y + 40 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">{t}</text>
          ))}
          <rect x="260" y={z.gy} width="72" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="260" y={z.gy} width={z.gw} height="8" rx="4" fill={z.c} />
          <line x1="334" y1={z.gy + 4} x2="350" y2={cards[i].y + 48} stroke={COLORS.slate300} strokeWidth="1" />
        </g>
      ))}

      {cards.map((cd, i) => (
        <g key={i}>
          <rect x="350" y={cd.y} width="420" height="96" rx="9" fill={COLORS.white} stroke={cd.c} strokeWidth="2" />
          <rect x="350" y={cd.y} width="6" height="96" rx="3" fill={cd.c} />
          <text x="368" y={cd.y + 22} fill={cd.c} fontSize="9.2" fontWeight="700">{cd.t}</text>
          {cd.l.map((t, j) => (
            <text key={j} x="368" y={cd.y + 40 + j * 14} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="392" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">REDUNDANCY IS THE POINT</text>
      <text x="400" y="432" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">A constraint written once at the top must survive a context ten times longer than the one it was stated into</text>
    </DiagramFrame>
  );
};

export const ContextCompactionDiagram = () => {
  const schemaL = [
    'goal as currently understood',
    'decisions taken, with reasons',
    'constraints still in force',
    'identifiers touched exactly',
  ];
  const schemaR = [
    'open questions',
    'approaches tried and rejected',
    'current state of the artefact',
  ];
  const failure = [
    'the run continues confidently, a constraint',
    'or a decision silently gone, and produces',
    'work that contradicts something agreed',
    'twenty steps earlier',
  ];
  const sections = [
    { c: COLORS.cyan, t: 'OLD TOOL OUTPUT', l: ['compress aggressively —', 'little of value is lost'] },
    { c: COLORS.emerald, t: 'DECISIONS + CONSTRAINTS', l: ['carry forward verbatim,', 'never through a summariser'] },
    { c: COLORS.blue, t: 'DERIVED RUN STATE', l: ['regenerated at each', 'assembly — not compacted'] },
    { c: COLORS.amber, t: 'NARRATIVE MIDDLE', l: ['the only part that needs', 'and survives compression'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 464" caption="Compact into a schema you can validate and diff, carry decisions verbatim, and test that a resumed run makes the same next decision">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Compaction is a protocol, not a summary</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">when history no longer fits, what you carry forward decides whether the run keeps its thread</text>

      <rect x="30" y="56" width="360" height="180" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="210" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FREE-TEXT SUMMARY, THEN CONTINUE</text>
      <text x="44" y="98" fill={COLORS.slate600} fontSize="8.4">ask a model to summarise the conversation</text>
      <text x="44" y="111" fill={COLORS.slate600} fontSize="8.4">and resume from the paragraph it wrote</text>
      <rect x="44" y="122" width="332" height="100" rx="8" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="56" y="140" fill={COLORS.red} fontSize="8.6" fontWeight="700">THE CHARACTERISTIC FAILURE</text>
      {failure.map((t, i) => (
        <text key={i} x="56" y={156 + i * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}

      <rect x="410" y="56" width="360" height="180" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="590" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EXTRACT INTO A SCHEMA INSTEAD</text>
      {schemaL.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={99 + i * 16} r="2.5" fill={COLORS.emerald} />
          <text x="438" y={102 + i * 16} fill={COLORS.slate700} fontSize="8.2">{t}</text>
        </g>
      ))}
      {schemaR.map((t, i) => (
        <g key={i}>
          <circle cx="598" cy={99 + i * 16} r="2.5" fill={COLORS.emerald} />
          <text x="608" y={102 + i * 16} fill={COLORS.slate700} fontSize="8.2">{t}</text>
        </g>
      ))}
      <line x1="424" y1="170" x2="756" y2="170" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="590" y="190" textAnchor="middle" fill={COLORS.emerald} fontSize="8.6" fontWeight="700">filling a schema beats writing a good summary</text>
      <text x="590" y="205" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">validate it, diff it across compactions, show a human</text>

      <rect x="30" y="252" width="740" height="96" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="252" width="740" height="24" rx="10" fill={COLORS.blue} />
      <text x="400" y="268" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">COMPACT EARLY AND BY SECTION — SMALL, FREQUENT AND CHEAP, NOT ONE BIG OPERATION AT THE LIMIT</text>
      {sections.map((s, i) => {
        const x = 44 + i * 184;
        return (
          <g key={i}>
            <rect x={x} y="286" width="172" height="50" rx="8" fill={COLORS.slate50} stroke={s.c} strokeWidth="1.5" />
            <text x={x + 86} y="302" textAnchor="middle" fill={s.c} fontSize="7.8" fontWeight="700">{s.t}</text>
            {s.l.map((t, j) => (
              <text key={j} x={x + 86} y={316 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="7.5">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="364" width="740" height="68" rx="10" fill={COLORS.slate900} />
      <text x="400" y="386" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE TEST ALMOST NOBODY WRITES</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">Compact a stored run at step N, resume it, and check the agent makes the same next decision it made with full history</text>
      <text x="400" y="420" textAnchor="middle" fill={COLORS.slate300} fontSize="8.6">Losses cluster on material stated once early and relied on late — keep the pre-compaction state; the diff is the diagnosis</text>
    </DiagramFrame>
  );
};

export const MemoryLifetimesDiagram = () => {
  const tiers = [
    {
      c: COLORS.cyan, n: 'SCRATCHPAD', w: 110, life: 'lives for one task',
      holds: 'holds: notes, the working plan, intermediate results, what has been tried',
      hard: 'HARD PART — discipline: the agent will not write to it unless the loop makes it natural',
    },
    {
      c: COLORS.blue, n: 'TASK / SESSION MEMORY', w: 280, life: 'lives across the interactions of one piece of work',
      holds: 'holds: what this piece of work has established so far',
      hard: 'HARD PART — scoping: it must be found by the right run, and not by any other',
    },
    {
      c: COLORS.amber, n: 'PERSISTENT MEMORY', w: 510, life: 'lives indefinitely',
      holds: 'holds: preferences, conventions and accumulated durable facts',
      hard: 'HARD PART — curation and staleness: entries true for one afternoon, stored as durable facts',
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 458" caption="Scratchpad, task memory and persistent memory are three different systems — design the write path, read path and expiry for each">
      <defs>
        <marker id="arrowMLa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Memory is three stores, not one feature</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each tier has its own lifetime and its own failure mode — conflating them is why memory features disappoint</text>

      <text x="222" y="69" textAnchor="end" fill={COLORS.slate400} fontSize="7.5" fontWeight="700">LIFETIME</text>
      <line x1="230" y1="66" x2="745" y2="66" stroke={COLORS.slate300} strokeWidth="1.2" markerEnd="url(#arrowMLa)" />

      {tiers.map((t, i) => {
        const y = 78 + i * 92;
        return (
          <g key={i}>
            <rect x="30" y={y} width="740" height="84" rx="9" fill={COLORS.white} stroke={t.c} strokeWidth="2" />
            <rect x="30" y={y} width="7" height="84" rx="3" fill={t.c} />
            <text x="46" y={y + 24} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{t.n}</text>
            <rect x="230" y={y + 14} width="510" height="8" rx="4" fill={COLORS.slate100} />
            <rect x="230" y={y + 14} width={t.w} height="8" rx="4" fill={t.c} />
            <text x="230" y={y + 34} fill={COLORS.slate500} fontSize="7.5">{t.life}</text>
            <text x="46" y={y + 54} fill={COLORS.slate600} fontSize="8.4">{t.holds}</text>
            <text x="46" y={y + 72} fill={t.c} fontSize="8.6" fontWeight="700">{t.hard}</text>
          </g>
        );
      })}

      <rect x="30" y="362" width="740" height="64" rx="10" fill={COLORS.slate900} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">CONSTRAIN THE WRITE — READING MEMORY IS EASY; WRITING IT IS WHERE STORES GO WRONG</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="9.2" opacity="0.9">A schema with few categories, a reason and a source per entry, explicit write moments, defined contradiction handling</text>
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate300} fontSize="8.6">Beyond a small store, memory quality is retrieval quality — two good memories beat ten marginal ones</text>
    </DiagramFrame>
  );
};
