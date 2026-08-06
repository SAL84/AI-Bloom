import type { CourseModule } from '../../types/course';

const lgM3: CourseModule = {
  id: 'lg-m3',
  title: 'Research, Citation, and the Hallucination Problem',
  icon: 'shield-alert',
  summary: 'The module that matters most — why models invent authority, what has happened to practitioners who filed it, why retrieval helps but does not cure, and a verification workflow that works.',
  lessons: [
    {
      id: 'lg3l1',
      diagram: 'HallucinatedCitation',
      title: 'Why Models Invent Case Law',
      slides: [
        {
          heading: 'The Mechanism, Not the Malfunction',
          body: 'A fabricated citation is not a bug in the ordinary sense. The model is doing exactly what it was built to do: produce text that is probable given the context. Asked for authority supporting a proposition, it generates a sequence that has the statistical shape of a citation supporting that proposition. If a matching real case is strongly represented in training, the output may be that case. If not, the output is still a well-formed citation, because well-formed citations are what the pattern calls for. There is no internal step where the model consults a database and finds nothing. Understanding this matters practically: it means fabrication is not rare or random, it is the default behaviour whenever the requested authority is not readily reproducible from training.',
          bullets: [
            'Fabrication is the system working as designed, not an occasional defect to be patched',
            'There is no lookup step that can fail and return nothing — the model always produces something',
            'Risk rises sharply for narrow propositions, recent developments, and minor jurisdictions',
            'Asking the model to be careful or to only cite real cases does not change the mechanism',
          ],
        },
        {
          heading: 'What Fabrication Looks Like in Practice',
          body: 'The failure has recognisable shapes. Wholly invented cases with plausible party names and a citation in the correct reporter format. Real cases with an invented holding attached. Real cases cited for a proposition they do not support, often adjacent to something they do support. Correct case names paired with wrong citations, wrong courts, or wrong years. Quotations that appear verbatim in nothing. Statutory provisions that do not exist, or exist with different content. Composite authorities that blend two real cases into one. Notably, the model will often defend a fabrication when challenged, supply additional invented detail on request, and produce a confident quotation from a judgment that was never written.',
          bullets: [
            'Shapes include wholly invented cases, real cases with invented holdings, and correct names with wrong citations',
            'Misdescription of real authority is more common and harder to catch than pure invention',
            'Challenging the model often produces more invented detail rather than a retraction',
            'A fluent verbatim quotation is not evidence the passage exists anywhere',
          ],
        },
        {
          heading: 'Why It Slips Past Experienced Practitioners',
          body: 'It is tempting to think fabricated citations are only filed by people who were not paying attention, and the record does not support that comfort. The output arrives in the exact register of competent legal research, so the ordinary signals of unreliability are absent. It is typically generated at the point of maximum time pressure. It is frequently produced by someone who did not personally run the query — a junior, a contractor, a client who supplied a draft. And the checking step is boring, repetitive, and almost always confirms nothing is wrong, which is precisely the condition under which humans stop performing checks properly. The vulnerability is structural, and treating it as a matter of individual carelessness is what allows it to keep happening.',
          bullets: [
            'The output arrives in the register of competent research, so the usual warning signals are absent',
            'It surfaces at peak deadline pressure and often via someone other than the person who ran the query',
            'Checking is a low-yield vigilance task, which is exactly what humans perform worst',
            'Framing this as individual carelessness prevents the process fix that would actually work',
          ],
        },
      ],
    },
    {
      id: 'lg3l2',
      diagram: 'SanctionsPattern',
      title: 'The Sanctions Pattern',
      slides: [
        {
          heading: 'What Has Actually Been Happening',
          body: 'Since generative tools became widely available, a consistent pattern has emerged across multiple jurisdictions: filings submitted containing citations to authority that does not exist, discovered either by opposing counsel unable to locate the cases or by the court itself. The most widely reported early instance is Mata v. Avianca in the Southern District of New York in 2023, where a filing cited multiple invented cases produced by a chatbot and the attorneys were sanctioned — but it was the first famous example of the pattern, not an aberration. Since then the responses have included orders to show cause, monetary sanctions, referrals to disciplinary bodies, adverse findings recorded in published judgments, striking of the offending filing, and in some instances costs awarded against the responsible practitioner personally. Reported incidents have involved practitioners at a wide range of experience levels and firm sizes, and they have continued well after the risk became widely publicised. This is a documented and recurring phenomenon, not a single memorable episode.',
          bullets: [
            'Mata v. Avianca (S.D.N.Y. 2023) is the canonical example — invented citations, sanctioned attorneys, worldwide coverage',
            'Consistent pattern across jurisdictions: filings citing authority that does not exist',
            'Consequences have included show-cause orders, monetary sanctions, disciplinary referrals, and adverse published findings',
            'Incidents span experience levels and firm sizes — seniority has not been protective',
            'The pattern has continued after widespread publicity, which tells you awareness alone is not a control',
          ],
        },
        {
          heading: 'What Aggravates the Consequence',
          body: 'The reported outcomes suggest the initial error is rarely what determines severity. What aggravates it is the response: failing to check when opposing counsel raises the issue, defending the citations rather than verifying them, offering explanations that shift as facts emerge, and denying AI use before conceding it. Courts have generally distinguished between a practitioner who made a verification failure and admitted it promptly, and one who compounded it. The duty of candour engages the moment a doubt is raised, and by then the situation is recoverable if handled directly. The related lesson is that a firm needs a rehearsed response for the day this happens — check immediately, correct on the record, disclose plainly — because improvising it under pressure has gone badly for people.',
          bullets: [
            'Severity tracks the response more than the original error',
            'Defending unverified citations rather than checking them has consistently made outcomes worse',
            'Candour obligations engage as soon as a doubt is raised, not when the fabrication is proven',
            'Have a rehearsed response: verify at once, correct on the record, disclose plainly',
          ],
        },
        {
          heading: 'The Institutional Response',
          body: 'Courts have not only sanctioned individuals. Judges in a number of jurisdictions have issued standing orders or practice directions addressing AI use in filings — some requiring disclosure of whether generative AI was used, some requiring certification that citations have been verified by a human, some restricting use in particular categories of filing. These requirements are inconsistent between courts and between judges within the same court, and they are still evolving. Bars and regulators in several jurisdictions have also issued guidance. The practical consequence is that "what do I have to disclose?" now has a per-forum answer, and a practitioner appearing in an unfamiliar court has a new item on the pre-filing checklist.',
          bullets: [
            'Standing orders and practice directions on AI use exist in a number of courts and vary widely',
            'Requirements range from disclosure of use, to human-verification certification, to category restrictions',
            'They differ between courts and between judges in the same court, and they are still changing',
            'Checking the forum\'s current requirements belongs on the pre-filing checklist, every time',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Lawyer or Paralegal',
          body: 'Assume any citation you did not personally open does not exist until you have opened it. That single habit prevents the entire class of failure described in this lesson, including when the draft came from someone else.',
          bullets: [
            'Open every cited source yourself, including citations in drafts handed to you by others',
            'Check the forum\'s current AI disclosure or certification requirements before filing',
            'If a doubt is raised, verify immediately and correct on the record — do not defend first',
            'Never ask the model to confirm its own citation; it will elaborate rather than retract',
          ],
        },
        {
          role: 'security-se',
          label: 'Confidentiality and InfoSec',
          body: 'The fabrication problem has a records dimension. If a filing is later challenged, the firm may need to reconstruct what was generated, by whom, with what tool, and what was checked — which is a logging and retention question decided long in advance.',
          bullets: [
            'Retain prompt and output logs for court-facing work so events can be reconstructed later',
            'Balance retention against confidentiality: those logs contain client material and need the same protection',
            'Ensure verification artefacts are stored with the matter file, not in an individual\'s local notes',
            'Confirm the vendor can attest to model version and configuration at a past point in time',
          ],
        },
        {
          role: 'developer',
          label: 'Legal-Tech Builder',
          body: 'Your interface decides whether an unverified citation is easy to copy into a filing. Treat unverified authority as an unsafe state and make it visibly unsafe until a human has resolved it.',
          bullets: [
            'Never render an unverified citation in a copy-ready, correctly-formatted form',
            'Mark citation status explicitly — resolved to a source, unresolved, or not attempted',
            'Link every citation to the retrieved document and show the supporting passage, not a paraphrase',
            'Log verification actions so the firm can evidence what was checked and by whom',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising a Firm',
          body: 'Firms usually respond to this risk with a training session and a warning email. Neither changes behaviour under deadline. The controls that work are procedural: a verification artefact required before filing, and a rehearsed incident response.',
          bullets: [
            'Require a citation-verification record as a filing precondition, not as a cultural expectation',
            'Rehearse the incident response — the aggravating factor in reported cases is the reaction, not the error',
            'Maintain a per-forum register of AI disclosure and certification requirements',
            'Include client-supplied and contractor-supplied drafts in the verification requirement explicitly',
          ],
        },
      ],
    },
    {
      id: 'lg3l3',
      diagram: 'RetrievalLimits',
      title: 'Retrieval Helps. It Does Not Cure.',
      slides: [
        {
          heading: 'How Retrieval-Backed Research Changes the Picture',
          body: 'Research tools built on retrieval work differently from a bare chatbot. Instead of generating an answer from model weights alone, they search an actual corpus of primary and secondary sources, retrieve relevant documents, and instruct the model to answer using only those documents, usually with links back to what was retrieved. This is a genuine improvement and it substantially reduces the wholly-invented-case failure, because the citations come from a real index rather than from the model\'s learned patterns. If a firm is going to use AI for legal research at all, a properly grounded, source-linked tool is a materially safer starting point than a general assistant. That is a real distinction and worth insisting on in procurement.',
          bullets: [
            'Grounded tools search a real corpus and cite what they retrieved, rather than generating from weights',
            'This substantially reduces wholly-invented citations — the citation comes from a real index',
            'A source-linked, grounded tool is materially safer than a general assistant for research',
            'Insist on visible source links in procurement; a tool without them is not grounded in any useful sense',
          ],
        },
        {
          heading: 'The Failure Modes Retrieval Does Not Remove',
          body: 'Grounding narrows the failure surface without closing it. The model still summarises what was retrieved and can misstate a holding, overstate how squarely a case supports a point, or lose a crucial qualification. Retrieval can surface a real case that is genuinely on point but has since been overruled, distinguished, or superseded by statute, and currency-checking is a separate function that not every tool performs. Coverage gaps are invisible: if the corpus lacks a jurisdiction or a court level, the tool answers confidently from what it does have. Chunked retrieval can sever a passage from a qualification appearing elsewhere in the judgment. And a generated synthesis can drift from the sources beneath it while still displaying them as citations.',
          bullets: [
            'Misdescription of retrieved authority survives grounding entirely — the summary is still generated',
            'Overruled, distinguished, or superseded authority can be retrieved and cited as current',
            'Corpus coverage gaps are silent; the tool answers from what it has without signalling what it lacks',
            'Chunking can separate a passage from the qualification that changes its meaning',
            'Measured, not asserted: a Stanford RegLab study of leading AI legal research tools (Journal of Empirical Legal Studies, 2025) found hallucination rates from roughly one in six to one in three of the queries tested',
          ],
        },
        {
          heading: 'Reading a Grounded Answer Correctly',
          body: 'The right mental model for a grounded research tool is a fast, tireless, and occasionally careless researcher who always hands you the documents. The value is in the documents. The prose summary is a navigational aid — useful for deciding what to read, never a substitute for reading it. In practice this means clicking through to every source before relying on the answer, reading enough of each source to confirm it says what the summary claims, and checking currency independently. It also means noticing when a tool returns a confident answer with thin or tangential sources, which is a signal that the corpus did not contain a good answer and the model synthesised around the gap.',
          bullets: [
            'The retrieved documents are the product; the summary is a navigational aid to them',
            'Click through to every source and read enough to confirm the characterisation holds',
            'Check currency separately unless the tool explicitly performs and displays that function',
            'A confident answer resting on thin or tangential sources means the corpus fell short',
          ],
        },
      ],
    },
    {
      id: 'lg3l4',
      diagram: 'CitationVerification',
      title: 'A Verification Workflow You Can Run',
      slides: [
        {
          heading: 'Four Checks, In Order',
          body: 'Verification is four distinct questions and they must be answered in sequence, because each is meaningless if the previous one fails. First: does this authority exist? Look it up in a primary source or an established database — not by asking the model, which will confirm anything. Second: is the citation itself correct? Party names, court, year, reporter and paragraph or page. A real case cited wrongly is still a defect. Third: does it say what is claimed? Read the relevant passage in the judgment, not a headnote and not the tool\'s summary. Fourth: is it still good law? Check subsequent treatment for overruling, distinguishing, or statutory supersession. Skipping any step leaves a specific, known category of error uncaught.',
          bullets: [
            'Exists — confirm in a primary source or established database, never by asking the model',
            'Correct — party names, court, year, and pinpoint reference all verified against the source',
            'Supports — read the actual passage; headnotes and generated summaries are not verification',
            'Current — check subsequent treatment for overruling, distinguishing, or supersession',
          ],
        },
        {
          heading: 'Making the Workflow Survive a Deadline',
          body: 'Any check that competes with a filing deadline loses unless it has been made cheap and unavoidable. Practical measures: verify continuously as you draft rather than in one pass at the end, when there is no time left. Keep a verification table alongside the draft with a row per citation and a tick per check, so the state is visible at a glance and an unfinished row is obvious. Make the completed table a filing precondition with a named signer. Apply it to every draft regardless of origin, including client-supplied and contractor-supplied text, since a fabricated citation carries the same consequence whoever typed it. And never let the model verify its own output — asked to confirm, it will produce confirmation.',
          bullets: [
            'Verify as you draft, not in a final pass that will collide with the deadline',
            'Maintain a per-citation table with a tick per check so incompleteness is visible',
            'Make the signed table a filing precondition with a named person attesting',
            'Apply it to every draft regardless of author — client and contractor text included',
          ],
        },
        {
          heading: 'Where the Workflow Still Leaves Gaps',
          body: 'Even a disciplined workflow has residual exposure worth naming. Verification confirms that cited authority exists, is accurately described, and remains good — it says nothing about the authority you never found. A model can steer research toward a plausible but incomplete line of argument, and no per-citation check surfaces the case that should have been cited and was not. Currency checking depends on the coverage and update cadence of whatever service you use. And on a long document under pressure, sustained attention across a hundred citations is a genuine constraint. Verification is a necessary control, not a complete one, and knowing its edges is part of using it honestly.',
          bullets: [
            'Verification says nothing about authority you never found — omission is the residual risk',
            'AI-shaped research can narrow the argument in ways per-citation checking cannot detect',
            'Currency checks inherit the coverage and update cadence of the service performing them',
            'Sustained attention across many citations is a real limit — split long documents between checkers',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'The four checks are easy to describe and easy to skip. Run them once, in full, on a document that already exists.',
          exercise: {
            task: 'Take a document that already contains citations — a filed brief, a published judgment, or a memo of your own — and run all four checks on every citation in it, opening each source yourself. Use a public or already-filed document, or your own de-identified draft. Do not upload it to any AI tool, and do not ask a model to confirm anything.',
            copyText: 'Citation:\nExists (opened in a primary source or database): yes / no\nCitation details correct — parties, court, year, pinpoint: yes / no\nSupports the proposition as stated: yes / no\nStill good law, subsequent treatment checked: yes / no\nChecked by:            Date:',
            selfCheck: [
              'Every citation has all four boxes completed — none left blank or assumed',
              'You recorded how long the full pass took, so it can be budgeted next time',
              'You found at least one defect, or can say what would have made one visible',
            ],
          },
        },
      ],
    },
    {
      id: 'lg3l5',
      diagram: 'SupervisingJuniors',
      title: 'Supervising Juniors Who Use These Tools',
      slides: [
        {
          heading: 'Assume Use Unless You Have Made Non-Use Realistic',
          body: 'Supervisors who assume juniors are not using AI are usually wrong, and the assumption makes things worse: undisclosed use is unsupervised use. Where a firm has a restrictive policy but demanding time targets, the predictable outcome is quiet use and no disclosure, which removes the supervisor\'s ability to check anything. The more effective posture is to make disclosure of AI use routine and consequence-free, so that supervision can attach to it. That means asking as a normal part of reviewing work — which parts were AI-assisted, which tool, what was verified — and reacting to the answer as information rather than as an admission. A junior who reports a fabricated citation they caught themselves should be treated as having done the job correctly.',
          bullets: [
            'Undisclosed use is unsupervised use — a restrictive policy plus tight targets produces exactly that',
            'Make disclosure routine and consequence-free so supervision can attach to it',
            'Ask which parts were AI-assisted, with which tool, and what was verified — as a normal review question',
            'Treat a self-reported near-miss as the process working, not as a performance problem',
          ],
        },
        {
          heading: 'Supervision Duty Does Not Delegate',
          body: 'Across jurisdictions, supervisory responsibility for the work of those you oversee is a recurring principle, and it applies to work produced with AI assistance just as it does to work produced without it. In practice this means a supervisor cannot discharge the duty by relying on an assurance that the junior checked. Review of AI-assisted work should include independently verifying a sample of citations rather than accepting the verification record at face value, because the record can be completed without the checks being done. The specific rules and their scope differ by jurisdiction, and firms should confirm their own position, but the underlying expectation — that supervision is active — is broadly shared.',
          bullets: [
            'Supervisory responsibility is a recurring principle across jurisdictions and extends to AI-assisted work',
            'An assurance that checking happened is not the same as checking having happened',
            'Independently verify a sample of citations rather than relying solely on the verification record',
            'Specific rules and scope differ by jurisdiction — confirm your own before setting firm policy',
            'In the US, ABA Model Rules 5.1 and 5.3 frame supervisory responsibility; states adopt their own versions, so check yours',
          ],
        },
        {
          heading: 'Protecting the Development Pipeline',
          body: 'There is a longer-term supervision problem that sits beneath the immediate risk. The ability to review AI output well is built by having done the underlying work manually — you spot a mischaracterised holding because you have read enough judgments to feel the mismatch. If juniors move directly to reviewing machine output, that intuition never develops, and the firm ends up with reviewers who cannot review. Deliberate countermeasures help: research exercises done without AI, requiring juniors to read full judgments rather than retrieved extracts, and periodically having them find the error in a deliberately flawed AI draft. This is a training investment with no short-term return and a substantial long-term one.',
          bullets: [
            'Reviewing well depends on having done the underlying work manually often enough to feel a mismatch',
            'Straight-to-review juniors become reviewers who cannot detect what they have never produced',
            'Keep unassisted research exercises and full-judgment reading in the development programme',
            'Error-spotting drills on deliberately flawed AI drafts build the specific skill that matters',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why does a language model produce a fabricated citation rather than saying it found nothing?',
      options: [
        'Its database connection times out and it substitutes a placeholder',
        'It is generating probable text, and a well-formed citation is what the pattern calls for — there is no lookup step to fail',
        'It was fine-tuned to always provide an answer',
        'Fabrication only happens when the temperature setting is too high',
      ],
      correct: 1,
    },
    {
      q: 'A colleague asks the model whether the case it just cited is real. What is wrong with that check?',
      options: [
        'Nothing — self-verification is a recognised control',
        'It uses extra tokens unnecessarily',
        'The model cannot answer questions about its previous output',
        'The model will typically confirm and elaborate rather than retract, adding invented detail',
      ],
      correct: 3,
    },
    {
      q: 'Across reported incidents, what has tended to aggravate the consequences most?',
      options: [
        'The number of fabricated citations in the filing',
        'The response — defending the citations rather than verifying and correcting promptly',
        'The seniority of the practitioner involved',
        'Whether the filing was in a trial or appellate court',
      ],
      correct: 1,
    },
    {
      q: 'A retrieval-backed research tool returns real, linked cases. Which risk remains?',
      options: [
        'None — grounding eliminates hallucination in legal research',
        'Only the risk of the corpus being temporarily unavailable',
        'Only the risk of the tool citing secondary rather than primary sources',
        'The generated summary can still misdescribe a holding, and retrieved authority may be overruled or superseded',
      ],
      correct: 3,
    },
    {
      q: 'What are the four verification checks, in order?',
      options: [
        'Exists, citation correct, supports the proposition, still good law',
        'Relevant, persuasive, recent, well-reasoned',
        'Retrieved, summarised, formatted, filed',
        'Jurisdiction, court level, judge, outcome',
      ],
      correct: 0,
    },
    {
      q: 'Which residual risk does a per-citation verification workflow NOT address?',
      options: [
        'A case cited for a proposition it does not support',
        'Authority that should have been found and cited but never was',
        'A correct case name with the wrong reporter reference',
        'An authority that has been overruled since publication',
      ],
      correct: 1,
    },
    {
      q: 'A firm bans AI use but sets demanding time targets. What is the predictable outcome?',
      options: [
        'Juniors develop stronger manual research skills',
        'Uniform compliance because the policy is unambiguous',
        'Increased reliance on external counsel for research',
        'Quiet, undisclosed use — which means unsupervised use',
      ],
      correct: 3,
    },
    {
      q: 'What should a supervisor do with a junior\'s completed citation-verification record?',
      options: [
        'Accept it as evidence the checks were performed and sign off',
        'File it with the matter and review it only if a problem arises',
        'Independently verify a sample of the citations, because a record can be completed without the checks being done',
        'Return it to the junior to have a second junior countersign',
      ],
      correct: 2,
    },
  ],
};

export default lgM3;
