import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const SOCCopilotsDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Three-phase autonomy progression — each phase has a clear rollback and measurable gate">
    {[
      {
        phase: 'Phase 1', title: 'Copilot Assists', color: COLORS.blue,
        desc: 'Chat over SIEM · NL-to-query · Summarization',
        human: 'Analyst fully in loop', x: 50
      },
      {
        phase: 'Phase 2', title: 'Pre-Investigates', color: COLORS.amber,
        desc: 'Enrichment + context ready before analyst opens case',
        human: 'Analyst approves / overrides', x: 290
      },
      {
        phase: 'Phase 3', title: 'Autonomous Close', color: COLORS.emerald,
        desc: 'Routine alerts auto-closed with full audit trail',
        human: 'Analyst reviews daily sample', x: 530
      }
    ].map((p, i) => (
      <g key={i}>
        <rect x={p.x} y="40" width="220" height="290" rx="10" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
        <rect x={p.x} y="40" width="220" height="60" rx="10" fill={p.color} />
        <text x={p.x + 110} y="68" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{p.phase}</text>
        <text x={p.x + 110} y="88" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{p.title}</text>
        <text x={p.x + 110} y="130" textAnchor="middle" fill={COLORS.slate700} fontSize="11">{p.desc.split(' · ').map((d, j) => (
          <tspan key={j} x={p.x + 110} dy={j === 0 ? 0 : 18}>{d}</tspan>
        ))}</text>
        <line x1={p.x + 20} y1="205" x2={p.x + 200} y2="205" stroke={COLORS.slate200} />
        <text x={p.x + 110} y="230" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontWeight="600">Human role:</text>
        <text x={p.x + 110} y="250" textAnchor="middle" fill={COLORS.slate700} fontSize="11" fontWeight="700">{p.human}</text>
        {i > 0 && (
          <g>
            <rect x={p.x + 20} y="270" width="180" height="30" rx="5" fill={COLORS.slate100} />
            <text x={p.x + 110} y="289" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Gate: escalation criteria in writing</text>
          </g>
        )}
        {i < 2 && (
          <line x1={p.x + 220} y1="185" x2={p.x + 290} y2="185" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowSC)" />
        )}
      </g>
    ))}
    <defs>
      <marker id="arrowSC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <rect x="50" y="355" width="700" height="45" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
    <text x="400" y="376" textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="700">Prerequisites for Phase 3: &gt;500 alerts/day unreviewed + escalation criteria defined + analyst review process in place</text>
    <text x="400" y="393" textAnchor="middle" fill={COLORS.slate500} fontSize="10">Selling Phase 3 to a SOC without criteria (2) and (3) sets up a failed pilot</text>
  </DiagramFrame>
);

export const ThreatIntelHuntingDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="Agentic hunting shifts steps 2–4 from hours of senior analyst time to minutes running in parallel">
    {[
      { x: 90, y: 60, label: '1 · Hypothesis', desc: 'ATT&CK technique or actor TTP', color: COLORS.cyan },
      { x: 310, y: 60, label: '2 · Generate Queries', desc: 'SIEM queries targeting that behavior', color: COLORS.blue },
      { x: 530, y: 60, label: '3 · Evaluate', desc: 'Agent runs queries, scores evidence', color: COLORS.blue },
      { x: 310, y: 210, label: '4 · Pivot', desc: 'Follow chains, enrich IPs and hashes', color: COLORS.amber },
      { x: 530, y: 210, label: '5 · Report', desc: 'Findings + evidence + detection recs', color: COLORS.emerald }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y={s.y} width="200" height="75" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
        <rect x={s.x} y={s.y} width="200" height="30" rx="8" fill={s.color} />
        <text x={s.x + 100} y={s.y + 20} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{s.label}</text>
        <text x={s.x + 100} y={s.y + 55} textAnchor="middle" fill={COLORS.slate700} fontSize="11">{s.desc}</text>
      </g>
    ))}
    {/* Arrows */}
    <line x1="290" y1="97" x2="310" y2="97" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowTI)" />
    <line x1="510" y1="97" x2="530" y2="97" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowTI)" />
    <line x1="630" y1="135" x2="630" y2="175" stroke={COLORS.slate400} strokeWidth="2" />
    <line x1="630" y1="175" x2="510" y2="210" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowTI)" />
    <line x1="510" y1="247" x2="530" y2="247" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowTI)" />
    <defs>
      <marker id="arrowTI" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <rect x="50" y="320" width="340" height="50" rx="8" fill={COLORS.blue} opacity="0.15" stroke={COLORS.blue} strokeWidth="1.5" />
    <text x="220" y="342" textAnchor="middle" fill={COLORS.blue} fontSize="11" fontWeight="700">Human-led: steps 1–5 = 2–4 hrs senior analyst</text>
    <text x="220" y="360" textAnchor="middle" fill={COLORS.slate600} fontSize="10">One hypothesis at a time</text>
    <rect x="410" y="320" width="340" height="50" rx="8" fill={COLORS.emerald} opacity="0.15" stroke={COLORS.emerald} strokeWidth="1.5" />
    <text x="580" y="342" textAnchor="middle" fill={COLORS.emerald} fontSize="11" fontWeight="700">Agentic: steps 2–4 = minutes, parallel</text>
    <text x="580" y="360" textAnchor="middle" fill={COLORS.slate600} fontSize="10">Multiple hypotheses simultaneously</text>
  </DiagramFrame>
);

