import React from 'react';
import { DiagramFrame, COLORS } from './shared';

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
