import type { CourseModule } from '../../types/course';
import { diagram2 } from '../svgs/diagram2';
import { diagram2c } from '../svgs/diagram2c';

const m2: CourseModule = {
  id: 'm2',
  title: 'LLMs & Generative AI',
  icon: 'brain',
  summary: 'The mechanics behind the magic — tokens, context, embeddings, RAG, fine-tuning, hallucinations.',
  lessons: [
    {
      id: 'm2l0',
      title: 'The LLM Landscape — Model Quality & Architecture',
      inlineSvg: diagram2,
      inlineSvgId: 'd2',
      slides: [
        {
          heading: 'One Diagram, the Whole Picture',
          body: 'LLMs come with a lot of vocabulary — and most of it gets used loosely. This diagram organises every key concept into a single map so you always know what something is, where it fits, and how it relates to everything else. The lessons in this module each go deep on one area. This lesson is the overview that ties them together.',
          bullets: [
            'LLM mechanics: pre-training, inference, tokens, context windows, embeddings, and sampling — covered in lesson 2',
            'Guardrails and hallucinations: the safety layer around every deployment — covered in lesson 3',
            'LLM techniques: prompt engineering, RAG, fine-tuning, and RLHF — covered in lesson 4',
            'Infrastructure: how models reach users safely at enterprise scale — covered in lesson 5',
          ],
        },
        {
          heading: 'Pre-Training vs Inference: Two Distinct Phases',
          body: 'Every LLM goes through two distinct phases. Pre-training is a one-time process where the model reads enormous amounts of text and learns to predict what comes next — that is how it acquires general knowledge. It costs tens of millions of dollars for frontier models and is entirely vendor territory. Inference is what happens every time someone sends a message — the model uses what it learned to generate a response. This is where enterprise cost, latency, and deployment decisions live.',
          bullets: [
            'Pre-training: next-token prediction at scale — the model learns patterns from billions of examples; never a customer responsibility',
            'Inference: running the model on new inputs — happens on every query; the cost compounds at enterprise scale',
            'Fine-tuning sits between the two: you continue training on your data, but starting from a pre-trained checkpoint — much cheaper than training from scratch, but still requires ML infrastructure',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'This overview maps all the confusing LLM jargon into a single picture. Each lesson goes deep on one layer — start here to orient, then pick the lesson that matches your question.',
          bullets: [
            'Every AI tool you use runs on some version of this four-layer architecture',
            'Understanding which layer a problem lives on explains why some fixes are quick and some are expensive',
            'The diagram is your reference — return to it after each lesson to see how the pieces connect',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'This diagram is your product positioning map and your first whiteboard move. Every vendor claim lands on one of these four layers — use it to orient the conversation before going deep.',
          bullets: [
            'Ask: which layer does this feature live on — mechanics, guardrails, or techniques? Customers who can\'t answer are operating on buzzwords',
            'Most "AI isn\'t working" complaints land on techniques (RAG quality) or guardrails — the four-layer map diagnoses which fast',
            'Use pre-training vs. inference framing to explain why on-premise AI costs what it does — training is sunk cost, inference is variable and yours to optimise',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'This is your architecture decision map. Use the four-layer model to separate concerns — each layer has distinct build-vs-buy tradeoffs, failure modes, and operational costs.',
          bullets: [
            'Pre-training is always vendor territory; inference is where your architecture decisions live',
            'Treat the four layers as separate service boundaries — mixing them creates operational debt',
            'Lessons 2–6 go deep on each layer: pick the right lesson for the problem you\'re solving',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Use this diagram as a client education tool in session one. Mapping the four layers structures every subsequent conversation about capability, cost, risk, and governance.',
          bullets: [
            'Map client concerns to layers: stale answers → techniques (RAG); unsafe outputs → guardrails; slow responses → infrastructure',
            'Most "AI isn\'t working" complaints land on techniques or guardrails — the four-layer map diagnoses which fast',
            'Pre-training vs. inference cost split matters for TCO: pre-training is sunk cost; inference is variable and scales with usage',
          ],
        },
      ],
    },
    {
      id: 'm2l1',
      title: 'LLM Mechanisms',
      diagram: 'Tokenization',
      extraDiagram: 'Embeddings',
      slides: [
        {
          heading: 'Tokens: The Unit of Everything',
          body: 'LLMs read and write in tokens — typically 3–4 characters of English text. Pricing, throughput, and context limits are all measured in tokens, not words. Rule of thumb: 750 words ≈ 1,000 tokens. Tokens extend beyond text: images are tokenized as patches (a 1024×1024 image can cost hundreds to thousands of tokens), video as frames over time (30 seconds of video can exceed tens of thousands of tokens), and audio as discrete sound units. Every modality maps to tokens — every token has a cost.',
          bullets: [
            'A typical phishing email plus headers ≈ 500–1,500 tokens; a SIEM alert with enrichment ≈ 200–800 tokens',
            'A 10-page incident report ≈ 4,000–6,000 tokens; a 500-page IR engagement document ≈ 200,000+ tokens',
            'A 30-second deepfake video sample for analysis can exceed 50,000 tokens — very different cost profile than text analysis',
          ],
        },
        {
          heading: 'Context Windows and the Lost-in-the-Middle Problem',
          body: 'The context window is the maximum tokens a model can see at once — input plus output combined. Modern frontier models offer 200K to 2M+ tokens. But longer context does not equal better answers: models often degrade in the middle of very long contexts (the "lost in the middle" problem). Understanding this prevents the common mistake of treating context window size as a substitute for retrieval architecture.',
          bullets: [
            'Large context window does not mean large context quality — attention degrades non-linearly at long ranges',
            'The right answer for large documents is usually retrieving the relevant slice at query time (RAG), not stuffing everything in the prompt',
            'Test long-context performance at the p90 document size of your customer\'s use case — degradation is non-linear and will surprise you',
          ],
        },
        {
          heading: 'Temperature: Controlling Output Randomness',
          body: 'Temperature determines how deterministic the model\'s output is. Low temperature: the model reliably picks the most probable next token — useful for structured extraction, classification, and code. High temperature: the model samples more broadly, producing varied responses. Most production security deployments use low to moderate temperature. This explains why analysts sometimes get different answers to the same query — and why a vendor\'s temperature configuration is a meaningful security question.',
          bullets: [
            'Temperature 0: maximally deterministic — the model always picks the most probable token; right for security classification tasks',
            'Temperature > 0: introduces variance — the same prompt can yield different outputs on every call; risky for high-stakes decisions',
            'Nucleus sampling (top-p): an alternative to temperature that limits token candidates to a cumulative probability threshold',
          ],
        },
        {
          heading: 'Embeddings: Meaning as Math',
          body: 'Embeddings are not just a RAG tool — they are the mechanic at the heart of how LLMs process language. Before generating any token, the model converts every input into a high-dimensional numerical vector. Semantically similar items end up near each other in this vector space. This is what lets models "understand" meaning rather than match strings, find related concepts across paraphrases, and power the retrieval layer in RAG systems. The same mechanism that powers LLM understanding also powers semantic search and threat similarity detection.',
          bullets: [
            'Every token is converted to an embedding before the model processes it — embeddings are the model\'s internal language',
            'Semantic similarity = geometric closeness: related concepts cluster together in vector space even with no shared words',
            'A "phishing email" and "credential harvesting message" cluster together — enabling detection of novel variants with no keyword overlap',
          ],
        },
        {
          heading: 'Vector Search: Semantic Detection at Scale',
          body: 'Once content is embedded as vectors, you can ask: what items are closest to this query in vector space? That is vector search — also called semantic search. Unlike keyword search (which matches literal words), it matches meaning. A query for credential theft will surface documents about phishing, password dumps, and token harvesting even when those exact words do not appear. This capability is foundational for finding similar past incidents, detecting novel attack variants, and surfacing related threat intelligence.',
          bullets: [
            'Semantic search powers "find similar incidents" — the most requested SOC analyst workflow after natural-language querying',
            'Vector search detects novel phishing variants with no shared keywords — this is a quantifiable detection coverage gain',
            'Ask vendors: what embedding model does the product use, and how often is it retrained on new threat data? Stale embeddings mean degraded detection',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'LLM mechanics explain why AI tools behave the way they do — why long conversations cost more, why answers can vary between runs, and why AI can find similar things without matching exact words.',
          bullets: [
            'If an AI seems to "forget" earlier parts of a long conversation, the context window has run out',
            'Shorter, focused prompts usually get better answers than long, sprawling ones',
            'Temperature settings explain why the same question can get different answers each run',
            'Semantic search works on meaning — you don\'t need perfect keywords to find relevant documents',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'LLM mechanics are your credibility layer in technical conversations — and each one maps directly to a security-relevant discovery question or sales objection. Know all six to hold your own with any architect.',
          bullets: [
            'Pre-training vs. inference framing deflects the "build a custom model" ask: "that\'s training from scratch — your use case needs inference customisation via RAG, not a new model"',
            'Token estimates make cost conversations concrete: phishing email (1K tokens), SIEM alert (500 tokens), 500-page IR doc (200K tokens) — customers haven\'t done this math; you have',
            'Counter "just use a bigger context window" with lost-in-the-middle degradation — forces the RAG conversation where your architecture wins',
            'Ask: what temperature does the product use for alert triage? High temperature is a risk for security classification — low temperature is the correct default and a quality differentiator',
            'Embeddings are the mechanism behind "find similar alerts/attacks" — quantify this as detection coverage, not just a UX feature',
            'Ask: how often does the product retrain or update its embedding model on new threat data? Stale embeddings mean stale detection of novel attack variants',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Token accounting, context quality, and embedding freshness are all first-class engineering concerns — model them explicitly from the start.',
          bullets: [
            'Instrument token usage per request from day one — production cost surprises come from here',
            'Test long-context performance at the p90 document size, not average — degradation is non-linear',
            'Expose temperature as a per-use-case config — classification needs near-0, summarisation may warrant moderate values',
            'Use domain-specific embedding models for security text — general-purpose models underperform on CVEs and IOC notation',
            'Index staleness degrades retrieval quality silently — build a refresh schedule into your pipeline',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Token costs compound silently at enterprise scale, embedding quality is invisible until retrieval fails, and temperature misconfiguration drives inconsistency complaints. Address all three before deployment.',
          bullets: [
            'Estimate token volume from client document sizes before committing to a pricing model',
            'Large context window ≠ large context quality — include lost-in-the-middle degradation in evaluation criteria',
            'Set temperature standards in AI governance policy — consistent, auditable outputs require low temperature for high-stakes decisions',
            'Require vendors to disclose embedding model and retraining cadence — build retrieval accuracy tests into pilot acceptance criteria',
          ],
        },
      ],
    },
    {
      id: 'm2l5',
      title: 'LLM Guardrails',
      diagram: 'HallucinationMitigation',
      slides: [
        { heading: 'Guardrails — The Safety Layer Around Every Deployment', body: 'A raw LLM will produce almost anything — confident, fluent, and potentially wrong or harmful. Guardrails are the runtime constraints added on top to make models safe and scoped for a specific use case. Every enterprise AI product has them. Understanding this layer matters because customers will ask both "how is this safe?" and "why won\'t it do what I asked?"', bullets: [
          'Safety controls: block outputs that are harmful, off-policy, or outside the defined scope of the application',
          'Output filters: post-process responses to catch sensitive content, PII, or hallucinated facts before they reach users',
          'Hallucination controls: grounding outputs in retrieved evidence and forcing citations to reduce confident-but-wrong answers',
          'Scope limits: define what the model is allowed to do — a SOC copilot should answer security questions, not discuss competitors',
        ] },
        { heading: 'Not Lying', body: 'Hallucination is the model producing fluent, confident output that isn\'t grounded in reality. The model isn\'t deceiving — it\'s sampling probable next-tokens, and probable doesn\'t mean true. This framing matters because customers often anthropomorphize the failure mode.' },
        { heading: 'Mitigation Stack', body: 'Grounding (RAG with citations), constrained output formats, retrieval verification, model-as-judge approaches, human-in-the-loop checkpoints. No single technique eliminates hallucinations; defence is layered. Each layer catches what the one below missed.' },
        { heading: 'Talk Track for Skeptics', body: 'Suggested framing: "You\'re right that LLMs hallucinate. That\'s why every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and analyst confirmation stays in the loop for high-impact actions. The system isn\'t replacing human judgment — it\'s removing the work that doesn\'t need human judgment."' },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Guardrails explain why AI tools sometimes refuse requests or produce safe-but-incomplete answers. Hallucinations explain why AI answers are sometimes confidently wrong. Both are features of how the system was designed, not random failures.',
          bullets: [
            'When an AI refuses a request, that\'s scope limits or safety controls working as designed',
            'Confident tone in an AI response does not signal accuracy — verify anything that matters',
            'Citations are a hallucination mitigation technique, not a guarantee — check the source',
            'For high-stakes decisions, human review is a governance feature, not a workaround',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Hallucination and guardrail objections are two of the most common deal-blockers in security AI conversations. You need a structured answer for each — not a reassurance, but a technical reframe backed by architecture.',
          bullets: [
            'Reframe hallucination as probabilistic risk, not binary failure: "What\'s the consequence of a wrong answer in this workflow?" — then map the mitigation layer that addresses that consequence',
            'Ask: what is explicitly in-scope vs. out-of-scope for this deployment? Scope limits gaps expose both safety risks and missing functionality',
            'Mitigation stack order matters in a conversation: grounding → format constraints → model-as-judge → human-in-the-loop; each layer quantifiably reduces risk',
            'Ask: does the product ground every answer in retrieved evidence with citations? "No citations" means no retrieval grounding — that\'s the hallucination surface to challenge',
            'Prompt injection is a deployment-time guardrail gap most prospects haven\'t considered — raise it as: "what happens if a malicious email body contains adversarial instructions?"',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Guardrails are infrastructure, not application code. Hallucination mitigation is a system design problem, not a model selection problem. Build both as reusable layers and test them independently.',
          bullets: [
            'Implement guardrails as a shared service layer — rebuilding them in every application is an anti-pattern',
            'Constrain output to structured formats (JSON schemas, enumerated choices) for high-stakes classifications',
            'Implement model-as-judge evaluation in your CI pipeline — catch regressions before they reach users',
            'Ground every factual claim in retrieved evidence and expose the source chunk to the user',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Guardrail completeness and hallucination risk are both measurable, governable properties — treat them as audit criteria, not vendor reassurances.',
          bullets: [
            'Audit guardrail scope in every deployment: what categories are blocked, what are permitted, what is untested?',
            'Map each use case to its acceptable hallucination risk level — then match the mitigation stack to that level',
            'Human-in-the-loop for high-consequence actions is a governance control — position it as a feature, not a limitation',
            'Build hallucination rate benchmarks into pilot acceptance criteria — "sometimes wrong" is not a metric',
          ],
        },
      ],
    },
    {
      id: 'm2l3',
      title: 'LLM Techniques',
      diagram: 'RAGFlow',
      extraDiagram: 'FTvsPrompting',
      slides: [
        { heading: 'Four Ways to Extend a Model', body: 'Once a model exists, there are four main ways to change or extend its behaviour without rebuilding it. These are not mutually exclusive — enterprise products typically layer several. When customers ask "can we customise it for our environment?" they are describing one of these four, even if they don\'t know which one yet.', bullets: [
          'Prompt engineering: shapes the model\'s input at runtime — fastest and cheapest; no retraining required',
          'RAG (Retrieval-Augmented Generation): injects external knowledge at query time — the standard pattern for grounding answers in private or up-to-date data',
          'Fine-tuning: retrains on domain examples — used when behaviour gaps can\'t be fixed through prompting alone',
          'RLHF (Reinforcement Learning from Human Feedback): aligns model outputs using human preference signals — applied during model development by the vendor, not post-deployment by the customer',
        ] },
        { heading: 'RAG: The Enterprise Standard', body: 'RAG is the dominant enterprise pattern: embed the user query, find the most relevant chunks from a private knowledge base via vector search, inject those chunks into the LLM prompt as context, generate an answer grounded in retrieved data. For security: lets a SecOps copilot answer about your environment, your runbooks, your past incidents — without retraining anything. Cheaper than fine-tuning. Updates instantly when source data changes. Provides citations. Keeps proprietary data out of the base model.' },
        { heading: 'Where RAG Fails', body: 'If retrieval is bad, generation is bad. Chunk strategy, embedding model choice, and reranking matter enormously. A common pilot failure is shipping naive RAG and blaming the LLM when retrieval was the actual problem. Ask vendors: what retrieval and reranking strategy does the product use? "We use RAG" is not sufficient — it is the beginning of the conversation, not the answer.' },
        { heading: 'Prompt Engineering: The Right Default', body: 'You change behavior by changing instructions. Cheap, instant, reversible. Modern frontier models follow nuanced prompts well. Should be the default for 80%+ of use cases. Most enterprise customisation requests — tone, format, scope, persona — are solvable through prompt engineering. Escalate to RAG when the gap is knowledge; escalate to fine-tuning when the gap is behaviour that prompting genuinely cannot close.' },
        { heading: 'Fine-Tuning vs RAG: Making the Call', body: 'Fine-tuning changes behavior by further training on examples. Expensive, slower to update, requires ML infrastructure. The diagnostic question: is the gap knowledge (what the model knows) or behaviour (how it responds)? Knowledge gaps → RAG. Behaviour gaps → fine-tuning or prompting. Most "we need a fine-tuned model on our security data" requests are actually RAG requests in disguise. RLHF is a training-time technique vendors apply during model development — customers cannot do it post-deployment.' },
        { heading: 'The Honest Take', body: 'Most "we need a fine-tuned model on our security data" requests are actually RAG requests in disguise. Fine-tuning is the right answer when you need behavioral consistency that prompting cannot reliably achieve — far rarer than prospects assume. A structured prompting sprint of four weeks often eliminates the need for fine-tuning entirely. When a prospect insists on fine-tuning, ask: have you already ruled out RAG plus prompt engineering for this specific gap?' },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'RAG is one of four ways to extend an LLM — and the most common for knowledge-based questions. It\'s how AI tools answer questions about your internal documents without those documents ever being baked into the model.',
          bullets: [
            'If the AI gives a wrong answer about your internal docs, the retrieval step probably failed, not the AI itself',
            'Cited sources in AI answers are a RAG feature — no citations usually means no retrieval grounding',
            'Try prompting before assuming you need a custom model — the gap closes faster than expected',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: '"We need to customise the AI for our environment" is the most common ask in security AI deals — and knowing which technique answers it is your most valuable diagnostic skill. Get this wrong and you scope the wrong solution.',
          bullets: [
            'Map the ask before scoping: knowledge gap (SOC runbooks, past incidents, threat intel) → RAG; behaviour gap (consistent format, tone, domain terminology) → fine-tuning or prompting; alignment → RLHF is vendor-applied, not customer-configurable',
            'Naive RAG is the #1 cause of pilot failures blamed on the model — ask: what chunk strategy and reranker does the product use? Vendors who can\'t answer are shipping naive RAG',
            'RAG keeps proprietary data out of model weights — use this to address data sovereignty and compliance objections directly',
            'Fine-tuning requires ML infrastructure and data pipelines customers typically don\'t have — scope this before promising it or let it reveal an unrealistic expectation',
            '"We need RLHF for custom alignment" is a vendor-development request, not a deployment option — correct it early before it becomes a procurement blocker',
            'Prompting sprint framing: "Let us run four weeks of structured prompt engineering against your use case before scoping fine-tuning — it closes most gaps at a fraction of the cost"',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'RAG is often the right answer over fine-tuning — faster to iterate, cheaper to update, and no training infrastructure. But RAG quality is an engineering problem at every step of the pipeline.',
          bullets: [
            'Choose RAG over fine-tuning when the gap is knowledge (what it knows) not behaviour (how it responds)',
            'Chunk size and overlap are the most impactful variables — test multiple strategies before shipping',
            'Add a reranker between retrieval and generation; first-pass vector search ranking is rarely optimal',
            'Fine-tuning changes base behaviour and can degrade capabilities you weren\'t testing — run full evals, not just targeted tests',
            'RLHF at the application level requires human preference labelling pipelines — budget for this before committing',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'RAG pilots fail at retrieval, not generation — but the blame usually falls on the model. Fine-tuning is the most overrecommended approach in AI projects. Diagnose which technique is actually needed before scoping any engagement.',
          bullets: [
            'Define retrieval success criteria (e.g. top-3 recall on a golden query set) before the pilot begins — not after it fails',
            'Run a structured prompting sprint before scoping fine-tuning — four weeks of iteration often eliminates the need',
            'Budget for knowledge base curation in RAG projects — source document quality drives RAG quality, and clients consistently underestimate this',
            'RLHF is a model development technique, not a deployment customisation option — correct this expectation early',
          ],
        },
      ],
    },
    {
      id: 'm2l6',
      title: 'LLM Infrastructure',
      sectionLabel: 'Advanced',
      inlineSvg: diagram2c,
      inlineSvgId: 'd2c',
      slides: [
        {
          heading: 'Three Layers Between the Model and the User',
          body: 'A trained model sitting on disk does nothing. Getting it to users reliably — at speed, at scale, and within cost — requires three distinct layers of infrastructure. Each layer solves a different problem, and each adds cost and complexity. Understanding this helps when customers ask why enterprise AI is expensive, or why on-premise deployment is harder than it sounds.',
          bullets: [
            'Hardware layer: the physical compute that trains and runs the model',
            'Optimisation layer: techniques that make models smaller, faster, and cheaper to run',
            'Serving layer: the infrastructure that gets model responses to users reliably at scale',
          ],
        },
        {
          heading: 'Hardware — The Physical Compute',
          body: 'LLMs are computationally intense. The hardware needed to train and run them is specialised, expensive, and in short supply. Most enterprises never own this layer — they rent it through cloud providers. But knowing what it is helps when procurement or IT security asks about the underlying infrastructure.',
          bullets: [
            'GPUs and TPUs: the chips that power AI — NVIDIA H100 and A100 for general AI workloads, Google TPUv4 clusters for Google\'s own models',
            'Distributed training: training splits across many nodes in parallel — a frontier model cannot fit on a single machine',
            'Cloud vs on-premise: AWS, Azure, and GCP provide GPU compute on demand; on-premise means buying the hardware — higher control, much higher cost and complexity',
            'H100s run ~$30K each; a small inference cluster is significant capital — use this when customers ask about on-prem AI cost',
          ],
        },
        {
          heading: 'Optimisation — Making Models Smaller and Cheaper',
          body: 'Frontier models are too large and slow to run efficiently as-is. A set of techniques compresses and accelerates them without destroying their capability. This layer is what makes it practical to run powerful models at enterprise scale — and it directly affects the cost and latency numbers in any commercial conversation.',
          bullets: [
            'Quantisation: reduces model precision to save memory and cost — runs faster, uses less GPU memory with minimal quality loss',
            'Distillation: a smaller model learns from a larger teacher model — compact model that behaves like the original at a fraction of the size',
            'Pruning: removes low-impact weights to reduce model size without losing most capability',
            'KV caching and speculative decoding: speeds up token generation at inference time — essential for conversational workloads',
          ],
        },
        {
          heading: 'Serving — Getting the Model to Users Reliably',
          body: 'The serving layer is everything between the optimised model and the end user. It handles traffic, manages cost, and keeps the system running when demand spikes or something goes wrong. For enterprise deployments, this is where SLAs live.',
          bullets: [
            'API gateway: rate limiting, authentication, routing, and load balancing on every request',
            'Request batching: groups concurrent requests for GPU efficiency — significantly cheaper than running them one at a time',
            'Autoscaling: scales compute dynamically with demand — adds capacity when traffic spikes, reduces it when idle',
            'Model versioning and canary deployments: safe rollout of model updates using canary and blue-green patterns — new versions go to a small percentage of traffic first',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'The infrastructure behind AI is why on-premise AI is expensive and cloud AI is accessible. Understanding the three layers explains why enterprise AI costs what it costs — and why latency varies.',
          bullets: [
            'On-premise AI means owning the hardware layer — that\'s why it\'s significantly more expensive than cloud',
            'Latency spikes usually happen at the serving layer, not inside the model itself',
            'Model updates going live without you noticing is a feature of canary deployments — the rollout is gradual by design',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Infrastructure questions from IT, procurement, and CISOs are really questions about these three layers. Knowing the layers lets you give concrete, credible answers instead of deflecting to engineering.',
          bullets: [
            'On-premise GPU cost: H100s run ~$30K each; a small inference cluster is a significant capital spend — quantify this before a customer goes down the on-prem path',
            'Ask: what is the SLA requirement? That determines the serving layer architecture — autoscaling, redundancy, and canary deployment are table stakes for a production SOC tool',
            'Canary deployment questions are really model governance questions — frame them as risk controls: "new model versions go to 5% of traffic first; you don\'t absorb a regression all at once"',
            'Quantisation and distillation are how vendors lower inference cost — ask whether the customer-facing product uses the full model or an optimised variant and what quality tradeoffs apply',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Optimisation and serving are where production AI lives — most model quality wins in development get erased by infrastructure decisions made in a hurry.',
          bullets: [
            'Quantisation can cut memory cost 4x with minimal quality loss — test it before provisioning more GPU',
            'KV caching is essential for conversational workloads; without it, latency scales with conversation length',
            'Implement canary deployments for model updates — silent capability regressions are the hardest bugs to catch',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'The infrastructure layer is where AI project budgets surprise clients. Build all three layers into the TCO model before the engagement scope is set.',
          bullets: [
            'Hardware costs are often invisible in cloud-hosted products until scale hits — model cost per query at production volume',
            'Optimisation is a capability clients should require from vendors — quantisation and distillation are table stakes, not extras',
            'Serving SLAs belong in the procurement contract — not as a post-deployment conversation',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'A customer wants their SOC copilot to answer questions using their internal runbooks. What is the right architectural answer?', options: ['Fine-tune a custom model on their runbooks', 'Use RAG to retrieve relevant runbook sections at query time', 'Train a model from scratch', 'Just use a larger context window'], correct: 1 },
    { q: 'Why might a 2M-token context window not solve "analyse our entire knowledge base"?', options: ['It is too expensive', 'Models often degrade attention mid-context (lost in the middle)', 'It is technically impossible', 'Tokens are not real'], correct: 1 },
    { q: 'A hallucination is best described as:', options: ['The model intentionally lying', 'Fluent output not grounded in reality — probable tokens, not true facts', 'A bug in the code', 'A jailbreak attempt'], correct: 1 },
    { q: 'A prospect says "we need to fine-tune the AI on our threat data." The most likely honest diagnosis is:', options: ['They genuinely need fine-tuning', 'It is a RAG request in disguise — they need knowledge injection, not behaviour change', 'They need RLHF applied to their environment', 'Fine-tuning is always the right choice for domain data'], correct: 1 },
    { q: 'What does low temperature (near 0) mean for a security classification task?', options: ['The model runs faster', 'Outputs are maximally deterministic — the model always picks the most probable token', 'The model uses less GPU', 'Responses will be more creative'], correct: 1 },
    { q: 'Embeddings enable detection of novel phishing variants because:', options: ['They match exact keyword strings', 'Semantically similar concepts cluster together in vector space regardless of exact wording', 'They retrain the model on new attack patterns', 'They increase the context window'], correct: 1 },
  ],
};

export default m2;
