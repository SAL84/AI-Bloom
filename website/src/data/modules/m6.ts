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
        { heading: 'Memory Bank and Sessions', body: 'Persistent context across multi-day agent workflows. Powerful for continuity, but expands the attack surface — context becomes a long-lived asset that needs governance.' },
        { heading: 'How ADK Implements Skills, Subagents, and Hooks', body: 'Google ADK maps directly to the architectural vocabulary from M3: Skills in ADK are packaged, named capabilities registered in Agent Registry — discoverable by any agent with the appropriate identity and permission. Subagents in ADK are agents spawned by an orchestrator agent with scoped goals and explicitly delegated tool access, not inherited permissions. Hooks in ADK are implemented as callbacks attached to the agent pipeline — before_tool_call, after_model_response, before_action — and are the enforcement point for Agent Gateway policies. When you position Agent Gateway, you are positioning the hook infrastructure: the control plane that makes the entire agent fleet governable and auditable. This is where the architecture conversation becomes a security conversation.' }
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
      title: 'The Four SecOps Agents',
      diagram: 'SecOpsAgents',
      slides: [
        { heading: 'Triage and Investigation Agent (GA)', body: 'Currently GA in Google SecOps. Per Google, the agent has processed over 5M alerts in its first year and reduced typical 30-minute analyses to roughly 60 seconds on routine cases. This is the agent with the strongest production track record — useful as a lead reference, but pair it with customer-specific stats from your own deployments when you have them.' },
        { heading: 'Threat Hunting Agent (Private Preview)', body: 'Proactive hunting for novel attack patterns and stealthy adversary behaviors that bypass traditional defenses. Generates hypotheses, runs queries against UDM, follows leads, and reports findings. Announced at Cloud Next 26. Positioning angle: shifts hunting from a senior-analyst-only activity to something the broader team can drive.' },
        { heading: 'Detection Engineering Agent (Private Preview)', body: 'Generates and evaluates detection rules. Includes new MCP tools: generate_threat_detection_opportunity, generate_rules, generate_synthetic_events, evaluate_rule_coverage. Currently restricted to private preview. Positioning angle: addresses the chronic detection-engineering bottleneck most SOCs hit at scale.' },
        { heading: 'Remediation Agent (Announced Cloud Next 26)', body: 'The fourth agent closes the loop from detection to response. Where the Triage agent investigates and the Hunting agent surfaces threats, the Remediation agent takes action — executing response playbooks, coordinating cross-system containment, and closing cases. Announced as part of the Agentic Defense platform at Cloud Next 26. Positioning angle: positions Google as the only vendor with agents covering all four SOC functions end-to-end: triage, hunting, detection engineering, and remediation.' },
        { heading: 'Why the Four Together Matter', body: 'These agents collectively cover triage (reactive), hunting (proactive), detection engineering (preventive), and remediation (responsive) — the full SOC lifecycle in one platform. Most competitors have shipped one agent; Google has shipped or previewed four with distinct charters and clear handoffs between them. That end-to-end coverage is the differentiated story.' }
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
      title: 'Agentic Defense & Open Security Platform',
      slides: [
        { heading: 'What Agentic Defense Is', body: 'Agentic Defense is Google\'s unified cybersecurity platform brand announced at Cloud Next \'26. It combines Google Threat Intelligence, Google SecOps (SIEM + SOAR), and Wiz\'s Cloud and AI Security Platform into one integrated story: detect, prevent, and respond — from code to cloud to runtime, across multicloud, hybrid, and AI environments. The positioning reflects the threat landscape shift: agentic attackers require agentic defenders.' },
        { heading: 'Google\'s Open-Source Security MCP Servers', body: 'Google released an open-source project on GitHub providing production MCP servers for three surfaces: Google SecOps SIEM (search events, get alerts, look up entities, list rules, get IOC matches), Google SecOps SOAR (case management plus integrations for CrowdStrike, Okta, and dozens of other platforms), and Google Threat Intelligence (23 tools for IOC lookups, threat reports, actor profiles). Any MCP-compatible client connects — Cline, Cursor, Roo Code, or custom applications. Auth is handled server-side; clients never touch credentials directly.' },
        { heading: 'What This Enables in Practice', body: 'With the MCP servers running, an analyst can: (1) natural-language query SecOps — "find DNS lookup events from host JamesBrownPC in the last 24 hours" — which the agent converts to YARA-L2 and returns UDM events automatically; (2) cross-surface case analysis — take five SOAR cases, pull underlying entities, enrich in GTI, group by campaign, and generate a structured markdown report — all in a single chat session hitting three APIs; (3) use any frontier model (Gemini, or others) as the reasoning layer without changing the security tooling. This is a working demo story, not a roadmap — the GitHub repo is live.' },
        { heading: 'The SE Positioning Move on Lock-In', body: 'When a customer raises lock-in: "Google\'s MCP server for security is open-source on GitHub. You can connect it to any LLM client — Gemini, GPT, Claude, whatever your organization standardizes on. Auth and API abstraction live server-side. That is not a lock-in architecture — it is the opposite. Competitors\' AI copilots are tightly coupled to their own models and UI. Google\'s approach lets the customer own the AI layer." This is a durable differentiation argument backed by a live artifact they can inspect.' },
        { heading: 'Reference Stat: UC Riverside', body: 'University of California Riverside is running Google SecOps in production and reported a 90% reduction in incident response time — detection-to-resolution from 20 minutes to under 2 minutes. Use this as the production reference for Agentic Defense discussions, especially with education sector or resource-constrained SOC prospects. Always offer to connect prospects to a customer reference rather than relying solely on published stats.' }
      ]
    },
    {
      id: 'm6l7',
      title: 'Competitive Landscape',
      diagram: 'CompetitiveQuadrant',
      slides: [
        { heading: 'The Platform vs Product Divide', body: 'The single most important competitive frame: Google Cloud is the only vendor where security agents run on a general-purpose enterprise agent platform — the same governance, identity, and orchestration layer that covers HR, Finance, and Engineering agents. Microsoft, Palo Alto, and CrowdStrike have security-only agentic stories; their security agents are islands. When a customer asks about AI strategy beyond security, only Google has a unified answer. This is the talk track that shifts the conversation from product comparison to platform evaluation.' },
        { heading: 'Microsoft Security Copilot', body: 'Tightest integration with Microsoft 365 and Sentinel. Strongest position in Microsoft-shop accounts. Where they are vulnerable: MCP support is real but uneven across Defender, Sentinel, and Entra — pressure-test this against current battlecards before quoting specifics. Copilot is tightly coupled to Microsoft models and UI; no unified governance across security and business agents. Where Google wins: Mandiant TI depth, SecOps data engine and retention economics, and a platform that covers the whole enterprise, not just the Microsoft stack.' },
        { heading: 'CrowdStrike Charlotte AI', body: 'Strong endpoint-anchored AI assistant deeply tied to Falcon. Wins on EDR-led conversations where endpoint context dominates. Where they are vulnerable: strong endpoint story, weak orchestration story for non-EDR domains; no general agent platform underneath Charlotte AI; agent-to-agent capabilities still limited. Google counter: SecOps as the broader analytics platform, Mandiant TI depth, and Wiz for cloud workload coverage that Falcon does not reach.' },
        { heading: 'Palo Alto Precision AI', body: 'Cross-portfolio AI brand spanning XSIAM, Prisma, and Cortex. Strongest position in Palo-standardized accounts. Where they are vulnerable: locked to the Cortex data lake; expensive and technically complex to extend beyond their walls; security-only, no general agent platform. MCP is a roadmap item, not GA. Google counter: open data model, MCP-native from day one, multi-vendor by design, and Wiz extends multi-cloud reach that Prisma cannot match at the same depth post-acquisition.' },
        { heading: 'Splunk (Cisco)', body: 'SPL and the Splunk data lake remain deeply entrenched in large enterprises with years of invested content. Where they are vulnerable: cost model is unfriendly to agentic data volumes; agentic story is bolted on post-Cisco acquisition, not native; brand fatigue is real in the field. Google counter: do not pitch a rip-and-replace — pitch federation. Google SecOps MCP can call Splunk via its own MCP server, positioning Google as the orchestration layer above Splunk rather than a replacement. Over time SecOps economics win the data conversation.' },
        { heading: 'When to Concede vs Compete', body: 'Concede gracefully on deeply entrenched M365 or Falcon shops where the customer values vendor consolidation over capability. Do not fight the footprint. Compete hard where the customer values: best-of-breed threat intelligence, scale and retention economics, multi-cloud reach (Wiz), building an agentic security future that requires a general platform, or where they are already frustrated with integration cost and playbook maintenance. The "federation not migration" motion turns entrenched Splunk and Palo Alto accounts into expansion opportunities rather than zero-sum displacements.' }
      ]
    },
    {
      id: 'm6l8',
      title: 'Talk Tracks',
      slides: [
        { heading: 'Why Google over Microsoft', body: 'Suggested framing: "Microsoft is excellent if your security center of gravity is M365 and your data lives in Sentinel. Where Google differentiates: Mandiant frontline threat intelligence is the data the rest of the industry consumes. Google SecOps offers 12 months of hot retention at predictable economics, and Google has shipped or previewed four production SecOps agents covering triage, hunting, detection engineering, and remediation — the full SOC lifecycle."' },
        { heading: 'Is this just AI hype', body: 'Suggested framing: "Fair pushback. The Triage and Investigation agent is in production today — Google reports 5M+ alerts processed in its first year and 30-minute analyses reduced to about a minute. That is a public reference point, not aspirational. Happy to set up a customer reference call to validate against a similar environment."' },
        { heading: 'What about lock-in', body: 'Suggested framing: "Google SecOps uses an open Unified Data Model, supports MCP for agent integrations, and Wiz extends multi-cloud reach. Compared to portfolio-lock plays from competitors, Google is investing in open protocols — A2A is open, MCP is open, agent identity is SPIFFE-based. Lock-in is a fair concern; the architecture specifically addresses it."' },
        { heading: 'Why Talk Tracks Are Suggested, Not Scripted', body: 'Adapt these to your voice and to what you actually know about the prospect. Verbatim recital sounds rehearsed. The point is to internalize the structure: acknowledge the competitor strength, name the Google differentiator with evidence, offer a next step. Same skeleton works for any competitive conversation.' }
      ]
    }
  ],
  quiz: [
    { q: "What did Vertex AI evolve into at Cloud Next '26?", options: ['Vertex AI 2.0', 'Gemini Enterprise Agent Platform', 'Google AI Studio', 'Agent Cloud'], correct: 1 },
    { q: 'Which Google SecOps agent is currently GA (not just preview)?', options: ['Threat Hunting Agent', 'Detection Engineering Agent', 'Triage & Investigation Agent', 'None — all are preview'], correct: 2 },
    { q: 'Agentic Defense combines which three platforms?', options: ['SecOps, ADK, and Gemini', 'Google Threat Intelligence, Google SecOps, and Wiz', 'Chronicle, Siemplify, and VirusTotal', 'SCC, Agent Gateway, and Model Armor'], correct: 1 },
    { q: 'Google\'s open-source security MCP servers let any MCP client connect to:', options: ['Only Gemini models', 'SecOps SIEM, SecOps SOAR, and Google Threat Intelligence', 'Wiz and SCC only', 'Agent Registry'], correct: 1 },
    { q: 'Google Threat Intelligence is the unification of:', options: ['Chronicle and Siemplify', 'Mandiant and VirusTotal', 'Wiz and SCC', 'Gemini and Vertex'], correct: 1 },
    { q: 'A prospect heavily standardized on M365 and Sentinel asks why Google. Best response:', options: ['Microsoft is bad', 'Lead with Mandiant TI depth, SecOps retention economics, and agentic security leadership — concede the M365 integration ground', 'Refuse to discuss competitors', 'Promise to match every Microsoft feature'], correct: 1 }
  ]
};

export default m6;
