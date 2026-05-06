import type { CourseModule } from '../../types/course';

const m1: CourseModule = {
  id: 'm1',
  title: 'AI Fundamentals (Fast Pass)',
  icon: '⚡',
  summary: 'Core concepts in plain language — built for technical SEs who want speed, not hand-holding.',
  lessons: [
    {
      id: 'm1l1',
      title: 'AI vs ML vs DL vs GenAI',
      diagram: 'NestedAI',
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
    }
  ],
  quiz: [
    { q: 'A customer says "we need AI for our SOC." What is the best discovery response?', options: ['Pitch your GenAI feature immediately', 'Ask whether they mean predictive ML, pattern recognition, or generative/decisioning use cases', 'Recommend the largest model available', 'Tell them all AI is the same'], correct: 1 },
    { q: 'Which paradigm is most associated with classical UEBA anomaly detection?', options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Generative'], correct: 1 },
    { q: 'A trained neural network is fundamentally:', options: ['A database of facts', 'A set of weights plus an architecture', 'A reasoning engine', 'A search index'], correct: 1 }
  ]
};

export default m1;
