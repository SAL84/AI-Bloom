import type { CourseModule } from '../../types/course';

const agM3: CourseModule = {
  id: 'ag-m3',
  title: 'The Harness',
  icon: 'layers',
  summary: 'Everything around the model that determines whether it can work: tools designed as APIs for a reader who cannot ask questions, descriptions and schemas that steer selection, return values that enable recovery, retry and idempotency for actions with side effects, verification built into the loop, and delegation that adds capability rather than failure modes.',
  lessons: [
    {
      id: 'ag3l1',
      title: 'Tool Design Is API Design',
      sectionLabel: 'Tools',
      diagram: 'ToolApiDesign',
      slides: [
        {
          heading: 'Your Consumer Cannot Ask Questions',
          body: 'A tool is an API whose only consumer is a model that reads the documentation once, cannot experiment safely, cannot read the implementation, and will not come back to ask what an ambiguous parameter means. It will guess, confidently and consistently in the wrong direction if the naming invites it. That constraint changes the design rules in specific ways. Ambiguity that a human integrator would resolve in thirty seconds becomes a persistent failure mode. Consistency across the toolset matters more than the elegance of any individual tool, because the model generalises from one tool to the next. And the cost of a bad tool is paid on every run forever, which makes tool design one of the highest-leverage pieces of work in the whole system and one of the most consistently under-invested.',
          bullets: [
            'The consumer reads once, cannot experiment, and will never ask for clarification',
            'Ambiguity a human integrator resolves in seconds becomes a permanent failure mode',
            'Consistency across the toolset beats elegance in any single tool',
            'A bad tool costs on every run, which is why this work repays disproportionately',
          ],
        },
        {
          heading: 'Granularity: Match the Unit of Intent',
          body: 'The two failure directions are equally common. Tools that are too fine force the model to compose long sequences of primitives, and each composition step is another opportunity to go wrong — an agent that must call six tools to update a record will eventually call five. Tools that are too coarse take a free-text instruction and do something under-determined inside, which moves the ambiguity out of your sight and into an implementation that has to interpret prose. The useful target is the unit of intent: one tool per thing a user would name as a task. Update the delivery address. Refund the order. Find open tickets for this account. Where a sequence is always performed together, make it one tool, since the model does not benefit from being trusted with the ordering of steps that never vary.',
          bullets: [
            'Too fine: long compositions, and each step is a fresh chance to err',
            'Too coarse: a free-text instruction that pushes ambiguity into your implementation',
            'Aim at the unit of intent — one tool per task a user would name',
            'A sequence that never varies should be one tool, not a plan the model reassembles',
          ],
        },
        {
          heading: 'Keep the Surface Small and Distinct',
          body: 'Selection accuracy falls as the toolset grows, and it falls fastest when tools overlap. Two tools that could both plausibly answer a query force a discrimination the model has no basis for making, and it will not make it consistently. Prefer one tool with an enumerated mode over three near-siblings. Name for the outcome rather than the implementation, since the model is choosing by what it wants to achieve and not by which internal service you happen to own. Use one vocabulary across the whole set, because a toolset that says customer in one place and account in another creates argument errors that look like reasoning failures. And where you integrate a standard tool surface such as MCP, remember that adopting a server means adopting its whole tool list into your context and its naming conventions into your namespace.',
          bullets: [
            'Overlapping tools are worse than missing ones — the discrimination has no basis',
            'One tool with an enumerated mode beats three near-siblings',
            'Name for outcome, not implementation, and use one vocabulary throughout',
            'Adopting a standard server adopts its whole tool list and naming into your context',
          ],
        },
      ],
    },
    {
      id: 'ag3l2',
      title: 'Descriptions and Schemas the Model Actually Reads',
      diagram: 'ToolSchemas',
      slides: [
        {
          heading: 'A Badly Described Tool Is Worse Than No Tool',
          body: 'This is worth stating plainly because it inverts the usual instinct to add capability. A tool the agent does not have produces a clean failure: it cannot do the thing, says so, and you learn something. A tool with a vague or subtly wrong description produces confident misuse — called in the wrong situations, called with plausible but incorrect arguments, and trusted because it returned something. The resulting failures present as reasoning problems and get investigated as reasoning problems, which is why they survive for months. Before adding a tool, ask whether you can describe it precisely enough that a competent new engineer with no access to the codebase would use it correctly every time. If not, either fix the description or do not ship the tool, because the version you are about to ship will produce work you cannot trust.',
          bullets: [
            'A missing tool fails cleanly; a misdescribed tool fails confidently',
            'Misuse from bad descriptions presents as reasoning failure and gets misdiagnosed for months',
            'The bar: a competent engineer with no code access would use it right every time',
            'Failing that bar, fix the description or do not ship the tool',
          ],
        },
        {
          heading: 'Write the Description for Selection, Then for Use',
          body: 'A description does two jobs and most only do the second. First it has to help the model decide whether this tool is the right one right now, which means it must state when to use this and, more valuably, when not to — including which sibling tool to prefer in the adjacent case. Then it has to support correct invocation: what the tool does to the world, what it returns, what it costs or how long it takes if that should influence choice, and any precondition that must hold. Include a short example call for anything with non-obvious argument shapes. Write it in plain declarative prose rather than terse notation, because it is read as language. And when you observe a systematic misuse in production, the description is the first place to fix it, ahead of the system prompt.',
          bullets: [
            'State when to use it and when not to, naming the sibling to prefer instead',
            'Cover effect on the world, return shape, cost or latency if it should affect choice, preconditions',
            'Include an example call wherever argument shapes are not obvious',
            'Fix systematic misuse in the tool description before touching the system prompt',
          ],
        },
        {
          heading: 'Schemas That Prevent the Argument Error',
          body: 'The second most common agent failure after choosing the wrong tool is choosing the right tool with wrong arguments, and the schema is where most of that is prevented. Enumerate wherever a value comes from a fixed set, because a free string invites invention. Describe every field, including the ones that look self-explanatory, since date and amount and id are exactly the fields that get filled with a plausible wrong format. Be explicit about formats and units in the field description rather than assuming a convention. Mark required fields as required rather than defaulting silently, so an omission fails loudly at the boundary instead of proceeding with an assumption. And validate before executing, returning a specific correctable error — the field expects one of these values and received that one — which the model can act on in a single step.',
          bullets: [
            'Enumerate fixed sets; free strings invite invented values',
            'Describe every field, especially dates, amounts and identifiers',
            'State formats and units explicitly rather than relying on convention',
            'Validate before execution and return a specific, correctable message',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'An AI agent picks its actions from a list of described capabilities, and the quality of those descriptions largely determines whether it picks the right one. Many apparent reasoning mistakes are really the system having described its own tools badly.',
          bullets: [
            'Agents choose actions from descriptions written by engineers, not from understanding your systems',
            'Adding more capabilities to an assistant can make it less accurate, not more',
            'A confidently wrong action is often a wrongly described tool rather than a confused model',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Tool descriptions are context the model treats as authoritative, which makes them both a quality surface and a supply-chain surface when they come from third-party servers. The engineering question and the security question converge on the same artefact.',
          bullets: [
            'Ask to see the tool descriptions as sent — they are prompt content, not documentation',
            'Third-party tool lists arrive with descriptions your team did not write or review',
            'Enumerated arguments and validated identifiers narrow both misuse and abuse',
            'A registry of every registered tool with an owner is a reasonable thing to expect',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Treat descriptions and schemas as production code: reviewed, versioned, and changed deliberately. When you see systematic misuse in traces, the fix is almost always in the tool definition, not in the system prompt where teams instinctively reach first.',
          bullets: [
            'Every field described, fixed sets enumerated, formats and units stated',
            'Say when not to use the tool and which sibling to prefer instead',
            'Validate arguments before execution and return specific correctable errors',
            'Track per-tool selection and argument-error rates; they tell you which description to rewrite',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients reliably attribute agent failures to the model and reach for an upgrade. A structured review of tool descriptions and schemas is cheap, fast, and resolves a large share of those complaints without changing anything expensive.',
          bullets: [
            'Run a tool-definition review before entertaining any model change',
            'Look for overlapping tools first — they cause misselection that reads as poor reasoning',
            'Leave behind a description standard and a review step, since tool lists keep growing',
            'Name an owner for the tool registry before the engagement ends',
          ],
        },
      ],
    },
    {
      id: 'ag3l3',
      title: 'Return Values That Enable Recovery',
      diagram: 'ToolReturnRecovery',
      slides: [
        {
          heading: 'The Return Is the Next Prompt',
          body: 'Whatever a tool returns becomes context, and it is the material the model uses to choose the next action. Designing returns for a human reading a log is the wrong target. Three things belong in almost every return. The outcome, stated explicitly rather than implied by the presence or absence of data, because an empty result and a failed query are different situations that look identical when both render as nothing. The resulting state where the tool changed something, so the model does not have to re-read to find out what happened. And the affordances, meaning what can be done next, particularly identifiers needed for a follow-up call. A return that says the update succeeded and the record now reads as follows saves a verification step on every single call, which compounds across a run.',
          bullets: [
            'The return value is the next prompt — design it for the model, not for a log reader',
            'State the outcome explicitly; empty results and failures render identically otherwise',
            'Include resulting state after a mutation so the model need not re-read',
            'Carry forward the identifiers a follow-up call will need',
          ],
        },
        {
          heading: 'Errors Should Say What to Do',
          body: 'An error message is an instruction to the model, so write it as one. A stack trace or a generic failure produces a retry of the same call, because there is nothing in the message to act on differently. Say what was wrong, specifically, and say what would be valid — this identifier was not found, and identifiers for this resource are eight digits; or this account is closed, so no further transactions can be posted to it. Distinguish three classes clearly, because the correct behaviour differs: retryable transient conditions, which should say so and indicate a wait; correctable input errors, which should state the correction; and terminal conditions, which should say that no retry will help so the agent stops trying and either takes another route or escalates. Most looping in production traces back to error text that failed to communicate which class applied.',
          bullets: [
            'Write errors as instructions: what was wrong and what would be valid',
            'Distinguish transient, correctable and terminal explicitly in the message',
            'Terminal errors must say that retrying will not help, or the agent will retry',
            'A large share of production looping is error text that omits the class',
          ],
        },
        {
          heading: 'Volume, Truncation and Pointers',
          body: 'Tools that can return unbounded output are a standing threat to the context budget, and the failure is abrupt: one query returns ten thousand rows and the run is over. Bound every return at the tool, not downstream. Default to a modest page with the total count stated, so the model knows what it is not seeing and can refine rather than assume it has everything. Where content must be truncated, truncate visibly with a marker and a handle for retrieving the rest, since silent truncation produces an agent reasoning confidently over a fragment it believes is whole. Where a large artefact is genuinely needed, write it somewhere addressable and return the reference, so the content enters context only if a later step actually requires it. The general principle: returns should be summaries with retrieval paths, not payload dumps.',
          bullets: [
            'Bound output at the tool; unbounded returns end runs abruptly',
            'Return a page plus the total count so the model knows what it has not seen',
            'Truncate visibly with a handle for the rest — silent truncation produces confident fragments',
            'Write large artefacts to an addressable location and return a reference',
          ],
        },
      ],
    },
    {
      id: 'ag3l4',
      title: 'Errors, Retries and Side Effects',
      diagram: 'ToolErrorsSideEffects',
      slides: [
        {
          heading: 'Retry Below the Loop, Not Inside It',
          body: 'Transient infrastructure failures — timeouts, rate limits, brief unavailability — should be handled inside the tool implementation with bounded backoff, and never surfaced to the model. Every retry the model performs costs a full step: a model call, the context, and the risk that it responds to a failure by changing approach rather than repeating. Reserve model-visible errors for conditions requiring a decision. There is a caveat worth respecting: retries at both layers compose badly, and an agent that retries a tool which retries internally can produce a surprising number of attempts against a struggling dependency. Decide the retry layer per tool, document it in the description if it affects timing, and cap total attempts per tool per run in the runtime so no combination of layers can exceed it.',
          bullets: [
            'Handle transient failures in the tool with bounded backoff, invisibly to the model',
            'Every model-visible retry costs a whole step and may trigger a strategy change',
            'Surface only errors that genuinely require a decision',
            'Cap total attempts per tool per run so layered retries cannot compound',
          ],
        },
        {
          heading: 'Idempotency Is Not Optional Here',
          body: 'Agents retry, and they retry non-deterministically, which makes at-least-once delivery the honest assumption for any tool with a side effect. That means duplicate sends, duplicate charges, duplicate tickets and duplicate records unless the tool is built to prevent it. The standard mechanism applies: derive a stable idempotency key from the run identifier plus the logical action, have the tool record it, and return the original result on a repeat rather than performing the action again. Make sure the key derives from the intent rather than from the arguments as the model rendered them, since a retry with a reworded free-text field must still be recognised as the same action. Where a downstream system offers no idempotency support, implement the ledger in your tool layer, because leaving this to the model\'s good judgement will fail at some point.',
          bullets: [
            'At-least-once is the honest assumption for any tool with a side effect',
            'Stable key from run identifier plus logical action; return the original result on repeat',
            'Derive keys from intent, not from model-rendered argument text',
            'If the downstream system offers nothing, keep the ledger in your tool layer',
          ],
        },
        {
          heading: 'Partial Effects and the Half-Done Action',
          body: 'The situation that produces the worst incidents is a tool that fails after doing part of its work: the record was created, the notification was not sent, and the error the model receives says the operation failed. The model reasonably retries, and now there are two records. Design against this in the tool. Prefer a single atomic operation where the underlying system allows one. Where it does not, make the tool report exactly what happened rather than a binary failure — created, not notified, here is the identifier — so the next action can complete rather than restart. Where an action genuinely cannot be made atomic or idempotent, make the compensating action available as a tool and say so in the description, because an agent that can undo a partial effect is in a much better position than one whose only option is to try again.',
          bullets: [
            'The worst incidents come from failures after partial completion, reported as total failure',
            'Prefer atomic operations; where impossible, report exactly what did and did not happen',
            'Return identifiers from partial success so the next step completes rather than restarts',
            'Expose compensating actions as tools where neither atomicity nor idempotency is available',
          ],
        },
      ],
    },
    {
      id: 'ag3l5',
      title: 'Verification Inside the Loop',
      diagram: 'LoopVerification',
      slides: [
        {
          heading: 'Build the Check In, Do Not Request It',
          body: 'An instruction to verify your work is weakly followed and impossible to audit. A verification step in the harness runs whether the model remembers or not, and the difference in reliability is large. The pattern that works: after any action that changes state, the runtime performs a cheap deterministic check and appends the result as an observation. Re-read the record and confirm the field. Run the test command. Parse the file. Diff the change. This costs one tool execution and it converts a whole class of silent failure into an observation the agent can respond to in the same run. It also gives you something to assert on later, since a verification result is structured evidence rather than an assertion in prose, which is exactly what the neighbouring practice of evaluation needs to grade a trajectory.',
          bullets: [
            'A harness check runs regardless of what the model remembers to do',
            'After any state change, verify deterministically and append the result as an observation',
            'One extra tool execution converts silent failure into an in-run correction',
            'Verification results are structured evidence that downstream evaluation can assert on',
          ],
        },
        {
          heading: 'Self-Critique Has a Narrow Real Range',
          body: 'Asking the model to review its own output does help for some things and is close to worthless for others, and the boundary is worth knowing. It works reasonably where the check is a different cognitive operation from the generation — checking a written argument against a rubric, spotting an unhandled case in code, noticing that an answer failed to address part of the question. It works poorly where the error and the check share the same misunderstanding, which covers most factual errors and every case where the model misread the goal, because the reviewer is working from the same context that produced the mistake. Two practical consequences: give the critique a specific checklist rather than asking whether this looks right, and where the stakes justify the cost, run the critique in a separate call without the working context so it evaluates the artefact rather than the reasoning that produced it.',
          bullets: [
            'Self-critique helps where checking is a different operation from generating',
            'It fails where the error and the check share the same misunderstanding of the goal',
            'Give a specific checklist; "does this look right" produces agreement',
            'For higher stakes, critique in a fresh call over the artefact alone, without the working context',
          ],
        },
        {
          heading: 'Prefer the Cheap Deterministic Checker',
          body: 'Before reaching for a model to judge, ask what could be checked by code, because deterministic checks are faster, free, never drift and cannot be argued with. A compiler, a linter, a schema validator, a test suite, a checksum, an arithmetic reconciliation, an existence query — each of these answers a question definitively that a judged check answers probabilistically. The ordering that holds up: deterministic check where one exists, then a judged check with an explicit rubric where the property is real but not computable, then a human where the judgement is genuinely irreducible. Teams often skip straight to the middle option because it is the most flexible, and end up paying model tokens for questions a regular expression would have settled. The habit worth building is asking what code could establish here before asking what prompt could establish here.',
          bullets: [
            'Deterministic checks are faster, free, stable and unarguable — use them first',
            'Then a judged check with an explicit rubric, then a human for the irreducible part',
            'Teams default to the judged middle option and pay tokens for regex questions',
            'Ask what code could establish before asking what prompt could establish',
          ],
        },
      ],
    },
    {
      id: 'ag3l6',
      title: 'Sub-Agents and the Cost of Delegation',
      diagram: 'SubAgentDelegation',
      slides: [
        {
          heading: 'Delegation Buys Context, Not Intelligence',
          body: 'A subagent gives you one thing reliably: a separate context window. A worker can read twenty files, run ten searches and burn a large budget, then return three paragraphs, leaving the parent context clean for decisions. That is a real and often decisive benefit, and it is the main honest reason to delegate. Genuine parallelism across independent subtasks is the second. What delegation does not do is make the system smarter — the same model with the same tools is doing the work, now with less shared context and a lossy interface in the middle. Treat every subagent as a component with a defined contract rather than as a colleague, and be suspicious of designs that add agents because the task feels like it has roles. Organisational metaphors are a poor guide to what actually improves a trajectory.',
          bullets: [
            'The reliable benefit is context isolation; parallelism is the second',
            'Delegation does not add capability — same model, less shared context, lossy interface',
            'Treat a subagent as a component with a contract, not as a colleague',
            'Role metaphors are a poor guide to whether delegation improves a trajectory',
          ],
        },
        {
          heading: 'Design the Brief and the Return Contract',
          body: 'Most subagent failures are interface failures, and they come in two shapes. Under-specified briefs: the parent passes a short instruction assuming context the child does not have, and the child does something reasonable for a task it has misunderstood. Unstructured returns: the child sends back prose that the parent must interpret, reintroducing exactly the ambiguity the boundary was supposed to remove. Fix both explicitly. The brief should carry the goal, the relevant constraints, the success criterion and the budget, as data rather than as a sentence. The return should be a schema with fields the parent actually needs, including a status that can express partial completion and failure. And returning a full transcript upward recreates the context bloat you delegated to avoid, which is the most common way this pattern quietly stops paying.',
          bullets: [
            'Under-specified briefs produce work that is reasonable for the wrong task',
            'Pass goal, constraints, success criterion and budget as structured data',
            'Return a schema with an honest status, including partial and failed',
            'Returning transcripts upward recreates the bloat the split was meant to remove',
          ],
        },
        {
          heading: 'The Failure Modes Delegation Adds',
          body: 'Be clear-eyed about what you take on. Errors compound: a child that returns a confident wrong answer is trusted by a parent that has no way to check it, and the trace of why is now two levels deep. Budgets multiply unless children draw from the parent allowance. Latency is bounded by the slowest child in a parallel fan-out, so one confused worker holds the whole run. Parallel children writing to the same resource conflict in ways single-agent designs never encounter, and the conflict surfaces as a state inconsistency rather than as an error. And debugging is genuinely harder: an incorrect final answer now has several candidate origins, and reconstructing which requires traces that nest properly. None of this argues against delegation. It argues for using it where context isolation earns it, and for a hierarchy with one accountable parent rather than a mesh of peers.',
          bullets: [
            'Confident wrong returns are trusted by a parent that cannot verify them',
            'Fan-out latency is set by the slowest child; parallel writes create conflicts',
            'Failure attribution needs properly nested traces or it becomes archaeology',
            'Use it where context isolation pays, and keep one accountable parent',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why is a tool with a vague description described as worse than not having the tool at all?', options: ['It consumes more tokens than an accurate description', 'It produces confident misuse that presents as a reasoning failure and gets misdiagnosed, whereas a missing tool fails cleanly', 'It cannot be validated against a schema', 'It prevents prompt caching'], correct: 1 },
    { q: 'Two registered tools could each plausibly serve the same request. What is the likely consequence?', options: ['The model calls both and reconciles the results', 'Selection improves because the model has options', 'Inconsistent selection, because the discrimination has no basis the model can apply reliably', 'The runtime picks the cheaper tool automatically'], correct: 2 },
    { q: 'A tool returns an empty result set and, on failure, returns nothing. What problem does this create?', options: ['Success and failure are indistinguishable in context, so the model cannot tell "nothing matched" from "the query failed"', 'The context window overflows', 'The tool cannot be cached', 'Arguments can no longer be validated'], correct: 0 },
    { q: 'Which property should a terminal error message make explicit?', options: ['The internal stack trace', 'The name of the service that failed', 'The latency of the failed call', 'That retrying will not help, so the agent stops retrying and takes another route or escalates'], correct: 3 },
    { q: 'Why must tools with side effects be idempotent in an agent system?', options: ['Because models cannot call the same tool twice', 'Because agents retry non-deterministically, so at-least-once execution is the honest assumption and duplicates follow otherwise', 'Because idempotency reduces token cost', 'Because approval gates require it'], correct: 1 },
    { q: 'A tool creates a record, fails to send the notification, and reports a generic failure. What is the characteristic outcome?', options: ['The run terminates safely with no side effects', 'The model correctly infers the partial state', 'The model retries and a duplicate record is created, because the report gave no way to distinguish partial from total failure', 'The runtime rolls the action back automatically'], correct: 2 },
    { q: 'Where is model self-critique least effective?', options: ['Checking written output against an explicit rubric', 'Spotting an unhandled case in generated code', 'Noticing that part of a question went unanswered', 'Catching errors where the check shares the same misunderstanding of the goal that produced the error'], correct: 3 },
    { q: 'What does adding a subagent reliably provide?', options: ['A separate context window, so heavy exploration can happen without polluting the parent context', 'Higher reasoning quality on the same task', 'Lower total token cost per run', 'Deterministic behaviour on the delegated subtask'], correct: 0 },
  ],
};

export default agM3;
