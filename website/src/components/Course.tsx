import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, CheckCircle2, Circle, Award, Presentation, FileText, Search, Menu, Sparkles } from 'lucide-react';

// ============================================================
// DIAGRAM COMPONENTS — Clean technical style, course palette
// ============================================================

const COLORS = {
  blue: '#2563eb',
  blueLight: '#dbeafe',
  blueMid: '#93c5fd',
  cyan: '#06b6d4',
  slate900: '#0f172a',
  slate700: '#334155',
  slate500: '#64748b',
  slate300: '#cbd5e1',
  slate200: '#e2e8f0',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  amber: '#f59e0b',
  emerald: '#10b981',
  red: '#ef4444',
  white: '#ffffff'
};

const DiagramFrame = ({ children, viewBox = '0 0 800 500', caption }) => (
  <div className="my-4">
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <svg viewBox={viewBox} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
    {caption && <div className="text-xs text-slate-500 mt-1.5 text-center italic">{caption}</div>}
  </div>
);

// M1: Nested AI/ML/DL/GenAI
const NestedAIDiagram = () => (
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

// M1: Three learning paradigms
const LearningParadigmsDiagram = () => (
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

// M1: Neural network
const NeuralNetDiagram = () => {
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

// M2: Tokenization
const TokenizationDiagram = () => {
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

// M2: RAG flow
const RAGFlowDiagram = () => {
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

// M2: Embeddings vector space
const EmbeddingsDiagram = () => (
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

// M2: Fine-tuning vs Prompting
const FTvsPromptingDiagram = () => (
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

// M3: Five-layer AI stack
const AIStackDiagram = () => {
  const layers = [
    { label: 'Agents & Agentic Systems', sublabel: 'Autonomous goal-pursuing entities', color: COLORS.amber },
    { label: 'Tools & Integrations', sublabel: 'MCP, function calling, APIs', color: '#fb923c' },
    { label: 'Orchestration', sublabel: 'Frameworks, memory, routing', color: COLORS.blue },
    { label: 'Inference & Serving', sublabel: 'Hosting, latency, throughput', color: COLORS.cyan },
    { label: 'Foundation Models', sublabel: 'LLMs, multimodal, embedding models', color: COLORS.slate700 }
  ];
  return (
    <DiagramFrame viewBox="0 0 700 460" caption="The AI stack — customers buy at different layers; misreading the layer is the #1 discovery mistake">
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="100" y={40 + i * 75} width="500" height="60" rx="8" fill={l.color} />
          <text x="350" y={68 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="15" fontWeight="700">{l.label}</text>
          <text x="350" y={87 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="11" opacity="0.85">{l.sublabel}</text>
        </g>
      ))}
      <text x="50" y="20" fill={COLORS.slate500} fontSize="11" fontWeight="600">HIGHEST</text>
      <text x="50" y="445" fill={COLORS.slate500} fontSize="11" fontWeight="600">LOWEST</text>
      <line x1="78" y1="35" x2="78" y2="425" stroke={COLORS.slate300} strokeWidth="2" markerEnd="url(#arrowD)" />
      <defs>
        <marker id="arrowD" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate300} />
        </marker>
      </defs>
      <text x="630" y="80" fill={COLORS.slate500} fontSize="10">Builds on ↓</text>
    </DiagramFrame>
  );
};

// M3: MCP topology
const MCPDiagram = () => (
  <DiagramFrame viewBox="0 0 800 380" caption="MCP standardizes how AI hosts call tools — replaces N×M custom integrations with one protocol">
    <rect x="40" y="140" width="180" height="100" rx="10" fill={COLORS.blue} />
    <text x="130" y="180" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">AI Host</text>
    <text x="130" y="200" textAnchor="middle" fill={COLORS.white} fontSize="11">(Claude, IDE, app)</text>
    <text x="130" y="220" textAnchor="middle" fill={COLORS.white} fontSize="11" opacity="0.85">contains MCP Client</text>
    <line x1="220" y1="190" x2="320" y2="190" stroke={COLORS.slate900} strokeWidth="2" markerEnd="url(#arrowM)" />
    <text x="270" y="180" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">JSON-RPC</text>
    <text x="270" y="208" textAnchor="middle" fill={COLORS.slate500} fontSize="9">(stdio / HTTP)</text>
    <defs>
      <marker id="arrowM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate900} />
      </marker>
    </defs>
    <rect x="320" y="140" width="180" height="100" rx="10" fill={COLORS.cyan} />
    <text x="410" y="180" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">MCP Server</text>
    <text x="410" y="200" textAnchor="middle" fill={COLORS.white} fontSize="11">exposes capabilities</text>
    {[
      { x: 580, y: 60, label: 'Tools', sub: 'Callable functions' },
      { x: 580, y: 165, label: 'Resources', sub: 'Data, files' },
      { x: 580, y: 270, label: 'Prompts', sub: 'Templates' }
    ].map((c, i) => (
      <g key={i}>
        <rect x={c.x} y={c.y} width="170" height="70" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
        <text x={c.x + 85} y={c.y + 30} textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="700">{c.label}</text>
        <text x={c.x + 85} y={c.y + 50} textAnchor="middle" fill={COLORS.slate500} fontSize="11">{c.sub}</text>
        <line x1="500" y1="190" x2={c.x} y2={c.y + 35} stroke={COLORS.slate300} strokeWidth="1.5" />
      </g>
    ))}
    <text x="400" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Model Context Protocol</text>
    <text x="400" y="360" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Every MCP connection is a potential injection vector — auth and audit matter</text>
  </DiagramFrame>
);

// M3: Single vs Multi-agent
const AgentTopologyDiagram = () => (
  <DiagramFrame viewBox="0 0 800 360" caption="Single-agent for one goal; multi-agent when subtasks differ enough to warrant specialization">
    <text x="200" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Single-Agent</text>
    <circle cx="200" cy="170" r="40" fill={COLORS.blue} />
    <text x="200" y="175" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Agent</text>
    <g>
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * 90 + 45) * Math.PI / 180;
        const x = 200 + Math.cos(angle) * 110;
        const y = 170 + Math.sin(angle) * 100;
        return (
          <g key={i}>
            <line x1="200" y1="170" x2={x} y2={y} stroke={COLORS.slate300} strokeWidth="1.5" />
            <rect x={x - 30} y={y - 14} width="60" height="28" rx="5" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
            <text x={x} y={y + 5} textAnchor="middle" fill={COLORS.slate700} fontSize="10">Tool {i + 1}</text>
          </g>
        );
      })}
    </g>
    <line x1="395" y1="50" x2="395" y2="320" stroke={COLORS.slate300} strokeWidth="1" strokeDasharray="4 3" />
    <text x="600" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Multi-Agent</text>
    <circle cx="600" cy="100" r="32" fill={COLORS.amber} />
    <text x="600" y="105" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Orchestrator</text>
    {[
      { x: 500, label: 'Triage' },
      { x: 600, label: 'Investigate' },
      { x: 700, label: 'Respond' }
    ].map((a, i) => (
      <g key={i}>
        <line x1="600" y1="132" x2={a.x} y2="220" stroke={COLORS.slate400} strokeWidth="1.5" />
        <circle cx={a.x} cy="240" r="28" fill={COLORS.blue} />
        <text x={a.x} y="244" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="600">{a.label}</text>
      </g>
    ))}
    <text x="600" y="310" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Specialists communicate via A2A protocol</text>
  </DiagramFrame>
);

// M3: Autonomy levels ladder
const AutonomyLevelsDiagram = () => {
  const levels = [
    { level: 'L0', title: 'Human Approves Every Step', color: COLORS.slate500, desc: 'Suggestion-only AI' },
    { level: 'L1', title: 'Approves Consequential Steps', color: COLORS.blue, desc: 'Autonomous on routine, gated on impact', recommended: true },
    { level: 'L2', title: 'Logged Autonomy with Reversibility', color: COLORS.amber, desc: 'Acts independently, undo paths required' },
    { level: 'L3', title: 'Full Autonomy', color: COLORS.red, desc: 'Rare in production security today' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 380" caption="Most enterprise security deployments live at L1 — and that is the right default for high-impact actions">
      {levels.map((l, i) => (
        <g key={i}>
          <rect x="60" y={50 + i * 75} width="680" height="60" rx="8" fill={COLORS.white} stroke={l.color} strokeWidth={l.recommended ? '3' : '1.5'} />
          <rect x="60" y={50 + i * 75} width="80" height="60" rx="8" fill={l.color} />
          <text x="100" y={86 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="18" fontWeight="700">{l.level}</text>
          <text x="160" y={78 + i * 75} fill={COLORS.slate900} fontSize="14" fontWeight="700">{l.title}</text>
          <text x="160" y={97 + i * 75} fill={COLORS.slate500} fontSize="11">{l.desc}</text>
          {l.recommended && (
            <g>
              <rect x="610" y={65 + i * 75} width="120" height="30" rx="15" fill={COLORS.emerald} />
              <text x="670" y={85 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">RECOMMENDED</text>
            </g>
          )}
        </g>
      ))}
    </DiagramFrame>
  );
};

// M3: A2A vs MCP
const A2AvsMCPDiagram = () => (
  <DiagramFrame viewBox="0 0 800 340" caption="MCP = agent-to-tool bus. A2A = agent-to-agent network. Together they form the agentic substrate.">
    <rect x="80" y="40" width="280" height="260" rx="12" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="220" y="70" textAnchor="middle" fill={COLORS.blue} fontSize="16" fontWeight="700">MCP</text>
    <text x="220" y="90" textAnchor="middle" fill={COLORS.slate700} fontSize="11">Agent ↔ Tools</text>
    <circle cx="160" cy="170" r="30" fill={COLORS.blue} />
    <text x="160" y="175" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Agent</text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <line x1="190" y1="170" x2="280" y2={140 + i * 30} stroke={COLORS.slate400} strokeWidth="1.5" />
        <rect x="280" y={125 + i * 30} width="60" height="22" rx="4" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
        <text x="310" y={141 + i * 30} textAnchor="middle" fill={COLORS.slate700} fontSize="10">Tool</text>
      </g>
    ))}
    <text x="220" y="280" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The peripheral bus</text>
    <rect x="440" y="40" width="280" height="260" rx="12" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
    <text x="580" y="70" textAnchor="middle" fill={COLORS.amber} fontSize="16" fontWeight="700">A2A</text>
    <text x="580" y="90" textAnchor="middle" fill={COLORS.slate700} fontSize="11">Agent ↔ Agent</text>
    {[
      { x: 500, y: 150 },
      { x: 660, y: 150 },
      { x: 500, y: 240 },
      { x: 660, y: 240 }
    ].map((a, i) => (
      <g key={i}>
        <circle cx={a.x} cy={a.y} r="22" fill={COLORS.amber} />
        <text x={a.x} y={a.y + 4} textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">A{i + 1}</text>
      </g>
    ))}
    <line x1="500" y1="150" x2="660" y2="150" stroke={COLORS.amber} strokeWidth="1.5" />
    <line x1="500" y1="240" x2="660" y2="240" stroke={COLORS.amber} strokeWidth="1.5" />
    <line x1="500" y1="150" x2="500" y2="240" stroke={COLORS.amber} strokeWidth="1.5" />
    <line x1="660" y1="150" x2="660" y2="240" stroke={COLORS.amber} strokeWidth="1.5" />
    <line x1="500" y1="150" x2="660" y2="240" stroke={COLORS.amber} strokeWidth="1.5" opacity="0.5" />
    <line x1="660" y1="150" x2="500" y2="240" stroke={COLORS.amber} strokeWidth="1.5" opacity="0.5" />
    <text x="580" y="290" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The network layer</text>
  </DiagramFrame>
);

// M4: SOC AI architecture
const SOCArchDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="AI sits at multiple layers in a modern SOC — classical ML for detection, GenAI for narrative and reasoning">
    <rect x="40" y="40" width="720" height="60" rx="8" fill={COLORS.amber} />
    <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">GenAI Layer</text>
    <text x="400" y="85" textAnchor="middle" fill={COLORS.white} fontSize="11">SOC copilot · Case summarization · Investigation agents · NL to query · Recommendation</text>
    <rect x="40" y="120" width="720" height="60" rx="8" fill={COLORS.blue} />
    <text x="400" y="145" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">Classical ML Layer</text>
    <text x="400" y="165" textAnchor="middle" fill={COLORS.white} fontSize="11">Anomaly detection · UEBA · Malware classifiers · BEC detection · Behavioral baselines</text>
    {[
      { x: 50, label: 'SIEM / XDR', color: COLORS.cyan },
      { x: 200, label: 'EDR', color: COLORS.cyan },
      { x: 350, label: 'Email Sec', color: COLORS.cyan },
      { x: 500, label: 'Identity / ITDR', color: COLORS.cyan },
      { x: 650, label: 'Threat Intel', color: COLORS.cyan }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="220" width="120" height="80" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
        <text x={s.x + 60} y="265" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{s.label}</text>
      </g>
    ))}
    <rect x="40" y="340" width="720" height="60" rx="8" fill={COLORS.slate700} />
    <text x="400" y="365" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">Telemetry Sources</text>
    <text x="400" y="385" textAnchor="middle" fill={COLORS.white} fontSize="11">Logs · Network · Endpoint · Cloud · Identity provider · Email · SaaS</text>
    <text x="20" y="425" fill={COLORS.slate500} fontSize="10" fontStyle="italic">When prospects say &quot;AI-powered detection&quot; — ask which layer they mean</text>
  </DiagramFrame>
);

