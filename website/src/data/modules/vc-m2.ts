import type { CourseModule } from '../../types/course';

const vcM2: CourseModule = {
  id: 'vc-m2',
  title: 'From Idea to First Version',
  icon: 'target',
  summary: 'How to write a plain-language spec an AI can build from, and how to add one thing at a time. Describing screens and flows so they come back recognisable, and reacting usefully when what arrives is not what you pictured.',
  lessons: [
    {
      id: 'vc2l1',
      title: 'Writing a Spec in Plain Language',
      sectionLabel: 'Describing What You Want',
      diagram: 'PlainLanguageSpec',
      slides: [
        {
          heading: 'Three Questions That Are Your Whole Spec',
          body: 'A spec is simply a written description of what you want built. You do not need a technical document. You need answers to three questions, written down in ordinary sentences. Who is this for? Not "everyone", but the specific person: what they already know, what device they are on, how much patience they have. What must it do? The actions someone can take, listed plainly, in the order they would happen. What must it never do? The boundaries, which is the section people skip and then regret. That third one is the most valuable, because an AI will not invent your constraints. If you never say that visitors must not see each other\'s entries, nothing in the request implies it. You will get exactly what you asked for, rather than what you assumed.',
          bullets: [
            'Who it is for, as one concrete person rather than a market segment',
            'What it must do, as actions in the order they happen',
            'What it must never do — the section that prevents the worst surprises',
            'Unstated assumptions are not implied; they are simply absent',
          ],
        },
        {
          heading: 'Be Specific Where It Matters',
          body: 'Vagueness gets filled in with a guess, and the guess is usually a generic default. "Users can upload a file" leaves open which formats, how big, what happens to a wrong one, and whether anyone else can see it. Compare that with a fuller version. "Users can upload a photo, up to about five megabytes, JPEG or PNG only, and see a clear message if it is the wrong type." That leaves almost nothing open. You do not need to be specific about everything. Be specific about anything where a wrong guess would annoy you. A useful habit is to say what happens when things go wrong, as well as when they go right. The unhappy paths are where generated software is thinnest, and where real users spend a surprising amount of their time.',
          bullets: [
            'State limits explicitly: sizes, formats, counts, lengths, allowed values',
            'Describe what happens when something is wrong, not only when it is right',
            'Anywhere you would be annoyed by a wrong guess, remove the guess',
            'Unhappy paths are where generated code is weakest and users live most',
          ],
        },
        {
          heading: 'Say What Success Looks Like',
          body: 'End your spec with a short list of statements that must be true when it is finished. "A visitor can submit the form and I receive an email within a minute." "Nobody can see another person\'s submission." "It is readable on a phone." These are not decoration. They are how you tell whether you are done. In module four they become the checklist you run every time you change anything. Write them before you build, while you still have clear eyes. Written afterwards, they mysteriously describe whatever the software happens to do, which tests nothing at all. Five to ten statements is plenty for a first version. Each one should be something you could check in under a minute.',
          bullets: [
            'Finish the spec with five to ten checkable statements about the finished thing',
            'Write them before building, or they will just describe what you got',
            'Each should be checkable by hand in under a minute',
            'These become your regression checklist for every future change',
          ],
        },
        {
          heading: 'Give the AI the Spec, Not a Wish',
          body: 'Once you have those pieces, paste the whole thing in as context. Then ask for a small first piece of it. That combination matters. Without the spec, the AI is guessing at your intent, and it will fill the gaps with generic choices. Without the "small first piece", it will attempt the entire document at once. What comes back is broad, shallow and very hard to correct. Keep the spec somewhere you can paste it again, because conversations lose earlier context and tools get restarted. Re-supplying the same clear description is not wasted effort. It is the cheapest way to keep everything you build pointing at the same idea, rather than drifting a little further with each session.',
          bullets: [
            'Supply the full spec as context, then ask for one small piece of it',
            'Keep the spec in a file you can paste again — conversations lose context',
            'Re-stating constraints in later sessions prevents slow drift',
            'A spec plus a narrow request beats a wish plus a wide one every time',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'You sized your idea down to a weekend at the end of module one. Now write the spec for that version — the document you will paste into every building session from here on.',
          exercise: {
            task: 'Fill in the scaffold below for your weekend version, in ordinary sentences, and save it as a file you can paste again later. Spend the most time on the last section.',
            copyText: 'What it is: [one or two plain sentences]\n\nWho uses it: [one specific person — what they know, what device they are on]\n\nThe screens: [each screen top to bottom, every control, and what pressing it does]\n\nWhat happens when things go wrong: [empty fields, wrong values, pressing a button twice]\n\nWhat it must never do: [the boundaries — who must not see what, what must never happen without you]',
            selfCheck: [
            'Someone who has never heard your idea could build a rough version from the spec alone',
            'The never section has at least two lines in it',
            'The spec lives in a file you can paste again, not only in a chat window',
            ],
          },
        },
      ],
    },
    {
      id: 'vc2l2',
      title: 'One Thing at a Time',
      diagram: 'OneThingAtATime',
      slides: [
        {
          heading: 'Why Big Requests Fail',
          body: 'Asking for everything at once feels efficient, and it is the most reliable way to get stuck. A large request produces a large amount of code, all of it arriving untested together. When something is wrong, you cannot tell which part caused it. So you describe the problem vaguely, more code changes, and you lose track of what was ever working. A small request produces something you can check in a minute. If it works, you have a solid floor to stand on. If it does not, there is exactly one recent change to suspect. This is not about being cautious. It is about keeping the number of possible causes down to one. That is the only thing that makes bug-hunting manageable when you cannot read the code.',
          bullets: [
            'One change at a time means one suspect when something breaks',
            'Large batches arrive untested together and hide which part failed',
            'Check each piece works before asking for the next one',
            'A known-working floor is what lets you take the next step confidently',
          ],
        },
        {
          heading: 'A Sensible Order to Build In',
          body: 'Build the spine first, then the flesh. Get something on screen, even ugly and empty. Then make the one central action work end to end, with the plainest possible interface: the form submits, the record saves, you can see it again. Then handle the wrong cases — empty fields, silly values, someone pressing the button twice. Then make it look right. This order feels backwards to anyone who thinks visually, and it is worth resisting the urge. Appearance is the cheapest thing to change and the most tempting thing to fiddle with. Beautiful screens over a flow that does not work is a very common way to spend a weekend and end up with nothing you can show.',
          bullets: [
            'Something on screen, then the core action working end to end',
            'Then the wrong cases, then the appearance — in that order',
            'Looks are the cheapest thing to change and the biggest time sink',
            'Resist polishing anything before the central flow actually works',
          ],
        },
        {
          heading: 'Keep a Copy of Every Working Version',
          body: 'Before you ask for the next change, save a copy of the version that works. How you do it matters less than that you do it. A duplicated folder with today\'s date is unglamorous and completely sufficient. Proper tools exist for this and are worth learning eventually. But an unfashionable copy you actually make beats an elegant system you never set up. The reason is simple. When a change goes wrong, the most valuable thing you can own is a version you know was fine. Without it, "go back" means reconstructing from memory, which does not work. With it, a bad afternoon costs you an afternoon rather than the whole project.',
          bullets: [
            'Copy the working version before every change, however crudely',
            'A dated folder you actually create beats a proper system you never set up',
            'The ability to go back is the single most valuable safety net you have',
            'Note what worked in that version, or the copies become unidentifiable',
          ],
        },
      ],
    },
    {
      id: 'vc2l3',
      title: 'Describing Screens and Flows',
      diagram: 'ScreensAndFlows',
      slides: [
        {
          heading: 'Describe It Like a Room',
          body: 'The most reliable way to describe a screen is to walk through it. Do it the way you would describe a room to someone on the phone. What is at the top, what is in the middle, what is at the bottom. What the person sees first, what they can press, and what happens when they do. "A page with a heading, one box for an email address, and a green button that says Join. After pressing it, the form disappears and a short thank-you message appears in its place." That is specific enough to build and short enough to write in twenty seconds. Compare it with "a clean modern signup page". That contains no information at all, and it will get you somebody else\'s idea of clean and modern.',
          bullets: [
            'Top to bottom, left to right — the order things appear on screen',
            'Name every control and say what pressing it does',
            'Say what changes after the action, not only what triggers it',
            '"Clean and modern" carries no information; describe the parts instead',
          ],
        },
        {
          heading: 'Flows Are Screens Plus Arrows',
          body: 'A flow is what happens across screens: someone lands here, does this, ends up there. Write it as numbered steps, in the voice of the person doing it. "1. Lands on the home page. 2. Presses Book. 3. Picks a date and a time from the ones still free. 4. Enters name and email. 5. Sees a confirmation with the details. 6. I get an email." Numbered steps do two jobs at once. They are a build instruction, and they are a test script. When something breaks later, you can walk the same numbers and say precisely which step failed. That is far more useful than reporting that booking is broken.',
          bullets: [
            'Write flows as numbered steps in the user\'s voice',
            'Include what happens behind the scenes, like the email you receive',
            'The same numbered steps become your test script later',
            '"Step 4 fails" is a far more useful report than "booking is broken"',
          ],
        },
        {
          heading: 'Borrow Instead of Inventing',
          body: 'You do not have to describe common patterns from scratch, and you would do it worse than the conventions people already understand. Say "like a normal checkout", or "a two-column layout with the list on the left and the details on the right", or "the same sign-in flow every site uses". Naming an established pattern communicates a great deal in a few words. It also produces something users already know how to operate. It is fine to point at an existing site you like. Describe the specific thing you want from it: "the way their pricing page lays out three tiers side by side". Be specific about which part you mean. "Make it like theirs", without saying which aspect, gets you a coin flip.',
          bullets: [
            'Name familiar patterns rather than describing them element by element',
            'Conventional layouts are conventional because people already understand them',
            'Point at a real example, but say exactly which aspect you want',
            'Invent only where your idea genuinely differs from the norm',
          ],
        },
      ],
    },
    {
      id: 'vc2l4',
      title: 'When It Is Not What You Pictured',
      diagram: 'NotWhatYouPictured',
      slides: [
        {
          heading: 'This Is Normal, Not Failure',
          body: 'The first version of anything comes back different from the picture in your head. That is not the tool failing, and it is not you prompting badly. It is the ordinary result of a description being less complete than a mental image. Your head contains layout, tone, spacing, the order things happen, and a hundred details you never wrote down. What came back reflects only the part you managed to say. So the first result is not a verdict on your idea. It is a draft, and drafts exist to be reacted to. People who get good results are not writing perfect first prompts. They are unbothered by an imperfect first result, and quick to say precisely what is wrong with it.',
          bullets: [
            'A mental image always contains more than the description you wrote',
            'The first result is a draft, not a verdict on the idea or on you',
            'Skilled users are not better at first prompts; they react faster and more precisely',
            'Expect two or three rounds on anything visual as the normal case',
          ],
        },
        {
          heading: 'Separate the Three Kinds of Wrong',
          body: 'Before reacting, sort what is wrong into three piles, because they need different responses. Wrong understanding: it built something else entirely. Your description missed the point, so it needs rewriting rather than adjusting. Wrong details: the right thing with wrong specifics — wrong colour, wrong order, missing field. That is a small correction. Wrong behaviour: it looks right, but does the wrong thing when used. Take that pile most seriously, because it hides. Mixing these up wastes time. The most common version is making repeated small tweaks to something that was built on a misunderstanding and needed restating from the top.',
          bullets: [
            'Wrong understanding: restate the goal instead of adjusting details',
            'Wrong details: name the specific fix, one at a time',
            'Wrong behaviour: looks fine, acts wrong — the most important pile',
            'Tweaking a misunderstanding forever is the most common time sink',
          ],
        },
        {
          heading: 'Sometimes You Were Wrong',
          body: 'Occasionally what comes back is better than what you asked for. Or it reveals that your idea did not quite make sense. A screen you imagined turns out to need a step you had not thought of. A feature you were sure about looks pointless once it exists. This is one of the genuine gifts of building fast. You find out cheaply, in an afternoon, what used to take a quarter and a budget to discover. Notice when your reaction is "that is not what I said" versus "oh, that is actually better". Be willing to update the spec rather than defending it. The document is a tool for thinking, not a contract you signed with yourself.',
          bullets: [
            'Seeing a thing exist reveals problems that thinking about it never does',
            'Update the spec when reality teaches you something; do not defend it',
            'Cheap building means cheap learning — that is most of the value',
            'Distinguish "not what I asked for" from "better than what I asked for"',
          ],
        },
      ],
    },
    {
      id: 'vc2l5',
      title: 'Iterating by Describing the Gap',
      diagram: 'DescribeTheGap',
      slides: [
        {
          heading: 'Describe the Gap, Not the Verdict',
          body: 'The single highest-value habit in this whole course is simple. Describe the difference between what you got and what you wanted, rather than passing judgement on it. "This is wrong" contains no information. "The list shows all bookings, but it should only show the ones for the selected date" contains everything needed. The pattern is: here is what I see, here is what I expected, here is the difference. It works for the same reason a good bug report works for a human colleague. A precise gap points at a precise change, while a complaint invites a guess. And if you find you cannot describe the gap, that is genuinely useful information too. It means you have not yet decided what you wanted.',
          bullets: [
            'What I see, what I expected, the difference between them',
            '"Wrong" and "bad" carry no information; a gap does',
            'A precise gap produces a targeted change instead of a rewrite',
            'If you cannot name the gap, you have not decided what you wanted',
          ],
        },
        {
          heading: 'Change, Do Not Restart',
          body: 'When something is not right, the instinct is to wipe it and describe the whole thing again from scratch. Resist it. Starting over throws away everything that was already working, and hands you a fresh set of unrelated problems. You swap known issues for unknown ones. Ask for the specific change instead: keep everything else, change this one thing. Restarting is occasionally correct — when the whole approach was misunderstood, or when the code has become a tangle nobody can follow. But it should be a deliberate decision you can justify, not a reflex triggered by frustration. If you do restart, take the lesson with you. Write it into the spec first, or you will arrive at the same place.',
          bullets: [
            'Ask for a change, not a rewrite: "keep the rest, change only this"',
            'Starting over trades known problems for unknown ones',
            'Restart deliberately, for a stated reason, not out of frustration',
            'If you restart, update the spec first so you do not repeat the misunderstanding',
          ],
        },
        {
          heading: 'Know When to Stop',
          body: 'Iteration has diminishing returns, and a point where it turns negative. If three or four rounds have not fixed something, more rounds will not either. Stop and change the approach instead. Perhaps the request is unclear. Perhaps you are asking for something the tool is not suited to. Perhaps two of your requirements quietly contradict each other. Equally, know when to stop because it is good enough. Prototypes do not need to be finished; they need to answer their question. The habit of endless small improvements feels productive. It is also one of the most reliable ways to never show anyone anything, which defeats the reason you built quickly in the first place.',
          bullets: [
            'Three or four failed rounds means change the approach, not the wording',
            'Repeated failure often means two requirements contradict each other',
            'A prototype is done when it answers its question, not when it is perfect',
            'Endless polish feels productive and prevents you showing anyone anything',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Which part of a plain-language spec do people most often skip, at the greatest cost?',
      options: [
        'What it must never do',
        'The name of the product',
        'The colour scheme',
        'The list of competitors',
      ],
      correct: 0,
    },
    {
      q: 'Why write your success statements before building rather than afterwards?',
      options: [
        'Because the AI tools require them as an input',
        'Because they are needed for legal compliance checks',
        'Afterwards they just describe what you built, testing nothing',
        'Because they get much harder to write later on',
      ],
      correct: 2,
    },
    {
      q: 'What is the main reason to ask for one change at a time?',
      options: [
        'It uses fewer AI credits in each session',
        'When something breaks there is only one change to suspect',
        'Small requests produce better-looking designs',
        'AI tools cannot process long instructions properly',
      ],
      correct: 1,
    },
    {
      q: 'Which build order is most likely to leave you with something that works?',
      options: [
        'Design every screen fully, then connect them, then handle errors',
        'Handle every possible error first, then build the features',
        'Build all features at once, then test everything together',
        'Screen first, then the core action, then errors, then looks',
      ],
      correct: 3,
    },
    {
      q: 'Which is the most useful way to describe a screen you want?',
      options: [
        'A clean, modern and professional-looking landing page',
        'Something like the other sites in my industry',
        'A heading, one email field, and a green Join button',
        'Whatever layout converts visitors the best',
      ],
      correct: 2,
    },
    {
      q: 'You got something that looks right but behaves wrongly when you use it. Why does this category deserve the most attention?',
      options: [
        'It is always caused by a bug in the AI tool',
        'It costs much more to fix than visual problems do',
        'It is easier to fix than the other kinds',
        'Because it hides — nothing on screen looks wrong',
      ],
      correct: 3,
    },
    {
      q: 'Which feedback is most likely to produce the fix you want?',
      options: [
        'This page is wrong, please try again',
        'The list shows every booking, not just the selected date',
        'Make it better and more intuitive to use',
        'Start over, none of this is working',
      ],
      correct: 1,
    },
    {
      q: 'Four rounds of iteration have not fixed a problem. What is the best next move?',
      options: [
        'Keep rephrasing the same request until it works',
        'Add more features to work around the problem',
        'Stop and change the approach entirely',
        'Accept the broken behaviour and ship it anyway',
      ],
      correct: 2,
    },
  ],
};

export default vcM2;
