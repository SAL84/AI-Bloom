import type { CourseModule } from '../../types/course';

const secM2: CourseModule = {
  id: 'sec-m2',
  title: 'The Attack Surface in Depth',
  icon: 'shield-alert',
  summary: 'Prompt injection at engineering depth and why filtering alone cannot hold, indirect injection through every ingestion channel, the lethal trifecta used as a design test, tool poisoning and the MCP supply chain, memory and context contamination, excessive agency, and the full inventory of exfiltration paths.',
  lessons: [
    {
      id: 'sec2l1',
      title: 'Prompt Injection at Engineering Depth',
      sectionLabel: 'Mechanisms',
      diagram: 'PromptInjectionDepth',
      slides: [
        {
          heading: 'Why the Model Cannot Separate Instruction from Data',
          body: 'The separation that protects a parameterised database query is structural: the value travels in a different slot from the statement, and the parser never treats one as the other. A language model has no equivalent slot. Everything — system prompt, conversation, retrieved documents, tool results — becomes one token sequence, and the model infers the role of each part from patterns it learned during training. That inference is often good and never guaranteed. Providers train an instruction hierarchy so system content is weighted above user content, and it helps measurably, but it is a learned preference expressed through probabilities rather than an enforced rule, and text that convincingly resembles higher-priority content can shift the outcome. Understanding this precisely matters because it tells you which defences are structural and which are statistical, and only the structural ones belong on a diagram as a boundary.',
          bullets: [
            'No structural slot separates instruction from data; everything is one token sequence',
            'Instruction hierarchy is learned and probabilistic, not parser-enforced',
            'The model infers roles from patterns — convincing text can shift that inference',
            'Distinguish structural controls from statistical ones when drawing boundaries',
            'On the standard maps: this is OWASP LLM01 (prompt injection) — useful shorthand in design reviews and vendor conversations',
          ],
        },
        {
          heading: 'Why Input Filtering Alone Fails',
          body: 'Filtering hostile instructions out of input is the first idea every team has, and it fails for reasons worth stating precisely rather than dismissing. The space of expressions that convey an instruction is unbounded and semantic: there is no finite pattern set covering every way to say what you want the model to do, across languages, indirection, politeness, and framing. Encoding widens the gap further, since content can arrive base64-encoded, translated, split across chunks that are reassembled in context, or embedded in an image or document the model reads. And the filter faces an adaptive attacker who can observe which phrasings pass. A semantic classifier does better than pattern matching, but it is a model with its own error rate operating on the same undecidable question. Filtering is a useful noise reducer that raises attacker cost. It is not a boundary, and no volume of tuning turns it into one.',
          bullets: [
            'Instruction expression is unbounded and semantic — no finite pattern set covers it',
            'Encoding, translation, chunk reassembly and multimodal delivery route around surface filters',
            'The attacker adapts by observing what passes; the filter cannot adapt as fast',
            'Treat filtering as cost-raising noise reduction, never as a trust boundary',
          ],
        },
        {
          heading: 'Direct Injection and What It Is Actually For',
          body: 'Direct injection — the user themselves supplying instructions intended to override the system prompt — is often dismissed as low severity on the grounds that users can only harm themselves. That reasoning holds only in a single-tenant, single-user context, and it breaks in several common cases. If the system prompt encodes business logic such as pricing rules, eligibility criteria, or discount authority, overriding it is a business-logic bypass. If the user\'s session can write to shared state — a corpus, a memory store, a ticket queue, a summary another person reads — the effect crosses to other users. If the assistant\'s output is trusted downstream as though it were system-generated, an overridden model becomes a way to inject content into a trusted channel. And system prompt extraction is a genuine confidentiality issue when the prompt contains internal policy, thresholds, or the tool inventory an attacker would otherwise have to guess.',
          bullets: [
            'Low severity only when the blast radius genuinely ends at the acting user',
            'System prompts carrying business rules make override a business-logic bypass',
            'Any write to shared state carries the effect across the user boundary',
            'Prompt extraction leaks policy, thresholds, and the tool inventory',
          ],
        },
        {
          heading: 'What Actually Reduces Risk',
          body: 'Because the mechanism is architectural, the effective responses are architectural too. Reduce what a persuaded model can do: fewer tools, narrower scopes, no standing credentials, no irreversible action without an independent check. Separate roles so the component exposed to untrusted content is not the component holding privilege — a planner that never sees retrieved text and an executor that cannot alter the plan is stronger than any filter, because the constraint is enforced outside the model. Validate output structurally where it is consumed, so a rendered link, a parsed command, or a downstream parser cannot be steered by free text. And maintain the ability to reconstruct any decision, so that when something does get through you can scope it. Filtering and delimiting still have a place on top of all this; they simply cannot be the thing the design depends on.',
          bullets: [
            'Shrink capability first — the persuaded model can only do what the runtime permits',
            'Separate the component that reads untrusted content from the one holding privilege',
            'Validate at every consumer of model output, structurally rather than by inspection',
            'Keep reconstructable traces so a success can be scoped rather than guessed at',
          ],
        },
      ],
    },
    {
      id: 'sec2l2',
      title: 'Indirect Injection and the Ingestion Inventory',
      diagram: 'IndirectInjection',
      slides: [
        {
          heading: 'The Channel Inventory Is the Work',
          body: 'Indirect injection is the serious case because the attacker never touches your product: they place content where your system will read it, and the victim is whoever the system is serving at the time. Defending it starts with an inventory that is usually longer than teams expect. Retrieved documents and their metadata. Web pages fetched by a browsing tool. Email bodies, attachments, and headers. Ticket titles, descriptions and comments. Repository files, commit messages, code comments, dependency manifests, and CI output. Calendar invites and their notes. Filenames, alt text, and document properties. Tool responses from third-party APIs, including error strings. Content submitted by one user that reaches another user\'s session. Transcripts and captions from audio or video. Every one of these is an instruction channel because the model reads it, and any channel you have not listed is one you cannot have tested.',
          bullets: [
            'The attacker never authenticates — they position content and wait',
            'Metadata counts: filenames, headers, alt text, document properties, error strings',
            'Third-party tool responses are attacker-influenceable if their upstream data is',
            'An unlisted channel is an untested channel — the inventory is the deliverable',
            'OWASP LLM01 (prompt injection) covers this indirect form explicitly; MITRE ATLAS catalogues it among its prompt injection techniques',
          ],
        },
        {
          heading: 'Delayed and Conditional Activation',
          body: 'Two properties make indirect injection harder to test than a single-shot attack, and both should shape your test design. Delay: content is planted long before it is read, so the poisoned document sits in a corpus for weeks and the attack happens when some user asks a related question. There is no temporal correlation between the malicious action and any attacker activity, which defeats detection strategies built on session-level anomaly. Conditionality: planted content can be written to act only under specific circumstances — when a particular topic is retrieved, when a particular tool appears in the context, when the reader appears to hold elevated access. This defeats sampling-based review, because the content behaves benignly whenever it is examined and only activates in the situation it was written for. Assume both properties when designing corpus review and detection.',
          bullets: [
            'Planting and activation are separated in time, breaking session-level correlation',
            'Conditional content stays benign under review and activates only in its target situation',
            'Sampling a corpus for hostile content is weak against conditional payloads',
            'Detection must sit at the effect — anomalous actions and egress — not only at ingestion',
          ],
        },
        {
          heading: 'Second-Order and Cross-User Paths',
          body: 'Content frequently passes through several components before it reaches the model that acts, and each hop is a chance for trust to be laundered. A summariser reads a hostile page and writes a summary into a store; the summary is later read by an agent with tools, and it now looks like internal system-generated content. A support agent reads a customer message and writes a case note; the note is later read by a different agent with billing access. A code review agent reads a pull request and its comment becomes part of a build log another automation ingests. In each case the original provenance is lost at the first hop, which is exactly why provenance must survive transformation. When mapping these paths, follow the content rather than the request: ask where the text ends up, who reads it next, and with what privileges — not just who asked the original question.',
          bullets: [
            'Each hop launders provenance unless the tag is carried deliberately',
            'Summaries and case notes are the classic laundering points',
            'Follow the content forward, not the request backward',
            'Ask what privileges the eventual reader holds, not the original requester',
          ],
        },
      ],
    },
    {
      id: 'sec2l3',
      title: 'The Lethal Trifecta as a Design Test',
      diagram: 'LethalTrifecta',
      slides: [
        {
          heading: 'Three Properties, Applied Per Component',
          body: 'The most useful design heuristic in this field: a component becomes an exfiltration engine when it combines access to private data, exposure to untrusted content, and a channel to communicate outward. The value is that it converts an unbounded worry into a checkable property. Apply it to every process on your diagram, one at a time, and answer three yes-or-no questions with evidence rather than intuition. Does this component read anything the user or the world should not see — customer records, credentials, other tenants\' documents, internal policy? Does anything it reads originate outside your trust boundary, including through the laundering paths of the previous lesson? And can it cause bytes to reach somewhere an attacker can observe? Components with all three go to the top of the remediation list, and the fix is to remove a leg rather than to defend the combination.',
          bullets: [
            'Private data, untrusted content, outbound channel — checked per component, not per system',
            'Answer each with evidence from configuration, not from architectural intent',
            'All three present means the fix is structural, not a better prompt',
            'Removing one leg is cheaper and more durable than defending all three',
          ],
        },
        {
          heading: 'Breaking a Leg in Practice',
          body: 'Each leg has real mitigations and real costs, and choosing between them is a product decision as much as a security one. Removing private data access means splitting the workflow: an agent that browses external content gets no customer records, and a separate privileged step operates only on content that has already been reduced to structured, validated fields. Removing untrusted content is rarely possible for a feature whose value is reading external material, but it can be narrowed — a reviewed corpus rather than open browsing, or a fetch step that extracts data through a schema instead of passing prose into the context. Removing the outbound channel is usually the highest-leverage move, because it is enforceable in infrastructure: default-deny egress, no arbitrary URL construction, no auto-rendering of remote content, no write access to shared destinations. Pick the leg you can enforce outside the model.',
          bullets: [
            'Split workflows so privileged steps operate on validated fields, not raw prose',
            'Narrow untrusted exposure where you cannot remove it: reviewed corpora, schema extraction',
            'Egress removal is usually most enforceable because infrastructure, not the model, holds it',
            'Prefer the leg whose control lives outside the model\'s decision-making',
          ],
        },
        {
          heading: 'Where the Heuristic Stops',
          body: 'The trifecta is a design test for exfiltration, and treating it as a complete risk model is the mistake to avoid. Serious harm needs none of the three legs in combination. An agent with no private data access and no egress can still delete records, send an incorrect payment instruction, merge broken code, close the wrong tickets, or post a damaging message — destructive action is a separate axis from data leakage. An agent that only reads can still mislead a user into acting on a fabricated conclusion, and a decision-support system that quietly returns wrong eligibility answers may cause more damage than a leak would. So run the trifecta test, then run a second pass asking what the component can destroy, spend, or send, and a third asking what a confidently wrong answer would cost in this domain. Three passes, three different lists.',
          bullets: [
            'Exfiltration is one harm class; destruction, spending, and messaging are separate',
            'Read-only agents still cause harm by producing confidently wrong conclusions',
            'Run three passes: leak, act, mislead — each produces different findings',
            'A clean trifecta result is not a clean threat model',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'The test only earns its keep when the three answers come from configuration rather than from what the design intended. One component, half an hour, and the outcome is either a leg you can remove or a risk you have written down.',
          exercise: {
            task: 'Take one component of an AI feature your organisation runs or is designing — one process on the diagram, not the whole system — and answer the three questions with evidence. What private data can it reach, according to the resolved effective permissions of the credential behind each tool rather than the role name? What untrusted content reaches it, including content laundered through an earlier summary or case note? And every way bytes it produces can reach somewhere an attacker can observe: network calls, rendered remote resources, writes to shared stores, messages, third-party query strings, logs and error strings. Then name the leg you could actually remove and what removing it would cost the feature. Section 3 of the AI Feature Threat-Model Canvas at /templates/threat-model-canvas.md is this check. If your organisation has no such feature, run it against an AI feature in a product you use, from its published documentation, and mark each answer as evidenced or assumed. Everything here is answerable by reading configuration; if you want to confirm the egress answer by routing a benign marker, do that only on a system you own or are authorised in writing to test, in a non-production environment with synthetic data.',
            copyText: 'Component: [one process, not the whole feature]\n\nTrifecta check — evidence, not intent\n  Private data reachable: [resolved permission set, not role name]\n  Untrusted content reaching it: [channel, including content laundered via an earlier step]\n  Outbound paths: [network / rendered resource / shared write / message / query string / log / error string]\n\nAll three present? [y/n]\n  Leg we can remove:\n  What removing it costs the feature:\n  Owner and date:\n\nSecond pass — what this component can destroy, spend, or send:\nThird pass — what a confidently wrong answer costs in this domain:',
            selfCheck: [
              'Each of the three answers cites a configuration source — a resolved permission set, an ingestion path, an egress rule — not a design intention',
              'Your outbound list includes at least one path that is not a direct network call',
              'The component ends with either a named removable leg and its cost, or — if it came out clean — a written note of what it can still destroy, spend, or send',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General',
          body: 'An AI assistant becomes genuinely dangerous when one system can see private information, read content from outside sources, and send information outward. Any two of those is usually manageable; all three together is where a hidden instruction in a document can turn into a data leak.',
          bullets: [
            'Ask of any AI tool: what can it see, what does it read, and where can it send things',
            'Tools that summarise external content and also hold your private data deserve scrutiny',
            'A leak is not the only harm — an agent that acts on a bad instruction can also destroy or send',
          ],
        },
        {
          role: 'security-se',
          label: 'Security Engineer',
          body: 'Use the trifecta as the triage function across an AI estate. Score every deployed component on the three properties from actual configuration, and you have a prioritised remediation queue that does not depend on anyone predicting a specific attack.',
          bullets: [
            'Score components from live configuration — declared intent consistently understates access',
            'Egress control is the leg you can enforce and verify independently of the application team',
            'Follow the trifecta pass with a destructive-action pass and a wrong-answer-harm pass',
            'Record the leg you removed for each component; that is the control you must regression-test',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'Design the split before you need it. The pattern that holds is a retrieval or browsing component with no credentials and no egress, handing structured, validated fields to a privileged component that never sees raw external prose.',
          bullets: [
            'Pass structured fields between stages, not free text carrying whatever was retrieved',
            'Construct outbound URLs from allowlisted templates — never from model-supplied strings',
            'Disable automatic fetching or rendering of remote resources in anything that displays output',
            'Assert the split in tests: a privileged step receiving raw external prose should fail the build',
          ],
        },
        {
          role: 'consultant',
          label: 'Consultant',
          body: 'The trifecta is the fastest way to make an AI risk conversation concrete with a client architecture team, because it produces a specific list of components rather than a general warning, and the remediation is a design change they can schedule.',
          bullets: [
            'Walk the client\'s own diagram and mark the three properties live in the room',
            'Push for the structural split rather than a guardrail purchase — it survives model changes',
            'Warn explicitly that a clean trifecta result does not cover destructive or misleading actions',
            'Leave the scoring method behind so the client can rerun it on the next feature',
          ],
        },
      ],
    },
    {
      id: 'sec2l4',
      title: 'Tool Poisoning and the MCP Supply Chain',
      diagram: 'ToolPoisoning',
      slides: [
        {
          heading: 'The Tool Definition Is Prompt Content',
          body: 'The mechanism behind tool poisoning is simple and frequently missed: a tool\'s name, description, parameter names and parameter descriptions are inserted into the model\'s context so it knows when and how to call the tool. That text is prompt content authored by whoever wrote the server. A description can therefore carry instructions to the model that no human reviewing the tool list in a UI would notice, because interfaces typically show a short label rather than the full schema text the model receives. The consequences follow directly. A hostile description can steer the model to call a tool it should not, to pass different arguments than the user intended, or to alter how it uses other, honest tools in the same session. Review the exact text sent to the model, not the rendered summary — the gap between those two is where this class lives.',
          bullets: [
            'Names, descriptions and parameter docs all enter the context as model-readable text',
            'UIs show labels; the model sees the full schema — review what the model sees',
            'A poisoned description can influence the use of other tools in the same session',
            'Argument steering is as damaging as tool-choice steering and less visible',
          ],
        },
        {
          heading: 'Supply Chain Properties That Make It Worse',
          body: 'Several properties of the ecosystem amplify the basic mechanism. Tool lists can change during a session, since the protocol supports notifying clients that the list has changed — so what you reviewed at connection time is not necessarily what is in context later. Servers are frequently installed from public sources with the same casual trust once given to small package dependencies, which brings the familiar risks: imitation of a popular name, a maintainer handover, or a server that behaves impeccably until it is widely adopted and then changes. Servers are also transitive: one server may itself call others, so the effective surface is a graph rather than a list. And permissions are commonly granted at server granularity while risk lives at tool granularity, so a server needing one read scope receives a broad grant covering everything it exposes.',
          bullets: [
            'Tool lists can change mid-session — connection-time review is not sufficient',
            'Name imitation, maintainer change, and post-adoption behaviour change all apply here',
            'Servers can call other servers; the real surface is a graph you have not drawn',
            'Grants are usually per-server while risk is per-tool — that mismatch over-privileges by default',
            'On the standard maps: OWASP\'s LLM Top 10 supply-chain entry, plus MITRE ATLAS\'s supply chain compromise techniques',
          ],
        },
        {
          heading: 'Controls That Apply Classic Discipline',
          body: 'Nothing here requires novel security thinking; it requires applying supply chain discipline to a component people do not yet see as a dependency. Maintain an internal registry of approved servers and block direct installation from arbitrary sources. Pin versions and treat an update as a change requiring review, not as a background refresh. Capture a hash of the full tool schema text at approval time and compare it at every session start, so a changed definition surfaces as an event rather than a surprise — this single control addresses both silent updates and mid-session changes. Review the schema text itself for instruction-like content as part of approval. Grant credentials per tool where the client permits it, and put an egress and policy chokepoint between agents and servers so calls can be inspected, constrained and logged centrally rather than trusted individually.',
          bullets: [
            'Internal registry plus blocked arbitrary installation — the same posture as package management',
            'Pin versions; treat definition updates as reviewable changes',
            'Hash the full schema text at approval and compare at every session start',
            'Route calls through a policy chokepoint so inspection and logging are not per-integration work',
          ],
        },
        {
          heading: 'Verifying What the Server Actually Does',
          body: 'Approval based on documentation is weak, because the description and the behaviour are authored by the same party. Where the risk justifies it, verify empirically in a controlled environment: run the server with instrumentation and observe what it reads, what it writes, and where it connects, then compare that against its declared purpose. A documentation-search server that opens outbound connections to an unrelated destination, reads files outside its stated scope, or requests credentials it never uses is answering the question for you. Include the negative case: exercise the tool with inputs it should refuse and confirm it enforces its own stated constraints. Record the observed behaviour in the registry entry, because that record is what a future reviewer compares against when the server updates. Behaviour, not description, is the artefact worth storing.',
          bullets: [
            'Documentation and behaviour come from the same author — verify independently',
            'Instrument a sandboxed run: file reads, writes, and outbound connections',
            'Compare observed behaviour against declared purpose and credential requests',
            'Store observed behaviour in the registry as the baseline for future updates',
          ],
        },
      ],
    },
    {
      id: 'sec2l5',
      title: 'Memory and Context Contamination',
      diagram: 'MemoryContamination',
      slides: [
        {
          heading: 'Persistence Turns an Event into a Condition',
          body: 'A session-scoped injection ends with the session. A memory-scoped one does not, and that difference is the whole reason to treat memory as a distinct surface. If untrusted content can cause an entry to be written to a store the system reads in future sessions, a single successful attack becomes a standing condition: the hostile document can be deleted, the session closed, the user moved on, and the influence remains. Worse, the residue now arrives with the appearance of internal, system-generated content, since memory is typically injected into context as trusted background rather than as retrieved external material. The practical questions are therefore mechanical. What code paths write to memory? Can the model request a write, and is that request validated? Does an entry record what content was in context when it was created? And can an operator find and remove entries by origin?',
          bullets: [
            'Session injection ends; memory injection persists after every trace of the attack is gone',
            'Memory is usually injected as trusted background, which launders its origin',
            'Enumerate write paths and check whether the model can trigger them',
            'Entries need origin metadata, or targeted removal is impossible',
          ],
        },
        {
          heading: 'Retrieval Corpora Are Memory Too',
          body: 'Anything the system retrieves from behaves like memory for these purposes, including the wiki, the ticket system, the shared drive, and any automatically synced third-party source. The write path is the review path: if a document can enter the index without human review, the index is a memory store with untrusted writes. Two specifics deserve attention. Chunking can separate content from its context, so a passage that reads as quoted example text in the original document arrives in the prompt without that framing. And embedding-based retrieval means an attacker can influence when their content surfaces by shaping it toward a target topic, which makes targeting a specific user population feasible without any access to your system. Treat corpus ingestion as a security-relevant pipeline: source allowlisting, provenance metadata per chunk, and the ability to purge by source.',
          bullets: [
            'If documents can be indexed without review, the corpus is an untrusted-write memory store',
            'Chunking strips the framing that made content look like a quotation or an example',
            'Attackers can shape content toward a topic to control when it surfaces',
            'Require source allowlists, per-chunk provenance, and purge-by-source capability',
            'OWASP\'s LLM Top 10 covers poisoned retrieval under its data poisoning and vector and embedding weaknesses entries',
          ],
        },
        {
          heading: 'Cross-User and Cross-Tenant Contamination',
          body: 'The severity of contamination depends heavily on who reads the store. Per-user memory limits the effect to its owner and is straightforward to reason about. Shared or organisation-level memory, and any index built from user-contributed content, means one user\'s influence reaches others — which converts a self-inflicted issue into a cross-user attack and, in a multi-tenant product, a cross-tenant one. The controls follow the scoping decision. Default to the narrowest memory scope that makes the feature work, and require a deliberate decision with a named owner to widen it. Where sharing is genuinely needed, put review between contribution and shared visibility, keep tenant partitions enforced at the storage layer rather than by a filter in the query, and verify partitioning by test rather than by configuration reading, because retrieval layers frequently have paths that bypass the intended filter.',
          bullets: [
            'Scope drives severity: per-user is contained, shared is a cross-user attack path',
            'Widening memory scope should require a deliberate, owned decision',
            'Enforce tenant partitioning in storage, not as a filter in the query layer',
            'Verify partitioning empirically — bypass paths in retrieval layers are common',
          ],
        },
        {
          heading: 'Making Contamination Removable',
          body: 'Assume some contamination will occur and design so it can be excised — the capability you need in an incident is targeted removal, and it must exist before the incident. That means every stored entry carries origin metadata: which session, which user, which source document, and which content was in context at write time. It means expiry by default, since an entry that ages out limits exposure without anyone noticing a problem. It means inspection tooling that lets an operator read what the system currently holds for a user in plain form, because a store you cannot read is a store you cannot audit. And it means a tested purge path — by source, by time window, by user — that also clears derived artefacts such as embeddings, caches and summaries. Deleting the source document while a summary of it survives is the failure that makes purges look successful and leaves the influence intact.',
          bullets: [
            'Origin metadata on every entry: session, user, source, and context at write time',
            'Default expiry limits exposure without depending on detection',
            'Operators must be able to read current memory in plain form to audit it',
            'Purge must clear derived artefacts — embeddings, caches, summaries — or it only appears to work',
          ],
        },
      ],
    },
    {
      id: 'sec2l6',
      title: 'Excessive Agency and Exfiltration Paths',
      diagram: 'ExcessiveAgency',
      slides: [
        {
          heading: 'Three Dimensions of Excessive Agency',
          body: 'Excessive agency is the structural condition in which an agent holds more capability than its task requires, and it decomposes into three dimensions that are fixed in different ways. Excessive functionality: the toolset includes actions the task never needs, often because a server exposes a family of operations and all of them were registered. Excessive permission: the credentials behind the tools carry broader scope than the tool needs, typically because a service account accumulated grants over time and is now reused. Excessive autonomy: the runtime executes consequential actions without an independent check, so the model\'s decision is the final control. Each dimension has a distinct remedy — trim the tool list, scope the credential, add a gate — and conflating them produces the common outcome where a team adds an approval prompt and leaves a broadly privileged service account untouched behind it.',
          bullets: [
            'Functionality: tools registered that the task never needs',
            'Permission: credentials broader than the tool requires, usually an inherited service account',
            'Autonomy: consequential actions executed with no check beyond the model\'s decision',
            'Each has a different fix; a gate does not shrink a credential',
            'On the standard maps: OWASP\'s LLM Top 10 lists this as excessive agency; the leak side is its sensitive information disclosure entry',
          ],
        },
        {
          heading: 'Audit Granted, Not Intended',
          body: 'The reliable way to find excessive agency is to stop reading design documents and enumerate what is actually granted. Pull the live tool list the agent receives, including anything added by a registered server, and compare it against the tasks the feature performs. Pull the effective permissions of every credential in use — not the role name, the resolved permission set including inherited and group-derived grants — and check what data each could reach if the agent asked. Determine whose authority applies at each tool call: the requesting user\'s, or the agent\'s own. That last check finds confused-deputy conditions, where an agent answers using access the asking user does not have, and it is one of the most common serious findings in real systems because the shortcut of using a service account for retrieval is convenient and rarely revisited.',
          bullets: [
            'Enumerate the live tool list, including tools added by registered servers',
            'Resolve effective permissions, including inherited and group-derived grants',
            'Determine whose authority applies per call — the user\'s or the agent\'s',
            'Service-account retrieval is the usual root of cross-user disclosure findings',
          ],
        },
        {
          heading: 'The Exfiltration Inventory',
          body: 'Outbound paths are more numerous than teams expect, and enumerating them is the prerequisite for containing them. Direct network calls from tools or executed code. Content rendered in a client that fetches remote resources — images, link previews, stylesheets, embedded frames — where the destination can be assembled from data the model produced. Writes to shared destinations: documents, repositories, tickets, channels, calendar entries, anything another party can read. Messages: email, chat, notifications, and their metadata. Tool side-effects such as creating a record whose fields carry data outward, or querying a third-party service where the query string itself is the payload. Logs and telemetry that leave the trust boundary or are readable by a broader audience. And error messages returned to a caller. Any of these can carry data even when the response the user sees looks entirely normal.',
          bullets: [
            'Rendered output is an exfiltration channel whenever a client fetches a remote resource',
            'Writes to shared stores and messages count as outbound, not internal',
            'Query strings to third-party services carry data even when nothing is returned',
            'Logs, telemetry and error strings leave the boundary more often than teams realise',
          ],
        },
        {
          heading: 'Closing Paths and Proving It',
          body: 'Containment works better here than detection, because each path has a concrete infrastructural control. Default-deny egress with a narrow allowlist removes direct network paths and is enforced outside the application. Disabling automatic fetching of remote resources in output rendering, and constructing any outbound URL from allowlisted templates rather than model-produced strings, closes the rendering path. Scoping write access removes shared-destination paths. Restricting which fields of a tool call may contain free text limits side-effect channels. Then prove closure empirically: place a distinctive benign marker in private context and attempt to route it out through each enumerated path in a controlled test, verifying the marker never appears at the destination. Re-run that test after changes. Arguing that a path is closed is not the same as demonstrating that a marker cannot traverse it.',
          bullets: [
            'Default-deny egress is the highest-leverage control because it lives outside the app',
            'Never build outbound URLs from model-produced strings; use allowlisted templates',
            'Prove closure with a benign marker routed against each enumerated path',
            'Re-test after every change — closure claims decay as features are added',
          ],
        },
      ],
    },
    {
      id: 'sec2l7',
      diagram: 'JailbreakTaxonomy',
      title: 'A Jailbreak Taxonomy',
      slides: [
        {
          heading: 'Why the Taxonomy Is the Durable Artefact',
          body: 'Collections of jailbreak strings circulate widely and age badly. Providers patch specific phrasings, so a corpus of literal payloads decays into a suite that measures which strings have already been blocked rather than whether your deployment is robust. Categories persist because they name the mechanism — the reason a class of framing shifts the model\'s inference about what it is being asked to do — and mechanisms outlive their instantiations. There is a handling argument too. A maintained library of working payloads is itself an asset an attacker would like, and storing it raises the questions of who may read it and what happens when it leaks. Keep the taxonomy, the detection rules and the measurement method under version control; generate fresh concrete attempts within each category at test time and discard them afterwards. What you carry forward is the category list and the per-category success rate, which is the only thing that makes two releases comparable.',
          bullets: [
            'Specific strings get patched; the mechanism they exploit does not',
            'A stored library of working payloads is a liability with its own access problem',
            'Generate fresh attempts each cycle — keep the method, not the exploits',
            'Per-category success rate is what makes two releases comparable at all',
          ],
        },
        {
          heading: 'The Mechanism Families',
          body: 'A small number of families cover most of what you will encounter, and they are worth holding by mechanism rather than by example. Framing recasts the request as fiction, role-play, research, or an authorised exception, so the prohibited content becomes incidental to a context that reads as legitimate. Obfuscation hides intent from surface inspection through encoding, translation, character substitution, or splitting a request into pieces that are only harmful once assembled in context. Instruction-hierarchy attacks target the learned preference for system content, including refusal suppression that pre-commits the model to a compliant output format before the substance arrives. Multi-turn escalation moves gradually, so each step is small relative to accumulated context and no single message looks like an attack. Context pressure exploits in-context learning by filling a long window with examples of the behaviour being requested. And multimodal delivery routes any of the above through an image, document or audio track rather than text.',
          bullets: [
            'Framing: fiction, role-play, research pretext, claimed authorisation',
            'Obfuscation: encoding, translation, substitution, request splitting',
            'Hierarchy attacks: override attempts and refusal suppression by format pre-commitment',
            'Multi-turn escalation and long-context pressure exploit accumulated context',
            'Multimodal delivery bypasses anything that only inspects the text path',
            'MITRE ATLAS catalogues these mechanism families under its LLM jailbreak and prompt injection style techniques',
          ],
        },
        {
          heading: 'What Each Family Implies for Detection',
          body: 'The reason to organise by mechanism is that each family defeats a different control, so the taxonomy doubles as a coverage map for your defences. Framing is invisible to keyword inspection and needs either a classifier that reasons about the request net of its wrapper or an output-side check on the content actually produced. Obfuscation argues for normalising before inspection — decode, transliterate, reassemble split content — and for accepting that you cannot normalise everything, which pushes weight onto the output side. Hierarchy attacks are contained structurally rather than textually: the question is not whether the model can be persuaded but what the runtime will let a persuaded model do. Multi-turn escalation defeats per-message screening entirely, so scoring has to happen over the conversation, and context pressure over the shape of the window. Multimodal delivery requires that every modality reaching the model passes the inspection the text path already has, which is the gap teams discover last.',
          bullets: [
            'Map each family to the control that would catch it; the empty cells are the finding',
            'Normalise encodings before inspection, and expect residual coverage loss',
            'Per-message screening cannot see escalation — score the whole conversation',
            'Hierarchy attacks are bounded by capability limits, not by better wording',
            'Every modality needs the inspection the text path already receives',
          ],
        },
        {
          heading: 'Measuring Robustness Without Flattering Yourself',
          body: 'A success on the fiftieth attempt and a success on the second describe very different systems, so record effort as part of the finding: attempts, successes, turns required, and whether the attacker had feedback between tries. Report a rate rather than a verdict, because a stochastic system sampled repeatedly will eventually produce an outlier and an automated loop is precisely the thing that will find it — robustness means resisting the loop, not surviving one try. Three further requirements keep the number honest. Test the deployed stack with its input and output filtering in place, since the bare model and the shipped product behave differently enough that only one of them is evidence. Test against an adaptive attacker who knows what the defence is, because a control evaluated only against attacks that predate it will always look excellent. And measure over-refusal in the same exercise: a system that blocks everything scores perfectly on harm and is useless to the professionals who most need borderline material.',
          bullets: [
            'Log attempts, successes, turns, and whether the attacker received feedback',
            'Report rates — robustness is resisting repeated sampling, not one attempt',
            'Evaluate the deployed stack, and against an attacker who knows the defence',
            'Track false refusals alongside harmful compliance; both are failures',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Why can a language model not reliably separate instructions from data?', options: ['Because most providers disable the feature for cost reasons', 'Because everything arrives as one token sequence and role is inferred from learned patterns rather than enforced by a parser', 'Because system prompts are always shorter than user input', 'Because tokenisation discards punctuation'], correct: 1 },
    { q: 'What is the strongest reason input filtering cannot serve as a trust boundary for prompt injection?', options: ['Filters add unacceptable latency', 'Most filters are proprietary and cannot be audited', 'The space of ways to express an instruction is unbounded and semantic, and the attacker adapts by observing what passes', 'Filters only work on text and most attacks are numeric'], correct: 2 },
    { q: 'A poisoned tool description most directly exploits which fact?', options: ['Tool descriptions are executed as code by the runtime', 'Tool names, descriptions and parameter documentation are inserted into the model\'s context as readable text', 'Descriptions are cached indefinitely by the client', 'The protocol transmits descriptions without encryption'], correct: 1 },
    { q: 'Which property makes indirect injection hard to catch with session-level anomaly detection?', options: ['It only works against multimodal models', 'It requires the attacker to hold valid credentials', 'It always produces malformed input', 'Planting and activation are separated in time, so there is no attacker activity correlated with the malicious action'], correct: 3 },
    { q: 'A component passes the lethal trifecta test — it has no outbound channel. What risk remains unaddressed?', options: ['Destructive and financial actions, and harm from confidently wrong output, which the trifecta does not cover', 'None; removing a leg resolves the component\'s risk', 'Only latency and cost concerns remain', 'The model becomes more vulnerable to direct injection'], correct: 0 },
    { q: 'Why is memory contamination more serious than a session-scoped injection?', options: ['Memory writes are more expensive to store', 'It prevents the agent from calling tools', 'It persists after the hostile content is gone, and typically re-enters context looking like trusted internal content', 'It only affects multi-tenant systems'], correct: 2 },
    { q: 'Which of these is the correct decomposition of excessive agency?', options: ['Latency, cost, and token consumption', 'Training data, fine-tuning, and evaluation', 'Excessive functionality, excessive permission, and excessive autonomy', 'Direct, indirect, and multimodal injection'], correct: 2 },
    { q: 'A team purges a poisoned document from the retrieval corpus but the agent still behaves oddly on that topic. What is the most likely explanation?', options: ['Derived artefacts — embeddings, caches, summaries, memory entries — were not cleared by the purge', 'The model memorised the document during training', 'The corpus index is encrypted', 'Purging requires a model restart to take effect'], correct: 0 },
    { q: 'Why organise jailbreak testing around mechanism categories rather than a maintained library of known payloads?', options: ['Category names are easier to present to executives than technical detail', 'Payload libraries cannot be run inside a continuous integration pipeline', 'Specific strings get patched and decay into a test of what is already blocked, while categories name mechanisms that persist and give comparable rates across releases', 'Working with categories removes the need to test the deployed guardrail stack'], correct: 2 },
  ],
};

export default secM2;
