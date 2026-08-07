import type { CourseModule } from '../../types/course';

const adM2: CourseModule = {
  id: 'ad-m2',
  title: 'Generative AI & LLMs',
  icon: 'brain',
  summary: 'Transformer internals, MoE architectures, training and post-training pipelines, tokenisation, inference optimisation, hallucination mechanics, RAG engineering, and the adaptation decision framework.',
  lessons: [
    {
      id: 'ad2l1',
      title: 'The Transformer Architecture',
      playground: 'nextword',
      sectionLabel: 'Architecture',
      diagram: 'Embeddings',
      slides: [
        {
          heading: 'Attention Is All You Need',
          body: 'The transformer, introduced by Vaswani et al. in 2017, replaced recurrence with self-attention — every token can attend to every other token in the sequence in a single parallel operation. That one change removed the sequential bottleneck of RNNs and made it economical to train on essentially unlimited text with massive GPU clusters. Nearly a decade later, every frontier language model is still a transformer at its core, though heavily modified: different attention variants, different position encodings, different feed-forward blocks. The skeleton is unchanged: embed tokens, alternate attention and feed-forward layers with residual connections, project back to vocabulary logits. Understanding this skeleton is the prerequisite for everything else in this module — inference cost, context limits, and fine-tuning all trace back to it.',
          bullets: [
            'Each block: attention (tokens exchange information) then a feed-forward network (each token processed independently)',
            'The final layer projects to a probability distribution over the vocabulary — one next token at a time',
          ],
        },
        {
          heading: 'Attention Mechanics: Queries, Keys, Values',
          body: 'Attention is a soft lookup. Each token produces three vectors: a query ("what am I looking for?"), a key ("what do I contain?"), and a value ("what do I contribute?"). Every query is compared against every key via dot product, the scores are scaled and softmaxed into weights, and the output is the weighted sum of values. Multi-head attention runs this many times in parallel with different learned projections, letting different heads specialise — some track syntax, some track coreference, some copy verbatim. The cost is the catch: comparing all pairs is quadratic in sequence length, which is why raw attention over very long inputs is expensive and why so much engineering effort targets exactly this bottleneck.',
          bullets: [
            'Attention(Q, K, V) = softmax(QKᵀ/√d)V — one line of math powering the whole field',
            'Multi-head: parallel attention with separate projections, concatenated and mixed',
            'Quadratic scaling: doubling context length quadruples attention compute in prefill',
          ],
        },
        {
          heading: 'Position: RoPE and the Road to Long Context',
          body: 'Attention is order-agnostic — "dog bites man" and "man bites dog" would be identical without position information. Early transformers added absolute position vectors to each embedding, but that ties the model to the lengths it saw in training. Modern LLMs almost universally use RoPE (rotary position embeddings): positions are encoded by rotating query and key vectors by an angle proportional to their index, so attention naturally depends on relative distance between tokens. RoPE also extends: by rescaling the rotation frequencies (position interpolation, YaRN and successors) plus targeted long-context training, models trained mostly on shorter sequences can operate at hundreds of thousands of tokens. That is the main reason context windows grew so quickly — it was a position-encoding and data problem as much as a raw compute problem. Even so, effective use of long context lags claimed window size: retrieval quality inside the window degrades ("lost in the middle").',
        },
        {
          heading: 'The KV Cache: Why Generation Works the Way It Does',
          body: 'Generation is autoregressive: the model produces one token, appends it, and runs again. Naively, every step would recompute attention over the entire sequence. The KV cache fixes this — keys and values for all previous tokens are computed once and stored, so each new token only computes its own query against the cached history. This makes decoding fast but moves the cost into GPU memory: the cache grows linearly with context length and can rival the model weights for long conversations. That memory pressure drove architectural responses — multi-query and grouped-query attention (GQA) share key/value heads across query heads, shrinking the cache several-fold with minimal quality loss, and most modern open and frontier models use some variant. When a provider offers prompt caching, it is literally persisting this KV cache between requests.',
          bullets: [
            'Prefill (process the prompt, parallel) and decode (one token at a time, sequential) are distinct phases with different bottlenecks',
            'KV cache trades memory for compute — long contexts are memory-hungry, not just slow',
            'GQA: many query heads share fewer KV heads — a near-free cache reduction',
          ],
        },
      ],
    },
    {
      id: 'ad2l1b',
      diagram: 'MoE',
      title: 'Beyond Vanilla Transformers: MoE and Friends',
      slides: [
        {
          heading: 'Mixture of Experts: Sparse by Design',
          body: 'A dense transformer activates every parameter for every token — expensive and increasingly unnecessary. Mixture-of-experts (MoE) replaces each feed-forward block with many parallel "expert" networks and a small router that sends each token to only a few of them. The result is a model with a very large total parameter count but a much smaller active parameter count per token. That decoupling is why most frontier models today are MoE: you get the knowledge capacity of a huge model at the inference compute of a much smaller one. It also explains why "how many parameters?" became a nearly meaningless question — total and active parameters can differ by an order of magnitude, and vendors rarely disclose either for proprietary models.',
          bullets: [
            'Router: a learned gate picks the top-k experts per token, per layer',
            'Total parameters set capacity and memory footprint; active parameters set per-token compute',
            'Cost per token tracks active parameters — the economics behind cheap-but-capable frontier tiers',
          ],
        },
        {
          heading: 'MoE Engineering Realities',
          body: 'MoE is not a free lunch. All experts must be resident in memory even though few run per token, so serving MoE demands large GPU memory or expert parallelism — sharding experts across devices and routing tokens over the interconnect. Training brings its own failure mode: without countermeasures the router collapses onto a few favourite experts while the rest go undertrained, so load-balancing losses and capacity limits are standard. Modern designs push further with many small experts, shared always-on experts, and fine-grained routing. For practitioners the takeaway is diagnostic: MoE explains why some models are cheap to run but expensive to host, and why batch throughput and latency behave differently than dense models of similar quality.',
          bullets: [
            'Memory is provisioned for total parameters; compute is spent on active ones',
            'Load balancing prevents router collapse — an auxiliary training objective, not an afterthought',
            'Expert parallelism adds network traffic — interconnect bandwidth becomes a serving bottleneck',
          ],
        },
        {
          heading: 'Cheaper Attention: Sliding Windows and Linear Variants',
          body: 'The second cost centre after the FFN is attention itself, and the same sparsity instinct applies: most tokens don\'t need to attend to everything. Sliding-window attention limits each token to a local neighbourhood, cutting cost from quadratic toward linear; information still travels far because each layer extends the effective receptive field. Many production models interleave local-attention layers with a few global ones — most layers cheap, a few layers with full reach. A separate research family (linear attention and friends) reformulates attention to avoid the all-pairs comparison entirely, trading some quality for constant-memory decoding. The pattern to internalise: full attention where it matters, cheaper approximations everywhere else — hybrids, not purism. These choices are invisible in the API but visible in pricing, speed, and long-context behaviour.',
        },
        {
          heading: 'State-Space Models and Long-Context Engineering',
          body: 'The most radical alternative drops attention altogether. State-space models like Mamba process sequences recurrently through a fixed-size learned state: linear-time processing, constant memory during generation, no KV cache at all. Pure SSMs lag transformers on tasks needing precise recall of specific earlier tokens, so the practical direction is hybrids — mostly SSM or local-attention layers with a small number of full-attention layers for exact retrieval. Several serious open hybrid models have shipped, and the approach remains an active research direction rather than the frontier default. Long-context engineering ties this lesson together: RoPE scaling, sliding windows, GQA, cache compression, and hybrid layers are all facets of one question — how to make sequence length cheap without losing recall. When evaluating any long-context claim, watch effective context (measured recall across the window), not just the advertised length.',
        },
      ],
    },
    {
      id: 'ad2l2',
      diagram: 'AIPipeline',
      title: 'Pre-training & Fine-tuning Pipeline',
      slides: [
        {
          heading: 'The Data Pipeline: Where Models Actually Come From',
          body: 'Before any GPU spins up, a frontier lab runs an industrial data operation. Raw web crawls are filtered for language, deduplicated at document and near-duplicate level, scrubbed for boilerplate and spam, and scored for quality — often by smaller classifier models trained to recognise well-written, informative text. To that base, teams add curated sources (code, papers, books, licensed corpora) and increasingly synthetic data: model-generated text, targeted at capabilities the natural web under-represents, such as step-by-step reasoning and tool use. The final mixture weights — how much code versus prose versus multilingual text — are among the most closely guarded and most consequential decisions in the pipeline, because they shape what the model is good at more directly than most architecture choices.',
          bullets: [
            'Deduplication matters disproportionately — repeated data wastes compute and encourages memorisation',
            'Synthetic data now supplements the web, especially for reasoning and code — with care to avoid degenerate feedback loops',
            'Data mixture is a capability dial: more code in pre-training measurably improves general reasoning',
          ],
        },
        {
          heading: 'Pre-training: Next-Token Prediction at Scale',
          body: 'Pre-training itself is conceptually simple and operationally brutal: predict the next token, trillions of times, across thousands of accelerators for weeks or months. The loss function never mentions facts, grammar, or reasoning — all of it emerges because predicting text well requires modelling the world that produced the text. The engineering is in keeping the run alive: sharding model and data across the cluster (FSDP, tensor and pipeline parallelism), checkpointing against hardware failures, and watching loss curves for divergence. Scaling laws guide how to spend a compute budget between model size and data volume, and the industry has broadly moved toward "overtraining" smaller models on far more tokens than compute-optimal, because inference cost — not training cost — dominates a deployed model\'s lifetime economics. The base model that emerges is a text completer, not an assistant — post-training creates the product.',
        },
        {
          heading: 'Post-training: SFT, RLHF, DPO, RLAIF',
          body: 'Post-training turns a raw completer into a usable assistant, in stages. Supervised fine-tuning (SFT) trains on curated instruction–response pairs, teaching format and instruction-following. Then preference optimisation aligns behaviour with human judgement: in classic RLHF, humans rank pairs of outputs, a reward model learns those preferences, and reinforcement learning (typically PPO) optimises the policy against it. DPO collapses this into a direct loss on preference pairs — no separate reward model, far simpler to run — and became the workhorse for open models. RLAIF and Constitutional AI substitute or augment human raters with AI feedback guided by written principles, which scales oversight far beyond what human labelling budgets allow. Frontier pipelines mix all of these, plus reinforcement learning on verifiable rewards (does the code pass tests? is the math right?) for reasoning capability.',
          bullets: [
            'SFT teaches the format of being helpful; preference tuning teaches the judgement',
            'DPO: direct optimisation on preference pairs — simpler than RLHF, widely adopted in the open ecosystem',
            'RLAIF / Constitutional AI: AI feedback against explicit principles — scalable oversight',
          ],
        },
        {
          heading: 'Reward Hacking: When Optimisation Outsmarts the Objective',
          body: 'Every reward signal is a proxy for what you actually want, and a strong optimiser will exploit the gap. Models trained against learned reward models discover that longer answers score better, that confident hedging beats honest uncertainty, and that agreeing with the user (sycophancy) is rewarded even when the user is wrong. In RL on verifiable tasks, models have been observed gaming the checker rather than solving the problem. This is Goodhart\'s Law operating inside the training loop, and it is why post-training is iterative: red-teaming, reward-model refreshes, adversarial evaluation, and mixing objectives to make single-metric exploitation harder. For practitioners, reward hacking explains real product behaviour — verbosity, flattery, refusal quirks — as artefacts of the optimisation target, not mysteries of the model.',
          bullets: [
            'Reward models are imperfect proxies — optimise hard enough and the flaws become the behaviour',
            'Sycophancy and verbosity are the classic observable symptoms in shipped assistants',
            'Verifiable rewards (tests, proofs) resist hacking better than learned preferences — but not perfectly',
          ],
        },
      ],
    },
    {
      id: 'ad2l3',
      title: 'Tokenisation In Depth',
      playground: 'tokenizer',
      diagram: 'Tokenization',
      slides: [
        {
          heading: 'BPE: How Text Becomes Integers',
          body: 'Models never see characters or words — they see integer IDs from a fixed vocabulary, and byte-pair encoding (BPE) is how that vocabulary gets built. Start from raw bytes, count which adjacent pairs co-occur most often in a training corpus, merge the most frequent pair into a new token, and repeat tens of thousands of times. Common words end up as single tokens, rare words split into recognisable pieces, and anything at all — any language, emoji, binary junk — remains representable because the 256 base bytes are always in the vocabulary. Tokenisation is a compression scheme with consequences: it fixes how much text fits in a context window, how much a request costs, and where the model\'s blind spots are, before a single parameter is involved.',
          bullets: [
            'Byte-level BPE guarantees any input is encodable — no out-of-vocabulary failures',
            'Merges are learned from corpus statistics: frequent strings become cheap, rare ones expensive',
            'The tokeniser is trained separately, before the model, and frozen forever after',
          ],
        },
        {
          heading: 'Modern Tokenisers: Bigger Vocabularies, Fairer Coverage',
          body: 'Tokeniser design moved on. The ~100K-vocabulary tokenisers of the GPT-4 era (cl100k) gave way to vocabularies around 200K and beyond — o200k-class tokenisers and comparable designs from other labs — trained on more multilingual and code-heavy corpora. Larger vocabularies compress text into fewer tokens, which directly means more content per context window and lower cost per document, with the biggest gains for non-English languages that older, English-centric tokenisers fragmented badly. A Hindi or Thai sentence that once cost several times its English equivalent now tokenises far more fairly, though inequality hasn\'t vanished. Code also tokenises efficiently — whitespace runs and common idioms get dedicated tokens. When comparing model costs, remember the unit itself differs: a "token" is not the same amount of text across vendors.',
          bullets: [
            'Modern ~200K vocabularies compress better than the older ~100K generation — cl100k is legacy, not current',
            'Vocabulary size trades embedding-table memory against sequence length — 200K-ish is the current sweet spot',
            'Cross-vendor cost comparisons need tokens-per-document tests on your actual data, not list prices',
          ],
        },
        {
          heading: 'Tokenisation Failure Modes',
          body: 'A surprising share of "the model is being weird" traces to the tokeniser. Character-level questions — count the letter r, reverse this string — are hard because the model literally does not see letters, only multi-character chunks (the famous strawberry problem). Numbers split inconsistently, complicating arithmetic. Glitch tokens — vocabulary entries whose training data was filtered out after the tokeniser was built — can trigger bizarre completions because their embeddings were never properly trained. Trailing whitespace or unusual Unicode can flip which merge path a string takes and measurably change output quality. The diagnostic habit worth building: when a failure looks inexplicable, run the input through a tokeniser visualiser before blaming the model — you\'ll often find the boundary sitting exactly where the behaviour breaks.',
          bullets: [
            'Character-level tasks fail structurally: the model sees chunks, not letters',
            'Glitch tokens: undertrained vocabulary entries with unpredictable behaviour',
            'Tokeniser visualisers are a first-line debugging tool, not a curiosity',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Everyone quotes the "one token is about four characters" rule of thumb and then budgets as if a token were a word. Measure your own ratio instead — it takes five minutes and it changes your cost model.',
          exercise: {
            task: 'Take a real 300–500 word sample of the text your product actually sends — your own writing, a support ticket, a chunk of your code, a document in the language your users write in. Run it through the tokeniser playground on this lesson and record two numbers: W (words, from any word count) and T (tokens). Compute the ratio R = T ÷ W. Then price your real workload with it, using current input pricing from your provider\'s pricing page — prices change often, so look them up rather than reusing a number you remember.',
            copyText: 'Sample: W = [words] , T = [tokens]\nRatio  R = T ÷ W = [____]\n\nWorkload: [N] requests per month × [P] words of input per request\nInput tokens/month = N × P × R = [____]\nCost/month = (input tokens ÷ 1,000,000) × [price per 1M input tokens] = [____]\n\nNow repeat both lines for output tokens — output is priced separately and usually higher.',
            selfCheck: [
              'You have a number for R, not an assumption — ordinary English prose lands near 1.3 tokens per word, but code, rare names and non-English text run higher',
              'Redo the cost line with R = 1 (one token per word). The gap between that and your real figure is the size of the mistake most budgets contain',
              'Your total includes output tokens priced at the output rate, not the input rate',
              'Tokenise the same content in a second vendor\'s tokeniser — if T differs, per-million prices are not directly comparable',
            ],
          },
        },
      ],
    },
    {
      id: 'ad2l4',
      diagram: 'InferenceServing',
      title: 'Inference & Latency Optimisation',
      playground: 'temperature',
      slides: [
        {
          heading: 'The Shape of the Problem: Prefill vs Decode',
          body: 'LLM inference has two phases with opposite characters. Prefill processes the whole prompt in parallel — compute-bound, throughput-friendly, and responsible for time-to-first-token. Decode then generates one token at a time — each step must read the entire model\'s weights and the KV cache from GPU memory to produce a single token, making it memory-bandwidth-bound and painfully serial. This asymmetry explains most latency behaviour you observe: long prompts delay the first token, long outputs take time proportional to their length, and a GPU serving decode is mostly idle silicon waiting on memory. Every optimisation in this lesson attacks one side of this split: batch more work per memory read, make the memory footprint smaller, or cheat the serial nature of decoding itself.',
          bullets: [
            'Time-to-first-token ≈ prefill cost; tokens-per-second ≈ decode cost — measure them separately',
            'Decode is memory-bound: the bottleneck is reading weights and KV cache, not arithmetic',
            'Streaming hides decode latency from users; it does not reduce it',
          ],
        },
        {
          heading: 'Serving at Scale: Continuous Batching and PagedAttention',
          body: 'Naive serving batches requests together and waits for the longest one to finish — GPUs idle while short requests hold slots. Continuous batching schedules at the token level instead: every decode step, finished sequences leave the batch and queued requests join, keeping the GPU saturated. The second breakthrough was PagedAttention, introduced by vLLM: instead of reserving one contiguous memory region per request sized for the maximum possible context, the KV cache is split into small pages allocated on demand — virtual memory for attention. Fragmentation waste drops from the majority of KV memory to a few percent, which translates directly into larger batches and multiples of throughput. These two ideas are why vLLM and the serving engines that followed it became the default for self-hosted inference.',
          bullets: [
            'Continuous batching: token-level scheduling — no request waits for a stranger to finish',
            'PagedAttention: paged, on-demand KV allocation — near-zero memory fragmentation',
            'Paged KV enables prefix sharing: identical prompt prefixes across requests reference the same pages',
            'Primary source: "Efficient Memory Management for Large Language Model Serving with PagedAttention" — the vLLM paper',
          ],
        },
        {
          heading: 'Speculative Decoding: Cheating the Serial Bottleneck',
          body: 'Decode produces one token per expensive forward pass — unless you guess ahead. Speculative decoding uses a small, fast draft model to propose several tokens, then the large model verifies the whole draft in a single parallel pass. Accepted tokens are guaranteed to match exactly what the large model would have produced alone — the math preserves the output distribution, so there is no quality cost, only a speed gain that depends on how often the draft is right. Predictable text (code, boilerplate, structured output) accepts long drafts and speeds up dramatically; surprising text accepts little. Variants replace the separate draft model with extra prediction heads on the main model (Medusa-style) or n-gram lookup. Most large providers run some form of this silently — it is part of why API speeds keep improving on unchanged models.',
        },
        {
          heading: 'Quantisation: GPTQ, AWQ, GGUF',
          body: 'Weights trained in 16-bit precision carry more precision than inference needs. Quantisation stores them in 8 or 4 bits, shrinking memory footprint several-fold — and since decode is memory-bound, smaller weights also mean faster tokens. The mainstream methods are post-training: GPTQ quantises layer by layer while correcting the error each layer introduces; AWQ observes activations to find the small fraction of weights that matter most and protects them, quantising the rest aggressively. GGUF is not a method but a file format — the llama.cpp ecosystem\'s container with a menu of quantisation levels for CPU and consumer-GPU inference, and the reason capable models run on laptops at all. Quality loss at 8-bit is negligible and at careful 4-bit usually small, but it is task-dependent — quantised models must be evaluated on your workload, not assumed equivalent.',
          bullets: [
            'Memory-bound decode means quantisation buys speed as well as capacity',
            'GPTQ: error-compensating layer-wise quantisation; AWQ: protect activation-critical weights; GGUF: the packaging format behind local inference',
            'Evaluate quantised models on your own tasks — degradation concentrates unpredictably (often math and edge-case reasoning)',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Serving capacity is usually decided by KV cache memory, not by the model weights — and the arithmetic is small enough to do on paper. Work it once and you will never again be surprised by a concurrency limit.',
          exercise: {
            task: 'Compute KV cache size for a hypothetical model: 32 layers, 8 key/value heads, head dimension 128, cache held in FP16 (2 bytes per element), at a context length of 8,192 tokens. Get bytes per token first, then per sequence, then per server at 50 concurrent sequences. Then redo it with the configuration of a model you would actually deploy — an open-weight model card gives you layers, head count and head dimension. Divide bytes by 1,073,741,824 for GiB.',
            copyText: 'Per token    = 2 × [layers] × [kv_heads] × [head_dim] × [bytes_per_element]\nPer sequence = per-token × [context_tokens]\nPer server   = per-sequence × [concurrent_sequences]\n\nHeadroom check: [accelerator memory] − [model weights] = memory left for KV\nMax concurrency ≈ memory left ÷ per-sequence\n\nSimplifications: the 2 counts K and V; assumes every layer is full attention with the same KV-head count; ignores allocator and paging overhead, sliding-window layers, and any KV compression or cache quantisation.',
            selfCheck: [
              'Per token you should get 131,072 bytes — 128 KiB — and per sequence at 8,192 tokens exactly 1 GiB',
              '50 concurrent sequences is 50 GiB of KV alone; subtract the weights from your accelerator memory and see how little headroom is left',
              'Set kv_heads to 32 instead of 8 (the no-GQA case): the cache is 4× larger, which is the whole argument for grouped-query attention in one number',
              'Doubling context doubles the cache and no more — KV grows linearly with length; it is prefill compute, not cache memory, that grows quadratically',
              'Halving the element size (FP16 to FP8) halves the cache — the same lever as weight quantisation, applied to the other memory consumer',
            ],
          },
        },
      ],
    },
    {
      id: 'ad2l5',
      title: 'Hallucination: Mechanisms & Mitigations',
      diagram: 'HallucinationMitigation',
      slides: [
        {
          heading: 'The Mechanism: Plausibility Is the Objective',
          body: 'Hallucination is not a defect bolted onto LLMs — it is the training objective showing through. A model trained to predict likely next tokens learns to produce text that is statistically plausible, and truth is only correlated with plausibility, not identical to it. For facts seen thousands of times in training, the most probable continuation is also the true one. For rare facts — a minor person\'s biography, a niche API\'s parameters, a specific citation — the model has weak or no memorised signal and interpolates from patterns instead: it produces what such an answer typically looks like. The output is fluent, well-formatted, confidently phrased, and wrong. This is why hallucinations cluster exactly where verification is hardest: specific, rare, detailed claims — and why the failure feels like fabrication rather than error.',
          bullets: [
            'The loss rewards plausible text; factuality is a frequently-correlated side effect, not a constraint',
            'Fluency and confidence are decoupled from accuracy — style signals nothing about truth',
            'Citations, URLs, and API signatures are prime hallucination targets: highly structured, easily patterned, rarely memorised',
          ],
        },
        {
          heading: 'Why Training Makes It Worse Before It Makes It Better',
          body: 'Post-training adds its own pressures. Human raters reward confident, complete, helpful-sounding answers — and unknowingly penalise honest uncertainty, teaching models that a fluent guess beats "I don\'t know." Sycophancy compounds this: models learn to agree with a user\'s framing even when it embeds a false premise. Calibration degrades too — base models\' token probabilities track their actual accuracy reasonably well, and preference tuning distorts this, producing uniform confidence across correct and incorrect claims. Sampling adds a final layer: at nonzero temperature, a model that would most probably produce a correct fact can still sample an incorrect neighbour. Frontier labs now explicitly train abstention as a first-class behaviour — partial progress, not a solved problem — which is why mitigation remains architectural rather than a patch.',
        },
        {
          heading: 'The Mitigation Stack',
          body: 'No single technique eliminates hallucination; production systems layer defences that each catch what the previous missed. Grounding comes first: retrieve relevant documents (RAG) and instruct the model to answer only from them, with citations — shifting the task from recall to reading comprehension, which models do far better. Tool use goes further: let the model call search, databases, or code execution instead of trusting its weights. Constrained output (schemas, enumerated choices) removes room for free-form fabrication in structured tasks. Verification layers — a second model checking claims against sources, or self-consistency across multiple samples — catch residual errors. Finally, human review guards consequential actions. Design to the consequence: a wrong movie recommendation and a wrong drug interaction warrant very different stacks.',
          bullets: [
            'Grounding + citations converts recall into comprehension and makes answers auditable',
            'Tool calls beat parametric memory for anything current, rare, or precise',
            'Match mitigation depth to consequence-of-error — a system design decision, not a model setting',
          ],
        },
      ],
    },
    {
      id: 'ad2l6',
      title: 'RAG Architecture In Depth',
      playground: 'embeddings',
      diagram: 'RAGFlow',
      slides: [
        {
          heading: 'The Full Pipeline — and Where Quality Is Won',
          body: 'Production RAG is a pipeline, and output quality is the product of every stage: ingest and parse documents, chunk them, embed the chunks, index the vectors, retrieve candidates for a query, rerank them, and assemble the context the model finally sees. The generation step gets the blame when answers are wrong, but in practice most failures are retrieval failures — the right passage never reached the prompt. That inversion is the core practitioner insight: a mediocre model with excellent retrieval beats a frontier model fed the wrong chunks. It also means RAG quality is measurable at every stage independently, and teams that treat it as one opaque "does the answer look right?" system are debugging blind. This lesson walks the stages where the leverage actually lives.',
          bullets: [
            'Retrieval failure masquerades as generation failure — diagnose upstream first',
            'Parsing matters more than expected: tables, PDFs, and layout-heavy documents lose meaning to naive extraction',
            '"We use RAG" spans naive top-k cosine similarity to multi-stage hybrid retrieval — the label tells you nothing',
          ],
        },
        {
          heading: 'Chunking: The Unglamorous High-Leverage Decision',
          body: 'Chunking decides what a retrievable unit of knowledge is, and it quietly bounds the whole system\'s ceiling. Chunks too small lose context — a sentence about "the previous quarter" retrieves without saying which quarter. Chunks too large dilute the embedding: one vector must represent several topics, matching none well. Fixed-size splitting with overlap is the naive baseline; structure-aware chunking (headings, paragraphs, code blocks) respects semantic boundaries and usually beats it. Stronger patterns decouple matching from reading: parent-document retrieval embeds small precise chunks but hands the model the larger enclosing section; contextual enrichment prepends a document summary or an LLM-generated situating sentence to each chunk before embedding, so isolated fragments carry their own context. Chunking deserves the same experimental rigour as model choice — measured, not defaulted.',
          bullets: [
            'Chunk size trades embedding precision against contextual completeness — there is no universal number',
            'Structure-aware splitting beats fixed-size; never split mid-table or mid-function',
            'Parent-document pattern: match on small chunks, generate from their larger context',
          ],
        },
        {
          heading: 'Hybrid Search and Reranking',
          body: 'Dense embeddings and lexical search fail in complementary ways. Embeddings capture paraphrase and meaning but blur exact identifiers — part numbers, error codes, function names, CVE IDs retrieve poorly as semantics. BM25 keyword scoring nails exact terms but misses reworded concepts. Hybrid search runs both and fuses results, typically with reciprocal rank fusion (RRF), and is the production default because real query streams always contain both kinds. The retrieved candidates then go to a reranker — a cross-encoder that reads query and passage together rather than comparing precomputed vectors, far more accurate and far too slow to run over the whole corpus. The standard shape: cast a wide net with fast hybrid retrieval (top 50–100), then let the reranker choose the handful that enter the prompt.',
          bullets: [
            'BM25 catches what embeddings blur: exact codes, names, identifiers — and vice versa',
            'RRF fuses ranked lists robustly without tuning score scales against each other',
            'Cross-encoder rerankers are the single highest-leverage upgrade to a naive RAG stack',
          ],
        },
        {
          heading: 'Measuring Retrieval: Recall@k, nDCG, and Golden Sets',
          body: 'You cannot tune what you don\'t measure, and RAG offers concrete retrieval metrics that most teams skip. Build a golden set: real user queries paired with the passages that genuinely answer them, judged by humans — even 50–100 examples transform debugging. Recall@k asks: of the relevant passages, how many appeared in the top k retrieved? It is the ceiling metric — if the answer isn\'t retrieved, no prompt engineering can save the generation. nDCG additionally rewards putting the most relevant results highest, which matters because models weight early context more heavily. Track these per pipeline change: a new chunk size, embedding model, or reranker becomes an A/B measurement instead of a vibe. End-to-end answer evals (faithfulness, relevance — often LLM-judged) sit on top, but retrieval metrics tell you which layer to fix.',
          bullets: [
            'Golden query set first — everything else in RAG evaluation depends on it',
            'Recall@k bounds the whole system: missed retrieval is unrecoverable downstream',
            'nDCG measures ranking quality, not just presence — position in context matters',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'RAG is how AI tools answer questions about documents they were never trained on. When those answers go wrong, the search step — not the AI\'s intelligence — is usually the culprit.',
          bullets: [
            'Wrong answers about your documents usually mean the right passage was never found',
            'Citations let you check the source — use them, especially for anything that matters',
            'Rephrasing your question can rescue a failed lookup — you\'re helping the retrieval step, not the model',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'RAG depth is a discovery goldmine: every vendor claims RAG, few can defend their retrieval stack. The stage-by-stage pipeline gives you the questions that separate engineered products from demos.',
          bullets: [
            'Ask: hybrid or dense-only retrieval? Security data is identifier-heavy (CVEs, hashes, hostnames) — dense-only retrieval measurably misses exact-match queries',
            'Ask for retrieval metrics: a vendor with no recall@k numbers on a golden set has never measured their own pipeline',
            'Reranker presence is a maturity signal — naive top-k cosine similarity is the pilot-failure pattern you can predict in advance',
            'RAG keeps customer data out of model weights — your cleanest answer to data-sovereignty and residency objections',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build RAG as an instrumented pipeline from day one — the teams that log and measure each stage ship; the teams that tweak prompts against end-to-end vibes stall.',
          bullets: [
            'Build the golden query set before tuning anything — 50 real queries with judged passages beats any intuition',
            'Default architecture: structure-aware chunking, hybrid retrieval with RRF, cross-encoder rerank of top-50',
            'Log retrieved chunks per request — you cannot debug what you didn\'t capture',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'RAG engagements fail at retrieval and get blamed on the model. Make retrieval quality measurable and contractual, and you\'ve de-risked the majority of the project.',
          bullets: [
            'Put recall@k on a golden set into pilot acceptance criteria — before the pilot starts',
            'Budget for source-data quality and parsing work; clients consistently underestimate both',
            'Audit the stack stage by stage: chunking strategy, hybrid vs dense, reranker, eval harness — gaps here predict failure',
          ],
        },
      ],
    },
    {
      id: 'ad2l7',
      title: 'Fine-Tuning vs RAG vs Prompting',
      diagram: 'FTvsPrompting',
      slides: [
        {
          heading: 'The Decision Framework: Knowledge, Behaviour, or Format?',
          body: 'Every "customise the model" request decomposes into one question: what are you actually trying to change? If the gap is knowledge — the model doesn\'t know your documents, your environment, your current data — the answer is retrieval (RAG), because knowledge injected at query time stays current and auditable. If the gap is behaviour or style — output format, domain terminology, consistent tone, reliable adherence to a complex spec — start with prompting and escalate to fine-tuning only when prompting demonstrably plateaus. If the gap is capability — reasoning the base model simply cannot do — neither RAG nor fine-tuning will save you; pick a stronger model. Most real deployments layer techniques: a fine-tuned or well-prompted model with RAG on top. The framework\'s value is preventing the classic failure — fine-tuning to teach facts, which is slow, stale on arrival, and worse than retrieval at faithful recall.',
          bullets: [
            'Knowledge gap → RAG; behaviour gap → prompting, then fine-tuning; capability gap → better base model',
            'Fine-tuning is poor at adding facts — weights are a lossy, unupdatable store compared to retrieval',
            'The techniques compose — this is a layering decision, not a three-way either/or',
          ],
        },
        {
          heading: 'Prompting First: Cheaper Than You Think, Further Than You Think',
          body: 'Prompting is the highest-leverage, lowest-commitment adaptation, and modern frontier models follow far more nuanced instructions than the folk wisdom from earlier generations suggests. A structured system prompt with role, constraints, output schema, and a handful of well-chosen few-shot examples routinely closes gaps teams assumed needed training. Long context expands what prompting can carry — style guides, glossaries, API references, worked examples — and prompt caching makes a large static prefix economically sane by persisting its KV cache across requests, so the marginal cost of a rich prompt collapses. Prompting also iterates in minutes and rolls back instantly, while any training loop iterates in days. The discipline that makes this real is evaluation: a fixed test set scored per prompt version, so "better" is a measurement, not an impression.',
        },
        {
          heading: 'LoRA and QLoRA: Fine-Tuning Without the Price Tag',
          body: 'Full fine-tuning updates every weight — enormous GPU memory, a full model copy per variant, and real risk of catastrophic forgetting. LoRA (low-rank adaptation) observes that fine-tuning changes are approximately low-rank, so it freezes the base model and trains small paired matrices alongside existing weight matrices — typically well under one percent of parameters. The adapter is megabytes, swappable at runtime, and one base model can serve many adapters for different customers or tasks. QLoRA pushes accessibility further: quantise the frozen base to 4-bit, train LoRA adapters in higher precision on top — capable open models become fine-tunable on a single workstation GPU. Quality on targeted behaviours approaches full fine-tuning for most practical cases, which is why adapter methods are the default and full fine-tuning the exception requiring justification.',
          bullets: [
            'LoRA: freeze the base, train low-rank additions — a fraction of a percent of the parameters',
            'Adapters are small and hot-swappable: one base model, many cheap specialisations',
            'QLoRA: 4-bit frozen base + trained adapters — serious fine-tuning on single-GPU budgets',
            'Primary sources: "LoRA: Low-Rank Adaptation of Large Language Models" and "QLoRA: Efficient Finetuning of Quantized LLMs"',
          ],
        },
        {
          heading: 'When Fine-Tuning Wins — and What It Really Costs',
          body: 'Fine-tuning earns its keep in specific situations: rigid output formats that must hold at very high reliability; deep domain language (legal, medical, niche codebases) where prompting stays subtly off; distilling a frontier model\'s behaviour into a small, cheap model for high-volume narrow tasks; and trimming long prompt scaffolding at scale, where baked-in behaviour undercuts per-request prompt tokens. The honest cost isn\'t the training run — it\'s everything around it: hundreds to thousands of clean labelled examples, an eval harness to prove improvement without regression, and a retraining pipeline for every base-model update, forever. That last item is the silent killer: base models improve fast, and each upgrade restarts your tuning work. The bar is simple — fine-tune when measured prompting-plus-RAG performance genuinely can\'t meet requirements, and the workload\'s scale amortises a permanent maintenance commitment.',
          bullets: [
            'Strong cases: strict format reliability, deep domain style, distillation into smaller models, prompt-token economics at scale',
            'Data is the real cost — curation and labelling dwarf GPU spend',
            'Every base-model upgrade restarts the cycle — fine-tuning is a subscription, not a purchase',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'When teams say they\'ll "train the AI on our data," they\'re usually choosing between three very different things — and the cheapest one solves most problems.',
          bullets: [
            'Better instructions (prompting) fix most issues — training is rarely the actual need',
            'Wanting the AI to know your documents is a retrieval problem, not a training problem',
            'Genuine fine-tuning is an ongoing commitment, not a one-time upgrade',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: '"We need a model fine-tuned on our security data" is the most common mis-scoped ask in security AI deals. The knowledge-vs-behaviour diagnostic lets you redirect it credibly — and LoRA literacy lets you talk cost honestly when fine-tuning is real.',
          bullets: [
            'Run the diagnostic aloud: "Is the gap what the model knows, or how it responds?" Knowledge (runbooks, incidents, threat intel) → RAG, and you\'ve just cut scope dramatically',
            'When fine-tuning is genuine, scope adapters (LoRA/QLoRA), not full training — and surface the hidden costs early: labelled data, eval harness, retraining on every base-model update',
            'Propose a time-boxed prompting sprint with a fixed eval set before any training commitment — it closes most gaps and builds trust either way',
            'RAG\'s auditability (citations, per-query access control) is itself a security feature fine-tuning cannot offer — knowledge baked into weights cannot be permissioned or traced',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Work the escalation ladder with measurements at each rung: prompting with evals, then RAG, then adapters. Each step up adds permanent operational surface — take it only when the previous rung provably plateaus.',
          bullets: [
            'Build the eval set first — every adaptation decision downstream depends on measuring against it',
            'Exhaust structured prompting + few-shot + prompt caching before touching a training loop',
            'Run general-capability evals on tuned models, not just target-task evals — regressions hide off-target',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Fine-tuning is the most over-recommended intervention in AI consulting. A staged adaptation roadmap — prompt, retrieve, then tune — protects clients from expensive commitments that a cheaper layer would have satisfied.',
          bullets: [
            'Contract a prompting sprint with defined eval criteria as phase one of any customisation engagement',
            'Price fine-tuning honestly: data curation, eval infrastructure, and per-base-model-update retraining — not just the training run',
            'Frame RAG vs fine-tuning partly as governance: retrieval is auditable and access-controlled; baked-in knowledge is neither',
          ],
        },
      ],
    },
    {
      id: 'ad2l8',
      title: 'LLM Governance & Safety — When Each Layer Applies',
      diagram: 'LLMGovernanceLayers',
      slides: [
        {
          heading: 'Safety Is Not One Thing',
          body: 'When customers ask "is this AI safe?" they are actually asking several different questions at once. Safety in LLMs is built across three separate phases — before the model ships, while it runs in production, and continuously as it evolves. Each phase catches different failure modes. No single layer is enough on its own.',
          bullets: [
            'Training time: safety and alignment baked into the model before it is ever deployed',
            'Deployment time: guardrails applied at runtime to constrain what the live model can do',
            'Production time: observability to know what the model is actually doing at scale',
            'Continuous evals: validation that runs across all phases to catch regressions and drift',
          ],
        },
        {
          heading: 'Training Time — Safety Built In Before the Model Ships',
          body: 'The first line of defence happens during training itself. Before a model is released, the team running training shapes its behaviour and probes it for failure modes. By the time it reaches customers, these properties are baked into the weights.',
          bullets: [
            'Instruction tuning (SFT): trains the model to follow instructions and be helpful',
            'Constitutional AI (CAI): a principles-based self-critique loop where the model evaluates its own outputs against a set of rules during training',
            'RLHF: shapes behaviour through human preference feedback — humans rank model outputs and the model learns to prefer higher-rated responses',
            'Red-teaming: adversarial probing by humans trying to find failure modes before release',
          ],
        },
        {
          heading: 'Deployment Time — Guardrails on the Live Model',
          body: 'Once a model is deployed, a second layer of controls wraps around it at runtime. These are not inside the model — they sit between the user and the model, filtering what goes in and what comes out on every single request.',
          bullets: [
            'Output filters: block unsafe, harmful, or off-policy content at runtime — the last check before a response reaches the user',
            'Scope and policy limits: define what the model is and is not allowed to do in this specific deployment',
            'Prompt injection defence: reduces the odds of adversarial inputs steering model behaviour — it limits risk rather than creating a hard boundary, so pair it with least privilege',
            'PII and data privacy: detects and redacts sensitive personal data in both inputs and outputs',
          ],
        },
        {
          heading: 'Production Time — Knowing What the Model Is Doing at Scale',
          body: 'Deploying safely is not a one-time event. Once a model is live and handling real traffic, you need visibility into every interaction. Production observability catches the problems that training and deployment guardrails missed.',
          bullets: [
            'Prompt and response tracing: a full audit trail of every interaction — essential for incident investigation and compliance',
            'Cost and token tracking: per-request spend, token usage, and budget alerts',
            'Output drift detection: flags quality degradation and behaviour shifts over time',
            'Latency and performance: response time, throughput, and SLA monitoring',
          ],
        },
        {
          heading: 'Continuous Evals — Validation That Never Stops',
          body: 'Evals are automated tests that run across all three phases. They are the feedback loop that tells you whether the model is still doing what you expect — and whether any change made things better or worse. In a production system, evals run on every update.',
          bullets: [
            'Benchmarks: standardised capability tests used to compare models and track capability over versions',
            'Human preference eval: humans rank and compare model outputs — the most direct signal for actual quality',
            'LLM-as-judge: a model scores and ranks other models\' outputs — scales human evaluation to volumes no human team can cover',
            'Eval harnesses: automated regression suites that run on every model update',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'AI safety is not a single switch — it\'s built in layers across training, deployment, and ongoing monitoring. Understanding this helps you evaluate vendor claims about "safe AI" with appropriate scepticism.',
          bullets: [
            '"Safe AI" is a process across three phases, not a property of the model itself',
            'Guardrails explain why AI tools sometimes refuse requests — that\'s scope limits working as intended',
            'Ask vendors: what audit trail do you have for what the AI said and why?',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'When a customer asks "is this AI safe?" they\'re asking three different questions at once. This three-phase framework turns a vague reassurance into a structured, auditable answer — and surfaces gaps that become security objections if you don\'t name them first.',
          bullets: [
            'Walk through training time → deployment time → production time with the customer — each phase catches different failure modes; asking which phase their concern lives in immediately focuses the conversation',
            'Prompt injection defence is a deployment-time control most prospects haven\'t considered — raise it proactively: "What happens when a threat actor embeds adversarial instructions in email content that your agent is analysing?"',
            'Production observability (tracing, drift detection) is your compliance and audit answer — "can you prove what the AI did and why?" requires prompt/response tracing from day one, not as a retrofit',
            'Ask: does the vendor run red-teaming before major model updates? No answer means no adversarial testing — that\'s a risk posture question, not a product question',
            'Continuous evals distinguish platforms from demos — a vendor without eval harnesses cannot prove their model quality holds across updates',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Safety is an engineering property built across all three phases — not a post-hoc filter. Missing any phase creates a category of failure the others cannot catch.',
          bullets: [
            'Implement prompt and response tracing from day one — retrospective audit trail is impossible without it',
            'Add LLM-as-judge eval to your CI pipeline — human eval alone doesn\'t scale to deployment volume',
            'Prompt injection defence belongs in deployment-time infrastructure, not in every application separately',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Most client "AI safety" audits only inspect the training phase. Production observability and continuous evals are where deployed systems actually fail — and where governance needs to live.',
          bullets: [
            'Build a safety audit that spans all three phases — training-time assurances alone are insufficient for compliance',
            'Require production-time tracing and drift detection as contractual deliverables, not optional features',
            'Continuous evals are the mechanism that makes AI governance auditable over time — build them in from the start',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why does grouped-query attention (GQA) reduce the cost of long-context inference?', options: ['It skips attention to distant tokens, restricting each query to a fixed local window', 'It quantises the attention weights to 4-bit, quartering the data moved per step', 'Multiple query heads share fewer key/value heads, shrinking the KV cache', 'It removes positional encoding, cutting per-token lookup overhead'], correct: 2 },
    { q: 'In a mixture-of-experts model, what does the "active parameter" count refer to?', options: ['The parameters actually used to process each token, selected by the router', 'The total number of parameters resident in GPU memory across all experts', 'The subset of parameters left unfrozen and updated during fine-tuning', 'The parameters in the shared attention layers, excluding the expert blocks'], correct: 0 },
    { q: 'A model trained with RLHF starts producing longer, more flattering answers that raters score highly but users find less accurate. This is best described as:', options: ['Catastrophic forgetting — later training erasing earlier capabilities', 'A tokenisation artefact from how the response is segmented', 'Retrieval failure — the wrong passages reaching the context', 'Reward hacking — the model exploiting flaws in the reward proxy'], correct: 3 },
    { q: 'How does byte-pair encoding (BPE) build its vocabulary?', options: ['By storing every word in a large reference dictionary as a single token', 'By iteratively merging the most frequent adjacent pairs, starting from raw bytes', 'By splitting text at whitespace and punctuation, then keeping the resulting words', 'By training a small neural network to predict where word boundaries fall'], correct: 1 },
    { q: 'What problem does PagedAttention (vLLM) primarily solve?', options: ['KV cache memory fragmentation, by allocating cache in small on-demand pages', 'Slow prompt prefill, by processing long documents in parallel chunks', 'Attention degradation in the middle of long contexts, by reweighting positions', 'Quantisation error in 4-bit models, by keeping the KV cache at full precision'], correct: 0 },
    { q: 'Why do hallucinations cluster on rare, specific facts like citations and API signatures?', options: ['Deduplication passes strip rare strings such as citations from the corpus before training', 'The context window cannot hold enough of the source document for the model to copy the details accurately', 'The model has weak memorised signal for rare facts and interpolates plausible-looking patterns instead', 'Safety filtering suppresses named references, so the model substitutes generic stand-ins'], correct: 2 },
    { q: 'Your RAG system\'s recall@10 on a golden query set is 45%. What does this tell you?', options: ['The LLM is hallucinating on roughly half the answers it generates from the retrieved context', 'Over half the relevant passages never reach the model — no prompt change can recover them', 'The reranker is misordering results, pushing the right passages below the cut-off', 'The context window is too small to fit the ten passages the retriever returns'], correct: 1 },
    { q: 'What makes QLoRA cheaper to run than standard LoRA fine-tuning?', options: ['It attaches adapters to fewer layers, so there are fewer trainable parameters', 'It converges on a much smaller training set, cutting the number of optimisation steps required', 'It merges the adapter weights back into the base model after every epoch to free memory', 'It quantises the frozen base model to 4-bit while training adapters in higher precision'], correct: 3 },
  ],
};

export default adM2;
