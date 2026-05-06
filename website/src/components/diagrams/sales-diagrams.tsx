import React from 'react';
import { DiagramFrame, COLORS } from './shared';

export const DemoFrameworkDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="Demo structure: qualify first, show failure modes, make the customer a participant — not an audience">
    {[
      { x: 60, label: '1 · Pre-qualify', color: COLORS.slate700, items: ['What outcome = success for you?', 'Can you bring a real alert?', 'Clarify vague answers before starting'] },
      { x: 245, label: '2 · Set scenario', color: COLORS.cyan, items: ['Use their data or closest proxy', 'Name the specific pain being shown', 'State what success looks like'] },
      { x: 430, label: '3 · Three moments', color: COLORS.blue, items: ['Agent doing real work', 'Agent asking for human input', 'Agent wrong + how you catch it'] },
      { x: 615, label: '4 · Commit', color: COLORS.emerald, items: ['Ask: what did you see?', 'Surface engagement signals', 'Name explicit next step'] }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="40" width="170" height="260" rx="8" fill={COLORS.white} stroke={s.color} strokeWidth="2" />
        <rect x={s.x} y="40" width="170" height="45" rx="8" fill={s.color} />
        <text x={s.x + 85} y="68" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{s.label}</text>
        {s.items.map((it, j) => (
          <g key={j}>
            <circle cx={s.x + 18} cy={115 + j * 45} r="3" fill={s.color} />
            <text x={s.x + 30} y={120 + j * 45} fill={COLORS.slate700} fontSize="10">{it}</text>
          </g>
        ))}
        {i < 3 && <line x1={s.x + 170} y1="170" x2={s.x + 185} y2="170" stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowDF2)" />}
      </g>
    ))}
    <defs>
      <marker id="arrowDF2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
      </marker>
    </defs>
    <rect x="60" y="325" width="725" height="55" rx="8" fill={COLORS.amber} opacity="0.15" stroke={COLORS.amber} strokeWidth="1.5" />
    <text x="400" y="347" textAnchor="middle" fill={COLORS.amber} fontSize="12" fontWeight="700">Skeptic recovery: stop demoing, ask directly</text>
    <text x="400" y="367" textAnchor="middle" fill={COLORS.slate700} fontSize="11">"It seems I may not be hitting the right use case. What would you need to see to believe this was worth a deeper look?"</text>
  </DiagramFrame>
);

export const ObjectionHandlingDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="Objection routing: identify the root concern, then choose the right counter-frame">
    <text x="400" y="28" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Objection → Root Concern → Counter-Frame</text>
    {[
      {
        objection: '"Microsoft already does this"',
        root: 'Consolidation preference / incumbent comfort',
        frame: 'Concede endpoint + productivity. Compete on TI depth (Mandiant), agentic coverage (4 agents vs. 1), and SecOps-native architecture.',
        color: COLORS.blue
      },
      {
        objection: '"AI is not ready for security"',
        root: 'Trust / past failure with AI tools',
        frame: 'Base rate math shows status quo also has a precision problem. Ask: what did not work before? Address that specific failure mode. Reference 5M+ alerts GA track record.',
        color: COLORS.amber
      },
      {
        objection: '"Too expensive / budget is locked"',
        root: 'ROI not visible / wrong stakeholder',
        frame: 'Quantify analyst time saved: MTTR × alert volume × hourly cost. Shift to TCO framing. Identify CISO + CFO co-sponsor path.',
        color: COLORS.cyan
      },
      {
        objection: '"We are mid-contract with [competitor]"',
        root: 'Switching cost / timing',
        frame: 'Plant a seed for renewal. Ask: what would make your next renewal conversation include Google? Document gaps today that become evaluation criteria at renewal.',
        color: COLORS.emerald
      }
    ].map((o, i) => (
      <g key={i}>
        <rect x="40" y={55 + i * 90} width="720" height="78" rx="8" fill={COLORS.white} stroke={o.color} strokeWidth="1.5" />
        <rect x="40" y={55 + i * 90} width="6" height="78" rx="3" fill={o.color} />
        <text x="60" y={76 + i * 90} fill={COLORS.slate900} fontSize="12" fontWeight="700">{o.objection}</text>
        <text x="60" y={94 + i * 90} fill={COLORS.slate500} fontSize="10" fontStyle="italic">Root: {o.root}</text>
        <text x="60" y={115 + i * 90} fill={COLORS.slate700} fontSize="10">{o.frame.length > 110 ? o.frame.slice(0, 110) + '…' : o.frame}</text>
      </g>
    ))}
    <text x="400" y="430" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Always name the root concern before responding — answering the wrong concern wastes the exchange</text>
  </DiagramFrame>
);

