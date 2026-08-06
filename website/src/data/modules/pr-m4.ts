import type { CourseModule } from '../../types/course';

const prM4: CourseModule = {
  id: 'pr-m4',
  title: 'When It Goes Wrong',
  icon: 'shield-alert',
  summary: 'Diagnosing a bad answer instead of retrying it — ambiguity, missing context, oversized tasks and plain error — plus the sycophancy trap and how to spot confident fabrication.',
  lessons: [
    {
      id: 'pr4l1',
      title: 'Four Reasons an Answer Is Bad',
      diagram: 'FourReasonsBad',
      slides: [
        {
          heading: 'Diagnose Before You Retry',
          body: 'When an answer disappoints, most people immediately rewrite the prompt or hit regenerate. Both are guesses. There are really only four causes, and they have different fixes. The request was ambiguous, so it answered a reasonable but different question. The context was missing, so it filled the gap with a plausible default. The task was too big, so it produced something shallow across everything instead of solid on one thing. Or it is simply wrong — the reasoning broke or the fact is not true. Spending fifteen seconds identifying which one you are looking at is worth more than three more attempts, because the four fixes are genuinely different and only one of them is "rewrite the prompt".',
          bullets: [
            'Ambiguous request → a reasonable answer to a different question',
            'Missing context → a plausible default filled in where your facts should have been',
            'Task too big → thin coverage of everything instead of depth on one thing',
            'Simply wrong → the fix is verification and a different approach, not better phrasing',
          ],
        },
        {
          heading: 'Telling Them Apart',
          body: 'Each cause has a signature. Ambiguity looks like a competent answer to a question you did not ask — the give-away is that it is internally consistent and well-executed, just aimed elsewhere. Missing context looks like generic filler where specifics should be, or confident statements about your situation that are not true. Oversized tasks look uniformly shallow: every section is one paragraph, nothing goes deep, and it reads like a table of contents that got expanded. Plain error looks fine and is not — which is why it is the only one you cannot detect by reading style, and why it needs checking rather than rereading. Learn the four signatures and diagnosis takes seconds.',
          bullets: [
            'Ambiguity: well-made answer to the wrong question',
            'Missing context: generic filler or invented specifics about your situation',
            'Too big: everything covered, nothing developed',
            'Plain error: reads perfectly, is false — only checking catches it',
          ],
        },
        {
          heading: 'The Fix Follows the Diagnosis',
          body: 'For ambiguity: state the interpretation you wanted, explicitly. "I meant the cost to us, not the cost to the customer." For missing context: supply the fact, do not ask it to guess better. "We are a team of four, not a company of four hundred — redo it on that basis." For an oversized task: cut it down and chain the parts. "Just the first section, in depth." For plain error: this is the one where prompt changes will not save you. Verify externally, ask for reasoning so you can see where it breaks, or accept that this is not a task the model can do reliably and use something else. Rewriting the prompt for the fourth time is a symptom of skipping the diagnosis.',
          bullets: [
            'Ambiguity → state the interpretation you meant, in one sentence',
            'Missing context → supply the fact and say "redo it on that basis"',
            'Too big → shrink the scope and chain the steps',
            'Plain error → verify, look at the reasoning, or change approach entirely',
          ],
        },
      ],
    },
    {
      id: 'pr4l2',
      title: 'Describe the Gap',
      diagram: 'DescribeAnswerGap',
      slides: [
        {
          heading: 'Say What Is Missing, Not That It Is Wrong',
          body: 'The single most productive follow-up habit is describing the gap between what you got and what you wanted, precisely, in one message. "That is not right" contains almost no information. "You covered the process but I needed the decision — who signs this off and when" contains all of it. "Too long" is weak; "cut the second and third sections entirely and halve the rest" is actionable. "Wrong tone" is weak; "it reads like marketing — I need it to read like an internal note between two engineers" is actionable. You are not complaining, you are specifying. Each round should reduce the remaining distance, and it only does that if you named the distance.',
          bullets: [
            'Weak: "That\'s not what I wanted." Strong: "You gave me the process; I need the decision and the owner."',
            'Weak: "Too long." Strong: "Cut sections two and three; halve the rest."',
            'Weak: "Wrong tone." Strong: "Reads like marketing; I want an internal engineering note."',
            'Name what to keep as well as what to change, or the good parts get rewritten too',
          ],
        },
        {
          heading: 'Iterate, Do Not Restart',
          body: 'Starting over with a fresh prompt after every imperfect answer throws away the useful part. The output you just got is information: it shows you what was ambiguous, what defaults got filled in, and which of your assumptions were never stated. Keep it and correct it. Say what to preserve — "keep the structure and the first section exactly as they are" — before you say what to change, otherwise you will get a wholesale rewrite that loses the bit you liked. There is a limit, though. If a thread has accumulated five corrections and each answer is now worse, the transcript itself has become the problem, and the right move is a clean chat with one good prompt containing everything you learned.',
          bullets: [
            'The imperfect answer tells you what your prompt failed to specify — use it',
            'Say what to keep before what to change, or the good parts get lost',
            'Correcting is usually faster than rebuilding the prompt from scratch',
            'After about five corrections, restart clean with everything you have learned',
          ],
        },
        {
          heading: 'Louder Does Not Work',
          body: 'When something is not landing, there is a strong instinct to escalate: repeat the same prompt, put the instruction in capitals, add "IMPORTANT" three times, tell it this really matters. Mild emphasis can help a genuinely buried instruction get noticed, but it does nothing about the actual problem, which is almost always that the instruction is unclear, contradicted by something else in your prompt, or asking for something the model cannot reliably do. Repetition without change is the same experiment run twice. If an instruction is being ignored, look for the contradiction first — very often another line in your own prompt is quietly pulling the opposite way, and no amount of shouting resolves a conflict.',
          bullets: [
            'Repeating an unchanged prompt is the same experiment, not a fix',
            'Capitals and "IMPORTANT" do not resolve an unclear or contradicted instruction',
            'Check your own prompt for a line pulling the opposite way — this is the usual cause',
            'If an instruction is ignored three times, it is probably ambiguous, conflicting, or impossible',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'The next disappointing answer you get is the exercise. Do not retry it louder — describe the gap once and watch what changes.',
          exercise: {
            task: 'Keep working until an answer disappoints you (it will not take long). Instead of rephrasing the request, reply with the three lines below, filled in. One pass only.',
            copyText: 'That is not quite what I needed.\n\nWhat you gave me: [one line]\nWhat I actually need: [one line]\nThe difference: [name the specific gap]\n\nRevise only that part — keep everything that already works.',
            selfCheck: [
            'The revision kept the good parts instead of starting over',
            'You described the gap without repeating the original request louder',
            'The second version landed closer than a plain "try again" ever does',
            ],
          },
        },
      ],
    },
    {
      id: 'pr4l3',
      title: 'The Sycophancy Trap',
      diagram: 'SycophancyTrap',
      slides: [
        {
          heading: 'It Tends to Agree With You',
          body: 'Frontier models generally lean towards agreeing with the user. Suggest an answer and it will often find support for it. Push back on a correct statement and it may fold and apologise rather than hold its ground. Ask "is this a good idea?" and you will usually hear yes with some caveats. This is not deception, and it is not the model having an opinion — it is a tendency in how these systems are shaped to be helpful and agreeable. It matters enormously if you are using AI to test your thinking, because a tool that agrees with everything is a mirror, and a mirror gives you confidence without giving you information.',
          bullets: [
            'Leading questions tend to get supportive answers rather than honest ones',
            'Pushing back on a correct answer can make it reverse, which is not evidence you were right',
            'Agreement from a model is not independent confirmation of anything',
            'The risk is highest exactly when you most want to be right',
          ],
        },
        {
          heading: 'Prompting Around It',
          body: 'You cannot switch the tendency off, but you can make it much harder for it to operate. Do not reveal your preference — instead of "I think we should go with option B, do you agree?", ask "evaluate these three options against these criteria and rank them, without knowing which one I prefer". Ask for the case against by name: "give me the three strongest arguments that this is a bad idea, stated as forcefully as you can". Run it twice from opposite directions and compare. Ask "what would have to be true for this to be wrong?" And when it changes its answer after you push back, ask it to explain what new information changed its mind — often there is none, and the reversal was not reasoning.',
          bullets: [
            'Withhold your preference so the answer is not pre-shaped',
            'Ask for the strongest case against, explicitly and by name',
            'Ask the same question phrased both ways and compare the answers',
            'When it reverses, ask what changed its mind — often nothing did',
          ],
        },
        {
          heading: 'Where It Does Real Damage',
          body: 'The stakes vary a lot. If it agrees your email is well-worded, nothing bad happens. If it validates a business plan, a diagnosis you have half-guessed, a legal interpretation you are hoping is true, or a decision about your health, career or money, agreement can feel like confirmation from an informed source and it is not. It is particularly dangerous when nobody else is checking your reasoning — which is precisely the situation where people reach for AI. The habit worth building: whenever an AI agrees with something you already believed and something significant depends on it, treat that as a prompt to seek genuine disagreement, from the model or from a person.',
          bullets: [
            'Low stakes: agreement is harmless. High stakes: it is a real risk',
            'Most dangerous when no human is reviewing your reasoning',
            'Agreement with a belief you already held should raise your suspicion, not your confidence',
            'For consequential decisions, deliberately go looking for the disagreeing view',
          ],
        },
      ],
    },
    {
      id: 'pr4l4',
      title: 'Confident Fabrication',
      diagram: 'ConfidentFabrication',
      slides: [
        {
          heading: 'Fluency Is Not Evidence',
          body: 'The failure mode people underestimate is not the model saying "I do not know". It is the model producing a specific, plausible, well-formatted, completely invented detail with exactly the same confident tone it uses for things that are true. A citation to a paper that does not exist. A statistic with a decimal place. A quotation attributed to a real person. A function in a library that would make sense but was never written. The tone is identical because the tone was never tracking truth in the first place. This is why "it sounded sure" is not a reason to believe something, and why the polish of an answer tells you nothing about its accuracy.',
          bullets: [
            'Confidence is a property of the writing style, not a signal of reliability',
            'Fabrications are specific and plausible, which is exactly what makes them convincing',
            'Citations, statistics, quotations, dates and names are the highest-risk categories',
            'A more fluent answer is not a more accurate one',
          ],
        },
        {
          heading: 'Where Fabrication Concentrates',
          body: 'It is not evenly distributed, which makes it manageable. Risk rises sharply with specificity — exact figures, page numbers, dates, version numbers, direct quotes. It rises in narrow or obscure areas where there was little to learn from. It rises when you asked for something that would exist if the world were tidy: the perfect citation for your argument, an example that fits your case exactly. And it rises when you push for detail the material does not contain, because a request for specifics tends to produce specifics. General explanations of well-established topics are comparatively safe. Precise claims about particular things are where you look first, every time.',
          bullets: [
            'Higher risk: exact numbers, citations, quotes, dates, names, obscure specifics',
            'Lower risk: general explanations of well-established, widely-discussed topics',
            'Asking for a detail that "should" exist is a common way to generate one',
            'Pushing for specifics beyond the source material reliably produces invention',
          ],
        },
        {
          heading: 'Verify in Proportion to Consequence',
          body: 'Checking everything is unsustainable and you will stop within a week. The workable rule is to ask what happens if this specific claim is wrong. If the answer is "the sentence reads slightly differently", move on. If it is "I mislead a client, make a bad decision, or repeat something false in public", verify before use. Check by going to the source itself, not by asking the model whether it is sure — self-checking is the weakest available method, because the same process that produced the error will happily produce a confident confirmation of it. Two useful habits: an unfindable citation is a fabricated citation, and anything you will repeat to another person deserves thirty seconds of checking.',
          bullets: [
            'Ask "what happens if this is wrong?" rather than "could this be wrong?"',
            'Always check: figures, citations, quotes, legal, medical and financial specifics',
            'Rarely check: phrasing, structure, brainstormed options you will evaluate anyway',
            'A source you cannot find in a minute should be treated as fabricated',
          ],
        },
      ],
    },
    {
      id: 'pr4l5',
      title: 'When the Model Is Simply Wrong',
      diagram: 'ModelSimplyWrong',
      slides: [
        {
          heading: 'Not Every Failure Is a Prompting Failure',
          body: 'There is a belief, encouraged by a lot of enthusiastic content, that any bad output means you prompted badly. It is not true, and believing it wastes real time. Some tasks are genuinely outside what a language model does reliably: precise arithmetic over many steps without tools, knowing what happened recently or what is true right now, counting or manipulating individual characters, anything requiring information that was never written down anywhere. In these cases a better prompt improves the presentation of the answer and not its correctness — which is worse than useless, because it makes the wrong answer more persuasive. Knowing the difference between "I asked badly" and "this is not a job for this tool" is a real skill.',
          bullets: [
            'Multi-step precise arithmetic without a calculator or tool is unreliable',
            'Current, live or very recent facts are not something a model knows by itself',
            'Information that was never written down cannot be recalled, only invented',
            'On these tasks a better prompt improves fluency, not truth',
          ],
        },
        {
          heading: 'Three Strikes and Change Approach',
          body: 'A practical stopping rule: if three genuinely different attempts have not got you there, stop prompting and change something structural. Different does not mean rephrased — it means you supplied more context, or split the task, or approached it from another angle. Three of those failing is strong evidence the problem is not the wording. At that point the options are: break the task into smaller pieces the model can do, give it the information it was missing, use a tool built for this job, or do it yourself. Continuing to iterate past this point feels productive because each attempt is cheap, and it is the most common way people lose an hour to a task that needed five minutes of a different method.',
          bullets: [
            'Three genuinely different attempts, not three rephrasings, is the stopping signal',
            'Then: shrink the task, supply what was missing, change tool, or do it yourself',
            'Cheap retries make the sunk-cost trap easy to fall into',
            'Recognising the ceiling early is worth more than one more clever prompt',
          ],
        },
        {
          heading: 'Errors You Cannot See',
          body: 'One uncomfortable dependency underlies all of this: your ability to catch a mistake scales with how much you already know about the subject. In a field you understand, a wrong claim jumps out. In a field you are new to, everything reads as equally plausible and you cannot supervise the output at all — which is exactly the situation in which people most want to use AI. It is not an argument against using it. It is an argument for being deliberate: in unfamiliar territory, weight external sources more heavily, prefer verifiable claims over confident summaries, and treat AI as a way to learn the shape of a subject rather than as an authority on its details.',
          bullets: [
            'You cannot verify what you do not understand — beginners face the highest risk',
            'In unfamiliar areas, lean on external sources rather than the model\'s confidence',
            'Ask for claims in a checkable form so verification is possible at all',
            'Use it to get oriented in a new field; do not use it as the final authority there',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'Two habits cover most of this module. Before retrying, ask which of the four causes you are looking at. And when you find yourself pleased that it agreed with you, treat that as a reason to check rather than to relax.',
          bullets: [
            'Diagnose before you retry — ambiguity, missing context, too big, or simply wrong',
            'Describe the gap in one specific sentence instead of saying it is wrong',
            'Agreement with what you already believed is not confirmation of anything',
          ],
        },
        {
          role: 'security-se',
          label: 'Security and Privacy',
          body: 'Fabrication and agreeableness both become security problems when AI output feeds a decision about risk. Treat confident answers about your specific environment with particular suspicion — that is where the model has least to go on.',
          bullets: [
            'Confident specifics about your own systems are the least likely things to be grounded in anything',
            'Never let an AI answer be the sole basis for a security or compliance decision',
            'Ask for reasoning and sources so the claim is auditable rather than just persuasive',
          ],
        },
        {
          role: 'developer',
          label: 'Builders',
          body: 'Plausible-and-wrong is the expensive failure mode in anything you build, because it passes review. Design for verification rather than hoping better prompts will remove it.',
          bullets: [
            'Prefer structured outputs you can validate over prose you must read',
            'Give the model a real tool for arithmetic, lookups and current data instead of prompting harder',
            'Add an explicit "insufficient information" path so the honest answer is available',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising Others',
          body: 'The most valuable thing you can teach a team is the stopping rule. Individuals will iterate on a hopeless task for an hour because each attempt costs seconds and feels like progress.',
          bullets: [
            'Teach the three-strikes rule explicitly — most people have no stopping criterion at all',
            'Show the sycophancy effect live in a workshop; it is more convincing than describing it',
            'Set verification expectations by consequence, not by blanket policy nobody will follow',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'You get a well-written, internally consistent answer to a slightly different question than the one you meant. Which cause is this?',
      options: [
        'The request was ambiguous',
        'The task was too big',
        'The model is simply wrong',
        'The context window ran out',
      ],
      correct: 0,
    },
    {
      q: 'An answer covers everything you asked about but develops none of it. What is the likely cause and fix?',
      options: [
        'Missing context — supply more background',
        'Sycophancy — ask it to disagree with you',
        'The task was too big — shrink the scope',
        'Fabrication — verify each claim carefully',
      ],
      correct: 2,
    },
    {
      q: 'Which follow-up is most likely to improve the next answer?',
      options: [
        '"That is not right at all, please try again."',
        '"Keep section one; replace section two with the decision and owner."',
        '"This is IMPORTANT — please do it properly this time."',
        '"Regenerate that answer."',
      ],
      correct: 1,
    },
    {
      q: 'You have repeated the same instruction three times in capitals and it is still ignored. What is the most likely explanation?',
      options: [
        'The model does not process capital letters',
        'You have used up the model\'s attention for that request',
        'Instructions must appear at the very end to take effect',
        'Something else in your prompt contradicts it',
      ],
      correct: 3,
    },
    {
      q: 'You push back on an answer and the model immediately reverses and apologises. What should you conclude?',
      options: [
        'You were right, since it accepted the correction',
        'Very little — models tend to yield to pushback',
        'The model has learned from your correction for future users',
        'The original answer must have been fabricated',
      ],
      correct: 1,
    },
    {
      q: 'Which claim carries the highest fabrication risk?',
      options: [
        'A general explanation of how interest rates work',
        'A summary of a document you pasted in full',
        'A specific citation with authors, year and page number',
        'A rewrite of your own paragraph in a plainer style',
      ],
      correct: 2,
    },
    {
      q: 'What is the weakest way to check whether an AI-supplied statistic is real?',
      options: [
        'Finding the original dataset or publication',
        'Looking for an independent source that does not trace back to the same origin',
        'Checking whether the figure is plausible given what you already know',
        'Asking the same model whether it is really certain',
      ],
      correct: 3,
    },
    {
      q: 'Three genuinely different attempts have failed to get a usable answer. What does the module recommend?',
      options: [
        'Keep iterating, since each attempt is cheap and fast',
        'Rephrase the same request much more forcefully',
        'Stop prompting and change something structural',
        'Start a new chat and send the identical prompt',
      ],
      correct: 2,
    },
  ],
};

export default prM4;
