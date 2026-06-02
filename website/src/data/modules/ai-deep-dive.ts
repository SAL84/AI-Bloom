import type { Course } from '../../types/course';
import { diagram2b } from '../svgs/diagram2b';

const aiDeepDive: Course = {
  id: 'ai-deep-dive',
  title: 'AI Deep Dive',
  subtitle: 'Practitioner-level AI — architecture, training, agent design, and the frontier for those who want the full picture',
  glossary: [],
  modules: [
    {
      id: 'ad-m1',
      title: 'The AI Story',
      icon: 'zap',
      summary: 'The technical and historical arc of AI — scaling laws, paradigm shifts, and why the current era is structurally different from all previous ones.',
      lessons: [
        {
          id: 'ad1l1',
          title: 'AI Paradigms: Symbolic vs Connectionist',
          sectionLabel: 'Foundations',
          slides: [{
            heading: 'Two Competing Philosophies',
            body: 'The history of AI is a debate between two schools: symbolic AI (encode logic and rules explicitly) and connectionist AI (let the system learn from data). The current era is a decisive victory for the connectionist approach — but understanding why the symbolic approach failed informs how we think about current model limitations.',
            bullets: [
              'Symbolic: hand-crafted rules, brittle, hard to scale, explainable by design',
              'Connectionist: learned from data, robust, scalable, black-box by default',
              'The "AI winters" were largely symbolic AI failing to scale',
              'Modern LLMs are connectionist — but hybrid approaches (neuro-symbolic) are emerging',
            ],
          }],
        },
        {
          id: 'ad1l2',
          title: 'Scaling Laws',
          slides: [{
            heading: 'Why Bigger Keeps Getting Better',
            body: 'Scaling laws describe the empirical relationship between model size, training data, compute, and performance. The Chinchilla scaling laws (2022) established that most models were undertrained — more data matters as much as more parameters.',
            bullets: [
              'Kaplan et al. (2020): performance scales predictably with model size and compute',
              'Chinchilla (Hoffmann et al. 2022): optimal training uses ~20 tokens per parameter',
              'GPT-4 estimated at ~1.8T parameters; Gemini Ultra at similar scale',
              'Scaling alone doesn\'t solve reasoning — emergent abilities appear at thresholds',
              'Current frontier: what happens when we hit data limits?',
            ],
          }],
        },
        {
          id: 'ad1l3',
          title: 'The Compute Stack',
          slides: [{
            heading: 'From Silicon to Model',
            body: 'Training a frontier model requires a coordinated stack of hardware, networking, and software at a scale most engineers never interact with directly. Understanding this stack explains cost, latency, and why certain capabilities exist only in cloud services.',
            bullets: [
              'GPU/TPU clusters: NVIDIA H100s or Google TPU v5 — tens of thousands of chips',
              'High-bandwidth interconnect: NVLink, InfiniBand — chips must communicate fast',
              'Training frameworks: PyTorch with distributed training (FSDP, Megatron-LM)',
              'A single GPT-4 training run estimated at $100M+',
              'Inference is cheaper but still significant at scale — quantisation reduces cost',
            ],
          }],
        },
        {
          id: 'ad1l4',
          title: 'AI vs ML vs Deep Learning (Technical)',
          slides: [{
            heading: 'The Stack, Precisely',
            body: 'The hierarchy of AI, ML, and deep learning maps to a progression of assumptions and inductive biases. Understanding where each sits explains what problems each approach solves and where each breaks down.',
            bullets: [
              'Classical ML: feature engineering + statistical models (SVMs, gradient boosting)',
              'Deep learning: end-to-end learned representations via multi-layer networks',
              'The inductive bias of CNNs: spatial locality and translation invariance',
              'The inductive bias of transformers: attention over all pairs in a sequence',
              'Choosing the right inductive bias for the problem still matters',
            ],
          }],
        },
        {
          id: 'ad1l5',
          title: 'Why This Moment Is Different',
          slides: [{
            heading: 'Compound Inflection Points',
            body: 'Previous AI waves peaked and crashed. This one has structural differences that make a repeat less likely — though not impossible. The combination of compute economics, data availability, and transformer efficiency creates a self-reinforcing cycle.',
            bullets: [
              'Compute: cost per FLOP halved every 2.5 years (better than Moore\'s Law recently)',
              'Data: the internet is a free training dataset — no previous generation had this',
              'Foundation models: train once, deploy everywhere via API',
              'Economic flywheel: AI revenue funds more research, which improves the models',
              'Risk: concentration in a few labs creates systemic dependencies',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What did the Chinchilla scaling laws establish?', options: ['Bigger models always outperform smaller ones', 'Optimal training uses roughly 20 tokens per parameter', 'Compute scales linearly with performance', 'Model size is more important than training data'], correct: 1 },
        { q: 'What is the key inductive bias of transformer models?', options: ['Spatial locality like CNNs', 'Attention over all pairs in a sequence', 'Recurrent processing from left to right', 'Tree-structured reasoning'], correct: 1 },
      ],
    },
    {
      id: 'ad-m2',
      title: 'Generative AI & LLMs',
      icon: 'brain',
      summary: 'Transformer architecture, attention mechanisms, training pipelines, RLHF, inference optimisation, and the practical limits of current LLMs.',
      lessons: [
        {
          id: 'ad2l1',
          title: 'The Transformer Architecture',
          sectionLabel: 'Architecture',
          slides: [{
            heading: 'Attention Is All You Need',
            body: 'The transformer, introduced by Vaswani et al. in 2017, replaced recurrent networks with self-attention — the ability for every token to attend to every other token in the sequence simultaneously. This unlocked parallelisation at massive scale.',
            bullets: [
              'Self-attention: each token computes a weighted sum over all other tokens',
              'Multi-head attention: run attention multiple times in parallel, different aspects',
              'Positional encoding: since attention is order-agnostic, position must be injected',
              'Feed-forward layers: transform each token independently after attention',
              'Layer normalisation and residual connections enable very deep networks',
            ],
          }],
        },
        {
          id: 'ad2l2',
          title: 'Pre-training & Fine-tuning Pipeline',
          slides: [{
            heading: 'How a Model Goes from Random Noise to Expert',
            body: 'Training a frontier LLM is a multi-stage pipeline. Pre-training instils general knowledge; supervised fine-tuning shapes behaviour; RLHF aligns outputs with human preferences.',
            bullets: [
              'Pre-training: next-token prediction on trillions of tokens — learns language and world model',
              'SFT (Supervised Fine-Tuning): train on curated instruction-response pairs',
              'RLHF: human raters rank outputs, train a reward model, use PPO to optimise',
              'Constitutional AI (Anthropic): model critiques its own outputs using principles',
              'DPO (Direct Preference Optimisation): simpler alternative to RLHF, widely adopted',
            ],
          }],
        },
        {
          id: 'ad2l3',
          title: 'Tokenisation In Depth',
          slides: [{
            heading: 'How Text Becomes Numbers',
            body: 'Tokenisation converts raw text into integer IDs that the model processes. The choice of tokeniser affects vocabulary size, context efficiency, and model behaviour on non-English text and code.',
            bullets: [
              'BPE (Byte Pair Encoding): merge frequent character pairs iteratively — most common approach',
              'GPT-4 uses cl100k tokeniser (~100K vocabulary)',
              'Encoding efficiency varies by language — English is ~1 token per word, Chinese ~2-3x more tokens',
              'Code is efficient in tokens; mathematical notation is not',
              'Tokenisation artefacts can cause surprising model failures (the "strawberry" problem)',
            ],
          }],
        },
        {
          id: 'ad2l4',
          title: 'Inference & Latency Optimisation',
          slides: [{
            heading: 'Making LLMs Fast Enough to Use',
            body: 'Raw transformer inference is slow and expensive. A set of techniques has emerged to reduce latency and cost without sacrificing too much quality.',
            bullets: [
              'KV caching: cache key/value pairs for the prompt so only new tokens are computed',
              'Quantisation: reduce weights from float32 to int8 or int4 — 2-4x memory reduction',
              'Speculative decoding: small model drafts tokens, large model validates in parallel',
              'Batching: process multiple requests together on the same GPU pass',
              'Prompt caching (Anthropic): cache the system prompt to avoid recomputing it every request',
            ],
          }],
        },
        {
          id: 'ad2l5',
          title: 'Hallucination: Mechanisms & Mitigations',
          slides: [{
            heading: 'Why Models Confabulate',
            body: 'Hallucination is not a bug that can be patched — it\'s an emergent property of how LLMs work. Understanding the mechanism helps you design systems that mitigate it structurally.',
            bullets: [
              'LLMs are trained to produce fluent, plausible text — not to verify claims',
              'Memorisation vs generalisation: rare facts are poorly memorised, so the model interpolates',
              'Confidence calibration is poor — the model doesn\'t know what it doesn\'t know',
              'Mitigation: RAG grounds responses in retrieved documents; citations enable verification',
              'Tool use: let the model call a search API rather than recall facts from weights',
            ],
          }],
        },
        {
          id: 'ad2l6',
          title: 'RAG Architecture In Depth',
          slides: [{
            heading: 'Retrieval-Augmented Generation: The Full Stack',
            body: 'A production RAG system involves multiple components beyond "search and inject." Chunking strategy, embedding quality, retrieval ranking, and context assembly all affect output quality significantly.',
            bullets: [
              'Chunking: split documents into segments — size and overlap are tunable hyperparameters',
              'Embedding: encode chunks as vectors (OpenAI ada-002, Cohere Embed, local models)',
              'Vector store: Pinecone, Weaviate, pgvector, Chroma — trade-offs in latency and cost',
              'Retrieval: cosine similarity top-k, hybrid (BM25 + semantic), re-ranking',
              'Context assembly: inject retrieved chunks with source attribution into the prompt',
            ],
          }],
        },
        {
          id: 'ad2l7',
          title: 'Fine-Tuning vs RAG vs Prompting',
          slides: [{
            heading: 'Choosing the Right Adaptation Strategy',
            body: 'There is no single best approach for adapting a base model to a domain. The right choice depends on what you\'re trying to change: format, facts, or behaviour.',
            bullets: [
              'Prompting: change format and tone, no training required, cheap to iterate',
              'RAG: inject current factual knowledge at query time, no training required',
              'SFT: change output style and instruction-following reliably, requires labelled data',
              'Full fine-tuning: expensive, rarely needed when adapters (LoRA) work',
              'LoRA: low-rank adaptation — fine-tune a small matrix overlay, not the full weights',
            ],
          }],
        },
        {
          id: 'ad2l8',
          title: 'LLM Governance & Safety — When Each Layer Applies',
          inlineSvg: diagram2b,
          inlineSvgId: 'd2b',
          slides: [
            {
              heading: 'Safety Is Not One Thing',
              body: 'When customers ask "is this AI safe?" they are actually asking several different questions at once. Safety in LLMs is built across three separate phases — before the model ships, while it runs in production, and continuously as it evolves. Each phase catches different failure modes. No single layer is enough on its own.',
              bullets: [
                'Training time: safety and alignment baked into the model before it is ever deployed',
                'Deployment time: guardrails applied at runtime to constrain what the live model can do',
                'Production time: observability to know what the model is actually doing at scale',
                'Continuous evals: validation that runs across all phases to catch regressions and drift',
              ],
            },
            {
              heading: 'Training Time — Safety Built In Before the Model Ships',
              body: 'The first line of defence happens during training itself. Before a model is released, the team running training shapes its behaviour and probes it for failure modes. By the time it reaches customers, these properties are baked into the weights.',
              bullets: [
                'Instruction tuning (SFT): trains the model to follow instructions and be helpful',
                'Constitutional AI (CAI): a principles-based self-critique loop where the model evaluates its own outputs against a set of rules during training',
                'RLHF: shapes behaviour through human preference feedback — humans rank model outputs and the model learns to prefer higher-rated responses',
                'Red-teaming: adversarial probing by humans trying to find failure modes before release',
              ],
            },
            {
              heading: 'Deployment Time — Guardrails on the Live Model',
              body: 'Once a model is deployed, a second layer of controls wraps around it at runtime. These are not inside the model — they sit between the user and the model, filtering what goes in and what comes out on every single request.',
              bullets: [
                'Output filters: block unsafe, harmful, or off-policy content at runtime — the last check before a response reaches the user',
                'Scope and policy limits: define what the model is and is not allowed to do in this specific deployment',
                'Prompt injection defence: prevents adversarial inputs from hijacking model behaviour — critical in security contexts where user-supplied data enters prompts',
                'PII and data privacy: detects and redacts sensitive personal data in both inputs and outputs',
              ],
            },
            {
              heading: 'Production Time — Knowing What the Model Is Doing at Scale',
              body: 'Deploying safely is not a one-time event. Once a model is live and handling real traffic, you need visibility into every interaction. Production observability catches the problems that training and deployment guardrails missed.',
              bullets: [
                'Prompt and response tracing: a full audit trail of every interaction — essential for incident investigation and compliance',
                'Cost and token tracking: per-request spend, token usage, and budget alerts',
                'Output drift detection: flags quality degradation and behaviour shifts over time',
                'Latency and performance: response time, throughput, and SLA monitoring',
              ],
            },
            {
              heading: 'Continuous Evals — Validation That Never Stops',
              body: 'Evals are automated tests that run across all three phases. They are the feedback loop that tells you whether the model is still doing what you expect — and whether any change made things better or worse. In a production system, evals run on every update.',
              bullets: [
                'Benchmarks: standardised capability tests used to compare models and track capability over versions',
                'Human preference eval: humans rank and compare model outputs — the most direct signal for actual quality',
                'LLM-as-judge: a model scores and ranks other models\' outputs — scales human evaluation to volumes no human team can cover',
                'Eval harnesses: automated regression suites that run on every model update',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI safety is not a single switch — it\'s built in layers across training, deployment, and ongoing monitoring. Understanding this helps you evaluate vendor claims about "safe AI" with appropriate scepticism.',
              bullets: [
                '"Safe AI" is a process across three phases, not a property of the model itself',
                'Guardrails explain why AI tools sometimes refuse requests — that\'s scope limits working as intended',
                'Ask vendors: what audit trail do you have for what the AI said and why?',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'When a customer asks "is this AI safe?" they\'re asking three different questions at once. This three-phase framework turns a vague reassurance into a structured, auditable answer — and surfaces gaps that become security objections if you don\'t name them first.',
              bullets: [
                'Walk through training time → deployment time → production time with the customer — each phase catches different failure modes; asking which phase their concern lives in immediately focuses the conversation',
                'Prompt injection defence is a deployment-time control most prospects haven\'t considered — raise it proactively: "What happens when a threat actor embeds adversarial instructions in email content that your agent is analysing?"',
                'Production observability (tracing, drift detection) is your compliance and audit answer — "can you prove what the AI did and why?" requires prompt/response tracing from day one, not as a retrofit',
                'Ask: does the vendor run red-teaming before major model updates? No answer means no adversarial testing — that\'s a risk posture question, not a product question',
                'Continuous evals distinguish platforms from demos — a vendor without eval harnesses cannot prove their model quality holds across updates',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Safety is an engineering property built across all three phases — not a post-hoc filter. Missing any phase creates a category of failure the others cannot catch.',
              bullets: [
                'Implement prompt and response tracing from day one — retrospective audit trail is impossible without it',
                'Add LLM-as-judge eval to your CI pipeline — human eval alone doesn\'t scale to deployment volume',
                'Prompt injection defence belongs in deployment-time infrastructure, not in every application separately',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Most client "AI safety" audits only inspect the training phase. Production observability and continuous evals are where deployed systems actually fail — and where governance needs to live.',
              bullets: [
                'Build a safety audit that spans all three phases — training-time assurances alone are insufficient for compliance',
                'Require production-time tracing and drift detection as contractual deliverables, not optional features',
                'Continuous evals are the mechanism that makes AI governance auditable over time — build them in from the start',
              ],
            },
          ],
        },
      ],
      quiz: [
        { q: 'What does "KV caching" optimise in LLM inference?', options: ['Reduces model weight size', 'Caches attention key/value pairs for the prompt to avoid recomputation', 'Stores API responses for reuse', 'Compresses embeddings for faster retrieval'], correct: 1 },
        { q: 'What is LoRA?', options: ['A long-range attention mechanism', 'Low-rank adaptation — fine-tuning via small matrix overlays', 'A tokenisation algorithm', 'A retrieval ranking method'], correct: 1 },
        { q: 'Which strategy is best for injecting current factual knowledge without retraining?', options: ['Full fine-tuning', 'LoRA', 'RAG', 'Prompting alone'], correct: 2 },
        { q: 'In the LLM safety lifecycle, where does prompt injection defence belong?', options: ['Training time', 'Deployment time — guardrails on the live model', 'Production observability', 'Continuous evals'], correct: 1 },
      ],
    },
    {
      id: 'ad-m3',
      title: 'Agentic AI',
      icon: 'layers',
      summary: 'Agent design patterns, orchestration frameworks, multi-agent systems, security attack surfaces, and production reliability.',
      lessons: [
        {
          id: 'ad3l1',
          title: 'Agent Architecture Patterns',
          sectionLabel: 'Design',
          slides: [{
            heading: 'How Production Agents Are Built',
            body: 'Beyond the ReAct loop, production agents use a variety of architectural patterns depending on the complexity and reliability requirements of the task. Understanding these patterns helps you choose the right design.',
            bullets: [
              'ReAct: reason + act in a single loop — general purpose, can lose track on long tasks',
              'Plan-and-Execute: generate a full plan first, then execute each step — more reliable for structured tasks',
              'Reflexion: agent evaluates its own outputs and retries with self-critique',
              'Tree of Thought: explore multiple reasoning paths in parallel, prune dead ends',
              'Multi-agent: orchestrator delegates to specialised sub-agents',
            ],
          }],
        },
        {
          id: 'ad3l2',
          title: 'Orchestration Frameworks',
          slides: [{
            heading: 'LangChain, LlamaIndex, and Beyond',
            body: 'Orchestration frameworks abstract the complexity of chaining LLM calls, managing tool definitions, handling retries, and formatting outputs. They trade flexibility for speed-of-development.',
            bullets: [
              'LangChain: most widely adopted, large ecosystem, but high abstraction can obscure behaviour',
              'LlamaIndex: focused on data ingestion and RAG pipelines',
              'LangGraph: stateful, graph-based agent workflows with explicit state management',
              'CrewAI: multi-agent coordination with role assignments',
              'Anthropic Claude API: direct tool_use API for agents without framework overhead',
            ],
          }],
        },
        {
          id: 'ad3l3',
          title: 'MCP & A2A In Depth',
          slides: [{
            heading: 'The Emerging Protocol Layer',
            body: 'MCP and A2A are the connective tissue of the agentic ecosystem. Understanding them at the protocol level helps you evaluate which tools, platforms, and agents can interoperate.',
            bullets: [
              'MCP: JSON-RPC-based protocol; server exposes tools, prompts, resources; client is the model host',
              'MCP servers can be local (stdio) or remote (HTTP/SSE)',
              'A2A: agent discovery via agent cards, task delegation, streaming responses',
              'A2A uses HTTP + JSON — designed for cross-vendor interoperability',
              'Current state (2025): MCP widely adopted; A2A in early adoption by Google ecosystem',
            ],
          }],
        },
        {
          id: 'ad3l4',
          title: 'Security Attack Surface of Agents',
          slides: [{
            heading: 'New Capabilities, New Attack Vectors',
            body: 'Agentic AI introduces attack surfaces that don\'t exist in static LLM deployments. The combination of tool access, long-horizon autonomy, and external input creates novel risks that security teams must model.',
            bullets: [
              'Prompt injection: malicious content in tool results hijacks agent behaviour',
              'Indirect prompt injection: attacker plants instructions in a webpage the agent reads',
              'Tool misuse: overly broad permissions allow unintended actions',
              'Agent impersonation: attackers claim to be a trusted orchestrator',
              'Mitigation: least-privilege tool permissions, output sandboxing, human-in-the-loop for irreversible actions',
            ],
          }],
        },
        {
          id: 'ad3l5',
          title: 'Production Reliability & Observability',
          slides: [{
            heading: 'Making Agents That Actually Work in Production',
            body: 'Demos are easy; production is hard. Agentic systems fail in ways that are difficult to predict and hard to debug without the right observability infrastructure.',
            bullets: [
              'Tracing: log every LLM call, tool call, and tool result with latency and tokens',
              'Evals: automated test cases for agent behaviour — run on every deploy',
              'Retry logic: handle transient tool failures without losing state',
              'Timeout and budget controls: prevent runaway cost on long tasks',
              'Human escalation: when confidence is low or action is irreversible, pause and ask',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is "indirect prompt injection"?', options: ['Injecting prompts via the model API', 'Attacker plants instructions in content the agent reads (e.g. a webpage)', 'A technique for improving prompt quality', 'Injecting false training data'], correct: 1 },
        { q: 'Which agent pattern generates a full plan before executing any steps?', options: ['ReAct', 'Reflexion', 'Plan-and-Execute', 'Tree of Thought'], correct: 2 },
      ],
    },
    {
      id: 'ad-m4',
      title: 'AI Frontiers',
      icon: 'shield',
      summary: 'Reasoning models, multimodal architecture, alignment research, AI governance, and where the field is headed over the next 2–3 years.',
      lessons: [
        {
          id: 'ad4l1',
          title: 'Reasoning Models',
          sectionLabel: 'Current Frontier',
          slides: [{
            heading: 'Thinking Before Answering',
            body: 'Reasoning models like OpenAI o1/o3 and DeepSeek-R1 generate an explicit chain of thought during inference — spending more compute to reason through hard problems before producing a final answer.',
            bullets: [
              'Standard LLMs: generate output tokens autoregressively, no explicit deliberation',
              'Reasoning models: generate a "thinking" scratchpad, then the final response',
              'Training: RLHF on reasoning traces, process reward models rather than outcome reward models',
              'Strengths: mathematics, coding, multi-step logic, planning',
              'Cost: reasoning tokens are expensive — 10-50x more tokens per response',
            ],
          }],
        },
        {
          id: 'ad4l2',
          title: 'Multimodal Architecture',
          slides: [{
            heading: 'How Models Process Images, Audio, and Video',
            body: 'Multimodal models integrate different modalities through a shared representation space. The dominant approach is to encode each modality into tokens that the language model backbone can attend over.',
            bullets: [
              'Vision encoder (e.g. ViT) converts images to patch tokens',
              'Audio encoder converts spectrogram frames to tokens',
              'All tokens enter a shared transformer — the language backbone attends over all',
              'Output generation: language tokens, image tokens (diffusion head), audio tokens',
              'Challenges: alignment across modalities, data scale, evaluation metrics',
            ],
          }],
        },
        {
          id: 'ad4l3',
          title: 'Alignment Research',
          slides: [{
            heading: 'The Hard Problem of Making AI Do What We Want',
            body: 'Alignment research addresses a fundamental challenge: as AI systems become more capable, ensuring they pursue intended goals becomes harder. Current techniques work — but may not scale.',
            bullets: [
              'Reward hacking: model finds unexpected ways to maximise the reward signal',
              'Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure',
              'Interpretability: mechanistic understanding of what circuits in the model compute',
              'Scalable oversight: using AI to help humans supervise more capable AI',
              'Constitutional AI: model critiques responses using a set of principles, iteratively',
            ],
          }],
        },
        {
          id: 'ad4l4',
          title: 'AI Governance & Regulation',
          slides: [{
            heading: 'The Policy Layer Arrives',
            body: 'AI governance is moving from voluntary commitments to binding regulation. Understanding the landscape matters for anyone building or deploying AI systems commercially.',
            bullets: [
              'EU AI Act: risk-based tiering; high-risk AI requires conformity assessments',
              'US Executive Order on AI (2023): frontier model reporting requirements, safety standards',
              'UK: pro-innovation posture, sector-specific regulation rather than horizontal law',
              'China: generative AI regulations requiring security assessments before deployment',
              'Practical impact: data governance, model cards, incident reporting obligations',
            ],
          }],
        },
        {
          id: 'ad4l5',
          title: "The Next 2–3 Years",
          slides: [{
            heading: 'Trajectories Worth Tracking',
            body: 'Prediction in AI is hard. But several trajectories are clear enough that practitioners should be building towards them rather than waiting for them to arrive.',
            bullets: [
              'Agent infrastructure matures: MCP, A2A, agent identity management become standard',
              'On-device models: 7B–13B models run on laptops and phones — privacy and latency benefits',
              'AI in software development: 30-50% of code written with AI assist within 2 years',
              'Multimodal agents: agents that see, hear, and act across modalities simultaneously',
              'Regulatory compliance becomes a product differentiator, not just a cost centre',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What distinguishes reasoning models from standard LLMs?', options: ['They use larger context windows', 'They generate an explicit chain of thought during inference', 'They are trained on more data', 'They use retrieval augmentation by default'], correct: 1 },
        { q: 'What does the EU AI Act use to classify AI systems?', options: ['Model parameter count', 'Training data source', 'Risk-based tiering', 'Commercial revenue threshold'], correct: 2 },
      ],
    },
  ],
};

export default aiDeepDive;
