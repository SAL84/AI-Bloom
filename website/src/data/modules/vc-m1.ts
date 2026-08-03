import type { CourseModule } from '../../types/course';

const vcM1: CourseModule = {
  id: 'vc-m1',
  title: 'What You Can Actually Build Now',
  icon: 'zap',
  summary: 'What vibecoding means in practice, and what a non-engineer can genuinely build today. The things that still need a professional, and how to cut an idea down to a first version that can exist by Sunday night.',
  lessons: [
    {
      id: 'vc1l1',
      title: 'What Vibecoding Actually Means',
      sectionLabel: 'Getting Oriented',
      slides: [
        {
          heading: 'Describing, Not Typing',
          body: 'Vibecoding means building software by describing what you want in ordinary language. An AI writes the code. You say "a page where someone enters their email and I get notified", and something roughly like that comes back. You look at it, say what is wrong, and it changes. That is the whole loop. The word is a bit flippant, but it points at something real. The skill has moved from typing the instructions a computer understands to explaining clearly what you want to exist. You are not pretending to be an engineer, and you are not being handed magic. You are directing a very fast, very literal collaborator. It has read an enormous amount of code. It has no idea what your business is until you tell it.',
          bullets: [
            'You supply the intent, the judgement and the taste; the AI supplies the exact wording a computer needs',
            'The loop is describe, look, react — not write code, run it, hunt bugs',
            'Clear thinking about what you want is now the bottleneck, not typing speed',
            'It does exactly what you said, which is not always what you meant',
          ],
        },
        {
          heading: 'The Three Shapes of Tool',
          body: 'Tools in this space come in three broad shapes. Knowing which one you are using explains most of your experience. Chat-based assistants are a conversation window: you ask, it gives you code or instructions, you copy them somewhere. In-editor assistants sit inside the place the code actually lives. They can see all your files and change several at once. Prompt-to-app builders take a description and hand you a running thing on the internet. Hosting and a database come attached — a database being the organised store where an app keeps its information. Specific products change every few months, so learn the categories rather than the brand names. As a beginner, a builder that gives you something running is usually the fastest start. Move to the others when you hit its ceiling.',
          bullets: [
            'Chat assistants: flexible, but you are responsible for where the code goes',
            'In-editor assistants: see your whole project, better for changing existing work',
            'Prompt-to-app builders: fastest to something live, least control underneath',
            'Products churn constantly — pick by category and by what you need next',
          ],
        },
        {
          heading: 'What This Genuinely Changes',
          body: 'Here is the honest version of the claim. The cost of finding out whether an idea is any good has collapsed. Work that used to mean months of someone else\'s time and a real budget can now be a weekend and a subscription. That matters most for the ideas that were never worth commissioning. The internal tool that saves your team four hours a week. The calculator your customers keep asking for. The rough version you need before anyone will fund the real one. What has not changed is this: software that handles other people\'s money, health or personal data still needs someone who can read what was written. Getting to a working thing is now easy. Knowing whether it is safe to hand to strangers is the part this course spends the most time on.',
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
          body: 'Start with the categories that reliably work. Landing pages and simple marketing sites: a page that explains something, collects an email, embeds a booking link. Internal tools: a form your team fills in, a dashboard showing numbers you already have, a small tracker that replaces a chaotic spreadsheet. Automations: when a form is submitted, add a row here and send a message there. Data views: take a file of numbers and draw the chart you keep making by hand. These all share a shape. Small amount of data, few users, low consequence if it is briefly wrong. You are usually one of the people using it. That combination is where AI-assisted building is strongest right now.',
          bullets: [
            'Landing pages, waitlists, simple brochure sites with a form',
            'Internal tools that replace a spreadsheet nobody enjoys maintaining',
            'Automations that move information between things you already use',
            'Dashboards over data you already have and understand',
          ],
        },
        {
          heading: 'Apps With a Database',
          body: 'A step up is a real application. People sign in, they create things, and those things are still there tomorrow. A booking system for your studio, a client portal, a simple marketplace listing, a job board. This is achievable, and it is where most people\'s ambition actually sits. It is also the first point where you are storing information about other people, which changes the stakes considerably. A broken landing page is embarrassing. A leaked customer list is a different category of problem. Nothing here says do not build it. It says that from the moment a database holds someone else\'s name, you have taken on a duty. Module five is about meeting that duty, rather than discovering it the hard way.',
          bullets: [
            'Sign-in, saved records and things that persist are well within reach',
            'The moment you store other people\'s details, your obligations change',
            'Use a platform\'s built-in sign-in rather than inventing your own',
            'Build it, but read module five before anyone else touches it',
          ],
        },
        {
          heading: 'Adding an AI Feature Inside Your App',
          body: 'You can also put AI inside the thing you build. Summarise these notes, draft a reply, tag this enquiry, answer questions about your own documents. Wiring this up is genuinely straightforward now: a handful of lines, and a service does the hard part. Two things follow. First, every one of those calls costs money, and your users will make far more of them than you will while testing. Second, the feature can be confidently wrong in a way ordinary software is not. A broken button looks broken, but a wrong summary looks fine. Both of these come up again in modules four and five. For now, know that the capability is available to you, and that it carries a bill and a failure mode.',
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
          body: 'Some categories should not be your first solo build. This is not gatekeeping — it is the shape of the consequences. Anything that moves real money: taking card details yourself, holding balances, calculating payouts. Anything touching health: symptoms, medication, anything a person might act on medically. Anything where a wrong answer hurts someone physically. In these areas the failure is not "the site looks odd". It is money gone, a person harmed, and a liability with your name on it. A prototype — a rough first version built to test an idea — proves nothing at all about safety here. You can still build near these areas safely. Hand the dangerous part to an established provider: take payments through a payment company\'s own checkout, rather than touching card numbers yourself. Route around the hazard instead of rebuilding it.',
          bullets: [
            'Never handle raw card details yourself — redirect to a payment provider\'s checkout',
            'Health, safety and legal advice need qualified review, not a confident prototype',
            'Ask what the worst realistic outcome is, not whether the code runs',
            'Delegating the risky component to a specialist provider is a legitimate answer',
          ],
        },
        {
          heading: 'Scale, Compliance and Other People\'s Regulations',
          body: 'Two more categories deserve caution. Heavy scale: something expecting thousands of users at once, large file processing, or constant background work. Prototypes are built for a handful of people and quietly assume it. They fall over, or run up costs, when that assumption breaks. Then there is strict compliance: regulated industries, children\'s data, health records, anything where a specific standard applies. Compliance is not a feature you can add on Sunday. It shapes where data lives, who can see it, how long you keep it, and what you must be able to prove. If someone has told you which regulation applies, that is your signal to get advice before you build, not after. Building first and retrofitting compliance is the most expensive order available.',
          bullets: [
            'Prototypes assume few users; that assumption is invisible until it breaks',
            'Regulation shapes the design, so it cannot be bolted on afterwards',
            'Children\'s data, health records and financial records all carry specific rules',
            'If a standard has been named at you, get advice before writing anything',
          ],
        },
        {
          heading: 'The Question That Sorts It',
          body: 'You do not need a list you cannot remember. One question sorts most cases. If this is wrong at three in the morning, and nobody notices for a week, what happens? A landing page shows the old price — mildly embarrassing, fixed in a minute. An internal tracker miscounts — someone spots it and you correct it. A booking system double-books — annoyed customers and an apology. Now take a tool that emails your whole customer list, or charges cards, or tells someone their test result. That is a different answer entirely. And it is the answer, not your confidence, that decides whether you should be building it alone. Confidence is not evidence. The consequence of being wrong is.',
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
          body: 'The riskiest projects are not the technically hardest ones. They are the ones holding data you would hate to lose control of. Sort your ideas by what they store, not by how complicated they look.',
          bullets: [
            'Data you do not collect cannot leak — start by cutting fields you do not need',
            'Payments, health records and identity documents belong with specialist providers',
            'A simple app holding sensitive data is more dangerous than a complex one holding none',
          ],
        },
        {
          role: 'developer',
          label: 'If You Have Some Technical Skill',
          body: 'Your advantage is not writing code faster. It is reading what came back. You can spot when it is structurally wrong, rather than merely ugly.',
          bullets: [
            'First, skim the generated code for where data is stored and who can read it',
            'Watch for classic prototype shortcuts: no input checks, no access checks, secrets in the code',
            'You can attempt projects a step above this list, because you can inspect the result',
          ],
        },
        {
          role: 'consultant',
          label: 'If You Are Advising or Hiring',
          body: 'Clients now arrive with a working prototype and assume the remaining work is cosmetic. Reset that early. The prototype proved the idea, and proving the idea is a different job from operating it.',
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
          body: 'Every idea arrives as a system: accounts, payments, notifications, an admin panel, a mobile version. That version is a year of work, and you will abandon it in week three. The move is to find the single action that makes the idea worth anything at all, and build only that. A marketplace is really "someone can list a thing and someone else can see it". A scheduling app is really "a client picks a slot and I get told". Everything else is support scaffolding around that one action. Strip it back deliberately, on paper, before you describe anything to an AI. If you do not choose the scope, the AI will cheerfully attempt all of it. What comes back will be broad, shallow and impossible to fix.',
          bullets: [
            'Write your idea as a single sentence containing exactly one verb',
            'Ask of every feature: does the core action work without this? Then cut it',
            'Accounts, admin panels and settings are almost never version one',
            'If you do not set the scope, the AI will attempt everything at once',
          ],
        },
        {
          heading: 'Fake Everything You Can',
          body: 'A first version does not have to do the work. It has to prove the work is worth doing. Notifications can be an email to you that you forward by hand. A payment can be an invoice you send yourself. Matching, moderation, approval, curation: all can be you, quietly, at a laptop, for the first twenty users. This is not cheating. It is the oldest trick in product development, and it has a real advantage. Doing the job by hand teaches you exactly what the automated version needs to do, and you cannot get that knowledge by guessing. Automate a step only after you have done it by hand enough times to be bored by it. Boredom is a reliable signal that you now understand the rules well enough to write them down.',
          bullets: [
            'Doing it by hand first teaches you what to automate and what to skip',
            'Manual steps are invisible to users when volume is low',
            'Automate the step you are bored of, not the step you are excited about',
            'Every faked feature is a feature you did not have to debug this weekend',
          ],
        },
        {
          heading: 'A Weekend-Sized Test',
          body: 'Here is a check before you start. Can you describe what you are building in three sentences? Can you name the one person who will use it first? Can you say what you will learn from it? If any of those is fuzzy, the project is too big or too vague. You will lose the weekend to indecision rather than to the tools. It also helps to decide in advance what "done" means for this version. There is no natural stopping point — you can always add one more thing, and the AI will happily add it. So write your finish line down before you start. A line you have already written is much harder to move than one you are holding loosely in your head.',
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
          body: 'People say "I built an app" about three very different objects. Confusing them causes most of the pain in this field. A prototype exists to answer a question. It runs on your machine, it breaks if you look at it oddly, and that is fine, because its job is to inform a decision. Something friends can try lives on the internet, survives ordinary use, and holds a little real data from people who will forgive you. A real product is used by strangers who will not forgive you. It stays up, it protects data, it handles the odd cases, someone can fix it at midnight, and it does not quietly bankrupt you. Each step is roughly ten times the work of the last. Knowing which one you have is the difference between confidence and delusion.',
          bullets: [
            'Prototype: answers a question, allowed to be fragile, one user — you',
            'Friends-can-try: online, survives normal use, small amount of real data',
            'Real product: strangers, uptime, security, cost control, someone on call',
            'Each stage is roughly ten times the work of the one before it',
          ],
        },
        {
          heading: 'What Changes at Each Step',
          body: 'Moving between stages is not about polish. Prototype to friends-can-try means it lives somewhere other than your laptop. Other people\'s data appears, and your keys and passwords must stop sitting in the code. Friends to strangers asks more again. You need to know when it breaks without being told. You need a copy of the data if something is deleted, and a cap on what it can cost you. You need a plan for the day it goes wrong while you are asleep. None of that is visible in the interface, which is exactly why people skip it. The user-facing part of your app may be entirely finished while the product part has not been started. Those are separate axes of progress.',
          bullets: [
            'Prototype to friends: it leaves your laptop and real data arrives',
            'Friends to strangers: monitoring, backups, cost caps, and a plan for failure',
            'None of this work is visible in the interface, which is why it gets skipped',
            'A finished-looking app can be zero percent of the way to a product',
          ],
        },
        {
          heading: 'Say Which One You Have',
          body: 'Be precise about this out loud, especially with other people. Tell an investor, a client or your own team that you "have an app" when you have a prototype. You have just set an expectation you will pay for later, usually in public. The accurate version costs you nothing and buys credibility. "This is a working prototype. It proves the flow, and it is not ready for customers yet." Nobody sensible is disappointed by that sentence. It is a genuinely impressive thing to have made in a weekend. What damages trust is a demo that looked finished, followed by three months of silence. Naming the stage also keeps you honest with yourself about how much work remains. That is the number people most consistently underestimate.',
          bullets: [
            'Say "working prototype" out loud rather than letting people assume "product"',
            'The gap between demo and product is where reputations are lost',
            'Accurate framing costs nothing and protects you when timelines slip',
            'Naming the stage keeps your own estimates honest too',
          ],
        },
      ],
    },
    {
      id: 'vc1l6',
      title: 'Which Tools, and Why This Page Ages Fastest',
      slides: [
        {
          heading: 'Why This Page Ages Fastest',
          body: 'The rest of this course avoids naming products, on purpose. Names go stale; the ideas behind them do not. That leaves a real gap, though. You have just been told you can build something, so you reasonably want to know what to open. This lesson answers that, with one warning attached. This page dates faster than any other page in the library. Products here launch, merge, get bought and disappear inside a year. Free tiers shrink, features move between tools, and a clear leader today can be an afterthought by next spring. So treat every name below as an example at the time of writing, not a recommendation and not a ranking. Before you commit time or money, check what is current: a recent comparison, a colleague who builds, a forum where people are actually shipping. The categories are the durable part. They have been stable for years and will outlast the products filling them.',
          bullets: [
            'Every product name here is an example at the time of writing, not a recommendation',
            'This page goes out of date faster than anything else in the library',
            'Check what is current before you commit time or money to any tool',
            'The four categories have been stable for years; the names inside them have not',
            'Nothing here is ranked — the right tool depends on what you are making',
          ],
        },
        {
          heading: 'Four Kinds of Tool',
          body: 'Chat assistants are a conversation window. You describe what you want, code or instructions come back, and you copy them somewhere yourself. Examples at the time of writing: Claude, ChatGPT, Gemini. In-editor assistants work alongside you, inside the place your code lives. They can read every file in your project and change several at once, which suits editing something that already exists. Examples: Cursor, GitHub Copilot, Claude Code. Prompt-to-app builders take a description and hand back a whole working site or app, already running on the internet. Examples: Lovable, Replit, Bolt, v0. Hosting and database services are the plumbing underneath. Hosting puts your pages on the internet at a real address; a database stores the information your app keeps. Examples: Vercel, Netlify, Supabase, Firebase. Builders usually bundle hosting and a database for you. The other categories do not, so you choose them yourself.',
          bullets: [
            'Chat assistants: the most flexible, but you decide where the code ends up',
            'In-editor assistants: see your whole project, best for changing work that exists',
            'Prompt-to-app builders: fastest route to something live, least control underneath',
            'Hosting puts your app on the internet; a database keeps what it stores',
            'Builders bundle the plumbing; the other categories leave you to pick it',
          ],
        },
        {
          heading: 'Choose by What You Are Making',
          body: 'Pick by the shape of your project, not by whichever tool is loudest this month. Making a landing page, a form or a small internal tool from nothing? A prompt-to-app builder gets you something live fastest. Changing something that already exists, or working with files you did not generate? An in-editor assistant fits better, because it can see the whole project at once. Just want a snippet explained, or one small script? A chat assistant is plenty, and there is nothing to set up. Building something with sign-in and saved records? You will need hosting and a database, whether bundled or chosen. Using two tools together is normal: a builder for the first version, an in-editor assistant once you outgrow it. Ignore claims that any tool replaces engineers. Judge a tool by one thing — whether it gets you to a working version you can check.',
          bullets: [
            'Something new from nothing: a prompt-to-app builder is usually the fastest start',
            'Changing existing work: an in-editor assistant, because it can see every file',
            'A quick explanation or one small script: a chat assistant needs no setup',
            'Sign-in and saved records mean hosting and a database, bundled or chosen',
            'Using two tools together is normal, not a sign you picked the wrong one',
          ],
        },
        {
          heading: 'Free Tiers, Real Costs, and What Transfers',
          body: 'Almost every tool here has a free tier, and that phrase usually means one of three things. A trial that expires. A monthly allowance of requests, builds or credits that resets. Or a genuinely free level, with limits low enough that real traffic passes them quickly. Free tiers are fine for learning, and fine for a prototype nobody else uses. Costs tend to start at the same three points. When you put something on the internet at your own address. When other people start using it. And when your app calls an AI service for every user, rather than just for you. That last one is charged by usage and has no ceiling unless you set one, which module five covers in detail. Whichever tool you choose, the skills in this course transfer. Writing a clear description, changing one thing at a time, keeping a working copy, reading an error message, testing as a stranger: none of that belongs to a product.',
          bullets: [
            '"Free" usually means a trial, a resetting allowance, or a low-limit permanent tier',
            'Costs commonly start at your own address, at real users, and at AI calls per user',
            'Usage-based charges have no ceiling until you set one — module five covers this',
            'Check current limits yourself; published tiers change quietly and often',
            'Specs, small changes, saved copies and honest testing transfer to any tool',
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
