import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const ReasoningComputeDiagram = () => (
  <DiagramFrame viewBox="0 0 800 450" caption="Thinking is a spend, not a setting — buy it for hard problems, refuse it for cheap high-volume ones">
    <defs>
      <marker id="arrowRC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
      </marker>
    </defs>

    <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Standard model vs reasoning model</text>

    {/* Standard model row */}
    <text x="40" y="56" fill={COLORS.slate500} fontSize="11" fontWeight="700">STANDARD MODEL</text>
    <rect x="40" y="66" width="120" height="48" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
    <text x="100" y="96" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="600">Prompt</text>
    <line x1="162" y1="90" x2="194" y2="90" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRC)" />
    <rect x="196" y="66" width="150" height="48" rx="8" fill={COLORS.slate700} />
    <text x="271" y="88" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Model</text>
    <text x="271" y="105" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.85">answers immediately</text>
    <line x1="348" y1="90" x2="380" y2="90" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRC)" />
    <rect x="382" y="66" width="120" height="48" rx="8" fill={COLORS.blue} />
    <text x="442" y="96" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Answer</text>
    <text x="524" y="84" fill={COLORS.slate700} fontSize="11" fontWeight="600">Fast, cheap, flat cost</text>
    <text x="524" y="102" fill={COLORS.slate500} fontSize="10">No intermediate work to pay for</text>

    <line x1="40" y1="134" x2="760" y2="134" stroke={COLORS.slate300} strokeWidth="1" strokeDasharray="4 3" />

    {/* Reasoning model row */}
    <text x="40" y="160" fill={COLORS.slate500} fontSize="11" fontWeight="700">REASONING MODEL</text>
    <rect x="40" y="196" width="120" height="48" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
    <text x="100" y="226" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="600">Prompt</text>
    <line x1="162" y1="220" x2="178" y2="220" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRC)" />

    <rect x="180" y="168" width="430" height="104" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" strokeDasharray="6 4" />
    <text x="395" y="186" textAnchor="middle" fill={COLORS.amber} fontSize="10" fontWeight="700">INTERNAL THINKING TOKENS — billed, usually hidden</text>
    {[
      { x: 192, label: 'Decompose', sub: 'split the task' },
      { x: 296, label: 'Attempt', sub: 'draft a path' },
      { x: 400, label: 'Check', sub: 'test the work' },
      { x: 504, label: 'Revise', sub: 'fix and retry' }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="194" width="92" height="50" rx="6" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
        <text x={s.x + 46} y="216" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{s.label}</text>
        <text x={s.x + 46} y="232" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{s.sub}</text>
        {i < 3 && <line x1={s.x + 93} y1="219" x2={s.x + 103} y2="219" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowRC)" />}
      </g>
    ))}
    <text x="395" y="262" textAnchor="middle" fill={COLORS.slate500} fontSize="9">loops until the model is satisfied — length varies per question</text>

    <line x1="612" y1="220" x2="638" y2="220" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRC)" />
    <rect x="640" y="196" width="120" height="48" rx="8" fill={COLORS.blue} />
    <text x="700" y="226" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Answer</text>

    {/* Tradeoff */}
    <rect x="40" y="300" width="350" height="120" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <rect x="40" y="300" width="350" height="28" rx="8" fill={COLORS.emerald} />
    <text x="215" y="319" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">WORTH THE COMPUTE</text>
    {['Multi-step maths and proofs', 'Non-trivial code and debugging', 'Planning under many constraints'].map((t, i) => (
      <g key={i}>
        <circle cx="60" cy={i * 24 + 345} r="3" fill={COLORS.emerald} />
        <text x="74" y={i * 24 + 349} fill={COLORS.slate700} fontSize="11">{t}</text>
      </g>
    ))}

    <rect x="410" y="300" width="350" height="120" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
    <rect x="410" y="300" width="350" height="28" rx="8" fill={COLORS.red} />
    <text x="585" y="319" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">WRONG TOOL</text>
    {['Simple, high-volume classification', 'Latency-sensitive interactive UX', 'Anything a cheap model already ties'].map((t, i) => (
      <g key={i}>
        <circle cx="430" cy={i * 24 + 345} r="3" fill={COLORS.red} />
        <text x="444" y={i * 24 + 349} fill={COLORS.slate700} fontSize="11">{t}</text>
      </g>
    ))}

    <text x="400" y="440" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Latency and cost per call scale with how long it thinks — the same accuracy is a loss if the task was easy</text>
  </DiagramFrame>
);

