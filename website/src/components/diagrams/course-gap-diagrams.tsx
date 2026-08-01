import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const AISecurityFrameworksDiagram = () => {
  const frameworks = [
    {
      x: 30,
      color: COLORS.blue,
      title: 'OWASP Top 10 for LLM Apps',
      role: 'APPLICATION-LEVEL CHECKLIST',
      items: [
        { t: 'Prompt injection', s: 'direct, and indirect via content' },
        { t: 'Excessive agency', s: 'too many tools, too few limits' },
        { t: 'Supply chain risk', s: 'models, plugins, training data' },
        { t: 'Sensitive data exposure', s: 'leaks through output and logs' }
      ],
      use: 'reviewing a build before it ships'
    },
    {
      x: 280,
      color: COLORS.amber,
      title: 'MITRE ATLAS',
      role: 'ADVERSARY TACTICS MATRIX',
      items: [
        { t: 'Tactics × techniques grid', s: 'the AI counterpart to ATT&CK' },
        { t: 'Documented case studies', s: 'observed attacks, not theory' },
        { t: 'Recon → access → impact', s: 'how an attack actually unfolds' },
        { t: 'Shared vocabulary', s: 'red and blue teams both speak it' }
      ],
      use: 'threat-modelling a system'
    },
    {
      x: 530,
      color: COLORS.emerald,
      title: 'Google SAIF',
      role: 'SECURE-BY-DESIGN FRAMEWORK',
      items: [
        { t: 'Extends existing controls', s: 'reuse your security foundations' },
        { t: 'Automate the defences', s: 'keep pace with new attacks' },
        { t: 'Platform-level guardrails', s: 'one control set, many models' },
        { t: 'Risk in business context', s: 'end-to-end, not model-only' }
      ],
      use: 'designing the system up front'
    }
  ];
  const chips = [
    { x: 90, label: 'DESIGN with SAIF' },
    { x: 310, label: 'THREAT-MODEL with ATLAS' },
    { x: 530, label: 'REVIEW with OWASP' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Three lenses on the same programme — none of them replaces the other two">
      <defs>
        <marker id="arrowAIS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three AI security frameworks, three different jobs</text>

      {frameworks.map((f, i) => (
        <g key={i}>
          <rect x={f.x} y="44" width="240" height="286" rx="10" fill={COLORS.white} stroke={f.color} strokeWidth="2" />
          <rect x={f.x} y="44" width="240" height="34" rx="10" fill={f.color} />
          <text x={f.x + 120} y="66" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{f.title}</text>

          <rect x={f.x + 16} y="88" width="208" height="24" rx="6" fill={COLORS.slate100} stroke={COLORS.slate200} strokeWidth="1" />
          <text x={f.x + 120} y="104" textAnchor="middle" fill={f.color} fontSize="9.5" fontWeight="700">{f.role}</text>

          {f.items.map((it, j) => (
            <g key={j}>
              <circle cx={f.x + 26} cy={124 + j * 38} r="3" fill={f.color} />
              <text x={f.x + 38} y={128 + j * 38} fill={COLORS.slate900} fontSize="10.5" fontWeight="600">{it.t}</text>
              <text x={f.x + 38} y={143 + j * 38} fill={COLORS.slate500} fontSize="9">{it.s}</text>
            </g>
          ))}

          <line x1={f.x + 16} y1="274" x2={f.x + 224} y2="274" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={f.x + 120} y="292" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontWeight="700">REACH FOR IT WHEN</text>
          <text x={f.x + 120} y="310" textAnchor="middle" fill={COLORS.slate700} fontSize="10">{f.use}</text>
        </g>
      ))}

      <rect x="30" y="346" width="740" height="72" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">COMPLEMENTARY LENSES, NOT COMPETING STANDARDS</text>
      {chips.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="380" width="180" height="28" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
          <text x={c.x + 90} y="398" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">{c.label}</text>
          {i < 2 && <line x1={c.x + 182} y1="394" x2={c.x + 216} y2="394" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowAIS)" />}
        </g>
      ))}
      <text x="716" y="398" fill={COLORS.slate500} fontSize="9.5" fontStyle="italic">then repeat</text>

      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">A checklist finds omissions, a matrix names the adversary, a design framework stops the problem being built in</text>
    </DiagramFrame>
  );
};