export const ROIComplianceDiagram = () => (
  <DiagramFrame viewBox="0 0 800 420" caption="Three value buckets — lead with the one that maps to the buyer's current priority">
    {[
      {
        x: 50, color: COLORS.blue, label: 'Efficiency', icon: '⚡',
        metrics: ['Triage: 30 min → 60 sec (routine)', 'Analyst capacity: same headcount, 10× throughput', 'SOAR connector maintenance → near zero', 'Detection authoring: hours → minutes'],
        pitch: 'Same team. More coverage.'
      },
      {
        x: 300, color: COLORS.emerald, label: 'Risk Reduction', icon: '🛡',
        metrics: ['MTTR reduction → lower dwell time', 'Breach cost avoided (IBM: $4.9M avg)', 'TI-informed exposure prioritization', 'Agent identity = attributable audit trail'],
        pitch: 'Fewer breaches. Faster containment.'
      },
      {
        x: 550, color: COLORS.amber, label: 'Compliance', icon: '✓',
        metrics: ['Data residency controls (region + CMEK)', 'GDPR / FedRAMP / HIPAA alignment', 'Immutable audit via Cloud Trace', 'Zero customer data in model training'],
        pitch: 'Audit-ready from day one.'
      }
    ].map((b, i) => (
      <g key={i}>
        <rect x={b.x} y="35" width="235" height="330" rx="10" fill={COLORS.white} stroke={b.color} strokeWidth="2" />
        <rect x={b.x} y="35" width="235" height="60" rx="10" fill={b.color} />
        <text x={b.x + 118} y="62" textAnchor="middle" fill={COLORS.white} fontSize="20">{b.icon}</text>
        <text x={b.x + 118} y="83" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="700">{b.label}</text>
        {b.metrics.map((m, j) => (
          <g key={j}>
            <circle cx={b.x + 22} cy={120 + j * 48} r="3" fill={b.color} />
            <text x={b.x + 35} y={125 + j * 48} fill={COLORS.slate700} fontSize="11">{m}</text>
          </g>
        ))}
        <rect x={b.x + 10} y="330" width="215" height="30" rx="6" fill={b.color} opacity="0.12" />
        <text x={b.x + 118} y="350" textAnchor="middle" fill={b.color} fontSize="11" fontWeight="700">{b.pitch}</text>
      </g>
    ))}
    <text x="400" y="400" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Discovery tip: ask "What does success look like for your CISO in 12 months?" — the answer tells you which bucket leads</text>
  </DiagramFrame>
);