export const GenerativeArchitecturesDiagram = () => {
  const families = [
    {
      x: 30,
      color: COLORS.blue,
      title: 'Latent diffusion',
      steps: [
        { a: 'Start: pure noise', b: 'in a compressed latent space' },
        { a: 'Denoise, many steps', b: 'U-Net or DiT, text-conditioned' },
        { a: 'Decode latent → image', b: 'decoder maps back to pixels' }
      ],
      note: ['Quality scales with step count —', 'each step is another model pass.']
    },
    {
      x: 285,
      color: COLORS.cyan,
      title: 'Flow matching',
      steps: [
        { a: 'Start: pure noise', b: 'same starting point' },
        { a: 'Follow a learned path', b: 'model predicts the velocity' },
        { a: 'Integrate → data', b: 'straighter path, fewer steps' }
      ],
      note: ['Same destination as diffusion,', 'reached in fewer, larger moves.']
    },
    {
      x: 540,
      color: COLORS.amber,
      title: 'Autoregressive',
      steps: [
        { a: 'Prompt → token grid', b: 'image or video as tokens' },
        { a: 'Predict the next token', b: 'one at a time, in order' },
        { a: 'Detokenize → frames', b: 'decoder rebuilds pixels' }
      ],
      note: ['The text-LLM recipe applied to', 'pixels; natural fit for video.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 400" caption="Generation is a transport problem — the three families differ in the route from noise to data, not the destination">
      <defs>
        <marker id="arrowGA" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three generative families</text>
      {families.map((f, i) => (
        <g key={i}>
          <rect x={f.x} y="44" width="240" height="306" rx="10" fill={COLORS.white} stroke={f.color} strokeWidth="2" />
          <rect x={f.x} y="44" width="240" height="36" rx="10" fill={f.color} />
          <text x={f.x + 120} y="68" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{f.title}</text>
          {f.steps.map((s, j) => (
            <g key={j}>
              <rect x={f.x + 16} y={96 + j * 74} width="208" height="56" rx="6" fill={COLORS.slate50} stroke={f.color} strokeWidth="1.5" />
              <text x={f.x + 120} y={118 + j * 74} textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{s.a}</text>
              <text x={f.x + 120} y={136 + j * 74} textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{s.b}</text>
              {j < 2 && <line x1={f.x + 120} y1={154 + j * 74} x2={f.x + 120} y2={168 + j * 74} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowGA)" />}
            </g>
          ))}
          <text x={f.x + 120} y="322" textAnchor="middle" fill={f.color} fontSize="10" fontStyle="italic">{f.note[0]}</text>
          <text x={f.x + 120} y="338" textAnchor="middle" fill={f.color} fontSize="10" fontStyle="italic">{f.note[1]}</text>
        </g>
      ))}
      <text x="400" y="378" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">All three learn a mapping from noise or tokens to data — the path taken is the design choice</text>
    </DiagramFrame>
  );
};

export const MultimodalUnderstandingDiagram = () => (
  <DiagramFrame viewBox="0 0 800 430" caption="Every modality has to become vectors in one space — the open question is whether that space was designed in or bolted on">
    <defs>
      <marker id="arrowMU" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Multimodal understanding — the ingest path</text>

    {[
      { y: 44, input: 'Image', sub: 'pixels', enc: 'Vision encoder', encSub: 'patches → vectors' },
      { y: 119, input: 'Audio', sub: 'waveform', enc: 'Audio encoder', encSub: 'frames → vectors' },
      { y: 194, input: 'Text', sub: 'characters', enc: 'Tokenizer + embed', encSub: 'tokens → vectors' }
    ].map((r, i) => (
      <g key={i}>
        <rect x="30" y={r.y} width="110" height="52" rx="8" fill={COLORS.slate700} />
        <text x="85" y={r.y + 24} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{r.input}</text>
        <text x="85" y={r.y + 40} textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.85">{r.sub}</text>
        <line x1="142" y1={r.y + 26} x2="166" y2={r.y + 26} stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowMU)" />
        <rect x="168" y={r.y} width="150" height="52" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
        <text x="243" y={r.y + 24} textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{r.enc}</text>
        <text x="243" y={r.y + 40} textAnchor="middle" fill={COLORS.slate500} fontSize="9">{r.encSub}</text>
        <line x1="320" y1={r.y + 26} x2="346" y2={r.y + 26} stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowMU)" />
      </g>
    ))}

    <rect x="350" y="36" width="150" height="232" rx="12" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
    <text x="425" y="112" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">Shared</text>
    <text x="425" y="132" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">representation</text>
    <text x="425" y="152" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">space</text>
    <text x="425" y="180" textAnchor="middle" fill={COLORS.slate700} fontSize="10">one sequence of</text>
    <text x="425" y="196" textAnchor="middle" fill={COLORS.slate700} fontSize="10">vectors, whatever</text>
    <text x="425" y="212" textAnchor="middle" fill={COLORS.slate700} fontSize="10">went in</text>

    <line x1="502" y1="152" x2="536" y2="152" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowMU)" />
    <rect x="540" y="110" width="200" height="84" rx="10" fill={COLORS.slate700} />
    <text x="640" y="140" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Transformer model</text>
    <text x="640" y="160" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">reads every modality as</text>
    <text x="640" y="176" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">one interleaved stream</text>
    <text x="640" y="218" textAnchor="middle" fill={COLORS.slate500} fontSize="10">→ answer, caption, action</text>

    <rect x="30" y="290" width="350" height="120" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
    <rect x="30" y="290" width="350" height="28" rx="8" fill={COLORS.slate400} />
    <text x="205" y="309" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">PATH 1 · BOLT-ON ADAPTERS</text>
    {['Frozen text model + a trained projection layer', 'Cheap, fast to ship, easy to add a modality', 'Modality is a guest: weaker cross-modal reasoning'].map((t, i) => (
      <text key={i} x="48" y={i * 22 + 344} fill={COLORS.slate700} fontSize="10.5">{t}</text>
    ))}

    <rect x="420" y="290" width="350" height="120" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <rect x="420" y="290" width="350" height="28" rx="8" fill={COLORS.blue} />
    <text x="595" y="309" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">PATH 2 · NATIVELY MULTIMODAL</text>
    {['Pretrained on interleaved image, audio and text', 'Expensive: the data mix must be right up front', 'Reasons across modalities, not merely about them'].map((t, i) => (
      <text key={i} x="438" y={i * 22 + 344} fill={COLORS.slate700} fontSize="10.5">{t}</text>
    ))}
  </DiagramFrame>
);