// M5: Prompt injection flow
const PromptInjectionDiagram = () => (
  <DiagramFrame viewBox="0 0 800 380" caption="Indirect injection is the dominant practical threat — payload sits in retrieved data, not user input">
    <text x="200" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Direct Injection</text>
    <rect x="60" y="60" width="140" height="50" rx="6" fill={COLORS.cyan} />
    <text x="130" y="92" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Attacker</text>
    <line x1="200" y1="85" x2="260" y2="85" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowI)" />
    <rect x="260" y="60" width="140" height="50" rx="6" fill={COLORS.blue} />
    <text x="330" y="92" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">LLM</text>
    <text x="200" y="140" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Lower enterprise risk</text>
    <text x="200" y="155" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">(direct user manipulation)</text>
    <line x1="430" y1="40" x2="430" y2="370" stroke={COLORS.slate300} strokeWidth="1" strokeDasharray="4 3" />
    <text x="620" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Indirect Injection</text>
    <rect x="460" y="60" width="100" height="40" rx="6" fill={COLORS.slate700} />
    <text x="510" y="85" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">User Query</text>
    <line x1="560" y1="80" x2="600" y2="80" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowI)" />
    <rect x="600" y="60" width="100" height="40" rx="6" fill={COLORS.blue} />
    <text x="650" y="85" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">LLM</text>
    <line x1="650" y1="100" x2="650" y2="140" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowI)" />
    <rect x="580" y="140" width="140" height="50" rx="6" fill={COLORS.white} stroke={COLORS.slate500} strokeWidth="1.5" />
    <text x="650" y="170" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="600">Retrieves doc</text>
    <line x1="650" y1="190" x2="650" y2="230" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowI)" />
    <rect x="540" y="230" width="220" height="60" rx="6" fill="#fef2f2" stroke={COLORS.red} strokeWidth="2" />
    <text x="650" y="255" textAnchor="middle" fill={COLORS.red} fontSize="12" fontWeight="700">Poisoned content</text>
    <text x="650" y="275" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Hidden instructions in PDF, web page, email</text>
    <line x1="650" y1="290" x2="650" y2="320" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowI)" />
    <text x="650" y="345" textAnchor="middle" fill={COLORS.red} fontSize="12" fontWeight="700">LLM acts on attacker instructions</text>
    <defs>
      <marker id="arrowI" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
      </marker>
    </defs>
  </DiagramFrame>
);

// M5: Agent attack surface
const AgentAttackSurfaceDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="The agentic attack surface — every connection is a potential vector">
    <circle cx="400" cy="210" r="60" fill={COLORS.blue} />
    <text x="400" y="215" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">Agent</text>
    {[
      { x: 150, y: 80, label: 'Prompt Injection', desc: 'via retrieved data' },
      { x: 650, y: 80, label: 'Tool Poisoning', desc: 'malicious MCP server' },
      { x: 100, y: 280, label: 'Confused Deputy', desc: 'misuse of privileges' },
      { x: 700, y: 280, label: 'Context Contamination', desc: 'persistent memory exploit' },
      { x: 400, y: 380, label: 'Lateral Movement', desc: 'agent-to-agent escalation' }
    ].map((threat, i) => {
      const dx = threat.x - 400;
      const dy = threat.y - 210;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const startX = 400 + (dx / dist) * 60;
      const startY = 210 + (dy / dist) * 60;
      return (
        <g key={i}>
          <line x1={startX} y1={startY} x2={threat.x} y2={threat.y} stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />
          <rect x={threat.x - 80} y={threat.y - 25} width="160" height="50" rx="6" fill="#fef2f2" stroke={COLORS.red} strokeWidth="1.5" />
          <text x={threat.x} y={threat.y - 8} textAnchor="middle" fill={COLORS.red} fontSize="11" fontWeight="700">{threat.label}</text>
          <text x={threat.x} y={threat.y + 10} textAnchor="middle" fill={COLORS.slate700} fontSize="9">{threat.desc}</text>
        </g>
      );
    })}
  </DiagramFrame>
);

// M6: Google stack mapped to 5-layer model
const GoogleStackDiagram = () => {
  const layers = [
    { label: 'Gemini Enterprise (App)', sublabel: 'Agentic productivity surface for users', color: COLORS.amber },
    { label: 'Agent Platform · MCP · A2A', sublabel: 'Agent Registry · Agent Gateway · Agent Engine', color: '#fb923c' },
    { label: 'Agent Development Kit (ADK)', sublabel: 'Build, test, deploy agents', color: COLORS.blue },
    { label: 'Vertex AI Inference', sublabel: 'Model serving and tuning', color: COLORS.cyan },
    { label: 'Gemini Models', sublabel: 'Foundation: Gemini · embedding · multimodal', color: COLORS.slate700 }
  ];
  return (
    <DiagramFrame viewBox="0 0 700 460" caption="Google's stack mapped to the 5-layer model — every layer is now under the Gemini Enterprise Agent Platform umbrella">
      {layers.map((l, i) => (
        <g key={i}>
          <rect x="80" y={40 + i * 75} width="540" height="60" rx="8" fill={l.color} />
          <text x="350" y={68 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">{l.label}</text>
          <text x="350" y={87 + i * 75} textAnchor="middle" fill={COLORS.white} fontSize="11" opacity="0.9">{l.sublabel}</text>
        </g>
      ))}
      <text x="350" y="445" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Announced at Cloud Next &apos;26: Vertex AI evolves into Gemini Enterprise Agent Platform</text>
    </DiagramFrame>
  );
};

// M6: Google SecOps architecture
const GoogleSecOpsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="Google SecOps: ingestion → UDM → detection → SOAR, with Gemini AI threaded throughout">
    <rect x="40" y="40" width="720" height="50" rx="8" fill={COLORS.amber} />
    <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Gemini in SecOps · NL Search · Case Summary · Detection Authoring · Triage Agent · Threat Hunting Agent · Detection Engineering Agent</text>
    <text x="400" y="80" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">AI threads through every layer below</text>
    <rect x="40" y="110" width="350" height="80" rx="8" fill={COLORS.blue} />
    <text x="215" y="140" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">SIEM Engine</text>
    <text x="215" y="160" textAnchor="middle" fill={COLORS.white} fontSize="11">UDM · YARA-L 2.0 · Curated detections</text>
    <text x="215" y="178" textAnchor="middle" fill={COLORS.white} fontSize="11">12 months hot retention</text>
    <rect x="410" y="110" width="350" height="80" rx="8" fill={COLORS.cyan} />
    <text x="585" y="140" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">SOAR</text>
    <text x="585" y="160" textAnchor="middle" fill={COLORS.white} fontSize="11">300+ integrations · Playbooks</text>
    <text x="585" y="178" textAnchor="middle" fill={COLORS.white} fontSize="11">Case management</text>
    <rect x="40" y="210" width="720" height="60" rx="8" fill={COLORS.slate700} />
    <text x="400" y="235" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Google Threat Intelligence (Mandiant + VirusTotal)</text>
    <text x="400" y="255" textAnchor="middle" fill={COLORS.white} fontSize="11">Actor profiles · Campaign tracking · IOC enrichment · Dark web intel</text>
    <rect x="40" y="290" width="720" height="60" rx="8" fill="#475569" />
    <text x="400" y="315" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Ingestion: 700+ Parsers</text>
    <text x="400" y="335" textAnchor="middle" fill={COLORS.white} fontSize="11">Forwarders · Collectors · Ingestion APIs · Third-party integrations</text>
    <rect x="40" y="370" width="720" height="50" rx="8" fill={COLORS.slate900} />
    <text x="400" y="400" textAnchor="middle" fill={COLORS.white} fontSize="12">Customer telemetry: endpoint · network · cloud · identity · email · SaaS</text>
  </DiagramFrame>
);

// M6: Three SecOps agents
const SecOpsAgentsDiagram = () => {
  const agents = [
    { x: 30, title: 'Triage & Investigation', status: 'GA', statusColor: COLORS.emerald, desc: '30 min → ~60 sec on routine alerts', stat: '5M+ alerts processed in year one' },
    { x: 280, title: 'Threat Hunting', status: 'PRIVATE PREVIEW', statusColor: COLORS.amber, desc: 'Hypothesis-driven hunts', stat: 'Surfaces novel attack patterns' },
    { x: 530, title: 'Detection Engineering', status: 'PRIVATE PREVIEW', statusColor: COLORS.amber, desc: 'Generates and evaluates rules', stat: 'MCP tools for rule creation' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 320" caption="Google SecOps agents announced at Cloud Next &apos;26 — Triage GA, others in preview as of early 2026">
      {agents.map((a, i) => (
        <g key={i}>
          <rect x={a.x} y="30" width="240" height="270" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={a.x} y="30" width="240" height="50" rx="10" fill={COLORS.blue} />
          <text x={a.x + 120} y="62" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">{a.title}</text>
          <rect x={a.x + 30} y="100" width="180" height="30" rx="15" fill={a.statusColor} />
          <text x={a.x + 120} y="120" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{a.status}</text>
          <text x={a.x + 120} y="170" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="600">{a.desc}</text>
          <line x1={a.x + 30} y1="200" x2={a.x + 210} y2="200" stroke={COLORS.slate200} />
          <text x={a.x + 120} y="240" textAnchor="middle" fill={COLORS.slate500} fontSize="11">{a.stat}</text>
        </g>
      ))}
    </DiagramFrame>
  );
};

// M6: Competitive quadrant
const CompetitiveQuadrantDiagram = () => (
  <DiagramFrame viewBox="0 0 800 500" caption="Competitive positioning — concede gracefully where appropriate, compete hard on TI depth and agentic leadership">
    <line x1="80" y1="430" x2="720" y2="430" stroke={COLORS.slate300} strokeWidth="2" />
    <line x1="400" y1="50" x2="400" y2="430" stroke={COLORS.slate300} strokeWidth="2" />
    <text x="80" y="445" fill={COLORS.slate500} fontSize="11">Endpoint-led</text>
    <text x="720" y="445" textAnchor="end" fill={COLORS.slate500} fontSize="11">Platform-led</text>
    <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="11">Strong TI / Agentic AI</text>
    <text x="400" y="465" textAnchor="middle" fill={COLORS.slate500} fontSize="11">Endpoint / Productivity moat</text>
    <g>
      <circle cx="500" cy="120" r="50" fill={COLORS.blue} opacity="0.85" />
      <text x="500" y="120" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">Google</text>
      <text x="500" y="138" textAnchor="middle" fill={COLORS.white} fontSize="10">SecOps + GTI</text>
    </g>
    <g>
      <circle cx="540" cy="350" r="45" fill={COLORS.slate500} />
      <text x="540" y="350" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Microsoft</text>
      <text x="540" y="368" textAnchor="middle" fill={COLORS.white} fontSize="10">Sec Copilot</text>
    </g>
    <g>
      <circle cx="180" cy="300" r="45" fill={COLORS.slate500} />
      <text x="180" y="300" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">CrowdStrike</text>
      <text x="180" y="318" textAnchor="middle" fill={COLORS.white} fontSize="10">Charlotte AI</text>
    </g>
    <g>
      <circle cx="640" cy="220" r="45" fill={COLORS.slate500} />
      <text x="640" y="220" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Palo Alto</text>
      <text x="640" y="238" textAnchor="middle" fill={COLORS.white} fontSize="10">Precision AI</text>
    </g>
    <text x="400" y="490" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Positioning is illustrative — Google leads on TI depth via Mandiant and agentic security breadth</text>
  </DiagramFrame>
);

// M7: Discovery question funnel
const DiscoveryFunnelDiagram = () => {
  const stages = [
    { y: 40, w: 700, label: 'Volume & Pain', desc: 'Alerts/day, FP rate, MTTR', color: COLORS.cyan },
    { y: 130, w: 580, label: 'Workflow', desc: 'Walk me through alert-to-close', color: COLORS.blue },
    { y: 220, w: 460, label: 'Architecture', desc: 'MCP, agent identity, AI inventory', color: COLORS.amber },
    { y: 310, w: 340, label: 'Skeptic', desc: "What didn't work before?", color: COLORS.emerald }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 420" caption="Each layer narrows the conversation — from quantifying pain to surfacing what specifically to address">
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={400 - s.w / 2} y={s.y} width={s.w} height="65" rx="8" fill={s.color} />
          <text x="400" y={s.y + 30} textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">{s.label}</text>
          <text x="400" y={s.y + 50} textAnchor="middle" fill={COLORS.white} fontSize="11">{s.desc}</text>
        </g>
      ))}
      <line x1="400" y1="105" x2="400" y2="130" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowDF)" />
      <line x1="400" y1="195" x2="400" y2="220" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowDF)" />
      <line x1="400" y1="285" x2="400" y2="310" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowDF)" />
      <defs>
        <marker id="arrowDF" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
    </DiagramFrame>
  );
};

