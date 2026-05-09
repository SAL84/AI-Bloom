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
