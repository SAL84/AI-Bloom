import type { CourseModule } from '../../types/course';

const fnM1: CourseModule = {
  id: 'fn-m1',
  title: 'The Honest Map of AI in Finance',
  icon: 'target',
  summary: 'Finance has run supervised models for half a century, so the useful question is not whether AI is permitted but where its output lands, who answers for it, and why promising pilots keep dying on data lineage, core-system integration and a sign-off nobody put in the plan.',
  lessons: [
    {
      id: 'fn1l1',
      title: 'Scope, and What This Course Is Not',
      sectionLabel: 'Start here',
      slides: [
        {
          heading: 'Orientation, Not Advice',
          body: 'Read this before anything else. This course is educational orientation for people who have to think clearly about AI inside a regulated financial institution. It is not investment advice, not financial advice, not legal advice and not compliance advice, and it creates no advisory relationship of any kind. Nothing here is a recommendation about a security, a product, a counterparty or a customer. Nothing here tells you whether a particular use of AI is permitted at your firm — that answer comes from your regulators, your licence conditions, your model risk policy and your legal and compliance functions, in combination and nowhere else. Where a lesson describes what a category of tool does, that is a description of a capability pattern, not an endorsement and not a green light.',
          bullets: [
            'Educational orientation only — no lesson here is investment, financial, legal or compliance advice',
            'Nothing in this course is a view on any security, product, counterparty or individual customer',
            'Whether a use is permitted at your firm is answered by your regulator, licence, policy and legal function — not by a course',
            'Describing a capability is not endorsing it: deployment needs validation on your own data plus formal sign-off',
          ],
        },
        {
          heading: 'Requirements Vary by Jurisdiction, Institution and Licence',
          body: 'There is no single set of rules for AI in finance, and pretending otherwise would make this course useless outside one country. Obligations differ by jurisdiction: US banking supervision, EU financial regulation, UK conduct and prudential rules and the many regimes elsewhere overlap in principle and diverge sharply in detail. They differ by institution type — a deposit-taking bank, an insurer, an asset manager, a broker-dealer and a payments firm carry different duties over the same technology. They differ by licence, by whether you are supervised at group or entity level, and by whether the activity is regulated at all. Where this course names a regime, it says which jurisdiction it belongs to; treat everything else as a principle to check locally.',
          bullets: [
            'Jurisdictions overlap in principle and diverge in detail — this course scopes each claim it makes',
            'Bank, insurer, asset manager, broker-dealer and payments firm carry different duties over identical technology',
            'Licence conditions and group-versus-entity supervision change the answer for the same use case',
            'Anything consequential gets checked against your own rulebook and your own supervisor, not against a lesson',
          ],
        },
        {
          heading: 'Where This Course Is Deliberately Thin',
          body: 'Some gaps are chosen and you should know about them. There are no thresholds, cut-offs, model specifications or parameter choices here, because a general course is the wrong place for anything a reader might apply to a live book. No product, vendor or model version is named or recommended. Signal construction and strategy design are not taught — that is a specialism with its own literature — although module 3 does examine how strategy research goes wrong under evaluation, because those failures generalise widely. Insurance underwriting and market-abuse surveillance appear only to illustrate a wider point. One limitation is worth stating: the evidence base for language-model deployments in finance is young and heavily vendor-reported, and the lessons say so where practice is unsettled.',
          bullets: [
            'No thresholds, cut-offs, model specifications or parameter choices — those belong to your own validation',
            'No vendors, products or model versions are named, compared or recommended anywhere',
            'Signal construction and strategy design are not taught; module 3 covers how strategy research fails under evaluation',
            'The deployment evidence base is young and mostly vendor-reported — the course flags where it is thin',
          ],
        },
        {
          heading: 'Who This Is For, and What It Assumes',
          body: 'This is written for risk and compliance officers, credit professionals, fraud and financial-crime teams, quants and model validators, product owners, and the executives who ultimately sign. It assumes you understand your own domain and does not assume you understand machine learning. It also does not re-teach material that sits better elsewhere in this library: how a language model actually works, tokenisation and transformer mechanics are covered in the AI Essentials and AI Deep Dive courses; prompt injection, hardening and threat modelling in Securing AI Systems; general evaluation methodology in Does Your AI Actually Work? This course covers only what is specific to a regulated financial institution, and leans on those courses rather than repeating them.',
          bullets: [
            'Written for risk, compliance, credit, financial crime, quant, product and the executives who sign off',
            'Assumes domain fluency, not machine-learning fluency — the mechanics live in AI Essentials and AI Deep Dive',
            'Security and adversarial concerns live in Securing AI Systems; evaluation method lives in Does Your AI Actually Work?',
            'What remains here is the part that is specific to a supervised financial institution and nothing else',
          ],
        },
      ],
    },
    {
      id: 'fn1l2',
      title: 'Models Are Not New Here',
      slides: [
        {
          heading: 'Finance Has Been a Model Industry for Decades',
          body: 'Almost every other sector is meeting statistical decisioning for the first time. Finance is not. Statistical credit scorecards have driven consumer lending decisions since the middle of the last century. Fraud detection moved from rules to learned models decades ago. Pricing and valuation models, rating models, capital and stress models, actuarial models, anti-money-laundering transaction monitoring and algorithmic execution all predate the current wave by many years. Just as importantly, a supervisory apparatus grew up around them: definitions of model risk, expectations for independent validation, inventories, documentation standards and governance committees. When someone in a bank says "we already have a process for this", they are usually right.',
          bullets: [
            'Consumer credit has been scored statistically for generations — automated decisioning is not new territory',
            'Fraud detection, valuation, capital, actuarial and execution models all long predate language models',
            'Supervisors built model-risk expectations around those models: validation, inventory, documentation, governance',
            'The institutional muscle for governing models already exists — the question is whether it stretches to this',
          ],
        },
        {
          heading: 'What Genuinely Changed',
          body: 'Three things are actually new. First, unstructured data became usable: contracts, filings, emails, call transcripts, policy documents and scanned correspondence were previously either ignored or hand-processed at cost. Second, language became both an input and an interface — a non-technical user can now direct a system in prose, which changes who can invoke a model and how easily. Third, the output is generative: instead of a score or a class label, the system produces text that reads as reasoned. That last change is the disruptive one for governance, because a score can be backtested against an outcome and a paragraph cannot be, at least not the same way.',
          bullets: [
            'Unstructured text — contracts, filings, calls, correspondence — became tractable at volume for the first time',
            'Language as an interface widens who can invoke a model, often outside the controls built for model users',
            'Generative output replaces a score with prose that reads as reasoned, whether or not reasoning occurred',
            'A score has an outcome to backtest against; a paragraph does not, and that is the governance problem',
          ],
        },
        {
          heading: 'What Did Not Change, and What Was Added On Top',
          body: 'Existing obligations are largely technology-neutral, and none of them were suspended. Nothing about a new architecture removes the duty to validate a model independently before it is relied upon, and nothing removes fair lending duties, anti-money-laundering obligations, records and communications retention requirements, data protection duties, or the requirement that a firm be able to explain a decision it made about a customer. Accountability does not move either: the named individual who owned the outcome before still owns it. What has changed is that some jurisdictions have layered technology-specific rules on top of that baseline, the EU AI Act being the clearest example, and several supervisors have issued expectations addressed to AI directly. Both layers apply at once.',
          bullets: [
            'Validation, documentation and governance duties attach to the use, not to the architecture',
            'Fair lending, AML and KYC obligations, records rules and data protection were never suspended',
            'Accountability stays with the named human owner — module 2 takes that into third-party arrangements',
            'Where an AI-specific regime exists, such as the EU AI Act, it sits on top of the baseline rather than replacing it',
          ],
        },
        {
          heading: 'Why the Continuity Is Both Comfort and Trap',
          body: 'The comfort is real: you have an inventory, a validation function, a change process and a committee that already knows how to say no. Most institutions do not need to invent a governance regime, only to extend one. The trap is that the existing machinery quietly assumes a particular kind of model — deterministic, with stable numeric inputs, a measurable outcome to backtest, coefficients someone can inspect, and a release you control. A language-model feature can breach every one of those assumptions at once. Teams that force it through unchanged produce validation reports full of metrics that do not mean anything here; teams that declare it out of scope produce no oversight at all. The work sits in deciding which of the old assumptions still hold for this use, and recording that decision.',
          bullets: [
            'Extend the model-risk regime you have rather than building a parallel one beside it',
            'The old machinery assumes determinism, numeric inputs, a backtestable outcome and a release you control',
            'Forcing an LLM feature through unchanged yields validation metrics that do not measure anything relevant',
            'Declaring it out of scope because it does not fit is the failure mode supervisors ask about first',
          ],
        },
      ],
    },
    {
      id: 'fn1l3',
      title: 'Where It Genuinely Helps Today',
      slides: [
        {
          heading: 'The Shape That Works: Documents In, Structure Out',
          body: 'The tasks where these systems currently earn their place share a recognisable shape. The source material is text and it is in front of the model rather than being recalled from training. The volume is high enough that human throughput is the binding constraint. A review step already exists in the workflow, so a human check is native rather than bolted on. And the reviewer can tell whether the output is right, because the ground truth is the document sitting next to it. That last condition does most of the work. Where a reviewer could not detect a wrong answer, the task has quietly moved into a much higher risk category regardless of how routine it feels.',
          bullets: [
            'Source text supplied by you, not recalled from training — extraction and summarisation, not knowledge',
            'High volume where human reading time is the actual bottleneck in the process',
            'A review step that already exists in the workflow, so the control is native rather than added',
            'The reviewer can spot an error against the source — if not, the task is not in this category',
          ],
        },
        {
          heading: 'Onboarding Review and Financial-Crime Alert Triage',
          body: 'Know-your-customer onboarding is document work at scale: extracting entity details from incorporation papers and identity documents, resolving ownership structures across filings, reconciling names across systems and summarising adverse-media results. Anti-money-laundering alert triage is similar — transaction monitoring generates far more alerts than analysts can investigate deeply, and most close without a filing. Assembling the case file, summarising prior alerts and drafting a first-pass narrative is real leverage. What stays human is the decision itself and its rationale. The judgement to escalate or to file — a suspicious activity report in the US and UK, a suspicious transaction report under EU regimes — and the reasoning recorded behind it belong to the firm and to a named person.',
          bullets: [
            'Onboarding: entity extraction, ownership resolution, name reconciliation, adverse-media summarisation',
            'Alert triage: case assembly, prior-alert summary and a first-pass narrative for the analyst',
            'The escalation or filing decision and its recorded rationale stay with a named human, always',
            'Missed alerts are silent — measure what the assistant deprioritised, not only what it surfaced',
          ],
        },
        {
          heading: 'Claims, Contracts and Research Summarisation',
          body: 'The same shape recurs across the institution. Insurance claims handling is document intake, extraction and consistency checking before a human adjudicates. Credit agreements and derivative contracts contain covenants, definitions and terms that teams currently locate by hand across hundreds of pages. Research and market summarisation compresses filings, transcripts and reports that an analyst would otherwise skim. Client-service drafting turns a query and the relevant policy text into a first-pass reply. In each case the model is compressing or locating text that you supplied, a person reviews before anything leaves the building, and errors are visible to that person. Note also that anything sent to a client is usually a business communication subject to retention and supervision.',
          bullets: [
            'Claims and contract work: intake, extraction, covenant and clause location, consistency checking',
            'Research: compressing filings, transcripts and reports an analyst would otherwise read at speed',
            'Client-service drafting is a first pass — and the sent message is a retained, supervised communication',
            'In all four, the human review that already existed is what makes the risk acceptable',
          ],
        },
        {
          heading: 'Why Not the Other Things',
          body: 'It matters as much to say where this does not earn its place. Investment recommendations and client advice put a generative system inside a regulated advice perimeter: MiFID II suitability in the EU, and in the US Regulation Best Interest for retail broker-dealer recommendations plus the adviser fiduciary standard. Autonomous trading removes the review step that made the other uses acceptable and can lose money faster than anyone can intervene; faulty trading software has built enormous unintended positions within minutes. Replacing a scored credit decision with a language model surrenders the explainability and stability consumer-credit rules in the US and EU assume. The common failure each time: no ground truth in front of the model, high consequence, and a duty the output cannot meet.',
          bullets: [
            'Recommendations engage the local advice regime — MiFID II suitability in the EU, Regulation Best Interest and the adviser fiduciary standard in the US',
            'Autonomous execution removes the human review step that justified the other use cases',
            'A generative model in place of a scorecard forfeits the stability and explanation consumer-credit rules expect',
            'Ask which obligation attaches to the output before asking whether the model is good enough at the task',
          ],
        },
      ],
    },
    {
      id: 'fn1l4',
      title: 'Where the Pilots Die',
      slides: [
        {
          heading: 'Data Quality and Lineage Beat Model Quality',
          body: 'The most common cause of death is not the model. It is that the data is worse than anyone admitted. Customer records are duplicated and inconsistent across core banking, CRM and product systems. Entity resolution across legal entities and jurisdictions is unsolved. Reference data has multiple contested golden sources. Critical facts exist only inside scanned documents. On top of quality sits lineage: validation and audit both require you to show where a number came from, through which transformations, under whose ownership. A pilot on a hand-cleaned extract proves the model works on data your institution cannot actually produce at run time, which is a different and much less useful claim.',
          bullets: [
            'Duplicate, inconsistent and unresolved entity data across core systems is the usual blocker',
            'Multiple contested golden sources for the same reference data defeat reconciliation before modelling starts',
            'Validation and audit both require lineage — origin, transformations and ownership, evidenced',
            'A pilot on a hand-cleaned extract proves nothing about production data you cannot reproduce',
          ],
        },
        {
          heading: 'Legacy Systems and the Sign-Off Nobody Scoped',
          body: 'Two structural killers arrive late. Integration with core platforms means batch windows, change freezes, brittle interfaces and release cycles measured in quarters; getting an output in front of a user inside a system they already use is usually harder than building the capability. Then there is the governance path nobody put in the plan: model risk classification, independent validation with a real queue, second-line review, data protection assessment, records-retention treatment, procurement and third-party risk, and an approval committee that meets monthly. Teams that discover this after the demo find they have built something that cannot be deployed for reasons that were entirely foreseeable. Map the approval path before you build, not after.',
          bullets: [
            'Core-platform integration, batch windows and change freezes dominate the timeline, not the modelling',
            'Getting output in front of a user inside a system they already use is usually the harder half',
            'Model classification, independent validation, data protection review and procurement all queue',
            'Map the full approval path before building — the sequence is knowable in advance and rarely mapped',
          ],
        },
        {
          heading: 'Ownership and Vendor Concentration',
          body: 'Pilots are staffed by enthusiasts with protected time; production is staffed by whoever is on shift. Ask the unglamorous questions early. Who is the accountable owner in the first line? Who monitors performance, against what thresholds, and on whose desk does the alert land? Who takes the call when a user reports that the output looks wrong on an ordinary working day, and who is authorised to switch it off? Who re-validates after the provider updates the underlying model, and how would you even know they had? Behind all of those sits a dependency question: a small number of model providers and cloud hosts now sit underneath much of the industry, so an outage or a behaviour change is a correlated event rather than a firm-specific one. Module 3 takes that further.',
          bullets: [
            'Name the first-line owner, the monitoring thresholds, the escalation path and who may switch it off',
            'A provider-side update is a change to your model; module 2 sets out what change control then requires',
            'Pilots that depend on one champion expire quietly when the champion changes role',
            'Concentration turns a supplier problem into an industry-wide correlated one — module 3 returns to it',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'A pre-mortem costs an hour and routinely saves a quarter. Take one AI use case your institution is actually considering and kill it on paper before anyone builds it.',
          exercise: {
            task: 'Pick one AI use case genuinely proposed at your firm. Write a pre-mortem: assume it failed eighteen months after go-live and list the reasons, forcing at least one under each of data lineage, legacy integration, governance sign-off, ownership and vendor concentration. Then name the earliest signal for each. This is a paper exercise — no customer data, no personal financial data and nothing confidential goes into an AI tool at any point; if you want a worked example to reason against, use public regulatory filings, synthetic records or de-identified material only.',
            copyText: 'Use case, described generically:\nData: which source, whose golden copy, can lineage be evidenced end to end?\nIntegration: which core system, whose release cycle, where does the output appear?\nGovernance: model tier, who validates, which committee approves, how long is the queue?\nOwnership: first-line owner, monitoring thresholds, who switches it off?\nVendor: who provides the model, what happens on their update, what is the exit?\nEarliest detectable signal for each failure:',
            selfCheck: [
              'Every one of the five categories produced a specific failure, not a generic worry',
              'You can name the accountable person for each, or you have found a real gap',
              'At least one failure would only surface after go-live unless you add a monitor now',
              'Nothing you used in the exercise was customer, personal financial or confidential material',
            ],
          },
        },
      ],
    },
    {
      id: 'fn1l5',
      title: 'Front, Middle and Back Office',
      slides: [
        {
          heading: 'Same Technology, Three Different Risk Profiles',
          body: 'A summarisation assistant is not one risk. Placed in front of a client it is a conduct and communications matter. Placed in risk management it affects whether exposure is measured correctly. Placed in operations it affects settlement and reporting accuracy. The technology is identical; the consequence, the regulatory hook and the person who answers for it all differ. This is why firm-wide statements about whether AI is allowed tend to be useless — the meaningful unit is the specific use in a specific place. When a proposal arrives, the first question is not what model it uses but where in the institution its output lands and who is holding the consequence when it is wrong.',
          bullets: [
            'The risk lives in where the output lands, not in the model or the capability itself',
            'One technology can be a conduct issue, a risk-measurement issue or an operations issue',
            'Blanket firm-wide positions on AI collapse on contact with specific use cases',
            'First question on any proposal: whose consequence is it when this output is wrong?',
          ],
        },
        {
          heading: 'Front Office: The Customer and the Market Bear It',
          body: 'Client-facing and revenue-generating uses carry the consequence outward. A drafted client message that misstates a product feature is a mis-selling exposure, not a typo. Anything shading toward a recommendation engages the advice regime that applies — MiFID II suitability in the EU; in the US, Regulation Best Interest for retail broker-dealer recommendations and the adviser fiduciary standard — and those duties are owed by a licensed person, not a tool. Communications generated or assisted by a tool are still business communications: in US securities regulation firms must retain and supervise them, and enforcement over unmonitored channels has been substantial. In trading, EU algorithmic-trading rules impose systems-and-controls duties: testing, risk limits and the ability to halt.',
          bullets: [
            'A wrong client message is a mis-selling and conduct exposure, not a drafting error',
            'Recommendation duties are jurisdictional: MiFID II suitability in the EU, Regulation Best Interest and the adviser fiduciary standard in the US',
            'Assisted communications remain retained, supervised business records — in US securities regulation, explicitly so',
            'Algorithmic-trading controls assume a halt that works — check whether yours has ever been exercised, not just designed',
          ],
        },
        {
          heading: 'Middle and Back Office: The Firm Bears It Quietly',
          body: 'Middle-office failures are dangerous because they are silent. If a tool assisting risk measurement, limit monitoring, validation or surveillance is wrong, the firm does not lose money immediately — it simply stops knowing its own exposure, and finds out at the worst moment. Surveillance is the sharpest case: a system that quietly under-flags creates the appearance of a clean book. Back-office failures are more visible but not less serious. Reconciliation breaks, settlement errors, misstated ledgers and inaccurate regulatory returns are all reportable events, and under many regimes submitting incorrect data to a supervisor is treated as a breach in its own right, independently of the error that caused it. In both zones the firm absorbs the consequence before anyone outside notices.',
          bullets: [
            'Middle-office errors do not lose money on the day — they remove your knowledge of your own exposure',
            'A surveillance tool that under-flags manufactures the appearance of a clean book',
            'Back-office errors surface as breaks, misstated ledgers and inaccurate regulatory returns',
            'Under many regimes the wrong return is itself a breach, so a correction carries two problems rather than one',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A business unit argues that AI governance should sit outside the model risk framework because language models are a different kind of thing. What is the strongest response?',
      options: [
        'Agree — a separate parallel regime avoids polluting existing model validation metrics',
        'Agree, but only for uses that touch customers directly',
        'Extend the existing framework: the obligations attach to the use and the outcome, not to the architecture',
        'Wait for the vendor to confirm which framework its product falls under',
      ],
      correct: 2,
    },
    {
      q: 'A team proposes two pilots: summarising loan agreements a reviewer already reads, and answering staff policy questions from the model\'s own knowledge. Which is the safer place to start, and why?',
      options: [
        'The policy questions — general knowledge tasks carry lower stakes than contract work',
        'The loan agreements — the source text sits in front of the model and the reviewer can detect an error against it',
        'Neither differs materially, since both are text tasks with similar risk',
        'The policy questions — handling no documents means no data protection exposure',
      ],
      correct: 1,
    },
    {
      q: 'An AML team wants an assistant to summarise alerts and draft first-pass narratives. What must stay unambiguously human?',
      options: [
        'Retrieving prior alerts on the same customer',
        'Extracting counterparty names from statements',
        'Formatting the case file for the investigator',
        'The escalation or filing decision and the recorded rationale behind it',
      ],
      correct: 3,
    },
    {
      q: 'A pilot performs well on a hand-cleaned data extract. What does that result actually establish?',
      options: [
        'That the use case is ready for a limited production release',
        'Very little — production data quality and lineage are the untested part, and usually the fatal one',
        'That the model architecture has been validated',
        'That integration work can be deferred to a later phase',
      ],
      correct: 1,
    },
    {
      q: 'The same summarisation tool is proposed for client messaging and for internal reconciliation. Why do these need different treatment?',
      options: [
        'Client-facing systems require more computing capacity',
        'Internal systems are exempt from firm policy',
        'Consequence and accountability differ: one is a conduct and communications matter, the other an operations and reporting one',
        'Only client-facing tools count as models',
      ],
      correct: 2,
    },
    {
      q: 'Which statement about what generative AI changed in finance is stated correctly here?',
      options: [
        'It removed the requirement for independent validation of low-materiality models',
        'It replaced the need for a model inventory with vendor attestations',
        'It created a supervisory exemption for tools that only produce text',
        'It made unstructured text tractable at volume, while validation duties and accountability were untouched',
      ],
      correct: 3,
    },
    {
      q: 'A proposal notes that the model provider will push updates automatically, at no cost, with no action needed from the firm. How should that be read?',
      options: [
        'As a change-control problem: an updated model is a change your firm must detect and re-assess',
        'As a benefit, since the provider maintains model quality on your behalf',
        'As irrelevant, because the firm did not build the model',
        'As acceptable provided the contract includes an uptime commitment',
      ],
      correct: 0,
    },
  ],
};

export default fnM1;
