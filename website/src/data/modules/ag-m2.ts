import type { CourseModule } from '../../types/course';

const agM2: CourseModule = {
  id: 'ag-m2',
  title: 'Context Engineering',
  icon: 'brain',
  summary: 'The window as a budget you spend on purpose: assembling context in code rather than by accretion, deciding what earns its place, ordering for attention, compacting without losing the thread, memory tiers and their lifetimes, and cache-aware layout as a first-order cost lever.',
  lessons: [
    {
      id: 'ag2l1',
      title: 'Context Is Assembled, Not Accumulated',
      sectionLabel: 'Assembly',
      diagram: 'ContextAssembly',
      slides: [
        {
          heading: 'Make It a Function',
          body: 'In most agents that drift into trouble, the context is whatever has accumulated: a message array that has been appended to since the run began, with occasional emergency trimming when something overflows. The alternative is to treat assembly as an explicit function of run state — given the goal, the history, the scratchpad, the retrieved material and the remaining budget, return the exact message list to send. Written that way it becomes ordinary code: testable in isolation, versioned alongside prompts, and inspectable without running the agent. It also forces the questions that accumulation lets you avoid, principally what to leave out. The practical marker of maturity here is that a developer can print the assembled context for step nine of a stored run without executing anything, and can explain why each section is present.',
          bullets: [
            'Assembly is a pure function of run state, not a side effect of appending',
            'Testable, versioned and inspectable without running the agent',
            'It forces the omission decisions that accumulation quietly defers',
            'Benchmark: can you print step nine\'s exact context without re-running the agent?',
          ],
        },
        {
          heading: 'Allocate the Budget by Section',
          body: 'Give each section of the context a nominal token allowance and enforce it during assembly: system instructions, tool definitions, retrieved material, conversation history, scratchpad, and current observations. The allowances do not need to be precise, they need to exist, because the alternative is that one section silently eats the others — a verbose tool result crowding out the retrieved documents that would have made it interpretable. With explicit allowances, overflow becomes a local decision made in the section that overflowed, with a strategy suited to that section: summarise history, drop the lowest-ranked retrieved chunk, truncate the tool result with a pointer to the full artefact. Log the realised token share per section per step. The distribution is almost always surprising the first time a team looks at it, and it usually indicts the tool definitions.',
          bullets: [
            'Nominal allowances per section, enforced at assembly time',
            'Overflow becomes a local decision with a section-appropriate strategy',
            'Without allowances, one verbose section quietly evicts the others',
            'Log realised token share per section — the first look is usually a surprise',
          ],
        },
        {
          heading: 'Instrument What Was Actually Sent',
          body: 'The prompt in your template is not the prompt the model received, and the gap between them is where a large share of context bugs live: a truncation that cut a constraint, a retrieval that returned nothing and rendered as an empty section, a tool list assembled in a different order than you assumed, a scratchpad that failed to load. Capture the assembled context per step and store enough of it to reconstruct the run. This overlaps with tracing, covered later as an operational concern, but the motivation here is narrower and more immediate: without it, every context change is evaluated by watching aggregate behaviour and guessing. With it, the first question after any strange run — what did it actually see — has a one-command answer, and most strange runs stop being mysterious at that point.',
          bullets: [
            'The template is not the prompt; the difference is where context bugs hide',
            'Empty retrieval sections and dropped scratchpads render silently',
            'Store assembled context per step so "what did it see" is answerable immediately',
            'Without this, every context change is evaluated by guesswork over aggregates',
          ],
        },
      ],
    },
    {
      id: 'ag2l2',
      title: 'What Earns Its Place',
      diagram: 'ContextCuration',
      slides: [
        {
          heading: 'Six Claimants, Different Justifications',
          body: 'Six things compete for the window and each has to justify itself differently. System instructions earn their place if they change behaviour — most long system prompts contain paragraphs that have never been shown to change anything and were added after one bad output. Tool definitions cost tokens on every single step, so an unused tool is a recurring charge. Retrieved material should be scoped to the current step rather than the whole task. History accumulates by default and is the section most in need of a policy. The scratchpad is usually the highest value per token in the whole context and the most neglected. Current observations are the point of the loop. Judge each by a single question asked per step: does the model need this to decide the next action?',
          bullets: [
            'Judge each section per step: is this needed to choose the next action?',
            'Tool definitions are a recurring charge on every step — unused tools are pure overhead',
            'Retrieved material should be scoped to the step, not to the whole task',
            'The scratchpad is usually the best value per token and the least used',
          ],
        },
        {
          heading: 'The Tool List Is Context',
          body: 'Teams reason carefully about retrieval and then register thirty tools without a second thought. Every definition — name, description, full argument schema — occupies the window on every step, and the aggregate is frequently larger than the retrieved documents everyone is arguing about. Worse, the cost is not only economic: a long tool list measurably degrades selection, because near-duplicate tools with overlapping descriptions force a discrimination the model has no good basis for making. The remedies are unglamorous. Register only the tools the current phase of the task can use, which is straightforward when the loop has phases. Collapse near-duplicates into one tool with an enumerated mode. And audit usage, because tool lists grow monotonically and nobody has ever removed one without being asked to.',
          bullets: [
            'Tool definitions often outweigh retrieved material in realised tokens',
            'Long lists degrade selection: near-duplicates force an impossible discrimination',
            'Register per phase where the loop has phases, rather than everything always',
            'Audit call counts — unused tools cost on every step and are never removed spontaneously',
          ],
        },
        {
          heading: 'History Needs a Policy, Not a Default',
          body: 'Raw history is the least information-dense content in the window: long tool outputs that have already been acted on, reasoning that has been superseded, failed attempts whose only remaining value is one sentence about what did not work. Give it a policy. Keep the last few turns verbatim because recency genuinely matters for coherence. Replace older tool results with a short record of what was fetched and what it established, retaining any identifier the agent may need again. Keep failures, but compressed to the lesson — an agent that loses the memory of a failed approach will retry it, which is one of the more expensive ways to waste a budget. And prefer re-fetching a document over carrying it for twenty steps, since a tool call is usually cheaper than the accumulated cost of transporting the content through every intervening call.',
          bullets: [
            'Keep recent turns verbatim; distil older tool results to outcome plus identifiers',
            'Compress failures to the lesson — a forgotten failure gets retried',
            'Re-fetching often costs less than carrying a document through twenty calls',
            'Raw history is the lowest information density per token in the whole context',
          ],
        },
      ],
    },
    {
      id: 'ag2l3',
      title: 'Ordering, Recency and Attention',
      diagram: 'ContextOrdering',
      slides: [
        {
          heading: 'Position Is Not Neutral',
          body: 'Models attend unevenly across a long context, with material at the beginning and the end reliably better used than material in the middle. This is a well-replicated effect across model families rather than a quirk of any one of them, and it has a direct engineering consequence: where you put something changes whether it is used. The constraint that governs the whole run belongs in the stable opening region. The material that governs the next action belongs near the end, adjacent to where generation begins. The bulk that is merely available — background documents, older history — belongs in the middle, where degradation is tolerable because you are not depending on it. Any layout that puts the critical constraint in the middle of a long context is one you should expect to fail intermittently, which is the worst way to fail.',
          bullets: [
            'Beginning and end are used reliably; the middle is where material goes to be ignored',
            'Run-wide constraints at the top; next-action material at the bottom',
            'Background bulk belongs in the middle precisely because you are not relying on it',
            'A critical constraint buried mid-context fails intermittently, which is the hardest failure to diagnose',
          ],
        },
        {
          heading: 'Restate What Must Not Be Forgotten',
          body: 'For constraints that must hold across a long run — the account you are permitted to touch, the format the output must take, the thing you must never do — a single statement at the top of a growing context is not enough. Restate them near the end of the assembled context at each step, ideally rendered from structured run state rather than copied prose, so they are cheap, consistent and impossible to lose to compaction. This looks redundant and is not: the constraint has to survive a context that may be an order of magnitude longer than when it was first stated. Keep the restatement short and specific. A long restated block competes with the observations it sits next to, and the value comes from proximity to the decision point rather than from volume.',
          bullets: [
            'Restate hard constraints near the end of context on every step',
            'Render from run state, not by copying prose, so they cannot drift or be compacted away',
            'Keep it short — a long restatement competes with the observation it sits beside',
            'Redundancy is the point: the constraint must survive a much longer context than it was written into',
          ],
        },
        {
          heading: 'Mark the Boundary Between Instruction and Data',
          body: 'Everything the agent reads arrives in the same channel as everything it was told. Retrieved documents, tool results, file contents and page text are data, but they are rendered as text in a context whose other text is instructions, and models do not have a reliable structural way to tell the difference. Mark it explicitly: wrap external content in clearly delimited sections, label the source, and state in the system instructions that content inside those sections is material to reason about rather than direction to follow. Be honest about what this achieves. It measurably helps and it is not a boundary — a determined instruction embedded in retrieved content can still be followed, which is why the security treatment of this problem lives in structural controls rather than in framing. Do it anyway, because it is nearly free and it reduces accidental instruction-following, which is more common than the adversarial case.',
          bullets: [
            'External content and instructions share one undifferentiated channel',
            'Delimit and label external material, and say what its status is',
            'This reduces accidental instruction-following; it is not a security boundary',
            'The adversarial case needs structural controls — this is hygiene, not defence',
          ],
        },
      ],
    },
    {
      id: 'ag2l4',
      title: 'Compaction Without Losing the Thread',
      diagram: 'ContextCompaction',
      slides: [
        {
          heading: 'Compaction Is a Protocol, Not a Summary',
          body: 'When history no longer fits, the naive move is to ask a model to summarise the conversation and continue from the summary. That works until it does not, and the failure is characteristic: the run continues confidently, having discarded a constraint or a decision, and produces work that contradicts something agreed twenty steps earlier. Treat compaction as a structured extraction into a schema instead of a free-text summary. Fields that earn their place: the goal as currently understood, decisions taken with their reasons, constraints still in force, exact identifiers touched, open questions, approaches already tried and rejected, and the current state of the artefact. Filling a schema is a much more reliable operation than writing a good summary, and it gives you something you can validate, diff between compactions, and show a human.',
          bullets: [
            'Extract into a schema rather than generating free-text prose',
            'Goal, decisions and reasons, live constraints, identifiers, open questions, rejected approaches',
            'Schema output can be validated, diffed across compactions and shown to a human',
            'The classic failure is confident continuation after silently dropping a constraint',
          ],
        },
        {
          heading: 'Compact Early, Compact by Section',
          body: 'Waiting until the window is nearly full is the worst time to compact, because you are then doing a large lossy transformation under pressure with no room for the compaction call itself. Compact incrementally instead: retire the oldest tool results into the summary as you go, so the operation is small, frequent and cheap. Prefer sectional compaction over wholesale, since the sections have very different loss tolerances — old tool output compresses aggressively with little cost, whereas decisions and constraints should be carried forward verbatim and never passed through a summariser at all. Anything derived from structured run state does not need compacting because it is regenerated at each assembly. What remains to compress is genuinely just the narrative middle, which is exactly the part that compresses well.',
          bullets: [
            'Compact incrementally as you go, not in one large operation at the limit',
            'Sections have different loss tolerances — compress tool output, carry decisions verbatim',
            'Structured run state is regenerated, not compacted',
            'The narrative middle is the only part that both needs compression and survives it',
          ],
        },
        {
          heading: 'Test That the Thread Survived',
          body: 'Compaction is the one context operation with a clean test, and almost nobody writes it. Take a stored run, compact at step N, and resume from the compacted state: does the agent make the same next decision it made with the full history? Run it over the runs you already have and you will find the losses, which are rarely random. They cluster on exactly the material that is stated once early and relied on late — the user\'s original phrasing of an ambiguous requirement, an identifier mentioned in passing, an exception agreed near the start. Once you know your loss profile you can fix it structurally by promoting those items into the schema. Keep the pre-compaction state as well, because a run that goes wrong after compaction is usually diagnosed by comparing what went in with what came out.',
          bullets: [
            'Resume a stored run from a compacted state and compare the next decision',
            'Losses cluster on material stated once early and relied on late',
            'Fix the profile structurally by promoting those items into the schema',
            'Retain pre-compaction state — the diff is the diagnosis',
          ],
        },
      ],
    },
    {
      id: 'ag2l5',
      title: 'Memory by Lifetime',
      diagram: 'MemoryLifetimes',
      slides: [
        {
          heading: 'Three Lifetimes, Three Different Problems',
          body: 'Memory is not one feature, it is three stores with genuinely different lifetimes and failure modes, and conflating them is why memory features so often disappoint. The scratchpad lives for one task: notes, the working plan, intermediate results, what has been tried. Its problem is discipline — the agent has to write to it, and it will not unless the loop makes it natural. Task or session memory lives across the interactions that make up one piece of work, and its problem is scoping, since it must be found again by the right run and not by others. Persistent memory lives indefinitely and carries preferences, conventions and accumulated facts, and its problems are curation and staleness. Design each separately, with its own write path, read path and expiry, rather than building one memory system and hoping.',
          bullets: [
            'Scratchpad: one task; the hard part is getting the agent to write to it',
            'Task or session memory: one piece of work; the hard part is scoping and retrieval',
            'Persistent memory: indefinite; the hard parts are curation and staleness',
            'Separate write path, read path and expiry per tier, not one system for all three',
          ],
        },
        {
          heading: 'Write Policy Is the Hard Part',
          body: 'Reading memory is easy and writing it is where systems go wrong. Left to its own judgement a model writes too much, storing transient details as if they were durable facts, and the store fills with material that is true only of one afternoon. Constrain the write. Give memory a schema with a small number of categories rather than a free-text append. Require a reason and a source for each entry, which both improves quality and makes later review possible. Prefer explicit write moments — end of task, after an approval, on an explicit instruction — over allowing writes at any step. And decide what happens when a new entry contradicts an existing one, because the default of keeping both produces a store that says two things and an agent that picks unpredictably between them.',
          bullets: [
            'Unconstrained writes fill the store with facts that were true for one afternoon',
            'Schema with limited categories, plus a required reason and source per entry',
            'Prefer explicit write moments over writes at any arbitrary step',
            'Define contradiction handling — silently keeping both is how a store starts lying',
          ],
        },
        {
          heading: 'Retrieval Bounds the Whole Thing',
          body: 'Once memory outgrows what you can paste in wholesale, it is a retrieval system, and its quality ceiling is your retrieval quality rather than anything about the model. That reframing is useful because it imports a body of practice: relevance is measured, recall at the depth you actually inject is the number that matters, and injecting ten marginal memories is worse than injecting two good ones, because the marginal ones consume the same attention budget as the good ones. Two failure modes recur. Memories that surface on topical similarity but not situational relevance, so the agent applies a preference from an unrelated project. And stale entries that outrank fresh ones because they are better written. Timestamp everything, prefer recency where entries conflict, and make the injected memories visible in the trace so you can see which ones influenced a decision.',
          bullets: [
            'Beyond a small store, memory quality is retrieval quality',
            'Two good memories beat ten marginal ones — attention is the shared budget',
            'Watch for topical-but-not-situational matches and for well-written stale entries',
            'Timestamp, prefer recency on conflict, and show injected memories in the trace',
          ],
        },
      ],
    },
    {
      id: 'ag2l6',
      title: 'Cache-Aware Layout and What Actually Moves Quality',
      diagram: 'CacheAwareLayout',
      slides: [
        {
          heading: 'Stable Prefix, Volatile Suffix',
          body: 'Providers can reuse computation for a prompt prefix that exactly matches a previous request, at a substantial discount and a real latency saving. In a single-shot application that is a nice optimisation. In an agent loop it is a structural cost lever, because the loop re-sends the same prefix on every step of every run, so a design that preserves the prefix and one that breaks it differ by a large multiple in both cost and time-to-first-token. The rule follows directly: stable content first, in a fixed order, with everything volatile appended after it. System instructions, tool definitions and durable reference material form the prefix. Conversation, observations and freshly retrieved material go after. Design the layout for this from the start, because retrofitting it means moving content that other parts of the system have come to depend on the position of.',
          bullets: [
            'Prefix reuse compounds across every step of every run, unlike in single-shot use',
            'Stable ordered prefix: instructions, tool definitions, durable references',
            'Volatile suffix: turns, observations, fresh retrieval',
            'It affects latency as well as cost, which matters for anything interactive',
          ],
        },
        {
          heading: 'What Breaks the Prefix, Usually by Accident',
          body: 'Prefix invalidation is almost always accidental and almost always early in the prompt. A timestamp or a session identifier interpolated into the system instructions invalidates everything after it on every call. A tool list assembled by iterating an unordered collection produces a different order per process, so the cache misses across instances while looking fine locally. Per-user preferences injected at the top rather than after the shared prefix fragment the cache across your user base. Retrieved documents placed before the tool definitions push the volatile content into the stable region. None of these are visible in output quality, which is why they persist. Make cache hit rate a monitored metric with an owner, review it after any prompt change, and treat a sudden drop the way you would treat a latency regression.',
          bullets: [
            'A timestamp in the system prompt invalidates everything after it, every call',
            'Unordered tool registration silently differs per process and misses across instances',
            'Per-user content at the top fragments the cache across your entire user base',
            'Monitor cache hit rate and review it after every prompt change',
          ],
        },
        {
          heading: 'Context Quality Beats Model Choice More Often Than Expected',
          body: 'The recurring finding, reported by enough independent teams to be treated as a default hypothesis, is that agents underperforming for apparent reasoning reasons are usually underperforming for context reasons. The critical fact was present but positioned where attention degrades. The tool description was ambiguous so the wrong tool was chosen and the trajectory was doomed at step two. A constraint was compacted away. Stale results crowded the observation that mattered. The reflex when quality disappoints is to upgrade the model, which is expensive, slow to evaluate and frequently produces a modest improvement that masks the actual defect. Diagnose first, and diagnose specifically: read the assembled context at the step where the run went wrong and ask whether a careful person with only that context would have made the same mistake. Very often the answer is yes.',
          bullets: [
            'Treat context failure as the default hypothesis before reasoning failure',
            'Read the assembled context at the step things went wrong, not the whole trace',
            'Ask whether a careful person given only that context would have erred the same way',
            'Model upgrades often produce a small improvement that hides the real defect',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'What an AI system is shown at the moment it decides matters more than which model is behind it. Most disappointing AI behaviour comes from the system handing the model the wrong material rather than from the model being incapable.',
          bullets: [
            'Long conversations degrade because the important part is now buried, not because the model got worse',
            'Restating the key constraint late in a long thread genuinely helps',
            'A better model rarely fixes a system that is showing it the wrong information',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Context assembly is where a lot of quality and a lot of exposure decisions get made, and few teams can show you theirs. Asking to see the assembled context for a specific step separates products that were engineered from products that accreted.',
          bullets: [
            'Ask whether the team can print the exact assembled context for a stored step',
            'Delimiting external content is hygiene; the boundary has to be structural elsewhere',
            'Memory writes need a source and a reason, or contamination cannot be traced or reversed',
            'Injected memories should be visible in the trace so an action can be attributed to what influenced it',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Write the assembly function early and keep it pure. Section allowances, per-step token share logging and a stable cache prefix are all cheap on day one and genuinely painful to retrofit once other code depends on the current layout.',
          bullets: [
            'Assembly as a pure function of run state, unit tested and versioned with prompts',
            'Log realised token share per section per step and watch the tool definitions',
            'Restate hard constraints at the tail, rendered from state rather than copied prose',
            'Monitor cache hit rate as a first-class metric and gate prompt changes on it',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'When a client pilot underdelivers, the request that follows is usually for a bigger model. Reading the assembled context at the failing step is faster, cheaper and resolves the question more often, and it reframes the programme around something the client can actually own.',
          bullets: [
            'Diagnose context before endorsing a model upgrade — it is the cheaper experiment',
            'Show realised token share by section; the tool definitions usually make the case for you',
            'Put cache-aware layout in the design standard, since it is a cost lever clients keep',
            'Compaction testing is a concrete deliverable few teams have and all long-running agents need',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What is the practical benefit of treating context assembly as a pure function of run state?', options: ['It removes the need for a system prompt', 'It can be tested, versioned and inspected without running the agent, and it forces explicit decisions about what to leave out', 'It guarantees the context never overflows', 'It eliminates the need for retrieval'], correct: 1 },
    { q: 'A team measures realised token share per context section for the first time. Which section most commonly turns out larger than expected?', options: ['The tool definitions, which are re-sent on every step regardless of use', 'The system instructions', 'The current observation', 'The scratchpad'], correct: 0 },
    { q: 'Where should a constraint that must hold for the entire run be placed in a long assembled context?', options: ['Once, in the middle, so it is surrounded by relevant material', 'Only in the first message, since repetition wastes tokens', 'Stated at the top and restated near the end of each step\'s context, rendered from run state', 'In the tool descriptions'], correct: 2 },
    { q: 'Delimiting and labelling retrieved content as external material achieves what, precisely?', options: ['It prevents the model from following instructions embedded in that content', 'It removes the need for egress controls', 'It makes the content exempt from compaction', 'It reduces accidental instruction-following, but it is not a boundary against a determined embedded instruction'], correct: 3 },
    { q: 'Why is a structured extraction preferable to a free-text summary when compacting a long run?', options: ['It uses fewer tokens in every case', 'It can be validated, diffed across compactions and shown to a human, and it makes dropping a live constraint structurally visible', 'It allows the run to skip the compaction model call', 'Free-text summaries cannot be stored'], correct: 1 },
    { q: 'Which material is most likely to be lost by compaction and cause a failure later?', options: ['Verbose tool output from early steps', 'Material stated once early and relied on late, such as an agreed exception or an identifier mentioned in passing', 'The most recent observation', 'The tool definitions'], correct: 1 },
    { q: 'An agent stores memories freely at any step with no schema. What is the characteristic result?', options: ['The store fills with transient details recorded as durable facts, and contradictions accumulate unresolved', 'Retrieval latency becomes the bottleneck', 'Memories become impossible to write', 'The context window overflows on the first step'], correct: 0 },
    { q: 'Which change most reliably destroys prompt cache hit rate in an agent loop?', options: ['Appending the newest tool result at the end of the context', 'Keeping tool definitions in a fixed order', 'Interpolating a timestamp or session identifier into the system instructions', 'Compacting the conversation history'], correct: 2 },
  ],
};

export default agM2;
