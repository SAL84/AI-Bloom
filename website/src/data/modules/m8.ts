import type { CourseModule } from '../../types/course';

const m8: CourseModule = {
  id: 'm8',
  title: 'Bringing AI into Your SOC',
  icon: 'target',
  summary: 'The operational work of adoption — first use cases, pilots that can fail, metrics that resist gaming, and autonomy earned one action type at a time.',
  lessons: [
    {
      id: 'm8l1',
      title: 'Picking the First Use Case',
      diagram: 'FirstUseCase',
      slides: [
        {
          heading: 'Where AI Earns Its Place First',
          body: 'The first deployment should target work that is high-volume, repetitive, and already well-understood by your team: phishing triage, alert enrichment, drafting incident summaries and ticket updates. These share three properties that matter more than how impressive the technology looks. The work is frequent enough to measure within weeks, not quarters. Your analysts already know what good output looks like, so they can catch bad output. And the AI is producing recommendations or drafts that a human still reads — a wrong answer costs minutes of correction, not an outage. Start where the failure mode is annoyance, because you will encounter the failure mode.',
          bullets: [
            'High-volume triage: enough repetitions to measure a real effect quickly',
            'Enrichment: gathering context analysts would fetch manually anyway',
            'Drafting: summaries and updates a human reads before anything happens',
            'Common thread: humans already know what good looks like and stay in the path',
          ],
        },
        {
          heading: 'Where Never to Start',
          body: 'Do not start with autonomous response. Isolating hosts, disabling accounts, blocking traffic, deleting email — anything that acts on production or touches users — is the worst possible first use case, because a single early mistake costs you the political capital the whole program runs on. An AI that wrongly closes an alert can be caught by sampling; an AI that wrongly disables the CFO\'s account is a story that outlives every future proposal. The same logic rules out anything irreversible or externally visible: customer notifications, takedown requests, changes to detection logic in production. These may become viable later. As a first move they convert one bad output into an organizational verdict on AI itself.',
          bullets: [
            'No autonomous response actions of any kind in a first deployment',
            'Nothing irreversible: deletions, account changes, external communications',
            'One visible early failure taxes every future proposal, fairly or not',
            '"The demo showed containment" is a reason to be careful, not a reason to start there',
          ],
        },
        {
          heading: 'The Three Criteria That Make a Good First Use Case',
          body: 'Test every candidate against three criteria. Measurable baseline: you can state today\'s numbers — alerts per day, minutes per triage, escalation rate — before the AI arrives. If you cannot measure the current state, you cannot demonstrate improvement, and "it feels faster" will not survive a budget review. Tolerable failure: when the AI is wrong, and it will be, the cost is bounded and the error is catchable in normal workflow. Bounded scope: one alert type, one queue, one team — a perimeter you can actually watch. A use case that fails any one of these is not a first use case, whatever the vendor roadmap says. It may be a fine third one.',
          bullets: [
            'Measurable baseline: current numbers written down before deployment, not reconstructed after',
            'Tolerable failure: the wrong answer is cheap and gets caught in normal workflow',
            'Bounded scope: one queue or alert type, not "the SOC"',
            'Failing one criterion disqualifies it as a first use case — not necessarily forever',
          ],
        },
        {
          heading: 'The Anti-Patterns That Feel Like Good Ideas',
          body: 'Three starting points recur because they feel bold, and fail for the same reason: no baseline, intolerable failure, or unbounded scope. Starting with your hardest problem — the sophisticated intrusions your best analysts struggle with — fails because if seniors cannot reliably judge the answer, nobody can judge the AI\'s. Starting wherever the vendor demo was most impressive fails because demos are optimized to be impressive, not representative of your telemetry. Starting everywhere at once fails because a dozen half-watched deployments produce no defensible evidence about any of them. The boring first use case is a feature. It generates the measured win that funds the ambitious second one.',
          bullets: [
            'Hardest-problem-first fails: no one can verify answers your seniors cannot',
            'Demo-driven selection optimizes for the vendor\'s best case, not your workload',
            'Deploying broadly at once means no deployment gets watched properly',
            'A boring, measured win buys more future scope than an ambitious, unmeasured one',
          ],
        },
      ],
    },
    {
      id: 'm8l2',
      title: 'A Pilot That Proves Something',
      diagram: 'ProvingPilot',
      slides: [
        {
          heading: 'Write the Success Criteria Before the Pilot Starts',
          body: 'The defining property of a real pilot is that its success criteria exist in writing before the first alert flows through the system. "Reduce median phishing triage time from 18 minutes to under 8, measured across six weeks, without escalation quality dropping below current levels" is a criterion. "See how it performs" is not — it is a plan to decide afterwards whether whatever happened counts as success, and afterwards, with a vendor relationship in motion and internal sponsors invested, the answer is always yes. Criteria written after exposure to results are indistinguishable from criteria fitted to results. The pilot that cannot fail teaches you nothing, and everyone in the room quietly knows it.',
          bullets: [
            'Numeric targets, measurement method, and time window fixed before day one',
            'Include a quality floor, not just a speed target — fast and wrong is worse than slow',
            'Post-hoc criteria always get fitted to whatever the results turned out to be',
            'If no conceivable result would count as failure, it is a rollout wearing a pilot\'s badge',
          ],
        },
        {
          heading: 'Baseline First: Measure the Team You Have',
          body: 'A pilot compares two states, and most teams only measure one of them. Before deployment, spend two to four weeks instrumenting current operations: median and 90th-percentile time-to-triage per alert category, daily volumes, escalation rates, how often closed alerts are reopened. This is unglamorous and teams skip it because the AI is already licensed and everyone wants to see it run. But without the baseline, the pilot ends in a number with nothing to stand next to — "the AI triages in 4 minutes" means nothing if nobody recorded that analysts averaged 6. The baseline also surfaces problems AI will not fix, like alerts nobody was reviewing at all. Those belong in the honest accounting too.',
          bullets: [
            'Two to four weeks of baseline measurement before the AI touches anything',
            'Capture distributions, not just averages — the 90th percentile is where pain lives',
            'Record escalation and reopen rates as your quality reference points',
            'Baselining often reveals process debt no AI purchase will address',
          ],
        },
        {
          heading: 'Why "The Analysts Liked It" Is Not an Outcome',
          body: 'Analyst sentiment matters — a tool the team refuses to use fails regardless of its benchmarks — but it is a precondition, not a result. New tools benefit from novelty, from relief at attention finally paid to the tier-one grind, and from the basic human tendency to be agreeable in a feedback survey the vendor helped write. None of that tells you whether triage got faster or whether escalations got better. Sentiment is also the metric most easily harvested and least easily audited, which is exactly why weak pilots lean on it. Collect it, take it seriously as an adoption signal, and refuse to let it substitute for the operational numbers. A pilot that reports only satisfaction scores has reported nothing.',
          bullets: [
            'Sentiment is an adoption precondition, not evidence of operational improvement',
            'Novelty and survey framing inflate early enthusiasm predictably',
            'If the final readout leads with satisfaction scores, ask what is being buried',
            'The pairing that matters: analysts like it AND the measured numbers moved',
          ],
        },
        {
          heading: 'Failure Modes, and the Kill Criteria That Guard Against Them',
          body: 'Three failure modes account for most pilots that mislead. Demo data: the evaluation runs on vendor-supplied or sanitized alerts instead of your live queue, with its broken log sources and ambiguous internal traffic. Cherry-picked periods: six quiet weeks in August prove little about the year. No control group: if the whole team gets the tool while workflows are simultaneously reorganized, nothing attributes the improvement. Run on live data, across a representative window, with a comparison queue or team where feasible. Then write the kill criteria: the specific results — missed true positives above a threshold, triage quality below the floor — that end the project. Deciding what kills the pilot after the pilot means nothing kills the pilot.',
          bullets: [
            'Live alerts from your own queue, or the results describe someone else\'s SOC',
            'Representative time window — long enough to include normal chaos',
            'A control queue or team turns "things improved" into "the AI improved things"',
            'Kill criteria written in advance are the only ones that ever fire',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'The hardest part of a pilot is agreeing, in advance, what result would make you walk away. Write that down now, while nothing is at stake.',
          exercise: {
            task: 'For a tool you are piloting or about to pilot, fill in the scaffold below and get one other person to agree to it in writing before the pilot starts. Date it.',
            copyText: 'The pilot: [tool, scope, how long]\n\nBaseline we measured FIRST: [the current number, measured before the tool arrives]\n\nSuccess means: [a specific number or threshold, not a feeling]\n\nWe kill it if: [the result that ends the project — decided now, not later]\n\nWho decides, and when: [name, date]\n\nWhat we will NOT count as evidence: [demo data, a good week, positive impressions]',
            selfCheck: [
            'The kill criterion is specific enough that it could actually be met',
            'The baseline is a number you measured, not one you assumed',
            'A second person has agreed to the whole thing in writing, before the start',
            ],
          },
        }
      ],
    },
    {
      id: 'm8l3',
      title: 'Metrics That Survive Contact',
      diagram: 'SOCMetrics',
      slides: [
        {
          heading: 'The Four Metrics Worth Tracking',
          body: 'Four measurements capture most of what AI-assisted triage changes. Time-to-triage: how long from alert arrival to a dispositioned decision, tracked as a distribution per alert category. False-positive burden: how many analyst-minutes per day go to alerts that end in benign dispositions. Escalation quality: of the cases sent up a tier, what fraction the receiving tier judges worth the escalation — measured by asking them, not by assuming. Analyst hours returned: time genuinely freed for hunting, detection engineering, or tuning, verified by where the hours actually went. Each is measurable, each ties to something the SOC exists to do, and each — this is the catch — can be gamed. The next slides are about the gaming.',
          bullets: [
            'Time-to-triage as a distribution per category, not one blended average',
            'False-positive burden in analyst-minutes, the unit fatigue is denominated in',
            'Escalation quality judged by the receiving tier, not the sending one',
            'Hours returned counts only if you can show where the hours went',
          ],
        },
        {
          heading: 'Goodhart\'s Law, SOC Edition',
          body: 'When a measure becomes a target, it stops being a good measure — and each of the four fails in its own way once it becomes the number leadership watches. Optimize time-to-triage and the system learns that closing fast scores well, so dispositions get quicker and shallower; speed without a paired quality floor measures haste. Optimize false-positive burden and the cheapest path is dismissing more aggressively, converting analyst fatigue into silent misses. Optimize escalation quality and the AI escalates only sure things, and the interesting ambiguous cases — the ones tier three most needs to see — die in the queue. Optimize hours returned and the hours evaporate into unmeasured slack. Every metric needs a counter-metric watching its failure direction.',
          bullets: [
            'Fast triage without a quality check rewards shallow dispositions',
            'FP burden drops fastest by dismissing more — including things that were real',
            'An AI graded on escalation precision learns to hide the ambiguous cases',
            'Pair every headline metric with the counter-metric that catches its abuse',
          ],
        },
        {
          heading: 'The Seduction of Alert-Volume Reduction',
          body: '"Reduced alert volume by 70%" is the most quoted number in this product category and, alone, close to meaningless. Volume reduction has a legitimate form — deduplication, correlation of related alerts into cases, suppression of known-benign patterns with documented rules. It also has an illegitimate form: raising thresholds and dismissing harder, which produces an identical headline number. The metric cannot distinguish a smarter funnel from a narrower one. Any reduction claim should arrive with its method attached — what exactly was suppressed, deduplicated, or dismissed, and under what logic — and with evidence about what the discarded volume contained. Which requires actually looking at the discarded volume.',
          bullets: [
            'Deduplication, correlation, and documented suppression are real reduction',
            'Raised thresholds and aggressive dismissal produce the same headline number',
            'Demand the method behind any reduction percentage, not just the percentage',
            'A reduction claim without analysis of the discarded alerts is unverified',
          ],
        },
        {
          heading: 'Measuring the Misses: Sample What It Dismissed',
          body: 'The alerts the AI escalates get human review by definition; the alerts it dismisses are where the unmeasured risk pools. The only honest instrument is sampling: pull a random slice of AI-dismissed alerts on a schedule — daily during the pilot, weekly in steady state — and have an analyst work them cold, without seeing the AI\'s reasoning first, so the review is independent rather than an exercise in agreeing with a confident summary. Track the disagreement rate and treat movement in it as an alarm, because it is also your early-warning system for drift: telemetry changes, new attacker tradecraft, a model update. This review time is a permanent cost of running the system. Budget it, or the miss rate becomes a number nobody knows.',
          bullets: [
            'Random-sample dismissed alerts on a fixed schedule, forever, not just during the pilot',
            'Reviewers work the sample blind to the AI\'s disposition and reasoning',
            'Rising disagreement is a drift alarm before it is a miss statistic',
            'Sampling cost is part of the system\'s true operating price — budget it up front',
          ],
        },
      ],
    },
    {
      id: 'm8l4',
      title: 'The Analyst Role Shifts',
      diagram: 'AnalystRoleShift',
      slides: [
        {
          heading: 'From Queue-Clearing to Verification',
          body: 'When the machine drafts the disposition, the analyst\'s job inverts. Tier-one work has historically been clearing a queue: open the alert, gather context, decide, close, repeat. Assisted triage arrives with the context gathered and the decision drafted, and the human contribution becomes verification — is this recommendation actually right? That is a harder skill than it sounds, because a fluent, confident, well-formatted summary reads as correct whether or not it is. Good verification means checking the claimed evidence against the raw telemetry, noticing what the summary does not mention, and knowing when an alert deserves investigation beyond what the AI did. Analysts who only ever confirm are not verifying; they are decorating an automated pipeline with a headcount.',
          bullets: [
            'The scarce skill shifts from processing speed to catching wrong recommendations',
            'Fluent and confident output reads as correct even when it is not',
            'Real verification samples raw evidence, not just the AI\'s narrative of it',
            'An analyst who never disagrees with the tool is a rubber stamp, not a control',
          ],
        },
        {
          heading: 'Trust Calibration Cuts Both Ways',
          body: 'Automation bias is the famous failure: the tool is right often enough that humans stop checking, and approval becomes reflex. But the opposite failure is just as real and gets less attention — an analyst burned once by a bad recommendation may quietly re-verify everything, at which point the SOC pays for the AI and the full manual workload plus the overhead of reconciling them. Both failures are invisible in aggregate dashboards and visible in individual behavior: watch per-analyst override rates. Near zero suggests rubber-stamping; very high suggests distrust or a genuinely poor tool — the rate alone cannot say which, so read it alongside the sampled-dismissal reviews from the metrics work. Calibrated trust is the real product of the adoption period, and it must be managed, not assumed.',
          bullets: [
            'Automation bias: high accuracy trains humans to stop verifying — accuracy causes the complacency',
            'Distrust bias: full re-verification of every output erases the efficiency gain entirely',
            'Per-analyst override rates surface both failure modes; team averages hide them',
            'Read override rates against sampled ground truth before concluding anything',
          ],
        },
        {
          heading: 'The Ladder Problem',
          body: 'Tier-one triage has been the industry\'s apprenticeship: repetitive, yes, but the repetition is how junior analysts built intuition for what normal looks like in real telemetry. Automate that layer and you have removed the bottom rungs of the ladder while still needing people at the top — senior analysts capable of judging the AI\'s output, a skill built from exactly the reps the AI now does. No one has fully solved this. Partial answers exist: rotate juniors through the dismissed-alert sampling so they still work raw cases against ground truth; have them investigate first and compare against the AI\'s take rather than reading it first; treat some manual triage as deliberate training volume, inefficiency accepted on purpose. What fails is pretending the ladder is intact.',
          bullets: [
            'Tier-one repetition was the apprenticeship, not just the toil',
            'Verification skill at the top depends on reps the AI now absorbs at the bottom',
            'Dismissal-sampling duty doubles as ground-truth training for juniors',
            '"Investigate first, then compare" preserves learning that reading-first destroys',
          ],
        },
        {
          heading: 'Training Has to Change Shape',
          body: 'A training program built for the pre-AI SOC teaches alert-processing procedure: which console, which query, which disposition codes. The assisted SOC needs three additions. First, evidence-checking as an explicit, practiced skill — exercises where analysts receive plausible AI dispositions, some deliberately wrong, and must find the flaws; if your training set contains no wrong recommendations, you are training compliance, not verification. Second, enough working knowledge of failure modes — confident fabrication, stale context, drift after telemetry changes — that analysts know what kinds of wrong to look for. Third, escalation judgment for the ambiguous middle the AI handles worst. Analysts trained only to operate the tool will trust it; analysts trained on its failures will check it.',
          bullets: [
            'Include deliberately wrong AI dispositions in training and grade on catching them',
            'Teach the failure modes: fabricated detail, stale context, post-change drift',
            'Drill the ambiguous middle cases — the AI\'s weakest ground is the analyst\'s core ground',
            'Training that never shows the tool failing produces analysts who never doubt it',
          ],
        },
      ],
    },
    {
      id: 'm8l5',
      title: 'Oversight That Scales With Trust',
      diagram: 'StagedAutonomy',
      slides: [
        {
          heading: 'Four Stages, Earned Per Action Type',
          body: 'Autonomy is not a product setting; it is a ladder each action type climbs separately on evidence. Suggest: the AI recommends, a human performs the action. Approve: the AI prepares the action fully and a human approves each execution. Act-with-review: the AI executes and every action lands in a mandatory human review queue after the fact. Act-alone: the AI executes with sampled review only. The unit climbing the ladder is the action type, not the product — "enrich alerts" can reach act-alone while "disable accounts" from the same tool stays at approve, permanently if warranted. Promotion needs written criteria met over a defined period: accuracy on sampled review, stable override rates, no surprises. A vendor default is not a promotion decision. Yours are.',
          bullets: [
            'Suggest → approve → act-with-review → act-alone, in order, no stage skipped',
            'Each action type climbs on its own evidence — never the product as a whole',
            'Promotion requires written criteria sustained over a defined period',
            'Vendor defaults are a starting posture, not a trust decision you have made',
          ],
        },
        {
          heading: 'What Stays Gated Indefinitely',
          body: 'Some actions should not climb the ladder no matter how good the accuracy numbers get, because the argument against autonomy was never about accuracy. Irreversible actions — deleting mailboxes or evidence, wiping hosts, revoking credentials without a restore path — stay gated because no error rate above zero is acceptable when errors cannot be undone. External-facing actions — customer notifications, takedown requests, regulator contact, anything crossing the organizational boundary — stay gated because they commit the organization, and that commitment is a human\'s to make. Add anything whose blast radius you cannot confidently bound. Maintain the standing-gate list explicitly, and treat pressure to shrink it as a decision for your leadership, not a configuration ticket.',
          bullets: [
            'Irreversible: no restore path means no acceptable autonomous error rate',
            'External-facing: crossing the org boundary is a human commitment by definition',
            'Unknown blast radius earns a gate until it is a known blast radius',
            'Keep the standing-gate list written down, and make shrinking it a leadership decision',
          ],
        },
        {
          heading: 'Log What It Saw, Not Just What It Did',
          body: 'When an AI-assisted decision goes wrong, the first question is why the system decided what it did — and an action log alone cannot answer it. Useful oversight logging captures three layers per decision: what the AI saw (the alerts, enrichment data, and context actually presented to it), what it recommended and with what stated reasoning or confidence, and what then happened — approved, overridden, executed, outcome. The first layer is the one teams skip and the one that matters most, because most bad outputs trace to bad or missing inputs, and without the input record you cannot distinguish a model failure from a telemetry failure. These records reconstruct incidents, feed the sampling program, and answer auditors. Retain them like the security records they are.',
          bullets: [
            'Three layers per decision: inputs seen, recommendation made, action taken',
            'The input record is the layer teams skip and the one investigations need most',
            'Without inputs logged, model failure and telemetry failure look identical',
            'Decision records serve incident review, sampling, and audit — retain accordingly',
          ],
        },
        {
          heading: 'Autonomy Is Reversible — and the Rest Is Another Course',
          body: 'The ladder runs both ways, and demotion criteria deserve the same written treatment as promotion: a missed true positive in an act-alone category, disagreement rates climbing in sampled review, or an environment change that invalidates the trust evidence — new log sources, a major model update, telemetry migration — should each drop the affected action type a stage while you re-verify. Teams that treat granted autonomy as permanent will keep yesterday\'s trust running on today\'s changed system. One boundary of this module, stated plainly: everything here governs how you operate AI in the SOC. Securing the AI systems themselves — threat modelling them, hardening them, testing them — is its own discipline, and the Securing AI Systems course on this site covers it at engineering depth.',
          bullets: [
            'Write demotion criteria with the same rigor as promotion criteria',
            'Misses, rising disagreement, or environment changes each trigger a stage drop',
            'Model updates and telemetry changes invalidate old trust evidence — re-earn it',
            'Operating AI safely and securing AI systems are different disciplines: for the latter, take the Securing AI Systems course',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A SOC is choosing its first AI use case. The vendor demo of autonomous host containment impressed leadership, but the team also has a phishing queue of 300 alerts a day with documented triage times. The better first choice is:',
      options: [
        'Autonomous containment — it delivers visible value fastest',
        'Both at once, to maximize learning from the pilot period',
        'Phishing triage — high volume, measurable baseline, cheap failures',
        'Neither — wait until the tools mature further',
      ],
      correct: 2,
    },
    {
      q: 'A pilot reports strong results: triage time down 60%. It ran during the six quietest weeks of the year, on one team, with no control queue, and success criteria were drafted after the results came in. What is the most serious problem?',
      options: [
        'Success criteria written after seeing results — the pilot could not fail',
        'The 60% figure is too low to justify the license cost',
        'Six weeks is too long for a pilot; two would have sufficed',
        'Running on only one team made the pilot too small to be visible to leadership',
      ],
      correct: 0,
    },
    {
      q: 'A vendor reports its triage AI cut your alert volume by 70% in the first month. Before celebrating, the most important question to answer is:',
      options: [
        'Whether competing products achieve higher reduction percentages',
        'Whether analysts find the new interface easier to use than the old console',
        'Whether the reduction can reach 90% with more aggressive tuning',
        'How the reduction was achieved, and what the dismissed alerts contained',
      ],
      correct: 3,
    },
    {
      q: 'Three months into assisted triage, one analyst has approved 100% of the AI\'s recommendations — zero overrides. The most likely interpretation is:',
      options: [
        'The AI has reached a level of accuracy where oversight is no longer needed',
        'Probable automation bias — approval has become reflex',
        'The analyst is exceptionally skilled at selecting correct recommendations',
        'The override mechanism is likely broken and should be re-tested',
      ],
      correct: 1,
    },
    {
      q: 'Which action type is the strongest candidate to stay human-gated indefinitely, regardless of how accurate the AI becomes?',
      options: [
        'Deleting user mailboxes flagged as phishing — the action is irreversible',
        'Enriching alerts with asset context before an analyst opens them',
        'Drafting the timeline section of an incident report for analyst review',
        'Grouping related alerts from one campaign into a single case',
      ],
      correct: 0,
    },
    {
      q: 'An AI has performed flawlessly for six months at act-with-review on alert enrichment. The vendor suggests enabling full autonomy across all action types, including account disablement. The right response is:',
      options: [
        'Accept — six months of flawless performance has earned platform-wide autonomy',
        'Decline all autonomy increases — act-with-review should be the permanent ceiling',
        'Promote only enrichment to act-alone — trust is earned per action type',
        'Enable full autonomy for a 30-day trial across all action types and watch the dashboards',
      ],
      correct: 2,
    },
  ],
};

export default m8;
