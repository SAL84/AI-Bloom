import type { CourseModule } from '../../types/course';

const m4: CourseModule = {
  id: 'm4',
  title: 'AI in the Security Stack',
  icon: '🛡️',
  summary: 'Where AI actually lives in modern security tools — separating real capability from marketing.',
  lessons: [
    {
      id: 'm4l0',
      title: 'From SOAR to Agentic SOC',
      diagram: 'SOAREvolution',
      slides: [
        { heading: 'The SOAR Era: Four Pain Points Still Paying Maintenance On', body: '(1) Connector tax — every tool needs a vendor- or customer-built integration, versioned and broken on each API change, owned by your SOAR team. (2) Playbook brittleness — hard-coded if/then logic, every workflow needs an author, edge cases the author did not anticipate become incidents. (3) Console fragmentation — L1 analysts pivot through 6-10 UIs per investigation; tribal knowledge of where things live becomes a hiring requirement. (4) Per-product copilots — even AI-augmented tools force analysts to go to each product to invoke its assistant. AI without orchestration is just better search.' },
        { heading: 'The Agentic SOC: Four Wins', body: '(1) MCP collapses connectors — vendor ships one MCP server, every agent uses it, integration tax moves off your team. (2) Reasoning replaces playbooks — agent decides tool sequence per case, no flowchart from 2024 to break in 2026. (3) One UX, every tool — analyst stops navigating, orchestrator delegates, investigation goes from minutes to seconds. (4) Agent Identity as the new IAM — every action attributable to a unique cryptographic ID, audit trail by default, not by integration.' },
        { heading: 'The Architecture Shift', body: 'Before: Analyst → SIEM → EDR → IAM → Threat Intel → SOAR. Context loss at every hop. No shared state. Brittle connectors gluing it together. After: Analyst → Orchestrator → MCP bus → fans out simultaneously to SecOps, GTI, IAM, EDR. The orchestrator reasons, delegates, and synthesizes. No playbook authored. Agents call agents, humans approve outcomes. The investigation goes from a multi-tool pivot sequence to a single conversation.' },
        { heading: 'Why This Changes the Sales Conversation', body: 'Do not position Google SecOps as another SIEM. Position Google Cloud as the agent control plane. The customer is buying an operating model change, not a product swap. Discovery question that opens this: "How much engineering headcount do you carry just to maintain SOAR connectors and playbooks?" Most customers have never been asked this directly — and the answer is usually larger than they want to admit.' }
      ]
    },
    {
      id: 'm4l1',
      title: 'The SOC AI Architecture',
      diagram: 'SOCArch',
      slides: [
        { heading: 'Two Layers of AI', body: 'Modern SOC tools have two AI layers: classical ML for detection (anomaly, UEBA, malware classifiers, BEC) and GenAI on top for narrative, summarization, and reasoning. The base detection is still classical ML; the GenAI sits above translating signal into analyst-friendly language.' },
        { heading: 'Hype Watch', body: 'AI-powered detection sometimes means we have a few ML models for one use case. Push prospects to ask: which detections are AI-driven? What is the false positive rate vs. the previous rules engine? Can you show me a model card or evaluation methodology?' }
      ]
    },
    {
      id: 'm4l2',
      title: 'SIEM and XDR',
      diagram: 'SIEMXDRArch',
      slides: [
        { heading: 'Real Use', body: 'Anomaly detection (statistical + ML), entity behavior analytics, alert correlation, automated triage summarization, natural-language-to-query translation (NL to KQL, SPL, UDM). Detection authoring assist — where the analyst describes a detection in plain English and the system drafts the rule — is increasingly mature.' },
        { heading: 'Hype Watch: SIEM/XDR Edition', body: 'Three claims to probe: (1) "AI-powered correlation" often means sequential rule evaluation with ML anomaly scoring as an add-on — ask which correlation steps involve learned models vs. written rules. (2) "Natural language to query" is real but vendor demos use vendor-crafted schemas; always test against the customer\'s own field names and log sources before claiming parity. (3) "AI-driven alert reduction" — push for reduction methodology: is it suppression, deduplication, or genuine ML triage? Each has a very different false-negative risk profile.' },
        { heading: 'The Evaluation Framework', body: 'When a customer is evaluating SIEM/XDR AI claims, suggest this framework: (1) Show me a detection you wrote with AI assist vs. without — what was the time difference? (2) Run me through the last false negative your rules missed — would the ML layer have caught it? (3) What is your labeling process for the ML models, and how often are they retrained? These questions separate platforms with real ML investment from those with ML branding on rule engines.' }
      ]
    },
    {
      id: 'm4l3',
      title: 'EDR and Behavioral Analysis',
      diagram: 'EDRBehavioral',
      slides: [
        { heading: 'Real Use', body: 'Process tree analysis, behavioral clustering, novel malware detection via DL classifiers, ransomware behavior detection, command-line argument analysis. Mature, embedded, often invisible to the user.' },
        { heading: 'The GenAI Layer on Top', body: 'Newer: LLM-driven incident summarization, root cause narratives, response recommendations. The base detection is still classical ML; the GenAI sits on top translating signal into analyst-friendly language. This is a useful pattern to recognize across the whole modern security stack.' }
      ]
    },
    {
      id: 'm4l4',
      title: 'Email and Identity Security',
      diagram: 'EmailIdentity',
      slides: [
        { heading: 'Email Security', body: 'BEC detection has been ML-powered for years — writing-style analysis, relationship graphs, lookalike domain detection. GenAI is adding payload analysis (does this URL landing page look like a credential harvester?) and conversation-aware phishing detection that reads thread history.' },
        { heading: 'Identity and ITDR', body: 'Behavioral baselines for users and service accounts, peer-group analysis, lateral movement detection. Identity Threat Detection and Response (ITDR) increasingly uses AI across IdP logs. Non-human identity (NHI) coverage — service accounts, API keys, machine identities — is a 2026 priority area.' }
      ]
    },
    {
      id: 'm4l5',
      title: 'SOC Copilots and Autonomous Triage',
      diagram: 'SOCCopilots',
      slides: [
        { heading: 'Where We Actually Are', body: 'SOC copilots (chat-style assistants over your security data) are mature. Autonomous Tier-1 triage — agent receives alert, enriches, decides escalate/close — is shipping in production now. Multi-step investigation agents that pivot across systems are the 2026 frontier.' },
        { heading: 'The Honest Numbers', body: 'Customers are reporting real reductions in time-to-investigate (often 30 minutes to minutes for routine alerts). The wins are largest in high-volume, low-judgment work: phishing triage, basic IOC enrichment, alert deduplication. Complex investigations still need humans driving.' },
        { heading: 'Prospect Activation Signals', body: 'A prospect is ready to move from copilot to autonomous triage when: (1) they have a measurable Tier-1 backlog (>500 alerts/day unreviewed), (2) they have defined escalation criteria in writing (even informally), (3) they have an analyst review process for closed alerts — even weekly. Without (2) and (3), autonomous close decisions have nowhere to land organizationally. Selling autonomy to a SOC that has not defined its own escalation criteria sets up a failed pilot.' },
        { heading: 'The Copilot-to-Agent Progression', body: 'Phase 1: copilot assists analysts — chat over SIEM, summarization, NL-to-query. Analysts stay fully in loop. Phase 2: agent pre-investigates — enrichment, correlated context, and a recommendation ready before analyst opens the case. Analyst approves or overrides. Phase 3: agent closes — low-confidence or high-volume routine alerts auto-closed with full audit trail; analyst reviews a daily sample. Each phase has clear rollback: you can shrink autonomy scope at any time. This progression framing helps CISOs approve initial deployment without committing to Phase 3 outcomes.' }
      ]
    },
    {
      id: 'm4l6',
      title: 'Threat Intelligence and Hunting',
      diagram: 'ThreatIntelHunting',
      slides: [
        { heading: 'TI Enrichment', body: 'AI-powered enrichment of indicators with context, attribution likelihood, campaign linking. Natural-language querying of TI graphs has become standard. Underrated: AI-summarized briefings on emerging threats tailored to your environment.' },
        { heading: 'Threat Hunting', body: 'Hypothesis generation from MITRE ATT&CK, query suggestions, anomaly surfacing. Newest wave: agentic hunting — agent generates hypotheses, runs queries, follows leads, reports findings.' },
        { heading: 'How Agentic Hunting Works End-to-End', body: 'Step 1: hunter or agent selects an ATT&CK technique or actor TTP as starting hypothesis. Step 2: agent generates SIEM queries targeting that behavior. Step 3: agent runs queries, evaluates results, and decides whether evidence supports the hypothesis. Step 4: if promising, agent pivots — following lateral movement chains, correlating timestamps, enriching IPs and hashes. Step 5: agent writes a structured hunt report with findings, evidence links, and recommended follow-up detections. What changes with AI: steps 2-4 that previously required 2-4 hours of senior analyst time now take minutes — and can run in parallel across multiple hypotheses.' },
        { heading: 'Making the TI Case to Prospects', body: 'The undervalued TI conversation: ask how analysts currently stay current on threat actor TTPs. Common answer: weekly briefings, ad hoc news monitoring, hoping the SIEM vendor updates detections. The AI-powered answer: environment-specific threat briefings that cross-reference your exposed infrastructure, your sector\'s current threat actors, and your existing detection coverage gaps — generated daily. The delta between "generic threat intel" and "TI contextualized to your environment" is where the conversation opens.' }
      ]
    },
    {
      id: 'm4l7',
      title: 'AI Data Governance: What Every CISO Needs to Hear',
      diagram: 'DataGovernance',
      slides: [
        { heading: 'The Three Trust Prerequisites', body: 'Before any CISO approves an AI deployment in a security context, three questions must be answered credibly: (1) Does my data train the model? (2) Who can access my data within the platform — is my tenant truly isolated? (3) Where does my data live, and can I control it? These are not compliance questions — they are trust prerequisites. An SE who cannot answer all three will not get past a security-mature buyer. Prepare these answers before any CISO-level meeting.' },
        { heading: 'Training Data Policies', body: 'The core fear: that prompts and security data sent to an AI service improve the base model, potentially leaking sensitive context to other customers. The enterprise answer: Google SecOps, Gemini Enterprise, and GTI do not use customer data to train base models under enterprise agreements — this is contractual, not just a policy statement. Know the tier distinction: consumer-grade products may have different terms. Always confirm which tier the customer is licensed under. When a CISO asks, the answer is: "Under your enterprise agreement, your prompts and data are not used to train Google models. Here is the contract language."' },
        { heading: 'Tenant Isolation and Encryption Controls', body: 'VPC Service Controls (VPC-SC): a security perimeter around Google Cloud services that prevents data exfiltration — restricts what can move in or out of the customer project boundary even if credentials are compromised. Customer-Managed Encryption Keys (CMEK): the customer controls the encryption keys for data at rest. If they revoke the key, Google cannot access the data — full customer sovereignty. Data residency: customers choose the region where data is stored and processed. Critical for EU customers under GDPR, and for regulated industries in financial services, healthcare, and government. These three controls together answer the "our data is too sensitive" objection with architecture, not assurances.' },
        { heading: 'Model Armor and Runtime Governance', body: 'Model Armor intercepts traffic between users or agents and the model — screening inputs for prompt injection attempts, DLP violations, and harmful content before they reach the model context. For agentic deployments, Model Armor can be applied at the Agent Gateway level, covering all agent traffic across the fleet without modifying individual agent code. Discovery question: "Do you have any controls today on what enters your AI prompts, or is all input reaching the model unfiltered?" Most customers in early deployments have no runtime controls. This question opens the governance conversation and positions Agent Gateway as the enforcement plane.' },
        { heading: 'Positioning Data Governance in the Deal', body: 'Data governance should not be the last slide in a security meeting — it should be the second conversation, right after establishing business pain. Raising it proactively ("before we go further, let me show you how data governance works in this architecture") signals that you are a trusted advisor, not a vendor. It also pre-empts the CISO objection rather than responding to it defensively. Customers who understand the controls before they ask about them are significantly more likely to move to a pilot.' }
      ]
    }
  ],
  quiz: [
    { q: 'What is the core positioning shift when selling Google SecOps vs. a legacy SIEM?', options: ['Lower price per GB of data ingested', 'Google Cloud as the agent control plane — the customer is buying an operating model change, not a product swap', 'More connectors out of the box', 'A faster query engine'], correct: 1 },
    { q: 'In a modern SOC AI architecture, what sits above the classical ML detection layer?', options: ['A second rules engine', 'GenAI for narrative, summarization, and reasoning over the ML signals', 'A SOAR playbook', 'A compliance dashboard'], correct: 1 },
    { q: 'A vendor claims "fully AI-powered detection." Best follow-up question:', options: ['How big is your model?', 'Which detections are AI-driven, and what is your evaluation methodology?', 'What language is it written in?', 'How much GPU does it use?'], correct: 1 },
    { q: 'What makes NHI (non-human identity) a 2026 priority area in identity security?', options: ['Service accounts and API keys are excluded from existing ITDR coverage but carry high lateral movement risk', 'Human accounts are now fully protected', 'NHI refers to a new compliance standard', 'All identity systems now use biometrics'], correct: 0 },
    { q: 'Where are autonomous AI agents producing the largest current wins in the SOC?', options: ['Strategic threat modeling', 'High-volume, low-judgment work like phishing triage and IOC enrichment', 'Replacing CISOs', 'Compliance audits'], correct: 1 },
    { q: 'What changes most when AI is applied to threat hunting?', options: ['Threat actors stop attacking', 'Steps 2-4 (query generation, result evaluation, pivoting) that took 2-4 hours of senior analyst time now take minutes and can run in parallel', 'MITRE ATT&CK is replaced', 'Hunting becomes fully automated with no analyst input'], correct: 1 },
    { q: 'In a modern XDR, the GenAI layer typically:', options: ['Replaces all ML detection', 'Sits on top of classical ML, translating signal into narratives and recommendations', 'Does the actual malware classification', 'Is purely cosmetic'], correct: 1 },
    { q: 'Which three architectural controls answer the "our data is too sensitive" CISO objection?', options: ['Firewall, VPN, and MFA', 'VPC Service Controls, Customer-Managed Encryption Keys, and data residency', 'SOC 2, ISO 27001, and GDPR', 'Rate limiting, DLP, and WAF'], correct: 1 }
  ]
};

export default m4;
