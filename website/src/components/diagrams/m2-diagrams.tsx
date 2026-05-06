import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const TokenizationDiagram = () => {
  const tokens = [
    { text: 'Cyber', color: COLORS.blue },
    { text: 'security', color: COLORS.cyan },
    { text: ' is', color: COLORS.amber },
    { text: ' hard', color: COLORS.emerald }
  ];
  let xCursor = 80;
  return (
    <DiagramFrame viewBox="0 0 700 220" caption="One word, multiple tokens — pricing and limits are measured in tokens, not words">
      <text x="350" y="40" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="600">Input text:</text>
      <text x="350" y="70" textAnchor="middle" fill={COLORS.slate700} fontSize="20" fontFamily="monospace">&quot;Cybersecurity is hard&quot;</text>
      <text x="350" y="115" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="600">Tokenized:</text>
      {tokens.map((t, i) => {
        const width = t.text.length * 11 + 16;
        const rect = <rect key={`r${i}`} x={xCursor} y="135" width={width} height="40" rx="6" fill={t.color} />;
        const txt = <text key={`t${i}`} x={xCursor + width / 2} y="160" textAnchor="middle" fill={COLORS.white} fontSize="14" fontFamily="monospace" fontWeight="600">{t.text}</text>;
        xCursor += width + 6;
        return [rect, txt];
      })}
      <text x="350" y="200" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">~750 words ≈ 1,000 tokens. A 1M token context = roughly 750K words.</text>
    </DiagramFrame>
  );
};

export const EmbeddingsDiagram = () => (
  <DiagramFrame viewBox="0 0 700 380" caption="Semantically similar concepts cluster together — embeddings power similarity search">
    <line x1="60" y1="320" x2="660" y2="320" stroke={COLORS.slate300} strokeWidth="1" />
    <line x1="60" y1="40" x2="60" y2="320" stroke={COLORS.slate300} strokeWidth="1" />
    {[
      { x: 150, y: 150, label: 'phishing email', cluster: 0 },
      { x: 200, y: 110, label: 'credential harvesting', cluster: 0 },
      { x: 130, y: 200, label: 'BEC fraud', cluster: 0 },
      { x: 480, y: 90, label: 'malware sample', cluster: 1 },
      { x: 540, y: 130, label: 'ransomware payload', cluster: 1 },
      { x: 510, y: 180, label: 'trojan dropper', cluster: 1 },
      { x: 320, y: 270, label: 'firewall log', cluster: 2 },
      { x: 380, y: 285, label: 'network telemetry', cluster: 2 },
      { x: 280, y: 250, label: 'flow data', cluster: 2 }
    ].map((p, i) => {
      const colors = [COLORS.blue, COLORS.amber, COLORS.cyan];
      return (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="9" fill={colors[p.cluster]} stroke={COLORS.white} strokeWidth="2" />
          <text x={p.x + 14} y={p.y + 4} fill={COLORS.slate700} fontSize="11">{p.label}</text>
        </g>
      );
    })}
    <ellipse cx="170" cy="155" rx="90" ry="65" fill="none" stroke={COLORS.blue} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
    <ellipse cx="510" cy="135" rx="80" ry="65" fill="none" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
    <ellipse cx="330" cy="270" rx="80" ry="35" fill="none" stroke={COLORS.cyan} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
    <text x="170" y="80" textAnchor="middle" fill={COLORS.blue} fontSize="11" fontWeight="600">Identity attack cluster</text>
    <text x="510" y="60" textAnchor="middle" fill={COLORS.amber} fontSize="11" fontWeight="600">Malware cluster</text>
    <text x="330" y="335" textAnchor="middle" fill={COLORS.cyan} fontSize="11" fontWeight="600">Network telemetry cluster</text>
    <text x="350" y="365" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">2D projection of high-dimensional embedding space</text>
  </DiagramFrame>
);

