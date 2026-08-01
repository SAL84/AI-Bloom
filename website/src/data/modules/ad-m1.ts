import type { CourseModule } from '../../types/course';

const adM1: CourseModule = {
  id: 'ad-m1',
  title: 'The AI Story',
  icon: 'zap',
  summary: 'The technical and historical arc of AI — paradigm shifts, scaling laws, the compute stack, and the economics that make the current era structurally different from all previous ones.',
  lessons: [
    {
      id: 'ad1l1',
      diagram: 'NestedAI',
      title: 'AI Paradigms: Symbolic vs Connectionist',
      sectionLabel: 'Foundations',
      slides: [
        {
          heading: 'Two Competing Philosophies',
          body: 'The history of AI is a decades-long argument between two schools. Symbolic AI says intelligence is manipulation of explicit symbols: encode the rules, the logic, the ontology, and reasoning follows. Connectionist AI says intelligence emerges from many simple units adjusting their connections in response to data — don\'t write the rules, learn them. The current era is a decisive victory for the connectionist approach, but the argument isn\'t settled so much as inverted: today\'s open question is how much symbolic structure to bolt back onto learned systems. Understanding why symbolic AI failed to scale — and what it was genuinely good at — sharpens how you think about the limitations of current models.',
          bullets: [
            'Symbolic: hand-crafted rules and knowledge bases — precise, explainable by design, brittle at the edges',
            'Connectionist: representations learned from data — robust to messy input, scalable, black-box by default',
            'The two schools traded dominance for fifty years before compute settled the question',
          ],
        },
        {
          heading: 'Why Symbolic AI Hit a Wall',
          body: 'Expert systems of the 1980s were symbolic AI\'s commercial peak: thousands of hand-written rules encoding a specialist\'s knowledge. They worked in narrow, stable domains and collapsed everywhere else. The core failure was the knowledge acquisition bottleneck — every rule required a human expert and a knowledge engineer, so capability scaled linearly with headcount while the real world\'s edge cases scaled combinatorially. Common-sense knowledge proved effectively impossible to enumerate by hand. The AI winters that followed were largely symbolic AI failing to meet its own promises: funding collapsed when systems that dazzled in demos couldn\'t handle the ambiguity of production reality. That failure pattern — impressive demo, brittle deployment — is worth keeping in mind as a cautionary lens on any AI system, including today\'s.',
          bullets: [
            'Knowledge acquisition bottleneck: every capability required explicit human authoring',
            'Brittleness: no graceful degradation — inputs outside the rules produced nothing useful',
            'The AI winters were funding collapses driven by the demo-to-production gap',
          ],
        },
        {
          heading: 'The Connectionist Comeback',
          body: 'Neural networks were dismissed twice — once in the 1960s after the perceptron\'s limits were proven, and again in the 1990s when they were seen as underperforming curiosities. What changed wasn\'t the core idea; backpropagation dates to the 1980s. What changed was scale. GPUs made large-scale training practical, the internet supplied data no previous generation had, and the 2012 ImageNet result made deep learning\'s advantage undeniable. The lesson practitioners should internalise: the connectionist approach won not because it was more elegant, but because learning from data scales with compute while writing rules scales with people. That asymmetry, more than any single architecture, is the engine of the current era.',
          bullets: [
            'Backpropagation existed for decades before the compute existed to exploit it',
            'AlexNet (2012) was the field\'s inflection point — deep learning stopped being contrarian',
            'Rules scale with people; learning scales with compute — the decisive asymmetry',
          ],
        },
        {
          heading: 'The Pragmatic Hybrid Era',
          body: 'Modern LLMs are thoroughly connectionist, yet the systems built around them are quietly neuro-symbolic. When an agent calls a calculator, queries a database, executes code, or checks output against a JSON schema, a learned model is delegating to symbolic machinery — exact, verifiable, explainable — precisely where learned intuition is weakest. This is symbolic AI\'s ideas surviving as infrastructure rather than as the core intelligence. For builders, the design principle is: use the model for what learning is good at (perception, language, fuzzy generalisation) and symbolic tools for what rules are good at (arithmetic, retrieval of exact facts, enforcement of constraints). Most production reliability problems come from getting this division of labour wrong.',
          bullets: [
            'Tool use is applied neuro-symbolic design: learned router, symbolic executors',
            'Structured output constraints (schemas, grammars) reimpose symbolic guarantees on learned generation',
            'The design question is no longer which paradigm wins, but where to draw the boundary',
          ],
        },
      ],
    },
    {
      id: 'ad1l2',
      diagram: 'ScalingLaws',
      title: 'Scaling Laws',
      slides: [
        {
          heading: 'The First Scaling Era: Bigger Pre-Training',
          body: 'Scaling laws are the empirical observation that language model loss falls as a smooth, predictable power law as you increase parameters, data, and compute. Kaplan et al. (2020) established the pattern and gave labs something the field had never had: a forecast. You could spend a small training run to predict what a run a thousand times larger would achieve. That predictability, not any single model, is what unlocked the capital of the current era — investors and labs could underwrite enormous training runs because the return on compute was no longer a guess. The first scaling era was defined by a simple recipe: scale pre-training and capabilities follow, including abilities that appear abruptly at scale thresholds rather than improving smoothly.',
          bullets: [
            'Loss falls as a power law in parameters, data, and compute — smooth and forecastable',
            'Predictability is what made frontier-scale investment underwritable',
            'Some capabilities emerge at thresholds rather than improving gradually',
          ],
        },
        {
          heading: 'Chinchilla: The Data Correction',
          body: 'The Chinchilla result (Hoffmann et al., 2022) corrected the first era\'s bias toward parameters. For a fixed compute budget, most models of the time were substantially undertrained: compute-optimal training uses roughly 20 tokens per parameter, far more data per parameter than the field was using. A smaller model trained on more data beat larger, data-starved ones. The practical legacy is subtler than the headline: production models are now routinely trained well past the Chinchilla-optimal point, because Chinchilla optimises training compute alone. If you will serve a model billions of times, overtraining a smaller model is the better economic trade — inference cost scales with parameter count, and you pay it forever. Chinchilla-era parameter counts are public knowledge; note that frontier labs stopped disclosing parameter counts afterwards, so treat any figure you hear for current proprietary models as speculation.',
          bullets: [
            'Chinchilla-optimal: roughly 20 training tokens per parameter for a fixed compute budget',
            'Production models overtrain past optimal because inference cost is paid on every request',
            'Frontier parameter counts are undisclosed — the era of public counts ended with Chinchilla-class models',
          ],
        },
        {
          heading: 'The Second Scaling Era: Inference-Time Compute',
          body: 'Around the arrival of reasoning models, a second scaling axis opened: spend more compute at inference time and get better answers. Instead of only making the model bigger before deployment, let it generate long internal reasoning traces, explore multiple solution paths, and check its own work before answering. Performance on hard problems — mathematics, code, multi-step planning — scales with thinking time in a way that echoes the original pre-training curves. This restructures the economics of capability: intelligence becomes a dial you turn per request rather than a fixed property of the weights. It also compounds with pre-training scaling rather than replacing it — a stronger base model gets more out of every thinking token. For builders, the immediate consequence is that cost and latency are now quality parameters you tune per task, not constants.',
          bullets: [
            'Test-time compute: longer reasoning traces and search over solutions improve hard-task accuracy',
            'Capability becomes per-request and adjustable, not fixed at training time',
            'The two eras compound: better base models convert thinking tokens into capability more efficiently',
          ],
        },
        {
          heading: 'The Data Wall',
          body: 'Pre-training scaling has an obvious dependency: an ever-larger supply of high-quality text. The stock of such data on the public internet is finite, and frontier training runs consume a meaningful fraction of it. This is the data wall argument — that data, not compute or capital, becomes the binding constraint on the first scaling era. The wall is best treated as an economic gradient rather than a cliff: each marginal token of quality data gets more expensive to find, license, or clean, which is why labs sign content deals, mine transcription and code, and invest heavily in data curation. Quality filtering turns out to matter as much as raw volume — aggressive deduplication and filtering can beat naive scale. The data wall is one of the main reasons the field pivoted toward the second scaling era: inference-time compute improves capability without requiring new human text.',
          bullets: [
            'High-quality public text is finite; frontier runs already consume much of it',
            'Rising marginal cost of data, not sudden exhaustion, is the practical constraint',
            'Curation and deduplication substitute for volume — cleaner data trains better models',
          ],
        },
        {
          heading: 'Synthetic Data and Distillation',
          body: 'Two responses to the data wall now sit at the centre of training pipelines. Synthetic data uses strong models to generate training material — reasoning traces, code with test-verified solutions, instruction-following examples — often filtered by automated checkers so only verified-correct samples survive. Done naively, training on your own outputs degrades quality; done with verification and diversity controls, it is how reasoning capability is now largely taught. Distillation transfers capability from a large teacher model into a smaller student, which is why compact open-weight models keep landing surprisingly close to frontier performance: they are compressing capability someone else paid to discover. Together these techniques mean capability now diffuses from frontier labs to the whole ecosystem faster than raw scaling alone would predict — a dynamic with obvious competitive and policy consequences.',
          bullets: [
            'Verified synthetic data (checkable code, graded reasoning) sidesteps the quality-collapse risk',
            'Distillation compresses frontier capability into small, cheap-to-serve models',
            'Net effect: the capability gap between frontier and open-weight models closes faster than compute budgets suggest',
          ],
        },
      ],
    },
    {
      id: 'ad1l3',
      diagram: 'ComputeStack',
      title: 'The Compute Stack',
      slides: [
        {
          heading: 'From Silicon to Model',
          body: 'Training and serving frontier models requires a coordinated stack — accelerators, memory, interconnect, networking, and distributed-training software — at a scale most engineers never touch directly. Clusters of tens of thousands to hundreds of thousands of accelerators must behave like one machine: a frontier training run is a single tightly-synchronised computation spread across a building. Understanding this stack explains model economics from first principles — why training runs cost what they do, why inference pricing keeps falling, why certain capabilities exist only behind cloud APIs, and why the industry\'s constraint has shifted from chip supply toward power, cooling, and datacentre buildout. It also explains the strategic behaviour of every major player: whoever controls the stack controls the margin.',
          bullets: [
            'A frontier run is one synchronised computation across an entire datacentre',
            'Accelerators, memory, interconnect, and software each bottleneck at different scales',
            'Power and datacentre capacity have joined chips as first-order constraints',
          ],
        },
        {
          heading: 'NVIDIA Blackwell: The Rack Is the Unit',
          body: 'NVIDIA\'s Blackwell generation — B200 chips, and GB200/GB300 systems pairing them with Grace CPUs — marks a shift in what the product actually is. The flagship offering is not a chip but a rack: GB200 NVL72 links 72 Blackwell GPUs over NVLink into what software can treat as one enormous accelerator with a unified fast-memory domain. That design exists because frontier models don\'t fit on any single device; the model is sharded across many GPUs, and the speed at which those shards exchange data governs everything. Blackwell\'s emphasis on low-precision formats (down to FP4 for inference) reflects where the money now is: serving models cheaply at volume, not just training them. NVIDIA\'s real moat is as much CUDA and its networking stack as the silicon itself — switching vendors means rewriting the software layer, which is why the ecosystem moves slowly even when alternatives look competitive on paper.',
          bullets: [
            'GB200 NVL72: 72 GPUs in one NVLink domain — the rack as a single logical accelerator',
            'Low-precision inference formats (FP8/FP4) target serving economics, not just training speed',
            'CUDA plus networking lock-in, not raw FLOPS, sustains NVIDIA\'s position',
          ],
        },
        {
          heading: 'TPUs and the Custom Silicon Trend',
          body: 'Google\'s TPU line is the longest-running proof that hyperscalers can escape the NVIDIA tax. TPU v6e (Trillium) targets efficient training and serving; v7 (Ironwood) is notable for being designed with inference as a first-class goal — a signal of where the market\'s compute demand has shifted. TPU pods connect thousands of chips via Google\'s own optical interconnect, and Google trains its Gemini family entirely on them. The same logic drives every large buyer toward custom silicon: Amazon\'s Trainium underpins Anthropic-scale training clusters, and Meta\'s MTIA serves internal inference workloads. The motivation is margin and supply security rather than beating NVIDIA outright — an accelerator that only needs to run your own workloads well can trade generality for cost. For builders the consequence is indirect but real: silicon diversity is a price lever, and serving stacks increasingly hide the hardware behind an API.',
          bullets: [
            'TPU v6e Trillium and v7 Ironwood — Ironwood\'s inference-first design tracks the market\'s shift',
            'Trainium (Amazon) and MTIA (Meta): custom silicon for margin and supply security',
            'Vertical integration — own chip, own interconnect, own models — is the hyperscaler pattern',
          ],
        },
        {
          heading: 'Why Memory Bandwidth and Interconnect Dominate',
          body: 'The counterintuitive truth of modern AI hardware: raw compute is rarely the bottleneck. LLM inference is memory-bound — generating each token requires streaming the model\'s weights and the KV cache through the chip, so tokens per second track memory bandwidth, not FLOPS. This is why every accelerator generation leads with HBM (high-bandwidth memory) capacity and bandwidth figures, and why HBM supply is one of the industry\'s tightest constraints. At cluster scale the same logic repeats one level up: training throughput depends on how fast thousands of chips exchange gradients and activations, making NVLink, InfiniBand-class fabrics, and optical interconnect the true differentiators. Read any hardware announcement with this lens — the memory and interconnect numbers tell you more than the compute numbers — and note that techniques you\'ll meet later (quantisation, KV-cache management, batching) are all attacks on the memory bottleneck.',
          bullets: [
            'Token generation streams weights through memory every step — bandwidth sets the speed limit',
            'HBM capacity and supply are first-order constraints on the whole industry',
            'Cluster-scale interconnect determines whether ten thousand chips act like one machine',
            'Quantisation and KV caching are memory-bandwidth optimisations wearing software clothes',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'You will never buy these chips, but the compute stack explains the AI market you live in: why capability is concentrated in a few companies, why prices keep falling, and why AI availability sometimes tightens.',
          bullets: [
            'Frontier AI concentration is a compute story — few organisations can fund and power these clusters',
            'Falling AI prices largely trace back to hardware and serving efficiency, not vendor generosity',
            'Datacentre power and cooling are now the industry\'s practical growth limits',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Compute-stack literacy earns credibility with infrastructure and procurement audiences, and it grounds the on-prem-vs-cloud conversation in physics and economics rather than preference.',
          bullets: [
            'On-prem frontier-scale AI is rarely realistic — rack-scale systems, power, and cooling are datacentre projects; steer to private cloud or hosted single-tenant options',
            'Ask which hardware and precision a vendor serves on — quantised deployments can behave differently from the full-precision model that was evaluated',
            'Supply concentration (accelerators, HBM) is a legitimate vendor-risk and continuity question for security reviews',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'You inherit this stack through API pricing and latency. Knowing that inference is memory-bound explains most of the optimisation advice you\'ll encounter and helps you predict cost behaviour.',
          bullets: [
            'Latency intuition: time-to-first-token is compute-and-queue; tokens-per-second afterwards is memory bandwidth',
            'Prompt caching and batching exist because of the memory bottleneck — design prompts to exploit them',
            'Hardware-driven price drops are recurring — revisit build-vs-buy and model-tier choices at least yearly',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'The compute stack sets the floor under every TCO model and the ceiling on every self-hosting ambition. Clients consistently misjudge both without this context.',
          bullets: [
            'Challenge self-hosting plans with the full stack cost — accelerators, interconnect, power, and the team to run them, not just GPU list prices',
            'Build declining unit costs into multi-year projections — static per-token pricing overstates future spend',
            'Custom-silicon competition among clouds is negotiating leverage in enterprise AI contracts',
          ],
        },
      ],
    },
    {
      id: 'ad1l4',
      title: 'AI vs ML vs Deep Learning (Technical)',
      diagram: 'LearningParadigmsGeneric',
      slides: [
        {
          heading: 'The Stack, Precisely',
          body: 'AI, machine learning, and deep learning are nested sets, and the technical distinction is where the structure of a solution comes from. Classical AI encodes structure by hand. Classical ML learns a mapping from data, but a human first engineers the features — the representation is designed, the weights are learned. Deep learning learns the representation itself: raw input goes in, and each layer builds more abstract features than the last. That is the load-bearing idea of the whole modern era — representation learning — and it is why deep learning dominated every domain where features are hard to hand-design (vision, speech, language) while classical ML remains competitive wherever good features already exist, such as tabular business data.',
          bullets: [
            'Classical ML: human-designed features, learned weights — SVMs, random forests, gradient boosting',
            'Deep learning: learned features and learned weights, end to end',
            'Representation learning is the dividing line, not network depth per se',
          ],
        },
        {
          heading: 'Inductive Bias: The Architecture Is an Assumption',
          body: 'Every architecture encodes assumptions about the data — its inductive bias — and the history of deep learning is largely the history of matching bias to domain. CNNs assume locality and translation invariance: a pattern is a pattern wherever it appears in the image. RNNs assume sequential dependence, processing one step at a time, which made them slow to train and forgetful over long ranges. Transformers make the weakest structural assumption: attention lets every token relate directly to every other, with order supplied by positional information rather than by the architecture. Weak bias means transformers need far more data to learn structure that CNNs get for free — but given internet-scale data, that flexibility becomes decisive, which is why one architecture now spans text, images, audio, and protein sequences. The trade is paid in compute: attention cost grows quadratically with sequence length, a constraint that shapes context-window engineering to this day.',
          bullets: [
            'CNNs: locality and translation invariance baked in — sample-efficient for images',
            'Transformers: minimal assumptions, direct token-to-token attention, order injected via positions',
            'Weak bias + massive data beats strong bias + limited data — the transformer\'s core bet',
          ],
        },
        {
          heading: 'Choosing the Right Tool Still Matters',
          body: 'LLM dominance in the discourse hides how much production ML is not deep learning. For tabular prediction — churn, fraud scoring, risk models — gradient-boosted trees frequently match or beat neural approaches while training in minutes, running for pennies, and remaining far easier to explain to a regulator. The practitioner\'s heuristic: use classical ML when features are structured and interpretability or cost dominates; use deep learning when representation is the hard part; use a foundation model when the task involves language, code, vision, or general knowledge — because there you are leveraging someone else\'s billion-dollar pre-training rather than learning from scratch. The expensive failure mode in enterprises is reaching for an LLM where a small supervised model would be cheaper, faster, and more auditable — or the reverse: hand-building brittle pipelines for problems a foundation model already solves.',
          bullets: [
            'Gradient boosting remains a strong default for tabular data — cheap, fast, explainable',
            'Foundation models let you rent pre-training instead of paying for representation learning yourself',
            'Match the tool to the problem: the most common enterprise error is defaulting to the most fashionable layer',
          ],
        },
      ],
    },
    {
      id: 'ad1l5',
      diagram: 'WhyNow',
      title: 'Why This Moment Is Different',
      slides: [
        {
          heading: 'Compound Inflection Points',
          body: 'Previous AI waves peaked and crashed when a single enabling factor ran out — funding, compute, or credible results. The current era rests on several curves that inflected together: compute cost per unit of training kept falling on a better-than-Moore trajectory, the internet supplied a training corpus no previous generation had, the transformer made that compute and data efficiently exploitable, and scaling laws made the payoff forecastable enough to underwrite. Each factor amplifies the others — cheaper compute makes more data usable, better models justify more compute spend. This compounding is the structural difference from past waves, which had enthusiasm without an engine. It does not make a slowdown impossible; it means a repeat of the historical boom-crash pattern would require several independent curves to bend at once.',
          bullets: [
            'Past winters: one enabling factor failed and the wave collapsed',
            'Current era: compute, data, architecture, and forecastability inflected together',
            'Compounding curves are harder to break than a single trend',
          ],
        },
        {
          heading: 'Foundation Models Changed the Economics',
          body: 'The deepest structural shift is the foundation model pattern: train once at enormous cost, then serve every use case through an API. Pre-transformer ML required a bespoke model — and a scarce ML team — per task, so capability scaled with headcount, echoing symbolic AI\'s bottleneck. Now the marginal cost of adding an AI capability to a product has collapsed from an ML-engineering project to an API call and a prompt. That is why adoption spread through the software economy in a few years rather than decades: the entire developer population became the addressable market, not just ML specialists. General capability also compounds in a way task-specific models never did — one model\'s improvements flow to every downstream use simultaneously, and techniques like distillation push that capability into ever-cheaper tiers.',
          bullets: [
            'Train once, deploy everywhere — fixed cost amortised across the whole economy',
            'Marginal cost of an AI feature fell from an ML team to an API call',
            'Improvements propagate to all use cases at once, unlike per-task models',
          ],
        },
        {
          heading: 'The Flywheel and Its Physical Limits',
          body: 'AI revenue now funds the next generation of models, which unlock more revenue — a flywheel earlier waves lacked because they never reached commercial escape velocity. The capital deployed into datacentres, accelerators, and power is at a scale comparable to historical infrastructure buildouts, and that spend is itself a structural difference: this wave is pouring concrete. The binding constraints have shifted accordingly, from algorithms toward atoms — electricity generation, grid interconnection, cooling, HBM supply, and construction timelines. These physical limits are the most credible brake on the current era. The honest failure scenario is no longer "the technology stops working"; it is "returns on capability fail to keep pace with the cost of the buildout" — an economic stall rather than a scientific one.',
          bullets: [
            'Revenue → research → capability → revenue: the flywheel earlier waves never closed',
            'Constraints moved from algorithms to power, cooling, memory supply, and construction',
            'The realistic risk is an economics stall, not a capability dead end',
          ],
        },
        {
          heading: 'Structural Risks Worth Naming',
          body: 'Different does not mean safe. Frontier capability is concentrated in a handful of labs and hyperscalers, so the ecosystem inherits their outages, pricing decisions, and strategic pivots as systemic events — a dependency profile closer to cloud infrastructure than to a normal software vendor market. The supply chain runs through single points of failure in advanced fabrication and packaging that geopolitics could disrupt. And expectations have run ahead of deployment reality in many enterprises, where pilot-to-production rates remain the honest measure of the era. Open-weight models (Llama, DeepSeek, Qwen and their successors) are the meaningful counterweight to concentration — capable, self-hostable, and improving fast. Builders should treat model portability as an architectural requirement, not a nice-to-have: the abstraction layer between your product and any single provider is cheap insurance against every risk on this list.',
          bullets: [
            'Concentration risk: a few providers\' decisions propagate through the whole ecosystem',
            'Fabrication and packaging chokepoints are genuine geopolitical exposure',
            'Open-weight ecosystems provide the credible exit option — design for portability',
          ],
        },
      ],
    },
    {
      id: 'ad1l6',
      diagram: 'AIEconomics',
      title: 'The Economics of Intelligence',
      slides: [
        {
          heading: 'Training vs Inference: Two Different Businesses',
          body: 'AI economics splits cleanly in two. Training is capital expenditure: a huge, lumpy, one-time cost per model generation, paid by the vendor before any revenue, on hardware that depreciates fast. Inference is operating expenditure: paid on every request, forever, scaling directly with usage. The two have opposite improvement dynamics — training runs get more expensive each generation as frontier ambitions grow, while the cost of serving any fixed level of capability falls relentlessly. Every commercial structure in the industry falls out of this split: API pricing exists to amortise training capex across the widest possible usage base, model tiers exist because serving cost tracks model size, and vendors overtrain small models precisely because inference, not training, is where lifetime cost accumulates.',
          bullets: [
            'Training: lumpy vendor capex, paid before revenue, per model generation',
            'Inference: metered opex, paid on every request, scales with adoption',
            'Frontier training gets pricier per generation; serving fixed capability gets cheaper',
          ],
        },
        {
          heading: 'Why Inference Now Dominates Spend',
          body: 'Early in the era, training budgets dominated the industry\'s ledger. As deployment scaled, aggregate inference spend overtook training — a model is trained once but queried billions of times, so success itself tilts the ratio. Two newer forces tilt it much further. Reasoning models convert inference compute into capability, multiplying tokens per query by large factors for hard tasks: thinking is metered. And agentic systems replace single question-answer exchanges with long tool-use loops — one user request can fan out into dozens of model calls. This is why the hardware market pivoted toward inference-optimised silicon, and why for builders cost engineering now means managing token consumption: caching, routing easy traffic to cheap models, bounding agent loops, and matching thinking budgets to task difficulty.',
          bullets: [
            'Deployment at scale flipped aggregate spend from training to inference',
            'Reasoning tokens and agent loops multiply per-request consumption',
            'Inference-first silicon (e.g. TPU Ironwood) is the hardware market confirming the shift',
          ],
        },
        {
          heading: 'The Cost-per-Token Collapse',
          body: 'The price of any fixed level of capability has fallen by orders of magnitude within just a few years — one of the steepest sustained cost declines in computing history. The drivers stack: better hardware per dollar, low-precision serving, smarter batching and caching, distillation packing frontier-level capability into small models, and genuine price competition among providers, with open-weight releases acting as a hard ceiling on what anyone can charge. The strategic consequence for builders is that today\'s unit economics are a floor, not a fact: features that are marginally uneconomic at current prices become profitable on a short horizon. Teams that architect for this — routing by task difficulty, revisiting model choices quarterly — systematically outcompete teams that hard-code today\'s prices into their product decisions. The corollary discipline: falling unit costs invite exploding unit volumes, so spend governance still matters.',
          bullets: [
            'Orders-of-magnitude decline for fixed capability, driven by hardware, serving efficiency, and distillation',
            'Open-weight availability caps API pricing power across the market',
            'Design for tomorrow\'s prices: uneconomic features become viable on short horizons',
          ],
        },
        {
          heading: 'Open Weights vs APIs — and What It Means for Builders',
          body: 'The API model sells convenience: zero infrastructure, frontier capability, per-token pricing, and someone else\'s ops team — at the cost of dependency on a provider\'s pricing, availability, and policies. Open-weight models (Llama, DeepSeek, Qwen and their successors) invert the trade: you pay for GPUs and expertise, gaining data locality, customisation, and unit costs that can beat API pricing at sustained high volume. The break-even is workload-shaped — spiky or low volume favours APIs; steady high-volume, latency-sensitive, or data-sovereign workloads favour self-hosting, with hosted open-weight providers as the middle path. In practice mature teams run portfolios: frontier APIs for the hardest tasks, small or self-hosted models for high-volume routine work. The durable builder posture is to hold your provider relationship loosely — abstract the model layer, benchmark alternatives regularly, and let the market\'s deflation work for you.',
          bullets: [
            'APIs: opex, zero infrastructure, provider dependency; open weights: capex plus ops, control and locality',
            'Break-even depends on volume shape, latency needs, and data constraints — not ideology',
            'Portfolio strategy plus a model-abstraction layer is the durable architecture',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI pricing follows a simple logic: you are paying for inference, and inference keeps getting cheaper. Understanding the training/inference split explains most of what you see in AI product pricing.',
          bullets: [
            'Subscription tiers and usage caps are how vendors manage metered inference cost',
            'Capability that is premium-priced today reliably becomes cheap or free within a short horizon',
            'Free tiers exist because serving efficiency keeps improving underneath them',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Economics objections — "this will be too expensive at scale" — are among the most common blockers in AI security deals, and they are answerable with structure rather than reassurance.',
          bullets: [
            'Reframe TCO around inference: model per-alert and per-investigation token cost at the customer\'s real event volume',
            'Counter "too expensive at scale" with the cost-collapse trend plus tiered routing — routine triage on small models, deep investigation on frontier ones',
            'Data-sovereignty objections often resolve via open-weight or single-tenant hosting — know which deployment modes your product supports before the objection lands',
            'Agentic features multiply token consumption — proactively explain loop bounds and budget controls before the customer discovers the bill shape',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Token spend is a first-class architectural concern. The teams with sane AI unit economics designed for cost from the start rather than optimising after the first alarming invoice.',
          bullets: [
            'Instrument cost per feature and per user from day one — aggregate billing hides which product surface is burning money',
            'Route by difficulty: cheap models for routine calls, frontier models for hard ones, with an abstraction layer so routing is config, not code',
            'Cap agent iterations and set per-task thinking budgets — unbounded loops are the dominant cost-incident pattern',
            'Re-benchmark model choices on a schedule; price-performance shifts fast enough to reverse build decisions within a year',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients systematically misjudge AI economics in both directions — overestimating steady-state costs by projecting today\'s prices forward, and underestimating how usage growth compounds. Correct both in the business case.',
          bullets: [
            'Build declining unit costs and rising volumes into multi-year TCO — static assumptions fail in opposite directions',
            'Locate each workload on the API-vs-open-weight break-even using volume shape and data constraints, not vendor preference',
            'Make spend governance (budgets, routing policy, per-feature attribution) a deliverable of every AI engagement, not an afterthought',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why did symbolic AI ultimately fail to scale?', options: ['The hardware of the era was too slow to run rule engines', 'Rule-based systems were impossible to explain to regulators', 'Every capability required explicit human authoring, so coverage scaled with headcount while real-world edge cases scaled combinatorially', 'Neural networks were proven mathematically superior in the 1960s'], correct: 2 },
    { q: 'What did the Chinchilla result establish about compute-optimal training?', options: ['Models of the time were undertrained — optimal training uses roughly 20 tokens per parameter', 'Parameters matter far more than training data', 'Training data quality is irrelevant beyond a threshold', 'Inference cost is independent of model size'], correct: 0 },
    { q: 'What defines the "second scaling era"?', options: ['Training on synthetic data exclusively', 'Ever-larger pre-training runs on more parameters', 'Abandoning transformers for new architectures', 'Scaling inference-time compute — longer reasoning and search per request improve capability'], correct: 3 },
    { q: 'Why does memory bandwidth, not raw FLOPS, dominate LLM inference performance?', options: ['GPUs cannot perform floating-point math efficiently', 'Generating each token requires streaming model weights and KV cache through the chip, so bandwidth sets tokens per second', 'Network latency to the datacentre is the main bottleneck', 'Inference runs on CPUs, which lack FLOPS'], correct: 1 },
    { q: 'A team needs a churn-prediction model on structured tabular data with strict explainability requirements. The strongest default is:', options: ['Gradient-boosted trees — competitive accuracy, cheap, and far easier to explain', 'A frontier LLM via API', 'A fine-tuned vision transformer', 'A multi-agent LLM system'], correct: 0 },
    { q: 'What structurally separates the current AI era from previous waves?', options: ['Governments now fund all AI research directly', 'Compute, data, architecture, and forecastable scaling inflected together, plus a revenue flywheel earlier waves never closed', 'Modern AI systems no longer have failure modes', 'Hardware costs have stopped mattering'], correct: 1 },
    { q: 'Why has aggregate inference spend overtaken training spend across the industry?', options: ['Training has become nearly free', 'Vendors stopped training new models', 'Models are trained once but queried at massive scale, and reasoning tokens plus agent loops multiply per-request consumption', 'Regulation caps training budgets'], correct: 2 },
    { q: 'When does self-hosting an open-weight model tend to beat using a frontier API?', options: ['Always — open weights are strictly cheaper', 'For spiky, low-volume workloads with no data constraints', 'Never — APIs are strictly cheaper', 'For steady high-volume, latency-sensitive, or data-sovereign workloads where infrastructure cost amortises'], correct: 3 },
  ],
};

export default adM1;
