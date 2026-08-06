import type { CourseModule } from '../../types/course';

const fnM2: CourseModule = {
  id: 'fn-m2',
  title: 'Model Risk, Explainability, and the Regulator\'s Question',
  icon: 'shield',
  summary: 'Finance already had a model risk regime before anyone said AI, and these features land inside it: independent validation, case-level explanation, fair lending testing, inventory and change control, and accountability for models you did not build.',
  lessons: [
    {
      id: 'fn2l1',
      title: 'The Model Risk Frame You Already Have',
      slides: [
        {
          heading: 'Model Risk Was Defined Long Before AI',
          body: 'Model risk is conventionally defined as the potential for adverse consequences from decisions based on incorrect or misused model output, and it has two sources: the model may be fundamentally wrong, or it may be sound but used outside the purpose it was built for. The second source causes more damage in practice than the first. Supervisory guidance in US banking sets expectations across three areas — robust development, implementation and use; effective independent validation; and governance, policies and controls that make the first two happen. The UK prudential regulator has published its own model risk management principles for banks, and comparable expectations appear in other jurisdictions. This frame is older than the current technology and it is where AI features land.',
          bullets: [
            'Two sources of model risk: the model is wrong, or it is right and used outside its intended purpose',
            'Misuse outside intended purpose is the more common and more expensive failure of the two',
            'The frame has three parts: development and use, independent validation, and governance and controls',
            'US banking supervision and the UK prudential regulator both set model risk expectations; other regimes mirror them',
          ],
        },
        {
          heading: 'Independent Validation and Effective Challenge',
          body: 'Validation is not testing performed by the team that built the model. It is a separate exercise carried out by people with the competence, the standing and the incentives to say no — the quality usually described as effective challenge. It covers conceptual soundness, meaning the design and assumptions make sense for the intended use; ongoing monitoring, meaning performance is tracked against thresholds after deployment; and outcomes analysis, meaning results are compared against realised outcomes and sensible benchmarks. Challenge fails quietly when the validator reports to the model owner, is under-resourced, or arrives after the launch date has been announced publicly — which is to say that most validation failures are organisational rather than technical.',
          bullets: [
            'Validation is independent of development, with authority and standing to reject the model',
            'Three components: conceptual soundness, ongoing monitoring, and outcomes analysis against benchmarks',
            'Effective challenge requires competence and incentive — one without the other produces a rubber stamp',
            'A launch date announced before validation completes has already decided the validation outcome',
          ],
        },
        {
          heading: 'Where AI Features Strain the Frame',
          body: 'The frame holds, but several of its assumptions break. There is often no single realised outcome to backtest a text output against. The input is a prompt and a retrieved corpus, both of which are part of the model whether or not anyone documented them that way. Outputs may vary between identical runs. The population the system sees has no stable definition. And the provider controls the weights, so the model can change without a release on your side. Firms also argue about whether an LLM feature is a model at all under their own policy. The answer that survives supervision is to bring it into scope explicitly, tier it by materiality, and adapt the validation techniques rather than skip the validation. Does Your AI Actually Work? covers how those evaluation sets get built.',
          bullets: [
            'No single realised outcome to backtest against, and no stable population definition',
            'The prompt and the retrieval corpus are part of the model and belong in its documentation',
            'Identical inputs may produce different outputs, which breaks conventional reproducibility tests',
            'Bring it into scope and tier it by materiality — arguing it is not a model is the answer that fails',
          ],
        },
      ],
    },
    {
      id: 'fn2l2',
      title: '"Explain This Decision"',
      slides: [
        {
          heading: 'Three People Ask, and They Want Different Things',
          body: 'The word explanation hides three separate demands. A supervisor asks whether the model was conceptually sound, properly validated and used as intended — a question about process and evidence, answered from documentation. A complaint handler or ombudsman asks whether this particular customer was treated fairly and what the firm relied on — a question about one case. The declined customer asks what it was about them, and what they could change. In US consumer credit the Equal Credit Opportunity Act and its implementing Regulation B require a creditor to give specific principal reasons for an adverse action. In the EU, data protection law restricts solely automated decisions with legal or similarly significant effects and gives rights to human intervention and to contest.',
          bullets: [
            'The supervisor wants process and evidence: soundness, validation, use within intended purpose',
            'The complaint handler wants this case: what was relied on and whether treatment was fair',
            'In US consumer credit, adverse action requires specific principal reasons under ECOA and Regulation B',
            'The EU restriction bites on solely automated decisions, so inserting meaningful review changes which rules apply',
          ],
        },
        {
          heading: 'Global and Case-Level Explanation Are Not Substitutes',
          body: 'A global explanation describes the model overall: which factors it uses, how it was developed, what alternatives were considered, whether relationships are constrained to move in a sensible direction, and how it performs across segments. That is what a validation file contains and what a supervisor examines. A case-level explanation says why this application, at this time, produced this outcome. Firms routinely offer one where the other is required. Handing a supervisor a per-case attribution chart answers nothing about conceptual soundness; handing a declined customer a statement of overall feature importance tells them nothing they can act on. Both must exist, they are produced by different work, and neither excuses the absence of the other.',
          bullets: [
            'Global: factors used, development record, alternatives considered, constrained relationships, segment performance',
            'Case-level: why this application, at this moment, received this outcome',
            'A supervisor asking about soundness is not answered by a per-case attribution chart',
            'A declined customer is not answered by overall feature importance — build both deliberately',
          ],
        },
        {
          heading: 'Attribution Is Not the Same as a Reason',
          body: 'Post-hoc attribution methods assign contribution scores to inputs for a given prediction, and they are genuinely useful for debugging. They are not reasons. They describe the arithmetic of the model, not the situation of the customer. They are also less stable than they look: different methods, different reference baselines and correlated inputs can each reorder which factors appear to dominate, and a firm should know how much its explanations move under those choices. A reason that will survive a complaint must be truthful about the decision actually made, specific enough for the person to act on, and consistent between runs. Where the explanation duty is strict, that argues for a more interpretable model rather than a more elaborate explainer.',
          bullets: [
            'Attribution describes the model\'s arithmetic; a reason describes the customer\'s situation',
            'Different methods and baselines can reorder attributions — test how much yours move',
            'A usable reason is truthful, specific, actionable and stable across runs of the same case',
            'Where the duty is strict, an interpretable model often beats an elaborate post-hoc explainer',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Explanations look adequate until someone tries to act on one. Take a decision your firm makes and write the two explanations out in full, then attack them.',
          exercise: {
            task: 'Choose a customer-affecting decision your area makes — a credit decline, a pricing tier, an account restriction. Using only a synthetic or fully de-identified case you construct yourself, write the global explanation in one paragraph and the case-level explanation in three sentences a non-specialist could act on. Then have a colleague play the declined customer and the complaint handler and press you. No customer data, no personal financial data and nothing confidential goes into an AI tool at any stage; public filings, synthetic records or de-identified material only.',
            copyText: 'Decision type:\nGlobal explanation (one paragraph, no jargon):\nCase-level reason 1:\nCase-level reason 2:\nCase-level reason 3:\nWhat the customer could actually change:\nWhere the reason came from (model output, policy rule, or human override):\nWould the same case produce the same three reasons tomorrow?',
            selfCheck: [
              'The three case-level reasons are things about the customer, not features of the model',
              'At least one reason names something the customer could plausibly change',
              'You can say which part came from the model and which from a policy rule or a human',
              'The case you used was synthetic or de-identified, and nothing confidential entered any tool',
            ],
          },
        },
      ],
    },
    {
      id: 'fn2l3',
      title: 'Fair Lending and Proxy Discrimination',
      slides: [
        {
          heading: 'Removing the Variable Does Not Remove the Effect',
          body: '"The model does not see race" is a statement about inputs, and fair lending law is largely concerned with outcomes. In US lending, the Equal Credit Opportunity Act and the Fair Housing Act support challenges based on discriminatory effect and not only on intent, so a facially neutral model that produces materially worse outcomes for a protected group is exposed regardless of what it was fed. Other jurisdictions reach similar territory through equality and consumer protection law. The mechanism is proxying: a model with enough correlated features can reconstruct a characteristic it was never given, and it does so without anyone choosing that. More features and richer data increase proxy capacity rather than reducing it.',
          bullets: [
            'Fair lending exposure runs on outcomes, so excluding the variable is not by itself a defence',
            'In US lending, discriminatory effect can support a challenge without any showing of intent',
            'Correlated features let a model reconstruct a characteristic nobody supplied to it',
            'Richer feature sets increase proxying capacity — more data is not automatically fairer',
          ],
        },
        {
          heading: 'Where Proxies Actually Come From',
          body: 'The usual suspects are geography and postcode, which in many countries encode residential segregation directly. Then education institution, employer, occupation category, channel and device, language of application, and transaction or merchant patterns that differ systematically by community. Alternative data brought in to serve thin-file applicants can help genuine inclusion and can also import new proxies at the same time. The subtler problem is the label. A credit model learns from outcomes observed only on applicants who were approved under previous policy, so historic decisions are baked into the target the new model is trained to reproduce. Reject inference attempts to correct for that, but what it produces is an estimate of an unobserved outcome rather than a fix.',
          bullets: [
            'Postcode, employer, education, device, channel and merchant patterns are the common proxy carriers',
            'Alternative data can widen access and import new proxies in the same step',
            'The training label reflects who was approved before, so old policy is inherited by the new model',
            'Reject inference partially addresses the unobserved-outcome problem; it does not eliminate it',
          ],
        },
        {
          heading: 'Testing for Disparate Outcomes',
          body: 'You cannot test what you do not measure, and here the law pulls in two directions. Some US mortgage contexts require collection of applicant demographic information; in several other jurisdictions data protection rules restrict collecting or inferring the same characteristics, which leaves firms trying to test fairness without the data that makes testing possible. Statistical proxy methods used to estimate group membership are themselves estimates and carry their own error, which propagates into the test result. Whatever the approach, test more than approval rates: examine pricing, assigned limits, terms offered, override patterns and error rates by group, and record the methodology so a supervisor can see what you did and what you could not do.',
          bullets: [
            'Testing requires demographic data that some regimes mandate and others restrict — say which applies to you',
            'Estimated group membership carries error that flows straight into the fairness result',
            'Test approvals, pricing, limits, terms, overrides and error rates — not approval rates alone',
            'Document the method and its limits; an undocumented test is not evidence to a supervisor',
          ],
        },
        {
          heading: 'The Less-Discriminatory-Alternative Question, and Honest Limits',
          body: 'Where a disparity appears in US lending, the ECOA and Fair Housing Act framework runs a burden-shifting structure: whether the practice serves a substantial legitimate business need, and whether a less discriminatory alternative would meet that need comparably. What the framework asks for, then, is a search for such an alternative and a record of it, including the options considered and why each was set aside. Other jurisdictions reach related questions through equality and consumer law. Two caveats belong alongside all of this. Fairness metrics conflict mathematically, so no model satisfies every reasonable definition at once and the choice of metric is a policy decision recorded at a senior level. And practice for language-model components inside a decision chain is genuinely unsettled.',
          bullets: [
            'In US lending, the ECOA and Fair Housing Act structure asks about business necessity and less discriminatory alternatives',
            'What that framework asks for is the search and the record of it, including the options set aside and why',
            'Fairness definitions conflict mathematically; choosing between them is a senior policy decision, not a technical one',
            'Testing standards for LLM components inside a decision chain are not settled — say so rather than imply rigour',
          ],
        },
      ],
    },
    {
      id: 'fn2l4',
      title: 'Inventory, Documentation and Change Control',
      slides: [
        {
          heading: 'If It Is Not in the Inventory, It Is Not Managed',
          body: 'The model inventory is the spine of the whole regime, and its usual weakness is completeness rather than format. A workable inventory records every model in use, its owner, its intended purpose and limitations, its materiality tier, its validation status and date, its dependencies including data sources and any upstream models, and its monitoring arrangements. Three things routinely go missing: models embedded in purchased systems, consequential spreadsheets and end-user computing tools, and AI features adopted directly by a business team without going through technology procurement. That last category is growing fastest. Tiering by materiality is what keeps the regime proportionate; without it, everything is either over-governed or quietly ignored.',
          bullets: [
            'Record owner, intended use and limits, tier, validation status, dependencies and monitoring',
            'Models inside purchased systems and consequential spreadsheets are the classic omissions',
            'Business-adopted AI features bypass technology procurement and never reach the inventory',
            'Materiality tiering keeps oversight proportionate — without it the regime collapses at both ends',
          ],
        },
        {
          heading: 'Documentation That Must Exist Before Deployment',
          body: 'Documentation written after go-live is a different artefact from documentation written before, and supervisors can tell. Before deployment there should be a statement of intended use and limitations, data sources and lineage, a development record with alternatives rejected, segment-level rather than average performance, the validation report with findings and approval conditions, a monitoring plan with named thresholds, the review design, and a decommissioning plan. In the EU, the AI Act\'s Annex III places creditworthiness assessment and credit scoring of natural persons in the high-risk tier, carving out systems used purely to detect financial fraud, and also covers risk assessment and pricing in life and health insurance. That classification carries documentation obligations of its own.',
          bullets: [
            'Intended use and stated limitations first — most misuse traces back to a vague purpose statement',
            'Segment-level performance, not a headline average that hides the failures that matter',
            'Validation findings, approval conditions, monitoring thresholds, controls, fallback and decommissioning',
            'In the EU, Annex III covers creditworthiness and life and health insurance pricing as high-risk, but carves out pure fraud detection',
          ],
        },
        {
          heading: 'A Changed Model Is a New Model',
          body: 'Change control is where mature regimes are separated from decorative ones. A retrain on newer data, a reweighting, a new or altered input source, a moved cut-off, an edited prompt, a swapped retrieval corpus and a provider-side version upgrade are all changes to the thing that was approved, and each raises the question of whether the approval still stands. Materiality should drive how much re-validation follows, but the question must be asked and the answer recorded. The genuinely hard case is the change you did not initiate. Contract for advance notice of provider model changes, keep a held-out evaluation set you re-run on a schedule, and monitor for behaviour shifts, because a silent upgrade will not announce itself.',
          bullets: [
            'Retrains, reweightings, new inputs, moved thresholds, edited prompts and changed corpora are all changes',
            'Materiality sets the depth of re-validation, but the question is always asked and the answer recorded',
            'The hard case is the provider-side change you did not initiate and might not notice',
            'Contract for change notice, keep a held-out evaluation set, and monitor for behaviour shifts',
          ],
        },
      ],
    },
    {
      id: 'fn2l5',
      title: 'Third-Party Models and Vendor Risk',
      slides: [
        {
          heading: 'Outsourcing the Build Does Not Outsource the Accountability',
          body: 'Supervisors across jurisdictions converge on one point: a firm remains responsible for activities it outsources. US banking agencies have issued interagency guidance on managing risk in third-party relationships, the EU\'s Digital Operational Resilience Act brings information and communications technology third-party risk for financial entities into a formal framework including oversight of providers designated as critical, and comparable outsourcing expectations exist elsewhere. Applied to models, this means a purchased or hosted model must still be inventoried, tiered, validated and monitored by you. "The vendor validated it" is not a validation, and a supervisor asking why a decision was made will not accept a redirection to a supplier.',
          bullets: [
            'Responsibility for an outsourced activity stays with the firm in every major regime',
            'In the EU, DORA formalises ICT third-party risk and oversight of critical providers',
            'A purchased model is still your model: inventoried, tiered, validated and monitored by you',
            'Vendor self-certification is evidence to weigh, not validation you can rely on in its place',
          ],
        },
        {
          heading: 'What You Must Be Able to Obtain',
          body: 'Diligence should be framed as a list of things you need in hand, not a questionnaire. A clear statement of intended use and known limitations. Enough development and testing evidence for your validators to form an independent view. Performance broken down by segment on data resembling your population, not a headline benchmark. Advance notice of model changes with the right to test before they apply. Audit and information rights that survive into subcontracted infrastructure. Incident notification and support commitments with actual timescales. Terms covering what happens to your data, including whether it may be used to train. And an exit path with the data and artefacts you would need to leave.',
          bullets: [
            'Intended use, limitations, and development evidence sufficient for independent validation',
            'If a provider cannot show performance on a population like yours, that absence is itself a finding to record',
            'Advance change notice with a right to test, plus audit rights that reach subcontractors',
            'Data handling and training-use terms, incident commitments, and a documented exit path',
          ],
        },
        {
          heading: 'Compensating Controls, and the Limits of Substitution',
          body: 'Where a full validation is impossible because you cannot see inside the model, the gap has to be filled deliberately: heavier outcome monitoring, benchmarking and challenger comparison, recorded as compensating controls rather than presented as equivalence. Two vendor-level facts govern how much comfort those controls actually give. Substitutability is weaker than procurement decks suggest, because prompts, evaluation sets, tuning and integrations are shaped around one provider and do not transfer cleanly, which is why an exit plan that has never been exercised is a document rather than a capability. And your supplier is very likely your competitors\' supplier too, so a behaviour change moves outputs across many firms at once. Module 3 treats that correlated dimension in full.',
          bullets: [
            'Where opacity limits validation, name the compensating controls rather than implying equivalence',
            'Prompts, evaluations, tuning and integrations do not port cleanly — substitutability is overstated',
            'An exit plan that has never been exercised is a document, not a capability',
            'A shared supplier makes one provider\'s change a correlated event; module 3 takes that to the market level',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A vendor model is deployed to help price a retail product. Who is accountable to the supervisor for its performance?',
      options: [
        'The vendor, under its service agreement and self-certification',
        'The firm — responsibility for an outsourced activity does not transfer with the build',
        'Whichever party holds the training data',
        'Shared equally between firm and vendor once a service agreement is signed',
      ],
      correct: 1,
    },
    {
      q: 'A credit model excludes race, ethnicity and gender from its inputs. What does this establish about fair lending exposure?',
      options: [
        'It removes exposure entirely, since the characteristics are not observed',
        'It removes exposure in the EU but not in the US',
        'It shifts exposure onto the data provider',
        'Very little on its own — exposure runs on outcomes, and correlated features can reconstruct the characteristic',
      ],
      correct: 3,
    },
    {
      q: 'A declined applicant asks why. The team sends a per-case feature attribution chart. What is the main problem?',
      options: [
        'Attribution describes the model\'s arithmetic, not the applicant\'s situation or anything they could act on',
        'Attribution methods are too computationally expensive to produce at scale',
        'Attribution charts disclose commercially sensitive model internals',
        'Nothing — attribution is the standard form of adverse action reason',
      ],
      correct: 0,
    },
    {
      q: 'A model owner brings a thorough test report produced entirely by their own team and asks the committee to approve on that basis. What should happen before approval?',
      options: [
        'Ask the same team for a larger test dataset and a published benchmark comparison',
        'Approve, since extensive testing was done and the build team understands the model best',
        'Route it to a validation function independent of development, with the standing and incentive to reject it',
        'Approve conditionally and schedule a second round of testing by the same team after deployment',
      ],
      correct: 2,
    },
    {
      q: 'A team swaps the retrieval corpus behind a deployed assistant and rewrites its prompt, arguing that the model itself is unchanged. How should that be treated?',
      options: [
        'As a configuration change that sits outside the scope of model governance',
        'As acceptable provided output quality looks unchanged in spot checks',
        'As requiring full re-validation in every case, regardless of materiality',
        'As a change to the approved model: prompt and corpus are part of it, so materiality is assessed and the decision recorded',
      ],
      correct: 3,
    },
    {
      q: 'A business team has been using an AI tool for a consequential process for months without telling technology or risk. What is the first governance problem?',
      options: [
        'The tool may be more expensive than a procured alternative',
        'It is outside the model inventory, so it has no owner, tier, validation status or monitoring',
        'The team lacks the technical skill to operate it correctly',
        'It probably breaches the vendor\'s acceptable use policy',
      ],
      correct: 1,
    },
    {
      q: 'A fairness review of a US lending model finds a disparity in outcomes across groups. What does the ECOA and Fair Housing Act framework ask next?',
      options: [
        'Whether the practice serves a substantial legitimate business need, and whether a less discriminatory alternative would meet it comparably',
        'Whether the protected characteristic was an input to the model',
        'Whether headline approval rates can be recalibrated until they match',
        'Whether the provider that supplied the model has certified it as fair',
      ],
      correct: 0,
    },
  ],
};

export default fnM2;
