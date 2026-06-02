import type { CourseModule } from '../../types/course';
import { diagram0a } from '../svgs/diagram0a';
import { diagram0b } from '../svgs/diagram0b';
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
      inlineSvg: diagram0b,
      inlineSvgId: 'd0b',
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
      title: 'AI vs ML vs DL vs GenAI',
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
      title: 'The AI Pipeline',
      diagram: 'AIPipeline',
      slides: [
        {
          heading: 'What Actually Happens Under the Hood',
          body: 'Every AI product runs the same pipeline — knowing it exposes where things break and what vendor claims to probe:',
          bullets: [
            'Collect & clean → raw data is gathered and prepared',
            'Train → a model learns patterns from the data',
            'Deploy → the model serves real-time inference',
            'Feedback loop → outcomes flow back into future training',
            'No feedback loop = a frozen snapshot that never improves from production signals',
          ],
        },
        {
          heading: 'Where Pipelines Break',
          body: 'Each stage has a distinct failure mode — and most "the AI got worse" complaints trace back to one of them.',
          bullets: [
            'Bad data in → biased or unreliable model out, no matter how sophisticated the training',
            'Training drift — the world changes but the model is frozen at the moment it was trained',
            'Deployment without monitoring — silent degradation goes unnoticed until customers complain',
            'No feedback loop — the model never improves from how it is actually being used',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'The pipeline explains why AI tools sometimes feel stale or wrong — the model may be a frozen snapshot from months ago that no longer reflects today\'s reality.',
          bullets: [
            'Ask before relying: is this tool connected to a live feedback loop, or a frozen snapshot?',
            '"The AI is wrong about recent events" usually means stale training data, not broken software',
            'New AI features often arrive when a vendor retrains — that is the pipeline at work',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The pipeline framework lets you turn a "show me the magic" pitch into a structured discovery conversation about where the customer\'s value actually lives.',
          bullets: [
            'Discover: does their pipeline have a feedback loop, or does the model degrade silently in production?',
            'Probe data freshness — for threat detection, model age is a hidden compliance and efficacy risk',
            'Ask who owns retraining cadence on the customer side — gaps here predict procurement friction',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The pipeline model is your architecture checklist — every missing stage is a production debt waiting to surface.',
          bullets: [
            'Ship a feedback loop from day one — frozen models degrade as the real-world distribution shifts',
            'Data cleaning is where most pipeline projects fail — budget time accordingly',
            'Instrument deployment for monitoring before scaling traffic — silent degradation is the default',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients often buy the model and forget the pipeline. Re-anchor every engagement around the pipeline so retraining and drift are funded, not assumed.',
          bullets: [
            'Audit the client\'s pipeline: is there a feedback loop? Who owns the retraining cadence?',
            'No feedback loop = a compliance and drift risk that grows invisibly over time',
            'Build retraining and monitoring costs into the TCO model from the start — not as a Year-2 surprise',
          ],
        },
      ],
    },

    // ── L5 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1-journey',
      title: 'Inside the Model: How AI Actually Learns',
      diagram: 'LearningParadigmsGeneric',
      roleDiagrams: { 'security-se': 'LearningParadigms' },
      extraDiagram: 'NeuralNet',
      slides: [
        {
          heading: 'Supervised Learning',
          body: 'A model trains on labelled examples — "this is a cat, this is not a cat." Accuracy depends on label quality. Most classical ML in production today works this way: spam filters, image classifiers, credit scoring, loan approval.',
        },
        {
          heading: 'Unsupervised Learning',
          body: 'A model finds patterns without labels — clustering similar items, detecting anomalies, surfacing structure in messy data. Strength: catches things you did not know to look for. Weakness: high false-positive rates without careful tuning.',
        },
        {
          heading: 'Reinforcement Learning',
          body: 'A model learns from reward signals as it tries actions. Used heavily in agentic systems and in the post-training of LLMs (RLHF — Reinforcement Learning from Human Feedback). This is how chatbots learn to be helpful and how game-playing AIs surpass humans.',
        },
        {
          heading: 'Neural Networks: The Engine',
          body: 'Layers of mathematical neurons, each applying a weighted transform plus a non-linear function. Stack enough layers and the network can approximate extremely complex functions — that is the whole trick.',
        },
        {
          heading: 'Training: How Weights Become Knowledge',
          body: 'Forward pass: data flows through, prediction comes out. Loss function measures error. Backpropagation pushes corrections backward through the network, adjusting weights. Repeat millions of times. The model is just the final set of weights.',
        },
        {
          heading: 'From Numbers to Language: NLP and the Transformer Leap',
          body: 'Deep Learning splits into three application domains — Natural Language Processing (text), Computer Vision (images and video), and Robotics/Automation (perception and control). All three were supercharged in 2017 by a single architecture: the Transformer.',
          bullets: [
            'NLP: text understanding and generation — chatbots, translation, summarisation, and the origin of LLMs',
            'Computer Vision: image recognition and object detection — used in screenshot analysis, visual classification, and CCTV analytics',
            'Robotics and Automation: perception, navigation, and control systems',
            'Transformer architecture: the attention mechanism that unified all three domains — it is why everything changed',
            'A trained model is fundamentally a frozen set of numbers (weights) plus an architecture. It does not "know" things in a human sense — it computes statistically likely outputs from inputs',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Different AI tools learn in fundamentally different ways — which explains why some are great at flagging the unexpected and others excel at following precise rules. And none of them "know" things the way you do.',
          bullets: [
            'Supervised tools need good labelled examples to work well — garbage labels mean wrong answers',
            'Unsupervised tools surface anomalies but require human judgement to interpret',
            'Confident-sounding wrong answers happen because the model is pattern-matching, not reasoning',
            'The model can\'t update its "knowledge" from your conversation — it\'s a frozen snapshot',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Matching the right learning paradigm to the customer\'s use case — and using the "frozen weights" framing — separates informed SEs from order-takers.',
          bullets: [
            'Ask: does your use case have reliable labelled data? If not, supervised learning will underperform',
            'UEBA high false-positive complaints often signal unsupervised models without adequate tuning',
            'When customers say "the AI knows our environment," ask: was it trained on your specific data?',
            'Use "statistically likely output" to reframe hallucination concerns without dismissing them',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Paradigm choice locks in data requirements, evaluation strategy, and operational complexity — pick before you architect. And remember a model is just weights, not a knowledge base.',
          bullets: [
            'Supervised: invest in label quality pipelines first; accuracy is only as good as the labels',
            'Unsupervised: define anomaly thresholds before shipping — without tuning, alert volume is unusable',
            'Loss function choice directly determines what the model optimises for — make it intentional',
            'Evaluate on held-out data that matches production distribution, not benchmark splits',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients often choose a paradigm based on what they\'ve heard about rather than what their data and use case actually supports. And frozen weights mean yesterday\'s model is handling today\'s problems.',
          bullets: [
            'Audit the client\'s labelled dataset quality before recommending supervised approaches',
            'Unsupervised deployments need a tuning and review cycle — build that into the roadmap',
            'Model drift is inevitable — build a monitoring and retraining cadence into every deployment plan',
            'RL is rarely the right first choice; advise clients to prove value with supervised or unsupervised first',
          ],
        },
      ],
    },

    // ── L6 ─────────────────────────────────────────────────────────────────────
    {
      id: 'm1l4',
      title: 'Demystifying AI: Three Misconceptions That Mislead Buyers',
      diagram: 'BaseRate',
      slides: [
        {
          heading: 'Misconception 1 — "More Accuracy = Better AI"',
          body: 'A vendor says their detector is 99.9% accurate. It sounds great. But accuracy on its own is meaningless without knowing how rare the thing being detected actually is. Imagine 100,000 emails per day, with 1 in 10,000 being a real threat. A 99.9% accurate detector flags 0.1% of the 99,990 legitimate emails — that is ~100 false positives for every 10 real threats caught. Same accuracy headline, 10x worse experience as the threat gets rarer.',
        },
        {
          heading: 'Why This Trap Catches Everyone',
          body: 'This is the base rate fallacy: humans instinctively focus on the accuracy number and ignore how rare the target actually is. It explains alert fatigue and disappointment with AI tools in many fields beyond security — medical screening, fraud detection, content moderation. The fix is not "higher accuracy" — it is asking about positive predictive value at the real-world base rate. That is the number that predicts the actual experience.',
        },
        {
          heading: 'Misconception 2 — "The AI Knows Things Like a Human Does"',
          body: 'A trained model is a frozen set of weights, not a knowledge base. It produces statistically likely outputs based on the patterns it saw during training. It does not "understand" your business, has no memory of previous conversations unless explicitly given, and cannot tell when it is wrong. Confident-sounding wrong answers are not a malfunction — they are the predictable behaviour of a probabilistic system being asked to act certain.',
        },
        {
          heading: 'Misconception 3 — "AI Keeps Learning From How I Use It"',
          body: 'Most deployed AI models do not learn from your usage. They are frozen snapshots, retrained on a schedule the vendor controls. Feedback loops — when they exist — flow into the next training run, not into the live model you are using right now. If a vendor cannot explain their retraining cadence, the model you bought today may not match the threat or product landscape six months from now.',
        },
        {
          heading: 'The Question to Ask Vendors',
          body: 'Instead of "how accurate is your AI?", ask three sharper questions: (1) What is the base rate of the thing you detect, in our environment? (2) What does the model fall back to when it does not know? (3) How often is it retrained, and on what signal? Vendors who answer cleanly are typically the ones worth a deeper conversation.',
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI disappointment usually traces back to one of these three misunderstandings — none of which are about the AI being broken. Knowing the difference changes how you should evaluate and interpret AI outputs.',
          bullets: [
            'A flood of false positives means the target is rare, not that the AI is malfunctioning',
            'Use AI outputs as a starting point to verify, not a final answer to trust blindly',
            'Ask how often the AI you use is updated — old training data shows up as bad recent answers',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'These three misconceptions are your most powerful objection-handling tools when competitors lead with accuracy numbers, and your most powerful discovery openers when a prospect complains about alert fatigue or stale detections.',
          bullets: [
            'Ask: "What was the threat base rate in the benchmark environment?" — vendors almost never disclose this',
            'Ask prospects: "What percentage of opened alerts are real today?" — the answer opens the prioritisation conversation',
            'A vendor claiming "AI-powered" without a clear answer on retraining cadence is selling a snapshot — surface this early',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Precision, recall, and a real retraining strategy are your real evaluation metrics — accuracy alone is meaningless, and a model without a feedback loop is a depreciating asset.',
          bullets: [
            'Use precision-recall curves, not accuracy, for any low-base-rate detection problem',
            'Calculate expected daily false positive volume at production base rates before shipping',
            'Design retraining and drift monitoring into the system from day one — not Year 2',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'AI procurement decisions based on accuracy headlines or "AI learns over time" promises are almost always wrong. Reframe every client evaluation around base rate, frozen-weights, and retraining cadence.',
          bullets: [
            'Run the base rate calculation live with the client\'s own volume — it lands harder than slides',
            'Require vendors to disclose benchmark base rates and retraining cadence as procurement conditions',
            'Frame model freshness as a risk, not a feature — clients underweight this until it bites',
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
