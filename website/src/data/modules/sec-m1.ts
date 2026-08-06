import type { CourseModule } from '../../types/course';

const secM1: CourseModule = {
  id: 'sec-m1',
  title: 'Threat Modelling for AI Systems',
  icon: 'target',
  summary: 'Where classic threat models break on AI, how to inventory the real attack surface of a feature you own, drawing trust boundaries when the model itself consumes untrusted input, data-flow diagramming an LLM feature, enumerating techniques with MITRE ATLAS, and writing down the risks you have decided not to defend against.',
  lessons: [
    {
      id: 'sec1l1',
      title: 'Why Classic Threat Models Miss AI',
      sectionLabel: 'Foundations',
      diagram: 'ClassicThreatModels',
      slides: [
        {
          heading: 'The Assumptions That Break',
          body: 'Classic application threat modelling rests on four assumptions that an LLM feature quietly violates. First, that control flow is fixed, so you can enumerate paths — in an agent, the model chooses the next call at runtime. Second, that instructions and data are separable and the separation is enforced by the interface, the way a parameterised query keeps a value from becoming SQL — a prompt is one undifferentiated string. Third, that identical inputs produce identical outputs, so a passing test stays passed — sampling makes behaviour a distribution, not a fact. Fourth, that trust flows outward from a validated boundary, so once content is inside the system it can be processed safely — but a document from your own indexed corpus can carry instructions that redirect the system that reads it. None of this makes the discipline obsolete. It means the thing you are modelling has stopped being a program with an attack surface and become a decision-maker with a persuasion surface.',
          bullets: [
            'Control flow is model-chosen at runtime, so path enumeration is incomplete by construction',
            'No enforced instruction/data separation — the prompt is one channel carrying both',
            'Non-determinism means a single passing test proves very little about the next run',
            'Internal content is not trusted content: your own corpus is an attacker delivery path',
          ],
        },
        {
          heading: 'What Still Works, and Maps Cleanly',
          body: 'Do not throw away the method. Assets, entry points, trust boundaries, data-flow diagrams and STRIDE all transfer — what changes is the catalogue of instances you hang off each category. Spoofing becomes agent and tool identity: can you prove which agent instance, acting for which user, made this call? Tampering becomes poisoning of a retrieval corpus, a memory store, or a tool definition. Repudiation becomes the absence of a trace complete enough to reconstruct why the model acted. Information disclosure becomes exfiltration through outputs and tool side-effects. Denial of service becomes unbounded consumption, since a loop with no ceiling is a budget attack. Elevation of privilege becomes the confused deputy and excessive agency — the agent already holds the privilege, so the attacker only needs to redirect it. Working through STRIDE with these instances in hand is a productive first hour with any team.',
          bullets: [
            'Spoofing → agent and tool identity; who really made this call, on whose behalf?',
            'Tampering → poisoned corpus, poisoned memory, altered tool definitions',
            'Information disclosure → exfiltration via output rendering and tool side-effects',
            'Elevation of privilege → confused deputy and excessive agency, not a buffer overflow',
          ],
        },
        {
          heading: 'The New Primitive: Influence Without Access',
          body: 'The genuinely new element is an attacker who never authenticates to your system at all. They write a paragraph into a web page, a support ticket, a shared document, a repository file, a calendar invite, or a product review — anywhere your pipeline will later ingest it — and wait for your system to read it on behalf of a legitimate user. There is no session to revoke and no credential to rotate, because none was ever used. This forces a change in how you enumerate adversaries. The question is no longer only who can call the API, but who can put text in front of the model, directly or eventually, and what the model can do once persuaded. Enumerate positions rather than identities: the end user, the author of any ingested content, the supplier of any tool or server, another tenant whose data shares an index, and the insider who can write to a corpus without review.',
          bullets: [
            'The attacker may hold no account, no token, and no network path to you',
            'Enumerate every party who can influence content your system will eventually read',
            'Positions to model: user, content author, tool supplier, co-tenant, corpus writer',
            'Ask what the model can reach once persuaded — capability, not identity, sets severity',
          ],
        },
        {
          heading: 'Scope One Feature, Not the Strategy',
          body: 'Threat modelling sessions fail most often because the scope was set at the wrong altitude. Modelling "our AI programme" produces a list of anxieties; modelling one feature produces decisions. Pick a single deployed or planned capability with a named owner, a defined user population, a specific data set, and an enumerable tool list — the support assistant, the code review bot, the document summariser — and time-box the exercise. Four artefacts should leave the room: a data-flow diagram annotated with trust boundaries, a prioritised list of techniques you consider in scope, a list of controls with named owners and dates, and an explicit statement of what you have decided not to defend against. Also record the triggers that require a revisit — a new tool, a widened permission, a new content source, a change in who the users are. Anything else is a workshop, not a control.',
          bullets: [
            'One feature, one owner, one data set, one tool list — and a time box',
            'Leave with four artefacts: diagram, technique list, control plan, accepted risks',
            'Record revisit triggers: new tools, wider permissions, new ingestion sources, new users',
            'A threat model with no dated owners attached is a document, not a decision',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'General',
          body: 'Threat modelling an AI feature means asking, before it ships, what could go wrong on purpose: who could influence what the system reads, what the system is allowed to do, and how far a bad decision could travel. It is a structured conversation, not a specialist tool.',
          bullets: [
            'Anyone who can put text somewhere the system reads is a potential attacker',
            'The useful question is what the system can do, not just what it can say',
            'A model that is never wrong is not the goal — a system that limits the damage is',
          ],
        },
        {
          role: 'security-se',
          label: 'Security Engineer',
          body: 'Run this as an extension of your existing modelling practice rather than a parallel process. Reuse the same diagram notation, the same severity scale, and the same tracker, so AI findings land in the queue engineers already work rather than in a separate document nobody reads.',
          bullets: [
            'Extend the existing STRIDE catalogue with AI instances instead of inventing a new method',
            'Insist on an enumerated tool and permission list before the session — most teams cannot produce one, and that gap is itself the first finding',
            'Set severity by what the agent can reach and reverse, not by how novel the technique sounds',
            'Feed the technique list straight into the test plan so modelling and testing share one backlog',
          ],
        },
        {
          role: 'developer',
          label: 'Developer',
          body: 'You hold the facts the model needs: the real tool schemas, the actual credentials in use, every content source that reaches the context, and what the runtime will execute without a check. Produce that inventory from code and configuration, not from memory or design docs.',
          bullets: [
            'Generate the tool and permission inventory from the running configuration, not the README',
            'List every field that reaches the prompt, including metadata, filenames, and error strings',
            'Mark which actions are irreversible — that list drives most of the later control work',
            'Keep the diagram in the repository next to the code so it changes when the system changes',
          ],
        },
        {
          role: 'consultant',
          label: 'Consultant',
          body: 'Clients typically ask for an AI risk assessment across a portfolio, which yields generic findings. Negotiate the scope down to two or three real features, model those properly, and use the result as a template the client can repeat without you.',
          bullets: [
            'Depth on a few real features beats breadth across a system inventory',
            'Build a reusable technique checklist tailored to the client\'s architecture and hand it over',
            'Insist that accepted risks are recorded and signed, or they silently become your problem',
            'Leave behind revisit triggers so the model survives the next architecture change',
          ],
        },
      ],
    },
    {
      id: 'sec1l2',
      title: 'Mapping the Attack Surface',
      diagram: 'AIAttackSurfaceMap',
      slides: [
        {
          heading: 'Seven Components, Enumerated Separately',
          body: 'A useful surface map splits the feature into seven components and treats each as its own subject. The model, including which provider and family, whether it is hosted or self-run, and what the deployment can observe about it. The prompt layer: system instructions, templates, few-shot content, and anything injected at assembly time. The retrieval corpus: what is indexed, who can write to it, and how documents get in. The tools: every callable action, its arguments, and the credentials behind it. Memory: anything that persists across turns, sessions, or users. Outputs: everywhere model text is rendered, stored, forwarded, or parsed by another system. And humans: the users, reviewers and approvers whose decisions are part of the control flow. Teams that model only the model miss most of their real exposure, because most of it lives in the other six.',
          bullets: [
            'Model, prompts, corpus, tools, memory, outputs, humans — enumerate each separately',
            'For each, ask who can write to it and who can read from it',
            'The model is usually the least interesting component in the map',
            'Anything that persists or renders is a component, even if nobody called it a feature',
          ],
        },
        {
          heading: 'Follow the Write Path',
          body: 'The fastest way to find AI-specific exposure is to trace, for every component, how content gets in. For the corpus, that means the ingestion pipeline: who can add a document, is there review, are third-party sources synced automatically, can a user upload a file that is indexed for other users. For memory, it means which code path writes an entry, whether the model can request a write, and whether the write records where the content came from. For tools, it means who publishes the tool definition and whether that definition can change without a deployment. For prompts, it means whether any part of the system prompt is assembled from data — a customer name, a ticket subject, a configuration field — because that is a write path into the instruction layer. Write paths you cannot name are write paths you cannot control.',
          bullets: [
            'For each component list the concrete code path that writes to it',
            'Automatic sync from third-party sources is an unreviewed write path',
            'Templated system prompts assembled from data give attackers a foothold in the instruction layer',
            'A tool definition that can change without a deploy is a live write path into the context',
          ],
        },
        {
          heading: 'Rank by Reach and Reversibility',
          body: 'Not every element of the map deserves equal attention, and the ranking that predicts real incidents uses two axes. Reach: what a given component can touch — how much data, whose data, and how many downstream systems. Reversibility: whether an action taken through it can be undone, and how quickly. A read-only search tool over public documentation has wide reach and total reversibility, and it rarely produces a serious finding. A tool that sends a message, moves money, deletes a record, merges code, or changes a permission is irreversible in the only sense that matters — the effect has already reached a third party by the time you notice. Rank the map by reach multiplied by irreversibility and spend the session on the top of that list. This ranking, written down, is also what you will use later to decide where approval gates and egress controls actually go.',
          bullets: [
            'Two axes that predict incidents: reach of data and reversibility of action',
            'Irreversible means a third party has already seen or acted on the effect',
            'Read-only breadth is cheap to defend; narrow write access rarely is',
            'The ranking becomes the placement plan for gates, sandboxes and egress rules',
          ],
        },
        {
          heading: 'Keep the Map Current',
          body: 'Attack surface maps decay faster for AI features than for conventional services, because the surface expands through configuration rather than code. A new connector is added, a corpus gains an automatically synced source, an agent is granted a broader scope to unblock a demo, a tool list grows because an MCP server was registered. None of these look like an architecture change in review, and all of them change the model materially. Two practices keep the map honest. First, make tool and permission inventories generated rather than written: derive them from configuration at build time so drift is visible in a diff. Second, attach the map to the change process — adding a tool, a data source, or a permission scope requires a diff to the map and a short review against the existing technique list. The goal is not ceremony, it is that nobody widens the blast radius silently.',
          bullets: [
            'AI surface grows through configuration, which conventional review often misses',
            'Generate tool and permission inventories from config so drift shows up in a diff',
            'Require a map update for new tools, new sources, and new scopes',
            'Temporary scope widening for a demo is the most common permanent change there is',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Reading a list of components is not the same as producing one for a system you own. This takes about an hour on a single feature, and the value is in the channels that turn out not to be in the design document.',
          exercise: {
            task: 'Pick one AI feature your organisation runs or is designing — one owner, one data set, one tool list. Working from configuration and code rather than design documents, list every channel through which content reaches the model: retrieved documents and their metadata, fetched pages, ticket and email text, filenames and document properties, tool responses including error strings, memory entries, and anything templated into the system prompt. Mark each channel trusted or untrusted, name the concrete code path that writes to it, and note whether any test exercises it. Section 2 of the AI Feature Threat-Model Canvas at /templates/threat-model-canvas.md is this table, so start from it rather than building a scaffold. If your organisation ships no AI feature yet, build the same inventory for an AI feature in a product you use, from its published documentation, and record every channel you cannot confirm as unknown rather than trusted. This is a configuration and documentation review only — do not probe any system you are not authorised in writing to test.',
            copyText: 'Feature:\nOwner:\nInventory built from: [configuration and code, on DATE]\n\nChannel | Trusted or untrusted | Code path that writes to it | Exercised by a test?\n1.\n2.\n3.\n\nChannels found that were not in the design document:\nChannels nobody could name a write path for:\nUntrusted channels no test currently exercises:',
            selfCheck: [
              'Your inventory contains at least one channel that was not in the feature\'s design document',
              'Every channel has a named write path, or is recorded as one nobody could name',
              'You can point to at least one untrusted channel that no existing test exercises',
            ],
          },
        },
      ],
    },
    {
      id: 'sec1l3',
      title: 'Trust Boundaries When the Model Is Untrusted',
      diagram: 'UntrustedModelBoundary',
      slides: [
        {
          heading: 'Draw the Boundary Around the Model, Not Behind It',
          body: 'The single most consequential drawing decision is where the trust boundary sits relative to the model. The intuitive placement puts the boundary at the API edge, treats user input as untrusted, and treats everything after validation as internal. That placement is wrong for an LLM feature, because it implies the model\'s output can be trusted by whatever consumes it. The correct placement treats the model as a component that processes untrusted input and therefore produces untrusted output — every time. Model output crossing into a renderer, a parser, a shell, a database, or another agent crosses a trust boundary and needs the same treatment you would give input arriving from the internet. This one change reframes most downstream design: output handling stops being formatting and becomes validation, and a tool call stops being an internal function invocation and becomes an authorisation decision.',
          bullets: [
            'Model output is untrusted output, regardless of how trusted the input looked',
            'Every consumer of model output sits across a trust boundary from it',
            'Tool invocation is an authorisation decision, not an internal function call',
            'Improper output handling is a distinct failure class from injection — treat it separately',
            'On the standard maps: OWASP\'s LLM Top 10 carries improper output handling as its own entry, separate from prompt injection',
          ],
        },
        {
          heading: 'Provenance as a First-Class Property',
          body: 'Once you accept that the context window mixes content of different trust levels, the practical question becomes whether the system can tell them apart at the point where it matters. Provenance means tagging content with where it came from — system-authored, authenticated user, retrieved from an internal reviewed corpus, retrieved from the open web, returned by a third-party tool — and carrying that tag through every transformation. The value is not that the model reliably respects the tags; it does not. The value is that the surrounding runtime can. A policy that says a privileged tool may not be called during a turn in which open-web content entered the context is enforceable in code, and it is only enforceable if provenance survived summarisation, chunking, caching, and the hop between agent and subagent. Test that survival explicitly, because losing tags in a transformation is the common failure.',
          bullets: [
            'Tag content by source and carry the tag through every hop and transformation',
            'The runtime enforces provenance policy — the model is not the enforcement point',
            'Summarisation, chunking, and subagent handoffs are where tags are commonly dropped',
            'Provenance enables rules like: no privileged action in a turn that ingested untrusted content',
          ],
        },
        {
          heading: 'Boundaries Between Agents',
          body: 'Multi-agent designs create trust relationships that are almost never written down. When an orchestrator delegates to a subagent and receives text back, that text is input from a component that was itself exposed to untrusted content — so the boundary between them is real even though both are yours. The same holds for a peer agent operated by another team, and much more strongly for one operated by another organisation, where you can see the interface but not the reasoning, the tools, or the data behind it. Draw a boundary at every agent-to-agent edge and decide explicitly what crosses it: results only, or results plus instructions the receiver will act on. Then decide what authority the receiver applies — its own, or the originating user\'s. Delegation that silently upgrades authority is the multi-agent form of the confused deputy, and it is easy to build by accident.',
          bullets: [
            'Every agent-to-agent edge is a trust boundary, including between your own components',
            'A peer agent is opaque by design: you see results, never its context or tools',
            'Decide whether delegated output is treated as data or as instruction — write it down',
            'Delegation must not upgrade authority; carry the originating user\'s scope through the chain',
          ],
        },
        {
          heading: 'Humans Inside the Boundary',
          body: 'When a design includes a reviewer or approver, that person is part of the control flow and belongs on the diagram as a component with inputs and failure modes. Their input is a summary produced by the system being attacked, which means the attacker can influence what the approver reads. Their failure modes are well documented: fatigue when volume is high, automation bias when the system is usually right, and misreading when the summary is plausible but incomplete. Model the human path as you would any other: what information reaches the decision point, whether it is attacker-influenceable, how long the decision takes, and what the default is when the reviewer does nothing. A gate whose default is to proceed after a timeout is not a gate. A gate whose summary is written by the compromised component is a gate the attacker helps design.',
          bullets: [
            'Approvers are components: give them inputs, failure modes, and a place on the diagram',
            'The approval summary is model output — attacker-influenceable by construction',
            'Automation bias and fatigue are predictable, so design for volume, not for vigilance',
            'A timeout that defaults to proceed converts the gate into a delay',
          ],
        },
      ],
    },
    {
      id: 'sec1l4',
      title: 'Data-Flow Diagramming an LLM Feature',
      diagram: 'LLMDataFlow',
      slides: [
        {
          heading: 'A Worked Subject',
          body: 'Take a concrete feature so the method stays honest: an internal support assistant. It answers staff questions using a retrieval index built from a wiki, a ticket system, and a vendor documentation sync; it can look up a customer record, create a ticket, and post a message to a shared channel; it keeps per-user memory of preferences and prior issues; and its answers render as rich text with links in a web client. That description is already enough to draw the diagram, and drawing it will surface questions the description hid — who can edit the wiki, whether the vendor sync is reviewed, whether the customer lookup applies the asking user\'s permissions or the service account\'s, and whether the shared channel is visible outside the team. A diagram is worth building precisely because it forces those questions into the open at design time rather than after an incident.',
          bullets: [
            'Pick a real feature with real tools; abstract examples produce abstract findings',
            'Write the one-paragraph description first, then draw what it implies',
            'The questions the diagram raises are the deliverable, as much as the diagram itself',
            'Ambiguity about whose permissions a tool uses is the most common early discovery',
          ],
        },
        {
          heading: 'Notation That Earns Its Keep',
          body: 'Use ordinary data-flow notation — external entities, processes, data stores, flows, and trust boundaries — with three AI-specific additions. Annotate each flow into the context window with its trust level, so the diagram shows at a glance how many untrusted sources reach a single prompt. Annotate each tool edge with the identity and scope used, so a service account with broad rights is visible rather than implied. And annotate each outbound flow with whether it leaves your control — to a user\'s browser, a third-party API, a shared store, a log another team reads. Keep the notation minimal; the aim is a diagram an engineer will update, not a formal specification. If it cannot be redrawn on a whiteboard in ten minutes, it will be stale within a month and misleading within two.',
          bullets: [
            'Standard DFD elements plus three annotations: trust level, identity and scope, outbound reach',
            'Show every flow that reaches the context window, including metadata and tool results',
            'Make the acting identity explicit on every tool edge',
            'Optimise for redrawability — a diagram nobody maintains is worse than none',
          ],
        },
        {
          heading: 'Reading the Diagram for Findings',
          body: 'The diagram is a question-generating device, and a few reads produce most of the value. First, find every process that has an untrusted inbound flow, a private data store, and an outbound flow leaving your control — that combination is the design test the next module builds on. Second, look for identity mismatches: a tool edge using a service account where the user\'s own scope should apply. Third, look for stores written by one user and read by another, which is where cross-tenant contamination lives. Fourth, trace each irreversible action back to the flows that can influence it and count how many untrusted sources are upstream. Fifth, check whether every edge that crosses a boundary is logged well enough to reconstruct a decision afterwards. Each read produces findings phrased as design changes, which is exactly what you want to hand a team.',
          bullets: [
            'Find processes combining untrusted input, private data, and outbound reach',
            'Look for tool edges acting under the wrong identity',
            'Stores written by one user and read by another are cross-tenant exposure',
            'Trace irreversible actions upstream and count the untrusted sources that can steer them',
          ],
        },
        {
          heading: 'From Diagram to Backlog',
          body: 'A diagram that does not become work is decoration. Convert each finding into a specific, assignable change with an owner and a date: narrow this tool to read-only, split this agent so the one reading external content has no customer data access, apply the requesting user\'s scope to this lookup, add provenance tagging on this ingestion path, gate this action, deny egress here by default. Record the ones you are not going to do and why, in the same list — that becomes the accepted-risk register covered later in this module. Then pick the two or three findings with the widest reach and confirm them empirically before building anything, because a design review can be wrong about what the running system actually does. The order that works is model, verify, then remediate — not model, remediate, and discover later that the diagram was aspirational.',
          bullets: [
            'Every finding becomes a named change with an owner and a date',
            'Findings you decline go into the accepted-risk register, not into silence',
            'Verify the top findings against the running system before funding the fix',
            'Diagrams describe intent; traces describe behaviour — reconcile them early',
          ],
        },
      ],
    },
    {
      id: 'sec1l5',
      title: 'Enumerating Techniques with MITRE ATLAS',
      diagram: 'MitreAtlas',
      slides: [
        {
          heading: 'What ATLAS Actually Gives You',
          body: 'ATLAS is a knowledge base of adversary tactics and techniques against AI-enabled systems, structured like ATT&CK: tactics as columns representing adversary objectives, techniques as the methods used to achieve them, and case studies drawn from reported incidents and research. The tactic sequence spans reconnaissance and resource development, initial access, model access, execution, persistence, privilege escalation, defence evasion, discovery, collection, staging of attacks against the model, exfiltration, and impact. Its practical value to a practitioner is not conceptual education — it is coverage. Enumerating from memory produces the techniques you happen to think of, which is a biased sample dominated by whatever you read most recently. Working column by column through a published matrix forces you past that bias and produces a defensible answer to the question of what you considered.',
          bullets: [
            'Tactics are adversary objectives; techniques are the methods used to reach them',
            'Case studies tie techniques to reported incidents rather than speculation',
            'The value is coverage and defensibility, not novelty of ideas',
            'Enumeration from memory is a biased sample — the matrix is the corrective',
          ],
        },
        {
          heading: 'Using It Against Your Diagram',
          body: 'Do not read ATLAS as a document; use it as an axis. Build a matrix with your diagram components down one side and the tactics across the top, then for each cell ask whether any technique in that tactic is achievable against that component in your system. Most cells will be empty, and the empty ones matter — they are your justified exclusions. A retrieval corpus with reviewed writes may have no plausible initial-access technique, and saying so with a reason is a stronger position than never having asked. The populated cells become your test plan for the second and fourth modules, ordered by the reach-and-reversibility ranking you already built. Record for each populated cell the technique, the component, the current control if any, and the intended test. That table is the artefact auditors, engineers and testers can all use, which is rare.',
          bullets: [
            'Components down the side, tactics across the top, techniques inside the cells',
            'Empty cells are findings too — record why the technique does not apply',
            'Populated cells become the test plan, ordered by your reach and reversibility ranking',
            'One table serves engineering, testing, and assurance — build it once',
          ],
        },
        {
          heading: 'Complementary Frameworks, Different Jobs',
          body: 'Three reference sets get cited together and answer different questions, so pick by task rather than by preference. ATLAS answers what an adversary might do, technique by technique — use it for enumeration and coverage. The OWASP Top 10 for LLM Applications answers what commonly goes wrong at the application layer, in language application teams already use — use it as a review checklist and a shared vocabulary with developers. The NIST AI Risk Management Framework and similar governance frameworks answer how an organisation should organise itself to manage the risk — use them for programme structure, roles, and documentation obligations, not for technique enumeration. Mixing the layers is a common failure: a governance framework will never tell you which test to run, and a technique matrix will never tell you who owns the decision.',
          bullets: [
            'ATLAS for technique enumeration and coverage claims',
            'OWASP LLM application risks for the review checklist and shared developer vocabulary',
            'Governance frameworks for programme structure and documentation, not for test selection',
            'Using the wrong layer for the question is why framework exercises stall',
          ],
        },
        {
          heading: 'The Limits of Any Catalogue',
          body: 'A published matrix is a floor, not a ceiling, and treating it as complete is the failure mode to guard against. Catalogues lag practice, because they document what has been observed and written up; a system with an unusual architecture will have exposure nobody has catalogued. They are also silent on your business logic — no matrix will tell you that in your domain, a plausible but wrong answer about eligibility is more damaging than a data leak. And coverage against a catalogue is easy to overstate: marking a technique as mitigated because a related control exists is how a matrix turns into reassurance. Use the catalogue to guarantee a floor, then add a deliberate unstructured pass where people who understand the domain ask what would be worst for this specific system. The catalogue finds what is known; the domain expert finds what matters.',
          bullets: [
            'Catalogues document observed techniques and therefore lag novel architectures',
            'Business-logic harm is domain knowledge and appears in no published matrix',
            'A control that is related is not a control that is verified — do not mark it mitigated',
            'Pair structured enumeration with an unstructured pass by people who know the domain',
          ],
        },
      ],
    },
    {
      id: 'sec1l6',
      title: 'Deciding What You Will Not Defend',
      diagram: 'AcceptedRisks',
      slides: [
        {
          heading: 'Every Threat Model Has an Out-of-Scope List',
          body: 'A threat model without an explicit out-of-scope list is not complete, it is evasive. Every real system accepts risks: you may decide not to defend against a fully compromised model provider, a malicious insider with corpus write access and review authority, a determined attacker with the user\'s own credentials, or a state-level adversary targeting your specific feature. Those may all be correct decisions given cost, likelihood, and what the feature is worth. What is not acceptable is leaving them unstated, because then nobody can tell whether the risk was assessed and accepted or simply never considered — and after an incident that distinction is the entire conversation. Writing the list also has a useful forcing effect during design: teams that must name what they are not defending against usually discover one item on the list they are not actually willing to accept.',
          bullets: [
            'Unstated acceptance is indistinguishable from oversight after an incident',
            'Common accepted risks: provider compromise, privileged insiders, credentialed users',
            'Naming exclusions during design surfaces the ones nobody actually accepts',
            'Scope decisions are business decisions and need a business owner',
          ],
        },
        {
          heading: 'How to Write an Accepted Risk',
          body: 'An accepted risk entry needs enough structure to be reviewable later. State the scenario concretely, in terms of what an attacker achieves rather than which technique they use. State why you are accepting it — cost of mitigation, low assessed likelihood, the mitigation would break the feature, or the exposure is covered elsewhere. Name the person accepting it, with a date; risk acceptance is an ownership act and an unsigned entry means nobody accepted anything. State what would change the decision: a new data class in the corpus, a new tool with write access, a change in user population, an incident elsewhere in the industry with the same shape. Finally, state any partial measure that remains in place, because most accepted risks are not undefended — they are detected but not prevented, and recording that distinction is what makes the register usable during an incident.',
          bullets: [
            'Describe the outcome an attacker achieves, not the technique they use',
            'Record the reason, the named accepter, and the date — unsigned is unaccepted',
            'State the conditions that would reopen the decision',
            'Note partial measures: detected-but-not-prevented is a materially different posture',
          ],
        },
        {
          heading: 'Detection as the Honest Fallback',
          body: 'For a large share of AI-specific risk, prevention is either impossible or so costly that it removes the feature\'s value — and prompt injection is the obvious example, since no available technique reliably prevents it. The professional response is not to pretend otherwise but to move the control from prevention to containment and detection, and to say so plainly in the model. Containment limits what a successful attack reaches: narrower tools, tighter scopes, denied egress, gated irreversible actions. Detection means you would find out — anomalous tool sequences, unexpected outbound destinations, canary content appearing where it should not, sharp changes in refusal or error rates. Write both into the register alongside the accepted risk. A model that claims injection is mitigated by a filter is worse than one that says injection is expected, contained to these actions, and detected by these signals.',
          bullets: [
            'Where prevention is unavailable, state containment and detection as the actual controls',
            'Claiming injection is prevented by filtering is the most common false assurance in this field',
            'Containment is measured by what a successful attack can reach, not by attempt counts',
            'Detection commitments belong in the threat model, not only in the runbook',
          ],
        },
        {
          heading: 'Keeping the Register Alive',
          body: 'Registers die quietly. Three habits keep this one useful. Review on the triggers you wrote down rather than on a calendar — a new tool, a new data class, a new user population, a materially different model deployment — because trigger-based review catches the changes that actually invalidate decisions, while annual review catches whatever is true in the review month. Re-derive acceptance when the underlying assumption changes: a risk accepted because the agent had read-only tools is void the moment it gains a write tool, and that link should be explicit in the entry. And close the loop from incidents, yours and other organisations\', by asking whether the scenario appears in your register and whether the acceptance still holds. A register that has never had an entry reopened is not being read.',
          bullets: [
            'Trigger-based review beats calendar review for catching invalidated assumptions',
            'Link each acceptance to the assumption it depends on, so the link breaks visibly',
            'Test the register against real incidents, including other organisations\'',
            'If nothing is ever reopened, the register has become documentation rather than a control',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'Which assumption of classic application threat modelling does an LLM feature most directly violate?', options: ['That every component has an identifiable owner who can be held accountable for its behaviour', 'That instructions and data are separable and the separation is enforced by the interface', 'That attackers are financially motivated and will stop once the cost exceeds the reward', 'That logs are retained long enough for an investigation to reconstruct what actually happened'], correct: 1 },
    { q: 'Where should the trust boundary sit relative to the model in an LLM feature?', options: ['At the API edge, with everything past input validation treated as internal and trusted', 'Around the retrieval corpus, since that is the only place attacker-controlled content enters', 'Boundaries do not apply to a managed model service, which the provider secures on your behalf', 'Around the model, so its output is treated as untrusted by every consumer'], correct: 3 },
    { q: 'A threat model lists the model, prompts, corpus, tools and memory but omits outputs and humans. What is the practical consequence?', options: ['Nothing, since neither outputs nor approvers are directly attacker-controllable', 'Output handling and approver manipulation go unmodelled, missing rendering-based exfiltration', 'The model\'s behaviour becomes non-deterministic and therefore impossible to model', 'Provenance tagging stops working, because tags cannot be carried through to a consumer'], correct: 1 },
    { q: 'Why rank attack-surface components by reach and reversibility?', options: ['Because an irreversible action has already affected a third party by the time you detect it', 'Because reversible actions are far more common and therefore carry more aggregate risk', 'Because it matches the way most security frameworks already rank conventional application risk', 'Because a component\'s reach determines how many users it serves, which sets its priority'], correct: 0 },
    { q: 'What is the main practitioner value of enumerating techniques with MITRE ATLAS?', options: ['It certifies a system as compliant against a recognised industry standard', 'It supplies working proof-of-concept code for each technique in the matrix', 'It forces coverage past the biased sample you would produce from memory', 'It replaces the need for a data-flow diagram, since the matrix names the paths'], correct: 2 },
    { q: 'A team marks an ATLAS technique as mitigated because a broadly related control exists elsewhere in the platform. What is wrong with this?', options: ['Nothing is wrong, provided the related control is documented against the technique', 'ATLAS techniques can only be mitigated at the tactic level, never one at a time', 'A related control is not a verified one for that technique, so the matrix records reassurance, not coverage', 'A red-team exercise should have been run before anything is marked as mitigated'], correct: 2 },
    { q: 'What belongs in an accepted-risk entry so it remains reviewable later?', options: ['The scenario, the reason, a named accepter with a date, and what would reopen the decision', 'The CVE identifier and CVSS score, so the entry can be tracked in the vulnerability register', 'The model vendor\'s security certifications, which underwrite the decision to accept', 'The number of red-team attempts made against the scenario and how many succeeded'], correct: 0 },
    { q: 'For prompt injection specifically, what is the honest way to represent it in a threat model?', options: ['As prevented, once an input filter tuned to the known injection phrasings is deployed at the edge', 'As out of scope, since it affects the model provider rather than the application team', 'As resolved by moving to a newer model family that is trained with a stronger instruction hierarchy', 'As expected to succeed, with containment limiting what it reaches and named detection signals'], correct: 3 },
  ],
};

export default secM1;
