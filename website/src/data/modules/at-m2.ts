import type { CourseModule } from '../../types/course';

const atM2: CourseModule = {
  id: 'at-m2',
  title: 'Using AI Well',
  icon: 'target',
  summary: 'Prompting as an actual skill, the difference between studying with AI and letting it study for you, where the honesty line really sits, and how to check what comes back.',
  lessons: [
    {
      id: 'at2l1',
      diagram: 'PromptAnatomy',
      title: 'Prompting Is a Real Skill',
      slides: [
        {
          heading: 'Four Things That Fix Most Bad Outputs',
          body: 'People who get impressive results from AI are rarely using secret phrases. They are supplying more of what the model needs. Context: who you are, what this is for, what constraints apply. Examples: one or two samples of what good looks like. Format: length, structure, and what to leave out. Iteration: reacting to the first attempt instead of accepting it. "Explain photosynthesis" and "I\'m in year 11 revising for a biology exam, explain the light-dependent reactions in about 200 words, then give me three exam-style questions with answers" pull from the same model and produce completely different value.',
          bullets: [
            'Context: your level, your subject, the purpose, the audience',
            'Examples: showing one good answer beats describing what good means',
            'Format: say the length, structure and tone you want, and what to omit',
            'Iteration: your second message is where most of the quality actually comes from',
          ],
        },
        {
          heading: 'Iteration Is the Part Most People Skip',
          body: 'Treating the first response as the final answer is the single most common mistake. A better loop: read it, identify precisely what is wrong, and say that. "Too general — use the example I gave." "Cut it in half and drop the introduction." "You explained what it is; I asked why it happens." Each round narrows the target. It is closer to editing than to searching. If three attempts have not got you there, the prompt is probably not the problem — either the task is underspecified, or you have not decided what you actually want, or this is not a job the model can do.',
          bullets: [
            'Say what specifically is wrong rather than starting over from scratch',
            'Give the fix, not just the complaint: "use shorter sentences" beats "this is bad"',
            'If a chat has drifted, restart with a better first message instead of piling on corrections',
            'Three failed attempts is a signal to rethink the task, not to try harder',
          ],
        },
        {
          heading: 'Roles, Steps and Thinking Out Loud',
          body: 'A few techniques genuinely work because of how generation is conditioned on the context. Telling the model to work through a problem step by step often improves the answer, since the intermediate steps become part of what it conditions on. Assigning a perspective — "explain this the way a physics teacher would to someone who just got it wrong" — shifts the vocabulary and level. Asking it to critique its own output and then rewrite catches real problems. And asking it to give you three quite different versions, rather than one, is a fast way to find the direction you actually wanted.',
          bullets: [
            'Ask for reasoning steps on anything with a chain of logic — and read the steps, not just the answer',
            'Assigning a perspective changes register and depth more reliably than asking for "a better answer"',
            '"Now critique that and rewrite the weakest part" is a cheap quality upgrade',
            'Request several distinct options when you are still exploring what you want',
          ],
        },
        {
          heading: 'Prompting Is Really Just Thinking Clearly',
          body: 'Here is the part that transfers far beyond AI. To write a good prompt you must decide what you want, who it is for, what a good result looks like, and what would make it wrong. That is specification — the same skill behind a solid essay plan, a clear message to a teacher, or a brief for a group project. This is why "prompt engineering" as a job title is fading while the underlying ability keeps mattering: the interfaces get easier, but knowing exactly what you are asking for never stops being the hard part. If you cannot describe the outcome, no tool can produce it.',
          bullets: [
            'Vague prompts come from vague thinking, and no tool fixes that for you',
            'The clarity you build here shows up in essays, applications and job interviews',
            'Interfaces will keep improving; the ability to specify a good outcome will not become obsolete',
            'If you cannot explain what "good" looks like, that is your first task, not the model\'s',
          ],
        },
      ],
    },
    {
      id: 'at2l2',
      diagram: 'StudyingWithAI',
      title: 'Studying With AI vs Letting It Study For You',
      slides: [
        {
          heading: 'The Fluency Trap',
          body: 'Reading a brilliant explanation feels like learning. It is not. That feeling is fluency — the ease of processing something clear — and your brain reliably mistakes it for competence. This is why you can nod along to a worked example and then freeze at a nearly identical exam question. AI produces exceptionally fluent explanations on demand, which makes the trap deeper than it has ever been. The test is simple and slightly uncomfortable: close the tab and reproduce it. Explain it aloud, or write it out from memory. If you cannot, you did not learn it, however good the explanation felt.',
          bullets: [
            'Understanding an explanation and being able to produce it are different abilities',
            'Fluency feels like mastery, which is exactly why it fools careful people too',
            'The check is retrieval: close everything and reproduce the idea unaided',
            'Struggling for a bit before you get help is not wasted time — it is the part that builds the memory',
          ],
        },
        {
          heading: 'What AI Is Genuinely Excellent For',
          body: 'Used as a study tool rather than an answer machine, it is close to unfair how useful it is. It will generate unlimited practice questions at the exact difficulty you ask for. It will mark your attempt and explain where your reasoning broke rather than just what the answer was. It will explain the same concept five different ways until one lands. It will play the examiner, or the sceptic who attacks your essay argument. It is available at eleven at night when nobody else is. All of these keep you doing the cognitive work while removing the bottleneck of waiting for someone to help.',
          bullets: [
            'Endless practice questions and past-paper-style problems, tuned to your level',
            'Feedback on your reasoning, which is more useful than the correct answer alone',
            'Re-explanation from a different angle when a textbook has lost you',
            'Adversarial practice: ask it to attack your argument and find your weakest point',
          ],
        },
        {
          heading: 'The Line: Who Is Doing the Thinking?',
          body: 'Forget rules for a second and use one question. If you ask AI to generate practice questions, you do the thinking. If you ask it to check your reasoning, you did the thinking. If you ask it to write your conclusion, it did the thinking. If you ask it to explain a comment your teacher made, you are doing the thinking with better information. The tool is not the variable — the same app is a tutor or a substitute depending on where the cognitive effort lands. Notice which one you are choosing, especially at eleven at night when the deadline is tomorrow and the honest answer is uncomfortable.',
          bullets: [
            'Ask before each use: after this, will I be able to do it myself?',
            'Tutor pattern: AI asks you questions, checks your work, explains your mistakes',
            'Substitute pattern: AI produces the artefact and you tidy the wording',
            'Deadline pressure is exactly when the line blurs, so decide your rule in advance',
          ],
        },
      ],
    },
    {
      id: 'at2l3',
      diagram: 'AcademicHonestyLine',
      title: 'Academic Honesty, Concretely',
      slides: [
        {
          heading: 'What Is Clearly Fine',
          body: 'Start with the uncontroversial part, because vague guilt helps nobody. Using AI to explain a concept you did not understand is fine. Generating practice questions is fine. Getting feedback on a draft you wrote is fine. Asking it to check your grammar, or to explain why a sentence is clumsy, is fine. Using it to plan your revision timetable, to summarise a reading you also read, or to translate a word is fine. In all of these, the submitted work is still yours — the AI improved your understanding or your process, not your output. This is the same category as a tutor, a study group, or a helpful older sibling.',
          bullets: [
            'Explanation, practice, feedback and planning are normal study support',
            'Grammar and clarity help on your own sentences is editing, not authorship',
            'Being told why something is wrong is more legitimate and more useful than being given the right answer',
            'The submitted thinking is still yours in every one of these cases',
          ],
        },
        {
          heading: 'What Is Clearly Cheating',
          body: 'Also uncontroversial, and worth saying plainly. Submitting AI-generated text as your own writing is cheating. So is having it write your code, your analysis, your coursework or your personal statement while you present the result as your work. It is cheating whether or not you edit the wording afterwards. The messy middle — where you wrote a rough version and asked for a rewrite that then replaced your voice entirely — is genuinely a grey zone, and the honest test is whether you could explain and defend every claim in the piece as your own reasoning. If you could not, you have crossed the line regardless of how much you retyped.',
          bullets: [
            'Passing off generated text or code as your own work is the core violation',
            'Paraphrasing the output does not change whose thinking it was',
            'Personal statements and reflective work are the worst possible place to fake a voice',
            'Test: could you defend every sentence if a teacher asked you about it right now?',
          ],
        },
        {
          heading: 'Why Teachers Can Often Tell',
          body: 'Detection software is unreliable in both directions and flags plenty of innocent students, so most experienced teachers do not lean on it. They notice other things. Your written voice is distinctive, and a sudden shift is loud. Generated work tends to be smooth, evenly balanced, slightly generic, and oddly free of the specific detail your class actually covered. It rarely references the thing your teacher said in week three, or the odd example from the set text everyone argued about. And the simplest check of all still works: a two-minute conversation about what you wrote. Someone who did the thinking can talk about it. Someone who did not, cannot.',
          bullets: [
            'Voice mismatch is the biggest signal — teachers have read a lot of your writing',
            'Generated work is often fluent but generic, missing class-specific detail and lived examples',
            'AI detectors produce false accusations too, which is why conversations beat software',
            'A short viva about your own argument is very hard to fake and increasingly common',
          ],
        },
        {
          heading: 'The Real Cost Is Not Getting Caught',
          body: 'Getting caught is a bad week. The larger cost is quieter. Writing is how you find out whether you actually understand something — the moment your argument collapses in paragraph three is the moment you learn where the gap is. Outsource that and you skip the only part that builds the skill. Then the exam arrives with no laptop, or the interview asks you to reason aloud, or a university course assumes you can construct an argument, and there is nothing underneath. Meanwhile, in a world where anyone can generate competent text instantly, the people who can genuinely think and judge become more valuable, not less. Trading that away for a few hours is a poor deal.',
          bullets: [
            'Writing is not the record of thinking, it is the process of thinking',
            'The skill gap only appears later, when it is expensive and visible',
            'Exams, interviews and viva-style assessments are increasing precisely because of this',
            'Generated text is now cheap; verified human judgement is not',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'Every school and exam board has its own rules, and they are changing fast. Read yours, and when a task is ambiguous, ask before you submit rather than after.',
          bullets: [
            'Find your school\'s actual written policy — do not rely on what someone told you',
            'When permitted, disclose how you used AI; disclosure almost never gets you in trouble, hiding it does',
            'Keep drafts and notes — a visible working process is strong evidence that the thinking was yours',
          ],
        },
        {
          role: 'security-se',
          label: 'Staying Safe Online',
          body: 'Think about what you are uploading. Coursework, personal statements and anything about other people can end up somewhere you did not intend.',
          bullets: [
            'Do not paste other people\'s work, private messages or anything with classmates\' details into a chatbot',
            'Check whether the tool trains on your inputs, and turn that off if you can',
            'Free tools with no clear policy are the ones to be most careful with',
          ],
        },
        {
          role: 'developer',
          label: 'If You Build Things',
          body: 'For a coding assignment, the assessed skill is usually your ability to reason about the problem, not to produce working output. Copying a solution you cannot explain leaves you unable to debug it — which shows up immediately.',
          bullets: [
            'If you cannot explain why each line is there, you have not finished the assignment',
            'Use AI to explain an error message or review your approach, not to write the submission',
            'Outside coursework, read what it generates properly — accepting code you do not understand is how bugs and vulnerabilities ship',
          ],
        },
        {
          role: 'consultant',
          label: 'If People Ask You',
          body: 'Friends will ask you where the line is, usually the night before something is due. Give them the ownership test rather than a lecture, and they might actually use it.',
          bullets: [
            'One question that works: could you defend every sentence if asked about it tomorrow?',
            'Point out the practical risk — voice mismatch and viva questions, not just morality',
            'Offer the alternative: AI can generate practice questions and mark their attempt in the same time it would take to cheat',
          ],
        },
      ],
    },
    {
      id: 'at2l4',
      diagram: 'CheckingAIOutput',
      title: 'Checking What It Gives You',
      slides: [
        {
          heading: 'Verify in Proportion to the Stakes',
          body: 'Checking everything is unrealistic and you will stop doing it within a week. Checking nothing is how a fabricated statistic ends up in your coursework. The workable rule is proportion. Ask what happens if this particular claim is wrong. If the answer is "the sentence reads slightly differently", move on. If it is "I lose marks, mislead a reader, or repeat something false to other people", verify before you use it. Specific, checkable, consequential claims get checked. Phrasing, structure and general explanation do not. This takes about thirty seconds of judgement per piece of work and saves you from the failure mode that actually hurts.',
          bullets: [
            'Always check: statistics, dates, names, quotations, citations, formulas, legal or medical specifics',
            'Rarely check: tone, structure, wording of your own ideas, brainstormed options you will evaluate anyway',
            'The question is not "could this be wrong" but "what happens if it is"',
            'Anything you will repeat to another person deserves a check',
          ],
        },
        {
          heading: 'How to Actually Check, Fast',
          body: 'Open the source. Not the model\'s description of the source, the source. If it named a study, find the study; if it cannot be found in a minute, treat it as fabricated. For a factual claim, look for a second, independent confirmation — independent meaning genuinely separate, not three sites all quoting the same original post. For maths, redo the calculation. For code, run it. Asking the same model to double-check itself is the weakest method available, because it will happily generate a confident confirmation of its own error using exactly the same process that produced it.',
          bullets: [
            'Open cited sources yourself — an unfindable source is a fabricated source',
            'Two sources repeating one origin is one source; check where the claim actually started',
            'Re-run maths and execute code rather than reading a description of what it does',
            'Self-checking by the same model catches far less than people assume',
          ],
        },
        {
          heading: 'Know Enough to Spot the Error',
          body: 'There is an uncomfortable dependency here: your ability to catch mistakes scales with how much you already know. In a subject you understand, an error jumps out. In a subject you are just starting, everything reads as equally plausible, so you cannot supervise the output at all. That is the exact situation you are in when you use AI for a topic you are still learning — which is most of school. It is another argument for using AI to build understanding rather than to replace it. The more you know, the more safely you can use it, which is the opposite of how people usually assume it works.',
          bullets: [
            'You cannot verify what you do not understand, so beginners face the highest risk',
            'Learning the material makes AI more useful to you, not less necessary',
            'In an unfamiliar area, weight external sources more heavily than the model\'s answer',
            'Treat unexplained confidence in a topic you cannot judge as a reason to slow down',
          ],
        },
      ],
    },
    {
      id: 'at2l5',
      diagram: 'WhenNotToUseAI',
      title: 'When Not to Use AI',
      slides: [
        {
          heading: 'When the Struggle Is the Point',
          body: 'Some tasks exist to change you rather than to produce an artefact. Practising a language, working through a maths problem set, drafting your first argument in an unfamiliar subject, learning to code — the difficulty is the mechanism. Removing it removes the benefit and leaves you with a finished object and no new capability. Musicians do not get better by listening to recordings of the piece. There is a real version of this that is worth protecting: sit with the problem for a while, get properly stuck, then ask for a hint rather than the answer. Effort first, help second, is a rule that survives contact with real deadlines.',
          bullets: [
            'If the task is meant to build a skill, shortcutting it defeats the entire purpose',
            'Get stuck first, then ask for a hint — not the solution',
            'Practice, drafting and problem sets are the highest-value places to stay unassisted',
            'The output was never the point in these cases; you were',
          ],
        },
        {
          heading: 'When It Is Not Your Voice to Outsource',
          body: 'Some writing is valuable precisely because it came from you. A personal statement, a message to someone you have hurt, a reflection on your own experience, a note in a card, a text to a friend going through something. Generated text in these contexts reads as slightly hollow even when people cannot say why, and being caught faking sincerity costs more than writing something clumsy but real. There is a middle path — write it yourself and ask for feedback on clarity — that keeps your voice while fixing your grammar. The rule of thumb: if the value is in the fact that you wrote it, write it.',
          bullets: [
            'Personal statements, apologies and condolences lose their function when generated',
            'Admissions readers and interviewers see enormous volumes of generic text and notice',
            'Acceptable middle: your words, AI feedback on clarity and structure',
            'If it matters that it came from you, then it has to come from you',
          ],
        },
        {
          heading: 'When It Is Genuinely the Wrong Tool',
          body: 'Some cases are just bad fits. Real-time facts — prices, scores, timetables, whether something is open — belong to a source that actually knows, not to a model recalling training data. Anything with serious personal consequences, like medical symptoms, legal questions, or a mental health crisis, needs a qualified human, and a fluent answer is actively dangerous because it feels authoritative. Confidential information about other people should not be pasted in at all. And decisions that depend on your values are not information problems: an AI can lay out considerations, but choosing what you care about is not something you can delegate.',
          bullets: [
            'Live, changing facts: use the source that owns the data, not a model',
            'Health, legal and crisis situations: a fluent answer is not a qualified one — go to a real person',
            'Other people\'s private information should never be pasted into a chat box',
            'Value-laden choices can be informed by AI but not made by it',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Which change is most likely to improve a weak AI output?',
      options: [
        'Adding polite phrasing and please',
        'Repeating the same prompt until you get a better roll',
        'Supplying context, an example of what good looks like, and the format you want',
        'Making the prompt as short as possible so it is not confused',
      ],
      correct: 2,
    },
    {
      q: 'What is the "fluency trap" in studying?',
      options: [
        'Mistaking how easy an explanation was to read for actually having learned it',
        'Writing so quickly that you make careless errors',
        'Using vocabulary that is too advanced for the marker',
        'Reading the same passage repeatedly until it loses meaning',
      ],
      correct: 0,
    },
    {
      q: 'Which of these is the clearest example of using AI as a tutor rather than a substitute?',
      options: [
        'Asking it to write your conclusion and then changing some words',
        'Asking it to generate practice questions and mark your attempts',
        'Asking it to produce an essay you will use as a template',
        'Asking it to rewrite your draft entirely in a stronger style',
      ],
      correct: 1,
    },
    {
      q: 'Why do experienced teachers often rely on conversation rather than detection software?',
      options: [
        'Detection software is illegal in most schools',
        'Conversations are faster to run at scale than software checks',
        'Detectors are unreliable and produce false accusations, while a discussion reveals whether you did the thinking',
        'Software cannot read handwritten work',
      ],
      correct: 2,
    },
    {
      q: 'What is the strongest argument against outsourcing your essays, beyond the risk of being caught?',
      options: [
        'AI writing is always obviously worse than student writing',
        'It uses a lot of energy',
        'It breaks the terms of service of most AI tools',
        'Writing is how you discover whether you understand something, so skipping it skips the learning',
      ],
      correct: 3,
    },
    {
      q: 'You want to check a statistic an AI gave you. What is the weakest verification method?',
      options: [
        'Asking the same model whether it is sure',
        'Finding the original study or dataset',
        'Looking for an independent source that does not cite the same origin',
        'Checking whether the number is even plausible given what you know',
      ],
      correct: 0,
    },
    {
      q: 'Why are beginners in a subject at the highest risk from AI errors?',
      options: [
        'Models perform worse on introductory topics',
        'They cannot tell a wrong answer from a right one, so they cannot supervise the output',
        'Beginners tend to write longer prompts',
        'Introductory material is missing from training data',
      ],
      correct: 1,
    },
    {
      q: 'Which task is the clearest case for not using AI at all?',
      options: [
        'Summarising a chapter you have already read',
        'Getting feedback on the structure of your draft',
        'Writing an apology to a friend you upset',
        'Generating revision questions for a test',
      ],
      correct: 2,
    },
  ],
};

export default atM2;
