import type { CourseModule } from '../../types/course';

const rpM3: CourseModule = {
  id: 'rp-m3',
  title: 'The Parts That Aren\'t the Screen',
  icon: 'layers',
  summary: 'The module about the part of the product nobody screenshots. Where the data lives and what happens when it is wrong, why the first change after real bookings exist is the dangerous one, backups you have actually restored, the locked-out customer, and the services you quietly stand on. Nine days of work that leave the screen looking exactly as it did — which is rather the point.',
  lessons: [
    {
      id: 'rp3l1',
      title: 'Where the Data Lives',
      diagram: 'WhereDataLives',
      slides: [
        {
          heading: 'The Record Two People Plan Around',
          body: 'Up to now, a booking has been something on a screen. The moment the page becomes the way the business takes bookings, it becomes something else: a record two people plan their Saturday around. The groomer sets up the table for it. The owner drives across town for it. That record has to live somewhere, and the somewhere is a database — which sounds technical but has a plain model: a filing system the app trusts completely. Whatever the filing system says, the app repeats, without doubt or embarrassment. It will show a free slot that is not free, or an appointment for a dog that does not exist, with total confidence. The screen is only ever a window onto those files. This module is about the files themselves — what goes into them, what happens when they are wrong, and who is allowed to open the drawer.',
          bullets: [
            'A real booking is a promise two people plan around, not a row on a screen',
            'A database, plainly: a filing system the app trusts completely',
            'The app repeats whatever the files say, with total confidence',
            'The screen is only a window — this module is about the files behind it',
          ],
        },
        {
          heading: 'Wrong Data Is Worse Than No Data',
          body: 'Here is a distinction worth carrying for the rest of this course. If a booking goes missing, someone notices quickly. The customer emails, the page looks empty, the gap announces itself. If a booking is wrong, nothing announces anything. The groomer preps for a large dog and a small one arrives. A customer turns up on Tuesday for an appointment the system quietly moved to Thursday. Both sides did exactly what the record told them, and the record lied. Wrongness is quiet, and that is what makes it expensive: it spends trust the business took years to earn, one confused doorstep at a time. Absence announces itself; wrongness does not. That one sentence explains most of what this module asks of you — the care about what is recorded, the copies, the checks — because you cannot fix an error you never hear about.',
          bullets: [
            'Missing data announces itself; wrong data stays quiet',
            'The groomer preps for a dog that isn\'t coming — both sides trusted the record',
            'Wrong data spends the business\'s trust one confused doorstep at a time',
            'You cannot fix an error you never hear about',
          ],
        },
        {
          heading: 'Decide What Gets Recorded, on Purpose',
          body: 'Your prototype already records things. What it records was decided during the Vibecoding weekend, mostly by the AI, mostly by accident, and nobody looked. Now is the moment to look. Three questions do the work. What is recorded — a name, an email, a slot, a dog? What is required — can a booking exist without an owner\'s email, and should it? And the surprisingly deep one: what is \'one booking\', exactly? The customer with two dogs on the same morning — is that one booking or two? The groomer needs double the time either way, but the record has to say so somewhere. If the answer is fuzzy, the records will be fuzzy, and the truth arrives on a busy Saturday. None of this needs technical skill. It needs decisions, written in plain words, that you hand to the AI as the rules of the filing system.',
          bullets: [
            'The prototype decided what to record by accident, and nobody looked',
            'Ask what is recorded, what is required, and what \'one booking\' even means',
            'Two dogs on one morning: one booking or two? Fuzzy answers make fuzzy records',
            'These are decisions in plain words, not technical work',
          ],
        },
      ],
    },
    {
      id: 'rp3l2',
      title: 'Changing Your Mind About Data',
      diagram: 'MigrationsBackups',
      slides: [
        {
          heading: 'The Day You Need One More Question',
          body: 'Real products change their minds, and the day it happens looks innocent. Suppose the business grows and a second groomer joins. Every booking now needs one more piece of information: with whom. The form is easy — the AI adds a choice to the page in minutes. The trap is behind the form. You have 200 existing bookings, made under the old rules, and none of them says with whom. Are they all with the original groomer? Probably — but \'probably\' is not something a filing system can hold. You cannot just change the form. You must also decide, deliberately, what becomes of every record made before the change. That decision is the real work, and no screen will ever show it to you. Changing the shape of live data while people depend on it is the most grown-up thing this course asks of you.',
          bullets: [
            'A second groomer means every booking needs \'with whom\' — and 200 records don\'t have it',
            'Changing the form is minutes; deciding what old records now mean is the work',
            '\'Probably with the original groomer\' is not something a filing system can hold',
            'Every change to what is recorded must answer for records made under the old rules',
          ],
        },
        {
          heading: 'Where Vibecoded Apps Actually Die',
          body: 'This is where vibecoded products die — not during the build, when everything is reversible, but at the first change after real data exists. Ask an AI to add \'with whom\' and it will do it, cheerfully, in a way that looks perfect on screen. What it will not reliably do is care about your 200 existing bookings. It may quietly strand them, unreachable under the new rules. It may rewrite them with a guess. In the worst case it rebuilds the filing system fresh, and the old records are simply gone — while the page still loads, still looks right, still takes new bookings. You find out when a regular arrives for an appointment the system no longer remembers. The AI is not being careless with code; it is being careless with history, because you never told it the history mattered. Telling it is your job now.',
          bullets: [
            'The dangerous moment is not the build — it is the first change after real data exists',
            'AI will change the form happily and strand or destroy old records quietly',
            'The page can look perfect while the history behind it is gone',
            'The AI is careless with history unless you tell it the history matters',
          ],
        },
        {
          heading: 'A Copy Nobody Has Restored Is a Hope',
          body: 'Backups are what make the previous slide survivable, so it is worth being honest about what a backup is. A copy nobody has ever restored is a hope, not a backup. Plenty of businesses have discovered, on the worst possible day, that their copies were empty, incomplete, or impossible to put back. The fix is a drill, done calmly, before you need it: take a copy, practise putting it back somewhere safe, and write down the steps while they are fresh. Then ask four questions of whatever platform holds your data. Does it keep copies at all? How far back do they go? Have I actually restored one? And how long does putting one back take — minutes, or a lost afternoon? If you can answer all four, you have a backup. If you can only answer the first, you have a feeling.',
          bullets: [
            'A copy nobody has restored is a hope, not a backup',
            'Practise putting a copy back before you need to, and write the steps down',
            'Ask the platform: does it keep copies, how far back, how long does a restore take',
            'If you have never restored one, you do not yet know what you have',
          ],
        },
        {
          heading: 'The Rule: Copy, Change, Look, Then Touch',
          body: 'All of this collapses into one rule, short enough to keep. Before any change to what is recorded: copy first, change the copy, look at the old records through the new shape, and only then touch the real thing. Copy first, because a copy makes every mistake survivable. Change the copy, so the version customers depend on stays untouched while you experiment. Look at the old records through the new shape — actually open them: does the regular\'s standing Saturday booking still make sense, does the customer with two dogs still have both? Only when the copy behaves, and history reads correctly, does the real thing get the change. This is slower than letting the AI loose on live data. It is meant to be. The extra hour is the entire difference between \'we changed how bookings work\' and \'we lost the bookings\'.',
          bullets: [
            'Copy first — a copy makes every mistake survivable',
            'Change the copy while the real thing keeps serving customers',
            'Open old records through the new shape and check they still make sense',
            'Only then touch the real thing — the extra hour is the whole difference',
          ],
        },
      ],
    },
    {
      id: 'rp3l3',
      title: 'Accounts, Passwords and the Locked-Out Customer',
      diagram: 'AccountsAndResets',
      slides: [
        {
          heading: 'Two Kinds of People',
          body: 'Vibecoding\'s final module said never build your own sign-in, and that advice has not aged a day — use the sign-in your platform provides. This lesson is about everything around sign-in that nobody mentions. Start with the biggest: your product now has two kinds of people. The groomer needs to see everything — every booking, every customer, every dog. A customer must see only their own bookings and nobody else\'s. Here is the part that catches people: the product must enforce that difference, not merely hide it. A screen that does not show other customers\' bookings is not the same as a filing system that refuses to hand them over. The prototype almost certainly does the first; the product needs the second. Ask the AI directly: if a customer tries to reach another customer\'s booking, is the request refused — or was there just no button for it?',
          bullets: [
            'Never build your own sign-in — still true; this lesson is everything around it',
            'The groomer sees everything; a customer sees only their own bookings',
            'The product must enforce the difference, not have the screen politely hide it',
            'Ask: is another customer\'s booking refused, or just missing its button?',
          ],
        },
        {
          heading: 'The Locked-Out Customer',
          body: 'Sign-in has a running cost nobody budgets for, and it is not money. With 200 customers, somebody is locked out most weeks. Not because your customers are careless — because that is simply what 200 real people and their passwords do. A reset email arrives late, or lands in spam, or goes to the old address from two phones ago, and now the customer cannot book. From their side, that means the business cannot take bookings. Here is the uncomfortable rule: reset email is your problem even when the platform sends it. The customer will not email the platform; they will phone the groomer, and the groomer will phone you. So test the journey while nothing is wrong: lock yourself out on purpose, request the reset, watch where it lands and how long it takes. Do it on a phone, in a hurry, the way a locked-out customer actually would.',
          bullets: [
            '200 customers means someone is locked out most weeks — plan for it as normal',
            'Reset email is your problem even when the platform sends it',
            'A locked-out customer experiences it as \'the business cannot take bookings\'',
            'Lock yourself out on purpose and time the journey back in',
          ],
        },
        {
          heading: 'What You Never Do',
          body: 'Two habits will tempt you, and both belong on a never-list. The first: looking up or setting a customer\'s password. When someone is stuck, the helpful move seems to be \'I\'ll set it to something and read it out\'. Never. A properly built system will not even show you their password, and you should be glad — the moment you can read passwords, every leak becomes your fault, and every customer who reuses that password elsewhere is exposed by you. Send the reset instead, every time. The second: sharing one login. When the second groomer arrives, the tempting move is to hand over the existing admin sign-in. Now two people are one person: you cannot tell who changed a booking, and when someone leaves, changing the lock logs everyone out. Separate people, separate sign-ins, from the first day there are two of you.',
          bullets: [
            'Never look up or set a customer\'s password — send the reset, every time',
            'If you can read passwords, every leak is your fault',
            'Never share one admin sign-in when the second groomer arrives',
            'Shared logins mean nobody can tell who did what, and leaving means locking out everyone',
          ],
        },
      ],
    },
    {
      id: 'rp3l4',
      title: 'The Services You Secretly Depend On',
      diagram: 'HiddenServices',
      slides: [
        {
          heading: 'The Stack You Are Standing On',
          body: 'From the outside, your product looks like one thing: a page with your name on it. From the inside, it is a stack of other people\'s services. Something hosts the pages. Something holds the filing system. Something sends the email. Later, something may take the payment. Each one has its own bill, its own limits, and its own way of failing — and your product inherits all three. This is not a flaw in how you built it; it is how nearly all modern software is made, including software built by large teams. The difference between amateurs and professionals is not that professionals depend on fewer services. It is that professionals can name what they stand on. So write the list: every service, what it does for you, where its bill lives, and what your product would look like on the day that service is down.',
          bullets: [
            'One page on the outside; hosting, the filing system and email underneath',
            'Each service brings its own bill, its own limits and its own way of failing',
            'Professionals do not depend on fewer services — they can name what they stand on',
            'Write the list: each service, its job, its bill, and what its bad day does to you',
          ],
        },
        {
          heading: 'Email That Actually Arrives',
          body: 'Email deserves its own slide, because it is the service where \'working\' and \'arriving\' quietly part company. Your app can send a confirmation flawlessly — the code ran, the platform accepted it — and the message can still land in spam, or nowhere at all. Now watch what that does in the real world. The customer never sees the confirmation, assumes the booking failed, and books again — or phones, or goes elsewhere. The groomer\'s diary says one thing, the customer\'s memory says another, and Saturday gets interesting. From the customer\'s point of view there is no nuance: your app lost my booking. Email that actually arrives is a product feature, and it is bought, not assumed — a proper email service, a sending address that matches your product, and a habit of sending yourself test bookings and checking the spam folder the way a stranger would.',
          bullets: [
            'Sent flawlessly and landed in spam can both be true at once',
            'A missed confirmation becomes a double booking or a lost customer in real life',
            'The customer\'s version has no nuance: your app lost my booking',
            'Arriving is a feature you buy and test, not one you assume',
          ],
        },
        {
          heading: 'When a Service Has a Bad Day',
          body: 'When a service you depend on has a bad day, your product has a bad day. That sentence cannot be avoided, only prepared for, and the preparation is three small things. First, know which services you stand on — the list from earlier in this lesson, on paper, not in your memory. Second, know where each bill lives and what its limits are; spending caps were Vibecoding\'s final module, and one sentence is all that lesson needs here: set them on every service in the stack. Third, decide what your product does while a service is down. Given the choice, fail loudly and honestly: a page that says \'bookings are having trouble — please phone\' keeps the business running and the customer informed. Failing silently — a form that accepts a booking that goes nowhere — turns someone else\'s one-hour outage into wrong data of your own, and you know by now which is worse.',
          bullets: [
            'Their bad day is your bad day — the only question is how prepared you are',
            'Keep the list of what you stand on written down, not in your head',
            'Caps on every service — Vibecoding\'s final module already taught this; set them',
            'Fail loudly and honestly — a silent failure manufactures wrong data of your own',
          ],
        },
      ],
    },
    {
      id: 'rp3l5',
      title: 'The Ledger Below the Screen',
      diagram: 'BelowScreenLedger',
      slides: [
        {
          heading: 'The Biggest Line Nobody Sees',
          body: 'Time to open the ledger again. Data done properly took four days: the deciding, the copy-change-look rule, the restore drill. Accounts took three: two kinds of people enforced, resets tested, the never-list written. The hidden services took two: the list, the email that arrives, the bad-day plan. That is nine days — the single biggest line in the whole ledger, more than the plan, more than the build, and four times the two-day demo that started everything. The running total is eighteen of twenty-three. And here is the strange part: after nine days of the hardest work so far, the product looks almost exactly the way it looked before. No new screens. Nothing to show anyone. If you have ever wondered why professional estimates sound absurd next to a weekend demo, you have just lived the answer, one quiet day at a time.',
          bullets: [
            'Data 4 + accounts 3 + services 2 = 9 days — the single biggest line',
            'Four times the demo, and the running total is 18 of 23',
            'After the hardest work so far, the screen looks almost unchanged',
            'This line is why professional estimates sound absurd next to a weekend demo',
          ],
        },
        {
          heading: 'You Were Buying Properties, Not Pixels',
          body: 'Why does nobody predict this line? Because the screen looks the same before and after, and the screen is how non-engineers — reasonably — judge progress. The nine days did not buy pixels. They bought properties: survives-a-restore, so the worst day is an inconvenience instead of an ending; enforces-who-sees-what, so trust is a fact of the filing system rather than a hope about the screen; arrives-in-inboxes, so the confirmation does its one job. A property is invisible right up until the day it is the only thing that matters. That is also why demos mislead so honestly: a demo can show every pixel and no properties, and it looks identical to the real thing. From now on, when you compare a two-day prototype with someone\'s shipped product, you will know that most of the difference is standing quietly below the screen.',
          bullets: [
            'The screen looks the same before and after — that is why nobody budgets for this',
            'Nine days bought survives-a-restore, enforces-who-sees-what, arrives-in-inboxes',
            'A property is invisible until the day it is the only thing that matters',
            'A demo can show every pixel and no properties, and look identical to the real thing',
          ],
        },
        {
          heading: 'The Cheapest Review You Will Ever Buy',
          body: 'One more honest note before the exercise. Vibecoding taught you the signals for bringing in a professional; this stage is where doing so is cheapest and worth the most. Not a rebuild — a review. A few hours of an experienced engineer\'s time, spent looking at how your data is kept, whether the two kinds of people are truly enforced, and whether your restore steps actually work, costs little and catches exactly the class of mistake that stays invisible until it is expensive. Below the screen is precisely where you cannot judge your own work, because everything looks fine right up until it is not. Then do the exercise. The data inventory asks three questions of everything your product holds: what do you hold, what happens if it is wrong or lost, and who may see it. It is one page, and it makes this whole module concrete for your own project.',
          bullets: [
            'This is the cheapest moment for a professional review — hours, not a rebuild',
            'A reviewer checks what you cannot: keeping, enforcing, restoring',
            'Below the screen, everything looks fine right up until it isn\'t',
            'The data inventory: what you hold, what if it is wrong or lost, who may see it',
          ],
          exercise: {
            task: 'Write the data inventory for your own project. List everything it records, and put each item through the three questions in the scaffold. Then answer the two backup questions honestly — the point of this page is that it is true, not that it is tidy.',
            copyText: 'My data inventory:\n\nWhat I hold:\n[item 1, e.g. names and emails]\n[item 2]\n[item 3]\n\nFor each item:\nWhat happens if it is wrong: [ ]\nWhat happens if it is lost: [ ]\nWho may see it: [ ]\n\nBackups:\nWhere the copies are kept: [ ]\nHave I ever restored one: [yes / no — if no, the date I will practise]',
            selfCheck: [
              'Everything your product records appears on the list — including anything the AI added that you never asked for',
              'For at least one item, you can say in one sentence what a real person experiences if it is wrong',
              'You have either restored a backup or written down the date when you will practise doing so',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'In plain terms, what is the database behind your product?',
      options: [
        'The part of the app that draws the booking page',
        'A filing system the app trusts completely',
        'A spare copy of the app kept in case the first one fails',
        'A service that checks customers are who they say they are',
      ],
      correct: 1,
    },
    {
      q: 'Why is wrong data worse than missing data?',
      options: [
        'Wrong data costs more to store than missing data',
        'Missing data can never be recovered, even from a backup',
        'Wrong data always spreads into every other record over time',
        'Missing data announces itself; wrong data stays quiet',
      ],
      correct: 3,
    },
    {
      q: 'At what point do vibecoded products most often fail badly?',
      options: [
        'The first change to what is recorded after real data exists',
        'The original weekend build, when the code is first written',
        'The day the number of users doubles for the first time',
        'The moment a second person is given access to the admin screens',
      ],
      correct: 0,
    },
    {
      q: 'Which of these counts as an actual backup?',
      options: [
        'A copy the platform makes automatically every night',
        'A copy stored in a different country from the original',
        'A copy you have practised restoring, with the steps written down',
        'A copy taken just before every change you make',
      ],
      correct: 2,
    },
    {
      q: 'You want to change what your product records. What comes first?',
      options: [
        'Make a copy and try the change on the copy',
        'Tell customers the shape of their records is about to change',
        'Ask the AI to apply the change and watch the result closely',
        'Take the product offline so no new records can arrive',
      ],
      correct: 0,
    },
    {
      q: 'With around 200 customers, what should you expect from sign-in?',
      options: [
        'Almost no problems, since the platform handles sign-in for you',
        'Occasional trouble, but only from customers who are careless',
        'Someone locked out most weeks, and the reset journey is your problem',
        'Password problems only in the first month, while people get used to it',
      ],
      correct: 2,
    },
    {
      q: 'A confirmation email lands in a customer\'s spam folder. How does the customer read the situation?',
      options: [
        'Their email provider is being overly cautious',
        'The confirmation is delayed and will arrive later',
        'They should check their spam folder before booking again',
        'Your app lost their booking',
      ],
      correct: 3,
    },
    {
      q: 'Why does almost nobody budget for the work below the screen?',
      options: [
        'It requires skills that non-engineers cannot learn',
        'The screen looks the same before and after the work is done',
        'Platforms already do that work, so budgeting for it is wasteful',
        'It only matters for products with thousands of users',
      ],
      correct: 1,
    },
  ],
};

export default rpM3;
