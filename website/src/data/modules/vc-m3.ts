import type { CourseModule } from '../../types/course';

const vcM3: CourseModule = {
  id: 'vc-m3',
  title: 'When It Breaks',
  icon: 'layers',
  summary: 'It will break. How to read enough of an error message to be useful, and what context the AI needs from you. How to spot and escape the doom loop, where every fix creates a new break, and how to tell when the tool is simply wrong for the job.',
  lessons: [
    {
      id: 'vc3l1',
      title: 'It Will Break, and That Is Normal',
      sectionLabel: 'The Reality',
      slides: [
        {
          heading: 'The Feeling Is Part of the Job',
          body: 'At some point the screen will go white, or blank, or fill with red text. Something in your chest will drop. This happens to everyone who has ever built software, including people who have done it for thirty years. The difference is that they have felt it enough times to know it is temporary and almost always fixable. What makes it worse for a first-time builder is a private theory that competent people do not hit this. So a broken screen feels like proof you are not cut out for it. What it actually is, is Tuesday. Naming the feeling helps more than you would expect. It is unpleasant, it is not information about your ability, and it passes.',
          bullets: [
            'Everyone who builds software breaks it constantly — this is the normal state',
            'Broken is a state to work from, not a verdict on whether you can do this',
            'The panic is real; it is not evidence of anything',
            'Nearly everything is recoverable if you kept a working copy',
          ],
        },
        {
          heading: 'Breaking Is Not the Same as Being Lost',
          body: 'There is a useful distinction between two situations that feel identical. Broken means something specific stopped working, and you can still tell what you changed. Lost means you no longer know what state anything is in, which version was good, or what you have altered since. Broken is a normal working condition and gets fixed in minutes. Lost is genuinely expensive. It is usually the result of many changes made in a row, without checking any of them. Almost every habit in this module exists to keep you in the first situation. Keep copies, change one thing at a time, and check after each change. Those three habits are boring, and they are what separates a bad hour from a lost weekend.',
          bullets: [
            'Broken: one thing stopped and you know what you changed',
            'Lost: you no longer know which version worked or what you altered',
            'Every good habit here exists to stop the first from becoming the second',
            'Copies, one change at a time, check after each — boring and decisive',
          ],
        },
        {
          heading: 'Take the Thirty Seconds',
          body: 'When something breaks, the strongest move is also the least satisfying. Pause before you type anything. Take thirty seconds to notice what you just changed, what you expected, and what actually happened. That turns a panicked "it\'s broken, fix it" into a description someone can act on. It also stops the worst reflex, which is firing off three different fixes at once and losing track of which one caused what. If you are genuinely angry, walk away for ten minutes. The problem will be exactly the same when you come back, and you will be better at it. Nobody has ever regretted the pause. Plenty of people have regretted the frantic sequence of changes that followed skipping it.',
          bullets: [
            'Pause and write down what you changed before asking for help',
            'Never fire off several fixes at once — you lose track of the cause',
            'Frustration makes you skip exactly the steps that would save time',
            'Ten minutes away costs nothing and reliably improves your next move',
          ],
        },
      ],
    },
    {
      id: 'vc3l2',
      title: 'Reading an Error Message',
      slides: [
        {
          heading: 'You Do Not Need to Understand It',
          body: 'An error message is not written for you, and you do not need to understand it for it to be useful. It needs to be captured accurately and passed on. That is the entire skill, and it is enough. Most messages contain three things worth spotting. A short statement of what went wrong. A file name and a line number saying where. And a long list underneath, showing the chain of steps that led there. The top line is usually the informative one; the long list is mostly noise for your purposes. Read "cannot read property name of undefined" and think "something expected a thing that was not there". That is a completely respectable level of understanding for what you are doing.',
          bullets: [
            'Capture accurately beats understand deeply — you need the text, not the theory',
            'The top line says what; a file and line number says where',
            'The long list below is the path it took, and is mostly noise to you',
            'A rough sense of the shape of the error is enough to act on',
          ],
        },
        {
          heading: 'Copy the Whole Thing',
          body: 'Paste the entire message, not a summary of it. Retyping "it says something about undefined" throws away the file name, the line number and the exact wording. Those are precisely the parts that turn a guess into a targeted fix. Select it, copy it, paste it. A screenshot will do if you cannot select the text, but selectable text is better, because it can be searched. Include the lines above and below the part that looks important. The interesting detail is often just outside the bit that caught your eye. This one habit — paste it all — probably saves more time than anything else in this module, and it requires no understanding whatsoever.',
          bullets: [
            'Paste the complete message including file names and line numbers',
            'Never paraphrase an error; the exact wording is the useful part',
            'Grab a few lines either side of the part that looks relevant',
            'Selectable text beats a screenshot because it can be searched',
          ],
        },
        {
          heading: 'Where the Messages Hide',
          body: 'Sometimes nothing appears on screen and the page simply does not work. The message usually still exists, just somewhere you have not looked. Browsers keep a hidden panel, often called developer tools or the console, which records errors happening in the page. Opening it is a menu item, not a technical act. Tools that run your code will have a log or output area, showing what happened as it ran. Hosted builders keep build logs and runtime logs. Learn where these live in whatever you are using, and find them early, while nothing is on fire. "Nothing happened" is a much weaker report than the two lines of red text sitting in a panel you did not know existed.',
          bullets: [
            'Browsers keep a console panel that records errors invisible on the page',
            'Editors and builders keep logs of what happened while running',
            'Find these places once, early, while nothing is on fire',
            '"Nothing happened" almost always means "I have not found the message yet"',
          ],
        },
        {
          heading: 'Some Errors Are Not Errors',
          body: 'Not everything red is a problem. Consoles are full of warnings, notices and complaints from unrelated parts of a page: a missing icon, an outdated setting, something from an advert or a browser extension. These sit there permanently and have nothing to do with your problem. The useful discipline is timing. Reproduce the problem while watching, and pay attention to what appears at that moment. Anything that was already there before you clicked is background noise. This one distinction saves a lot of wasted effort. Without it you chase warnings that have sat there harmlessly since the day the project was created, and will still be there when everything works.',
          bullets: [
            'Warnings are not failures; plenty of them are permanent and harmless',
            'Clear the panel, reproduce the problem, and read what appears at that moment',
            'Messages present before you acted are background noise',
            'Chasing pre-existing warnings is a classic beginner time sink',
          ],
        },
      ],
    },
    {
      id: 'vc3l3',
      title: 'Giving the AI What It Needs',
      slides: [
        {
          heading: 'The Three-Part Report',
          body: 'The AI cannot see your screen. It does not know what you clicked, and it has no memory of your last session unless you provide it. So give it the same three things you would give a colleague: what you did, what you expected, what actually happened. "I filled in the booking form and pressed Confirm. I expected a confirmation page and an email. Instead the page went blank, and this appeared in the console: [full message]." That report is enough to work with. Compare it with "the booking is broken", which forces a guess at which of a dozen possible failures you mean. The quality of the fix you get back is almost entirely set by the quality of this description.',
          bullets: [
            'What I did, what I expected, what actually happened — every time',
            'It cannot see your screen; nothing is obvious unless you say it',
            'Attach the full error text to the report rather than describing it',
            'The fix you get back is only as good as the description you gave',
          ],
        },
        {
          heading: 'Say What Changed Since It Worked',
          body: 'Add one more thing whenever you can: what was different the last time it worked. "This worked before I asked you to add the date filter" narrows the search enormously, because the cause is almost certainly inside that change. If you have been making several changes without checking, you will not have this information. That is the practical reason for checking after each one. It is also worth mentioning things that seem irrelevant. You updated something, you moved a file, you were on a different network. Beginners consistently leave out the detail that turns out to matter, on the grounds that it could not possibly be related. Say it anyway, and let the AI decide.',
          bullets: [
            'Name the last change made before it broke — usually the cause',
            'Mention anything else that changed, even if it seems unrelated',
            'Checking after each change is what keeps this information available',
            'The detail you assume is irrelevant is often the one that matters',
          ],
        },
        {
          heading: 'Ask What It Is Doing',
          body: 'When a fix comes back, ask a short question before accepting it. What was wrong, and what did you change? You are not auditing the code. You are building a mental model of your own project, and a written record you can look back at. It also catches a specific failure worth catching: the fix that solves the symptom by removing the feature. It quietly deletes the check that was inconveniently failing, rather than making it pass. A one-paragraph explanation in plain language costs you fifteen seconds. Over weeks it turns an opaque pile of files into something you have at least a rough map of.',
          bullets: [
            'Always ask what was wrong and what changed, in plain language',
            'Watch for fixes that remove the feature instead of repairing it',
            'You are building a map of your own project, not reviewing code',
            'The explanations accumulate into real understanding over weeks',
          ],
        },
      ],
    },
    {
      id: 'vc3l4',
      title: 'The Doom Loop',
      slides: [
        {
          heading: 'How It Starts',
          body: 'The pattern is unmistakable once you have seen it. Something breaks. The fix works, but a different thing breaks. That fix breaks a third thing. An hour later you are further from working than when you started. The code has changed in ways nobody can describe, and every message you send is more desperate than the last. This is not a sign of a bad tool or a bad builder. Each fix is being applied to a system that keeps changing underneath, with no known-good point to compare against. And a frustrated person accepts changes faster and checks them less. Recognising the loop early is most of the cure, because it gets harder to escape the longer it runs.',
          bullets: [
            'Each fix creates a new break; you drift further from working',
            'It is a predictable pattern, not evidence of incompetence',
            'Frustration makes you check less exactly when you should check more',
            'The longer it runs, the harder it is to reverse — spot it early',
          ],
        },
        {
          heading: 'The Way Out Is Backwards',
          body: 'The escape is unintuitive, and it is the same every time. Stop, and go back to the last version you know worked. Not the version you think might have been fine — the one you saved and verified. Everything after that point is discarded, and that hurts, because it contains an hour of effort. Discard it anyway. The hour is already spent, and the code it produced is a tangle of half-fixes for problems that only exist because of other half-fixes. From the known-good version, make one change, check it, save it. If the same break returns, you now have a clean, repeatable problem to describe instead of a mess. This is why the copies matter. Without them, there is nothing to go back to.',
          bullets: [
            'Stop and return to the last verified working version',
            'Discard the intermediate work — it is a tangle of fixes for fixes',
            'Then one change, check, save — and only then the next change',
            'Without saved copies there is no way out, only forwards into more mess',
          ],
        },
        {
          heading: 'Rules That Prevent It',
          body: 'A few rules, decided in advance, keep the loop from starting. Three failed fixes for the same problem means stop and go back — no exceptions, and no "one more try". Never accept a change you have not checked. Never make a second change while the first is unverified. Save a copy before anything risky. Put a time limit on frustration: thirty minutes stuck is a signal to step away, not to try harder. These rules are boring. They are also the difference between people who ship something and people who abandon a project, calling the tools unreliable. The tools are usually fine. The loop is what actually ends most first attempts at building something.',
          bullets: [
            'Three failed attempts at the same problem: stop and revert',
            'Never stack a second change on top of an unverified first one',
            'Set a frustration time limit and honour it',
            'Decide these rules while calm, because you will not invent them while panicking',
          ],
        },
        {
          heading: 'A Fresh Start Beats a Long Argument',
          body: 'One more escape route: start a new conversation. Long sessions accumulate wrong turns, abandoned approaches and contradictory instructions. All of that context keeps influencing what comes back. Sometimes the fastest fix is a fresh conversation. Paste your spec and the current problem, and describe it cleanly, with none of the history. It often produces a completely different and better answer, simply because it is not weighed down by an hour of confusion. Keep the spec somewhere pasteable, precisely so this is cheap to do. Starting a new conversation is not the same as starting the project over. You keep the code; you discard only the argument.',
          bullets: [
            'Long conversations accumulate contradictions that keep steering the output',
            'A fresh session with the spec and the current problem often unsticks things',
            'Keep the spec pasteable so a clean restart costs seconds',
            'New conversation is not the same as new project — keep the working code',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'If You Are the Builder',
          body: 'Your main risk is not technical, it is emotional endurance. Most abandoned projects are abandoned during a doom loop, at night, by someone who is convinced the problem is them.',
          bullets: [
            'Write your stop rules on paper before you need them',
            'Keep a plain note of what you changed and when — it is your only history',
            'Stopping while stuck is a skill, not a defeat; the problem waits patiently',
          ],
        },
        {
          role: 'security-se',
          label: 'Keeping It Safe',
          body: 'Doom loops are where safety quietly gets dismantled. Under pressure it is very tempting to accept a fix that makes the error go away by removing a check. Nothing on screen will tell you that happened.',
          bullets: [
            'Be suspicious of any fix that "just disables" a check or a permission',
            'Never turn off a security setting to get past an error, planning to restore it later',
            'After escaping a loop, re-run your checklist — safety degrades silently',
          ],
        },
        {
          role: 'developer',
          label: 'If You Have Some Technical Skill',
          body: 'You can shorten the loop dramatically. Read the change itself, not only its description. Use proper version control rather than dated folders.',
          bullets: [
            'Read the diff before accepting — the summary and the change sometimes disagree',
            'Commit each verified step, so reverting is one command rather than a folder hunt',
            'Reproduce the failure on its own before asking for a fix',
          ],
        },
        {
          role: 'consultant',
          label: 'If You Are Advising or Hiring',
          body: 'When a client says the tools are unreliable, the story underneath is usually a doom loop with no saved versions. That is a process problem, and you can fix it in one conversation.',
          bullets: [
            'Ask first whether they have a version they know worked; the answer is diagnostic',
            'Install the habits — copies, one change at a time, stop rules — before new tools',
            'Loop escape is a teachable process, not a talent',
          ],
        },
      ],
    },
    {
      id: 'vc3l5',
      title: 'When the Tool Is Wrong for the Job',
      slides: [
        {
          heading: 'Signals You Have Hit a Ceiling',
          body: 'Sometimes the problem is not your description or your patience. You are asking the wrong tool. The signals are fairly consistent. The same class of problem keeps returning after being fixed. Fixing anything now breaks something unrelated. The AI keeps proposing changes that contradict what it proposed an hour ago. You are working around the tool as much as with it. Or the thing you need genuinely sits outside what it can reach: a specific integration, a background job, something that must run at a precise time. Hitting a ceiling is normal and is not a failure. The mistake is spending three more days pushing against it, because switching feels like admitting defeat.',
          bullets: [
            'The same problem returning repeatedly means a structural mismatch',
            'Unrelated things breaking together is a sign the project has outgrown the approach',
            'Contradictory suggestions mean it has lost the thread of your project',
            'Ceilings are expected; refusing to acknowledge one is the expensive part',
          ],
        },
        {
          heading: 'Moving Sideways',
          body: 'Hitting a ceiling does not mean stopping. Often it means moving to a different shape of tool. From a prompt-to-app builder to an in-editor assistant, where you can see and change everything. Or from general building to a purpose-built service that already does the hard part. Wanting a booking system does not oblige you to build a calendar engine. An existing booking product with your branding on it may be a better answer than anything you would produce. Choosing not to build something is a legitimate outcome of this course, and it is often the professional answer. Your goal is the outcome, not the construction. The code was only ever a means.',
          bullets: [
            'Move to a tool with more control when you outgrow the convenient one',
            'An existing product that already solves it beats a prototype you maintain',
            'Deciding not to build is a valid and often correct result',
            'The goal is the outcome, not the satisfaction of having built it',
          ],
        },
        {
          heading: 'Or Bring In a Person',
          body: 'The third option is a human. A few hours of an experienced engineer\'s time on a specific stuck problem is often startlingly cheap, compared with a week of your own frustration. You are also a much better client than you would have been before. You have a working prototype, a written spec and a precise description of what is failing. That package makes an engineer\'s job far easier and their quote far smaller. Ask for help with the specific blockage, rather than handing over the whole project. Targeted help keeps you in control and keeps you learning. Knowing when to buy expertise is a business skill, not an admission that you could not manage.',
          bullets: [
            'A few hours of expert time can beat a week of solo frustration',
            'Your prototype, spec and error description make you a cheap client to help',
            'Ask for help with the specific blockage, not a full handover',
            'Buying expertise at the right moment is judgement, not defeat',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What most usefully distinguishes "broken" from "lost"?',
      options: [
        'Broken shows an error message; lost shows a blank screen',
        'Broken affects one screen; lost affects the whole app',
        'With broken you still know what you changed and which version worked; with lost you do not',
        'Broken happens to beginners; lost happens to experienced builders',
      ],
      correct: 2,
    },
    {
      q: 'What should you do with an error message you do not understand?',
      options: [
        'Paste the complete message, including file names and line numbers',
        'Summarise the gist of it in your own words',
        'Ignore it and describe the visible symptom instead',
        'Retype only the first few words',
      ],
      correct: 0,
    },
    {
      q: 'You see red text in the browser console but the app was already behaving oddly before you clicked. How should you treat those messages?',
      options: [
        'Every red message must be fixed before continuing',
        'Clear the panel, reproduce the problem, and focus on what appears at that moment',
        'Console messages are never relevant to real problems',
        'Report all of them together as one bug',
      ],
      correct: 1,
    },
    {
      q: 'Which report is most likely to get you a working fix?',
      options: [
        'The booking page is broken again',
        'Something went wrong with the form, please fix it',
        'It stopped working after your last change',
        'I pressed Confirm, expected a confirmation email, got a blank page, and this appeared in the console: [full message]',
      ],
      correct: 3,
    },
    {
      q: 'What is the reliable way out of a doom loop where each fix causes a new break?',
      options: [
        'Ask for a more comprehensive fix that addresses everything at once',
        'Keep going, since the number of remaining problems must eventually reach zero',
        'Go back to the last version you know worked and discard everything since',
        'Switch to a different AI tool and paste the broken code into it',
      ],
      correct: 2,
    },
    {
      q: 'Why is a fix that makes an error disappear worth questioning?',
      options: [
        'Fixes are usually slower than the original code',
        'It may have removed the failing check or feature rather than repairing it',
        'Errors should always be left visible for users',
        'It means the AI did not understand the programming language',
      ],
      correct: 1,
    },
    {
      q: 'Which is a genuine signal that the tool has hit its ceiling for your project?',
      options: [
        'You had to ask for the same screen twice',
        'The first version did not match your mental picture',
        'You needed to read an error message',
        'Fixing one thing keeps breaking unrelated things, and suggestions contradict earlier ones',
      ],
      correct: 3,
    },
    {
      q: 'You are stuck on one specific problem after several days. What is the most sensible option?',
      options: [
        'Abandon the project — the idea was not viable',
        'Rebuild the entire project from scratch with a different description',
        'Buy a few hours of an engineer\'s time for that specific blockage, armed with your prototype and spec',
        'Ship it and hope the problem does not affect users',
      ],
      correct: 2,
    },
  ],
};

export default vcM3;
