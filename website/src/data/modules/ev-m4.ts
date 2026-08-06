import type { CourseModule } from '../../types/course';

const evM4: CourseModule = {
  id: 'ev-m4',
  title: 'Evaluating What You Actually Build',
  icon: 'layers',
  summary: 'Evaluation applied to the systems teams really ship: separating retrieval failure from generation failure, grading agent outcomes against trajectories, human review that scales without exhausting reviewers, online testing behind guardrails, choosing on the quality-cost-latency frontier, and the habits that keep an eval suite alive.',
  lessons: [
    {
      id: 'ev4l1',
      title: 'Testing a System That Answers From Your Documents',
      sectionLabel: 'Applied',
      diagram: 'DocAnswerTesting',
      slides: [
        {
          heading: 'Two Failures Wearing One Face',
          body: 'When a document-grounded answer is wrong there are two entirely different causes and one symptom. Either the retrieval step never surfaced the passage containing the answer, in which case no amount of prompt work on the generation step will help, or the right passage was retrieved and the model failed to use it — ignored it, misread it, or blended it with something it already believed. Teams that report a single end-to-end accuracy number cannot tell these apart, and so they spend weeks tuning the wrong stage. Instrument the pipeline so every eval case records what was retrieved, in what order, and what the model was actually given, then grade the two stages separately before grading the whole. The end-to-end number is what the user experiences and it stays the headline; the stage numbers are what tell you where the next sprint should go.',
          bullets: [
            'One wrong answer, two root causes: nothing found, or something found and misused',
            'Record the retrieved passages and their order on every eval case',
            'Grade retrieval and generation separately, then report end to end',
            'A single accuracy number sends teams to tune the stage that was already fine',
          ],
        },
        {
          heading: 'Did It Find the Right Source at All?',
          body: 'The retrieval question is simple to state: for each case, was a passage that actually contains the answer among the ones the system pulled back? Label each case with its supporting passages once, then measure the share of cases where at least one correct passage appears in the top k results. That is what recall@k means in plain terms, and k should be the number of passages your prompt actually includes rather than the number your search layer returns. Two habits make the measurement useful. Report it at several values of k, because the gap between recall at three and recall at twenty tells you whether the passage is missing from the index entirely or merely ranked too low, and those need completely different fixes. And check where the correct passage lands, since models attend unevenly across a long context and a correct passage in the last position is not reliably as good as one near the front.',
          bullets: [
            'Label the supporting passages per case once and reuse them across every run',
            'Recall@k: the share of cases where a correct passage sits in the top k you pass in',
            'Measure at several values of k — missing and mis-ranked are different problems',
            'Position matters; a correct passage buried deep is not the same as one near the top',
          ],
        },
        {
          heading: 'Is the Answer Actually Grounded?',
          body: 'Retrieval succeeding does not mean the answer used what was retrieved. Groundedness asks a narrower question than correctness: is every claim in the output supported by the passages that were supplied? Grade it claim by claim rather than as a holistic impression — split the answer into its factual assertions and check each against the provided context, which is a job a judge model does reasonably well when the criterion is that concrete and badly when asked whether an answer seems grounded overall. Track two distinct failures separately. Unsupported claims are content the model added from its own parameters; omissions leave out something the context plainly contained. And keep groundedness apart from correctness, because an answer can be faithfully grounded in a retrieved passage that is itself stale or wrong, which is a corpus problem fixed somewhere else entirely.',
          bullets: [
            'Split the answer into claims and check each one against the supplied context',
            'Judges grade concrete per-claim support well and holistic groundedness badly',
            'Separate unsupported additions from omissions of what the context contained',
            'Grounded and correct are different: a faithful answer to a stale source is still wrong',
          ],
        },
        {
          heading: 'The Fluent Answer That Cites Nothing',
          body: 'The characteristic failure of these systems is not an obvious error, it is a well-written answer assembled from the model\'s own knowledge when retrieval returned nothing useful — fluent, plausible, correctly formatted, unsupported. It passes a helpfulness rubric, it reads better than a careful hedged answer, and reviewers skimming a sample will approve it. Build the cases that catch it deliberately. Questions whose answers are genuinely absent from the corpus, where the only correct behaviour is to say so. Questions where the corpus holds a near miss on the topic, which invites confident blending. And questions whose answer changed, so the parametric answer and the corpus answer differ and you can see which one the system actually used. Require citations and then verify them mechanically, because a citation that does not support the sentence attached to it is worse than no citation at all.',
          bullets: [
            'Include unanswerable cases where the only correct output is admitting the gap',
            'Add near-miss cases that invite blending corpus content with parametric knowledge',
            'Cases whose answer has changed reveal which source the system really used',
            'Verify citations mechanically — an unsupporting citation manufactures false confidence',
          ],
        },
      ],
    },
    {
      id: 'ev4l2',
      title: 'Testing Agents That Take Several Steps',
      diagram: 'MultiStepAgentTesting',
      slides: [
        {
          heading: 'Outcome and Trajectory Are Different Questions',
          body: 'An agent run has two things worth grading and teams routinely grade only one. The outcome is whether the final state of the world is what it should be — the record updated, the file written, the ticket in the right queue — and it is what the user cares about. The trajectory is how the run got there: which tools were called, in what order, with what arguments, how many steps it took, what it read along the way. Outcome-only grading passes a run that reached the right end state through six unnecessary calls, two failed attempts and a destructive action that happened to be reversible, and that run is an incident waiting for the case where the luck runs out. Trajectory-only grading fails in the other direction, penalising an agent for finding a better path than the one you imagined. Gate on the outcome and read the trajectory to understand why the outcome happened.',
          bullets: [
            'Outcome: is the final world state correct? Trajectory: how did it get there?',
            'Outcome-only grading passes lucky runs that took wasteful or dangerous paths',
            'Trajectory-only grading punishes agents for improving on your imagined route',
            'Gate on outcome; use trajectory as the diagnosis, not the verdict',
          ],
        },
        {
          heading: 'Failures That Surface Late',
          body: 'The hardest agent failures to diagnose are the ones where step three fails because step one was subtly wrong — a mis-parsed identifier, a date read in the wrong format, a search that returned plausible but incorrect records — and every step afterwards operates confidently on a bad premise. The visible error is at the end and the cause is at the beginning, so a grader that only inspects the final output tells you almost nothing. The counter is per-step assertions: state what must be true after each step and check it there, so the run fails at the point the premise broke rather than at the point the consequence became visible. Tool-call correctness belongs in the same layer — the right tool, valid arguments, and arguments that match what the user actually asked for. This costs real work to write and it is the highest-value thing you can add to an agent eval.',
          bullets: [
            'Late failures usually have early causes; the visible error is not the defect',
            'Assert post-conditions after each step so the run fails where the premise broke',
            'Check tool-call correctness: right tool, valid arguments, arguments matching intent',
            'Per-step assertions turn an afternoon of trace reading into a failure that names itself',
          ],
        },
        {
          heading: 'Cost and Step Count Are Quality Signals',
          body: 'In a multi-step system, how much work was done is information about how well the work was understood. A run that reaches the correct outcome in fifteen steps where four would do is telling you something about the plan, the tool descriptions, or the clarity of the task definition — and it is also telling you what the feature will cost at volume. Track steps, tool calls, tokens, wall-clock time and cost per successful run, and treat a significant increase as a regression needing an explanation even when the success rate improved. Watch the shape of the distribution rather than the mean, because the runs in the tail are usually the ones looping, retrying the same failing call, or wandering, and they are simultaneously the expensive cases and the most diagnostic ones. A step budget that terminates a run is a guardrail rather than a fix; the runs that hit it are your reading list.',
          bullets: [
            'Steps and cost per successful run belong in the same report as quality',
            'A large increase in work is a regression even when the success rate rose',
            'Read the tail — looping, retrying and wandering runs all live there',
            'Step budgets contain the damage; the runs that hit them are the diagnosis',
          ],
        },
        {
          heading: 'Replaying a Failed Run',
          body: 'The value of a failed run lies entirely in whether you can get back to it. That requires the trace to record the assembled prompt at each step rather than the template, the exact tool arguments and the raw results returned, the model and prompt versions in play, and the state the environment started in. Reconstructing any of those from memory produces a plausible story rather than a cause. With them captured, three things become possible: replay the run against a fix and confirm it now passes, replay it against a different model family to see whether the failure is model-specific, and fork the trace at the step that went wrong so you can test a change without re-running everything before it. Then promote the case into the suite. An agent eval suite is largely a collection of past failures with assertions attached, and the ones nobody could reconstruct never made it in.',
          bullets: [
            'Capture assembled prompts, exact arguments, raw results, versions, and initial state',
            'Replay against a fix, and against another model family, to isolate the cause',
            'Fork the trace at the failing step instead of re-running the whole trajectory',
            'A failure you cannot reproduce can never become a regression case',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'An AI assistant that takes actions on your behalf can reach the right result through a worrying route. Whether anyone checked the route, and not only the result, is a reasonable thing to ask about any tool that acts for you.',
          bullets: [
            'Ask whether a tool is tested on how it works, not only on whether it finished',
            'A correct result reached through a risky path is luck, not reliability',
            'Products that can show you what the assistant did are the ones that can fix it',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Trajectory grading and security assertions are the same instrumentation viewed from two directions. Once every step is captured with its arguments, you can assert both that the agent did its job and that it never touched something it should not have.',
          bullets: [
            'Trajectory assertions carry security invariants as naturally as quality ones',
            'Ask prospects whether a failed agent run can be replayed step by step',
            'No reproducible trace means no incident investigation and no root cause',
            'Step and cost anomalies are also an abuse signal, not only a quality one',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Write per-step post-conditions from the start; retrofitting them after a confusing failure is how a day disappears. Capture assembled prompts and raw tool results at span level so a failing run can be forked at the step that broke rather than re-run from the top.',
          bullets: [
            'Assert post-conditions per step, not only on the final output',
            'Log the assembled prompt and the raw tool result, never the template and a summary',
            'Report steps, tokens and cost per successful run alongside pass rate',
            'Build a one-step path from a failed run to a stored regression case',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients almost always measure agents on task completion alone, which conceals the runs that succeeded expensively or dangerously. Introducing trajectory grading usually changes the picture of a pilot more than any prompt change would.',
          bullets: [
            'Add trajectory and cost-per-success reporting before recommending scale-up',
            'Show the tail of the step-count distribution — it reframes pilot results quickly',
            'Insist on replayable traces as an acceptance criterion for any agent delivery',
            'Convert each pilot failure into a stored case, or the next vendor starts from zero',
          ],
        },
      ],
    },
    {
      id: 'ev4l3',
      title: 'Human Review That Scales',
      diagram: 'ScalableHumanReview',
      slides: [
        {
          heading: 'Where Judgement Cannot Be Delegated',
          body: 'Automated graders handle anything with a checkable definition of correct — schema validity, a computed figure, a required fact, a forbidden action — and model judges extend that to criteria you can write down explicitly. What remains is genuinely irreducible: whether an answer is appropriate for this customer in this situation, whether the tone fits, whether advice is safe given domain norms a rubric cannot fully capture, and whether the thing is actually useful rather than merely responsive. These are the cases where the rubric you would have to write is the judgement itself. Human review is therefore not a stage that teams graduate out of once they automate properly; it is a permanent tier that shrinks as your rubrics improve and never reaches zero. Treat expert attention as the scarcest input in the whole eval programme and design the process around spending it well.',
          bullets: [
            'Automate anything checkable; use judges for anything you can articulate',
            'What is left is judgement a rubric cannot express — appropriateness, tone, real usefulness',
            'Human review is a permanent tier, not a temporary one',
            'Expert attention is the scarce resource; the process exists to allocate it',
          ],
        },
        {
          heading: 'Sample, Do Not Review Everything',
          body: 'Reviewing every case is neither possible nor useful, and the instinct to try produces a process that gets quietly abandoned. Sample instead, and sample deliberately rather than uniformly. A small random sample gives an unbiased estimate and keeps you honest about the base rate. On top of that, stratify: over-sample the slices that matter most, the cases automated graders flagged as borderline, the cases where two graders disagreed, and the cases that changed verdict between the last version and this one. Uniform random sampling spends most of its budget confirming that easy cases still pass, which is precisely what automation already told you. Choose the sample size from the precision you need rather than from what feels thorough, and record which sampling scheme produced a number, because comparing a stratified review against last quarter\'s random one compares nothing at all.',
          bullets: [
            'A small random sample keeps the base rate honest; stratify on top of it',
            'Over-sample high-stakes slices, borderline cases, and verdict changes',
            'Uniform sampling re-confirms what automation already established',
            'Record the sampling scheme with the number or cross-run comparisons are meaningless',
          ],
        },
        {
          heading: 'Making Two Reviewers Agree',
          body: 'Two competent reviewers given the same output and the same one-line criterion will disagree far more than either expects, and unmeasured disagreement means your human numbers are noise with a serious face on. Measure it: have a portion of every batch labelled independently by two people and track the agreement rate as a standing metric. When it is low, the rubric is the problem rather than the reviewers — the fix is to convert vague adjectives into observable conditions, anchor each point of the scale with worked examples including the boundaries, and write explicit rules for the cases people keep resolving differently. Run a calibration session on a shared set before a batch, discuss the disagreements instead of averaging them away, and reissue the rubric. Agreement between humans is also the ceiling for any model judge validated against those labels, which makes this a prerequisite rather than a refinement.',
          bullets: [
            'Double-label part of every batch and track agreement as a standing metric',
            'Low agreement is a rubric defect: replace adjectives with observable conditions',
            'Anchor every scale point with worked examples, especially at the boundaries',
            'Human agreement caps the accuracy of any judge trained against those labels',
          ],
        },
        {
          heading: 'Fatigue, Drift, and Attention That Discriminates',
          body: 'Reviewer quality degrades in ways that show up as nothing on a dashboard. Long batches produce fatigue, and labels late in a session are measurably worse than labels early in it. Standards drift over weeks as reviewers recalibrate against whatever they have been seeing, so a score from one quarter and a score from the next are not directly comparable. Presentation order matters too, since whichever output appears first carries an advantage. Counter all three mechanically: cap batch length, rotate a small set of gold cases with known answers through every batch to detect drift, blind and randomise the order of candidates, and periodically re-run an old batch to check that today\'s reviewers still agree with the earlier labels. Then spend what remains where it discriminates — on the cases where two versions differ, not the ones where both are obviously fine.',
          bullets: [
            'Cap batch length; late-session labels are worse and nobody notices',
            'Rotate gold cases with known answers through batches to detect drift',
            'Blind and randomise presentation order — position effects are real',
            'Review where versions differ; identical-and-fine cases teach you nothing',
          ],
        },
      ],
    },
    {
      id: 'ev4l4',
      title: 'Testing in Production: A/B and Guardrails',
      diagram: 'ProductionTesting',
      slides: [
        {
          heading: 'Why Offline Ever Disagrees With Online',
          body: 'An offline suite measures a fixed set of inputs against your definition of good. Production measures whatever users actually send against whether they got what they came for, and the two diverge for structural reasons rather than accidental ones. Your case mix is not the traffic mix, and it under-represents the messy, truncated, ambiguous inputs that dominate real usage. Your graders encode a definition of quality that users may not share, since people frequently prefer shorter, faster and blunter than a rubric rewards. Production carries context your harness lacks: the prior conversation, the state of the account, whatever the user was doing before they asked. And the deployed system includes caching, truncation, retries and fallbacks that the eval path often bypasses entirely. Offline evals exist to iterate quickly and block obvious harm; online measurement exists to find out whether you were right.',
          bullets: [
            'The case mix is not the traffic mix, and real inputs are messier than yours',
            'Rubric quality and user-perceived quality are related but not the same thing',
            'Production carries context and infrastructure the eval harness bypasses',
            'Offline blocks harm and speeds iteration; online decides whether it worked',
          ],
        },
        {
          heading: 'Running a Fair Comparison on Live Traffic',
          body: 'A live comparison is only evidence if it is built to be one. Randomise at the unit that matches the effect you are measuring — usually the user or the session rather than the individual request, because a user bounced between two versions mid-conversation gets an incoherent experience and gives you a contaminated measurement. Decide the primary metric and the smallest effect worth acting on before you start, then work out how long that takes to detect at your traffic volume; a test that cannot reach a conclusion is worse than no test, because it will be read anyway. Segment the results the same way you slice offline evals, since an aggregate win driven entirely by one segment while another degrades is a decision rather than a result. And resist stopping the moment the number looks favourable, because peeking until significance appears manufactures wins reliably.',
          bullets: [
            'Randomise at user or session level so the experience stays coherent',
            'Fix the primary metric and the minimum meaningful effect before launching',
            'Segment results — an aggregate win can hide a segment that got worse',
            'Do not stop early on a favourable reading; repeated peeking manufactures wins',
          ],
        },
        {
          heading: 'Guardrail Metrics and How a Rollout Stops',
          body: 'Alongside the metric you hope will improve, define the ones that must not get worse and give them thresholds that halt the rollout. The usual set is error rate, latency at the tail, cost per successful task, refusal rate, escalation to a human, and any safety check you run over live traffic — plus, for anything with a clinical, financial or legal dimension, the specific harm whose first confirmed instance ends the experiment outright. Guardrails only work when the stopping decision is agreed in advance and enforced mechanically, because in the moment there is always a plausible explanation for a bad number and a strong incentive to accept it. Roll out progressively behind them, evaluating the guardrails at each stage rather than only at the end, and test the rollback path before you need it. A guardrail nobody can act on within minutes is a dashboard.',
          bullets: [
            'Name the metrics that must not degrade and set their thresholds before launch',
            'Error rate, tail latency, cost per success, refusal, escalation, and safety checks',
            'Automate the stop — in the moment there is always a story for a bad number',
            'Progressive rollout with a tested rollback, or the guardrail is decorative',
          ],
        },
        {
          heading: 'Novelty, Learning, and the Win That Does Not Last',
          body: 'Two time-dependent effects distort early online readings in opposite directions. Novelty: a visibly different behaviour or interface draws engagement simply because it is new, and the lift decays over days or weeks, so a change measured only in its first days is partly measuring curiosity. Learning: users who had adapted to the previous behaviour perform worse at first with a better one, so a genuine improvement can read as a regression until people adjust. Both argue for running long enough to see the curve rather than the point, and for separating returning users from first-time ones, since only one of those groups can experience novelty at all. This is the most common way an offline win loses online: the eval measured a static task, the users were adapting, and the number moved for reasons the harness had no way to represent.',
          bullets: [
            'Novelty inflates early readings and learning effects depress them; both decay',
            'Run long enough to see a curve, not a single point',
            'Separate returning users from new ones — only one group can feel novelty',
            'An offline win can lose online because the harness cannot represent adaptation',
          ],
        },
      ],
    },
    {
      id: 'ev4l5',
      title: 'Quality Against Cost and Latency',
      diagram: 'QualityCostLatency',
      slides: [
        {
          heading: 'Evaluate on the Frontier, Not on Quality Alone',
          body: 'Ranking configurations by quality alone answers a question nobody asked, because the best configuration is frequently one you cannot afford to run at volume. Evaluate on the frontier instead. For each candidate — model, prompt strategy, retrieval depth, number of reasoning steps, judge usage, retry policy — record quality, cost per successful task and latency at the tail together, then identify which options are not beaten on every axis at once. Everything else can be discarded without argument, and what remains is a small set of genuine trade-offs to choose between deliberately. The shape is usually the same and usually surprising: quality flattens well before cost does, so a configuration a little behind the leader can cost a fraction as much. Whether those points are worth the multiple is a product decision, and it can only be made when all three numbers appear on the same row of the same table.',
          bullets: [
            'Record quality, cost per success and tail latency for every candidate together',
            'Discard options beaten on every axis; what remains is a real choice',
            'Quality typically flattens before cost does — the top option rarely wins on value',
            'All three numbers on one row, or the trade-off never actually gets discussed',
          ],
        },
        {
          heading: 'Routing the Easy Cases Somewhere Cheaper',
          body: 'Most workloads are not uniformly hard. A large share of real traffic is routine and a small share carries most of the difficulty, which is what makes routing worth evaluating: send the easy cases to a smaller, faster model and escalate the rest. The mechanisms vary — a classifier over the input, a cheap first attempt with a validity or confidence check that triggers a retry on a stronger model, or explicit rules by case type — and they share one evaluation requirement. Measure the routed system end to end on the same suite, never the components in isolation, because a router that misclassifies difficulty produces answers worse than the small model would have given while costing more than the large one, having paid for both. Report the escalation rate as a metric in its own right and watch it over time, since drift in the traffic mix quietly changes the economics you signed off on.',
          bullets: [
            'Traffic is not uniformly hard; routing exploits the difficulty distribution',
            'Classifier, cheap-attempt-with-check, or explicit rules — all need end-to-end evaluation',
            'A bad router costs more than either model alone and answers worse than both',
            'Track escalation rate over time; traffic drift changes the economics silently',
          ],
        },
        {
          heading: 'Does the Expensive Option Earn Its Cost on Your Cases?',
          body: 'The general claim that a larger model is better is nearly always true and nearly always irrelevant, because the question is whether it is better on the cases you actually serve, by enough to justify the difference. Run the comparison properly: the same suite, prompts re-tuned per model rather than copied across, quality reported per slice instead of in aggregate, and cost measured per successful task including retries and failed attempts. The usual finding is that the advantage is concentrated — a large gap on a small hard slice and almost none across the bulk of traffic — which is an argument for routing rather than for standardising on one model everywhere. Then convert the difference into terms someone can decide with: what the gap costs per month at current volume, and what the failures it prevents would have cost. A quality difference nobody can price gets argued about indefinitely.',
          bullets: [
            'The question is not which model is better, but better on your cases by how much',
            'Report per slice; the advantage is usually concentrated in one hard segment',
            'Cost per successful task, including retries and failures, is the comparable unit',
            'Price the gap at real volume — an unpriced difference is debated, never decided',
          ],
        },
      ],
    },
    {
      id: 'ev4l6',
      title: 'Making Evals a Team Habit',
      diagram: 'EvalTeamHabit',
      slides: [
        {
          heading: 'Someone Owns the Eval Set',
          body: 'An eval suite with no owner degrades into a suite with no meaning, and that is the most common way an otherwise competent programme fails. Name a person accountable for the case set: what goes in, what comes out, whether the graders still measure what they claim, and whether the mix still resembles what the product does. Ownership is not the same as doing all the work — cases come from everyone, including support, domain experts, and whoever handled the last incident — but somebody has to hold the standard for what a good case looks like, and that role deserves to be as explicit as service ownership is. Give the owner a defined cadence for reviewing the suite as a whole rather than only reacting to failures, and give them the authority to remove cases, which is the part teams never delegate and therefore never do.',
          bullets: [
            'Name an accountable owner for the case set, not just for the test infrastructure',
            'Cases come from everyone; the standard for a good case comes from one place',
            'Schedule whole-suite review rather than only failure-driven attention',
            'The authority to delete cases is what never happens without an owner',
          ],
        },
        {
          heading: 'When It Gets Updated, and by What Trigger',
          body: 'Eval sets should change on defined triggers rather than whenever somebody remembers. The reliable set of triggers: every production incident, every complaint that reveals a class rather than a one-off, every new feature or capability, every shift in who the users are or what they ask, and a periodic refresh from current traffic to keep the mix representative. The most valuable of these by a distance is the incident trigger, because those cases are free — a real user found the failure for you and it is guaranteed to matter. Make the path from incident to case short enough that it actually gets walked: a direct route from a production trace to a draft case, a target for how quickly that happens, and a check that the new case fails before the fix and passes after. An incident that has not produced a case within the week almost never produces one.',
          bullets: [
            'Trigger on incidents, class-revealing complaints, new features, and traffic drift',
            'Incident cases are the cheapest and most certainly relevant ones you will get',
            'Keep the trace-to-case path short and set a target time for walking it',
            'Confirm the case fails before the fix and passes after, or it protects nothing',
          ],
        },
        {
          heading: 'What Blocks a Release',
          body: 'Write down what stops a ship before you need it, because a gate defined during an argument is not a gate. The pattern that holds is hard gates on things that are unambiguous and consequential — safety criteria, schema validity, a floor on the critical slice, and any case protecting a past incident — with report-only signals for movements inside the noise band, since gates that fire on noise get disabled within a month and then nothing is gated at all. Put the result where the decision is actually being made, as a readable diff of which cases flipped in each direction with links to the traces, rather than as a single number in a log nobody opens. And define the override explicitly: who can approve shipping past a failing gate, what they must record, and what follow-up that creates. An override path written down in advance is healthier than one improvised late at night.',
          bullets: [
            'Hard-gate safety, schema validity, critical-slice floors, and incident regression cases',
            'Report-only inside the noise band; gates that cry wolf get switched off',
            'Show which cases flipped, with trace links, where the reviewer already is',
            'Write the override path down, including who records what',
          ],
        },
        {
          heading: 'The Suite Nobody Looks At',
          body: 'The failure mode worth watching for is not an absent eval suite but a present one that has stopped informing anything: it runs, it is green, and no decision has turned on it in months. The symptoms are recognisable. Nobody can name the last regression it caught. Failures get re-run until they pass. Cases exist that no one can explain. The headline number is quoted in reviews while the underlying cases go unread. This happens because the suite got slow, or noisy, or stale, and each of those has a fix — split fast and comprehensive tiers, prune or quarantine cases that fail for reasons unrelated to their purpose, and refresh the mix from current traffic. The honest test is not how many cases you have but whether anything changed because of them. If the answer for this quarter is nothing, the suite is documentation rather than a control.',
          bullets: [
            'The dangerous state is a green suite no decision has depended on in months',
            'Symptoms: re-running until green, unexplainable cases, headline numbers quoted unread',
            'Slow, noisy and stale each have a fix — split tiers, prune, refresh from traffic',
            'The real metric is whether a decision changed because of the suite',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'A gate nobody wrote down is a gate that gets argued about at the worst possible moment. Write yours now, while nothing is on fire.',
          exercise: {
            task: 'For an AI feature you ship, are building, or use daily — with none of your own, for a product your team depends on and would one day have to make this call about — write the release gate on one page: which checks block a release outright, which are posted as warnings only, who may override a block, and what they must record when they do. Keep the blocking list to checks that settle an argument rather than start one. Then write the part teams skip: a short paragraph saying exactly what happens the first Friday afternoon the gate fires on a release someone has already promised.',
            copyText: 'BLOCKS the release:\n- [safety criterion]\n- [schema or format validity]\n- [floor on the slice where failure costs most: __ %]\n- [every case protecting a past incident]\n\nWARNS ONLY (posted in the pull request, does not block):\n- [aggregate movement inside the noise band]\n- [judge-score wobble]\n\nOverride: [who may approve] records [what], which creates [what follow-up]\n\nFriday, 4pm, the gate fires and the release was promised. We: [what actually happens]',
            selfCheck: [
              'Every blocking check can be settled by pointing at a result, with no discussion needed',
              'At least one check sits on the warn list, and you can say why it is not a blocker',
              'The Friday paragraph names who decides and what gets written down, not a general intention',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Teams that improve their AI products have a habit, not a heroic project: every real failure becomes a permanent test. If a product keeps repeating the same class of mistake after you report it, that habit is missing.',
          bullets: [
            'Ask what happens to a reported problem after the immediate fix is made',
            'Products that improve steadily have a feedback loop; products that only change do not',
            'A vendor who cannot say what their tests would block is not really testing',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'What blocks a release is a governance answer as much as an engineering one, and it is the question buyers increasingly ask. A named owner, defined gates and an override path with a record are the evidence that a testing claim is real.',
          bullets: [
            'Ask who owns the eval set and what would block a release outright',
            'An override with no recorded justification is an unmanaged risk acceptance',
            'Incident-to-case turnaround time is a strong maturity signal in a buyer conversation',
            'A suite that has never blocked anything is a control that does not exist',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Make the boring parts frictionless: a direct path from a production trace to a draft case, tiered runs so the pre-merge suite stays fast, and a readable case-level diff in the pull request. Friction is what actually kills eval habits.',
          bullets: [
            'One short path from a failing trace to a stored case with assertions',
            'Split fast pre-merge and comprehensive scheduled tiers to protect iteration speed',
            'Post a case-level diff with trace links, not an aggregate score',
            'Prune and quarantine deliberately — an unexplainable case is an unremovable one',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Most clients can buy tooling and few can sustain the operating rhythm. The deliverable that lasts is the ownership model: who owns the case set, what triggers an update, what blocks a release, and who may override it.',
          bullets: [
            'Name the eval owner in the operating model, not in a slide appendix',
            'Define the update triggers and the incident-to-case target time explicitly',
            'Agree the gating and override policy before the first release decision',
            'Hand over the pruning process too, or the suite becomes unusable within a year',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why should a document-grounded system report retrieval quality and generation quality separately?', options: ['Because the two stages are usually built and owned by different teams with entirely different metrics', 'Because retrieval metrics are far cheaper to compute than end-to-end ones', 'Because a wrong answer may mean nothing relevant was found, or that it was found and misused', 'Because end-to-end accuracy cannot be measured at all once a retrieval step sits in the path'], correct: 2 },
    { q: 'What does recall@k measure in a retrieval evaluation?', options: ['The share of cases where a passage containing the answer appears in the top k passed to the model', 'The proportion of retrieved passages that the model went on to cite in its answer', 'The average rank of the correct passage across every case in the set', 'The number of passages the search layer returns for each query it is given'], correct: 0 },
    { q: 'An answer is fully supported by the passage it was given, but that passage is out of date. How should this be recorded?', options: ['As a retrieval failure, since the wrong passage was surfaced for the question', 'As a judge calibration error, since the grader accepted a wrong answer', 'As an over-refusal, since the system should have declined to answer', 'As grounded but incorrect — a corpus problem rather than a generation one'], correct: 3 },
    { q: 'An agent reaches the correct final state after several unnecessary tool calls and one destructive action that happened to be reversible. What does outcome-only grading do with this run?', options: ['Fails the run, because the trajectory contained an action that should never have run', 'Passes it, hiding a path that becomes an incident once the action is not reversible', 'Flags the run as non-deterministic and re-runs it to see whether the path settles down', 'Cannot score the run at all without a judge model reading the whole trajectory step by step'], correct: 1 },
    { q: 'Why are per-step assertions the highest-value addition to an agent eval suite?', options: ['They reduce the token cost of every run by stopping it as soon as a step goes wrong', 'They remove the need to grade the final outcome at all, since correct steps imply a correct result', 'Late failures have early causes, so the run fails where the premise broke, not where it showed', 'They make agent runs deterministic by constraining what each step is allowed to do'], correct: 2 },
    { q: 'Two reviewers frequently disagree when scoring the same outputs against the same criterion. What is the correct response?', options: ['Fix the rubric — replace vague adjectives with observable conditions and anchored examples', 'Average the two scores and carry on, since symmetric disagreement cancels out across the set', 'Increase the sample size until the disagreement averages out over a large enough number of cases', 'Replace both reviewers with a single model judge applied consistently'], correct: 0 },
    { q: 'A new version shows a strong lift in the first days of an online test, and the lift fades over the following weeks. What is the most likely explanation?', options: ['The guardrail thresholds were set too tightly for the new version', 'Randomisation was done at session level rather than at user level', 'Contamination in the underlying model\'s training data for that task', 'A novelty effect — engagement driven by the change being new, which decays as it stops being new'], correct: 3 },
    { q: 'Why must a system that routes easy cases to a cheaper model be evaluated end to end rather than component by component?', options: ['Because the cheaper model cannot be evaluated on the same suite as the larger one it replaces', 'Because a bad router costs more than either model alone and answers worse than both', 'Because routing changes which tokenizer applies to the input at each stage of the request', 'Because the escalation rate between the two models can only be computed per component'], correct: 1 },
  ],
};

export default evM4;