export const AlignmentStackDiagram = () => {
  const stages = [
    { x: 30, color: COLORS.slate700, head: '1 · PRETRAINING', lines: ['Next-token learning', 'on a broad corpus', 'Buys capability,', 'not values'] },
    { x: 181, color: COLORS.blue, head: '2 · FINE-TUNING', lines: ['Curated', 'demonstrations', 'Teaches format,', 'tone and refusals'] },
    { x: 332, color: COLORS.cyan, head: '3 · PREFERENCES', lines: ['RLHF · DPO ·', 'constitutional AI', 'Ranks outputs, not', 'just imitates them'] },
    { x: 483, color: COLORS.amber, head: '4 · EVALS', lines: ['Dangerous-capability', 'probes: bio, cyber,', 'autonomy', 'Gates the release'] },
    { x: 634, color: COLORS.emerald, head: '5 · GUARDRAILS', lines: ['Classifiers, policy,', 'monitoring, limits', 'The only layer', 'users touch'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 380" caption="No single technique aligns a model — each layer catches what the one before it missed, and interpretability watches all of them">
      <defs>
        <marker id="arrowAS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Alignment as layered engineering</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="44" width="136" height="116" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
          <rect x={s.x} y="44" width="136" height="26" rx="8" fill={s.color} />
          <text x={s.x + 68} y="62" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{s.head}</text>
          {s.lines.map((l, j) => (
            <text key={j} x={s.x + 68} y={88 + j * 16} textAnchor="middle" fill={j < 2 ? COLORS.slate900 : COLORS.slate500} fontSize="10" fontWeight={j < 2 ? '600' : '400'}>{l}</text>
          ))}
          {i < 4 && <line x1={s.x + 138} y1="102" x2={s.x + 149} y2="102" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowAS)" />}
          <line x1={s.x + 68} y1="160" x2={s.x + 68} y2="228" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
        </g>
      ))}

      <rect x="30" y="228" width="740" height="76" rx="10" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2" />
      <text x="400" y="254" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="700">INTERPRETABILITY — a cross-cutting inspection lane</text>
      <text x="400" y="274" textAnchor="middle" fill={COLORS.slate700} fontSize="10">features · circuits · activation steering · probing internal states</text>
      <text x="400" y="292" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">Not a stage in the line: it looks inside the model at every stage</text>

      <text x="400" y="334" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Eval results and deployment incidents feed back into data, policy and training</text>
      <line x1="702" y1="348" x2="98" y2="348" stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arrowAS)" />
    </DiagramFrame>
  );
};

