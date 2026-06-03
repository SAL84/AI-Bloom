import type { Course } from '../../types/course';
import m1 from './m1';
import m2 from './m2';
import { diagram0d } from '../svgs/diagram0d';
import { diagram4a } from '../svgs/diagram4a';
import { diagram4b } from '../svgs/diagram4b';
import { diagram4c } from '../svgs/diagram4c';

const aiEssentials: Course = {
  id: 'ai-essentials',
  title: 'AI Essentials',
  subtitle: 'The complete foundation — from what AI is to how agents think and act',
  glossary: [],
  modules: [
    // ── M1: AI Basics & Journey ───────────────────────────────────────────
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
          inlineSvg: diagram0d,
          inlineSvgId: 'd0d',
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

    // ── M2: AI Frontiers ──────────────────────────────────────────────────
    {
      id: 'ae-m2',
      title: 'AI Frontiers',
      icon: 'eye',
      summary: 'How AI crossed from text into images, audio, and video — and what computer vision unlocks across security, medicine, and automation.',
      lessons: [
        {
          id: 'ae2l1',
          title: 'Multimodal AI',
          inlineSvg: diagram4a,
          inlineSvgId: 'd4a',
          slides: [
            {
              heading: 'Beyond Text: One Model, Every Sense',
              body: 'Multimodal models process and generate multiple types of data — text, images, audio, and video — in a single model. This is a major architectural shift from earlier AI where each modality required a separate specialised system. GPT-4o, Gemini Ultra, and Claude 3.7 Sonnet are all multimodal: you can send an image of an error message, a recording of a meeting, or a screenshot of a dashboard and get intelligent analysis back.',
              bullets: [
                'Input: upload a screenshot and ask what\'s wrong here; paste audio and get a structured summary',
                'Output: text answers, generated images, transcripts, and cross-modal analysis',
                'Cross-modal reasoning: "explain the trend in this chart" requires the model to read text and parse an image simultaneously',
                'Single API call: no need to pre-process modalities into separate services before querying',
              ],
            },
            {
              heading: 'How Multimodal Models Work',
              body: 'Each modality — text, image, audio — is converted into tokens and mapped into a shared embedding space. The transformer\'s attention mechanism then operates over all tokens regardless of modality, allowing the model to reason across them. An image patch token can attend to a text instruction token, enabling true cross-modal understanding rather than just side-by-side concatenation.',
              bullets: [
                'Vision encoders (like ViT) convert image regions into patch tokens the language model can attend over',
                'Audio encoders convert spectrogram frames into token sequences for unified processing',
                'All tokens enter a shared transformer backbone — modality boundaries disappear at the attention layer',
                '2025 milestone: real-time audio + video understanding is now production-ready in frontier models',
              ],
            },
            {
              heading: 'Real-World Applications You Can Use Now',
              body: 'Multimodal AI is no longer experimental — it ships in tools you use daily. The shift from describing a problem in text to showing the AI what you\'re looking at is fundamentally changing how knowledge work gets done.',
              bullets: [
                'Screenshot debugging: paste an error screen, get an explanation and fix — no retyping',
                'Document analysis: upload a scanned contract or a photo of a whiteboard and extract structured data',
                'Meeting intelligence: record audio, get a transcript with action items, decisions, and attendee summaries',
                'Security: screenshot-based phishing detection, deepfake audio analysis, visual anomaly detection in camera feeds',
                'Healthcare: medical imaging analysis, lab result interpretation from scanned reports',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Multimodal AI means you can interact using whatever format is most natural — a screenshot, a voice note, a photo, a document — not just typed text. The practical result: fewer steps to get help with a problem.',
              bullets: [
                'Take a screenshot of something confusing and ask the AI to explain it — that\'s multimodal in practice',
                'Record a voice memo about a problem and let the AI transcribe and act on it',
                'The "describe what you see in this image" use case is now mainstream — stop retyping what you can show',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Multimodal capabilities unlock security use cases that text-only models cannot address. The key discovery question is whether the customer has visual or audio workflows currently handled by human analysts.',
              bullets: [
                'Ask: does your SOC workflow involve screenshots, images, or audio that analysts manually interpret? — that\'s your multimodal opportunity',
                'Visual phishing detection (logo spoofing, screenshot-based lures) requires multimodal — text-only models miss image-in-email attacks entirely',
                'Deepfake audio and video detection for BEC and fraud analysis is a multimodal problem, assess whether it\'s in the customer\'s threat model',
                'CCTV and physical security analytics increasingly use multimodal LLMs rather than standalone computer vision models',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Multimodal inputs multiply your data pipeline and token cost complexity. Plan for it before committing to a unified model architecture, and benchmark modality-specific costs at expected volume before launch.',
              bullets: [
                'Image token costs are substantially higher than text — a single high-res image can cost as much as thousands of text tokens',
                'Multimodal models require unified evaluation — test each modality independently and in combination; failures often appear at modality boundaries',
                'Build modality-specific preprocessing (image compression, audio chunking, frame sampling) before the model call — not after',
                'For video: sample frames strategically rather than passing every frame; most video information is redundant frame-to-frame',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Multimodal capability is rapidly becoming a baseline expectation. Clients evaluating text-only AI solutions today may face a significant re-evaluation within 12 months as multimodal use cases mature.',
              bullets: [
                'Audit the client\'s workflow for non-text inputs currently requiring manual processing — those are multimodal ROI candidates',
                'Include modality support in vendor evaluation: text-only tools have a shrinking use-case footprint in 2026',
                'Cost modelling for multimodal must account for image and audio token pricing separately from text inference rates',
                'The consolidation play: multimodal LLMs are absorbing standalone computer vision and speech-to-text products — map the client\'s tech stack for redundancy',
              ],
            },
          ],
        },
        {
          id: 'ae2l2',
          title: 'Computer Vision',
          slides: [
            {
              heading: 'AI That Sees: From Specialised Models to Multimodal LLMs',
              body: 'Computer vision is the field enabling machines to interpret visual information — images and video. It underpins facial recognition, medical imaging, autonomous vehicles, and industrial inspection. The field is undergoing a structural shift: standalone CV models (YOLO, ResNet, SAM) are increasingly being supplemented or replaced by multimodal LLMs that combine vision with language understanding, enabling richer reasoning over visual content.',
              bullets: [
                'Object detection: identify and locate objects in an image — powers security cameras, inventory systems, autonomous vehicles',
                'Image classification: what category does this image belong to? — spam filters, content moderation, medical triage',
                'Semantic segmentation: label every pixel — surgical planning, satellite analysis, autonomous driving',
                'Video understanding: track objects and actions across frames — surveillance, sports analytics, manufacturing QA',
              ],
            },
            {
              heading: 'Standalone CV vs. Multimodal LLMs: Choosing the Right Tool',
              body: 'The choice between a dedicated computer vision model and a multimodal LLM depends on what you\'re optimising for. Standalone CV models win on speed and cost for high-volume, single-task classification. Multimodal LLMs win when you need language reasoning alongside visual understanding — asking "why is this anomalous" rather than "is this anomalous".',
              bullets: [
                'Standalone CV (YOLO, EfficientDet): fast, cheap, ideal for real-time or high-volume single-task pipelines',
                'Multimodal LLMs (GPT-4o, Gemini, Claude): slower, costlier, but can explain, compare, and reason across visual content',
                'Hybrid: use standalone CV to detect, then multimodal LLM to interpret and recommend — best of both',
                'The convergence direction: frontier labs are absorbing specialised CV capabilities into their multimodal models each release cycle',
              ],
            },
            {
              heading: 'Security-Specific Computer Vision Use Cases',
              body: 'Security applications of computer vision span the physical and digital worlds. The most mature use cases are already in production; the emerging ones are where competitive advantage lies in 2025–2026.',
              bullets: [
                'Mature: badge access analytics, CCTV object detection, licence plate recognition, perimeter monitoring',
                'Emerging: deepfake image/video detection for BEC and fraud, visual phishing detection (logo spoofing in screenshots), malware UI screenshot analysis',
                'AI-native: multimodal SOC copilots that can receive a screenshot of a suspicious email or alert dashboard and reason about it directly',
                'Key question: is your current visual security workflow powered by a standalone CV model, a multimodal LLM, or still human eyes?',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Computer vision is already in tools you use daily — face ID on your phone, photo search in your camera roll, fraud detection in banking apps. Its merger with multimodal LLMs means you can now ask AI to reason about what it sees, not just classify it.',
              bullets: [
                'Object detection explains how AI security cameras identify people or vehicles automatically without human review of every frame',
                'Image classification is how AI spam filters catch screenshot-based phishing that evades text-only filters',
                'As CV merges into multimodal LLMs, the distinction between "seeing AI" and "thinking AI" disappears',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'The CV-to-LLM transition is a displacement conversation waiting to happen. Customers with standalone CV deployments for security should be evaluating whether a multimodal LLM delivers more value at comparable or lower TCO.',
              bullets: [
                'Ask: are the customer\'s visual security workflows (CCTV, screenshot analysis) using standalone CV or a multimodal LLM?',
                'Visual phishing attacks (logo spoofing, fake login pages as images) require CV or multimodal — text-based filters miss them entirely',
                'Probe the deepfake threat model: is the customer\'s risk profile changing as voice/video deepfakes become commodity tools?',
                'Positioning: standalone CV gives detection; multimodal LLM gives detection + explanation + recommended response — different buyer conversations',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Standalone CV models and multimodal LLMs are not interchangeable — they solve different problems. Commit to the right tool before building, because the integration footprint is very different.',
              bullets: [
                'Standalone CV: lower latency, higher throughput, much lower per-image cost — right for high-volume single-task pipelines',
                'Multimodal LLM: richer reasoning, language output, zero-shot generalisation — right when you need explanation alongside detection',
                'Video understanding at scale is expensive regardless of approach — design frame-sampling strategies early',
                'Evaluation gap: CV models are evaluated on detection metrics (mAP, IoU); multimodal LLMs need language quality metrics too — build both evaluation suites',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Standalone CV deployments are being absorbed into multimodal LLM platforms. Clients with separate CV systems should evaluate consolidation as part of their AI modernisation roadmap.',
              bullets: [
                'Audit standalone CV deployments: can they be replaced by a multimodal LLM at lower total cost of ownership?',
                'Physical security use cases (CCTV, badge readers) and digital security use cases (screenshot analysis) are consolidation candidates under one AI platform',
                'CV model retraining cadence is often under-resourced — include it in the operational cost model when comparing to API-based multimodal services',
                'The "vision-only" vendor category is shrinking — include vendor platform roadmaps in the evaluation, not just current capability',
              ],
            },
          ],
        },
      ],
      quiz: [
        { q: 'What does "multimodal AI" mean?', options: ['AI that runs on multiple servers', 'AI that processes multiple data types such as text, image, and audio', 'AI with multiple personality modes', 'A multi-step prompting technique'], correct: 1 },
        { q: 'When would you choose a standalone computer vision model over a multimodal LLM?', options: ['When you need language reasoning about what the model sees', 'For high-volume, single-task visual classification at low cost and latency', 'When you want explanation alongside detection', 'For zero-shot generalisation to new visual categories'], correct: 1 },
        { q: 'Which attack type requires multimodal AI to detect and cannot be caught by text-only filters?', options: ['SQL injection', 'Password spraying', 'Visual phishing using spoofed logo images in screenshots', 'Credential stuffing'], correct: 2 },
      ],
    },

    // ── M3: LLMs & Generative AI (imported) ──────────────────────────────
    m2,

    // ── M4: AI Ethics & Safety ────────────────────────────────────────────
    {
      id: 'ae-m4',
      title: 'AI Ethics & Safety',
      icon: 'scale',
      summary: 'The four pillars of responsible AI — fairness, transparency, accountability, and safety — and why they matter for everyone who uses, builds, or buys AI.',
      lessons: [
        {
          id: 'ae4l1',
          title: 'AI Ethics & Bias',
          inlineSvg: diagram4b,
          inlineSvgId: 'd4b',
          slides: [
            {
              heading: 'AI Reflects Its Training Data — Flaws Included',
              body: 'AI systems encode the biases present in the data they were trained on. This is not a fringe concern — it has measurable, real-world consequences in hiring, lending, medical diagnosis, and law enforcement. Understanding how bias enters AI systems is the prerequisite for catching it before it causes harm.',
              bullets: [
                'Representation bias: if a group is underrepresented in training data, the model performs worse for them — not through malice but through statistical underexposure',
                'Historical bias: training on past decisions bakes in past discrimination — the model learns that certain hiring or lending outcomes were "correct" even when they weren\'t fair',
                'Measurement bias: if a proxy metric is flawed (e.g. using arrest records as a proxy for criminality), so is the model',
                'Feedback loops: biased predictions create biased outcomes, which become future training data — bias can compound over time',
              ],
            },
            {
              heading: 'Where Bias Shows Up in Practice',
              body: 'Bias in AI is most dangerous in high-stakes automated decisions — the ones that affect livelihoods, access to credit, healthcare, and justice. The field is past theoretical concern; there are documented cases of consequential AI bias across industries.',
              bullets: [
                'Hiring: resume-screening AI trained on historical hires can encode gender or ethnic bias from past hiring managers\' decisions',
                'Lending: credit-scoring models can disadvantage neighbourhoods or demographic groups based on proxies correlated with race',
                'Healthcare: diagnostic AI trained predominantly on one population may perform worse for underrepresented groups',
                'Security: threat-detection models trained on historical incident data may encode the blind spots of past analysts',
                'Content moderation: models trained on English-dominant data perform poorly on minority languages and dialects',
              ],
            },
            {
              heading: 'Mitigating Bias: What Works',
              body: 'Bias cannot be eliminated post-training with a patch — it must be addressed throughout the AI development lifecycle. The most effective mitigations address data, evaluation, and deployment simultaneously.',
              bullets: [
                'Diverse training data: curate for demographic representation, not just volume — larger datasets with systematic gaps are still biased',
                'Disaggregated evaluation: test model performance broken down by relevant subgroups, not just overall accuracy — aggregate metrics hide subgroup failures',
                'Bias audits: structured third-party reviews before deployment and on a recurring schedule after',
                'Human review: for high-stakes decisions, require human sign-off rather than fully automated outcomes',
                'Red-teaming for bias: actively try to find discriminatory outputs — if you\'re not looking, you won\'t find them',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI bias isn\'t a glitch — it\'s a direct reflection of patterns in the data the model learned from. If past decisions were biased, the model learns to reproduce those decisions. Knowing this protects you from trusting AI outputs that may systematically disadvantage you or people around you.',
              bullets: [
                'AI in hiring, lending, or healthcare can encode historical discrimination as a learned statistical pattern',
                'Better AI requires better training data — diverse and representative, not just large',
                'Ask vendors and tools: have you run a bias audit on this model? What were the findings? A vendor with no answer has not looked.',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Bias in security AI is a real and underappreciated risk. Models trained on historical incident data encode the blind spots, priorities, and demographics of past security operations — not necessarily the current threat landscape or your customer\'s environment.',
              bullets: [
                'Ask: what data was the model trained on, and does it reflect your customer\'s environment, industry, and threat actors — or someone else\'s?',
                'Measurement bias in security ML means the model optimises for the proxy metric, not the actual outcome — probe whether the metric and the goal are genuinely aligned',
                'Bias audits are increasingly a compliance requirement under the EU AI Act and US sector-specific guidance — ask whether the vendor provides them and on what schedule',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Bias enters at data collection and propagates through training. Testing post-training is necessary but insufficient — you need to audit the data pipeline, evaluation methodology, and deployment context.',
              bullets: [
                'Test model performance disaggregated by relevant subgroups — never rely on aggregate accuracy as the sole quality signal',
                'Measurement bias (proxy metrics that don\'t reflect the real goal) is the hardest to detect — define what "success" means for the end user before selecting metrics',
                'Red-team for bias-driven false positives specifically — these failures create both operational and legal risk in production',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'AI bias is increasingly a regulatory and reputational risk, not just an ethics concern. Build bias auditing into every AI deployment as a standard deliverable — not an optional add-on.',
              bullets: [
                'Require bias audits as a contractual deliverable for any client-facing AI system making automated decisions',
                'Historical bias is particularly acute in security and HR: past decisions reflected past analyst and hiring manager bias — surface this explicitly',
                'Include bias risk in the AI governance framework — it belongs alongside privacy and security risk, not as an afterthought',
              ],
            },
          ],
        },
        {
          id: 'ae4l2',
          title: 'AI Safety & Alignment',
          slides: [
            {
              heading: 'Keeping AI Aligned with Human Intent',
              body: 'AI safety is the field concerned with ensuring AI systems do what we actually intend — not just what we literally asked for. Alignment is harder than it sounds: a model trained to maximise a reward signal will find unexpected ways to do so if the signal is imperfect. This is not a hypothetical problem — it manifests in every deployed model as hallucination, reward hacking, and refusal failures.',
              bullets: [
                'Alignment: does the model pursue the goals we intended, or does it optimise for proxies that diverge from real intent?',
                'Robustness: does it behave correctly under adversarial, unusual, or out-of-distribution inputs?',
                'Interpretability: can we understand why it made a decision — or is it a black box?',
                'RLHF (Reinforcement Learning from Human Feedback) and Constitutional AI are the leading alignment techniques used in frontier models today',
                'Guardrails, red-teaming, and output filtering are the operational safety layer applied at deployment time',
              ],
            },
            {
              heading: 'Safety Techniques: From Training to Runtime',
              body: 'AI safety is implemented at multiple stages of the model lifecycle. Training-time techniques shape model behaviour at the source; runtime techniques catch failures at deployment. Both layers are necessary — neither alone is sufficient.',
              bullets: [
                'RLHF: human raters rank model outputs; a reward model learns their preferences; the policy model is optimised toward high-reward outputs',
                'Constitutional AI (Anthropic): the model critiques its own outputs against a set of principles, iteratively improving without requiring human rating of every example',
                'DPO (Direct Preference Optimisation): simpler RLHF alternative, widely adopted because it avoids training a separate reward model',
                'Red-teaming: structured attempts to make the model produce harmful, biased, or off-scope outputs — essential before and after deployment',
                'Output filtering and guardrails: runtime layers that intercept and block harmful outputs regardless of what the model produces',
              ],
            },
            {
              heading: 'The Frontier Safety Challenge',
              body: 'As AI models become more capable, alignment becomes harder — not easier. More capable models can find more creative ways to satisfy a reward signal without satisfying the intent behind it. This is the core concern of frontier AI safety research, and it matters practically for anyone deploying AI in consequential settings.',
              bullets: [
                'Reward hacking: the model finds unexpected ways to maximise the reward signal without doing what you wanted',
                'Goodhart\'s Law: when a measure becomes a target, it ceases to be a good measure — AI amplifies this effect',
                'Scalable oversight: using AI to help humans supervise more capable AI — the approach frontier labs are researching',
                'Interpretability research: understanding the circuits inside the model that produce specific behaviours — mechanistic interpretability is an active frontier',
                'Practical implication: the more autonomy you grant an AI system, the more important robust alignment and oversight become',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI safety is about making sure AI systems reliably do what you intend — not just what you literally asked. Alignment, robustness, and interpretability are the three questions you should ask of any AI system making consequential decisions for you.',
              bullets: [
                'Alignment failure: the AI does what you asked but not what you wanted — be precise and specific in your instructions',
                'Robustness failure: the AI behaves differently under unexpected inputs — test edge cases before relying on it for important decisions',
                'Interpretability: if you can\'t understand why the AI decided something, you can\'t catch when it\'s wrong',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'AI safety in security contexts is about robustness to adversarial inputs and interpretability for compliance — both are distinct from the safety marketing language most vendors use. Probe for the substance behind the claims.',
              bullets: [
                'Ask: how does the product behave when an adversary deliberately crafts inputs to manipulate it? — this is adversarial robustness, not generic safety',
                'Ask: can the model explain why it made a detection decision in terms an analyst can validate and an auditor can review?',
                'RLHF and Constitutional AI are training-time safety — ask also about runtime safety: guardrails, red-teaming cadence, and incident response for safety failures',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Alignment, robustness, and interpretability are engineering properties that require explicit design and testing — they don\'t emerge automatically from a well-trained model.',
              bullets: [
                'Write alignment tests: does the model produce the intended outcome, not just a plausible-sounding response that satisfies the literal instruction?',
                'Robustness-test against adversarial inputs relevant to your domain before shipping to production — not just against standard benchmarks',
                'Add interpretability tooling (chain-of-thought logging, confidence calibration, attention output) from the start — retrofitting observability is significantly harder',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'AI safety is moving from academic concern to regulatory requirement. Clients who build safety properties into their AI deployments now are ahead of the EU AI Act compliance curve and ahead of the reputational curve.',
              bullets: [
                'Map alignment, robustness, and interpretability to the client\'s existing risk framework — translate AI safety into risk language the board already understands',
                'Interpretability is the key safety property for regulated industries — it is what enables human oversight and satisfies audit requirements',
                'Red-teaming should be a recurring scheduled exercise, not a one-time pre-launch activity — include it in the operational AI governance cadence',
              ],
            },
          ],
        },
      ],
      quiz: [
        { q: 'What is "representation bias" in AI?', options: ['Bias in how AI is represented in the media', 'When a group is underrepresented in training data, causing worse model performance for them', 'An error in the model\'s internal representations', 'Bias introduced by prompt engineering'], correct: 1 },
        { q: 'What does RLHF stand for?', options: ['Reinforcement Learning from Human Feedback', 'Recursive Logic for Hybrid Functions', 'Real-time Learning from Historical Frames', 'Regularised Loss for High-Fidelity models'], correct: 0 },
        { q: 'What is "Goodhart\'s Law" and why does it matter for AI?', options: ['Models always converge to the correct answer given enough training data', 'When a measure becomes a target, it ceases to be a good measure — AI systems find unexpected ways to maximise the reward signal', 'AI models cannot generalise beyond their training distribution', 'Interpretability is impossible for large neural networks'], correct: 1 },
      ],
    },

    // ── M5: What is Next in AI ────────────────────────────────────────────
    {
      id: 'ae-m5',
      title: 'What is Next in AI',
      icon: 'rocket',
      summary: 'The four trends reshaping AI in 2025–2027: reasoning models, agentic systems, on-device AI, and the regulation layer that is beginning to govern all of them.',
      lessons: [
        {
          id: 'ae5l1',
          title: 'Reasoning Models',
          inlineSvg: diagram4c,
          inlineSvgId: 'd4c',
          slides: [
            {
              heading: 'AI That Thinks Before It Answers',
              body: 'Reasoning models represent a qualitative shift in how AI approaches hard problems. Rather than generating a response immediately, reasoning models spend compute "thinking" — producing an explicit chain-of-thought scratchpad before committing to a final answer. OpenAI\'s o1 and o3, Anthropic\'s extended thinking, and DeepSeek-R1 are the pioneering examples. The result is dramatically better performance on tasks requiring multi-step logic, mathematics, code debugging, and structured analysis.',
              bullets: [
                'Standard LLMs: generate output tokens autoregressively, one token at a time, without deliberation',
                'Reasoning models: generate a "thinking" scratchpad first, then the final response — internal deliberation made visible',
                'Training approach: process reward models and reinforcement learning on reasoning traces, not just outcome correctness',
                'Strengths: mathematics, competitive coding, multi-step planning, legal analysis, complex debugging',
                'Limitations: 10–50× more tokens per response means meaningfully higher cost — not the right tool for simple tasks',
              ],
            },
            {
              heading: 'When to Use Reasoning Models',
              body: 'Reasoning models are not universally better than standard LLMs — they are a specialised tool for tasks where deliberate multi-step thinking produces meaningfully better outcomes. The cost-to-benefit tradeoff depends entirely on the task complexity.',
              bullets: [
                'Right for reasoning models: security vulnerability analysis, contract review, architectural planning, competitive maths, complex code audit',
                'Wrong for reasoning models: simple Q&A, summarisation, classification, routine drafting — standard models are cheaper and just as good',
                'The test: would a smart human benefit from thinking carefully for 30 seconds before answering? If yes, a reasoning model probably helps',
                'Cost signal: if you are spending 10× more tokens for a 5% quality improvement on a task, you have the wrong tool',
                'Hybrid pattern: use a fast cheap model for triage and routing, a reasoning model only for the subset of cases that genuinely need it',
              ],
            },
            {
              heading: 'What Reasoning Models Change for Practitioners',
              body: 'Reasoning models shift the frontier of what can be automated. Tasks that previously required senior expert judgment — because they involved multi-step reasoning under ambiguity — can now be partially delegated to AI. This changes hiring decisions, workflow design, and the competitive baseline for knowledge work.',
              bullets: [
                'The "junior analyst" uplift: reasoning models can do tasks that previously required experienced practitioners — the quality gap narrows significantly',
                'Security: complex threat analysis, attribution reasoning, and multi-step forensic investigation are all improved by reasoning models',
                'Legal and compliance: contract review, regulatory gap analysis, policy interpretation — areas where multi-step logic matters most',
                'Engineering: architecture review, security code auditing, debugging complex distributed system failures',
                'The new benchmark: if a reasoning model can handle 70% of a senior analyst\'s hard cases, the workflow changes — not just the tools',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'Reasoning models mean AI can now handle problems that genuinely require thinking through — not just pattern-matching an answer. For hard, multi-step problems in your work, they represent a real capability jump.',
              bullets: [
                'Use reasoning models for tasks where you would benefit from thinking carefully before committing to an answer',
                'They are slower and more expensive — reserve them for hard problems, not routine ones',
                'The practical test: if you have tried a standard AI model and it gets the answer wrong or shallow, try a reasoning model before giving up',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Reasoning models create a new discovery conversation with security buyers: which of their high-judgment analyst tasks are now automatable? The answer is usually more than they expect.',
              bullets: [
                'Ask: what are the hardest tasks your senior analysts do that take the most time? — those are your reasoning model use cases',
                'Positioning differentiator: reasoning models produce auditable chain-of-thought, which helps with compliance and analyst review',
                'Probe: is the customer evaluating reasoning models for complex multi-step security analysis? It\'s a real differentiator for complex detection and hunting tasks',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Reasoning models produce chain-of-thought traces that are valuable artefacts — log and expose them, don\'t discard them. They also require different prompting strategies and cost management patterns.',
              bullets: [
                'Reasoning traces are debugging gold: when a reasoning model gets something wrong, the trace shows you exactly where the logic failed',
                'Don\'t suppress the chain-of-thought in your API calls — surface it to the analyst or user when the stakes are high',
                'Cost management: implement task complexity scoring to route to reasoning models only when the task genuinely warrants it',
                'Evaluation: test reasoning models with multi-step benchmarks specific to your domain — generic benchmarks miss domain-specific failure modes',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Reasoning models change the calculus for complex task automation in client organisations. Include them in every AI strategy engagement — not as a niche capability, but as the baseline for high-judgment workflows.',
              bullets: [
                'Map client workflows by task complexity — identify which senior-expert tasks are now automatable with reasoning model assistance',
                'The ROI conversation shifts: reasoning models cost more per call but may cost far less than senior expert time on the same task',
                'Include reasoning model evaluation in any AI strategy engagement — ignoring them means recommending yesterday\'s capability ceiling',
              ],
            },
          ],
        },
        {
          id: 'ae5l2',
          title: 'Agentic AI Goes Mainstream',
          slides: [
            {
              heading: 'From Copilot to Agent: A Qualitative Shift',
              body: 'A copilot assists humans who remain in full control of every decision. An agent is given a goal and autonomously figures out the steps, tools, and sequence required to achieve it. This is not an incremental improvement — it is a qualitatively different operating model. In 2025–2026, agents are moving from research demos to production deployments across security, software development, and business operations.',
              bullets: [
                'Copilot: "help me write this email" — human writes, AI suggests, human edits and sends',
                'Agent: "schedule a meeting with the relevant stakeholders about the Q3 incident report" — agent finds contacts, checks calendars, drafts and sends, handles replies',
                'The defining property of an agent: autonomous multi-step action toward a goal, not single-turn response to a query',
                'Trust spectrum: human-in-loop (approves every action) → human-on-loop (reviews outcomes) → fully autonomous (acts independently)',
                'Most production agents in 2026: human-on-loop — agents do the work, humans review and approve outcomes',
              ],
            },
            {
              heading: 'Multi-Agent Systems and Protocol Infrastructure',
              body: 'Production agents rarely act alone. Orchestrator agents delegate to specialist sub-agents, each with scoped tools and permissions. MCP (Model Context Protocol) and A2A (Agent-to-Agent) are the emerging protocol standards enabling interoperability between agents and tools across vendors.',
              bullets: [
                'Orchestrator → sub-agent pattern: one orchestrator breaks a goal into tasks, delegates each to a specialised agent',
                'MCP (Model Context Protocol): JSON-RPC standard for agents to discover and call tools — vendor-agnostic, widely adopted in 2025',
                'A2A (Agent-to-Agent): emerging protocol for agent discovery and delegation across different systems and vendors',
                'Example: a SOC orchestrator delegates to a threat intel sub-agent, an EDR sub-agent, and an IAM sub-agent — each specialised, each scoped',
                'Governance: multi-agent systems require agent identity, privilege management, and audit logging for every action',
              ],
            },
            {
              heading: 'The Production Reliability Gap',
              body: 'Agent demos are easy. Production agents are hard. Agentic systems fail in ways that standard AI systems do not: they can loop indefinitely, compound errors across multiple tool calls, and fail at step 7 with no way to resume from step 6. Building reliable production agents requires infrastructure that most teams underestimate.',
              bullets: [
                'Tracing: log every LLM call, tool call, and tool result with latency and token counts — without this, debugging is impossible',
                'State management: agents need persistent state so they can resume after failure — not restart from scratch',
                'Retry and error handling: transient tool failures should not kill the entire task — design for partial failure',
                'Human escalation: when confidence is low or an action is irreversible, pause and ask — build escalation into the agent loop from the start',
                'Rollback: for destructive actions (deleting files, sending emails, modifying records) design an undo path before writing the action',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'An AI agent is different from a chatbot: it pursues a goal across multiple steps, using tools and making decisions — you stay on the loop reviewing outcomes, not approving every micro-decision. Understanding the difference helps you know when to use which, and what oversight to maintain.',
              bullets: [
                'Use agents for multi-step tasks with a clear goal: "research this topic and draft a briefing", "find the relevant documents and summarise them"',
                'Stay on the loop: even the best agents make mistakes — review outcomes before the work affects anything real',
                'Start with narrow scope: give agents one tool at a time until you trust their judgement in your context',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'Agentic AI is the core of the SOC transformation story. The shift from copilot to agent changes the CISO conversation from "AI as a feature" to "AI as an operating model." Position accordingly.',
              bullets: [
                'Frame the conversation: copilots assist analysts; agents pre-investigate before the analyst opens the case — that\'s the time-to-investigate reduction',
                'Discovery question: "when an agent closes an alert autonomously, who reviews that decision and on what schedule?" — this surfaces the governance gap to address',
                'MCP is the integration angle: when the customer understands MCP, the connector tax argument opens naturally — one protocol, every tool, no SOAR playbook maintenance',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Building production-reliable agents requires infrastructure investment that most teams underestimate. Plan for tracing, state management, and human escalation from the first design, not as retrofits.',
              bullets: [
                'Instrument every agent action: LLM call → tool call → tool result → next decision — this trace is your debugging and audit trail',
                'Design for partial failure: step 7 of a 10-step task should be resumable, not a restart — implement checkpointing',
                'Least-privilege tool permissions: an agent reading emails should not also have permission to send them — scope permissions to the minimum required for each action',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'Most client AI strategies treat agents as a future capability. They are current-year production deployments. Reframe the conversation from planning to piloting.',
              bullets: [
                'The maturity ladder: most clients are at copilot phase — help them design the agent pilot that gets them to human-on-loop',
                'Governance first: define escalation criteria, audit review cadence, and rollback procedures before the agent goes live',
                'ROI measurement: measure time-to-investigate and analyst capacity freed — these are the metrics that make the agent case to the CFO',
              ],
            },
          ],
        },
        {
          id: 'ae5l3',
          title: 'On-Device & Open-Weight AI',
          slides: [
            {
              heading: 'AI That Runs on Your Device',
              body: 'Until 2024, running a capable AI model required cloud infrastructure — a GPU cluster serving inference requests over an API. In 2025–2026, that assumption breaks. 7B–13B parameter models run with near-instant latency on consumer laptops and smartphones. Apple Intelligence, Google Gemini Nano, and Meta Llama 3.2 on-device are production deployments, not experiments. The implications for privacy, latency, cost, and data sovereignty are significant.',
              bullets: [
                'What "on-device" means: the model weights and inference run locally — no network request, no data leaving the device',
                'Scale: Llama 3.2 3B and 11B, Phi-4-mini, Gemini Nano — models small enough for a phone but capable enough for real tasks',
                'Apple Intelligence: on-device models for writing assistance, summarisation, and image generation — runs entirely on the A-series chip',
                'Privacy benefit: sensitive data (medical records, legal documents, personal messages) never leaves the device for processing',
                'Latency benefit: no network round-trip — responses in milliseconds, not hundreds of milliseconds',
              ],
            },
            {
              heading: 'Open-Weight Models: AI You Can Run Yourself',
              body: 'Open-weight models — where the trained model weights are publicly released — have transformed the AI landscape. Llama 3, Mistral, Phi, and Qwen are now competitive with frontier closed models for a wide range of tasks, and they can be downloaded, run, and fine-tuned without API costs or vendor lock-in.',
              bullets: [
                'Open-weight ≠ open-source: weights are published but training data and code may not be — "open" refers to the weights specifically',
                'Llama 3 (Meta): 8B and 70B variants, permissive commercial licence, competitive with GPT-3.5 on many benchmarks',
                'Mistral 7B / Mixtral: strong reasoning at small parameter counts, popular for on-premise deployments',
                'Phi-4 (Microsoft): frontier-level reasoning in a 14B model — designed for devices and private deployment',
                'Fine-tuning economics: organisations can customise open-weight models on their own data using modest GPU resources — no full pre-training required',
              ],
            },
            {
              heading: 'When On-Device or Open-Weight Is the Right Choice',
              body: 'Cloud API models are not always the right answer. For privacy-sensitive data, air-gapped environments, high-volume inference economics, or regulatory reasons, on-device or self-hosted open-weight models may be the better architecture. Understanding the tradeoffs prevents both under- and over-engineering.',
              bullets: [
                'Choose on-device when: data is too sensitive to send to the cloud, latency must be sub-50ms, the device has intermittent connectivity',
                'Choose open-weight self-hosted when: regulatory requirements prohibit third-party data processing, volume makes API costs prohibitive, customisation requires fine-tuning',
                'Choose cloud API when: you need frontier capability (reasoning models, largest context windows), fast iteration matters more than cost at current scale',
                'Hybrid pattern: on-device or open-weight for sensitive or routine tasks; cloud frontier models for complex tasks that need maximum capability',
                'Cost signal: at high token volume (billions per month), self-hosting an open-weight model often reaches payback within 6 months vs. API pricing',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'On-device AI means AI features that work without sending your data to a company\'s server. For sensitive personal tasks — medical, legal, financial — this matters. For convenience features, cloud AI is usually fine. Knowing the difference helps you make deliberate choices.',
              bullets: [
                'Your phone\'s keyboard AI, voice assistant, and photo processing are increasingly on-device — your data stays on the device',
                'For sensitive documents or personal health data, look for AI tools that explicitly state processing happens on-device',
                'Open-weight models mean you can run a capable AI locally on your laptop for free — tools like Ollama make this accessible without technical expertise',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'On-device and open-weight AI are the answer to data sovereignty objections. When a CISO says "we can\'t send our data to a third-party AI", that objection has a technical answer.',
              bullets: [
                'Data sovereignty objection answer: on-device inference, self-hosted open-weight models, or VPC-isolated API deployments — map the customer\'s sensitivity to the right architecture',
                'Open-weight models enable customers to fine-tune on their own threat data without sharing it with a vendor — probe whether this is a requirement',
                'Regulatory angle: GDPR Article 28 (data processor requirements), FedRAMP for government, HIPAA for healthcare — each has specific data residency implications that on-device or self-hosted resolves cleanly',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Open-weight models and on-device inference change the build-vs-buy calculus significantly. At sufficient scale, self-hosting beats API costs; at sufficient sensitivity, on-device beats any cloud architecture.',
              bullets: [
                'Evaluate open-weight models against your specific task — Phi-4 and Llama 3 perform within 5–10% of GPT-4 on many standard tasks at a fraction of the inference cost',
                'Use Ollama, vLLM, or llama.cpp for local development and testing — iterate against a local model before committing to API costs',
                'Model quantisation (GGUF format, 4-bit or 8-bit): reduces memory requirements 2–4× with minimal quality loss — makes larger models viable on consumer hardware',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'On-device and open-weight AI should be in every architecture options analysis for clients with sensitive data or significant inference volume. Ignoring them means recommending a suboptimal (and potentially non-compliant) architecture.',
              bullets: [
                'Include self-hosted open-weight models in the options analysis for any client with data sensitivity or volume concerns — not as an afterthought',
                'Fine-tuning economics: open-weight models can be customised on client data using modest compute — this unlocks domain-specific performance that API models cannot match without data sharing',
                'The privacy audit: map which data categories the client is comfortable sending to a third-party API vs. which must stay on-premise — that map drives the architecture',
              ],
            },
          ],
        },
        {
          id: 'ae5l4',
          title: 'AI Regulation & Governance',
          slides: [
            {
              heading: 'The Policy Layer Has Arrived',
              body: 'For most of AI\'s history, governance was voluntary — company policies, voluntary commitments, and industry best practices. That era is ending. The EU AI Act is in force with phased compliance deadlines. The US has issued binding Executive Orders with sector-specific rules following. China, UK, Canada, and Brazil have active legislative or regulatory processes underway. Anyone building or deploying AI commercially in 2025–2026 operates within a regulatory environment — whether they know it or not.',
              bullets: [
                'EU AI Act: risk-based tiering, in force 2024, phased compliance through 2027 — the world\'s first comprehensive AI law',
                'US: Executive Order on AI (2023) established frontier model reporting; sector-specific agencies (FDA, EEOC, CFPB) are issuing AI-specific rules',
                'UK: pro-innovation principles-based approach — sector regulators apply existing powers to AI rather than a horizontal law',
                'China: generative AI regulations (2023) requiring security assessments and content controls before deployment',
                'The common thread: every major jurisdiction is moving from voluntary to binding — the question is when, not whether',
              ],
            },
            {
              heading: 'EU AI Act: What It Requires and Who It Affects',
              body: 'The EU AI Act creates a risk-based tiering system for AI systems. The tier your product lands in determines your compliance obligations. Understanding the tiers — not just that the Act exists — is what allows you to assess your exposure accurately.',
              bullets: [
                'Unacceptable risk (banned): social scoring by governments, real-time biometric surveillance in public spaces, AI that exploits psychological vulnerabilities',
                'High-risk: AI used in employment decisions, credit scoring, essential services access, law enforcement, medical devices, education — requires conformity assessment, human oversight, audit trail, documentation',
                'Limited risk: chatbots, recommendation systems — transparency obligations (disclose it\'s AI)',
                'Minimal risk: spam filters, AI-assisted games — no specific obligations beyond general law',
                'Timeline: prohibited practices banned from August 2024; high-risk rules phased through 2026–2027; penalties up to €35M or 7% global revenue',
              ],
            },
            {
              heading: 'Compliance as Competitive Advantage',
              body: 'The instinctive reaction to AI regulation is to treat it as a cost. Sophisticated organisations are treating it as a differentiator. Customers in regulated industries — financial services, healthcare, government — increasingly require AI vendors to demonstrate compliance before signing contracts. Being compliance-ready is a sales qualification, not just a legal requirement.',
              bullets: [
                'The market signal: financial services buyers are increasingly asking for EU AI Act readiness in RFPs — before the deadlines',
                'What compliance-ready means: model cards, audit trails, human oversight mechanisms, risk tier assessments, and incident response procedures',
                'AI governance frameworks: NIST AI RMF (US), ISO/IEC 42001, and EU AI Act together form the compliance baseline serious buyers are referencing',
                'Vendor differentiation: vendors who can demonstrate documented human oversight, explainability, and bias auditing win in regulated-sector sales',
                'The governance gap: most organisations in scope have not started their compliance assessment — the first-mover advantage is real',
              ],
            },
          ],
          roleContent: [
            {
              role: 'general',
              label: 'General User',
              body: 'AI regulation is moving from optional to mandatory in most major markets. What this means for everyday users: AI tools you use will increasingly need to disclose they are AI, explain their decisions in regulated contexts, and maintain human oversight. These are protections for you.',
              bullets: [
                'AI that makes decisions about your job application, credit score, or healthcare triage is increasingly subject to regulation requiring human review and appeal rights',
                'The "disclose it\'s AI" obligation (limited risk tier) means you have a right to know when you\'re interacting with an AI system in commercial contexts',
                'Regulation creates accountability: if an AI system causes you harm in a regulated category, there is now a framework for redress — this is new',
              ],
            },
            {
              role: 'security-se',
              label: 'Security SE',
              body: 'AI regulation is a deal accelerator in regulated sectors and a discovery topic that opens conversations competitors have not started yet. Use it proactively — not reactively when the customer asks.',
              bullets: [
                'Lead with: "Is your organisation in scope for the EU AI Act?" — most have not answered this question, and helping them answer it positions you as an advisor',
                'Security AI in law enforcement, fraud detection, and identity verification likely lands in the high-risk tier — this is a compliance urgency conversation',
                'Audit trail and human oversight requirements are already in the product — position Google Cloud\'s immutable logging and Agent Gateway controls as the compliance infrastructure',
              ],
            },
            {
              role: 'developer',
              label: 'Developer',
              body: 'Building for compliance from the start is cheaper than retrofitting. If you are building AI in a regulated sector, the compliance requirements should be part of your technical specification from day one.',
              bullets: [
                'Audit trail: log every AI decision with the inputs, outputs, model version, and timestamp — this is required for high-risk EU AI Act compliance',
                'Human override: build human review and override capability into the system architecture before launch, not as a retrofit',
                'Documentation: model cards, data provenance, known limitations, and evaluation results are now regulatory requirements for high-risk AI — maintain them as living documents',
              ],
            },
            {
              role: 'consultant',
              label: 'AI Consultant',
              body: 'AI regulation compliance is a current-year action item for most enterprise clients, not a future concern. Make it a standard element of every AI strategy engagement.',
              bullets: [
                'First step for every client: determine which AI use cases land in the EU AI Act\'s high-risk tier — that determines urgency and investment required',
                'Compliance readiness assessment: audit trail capability, human oversight mechanisms, bias audit, model documentation — score the client against these four pillars',
                'The strategic framing: compliance-ready AI is a contract qualification criterion in regulated sectors — treat it as a revenue enabler, not just a cost centre',
              ],
            },
          ],
        },
      ],
      quiz: [
        { q: 'What distinguishes a reasoning model from a standard LLM?', options: ['It has a larger context window', 'It generates an explicit chain-of-thought scratchpad during inference before producing a final answer', 'It is trained on more data', 'It uses retrieval augmentation by default'], correct: 1 },
        { q: 'What is the defining characteristic of an AI agent versus a copilot?', options: ['Agents use larger models', 'Agents autonomously pursue a goal across multiple steps using tools, rather than assisting a human on a single task', 'Agents are always cloud-hosted', 'Agents require no human oversight'], correct: 1 },
        { q: 'Which EU AI Act risk tier requires conformity assessments, human oversight, and audit trails?', options: ['Unacceptable risk', 'High risk', 'Limited risk', 'Minimal risk'], correct: 1 },
        { q: 'What is the key privacy advantage of on-device AI models?', options: ['They are more accurate than cloud models', 'They are always free to use', 'Data is processed locally and never sent to a third-party server', 'They require no configuration'], correct: 2 },
      ],
    },
  ],
};

export default aiEssentials;