export const DataGovernanceDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Three non-negotiable trust prerequisites — every CISO will ask all three before approving AI in security">
    <text x="400" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">CISO Trust Prerequisites for AI Deployment</text>
    {[
      {
        num: '1', title: 'Training Data Policy', color: COLORS.blue,
        q: 'Does my data train the model?',
        a: 'Enterprise contracts: No. Customer data does not train base models.',
        note: 'Know tier distinction: consumer vs enterprise terms differ'
      },
      {
        num: '2', title: 'Tenant Isolation', color: COLORS.cyan,
        q: 'Who can access my data within the platform?',
        a: 'Tenant isolation is architectural, not just policy — data stays in your boundary.',
        note: 'Ask for architecture diagram showing data boundaries'
      },
      {
        num: '3', title: 'Data Residency', color: COLORS.amber,
        q: 'Where does my data live, and can I control it?',
        a: 'Region controls + CMEK available. VPC-SC supported.',
        note: 'Compliance: GDPR, FedRAMP, HIPAA — know which apply'
      }
    ].map((p, i) => (
      <g key={i}>
        <rect x="60" y={65 + i * 110} width="680" height="95" rx="8" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
        <rect x="60" y={65 + i * 110} width="60" height="95" rx="8" fill={p.color} />
        <text x="90" y={120 + i * 110} textAnchor="middle" fill={COLORS.white} fontSize="24" fontWeight="700">{p.num}</text>
        <text x="155" y={88 + i * 110} fill={COLORS.slate900} fontSize="13" fontWeight="700">{p.title}</text>
        <text x="155" y={108 + i * 110} fill={COLORS.slate500} fontSize="11" fontStyle="italic">"{p.q}"</text>
        <text x="155" y={128 + i * 110} fill={COLORS.slate700} fontSize="11" fontWeight="600">{p.a}</text>
        <text x="155" y={148 + i * 110} fill={COLORS.slate500} fontSize="10">{p.note}</text>
      </g>
    ))}
    <rect x="60" y="395" width="680" height="20" rx="4" fill={COLORS.red} opacity="0.1" />
    <text x="400" y="410" textAnchor="middle" fill={COLORS.red} fontSize="11" fontWeight="700">An SE who cannot answer all three will not get past a security-mature CISO</text>
  </DiagramFrame>
);

export const DefenseReframingDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="AI shifts the security posture from reactive to predictive — reframe every product conversation around this axis">
    <text x="400" y="30" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The Defender Posture Shift</text>
    <rect x="40" y="60" width="340" height="240" rx="12" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
    <text x="210" y="90" textAnchor="middle" fill={COLORS.slate700} fontSize="13" fontWeight="700">Pre-AI SOC</text>
    {[
      { y: 115, label: 'Detect', desc: 'Rule fires after attacker acts', color: COLORS.slate400 },
      { y: 170, label: 'Investigate', desc: 'Analyst pivots 6-10 tools manually', color: COLORS.slate400 },
      { y: 225, label: 'Respond', desc: 'Hours to days from alert to close', color: COLORS.slate400 },
      { y: 280, label: 'Recover', desc: 'Post-incident cleanup', color: COLORS.slate400 }
    ].map((s, i) => (
      <g key={i}>
        <rect x="70" y={s.y} width="250" height="40" rx="6" fill={COLORS.slate100} stroke={s.color} strokeWidth="1.5" />
        <text x="195" y={s.y + 16} textAnchor="middle" fill={COLORS.slate700} fontSize="12" fontWeight="700">{s.label}</text>
        <text x="195" y={s.y + 32} textAnchor="middle" fill={COLORS.slate500} fontSize="10">{s.desc}</text>
      </g>
    ))}
    <rect x="420" y="60" width="340" height="240" rx="12" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
    <text x="590" y="90" textAnchor="middle" fill={COLORS.blue} fontSize="13" fontWeight="700">AI-Powered SOC</text>
    {[
      { y: 115, label: 'Predict', desc: 'TI briefings tailored to your exposure', color: COLORS.blue },
      { y: 170, label: 'Prevent', desc: 'Posture hardening before attack fires', color: COLORS.cyan },
      { y: 225, label: 'Detect faster', desc: 'Agentic triage: 30 min → 60 sec', color: COLORS.emerald },
      { y: 280, label: 'Respond + Close', desc: 'Remediation agent closes loop', color: COLORS.emerald }
    ].map((s, i) => (
      <g key={i}>
        <rect x="450" y={s.y} width="280" height="40" rx="6" fill={s.color} opacity={i < 2 ? 0.12 : 0.18} stroke={s.color} strokeWidth="1.5" />
        <rect x="450" y={s.y} width="5" height="40" fill={s.color} rx="3" />
        <text x="600" y={s.y + 16} textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{s.label}</text>
        <text x="600" y={s.y + 32} textAnchor="middle" fill={COLORS.slate500} fontSize="10">{s.desc}</text>
      </g>
    ))}
    <line x1="380" y1="180" x2="420" y2="180" stroke={COLORS.blue} strokeWidth="2.5" markerEnd="url(#arrowDR)" />
    <defs>
      <marker id="arrowDR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
      </marker>
    </defs>
    <text x="400" y="380" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The reframe: Google SecOps is not a faster SIEM — it is a different operating model</text>
  </DiagramFrame>
);
