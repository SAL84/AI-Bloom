import type { CourseModule } from '../../types/course';
import { diagram0a } from '../svgs/diagram0a';
import { diagram0b } from '../svgs/diagram0b';
import { diagram0bi } from '../svgs/diagram0bi';
import { diagram0c } from '../svgs/diagram0c';
import { diagram1 } from '../svgs/diagram1';

const m1: CourseModule = {
  id: 'm1',
  title: 'AI Fundamentals (Fast Pass)',
  icon: 'zap',
  summary: 'Core concepts in plain language — built for anyone who needs to think clearly about AI before pitching, buying, or building with it.',
  lessons: [
    // ── L1 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1l0a',
      title: 'What is AI?\nDefinition and the Revolution',
      inlineSvg: diagram0a,
      inlineSvgId: 'd0a',
      slides: [
        {
          heading: 'What is AI and Why It Matters Right Now',
          body: 'Artificial intelligence is the simulation of human intelligence by machines — enabling systems to perceive, learn, reason, decide, and act. After 70 years of incremental progress, a single architectural breakthrough in 2017 made AI capabilities accessible at scale. Every field is being reshaped, and the question is no longer "should we use AI?" — it is "which AI approach fits this problem, and what are the tradeoffs?"',
          bullets: [
            'AI is no longer experimental — it is embedded in every major productivity, security, and decisioning platform',
            'The landscape is evolving fast: capabilities that were research papers two years ago ship as features today',
            'Anyone who can describe what AI actually does — not just what it looks like — can probe vendor claims and avoid expensive missteps',
          ],
        },
        {
          heading: 'The Cognitive Loop',
          body: 'Every AI system does the same five things — this is the loop that underpins every product claim you will encounter:',
          bullets: [
            'Perceive — takes in data: text, images, sensor feeds, events',
            'Learn — finds patterns in data and adjusts internal weights',
            'Reason — draws conclusions by combining knowledge and context',
            'Decide — weighs options and chooses the best next action',
            'Act — generates output or triggers something in the world',
          ],
        },
        {
          heading: 'How We Got Here: 70 Years in Five Stops',
          body: 'People who say "AI is just hype" are usually referencing a 1980s definition. The Transformer is a qualitative break from everything before it.',
          bullets: [
            '1950s: Turing proposes machine intelligence; first neural nets conceived',
            '1980s: Expert systems hand-code human rules — first AI winter follows',
            '2012: AlexNet wins ImageNet; deep learning proven at scale',
            '2017: "Attention Is All You Need" — the Transformer architecture is published',
            '2022–now: ChatGPT hits 100M users in 2 months; Claude, Gemini, Llama follow',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI is already in tools you use daily — email filters, search, document summaries. Understanding the basics helps you evaluate claims critically.',
          bullets: [
            'AI tools augment your work without requiring technical expertise',
            'The cognitive loop explains why AI sometimes gets things confidently wrong',
            'Ask vendors: which stage of the loop does your product operate in?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'This is your foundation slide. The cognitive loop lets you explain AI behaviour credibly and probe competitor claims with precision.',
          bullets: [
            'SEs who understand AI have a structural advantage — they can probe vendor claims, qualify use cases, and build customer trust faster than peers leaning on marketing language',
            'Counter "AI is hype" by anchoring to the Transformer as a qualitative break, not a trend',
            'Ask: which cognitive loop stage does their product actually automate?',
            'Customers who anthropomorphize AI failure modes need the probabilistic framing first',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The cognitive loop is your design checklist — each stage is a potential failure point and an engineering decision.',
          bullets: [
            'Perceive = data ingestion; Learn = training pipeline; Act = output handling and tool calls',
            'Design failure handling at each stage independently — they fail for different reasons',
            'The loop explains why evaluation must cover all five stages, not just output quality',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients who understand AI as probabilistic reasoning — not a knowledge oracle — set realistic expectations and build better governance.',
          bullets: [
            'Use the 70-year history to counter "this is a bubble" objections with architecture evidence',
            'Map the cognitive loop to the client\'s workflow: which stage creates value, which creates risk?',
            'AI maturity assessment: which loop stage is the client struggling with most?',
          ],
        },
      ],
    },

    // ── L2 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1-tiers',
      title: 'AI Capability Tiers',
      inlineSvg: diagram0bi,
      inlineSvgId: 'd0bi',
      slides: [
        {
          heading: 'Where Products Actually Sit',
          body: 'When someone says "AI" they may mean any of four very different tiers — calibrate early or you will end up talking past each other.',
          bullets: [
            'Narrow AI (today): one task, one domain — superhuman within scope, helpless outside it. Chess engines, spam filters, image classifiers.',
            'Frontier LLMs (today\'s best — Claude, GPT-4, Gemini): trained on one objective but performing across hundreds of domains. No persistent goals or memory.',
            'AGI (not yet achieved): reasons, learns, and adapts across any domain at human level — without retraining per task. No timeline consensus.',
            'Superintelligent AI (hypothetical): surpasses human intelligence across every domain. Raises fundamental safety and alignment questions.',
          ],
        },
        {
          heading: 'Why the Tier Matters',
          body: 'Different tiers carry different cost, latency, explainability, and risk profiles. A pitch that conflates them is a pitch you cannot trust.',
          bullets: [
            'Narrow AI is cheap, fast, and explainable — but brittle outside its training distribution',
            'Frontier LLMs are flexible and capable — but expensive, harder to audit, and prone to confident errors',
            'Most "AI-powered" products in 2026 are still Narrow AI underneath, with an LLM cosmetic layer',
            'AGI claims should be treated as marketing until proven otherwise — no consensus on timeline or definition exists',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Most AI tools you encounter are Narrow AI — excellent at one job, poor at anything outside it. Knowing which tier you\'re using prevents over-trusting or under-using the tool.',
          bullets: [
            'Narrow AI tools fail silently outside their scope — watch for overconfident answers on edge cases',
            'No AI product today has persistent memory or goals unless it\'s explicitly built in',
            'When a vendor uses the word "AGI," treat it as marketing until they can describe what is novel about their approach',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The capability tier framework lets you instantly decode vendor claims and calibrate customer expectations before they make a buying mistake.',
          bullets: [
            'Ask: is this product Narrow AI tuned for one task, or a frontier LLM across many domains?',
            'Use "no persistent goals" to deflect AGI hype and redirect to concrete use-case scoping',
            'A "GenAI-powered" product may still be 80% classical ML underneath — probe what the LLM actually does',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The tier dictates your evaluation strategy, cost envelope, and operational complexity — pick deliberately before architecting.',
          bullets: [
            'Narrow AI is often the right choice: simpler, cheaper, faster to evaluate and replace',
            'Frontier LLMs win for open-ended tasks but cost orders of magnitude more per inference',
            'Resist over-modelling — many problems still have a classical ML or even rule-based answer',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients conflating AGI hype with Narrow AI capabilities make scoping and risk assessment impossible. Use the tier ladder to anchor every conversation.',
          bullets: [
            'Map each proposed use case to a specific tier — AGI promises belong in a different column entirely',
            'Cost and risk profiles are tier-dependent — never quote a Narrow AI budget for a frontier LLM use case',
            'Tier framing makes vendor evaluation tractable and comparable across competing pitches',
          ],
        },
      ],
    },

    // ── L3 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1l1',
      title: 'AI Hierarchy',
      inlineSvg: diagram1,
      inlineSvgId: 'd1',
      slides: [
        {
          heading: 'The Nesting Hierarchy',
          body: 'The diagram shows how every AI term you encounter fits into a single hierarchy. Understanding where a product sits tells you everything about its capabilities, limitations, and failure modes.',
          bullets: [
            'Artificial Intelligence — the outermost layer: any system that simulates human reasoning',
            'Machine Learning — AI that learns from data rather than explicit rules. The dominant technique in production AI today',
            'Deep Learning — a subset of ML using multi-layer neural networks that automatically learn representations from raw data',
            'Generative AI — Deep Learning models trained to produce new content. This is where LLMs, image generators, and code tools live',
          ],
        },
        {
          heading: 'Learning Modes at a Glance',
          body: 'Inside Machine Learning, three training approaches dominate. We cover them in depth in the next lesson — here is just the map.',
          bullets: [
            'Supervised: labelled input/output pairs — the workhorse behind classification, scoring, and prediction',
            'Unsupervised: pattern-finding without labels — clustering, anomaly detection, segmentation',
            'Reinforcement: learning from reward signals — used to fine-tune LLMs and to drive agentic systems',
          ],
        },
        {
          heading: 'LLMs and the Application Layer',
          body: 'NLP\'s most powerful output is the Large Language Model — a Transformer trained on massive text. From LLMs, four distinct product patterns emerge.',
          bullets: [
            'Generative AI: produces text, code, and images on demand — the foundation of copilots and content generation tools',
            'Multimodal: processes and generates across text, image, audio, and video simultaneously. Claude, GPT-4o, and Gemini are multimodal',
            'Agentic AI: LLM + tools + planning loop — takes sequences of actions to complete multi-step goals autonomously',
            'Copilots, classifiers, search: the practical enterprise patterns that sit on top of LLMs and show up in every vendor\'s product pitch',
          ],
        },
        {
          heading: 'Why This Matters',
          body: 'When someone says "we want AI," the hierarchy tells you which conversation to have — regardless of your role.',
          bullets: [
            '"AI" alone is too vague — clarify whether they mean classic ML detection, DL-based pattern recognition, or GenAI/LLM capabilities',
            'Different layers carry different tradeoffs: cost, latency, explainability, data requirements, and attack surface',
            'Not all ML is DL — decision trees, random forests, and SVMs still dominate many production workloads and are often the right answer',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Every AI product you use sits somewhere in this hierarchy — understanding where tells you what it can and can\'t do, and why it sometimes fails in predictable ways.',
          bullets: [
            '"AI-powered" is a marketing phrase — the hierarchy reveals what it actually means',
            'GenAI tools are fundamentally different from spam filters; don\'t evaluate them with the same expectations',
            'If a vendor can\'t tell you where their product sits in the hierarchy, that\'s a red flag worth pulling on',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The hierarchy is your discovery tool. Placing a competitor\'s product precisely in the hierarchy exposes capability gaps and cost tradeoffs they won\'t surface themselves.',
          bullets: [
            'Ask "is this DL-based or classical ML?" — the answer changes the explainability and audit conversation',
            'A vendor claiming "AI-powered" may mean a 10-year-old supervised model or a frontier LLM — the hierarchy gives you the vocabulary to find out which, and the credibility to follow up',
            'Copilot vs agentic AI sit at different layers — map the customer\'s ask to the right node before pitching',
            'Decision trees still outperform DL on small labelled security datasets — know when to recommend simpler',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Each layer of the hierarchy implies a distinct engineering stack, evaluation method, and operational burden — build for the right layer, not the most impressive-sounding one.',
          bullets: [
            'Classical ML (sklearn) vs DL (PyTorch) vs LLM APIs are fundamentally different cost and complexity classes',
            'Agentic AI requires planning loops, tool integration, and state management — not just a model call',
            'Multimodal inputs multiply your data pipeline complexity — budget for it before committing',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients who can\'t place their proposed AI use case in the hierarchy will scope it wrong, budget it wrong, and be disappointed. Use this as a structured intake question.',
          bullets: [
            'Run a hierarchy exercise in the first discovery session to force precise use-case scoping',
            'Different layers have very different cost, latency, and governance profiles — map them to client constraints',
            'Classical ML is often the correct answer for well-defined tasks; avoid DL or LLM bias',
          ],
        },
      ],
    },

    // ── L4 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1-pipeline',
      title: 'The AI Pipeline and Learning Paradigms',
      diagram: 'AIPipeline',
      extraDiagram: 'LearningParadigmsGeneric',
      roleDiagrams: { 'security-se': 'LearningParadigms' },
      slides: [
        {
          heading: 'The AI Pipeline: From Data to Decision',
          body: 'Every AI product runs the same pipeline — understanding it exposes where things break and what vendor claims to probe:',
          bullets: [
            'Collect & clean → raw data is gathered and prepared; quality here determines quality everywhere downstream',
            'Train → a model learns patterns from the data and its weights are frozen',
            'Deploy → the frozen model serves real-time inference; the world keeps changing, the model does not',
            'Feedback loop → outcomes flow back into future retraining — without this, the model is a depreciating asset',
            'Key question for any vendor: is there a feedback loop, or is this a snapshot that never improves from production signals?',
          ],
        },
        {
          heading: 'Three Ways AI Learns',
          body: 'The learning paradigm determines what data the model needs, what it is good at, and where it fails. All three are in production today.',
          bullets: [
            'Supervised: trains on labelled examples ("this is X, this is not X"). Most classical ML works this way — spam filters, classifiers, scoring models. Accuracy depends entirely on label quality.',
            'Unsupervised: finds patterns without labels — clustering, anomaly detection, structure discovery. Strength: catches unknown unknowns. Weakness: high false-positive rates without careful tuning.',
            'Reinforcement: learns from reward signals as it tries actions. Used in agentic systems and LLM post-training (RLHF). This is how chatbots learn to be helpful and game AIs surpass humans.',
          ],
        },
        {
          heading: 'Neural Networks: Layers of Weighted Transforms',
          body: 'A neural network is layers of mathematical neurons. Each applies a weighted transform plus a non-linear function. Stack enough layers and the network can approximate extremely complex functions — that is the whole trick. Training works through three steps: forward pass (data flows through, prediction comes out), loss function (measures how wrong the prediction was), and backpropagation (pushes corrections backwards through the network, adjusting weights). Repeat millions of times. The trained model is just the final set of weights — a frozen snapshot of patterns learned from data. It does not "know" things in a human sense; it computes statistically likely outputs.',
        },
        {
          heading: 'The Transformer: Why Everything Changed in 2017',
          body: 'Deep learning applies across three domains — Natural Language Processing (text), Computer Vision (images and video), and Robotics/Automation (perception and control). All three were transformed by a single 2017 architecture: the Transformer.',
          bullets: [
            'NLP: text understanding and generation — chatbots, translation, summarisation, and the foundation of LLMs',
            'Computer Vision: image recognition and object detection — visual classification, screenshot analysis, CCTV analytics',
            'Robotics and Automation: perception, navigation, and control systems',
            'The Transformer\'s attention mechanism allowed models to learn context across long sequences — enabling the leap from narrow task models to broad-domain LLMs',
            'Everything since 2022 (ChatGPT, Claude, Gemini) is built on this architectural foundation',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'The pipeline explains why AI tools feel stale or wrong — the model is a frozen snapshot from training time. The paradigm explains why some tools are great at spotting anomalies while others need explicit examples. Understanding both tells you when to trust an AI output and when to verify it.',
          bullets: [
            'Ask before relying on any AI tool: is it connected to a live feedback loop, or a frozen snapshot?',
            '"The AI is wrong about recent events" means stale training data — the pipeline has no feedback loop',
            'Supervised tools need good labelled data; unsupervised ones surface patterns but need human interpretation',
            'Confident wrong answers are expected from a probabilistic system — the model cannot tell when it is wrong',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The pipeline and paradigm together are your structured discovery framework. Pipeline questions expose operational debt; paradigm questions expose whether the product actually fits the use case.',
          bullets: [
            'Pipeline: "Does your feedback loop feed the live model or the next training run?" — the answer exposes model freshness risk',
            'Pipeline: "Who owns the retraining cadence on your side?" — gaps here predict procurement and support friction',
            'Paradigm: "Does your use case have reliable labelled data?" — if not, supervised learning will underperform and UEBA noise complaints follow',
            'Paradigm: "Was the model trained on your specific environment?" — reframes "the AI knows our environment" claims accurately',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Pipeline design and paradigm choice are both architectural decisions made before you write a line of model code — and both are expensive to change later.',
          bullets: [
            'Ship a feedback loop from day one — frozen models degrade as the production distribution shifts',
            'Supervised: label quality pipelines are the real investment; accuracy is only as good as the labels',
            'Unsupervised: define anomaly thresholds before shipping — without tuning, alert volume is production-blocking',
            'Loss function choice determines what the model optimises for — make it intentional, not default',
            'Evaluate on held-out data that matches production distribution — benchmark splits tell you nothing about real-world behaviour',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients buy the model and forget the pipeline. They choose a paradigm based on what they\'ve heard about rather than what their data supports. Both mistakes compound into drift and disappointment — audit both before recommending anything.',
          bullets: [
            'Audit pipeline completeness: is there a feedback loop? Who owns monitoring and retraining cadence?',
            'Audit label quality before recommending supervised approaches — garbage labels produce garbage models no matter the architecture',
            'Unsupervised deployments need a tuning and review cadence built into the roadmap — it is not a set-and-forget paradigm',
            'Build retraining and monitoring costs into every TCO model from day one — they are never optional, just underfunded',
          ],
        },
      ],
    },

    // ── L6 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1l4',
      title: 'AI Top Misconceptions',
      inlineSvg: diagram0c,
      inlineSvgId: 'd0c',
      slides: [
        {
          heading: 'Misconception 1 — "More Accuracy = Better AI"',
          body: 'A vendor says their classifier is 99% accurate. It sounds great. But accuracy alone is meaningless without knowing how rare the target actually is. Imagine 100,000 items classified, with 1% actually positive. A 99% accurate model flags 990 true positives — but also 990 false positives from the clean items. Precision is just 50%: for every real hit, there is one false alarm. Same accuracy headline, very different real-world experience depending on the base rate.',
        },
        {
          heading: 'Why the Base Rate Trap Catches Everyone',
          body: 'This is the base rate fallacy: people instinctively focus on the accuracy number and ignore how rare the target actually is. It explains disappointment with AI tools across medical screening, fraud detection, content moderation, recruitment — anywhere the thing being detected is rare. The fix is not "higher accuracy" — it is asking about positive predictive value at the real-world prevalence. That is the number that predicts the actual experience.',
        },
        {
          heading: 'Misconception 2 — "The AI Knows Things Like a Human Does"',
          body: 'A trained model is a frozen set of weights, not a knowledge base. It produces statistically likely outputs based on patterns seen during training. It does not "understand" your business, has no memory of previous conversations unless explicitly given, and cannot tell when it is wrong. Confident-sounding wrong answers are not a malfunction — they are the predictable behaviour of a probabilistic system being asked to act certain.',
        },
        {
          heading: 'Misconception 3 — "AI Keeps Learning From How I Use It"',
          body: 'Most deployed AI models do not learn from your usage. They are frozen snapshots, retrained on a schedule the vendor controls. Feedback loops — when they exist — flow into the next training run, not into the live model you are using right now. The model you are using today reflects what the world looked like at training time. Ask vendors: retraining cadence and what signal drives it.',
        },
        {
          heading: 'Three Questions to Ask Any AI Vendor',
          body: 'Instead of "how accurate is your AI?", ask three sharper questions: (1) What is the base rate of the thing you detect, in a real deployment environment? (2) What does the model output when it does not know the answer — does it say so, or does it guess confidently? (3) How often is it retrained, and on what signal? Vendors who answer all three cleanly are typically the ones worth a deeper conversation. Vendors who deflect any of the three usually have something to hide in that answer.',
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI disappointment almost always traces back to one of these three misunderstandings — and none of them mean the AI is broken. Understanding the difference changes how you evaluate, interpret, and trust AI outputs.',
          bullets: [
            'A flood of false results usually means the target is rare, not that the AI is malfunctioning',
            'AI outputs are probabilistic starting points — verify before acting on anything consequential',
            'Ask how often the AI tool you use is updated — stale training data shows up as confidently wrong recent answers',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'These three misconceptions are your most powerful objection-handling tools when competitors lead with accuracy numbers, and your best discovery openers when a customer complains about noisy results or stale detections.',
          bullets: [
            'Ask: "What was the base rate in the benchmark environment?" — vendors almost never disclose this proactively',
            'Ask customers: "What percentage of opened results are actually real today?" — the answer opens the prioritisation conversation',
            'A vendor claiming "AI-powered" without a clear answer on retraining cadence is selling a frozen snapshot — surface this early',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Precision, recall, and a real retraining strategy are your actual evaluation metrics — accuracy alone is meaningless for rare-event detection, and a model without a feedback loop is a depreciating asset.',
          bullets: [
            'Use precision-recall curves, not accuracy, for any low-base-rate classification problem',
            'Calculate expected false positive volume at production base rates before shipping — never assume accuracy headlines translate',
            'Design retraining cadence and drift monitoring into the system from day one, not as a Year 2 afterthought',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Procurement decisions built on accuracy headlines or "learns over time" promises are almost always wrong. Reframe every client AI evaluation around these three axes: base rate, frozen weights, and retraining cadence.',
          bullets: [
            'Run the base rate calculation live with the client\'s own volume numbers — it lands harder than any slide',
            'Require vendors to disclose benchmark base rates and retraining schedules as procurement conditions, not post-sales surprises',
            'Frame model freshness as a risk — clients consistently underweight this until stale predictions cost them something real',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'A vendor says "we use AI" — what is the best discovery response?', options: ['Pitch your GenAI feature immediately', 'Ask whether they mean classical ML, deep learning, or GenAI/LLM capabilities', 'Recommend the largest model available', 'Tell them all AI is the same'], correct: 1 },
    { q: 'Which paradigm is most associated with anomaly detection in messy data?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Generative'], correct: 1 },
    { q: 'A trained neural network is fundamentally:', options: ['A database of facts', 'A set of weights plus an architecture', 'A reasoning engine', 'A search index'], correct: 1 },
    { q: 'A detector is 99.9% accurate but the target base rate is 1 in 10,000. What happens?', options: ['Users get ~10 false positives for every real hit', 'The system works perfectly because 99.9% is very high', 'False positives are eliminated', 'Base rate has no effect on alert volume'], correct: 0 },
  ],
};

export default m1;