export const RAGFlowDiagram = () => {
  const steps = [
    { x: 30, label: 'User Query', color: COLORS.cyan },
    { x: 180, label: 'Embed', color: COLORS.blue },
    { x: 330, label: 'Vector Search', color: COLORS.blue },
    { x: 490, label: 'Augment Prompt', color: COLORS.blue },
    { x: 650, label: 'LLM Generates', color: COLORS.amber }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 320" caption="RAG: retrieve relevant context first, then generate — keeps answers grounded">
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="120" width="120" height="60" rx="8" fill={s.color} />
          <text x={s.x + 60} y="155" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="600">{s.label}</text>
          {i < steps.length - 1 && (
            <g>
              <line x1={s.x + 120} y1="150" x2={steps[i + 1].x} y2="150" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowR)" />
            </g>
          )}
        </g>
      ))}
      <defs>
        <marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <rect x="280" y="220" width="220" height="70" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="390" y="245" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">Vector DB</text>
      <text x="390" y="265" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Your private knowledge base</text>
      <text x="390" y="280" textAnchor="middle" fill={COLORS.slate500} fontSize="10">(runbooks, docs, tickets, logs)</text>
      <line x1="390" y1="220" x2="390" y2="180" stroke={COLORS.slate500} strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arrowR)" />
      <rect x="30" y="40" width="740" height="50" rx="6" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1" />
      <text x="400" y="60" textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="600">Pattern: ground every answer in retrieved evidence — model never invents from scratch</text>
      <text x="400" y="78" textAnchor="middle" fill={COLORS.slate700} fontSize="11">Citations are a side benefit. Updates are instant. No retraining required.</text>
    </DiagramFrame>
  );
};

export const FTvsPromptingDiagram = () => (
  <DiagramFrame viewBox="0 0 800 360" caption="Default to prompting. Fine-tune only when prompting cannot achieve behavioral consistency.">
    {[
      { x: 30, title: 'Prompting', color: COLORS.blue, attrs: [['Cost', 'Low'], ['Speed', 'Instant'], ['Reversible', 'Yes'], ['Updates', 'Edit text'], ['Best for', '80%+ of use cases']] },
      { x: 410, title: 'Fine-Tuning', color: COLORS.amber, attrs: [['Cost', 'High'], ['Speed', 'Hours-days'], ['Reversible', 'New version needed'], ['Updates', 'Re-train'], ['Best for', 'Behavioral consistency']] }
    ].map((c, i) => (
      <g key={i}>
        <rect x={c.x} y="30" width="360" height="300" rx="12" fill={COLORS.white} stroke={c.color} strokeWidth="2" />
        <rect x={c.x} y="30" width="360" height="55" rx="12" fill={c.color} />
        <text x={c.x + 180} y="65" textAnchor="middle" fill={COLORS.white} fontSize="18" fontWeight="700">{c.title}</text>
        {c.attrs.map(([k, v], j) => (
          <g key={j}>
            <line x1={c.x + 20} y1={120 + j * 40} x2={c.x + 340} y2={120 + j * 40} stroke={COLORS.slate200} />
            <text x={c.x + 30} y={140 + j * 40} fill={COLORS.slate500} fontSize="11" fontWeight="600">{k}</text>
            <text x={c.x + 330} y={140 + j * 40} textAnchor="end" fill={COLORS.slate900} fontSize="12" fontWeight="600">{v}</text>
          </g>
        ))}
      </g>
    ))}
  </DiagramFrame>
);

export const HallucinationMitigationDiagram = () => {
  const layers = [
    { label: 'Human-in-the-Loop', sub: 'Confirm consequential actions', color: COLORS.amber },
    { label: 'Model-as-Judge', sub: 'Second model verifies first', color: '#fb923c' },
    { label: 'Constrained Outputs', sub: 'Validated formats, schemas', color: COLORS.blue },
    { label: 'Citations', sub: 'Every claim sourced', color: COLORS.cyan },
    { label: 'Retrieval Grounding (RAG)', sub: 'Answer from retrieved evidence', color: COLORS.slate700 }
  ];
  return (
    <DiagramFrame viewBox="0 0 700 440" caption="No single technique eliminates hallucinations — defense is layered, with each layer catching what the one below missed">
      {layers.map((l, i) => (
        <g key={i}>
          <rect x={80 + i * 15} y={40 + i * 70} width={540 - i * 30} height="55" rx="8" fill={l.color} />
          <text x="350" y={66 + i * 70} textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{l.label}</text>
          <text x="350" y={84 + i * 70} textAnchor="middle" fill={COLORS.white} fontSize="11" opacity="0.9">{l.sub}</text>
        </g>
      ))}
      <text x="350" y="425" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Bottom layers do the heavy lifting; top layers catch residual errors</text>
    </DiagramFrame>
  );
};
