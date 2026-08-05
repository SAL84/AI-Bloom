import type { CourseModule } from '../../types/course';

const secM3: CourseModule = {
  id: 'sec-m3',
  title: 'Hardening and Controls',
  icon: 'shield',
  summary: 'Least privilege for agents and scoped tool access, sandboxing and egress control, approval gates on irreversible actions, structured output and constrained decoding, guardrail models and their false-positive cost, agent identity and full-trace audit logging, and defence in depth with an honest account of what no single control can hold.',
  lessons: [
    {
      id: 'sec3l1',
      title: 'Least Privilege for Agents',
      sectionLabel: 'Controls',
      diagram: 'AgentLeastPrivilege',
      slides: [
        {
          heading: 'Design the Toolset as a Permission Set',
          body: 'The most effective control available is also the least glamorous: give the agent fewer capabilities. Every tool registered is a permission granted, so design the toolset the way you would design a role. Start from the task and work forward — what does this feature actually need to do — rather than starting from an available server and registering everything it exposes. Prefer narrow, purpose-built tools over general ones: a tool that fetches a customer\'s open tickets is safer than one that accepts an arbitrary query, because the narrow tool cannot be steered into returning something else. Split read from write, so a feature that mostly reads holds a read-only tool set and a write path exists only in the step that needs it. And review the list on a schedule, because tool lists grow monotonically unless someone is responsible for removing what is no longer used.',
          bullets: [
            'Each registered tool is a granted permission — design the list, do not accumulate it',
            'Purpose-built tools resist argument steering that arbitrary-query tools invite',
            'Separate read tools from write tools and expose write only where needed',
            'Tool lists grow unless someone owns removal; schedule the review',
            'On the standard maps: OWASP\'s LLM Top 10 frames this risk as excessive agency — least privilege is its first-line mitigation',
          ],
        },
        {
          heading: 'Credentials: Scope, Delegation, and Lifetime',
          body: 'Behind every tool is a credential, and that is where excessive privilege usually hides. Three properties matter. Scope: the credential should permit exactly the operations of the tool it backs, which means separate credentials per tool rather than one service identity reused across a whole feature. Delegation: for anything that reads user-specific data, the call must carry the requesting user\'s authority so the system cannot return data the user could not otherwise reach — using a broad service identity for retrieval is the standard route to cross-user disclosure, and it is convenient enough that it appears in most systems that have not been reviewed. Lifetime: prefer short-lived, task-scoped credentials issued per run over standing ones, so that a compromised or hijacked run has a bounded window. Expiry is a control, not an operational inconvenience.',
          bullets: [
            'One credential per tool, scoped to that tool\'s operations',
            'Carry the requesting user\'s authority on any user-data access — never a shared service identity',
            'Issue short-lived per-run credentials so hijacking has a bounded window',
            'Audit resolved effective permissions, not role names',
          ],
        },
        {
          heading: 'Split by Trust, Not by Convenience',
          body: 'Where a feature genuinely needs both untrusted content and privileged access, the durable answer is to split it into components with different trust levels rather than to defend the combination. A retrieval or browsing component runs with no credentials, no private data, and no egress, and its job is to reduce external material into structured, validated fields. A privileged component consumes those fields and never sees raw external prose. The interface between them carries typed data with constrained values, which is what makes the boundary meaningful — passing a free-text summary across the boundary reintroduces exactly the channel the split was meant to remove. This is the same reasoning that separates a parser from an executor in any security-sensitive design, and it holds here because the constraint is enforced by the interface rather than by the model\'s good behaviour.',
          bullets: [
            'Unprivileged reader, privileged actor, typed interface between them',
            'The reader gets no credentials, no private data, and no egress',
            'Pass constrained typed fields — a free-text summary re-opens the channel',
            'The boundary works because the interface enforces it, not because the model respects it',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General',
          body: 'The safest AI system is usually the one that has been given the least to work with. If a feature only needs to read, it should not be able to write; if it only needs one kind of record, it should not be able to reach the rest.',
          bullets: [
            'Fewer capabilities means less damage when something goes wrong',
            'Access that expires is safer than access that simply exists',
            'A system acting with your permissions should not see more than you can',
          ],
        },
        {
          role: 'security-se',
          label: 'Security Engineer',
          body: 'This is identity and access management applied to a new principal type, so use the review process you already have. The two findings that recur everywhere are shared service identities used for user-data retrieval and standing credentials with no expiry.',
          bullets: [
            'Treat each agent as a principal with an owner, a scope, and a review date',
            'Check delegation first — service-identity retrieval is the most common serious finding',
            'Require per-tool credentials so a single compromised tool does not carry the whole feature\'s scope',
            'Verify by attempting access as the agent, not by reading the role definition',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Build tools narrow and typed from the start. A tool that takes an enumerated action and a validated identifier is far harder to misuse than one that takes a query string, and the narrowing costs almost nothing at design time.',
          bullets: [
            'Constrain arguments with enums and validated identifiers rather than free text',
            'Enforce authorisation inside the tool implementation, never in the prompt',
            'Fetch per-run credentials at run start and let them expire rather than holding long-lived secrets',
            'Fail closed when the acting identity cannot be resolved',
          ],
        },
        {
          role: 'consultant',
          label: 'Consultant',
          body: 'Least privilege is the recommendation clients can implement without new vendors, so lead with it. The hard part is not technical but organisational: someone must own the tool and permission inventory once you have gone.',
          bullets: [
            'Deliver a resolved permission inventory — most clients have never produced one',
            'Assign an owner for the tool list and a review cadence before the engagement ends',
            'Show the split architecture as a reference design so it survives the next feature',
            'Frame expiry and delegation as engineering defaults, not as extra work',
          ],
        },
      ],
    },
    {
      id: 'sec3l2',
      title: 'Sandboxing and Egress Control',
      diagram: 'SandboxEgress',
      slides: [
        {
          heading: 'Contain Execution Before You Trust Behaviour',
          body: 'Any agent that runs code, executes shell commands, or processes untrusted files needs an execution container with explicitly declared boundaries, and the declaration should be positive rather than negative — state what it may reach, not what it may not. Filesystem access limited to a working directory populated with exactly the inputs the task needs. No credentials mounted into the environment, because a secret present in a sandbox is a secret available to anything the sandbox runs. Resource limits on CPU, memory, processes and wall-clock, so a runaway or deliberately expensive workload terminates rather than consuming the host. Fresh state per run, so nothing persists between tasks unless a deliberate mechanism carries it. Containment is what makes the rest of the design tolerable: it converts arbitrary code execution from an incident into a contained event with a known boundary.',
          bullets: [
            'Declare what the sandbox may reach, not what it may not',
            'No credentials inside the sandbox — presence equals availability',
            'Resource and time limits handle both accidents and deliberate exhaustion',
            'Fresh state per run unless persistence is an explicit, reviewed feature',
          ],
        },
        {
          heading: 'Egress Is the Control That Holds',
          body: 'Default-deny egress deserves its reputation as the highest-leverage control in this space, for a specific reason: it is enforced by infrastructure rather than by the model or the application, so it holds even when everything above it has been fully persuaded. Deny all outbound connections and allowlist the specific destinations the task requires. Prefer an authenticated forward proxy that can log and constrain requests over network-level rules alone, because the proxy sees intent — full URLs, methods, sizes — where a firewall sees addresses. Control name resolution too, since resolver traffic is an outbound channel in its own right. And treat the allowlist as a security artefact under change control: allowlists widen quietly, one urgent exception at a time, and an allowlist that includes a general-purpose service that can relay arbitrary content is functionally open.',
          bullets: [
            'Enforced in infrastructure, so it survives a fully persuaded model',
            'Deny by default; allowlist specific destinations for specific tasks',
            'Prefer a logging proxy over address-level rules — it sees intent, not just endpoints',
            'Constrain name resolution; an allowlist entry that can relay arbitrary content is an open door',
          ],
        },
        {
          heading: 'Where Sandboxing Does Not Help',
          body: 'Be precise about what containment does not address, because over-claiming here leads to a false sense of completion. A sandbox constrains the code the agent runs; it does nothing about the tools the agent legitimately calls outside it. If the agent has an approved tool that sends messages, a perfect sandbox is irrelevant to a message being sent with attacker-chosen content. It does not stop the model from producing wrong or harmful output, since the output leaves the sandbox by design. It does not stop data reaching the model\'s context and then leaving through a permitted destination. And a sandbox with mounted credentials or a broad allowlist is a sandbox in name only. Sandboxing addresses one specific failure — arbitrary execution reaching the host or the network — and it should be described that way in the threat model rather than as generalised containment.',
          bullets: [
            'Sandboxes contain executed code, not the agent\'s legitimate tool calls',
            'Harmful output leaves the sandbox by design — that is what output is',
            'Mounted credentials or a wide allowlist defeat the whole control',
            'Record precisely which threat the sandbox addresses so nobody over-credits it',
          ],
        },
      ],
    },
    {
      id: 'sec3l3',
      title: 'Approval Gates on Irreversible Actions',
      diagram: 'IrreversibleActionGates',
      slides: [
        {
          heading: 'Gate by Consequence, Not by Category',
          body: 'Approval gates are the control most often implemented badly, and the failure is nearly always in placement. Gating every tool call produces volume, volume produces reflexive approval, and a reflexively approved gate is worse than none because it creates a documented human decision that did not occur. Place gates by consequence instead. The first axis is reversibility: can this be undone, by whom, and how quickly. Sending a message, transferring money, deleting a record, granting a permission, deploying, and publishing are irreversible in the practical sense that a third party has already been affected. The second axis is reach: how many records, whose data, which systems. A short list of genuinely gated actions that people read is worth far more than a comprehensive one they click through, and choosing that short list is a design decision the team should make explicitly and revisit.',
          bullets: [
            'Volume destroys gates; reflexive approval documents a decision nobody made',
            'Gate on reversibility and reach, not on tool category',
            'Irreversible means a third party has already been affected',
            'Fewer, meaningful gates beat comprehensive ones that get clicked through',
          ],
        },
        {
          heading: 'What the Approver Must See',
          body: 'The approval screen is a security interface, and its content determines whether the decision is real. It must show the concrete action and its exact parameters — the actual recipient, the actual amount, the actual record identifier — rather than a natural-language description of intent, because the description is model output and can be inaccurate whether through error or influence. It should show why the action is proposed, with the specific source content that led to it, so an approver can notice that the instruction originated in an external document. It should show reach: how many records, which systems. And it must have a safe default, which is to do nothing, with a timeout that abandons rather than proceeds. Presenting a persuasive summary without the underlying parameters is how an approver ends up authorising something quite different from what they read.',
          bullets: [
            'Show exact parameters, not a natural-language summary of intent',
            'Surface the source content that motivated the action, including whether it was external',
            'State reach: how many records and which systems are affected',
            'Default to abandon on timeout — never proceed',
          ],
        },
        {
          heading: 'How Gates Are Defeated',
          body: 'Gates fail in patterned ways, and each pattern has a corresponding test. Splitting: a gated action is decomposed into ungated steps that achieve the same effect, so gate on the effect rather than on the specific tool where you can. Fatigue: raising volume until approvals become automatic, which means approval rate and time-to-decision are security metrics worth monitoring — an approver averaging two seconds is not reading. Misleading rationale: the summary is influenced so the action appears routine, which is why parameters must be shown independently of any generated text. Timing: requesting approval inside a long autonomous run when attention has lapsed. And bypass: an alternative code path that reaches the same effect without the gate, which is the one to test for directly, because gates are usually added at one call site rather than at the capability.',
          bullets: [
            'Splitting: gate the effect, not one call site, and test for alternate paths',
            'Monitor approval rate and decision time — they measure whether the gate is real',
            'Show parameters independently of generated rationale to defeat misleading summaries',
            'Test for ungated code paths reaching the same capability',
          ],
        },
        {
          heading: 'Alternatives When a Human Cannot Be in the Loop',
          body: 'Human approval does not scale to every deployment, so it is worth knowing the substitutes and their honest limits. Policy checks in the runtime can permit or deny an action deterministically based on parameters, provenance, and context — an amount ceiling, a recipient allowlist, a rule that no privileged action follows untrusted content in the same turn. These are strong because they are structural and cheap because they are automatic. Staged execution helps too: perform the action in a reversible form first, such as a draft, a hold, or a scheduled item with a delay window, so a human or a monitor can intervene before it becomes final. Post-hoc sampled review catches drift but not the individual incident, and should be described that way. What does not work is asking a second model to judge whether the action is safe and treating that as a boundary — it is a signal with an error rate, not a control.',
          bullets: [
            'Deterministic policy checks on parameters and provenance scale where humans cannot',
            'Staged execution — drafts, holds, delay windows — buys intervention time',
            'Sampled post-hoc review detects drift, not the individual event',
            'A model judging an action is a signal with an error rate, not a boundary',
          ],
        },
      ],
    },
    {
      id: 'sec3l4',
      title: 'Structured Output and Constrained Decoding',
      diagram: 'StructuredOutputControl',
      slides: [
        {
          heading: 'Constraining the Shape of What the Model Can Emit',
          body: 'Constrained decoding restricts generation so the output must conform to a schema or grammar: at each step, tokens that would make the result invalid are excluded, so the model cannot produce malformed structure even if it would otherwise. As a security control this matters because it removes an entire class of downstream failure. When output is guaranteed to be a valid object with typed fields, the consumer does not need to parse free text, and an injected instruction cannot introduce structure the consumer will misread — no extra fields, no trailing content, no format confusion. It also shrinks the expressive room available to a persuaded model: if a tool takes an enumerated action and a validated identifier, the space of harmful calls is bounded by the schema regardless of what the model was persuaded to attempt. Constrain the shape, and you constrain the reachable outcomes.',
          bullets: [
            'Generation is restricted to tokens that keep the output schema-valid',
            'Removes format confusion and parsing ambiguity at the consumer',
            'Enumerated actions and validated identifiers bound what a persuaded model can attempt',
            'Constraining shape constrains the set of reachable outcomes',
          ],
        },
        {
          heading: 'The Limit: Valid Is Not Safe',
          body: 'The essential caveat is that a schema constrains form, not intent. A transfer object with a valid recipient identifier and a valid amount is schema-perfect and may still be the wrong recipient and the wrong amount, chosen because a document told the model to choose them. Every free-text field inside a valid object is an unconstrained channel — a message body, a note, a filename, a search query — and if any consumer renders or executes that field, the constraint has bought nothing there. Schemas are also frequently permissive in practice: an identifier typed as a string rather than a pattern-validated reference, an enum that includes an unused destructive option, an object with an open additional-properties policy. Constrained decoding is a strong hygiene control that eliminates a class of parsing failures. It is not authorisation, and treating it as one is a common overreach.',
          bullets: [
            'Schemas constrain form; the values inside remain attacker-influenceable',
            'Free-text fields inside a valid object are unconstrained channels',
            'Permissive schemas — loose string types, unused destructive enum values — give back the ground',
            'Structure is not authorisation; the policy check still has to happen',
          ],
        },
        {
          heading: 'Validate at Every Consumer',
          body: 'The complementary control is proper output handling wherever model output is used, and it follows ordinary application security practice applied to a source many teams forget to treat as untrusted. Text rendered in a browser needs encoding and a policy that prevents automatic fetching of remote resources referenced in it. Content passed to a shell, a query engine, a template renderer, or a deserialiser needs the same treatment as any user-supplied input, because that is exactly what it is. Identifiers should be resolved and authorised at the consumer rather than trusted because they arrived in a typed field. And output consumed by another agent should be treated as data unless you have deliberately decided otherwise. The recurring failure is a pipeline where output was validated once at the model boundary and then treated as internal by five components downstream.',
          bullets: [
            'Model output is untrusted input at every consumer, not only at the first one',
            'Encode for the rendering context and disable automatic remote resource fetching',
            'Resolve and authorise identifiers at the consumer, not on arrival',
            'Validate once at the boundary and trust everywhere after is the pattern to avoid',
            'OWASP\'s LLM Top 10 names this downstream failure improper output handling — treat every consumer as the enforcement point',
          ],
        },
      ],
    },
    {
      id: 'sec3l5',
      title: 'Guardrail Models and Their False-Positive Cost',
      diagram: 'GuardrailModels',
      slides: [
        {
          heading: 'What a Guardrail Layer Is For',
          body: 'A guardrail layer is one or more classifiers screening content on the way into the model, on the way out, or around a tool call — checking for injection-like content, prohibited topics, personal data, credentials, or actions inconsistent with the request. Used well, it does real work: it catches the large volume of unsophisticated attempts, it flags content for review, it enforces domain policies that are genuinely easier to express as a classifier than as a rule, and it generates the signal your detection depends on. The right mental model is a detective control that also happens to block, sitting on top of the structural controls rather than in place of them. That framing matters because it sets expectations correctly: you buy visibility and attacker cost, and you should be able to state what happens when it misses.',
          bullets: [
            'Classifiers on input, output, or around tool calls; block and flag',
            'Genuinely effective against high-volume unsophisticated attempts',
            'Best understood as a detective control that also blocks',
            'Sits on top of structural controls, never in place of them',
          ],
        },
        {
          heading: 'The False-Positive Economics',
          body: 'Every guardrail has two error rates and they trade against each other, so the interesting question is never accuracy in isolation. Consider the base rate: if genuine attacks are a small fraction of traffic, even a low false-positive rate produces far more blocked legitimate requests than caught attacks, and the operational cost lands on users rather than on attackers. The costs are concrete. Professional users hit refusals on exactly the borderline content their work requires — a security team asking about attack techniques, a clinician discussing dosage limits, a lawyer describing a fraud pattern. Blocked-but-legitimate requests train users to route around the tool, which moves the activity somewhere unmonitored. And a noisy guardrail degrades the review queue it feeds, because alerts nobody can triage are alerts nobody reads. Tune with both rates measured, and measure them on your own traffic.',
          bullets: [
            'Low false-positive rates still dominate when attacks are rare — check the base rate',
            'Professional users are hit hardest because their legitimate work looks borderline',
            'Blocked users move to unmonitored tools; that is a security outcome, not a UX one',
            'A noisy guardrail degrades the review queue it exists to feed',
          ],
        },
        {
          heading: 'Adaptive Attackers and Measured Claims',
          body: 'A guardrail is a model, which means it has an input surface of its own and can be evaluated against by an attacker. Phrasings that evade it exist, can be found by iteration, and are cheap to search for when the attacker can observe whether a request was blocked. Reported effectiveness numbers are usually produced against a fixed corpus of known attempts, and a defence evaluated only against attacks that predate it will always look excellent — so treat any figure as a statement about that corpus, not about your traffic. Two practices keep the claim honest. Measure against fresh attempts generated after the guardrail was deployed, not against its tuning set. And record what happens on a miss: which structural control catches it, what signal fires, and how you would know. A guardrail whose failure mode is undefined is being used as a boundary.',
          bullets: [
            'The guardrail is itself a model with an evadable input surface',
            'Effectiveness figures describe the corpus they were measured on, not your traffic',
            'Evaluate with attempts generated after deployment, never the tuning set',
            'Define the miss case: which control catches it and which signal fires',
          ],
        },
      ],
    },
    {
      id: 'sec3l6',
      title: 'Identity, Audit Trails, and Defence in Depth',
      diagram: 'DefenseInDepthAI',
      slides: [
        {
          heading: 'Agents Need Identities, Not Borrowed Ones',
          body: 'An agent acting under a shared service identity is unattributable by construction: you cannot tell which run, which user, or which version produced an action, which makes both incident scoping and routine access review impossible. Give each agent a distinct identity, and make each run distinguishable — a run identifier that appears on every downstream call, in every log entry, and in every record the agent creates. Where a call acts for a user, the identity must express both facts: this agent, on behalf of this user, so that authorisation applies the user\'s scope while attribution records the agent. Treat these identities with the same lifecycle discipline as human accounts: an owner, a purpose, a review date, and a decommissioning path. Agent identities that outlive the feature they were created for are the AI-era version of the orphaned service account.',
          bullets: [
            'Distinct identity per agent, distinct correlatable identifier per run',
            'Express both parties: this agent acting on behalf of this user',
            'Authorisation uses the user\'s scope; attribution records the agent',
            'Owner, purpose, review date, decommissioning path — same as any account',
          ],
        },
        {
          heading: 'What a Usable Trace Contains',
          body: 'After an incident you need to answer three questions: what did the system do, why did it decide to, and what influenced that decision. That determines what to capture. Every model call with the prompt as actually assembled, after templating, retrieval and any context management, because a reconstruction from templates will not match what the model saw. Every retrieved item with its source and identifier, so a poisoned document can be located. Every tool call with full arguments, the acting identity, and the result. Every policy or guardrail decision, including allows, not only blocks. Approval events with what was displayed to the approver. Memory writes with their context. All correlated by run identifier and timestamped consistently. Then handle the trace as sensitive: it contains everything the model saw, which usually means user data, so apply access control, retention limits, and redaction of secrets at write time.',
          bullets: [
            'Capture the assembled prompt, not the template — the gap is where incidents hide',
            'Log retrieved items with source identifiers so poisoned content can be located',
            'Record allows as well as blocks; a policy decision is evidence either way',
            'Traces contain everything the model saw — protect and retain them accordingly',
          ],
        },
        {
          heading: 'Detection Built on the Trace',
          body: 'A trace that is only read after an incident is a forensic asset; a trace that feeds detection is a control. The signals worth building are mostly about sequence and destination rather than content. An unusual tool sequence for a given feature, particularly a privileged call following ingestion of external content in the same run. Outbound requests to destinations not previously seen for that agent. Retrieval of documents unrelated to the user\'s query. Sharp changes in refusal, error, or gate-approval rates, which often move before anything else is noticed. Canary records or documents that should never legitimately be retrieved or transmitted, which are cheap to plant and unambiguous when they fire. Volume anomalies in run length or token consumption. Each of these needs a defined owner and response, or it becomes another unread dashboard.',
          bullets: [
            'Privileged tool call after untrusted ingestion in the same run is the highest-value signal',
            'Alert on new outbound destinations per agent, not just on blocked ones',
            'Canary records and documents fire unambiguously and cost almost nothing',
            'Rate changes in refusals, errors and approvals often move first',
          ],
        },
        {
          heading: 'Defence in Depth, Stated Honestly',
          body: 'No control in this module holds on its own, and saying so plainly is what makes a security position credible. Filtering is evadable. Guardrails have error rates. Approval gates can be split, misled, or worn down. Constrained decoding shapes structure but not intent. Sandboxes contain code but not legitimate tool calls. Least privilege reduces reach but does not prevent misuse within the granted scope. The design goal is therefore not a control that cannot fail but an arrangement in which no single failure is sufficient: capability limited so a persuaded model can do little, egress denied so what it can reach cannot leave, gates on the actions that matter, structure enforced where output is consumed, and a trace good enough to detect and scope what still gets through. Write down, for each control, what it does not cover and which other control is supposed to catch that.',
          bullets: [
            'Every control here is individually defeatable — the arrangement is the defence',
            'Aim for no single failure being sufficient rather than for a control that cannot fail',
            'Document each control\'s gap and name the control that covers it',
            'A stack described without its gaps is marketing, not a security position',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why is a purpose-built tool generally safer than a tool that accepts an arbitrary query?', options: ['It uses fewer tokens in the context window', 'It cannot be steered into returning or affecting something other than its intended target', 'It is faster to execute', 'It does not require a credential'], correct: 1 },
    { q: 'An agent retrieves user-specific data using a shared service identity. What is the principal risk?', options: ['Higher inference cost per request', 'The retrieval index becomes non-deterministic', 'It can return data the requesting user is not authorised to see — a confused-deputy disclosure', 'Traces become larger than necessary'], correct: 2 },
    { q: 'Why is default-deny egress described as the control that holds even when other layers fail?', options: ['Because models are trained to respect network policy', 'Because it blocks prompt injection at the input stage', 'Because it eliminates the need for approval gates', 'Because it is enforced by infrastructure and therefore survives a fully persuaded model'], correct: 3 },
    { q: 'What does a sandbox specifically NOT protect against?', options: ['Arbitrary code reaching the host filesystem', 'Unbounded CPU consumption by executed code', 'Actions taken through the agent\'s legitimate, approved tools outside the sandbox', 'Persistence of state between runs'], correct: 2 },
    { q: 'What is the main reason to gate few actions rather than many?', options: ['Each gate adds significant latency', 'Gates are expensive to license', 'Approvers cannot see tool parameters at high volume', 'High approval volume produces reflexive clicking, which documents a human decision that did not actually occur'], correct: 3 },
    { q: 'What does constrained decoding to a schema guarantee, and what does it not?', options: ['It guarantees the output is valid in form; it does not guarantee the values chosen are correct or safe', 'It guarantees the model cannot be injected', 'It guarantees the tool call is authorised for the requesting user', 'It guarantees free-text fields contain no instructions'], correct: 0 },
    { q: 'Genuine attacks are rare relative to total traffic. What follows for a guardrail classifier with a low false-positive rate?', options: ['The false-positive rate becomes irrelevant at low base rates', 'It will block far more legitimate requests than attacks, pushing users toward unmonitored tools', 'It will fail to log any true positives', 'It will need retraining after every model upgrade'], correct: 1 },
    { q: 'Which trace field most often turns out to be missing when an incident needs reconstruction?', options: ['The prompt as actually assembled after templating, retrieval and context management', 'The HTTP status code of the model API call', 'The model family name', 'The total token count for the run'], correct: 0 },
  ],
};

export default secM3;