export const CustomerArchetypesDiagram = () => (
  <DiagramFrame viewBox="0 0 800 440" caption="Match the motion to the archetype — signals, objections, and plays differ sharply across the three">
    {[
      {
        x: 50, color: COLORS.emerald, label: 'EXPAND', sub: 'Existing Google customer',
        signals: ['Using Chronicle or Workspace already', 'Looking to consolidate vendors', 'CISO has Google relationship'],
        objection: '"We do not use the advanced features we have."',
        play: 'Unified Security bundle pitch. Show adjacent capability already in their contract. Land with GTI or the 4th agent.'
      },
      {
        x: 300, color: COLORS.blue, label: 'DISPLACE', sub: 'Replace a named competitor',
        signals: ['Public breach or incident with current vendor', 'Contract renewal in 6-18 months', 'Frustration with alert volume / SOAR pain'],
        objection: '"Switching cost is too high."',
        play: 'Timeline seed: document gaps now, target renewal. Lead with SOAR connector pain — it is often the hidden migration motivator.'
      },
      {
        x: 550, color: COLORS.amber, label: 'WIN', sub: 'Greenfield or new build',
        signals: ['New CISO / new mandate', 'Growing startup / cloud-native org', 'No legacy SIEM investment'],
        objection: '"We are too small for enterprise pricing."',
        play: 'Land with SecOps entry tier. Position architecture-first so they do not have to rip-and-replace later. ADK trial for greenfield agent use cases.'
      }
    ].map((a, i) => (
      <g key={i}>
        <rect x={a.x} y="30" width="235" height="380" rx="10" fill={COLORS.white} stroke={a.color} strokeWidth="2" />
        <rect x={a.x} y="30" width="235" height="55" rx="10" fill={a.color} />
        <text x={a.x + 118} y="55" textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="700">{a.label}</text>
        <text x={a.x + 118} y="75" textAnchor="middle" fill={COLORS.white} fontSize="10">{a.sub}</text>
        <text x={a.x + 12} y="105" fill={COLORS.slate500} fontSize="10" fontWeight="700">BUY SIGNALS</text>
        {a.signals.map((s, j) => (
          <g key={j}>
            <circle cx={a.x + 20} cy={120 + j * 30} r="3" fill={a.color} />
            <text x={a.x + 32} y={125 + j * 30} fill={COLORS.slate700} fontSize="10">{s}</text>
          </g>
        ))}
        <line x1={a.x + 10} y1="215" x2={a.x + 225} y2="215" stroke={COLORS.slate200} />
        <text x={a.x + 12} y="232" fill={COLORS.slate500} fontSize="10" fontWeight="700">TOP OBJECTION</text>
        <text x={a.x + 12} y="250" fill={COLORS.slate700} fontSize="10" fontStyle="italic">{a.objection}</text>
        <line x1={a.x + 10} y1="265" x2={a.x + 225} y2="265" stroke={COLORS.slate200} />
        <text x={a.x + 12} y="283" fill={COLORS.slate500} fontSize="10" fontWeight="700">KEY PLAY</text>
        {a.play.split('. ').slice(0, 3).map((line, j) => (
          <text key={j} x={a.x + 12} y={300 + j * 28} fill={COLORS.slate700} fontSize="10">{line}.</text>
        ))}
      </g>
    ))}
    <text x="400" y="430" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Identify archetype in the first two discovery questions — motion and messaging pivot entirely</text>
  </DiagramFrame>
);

export const SEPromptingPlaybookDiagram = () => (
  <DiagramFrame viewBox="0 0 800 400" caption="SE prompting pattern: role + context + constraint + task + output format = consistent, reusable results">
    <text x="400" y="28" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The SE Prompt Structure</text>
    {[
      { label: 'Role', color: COLORS.blue, desc: 'You are a senior sales engineer at Google Cloud specializing in security operations.', tip: 'Sets the model\'s persona and knowledge frame' },
      { label: 'Context', color: COLORS.cyan, desc: 'The prospect is a 5,000-person financial services firm using Splunk. CISO is focused on reducing analyst overtime and passing SOC 2 audit.', tip: 'Provide the specific customer situation' },
      { label: 'Constraint', color: COLORS.amber, desc: 'Do not mention pricing. Keep the response to 3 bullet points max. Do not claim capabilities not yet GA.', tip: 'Guardrails prevent hallucinated commitments' },
      { label: 'Task', color: COLORS.emerald, desc: 'Draft the opening paragraph of a discovery email that references their Splunk investment and frames Google SecOps as additive, not a rip-and-replace.', tip: 'Specific, actionable instruction' },
      { label: 'Output format', color: '#fb923c', desc: 'Return: subject line, email body (max 80 words), and one suggested follow-up question.', tip: 'Structure the output for direct use' }
    ].map((s, i) => (
      <g key={i}>
        <rect x="60" y={55 + i * 63} width="680" height="52" rx="6" fill={COLORS.white} stroke={s.color} strokeWidth="1.5" />
        <rect x="60" y={55 + i * 63} width="90" height="52" rx="6" fill={s.color} />
        <text x="105" y={86 + i * 63} textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">{s.label}</text>
        <text x="165" y={76 + i * 63} fill={COLORS.slate700} fontSize="10">{s.desc.length > 90 ? s.desc.slice(0, 90) + '…' : s.desc}</text>
        <text x="165" y={96 + i * 63} fill={COLORS.slate500} fontSize="9" fontStyle="italic">{s.tip}</text>
      </g>
    ))}
    <text x="400" y="390" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Save your best prompts as named templates — reuse across deals, share with the team as a living playbook</text>
  </DiagramFrame>
);
