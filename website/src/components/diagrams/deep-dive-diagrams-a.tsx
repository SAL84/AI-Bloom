import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const ScalingLawsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 470" caption="When training data runs short, capability keeps coming — bought per query instead of per model">
    <defs>
      <marker id="arrowSL" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
      </marker>
      <marker id="arrowSLr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
      </marker>
    </defs>
    <text x="400" y="26" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two scaling eras</text>

    {/* ERA 1 — pretraining */}
    <rect x="30" y="44" width="360" height="346" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="210" y="68" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">Era 1 — Pretraining scaling</text>
    {['compute', 'training data', 'parameters'].map((c, i) => (
      <g key={i}>
        <rect x={46 + i * 112} y="84" width="104" height="28" rx="6" fill={COLORS.blueLight} stroke={COLORS.blueMid} strokeWidth="1" />
        <text x={98 + i * 112} y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">{c}</text>
      </g>
    ))}
    <line x1="210" y1="114" x2="210" y2="128" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSL)" />
    <line x1="72" y1="136" x2="72" y2="306" stroke={COLORS.slate300} strokeWidth="1.5" />
    <line x1="72" y1="306" x2="368" y2="306" stroke={COLORS.slate300} strokeWidth="1.5" />
    <text transform="rotate(-90 58 221)" x="58" y="221" textAnchor="middle" fill={COLORS.slate500} fontSize="10">capability</text>
    <text x="220" y="322" textAnchor="middle" fill={COLORS.slate500} fontSize="9">scale of the training run (log)</text>
    <path d="M 72 296 C 130 260 170 205 220 180 C 270 155 300 146 320 143" fill="none" stroke={COLORS.blue} strokeWidth="3" />
    <path d="M 320 143 C 338 141 356 140 366 139" fill="none" stroke={COLORS.slate400} strokeWidth="2" strokeDasharray="4 4" />
    <line x1="320" y1="136" x2="320" y2="306" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="5 4" />
    <text x="320" y="131" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">data wall</text>
    <rect x="44" y="330" width="332" height="52" rx="6" fill={COLORS.blueLight} stroke={COLORS.blueMid} strokeWidth="1" />
    <text x="210" y="350" textAnchor="middle" fill={COLORS.blue} fontSize="10" fontWeight="700">Chinchilla rule: ~20 training tokens per parameter</text>
    <text x="210" y="368" textAnchor="middle" fill={COLORS.slate700} fontSize="9">a bigger model needs proportionally more data, and text is finite</text>

    {/* ERA 2 — test-time */}
    <rect x="410" y="44" width="360" height="346" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <text x="590" y="68" textAnchor="middle" fill={COLORS.emerald} fontSize="13" fontWeight="700">Era 2 — Test-time scaling</text>
    {['longer reasoning', 'sample & search', 'self-verify'].map((c, i) => (
      <g key={i}>
        <rect x={426 + i * 112} y="84" width="104" height="28" rx="6" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="1" />
        <text x={478 + i * 112} y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">{c}</text>
      </g>
    ))}
    <line x1="590" y1="114" x2="590" y2="128" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSL)" />
    <line x1="452" y1="136" x2="452" y2="306" stroke={COLORS.slate300} strokeWidth="1.5" />
    <line x1="452" y1="306" x2="748" y2="306" stroke={COLORS.slate300} strokeWidth="1.5" />
    <text transform="rotate(-90 438 221)" x="438" y="221" textAnchor="middle" fill={COLORS.slate500} fontSize="10">answer quality</text>
    <text x="600" y="322" textAnchor="middle" fill={COLORS.slate500} fontSize="9">thinking tokens spent on one query (log)</text>
    <path d="M 452 298 C 500 270 540 226 590 201 C 640 176 700 160 746 152" fill="none" stroke={COLORS.emerald} strokeWidth="3" />
    <rect x="424" y="330" width="332" height="52" rx="6" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="1" />
    <text x="590" y="350" textAnchor="middle" fill={COLORS.emerald} fontSize="10" fontWeight="700">Same weights, more compute at answer time</text>
    <text x="590" y="368" textAnchor="middle" fill={COLORS.slate700} fontSize="9">quality rises with reasoning effort — no retraining required</text>

    {/* Progression band */}
    <rect x="30" y="406" width="740" height="48" rx="8" fill={COLORS.slate100} stroke={COLORS.slate200} strokeWidth="1" />
    <text x="52" y="434" fill={COLORS.slate700} fontSize="11" fontWeight="600">Era 1: capability bought once, per training run</text>
    <line x1="330" y1="430" x2="380" y2="430" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSLr)" />
    <text x="396" y="434" fill={COLORS.slate700} fontSize="11" fontWeight="600">Era 2: capability bought again and again, per query</text>
  </DiagramFrame>
);

