import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ LEGACY GAP FILL — ad2l8, m1l4, m2l0, m2l6 ============ */

export const LLMGovernanceLayersDiagram = () => {
  const phases = [
    {
      x: 30, c: COLORS.blue, h: 'TRAINING TIME — BEFORE THE MODEL SHIPS',
      timing: 'one-time — baked into the weights',
      items: [
        'instruction tuning (SFT)',
        'Constitutional AI — self-critique vs rules',
        'RLHF — learns from human rankings',
        'red-teaming — adversarial probing',
      ],
      foot: 'blind to how the model is used later',
    },
    {
      x: 282, c: COLORS.cyan, h: 'DEPLOYMENT TIME — WRAPS THE LIVE MODEL',
      timing: 'every request — in and out of the model',
      items: [
        'output filters on responses',
        'scope and policy limits',
        'prompt injection defence on inputs',
        'PII detection and redaction',
      ],
      foot: 'filters each request — cannot see trends',
    },
    {
      x: 534, c: COLORS.amber, h: 'PRODUCTION TIME — LIVE, AT SCALE',
      timing: 'continuous — visibility over real traffic',
      items: [
        'prompt and response tracing — audit trail',
        'cost and token tracking per request',
        'output drift and degradation flags',
        'latency, throughput, SLA monitoring',
      ],
      foot: 'catches what the other two layers missed',
    },
  ];
  const evalChips = [
    { x: 46, w: 150, t: 'benchmarks across versions' },
    { x: 222, w: 140, t: 'human preference ranking' },
    { x: 388, w: 160, t: 'LLM-as-judge — scaled scoring' },
    { x: 574, w: 180, t: 'regression harness on every update' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 412" caption="Safety is built in three phases — baked in at training, wrapped around at deployment, watched in production — with continuous evals running across all of them.">
      <defs>
        <marker id="arrowLGLa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">"Is this AI safe?" is three questions — each answered at a different time</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">built before the model ships, applied on every live request, and watched at scale — each phase catches different failures</text>

      <line x1="30" y1="74" x2="762" y2="74" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowLGLa)" />
      <line x1="274" y1="68" x2="274" y2="80" stroke={COLORS.slate400} strokeWidth="1.3" />
      <line x1="526" y1="68" x2="526" y2="80" stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="274" y="63" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8">model ships</text>
      <text x="526" y="63" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8">handles real traffic</text>

      {phases.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="92" width="236" height="120" rx="9" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={p.x} y="92" width="236" height="20" rx="9" fill={p.c} />
          <text x={p.x + 118} y="106" textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{p.h}</text>
          <text x={p.x + 118} y="126" textAnchor="middle" fill={p.c} fontSize="7.4" fontWeight="700" fontStyle="italic">{p.timing}</text>
          {p.items.map((t, j) => (
            <text key={j} x={p.x + 12} y={142 + j * 14} fill={COLORS.slate600} fontSize="7.4">{t}</text>
          ))}
          <text x={p.x + 12} y="204" fill={p.c} fontSize="7.2" fontWeight="700">{p.foot}</text>
        </g>
      ))}

      <rect x="30" y="226" width="740" height="58" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="226" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="239" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CONTINUOUS EVALS — THE FEEDBACK LOOP THAT RUNS ACROSS ALL THREE PHASES</text>
      {evalChips.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="250" width={c.w} height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={c.x + c.w / 2} y="265" textAnchor="middle" fill={COLORS.slate700} fontSize="7.3">{c.t}</text>
        </g>
      ))}

      <rect x="30" y="296" width="740" height="40" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="312" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">NO SINGLE LAYER IS ENOUGH — EACH PHASE CATCHES WHAT THE OTHERS CANNOT</text>
      <text x="400" y="327" textAnchor="middle" fill={COLORS.slate600} fontSize="8">a missing phase is a whole category of failures nobody catches — ask which phase a customer's concern actually lives in</text>

      <rect x="30" y="348" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">"SAFE" IS A PROCESS ACROSS THREE PHASES — NOT A PROPERTY OF THE MODEL</text>
      <text x="400" y="385" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">baked in at training, wrapped around at deployment, watched in production — and evals proving it still holds</text>
    </DiagramFrame>
  );
};

