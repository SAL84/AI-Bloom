import type { CourseModule } from '../../types/course';

const hcM3: CourseModule = {
  id: 'hc-m3',
  title: 'Evidence, Validation, and Bias',
  icon: 'layers',
  summary: 'Reading an AI study critically, why AUC is not clinical utility, documented dataset bias in health, local validation as a requirement, and monitoring for drift.',
  lessons: [
    {
      id: 'hc3l1',
      diagram: 'ClinicalEvidenceLadder',
      title: 'How to Read an AI Study Critically',
      slides: [
        {
          heading: 'Retrospective vs Prospective',
          body: 'Most published healthcare AI evidence is retrospective: the model is run over data already collected, with outcomes already known. This is cheap, fast, and systematically optimistic. Retrospective datasets are cleaned, complete, and often assembled with the study question in mind; cases with missing data or ambiguous labels tend to be excluded, removing exactly the cases that are hard in practice. Prospective evaluation runs the model on patients as they present, in real time, on real data pipelines, with real missingness. Performance almost always drops. The drop is not a scandal — it is the difference between a controlled measurement and reality. A tool with only retrospective evidence has not yet been tested in the condition it will be used in.',
          bullets: [
            'Retrospective data is cleaned and curated in ways that remove the hardest cases',
            'Prospective evaluation exposes real missingness, timing, and pipeline behaviour',
            'Expect performance to drop prospectively — the question is by how much, and whether anyone measured',
            'Retrospective-only evidence means the tool has not been tested in its operating condition',
          ],
        },
        {
          heading: 'Internal vs External Validation',
          body: 'Internal validation holds out part of the same dataset for testing. It guards against one specific error — memorising the training examples — and nothing else. Because the held-out data shares the same sites, equipment, populations, coding conventions, and label definitions, it cannot detect any of the shifts that break models in deployment. External validation uses data from different institutions, ideally different regions and health systems, collected independently. It is the only design that tests generalisation. When you see impressive numbers, the first question is which kind of validation produced them. Internal-only results, however strong, tell you the model learned the dataset — a necessary condition and a very weak one.',
          bullets: [
            'Internal validation only rules out memorising the training set',
            'Shared sites, equipment, coding, and label definitions mean shared blind spots',
            'External validation across independent institutions is the only real test of generalisation',
            'Strong internal-only numbers are a necessary but very weak result',
          ],
        },
        {
          heading: 'Design Details That Quietly Inflate Results',
          body: 'Several recurring design choices flatter results without being dishonest. Case-control assembly — collecting clear positives and clear negatives — removes the ambiguous middle where clinical difficulty lives and inflates apparent discrimination. Data leakage, such as multiple studies from the same patient split across training and test sets, lets the model recognise the patient rather than the pathology. Labels derived from the very clinicians the model is compared against build in circularity. Unclear handling of missing data can encode the fact that a test was ordered, which is itself informative. Reporting guidelines specifically for AI in health now exist, as extensions of established clinical study and prediction-model standards; checking whether a study follows one is a fast quality filter.',
          bullets: [
            'Case-control assembly removes the ambiguous cases that make the task hard',
            'Patient-level leakage across splits lets the model recognise people, not disease',
            'Labels drawn from the comparator clinicians build circularity into the result',
            'AI-specific reporting guidelines exist — whether a study follows one is a quick quality signal',
          ],
        },
      ],
    },
    {
      id: 'hc3l2',
      title: 'AUC Is Not Clinical Utility',
      slides: [
        {
          heading: 'What AUC Actually Measures',
          body: 'Area under the ROC curve is the most quoted metric in healthcare AI and one of the least informative on its own. It expresses a ranking property: given one patient with the condition and one without, how often does the model score the first higher? That is genuinely useful for comparing models, and it is threshold-independent, which is why researchers like it. But it says nothing about what happens at the threshold you will actually use, nothing about whether the predicted probabilities are meaningful, nothing about the relative cost of the two error types, and nothing about whether the prediction changes anyone\'s management. A high value is compatible with a clinically useless tool.',
          bullets: [
            'AUC is a ranking property, aggregated across every possible threshold',
            'It says nothing about behaviour at the threshold you will deploy',
            'It carries no information about the relative cost of false positives and false negatives',
            'High AUC and no clinical utility coexist comfortably',
          ],
        },
        {
          heading: 'Calibration: Do the Probabilities Mean Anything?',
          body: 'A model can rank patients correctly while producing probabilities that are systematically wrong — saying thirty per cent when the real rate in that group is far higher or lower. Ranking is unaffected; clinical interpretation is destroyed, because clinicians and pathways treat a stated probability as a quantity. Calibration measures whether predicted probabilities match observed frequencies, and it is reported far less often than discrimination. It also degrades faster after deployment, because it depends on the outcome rate in the population, which shifts. If a tool presents numerical risk to clinicians or patients, calibration is not a technical footnote — it is a precondition for the number being usable at all.',
          bullets: [
            'Discrimination and calibration are independent — good ranking does not imply meaningful probabilities',
            'Calibration is reported far less often than AUC and degrades faster after deployment',
            'Any tool that shows a numerical risk to a human needs calibration evidence',
          ],
        },
        {
          heading: 'The Missing Comparator',
          body: 'The most consequential omission in AI studies is what the model was compared against. Against nothing is not a comparison. Against a simple baseline — a handful of routine variables, or an existing clinical score already in use — is the comparison that matters, and it is frequently skipped. A complex model that barely improves on an established score carries all the cost, opacity, maintenance, and regulatory burden of AI for a marginal gain. Similarly, comparison against unaided clinicians in artificial conditions, without access to history or priors, systematically flatters the model. Ask what the alternative is, whether that alternative was implemented competently, and what the improvement would mean in practice.',
          bullets: [
            'Ask what the comparator was: nothing, a simple baseline, an existing score, or current practice',
            'A marginal gain over an existing score rarely justifies the added cost and opacity',
            'Clinicians evaluated without history, priors, or context are an unrealistically weak comparator',
            'Translate any claimed improvement into what it would change in practice',
          ],
        },
      ],
    },
    {
      id: 'hc3l3',
      title: 'Dataset Bias and Documented Harms',
      slides: [
        {
          heading: 'Health Data Records Access, Not Just Biology',
          body: 'Clinical datasets are records of who reached care, what was tested, what was coded, and how it was documented. All of those are shaped by access, insurance, geography, language, clinician behaviour, and historical inequity. A model trained on that data learns those patterns as faithfully as it learns physiology, because it cannot distinguish between them. This is why bias in health AI is not primarily a question of intent or of a badly chosen algorithm. It is a structural property of learning from records generated by a system that already treats people differently. Assuming a dataset is neutral because it is clinical is the mistake that produces the documented harms.',
          bullets: [
            'Clinical data encodes access, testing patterns, coding practice, and documentation behaviour',
            'A model cannot separate a pattern of disease from a pattern of unequal care',
            'Bias here is structural, not a matter of intent or algorithm choice',
          ],
        },
        {
          heading: 'Proxy Variables: The Cost-as-Need Case',
          body: 'The most instructive documented case in health AI concerns a widely used US care-management algorithm that predicted future healthcare costs as a stand-in for future healthcare need, then used that prediction to select patients for extra support. The logic seems reasonable: sicker patients cost more. But less money is historically spent on Black patients at equivalent levels of illness, for reasons of access and structural inequity. The model learned the spending pattern accurately, and in doing so systematically underestimated need among Black patients, directing support away from people who were equally or more unwell. Nothing about the model was technically wrong. The proxy was wrong, and the harm ran at population scale before anyone examined it.',
          bullets: [
            'Cost was used as a proxy for need; historical spending is not equal across groups at equal illness',
            'The model learned the spending pattern correctly and produced inequitable allocation as a result',
            'Interrogate every proxy: what was actually measured, and what was it standing in for?',
            'This harm was invisible in standard performance metrics — it required a fairness-specific audit',
          ],
        },
        {
          heading: 'Measurement, Devices, and Labels',
          body: 'Bias also enters through the instruments. Optical measurement devices have documented accuracy differences by skin pigmentation, meaning the inputs a model learns from are themselves systematically less accurate for some patients; a model trained on those readings inherits the discrepancy and can compound it. Dermatology image datasets have long been noted as skewed towards lighter skin, limiting what models learn about presentations on darker skin. Label bias is subtler still: if the label is "was diagnosed" rather than "had the condition", the model learns historical diagnostic patterns including under-diagnosis in specific groups, and reproduces them confidently. In each case the model is faithfully reproducing a flaw upstream of itself.',
          bullets: [
            'Device measurement accuracy can vary by skin pigmentation — biased inputs produce biased models',
            'Skewed image datasets limit what a model learns about presentations in underrepresented groups',
            'Labels record what was diagnosed, not what was present — under-diagnosis is learned and reproduced',
            'The model is usually faithful to the data; the defect sits upstream',
          ],
        },
        {
          heading: 'What to Actually Do About It',
          body: 'Fairness cannot be established from an aggregate metric, so the minimum practical step is to require performance disaggregated by the groups that matter in your population, and to treat the absence of that breakdown as a finding rather than a gap in the paperwork. Beyond that: interrogate what the outcome variable really represents and whether it is a proxy; check whether the development population resembles yours; ask how missing data was handled, since missingness itself is often patterned by group; and ensure the deployment includes a mechanism to detect differential impact after go-live, because the harms above were all discovered late by people who went looking.',
          bullets: [
            'Require subgroup performance; treat its absence as evidence, not an administrative omission',
            'Interrogate the outcome variable — is it the thing you care about, or a proxy for it?',
            'Missingness is patterned by group and can carry the bias by itself',
            'Build differential-impact monitoring into deployment; these harms are found by looking',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Clinician',
          body: 'You do not need to audit a model to spot the risk. Ask what the tool was trained to predict and on whom. If the answer is a proxy — cost, utilisation, prior diagnosis — rather than the clinical state you care about, treat its output for underserved patients with particular caution.',
          bullets: [
            'Ask what the outcome variable is: the condition itself, or a proxy such as cost or prior diagnosis',
            'Ask whether performance was reported separately for groups resembling your patients',
            'If a tool consistently behaves oddly for a particular group, that observation is data — report it',
          ],
        },
        {
          role: 'security-se',
          label: 'Privacy and Compliance',
          body: 'Fairness monitoring and data minimisation pull against each other: detecting differential impact requires holding the demographic attributes you would otherwise avoid processing. Resolve this deliberately and document it, rather than letting it resolve itself by default into no monitoring at all.',
          bullets: [
            'Monitoring for differential impact needs demographic data — establish the lawful basis and access controls up front',
            'Removing sensitive attributes does not remove bias; correlated proxies remain in the data',
            'Record fairness assessments as part of the audit trail — they are increasingly expected evidence, not optional analysis',
          ],
        },
        {
          role: 'developer',
          label: 'Health-Tech Builder',
          body: 'Bias work belongs in the pipeline, not in a pre-launch review. Choice of outcome variable is the highest-leverage decision you will make and is usually settled early, informally, on the basis of what data was available.',
          bullets: [
            'Interrogate the label first: available is not the same as correct, and proxies embed inequity permanently',
            'Report disaggregated performance by default in every internal evaluation, not on request',
            'Track missingness patterns by subgroup — imputation can silently encode group membership',
            'Document population composition and known gaps so deploying institutions can assess fit',
          ],
        },
        {
          role: 'consultant',
          label: 'Adoption Adviser',
          body: 'Make disaggregated performance a procurement requirement rather than a due-diligence question. A vendor who cannot supply it either has not measured it or has and would rather not share — both are decision-relevant.',
          bullets: [
            'Put subgroup performance reporting into procurement criteria, with named groups relevant to the local population',
            'Require the development population composition and compare it to the institution\'s own case mix',
            'Specify post-deployment differential-impact monitoring, with an owner, in the contract',
            'Ensure the governance committee can suspend a tool on fairness grounds, not only on accuracy grounds',
          ],
        },
      ],
    },
    {
      id: 'hc3l4',
      title: 'Local Validation Is a Requirement',
      slides: [
        {
          heading: 'Why External Evidence Is Not Enough',
          body: 'Everything covered so far converges here. Operating points depend on prevalence, which is local. Acquisition signatures depend on equipment, which is local. Population characteristics, case mix, referral patterns, coding conventions, documentation habits, and data completeness are all local. A model validated elsewhere, however well, has demonstrated that it can work — not that it works here. Local validation is the step that converts a general capability claim into institution-specific evidence, and it is the step most often skipped under time pressure, precisely because external evidence looks reassuring. Treating it as a compliance formality rather than the load-bearing evidence for your deployment is the most common serious mistake in healthcare AI adoption.',
          bullets: [
            'Prevalence, equipment, case mix, coding, and data completeness are all local variables',
            'External evidence shows the model can work, not that it works in your setting',
            'Local validation is the load-bearing evidence for your deployment, not a formality',
          ],
        },
        {
          heading: 'What It Involves in Practice',
          body: 'A workable local validation needs a representative sample of your own cases with reliable reference labels, evaluation against a defined comparator that reflects current practice, performance reported by relevant subgroup rather than in aggregate, and an assessment of how the tool behaves on the messy inputs your systems actually produce — missing fields, unusual formats, out-of-scope cases. Silent or shadow mode is often the practical route: the tool runs on live data and its outputs are recorded but not shown to clinicians, so you observe real-world behaviour without exposing patients to it. This costs time and clinical effort. Institutions that treat that cost as part of the purchase price make better decisions than those that treat it as overhead.',
          bullets: [
            'Representative local sample, reliable reference labels, and a comparator reflecting current practice',
            'Report by subgroup, and include the messy and out-of-scope inputs your systems really produce',
            'Silent or shadow mode observes live behaviour without exposing patients to the output',
            'Budget validation effort as part of the acquisition cost, not as overhead',
          ],
        },
        {
          heading: 'Pre-Commit to the Stop Rule',
          body: 'Decide what result would mean you do not proceed, and write it down before the data arrives. This is the single highest-value governance step available, and it is cheap. Without a pre-specified rule, disappointing results get reinterpreted: the sample was unusual, the comparator was unfair, performance will improve with tuning, the contract is already signed. With a rule agreed in advance by people who were not selling the tool, a negative result is a decision rather than a negotiation. The same applies after go-live: define in advance what level of degradation triggers suspension, and who has the authority to act on it without needing to reconvene a committee.',
          bullets: [
            'Write the stop criteria before results exist — afterwards, they become negotiable',
            'Agree them with people who have no stake in the tool being adopted',
            'Define the post-deployment degradation threshold that triggers suspension, and who may act',
            'A negative validation result is a successful validation, not a failed project',
          ],
        },
      ],
    },
    {
      id: 'hc3l5',
      title: 'Drift and Monitoring After Go-Live',
      slides: [
        {
          heading: 'Why Performance Decays',
          body: 'Model performance is not a fixed property; it is a relationship between a model and a world that keeps moving. Patient populations shift with demographics and referral changes. Clinical practice changes — new guidelines, new tests, new treatments. Upstream systems change: a record system upgrade alters field semantics, a scanner is replaced, a coding convention is updated, a form is redesigned. Disease patterns themselves change. Any of these can degrade a model without a single line of its code changing, and often without anyone connecting the change to the tool. A model deployed and left alone is not stable; it is unmonitored, and the difference only becomes visible when something goes wrong.',
          bullets: [
            'Populations, practice, upstream systems, and disease patterns all move underneath a static model',
            'A record system upgrade or scanner replacement can degrade a model with no code change',
            'Deployed and unmonitored is not the same as stable',
          ],
        },
        {
          heading: 'What to Monitor',
          body: 'Monitoring works in layers. Input monitoring watches the data arriving — distributions, missingness rates, new codes, format changes — and is the earliest warning available, because it fires before outputs are affected. Output monitoring watches the model\'s own behaviour: flag rates, score distributions, and how often clinicians override it. Outcome monitoring, the hardest and most valuable, compares predictions against what actually happened, and requires an outcome ascertainment process that may not exist yet. All three should be broken down by subgroup, since aggregate stability can conceal degradation concentrated in one group. Rising override rates in particular are an informative early signal that clinicians have noticed something the metrics have not.',
          bullets: [
            'Input monitoring fires earliest — distributions, missingness, new codes, format changes',
            'Output monitoring tracks flag rates, score distributions, and clinician override behaviour',
            'Outcome monitoring is hardest and most valuable, and needs an ascertainment process',
            'Disaggregate all three — aggregate stability hides subgroup-specific decay',
          ],
        },
        {
          heading: 'The Feedback Loop Problem',
          body: 'Monitoring a deployed clinical model has a structural complication: once the model changes behaviour, it corrupts the data used to evaluate it. If a risk score prompts earlier intervention and the intervention works, the predicted outcomes stop occurring and the model looks less accurate — the intervention succeeded and the metric got worse. Conversely, if flagged patients receive more attention and therefore more testing, more findings will be confirmed in flagged patients regardless of model quality, making it look better than it is. Both effects are real and neither is easy to disentangle. It means monitoring must be interpreted with knowledge of what actions the output triggers, and that periodic independent evaluation remains necessary despite continuous monitoring.',
          bullets: [
            'Successful intervention removes the outcomes the model predicted, degrading apparent accuracy',
            'Extra attention to flagged patients confirms more findings among them, inflating apparent accuracy',
            'Monitoring must be read alongside the actions the output triggers',
            'Continuous monitoring does not remove the need for periodic independent evaluation',
          ],
        },
      ],
    },
  ],
  quiz: [
    { q: 'A study reports strong results using internal validation only. What has it demonstrated?', options: ['That the model generalises across institutions', 'That the model is ready for prospective deployment', 'That the model will transfer to different scanners', 'That the model did not simply memorise its training data — a necessary but weak result'], correct: 3 },
    { q: 'Why do models typically perform worse in prospective evaluation than in retrospective studies?', options: ['Real-time data is messier, incomplete, and includes the difficult cases retrospective curation removes', 'Prospective studies use weaker statistical methods', 'Models degrade physically over time', 'Clinicians deliberately introduce errors'], correct: 0 },
    { q: 'A model has high AUC but poor calibration. What is the practical consequence?', options: ['It cannot rank patients by risk', 'It will run more slowly in production', 'Its stated probabilities do not match real frequencies, so any number shown to a clinician misleads', 'It is unaffected — AUC is what matters'], correct: 2 },
    { q: 'The care-management algorithm that used cost as a proxy for need caused harm because:', options: ['The model was technically miscoded', 'Historical spending is lower for Black patients at equivalent illness, so predicted need was systematically understated', 'The training dataset was too small', 'It excluded cost data entirely'], correct: 1 },
    { q: 'A vendor reports a single aggregate accuracy figure and no subgroup breakdown. You should conclude:', options: ['Performance is equal across groups', 'Subgroup analysis is not applicable to this kind of model', 'The aggregate figure is sufficient if it is high enough', 'There is no evidence of equitable performance, and that absence is itself a finding'], correct: 3 },
    { q: 'Which is the strongest reason local validation cannot be skipped when external evidence is strong?', options: ['Regulators require duplicate paperwork', 'External studies are usually fraudulent', 'Prevalence, equipment, case mix, and data conventions are local, and all of them change how the model behaves', 'Local data is always larger than external data'], correct: 2 },
    { q: 'Which monitoring layer typically gives the earliest warning of drift?', options: ['Input monitoring — distributions, missingness, and format changes shift before outputs are affected', 'Outcome monitoring, because it measures what matters most', 'Annual re-accreditation review', 'Clinician satisfaction surveys'], correct: 0 },
    { q: 'A deterioration model appears less accurate after deployment, while patient outcomes have improved. The most likely explanation is:', options: ['The model has been corrupted', 'A feedback loop — intervention prevented the outcomes the model predicted', 'The monitoring system is misconfigured', 'Clinicians stopped using the tool'], correct: 1 },
  ],
};

export default hcM3;
