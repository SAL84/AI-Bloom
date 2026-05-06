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
      title: 'Skills, Plugins, Subagents, and Hooks',
      slides: [
        { heading: 'The Vocabulary Problem', body: 'Agent framework documentation uses these terms inconsistently across vendors, causing confusion in customer conversations. A precise working definition for each is a credibility asset — especially with prospect architects and platform engineers who will call out vague usage immediately.' },
        { heading: 'Skills', body: 'A skill is a named, packaged capability that an agent can invoke — a tool with a defined input/output contract, discoverable by the agent at runtime. Unlike a raw API call, a skill is self-describing: the agent knows what it does, what it needs, and what it returns. In Google ADK, skills are the primary building block for reusable agent capabilities. Key distinction for SEs: skills are composable (agents can chain them) and governable (you can grant or revoke skill access per agent identity).' },
        { heading: 'Plugins', body: 'Plugins are the precursor pattern — packages of capabilities that extend an AI system, popularized by ChatGPT plugins in 2023. The model was directionally right but lacked standardization: every plugin ecosystem was proprietary, auth was inconsistent, and discovery was manual. MCP is the standardized, security-conscious evolution of plugins. When a prospect uses the word "plugin," it is a signal they are thinking architecturally — redirect to MCP and explain why the standard matters for enterprise security and auditability.' },
        { heading: 'Subagents', body: 'A subagent is an agent operating under the direction of an orchestrator, with a scoped goal and delegated (not inherited) privileges. The key security principle: privilege delegation, not inheritance. An orchestrator with broad access should not automatically confer that access to every subagent it spawns. Each subagent should have the minimum privileges required for its specific task. In practice, this means the IOC enrichment subagent gets read access to the TI database — not write access, not access to identity management. This is least privilege applied to autonomous systems.' },
        { heading: 'Hooks', body: 'Hooks are pre- and post-execution interceptors attached to agent pipeline steps. They fire automatically at defined points: before a tool is called, after a model generates output, before an action is taken. For security, hooks are the control plane: (1) Input hooks — validate or sanitize retrieved content before it enters the model context. (2) Output hooks — filter or constrain model responses before they reach tool calls. (3) Action hooks — require human approval for high-consequence operations. (4) Audit hooks — write immutable logs of every agent decision, tool call, and data access. A customer asking "how do we enforce policy on our agents?" is asking for hooks, even if they do not use the word.' },
        { heading: 'The Security Control Plane in Practice', body: 'Put together: hooks are the enforcement layer, skills are the capability layer, subagents are the execution layer, and plugins/MCP are the integration layer. An SE who can draw this clearly — with hooks sitting across all layers as the cross-cutting control mechanism — has a complete mental model that positions Google ADK and Agent Gateway as the architecture, not just products. Discovery question: "Do you have hooks on your agent pipelines today, or are agents currently running without pre/post execution controls?"' }
      ]
    }
  ],
  quiz: [
    { q: 'What problem does MCP primarily solve?', options: ['Model training cost', 'N×M integration complexity between AI hosts and tools', 'Hallucinations', 'Token pricing'], correct: 1 },
    { q: 'A customer wants an "agent" that just summarizes alerts. The honest assessment:', options: ['Yes, it is an agent', 'It is likely an automated workflow, not really an agent — no goal-directed iteration', 'Does not matter', 'Only if it uses GPT-4'], correct: 1 },
    { q: 'For most enterprise security deployments, the right default autonomy level is:', options: ['Level 0 — approve every step', 'Level 1 — approve consequential steps, autonomous on routine', 'Level 3 — full autonomy', 'No autonomy at all'], correct: 1 },
    { q: 'A2A is to ___ as MCP is to ___', options: ['agent-to-agent ; agent-to-tool', 'agent-to-tool ; agent-to-agent', 'training ; inference', 'They are the same protocol'], correct: 0 },
    { q: 'A subagent should receive privileges by:', options: ['Inheriting all orchestrator privileges', 'Delegation — only the minimum required for its specific task', 'Reading from a shared credential store', 'Requesting privileges at runtime from the user'], correct: 1 },
    { q: 'A prospect asks "how do we enforce policy on our agents?" They are asking for:', options: ['A new model', 'Hooks — pre/post execution interceptors that validate, filter, approve, and log', 'More RAM', 'A different prompt'], correct: 1 }
  ]
};

export default m3;