export const ComputeStackDiagram = () => {
  const layers = [
    { title: 'Accelerators', sub: 'GPU · TPU · custom silicon', detail: 'peak FLOPs, tensor cores, low-precision formats', color: COLORS.slate700, hot: false },
    { title: 'Memory', sub: 'HBM capacity + bandwidth', detail: 'weights and KV cache must be fed on every step', color: COLORS.amber, hot: true },
    { title: 'Interconnect', sub: 'intra-node links · cluster fabric', detail: 'collective ops set the pace of a distributed run', color: '#fb923c', hot: true },
    { title: 'Cluster & datacenter', sub: 'power · cooling · floor space', detail: 'capacity is gated by megawatts, not by chip count', color: COLORS.blue, hot: false }
  ];
  const notes = [
    'Peak FLOPs is a spec-sheet number.',
    'Real throughput is set by how fast',
    'weights reach the compute units.',
    null,
    'Decode is bandwidth-bound: every',
    'token re-reads the whole model.',
    null,
    'Scale-out is link-bound: the slowest',
    'hop throttles the entire cluster.'
  ];
  let ny = 112;
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Accelerators rarely run out of math first — they run out of bytes delivered per second">
      <text x="40" y="32" fill={COLORS.slate900} fontSize="14" fontWeight="700">The AI compute stack — and where it actually stalls</text>
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="40" y={56 + i * 100} width="470" height="84" rx="9" fill={l.color} />
          <text x="60" y={84 + i * 100} fill={COLORS.white} fontSize="13" fontWeight="700">{l.title}</text>
          <text x="60" y={104 + i * 100} fill={COLORS.white} fontSize="10" opacity="0.92">{l.sub}</text>
          <text x="60" y={124 + i * 100} fill={COLORS.white} fontSize="10" opacity="0.8">{l.detail}</text>
          {l.hot && (
            <g>
              <rect x="378" y={68 + i * 100} width="112" height="22" rx="11" fill={COLORS.white} opacity="0.25" />
              <text x="434" y={83 + i * 100} textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">BOTTLENECK</text>
            </g>
          )}
          {i < 3 && <line x1="275" y1={140 + i * 100} x2="275" y2={156 + i * 100} stroke={COLORS.slate300} strokeWidth="2" />}
        </g>
      ))}
      <rect x="530" y="56" width="230" height="384" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="530" y="56" width="230" height="34" rx="9" fill={COLORS.slate700} />
      <text x="645" y="78" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Why FLOPs mislead</text>
      {notes.map((n, i) => {
        if (!n) { ny += 10; return null; }
        const y = ny;
        ny += 17;
        return <text key={i} x="548" y={y} fill={COLORS.slate700} fontSize="10">{n}</text>;
      })}
      <rect x="548" y="312" width="194" height="104" rx="7" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="645" y="336" textAnchor="middle" fill={COLORS.amber} fontSize="11" fontWeight="700">Rule of thumb</text>
      <text x="645" y="360" textAnchor="middle" fill={COLORS.slate700} fontSize="10">A busy accelerator is often</text>
      <text x="645" y="378" textAnchor="middle" fill={COLORS.slate700} fontSize="10">an idle one, waiting on data.</text>
      <text x="645" y="400" textAnchor="middle" fill={COLORS.slate500} fontSize="9">Compare bandwidth and topology,</text>
      <text x="645" y="412" textAnchor="middle" fill={COLORS.slate500} fontSize="9">not headline FLOPs.</text>
      <rect x="40" y="458" width="720" height="44" rx="8" fill={COLORS.slate100} stroke={COLORS.slate200} strokeWidth="1" />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Every layer must keep the one above it fed — the stack runs at the speed of its narrowest pipe.</text>
      <text x="400" y="494" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Memory bandwidth per dollar and interconnect topology decide real-world performance.</text>
    </DiagramFrame>
  );
};

