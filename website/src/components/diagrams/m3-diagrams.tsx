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

export const SkillsPluginsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="Plugin → MCP → Skill: the evolution from proprietary chaos to governed, self-describing capabilities">
    {/* Three columns: Plugin era, MCP layer, Skill layer */}
    {/* Column headers */}
    <rect x="40" y="20" width="220" height="36" rx="6" fill={COLORS.slate400} />
    <text x="150" y="44" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Plugin Era (2023)</text>
    <rect x="295" y="20" width="210" height="36" rx="6" fill={COLORS.blue} />
    <text x="400" y="44" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">MCP Standard</text>
    <rect x="540" y="20" width="220" height="36" rx="6" fill={COLORS.emerald} />
    <text x="650" y="44" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Skill (what agents call)</text>

    {/* Plugin column */}
    {[
      { label: 'ChatGPT plugin', color: COLORS.slate300 },
      { label: 'VS Code extension', color: COLORS.slate300 },
      { label: 'Custom API wrapper', color: COLORS.slate300 }
    ].map((p, i) => (
      <g key={i}>
        <rect x="60" y={80 + i * 70} width="180" height="50" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
        <text x="150" y={111 + i * 70} textAnchor="middle" fill={COLORS.slate500} fontSize="11">{p.label}</text>
      </g>
    ))}
    {/* Pain callouts */}
    <rect x="40" y="300" width="220" height="80" rx="6" fill="#fef2f2" stroke={COLORS.red} strokeWidth="1.5" />
    <text x="150" y="320" textAnchor="middle" fill={COLORS.red} fontSize="11" fontWeight="700">Problems</text>
    <text x="150" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Every ecosystem proprietary</text>
    <text x="150" y="354" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Auth inconsistent per vendor</text>
    <text x="150" y="370" textAnchor="middle" fill={COLORS.slate700} fontSize="10">No standard discovery</text>

    {/* Arrow: Plugin → MCP */}
    <line x1="260" y1="200" x2="295" y2="200" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowSP)" />
    <text x="277" y="192" textAnchor="middle" fill={COLORS.slate500} fontSize="9">evolves</text>

    {/* MCP column */}
    <rect x="295" y="75" width="210" height="220" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="400" y="105" textAnchor="middle" fill={COLORS.blue} fontSize="12" fontWeight="700">JSON-RPC protocol</text>
    {[
      'Standardized discovery',
      'Auth handled server-side',
      'Tools · Resources · Prompts',
      'Any MCP client connects',
      'Open spec (Anthropic → broad)'
    ].map((item, i) => (
      <g key={i}>
        <circle cx="315" cy={128 + i * 30} r="3" fill={COLORS.blue} />
        <text x="328" y={133 + i * 30} fill={COLORS.slate700} fontSize="11">{item}</text>
      </g>
    ))}
    <rect x="295" y="300" width="210" height="80" rx="6" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1.5" />
    <text x="400" y="320" textAnchor="middle" fill={COLORS.blue} fontSize="11" fontWeight="700">Resolves plugin problems</text>
    <text x="400" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="10">One standard, any AI host</text>
    <text x="400" y="354" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Auditable, governable</text>
    <text x="400" y="370" textAnchor="middle" fill={COLORS.slate700} fontSize="10">SecOps + GTI MCP servers: live</text>

    {/* Arrow: MCP → Skill */}
    <line x1="505" y1="200" x2="540" y2="200" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowSP)" />
    <text x="522" y="192" textAnchor="middle" fill={COLORS.slate500} fontSize="9">surfaces as</text>

    {/* Skill column */}
    <rect x="540" y="75" width="220" height="220" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <text x="650" y="105" textAnchor="middle" fill={COLORS.emerald} fontSize="12" fontWeight="700">Skill anatomy</text>
    {[
      { field: 'name:', val: '"gtl_lookup"' },
      { field: 'description:', val: 'what it does (agent reads this)' },
      { field: 'input schema:', val: 'what params it needs' },
      { field: 'output schema:', val: 'what it returns' },
      { field: 'auth:', val: 'handled by MCP server' }
    ].map((f, i) => (
      <g key={i}>
        <text x="558" y={130 + i * 30} fill={COLORS.emerald} fontSize="10" fontWeight="700">{f.field}</text>
        <text x="558" y={145 + i * 30} fill={COLORS.slate600} fontSize="10">{f.val}</text>
      </g>
    ))}
    <rect x="540" y="300" width="220" height="80" rx="6" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="1.5" />
    <text x="650" y="320" textAnchor="middle" fill={COLORS.emerald} fontSize="11" fontWeight="700">SE talking point</text>
    <text x="650" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Composable: chain skills</text>
    <text x="650" y="354" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Governable: grant/revoke per agent</text>
    <text x="650" y="370" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Self-describing: no hardcoded logic</text>

    <defs>
      <marker id="arrowSP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <text x="400" y="430" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">When a prospect says "plugin" — they mean this history. Redirect: MCP is the standard, skills are how agents access it.</text>
  </DiagramFrame>
);

