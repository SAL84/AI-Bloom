import type { CourseModule } from '../../types/course';

const secM4: CourseModule = {
  id: 'sec-m4',
  title: 'Testing, Response, and Governance',
  icon: 'zap',
  summary: 'Running an authorised adversarial exercise end to end, turning findings into security regression tests in CI, using automated adversarial testing without overstating it, detecting an AI incident in production, responding when the failing component is a model rather than a host, and closing the loop through post-incident review and governance.',
  lessons: [
    {
      id: 'sec4l1',
      title: 'Running an Authorised Exercise',
      sectionLabel: 'Assurance',
      diagram: 'AuthorisedExercise',
      slides: [
        {
          heading: 'Authorisation and Scope Come First',
          body: 'Everything in this module applies to systems you own or have explicit written authorisation to test. That is the operating constraint of the work, not a formality attached to it. Probing another organisation\'s AI product, a hosted model you merely have an account with, or a supplier\'s agent without permission is unauthorised access regardless of intent, and provider terms of service usually prohibit adversarial probing independently of the law. Before any testing begins, agree in writing which systems, endpoints and environments are in scope; which are explicitly excluded; which accounts, credentials and data may be used; the time window; the named contact for both sides; and what happens if the exercise causes an outage or uncovers a live compromise. Test against environments configured like production but populated with synthetic data, using dedicated accounts. Nothing that follows is legitimate without this step.',
          bullets: [
            'Only systems you own or are authorised in writing to test — no exceptions',
            'Provider terms commonly prohibit adversarial probing on their own terms',
            'Agree scope, exclusions, accounts, data, window, and named contacts before starting',
            'Production-like configuration with synthetic data and dedicated accounts',
            'Define the stop condition and escalation path for a real incident found mid-exercise',
          ],
        },
        {
          heading: 'Rules of Engagement That Prevent Harm',
          body: 'The rules of engagement translate scope into constraints on how the team works, and the AI-specific clauses are worth writing explicitly. No real customer data as attack material and none in evidence, since findings travel further than anyone plans. No planting of content in shared systems outside the agreed environment, because indirect injection tests write into corpora and a forgotten test document is a live liability. Destructive actions only against designated targets, with a rollback path agreed in advance. Rate limits so testing does not become a denial-of-service against a shared dependency. A defined handling procedure for anything sensitive the team obtains, including immediate reporting and secure deletion. And a rule that the team stops and escalates on discovering evidence of an actual intrusion rather than continuing to explore it, which is the situation that most often goes wrong in practice.',
          bullets: [
            'Synthetic data only, in the exercise and in the evidence',
            'Planted test content stays in the agreed environment and is removed afterwards',
            'Agree rollback for destructive actions and rate limits for shared dependencies',
            'Stop and escalate on signs of a real intrusion instead of investigating further',
          ],
        },
        {
          heading: 'Safe Methodology and Evidence',
          body: 'Design tests so success is observable without causing harm. The standard approach is a benign objective: a distinctive marker token that should never appear in output, a designated no-op tool that should never be called, a canary record that should never be retrieved or transmitted. If injected content can cause the marker to appear at a destination, you have demonstrated the path without exercising real harm, and the result is unambiguous, automatable and safe to include in a report. Keep evidence proportionate: enough to reproduce in a controlled environment and to verify the fix, and no more. Record the effort — attempts made, success rate, turns required, whether the deployed guardrail stack was active — because a path that succeeds once in fifty attempts is a real finding with a different priority than one that succeeds immediately, and omitting effort makes both look identical.',
          bullets: [
            'Benign objectives: marker tokens, no-op tools, canary records that should never move',
            'Demonstrate the path, do not exercise the harm',
            'Record attempts, success rate and turns — effort is part of the finding',
            'Test the deployed stack with guardrails active, and say which configuration was tested',
          ],
        },
        {
          heading: 'Reporting That Produces Change',
          body: 'A finding nobody fixes was not worth discovering, and the difference is usually the write-up. Lead with what an attacker achieves and against whom, in the language of the affected system rather than of the technique. State preconditions honestly: what access was required, which configuration was in place, how many attempts, what success rate. Give a reproduction that an engineer can run in a controlled environment with the detail needed to verify and no more — mechanisms and conditions rather than a payload anyone can paste elsewhere. Recommend the fix at the architectural layer that actually contains the issue, because a prompt-level patch for a structural problem produces the appearance of closure and a repeat finding six months later. Define the retest criteria in the report itself, so closure is a measurement someone can perform rather than an opinion someone offers.',
          bullets: [
            'Impact and affected parties first; technique second',
            'State preconditions, configuration, attempts and success rate — credibility is the asset',
            'Describe mechanisms and conditions, not distributable payloads',
            'Recommend the fix at the layer that contains it, and write the retest criteria in the report',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General',
          body: 'Adversarial testing of an AI system is legitimate only with permission from whoever owns it. Done properly it is a structured exercise with an agreed scope, harmless test markers instead of real attacks, and a report that leads to specific fixes.',
          bullets: [
            'Testing someone else\'s AI product without permission is unauthorised access, not research',
            'Good testing proves a path exists without causing the harm it could cause',
            'A finding without a named fix and a retest date rarely changes anything',
          ],
        },
        {
          role: 'security-se',
          label: 'Security Engineer',
          body: 'Run this inside your existing testing governance: same authorisation templates, same severity scale, same tracker, same retest process. What changes is the technique list and the requirement to record which configuration and guardrail stack were active when the finding was produced.',
          bullets: [
            'Reuse existing authorisation and rules-of-engagement templates rather than inventing a process',
            'Record the tested configuration — results are meaningless without it',
            'Rank by exploitability against impact, not by how interesting the mechanism is',
            'Every accepted finding gets a regression test before the ticket is closed',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Your job is to make the exercise possible and repeatable: an isolated environment matching production configuration, seeded synthetic data, dedicated credentials, and tracing complete enough that any attempt can be replayed and its path inspected afterwards.',
          bullets: [
            'Stand up an isolated environment with production-like configuration and synthetic data',
            'Ensure traces capture assembled prompts, retrieved items and tool arguments',
            'Provide a reset mechanism so runs are independent and repeatable',
            'Never point adversarial testing at production data stores or live accounts',
          ],
        },
        {
          role: 'consultant',
          label: 'Consultant',
          body: 'Clients often request testing without scope, authorisation, or a threat model, which yields an unactionable report. Insist on written rules of engagement and a prioritised list of attacker objectives first, and agree severity definitions and the retest process before any testing starts.',
          bullets: [
            'Written authorisation and scope are a precondition, not paperwork to tidy up later',
            'Derive priorities from the client\'s threat model so coverage is defensible',
            'Agree severity definitions and the remediation-and-retest path up front',
            'Hand over the finding-to-regression-test process, or nothing persists after you leave',
          ],
        },
      ],
    },
    {
      id: 'sec4l2',
      title: 'Security Regression Tests in CI',
      diagram: 'SecurityRegressionCI',
      slides: [
        {
          heading: 'Every Finding Becomes a Test',
          body: 'The mechanism that converts a point-in-time exercise into a durable control is simple: no finding is closed until a test exists that would fail if it returned. Write the test against the condition rather than the specific attempt, because the attempt will be patched and the condition will recur. If the finding was that content retrieved from an external source could cause a privileged tool call, the test plants benign marker content in a test corpus and asserts that no privileged tool appears in the resulting trace. If it was that an agent answered using data the requesting user could not reach, the test issues a request as a restricted user and asserts the response contains no canary record. Assertions on the trace — which tools were called, with what identity, which destinations were contacted — are more durable than assertions on output text, which drifts with every model and prompt change.',
          bullets: [
            'A finding is closed when a failing-if-it-returns test exists, not when the ticket is updated',
            'Test the condition, not the specific attempt that revealed it',
            'Assert on traces: tools called, acting identity, destinations contacted',
            'Output-text assertions drift; structural assertions survive model changes',
          ],
        },
        {
          heading: 'Handling Non-Determinism Without Flakiness',
          body: 'Security tests against a stochastic system need statistical treatment or they become noise that teams disable. Run each scenario several times and assert on the aggregate, but choose the aggregate to match the property. For an invariant that must always hold — no privileged tool call after untrusted ingestion, no canary in output, no request to a non-allowlisted destination — assert zero occurrences across all runs, because a single violation is a real failure. For probabilistic properties such as resistance to a category of persuasion, assert a threshold and track the trend, since a scenario drifting from rarely succeeding to often succeeding is a regression even while it still passes. Keep the run count high enough to be meaningful and the scenario set small enough to run on every change; a comprehensive suite that only runs weekly catches regressions after they ship.',
          bullets: [
            'Invariants get zero-tolerance assertions across all runs',
            'Probabilistic properties get thresholds plus trend tracking',
            'A rate moving in the wrong direction is a regression even while it passes',
            'Fast and small on every change beats comprehensive and weekly',
          ],
        },
        {
          heading: 'Structural Tests That Need No Model at All',
          body: 'A large share of the most valuable security tests are deterministic and cheap, because they check configuration rather than behaviour. Assert the tool list matches an approved manifest, so a newly registered server fails the build instead of appearing silently. Assert the hash of every tool schema text matches the approved value. Assert no credential in the agent\'s environment carries a scope outside the declared set. Assert that the egress allowlist has not grown without a corresponding change record. Assert that the privileged component\'s interface accepts only typed fields, so a change that starts passing free text through fails. These run in milliseconds, never flake, and catch the configuration drift that produces most real exposure — which makes them a better first investment than an elaborate behavioural suite.',
          bullets: [
            'Approved tool manifest and schema hashes checked in CI catch silent additions',
            'Assert credential scopes and egress allowlists against declared values',
            'Assert the typed interface between unprivileged and privileged components',
            'Deterministic, fast, and never flaky — build these before behavioural tests',
          ],
        },
        {
          heading: 'Gating and Test Data Hygiene',
          body: 'Decide deliberately what blocks a release. Invariant violations and structural assertions should block, because they represent a known-closed path reopening. Threshold regressions on probabilistic properties usually warrant review rather than an automatic block, since a legitimate model or prompt change can move them, and a suite that blocks too often gets bypassed — which costs you the whole control. Keep the test corpus and its markers in a controlled repository with the same access restrictions as any sensitive material, and keep it clear of anything derived from real customer data. Rotate marker values so a system tuned to recognise them does not pass artificially. And run the suite against the deployed configuration including guardrails, not against a stripped-down harness, or you will be measuring a system nobody ships.',
          bullets: [
            'Block on invariants and structural checks; review on threshold movement',
            'A suite that blocks too often gets bypassed, which forfeits the control entirely',
            'Keep test corpora and markers controlled and free of real customer data',
            'Rotate markers and test the deployed configuration, guardrails included',
          ],
        },
      ],
    },
    {
      id: 'sec4l3',
      title: 'Automated Adversarial Testing and Its Limits',
      diagram: 'AutoAdversarialTesting',
      slides: [
        {
          heading: 'What Automation Does Well',
          body: 'Automated adversarial testing comes in three broad shapes. A probe scanner runs a maintained library of attempts across known categories and reports which succeeded. A mutation engine takes seed patterns and systematically varies phrasing, framing, encoding and language to generate large numbers of variants. An attacker-model loop generates attempts against your system and iterates based on whether they worked. All three deliver the same core value: breadth and repeatability at a volume no human team can match, on every change rather than once a year. The highest-return use is regression — replaying the conditions of every past finding automatically, forever — because that is how you learn that a fix survived a model upgrade, a prompt refactor, or a new tool. Treat automation as the mechanism that keeps closed paths closed.',
          bullets: [
            'Three shapes: probe libraries, mutation engines, attacker-model loops',
            'Breadth and repeatability on every change, not once a year',
            'Highest return is automated regression over past findings',
            'It is how you learn a fix survived a model or prompt change',
          ],
        },
        {
          heading: 'Four Limits Worth Stating',
          body: 'First, automation searches the space it was given: it generates novel instances within known categories but does not invent a mechanism nobody has described, and it will not find the business-logic path that requires understanding what your system is for. Second, grading — most pipelines rely on a model judging whether an attempt succeeded, so the judge\'s error rate bounds every number the pipeline produces, and an unvalidated judge yields an unvalidated metric. Third, overfitting: a defence tuned until the automated suite is clean has been tuned to the suite, and an attacker who adapts is not constrained by it. Fourth, context blindness: no tool can tell you that a particular output is catastrophic in your regulatory or clinical context and unremarkable elsewhere, because that judgement is not in any corpus. Each limit has a mitigation, and none of them is more automation.',
          bullets: [
            'Explores known categories; novel mechanisms and business-logic paths need humans',
            'A model judge bounds the pipeline — validate it against human labels',
            'A clean suite can mean a tuned defence rather than a robust system',
            'Domain-specific severity is human judgement, not a probe library output',
          ],
        },
        {
          heading: 'Reporting Automated Results Honestly',
          body: 'The most common misreading in this area is presenting a large number of automated attempts as evidence of robustness. Attempt counts measure effort spent, not coverage achieved, and a suite can run many thousands of variants while never touching a whole category. Report instead which categories were exercised against which components, what the success rate was per category, which configuration was tested, and what was not covered — with the uncovered areas named rather than implied. Keep human and automated results in separate sections, because they answer different questions: automation tells you whether known paths remain closed, human testing tells you whether anyone has looked for new ones. A programme reporting only automated numbers is reporting that nobody has thought about this system specifically, which is usually the more important finding.',
          bullets: [
            'Attempt counts measure effort, not coverage — report categories against components',
            'Name what was not covered instead of leaving it implied',
            'Keep human and automated results separate; they answer different questions',
            'Automated-only reporting signals that nobody examined this system specifically',
          ],
        },
      ],
    },
    {
      id: 'sec4l4',
      title: 'Detecting an AI Incident in Production',
      diagram: 'AIIncidentDetection',
      slides: [
        {
          heading: 'What an AI Incident Looks Like',
          body: 'AI incidents often present without any of the signals conventional detection is built around. There is no malware, no anomalous process, no credential brute force, and frequently no failed request at all — every call is authenticated, authorised and successful, because the agent was permitted to do what it did. The visible symptom is usually behavioural: a user reports an answer containing data they should not have seen; a record was modified nobody can account for; a message was sent that no one wrote; an agent contacted a destination it has no reason to contact. Because the mechanism is persuasion rather than intrusion, detection has to sit on the semantics of what the system did, which means it is built on your own traces rather than on host or network telemetry. This is the practical reason trace quality is a security requirement rather than an engineering nicety.',
          bullets: [
            'No malware, no failed auth — the actions are permitted and successful',
            'Symptoms are behavioural: wrong data returned, unexplained changes, unexpected messages',
            'Detection sits on application traces, not host or network telemetry',
            'Trace completeness is the limiting factor on whether detection is possible at all',
          ],
        },
        {
          heading: 'Signals Worth Building',
          body: 'A small set of signals covers most of the ground. A privileged or irreversible tool call occurring in the same run as ingestion of externally sourced content is the highest-value single detection, because it directly encodes the dangerous sequence. New outbound destinations per agent, alerted on first appearance rather than on volume. Canary records and documents that no legitimate query should retrieve or transmit, which produce unambiguous alerts at almost no cost. Retrieval patterns unrelated to the user\'s request, which indicate the corpus is steering the session. Sharp movements in refusal rate, error rate, gate approval rate or run length, which frequently move before anyone notices a behavioural problem. Cross-user anomalies, such as one user\'s content appearing in another\'s session. Each needs an owner, a documented response, and a tuned threshold, or it becomes another ignored dashboard.',
          bullets: [
            'Privileged action after external ingestion in one run — the highest-value signal',
            'Alert on first appearance of a new outbound destination per agent',
            'Canaries are cheap, unambiguous, and rarely deployed',
            'Rate shifts in refusals, errors, approvals and run length often move first',
            'MITRE ATLAS\'s exfiltration and impact tactics make a useful checklist when enumerating these behavioural signals',
          ],
        },
        {
          heading: 'Where the Report Comes From',
          body: 'Plan for the likely case that the first indication arrives from a person rather than a monitor. A user notices an odd answer, a customer asks why they received a message, a partner reports content they should not have, or a researcher contacts you about a behaviour they found. That means two things need to exist in advance. A route by which behavioural reports about AI features reach the security team rather than terminating in a product support queue as a quality complaint — this is the most common way real incidents are lost. And a triage standard that distinguishes a model producing a poor answer from a model producing an answer that indicates influence or unauthorised access, because most reports are the former and the ones that are not look identical at first glance. Write examples of both into the triage guidance.',
          bullets: [
            'Assume the first signal is a human report, not an alert',
            'Route behavioural reports about AI features to security, not only to support',
            'Distinguish poor-quality output from evidence of influence or unauthorised access',
            'Publish a channel for external researchers before you need one',
          ],
        },
      ],
    },
    {
      id: 'sec4l5',
      title: 'Response When the Failure Is a Model',
      diagram: 'ModelIncidentResponse',
      slides: [
        {
          heading: 'Containment Actions That Exist Here',
          body: 'Familiar containment moves do not apply cleanly: there is no host to isolate and no process to kill, and the component that misbehaved will behave the same way again given the same context. The actions available are about capability and input. Revoke or narrow the agent\'s tools, which is the fastest way to stop ongoing damage and should be possible without a deployment. Revoke the credentials the agent holds, remembering that a compromised run may have used them for anything within scope. Disable the feature or fall back to a constrained mode. Cut egress to any destination involved. Quarantine the suspected content source — pull the document, pause the sync, freeze the corpus — so the trigger stops arriving. And suspend memory writes and reads for affected scopes, since a persisted instruction will otherwise keep re-entering context after everything else is contained.',
          bullets: [
            'Narrow or revoke tools first — the fastest way to stop ongoing action',
            'Revoke agent credentials and assume everything in their scope was reachable',
            'Quarantine the suspected source and cut egress to involved destinations',
            'Suspend memory reads and writes, or the trigger keeps re-entering context',
          ],
        },
        {
          heading: 'Scoping Through Traces',
          body: 'Scoping asks which runs were affected and what they did, and it is answerable only from traces. Start from the confirmed case and identify the distinguishing feature — a source document, a retrieved chunk, a tool sequence, a destination — then search all runs for that feature. If a poisoned document is identified, every run that retrieved it is in scope regardless of whether it produced visible harm, and every action taken in those runs must be reviewed. Because indirect injection separates planting from activation, extend the search window back to when the content could have been introduced rather than to when the symptom appeared; scoping to the report date is the standard error here. Then map the affected runs to users and data: whose data was in context, what was returned, what was written, what left the boundary. That mapping is what notification and remediation decisions rest on.',
          bullets: [
            'Find the distinguishing feature, then search all runs for it',
            'Every run that retrieved the poisoned content is in scope, harm visible or not',
            'Extend the window back to when the content could have been planted',
            'Map affected runs to users, data returned, data written, and data that left',
          ],
        },
        {
          heading: 'Eradication Without a Patch',
          body: 'You cannot patch the model, and that reframes eradication. In most cases the model behaved exactly as it does; what changed was what reached it and what it was permitted to do. So eradication means removing the input and closing the capability. Remove the poisoned content from the corpus and every derived artefact — embeddings, caches, summaries, memory entries — because clearing the source while a summary survives is the failure that makes a cleanup look complete. Purge contaminated memory by origin. Revert prompt or configuration changes if the trigger was introduced there. Then close the capability path: narrow the tool, apply the scope, deny the egress, add the gate. Switching model family or version is occasionally part of the response but rarely the fix on its own, and treating an upgrade as remediation leaves the same path open for the next model.',
          bullets: [
            'The model usually did not change; the input and the permissions are the fix',
            'Remove derived artefacts as well as sources — embeddings, caches, summaries, memory',
            'Purge contaminated memory by origin, and verify the purge',
            'Changing model version is not remediation for a capability path left open',
          ],
        },
        {
          heading: 'Recovery, Verification, and Communication',
          body: 'Restore the feature in stages: reduced capability first, elevated monitoring, and a defined period before full restoration. Verify with the same benign markers used in testing — re-run the demonstrated path and confirm it now fails, rather than confirming that the specific attempt no longer works, since those are different claims. Communication needs to be prepared for an audience that finds this unfamiliar: explain that the system was manipulated through content it processed rather than breached in the conventional sense, be precise about what data was actually reached, and avoid characterising a systemic property as an isolated defect. Where data was disclosed, obligations follow the data, not the mechanism — regulatory duties do not care that the vector was a prompt. And keep the trace evidence intact and access-controlled, since it contains the same data the incident involved.',
          bullets: [
            'Restore in stages with reduced capability and elevated monitoring',
            'Verify the path is closed, not that one attempt now fails',
            'Explain manipulation-through-content plainly; avoid framing systemic issues as isolated defects',
            'Disclosure obligations follow the data reached, not the novelty of the vector',
          ],
        },
      ],
    },
    {
      id: 'sec4l6',
      title: 'Post-Incident Review and Governance',
      diagram: 'PostIncidentGovernance',
      slides: [
        {
          heading: 'Reviewing Without Blaming the Model',
          body: 'The unproductive post-incident review for an AI failure concludes that the model was tricked and resolves to improve the prompt. It is unproductive because it identifies a property of the technology as the root cause and produces an action nobody can verify. A useful review asks control questions instead. Why did the agent have that capability at that moment? Why did that content reach the context, and was its source reviewed? Which control was expected to catch this, and what did it actually do — was it absent, misconfigured, bypassed, or working as designed against a case nobody considered? Why did detection take as long as it did, and which signal would have shortened it? Was this scenario in the threat model, and if so, was it in the accepted-risk register? Each of those questions yields a change with an owner; the prompt conclusion does not.',
          bullets: [
            'Model was tricked is a property, not a root cause',
            'Ask which control was expected to catch it and what it actually did',
            'Absent, misconfigured, bypassed, or out of scope — these lead to different fixes',
            'Check whether the scenario was modelled and whether it was knowingly accepted',
          ],
        },
        {
          heading: 'Feeding Findings Back',
          body: 'Every incident should update four artefacts, and a review that updates fewer has leaked its own lessons. The threat model gains the scenario if it was missing, or a corrected likelihood if it was present and discounted. The accepted-risk register is revisited, since an acceptance whose assumption has now been demonstrated false must be reopened rather than quietly retained. The control set gains the specific change, at the layer that contains the issue, with an owner and a date. And the regression suite gains a test asserting the condition, so the same path failing again is a build failure rather than a second incident. Also feed the detection layer: if the signal that would have caught this did not exist, build it now, while the shape of the event is still clear enough to specify a threshold worth setting.',
          bullets: [
            'Update the threat model, the accepted-risk register, the controls, and the test suite',
            'An acceptance built on a disproven assumption must be reopened, not retained',
            'Add the missing detection signal while the event shape is still concrete',
            'A review that produces no test has not closed anything',
          ],
        },
        {
          heading: 'Governance That Is Actually Operable',
          body: 'A workable governance layer needs three things and not much more. An inventory of AI systems in use, with owner, purpose, data classes, tool and permission list, and the date of the last threat model — most organisations cannot produce this, and its absence is why nobody can answer basic questions during an incident. A gate at the point of change, so adding a tool, a data source, a permission scope, or a new agent triggers a proportionate review rather than a full re-assessment. And clear ownership: someone accountable for each system, someone accountable for the controls, and a defined route for behavioural reports. Everything beyond this — policy documents, committees, generic questionnaires — tends to consume effort without changing what the systems can do. Governance that cannot answer what our agents can reach today is documentation, not control.',
          bullets: [
            'Inventory with owner, purpose, data classes, tools, permissions, last review date',
            'Proportionate review triggered by change, not periodic full re-assessment',
            'Named accountability for systems, controls, and behavioural report routing',
            'If it cannot answer what agents can reach today, it is not governance',
          ],
        },
        {
          heading: 'Metrics That Reflect Reality',
          body: 'Choose metrics that describe posture rather than activity, because activity metrics reward motion. Coverage: the proportion of deployed AI features with a current threat model and an enumerated tool and permission inventory. Containment: how many components still combine private data, untrusted content and an outbound channel, tracked as a number that should fall. Time to detect and time to contain for AI-specific incidents, measured from the earliest evidence in traces rather than from the report. Regression coverage: proportion of accepted findings with a test that would fail if the condition returned. Gate quality: approval rates and decision times, which reveal whether gates are being read. Avoid attempt counts, blocked-request totals, and policy completion rates — they move independently of whether anything is safer, and they are the metrics most likely to be requested.',
          bullets: [
            'Coverage of threat models and permission inventories across deployed features',
            'Count of components still holding all three trifecta properties, trending down',
            'Time to detect measured from earliest trace evidence, not from the report',
            'Avoid attempt counts and blocked-request totals — motion, not posture',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What is the non-negotiable precondition for any adversarial testing described in this module?', options: ['A validated model judge for grading attempts', 'Written authorisation and an agreed scope covering only systems you own or are permitted to test', 'A minimum number of documented attempts per category', 'Access to the model provider\'s training data'], correct: 1 },
    { q: 'Why use a benign marker or no-op tool as the objective in an injection test?', options: ['It runs faster than a realistic attempt', 'It avoids the need for authorisation', 'It demonstrates the path unambiguously without exercising the harm, and is safe to automate and report', 'It guarantees the model will comply'], correct: 2 },
    { q: 'Which assertion is most durable in a security regression test for an agent?', options: ['That the trace contains no privileged tool call following ingestion of external content', 'That the response text matches an expected string', 'That the run completed within a token budget', 'That the model returned a refusal message'], correct: 0 },
    { q: 'A defence is tuned until the automated adversarial suite reports no successes. What has most likely been achieved?', options: ['Robustness against adaptive attackers', 'Elimination of the need for human testing', 'A validated success judge', 'A defence tuned to that suite, which an adapting attacker is not constrained by'], correct: 3 },
    { q: 'Why do conventional detection approaches often miss an AI incident?', options: ['Because model APIs are encrypted end to end', 'Because AI systems generate too little telemetry to analyse', 'Because the malicious activity always occurs off-network', 'Because every call is authenticated, authorised and successful — the harm is in what the agent was legitimately permitted to do'], correct: 3 },
    { q: 'When scoping an incident caused by poisoned retrieved content, what is the standard error?', options: ['Limiting the search window to when the symptom was reported rather than to when the content could have been planted', 'Searching traces by run identifier', 'Including runs that produced no visible harm', 'Quarantining the source document too early'], correct: 0 },
    { q: 'A team purges the poisoned source document and upgrades to a newer model family. Why is this insufficient eradication?', options: ['Newer models are more susceptible to injection', 'Purging sources always requires reindexing from scratch', 'Derived artefacts may survive and the capability path that allowed the harm remains open', 'Model upgrades invalidate all existing traces'], correct: 2 },
    { q: 'Which of these is a posture metric rather than an activity metric?', options: ['Number of adversarial attempts run last quarter', 'Number of requests blocked by the guardrail layer', 'Proportion of deployed AI features with a current threat model and enumerated permission inventory', 'Number of AI security policies published'], correct: 2 },
  ],
};

export default secM4;
