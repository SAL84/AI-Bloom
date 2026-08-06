import type { CourseModule } from '../../types/course';

const m4: CourseModule = {
  id: 'm4',
  title: 'AI in the Security Stack',
  icon: 'shield',
  summary: 'Where AI actually lives in modern security tools — separating real capability from marketing.',
  lessons: [
    {
      id: 'm4l0',
      title: 'From SOAR to Agentic SOC',
      diagram: 'SOAREvolution',
      slides: [
        { heading: 'The SOAR Era: Four Pain Points Still Paying Maintenance On', body: '(1) Connector tax — every tool needs a vendor- or customer-built integration, versioned and broken on each API change, owned by your SOAR team. (2) Playbook brittleness — hard-coded if/then logic, every workflow needs an author, edge cases the author did not anticipate become incidents. (3) Console fragmentation — L1 analysts pivot through 6-10 UIs per investigation; tribal knowledge of where things live becomes a hiring requirement. (4) Per-product copilots — even AI-augmented tools force analysts to go to each product to invoke its assistant. AI without orchestration is just better search.' },
        { heading: 'The Agentic SOC: Four Wins', body: '(1) MCP collapses connectors — vendor ships one MCP server, every agent uses it, integration tax moves off your team. (2) Reasoning replaces playbooks — agent decides tool sequence per case, no flowchart from 2024 to break in 2026. (3) One UX, every tool — analyst stops navigating, orchestrator delegates, investigation goes from minutes to seconds. (4) Agent Identity as the new IAM — every action attributable to a unique cryptographic ID, audit trail by default, not by integration.' },
        { heading: 'The Architecture Shift', body: 'Before: Analyst → SIEM → EDR → IAM → Threat Intel → SOAR. Context loss at every hop. No shared state. Brittle connectors gluing it together. After: Analyst → Orchestrator → MCP bus → fans out simultaneously to SIEM, threat intel, IAM, EDR. The orchestrator reasons, delegates, and synthesizes. No playbook authored. Agents call agents, humans approve outcomes. The investigation goes from a multi-tool pivot sequence to a single conversation.' },
        { heading: 'Why This Changes the Operating Model', body: 'Do not evaluate an agentic SOC platform as just another SIEM. Evaluate it as an agent control plane. The shift is an operating model change, not a product swap. A question that makes the cost of the status quo concrete: "How much engineering headcount do we carry just to maintain SOAR connectors and playbooks?" Most teams have never asked this directly — and the answer is usually larger than anyone wants to admit.' }
      ]
    },
    {
      id: 'm4l1',
      title: 'The SOC AI Architecture',
      diagram: 'SOCArch',
      slides: [
        { heading: 'Two Layers of AI', body: 'Modern SOC tools have two AI layers: classical ML for detection (anomaly, UEBA, malware classifiers, BEC) and GenAI on top for narrative, summarization, and reasoning. The base detection is still classical ML; the GenAI sits above translating signal into analyst-friendly language.' },
        { heading: 'Hype Watch', body: 'AI-powered detection sometimes means we have a few ML models for one use case. When you evaluate, ask: which detections are AI-driven? What is the false positive rate vs. the previous rules engine? Can you show me a model card or evaluation methodology?' }
      ]
    },
    {
      id: 'm4l2',
      title: 'SIEM and XDR',
      diagram: 'SIEMXDRArch',
      slides: [
        { heading: 'Real Use', body: 'Anomaly detection (statistical + ML), entity behavior analytics, alert correlation, automated triage summarization, natural-language-to-query translation (NL to KQL, SPL, UDM). Detection authoring assist — where the analyst describes a detection in plain English and the system drafts the rule — is now a standard feature on major platforms.' },
        { heading: 'Hype Watch: SIEM/XDR Edition', body: 'Three claims to probe: (1) "AI-powered correlation" often means sequential rule evaluation with ML anomaly scoring as an add-on — ask which correlation steps involve learned models vs. written rules. (2) "Natural language to query" is real but vendor demos use vendor-crafted schemas; always test against your own field names and log sources before assuming parity. (3) "AI-driven alert reduction" — push for reduction methodology: is it suppression, deduplication, or genuine ML triage? Each has a very different false-negative risk profile.' },
        { heading: 'The Evaluation Framework', body: 'When evaluating SIEM/XDR AI claims, use this framework: (1) Show me a detection you wrote with AI assist vs. without — what was the time difference? (2) Run me through the last false negative your rules missed — would the ML layer have caught it? (3) What is your labeling process for the ML models, and how often are they retrained? These questions separate platforms with real ML investment from those with ML branding on rule engines.' }
      ]
    },
    {
      id: 'm4l3',
      extraDiagram: 'SOCBreachScenario',
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
        { heading: 'Identity and ITDR', body: 'Behavioral baselines for users and service accounts, peer-group analysis, lateral movement detection. Identity Threat Detection and Response (ITDR) platforms now apply AI across IdP logs as standard. Non-human identity (NHI) coverage — service accounts, API keys, machine identities — is a 2026 priority area.' }
      ]
    },
    {
      id: 'm4l5',
      extraDiagram: 'SOCTriageScenario',
      title: 'SOC Copilots and Autonomous Triage',
      diagram: 'SOCCopilots',
      slides: [
        { heading: 'Where We Actually Are', body: 'SOC copilots (chat-style assistants over your security data) are mature. Autonomous Tier-1 triage — agent receives alert, enriches, decides escalate/close — is shipping in production now. Multi-step investigation agents that pivot across systems are the 2026 frontier.' },
        { heading: 'The Honest Numbers', body: 'Teams report real reductions in time-to-investigate (often 30 minutes to minutes for routine alerts). The wins are largest in high-volume, low-judgment work: phishing triage, basic IOC enrichment, alert deduplication. Complex investigations still need humans driving.' },
        { heading: 'Readiness Signals for Autonomous Triage', body: 'A SOC is ready to move from copilot to autonomous triage when: (1) it has a measurable Tier-1 backlog (>500 alerts/day unreviewed), (2) it has defined escalation criteria in writing (even informally), (3) it has an analyst review process for closed alerts — even weekly. Without (2) and (3), autonomous close decisions have nowhere to land organizationally. Deploying autonomy in a SOC that has not defined its own escalation criteria sets up a failed pilot.' },
        { heading: 'The Copilot-to-Agent Progression', body: 'Phase 1: copilot assists analysts — chat over SIEM, summarization, NL-to-query. Analysts stay fully in loop. Phase 2: agent pre-investigates — enrichment, correlated context, and a recommendation ready before analyst opens the case. Analyst approves or overrides. Phase 3: agent closes — low-confidence or high-volume routine alerts auto-closed with full audit trail; analyst reviews a daily sample. Each phase has clear rollback: you can shrink autonomy scope at any time. This progression framing helps security leadership approve an initial deployment without committing to Phase 3 outcomes.' }
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
        { heading: 'Contextualized TI: The Undervalued Upgrade', body: 'Ask how your analysts currently stay current on threat actor TTPs. Common answer: weekly briefings, ad hoc news monitoring, hoping the SIEM vendor updates detections. The AI-powered answer: environment-specific threat briefings that cross-reference your exposed infrastructure, your sector\'s current threat actors, and your existing detection coverage gaps — generated daily. The delta between "generic threat intel" and "TI contextualized to your environment" is where the real value lies.' }
      ]
    },
    {
      id: 'm4l7',
      title: 'AI Data Governance: What Every CISO Needs to Hear',
      diagram: 'DataGovernance',
      slides: [
        { heading: 'The Three Trust Prerequisites', body: 'Before any CISO approves an AI deployment in a security context, three questions must be answered credibly: (1) Does my data train the model? (2) Who can access my data within the platform — is my tenant truly isolated? (3) Where does my data live, and can I control it? These are not compliance questions — they are trust prerequisites. A vendor who cannot answer all three should not get past a security-mature buyer. Get these answers in writing before any deployment approval.' },
        { heading: 'Training Data Policies', body: 'The core fear: that prompts and security data sent to an AI service improve the base model, potentially leaking sensitive context to other customers. The enterprise answer: major AI platforms do not use customer data to train base models under enterprise agreements — but this must be contractual, not just a policy statement. Know the tier distinction: consumer-grade products may have different terms. Always confirm which tier your organisation is licensed under. The answer a CISO needs is: "Under our enterprise agreement, our prompts and data are not used to train the provider\'s models — and here is the contract language."' },
        { heading: 'Tenant Isolation and Encryption Controls', body: 'VPC service controls: a security perimeter around cloud services that prevents data exfiltration — restricting what can move in or out of your project boundary even if credentials are compromised. Customer-managed encryption keys (CMEK): you control the encryption keys for data at rest. If you revoke the key, the provider cannot access the data — full customer sovereignty. Data residency: you choose the region where data is stored and processed. Critical for EU organisations under GDPR, and for regulated industries in financial services, healthcare, and government. Major cloud AI platforms offer all three; together they answer the "our data is too sensitive" concern with architecture, not assurances.' },
        { heading: 'Runtime Guardrails and Governance', body: 'A model firewall (prompt-level guardrail) intercepts traffic between users or agents and the model — screening inputs for prompt injection attempts, DLP violations, and harmful content before they reach the model context. For agentic deployments, these guardrails can be applied at the agent gateway level, covering all agent traffic across the fleet without modifying individual agent code. Question to ask of your own deployment: "Do we have any controls today on what enters our AI prompts, or is all input reaching the model unfiltered?" Most organisations in early deployments have no runtime controls — this question opens the governance conversation and makes the gateway the natural enforcement plane.' },
        { heading: 'Put Data Governance Second, Not Last', body: 'Data governance should not be the last item in an AI adoption review — it should be the second conversation, right after establishing the business need. Raising it proactively ("before we go further, here is how data governance works in this architecture") builds credibility with security stakeholders and pre-empts the CISO objection rather than answering it defensively. Teams that understand the controls before stakeholders ask about them are significantly more likely to get a pilot approved.' }
      ]
    },
    {
      id: 'm4l8',
      title: 'Three AI Misconceptions That Cost Security Teams',
      playground: 'baserate',
      diagram: 'BaseRate',
      slides: [
        {
          heading: 'Misconception 1 — "More Accuracy = Better Detection"',
          body: 'A vendor says their detector is 99% accurate. Sounds great — until you ask about the base rate. Imagine 100,000 emails per day with 1% carrying real threats (1,000 emails). A 99% accurate detector flags 990 true threats — but also 990 false positives from the clean mail. Precision is just 50%: for every real threat, one false alarm. Alert fatigue is not a workflow problem — it is a base rate problem. When a SOC complains about noise, this is almost always the underlying cause.',
        },
        {
          heading: 'Why Accuracy Headlines Mislead Security Buyers',
          body: 'The base rate fallacy hits security harder than almost any other domain because real threats are rare by definition. A detector that is 99.9% accurate can still flood a SOC with false positives if the attack base rate is 0.01%. The fix is not higher accuracy — it is asking about precision at the actual deployment base rate. Question for any vendor: "What is your current false positive rate, and what is the actual prevalence of the threats you detect?" Vendors who benchmark against artificially high attack densities are hiding this math.',
        },
        {
          heading: 'Misconception 2 — "The AI Understands Our Environment"',
          body: 'A trained model is a frozen set of weights reflecting the world at training time — not your environment, not your threat landscape, not your specific telemetry. It does not "understand" your org. It cannot tell when it is wrong. Confident-sounding wrong answers — including hallucinated IOC context, fabricated CVE summaries, or confidently incorrect incident narratives — are not malfunctions. They are the predictable behaviour of a probabilistic system. Question for any vendor: "How does the model handle gaps in its training — does it signal uncertainty, or does it generate a confident answer regardless?"',
        },
        {
          heading: 'Misconception 3 — "AI Learns From Our Environment Over Time"',
          body: 'Most deployed security AI models are frozen snapshots retrained on a vendor schedule. The threat actor TTPs that emerged last month are not in the model you licensed today. Feedback loops — when they exist — typically feed the next training run, not the live model. In security, stale training data is not just inaccurate — it is a detection gap. Question for any vendor: "What is your retraining cadence, and how quickly does newly observed attacker behaviour make it into the detection model?"',
        },
        {
          heading: 'Turning These Into Evaluation Questions',
          body: 'Three questions for any AI security evaluation. (1) "What is the current false positive rate on your highest-volume alert type, and what is the actual attack prevalence in that category?" — surfaces alert fatigue root cause and opens the precision conversation. (2) "When your AI produces a confident incident narrative that turns out to be wrong, what does that look like operationally?" — surfaces blind trust in AI outputs and makes explainability a requirement. (3) "When a new TTP or campaign emerges, how long before it appears in your detection model?" — surfaces retraining lag and frames freshness as a security risk, not just a product limitation. Vendors who cannot answer (3) with a specific SLA are selling last year\'s threat landscape.',
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI security tools disappoint in predictable ways — and nearly all of it traces to these three misunderstandings. Knowing them helps you ask the right questions before committing to a platform.',
          bullets: [
            'Noisy alerts usually mean the base rate is low, not that the AI is broken — ask about precision, not accuracy',
            'Confident AI answers in a security context still need analyst verification — probabilistic output is not a verdict',
            'Ask any security AI vendor: when was it last retrained and on what recent attack data?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'These three misconceptions are your most powerful displacement tools. Lead with them when a prospect is evaluating competitors on accuracy headlines, complaining about alert fatigue, or asking whether the AI "knows" their environment.',
          bullets: [
            'The base rate calculation done live with a prospect\'s own alert volume is the most effective single discovery move in AI security',
            '"What is your false positive rate?" is a better opener than any product demo — it frames the problem before you position the solution',
            'Retraining cadence is an underused displacement question — most legacy platforms retrain on 6-month or annual cycles',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Building security AI means inheriting all three problems by default. Precision-at-base-rate, uncertainty signalling, and retraining cadence are engineering requirements, not post-deployment tuning.',
          bullets: [
            'Evaluate detection models on precision at your actual deployment base rate — accuracy on balanced test sets is useless for rare-event detection',
            'Build uncertainty output into the model pipeline — confident outputs on out-of-distribution inputs are a security risk, not just an ML problem',
            'Define retraining SLAs before launch: how quickly must new adversary TTPs appear in the model? That number drives your data pipeline requirements',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Security AI evaluations that rely on vendor-supplied accuracy benchmarks are almost always measuring the wrong thing. Reframe every client evaluation around base rate, uncertainty handling, and retraining freshness.',
          bullets: [
            'Require vendors to run the base rate calculation against the client\'s own log volumes — not benchmark datasets',
            'Add retraining cadence and TTP coverage lag to every vendor scorecard as a first-order criterion',
            'Alert fatigue RCA before selecting a platform: if the root cause is base rate, a more accurate model will not fix it',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What is the core shift when moving from a legacy SIEM to an agentic SOC platform?', options: ['Lower price per GB of data ingested', 'More connectors out of the box', 'The cloud platform becomes the agent control plane — an operating model change, not a product swap', 'A faster query engine'], correct: 2 },
    { q: 'In a modern SOC AI architecture, what sits above the classical ML detection layer?', options: ['GenAI for narrative, summarization, and reasoning over the ML signals', 'A second rules engine', 'A SOAR playbook', 'A compliance dashboard'], correct: 0 },
    { q: 'A vendor claims "fully AI-powered detection." Best follow-up question:', options: ['How big is your model?', 'What language is it written in?', 'How much GPU does it use?', 'Which detections are AI-driven, and what is your evaluation methodology?'], correct: 3 },
    { q: 'What makes NHI (non-human identity) a 2026 priority area in identity security?', options: ['Human accounts are now fully protected', 'Service accounts and API keys are excluded from existing ITDR coverage but carry high lateral movement risk', 'NHI refers to a new compliance standard', 'All identity systems now use biometrics'], correct: 1 },
    { q: 'Where are autonomous AI agents producing the largest current wins in the SOC?', options: ['Strategic threat modeling', 'Replacing CISOs', 'High-volume, low-judgment work like phishing triage and IOC enrichment', 'Compliance audits'], correct: 2 },
    { q: 'What changes most when AI is applied to threat hunting?', options: ['Threat actors stop attacking', 'MITRE ATT&CK is replaced', 'Hunting becomes fully automated with no analyst input', 'Steps 2-4 (query generation, result evaluation, pivoting) that took 2-4 hours of senior analyst time now take minutes and can run in parallel'], correct: 3 },
    { q: 'In a modern XDR, the GenAI layer typically:', options: ['Sits on top of classical ML, translating signal into narratives and recommendations', 'Replaces all ML detection', 'Does the actual malware classification', 'Is purely cosmetic'], correct: 0 },
    { q: 'Which three architectural controls answer the "our data is too sensitive" CISO objection?', options: ['SOC 2, ISO 27001, and GDPR', 'VPC Service Controls, Customer-Managed Encryption Keys, and data residency', 'Firewall, VPN, and MFA', 'Rate limiting, DLP, and WAF'], correct: 1 }
  ]
};

export default m4;
