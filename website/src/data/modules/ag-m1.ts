import type { CourseModule } from '../../types/course';

const agM1: CourseModule = {
  id: 'ag-m1',
  title: 'The Loop',
  icon: 'zap',
  summary: 'The control flow you own rather than the one the model implies: what a step actually is, how a run ends on purpose, the four budgets that keep it bounded, detecting a stuck or oscillating agent, and the frequent case where a deterministic script is simply the better system.',
  lessons: [
    {
      id: 'ag1l1',
      title: 'The Loop Is Yours, Not the Model\'s',
      sectionLabel: 'Control flow',
      diagram: 'LoopOwnership',
      slides: [
        {
          heading: 'Who Actually Iterates',
          body: 'The model does not loop. It receives a context, emits one response that may contain tool calls, and stops. Every subsequent iteration happens because your runtime decided to call it again with a larger context. That is not a pedantic distinction, it is the whole design surface: iteration count, what gets appended, what gets dropped, when to stop, and what the model is allowed to do next are all decisions made in your code between calls. Teams that inherit a framework loop without reading it end up debugging behaviour they never chose. Write the loop yourself at least once, even if you later adopt a harness, because the questions it forces you to answer are the questions that determine whether the thing works unattended.',
          bullets: [
            'The model emits one response; your runtime decides whether there is a next one',
            'Everything between calls — appending, trimming, gating, budgeting — is your code',
            'A framework loop is still a loop you own the consequences of',
            'The interesting engineering is in the gaps between model calls, not inside them',
          ],
        },
        {
          heading: 'What Counts as One Step',
          body: 'Define a step precisely, because budgets, metrics, traces and stuck-detection all key off it. The usable definition: one model call, plus every tool execution that call requested, plus the observations appended before the next call. Under that definition a step can contain several parallel tool calls, which matters because a model that issues four independent reads in one response is doing one step of reasoning with four actions, not four steps. Counting tool executions instead of model calls makes a parallelising agent look wasteful when it is doing the opposite. Pick one definition, write it down, and use it consistently in the step budget, the cost report and the trace, or your numbers will not compare across runs or across features.',
          bullets: [
            'One step = one model call + its tool executions + the resulting observations',
            'Parallel tool calls inside a response are one step, not several',
            'Budgets, traces and cost reports must all use the same definition',
            'Inconsistent step counting makes parallel agents look worse than serial ones',
          ],
        },
        {
          heading: 'Loop Shapes You Will Actually Choose Between',
          body: 'The interleaved shape — reason, act, observe, repeat — is the default and the most flexible, because each observation can change the plan. Plan-first runs a planning call that produces an explicit ordered list, then executes it with a much smaller model in the loop, which buys predictability, cheaper steps and a plan you can show a human before anything happens, at the cost of adapting badly when reality contradicts the plan. The critique shape inserts a review call over the work so far at fixed points, which catches drift but doubles the cost of every reviewed step. Most production systems are hybrids: plan first, execute interleaved, critique at checkpoints. Choose per feature rather than per company, because the right shape follows from how predictable the task is.',
          bullets: [
            'Interleaved: maximum adaptability, least predictability, the sane default',
            'Plan-first: an inspectable plan and cheaper execution steps, brittle when the plan is wrong',
            'Critique at checkpoints: catches drift, and you pay for every review call',
            'Hybrids are normal — pick the shape from how predictable the task actually is',
          ],
        },
        {
          heading: 'State Lives Outside the Model',
          body: 'Treat the run as an explicit state object rather than as a conversation you keep appending to. It holds the goal, the remaining budgets, the message history, the scratchpad, the tool results you have chosen to keep, the run identifier, and the status. Keeping it explicit buys three things that matter under unattended operation. It can be persisted, so a run survives a process restart or a wait for human input rather than dying with the request. It can be inspected, so a support engineer can answer what the agent currently believes without reading a transcript. And it can be resumed or forked at a specific step, which is what turns a production failure into something you can actually work on. The conversation is a projection of this state, not the state itself.',
          bullets: [
            'Goal, budgets, history, scratchpad, kept results, run id, status — one object',
            'Persistable state lets a run pause for a human or survive a restart',
            'Inspectable state answers "what does it believe now" without reading a transcript',
            'The message array is a rendering of run state, not the source of truth',
          ],
        },
      ],
    },
    {
      id: 'ag1l2',
      title: 'Ending a Run on Purpose',
      diagram: 'RunTermination',
      slides: [
        {
          heading: 'Until It Is Done Is the Most Common Bug',
          body: 'The single most frequent defect in first-generation agents is a termination condition that exists only in the prompt. The instruction says to continue until the task is complete, and completion is left to the model\'s judgement, evaluated against a context that no longer contains the original requirements clearly. What follows is familiar: the agent declares victory on partial work, or it keeps going because there is always another thing that could be checked, or it enters a polite loop of re-verifying what it already verified. None of these are model failures in an interesting sense. They are the predictable result of putting a control-flow decision inside a probabilistic system. Termination is a property of the runtime. The model can propose that it is finished; only your code can decide that the loop ends.',
          bullets: [
            'A prompt-level stop condition is a control decision delegated to a sampler',
            'Three standard outcomes: stops early, never stops, or loops re-verifying',
            'The model may propose completion; the runtime decides it',
            'Every run needs at least one termination condition your code evaluates',
          ],
        },
        {
          heading: 'Make Stopping an Explicit Action',
          body: 'The cleanest mechanism is a terminal tool: the model finishes by calling something like submit or hand_back with a structured result, and the loop ends when that call is made. This is better than parsing prose for finality for several reasons. It gives you a schema, so completion carries the artefact — the answer, the identifiers touched, the confidence, the caveats — rather than a paragraph you then have to interpret. It separates finishing successfully from giving up, if you provide both a success terminal and an escalation terminal, which turns "I could not do this" from a failure into a legitimate outcome. And it makes the end of a run a discrete, loggable event rather than an inference. Anything the caller needs at the end should be a required field on that schema.',
          bullets: [
            'A terminal tool ends the loop; prose finality detection is guesswork',
            'The terminal schema carries the artefact, not just the fact of stopping',
            'Provide a separate escalation terminal so giving up is a first-class outcome',
            'Required fields on the terminal schema are how you stop empty successes',
          ],
        },
        {
          heading: 'Conditions Your Code Can Actually Check',
          body: 'Wherever the definition of done is mechanically checkable, check it mechanically and do not ask the model. The tests pass. The record exists with the expected field values. The file parses. The invoice total matches the sum of lines. A deterministic completion predicate is cheap, never drifts and cannot be talked out of its answer, and where one exists the model\'s opinion about completion is at best a hint. Where no such predicate exists, degrade in order: a cheap validator over the produced artefact, then a separate model call with a specific rubric rather than the working model\'s self-assessment, then a human. The asymmetry worth internalising is that the model that did the work is the worst available judge of whether the work is finished, because it is grading its own understanding of the goal.',
          bullets: [
            'Prefer a deterministic completion predicate wherever one can be written',
            'Degrade in order: validator, separate judged check, human — never self-assessment first',
            'The working model is the weakest judge of its own completion',
            'Checkable definitions of done should shape how you scope agent tasks in the first place',
          ],
        },
        {
          heading: 'Premature Stop Deserves Equal Attention',
          body: 'Runaway loops get the attention because they cost money visibly, but stopping too early is more common and much quieter. An agent asked to fix a failing build fixes the first error and reports success. An agent asked to reconcile a list processes the first page. The output looks plausible, the run is cheap, nothing alerts. Two habits catch most of it. Require evidence in the terminal call — which items were processed, which checks were run, what the final verification returned — so an empty success becomes structurally visible rather than rhetorically hidden. And measure work done per run alongside success rate: a sudden drop in steps or tool calls per successful run, with success rate flat, usually means the agent has learned to declare victory sooner rather than to work more efficiently.',
          bullets: [
            'Premature stop is quieter than runaway looping and at least as common',
            'Require evidence fields in the terminal call so empty success is visible',
            'Watch steps and tool calls per success — a sudden drop is rarely efficiency',
            'A cheap run with a plausible report is the failure that survives review longest',
          ],
        },
      ],
    },
    {
      id: 'ag1l3',
      title: 'Budgets and Cost Ceilings',
      diagram: 'AgentBudgets',
      slides: [
        {
          heading: 'Four Budgets, Not One',
          body: 'A step limit alone is insufficient, because the four things that can run away are only loosely correlated. Steps bound how many decisions the agent makes. Tokens bound context growth, and they grow superlinearly in a naive loop because every step re-sends everything before it. Wall-clock bounds how long a caller or a queue waits, and it is the one that matters for anything user-facing or anything holding a lock. Spend bounds the actual liability, and it is the only one denominated in the unit your finance team recognises. A run can sit comfortably inside a twenty-step limit and still consume a startling amount of money if each step carries an enormous context, or block a queue for an hour on a slow external tool. Track and enforce all four, per run, and treat any of them tripping as a distinct outcome.',
          bullets: [
            'Steps, tokens, wall-clock and spend fail independently — bound each of them',
            'Token growth is superlinear in a naive loop: every step re-sends the history',
            'Wall-clock is the budget that matters for queues, locks and waiting callers',
            'Record which budget tripped; the four have completely different fixes',
          ],
        },
        {
          heading: 'Enforce Before the Call, in the Runtime',
          body: 'Check budgets at the top of each iteration and before dispatching each tool call, not after the fact. Telling the model it has a limited number of steps in the system prompt is useful context and worthless enforcement — it will sometimes ration itself and sometimes not, and you cannot tell which. Budget state belongs in the run object, decremented by the runtime, and any subagent inherits from the parent\'s remaining allowance rather than receiving a fresh one, otherwise a delegating agent multiplies its own ceiling by the number of children it spawns. That specific bug is easy to write and expensive to discover. Per-tool limits are worth adding for anything with an external cost or a rate limit, so one expensive call cannot be issued forty times inside an otherwise reasonable run.',
          bullets: [
            'Check at the top of the iteration and before each dispatch, never afterwards',
            'A budget mentioned in the prompt is context, not a control',
            'Subagents draw from the parent allowance — fresh budgets multiply the ceiling',
            'Add per-tool caps for anything externally expensive or rate limited',
          ],
        },
        {
          heading: 'What Happens at the Ceiling',
          body: 'Hitting a limit is a designed outcome and should behave like one. The run should checkpoint its state, produce whatever partial result it legitimately has, record which budget tripped and at which step, and return a status the caller can act on rather than a generic failure. Silently truncating the context to keep going is the worst available option, because it converts a clean, attributable stop into an agent that continues with amnesia and produces confidently wrong work. Two refinements pay for themselves. Warn the model before the ceiling rather than at it — a step or two of notice lets it wrap up and write a useful handover instead of being cut mid-action. And make the resulting state resumable, so a human deciding the task deserves more budget can extend it rather than starting over.',
          bullets: [
            'Checkpoint, return partial work, and report which budget tripped and where',
            'Silent truncation turns a clean stop into an agent working from amnesia',
            'Warn a step before the ceiling so the agent can write a handover',
            'Make the stopped state resumable — budget extension should not mean re-running',
          ],
        },
        {
          heading: 'Setting the Numbers Honestly',
          body: 'Ceilings should come from the value and the tolerance of the task, not from whatever felt safe during development. Work out what a successful run is worth, decide what multiple of the median cost you are willing to pay before you would rather have a human look at it, and set the ceiling there. Then look at the distribution rather than the mean, because agent cost distributions have long tails and the tail is where both the money and the diagnostic value sit: runs at the ninety-fifth percentile of steps are usually confused rather than thorough, and reading a handful of them will tell you more about your tool descriptions than any aggregate metric. Expect to tighten ceilings over time as tools improve, and treat a rising median as a regression that needs an explanation even when the success rate is holding.',
          bullets: [
            'Derive the ceiling from task value and the point where a human is cheaper',
            'Read the tail — high-step runs are confused far more often than they are thorough',
            'A rising median cost per success is a regression even at flat success rate',
            'Ceilings should tighten as tools and prompts improve, not drift upward',
          ],
        },
      ],
    },
    {
      id: 'ag1l4',
      title: 'Detecting a Stuck or Looping Agent',
      diagram: 'StuckAgentDetection',
      slides: [
        {
          heading: 'Stuck Looks Exactly Like Working',
          body: 'A stuck agent emits fluent reasoning, calls plausible tools and produces steady log volume. From the outside it is indistinguishable from progress until the budget runs out, which is why detection has to be structural rather than impressionistic. Three shapes cover most of it. Repetition: the same tool with materially the same arguments, over and over, usually because the result is not what the model expected and it assumes it made a formatting mistake. Oscillation: two states alternating, classically edit and revert, where each action undoes the last. And drift without progress: varied, sensible-looking activity that never changes the state you actually care about. Each has a cheap mechanical signature, and none of them require judging the reasoning text.',
          bullets: [
            'Fluent reasoning and steady tool calls are not evidence of progress',
            'Repetition: same tool, same arguments, repeated against an unexpected result',
            'Oscillation: alternating actions that undo each other, often edit and revert',
            'Drift: plenty of activity, no change in the state that defines the goal',
          ],
        },
        {
          heading: 'Signals You Can Compute',
          body: 'Fingerprint each action as the tool name plus a normalised form of its arguments, and keep the recent fingerprints in run state. Repeats of the same fingerprint within a short window are the primary signal, and a threshold of two or three is usually right — an agent that reads the same file three times in five steps has stopped learning from the result. Detect cycles by looking for a repeated sequence rather than a repeated single action, which catches the alternating case that per-action counting misses. Add a low-cost content signal: if the model\'s reasoning text is near-identical to a recent step, it is regenerating rather than reconsidering. All of this is arithmetic on the trace you already keep, and it runs in the loop rather than in a dashboard, because the point is to intervene during the run.',
          bullets: [
            'Fingerprint = tool name plus normalised arguments; keep a recent window in state',
            'Two or three identical fingerprints in a short window is a reliable trigger',
            'Look for repeated sequences, not just repeated actions, to catch oscillation',
            'Near-identical reasoning text between steps means regeneration, not rethinking',
          ],
        },
        {
          heading: 'Progress Predicates',
          body: 'The stronger check is task-specific and asks a blunt question at intervals: has the state that defines success changed since the last checkpoint? For a code task, does the diff differ. For a data task, has the count of processed records moved. For a research task, has the set of distinct sources grown. If the answer is no across several consecutive checkpoints, the agent is not working regardless of how much it is doing. This is more work to implement than fingerprinting because it requires you to name what progress means for each task type, and that is precisely why it is valuable: teams that cannot state their progress predicate usually cannot state their completion predicate either, and the two questions are the same question asked at different frequencies.',
          bullets: [
            'Ask at intervals whether the state defining success has actually changed',
            'Diff changed, records processed, distinct sources found — pick a concrete measure',
            'Several checkpoints without movement means stuck, however busy the agent looks',
            'If you cannot name a progress predicate, you probably cannot name completion either',
          ],
        },
        {
          heading: 'Intervening Without Making It Worse',
          body: 'Detection is only useful if the response is different from what the agent was already doing. Escalating interventions work well. First, inject an explicit observation into the context — you have called this tool with these arguments three times and received the same result, so treat that result as correct and choose a different approach — because models respond well to being told about a loop they cannot see, given that the repetition is spread across a context they are attending to unevenly. Second, constrain the toolset for the next step so the repeated action is unavailable. Third, terminate and escalate with the state attached. What does not work is retrying identically, adding a generic instruction to try harder, or raising the budget, all of which buy more of the same behaviour at a higher price.',
          bullets: [
            'Escalate: name the loop in context, then restrict tools, then stop and escalate',
            'Models respond well to being told about a repetition they cannot perceive',
            'Removing the repeated tool for one step forces a genuinely different path',
            'Raising the budget for a looping agent buys more looping, not a result',
          ],
        },
      ],
    },
    {
      id: 'ag1l5',
      title: 'When a Script Beats an Agent',
      diagram: 'ScriptVsAgent',
      slides: [
        {
          heading: 'Put the Model Where the Variance Is',
          body: 'The useful decomposition is not whether the task needs an agent but which parts of it are genuinely uncertain. Take any candidate workflow and mark each part as fixed or variable. Fetch the ticket, parse the payload, look up the account, apply the rule, write the record and send the notification are fixed — the steps are known, the order is known, and a model choosing them adds latency, cost and variance while removing your ability to test them. Decide which category this complaint falls into, extract the obligations from this contract, or judge whether this log excerpt indicates the same fault are variable, and a model is genuinely better than the alternatives. The resulting system is a deterministic pipeline with model-shaped holes in it. That is the shape most successful production systems converge on, and it is not usually called an agent.',
          bullets: [
            'Mark each part of the workflow as fixed or variable before choosing an architecture',
            'Fixed steps in a model loop cost latency, money and testability for nothing',
            'Classification, extraction and judgement are where a model genuinely wins',
            'The common end state is a deterministic pipeline with model-shaped holes',
          ],
        },
        {
          heading: 'What the Loop Actually Buys',
          body: 'An agent loop earns its cost in exactly one situation: when the next action genuinely depends on the result of the previous one in a way you cannot enumerate in advance. Debugging an unfamiliar failure, researching across sources you cannot predict, or operating in an environment whose state you can only discover by looking are real instances of this. Note what is not on that list. Handling many cases is not it, if the cases are known — that is a branch. Needing several tools is not it — that is a function that calls several tools. Being unsure how to write the logic is not it either, that is a design problem the agent will inherit rather than solve. The test worth applying: could you draw the flowchart if you had a week? If yes, spend the week, because the flowchart will be cheaper, faster and testable forever after.',
          bullets: [
            'The loop pays off only when the next action truly depends on the last result',
            'Many known cases is a branch; several tools is a function call',
            'An unclear specification is not an agent use case — the agent inherits the confusion',
            'If a week of thought would produce the flowchart, the flowchart wins permanently',
          ],
        },
        {
          heading: 'Migrating an Agent Back Into Code',
          body: 'The most under-used pattern in this field is treating an agent as a discovery mechanism rather than a destination. Ship an agent to learn what the task actually involves, trace every run, then cluster the trajectories. The dominant paths — and there are usually two or three covering the great majority of traffic — become explicit code, and the agent remains as the fallback for the residual cases that do not match. This is strictly better than either extreme: you get the coverage of an agent while paying agent economics only on the genuinely hard tail, and each hardened path becomes something you can test deterministically and improve without evaluating a whole trajectory. It also converts an uncomfortable conversation about reliability into a graph that goes in the right direction over time.',
          bullets: [
            'Use the agent to discover the workflow, then harden the dominant paths into code',
            'Two or three trajectories usually cover most traffic — those are your functions',
            'Keep the agent as the fallback for the residual tail, and pay agent cost only there',
            'Each hardened path becomes deterministically testable and independently improvable',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Not every AI feature should be an agent that decides its own steps. When the steps of a job are already known, ordinary software doing them with AI used for the judgement calls is faster, cheaper and more predictable.',
          bullets: [
            'Ask of any agentic product what it does that a fixed sequence of steps could not',
            'Predictable tasks handled by predictable software is a sign of maturity, not timidity',
            'The interesting question is where the genuine uncertainty in the task lives',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Every step of model-directed control flow is surface you have to reason about. Where a workflow can do the job, the risk conversation gets dramatically simpler, and pointing that out is usually more persuasive than any control you could add on top.',
          bullets: [
            'Ask which parts of the flow the model decides and which are fixed in code',
            'Fixed steps are auditable by reading them; model-chosen steps need runtime evidence',
            'Recommending a workflow with one gate over an agent builds more credibility than agent maximalism',
            'A team that can name its termination and progress predicates has thought about failure',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Start with the pipeline and add the loop only where you can point at the dependency that forces it. If you already have an agent, mine the traces: the top few trajectories are the functions you should be writing this sprint.',
          bullets: [
            'Mark every step fixed or variable before writing the architecture, not after',
            'Enforce termination, budgets and stuck-detection in the runtime from day one',
            'Cluster production trajectories and promote the dominant paths into plain code',
            'Keep the agent as the fallback for the tail rather than the front door for everything',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients arrive wanting agents and usually need three model calls inside an existing process. The value you add early is the decomposition into fixed and variable parts, which reframes the project into something that can actually ship.',
          bullets: [
            'Run the fixed-versus-variable decomposition in the first workshop, on a real process',
            'Price the loop honestly: variance, latency and cost are the trade for flexibility',
            'Propose the discovery-then-harden path so the system gets cheaper over the engagement',
            'Insist that termination and budget ceilings appear in acceptance criteria',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Under the working definition of a step, how should a single model response containing four parallel tool calls be counted?', options: ['As four steps, because four tools executed', 'As one step — one model call plus the tool executions it requested and the resulting observations', 'As zero steps until the tools return', 'It depends on whether the tools succeeded'], correct: 1 },
    { q: 'Why is a termination condition expressed only in the system prompt considered a defect?', options: ['Prompts cannot describe stopping conditions', 'It consumes tokens that could be used for tool definitions', 'It puts a control-flow decision inside a probabilistic system, so the run may stop early, never stop, or loop re-verifying', 'It prevents the model from calling tools'], correct: 2 },
    { q: 'What is the main advantage of ending a run with an explicit terminal tool call rather than detecting finality in prose?', options: ['It reduces the cost of the final model call', 'It guarantees the task was completed correctly', 'It allows the model to skip verification', 'Completion carries a structured artefact, success is distinguishable from giving up, and the end of the run is a discrete loggable event'], correct: 3 },
    { q: 'An agent has a twenty-step ceiling and stays within it, yet a run costs far more than expected. What is the most likely cause?', options: ['Each step carries a large and growing context that is re-sent on every model call', 'The step counter is broken', 'The model was sampled at too high a temperature', 'Tool executions are billed separately from steps'], correct: 0 },
    { q: 'A parent agent has a remaining budget of ten steps and spawns three subagents. What is the correct budgeting behaviour?', options: ['Each subagent receives a fresh ten-step budget', 'Subagents are exempt from step budgets', 'Subagents draw from the parent\'s remaining allowance, otherwise delegation multiplies the effective ceiling', 'The parent budget is suspended while subagents run'], correct: 2 },
    { q: 'Which failure is described as quieter than a runaway loop and at least as common?', options: ['Context exhaustion mid-run', 'Premature stop — declaring success on partial work, producing a cheap run and a plausible report', 'Rate limiting from an external tool', 'A schema validation error on a tool argument'], correct: 1 },
    { q: 'A stuck-agent detector fires after three identical tool fingerprints. Which response is least likely to help?', options: ['Injecting an observation naming the repetition and instructing a different approach', 'Removing the repeated tool from the available set for the next step', 'Terminating and escalating with the run state attached', 'Raising the step budget so the agent has more room to resolve it'], correct: 3 },
    { q: 'What is the argument for shipping an agent first and then migrating parts of it into deterministic code?', options: ['Deterministic code is always cheaper to write than prompts', 'It removes the need for tracing once the paths are known', 'Traces reveal the two or three dominant trajectories, which become testable code while the agent remains as the fallback for the hard tail', 'Agents cannot be evaluated until they are replaced'], correct: 2 },
  ],
};

export default agM1;
