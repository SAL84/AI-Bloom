import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * HEALTHCARE — documentation and reader behaviour
 * ------------------------------------------------------------------ */

export const AmbientScribeFlowDiagram = () => {
  const steps = [
    { x: 30, h: 'Consultation audio', a: 'the conversation as it happened,', b: 'with interruptions and asides' },
    { x: 282, h: 'Transcription', a: 'speech turned into text, with', b: 'speakers separated where it can' },
    { x: 534, h: 'Structured draft note', a: 'sorted into the sections a note', b: 'expects — history, findings, plan' }
  ];
  const gate = [
    { h: 'Was it actually said?', a: 'each line traced to the encounter,', b: 'not to what usually follows it' },
    { h: 'Was it inferred?', a: 'the model fills gaps smoothly, and', b: 'inference reads just like record' },
    { h: 'What is missing?', a: 'omission is silent — a fluent note', b: 'shows no sign of what fell out' },
    { h: 'Edit, do not skim', a: 'reading to approve and reading to', b: 'correct are two different acts' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Everything upstream is a draft — the record only exists at the point a clinician has read it and put their name to it">
      <defs>
        <marker id="arrowASF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowASFbad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Ambient documentation, and where the responsibility sits</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation only — not clinical guidance</text>

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="56" width="236" height="86" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <text x={s.x + 118} y="80" textAnchor="middle" fill={COLORS.blue} fontSize="9" fontWeight="700">{`STEP ${i + 1}`}</text>
          <text x={s.x + 118} y="101" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{s.h}</text>
          <text x={s.x + 118} y="119" textAnchor="middle" fill={COLORS.slate600} fontSize="9">{s.a}</text>
          <text x={s.x + 118} y="132" textAnchor="middle" fill={COLORS.slate600} fontSize="9">{s.b}</text>
          {i < 2 && <line x1={s.x + 238} y1="99" x2={s.x + 264} y2="99" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowASF)" />}
        </g>
      ))}
      <line x1="652" y1="144" x2="652" y2="170" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowASF)" />

      <rect x="30" y="174" width="740" height="122" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="3" />
      <rect x="30" y="174" width="740" height="30" rx="10" fill={COLORS.amber} />
      <text x="400" y="195" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">STEP 4 · CLINICIAN REVIEW AND EDIT — THE GATE NOTHING PASSES WITHOUT</text>
      {gate.map((g, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="214" width="174" height="70" rx="8" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.5" />
          <text x={129 + i * 182} y="234" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{g.h}</text>
          <text x={129 + i * 182} y="253" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{g.a}</text>
          <text x={129 + i * 182} y="266" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{g.b}</text>
        </g>
      ))}
      <line x1="400" y1="298" x2="400" y2="318" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowASF)" />

      <rect x="240" y="322" width="320" height="56" rx="10" fill={COLORS.emerald} />
      <text x="400" y="345" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">STEP 5 · Signed record</text>
      <text x="400" y="364" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.95">the clinician owns every line of it, drafted or not</text>

      <path d="M 770 99 L 786 99 L 786 350 L 566 350" fill="none" stroke={COLORS.red} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowASFbad)" />
      <text x="676" y="342" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">signed without being read</text>

      <rect x="30" y="392" width="740" height="62" rx="10" fill="#fef2f2" stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.red} fontSize="10.5" fontWeight="700">THE QUIET FAILURE MODE</text>
      <text x="400" y="432" textAnchor="middle" fill={COLORS.slate700} fontSize="10">A well-organised, confidently worded note containing something that was never said, or missing something that was</text>
      <text x="400" y="447" textAnchor="middle" fill={COLORS.slate700} fontSize="10">The error reads exactly like the rest of the note — the smoother the draft, the less it invites the reading it needs</text>
      <text x="400" y="474" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Time saved on typing is only real if some of it is spent reading — the gate is the product, not the draft</text>
    </DiagramFrame>
  );
};

