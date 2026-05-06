import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const GoogleAgentInfraDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Google agent infrastructure: build with ADK, govern with Registry + Gateway + Identity, run on Agent Engine">
    {/* Build layer */}
    <rect x="60" y="40" width="680" height="65" rx="8" fill={COLORS.blue} />
    <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Agent Development Kit (ADK)</text>
    <text x="400" y="85" textAnchor="middle" fill={COLORS.white} fontSize="11">Build, test, and compose agents · Skills, Subagents, Hooks · Multi-framework support</text>
    {/* Runtime layer */}
    <rect x="60" y="125" width="680" height="65" rx="8" fill={COLORS.cyan} />
    <text x="400" y="150" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Agent Engine (Managed Runtime)</text>
    <text x="400" y="170" textAnchor="middle" fill={COLORS.white} fontSize="11">Deploy and scale agents · Vertex AI integration · Sessions and Memory Bank</text>
    {/* Governance layer — three boxes */}
    <text x="400" y="215" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="700">Governance Layer</text>
    {[
      { x: 70, label: 'Agent Registry', sub: 'Central catalog of all agents,\ntools, and skills', color: COLORS.amber },
      { x: 295, label: 'Agent Gateway', sub: 'MCP + A2A policy enforcement\nfor all agent connections', color: '#fb923c' },
      { x: 520, label: 'Agent Identity', sub: 'SPIFFE-based per-agent ID\nIAM-first governance', color: COLORS.emerald }
    ].map((g, i) => (
      <g key={i}>
        <rect x={g.x} y="225" width="210" height="80" rx="8" fill={COLORS.white} stroke={g.color} strokeWidth="2" />
        <rect x={g.x} y="225" width="210" height="32" rx="8" fill={g.color} />
        <text x={g.x + 105} y="247" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{g.label}</text>
        {g.sub.split('\n').map((line, j) => (
          <text key={j} x={g.x + 105} y={272 + j * 16} textAnchor="middle" fill={COLORS.slate600} fontSize="10">{line}</text>
        ))}
      </g>
    ))}
    {/* Security control layer */}
    <rect x="60" y="325" width="680" height="55" rx="8" fill={COLORS.slate700} />
    <text x="400" y="348" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Security Controls</text>
    <text x="400" y="366" textAnchor="middle" fill={COLORS.white} fontSize="11">Model Armor (prompt injection + DLP) · Cloud Logging + Trace (immutable audit) · VPC-SC · CMEK</text>
    <text x="400" y="400" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Positioning: Agent Gateway is the hook infrastructure that makes the entire fleet governable and auditable</text>
  </DiagramFrame>
);

export const GTISCCWizDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="Three distinct moats — GTI for threat context, SCC for cloud posture, Wiz for workload and app security">
    {[
      {
        x: 50, color: COLORS.blue, label: 'Google Threat Intelligence',
        badge: 'GTI',
        items: ['Mandiant frontline research', 'VirusTotal global signal', 'Actor profiles + TTPs', 'Campaign tracking', 'IOC enrichment', 'Dark web intel'],
        pitch: 'The deepest TI signal in the industry'
      },
      {
        x: 295, color: COLORS.cyan, label: 'Security Command Center',
        badge: 'SCC',
        items: ['Cloud asset inventory', 'Misconfig detection', 'Vulnerability prioritization', 'Risk scoring + context', 'Multi-cloud coverage', 'CIEM (cloud IAM)'],
        pitch: 'Cloud-native CSPM + CIEM posture'
      },
      {
        x: 540, color: COLORS.amber, label: 'Wiz',
        badge: 'WIZ',
        items: ['Agentless workload scanning', 'IaC security (shift-left)', 'Container + K8s risks', 'Data security posture', 'AppSec: SAST/SCA', 'Developer workflow integration'],
        pitch: 'From build pipeline to runtime'
      }
    ].map((p, i) => (
      <g key={i}>
        <rect x={p.x} y="30" width="235" height="330" rx="10" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
        <rect x={p.x} y="30" width="235" height="60" rx="10" fill={p.color} />
        <text x={p.x + 118} y="55" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{p.badge}</text>
        <text x={p.x + 118} y="75" textAnchor="middle" fill={COLORS.white} fontSize="11">{p.label}</text>
        {p.items.map((it, j) => (
          <g key={j}>
            <circle cx={p.x + 22} cy={115 + j * 32} r="3" fill={p.color} />
            <text x={p.x + 35} y={120 + j * 32} fill={COLORS.slate700} fontSize="11">{it}</text>
          </g>
        ))}
        <rect x={p.x + 10} y="325" width="215" height="30" rx="6" fill={p.color} opacity="0.12" />
        <text x={p.x + 118} y="344" textAnchor="middle" fill={p.color} fontSize="10" fontWeight="700">{p.pitch}</text>
      </g>
    ))}
    <text x="400" y="385" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Together: intelligence (GTI) + posture (SCC) + workloads (Wiz) = full-stack cloud security story</text>
  </DiagramFrame>
);

