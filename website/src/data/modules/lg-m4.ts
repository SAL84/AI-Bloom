import type { CourseModule } from '../../types/course';

const lgM4: CourseModule = {
  id: 'lg-m4',
  title: 'Ethics, Confidentiality, and Governance',
  icon: 'shield',
  summary: 'Technological competence, confidentiality and privilege with third-party models, supervision and candour, billing ethics, client consent, and building a firm policy that holds.',
  lessons: [
    {
      id: 'lg4l1',
      diagram: 'TechCompetence',
      title: 'Competence Now Includes Technology',
      slides: [
        {
          heading: 'A Duty That Has Been Widening for Years',
          body: 'Competence is a foundational professional duty in essentially every jurisdiction, and in many of them it has been read for some years as including a duty to keep abreast of relevant technology — its benefits and its risks. That reading predates generative AI; it grew out of e-discovery, metadata handling, and basic information security. Generative AI extends it in a specific way. Understanding the risks now requires understanding something about how these systems behave: that fluency is not accuracy, that confidence is not calibration, that grounding reduces but does not remove fabrication. The exact formulation of the duty varies by jurisdiction and some frame it more explicitly than others, so confirm how yours expresses it rather than assuming a universal standard.',
          bullets: [
            'Competence is foundational everywhere; the technology dimension has been developing for years',
            'It predates generative AI — the lineage runs through e-discovery and information security',
            'Understanding AI risk now requires understanding how these systems actually behave',
            'Formulations differ by jurisdiction — check yours rather than assuming a universal standard',
            'ABA Model Rule 1.1 comment 8 has, since 2012, framed competence as including the benefits and risks of relevant technology',
          ],
        },
        {
          heading: 'Competence Cuts Both Ways',
          body: 'The duty is usually discussed as a constraint on using AI badly, but it also bears on refusing to engage at all. A practitioner who declines to understand these tools may miss a fabricated citation in a draft handed to them, may be unable to supervise juniors who are using them, may fail to advise a client on the risks of AI-generated documents the client has produced, and may not recognise when an opponent\'s filing shows the characteristic signs. Competence does not require adopting anything. It requires understanding enough to make an informed decision and to supervise those who have adopted. Abstention is a legitimate choice; abstention combined with ignorance is a weaker position than it feels like from the inside.',
          bullets: [
            'The duty bears on non-adopters too — supervision and client advice both require understanding',
            'You cannot spot a fabricated citation in someone else\'s draft if you do not know the failure pattern',
            'Clients increasingly bring AI-generated material; advising on it requires knowing how it fails',
            'Choosing not to adopt is legitimate; choosing not to understand is a different and weaker position',
          ],
        },
        {
          heading: 'What Sufficient Understanding Looks Like',
          body: 'Competence here does not mean technical depth. It means a working grasp of a short list: that models generate rather than retrieve unless specifically grounded, that outputs carry no reliable confidence signal, that the same prompt can produce different answers, that data entered may be retained or used depending on the terms, that vendor accuracy claims are marketing until independently tested, and that responsibility for output never transfers. A practitioner who holds those six things can make sensible decisions about when to use a tool and how much to check. One who does not is relying on the tool\'s self-presentation, which is designed to inspire confidence rather than to convey limitations.',
          bullets: [
            'Working grasp, not technical depth — six or so principles carry most of the practical weight',
            'Generation versus grounded retrieval, absence of calibrated confidence, and run-to-run variability',
            'Data handling depends on the contract terms, and vendor accuracy claims need independent testing',
            'Responsibility for the output never transfers, whatever the tool or the terms say',
          ],
        },
      ],
    },
    {
      id: 'lg4l2',
      diagram: 'PrivilegeDataFlow',
      title: 'Confidentiality and Privilege',
      slides: [
        {
          heading: 'What Actually Happens to the Text You Paste',
          body: 'When client material goes into a hosted AI tool, it leaves the firm and is processed on infrastructure the firm does not control. What happens next is determined by the contract, not by the interface. The material may be transmitted and discarded, logged for a retention period, reviewed by humans for safety or quality purposes, used to improve the service, or retained indefinitely under general terms. Consumer and free tiers of general-purpose assistants have historically had the most permissive terms, often including use of inputs for model improvement. Enterprise agreements typically exclude training use, commit to defined retention, and offer contractual confidentiality — but those protections come from the specific agreement, and assuming them without reading is the recurring error.',
          bullets: [
            'The interface tells you nothing about data handling — the contract determines it',
            'Consumer and free tiers have historically had the most permissive terms, often including training use',
            'Enterprise agreements typically exclude training and define retention, but only if negotiated and read',
            'Human review for safety or quality is a common term and is a confidentiality question in its own right',
            'In the US, ABA Model Rule 1.6(c) requires reasonable efforts to prevent inadvertent or unauthorised disclosure of client information',
          ],
        },
        {
          heading: 'Consumer Versus Enterprise Is the Load-Bearing Distinction',
          body: 'The same underlying model can be available under radically different terms. A practitioner using a free consumer assistant and a colleague using the same vendor\'s enterprise offering are in materially different positions on retention, training use, human review, geographic processing, and audit rights — with no difference in what the screen looks like. This is why "we use an approved AI vendor" is not a sufficient control: the approval must attach to a specific product tier under a specific agreement. Firms should maintain an approved-tools list identified at that level of precision, and should expect that personal accounts will be used unless the sanctioned route is at least as convenient as the unsanctioned one.',
          bullets: [
            'The same model under different tiers gives materially different confidentiality positions',
            'Approve specific product tiers under specific agreements, never a vendor in the abstract',
            'The screen looks identical, so users cannot tell which position they are in — the firm must',
            'Shadow use follows friction: if the approved route is slower, personal accounts will fill the gap',
          ],
        },
        {
          heading: 'Privilege, Waiver, and the Honest Uncertainty',
          body: 'Whether disclosing privileged material to an AI vendor risks waiver is an area where the law is developing and answers differ by jurisdiction. Reasoning by analogy to established practice — privilege is generally not waived by disclosure to agents engaged to assist in providing legal services, subject to confidentiality — suggests a properly contracted enterprise arrangement is in a defensible position, while pasting privileged material into a consumer tool with training rights is plainly weaker. But this is analogy, not settled authority in most places, and the conservative course is to avoid creating the test case. Where material is genuinely sensitive, consider minimisation, redaction, or self-hosted options rather than relying on an untested argument.',
          bullets: [
            'Waiver analysis for AI vendors is developing and jurisdiction-dependent — treat confident answers with caution',
            'Analogy to agents assisting in legal services supports a contracted enterprise arrangement',
            'Consumer tools with training rights sit in a much weaker position on any analysis',
            'Prefer minimisation, redaction, or self-hosting for the most sensitive material over an untested argument',
          ],
        },
        {
          heading: 'Practical Controls That Work',
          body: 'A few measures do most of the work. Minimise what you send: much AI-assisted work can be done on redacted or abstracted material, and a clause analysis rarely needs party names. Match the tool to the sensitivity tier rather than approving one tool for everything. Read the actual terms on retention, training use, human review, sub-processors, and geographic processing, and get the important ones into a negotiated agreement rather than relying on published policy that the vendor can revise. Prohibit personal accounts for client work in clear terms, and then make the approved path genuinely convenient, because the effectiveness of the prohibition depends almost entirely on that second half.',
          bullets: [
            'Minimise and redact — a great deal of useful work does not need identifying detail',
            'Tier tools by sensitivity rather than approving one tool for all client material',
            'Get retention, training exclusion, human review, sub-processors, and location into the agreement',
            'Ban personal accounts and then make the sanctioned route fast enough that the ban holds',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Lawyer or Paralegal',
          body: 'Before pasting client material anywhere, ask two questions: is this tool on the approved list for this sensitivity tier, and does this task actually need the identifying detail I am about to include?',
          bullets: [
            'Use only firm-approved tools for client material — never a personal account, however convenient',
            'Redact or abstract by default; most analysis works fine without names and identifiers',
            'Assume anything you paste may be retained unless the firm has told you otherwise in writing',
            'Raise it rather than working around it if the approved tool is too slow for the task',
          ],
        },
        {
          role: 'security-se',
          label: 'Confidentiality and InfoSec',
          body: 'Vendor diligence for AI tools needs to go past the standard security questionnaire. The distinctive questions are about training use, human review, prompt logging, and sub-processor chains — none of which a generic SOC report addresses.',
          bullets: [
            'Get written exclusion of client content from training, evaluation, and fine-tuning datasets',
            'Establish who can read prompt logs, under what process, and with what retention and deletion guarantees',
            'Map the sub-processor chain — the contracting vendor is often not the party running the model',
            'Pin processing location and confirm what changes on a model version upgrade or vendor acquisition',
          ],
        },
        {
          role: 'developer',
          label: 'Legal-Tech Builder',
          body: 'Legal buyers will diligence your data path harder than most. Design so the honest answers are good ones: minimise what you retain, make deletion real and verifiable, and never make training on customer content a default.',
          bullets: [
            'Default to zero retention of client content; make any retention opt-in, scoped, and documented',
            'Never train on customer content by default, and state the position unambiguously in the product',
            'Isolate tenants and matters — shared indexes across clients create conflicts and confidentiality failures',
            'Publish sub-processors and model providers; buyers need the full chain, not your name alone',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising a Firm',
          body: 'Most confidentiality incidents come from shadow use, not from approved tools behaving badly. Policy that only prohibits is policy that produces workarounds. Pair every prohibition with a sanctioned path that is at least as fast.',
          bullets: [
            'Survey actual usage before writing policy — you are regulating what is already happening',
            'Approve by product tier and agreement, not by vendor name, and publish the list where people work',
            'Tier client data by sensitivity and map each tier to an approved tool and an explicit prohibition',
            'Budget for the convenient sanctioned option; underfunding it guarantees the policy will be bypassed',
          ],
        },
      ],
    },
    {
      id: 'lg4l3',
      diagram: 'SupervisionChain',
      title: 'Supervision, Candour, and the Tribunal',
      slides: [
        {
          heading: 'Supervising a Tool Is Not Like Supervising a Person',
          body: 'Supervision duties over subordinates are long-established and translate awkwardly to AI. A junior has a stable error pattern, learns from correction, tells you when they are unsure, and can explain their reasoning. A model has none of these properties: its errors are unpatterned, correction does not persist across sessions, it expresses no genuine uncertainty, and its stated reasoning is generated text rather than an account of what actually happened internally. The consequence is that supervision cannot rely on trust built over time. It has to be systematic — sampling output regardless of past performance, and treating a long run of good results as a reason for continued vigilance rather than reduced checking.',
          bullets: [
            'Model errors are unpatterned and do not diminish with correction across sessions',
            'Stated reasoning is generated text, not a faithful account of the internal process',
            'Supervision cannot be trust-based because trust cannot be earned by something that does not learn from you',
            'A long run of good output is a reason for sustained sampling, not reduced checking',
          ],
        },
        {
          heading: 'Candour to the Tribunal',
          body: 'Duties of candour and of not misleading the court are near-universal in some form. AI engages them in a way that is easy to underestimate: submitting a document with citations you have not verified risks misleading the court whether or not you knew the citations were false, and in several reported instances the failure characterised by courts has been the absence of verification rather than any intention to deceive. Candour also engages after the fact. Once a doubt is raised about a citation, the obligation is to check immediately and correct on the record. Delaying while you consider your position, or defending the citation without verifying it, has consistently made outcomes worse in the reported pattern.',
          bullets: [
            'Filing unverified citations can mislead the court regardless of intent',
            'Courts have characterised the failure as absence of verification rather than deliberate deception',
            'The obligation is continuing — a doubt raised triggers immediate checking and correction',
            'Delay and defence-before-verification have consistently aggravated outcomes',
          ],
        },
        {
          heading: 'Disclosure Requirements Are a Per-Forum Question',
          body: 'Whether you must disclose AI use in a filing depends entirely on the forum. Some courts and individual judges require disclosure of any generative AI use, some require certification that a human verified all citations, some restrict use in specified filing categories, and many say nothing at all. These requirements vary between jurisdictions, between courts in the same jurisdiction, and between judges in the same court, and they have been changing. There is no universal rule to memorise. What there is, is a checklist item: before filing, check the current standing orders and practice directions for this court and this judge. Firms should keep a register and assign someone to maintain it, because individual practitioners will not track it reliably.',
          bullets: [
            'Requirements vary by jurisdiction, by court, and by individual judge — and keep changing',
            'They range from disclosure of use, to human-verification certification, to category restrictions',
            'No universal rule exists; the control is a pre-filing check of the specific forum',
            'Keep a maintained firm register — individuals will not track this reliably on their own',
          ],
        },
      ],
    },
    {
      id: 'lg4l4',
      diagram: 'BillingConsentMalpractice',
      title: 'Billing, Consent, and Malpractice',
      slides: [
        {
          heading: 'Billing When AI Compresses the Hours',
          body: 'A common principle across jurisdictions is that fees must be reasonable and that a client should not be charged for time not spent. AI creates an obvious tension in hourly billing: if a memo that took six hours now takes two, billing six is difficult to defend on any reading of that principle. Billing two is straightforward but transfers the entire efficiency gain to the client while the firm carries the tool cost, the training cost, and the verification burden. There is no settled answer and practice is genuinely varied — some firms bill actual time, some shift affected work to fixed fees, some price by outcome. What is not defensible is billing time that was not worked, and that much is clear regardless of the model chosen.',
          bullets: [
            'Reasonableness of fees and not charging for unspent time are widely shared principles',
            'Billing pre-AI hours for AI-compressed work is difficult to defend under either principle',
            'Practice varies genuinely — actual time, fixed fees, and outcome pricing are all in use',
            'The clear line is that time not worked cannot be billed as time worked',
          ],
        },
        {
          heading: 'Charging for the Tools',
          body: 'A separate question is whether AI costs can be passed to clients as a disbursement. General principles about disbursements — that they should reflect actual cost, be disclosed, and not be a hidden profit centre — apply here as they do elsewhere, though the specifics differ by jurisdiction. Practical complications: subscription tools do not have a natural per-matter cost, allocating a firm-wide licence across matters is arbitrary, and clients are increasingly asking directly about AI use and pricing in engagement negotiations. The workable approach is to decide the position deliberately, state it in the engagement letter, and be able to explain the basis. Improvised line items discovered by a client during a fee review tend not to end well.',
          bullets: [
            'Disbursement principles apply: actual cost, disclosed, not a concealed margin',
            'Subscription tools resist per-matter allocation, which makes any split arbitrary and worth explaining',
            'Clients are asking about AI use and pricing directly in engagement negotiations',
            'Decide the position, put it in the engagement letter, and be able to justify the basis',
          ],
        },
        {
          heading: 'Client Consent and Engagement Language',
          body: 'Whether clients must be told about AI use is unsettled and jurisdiction-dependent. Arguments for disclosure include that clients may care, that confidentiality of their material is affected, and that trust is cheaper to maintain than to rebuild. Arguments against include that firms do not itemise every tool and that the duty is to competent work rather than to a particular method. A reasonable default is proportionality: routine internal use of approved tools sits alongside other work methods, while use that sends client material to a third party, or that materially shapes advice, warrants explicit engagement-letter language. Note also that clients increasingly impose their own AI restrictions in outside counsel guidelines, which must be tracked per client.',
          bullets: [
            'Disclosure obligations are unsettled and vary — do not assume either answer is universal',
            'Proportionality is a defensible default: disclose where material leaves the firm or advice is shaped',
            'Engagement-letter language beats a conversation nobody recorded',
            'Client-imposed AI restrictions in outside counsel guidelines must be tracked per client',
          ],
        },
        {
          heading: 'Malpractice Exposure',
          body: 'The malpractice picture has two sides and firms usually consider only one. Using AI badly creates exposure: a fabricated citation, a missed clause, a breach of confidentiality, an error the practitioner could not explain because they did not understand the tool. But not using AI may eventually create exposure of its own, if a standard of care develops in which failing to run an available check on a large document set becomes unreasonable. That standard is not settled and should not be overstated. Two practical steps in the meantime: confirm with your insurer how AI-assisted work is treated under your policy, because exclusions and notification conditions are appearing, and keep records that show the method you actually used.',
          bullets: [
            'Exposure from bad use is immediate and documented; exposure from non-use is speculative and slower',
            'A standard of care may develop around available checks, but it is not settled — do not overstate it',
            'Confirm with your insurer how AI-assisted work is treated; exclusions and conditions are appearing',
            'Keep records evidencing the method used — reconstruction after a claim is much harder',
          ],
        },
      ],
    },
    {
      id: 'lg4l5',
      diagram: 'FirmAIPolicy',
      title: 'Building a Firm AI Policy',
      slides: [
        {
          heading: 'Start From Actual Behaviour',
          body: 'The most common policy failure is writing rules for a firm that does not exist. By the time most firms formalise a policy, people are already using these tools, often on personal accounts, and often without telling anyone. A policy written in ignorance of that reality regulates an imaginary organisation and drives real use further underground. The first step is an honest, non-punitive survey: what is being used, for what, by whom. Amnesty framing matters here — the objective is accurate information, and disciplinary framing guarantees you will not get it. Firms that skip this step typically produce a restrictive policy, achieve nominal compliance, and discover the actual position only when something goes wrong.',
          bullets: [
            'Adoption precedes policy in almost every firm — write for the organisation you have',
            'Survey use honestly and without penalty; disciplinary framing guarantees inaccurate answers',
            'Policy written in ignorance drives shadow use further out of sight',
            'Nominal compliance with a restrictive policy is the most common and least useful outcome',
          ],
        },
        {
          heading: 'What the Policy Has to Contain',
          body: 'A policy that functions covers a specific set of things. An approved-tools list identified by product tier and agreement, not by vendor name. A data classification mapping each sensitivity tier to permitted tools. Task rules stating what is permitted, permitted with verification, and prohibited outright. Verification requirements with defined depth, named ownership, and a required artefact. Disclosure rules for courts and clients, with a maintained per-forum register. Supervision expectations for AI-assisted work. Billing treatment. An incident procedure covering what to do when a fabricated citation is discovered. And a review cadence, because a policy written against last year\'s tools will be silently wrong within months.',
          bullets: [
            'Approved tools by product tier and agreement; data classification mapped to permitted tools',
            'Task rules in three tiers: permitted, permitted with verification, prohibited',
            'Verification depth, named owners, artefacts, plus disclosure rules and a per-forum register',
            'Incident procedure and a scheduled review cadence — this material dates quickly',
          ],
        },
        {
          heading: 'Making It Survive Contact With Practice',
          body: 'Policies fail for predictable reasons: too long to read, too slow to comply with, no named owner, no route to get a new tool approved, no consequence for ignoring it, and no update when the tools change. The countermeasures are unglamorous. Keep the operative rules to a page that fits next to a desk. Provide a fast, low-friction approval route for new tools so the answer to a good idea is not simply no. Name an owner with actual authority. Build the verification artefact into existing workflow rather than adding a parallel system. Review on a fixed schedule. And treat the first reported near-miss as the most valuable thing that will happen to the policy, because it is the only real feedback you are going to get.',
          bullets: [
            'Operative rules on one page; the long version can exist but nobody will consult it',
            'Provide a fast approval route for new tools or people will route around the policy entirely',
            'Name an owner with authority and build artefacts into existing workflow, not a parallel system',
            'Treat the first reported near-miss as the policy\'s most valuable feedback, and respond accordingly',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'A policy is far easier to argue about than to write. Draft one section of it properly and the gaps become obvious.',
          exercise: {
            task: 'Write the approved-tools and data-classification section of an AI policy for your firm or team: the sensitivity tiers, which product tier and agreement is permitted at each, and what is prohibited outright. Keep it to one page, describe data categories generically, and put no client material into any tool while drafting.',
            copyText: 'Tier 1 — public or non-client material. Permitted tools:\nTier 2 — client material, not privileged. Permitted tools:\nTier 3 — privileged or highly sensitive. Permitted tools:\nProhibited outright:\nHow a new tool gets approved, and by whom:\nOwner of this section, and review date:',
            selfCheck: [
              'Every tool is identified by product tier and agreement, not by vendor name alone',
              'Someone reading it cold could tell which tool to use for a given document',
              'It fits on one page and names an owner and a review date',
            ],
          },
        },
      ],
    },
    {
      id: 'lg4l6',
      diagram: 'LegalSourceLadder',
      title: 'Checking This Course Against the Sources',
      sectionLabel: 'References',
      slides: [
        {
          heading: 'How This Course Was Made',
          body: 'This course was drafted by an AI model working to an editorial brief and then edited. It has not been reviewed by a practising lawyer in any jurisdiction, and it claims no authority. That matters more here than almost anywhere: a course that spends a module on the consequences of relying on unverified AI output would refute itself if it asked you to rely on its own. So do not. Use it to orient, to build vocabulary, and to work out which questions to put to a source that carries professional responsibility for the answer — never as the basis for advice, a filing, or a compliance position. It is also why the lessons say plainly where the position is unsettled: on waiver, on disclosure, and on billing, a confident answer would be the inaccurate one.',
          bullets: [
            'Model-drafted to an editorial brief and edited — not reviewed by a practising lawyer in any jurisdiction',
            'A course about the cost of unverified AI output cannot ask you to rely on its own unverified output',
            'Use it to orient and to form questions; never as the basis for advice, a filing, or a compliance position',
            'Where it says the position is unsettled — waiver, disclosure, billing — that is accuracy, not hedging',
          ],
        },
        {
          heading: 'The Source Ladder',
          body: 'When you read anything about AI in practice, including this, the useful first question is which rung it came from. Primary law and the conduct rules sit at the top: they are what a court applies and what binds you personally, whether or not you have read them. Below that, guidance from the bodies that judge your work — regulators, bars, and the courts themselves — which is the only rung that can tell you whether this judge wants disclosure. Below that, independent evaluation and scholarship: disinterested and method-transparent, but general rather than about your matter. Then practitioner commentary, which reaches you first and has no checking behind it. Vendor material sits last, and its accuracy claims are claims to test.',
          bullets: [
            'Primary law and conduct rules bind you; everything below them is somebody reading them',
            'Regulator, bar, and court guidance is the only rung that answers what your specific forum requires',
            'Independent evaluation and scholarship are disinterested and method-transparent, but general',
            'Commentary is fast and unreviewed; vendor accuracy claims are claims to test, never evidence',
          ],
        },
        {
          heading: 'The Sources This Course Rests On',
          body: 'These are the anchors the lessons were written against, grouped by rung. They are named without links, because deep links rot and the issuing body\'s own site is where the current text lives. Two caveats are worth more than the list itself. Everything below is scoped: the US federal items say nothing about what applies in any other jurisdiction, and the ABA Model Rules bind nobody anywhere until a state adopts a version of them. And the sources that will actually decide a question in front of you — this court\'s standing order, your state\'s rule, this client\'s guidelines — are not findable from a course page at all.',
          bullets: [
            'In US federal practice: Mata v. Avianca (S.D.N.Y. 2023) as the canonical fabricated-citation sanction; FRCP Rule 11 on certification and sanctions; and FRE Rule 502(d) orders as the standard protection against waiver',
            'The ABA Model Rules: 1.1 comment 8 on technology competence, 1.6(c) on preventing unauthorised disclosure, 5.1 and 5.3 on supervision, and the rules on reasonable fees and on communicating with clients',
            'Also on the ABA\'s site: Formal Opinion 512 (2024) on generative AI tools — but the Model Rules are a model, so your state\'s adopted rules and your state bar\'s own AI guidance are what govern you',
            'Outside the US: your regulator\'s conduct rules and technology guidance — in England and Wales, the SRA Code of Conduct and Law Society guidance — and any judicial AI guidance, which the England and Wales judiciary has published for judicial office holders',
            'Per forum and per client, and not findable from here: the standing orders and practice directions of the specific court and judge, and any outside counsel guidelines the client imposes',
            'On the tools themselves: independent empirical evaluations of legal AI systems in law reviews, empirical legal studies journals, and preprints — vendor accuracy figures sit a rung below these',
          ],
        },
        {
          heading: 'Keeping Current, and What to Do When This Is Wrong',
          body: 'This is among the faster-moving areas of professional regulation, and the fastest-moving part of it is the part no course can hold: an individual judge\'s standing order. State bars continue to issue AI guidance and ethics opinions. The reported sanctions decisions keep accumulating and refining what courts treat as the failure. Waiver analysis for AI vendors is still being worked out. Anything here that reads as settled should be checked against the current text on the issuing body\'s own site before you rely on it. And if you find a claim in this course that is wrong, superseded, or misdescribed, please report it — given the subject, an unchecked citation on this page would demonstrate the problem better than the lessons do.',
          bullets: [
            'Standing orders and practice directions change per judge — check the forum before filing, not once a year',
            'State bar opinions, reported sanctions decisions, and waiver analysis are all still accumulating',
            'Check anything that reads as settled against the current text on the issuing body\'s own site',
            'Report an error here — on this subject above all, an unchecked citation would prove the course\'s own point',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'How does the duty of competence bear on a practitioner who chooses not to use AI at all?',
      options: [
        'It does not apply — the duty only attaches to tools actually used',
        'It still applies — supervising and advising require knowing how the tools fail',
        'It requires them to adopt at least one approved tool in practice',
        'It applies only in jurisdictions with an explicit technology comment',
      ],
      correct: 1,
    },
    {
      q: 'Two lawyers use the same underlying model, one on a free consumer tier and one under an enterprise agreement. What differs?',
      options: [
        'Only the response speed and the usage limits that apply',
        'Nothing material — the model is the same, so the confidentiality position is the same',
        'Only whether the outputs may be used in court filings',
        'Retention, training use, review, location, and audit rights can differ',
      ],
      correct: 3,
    },
    {
      q: 'What is the most accurate statement about court disclosure of AI use?',
      options: [
        'Disclosure is now universally required in all filings everywhere',
        'Requirements vary by jurisdiction, court, and judge, and must be checked',
        'Disclosure is only required if the AI produced the citations',
        'No court currently requires any disclosure of AI use at all',
      ],
      correct: 1,
    },
    {
      q: 'A memo that previously took six hours now takes two with AI assistance. Which position is clearly indefensible?',
      options: [
        'Billing the two hours that were actually worked',
        'Converting the work to a fixed fee agreed with the client in advance',
        'Billing six hours because that is what the work used to be worth',
        'Discussing a revised pricing approach with the client openly',
      ],
      correct: 2,
    },
    {
      q: 'Why is supervising AI output structurally different from supervising a junior lawyer?',
      options: [
        'AI output is generally more accurate, so far less supervision is needed on it overall',
        'Supervision duties do not extend to software under most rules of conduct',
        'AI output can be validated automatically by a second model instead',
        'Errors are unpatterned, corrections do not persist, stated reasoning is generated',
      ],
      correct: 3,
    },
    {
      q: 'What is the correct first step in writing a firm AI policy?',
      options: [
        'Select an approved vendor and build the policy around its capabilities',
        'Circulate a blanket prohibition until governance is ready',
        'Honestly survey what is already being used, by whom and for what',
        'Adopt a published model policy from a bar association wholesale',
      ],
      correct: 2,
    },
    {
      q: 'A doubt is raised about a citation in a filing your firm submitted. What does the candour principle indicate?',
      options: [
        'Verify immediately and correct on the record',
        'Wait for the court to raise it formally before acting',
        'Defend the citation unless the opponent proves it is false',
        'Withdraw from the matter entirely to avoid the conflict',
      ],
      correct: 0,
    },
    {
      q: 'Which policy feature most reliably prevents shadow use of personal AI accounts?',
      options: [
        'A sanctioned alternative as fast and convenient as a personal account',
        'A clearly worded prohibition with real disciplinary consequences attached',
        'Annual mandatory training on AI risk for every fee earner in the firm',
        'Blocking every known AI domain at the edge of the firm\'s internal network',
      ],
      correct: 0,
    },
  ],
};

export default lgM4;
