import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ SECURING AI SYSTEMS — MODULE 1 (CONT.) + MODULE 2 ============ */

export const MitreAtlasDiagram = () => {
  const tactics = ['RECON', 'INITIAL ACCESS', 'EXECUTION', 'PERSISTENCE', 'EXFILTRATION'];
  const rows: { label: string; cells: ({ t: string[]; c: string } | null)[] }[] = [
    { label: 'RETRIEVAL CORPUS', cells: [null, { t: ['unreviewed', 'vendor sync'], c: COLORS.red }, null, { t: ['planted doc waits', 'in the index'], c: COLORS.amber }, null] },
    { label: 'TOOLS + SERVERS', cells: [{ t: ['tool list', 'discovery'], c: COLORS.amber }, { t: ['hostile tool', 'description'], c: COLORS.red }, { t: ['argument', 'steering'], c: COLORS.red }, null, { t: ['query-string', 'egress'], c: COLORS.red }] },
    { label: 'MEMORY STORES', cells: [null, null, null, { t: ['model-written', 'entry survives'], c: COLORS.red }, null] },
    { label: 'OUTPUT CONSUMERS', cells: [null, null, { t: ['unvalidated', 'downstream parse'], c: COLORS.amber }, null, { t: ['rendered remote', 'fetch'], c: COLORS.red }] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Cross your components against ATLAS tactics cell by cell — populated cells become the test plan, and empty cells become justified exclusions.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Work the matrix, column by column — coverage you can defend</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">components down the side, tactics across the top; every cell answered is a claim you can stand behind</text>

      <rect x="30" y="56" width="360" height="44" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="210" y="74" textAnchor="middle" fill={COLORS.red} fontSize="8.2" fontWeight="700">ENUMERATING FROM MEMORY</text>
      <text x="210" y="90" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">a biased sample dominated by whatever you read most recently</text>
      <rect x="410" y="56" width="360" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="590" y="74" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">WALKING THE PUBLISHED MATRIX</text>
      <text x="590" y="90" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">forces you past the bias — a defensible answer to what you considered</text>

      <rect x="30" y="112" width="740" height="226" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="128" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">YOUR COMPONENTS × ATLAS TACTICS — EACH CELL: ACHIEVABLE HERE?</text>
      {tactics.map((t, i) => (
        <g key={i}>
          <rect x={168 + i * 118} y="136" width="114" height="16" rx="3" fill={COLORS.blue} />
          <text x={168 + i * 118 + 57} y="147" textAnchor="middle" fill={COLORS.white} fontSize="6.8" fontWeight="700">{t}</text>
        </g>
      ))}
      {rows.map((r, ri) => {
        const y = 158 + ri * 38;
        return (
          <g key={ri}>
            <rect x="40" y={y} width="122" height="34" rx="5" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" />
            <text x="101" y={y + 21} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{r.label}</text>
            {r.cells.map((c, ci) => {
              const x = 168 + ci * 118;
              return c ? (
                <g key={ci}>
                  <rect x={x} y={y} width="114" height="34" rx="5" fill={COLORS.white} stroke={c.c} strokeWidth="1.4" />
                  <text x={x + 57} y={y + 14} textAnchor="middle" fill={c.c} fontSize="6.4">{c.t[0]}</text>
                  <text x={x + 57} y={y + 25} textAnchor="middle" fill={c.c} fontSize="6.4">{c.t[1]}</text>
                </g>
              ) : (
                <g key={ci}>
                  <rect x={x} y={y} width="114" height="34" rx="5" fill={COLORS.slate100} stroke={COLORS.slate200} strokeWidth="1" />
                  <text x={x + 57} y={y + 21} textAnchor="middle" fill={COLORS.slate400} fontSize="7">—</text>
                </g>
              );
            })}
          </g>
        );
      })}
      <text x="400" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2" fontStyle="italic">empty cells are findings too — record why the technique does not apply here</text>

      <rect x="30" y="348" width="360" height="48" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="210" y="366" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">POPULATED CELLS BECOME THE TEST PLAN</text>
      <text x="210" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">ordered by reach × reversibility; record control + intended test</text>
      <rect x="410" y="348" width="360" height="48" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="590" y="366" textAnchor="middle" fill={COLORS.blue} fontSize="7.8" fontWeight="700">PICK THE FRAMEWORK BY TASK</text>
      <text x="590" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">ATLAS = techniques · OWASP LLM = app checklist · NIST RMF = programme</text>

      <rect x="30" y="406" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="426" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A CATALOGUE IS A FLOOR, NOT A CEILING — ADD THE DOMAIN-EXPERT PASS</text>
      <text x="400" y="443" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the matrix finds what is known; people who know the domain find what would hurt most here</text>
    </DiagramFrame>
  );
};

export const AcceptedRisksDiagram = () => {
  const fields = [
    { l: 'SCENARIO', c: COLORS.blue, t: ['the outcome the attacker achieves —', 'not the technique they use'] },
    { l: 'REASON', c: COLORS.blue, t: ['cost · low likelihood · mitigation would', 'break the feature · covered elsewhere'] },
    { l: 'ACCEPTED BY', c: COLORS.red, t: ['a named person, with a date —', 'unsigned is unaccepted'] },
    { l: 'REOPEN WHEN', c: COLORS.amber, t: ['new data class · new write tool · new', 'user population · industry incident'] },
    { l: 'STILL IN PLACE', c: COLORS.emerald, t: ['partial measures — detected but not', 'prevented is a different posture'] },
  ];
  const triggers = ['a new tool lands', 'a new data class enters', 'the user population changes', 'the model deployment changes'];
  return (
    <DiagramFrame viewBox="0 0 800 428" caption="Write the scenario, the reason, the named accepter with a date, and the triggers that reopen the decision — unsigned is unaccepted.">
      <defs>
        <marker id="arrowARGa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What you will not defend, written down and signed</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">after an incident, unstated acceptance is indistinguishable from oversight — the register is the difference</text>

      <rect x="30" y="58" width="450" height="204" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="450" height="20" rx="9" fill={COLORS.blue} />
      <text x="255" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">ANATOMY OF ONE ACCEPTED-RISK ENTRY</text>
      {fields.map((f, i) => {
        const y = 96 + i * 35;
        return (
          <g key={i}>
            <rect x="46" y={y - 12} width="104" height="16" rx="4" fill={f.c} />
            <text x="98" y={y - 1} textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">{f.l}</text>
            <text x="162" y={y - 3} fill={COLORS.slate600} fontSize="7.2">{f.t[0]}</text>
            <text x="162" y={y + 9} fill={COLORS.slate600} fontSize="7.2">{f.t[1]}</text>
          </g>
        );
      })}

      <rect x="500" y="58" width="270" height="204" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="500" y="58" width="270" height="20" rx="9" fill={COLORS.amber} />
      <text x="635" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">REVIEW ON TRIGGERS, NOT CALENDAR</text>
      {triggers.map((t, i) => (
        <g key={i}>
          <rect x="516" y={88 + i * 24} width="238" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x="635" y={88 + i * 24 + 13} textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>
        </g>
      ))}
      <line x1="635" y1="180" x2="635" y2="192" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowARGa)" />
      <rect x="516" y="196" width="238" height="20" rx="5" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="635" y="209" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">re-derive the acceptance</text>
      <text x="635" y="232" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">accepted because tools were read-only?</text>
      <text x="635" y="244" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">void the moment a write tool lands</text>

      <rect x="30" y="276" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="294" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">WHERE PREVENTION IS UNAVAILABLE — SAY SO, THEN CONTAIN AND DETECT</text>
      <rect x="46" y="304" width="210" height="34" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="151" y="318" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">PROMPT INJECTION</text>
      <text x="151" y="330" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">no technique reliably prevents it</text>
      <line x1="260" y1="321" x2="280" y2="321" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowARGa)" />
      <rect x="286" y="304" width="220" height="34" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="396" y="318" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontWeight="700">CONTAIN</text>
      <text x="396" y="330" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">narrower tools · denied egress · gates</text>
      <line x1="510" y1="321" x2="530" y2="321" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowARGa)" />
      <rect x="536" y="304" width="218" height="34" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="645" y="318" textAnchor="middle" fill={COLORS.blue} fontSize="7" fontWeight="700">DETECT</text>
      <text x="645" y="330" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">odd tool sequences · canaries · rate shifts</text>

      <rect x="30" y="364" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">INJECTION EXPECTED, CONTAINED, DETECTED — BEATS CLAIMING A FILTER PREVENTS IT</text>
      <text x="400" y="401" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a register that has never had an entry reopened is not being read</text>
    </DiagramFrame>
  );
};

