import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const AIBasicsOverviewDiagram = () => (
  <div className="my-4">
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <img src="/AI-Cybersecurity/diagram0_ai_basics_final_v2.svg" alt="Diagram 0 — The complete basics of AI" className="w-full h-auto" />
    </div>
    <div className="text-xs text-slate-500 mt-1.5 text-center italic">Cognitive loop · AI revolution timeline · capability tiers · real-world AI today · the AI pipeline</div>
  </div>
);

export const NestedAIDiagram = () => (
  <DiagramFrame viewBox="0 0 600 420" caption="The nesting hierarchy: every GenAI is DL, every DL is ML, every ML is AI">
    <circle cx="300" cy="210" r="200" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
    <circle cx="300" cy="220" r="155" fill="#bfdbfe" stroke={COLORS.blue} strokeWidth="2" />
    <circle cx="300" cy="235" r="105" fill={COLORS.blueMid} stroke={COLORS.blue} strokeWidth="2" />
    <circle cx="300" cy="255" r="60" fill={COLORS.blue} stroke={COLORS.slate900} strokeWidth="2" />
    <text x="300" y="40" textAnchor="middle" fill={COLORS.slate900} fontSize="18" fontWeight="700">Artificial Intelligence</text>
    <text x="300" y="100" textAnchor="middle" fill={COLORS.slate700} fontSize="14" fontWeight="600">Machine Learning</text>
    <text x="300" y="155" textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="600">Deep Learning</text>
    <text x="300" y="260" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">GenAI</text>
    <text x="50" y="395" fill={COLORS.slate500} fontSize="10">Decision trees, rules,</text>
    <text x="50" y="408" fill={COLORS.slate500} fontSize="10">expert systems live here</text>
    <text x="450" y="395" fill={COLORS.slate500} fontSize="10">SVMs, random forests,</text>
    <text x="450" y="408" fill={COLORS.slate500} fontSize="10">classical ML live here</text>
  </DiagramFrame>
);

export const LearningParadigmsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 320" caption="Three core paradigms — most security ML still leans supervised + unsupervised">
    {[
      { x: 30, title: 'Supervised', color: COLORS.blue, examples: ['Spam classifiers', 'Malware classifiers', 'Phishing detection'], desc: 'Trained on labeled examples' },
      { x: 285, title: 'Unsupervised', color: COLORS.cyan, examples: ['UEBA baselines', 'Anomaly detection', 'Clustering similar attacks'], desc: 'Finds patterns without labels' },
      { x: 540, title: 'Reinforcement', color: COLORS.amber, examples: ['Agent training (RLHF)', 'Autonomous response', 'Game-playing systems'], desc: 'Learns via reward signals' }
    ].map((p, i) => (
      <g key={i}>
        <rect x={p.x} y="20" width="230" height="280" rx="10" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
        <rect x={p.x} y="20" width="230" height="50" rx="10" fill={p.color} />
        <text x={p.x + 115} y="52" textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="700">{p.title}</text>
        <text x={p.x + 115} y="95" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontStyle="italic">{p.desc}</text>
        <text x={p.x + 20} y="135" fill={COLORS.slate500} fontSize="10" fontWeight="600">SECURITY EXAMPLES</text>
        {p.examples.map((ex, j) => (
          <g key={j}>
            <circle cx={p.x + 25} cy={160 + j * 30} r="3" fill={p.color} />
            <text x={p.x + 38} y={165 + j * 30} fill={COLORS.slate700} fontSize="12">{ex}</text>
          </g>
        ))}
      </g>
    ))}
  </DiagramFrame>
);

export const LearningParadigmsGenericDiagram = () => (
  <DiagramFrame viewBox="0 0 800 320" caption="Three core paradigms — how machines actually learn from data">
    {[
      { x: 30, title: 'Supervised', color: COLORS.blue, examples: ['Image classification', 'Email spam filters', 'Loan approval scoring'], desc: 'Trained on labeled examples' },
      { x: 285, title: 'Unsupervised', color: COLORS.cyan, examples: ['Customer segmentation', 'Anomaly detection', 'Topic discovery in text'], desc: 'Finds patterns without labels' },
      { x: 540, title: 'Reinforcement', color: COLORS.amber, examples: ['Game-playing AIs (AlphaGo)', 'Robotics & self-driving', 'RLHF for chatbots'], desc: 'Learns via reward signals' }
    ].map((p, i) => (
      <g key={i}>
        <rect x={p.x} y="20" width="230" height="280" rx="10" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
        <rect x={p.x} y="20" width="230" height="50" rx="10" fill={p.color} />
        <text x={p.x + 115} y="52" textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="700">{p.title}</text>
        <text x={p.x + 115} y="95" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontStyle="italic">{p.desc}</text>
        <text x={p.x + 20} y="135" fill={COLORS.slate500} fontSize="10" fontWeight="600">EVERYDAY EXAMPLES</text>
        {p.examples.map((ex, j) => (
          <g key={j}>
            <circle cx={p.x + 25} cy={160 + j * 30} r="3" fill={p.color} />
            <text x={p.x + 38} y={165 + j * 30} fill={COLORS.slate700} fontSize="12">{ex}</text>
          </g>
        ))}
      </g>
    ))}
  </DiagramFrame>
);

