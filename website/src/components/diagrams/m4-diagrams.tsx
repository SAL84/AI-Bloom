import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const SOCArchDiagram = () => (
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

export const PromptInjectionDiagram = () => (
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

export const AgentAttackSurfaceDiagram = () => (
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

export const EDRBehavioralDiagram = () => (
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

export const EmailIdentityDiagram = () => (
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

export const SOAREvolutionDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="The agentic SOC replaces sequential pivot chains with a parallel, reasoning orchestrator">
    <text x="195" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="700">Before: SOAR Era</text>
    <text x="605" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="13" fontWeight="700">After: Agentic SOC</text>
    <line x1="400" y1="45" x2="400" y2="400" stroke={COLORS.slate300} strokeWidth="1" strokeDasharray="4 3" />
    {/* Before: sequential chain */}
    {['SIEM', 'EDR', 'IAM', 'Threat Intel', 'SOAR'].map((s, i) => (
      <g key={i}>
        <rect x="60" y={60 + i * 62} width="130" height="44" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
        <text x="125" y={87 + i * 62} textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="600">{s}</text>
        {i < 4 && <line x1="125" y1={104 + i * 62} x2="125" y2={122 + i * 62} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowEv)" />}
      </g>
    ))}
    <rect x="60" y="370" width="130" height="30" rx="5" fill="#fef2f2" stroke={COLORS.red} strokeWidth="1.5" />
    <text x="125" y="390" textAnchor="middle" fill={COLORS.red} fontSize="10">Context lost each hop</text>
    {/* After: orchestrator fan-out */}
    <rect x="495" y="60" width="200" height="50" rx="8" fill={COLORS.blue} />
    <text x="595" y="82" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Orchestrator</text>
    <text x="595" y="99" textAnchor="middle" fill={COLORS.white} fontSize="10">reasons · delegates · synthesizes</text>
    {[
      { x: 440, y: 175, label: 'SecOps' },
      { x: 530, y: 175, label: 'GTI' },
      { x: 620, y: 175, label: 'IAM' },
      { x: 710, y: 175, label: 'EDR' }
    ].map((t, i) => (
      <g key={i}>
        <line x1="595" y1="110" x2={t.x + 40} y2={t.y} stroke={COLORS.cyan} strokeWidth="1.5" markerEnd="url(#arrowEvC)" />
        <rect x={t.x} y={t.y} width="80" height="40" rx="6" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
        <text x={t.x + 40} y={t.y + 25} textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="600">{t.label}</text>
      </g>
    ))}
    <rect x="460" y="255" width="270" height="40" rx="6" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
    <text x="595" y="275" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="600">MCP bus · parallel · shared state</text>
    <rect x="460" y="315" width="270" height="40" rx="6" fill={COLORS.emerald} />
    <text x="595" y="339" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">Analyst reviews outcome, not pivots</text>
    <defs>
      <marker id="arrowEv" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
      </marker>
      <marker id="arrowEvC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.cyan} />
      </marker>
    </defs>
  </DiagramFrame>
);

export const SIEMXDRDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="SIEM/XDR AI has two layers — probe which is which before claiming parity">
    <rect x="60" y="40" width="680" height="60" rx="8" fill={COLORS.amber} />
    <text x="400" y="65" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">GenAI Layer (newer)</text>
    <text x="400" y="85" textAnchor="middle" fill={COLORS.white} fontSize="11">NL-to-query · Detection authoring assist · Alert summarization · Analyst chat</text>
    <rect x="60" y="120" width="680" height="60" rx="8" fill={COLORS.blue} />
    <text x="400" y="145" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Classical ML Layer (mature)</text>
    <text x="400" y="165" textAnchor="middle" fill={COLORS.white} fontSize="11">Anomaly detection · UEBA · Alert correlation · Behavioral baselines</text>
    <text x="400" y="210" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="700">Evaluation Framework — Three Questions to Probe Any Vendor</text>
    {[
      { label: '1. Show me an AI-authored detection', sub: 'Time diff vs manual? Analyst review required?' },
      { label: '2. Last false negative your rules missed', sub: 'Would the ML layer have caught it?' },
      { label: '3. Labeling and retraining cadence', sub: 'Who labels? How often are models updated?' }
    ].map((q, i) => (
      <g key={i}>
        <rect x="60" y={230 + i * 60} width="680" height="50" rx="6" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
        <rect x="60" y={230 + i * 60} width="6" height="50" fill={COLORS.cyan} />
        <text x="80" y={253 + i * 60} fill={COLORS.slate900} fontSize="12" fontWeight="700">{q.label}</text>
        <text x="80" y={271 + i * 60} fill={COLORS.slate500} fontSize="10">{q.sub}</text>
      </g>
    ))}
    <text x="400" y="415" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Separates platforms with real ML investment from those with ML branding on rule engines</text>
  </DiagramFrame>
);

export const AIAttackAccelerationDiagram = () => (
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
