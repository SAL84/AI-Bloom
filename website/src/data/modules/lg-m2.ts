import type { CourseModule } from '../../types/course';

const lgM2: CourseModule = {
  id: 'lg-m2',
  title: 'Contracts and Document Review',
  icon: 'layers',
  summary: 'Clause extraction, playbook comparison, redlining, diligence at volume, the e-discovery precedent, and a human review protocol people actually follow.',
  lessons: [
    {
      id: 'lg2l1',
      diagram: 'ClauseExtraction',
      title: 'Clause Extraction and Playbook Comparison',
      slides: [
        {
          heading: 'Extraction Is a Different Job From Generation',
          body: 'The most reliable contract work an AI system does is extraction: locating the limitation-of-liability clause, pulling the governing-law provision, listing every defined term, identifying the notice periods. The output is a pointer into a document you already possess, which means it is checkable in seconds. This is categorically safer than generation, where the output is new text with no source to check it against. The practical implication is that you should prefer workflows that return spans of the actual document over workflows that return a paraphrase. A system that says "clause 14.2 says X" and links to clause 14.2 can be verified. A system that says "the agreement caps liability at twelve months of fees" without a pointer has to be trusted or re-derived from scratch.',
          bullets: [
            'Extraction returns a pointer into your own document — verification is a click, not an investigation',
            'Prefer tools that return source spans over tools that return only a paraphrase or a summary table',
            'Paraphrase without a citation to the clause is generation wearing extraction\'s clothes',
            'Extraction quality degrades on unusual drafting, scanned text, and heavily amended documents',
          ],
        },
        {
          heading: 'Playbook Comparison: Encoding What Your Firm Already Decided',
          body: 'A playbook is a firm\'s accumulated position: what an acceptable indemnity looks like, which liability caps are approved without escalation, what the fallback positions are on a given clause. Comparing an incoming draft against that playbook is a well-suited task, because the standard is explicit and written down. The AI locates the relevant clause, characterises it, and flags divergence from the stated position. The value is speed on high-volume, moderate-stakes agreements — NDAs, standard vendor terms, routine procurement. The failure mode is subtle: a clause can match the playbook wording and still be unacceptable because of how it interacts with a definition elsewhere, and cross-clause interaction is exactly what clause-level comparison misses.',
          bullets: [
            'Works because the standard is explicit and pre-agreed — the model is matching, not deciding',
            'Highest value on high-volume, moderate-stakes agreements where the playbook already covers the ground',
            'Blind spot: clause-level matching misses interactions with definitions and cross-references elsewhere',
            'A playbook that has never been written down cannot be automated — the writing is most of the work',
          ],
        },
        {
          heading: 'What the Playbook Cannot Encode',
          body: 'Playbooks capture the standard case, and the reason lawyers are involved is the non-standard case. A clause may be within playbook tolerance and still be wrong for this counterparty, this commercial relationship, or this risk appetite on this deal. Conversely a divergence may be entirely acceptable because of something traded elsewhere in the negotiation. The model sees the document; it does not see the deal. Treat playbook comparison output as a structured list of things to look at, ranked by how far they sit from the norm, and keep the judgement about whether a divergence matters firmly with the person who knows the commercial context. Where a matter is bespoke or high-value, the playbook pass is a starting inventory rather than a review.',
          bullets: [
            'A playbook encodes the standard case; the exceptions are why a lawyer is reading it at all',
            'Acceptability depends on the deal, the counterparty, and what was traded — none of which is in the document',
            'Read the output as a ranked inventory of divergences, not as a pass-or-fail verdict',
            'On bespoke or high-value matters, treat the automated pass as the first ten minutes, not the review',
          ],
        },
      ],
    },
    {
      id: 'lg2l2',
      title: 'Redlining and First-Pass Markup',
      slides: [
        {
          heading: 'What a First-Pass Redline Actually Buys You',
          body: 'Applying a firm\'s standard positions to an incoming draft — swapping in preferred indemnity wording, adjusting a cap, inserting a missing governing-law clause — is mechanical work that consumes real hours. A model working from a playbook can produce a first-pass markup quickly, and the output is easy to inspect because a redline shows exactly what changed. That inspectability is the point. Unlike a summary, where an omission is invisible, a redline is a diff: every alteration is visible and attributable. The saving is in the typing and the lookup of standard wording, not in the decision about whether each change is right. Reviewing a machine redline is still a full review; it is just a review that starts from something rather than nothing.',
          bullets: [
            'Redlines are inspectable by construction — every change is visible as a diff',
            'The saving is in mechanical application of known positions, not in deciding what position to take',
            'Reviewing the markup is still a full review — it starts from a draft, it does not replace the read',
            'Works best where standard wording exists and is genuinely standard across the firm',
          ],
        },
        {
          heading: 'The Omission Problem',
          body: 'The hardest thing to catch in any redline, human or machine, is the change that was not made. A model that applies twelve playbook positions and silently misses the thirteenth produces a document that looks complete and reviewed. Nothing in the diff signals the absence. This is the same false-negative asymmetry that runs through all AI-assisted review, and in redlining it is particularly easy to miss because the presence of many careful-looking changes creates an impression of thoroughness. The countermeasure is a checklist that exists independently of the tool: the reviewer works down the firm\'s list of required positions and confirms each is addressed, rather than reading the markup and assessing whether it looks right.',
          bullets: [
            'A diff shows what changed; it cannot show what should have changed and did not',
            'Visible thoroughness in the changes made creates false confidence about the changes missed',
            'Countermeasure: check against an independent list of required positions, not against the markup itself',
            'Track which positions the tool reliably misses — the gaps are usually systematic, not random',
          ],
        },
        {
          heading: 'Tone, Negotiation Posture, and the Counterparty',
          body: 'A redline is a communication as much as a legal instrument. How aggressively you mark up a draft signals your position, and an appropriate markup for a routine supplier differs sharply from one for a strategic partner you will work with for a decade. Models default to applying the playbook uniformly, which produces markup that is technically correct and relationally tone-deaf. They also do not know what was agreed on a call, what the client has already conceded, or which points are worth spending capital on. Before any machine-generated markup leaves the firm, someone who knows the relationship should read it as a message to the counterparty and not only as a set of legal changes.',
          bullets: [
            'Markup intensity is a negotiation signal — uniform playbook application ignores the relationship',
            'The model does not know what was agreed on a call or already conceded by the client',
            'Read the redline as a message to the counterparty before it goes out, not just as legal edits',
            'Deciding which points to spend capital on is judgement and stays with the responsible lawyer',
          ],
        },
      ],
    },
    {
      id: 'lg2l3',
      diagram: 'DiligenceAtVolume',
      title: 'Obligations, Risk Terms, and Diligence at Volume',
      slides: [
        {
          heading: 'Obligation Extraction Across a Portfolio',
          body: 'A recurring commercial question is simple to ask and painful to answer: across our four hundred active contracts, what are we actually obliged to do, by when, and to whom? Answering it manually is a project. Extraction models handle it reasonably well because obligations have recognisable linguistic form — a party, a modal verb, an action, often a deadline. The output is best treated as a structured register with a link to the source clause for each entry, which makes spot-checking practical and lets the register be maintained rather than rebuilt. The known weaknesses are conditional obligations that only trigger on some event, obligations created by reference to an incorporated schedule, and duties expressed as a negative restriction rather than a positive act.',
          bullets: [
            'Obligations have recognisable form, which makes them a good extraction target across a portfolio',
            'Output should be a structured register with a source link per entry, not prose',
            'Weak spots: conditional triggers, incorporated schedules, and negatively-framed restrictions',
            'Spot-check by sampling clauses the register does not mention, not only entries it produced',
          ],
        },
        {
          heading: 'Risk Terms and Change-of-Control Sweeps',
          body: 'Transactional work generates repeated sweeps for the same categories: change-of-control provisions, assignment restrictions, exclusivity, most-favoured-nation clauses, unusual termination rights, uncapped indemnities. These are well-defined targets and a model can surface candidates across a large set far faster than sequential human reading. The correct posture is recall-oriented: configure for over-inclusion, accept the false positives, and use human review to discard them. That is the opposite of how these tools are often demonstrated, where a clean short list looks impressive. A short list is impressive precisely because something was filtered out, and on a diligence sweep the thing filtered out is what you were looking for.',
          bullets: [
            'Configure sweeps for recall and accept false positives — a clean short list means something was dropped',
            'Well-defined targets work best: change of control, assignment, exclusivity, uncapped indemnity',
            'Impressive-looking precision in a demo is usually recall being traded away invisibly',
            'Record the categories swept and the criteria used — the sweep definition is part of the work product',
          ],
        },
        {
          heading: 'Diligence at Volume Without Losing the Thread',
          body: 'Volume is where these tools earn their place, and also where the review protocol matters most. A diligence exercise across thousands of documents cannot be fully read by anyone, which was true before AI and is why sampling and prioritisation were always part of the method. What changes is that the prioritisation is now performed by a system whose criteria are opaque and whose errors are unpatterned. The professional obligation is unchanged: the practitioner must be able to explain what was reviewed, how, and with what limitations. That means documenting the tool, the configuration, the sampling approach, and the known gaps — and being able to state those limitations to a client or a tribunal without having to reconstruct them afterwards.',
          bullets: [
            'Prioritisation was always part of large-scale diligence; what changed is who performs it and how visibly',
            'Document tool, configuration, sampling method, and known gaps as you go, not retrospectively',
            'You must be able to explain the method and its limits to a client or a court in plain terms',
            'Opaque criteria are acceptable only if the resulting coverage is measured and disclosed',
          ],
        },
      ],
    },
    {
      id: 'lg2l4',
      diagram: 'TARPrecedent',
      title: 'E-Discovery and the TAR Precedent',
      slides: [
        {
          heading: 'Algorithmic Review Is Not New Here',
          body: 'Discovery is the one area of legal practice with a long, established history of courts accepting machine-assisted review. Technology-assisted review — predictive coding — has been used for well over a decade to prioritise and classify documents for responsiveness, with courts in several jurisdictions accepting it as a reasonable method. That acceptance did not arrive because the technology was impressive. It arrived because practitioners built a defensibility apparatus around it: documented protocols, agreed seed sets, statistical sampling to estimate recall, validation against control sets, and disclosure to opposing parties. The technology was permitted because the method was measurable and could be explained. That is the transferable lesson, and it is a methodological one rather than a technological one.',
          bullets: [
            'Courts have accepted predictive coding in discovery for well over a decade in several jurisdictions',
            'Acceptance followed from measurable, documented, disclosable method — not from technical impressiveness',
            'Seed sets, control sets, sampling, and recall estimation are the apparatus that made it defensible',
            'The transferable lesson is the methodology, not the specific algorithm',
          ],
        },
        {
          heading: 'What TAR Teaches About Generative Tools',
          body: 'Predictive coding and a generative model are different technologies, and the differences matter. TAR is a classifier trained on human decisions for a specific matter, producing a score whose accuracy can be estimated statistically against a control set. A general-purpose language model applied to review is not trained on your matter, produces no calibrated confidence, and can be prompted into different behaviour by the content of the documents themselves. So the TAR precedent does not automatically extend. What extends is the expectation: if you use an algorithmic method, be prepared to describe it, measure its performance, and defend the choice. Generative tools currently make that harder to satisfy, not easier, and that gap is the honest state of play.',
          bullets: [
            'TAR is a matter-specific classifier with statistically estimable recall; a general model is neither',
            'Generative output has no calibrated confidence score to sample against',
            'The transferable expectation is defensibility: describe the method, measure it, justify it',
            'Do not cite the TAR precedent as blanket judicial approval of generative review — it is not',
          ],
        },
        {
          heading: 'Privilege Review Is the Hard Case',
          body: 'Of all discovery tasks, privilege review carries the least tolerance for error, because the consequence of a false negative is potential waiver rather than wasted effort. Privilege depends on context a document often does not contain — who a participant is, whether legal advice was actually being sought, whether a communication was later shared in a way that broke confidentiality. Models are poor at exactly this kind of contextual inference and will confidently classify on surface features such as the presence of a lawyer in a recipient list. Machine assistance can reasonably narrow the field for human review, but a privilege call should be made by a person, and clawback arrangements should be in place regardless of how the review was conducted.',
          bullets: [
            'Privilege errors risk waiver — the asymmetry is far sharper than in responsiveness review',
            'Privilege depends on context outside the document; models classify on surface features',
            'Use machine assistance to narrow the field, but keep the actual privilege call with a person',
            'Have clawback and inadvertent-disclosure protections in place whatever the review method',
          ],
        },
      ],
    },
    {
      id: 'lg2l5',
      diagram: 'HumanReviewProtocol',
      title: 'A Human Review Protocol That Is Actually Followed',
      slides: [
        {
          heading: 'Why Most Review Protocols Fail',
          body: 'Nearly every firm adopting AI writes a policy requiring human review of AI output. Nearly all of these fail in the same way. The requirement is stated as a general obligation with no named owner, no defined depth, no artefact, and no time budget — and under deadline it degrades into a skim. A protocol that says "all AI output must be reviewed by a qualified lawyer" is not a control, because it does not specify what reviewing means, who does it, how long it takes, or how anyone would know it happened. Controls that survive contact with a busy practice are specific, cheap enough to perform honestly, and leave a trace. Everything else is a policy that exists to be pointed at after something has gone wrong.',
          bullets: [
            'Vague review requirements degrade to skimming under deadline — reliably, not occasionally',
            'A control needs a named owner, a defined depth, a time budget, and a visible artefact',
            'If nobody could tell whether the review happened, it is not a control',
            'A protocol too expensive to follow honestly will be followed dishonestly',
          ],
        },
        {
          heading: 'The Four Elements That Make It Stick',
          body: 'A workable protocol specifies four things. First, depth by risk tier: an internal summary needs a different check from a document going to a court or a counterparty, and the tiers should be written down with examples. Second, a named individual accountable for each output — not a role, not a team, a person whose name is recorded. Third, an artefact: a verification note, a signed checklist, a comment in the document. The artefact is what makes the control auditable and what makes skipping it a visible act rather than a private one. Fourth, a time allocation in the matter plan, because a review step with no budgeted time is the first thing sacrificed when the deadline moves.',
          bullets: [
            'Depth tiered by risk, with written examples of what each tier requires in practice',
            'A named person accountable per output — roles and teams diffuse accountability to nobody',
            'An artefact that records the check, making omission visible rather than private',
            'Budgeted time in the matter plan, or the step disappears the first time a deadline slips',
          ],
        },
        {
          heading: 'Sampling What the Tool Did Not Flag',
          body: 'The element most often missing is a check on the tool\'s coverage rather than its output. Reviewing only what a system flagged tells you about its precision and nothing about its recall, yet recall is where the professional risk lives. A practical protocol includes periodic sampling of unflagged material — a random subset of documents the tool cleared, reviewed blind by a human, with disagreements recorded. Over time this produces something valuable and otherwise unobtainable: an empirical picture of what your tool misses in your document population. That picture is the basis for a defensible statement about method, and it is also how you discover that a model update has quietly changed behaviour on your workload.',
          bullets: [
            'Reviewing only flagged items measures precision; recall is where the professional exposure sits',
            'Sample unflagged material blind and record disagreements — this is the only way to see misses',
            'Accumulated disagreement data becomes your defensible evidence about method and limits',
            'Sampling also detects silent behaviour change after a vendor updates the underlying model',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Lawyer or Paralegal',
          body: 'Treat AI review output as a prioritised worklist produced by a colleague whose error pattern you do not yet know. Check the flags, then deliberately check some of what was not flagged.',
          bullets: [
            'Work from an independent checklist of required positions, not from the tool\'s markup',
            'Ask for the source clause behind every extracted term before relying on it',
            'On bespoke or high-value matters, the automated pass is an inventory, not a review',
            'Record what you checked — the note protects you and improves the protocol',
          ],
        },
        {
          role: 'security-se',
          label: 'Confidentiality and InfoSec',
          body: 'Bulk contract and discovery work is the largest single volume of client data a firm will send to a third party. Diligence the data path before the workflow is approved, not after the first matter runs through it.',
          bullets: [
            'Establish retention, deletion, logging, and sub-processor terms before any production set is uploaded',
            'Discovery sets contain third-party personal data — data-protection obligations attach independently of privilege',
            'Segregate matters: cross-matter indexing or shared embeddings can create conflicts and confidentiality breaches',
            'Confirm in writing that client content is excluded from model training and from vendor evaluation datasets',
          ],
        },
        {
          role: 'developer',
          label: 'Legal-Tech Builder',
          body: 'Build for verification, not for demo appeal. Every extracted term should carry a span reference, and coverage should be a first-class metric exposed to the user rather than a number kept internally.',
          bullets: [
            'Return source spans with every extraction; a paraphrase without a pointer is unverifiable by design',
            'Expose recall estimates and coverage gaps in the UI — hiding them shifts risk onto the practitioner',
            'Support blind sampling of unflagged documents as a built-in workflow, not a manual workaround',
            'Version and log model changes visibly; silent updates invalidate a firm\'s accumulated calibration',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising a Firm',
          body: 'The protocol is the deliverable, not the tool selection. A firm with a mediocre tool and a real review protocol is in a far better position than one with an excellent tool and a policy nobody follows.',
          bullets: [
            'Design tiers, owners, artefacts, and time budgets before procurement — the tool fits the protocol',
            'Insist on a coverage-sampling routine from day one; it is the only evidence of method that will hold up',
            'Model the review burden in fee arrangements or the protocol will be cut to protect the margin',
            'Rehearse the answer to "how was this reviewed?" as if a client or a court were asking it tomorrow',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why is extraction generally safer than generation in contract work?',
      options: [
        'Extraction models are trained on more legal data',
        'Extraction cannot hallucinate under any circumstances',
        'Generation is prohibited in most engagement letters',
        'The output points into a document you already hold, so it can be verified directly',
      ],
      correct: 3,
    },
    {
      q: 'A first-pass AI redline applies twelve of your thirteen standard positions. What makes this hard to catch?',
      options: [
        'Redlines cannot be exported for comparison',
        'The twelve changes will be formatted inconsistently',
        'A diff shows what changed but cannot show what should have changed and did not',
        'The model will refuse to explain its reasoning',
      ],
      correct: 2,
    },
    {
      q: 'On a change-of-control sweep across a large contract set, how should the tool be configured?',
      options: [
        'For maximum precision, so the output list stays short and reviewable',
        'For recall, accepting false positives and discarding them in human review',
        'To return only clauses above a fixed confidence threshold',
        'To exclude any document over fifty pages to control cost',
      ],
      correct: 1,
    },
    {
      q: 'What is the transferable lesson from courts accepting technology-assisted review in discovery?',
      options: [
        'Any algorithmic review method now has general judicial approval',
        'Generative models inherit TAR\'s accepted status because both are AI',
        'Defensibility came from documented, measurable, disclosable method — not from the technology itself',
        'Human review is no longer required once a protocol is filed',
      ],
      correct: 2,
    },
    {
      q: 'Why is privilege review the hardest discovery task to delegate to a model?',
      options: [
        'Privilege turns on context outside the document, and a false negative risks waiver',
        'Privileged documents are usually longer than responsive ones',
        'Models are contractually barred from processing privileged material',
        'Privilege logs must be produced in a format models cannot generate',
      ],
      correct: 0,
    },
    {
      q: 'Which review protocol is most likely to survive a real deadline?',
      options: [
        'All AI output must be reviewed by a qualified lawyer before use',
        'Reviewers should apply appropriate professional scepticism to AI output',
        'AI output is reviewed at a depth set by risk tier, by a named person, leaving a verification note, with time budgeted in the matter plan',
        'AI output is spot-checked whenever the reviewer has concerns about quality',
      ],
      correct: 2,
    },
    {
      q: 'Reviewing only the documents a tool flagged tells you about its precision. What does it fail to measure?',
      options: [
        'Processing cost per document',
        'The model\'s context window utilisation',
        'Whether the playbook was correctly loaded',
        'Recall — what the tool missed, which is where the professional exposure sits',
      ],
      correct: 3,
    },
    {
      q: 'A clause matches the firm playbook exactly. Why might it still be unacceptable?',
      options: [
        'Playbook wording expires after a set period',
        'Matching clauses are excluded from the extraction index',
        'It may interact badly with a definition or cross-reference elsewhere, or be wrong for this specific deal',
        'Exact matches indicate the counterparty copied the firm\'s template',
      ],
      correct: 2,
    },
  ],
};

export default lgM2;
