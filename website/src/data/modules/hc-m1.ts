import type { CourseModule } from '../../types/course';

const hcM1: CourseModule = {
  id: 'hc-m1',
  title: 'Where AI Actually Sits in Care',
  icon: 'target',
  summary: 'Read the safety framing first, then the honest map: documentation, decision support, imaging, triage, patient-facing tools — and why most pilots never reach production.',
  lessons: [
    {
      id: 'hc1l1',
      diagram: 'CourseScopeSafety',
      title: 'Read This First: Scope and Safety',
      sectionLabel: 'Start here',
      slides: [
        {
          heading: 'This Course Is Orientation, Not Clinical Guidance',
          body: 'Read this before anything else. This course is educational orientation for professionals who need to think clearly about AI in healthcare. It is not clinical guidance, not legal advice, and not a regulatory opinion. No output from an AI system — and nothing written in these lessons — substitutes for professional clinical judgement, your institution\'s protocols, or the approvals a product needs before it touches patient care. Nothing here should be used to make a decision about an individual patient. Where a lesson describes what a category of tool can do, that is a description of published capability patterns, not a recommendation to deploy it. A real deployment decision requires validation on your own local data plus formal institutional governance sign-off.',
          bullets: [
            'Educational orientation only — no lesson here constitutes clinical, legal, or regulatory advice',
            'No AI output replaces clinical judgement, institutional protocol, or the relevant regulatory approval',
            'Deployment is never a reading decision: it requires local validation on your own population and governance sign-off',
            'This course names capability categories and evidence patterns — it never gives a threshold, dose, protocol, or triage rule you could act on',
          ],
        },
        {
          heading: 'What You Will Deliberately Not Find Here',
          body: 'Some omissions are intentional. You will not find diagnostic cut-offs, dosing logic, treatment pathways, or triage rules — not because they are secret, but because a general course is the wrong place for anything a reader might apply to a patient without local validation behind it. You will also not find claims that a named commercial product is safe, effective, or approved for your setting. Regulatory status is jurisdiction-specific, version-specific, and intended-use-specific; it changes, and a course cannot track it for you. What you will find is the structure of the field: what the categories of tool are, what evidence exists for each, where that evidence is weak, and what questions to ask before anything reaches a patient.',
          bullets: [
            'No clinical thresholds, protocols, or decision rules — those belong to your institution and its evidence review',
            'No claims about specific commercial products being approved or effective in your setting',
            'What you get instead: categories, evidence patterns, failure modes, and the questions that separate a good deployment from a bad one',
          ],
        },
        {
          heading: 'Saying "The Evidence Is Thin" Is the Point',
          body: 'Healthcare AI is discussed in two registers: vendor optimism and blanket scepticism. Neither is useful to someone who has to make a decision. The honest position varies sharply by application. For some narrow tasks there is substantial published evidence, including prospective work. For others there are mainly retrospective studies on curated datasets, which tell you far less than they appear to. For a few widely promoted applications, the evidence is genuinely thin or mixed, and some well-publicised systems have underperformed badly once studied independently. This course states which is which. Being able to say "we do not know yet" about a specific claim is the most valuable skill it can give you.',
          bullets: [
            'Evidence quality varies by application, not by technology — treat every claim separately',
            'Retrospective performance on curated data is the weakest common form of evidence, and the most frequently cited',
            'Independent evaluation has repeatedly deflated systems that looked strong in vendor or single-site studies',
            '"We do not know yet" is a legitimate, defensible answer in a procurement meeting',
          ],
        },
        {
          heading: 'Who This Is For',
          body: 'Three audiences, one shared vocabulary. Clinicians and clinical leads need to understand what a tool is doing to their workflow and what it can quietly get wrong. Health-tech builders need to understand why a model that performs well on a benchmark is nowhere near a deployable product, and what regulators and hospitals will ask of them. Administrators and procurement teams need to evaluate claims without being able to read the underlying statistics themselves. None of these roles requires you to be an AI expert. Several lessons include role-specific views so you can read the same material through the lens that matches your job.',
          bullets: [
            'Clinicians: what changes in your workflow, and what fails quietly',
            'Builders: why benchmark performance is the start of the work, not the end',
            'Administrators and advisers: how to interrogate a claim without doing the statistics yourself',
          ],
        },
      ],
    },
    {
      id: 'hc1l2',
      diagram: 'CareAIMap',
      title: 'The Honest Map of Clinical AI',
      slides: [
        {
          heading: 'Five Places AI Shows Up in Care',
          body: 'It helps to separate the field into five zones, because the evidence, the risk, and the regulatory position differ enormously between them. Administrative and documentation tools sit furthest from the patient and carry the clearest current benefit case. Imaging and diagnostics is the most studied clinical zone and the most mature in regulatory terms. Clinical decision support sits closest to the diagnosis or treatment decision and is the hardest to evaluate honestly. Operational triage and prioritisation reorders work rather than changing clinical conclusions. Patient-facing tools reach people directly, without a clinician between the output and the person acting on it. Almost every argument about "AI in healthcare" collapses once you ask which zone is being discussed.',
          bullets: [
            'Administration and documentation — coding, scheduling, prior authorisation, note generation',
            'Imaging and diagnostics — detection, quantification, and worklist prioritisation',
            'Clinical decision support — risk scores, deterioration prediction, alerting',
            'Operations and triage, plus patient-facing tools such as symptom guidance and messaging',
            'The FDA publishes a public list of AI-enabled medical devices it has authorised; radiology accounts for the large majority of entries',
          ],
        },
        {
          heading: 'Distance From the Decision Predicts the Evidence',
          body: 'There is a rough pattern worth holding on to: the further a tool sits from an individual clinical decision, the easier it is to justify and the faster it moves. Documentation support can be evaluated on time, clinician burden, and note quality, with a clinician reviewing and signing every output. A deterioration prediction model, by contrast, has to prove not just that it predicts something, but that acting on the prediction improves outcomes — a much higher bar that many systems have never cleared. This is why the current landscape looks lopsided. It is not that clinical AI is impossible; it is that the evidentiary and regulatory burden rises steeply as you approach the patient, and much of the market has not paid it.',
          bullets: [
            'Far from the decision: measurable on workflow outcomes, with a human signing every output',
            'Close to the decision: must show that acting on the output changes patient outcomes, not just that it predicts well',
            'Many widely marketed clinical tools have never been evaluated against that higher bar',
          ],
        },
        {
          heading: 'Back-Office Does Not Mean Harmless',
          body: 'The convenient story is that administrative AI is low risk. It is lower risk, which is not the same thing. A generated clinical note becomes the record; it is what the next clinician reads, what a coder bills from, and what a court examines later. A coding tool that systematically shifts documentation patterns has financial and regulatory exposure. A scheduling or prior-authorisation system that behaves differently for different patient groups produces access inequity even though it never made a clinical claim. Risk in healthcare AI follows consequence, not category label. The right question is never "is this clinical?" but "what happens downstream if this output is wrong, and who would notice?"',
          bullets: [
            'A generated note is the record — downstream clinicians, coders, and reviewers rely on it',
            'Administrative systems can create access inequity without ever making a clinical claim',
            'Ask what happens downstream when the output is wrong, and who is positioned to notice',
            'Lower risk still requires review, audit, and an owner — it does not mean unmonitored',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'The five-zone map is only useful once you can place a real tool on it. This takes about fifteen minutes, a pathway you already know well, and no patient data at all.',
          exercise: {
            task: 'Pick one AI tool in use or proposed in a care pathway you know. On paper, write the pathway as steps, mark where the tool\'s output enters, and name the role accountable at each step after it. Use the general pathway description only — no patient records, no identifiable data, and nothing entered into an AI tool.',
            copyText: 'Tool and the zone it sits in:\nPathway step where its output appears:\nWho sees the output first:\nWho is accountable for acting on it:\nWhat happens downstream if it is wrong:\nWho would notice, and how:',
            selfCheck: [
              'You can name the zone the tool sits in and say why it is not one of the other four',
              'Every step after the output has a named accountable role, with no gaps',
              'You can state what goes wrong downstream if the output is wrong, and who would spot it',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Clinician',
          body: 'The five-zone map tells you what to expect from a tool before you use it. Tools far from the decision should save you time without changing your judgement. Tools near the decision are asking you to weigh their output — and you remain the person accountable for what happens next.',
          bullets: [
            'Ask which zone a new tool sits in — it predicts how much scrutiny each output needs from you',
            'For documentation tools, your review before signing is the actual safety control, not a formality',
            'For decision support, know what the tool was built to predict and on which population — it is often not your population',
          ],
        },
        {
          role: 'security-se',
          label: 'Privacy and Compliance',
          body: 'The zone map is also a data map. Ambient documentation captures raw consultation audio, patient-facing tools collect health information directly from individuals, and decision support pulls broad longitudinal record data. Each has a different lawful basis, retention, and disclosure profile.',
          bullets: [
            'Audio capture in the consultation room is a new data class for most institutions — retention and deletion need explicit policy',
            'Map every tool to what it ingests, where it processes, what is retained, and whether any of it feeds vendor model training',
            'Administrative tools are often procured outside clinical governance — that is precisely where unreviewed data flows appear',
          ],
        },
        {
          role: 'developer',
          label: 'Health-Tech Builder',
          body: 'The zone you build in determines your entire product obligation set: evidence standard, regulatory classification, integration surface, and how much clinician review you can assume. Choosing the zone deliberately is a product decision, not a marketing one.',
          bullets: [
            'Intended use written loosely to widen the market usually pulls you into a higher-risk classification — scope it deliberately',
            'If a clinician reviews and signs every output, say so in the design and do not build flows that quietly erode that review',
            'Integration with the record system is normally the dominant engineering cost, not the model',
          ],
        },
        {
          role: 'consultant',
          label: 'Adoption Adviser',
          body: 'Institutions rarely have an AI strategy problem; they have a portfolio problem. Use the zone map to inventory what is already in the building — including tools procured as ordinary software — before recommending anything new.',
          bullets: [
            'Start with an inventory: most institutions already run more AI-containing systems than leadership realises',
            'Sequence adoption by evidentiary burden — documentation and operations before decision support',
            'Match each candidate to a named clinical owner and a measurable outcome, or defer it',
          ],
        },
      ],
    },
    {
      id: 'hc1l3',
      diagram: 'AmbientScribeFlow',
      title: 'Documentation and Ambient Scribes',
      slides: [
        {
          heading: 'Why Documentation Is the Clearest Target',
          body: 'Documentation burden is one of the few problems in healthcare where the target is unambiguous, widely acknowledged, and measurable. Clinicians spend substantial time on record-keeping, much of it outside scheduled hours, and it is consistently reported as a major contributor to burnout. It is also a task where language models are working close to their genuine strength: converting unstructured speech into structured prose. Crucially, a clinician reads and signs the result, which means a human review step is built into the workflow by default rather than bolted on. That combination — real burden, natural model fit, native review step — is why ambient documentation is the clearest current win, and why it is not a template for other applications.',
          bullets: [
            'The burden is real, widely reported, and measurable in time and clinician-reported outcomes',
            'Speech to structured prose is a genuine strength of current language models',
            'Clinician review before signing is native to the workflow, not an added control',
            'None of the above transfers automatically to tools that make clinical claims',
          ],
        },
        {
          heading: 'What These Tools Actually Do',
          body: 'An ambient documentation tool listens to the consultation, transcribes it, and drafts a structured note in the expected format, sometimes proposing codes or orders for confirmation. The clinician edits and signs. That is the whole product. Note the shape of the claim: it is a workflow and burden claim, not a diagnostic one. The tool is not deciding anything; it is reducing the effort of recording a decision the clinician already made. Evaluation should follow that shape — time to note completion, after-hours documentation, clinician-reported burden, note quality as judged by other clinicians, and the volume and type of edits required. If a vendor is presenting accuracy figures without any of these, they are measuring the wrong thing.',
          bullets: [
            'Listen, transcribe, draft in the expected structure, clinician edits and signs',
            'The claim is about burden and workflow, not diagnosis — evaluate it on those terms',
            'Edit volume and edit type are among the most informative metrics available to you',
          ],
        },
        {
          heading: 'Failure Modes: Quiet Errors in a Fluent Note',
          body: 'The dangerous failure is not a garbled note; it is a fluent one. Two error classes matter. Omission: something said in the room does not reach the note, and its absence is invisible to a reviewer who was present but is now reading a plausible-looking document. Fabrication: the model produces detail that was never stated, because plausible continuation is what language models do. Both are harder to catch than they sound, because reviewing a well-written draft is cognitively different from writing from scratch — readers verify less. Add speech recognition weaknesses with accents, background noise, multiple speakers, and specialist terminology, and you have a set of failures that a satisfaction survey will never surface.',
          bullets: [
            'Omission is the harder error to catch — nothing on the page signals what is missing',
            'Fabrication follows directly from how language models generate: plausible is not the same as said',
            'Reviewing a fluent draft induces less scrutiny than writing from scratch — that is a documented human tendency, not a discipline problem',
            'Accents, noise, overlapping speakers, and specialist vocabulary degrade transcription unevenly across patient groups',
          ],
        },
        {
          heading: 'What a Sober Evaluation Looks Like',
          body: 'A credible evaluation compares notes generated with the tool against notes produced without it, reviewed by clinicians who did not use the tool, with attention to accuracy of content rather than only readability. It measures edit burden and looks specifically for omissions and additions relative to what was actually said. It examines performance across accents, languages, specialties, and consultation types rather than reporting a single average. And it runs long enough to see whether review discipline decays after the novelty period, because early enthusiasm reliably overstates steady-state behaviour. None of this requires statistical expertise to demand — it requires knowing that a global satisfaction score is not evidence.',
          bullets: [
            'Compare content accuracy, not just readability or satisfaction',
            'Break results down by accent, language, specialty, and consultation type — averages hide the failures that matter',
            'Run past the novelty period: review discipline decays and early results overstate steady state',
            'Pre-commit to what result would make you stop, before the pilot starts',
          ],
        },
      ],
    },
    {
      id: 'hc1l4',
      diagram: 'DecisionSupportSpectrum',
      title: 'Decision Support, Triage, and Patient-Facing Tools',
      slides: [
        {
          heading: 'Decision Support: An Old Field, A New Engine',
          body: 'Clinical decision support long predates modern AI — rule-based alerts and risk scores have been embedded in record systems for decades, with a well-documented failure mode: alert fatigue. Clinicians override alerts that fire too often or too imprecisely, and overriding becomes reflexive. Machine learning changes how the prediction is produced, not the human factors problem it lands in. A statistically better model that still fires constantly, or that fires without an actionable next step, will be dismissed exactly like its predecessors. The literature on deterioration and sepsis prediction in particular includes prominent examples of systems that were widely deployed and then found, on independent evaluation, to perform substantially worse in practice than their original claims implied.',
          bullets: [
            'Alert fatigue is the dominant failure mode and it is a human factors problem, not a modelling one',
            'Widely deployed prediction systems have been found, on independent evaluation, to underperform their original claims',
            'A prediction without a defined, feasible action attached is an interruption, not decision support',
          ],
        },
        {
          heading: 'Prediction Is Not the Same as Benefit',
          body: 'This is the single most misunderstood point in clinical AI. A model that identifies at-risk patients accurately still has to show that identifying them earlier leads to a different action, that the action is available and taken, and that taking it improves outcomes. Each link can break. The action may already have been happening. The staffing to respond may not exist. The intervention itself may lack strong evidence. And there is a structural irony: a successful intervention changes the outcome the model was trained to predict, so the model appears to degrade precisely when it is working. Asking "what changed for patients?" rather than "how accurate is it?" separates useful decision support from expensive noise.',
          bullets: [
            'Accurate prediction, available action, action actually taken, action that helps — every link must hold',
            'Successful intervention degrades apparent model performance, which complicates monitoring',
            'The question is what changed for patients, not how accurate the score was',
          ],
        },
        {
          heading: 'Operational Triage and Patient-Facing Tools',
          body: 'Two zones with opposite risk profiles. Operational triage — reordering a worklist, flagging studies for earlier review, forecasting demand — changes the sequence of work rather than clinical conclusions, which makes it comparatively tractable, though a prioritisation system that systematically deprioritises a group is a fairness problem even when every case is eventually seen. Patient-facing tools are the opposite: symptom guidance, chat interfaces, and messaging assistants reach people with no clinician between the output and the action. Design has to assume the user cannot evaluate the answer, may be in distress, and may not recognise an emergency. Escalation paths and hard boundaries matter more than conversational quality.',
          bullets: [
            'Triage reorders work rather than changing conclusions — but systematic deprioritisation of a group is still a harm',
            'Patient-facing tools have no clinician between the output and the action',
            'Escalation to a human and explicit refusal boundaries matter more than fluency',
            'Assume users cannot judge correctness and may not recognise an emergency',
          ],
        },
      ],
    },
    {
      id: 'hc1l5',
      diagram: 'PilotToProduction',
      title: 'From Demo to Deployment: Why Pilots Stall',
      slides: [
        {
          heading: 'The Demo Gap',
          body: 'A demonstration is a curated performance: selected cases, clean inputs, a presenter who knows where the edges are. Real deployment brings incomplete records, non-standard workflows, unusual presentations, and users who behave differently from the design assumption. The gap is not vendor dishonesty in most cases; it is that the demo is answering a different question. A demo shows that the capability exists. Deployment asks whether the capability survives contact with your data, your systems, your staffing, and your case mix. Treating a convincing demo as evidence about your institution is the most common category error in healthcare AI procurement, and it is the one that wastes the most money.',
          bullets: [
            'Demos establish that a capability exists — nothing about how it behaves on your data',
            'Real inputs are incomplete, non-standard, and distributed differently from demo cases',
            'The category error is treating a convincing demo as institution-specific evidence',
          ],
        },
        {
          heading: 'The Integration Tax',
          body: 'Most of the cost and nearly all of the delay in healthcare AI is integration. The model has to receive data from record systems, imaging archives, and device feeds in the right format at the right moment; outputs have to land somewhere a clinician will actually see them, inside an interface they already use; identity, access control, and audit logging have to work; and none of this can destabilise systems the hospital depends on hourly. Legacy interfaces, bespoke local configurations, and vendor lock-in make each step slower than estimated. Teams that budget for the model and treat integration as a detail discover that the ratio runs strongly the other way.',
          bullets: [
            'Data in, output somewhere clinicians already look, plus identity, access control, and audit',
            'Legacy interfaces and local configuration variation dominate the timeline',
            'A tool that requires a separate login and a second screen will not be used, regardless of quality',
          ],
        },
        {
          heading: 'Who Owns It on a Tuesday Afternoon?',
          body: 'Pilots are staffed by enthusiasts with protected time. Production is staffed by whoever is on shift. The unglamorous question — who monitors this, who is called when it behaves oddly, who decides to switch it off, who re-validates it after the vendor pushes an update, and out of whose budget — is what actually determines whether a pilot becomes a service. Institutions that answer it before the pilot tend to reach production. Institutions that defer it accumulate a portfolio of successful pilots that quietly expire when the champion moves on. Ownership is not a governance formality; it is the mechanism by which a tool stays safe after everyone stops paying attention to it.',
          bullets: [
            'Name the monitoring owner, the escalation path, and the person authorised to switch it off — before go-live',
            'Vendor model updates require re-validation, and someone has to be responsible for noticing them',
            'Pilots that depend on a single champion expire when the champion moves on',
            'Ongoing cost and staffing belong in the business case, not in a later conversation',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'This course describes what a category of AI tool can do. What does that description authorise?', options: ['Applying the capability in your own workflow', 'Setting a local decision threshold based on the material', 'Nothing clinical — it is orientation, and deployment needs local validation plus governance sign-off', 'Treating it as regulatory clearance for that category'], correct: 2 },
    { q: 'Which zone currently has the clearest and most consistent benefit case?', options: ['Autonomous diagnosis without clinician review', 'Fully automated treatment planning', 'Population-level outcome prediction', 'Reducing documentation and administrative burden'], correct: 3 },
    { q: 'Why does a tool that never makes a clinical claim still carry clinical risk?', options: ['Its output enters the record and downstream decisions rely on it', 'All software is automatically regulated as a medical device', 'Administrative tools receive no testing at all', 'Clinicians do not read generated notes'], correct: 0 },
    { q: 'An ambient scribe produces a fluent, well-structured note. What is the most important residual risk?', options: ['The note will be too long for the record', 'Quiet errors — omission or fabrication in a document that reads as correct and gets signed', 'The tool cannot handle more than one speaker', 'Formatting inconsistency between specialties'], correct: 1 },
    { q: 'A deterioration prediction model is accurate on retrospective data. What still has to be shown before it is useful?', options: ['That it runs fast enough for real-time use', 'That the vendor is financially stable', 'That it uses a modern model architecture', 'That acting on the prediction is feasible and actually improves outcomes'], correct: 3 },
    { q: 'What most often prevents a successful pilot from reaching production?', options: ['Integration, workflow ownership, and ongoing maintenance were never resourced', 'Regulators intervene to block deployment', 'Model accuracy collapses without warning', 'Clinicians refuse to use any new technology'], correct: 0 },
    { q: 'A patient-facing symptom tool differs from clinician-facing decision support mainly because:', options: ['It uses a different kind of model', 'It handles less sensitive data', 'There is no clinician between the output and the person acting on it', 'It is exempt from data protection rules'], correct: 2 },
  ],
};

export default hcM1;