// ============================================================
// COURSE CONTENT — same as V1, with diagrams attached
// ============================================================

const COURSE = {
  title: 'AI for Cybersecurity Sales Engineers',
  subtitle: 'V2 — From foundational concepts to Google-aligned positioning, with architectural diagrams',
  modules: [
    {
      id: 'm1',
      title: 'AI Fundamentals (Fast Pass)',
      icon: '⚡',
      summary: 'Core concepts in plain language — built for technical SEs who want speed, not hand-holding.',
      lessons: [
        {
          id: 'm1l1',
          title: 'AI vs ML vs DL vs GenAI',
          diagram: 'NestedAI',
          slides: [
            { heading: 'The Nesting Dolls', body: 'AI is the broadest umbrella — any system that mimics human intelligence. Machine Learning is a subset where systems learn from data instead of being explicitly programmed. Deep Learning is a subset of ML using multi-layer neural networks. Generative AI is a subset of DL focused on producing new content (text, images, code).' },
            { heading: 'Why This Matters in Sales', body: 'Customers conflate these terms constantly. When a prospect says &quot;we want AI,&quot; your follow-up should be: do you mean predictive analytics on existing data (classic ML), pattern recognition in unstructured data (DL), or content/decision generation (GenAI)? Each has different cost, latency, and risk profiles.' },
            { heading: 'The 30-Second Whiteboard', body: 'Draw four concentric circles. Outermost: AI. Inside: ML. Inside that: DL. Innermost: GenAI. Every GenAI system is a DL system. Every DL system is an ML system. Not all ML is DL — and decision trees, random forests, and SVMs still dominate plenty of security workloads.' }
          ]
        },
        {
          id: 'm1l2',
          title: 'Learning Paradigms',
          diagram: 'LearningParadigms',
          slides: [
            { heading: 'Supervised Learning', body: 'Model trains on labeled data — &quot;this email is phishing, this one is not.&quot; Accuracy depends on label quality. Most classical security ML (spam filters, malware classifiers) works this way.' },
            { heading: 'Unsupervised Learning', body: 'Model finds patterns without labels — clustering similar behaviors, detecting anomalies. UEBA and many behavioral analytics features lean here. Strength: catches unknowns. Weakness: high false positive rates without tuning.' },
            { heading: 'Reinforcement Learning', body: 'Model learns via reward signals from actions taken. Used heavily in agentic systems and post-training of LLMs (RLHF). Less common in shipping security products today, but growing in autonomous response.' }
          ]
        },
        {
          id: 'm1l3',
          title: 'Neural Networks in Five Minutes',
          diagram: 'NeuralNet',
          slides: [
            { heading: 'The Core Idea', body: 'Layers of mathematical neurons, each applying a weighted transform plus a non-linear function. Stack enough layers and the network can approximate extremely complex functions — that is the whole trick.' },
            { heading: 'Training', body: 'Forward pass: data flows through, prediction comes out. Loss function measures error. Backpropagation pushes corrections backward through the network, adjusting weights. Repeat millions of times. The model is just the final set of weights.' },
            { heading: 'What an SE Needs to Remember', body: 'A model is fundamentally a frozen set of numbers (weights) plus an architecture. It does not know anything in a human sense — it computes statistically likely outputs from inputs. This framing resolves a lot of customer confusion before it starts, especially around what models can and cannot reason about.' }
          ]
        }
      ],
      quiz: [
        { q: 'A customer says "we need AI for our SOC." What is the best discovery response?', options: ['Pitch your GenAI feature immediately', 'Ask whether they mean predictive ML, pattern recognition, or generative/decisioning use cases', 'Recommend the largest model available', 'Tell them all AI is the same'], correct: 1 },
        { q: 'Which paradigm is most associated with classical UEBA anomaly detection?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Generative'], correct: 1 },
        { q: 'A trained neural network is fundamentally:', options: ['A database of facts', 'A set of weights plus an architecture', 'A reasoning engine', 'A search index'], correct: 1 }
      ]
    },
    {
      id: 'm2',
      title: 'LLMs & Generative AI',
      icon: '🧠',
      summary: 'The mechanics behind the magic — tokens, context, embeddings, RAG, fine-tuning, hallucinations.',
      lessons: [
        {
          id: 'm2l1',
          title: 'Tokens, Context Windows, and Why Size Matters',
          diagram: 'Tokenization',
          slides: [
            { heading: 'Tokens, Not Words', body: 'LLMs read and write in tokens — typically 3-4 characters of English text. Cybersecurity might be 2-3 tokens. Pricing, throughput, and limits are all measured in tokens, not words. Rule of thumb: 750 words ≈ 1,000 tokens.' },
            { heading: 'Tokens for Non-Text Inputs', body: 'Tokens extend beyond text. Images are tokenized as patches — a single 1024×1024 image typically costs hundreds to a few thousand tokens depending on the model. Video is tokenized as frames over time, which is why 30 seconds of video can consume tens of thousands of tokens. Audio is tokenized as discrete sound units. The unit varies, but the principle holds: every modality maps to tokens, every token has a cost.' },
            { heading: 'Context Windows', body: 'The maximum tokens a model can see at once — input plus output. Modern frontier models offer 200K to 2M+ tokens. But longer context does not equal better answers; models often degrade in the middle of very long contexts (lost in the middle).' },
            { heading: 'Security Incidents in Token Terms', body: 'Concrete examples for SE conversations: a typical phishing email plus headers ≈ 500-1,500 tokens. A SIEM alert with enrichment ≈ 200-800 tokens. A 10-page incident report ≈ 4,000-6,000 tokens. A 500-page IR engagement document ≈ 200,000+ tokens. A 30-second deepfake video sample for analysis can exceed 50,000 tokens. This is why batch alert analysis, video forensics, and long-document review have very different cost profiles.' },
            { heading: 'Sales Implication', body: 'When a prospect asks can it analyze our 500-page incident report — yes, technically. But the right answer is often retrieving the relevant slice of the document at query time rather than stuffing everything in the prompt. We will cover that retrieval pattern (RAG) in Lesson 4. This is a credibility marker — push back gently on context-window-as-magic-bullet thinking.' }
          ]
        },
        {
          id: 'm2l2',
          title: 'Embeddings and Vector Search',
          diagram: 'Embeddings',
          slides: [
            { heading: 'What Embeddings Are', body: 'Numerical representations of text (or images, code, audio) where semantically similar items end up near each other in high-dimensional space. Each item becomes a vector — a long list of numbers — and similarity is measured by distance between vectors. Phishing email and credential harvesting message cluster together even with no shared words, because their meanings are close.' },
            { heading: 'Vector Search: Finding Similar Things', body: 'Once content is embedded as vectors, you can ask: what items are closest to this query in vector space? That is vector search — also called semantic search. Unlike keyword search (which matches literal words), it matches meaning. A query for credential theft will surface documents about phishing, password dumps, and token harvesting even when those exact words do not appear.' },
            { heading: 'Why SEs Care', body: 'Embeddings power semantic search, similarity matching, and a lot of modern security ML. When customers describe wanting to find similar incidents, detect novel variants of known attacks, or surface related threat intel — embeddings are usually the underlying technique. They are also the foundation for the retrieval pattern we cover in the next lesson, so this concept compounds.' }
          ]
        },
        {
          id: 'm2l3',
          title: 'RAG: Retrieval-Augmented Generation',
          diagram: 'RAGFlow',
          slides: [
            { heading: 'The Pattern', body: 'Step 1: Embed the user query. Step 2: Find the most relevant chunks from a private knowledge base via vector search. Step 3: Stuff those chunks into the LLM prompt as context. Step 4: Generate an answer grounded in retrieved data.' },
            { heading: 'Why It Dominates Enterprise', body: 'Cheaper than fine-tuning. Updates instantly when source data changes. Provides citations. Keeps proprietary data out of the base model. For security: lets a SecOps copilot answer about your environment, your runbooks, your past incidents — without retraining anything.' },
            { heading: 'Where RAG Fails', body: 'If retrieval is bad, generation is bad. Garbage in, garbage out applies. Chunk strategy, embedding model choice, and reranking matter enormously. A common pilot failure is shipping naive RAG and blaming the LLM when retrieval was the actual problem.' }
          ]
        },
        {
          id: 'm2l4',
          title: 'Fine-Tuning vs. Prompting',
          diagram: 'FTvsPrompting',
          slides: [
            { heading: 'Prompting', body: 'You change behavior by changing instructions. Cheap, instant, reversible. Modern frontier models follow nuanced prompts well. Should be the default for 80%+ of use cases.' },
            { heading: 'Fine-Tuning', body: 'You change behavior by further training on examples. Expensive, slower, harder to update. Useful for specialized domains, fixed output formats, or when you need to bake style/tone into the weights themselves.' },
            { heading: 'The Honest Take', body: 'Most we need a fine-tuned model on our security data requests are actually RAG requests in disguise. Fine-tuning is the right answer when you need behavioral consistency that prompting cannot reliably achieve — far rarer than prospects assume.' }
          ]
        },
        {
          id: 'm2l5',
          title: 'Hallucinations: What They Actually Are',
          diagram: 'HallucinationMitigation',
          slides: [
            { heading: "Not Lying", body: "Hallucination is the model producing fluent, confident output that isn't grounded in reality. The model isn't deceiving — it's sampling probable next-tokens, and probable doesn't mean true. This framing matters because customers often anthropomorphize the failure mode." },
            { heading: 'Mitigation Stack', body: "Grounding (RAG with citations), constrained output formats, retrieval verification, model-as-judge approaches, human-in-the-loop checkpoints. No single technique eliminates hallucinations; defense is layered. The diagram above shows how the layers compose — each catches what the one below missed." },
            { heading: 'Talk Track for Skeptics', body: "Suggested framing: \"You're right that LLMs hallucinate. That's why every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and analyst confirmation stays in the loop for high-impact actions. The system isn't replacing human judgment — it's removing the work that doesn't need human judgment.\"" }
          ]
        }
      ],
      quiz: [
        { q: 'A customer wants their SOC copilot to answer questions using their internal runbooks. What is the right architectural answer?', options: ['Fine-tune a custom model on their runbooks', 'Use RAG to retrieve relevant runbook sections at query time', 'Train a model from scratch', 'Just use a longer context window'], correct: 1 },
        { q: 'Why might a 2M-token context window not solve "analyze our entire knowledge base"?', options: ['It is too expensive', 'Models often degrade attention mid-context (lost in the middle)', 'It is technically impossible', 'Tokens are not real'], correct: 1 },
        { q: 'A hallucination is best described as:', options: ['The model intentionally lying', 'Fluent output not grounded in reality', 'A bug in the code', 'A jailbreak attempt'], correct: 1 }
      ]
    },
    {
      id: 'm3',
      title: 'AI Architecture: Models, MCP, Agents',
      icon: '🏗️',
      summary: 'The full stack literacy module — the layer cake every SE must be able to whiteboard.',
      lessons: [
        {
          id: 'm3l1',
          title: 'The AI Stack: A Layer Cake',
          diagram: 'AIStack',
          slides: [
            { heading: 'The Five Layers', body: '(1) Foundation models — the base LLMs/multimodal models. (2) Inference and serving — how models are hosted and called. (3) Orchestration — frameworks that chain calls, manage memory, route between models. (4) Tools and integrations — how AI reaches out to systems (databases, APIs, files). (5) Agents and agentic systems — autonomous goal-pursuing entities built on the stack below.' },
            { heading: 'Why SEs Must Know This', body: 'Customers buy at different layers. Some want a model API. Some want a managed agent platform. Some want a finished agentic application. Misreading which layer they need is the #1 cause of misaligned discovery.' }
          ]
        },
        {
          id: 'm3l2',
          title: 'Model Context Protocol (MCP)',
          diagram: 'MCP',
          slides: [
            { heading: 'The Problem MCP Solves', body: 'Before MCP, every AI app integrated with every tool through bespoke glue code — N×M integrations. MCP is an open standard (originally from Anthropic, now broadly adopted) that gives models a uniform way to discover and call tools, retrieve resources, and use prompts from external servers.' },
            { heading: 'How It Works', body: 'An MCP server exposes capabilities — tools (callable functions), resources (data), prompts (templates). An MCP client (the AI host application) connects, negotiates, and calls them through a standardized JSON-RPC protocol. Auth, schemas, and discovery are all built in.' },
            { heading: 'Why It Matters for Security', body: 'MCP is becoming the de facto integration fabric for agentic systems. Google SecOps, Gemini Enterprise, and most major platforms now expose MCP servers or consume them. This means your platform openness is increasingly measured by MCP support — and so is its attack surface.' },
            { heading: 'The Security Angle', body: 'Every MCP connection is a potential injection vector. A malicious MCP server can poison context, exfiltrate data, or manipulate tool calls. Discovery questions to ask prospects: How do you authorize MCP servers? Do you scan tool definitions for injection? Where does the audit log live for agent-to-tool calls?' }
          ]
        },
        {
          id: 'm3l3',
          title: 'Agents and Agentic Systems',
          diagram: 'AgentTopology',
          slides: [
            { heading: 'What Makes Something an Agent', body: 'Three things: (1) goal-directedness — pursues an objective rather than answering one prompt, (2) tool use — can take actions in the world, not just produce text, (3) autonomy — decides next steps based on outcomes, with iteration. Anything missing those is not really an agent, marketing claims notwithstanding.' },
            { heading: 'Single-Agent vs Multi-Agent', body: 'Single-agent: one autonomous loop pursuing one goal. Multi-agent: specialized agents coordinate with each other — one might triage, another investigate, another respond. Multi-agent shines when subtasks differ enough to warrant specialization; otherwise it is overhead. We cover the protocols that make this coordination possible (MCP and A2A) in Lesson 5.' }
          ]
        },
        {
          id: 'm3l4',
          title: 'Autonomy Levels',
          diagram: 'AutonomyLevels',
          slides: [
            { heading: 'The Ladder', body: 'Level 0: human approves every step. Level 1: human approves consequential steps. Level 2: agent acts autonomously with logging and reversibility. Level 3: full autonomy. Most enterprise security deployments live at Level 1 — and that is the right default for high-impact actions like containment or remediation.' },
            { heading: 'Where Humans Stay In the Loop', body: 'Good agentic security design is ruthless about HITL on irreversible actions: account disables, host isolation, blocking, deletions. Reversible enrichment, triage, and investigation are increasingly safe to delegate. The framing for prospects: the agent handles the analyst grunt work; humans keep the consequential decisions.' }
          ]
        },
        {
          id: 'm3l5',
          title: 'Agent Protocols: MCP and A2A',
          diagram: 'A2AvsMCP',
          slides: [
            { heading: 'MCP for Agent-to-Tool', body: 'MCP standardizes how a single agent reaches out to tools and resources. Think of it as the agent peripheral bus.' },
            { heading: 'A2A for Agent-to-Agent', body: 'Agent2Agent protocol (Google, increasingly adopted) standardizes how agents discover and communicate with each other. Think of it as the network layer between agents. Together with MCP, A2A creates the substrate for multi-agent enterprise systems.' },
            { heading: 'Why This Slide Wins Architects', body: 'When you can cleanly separate agent-to-tool (MCP) from agent-to-agent (A2A) for a customer architect, you have immediately distinguished yourself from competitors who muddle the layers. This is a credibility move.' }
          ]
        }
      ],
      quiz: [
        { q: 'What problem does MCP primarily solve?', options: ['Model training cost', 'N×M integration complexity between AI hosts and tools', 'Hallucinations', 'Token pricing'], correct: 1 },
        { q: 'A customer wants an "agent" that just summarizes alerts. The honest assessment:', options: ['Yes, it is an agent', 'It is likely an automated workflow, not really an agent — no goal-directed iteration', 'Does not matter', 'Only if it uses GPT-4'], correct: 1 },
        { q: 'For most enterprise security deployments, the right default autonomy level is:', options: ['Level 0 — approve every step', 'Level 1 — approve consequential steps, autonomous on routine', 'Level 3 — full autonomy', 'No autonomy at all'], correct: 1 },
        { q: 'A2A is to ___ as MCP is to ___', options: ['agent-to-agent ; agent-to-tool', 'agent-to-tool ; agent-to-agent', 'training ; inference', 'They are the same protocol'], correct: 0 }
      ]
    },
    {
      id: 'm4',
      title: 'AI in the Security Stack',
      icon: '🛡️',
      summary: 'Where AI actually lives in modern security tools — separating real capability from marketing.',
      lessons: [
        {
          id: 'm4l1',
          title: 'The SOC AI Architecture',
          diagram: 'SOCArch',
          slides: [
            { heading: 'Two Layers of AI', body: 'Modern SOC tools have two AI layers: classical ML for detection (anomaly, UEBA, malware classifiers, BEC) and GenAI on top for narrative, summarization, and reasoning. The base detection is still classical ML; the GenAI sits above translating signal into analyst-friendly language.' },
            { heading: 'Hype Watch', body: 'AI-powered detection sometimes means we have a few ML models for one use case. Push prospects to ask: which detections are AI-driven? What is the false positive rate vs. the previous rules engine? Can you show me a model card or evaluation methodology?' }
          ]
        },
        {
          id: 'm4l2',
          title: 'SIEM and XDR',
          slides: [
            { heading: 'Real Use', body: 'Anomaly detection (statistical + ML), entity behavior analytics, alert correlation, automated triage summarization, natural-language-to-query translation (NL to KQL, SPL, UDM). Detection authoring assist — where the analyst describes a detection in plain English and the system drafts the rule — is increasingly mature.' },
            { heading: 'Hype Watch', body: 'AI-powered detection sometimes means we have a few ML models for one use case. Push prospects to ask: which detections are AI-driven? What is the false positive rate vs. the previous rules engine? Can you show me a model card or evaluation methodology?' }
          ]
        },
        {
          id: 'm4l3',
          title: 'EDR and Behavioral Analysis',
          diagram: 'EDRBehavioral',
          slides: [
            { heading: 'Real Use', body: 'Process tree analysis, behavioral clustering, novel malware detection via DL classifiers, ransomware behavior detection, command-line argument analysis. Mature, embedded, often invisible to the user.' },
            { heading: 'The GenAI Layer on Top', body: 'Newer: LLM-driven incident summarization, root cause narratives, response recommendations. The base detection is still classical ML; the GenAI sits on top translating signal into analyst-friendly language. This is a useful pattern to recognize across the whole modern security stack.' }
          ]
        },
        {
          id: 'm4l4',
          title: 'Email and Identity Security',
          diagram: 'EmailIdentity',
          slides: [
            { heading: 'Email Security', body: 'BEC detection has been ML-powered for years — writing-style analysis, relationship graphs, lookalike domain detection. GenAI is adding payload analysis (does this URL landing page look like a credential harvester?) and conversation-aware phishing detection that reads thread history.' },
            { heading: 'Identity and ITDR', body: 'Behavioral baselines for users and service accounts, peer-group analysis, lateral movement detection. Identity Threat Detection and Response (ITDR) increasingly uses AI across IdP logs. Non-human identity (NHI) coverage — service accounts, API keys, machine identities — is a 2026 priority area.' }
          ]
        },
        {
          id: 'm4l5',
          title: 'SOC Copilots and Autonomous Triage',
          slides: [
            { heading: 'Where We Actually Are', body: 'SOC copilots (chat-style assistants over your security data) are mature. Autonomous Tier-1 triage — agent receives alert, enriches, decides escalate/close — is shipping in production now. Multi-step investigation agents that pivot across systems are the 2026 frontier.' },
            { heading: 'The Honest Numbers', body: 'Customers are reporting real reductions in time-to-investigate (often 30 minutes to minutes for routine alerts). The wins are largest in high-volume, low-judgment work: phishing triage, basic IOC enrichment, alert deduplication. Complex investigations still need humans driving.' }
          ]
        },
        {
          id: 'm4l6',
          title: 'Threat Intelligence and Hunting',
          slides: [
            { heading: 'TI Enrichment', body: 'AI-powered enrichment of indicators with context, attribution likelihood, campaign linking. Natural-language querying of TI graphs has become standard. Underrated: AI-summarized briefings on emerging threats tailored to your environment.' },
            { heading: 'Threat Hunting', body: 'Hypothesis generation from MITRE ATT&CK, query suggestions, anomaly surfacing. Newest wave: agentic hunting — agent generates hypotheses, runs queries, follows leads, reports findings. Currently early but advancing fast.' }
          ]
        }
      ],
      quiz: [
        { q: 'A vendor claims "fully AI-powered detection." Best follow-up question:', options: ['How big is your model?', 'Which detections are AI-driven, and what is your evaluation methodology?', 'What language is it written in?', 'How much GPU does it use?'], correct: 1 },
        { q: 'Where are autonomous AI agents producing the largest current wins in the SOC?', options: ['Strategic threat modeling', 'High-volume, low-judgment work like phishing triage and IOC enrichment', 'Replacing CISOs', 'Compliance audits'], correct: 1 },
        { q: 'In a modern XDR, the GenAI layer typically:', options: ['Replaces all ML detection', 'Sits on top of classical ML, translating signal into narratives and recommendations', 'Does the actual malware classification', 'Is purely cosmetic'], correct: 1 }
      ]
    },
    {
      id: 'm5',
      title: 'The Adversarial Side',
      icon: '⚔️',
      summary: 'AI as offensive weapon and AI systems as targets — both reframe the defense conversation.',
      lessons: [
        {
          id: 'm5l1',
          title: 'AI-Powered Attacks',
          diagram: 'AIAttackAcceleration',
          slides: [
            { heading: 'Phishing and Social Engineering at Scale', body: 'GenAI removes the cost barrier to high-quality, personalized, multi-language phishing. Voice cloning enables vishing. Real-time deepfake video is operational for targeted fraud. The volume × quality curve has shifted permanently.' },
            { heading: 'Polymorphic and Adaptive Malware', body: 'LLMs generating obfuscation variants, AI-assisted exploit development, automated vulnerability discovery. Patch-to-exploit times are compressing. The defender patching cycle is now in a race against AI-accelerated weaponization.' },
            { heading: 'Reconnaissance and Targeting', body: 'Automated OSINT aggregation, victim profiling, attack chain planning. Capabilities that once required skilled human operators are increasingly available as commodity tools.' }
          ]
        },
        {
          id: 'm5l2',
          title: 'Prompt Injection: The Dominant Threat',
          diagram: 'PromptInjection',
          slides: [
            { heading: 'Direct vs Indirect', body: 'Direct: attacker types malicious instructions into the prompt directly. Indirect: payload sits in retrieved data (documents, web pages, emails, tool outputs) that the model later reads. Indirect injection is the dominant practical threat in enterprise.' },
            { heading: 'Why Indirect Is Worse', body: 'The user did nothing wrong. They just asked the agent to summarize a document — the document was poisoned. Defending requires treating all retrieved content as untrusted, including content from your own systems.' }
          ]
        },
        {
          id: 'm5l3',
          title: 'Agent-Specific Attack Surface',
          diagram: 'AgentAttackSurface',
          slides: [
            { heading: 'The New Threats', body: 'Confused-deputy attacks (agent uses its privileges on attacker behalf), tool poisoning (malicious MCP servers), context contamination (persistent memory exploit), lateral movement through agent tool chains. This is the frontier risk surface.' },
            { heading: 'Other Attacks on AI Systems', body: 'Jailbreaks: bypass model safety alignment. Model poisoning: corrupt training data to install backdoors. Evasion: craft inputs that fool deployed models. Extraction: query a model to steal capabilities or training data. All concerns for organizations training or deploying their own models.' }
          ]
        },
        {
          id: 'm5l4',
          title: 'How Defense Reframes',
          slides: [
            { heading: 'Speed Over Perfection', body: 'When attackers automate, defenders must too. The traditional review-every-alert model breaks when alert volume scales with attacker automation. AI-assisted triage is not a luxury — it is table stakes for keeping pace.' },
            { heading: 'AIBOM and Agent Identity', body: 'Customers increasingly need to inventory AI systems, models, training data sources, MCP connections, and agent privileges. Emerging requirement, especially under frameworks like the EU AI Act and NIST AI RMF.' },
            { heading: 'The New Discovery Question', body: 'How is your team thinking about AI agent identity, agent-to-agent traffic, and agent privilege management? Most prospects have not. This question opens doors that classical security questions do not.' }
          ]
        }
      ],
      quiz: [
        { q: 'The dominant practical prompt injection threat in enterprise is:', options: ['Direct jailbreaks of public chatbots', 'Indirect injection via retrieved data (documents, web pages, tool outputs)', 'Physical access attacks', 'Password spraying'], correct: 1 },
        { q: 'A "confused deputy" attack on an agent means:', options: ['The agent crashes', 'The agent uses its legitimate privileges to act on the attacker behalf', 'The model is fine-tuned poorly', 'The agent refuses to answer'], correct: 1 },
        { q: 'AIBOM stands for:', options: ['AI Build Operations Manual', 'AI Bill of Materials', 'Adaptive Intelligence Binary Object Model', 'Automated Incident-Based Object Mapping'], correct: 1 }
      ]
    },
    {
      id: 'm6',
      title: "Google Deep-Dive: AI & Security Portfolio",
      icon: 'G',
      summary: 'Google-aligned positioning with current product names, capabilities, and competitive context.',
      lessons: [
        {
          id: 'm6l1',
          title: "Google's AI Stack",
          diagram: 'GoogleStack',
          slides: [
            { heading: 'Vertex AI → Gemini Enterprise Agent Platform', body: 'Announced at Cloud Next 2026 (April), Vertex AI evolved into the Gemini Enterprise Agent Platform — a unified platform for building, scaling, governing, and optimizing agents. It retains the model selection, training, and tuning capabilities of Vertex AI and adds first-class agent integration, orchestration, DevOps, and security controls.' },
            { heading: 'Gemini Enterprise (the App)', body: 'Google flagship agentic productivity application — the front door to AI in the workplace. Connects to Drive, OneDrive, SharePoint, HubSpot, Jira, Notion, Linear and more. Includes Model Armor for malicious-input screening, VPC-SC, CMEK, and access controls. Editions: Business, Standard, Plus, Frontline.' },
            { heading: 'Agent Development Kit (ADK)', body: "Google open framework for building agents — used by Comcast, Geotab, L'Oréal, and others to build production agents that work across frameworks. Pairs with Agent Engine for managed runtime." }
          ]
        },
        {
          id: 'm6l2',
          title: 'Google Agent Infrastructure',
          slides: [
            { heading: 'Agent Registry and Agent Gateway', body: 'Agent Registry is a central library indexing every internal agent, tool, and skill — the agentic equivalent of a service catalog. Agent Gateway is the management plane: enforces policies for all agent-to-agent and agent-to-tool connections, supports MCP and A2A protocols.' },
            { heading: 'Agent Identity', body: 'Each agent gets a SPIFFE-based identity, making AI agents first-class citizens in identity governance — distinct from non-human identities (NHIs) like service accounts. This matters because agents are autonomous and goal-oriented in a way NHIs are not.' },
            { heading: 'Memory Bank and Sessions', body: 'Persistent context across multi-day agent workflows. Powerful for continuity, but expands the attack surface — context becomes a long-lived asset that needs governance.' }
          ]
        },
        {
          id: 'm6l3',
          title: 'Google SecOps Architecture',
          diagram: 'GoogleSecOps',
          slides: [
            { heading: 'What It Is', body: 'Google cloud-native security operations platform — the unified successor to Chronicle SIEM and the Siemplify-derived SOAR. Three packages: Standard, Enterprise, Enterprise Plus. The Google Unified Security bundle includes Enterprise Plus and more.' },
            { heading: 'Core Capabilities', body: '12 months of hot data retention, Unified Data Model (UDM), 700+ parsers, 300+ SOAR integrations, YARA-L 2.0 detection language, curated detections maintained by Google researchers, and integrated Mandiant threat intelligence.' },
            { heading: 'Gemini in Security Operations', body: 'Natural language search across UDM, AI-generated case summaries, playbook generation from natural language, detection rule authoring assistance, context-aware analyst chat. Standard in Enterprise tier and above.' }
          ]
        },
        {
          id: 'm6l4',
          title: 'The Three SecOps Agents',
          diagram: 'SecOpsAgents',
          slides: [
            { heading: 'Triage and Investigation Agent (GA)', body: 'Currently GA in Google SecOps. Per Google, the agent has processed over 5M alerts in its first year and reduced typical 30-minute analyses to roughly 60 seconds on routine cases. This is the agent with the strongest production track record — useful as a lead reference, but pair it with customer-specific stats from your own deployments when you have them.' },
            { heading: 'Threat Hunting Agent (Private Preview)', body: 'Proactive hunting for novel attack patterns and stealthy adversary behaviors that bypass traditional defenses. Generates hypotheses, runs queries against UDM, follows leads, and reports findings. Announced at Cloud Next 26. Positioning angle: shifts hunting from a senior-analyst-only activity to something the broader team can drive.' },
            { heading: 'Detection Engineering Agent (Private Preview)', body: 'Generates and evaluates detection rules. Includes new MCP tools: generate_threat_detection_opportunity, generate_rules, generate_synthetic_events, evaluate_rule_coverage. Currently restricted to private preview. Positioning angle: addresses the chronic detection-engineering bottleneck most SOCs hit at scale.' },
            { heading: 'Why the Three Together Matter', body: 'These agents collectively cover triage (reactive), hunting (proactive), and detection engineering (preventive) — the three core SOC functions. Most competitors have shipped one agent; Google has shipped or previewed three with distinct charters. That is the differentiated story, not any single statistic.' }
          ]
        },
        {
          id: 'm6l5',
          title: 'GTI, SCC, and Wiz',
          slides: [
            { heading: 'Google Threat Intelligence (GTI)', body: 'The post-acquisition unification of Mandiant threat intelligence and VirusTotal. Provides actor profiles, campaign tracking, IOC enrichment, vulnerability intelligence (with MVE IDs), and dark web monitoring. New dark web intel feature analyzes millions of daily external events; Google reports 98% accuracy in internal tests.' },
            { heading: 'Mandiant Services Layer', body: 'On top of GTI products, Mandiant Consulting and Managed Defense remain key — Incident Response, Red Team, and 24/7 managed detection backed by frontline expertise. This is a Google differentiator most pure-play platforms cannot match.' },
            { heading: 'Security Command Center (SCC)', body: 'Google native CNAPP — posture management, threat detection across GCP, vulnerability management. Now powering the Agent Security Dashboard, which unifies threat detection and risk analysis for the agent fleet within GCP environments.' },
            { heading: 'Wiz: Multi-Cloud Reach', body: 'Wiz (acquired 2025) extends Google cloud security across AWS, Azure, GCP, and Oracle Cloud — addressing the multi-cloud reality most enterprises live in. Strong CNAPP posture and risk graph capabilities. Positioning angle: this is how Google answers "what about our AWS workloads?" without conceding the deal.' },
            { heading: 'Wiz AI-Application Protection Platform (AI-APP)', body: 'The AI-specific layer of Wiz. Embeds AI security directly into developer workflows: real-time vulnerability scanning, AI-generated code security, dynamic AI Bill of Materials (AIBOM), automated remediation. Integrates with Lovable, IDEs, and version control. This is a relatively new capability area where Google has a meaningful lead — most competitors do not have a comparable AI-specific application security story.' },
            { heading: 'Agent-Specific Controls', body: 'Agent Threat Detection (reverse shells, malicious IPs), Agent Anomaly Detection (LLM-as-judge for unusual reasoning patterns), Agent Compliance, Agent Policy. These plug into the Agent Security Dashboard and form the foundation of the agentic security pitch.' }
          ]
        },
        {
          id: 'm6l6',
          title: 'Competitive Landscape',
          diagram: 'CompetitiveQuadrant',
          slides: [
            { heading: 'Microsoft Security Copilot', body: 'Tightest integration with Microsoft 365 and Sentinel. Strongest position in Microsoft-shop accounts. Where Google wins: deeper threat intelligence (Mandiant), stronger SIEM data engine (UDM, retention economics), and arguably stronger underlying AI platform for agentic work. Where Microsoft wins: M365 integration depth and existing footprint.' },
            { heading: 'CrowdStrike Charlotte AI', body: 'Strong endpoint-anchored AI assistant deeply tied to Falcon. Wins on EDR-led conversations. Google counter: Google SecOps as the broader analytics platform, plus Mandiant TI depth and Google own AI platform investments.' },
            { heading: 'Palo Alto Precision AI', body: 'Cross-portfolio AI brand spanning XSIAM, Prisma, and Cortex. Strongest position in Palo-standardized accounts. Google counter: open data model and ecosystem-friendlier integration, multi-vendor by design rather than portfolio-locked.' },
            { heading: 'When to Concede vs Compete', body: 'Concede gracefully on entrenched M365 / Falcon / Cortex shops where the customer values consolidation over capability. Compete hard where the customer values: best-of-breed TI, scale and retention economics, multi-cloud reach, or where they are building agentic security futures and value Google AI platform depth.' }
          ]
        },
        {
          id: 'm6l7',
          title: 'Talk Tracks',
          slides: [
            { heading: 'Why Google over Microsoft', body: 'Suggested framing: "Microsoft is excellent if your security center of gravity is M365 and your data lives in Sentinel. Where Google differentiates: Mandiant frontline threat intelligence is the data the rest of the industry consumes. Google SecOps offers 12 months of hot retention at predictable economics, and Google has shipped or previewed three production SecOps agents covering triage, hunting, and detection engineering."' },
            { heading: 'Is this just AI hype', body: 'Suggested framing: "Fair pushback. The Triage and Investigation agent is in production today — Google reports 5M+ alerts processed in its first year and 30-minute analyses reduced to about a minute. That is a public reference point, not aspirational. Happy to set up a customer reference call to validate against a similar environment."' },
            { heading: 'What about lock-in', body: 'Suggested framing: "Google SecOps uses an open Unified Data Model, supports MCP for agent integrations, and Wiz extends multi-cloud reach. Compared to portfolio-lock plays from competitors, Google is investing in open protocols — A2A is open, MCP is open, agent identity is SPIFFE-based. Lock-in is a fair concern; the architecture specifically addresses it."' },
            { heading: 'Why Talk Tracks Are Suggested, Not Scripted', body: 'Adapt these to your voice and to what you actually know about the prospect. Verbatim recital sounds rehearsed. The point is to internalize the structure: acknowledge the competitor strength, name the Google differentiator with evidence, offer a next step. Same skeleton works for any competitive conversation.' }
          ]
        }
      ],
      quiz: [
        { q: "What did Vertex AI evolve into at Cloud Next '26?", options: ['Vertex AI 2.0', 'Gemini Enterprise Agent Platform', 'Google AI Studio', 'Agent Cloud'], correct: 1 },
        { q: 'Which Google SecOps agent is currently GA (not just preview)?', options: ['Threat Hunting Agent', 'Detection Engineering Agent', 'Triage & Investigation Agent', 'None — all are preview'], correct: 2 },
        { q: 'Google Threat Intelligence is the unification of:', options: ['Chronicle and Siemplify', 'Mandiant and VirusTotal', 'Wiz and SCC', 'Gemini and Vertex'], correct: 1 },
        { q: 'A prospect heavily standardized on M365 and Sentinel asks why Google. Best response:', options: ['Microsoft is bad', 'Lead with Mandiant TI depth, SecOps retention economics, and agentic security leadership — concede the M365 integration ground', 'Refuse to discuss competitors', 'Promise to match every Microsoft feature'], correct: 1 }
      ]
    },
    {
      id: 'm7',
      title: 'Selling AI-Enabled Security + Reference',
      icon: '🎯',
      summary: 'Discovery, demos, objections, ROI, compliance, and the SE prompting playbook.',
      lessons: [
        {
          id: 'm7l1',
          title: 'Discovery Question Funnel',
          diagram: 'DiscoveryFunnel',
          slides: [
            { heading: 'Volume and Pain Discovery', body: 'How many alerts per day reach a Tier-1 analyst? What percentage close as false positive? How long is your current MTTR? These quantify the addressable problem and set up clear before/after framing.' },
            { heading: 'Workflow Discovery', body: 'Walk me through what your analyst does between alert-fired and case-closed for a routine phishing alert. This surfaces the specific automation opportunities — and prevents you from pitching capabilities they do not need.' },
            { heading: 'Architecture Discovery', body: 'How are you thinking about MCP and agent identity? Do you have an inventory of AI systems and their privileges? These differentiate you from competitors who only talk products and not architecture.' },
            { heading: 'Skeptic Discovery', body: 'What is a previous AI/ML investment that did not deliver, and what went wrong? This builds trust faster than pitching ever does, and tells you exactly which objections to preempt.' }
          ]
        },
        {
          id: 'm7l2',
          title: 'Demoing Without Overpromising',
          slides: [
            { heading: 'The Three Don ts', body: '(1) Do not demo on cherry-picked golden alerts — use one the customer brings. (2) Do not hide latency — show real response times. (3) Do not demo agent autonomy without showing the human-approval gates.' },
            { heading: 'The Honest Demo Script', body: 'Show the agent doing real work. Show where it asks for human input. Show where it makes a wrong call and how you catch it. Counterintuitively, demoing failure modes builds more trust than perfect runs.' }
          ]
        },
        {
          id: 'm7l3',
          title: 'Objection Handling',
          slides: [
            { heading: 'It is just regex with marketing', body: 'Fair skepticism. Here is the difference: our detection layer uses classical ML for pattern recognition, but the agent layer above it is genuinely new — it iterates, pivots across systems, maintains investigation state. I can show you a side-by-side of the same alert handled by rule-based automation vs. our agent.' },
            { heading: 'What about hallucinations', body: 'Real concern. Our mitigation stack: every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and irreversible actions require analyst confirmation. The agent is not replacing judgment — it is removing the work that does not need judgment.' },
            { heading: 'Our data is too sensitive for AI', body: 'That is why our deployment uses VPC Service Controls, customer-managed encryption keys, and data residency controls. Customer prompts and data are not used to train base models. The data stays in your tenant. Happy to walk through the architecture with your security team.' },
            { heading: 'We Tried AI in Security and It Failed', body: 'Best response: ask what specifically went wrong, then listen. Most failures trace to bad data quality, unclear success metrics, no human-in-the-loop design, or pilot-without-production-path. Address the actual cause from the prior failure, not generic capability claims.' }
          ]
        },
        {
          id: 'm7l4',
          title: 'ROI and Compliance Framing',
          slides: [
            { heading: 'ROI Anchors', body: 'Time-per-alert reduction (often 50-90% on routine alerts), Tier-1 analyst capacity expansion, MTTR improvement, dwell-time reduction. Always tie to the customer own metrics, not vendor benchmarks. The Forrester study citing 240% ROI is a useful anchor for Google SecOps but should never be the lead number.' },
            { heading: 'EU AI Act', body: 'Risk-based framework. Most security AI use cases sit in limited risk or high risk categories. Key obligations: risk management systems, data governance, transparency, human oversight, robustness, and conformity assessment for high-risk systems. SEs should be able to discuss this at a basic level.' },
            { heading: 'NIST AI RMF', body: 'Voluntary U.S. framework — Govern, Map, Measure, Manage. Increasingly cited in U.S. enterprise procurement and federal contracts. Pair with NIST CSF references for security-specific contexts.' },
            { heading: 'AIBOM and Agent Inventory', body: 'Emerging requirement: organizations must inventory AI systems, agent privileges, MCP connections, and training data lineage. Google Agent Registry, AIBOM (via Wiz), and Agent Security dashboard are concrete answers — useful in compliance-driven deals.' }
          ]
        },
        {
          id: 'm7l5',
          title: 'SE Prompting Playbook',
          slides: [
            { heading: 'For RFP Responses', body: 'Template: "You are a senior security architect responding to RFP requirements. For each requirement below, provide: (1) direct answer (yes / partial / no / n-a), (2) capability description in customer-facing language, (3) specific product features that satisfy the requirement, (4) any caveats. Format as a table. Source material: [paste capability docs]. Requirements: [paste requirements list]."' },
            { heading: 'For Discovery Prep', body: 'Template: "You are preparing me for a discovery call with [company name]. Based on this LinkedIn or public profile or recent news [paste source material], generate: (1) likely current security stack, (2) probable AI maturity level, (3) the three highest-probability pain points, (4) five discovery questions tailored to surface them, (5) two likely objections to anticipate."' },
            { heading: 'For Demo Scripting', body: 'Template: "You are scripting a 20-minute demo for a [persona, e.g. SOC Director] at a [vertical, e.g. financial services] company with these stated priorities: [list priorities]. Build a demo flow with: (1) opening 2-minute context-setting, (2) three demo segments tied to their priorities, (3) explicit moments to pause and confirm relevance, (4) a closing summary that ties capabilities back to their stated outcomes."' },
            { heading: 'For Objection Prep', body: 'Template: "You are an extremely skeptical CISO. Read this [product or capability description, paste here] and generate the 10 toughest, most pointed objections you would raise — including the ones most reps fumble. For each objection, include: (a) the objection itself, (b) one sentence on why this objection is hard, (c) the strongest one-sentence response."' }
          ]
        }
      ],
      quiz: [
        { q: 'Which discovery question best differentiates an AI-literate SE from a product-pitcher?', options: ['What is your budget?', 'How are you thinking about MCP and agent identity?', 'How many users?', 'What color is your logo?'], correct: 1 },
        { q: 'A prospect says "we tried AI in security and it failed." Best first response:', options: ['Pitch your product harder', 'Ask what specifically went wrong, then listen', 'Tell them they tried the wrong vendor', 'Change the subject'], correct: 1 },
        { q: 'Under the EU AI Act, most enterprise security AI use cases sit in:', options: ['Prohibited', 'Limited risk or high risk categories', 'Unregulated', 'Fully exempt'], correct: 1 },
        { q: 'When demoing an agent, the most trust-building move is to:', options: ['Hide failure cases', 'Show real response times, including failure modes and human-approval gates', 'Use only golden alerts', 'Demo for as long as possible'], correct: 1 }
      ]
    }
  ],
  glossary: [
    { term: 'A2A (Agent2Agent Protocol)', def: 'Open protocol for agent-to-agent discovery and communication, championed by Google. Companion to MCP — A2A is the network layer between agents, MCP is the bus from agent to tools.' },
    { term: 'ADK (Agent Development Kit)', def: 'Google open framework for building production AI agents. Pairs with Agent Engine for managed runtime.' },
    { term: 'Agent', def: 'AI system that pursues a goal with autonomy, takes actions via tools, and iterates based on outcomes — distinguished from a single-prompt LLM call.' },
    { term: 'Agent Gateway', def: 'Google management plane for fleets of agents — policy enforcement, agent-to-tool and agent-to-agent governance.' },
    { term: 'Agent Registry', def: 'Central catalog of all internal agents, tools, and skills in Gemini Enterprise Agent Platform.' },
    { term: 'AIBOM', def: 'AI Bill of Materials — inventory of models, training data, agents, and MCP connections in an AI system. Emerging compliance and security artifact.' },
    { term: 'BEC (Business Email Compromise)', def: 'Email-based fraud where an attacker impersonates an executive, vendor, or trusted party to trick the target into wiring funds, sharing credentials, or releasing sensitive data. Long a primary use case for ML-based email security.' },
    { term: 'Context Window', def: 'Maximum number of tokens a model can process in one call (input + output). Modern frontier models offer 200K to 2M+ tokens.' },
    { term: 'EDR (Endpoint Detection and Response)', def: 'Security tooling focused on the endpoint — process activity, file behavior, command-line forensics. Heavy users of classical ML for behavioral classification.' },
    { term: 'Embedding', def: 'Numerical vector representation of content where semantically similar items cluster in high-dimensional space. Foundation of vector search and RAG.' },
    { term: 'Fine-Tuning', def: 'Further training a base model on domain examples to alter its behavior. Compared to prompting: more expensive, slower to update, behaviorally consistent.' },
    { term: 'Gemini Enterprise Agent Platform', def: "Google unified platform for building, scaling, governing, and optimizing AI agents — the evolution of Vertex AI announced at Cloud Next '26." },
    { term: 'Google SecOps', def: 'Google cloud-native security operations platform — unified SIEM and SOAR, formerly Chronicle. Includes integrated Gemini AI features and Mandiant threat intelligence.' },
    { term: 'GTI (Google Threat Intelligence)', def: 'Unified threat intelligence offering combining Mandiant TI and VirusTotal capabilities.' },
    { term: 'Hallucination', def: 'Fluent, confident model output not grounded in reality. Mitigated through grounding (RAG), citations, constrained outputs, and human-in-the-loop checkpoints.' },
    { term: 'HITL (Human-in-the-Loop)', def: 'Design pattern where humans approve or oversee AI actions, especially at consequential or irreversible decision points.' },
    { term: 'ITDR (Identity Threat Detection and Response)', def: 'Security category focused on detecting attacks against identity systems — credential theft, session hijacking, MFA fatigue, lateral movement via identity. Increasingly AI-driven.' },
    { term: 'LLM (Large Language Model)', def: 'Neural network trained on massive text corpora to predict tokens. The substrate of modern generative AI.' },
    { term: 'Mandiant', def: 'Frontline-incident-response firm acquired by Google; the source of Mandiant Consulting, Managed Defense, and the bulk of Google threat intelligence depth.' },
    { term: 'MCP (Model Context Protocol)', def: 'Open standard (originated at Anthropic, broadly adopted) for AI hosts to discover and call tools, resources, and prompts via a uniform interface.' },
    { term: 'Model Armor', def: 'Google built-in screening for malicious or unsafe AI inputs/outputs in Gemini Enterprise.' },
    { term: 'Model Card', def: 'A short, structured document describing a model: intended use, training data summary, evaluation results, limitations, and known failure modes. The standard artifact for model accountability and procurement review.' },
    { term: 'NHI (Non-Human Identity)', def: 'Identities for service accounts, API keys, machines. Distinguished from agent identities, which are autonomous and goal-oriented.' },
    { term: 'Prompt Injection', def: 'Malicious instructions embedded in inputs (often via retrieved data) that override intended model behavior. Indirect prompt injection is the dominant practical threat.' },
    { term: 'RAG (Retrieval-Augmented Generation)', def: 'Pattern of retrieving relevant content from a private knowledge base via vector search and feeding it into the LLM prompt at query time. Default architecture for grounded enterprise AI.' },
    { term: 'SCC (Security Command Center)', def: 'Google Cloud native CNAPP — cloud security posture, threat detection, vulnerability management. Now also powers the Agent Security Dashboard.' },
    { term: 'SIEM (Security Information and Event Management)', def: 'Centralized platform for collecting, normalizing, and analyzing security telemetry. Google SecOps is a cloud-native SIEM with integrated SOAR.' },
    { term: 'SOAR (Security Orchestration, Automation, and Response)', def: 'The playbook-and-automation layer that orchestrates response actions across security tools. The SOAR half of Google SecOps was previously known as Siemplify.' },
    { term: 'SPIFFE', def: 'Secure Production Identity Framework For Everyone — open standard for workload identity. Used as the basis for Google agent identity model.' },
    { term: 'Token', def: 'Unit of input or output processed by an AI model. For text, typically 3-4 characters of English. Images are tokenized as patches, video as frames, audio as discrete sound units. Pricing, throughput, and context limits are all measured in tokens.' },
    { term: 'UDM (Unified Data Model)', def: 'Google SecOps normalized schema for security telemetry. Search, detection rules, and analytics operate over UDM.' },
    { term: 'UEBA (User and Entity Behavior Analytics)', def: 'Detection technique that builds behavioral baselines for users and machine entities, then flags deviations. Predominantly unsupervised ML. A staple of modern SIEM platforms.' },
    { term: 'XDR (Extended Detection and Response)', def: 'Security platform category that unifies detection across endpoint, network, identity, and cloud. The "extended" generally means EDR plus other telemetry sources, with cross-domain correlation.' },
    { term: 'YARA-L 2.0', def: 'Detection rule language used by Google SecOps. Now supports multi-stage queries for sophisticated detection logic.' }
  ]
};

