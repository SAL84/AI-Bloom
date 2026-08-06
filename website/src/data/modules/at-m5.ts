import type { CourseModule } from '../../types/course';

const atM5: CourseModule = {
  id: 'at-m5',
  title: 'Your Future With AI',
  icon: 'brain',
  summary: 'Which skills are gaining value and which are losing it, what the emerging roles actually involve, how to choose what to study, and how to keep up without chasing every announcement.',
  lessons: [
    {
      id: 'at5l1',
      diagram: 'SkillsShift',
      title: 'Which Skills Gain Value, Which Lose It',
      slides: [
        {
          heading: 'The Pattern Behind the Disruption',
          body: 'Technology has repeatedly automated the execution of a task while increasing the value of judging whether the output is any good. Spreadsheets did not eliminate accountants; they eliminated manual arithmetic and raised the value of financial judgement. AI follows the pattern with a wider reach, because it touches tasks previously considered safely cognitive: drafting, summarising, first-pass analysis, routine code. What tends to gain value is deciding what is worth doing, judging quality, and taking responsibility for the result. What tends to lose value is producing a competent first draft of something standard.',
          bullets: [
            'Execution gets cheaper; judgement about what to execute and whether it is right gets dearer',
            'Producing a competent standard draft is no longer scarce, in text, code or images',
            'Deciding what is worth doing, and owning the outcome, remains hard to automate',
            'Whole jobs are rarely replaced; specific tasks inside them are, and roles reshape around that',
          ],
        },
        {
          heading: 'Skills Worth Investing In',
          body: 'Judgement in a specific domain, because you cannot evaluate output in a field you do not understand. Genuine communication, meaning the ability to explain something to a particular person and change what they do, rather than merely producing prose. Working with other people, which includes disagreement, negotiation and trust. Anything physical and situational, which remains far harder to automate than office work. Original problem framing — noticing that everyone is answering the wrong question. And the compound skill of learning quickly, since the specific tools you master this year will not be the ones you use later.',
          bullets: [
            'Deep domain knowledge, because supervision requires understanding',
            'Communication as persuasion and clarity, not as text production',
            'Interpersonal work: collaboration, negotiation, earning trust',
            'Problem framing — deciding which question is the right one to ask',
          ],
        },
        {
          heading: 'The Awkward Bit About Entry-Level Work',
          body: 'Traditionally you built judgement by doing large amounts of routine work — the research memo, the basic analysis, the simple code, the first draft nobody wanted to write. That work taught you what good looks like. It is exactly the work most exposed to automation, which creates a genuine problem: how do you develop expert judgement if the apprenticeship tasks disappear? Nobody has fully solved this. What you can do is be deliberate. Do some work unassisted specifically to build the underlying skill. Review AI output critically rather than accepting it. Seek roles and projects where you are given real responsibility early.',
          bullets: [
            'Routine junior tasks were how judgement was built, and they are the most automatable',
            'Compensate deliberately: practise unassisted, and critique output instead of accepting it',
            'Look for experiences with real responsibility rather than volume of routine tasks',
            'Being the person who can tell good from bad output is the fastest way to become useful',
          ],
        },
      ],
    },
    {
      id: 'at5l2',
      diagram: 'AICareerMap',
      title: 'Jobs Now and Jobs Emerging',
      slides: [
        {
          heading: 'Roles That Already Exist',
          body: 'Beyond research scientists, which is a small and highly specialised field, there is a large practical layer. Machine learning and AI engineers build and deploy systems. Data engineers make the data usable, which is most of the actual work in most organisations. AI product managers decide what gets built and for whom. Evaluation specialists design ways to measure whether a system is actually working, a role that barely existed a few years ago and is now central. Policy, governance and compliance specialists translate between technical reality and law. Most of these are not research jobs and do not require a doctorate.',
          bullets: [
            'ML and AI engineering: building, deploying and maintaining systems in production',
            'Data engineering: unglamorous, in constant demand, and the bottleneck almost everywhere',
            'Evaluation and testing: designing measurements of whether a system actually works',
            'Policy, governance and compliance: increasingly required as regulation arrives',
          ],
        },
        {
          heading: 'Roles Emerging at the Boundary',
          body: 'The fastest growth is often at the join between AI capability and a specific domain. People who deploy systems inside real organisations and adapt them to messy reality. People who work out how a hospital, a court, a school or a factory should actually use these tools, which requires understanding the institution as much as the technology. People who audit systems for safety and bias. People who design the human-AI interaction, which is a distinct and underrated craft. The common feature is that none of them are purely technical — they need someone fluent in the technology and fluent in something else.',
          bullets: [
            'Deployment and adaptation roles: making a general system work in one messy real setting',
            'Domain specialists who understand AI, in medicine, law, education, manufacturing',
            'Auditing and assurance: independently testing systems for safety, bias and reliability',
            'Interaction design: deciding how people and systems actually work together',
          ],
        },
        {
          heading: 'The Bigger Category: Everyone Else',
          body: 'Do not narrow your thinking to jobs with AI in the title. The larger effect is on ordinary roles that now include AI as a tool. A journalist who uses it well beats one who does not. Same for a lawyer, a doctor, a designer, a teacher, an electrician quoting jobs, a nurse writing notes. Being the person in a normal profession who understands what these tools do and do not do is a durable advantage, and it does not require you to become an engineer. This is also the honest answer to "will AI take my job": more often it changes what the job consists of, and the people who adapt do well.',
          bullets: [
            'Most AI-related opportunity is inside existing professions, not in AI job titles',
            'Being the capable AI user on a normal team is a real and immediate advantage',
            'You do not need to build models to benefit substantially from understanding them',
            'The trades and hands-on work are considerably less exposed than office work',
          ],
        },
      ],
    },
    {
      id: 'at5l3',
      diagram: 'WhatToStudy',
      title: 'What to Study',
      slides: [
        {
          heading: 'Do Not Chase the Trend Directly',
          body: 'A tempting error is to pick whatever field looks hottest right now. The problem is timing: a degree takes years, and the market you graduate into is not the one you applied in. Fields that look crowded can be starved later, and the reverse. A more robust approach is to pick something you will actually work hard at — genuine interest sustains effort in a way strategy does not — and make sure it builds transferable foundations. Depth in almost any rigorous subject plus real AI fluency is a strong position. Shallow familiarity with a trending topic and no depth in anything is a weak one.',
          bullets: [
            'You cannot time the job market across the length of a degree, so do not try',
            'Interest is a practical advantage because it sustains sustained effort',
            'Depth in one rigorous field plus AI fluency beats surface knowledge of the trend',
            'Employers hire demonstrated capability more than subject labels',
          ],
        },
        {
          heading: 'Foundations That Keep Paying',
          body: 'Some things stay useful across whatever happens. Mathematics, especially probability and statistics, because so much of this field is statistical and because it makes you very hard to fool with numbers. Programming, at least to the level where you can read code and automate things, whatever your field. Writing and argument, because clear thinking and clear expression are the same skill viewed twice. Some understanding of how societies and institutions work, since the hard problems here are increasingly about deployment and governance rather than algorithms. And one domain you know properly, whatever it is.',
          bullets: [
            'Probability and statistics: the language of this entire field, and a lie detector for numbers',
            'Programming literacy, even if you never work as a developer',
            'Writing and structured argument, which remain the core of thinking clearly',
            'One real domain of your own, plus enough social and institutional understanding to deploy anything',
          ],
        },
        {
          heading: 'Evidence Beats Credentials, Increasingly',
          body: 'Formal qualifications still open doors, but demonstrated ability opens more of them than it used to, particularly in technology. Things you have built, written, shipped or contributed to are legible evidence in a way a transcript is not. This is genuinely good news if you are impatient: you can start now, and a small finished project beats a large imagined one. It is also a reason not to treat the choice of degree as final. Plenty of people working in this field arrived from physics, linguistics, philosophy, design or nothing in particular, and got there by building things and being useful.',
          bullets: [
            'Build small, finished things and keep them somewhere public',
            'Contributing to an existing open project teaches more than starting ten of your own',
            'Write about what you learned — explaining is both proof and practice',
            'Career paths here are unusually non-linear, so a first choice is not a life sentence',
          ],
        },
      ],
    },
    {
      id: 'at5l4',
      diagram: 'AmplifierNotReplacement',
      title: 'Amplifier, Not Replacement',
      slides: [
        {
          heading: 'It Multiplies What You Already Have',
          body: 'Observed repeatedly across fields: AI increases the output of people who already know what they are doing more than it rescues people who do not. An expert asks better questions, spots wrong answers instantly, and knows which parts matter. A novice cannot evaluate what comes back and often accepts a confidently wrong result. There is a real levelling effect too — these tools genuinely help people get started, and access to good explanation is more equal than it has ever been. But the multiplier framing is the useful one: the tool scales your judgement, and scaling nothing gives you nothing.',
          bullets: [
            'Expertise makes the tool more valuable, not less necessary',
            'The ability to recognise a bad answer is what separates useful from dangerous use',
            'Real access benefits exist — good explanation on demand used to be a privilege',
            'A multiplier applied to zero judgement still produces zero',
          ],
        },
        {
          heading: 'What Stays Yours',
          body: 'Accountability does not transfer. If you submit it, publish it, ship it or say it, you own it, and "the AI wrote it" has never worked as a defence and is not going to start. Taste is yours — knowing which of five decent options is the right one for this audience is a judgement built from experience. Deciding what is worth doing at all is yours, since a model can generate options but has no stake in the outcome. And your relationships are yours: trust between people is still the thing organisations run on, and nobody has automated being someone others want to work with.',
          bullets: [
            'Responsibility for output stays with the human who put their name on it',
            'Taste and selection are judgement, and judgement comes from doing the work',
            'Deciding what matters is a values question, not an information problem',
            'Trust and reputation are built between people and cannot be generated',
          ],
        },
        {
          heading: 'Working With It Well',
          body: 'A workable division of labour: use AI for volume, breadth and speed, and use yourself for direction, judgement and the final call. Generate twenty ideas and choose three. Get a rough first version and rewrite it properly. Ask it to argue against your position and see what survives. Have it explain something outside your expertise, then verify with a real source before relying on it. The failure mode to avoid is drifting from using it as a tool to using it as an authority — the point at which you stop evaluating output and start just forwarding it onward.',
          bullets: [
            'AI for breadth and speed; you for direction and the final decision',
            'Use it adversarially — ask it to find the weakness in your own argument',
            'Keep evaluating output; the moment you stop, you have handed over the judgement',
            'If you cannot explain why the output is right, you are not ready to use it',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Using AI adversarially is the fastest version of the amplifier idea, because you keep the position and it does the attacking. Try it on something you have actually argued about.',
          exercise: {
            task: 'Pick an opinion you genuinely hold and have defended out loud — about a game, a film, a rule at your school, a policy. Write it in two or three sentences in your own words, then send the prompt below and read the case against you properly before deciding what you think.',
            copyText: 'Here is a position I hold:\n\n[your two or three sentences]\n\nMake the strongest possible case against it. Then tell me which single part of my argument is weakest and why. Do not be polite about it, and do not tell me what I should conclude.',
            selfCheck: [
            'At least one objection was one you had not thought of yourself',
            'You can name the weakest part of your own argument in one sentence',
            'Your position afterwards is either better defended or genuinely changed — not just repeated',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'Do not aim to become an AI specialist unless you want to. Aim to be the person in whatever you do who understands these tools properly — that is rarer and more useful than it sounds.',
          bullets: [
            'Pick one thing you already care about and get genuinely good at it',
            'Add AI fluency on top rather than replacing depth with it',
            'Practise explaining what these systems can and cannot do — clarity here is uncommon',
          ],
        },
        {
          role: 'security-se',
          label: 'Staying Safe Online',
          body: 'Security is one of the clearest growth areas, because everything being built now needs defending and the attackers have the same tools you do.',
          bullets: [
            'Attack and defence both got faster; the shortage of people who understand both is real',
            'Learn how systems fail, not just how they work — that mindset is the job',
            'Capture-the-flag competitions and home labs are legitimate evidence of ability',
          ],
        },
        {
          role: 'developer',
          label: 'If You Build Things',
          body: 'AI assistance raises the floor on writing code and raises the bar on everything else — architecture, debugging, judging whether a suggestion is any good.',
          bullets: [
            'Learn fundamentals properly; you cannot review generated code you do not understand',
            'Building small, complete, working things teaches more than tutorials ever will',
            'Debugging and system design are becoming the differentiating skills, not typing speed',
          ],
        },
        {
          role: 'consultant',
          label: 'If People Ask You',
          body: 'If you are the person others come to for advice, that is a real skill with a career attached. Translating between technical capability and what someone actually needs is in short supply.',
          bullets: [
            'Practise explaining trade-offs rather than recommending tools',
            'Understanding someone\'s actual problem is most of the value — the tool is the easy part',
            'Being trusted and being right are different; you need both, and the first takes longer',
          ],
        },
      ],
    },
    {
      id: 'at5l5',
      diagram: 'KeepLearning',
      title: 'How to Keep Learning',
      slides: [
        {
          heading: 'Ignore Most of the Noise',
          body: 'This field produces an exhausting volume of announcements, and the vast majority will not matter to you. Trying to track everything is a good way to feel permanently behind while learning very little. A better filter: pay attention to capability changes, meaning something is now possible that genuinely was not before. Ignore incremental version news, leaderboard positions, and the endless supply of confident predictions about what happens in five years. Nobody knows. The people who look most informed are usually just reading more slowly and thinking harder about fewer things.',
          bullets: [
            'Filter for new capabilities, not new versions or benchmark rankings',
            'Most announcements are incremental and will be irrelevant within months',
            'Long-range predictions are entertainment, including the confident ones',
            'Depth on a few things beats shallow awareness of everything',
          ],
        },
        {
          heading: 'Learn by Using, Not by Reading About It',
          body: 'Understanding these tools comes from hitting their limits yourself. Give one a task in something you actually know well and see precisely where it fails — that is more informative than any article. Try the same task across different tools and notice the differences. Push until it breaks. Notice what kinds of question produce reliable answers and what kinds produce confident nonsense. This builds intuition that transfers when everything changes, because you are learning the shape of the technology rather than the interface of one product.',
          bullets: [
            'Test tools in an area you know well, so you can actually judge the output',
            'Deliberately push to failure — the edges teach you more than the successes',
            'Compare tools on the same task to see what is general and what is product-specific',
            'Intuition about failure modes survives version changes; feature knowledge does not',
          ],
        },
        {
          heading: 'The Part That Does Not Change',
          body: 'Underneath the churn, some things have been stable for years and are likely to stay that way: models predict rather than know, they inherit their data, verification remains a human responsibility, and consequential decisions need someone accountable. If you understand those, new developments slot into an existing frame rather than arriving as chaos. The mindset that serves you is curious and unimpressed in equal measure — willing to try things, unwilling to be swept along by either the excitement or the doom. You are going to spend your working life alongside this technology. Being calm and informed about it is a genuine advantage.',
          bullets: [
            'Fundamentals change slowly even when products change weekly',
            'A stable mental model turns news into updates rather than confusion',
            'Neither hype nor doom is an analysis; both are ways of not thinking',
            'Adaptability, judgement and curiosity have outlasted every previous technology shift',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the general pattern when a technology automates part of a job?',
      options: [
        'The entire profession disappears within about a decade',
        'Execution gets cheaper, judgement gets more valuable',
        'Employment in that field grows every single time',
        'Only manual jobs are ever affected',
      ],
      correct: 1,
    },
    {
      q: 'Why is the automation of routine entry-level work a genuine problem, not just an inconvenience?',
      options: [
        'Entry-level work is the most profitable work for employers',
        'It is the only work that cannot be done remotely',
        'Routine work was how people built the judgement experts need',
        'Junior staff are the hardest to replace technically',
      ],
      correct: 2,
    },
    {
      q: 'Which is described as the bottleneck in most organisations trying to use AI?',
      options: [
        'A shortage of research scientists',
        'Insufficient computing hardware',
        'Lack of AI-specific job titles',
        'Getting data into a usable state',
      ],
      correct: 3,
    },
    {
      q: 'What is the recommended approach to choosing what to study?',
      options: [
        'Pick whichever field currently has the most job openings',
        'Pick something you will work hard at that builds transferable skills',
        'Avoid any subject that AI can already partly automate',
        'Choose the shortest qualification so you can enter the job market sooner',
      ],
      correct: 1,
    },
    {
      q: 'Why does AI tend to help experts more than beginners?',
      options: [
        'Experts have access to better versions of the tools',
        'Beginners use the tools far less frequently',
        'Experts ask better questions and can spot a wrong answer',
        'The models are trained mainly on expert-level material',
      ],
      correct: 2,
    },
    {
      q: 'Which of these does not transfer to an AI system when you use one for your work?',
      options: [
        'Responsibility for the output you submit',
        'The time taken to produce a first draft',
        'The volume of options you can generate',
        'The speed of summarising a very long document',
      ],
      correct: 0,
    },
    {
      q: 'What is the most useful filter for keeping up with AI news?',
      options: [
        'Follow every major model release the day it happens',
        'Track the benchmark leaderboards every week',
        'Rely on long-range predictions from well-known figures',
        'Watch for things that just became possible',
      ],
      correct: 3,
    },
  ],
};

export default atM5;
