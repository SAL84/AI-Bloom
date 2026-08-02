import type { CourseModule } from '../../types/course';

const evM4: CourseModule = {
  id: 'ev-m4',
  title: 'Red-teaming',
  icon: 'shield-alert',
  summary: 'Adversarial testing as a discipline: authorised scope, jailbreak taxonomy, direct and indirect prompt injection, agent-specific attack surface, automated red-teaming and its limits, safety evals, findings reports, and responsible disclosure.',
  lessons: [
    {
      id: 'ev4l1',
      title: 'Adversarial Testing as a Discipline',
      sectionLabel: 'Adversarial',
      slides: [
        {
          heading: 'Scope and Authorisation Come First',
          body: 'Everything in this module is defensive testing of systems you own or have explicit written authorisation to test. That is not a disclaimer, it is the operating constraint that makes the work legitimate. Before any adversarial testing begins, agree in writing: which systems and endpoints are in scope, which are explicitly out, what accounts and data may be used, what time windows apply, what to do on discovering a live incident, and who to contact when something breaks. Probing a third party\'s hosted model or another organisation\'s AI product without authorisation is unauthorised access regardless of intent, and vendor terms of service usually prohibit it independently of the law. Test in your own environments with synthetic data, use sandboxed accounts and dedicated credentials, keep findings confidential until disclosed properly, and never use production customer data as attack material.',
          bullets: [
            'Written scope, rules of engagement, and a named contact before any testing starts',
            'Only systems you own or are explicitly authorised in writing to test',
            'Sandboxed environments, dedicated accounts, synthetic data — never live customer records',
            'Vendor terms often prohibit adversarial probing independently of the law; check them',
            'Agree the stop condition and escalation path for real incidents found mid-test',
          ],
        },
        {
          heading: 'How Red-teaming Differs from Evaluation',
          body: 'Standard evals measure average behaviour on representative inputs; red-teaming searches for worst-case behaviour under an adversary who is actively trying to cause it. The difference is not severity, it is the search procedure. An eval asks what happens when the system is used as intended, and answers with a rate. A red team asks what an intelligent, motivated attacker with a specific goal can make the system do, and answers with an existence proof — one reproducible failure is a finding, and no amount of passing cases refutes it. This also distinguishes it from a conventional penetration test, which targets infrastructure and application vulnerabilities. Red-teaming an AI system targets model behaviour, the trust boundaries around it, and the actions it can take on the world. Mature programmes run all three and keep the results in one risk picture.',
          bullets: [
            'Evals measure the average case; red teams search for the worst case',
            'One reproducible failure is a finding — passing rates do not refute it',
            'Distinct from a pen test: the target is behaviour and trust boundaries, not just infrastructure',
            'Red-team findings become permanent eval cases once fixed',
          ],
        },
        {
          heading: 'Threat Model Before Technique',
          body: 'Red-teaming without a threat model degenerates into collecting entertaining model outputs. Start by writing down who the adversaries are and what they want: an external attacker seeking data or account access through your AI surface, a malicious user trying to obtain content or actions your policy forbids, a supplier or content source able to plant instructions in material your system ingests, or a curious insider probing what the system will do. For each, enumerate what they can reach — which inputs they influence, which documents your retrieval indexes, which tools the agent holds, which identities it borrows. Then rank objectives by consequence and test in that order. The output of this step is a prioritised list of attacker goals, and it is what turns red-teaming from an exploration into an engineering activity with coverage you can argue about.',
          bullets: [
            'Enumerate adversaries, their goals, and precisely what each can influence',
            'Map every untrusted input channel, including retrieved and tool-returned content',
            'Rank by consequence and test the top objectives first',
            'Coverage is claimed against the threat model, not against a list of techniques',
          ],
        },
        {
          heading: 'Team, Cadence, and Measurement',
          body: 'Red-teaming works best with mixed backgrounds — security engineers who think in trust boundaries, domain experts who know what a harmful output looks like in your field, and people outside the build team who have not internalised its assumptions. Builders red-teaming their own system reliably under-test the paths they believe are safe. Run it at defined points rather than continuously: before launch, after significant capability or permission changes, after model upgrades, and on a periodic schedule regardless. Record attempts and outcomes systematically so you can report attack success rates by category and track them across versions — otherwise you cannot tell whether a defence worked or the last team simply tried less hard. Every confirmed finding becomes a permanent regression case, which is the mechanism that converts a point-in-time exercise into a durable control.',
          bullets: [
            'Mix security, domain, and outside-the-team perspectives; builders under-test their own paths',
            'Trigger on launch, capability changes, permission changes, and model upgrades',
            'Log every attempt, not just successes — success rate per category is the metric',
            'Confirmed findings become permanent regression cases in the eval suite',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General User',
          body: 'Red-teaming is the practice of deliberately trying to make an AI system misbehave so the weaknesses are found by the people who own it rather than by someone with worse intentions. It only counts as legitimate when it is done with authorisation on systems the tester is entitled to test.',
          bullets: [
            'Probing someone else\'s AI product without permission is unauthorised access, not research',
            'Ask AI vendors whether their systems are red-teamed, by whom, and how often',
            'One reproducible failure matters even if the system behaves well the rest of the time',
          ],
        },
        {
          role: 'security-se',
          label: 'Security SE',
          body: 'AI red-teaming slots into a security programme alongside penetration testing and threat modelling, and maps onto frameworks customers already use. Leading with scope, authorisation, and a threat model is what separates a professional programme from output-collecting.',
          bullets: [
            'Position AI red-teaming as complementary to pen testing — different target, same governance',
            'Anchor findings in frameworks buyers know: OWASP\'s LLM application risks, MITRE ATLAS, the NIST AI risk framework',
            'Ask prospects who red-teams their AI surface and whether findings become regression tests',
            'Rules of engagement and authorisation letters are table stakes — have templates ready',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build the environment that makes adversarial testing safe and repeatable: sandboxed deployments, seeded synthetic data, dedicated credentials, and full tracing. Then treat every confirmed finding as a regression case with an assertion, not a wiki entry.',
          bullets: [
            'Stand up an isolated red-team environment with production-like configuration and fake data',
            'Instrument traces so an attack attempt can be replayed and its path inspected',
            'Track attack success rate per category as a metric across releases',
            'Never red-team against production data stores or live customer accounts',
          ],
        },
        {
          role: 'consultant',
          label: 'AI Consultant',
          body: 'Clients frequently ask for red-teaming without scope, authorisation, or a threat model, which produces an unactionable report. Insist on written rules of engagement and a prioritised attacker-goal list before any testing, and define up front how findings will be triaged and retested.',
          bullets: [
            'Written authorisation and scope are a precondition, not paperwork to be tidied later',
            'Derive test priorities from a documented threat model so coverage is defensible',
            'Agree severity definitions and a remediation-and-retest process before delivery',
            'Build the finding-to-regression-case handoff into the engagement, or nothing persists',
          ],
        },
      ],
    },
    {
      id: 'ev4l2',
      title: 'A Jailbreak Taxonomy',
      slides: [
        {
          heading: 'Why a Taxonomy Beats a Payload List',
          body: 'Collections of jailbreak strings circulate widely and age badly: providers patch specific phrasings, so a corpus of literal payloads decays into a test suite that measures which strings have been blocked rather than whether your system is robust. Categories persist because they describe the underlying mechanism — the reason a class of framing shifts model behaviour — and mechanisms outlive their instantiations. Organise your red-team programme around categories, generate fresh concrete attempts within each for every test cycle, and report success rates per category. That gives you comparable numbers across versions, tells you which mechanism your defences actually address, and avoids maintaining a document full of operational attack strings that is itself a liability to store and circulate.',
          bullets: [
            'Payload lists decay as providers patch; mechanisms persist',
            'Report attack success rate per category to compare across versions',
            'Generate fresh attempts each cycle rather than replaying a fixed corpus',
            'A stored library of working payloads is a liability — keep methodology, not exploits',
          ],
        },
        {
          heading: 'The Main Categories',
          body: 'The recurring families are worth knowing by mechanism. Framing attacks recast the request as fiction, role-play, research, or an authorised exception so the harmful content becomes incidental to a legitimate-seeming context. Obfuscation hides intent from surface-level filtering through encoding, translation, character substitution, or splitting a request into innocuous pieces assembled later. Instruction-hierarchy attacks attempt to make the model treat attacker text as higher-priority than its system prompt, including refusal suppression that pre-commits the model to a compliant format. Multi-turn escalation starts with a benign request and moves the conversation gradually, since each step is small relative to the previous context. Context-pressure attacks exploit in-context learning by filling a long context with examples of the behaviour being requested. And multimodal channels deliver any of the above through images, documents, or audio rather than text.',
          bullets: [
            'Framing: fiction, role-play, research pretext, claimed authorisation',
            'Obfuscation: encoding, translation, substitution, request splitting',
            'Hierarchy confusion: overriding system instructions, suppressing refusal',
            'Multi-turn escalation and long-context pressure exploit accumulated context',
            'Multimodal delivery routes the same mechanisms around text-only filtering',
          ],
        },
        {
          heading: 'Measuring Robustness Honestly',
          body: 'A single successful attempt after fifty tries and a single successful attempt after two mean very different things, so record the effort. For each category, log attempts, successes, and turns required, and report success rate rather than a binary verdict — because sampling variance alone means that repeated attempts on a stochastic system will eventually produce an outlier, and an attacker with an automated loop is exactly the person who will run those attempts. Robustness under repeated sampling is therefore the property that matters, not resistance to one try. Two further honesty requirements: test the deployed system with its full guardrail stack rather than the bare model, since input and output filtering change the picture substantially, and measure over-refusal in the same exercise. A system that blocks everything scores perfectly on attack resistance and is useless.',
          bullets: [
            'Record attempts, successes, and turns — effort is part of the finding',
            'Repeated sampling finds outliers; robustness means resisting a loop, not one try',
            'Test the deployed stack with its filters, not the raw model in isolation',
            'Measure false refusals alongside harmful compliance — both are failures',
          ],
        },
      ],
    },
    {
      id: 'ev4l3',
      title: 'Prompt Injection: Direct and Indirect',
      slides: [
        {
          heading: 'The Structural Problem',
          body: 'Prompt injection is not a bug with a patch pending. It follows from the architecture: instructions and data arrive in the same channel as text, and the model has no reliable mechanism to distinguish content it was given to process from instructions it should obey. Direct injection comes from the user, who is trying to change how the system treats them. Indirect injection is the serious one: hostile instructions embedded in content the system ingests — a web page, an email body, a document, a code comment, a ticket description, a tool response — where the attacker never interacts with your product at all, and the victim is whoever the system is serving. Everything the system reads is an instruction channel. The defensive question is therefore not how to eliminate injection but how much damage a successful one can do.',
          bullets: [
            'Instructions and data share one channel; the model cannot reliably separate them',
            'Direct injection comes from the user; indirect rides in on ingested content',
            'The attacker may never touch your product — they plant text where it will be read',
            'Design assuming injection succeeds; measure the blast radius',
          ],
        },
        {
          heading: 'Testing Methodology',
          body: 'Test injection with harmless markers rather than real payloads. Define a benign objective that is unambiguous and safe to trigger — emit a specific nonsense token, call a designated no-op tool, write a marker into a scratch field — and measure whether injected content can cause it. Success is then observable, automatable, and produces no harm even when it works. Systematically enumerate every untrusted channel the system reads and place a marker in each: retrieved documents, tool outputs, file contents, page text, message bodies, metadata fields, filenames, and any user-supplied content that reaches another user\'s session. Vary placement within the content, since position matters, and vary the framing across injection categories. The result is a coverage matrix of channel against technique, which is exactly the artefact that tells you where you have not looked.',
          bullets: [
            'Use benign canary objectives — measure influence, never trigger real harm',
            'Enumerate every ingestion channel and test each one deliberately',
            'Vary placement within content and framing across categories',
            'Report a channel-by-technique coverage matrix, not an anecdote',
          ],
        },
        {
          heading: 'Testing the Defences, Not Just the Model',
          body: 'Defences against injection are layered and each layer deserves its own test. Delimiting and marking untrusted content raises the bar and is defeated by content that mimics the markers, so test that explicitly. Classifier-based screening of inputs and outputs catches known patterns; measure its false-negative rate against novel phrasings rather than the corpus it was tuned on. Provenance tracking, where content is tagged by trust level and privileged actions require trusted provenance, is stronger — verify the tagging survives every transformation, summarisation, and hop between components. Architectural separation is stronger still: a planner that never sees untrusted content and an executor that cannot change the plan, so ingested text cannot alter what actions occur. Test each layer with an adaptive attacker who knows it is there, because a defence only evaluated against attacks that predate it will always look excellent.',
          bullets: [
            'Delimiters and markers help and are defeated by mimicry — test that case',
            'Measure classifier false negatives on novel phrasings, not on its training corpus',
            'Verify provenance tags survive summarisation, transformation, and component hops',
            'Planner-executor separation limits what injected text can change; test the boundary',
            'Always evaluate defences against an adaptive attacker aware of them',
          ],
        },
        {
          heading: 'Blast Radius Is the Real Metric',
          body: 'Because no prompt-level defence holds reliably, the measurement that matters is what a successful injection reaches. Work the danger combination explicitly: does this component have access to private data, exposure to untrusted content, and a channel to communicate outward? Any component holding all three can be turned into an exfiltration path by a single well-placed paragraph, and the test is whether you can demonstrate a benign marker travelling from an untrusted document to an external destination. Enumerate outbound channels honestly, since they are more numerous than teams expect — network requests, rendered links and images, writes to shared stores, emails and messages, commit messages, log fields others read. Then re-test after each mitigation, confirming the path is closed rather than that the specific attempt now fails.',
          bullets: [
            'Score components on the trifecta: private data, untrusted content, outbound channel',
            'Demonstrate the path with a benign marker rather than arguing about it',
            'Enumerate outbound channels broadly — rendered content and shared stores count',
            'Re-test that the path is closed, not merely that one attempt no longer works',
          ],
        },
      ],
    },
    {
      id: 'ev4l4',
      title: 'Red-teaming Agents',
      slides: [
        {
          heading: 'The Loop Is the Attack Surface',
          body: 'Against a chatbot, a successful attack yields bad text. Against an agent, it yields actions taken with the agent\'s authority — and the agent runs with credentials, tool access, and, often, standing permissions across systems. So the target of agent red-teaming is the loop: what enters the context at the observe step, what the model decides, and what the runtime will execute without further checks. Three properties determine severity, and they should be assessed per agent: the breadth of the toolset, the scope of the credentials it holds, and which actions are irreversible. An agent with narrow read-only tools and a hostile context is a nuisance; an agent with write access to shared systems and the same hostile context is an incident waiting for a trigger.',
          bullets: [
            'Tool results re-enter the context — every one is untrusted input to the next decision',
            'Severity is set by toolset breadth, credential scope, and reversibility of actions',
            'Enumerate what the runtime will execute with no human or policy check',
            'Test the agent as deployed, with its real tool schemas and permissions',
          ],
        },
        {
          heading: 'Tool Misuse and Excessive Agency',
          body: 'Several distinct failures hide under the label of tool misuse and they need separate tests. Wrong-tool selection: can crafted context make the agent choose a destructive tool where a safe one was appropriate? Argument manipulation: can it be induced to call a legitimate tool with attacker-chosen parameters — a different recipient, a broader query, a wider file path? Excessive agency is the structural version: the agent holds permissions far beyond the task, so an attacker only needs to redirect it rather than escalate. Audit the actual grants rather than the intended ones, since agents commonly inherit a service account that accumulated scope over time. Confused-deputy testing closes the set: verify that the agent applies the requesting user\'s authorisation rather than its own, because an agent that answers using its own broad access is a cross-tenant data leak with a friendly interface.',
          bullets: [
            'Test tool selection and argument manipulation as separate failure modes',
            'Audit granted permissions, not intended ones — service accounts accumulate scope',
            'Confused deputy: confirm per-user authorisation is enforced on every tool call',
            'Least privilege and per-task credentials shrink every one of these findings',
          ],
        },
        {
          heading: 'Exfiltration Paths and Persistence',
          body: 'Two agent-specific classes deserve dedicated testing. Exfiltration: inventory every way data can leave, including the non-obvious ones — outbound requests, content that renders and fetches on display, writes to shared documents or repositories, messages and tickets, and log or telemetry fields that other systems read. Then test each with a benign marker planted in private context, and treat default-deny egress plus allowlisting as the mitigation to verify rather than assume. Persistence: agents that carry memory across sessions, or that retrieve from a corpus, can be poisoned once and influenced repeatedly. Test whether untrusted content can cause a memory write, whether that memory is attributed to its source, whether poisoned entries surface later on an attacker-chosen topic, and whether an operator can actually find and remove contaminated entries.',
          bullets: [
            'Inventory outbound channels exhaustively; rendered content and shared stores are exfil paths',
            'Plant benign markers in private context and try to route them out',
            'Test whether untrusted content can write memory, and whether writes carry provenance',
            'Verify a working purge path — contamination you cannot excise is a standing backdoor',
          ],
        },
        {
          heading: 'Multi-Agent and Sandbox Boundaries',
          body: 'Multi-agent systems add trust relationships between components, and those relationships are usually implicit. Test whether one agent treats another\'s output as trusted instruction, whether a delegated subtask can return content that redirects the orchestrator, and whether a compromised or hostile peer can escalate by delegating actions it could not perform directly. Then test the containment layer itself: from inside the execution sandbox, attempt to reach the network where egress should be denied, read files outside the declared scope, exhaust resources, or persist state between runs that should be isolated. And exercise the approval gates as a human attacker would — can the agent be induced to present a misleading rationale to the approver, or to split a gated action into ungated pieces? Approval fatigue and misleading summaries are exploitable, and a gate that is always approved is decoration.',
          bullets: [
            'Test whether peer or subagent output is treated as trusted instruction',
            'Probe sandbox boundaries: egress, filesystem scope, resource limits, cross-run persistence',
            'Try to split a gated action into ungated steps, or mislead the approver\'s summary',
            'Assert invariants on traces: no privileged tool after untrusted content without a gate',
          ],
        },
      ],
    },
    {
      id: 'ev4l5',
      title: 'Automated Red-teaming and Its Limits',
      slides: [
        {
          heading: 'What Automation Does Well',
          body: 'Automated adversarial testing is now standard and genuinely valuable. The common architectures: an attacker model generates attempts against a target and iterates on feedback, a scanner runs a maintained library of probes across known vulnerability classes, and a mutation engine takes a seed corpus of attack patterns and systematically varies phrasing, framing, encoding, and language. Open tooling exists in each category and integrates into CI. The strengths are breadth and repeatability — thousands of attempts across every category on every release, at a cost no human team can match — and regression coverage, since previously successful attacks can be replayed automatically forever. That last property alone justifies the investment: it is how you know a fix stayed fixed across model upgrades.',
          bullets: [
            'Attacker-model loops, probe scanners, and mutation over a seed corpus',
            'Breadth and repeatability at a scale no human team can reach',
            'Automated regression on past findings is the highest-value use',
            'Runs in CI, so robustness is checked on every release rather than annually',
          ],
        },
        {
          heading: 'The Ceiling',
          body: 'Automation searches the space it was told about. It generates variations on known categories and finds novel instances within them, but it does not invent a mechanism nobody has described, and the genuinely damaging findings are usually a new mechanism or a business-logic path that requires understanding what the system is for. Three further limits matter. Grading: most automated red-teaming depends on a model judging whether an attempt succeeded, so its accuracy bounds everything and its biases propagate silently — validate that judge like any other. Overfitting: defences tuned until the automated suite is clean are tuned to the suite, and adaptive attackers who know the defence still get through. Context blindness: a tool cannot tell you that an output is catastrophic in your regulatory environment and harmless in someone else\'s, because that judgement is not in the corpus.',
          bullets: [
            'Automation explores known categories; humans find new mechanisms',
            'The success judge bounds the whole pipeline — validate it against human labels',
            'A clean automated suite can mean a tuned defence, not a robust one',
            'Business-context harm requires human judgement, not a probe library',
          ],
        },
        {
          heading: 'The Combination That Works',
          body: 'Split the work by comparative advantage. Humans explore: creative sessions with domain experts and security engineers hunting new mechanisms, business-logic abuse, and the specific harms that matter in your context. Automation regresses: every confirmed human finding becomes an automated probe that runs forever, plus continuous breadth-first coverage of known categories. Feed each direction into the other — automated results surface areas worth human attention, human findings expand the automated corpus. Report the two separately, because conflating them produces the most common misreading in this space: an impressive number of automated attempts recorded as evidence of robustness when the exercise never included anyone thinking about what this particular system is for.',
          bullets: [
            'Humans discover novel mechanisms; automation guarantees they stay fixed',
            'Every human finding becomes an automated probe with an assertion',
            'Report human and automated coverage separately — they answer different questions',
            'Attempt counts are not robustness evidence; category coverage against a threat model is',
          ],
        },
      ],
    },
    {
      id: 'ev4l6',
      title: 'Safety Evals, Reports, and Disclosure',
      slides: [
        {
          heading: 'Two Layers of Safety Evaluation',
          body: 'Safety evaluation happens at two levels and they are often confused. At the frontier-model level, developers and independent evaluators run dangerous-capability assessments — whether a model can meaningfully assist with biological, chemical, or nuclear threats, offensive cyber operations, or autonomous self-replication — under published frontier safety frameworks that tie capability thresholds to required safeguards. This work needs specialist infrastructure, controlled environments, and careful handling of results, and most practitioners will never run it. At the application level, which is where the rest of us work, safety evaluation asks whether your deployed system produces harmful content in your domain, leaks personal or confidential data, behaves inequitably across user groups, or takes unsafe actions. That is your responsibility regardless of what the model developer tested, because your prompts, tools, data, and users are yours.',
          bullets: [
            'Frontier dangerous-capability evals are specialist work under published safety frameworks',
            'Application-level safety evaluation is your responsibility and covers your domain and users',
            'Model-card claims describe the base model, not your deployed system',
            'Handle sensitive evaluation results with the same care as the capability they probe',
          ],
        },
        {
          heading: 'Over-Refusal Is a Failure Too',
          body: 'Safety evaluation that measures only harmful compliance drives systems toward uselessness, because the trivially perfect score is refusing everything. Always run a paired benign set alongside the adversarial one: legitimate requests that superficially resemble prohibited ones — a security team asking about attack techniques for defence, a clinician discussing medication overdose thresholds, a researcher describing extremist rhetoric in order to analyse it. Report harmful-compliance rate and false-refusal rate together and treat a change that improves one while degrading the other as the trade-off it is. Over-refusal has real costs: users route around the tool, trust in the safety layer erodes, and the population most affected is often the professional audience with the most legitimate need for the borderline content.',
          bullets: [
            'Pair every adversarial set with benign look-alike requests from legitimate users',
            'Report harmful compliance and false refusal together; neither alone is a score',
            'Over-refusal pushes users to unmonitored tools — a security outcome, not just a UX one',
            'Domain professionals are hit hardest by blunt refusal policies',
          ],
        },
        {
          heading: 'Writing a Report People Act On',
          body: 'A finding that nobody fixes was not worth discovering, and the difference is almost always the write-up. Lead with impact in business terms rather than technique: what an attacker achieves, against whom, and what it would cost. State preconditions honestly — what access, what authorisation, how many attempts, what success rate — because a finding that requires an authenticated internal account and works one time in twenty is real and should not be presented as trivially exploitable. Provide a reproduction that an engineer can run in a controlled environment, with the sanitised detail needed to verify and no more. Rank by exploitability against impact rather than by how interesting the technique was. Recommend a fix at the right architectural layer, since prompt-level patches for structural issues create the illusion of resolution. And define the retest criteria at the point of writing, so closure is a measurement rather than an opinion.',
          bullets: [
            'Impact and affected parties first; technique second',
            'State preconditions and success rates honestly — credibility is the asset',
            'Rank by exploitability times impact, not by novelty',
            'Recommend fixes at the architectural layer that actually contains the issue',
            'Define retest criteria in the report so closure is verifiable',
          ],
        },
        {
          heading: 'Responsible Disclosure',
          body: 'Findings routinely span layers, and where a finding lives determines who you tell. An issue in your own application goes into your normal remediation process and, if it affected users, your incident and notification process. An issue in a third-party model, framework, or MCP server goes to that vendor through their security channel, following coordinated disclosure: private report, agreed remediation window, public detail only after a fix or an agreed deadline. Read the vendor\'s policy first, since many run bug bounty or model-safety reporting programmes with explicit safe-harbour terms that define what testing is authorised — and those terms are what make the testing legal as well as welcome. When publishing, describe mechanisms and defences rather than distributing working exploits, weight the disclosure toward what defenders need, and never include real customer or personal data in a report that will travel.',
          bullets: [
            'Route findings by layer: your app, the model provider, or the framework maintainer',
            'Coordinated disclosure: private report, agreed window, then publication',
            'Read the vendor safe-harbour and bounty terms before testing, not after',
            'Publish mechanisms and mitigations, not copy-pasteable exploits',
            'Strip real data from anything that leaves your organisation',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What is the non-negotiable precondition for any red-teaming activity described in this module?', options: ['A model judge validated against human labels', 'Written authorisation and an agreed scope covering systems you own or are permitted to test', 'A minimum of one hundred documented attack attempts', 'Access to the model provider\'s internal weights'], correct: 1 },
    { q: 'How does red-teaming differ fundamentally from standard evaluation?', options: ['Red-teaming uses larger sample sizes', 'Red-teaming is only performed by external firms', 'Evals search for worst-case behaviour while red teams measure averages', 'Evals measure average behaviour on representative inputs; red-teaming searches for worst-case behaviour under an adversary'], correct: 3 },
    { q: 'Why organise red-teaming around attack categories rather than a library of known payloads?', options: ['Categories are easier to explain to executives', 'Payload libraries are prohibited by most vendor terms', 'Specific strings get patched and decay, while mechanisms persist and give comparable coverage across versions', 'Categories eliminate the need for a threat model'], correct: 2 },
    { q: 'What makes indirect prompt injection more serious than direct injection?', options: ['It requires no authentication to the target application at all — hostile instructions ride in on content the system ingests, and the victim is another user', 'It always bypasses output filtering', 'It only affects multimodal systems', 'It cannot be detected in traces'], correct: 0 },
    { q: 'What is the recommended way to test for prompt injection without causing harm?', options: ['Run known jailbreak payloads against the production system', 'Use benign canary objectives — a harmless marker token or no-op tool call — and measure whether injected content can trigger them', 'Ask the model whether it would follow injected instructions', 'Disable guardrails and observe raw model behaviour'], correct: 1 },
    { q: 'An agent answers a user\'s question using data that user is not authorised to see, because the agent holds broad service-account access. What is this?', options: ['Verbosity bias', 'Benchmark contamination', 'A confused deputy failure', 'Over-refusal'], correct: 2 },
    { q: 'What is the principal limitation of automated red-teaming?', options: ['It cannot be integrated into CI pipelines', 'It is more expensive per attempt than human testing', 'It only works against open-weight models', 'It explores the categories it was given and rarely discovers novel mechanisms or business-logic abuse'], correct: 3 },
    { q: 'Why must safety evaluation measure false refusals alongside harmful compliance?', options: ['Because regulators require both metrics in all jurisdictions', 'Because refusal rates determine inference cost', 'Because a system that refuses everything scores perfectly on harm while being useless, pushing users to unmonitored tools', 'Because false refusals indicate benchmark contamination'], correct: 2 },
  ],
};

export default evM4;