// M5: AI attack acceleration
const AIAttackAccelerationDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="AI shifts the attacker cost curve — capabilities once requiring skilled operators become commodity">
    <text x="400" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where AI Accelerates Attackers</text>
    {[
      { x: 30, title: 'Phishing & Social Eng.', items: ['Personalized at scale', 'Multi-language fluency', 'Voice cloning (vishing)', 'Real-time deepfake video'], color: COLORS.red },
      { x: 280, title: 'Malware & Exploits', items: ['Polymorphic generation', 'Obfuscation variants', 'AI-assisted exploit dev', 'Faster patch-to-exploit'], color: '#dc2626' },
      { x: 530, title: 'Reconnaissance', items: ['Automated OSINT', 'Victim profiling', 'Attack chain planning', 'Target prioritization'], color: '#b91c1c' }
    ].map((cat, i) => (
      <g key={i}>
        <rect x={cat.x} y="60" width="240" height="320" rx="10" fill={COLORS.white} stroke={cat.color} strokeWidth="2" />
        <rect x={cat.x} y="60" width="240" height="50" rx="10" fill={cat.color} />
        <text x={cat.x + 120} y="92" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">{cat.title}</text>
        {cat.items.map((it, j) => (
          <g key={j}>
            <circle cx={cat.x + 25} cy={145 + j * 45} r="3" fill={cat.color} />
            <text x={cat.x + 38} y={150 + j * 45} fill={COLORS.slate700} fontSize="12">{it}</text>
          </g>
        ))}
      </g>
    ))}
    <text x="400" y="405" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The volume × quality curve has shifted permanently — defender automation is now table stakes</text>
  </DiagramFrame>
);

