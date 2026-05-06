import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const AIStackDiagram = () => {
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

export const MCPDiagram = () => (
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

export const AgentTopologyDiagram = () => (
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

export const AutonomyLevelsDiagram = () => {
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

export const A2AvsMCPDiagram = () => (
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