export const SpeechAudioDiagram = () => {
  const asr = [
    { t: 'Capture audio', s: 'mic, phone line, meeting feed' },
    { t: 'Acoustic + language model', s: 'frames → tokens → words' },
    { t: 'Transcript', s: 'timestamps, speaker labels' }
  ];
  const tts = [
    { t: 'Text + style', s: 'what to say, and how to say it' },
    { t: 'Neural TTS model', s: 'prosody, pacing, emphasis' },
    { t: 'Voice cloning', s: 'a short reference sample is enough' }
  ];
  const budget = [
    { w: 110, label: 'Endpointing', color: COLORS.slate400 },
    { w: 140, label: 'ASR', color: COLORS.cyan },
    { w: 220, label: 'Model thinking', color: COLORS.blue },
    { w: 130, label: 'TTS first audio', color: COLORS.emerald },
    { w: 80, label: 'Network', color: COLORS.slate700 }
  ];
  let bx = 60;
  return (
    <DiagramFrame viewBox="0 0 800 430" caption="Recognition and synthesis are solved parts — the loop closing fast enough is the hard part">
      <defs>
        <marker id="arrowSA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The speech stack — in, around, and back out</text>

      {/* ASR */}
      <rect x="30" y="44" width="195" height="230" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="44" width="195" height="32" rx="10" fill={COLORS.cyan} />
      <text x="127" y="65" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">SPEECH → TEXT (ASR)</text>
      {asr.map((s, i) => (
        <g key={i}>
          <rect x="44" y={88 + i * 54} width="167" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x="127" y={108 + i * 54} textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{s.t}</text>
          <text x="127" y={123 + i * 54} textAnchor="middle" fill={COLORS.slate500} fontSize="8.5">{s.s}</text>
        </g>
      ))}
      <text x="127" y="262" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">streaming or batch — a design choice</text>

      {/* Voice agent loop */}
      <rect x="245" y="44" width="310" height="230" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="245" y="44" width="310" height="32" rx="10" fill={COLORS.blue} />
      <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">THE VOICE-AGENT LOOP</text>

      <circle cx="400" cy="118" r="38" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="116" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">Listen</text>
      <text x="400" y="130" textAnchor="middle" fill={COLORS.slate700} fontSize="8.5">capture + ASR</text>

      <circle cx="455" cy="214" r="38" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="455" y="212" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">Understand</text>
      <text x="455" y="226" textAnchor="middle" fill={COLORS.slate700} fontSize="8.5">reason + tools</text>

      <circle cx="345" cy="214" r="38" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="345" y="212" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">Respond</text>
      <text x="345" y="226" textAnchor="middle" fill={COLORS.slate700} fontSize="8.5">TTS playback</text>

      <line x1="419" y1="151" x2="434" y2="178" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSA)" />
      <line x1="417" y1="214" x2="387" y2="214" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSA)" />
      <line x1="364" y1="181" x2="379" y2="155" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSA)" />
      <text x="400" y="266" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">one turn, and barge-in can restart it at any point</text>

      {/* TTS */}
      <rect x="575" y="44" width="195" height="230" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="575" y="44" width="195" height="32" rx="10" fill={COLORS.emerald} />
      <text x="672" y="65" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">TEXT → SPEECH (TTS)</text>
      {tts.map((s, i) => (
        <g key={i}>
          <rect x="589" y={88 + i * 54} width="167" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x="672" y={108 + i * 54} textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{s.t}</text>
          <text x="672" y={123 + i * 54} textAnchor="middle" fill={COLORS.slate500} fontSize="8.5">{s.s}</text>
        </g>
      ))}
      <text x="672" y="262" textAnchor="middle" fill={COLORS.red} fontSize="9" fontStyle="italic">cloning needs consent and disclosure</text>

      <line x1="227" y1="160" x2="243" y2="160" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSA)" />
      <line x1="557" y1="160" x2="573" y2="160" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSA)" />

      {/* Latency budget */}
      <rect x="30" y="290" width="740" height="100" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="290" width="740" height="28" rx="10" fill={COLORS.amber} />
      <text x="400" y="309" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">THE END-TO-END LATENCY BUDGET — why voice is the hardest modality</text>
      {budget.map((b, i) => {
        const x = bx;
        bx += b.w;
        return (
          <g key={i}>
            <rect x={x} y="336" width={b.w} height="30" fill={b.color} />
            <text x={x + b.w / 2} y="355" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="600">{b.label}</text>
          </g>
        );
      })}
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Every stage spends the same budget — what the caller hears is the silence while you spend it</text>

      <text x="400" y="414" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Text can take a second to think; a voice that pauses that long has already lost the conversation</text>
    </DiagramFrame>
  );
};

