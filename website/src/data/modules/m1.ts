import type { CourseModule } from '../../types/course';
import { diagram0a } from '../svgs/diagram0a';
import { diagram0b } from '../svgs/diagram0b';
import { diagram1 } from '../svgs/diagram1';

const m1: CourseModule = {
  id: 'm1',
  title: 'AI Fundamentals (Fast Pass)',
  icon: 'zap',
  summary: 'Core concepts in plain language — built for technical SEs who want speed, not hand-holding.',
  lessons: [
    {
      id: 'm1l0a',
      title: 'What is AI — Definition and the Revolution',
      inlineSvg: diagram0a,
      inlineSvgId: 'd0a',
      slides: [
        { heading: 'What is AI and Why It Matters Right Now', body: 'Artificial intelligence is the simulation of human intelligence by machines — enabling systems to perceive, learn, reason, decide, and act. After 70 years of incremental progress, a single architectural breakthrough in 2017 made AI capabilities accessible at scale. Every field is being reshaped, and cybersecurity is at the center of it.', bullets: ['AI is no longer experimental — it is embedded in every major security platform: Google SecOps, CrowdStrike, Palo Alto, Microsoft Sentinel', 'The threat landscape is evolving in parallel: attackers use AI to generate phishing at scale, automate recon, and evade detection', 'SEs who understand AI have a structural advantage — they can probe vendor claims, qualify use cases, and build customer trust faster', 'The question is no longer "should we use AI?" — it\'s "which AI approach fits this problem, and what are the tradeoffs?"'] },
        { heading: 'The Cognitive Loop', body: 'Every AI system does the same five things — this is the loop that underpins every product claim you will encounter:', bullets: ['Perceive — takes in data: text, images, sensor feeds, events', 'Learn — finds patterns in data and adjusts internal weights', 'Reason — draws conclusions by combining knowledge and context', 'Decide — weighs options and chooses the best next action', 'Act — generates output or triggers something in the world'] },
        { heading: 'How We Got Here: 70 Years in Five Stops', body: 'Customers who say "AI is just hype" are usually referencing a 1980s definition. The Transformer is a qualitative break from everything before it.', bullets: ['1950s: Turing proposes machine intelligence; first neural nets conceived', '1980s: Expert systems hand-code human rules — first AI winter follows', '2012: AlexNet wins ImageNet; deep learning proven at scale', '2017: "Attention Is All You Need" — the Transformer architecture is published', '2022–now: ChatGPT hits 100M users in 2 months; Claude, Gemini, Llama follow'] }
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
    {
      id: 'm1l0b',
      title: 'AI Capability Tiers and the AI Pipeline',
      inlineSvg: diagram0b,
      inlineSvgId: 'd0b',
      slides: [
        { heading: 'Capability Tiers: Where Products Actually Sit', body: 'When a customer says "AI" they may mean any of these tiers — calibrate early:', bullets: ['Narrow AI (today): one task, one domain — superhuman within scope, helpless outside it. Chess engines, spam filters, malware classifiers.', 'Frontier LLMs (today\'s best — Claude, GPT-4, Gemini): trained on one objective but performing across hundreds of domains. No persistent goals or memory.', 'AGI (not yet achieved): reasons, learns, and adapts across any domain at human level — without retraining per task. No timeline consensus.', 'Superintelligent AI (hypothetical): surpasses human intelligence across every domain. Raises fundamental safety and alignment questions.'] },
        { heading: 'The AI Pipeline: What Actually Happens Under the Hood', body: 'Every AI product runs the same pipeline — knowing it exposes where things break and what vendor claims to probe:', bullets: ['Collect & clean → raw data is gathered and prepared', 'Train → a model learns patterns from the data', 'Deploy → model serves real-time inference', 'Feedback loop → outcomes flow back into future training', 'No feedback loop = a frozen snapshot that never improves from production signals'] }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Most AI tools you encounter are Narrow AI — excellent at one job, poor at anything outside it. Knowing which tier you\'re using prevents over-trusting or under-using the tool.',
          bullets: [
            'Narrow AI tools fail silently outside their scope — watch for overconfident answers on edge cases',
            'No AI product today has persistent memory or goals unless it\'s explicitly built in',
            'Ask before relying: is this tool connected to a live feedback loop, or a frozen snapshot?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The capability tier framework lets you instantly decode vendor claims and calibrate customer expectations before they make a buying mistake.',
          bullets: [
            'Ask: is this product Narrow AI tuned for one task, or a frontier LLM across many domains?',
            'Discover: does their pipeline have a feedback loop, or does the model degrade silently in production?',
            'Use "no persistent goals" to deflect AGI hype and redirect to concrete use-case scoping',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The pipeline model is your architecture checklist — every missing stage is a production debt waiting to surface.',
          bullets: [
            'Ship a feedback loop from day one — frozen models degrade as the real-world distribution shifts',
            'Narrow AI is often the right choice: simpler, cheaper, faster to evaluate and replace',
            'Data cleaning is where most pipeline projects fail — budget time accordingly',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients conflating AGI hype with Narrow AI capabilities make scoping and risk assessment impossible. Use the tier ladder to anchor every conversation.',
          bullets: [
            'Map each proposed use case to a specific tier — AGI promises belong in a different column entirely',
            'Audit the client\'s pipeline: is there a feedback loop? Who owns the retraining cadence?',
            'No feedback loop = a compliance and drift risk that grows invisibly over time',
          ],
        },
      ],
    },
    {
      id: 'm1l2',
      title: 'Learning Paradigms',
      diagram: 'LearningParadigms',
      slides: [
        { heading: 'Supervised Learning', body: 'Model trains on labeled data — &quot;this email is phishing, this one is not.&quot; Accuracy depends on label quality. Most classical security ML (spam filters, malware classifiers) works this way.' },
        { heading: 'Unsupervised Learning', body: 'Model finds patterns without labels — clustering similar behaviors, detecting anomalies. UEBA and many behavioral analytics features lean here. Strength: catches unknowns. Weakness: high false positive rates without tuning.' },
        { heading: 'Reinforcement Learning', body: 'Model learns via reward signals from actions taken. Used heavily in agentic systems and post-training of LLMs (RLHF). Less common in shipping security products today, but growing in autonomous response.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Different AI tools learn in fundamentally different ways — which explains why some are great at flagging unusual behaviour and others excel at following precise rules.',
          bullets: [
            'Supervised tools need good labelled examples to work well — garbage labels mean wrong answers',
            'Unsupervised tools surface anomalies but require human judgement to interpret',
            'When an AI tool flags something unexpected, ask which paradigm is driving it',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Matching the right learning paradigm to the customer\'s use case is a discovery skill that separates informed SEs from order-takers.',
          bullets: [
            'Ask: does your use case have reliable labelled data? If not, supervised learning will underperform',
            'UEBA high false-positive complaints often signal unsupervised models without adequate tuning',
            'Reinforcement learning in agents means the system\'s behaviour can shift over time — ask about eval cadence',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Paradigm choice locks in data requirements, evaluation strategy, and operational complexity — pick before you architect.',
          bullets: [
            'Supervised: invest in label quality pipelines first; accuracy is only as good as the labels',
            'Unsupervised: define anomaly thresholds before shipping — without tuning, alert volume is unusable',
            'RL in agents: log reward signals from day one; you cannot reconstruct why the model learned what it did without them',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients often choose a paradigm based on what they\'ve heard about rather than what their data and use case actually supports.',
          bullets: [
            'Audit the client\'s labelled dataset quality before recommending supervised approaches',
            'Unsupervised deployments need a tuning and review cycle — build that into the roadmap',
            'RL is rarely the right first choice; advise clients to prove value with supervised or unsupervised first',
          ],
        },
      ],
    },
    {
      id: 'm1l1',
      title: 'AI vs ML vs DL vs GenAI',
      inlineSvg: diagram1,
      inlineSvgId: 'd1',
      slides: [
        { heading: 'The Nesting Hierarchy', body: 'The diagram shows how every AI term you encounter fits into a single hierarchy. Understanding where a product sits tells you everything about its capabilities, limitations, and failure modes.', bullets: ['Artificial Intelligence — the outermost layer: any system that simulates human reasoning', 'Machine Learning — AI that learns from data rather than explicit rules. The dominant technique in production security products today', 'Deep Learning — a subset of ML using multi-layer neural networks that automatically learn representations from raw data', 'Generative AI — Deep Learning models trained to produce new content. This is where LLMs, image generators, and code tools live'] },
        { heading: 'How Models Learn — Three Paradigms', body: 'Inside Machine Learning, three training approaches dominate. The diagram shows them as distinct boxes — in practice, real products often combine them.', bullets: ['Supervised: trains on labelled input/output pairs — "this email = phishing, this one = safe." Underlies most classical security ML: spam filters, malware classifiers, DLP', 'Unsupervised: finds patterns without labels — clustering, anomaly detection, dimensionality reduction. Powers UEBA and behavioral analytics. Catches unknowns; produces more false positives', 'Reinforcement: learns from reward signals — an agent tries actions and gets feedback. Used in post-training of LLMs (RLHF) and in agentic systems that take sequences of actions'] },
        { heading: 'Deep Learning Domains and the Transformer', body: 'Deep Learning splits into three application domains — all three were supercharged by a single architecture that appeared in 2017.', bullets: ['Natural Language Processing (NLP): text understanding and generation — chatbots, translation, summarisation, and the origin of LLMs', 'Computer Vision: image recognition and object detection — used in malware screenshot analysis, visual phishing detection, and CCTV analytics', 'Robotics and Automation: perception, navigation, and control systems', 'Transformer architecture: the attention mechanism that unified all three domains. Click it in the diagram — it is why everything changed'] },
        { heading: 'LLMs and the Application Layer', body: 'NLP\'s most powerful output is the Large Language Model — a Transformer trained on massive text. From LLMs, four distinct product patterns emerge.', bullets: ['Generative AI: produces text, code, and images on demand — the foundation of copilots and content generation tools', 'Multimodal: processes and generates across text, image, audio, and video simultaneously. Claude, GPT-4o, and Gemini are multimodal', 'Agentic AI: LLM + tools + planning loop — takes sequences of actions to complete multi-step goals autonomously', 'Copilots, classifiers, search: the practical enterprise patterns that sit on top of LLMs and show up in every vendor\'s product pitch'] },
        { heading: 'Why This Matters in Sales', body: 'When a customer says "we want AI," the hierarchy tells you which conversation to have.', bullets: ['"AI" alone is too vague — ask whether they mean classic ML detection, DL-based anomaly detection, or GenAI/LLM capabilities', 'Different layers carry different tradeoffs: cost, latency, explainability, data requirements, and attack surface', 'Not all ML is DL — decision trees, random forests, and SVMs still dominate many security workloads and are often the right answer', 'A vendor claiming "AI-powered" may mean a 10-year-old supervised model or a frontier LLM. The hierarchy gives you the vocabulary to find out which'] }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Every AI product you use sits somewhere in this hierarchy — understanding where tells you what it can and can\'t do, and why it sometimes fails in predictable ways.',
          bullets: [
            '"AI-powered" is a marketing phrase — the hierarchy reveals what it actually means',
            'GenAI tools are fundamentally different from spam filters; don\'t evaluate them with the same expectations',
            'If a vendor can\'t tell you where their product sits in the hierarchy, that\'s a red flag',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The hierarchy is your discovery tool. Placing a competitor\'s product precisely in the hierarchy exposes capability gaps and cost tradeoffs they won\'t surface themselves.',
          bullets: [
            'Ask "is this DL-based or classical ML?" — the answer changes the explainability and audit conversation',
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
            'Classical ML is often the correct answer for well-defined security tasks; avoid DL or LLM bias',
          ],
        },
      ],
    },
    {
      id: 'm1l3',
      title: 'Neural Networks in Five Minutes',
      diagram: 'NeuralNet',
      slides: [
        { heading: 'The Core Idea', body: 'Layers of mathematical neurons, each applying a weighted transform plus a non-linear function. Stack enough layers and the network can approximate extremely complex functions — that is the whole trick.' },
        { heading: 'Training', body: 'Forward pass: data flows through, prediction comes out. Loss function measures error. Backpropagation pushes corrections backward through the network, adjusting weights. Repeat millions of times. The model is just the final set of weights.' },
        { heading: 'What an SE Needs to Remember', body: 'A model is fundamentally a frozen set of numbers (weights) plus an architecture. It does not know anything in a human sense — it computes statistically likely outputs from inputs. This framing resolves a lot of customer confusion before it starts, especially around what models can and cannot reason about.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'A neural network doesn\'t "know" things the way you do — it computes statistically likely outputs from its training data. This explains both its surprising capabilities and its surprising failures.',
          bullets: [
            'Confident-sounding wrong answers happen because the model is pattern-matching, not reasoning',
            'The model can\'t update its "knowledge" from your conversation — it\'s a frozen snapshot',
            'Use AI outputs as a starting point to verify, not a final answer to trust blindly',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The "frozen weights" framing is your most powerful tool for correcting customer anthropomorphization before it creates unrealistic expectations.',
          bullets: [
            'When customers say "the AI knows our environment," ask: was it trained on your specific data?',
            'Backpropagation explains why retraining takes time and money — useful when customers ask for quick model updates',
            'Use "statistically likely output" to reframe hallucination concerns without dismissing them',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'The training loop is an engineering pipeline with well-defined failure modes at each step — treat it like one.',
          bullets: [
            'Loss function choice directly determines what the model optimises for — make it intentional',
            'Overfitting is a data quality and regularisation problem, not a model architecture problem',
            'Evaluate on held-out data that matches production distribution, not benchmark splits',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients who understand that a model is a frozen computation — not a learning system — make better governance decisions about retraining cadence and model versioning.',
          bullets: [
            'Ask clients: who owns the retraining schedule, and what triggers a new training run?',
            'Model drift is inevitable — build a monitoring and retraining cadence into every deployment plan',
            'Frozen weights mean yesterday\'s model is handling today\'s threats — frame freshness as a risk',
          ],
        },
      ],
    },
    {
      id: 'm1l4',
      title: 'Base Rates: Why "99% Accurate" Can Still Drown You',
      diagram: 'BaseRate',
      slides: [
        { heading: 'The Question Every SE Gets Wrong', body: 'A customer asks: "What is your detection accuracy?" The wrong answer is a number. The right answer is a question back: "What is the base rate of the threat in your environment?" Accuracy without base rate is meaningless — and this is one of the most counterintuitive facts in all of security AI.' },
        { heading: 'The Math That Changes Everything', body: 'Imagine a phishing detector that is 99.9% accurate. Your customer receives 100,000 emails per day. Assume 1 in 1,000 is actually a phishing attempt — that is 100 real threats. The detector catches 99 of them (good). But it also flags 0.1% of the 99,900 legitimate emails as phishing — that is 100 false positives. Result: for every real phishing email caught, there is one false alarm. Now shrink the base rate: if only 1 in 10,000 emails is a real threat, the same "99.9% accurate" detector produces 10 false positives for every true positive. Accuracy stayed the same. The analyst experience got 10x worse.' },
        { heading: 'The Base Rate Fallacy in the SOC', body: 'This is called the base rate fallacy — humans instinctively focus on the accuracy number and ignore how rare the thing being detected actually is. It explains alert fatigue completely. The SOC is not overwhelmed because the AI is broken. It is overwhelmed because low-prevalence threats mathematically guarantee a flood of false positives at any reasonable accuracy level. The fix is not better accuracy — it is smarter prioritization using likelihood ratios: how much more likely is this signal to appear in a real attack than in normal traffic? A high likelihood ratio matters far more than a high accuracy headline.' },
        { heading: 'How to Use This in a Customer Conversation', body: 'When a competitor claims higher accuracy, do not fight the number. Instead ask: "What was the base rate of the threat in the test environment?" Vendor benchmarks almost always use inflated threat rates that make accuracy numbers look good. In a real enterprise, threats are rare and the math always punishes you. The better question to ask prospects: "Of the alerts your analysts open today, what percentage turn out to be real?" That number — the positive predictive value — is what actually matters, and it is almost always shockingly low. It opens the conversation about what changes when you apply smarter prioritization rather than raw detection.' }
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Alert fatigue in your organisation isn\'t caused by a broken AI — it\'s a mathematical consequence of rare threats combined with high accuracy. Understanding this changes how you should interpret and act on AI alerts.',
          bullets: [
            'A flood of false positives means the threat is rare, not that the AI is malfunctioning',
            'Ask what percentage of alerts your team actually confirms as real — that\'s the number that matters',
            'High headline accuracy can coexist with a terrible analyst experience — look for positive predictive value',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Base rate is your most powerful objection-handling tool when competitors lead with accuracy numbers — and your most powerful discovery opener when a prospect complains about alert fatigue.',
          bullets: [
            'Ask: "What was the threat base rate in the benchmark environment?" — vendors almost never disclose this',
            'Ask prospects: "What percentage of opened alerts are real today?" — the answer opens the prioritisation conversation',
            'Positive predictive value, not accuracy, is the metric that predicts analyst experience',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Precision and recall are your real evaluation metrics — accuracy is meaningless on imbalanced security datasets where threats are rare.',
          bullets: [
            'Use precision-recall curves, not accuracy, for any low-base-rate detection problem',
            'Class imbalance techniques (SMOTE, weighted loss) are essential before evaluating detection models',
            'Calculate expected daily false positive volume at production base rates before shipping — not just benchmark accuracy',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'AI procurement decisions based on accuracy headlines are almost always wrong. Reframe every client evaluation around positive predictive value at their actual base rate.',
          bullets: [
            'Run the base rate calculation live with the client\'s own alert volume — it lands harder than slides',
            'Require vendors to disclose benchmark base rates as a procurement condition',
            'Prioritisation quality matters more than raw detection rate for SOC productivity ROI',
          ],
        },
      ],
    }
  ],
  quiz: [
    { q: 'A customer says "we need AI for our SOC." What is the best discovery response?', options: ['Pitch your GenAI feature immediately', 'Ask whether they mean predictive ML, pattern recognition, or generative/decisioning use cases', 'Recommend the largest model available', 'Tell them all AI is the same'], correct: 1 },
    { q: 'Which paradigm is most associated with classical UEBA anomaly detection?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Generative'], correct: 1 },
    { q: 'A trained neural network is fundamentally:', options: ['A database of facts', 'A set of weights plus an architecture', 'A reasoning engine', 'A search index'], correct: 1 },
    { q: 'A detector is 99.9% accurate but the threat base rate is 1 in 10,000. What happens?', options: ['Analysts get 10 false positives for every real threat caught', 'The system works perfectly because 99.9% is very high', 'False positives are eliminated', 'Base rate has no effect on alert volume'], correct: 0 }
  ]
};

export default m1;
