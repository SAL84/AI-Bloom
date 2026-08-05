import type { CourseModule } from '../../types/course';

const m7: CourseModule = {
  id: 'm7',
  title: 'Evaluating AI Security Products',
  icon: 'target',
  summary: 'How security teams buy well: due-diligence questions, skeptical demo-reading, vendor pushback, honest business cases, and everyday prompting.',
  lessons: [
    {
      id: 'm7l1',
      title: 'The Questions That Cut Through',
      slides: [
        {
          heading: 'Start With the Model, Not the Marketing',
          body: 'Every AI security product deserves the same opening question: what model is under the hood, and who built it? A vendor running a frontier model via API has different data-flow, latency, and cost characteristics than one running a fine-tuned open-weights model in their own infrastructure — and both differ from a classical ML pipeline wearing an "AI-powered" label. None of these is automatically better, but a vendor who cannot or will not tell you which one they are is hiding something structural. Ask whether the model is frozen or continuously retrained, and on what cadence. The answers determine everything downstream: your data exposure, your detection freshness, and how the product will drift after you sign.',
          bullets: [
            'Ask: which model, who trains it, and where does inference actually run?',
            'A vague answer to "what model?" is itself diagnostic — press until you get architecture, not adjectives',
            'Frozen models mean stale detections; get the retraining cadence in writing',
            'Classical ML with a chat interface is fine — but it should be priced and evaluated as such'
          ]
        },
        {
          heading: 'Follow Your Data',
          body: 'Before capability, settle custody. Four questions, in order: Does anything we send you train your models — and is the answer contractual, or a policy page that can change? Is our tenant genuinely isolated, or logically separated in shared infrastructure? What is retained, for how long, and can we set that retention? Where does processing happen, and can we pin it to a region? Good vendors answer all four crisply, because their security-mature customers have already forced them to. Evasive vendors reroute to certifications — but an audit badge tells you an assessor reviewed their controls, not what happens to your alert data inside a model pipeline. Get the data-handling commitments into the contract, not the slide deck.',
          bullets: [
            'Training use, isolation, retention, residency — settle all four before any capability discussion',
            'Contractual language beats policy pages: policies change unilaterally, contracts do not',
            'Certifications describe control audits, not model-pipeline data flows — ask the specific question anyway',
            'Ask what leaves your tenant during enrichment: third-party lookups can quietly export your indicators'
          ]
        },
        {
          heading: 'Ask About Failure Before Features',
          body: 'The feature list tells you what the product does when it works. Due diligence is about what it does when it fails — because in security, the failure modes are the risk. Ask: when the model is uncertain, does it say so, or does it produce a confident answer regardless? What does a false negative look like operationally — silence, or a low-confidence flag a human still sees? When the product makes a wrong call, how do you find out: does the vendor detect and disclose regressions, or do you discover them in an incident review? A vendor with real production maturity has watched their product fail and can describe it in specifics. A vendor who insists failure basically does not happen has either not measured it or is not telling you.',
          bullets: [
            'Uncertainty signalling is a product feature — its absence means confident wrong answers reach analysts',
            '"Describe your last significant false negative" separates measured products from marketed ones',
            'Ask how regressions are detected and disclosed — silence after a bad model update is the worst case',
            'Failure specifics are a maturity signal; failure denial is a warning'
          ]
        },
        {
          heading: 'The Vendor\'s Own SOC Is the Tell',
          body: 'One question cuts through more marketing than any RFP: does your own security team run this product in production, and what do they use it for? A vendor whose SOC genuinely lives on their own AI triage can tell you which alert classes it handles autonomously, where their analysts still override it, and what they turned off. That texture is impossible to fake. Follow with the inverse: what does your own team not trust it to do? An honest answer here — and there always is one — maps the product\'s real boundary far more accurately than the capability matrix. Vendors selling a product their own practitioners route around are selling you the same workaround future. Ask to speak to their SOC lead, not their sales engineer.',
          bullets: [
            '"What does your own SOC use this for?" — specifics are unfakeable, generalities are a red flag',
            'The inverse question matters more: what does your own team not trust it to do?',
            'Ask for the internal override rate: how often do their analysts overrule the product?',
            'Request a reference call with a practitioner, not a champion curated by sales'
          ]
        }
      ]
    },
    {
      id: 'm7l2',
      title: 'Reading a Demo Skeptically',
      slides: [
        {
          heading: 'Demo Data Is Not Your Data',
          body: 'Every polished demo runs on curated data: golden alerts chosen because the product handles them beautifully, log schemas the vendor built the parsers for, entity names the model has seen a thousand times. None of that predicts behaviour on your telemetry — your custom field names, your legacy log sources, your naming conventions no model has trained on. Natural-language query features are the classic case: flawless against the vendor\'s demo schema, brittle against yours. So bring your own material. Ask in advance to run one of your real, sanitised alerts through the product live. A vendor who welcomes that has confidence in the product; a vendor who needs weeks of "environment preparation" first is telling you what deployment will cost.',
          bullets: [
            'Golden alerts predict nothing — insist on one of your own sanitised alerts, live',
            'Test natural-language query against your field names and log sources, not the demo schema',
            'Note what was pre-loaded: parsers, enrichments, and integrations you would have to build',
            'Reluctance to touch your data in a demo forecasts the deployment experience'
          ]
        },
        {
          heading: 'Ask to See a Miss',
          body: 'A demo that only shows successes is a highlight reel. The most informative request you can make: show me an alert this product gets wrong. Watch the reaction. A mature vendor has examples ready — they know their false-positive patterns, they can show a wrong triage verdict and walk through how an analyst catches it, and they will show real response latency rather than an edited cut. An immature vendor treats the question as hostile. While you are there, probe the seams: ask what happens when a data source goes dark mid-investigation, when the model times out, when two components disagree. The unhappy path is where your analysts will live during a real incident; a demo that never goes there has not shown you the product.',
          bullets: [
            '"Show me a miss" is the single highest-signal demo request — note whether examples exist',
            'Real latency matters: a 90-second triage shown as an edited cut hides the analyst experience',
            'Probe degraded modes: source outages, timeouts, conflicting outputs',
            'A vendor comfortable demoing failure has measured it; discomfort means they have not'
          ]
        },
        {
          heading: 'Pin Down What "Agentic" Means Here',
          body: '"Agentic" now appears on every datasheet, describing everything from a chat window to genuine multi-step investigation. Make the vendor operationalise it: which decisions does the system make without a human, exactly? What tools can it invoke, and what stops it invoking them wrongly? Where are the approval gates, and are they configurable per action type or all-or-nothing? Can you shrink its autonomy after deployment without ripping it out? Ask to see the audit trail for one full agent investigation — every retrieval, every tool call, every decision point. If the vendor cannot produce that trace, the honest reading is that either the autonomy is theatre, or it is real and unauditable. Both should end the conversation.',
          bullets: [
            'Ask for the concrete decision list: what does it decide alone, and what does it queue for approval?',
            'Approval gates should be configurable per action class, not a single on/off switch',
            'Autonomy you cannot shrink post-deployment is a one-way door — avoid it',
            'One full investigation trace, end to end, is the proof: no trace, no trust'
          ]
        },
        {
          heading: 'The Pilot Is the Real Demo',
          body: 'No demo, however honest, substitutes for the product running on your data, your log sources, and your alert volume. Insist on a time-boxed pilot in your environment with success criteria written down before it starts: which alert classes, what false-positive tolerance, what time-to-verdict target, measured how, and by whom. Agree in advance what happens at the end — criteria met means a decision, criteria missed means a walk-away, and the vendor knows both. Beware the perpetual proof-of-value that drifts for months without a finish line; it costs your team integration effort while creating deal momentum the product has not earned. And staff it honestly on your side: a pilot nobody uses proves nothing either way.',
          bullets: [
            'Success criteria written before the pilot starts, not negotiated after results arrive',
            'Time-box it and define the walk-away — open-ended pilots are a sales tactic, not an evaluation',
            'Measure on your alert mix and volume, not the subset the vendor suggests',
            'Budget your own analyst time: an unused pilot generates no evidence'
          ]
        }
      ]
    },
    {
      id: 'm7l3',
      title: 'Pushback Your Vendor Should Survive',
      slides: [
        {
          heading: 'The Hallucination Question',
          body: '"What is your hallucination rate?" is a question every AI security vendor should expect, and few answer well. A good answer sounds like engineering: outputs are grounded in retrieved evidence with citations you can click through, formats are constrained and validated, the rate of unsupported claims is measured against a labelled set, and here is the number with its methodology. An evasive answer sounds like reassurance: "our model is highly accurate", "we use the latest models", "we have guardrails" — with no measurement behind any of it. Note the difference in kind: the good answer describes a system that assumes the model will fabricate and contains it; the evasive answer hopes it will not. In a SOC, hoping is not a control.',
          bullets: [
            'Good answers cite grounding, constrained outputs, and a measured rate with methodology',
            'Evasive answers offer adjectives — "accurate", "cutting-edge", "guardrails" — without numbers',
            'Click through the citations in a live output: do they actually support the claim?',
            'The architecture should assume fabrication and contain it, not deny it'
          ]
        },
        {
          heading: 'Who Answers for a Wrong Autonomous Action?',
          body: 'The moment a product can act — close an alert, disable an account, isolate a host — the question becomes liability. Ask directly: when your agent takes a wrong autonomous action and it causes damage, what does the contract say? Good answers exist in the mechanics even where liability caps are standard: every autonomous action is attributable and reversible, destructive actions default to approval-gated, action scopes are configurable by you, and there is an incident process with the vendor on the hook for root cause. Evasive answers relocate all responsibility to your configuration choices while marketing autonomy as the headline feature. If the pitch is autonomy and the contract says it is your fault, the two documents describe different products. Believe the contract.',
          bullets: [
            'Ask what the contract, not the datasheet, says about wrong autonomous actions',
            'Reversibility and attribution are the minimum bar for any action-taking feature',
            '"You configured it" as a liability position contradicts an autonomy-led pitch — surface that tension',
            'Get the incident process in writing: who investigates, who discloses, on what clock'
          ]
        },
        {
          heading: 'Residency, Keys, and the Subprocessor Chain',
          body: 'Data residency questions have moved from checkbox to architecture. Ask where inference runs — not where data is stored, but where the model actually processes it, which is frequently a different region and sometimes a different company. Ask for the full subprocessor chain: many AI security products are a thin layer over a third-party model API, and your alert data transits infrastructure that never appears in the vendor\'s own diagrams. Ask who holds the encryption keys and what revocation actually severs. Good answers name regions, name subprocessors, and offer real key control. Evasive answers say "we are compliant" — but compliance frameworks lag AI data flows by years, and "compliant" is not an architecture.',
          bullets: [
            'Storage residency and inference residency are different questions — ask both',
            'Demand the subprocessor list: the model API behind the product is part of your data flow',
            'Key control is only real if revocation provably severs access',
            '"We are compliant" answers an audit question, not the architecture question you asked'
          ]
        },
        {
          heading: 'Who Controls Model Changes?',
          body: 'The product you evaluate is not the product you will be running in a year — the vendor will swap models, update prompts, and retune thresholds, and each change can shift detection behaviour under your feet. The pushback: what is your model-change control process? Good answers include advance notice for material changes, published regression testing against detection benchmarks, per-tenant version pinning or staged rollout, and changelogs specific enough to audit. Evasive answers frame silent continuous change as pure upside — "you always get our latest improvements" — with no mechanism for you to test, defer, or even know a change happened. Your detection stack is change-managed; a vendor whose AI layer is not is asking you to accept an unmanaged dependency in the middle of it.',
          bullets: [
            'Model swaps change detection behaviour — treat them as changes requiring notice and testing',
            'Ask for regression results across model versions, not just release notes',
            'Version pinning or staged rollout shows the vendor engineered for enterprise change control',
            '"Always the latest model" without notice means your baseline shifts silently'
          ]
        }
      ]
    },
    {
      id: 'm7l4',
      title: 'The Business Case, Honestly',
      slides: [
        {
          heading: 'Do the Analyst-Hour Arithmetic Yourself',
          body: 'Every AI security business case reduces to arithmetic you can do on one page: alerts per day in the classes the product will actually touch, minutes per alert today, projected minutes with the product, times a loaded analyst cost. Build it from your own ticketing data, not the vendor\'s benchmarks — your alert mix and close times are knowable facts, and they anchor the case in your reality. Then apply the honesty discounts: the product handles a subset of alert classes, adoption ramps over months rather than day one, and saved minutes only become value if they turn into reduced backlog, deeper investigations, or deferred hiring. "Analyst hours saved" that no one reallocates is a number on a slide, not a return.',
          bullets: [
            'Source the inputs from your own ticketing system — alert volume and close times are facts you own',
            'Count only the alert classes the product genuinely covers, not total SOC volume',
            'Ramp the benefit over a realistic adoption curve, not from contract signature',
            'Name where saved hours go — backlog, depth, or deferred hiring — or do not count them'
          ]
        },
        {
          heading: 'What the Vendor Calculator Hides',
          body: 'Vendor ROI calculators are directionally honest and structurally flattering. The standard omissions: integration and parser engineering to get your log sources into shape; tuning time before the advertised accuracy materialises; the ongoing cost of reviewing the product\'s output — because someone must audit the auto-closed alerts, and that review time nets against the savings; training and process change; and the licence growth curve as data volume rises. The standard inflations: benchmark time-savings from customers with ideal telemetry, and full adoption assumed from day one. Rebuild the model with their numbers and your costs side by side — the gap between the two totals is itself useful diligence, and vendors respond to it with either engagement or discomfort. Both are informative.',
          bullets: [
            'Add the missing lines: integration, tuning, output review, training, licence growth',
            'Auto-closed alerts still need sampled human review — that cost nets against the savings',
            'Ask which customer profile produced the benchmark numbers, and how yours differs',
            'Present the corrected model back to the vendor; the reaction is part of the evaluation'
          ]
        },
        {
          heading: 'The Cost of a Miss vs the Cost of Noise',
          body: 'A complete business case prices both failure directions. False positives cost analyst hours and, at scale, attention: a noisy product retrains your team to dismiss alerts, degrading real coverage while the dashboards look fine. False negatives cost incidents, and pricing them means an honest look at your own numbers — breach costs in your sector, dwell time, what a missed intrusion has historically cost you. The two trade against each other through the product\'s alerting thresholds, so ask where the vendor sets that trade and whether you can move it. Be suspicious of products marketed on alert reduction alone: suppression is the easiest metric to improve and the most dangerous, because the miss it creates is invisible until it is an incident.',
          bullets: [
            'Price both directions: noise costs attention now, misses cost incidents later',
            'Ask how alert reduction is achieved — suppression, deduplication, and triage carry different miss risks',
            'Threshold control should sit with you, because you own the consequences of the trade',
            'A product judged only on fewer alerts is being judged on the metric easiest to game'
          ]
        },
        {
          heading: 'Compliance Value: Real or Theatre',
          body: 'Compliance framing appears in nearly every AI security business case, and some of it is real: if the product materially shortens audit evidence collection, closes findings your last assessment raised, or produces the AI-system inventories and audit trails that frameworks like the EU AI Act and NIST AI RMF increasingly expect, that value is quantifiable — count the hours and the findings. The theatre version is framework name-dropping: a slide listing regulations the product is "aligned with", certifications that describe the vendor\'s own controls rather than anything about your obligations, and "audit-ready" claims no auditor has tested. The test is specificity: which control, in which framework, evidenced how? Real value survives that question in detail. Theatre changes the subject.',
          bullets: [
            'Real value: hours saved on evidence collection, findings closed, inventories produced',
            'The vendor\'s certifications describe their controls, not your compliance posture',
            'Ask: which specific control does this satisfy, and what evidence would I show an auditor?',
            'Regulation logos on a slide are marketing until mapped to controls you actually own'
          ]
        }
      ]
    },
    {
      id: 'm7l5',
      title: 'Knowing Your Own Situation',
      slides: [
        {
          heading: 'The Evaluation Depends on Which Buyer You Are',
          body: 'The same product deserves different scrutiny depending on your situation, and vendors know it — their sales motion is calibrated to which of three situations you are in: adding AI capability to a stack you intend to keep, replacing an incumbent tool, or building a security architecture fresh. Each situation changes what to weight, which risks dominate, and which vendor claims deserve the most pressure. Naming your own situation first is a defensive move: buyers who have not are steered into the vendor\'s preferred framing — usually the one with the largest deal size — rather than the evaluation their actual situation demands. The next three slides take each situation in turn: what matters most, what to probe hardest, and where the characteristic mistake lies.',
          bullets: [
            'Three buyer situations: add to a kept stack, replace an incumbent, build fresh',
            'Vendors classify you in the first call and calibrate the pitch accordingly — classify yourself first',
            'Each situation has a characteristic mistake; know yours before the first meeting',
            'The right evaluation criteria come from your situation, not the vendor\'s deck'
          ]
        },
        {
          heading: 'Adding to a Stack You Keep',
          body: 'If your existing tools are staying, the evaluation is dominated by integration reality. The AI layer is only as good as its access to your telemetry, so probe exactly how it connects to each existing tool: native integration, maintained connector, or a "roadmap" answer that means you build and own it. Ask what happens when an underlying tool changes its API, and who fixes the break. Weigh overlap honestly — you may already be licensed for AI features inside tools you own, and the delta the new product adds over those is the real purchase, not its full feature list. The characteristic mistake in this situation is buying an impressive product that sits beside the stack rather than on top of it: capability you cannot wire into your workflow is shelfware with a model inside.',
          bullets: [
            'Integration depth with the tools you keep outweighs standalone capability',
            'For each connector ask: who built it, who maintains it, who fixes it when an API changes',
            'Audit the AI features already licensed in your stack — the new product is judged on the delta',
            'The failure mode is shelfware: strong product, no wiring into the actual workflow'
          ]
        },
        {
          heading: 'Replacing an Incumbent',
          body: 'Displacement evaluations have the highest stakes, because the switching costs are real and the vendor\'s pitch is calibrated to make you underweight them. Force the comparison to be honest: the incumbent is tuned to your environment through years of accumulated detections and process; the challenger demos against that at its untuned best. Ask for the migration story in specifics — what happens to your historical data, custom detections, and integrations, and how long you run both tools in parallel, at double cost. Demand evidence on your data before contract, not after. The characteristic mistake is anger-driven displacement: frustration with the incumbent making any alternative look good. The challenger must beat the incumbent at its job, not merely at a demo.',
          bullets: [
            'The incumbent is tuned to your environment; the challenger is not — evaluate accordingly',
            'Cost the migration fully: parallel running, detection rebuild, retraining, integration rework',
            'Get challenger performance evidence on your data before signing, not as a post-sale promise',
            'Frustration with the old tool is not evidence for the new one'
          ]
        },
        {
          heading: 'Building Fresh',
          body: 'Greenfield is the situation vendors love most — no incumbent to displace, the largest deal sizes, and a buyer with no installed base to anchor judgment. That freedom is genuine: you can design for AI-native operations from day one, with agent identity, audit trails, and approval workflows built in rather than retrofitted. The risk is equally genuine: with no existing baseline, you cannot measure vendor claims against your own experience, and platform-scale commitments made early are the ones that harden into lock-in. Sequence deliberately — anchor on the few capabilities you can validate in a pilot, keep interfaces open where the market is still moving fastest, and treat every "you only need one platform" pitch as a claim requiring the same evidence as any other.',
          bullets: [
            'Design AI governance in from day one — identity, audit, and approval gates are cheap now, costly later',
            'No baseline means vendor claims are unfalsifiable from your side — pilot before platform commitment',
            'Lock-in hardens fastest in greenfield; keep interfaces open where the market moves fastest',
            'Buy the platform in validated stages, not as a single act of faith'
          ]
        }
      ]
    },
    {
      id: 'm7l6',
      title: 'Prompting for Security Work',
      slides: [
        {
          heading: 'Summarising Incidents and Alerts',
          body: 'The highest-value everyday use of an AI assistant in security work is turning raw material — alert payloads, log excerpts, ticket histories — into structured summaries. The pattern that works: state the role and audience ("you are assisting a SOC analyst; the audience is the incident manager"), constrain the format ("timeline, affected assets, actions taken, open questions — nothing else"), and paste the source material explicitly rather than describing it. Then verify: every timestamp, hostname, and indicator in the output gets checked against the source before it travels anywhere, because a summariser will smooth over gaps with plausible-sounding fabrications precisely where the record is thinnest. The output is a draft that saves you thirty minutes, not a record you can sign.',
          bullets: [
            'Structure the prompt: role, audience, fixed output format, then the raw material',
            'Constrained formats reduce fabrication — free-form narrative invites it',
            'Verify every concrete fact against source before the summary leaves your desk',
            'Treat the output as a draft that saves time, never as a record of truth'
          ]
        },
        {
          heading: 'Drafting Communications Under Pressure',
          body: 'Incident communications are high-stakes writing done at the worst possible time, which makes them ideal for AI drafting — and dangerous for AI sending. The assistant is excellent at register: turning a technical timeline into an executive summary, a customer notice, or a status update for legal, each with an appropriate tone you do not have spare cognition to craft mid-incident. Give it the facts, the audience, and what you want the reader to do; let it produce the structure and phrasing. What stays with you: every factual claim, anything bearing on liability or disclosure obligations, and the decision to send. During a live incident with potential legal exposure, drafts can become discoverable records — involve counsel on what gets written where, including in prompt history.',
          bullets: [
            'Use the assistant for register and structure — executive summary, customer notice, status update',
            'Provide the facts, the audience, and the desired reader action; review every claim before sending',
            'Liability-relevant wording and disclosure decisions are human work, always',
            'Prompt history can be discoverable — during legal-exposure incidents, ask counsel first'
          ]
        },
        {
          heading: 'Querying Docs, Policies, and Standards',
          body: 'The third daily win is interrogating documents instead of rereading them: paste a vendor security whitepaper and ask what it does not address; paste your own IR policy alongside an incident timeline and ask which steps were skipped; paste a framework excerpt and ask how it applies to a scenario. Asking for gaps and contradictions plays to the model\'s strength as a tireless close reader, and unlike open-ended questions, answers grounded in a document you supplied are checkable — demand quoted passages with every claim and follow the quotes back. The failure mode is asking about documents you did not supply: the model will describe standards and regulations from training data that may be years stale, with total confidence. If the text is not in the prompt, treat the answer as a rumour.',
          bullets: [
            'Strongest pattern: supply the document, then ask for gaps, contradictions, or application to a scenario',
            'Require quoted passages with every claim, and follow them back to the source',
            'Un-supplied documents get answered from stale training data — confidently',
            'Version-sensitive material like regulations and standards must always be pasted, never assumed'
          ]
        },
        {
          heading: 'The Confidentiality Line',
          body: 'Security work makes prompting confidentiality-critical in a way most professions are not: your prompts contain indicators, infrastructure detail, vulnerability information, and sometimes evidence in active investigations. Know which tier you are typing into — consumer AI tools may retain and train on input, enterprise tiers contractually should not, and your organisation\'s AI use policy should name approved tools per data class. Habits that hold the line: sanitise before pasting — placeholder hostnames, masked IPs, and generic names preserve almost all the analytical value; never paste credentials, active-incident evidence, or unpatched vulnerability detail into anything unapproved; and remember prompt history is a record. Assume everything typed persists somewhere, and write accordingly.',
          bullets: [
            'Know your tier: consumer tools may train on input; enterprise terms should forbid it contractually',
            'Sanitise by default — placeholders and masked indicators keep the analytical value',
            'Credentials, live-incident evidence, and unpatched vulnerability detail stay out of unapproved tools',
            'Prompt history persists: treat every prompt as a written record'
          ]
        }
      ]
    }
  ],
  quiz: [
    { q: 'A vendor answers "what model is under the hood?" with "we use cutting-edge proprietary AI." The best read of this answer is:', options: ['Proprietary models are always superior, so this is reassuring', 'The model choice does not matter as long as the demo works', 'The vagueness is itself diagnostic — model, training, and inference location determine your data exposure and drift, so press for architecture', 'The vendor is protecting trade secrets, which is a positive maturity signal'], correct: 2 },
    { q: 'During a demo, the vendor declines to run one of your sanitised alerts, citing weeks of "environment preparation" needed first. This most likely signals:', options: ['A preview of integration cost — the product depends on curated data and prepared parsers', 'Normal caution that says nothing about the product', 'Strong security discipline on the vendor side', 'That your alert data is too complex to be a fair test'], correct: 0 },
    { q: 'You ask a vendor about hallucination rates. Which answer indicates real engineering maturity?', options: ['"We use the latest frontier models, which are highly accurate"', '"Our guardrails prevent hallucinations"', '"No customer has ever reported one"', '"Outputs are grounded with citations, formats are validated, and here is our measured unsupported-claim rate with its methodology"'], correct: 3 },
    { q: 'A product is marketed primarily on cutting alert volume by 80%. The most important evaluation question is:', options: ['Whether the reduction could reach 90% with tuning', 'How the reduction is achieved — suppression, deduplication, or genuine triage — since each carries a different false-negative risk', 'Whether competitors claim bigger reductions', 'How quickly the reduction appears after deployment'], correct: 1 },
    { q: 'Your team is furious with an incumbent tool, and a challenger demos brilliantly. The disciplined next step is:', options: ['Demand challenger evidence on your own data and cost the full migration — frustration with the incumbent is not evidence for the challenger', 'Move fast: analyst frustration is itself the strongest evaluation signal', 'Sign with the challenger but keep the incumbent licence as a backup indefinitely', 'Ask the incumbent to match the challenger demo before deciding anything'], correct: 0 },
    { q: 'A colleague wants to paste an active incident\'s evidence, including credentials found in a dump, into a consumer AI chatbot to speed up triage. The right call is:', options: ['Fine, since speed matters most during an incident', 'Fine, if the chat history is deleted afterwards', 'Acceptable for the credentials but not the incident timeline', 'Stop — credentials and live evidence never enter unapproved tools; sanitised material in an approved enterprise tier can help instead'], correct: 3 }
  ]
};

export default m7;