export const ExplainabilityLayersDiagram = () => {
  const layers = [
    {
      color: COLORS.slate900,
      fill: COLORS.slate900,
      textLight: true,
      t: 'Raw weights and activations',
      s: 'billions of numbers, no direct human reading',
      claim: 'Nothing you can state in words.',
      claim2: 'This is the opaque floor.'
    },
    {
      color: COLORS.slate700,
      fill: COLORS.slate700,
      textLight: true,
      t: 'Feature attribution and probes',
      s: 'which inputs and features moved the output',
      claim: 'Directional evidence about influence,',
      claim2: 'not a complete account of the cause.'
    },
    {
      color: COLORS.amber,
      fill: '#fef3c7',
      textLight: false,
      t: 'Chain-of-thought',
      s: 'the reasoning the model states out loud',
      claim: 'A partial window only — the text can',
      claim2: 'be plausible and still be unfaithful.'
    },
    {
      color: COLORS.blue,
      fill: COLORS.blueLight,
      textLight: false,
      t: 'Model cards and documentation',
      s: 'training scope, intended use, known limits',
      claim: 'Provenance and scope, as declared',
      claim2: 'by whoever built the system.'
    },
    {
      color: COLORS.emerald,
      fill: '#ecfdf5',
      textLight: false,
      t: 'Evals and behavioural testing',
      s: 'measured behaviour on held-out cases',
      claim: 'The strongest evidence available —',
      claim2: 'and it is about behaviour only.'
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Opacity decreases as you move outward — but the outer layers measure behaviour, never the reasoning itself">
      <defs>
        <linearGradient id="opacityEL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={COLORS.slate900} />
          <stop offset="55%" stopColor={COLORS.slate400} />
          <stop offset="100%" stopColor={COLORS.white} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What we can and cannot see inside a model</text>

      <rect x="34" y="52" width="16" height="328" rx="8" fill="url(#opacityEL)" stroke={COLORS.slate300} strokeWidth="1" />
      <text x="24" y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontWeight="700" transform="rotate(-90 24 100)">OPAQUE</text>
      <text x="24" y="330" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontWeight="700" transform="rotate(-90 24 330)">OBSERVABLE</text>

      <text x="64" y="42" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">LAYER</text>
      <text x="500" y="42" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">WHAT YOU CAN HONESTLY CLAIM</text>
      <line x1="490" y1="52" x2="490" y2="380" stroke={COLORS.slate200} strokeWidth="1" />

      {layers.map((l, i) => (
        <g key={i}>
          <rect x="64" y={52 + i * 68} width="420" height="56" rx="8" fill={l.fill} stroke={l.color} strokeWidth="2" />
          <text x="82" y={74 + i * 68} fill={l.textLight ? COLORS.white : COLORS.slate900} fontSize="11.5" fontWeight="700">{l.t}</text>
          <text x="82" y={92 + i * 68} fill={l.textLight ? COLORS.slate300 : COLORS.slate700} fontSize="9.5">{l.s}</text>
          <text x="500" y={76 + i * 68} fill={COLORS.slate700} fontSize="10">{l.claim}</text>
          <text x="500" y={92 + i * 68} fill={COLORS.slate500} fontSize="10">{l.claim2}</text>
        </g>
      ))}

      <rect x="34" y="394" width="736" height="54" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="402" y="416" textAnchor="middle" fill={COLORS.red} fontSize="11" fontWeight="700">THE HONEST BOUNDARY</text>
      <text x="402" y="435" textAnchor="middle" fill={COLORS.slate700} fontSize="10.5">Behaviour can be measured. Internal reasoning can only be partially inspected — never assume the stated reason is the real one.</text>

      <text x="400" y="468" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Every layer above the floor is an approximation — useful, incomplete, and worth saying so out loud</text>
    </DiagramFrame>
  );
};

export const AccountabilityChainDiagram = () => {
  const links = [
    { x: 30, w: 170, color: COLORS.blue, cap: 'BUILDS IT', t: 'Model developer', s: ['trains and ships the model', 'sets capability and policy limits'] },
    { x: 215, w: 170, color: COLORS.cyan, cap: 'DEPLOYS IT', t: 'Deployer / business', s: ['picks the use case and data', 'wires the model into a product'] },
    { x: 400, w: 170, color: COLORS.amber, cap: 'OPERATES IT', t: 'Operator / user', s: ['runs it on real cases', 'accepts or overrides outputs'] },
    { x: 585, w: 185, color: COLORS.red, cap: 'BEARS THE HARM', t: 'The person affected', s: ['did not choose any of this', 'needs someone answerable'] }
  ];
  const mechanisms = [
    { x: 46, t: 'Audit trails', s: ['prompt, model version, output', 'who approved it, and when', 'the decision is reconstructable'] },
    { x: 226, t: 'Human sign-off', s: ['a named person accepts the', 'output before it acts', 'agency stops at a human'] },
    { x: 406, t: 'Split obligations', s: ['provider vs deployer duties', 'written into contract and law', 'nobody can point sideways'] },
    { x: 586, t: 'Insurance and redress', s: ['a funded route to remedy', 'for the person harmed', 'makes the chain payable'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 420" caption="Harm lands at the far end of the chain — the mechanisms exist so it can be traced back to the near end">
      <defs>
        <marker id="arrowAC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The accountability chain when AI causes harm</text>

      {links.map((l, i) => (
        <g key={i}>
          <text x={l.x + l.w / 2} y="46" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontWeight="700">{l.cap}</text>
          <rect x={l.x} y="56" width={l.w} height="92" rx="10" fill={COLORS.white} stroke={l.color} strokeWidth="2" />
          <text x={l.x + l.w / 2} y="86" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{l.t}</text>
          <text x={l.x + l.w / 2} y="110" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{l.s[0]}</text>
          <text x={l.x + l.w / 2} y="126" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{l.s[1]}</text>
          {i < 3 && <line x1={l.x + l.w + 2} y1="102" x2={l.x + l.w + 13} y2="102" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowAC)" />}
        </g>
      ))}

      <rect x="120" y="168" width="380" height="54" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" strokeDasharray="6 4" />
      <text x="310" y="190" textAnchor="middle" fill={COLORS.red} fontSize="10.5" fontWeight="700">THE GAP — WHERE RESPONSIBILITY IS CONTESTED</text>
      <text x="310" y="208" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">&quot;it is a general-purpose tool&quot; vs &quot;that was your deployment choice&quot;</text>
      <line x1="207" y1="166" x2="207" y2="150" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="392" y1="166" x2="392" y2="150" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />

      <text x="400" y="232" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">the claim surfaces on the right and has to be traced back along the chain</text>
      <line x1="677" y1="240" x2="118" y2="240" stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arrowAC)" />

      <rect x="30" y="250" width="740" height="130" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="250" width="740" height="28" rx="10" fill={COLORS.emerald} />
      <text x="400" y="269" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">MECHANISMS THAT CLOSE THE GAP</text>
      {mechanisms.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="290" width="168" height="78" rx="8" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={m.x + 84} y="310" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{m.t}</text>
          <text x={m.x + 84} y="330" textAnchor="middle" fill={COLORS.slate700} fontSize="9">{m.s[0]}</text>
          <text x={m.x + 84} y="344" textAnchor="middle" fill={COLORS.slate700} fontSize="9">{m.s[1]}</text>
          <text x={m.x + 84} y="360" textAnchor="middle" fill={COLORS.emerald} fontSize="9" fontStyle="italic">{m.s[2]}</text>
        </g>
      ))}

      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Accountability is not assigned by the technology — it is assigned in advance, in writing, or it is argued about afterwards</text>
    </DiagramFrame>
  );
};

