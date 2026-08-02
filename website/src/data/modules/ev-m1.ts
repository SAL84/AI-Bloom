import type { CourseModule } from '../../types/course';

const evM1: CourseModule = {
  id: 'ev-m1',
  title: 'Why Evals Are the Job',
  icon: 'target',
  summary: 'Why vibes-based development collapses at scale, evals as the unit test of probabilistic systems, eval-driven development as a workflow, and the trap of optimising a metric that has drifted from user value.',
  lessons: [
    {
      id: 'ev1l1',
      title: 'Vibes Don\'t Scale',
      sectionLabel: 'Foundations',
      slides: [
        {
          heading: 'The Demo Is Not the System',
          body: 'Every AI feature starts the same way. Someone writes a prompt, tries five or six inputs, and the output looks good. That impression — real, honest, and completely uninformative — is the entire evidence base for most shipped AI systems. It works for a while because early usage is narrow and the builder is also the tester. It stops working the moment the input distribution widens beyond what one person imagined, because the failures that matter are not the ones you thought to try. Vibes measure the intersection of your imagination and your patience. Users occupy the complement of that set: the long tail of phrasings, edge-case documents, hostile inputs, and multi-step tasks where a plausible-looking answer is quietly wrong.',
          bullets: [
            'You test the cases you thought of; users find the ones you didn\'t',
            'Fluent output is a poor accuracy signal — the model is optimised to sound right',
            'Manual spot-checks scale linearly with effort while input variety scales combinatorially',
          ],
        },
        {
          heading: 'The Regression You Never Saw',
          body: 'The specific failure mode that ends vibes-based development is the silent regression. You tighten a system prompt to fix one complaint and quietly break three behaviours nobody re-tested. You swap a model for a cheaper one, confirm your favourite five prompts still work, and lose accuracy on the twelve percent of traffic that involves tables. You add a tool and the agent starts preferring it in situations where it is wrong. None of this produces an exception, a stack trace, or a failing build. It produces slightly worse outputs, distributed across users who mostly do not report them. In deterministic software a regression announces itself; in a probabilistic system it hides inside variance until someone senior notices the product feels worse than it did last quarter.',
          bullets: [
            'Prompt edits have non-local effects — fixing one behaviour perturbs others',
            'Nothing crashes: the failure surface is quality, not availability',
            'Users under-report degradation; they route around it or churn',
            'Without a baseline you cannot distinguish a regression from a bad day',
          ],
        },
        {
          heading: 'Three Questions That Expose the Gap',
          body: 'You do not need a maturity model to know whether a team has an evaluation problem. Three questions do it. First: what percentage of real tasks does the system complete correctly right now, and how confident are you in that number? Second: if a better model shipped this morning, how long until you could tell whether it improves your product? Third: when you changed the prompt last week, what got worse? A team with evals answers all three in minutes, with numbers and confidence intervals. A team without them answers with anecdotes, an estimate of several weeks, and silence. The gap between those two teams is not talent or model access — it is measurement infrastructure, and it compounds monthly.',
        },
      ],
    },
    {
      id: 'ev1l2',
      title: 'Evals as the Unit Test of Probabilistic Systems',
      slides: [
        {
          heading: 'From Assertion to Distribution',
          body: 'A unit test asserts that one input yields one output. That contract is unavailable here: sampling makes outputs stochastic, valid answers have many surface forms, and multi-step systems compound small variations into different trajectories. Evals keep the shape of testing while changing the assertion. Instead of asserting equality you assert a property — the answer contains the correct figure, the JSON validates against schema, the refund was issued, no forbidden tool was called. Instead of pass or fail on one run, you assert on a rate across many. The mental shift that unlocks everything: an eval is not a test that passes, it is a measurement with a value, a distribution, and a trend. You gate on thresholds over that measurement the way you gate on latency budgets, not the way you gate on compilation.',
          bullets: [
            'Assert properties and invariants, never exact strings',
            'The result of an eval is a number with uncertainty, not a boolean',
            'Thresholds are product decisions — pick them deliberately, then hold the line',
          ],
        },
        {
          heading: 'The Grading Ladder',
          body: 'Choose the cheapest grader that can actually decide the question, and climb only when forced. Deterministic checks come first: schema validation, exact or fuzzy match against a reference, regex for required identifiers, unit tests over generated code, database state after a tool call. These are free, instant, and never drift. Next come programmatic heuristics and retrieval metrics — recall of the right chunk, correct tool selected, run stayed under budget. Only then do you reach for a model judge, and only for genuinely subjective properties: faithfulness to a source, tone, whether an explanation would satisfy the asker. Most teams invert this ladder, sending everything to a judge because it is one line of code, then discover their metric is an unvalidated model grading another model with no ground truth anywhere in the loop.',
          bullets: [
            'Deterministic graders: free, fast, drift-proof — use them wherever the answer is checkable',
            'Code execution is the strongest grader available when the output is code',
            'Reserve judge tokens for properties no assertion can express',
            'Every judge you add is another model you now have to validate',
          ],
        },
        {
          heading: 'Levels of the Suite',
          body: 'Mirror the testing pyramid. Component evals target one unit — a classifier prompt, an extraction step, the retriever alone — with many cases, cheap graders, and fast feedback; when quality drops these tell you which stage broke. Pipeline evals run the assembled system end to end on realistic inputs, catching the interaction bugs no component test sees. Trajectory evals apply to agents, grading the path as well as the destination: tools chosen, steps taken, budget consumed, gates respected. Keep the base of the pyramid wide because it is where debugging happens, but never let it substitute for the top — a system can pass every component eval and still fail users, because the failure lives in how the parts compose.',
          bullets: [
            'Component evals localise faults; end-to-end evals prove the product works',
            'Retrieval quality deserves its own metrics — RAG failures are usually retrieval failures',
            'Agent evals grade trajectory and outcome, because a right answer via a forbidden path is a defect',
          ],
        },
        {
          heading: 'Flakiness Is Data',
          body: 'In conventional CI a flaky test is a defect in the test. In eval suites intermittent failure is often a true report about your system: a case that passes seventy percent of the time is telling you that seventy percent of users asking that question get a correct answer. Do not chase it to green by loosening the grader. Record the rate, decide whether it is acceptable for that slice, and treat movement in it as signal. The genuinely broken cases are the ones where the grader is wrong — ambiguous expected answers, rubrics two reviewers read differently, environments that leak state between runs. Fix grader flakiness ruthlessly and preserve system flakiness faithfully; confusing the two is how suites lose the trust that makes them useful.',
          bullets: [
            'Intermittent pass rates describe reality — record them rather than suppressing them',
            'Grader nondeterminism is a bug; system nondeterminism is a measurement',
            'Reset environment state between runs or you are measuring contamination',
          ],
        },
      ],
    },
    {
      id: 'ev1l3',
      title: 'The Cost of Not Having Them',
      slides: [
        {
          heading: 'You Become Unable to Upgrade',
          body: 'The most expensive consequence of missing evals is strategic, not operational: you lose the ability to move. New models arrive constantly, and each one is a potential step change in quality or a step down in cost. A team with a trusted suite runs it against the new model, reads the diff by slice, and decides within a day. A team without one faces a choice between shipping an unmeasured change to production and doing nothing. Most do nothing, which feels safe and is not — the fleet moves, prompt behaviours shift under them, deprecation notices arrive with fixed dates, and the migration eventually happens anyway, under time pressure, with no way to tell what broke. Evals convert model churn from a recurring crisis into a routine, boring upgrade.',
          bullets: [
            'A green suite is a permission slip to adopt a new model the week it lands',
            'Deprecation deadlines do not negotiate — migration without measurement is a leap',
            'Cheaper models are only usable if you can prove they hold quality on your tasks',
          ],
        },
        {
          heading: 'Incident-Driven Development',
          body: 'Without measurement, the feedback loop routes through your users and then through your support queue. The pattern is recognisable: a complaint arrives, someone reproduces it by hand, a prompt gets patched, the fix ships unverified against anything but that one case, and a month later a related failure appears that the patch probably caused. Engineering time drains into reactive triage while the underlying quality of the system stays flat or drifts down. The team feels busy and cannot show progress, because there is no number that moves. Meanwhile the organisational verdict forms anyway — stakeholders decide the AI feature is unreliable based on the same anecdotal evidence you used to build it, and no one can argue because nobody has data.',
          bullets: [
            'Fix-by-anecdote generates as many regressions as repairs',
            'No metric means no way to demonstrate improvement to anyone paying for it',
            'Trust, once lost internally, is far more expensive to rebuild than a suite',
          ],
        },
        {
          heading: 'The Retrofit Tax',
          body: 'Every team eventually builds evals. The only variable is whether they build them early and cheaply or late and expensively. Building early costs a few days: log real inputs, hand-label a small set, write graders while the failure modes are fresh. Building late means reconstructing ground truth for a system already in production, with logs that were never designed to be replayed, with expected outputs nobody recorded, and with a deadline attached — usually a migration or an incident. The retrofit tax is real and it is charged at the worst moment. The counter-argument is always that it is too early, the product is still changing. But the suite is how you learn what the product should be; postponing it postpones the learning, not just the measurement.',
          bullets: [
            'Twenty labelled real cases this week beat a comprehensive framework next quarter',
            'Log inputs, outputs, and context from day one — you cannot label what you did not keep',
            '"Too early for evals" usually means "too early to know if this works," which is the argument for evals',
          ],
        },
      ],
    },
    {
      id: 'ev1l4',
      diagram: 'EvalDrivenLoop',
      title: 'Eval-Driven Development',
      slides: [
        {
          heading: 'Error Analysis Comes First',
          body: 'The most common mistake in starting an eval practice is choosing metrics before looking at data. The order that works is the reverse: pull a sample of real traces — enough to see patterns, reviewed properly rather than skimmed — and read them one by one, writing a short free-text note on each failure. Then group those notes into failure categories that emerge from what you saw, not from a list you downloaded. The distribution is almost always surprising and almost always concentrated: a small number of categories account for most failures, and they are rarely the ones the team was arguing about. Only now do you build metrics, and you build them for the biggest categories first. Metrics chosen before error analysis measure what is easy to measure; metrics chosen after it measure what is actually breaking.',
          bullets: [
            'Read traces before writing graders — the taxonomy must come from your data',
            'Open coding then clustering: free-text notes first, categories second',
            'Failure distributions are concentrated — fix the largest bucket, not the loudest complaint',
            'Repeat error analysis periodically; the distribution shifts as you fix things',
          ],
        },
        {
          heading: 'The Development Loop',
          body: 'Eval-driven development runs the same loop as test-driven development, with rates in place of assertions. Observe a failure in production or analysis. Write it into the eval set as a case with a grader, and confirm the current system fails it — a case that passes before you change anything is measuring nothing. Make the change: prompt, retrieval, tool, model, control flow. Run the full suite, not just the new case, and read the diff both ways — what improved and what regressed. Accept the change only if the aggregate moves the right way and no critical slice degrades. Then ship, watch production, and start again. The discipline that makes this work is running the whole suite every time; the entire value of the practice is catching the regression you were not looking for.',
          bullets: [
            'New case must fail first, or your grader is not testing what you think',
            'Always run the full suite — the point is the regression you did not anticipate',
            'Read wins and losses separately; a flat average can hide a large swap of both',
            'Commit prompt, grader, and cases together so any result is reproducible',
          ],
        },
        {
          heading: 'Who Owns the Definition of Good',
          body: 'Evals encode a product judgement, so someone with product authority has to own them. The failure pattern is delegating the rubric to whoever is writing the harness, which quietly hands the definition of quality to an engineer optimising for what is easy to grade. The pattern that works is a single accountable domain expert — the clinician, the lawyer, the support lead, the security analyst — who labels cases personally at the start, resolves disputes about what counts as correct, and stays in the loop as the arbiter when the judge and the reviewers disagree. Engineers build the machinery; the expert owns the ground truth. When multiple stakeholders each hold a veto over the definition of correct, rubrics drift into vague committee language that nothing can reliably grade.',
          bullets: [
            'One accountable owner for ground truth beats a committee with a shared document',
            'Domain experts label the first cases themselves — do not outsource the seed set',
            'Engineers own graders and harness; the expert owns what correct means',
          ],
        },
        {
          heading: 'Making It Routine',
          body: 'Practices that depend on virtue decay. Wire the loop into the mechanics of how the team ships: a fast subset on every pull request, the full suite nightly, results posted where the team already looks, and a standing slot where someone reviews a sample of production traces and files new cases. Keep the fast subset genuinely fast, because a suite that takes half an hour stops being run before a change. Track the size and coverage of the eval set as a metric in its own right — a suite that has not grown in two months is either a finished product or an abandoned practice, and it is rarely the former.',
          bullets: [
            'Fast subset on every change, full suite nightly, trends visible by default',
            'A recurring trace-review slot is what keeps the set connected to reality',
            'Treat eval-set growth as a health metric for the team, not just the product',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Eval-driven development means a team decides what "correct" looks like, measures it, and only ships changes that move the number the right way. If you are buying or relying on an AI feature, this practice is the difference between a product that improves and one that merely changes.',
          bullets: [
            'Ask any AI vendor how they know a new version is better than the last one',
            '"We tested it thoroughly" without a number means someone tried a few examples',
            'Improvements you can feel but nobody can measure tend not to survive the next update',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'Eval maturity is one of the cleanest discriminators between an engineering-led AI product and a demo with a roadmap. It is also the framing that turns a detection-quality claim into evidence a security buyer can accept, since it mirrors the detection-efficacy testing they already do.',
          bullets: [
            'Discovery question: what is in the regression suite, who owns the ground truth, and what gates a release?',
            'Detection-quality claims without a harness are anecdotes — position your suite as the evidence layer',
            'Frame a proof-of-value as an eval: agree task-completion criteria up front and the pilot grades itself',
            'Ask how the vendor validated their model judges against human labels — most cannot answer',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Do error analysis before you write a single grader, then build the loop into CI so it runs whether or not anyone feels like it. The suite you ship this week at twenty cases beats the framework you design for next quarter.',
          bullets: [
            'Log inputs, assembled prompts, tool calls, and outputs from the first commit',
            'New case fails first, then you change the system — same discipline as TDD',
            'Version cases, rubrics, prompts, and grader code in one repo so results are reproducible',
            'Keep the pre-merge subset under a few minutes or people will route around it',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Most stalled AI projects are measurement failures wearing a technology costume: nobody agreed what good means, so nobody can say whether the pilot succeeded. Establish the eval set and its owner during scoping, before any build work starts.',
          bullets: [
            'Make acceptance criteria a task-completion rate on an agreed case set, defined before the build',
            'Name one accountable domain expert for ground truth — ambiguity here sinks pilots',
            'Budget explicitly for labelling and trace review; clients consistently under-price both',
            'Hand over the eval suite as a deliverable — it outlives every model the client uses',
          ],
        },
      ],
    },
    {
      id: 'ev1l5',
      title: 'What Good Looks Like — and Goodhart\'s Trap',
      slides: [
        {
          heading: 'Properties of a Suite Worth Trusting',
          body: 'A good eval suite is discriminative: it separates systems that differ in quality, which means cases that everything passes and cases nothing passes both carry near-zero information and should be pruned or replaced. It is representative, drawn from the real distribution of usage rather than the tidy examples that came to mind. It is fast enough to run constantly, because a suite run monthly is a report and not a tool. It is trusted, meaning the team believes a failure indicates a real problem — one week of chasing false failures destroys that permanently. And it is versioned alongside the code, because a score is meaningless unless you can say exactly which cases, which graders, and which prompts produced it.',
          bullets: [
            'Prune saturated cases — everything passing means no information',
            'Representative beats comprehensive: match the real input distribution',
            'A distrusted suite is worse than none, because it costs time and still gets ignored',
            'Version cases and graders with code; scores without provenance are decoration',
          ],
        },
        {
          heading: 'Aggregate Scores Hide the Failures That Matter',
          body: 'A single headline number is convenient and routinely misleading. Systems fail unevenly — by input type, by language, by document length, by customer segment, by whether the request is routine or unusual. An aggregate that rises while your highest-value slice falls is a change you would reject if you could see it, and averaging is precisely what stops you seeing it. Report by slice from the beginning, tag every case with the dimensions you care about, and set separate floors on the slices where failure is expensive. The same logic applies to guardrail metrics: a change that improves helpfulness while increasing unsafe outputs or over-refusals is not an improvement, and only a second metric will tell you.',
          bullets: [
            'Tag cases by slice and report per slice — the average is the least informative view',
            'Set hard floors on critical slices; aggregate gains must not buy them off',
            'Pair every primary metric with a guardrail metric that must not move',
            'Track worst-case and tail behaviour, not just the mean',
          ],
        },
        {
          heading: 'Goodhart\'s Trap',
          body: 'When a measure becomes a target it stops being a good measure, and eval suites are unusually easy to game — often unintentionally. You tune prompts against the same fifty cases until the system performs beautifully on them and no better in the world, which is overfitting with extra steps. You adopt a judge that rewards thorough-sounding answers, and your product learns to be verbose. You optimise retrieval recall until the context is stuffed with marginally relevant chunks and answers get worse. Each step was a genuine metric improvement. The defences are structural: hold out a test set the team does not iterate against, refresh cases from production regularly, and keep asking the uncomfortable question of whether the metric still tracks the thing users actually value, or has quietly become its own goal.',
          bullets: [
            'Keep a held-out set you never tune against, and rotate cases in from production',
            'Suspect any metric that improves for several sprints while users report nothing changed',
            'Judges create incentives — check what stylistic behaviour yours is rewarding',
            'Periodically re-derive the metric from user value instead of inheriting last quarter\'s',
          ],
        },
        {
          heading: 'The North Star',
          body: 'Under all the machinery sits one question: what fraction of real user tasks does this system complete to an acceptable standard, at what cost and what latency? Everything else — retrieval recall, judge scores, tool-selection accuracy, rubric dimensions — is a diagnostic that helps you improve that number or explain why it moved. Diagnostics are indispensable and they are not the goal, so when a diagnostic and the north star disagree, the north star wins and the diagnostic is the thing that needs fixing. Teams that keep this hierarchy explicit avoid the most common late-stage failure in eval practice: a dashboard full of green metrics attached to a product that people have stopped using.',
          bullets: [
            'Primary metric: task completion to a defined standard, reported with cost and latency',
            'Component metrics are diagnostics — useful, subordinate, and replaceable',
            'When a proxy and user value diverge, fix the proxy',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What makes silent regressions the characteristic failure of vibes-based AI development?', options: ['They cause the application to crash under load', 'Quality degrades without any error, exception, or failing build to signal it', 'They only occur when switching model providers', 'They are always caused by temperature settings'], correct: 1 },
    { q: 'How does an eval assertion differ from a conventional unit-test assertion?', options: ['Evals assert exact string equality with a reference answer', 'Evals only run in production, never in CI', 'Evals assert properties and measure rates across runs rather than asserting one deterministic output', 'Evals require a model judge for every case'], correct: 2 },
    { q: 'A case in your suite passes 70% of the time. What is the right response?', options: ['Loosen the grader until it passes consistently', 'Record the pass rate as a measurement and watch it for movement', 'Delete the case as flaky', 'Re-run until it passes and record that result'], correct: 1 },
    { q: 'What is the correct order when starting an eval practice?', options: ['Pick standard metrics, then collect data that fits them', 'Buy an eval platform, then decide what to measure', 'Read real traces and cluster failures, then build metrics for the biggest clusters', 'Write synthetic cases covering every feature, then label them'], correct: 2 },
    { q: 'Why should a newly written eval case fail before you change the system?', options: ['Because failing cases are cheaper to run', 'To confirm the grader actually tests the behaviour you intend to fix', 'Because harnesses require a failing baseline to compute scores', 'To satisfy statistical significance requirements'], correct: 1 },
    { q: 'Your aggregate eval score improves after a change. What must you check before shipping?', options: ['That the run completed faster than the previous one', 'That the model version string was recorded', 'Nothing further — a higher aggregate is the definition of improvement', 'Per-slice results and guardrail metrics, in case a critical segment regressed'], correct: 3 },
    { q: 'Which practice best protects an eval suite against Goodhart-style overfitting?', options: ['Maintaining a held-out test set the team never tunes against, refreshed from production', 'Increasing the number of runs per case', 'Using a larger judge model', 'Reporting a single aggregate score to leadership'], correct: 0 },
  ],
};

export default evM1;