export const PhishingTriageDiagram = () => (
  <DiagramFrame viewBox="0 0 800 580" caption="Phishing triage walkthrough — each step activates a distinct M3 architectural concept">
    <defs>
      <marker id="arrowPT" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
      </marker>
      <marker id="arrowPTr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>

    {/* Alert source */}
    <rect x="240" y="12" width="320" height="42" rx="7" fill={COLORS.slate700} />
    <text x="400" y="30" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Google SecOps: Phishing Alert Fires</text>
    <text x="400" y="46" textAnchor="middle" fill={COLORS.slate300} fontSize="10">suspicious URL · attachment hash · email body</text>
    <line x1="400" y1="54" x2="400" y2="72" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPT)" />

    {/* ORCHESTRATOR */}
    <rect x="220" y="72" width="360" height="52" rx="8" fill={COLORS.blue} />
    <text x="400" y="93" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Orchestrator Agent</text>
    <text x="400" y="111" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">receives alert · plans workflow · governs subagents</text>
    <rect x="595" y="82" width="110" height="22" rx="11" fill={COLORS.blue} opacity="0.25" stroke={COLORS.blue} strokeWidth="1" />
    <text x="650" y="97" textAnchor="middle" fill={COLORS.blue} fontSize="9" fontWeight="700">ORCHESTRATOR</text>
    <line x1="400" y1="124" x2="400" y2="140" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPT)" />

    {/* INPUT HOOK band */}
    <rect x="40" y="140" width="720" height="34" rx="6" fill={COLORS.amber} />
    <text x="400" y="153" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">① INPUT HOOK</text>
    <text x="400" y="167" textAnchor="middle" fill={COLORS.white} fontSize="10">strip injection payloads from email body before it enters model context</text>
    <line x1="400" y1="174" x2="400" y2="190" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPT)" />

    {/* SUBAGENT */}
    <rect x="220" y="190" width="360" height="55" rx="8" fill={COLORS.cyan} />
    <text x="400" y="212" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">IOC Enrichment Subagent</text>
    <text x="400" y="230" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">scope: read-only GTI + VirusTotal · no write access · isolated context</text>
    <rect x="595" y="200" width="90" height="22" rx="11" fill={COLORS.cyan} opacity="0.25" stroke={COLORS.cyan} strokeWidth="1" />
    <text x="640" y="215" textAnchor="middle" fill={COLORS.cyan} fontSize="9" fontWeight="700">SUBAGENT</text>

    {/* Lines from subagent to skills */}
    <line x1="280" y1="245" x2="175" y2="285" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTr)" />
    <line x1="520" y1="245" x2="625" y2="285" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTr)" />

    {/* Skill 1: gtl_lookup */}
    <rect x="40" y="285" width="230" height="70" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <rect x="40" y="285" width="230" height="28" rx="8" fill={COLORS.emerald} />
    <text x="155" y="304" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">SKILL: gtl_lookup</text>
    <text x="155" y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="10">MCP → Mandiant GTI</text>
    <text x="155" y="342" textAnchor="middle" fill={COLORS.slate500} fontSize="10">URL verdict · actor attribution · campaign</text>
    <rect x="95" y="273" width="55" height="18" rx="9" fill={COLORS.emerald} opacity="0.2" stroke={COLORS.emerald} strokeWidth="1" />
    <text x="122" y="285" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">SKILL</text>

    {/* Skill 2: vt_scan */}
    <rect x="530" y="285" width="230" height="70" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <rect x="530" y="285" width="230" height="28" rx="8" fill={COLORS.emerald} />
    <text x="645" y="304" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">SKILL: vt_scan</text>
    <text x="645" y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="10">MCP → VirusTotal</text>
    <text x="645" y="342" textAnchor="middle" fill={COLORS.slate500} fontSize="10">hash scan · 70+ engine results</text>
    <rect x="620" y="273" width="55" height="18" rx="9" fill={COLORS.emerald} opacity="0.2" stroke={COLORS.emerald} strokeWidth="1" />
    <text x="647" y="285" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">SKILL</text>

    {/* Lines back to orchestrator synthesis */}
    <line x1="175" y1="355" x2="310" y2="393" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTr)" />
    <line x1="625" y1="355" x2="490" y2="393" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPTr)" />

    {/* Orchestrator synthesizes */}
    <rect x="220" y="393" width="360" height="42" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="400" y="412" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">Orchestrator synthesizes findings</text>
    <text x="400" y="428" textAnchor="middle" fill={COLORS.blue} fontSize="11" fontWeight="700">→ Recommends: Isolate Host</text>
    <line x1="400" y1="435" x2="400" y2="451" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPT)" />

    {/* ACTION HOOK band */}
    <rect x="40" y="451" width="720" height="34" rx="6" fill={COLORS.amber} />
    <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">② ACTION HOOK</text>
    <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10">pause execution · notify on-call analyst · wait for approval before tool fires</text>
    <line x1="400" y1="485" x2="400" y2="501" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowPT)" />

    {/* Analyst approval + Audit hook side by side */}
    <rect x="80" y="501" width="260" height="46" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
    <text x="210" y="521" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">Analyst: APPROVE</text>
    <text x="210" y="537" textAnchor="middle" fill={COLORS.slate500} fontSize="10">host isolation executes</text>

    {/* AUDIT HOOK */}
    <rect x="460" y="501" width="260" height="46" rx="8" fill={COLORS.amber} opacity="0.85" />
    <text x="590" y="519" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">③ AUDIT HOOK</text>
    <text x="590" y="535" textAnchor="middle" fill={COLORS.white} fontSize="10">immutable trace → Agent Security Dashboard</text>

    <text x="400" y="572" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">Every concept plays a distinct role — none is interchangeable with another</text>
  </DiagramFrame>
);

