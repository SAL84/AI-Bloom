import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Phase = 'setup' | 'input' | 'think' | 'act' | 'observe' | 'done';

interface Step {
  phase: Phase;
  label: string;
  content: string;
  why: string;
}

const STEPS: Step[] = [
  {
    phase: 'setup',
    label: 'System Prompt',
    content: `You are a security analyst AI. Investigate alerts thoroughly.

Tools available:
• lookup_ioc(ip: string)         → reputation, threat category, confidence
• search_logs(host, hours)       → connection history and data volume
• get_asset_info(host: string)   → owner, role, risk tier, network segment
• create_ticket(severity, type, summary) → returns incident ID`,
    why: 'Every agent starts with a system prompt that defines its identity, instructions, and available tools. Without this, it\'s just a chatbot — the system prompt is what makes it an agent.',
  },
  {
    phase: 'input',
    label: 'Alert Received',
    content: `🚨 ALERT [HIGH] — Unusual outbound connection

Source:     HOST-WEB-03
Dest:       185.220.101.34:443
Volume:     2.3 MB over 12 connections
Timeframe:  Last 24 hours`,
    why: 'In production, this trigger arrives from a SIEM, EDR, or detection rule — not a human. The agent picks it up automatically and begins the loop.',
  },
  {
    phase: 'think',
    label: 'Agent Reasons',
    content: `I need to investigate this outbound connection. The destination IP is unknown to me. First: check its reputation. If it's malicious, I'll need the host context before setting severity.`,
    why: 'Before calling any tool, the agent reasons about its plan. This explicit thinking step is what makes agent behaviour transparent and debuggable — you can see exactly why it took each action.',
  },
  {
    phase: 'act',
    label: 'Tool Call',
    content: `lookup_ioc(
  ip="185.220.101.34"
)`,
    why: 'The agent translates its reasoning into a structured function call. It can only use tools defined in the system prompt — it cannot invent tool names or parameters outside the schema.',
  },
  {
    phase: 'observe',
    label: 'Tool Result',
    content: `{
  "reputation":   "malicious",
  "category":     "Tor exit node",
  "threat_types": ["c2", "data_exfiltration"],
  "confidence":   95,
  "first_seen":   "2021-03-12"
}`,
    why: 'The tool runs outside the model — your infrastructure executes it. The result is inserted into the model\'s context as a new message. The model reads it before deciding the next step.',
  },
  {
    phase: 'think',
    label: 'Agent Reasons Again',
    content: `Confirmed Tor C2 node, 95% confidence. HOST-WEB-03 sent 2.3 MB to it — that volume points to active exfiltration. I need to understand the host before I set the right severity.`,
    why: 'Each think-act-observe cycle adds information. The agent doesn\'t jump to conclusions — it reasons about what it learned and decides what to look at next.',
  },
  {
    phase: 'act',
    label: 'Tool Call',
    content: `get_asset_info(
  host="HOST-WEB-03"
)`,
    why: 'Chaining multiple tool calls is what makes agents powerful. Each call builds on the last — the agent dynamically decides what to look at based on what it has learned so far.',
  },
  {
    phase: 'observe',
    label: 'Tool Result',
    content: `{
  "owner":        "Web Platform Team",
  "role":         "customer-facing web server",
  "risk_tier":    "critical",
  "network":      "DMZ",
  "contains_pii": true
}`,
    why: 'The agent gathered context to make a better decision — not just "is this bad?" but "how bad, given what this host is?" This contextual reasoning separates agents from simple detection rules.',
  },
  {
    phase: 'think',
    label: 'Final Reasoning',
    content: `A critical, customer-facing DMZ server containing PII has been sending 2.3 MB to a confirmed C2 node. This is HIGH severity — possible active data breach. I have enough to act.`,
    why: 'The agent synthesises everything into a conclusion. If it needed more information it would call another tool or ask for clarification. It knows when it has enough.',
  },
  {
    phase: 'done',
    label: 'Final Answer',
    content: `🔴 CONFIRMED: Active C2 communication with likely data exfiltration.

HOST-WEB-03 (critical, PII, customer-facing) made 12 connections totalling 2.3 MB to a Tor C2 node — 95% confidence malicious.

Incident INC-2024-0891 created (HIGH severity).
SOC-IR team assigned. SLA: 4 hours.

Recommended next steps:
• Isolate HOST-WEB-03 from DMZ immediately
• Preserve memory dump before shutdown
• Notify DPO — GDPR breach notification may be required`,
    why: 'The final answer is structured and actionable. In production this might auto-create a ticket, page an on-call team, or trigger an isolation playbook — depending on how the agent is wired into your environment.',
  },
];

