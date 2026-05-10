import type { Course } from '../../types/course';
import m1 from './m1';
import m2 from './m2';
import m3 from './m3';

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
        ...m1.lessons,
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
        { q: 'Which three factors converged to make modern AI possible?', options: ['Data, compute, algorithms', 'Data, funding, regulation', 'Compute, cloud, APIs', 'Algorithms, startups, researchers'], correct: 0 },
        ...m1.quiz,
      ],
    },
    m2,
    m3,
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