// M2: Hallucination mitigation stack
const HallucinationMitigationDiagram = () => {
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

// M4: EDR behavioral analysis
const EDRBehavioralDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="EDR pattern: classical ML classifies behavior, GenAI translates findings into analyst narratives">
    <rect x="40" y="40" width="720" height="55" rx="8" fill={COLORS.amber} />
    <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">GenAI Layer</text>
    <text x="400" y="83" textAnchor="middle" fill={COLORS.white} fontSize="11">Incident summary · Root cause narrative · Response recommendations</text>
    <rect x="40" y="115" width="720" height="80" rx="8" fill={COLORS.blue} />
    <text x="400" y="142" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Classical ML Detection Layer</text>
    <text x="400" y="162" textAnchor="middle" fill={COLORS.white} fontSize="11">Process tree analysis · Behavioral clustering · DL malware classifiers</text>
    <text x="400" y="180" textAnchor="middle" fill={COLORS.white} fontSize="11">Ransomware behavior detection · Command-line argument analysis</text>
    <line x1="400" y1="195" x2="400" y2="225" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowEDR)" />
    <defs>
      <marker id="arrowEDR" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    {[
      { x: 60, label: 'Process Tree', desc: 'Parent/child chains' },
      { x: 240, label: 'File Behavior', desc: 'Write/exec patterns' },
      { x: 420, label: 'Network', desc: 'C2 beaconing' },
      { x: 600, label: 'Memory', desc: 'Injection, hooking' }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="230" width="160" height="70" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
        <text x={s.x + 80} y="260" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{s.label}</text>
        <text x={s.x + 80} y="280" textAnchor="middle" fill={COLORS.slate500} fontSize="10">{s.desc}</text>
      </g>
    ))}
    <rect x="40" y="330" width="720" height="55" rx="8" fill={COLORS.slate700} />
    <text x="400" y="357" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Endpoint Telemetry</text>
    <text x="400" y="375" textAnchor="middle" fill={COLORS.white} fontSize="11">Kernel events · Syscalls · File ops · Network · Memory state</text>
    <text x="400" y="408" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Same two-layer pattern (classical ML + GenAI) recurs across the modern security stack</text>
  </DiagramFrame>
);

