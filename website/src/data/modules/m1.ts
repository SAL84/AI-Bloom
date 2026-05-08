import type { CourseModule } from '../../types/course';
import { diagram0a } from '../svgs/diagram0a';
import { diagram0b } from '../svgs/diagram0b';
import { diagram1 } from '../svgs/diagram1';

const m1: CourseModule = {
  id: 'm1',
  title: 'AI Fundamentals (Fast Pass)',
  icon: '⚡',
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
      ]
    },
    {
      id: 'm1l0b',
      title: 'AI Capability Tiers and the AI Pipeline',
      inlineSvg: diagram0b,
      inlineSvgId: 'd0b',
      slides: [
        { heading: 'Capability Tiers: Where Products Actually Sit', body: 'When a customer says "AI" they may mean any of these tiers — calibrate early:', bullets: ['Narrow AI (today): one task, one domain — superhuman within scope, helpless outside it. Chess engines, spam filters, malware classifiers.', 'Frontier LLMs (today\'s best — Claude, GPT-4, Gemini): trained on one objective but performing across hundreds of domains. No persistent goals or memory.', 'AGI (not yet achieved): reasons, learns, and adapts across any domain at human level — without retraining per task. No timeline consensus.', 'Superintelligent AI (hypothetical): surpasses human intelligence across every domain. Raises fundamental safety and alignment questions.'] },
        { heading: 'The AI Pipeline: What Actually Happens Under the Hood', body: 'Every AI product runs the same pipeline — knowing it exposes where things break and what vendor claims to probe:', bullets: ['Collect & clean → raw data is gathered and prepared', 'Train → a model learns patterns from the data', 'Deploy → model serves real-time inference', 'Feedback loop → outcomes flow back into future training', 'No feedback loop = a frozen snapshot that never improves from production signals'] }
      ]
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
      ]
    },
    {
      id: 'm1l2',
      title: 'Learning Paradigms',
      diagram: 'LearningParadigms',
      slides: [
        { heading: 'Supervised Learning', body: 'Model trains on labeled data — &quot;this email is phishing, this one is not.&quot; Accuracy depends on label quality. Most classical security ML (spam filters, malware classifiers) works this way.' },
        { heading: 'Unsupervised Learning', body: 'Model finds patterns without labels — clustering similar behaviors, detecting anomalies. UEBA and many behavioral analytics features lean here. Strength: catches unknowns. Weakness: high false positive rates without tuning.' },
        { heading: 'Reinforcement Learning', body: 'Model learns via reward signals from actions taken. Used heavily in agentic systems and post-training of LLMs (RLHF). Less common in shipping security products today, but growing in autonomous response.' }
      ]
    },
    {
      id: 'm1l3',
      title: 'Neural Networks in Five Minutes',
      diagram: 'NeuralNet',
      slides: [
        { heading: 'The Core Idea', body: 'Layers of mathematical neurons, each applying a weighted transform plus a non-linear function. Stack enough layers and the network can approximate extremely complex functions — that is the whole trick.' },
        { heading: 'Training', body: 'Forward pass: data flows through, prediction comes out. Loss function measures error. Backpropagation pushes corrections backward through the network, adjusting weights. Repeat millions of times. The model is just the final set of weights.' },
        { heading: 'What an SE Needs to Remember', body: 'A model is fundamentally a frozen set of numbers (weights) plus an architecture. It does not know anything in a human sense — it computes statistically likely outputs from inputs. This framing resolves a lot of customer confusion before it starts, especially around what models can and cannot reason about.' }
      ]
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
      ]
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
