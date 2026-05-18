import React, { useState } from 'react';
import type { View } from '../../types/course';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import { AgentAnatomy } from './agentic/AgentAnatomy';
import { AgentScenario } from './agentic/AgentScenario';
import type { ScenarioStep } from './agentic/AgentScenario';

interface AgenticAIViewProps {
  setView: (view: View) => void;
}

// ── Scenario data ─────────────────────────────────────────────────────────────

const ALERT_TRIAGE: ScenarioStep[] = [
  { type: 'think', label: 'Agent Reasons', content: 'Account takeover pattern. Need to verify the auth events and IP reputation before escalating — I want evidence, not assumptions.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_auth_events(\n  user="j.chen@company.com",\n  hours=2\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "failed_attempts": 47,\n  "source_ip": "91.108.56.130",\n  "country": "Russia",\n  "successful_login_at": "14:32:07 UTC",\n  "user_normal_location": "San Francisco, US"\n}' },
  { type: 'think', label: 'Agent Reasons', content: '47 failed attempts then success from Russia, while this user normally logs in from San Francisco. Classic credential stuffing. Let me verify the IP before I act.' },
  { type: 'tool-call', label: 'Tool Call', content: 'lookup_ioc(\n  ip="91.108.56.130"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "reputation":  "malicious",\n  "category":    "credential_stuffing",\n  "campaigns":   ["cred-storm-2024"],\n  "confidence":  91\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Confirmed malicious IP from an active campaign. I should check what the attacker did post-login before locking the account — scope matters for the IR report.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_post_login_activity(\n  user="j.chen@company.com",\n  since="14:32:07"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "actions": [\n    "viewed: Q4 Financial Projections",\n    "downloaded: customer_database_export.csv",\n    "accessed: exec_compensation.xlsx"\n  ],\n  "session_duration": "22 minutes"\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Attacker accessed financial reports and downloaded the customer database in 22 minutes. Confirmed breach with PII exposure. Lock the account and escalate immediately.' },
  { type: 'tool-call', label: 'Tool Call', content: 'lock_account_and_terminate(\n  user="j.chen@company.com",\n  reason="confirmed_compromise"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "status": "account_locked",\n  "session_terminated": true,\n  "mfa_reset_required": true,\n  "ticket": "INC-2024-0891"\n}' },
  { type: 'answer', label: 'Finding', content: '🔴 CONFIRMED account compromise.\n\nAttacker from an active credential stuffing campaign (Russia, 91.108.56.130) gained access and spent 22 minutes downloading a customer database export and financial documents.\n\nActions taken:\n• Account locked, active session terminated\n• MFA reset required on next login\n• Incident INC-2024-0891 created (HIGH)\n\nRecommend: Notify DPO within 72h (potential GDPR breach), review full file access scope, check for lateral movement from the attacker\'s session.' },
];