// M4: Email and Identity AI
const EmailIdentityDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="Email and identity AI rely on the same techniques — behavioral baselines, graph analysis, and increasingly GenAI for context">
    <text x="200" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Email Security</text>
    <text x="600" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Identity Security (ITDR)</text>
    <line x1="400" y1="50" x2="400" y2="420" stroke={COLORS.slate300} strokeWidth="1" strokeDasharray="4 3" />
    {[
      { x: 50, y: 70, label: 'Writing Style ML', desc: 'Detects voice impersonation', color: COLORS.blue },
      { x: 50, y: 160, label: 'Relationship Graphs', desc: 'Maps normal sender patterns', color: COLORS.blue },
      { x: 50, y: 250, label: 'Lookalike Domains', desc: 'Typosquat detection', color: COLORS.blue },
      { x: 50, y: 340, label: 'GenAI Payload Analysis', desc: 'Reads landing pages for harvesting', color: COLORS.amber }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y={s.y} width="300" height="70" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
        <rect x={s.x} y={s.y} width="8" height="70" fill={s.color} />
        <text x={s.x + 25} y={s.y + 28} fill={COLORS.slate900} fontSize="13" fontWeight="700">{s.label}</text>
        <text x={s.x + 25} y={s.y + 50} fill={COLORS.slate500} fontSize="11">{s.desc}</text>
      </g>
    ))}
    {[
      { x: 450, y: 70, label: 'Behavioral Baselines', desc: 'Per-user normal patterns', color: COLORS.cyan },
      { x: 450, y: 160, label: 'Peer Group Analysis', desc: 'Compares to similar users', color: COLORS.cyan },
      { x: 450, y: 250, label: 'Lateral Movement', desc: 'Auth chain anomalies', color: COLORS.cyan },
      { x: 450, y: 340, label: 'NHI Coverage', desc: 'Service accounts, API keys, agents', color: COLORS.amber }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y={s.y} width="300" height="70" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
        <rect x={s.x} y={s.y} width="8" height="70" fill={s.color} />
        <text x={s.x + 25} y={s.y + 28} fill={COLORS.slate900} fontSize="13" fontWeight="700">{s.label}</text>
        <text x={s.x + 25} y={s.y + 50} fill={COLORS.slate500} fontSize="11">{s.desc}</text>
      </g>
    ))}
  </DiagramFrame>
);

