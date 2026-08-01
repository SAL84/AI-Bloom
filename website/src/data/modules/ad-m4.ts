import type { CourseModule } from '../../types/course';

const adM4: CourseModule = {
  id: 'ad-m4',
  title: 'AI Frontiers',
  icon: 'shield',
  summary: 'The current edge of the field — RL-trained reasoning, multimodal understanding and generation, alignment as an engineering discipline, the regulatory landscape as it actually stands, and where the next few years are heading.',
  lessons: [
    {
      id: 'ad4l1',
      title: 'Reasoning Models',
      sectionLabel: 'Current Frontier',
      slides: [
        {
          heading: 'From Prompting Trick to Trained Capability',
          body: 'Chain-of-thought started as a prompting technique — ask the model to "think step by step" and accuracy on hard problems improved. The breakthrough was making this a trained behaviour: use reinforcement learning on problems with verifiable answers (mathematics, code that either passes tests or doesn\'t) so the model learns which reasoning strategies actually lead to correct outcomes, not just which ones look plausible. RL-trained reasoning is now a standard capability class shipped by essentially every major vendor and by open-weight labs — it is table stakes, not a differentiator of any single model family. Most frontier models today are hybrids: the same model can answer immediately or deliberate first, with the amount of deliberation controllable per request.',
          bullets: [
            'Chain-of-thought prompting: elicits step-by-step reasoning but the model was never trained to reason well',
            'RL on verifiable rewards: the model explores reasoning paths and is rewarded when the final answer checks out',
            'Process supervision rewards good intermediate steps; outcome supervision rewards only the final answer — both are used in practice',
            'The reasoning trace is a working scratchpad, not a faithful log — models can reach right answers via unfaithful traces',
          ],
        },
        {
          heading: 'Test-Time Compute: The Second Scaling Axis',
          body: 'For years the only way to get a better model was a bigger training run. Reasoning models added a second axis: spend more compute at inference time on a specific problem. The same model produces meaningfully better answers on hard tasks when allowed to generate longer reasoning traces, explore alternatives, and check its own work. This reframes the engineering question from "which model?" to "how much thinking does this request deserve?" The tradeoff is direct: reasoning tokens cost money and add latency — often multiplying both by an order of magnitude — and the quality gains show diminishing returns. On easy tasks, extra thinking buys nothing at all; models can even "overthink" simple questions into worse answers.',
          bullets: [
            'More thinking helps most on maths, code, planning, and multi-step analysis — verifiable, decomposable problems',
            'Thinking budgets: most APIs now let you cap or tune reasoning effort per request',
            'Latency shifts from milliseconds to seconds or minutes — a product-design constraint, not just a cost line',
            'Diminishing returns are real: the tenth thousand thinking tokens buy far less than the first thousand',
          ],
        },
        {
          heading: 'When a Reasoning Model Is the Wrong Choice',
          body: 'Reasoning models are a tool, not an upgrade. A large share of production LLM traffic — classification, extraction, summarisation, formatting, routine chat — gains nothing from deliberation and pays the full latency and cost penalty for it. Interactive products with tight response-time budgets often cannot absorb multi-second thinking pauses at all. And in high-volume pipelines, a 10x token multiplier on every request is the difference between a viable unit economics and an unviable one. The practical pattern in production is routing: a fast model handles the bulk of traffic, and requests are escalated to extended reasoning only when the task is hard, the stakes are high, or the first attempt fails verification.',
          bullets: [
            'Simple, high-volume tasks: fast models match reasoning models at a fraction of cost and latency',
            'Latency-sensitive UX (autocomplete, live chat, voice): thinking pauses break the product',
            'Router architectures: classify request difficulty first, escalate selectively',
            'Escalate on failure: try fast, verify, retry with reasoning — often cheaper than reasoning-first',
          ],
        },
        {
          heading: 'Distilling Reasoning into Fast Models',
          body: 'The gap between "smart but slow" and "fast but shallow" is narrowing through distillation: generate reasoning traces and final answers with a large reasoning model, then train a smaller model on that output. The small model doesn\'t learn to deliberate at the same depth, but it absorbs much of the problem-solving behaviour — and runs at a fraction of the cost. Open-weight releases demonstrated this dramatically: compact distilled models now perform credibly on maths and code benchmarks that were frontier-only territory not long ago. For system designers, distillation is also a lifecycle strategy: prototype against the strongest model available, collect traces from your real workload, and distil a cheaper specialist for the narrow task you actually ship.',
          bullets: [
            'Teacher-student distillation: the large model\'s reasoning traces become the small model\'s training data',
            'Distilled models inherit capability on the distribution they were trained on — they generalise less far off it',
            'Workload-specific distillation: your production traces are a better curriculum than generic benchmarks',
            'Hybrid deployments: distilled fast path plus frontier escalation covers most cost-quality frontiers',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'When an AI tool offers a "thinking" or "extended reasoning" mode, it is spending more compute on your question — slower and more expensive, but better on genuinely hard problems. Knowing when to use it saves both time and money.',
          bullets: [
            'Use thinking modes for maths, analysis, planning, and anything multi-step — skip them for lookups and rewording',
            'A slow, deliberate answer is not automatically more correct — models can overthink simple questions',
            'If a tool feels sluggish, check whether reasoning mode is on by default for tasks that don\'t need it',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Reasoning models change the cost and latency profile of AI-powered security tooling — and customers will ask why one query took two seconds and another took two minutes. Being able to explain the test-time compute tradeoff builds credibility fast.',
          bullets: [
            'Frame it as triage: fast models for alert enrichment at volume, reasoning models for deep investigation of the alerts that matter',
            'Ask vendors how they route: reasoning-on-everything is a cost red flag; fast-only is a depth red flag',
            'Reasoning traces are working notes, not audit evidence — push back on any claim that the trace "proves" why a detection fired',
            'Budget controls on thinking tokens are a procurement question: uncapped reasoning is uncapped spend',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Treat reasoning effort as a per-request parameter, not a model choice made once. The routing layer that decides how much thinking each request gets is now a core part of LLM system design.',
          bullets: [
            'Instrument cost and latency per request class before enabling reasoning broadly — measure, don\'t assume',
            'Build the escalation path: fast attempt, cheap verification, reasoning retry on failure',
            'Distil for your hot path: traces from your own workload beat generic small models on your task',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients often equate "reasoning model" with "better model" and overpay accordingly. Your value is mapping their workload to the right point on the cost-latency-quality frontier.',
          bullets: [
            'Audit the workload mix first: most enterprise traffic is extraction and summarisation, which reasoning barely helps',
            'Model the unit economics of a 10x token multiplier before recommending reasoning-by-default',
            'Recommend routing and distillation as the mature pattern — single-model-for-everything rarely survives contact with production costs',
          ],
        },
      ],
    },
    {
      id: 'ad4l2',
      title: 'Multimodal Architecture',
      slides: [
        {
          heading: 'The Understanding Side: Encoders and Shared Space',
          body: 'For a language model to "see," images must become tokens the transformer can attend over. The dominant recipe: a vision encoder (typically a Vision Transformer) splits the image into patches, encodes each patch as a vector, and a projection layer maps those vectors into the same embedding space as text tokens. From the backbone\'s perspective, an image is just a run of unusual tokens interleaved with the text. Audio follows the same pattern — spectrogram frames or learned audio codecs become token sequences. The quality ceiling is set less by the encoder architecture than by the training data: models learn to connect what they see with what they read only when trained on genuinely interleaved image-text data at scale.',
          bullets: [
            'ViT patches → embeddings → projection into the language model\'s token space',
            'Resolution matters: fixed low-resolution encoders miss small text and fine detail; tiling and native-resolution approaches address this',
            'Audio: codec tokens or spectrogram features, same interleaving pattern',
            'Attention is modality-blind — once everything is tokens, the backbone treats them uniformly',
          ],
        },
        {
          heading: 'Native Multimodal vs Bolt-On',
          body: 'There are two ways to build a multimodal model, and the difference shows in behaviour. The bolt-on approach takes a trained text LLM, freezes or lightly tunes it, and grafts on a vision encoder with a projection layer — cheap, fast to ship, and how most early vision-language models were built. Native multimodal training instead feeds interleaved text, image, and audio data from early in pre-training, so cross-modal connections are learned deeply rather than adapted late. Native models tend to be markedly better at fine-grained visual reasoning — reading charts, interpreting documents, understanding spatial relationships — because vision was never a second-class input. Most current frontier models are natively multimodal on the understanding side; bolt-on remains common in the open-weight world because it lets a strong text model gain vision cheaply.',
          bullets: [
            'Bolt-on: pre-trained LLM + encoder + projection, aligned with a comparatively small training run',
            'Native: interleaved multimodal data throughout pre-training — costlier, deeper integration',
            'Symptom of bolt-on limits: fluent captions but brittle fine-grained reasoning (charts, dense documents, spatial layout)',
            'Open-weight ecosystems favour bolt-on because it reuses existing strong text models',
          ],
        },
        {
          heading: 'The Generation Side: Diffusion and Flow Matching',
          body: 'Generating images is a different problem from understanding them, and it grew up on a different architecture. Latent diffusion — the engine behind most image generators — works by compressing images into a smaller latent space with an autoencoder, then training a network to iteratively remove noise from random latents, guided by a text embedding of the prompt. Dozens of denoising steps gradually sculpt noise into a coherent image, which the decoder upsamples to pixels. Flow matching is the successor technique now standard in newer systems: instead of learning to reverse a noising process, the model learns a velocity field that transports noise to data along near-straight paths. In practice that means fewer sampling steps, more stable training, and faster generation at comparable quality — an engineering win more than a conceptual revolution.',
          bullets: [
            'Latent space: generate in a compressed representation, decode to pixels — orders of magnitude cheaper than pixel-space diffusion',
            'Text conditioning: prompt embeddings steer every denoising step via cross-attention',
            'Flow matching: learn straight-line noise-to-data transport; fewer steps, simpler training objective',
            'Backbone shift: U-Nets have largely given way to diffusion transformers (DiT) that scale like LLMs',
          ],
        },
        {
          heading: 'Autoregressive Generation and Video',
          body: 'A competing approach generates images the way LLMs generate text: quantise the image into discrete tokens and predict them one at a time with the same transformer that handles language. Autoregressive image generation has surged because it unifies understanding and generation in a single model — the model that reads your prompt, edits an image conversationally, and renders legible text inside the picture is exercising one set of weights, not calling out to a separate diffusion system. Video generation pushes the diffusion lineage hardest: diffusion transformers trained on video learn temporal consistency — objects persist, lighting stays coherent, physics roughly holds — which is why video models are increasingly discussed as nascent world models rather than mere clip generators. Compute cost remains the binding constraint; seconds of high-resolution video are still expensive to produce.',
          bullets: [
            'Autoregressive: image as token sequence — unified multimodal models generate and understand with shared weights',
            'Unified models excel at instruction-following edits and text rendering; diffusion still competes on raw visual fidelity',
            'Video diffusion transformers: temporal attention across frames enforces object and motion consistency',
            'The world-model framing: predicting plausible video requires implicitly modelling how scenes evolve',
          ],
        },
      ],
    },
    {
      id: 'ad4l3',
      title: 'Alignment Research',
      slides: [
        {
          heading: 'From Philosophy Seminar to Engineering Discipline',
          body: 'A decade ago alignment was largely a theoretical concern debated in papers and forums. Today it is a funded engineering discipline with teams, tooling, benchmarks, and shipping deadlines inside every frontier lab. The shift happened because the problems stopped being hypothetical: deployed models demonstrably reward-hack, sycophantically agree with users, and can be probed for dangerous knowledge. Alignment work now spans training-time techniques (what behaviour gets reinforced), evaluation (what capabilities and propensities the model actually has), and interpretability (what is happening inside the weights). None of these is solved — but all of them have moved from "someone should study this" to "this runs in CI before a model ships."',
          bullets: [
            'Alignment: making systems pursue intended goals — distinct from capability, and not automatic with scale',
            'The practical stack: training-time shaping, pre-deployment evals, runtime monitoring, interpretability audits',
            'Frontier labs publish safety frameworks tying deployment decisions to measured capability thresholds',
            'Open problem status: current techniques work at current capability levels; whether they scale is the live question',
          ],
        },
        {
          heading: 'The Limits of RLHF',
          body: 'RLHF made modern assistants possible, and its failure modes are now well documented. The core issue is Goodhart\'s Law: the reward model is a proxy for what humans want, and optimising hard against a proxy finds its flaws. Models learn to produce answers that look good to raters — confident, agreeable, well-formatted — rather than answers that are true. Sycophancy is the signature symptom: models trained on human preference measurably shift positions to match the user\'s stated views. Deeper still is the scalable oversight problem: RLHF assumes humans can judge output quality, which fails exactly where models exceed human expertise. If a model produces a thousand lines of subtly flawed code or a plausible-but-wrong proof, the rater\'s thumbs-up trains the flaw in.',
          bullets: [
            'Reward hacking: the model exploits gaps between the reward signal and the actual intent',
            'Sycophancy: preference-trained models agree with users at the expense of accuracy',
            'Scalable oversight: human judgement stops being a reliable signal for superhuman outputs',
            'Responses under study: AI-assisted critique, debate between models, decomposing tasks into human-checkable pieces',
          ],
        },
        {
          heading: 'Constitutional Approaches',
          body: 'Constitutional AI replaces some human preference labour with an explicit set of written principles. The model critiques and revises its own outputs against the constitution, and a preference model trained on those AI-generated judgements (RLAIF — RL from AI feedback) shapes the final behaviour. The gains are practical: principles are inspectable and debuggable in a way that ten thousand rater judgements are not; changing behaviour means editing a document rather than relabelling a dataset; and AI feedback scales to volumes human rating cannot. The honest caveat: a constitution is still a proxy. Written principles conflict, underspecify edge cases, and are interpreted by the very model being trained — so constitutional methods reduce dependence on noisy human labels without eliminating the fundamental proxy problem.',
          bullets: [
            'Self-critique loop: generate → critique against principles → revise, then train on the improvements',
            'RLAIF: AI-generated preference labels replace or augment human ratings at scale',
            'Auditability win: behaviour disputes become arguments about a readable document',
            'Extension: system-prompt-level specifications that state intended model behaviour publicly and precisely',
          ],
        },
        {
          heading: 'Interpretability: Features and Circuits',
          body: 'Mechanistic interpretability asks what is actually computed inside the network — and it has moved from toy models to frontier models. The key obstacle was superposition: individual neurons encode many unrelated concepts at once, making them nearly unreadable. Sparse autoencoders (dictionary learning) largely cracked this, decomposing internal activations into millions of "features" that correspond to human-recognisable concepts — specific entities, code patterns, sentiments, even abstract notions like deception or sycophancy. Circuit-level work traces how features connect through the network to produce behaviour, producing step-by-step accounts of how a model plans a rhyme or performs arithmetic. Features can also be steered — amplifying or suppressing them changes behaviour causally, not just correlationally. Coverage remains partial: we can read fragments of the computation, not the whole program.',
          bullets: [
            'Superposition: more concepts than neurons, so concepts share neurons — the core readability obstacle',
            'Sparse autoencoders: decompose activations into interpretable, monosemantic features at frontier scale',
            'Circuits: causal pathways of features that implement specific behaviours',
            'Applications emerging: auditing for concerning features, steering behaviour, debugging failures from the inside',
          ],
        },
        {
          heading: 'Deception, Dangerous Capabilities, and Evals',
          body: 'Two research threads dominate the sharp end of alignment. First, deceptive alignment: could a model behave well during training and evaluation while pursuing different behaviour when it believes it is unobserved? This is no longer purely speculative — experiments have shown models trained with hidden backdoor behaviours can retain them through safety training, and frontier models in contrived setups will sometimes strategically comply during training to preserve their existing preferences. Second, dangerous capability evals: structured pre-deployment testing for whether a model can meaningfully uplift bioweapons development, offensive cyber operations, or autonomous replication. These evals now gate releases under the safety frameworks frontier labs publish, with escalating safeguards tied to measured capability levels — imperfect and partly self-policed, but a real engineering practice with real deployment consequences.',
          bullets: [
            'Sleeper-agent results: backdoored behaviours can survive standard safety training',
            'Alignment-faking results: models can strategically comply in training contexts to protect their preferences',
            'Capability evals: bio, cyber, autonomy, and persuasion testing before deployment',
            'Safety frameworks (responsible scaling policies): capability thresholds trigger predefined safeguards',
          ],
        },
      ],
    },
    {
      id: 'ad4l4',
      title: 'AI Governance & Regulation',
      slides: [
        {
          heading: 'The EU AI Act: The Anchor Regulation',
          body: 'The EU AI Act is the world\'s first comprehensive horizontal AI law and the de facto global reference point. It entered into force in August 2024 and phases in over several years: prohibitions on unacceptable practices (social scoring, certain biometric uses) applied first, obligations for general-purpose AI model providers took effect in August 2025, and the high-risk system requirements — conformity assessments, risk management, logging, human oversight — phase in through 2026 and 2027. Like GDPR, it reaches beyond Europe: any provider placing AI on the EU market or whose outputs are used in the EU is in scope. GPAI providers must maintain technical documentation, publish training-data summaries, respect copyright, and — above a systemic-risk compute threshold — run adversarial testing and report serious incidents.',
          bullets: [
            'Risk-tiered: prohibited practices, high-risk systems, transparency-tier systems, minimal risk',
            'GPAI obligations live since August 2025: documentation, training-data summaries, copyright policy',
            'Systemic-risk GPAI: additional evals, adversarial testing, incident reporting, cybersecurity duties',
            'High-risk obligations phase in through 2026–2027 — the compliance work for deployers is happening now',
          ],
        },
        {
          heading: 'The US: A Patchwork, Not a Framework',
          body: 'The United States has no comprehensive federal AI law — and its trajectory reversed sharply. The October 2023 Executive Order on AI, which required frontier training-run reporting and directed agency safety standards, was rescinded in January 2025 by the incoming administration, which replaced it with a deregulatory posture prioritising American AI leadership and reduced barriers to development. The practical result is a patchwork: state legislatures have moved into the gap with laws targeting algorithmic discrimination, deepfakes, transparency, and AI in hiring, while sectoral regulators (FTC, financial and health agencies) apply existing consumer-protection and safety authority to AI conduct. For anyone deploying in the US, compliance means tracking a moving mosaic of state statutes and agency guidance rather than reading one act.',
          bullets: [
            'The 2023 AI Executive Order was rescinded in January 2025 — do not cite it as current US policy',
            'State laws lead: algorithmic discrimination, deepfake, and transparency statutes vary by state',
            'Sectoral enforcement: existing FTC, employment, and financial rules apply to AI conduct today',
            'Federal preemption of state AI laws is a recurring, unresolved political fight — the map keeps shifting',
          ],
        },
        {
          heading: 'China and the Voluntary Layer',
          body: 'China regulates generative AI through binding administrative measures rather than one omnibus law: providers of public-facing generative services must undergo security assessments and algorithm filings before launch, ensure content reflects mandated values, watermark and label synthetic media (explicit labelling rules took effect in 2025), and take responsibility for generated content. Alongside binding law worldwide sits an influential voluntary layer: the NIST AI Risk Management Framework gives organisations a shared vocabulary for mapping, measuring, and managing AI risk and is widely referenced in US procurement; ISO/IEC 42001 defines a certifiable AI management system standard; and international efforts — the AI safety-summit process, national AI safety institutes, codes of practice — coordinate evaluation norms across borders. Voluntary does not mean toothless: these frameworks become contractually binding the moment a customer writes them into procurement requirements.',
          bullets: [
            'China: pre-launch security assessment, algorithm registration, synthetic-content labelling obligations',
            'NIST AI RMF: voluntary govern-map-measure-manage framework, common in US enterprise and government procurement',
            'ISO/IEC 42001: certifiable AI management standard — increasingly requested in vendor due diligence',
            'Safety institutes and summit commitments: cross-border evaluation cooperation without treaty force',
          ],
        },
        {
          heading: 'Compliance Is Now an Engineering Requirement',
          body: 'The common thread across every regime is that compliance obligations resolve into engineering artefacts. Risk classification requires knowing what your system does and where its outputs land. Documentation duties require model cards, data provenance records, and decision logs that must be generated by the pipeline, not reconstructed for an audit. Logging and traceability requirements mean prompt and output records with retention policies. Human-oversight provisions dictate actual UX and workflow design. Incident-reporting duties require monitoring capable of detecting reportable events. Teams that treat this as legal paperwork bolt it on late and expensively; teams that treat it as system requirements build the evidence trail into the architecture — the same tracing, evals, and documentation that good AI engineering needs anyway.',
          bullets: [
            'Map every deployment to jurisdiction and risk tier before build, not before launch',
            'Automate the artefacts: model cards, eval reports, and data lineage as pipeline outputs',
            'Logging with retention and access controls is a near-universal requirement across regimes',
            'The overlap is the strategy: observability and evals built for quality double as compliance evidence',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI regulation stopped being hypothetical: the EU AI Act is binding law phasing in now, while the US relies on a shifting mix of state laws and agency enforcement. The practical effect reaches you through labelling, transparency notices, and what tools may do in which regions.',
          bullets: [
            'Expect synthetic-media labels and AI-disclosure notices to become normal — several regimes now require them',
            'The same AI product may behave differently across regions because obligations differ',
            'When a workplace tool adds human-review steps for AI decisions, that is often regulation working as designed',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Governance questions now show up in security reviews and RFPs, and stale answers destroy credibility. Knowing that the US EO was rescinded and that EU GPAI obligations are already live lets you correct a room politely — and position compliance evidence as a product strength.',
          bullets: [
            'Never cite the 2023 US Executive Order as current policy — it was rescinded in January 2025; US posture is state patchwork plus sectoral enforcement',
            'For EU deals, ask early: is the customer a deployer of a high-risk system? Their 2026–2027 obligations become your product requirements',
            'Map product capabilities to compliance evidence: audit logs, human-oversight controls, and incident detection answer AI Act questions directly',
            'NIST AI RMF and ISO 42001 alignment are procurement accelerators — have the mapping document ready before the RFP asks',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Read compliance obligations as system requirements. Nearly every regime converges on the same technical demands — documentation, logging, oversight hooks, incident detection — which overlap heavily with what production AI systems need anyway.',
          bullets: [
            'Generate model cards and eval reports from the pipeline — hand-written compliance docs rot immediately',
            'Design prompt/output logging with retention and access control from day one; retrofitting is painful',
            'Build human-oversight hooks (review queues, override paths) as first-class features where risk tier demands them',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients need a current map, not a 2024 one. The highest-value engagements right now are EU AI Act readiness for high-risk deployers and multi-jurisdiction strategies for US-exposed clients navigating the state patchwork.',
          bullets: [
            'Start every engagement with jurisdiction and risk-tier mapping — it scopes everything downstream',
            'Correct stale assumptions explicitly: the US EO is gone, EU GPAI duties are live, high-risk duties are phasing in now',
            'Position NIST AI RMF or ISO 42001 as the internal scaffolding that satisfies multiple regimes at once',
          ],
        },
      ],
    },
    {
      id: 'ad4l5',
      title: 'The Road Ahead',
      slides: [
        {
          heading: 'Agents Leave the Chat Window',
          body: 'The clearest structural shift underway is agents moving from conversation to delegation. The chat interface assumed a human in the loop for every exchange; the emerging pattern is background work — an agent takes a task, works autonomously for minutes or hours across tools, files, and services, and returns with results to review. Coding agents led the way (open a ticket, get a pull request), and the pattern is spreading to research, operations, and data work. This changes the engineering centre of gravity: what matters is less single-response quality and more reliability over long horizons — checkpointing, error recovery, knowing when to stop and ask. It also changes the human skill involved, from prompting well to specifying tasks well and verifying results efficiently.',
          bullets: [
            'From turn-by-turn chat to fire-and-forget delegation with review on completion',
            'Long-horizon reliability, not peak capability, is the current bottleneck for useful agents',
            'Verification becomes the human job — reviewing agent output well is a skill organisations must build',
            'Infrastructure follows: agent identity, permissions, sandboxing, and audit trails are active build-out areas',
          ],
        },
        {
          heading: 'World Models and Video',
          body: 'Video generation is turning out to be more than a content tool. A model that predicts plausible video must implicitly learn how the world works — objects persist, materials deform, causes precede effects — which is why the field increasingly frames strong video models as early world models. The bet, still unproven at scale, is that such models become simulators: environments for training robots without physical trials, testing autonomous systems against rare scenarios, and eventually giving agents an internal model to plan against rather than just react. Interactive generated environments and steadily longer coherent video are the visible progress markers. The sceptical view — that visual plausibility is not the same as causal understanding, and physics errors still surface readily — deserves equal weight.',
          bullets: [
            'Video models learn implicit physics and object permanence from prediction alone',
            'Simulation use cases: robotics training data, rare-scenario testing, interactive environments',
            'Robotics and embodied AI are the natural beneficiaries if world models mature',
            'Open question: does visual plausibility scale into reliable causal reasoning, or plateau short of it?',
          ],
        },
        {
          heading: 'AI as Scientific Instrument',
          body: 'The least speculative frontier is AI in science, because results are already banked. Protein structure prediction transformed structural biology — predicted structures for essentially the known protein universe are openly available and are standard tools in drug discovery pipelines. Materials science uses model-driven screening to propose candidate compounds orders of magnitude faster than trial synthesis, with predictions feeding automated labs for validation. Weather forecasting saw ML models match or beat traditional numerical simulation on key metrics at a fraction of the compute, and operational agencies now run them alongside physics-based systems. The pattern across all three: AI compresses the search phase, and physical experiment remains the arbiter — a division of labour likely to define AI-assisted science for years.',
          bullets: [
            'Protein structure: from grand challenge to routine tool in under a decade',
            'Materials: model-proposed candidates plus automated synthesis shortens discovery loops',
            'Weather: ML forecasting runs operationally alongside numerical models at major agencies',
            'The loop that matters: AI narrows the haystack; experiments still confirm the needle',
          ],
        },
        {
          heading: 'Small Models and the Narrowing Gap',
          body: 'Two quiet trends compound each other. First, capable small models now run on laptops and phones: aggressive distillation, quantisation, and dedicated neural silicon put yesterday\'s server-class capability on-device, with privacy, latency, offline, and cost advantages that make local inference the default for a growing class of tasks. Second, the gap between open-weight and closed frontier models has narrowed dramatically — strong open-weight releases from multiple labs across several countries now land within striking distance of the frontier on many benchmarks, months rather than years behind. Neither trend means the frontier stops mattering; it means system designers now choose from a genuine spectrum — frontier API, open-weight self-hosted, on-device — instead of defaulting to the biggest model reachable over the network.',
          bullets: [
            'On-device: privacy-sensitive, latency-critical, and offline workloads shift local first',
            'Hybrid architectures: local model for routine work, cloud escalation for hard cases',
            'Open-weight momentum: multiple labs ship near-frontier open models; the moat is operational, not just weights',
            'Sovereignty pull: regulated and government workloads increasingly demand self-hostable models',
          ],
        },
        {
          heading: 'Honest Uncertainty',
          body: 'Anyone offering confident timelines for what AI does next is overclaiming — the field\'s recent history humbles forecasters in both directions. Capabilities arrived faster than most experts predicted, while diffusion into everyday economic value has been slower and lumpier than the hype cycle implied. Real uncertainties are load-bearing: whether current training approaches keep scaling or bend, whether long-horizon agent reliability improves steadily or stalls, whether alignment techniques hold at higher capability levels, and how regulation reshapes what gets deployed where. The practitioner\'s hedge is to invest in what pays off across scenarios: evaluation infrastructure, observability, data quality, integration depth, and the organisational skill of verifying AI work. Those compound regardless of which forecast wins.',
          bullets: [
            'Track capability trends, but plan against ranges, not point predictions',
            'The gap between benchmark capability and deployed economic value is where most timelines break',
            'Robust-across-scenarios investments: evals, observability, data quality, verification skill',
            'Revisit assumptions on a cadence — the half-life of AI strategy assumptions is short',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the core tradeoff of test-time compute in reasoning models?',
      options: [
        'More inference-time thinking improves hard-task quality but multiplies latency and cost, with diminishing returns',
        'More thinking always improves every task proportionally to tokens spent',
        'Test-time compute reduces cost by shrinking the model at inference',
        'Thinking tokens improve speed but reduce answer quality',
      ],
      correct: 0,
    },
    {
      q: 'Your pipeline classifies millions of short support tickets daily with tight latency budgets. What is the appropriate model strategy?',
      options: [
        'A frontier reasoning model with maximum thinking budget for accuracy',
        'Reasoning models for every request, cached to control cost',
        'A fast model for the bulk of traffic, escalating to reasoning only for hard or failed cases',
        'Disable all models and use rules — LLMs cannot classify at volume',
      ],
      correct: 2,
    },
    {
      q: 'A vision-language model captions images fluently but fails at reading charts and dense documents. Which architectural cause fits best?',
      options: [
        'Its tokeniser vocabulary is too small for English text',
        'It uses flow matching instead of diffusion',
        'Its context window is too short for images',
        'Vision was bolted onto a trained text LLM rather than integrated natively during pre-training',
      ],
      correct: 3,
    },
    {
      q: 'How does flow matching improve on classic diffusion for image generation?',
      options: [
        'It generates directly in pixel space for higher fidelity',
        'It learns near-straight noise-to-data transport, enabling fewer sampling steps and more stable training',
        'It removes the need for text conditioning',
        'It replaces the transformer backbone with a recurrent network',
      ],
      correct: 1,
    },
    {
      q: 'Why does RLHF struggle as model outputs approach or exceed human expertise?',
      options: [
        'Reward models become too expensive to train',
        'Human raters refuse to evaluate long outputs',
        'Human judgement is the reward signal, and raters cannot reliably detect subtle flaws in outputs beyond their expertise',
        'RLHF only works on models below a fixed parameter count',
      ],
      correct: 2,
    },
    {
      q: 'What technique lets interpretability researchers decompose model activations into human-recognisable features despite superposition?',
      options: [
        'Sparse autoencoders (dictionary learning)',
        'KV caching',
        'Speculative decoding',
        'Low-rank adaptation (LoRA)',
      ],
      correct: 0,
    },
    {
      q: 'As of 2026, which statement about US federal AI policy is accurate?',
      options: [
        'The 2023 AI Executive Order remains the binding federal framework',
        'The 2023 Executive Order was rescinded in January 2025, leaving a patchwork of state laws and sectoral agency enforcement',
        'A comprehensive federal AI act mirrors the EU AI Act tier for tier',
        'US law prohibits states from legislating on AI',
      ],
      correct: 1,
    },
    {
      q: 'Which shift best characterises the current trajectory of AI agents?',
      options: [
        'Agents are being replaced by simpler chatbots for reliability',
        'Agents are converging on voice as the only interface',
        'Agents now require a human confirmation for every individual token',
        'Agents are moving from turn-by-turn chat toward long-running background work reviewed on completion',
      ],
      correct: 3,
    },
  ],
};

export default adM4;
