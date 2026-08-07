import type { CourseModule } from '../../types/course';

const rpM4: CourseModule = {
  id: 'rp-m4',
  title: 'Shipping and Running It',
  icon: 'building-2',
  summary: 'Getting changes to users without holding your breath, finding out it broke before they tell you, and what the whole thing honestly costs each month. Plus the email that arrives at eleven at night, which is not a malfunction — it is what having users is.',
  lessons: [
    {
      id: 'rp4l1',
      title: 'Getting It to Users — and Taking It Back',
      sectionLabel: 'Shipping',
      diagram: 'DeployRollback',
      slides: [
        {
          heading: 'Two Copies from Here On',
          body: 'Until now there has been one copy of the booking page, and you have edited it the way you would edit a document: change it, look at it, change it again. The day the first real booking lands, that era ends. From here on there are two copies. One is the copy customers use — the one a dog owner may be halfway through booking on right now. The other is the copy you change, somewhere customers aren\'t. The rule is simple and worth saying plainly: you never change the thing people are standing on. If you edit the live page on a Tuesday afternoon and get it wrong, a customer meets your mistake before you do. Keeping a separate working copy costs almost nothing, and it removes an entire category of bad afternoon before any of them can happen.',
          bullets: [
            'From the first real booking onwards, there are two copies: theirs and yours',
            'Make changes where customers aren\'t — never on the page people are using',
            'Editing the live thing means customers meet your mistakes before you do',
            'A separate working copy removes a whole category of bad afternoon',
          ],
        },
        {
          heading: 'Shipping Is a Decision, Not an Accident',
          body: 'Once there are two copies, "shipping" stops being a mysterious engineering word. It just means moving a change from your copy to theirs — deliberately, at a moment you chose. That last part carries most of the value. You choose the moment: a quiet Tuesday evening, not a Saturday morning while the diary is filling. You choose what goes: one small change you can describe in a sentence, not a month of accumulated edits travelling together. And you look afterwards: make a booking yourself, watch the confirmation email arrive, glance at the page on your phone. None of this is technical. It is the same care a groomer takes before handing a dog back — a deliberate check at a chosen moment, rather than a hope. The habit costs minutes each time, and it is the difference between shipping and gambling.',
          bullets: [
            'Shipping means moving a change from your copy to the customers\' copy',
            'Choose the moment: a quiet Tuesday evening, not a filling Saturday diary',
            'Ship one change you can describe in a sentence, not a month of edits',
            'Look afterwards: book a slot yourself and watch the confirmation arrive',
          ],
        },
        {
          heading: 'Rollback: Taking a Change Back',
          body: 'Some changes will be wrong. Not might — will. You will ship something that looked fine on your copy and misbehaves on theirs, because the live copy has real data, real phones and real people doing things you never pictured. Rollback is the answer, and it is a product feature rather than an admission of failure: the ability to put back the last version that worked, quickly, while you think. The difference between a bad five minutes and a bad weekend is usually just whether you can do this — and whether you knew the steps before you needed them. If Vibecoding taught you to save a working copy after every good step, this is the same habit one level up: the saved copy now lives on the platform, and putting it back is a button you have already pressed once, calmly, in advance.',
          bullets: [
            'Some shipped changes will be wrong; plan for that rather than hoping',
            'Rollback means putting back the last version that worked, quickly',
            'Knowing the steps in advance separates a bad five minutes from a bad weekend',
            'It is Vibecoding\'s saved-copy habit, one level up and living on the platform',
          ],
        },
      ],
    },
    {
      id: 'rp4l2',
      title: 'Shipping Without Holding Your Breath',
      diagram: 'ShippingPipelinePlain',
      slides: [
        {
          heading: 'The Entire Idea in One Sentence',
          body: 'Here is the pipeline, plainly. When you ship a change, the checks you built in Module 2 — the list of promises, tried automatically — run first. If every check passes, the change moves on to the copy customers use. If one fails, the change never reaches them at all. That is the entire idea. Engineers call this CI/CD, and the ceremony around it can look elaborate, but you now know what all of it is for: a machine stands between your edits and your customers, and it refuses anything that breaks a promise. Notice what this replaces. Without it, the thing standing between your mistakes and your customers is your own memory, on a busy day, at whatever hour you happened to ship. The machine does not have busy days. It runs the whole list, every time, without being asked twice.',
          bullets: [
            'Every time you ship, the Module 2 checks run before anything moves',
            'A failing check stops the change from ever reaching customers',
            'The ceremony has a plain purpose: a machine that refuses broken promises',
            'It replaces your memory on a busy day with a list that never tires',
          ],
        },
        {
          heading: 'Why Fearless Shipping Ships Better',
          body: 'The real gift of the pipeline is what it does to your behaviour. When shipping is frightening, you ship rarely. Changes pile up for weeks, then go out together in one big batch — usually on a Friday, for reasons nobody can defend. And when the big batch breaks something, you cannot tell which of the forty changes did it. Fear causes batching, and batching causes the big bad Friday change. The pipeline breaks that cycle. Because the checks run every time, shipping stops being frightening, so you ship small and often. Each change is small enough to understand, small enough to describe in a sentence, and small enough to take back on its own when it goes wrong. The groomer\'s app might ship one small change a day for a week, each one thoroughly boring. Boring is the goal.',
          bullets: [
            'Fear causes batching; batching causes the big bad Friday change',
            'Forty changes shipped together means never knowing which one broke it',
            'With checks running every time, shipping small and often feels safe',
            'Small changes are easy to understand, describe and take back alone',
          ],
        },
        {
          heading: 'What Setting It Up Honestly Costs',
          body: 'Setting this up for the groomer\'s app is honestly about a day, and most of that day is not hard work. Hosting platforms want products run this way — it is what they are built around — so you are mostly asking the AI and the platform to connect things that already want to connect. Describe the goal in plain words: when I ship, run my checks first, and stop the change if one fails. Let the AI translate that into whatever the platform expects. The ledger\'s shipping line is two days in total: this day of setup, and a day spread across learning the rhythm — the first few deliberate ships, the rollback practised once, the check you add when something slips through anyway. For what it buys, it is the best value in the whole ledger: every future change, checked, for years.',
          bullets: [
            'Honestly about a day, mostly connecting things that want to connect',
            'Describe the goal in plain words and let the AI handle the translation',
            'The ledger\'s shipping line is two days: setup plus learning the rhythm',
            'The cheapest line in the ledger for what it buys: years of checked changes',
          ],
        },
      ],
    },
    {
      id: 'rp4l3',
      title: 'Finding Out It Broke Before They Tell You',
      diagram: 'KnowingItBroke',
      slides: [
        {
          heading: 'Silence Is Not a Signal',
          body: 'Here is the uncomfortable fact about a broken booking page: it is quiet. It produces no bookings, and it also produces no complaints, because customers do not report problems — they leave. A dog owner who meets a blank page at nine in the evening does not email you about it. They ring the groomer in the morning, or they try the place across town. What the groomer notices is not an error message but a quiet week, and by then the page may have been down for days. This is why "nobody has complained" is the most dangerous sentence in running a product. Silence can mean everything is fine, and it can mean the door is locked and customers have stopped knocking. From the inside, those two silences are identical. You need something other than silence to tell them apart.',
          bullets: [
            'A broken booking page produces no bookings and no complaints',
            'Customers don\'t report problems — they leave, quietly',
            'The groomer notices a quiet week, not an error message',
            '"Nobody has complained" cannot tell a healthy week from a locked door',
          ],
        },
        {
          heading: 'Three Modest Watchers',
          body: 'Watching a product does not require a wall of screens. Three modest things cover most of it. First, a heartbeat: something that checks the page every few minutes and messages you the moment it isn\'t there. This is a standard, cheap service — you give it your address and your phone, and it does nothing at all until the day it earns its keep. Second, an error log you actually glance at: a running list of things the app found wrong, read over coffee once a day, so small problems surface before they grow. Third, a weekly number you would notice going to zero — for the groomer, bookings made this week. Each watcher catches what the others miss: the heartbeat catches dead, the log catches sick, and the number catches failures that look healthy from every other angle. Setting them up is the ledger\'s watching line: one day.',
          bullets: [
            'A heartbeat: something checks the page every few minutes and messages you',
            'An error log you glance at daily, so small problems surface early',
            'One weekly number you would notice going to zero — bookings made',
            'Dead, sick, and looks-healthy-but-isn\'t: each watcher catches one',
          ],
        },
        {
          heading: 'When the Alarm Goes',
          body: 'The heartbeat message arrives while you are making dinner. What now? The order matters more than the skill. First, look: open the page yourself and see what a customer sees. Second, put it back: roll back to the last version that worked, using the steps you practised in the first lesson. Only then, third, diagnose. Running the broken thing while you investigate is optional, and it is the option you should decline — customers do not benefit from your curiosity. Vibecoding taught you to watch the first five minutes after sharing; this is that habit made permanent. It is worth being clear about what the watchers actually buy you: not the absence of failure, but the timing of it. Knowing within minutes instead of next morning is the entire difference between a hiccup nobody noticed and a story your customers tell.',
          bullets: [
            'Look first: open the page and see exactly what a customer sees',
            'Roll back before you diagnose — put back the version that worked',
            'Running the broken thing while you think is optional; decline it',
            'Watching buys timing, not perfection: minutes instead of next morning',
          ],
        },
      ],
    },
    {
      id: 'rp4l4',
      title: 'What a Thousand Users Cost',
      diagram: 'CostAtRealUsage',
      slides: [
        {
          heading: 'The Bill, in Three Honest Lines',
          body: 'Let us put real numbers on it, with the usual caution: these are honest illustrative estimates for the worked example, not promises about your product. As a prototype, the booking page cost roughly £0–15 a month — free tiers and pocket change. As a real product with around 200 customers, it costs roughly £40–60 a month. If it grew to around 1,000 users, illustratively £120–200 a month. Notice the shape of that line. The cost of getting real is not the cost of getting big: the jump from prototype to product is proportionally the steep one, because that is where you start paying for the properties Module 3 taught you to want. After that, cost grows more slowly than usage does. For a business taking its bookings all week, £40–60 a month is not a technology bill. It is a phone bill.',
          bullets: [
            'Prototype: roughly £0–15 a month, mostly free tiers and pocket change',
            'Real product with around 200 customers: roughly £40–60 a month',
            'At around 1,000 users: illustratively £120–200 a month',
            'The steep jump is getting real, not getting big — then cost grows slowly',
          ],
        },
        {
          heading: 'What the Money Actually Buys',
          body: 'Here is the surprise in the bill: mostly, you are not paying for computers. The machines that serve your pages are the cheap part. The money goes on the database that keeps real backups you have actually restored, the email service whose messages reach inboxes instead of spam folders, and the monitoring that messages you when the page dies — the properties, in other words, not the pixels. That explains the free-tier moment that catches everyone. The free versions of these services were built for prototypes, and they end exactly when you start depending on them. This is not a scam, and it is not bad luck. It is the pricing telling you the truth a little before you were ready to hear it: your product got real, and real products pay for the things they rely on.',
          bullets: [
            'Computers are the cheap part; you are barely paying for them',
            'The bill is backups, email that arrives, and monitoring — the properties',
            'Free tiers were built for prototypes and end when dependence begins',
            'The end of a free tier is not a scam; it means the product got real',
          ],
        },
        {
          heading: 'Cost Is a Design Input',
          body: 'Some features are cheap to build and expensive to run, and the second number is the one that matters, because you pay it every month for as long as the feature exists. The clearest example is anything with AI inside it. A feature that calls an AI service each time it is used — say, writing a friendly reminder message for every booking — costs pennies per use, and pennies multiplied by every booking, forever, is a real line on the bill that grows exactly as fast as your success does. Build such things when they earn their keep, not because they were easy to add. This is Module 1\'s not-list wearing its other hat: every feature you decline protects the bill as well as the ledger. Before you add anything, ask what it would cost at a thousand users — then decide.',
          bullets: [
            'Cheap to build but expensive to run is a common, dangerous combination',
            'Per-use AI features grow the bill exactly as fast as your success',
            'Build features when they earn their keep, not because they were easy',
            'The not-list protects the bill too — ask the cost at 1,000 users first',
          ],
        },
      ],
    },
    {
      id: 'rp4l5',
      title: 'The Email at Eleven at Night',
      diagram: 'ElevenPmEmail',
      slides: [
        {
          heading: 'The Job the Product Creates',
          body: 'The day the booking page becomes the way the business takes bookings, it creates a job, and the job is yours. Real users means someone is locked out, someone was charged wrong on the hand-sent invoice, someone\'s booking has vanished as far as they can tell — and each of them writes to whatever address they can find, at hours you did not choose. The email at eleven at night is not a sign that something has gone wrong with your product. It is what having users is. Honestly costed, support runs two to four hours a week, indefinitely — not a launch-week surge that fades, but a permanent feature of the product, as real as any button on the screen. The rest of this lesson is about making those hours survivable, and then about noticing that they are secretly valuable.',
          bullets: [
            'Real users create support on day one: lockouts, charges, vanished bookings',
            'The eleven o\'clock email is not a malfunction — it is what users are',
            'Honest cost: two to four hours a week, indefinitely',
            'Support is a permanent feature of the product, not a launch-week surge',
          ],
        },
        {
          heading: 'Making the Hours Survivable',
          body: 'Three small decisions turn support from a dread into a routine. First, one channel you actually read: a single address on the page, checked at times you chose, instead of messages scattered across texts, social accounts and a contact form nobody watches. Second, an honest reply-time promise, written where customers can see it: within a day, kept, beats within an hour, claimed and missed — the broken promise costs more trust than the slower reply ever would. Third, a small written list of the five problems that will recur — and they will recur, because support questions repeat far more than they surprise — with the fix for each written down while it is fresh. The first time a problem appears it costs you an evening. Written down, the second time costs five minutes, and the list quietly becomes the start of the handover file Module 5 will ask you for.',
          bullets: [
            'One channel you actually read, checked at times you chose',
            'Within a day, kept, beats within an hour, claimed and missed',
            'Write down the five recurring problems and their fixes while fresh',
            'That fixes list quietly becomes the start of Module 5\'s handover file',
          ],
        },
        {
          heading: 'The Best Exploration You Will Ever Get',
          body: 'Here is the consolation hidden in the support inbox: it is the best exploration you will ever get. Module 1 sent you out to ask people what the product had to do; from launch day onwards, they write to you unprompted. Every locked-out customer, every confused question, every request for the thing you deliberately left out is Module 1\'s exploration continuing for free — and the emails are your not-list review, telling you which refusals to keep and which have finally earned their date. And with that, the ledger closes. Shipping 2, watching 1, launch fixes 2: five days for this module, and 23 days in total — of which the weekend demo was 2. Under a tenth. You have now seen every line of that number, which was the promise. One module remains: what year two costs, and whether anyone else could run this.',
          bullets: [
            'Support is exploration that writes to you unprompted, for free',
            'The inbox is your not-list review: which refusals have earned their date',
            'The ledger closes: shipping 2 + watching 1 + launch fixes 2 = 5 days',
            '23 days in total, and the demo was 2 — under a tenth, every line seen',
          ],
          exercise: {
            task: 'Estimate what your own product costs to run at three sizes, then write the plan for the day it breaks. Fill in the scaffold below — honest guesses beat blank lines, and you can sharpen the numbers as real bills arrive.',
            copyText: 'Running cost, honestly guessed:\nAt 10 users: £[ ] a month, because [ ]\nAt 100 users: £[ ] a month, because [ ]\nAt 1,000 users: £[ ] a month, because [ ]\nServices that stop being free somewhere between those sizes: [ ]\n\nThe it-broke plan:\nHow would I know it broke? [heartbeat / error log / weekly number]\nHow do I put back the last good version? [the exact steps, written out]\nWhat do I tell the customer who noticed? [two honest sentences]\nMy reply-time promise, written where customers can see it: [ ]',
            selfCheck: [
              'Your three cost estimates name the services behind the numbers, not just totals',
              'You have practised the put-it-back steps once for real, not just written them',
              'Your reply-time promise is one you could keep in a genuinely bad week',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why should you keep two copies of the product once real bookings exist?',
      options: [
        'So you always have a backup if the database fails one day',
        'Because hosting platforms charge less when you run a second copy',
        'So you can change one copy while customers use the other',
        'So a second groomer can have a separate version of the app',
      ],
      correct: 2,
    },
    {
      q: 'What is the whole idea of the shipping pipeline, in plain terms?',
      options: [
        'Checks run first, and a failing check stops the change reaching customers',
        'The platform reads through your code and suggests improvements before it goes out',
        'Changes go out overnight so customers never notice an interruption',
        'An engineer approves each change before it reaches the live copy',
      ],
      correct: 0,
    },
    {
      q: 'Why does fear of shipping lead to worse breakages, not fewer?',
      options: [
        'Nervous builders make more typing mistakes under pressure',
        'Frightened builders test more, which slows shipping but prevents nothing',
        'Customers lose patience when updates arrive too rarely',
        'It causes batching, and a big batch hides which change broke things',
      ],
      correct: 3,
    },
    {
      q: 'A booking page has been broken for three days. Why has nobody told you?',
      options: [
        'Hosting platforms usually hide error messages from customers automatically',
        'Customers who hit a problem tend to leave rather than report it',
        'Booking pages fail less visibly than other kinds of page',
        'Most failures happen at night when nobody is trying to book',
      ],
      correct: 1,
    },
    {
      q: 'The heartbeat message says the page is down. What comes before diagnosis?',
      options: [
        'Reading the error log line by line until you find the cause',
        'Putting back the last version that worked',
        'Emailing customers to warn them the page may be unreliable',
        'Restarting the hosting service and waiting to see if it recovers',
      ],
      correct: 1,
    },
    {
      q: 'Where does most of the monthly bill for a real product actually go?',
      options: [
        'The computers that actually serve your pages to visitors',
        'Fees the platform charges for each change you ship',
        'Storage for the growing history of old bookings',
        'Backups, email that reaches inboxes, and monitoring',
      ],
      correct: 3,
    },
    {
      q: 'Why do free tiers tend to end just as you start depending on them?',
      options: [
        'They were built for prototypes, and your product has stopped being one',
        'Providers deliberately wait until moving away from them would be painful',
        'Free tiers are only ever offered for a product\'s first year',
        'Usage counts as commercial once you take any payment at all',
      ],
      correct: 0,
    },
    {
      q: 'What makes the support hours survivable, according to this module?',
      options: [
        'Promising replies within the hour so customers stay calm',
        'A help page so detailed that nobody ever needs to write to you',
        'One channel, an honest reply-time, and a written list of recurring fixes',
        'Hiring part-time help as soon as the first complaint arrives',
      ],
      correct: 2,
    },
  ],
};

export default rpM4;