export const MoEDiagram = () => {
  const activeIdx = [2, 5];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Memory cost scales with every expert; compute cost scales only with the few that light up">
      <defs>
        <marker id="arrowMoE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="28" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Mixture of experts — sparse activation</text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="30" y={140 + i * 50} width="86" height="32" rx="6" fill={i === 1 ? COLORS.blue : COLORS.white} stroke={i === 1 ? COLORS.blue : COLORS.slate300} strokeWidth="1.5" />
          <text x="73" y={161 + i * 50} textAnchor="middle" fill={i === 1 ? COLORS.white : COLORS.slate500} fontSize="10" fontWeight="600">token {i + 1}</text>
          <line x1="116" y1={156 + i * 50} x2="170" y2="205" stroke={COLORS.slate300} strokeWidth="1.5" />
        </g>
      ))}
      <text x="73" y="122" textAnchor="middle" fill={COLORS.slate500} fontSize="10">tokens in</text>

      <rect x="170" y="130" width="110" height="150" rx="9" fill={COLORS.blue} />
      <text x="225" y="185" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Router</text>
      <text x="225" y="205" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">gating network</text>
      <text x="225" y="223" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">picks top-k of N</text>
      <text x="225" y="243" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.8">per token, per layer</text>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const y = 52 + i * 44;
        const on = activeIdx.indexOf(i) !== -1;
        return (
          <g key={i}>
            <line x1="280" y1="205" x2="340" y2={y + 17} stroke={on ? COLORS.emerald : COLORS.slate300} strokeWidth={on ? 2.5 : 1} strokeDasharray={on ? undefined : '3 3'} />
            <rect x="340" y={y} width="160" height="34" rx="6" fill={on ? COLORS.emerald : COLORS.white} stroke={on ? COLORS.emerald : COLORS.slate300} strokeWidth="1.5" />
            <text x="420" y={y + 22} textAnchor="middle" fill={on ? COLORS.white : COLORS.slate400} fontSize="10" fontWeight={on ? '700' : '400'}>
              {on ? `Expert ${i + 1} — active` : `Expert ${i + 1} — idle, resident`}
            </text>
            {on && <line x1="500" y1={y + 17} x2="558" y2="205" stroke={COLORS.emerald} strokeWidth="2.5" markerEnd="url(#arrowMoE)" />}
          </g>
        );
      })}
      <text x="420" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">N experts, all held in memory</text>

      <rect x="560" y="170" width="150" height="70" rx="9" fill={COLORS.slate700} />
      <text x="635" y="198" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Weighted sum</text>
      <text x="635" y="218" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">→ next layer</text>

      <text x="40" y="412" fill={COLORS.slate500} fontSize="10">Parameters resident in memory vs parameters used for one token</text>
      <rect x="40" y="420" width="720" height="26" rx="6" fill={COLORS.slate200} />
      <rect x="40" y="420" width="180" height="26" rx="6" fill={COLORS.blue} />
      <text x="130" y="437" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">active per token</text>
      <text x="490" y="437" textAnchor="middle" fill={COLORS.slate700} fontSize="10">total parameters — every expert stays loaded in HBM</text>
    </DiagramFrame>
  );
};