const LOOP_PHASES: Array<{ id: Phase; label: string; activeClass: string }> = [
  { id: 'think',   label: '🤔 Think',   activeClass: 'border-blue-400 bg-blue-100 text-blue-700' },
  { id: 'act',     label: '⚡ Act',     activeClass: 'border-amber-400 bg-amber-100 text-amber-700' },
  { id: 'observe', label: '📥 Observe', activeClass: 'border-emerald-400 bg-emerald-100 text-emerald-700' },
];

const CONTENT_STYLES: Record<Phase, { border: string; bg: string; label: string }> = {
  setup:   { border: 'border-slate-300',   bg: 'bg-slate-50',   label: 'text-slate-600' },
  input:   { border: 'border-slate-300',   bg: 'bg-slate-50',   label: 'text-slate-600' },
  think:   { border: 'border-blue-300',    bg: 'bg-blue-50',    label: 'text-blue-700' },
  act:     { border: 'border-amber-300',   bg: 'bg-amber-50',   label: 'text-amber-700' },
  observe: { border: 'border-emerald-300', bg: 'bg-emerald-50', label: 'text-emerald-700' },
  done:    { border: 'border-green-400',   bg: 'bg-green-50',   label: 'text-green-800' },
};

export const AgentAnatomy: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const step = STEPS[idx];
  const style = CONTENT_STYLES[step.phase];
  const isCode = step.phase === 'act' || step.phase === 'observe' || step.phase === 'setup';

  return (
    <div>
      <p className="text-sm text-slate-500 mb-5 leading-relaxed">
        Most AI agents follow the <strong>ReAct loop</strong>: Reason about what to do, Act by calling a tool, Observe the result, then reason again. Step through a real security investigation below to see how it works.
      </p>

      {/* Loop diagram */}
      <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex-wrap">
        {LOOP_PHASES.map((lp, i) => (
          <React.Fragment key={lp.id}>
            <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold border-2 transition select-none ${
              step.phase === lp.id ? lp.activeClass : 'border-slate-200 bg-white text-slate-400'
            }`}>
              {lp.label}
            </div>
            {i < LOOP_PHASES.length - 1 && <span className="text-slate-300 text-sm">→</span>}
          </React.Fragment>
        ))}
        <span className="text-slate-300 text-xs ml-1">↺ loop</span>
      </div>

      {/* Step counter + nav */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-400">Step {idx + 1} of {STEPS.length}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 transition disabled:opacity-40"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Prev
          </button>
          <button
            onClick={() => setIdx(i => Math.min(STEPS.length - 1, i + 1))}
            disabled={idx === STEPS.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 transition disabled:opacity-40"
          >
            Next <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Step dot trail */}
      <div className="flex gap-1 mb-5">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-5 bg-blue-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>

      {/* Step content */}
      <div className={`rounded-xl border-2 ${style.border} ${style.bg} p-5 mb-4`}>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${style.label}`}>{step.label}</p>
        <pre className={`text-sm whitespace-pre-wrap leading-relaxed ${isCode ? 'font-mono text-slate-700' : 'font-sans text-slate-800'}`}>
          {step.content}
        </pre>
      </div>

      {/* Why it matters */}
      <div className="rounded-lg bg-slate-800 px-4 py-3">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Why this matters</p>
        <p className="text-sm text-slate-300 leading-relaxed">{step.why}</p>
      </div>
    </div>
  );
};