// Diagram registry
const DIAGRAM_REGISTRY = {
  NestedAI: NestedAIDiagram,
  LearningParadigms: LearningParadigmsDiagram,
  NeuralNet: NeuralNetDiagram,
  Tokenization: TokenizationDiagram,
  Embeddings: EmbeddingsDiagram,
  RAGFlow: RAGFlowDiagram,
  FTvsPrompting: FTvsPromptingDiagram,
  HallucinationMitigation: HallucinationMitigationDiagram,
  AIStack: AIStackDiagram,
  MCP: MCPDiagram,
  AgentTopology: AgentTopologyDiagram,
  AutonomyLevels: AutonomyLevelsDiagram,
  A2AvsMCP: A2AvsMCPDiagram,
  SOCArch: SOCArchDiagram,
  EDRBehavioral: EDRBehavioralDiagram,
  EmailIdentity: EmailIdentityDiagram,
  AIAttackAcceleration: AIAttackAccelerationDiagram,
  PromptInjection: PromptInjectionDiagram,
  AgentAttackSurface: AgentAttackSurfaceDiagram,
  GoogleStack: GoogleStackDiagram,
  GoogleSecOps: GoogleSecOpsDiagram,
  SecOpsAgents: SecOpsAgentsDiagram,
  CompetitiveQuadrant: CompetitiveQuadrantDiagram,
  DiscoveryFunnel: DiscoveryFunnelDiagram
};

// ============================================================
// STORAGE
// ============================================================

const STORAGE_KEY = 'ai_cybersec_se_progress_v2';

const loadProgress = async () => {
  try {
    const result = await window.storage.get(STORAGE_KEY);
    return result ? JSON.parse(result.value) : { completedLessons: {}, quizScores: {} };
  } catch {
    return { completedLessons: {}, quizScores: {} };
  }
};

