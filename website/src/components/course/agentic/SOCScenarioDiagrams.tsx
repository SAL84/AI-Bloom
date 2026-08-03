import React from 'react';
import { AgentScenario } from './AgentScenario';
import { ALERT_TRIAGE, BREACH_RESPONDER, PATCH_ADVISOR } from './soc-scenarios';

// Prop-free wrappers so these interactive scenarios can be registered in
// DIAGRAM_REGISTRY and embedded directly in the cybersecurity lessons they
// illustrate, rather than sitting on the general-audience Agentic AI page.

export const SOCTriageScenarioDiagram = () => (
  <AgentScenario
    trigger="47 failed logins then successful authentication from an unexpected country — user: j.chen@company.com"
    steps={ALERT_TRIAGE}
  />
);

export const SOCBreachScenarioDiagram = () => (
  <AgentScenario
    trigger="Ransomware indicators on HOST-MFG-07 — files renamed with .enc extension. OT environment."
    steps={BREACH_RESPONDER}
  />
);

export const SOCPatchScenarioDiagram = () => (
  <AgentScenario
    trigger="Monthly vulnerability scan complete — 52 findings in production. Prioritise for this sprint."
    steps={PATCH_ADVISOR}
  />
);