export const PromptInjectionDepthDiagram = () => {
  const segs = [
    { w: 86, c: COLORS.blue, t: 'system prompt' },
    { w: 70, c: COLORS.amber, t: 'user msg' },
    { w: 94, c: COLORS.red, t: 'retrieved doc' },
    { w: 78, c: COLORS.red, t: 'tool result' },
  ];
  const reasons = [
    { h: 'unbounded, semantic expression', b: 'no finite pattern set covers every phrasing' },
    { h: 'encoding routes around it', b: 'base64, translation, chunk reassembly, images' },
    { h: 'the attacker adapts', b: 'they observe what passes; the filter lags' },
  ];
  const responses = [
    { h: 'shrink capability', b: 'fewer tools, no standing creds' },
    { h: 'separate roles', b: 'reader never holds privilege' },
    { h: 'validate at consumers', b: 'structural, not inspection' },
    { h: 'reconstructable traces', b: 'scope what gets through' },
  ];
  let sx = 426;
  return (
    <DiagramFrame viewBox="0 0 800 458" caption="Injection is a structural property of one channel carrying instructions and data together — patch nothing, design as if it succeeds.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One channel, two kinds of content — that is the whole bug class</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the separation a parameterised query enforces structurally has no equivalent inside a prompt</text>

      <rect x="30" y="58" width="360" height="126" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">PARAMETERISED QUERY — STRUCTURAL</text>
      <rect x="46" y="88" width="196" height="26" rx="5" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="144" y="105" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">SELECT … WHERE id = ?</text>
      <line x1="256" y1="82" x2="256" y2="120" stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="270" y="88" width="104" height="26" rx="5" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="322" y="105" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">value: attacker text</text>
      <text x="210" y="136" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the value can never become the statement —</text>
      <text x="210" y="148" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">separation enforced by the interface, every time</text>
      <text x="210" y="164" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontStyle="italic">a boundary a diagram may rely on</text>

      <rect x="410" y="58" width="360" height="126" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">LLM PROMPT — ONE TOKEN SEQUENCE</text>
      {segs.map((s, i) => {
        const x = sx;
        sx += s.w;
        return (
          <g key={i}>
            <rect x={x} y="88" width={s.w} height="22" fill={s.c} fillOpacity="0.85" />
            <text x={x + s.w / 2} y="102" textAnchor="middle" fill={COLORS.white} fontSize="6.2">{s.t}</text>
          </g>
        );
      })}
      <text x="590" y="130" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">one undifferentiated sequence — the model infers</text>
      <text x="590" y="142" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">each part&apos;s role from learned patterns</text>
      <text x="590" y="158" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">instruction hierarchy: probabilistic preference, not a parser rule</text>

      <rect x="30" y="198" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="198" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="211" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHY FILTERING CANNOT BE THE BOUNDARY</text>
      {reasons.map((r, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="226" width="228" height="42" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="243" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">{r.h}</text>
          <text x={160 + i * 240} y="257" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{r.b}</text>
        </g>
      ))}
      <text x="400" y="284" textAnchor="middle" fill={COLORS.amber} fontSize="7.2" fontStyle="italic">keep filters as cost-raising noise reduction — never as the thing the design depends on</text>

      <rect x="30" y="306" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="306" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="319" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE RESPONSES THAT COUNT ARE ARCHITECTURAL</text>
      {responses.map((r, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="334" width="172" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={132 + i * 186} y="348" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">{r.h}</text>
          <text x={132 + i * 186} y="361" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{r.b}</text>
        </g>
      ))}

      <rect x="30" y="394" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DESIGN AS IF INJECTION SUCCEEDS — THE MODEL DOES ONLY WHAT THE RUNTIME PERMITS</text>
      <text x="400" y="431" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">only structural controls belong on your diagram as boundaries; statistical ones are noise reduction</text>
    </DiagramFrame>
  );
};

