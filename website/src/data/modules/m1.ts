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
        { heading: 'The Nesting Dolls', body: 'AI is the broadest umbrella — any system that mimics human intelligence. Machine Learning is a subset where systems learn from data instead of being explicitly programmed. Deep Learning is a subset of ML using multi-layer neural networks. Generative AI is a subset of DL focused on producing new content (text, images, code).' },
        { heading: 'Why This Matters in Sales', body: 'Customers conflate these terms constantly. When a prospect says &quot;we want AI,&quot; your follow-up should be: do you mean predictive analytics on existing data (classic ML), pattern recognition in unstructured data (DL), or content/decision generation (GenAI)? Each has different cost, latency, and risk profiles.' },
        { heading: 'The 30-Second Whiteboard', body: 'Draw four concentric circles. Outermost: AI. Inside: ML. Inside that: DL. Innermost: GenAI. Every GenAI system is a DL system. Every DL system is an ML system. Not all ML is DL — and decision trees, random forests, and SVMs still dominate plenty of security workloads.' }
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
