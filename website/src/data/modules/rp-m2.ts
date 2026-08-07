import type { CourseModule } from '../../types/course';

const rpM2: CourseModule = {
  id: 'rp-m2',
  title: 'Building and Testing',
  icon: 'zap',
  summary: 'The part AI made genuinely cheap, and why finishing it proves less than it seems to. A demo works once, for you; a product works for strangers, over time — and the checks that guard that difference need to run without you. Closes at the ledger: nine days of twenty-three spent, with everything visible already done.',
  lessons: [
    {
      id: 'rp2l1',
      title: 'The Slice That Got Cheap',
      diagram: 'CollapsedSlice',
      slides: [
        {
          heading: 'The Most Visible, Least Representative Part',
          body: 'If you came here from Vibecoding, you watched something remarkable: a working prototype appeared in a weekend, most of it written while you made tea. That experience teaches a lesson, and the lesson is subtly wrong. The demo — the screen, the button, the confirmation — is the most visible part of a product, and also the least representative. It is the part every product shows off, and the part that says least about how much work remains. AI collapsed the cost of building it, and it happens that this was exactly the slice that was always cheapest to demonstrate, even before AI arrived. The expensive parts were never the screens. They were everything the screens quietly rely on, and nothing about a fast weekend tells you how large that everything is. This lesson is about keeping the speed while correcting the conclusion.',
          bullets: [
            'The demo is the most visible part of a product and the least representative',
            'AI collapsed the cost of exactly the slice that was always cheapest to show',
            'The screens were never the expensive part, even before AI',
            'A fast weekend says nothing about the size of what the screens rely on',
          ],
        },
        {
          heading: 'What Stayed Exactly As Expensive',
          body: 'Here is what the fast weekend did not touch. Where the bookings actually live, and what happens when one of them is wrong. Who can sign in, and who is allowed to see what. How a change reaches customers without breaking the thing they are in the middle of using. How you find out it broke. Who answers the email when a customer is locked out on a Saturday. None of these got cheaper, because none of them were in the demo. So the sentence "it took a weekend" is true and misleading at the same time: true about the slice, false about the product. This matters because the collapsed slice changes how the whole job feels. The gap between prototype and product looks smaller than it used to, while remaining exactly as wide. Your judgement recalibrated on the wrong evidence — which is nobody\'s fault, and still your problem.',
          bullets: [
            'Data, accounts, shipping, watching and support were never part of the demo',
            '"It took a weekend" is true about the slice and false about the product',
            'The gap feels smaller than it used to while staying exactly as wide',
            'Judgement recalibrated on the demo is judgement trained on the wrong evidence',
          ],
        },
        {
          heading: 'The Speed Is Real — Keep Using It',
          body: 'None of this means the speed was an illusion. Building the rest of the screens for the groomer is genuinely fast with AI, and you should let it be. The admin view, where she sees the whole week at a glance instead of scrolling through a customer page that was never meant for her. The cancellation flow, so a customer can free a slot without ringing mid-groom. Each of these arrives in hours, not days, the same way the first screen did. Use that. The mistake was never believing AI is fast — it is — but concluding that the product is therefore mostly done. The honest position holds both ideas at once: the visible work has become cheap, and the visible work was always the small share. This module builds the rest of the visible part, then spends its remaining lessons on what "finished" actually has to mean.',
          bullets: [
            'The remaining screens — the admin view, the cancellation flow — still arrive fast',
            'The speed is real; the conclusion drawn from it is what goes wrong',
            'Visible work became cheap, and visible work was always the small share',
            'Hold both ideas at once, and let AI do what it is genuinely good at',
          ],
        },
      ],
    },
    {
      id: 'rp2l2',
      title: 'What "It Works" Actually Means',
      diagram: 'DemoVsProductWorks',
      slides: [
        {
          heading: 'Worked Once, for You, on Your Machine',
          body: 'When you said "it works" at the end of the prototype weekend, you meant something specific, and it is worth spelling out exactly what. It worked once. It worked for you, a person who knows which button to press and in what order, because you watched the thing being built. It worked on your machine, with your settings and your fast connection. And it worked with friendly data: sensible names, valid email addresses, one booking at a time, entered by someone trying hard to make it succeed. None of that was cheating — it is what a prototype is for, and Vibecoding was right to call it a result. But every one of those conditions was quietly doing work. The demo\'s definition of "works" carries four hidden qualifiers, and a product gets to keep none of them. The rest of this lesson removes them one at a time.',
          bullets: [
            'Worked once, not worked reliably — a single pass along a happy path',
            'Worked for you, the one person who knows exactly what to press',
            'Worked with friendly data, entered by someone hoping it would succeed',
            'None of this was cheating; all of it was quietly propping up the result',
          ],
        },
        {
          heading: 'Strangers, Bad Phones and Wrong Input',
          body: 'A product\'s definition drops the qualifiers. It has to keep working — for strangers, on old phones with patchy signal, with input nobody would design for. Watch the groomer\'s page meet a real Saturday. Two owners tap the same ten o\'clock slot within a second of each other; only one dog can be groomed, so the page must refuse one of them politely rather than promise both. A customer books in a second dog that was never registered, and the record has to mean something anyway. Someone\'s thumb double-taps the confirm button, and the product must recognise one intention rather than create two appointments. None of these people is doing anything wrong. They are simply strangers using the thing without you standing behind them — which is the entire point of having built it. A product is what remains after your presence is subtracted.',
          bullets: [
            'Two owners after the same Saturday slot — one must be refused politely',
            'A booking for a dog the system has never met still has to mean something',
            'A double-tap is one intention, and must not become two appointments',
            'A product is what remains after your presence is subtracted',
          ],
        },
        {
          heading: 'A Claim About Time and Strangers',
          body: '"Works" turns out to be two different claims wearing the same word. The demo\'s claim is about a moment: at this instant, with me watching, it did the thing. The product\'s claim is about time and strangers: for months, for people I have never met, it kept doing the thing, including when they used it strangely. The gap between those claims is not closed by more building — adding the cancellation flow does nothing to make the double-tap safe. It is closed by deliberately going looking for the awkward cases and deciding, one by one, what should happen in each. That is a different activity from building. It is slower per line than watching AI generate screens, and it is where the real workmanship of this stage lives. The next lesson is about making those decisions hold for years without you re-checking them by hand every week.',
          bullets: [
            'The demo claims a moment; the product claims months and strangers',
            'More screens do not close the gap — decisions about awkward cases do',
            'Each awkward case needs an answer chosen on purpose, not left to chance',
            'The decisions then need a way to hold without your weekly attention',
          ],
        },
      ],
    },
    {
      id: 'rp2l3',
      title: 'Checks That Run Without You',
      diagram: 'ChecksWhileYouSleep',
      slides: [
        {
          heading: 'The Checklist Learns to Run Itself',
          body: 'Vibecoding taught you to write a checklist and run it after every change — the whole list, every time, not just the part you touched. That habit was right, and this lesson does not replace it; it promotes it. The next step is checks a machine runs for you. In plain language: a list of promises about your product — a taken slot never shows as free, a double-tap makes one booking, the groomer\'s email goes out within a minute — that gets tried automatically every time anything changes. When every promise holds, the change goes through. When one breaks, the change is refused before it reaches anyone, and you are told which promise failed. That is the whole idea. Engineers have elaborate names for the machinery involved, but the machinery is not the point. The point is that your checklist stops depending on you remembering to run it.',
          bullets: [
            'A machine-run check is a promise, tried automatically on every change',
            'When a promise breaks, the change is refused before it reaches customers',
            'Your Vibecoding checklist is the raw material — the promises come from it',
            'The machinery has technical names; the idea needs none of them',
          ],
        },
        {
          heading: 'Why Hand-Run Lists Decay',
          body: 'Why bother, when running the list by hand worked perfectly well last month? Because of what you are actually signing up for. A real product gets changed for years — small fixes, the second groomer, a price change, closing for a week in August — and every change can quietly break something far from the thing you touched. Nobody re-runs a twenty-item checklist by hand every Tuesday for years. You will skip it once, because the change was tiny, and you will be right. Then you will skip it again, and be right again. Hand-run lists decay exactly as fast as attention does, and attention decays fastest when nothing has gone wrong for a while. Machine-run checks have no attention to lose. They run identically on the tiny change and the frightening one, at two in the afternoon and at eleven at night, on the day you are on holiday.',
          bullets: [
            'Products get changed for years, and any change can break something distant',
            'You will skip the hand-run list on a tiny change, and be right — at first',
            'Hand-run lists decay at the speed of attention; machines have none to lose',
            'The same checks run on the tiny change and the frightening one alike',
          ],
        },
        {
          heading: 'What This Honestly Costs',
          body: 'The good news: writing the checks is cheap now. Ask the AI to build each promise-check alongside the thing itself — "add the cancellation flow, and add a check that a cancelled slot shows as free again" — and it will, in the same sitting, for barely any extra effort. The honest cost is not the writing; it is the habit. Every new promise needs its check. Every check that fails needs to be believed rather than deleted. And the discipline of never shipping past a failing check is yours alone to keep, because in a one-person product nobody will catch you cheating. One boundary, so you know what this lesson has not covered: if your product has AI inside it, testing whether the AI\'s answers are any good is a different discipline, and \'Does Your AI Actually Work?\' is the course that teaches it. For everything else, promises and checks are enough.',
          bullets: [
            'Ask for the check alongside the feature — one sitting, little extra effort',
            'The habit is the expensive part: every promise gets a check, always',
            'A failing check is information to believe, never an obstacle to delete',
            'Testing AI answer quality belongs to \'Does Your AI Actually Work?\'',
          ],
        },
      ],
    },
    {
      id: 'rp2l4',
      title: 'Reading the Ledger After the Demo',
      diagram: 'LedgerAfterDemo',
      slides: [
        {
          heading: 'Nine Days of Twenty-Three',
          body: 'Time to read the ledger. The prototype weekend cost two days. The exploration, the not-list and the plan cost three. Building the remaining screens and putting the machine-run checks in place cost four. That is nine days of the twenty-three this course counts honestly, and it is worth pausing on what the number means, because your eyes will disagree with it. On screen, the product looks finished. Every page exists. The admin view works, the cancellation flow works, the checks pass, and there is nothing left to click that does not do its job. And yet the ledger says well under half the product exists. Both things are true at once. Everything visible is done, and the majority of the product was never going to be visible — which is exactly how the demo misled you in the first place, and exactly why the ledger is worth keeping.',
          bullets: [
            'Demo 2 + plan 3 + build and checks 4 = 9 of 23 days',
            'Every screen exists and every check passes — it looks finished',
            'Well under half the product exists, and both facts are true at once',
            'The majority of a product was never going to be visible on screen',
          ],
        },
        {
          heading: 'What the Screen Cannot Show You',
          body: 'So what is in the missing fourteen days, if nothing on screen is? The next module holds the biggest single line: where the data really lives, what happens when you change your mind about its shape while two hundred customers depend on it, accounts and locked-out customers, and the services you secretly stand on — nine days, four times the demo. After that comes shipping and running it: getting changes to users and taking them back, finding out it broke before the groomer does, and what it all costs at real usage — five more days. Then the second year, which is not a build stage at all, and over time quietly outgrows every line on it. None of this will change how the product looks. From here on you are no longer buying pixels. You are buying properties: survives a mistake, notices its own failures, runs without you.',
          bullets: [
            'Next: data, accounts and hidden services — nine days, the biggest line',
            'Then shipping and running it — five days of ship, watch and fix',
            'Then the second year, which is not a build stage and never ends',
            'From here you are buying properties, not pixels',
          ],
        },
        {
          heading: 'The Most Tempting Moment to Stop',
          body: 'This is the point where most vibecoded products quietly ship. Not out of recklessness — out of reasonable-looking evidence. The screens are done, the checks pass, and the remaining work is invisible, so it is easy to conclude the remaining work is optional. Shipping here means real customers on a product with no practised way to recover their data, no thought-through accounts, and no answer for the week the email service has a bad day. If you are tempted anyway, at least go with your eyes open: Vibecoding\'s final module, \'Before You Let Anyone Else Use It\', covers whose data you are holding, secrets and keys, and spending caps, and every word of it still applies here. This course\'s position is milder than a prohibition. You may ship a demo. Just do not mistake that for shipping a product — the distance between the two is the next two modules.',
          bullets: [
            'The screens being done makes the invisible work look optional — it is not',
            'Shipping here means strangers relying on properties you have not built',
            'Vibecoding\'s \'Before You Let Anyone Else Use It\' still applies word for word',
            'You may ship a demo; just do not mistake that for shipping a product',
          ],
          exercise: {
            task: 'Write the demo-vs-product gap list for your own project. Take your prototype and list, honestly, the difference between what "works" means for it today and what "works" would have to mean for strangers relying on it. Fill in the scaffold below before you build anything else.',
            copyText: 'My demo works today because:\n[who has it worked for — me, or a stranger?]\n[how many times has the core action actually run?]\n[what friendly data has it been fed?]\n\nFor a product, "works" would have to survive:\n[two people acting at the same moment: ]\n[wrong or half-finished input: ]\n[the double-press, the back button, the refresh: ]\n\nMy promises (future machine-run checks):\n[promise 1: ]\n[promise 2: ]\n[promise 3: ]\n\nThe gap, in one sentence:\n[ ]',
            selfCheck: [
              'Your gap list contains at least one case you genuinely cannot answer yet',
              'Each promise is written as something a machine could try, not a feeling',
              'You can name the one gap that would embarrass you most in front of a stranger',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why did the prototype weekend feel like most of the work?',
      options: [
        'Because AI tools are strongest on the invisible parts of a product',
        'Because the plan and the not-list had already been written',
        'Because AI collapsed exactly the slice that was always cheapest to show',
        'Because two days of focused effort really is most of what a small product needs',
      ],
      correct: 2,
    },
    {
      q: 'What is the sentence "it took a weekend" actually true about?',
      options: [
        'The visible slice, not the product',
        'The whole product, screens and services included',
        'Nothing — the weekend was an illusion of progress',
        'Only prototypes built by experienced engineers',
      ],
      correct: 0,
    },
    {
      q: 'For a product, what does "it works" actually claim?',
      options: [
        'That the core action succeeded on the day it was shown to its first viewer',
        'That the builder can no longer find any bugs in it',
        'That every screen has been built and looks right on a phone',
        'That it keeps working over time, for strangers, with awkward input',
      ],
      correct: 3,
    },
    {
      q: 'Two owners tap the same Saturday slot at the same moment. What must the product do?',
      options: [
        'Accept both bookings and let the groomer sort it out by phone',
        'Give the slot to one and refuse the other with a clear message',
        'Lock the whole page so only one customer can browse the slots at a time',
        'Show the slot as taken to everyone until the next day begins',
      ],
      correct: 1,
    },
    {
      q: 'In plain language, what is a machine-run check?',
      options: [
        'A promise about the product, tried automatically on every change',
        'A tool that quietly rewrites your code overnight to remove any bugs it finds',
        'A weekly reminder to run your checklist by hand',
        'A report on how quickly the pages load for customers',
      ],
      correct: 0,
    },
    {
      q: 'Why do hand-run checklists fail over the life of a product?',
      options: [
        'They cannot cover more than about ten items reliably',
        'They only work while the person who wrote them is still on the project full-time',
        'They take too long to run more than once a month',
        'They depend on attention, which fades once nothing has broken for a while',
      ],
      correct: 3,
    },
    {
      q: 'Your product has AI inside it. Where does testing the quality of its answers belong?',
      options: [
        'In this module\'s machine-run checks, like any other promise',
        'In the course \'Does Your AI Actually Work?\'',
        'Nowhere — AI answers cannot be meaningfully tested',
        'In Vibecoding\'s final module, alongside secrets and spending caps',
      ],
      correct: 1,
    },
    {
      q: 'At nine days of twenty-three, what is the honest position?',
      options: [
        'The product is nearly finished, because everything you can click now works',
        'The estimate was wrong, and the remaining lines will shrink',
        'Everything visible is done, and well under half the product exists',
        'The remaining days are optional polish for a careful builder',
      ],
      correct: 2,
    },
  ],
};

export default rpM2;