export const IndirectInjectionDiagram = () => {
  const channels = [
    'retrieved docs + their metadata', 'web pages a browsing tool fetches',
    'email bodies, attachments, headers', 'ticket titles, comments, fields',
    'repo files, commits, CI output', 'calendar invites and notes',
    'filenames, alt text, doc properties', '3rd-party tool responses + errors',
    "one user's content, another's session", 'audio / video transcripts, captions',
  ];
  const timeline = [
    { x: 100, c: COLORS.red, a: 'content planted', b: 'no product touched' },
    { x: 280, c: COLORS.slate400, a: 'weeks pass', b: 'reviews see benign text' },
    { x: 470, c: COLORS.amber, a: 'related question asked', b: 'conditional payload activates' },
    { x: 660, c: COLORS.red, a: 'action fires', b: 'nothing to correlate with' },
  ];
  const chain = [
    { x: 46, w: 150, h: 'hostile page', b: 'external, untrusted' },
    { x: 226, w: 160, h: 'summariser reads it', b: 'writes a case note' },
    { x: 416, w: 150, h: 'stored summary', b: 'now looks internal' },
    { x: 596, w: 158, h: 'agent with billing tools', b: 'acts on the note' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="Inventory every path content takes into the model, assume delay and conditionality, and put detection at the effect rather than at ingestion.">
      <defs>
        <marker id="arrowIIDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The attacker never logs in — they position content and wait</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">defence starts with an inventory of every path by which content reaches the model</text>

      <rect x="30" y="58" width="480" height="170" rx="9" fill="none" stroke={COLORS.red} strokeWidth="1.6" strokeDasharray="6 4" />
      <text x="270" y="74" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontWeight="700">INGESTION INVENTORY — LONGER THAN YOU EXPECT</text>
      {channels.map((c, i) => (
        <g key={i}>
          <rect x={46 + (i % 2) * 236} y={84 + Math.floor(i / 2) * 28} width="224" height="22" rx="5" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={158 + (i % 2) * 236} y={98 + Math.floor(i / 2) * 28} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{c}</text>
        </g>
      ))}
      <line x1="514" y1="100" x2="556" y2="124" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowIIDa)" />
      <line x1="514" y1="143" x2="556" y2="138" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowIIDa)" />
      <line x1="514" y1="186" x2="556" y2="152" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowIIDa)" />
      <rect x="560" y="110" width="170" height="56" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="645" y="130" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">context window + model</text>
      <text x="645" y="144" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">acting for whoever the</text>
      <text x="645" y="155" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">system serves right now</text>
      <text x="645" y="184" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontStyle="italic">every channel the model reads</text>
      <text x="645" y="196" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontStyle="italic">is an instruction channel</text>

      <rect x="30" y="242" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="242" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="255" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PLANTED LONG BEFORE IT ACTS — AND ONLY WHEN CONDITIONS MATCH</text>
      <line x1="70" y1="294" x2="730" y2="294" stroke={COLORS.slate400} strokeWidth="1.4" />
      {timeline.map((t, i) => (
        <g key={i}>
          <circle cx={t.x} cy="294" r="5" fill={t.c} />
          <text x={t.x} y="278" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{t.a}</text>
          <text x={t.x} y="312" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">{t.b}</text>
        </g>
      ))}

      <rect x="30" y="340" width="740" height="78" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="340" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="353" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SECOND-ORDER PATHS LAUNDER TRUST AT EVERY HOP</text>
      {chain.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="368" width={p.w} height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x={p.x + p.w / 2} y="382" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{p.h}</text>
          <text x={p.x + p.w / 2} y="394" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{p.b}</text>
          {i < 3 && <line x1={p.x + p.w + 4} y1="385" x2={chain[i + 1].x - 4} y2="385" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowIIDa)" />}
        </g>
      ))}
      <text x="400" y="412" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">follow the content forward — who reads it next, and with what privileges?</text>

      <rect x="30" y="432" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="452" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN UNLISTED CHANNEL IS AN UNTESTED CHANNEL — THE INVENTORY IS THE DELIVERABLE</text>
      <text x="400" y="469" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">sampling review misses conditional payloads — put detection at the effect: anomalous actions and egress</text>
    </DiagramFrame>
  );
};

