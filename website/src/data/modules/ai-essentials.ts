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
      title: 'AI Basics & Journey',
      icon: 'zap',
      summary: 'How artificial intelligence evolved from rule-based systems to the models reshaping every industry today.',
      lessons: [
        ...m1.lessons,
        {
          id: 'ae1l5',
          title: 'The Shift: How AI Is Already Reshaping Daily Life',
          slides: [
            {
              heading: 'AI Is Already in Your Day — You Just Stopped Noticing',
              body: 'In 2026, AI is no longer a thing you choose to use — it is the substrate underneath what you already use. The smartphone keyboard predicting your next word, the email that drafts itself, the route your maps app picks, the photo album that recognises faces, the resume screener that decided whether your application was read — all AI. The interesting question is no longer "when will AI matter?" It is "what does it mean that it already does?"',
              bullets: [
                'Search → answers, not links: people increasingly skip the result list and read the AI summary directly',
                'Writing → drafted with AI: most professional emails, slide decks, and reports start from an AI draft',
                'Coding → AI-assisted by default: junior developers write code as a conversation with a copilot',
                'Hiring, lending, healthcare triage → already routed through AI scoring before a human sees you',
                'Learning → tutors that meet you where you are, available 24/7, in your language',
              ],
            },
            {
              heading: 'What Actually Changed',
              body: 'Three things converged — cheap compute, abundant data, and the Transformer architecture — and once they did, AI capability stopped improving linearly. It started compounding. A capability that was a research paper two years ago is a free consumer product today, and a niche enterprise feature next year.',
              bullets: [
                'The doubling time of frontier model capability is measured in months, not years',
                'Cost per token has dropped roughly 10x per year — yesterday\'s expensive workflow is today\'s default',
                'Open-weight models are now competitive with frontier closed models for many tasks',
                'The bottleneck has shifted from "can AI do this?" to "how do we deploy it responsibly?"',
              ],
            },
            {
              heading: 'Why You Have to Adapt — Not Optional',
              body: 'When a technology becomes infrastructure, opting out is no longer a neutral choice. Industries reshape around the new substrate, expectations shift, and the people who learned to work with the new tools become the ones who get hired, promoted, and trusted. The shift is uneven — some fields will be transformed in 12 months, others over 5 years — but the direction is not in question.',
              bullets: [
                'Skills shift: the differentiator is no longer "knows AI exists" — it is "knows how to delegate to AI without losing judgement"',
                'Roles shift: workflows are being redesigned around AI-first patterns, not augmented around legacy patterns',
                'Trust shifts: AI fluency is becoming a precondition for credibility in most knowledge work',
                'Risk shifts: the cost of opting out grows quietly until the moment it becomes a career-defining gap',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI has moved from "tool you optionally use" to "substrate under what you already use." The practical question is not whether to engage with it, but how to engage with it deliberately rather than passively.',
              bullets: [
                'Pick two tools you use weekly and learn their AI features deeply — depth beats breadth',
                'Notice when a decision in your day was already shaped by AI — that is your real exposure surface',
                'Treat "I don\'t use AI" the same way "I don\'t use the internet" sounded in 2005',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'The shift is your strongest argument against "this is a fad" pushback — and the reason every customer conversation eventually becomes an AI conversation, whether the customer realises it or not.',
              bullets: [
                'Lead with the substrate framing: customers are already AI-dependent through their tooling, even before they buy an AI product',
                'Use the compounding cost-and-capability curve to anchor budget conversations — yesterday\'s constraints are not tomorrow\'s',
                'Map each customer\'s workflow to where AI has already arrived versus where it hasn\'t — that gap is your discovery question',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'The compounding curve means your architecture decisions have a shorter half-life than they used to. Build for replaceable components, not for the specific model you chose last quarter.',
              bullets: [
                'Yesterday\'s prohibitively expensive model is today\'s affordable inference call — re-evaluate cost annually',
                'Open-weight options are now strong enough to keep on the shortlist — do not default to frontier-only',
                'The capability frontier moves faster than most release cycles — design for swap-out, not lock-in',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Clients who treat AI as a "project" miss the shift. The change isn\'t a deliverable — it is a re-platforming of how the organisation does its work. Reframe engagements accordingly.',
              bullets: [
                'Move conversations from "where can we add AI?" to "where has AI already arrived in our customers\' and competitors\' workflows?"',
                'Annual AI strategy reviews are now the floor — quarterly checkpoints are the new norm for fast-moving sectors',
                'Workforce readiness is the under-funded line item: tools are cheap, the human adoption curve is the real cost',
              ],
            },
          ],
        },
      ],
      quiz: [
        { q: 'What is the most accurate way to describe AI in everyday life in 2026?', options: ['A future technology people will adopt eventually', 'A substrate already underneath the tools people use daily', 'A specialist tool only for engineers', 'A passing trend driven by marketing'], correct: 1 },
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
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Multimodal AI means you can interact with AI using whatever format is most natural — a screenshot, a voice note, a document — not just typed text.',
              bullets: [
                'Paste a screenshot of an error message and ask the AI to explain it — that\'s multimodal in practice',
                'Audio transcription and image analysis are now part of the same tool, not separate products',
                'The "describe what you see in this image" use case is now available in mainstream AI tools',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Multimodal capabilities unlock security use cases that text-only models can\'t address — visual phishing detection, screenshot-based triage, and deepfake audio analysis.',
              bullets: [
                'Ask: does your current SOC workflow involve screenshots, images, or audio that analysts manually interpret?',
                'Visual phishing detection (logo spoofing, screenshot-based lures) requires multimodal — text-only models miss it',
                'Deepfake audio and video analysis is a multimodal problem — assess whether the customer\'s threat model includes it',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Multimodal inputs multiply your data pipeline and token cost complexity — plan for it before committing to a unified model architecture.',
              bullets: [
                'Image token costs are substantially higher than text — benchmark at your expected image volume before committing',
                'Multimodal models require unified evaluation — test each modality independently and in combination',
                'Build modality-specific preprocessing (image compression, audio chunking) before the model call, not after',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Multimodal capability is rapidly becoming a baseline expectation, not a differentiator. Clients evaluating text-only AI solutions today may need to re-evaluate within 12 months.',
              bullets: [
                'Audit the client\'s workflow for non-text inputs that currently require manual processing — those are multimodal opportunities',
                'Include modality support in vendor evaluation: text-only tools have a shrinking use-case footprint',
                'Cost modelling for multimodal must account for image and audio token pricing — not just text inference rates',
              ],
            },
          ],
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
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Computer vision is already in tools you use — face ID on your phone, photo search in your camera roll, fraud detection in banking apps. It\'s also increasingly part of security systems that monitor physical spaces.',
              bullets: [
                'Object detection explains how AI security cameras identify people or vehicles automatically',
                'Image classification is how AI spam filters catch screenshot-based phishing that evades text filters',
                'As computer vision merges into multimodal LLMs, standalone CV tools are being absorbed into general AI platforms',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Computer vision security use cases — visual phishing, CCTV analytics, malware screenshot analysis — are increasingly handled by multimodal LLMs rather than standalone CV models.',
              bullets: [
                'Ask: are the customer\'s visual security use cases (CCTV, screenshot analysis) using standalone CV or a multimodal LLM?',
                'Visual phishing attacks (logo spoofing, fake login pages as images) require CV to detect — text-based filters miss them entirely',
                'The shift from standalone CV to multimodal LLMs changes vendor evaluation criteria — probe which approach each vendor uses',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Standalone CV models (YOLO, ResNet) and multimodal LLMs solve different problems — choose based on latency, cost, and whether you need language understanding alongside visual understanding.',
              bullets: [
                'Standalone CV models are faster and cheaper for high-volume, single-task visual classification',
                'Multimodal LLMs win when you need language reasoning about visual content — not just classification',
                'Video understanding is computationally expensive at scale — benchmark frame sampling strategies before committing',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Standalone computer vision deployments are being absorbed into multimodal LLM platforms. Clients with separate CV systems should evaluate consolidation as part of their AI modernisation roadmap.',
              bullets: [
                'Audit standalone CV deployments: can they be replaced by a multimodal LLM at lower TCO?',
                'Visual security use cases (CCTV, badge readers, screenshot analysis) are consolidation candidates',
                'CV model retraining cadence is often under-resourced — include it in the operational cost model',
              ],
            },
          ],
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
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI bias isn\'t a glitch — it\'s a direct reflection of patterns in the data the model learned from. If past decisions were biased, the model learns to reproduce those decisions.',
              bullets: [
                'AI in hiring, lending, or healthcare can encode historical discrimination as a statistical pattern',
                'Better AI requires better training data — diverse and representative, not just large',
                'Ask vendors: have you run a bias audit on this model? What were the findings?',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Bias in security AI is a real risk — models trained on historical incident data encode the blind spots and priorities of past analysts, not necessarily the current threat landscape.',
              bullets: [
                'Ask: what data was the model trained on, and does it reflect your customer\'s environment or someone else\'s?',
                'Measurement bias in security ML means the model optimises for the metric, not the outcome — probe for this',
                'Bias audits are increasingly a compliance requirement — ask whether the vendor provides them',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Bias enters at the data collection stage and propagates through training. Testing for it post-training is necessary but insufficient — audit the data pipeline too.',
              bullets: [
                'Test model performance disaggregated by relevant subgroups, not just overall accuracy',
                'Measurement bias (proxy metrics that don\'t reflect the real goal) is the hardest to detect — define success before selecting metrics',
                'Red-team for bias-driven false positives specifically — these are the failures that create operational and legal risk',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'AI bias is increasingly a regulatory and reputational risk, not just an ethics concern. Build bias auditing into every AI deployment as a standard deliverable.',
              bullets: [
                'Require bias audits as a contractual deliverable for any client-facing AI system',
                'Historical bias is particularly acute in security: past incident prioritisation reflects past analyst bias',
                'Include bias risk in the AI governance framework — it belongs alongside privacy and security, not as an afterthought',
              ],
            },
          ],
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
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI safety is about making sure AI systems reliably do what you intend — not just what you literally asked. Alignment, robustness, and interpretability are the three questions you should ask of any AI system making consequential decisions.',
              bullets: [
                'Alignment failure: the AI does what you asked but not what you wanted — be precise in instructions',
                'Robustness failure: the AI behaves differently under unexpected inputs — test edge cases before relying on it',
                'Interpretability: if you can\'t understand why the AI decided something, you can\'t catch when it\'s wrong',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'AI safety in security contexts is about robustness to adversarial inputs and interpretability for compliance — both are distinct from the safety features vendors typically market.',
              bullets: [
                'Ask: how does the product behave when an adversary deliberately crafts inputs to manipulate it?',
                'Ask: can the model explain why it made a detection decision in terms an analyst can validate?',
                'RLHF and CAI are training-time safety — ask also about runtime safety (guardrails, red-teaming cadence)',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Alignment, robustness, and interpretability are engineering properties that require explicit testing — they don\'t emerge automatically from a well-trained model.',
              bullets: [
                'Write alignment tests: does the model produce the intended outcome, not just a plausible-sounding response?',
                'Robustness test against adversarial inputs relevant to your domain before shipping to production',
                'Add interpretability tooling (attention visualisation, chain-of-thought logging) from the start — retrofitting is hard',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'AI safety is moving from academic concern to regulatory requirement. Clients who build safety properties into their AI deployments now are ahead of the compliance curve.',
              bullets: [
                'Map alignment, robustness, and interpretability to client\'s existing risk framework — don\'t introduce new vocabulary',
                'Interpretability is the key safety property for regulated industries — it\'s what enables human oversight and audit',
                'Red-teaming should be a recurring scheduled exercise, not a one-time pre-launch activity',
              ],
            },
          ],
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
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'The five trends here will directly change what AI tools can do for you in the next 12-24 months. Understanding the direction means you can anticipate capability jumps rather than being surprised by them.',
              bullets: [
                'Reasoning models will handle multi-step tasks more reliably — fewer "check the AI\'s work" moments',
                'On-device AI means more AI features without sending your data to the cloud',
                'Regulation means AI tools will need to explain their decisions — interpretability becomes a product requirement',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Each of these five trends creates a new customer conversation — use them as proactive discovery topics rather than reactive responses to customer questions.',
              bullets: [
                'Ask: are you evaluating reasoning models for complex multi-step security analysis? It\'s a real differentiator now',
                'On-device AI is a data sovereignty answer for customers with strict cloud restrictions — probe for this use case',
                'EU AI Act compliance: is your customer in scope? If yes, interpretability and audit trail conversations are urgent',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'These five trends each require architectural decisions today to avoid rework when they mature — especially reasoning models and the regulatory requirements around interpretability.',
              bullets: [
                'Reasoning models produce chain-of-thought traces — log and expose them, don\'t discard them',
                'Design RAG systems to be long-context compatible now — the retrieval threshold will shift as context windows grow',
                'EU AI Act high-risk system requirements may apply to your product — assess this before it becomes a compliance sprint',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'These trends are your client roadmap inputs. Clients making AI investments today should be building toward the 2-year landscape, not just the current capability set.',
              bullets: [
                'Include reasoning model evaluation in any AI strategy engagement — they change the calculus for complex task automation',
                'EU AI Act compliance timelines are tight for clients in scope — make it a current-year action item, not a future concern',
                'On-device AI is a strategic option for privacy-first clients — include it in the architecture options analysis',
              ],
            },
          ],
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