const BREACH_RESPONDER: ScenarioStep[] = [
  { type: 'think', label: 'Agent Reasons', content: 'Active ransomware on OT infrastructure. Isolating immediately could halt manufacturing — I need to understand scope and recovery options before making that call.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_host_info(\n  host="HOST-MFG-07"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "role":             "manufacturing_line_controller",\n  "network":          "OT_SEGMENT_3",\n  "criticality":      "production",\n  "connected_plcs":   8,\n  "shutdown_impact":  "stops assembly line"\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'This controls 8 PLCs on the assembly line — isolation has real operational consequences. I need to check spread before I can weigh the trade-off correctly.' },
  { type: 'tool-call', label: 'Tool Call', content: 'scan_segment_for_ioc(\n  network="OT_SEGMENT_3",\n  pattern="file_rename_*.enc"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "infected": ["HOST-MFG-07", "HOST-MFG-09"],\n  "clean":    ["HOST-MFG-05", "HOST-MFG-11", "HOST-ENG-01"]\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Spread to 2 of 5 hosts — not yet pervasive. Let me check backup recency before recommending isolation, so I can give an honest recovery estimate.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_backup_status(\n  hosts=["HOST-MFG-07", "HOST-MFG-09"]\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "HOST-MFG-07": { "last_backup": "4h ago",    "recovery_est": "~2h" },\n  "HOST-MFG-09": { "last_backup": "90 min ago", "recovery_est": "~2h" }\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Good backups available — ~4h total downtime to restore both hosts. If I wait and spread reaches the remaining 3, that estimate becomes much worse. Isolate now.' },
  { type: 'answer', label: 'Finding', content: '🔴 ACTION REQUIRED — Isolate immediately.\n\nRansomware confirmed on HOST-MFG-07 and HOST-MFG-09. Three hosts in OT_SEGMENT_3 are currently clean.\n\nRecommended actions:\n• Isolate HOST-MFG-07 and HOST-MFG-09 from OT_SEGMENT_3 NOW\n• Preserve memory dumps before powering down (forensics)\n• Restore from backup — estimated 4h total downtime\n• Engage OT security specialist before reconnecting to segment\n\nTrade-off accepted: 4h planned downtime prevents total segment loss if spread continues.' },
];

const PATCH_ADVISOR: ScenarioStep[] = [
  { type: 'think', label: 'Agent Reasons', content: '52 findings is too many for one sprint. I need to find which have active exploits in the wild and confirm we\'re actually exposed — CVSS alone isn\'t enough.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_vulnerabilities(\n  environment="production",\n  min_cvss=7.0\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "critical":           8,\n  "high":               19,\n  "medium":             25,\n  "with_public_exploit": 3\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Three vulnerabilities already have public exploits. Those must be prioritised regardless of CVSS. Let me get the specifics.' },
  { type: 'tool-call', label: 'Tool Call', content: 'get_exploitable_cves(\n  environment="production"\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '[\n  { "cve": "CVE-2024-21762", "product": "FortiOS SSL VPN",          "cvss": 9.8,  "exploited_in_wild": true },\n  { "cve": "CVE-2024-3400",  "product": "PAN-OS GlobalProtect",    "cvss": 10.0, "exploited_in_wild": true },\n  { "cve": "CVE-2024-1709",  "product": "ConnectWise ScreenConnect","cvss": 10.0, "exploited_in_wild": true }\n]' },
  { type: 'think', label: 'Agent Reasons', content: 'Two CVSS 10.0 vulnerabilities, actively exploited. But I need to confirm we actually run these products before assigning priority — context matters.' },
  { type: 'tool-call', label: 'Tool Call', content: 'check_asset_exposure(\n  cves=["CVE-2024-21762","CVE-2024-3400","CVE-2024-1709"]\n)' },
  { type: 'tool-result', label: 'Tool Result', content: '{\n  "CVE-2024-21762": { "affected": true,  "assets": ["FW-EDGE-01","FW-EDGE-02"], "internet_facing": true  },\n  "CVE-2024-3400":  { "affected": true,  "assets": ["PA-DC-01"],              "internet_facing": true  },\n  "CVE-2024-1709":  { "affected": false, "reason": "ConnectWise not in inventory"                       }\n}' },
  { type: 'think', label: 'Agent Reasons', content: 'Two critical, internet-facing vulnerabilities confirmed in our environment — both actively exploited in the wild. CVE-2024-3400 in the datacenter firewall is the top priority. ConnectWise is not in inventory — no action needed.' },
  { type: 'answer', label: 'Finding', content: '🎯 Sprint priority (3 of 52 require urgent action):\n\n1. EMERGENCY — CVE-2024-3400 in PA-DC-01\n   CVSS 10.0 · Actively exploited · Internet-facing datacenter firewall\n   → Patch within 24 hours\n\n2. URGENT — CVE-2024-21762 in FW-EDGE-01, FW-EDGE-02\n   CVSS 9.8 · Actively exploited · Edge firewalls\n   → Patch within 48 hours\n\n3. NOT APPLICABLE — CVE-2024-1709 (ConnectWise not in inventory)\n\nRemaining 49 findings: schedule across next 3 sprints ranked by CVSS + internet exposure.' },
];

// ── Tab config ────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'anatomy', label: 'The Agent Loop',     glyph: '◎', desc: 'How agents think and act' },
  { id: 'triage',  label: 'Alert Triage',       glyph: '⚑', desc: 'Account compromise investigation' },
  { id: 'breach',  label: 'Breach Responder',   glyph: '◈', desc: 'Ransomware scope & containment' },
  { id: 'patch',   label: 'Patch Advisor',      glyph: '◇', desc: 'Vulnerability prioritisation' },
] as const;

type TabId = typeof TABS[number]['id'];

// ── View ──────────────────────────────────────────────────────────────────────

export const AgenticAIView = ({ setView }: AgenticAIViewProps) => {
  const [activeTab, setActiveTab] = useState<TabId>('anatomy');
  const active = TABS.find(t => t.id === activeTab)!;

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['Agentic AI']} setView={setView} />

      <div className="px-12 pt-12 pb-8 border-b border-studio-rule" style={{ background: '#5d5045' }}>
        <div className="font-studio-mono text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Field notes · not yet a course
        </div>
        <h1 className="font-studio-display text-[52px] font-normal tracking-[-1px] text-white leading-[1.0] mb-3">
          Agentic AI
        </h1>
        <p className="font-studio-serif italic text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
          Tools, memory, the loop. A working developer's tour of why agents fail in production — and three live scenarios.
        </p>
      </div>

      <div className="px-12 pt-7 pb-0 border-b border-studio-rule bg-studio-paper">
        <div className="flex gap-0">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-3 font-studio-sans text-[13.5px] border-b-2 transition-all duration-100 whitespace-nowrap -mb-px"
                style={isActive
                  ? { borderBottomColor: '#5d5045', color: '#1d1916', fontWeight: 500 }
                  : { borderBottomColor: 'transparent', color: '#8c8273' }}
              >
                <span className="font-studio-serif text-[15px]">{tab.glyph}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-12 py-10">
        {activeTab !== 'anatomy' && (
          <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px] mb-5 uppercase">{active.desc}</div>
        )}
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-8">
          {activeTab === 'anatomy' && <AgentAnatomy />}
          {activeTab === 'triage'  && <AgentScenario trigger='47 failed logins then successful authentication from Russia — user: j.chen@company.com' steps={ALERT_TRIAGE} />}
          {activeTab === 'breach'  && <AgentScenario trigger='Ransomware indicators on HOST-MFG-07 — files renamed with .enc extension. OT environment.' steps={BREACH_RESPONDER} />}
          {activeTab === 'patch'   && <AgentScenario trigger='Monthly vulnerability scan complete — 52 findings in production. Prioritise for this sprint.' steps={PATCH_ADVISOR} />}
        </div>
      </div>

      <StudioFooter />
    </div>
  );
};