export const CapabilityTiersDiagram = () => {
  const tiers = [
    { y: 30, title: 'Narrow AI', desc: 'One task, one domain — today', examples: 'Chess engines · Spam filters · Image classifiers', color: COLORS.blue, status: 'TODAY' },
    { y: 110, title: 'Frontier LLMs', desc: 'One objective, hundreds of domains', examples: 'Claude · GPT-4 · Gemini · Llama', color: COLORS.cyan, status: 'TODAY' },
    { y: 190, title: 'AGI', desc: 'Human-level reasoning across any domain', examples: 'Not yet achieved — no timeline consensus', color: COLORS.amber, status: 'FUTURE' },
    { y: 270, title: 'Superintelligence', desc: 'Surpasses humans across every domain', examples: 'Hypothetical — raises alignment questions', color: COLORS.red, status: 'HYPOTHETICAL' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 380" caption="When a customer says 'AI', they could mean any of these tiers — calibrate early">
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x="40" y={t.y} width="720" height="60" rx="8" fill={COLORS.white} stroke={t.color} strokeWidth="2" />
          <rect x="40" y={t.y} width="180" height="60" rx="8" fill={t.color} />
          <text x="130" y={t.y + 30} textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="700">{t.title}</text>
          <text x="130" y={t.y + 48} textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.85">{t.status}</text>
          <text x="240" y={t.y + 24} fill={COLORS.slate700} fontSize="13" fontWeight="600">{t.desc}</text>
          <text x="240" y={t.y + 44} fill={COLORS.slate500} fontSize="11">{t.examples}</text>
        </g>
      ))}
    </DiagramFrame>
  );
};