export const GovernanceLandscapeDiagram = () => (
  <DiagramFrame viewBox="0 0 800 478" caption="One binding anchor, two very different national approaches, and a voluntary layer that shows up in every procurement questionnaire">
    <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">AI governance landscape — mid-2026</text>

    {/* EU anchor */}
    <rect x="30" y="40" width="740" height="140" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="50" y="66" fill={COLORS.blue} fontSize="13" fontWeight="700">EU AI Act — the anchor</text>
    <text x="750" y="66" textAnchor="end" fill={COLORS.slate500} fontSize="10">risk-based · applies to anyone placing systems on the EU market</text>
    {[
      { x: 50, w: 210, cx: 155, title: 'In force 2024', sub: 'risk tiers and prohibitions set' },
      { x: 290, w: 210, cx: 395, title: 'GPAI obligations 2025', sub: 'transparency, systemic-risk duties' },
      { x: 530, w: 240, cx: 650, title: 'High-risk phasing 2026–2027', sub: 'obligations land in stages' }
    ].map((c, i) => (
      <g key={i}>
        <rect x={c.x} y="80" width={c.w} height="52" rx="8" fill={COLORS.blueLight} stroke={COLORS.blueMid} strokeWidth="1.5" />
        <text x={c.cx} y="102" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{c.title}</text>
        <text x={c.cx} y="119" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{c.sub}</text>
        <line x1={c.cx} y1="132" x2={c.cx} y2="146" stroke={COLORS.blueMid} strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx={c.cx} cy="152" r="6" fill={COLORS.blue} />
      </g>
    ))}
    <line x1="60" y1="152" x2="750" y2="152" stroke={COLORS.blueMid} strokeWidth="2" />
    <text x="400" y="172" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">Phased sequencing — the obligations arrive in waves, they do not all start at once</text>

    {/* US */}
    <rect x="30" y="196" width="360" height="150" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
    <rect x="30" y="196" width="360" height="30" rx="10" fill={COLORS.amber} />
    <text x="210" y="217" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">UNITED STATES — a patchwork</text>
    {['State laws move first, and they differ', 'Sector agencies issue guidance, not statute', 'Federal turn toward deregulation and preemption', 'Net effect: duties depend on where and what'].map((t, i) => (
      <g key={i}>
        <circle cx="50" cy={i * 24 + 250} r="3" fill={COLORS.amber} />
        <text x="64" y={i * 24 + 254} fill={COLORS.slate700} fontSize="10.5">{t}</text>
      </g>
    ))}

    {/* China */}
    <rect x="410" y="196" width="360" height="150" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
    <rect x="410" y="196" width="360" height="30" rx="10" fill={COLORS.slate700} />
    <text x="590" y="217" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">CHINA — targeted measures</text>
    {['Filing regimes for algorithms and models', 'Rules aimed at generative and synthetic media', 'Labelling duties for AI-generated content', 'Security review before public-facing launch'].map((t, i) => (
      <g key={i}>
        <circle cx="430" cy={i * 24 + 250} r="3" fill={COLORS.slate700} />
        <text x="444" y={i * 24 + 254} fill={COLORS.slate700} fontSize="10.5">{t}</text>
      </g>
    ))}

    {/* Voluntary band */}
    <rect x="30" y="362" width="740" height="96" rx="10" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="2" />
    <text x="400" y="386" textAnchor="middle" fill={COLORS.emerald} fontSize="11" fontWeight="700">VOLUNTARY FRAMEWORKS — not law, but how buyers and auditors ask you to prove it</text>
    <rect x="60" y="398" width="320" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" />
    <text x="220" y="418" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">NIST AI RMF</text>
    <text x="220" y="434" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">govern · map · measure · manage</text>
    <rect x="420" y="398" width="320" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" />
    <text x="580" y="418" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">ISO/IEC 42001</text>
    <text x="580" y="434" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">certifiable AI management system</text>
  </DiagramFrame>
);