export const AgenticDefenseDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Open Security Platform: Google agents + MCP servers + partner ecosystem in one governed control plane">
    <text x="400" y="28" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Agentic Defense Platform</text>
    {/* Center: Agent Orchestration */}
    <rect x="265" y="55" width="270" height="70" rx="10" fill={COLORS.blue} />
    <text x="400" y="83" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Agent Orchestration</text>
    <text x="400" y="103" textAnchor="middle" fill={COLORS.white} fontSize="11">Triage · Hunting · Detection Eng · Remediation</text>
    {/* MCP bus */}
    <rect x="140" y="155" width="520" height="45" rx="8" fill={COLORS.cyan} opacity="0.85" />
    <text x="400" y="183" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">MCP Server Bus · Agent Gateway (policy enforcement)</text>
    {/* Partner + Google tools */}
    {[
      { x: 50, y: 230, label: 'Google SecOps MCP', color: COLORS.blue },
      { x: 230, y: 230, label: 'GTI MCP Server', color: COLORS.blue },
      { x: 410, y: 230, label: 'SCC + Wiz MCP', color: COLORS.amber },
      { x: 590, y: 230, label: 'Partner Tool MCP', color: COLORS.slate500 }
    ].map((t, i) => (
      <g key={i}>
        <line x1="400" y1="200" x2={t.x + 90} y2={t.y} stroke={t.color} strokeWidth="1.5" strokeDasharray="3 2" />
        <rect x={t.x} y={t.y} width="180" height="50" rx="8" fill={COLORS.white} stroke={t.color} strokeWidth="2" />
        <text x={t.x + 90} y={t.y + 30} textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="600">{t.label}</text>
      </g>
    ))}
    {/* Identity + Audit */}
    <rect x="140" y="310" width="240" height="50" rx="8" fill={COLORS.slate700} />
    <text x="260" y="332" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Agent Identity (SPIFFE)</text>
    <text x="260" y="350" textAnchor="middle" fill={COLORS.white} fontSize="10">Every action attributable + auditable</text>
    <rect x="420" y="310" width="240" height="50" rx="8" fill={COLORS.slate700} />
    <text x="540" y="332" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Model Armor + Cloud Trace</text>
    <text x="540" y="350" textAnchor="middle" fill={COLORS.white} fontSize="10">Injection defense + immutable audit log</text>
    <text x="400" y="400" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Open platform: partners ship MCP servers, Google governs the bus — not a closed ecosystem</text>
  </DiagramFrame>
);

export const TalkTracksDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Match the talk track to the buyer and meeting length — same facts, different frames">
    {[
      {
        x: 50, color: COLORS.blue, audience: 'CISO', time: '15 min executive brief',
        opener: '"What is your biggest AI risk today?"',
        beats: ['Trust prerequisites (training data, isolation, residency)', 'Four-agent SOC lifecycle coverage', 'Mandiant TI depth vs. competitors', 'Proof: 5M+ alerts, 60-second triage'],
        close: 'Offer: architecture review + compliance mapping'
      },
      {
        x: 295, color: COLORS.cyan, audience: 'Security Architect', time: '45 min technical eval',
        opener: '"Walk me through your current agent identity posture."',
        beats: ['MCP + A2A protocol deep-dive', 'Agent Registry / Gateway as control plane', 'SPIFFE-based identity vs. NHIs', 'UDM schema + detection authoring'],
        close: 'Offer: hands-on ADK lab + architecture diagram'
      },
      {
        x: 540, color: COLORS.amber, audience: 'SOC Manager', time: 'POC kickoff',
        opener: '"How many Tier-1 alerts go unreviewed daily?"',
        beats: ['Phase 1→3 autonomy progression', 'Triage agent GA track record', 'Analyst workflow before/after', 'Rollback: shrink autonomy at any time'],
        close: 'Offer: 30-day pilot with real alert data'
      }
    ].map((t, i) => (
      <g key={i}>
        <rect x={t.x} y="30" width="235" height="360" rx="10" fill={COLORS.white} stroke={t.color} strokeWidth="2" />
        <rect x={t.x} y="30" width="235" height="55" rx="10" fill={t.color} />
        <text x={t.x + 118} y="53" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{t.audience}</text>
        <text x={t.x + 118} y="73" textAnchor="middle" fill={COLORS.white} fontSize="10">{t.time}</text>
        <text x={t.x + 118} y="105" textAnchor="middle" fill={COLORS.slate600} fontSize="10" fontStyle="italic">{t.opener}</text>
        <text x={t.x + 12} y="130" fill={COLORS.slate500} fontSize="10" fontWeight="700">KEY BEATS</text>
        {t.beats.map((b, j) => (
          <g key={j}>
            <circle cx={t.x + 22} cy={150 + j * 38} r="3" fill={t.color} />
            <text x={t.x + 35} y={155 + j * 38} fill={COLORS.slate700} fontSize="10">{b}</text>
          </g>
        ))}
        <line x1={t.x + 10} y1="318" x2={t.x + 225} y2="318" stroke={COLORS.slate200} />
        <text x={t.x + 12} y="335" fill={COLORS.slate500} fontSize="10" fontWeight="700">CLOSE</text>
        <text x={t.x + 12} y="353" fill={COLORS.slate700} fontSize="10">{t.close}</text>
      </g>
    ))}
    <text x="400" y="410" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Rule: open with a question, not a slide — the question surfaces which track fits</text>
  </DiagramFrame>
);
