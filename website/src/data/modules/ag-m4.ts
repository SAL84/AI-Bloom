import type { CourseModule } from '../../types/course';

const agM4: CourseModule = {
  id: 'ag-m4',
  title: 'Making It Hold Up',
  icon: 'target',
  summary: 'Operating an agent that runs unattended: designing around non-determinism, tracing well enough to reconstruct a failure, the failure taxonomy you will actually meet and what each one signals, cost and latency as requirements rather than reports, degrading gracefully instead of stopping dead, and what belongs in a log.',
  lessons: [
    {
      id: 'ag4l1',
      title: 'Non-Determinism as an Engineering Constraint',
      sectionLabel: 'Operations',
      slides: [
        {
          heading: 'The Same Input Will Not Give the Same Run',
          body: 'Sampling makes any single model call variable, and a multi-step loop compounds that variability into genuinely divergent trajectories: two runs of the same task can differ in which tools they call, how many steps they take and what they conclude. Reducing sampling randomness narrows this but does not remove it, because providers do not guarantee identical outputs across time or infrastructure, and any change to a prompt, a tool description or a retrieved document legitimately reshuffles behaviour. The engineering response is not to chase determinism. It is to stop depending on it: design so that correctness is a property of the outcome and the invariants rather than of the path, and so that any single run failing is an expected event the system handles rather than an anomaly that requires a person.',
          bullets: [
            'Per-call variance compounds into divergent trajectories over a multi-step run',
            'Lowering randomness narrows the spread; it does not give you reproducibility',
            'Correctness must be a property of outcomes and invariants, not of the path taken',
            'A single failed run should be a handled event, not an exception requiring a human',
          ],
        },
        {
          heading: 'Design So Variance Is Survivable',
          body: 'Several concrete practices follow. Make re-running safe, which means the idempotency work in the tool layer is a reliability requirement and not only a correctness one, because your recovery strategy for a large share of failures will be to try again. Define invariants that must hold on every run — this class of agent never writes outside these records, never exceeds this spend, always produces a result carrying these fields — and enforce them in the runtime where they are checkable rather than trusting them to hold. Prefer designs where a second attempt is cheap over designs where each attempt is expensive and must therefore succeed. And pin what you actually can: model family and version, prompt version, tool schema version, retrieval index version, all recorded on the run, so that when behaviour shifts you can tell whether anything under your control moved.',
          bullets: [
            'Idempotency is a reliability requirement, because retry is your main recovery path',
            'Enforce per-run invariants in the runtime rather than trusting them to hold',
            'Prefer cheap-retry designs over designs where each attempt must succeed',
            'Record model, prompt, schema and index versions on every run',
          ],
        },
        {
          heading: 'Judging Whether Something Changed',
          body: 'Because runs vary, no single run is evidence about a change, and this is where teams most often mislead themselves: an engineer tries the new prompt once, it works, and it ships. Judgements about behaviour require repetition and a distribution — a scenario run several times, with the pass rate compared against the pass rate before. That machinery is the subject of a neighbouring discipline and deserves its own treatment; the point here is architectural. Build the system so a scenario can be executed repeatedly without manual setup: environment reset, seeded fixtures, a runner that takes a stored case and produces a structured result. Teams that skip this end up unable to answer whether anything improved, and settle into changing prompts by intuition, which works until the second person joins the project.',
          bullets: [
            'One successful run is not evidence that a change helped',
            'Behaviour claims need repeated runs and a pass-rate comparison',
            'Build for repeatable execution: environment reset, fixtures, a case runner',
            'Without it, prompt changes are made on intuition and regressions ship unseen',
          ],
        },
      ],
    },
    {
      id: 'ag4l2',
      title: 'Tracing a Reconstructable Run',
      slides: [
        {
          heading: 'The Run Is a Tree',
          body: 'Agent execution is not a linear log, and forcing it into one is why so many teams have logs they cannot use. A run contains steps; a step contains one model call and the tool executions it requested; a subagent hangs beneath the step that spawned it; a retry sits under the call it repeats. Model it as spans with parent references and a single run identifier propagated everywhere, including into downstream systems the tools touch, so an anomalous record in another service can be traced back to the run and step that created it. The structure is what makes the trace usable: it lets you collapse a forty-step run to its shape, expand only the step that went wrong, and see immediately whether a subagent was involved. A flat stream of log lines from a concurrent agent is close to unreadable and reliably goes unread.',
          bullets: [
            'Run contains steps; steps contain a model call and its tool executions',
            'Subagents nest under the spawning step; retries nest under the call they repeat',
            'Propagate the run identifier into downstream systems the tools write to',
            'Structure is what makes a long run readable — flat logs from concurrent agents do not get read',
          ],
        },
        {
          heading: 'Record What Cannot Be Reconstructed',
          body: 'The test for whether a field belongs in the trace is whether you could recover it afterwards from something else. Assembled prompts cannot be recovered, because templating, retrieval, compaction and truncation all happened at runtime and the template does not tell you what came out — this is the single most frequently missing field and the one whose absence most often ends an investigation. Raw tool results cannot be recovered, because the external system has moved on. Tool arguments as sent, versions in play, budget state at each step, and which branch of your assembly logic ran all fall in the same category. What you can safely omit is anything derivable: token counts you can recompute, formatting you can regenerate. Store the inputs to decisions rather than the narrative of them.',
          bullets: [
            'Assembled prompts are unrecoverable afterwards and are the field most often missing',
            'Raw tool results are unrecoverable because the external system has moved on',
            'Also capture arguments as sent, versions, budget state, and which assembly branch ran',
            'Omit anything you can derive later; store the inputs to decisions, not the narrative',
          ],
        },
        {
          heading: 'Volume, Sampling and Cost',
          body: 'Full-fidelity traces are large — they contain every prompt, which means they can exceed the size of the work product by a wide margin — and at production volume the storage and the transmission are a real cost that teams discover late and respond to by turning tracing down to nothing. Plan the tiering instead. Keep full fidelity for a sampled fraction of successful runs, and for every run that failed, hit a budget ceiling, triggered a gate, or ended in escalation, since those are the ones anyone will want. Keep skeletons — step count, tools called, timings, costs, outcome — for everything, because the skeleton is what aggregate analysis runs on and it is small. Set retention by class rather than uniformly, and decide it before launch, because after an incident the retention window you had is the retention window you have.',
          bullets: [
            'Full traces can exceed the size of the work product; volume costs are real',
            'Full fidelity for failures, budget trips, gated and escalated runs, plus a success sample',
            'Skeletons for everything: steps, tools, timings, cost, outcome',
            'Set retention per class before launch — after an incident it is too late',
          ],
        },
      ],
    },
    {
      id: 'ag4l3',
      title: 'The Failure Taxonomy You Will Actually Meet',
      slides: [
        {
          heading: 'Wrong Tool, and Right Tool Wrong Arguments',
          body: 'These are the two most common failures in production and they need separating, because the fixes differ and the aggregate metric hides both. Wrong tool means the model selected an action inappropriate to the situation, and it points at the toolset: overlapping capabilities, a description that omits when not to use this, or a missing tool that made a near-fit look reasonable. Right tool wrong arguments means selection was correct and the invocation was not — a wrong identifier, a misparsed date, a free-text field filled with an invented value, a unit mismatch — and it points at the schema. Instrument both separately: per-tool selection rate against a labelled expectation, and per-tool argument validation failure rate. When one tool dominates either metric, you have found your next hour of work, and it is usually a rewrite of one description.',
          bullets: [
            'Wrong tool indicts the toolset: overlap, missing "when not to", or an absent capability',
            'Wrong arguments indict the schema: loose types, unstated formats, undescribed fields',
            'Measure selection accuracy and argument-error rate per tool, separately',
            'One tool usually dominates, and the fix is usually one description',
          ],
        },
        {
          heading: 'Hallucinated Tools and Malformed Calls',
          body: 'Sometimes a model calls something that does not exist, or invents a parameter, or produces a call that does not conform to the schema. The instinct is to treat this as a model defect, and it is more usefully treated as a signal about your context. Invented tools usually correspond to a capability the agent needed and did not have, so the name it invented is a specification for the tool you are missing, and reading those names in aggregate is one of the cheapest product research exercises available. Invented parameters usually mean the schema does not express something the task requires. Operationally, handle these without drama: validate every call against the registered schema before dispatch, return a specific correctable error naming what is available, and count them, because a rising rate normally follows a change you made rather than anything the model did.',
          bullets: [
            'An invented tool name is a specification for the capability you did not provide',
            'An invented parameter usually means the schema cannot express the task',
            'Validate against the registered schema before dispatch and return a correctable error',
            'Track the rate: it usually rises after your change, not after a model change',
          ],
        },
        {
          heading: 'Premature Stop and Infinite Loop',
          body: 'The two termination failures are opposites with a shared cause, which is a completion decision left to judgement. Premature stop is the expensive one because it is quiet: the agent declares success on partial work and the failure surfaces later, downstream, as a data problem that nobody attributes to the agent. Its signatures are a low step count with a successful status, a terminal call with thin or missing evidence fields, and success rates that improve suspiciously after a prompt change that emphasised efficiency. Infinite loop is loud, costs money and trips a budget, and its signatures are repeated action fingerprints and no movement in the progress predicate. Both are addressed by the same discipline covered earlier: a deterministic completion predicate where one exists, a terminal tool carrying evidence, and stuck-detection running inside the loop rather than in a dashboard afterwards.',
          bullets: [
            'Premature stop is quiet and surfaces downstream as a data problem nobody attributes',
            'Signatures: low step count with success, thin evidence, suspicious efficiency gains',
            'Infinite loop is loud: repeated fingerprints and a flat progress predicate',
            'Both are fixed by checkable completion, evidence-carrying terminals and in-loop detection',
          ],
        },
        {
          heading: 'Context Exhaustion and Compounding Premise Errors',
          body: 'Context exhaustion is the failure that looks like a model getting worse mid-run: quality degrades as the window fills, the agent forgets a constraint agreed twenty steps ago, and eventually something overflows or is silently trimmed. Its fix is upstream in context engineering rather than here, but its detection belongs in operations — track context size per step and correlate failures against it, and you will usually find a threshold beyond which quality falls off. The subtler relative is the compounding premise error: step two read the wrong record, and every subsequent step operated competently on a false premise, so the visible error is at the end and the cause is near the beginning. The operational counter is checkpoint assertions after the steps that establish premises, so the run fails where the premise broke instead of where the consequence became visible.',
          bullets: [
            'Track context size per step and correlate against failures to find the threshold',
            'Degradation before overflow is the common case; the hard limit is not the real limit',
            'Compounding premise errors put the visible error far from the cause',
            'Assert after premise-establishing steps so the run fails where it actually broke',
          ],
        },
      ],
    },
    {
      id: 'ag4l4',
      title: 'Cost and Latency as Requirements',
      slides: [
        {
          heading: 'Write the Numbers Down Before You Build',
          body: 'Cost per successful task and latency at the tail are functional requirements for an agent, not reports you produce afterwards, because they determine the architecture rather than describing it. An interactive feature with a few seconds of tolerance cannot contain a ten-step sequential loop, and discovering that after building one means rebuilding. Derive the numbers from the alternative: what the task costs when a person does it, and how long the user or the queue will actually wait. Then decompose the budget across the loop — how many steps, what context size per step, which steps may use a larger model — so that the design conversation happens in terms of a budget you are allocating rather than a bill you receive. Track cost per successful task rather than per run, since failed and retried runs are part of what a success costs.',
          bullets: [
            'Cost per success and tail latency are requirements that determine the architecture',
            'Derive them from the human alternative and from real waiting tolerance',
            'Decompose the budget across steps, context size and model tier',
            'Measure per successful task; failures and retries are part of the price of a success',
          ],
        },
        {
          heading: 'Where the Money Actually Goes',
          body: 'Agent economics are dominated by input tokens rather than output, because every step re-sends the accumulated context, so a run\'s cost grows with roughly the square of its length in the naive case. Three consequences follow. Context discipline is the highest-leverage cost lever available, well ahead of model choice. Prompt caching matters disproportionately here, since the re-sent prefix is exactly the cacheable part. And the tail of the step distribution dominates the bill — a small fraction of long confused runs frequently accounts for a large share of spend, which is why a step ceiling is a cost control and not only a safety one. Instrument cost per step and per tool, not just per run, because that is what tells you whether one verbose tool result is quietly funding your entire cost problem.',
          bullets: [
            'Input tokens dominate: every step re-sends the history, so cost grows superlinearly',
            'Context discipline outranks model choice as a cost lever',
            'A small tail of long confused runs typically drives a large share of spend',
            'Attribute cost per step and per tool, or the verbose tool result stays invisible',
          ],
        },
        {
          heading: 'Latency Is Structural',
          body: 'Total latency is roughly the number of sequential steps multiplied by the time per step, which means the only large wins are structural. Reduce sequential steps by giving the model tools at the right granularity, so one call does what three did. Parallelise independent tool calls within a step, which requires tools designed to be safely concurrent and a loop that dispatches them together. Use a smaller model for mechanical steps where the judgement required is minimal, keeping the larger one for the decisions that actually need it. And manage perception where you cannot manage duration: streaming intermediate progress changes the experienced wait substantially for interactive features, and for background work, an honest status and a notification are usually worth more than shaving seconds. Optimise the step count first; per-call tuning rarely moves a multi-step run enough to matter.',
          bullets: [
            'Latency is sequential steps times time per step — attack the step count first',
            'Right-sized tools remove steps; parallel dispatch removes waiting within a step',
            'Route mechanical steps to a smaller model and keep the larger one for decisions',
            'Stream progress for interactive work; status and notification for background work',
          ],
        },
      ],
    },
    {
      id: 'ag4l5',
      title: 'Degrading Gracefully',
      slides: [
        {
          heading: 'Every Run Should Have an Exit That Is Not Success',
          body: 'Unattended systems must have a defined behaviour for every way a run can fail to complete, and the default of raising an exception is inadequate because it discards the work and tells the caller nothing actionable. Enumerate the non-success exits and design each: budget exhausted, blocked on a missing precondition, blocked on a permission or an approval, a dependency unavailable, unrecoverably confused. For each one the run should checkpoint its state, produce whatever partial output is legitimately usable, record a specific reason, and hand back a status the caller can branch on. The difference between a system that is operable and one that is not is largely this: whether a person receiving a failed run knows what happened and what to do, or receives a stack trace and a question.',
          bullets: [
            'Enumerate the non-success exits and design behaviour for each one',
            'Budget exhausted, blocked, unauthorised, dependency down, unrecoverably confused',
            'Checkpoint, emit usable partial work, record a specific reason, return an actionable status',
            'Operability is largely whether the recipient of a failure knows what to do next',
          ],
        },
        {
          heading: 'Partial Results Beat Nothing, With Honest Labelling',
          body: 'An agent that processed sixty of a hundred records has produced real value, and discarding it because the run did not finish wastes both the work and the money. Return the partial result — but label it precisely, because an unlabelled partial result is worse than no result at all: it gets used as though it were complete, and the sixty processed records become a data quality incident that surfaces weeks later. Say what was covered and what was not, in a form a consuming system can act on rather than a sentence a human might read. Make the partial state resumable so continuing does not mean redoing. And decide per feature whether partial output is acceptable at all, because for some tasks the honest answer is that half an answer is not a smaller answer but a wrong one.',
          bullets: [
            'Partial work is real value; discarding it wastes the work and the spend',
            'An unlabelled partial result gets consumed as complete and becomes a later incident',
            'State coverage in a form a consuming system can act on, not just readable prose',
            'For some tasks half an answer is wrong rather than small — decide per feature',
          ],
        },
        {
          heading: 'Fallbacks and Their Failure Modes',
          body: 'The standard fallbacks are worth having and worth bounding. Retry the run, which works for genuine transient failures and burns money when the failure is systematic — cap it and distinguish the classes before retrying. Fall back to a smaller or different model when a provider is degraded, which requires that your prompts and tool schemas actually work on more than one model family, a portability claim most teams have never tested. Fall back to a deterministic path where one exists, which is another argument for the hybrid architecture. And fall back to a human, which is the most reliable option and needs the handover designed rather than improvised. The failure mode common to all of them is the silent fallback: a system that quietly degrades to a worse path and reports success, so nobody notices until quality drifts. Fallbacks should always be visible in the result and in the metrics.',
          bullets: [
            'Retry only after classifying the failure; systematic failures fail slower and cost more',
            'Model fallback requires portability you have actually tested, not assumed',
            'A deterministic fallback path is another reason to keep one around',
            'Never fall back silently — record it in the result and in the metrics',
          ],
        },
      ],
    },
    {
      id: 'ag4l6',
      title: 'What to Log and What Never To',
      slides: [
        {
          heading: 'A Trace Contains Everything the Model Saw',
          body: 'This is the fact that changes how traces should be handled. The assembled context includes retrieved documents, user data, tool results and anything the agent read, so a full-fidelity trace store is a copy of a large slice of your sensitive data in a system that was probably provisioned as observability infrastructure with observability access controls. Treat it accordingly: access control it as you would the underlying data, set retention deliberately rather than inheriting a default, and make sure the people who can read production traces are a defined set. Redact at write time rather than at read time, because a redaction applied on the way out is a filter someone can bypass, whereas a value never written is never exposed. Credentials, tokens and keys should be scrubbed structurally in the logging layer, not by remembering not to log them.',
          bullets: [
            'The trace is a copy of everything the model saw, including retrieved user data',
            'Apply the access controls and retention of the underlying data, not of a log store',
            'Redact at write time; read-time filtering is a control that can be bypassed',
            'Scrub credentials structurally in the logging layer, not by discipline',
          ],
        },
        {
          heading: 'The Fields That Make Debugging Possible',
          body: 'Against that, log enough to work with, because under-logging produces incidents nobody can explain and a team that guesses. The non-negotiable set: run and step identifiers propagated everywhere, the assembled prompt per model call, tool arguments and raw results, the model and prompt versions, budget state, which policy or gate decisions were made and what they returned, and the final status with its reason. Log allows as well as denials, because knowing that a check ran and passed is evidence and its absence is ambiguous. Structure the fields rather than emitting prose, so the log is queryable and the aggregate questions — which tool has the highest argument error rate this week — are answerable without writing a parser. Emit at a level of detail that a person who did not build the system could follow, since that is who reads it at three in the morning.',
          bullets: [
            'Identifiers, assembled prompts, arguments, raw results, versions, budget, decisions, final status',
            'Record allows as well as denials — an absent record is ambiguous evidence',
            'Structured fields, not prose, so aggregate questions are queryable',
            'Write for someone who did not build the system and is reading it under pressure',
          ],
        },
        {
          heading: 'Metrics You Should Be Able to Answer From',
          body: 'Traces explain a run and metrics tell you which runs to look at, so keep a small set that is genuinely used. Success rate by task type. Cost and steps per successful task, reported as a distribution rather than a mean. Tail latency. Failure counts by taxonomy class, which is what turns the previous lesson from vocabulary into a work queue. Per-tool call volume, error rate and argument error rate. Budget-trip rate and escalation rate. Cache hit rate, since it moves cost and latency together and drifts silently. Keep it small enough that the whole set is on one screen and someone looks at it weekly, because the failure mode here is not too few metrics but a dashboard rich enough that nobody reads it and no one notices that a number has been wrong for a month.',
          bullets: [
            'Success rate by task type; cost and steps per success as distributions, not means',
            'Failure counts by taxonomy class — that is what makes the taxonomy operational',
            'Per-tool volume, error rate and argument error rate; budget trips and escalations',
            'Keep the set small enough that it fits on a screen and gets read weekly',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why is lowering sampling randomness an inadequate answer to non-determinism in an agent?', options: ['It makes the model slower', 'Providers do not guarantee reproducible output, and any prompt, tool or retrieval change legitimately reshuffles behaviour, so correctness must rest on outcomes and invariants rather than on the path', 'It prevents tool calling', 'It breaks prompt caching'], correct: 1 },
    { q: 'Which trace field is most often missing and most often ends an investigation?', options: ['The HTTP status of the model call', 'The number of tools registered', 'The assembled prompt as actually sent, after templating, retrieval, compaction and truncation', 'The wall-clock start time'], correct: 2 },
    { q: 'An agent repeatedly calls a tool name that does not exist. What is the most useful interpretation?', options: ['The model needs to be replaced with a larger one', 'The invented name is a specification for a capability the agent needed and was not given', 'Tool validation should be disabled to let the call through', 'The context window is too small'], correct: 1 },
    { q: 'Which failure mode is described as quiet, surfacing later downstream as a data problem nobody attributes to the agent?', options: ['Infinite loop', 'Hallucinated tool call', 'Context exhaustion', 'Premature stop — success declared on partial work'], correct: 3 },
    { q: 'Why does agent cost grow superlinearly with run length in a naive loop?', options: ['Because every step re-sends the accumulated context, so input tokens dominate and compound', 'Because output tokens are priced higher than input tokens', 'Because each step spawns a subagent', 'Because tool executions are billed per second'], correct: 0 },
    { q: 'A run exhausts its budget after processing sixty of a hundred records. What is the worst option?', options: ['Return the sixty with explicit coverage information and a resumable checkpoint', 'Return the sixty without any indication that the run was incomplete', 'Return nothing and escalate with the state attached', 'Return the sixty and trigger a follow-up run for the remainder'], correct: 1 },
    { q: 'What is the common failure mode shared by all fallback strategies?', options: ['They require a second model provider', 'They cannot be traced', 'Falling back silently, so the system degrades to a worse path while reporting ordinary success', 'They always increase cost'], correct: 2 },
    { q: 'Why should full-fidelity traces be access-controlled as sensitive data rather than as ordinary logs?', options: ['Because they are large and expensive to store', 'Because they contain assembled prompts, and therefore a copy of the retrieved documents, user data and tool results the model saw', 'Because they include model version numbers', 'Because observability tools cannot enforce retention'], correct: 1 },
  ],
};

export default agM4;
