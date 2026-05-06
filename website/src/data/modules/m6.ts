import type { CourseModule } from '../../types/course';

const m6: CourseModule = {
  id: 'm6',
  title: "Google Deep-Dive: AI & Security Portfolio",
  icon: 'G',
  summary: 'Google-aligned positioning with current product names, capabilities, and competitive context.',
  lessons: [
    {
      id: 'm6l1',
      title: "Google's AI Stack",
      diagram: 'GoogleStack',
      slides: [
        { heading: 'Vertex AI → Gemini Enterprise Agent Platform', body: 'Announced at Cloud Next 2026 (April), Vertex AI evolved into the Gemini Enterprise Agent Platform — a unified platform for building, scaling, governing, and optimizing agents. It retains the model selection, training, and tuning capabilities of Vertex AI and adds first-class agent integration, orchestration, DevOps, and security controls.' },
        { heading: 'Gemini Enterprise (the App)', body: 'Google flagship agentic productivity application — the front door to AI in the workplace. Connects to Drive, OneDrive, SharePoint, HubSpot, Jira, Notion, Linear and more. Includes Model Armor for malicious-input screening, VPC-SC, CMEK, and access controls. Editions: Business, Standard, Plus, Frontline.' },
        { heading: 'Agent Development Kit (ADK)', body: "Google open framework for building agents — used by Comcast, Geotab, L'Oréal, and others to build production agents that work across frameworks. Pairs with Agent Engine for managed runtime." }
      ]
    },
    {
      id: 'm6l2',
      title: 'Google Agent Infrastructure',
      slides: [
        { heading: 'Agent Registry and Agent Gateway', body: 'Agent Registry is a central library indexing every internal agent, tool, and skill — the agentic equivalent of a service catalog. Agent Gateway is the management plane: enforces policies for all agent-to-agent and agent-to-tool connections, supports MCP and A2A protocols.' },
        { heading: 'Agent Identity', body: 'Each agent gets a SPIFFE-based identity, making AI agents first-class citizens in identity governance — distinct from non-human identities (NHIs) like service accounts. This matters because agents are autonomous and goal-oriented in a way NHIs are not.' },
        { heading: 'Memory Bank and Sessions', body: 'Persistent context across multi-day agent workflows. Powerful for continuity, but expands the attack surface — context becomes a long-lived asset that needs governance.' }
      ]
    },
    {
      id: 'm6l3',
      title: 'Google SecOps Architecture',
      diagram: 'GoogleSecOps',
      slides: [
        { heading: 'What It Is', body: 'Google cloud-native security operations platform — the unified successor to Chronicle SIEM and the Siemplify-derived SOAR. Three packages: Standard, Enterprise, Enterprise Plus. The Google Unified Security bundle includes Enterprise Plus and more.' },
        { heading: 'Core Capabilities', body: '12 months of hot data retention, Unified Data Model (UDM), 700+ parsers, 300+ SOAR integrations, YARA-L 2.0 detection language, curated detections maintained by Google researchers, and integrated Mandiant threat intelligence.' },
        { heading: 'Gemini in Security Operations', body: 'Natural language search across UDM, AI-generated case summaries, playbook generation from natural language, detection rule authoring assistance, context-aware analyst chat. Standard in Enterprise tier and above.' }
      ]
    },
    {
      id: 'm6l4',
      title: 'The Three SecOps Agents',
      diagram: 'SecOpsAgents',
      slides: [
        { heading: 'Triage and Investigation Agent (GA)', body: 'Currently GA in Google SecOps. Per Google, the agent has processed over 5M alerts in its first year and reduced typical 30-minute analyses to roughly 60 seconds on routine cases. This is the agent with the strongest production track record — useful as a lead reference, but pair it with customer-specific stats from your own deployments when you have them.' },
        { heading: 'Threat Hunting Agent (Private Preview)', body: 'Proactive hunting for novel attack patterns and stealthy adversary behaviors that bypass traditional defenses. Generates hypotheses, runs queries against UDM, follows leads, and reports findings. Announced at Cloud Next 26. Positioning angle: shifts hunting from a senior-analyst-only activity to something the broader team can drive.' },
        { heading: 'Detection Engineering Agent (Private Preview)', body: 'Generates and evaluates detection rules. Includes new MCP tools: generate_threat_detection_opportunity, generate_rules, generate_synthetic_events, evaluate_rule_coverage. Currently restricted to private preview. Positioning angle: addresses the chronic detection-engineering bottleneck most SOCs hit at scale.' },
        { heading: 'Why the Three Together Matter', body: 'These agents collectively cover triage (reactive), hunting (proactive), and detection engineering (preventive) — the three core SOC functions. Most competitors have shipped one agent; Google has shipped or previewed three with distinct charters. That is the differentiated story, not any single statistic.' }
      ]
    },
    {
      id: 'm6l5',
      title: 'GTI, SCC, and Wiz',
      slides: [
        { heading: 'Google Threat Intelligence (GTI)', body: 'The post-acquisition unification of Mandiant threat intelligence and VirusTotal. Provides actor profiles, campaign tracking, IOC enrichment, vulnerability intelligence (with MVE IDs), and dark web monitoring. New dark web intel feature analyzes millions of daily external events; Google reports 98% accuracy in internal tests.' },
        { heading: 'Mandiant Services Layer', body: 'On top of GTI products, Mandiant Consulting and Managed Defense remain key — Incident Response, Red Team, and 24/7 managed detection backed by frontline expertise. This is a Google differentiator most pure-play platforms cannot match.' },
        { heading: 'Security Command Center (SCC)', body: 'Google native CNAPP — posture management, threat detection across GCP, vulnerability management. Now powering the Agent Security Dashboard, which unifies threat detection and risk analysis for the agent fleet within GCP environments.' },
        { heading: 'Wiz: Multi-Cloud Reach', body: 'Wiz (acquired 2025) extends Google cloud security across AWS, Azure, GCP, and Oracle Cloud — addressing the multi-cloud reality most enterprises live in. Strong CNAPP posture and risk graph capabilities. Positioning angle: this is how Google answers "what about our AWS workloads?" without conceding the deal.' },
        { heading: 'Wiz AI-Application Protection Platform (AI-APP)', body: 'The AI-specific layer of Wiz. Embeds AI security directly into developer workflows: real-time vulnerability scanning, AI-generated code security, dynamic AI Bill of Materials (AIBOM), automated remediation. Integrates with Lovable, IDEs, and version control. This is a relatively new capability area where Google has a meaningful lead — most competitors do not have a comparable AI-specific application security story.' },
        { heading: 'Agent-Specific Controls', body: 'Agent Threat Detection (reverse shells, malicious IPs), Agent Anomaly Detection (LLM-as-judge for unusual reasoning patterns), Agent Compliance, Agent Policy. These plug into the Agent Security Dashboard and form the foundation of the agentic security pitch.' }
      ]
    },
    {
      id: 'm6l6',
      title: 'Competitive Landscape',
      diagram: 'CompetitiveQuadrant',
      slides: [
        { heading: 'Microsoft Security Copilot', body: 'Tightest integration with Microsoft 365 and Sentinel. Strongest position in Microsoft-shop accounts. Where Google wins: deeper threat intelligence (Mandiant), stronger SIEM data engine (UDM, retention economics), and arguably stronger underlying AI platform for agentic work. Where Microsoft wins: M365 integration depth and existing footprint.' },
        { heading: 'CrowdStrike Charlotte AI', body: 'Strong endpoint-anchored AI assistant deeply tied to Falcon. Wins on EDR-led conversations. Google counter: Google SecOps as the broader analytics platform, plus Mandiant TI depth and Google own AI platform investments.' },
        { heading: 'Palo Alto Precision AI', body: 'Cross-portfolio AI brand spanning XSIAM, Prisma, and Cortex. Strongest position in Palo-standardized accounts. Google counter: open data model and ecosystem-friendlier integration, multi-vendor by design rather than portfolio-locked.' },
        { heading: 'When to Concede vs Compete', body: 'Concede gracefully on entrenched M365 / Falcon / Cortex shops where the customer values consolidation over capability. Compete hard where the customer values: best-of-breed TI, scale and retention economics, multi-cloud reach, or where they are building agentic security futures and value Google AI platform depth.' }
      ]
    },
    {
      id: 'm6l7',
      title: 'Talk Tracks',
      slides: [
        { heading: 'Why Google over Microsoft', body: 'Suggested framing: "Microsoft is excellent if your security center of gravity is M365 and your data lives in Sentinel. Where Google differentiates: Mandiant frontline threat intelligence is the data the rest of the industry consumes. Google SecOps offers 12 months of hot retention at predictable economics, and Google has shipped or previewed three production SecOps agents covering triage, hunting, and detection engineering."' },
        { heading: 'Is this just AI hype', body: 'Suggested framing: "Fair pushback. The Triage and Investigation agent is in production today — Google reports 5M+ alerts processed in its first year and 30-minute analyses reduced to about a minute. That is a public reference point, not aspirational. Happy to set up a customer reference call to validate against a similar environment."' },
        { heading: 'What about lock-in', body: 'Suggested framing: "Google SecOps uses an open Unified Data Model, supports MCP for agent integrations, and Wiz extends multi-cloud reach. Compared to portfolio-lock plays from competitors, Google is investing in open protocols — A2A is open, MCP is open, agent identity is SPIFFE-based. Lock-in is a fair concern; the architecture specifically addresses it."' },
        { heading: 'Why Talk Tracks Are Suggested, Not Scripted', body: 'Adapt these to your voice and to what you actually know about the prospect. Verbatim recital sounds rehearsed. The point is to internalize the structure: acknowledge the competitor strength, name the Google differentiator with evidence, offer a next step. Same skeleton works for any competitive conversation.' }
      ]
    }
  ],
  quiz: [
    { q: "What did Vertex AI evolve into at Cloud Next '26?", options: ['Vertex AI 2.0', 'Gemini Enterprise Agent Platform', 'Google AI Studio', 'Agent Cloud'], correct: 1 },
    { q: 'Which Google SecOps agent is currently GA (not just preview)?', options: ['Threat Hunting Agent', 'Detection Engineering Agent', 'Triage & Investigation Agent', 'None — all are preview'], correct: 2 },
    { q: 'Google Threat Intelligence is the unification of:', options: ['Chronicle and Siemplify', 'Mandiant and VirusTotal', 'Wiz and SCC', 'Gemini and Vertex'], correct: 1 },
    { q: 'A prospect heavily standardized on M365 and Sentinel asks why Google. Best response:', options: ['Microsoft is bad', 'Lead with Mandiant TI depth, SecOps retention economics, and agentic security leadership — concede the M365 integration ground', 'Refuse to discuss competitors', 'Promise to match every Microsoft feature'], correct: 1 }
  ]
};

export default m6;