export const LethalTrifectaDiagram = () => {
  const legs = [
    { x: 30, c: COLORS.blue, h: 'REMOVE THE DATA LEG', b: ['split the workflow — the browsing', 'step gets no customer records'] },
    { x: 282, c: COLORS.red, h: 'NARROW THE UNTRUSTED LEG', b: ['reviewed corpus; schema extraction', 'instead of prose into the context'] },
    { x: 534, c: COLORS.emerald, h: 'REMOVE EGRESS — HIGHEST LEVERAGE', b: ['default-deny is enforced by', 'infrastructure, outside the model'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 506" caption="Private data, untrusted content and an outbound channel together make an exfiltration engine — remove one leg rather than defend all three.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three properties, checked per component, with evidence</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">answer three yes/no questions from live configuration — architectural intent consistently understates access</text>

      <circle cx="345" cy="185" r="95" fill={COLORS.blue} fillOpacity="0.1" stroke={COLORS.blue} strokeWidth="2" />
      <circle cx="455" cy="185" r="95" fill={COLORS.red} fillOpacity="0.1" stroke={COLORS.red} strokeWidth="2" />
      <circle cx="400" cy="255" r="95" fill={COLORS.amber} fillOpacity="0.1" stroke={COLORS.amber} strokeWidth="2" />
      <text x="300" y="170" textAnchor="middle" fill={COLORS.blue} fontSize="7.5" fontWeight="700">PRIVATE DATA</text>
      <text x="300" y="182" textAnchor="middle" fill={COLORS.blue} fontSize="7.5" fontWeight="700">ACCESS</text>
      <text x="500" y="170" textAnchor="middle" fill={COLORS.red} fontSize="7.5" fontWeight="700">UNTRUSTED</text>
      <text x="500" y="182" textAnchor="middle" fill={COLORS.red} fontSize="7.5" fontWeight="700">CONTENT</text>
      <text x="400" y="315" textAnchor="middle" fill={COLORS.amber} fontSize="7.5" fontWeight="700">OUTBOUND</text>
      <text x="400" y="327" textAnchor="middle" fill={COLORS.amber} fontSize="7.5" fontWeight="700">CHANNEL</text>
      <text x="400" y="196" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">ALL THREE:</text>
      <text x="400" y="208" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">EXFILTRATION</text>
      <text x="400" y="219" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">ENGINE</text>

      <text x="48" y="140" fill={COLORS.slate600} fontSize="6.8">does it read anything the</text>
      <text x="48" y="151" fill={COLORS.slate600} fontSize="6.8">user or world should not see?</text>
      <line x1="160" y1="146" x2="258" y2="166" stroke={COLORS.slate400} strokeWidth="1" />
      <text x="754" y="140" textAnchor="end" fill={COLORS.slate600} fontSize="6.8">does anything it reads come</text>
      <text x="754" y="151" textAnchor="end" fill={COLORS.slate600} fontSize="6.8">from outside the boundary?</text>
      <line x1="640" y1="146" x2="543" y2="166" stroke={COLORS.slate400} strokeWidth="1" />
      <text x="48" y="300" fill={COLORS.slate600} fontSize="6.8">can it cause bytes to reach</text>
      <text x="48" y="311" fill={COLORS.slate600} fontSize="6.8">somewhere an attacker observes?</text>
      <line x1="185" y1="306" x2="308" y2="286" stroke={COLORS.slate400} strokeWidth="1" />

      <text x="400" y="364" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2" fontStyle="italic">components with all three go to the top of the list — and the fix is structural, not a better prompt</text>
      {legs.map((l, i) => (
        <g key={i}>
          <rect x={l.x} y="376" width="236" height="52" rx="8" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <text x={l.x + 118} y="392" textAnchor="middle" fill={l.c} fontSize="7.2" fontWeight="700">{l.h}</text>
          <text x={l.x + 118} y="406" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{l.b[0]}</text>
          <text x={l.x + 118} y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{l.b[1]}</text>
        </g>
      ))}

      <rect x="30" y="442" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="462" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RUN THREE PASSES — LEAK, ACT, MISLEAD — A CLEAN TRIFECTA IS NOT A CLEAN MODEL</text>
      <text x="400" y="479" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">an agent with no egress can still delete, spend and send; a read-only agent can still confidently mislead</text>
    </DiagramFrame>
  );
};
