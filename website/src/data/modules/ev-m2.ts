import type { CourseModule } from '../../types/course';

const evM2: CourseModule = {
  id: 'ev-m2',
  title: 'Building Eval Sets',
  icon: 'layers',
  summary: 'Sourcing real cases, curating golden datasets, choosing metrics, writing rubrics both humans and models can apply, running LLM judges without fooling yourself, and knowing when the sample is too small to conclude anything.',
  lessons: [
    {
      id: 'ev2l1',
      diagram: 'SourcingEvalCases',
      title: 'Sourcing Real Cases',
      sectionLabel: 'Data',
      slides: [
        {
          heading: 'Production Is the Only Honest Source',
          body: 'Cases invented in a meeting room encode your assumptions about usage; cases pulled from logs encode usage. The difference shows up immediately — real inputs are messier, shorter, more ambiguous, full of typos, pasted formatting, missing context, and questions the product was never designed to answer. That mess is the distribution you are actually serving, and a suite built without it will report high scores on a system users find unreliable. So the first infrastructure decision in any AI product is logging designed for replay: the full input, the retrieved context, the assembled prompt, tool calls and results, the final output, and enough metadata to reconstruct the run. Without replayable logs you can collect complaints but you cannot build cases from them.',
          bullets: [
            'Log for replay, not just for debugging — capture context and assembled prompts',
            'Real inputs are messier than imagined ones in ways that change results',
            'Record the metadata you will want to slice on later: channel, segment, language, size',
          ],
        },
        {
          heading: 'Sampling Deliberately',
          body: 'You cannot label everything, so how you sample determines what your suite can see. Random sampling gives you an unbiased picture of the common path and almost no coverage of rare failures. Stratified sampling across the slices you care about guarantees each one is represented well enough to measure. Failure-weighted sampling targets sessions with implicit distress signals — retries, rephrasings, abandonment, escalation to a human, thumbs-down — which is where the highest-value cases concentrate. Novelty sampling picks inputs unlike anything already in the set, using embedding distance, and is how you stop the suite calcifying around last quarter\'s traffic. Run all four with a fixed budget for each, and record which strategy produced each case so you can reason about the resulting mix rather than inheriting it blindly.',
          bullets: [
            'Random for the baseline, stratified for coverage, failure-weighted for value',
            'Implicit signals — retry, rephrase, abandon, escalate — beat explicit feedback in volume',
            'Novelty sampling by embedding distance keeps the set from calcifying',
            'Tag each case with its sampling origin; a set of unknown composition cannot be interpreted',
          ],
        },
        {
          heading: 'Synthetic Cases and Their Ceiling',
          body: 'Synthetic generation earns its place in three specific situations: before launch when no traffic exists, for rare-but-critical scenarios that real data will not supply in useful numbers, and for systematic perturbation of existing cases — the same request in another language, with a typo, with an unusual format, at ten times the length. What synthetic data does not do is tell you what users will actually ask, because it is generated from the same assumptions your prompt already encodes and inherits the generating model\'s stylistic distribution. A suite that is mostly synthetic tends to be clean, uniform, and quietly easier than reality. Use synthetic cases to fill known gaps, mark them clearly, and treat replacing them with real cases as ongoing work rather than an optional cleanup.',
          bullets: [
            'Good for cold start, rare critical scenarios, and systematic perturbation',
            'Bad at anticipating real user intent — it inherits your assumptions',
            'Label synthetic cases explicitly and track what proportion of the set they are',
            'Perturbing real cases is usually higher value than generating fresh ones',
          ],
        },
        {
          heading: 'Privacy, Consent, and Handling',
          body: 'Production data is the best eval source and the one with legal weight attached. Before a single real transcript lands in a repository, settle four questions: does your privacy notice and lawful basis cover secondary use for testing, what is redacted or pseudonymised on the way in, who can read the eval set, and how long cases are retained. Detect-and-redact pipelines for personal data are standard and imperfect, so pair them with access controls rather than trusting them alone. Where the domain is regulated, expect that constructing minimally realistic surrogates — same structure and difficulty, synthetic identifiers — is the only viable route, and budget the extra work. The failure to avoid is the common one: a golden dataset of genuine customer records sitting in a public source repository because nobody asked the question early.',
          bullets: [
            'Confirm lawful basis and notice coverage for secondary use before collecting',
            'Redact or pseudonymise on ingest, then still control access to the set',
            'Set retention rules for cases the same way you would for the source logs',
            'In regulated domains, plan for structure-preserving surrogates from the start',
          ],
        },
      ],
    },
    {
      id: 'ev2l2',
      diagram: 'GoldenDataset',
      title: 'Golden Datasets and Curation',
      slides: [
        {
          heading: 'Anatomy of a Case',
          body: 'A case is more than an input and an expected answer. To be replayable and interpretable it needs the input as the user supplied it, any environment or state the system depends on, the expected outcome expressed in whatever form is gradable — a reference answer, a set of required facts, a rubric, a post-condition on the world — plus the grader to apply, slice tags, a difficulty marker, and provenance recording where the case came from and who labelled it. Provenance is the field teams skip and later need most: when a case is disputed, knowing whether it came from a production incident, a domain expert, or a generation script determines how much authority it carries. Store cases as versioned structured data in the repository, not in a spreadsheet whose edit history is a mystery.',
          bullets: [
            'Input, environment, expected outcome, grader, tags, difficulty, provenance',
            'Expected outcome can be a reference, a fact list, a rubric, or a post-condition',
            'Provenance settles disputes about whether a failing case is the system\'s fault',
            'Version-controlled structured files beat spreadsheets for anything you will regenerate',
          ],
        },
        {
          heading: 'Curation Is Ongoing Work',
          body: 'Sets rot. Cases go stale when the product changes, when the underlying data they reference is updated, or when the correct answer moves. Duplicates accumulate as similar production failures get filed repeatedly, silently over-weighting whatever failure mode was fashionable last month. Saturated cases — passed by every candidate system — consume compute and contribute nothing. And some cases are simply wrong: the expected answer was mislabelled, and until someone rechecks it, every model that answers correctly is scored as failing. Schedule curation rather than hoping for it. Deduplicate by embedding similarity, re-verify a sample of expected outputs each cycle, retire saturated cases, and be particularly suspicious of any case that every model fails — that is far more often a broken case than a universally hard task.',
          bullets: [
            'Deduplicate by similarity; repeated filings quietly reweight your metric',
            'Retire saturated cases and promote newly discriminative ones',
            'A case every system fails is usually mislabelled — check before treating it as a target',
            'Re-verify a rotating sample of expected outputs; ground truth decays',
          ],
        },
        {
          heading: 'Development and Held-Out Splits',
          body: 'The moment you start iterating against a set, you begin fitting to it — reading its failures, tuning prompts around its quirks, and improving on it faster than on reality. The standard defence transfers directly from machine learning: split. A development set is what you iterate against daily, inspect freely, and debug with. A held-out set is run rarely, at decision points, by someone who is not tuning against it, and is never read case by case for prompt inspiration. When development and held-out scores diverge, the gap is a direct measure of how much of your recent progress was overfitting. Refresh both from production periodically, and if the held-out set has been examined in detail, accept that it has been burned and rotate in a fresh one.',
          bullets: [
            'Iterate on dev, decide on held-out, and keep the roles strictly separate',
            'A widening dev-versus-held-out gap is your overfitting signal',
            'Reading the held-out set in detail spends it — plan for rotation',
            'Refresh both splits from production so they track the current distribution',
          ],
        },
        {
          heading: 'How Big, and How to Grow',
          body: 'The right size is driven by what you need to detect, not by a round number. Small sets — tens of cases — support fast iteration and catching gross breakage, and cannot resolve small differences. Detecting a few points of change reliably requires hundreds, and the arithmetic in the next lesson explains why. The practical path is to start with a few dozen carefully labelled real cases per critical slice, use them immediately, and grow from production evidence: every incident becomes a case, every recurring complaint becomes a case, every new feature ships with cases. Quality dominates quantity at every size, because a thousand cases with sloppy expected outputs produce a confident number that means nothing at all.',
          bullets: [
            'Start at a few dozen real cases per critical slice and ship them into CI immediately',
            'Small sets catch breakage; resolving small deltas needs hundreds',
            'Grow from incidents and complaints, not from generation scripts',
            'Sloppy labels at scale yield confident, meaningless numbers',
          ],
        },
      ],
    },
    {
      id: 'ev2l3',
      diagram: 'TaskVsQualityMetrics',
      title: 'Task Completion vs Output Quality',
      slides: [
        {
          heading: 'Two Different Questions',
          body: 'Evaluation metrics divide into two families that answer different questions and are constantly conflated. Task completion asks whether the job got done: was the refund issued, does the generated code compile and pass its tests, did the extraction capture every required field, is the ticket now in the right state. It is objective, usually checkable in code, and maps directly to user value. Output quality asks how good the artefact is on dimensions with no crisp definition: clarity, tone, faithfulness to sources, appropriate hedging, structure. It needs rubrics and judges. Most systems need both, but they should never be blended into a single score — a beautifully written answer that fails the task is a failure, and a terse answer that succeeds is a success with a style note.',
          bullets: [
            'Task completion is binary and checkable; quality is graded and subjective',
            'Report them separately — a blended score hides which one moved',
            'When they conflict, completion is the primary metric',
            'Many teams measure only quality because it is easier to prompt a judge for',
          ],
        },
        {
          heading: 'Decompose Before You Measure',
          body: 'An end-to-end pass rate tells you the system failed but not where, which makes it a poor debugging instrument on its own. Decompose the pipeline and measure each stage against its own ground truth: did retrieval surface the document that contains the answer, did the router classify the intent correctly, did the model select the right tool with well-formed arguments, was the tool result interpreted correctly, does the final output satisfy the task. Stage metrics localise faults instantly and prevent the classic misdiagnosis where a retrieval failure is blamed on the model and answered with an expensive upgrade that changes nothing. Keep the end-to-end number as the headline — stage metrics that improve while the end-to-end rate stays flat are a warning that you are optimising a stage that was never the bottleneck.',
          bullets: [
            'Per-stage ground truth: retrieval hit, intent class, tool choice, argument validity, final outcome',
            'Most "the model is not good enough" reports are retrieval or context failures',
            'Stage gains with flat end-to-end results mean you fixed a non-bottleneck',
          ],
        },
        {
          heading: 'Binary Beats Five-Point',
          body: 'When defining what counts as success, prefer several independent binary checks to one graded scale. Humans and models both apply binary criteria far more consistently — the difference between a three and a four on a five-point scale is exactly where inter-rater agreement collapses, and it varies by rater, by mood, and by what they graded immediately before. Decompose the quality you care about into concrete yes-or-no criteria: does it cite a source for every factual claim, does it stay within scope, does it avoid asserting anything absent from the provided context, does it follow the required format. You get a percentage from the criteria that pass, a diagnostic breakdown of which one failed, and a definition of good that survives being handed to a new reviewer.',
          bullets: [
            'Several binary criteria beat one Likert scale for consistency and diagnosis',
            'Mid-scale distinctions are where rater agreement falls apart',
            'A per-criterion breakdown tells you what to fix; a score of 3.6 does not',
            'Reserve partial credit for cases where the task genuinely has degrees',
          ],
        },
        {
          heading: 'Counting Partial Credit Honestly',
          body: 'Some tasks genuinely admit partial success — extracting seven of nine fields, completing four of five steps — and the temptation is to average everything into a tidy percentage. Be careful, because averaging assumes the components are interchangeable and they usually are not. Missing an optional field and missing the identifier that keys the record are not the same event, and a mean treats them identically. Where components differ in consequence, weight them or, better, define a hard requirement set that must all pass for the case to count as completed, with the remainder reported as a separate quality dimension. State the rule explicitly in the case definition, because implicit partial-credit conventions are among the most common reasons two teams compute different numbers from the same runs.',
          bullets: [
            'Averaging components assumes they matter equally — they rarely do',
            'Define a must-pass core and grade the remainder separately',
            'Write the partial-credit rule into the case; implicit conventions diverge',
          ],
        },
      ],
    },
    {
      id: 'ev2l4',
      diagram: 'SharedRubric',
      title: 'Rubrics Humans and Models Can Both Apply',
      slides: [
        {
          heading: 'The Rubric Is the Specification',
          body: 'Writing a rubric feels like documentation and is actually specification work — it is where the vague ambition of a good answer becomes a set of testable statements. That is why rubric-writing surfaces disagreements the team did not know it had: two people who both want accurate summaries turn out to mean different things by accurate, and the rubric is where that gets resolved instead of relitigated in every review. Because the rubric doubles as the instruction set for both human reviewers and model judges, it has to be written for someone with no additional context: no references to internal conventions, no criteria that depend on knowing what the team discussed last month, and no words like appropriate or reasonable standing alone without a definition of what they mean here.',
          bullets: [
            'Rubric-writing is where implicit quality standards become explicit and arguable',
            'Write for a competent stranger — no unexplained internal context',
            'Undefined words like appropriate, clear, and reasonable are where consistency dies',
            'The same rubric drives human labelling and model judging, so it must serve both',
          ],
        },
        {
          heading: 'Anatomy of a Criterion',
          body: 'A criterion that survives contact with multiple raters has four properties. It is atomic, testing exactly one thing — compound criteria joined by and produce a single verdict on two questions and make disagreement impossible to diagnose. It is observable from the output plus its inputs, requiring no knowledge the rater does not have. It is decidable, phrased so a careful reader reaches a yes or no without weighing competing considerations. And it is anchored with examples: at minimum one clear pass, one clear fail, and one borderline case with the ruling and the reason. Anchor examples do more work than any amount of additional prose, because they convert an abstract standard into a demonstrated boundary — and they can be dropped straight into a judge prompt as few-shot guidance.',
          bullets: [
            'Atomic: split every criterion containing "and" into separate checks',
            'Observable: graders can only see the output, the input, and the provided context',
            'Anchored: pass, fail, and borderline examples with the reasoning attached',
            'Anchor examples double as few-shot examples for a model judge',
          ],
        },
        {
          heading: 'Iterate the Rubric on Disagreement',
          body: 'The first version of a rubric is always underspecified, and the way to find out where is to have two people apply it independently to the same twenty cases and then examine every disagreement. Each one is a defect in the rubric, not a defect in a rater: it marks a place where the wording admits two readings. Fix the wording, add an anchor covering the disputed situation, and rerun until agreement is high enough to be useful. Only then is the rubric ready for a model judge, because a rubric humans cannot apply consistently will produce noise from a model too — with the added hazard that the model produces its noise fluently and with a confident explanation attached. Rubric development is cheap at this stage and expensive after you have labelled a thousand cases with an ambiguous version.',
          bullets: [
            'Two independent raters on the same small sample, then examine every disagreement',
            'Each disagreement is a rubric defect — fix wording and add an anchor',
            'Reach human consistency before automating; a judge inherits every ambiguity',
            'Freeze and version the rubric once labelling starts; changing it invalidates prior labels',
          ],
        },
      ],
    },
    {
      id: 'ev2l5',
      diagram: 'LLMJudgeBias',
      title: 'LLM-as-Judge, Done Properly',
      slides: [
        {
          heading: 'Why Judges, and What They Actually Are',
          body: 'Many properties worth measuring resist code — whether a summary is faithful to its source, whether an explanation would satisfy the person who asked, whether a refusal was warranted. Human review answers these and does not scale to every change on every pull request. A model judge closes the gap and now underpins most serious eval pipelines. The framing that keeps teams honest is to treat the judge as a measuring instrument: a device with a resolution, a bias profile, and a calibration state. You would not trust an uncalibrated instrument in any other engineering discipline, and an uncalibrated judge is worse than no metric because it produces a confident number with an articulate justification attached, which is far harder to disbelieve than silence.',
          bullets: [
            'Judges exist for properties no assertion can express — not as a default grader',
            'Treat a judge as an instrument with bias and calibration, not an oracle',
            'A fluent wrong grade is more dangerous than a missing grade',
            'Every judge is a second AI system in your stack, with its own failure modes',
          ],
        },
        {
          heading: 'Prompting a Judge Well',
          body: 'Judge quality is mostly prompt design, and the same handful of choices account for most of the gap between a useful judge and a random number generator. Give it the rubric with its anchor examples rather than a bare instruction. Ask for one criterion at a time; a judge asked for six dimensions in one call tends to produce correlated scores that mostly reflect a general impression. Require a short justification before the verdict, not after, so the label is conditioned on the reasoning rather than rationalising a snap decision. Demand structured output so parsing never becomes a second source of error. Provide reference answers where they exist, since grading against a reference is a far easier task than grading in the abstract. And avoid open numeric scales — a request to rate something out of ten produces clustering and drift that no amount of prompt tuning removes.',
          bullets: [
            'One criterion per call, with the rubric and anchors included',
            'Reasoning first, then a structured verdict — order matters',
            'Reference answers turn an open judgement into a comparison',
            'Binary or few discrete levels; open 1–10 scales drift and cluster',
          ],
        },
        {
          heading: 'The Bias Profile',
          body: 'Judge biases are documented, reproducible, and largely mitigable if you design for them. Position bias: in pairwise comparisons, judges systematically favour one position, so run both orderings and treat order-dependent verdicts as ties rather than data. Verbosity bias: longer answers score higher at equal quality, so control for length in comparisons and watch whether your outputs are getting longer as scores improve. Self-preference: models favour text resembling their own generation style, so avoid grading a family with itself where you can. Beyond these, judges reward confident phrasing over hedged accuracy, are influenced by formatting and markdown structure, and can be swayed by assertions inside the content being graded — which makes a judge one more component with a prompt-injection surface.',
          bullets: [
            'Position bias: always swap orderings; disagreement across orders means tie',
            'Verbosity bias: control for length, and monitor output length as a side effect of tuning',
            'Self-preference: judge with a different model family than you generate with where feasible',
            'Judges read attacker-influenced content — treat graded text as untrusted input',
          ],
        },
        {
          heading: 'Calibration Against Human Labels',
          body: 'A judge is only a metric once you have measured it against the ground truth it is standing in for. The procedure is unglamorous and non-negotiable: take a sample of cases, have your domain expert label them by the same rubric, and compare — not with a single accuracy figure but as a classification problem. Where does the judge produce false passes, where false failures, and is the error systematic on a particular slice? Compare its agreement with humans against how well two humans agree with each other, because that human ceiling is the realistic upper bound and a judge close to it is doing well. Then re-validate whenever anything changes: a new judge model, a rubric edit, a shift in output distribution. Provider-side model updates can move judge behaviour without any change on your side, which is why holding the judge version stable and re-checking periodically matters.',
          bullets: [
            'Compare judge to human labels as a confusion matrix, not one accuracy number',
            'Benchmark judge-human agreement against human-human agreement, the realistic ceiling',
            'Re-validate on every judge change, rubric edit, or major output shift',
            'Pin the judge model where the platform allows; silent updates move your metric',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Calibration sounds like a project and is really one afternoon with twenty cases. It is also the only step that turns a judge score from an opinion into a measurement.',
          exercise: {
            task: 'Take twenty outputs from an AI feature you ship, are building, or use daily — with none of your own, collect twenty answers from an AI product you rely on. Choose one binary criterion from your rubric, label all twenty yourself first, then run the judge prompt below over the same twenty and compare. Count the disagreements in two directions: how many the judge passed and you failed, and how many it failed and you passed. Then read every disagreement and say what wording in the criterion allowed two honest readings — almost all of them are a rubric bug, not a judge bug.',
            copyText: 'You are grading one criterion only.\n\nCriterion: [one yes/no criterion, in observable terms]\nClearly passes: [an example, and why]\nClearly fails: [an example, and why]\nBorderline: [a case near the line, with the ruling and the reason]\n\nInput the system was given:\n[paste]\n\nOutput to grade:\n[paste]\n\nWrite two sentences of reasoning first. Then put the verdict on the last line, as exactly PASS or FAIL.',
            selfCheck: [
              'Each of the twenty items carries two recorded labels — yours, written before you saw the judge\'s',
              'The disagreements are reported as two counts, not one: judge-passed-you-failed and judge-failed-you-passed',
              'At least one disagreement produced an edit to the criterion wording or a new anchor example',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Using one AI to grade another is standard practice and works reasonably well — provided someone has checked the grader against human judgement. Unchecked, it produces confident scores that can be systematically wrong in ways nobody notices.',
          bullets: [
            'AI graders have known quirks: they favour longer, more confident-sounding answers',
            'The right question about any AI quality score is whether humans verified the grader',
            'A number with no human calibration behind it is an opinion in numeric clothing',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'When a vendor quotes AI quality or detection-accuracy figures, the judging methodology is the part worth interrogating. Position, verbosity, and self-preference bias are concrete, citable failure modes that turn a vague "how do you know" into a specific technical question few vendors can answer.',
          bullets: [
            'Ask: who or what produced these scores, and was the judge validated against human labels?',
            'A vendor grading its own model family with its own model is a self-preference problem — name it',
            'Judges consume untrusted content, so ask how their grading pipeline handles injection',
            'Offer the reverse: agree a rubric with the customer and let both sides grade the same pilot outputs',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build the judge like any other component you depend on: versioned prompt, structured output, pinned model, and a calibration test that runs against a human-labelled sample. An unvalidated judge silently converts your eval suite into theatre.',
          bullets: [
            'One criterion per judge call, rubric plus anchors in the prompt, reasoning before verdict',
            'Run both orderings for pairwise comparisons and record order-dependent results as ties',
            'Keep a human-labelled calibration set in CI so judge drift fails a test, not a launch',
            'Log every judge input and output — you will need them when a grade is disputed',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Automated judging is what makes evaluation affordable at client scale, and it is also where a programme quietly loses credibility. Insist that a human-labelled calibration sample is a deliverable, not an optional extra, and that the judge is re-validated whenever the rubric or model changes.',
          bullets: [
            'Budget domain-expert time for calibration labelling in every engagement plan',
            'Report judge-human agreement alongside every judge-derived metric',
            'Beware judge-derived KPIs in contracts unless calibration is contractually maintained',
            'Model updates can move a judge without notice — schedule periodic re-validation',
          ],
        },
      ],
    },
    {
      id: 'ev2l6',
      diagram: 'EvalStatistics',
      title: 'Agreement, Significance, and Sample Size',
      slides: [
        {
          heading: 'Measuring Agreement Properly',
          body: 'Before trusting labels — human or model — measure how consistently they can be produced. Raw percentage agreement is the intuitive metric and it flatters badly on skewed data: if ninety-five percent of cases are passes, two raters who both label everything pass agree ninety-five percent of the time while conveying no information. Chance-corrected measures exist for exactly this. Cohen\'s kappa handles two raters on categorical labels, Fleiss\' kappa extends to more, and Krippendorff\'s alpha copes with missing data and ordinal scales. Whichever you use, the number to care about is not an absolute threshold from a textbook but whether agreement is high enough that the differences you want to detect are larger than the noise in the labels.',
          bullets: [
            'Raw agreement is misleading whenever the label distribution is skewed',
            'Cohen\'s kappa for two raters, Fleiss\' for more, Krippendorff\'s alpha for messier designs',
            'Low agreement means the rubric is ambiguous — fix wording, do not average the noise',
            'Label noise sets a hard floor on the smallest effect your suite can resolve',
          ],
        },
        {
          heading: 'Sample Size Is Arithmetic, Not Opinion',
          body: 'Teams routinely draw conclusions from twenty cases that the data cannot support. The arithmetic is straightforward: a measured pass rate around eighty percent on thirty cases carries a confidence interval of roughly plus or minus fourteen points, so a move from eighty to eighty-five is entirely consistent with nothing having changed. Precision improves with the square root of sample size, which means halving the interval requires quadrupling the cases — the reason detecting small deltas demands hundreds. Two practical consequences follow. Match your sample size to the effect size you need to detect, deciding what difference would actually change a decision before you run anything. And when a result is too close to call, say so; reporting a two-point gain from a small set as an improvement is how eval suites lose credibility.',
          bullets: [
            'Compute a confidence interval for every rate you report — a bare percentage overstates certainty',
            'Precision scales with the square root of n: four times the cases for half the interval',
            'Decide the effect size worth detecting before choosing the sample size',
            '"Too close to call" is a legitimate, valuable result',
          ],
        },
        {
          heading: 'Compare Variants the Cheap Way',
          body: 'The most effective way to get more statistical power without more cases is to compare variants on the same cases rather than on separate samples. Paired comparison removes case difficulty from the equation: you are no longer asking whether one sample scored higher, but on how many individual cases the outcome flipped and in which direction. Because most cases either pass or fail under both variants, the informative signal concentrates in the disagreements, and paired analysis reads them directly. Bootstrap resampling over the case set gives an interval for the difference without distributional assumptions. And watch multiple comparisons: evaluating ten prompt variants and celebrating the best one is a procedure that produces a winner from pure noise reliably enough that you should assume it has, unless the margin is large or the result replicates on held-out cases.',
          bullets: [
            'Always compare variants on identical cases — pairing is free statistical power',
            'The signal lives in cases where the two variants disagree',
            'Bootstrap the difference to get an interval without distributional assumptions',
            'Testing many variants manufactures winners — confirm the leader on held-out cases',
          ],
        },
        {
          heading: 'When Human Review Is Unavoidable',
          body: 'Automation has limits that no judge design removes, and recognising them is a mark of maturity rather than a failure of engineering. Human review is required when the stakes make an undetected error unacceptable — clinical, legal, financial, or safety-critical outputs. It is required for genuinely novel domains where no ground truth exists yet, because a judge can only apply a rubric someone has already written. It is required for the subjective heart of a product — whether a response is actually useful to this person in this situation — and for regulatory contexts where a human decision-maker is the point. The workable pattern is layered: automated grading over everything for coverage and trend, human review over a stratified sample for calibration, and mandatory human review on the highest-consequence slice, with disagreements between the two feeding straight back into the rubric.',
          bullets: [
            'High stakes, novel domains, deep subjectivity, and regulatory review resist automation',
            'Layer it: automate for coverage, sample for calibration, mandate review where it counts',
            'Route every human-judge disagreement back into the rubric — that is the improvement loop',
            'Budget reviewer time as a permanent operating cost, not a one-off project expense',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why is failure-weighted sampling of production traffic especially valuable when building an eval set?', options: ['It is the cheapest form of sampling to implement over an existing trace store', 'It gives an unbiased estimate of overall system quality across the live traffic mix', 'Sessions with retries, rephrasings, or escalations concentrate the highest-value cases', 'It removes the need for a privacy review, since failed sessions carry less personal data'], correct: 2 },
    { q: 'What is the main limitation of a mostly synthetic eval set?', options: ['Synthetic cases are too expensive to generate at the scale a real suite needs', 'It inherits the assumptions of whatever generated it, so it cannot reveal what users ask', 'Synthetic cases cannot be graded automatically, because they have no reference output to check', 'Model judges systematically score synthetic inputs higher than they score real user inputs'], correct: 1 },
    { q: 'Why keep a held-out eval set separate from the set you iterate against?', options: ['To reduce the compute cost of running the full suite on every change', 'To satisfy data-retention rules that limit how long cases may be kept', 'Because a held-out set can be graded without writing a rubric for it', 'Because the gap between the two scores measures how much recent progress was overfitting'], correct: 3 },
    { q: 'A case that every candidate system fails is most often a sign of what?', options: ['A mislabelled or broken case that should be re-verified', 'A genuinely hard task that deserves to be prioritised for the next release', 'A judge model too strict for the rubric it has been given', 'Too few runs per case to see the occasional success'], correct: 0 },
    { q: 'Why are several independent binary criteria usually preferable to one five-point quality scale?', options: ['Binary criteria need no rubric, since the question answers itself', 'Five-point scales cannot be applied by model judges, which only emit categorical labels', 'Rater agreement collapses on mid-scale distinctions, while binary checks diagnose what failed', 'Binary criteria always produce higher scores, which makes progress easier to demonstrate to leadership'], correct: 2 },
    { q: 'What is the standard mitigation for position bias in pairwise LLM-as-judge comparisons?', options: ['Raise the judge\'s temperature so its choice of position is randomised', 'Run both orderings and treat order-dependent verdicts as ties', 'Truncate both responses to the same length before showing them', 'Use a larger judge model that is less sensitive to ordering effects'], correct: 1 },
    { q: 'What does it mean to calibrate a model judge properly?', options: ['Tune its temperature until the scores it gives stabilise across repeated runs', 'Ask it to explain each score in detail before committing to a number', 'Compare its labels against human labels and benchmark agreement against the human ceiling', 'Run it three times on each case and take the majority verdict as the label'], correct: 2 },
    { q: 'You measure 80% on 30 cases, change a prompt, and measure 85%. What is the honest conclusion?', options: ['A five-point improvement, large enough to justify shipping the change today', 'The result is within the noise for a sample this small — too close to call', 'The prompt change has caused a regression in some slice you are not measuring', 'The eval set is exhausted and must be replaced with a fresh sample of cases'], correct: 1 },
  ],
};

export default evM2;