export const InferenceServingDiagram = () => {
  const levers = [
    { name: 'KV cache', a: 'reuse attention state instead of', b: 'recomputing the whole prefix', color: COLORS.blue },
    { name: 'Continuous batching', a: 'swap finished sequences out so', b: 'the accelerator is never idle', color: COLORS.cyan },
    { name: 'PagedAttention', a: 'hold KV cache in fixed pages so', b: 'memory does not fragment', color: COLORS.emerald },
    { name: 'Speculative decoding', a: 'a small model drafts, the big one', b: 'verifies several tokens at once', color: COLORS.amber },
    { name: 'Quantization', a: 'fewer bits per weight means', b: 'fewer bytes moved each step', color: COLORS.slate700 }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="One request, two workloads: prefill fills the math units, decode starves on memory traffic">
      <defs>
        <marker id="arrowIS" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="40" y="32" fill={COLORS.slate900} fontSize="14" fontWeight="700">Serving a request: two very different phases</text>

      <rect x="40" y="56" width="490" height="44" rx="8" fill={COLORS.slate700} />
      <text x="60" y="77" fill={COLORS.white} fontSize="12" fontWeight="700">Request in</text>
      <text x="60" y="92" fill={COLORS.white} fontSize="9" opacity="0.85">prompt · system context · sampling params</text>
      <line x1="285" y1="100" x2="285" y2="114" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowIS)" />

      <rect x="40" y="116" width="490" height="112" rx="9" fill={COLORS.blue} />
      <text x="60" y="144" fill={COLORS.white} fontSize="14" fontWeight="700">Prefill</text>
      <rect x="378" y="126" width="138" height="22" rx="11" fill={COLORS.white} opacity="0.25" />
      <text x="447" y="141" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">COMPUTE-BOUND</text>
      <text x="60" y="170" fill={COLORS.white} fontSize="10" opacity="0.92">All prompt tokens are processed in parallel</text>
      <text x="60" y="190" fill={COLORS.white} fontSize="10" opacity="0.92">Dense matrix math saturates the accelerator</text>
      <text x="60" y="210" fill={COLORS.white} fontSize="10" opacity="0.92">Produces the first token and populates the KV cache</text>
      <line x1="285" y1="228" x2="285" y2="242" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowIS)" />

      <rect x="40" y="244" width="490" height="112" rx="9" fill={COLORS.cyan} />
      <text x="60" y="272" fill={COLORS.white} fontSize="14" fontWeight="700">Decode</text>
      <rect x="340" y="254" width="176" height="22" rx="11" fill={COLORS.white} opacity="0.25" />
      <text x="428" y="269" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">MEMORY-BANDWIDTH-BOUND</text>
      <text x="60" y="298" fill={COLORS.white} fontSize="10" opacity="0.92">One token at a time, strictly sequential</text>
      <text x="60" y="318" fill={COLORS.white} fontSize="10" opacity="0.92">Every step re-reads the weights and the KV cache</text>
      <text x="60" y="338" fill={COLORS.white} fontSize="10" opacity="0.92">Latency is paid per token, not per prompt</text>
      <line x1="285" y1="356" x2="285" y2="370" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowIS)" />

      <rect x="40" y="372" width="490" height="44" rx="8" fill={COLORS.emerald} />
      <text x="60" y="393" fill={COLORS.white} fontSize="12" fontWeight="700">Response streams out</text>
      <text x="60" y="408" fill={COLORS.white} fontSize="9" opacity="0.9">tokens delivered as they are produced</text>

      <rect x="560" y="56" width="210" height="360" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="560" y="56" width="210" height="32" rx="9" fill={COLORS.slate700} />
      <text x="665" y="78" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Optimisation levers</text>
      {levers.map((l, i) => (
        <g key={i}>
          <rect x="572" y={98 + i * 64} width="4" height="48" rx="2" fill={l.color} />
          <text x="586" y={112 + i * 64} fill={COLORS.slate900} fontSize="10" fontWeight="700">{l.name}</text>
          <text x="586" y={127 + i * 64} fill={COLORS.slate500} fontSize="9">{l.a}</text>
          <text x="586" y={140 + i * 64} fill={COLORS.slate500} fontSize="9">{l.b}</text>
        </g>
      ))}
      <text x="400" y="446" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">Most serving wins come from optimising the two phases separately.</text>
    </DiagramFrame>
  );
};