export const WhyNowDiagram = () => {
  const inputs = [
    { t: 'Transformer architecture', s: 'attention, trained in parallel', color: COLORS.blue, ty: 176 },
    { t: 'Abundant data', s: 'web-scale text, code and images', color: COLORS.cyan, ty: 188 },
    { t: 'Compute at scale', s: 'accelerators, and clusters of them', color: COLORS.amber, ty: 202 },
    { t: 'Capital and talent', s: 'sustained funding, dense research', color: COLORS.emerald, ty: 214 }
  ];
  const results = [
    'General models instead of task-built ones',
    'One system covering many jobs at once',
    'Usable by non-experts, in plain language',
    'Product cycles measured in weeks'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 420" caption="Each ingredient had existed for years — the step-change is what happened when they finally overlapped">
      <defs>
        <marker id="arrowWN" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why now — a convergence, not a breakthrough</text>

      <text x="30" y="46" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">FOUR INPUTS</text>
      {inputs.map((n, i) => (
        <g key={i}>
          <rect x="30" y={56 + i * 68} width="192" height="56" rx="8" fill={COLORS.white} stroke={n.color} strokeWidth="2" />
          <text x="126" y={80 + i * 68} textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{n.t}</text>
          <text x="126" y={97 + i * 68} textAnchor="middle" fill={COLORS.slate500} fontSize="9">{n.s}</text>
          <line x1="224" y1={84 + i * 68} x2="294" y2={n.ty} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWN)" />
        </g>
      ))}

      <rect x="300" y="130" width="170" height="130" rx="12" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="385" y="172" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">CONVERGENCE</text>
      <text x="385" y="198" textAnchor="middle" fill={COLORS.slate700} fontSize="10">all four available</text>
      <text x="385" y="214" textAnchor="middle" fill={COLORS.slate700} fontSize="10">in the same decade</text>
      <text x="385" y="238" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontStyle="italic">each one amplifies</text>
      <text x="385" y="252" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontStyle="italic">the other three</text>

      <line x1="472" y1="195" x2="502" y2="195" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowWN)" />

      <rect x="505" y="125" width="265" height="140" rx="12" fill={COLORS.slate700} />
      <text x="637" y="152" textAnchor="middle" fill={COLORS.white} fontSize="12.5" fontWeight="700">CAPABILITY STEP-CHANGE</text>
      {results.map((r, i) => (
        <g key={i}>
          <circle cx="524" cy={178 + i * 24} r="3" fill={COLORS.blueMid} />
          <text x="536" y={182 + i * 24} fill={COLORS.white} fontSize="10">{r}</text>
        </g>
      ))}

      <rect x="30" y="330" width="740" height="54" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="352" textAnchor="middle" fill={COLORS.amber} fontSize="11" fontWeight="700">NO SINGLE INPUT WAS SUFFICIENT ON ITS OWN</text>
      <text x="400" y="371" textAnchor="middle" fill={COLORS.slate700} fontSize="10.5">Architecture without compute stalls; compute without data overfits; all of it without capital never gets built.</text>

      <text x="400" y="406" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Explaining the moment by one cause gets the story, and the next prediction, wrong</text>
    </DiagramFrame>
  );
};

