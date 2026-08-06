import type { CourseModule } from '../../types/course';

const hcM4: CourseModule = {
  id: 'hc-m4',
  title: 'Regulation, Privacy, and Governance',
  icon: 'shield',
  summary: 'Software as a Medical Device and intended use, the regulatory landscape conceptually, change control for updating models, patient data protection, accountability, and institutional governance.',
  lessons: [
    {
      id: 'hc4l1',
      diagram: 'SaMDGovernance',
      title: 'Software as a Medical Device and Intended Use',
      slides: [
        {
          heading: 'What Makes Software a Medical Device',
          body: 'Across major jurisdictions, whether software is regulated as a medical device turns on its intended purpose rather than its technology. Software intended for diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease generally falls within the definition. Software that only stores, transmits, or displays data, or that supports administration, generally does not. The technology is irrelevant to the classification: a simple rule-based calculator can be a regulated device while a sophisticated model can sit outside scope, purely because of what each claims to do. This is counter-intuitive to engineers and to buyers, and it is the single most important structural fact about healthcare AI regulation.',
          bullets: [
            'Classification follows intended purpose, not sophistication or technology',
            'Diagnosis, prognosis, monitoring, prediction, and treatment support tend to fall in scope',
            'Storage, transmission, display, and administration generally sit outside it',
            'A simple calculator can be regulated while a complex model is not — the claim determines it',
          ],
        },
        {
          heading: 'The Intended-Use Statement Governs Everything',
          body: 'The intended-use statement is the most consequential document attached to a clinical AI product. It defines the condition, the patient population, the clinical setting, the user, the role in the decision, and the data the product operates on. Everything else follows from it: the evidence required, the risk classification, the labelling, the post-market obligations, and the boundary of what the manufacturer stands behind. Two products with identical code and different intended-use statements have different regulatory lives. For a buyer, this means the useful question is never "is this approved?" but "approved for what, for whom, in which setting, and in which role?" A regulatory clearance is not a general endorsement of a product.',
          bullets: [
            'Intended use fixes condition, population, setting, user, role, and input data',
            'Evidence, classification, labelling, and post-market duties all flow from it',
            'Ask not "is it approved" but "approved for what, for whom, in which setting, in which role"',
          ],
        },
        {
          heading: 'Drifting Outside the Envelope',
          body: 'Real deployments drift. A tool cleared as a second reader gets used concurrently because it is faster. A tool validated in adults is used in adolescents because the case was borderline. A prioritisation tool becomes a de facto rule-out because clinicians learn to trust its silence. Each step is locally reasonable and cumulatively takes the deployment outside the envelope the evidence and the approval cover — usually without any decision that anyone would recognise as a decision. This is an institutional governance responsibility rather than a manufacturer one: the institution has to define permitted use, communicate it to users, and periodically check what is actually happening in the workflow versus what was authorised.',
          bullets: [
            'Drift happens incrementally through locally reasonable choices, not through a decision',
            'Population, role, and setting are the three axes that drift most often',
            'Define permitted use, communicate it, and audit actual use against it',
            'Out-of-envelope use shifts responsibility toward the institution',
          ],
        },
      ],
    },
    {
      id: 'hc4l2',
      diagram: 'RegulatoryLandscapeHC',
      title: 'The Regulatory Landscape, Conceptually',
      slides: [
        {
          heading: 'The Shared Logic Across Jurisdictions',
          body: 'The details differ substantially between jurisdictions, but the underlying architecture is broadly shared. Obligations are risk-proportionate: the greater the potential harm from a wrong output, the greater the evidence and the scrutiny required. Evidence must support the specific intended use rather than general capability. Quality management systems and technical documentation are required, so that how the product was developed is inspectable. And obligations continue after market entry through post-market surveillance and vigilance reporting. If you understand those four principles you can orient in any jurisdiction and ask sensible questions, even without knowing the specific instruments — which is the right posture, because they change.',
          bullets: [
            'Risk-proportionate obligations: higher potential harm, higher evidence burden',
            'Evidence must support the stated intended use, not general capability',
            'Quality management and technical documentation make the development process inspectable',
            'Post-market surveillance and incident reporting continue after approval',
          ],
        },
        {
          heading: 'United States and European Union, at a High Level',
          body: 'In the US, medical device software is overseen by the FDA through a risk-based framework with different routes to market, including pathways based on demonstrating equivalence to an existing device and pathways for novel low-to-moderate risk devices, alongside a more demanding route for the highest-risk category. In the EU, medical device software is classified under the Medical Device Regulation, with conformity assessment involving a notified body for higher risk classes, and the AI Act adds a further horizontal layer of obligations for AI systems classified as high-risk, which many medical devices are. The practical consequence in Europe is two overlapping regimes that must be satisfied together rather than one replacing the other.',
          bullets: [
            'US: a risk-based FDA framework with multiple routes to market depending on novelty and risk class',
            'EU: MDR classification and conformity assessment, with notified body involvement above the lowest risk classes',
            'The EU AI Act layers additional high-risk obligations on top of, not instead of, MDR',
            'Approval in one jurisdiction confers nothing in another',
          ],
        },
        {
          heading: 'What Approval Does and Does Not Tell You',
          body: 'A regulatory clearance or certification tells you a manufacturer met a defined standard of evidence for a defined intended use in a defined jurisdiction at a point in time. It does not tell you that the product will perform well in your institution, that it outperforms your current practice, that it was validated on patients like yours, that it is cost-effective, or that it is safe in a workflow different from the one contemplated. Regulatory status is a floor and a scope statement, not a recommendation. Institutions that treat it as sufficient skip local validation on the grounds that the regulator already checked — a category error, because the regulator checked something different from what the institution needs to know.',
          bullets: [
            'Approval means evidence met a standard for a specific use, jurisdiction, and point in time',
            'It implies nothing about local performance, comparative benefit, or cost-effectiveness',
            'Regulatory status is a floor and a scope statement, never a recommendation',
            'Treating approval as a substitute for local validation is a category error',
          ],
        },
      ],
    },
    {
      id: 'hc4l3',
      diagram: 'ModelChangeControl',
      title: 'Change Control for Models That Update',
      slides: [
        {
          heading: 'The Frozen Model and Its Alternative',
          body: 'Traditional device regulation assumes a product that does not change: it is assessed, approved, and then behaves the same way until the manufacturer submits a modification. Machine learning models sit awkwardly with this. They can be retrained on new data, adapted to local populations, or updated continuously — and each of those is precisely the behaviour the frozen-model assumption excludes. Most clinically deployed models are therefore locked: they do not learn in the field, and updates arrive as discrete versions. That is a deliberate safety choice, not a technical limitation, because a model that changes between one patient and the next cannot be meaningfully validated, audited, or reasoned about after an incident.',
          bullets: [
            'Device frameworks assume a product that behaves consistently after approval',
            'Most clinical models are locked and updated as discrete versions rather than learning in the field',
            'Locking is a safety and auditability choice, not a technical shortcoming',
            'A continuously changing model cannot be meaningfully validated or investigated after harm',
          ],
        },
        {
          heading: 'Planning Change in Advance',
          body: 'Regulators have developed the concept of specifying anticipated modifications up front: the manufacturer describes in advance what kinds of change it expects to make, the methods and data it will use, and the performance criteria the modified model must meet, so that pre-agreed changes can be made without a fresh submission each time. The logic is to make change predictable and bounded rather than pretending it will not happen. The practical significance for an institution is that a product may legitimately change after you deploy it, within an envelope you should understand. Ask what may change, what triggers a change, how you will be notified, and what evidence accompanies each version.',
          bullets: [
            'Anticipated changes, methods, and acceptance criteria can be specified in advance and agreed',
            'The aim is bounded, predictable change rather than a pretence of stasis',
            'Ask what can change, what triggers it, how you are notified, and what evidence comes with each version',
            'In the US this mechanism is the Predetermined Change Control Plan, which the FDA has addressed in dedicated guidance',
          ],
        },
        {
          heading: 'What the Institution Must Track',
          body: 'Change control does not end at the manufacturer. The institution needs to know which version is running, when it changed, what changed, and whether the local validation still holds — and it needs to know this without depending on a vendor release note nobody reads. Silent updates are a genuine operational risk: a tool can behave differently on Monday than it did on Friday with no local notification, and the first sign may be a change in clinician override rates. Version identity should be recorded alongside outputs so that any retrospective investigation can determine which model produced a given result. Re-validation triggers should be defined in advance, along with who is responsible for executing them.',
          bullets: [
            'Record model version alongside outputs so past results can be attributed to a specific model',
            'Silent vendor updates can change behaviour with no local notification',
            'Define in advance which changes trigger re-validation, and who performs it',
            'Contract for advance notice of material model changes rather than relying on release notes',
          ],
        },
      ],
    },
    {
      id: 'hc4l4',
      diagram: 'DeidentificationConsent',
      title: 'Patient Data, De-identification, and Consent',
      slides: [
        {
          heading: 'Two Regimes, Different Shapes',
          body: 'In the US, HIPAA governs protected health information held by covered entities and their business associates, structuring permitted uses and disclosures and imposing safeguards; notably, it attaches to categories of entity, so identical data can be in or out of scope depending on who holds it. In the EU, GDPR is a general data protection regime under which health data is special-category data requiring both a lawful basis and a specific condition for processing, with rights attaching to the individual regardless of who holds the data. The practical difference matters for AI: a US wellness app may hold health information outside HIPAA, while in the EU the same data carries special-category protection wherever it sits.',
          bullets: [
            'HIPAA attaches to covered entities and business associates — the holder determines scope',
            'GDPR treats health data as special-category, requiring a lawful basis plus a processing condition',
            'Identical data can be regulated differently in the US depending on who holds it',
            'Cross-border processing and vendor hosting raise transfer questions on top of both',
          ],
        },
        {
          heading: 'De-identification Has Limits',
          body: 'De-identification is the standard justification for using patient data in AI development, and it is weaker than it is usually presented. Removing direct identifiers does not remove the combinations that make records distinctive: rare conditions, unusual trajectories, precise dates, small geographies, and long longitudinal histories are all potentially identifying in combination with outside information. Imaging carries the additional problem that some scans contain reconstructable facial anatomy, and genomic data is intrinsically identifying and cannot be de-identified in any meaningful sense. Re-identification research has repeatedly demonstrated that supposedly anonymous health data can be linked back to individuals. Treat de-identified data as lower risk, not as outside the risk conversation.',
          bullets: [
            'Rare conditions, precise dates, small geographies, and long histories are identifying in combination',
            'Some imaging permits facial reconstruction; genomic data is intrinsically identifying',
            'Re-identification of supposedly anonymous health data has been demonstrated repeatedly',
            'Treat de-identified as lower risk, not as non-personal',
          ],
        },
        {
          heading: 'Consent, Transparency, and Secondary Use',
          body: 'Two distinct questions get conflated. First: does the patient know AI is involved in their care, and does that matter to them? Reasonable positions differ on whether every use requires disclosure, but the emerging expectation is that patients should be able to find out, and that anything materially affecting their care should be disclosed. Second: was their data used to build or improve the system? Secondary use for model development frequently rests on a basis the patient never actively considered, and vendor contracts sometimes permit training on institutional data in terms that clinical staff have never seen. Both questions deserve explicit institutional answers rather than being left to the procurement paperwork.',
          bullets: [
            'Disclosure of AI involvement in care and secondary use of data for training are separate questions',
            'The emerging expectation is that patients can find out, with disclosure where care is materially affected',
            'Check whether vendor terms permit training on your institution\'s data — clinical staff rarely see these clauses',
            'Special-category data in the EU requires the processing condition to be identified explicitly, including for development',
          ],
        },
      ],
    },
    {
      id: 'hc4l5',
      diagram: 'ClinicalGovernanceCommittee',
      title: 'Accountability and the Governance Committee',
      slides: [
        {
          heading: 'Who Is Accountable When AI Contributes to Harm',
          body: 'There is no single answer, and anyone offering one confidently is oversimplifying. Responsibility is distributed across at least four parties: the manufacturer, for the product performing as specified for its intended use; the institution, for selecting it, validating it locally, integrating it safely, training staff, and monitoring it; the clinician, whose professional judgement and duty of care are not transferred by using a tool; and, in some framings, the regulator that authorised it. Legal treatment varies by jurisdiction and is still developing. What is stable is the professional position: a clinician who acts on an AI output remains responsible for that decision, and "the system said so" has never been an adequate account.',
          bullets: [
            'Responsibility is distributed: manufacturer, institution, clinician, and regulatory oversight',
            'Using a tool does not transfer professional duty of care',
            'Legal treatment varies by jurisdiction and remains in development',
            'Institutions carry selection, validation, integration, training, and monitoring responsibility',
          ],
        },
        {
          heading: 'What a Governance Committee Actually Does',
          body: 'An effective AI governance function is operational rather than advisory. It maintains an inventory of every AI-containing system in the institution, including tools procured as ordinary software. It runs an intake process so new proposals are assessed before purchase rather than after. It sets the local validation standard and reviews the results. It approves specific intended uses and records what is permitted. It defines monitoring requirements and receives the reports. It handles incidents. And it retires tools. A committee that only reviews proposals and never monitors, retires, or suspends anything is a procurement gate wearing a governance label, and it will not catch the problems that matter.',
          bullets: [
            'Maintain an inventory — including AI arriving inside systems bought as ordinary software',
            'Assess at intake, before purchase commits the institution',
            'Set the local validation standard, review results, and record approved intended use',
            'Receive monitoring reports, handle incidents, and actually retire tools',
          ],
        },
        {
          heading: 'Composition and Authority',
          body: 'Two failure modes recur. A committee that is purely clinical cannot assess data protection, procurement, or technical questions. A committee that is purely technical approves things clinicians will not use and misses clinical risk entirely. Useful composition spans clinical specialties that will use the tools, informatics, data protection and information governance, risk and quality, procurement, and — increasingly expected — patient representation. Authority matters more than composition: the committee must be able to say no, and to suspend a live deployment without renegotiating its mandate. If a tool can be adopted by going around it, the committee documents decisions rather than governing them.',
          bullets: [
            'Span clinical, informatics, data protection, risk and quality, procurement, and patient representation',
            'The committee must be able to refuse and to suspend a live deployment',
            'If tools can be adopted around the committee, it documents rather than governs',
            'Give the standing monitoring function resource — review meetings alone do not detect drift',
          ],
        },
        {
          heading: 'The Lifecycle View',
          body: 'The most practical way to organise all of this is as a lifecycle every tool passes through, with named owners at each stage: intake and triage, where the proposal is characterised and risk-classified; evidence review, covering regulatory status, published evidence, and its limits; local validation against pre-committed criteria; approval of a specific documented intended use, with defined permitted and prohibited uses; controlled deployment with training and clear escalation routes; ongoing monitoring with defined metrics, reporting cadence, and suspension triggers; and eventual retirement, which needs planning because clinical workflows come to depend on tools quietly. Most institutional failures are not decisions to do the wrong thing — they are stages nobody owned.',
          bullets: [
            'Intake and triage, evidence review, local validation, approval, deployment, monitoring, retirement',
            'Name an owner for each stage — unowned stages are where failures accumulate',
            'Record permitted and prohibited uses, not just approval',
            'Plan retirement: workflows silently come to depend on tools that were never meant to be permanent',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Governance becomes real when the questions are written down before anyone is committed to an answer. Draft them for a pilot your institution could plausibly run.',
          exercise: {
            task: 'Pick one plausible AI pilot at your institution and write the questions that would have to be answered before it started — at least one for each lifecycle stage in this lesson. This is a paper exercise: no patient data, and no institutional or vendor documents pasted into an AI tool.',
            copyText: 'Proposed tool and intended use:\nIntake — what is the risk classification, and who assigns it?\nEvidence — what exists, and what are its limits?\nLocal validation — what sample, what comparator, what stop rule?\nApproval — what use is permitted, and what is prohibited?\nDeployment — who is trained, and what is the escalation route?\nMonitoring — which metrics, what cadence, whose desk?\nRetirement — what triggers it, and who decides?',
            selfCheck: [
              'Every lifecycle stage has at least one question a named person could be asked to answer',
              'Your stop rule is written as a specific result, not as an intention to review',
              'At least one question you wrote has no current answer at your institution',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Clinician',
          body: 'Your professional accountability does not change because a tool was involved. That is not a burden the institution has placed on you — it is the reason you are entitled to ask what a tool was approved for, how it was validated here, and how to report when it behaves oddly.',
          bullets: [
            '"The system said so" has never been an adequate account of a clinical decision',
            'You are entitled to know the approved intended use and the local validation result',
            'Know how to report unexpected behaviour, and treat near-misses as reportable',
            'If a tool is being used outside what it was approved for, escalate it — drift is a governance issue',
          ],
        },
        {
          role: 'security-se',
          label: 'Privacy and Compliance',
          body: 'AI governance and information governance overlap heavily but are not the same function. Keep the AI inventory joined to your data processing records, since most AI risk questions resolve into questions about what data went where, under which basis, and with what retention.',
          bullets: [
            'Join the AI inventory to processing records — one asset list, not two',
            'Scrutinise vendor terms for training rights over institutional data and for onward transfers',
            'De-identification claims need technical scrutiny, especially for imaging, genomic, and longitudinal data',
            'Model version and input provenance belong in the audit trail for incident investigation',
          ],
        },
        {
          role: 'developer',
          label: 'Health-Tech Builder',
          body: 'Intended use, change control, and auditability are architecture, not paperwork you add before launch. Retrofitting version attribution and output logging into a deployed clinical system is far more expensive than designing for them.',
          bullets: [
            'Write the intended-use statement early — it constrains the product and the evidence you must generate',
            'Log model version, inputs, and output with every result so any decision can be reconstructed later',
            'Design update delivery so deploying institutions get advance notice and a rollback path',
            'Build in the disaggregated performance reporting your customers\' governance committees will require',
          ],
        },
        {
          role: 'consultant',
          label: 'Adoption Adviser',
          body: 'Institutions usually ask for an AI strategy. What they need first is an inventory, an intake process, and a named owner for monitoring. Strategy without those three produces a document; those three without a strategy still reduce risk.',
          bullets: [
            'Start with inventory and intake — both are achievable quickly and immediately reduce exposure',
            'Give the committee real authority to refuse and suspend, or it becomes a documentation exercise',
            'Put local validation, subgroup reporting, update notification, and exit terms into procurement',
            'Plan for retirement and vendor failure — dependency accumulates faster than anyone expects',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'What primarily determines whether software is regulated as a medical device?', options: ['Its intended purpose — what it claims to do, for whom, in what role', 'Whether it uses machine learning', 'The size of the model', 'Whether it processes patient data'], correct: 0 },
    { q: 'A product holds a regulatory clearance. What does that establish about your institution?', options: ['That it will perform well on your patients', 'That it outperforms your current practice', 'Little — clearance covers a defined intended use and jurisdiction, not local performance', 'That local validation is no longer required'], correct: 2 },
    { q: 'Why are most clinically deployed models locked rather than continuously learning?', options: ['Continuous learning is computationally impossible in hospitals', 'A model changing between patients cannot be meaningfully validated, audited, or investigated after harm', 'Regulators have banned all model updates', 'Locked models are more accurate by design'], correct: 1 },
    { q: 'Which statement about de-identified health data is most accurate?', options: ['Removing names and dates makes data fully anonymous', 'De-identified data is outside every data protection regime', 'Imaging data can never be identifying', 'Rare conditions, precise dates, imaging anatomy, and genomic data can all permit re-identification'], correct: 3 },
    { q: 'A tool cleared as a second reader is gradually used concurrently instead. This is best characterised as:', options: ['A reasonable efficiency improvement within scope', 'Use outside the approved intended-use envelope, which is a governance failure', 'A matter solely for the manufacturer to resolve', 'Acceptable if local accuracy remains high'], correct: 1 },
    { q: 'Who is accountable when an AI-assisted decision contributes to patient harm?', options: ['The manufacturer alone', 'The clinician alone', 'Nobody, because the system is automated', 'Responsibility is distributed across manufacturer, institution, and clinician, and using a tool does not transfer duty of care'], correct: 3 },
    { q: 'What most clearly distinguishes a real AI governance committee from a procurement gate?', options: ['It meets more frequently', 'It includes a data protection representative', 'It monitors live deployments and can suspend or retire tools, not only approve them', 'It maintains meeting minutes'], correct: 2 },
    { q: 'Why should model version be recorded alongside every output?', options: ['So a past result can be attributed to the specific model that produced it during investigation', 'To calculate licensing costs accurately', 'Because regulators require version numbers on printed reports', 'To improve model accuracy over time'], correct: 0 },
  ],
};

export default hcM4;
