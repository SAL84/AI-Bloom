import type { CourseModule } from '../../types/course';

const m3: CourseModule = {
  id: 'm3',
  title: 'AI Architecture: Models, MCP, Agents',
  icon: '🏗️',
  summary: 'The full stack literacy module — the layer cake every SE must be able to whiteboard.',
  lessons: [
    {
      id: 'm3l1',
      title: 'The AI Stack: A Layer Cake',
      diagram: 'AIStack',
      slides: [
        { heading: 'The Five Layers', body: '(1) Foundation models — the base LLMs/multimodal models. (2) Inference and serving — how models are hosted and called. (3) Orchestration — frameworks that chain calls, manage memory, route between models. (4) Tools and integrations — how AI reaches out to systems (databases, APIs, files). (5) Agents and agentic systems — autonomous goal-pursuing entities built on the stack below.' },
        { heading: 'Why SEs Must Know This', body: 'Customers buy at different layers. Some want a model API. Some want a managed agent platform. Some want a finished agentic application. Misreading which layer they need is the #1 cause of misaligned discovery.' },
        { heading: 'Whiteboard in 60 Seconds', body: 'Draw a vertical stack of five labeled boxes. Then ask the customer: "Where do you live today?" and mark the layer. Most enterprise security buyers are operating at layers 3-5 — they are not building foundation models, they are integrating them. The whiteboard moment immediately shifts the conversation from "which AI model is best" to "what is your orchestration, tool, and agent strategy?" — which is the right conversation.' },
        { heading: 'Mapping Customer Scenarios to Layers', body: 'Scenario: "We want to use Gemini to answer analyst questions about our SIEM data." That is layers 3-4: orchestration (RAG + tool calls) plus integrations (SIEM API). Scenario: "We want agents that triage alerts autonomously." That is layer 5, with dependencies all the way down. Scenario: "We want to fine-tune a model on our threat data." That is layer 1. Getting clarity on which layer helps you scope the conversation, avoid over-engineering, and position the right products.' }
      ]
    },
    {
      id: 'm3l2',
      title: 'Model Context Protocol (MCP)',
      diagram: 'MCP',
      slides: [
        { heading: 'The Problem MCP Solves', body: 'Before MCP, every AI app integrated with every tool through bespoke glue code — N×M integrations. MCP is an open standard (originally from Anthropic, now broadly adopted) that gives models a uniform way to discover and call tools, retrieve resources, and use prompts from external servers.' },
        { heading: 'How It Works', body: 'An MCP server exposes capabilities — tools (callable functions), resources (data), prompts (templates). An MCP client (the AI host application) connects, negotiates, and calls them through a standardized JSON-RPC protocol. Auth, schemas, and discovery are all built in.' },
        { heading: 'Why It Matters for Security', body: 'MCP is becoming the de facto integration fabric for agentic systems. Google SecOps, Gemini Enterprise, and most major platforms now expose MCP servers or consume them. This means your platform openness is increasingly measured by MCP support — and so is its attack surface.' },
        { heading: 'The Security Angle', body: 'Every MCP connection is a potential injection vector. A malicious MCP server can poison context, exfiltrate data, or manipulate tool calls. Discovery questions to ask prospects: How do you authorize MCP servers? Do you scan tool definitions for injection? Where does the audit log live for agent-to-tool calls?' }
      ]
    },
    {
      id: 'm3l3',
      title: 'Agents and Agentic Systems',
      diagram: 'AgentTopology',
      slides: [
        { heading: 'What Makes Something an Agent', body: 'Three things: (1) goal-directedness — pursues an objective rather than answering one prompt, (2) tool use — can take actions in the world, not just produce text, (3) autonomy — decides next steps based on outcomes, with iteration. Anything missing those is not really an agent, marketing claims notwithstanding.' },
        { heading: 'Single-Agent vs Multi-Agent', body: 'Single-agent: one autonomous loop pursuing one goal. Multi-agent: specialized agents coordinate with each other — one might triage, another investigate, another respond. Multi-agent shines when subtasks differ enough to warrant specialization; otherwise it is overhead. We cover the protocols that make this coordination possible (MCP and A2A) in Lesson 5.' },
        { heading: 'Orchestrator-Subagent Pattern', body: 'The most common enterprise architecture: one orchestrator agent receives the high-level goal, decomposes it into tasks, and delegates to specialized subagents. The orchestrator manages state and decides when the goal is satisfied. In SecOps: an orchestrator receives an alert, delegates enrichment to an IOC-lookup subagent, delegates sandbox analysis to a malware subagent, then synthesizes findings. This is why "agent" as a single monolithic loop rarely scales.' },
        { heading: 'Where Multi-Agent Adds Risk', body: 'Each agent handoff is a trust boundary. If the orchestrator blindly trusts subagent output without validation, a poisoned subagent response can corrupt the entire investigation chain. Security design must treat inter-agent messages with the same skepticism as user input — especially in security-sensitive workflows. This is not theoretical: it is the same confused-deputy pattern that plagued service-to-service calls in microservices architectures.' }
      ]
    },
    {
      id: 'm3l4',
      title: 'Autonomy Levels',
      diagram: 'AutonomyLevels',
      slides: [
        { heading: 'The Ladder', body: 'Level 0: human approves every step. Level 1: human approves consequential steps. Level 2: agent acts autonomously with logging and reversibility. Level 3: full autonomy. Most enterprise security deployments live at Level 1 — and that is the right default for high-impact actions like containment or remediation.' },
        { heading: 'Where Humans Stay In the Loop', body: 'Good agentic security design is ruthless about HITL on irreversible actions: account disables, host isolation, blocking, deletions. Reversible enrichment, triage, and investigation are increasingly safe to delegate. The framing for prospects: the agent handles the analyst grunt work; humans keep the consequential decisions.' },
        { heading: 'The Progression Path', body: 'Most deployments start at Level 0-1 regardless of capability — because trust is organizational, not technical. The right deployment conversation is: what actions are you comfortable delegating today, and what would need to be true (track record, audit, rollback capability) to expand autonomy over time? Framing autonomy as a configurable dial rather than a fixed product feature shortens the trust-building cycle considerably.' },
        { heading: 'Selling Level 1 Without Apologizing', body: 'Level 1 is not a crippled agent — it is the correct engineering choice for irreversible actions. The pitch: "The agent handles everything up to the point of consequence. An analyst gets a pre-built, pre-researched case ready for a single approval click — not a 30-minute investigation. You get the time savings without removing human judgment from the loop." This framing resonates with both CISOs worried about runaway automation and analysts worried about job displacement.' }
      ]
    },
    {
      id: 'm3l5',
      title: 'Agent Protocols: MCP and A2A',
      diagram: 'A2AvsMCP',
      slides: [
        { heading: 'MCP for Agent-to-Tool', body: 'MCP standardizes how a single agent reaches out to tools and resources. Think of it as the agent peripheral bus.' },
        { heading: 'A2A for Agent-to-Agent', body: 'Agent2Agent protocol (Google, increasingly adopted) standardizes how agents discover and communicate with each other. Think of it as the network layer between agents. Together with MCP, A2A creates the substrate for multi-agent enterprise systems.' },
        { heading: 'Why This Slide Wins Architects', body: 'When you can cleanly separate agent-to-tool (MCP) from agent-to-agent (A2A) for a customer architect, you have immediately distinguished yourself from competitors who muddle the layers. This is a credibility move.' }
      ]
    },
    {
      id: 'm3l6',
      title: 'Skills and Plugins: The Capability Layer',
      diagram: 'SkillsPlugins',
      slides: [
        { heading: 'Three Terms, One Evolution', body: 'Prospects, architects, and vendors use "plugin," "skill," and "tool" interchangeably — and mean different things each time. Getting the definitions precise is a credibility move with technical buyers. Here is the evolution: plugins were the first attempt at extensible AI capabilities (ChatGPT, 2023). MCP is the standardized protocol that replaced proprietary plugin ecosystems. Skills are what agents actually call — self-describing capability packages that live on top of MCP. Each term describes a different layer of the same stack.' },
        { heading: 'What Made Plugins a Dead End', body: 'The plugin model of 2023 was directionally correct but broke in practice: every AI vendor had its own plugin format, auth was inconsistent across ecosystems, and discovery was manual. A plugin built for ChatGPT could not be used by another AI host without rebuilding it. For enterprise security this meant every AI integration was bespoke, unaudited, and owned by the vendor. MCP replaced all of this with a single open protocol — standardized discovery, server-side auth, and support for any MCP-compatible client. When a prospect says "plugin," it is a signal they are thinking about the old model. The SE redirect: "What you are describing is now handled by MCP — here is why the standard matters for governance and auditability."' },
        { heading: 'What a Skill Actually Is', body: 'A skill is a named, self-describing capability that an agent discovers and calls at runtime. Unlike a raw API call baked into agent code, a skill carries its own contract: name (what to call it), description (what it does — the agent reads this to decide when to use it), input schema (what parameters it needs), and output schema (what it returns). The agent never sees the implementation — only the interface. Two properties matter most for SEs: composability (agents can chain skills — the output of one feeds the input of the next) and governability (you can grant or revoke skill access per agent identity, without changing any agent code). In Google ADK, skills registered in the Agent Registry are discoverable by any agent with the appropriate identity and permission.' },
        { heading: 'The SE Move in a Prospect Conversation', body: 'Two scenarios where this vocabulary pays off. Scenario A — prospect architect asks "do your agents support plugins?": do not say yes or no. Say "we use MCP, which is the standardized evolution of the plugin model — here is what that gives you in terms of governance and security." Then connect to Agent Gateway as the policy enforcement layer over all MCP connections. Scenario B — prospect asks "how does an agent know what tools it has access to?": walk through skill discovery — the agent queries the registry for skills it is authorized to use, reads their descriptions to understand what each does, and calls them by name. No hardcoded tool lists. This is the architectural conversation that separates a platform pitch from a product pitch.' }
      ]
    },
    {
      id: 'm3l7',
      title: 'Subagents: Scoped Execution and Least Privilege',
      diagram: 'Subagents',
      slides: [
        { heading: 'What a Subagent Is', body: 'A subagent is an agent operating under the direction of an orchestrator, with a scoped goal and delegated (not inherited) privileges. The key security principle: privilege delegation, not inheritance. An orchestrator with broad access should not automatically confer that access to every subagent it spawns. Each subagent should have the minimum privileges required for its specific task. In practice, this means the IOC enrichment subagent gets read access to the TI database — not write access, not access to identity management. This is least privilege applied to autonomous systems.' },
        { heading: 'The Four-Layer Architecture', body: 'Put together: hooks are the enforcement layer, skills are the capability layer, subagents are the execution layer, and plugins/MCP are the integration layer. An SE who can draw this clearly — with hooks sitting across all layers as the cross-cutting control mechanism — has a complete mental model that positions Google ADK and Agent Gateway as the architecture, not just products. Discovery question: "Do you have hooks on your agent pipelines today, or are agents currently running without pre/post execution controls?"' },
        { heading: 'When to Use a Subagent', body: 'Spawn a subagent when a task needs different data access than the orchestrator has, a different model (e.g. a smaller, faster model for a narrow classification task), or an isolated blast radius — a subagent failure should not take down the orchestrator. If the task can be done with the same access and same model, it does not need its own subagent; it needs a skill call.' }
      ]
    },
    {
      id: 'm3l8',
      title: 'Hooks: The Agent Control Plane',
      diagram: 'Hooks',
      slides: [
        { heading: 'What Hooks Are', body: 'Hooks are pre- and post-execution interceptors attached to agent pipeline steps. They fire automatically at defined points: before a tool is called, after a model generates output, before an action is taken. For security, hooks are the control plane: (1) Input hooks — validate or sanitize retrieved content before it enters the model context. (2) Output hooks — filter or constrain model responses before they reach tool calls. (3) Action hooks — require human approval for high-consequence operations. (4) Audit hooks — write immutable logs of every agent decision, tool call, and data access. A customer asking "how do we enforce policy on our agents?" is asking for hooks, even if they do not use the word.' },
        { heading: 'When to Use Hooks', body: 'Use hooks when you need cross-cutting policy enforcement without modifying every agent individually: audit logging, input validation, approval gates, and rate limiting all belong in hooks, not in agent logic. If you find yourself writing the same validation or logging code in multiple agents, you should be writing a hook. Hooks are the difference between security as a product feature and security as an architectural property.' }
      ]
    },
    {
      id: 'm3l9',
      title: 'Walkthrough: Phishing Triage End-to-End',
      diagram: 'PhishingTriage',
      slides: [
        { heading: 'The Scenario', body: 'A phishing alert fires in Google SecOps. The email contains a suspicious URL and an attachment hash. The goal: enrich the indicators, decide whether to isolate the host, and produce an auditable record — without the analyst doing any manual pivoting. This single workflow activates all four M3 architectural concepts at once: orchestrator, subagent, skills, and hooks. Follow the diagram step by step to see which concept fires at which moment and why.' },
        { heading: 'Subagent: Scoped by Design', body: 'The orchestrator receives the alert and immediately spawns an IOC Enrichment subagent. The key decision is what scope the subagent gets: read-only access to GTI and VirusTotal — nothing else. It cannot write to any system, cannot touch identity management, cannot close the case. This is least-privilege applied to an autonomous system. Why it matters in a sales conversation: if the subagent is compromised via a poisoned email body, the blast radius is bounded by its scope. An attacker who hijacks the subagent gets read-only TI lookups — not the keys to the SOC.' },
        { heading: 'Skills: Called by Name, Not by Code', body: 'The subagent calls two skills: gtl_lookup and vt_scan. It does not have hardcoded API endpoints, auth headers, or request formats. It discovers the skills from the Agent Registry, reads their descriptions to understand what each does, and calls them by name with the input the schemas define. gtl_lookup checks the URL against Mandiant intelligence and returns actor attribution, campaign association, and verdict. vt_scan submits the file hash and returns scan results across 70+ engines. The subagent combines both results and returns a structured enrichment package to the orchestrator. Composability in practice: neither skill knows the other exists — the subagent sequences them.' },
        { heading: 'Hooks: Three Control Points in One Workflow', body: 'Three hook types activate during this workflow, each at a different moment. Input hook: before each skill call, the hook strips injection payloads from the retrieved email body — so even if the phishing email contains adversarial instructions embedded in its text, those instructions never reach the model context. This fires silently, without changing the workflow logic. Action hook: when the orchestrator recommends "isolate host," the hook intercepts before the tool call fires. Execution pauses. The on-call analyst receives a notification with the full enrichment context and an approve/deny prompt. Only after approval does the isolation execute. Audit hook: after every step — every skill call, every model decision, every approval click — the hook writes an immutable timestamped entry to Cloud Logging. No agent code manages this; the hook does it automatically across the entire pipeline.' },
        { heading: 'What the Analyst and CISO See', body: 'From the analyst perspective: a pre-researched case arrives with the GTI verdict, VirusTotal scan results, and a plain-language recommendation already assembled. The analyst reviews context and clicks approve or deny — the investigation work is done. From the CISO perspective: the Agent Security Dashboard shows the complete trace — which skills were called, what data was retrieved, which hook fired, who approved, and at what timestamp. This is not a summary; it is a full reconstruction of every agent action. The answer to "can you prove what the agent did and why?" is always yes. That auditability is the architectural property that hooks provide — and it is why Agent Gateway (which implements hooks at the infrastructure level) is a governance pitch, not a product pitch.' }
      ]
    }
  ],
  quiz: [
    { q: 'What problem does MCP primarily solve?', options: ['Model training cost', 'N×M integration complexity between AI hosts and tools', 'Hallucinations', 'Token pricing'], correct: 1 },
    { q: 'A customer wants an "agent" that just summarizes alerts. The honest assessment:', options: ['Yes, it is an agent', 'It is likely an automated workflow, not really an agent — no goal-directed iteration', 'Does not matter', 'Only if it uses GPT-4'], correct: 1 },
    { q: 'For most enterprise security deployments, the right default autonomy level is:', options: ['Level 0 — approve every step', 'Level 1 — approve consequential steps, autonomous on routine', 'Level 3 — full autonomy', 'No autonomy at all'], correct: 1 },
    { q: 'A2A is to ___ as MCP is to ___', options: ['agent-to-agent ; agent-to-tool', 'agent-to-tool ; agent-to-agent', 'training ; inference', 'They are the same protocol'], correct: 0 },
    { q: 'When a prospect says "plugin," the right redirect is:', options: ['Agree and use their terminology', 'Redirect to MCP — the standardized, security-conscious evolution of the plugin model', 'Tell them plugins are deprecated', 'Ask which vendor they mean'], correct: 1 },
    { q: 'A subagent should receive privileges by:', options: ['Inheriting all orchestrator privileges', 'Delegation — only the minimum required for its specific task', 'Reading from a shared credential store', 'Requesting privileges at runtime from the user'], correct: 1 },
    { q: 'A prospect asks "how do we enforce policy on our agents?" They are asking for:', options: ['A new model', 'Hooks — pre/post execution interceptors that validate, filter, approve, and log', 'More RAM', 'A different prompt'], correct: 1 },
    { q: 'Which hook type requires human approval before a high-consequence action fires?', options: ['Input hook', 'Output hook', 'Action hook', 'Audit hook'], correct: 2 }
  ]
};

export default m3;
