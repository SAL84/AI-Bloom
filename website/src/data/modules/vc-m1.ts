import type { CourseModule } from '../../types/course';

const vcM1: CourseModule = {
  id: 'vc-m1',
  title: 'What You Can Actually Build Now',
  icon: 'zap',
  summary: 'What vibecoding means in practice, the things a non-engineer can genuinely build today, the things that still need a professional, and how to cut an idea down to a first version that can exist by Sunday night.',
  lessons: [
    {
      id: 'vc1l1',
      title: 'What Vibecoding Actually Means',
      sectionLabel: 'Getting Oriented',
      slides: [
        {
          heading: 'Describing, Not Typing',
          body: 'Vibecoding is building software by describing what you want in ordinary language and letting an AI write the code. You say "a page where someone enters their email and I get notified", and something that does roughly that comes back. You look at it, say what is wrong, and it changes. That is the whole loop. The word is a bit flippant, but it points at something real: the skill has moved from typing the instructions a computer understands to explaining clearly what you want to exist. You are not pretending to be an engineer and you are not being handed magic. You are directing a very fast, very literal collaborator who has read an enormous amount of code and has no idea what your business is until you tell it.',
          bullets: [
            'You supply the intent, the judgement and the taste; the AI supplies the syntax',
            'The loop is describe, look, react — not write, compile, debug',
            'Clear thinking about what you want is now the bottleneck, not typing speed',
            'It does exactly what you said, which is not always what you meant',
          ],
        },
        {
          heading: 'The Three Shapes of Tool',
          body: 'Tools in this space come in three broad shapes, and knowing which one you are using explains most of your experience. Chat-based assistants are a conversation window: you ask, it gives you code or instructions, you copy them somewhere. In-editor assistants sit inside the place the code actually lives, so they can see all your files and change several at once. Prompt-to-app builders take a description and hand you a running thing on the internet with hosting and a database already attached. Specific products change every few months, so learn the categories rather than the brand names. As a beginner, a builder that gives you something running is usually the fastest start; you can move to the others when you hit its ceiling.',
          bullets: [
            'Chat assistants: flexible, but you are responsible for where the code goes',
            'In-editor assistants: see your whole project, better for changing existing work',
            'Prompt-to-app builders: fastest to something live, least control underneath',
            'Products churn constantly — pick by category and by what you need next',
          ],
        },
        {
          heading: 'What This Genuinely Changes',
          body: 'The honest version of the claim is this: the cost of finding out whether an idea is any good has collapsed. Work that used to mean months of someone else\'s time and a real budget can now be a weekend and a subscription. That matters most for the ideas that were never worth commissioning — the internal tool that saves your team four hours a week, the calculator your customers keep asking for, the rough version you need before anyone will fund the real one. What has not changed is that software which handles other people\'s money, health or personal data still needs someone who can read what was written. Getting to a working thing is now easy. Knowing whether it is safe to hand to strangers is the part this course spends the most time on.',
          bullets: [
            'The cost of testing an idea has fallen further than the cost of running one',
            'Ideas too small to justify an engineer are now the sweet spot',
            'Getting something working and knowing it is safe are separate problems',
            'Speed is real; the caveats later in this course are also real',
          ],
        },
      ],
    },
    {
      id: 'vc1l2',
      title: 'What You Can Genuinely Build',
      slides: [
        {
          heading: 'Pages, Tools and Automations',
          body: 'Start with the categories that reliably work. Landing pages and simple marketing sites: a page that explains something, collects an email, embeds a booking link. Internal tools: a form your team fills in, a dashboard showing numbers you already have, a small tracker that replaces a chaotic spreadsheet. Automations: when a form is submitted, add a row here and send a message there. Data views: take a file of numbers and draw the chart you keep making by hand. These share a shape — small amount of data, few users, low consequence if it is briefly wrong, and you are usually one of the people using it. That combination is where AI-assisted building is strongest right now.',
          bullets: [
            'Landing pages, waitlists, simple brochure sites with a form',
            'Internal tools that replace a spreadsheet nobody enjoys maintaining',
            'Automations that move information between things you already use',
            'Dashboards over data you already have and understand',
          ],
        },
        {
          heading: 'Apps With a Database',
          body: 'A step up is a real application: people sign in, they create things, those things are still there tomorrow. A booking system for your studio, a client portal, a simple marketplace listing, a job board. This is achievable and it is where most people\'s ambition actually sits. It is also the first point where you are storing information about other people, which changes the stakes considerably — a broken landing page is embarrassing, a leaked customer list is a different category of problem. Nothing here says do not build it. It says that from the moment a database holds someone else\'s name, you have taken on a duty, and module five is about meeting it rather than discovering it the hard way.',
          bullets: [
            'Sign-in, saved records and things that persist are well within reach',
            'The moment you store other people\'s details, your obligations change',
            'Use a platform\'s built-in sign-in rather than inventing your own',
            'Build it, but read module five before anyone else touches it',
          ],
        },
        {
          heading: 'Adding an AI Feature Inside Your App',
          body: 'You can also put AI inside the thing you build: summarise these notes, draft a reply, tag this enquiry, answer questions about your own documents. Wiring this up is genuinely straightforward now — a handful of lines, and a service does the hard part. Two things follow. First, every one of those calls costs money, and your users will make far more of them than you will while testing. Second, the feature can be confidently wrong in a way ordinary software is not: a broken button looks broken, but a wrong summary looks fine. Both of these are covered later, in modules four and five. For now, know that the capability is available to you and that it carries a bill and a failure mode.',
          bullets: [
            'Summarising, drafting, classifying and question-answering are all reachable',
            'Every use costs money per request, not a flat fee — watch this from day one',
            'Wrong answers arrive looking exactly like right ones',
            'Great for drafts a human reviews; risky for anything that acts unattended',
          ],
        },
      ],
    },
    {
      id: 'vc1l3',
      title: 'What Not to Build This Way',
      slides: [
        {
          heading: 'Money, Health and Safety',
          body: 'Some categories should not be your first solo build, and this is not gatekeeping — it is the shape of the consequences. Anything that moves real money: taking card details yourself, holding balances, calculating payouts. Anything touching health: symptoms, medication, anything a person might act on medically. Anything where a wrong answer hurts someone physically. In these areas the failure is not "the site looks odd", it is money gone, a person harmed, and a liability with your name on it. You can still build near them safely by handing the dangerous part to an established provider — take payments through a payment company\'s own checkout rather than touching card numbers yourself. Route around the hazard rather than reimplementing it.',
          bullets: [
            'Never handle raw card details yourself — redirect to a payment provider\'s checkout',
            'Health, safety and legal advice need qualified review, not a confident prototype',
            'Ask what the worst realistic outcome is, not whether the code runs',
            'Delegating the risky component to a specialist provider is a legitimate answer',
          ],
        },
        {
          heading: 'Scale, Compliance and Other People\'s Regulations',
          body: 'Two more categories deserve caution. Heavy scale: something expecting thousands of simultaneous users, large file processing, or continuous background work. Prototypes are built for a handful of people and quietly assume it; they fall over or run up costs when that assumption breaks. And strict compliance: regulated industries, children\'s data, health records, anything where a specific standard applies. Compliance is not a feature you can add on Sunday — it constrains where data lives, who can see it, how long you keep it, and what you must be able to prove. If someone has told you which regulation applies, that is your signal to get advice before you build, not after. Building first and retrofitting compliance is the most expensive order available.',
          bullets: [
            'Prototypes assume few users; that assumption is invisible until it breaks',
            'Regulation shapes the design, so it cannot be bolted on afterwards',
            'Children\'s data, health records and financial records all carry specific rules',
            'If a standard has been named at you, get advice before writing anything',
          ],
        },
        {
          heading: 'The Question That Sorts It',
          body: 'You do not need a list you cannot remember. One question sorts most cases: if this is wrong at three in the morning and nobody notices for a week, what happens? A landing page shows the old price — mildly embarrassing, fixed in a minute. An internal tracker miscounts — someone spots it and you correct it. A booking system double-books — annoyed customers and an apology. A tool that emails your whole customer list, or charges cards, or tells someone their test result — that is a different answer entirely, and it is the answer, not your confidence, that decides whether you should be building it alone. Confidence is not evidence. The consequence of being wrong is.',
          bullets: [
            'Ask what happens if it is wrong overnight and nobody notices',
            'Reversible and visible failures are safe territory to learn in',
            'Irreversible, invisible or automatic actions are where you need help',
            'Your confidence is not evidence — the size of the consequence decides',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'If You Are the Builder',
          body: 'Your instinct will be to test whether something is possible. Possible is rarely the constraint. Ask instead whether you could live with it failing quietly for a week, and let that pick your first project.',
          bullets: [
            'Choose a first project where you are the only person harmed if it breaks',
            'Write down, before you start, what the worst realistic failure looks like',
            'If that sentence makes you uncomfortable, pick a smaller idea first',
          ],
        },
        {
          role: 'security-se',
          label: 'Keeping It Safe',
          body: 'The riskiest projects are not the technically hardest ones — they are the ones holding data you would hate to lose control of. Sort your ideas by what they store, not by how complicated they look.',
          bullets: [
            'Data you do not collect cannot leak — start by cutting fields you do not need',
            'Payments, health records and identity documents belong with specialist providers',
            'A simple app holding sensitive data is more dangerous than a complex one holding none',
          ],
        },
        {
          role: 'developer',
          label: 'If You Have Some Technical Skill',
          body: 'Your advantage is not writing code faster — it is being able to read what came back and recognise when it is structurally wrong rather than merely ugly.',
          bullets: [
            'Skim generated code for where data is stored and who can read it before anything else',
            'Watch for the classic prototype shortcuts: no input validation, no access checks, secrets inline',
            'You can safely attempt projects a step above this list because you can inspect the result',
          ],
        },
        {
          role: 'consultant',
          label: 'If You Are Advising or Hiring',
          body: 'Clients now arrive with a working prototype and assume the remaining work is cosmetic. Reset that early: the prototype proved the idea, and proving the idea is a different job from operating it.',
          bullets: [
            'Praise the prototype for what it is — evidence — then scope the production work separately',
            'Ask what it stores and who can reach it before you ask what it does',
            'Flag regulated domains at the first conversation, not in the build phase',
          ],
        },
      ],
    },
    {
      id: 'vc1l4',
      title: 'Sizing an Idea Down to a Weekend',
      slides: [
        {
          heading: 'Find the One Thing',
          body: 'Every idea arrives as a system: accounts and payments and notifications and an admin panel and a mobile version. That version is a year of work and you will abandon it in week three. The move is to find the single action that makes the idea worth anything at all, and build only that. A marketplace is really "someone can list a thing and someone else can see it". A scheduling app is really "a client picks a slot and I get told". Everything else is support scaffolding around that one action. Strip to it deliberately, on paper, before you describe anything to an AI — because if you do not choose the scope, the AI will cheerfully attempt all of it and hand you something broad, shallow and impossible to fix.',
          bullets: [
            'Write your idea as a single sentence containing exactly one verb',
            'Ask of every feature: does the core action work without this? Then cut it',
            'Accounts, admin panels and settings are almost never version one',
            'If you do not set the scope, the AI will attempt everything at once',
          ],
        },
        {
          heading: 'Fake Everything You Can',
          body: 'A first version does not have to do the work — it has to prove the work is worth doing. Notifications can be an email to you that you forward by hand. A payment can be an invoice you send yourself. Matching, moderation, approval, curation: all can be you, quietly, at a laptop, for the first twenty users. This is not cheating, it is the oldest trick in product development, and it has a real advantage — doing the job manually teaches you exactly what the automated version needs to do, which is knowledge you cannot get by guessing. Automate a step only after you have done it by hand enough times to be bored by it. Boredom is a reliable signal that you now understand the rules well enough to write them down.',
          bullets: [
            'Doing it by hand first teaches you what to automate and what to skip',
            'Manual steps are invisible to users when volume is low',
            'Automate the step you are bored of, not the step you are excited about',
            'Every faked feature is a feature you did not have to debug this weekend',
          ],
        },
        {
          heading: 'A Weekend-Sized Test',
          body: 'Here is a check before you start. Can you describe what you are building in three sentences, name the one person who will use it first, and say what you will learn from it? If any of those is fuzzy, the project is too big or too vague and you will lose the weekend to indecision rather than to the tools. It also helps to decide in advance what "done" means for this version, because there is no natural stopping point — you can always add one more thing, and the AI will happily add it. Write your finish line down before you start. It is much harder to move a line you have already written than one you are holding loosely in your head.',
          bullets: [
            'Three sentences, one first user, one thing you will learn',
            'Write the finish line down before you start building',
            'Vagueness costs more weekend hours than difficulty does',
            'If you cannot describe it, you cannot prompt for it either',
          ],
        },
      ],
    },
    {
      id: 'vc1l5',
      title: 'Prototype, Something Friends Can Try, Real Product',
      slides: [
        {
          heading: 'Three Different Things',
          body: 'People say "I built an app" about three very different objects, and confusing them causes most of the pain in this field. A prototype exists to answer a question — it runs on your machine, breaks if you look at it oddly, and that is fine because its job is to inform a decision. Something friends can try lives on the internet, survives ordinary use, and holds a little real data from people who will forgive you. A real product is used by strangers who will not forgive you: it stays up, it protects data, it handles the odd cases, someone can fix it at midnight, and it does not quietly bankrupt you. Each step is roughly an order of magnitude more work than the last. Knowing which one you have is the difference between confidence and delusion.',
          bullets: [
            'Prototype: answers a question, allowed to be fragile, one user — you',
            'Friends-can-try: online, survives normal use, small amount of real data',
            'Real product: strangers, uptime, security, cost control, someone on call',
            'Each stage is roughly ten times the work of the one before it',
          ],
        },
        {
          heading: 'What Changes at Each Step',
          body: 'Moving between stages is not about polish. Going from prototype to friends-can-try means it lives somewhere other than your laptop, other people\'s data appears, and your keys and passwords must stop sitting in the code. Going from friends to strangers means you need to know when it breaks without being told, to have a copy of the data if something is deleted, to cap what it can cost you, and to have a plan for the day something goes wrong while you are asleep. None of that is visible in the interface, which is exactly why people skip it. The user-facing part of your app may be entirely finished while the product part has not been started. Those are separate axes of progress.',
          bullets: [
            'Prototype to friends: it leaves your laptop and real data arrives',
            'Friends to strangers: monitoring, backups, cost caps, and a plan for failure',
            'None of this work is visible in the interface, which is why it gets skipped',
            'A finished-looking app can be zero percent of the way to a product',
          ],
        },
        {
          heading: 'Say Which One You Have',
          body: 'Be precise about this out loud, especially with other people. Telling an investor, a client or your own team that you "have an app" when you have a prototype sets an expectation you will pay for later, usually in public. The accurate version costs you nothing and buys credibility: "this is a working prototype, it proves the flow, and it is not ready for customers yet". Nobody sensible is disappointed by that sentence — it is a genuinely impressive thing to have made in a weekend. What damages trust is a demo that looked finished followed by three months of silence. Naming the stage also keeps you honest with yourself about how much work remains, which is the number people most consistently underestimate.',
          bullets: [
            'Say "working prototype" out loud rather than letting people assume "product"',
            'The gap between demo and product is where reputations are lost',
            'Accurate framing costs nothing and protects you when timelines slip',
            'Naming the stage keeps your own estimates honest too',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is the most accurate description of vibecoding?',
      options: [
        'Using AI to write code for you by describing in plain language what you want it to do',
        'Copying code from forums until something works',
        'A programming language designed for non-technical users',
        'Letting an AI run your business decisions automatically',
      ],
      correct: 0,
    },
    {
      q: 'Which project is the best fit for a non-engineer building alone this weekend?',
      options: [
        'A pharmacy tool that checks whether two medicines interact',
        'An internal tracker that replaces a messy team spreadsheet',
        'A system that holds customer card details and takes payments directly',
        'A platform expected to handle fifty thousand simultaneous users',
      ],
      correct: 1,
    },
    {
      q: 'You want to charge customers. What is the sensible approach?',
      options: [
        'Store card numbers in your database and process charges yourself',
        'Ask the AI to write the payment logic and test it with your own card',
        'Send customers to an established payment provider\'s own checkout',
        'Collect card details by email and enter them manually',
      ],
      correct: 2,
    },
    {
      q: 'Why is compliance a poor thing to add after the build is finished?',
      options: [
        'Regulators only inspect finished software',
        'It requires a paid subscription to a compliance tool',
        'Compliance is purely a documentation exercise',
        'It constrains where data lives, who can see it and what you must prove, so it shapes the design itself',
      ],
      correct: 3,
    },
    {
      q: 'What is the point of faking a feature manually in a first version?',
      options: [
        'It makes the app look more complete than it is to investors',
        'It avoids paying for AI tools during the build',
        'Doing the job by hand teaches you what the automated version actually needs to do',
        'Manual steps are always faster than automated ones',
      ],
      correct: 2,
    },
    {
      q: 'Which single question best sorts safe projects from ones needing professional help?',
      options: [
        'Can the AI produce working code for it on the first attempt?',
        'If this is wrong at 3am and nobody notices for a week, what happens?',
        'How many screens does the app have?',
        'Will it look good on a phone?',
      ],
      correct: 1,
    },
    {
      q: 'What mainly separates "something friends can try" from a real product?',
      options: [
        'A more polished visual design and a logo',
        'Being written in a more professional programming language',
        'Having more features on the home screen',
        'Monitoring, backups, cost limits, security, and a plan for when it breaks unattended',
      ],
      correct: 3,
    },
    {
      q: 'Why should you tell people you have a prototype rather than an app?',
      options: [
        'Prototypes are legally a different category of software',
        'It lowers expectations so you can charge more later',
        'Because the expectation gap between a finished-looking demo and a product is where trust is lost',
        'Investors prefer the word prototype',
      ],
      correct: 2,
    },
  ],
};

export default vcM1;