export const SubagentsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="Subagents get scoped goals and explicit tool grants — never inherited privileges from the orchestrator">
    <rect x="290" y="30" width="220" height="60" rx="10" fill={COLORS.amber} />
    <text x="400" y="57" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">Orchestrator Agent</text>
    <text x="400" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10">full tool access · goal decomposition</text>
    {[
      { x: 60, label: 'Triage Subagent', tools: 'alert-read · enrich-ip', color: COLORS.blue },
      { x: 290, label: 'Investigate Subagent', tools: 'siem-query · edr-query', color: COLORS.cyan },
      { x: 520, label: 'Report Subagent', tools: 'write-case · notify', color: COLORS.emerald }
    ].map((sa, i) => (
      <g key={i}>
        <line x1="400" y1="90" x2={sa.x + 110} y2="175" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSA)" />
        <rect x={sa.x} y="175" width="220" height="80" rx="8" fill={COLORS.white} stroke={sa.color} strokeWidth="2" />
        <rect x={sa.x} y="175" width="220" height="35" rx="8" fill={sa.color} />
        <text x={sa.x + 110} y="198" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{sa.label}</text>
        <text x={sa.x + 110} y="228" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">Tools granted:</text>
        <text x={sa.x + 110} y="244" textAnchor="middle" fill={COLORS.slate500} fontSize="10">{sa.tools}</text>
        <rect x={sa.x + 20} y="275" width="180" height="30" rx="5" fill={COLORS.slate100} />
        <text x={sa.x + 110} y="295" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Isolated context · no parent scope</text>
      </g>
    ))}
    <defs>
      <marker id="arrowSA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <text x="400" y="370" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Least-privilege principle applied per subagent — lateral movement requires explicit re-grant, not inheritance</text>
  </DiagramFrame>
);

export const HooksDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="Hooks are the agent control plane — intercept, inspect, and enforce at every step">
    <rect x="60" y="170" width="140" height="60" rx="8" fill={COLORS.slate700} />
    <text x="130" y="196" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">Event</text>
    <text x="130" y="214" textAnchor="middle" fill={COLORS.white} fontSize="10">user input · tool call · model response</text>
    <line x1="200" y1="200" x2="250" y2="200" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowH)" />
    <rect x="250" y="155" width="160" height="90" rx="8" fill={COLORS.blue} />
    <text x="330" y="190" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Hook Layer</text>
    <text x="330" y="210" textAnchor="middle" fill={COLORS.white} fontSize="10">before_input</text>
    <text x="330" y="226" textAnchor="middle" fill={COLORS.white} fontSize="10">before_tool_call · after_model</text>
    <line x1="410" y1="200" x2="460" y2="200" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowH)" />
    <rect x="460" y="155" width="160" height="90" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
    <text x="540" y="190" textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="700">Policy Check</text>
    <text x="540" y="210" textAnchor="middle" fill={COLORS.slate500} fontSize="10">DLP · auth · rate limit</text>
    <text x="540" y="226" textAnchor="middle" fill={COLORS.slate500} fontSize="10">inject context · audit log</text>
    <line x1="620" y1="180" x2="680" y2="130" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowH)" />
    <rect x="680" y="100" width="100" height="45" rx="6" fill={COLORS.emerald} />
    <text x="730" y="126" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">ALLOW</text>
    <line x1="620" y1="220" x2="680" y2="270" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowH)" />
    <rect x="680" y="255" width="100" height="45" rx="6" fill={COLORS.red} />
    <text x="730" y="281" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">BLOCK</text>
    {[
      { y: 60, label: 'Sanitize input', desc: 'strip injection patterns' },
      { y: 305, label: 'Approval gate', desc: 'human-in-loop for high-risk actions' }
    ].map((h, i) => (
      <g key={i}>
        <rect x="250" y={h.y} width="160" height="45" rx="6" fill={COLORS.amber} opacity="0.85" />
        <text x="330" y={h.y + 22} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{h.label}</text>
        <text x="330" y={h.y + 38} textAnchor="middle" fill={COLORS.white} fontSize="9">{h.desc}</text>
        <line x1="330" y1={i === 0 ? h.y + 45 : h.y} x2="330" y2={i === 0 ? 155 : 245} stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="3 2" />
      </g>
    ))}
    <defs>
      <marker id="arrowH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
      </marker>
    </defs>
    <text x="400" y="390" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Agent Gateway implements hooks at the infrastructure level — every agent in the fleet governed from one control plane</text>
  </DiagramFrame>
);

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