export const AIEconomicsDiagram = () => {
  const cum = [];
  const cost = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    cum.push(`${(110 + t * 640).toFixed(1)},${(260 - 176 * Math.pow(t, 1.8)).toFixed(1)}`);
    cost.push(`${(110 + t * 640).toFixed(1)},${(320 + 84 * (1 - Math.exp(-3.2 * t))).toFixed(1)}`);
  }
  const cumPts = cum.join(' ');
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Training is a one-off spike; inference is a bill that never stops — even as each token gets cheaper">
      <text x="40" y="30" fill={COLORS.slate900} fontSize="14" fontWeight="700">The economics of intelligence</text>

      {/* Chart 1 — cumulative spend */}
      <text x="40" y="52" fill={COLORS.slate700} fontSize="11" fontWeight="700">Total spend over a model&apos;s life</text>
      <line x1="80" y1="62" x2="80" y2="260" stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="80" y1="260" x2="762" y2="260" stroke={COLORS.slate300} strokeWidth="1.5" />
      <text transform="rotate(-90 64 165)" x="64" y="165" textAnchor="middle" fill={COLORS.slate500} fontSize="10">cost</text>
      <text x="420" y="278" textAnchor="middle" fill={COLORS.slate500} fontSize="10">time →</text>

      <polygon points={`110,260 ${cumPts} 750,260`} fill={COLORS.emerald} opacity="0.16" />
      <polyline points={cumPts} fill="none" stroke={COLORS.emerald} strokeWidth="3" />

      <rect x="110" y="150" width="26" height="110" rx="3" fill={COLORS.blue} />
      <text x="100" y="132" fill={COLORS.blue} fontSize="10" fontWeight="700">one-time training run</text>
      <text x="100" y="146" fill={COLORS.slate500} fontSize="9">large — but it happens once</text>

      <text x="200" y="180" fill={COLORS.emerald} fontSize="10" fontWeight="700">inference spend accumulates</text>
      <text x="200" y="194" fill={COLORS.slate500} fontSize="9">a little on every call, every day it is in service</text>

      <line x1="603" y1="150" x2="603" y2="260" stroke={COLORS.slate500} strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="603" cy="150" r="4" fill={COLORS.slate700} />
      <text x="603" y="140" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">total inference passes total training</text>

      {/* Chart 2 — unit cost */}
      <text x="40" y="308" fill={COLORS.slate700} fontSize="11" fontWeight="700">Cost per token for the same capability</text>
      <line x1="80" y1="316" x2="80" y2="410" stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="80" y1="410" x2="762" y2="410" stroke={COLORS.slate300} strokeWidth="1.5" />
      <text transform="rotate(-90 64 366)" x="64" y="366" textAnchor="middle" fill={COLORS.slate500} fontSize="10">cost / token</text>
      <text x="420" y="428" textAnchor="middle" fill={COLORS.slate500} fontSize="10">time →</text>
      <polyline points={cost.join(' ')} fill="none" stroke={COLORS.amber} strokeWidth="3" />
      <text x="330" y="344" fill={COLORS.amber} fontSize="10" fontWeight="700">same answer, steadily cheaper</text>
      <text x="330" y="358" fill={COLORS.slate500} fontSize="9">falling unit cost is what makes the volume above possible</text>
    </DiagramFrame>
  );
};

