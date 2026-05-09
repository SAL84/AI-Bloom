import type { CourseModule } from '../../types/course';
import { diagram2 } from '../svgs/diagram2';

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
          heading: 'Start With the Map',
          body: 'Before diving into individual concepts, this diagram gives you the full landscape. Every LLM term you will encounter — and every question a customer will ask — lives somewhere on this map. Knowing where a concept sits tells you its purpose, its limits, and how it connects to everything else.',
          bullets: [
            'Left column: how models are built (Pre-training) and used (Inference)',
            'Centre: what LLMs power — Generative AI, Multimodal, Agentic AI, and other application patterns',
            'Right column: techniques applied to an existing model — Prompt engineering, RAG, Fine-tuning, RLHF',
            'Bottom row: the core mechanics inside the model — Context window, Tokenisation, Embeddings, Temperature',
          ],
        },
        {
          heading: 'Pre-training vs. Inference',
          body: 'These two phases happen at completely different times and at completely different costs. Pre-training happens once — it is the expensive process where the model learns from hundreds of billions of tokens of text using next-token prediction. Inference happens every time someone uses the model — it is cheaper per call but adds up at scale.',
          bullets: [
            'Pre-training cost: tens to hundreds of millions of dollars for frontier models',
            'Inference cost: fractions of a cent per query — but multiply by millions of daily users',
            'You cannot change a pre-trained model cheaply — that is why fine-tuning and RAG exist',
            'When a customer asks "can we train it on our data?" — they almost always mean fine-tuning or RAG, not pre-training from scratch',
          ],
        },
        {
          heading: 'LLM Application Patterns',
          body: 'The centre of the diagram shows the four main patterns for building products on top of LLMs. Each has a different capability profile and security implication.',
          bullets: [
            'Generative AI: creates text, code, images — the most common pattern; underpins copilots, summarisation, drafting',
            'Multimodal: processes and generates across text, image, audio, and video — used in document analysis, deepfake detection, video triage',
            'Agentic AI: LLM + tools + planning loop — the model takes sequences of actions, not just single responses; highest capability, highest risk surface',
            'Other app patterns: copilots, classifiers, semantic search — often simpler and more predictable than pure generation',
          ],
        },
        {
          heading: 'Techniques Applied Externally',
          body: 'The right column shows what you can do to shape or extend a model\'s behaviour without touching its weights. This is where most enterprise use cases live — and where most SE conversations happen.',
          bullets: [
            'Prompt engineering: changes what the model sees at runtime — cheapest, fastest, most reversible',
            'RAG: injects external knowledge at query time — the standard pattern for grounding answers in customer data',
            'Fine-tuning: retrains the model on domain-specific examples — appropriate when prompt engineering cannot achieve consistent behavior',
            'RLHF: aligns outputs via human feedback — used during model development, not typically something customers do themselves',
          ],
        },
        {
          heading: 'Core Mechanics',
          body: 'The bottom row shows the fundamental mechanics inside every LLM. These come up constantly in technical conversations — understanding them lets you answer the "how does it actually work?" question without overpromising.',
          bullets: [
            'Context window: all text the model sees at once — input plus output, measured in tokens; determines what the model can reason over in a single call',
            'Tokenisation: text is split into model units before processing — affects cost, speed, and how the model handles unusual strings like code or CVE identifiers',
            'Embeddings: semantic vector representations — the basis for similarity search, RAG retrieval, and anomaly detection',
            'Temperature and sampling: controls output randomness — low temperature for deterministic outputs (classification, structured extraction), higher for creative tasks',
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
    }
  ],
  quiz: [
    { q: 'A customer wants their SOC copilot to answer questions using their internal runbooks. What is the right architectural answer?', options: ['Fine-tune a custom model on their runbooks', 'Use RAG to retrieve relevant runbook sections at query time', 'Train a model from scratch', 'Just use a longer context window'], correct: 1 },
    { q: 'Why might a 2M-token context window not solve "analyze our entire knowledge base"?', options: ['It is too expensive', 'Models often degrade attention mid-context (lost in the middle)', 'It is technically impossible', 'Tokens are not real'], correct: 1 },
    { q: 'A hallucination is best described as:', options: ['The model intentionally lying', 'Fluent output not grounded in reality', 'A bug in the code', 'A jailbreak attempt'], correct: 1 }
  ]
};

export default m2;
