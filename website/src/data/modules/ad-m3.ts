import type { CourseModule } from '../../types/course';

const adM3: CourseModule = {
  id: 'ad-m3',
  title: 'Agentic AI',
  icon: 'layers',
  summary: 'The architectural overview of agentic systems: architecture patterns, orchestration frameworks, MCP and A2A protocols, the attack surface, production reliability, context engineering, and evals. This module orients you across the whole shape of the problem. Three courses on this site — Agent Engineering, Securing AI Systems, and Does Your AI Actually Work? — take these same topics to production depth, and each lesson below says which one picks up where it stops.',
  lessons: [
    {
      id: 'ad3l1',
      title: 'Agent Architecture Patterns',
      sectionLabel: 'Design',
      diagram: 'AgentTopology',
      slides: [
        {
          heading: 'The Core Loop: Reason, Act, Observe',
          body: 'Strip away the framework branding and every agent is the same machine: a model in a loop with tools. The model reasons about the task, chooses an action (a tool call), the runtime executes it, and the result is fed back into the context for the next iteration. That feedback loop is the entire difference between an agent and a chatbot — the model\'s output changes the world, and the world\'s response changes the model\'s next decision. Everything else in this module — orchestration, protocols, security, observability — is engineering around this loop. Understanding it precisely matters because each stage is a distinct failure point: reasoning can go off-plan, actions can be wrong or unsafe, and observations can carry hostile content back into the context.',
          bullets: [
            'Reason: the model plans against the task, the conversation so far, and prior tool results',
            'Act: it emits a structured tool call — the only way an LLM affects anything outside its context',
            'Observe: tool output re-enters the context and steers the next reasoning step',
            'Termination is a design decision: goal check, step limit, budget cap, or human stop — never assume the model halts on its own',
          ],
        },
        {
          heading: 'The Workflow-to-Agent Spectrum',
          body: 'The industry\'s most expensive confusion is treating "agent" as a binary. In practice there is a spectrum of autonomy. At one end sit workflows: LLM calls composed through predefined code paths — prompt chaining, routing to specialised prompts, parallel fan-out with an aggregation step, or an evaluator-optimiser loop where one call critiques another. The control flow is written by an engineer and the model fills in the steps. At the other end sit true agents: the model itself decides which tools to call, in what order, and when the task is done. Workflows are more predictable, cheaper, and easier to test; agents handle open-ended tasks no flowchart anticipates. Most production systems that get called agents are workflows — and that is usually the right call.',
          bullets: [
            'Prompt chaining: fixed sequence of calls, each transforming the last output',
            'Routing: a classifier call dispatches to specialised downstream prompts',
            'Orchestrator-workers: a model decomposes the task and delegates, but within engineered rails',
            'Full agent: model-directed control flow — maximum flexibility, maximum variance',
          ],
        },
        {
          heading: 'Single Agent vs Orchestrator-Subagent',
          body: 'A single agent with a well-chosen toolset is the right default: one context, one place to debug, no coordination overhead. Multi-agent designs earn their complexity in two situations. First, context isolation — a subagent can burn thousands of tokens searching or reading files, then return only a distilled answer, keeping the orchestrator\'s context clean for decision-making. Second, genuine parallelism — independent subtasks explored simultaneously. The orchestrator-subagent pattern keeps one agent accountable for the plan while workers handle bounded jobs. What fails in practice is the peer-to-peer "society of agents" — shared mutable state, circular delegation, and error attribution that becomes archaeology. Hierarchies debug; meshes don\'t.',
          bullets: [
            'Default to one agent; add subagents when context bloat or parallelism forces it',
            'Subagents should return conclusions, not transcripts — the payoff is context compression',
            'Keep topology hierarchical: an orchestrator that owns the plan beats a mesh of equals',
            'Every added agent multiplies non-determinism — the coordination tax is paid in debugging',
          ],
        },
        {
          heading: 'When NOT to Build an Agent',
          body: 'The most senior engineering judgement in this field is currently refusing to build agents. An agent trades cost, latency, and predictability for flexibility — so if you can enumerate the steps of the task, write a workflow and keep the guarantees. Ask three questions. Is the task valuable enough to justify tokens spent on exploration and retries? Is it complex enough that fixed logic genuinely cannot cover it? And is the cost of an error recoverable — can a wrong action be undone, caught by review, or sandboxed? A customer-refund process fails all three: the steps are known, errors are expensive, and a workflow with one approval gate does the job. Deep research across messy sources, or debugging an unfamiliar codebase, pass all three. Autonomy is a budget you spend where the task truly needs it.',
          bullets: [
            'If you can draw the flowchart, build the flowchart — agents are for tasks that resist one',
            'High-volume, low-value tasks rarely justify agent economics',
            'Irreversible or costly errors demand workflows plus gates, not open-ended autonomy',
            'Start as a workflow, promote to an agent only where the rails demonstrably break',
            'This is the orientation view — Agent Engineering on this site takes the loop, budgets, termination and stuck-run detection to production depth',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'An AI agent is a model in a loop: it reasons, takes an action with a tool, sees the result, and repeats. The practical question about any "agentic" product is how much freedom the model really has — and whether the task justifies it.',
          bullets: [
            'Most products marketed as agents are workflows — predefined steps with AI filling them in, which is often better',
            'More autonomy means more flexibility but less predictability — it is a dial, not a feature',
            'Ask of any agent product: what happens when it gets something wrong, and who catches it?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The workflow-vs-agent spectrum is your risk-assessment axis. Every step toward autonomy widens the blast radius of a bad decision, so your first discovery question about any agentic deployment is where on the spectrum it actually sits.',
          bullets: [
            'Ask: who owns control flow — engineered code paths or the model? The answer determines the threat model',
            'The observe step is the intake for hostile content: every tool result is untrusted input to the next reasoning step',
            'Orchestrator-subagent hierarchies are easier to audit than peer meshes — accountability maps to one decision-maker',
            'Position "when not to build an agent" in customer conversations — recommending a gated workflow builds more trust than agent maximalism',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build the simplest thing that works, in this order: single prompt, then workflow, then single agent, then multi-agent. Each step up costs you predictability, testability, and money — take it only when the previous rung demonstrably fails.',
          bullets: [
            'Write the agent loop yourself at least once — it is under a hundred lines and demystifies every framework',
            'Enforce termination in the runtime: step limits, token budgets, and wall-clock timeouts, not model goodwill',
            'Design subagents to return distilled conclusions — passing full transcripts upward recreates the context bloat you split to avoid',
          ],
        },
      ],
    },
    {
      id: 'ad3l2',
      diagram: 'Subagents',
      title: 'Orchestration Frameworks',
      slides: [
        {
          heading: 'The Landscape, Honestly',
          body: 'The agent-framework market is crowded, fast-moving, and loud, so it helps to sort it into three schools rather than memorise brand names. Graph-based orchestrators — LangGraph is the most established — model an agent as an explicit state machine: nodes, edges, checkpoints, and replay. Vendor agent SDKs from the model labs — OpenAI\'s Agents SDK, Anthropic\'s Claude Agent SDK, Google\'s ADK — package the loop, tool handling, and often MCP support into an opinionated harness tuned for that vendor\'s models. And the raw-API school skips frameworks entirely, writing the loop directly against model APIs. All three ship real production systems. The differences are about where control lives and what you are coupled to — not about which one is "winning" this quarter.',
          bullets: [
            'Graph orchestrators: explicit state machines with checkpointing and replay — control flow you can inspect',
            'Vendor SDKs: batteries-included loops from the model labs, increasingly the default entry point',
            'Raw APIs: your own loop, your own state — maximum transparency, maximum responsibility',
            'Multi-agent coordination layers (CrewAI and similar) sit atop these — evaluate the base loop first',
          ],
        },
        {
          heading: 'The Case for Vendor SDKs — and Its Price',
          body: 'Vendor agent SDKs earn their popularity honestly: the lab that trains the model also tunes the harness, so tool-calling formats, prompt-caching behaviour, context management, and built-in tools work well together out of the box. Sub-agent spawning, permission hooks, and MCP client support arrive as configuration rather than engineering. For teams standardised on one model family, this is the fastest route to a competent agent. The price is coupling. An SDK\'s abstractions encode one vendor\'s opinions about how agents should work, and its roadmap follows that vendor\'s product strategy, not yours. Cross-provider portability ranges from partial to nonexistent. The pragmatic stance: take the SDK\'s leverage, but keep your tool definitions, prompts, and eval suite in your own code so the harness stays swappable.',
          bullets: [
            'The harness is tuned for the vendor\'s models — real quality gains, not just convenience',
            'Coupling is the cost: switching providers can mean rewriting the orchestration layer',
            'Own your tools, prompts, and evals as plain code — treat the SDK as a replaceable shell',
            'If you need heterogeneous models in one system, a neutral layer or your own loop fits better',
          ],
        },
        {
          heading: 'The Raw-API School',
          body: 'A serious contingent of experienced teams builds agents directly on model APIs, and their argument deserves attention: the agent loop is small — call the model, execute the returned tool calls, append results, repeat — while a framework\'s value concentrates in the parts around the loop that you eventually need to control anyway. When behaviour goes wrong, a framework means debugging through layers of someone else\'s abstraction to find which prompt actually went to the model; your own loop means reading your own code. Frameworks front-load convenience and back-load opacity. The honest trade: raw APIs cost you upfront engineering for retries, streaming, state persistence, and provider quirks — everything a framework gives you for free until the day its abstraction fights your requirements.',
          bullets: [
            'The core loop is a modest amount of code; the hard parts are tools, prompts, context, and evals — which frameworks don\'t solve for you',
            'Every abstraction between you and the prompt is a place where debugging gets harder',
            'You pay upfront for plumbing: retries, streaming, persistence, rate limits, provider drift',
            'A strong middle path: raw loop plus MCP for tool integrations — standardised edges, transparent core',
          ],
        },
        {
          heading: 'Framework Churn and Selection Criteria',
          body: 'Framework churn is a real line item, not a meme. This ecosystem has already seen major frameworks rewrite their core abstractions, deprecate flagship APIs, and fall from default choice to legacy in short order — and each swing sends teams on migrations that deliver zero user-facing value. So select on criteria that survive the churn rather than on this quarter\'s leaderboard. Can you see and log the exact prompt sent to the model? Can you eject — drop to raw API calls for one node — without leaving the framework? Is state explicit and persistable, so runs can be checkpointed and replayed? How deep is the abstraction stack when you debug? And is the surface area small enough to migrate off within weeks, not quarters? A framework that fails the escape-hatch test is a bet that its roadmap will match yours indefinitely. None has earned that bet.',
          bullets: [
            'Transparency: full visibility into prompts and tool schemas as actually sent',
            'Escape hatches: mixing raw calls into framework flows must be possible, not heroic',
            'Explicit state: checkpoint, replay, and resume are what production debugging runs on',
            'Exit cost: measure it before adopting — thin harnesses over your own primitives age best',
            'Agent Engineering skips the framework survey and builds the harness itself: tool design, retries and idempotency, verification, delegation cost',
          ],
        },
      ],
    },
    {
      id: 'ad3l3',
      title: 'MCP & A2A In Depth',
      diagram: 'A2AvsMCP',
      slides: [
        {
          heading: 'MCP Primitives: Tools, Resources, Prompts',
          body: 'The Model Context Protocol is now the established standard for connecting models to external capabilities — the question in interviews and design reviews is no longer "what is MCP" but whether you understand it at the protocol level. MCP is JSON-RPC between a client (embedded in the model host) and servers that expose three primitives with deliberately different control models. Tools are model-controlled: executable functions the model chooses to invoke during its loop. Resources are application-controlled: addressable data — files, schemas, documents — that the host decides to place into context. Prompts are user-controlled: parameterised templates a person explicitly invokes, like slash commands. Collapsing everything into tools is the most common integration mistake; the primitive you choose determines who decides when content enters the context window.',
          bullets: [
            'Tools: model-invoked actions with JSON Schema inputs — the agent\'s hands',
            'Resources: host-selected context data addressed by URI — not something the model fetches on a whim',
            'Prompts: user-invoked templates — explicit human intent, not model discretion',
            'One protocol, three control models: model, application, and user each own a primitive',
          ],
        },
        {
          heading: 'Server Lifecycle, Transports, and Auth',
          body: 'An MCP session begins with an initialization handshake: client and server exchange protocol versions and declare capabilities, and nothing else is valid until that completes. After the handshake the client typically lists tools, resources, and prompts, then the operational phase begins — calls flow, and servers can push notifications when their tool or resource lists change, which clients must handle since real servers evolve mid-session. Two transports dominate: stdio for local servers launched as child processes — the trust model is your own machine — and streamable HTTP for remote servers, which is where real authentication begins. Remote MCP standardises on OAuth 2.1, with the server acting as a resource server and dynamic client registration smoothing first connections. Treat every remote server as an internet-facing API: tokens, scopes, and audit logs, not an implementation detail.',
          bullets: [
            'Lifecycle: initialize and capability exchange, then discovery, operation, shutdown',
            'List-changed notifications matter — production clients cannot assume a static tool list',
            'stdio for local child processes; streamable HTTP for remote, multi-client servers',
            'Remote auth is OAuth 2.1 — scope server tokens as tightly as any third-party API credential',
          ],
        },
        {
          heading: 'A2A: Agent-to-Agent, Now Under Neutral Governance',
          body: 'Where MCP connects one agent to its tools and data, A2A addresses the peer problem: how independently built agents — different vendors, different frameworks, different companies — discover and delegate to each other. Google launched it and then donated it to the Linux Foundation, moving governance to neutral ground with a broad roster of industry backers; vendor-neutral stewardship was a precondition for competitors adopting a shared protocol. Technically, an agent publishes an Agent Card — a JSON document describing its identity, capabilities, and endpoint — and peers interact through a task lifecycle over HTTP: submitted, working, input-required, completed or failed, with streaming updates and support for long-running work. A deliberate design choice: agents exchange tasks and results, not internals — an A2A peer stays opaque, its reasoning and tools hidden behind the interface.',
          bullets: [
            'Agent Card: machine-readable capability advertisement enabling discovery',
            'Tasks are the unit of work, with an explicit lifecycle and streaming progress',
            'Opacity by design: peers see results, never each other\'s prompts or internals',
            'Linux Foundation governance signals long-term neutrality; adoption still trails MCP\'s by a wide margin',
          ],
        },
        {
          heading: 'Composition — and What Standards Don\'t Solve',
          body: 'The protocols compose cleanly because they answer different questions: an agent uses MCP vertically to reach its own tools and data, and A2A horizontally to delegate to peer agents — one agent\'s public A2A face can front an internal machinery of MCP servers. But be precise about what standardisation buys. It solves plumbing: discovery, transport, schemas, auth handshakes — the undifferentiated glue that once made every integration bespoke. It does not solve judgement: whether the model calls the right tool, whether a tool description is honest, whether a peer agent is competent or safe to trust, or how errors compound across a delegation chain. Interoperability also cuts both ways — a standard port for capabilities is a standard port for attacks, which is where the next lesson picks up. Protocols move the hard problems up the stack; they do not remove them.',
          bullets: [
            'MCP is vertical (agent to capabilities); A2A is horizontal (agent to agent) — complementary, not rivals',
            'Standardisation commoditises integration plumbing, and only the plumbing',
            'Tool choice, description honesty, peer trust, and error propagation remain your problems',
            'Every standard interface is also a standard attack surface — design with that symmetry in mind',
            'Protocol depth stops here — Agent Engineering covers what a good tool looks like: descriptions, schemas, and returns a model can recover from',
          ],
        },
      ],
    },
    {
      id: 'ad3l4',
      title: 'Security Attack Surface of Agents',
      diagram: 'AgentAttackSurface',
      slides: [
        {
          heading: 'Prompt Injection Grows Teeth',
          body: 'In a chatbot, prompt injection produces a bad answer. In an agent, it produces bad actions — the same loop that lets the model act on the world lets an attacker act through it. The critical insight is that the injection rarely arrives from the user: it arrives through the observe step. Any content an agent reads — a webpage, an email, a ticket, a repository README, a tool result — is a potential instruction channel, because models cannot reliably distinguish "data I was given to process" from "instructions I should follow." The canonical danger pattern is the combination of three properties: access to private data, exposure to untrusted content, and the ability to communicate externally. An agent holding all three can be turned into an exfiltration engine by a single well-placed paragraph. Remove or gate at least one leg, because no prompt-level defence reliably holds on its own.',
          bullets: [
            'Direct injection comes from the user; indirect injection rides in on anything the agent reads',
            'Every tool result is untrusted input re-entering the reasoning context',
            'Danger trifecta: private data + untrusted content + external communication in one agent',
            '"Ignore previous instructions" is the toy version — real payloads are contextual and polite',
          ],
        },
        {
          heading: 'Confused Deputy and Tool Poisoning',
          body: 'The confused deputy is a classic security failure with a sharp agentic edge: a privileged intermediary tricked into using its authority on an attacker\'s behalf. An agent is a deputy by construction — it runs with the user\'s credentials and permissions, and any injected instruction executes with that borrowed authority. The attacker never touches your API keys; they persuade the entity that legitimately holds them. Tool poisoning attacks the supply chain instead: because tool descriptions are consumed by the model as trusted context, a malicious or compromised MCP server can embed hidden directives in its own metadata — instructions invisible in a casual review but followed by the model. Variants include rug pulls, where a server behaves impeccably until wide adoption and then swaps its definitions mid-session, and cross-tool shadowing, where one hostile tool\'s description manipulates how the agent uses other, honest tools.',
          bullets: [
            'The agent\'s legitimate authority is the weapon — attacks borrow it rather than steal it',
            'Tool descriptions are prompt content from a third party: audit them like executable code',
            'Rug pull: trusted server changes behaviour after adoption — pin and review versions',
            'One poisoned tool can corrupt an agent\'s use of every other tool in the session',
          ],
        },
        {
          heading: 'Memory Contamination',
          body: 'Persistence turns a transient attack into an infection. Agents increasingly carry state across sessions — scratchpad files, memory stores, retrieval indexes, learned preferences — and each store is writable, directly or indirectly, by content the agent processed. An injected instruction that says remember this becomes a standing order: the malicious payload is gone from the context, but its residue re-enters every future session as trusted memory, long after the hostile document is deleted. Retrieval-backed memory widens the door — poisoning the corpus an agent retrieves from plants payloads that surface on the attacker\'s chosen topic. This breaks the comfortable assumption that each session starts clean, and it makes provenance a first-class requirement: memory written under the influence of untrusted content is itself untrusted, and an agent\'s memory should be inspectable, attributable, and revocable like any other privileged store.',
          bullets: [
            'Session-scoped injection ends with the session; memory-scoped injection compounds',
            'Track provenance: what wrote each memory, and what content was in context when it did',
            'Retrieval corpora are memory too — poisoned documents are time-delayed injections',
            'Provide a working "forget" path: contaminated memory you cannot excise is a standing backdoor',
          ],
        },
        {
          heading: 'Defence: Least Privilege, Sandboxes, Gates',
          body: 'No current technique makes a model reliably immune to injection, so effective defence assumes compromise and constrains blast radius — a familiar posture: zero trust applied to a new kind of insider. Least privilege comes first: an agent gets the narrowest toolset and scopes the task allows, read-only where read-only suffices, per-task credentials rather than standing ones. Sandboxing contains execution — code and file operations inside containers with explicit filesystem scope and default-deny egress, so even a fully hijacked agent cannot reach what the sandbox excludes. Approval gates put a human decision on the irreversible subset: sending, deleting, paying, deploying. Gate by consequence, not by frequency — a gate on everything trains reflexive clicking, which is no gate at all. Layer on top: strip or neutralise suspicious tool-result content, monitor for anomalous action sequences, and rehearse the incident path for the day a gate is talked through.',
          bullets: [
            'Assume the model can be turned; engineer so a turned model has nowhere to go',
            'Per-task scoped credentials beat standing broad ones — expiry is a security control',
            'Sandbox with default-deny egress: exfiltration needs a channel, so refuse to provide one',
            'Reserve human approval for irreversible actions; approval fatigue is a vulnerability class',
            'Securing AI Systems goes further: threat modelling, the jailbreak taxonomy, hardening controls, and running an authorised red-team exercise',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'An AI agent can be manipulated by the content it reads, not just by the person instructing it. A malicious email or webpage can carry hidden instructions the agent may follow with your permissions — so the safeguards around an agent matter as much as the model inside it.',
          bullets: [
            'Anything an agent reads is a potential instruction channel, not just passive data',
            'Grant agents the narrowest access that works, and prefer revocable, temporary permissions',
            'Confirmation prompts before consequential actions are the safety net — read them before clicking',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Agentic AI maps onto frameworks your customers already trust: injection, confused deputy, supply chain, persistence. Presenting agent risk through that lens — plus the private-data/untrusted-content/external-comms trifecta — turns a vague fear into an actionable assessment.',
          bullets: [
            'Lead with the trifecta: which agents combine private data access, untrusted input, and an outbound channel? That is the priority list',
            'MCP servers are supply chain: ask how tool descriptions are reviewed, versions pinned, and rug pulls detected',
            'Persistent memory is a persistence mechanism — ask how memory writes are attributed and how contamination would be purged',
            'Probe approval-gate quality: gates on everything mean fatigue; ask what is actually gated and what the click-through rate looks like',
            'Differentiator question for vendors: "show me the audit trail for an agent action taken under injected instructions"',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Design as if injection will succeed, because sometimes it will. Your job is not a clever system prompt — it is an architecture where a hijacked model has minimal reach: scoped tools, sandboxed execution, gated irreversibles, and attributable memory.',
          bullets: [
            'Break the trifecta structurally: agents touching untrusted content get no broad egress; agents with egress get no secrets',
            'Enforce permissions in the runtime layer — the model asking nicely must not be sufficient',
            'Log every tool call with its full input context; injection forensics is impossible without it',
            'Treat third-party MCP servers like third-party dependencies: pin, review, and monitor for definition changes',
          ],
        },
      ],
    },
    {
      id: 'ad3l5',
      title: 'Production Reliability & Observability',
      diagram: 'Hooks',
      slides: [
        {
          heading: 'Tracing: The Non-Negotiable Foundation',
          body: 'An agent that works in the demo and fails in production fails silently unless you can replay its decisions. Tracing is the foundation everything else builds on: every model call with the exact prompt sent and response received, every tool call with arguments and results, every retry and error — organised as a tree, because agent runs are trees. A run spans steps; steps span model calls and tool executions; subagents hang off their orchestrator. Aggregate metrics tell you something regressed; only the trace tells you why — which tool result derailed the plan, which prompt revision changed tool-selection behaviour, where the seventeen-step run went from sensible to absurd. The discipline that pays off most: capture the prompt as actually assembled — after templating, truncation, and context management — not the template you think you sent. The gap between those two is where a large share of production bugs live.',
          bullets: [
            'Trace the tree: run → steps → model/tool calls, with subagent spans nested under parents',
            'Record exact assembled prompts and raw tool results — reconstructions lie',
            'Attach token counts, latency, and cost to every span, not just the run total',
            'OpenTelemetry-based GenAI conventions and LLM-native tracing platforms both work — pick one before launch, not after the incident',
          ],
        },
        {
          heading: 'Non-Determinism and Regression Testing',
          body: 'Traditional testing assumes the same input yields the same output. Agents break the assumption twice: sampling makes single runs stochastic, and multi-step tasks compound small variations into divergent trajectories. Temperature zero does not rescue you — providers do not guarantee bitwise determinism, and any prompt or model change legitimately reshuffles behaviour. The response is statistical: run each scenario multiple times and assert on the distribution — pass rate at N runs — rather than on one lucky transcript. Assert on outcomes and invariants, not exact wording: the refund was issued, the file compiles, no unauthorised tool was called. Every production failure becomes a permanent regression case. And watch pass-rate trends, not just binary status — a scenario drifting from 95% to 70% is a regression even though it still "passes sometimes."',
          bullets: [
            'Run scenarios N times; assert pass rates and thresholds, not single transcripts',
            'Test outcomes and invariants — exact-output assertions are flaky by construction',
            'Convert incidents into regression scenarios: the suite should encode your scar tissue',
            'Gate deploys on eval results the way you gate on unit tests — prompts are code',
          ],
        },
        {
          heading: 'Budgets and Failure Taxonomies',
          body: 'An agent loop with no budget is an unbounded liability: a stuck agent can retry, re-read, and re-reason its way through startling token bills. Production agents need hard ceilings enforced by the runtime — maximum steps, maximum tokens, maximum wall-clock, maximum spend per run — with graceful degradation at the limit: summarise progress, save state, escalate; never silently truncate. Latency budgets shape architecture the same way: an interactive product cannot hide a twelve-step sequential loop, which pushes you toward streaming progress, parallel tool calls, and smaller models for routine steps. Equally important is classifying failures when they occur, because the fixes differ. A taxonomy that works in practice: reasoning failures (bad plan), tool failures (external system errors), grounding failures (acting on hallucinated state), context failures (lost or truncated information), and termination failures (loops, premature exits). Tag every failed trace — the histogram tells you where to invest.',
          bullets: [
            'Hard runtime caps on steps, tokens, time, and spend — model self-restraint is not a control',
            'Degrade gracefully at limits: checkpoint and escalate, never vanish mid-task',
            'Tag failures by class — reasoning, tool, grounding, context, termination — and fix the biggest bucket first',
            'Distinguish transient tool errors (retry with backoff) from systematic ones (retrying burns money to fail slower)',
          ],
        },
        {
          heading: 'Human-in-the-Loop as Architecture',
          body: 'Human oversight fails when it is bolted on as a confirmation dialog; it works when it is designed as part of the control flow. The mechanism that generalises is the hook or gate: defined checkpoints — typically before consequential tool executions — where the runtime pauses, checkpoints state, and routes a decision to a person with enough context to actually decide: what the agent intends, why, and what it would touch. Three design rules carry most of the weight. Gate by consequence, so approvals stay rare enough to be read — a human who approves forty actions an hour is a rubber stamp, and attackers know it. Make interruption first-class: pause, resume, redirect, and abort are states in your run model, not exceptions. And build review capacity for the middle of the autonomy ramp — sampled after-the-fact review of completed runs is how trust is earned before gates are widened, and how drift is caught after.',
          bullets: [
            'Hooks at tool-execution boundaries are the natural gate points — pause, decide, resume',
            'Approval UX is a security control: intent, rationale, and blast radius on one screen',
            'Escalation is a feature: an agent that says "I am stuck, here is my state" beats one that improvises',
            'Sampled review of autonomous runs closes the loop between production and your eval suite',
            'Agent Engineering gives this two modules — reconstructable traces, graceful degradation, gate design, and the trust curve for widening autonomy',
          ],
        },
      ],
    },
    {
      id: 'ad3l6',
      title: 'Context Engineering',
      playground: 'context',
      diagram: 'ContextEngineering',
      slides: [
        {
          heading: 'The Context Window Is a Budget',
          body: 'Context engineering has emerged as the discipline that quietly determines whether agents work: deciding what occupies the model\'s context window at each step of the loop. Treat the window as a budget, not a bin. Even with very large windows, three pressures make curation mandatory. Cost — input tokens are billed on every iteration of the loop, so a bloated context is a tax paid per step, not once. Latency — bigger prompts are slower prompts. And attention — models demonstrably degrade on long contexts, losing information buried in the middle and getting distracted by stale or irrelevant content; more context routinely produces worse reasoning. Every token should earn its place: does the model need this, for this step? An agent\'s effectiveness tracks the signal-to-noise ratio of its context far more closely than the raw amount of information it has been handed.',
          bullets: [
            'Input tokens are re-billed every loop iteration — context bloat compounds per step',
            'Long-context degradation is real: burying the key fact in the middle is how it gets ignored',
            'Curate for the step, not the task: most task knowledge is irrelevant to the current decision',
            '"Just use the big window" trades money and latency for worse attention — a triple loss',
          ],
        },
        {
          heading: 'Memory Architectures',
          body: 'Agents outlive their context windows, so information must live somewhere with structure. Three tiers cover practice. Scratchpads: working memory for the current task — running notes, plans, intermediate results — externalised to files or state objects so they survive context turnover; writing a plan down and re-reading it also demonstrably keeps long tasks on track. Persistent memory: knowledge across sessions — preferences, decisions, accumulated project facts — with curation as the hard problem: what is worth keeping, when is it stale, what must be forgettable on demand. Retrieval-backed memory: corpora too large for any window, fetched on demand by search — which makes retrieval quality a direct ceiling on agent quality. The unifying move is the same everywhere: store outside the window, load just-in-time, keep only the relevant slice in context. Subagents extend the same principle across agents — a worker spends its own window on a deep dive and returns only the distilled conclusion.',
          bullets: [
            'Scratchpad: task-scoped working notes — cheap, effective, and the most underused tier',
            'Persistent memory: cross-session knowledge — the challenge is curation and staleness, not storage',
            'Retrieval-backed: fetch-on-demand corpora — your retrieval stack bounds your agent',
            'Subagent isolation is context engineering: burn a separate window, return a summary',
          ],
        },
        {
          heading: 'Compaction and Summarisation',
          body: 'Long-running agents eventually face the moment the conversation no longer fits, and how you handle it separates agents that finish marathon tasks from agents that forget why they started. Compaction summarises the transcript so far — decisions made, current state, open questions — and replaces the raw history with the summary plus recent turns. Done well it is renewal; done carelessly it is where tasks silently lose the plot, because summarisation is lossy and the loss is invisible until the agent contradicts a discarded constraint. Compact deliberately: preserve decisions and their reasons, unresolved issues, exact identifiers — file paths, names, values — and discard verbatim tool dumps first, since they are the bulkiest and most re-fetchable content. Related tactics: clear stale tool results aggressively once distilled, prefer re-reading a file over carrying it for twenty turns, and anchor durable constraints in the scratchpad so they survive any number of compactions.',
          bullets: [
            'Compaction is lossy by definition — engineer what survives, don\'t trust defaults',
            'Preserve decisions, rationale, open threads, and exact identifiers; drop raw tool output first',
            'Old tool results are the biggest, cheapest cut — distil and clear them promptly',
            'Anchor hard constraints in external notes: compaction should never be able to erase the goal',
          ],
        },
        {
          heading: 'Cache-Aware Layout — and Why This Beats Model Choice',
          body: 'Prompt caching lets providers reuse computation for a prompt prefix that exactly matches a previous request, at a large discount — which turns context layout into a cost-engineering surface. The rule: stable content first, volatile content last. System prompt, tool definitions, and reference material form the cacheable prefix; conversation and fresh tool results append after it. One dynamic token early — a timestamp in the system prompt, tools registered in shifting order — invalidates the cache for everything downstream, multiplying the cost of an agent that hits the same prefix hundreds of times per task. The strategic point runs deeper than billing: teams routinely reach for a bigger model when an agent underperforms, when the actual failure is contextual — the key fact buried, stale results crowding attention, the constraint compacted away. A mid-tier model with disciplined context reliably beats a frontier model drowning in noise. Exhaust context engineering before paying for model upgrades; it is cheaper and it usually was the problem.',
          bullets: [
            'Layout for caching: stable prefix (system, tools, references) → volatile suffix (turns, results)',
            'One early dynamic token breaks the cache for the whole prompt — audit for timestamps and unstable ordering',
            'Agent loops re-send the prefix every step: cache discipline compounds dramatically',
            'Diagnose context before upgrading models — most "model too weak" reports are context failures',
            'Agent Engineering devotes a whole module to this: assembling context in code, ordering for attention, and memory organised by lifetime',
          ],
        },
      ],
    },
    {
      id: 'ad3l7',
      diagram: 'EvalStack',
      title: 'Evaluating LLMs and Agents',
      playground: 'evalci',
      slides: [
        {
          heading: 'Why Benchmarks Mislead',
          body: 'Public benchmarks are how the field talks about model quality, and they are systematically weaker evidence than they look. Contamination is the structural problem: benchmarks are published text, models train on published text, so a strong score may measure memorisation rather than capability — and the gap between benchmark performance and performance on genuinely novel variants of the same tasks is a recurring, documented finding. Add benchmark saturation at the frontier, narrow task formats that reward test-taking over usefulness, and vendor marketing incentives, and the practitioner\'s conclusion follows: public benchmarks are a coarse pre-filter for which models to shortlist, nothing more. The only evaluation that predicts whether a model works for your use case is one built from your use case — your tasks, your data, your definition of good. Nobody publishes that benchmark; you have to build it.',
          bullets: [
            'Contamination: training corpora ingest published benchmarks — scores inflate silently',
            'Leaderboard deltas near the top rarely predict deltas on your actual workload',
            'Benchmarks measure narrow formats; your product is not a multiple-choice exam',
            'Use public scores to shortlist, private evals to decide — never the reverse',
          ],
        },
        {
          heading: 'LLM-as-Judge — Powerful, Biased, Usable',
          body: 'Many qualities you care about — helpfulness, tone, faithfulness to sources — resist string matching, and human review does not scale to production volume. Using a model to grade outputs closes the gap and now underpins most serious eval pipelines. But a judge model is an instrument with known, reproducible biases, and using one unexamined produces confident nonsense. Position bias: in pairwise comparisons, judges favour one position, so every comparison must run both orderings. Verbosity bias: longer answers score higher at equal quality. Self-preference: models rate outputs resembling their own style more favourably. Judges are also poor at open-ended numeric scoring — a rubric with concrete criteria and a small discrete scale beats "rate this 1–10" every time. The discipline that makes judges trustworthy: validate the judge against a human-labelled sample, measure agreement, and re-validate when you change the judge model or the rubric. An unvalidated judge is an unvalidated metric.',
          bullets: [
            'Swap positions in every pairwise comparison; average or discard on disagreement',
            'Rubric-based grading with few discrete levels beats open numeric scales',
            'Watch verbosity and self-preference bias — judge with a different family than you generate with where feasible',
            'Calibrate against human labels before trusting the judge; recalibrate on every judge change',
          ],
        },
        {
          heading: 'Harness Design and Agent Regression Suites',
          body: 'An eval harness is the machinery that makes quality measurable: a dataset of cases with inputs and expectations, a runner that executes your actual system against them, graders scoring each result, and reporting that tracks scores across versions. Two design principles matter most. Grade with the cheapest sufficient method — exact checks and code-based assertions where possible, judges only where judgement is genuinely required; deterministic graders are free, fast, and never drift. And evaluate the system, not the model: your prompts, tools, and retrieval in the loop, because that is what ships. For agents, the unit of evaluation shifts from the answer to the trajectory, and non-determinism forces statistical treatment — run each scenario multiple times, assert on pass rates, and grade both end states (did the refund get issued, does the code pass tests) and trajectory properties (were forbidden tools avoided, did it stay under budget). Seed the suite from real production failures; synthetic cases check boxes, incidents encode truth.',
          bullets: [
            'Harness anatomy: cases → runner → graders → versioned reports; keep all four in code',
            'Prefer code-based graders; spend judge tokens only where judgement is required',
            'Agent evals grade trajectories and outcomes, at N runs per scenario, with environment resets between runs',
            'Every incident becomes a case: the regression suite is your institutional memory',
          ],
        },
        {
          heading: 'The Highest-Leverage Investment',
          body: 'Here is the argument for treating evals as the practitioner\'s highest-leverage investment. Without them, every change to a prompt, model, or tool is a guess evaluated by vibes — and "it seems better on the three examples I tried" is how silent regressions ship. With them, every improvement compounds: you can upgrade models the week they release because a green suite is your permission slip; you can refactor prompts fearlessly; you can quantify whether the expensive model earns its premium on your tasks — a question no leaderboard answers. Task-completion metrics keep the whole exercise honest: the north star is the fraction of real tasks completed to a defined standard, at known cost and latency — not proxy scores that drift from user value. Teams consistently report the same arc: eval infrastructure feels like overhead in week one and becomes the asset they defend hardest by month six. Your evals encode what "good" means for your product — the one artefact no model vendor can ship you, and the moat that survives every model generation.',
          bullets: [
            'No evals means every change is a bet with no scoreboard — regressions ship silently',
            'A trusted suite converts model releases from migration risk into same-week upgrades',
            'North-star metric: task completion to standard, at cost and latency — resist proxy drift',
            'Start small: twenty real cases beat zero; grow the suite from production, not speculation',
            'Does Your AI Actually Work? is the full treatment — sourcing cases, judge agreement and sample size, CI, and testing in production',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Benchmark scores in AI marketing are weak evidence — the tests are public, models absorb them, and high scores may not survive contact with your real work. The trustworthy signal is systematic testing on your own tasks.',
          bullets: [
            'Treat leaderboard rankings as a shortlist, not a verdict',
            'A handful of your own recurring tasks, tried consistently across tools, beats any published score',
            'Ask vendors how they test for regressions between versions — silence is an answer',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Evals are your credibility play in AI deals. Every prospect has seen benchmark marketing; walking them through contamination, judge bias, and regression suites repositions the conversation from "whose model scores higher" to "who can prove behaviour holds over time" — where mature vendors win.',
          bullets: [
            'Counter benchmark-waving with one question: "how does this number transfer to the customer\'s actual workload?"',
            'For security products, evals are the evidence layer: detection quality claims without a harness are anecdotes',
            'Ask vendors whether agent updates gate on regression suites — it cleanly separates engineering-led products from demos',
            'A proof-of-value is an eval: define task-completion criteria with the customer up front, and the POV grades itself',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build the eval harness before you think you need it — the day a model deprecation or a subtle regression forces the question, retrofitting one under pressure is the worst-case path. Twenty real cases in CI this week beats a grand framework next quarter.',
          bullets: [
            'Version cases, graders, and prompts together; run the suite in CI and gate merges on it',
            'Statistical assertions for agents: N runs per scenario, pass-rate thresholds, environment reset between runs',
            'Validate any LLM judge against human labels before trusting it — and re-validate when the judge changes',
            'Log production failures straight into the case backlog; the suite should grow from reality',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What distinguishes a true agent from a workflow in the workflow-to-agent spectrum?', options: ['Agents run on larger, more capable models, while workflows can use small cheap ones', 'An agent always involves several cooperating models handing work between each other', 'The model itself directs control flow — which tools to call, in what order, and when to stop', 'Workflows are limited to prompting the model, whereas only an agent can call external tools and APIs'], correct: 2 },
    { q: 'What is the strongest argument of the build-on-raw-APIs school of agent development?', options: ['The core loop is small, and framework abstractions add opacity where debugging needs transparency', 'Calling the API directly is always cheaper per token than routing the same request through a framework', 'Frameworks cannot express tool calling, so anything beyond plain chat has to be built by hand', 'Working at the raw API level removes the need for retries, backoff, and state management'], correct: 0 },
    { q: 'In MCP, what is the key difference between tools and resources?', options: ['Tools are exposed by remote servers, while resources are always read from the local filesystem', 'Tools are model-controlled actions; resources are application-controlled data the host places into context', 'Resources are executable endpoints the model invokes, while tools are read-only lookups', 'Tools require an OAuth authorisation step from the user, while resources are served without any consent flow'], correct: 1 },
    { q: 'What is a "rug pull" in the context of MCP tool poisoning?', options: ['An agent exhausting its token budget mid-task and abandoning the work half-finished', 'A user revoking OAuth consent mid-session, cutting the agent off from a tool', 'A judge model silently changing its scoring between runs, invalidating an evaluation', 'A trusted server changing its tool definitions to malicious ones after gaining adoption'], correct: 3 },
    { q: 'Which combination of agent properties forms the classic exfiltration danger pattern?', options: ['Access to private data, exposure to untrusted content, and ability to communicate externally', 'A long context window, several cooperating subagents, and streaming output', 'Persistent cross-session memory, aggressive prompt caching, and tools invoked in parallel across servers', 'A high sampling temperature, a very large toolset, and sessions that run unattended for many hours'], correct: 0 },
    { q: 'Why should agent regression tests assert on pass rates across multiple runs rather than on a single transcript?', options: ['Because recording and storing a full transcript for every run is too expensive at real scale', 'Because agents are non-deterministic — the same scenario can legitimately produce different trajectories', 'Because providers forbid retaining individual transcripts, so aggregate pass rates are the only legal option', 'Because a pass rate captures everything a trace would show, making per-run tracing redundant'], correct: 1 },
    { q: 'For prompt caching to work in an agent loop, how should the context be laid out?', options: ['Volatile content at the front, so the freshest information always gets the model\'s strongest attention', 'Tool results placed before the tool definitions, so the model sees outcomes before it sees the schemas', 'Stable content (system prompt, tool definitions) as a fixed prefix, volatile content appended after', 'Blocks sorted alphabetically, so the ordering is deterministic across every run'], correct: 2 },
    { q: 'What is position bias in LLM-as-judge evaluation, and what is the standard mitigation?', options: ['Judges favour longer answers; mitigate by truncating every candidate to the same length', 'Judges favour outputs from their own model family; mitigate by fine-tuning the judge on neutral data', 'Judges favour answers containing the query keywords; mitigate by stripping stop words first', 'Judges favour one side in pairwise comparisons; mitigate by running both orderings and reconciling'], correct: 3 },
  ],
};

export default adM3;
