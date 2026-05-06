import type { CourseModule } from '../../types/course';

const m4: CourseModule = {
  id: 'm4',
  title: 'AI in the Security Stack',
  icon: '🛡️',
  summary: 'Where AI actually lives in modern security tools — separating real capability from marketing.',
  lessons: [
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
      slides: [
        { heading: 'Real Use', body: 'Anomaly detection (statistical + ML), entity behavior analytics, alert correlation, automated triage summarization, natural-language-to-query translation (NL to KQL, SPL, UDM). Detection authoring assist — where the analyst describes a detection in plain English and the system drafts the rule — is increasingly mature.' },
        { heading: 'Hype Watch', body: 'AI-powered detection sometimes means we have a few ML models for one use case. Push prospects to ask: which detections are AI-driven? What is the false positive rate vs. the previous rules engine? Can you show me a model card or evaluation methodology?' }
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
      slides: [
        { heading: 'Where We Actually Are', body: 'SOC copilots (chat-style assistants over your security data) are mature. Autonomous Tier-1 triage — agent receives alert, enriches, decides escalate/close — is shipping in production now. Multi-step investigation agents that pivot across systems are the 2026 frontier.' },
        { heading: 'The Honest Numbers', body: 'Customers are reporting real reductions in time-to-investigate (often 30 minutes to minutes for routine alerts). The wins are largest in high-volume, low-judgment work: phishing triage, basic IOC enrichment, alert deduplication. Complex investigations still need humans driving.' }
      ]
    },
    {
      id: 'm4l6',
      title: 'Threat Intelligence and Hunting',
      slides: [
        { heading: 'TI Enrichment', body: 'AI-powered enrichment of indicators with context, attribution likelihood, campaign linking. Natural-language querying of TI graphs has become standard. Underrated: AI-summarized briefings on emerging threats tailored to your environment.' },
        { heading: 'Threat Hunting', body: 'Hypothesis generation from MITRE ATT&CK, query suggestions, anomaly surfacing. Newest wave: agentic hunting — agent generates hypotheses, runs queries, follows leads, reports findings. Currently early but advancing fast.' }
      ]
    }
  ],
  quiz: [
    { q: 'A vendor claims "fully AI-powered detection." Best follow-up question:', options: ['How big is your model?', 'Which detections are AI-driven, and what is your evaluation methodology?', 'What language is it written in?', 'How much GPU does it use?'], correct: 1 },
    { q: 'Where are autonomous AI agents producing the largest current wins in the SOC?', options: ['Strategic threat modeling', 'High-volume, low-judgment work like phishing triage and IOC enrichment', 'Replacing CISOs', 'Compliance audits'], correct: 1 },
    { q: 'In a modern XDR, the GenAI layer typically:', options: ['Replaces all ML detection', 'Sits on top of classical ML, translating signal into narratives and recommendations', 'Does the actual malware classification', 'Is purely cosmetic'], correct: 1 }
  ]
};

export default m4;
