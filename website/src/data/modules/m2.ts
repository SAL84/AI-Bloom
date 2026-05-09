import type { CourseModule } from '../../types/course';
import { diagram2 } from '../svgs/diagram2';
import { diagram2b } from '../svgs/diagram2b';
import { diagram2c } from '../svgs/diagram2c';

const m2: CourseModule = {
  id: 'm2',
  title: 'LLMs & Generative AI',
  icon: 'brain',
  summary: 'The mechanics behind the magic — tokens, context, embeddings, RAG, fine-tuning, hallucinations.',
  lessons: [
    {
      id: 'm2l0',
      title: 'The LLM Landscape — How It All Fits Together',
      inlineSvg: diagram2,
      inlineSvgId: 'd2',
      slides: [
        {
          heading: 'One Diagram, the Whole Picture',
          body: 'LLMs come with a lot of vocabulary — and most of it gets used loosely. This diagram organises every key concept into a single map so you always know what something is, where it fits, and how it relates to everything else. The lessons in this module each go deep on one area. This lesson is the overview that ties them together.',
          bullets: [
            'Model quality: how a model is built and how it runs',
            'LLM techniques: what you can do to a model without rebuilding it',
            'Guardrails: the safety and constraint layer wrapped around a deployed model',
            'LLM mechanics: what is happening inside the model on every call',
          ],
        },
        {
          heading: 'Model Quality — How a Model Gets Built and Run',
          body: 'Every LLM goes through two distinct phases. Pre-training is a one-time process where the model reads enormous amounts of text and learns to predict what comes next — that is how it acquires general knowledge. Inference is what happens every time someone sends a message — the model uses what it learned to generate a response.',
          bullets: [
            'Pre-training: next-token prediction at scale — the model learns patterns from billions of examples; costs tens of millions of dollars for frontier models',
            'Inference: running the model on new inputs — happens on every query; cheaper per call but the cost compounds at enterprise scale',
          ],
        },
        {
          heading: 'LLM Techniques — Shaping What the Model Does',
          body: 'Once a model exists, there are four main ways to change or extend its behaviour. These are not mutually exclusive — enterprise products typically layer several of them. When customers ask "can we customise it for our environment?" they are usually describing one of these.',
          bullets: [
            'Prompt engineering: shapes the model\'s input at runtime — the fastest and cheapest option; no retraining required',
            'RAG (Retrieval-Augmented Generation): injects external knowledge into the prompt at query time — standard pattern for grounding answers in private or up-to-date data',
            'Fine-tuning: retrains the model on domain-specific examples — used when consistent behaviour cannot be achieved through prompting alone',
            'RLHF (Reinforcement Learning from Human Feedback): aligns model outputs using human preference signals — applied during model development to shape tone, safety, and instruction-following',
          ],
        },
        {
          heading: 'Guardrails — The Safety Layer Around Every Deployment',
          body: 'A raw LLM will say almost anything. Guardrails are the runtime constraints added on top to make models safe and scoped for a specific use. Every enterprise AI product has them. Understanding this layer matters because customers will ask both "how is this safe?" and "why won\'t it do what I asked?"',
          bullets: [
            'Safety controls: block outputs that are harmful, off-policy, or outside the defined scope of the application',
            'Output filters: post-process responses to catch sensitive content, PII, or hallucinated facts before they reach the user',
            'Hallucination controls: techniques like grounding outputs in retrieved evidence and forcing citations to reduce confident-but-wrong answers',
            'Scope limits: define what the model is allowed to do — a SOC copilot should answer security questions, not write poetry or discuss competitors',
          ],
        },
        {
          heading: 'LLM Mechanics — What Happens on Every Call',
          body: 'Four concepts underpin every LLM interaction. You do not need to understand the maths, but knowing what each one does lets you give accurate answers when customers ask how the model actually works.',
          bullets: [
            'Context window: all the text the model sees at once — your message, the system prompt, conversation history, and retrieved documents all count toward this limit',
            'Tokenisation: text is split into chunks called tokens before the model processes it — roughly 3-4 characters each; affects cost, speed, and how the model handles unusual strings like CVE IDs or code',
            'Embeddings: semantic vector representations — numbers that capture meaning, used for similarity search, RAG retrieval, and anomaly detection',
            'Temperature and sampling: controls how random the output is — low temperature for precise, repeatable answers; higher temperature for more varied responses',
          ],
        },
      ],
    },
    {
      id: 'm2l0b',
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
            'Instruction tuning (SFT): trains the model to follow instructions and be helpful — supervised fine-tuning on human-written examples of good behaviour',
            'Constitutional AI (CAI): a principles-based self-critique loop where the model evaluates its own outputs against a set of rules during training',
            'RLHF: shapes behaviour through human preference feedback — humans rank model outputs and the model learns to prefer the responses people rated higher',
            'Red-teaming: adversarial probing by humans trying to find failure modes before release — the model gets stress-tested before it ever sees real users',
          ],
        },
        {
          heading: 'Deployment Time — Guardrails on the Live Model',
          body: 'Once a model is deployed, a second layer of controls wraps around it at runtime. These are not inside the model — they sit between the user and the model, filtering what goes in and what comes out on every single request.',
          bullets: [
            'Output filters: block unsafe, harmful, or off-policy content at runtime — the last check before a response reaches the user',
            'Scope and policy limits: define what the model is and is not allowed to do in this specific deployment — a SOC copilot should not discuss unrelated topics',
            'Prompt injection defence: prevents adversarial inputs from hijacking model behaviour — critical in security contexts where user-supplied data is fed into prompts',
            'PII and data privacy: detects and redacts sensitive personal data in both inputs and outputs — important for any deployment handling customer or employee data',
          ],
        },
        {
          heading: 'Production Time — Knowing What the Model Is Doing at Scale',
          body: 'Deploying safely is not a one-time event. Once a model is live and handling real traffic, you need visibility into every interaction. Production observability catches the problems that training and deployment guardrails missed — including slow drift that no single response makes obvious.',
          bullets: [
            'Prompt and response tracing: a full audit trail of every interaction — essential for incident investigation and compliance',
            'Cost and token tracking: per-request spend, token usage, and budget alerts — production LLMs can run expensive fast without monitoring',
            'Output drift detection: flags quality degradation and behaviour shifts over time — models can change as underlying infrastructure updates',
            'Latency and performance: response time, throughput, and SLA monitoring — user experience degrades before most people notice the technical signal',
          ],
        },
        {
          heading: 'Continuous Evals — Validation That Never Stops',
          body: 'Evals are automated tests that run across all three phases. They are the feedback loop that tells you whether the model is still doing what you expect — and whether any change made things better or worse. In a production system, evals run on every update.',
          bullets: [
            'Benchmarks: standardised capability tests — MMLU, HumanEval, HellaSwag — used to compare models and track capability over versions',
            'Human preference eval: humans rank and compare model outputs — the most direct signal for whether the model is actually good, not just technically correct',
            'LLM-as-judge: a model scores and ranks other models\' outputs — scales human evaluation to volumes no human team can cover manually',
            'Eval harnesses: automated regression suites that run on every model update — catches regressions before they reach users',
          ],
        },
      ],
    },
    {
      id: 'm2l1',
      title: 'Tokens, Context Windows, and Why Size Matters',
      diagram: 'Tokenization',
      slides: [
        { heading: 'Tokens, Not Words', body: 'LLMs read and write in tokens — typically 3-4 characters of English text. Cybersecurity might be 2-3 tokens. Pricing, throughput, and limits are all measured in tokens, not words. Rule of thumb: 750 words ≈ 1,000 tokens.' },
        { heading: 'Tokens for Non-Text Inputs', body: 'Tokens extend beyond text. Images are tokenized as patches — a single 1024×1024 image typically costs hundreds to a few thousand tokens depending on the model. Video is tokenized as frames over time, which is why 30 seconds of video can consume tens of thousands of tokens. Audio is tokenized as discrete sound units. The unit varies, but the principle holds: every modality maps to tokens, every token has a cost.' },
        { heading: 'Context Windows', body: 'The maximum tokens a model can see at once — input plus output. Modern frontier models offer 200K to 2M+ tokens. But longer context does not equal better answers; models often degrade in the middle of very long contexts (lost in the middle).' },
        { heading: 'Security Incidents in Token Terms', body: 'Concrete examples for SE conversations: a typical phishing email plus headers ≈ 500-1,500 tokens. A SIEM alert with enrichment ≈ 200-800 tokens. A 10-page incident report ≈ 4,000-6,000 tokens. A 500-page IR engagement document ≈ 200,000+ tokens. A 30-second deepfake video sample for analysis can exceed 50,000 tokens. This is why batch alert analysis, video forensics, and long-document review have very different cost profiles.' },
        { heading: 'Sales Implication', body: 'When a prospect asks can it analyze our 500-page incident report — yes, technically. But the right answer is often retrieving the relevant slice of the document at query time rather than stuffing everything in the prompt. We will cover that retrieval pattern (RAG) in Lesson 4. This is a credibility marker — push back gently on context-window-as-magic-bullet thinking.' }
      ]
    },
    {
      id: 'm2l2',
      title: 'Embeddings and Vector Search',
      diagram: 'Embeddings',
      slides: [
        { heading: 'What Embeddings Are', body: 'Numerical representations of text (or images, code, audio) where semantically similar items end up near each other in high-dimensional space. Each item becomes a vector — a long list of numbers — and similarity is measured by distance between vectors. Phishing email and credential harvesting message cluster together even with no shared words, because their meanings are close.' },
        { heading: 'Vector Search: Finding Similar Things', body: 'Once content is embedded as vectors, you can ask: what items are closest to this query in vector space? That is vector search — also called semantic search. Unlike keyword search (which matches literal words), it matches meaning. A query for credential theft will surface documents about phishing, password dumps, and token harvesting even when those exact words do not appear.' },
        { heading: 'Why SEs Care', body: 'Embeddings power semantic search, similarity matching, and a lot of modern security ML. When customers describe wanting to find similar incidents, detect novel variants of known attacks, or surface related threat intel — embeddings are usually the underlying technique. They are also the foundation for the retrieval pattern we cover in the next lesson, so this concept compounds.' }
      ]
    },
    {
      id: 'm2l3',
      title: 'RAG: Retrieval-Augmented Generation',
      diagram: 'RAGFlow',
      slides: [
        { heading: 'The Pattern', body: 'Step 1: Embed the user query. Step 2: Find the most relevant chunks from a private knowledge base via vector search. Step 3: Stuff those chunks into the LLM prompt as context. Step 4: Generate an answer grounded in retrieved data.' },
        { heading: 'Why It Dominates Enterprise', body: 'Cheaper than fine-tuning. Updates instantly when source data changes. Provides citations. Keeps proprietary data out of the base model. For security: lets a SecOps copilot answer about your environment, your runbooks, your past incidents — without retraining anything.' },
        { heading: 'Where RAG Fails', body: 'If retrieval is bad, generation is bad. Garbage in, garbage out applies. Chunk strategy, embedding model choice, and reranking matter enormously. A common pilot failure is shipping naive RAG and blaming the LLM when retrieval was the actual problem.' }
      ]
    },
    {
      id: 'm2l4',
      title: 'Fine-Tuning vs. Prompting',
      diagram: 'FTvsPrompting',
      slides: [
        { heading: 'Prompting', body: 'You change behavior by changing instructions. Cheap, instant, reversible. Modern frontier models follow nuanced prompts well. Should be the default for 80%+ of use cases.' },
        { heading: 'Fine-Tuning', body: 'You change behavior by further training on examples. Expensive, slower, harder to update. Useful for specialized domains, fixed output formats, or when you need to bake style/tone into the weights themselves.' },
        { heading: 'The Honest Take', body: 'Most we need a fine-tuned model on our security data requests are actually RAG requests in disguise. Fine-tuning is the right answer when you need behavioral consistency that prompting cannot reliably achieve — far rarer than prospects assume.' }
      ]
    },
    {
      id: 'm2l5',
      title: 'Hallucinations: What They Actually Are',
      diagram: 'HallucinationMitigation',
      slides: [
        { heading: "Not Lying", body: "Hallucination is the model producing fluent, confident output that isn't grounded in reality. The model isn't deceiving — it's sampling probable next-tokens, and probable doesn't mean true. This framing matters because customers often anthropomorphize the failure mode." },
        { heading: 'Mitigation Stack', body: "Grounding (RAG with citations), constrained output formats, retrieval verification, model-as-judge approaches, human-in-the-loop checkpoints. No single technique eliminates hallucinations; defense is layered. The diagram above shows how the layers compose — each catches what the one below missed." },
        { heading: 'Talk Track for Skeptics', body: "Suggested framing: \"You're right that LLMs hallucinate. That's why every response is grounded in retrieved evidence with citations, outputs are constrained to validated formats, and analyst confirmation stays in the loop for high-impact actions. The system isn't replacing human judgment — it's removing the work that doesn't need human judgment.\"" }
      ]
    },
    {
      id: 'm2l6',
      title: 'LLM Infrastructure — How Models Get to Users',
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
            'Distributed training: training splits across many nodes in parallel — a frontier model cannot fit on a single machine, so hundreds or thousands of chips work together',
            'CUDA and GPU frameworks: software that parallelises matrix operations and makes GPUs useful for AI — most AI training runs on CUDA',
            'Cloud vs on-premise: AWS, Azure, and GCP provide GPU compute on demand; on-premise means buying or leasing the hardware yourself — higher control, much higher cost and complexity',
          ],
        },
        {
          heading: 'Optimisation — Making Models Smaller and Cheaper',
          body: 'Frontier models are too large and slow to run efficiently as-is. A set of techniques compresses and accelerates them without destroying their capability. This layer is what makes it practical to run powerful models at enterprise scale — and it directly affects the cost and latency numbers in any commercial conversation.',
          bullets: [
            'Quantisation: reduces model precision to save memory and cost — a model stored in lower numerical precision runs faster and uses less GPU memory with minimal quality loss',
            'Distillation: a smaller model learns from a larger teacher model — produces a compact model that behaves like the original at a fraction of the size',
            'Pruning: removes low-impact weights to reduce model size — the model gets leaner without losing most of its capability',
            'KV caching and speculative decoding: speeds up token generation at inference time — caching avoids recomputing attention for repeated context; speculative decoding predicts multiple tokens ahead to reduce latency',
          ],
        },
        {
          heading: 'Serving — Getting the Model to Users Reliably',
          body: 'The serving layer is everything between the optimised model and the end user. It handles traffic, manages cost, and keeps the system running when demand spikes or something goes wrong. For enterprise deployments, this is where SLAs live.',
          bullets: [
            'API gateway: rate limiting, authentication, routing, and load balancing — every request to an LLM goes through a gateway that controls access and distributes traffic',
            'Request batching: groups concurrent requests for GPU efficiency — running multiple requests together is significantly cheaper than running them one at a time',
            'Autoscaling: scales compute dynamically with demand — adds capacity when traffic spikes, reduces it when idle to control cost',
            'Model versioning and canary deployments: safe rollout of model updates using canary and blue-green deployment patterns — new model versions go to a small percentage of traffic first before full rollout',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'A customer wants their SOC copilot to answer questions using their internal runbooks. What is the right architectural answer?', options: ['Fine-tune a custom model on their runbooks', 'Use RAG to retrieve relevant runbook sections at query time', 'Train a model from scratch', 'Just use a longer context window'], correct: 1 },
    { q: 'Why might a 2M-token context window not solve "analyze our entire knowledge base"?', options: ['It is too expensive', 'Models often degrade attention mid-context (lost in the middle)', 'It is technically impossible', 'Tokens are not real'], correct: 1 },
    { q: 'A hallucination is best described as:', options: ['The model intentionally lying', 'Fluent output not grounded in reality', 'A bug in the code', 'A jailbreak attempt'], correct: 1 }
  ]
};

export default m2;