export const ContextEngineeringDiagram = () => (
  <DiagramFrame viewBox="0 0 800 410" caption="What you pack into the window beats how big the window is — curation is the engineering work">
    <defs>
      <marker id="arrowCE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
      </marker>
    </defs>
    <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The context window is a budget</text>

    <text x="175" y="46" textAnchor="middle" fill={COLORS.red} fontSize="10" fontWeight="700">FIXED WINDOW — hard token ceiling</text>
    <line x1="60" y1="54" x2="290" y2="54" stroke={COLORS.red} strokeWidth="2" strokeDasharray="5 4" />

    <rect x="70" y="60" width="210" height="34" rx="4" fill={COLORS.slate700} />
    <text x="175" y="82" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">System prompt + policy</text>

    <rect x="70" y="96" width="210" height="46" fill={COLORS.blue} />
    <text x="175" y="118" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Tool definitions</text>
    <text x="175" y="133" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">schemas cost tokens too</text>

    <rect x="70" y="144" width="210" height="72" fill={COLORS.cyan} />
    <text x="175" y="170" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Retrieved documents</text>
    <text x="175" y="188" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">often the biggest slice</text>
    <text x="175" y="203" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">and the least curated</text>

    <rect x="70" y="218" width="210" height="80" fill={COLORS.amber} />
    <text x="175" y="246" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Conversation history</text>
    <text x="175" y="264" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">grows every single turn</text>
    <text x="175" y="279" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">whether it helps or not</text>

    <rect x="70" y="300" width="210" height="44" rx="4" fill={COLORS.emerald} />
    <text x="175" y="320" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Scratchpad / plan</text>
    <text x="175" y="336" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the model&apos;s own notes</text>

    <text x="175" y="364" textAnchor="middle" fill={COLORS.slate500} fontSize="10">all five compete for the same tokens</text>

    {[
      {
        y: 60,
        color: COLORS.cyan,
        head: 'RETRIEVAL — fetch just in time',
        lines: ['Pull the three relevant chunks, not the corpus', 'Index quality beats window size, every time']
      },
      {
        y: 164,
        color: COLORS.amber,
        head: 'COMPACTION — summarise the tail',
        lines: ['Old turns collapse into a short running summary', 'Keeps the thread, hands the tokens back']
      },
      {
        y: 268,
        color: COLORS.blue,
        head: 'HYGIENE — trim what you load',
        lines: ['Load tools on demand; cap verbose tool output', 'Every unused token is attention you paid for']
      }
    ].map((c, i) => (
      <g key={i}>
        <rect x="380" y={c.y} width="390" height="88" rx="8" fill={COLORS.white} stroke={c.color} strokeWidth="2" />
        <rect x="380" y={c.y} width="390" height="26" rx="8" fill={c.color} />
        <text x="575" y={c.y + 18} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{c.head}</text>
        <text x="398" y={c.y + 50} fill={COLORS.slate700} fontSize="10.5">{c.lines[0]}</text>
        <text x="398" y={c.y + 70} fill={COLORS.slate500} fontSize="10.5">{c.lines[1]}</text>
        <line x1="378" y1={c.y + 44} x2="292" y2={c.y + 44} stroke={COLORS.slate500} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowCE)" />
      </g>
    ))}

    <text x="400" y="394" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A bigger window does not fix a badly packed one — relevance density is what the model actually reads</text>
  </DiagramFrame>
);
