import type { CourseModule } from '../../types/course';

const fnM4: CourseModule = {
  id: 'fn-m4',
  title: 'Deploying Without Becoming the Case Study',
  icon: 'zap',
  summary: 'The questions a financial institution has to answer before deployment — where a human must stay in the decision, what may never be pasted into a tool, how AI-generated communications sit inside records and supervision, and the governance case a risk committee will expect.',
  lessons: [
    {
      id: 'fn4l1',
      title: 'Where a Human Must Stay in the Decision',
      slides: [
        {
          heading: 'Decisions That Carry a Duty to Explain',
          body: 'Some financial decisions carry obligations attached to the decision itself, and those survive automation entirely. Where the duty arises varies, so name the regime before assuming it. In US consumer credit, ECOA and Regulation B require specific principal reasons on an adverse action; in the EU, data protection law gives rights to human intervention and to contest a solely automated decision with significant effects. "The model said no" satisfies neither, and elsewhere the duty may be differently drawn or absent. Recommendations to retail clients engage the local advice regime: MiFID II suitability in the EU, Regulation Best Interest and the adviser fiduciary standard in the US. Account freezes, exits, claim declines and suspicious-activity filings land on an identifiable person.',
          bullets: [
            'Explanation and appeal duties attach to the decision, not to the technology that produced it',
            'Name the regime: ECOA and Regulation B in US consumer credit, GDPR rights in the EU, neither by default elsewhere',
            'Retail recommendations engage MiFID II suitability in the EU and Regulation Best Interest in the US',
            'Regulatory tiering follows the same logic — module 2 sets out the EU AI Act\'s high-risk category and its carve-outs',
          ],
        },
        {
          heading: 'Review That Is Real Rather Than a Rubber Stamp',
          body: 'A human in the loop who approves almost everything that arrives is documentation, not control. Meaningful review needs four things the design usually omits. The reviewer must have what they need in order to disagree — the inputs and the reasons, not only a score. They must have time proportionate to the decision. They must have authority to overturn without a personal cost for doing it. And override rates must be monitored, because a rate near zero and a rate near total are both evidence that review is not functioning. Automation bias — deference to a confident system — is well documented, and it is a design problem rather than something training fixes. Securing AI Systems goes further into where approval gates should sit so that they are read rather than clicked through.',
          bullets: [
            'A reviewer given only a score cannot disagree in principle, whatever the process says',
            'Time proportionate to the decision, and authority to overturn without personal consequence',
            'Monitor override rates: near-zero and near-total both mean the review step is not working',
            'Automation bias is a design problem — telling people to be sceptical does not fix an interface',
          ],
        },
        {
          heading: 'Who Is Accountable When the Model Is Wrong',
          body: 'The answer that holds up under examination is that accountability sits with a named person inside the institution — not with the model, the vendor, or the committee that approved it. Supervisory expectations across jurisdictions push the same way: an identified owner for the model, an identified owner for the process it sits inside, and a clear line to a senior individual answerable for the outcome. Module 2 sets out why buying rather than building does not move that line. What is worth adding here is that "named" has to mean a person rather than a role that is presently vacant, and that the person has to be reachable on the day the complaint arrives. The practical test is simple. When a supervisor asks who decided, is there a name, and could that person describe the basis of the decision?',
          bullets: [
            'Accountability rests with a named person inside the institution, never with a model or a vendor',
            'Expect an owner for the model, an owner for the process, and a line to a senior individual',
            'A named role with nobody currently in it is an unowned model — check the name, not the org chart',
            'The test: when a supervisor asks who decided, is there a name and can they explain the basis',
          ],
        },
      ],
    },
    {
      id: 'fn4l2',
      title: 'Confidentiality and What You Paste',
      slides: [
        {
          heading: 'What Actually Leaves the Building',
          body: 'When somebody pastes text into a consumer AI tool, it leaves the institution\'s control and is processed under a third party\'s terms — possibly retained, reviewed by humans, or used to improve a model, and subject to another country\'s disclosure laws. AI for Legal works through what those terms say and how consumer and enterprise tiers differ; the point to carry into a bank is narrower. The disclosure runs to a party the institution has not assessed, has no contract with, and cannot instruct to delete. That matters most where the material is not merely confidential but regulated — client data, price-sensitive information, personal financial data — because the exposure is then a market abuse or data protection question, not a procurement one. Nothing in the interface marks the boundary.',
          bullets: [
            'Pasting is a disclosure to a third party operating under its own terms and its own jurisdiction',
            'Tier and contract terms are covered in AI for Legal; the finance-specific part is which regimes the material engages',
            'The institution loses the ability to instruct deletion or to establish who else saw the material',
            'Nothing marks the boundary at the time, so the failure does not feel like a breach when it happens',
          ],
        },
        {
          heading: 'The Three Categories to Get Right',
          body: 'Three kinds of material carry consequences beyond ordinary confidentiality. First, client and customer data, protected by contract, by duties of confidence and — where individuals are identifiable — by data protection law: GDPR in the EU, UK GDPR with the Data Protection Act 2018 in the UK, and comprehensive statutes in a large and growing number of other jurisdictions. Second, price-sensitive non-public information, which engages insider dealing and market abuse regimes, not confidentiality alone; the vocabulary is not interchangeable, since "material non-public information" is US usage while the EU Market Abuse Regulation defines "inside information" on its own terms. Third, personal financial data of customers or staff. Each needs a rule applicable without judgement in the moment.',
          bullets: [
            'Client data: contractual confidentiality plus data protection — GDPR, UK GDPR with the Data Protection Act 2018, or the local statute',
            'US "material non-public information" and MAR "inside information" belong to different regimes — check which one binds you',
            'Deal codenames, draft announcements and pipeline material stay price-sensitive even when names are stripped',
            'Rules have to be applicable without judgement in the moment, or they will be applied inconsistently',
          ],
        },
        {
          heading: 'Approved-Tool Tiers',
          body: 'The control that works is a small number of named tiers, each with an explicit statement of what may go into it, published where people will actually look. A common shape: a consumer tool with no institutional agreement, permitted for public information and general drafting with nothing about the firm\'s business; an enterprise deployment under contract with retention and training restrictions, permitted for internal and client material within stated limits; and an environment inside the institution\'s own boundary for anything sensitive or regulated. Two details decide whether it works. A prohibition with no permitted alternative produces quiet unapproved use. And somebody has to maintain the list, because AI features arrive inside software you already own.',
          bullets: [
            'Name the tiers, and state for each exactly which class of material may enter it',
            'Consumer tools: public information only, and nothing about the firm\'s business, clients or pipeline',
            'Exception requests are the health signal: if nobody ever asks for one, the tiers are being routed around',
            'Maintain the list actively: AI features keep arriving inside software the institution already licenses',
          ],
        },
      ],
    },
    {
      id: 'fn4l3',
      title: 'Records, Communications and Supervision',
      slides: [
        {
          heading: 'An AI-Drafted Message Is Still a Business Communication',
          body: 'Record-keeping and supervision regimes are indifferent to how a communication was produced. A client message, a piece of research, a marketing post or an internal instruction sits inside the same retention, retrieval and review obligations whether a person wrote it from scratch or edited a model\'s draft. The US position splits by firm type: broker-dealer supervision runs through FINRA Rule 3110 and communications with the public through FINRA Rule 2210, while books-and-records requirements for investment advisers sit with the SEC, which has also pursued firms over business conducted on unrecorded channels. In the EU, MiFID II imposes recording and retention duties on communications relating to transactions. The failure mode is constant: work done where the firm cannot retain or produce it.',
          bullets: [
            'Retention, retrieval and supervision duties attach to the communication, not to how it was drafted',
            'In the US, broker-dealer supervision is FINRA Rule 3110 and public communications FINRA Rule 2210; adviser records sit with the SEC',
            'In the EU, MiFID II imposes recording and retention obligations on transaction-related communications',
            'An AI tool outside the retained estate is simply another unrecorded channel, however useful it is',
          ],
        },
        {
          heading: 'What Has to Be Retained and Reviewable',
          body: 'If AI is used in client-facing work, decide in advance what the record consists of. At minimum, the communication as sent, held in the existing retained channel — that part is not new. Beyond that, institutions increasingly need to reconstruct how something was produced: which tool, which version, what was asked, what the model returned, what a human changed, and who approved it. That is a logging decision taken before deployment, because it cannot be recovered afterwards. Supervision has to adapt as well, since review programmes calibrated on human-written communications will meet a far larger volume of fluent, near-uniform text — exactly the material that sampling-based review triages worst.',
          bullets: [
            'The communication as sent belongs in the existing retained channel; that obligation has not changed',
            'Reconstructing production — tool, version, prompt, output, edit, approver — is a logging decision made up front',
            'Volume and uniformity break review programmes calibrated on human-written communications',
            'Set retention periods from your firm\'s records policy, never from a tool vendor\'s default',
          ],
        },
        {
          heading: 'Marketing, Recommendations and Claims About AI Itself',
          body: 'Two further exposures sit close together. AI-generated marketing and research meet the same fair, clear and not misleading standards as anything else, and models are fluent producers of unbalanced enthusiasm, missing risk warnings and implied performance. Which rule applies depends on the firm: in the US, broker-dealer communications with the public fall under FINRA Rule 2210, while the SEC\'s marketing rule applies to investment advisers. Where a communication is personalised at scale it can also cross from marketing into a recommendation, engaging MiFID II suitability in the EU and Regulation Best Interest in the US; in the UK the FCA\'s Consumer Duty adds outcomes-based expectations on top. Overstating AI in your own product — "AI washing" — is itself a regulated-communications problem.',
          bullets: [
            'AI-generated marketing and research meet the same fair, clear and not misleading standards as any other',
            'In the US the applicable rule turns on firm type: FINRA Rule 2210 for broker-dealers, the SEC marketing rule for advisers',
            'Personalisation at scale can turn a communication into a recommendation — MiFID II suitability in the EU, Reg BI in the US',
            'Overstated claims about your own use of AI are a regulated-communications problem in their own right',
          ],
        },
      ],
    },
    {
      id: 'fn4l4',
      title: 'The Governance Case Before the Pilot',
      slides: [
        {
          heading: 'Answer These Before Anything Touches a Customer',
          body: 'The point of a pre-deployment case is not to slow the pilot down. It is to get the assumptions written while they can still be checked. Six answers carry most of the weight. Purpose: what decision or task, for whom, and what success looks like as a number. Data: what goes in, from where, on what basis, and what may never go in. Validation: what evidence exists, against what comparator, on data resembling yours. Monitoring: which metrics, at what cadence, on whose desk. Fallback: what happens when it is unavailable or wrong, and who may switch it off. Owner: the person accountable for the outcome, not for the project.',
          bullets: [
            'Purpose, data, validation, monitoring, fallback, owner — six answers, written before the pilot begins',
            'State success as a number against a comparator, not as an efficiency ambition',
            'The data answer must include what may never enter the system, not only what will',
            'The owner is accountable for the outcome; a project sponsor is a different role',
          ],
        },
        {
          heading: 'The Questions a Risk Committee Will Ask',
          body: 'Committees converge on a predictable set, and the questions that stall a proposal are rarely technical. What is the worst realistic outcome for a customer, and how would we discover it had happened? What population was this validated on, and how does it differ from ours? Which existing process does it replace, and how good is that process — measured rather than assumed? Who is accountable when it is wrong? What does switching it off cost, and could we still operate? Which obligations does it touch: conduct, records, data protection, model risk, third-party? And what did we actually commit to in the contract? Bring answers, or the meeting produces an action list instead of a decision.',
          bullets: [
            'The worst realistic customer outcome, and the mechanism by which you would detect it',
            'The validation population versus yours, and the measured quality of the process being replaced',
            'The cost of switching it off, and whether the institution can still operate without it',
            'Which obligations it touches, and what the contract actually commits the firm to',
          ],
        },
        {
          heading: 'Proportionality, and the Pilot That Never Ends',
          body: 'Not every use needs the same weight of case. Scale it to consequence: an internal drafting aid with no customer effect and no confidential input does not need what a credit decisioning model needs, and running both through the same process teaches everybody that the process is theatre. What does need discipline at any scale is the exit. Pilots become permanent quietly — the review date passes, the people who used to do the work have moved on, and the tool is load-bearing without ever having been approved as such. Set a review date with a named decision maker, define in advance what would end the pilot, and record what the firm would do if the provider withdrew tomorrow.',
          bullets: [
            'Scale governance to consequence — identical process for trivial and critical uses teaches cynicism',
            'Pilots become permanent by default; set a review date and name who decides at it',
            'Write down what result would end the pilot before any results exist',
            'Record the answer to provider withdrawal — dependency accumulates faster than anyone plans for',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'A governance case is only useful before anyone is committed to the answer. Write one for something your institution could plausibly do.',
          exercise: {
            task: 'Choose one AI use your institution could plausibly pilot and write its pre-deployment case on a single page: purpose, data, validation, monitoring, fallback and owner, plus answers to the committee questions in this lesson. Keep it a paper exercise — no customer data, no personal financial data, no material non-public information and nothing confidential goes into an AI tool at any point; use public filings, synthetic records or de-identified material only.',
            copyText: 'Proposed use and the decision it affects:\nPurpose — success stated as a number, against what comparator:\nData — what goes in, from where, on what basis, and what may never go in:\nValidation — what evidence, what comparator, on data resembling ours:\nMonitoring — which metrics, what cadence, whose desk:\nFallback — what we run on when it is wrong or unavailable, and who may switch it off:\nOwner — named person accountable for the outcome:\nWorst realistic customer outcome, and how we would detect it:\nObligations touched — conduct, records, data protection, model risk, third-party:\nReview date, and what result would end the pilot:',
            selfCheck: [
              'Every line has a named person or a number, not an intention',
              'Your stop condition is written as a specific result, not as a commitment to review',
              'At least one answer does not currently exist at your institution, and you can say which',
              'Everything you used was public, synthetic or de-identified — no customer, personal financial or confidential material entered any tool',
            ],
          },
        },
      ],
    },
    {
      id: 'fn4l5',
      title: 'Checking This Course Against the Sources',
      sectionLabel: 'References',
      slides: [
        {
          heading: 'How This Course Was Made',
          body: 'This course was drafted by an AI model working to an editorial brief and then edited. It has not been reviewed by a practising risk, compliance or supervisory professional in any jurisdiction, and it claims no authority. Treat it as orientation: vocabulary, the shape of the arguments, and the questions worth putting to somebody whose job it is to be right about them. It is not a basis for a model approval, a compliance position, a control design, or an investment decision — each of those needs a source that carries responsibility for the answer, and a course page does not. That is also why the lessons say where an answer is jurisdictional instead of supplying one.',
          bullets: [
            'Model-drafted to an editorial brief and edited — not reviewed by a practising risk, compliance or supervisory professional',
            'It carries no authority, so treat each claim as a prompt to check a source rather than as a finding',
            'Never a basis for a model approval, a compliance position, a control design, or an investment decision',
            'Where a lesson says the answer is jurisdictional, that is the content — uniform confidence would be the larger error',
          ],
        },
        {
          heading: 'The Source Ladder',
          body: 'When you read anything about AI in finance, including this, the useful first question is which rung it came from. Primary regulation and directly applicable rules sit at the top: they bind you whether or not anybody has summarised them accurately. Below that, supervisory expectations and official guidance from the authorities that examine you — not law, but the closest available statement of how the rules will be applied to your firm. Below that, standards and peer-reviewed evidence, disinterested and method-transparent but general and slow. Then practitioner commentary, which is fast, concrete and reviewed by nobody. Vendor material sits last: the only source for what a product does, and the least disinterested one you will read.',
          bullets: [
            'Primary regulation binds you; everything below it is somebody reading it, and readings drift from the text',
            'Supervisory expectations are the nearest thing to knowing how the rules will be applied to your firm',
            'Standards and peer-reviewed work are disinterested and show their method, but are general and slow',
            'Commentary is unreviewed; vendor accuracy and performance claims are claims to test, never evidence',
          ],
        },
        {
          heading: 'The Sources This Course Rests On',
          body: 'These are the anchors the lessons were written against, grouped by rung and named so you can read them rather than take this course\'s word for anything. They are deliberately unlinked, because deep links rot and the issuing body\'s own site is where the current version lives. Where an instrument is described by its issuing body and subject rather than by a reference number, that is deliberate. Two caveats matter more than the list. Everything jurisdictional is scoped, and the EU, UK and US items say nothing about obligations anywhere else. And the last group settles more real questions than the first five, because it is the only one that knows your firm.',
          bullets: [
            'Model risk: the US federal banking agencies\' interagency supervisory guidance on model risk management, and the UK PRA\'s supervisory statement setting out model risk management principles for banks',
            'International bodies, standards and method: the Financial Stability Board on AI in financial services and its financial stability implications; IOSCO on the use of AI and machine learning by market intermediaries and asset managers; the Basel Committee on Banking Supervision on the digitalisation of finance; cross-sector, the NIST AI Risk Management Framework with its generative AI profile; and, behind module 3, the finance literature on backtest overfitting and multiple testing in strategy research, on deflated performance measures, and on leakage and cross-validation in financial machine learning',
            'In the EU: the AI Act and its risk tiering, including creditworthiness assessment of natural persons as a high-risk use; GDPR, including its provisions on automated decision-making; MiFID II on suitability, product governance and communication records; the Market Abuse Regulation on inside information; DORA on digital operational resilience and third-party risk; and supervisory communications from the EBA and ESMA on AI use in banking and investment services',
            'In the UK: the FCA and the Bank of England on AI in financial services, the FCA\'s Consumer Duty, and the critical third parties regime for the firms the sector depends on',
            'In the US: FINRA on broker-dealer supervision (Rule 3110) and communications with the public (Rule 2210); the SEC\'s books-and-records and compliance requirements for investment advisers, its marketing rule for advisers, and its actions on off-channel business communications; Regulation Best Interest for retail broker-dealer recommendations; and the Equal Credit Opportunity Act with Regulation B, written by the CFPB, behind the adverse-action explanation duty on credit declines',
            'Closest to you, and not on this page: your own regulator\'s guidance on AI in financial services, your institution\'s model risk policy and model inventory, its compliance and records retention rules, and its approved-tool list',
          ],
        },
        {
          heading: 'Keeping Current, and What to Do When This Is Wrong',
          body: 'Everything above moves, and this area moves faster than most. The EU AI Act\'s obligations phase in over time rather than arriving at once. Supervisors in several jurisdictions are still issuing their first substantive expectations on AI, and consultations were open while this was written. Guidance gets reissued, and a statement that was correct can become wrong with nothing being retracted. So check the issuing body\'s own site for the current text rather than trusting a summary, this one included. Several questions raised here have no general answer at all: whether a use is high-risk, what may lawfully be processed, what must be retained and for how long, and who must be told after an incident are per-jurisdiction and often per-firm.',
          bullets: [
            'Check the issuing body\'s own text — summaries, including this one, date faster than their sources',
            'Risk classification, lawful processing, retention periods and incident notification are per-jurisdiction answers',
            'Phased regimes and reissued guidance turn correct statements wrong without anything being retracted',
            'Report an error you find here — naming sources is an invitation to check them, not a claim to have got them right',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'A US lender automates a credit decision that an underwriter used to make by hand. What changes about the adverse-action duty?',
      options: [
        'It transfers to the model provider under the service agreement',
        'It applies only where the applicant asks for a reason in writing',
        'Nothing — specific principal reasons and a route to challenge are still owed to the applicant',
        'It is replaced by the documentation obligations of whichever AI regime applies',
      ],
      correct: 2,
    },
    {
      q: 'A reviewer approves 99 per cent of the model outputs that reach them. What does that most likely indicate?',
      options: [
        'The review step is not functioning as a control, whatever the process document says',
        'The model is performing well and needs no further monitoring',
        'The reviewer should be replaced with a second model',
        'Override rates are not a meaningful thing to monitor',
      ],
      correct: 0,
    },
    {
      q: 'An analyst pastes a draft deal announcement into a consumer AI tool to tidy up the wording. What is the primary exposure?',
      options: [
        'The output may be poorly written',
        'The tool may charge a subscription fee',
        'The model may have been trained on competitors\' announcements',
        'Inside information has been disclosed to an unassessed third party, engaging market abuse rules as well as confidentiality',
      ],
      correct: 3,
    },
    {
      q: 'Why does a prohibition on AI use, issued without a permitted alternative, tend to fail?',
      options: [
        'Prohibitions are unenforceable under data protection law',
        'It produces quiet unapproved use, which is unmonitored use',
        'Staff will use less capable tools and productivity will fall',
        'Regulators require every firm to permit at least one AI tool',
      ],
      correct: 1,
    },
    {
      q: 'A client-facing message is drafted by a model and edited by a person before sending. How do record-keeping obligations apply?',
      options: [
        'They do not apply, because the model is not a person',
        'They apply only if the message was sent without editing',
        'Identically — retention and supervision duties attach to the communication, not to how it was drafted',
        'They apply only to messages containing a recommendation',
      ],
      correct: 2,
    },
    {
      q: 'A committee has four documents about a proposed tool and time to read one properly. Which should carry the least weight in deciding whether it works for this institution?',
      options: [
        'The vendor\'s own accuracy and performance claims for the product',
        'A peer-reviewed evaluation that discloses its method',
        'Your supervisor\'s published expectations on AI in financial services',
        'The text of the regulation that applies to the decision the tool touches',
      ],
      correct: 0,
    },
    {
      q: 'A pilot passes its review date unnoticed and the manual process it replaced has been wound down. What has gone wrong?',
      options: [
        'Nothing — continued use is evidence the pilot succeeded',
        'The tool has become load-bearing without ever being approved as such, and the fallback no longer exists',
        'The vendor should have raised the review date',
        'The pilot should have been run for longer before any decision',
      ],
      correct: 1,
    },
    {
      q: 'What most reliably establishes accountability for an AI-assisted decision inside a financial institution?',
      options: [
        'A vendor contract that assigns liability to the provider',
        'Approval of the tool by a risk committee',
        'Documentation showing the model was independently validated',
        'A named individual who is answerable for the outcome and can describe the basis of the decision',
      ],
      correct: 3,
    },
  ],
};

export default fnM4;
