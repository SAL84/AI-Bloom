import type { CourseModule } from '../../types/course';

const agM5: CourseModule = {
  id: 'ag-m5',
  title: 'Keeping Humans In It',
  icon: 'shield-alert',
  summary: 'Oversight as a designed part of the system: gates people engage with rather than clear, escalation as a first-class outcome, presenting a run so a human can actually judge it, widening autonomy along an evidence-backed trust curve, the honest limits of review at volume, and writing down what the agent is not allowed to do.',
  lessons: [
    {
      id: 'ag5l1',
      title: 'Designing a Gate Someone Actually Uses',
      sectionLabel: 'Oversight',
      diagram: 'ApprovalGateDesign',
      slides: [
        {
          heading: 'A Gate Is an Interruption You Are Asking Someone to Absorb',
          body: 'The security case for gating irreversible actions is well established and is treated properly as its own discipline. The engineering problem that remains is that a gate is an interruption into somebody\'s working day, and interruptions are absorbed by whatever mechanism costs the person least — which, for a stream of approvals that have almost always been fine, is approving without reading. That is not a training failure. It is the predictable behaviour of a reasonable person facing a queue with a low base rate of problems, and any design that depends on sustained vigilance against a low base rate is depending on something people do not do. Design for the person who is busy, has seen forty of these this week, and is being asked for one more. Everything else in this lesson follows from taking that seriously rather than treating it as a discipline problem.',
          bullets: [
            'Approval fatigue is rational behaviour under a low base rate, not carelessness',
            'A design that depends on sustained vigilance depends on something people do not do',
            'The consequential question is what the person does on the fortieth request, not the first',
            'Security places the gate; this is about whether the placement produces a real decision',
          ],
        },
        {
          heading: 'Volume, Timing and the Shape of the Queue',
          body: 'Three engineering levers change engagement more than any wording. Volume: every gate you remove makes the remaining ones more likely to be read, so the gate list should be short by design and reviewed as a set rather than grown one incident at a time. Timing: a synchronous gate mid-run holds a process and pressures the approver toward speed, whereas an asynchronous gate — the run checkpoints and resumes when a decision arrives — removes the time pressure entirely and is worth the state-management work it requires. Grouping: batching related approvals into one decision with shared context is better than five separate notifications, provided the batch is genuinely one decision and not five smuggled into a single click. Measure decision latency and approval rate per gate; a gate approved almost always, in a couple of seconds, is a gate that is not functioning whatever the policy says.',
          bullets: [
            'Fewer gates makes the remaining ones more likely to be genuinely read',
            'Asynchronous gates with a checkpointed run remove the time pressure to approve fast',
            'Batch related decisions, but only where it is honestly one decision',
            'Track approval rate and decision latency per gate as engagement metrics',
          ],
        },
        {
          heading: 'Defaults, Expiry and the Cost of Saying No',
          body: 'What happens when nobody responds is a design decision that reveals whether the gate is real. Timing out into proceeding converts the gate into a delay, and this happens more often than anyone admits because a blocked queue is visible and a skipped approval is not. The correct default is to abandon or hold, with the state preserved so the decision can still be made later. Equally important and usually neglected: make rejection cheap and useful. If declining means the run dies and the requester starts over, approvers feel the cost of saying no and will say yes more often. Offer decline with a reason that returns to the agent as an observation, and offer modify-and-approve where the action has parameters, so the common case of nearly right does not force a binary between accepting something wrong and discarding the work.',
          bullets: [
            'Timing out into proceed turns the gate into a delay; default to abandon or hold',
            'Preserve state on timeout so the decision remains available later',
            'Make rejection cheap — if no is expensive, approvers will say yes',
            'Offer decline-with-reason and modify-then-approve for the nearly-right case',
          ],
        },
      ],
    },
    {
      id: 'ag5l2',
      title: 'Escalation as a First-Class Outcome',
      diagram: 'EscalationOutcome',
      slides: [
        {
          heading: 'Asking for Help Should Be an Available Action',
          body: 'An agent with no way to stop and ask will improvise, because continuing is the only action available to it. Give it an escalation tool with a schema — what it was trying to do, what it has established, what is blocking it, what it would do next if told to proceed, and what it needs from a person — and it becomes a legitimate outcome rather than a failure. This changes behaviour measurably in the right direction, but only if escalation is treated as success in your metrics. If the dashboard counts escalations against the agent, the pressure runs the wrong way, and both the prompt authors and the model will find ways to avoid them. Count escalation separately from failure, and watch the ratio: a rate of zero usually means the escape hatch is not reachable rather than that nothing has ever been ambiguous.',
          bullets: [
            'Without an escalation action, improvising is the only thing the agent can do',
            'Give it a schema: goal, findings, blocker, proposed next action, what is needed',
            'Count escalation separately from failure or the incentive pushes against using it',
            'An escalation rate of zero usually means unreachable, not unnecessary',
          ],
        },
        {
          heading: 'Where the Trigger Belongs',
          body: 'Escalation triggers should mostly live in the runtime rather than in the model\'s self-assessment, because a model asked to notice its own uncertainty is not a reliable instrument. The dependable triggers are structural: a precondition is missing, a required record does not exist, the action falls outside the permitted scope, a value exceeds a threshold, the stuck-detector fired, a budget is close to exhaustion, or a verification step failed twice. Model-initiated escalation is a valuable addition on top of these, particularly for genuine ambiguity in the request that no rule could anticipate — the instruction has two readings and they lead to different actions is exactly the case worth surfacing. Treat the runtime triggers as the floor and the model as an extra sensor, rather than relying on the model to know when it is out of its depth.',
          bullets: [
            'Structural triggers first: missing preconditions, scope, thresholds, stuck-detection, budget',
            'A model assessing its own uncertainty is a weak instrument to rely on',
            'Model-initiated escalation is genuinely valuable for ambiguity in the request itself',
            'Runtime triggers are the floor; the model is an additional sensor on top',
          ],
        },
        {
          heading: 'The Handover Determines Whether It Helps',
          body: 'An escalation that arrives as a notification saying the agent needs help has moved the work to a human without moving any of the context, and the person now has to reconstruct a run from a trace. Design the handover as a deliverable: the goal in the user\'s original words, what has been done so far and what state that leaves things in, the specific question, the options the agent sees with what it would choose and why, and a link to the full trace for anyone who wants it. Then make the response path direct — answering the question resumes the run from its checkpoint, rather than requiring someone to start a new one. Route by the decision required rather than to a general queue, and set an expectation for how long an escalation waits before it is abandoned, because a run parked indefinitely is a resource leak and a stale request nobody will answer.',
          bullets: [
            'A bare notification transfers the work without transferring the context',
            'Hand over goal, progress, the specific question, the options, and the trace link',
            'Answering should resume the checkpointed run, not require a fresh one',
            'Route by decision type and set an expiry, or parked runs accumulate silently',
          ],
        },
      ],
    },
    {
      id: 'ag5l3',
      title: 'Presenting a Run So a Human Can Judge It',
      diagram: 'RunPresentation',
      slides: [
        {
          heading: 'The Explanation Is Model Output',
          body: 'When an agent explains why it did something, that explanation is generated text describing a process the model does not have privileged access to. It is often accurate, it is sometimes a plausible reconstruction, and there is no reliable way to tell which from the text alone. This matters because a fluent rationale is persuasive out of proportion to its evidential value, and a reviewer reading a well-written justification is being convinced by prose quality rather than by evidence. The design response is not to hide the explanation, which is genuinely useful, but to place it alongside the record of what actually happened and never in place of it. Where the two disagree — the summary says the record was checked and no read appears in the trace — the trace is the fact. Show the summary as an aid to comprehension, and the artefacts as the basis for the decision.',
          bullets: [
            'A generated rationale can be an accurate account or a plausible reconstruction',
            'Fluency is persuasive out of proportion to evidential value',
            'Place the explanation beside the record of what happened, never instead of it',
            'Where narrative and trace disagree, the trace is the fact',
          ],
        },
        {
          heading: 'Show Artefacts and Deltas, Not Narrative',
          body: 'What a reviewer can actually judge is concrete: the diff of what will change, the exact parameters of the pending action, the specific source passages the conclusion rests on with a path back to them, and the verification results with what was checked and what it returned. These are things a person can check quickly against their own knowledge, which is the only kind of review that survives at any volume. Narrative summaries invite a different mode — reading for plausibility — which is exactly the mode that misses the wrong account number sitting inside a paragraph that reads perfectly. Where the change is large, show its shape before its detail: how many records, of what type, in which systems, with the outliers surfaced first. Reviewers are far better at spotting a thing that does not belong than at confirming that a hundred things all do.',
          bullets: [
            'Diffs, exact parameters, cited sources with paths back, verification results',
            'Narrative invites reading for plausibility, which is how a wrong value gets through',
            'For large changes show shape before detail, and surface outliers first',
            'People spot the thing that does not belong far better than they confirm a hundred that do',
          ],
        },
        {
          heading: 'Make Provenance Visible',
          body: 'The most useful single addition to a review surface is where this came from. A proposed action derived from a record in your own system and one derived from a sentence in an inbound email are different propositions, and the reviewer cannot distinguish them unless the interface does. Tag the material that drove the decision with its origin, and mark external or untrusted origins distinctly. This overlaps with the security treatment of the same problem and is worth doing on comprehension grounds alone: reviewers make better decisions when they can see what the agent was reading. The same applies to memory — an action taken because of a stored preference should show the preference and when it was recorded, since stale memory produces confident actions that make sense only against a fact that stopped being true months ago.',
          bullets: [
            'Show where the driving material came from and mark external origins distinctly',
            'An action derived from an inbound email is a different proposition from one derived from your records',
            'Surface which stored memories influenced the decision, and when they were written',
            'Provenance improves ordinary review quality, not only adversarial detection',
          ],
        },
      ],
    },
    {
      id: 'ag5l4',
      title: 'The Trust Curve',
      diagram: 'TrustCurve',
      slides: [
        {
          heading: 'Autonomy Is Widened, Not Chosen',
          body: 'The right level of autonomy is not knowable in advance, so treat it as a variable that starts narrow and widens on evidence. A workable progression: the agent proposes and a human executes; then the agent executes with approval on every consequential action; then approval on a defined subset while the rest run free with sampled review; then autonomous operation within limits with review by exception. Each stage produces the evidence needed to justify the next, which is the real reason to run them in order rather than a ceremonial one. Two things make this work in practice. Widen by action type rather than by agent, since an agent can be fully trusted to draft and not at all trusted to send. And write down what would have to be true to move to the next stage before you get there, because the conversation held in advance is a different conversation from the one held under delivery pressure.',
          bullets: [
            'Propose, then approve-all, then approve-subset with sampling, then exception review',
            'Each stage generates the evidence that justifies the next',
            'Widen per action type, not per agent — drafting and sending are different questions',
            'Define the criteria for the next stage before you are standing in front of it',
          ],
        },
        {
          heading: 'The Evidence That Justifies Widening',
          body: 'Base the decision on something better than an absence of complaints. Useful evidence: the approval rate on the gate you propose to remove, since a gate approved essentially always over a substantial number of decisions is either genuinely safe to relax or is not being read, and you should know which. The disagreement rate in sampled review, which is the direct measure of whether the agent matches human judgement on the cases nobody gated. The failure taxonomy over recent runs, checked specifically for classes with consequences you cannot absorb unattended. And whether the volume reviewed is enough to support any conclusion at all, which is the check most often skipped. Widening also needs a reverse gear: name the conditions that would narrow autonomy again, and make narrowing a routine adjustment rather than an escalation, because a control that can only loosen is not a control.',
          bullets: [
            'Approval rate on the gate in question — and establish whether it was being read',
            'Disagreement rate from sampled review of ungated runs',
            'Failure classes present, weighted by whether the consequence is absorbable',
            'Name the conditions that narrow autonomy again and make narrowing routine',
          ],
        },
        {
          heading: 'Calibrating What People Expect',
          body: 'Human trust in an automated system moves faster than the evidence in both directions, and both errors are costly. Over-trust builds quietly through a long run of good outcomes and shows up as reviewers who have stopped reviewing while the metrics still say the process is in place. Under-trust follows a single visible failure and produces the opposite waste: an agent that works well being checked exhaustively by people whose attention is needed elsewhere. Counter both with the same practice — publish the actual performance to the people doing the oversight, including the failure rate and the classes of failure, so their calibration is anchored to numbers rather than to the last thing they saw. Telling reviewers what the agent gets wrong, specifically, is also the most effective way to make sampled review productive, because it tells them what to look for.',
          bullets: [
            'Over-trust builds silently through good runs; under-trust follows one visible failure',
            'Both are miscalibrations against evidence, and both waste scarce attention',
            'Publish real performance and failure classes to the people doing the oversight',
            'Telling reviewers what the agent typically gets wrong makes sampling far more productive',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'How much freedom an AI system has should be earned in stages and should be able to go backwards. A product that starts by proposing and only later acts on its own is being run properly, not slowly.',
          bullets: [
            'Trust should widen on evidence, and it should be reversible when something goes wrong',
            'Freedom is per action: drafting and sending are entirely different levels of risk',
            'If you have stopped reading the confirmations, the safeguard has already stopped working',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'The autonomy stage and its criteria are a governance artefact buyers increasingly ask for. A team that can state which stage each action type is at, what evidence moved it there, and what would move it back has a real oversight model rather than a policy document.',
          bullets: [
            'Ask which autonomy stage each action type sits at and what evidence justified it',
            'Approval rate and decision latency reveal whether a gate is functioning at all',
            'Check that narrowing autonomy is a routine operation, not an incident',
            'Sampled review with a measured disagreement rate is the evidence that oversight is real',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build autonomy level as configuration per action type, not as a property of the agent, and make it changeable without a deploy. You will want to narrow one action at three in the morning without shipping a release.',
          bullets: [
            'Autonomy as per-action configuration, changeable at runtime',
            'Instrument approval rate, decision latency and sampled disagreement from the start',
            'Checkpoint and resume so a gate or an escalation does not cost the run',
            'Log the autonomy level in force on every run so behaviour changes are attributable',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients want the end state and will accept the ramp if the criteria are written down at the start. Defining the stages, the evidence for each transition and the reverse conditions is a deliverable that outlasts the engagement and prevents the argument that otherwise happens under delivery pressure.',
          bullets: [
            'Agree the stages and the promotion criteria in the design phase, not at go-live',
            'Frame the ramp as the fastest route to justified autonomy, not as caution',
            'Include the narrowing conditions explicitly — a one-way control is not a control',
            'Hand over the review process with an owner and a cadence, or it lapses within a quarter',
          ],
        },
      ],
    },
    {
      id: 'ag5l5',
      title: 'The Honest Limits of Oversight at Volume',
      diagram: 'OversightAtVolume',
      slides: [
        {
          heading: 'At Volume, Humans Cannot Be the Control',
          body: 'Say this plainly, because a lot of AI governance rests on quietly not saying it. Once an agent takes thousands of actions a day, no arrangement of people reviews them meaningfully. What people can do at that scale is review a sample, respond to exceptions, and investigate incidents. What they cannot do is provide assurance on every action, and any design that claims otherwise is describing an aspiration. This is not an argument against human involvement, it is an argument for putting it where it works. Humans set the policy, define what may not happen, review the sample, decide the escalations, and judge whether to widen autonomy. The per-action control at volume has to be structural — deterministic policy checks, scope limits, staged execution with a delay window — because those scale and attention does not.',
          bullets: [
            'At volume, people can sample, handle exceptions and investigate — not assure every action',
            'A design implying per-action human assurance at scale is describing an aspiration',
            'Humans set policy, review samples, resolve escalations and decide autonomy',
            'Per-action control at scale has to be structural, because attention does not scale',
          ],
        },
        {
          heading: 'Sampling That Discriminates',
          body: 'Uniform random review spends most of its budget confirming that ordinary cases were ordinary. Keep a small random stratum to hold the base rate honest, then spend the rest where the information is: actions at the high end of value or reach, runs where a verification failed or a retry occurred, runs whose step count sits in the tail, cases where the agent expressed low confidence, action types recently promoted to a wider autonomy stage, and anything involving material that arrived from outside. Rotate the emphasis so a stable sampling scheme does not become a predictable blind spot. And close the loop: every review that finds something should produce either a stored case for the test suite or a change to a tool, a schema or a policy, because review that generates no change is a process with no output.',
          bullets: [
            'Keep a small random stratum for the base rate, then sample where information is',
            'High reach, failed verifications, tail step counts, low confidence, newly widened actions',
            'Rotate emphasis so the scheme does not become a predictable blind spot',
            'Every finding should produce a stored case or a change, or review has no output',
          ],
        },
        {
          heading: 'Oversight Theatre and How to Spot It',
          body: 'The failure state is a process that satisfies an audit and changes nothing, and it has recognisable symptoms. Approval rates at or near total with decision times of a couple of seconds. A sampled review nobody can point to a finding from this quarter. Escalation counts of zero. A policy document naming controls that do not exist in the runtime. An override path used routinely with no record of who used it or why. Each of these is measurable, which is the useful part: oversight quality is not a matter of opinion, it can be instrumented like anything else in this module. Publish those numbers alongside the agent\'s performance numbers, and treat a gate with a total approval rate as a finding requiring an explanation — either the gate is unnecessary and should be removed, or it is not working and should be fixed. Leaving it in place unexamined is the one option that helps nobody.',
          bullets: [
            'Symptoms: near-total approval, no sampled findings, no escalations, undocumented overrides',
            'Oversight quality is measurable — instrument it like any other part of the system',
            'A gate approved essentially always is either unnecessary or not working',
            'Leaving an unexamined gate in place is the only option with no upside',
          ],
        },
      ],
    },
    {
      id: 'ag5l6',
      title: 'Writing Down What the Agent May Not Do',
      diagram: 'ForbiddenActions',
      slides: [
        {
          heading: 'The Prohibition List Is a Real Artefact',
          body: 'Most agent projects have a detailed specification of what the system should do and nothing written about what it must never do, which means the boundary exists only in the assumptions of whoever is currently working on it. Write it down: the actions this agent will never take, the data it will never touch, the systems it will never write to, the thresholds it will never exceed without a person, and the categories of decision that are not delegated at all. Keep it specific enough to implement — never send external communications without approval is implementable; be careful with customer data is not. Producing this list is also the fastest way to surface disagreement inside a team, because the exercise regularly reveals that two engineers held incompatible assumptions about what the thing was allowed to do.',
          bullets: [
            'Specify what must never happen, not only what should happen',
            'Actions, data, systems, thresholds and non-delegated decision types',
            'Write it at implementable specificity, not as a principle',
            'The drafting exercise reliably exposes assumptions the team did not know it disagreed on',
          ],
        },
        {
          heading: 'It Has to Live in the Runtime',
          body: 'A prohibition in the system prompt is a preference expressed to a probabilistic system. The same prohibition implemented as a check the runtime performs before dispatch is a property of the system. Map every line of the list to its enforcement point — an absent tool, a credential scope, a validation rule, a policy check on parameters, a hard budget — and be honest where no enforcement point exists, because the entries you cannot enforce are exactly the ones worth knowing about. Some genuinely cannot be enforced structurally, and for those the honest answer is a detection with a defined response rather than a sentence in a prompt and a hope. The security discipline covers how these controls are built and layered; the engineering obligation here is that the list and the runtime agree, and that the gap between them is written down rather than assumed away.',
          bullets: [
            'A prohibition in a prompt is a preference; in the runtime it is a property',
            'Map each entry to its enforcement point: missing tool, scope, validation, policy, budget',
            'Where no enforcement exists, say so and define a detection and a response instead',
            'The list and the runtime must agree, and any gap must be recorded rather than assumed away',
          ],
        },
        {
          heading: 'Ownership, Review and Change',
          body: 'The list needs an owner, a review cadence and a change process, or it becomes a founding document that describes a system nobody has run for a year. Review it when the toolset changes, when autonomy widens, when the agent is pointed at a new data source, and after any incident. Treat additions to the toolset as changes to the prohibition list by default, since a new tool is a new capability and the question of whether anything about it should be forbidden deserves an answer at the point of adding it rather than afterwards. Test the important entries the way you would test anything else: a small suite that attempts the prohibited action and asserts it is refused, run in the same pipeline as everything else. A prohibition nobody has verified since it was written is a claim, and claims are what incident reviews are made of.',
          bullets: [
            'Owner, cadence, and a change process, or it describes a system that no longer exists',
            'Review on toolset changes, autonomy changes, new data sources, and after incidents',
            'Adding a tool should trigger the question of what about it must be forbidden',
            'Test the important prohibitions in the pipeline — an unverified prohibition is a claim',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'This list takes an afternoon and is the quickest way to discover that two people on the same system hold different beliefs about what it may do. Write it for one agent, with the enforcement points named.',
          exercise: {
            task: 'Write the prohibition list for one agent you own or are designing. If you own none, write it for an agent your organisation has deployed, from what you can observe. Map every line to its enforcement point, and put the entries you cannot enforce in their own section with a detection and a response beside each. Then take every gated action and classify it by reversibility and reach, naming who approves and what artefact they are shown. Give the finished list to one other engineer on the system and record where you disagreed.',
            copyText: 'AGENT:\n\nNEVER - each line specific enough to implement, not a principle\n- Actions it will never take:\n- Data it will never read or write:\n- Systems it will never write to:\n- Thresholds it will never exceed without a person:\n- Decisions never delegated at all:\n\nENFORCEMENT\nProhibition | Enforcement point (absent tool / credential scope / validation rule / policy check / hard budget) | Tested in the pipeline?\n\nNOT ENFORCEABLE STRUCTURALLY\nProhibition | Detection | Defined response | Owner\n\nGATED ACTIONS\nAction | Reversible? by whom, in what window | Reach: records, people and systems affected | Approver | Artefact shown (diff, parameters, sources) | Default on timeout\n\nDisagreements found with the second reader:',
            selfCheck: [
              'Every prohibition maps to a named enforcement point, or sits in the not-enforceable section with a detection beside it',
              'Each gated action names an approver who exists, and an artefact they see rather than a generated summary',
              'You can name at least one boundary where you and the second reader had assumed different things',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why is approval fatigue described as rational rather than as a discipline problem?', options: ['Because approvers are not given enough training on the tool', 'Because a queue with a low base rate of problems makes reading each request a poor use of attention, so any design depending on sustained vigilance is depending on something people do not do', 'Because approval interfaces are usually slow to load', 'Because approvals are typically delegated to junior staff'], correct: 1 },
    { q: 'What should happen when an approval request times out with no response?', options: ['The action proceeds, since blocking the queue is worse', 'The run fails and all state is discarded', 'The action is abandoned or held with the run state preserved so the decision can still be made', 'The request is automatically re-sent until answered'], correct: 2 },
    { q: 'An agent has an escalation tool but its escalation rate is zero. What is the most likely explanation?', options: ['The tasks have genuinely never been ambiguous', 'The escape hatch is not reachable in practice, or metrics count escalation as failure so the incentive pushes against it', 'The model is performing above expectations', 'The escalation schema has too many fields'], correct: 1 },
    { q: 'Where should the majority of escalation triggers live?', options: ['In the runtime as structural conditions — missing preconditions, scope violations, thresholds, stuck-detection, budget limits', 'In the model\'s assessment of its own uncertainty', 'In the approval interface', 'In the tool descriptions'], correct: 0 },
    { q: 'What is the correct status of an agent\'s generated explanation of why it acted?', options: ['A reliable account of the model\'s internal process', 'An audit record sufficient on its own', 'A summary that can be verified by reading it carefully', 'Generated text that may be accurate or a plausible reconstruction, to be shown beside the trace and never in place of it'], correct: 3 },
    { q: 'Autonomy is being widened for an agent. Which piece of evidence is most directly relevant to removing a specific approval gate?', options: ['Total tokens consumed per run', 'Overall user satisfaction with the product', 'The approval rate and decision latency on that gate, plus whether it was actually being read', 'The number of tools registered'], correct: 2 },
    { q: 'What is the honest limit of human oversight once an agent takes thousands of actions per day?', options: ['People can review everything if the interface is efficient enough', 'People can sample, handle exceptions and investigate incidents, but cannot provide assurance on every action — per-action control must be structural', 'Oversight becomes unnecessary once failure rates are low', 'Review can be delegated entirely to a second model as a boundary'], correct: 1 },
    { q: 'A prohibition list entry has no corresponding enforcement point in the runtime. What is the appropriate response?', options: ['Record the gap and define a detection with a response, rather than relying on a prompt instruction', 'Remove the entry, since unenforceable rules cause confusion', 'Move the entry into the system prompt and consider it handled', 'Escalate every action of that type to a human indefinitely'], correct: 0 },
  ],
};

export default agM5;
