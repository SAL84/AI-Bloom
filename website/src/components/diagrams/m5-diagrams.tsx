import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const GoogleStackDiagram = () => {
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

export const GoogleSecOpsDiagram = () => (
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

export const SecOpsAgentsDiagram = () => {
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

export const CompetitiveQuadrantDiagram = () => (
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

export const DiscoveryFunnelDiagram = () => {
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