const saveProgress = async (progress) => {
  try {
    await window.storage.set(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Save failed:', e);
  }
};

// ============================================================
// COMPONENTS
// ============================================================

const Sidebar = ({ open, setOpen, view, setView, modules, completedLessons, totalLessons, completedCount }) => {
  const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  return (
    <>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
      <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 overflow-y-auto transition-transform duration-200 flex flex-col`}>
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">SE Course · V2</span>
          </div>
          <h1 className="text-lg font-bold leading-tight">AI for Cybersecurity Sales Engineers</h1>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Progress</span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <button onClick={() => { setView({ type: 'home' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <BookOpen className="w-4 h-4" /> Course Home
          </button>

          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Modules</div>

          {modules.map((m, mi) => {
            const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
            const allDone = moduleLessonsCompleted === m.lessons.length;
            return (
              <div key={m.id}>
                <button onClick={() => { setView({ type: 'module', moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-start gap-2 ${view.type === 'module' && view.moduleId === m.id ? 'bg-slate-800' : 'hover:bg-slate-800/60'}`}>
                  <span className="text-base leading-none mt-0.5 w-5 text-center">{m.icon}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium truncate">{mi + 1}. {m.title}</span>
                    <span className="text-xs text-slate-400">{moduleLessonsCompleted}/{m.lessons.length} lessons {allDone && '✓'}</span>
                  </span>
                </button>
                {view.type === 'module' && view.moduleId === m.id && (
                  <div className="ml-3 pl-3 border-l border-slate-700 my-1 space-y-0.5">
                    {m.lessons.map((l, li) => (
                      <button key={l.id} onClick={() => { setView({ type: 'lesson', moduleId: m.id, lessonId: l.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.lessonId === l.id ? 'bg-blue-600/20 text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                        {completedLessons[l.id] ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-3.5 h-3.5 flex-shrink-0" />}
                        <span className="truncate">{li + 1}. {l.title}</span>
                      </button>
                    ))}
                    <button onClick={() => { setView({ type: 'quiz', moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'quiz' && view.moduleId === m.id ? 'bg-amber-600/20 text-amber-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                      <Award className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Module Quiz</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Reference</div>
          <button onClick={() => { setView({ type: 'glossary' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'glossary' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <Search className="w-4 h-4" /> Glossary
          </button>
        </nav>

        <div className="p-3 border-t border-slate-800 text-xs text-slate-500">
          V2 includes architectural diagrams. Content current through early 2026.
        </div>
      </aside>
    </>
  );
};

const HomeView = ({ setView, modules, completedLessons }) => {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> V2 · Google-aligned · 7 modules · ~26 lessons · 18 diagrams
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">{COURSE.title}</h1>
        <p className="text-lg text-slate-600">{COURSE.subtitle}</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-slate-900 mb-2">What you will be able to do</h2>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Explain AI/ML/LLM/agent concepts in customer language without hand-waving</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Whiteboard the AI stack — including MCP, A2A, and agent identity</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Position Google AI and security portfolio against Microsoft, CrowdStrike, and Palo Alto</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Run discovery, demos, and objection handling that distinguish you from product-pitchers</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Use AI tools effectively in your own SE workflows</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-4">Modules</h2>
      <div className="space-y-3">
        {modules.map((m, mi) => {
          const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
          const allDone = moduleLessonsCompleted === m.lessons.length;
          return (
            <button key={m.id} onClick={() => setView({ type: 'module', moduleId: m.id })} className="w-full text-left bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition group">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold ${allDone ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                  {allDone ? '✓' : m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-500">MODULE {mi + 1}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500">{moduleLessonsCompleted}/{m.lessons.length} lessons</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition">{m.title}</h3>
                  <p className="text-sm text-slate-600">{m.summary}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        {completedCount} of {totalLessons} lessons completed
      </div>
    </div>
  );
};

const ModuleView = ({ module, modules, setView, completedLessons, quizScores }) => {
  const moduleIndex = modules.findIndex(m => m.id === module.id);
  const moduleLessonsCompleted = module.lessons.filter(l => completedLessons[l.id]).length;

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'home' })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> Course Home
      </button>

      <div className="mb-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Module {moduleIndex + 1}</span>
        <h1 className="text-3xl font-bold text-slate-900 mt-1 flex items-center gap-3">
          <span className="text-3xl">{module.icon}</span> {module.title}
        </h1>
        <p className="text-slate-600 mt-2">{module.summary}</p>
      </div>

      <div className="space-y-2 mb-6">
        {module.lessons.map((l, li) => (
          <button key={l.id} onClick={() => setView({ type: 'lesson', moduleId: module.id, lessonId: l.id })} className="w-full text-left bg-white border border-slate-200 hover:border-blue-300 rounded-lg p-4 transition flex items-center gap-3 group">
            <div className="flex-shrink-0">
              {completedLessons[l.id] ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-slate-300" />}
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-500">Lesson {li + 1}{l.diagram && ' · includes diagram'}</div>
              <div className="font-medium text-slate-900 group-hover:text-blue-700">{l.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
          </button>
        ))}

        <button onClick={() => setView({ type: 'quiz', moduleId: module.id })} className="w-full text-left bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-400 rounded-lg p-4 transition flex items-center gap-3 group">
          <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xs text-amber-700 font-semibold">MODULE QUIZ</div>
            <div className="font-medium text-slate-900">Test your understanding</div>
          </div>
          {quizScores[module.id] !== undefined && (
            <span className="text-sm font-semibold text-amber-700">{quizScores[module.id]}/{module.quiz.length}</span>
          )}
          <ChevronRight className="w-5 h-5 text-amber-600" />
        </button>
      </div>

      <div className="text-sm text-slate-500 text-center">
        {moduleLessonsCompleted} of {module.lessons.length} lessons completed
      </div>
    </div>
  );
};

const LessonView = ({ module, lesson, modules, setView, completedLessons, markComplete }) => {
  const [slideMode, setSlideMode] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const lessonIdx = module.lessons.findIndex(l => l.id === lesson.id);
  const moduleIdx = modules.findIndex(m => m.id === module.id);
  const isLast = lessonIdx === module.lessons.length - 1;
  const DiagramComponent = lesson.diagram ? DIAGRAM_REGISTRY[lesson.diagram] : null;

  const goNext = () => {
    if (!completedLessons[lesson.id]) markComplete(lesson.id);
    if (isLast) {
      setView({ type: 'quiz', moduleId: module.id });
    } else {
      setView({ type: 'lesson', moduleId: module.id, lessonId: module.lessons[lessonIdx + 1].id });
    }
  };

  const goPrev = () => {
    if (lessonIdx > 0) {
      setView({ type: 'lesson', moduleId: module.id, lessonId: module.lessons[lessonIdx - 1].id });
    } else {
      setView({ type: 'module', moduleId: module.id });
    }
  };

  if (slideMode) {
    const totalSlides = (DiagramComponent ? 1 : 0) + lesson.slides.length;
    const isDiagramSlide = DiagramComponent && slideIdx === 0;
    const contentSlideIdx = DiagramComponent ? slideIdx - 1 : slideIdx;
    const slide = !isDiagramSlide ? lesson.slides[contentSlideIdx] : null;

    return (
      <div className="min-h-full bg-slate-900 text-white flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="text-sm text-slate-400">
            <span className="font-semibold text-blue-400">M{moduleIdx + 1}.{lessonIdx + 1}</span> · {lesson.title}
          </div>
          <button onClick={() => setSlideMode(false)} className="text-sm text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-slate-800">
            <FileText className="w-4 h-4" /> Study Mode
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-4xl w-full">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">Slide {slideIdx + 1} of {totalSlides}</div>
            {isDiagramSlide ? (
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{lesson.title}</h2>
                <div className="bg-white rounded-xl p-4">
                  <DiagramComponent />
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{slide.heading}</h2>
                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">{slide.body}</p>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-slate-800 gap-3">
          <button onClick={() => setSlideIdx(Math.max(0, slideIdx - 1))} disabled={slideIdx === 0} className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 text-sm">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button key={i} onClick={() => setSlideIdx(i)} className={`h-2 rounded-full transition-all ${i === slideIdx ? 'w-8 bg-blue-400' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} />
            ))}
          </div>
          {slideIdx < totalSlides - 1 ? (
            <button onClick={() => setSlideIdx(slideIdx + 1)} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 text-sm font-semibold">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => { setSlideMode(false); goNext(); }} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 text-sm font-semibold">
              Finish Lesson <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'module', moduleId: module.id })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> {module.title}
      </button>

      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex-1">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Module {moduleIdx + 1} · Lesson {lessonIdx + 1}</span>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1">{lesson.title}</h1>
        </div>
        <button onClick={() => { setSlideIdx(0); setSlideMode(true); }} className="flex-shrink-0 px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-sm flex items-center gap-1.5 font-medium">
          <Presentation className="w-4 h-4" /> Slide Mode
        </button>
      </div>

      {DiagramComponent && (
        <div className="mb-6">
          <DiagramComponent />
        </div>
      )}

      <div className="space-y-6 mb-8">
        {lesson.slides.map((s, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{i + 1}</div>
              <h3 className="font-semibold text-slate-900">{s.heading}</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
        <button onClick={goPrev} className="px-4 py-2 text-slate-600 hover:text-slate-900 flex items-center gap-1.5 text-sm">
          <ChevronLeft className="w-4 h-4" /> {lessonIdx === 0 ? 'Module' : 'Previous'}
        </button>
        <button onClick={goNext} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1.5 text-sm font-semibold shadow-sm">
          {isLast ? 'Take Quiz' : 'Next Lesson'} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const QuizView = ({ module, modules, setView, recordQuizScore }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const moduleIdx = modules.findIndex(m => m.id === module.id);

  const score = useMemo(() => module.quiz.filter((q, i) => answers[i] === q.correct).length, [answers, module.quiz]);

  const handleSubmit = () => {
    setSubmitted(true);
    recordQuizScore(module.id, score);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const handleNext = () => {
    if (moduleIdx < modules.length - 1) {
      setView({ type: 'module', moduleId: modules[moduleIdx + 1].id });
    } else {
      setView({ type: 'home' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'module', moduleId: module.id })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> {module.title}
      </button>

      <div className="mb-6">
        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Module {moduleIdx + 1} Quiz</span>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1 flex items-center gap-2">
          <Award className="w-7 h-7 text-amber-500" /> Test Your Understanding
        </h1>
      </div>

      {submitted && (
        <div className={`mb-6 p-5 rounded-xl border-2 ${score === module.quiz.length ? 'bg-emerald-50 border-emerald-200' : score >= module.quiz.length * 0.7 ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'}`}>
          <div className="text-3xl font-bold text-slate-900">{score} / {module.quiz.length}</div>
          <p className="text-slate-700 mt-1">
            {score === module.quiz.length ? 'Perfect score — you have got this module locked in.' : score >= module.quiz.length * 0.7 ? 'Solid work. Review the missed questions and you are set.' : 'Worth another pass through the lessons before moving on.'}
          </p>
        </div>
      )}

      <div className="space-y-6 mb-6">
        {module.quiz.map((q, qi) => (
          <div key={qi} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-semibold text-slate-900 mb-3 flex gap-2">
              <span className="text-blue-600">Q{qi + 1}.</span>
              <span>{q.q}</span>
            </div>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === oi;
                const isCorrect = q.correct === oi;
                let cls = 'w-full text-left p-3 rounded-lg border text-sm transition ';
                if (submitted) {
                  if (isCorrect) cls += 'bg-emerald-50 border-emerald-300 text-emerald-900';
                  else if (isSelected) cls += 'bg-red-50 border-red-300 text-red-900';
                  else cls += 'bg-white border-slate-200 text-slate-600';
                } else {
                  cls += isSelected ? 'bg-blue-50 border-blue-400 text-blue-900' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-700';
                }
                return (
                  <button key={oi} disabled={submitted} onClick={() => setAnswers({ ...answers, [qi]: oi })} className={cls}>
                    <span className="font-mono text-xs text-slate-400 mr-2">{String.fromCharCode(65 + oi)}.</span>
                    {opt}
                    {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 inline ml-2 text-emerald-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
        {!submitted ? (
          <button onClick={handleSubmit} disabled={Object.keys(answers).length < module.quiz.length} className="ml-auto px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold shadow-sm">
            Submit ({Object.keys(answers).length}/{module.quiz.length})
          </button>
        ) : (
          <>
            <button onClick={handleRetry} className="px-4 py-2 text-slate-700 hover:text-slate-900 text-sm">Try Again</button>
            <button onClick={handleNext} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1.5 text-sm font-semibold shadow-sm">
              {moduleIdx < modules.length - 1 ? 'Next Module' : 'Back to Course'} <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const GlossaryView = ({ setView }) => {
  const [search, setSearch] = useState('');
  const filtered = COURSE.glossary.filter(g => g.term.toLowerCase().includes(search.toLowerCase()) || g.def.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'home' })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> Course Home
      </button>
      <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <Search className="w-7 h-7 text-blue-500" /> Glossary
      </h1>
      <p className="text-slate-600 mb-5 text-sm">Quick reference for every term used in the course — keep it open during prospect calls.</p>

      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search terms or definitions..." className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
      </div>

      <div className="space-y-3">
        {filtered.map((g, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="font-semibold text-slate-900">{g.term}</div>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-center text-slate-500 py-8">No matches.</div>}
      </div>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  const [view, setView] = useState({ type: 'home' });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState({});
  const [quizScores, setQuizScores] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadProgress().then(p => {
      setCompletedLessons(p.completedLessons || {});
      setQuizScores(p.quizScores || {});
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) saveProgress({ completedLessons, quizScores });
  }, [completedLessons, quizScores, loaded]);

  const markComplete = (lessonId) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
  };

  const recordQuizScore = (moduleId, score) => {
    setQuizScores(prev => ({ ...prev, [moduleId]: score }));
  };

  const totalLessons = COURSE.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;

  const currentModule = view.moduleId ? COURSE.modules.find(m => m.id === view.moduleId) : null;
  const currentLesson = view.lessonId && currentModule ? currentModule.lessons.find(l => l.id === view.lessonId) : null;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        view={view}
        setView={setView}
        modules={COURSE.modules}
        completedLessons={completedLessons}
        totalLessons={totalLessons}
        completedCount={completedCount}
      />

      <main className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold">AI for Cybersec SEs · V2</span>
          <div className="w-7" />
        </header>

        <div className="flex-1 overflow-y-auto">
          {view.type === 'home' && <HomeView setView={setView} modules={COURSE.modules} completedLessons={completedLessons} />}
          {view.type === 'module' && currentModule && <ModuleView module={currentModule} modules={COURSE.modules} setView={setView} completedLessons={completedLessons} quizScores={quizScores} />}
          {view.type === 'lesson' && currentModule && currentLesson && <LessonView module={currentModule} lesson={currentLesson} modules={COURSE.modules} setView={setView} completedLessons={completedLessons} markComplete={markComplete} />}
          {view.type === 'quiz' && currentModule && <QuizView module={currentModule} modules={COURSE.modules} setView={setView} recordQuizScore={recordQuizScore} />}
          {view.type === 'glossary' && <GlossaryView setView={setView} />}
        </div>
      </main>
    </div>
  );
}