export const AIMisconceptionsDiagram = () => {
  const rows = [
    {
      y: 66,
      myth: '"more accuracy = better AI"',
      m1: '99% sounds definitive — but accuracy',
      m2: 'alone ignores how rare the target is',
      real: 'at a 1% base rate, 99% accuracy means one false alarm per real hit',
      r1: 'the base rate fallacy — ask for precision at the real-world prevalence;',
      r2: 'that is the number that predicts the actual experience',
    },
    {
      y: 138,
      myth: '"the AI knows things like a human does"',
      m1: 'so wrong answers must be bugs, and',
      m2: 'it should know when it is wrong',
      real: 'a frozen set of weights producing statistically likely outputs',
      r1: 'no memory unless given one, no sense of when it is wrong — confident',
      r2: 'wrong answers are expected behaviour, not a malfunction',
    },
    {
      y: 210,
      myth: '"it keeps learning from how we use it"',
      m1: 'so it must be improving on its own',
      m2: 'with every interaction we give it',
      real: 'deployed models are frozen snapshots on the vendor\'s schedule',
      r1: 'feedback — when it exists — flows into the next training run,',
      r2: 'never into the live model answering you today',
    },
  ];
  const questions = [
    { x: 46, a: 'what is the base rate of what you', b: 'detect, in a real deployment?' },
    { x: 284, a: 'what does it output when it does not', b: 'know — say so, or guess confidently?' },
    { x: 522, a: 'how often is it retrained,', b: 'and on what signal?' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 452" caption="Accuracy without a base rate, 'the AI knows', and 'it learns from us' are the three misconceptions — three vendor questions replace them with answers you can act on.">
      <defs>
        <marker id="arrowAMDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Three misconceptions behind almost every AI disappointment</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">none of them mean the AI is broken — they mean the wrong question was asked before buying</text>

      <text x="180" y="58" textAnchor="middle" fill={COLORS.red} fontSize="8" fontWeight="700">THE MISCONCEPTION</text>
      <text x="560" y="58" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">WHAT IS ACTUALLY TRUE</text>

      {rows.map((r, i) => (
        <g key={i}>
          <rect x="30" y={r.y} width="300" height="60" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
          <text x="46" y={r.y + 18} fill={COLORS.red} fontSize="7.5" fontWeight="700">{r.myth}</text>
          <text x="46" y={r.y + 34} fill={COLORS.slate600} fontSize="7.3">{r.m1}</text>
          <text x="46" y={r.y + 48} fill={COLORS.slate600} fontSize="7.3">{r.m2}</text>
          <line x1="332" y1={r.y + 30} x2="346" y2={r.y + 30} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowAMDa)" />
          <rect x="350" y={r.y} width="420" height="60" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <text x="366" y={r.y + 18} fill={COLORS.emerald} fontSize="7.4" fontWeight="700">{r.real}</text>
          <text x="366" y={r.y + 34} fill={COLORS.slate600} fontSize="7.3">{r.r1}</text>
          <text x="366" y={r.y + 48} fill={COLORS.slate600} fontSize="7.3">{r.r2}</text>
        </g>
      ))}

      <rect x="30" y="284" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="284" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="297" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THREE QUESTIONS THAT REPLACE "HOW ACCURATE IS YOUR AI?"</text>
      {questions.map((q, i) => (
        <g key={i}>
          <rect x={q.x} y="312" width="228" height="34" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={q.x + 114} y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{q.a}</text>
          <text x={q.x + 114} y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{q.b}</text>
        </g>
      ))}
      <text x="400" y="364" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8" fontStyle="italic">vendors who answer all three cleanly are worth a deeper conversation — deflection usually hides the weak answer</text>

      <rect x="30" y="388" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="408" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BASE RATES, FROZEN WEIGHTS, RETRAINING CADENCE — JUDGE EVERY CLAIM ON THESE</text>
      <text x="400" y="425" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a flood of false positives usually means the target is rare — not that the AI is malfunctioning</text>
    </DiagramFrame>
  );
};

