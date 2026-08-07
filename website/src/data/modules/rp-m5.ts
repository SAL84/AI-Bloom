import type { CourseModule } from '../../types/course';

const rpM5: CourseModule = {
  id: 'rp-m5',
  title: 'The Second Year',
  icon: 'shield',
  summary: 'The year nobody plans for. Software that rots while standing still, the one-page handover that frees the business from your head, and the full fifteen-dimension comparison this course has been walking towards. It closes with the honest answer to what you can genuinely ship — more than the doubters say, less than the demo implied.',
  lessons: [
    {
      id: 'rp5l1',
      title: 'The App You Never Touched Broke Anyway',
      diagram: 'SoftwareRot',
      slides: [
        {
          heading: 'Nothing Moved, and It Broke Anyway',
          body: 'Here is the strangest fact in the whole course: software decays while standing perfectly still. Your app is built on other people\'s services — the hosting, the database, the email sender — and every one of them keeps moving after you stop. Platforms retire the exact feature you happen to use. Prices change. The email service tightens its rules, and confirmations that arrived reliably for a year start landing in spam. None of this is anyone punishing you. Those companies are simply running their own products, and yours stands on top of theirs. So a booking page that worked flawlessly in March can quietly fail in October with no change on your side at all. "We changed nothing" feels like it ought to be a defence. It is not one that is available to you, because the ground your product stands on was never yours to keep still.',
          bullets: [
            'Your product stands on services that keep changing after you stop',
            'Platforms retire features, adjust prices and tighten rules without asking',
            'An app can fail months later with no change on your side at all',
            '"We changed nothing" is not a defence that is available to you',
          ],
        },
        {
          heading: 'The World Moves Too',
          body: 'The services underneath are only half of it. The world the app describes keeps moving as well. The groomer raises her prices in January. Saturday hours change. A second groomer joins in the spring, and the app still offers a single column of slots. She closes for a week in August, and the page cheerfully takes bookings for days she will be on a beach. Notice what has happened: nobody broke anything, and yet the app is now wrong — and Module 3 taught you that wrong is worse than absent, because wrongness never announces itself. A booking page is a description of a business at one particular moment, and businesses refuse to hold still. Every change in the real shop becomes a small maintenance job in the software, whether or not you ever planned to open it again. The app does not know the world moved. Somebody has to tell it.',
          bullets: [
            'The app describes the business at one moment, and the business keeps moving',
            'New prices, new hours or a second groomer all make the old app wrong',
            'Wrong data never announces itself — the page looks as confident as ever',
            'Every change in the shop becomes a small job in the software',
          ],
        },
        {
          heading: 'A Day a Month, Budgeted',
          body: 'So put a number on it, the way this course has put a number on everything else. For the groomer\'s app in its second year, with no new features at all, expect about one day a month of upkeep. Renewing things that expire, nudging a service that changed its rules, adjusting slots for the season, restoring something from a backup once or twice. Named in advance, that is a modest line item — a day a month to keep a business\'s booking system standing. Discovered by surprise, it feels like a betrayal: you finished, didn\'t you? The difference is entirely in the expecting. And the alternative to paying it is not saving the time. It is the app quietly degrading, one small wrongness at a time, until the groomer stops trusting it and goes back to the phone. Products are not finished. They are kept, the way a garden is kept, or they are lost.',
          bullets: [
            'Budget about one day a month of upkeep in year two, with no new features',
            'Expected, it is a line item; discovered, it feels like a betrayal',
            'Skipping upkeep does not save the time — the app degrades until nobody trusts it',
            'Products are kept, the way gardens are kept, or they are lost',
          ],
        },
      ],
    },
    {
      id: 'rp5l2',
      title: 'Could Anyone Else Run This?',
      diagram: 'HandoverTest',
      slides: [
        {
          heading: 'The Question Nobody Wants to Ask',
          body: 'Engineers have a blunt name for this: the bus factor — how many people would have to be hit by a bus before nobody could run the thing. Let us ask it more kindly. If you went on holiday for three weeks, what would happen to the groomer\'s bookings? Right now, every password, every bill and every it-broke habit from Module 4 lives in exactly one place: your head. The prototype was yours, and that was fine — it existed to answer your question. The product belongs to the business. Real customers plan their Saturdays around it, and a product that only one person on earth can run is a liability wearing a success costume. Nothing dramatic needs to go wrong for this to matter. A holiday will do it. So will flu. So will you, entirely reasonably, moving on to your next idea.',
          bullets: [
            'The bus factor: how many people could run this without you',
            'Today the passwords, bills and it-broke habits live only in your head',
            'The prototype was yours; the product belongs to the business',
            'A product one person can run is a liability wearing a success costume',
          ],
        },
        {
          heading: 'The Handover File: One Honest Page',
          body: 'The fix is not a technical project. It is one honest page, written this week and kept somewhere the business could find it. Where the app runs, and how to sign in. Where the data lives, where the backups live, and when you last restored one. The services it stands on, and where each bill arrives. How to put back the last good version when a change goes wrong — the exact steps from Module 4, written down rather than remembered. And the five support problems that keep recurring, with their fixes, straight from your support notes. Notice what is not on the page: anything about the code. A person taking over does not need to read the code any more than you did. They need to run the product, and running a product is a set of locations, steps and habits — all of which fit on one page.',
          bullets: [
            'One page: where it runs, where data and backups live, services and bills',
            'The put-it-back steps written down, not remembered',
            'The five recurring support problems and their fixes',
            'Nothing about the code — running a product is locations, steps and habits',
          ],
        },
        {
          heading: 'Test It Like a Handover',
          body: 'Vibecoding taught you to test your app like a stranger, because your own machine carries invisible help. Test the handover page the same way, because your own head does too. Hand the page to a capable friend — not an engineer, just someone sensible — and ask them to talk you through taking over: signing in, finding last month\'s bill, putting back the last good version, answering the most common support email. Give them an hour, and stay quiet. Every place they get stuck is a line the page is missing, and every missing line is something that still lives only in your head. Update the page, then repeat once a year, or whenever something big changes. You are not preparing for disaster, exactly. You are turning a product that happens to have you into a product that merely benefits from you — which is what the business always needed it to be.',
          bullets: [
            'A capable friend, the page, an hour — and you stay quiet',
            'Every place they stall is a line the page is missing',
            'Whatever is not on the page still lives only in your head',
            'The goal: a product that benefits from you, not one that needs you',
          ],
        },
      ],
    },
    {
      id: 'rp5l3',
      title: 'The Weekend Build and the Real Product',
      sectionLabel: 'Capstone',
      diagram: 'WeekendVsRealProduct',
      slides: [
        {
          heading: 'The Comparison, Part One: The Data',
          body: 'This is the lesson the whole course has been walking towards: the weekend build and the real product, side by side, across fifteen dimensions. Take the first five — the data — and hold both versions of the groomer\'s app in mind. Where the data lives: wherever the tool happened to put it, versus a database chosen on purpose, with a shape you decided. What happens when data is wrong: a shrug, versus a plan — because a wrong booking now costs a real Saturday. Backups you have actually restored: none, versus a restore you have practised and timed. Accounts and resets: one shared login, versus real accounts with the weekly lockout handled calmly. Who can see what: whoever finds the link, versus the groomer seeing everything and each customer seeing only their own bookings — enforced by the product, not hidden by the screen. Five dimensions, and every one invisible in a demo.',
          bullets: [
            'Where the data lives and what shape it takes: accidental versus decided',
            'Wrong data: a shrug versus a plan, because wrongness costs real Saturdays',
            'Backups: a hopeful copy versus a restore you have actually practised',
            'Accounts, resets and who-sees-what: enforced by the product, not the screen',
          ],
        },
        {
          heading: 'Part Two: Services and Shipping',
          body: 'Dimensions six to nine cover the services you stand on and how change travels. Email that actually arrives: the weekend build sends email and hopes; the product uses a proper email service and treats a confirmation landing in spam as a broken feature, because from the customer\'s side it is a lost booking. Taking payment: the weekend build never touches money — an invoice sent by hand, exactly as the not-list decided; the product may still not, and if it ever does, a payment provider carries it, never your own pages. Getting changes to users: editing the live thing, versus two copies — changes made where customers aren\'t, then shipped deliberately, with the checks running first. Undoing a bad change: panic, versus rollback — the steps for putting back the last good version, known before they were needed. The pattern repeats each time: the demo version merely exists; the product version is decided, practised and owned.',
          bullets: [
            'Email that arrives is a feature — a confirmation in spam is a lost booking',
            'Payment rides with a payment provider, or stays an invoice sent by hand',
            'Changes are made where customers aren\'t, then shipped deliberately',
            'Rollback: the steps known before they were needed, not discovered during',
          ],
        },
        {
          heading: 'Part Three: Running It',
          body: 'The last six dimensions are about the years, and they are the ones the weekend build cannot even see. Knowing it broke: silence, versus a heartbeat, an error log, and a weekly number you would notice going to zero. Cost at real usage: a free tier, versus a bill you have estimated and capped. Support — who answers: nobody, versus you, on one channel you actually read, with an honest reply-time promise. Updates and rot: "finished", versus the day a month this module priced. Handover — could anyone else run it: no, versus the one honest page from the last lesson, tested on a friend. And the second year — upkeep versus new features: never considered, versus budgeted, so that improvement is a choice rather than a rescue. Read the fifteen back to back and something stands out. Barely any of them are about code. They are decisions, habits and honesty — which is why they were always yours to do.',
          bullets: [
            'Knowing it broke: silence versus a heartbeat and a number you watch',
            'Cost, support and upkeep: estimated and owned versus never considered',
            'Handover: one tested page versus a product trapped in one head',
            'Barely any of the fifteen are about code — they are decisions and habits',
          ],
        },
        {
          heading: 'The Ledger, Complete',
          body: 'Now close the ledger, every line filled in. The prototype — the Vibecoding weekend — was 2 days. Exploration, scope and the plan: 3. Building the rest, with checks that run without you: 4. Data done properly, accounts, and the hidden services: 9 — still the biggest line. Shipping, watching and the launch fixes: 5. Total to a real first version: 23 days, of which the demo was 2 — under a tenth. Then the running of it: from roughly £0–15 a month as a prototype to £40–60 a month with 200 customers, and illustratively £120–200 a month at 1,000 users. Support: 2–4 hours a week, indefinitely. In year two, about a day a month of upkeep before any new feature. Sit with that ratio, and hear what it actually means. The point was never to discourage you. Every line on this page was walkable. None needed an engineering degree. Most needed a decision rather than a skill — and you have now watched every one of them being made.',
          bullets: [
            'Demo 2, plan 3, build 4, below-the-screen 9, shipping, watching and fixes 5: 23 days',
            'Roughly £40–60 a month at 200 customers; illustratively £120–200 at 1,000',
            'Support 2–4 hours a week; upkeep about a day a month in year two',
            'Every line was walkable — most needed a decision, not a skill',
          ],
        },
      ],
    },
    {
      id: 'rp5l4',
      title: 'What You Can Genuinely Ship',
      diagram: 'GenuinelyShippable',
      slides: [
        {
          heading: 'More Than the Doubters Say',
          body: 'Time to say plainly what this course believes you can do, because it is more than the doubters say. A non-engineer with AI can ship a real product for a real small business, and run it responsibly for years. The shape of that product is familiar by now: a bounded set of users — two hundred customers, not two hundred thousand; bounded data you have inventoried and could look someone in the eye about; actions that can be undone; and a person in the loop wherever a mistake would touch somebody. The groomer\'s booking page is exactly this shape, and so are a striking number of genuinely useful products: the club rota, the tuition scheduler, the repair-shop job board. Five years ago, every one of them needed an engineer or went unbuilt — and mostly they went unbuilt. That is the change. Not that building became trivial, but that this whole shape of product became yours to make.',
          bullets: [
            'A real product for a real small business, run responsibly for years',
            'The shape: bounded users, bounded data, reversible actions, a person in the loop',
            'Rotas, schedulers, booking pages — products that mostly went unbuilt before',
            'The change is not that building got trivial, but that this shape became yours',
          ],
        },
        {
          heading: 'Less Than the Demo Implied',
          body: 'Honesty has to cut both ways, so here is the other edge. Some products you still cannot responsibly ship, and the demo\'s confidence does not change that. Products where mistakes cannot be undone, or where the law has strong opinions: moving money, health, anything touching children\'s data. Products that act on their own at a scale no person could review. And — the most useful test of all — anything you could not afford to watch, because you now know that running a product means watching it, answering for it, and putting it back when it breaks. Notice where the boundary sits. It is not intelligence, yours or the AI\'s. It is supervision: can a person see what the product does, catch it, and reverse it? Vibecoding\'s final module drew this line for prototypes. It holds for products too, and no demo, however dazzling, has ever moved it.',
          bullets: [
            'Irreversible or regulated ground — money movement, health, children\'s data — is out',
            'So is unsupervised action at a scale no person could review',
            'The plainest test: could you afford to watch it, answer for it, reverse it?',
            'The boundary is supervision, not intelligence — and demos do not move it',
          ],
        },
        {
          heading: 'The Quiet Dignity of the Small Real Thing',
          body: 'Put the two halves together and you get the course\'s closing picture. A booking page that one business relies on every working day, for years — backed up, watched, supported, ready to hand over — is a real product in every sense that matters. It beats the Gmail rebuild, because the Gmail rebuild was never going to happen — and not because you aren\'t clever enough. Gmail is spam filtering at planetary scale, twenty years of edge cases, deliverability, compliance, and a support organisation; it was never going to be anyone\'s clever weekend. The delusion this course exists to correct was never "I can build things". That one is true, and you have the working product to prove it. It was "the demo was most of the work". It never was: two days of twenty-three. Once you see the ratio clearly, you can stop being disappointed by it and start planning with it.',
          bullets: [
            'A booking page one business relies on for years is a real product',
            'It beats the Gmail rebuild, because that rebuild was never going to happen',
            '"I can build things" is true; "the demo was most of the work" never was',
            'Seen clearly, the ratio is not a disappointment — it is a plan',
          ],
        },
        {
          heading: 'Where to Go From Here',
          body: 'The shelf from here is short and good. Vibecoding is behind you: it taught the weekend, and this course taught the other twenty-one days. If your product has AI inside it, \'Does Your AI Actually Work?\' is the course for testing that properly, with evidence rather than vibes. When the day comes that an engineer joins you, \'Securing AI Systems\' speaks their language. And two books have outlived every tool they mention. The Mythical Man-Month, from 1975, on why adding people to late software makes it later — still true, because it was never really about software. The Phoenix Project, a novel about why shipping small and often beats the big terrifying release — you lived its argument in Module 4. Now, one last time, the exercise: your own project, all fifteen dimensions, and then the decision this whole course has been preparing you to make honestly.',
          bullets: [
            '\'Does Your AI Actually Work?\' when your product includes AI',
            '\'Securing AI Systems\' for the day an engineer joins you',
            'The Mythical Man-Month: adding people to late software makes it later — still true',
            'The Phoenix Project: ship small and often — you lived this in Module 4',
          ],
          exercise: {
            task: 'Fill in the fifteen-dimension comparison for your own project — the honest state of each dimension today, even where the honest answer is "nothing yet". Then make the call: ship, don\'t ship yet, or ship with help — and name the three dimensions that decided it.',
            copyText: 'The fifteen dimensions — my project, honestly, today:\n1. Where the data lives: [ ]\n2. What happens when data is wrong: [ ]\n3. Backups you have actually restored: [ ]\n4. Accounts and resets: [ ]\n5. Who can see what: [ ]\n6. Email that actually arrives: [ ]\n7. Taking payment: [ ]\n8. Getting changes to users: [ ]\n9. Undoing a bad change: [ ]\n10. Knowing it broke: [ ]\n11. Cost at real usage: [ ]\n12. Support — who answers: [ ]\n13. Updates and rot: [ ]\n14. Handover — could anyone else run it: [ ]\n15. The second year — upkeep versus new features: [ ]\n\nMy decision: [ship / don\'t ship yet / ship with help]\nThe three dimensions that decided it:\n1. [ ]\n2. [ ]\n3. [ ]',
            selfCheck: [
              'Every dimension has an honest answer, even where the answer is "nothing yet"',
              'Your decision is one of the three, written down — not "probably fine"',
              'The three deciding dimensions would survive being read back by a sceptical friend',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why does software that nobody touched still break over time?',
      options: [
        'Code slowly wears out the way physical machinery does',
        'Users gradually break it by using it in unexpected ways',
        'The services it stands on change around it, even when you change nothing',
        'Hosting platforms delete apps that are not updated regularly',
      ],
      correct: 2,
    },
    {
      q: 'With no new features at all, how much upkeep should you budget in year two?',
      options: [
        'About a day a month',
        'A weekend once a year',
        'None, if you built it carefully the first time',
        'Roughly half of every working week',
      ],
      correct: 0,
    },
    {
      q: 'Why is a product only one person can run "a liability wearing a success costume"?',
      options: [
        'One person cannot answer support email quickly enough',
        'Solo-run products cost more to host and support',
        'One person will eventually run out of ideas for new features',
        'If that person stops, the system stops with them',
      ],
      correct: 3,
    },
    {
      q: 'What belongs in the one-page handover file?',
      options: [
        'A full printout of the code, with comments explaining every part',
        'Where it runs, where data and bills live, and how to roll back',
        'A diary of every change you have made since the first weekend',
        'The original spec and the not-list from the planning module',
      ],
      correct: 1,
    },
    {
      q: 'When a capable friend tries to take over using only your handover page, what does the test reveal?',
      options: [
        'What is missing from the page still lives only in your head',
        'Whether your friend is capable enough to take over',
        'Whether the code is well organised enough to hand on',
        'How long a complete handover would take to carry out in practice',
      ],
      correct: 0,
    },
    {
      q: 'Across the fifteen-dimension comparison, what did most dimensions turn out to need?',
      options: [
        'A professional engineer on call',
        'A bigger budget than the prototype had',
        'Several months of extra building time',
        'A decision rather than a new technical skill',
      ],
      correct: 3,
    },
    {
      q: 'The demo was 2 of the 23 days. What does the course say that ratio means?',
      options: [
        'AI only helps with a small fraction of any project',
        'The demo was real work, but under a tenth of the whole',
        'Most builders should plan to spend 23 days on the demo alone',
        'The remaining days are work for a professional engineer',
      ],
      correct: 1,
    },
    {
      q: 'What marks the boundary of what a non-engineer can genuinely ship?',
      options: [
        'Whether the AI can generate all of the code',
        'How intelligent the product needs to be',
        'Whether you can supervise and reverse what it does',
        'Whether you can afford professional hosting and support',
      ],
      correct: 2,
    },
  ],
};

export default rpM5;
