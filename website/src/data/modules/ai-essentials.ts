import type { Course } from '../../types/course';

const aiEssentials: Course = {
  id: 'ai-essentials',
  title: 'AI Essentials',
  subtitle: 'The complete foundation — from what AI is to how agents think and act',
  glossary: [],
  modules: [
    {
      id: 'ae-m1',
      title: 'The AI Story',
      icon: 'zap',
      summary: 'How artificial intelligence evolved from rule-based systems to the models reshaping every industry today.',
      lessons: [
        {
          id: 'ae1l1',
          title: 'What Is AI?',
          slides: [{
            heading: 'Intelligence in Machines',
            body: 'Artificial intelligence is the ability of a machine to perform tasks that normally require human intelligence — recognising speech, making decisions, translating languages, generating text, and more.',
            bullets: [
              'AI is a broad family of techniques, not a single technology',
              'Most AI today is narrow: exceptional at specific tasks, not general thinking',
              'The goal is not to copy humans — it\'s to do useful things at scale',
            ],
          }],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI is already part of your daily life — from Netflix recommendations to email spam filters. Understanding what AI is helps you use these tools more intentionally and know when to trust them.',
              bullets: [
                'Your phone uses AI for face unlock, autocomplete, and photo sorting',
                'The key insight: AI is pattern matching at scale, not magic',
                'You don\'t need to be technical — you just need to know when to verify',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'When customers ask "how does AI work?" your answer sets the tone for the whole conversation. A clear, jargon-free explanation builds trust and positions you as a guide, not a vendor.',
              bullets: [
                'Use the narrow AI framing: "excellent at specific tasks, not general thinking"',
                'Bridge to their world: "the same technology that filters spam now drives your SIEM\'s anomaly detection"',
                'The goal isn\'t to impress — it\'s to give them a mental model they can actually use',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'As a developer, you\'ll mostly work with AI through APIs and frameworks — not raw research. But understanding the conceptual layers (AI → ML → DL) helps you choose the right tool and avoid over-engineering.',
              bullets: [
                'Most problems don\'t need a frontier model — know when a smaller, cheaper model is enough',
                'The "narrow AI" principle applies to your features too: scope tightly',
                'API-based AI (OpenAI, Anthropic, Google) is the fastest path to production for most teams',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Clients often conflate AI with either magic or sci-fi risk. Your job is to calibrate expectations in both directions — AI is more capable than they think in some areas, and more limited than they fear in others.',
              bullets: [
                'The narrow AI framing defuses both hype and existential fear in one sentence',
                'The gap between "AI in the news" and "AI in the enterprise" is still large — be honest about it',
                'Your value is mapping specific client problems to the right AI capabilities',
              ],
            },
          ],
        },
        {
          id: 'ae1l2',
          title: 'The AI Timeline',
          slides: [{
            heading: 'From Rules to Reasoning',
            body: 'AI has gone through several distinct eras — each one unlocking new capabilities. Understanding the arc helps you see where we are today and why the current moment is different.',
            bullets: [
              '1950s–80s: Rule-based expert systems — brittle, hand-coded logic',
              '1990s–2010s: Machine learning — systems that learn from data, not rules',
              '2012+: Deep learning breakthrough — neural networks scale with data and compute',
              '2017+: Transformer architecture — the engine behind modern LLMs',
              '2022+: Generative AI goes mainstream — ChatGPT, Claude, Gemini',
            ],
          }],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'The AI you interact with today didn\'t appear overnight. It took 70 years of research, several failed attempts, and three specific ingredients converging at once. Knowing this history helps you appreciate why the current wave feels different — and why it\'s unlikely to fizzle like the others did.',
              bullets: [
                'The 1980s AI "winter" happened because systems couldn\'t scale — today\'s systems can',
                'The smartphone era created the data that makes modern AI possible',
                '2022 was a threshold moment, not the beginning of the story',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Customers often ask "is this another AI hype cycle?" The timeline is your answer. This wave has structural differences from previous ones — data scale, compute economics, and foundation models create a self-reinforcing cycle that didn\'t exist before.',
              bullets: [
                'The 2012 ImageNet moment is a useful reference: "that\'s when deep learning proved it could beat humans at recognising images"',
                'Position 2017 (transformers) as the infrastructure breakthrough, 2022 as the application layer arriving',
                'Use this to explain why security vendors are investing now, not waiting',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'The transformer architecture (2017) is the most important moment in this timeline for you. Everything you build on today — GPT, Claude, Gemini, embeddings, agents — runs on variants of that architecture.',
              bullets: [
                'Pre-transformer: AI required task-specific model design for every problem',
                'Post-transformer: one architecture, trained at scale, adapts to almost anything',
                'Understanding the transformer\'s "attention" mechanism unlocks intuition about context windows and token limits',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'The timeline reframes the "is AI overhyped?" question. Previous hype cycles peaked and crashed because the underlying capability wasn\'t there. This time the capability arrived first — the hype followed. That\'s an important distinction when advising on AI strategy.',
              bullets: [
                'Frame past AI winters as infrastructure problems, not intelligence problems',
                'The foundation model shift (train once, deploy everywhere) changes the economics of AI adoption permanently',
                'Clients who waited in previous cycles and missed out are now at risk of repeating that mistake',
              ],
            },
          ],
        },
        {
          id: 'ae1l3',
          title: 'How AI Learns',
          slides: [{
            heading: 'Learning by Example',
            body: 'Most modern AI learns the same way: show it millions of examples, measure how wrong its predictions are, and adjust. Repeat billions of times. The result is a model that has encoded patterns from the data it saw.',
            bullets: [
              'Supervised learning: labelled examples (this image is a cat)',
              'Unsupervised learning: find patterns without labels (cluster these users)',
              'Reinforcement learning: reward good actions, penalise bad ones',
              'The quality and diversity of training data shapes everything',
            ],
          }],
        },
        {
          id: 'ae1l4',
          title: 'AI vs ML vs Deep Learning',
          slides: [{
            heading: 'The Hierarchy Explained',
            body: 'These three terms are often used interchangeably — but they\'re nested concepts, not synonyms. Getting this right prevents a lot of confusion in conversations about AI.',
            bullets: [
              'AI: the broad field of making machines act intelligently',
              'Machine Learning: a subset of AI — systems that learn from data',
              'Deep Learning: a subset of ML — multi-layered neural networks',
              'Generative AI: a capability enabled by deep learning at scale',
            ],
          }],
        },
        {
          id: 'ae1l5',
          title: 'Why AI, Why Now?',
          slides: [{
            heading: 'Three Things Converged',
            body: 'AI ideas are decades old. What changed recently was the simultaneous arrival of three ingredients that made modern AI possible at scale.',
            bullets: [
              'Data: the internet created vast training datasets that didn\'t exist before',
              'Compute: GPUs dropped in price and increased in power (Moore\'s Law + specialisation)',
              'Algorithms: transformer architecture unlocked parallelisation at massive scale',
              'These three don\'t improve linearly — they compound each other',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What does "narrow AI" mean?', options: ['AI that only runs on small devices', 'AI designed for one specific task domain', 'AI with limited network access', 'AI that cannot be fine-tuned'], correct: 1 },
        { q: 'Which architecture enabled modern LLMs?', options: ['Recurrent Neural Networks', 'Convolutional Neural Networks', 'Transformer', 'Expert Systems'], correct: 2 },
        { q: 'Which three factors converged to make modern AI possible?', options: ['Data, compute, algorithms', 'Data, funding, regulation', 'Compute, cloud, APIs', 'Algorithms, startups, researchers'], correct: 0 },
      ],
    },
    {
      id: 'ae-m2',
      title: 'Generative AI & LLMs',
      icon: 'brain',
      summary: 'How large language models work, what they can and cannot do, and the techniques built on top of them.',
      lessons: [
        {
          id: 'ae2l1',
          title: 'What Is Generative AI?',
          slides: [{
            heading: 'AI That Creates',
            body: 'Generative AI produces new content — text, images, code, audio, video — rather than just classifying or predicting from fixed categories. It learns the distribution of its training data and samples from it.',
            bullets: [
              'Text: LLMs like Claude, GPT-4, Gemini',
              'Images: Midjourney, DALL-E, Stable Diffusion',
              'Code: GitHub Copilot, Claude Code, Cursor',
              'Audio & video: emerging rapidly as of 2025',
            ],
          }],
        },
        {
          id: 'ae2l2',
          title: 'How LLMs Work',
          slides: [{
            heading: 'Predicting the Next Word, at Scale',
            body: 'A large language model is trained to predict the most likely next token given everything before it. Do this billions of times across trillions of tokens, and something remarkable emerges: the model encodes a compressed model of language, facts, and reasoning.',
            bullets: [
              'Trained on vast internet text — books, code, conversations, wikis',
              'The transformer architecture processes all tokens in parallel (not word by word)',
              'Attention mechanisms let the model relate any word to any other word in context',
              'Size matters: more parameters = more capacity to encode patterns',
            ],
          }],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Knowing that LLMs work by "predicting likely next words" explains a lot about their behaviour. It\'s why they sound so fluent, why they can write in any style, and also why they sometimes make things up confidently — fluency and accuracy are not the same thing.',
              bullets: [
                'When an LLM answers a question, it\'s generating the most likely response, not looking it up',
                'This is why the same question can get slightly different answers each time',
                'Always verify important facts — fluency is not a signal of accuracy',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Understanding next-token prediction gives you a powerful analogy for customer conversations: "the model doesn\'t look things up, it generates what\'s statistically likely to come next." This single insight explains hallucination, context sensitivity, and why prompting matters.',
              bullets: [
                'Analogy: "It\'s like autocomplete — but trained on everything ever written"',
                'This reframes hallucination: not a bug, an emergent property of how it works',
                'Use it to explain why the same prompt can produce different results — and why that matters for security use cases',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'The key engineering implication of next-token prediction: the model\'s behaviour is entirely determined by what\'s in the context window. Everything you put in the prompt — system instructions, examples, retrieved documents — shapes the output. This is the foundation of prompt engineering and RAG.',
              bullets: [
                'The model has no persistent memory between calls — every API call is stateless',
                'Temperature controls randomness in the next-token sampling process',
                'More context = better output, but also more tokens = higher cost and latency',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Clients often ask "does the AI understand what I\'m saying?" The honest answer from next-token prediction: it processes statistical relationships between words, not meaning in the human sense. This distinction shapes appropriate use cases — and appropriate trust levels.',
              bullets: [
                'Reframe "understanding" as "pattern completion at scale" — more accurate and less anthropomorphic',
                'This insight is critical for scoping where LLMs add value vs where they create risk',
                'The strongest LLM use cases are those where statistical plausibility aligns with correctness — structured documents, code, summarisation',
              ],
            },
          ],
        },
        {
          id: 'ae2l3',
          title: 'Tokens & Context Windows',
          slides: [{
            heading: 'How AI Reads and Remembers',
            body: 'LLMs don\'t process characters or words — they process tokens (roughly 3/4 of a word each). The context window is the total amount of text the model can hold in "working memory" at once.',
            bullets: [
              '1 token ≈ 4 characters or ¾ of a word',
              'GPT-4o: 128K token context (~100,000 words)',
              'Claude: 200K token context (~150,000 words)',
              'Gemini 1.5 Pro: 1M token context (~750,000 words)',
              'Beyond the context window, the model simply doesn\'t remember',
            ],
          }],
        },
        {
          id: 'ae2l4',
          title: 'Prompting: Talking to AI',
          slides: [{
            heading: 'The Words You Use Shape the Output',
            body: 'Prompting is the practice of structuring your input to get better output from an LLM. The model has no persistent memory or goals — it only responds to what\'s in the current context.',
            bullets: [
              'Be specific: vague prompts get vague answers',
              'Provide context: who you are, what you\'re doing, what format you want',
              'Use examples: show the model what a good answer looks like',
              'Chain of thought: ask the model to reason step by step before answering',
              'System prompts set the model\'s role and constraints at the session level',
            ],
          }],
        },
        {
          id: 'ae2l5',
          title: 'Hallucinations & Reliability',
          slides: [{
            heading: 'When AI Confidently Gets It Wrong',
            body: 'LLMs generate plausible text — not verified facts. When a model doesn\'t know something, it often generates a confident-sounding answer anyway. This is called hallucination.',
            bullets: [
              'LLMs don\'t have a "I don\'t know" instinct by default',
              'Hallucinations are highest on obscure facts, recent events, and citations',
              'Mitigation: RAG (grounding in real sources), tool use, system-level fact checks',
              'Always verify AI output for high-stakes decisions',
            ],
          }],
        },
        {
          id: 'ae2l6',
          title: 'RAG: Giving AI a Memory',
          slides: [{
            heading: 'Retrieval-Augmented Generation',
            body: 'RAG connects an LLM to an external knowledge base at query time. Instead of relying only on what the model memorised during training, it retrieves relevant documents and includes them in the prompt.',
            bullets: [
              'Documents are split, embedded as vectors, stored in a vector database',
              'At query time: embed the question, retrieve top-k similar documents',
              'Include retrieved docs in the context — now the model cites real sources',
              'Reduces hallucination and keeps answers current without retraining',
            ],
          }],
        },
        {
          id: 'ae2l7',
          title: 'Fine-Tuning: Teaching AI Your Way',
          slides: [{
            heading: 'Adapting a Model to Your Domain',
            body: 'Fine-tuning continues the training process on your specific data. The model keeps its general language ability and gains new expertise — your terminology, tone, format, and domain knowledge.',
            bullets: [
              'Requires labelled examples of ideal input→output pairs',
              'Cheaper than training from scratch but still significant cost',
              'Works best for consistent format and style, not factual updates',
              'For factual grounding, RAG usually beats fine-tuning',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is a "token" in the context of LLMs?', options: ['A security credential', 'A unit of text (roughly ¾ of a word)', 'An API key', 'A training checkpoint'], correct: 1 },
        { q: 'What does RAG stand for?', options: ['Rapid AI Generation', 'Retrieval-Augmented Generation', 'Recursive Attention Generation', 'Role-Aligned Grounding'], correct: 1 },
        { q: 'Why do LLMs hallucinate?', options: ['Insufficient compute', 'They generate plausible text rather than verified facts', 'Poor tokenisation', 'Context window limits'], correct: 1 },
      ],
    },
    {
      id: 'ae-m3',
      title: 'Agentic AI',
      icon: 'layers',
      summary: 'How AI moves beyond chat into autonomous action — and what that means for capability, trust, and risk.',
      lessons: [
        {
          id: 'ae3l1',
          title: 'From Chatbot to Agent',
          slides: [{
            heading: 'The Shift from Response to Action',
            body: 'A chatbot receives a message and returns a reply. An agent receives a goal and takes a sequence of actions — using tools, making decisions, and iterating — until the goal is achieved or it gets stuck.',
            bullets: [
              'Chatbot: one input → one output, stateless',
              'Agent: goal → plan → action loop → result',
              'Agents can use tools: web search, code execution, file access, APIs',
              'The same LLM can be the "brain" — the agent scaffold is what changes',
            ],
          }],
        },
        {
          id: 'ae3l2',
          title: 'The Agent Loop',
          slides: [{
            heading: 'Think → Act → Observe',
            body: 'The core of an AI agent is a loop. The model reasons about what to do, takes an action (calls a tool), observes the result, and repeats. This is often called the ReAct pattern.',
            bullets: [
              'Think: the model reasons about the current state and what to do next',
              'Act: call a tool — search, run code, read a file, call an API',
              'Observe: the tool result enters the context',
              'Repeat until the task is done or the model decides to stop',
              'Each loop iteration consumes tokens — long tasks can be expensive',
            ],
          }],
        },
        {
          id: 'ae3l3',
          title: 'Tools & Skills',
          slides: [{
            heading: 'What Agents Can Actually Do',
            body: 'An agent\'s capabilities are defined by its tools. Without tools, it\'s just a chatbot. With the right tools, it can browse the web, write and run code, query databases, send emails, and more.',
            bullets: [
              'Web search: access current information beyond training cutoff',
              'Code execution: run Python, process data, generate reports',
              'File access: read documents, write outputs',
              'API calls: trigger workflows, read/write external systems',
              'Tool results are injected back into the context for the model to reason over',
            ],
          }],
        },
        {
          id: 'ae3l4',
          title: 'Agent Protocols: MCP & A2A',
          slides: [{
            heading: 'How Agents Connect to the World',
            body: 'Protocols standardise how agents connect to tools and to each other. Two key protocols are emerging as infrastructure: MCP (Model Context Protocol) for tool connections, and A2A for agent-to-agent communication.',
            bullets: [
              'MCP: standardised way for an LLM to call external tools and data sources',
              'Think of MCP as USB-C for AI tools — one standard, many devices',
              'A2A: lets agents delegate sub-tasks to specialised agents',
              'Multi-agent systems can solve problems too complex for a single agent',
            ],
          }],
        },
        {
          id: 'ae3l5',
          title: 'Autonomy & Risk',
          slides: [{
            heading: 'The More It Can Do, the More That Can Go Wrong',
            body: 'Autonomy is a spectrum. A fully autonomous agent acting on your behalf — with access to email, files, and APIs — is powerful and risky. Understanding the levels helps calibrate trust appropriately.',
            bullets: [
              'Level 1: suggests actions (human approves each one)',
              'Level 2: executes reversible actions autonomously',
              'Level 3: executes irreversible actions — requires robust guardrails',
              'Key risks: prompt injection, scope creep, compounding errors',
              'Design principle: minimal permissions, maximum logging',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is the ReAct pattern in AI agents?', options: ['A React.js framework for AI UIs', 'Think → Act → Observe loop', 'A reinforcement learning reward model', 'A multi-modal attention mechanism'], correct: 1 },
        { q: 'What does MCP stand for?', options: ['Multi-Channel Processing', 'Model Context Protocol', 'Machine Compute Pipeline', 'Managed Cloud Platform'], correct: 1 },
        { q: 'What is "prompt injection" in agentic AI?', options: ['Adding prompts to the training set', 'A malicious input that hijacks the agent\'s behaviour', 'Injecting system prompts via API', 'A method for optimising context usage'], correct: 1 },
      ],
    },
    {
      id: 'ae-m4',
      title: 'AI Frontiers',
      icon: 'shield',
      summary: 'Multimodal AI, computer vision, ethics, safety, and where the field is heading next.',
      lessons: [
        {
          id: 'ae4l1',
          title: 'Multimodal AI',
          slides: [{
            heading: 'Beyond Text',
            body: 'Multimodal models process and generate multiple types of data — text, images, audio, and video — in a single model. This is a major shift from earlier AI systems where each modality required a separate specialised model.',
            bullets: [
              'GPT-4o, Claude, and Gemini are all multimodal',
              'Input: upload an image, describe what you see; paste audio, get a transcript',
              'Output: generate images from text descriptions, narrate a diagram',
              'Multimodal reasoning: "what\'s wrong with this UI screenshot?"',
            ],
          }],
        },
        {
          id: 'ae4l2',
          title: 'Computer Vision',
          slides: [{
            heading: 'AI That Sees',
            body: 'Computer vision is the field of AI that enables machines to interpret visual information — images and video. It underpins facial recognition, medical imaging, autonomous vehicles, and industrial inspection.',
            bullets: [
              'Object detection: identify and locate objects in an image',
              'Image classification: what category does this image belong to?',
              'Semantic segmentation: label every pixel in an image',
              'Video understanding: track objects and actions across frames',
              'Now increasingly part of multimodal LLMs rather than standalone models',
            ],
          }],
        },
        {
          id: 'ae4l3',
          title: 'AI Ethics & Bias',
          slides: [{
            heading: 'AI Reflects Its Training Data',
            body: 'AI systems encode the biases present in the data they were trained on. This is not a fringe concern — it has measurable, real-world consequences in hiring, lending, medical diagnosis, and law enforcement.',
            bullets: [
              'Representation bias: if a group is underrepresented in training data, the model performs worse for them',
              'Historical bias: training on past decisions bakes in past discrimination',
              'Measurement bias: if a proxy metric is flawed, so is the model',
              'Mitigation: diverse training data, bias audits, human review, red-teaming',
            ],
          }],
        },
        {
          id: 'ae4l4',
          title: 'AI Safety',
          slides: [{
            heading: 'Keeping AI Aligned with Human Intent',
            body: 'AI safety is the field concerned with ensuring AI systems do what we actually want — now and as they become more capable. It ranges from immediate practical concerns to long-term alignment research.',
            bullets: [
              'Alignment: does the model pursue the goals we intended?',
              'Robustness: does it behave consistently under adversarial conditions?',
              'Interpretability: can we understand why it made a decision?',
              'RLHF and Constitutional AI are techniques used to align current models',
              'Guardrails, red-teaming, and output filtering are operational safety layers',
            ],
          }],
        },
        {
          id: 'ae4l5',
          title: "What's Next in AI",
          slides: [{
            heading: 'The Frontier Is Moving Fast',
            body: 'The pace of AI development means the landscape six months from now will look meaningfully different from today. Knowing the directions of travel helps you anticipate, not just react.',
            bullets: [
              'Reasoning models: o1, o3, DeepSeek-R1 — explicit chain-of-thought at inference time',
              'Longer context: 1M+ token windows changing what RAG needs to solve',
              'AI-to-AI collaboration: agent networks solving problems in parallel',
              'Smaller, faster models: on-device AI for privacy and latency',
              'Regulation: EU AI Act, US EO on AI — governance is arriving',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What does "multimodal AI" mean?', options: ['AI that runs on multiple servers', 'AI that processes multiple data types (text, image, audio)', 'AI with multiple personality modes', 'A multi-step prompting technique'], correct: 1 },
        { q: 'What is "representation bias" in AI?', options: ['Bias in how AI is represented in the media', 'When a group is underrepresented in training data, causing worse model performance for them', 'An error in the model\'s internal representations', 'Bias introduced by prompt engineering'], correct: 1 },
        { q: 'What does RLHF stand for?', options: ['Reinforcement Learning from Human Feedback', 'Recursive Logic for Hybrid Functions', 'Real-time Learning from Historical Frames', 'Regularised Loss for High-Fidelity models'], correct: 0 },
      ],
    },
  ],
};

export default aiEssentials;
