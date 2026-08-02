import type { CourseModule } from '../../types/course';

const lgM1: CourseModule = {
  id: 'lg-m1',
  title: 'Where AI Fits in Legal Work',
  icon: 'target',
  summary: 'Start with the disclaimer that matters, then an honest map of which legal tasks AI genuinely helps with, which need supervision, and which are not delegable at all.',
  lessons: [
    {
      id: 'lg1l1',
      diagram: 'LegalScopeSafety',
      title: 'Read This First',
      slides: [
        {
          heading: 'This Course Is Educational Orientation, Not Legal Advice',
          body: 'Before anything else: this course is educational orientation about how AI systems behave and where they fit in legal work. It is not legal advice, it is not ethics advice, and it does not create any advisory relationship. Professional-responsibility obligations vary by jurisdiction and by bar — the duties described here are framed as common principles, not as the rules that govern you. Rule numbers, disclosure requirements, and permitted practices genuinely differ between jurisdictions and change over time. Most importantly: you remain personally responsible for every piece of work product you sign, file, or send, regardless of which tool produced the draft. No AI system, no vendor assurance, and no course — including this one — transfers that responsibility away from you.',
          bullets: [
            'Educational orientation only — nothing here is legal advice or ethics advice for your matter or your jurisdiction',
            'Ethics duties are described as common principles; the binding rules, numbers, and interpretations are your bar\'s, not this course\'s',
            'You own the output: signing, filing, or sending AI-assisted work makes it your work in every sense that matters',
            'Verify anything consequential against your own jurisdiction\'s rules and your firm\'s policy before acting on it',
          ],
        },
        {
          heading: 'Why the Framing Has to Be This Blunt',
          body: 'Most professional AI training is written as if the main risk is missing out. In legal work the demonstrated risk runs the other way. Practitioners have been sanctioned, publicly named, and referred to disciplinary bodies for filing documents containing citations that a model invented. Courts in multiple jurisdictions have responded with standing orders requiring disclosure or certification of AI use. This is not a hypothetical harm being raised for balance — it is the single best-documented consequence of generative AI in professional practice to date. That pattern is the core teaching material of this course, not a footnote at the end. If you take one thing away, take this: the tools are genuinely useful, and the failure mode is genuinely career-affecting.',
          bullets: [
            'The documented harm in this profession is real and ongoing — treat it as the starting point, not the caveat',
            'Courts have responded with disclosure and certification requirements; those requirements vary and are still evolving',
            'Usefulness and danger are not in tension here — the same fluency that drafts well also fabricates convincingly',
            'Where this course describes incidents, it describes the pattern, not invented names, dates, or figures',
          ],
        },
        {
          heading: 'How to Read the Rest of This Course',
          body: 'The four modules move from orientation to practice to the hardest problem to governance. Module 1 maps which tasks AI suits. Module 2 covers contracts and document review, where the technology is most mature and the precedent for algorithmic assistance is longest-established. Module 3 is the one that matters most: research, citation, and hallucination. Module 4 covers ethics, confidentiality, and building firm-level governance. Throughout, capability claims are stated conservatively and failure modes are stated plainly. Where a duty is described, assume the phrasing is a common principle and the specifics are yours to check. Where a tool category is described, note that no commercial product is endorsed here — vendor claims are for you to diligence.',
          bullets: [
            'Four modules: task fit, contracts and review, research and citation, ethics and governance',
            'Module 3 is the highest-stakes material — do not skip it because research feels routine',
            'No commercial legal-AI product is named as reliable or endorsed anywhere in this course',
            'Treat every capability claim as something to test on your own matters before relying on it',
          ],
        },
      ],
    },
    {
      id: 'lg1l2',
      diagram: 'LegalTaskSuitability',
      title: 'The Honest Map of Task Suitability',
      slides: [
        {
          heading: 'Strong: Summarisation and First-Draft Generation',
          body: 'Language models are genuinely good at compressing text you already have and at producing a structured first draft from instructions you supply. Summarising a long deposition transcript, condensing a client email chain into a chronology, turning bullet instructions into a first-pass letter, producing a plain-English explanation of a clause for a client — these play to what the technology actually does. The common thread is that the source material is in front of the model and the human reviewer already knows roughly what the answer should look like. That second condition is what makes these tasks safe: an error is visible to the reviewer because the reviewer has the ground truth. Where you cannot check the output against something you already hold, the task has quietly moved into a different risk category.',
          bullets: [
            'Best fit: the source text is supplied by you and the reviewer can spot an error on sight',
            'Summaries still drop or distort emphasis — read the summary against the source before it goes anywhere external',
            'First drafts save typing, not thinking; the structure is a starting point, not a position',
            'If you could not detect a wrong answer, the task is not in this category however routine it feels',
          ],
        },
        {
          heading: 'Strong With Supervision: Document Review and Issue Spotting',
          body: 'Reviewing a large document set for relevance, flagging clauses that deviate from a playbook, spotting missing provisions, surfacing candidate issues in a contract — these work well as a first pass that narrows human attention. The critical word is first pass. The model produces recall and prioritisation, not a conclusion. Two failure directions matter and they are not symmetric: false positives cost review time and are self-correcting, while false negatives are silent and may never be discovered. A system that flags eighty per cent of the risky clauses looks excellent in a demo and is dangerous if anyone treats the unflagged remainder as cleared. Supervision here means sampling what the tool did not flag, not only checking what it did.',
          bullets: [
            'The output is prioritisation and recall, not a legal conclusion — treat it as triage',
            'False negatives are the dangerous direction: silent, unmeasured, and easy to mistake for a clean set',
            'Sample the unflagged material deliberately; reviewing only the flags measures nothing about coverage',
            'Demo performance on clean documents rarely survives contact with real, messy production sets',
          ],
        },
        {
          heading: 'Dangerous Without Verification: Research and Citation',
          body: 'Legal research is where generative models are least trustworthy and most convincing. A model asked for authority on a point will produce authority-shaped text: a case name in the right format, a plausible court, a confident parenthetical, a holding that fits the argument. Any or all of it may be fabricated, and none of it looks fabricated. Retrieval-backed research tools that search a real corpus reduce this substantially, but they do not remove it — the model can still misdescribe a real case, cite a real case for a proposition it does not support, or surface authority that has since been overruled. Module 3 covers this in full. For now, the rule is simply that no citation reaches a document until a human has opened the actual source.',
          bullets: [
            'Fabricated authority is formatted exactly like real authority — plausibility is not a signal here',
            'Retrieval-backed tools reduce the risk substantially but do not eliminate misdescription or superseded law',
            'A parenthetical that fits your argument suspiciously well is a prompt to verify, not to relax',
            'Nothing gets cited until someone has read the actual source document — no exceptions for time pressure',
          ],
        },
        {
          heading: 'Not Delegable: Advice, Judgement, and Strategy',
          body: 'Some work cannot move to a model regardless of how good the model gets, because the thing being produced is professional judgement exercised by a person who is accountable for it. Advising a client on whether to settle, deciding what to argue and what to concede, assessing a witness, weighing reputational and commercial factors against legal ones, choosing how candid to be with a tribunal — these are the practice of law, not text generation. A model can help you prepare: it can lay out considerations, stress-test an argument, or draft the memo that records your reasoning. What it cannot do is be the source of the judgement. Where a tool appears to offer conclusions rather than material, treat that appearance as a product-design choice and not as a capability.',
          bullets: [
            'Judgement, advice, and strategy stay with the accountable human — the model prepares, it does not decide',
            'Useful support role: surfacing considerations, stress-testing arguments, drafting the record of your reasoning',
            'A confident recommendation from a tool is a formatting choice, not evidence that the tool is competent to advise',
            'Unauthorised-practice and accountability questions arise fastest exactly where this line is blurred',
          ],
        },
      ],
    },
    {
      id: 'lg1l3',
      diagram: 'WhyLegalExposed',
      title: 'Why Legal Work Is Unusually Exposed',
      slides: [
        {
          heading: 'Fluency Is the Product, Not Accuracy',
          body: 'A language model generates text by repeatedly predicting a plausible next token. It has no separate store of verified facts and no internal mechanism that distinguishes recalling something from constructing something that fits. When the training data contains a real case, the model may reproduce it. When it does not, the model produces text with the same surface properties: correct citation format, plausible court, coherent holding. Nothing in the output signals which happened. In most domains a fabricated detail is caught because it reads oddly. Legal writing is unusually formulaic — that formulaic quality is exactly what a next-token predictor reproduces perfectly, so the fabrications inherit full surface credibility from the genre itself.',
          bullets: [
            'The model has no internal boundary between remembering and inventing — both are the same operation',
            'Legal citation format is highly regular, so fabricated citations are indistinguishable on their face',
            'Confidence in tone reflects the training distribution, not the model\'s certainty about the fact',
            'Fluency is what these systems optimise; accuracy is something you have to add from outside',
          ],
        },
        {
          heading: 'The Domain Amplifies the Failure',
          body: 'Several features of legal work compound the base risk. Authority is the currency: an argument rests on cited sources in a way that few other professional outputs do, so a fabrication lands directly in the load-bearing part of the document. Verification is costly and unevenly distributed, which creates pressure to skip it under deadline. The adversarial structure means an opponent is actively motivated to find your errors. And the audience is a tribunal with sanctioning power. Compare a fabricated statistic in an internal marketing memo — embarrassing, recoverable. The same error class in a filing engages duties of candour, invites sanctions, and becomes part of a public record that follows the practitioner.',
          bullets: [
            'Citations are load-bearing in legal argument — a fabrication lands in the structural part of the document',
            'The adversarial process guarantees someone is looking for exactly this class of error',
            'The audience holds sanctioning power and the record is usually public and permanent',
            'Deadline pressure attacks the verification step specifically, which is the only control that works',
          ],
        },
        {
          heading: 'Automation Bias Does the Rest',
          body: 'The technical failure only becomes a professional failure because of how people relate to confident machine output. Automation bias is the well-documented tendency to defer to a system\'s answer, and it strengthens when the output is fluent, when the reviewer is tired or rushed, and when the system has been right many times before. That last condition is the trap: a tool that is reliable on ninety-five per cent of tasks trains its user into exactly the deference that makes the remaining five per cent dangerous. Reliability and complacency grow together. This is why verification has to be a procedural requirement enforced by process rather than a judgement call made in the moment by someone who has stopped expecting errors.',
          bullets: [
            'Deference to confident output is a documented human pattern, not a personal failing to be willed away',
            'A mostly-reliable tool is more dangerous than an obviously unreliable one — it earns unearned trust',
            'Fatigue and deadline pressure are when the deference peaks and the checking stops',
            'Make verification a process step with an artefact, not a state of mind you rely on maintaining',
          ],
        },
      ],
    },
    {
      id: 'lg1l4',
      diagram: 'ReviewBurdenShift',
      title: 'The Review Burden AI Shifts, Not Removes',
      slides: [
        {
          heading: 'Work Moves From Production to Verification',
          body: 'The usual pitch is that AI removes work. What it reliably does is move work from producing text to checking text — and those two activities have very different properties. Production is predictable: a competent drafter knows roughly how long a first draft takes. Verification is not: checking a draft that is ninety per cent right takes far longer than the ten per cent would suggest, because you cannot know in advance which ten per cent is wrong, so you must examine all of it with equal attention. Verification is also cognitively harder to sustain. Reading for errors that are usually absent is a vigilance task, and human performance on vigilance tasks degrades quickly. The net time saving is real in many workflows, but it is smaller than the drafting time saved and it is unevenly distributed.',
          bullets: [
            'Drafting time falls; verification time rises — the net saving is real but routinely overstated',
            'A nearly-correct draft is expensive to check because the errors are unlocated',
            'Vigilance degrades with time on task; error-hunting is not the same skill as reviewing your own work',
            'Measure the whole loop when evaluating a tool, not the generation step in isolation',
          ],
        },
        {
          heading: 'Who Absorbs the Shifted Work',
          body: 'The review burden does not land evenly. Drafting work has historically been how junior practitioners learn — the slow production of a first draft builds the judgement needed to later review one. If juniors move straight to reviewing machine output, the training pipeline that produces competent reviewers is being consumed to fund present efficiency. Meanwhile senior practitioners find that reviewing plausible-but-unverified material is slower and less pleasant than reviewing a junior\'s work, because a junior\'s errors are patterned and a model\'s are not. Firms that adopt without redesigning supervision often discover both effects at once: partners doing more checking, and juniors developing the skills more slowly than the firm assumed.',
          bullets: [
            'Drafting is how judgement is built — removing it from juniors has a delayed but compounding cost',
            'Machine errors are unpatterned, so reviewing them is harder than reviewing a known colleague\'s work',
            'Supervision load tends to migrate upward unless the workflow is deliberately redesigned',
            'Plan explicitly for how juniors will still learn to draft, or accept a weaker bench in a few years',
          ],
        },
        {
          heading: 'Designing for the Burden Rather Than Denying It',
          body: 'Workflows that hold up are the ones that budget for verification instead of assuming it away. That means selecting tasks where checking is cheap relative to producing, preferring outputs that carry a traceable source so verification is a lookup rather than a reconstruction, and building the check into the process as a step with a named owner and a visible artefact. It also means being honest in fee and deadline conversations: if a matter is priced on the assumption that AI removed the work, the verification step is the thing that gets cut, and it is the only control that was doing anything. Adoption that ignores the burden does not eliminate it; it relocates it to whoever is least able to refuse.',
          bullets: [
            'Prefer tasks where checking is cheap relative to producing — that ratio is the real adoption criterion',
            'Traceable, source-linked output turns verification into a lookup instead of a reconstruction',
            'Give the verification step an owner and an artefact so it survives deadline pressure',
            'Pricing and deadlines that assume the work disappeared will quietly delete the only real control',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A colleague says an AI tool "cleared" a contract set because it flagged no unusual clauses. What is the main problem with that reading?',
      options: [
        'Flagging tools always over-flag, so the absence of flags is unusual',
        'The tool needs a larger context window to process contracts',
        'Contracts should be reviewed alphabetically to avoid ordering bias',
        'False negatives are silent — an unflagged set has not been reviewed, only unflagged',
      ],
      correct: 3,
    },
    {
      q: 'Which task sits in the "strong fit" category with the least verification overhead?',
      options: [
        'Identifying controlling authority on a novel point',
        'Advising a client whether to accept a settlement offer',
        'Summarising a transcript you already have in front of you',
        'Determining whether a cited case is still good law',
      ],
      correct: 2,
    },
    {
      q: 'Why is legal writing especially prone to convincing fabrication?',
      options: [
        'Legal databases are smaller than other professional corpora',
        'Models are trained mainly on litigation documents',
        'Its formulaic conventions are exactly what a next-token predictor reproduces perfectly',
        'Courts publish judgments too slowly for models to keep up',
      ],
      correct: 2,
    },
    {
      q: 'What best describes what AI does to the total work in a drafting task?',
      options: [
        'It shifts work from production to verification, which is harder to sustain and to estimate',
        'It removes the work entirely if the prompt is good enough',
        'It leaves the work identical but makes it faster to type',
        'It moves the work to the vendor under the service agreement',
      ],
      correct: 0,
    },
    {
      q: 'A tool has been accurate on a practitioner\'s last fifty tasks. What risk does that record create?',
      options: [
        'None — a strong track record is exactly what justifies reduced checking',
        'It increases automation bias, making the eventual error more likely to pass unchallenged',
        'It indicates the model has been fine-tuned on the practitioner\'s data',
        'It means the remaining tasks are statistically more likely to fail',
      ],
      correct: 1,
    },
    {
      q: 'Which statement about professional responsibility is stated correctly here?',
      options: [
        'Duties are uniform across jurisdictions, so one firm policy fits everywhere',
        'Using a vendor-certified tool transfers responsibility for the output to the vendor',
        'Disclosure of AI use is universally required in all courts',
        'Common principles recur across jurisdictions, but the binding rules and duties differ and must be checked locally',
      ],
      correct: 3,
    },
    {
      q: 'Why is "advice and judgement" treated as non-delegable rather than merely high-risk?',
      options: [
        'Models are not fast enough to keep up with client deadlines',
        'The output is professional judgement exercised by an accountable person, not text to be generated',
        'Advice always requires access to confidential data the model cannot see',
        'It will become delegable once accuracy benchmarks improve',
      ],
      correct: 1,
    },
  ],
};

export default lgM1;
