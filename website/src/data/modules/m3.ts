import type { CourseModule } from '../../types/course';
import { diagram3a } from '../svgs/diagram3a';
import { diagram3ci } from '../svgs/diagram3ci';
import { diagram3cii } from '../svgs/diagram3cii';

const m3: CourseModule = {
  id: 'm3',
  title: 'AI Architecture: Models, MCP, Agents',
  icon: 'layers',
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
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'The AI stack explains why AI tools feel so different from each other — they\'re often built at completely different layers, with different capabilities and constraints.',
          bullets: [
            'A chatbot and an autonomous security agent are different layers of the same stack',
            'Most enterprise AI you encounter lives at layers 3-5, not at the foundation model layer',
            'Understanding which layer a tool lives on explains its limitations and strengths',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The layer cake is your whiteboard move. Drawing it and asking "where do you live today?" shifts the entire conversation from model comparison to architecture and strategy.',
          bullets: [
            'Ask: where does the customer operate today? Layers 3-5 is the most common answer in enterprise security',
            'Most "which AI is best" questions are misrouted — redirect to "which layer is the right investment for your problem?"',
            'Misaligned discovery (pitching layer 1 to a layer 5 buyer) is the #1 cause of lost deals in AI',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Committing to the wrong layer is the most expensive architectural mistake in AI projects. Identify the right layer before writing a line of code.',
          bullets: [
            'Don\'t build layer 5 (agents) until layers 2-4 are stable — unstable foundations make agents unpredictable',
            'Orchestration frameworks (LangGraph, DSPy) live at layer 3 — evaluate them separately from model choice',
            'Define which layer you own vs. which you consume as a service before designing the architecture',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Client AI projects fail most often because they\'re scoped at the wrong layer. Use the stack to run a rapid layer assessment in the first discovery session.',
          bullets: [
            'Run the whiteboard exercise: "where do you live today?" answers the entire scoping question',
            'Clients who want foundation model work usually need orchestration work — diagnose the actual layer',
            'Layer clarity prevents scope creep and over-engineering before the engagement begins',
          ],
        },
      ],
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
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'MCP is the standard that lets AI tools connect to external services securely. Think of it as a universal plug format — instead of bespoke wiring for every integration, there\'s one standard that works everywhere.',
          bullets: [
            'MCP means AI tools can connect to your business data without custom one-off integrations',
            'Every MCP connection is a door into your data — ask vendors how they authorise and audit it',
            'MCP support is becoming the benchmark for platform openness in enterprise AI',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'MCP is the integration standard that replaces SOAR-era connector sprawl — and it\'s also the new attack surface. Use both angles in customer conversations.',
          bullets: [
            'Ask: how do you authorise MCP servers? Unapproved servers are injection vectors',
            'Ask: do you scan tool definitions for prompt injection payloads before they enter model context?',
            'Ask: where does the audit log live for every agent-to-tool call? That\'s your compliance answer',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'MCP is the integration layer you build to, not around. Treat every MCP server as a trust boundary with its own auth, schema validation, and audit requirements.',
          bullets: [
            'Validate tool definition schemas before registering MCP servers — malformed schemas are an injection surface',
            'Implement per-server auth at the MCP client layer, not inside individual agent code',
            'Log every MCP call with inputs, outputs, and identity — agent-to-tool audit trails require this',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'MCP support is a governance indicator — platforms without it are building proprietary integration lock-in. Make it a first-order evaluation criterion for any enterprise AI deployment.',
          bullets: [
            'Require MCP support as a vendor evaluation criterion — proprietary plugin formats are a long-term governance risk',
            'Audit MCP server authorisation policy as part of any AI security review',
            'MCP openness is also an interoperability question — it determines which future tools the client can add without rebuilding',
          ],
        },
      ],
    },
    {
      id: 'm3l3',
      title: 'Agents and Agentic Systems',
      diagram: 'AgentTopology',
      inlineSvg: diagram3a,
      inlineSvgId: 'd3a',
      slides: [
        { heading: 'Inside an Agent: The Core Anatomy', body: 'Every agent shares the same structural blueprint. At the centre sits an LLM acting as the reasoning brain — it interprets the goal, decides next actions, and evaluates outcomes. Four elements surround it. (1) Trigger: what starts the agent — user input, a scheduled time, or a system event. (2) Planning loop: the cycle that runs until the goal is satisfied — observe (gather context from memory and tools), plan (decide the next action), act (execute a tool call, produce output, or spawn a subagent), reflect (compare result to goal; loop again or terminate). (3) Memory: in-context memory (the active window — retrieved context, conversation history, tool results) and persistent memory (vector databases, files, session summaries — survives across runs). (4) Goal evaluation: the success criteria that terminates the loop. Without a well-defined goal, the agent cannot decide when to stop.' },
        { heading: 'What Makes Something an Agent', body: 'Three things: (1) goal-directedness — pursues an objective rather than answering one prompt, (2) tool use — can take actions in the world, not just produce text, (3) autonomy — decides next steps based on outcomes, with iteration. Anything missing those is not really an agent, marketing claims notwithstanding. The planning loop (observe → plan → act → reflect) is the mechanical expression of all three: it iterates toward a goal using tool results, with the LLM making each routing decision.' },
        { heading: 'Guardrails, Human-in-the-Loop, and the Integration Layer', body: 'Two cross-cutting control bands run across the entire agent anatomy. Guardrails (safety, scope, policy) constrain every action — they are not agent code; they are enforced at the execution boundary as hooks that intercept before actions fire. Human-in-the-loop (HITL) intercepts when confidence is low, stakes are high, or a defined threshold is crossed. Both operate as pre/post hooks in the execution pipeline, not as logic inside the LLM. Below the agent sits the integration layer: MCP connectors, A2A coordination, external APIs, vector databases, sandboxes, orchestration frameworks, and hooks/skill managers. The integration layer is infrastructure — agent logic above it should never contain hardcoded knowledge of how tools are physically connected.' },
        { heading: 'Orchestrator-Subagent Pattern', body: 'The most common enterprise architecture: one orchestrator agent receives the high-level goal, decomposes it into tasks, and delegates to specialized subagents. The orchestrator manages state and decides when the goal is satisfied. In SecOps: an orchestrator receives an alert, delegates enrichment to an IOC-lookup subagent, delegates sandbox analysis to a malware subagent, then synthesizes findings. This is why "agent" as a single monolithic loop rarely scales.' },
        { heading: 'Where Multi-Agent Adds Risk', body: 'Each agent handoff is a trust boundary. If the orchestrator blindly trusts subagent output without validation, a poisoned subagent response can corrupt the entire investigation chain. Security design must treat inter-agent messages with the same skepticism as user input — especially in security-sensitive workflows. This is not theoretical: it is the same confused-deputy pattern that plagued service-to-service calls in microservices architectures.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'An agent is different from a chatbot — it runs a planning loop (observe → plan → act → reflect) until a goal is satisfied, taking real actions along the way. That loop and those actions are why it requires more oversight than a text tool.',
          bullets: [
            'If an AI tool is "taking actions" on your behalf through a planning loop, it\'s agentic — apply appropriate scrutiny',
            'Guardrails and human-in-the-loop are architectural properties, not optional features — ask if they are present',
            'Always understand what triggers an agent, what its goal is, and what actions it is authorised to take',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The anatomy diagram is your whiteboard move for "what is an agent?" — LLM brain, planning loop, memory, guardrails, HITL, integration layer. Drawing it separates the architectural conversation from the marketing claim.',
          bullets: [
            'Ask: does it pursue a goal across a planning loop, or just answer one prompt? The second is not an agent',
            'Ask: where do guardrails enforce policy — inside agent code or at the execution boundary as hooks?',
            'The confused-deputy framing (inter-agent trust) resonates with architects who survived microservices security failures',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The planning loop (observe → plan → act → reflect) is the unit of agent reasoning. Design the stopping condition (goal evaluation) before the loop — vague goals produce infinite iterations or premature termination.',
          bullets: [
            'Implement guardrails as hooks at the execution boundary, not as conditional logic inside agent code',
            'Separate in-context memory (ephemeral, current run) from persistent memory (durable, cross-run) — they have different consistency and security requirements',
            'Single-agent before multi-agent: add orchestration complexity only when the anatomy genuinely demands it',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Use the agent anatomy as a rapid assessment framework: trigger, planning loop, memory architecture, guardrails, HITL thresholds, and integration layer. Gaps in any element are design risks, not implementation details.',
          bullets: [
            'Assess guardrail placement first — guardrails inside agent code are fragile; guardrails as hooks are auditable',
            'Ask: what are the HITL thresholds? No answer means the agent runs without a defined escalation policy',
            'Map the integration layer: vendor-shipped MCP connectors vs custom integrations determines the long-term maintenance burden',
          ],
        },
      ],
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
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'More autonomy is not automatically better. The right level of AI autonomy depends entirely on the reversibility and consequence of the actions it\'s taking.',
          bullets: [
            'For reversible tasks (drafting, summarising), high autonomy makes sense — the cost of error is low',
            'For irreversible actions (deleting, blocking, isolating), human approval is a feature, not a limitation',
            'Ask vendors: at what level do your agents operate, and what actions require human approval?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Level 1 is the winning pitch for enterprise security buyers — it addresses the runaway automation fear and the analyst displacement fear in one framing.',
          bullets: [
            'Use "configurable dial" framing — autonomy expands with track record, not as a feature toggle',
            'Ask: which actions are you comfortable delegating today? That question moves the deal forward faster than demos',
            'CISOs and analysts have different autonomy objections — address them with the same Level 1 framing from different angles',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Autonomy level is an engineering parameter, not a product position. Build it as a configurable per-action policy, not a global setting.',
          bullets: [
            'Implement autonomy level as a per-action policy — different actions warrant different levels',
            'Irreversible actions require explicit human-in-the-loop gates in the code, not just in the documentation',
            'Log every autonomous action with its triggering context — auditability is what allows autonomy to expand over time',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Trust is organisational, not technical — and it builds through demonstrated track record at lower autonomy levels. Advise clients to start at Level 1 even when the technology supports more.',
          bullets: [
            'Build an autonomy expansion plan: what track record and audit evidence justifies moving from Level 1 to Level 2?',
            'Reversibility is a procurement criterion — require it as a contractual property for high-consequence agent actions',
            'Map the client\'s acceptable delegation list before selecting autonomy levels — don\'t start with the technology',
          ],
        },
      ],
    },
    {
      id: 'm3l5',
      title: 'Agent Protocols: MCP and A2A',
      diagram: 'A2AvsMCP',
      inlineSvg: diagram3cii,
      inlineSvgId: 'd3cii',
      slides: [
        { heading: 'Same Scenario, Two Protocols', body: 'Consider a single task: "Book me a flight to Dubai and add it to my calendar." This scenario runs through both protocols to make the difference concrete. Under MCP: one LLM (Claude) stays in control throughout. It connects to a Flight API MCP server and a Calendar API MCP server as tools it calls directly — simpler architecture, lower latency, one reasoning chain. Under A2A: an Orchestrator agent delegates to two specialized agents — a Flight Agent (its own tools, memory, and model) and a Calendar Agent (same). Each operates autonomously on its subtask; the orchestrator aggregates. The protocol determines the architecture, which determines the trust model and failure modes.' },
        { heading: 'MCP: One LLM, Multiple Tools', body: 'MCP standardizes how a single agent reaches out to tools and resources — think of it as the agent peripheral bus. The LLM queries available MCP servers, calls their tools, and synthesizes the results. One LLM stays in control throughout. Key characteristics: simpler architecture, lower latency (fewer round trips), easier to debug (single reasoning chain), single trust boundary to govern. Ideal when tasks are well-defined, tool calls can be orchestrated by one model, and domain specialization is not required. MCP is the right default for most workflows. Note: when agents in an A2A network need to call tools, they use MCP to do so — the two protocols are complementary, not competing.' },
        { heading: 'A2A: Specialized Agents Collaborating', body: 'Agent2Agent protocol (Google, 2025, increasingly adopted) standardizes how agents discover and communicate with each other — think of it as the network layer between agents. In the Dubai example, an Orchestrator spawns a Flight Agent and a Calendar Agent, each with specialized tools, memory, and a model tuned for its domain. They run in parallel; the Orchestrator aggregates. Key characteristics: higher coordination overhead, better domain specialization, and independent failure isolation — one agent failing does not cascade to the other. Ideal when subtasks require genuinely different expertise, can run in parallel with independent state, or have different privilege requirements. Together with MCP, A2A creates the substrate for multi-agent enterprise systems.' },
        { heading: 'When to Use Which — and the SE Credibility Move', body: 'Decision heuristic: use MCP unless the subtasks are genuinely heterogeneous (different domain expertise required), can run in true parallel, or need different privilege levels. If two or more of those are true, A2A adds real value. If not, A2A adds coordination overhead without benefit. The SE credibility move: cleanly separating agent-to-tool (MCP) from agent-to-agent (A2A) for a customer architect immediately distinguishes you from competitors who conflate them. Discovery question: "Does your current architecture have a coordination layer between agents, or are agent interactions point-to-point?" — the answer reveals their current state and opens the architectural conversation.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'MCP and A2A solve different connection problems: MCP connects an agent to its tools, A2A connects agents to each other. Understanding which is which explains why some AI systems are simpler to govern than others.',
          bullets: [
            'MCP keeps one LLM in control — simpler, lower latency, easier to audit',
            'A2A adds specialization and parallelism, but also more trust boundaries and coordination complexity',
            'Proprietary coordination protocols lock you into one vendor\'s ecosystem — open standards like MCP and A2A don\'t',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'MCP vs A2A is your credibility move with architects. The Dubai scenario is the clearest way to show the difference — same task, two architectures, different security properties.',
          bullets: [
            'MCP: one trust boundary, one audit trail; A2A: multiple agent identities, multiple trust boundaries — harder to govern',
            'Ask: does the customer\'s current architecture have a coordination layer between agents, or is it point-to-point?',
            'A2A adoption is accelerating — include it in vendor evaluation scorecards as a forward-compatibility criterion',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'MCP and A2A solve different problems at different protocol layers — conflating them produces architectures with hidden coupling and poor failure isolation.',
          bullets: [
            'Design MCP connections as leaf-level integrations; A2A connections as peer-level coordination',
            'A2A agent discovery should be dynamic, not hardcoded — build for topology changes from the start',
            'Failure modes differ: MCP failures are tool unavailability; A2A failures are coordination breakdown and state divergence',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'A2A adoption is where enterprise multi-agent architectures will standardise over the next two years. Clients building proprietary agent coordination today are building technical debt against an emerging standard.',
          bullets: [
            'Include A2A support in vendor evaluation scorecards — proprietary coordination is a long-term interoperability risk',
            'Use the Dubai heuristic with clients: does the task genuinely warrant specialist agents, or is MCP sufficient?',
            'Map the client\'s topology: which connections need MCP (agent-to-tool), which need A2A (agent-to-agent peer)',
          ],
        },
      ],
    },
    {
      id: 'm3l6',
      title: 'Skills and Plugins: The Capability Layer',
      diagram: 'SkillsPlugins',
      inlineSvg: diagram3ci,
      inlineSvgId: 'd3ci',
      slides: [
        { heading: 'The Terminology Stack — and Why It Matters', body: 'The vocabulary around AI capabilities has fractured across vendors and years. The stack that clarifies everything, bottom to top: (1) APIs — the roads; raw HTTP/JSON interfaces every external service exposes. (2) MCP — the traffic system; the open protocol that standardizes how agents discover and call tools across any API. (3) Connectors / Plugins / Skills — the vehicles; implementation packages that bridge a specific tool to the MCP standard, each carrying its own auth, schema, and contract. (4) LLM (Claude, GPT, Gemini) — the driver; reasons over available skills and decides which to call and when. (5) You — the destination; the business goal that defines success. One-sentence summary: "APIs are the roads. MCP is the traffic system. Connectors are the vehicles. Skills are the pre-planned journeys. Claude is the driver."' },
        { heading: 'Platform Names, One Stack', body: 'Every major AI platform uses different words for the same stack layers. Anthropic: Connectors (MCP adapters), Actions (skill calls), Skills (named capability packages). OpenAI: Plugins (legacy, deprecated 2024), GPT Actions (current). Microsoft Copilot: Skills (agent capabilities), Copilot Connectors (MCP adapters). Zapier/Make: Connectors (integration adapters), Integrations (exposed capabilities), Zaps (automation workflows). The practical SE move: when a prospect says "we already have plugins," ask which vendor and which year — they may be describing the same layer under a different name. The unifying frame is always the stack: APIs → MCP → Connector → LLM → You. Vocabulary differs; the architecture does not.' },
        { heading: 'What a Skill Actually Is', body: 'A skill is a named, self-describing capability that an agent discovers and calls at runtime. Unlike a raw API call baked into agent code, a skill carries its own contract: name (what to call it), description (what it does — the agent reads this to decide when to use it), input schema (what parameters it needs), and output schema (what it returns). The agent never sees the implementation — only the interface. Two properties matter most for SEs: composability (agents can chain skills — the output of one feeds the input of the next) and governability (you can grant or revoke skill access per agent identity, without changing any agent code). In Google ADK, skills registered in the Agent Registry are discoverable by any agent with the appropriate identity and permission.' },
        { heading: 'The SE Move in a Prospect Conversation', body: 'Two scenarios where this vocabulary pays off. Scenario A — prospect architect asks "do your agents support plugins?": do not say yes or no. Say "we use MCP, which is the standardized evolution of the plugin model — here is what that gives you in terms of governance and security." Then connect to Agent Gateway as the policy enforcement layer over all MCP connections. Scenario B — prospect asks "how does an agent know what tools it has access to?": walk through skill discovery — the agent queries the registry for skills it is authorized to use, reads their descriptions to understand what each does, and calls them by name. No hardcoded tool lists. This is the architectural conversation that separates a platform pitch from a product pitch.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Think of AI capability as a stack: APIs are the roads, MCP is the traffic system, connectors are the vehicles, skills are the pre-planned journeys, and the LLM is the driver. Each layer has a distinct job — and distinct governance requirements.',
          bullets: [
            '"Plugin" is the old term; skills on MCP are the current standard — same concept, better architecture',
            'An agent\'s skill list is a governance decision — who controls what capabilities the agent can access?',
            'When vendors use different words (plugin, connector, action, skill), ask which layer of the stack they mean',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The stack analogy (roads/traffic/vehicles/journeys/driver) and the platform naming decoder are your two vocabulary moves. Precise language immediately separates you from competitors still using 2023 plugin terms.',
          bullets: [
            'Use the naming decoder: when a prospect says "plugin," ask which vendor and year — they may mean connectors or MCP actions',
            'Redirect "plugin" conversations to MCP — frame it as the governance-conscious evolution, not just a rebrand',
            'Ask: how does an agent know which skills it\'s authorised to use? Dynamic discovery vs hardcoded lists is the answer',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Skills are the interface contract between agents and capabilities. Each layer of the stack (API, MCP, connector, skill) has a distinct owner and failure mode — build to those boundaries, not across them.',
          bullets: [
            'Skill descriptions are agent-facing documentation — write them for the model\'s reasoning, not the human reader',
            'Input and output schemas must be precise — ambiguous schemas produce incorrect tool calls at inference time',
            'The connector (MCP server) owns auth, rate limiting, and error translation — do not rebuild these in agent code',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Skill governance is the AI equivalent of API access control — it determines what the agent can touch. Use the stack diagram to run a rapid capability audit: which layer does the client own, which do they consume, and where are the governance gaps?',
          bullets: [
            'Require a skill access policy: which agent identities can call which skills? No policy means no permission model',
            'Audit skill registries as part of any AI security review — unreviewed skills are unreviewed attack surface',
            'Plugin-era integrations are technical debt; map them to MCP migration as part of the AI modernisation roadmap',
          ],
        },
      ],
    },
    {
      id: 'm3l7',
      title: 'Subagents: Scoped Execution and Least Privilege',
      diagram: 'Subagents',
      slides: [
        { heading: 'What a Subagent Is', body: 'A subagent is an agent operating under the direction of an orchestrator, with a scoped goal and delegated (not inherited) privileges. The key security principle: privilege delegation, not inheritance. An orchestrator with broad access should not automatically confer that access to every subagent it spawns. Each subagent should have the minimum privileges required for its specific task. In practice, this means the IOC enrichment subagent gets read access to the TI database — not write access, not access to identity management. This is least privilege applied to autonomous systems.' },
        { heading: 'The Four-Layer Architecture', body: 'Put together: hooks are the enforcement layer, skills are the capability layer, subagents are the execution layer, and plugins/MCP are the integration layer. An SE who can draw this clearly — with hooks sitting across all layers as the cross-cutting control mechanism — has a complete mental model that positions Google ADK and Agent Gateway as the architecture, not just products. Discovery question: "Do you have hooks on your agent pipelines today, or are agents currently running without pre/post execution controls?"' },
        { heading: 'When to Use a Subagent', body: 'Spawn a subagent when a task needs different data access than the orchestrator has, a different model (e.g. a smaller, faster model for a narrow classification task), or an isolated blast radius — a subagent failure should not take down the orchestrator. If the task can be done with the same access and same model, it does not need its own subagent; it needs a skill call.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Subagents are specialised sub-teams within an AI system, each with limited access to exactly what they need. This design limits the damage if one is compromised or makes a mistake.',
          bullets: [
            'An agent with read-only access to one system can\'t accidentally delete anything across the estate',
            'Subagent failure is contained — a mistake in one task doesn\'t cascade to unrelated operations',
            'Ask vendors: how are agent privileges scoped? Inheritance is the wrong answer',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Least-privilege applied to agents is your security differentiation in agentic architecture conversations. Most competitors don\'t distinguish orchestrator from subagent privilege models.',
          bullets: [
            'Ask: do subagents inherit orchestrator privileges, or are they explicitly delegated? Inheritance is a security flaw',
            'Use the four-layer model to position hooks, skills, subagents, and connectors as an architecture, not a product list',
            'Discovery: "Do you have hooks on your agent pipelines today?" — the answer reveals security posture immediately',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Subagent privilege delegation is a security design decision, not an implementation detail. Enforce it with explicit permission grants, not trust assumptions.',
          bullets: [
            'Implement privilege delegation, never inheritance — each subagent gets an explicit, minimal permission set',
            'Design subagent blast radius: what\'s the worst-case outcome if this subagent is compromised?',
            'Use smaller, cheaper models for narrow subagent tasks — it\'s faster and reduces inference cost',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Agentic systems without explicit privilege scoping are a security review failure waiting to happen. Build least-privilege into the architecture specification before any code is written.',
          bullets: [
            'Require a privilege map for every subagent as an architectural deliverable',
            'Audit the blast radius of each subagent: what could a compromised subagent access or modify?',
            'Agents without hooks are agents without policy enforcement — require hooks in every subagent pipeline',
          ],
        },
      ],
    },
    {
      id: 'm3l8',
      title: 'Hooks: The Agent Control Plane',
      diagram: 'Hooks',
      slides: [
        { heading: 'What Hooks Are', body: 'Hooks are pre- and post-execution interceptors attached to agent pipeline steps. They fire automatically at defined points: before a tool is called, after a model generates output, before an action is taken. For security, hooks are the control plane: (1) Input hooks — validate or sanitize retrieved content before it enters the model context. (2) Output hooks — filter or constrain model responses before they reach tool calls. (3) Action hooks — require human approval for high-consequence operations. (4) Audit hooks — write immutable logs of every agent decision, tool call, and data access. A customer asking "how do we enforce policy on our agents?" is asking for hooks, even if they do not use the word.' },
        { heading: 'When to Use Hooks', body: 'Use hooks when you need cross-cutting policy enforcement without modifying every agent individually: audit logging, input validation, approval gates, and rate limiting all belong in hooks, not in agent logic. If you find yourself writing the same validation or logging code in multiple agents, you should be writing a hook. Hooks are the difference between security as a product feature and security as an architectural property.' },
        { heading: 'Connectors: The Integration Layer', body: 'A connector is the adapter that bridges the agent system to an external tool or API. Where MCP is the protocol and a skill is what the agent calls, a connector is the implementation that makes an external capability MCP-accessible — handling auth, API translation, schema mapping, and error handling toward the external service. In SOAR, connectors were the pain point: every tool needed a custom integration, versioned by your team, broken on every API change. In the agentic world, vendors ship the connector as an MCP server — the Google SecOps MCP server, the GTI MCP server, and the Wiz connector are all connectors the customer does not have to write or maintain. The distinction from hooks: hooks intercept the pipeline between agents and skills; connectors bridge skills to external services. Both are infrastructure — neither belongs in agent logic. SE talking point: when a customer asks "what does it take to connect your agents to my existing tools?" — they are asking about connectors. The answer is: if the vendor ships an MCP server, there is no connector for you to own. If they do not, ask who builds and maintains it. That question immediately exposes the SOAR-era connector tax hiding inside any agentic pitch that does not address it.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Hooks are how AI systems enforce policy automatically at every step — without any agent needing to know about them. They\'re the difference between AI with guardrails and AI that just runs unchecked.',
          bullets: [
            'A hook is why the AI pauses for approval before taking a high-consequence action',
            'Audit hooks mean there\'s a record of every AI decision — important for accountability',
            'Without hooks, there\'s no enforceable policy layer — just trust that the agent does the right thing',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Hooks are the control plane answer to "how do we enforce policy on our agents?" — and the connector point positions you against SOAR-era integration complexity.',
          bullets: [
            'Ask: do you have hooks on your agent pipelines? The absence exposes a policy enforcement gap immediately',
            'When a customer asks about integration, ask: does the vendor ship an MCP server, or do you build and maintain the connector?',
            'Input hooks (injection sanitisation) and action hooks (approval gates) are your two most concrete security talking points',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Hooks belong in infrastructure, not in agent code. Putting cross-cutting concerns (logging, validation, approval gates) inside agent logic is the fastest way to create an unmaintainable system.',
          bullets: [
            'Implement hooks as middleware in the agent execution framework, not as agent-level code',
            'Input hooks must fire before retrieved content reaches model context — order matters for injection defence',
            'Connectors (MCP servers) should own auth, rate limiting, and error translation — don\'t rebuild these in agent code',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Hooks are the architectural property that makes agent governance auditable. Without them, policy is aspirational. With them, it\'s enforced at the infrastructure level.',
          bullets: [
            'Require hooks in every agent pipeline as a non-negotiable architectural specification',
            'Audit hook coverage: are all four types (input, output, action, audit) present and tested?',
            'The connector question is your SOAR-era TCO comparison: vendor-shipped MCP servers vs. custom connectors you maintain',
          ],
        },
      ],
    },
    {
      id: 'm3l9',
      title: 'Walkthrough: Phishing Triage End-to-End',
      diagram: 'PhishingTriage',
      slides: [
        { heading: 'The Scenario', body: 'A phishing alert fires in Google SecOps. The email contains a suspicious URL and an attachment hash. The goal: enrich the indicators, decide whether to isolate the host, and produce an auditable record — without the analyst doing any manual pivoting. This single workflow activates five M3 architectural concepts at once: orchestrator, subagent, skills, connectors, and hooks. Each plays a distinct role — none is interchangeable with another. Follow the diagram step by step to see which concept fires at which moment and why.' },
        { heading: 'Subagent: Scoped by Design', body: 'The orchestrator receives the alert and immediately spawns an IOC Enrichment subagent. The key decision is what scope the subagent gets: read-only access to GTI and VirusTotal — nothing else. It cannot write to any system, cannot touch identity management, cannot close the case. This is least-privilege applied to an autonomous system. Why it matters in a sales conversation: if the subagent is compromised via a poisoned email body, the blast radius is bounded by its scope. An attacker who hijacks the subagent gets read-only TI lookups — not the keys to the SOC.' },
        { heading: 'Skills and Connectors: Two Distinct Layers', body: 'The subagent calls two skills: gtl_lookup and vt_scan. The agent side of this looks simple — discover the skill by name, call it with the right inputs, receive a structured result. The implementation side involves a connector: the GTI MCP server is the connector that bridges the skill interface to the Mandiant API, handling auth, rate limiting, request formatting, and error translation. The subagent never touches the API directly. This separation matters: skills define what can be called (the interface); connectors define how it reaches the external service (the implementation). In the phishing triage workflow, the GTI and VirusTotal connectors are Google-shipped MCP servers — the customer does not write or maintain them. If a prospect asks "what does it take to add a new tool to your agent stack?" the honest answer runs through this distinction: adding a tool means either consuming an existing connector (MCP server) or building one. The connector question is where "AI-native" platforms separate from legacy SOAR with an AI wrapper.' },
        { heading: 'Hooks: Three Control Points in One Workflow', body: 'Three hook types activate during this workflow, each at a different moment. Input hook: before each skill call, the hook strips injection payloads from the retrieved email body — so even if the phishing email contains adversarial instructions embedded in its text, those instructions never reach the model context. This fires silently, without changing the workflow logic. Action hook: when the orchestrator recommends "isolate host," the hook intercepts before the tool call fires. Execution pauses. The on-call analyst receives a notification with the full enrichment context and an approve/deny prompt. Only after approval does the isolation execute. Audit hook: after every step — every skill call, every model decision, every approval click — the hook writes an immutable timestamped entry to Cloud Logging. No agent code manages this; the hook does it automatically across the entire pipeline.' },
        { heading: 'What the Analyst and CISO See', body: 'From the analyst perspective: a pre-researched case arrives with the GTI verdict, VirusTotal scan results, and a plain-language recommendation already assembled. The analyst reviews context and clicks approve or deny — the investigation work is done. From the CISO perspective: the Agent Security Dashboard shows the complete trace — which skills were called, what data was retrieved, which hook fired, who approved, and at what timestamp. This is not a summary; it is a full reconstruction of every agent action. The answer to "can you prove what the agent did and why?" is always yes. That auditability is the architectural property that hooks provide — and it is why Agent Gateway (which implements hooks at the infrastructure level) is a governance pitch, not a product pitch.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'This walkthrough shows how every concept in this module fits together in a real scenario. The analyst does less manual work — but doesn\'t lose control of the consequential decisions.',
          bullets: [
            'The analyst\'s role shifts from doing investigation to approving a pre-built case',
            'Human approval is still required before any host isolation — AI handles the research, not the decision',
            'Every AI action in this workflow is logged — the CISO can see exactly what happened and why',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'This walkthrough is your demo script. Each architecture concept maps to a customer value statement — use the four slides as a structured story that answers both the CISO and the analyst question simultaneously.',
          bullets: [
            'Lead with the analyst experience: "pre-researched case, one click" — it immediately quantifies time savings',
            'Follow with the CISO view: "complete audit trace, every action reconstructed" — it answers the governance concern',
            'Name each concept (subagent, hook, skill, connector) as it appears — vocabulary in context builds credibility faster than definitions',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'This walkthrough is a requirements specification. Each architectural decision maps to a concrete engineering constraint — use it as a design review checklist for your own agentic pipeline.',
          bullets: [
            'Subagent scope (read-only GTI/VT) is a privilege policy decision — enforce it at the MCP server layer',
            'The input hook (injection stripping) must fire before retrieved email content reaches model context',
            'Audit hook output must be append-only and tamper-evident — standard logging is insufficient for forensic use',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'This walkthrough is the "art of the possible" reference for clients evaluating agentic SecOps. Use it to anchor what good architecture looks like before they evaluate any vendor.',
          bullets: [
            'Show this walkthrough before vendor demos — it sets the architectural standard they should evaluate against',
            'Map each concept to a governance requirement: subagent scope → least privilege; audit hooks → compliance trail',
            'The CISO view (full trace, every decision) is your governance ROI story — quantify it against current audit costs',
          ],
        },
      ],
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
