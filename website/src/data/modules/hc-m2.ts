import type { CourseModule } from '../../types/course';

const hcM2: CourseModule = {
  id: 'hc-m2',
  title: 'Medical Imaging and Diagnostics',
  icon: 'brain',
  summary: 'What imaging AI genuinely does well, reader assistance versus autonomous reading, the sensitivity–specificity dial, distribution shift, and automation bias.',
  lessons: [
    {
      id: 'hc2l1',
      title: 'What Imaging AI Genuinely Does Well',
      slides: [
        {
          heading: 'Four Tasks, Not One Capability',
          body: 'Imaging is the most mature clinical zone for AI, but the maturity is task-specific. Detection: flagging the possible presence of a defined finding. Quantification: measuring something a human would measure more slowly and less reproducibly — volumes, dimensions, densities, counts. Prioritisation: reordering a worklist so studies likelier to contain a time-critical finding are read sooner. Workflow support: automating the tedious parts of study handling, such as protocol selection, image quality checks, or pre-population of structured reports. These have different evidence bases and different consequences when they fail. "AI reads scans" is not a claim anyone should evaluate; the task is always narrower.',
          bullets: [
            'Detection, quantification, prioritisation, and workflow support are separate tasks with separate evidence',
            'Quantification is often the most under-appreciated win: reproducible measurement, not judgement',
            'Prioritisation changes the order of reading rather than the reading itself',
            'Always ask which specific task, on which modality, for which finding',
          ],
        },
        {
          heading: 'Why Narrow Tasks Are Where It Works',
          body: 'Imaging AI performs best where the task is well defined, the input is standardised, the finding has a consistent visual signature, and large labelled datasets exist. That description fits a specific set of problems well and fits general interpretation badly. A radiologist reading a study integrates clinical history, prior imaging, the referral question, incidental findings across every organ in the field, and an assessment of image quality. A model trained to detect one finding does one of those things. This is why single-finding tools can be genuinely useful and simultaneously nowhere near replacing interpretation — they are not partial versions of the same job, they are a different, much smaller job.',
          bullets: [
            'Best case: well-defined finding, standardised acquisition, consistent visual signature, large labelled data',
            'A single-finding model does not do a scaled-down version of interpretation — it does a different task',
            'Incidental findings outside the target finding remain entirely the reader\'s responsibility',
          ],
        },
        {
          heading: 'What Follows for Evaluation',
          body: 'Because the task is narrow, the evaluation must be too. Ask which finding, on which modality, with which acquisition parameters, in which patient population, and against which reference standard the model was validated. Ask what the comparator was — an unaided reader, a reader with the tool, or nothing at all. Ask how the reference labels were produced, because a model validated against a single reader\'s labels inherits that reader\'s errors and cannot exceed them. And ask what happens to cases outside the intended finding, since a tool that is silent about everything else can still shape where attention goes. These questions are answerable by non-specialists and they filter out a great deal.',
          bullets: [
            'Which finding, which modality, which acquisition, which population, which reference standard',
            'Labels derived from a single reader cap the model at that reader\'s accuracy, including their mistakes',
            'The comparator matters more than the headline number — against nothing is not a comparison',
          ],
        },
      ],
    },
    {
      id: 'hc2l2',
      title: 'Reader Assistance vs Autonomous Reading',
      slides: [
        {
          heading: 'Three Deployment Modes',
          body: 'The same model can be deployed in fundamentally different ways, and the mode matters more than the model. As a concurrent aid, output is shown while the reader works, which risks anchoring their judgement. As a second reader, the reader forms an independent opinion first and the model output is revealed afterwards, with disagreements resolved by a defined process — this preserves independence at the cost of workflow friction. As an autonomous reader, the model issues a result without a human reading the study at all. These are not points on a continuum of trust; they are different systems with different failure modes, evidence requirements, and regulatory positions.',
          bullets: [
            'Concurrent aid: fastest, but the model output can anchor the reader before they have formed a view',
            'Second reader: preserves independent judgement, adds workflow cost, needs a defined disagreement process',
            'Autonomous: no human reads the study — an entirely different evidence and liability proposition',
          ],
        },
        {
          heading: 'Human Plus Model Is Not Automatically Better',
          body: 'It is tempting to assume that combining a competent reader with a competent model yields something better than either. Reader studies do not consistently support this. Depending on how output is presented and how the reader interprets it, combination can improve sensitivity while lowering specificity, help less experienced readers while adding little for experienced ones, or degrade performance when readers defer to incorrect model output on cases they would have called correctly. The combination is an empirical question about a specific interface, a specific model, and a specific reader population. It cannot be inferred from standalone model metrics, and standalone metrics are what vendors usually publish.',
          bullets: [
            'Combined performance is not derivable from standalone model performance — it must be measured directly',
            'Gains often differ by reader experience level, so a single average conceals the effect',
            'Sensitivity gains frequently come with specificity losses, and the tradeoff has real downstream cost',
          ],
        },
        {
          heading: 'Where Autonomous Reading Is Even Discussed',
          body: 'Autonomous operation is considered only in tightly constrained circumstances: a narrow, well-characterised task; a controlled acquisition process; a population resembling the validation population; a defined escalation path for anything outside the operating envelope; and continuous monitoring with the ability to revert to human reading. Even then it is a jurisdiction-specific regulatory question tied to a specific intended-use statement, not a general capability claim. The relevant point for most readers is structural: extending a tool validated as an aid into autonomous use is not a configuration change or an efficiency decision. It is a new intended use requiring new evidence and, in most jurisdictions, new regulatory standing.',
          bullets: [
            'Narrow task, controlled acquisition, matched population, defined escalation, continuous monitoring',
            'Autonomy is tied to a specific intended-use statement in a specific jurisdiction',
            'Moving from aid to autonomous use is a new intended use, not a settings change',
            'There must always be a documented route back to human reading',
          ],
        },
      ],
    },
    {
      id: 'hc2l3',
      title: 'Sensitivity, Specificity, and Population',
      slides: [
        {
          heading: 'One Dial, Two Costs',
          body: 'Every detection model has an internal score, and someone chooses where to cut it. Move the cut one way and the model catches more true cases while also flagging more that are not there. Move it the other way and false alarms fall while genuine cases are missed. There is no setting that improves both; there is only a choice about which error you prefer, and that choice belongs to the clinical context, not the model. The costs are asymmetric and specific: a missed finding of one kind is catastrophic, while a false alarm of another kind means an unnecessary procedure, anxiety, and cost. A single headline accuracy figure hides this choice entirely, which is exactly why it gets quoted.',
          bullets: [
            'Sensitivity and specificity trade against each other — no threshold improves both',
            'The right balance is a clinical and contextual judgement, not a technical default',
            'Headline accuracy conceals which error the vendor chose to minimise',
          ],
        },
        {
          heading: 'Prevalence Changes What a Positive Means',
          body: 'Sensitivity and specificity are properties of the model. What a clinician cares about is different: given a positive flag, how likely is the finding actually present? That depends on how common the condition is in the population being scanned. Run the same model in a specialist referral setting where the condition is common, and most positives are real. Run it in general screening where the condition is rare, and the same model produces far more false positives than true ones, even with unchanged sensitivity and specificity. Nothing about the model has changed. This is the single most common misreading of imaging AI performance claims, and it fully explains why models look strong in development and disappointing in screening.',
          bullets: [
            'Sensitivity and specificity are model properties; predictive value depends on prevalence in your population',
            'In low-prevalence settings, false positives can outnumber true positives with no change to the model',
            'Always ask what the prevalence was in the validation set versus your intended setting',
          ],
        },
        {
          heading: 'Tuned for Them, Not for You',
          body: 'Follow the logic through and the consequence is uncomfortable. A model with an operating point chosen for one setting is, in a real sense, a different tool in another. Age distribution, comorbidity mix, referral pathways, scanning indications, and local practice all shift prevalence and case difficulty. A tool developed on referral-centre data will encounter easier, rarer, and differently distributed cases in community practice. The threshold that made it useful there may make it a nuisance here, or unsafe. This is not a defect to be fixed by a better model; it is an intrinsic property of thresholded prediction, and it is why local validation appears in every serious deployment framework.',
          bullets: [
            'An operating point tuned for one population is a different tool in another',
            'Case mix, referral pathway, and indication all shift prevalence and difficulty',
            'This is intrinsic to thresholded prediction, not a bug a better model removes',
            'It is the core technical reason local validation is mandatory rather than optional',
          ],
        },
      ],
    },
    {
      id: 'hc2l4',
      diagram: 'DistributionShift',
      title: 'Distribution Shift: Scanners, Sites, and People',
      slides: [
        {
          heading: 'Acquisition Shift',
          body: 'Medical images are not neutral records; they are the product of a specific device, protocol, and set of settings. Manufacturer, model, generation, field strength, dose, reconstruction algorithm, slice thickness, contrast timing, and positioning conventions all leave systematic signatures in the pixels. A model trained on one site\'s equipment has learned those signatures along with the pathology. Move it to a site with different scanners or protocols and performance can degrade without any visible change in image quality to a human reader. This is why external validation on different equipment is a distinct requirement from validation on more patients: more data from the same scanners does not test the thing that breaks.',
          bullets: [
            'Device, protocol, reconstruction, and positioning conventions leave systematic signatures in the data',
            'Degradation can occur with no perceptible image quality change to a human reader',
            'More data from the same equipment does not substitute for validation on different equipment',
          ],
        },
        {
          heading: 'Population Shift',
          body: 'The second shift is in who is being imaged. Training populations differ from deployment populations in age, sex, ethnicity, body habitus, disease severity, comorbidity burden, and the reason the study was ordered. Each of these can change how a finding appears or how often it occurs. Underrepresentation in training data means the model has had less opportunity to learn the appearance of the finding in that group, and performance is typically worse — but reported average performance will not reveal it unless results are broken down by subgroup. If a validation report gives you one number and no subgroup breakdown, you cannot tell whether the tool works equally for your patients, and you should say so.',
          bullets: [
            'Age, sex, ethnicity, habitus, severity, comorbidity, and indication all shift between development and deployment',
            'Underrepresented groups typically see worse performance, hidden inside the average',
            'No subgroup breakdown means no evidence of equitable performance — treat that as a finding',
          ],
        },
        {
          heading: 'Shortcut Learning',
          body: 'The most instructive failure mode is when a model achieves strong performance by learning something correlated with the diagnosis rather than the diagnosis itself. Documented examples across medical imaging research include models keying on scanner or site markers, on burned-in text and laterality tokens, on the presence of equipment such as drains or lines that indicate a patient is already being treated, or on positioning differences between how sick and well patients are imaged. Each shortcut works beautifully in the dataset that contains it and fails the moment the correlation breaks. It is also why a model can be highly accurate and clinically worthless at the same time, and why performance dropping sharply at a new site is a signal to investigate rather than to retrain blindly.',
          bullets: [
            'Models can learn site markers, burned-in text, visible equipment, or positioning instead of pathology',
            'Shortcuts produce excellent in-dataset performance and collapse when the correlation breaks',
            'A sharp drop at a new site is a signal to investigate what the model was actually using',
            'High accuracy and clinical worthlessness are entirely compatible',
          ],
        },
      ],
    },
    {
      id: 'hc2l5',
      diagram: 'AutomationBias',
      title: 'Automation Bias and Deployment Design',
      slides: [
        {
          heading: 'What Automation Bias Is',
          body: 'Automation bias is the well-documented human tendency to over-trust automated output: accepting a recommendation that is wrong, or failing to notice something the automation did not flag. It is not carelessness and it is not confined to inexperienced staff. It arises from how attention allocates under time pressure when a system is usually right. Both directions cause harm. Commission: the reader accepts an incorrect flag and pursues it, generating unnecessary follow-up. Omission: the reader relaxes scrutiny because the system said nothing, and misses a finding they would otherwise have caught. The omission direction is more dangerous because there is no artefact to review afterwards — the absent flag leaves no trace.',
          bullets: [
            'Over-trust in automation is a documented human factors effect, not a discipline failure',
            'Commission errors: accepting a wrong flag and acting on it',
            'Omission errors: reduced scrutiny where the system was silent — no trace is left behind',
            'A system that is usually right is precisely the condition that induces the bias',
          ],
        },
        {
          heading: 'The Reliability Paradox',
          body: 'Here is the uncomfortable dynamic: the better a tool performs, the more strongly it induces deference, and the less likely its rare errors are to be caught. A tool that is wrong often is annoying but keeps readers alert. A tool that is right almost always trains readers to stop checking, so its occasional failures pass through unexamined. This means improvements in model accuracy do not translate linearly into improvements in system safety, and beyond a point the human oversight that the safety case depends on may be quietly eroding. Any deployment whose safety argument rests on "a clinician reviews every output" needs to demonstrate that the review is still happening meaningfully, not just formally.',
          bullets: [
            'Higher model accuracy increases deference and reduces the chance rare errors are caught',
            'Model accuracy gains do not map linearly onto system safety gains',
            'If your safety case is "a clinician reviews it", you must evidence that review is still substantive',
          ],
        },
        {
          heading: 'Design Choices That Mitigate It',
          body: 'Mitigation is a design and monitoring problem rather than a training problem. Sequencing matters: requiring an independent read before the model output is revealed preserves judgement, at a cost in time. Presentation matters: expressing uncertainty, showing the evidence region, and avoiding definitive language reduce anchoring. Scope communication matters: making clear what the tool does not look for prevents false reassurance. And monitoring matters: tracking agreement rates, override rates, and how those change over time detects deference before it causes harm. None of these eliminate automation bias. They keep it visible and bounded, which is the realistic goal.',
          bullets: [
            'Independent read before revealing model output preserves judgement, at a workflow cost',
            'Communicate uncertainty and show supporting evidence rather than issuing verdicts',
            'State explicitly what the tool does not assess, to prevent false reassurance',
            'Monitor override and agreement rates over time — rising deference is measurable',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'A vendor says their product "reads chest imaging with AI". What is the first question to ask?', options: ['How large is the neural network?', 'Which specific finding, on which modality, validated in which population?', 'How fast does it process a study?', 'Which cloud provider hosts it?'], correct: 1 },
    { q: 'A model with fixed sensitivity and specificity is moved from a specialist referral centre to general screening. What changes?', options: ['Its sensitivity falls automatically', 'Its specificity rises automatically', 'Nothing changes, because those metrics are fixed', 'The proportion of positive flags that are true findings falls, because prevalence is lower'], correct: 3 },
    { q: 'Which deployment mode best preserves the reader\'s independent judgement?', options: ['Concurrent display while the reader works', 'Autonomous reading with periodic audit', 'Second-reader mode, with output revealed only after an independent read', 'Displaying the model output before the study opens'], correct: 2 },
    { q: 'A model performs excellently at its development site and poorly at a new hospital, with no visible image quality difference. The most likely explanation is:', options: ['Distribution shift — different equipment, protocols, or patient mix, possibly with shortcut learning', 'The new hospital\'s radiologists are less skilled', 'The model needs more parameters', 'Network latency is affecting inference'], correct: 0 },
    { q: 'Why is the omission form of automation bias considered more dangerous than the commission form?', options: ['It occurs more frequently in every study', 'It only affects inexperienced readers', 'It is easier for auditors to detect', 'An absent flag leaves no artefact to review, so the missed finding leaves no trace'], correct: 3 },
    { q: 'A vendor publishes strong standalone model metrics. What do they tell you about reader-plus-model performance?', options: ['Combined performance will be at least as good as the model alone', 'Very little — combined performance must be measured directly in a reader study', 'Combined performance will equal the average of reader and model', 'Nothing can ever be inferred from any metric'], correct: 1 },
    { q: 'Extending a tool validated as a reader aid into autonomous reading is best described as:', options: ['A new intended use requiring new evidence and regulatory standing', 'A configuration change once local accuracy is confirmed', 'An efficiency decision for the clinical lead', 'Equivalent to raising the confidence threshold'], correct: 0 },
  ],
};

export default hcM2;
