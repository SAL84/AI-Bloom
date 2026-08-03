import type { CourseModule } from '../../types/course';

const vcM5: CourseModule = {
  id: 'vc-m5',
  title: 'Before You Let Anyone Else Use It',
  icon: 'shield-alert',
  summary: 'The honest module: other people\'s data, secrets and keys explained plainly, costs that run away overnight, what "it works on my machine" hides, the real risk of shipping code you cannot read, and how to tell when to stop and get help.',
  lessons: [
    {
      id: 'vc5l1',
      title: 'Other People\'s Data',
      sectionLabel: 'Duty of Care',
      slides: [
        {
          heading: 'The Moment the Stakes Change',
          body: 'Everything before this module was about you. The moment a real person types their name, email or anything else into your app, that changes: you are now holding something on their behalf, and they have no way to check whether you are doing it competently. They are trusting you by default, simply because the form looked normal. That is worth sitting with for a second, because it is easy to keep treating a prototype as a personal project after it stops being one. This is not a reason to avoid building. It is a reason to know what you are taking on before the first person hands you something, rather than afterwards.',
          bullets: [
            'Users trust you by default because the form looked ordinary',
            'They have no way to see how carefully their data is handled',
            'A prototype stops being a personal project the moment real data arrives',
            'Know what you are taking on before the first submission, not after',
          ],
        },
        {
          heading: 'The Best Protection Is Not Collecting It',
          body: 'The single most effective safety measure available to you costs nothing and takes ten minutes: delete fields. Every piece of information you do not collect is one you cannot lose, cannot leak and cannot be asked to account for. Go through your form and ask of each field whether you will genuinely use it, now, for something specific. Date of birth "for demographics" you will never look at, full postal address for a service delivered by email, a phone number you will never ring — these are pure liability with no benefit. This is not minimalism for its own sake. Data you do not hold is the only data that is perfectly safe, and it is the one protection that never fails.',
          bullets: [
            'Every field you remove is a risk that disappears entirely',
            'Ask of each field: will I use this, specifically, and soon?',
            '"Might be useful later" is not a reason to hold personal information',
            'Data you never collected is the only data that cannot leak',
          ],
        },
        {
          heading: 'Things You Should Not Be Storing Yet',
          body: 'Some categories are not appropriate for a prototype built by one person. Card numbers — never store these; use a payment provider\'s own checkout so the details never reach you. Passwords — never invent your own sign-in; use the sign-in built into the platform you are on, because doing it properly is genuinely difficult and doing it badly is invisible. Health information, identity documents, anything about children: these carry specific legal duties and are not a first project. The honest framing is not that you are incapable, it is that these areas punish small mistakes severely and give you no signal that you made one until it is public.',
          bullets: [
            'Card details: never touch them — redirect to a payment provider',
            'Passwords: use the platform\'s sign-in, never write your own',
            'Health data, ID documents and children\'s data carry specific legal duties',
            'These areas punish small mistakes and give no warning that you made one',
          ],
        },
        {
          heading: 'Why "I\'ll Fix It Later" Is How Leaks Happen',
          body: 'Every leak has the same story behind it. Something was left open during building, because that was convenient. It was going to be tightened before anyone used it. Then people started using it, nothing appeared to be wrong, and the temporary state became permanent because there was nothing to remind anyone. Insecure software does not look insecure — it looks identical to secure software from the outside, which is exactly why "later" never arrives. The practical fix is not more discipline, it is ordering: do the tightening before you share the link, not after. Write down anything you deliberately left loose while building, and treat that list as a gate rather than a wish.',
          bullets: [
            'Insecure and secure look identical from the outside — nothing prompts you',
            'Temporary shortcuts become permanent because they never announce themselves',
            'Keep a written list of anything you left open on purpose',
            'Treat that list as a gate before sharing the link, not a task for later',
          ],
        },
      ],
    },
    {
      id: 'vc5l2',
      title: 'Secrets and Keys, Plainly',
      slides: [
        {
          heading: 'What a Key Actually Is',
          body: 'When your app uses an outside service — an AI service, an email sender, a database, a payment provider — it needs to prove it is you. It does that with a key: a long string of characters that works exactly like a password, except it is used by software rather than typed by a person. Anyone holding that string can do everything you can do with that service, billed to your account, with no further check. There is no second factor, no login screen, no confirmation email. That is the whole concept, and understanding it is enough to understand why the rest of this lesson matters: a key is a password lying around in plain text, and it is treated by the service as unquestionably you.',
          bullets: [
            'A key is a password used by software instead of a person',
            'Anyone holding it can act as you, billed to you, with no second check',
            'There is no additional verification step protecting it',
            'Treat any string labelled key, token or secret as a password in the open',
          ],
        },
        {
          heading: 'Where They Must Never Be',
          body: 'Two places cause almost all real incidents. First, written directly into your code — because code gets copied, shared, pasted into chats and uploaded, and the key travels with it invisibly. Second, in a public code repository. People run automated searches across public repositories looking for exposed keys continuously, and exposure is measured in minutes rather than days. The correct home for a key is your platform\'s environment settings or secrets store — a place where you paste it once, the running app can read it, and it never appears in a file. If a tool asks you to paste a key into code "for now", that is precisely the shortcut that becomes permanent.',
          bullets: [
            'Never write a key into your code — the code travels and the key goes with it',
            'Public repositories are scanned automatically and constantly',
            'Use the platform\'s environment variables or secrets store instead',
            'Beware anything that suggests pasting a key inline "just for now"',
          ],
        },
        {
          heading: 'If One Gets Out',
          body: 'Assume a key that has been exposed is compromised, even if nothing has obviously happened yet. The response is simple and should be immediate: go to the service, revoke that key, create a new one, put the new one in your platform\'s secrets store. This takes a few minutes. Deleting the file or the message it appeared in does not help — it may already have been read, and in a version-controlled project the old content usually still exists in the history. Then check the service\'s usage and billing for anything you did not do. There is no embarrassment worth delaying this over; every experienced engineer has done it, and the only bad version is the slow one.',
          bullets: [
            'Revoke and replace immediately — assume it was seen',
            'Deleting the file does not help; the history and any copies remain',
            'Check usage and billing on that service for unfamiliar activity',
            'Everyone does this eventually; only a slow response makes it costly',
          ],
        },
      ],
    },
    {
      id: 'vc5l3',
      title: 'Costs That Run Away While You Sleep',
      slides: [
        {
          heading: 'Pay-Per-Use Has No Ceiling',
          body: 'Most services behind a modern app charge by usage rather than a flat monthly fee. AI calls, emails sent, data stored, requests served. During building this is delightfully cheap, which quietly trains you to stop thinking about it. But usage-based pricing has no natural upper bound: if something runs in a loop, or a page reloads repeatedly, or someone discovers your form and hammers it, the bill grows at machine speed and does not stop for the night. The characteristic feature of this problem is that it happens while you are asleep and the first notification is the invoice. Nothing about your app will feel different while it is happening.',
          bullets: [
            'Usage-based pricing has no ceiling unless you create one',
            'Cheap during building trains you to ignore it entirely',
            'Loops, retries and traffic spikes grow bills at machine speed',
            'The first sign is usually the invoice, not anything in the app',
          ],
        },
        {
          heading: 'Set the Caps First',
          body: 'Before you share your link, go into every service you use and set spending limits and alerts. Set a hard cap you can genuinely afford to lose, and an alert well below it. If a service will not let you cap spending, set the lowest alert available and check it regularly. Do this at the start, not when it becomes relevant, because the moment it becomes relevant it is already too late to act. Also make sure the alerts go somewhere you actually read — an address you check on a weekend, not a notification buried in a dashboard. A cap you set in ten minutes is the difference between a strange week and a genuinely painful bill.',
          bullets: [
            'Set a hard cap and a lower alert on every paid service before sharing anything',
            'Choose a cap you could afford to lose entirely, not one you hope not to hit',
            'Send alerts somewhere you read at weekends',
            'Do this before it matters — afterwards is too late to be useful',
          ],
        },
        {
          heading: 'The Ways Bills Actually Explode',
          body: 'A few patterns cause most of the damage, and knowing them helps you spot the risk in your own project. Something that calls itself repeatedly, so one action becomes thousands. Retries on failure with no limit, so a broken service is called forever. A page that refreshes and re-requests on a timer, left open in a tab for a week. AI features with no limit per user, discovered by someone who finds it entertaining. And a public form with nothing to stop automated submissions. Each of these is fine at your scale during testing and none of them is fine when your link is on the internet unattended.',
          bullets: [
            'Runaway loops and unlimited retries turn one action into thousands',
            'Auto-refreshing pages left open cost money for days',
            'Unlimited AI use per person is an invitation once the link is public',
            'Public forms need something to stop automated submissions',
          ],
        },
      ],
    },
    {
      id: 'vc5l4',
      title: 'What "It Works on My Machine" Hides',
      slides: [
        {
          heading: 'Your Machine Is Not Neutral',
          body: 'Your computer is a specific environment carrying a great deal of invisible help. Files sitting in a folder that will not exist elsewhere. Settings you configured weeks ago and forgot. A browser already signed in. A fast, stable network. Data left over from testing that makes the app look populated. None of this travels with the code, so an app that works perfectly for you can fail immediately for the first other person — not because something broke, but because the invisible scaffolding was never part of what you shipped. This is one of the oldest problems in software and it catches everyone; the point is to expect it rather than to be surprised by it.',
          bullets: [
            'Local files, settings, sign-ins and test data are invisible and do not travel',
            'Working locally is evidence about your machine, not about your app',
            'A fresh visitor gets none of your accumulated scaffolding',
            'Expect this rather than treating it as something breaking',
          ],
        },
        {
          heading: 'Test It Like a Stranger',
          body: 'Before you share anything, use it the way a stranger will. Open the live link, not your local version. Use a different browser, or a private window, so you are not signed in and have no saved data. Use a phone on mobile data rather than your home network. Create a brand new account if there is one. Walk your entire checklist in that state. This takes ten minutes and finds the majority of "it worked for me" failures — the sign-in that only worked because you were already signed in, the page that only loaded because the file was on your desktop, the flow that assumed data you had created last Tuesday.',
          bullets: [
            'Use the live link in a private window, signed out, with no saved data',
            'Try it on a phone on mobile data, not your own network',
            'Create a fresh account and walk the whole checklist as that person',
            'Ten minutes here finds most works-for-me failures',
          ],
        },
        {
          heading: 'The First Five Minutes After Sharing',
          body: 'When you do share it, watch. Have the link open, keep the service dashboards visible, and check for errors as the first people arrive. The first few real users find things nobody predicted, and the difference between a small problem and a bad story is usually whether you noticed within minutes or the next morning. Have a way to take it down quickly — know in advance how to disable the link or put up a holding message — because being able to stop is more valuable than being able to fix under pressure. Share with a handful of forgiving people first, and only widen it once that group has been through without incident.',
          bullets: [
            'Watch the first arrivals rather than sharing and walking away',
            'Know in advance how to take it offline quickly',
            'Start with a few forgiving people, then widen',
            'Noticing within minutes is what separates a hiccup from a story',
          ],
        },
      ],
    },
    {
      id: 'vc5l5',
      title: 'Code You Cannot Read, and When to Stop',
      slides: [
        {
          heading: 'The Honest Version of the Risk',
          body: 'Here is the part that deserves a clear statement. You have built something functional that you cannot fully evaluate. That is a real and permanent condition of building this way, not a temporary gap that goes away with experience. The code may contain mistakes that only appear under conditions you never tested, choices you would not have made if you had understood them, and gaps that are invisible from the outside. You cannot review it, so your safety comes from elsewhere: from limiting what the thing is allowed to do, from what you chose not to collect, from caps and checklists and other people testing. Those controls are genuinely effective. They are also the only ones you have.',
          bullets: [
            'You cannot evaluate what you built — this is a condition, not a phase',
            'Problems can exist that are invisible from the outside and untriggered so far',
            'Your safety comes from limits and habits, not from reviewing code',
            'Those controls work, and they are the only ones you have',
          ],
        },
        {
          heading: 'What This Means in Practice',
          body: 'It does not mean do not build. It means match what you build to what you can supervise. Small blast radius: few users, low-value data, reversible actions, nothing automatic that affects a person. Keep the thing you cannot read away from the things that would hurt if they went wrong. It also means resisting a specific and very common drift — the prototype that works, gets used by more people each month, and slowly becomes load-bearing for a business without anyone ever deciding it should. Nobody chooses that; it happens by default, one small success at a time, and it is worth naming so you can notice it happening to you.',
          bullets: [
            'Match what you build to what you can supervise',
            'Keep unreadable code away from money, health, safety and automatic actions',
            'The common failure is drift: a prototype quietly becoming load-bearing',
            'Nobody decides to depend on a prototype; it happens by default',
          ],
        },
        {
          heading: 'Clear Signals to Bring In an Engineer',
          body: 'Some signals are unambiguous, and having them written down in advance means you will recognise them under pressure. You are storing anything you would hate to see published. Money moves through it. People outside your organisation depend on it for something that matters to them. A regulation has been named at you. It handles data about children or health. It acts on its own without a person approving. It has become something your business would genuinely struggle without. Any one of these means stop and get a professional to look at it — not necessarily to rebuild it, often just to review it and tell you what needs attention. That review is cheap compared with what it prevents.',
          bullets: [
            'Sensitive data, money movement, or outsiders depending on it',
            'A named regulation, children\'s data, or health information',
            'Anything that acts automatically without a person approving',
            'A review is usually a few hours, and far cheaper than what it prevents',
          ],
        },
        {
          heading: 'When Not to Ship',
          body: 'Finish with the decision people find hardest. Do not ship it if you cannot say what it stores and who can see it. Do not ship it if the keys are still in the code. Do not ship it if you have no spending caps. Do not ship it if you have not run your checklist as a stranger. Do not ship it if you would be unable to take it down or tell affected people when something goes wrong. And do not ship it just because you have spent a weekend on it — sunk effort is the worst possible reason to expose other people to risk. Not shipping is a legitimate outcome and often the professional one. The prototype still did its job: it answered the question. That was always what it was for.',
          bullets: [
            'Not shipping is a real decision, not a failure of nerve',
            'No caps, keys in code, unknown data flows, untested as a stranger: all stop signs',
            'Effort already spent is the worst reason to expose other people to risk',
            'The prototype answered your question — that was always its actual job',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'If You Are the Builder',
          body: 'You are the only person who will do any of this, so make it a short list you run before sharing rather than a philosophy. Five minutes of checks before the link goes out is the whole practice.',
          bullets: [
            'Before sharing: caps set, keys out of the code, checklist run signed-out on a phone',
            'Write down what you store and who can see it — if you cannot, do not share it',
            'Know how to take it offline before you need to',
          ],
        },
        {
          role: 'security-se',
          label: 'Keeping It Safe',
          body: 'For a prototype, the highest-value controls are the boring structural ones: collect less, expose less, cap everything, and never let it act unattended on a person.',
          bullets: [
            'Reduce collected fields first — it is the only protection that cannot fail',
            'Check that one signed-in user genuinely cannot reach another\'s records',
            'Assume every public endpoint will be found and hit automatically',
          ],
        },
        {
          role: 'developer',
          label: 'If You Have Some Technical Skill',
          body: 'You can add the guardrails a generated prototype almost never includes, and each one is a contained piece of work rather than a rewrite.',
          bullets: [
            'Check secrets are absent from the repository history, not just the current files',
            'Add rate limits and input validation on anything publicly reachable',
            'Confirm backups exist and that you have actually restored one at least once',
          ],
        },
        {
          role: 'consultant',
          label: 'If You Are Advising or Hiring',
          body: 'Prototypes drifting into production without a decision is now one of the most common risks you will encounter. Make the transition an explicit moment rather than something that happens by accident.',
          bullets: [
            'Ask what it stores, who can reach it, and what it costs per month at current usage',
            'Define in writing the point at which it must be reviewed by an engineer',
            'Scope a review before a rebuild — it is cheaper and often sufficient',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the most reliable way to reduce the risk of holding personal data?',
      options: [
        'Encrypt everything you collect',
        'Do not collect the fields you will not actually use',
        'Store it in a separate database from the rest of the app',
        'Add a privacy policy to the site',
      ],
      correct: 1,
    },
    {
      q: 'Why does "I will secure it later" so reliably turn into a leak?',
      options: [
        'Security tools are only available after launch',
        'Later fixes are technically harder to apply',
        'Insecure software looks identical to secure software from the outside, so nothing ever prompts you',
        'Most leaks are caused by deliberate attacks rather than shortcuts',
      ],
      correct: 2,
    },
    {
      q: 'What is an API key, in plain terms?',
      options: [
        'A setting that controls how fast a service responds',
        'A unique identifier for your app that is safe to publish',
        'An encrypted file that only your app can open',
        'A password used by software, letting anyone who holds it act as you and bill you',
      ],
      correct: 3,
    },
    {
      q: 'You accidentally published a key in a public repository. What should you do first?',
      options: [
        'Revoke the key at the service and create a new one',
        'Delete the file and the commit that contained it',
        'Make the repository private and carry on',
        'Wait to see whether any unusual activity appears',
      ],
      correct: 0,
    },
    {
      q: 'Why do costs on usage-based services tend to explode overnight rather than gradually?',
      options: [
        'Providers apply higher rates outside business hours',
        'A loop, retry or traffic spike runs at machine speed with no ceiling and nothing in the app looks different',
        'Backups run at night and are charged separately',
        'Free tiers reset at midnight',
      ],
      correct: 1,
    },
    {
      q: 'What does "it works on my machine" fail to account for?',
      options: [
        'The speed of the visitor\'s computer',
        'Differences in screen resolution',
        'Local files, saved sign-ins, settings and test data that never travel with the app',
        'The visitor\'s choice of operating system',
      ],
      correct: 2,
    },
    {
      q: 'Which is the clearest signal to stop and involve a professional engineer?',
      options: [
        'The design does not look as polished as you would like',
        'You needed more than five attempts to build a screen',
        'You want to add a second page to the site',
        'The app now moves money, or people outside your organisation depend on it',
      ],
      correct: 3,
    },
    {
      q: 'Which is the worst reason to ship a prototype to real users?',
      options: [
        'Because you have already spent a weekend building it',
        'Because a small group of forgiving testers used it without incident',
        'Because you have set spending caps and run your checklist signed-out',
        'Because you can take it offline quickly if something goes wrong',
      ],
      correct: 0,
    },
  ],
};

export default vcM5;
