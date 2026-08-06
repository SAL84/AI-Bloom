import type { CourseModule } from '../../types/course';

const vcM4: CourseModule = {
  id: 'vc-m4',
  title: 'Is It Any Good?',
  icon: 'brain',
  summary: 'A practical, no-statistics way to know whether what you built actually works. A short list written before you build, run in full after every change, tested by someone who is not you — plus extra care where an AI feature can be confidently wrong.',
  lessons: [
    {
      id: 'vc4l1',
      title: 'Write Down What Good Looks Like First',
      sectionLabel: 'Knowing What You Have',
      diagram: 'GoodLooksLike',
      slides: [
        {
          heading: 'Five to Ten Sentences',
          body: 'Before you build, write down the things this must get right. Not a document — a short list of plain sentences, five to ten of them. Each one should be something you could check by hand in under a minute. "A visitor can submit the form and I get an email within a minute." "Nobody can see anyone else\'s bookings." "Entering a date in the past is refused with a clear message." "It is usable on a phone." That list is your definition of working. Everything else — how it looks, what it is called, which shade of blue — is preference, and preference is allowed to change. This list is not, unless you deliberately decide to change it.',
          bullets: [
            'Five to ten plain sentences, each checkable by hand in a minute',
            'Cover the core action, the boundaries, and the obvious wrong inputs',
            'This list is what "working" means; everything else is preference',
            'Keep it in one file next to your spec, not scattered in chat history',
          ],
        },
        {
          heading: 'Why Before Matters',
          body: 'Writing the list before you build is the whole trick, and it is easy to skip. Written afterwards, the list mysteriously describes what you happen to have. You look at the screen and write down what it does, which tests nothing. Written before, it comes from what you actually need, and some of the items will fail. That is the point. It also protects you from a subtler drift. As you build, your idea of a good result quietly reshapes itself around whatever turned out to be easy. A list written while your eyes were clear is a record of what mattered, before the building process started negotiating with you.',
          bullets: [
            'A list written afterwards just describes what you got',
            'Items that fail on the first run are the ones earning their place',
            'Your standard for good drifts towards what turned out to be easy',
            'The list is a record of what mattered before the building started',
          ],
        },
        {
          heading: 'Include the Nevers',
          body: 'At least a couple of items should be things that must not happen. These are the ones nobody notices when they break. "One user must never see another user\'s data." "Nothing is emailed to a customer without me pressing a button." "It must not let the same slot be booked twice." Positive checks confirm the thing you were looking at anyway. Negative checks catch the failures that are invisible from the outside. Nobody complains about seeing data they should not have seen, because they are not aware they should not have seen it. If a never-item is genuinely hard to check by hand, treat that as a signal. The feature deserves more care than a prototype normally gets.',
          bullets: [
            'Include two or three things that must never happen',
            'Negative failures are silent; nobody reports seeing too much',
            'Double-booking, double-charging and cross-visibility are classic silent failures',
            'A never-item you cannot check by hand is a feature that needs real help',
          ],
        },
        {
          heading: 'Keep It Short Enough to Use',
          body: 'A thirty-item checklist will be run twice and abandoned. Ten items that take five minutes will be run for months. Ruthlessness here is a feature, not laziness. Pick the things that would actually matter if they broke, and let the rest go. You can add an item later, when something breaks in a way you did not anticipate. In fact that is exactly when to add one, since a failure that surprised you is proof of a gap in the list. A checklist that grows slowly, one real failure at a time, ends up fitting your specific project far better than a comprehensive one copied from somewhere else.',
          bullets: [
            'Ten items you will actually run beat thirty you will abandon',
            'Add an item whenever something breaks in a way you did not predict',
            'The list should grow from real failures, not from imagined completeness',
            'If a run takes more than about five minutes, it is too long to survive',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'You have just read why the list has to come before the building. So stop here and write yours — for the project you are actually making — before you change another thing.',
          exercise: {
            task: 'Fill in the scaffold below for your own project, with each item checkable by hand in under a minute. Then run the list once, today, and see what fails.',
            copyText: 'My checklist:\n1. [the core action, end to end — who does what, and what happens]\n2. [what you receive when it works — the email, the record, the message]\n3. [what a wrong input gets — refused, with a clear message]\n4. [something that must work on a phone]\n5. [one more thing that would genuinely matter if it broke]\n\nNEVER: [the one thing that must not happen, even once]',
            selfCheck: [
            'Every item on the list can be checked by hand in under a minute',
            'At least one item failed when you ran the list today',
            'The NEVER line describes a failure nobody would report on their own',
            ],
          },
        },
      ],
    },
    {
      id: 'vc4l2',
      title: 'Run the Whole List Every Time',
      diagram: 'WholeListEveryTime',
      slides: [
        {
          heading: 'The Change You Made Is Not the Only Thing That Changed',
          body: 'Here is the most useful idea borrowed from professional practice, stripped of everything technical. After any change, check the whole list, not just the part you touched. It is tempting to test only the new bit. You changed the booking form, so you test the booking form. But an AI editing your project may adjust things elsewhere, and shared pieces get touched in ways you were not told about. The entire value of running the full list is catching the break you were not looking for. That is precisely the break that otherwise reaches a real user, because by definition it sits in a place you had no reason to look.',
          bullets: [
            'Check every item after every change, not just the part you altered',
            'Changes have effects in places you were not told about',
            'The point is catching the break you were not looking for',
            'Unwatched areas are exactly where a break survives long enough to reach users',
          ],
        },
        {
          heading: 'Check Immediately, Not Later',
          body: 'Run the list right after each change, while you still know what you did. Make four changes and then check, and a failure gives you four suspects with no way to choose between them. You are back to guessing. Checked immediately, a failure has exactly one cause, and the fix is usually obvious. This is the same habit as changing one thing at a time, seen from the other end. Together they form the core loop of building without being able to read the code: change one thing, check everything, save a copy, repeat. It is unglamorous, and it is genuinely what makes the difference.',
          bullets: [
            'Change one thing, check everything, save a copy, repeat',
            'Four changes then a check gives you four suspects and no evidence',
            'Immediate checking is what keeps the cause identifiable',
            'This loop is the whole discipline; there is nothing more clever underneath',
          ],
        },
        {
          heading: 'Write Down What You Saw',
          body: 'Keep a plain note of each run: the date, what you changed, and which items passed. It takes a minute, and it gives you something you otherwise never have — a history. When something is wrong next week, you can see when it was last known good and what happened in between. That usually points straight at the cause. It also protects you from a specific unpleasantness: not being sure whether something ever worked. A short log turns "I think it used to work" into "it passed on Tuesday, and I changed the email step on Wednesday". That is a completely different quality of information.',
          bullets: [
            'Log the date, the change and the results in a plain file',
            'A history tells you when something was last known good',
            'It turns "I think it worked" into a specific date and a specific change',
            'One minute per run buys you the only record of your project you will have',
          ],
        },
      ],
    },
    {
      id: 'vc4l3',
      title: 'Test With Someone Who Is Not You',
      diagram: 'TestWithOthers',
      slides: [
        {
          heading: 'You Cannot Test Your Own Thing',
          body: 'You know where to click. You know the form wants the date in a particular way. You know which button is the real one, and you unconsciously avoid the three things that do not work. None of this is available to anyone else, and none of it is visible to you. The knowledge is invisible from the inside. That is exactly why your own testing is close to worthless, except for confirming that the parts you built do what you meant. The only cure is to watch someone else use it. Not describe it to them. Not demo it. Hand it over and be quiet.',
          bullets: [
            'You avoid your own broken paths without noticing you are doing it',
            'Your testing confirms your intentions, not the experience',
            'Only another person can walk the paths you unconsciously route around',
            'Hand it over rather than demonstrating it',
          ],
        },
        {
          heading: 'How to Watch Properly',
          body: 'Give them a task, not a tour. "Book yourself a slot for next Tuesday" — and then say nothing at all. The silence is the hard part, and it is where all the information is. Every moment they hesitate, hover, or ask "do I press this?" is a design problem you cannot see. Do not explain. Do not rescue them. Do not say "you just need to click the little one at the top". Write down where they paused. Ten minutes of this will teach you more than a day of your own clicking. Afterwards, ask what they expected to happen at the moment they hesitated. That is usually more useful than asking what they thought of it.',
          bullets: [
            'Give a task, then stay silent — the silence is where the findings are',
            'Every hesitation marks something unclear; note it rather than explaining it',
            'Do not rescue them; rescuing destroys the only data you came for',
            'Afterwards ask what they expected at each pause, not what they thought overall',
          ],
        },
        {
          heading: 'Pick Someone Who Will Be Honest',
          body: 'Your friends will be kind, and kindness is the enemy here. Try to find someone who resembles the actual user. Then set the framing to make criticism easy: "I need to find what is broken, so tell me every annoying thing." If you only have friends available, ask for specifics rather than opinions. "Where did you hesitate?" gets more truth than "what do you think?". Watch what they do rather than trusting what they say. People are polite, and their hands are not. Someone who says it was fine, while spending twenty seconds hunting for a button, has told you two different things. The hands are the one to believe.',
          bullets: [
            'Frame it as hunting for faults so criticism is the helpful response',
            'Ask "where did you hesitate?" rather than "what did you think?"',
            'Watch behaviour rather than trusting reported opinions',
            'When words and hands disagree, believe the hands',
          ],
        },
      ],
    },
    {
      id: 'vc4l4',
      title: '"It Worked When I Tried It"',
      diagram: 'WorkedWhenITried',
      slides: [
        {
          heading: 'One Success Is Not Evidence',
          body: 'The most dangerous sentence in prototype building is "it worked when I tried it". You tried it once. On your machine, on your network, with your data, in the way you had in mind, at a moment when nothing else was happening. That is a single observation under ideal conditions. It tells you the thing is capable of working, rather than that it does work. This is not a demand for rigour you do not have time for. It is simply noticing the difference between "I have seen it succeed" and "I have reason to believe it succeeds for other people". Those are genuinely different claims, and most prototype disappointment lives in the gap between them.',
          bullets: [
            'One success under ideal conditions shows capability, not reliability',
            '"I saw it work" and "it works for others" are different claims',
            'Your machine, data, network and habits are all part of the test conditions',
            'Most disappointment lives in the gap between those two sentences',
          ],
        },
        {
          heading: 'Try the Awkward Cases',
          body: 'Reliability comes from deliberately trying the things you would never do naturally. Submit the form empty. Put a name in the email box. Paste a paragraph into a field expecting a word. Press the button twice quickly. Use it on a phone. Refresh in the middle. Go back and try to submit again. These take five minutes, and they are where prototypes break. Generated software handles the intended path well and the unintended paths thinly. It is also worth trying it as a brand new person: a fresh browser, not signed in, no history. Plenty of prototypes only work for the person who has been using them all week, and nobody notices until a stranger arrives.',
          bullets: [
            'Empty fields, wrong types, absurd lengths, double clicks, refreshes',
            'Generated code handles the intended path well and the rest thinly',
            'Try it as a new person: fresh browser, not signed in, no saved data',
            'Five minutes of awkward cases finds most of what a prototype hides',
          ],
        },
        {
          heading: 'The Same Thing, Twice, Tomorrow',
          body: 'Some failures only appear with time or repetition. Something works once and fails on the second attempt, because a value is left over from the first. Something works today and fails tomorrow, because a temporary permission expired overnight. Something works with three records and crawls with three hundred. You cannot check for all of this, and you should not try. But do the cheap version. Run your checklist twice in a row, and run it again the next day before you show anyone. Those two habits catch a surprising share of the failures that otherwise show up during a demo, which is the worst possible time to find them.',
          bullets: [
            'Run the list twice in a row — second-attempt failures are common',
            'Run it again the next day; some things expire overnight',
            'Try it with more data than you have been testing with',
            'These two cheap habits catch most of the classic demo-day failures',
          ],
        },
      ],
    },
    {
      id: 'vc4l5',
      title: 'When the AI Inside Your App Can Be Wrong',
      diagram: 'AIFeatureWrong',
      slides: [
        {
          heading: 'Confidently Wrong Looks Exactly Like Right',
          body: 'If your app uses AI to summarise, answer, classify or draft, you have added a component that fails differently from everything else in software. A broken button looks broken. A wrong summary looks like a summary. It will be well written, plausible and specific, and nothing on screen distinguishes it from a correct one. This matters most where users cannot check the answer themselves, which is usually why they are asking. Nothing here says avoid AI features. It says that "it gave a good answer when I tried it" is even weaker evidence here than elsewhere, because this failure mode is specifically shaped to look fine.',
          bullets: [
            'Wrong output arrives looking exactly like correct output',
            'Confidence in the writing carries no information about accuracy',
            'Riskiest where users cannot verify the answer — usually the reason they asked',
            'Trying it a few times is even weaker evidence than usual here',
          ],
        },
        {
          heading: 'Check It the Boring Way',
          body: 'You do not need statistics to get useful evidence. Collect ten or twenty real examples: actual customer emails, actual documents, actual questions. Write down what a good answer would be for each. Then run them through and compare, by eye, one at a time. Do it again whenever you change the instructions you give the AI, because those changes have effects you will not predict. This is an afternoon of dull work, and it is genuinely how the professional version starts too. The rigorous version differs in scale and measurement, not in the underlying idea: compare output against answers you decided on in advance.',
          bullets: [
            'Ten to twenty real examples with the answer you would accept, written first',
            'Compare by eye, one at a time — this is enough for a prototype',
            'Re-run them whenever you change the AI\'s instructions',
            'Same idea as professional evaluation, just smaller and without the maths',
          ],
        },
        {
          heading: 'Design for Being Wrong',
          body: 'The most effective protection is not better prompting. It is where you put the output. Keep AI results as drafts a person approves, rather than actions taken automatically. Show the source, so someone can check it. Make it easy to correct and easy to report. Never let an unreviewed AI output send an email to a customer, change a record, or make a decision about a person. And say plainly in the interface that the answer came from AI and may be wrong. Users who know that read differently, and they catch things you never will. Designing for wrongness is cheaper and far more reliable than trying to eliminate it.',
          bullets: [
            'Draft-for-approval rather than automatic action, wherever a person is affected',
            'Show sources so the answer can be checked without trusting it',
            'Say in the interface that it is AI-generated and may be wrong',
            'Designing around wrongness beats trying to eliminate it',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'If You Are the Builder',
          body: 'You will be tempted to trust the AI feature. It impressed you on the first few examples. That impression is exactly what this failure mode is good at producing.',
          bullets: [
            'Keep your twenty examples in a file and re-run them after every change',
            'Never let an AI feature act on a customer without a person pressing a button',
            'Ask a sceptical colleague to try to make it say something wrong',
          ],
        },
        {
          role: 'security-se',
          label: 'Keeping It Safe',
          body: 'Anything users type reaches the AI. Anything the AI produces reaches your screen. Both directions deserve suspicion before you let strangers in.',
          bullets: [
            'Assume users will paste instructions to make it behave differently — test that',
            'Do not feed it data the current user would not be allowed to see',
            'Never let its output run, send or delete anything without human approval',
          ],
        },
        {
          role: 'developer',
          label: 'If You Have Some Technical Skill',
          body: 'Keep your examples and expected answers in a file the project can run against. Then re-checking takes one command. It is no longer an afternoon of work.',
          bullets: [
            'Store examples and expected answers as data, not in a chat history',
            'Pin what you can — settings, versions, instructions — so results compare cleanly',
            'The strict version of this is the Evals course; here it stays prototype-scale',
          ],
        },
        {
          role: 'consultant',
          label: 'If You Are Advising or Hiring',
          body: 'When someone shows you an AI feature, do not ask what it can do. Ask how they know it is right. Asking early saves an awkward conversation later.',
          bullets: [
            'Ask what examples they tested against, and what they expected beforehand',
            'Ask what happens when it is wrong and who notices',
            'A feature acting unattended on customers needs evaluation, not a checklist',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why write your list of must-get-right items before building rather than after?',
      options: [
        'A list written afterwards just describes what you built',
        'It is required by most of the AI building tools',
        'Lists are quicker to write when you know less about the project',
        'It makes the build itself run faster',
      ],
      correct: 0,
    },
    {
      q: 'You changed one screen. Which items on your checklist should you re-check?',
      options: [
        'Only the item that covers that one screen',
        'None — you already saw it working while you changed it',
        'All of them — the value is catching the break you missed',
        'Only the items that failed the last time',
      ],
      correct: 2,
    },
    {
      q: 'Why should a couple of your checklist items describe things that must never happen?',
      options: [
        'Negative items are quicker to test than positive ones',
        'They are required for data protection registration',
        'Users report them more reliably than other faults',
        'Nobody reports seeing data they should not have seen',
      ],
      correct: 3,
    },
    {
      q: 'What is the right way to watch someone else test your prototype?',
      options: [
        'Demonstrate it first so they know how it works',
        'Give them a task and then stay completely silent',
        'Sit beside them and explain each screen as they reach it',
        'Send it over and ask for their overall opinion afterwards',
      ],
      correct: 1,
    },
    {
      q: 'What does "it worked when I tried it" actually establish?',
      options: [
        'That it is ready for other people to use it',
        'That the remaining issues are only cosmetic',
        'That it can work, once, under ideal conditions',
        'That the core logic is all correct',
      ],
      correct: 2,
    },
    {
      q: 'Why is a wrong answer from an AI feature harder to catch than an ordinary bug?',
      options: [
        'It only occurs under very heavy load',
        'It appears in the console rather than on the page',
        'It always happens on the first request of the day',
        'It arrives looking exactly like a correct answer',
      ],
      correct: 3,
    },
    {
      q: 'What is a realistic, no-statistics way to check an AI feature in a prototype?',
      options: [
        'Collect twenty real examples and compare answers by eye',
        'Ask the same AI whether its answer was correct',
        'Measure the average response length across a large sample',
        'Trust it until a user actually complains',
      ],
      correct: 0,
    },
    {
      q: 'Which design choice best limits the damage when an AI feature is wrong?',
      options: [
        'Making the wording of its answers more confident',
        'Hiding the fact that AI is involved to avoid alarming users',
        'Keeping the output as a draft a person approves',
        'Running it more frequently so errors average out',
      ],
      correct: 2,
    },
  ],
};

export default vcM4;