export const AIPipelineDiagram = () => {
  const stages = [
    { x: 40, title: 'Collect & Clean', desc: 'Raw data is gathered and prepared', color: COLORS.blue },
    { x: 215, title: 'Train', desc: 'A model learns patterns from data', color: COLORS.cyan },
    { x: 390, title: 'Deploy', desc: 'Model serves real-time inference', color: COLORS.amber },
    { x: 565, title: 'Feedback Loop', desc: 'Outcomes flow back into training', color: COLORS.emerald },
  ];
  return (
    <DiagramFrame viewBox="0 0 760 280" caption="Every AI product runs this pipeline — no feedback loop means a frozen snapshot">
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="60" width="155" height="120" rx="10" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
          <rect x={s.x} y="60" width="155" height="36" rx="10" fill={s.color} />
          <text x={s.x + 77} y="84" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{s.title}</text>
          <text x={s.x + 77} y="125" textAnchor="middle" fill={COLORS.slate700} fontSize="11">{s.desc.split(' ').slice(0, 3).join(' ')}</text>
          <text x={s.x + 77} y="142" textAnchor="middle" fill={COLORS.slate700} fontSize="11">{s.desc.split(' ').slice(3).join(' ')}</text>
          {i < stages.length - 1 && (
            <path d={`M${s.x + 155} 120 L${s.x + 175} 120`} stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrow-pipeline)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow-pipeline" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke={COLORS.slate500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <path d={`M642 180 Q642 230 400 230 Q150 230 117 180`} stroke={COLORS.emerald} strokeWidth="1.5" strokeDasharray="5 4" fill="none" markerEnd="url(#arrow-pipeline)" />
      <text x="400" y="248" textAnchor="middle" fill={COLORS.emerald} fontSize="11" fontStyle="italic">feedback signals shape the next training run</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate700} fontSize="13" fontWeight="600">The AI Pipeline</text>
    </DiagramFrame>
  );
};

export const BaseRateDiagram = () => (
  <DiagramFrame viewBox="0 0 800 460" caption="Base rate fallacy: even 99% accuracy floods the SOC when prevalence is low">
    <text x="400" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">100,000 files scanned · 0.1% actual malware (100 files) · 99% accurate detector</text>
    {/* Confusion matrix */}
    <rect x="60" y="60" width="680" height="50" rx="0" fill={COLORS.slate100} />
    <text x="340" y="90" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="700">Actual Malware</text>
    <text x="620" y="90" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="700">Actually Clean</text>
    <rect x="60" y="110" width="680" height="90" rx="0" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1" />
    <rect x="60" y="200" width="680" height="90" rx="0" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1" />
    <line x1="480" y1="60" x2="480" y2="290" stroke={COLORS.slate300} strokeWidth="1" />
    <text x="140" y="148" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Flagged</text>
    <text x="140" y="238" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Not Flagged</text>
    {/* TP */}
    <rect x="200" y="118" width="260" height="74" rx="6" fill={COLORS.emerald} />
    <text x="330" y="152" textAnchor="middle" fill={COLORS.white} fontSize="22" fontWeight="700">99</text>
    <text x="330" y="175" textAnchor="middle" fill={COLORS.white} fontSize="11">True Positives ✓</text>
    {/* FP */}
    <rect x="490" y="118" width="230" height="74" rx="6" fill={COLORS.red} />
    <text x="605" y="152" textAnchor="middle" fill={COLORS.white} fontSize="22" fontWeight="700">999</text>
    <text x="605" y="175" textAnchor="middle" fill={COLORS.white} fontSize="11">False Positives ✗</text>
    {/* FN */}
    <rect x="200" y="208" width="260" height="74" rx="6" fill="#fef2f2" stroke={COLORS.red} strokeWidth="1.5" />
    <text x="330" y="242" textAnchor="middle" fill={COLORS.slate700} fontSize="22" fontWeight="700">1</text>
    <text x="330" y="265" textAnchor="middle" fill={COLORS.slate500} fontSize="11">False Negative</text>
    {/* TN */}
    <rect x="490" y="208" width="230" height="74" rx="6" fill={COLORS.blueLight} />
    <text x="605" y="242" textAnchor="middle" fill={COLORS.slate700} fontSize="22" fontWeight="700">98,901</text>
    <text x="605" y="265" textAnchor="middle" fill={COLORS.slate700} fontSize="11">True Negatives ✓</text>
    {/* Key insight */}
    <rect x="60" y="305" width="680" height="60" rx="8" fill={COLORS.amber} />
    <text x="400" y="332" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">For every real threat caught, the SOC gets 10× more false positives</text>
    <text x="400" y="353" textAnchor="middle" fill={COLORS.white} fontSize="11">Alert fatigue is not a workflow problem — it is a base rate problem</text>
    <text x="400" y="395" textAnchor="middle" fill={COLORS.slate700} fontSize="12">Precision (of alarms) = 99 / (99 + 999) = <tspan fontWeight="700">9%</tspan>  ·  Improving accuracy to 99.9% gives Precision = <tspan fontWeight="700">50%</tspan></text>
    <text x="400" y="445" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Sales implication: higher detection accuracy alone does not solve alert fatigue — you also need to raise prevalence by focusing on high-risk signals</text>
  </DiagramFrame>
);

export const NeuralNetDiagram = () => {
  const layers = [4, 6, 6, 3];
  const w = 700, h = 320, padX = 80;
  const layerSpacing = (w - 2 * padX) / (layers.length - 1);
  const nodes = layers.map((count, li) => {
    const layerH = h - 80;
    const spacing = layerH / (count + 1);
    return Array.from({ length: count }, (_, ni) => ({
      x: padX + li * layerSpacing,
      y: 50 + spacing * (ni + 1)
    }));
  });
  return (
    <DiagramFrame viewBox={`0 0 ${w} ${h}`} caption="A neural network is layers of weighted connections — training adjusts the weights">
      {nodes.slice(0, -1).map((layer, li) =>
        layer.map((from, fi) =>
          nodes[li + 1].map((to, ti) => (
            <line key={`${li}-${fi}-${ti}`} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={COLORS.slate300} strokeWidth="0.7" />
          ))
        )
      )}
      {nodes.map((layer, li) =>
        layer.map((node, ni) => (
          <circle key={`${li}-${ni}`} cx={node.x} cy={node.y} r="10" fill={li === 0 ? COLORS.cyan : li === nodes.length - 1 ? COLORS.amber : COLORS.blue} stroke={COLORS.white} strokeWidth="2" />
        ))
      )}
      <text x={padX} y="30" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Input</text>
      <text x={padX + layerSpacing} y="30" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Hidden</text>
      <text x={padX + 2 * layerSpacing} y="30" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Hidden</text>
      <text x={padX + 3 * layerSpacing} y="30" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Output</text>
      <text x={w / 2} y={h - 15} textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Each line is a weight. Training = adjusting all those numbers.</text>
    </DiagramFrame>
  );
};