export const HorizonMapDiagram = () => {
  const bands = [
    {
      x: 30,
      color: COLORS.emerald,
      title: 'NEAR HORIZON',
      confidence: 'visible from here',
      dashed: false,
      items: [
        { t: 'Agents on longer work', s: ['tasks running in the background', 'across many tool calls, not one reply'] },
        { t: 'Small models on device', s: ['private, offline, cheap per call', 'good enough for narrow jobs'] },
        { t: 'Multimodal as default', s: ['text, image and audio in one system', 'rather than bolted on afterwards'] }
      ]
    },
    {
      x: 280,
      color: COLORS.blue,
      title: 'MID HORIZON',
      confidence: 'plausible direction',
      dashed: false,
      items: [
        { t: 'World models and video', s: ['systems that simulate a scene', 'instead of only describing it'] },
        { t: 'AI inside science', s: ['materials, biology, formal proof', 'as an instrument, not an oracle'] },
        { t: 'Open–closed gap narrows', s: ['open weights trail the frontier', 'by less than they used to'] }
      ]
    },
    {
      x: 530,
      color: COLORS.slate400,
      title: 'UNCERTAIN',
      confidence: 'genuinely unknown',
      dashed: true,
      items: [
        { t: 'Timelines', s: ['nobody can honestly say when', 'confident dates are marketing'] },
        { t: 'Where returns flatten', s: ['the ceiling of current scaling', 'is not known from the inside'] },
        { t: 'How society responds', s: ['regulation, adoption and labour', 'move on their own schedule'] }
      ]
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Ordered by confidence, not by calendar — the third band is a list of open questions, not a forecast">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Horizon map — near, mid, and honestly uncertain</text>

      <defs>
        <linearGradient id="fadeHM" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="50%" stopColor={COLORS.blue} />
          <stop offset="100%" stopColor={COLORS.slate200} />
        </linearGradient>
      </defs>

      <text x="30" y="40" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">CLOSER IN — MORE CONFIDENT</text>
      <text x="770" y="40" textAnchor="end" fill={COLORS.slate500} fontSize="9.5" fontWeight="700">FURTHER OUT — LESS KNOWABLE</text>
      <rect x="30" y="44" width="740" height="18" rx="9" fill="url(#fadeHM)" />

      {bands.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y="74"
            width="240"
            height="266"
            rx="10"
            fill={COLORS.white}
            stroke={b.color}
            strokeWidth="2"
            strokeDasharray={b.dashed ? '7 5' : undefined}
          />
          <rect x={b.x} y="74" width="240" height="40" rx="10" fill={b.color} />
          <text x={b.x + 120} y="94" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{b.title}</text>
          <text x={b.x + 120} y="108" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">{b.confidence}</text>
          {b.items.map((it, j) => (
            <g key={j}>
              <rect x={b.x + 14} y={124 + j * 70} width="212" height="62" rx="6" fill={COLORS.slate50} stroke={COLORS.slate200} strokeWidth="1.5" />
              <text x={b.x + 120} y={146 + j * 70} textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{it.t}</text>
              <text x={b.x + 120} y={164 + j * 70} textAnchor="middle" fill={COLORS.slate500} fontSize="9">{it.s[0]}</text>
              <text x={b.x + 120} y={178 + j * 70} textAnchor="middle" fill={COLORS.slate500} fontSize="9">{it.s[1]}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="356" width="740" height="58" rx="10" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="2" />
      <text x="400" y="378" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">QUALITATIVE BANDS ONLY — NO DATES, NO PERCENTAGES</text>
      <text x="400" y="398" textAnchor="middle" fill={COLORS.slate700} fontSize="10.5">The bands say how confident the claim is, not when it lands. Treat anything past the near band as a direction to watch.</text>

      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The useful skill is naming which band a claim belongs to before you plan around it</text>
    </DiagramFrame>
  );
};
