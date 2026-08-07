import type { CourseModule } from '../../types/course';

const rpM1: CourseModule = {
  id: 'rp-m1',
  title: 'Before You Build the Rest',
  icon: 'target',
  summary: 'Where you are standing, and why the demo was always the easy part. What the product actually has to do, what version one refuses to do, and a plan made of stages with an honest count of days attached. The weekend was 2 of 23 — this module is where you find out what the other 21 contain.',
  lessons: [
    {
      id: 'rp1l1',
      title: 'Where You Are Standing',
      sectionLabel: 'Orientation',
      diagram: 'ProductBehindTheDemo',
      slides: [
        {
          heading: 'Who This Course Is For',
          body: 'This course is for the person holding a working prototype and wondering, quietly, what comes next. Perhaps you built it during the Vibecoding course on this site — its capstone ended with a booking page for a dog groomer — but you don\'t need to have read a word of it. You need a thing that works when you use it, and a suspicion that "works when I use it" is not the whole story. Three things this course is not. It is not a business course: no customers, no pricing, no fundraising. It is not a tool tutorial: tools change every eighteen months, and decisions last decades. And it is not a course that talks you out of shipping. You will ship. The aim is that you ship with your eyes open, knowing exactly what you took on.',
          bullets: [
            'For the reader with a working prototype, from Vibecoding or anywhere else',
            'Not a business course: no customers, pricing or fundraising here',
            'Not a tool tutorial: decisions and stages outlast any tool',
            'Not an argument against shipping — the aim is shipping with open eyes',
          ],
        },
        {
          heading: 'The Gmail Conclusion',
          body: 'There is a moment most people have after watching an AI produce working code. The screen fills with something real, and a thought arrives: I could rebuild Gmail. The feeling deserves respect, because the ability underneath it is real — you genuinely can make working software now. The conclusion, though, is wrong, and it is worth seeing exactly why. AI collapsed the cost of the first slice: the visible screens, the happy path, the demo. It left everything else untouched, which makes the gap feel smaller while it stays exactly as wide as ever. Gmail is not hard because the code is hard. It is spam filtering at a scale you cannot picture, twenty years of edge cases, a sending reputation earned message by message, compliance, the job of moving twenty years of mail without losing a message, a support organisation, and uptime that millions of people plan around. The demo was always the easy part.',
          bullets: [
            'The ability is real: you genuinely can make working software',
            'AI collapsed the first slice and left the rest untouched',
            'The gap feels smaller while staying exactly as wide as ever',
            'Gmail is hard because of spam, edge cases and support — not code',
          ],
        },
        {
          heading: 'One Example, Carried the Whole Way',
          body: 'This course walks one example the whole way through, so you can see every stage on something concrete. It is the dog-grooming booking page from the end of Vibecoding: a dog owner picks a free slot, and the groomer gets an email. Payments were an invoice sent by hand; reminders were a note in a calendar. The goal now is bigger: this page becomes the way the business takes bookings — around 200 regular customers, one groomer, maybe a second groomer later. Let us be plain about what this is. It is a worked example, a teaching device. Nobody built it, no customers appear in it, and no results are claimed for it. Your own project rides alongside: each module ends with an exercise that carries your idea through the same stage the groomer\'s page just went through. Five exercises, one honest plan.',
          bullets: [
            'The groomer\'s booking page, picked up where Vibecoding left it',
            'The new goal: the way a 200-customer business takes bookings',
            'A teaching device — nobody built it, and no results are claimed',
            'Your own project follows the same stages through five exercises',
          ],
        },
        {
          heading: 'The Effort Ledger',
          body: 'One device recurs through this course, and it is the closest thing here to a promise. It is called the effort ledger: an honest count of days of focused work at every stage, stated as illustrative estimates for the worked example, never as guarantees. The prototype — the Vibecoding weekend — cost 2 days, and they are already spent. By the end of the course the ledger will reach 23 days for a real first version. The demo is 2 of those 23: under a tenth. Read that number the right way. It is not a reason to stop, and this course will never use it as one. It is a map. Every one of the remaining days will be walked in plain sight, with its own line and its own reason, so that when you decide to ship, you know what the decision contains.',
          bullets: [
            'The ledger counts honest days of focused work per stage',
            'The weekend prototype was 2 days, already spent',
            'The real first version will reach 23 days in total',
            'Under a tenth is a map, not a reason to stop',
          ],
        },
      ],
    },
    {
      id: 'rp1l2',
      title: 'Finding Out What It Has to Do',
      diagram: 'AskDontImagine',
      slides: [
        {
          heading: 'Ask, Don\'t Imagine',
          body: 'The prototype could be built from imagination, and it was: you pictured a person booking a slot, and the picture was close enough. The version real people rely on cannot be built that way, because imagination reliably produces the average case, and real life is made of the other kind. So the first work of this stage is conversation, not construction. Talk to the person whose business this is, and to the people who would use it. Ask what actually happens, not what should happen. You are not gathering feature requests — you are learning the shape of the job the software has to do. An hour of asking saves days of building the wrong thing beautifully. The groomer knows things about Saturdays that no amount of staring at your own screen will surface, and she will tell you, if you ask.',
          bullets: [
            'Imagination built the prototype; it cannot build the reliable version',
            'Talk to the owner of the business and to the people who would use it',
            'Ask what actually happens, not what should happen',
            'An hour of asking saves days of building the wrong thing well',
          ],
        },
        {
          heading: 'What a Booking Really Is',
          body: 'Spend a morning watching the business, and the product changes shape in front of you. The phone rings mid-groom, so bookings are taken with wet hands or missed entirely. Saturdays are chaos: everyone wants ten o\'clock, and nobody wants February. Regulars book the same slot every six weeks, and would be puzzled to be asked for details the groomer already knows. None of this was visible from inside the prototype. And notice what a booking becomes once people rely on it. On your screen it is a row of text. In the world it is a promise two people plan around: the groomer sets aside an hour and turns other work away; the owner books the afternoon off and tells the dog, who has opinions. Software that holds promises has a different job from software that displays rows, and this whole course is about the difference.',
          bullets: [
            'The phone rings mid-groom; Saturdays are chaos; regulars have habits',
            'None of this was visible from inside the prototype',
            'A load-bearing booking is a promise two people plan around',
            'Holding promises is a different job from displaying rows',
          ],
        },
        {
          heading: 'The Requirements Nobody Volunteers',
          body: 'The most important requirements are the ones nobody volunteers, because to the people living with them they don\'t feel like requirements — they feel like weather. Ask the groomer what the system must do and you will hear about booking slots. Watch for a week and you find the rest. Cancellations, and the question of how late is too late. The dog that isn\'t well on the morning. The customer with two dogs who books one slot and expects both done. The week in August when the shop closes, which the calendar must know about, or the page will happily sell appointments that cannot happen. None of these are rare cases to the business; they are Tuesday. Your job at this stage is to collect them while they are cheap — a line in a plan — rather than later, when each one is a day of rework.',
          bullets: [
            'The quiet requirements feel like weather to the people living with them',
            'Cancellations, the unwell dog, the customer with two dogs',
            'The August closure the calendar must know, or it sells impossible slots',
            'Collect them now as lines in a plan, not later as days of rework',
          ],
        },
      ],
    },
    {
      id: 'rp1l3',
      title: 'The Not-List',
      diagram: 'NotList',
      slides: [
        {
          heading: 'A Decision with a Date',
          body: 'The moment the project gets serious, the full wish-list comes back. Online payment, automatic reminders, a loyalty scheme, an app — everything that was cut to make the weekend possible returns, wearing better arguments. The answer is a not-list: a written list of what version one refuses to do. Notice the word refuses. A not-list is not a confession of weakness, and it is not forever. Each item is a decision with a date: not now, reviewed once version one has run for a while. That framing matters, because it turns every future feature argument into a scheduling question instead of a fight. The wish-list is not wrong — reminders would genuinely help this business. It is early. Version one has one job: become the way the business takes bookings. Everything that does not serve that job waits, in writing, with a review date attached.',
          bullets: [
            'The wish-list returns the moment the project gets serious',
            'A not-list is what version one refuses to do, in writing',
            'Each item is a decision with a date, not a never',
            'Feature arguments become scheduling questions instead of fights',
          ],
        },
        {
          heading: 'The By-Hand Workaround',
          body: 'Every item on the not-list earns its place the same way: it has a by-hand workaround that costs minutes a week and zero days of building. Online payment? The groomer keeps sending invoices by hand, exactly as she does today — twenty minutes a week. Reminders? A note in the calendar and a text sent with her own thumbs — ten minutes. The loyalty scheme? A card and a stamp. This is the test that keeps a not-list honest. If an item has no workable by-hand version, it may not belong on the list at all; if the workaround genuinely costs minutes, then building it now buys almost nothing, and pays for it with days from the ledger and one more thing to maintain. By-hand is not an embarrassment or a failure of ambition. It is the cheapest possible way to run a feature while you find out whether anyone wants it.',
          bullets: [
            'Every not-item has a by-hand workaround costing minutes a week',
            'Invoices by hand, a text reminder, a card with a stamp',
            'No workable by-hand version? The item may not belong on the list',
            'By-hand is the cheapest way to run a feature while you learn its worth',
          ],
        },
        {
          heading: 'Refusing What You Could Build',
          body: 'Here is the strange skill this lesson is really about: refusing things you could easily build. The AI makes reminders an afternoon\'s work, which makes yes feel free. It is not free. Every yes is bought with days from the ledger, and the price does not stop at building. Every feature you ship must then be run, supported and maintained — it can break, confuse a customer, turn up in the late-night email, and demand attention in its second year, all of which this course will put honest numbers on before the end. A feature costs an afternoon to build and a little of every week afterwards, indefinitely. The not-list is where you decline those subscriptions. The discipline feels wrong at first, because refusing easy things always does. But nobody regrets a small version one that works. People regret large ones that almost do.',
          bullets: [
            'AI makes building cheap, which makes yes feel free — it is not',
            'Every yes is bought with days from the ledger',
            'Everything you ship must then be run, supported and maintained',
            'Nobody regrets a small version one that works',
          ],
        },
      ],
    },
    {
      id: 'rp1l4',
      title: 'A Plan Made of Stages',
      diagram: 'StagePlanLedger',
      slides: [
        {
          heading: 'What Has to Be True First',
          body: 'With the job understood and the refusals written down, you need a plan — and the useful kind is made of stages, not tasks. A task list says what you will do: build this screen, connect that email. A stage plan says what must be true before you move on, which is a different and sturdier thing. The data must be safe — recorded properly, backed up, restorable — before accounts are worth building on top of it. Accounts must work, and keep each customer to their own bookings, before the link goes anywhere public. Each stage is a gate with a plain question attached: is this true yet? If yes, move on. If not, the plan has just told you exactly where you stand — which is the thing a task list cannot do, because you can tick off tasks all week while nothing important becomes true.',
          bullets: [
            'A task list says what you will do; a stage plan says what must be true',
            'Data safe before accounts; accounts before the link is public',
            'Each stage is a gate with a plain question: is this true yet?',
            'You can tick off tasks all week while nothing important becomes true',
          ],
        },
        {
          heading: 'The Stages, with Honest Numbers',
          body: 'Here is the road this course will walk, with the ledger\'s honest line for each stage. Exploration, scope and this plan — the work of this module — is 3 days. Building the rest of the screens, plus checks that run without you: 4 days. The parts that aren\'t the screen — data done properly, accounts, and the services you secretly depend on: 9 days, the biggest line on the whole ledger. Shipping it, watching it, and fixing what the first week reveals: 5 days. Add the 2-day weekend already spent and the total reaches 23 days to a real first version. These are illustrative estimates for the groomer\'s page, not promises about your project. But the shape transfers even where the numbers drift: the demo is the smallest line, and the largest line is work you cannot see from the screen at all.',
          bullets: [
            'This module\'s work — exploration, scope, plan — is 3 days',
            'Building and checks: 4 days; the parts that aren\'t the screen: 9',
            'Shipping, watching and launch fixes: 5 — the total reaches 23',
            'The largest line is work you cannot see from the screen',
          ],
        },
        {
          heading: 'Plans That Survive Reality',
          body: 'Plans made of stages survive contact with reality because reality argues with tasks, not with truths. The moment you start building, surprises arrive: a service behaves oddly, the groomer remembers something vital, a week disappears into family life. A task list meets surprises badly — half-done items pile up until the list stops describing anything real. A stage plan bends without breaking, because however the details move, the gates still hold: data safe before accounts, accounts before the public link. You always know where you are by asking what is true so far. Along the way you learn what done actually feels like. Done with a stage is quiet: nothing shiny to show, just a question you can answer with a yes and some evidence. The demo taught you to expect applause. The rest of the work mostly earns a nod — and real products are built out of nods.',
          bullets: [
            'Reality argues with tasks; it cannot argue with what must be true',
            'Surprises bend a stage plan without breaking it',
            'Done with a stage is quiet: a yes, with evidence behind it',
            'The demo earned applause; the rest earns nods, and products are built of nods',
          ],
          exercise: {
            task: 'Give your own project its Module 1. Write the one-sentence job description of your product — one sentence, one verb, the job version one must do. Then write your not-list: at least three things version one refuses to do, each with a by-hand workaround that costs minutes a week and a date when you will look at it again.',
            copyText: 'The job description:\n[my product, in one sentence with one verb]\n\nThe not-list:\n1. [feature version one refuses] — by hand: [the workaround] — review: [date]\n2. [feature version one refuses] — by hand: [the workaround] — review: [date]\n3. [feature version one refuses] — by hand: [the workaround] — review: [date]\n\nThe first gate:\n[what must be true before anyone relies on this]',
            selfCheck: [
              'Your job description has one verb, and everything else either serves it or waits',
              'Every not-list item has a by-hand workaround measured in minutes a week',
              'You can say which stage you are in now, and what must be true to leave it',
            ],
          },
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'After a weekend with AI, the gap between a demo and a real product often feels small. Why is that feeling misleading?',
      options: [
        'The gap really is small now, except for products that hold personal data',
        'AI collapsed the cost of the first slice and left the rest untouched',
        'AI-written code hides its flaws, so the remaining work stays invisible',
        'Demos are built with better tools than products, so the speed fades',
      ],
      correct: 1,
    },
    {
      q: 'According to this module, what actually makes Gmail hard to rebuild?',
      options: [
        'The sheer size of the code, beyond what any small team could write',
        'The cost of the computers needed to store that much email reliably',
        'Secret techniques that the large providers guard and never publish',
        'Spam at scale, years of edge cases, deliverability and support',
      ],
      correct: 3,
    },
    {
      q: 'Once real people rely on it, what does the module say a booking really is?',
      options: [
        'A promise two people plan around',
        'A row of text in a filing system',
        'A message between two email inboxes',
        'A slot in the groomer\'s paper diary',
      ],
      correct: 0,
    },
    {
      q: 'What is an item on the not-list, properly understood?',
      options: [
        'A feature the product will never offer, cut to keep the design simple',
        'A feature too difficult for the AI to build reliably at the moment',
        'A decision with a date: not now, reviewed once version one has run',
        'A feature waiting until a customer specifically asks for it by name',
      ],
      correct: 2,
    },
    {
      q: 'What must be true of each item before it belongs on the not-list?',
      options: [
        'It would take the AI longer than a week to build it well',
        'The owner of the business has agreed in writing to drop it',
        'No rival booking page currently offers the feature either',
        'It has a by-hand workaround costing minutes a week to run',
      ],
      correct: 3,
    },
    {
      q: 'Why does the module treat refusing easy features as the killer skill?',
      options: [
        'Every yes costs days now, then running, support and upkeep after',
        'Saying no keeps the AI focused on the screens that already exist',
        'Customers trust small products more and reward visible restraint',
        'Refused features can be sold later as upgrades at a higher price',
      ],
      correct: 0,
    },
    {
      q: 'What makes a plan made of stages different from a task list?',
      options: [
        'A stage plan is shorter, so it is easier to keep in your head',
        'A stage plan is written by the AI rather than kept by hand',
        'Each stage states what must be true before you move on',
        'A task list covers building, while a stage plan covers cost',
      ],
      correct: 2,
    },
    {
      q: 'On the effort ledger, what share of the 23-day total does the weekend demo represent?',
      options: [
        'About half, because building was always the hardest part',
        '2 days — under a tenth of the honest total',
        'About a quarter, once its plan is counted alongside it',
        'Nearly all of it, since what remains is mostly decisions',
      ],
      correct: 1,
    },
  ],
};

export default rpM1;