export const AutomationBiasDiagram = () => {
  const errors = [
    { c: COLORS.red, h: 'OMISSION', s: 'missing what the machine did not flag', l: ['Attention follows the marks on the screen.', 'Unmarked regions get a shorter look, and', 'the miss leaves no trace to review later.'] },
    { c: COLORS.amber, h: 'COMMISSION', s: 'accepting what it wrongly flagged', l: ['A flag arrives as a conclusion. The reader', 'then finds reasons for it, and records an', 'agreement that reads as independent.'] }
  ];
  const mitigations = [
    { h: 'Independent read first', a: 'form and record a view before', b: 'the output is revealed at all' },
    { h: 'Show uncertainty', a: 'a flag with no confidence attached', b: 'is received as a verdict' },
    { h: 'Audit both directions', a: 'sample unflagged cases too, or you', b: 'only ever measure the flags' },
    { h: 'Watch agreement rates', a: 'a team that never disagrees has', b: 'stopped reading independently' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 484" caption="A flag does not only add information — it moves the reader, and it moves them just as far when it is wrong as when it is right">
      <defs>
        <marker id="arrowABD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What an AI flag does to a human read</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation only — not clinical guidance</text>

      <rect x="30" y="54" width="360" height="206" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE THE READER LANDS</text>
      {[0, 1].map((r) => {
        const y = 118 + r * 78;
        return (
          <g key={r}>
            <text x="48" y={y - 26} fill={COLORS.slate900} fontSize="10" fontWeight="700">{r === 0 ? 'Reads first, then sees the flag' : 'Sees the flag, then reads'}</text>
            <line x1="60" y1={y} x2="360" y2={y} stroke={COLORS.slate300} strokeWidth="2" />
            <circle cx="60" cy={y} r="4" fill={COLORS.slate400} />
            <circle cx="360" cy={y} r="4" fill={COLORS.slate400} />
            <text x="60" y={y + 18} fill={COLORS.slate500} fontSize="8.4">own view</text>
            <text x="360" y={y + 18} textAnchor="end" fill={COLORS.slate500} fontSize="8.4">machine view</text>
            <circle cx={r === 0 ? 118 : 322} cy={y} r="8" fill={r === 0 ? COLORS.emerald : COLORS.red} />
            {r === 1 && <line x1="150" y1={y} x2="300" y2={y} stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowABD)" />}
            {r === 1 && <text x="225" y={y - 8} textAnchor="middle" fill={COLORS.red} fontSize="8.6" fontWeight="700">pulled across</text>}
          </g>
        );
      })}
      <text x="210" y="248" textAnchor="middle" fill={COLORS.slate600} fontSize="9" fontStyle="italic">the order of the read changes the answer</text>

      {errors.map((e, i) => (
        <g key={i}>
          <rect x="410" y={54 + i * 106} width="360" height="100" rx="10" fill={COLORS.white} stroke={e.c} strokeWidth="2" />
          <rect x="410" y={54 + i * 106} width="360" height="26" rx="10" fill={e.c} />
          <text x="590" y={72 + i * 106} textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{`${e.h} ERROR — ${e.s}`}</text>
          {e.l.map((t, j) => (
            <text key={j} x="426" y={98 + i * 106 + j * 16} fill={COLORS.slate700} fontSize="9.3">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="274" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="295" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Agreement with the machine rises on correct flags and on incorrect ones alike</text>
      <text x="400" y="313" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">which means a high agreement rate tells you nothing on its own about whether the reads are any good</text>

      <text x="30" y="344" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT DEPLOYMENT CAN DO ABOUT IT</text>
      {mitigations.map((m, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="352" width="176" height="86" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <rect x={30 + i * 188} y="352" width="176" height="26" rx="8" fill={COLORS.emerald} />
          <text x={118 + i * 188} y="370" textAnchor="middle" fill={COLORS.white} fontSize="9.8" fontWeight="700">{m.h}</text>
          <text x={118 + i * 188} y="398" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{m.a}</text>
          <text x={118 + i * 188} y="412" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{m.b}</text>
          <text x={118 + i * 188} y="430" textAnchor="middle" fill={COLORS.emerald} fontSize="8.3" fontWeight="700">{i === 0 ? 'order matters most' : i === 1 ? 'calibration is visible' : i === 2 ? 'sample the silence' : 'track it over time'}</text>
        </g>
      ))}
      <text x="400" y="466" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The mitigation is procedural, not technical — a better model does not restore an independent read</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * LEGAL — extraction, retrieval limits, supervision
 * ------------------------------------------------------------------ */

export const ClauseExtractionDiagram = () => {
  const stages = [
    { h: 'Documents in', a: 'a large set arriving at once,', b: 'in mixed formats and drafting styles' },
    { h: 'Identify and classify', a: 'each clause located and labelled by', b: 'type, with the span it came from' },
    { h: 'Compare with playbook', a: 'measured against the standard position', b: 'the firm has already agreed' },
    { h: 'Rank the deviations', a: 'sorted by how far from standard, and', b: 'how much the gap actually matters' }
  ];
  const queue = [
    { c: COLORS.red, h: 'Furthest from standard', s: 'read in full, and read first — this is where negotiation time belongs' },
    { c: COLORS.amber, h: 'Narrow deviation', s: 'a bounded check against the fallback position, then accept or push back' },
    { c: COLORS.emerald, h: 'Matches the playbook', s: 'spot-checked rather than read line by line, with the sample recorded' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 478" caption="The value is triage, not drafting — the system decides what a lawyer looks at first, and never decides what the position should be">
      <defs>
        <marker id="arrowCED" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Contract review at volume</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation only — not legal advice</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="56" width="170" height="106" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={30 + i * 190} y="56" width="170" height="24" rx="10" fill={COLORS.blue} />
          <text x={115 + i * 190} y="73" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{`STAGE ${i + 1}`}</text>
          <text x={115 + i * 190} y="102" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{s.h}</text>
          <text x={115 + i * 190} y="124" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{s.a}</text>
          <text x={115 + i * 190} y="137" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{s.b}</text>
          {i < 3 && <line x1={202 + i * 190} y1="109" x2={218 + i * 190} y2="109" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCED)" />}
        </g>
      ))}
      <line x1="400" y1="164" x2="400" y2="188" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCED)" />

      <rect x="30" y="192" width="430" height="154" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="46" y="212" fill={COLORS.slate600} fontSize="9.5" fontWeight="700">THE QUEUE THE REVIEWER ACTUALLY OPENS</text>
      {queue.map((q, i) => (
        <g key={i}>
          <rect x="44" y={222 + i * 40} width="402" height="34" rx="7" fill={COLORS.slate50} stroke={q.c} strokeWidth="1.5" />
          <rect x="44" y={222 + i * 40} width="8" height="34" rx="4" fill={q.c} />
          <text x="62" y={236 + i * 40} fill={COLORS.slate900} fontSize="10" fontWeight="700">{q.h}</text>
          <text x="62" y={250 + i * 40} fill={COLORS.slate600} fontSize="8.6">{q.s}</text>
        </g>
      ))}

      <rect x="480" y="192" width="290" height="154" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="480" y="192" width="290" height="26" rx="10" fill={COLORS.emerald} />
      <text x="625" y="210" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">WHY EXTRACTION BEATS GENERATION HERE</text>
      <text x="494" y="236" fill={COLORS.emerald} fontSize="9.5" fontWeight="700">Structured extraction</text>
      {['every answer points at a span in the', 'document, so it can be opened and', 'confirmed in seconds; a wrong label is', 'visible the moment someone looks'].map((t, i) => (
        <text key={i} x="494" y={250 + i * 13} fill={COLORS.slate700} fontSize="8.6">{t}</text>
      ))}
      <text x="494" y="309" fill={COLORS.red} fontSize="9.5" fontWeight="700">Free-form summary instead</text>
      {['fluent prose with nothing to check it', 'against — equally plausible either way'].map((t, i) => (
        <text key={i} x="494" y={323 + i * 13} fill={COLORS.slate700} fontSize="8.6">{t}</text>
      ))}

      <line x1="245" y1="348" x2="245" y2="368" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCED)" />
      <rect x="30" y="372" width="740" height="66" rx="10" fill={COLORS.slate900} />
      <text x="400" y="396" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">Human review queue — accept, negotiate, or escalate</text>
      <text x="400" y="415" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">The ranking decides reading order. Whether a deviation is acceptable on this matter, for this client, remains a judgement</text>
      <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">A clause the system never labelled is still a clause in the contract — sampling the unflagged is part of the review</text>
      <text x="400" y="464" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Anything the pipeline outputs can be traced back to text on a page — that traceability is what makes the volume safe</text>
    </DiagramFrame>
  );
};

export const RetrievalLimitsDiagram = () => {
  const chain = [
    { h: 'The question', a: 'a research question posed', b: 'in the words of the matter' },
    { h: 'Retrieve real sources', a: 'a genuine collection is searched', b: 'and passages are returned' },
    { h: 'Answer, grounded', a: 'the model writes from what came', b: 'back, and points at it' }
  ];
  const limits = [
    { h: 'Mischaracterised', l: ['The source is real. The account of it', 'is not. Reasoning is compressed into', 'a summary that quietly overstates it.'] },
    { h: 'Cited past its holding', l: ['Real source, real passage, stretched', 'to support a proposition it never', 'decided — the commonest failure.'] },
    { h: 'Controlling authority missed', l: ['Retrieval returns what matches the', 'words used. What governs may be', 'phrased nothing like the question.'] },
    { h: 'Superseded and still cited', l: ['The document exists and is no longer', 'good — retrieval can surface things', 'later material has already displaced.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="Retrieval removes the invented source and leaves every other failure untouched — grounding changes the odds, not the duty to read what is cited">
      <defs>
        <marker id="arrowRLD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What retrieval fixes, and what it leaves behind</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation only — not legal advice</text>

      {chain.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="56" width="236" height="88" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <circle cx={48 + i * 252} cy="74" r="11" fill={COLORS.emerald} />
          <text x={48 + i * 252} y="78" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{i + 1}</text>
          <text x={148 + i * 252} y="82" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{c.h}</text>
          <text x={148 + i * 252} y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="9.2">{c.a}</text>
          <text x={148 + i * 252} y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="9.2">{c.b}</text>
          {i < 2 && <line x1={268 + i * 252} y1="100" x2={294 + i * 252} y2="100" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowRLD)" />}
        </g>
      ))}

      <rect x="30" y="158" width="740" height="40" rx="8" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="176" textAnchor="middle" fill={COLORS.emerald} fontSize="10.5" fontWeight="700">WHAT THIS GENUINELY FIXES</text>
      <text x="400" y="191" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">The fabricated source is largely designed out — what is cited now exists, and the link back can be followed to a real document</text>

      <rect x="30" y="212" width="740" height="26" rx="8" fill={COLORS.red} />
      <text x="400" y="230" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT IT DOES NOT FIX — ALL FOUR SURVIVE PERFECT RETRIEVAL</text>

      {limits.map((l, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="248" width="176" height="118" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <text x={118 + i * 188} y="270" textAnchor="middle" fill={COLORS.red} fontSize="9.6" fontWeight="700">{l.h}</text>
          <line x1={44 + i * 188} y1="278" x2={192 + i * 188} y2="278" stroke={COLORS.slate200} strokeWidth="1" />
          {l.l.map((t, j) => (
            <text key={j} x={40 + i * 188} y={296 + j * 14} fill={COLORS.slate700} fontSize="8.5">{t}</text>
          ))}
          <text x={118 + i * 188} y="356" textAnchor="middle" fill={COLORS.slate500} fontSize="8.2" fontStyle="italic">the source is real throughout</text>
        </g>
      ))}

      <rect x="30" y="380" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">Retrieval reduces risk. Verification remains mandatory.</text>
      <text x="400" y="421" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">Open the source, read the passage, confirm it says what the answer says it says, and check it is still good — every time</text>
      <text x="400" y="454" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A grounded answer is easier to check, which is not the same as already checked</text>
    </DiagramFrame>
  );
};

export const SupervisionChainDiagram = () => {
  const chain = [
    { c: COLORS.slate700, h: 'A draft is produced', a: 'by a junior, by a tool, or by a junior using a tool —', b: 'from here on the origin changes nothing about the duty' },
    { c: COLORS.blue, h: 'A supervising lawyer reviews the substance', a: 'not whether it reads well: whether it is right, whether it is', b: 'supported, and whether it is the advice this matter needs' },
    { c: COLORS.emerald, h: 'A named person accepts responsibility', a: 'the signature is a statement about the work, not a record', b: 'of who assembled it or what assisted them' },
    { c: COLORS.amber, h: 'It is filed or sent', a: 'with candour to the tribunal, including any disclosure about', b: 'the use of such tools that the applicable rules require' }
  ];
  const substance = [
    'Is every proposition actually supported?',
    'Has each authority been opened and read?',
    'Is anything material missing or overstated?',
    'Is this the advice we would give unaided?',
    'Would it survive being questioned closely?'
  ];
  const nope = [
    'A tool holds no duty to the client',
    'A tool holds no duty to the tribunal',
    'A tool cannot be sanctioned or struck off',
    'A tool cannot explain its own reasoning on oath',
    'So the responsibility never leaves the person'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 484" caption="Every link in the chain ends at a person — the tool changes how the draft is made and nothing at all about who answers for it">
      <defs>
        <marker id="arrowSCD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Supervision and candour over AI-assisted work</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation only — not legal advice</text>

      {chain.map((s, i) => (
        <g key={i}>
          <rect x="30" y={56 + i * 84} width="430" height="66" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x="30" y={56 + i * 84} width="9" height="66" rx="4.5" fill={s.c} />
          <circle cx="62" cy={89 + i * 84} r="13" fill={s.c} />
          <text x="62" y={93 + i * 84} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{i + 1}</text>
          <text x="84" y={80 + i * 84} fill={COLORS.slate900} fontSize="11.5" fontWeight="700">{s.h}</text>
          <text x="84" y={97 + i * 84} fill={COLORS.slate600} fontSize="8.6">{s.a}</text>
          <text x="84" y={111 + i * 84} fill={COLORS.slate600} fontSize="8.6">{s.b}</text>
          {i < 3 && <line x1="245" y1={124 + i * 84} x2="245" y2={138 + i * 84} stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSCD)" />}
        </g>
      ))}

      <rect x="480" y="56" width="290" height="150" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="480" y="56" width="290" height="26" rx="10" fill={COLORS.blue} />
      <text x="625" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">REVIEWING SUBSTANCE, NOT FORM</text>
      {substance.map((t, i) => (
        <g key={i}>
          <circle cx="496" cy={100 + i * 21} r="2.5" fill={COLORS.blue} />
          <text x="506" y={104 + i * 21} fill={COLORS.slate700} fontSize="9">{t}</text>
        </g>
      ))}

      <rect x="480" y="224" width="290" height="152" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="480" y="224" width="290" height="26" rx="10" fill={COLORS.red} />
      <text x="625" y="242" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT CANNOT BE DELEGATED</text>
      {nope.map((t, i) => (
        <g key={i}>
          <circle cx="496" cy={270 + i * 21} r="2.5" fill={COLORS.red} />
          <text x="506" y={274 + i * 21} fill={COLORS.slate700} fontSize="9">{t}</text>
        </g>
      ))}

      <rect x="30" y="394" width="740" height="56" rx="10" fill={COLORS.slate900} />
      <text x="400" y="416" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">A tool assisted; a person is answerable</text>
      <text x="400" y="435" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">Where the rules or the tribunal require it to be said that such tools were used, saying so is part of the duty, not an admission</text>
      <text x="400" y="472" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Unreviewed work does not become reviewed because something confident produced it</text>
    </DiagramFrame>
  );
};
