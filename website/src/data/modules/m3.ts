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
        { heading: 'Why SEs Must Know This', body: 'Customers buy at different layers. Some want a model API. Some want a managed agent platform. Some want a finished agentic application. Misreading which layer they need is the #1 cause of misaligned discovery.' }
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
        { heading: 'Single-Agent vs Multi-Agent', body: 'Single-agent: one autonomous loop pursuing one goal. Multi-agent: specialized agents coordinate with each other — one might triage, another investigate, another respond. Multi-agent shines when subtasks differ enough to warrant specialization; otherwise it is overhead. We cover the protocols that make this coordination possible (MCP and A2A) in Lesson 5.' }
      ]
    },
    {
      id: 'm3l4',
      title: 'Autonomy Levels',
      diagram: 'AutonomyLevels',
      slides: [
        { heading: 'The Ladder', body: 'Level 0: human approves every step. Level 1: human approves consequential steps. Level 2: agent acts autonomously with logging and reversibility. Level 3: full autonomy. Most enterprise security deployments live at Level 1 — and that is the right default for high-impact actions like containment or remediation.' },
        { heading: 'Where Humans Stay In the Loop', body: 'Good agentic security design is ruthless about HITL on irreversible actions: account disables, host isolation, blocking, deletions. Reversible enrichment, triage, and investigation are increasingly safe to delegate. The framing for prospects: the agent handles the analyst grunt work; humans keep the consequential decisions.' }
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
    }
  ],
  quiz: [
    { q: 'What problem does MCP primarily solve?', options: ['Model training cost', 'N×M integration complexity between AI hosts and tools', 'Hallucinations', 'Token pricing'], correct: 1 },
    { q: 'A customer wants an "agent" that just summarizes alerts. The honest assessment:', options: ['Yes, it is an agent', 'It is likely an automated workflow, not really an agent — no goal-directed iteration', 'Does not matter', 'Only if it uses GPT-4'], correct: 1 },
    { q: 'For most enterprise security deployments, the right default autonomy level is:', options: ['Level 0 — approve every step', 'Level 1 — approve consequential steps, autonomous on routine', 'Level 3 — full autonomy', 'No autonomy at all'], correct: 1 },
    { q: 'A2A is to ___ as MCP is to ___', options: ['agent-to-agent ; agent-to-tool', 'agent-to-tool ; agent-to-agent', 'training ; inference', 'They are the same protocol'], correct: 0 }
  ]
};

export default m3;