export const EvalStackDiagram = () => {
  const layers = [
    { name: 'Human review', sub: 'the ground truth, sampled', color: COLORS.amber, top: 52, bot: 116, hwTop: 62, hwBot: 96, n1: 'Slow and expensive, so it is', n2: 'sampled — it defines "good".' },
    { name: 'LLM-as-judge', sub: 'graded rubrics at scale', color: COLORS.blue, top: 122, bot: 186, hwTop: 99, hwBot: 133, n1: 'Scales judgement — but the', n2: 'judge needs its own eval.' },
    { name: 'Task benchmarks', sub: 'end-to-end task success', color: COLORS.cyan, top: 192, bot: 256, hwTop: 136, hwBot: 170, n1: 'Task-level scores, comparable', n2: 'across model and prompt versions.' },
    { name: 'Unit assertions', sub: 'deterministic checks in CI', color: COLORS.emerald, top: 262, bot: 326, hwTop: 173, hwBot: 207, n1: 'Format, schema, refusals, known', n2: 'failures — cheap, run constantly.' }
  ];
  const cx = 330;
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="No single score tells you a system works — each layer catches what the layer below it cannot">
      <defs>
        <marker id="arrowEVd" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowEVu" viewBox="0 0 10 10" refX="5" refY="1" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 10 L 10 10 L 5 0 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowEVr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="28" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Evals are a layered system, not one number</text>

      <line x1="100" y1="56" x2="100" y2="322" stroke={COLORS.slate300} strokeWidth="1.5" markerStart="url(#arrowEVu)" markerEnd="url(#arrowEVd)" />
      <text transform="rotate(-90 84 110)" x="84" y="110" textAnchor="middle" fill={COLORS.slate500} fontSize="10">closer to real judgement</text>
      <text transform="rotate(-90 84 265)" x="84" y="265" textAnchor="middle" fill={COLORS.slate500} fontSize="10">cheaper · faster · far more of them</text>

      {layers.map((l, i) => (
        <g key={i}>
          <polygon
            points={`${cx - l.hwTop},${l.top} ${cx + l.hwTop},${l.top} ${cx + l.hwBot},${l.bot} ${cx - l.hwBot},${l.bot}`}
            fill={l.color}
          />
          <text x={cx} y={l.top + 27} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{l.name}</text>
          <text x={cx} y={l.top + 46} textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.92">{l.sub}</text>
          <rect x="560" y={l.top + 10} width="210" height="44" rx="6" fill={COLORS.white} stroke={l.color} strokeWidth="1.5" />
          <text x="572" y={l.top + 28} fill={COLORS.slate700} fontSize="9">{l.n1}</text>
          <text x="572" y={l.top + 43} fill={COLORS.slate700} fontSize="9">{l.n2}</text>
          <line x1={cx + l.hwBot - 4} y1={l.top + 32} x2="558" y2={l.top + 32} stroke={COLORS.slate200} strokeWidth="1" />
        </g>
      ))}

      <line x1="330" y1="330" x2="392" y2="368" stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowEVr)" />

      <rect x="60" y="372" width="190" height="44" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="155" y="392" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">Ship a change</text>
      <text x="155" y="407" textAnchor="middle" fill={COLORS.slate500} fontSize="9">prompt · model · tool · policy</text>
      <line x1="250" y1="394" x2="288" y2="394" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowEVr)" />

      <rect x="290" y="372" width="230" height="44" rx="8" fill={COLORS.blue} />
      <text x="405" y="392" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Run all four layers</text>
      <text x="405" y="407" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">as one regression suite</text>
      <line x1="520" y1="394" x2="558" y2="394" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowEVr)" />

      <rect x="560" y="372" width="180" height="44" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="650" y="392" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">Gate the release</text>
      <text x="650" y="407" textAnchor="middle" fill={COLORS.slate500} fontSize="9">block on any regression</text>

      <path d="M 650 416 L 650 438 L 155 438 L 155 420" fill="none" stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arrowEVu)" />
      <text x="400" y="454" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">every failure becomes a permanent case in the suite</text>
    </DiagramFrame>
  );
};