export const LLMInfrastructureDiagram = () => {
  const layers = [
    {
      y: 94, c: COLORS.emerald, h: 'LAYER 3 — SERVING · RELIABLY TO USERS AT SCALE',
      items: [
        'API gateway — rate limiting, authentication, routing, balancing',
        'request batching — concurrent requests share the GPU',
        'autoscaling — capacity follows demand, up and down',
        'model versioning — canary and blue-green rollouts, 5% of traffic first',
      ],
      foot: 'this is where enterprise SLAs live',
    },
    {
      y: 200, c: COLORS.cyan, h: 'LAYER 2 — OPTIMISATION · SMALLER, FASTER, CHEAPER',
      items: [
        'quantisation — lower precision, less GPU memory, small quality loss',
        'distillation — a compact model learns from a larger teacher',
        'pruning — removes low-impact weights',
        'KV caching and speculative decoding — faster token generation',
      ],
      foot: 'this layer sets the cost and latency in any commercial conversation',
    },
    {
      y: 306, c: COLORS.blue, h: 'LAYER 1 — HARDWARE · THE PHYSICAL COMPUTE',
      items: [
        'GPUs and TPUs — NVIDIA and Google data-centre accelerator clusters',
        'distributed training — a frontier model cannot fit on one machine',
        'cloud (AWS · Azure · GCP) rents the compute on demand',
        'on-premise — you buy the hardware: more control, far more cost',
      ],
      foot: 'most enterprises rent this layer; almost none own it',
    },
  ];
  const notes = [
    { y: 122, c: COLORS.emerald, lines: ['latency spikes usually happen', 'here, not inside the model —', 'SLA requirements shape this layer'] },
    { y: 228, c: COLORS.cyan, lines: ['ask: full model or an optimised', 'variant — and what quality', 'tradeoffs apply?'] },
    { y: 334, c: COLORS.blue, lines: ['top accelerators cost tens of', 'thousands each — a cluster is real', 'capital; quantify before on-prem'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 518" caption="Three infrastructure layers stand between a trained model and its users — hardware runs it, optimisation makes it affordable, serving makes it reliable.">
      <defs>
        <marker id="arrowLLIa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A trained model on disk does nothing — three layers get it to users</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each layer solves a different problem, and each adds cost and complexity — read the stack from the bottom up</text>

      <rect x="180" y="56" width="220" height="26" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="290" y="73" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">the user</text>
      <line x1="290" y1="92" x2="290" y2="84" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowLLIa)" />
      <line x1="290" y1="198" x2="290" y2="190" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowLLIa)" />
      <line x1="290" y1="304" x2="290" y2="296" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowLLIa)" />
      <line x1="290" y1="410" x2="290" y2="402" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowLLIa)" />

      {layers.map((l, i) => (
        <g key={i}>
          <rect x="60" y={l.y} width="460" height="94" rx="9" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <rect x="60" y={l.y} width="460" height="18" rx="9" fill={l.c} />
          <text x="290" y={l.y + 13} textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{l.h}</text>
          {l.items.map((t, j) => (
            <text key={j} x="76" y={l.y + 32 + j * 13} fill={COLORS.slate600} fontSize="7.3">{t}</text>
          ))}
          <text x="76" y={l.y + 86} fill={l.c} fontSize="7.4" fontWeight="700">{l.foot}</text>
        </g>
      ))}

      <rect x="110" y="412" width="360" height="28" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" strokeDasharray="5 3" />
      <text x="290" y="430" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">trained model on disk — does nothing by itself</text>

      <rect x="540" y="94" width="230" height="346" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="655" y="112" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6" fontWeight="700">WHEN THE COST QUESTION COMES</text>
      {notes.map((n, i) => (
        <g key={i}>
          <rect x="552" y={n.y} width="206" height="48" rx="7" fill={COLORS.white} stroke={n.c} strokeWidth="1.5" />
          {n.lines.map((t, j) => (
            <text key={j} x="655" y={n.y + 16 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.1">{t}</text>
          ))}
        </g>
      ))}
      <text x="655" y="424" textAnchor="middle" fill={COLORS.slate500} fontSize="6.9" fontStyle="italic">answers for IT, procurement,</text>
      <text x="655" y="435" textAnchor="middle" fill={COLORS.slate500} fontSize="6.9" fontStyle="italic">and CISO infrastructure questions</text>

      <rect x="30" y="454" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="474" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HARDWARE RUNS IT, OPTIMISATION MAKES IT AFFORDABLE, SERVING KEEPS IT UP</text>
      <text x="400" y="491" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">each layer adds cost and complexity — the honest answer to "why is enterprise AI expensive?"</text>
    </DiagramFrame>
  );
};
