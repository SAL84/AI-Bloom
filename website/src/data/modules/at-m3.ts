import type { CourseModule } from '../../types/course';

const atM3: CourseModule = {
  id: 'at-m3',
  title: 'AI and Truth',
  icon: 'shield-alert',
  summary: 'Synthetic media, misinformation that scales, the recommendation systems quietly editing your view of the world, and a practical method for checking a claim without becoming exhausting.',
  lessons: [
    {
      id: 'at3l1',
      diagram: 'SyntheticMediaTypes',
      title: 'Synthetic Media: Seeing Is No Longer Believing',
      slides: [
        {
          heading: 'What Can Be Faked Now',
          body: 'Photorealistic images of events that never happened. Video of a real person saying words they never said. A voice cloned from a short sample, convincing enough to fool people who know that person. Text in anyone\'s writing style. None of this requires a studio or a specialist any more — much of it runs from a phone. The important shift is not that fakes exist, since photo manipulation is as old as photography. It is that producing a convincing fake has gone from expensive and slow to cheap and instant, which changes who can do it and how many of them there are.',
          bullets: [
            'Image, video, voice and text generation are all widely available now, not specialist tools',
            'Voice cloning needs surprisingly little source audio, and your voice is all over the internet',
            'The change is cost and speed, which changes the volume and the kind of people producing fakes',
            'Assume any single piece of media could be synthetic until something else supports it',
          ],
        },
        {
          heading: 'Why Spot-the-Fake Advice Keeps Expiring',
          body: 'You have probably been told to count fingers, look for weird teeth, or check whether the eyes blink. Every one of those tells has been fixed in newer systems, and any new tell you learn will be fixed too, because the generators are trained specifically to eliminate the flaws people notice. Visual inspection is a losing race. Some detection tools exist, and provenance standards that attach signed information about how a file was made are being adopted, but neither is reliable enough for you to depend on. The durable skill is not spotting artefacts — it is asking where a piece of media came from.',
          bullets: [
            'Any visual tell you learn has a short shelf life by design',
            'Detection tools are inconsistent and produce both false positives and false negatives',
            'Provenance metadata is promising but not yet universal, and it can be stripped by re-uploading',
            'Source and corroboration outlast every artefact-spotting trick',
          ],
        },
        {
          heading: 'The Liar\'s Dividend',
          body: 'There is a second-order effect that matters more than any individual fake. Once everyone knows video can be fabricated, anyone caught on genuine video can simply claim it is AI-generated, and a meaningful number of people will believe them. Real evidence becomes deniable. This cuts both ways in your own life: a fabricated clip could be used against you, and a real one could be dismissed. The response is not to disbelieve everything, which just makes you easier to manipulate in a different direction. It is to shift weight from "does this look real" to "who published it, and does anything independent support it".',
          bullets: [
            'Widespread fakes let people dismiss authentic evidence as fake',
            'Blanket cynicism is not scepticism — it makes you manipulable by whoever is loudest',
            'Weight the source and the corroboration, not the appearance of the file',
            'Ask who benefits if you believe this, and who benefits if you dismiss it',
          ],
        },
      ],
    },
    {
      id: 'at3l2',
      diagram: 'MisinformationScale',
      title: 'Misinformation That Scales',
      slides: [
        {
          heading: 'The Cost of Producing Nonsense Fell to Nearly Zero',
          body: 'Historically, spreading a lie widely took effort — writing, printing, coordinating people. That friction limited volume. Generative tools removed it. One person can now produce thousands of unique articles, comments, reviews or accounts, each written differently enough to look like separate humans. Fact-checking, meanwhile, still takes a person doing real work over hours or days. The asymmetry is the entire problem: an enormous imbalance between the cost of creating a false claim and the cost of refuting one. No amount of individual fact-checking closes a gap that large, which is why your own habits have to change.',
          bullets: [
            'Generation is instant and near-free; verification is slow and expensive, and always will be',
            'Volume plus variation defeats the old signals like identical copy-pasted text',
            'Fake reviews, fake comment sections and fake grassroots movements are all cheaper than they were',
            'The realistic defence is upstream: choose sources carefully rather than debunking everything',
          ],
        },
        {
          heading: 'Manufactured Consensus',
          body: 'You judge how normal an opinion is partly by how many people seem to hold it. That instinct is reasonable and now exploitable. If a thousand accounts post variations of the same view, it reads as widespread belief even if one person generated all of them. This can make a fringe position look mainstream, make a mainstream position look fringe, or create the impression that everyone is angry about something almost nobody had heard of. Apparent agreement in a comment section or a reply thread is one of the weakest possible signals of what people actually think, and it is now trivially manufactured.',
          bullets: [
            'Volume of agreement online is not evidence of how common a view really is',
            'Coordinated inauthentic activity is designed to look organic and mostly succeeds',
            'Check the accounts: age, history, whether they post like people with lives',
            'Ask whether the loud reaction exists anywhere outside this one platform',
          ],
        },
        {
          heading: 'Emotion Is the Delivery Mechanism',
          body: 'Content that makes you angry, frightened or morally outraged spreads further and faster than content that informs you, because you share it before you evaluate it. Anyone producing misinformation knows this and writes for it deliberately, and AI makes it cheap to generate fifty emotional variants and keep whichever performs. So the most useful internal alarm is not about facts at all — it is about your own body. When something makes you want to repost immediately, that urge is the signal. It usually means the content was engineered to produce it. Waiting ten minutes before sharing removes most of your exposure to this entire category.',
          bullets: [
            'Outrage and fear outperform accuracy in every sharing metric there is',
            'Your strong emotional reaction is often the product, not a side effect',
            'The ten-minute rule: if you want to share it instantly, wait, then decide',
            'Content designed to make you feel superior to a group deserves extra suspicion',
          ],
        },
      ],
    },
    {
      id: 'at3l3',
      diagram: 'RecommendationFeed',
      title: 'The Feed Is Not Neutral',
      slides: [
        {
          heading: 'What a Recommendation System Actually Optimises',
          body: 'Every feed you scroll is ordered by a model predicting which items will produce engagement from someone like you — watch time, likes, comments, shares. It is not choosing what is true, important, or good for you, because none of those are measurable in the way engagement is. It is not malicious either; it is a prediction system pointed at a proxy metric. But the consequences are real: content that reliably provokes reactions gets amplified, and content that is accurate but unremarkable does not. You are not seeing the world. You are seeing a ranked selection optimised for keeping you present.',
          bullets: [
            'Feeds are ranked by predicted engagement, not by importance or accuracy',
            'Engagement is a proxy metric, and optimising a proxy always distorts something',
            'Provocative content wins ranking competitions against accurate but ordinary content',
            'Chronological or manually curated feeds behave completely differently — try one and notice',
          ],
        },
        {
          heading: 'Your Feed Is Not Anyone Else\'s',
          body: 'Two people searching the same term or following similar accounts can see substantially different content, because the ranking is personalised to predicted behaviour. This makes it very hard to notice what you are not being shown. It also means arguments about "what everyone is saying" are often two people describing two different information environments and assuming they are describing one. Watch what happens when you engage with one type of content: the system reads that as a preference signal and gives you more, then more, and your sense of what is normal quietly moves without any decision on your part.',
          bullets: [
            'Personalisation means your evidence about the world is not the same as anyone else\'s',
            'You cannot see what was filtered out, which makes the distortion invisible from inside',
            'Engagement signals include the things you watched angrily, not just the things you liked',
            'Small early signals compound into a very narrow feed over months',
          ],
        },
        {
          heading: 'Taking Some of the Steering Back',
          body: 'You will not out-argue a recommendation system, but you are not powerless either. Follow a small number of sources deliberately and go to them directly rather than waiting for the feed to serve them. Use the controls that exist — not interested, mute, unfollow — because they are real training signals. Notice which content leaves you informed and which leaves you agitated, and treat that as data about the feed rather than about the world. And occasionally look at something outside your usual pattern on purpose. The goal is not to escape algorithms, which is unrealistic, but to make some of your inputs chosen rather than served.',
          bullets: [
            'Go directly to a few sources you chose, instead of only receiving what is pushed',
            '"Not interested" and mute are genuine training signals — use them consistently',
            'Audit how you feel after twenty minutes of scrolling; that is information about the ranking',
            'Deliberately sample outside your bubble now and then, calmly and without arguing',
          ],
        },
      ],
    },
    {
      id: 'at3l4',
      diagram: 'VerifyBeforeYouShare',
      title: 'How to Check a Claim in Two Minutes',
      slides: [
        {
          heading: 'Provenance: Where Did This Come From?',
          body: 'Almost every viral claim traces back to one original source, with everything else being reshares of reshares. Finding that origin usually settles the question faster than analysing the content. Who first published it, when, and what were they in a position to know? A screenshot of a headline is not the article. A video clip is not the full recording, and clipping is the cheapest manipulation technique there is because nothing in the clip is false. If you cannot find where a claim originated, that absence is itself the finding — treat an unsourceable claim as unsupported rather than as probably true.',
          bullets: [
            'Trace back to the original publication before evaluating the claim itself',
            'Screenshots and clips remove context by design; find the full item',
            'Check the date — recycled old content presented as current is extremely common',
            'No findable origin means unsupported, not confirmed and not disproven',
          ],
        },
        {
          heading: 'Read Sideways, Not Down',
          body: 'The instinct when you land on an unfamiliar site is to read it carefully and judge whether it seems credible. Professional fact-checkers do the opposite: they leave immediately and see what other sources say about that site or that claim. Judging credibility from inside a page is unreliable, because looking authoritative is easy and cheap to fake. Opening a couple of tabs and searching the claim, or the outlet\'s name, takes under a minute and tells you far more than the most careful reading of the page ever will. This one habit change is the highest-return thing in this entire module.',
          bullets: [
            'Leave the page and search for what others say about the source and the claim',
            'Professional design and confident tone are not evidence of anything',
            'Look for independent coverage, not repetition of the same original post',
            'If a big claim is real, more than one credible outlet will have it',
          ],
        },
        {
          heading: 'Where AI Helps and Where It Cannot',
          body: 'An AI tool with live search can genuinely accelerate this: it can find the original source, summarise what different outlets say, and lay out where the disagreement sits. What it cannot do is be your final authority, because it will occasionally invent a source or confidently summarise something it half-read, and it has no independent access to truth. So use it as a research assistant that produces leads you then open yourself. If it gives you a link, click it. If it cannot give you a link, you have a claim with no source, which is where you started. The verification still has to end with you looking at something real.',
          bullets: [
            'Good use: find the original, compare coverage, generate leads to check',
            'Bad use: accepting a summary as verification without opening anything',
            'Always click through — an unclickable citation is not a citation',
            'A tool that cites sources beats one that does not, but only if you actually read them',
          ],
        },
        {
          heading: 'Try It Yourself',
          body: 'Tracing an origin sounds tedious until you do it once on something from your own feed. It is usually faster than reading the replies, and it settles the question.',
          exercise: {
            task: 'Open whichever feed you actually scroll and keep going until you hit a post making a factual claim — a statistic, a quote, a "scientists say", a screenshot of a headline. Do not evaluate the post. Open a new tab and work backwards: who published this first, on what date, and what did the full version say?',
            selfCheck: [
            'You can name where the claim first appeared, or you established that there is no findable origin',
            'What looked like several independent sources turned out to trace back to one',
            'You found something the post left out — a date, a caveat, or the rest of the quote',
            ],
          },
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'One habit beats every checklist: before sharing, find where the claim came from. If you cannot, do not share it. That is most of media literacy in a single sentence.',
          bullets: [
            'Trace the origin before you repost, especially when you strongly agree with it',
            'Search the claim in a new tab rather than judging the page you are on',
            'Confirming things you already believe deserves the same scrutiny as things you do not',
          ],
        },
        {
          role: 'security-se',
          label: 'Staying Safe Online',
          body: 'The same techniques used for misinformation are used for scams aimed directly at you and your family. Cloned voices and fabricated urgency are now standard, not exotic.',
          bullets: [
            'A distressed voice on the phone asking for money urgently can be synthetic — verify on a number you already have',
            'Agree a family verification question in advance for genuine emergencies',
            'Fake giveaways, fake support accounts and fake friend requests all scale the same way misinformation does',
          ],
        },
        {
          role: 'developer',
          label: 'If You Build Things',
          body: 'If you make anything that displays user content, you have made a distribution channel. Ranking and moderation decisions are not neutral defaults — they are choices with consequences.',
          bullets: [
            'Whatever you rank by is what your platform will produce more of',
            'Learn how provenance standards for media work; they will matter in what you build',
            'Design for reporting and rate limiting early, because retrofitting them is much harder',
          ],
        },
        {
          role: 'consultant',
          label: 'If People Ask You',
          body: 'When someone shares something false, direct contradiction usually entrenches them. Asking where they saw it works far better and does not make it a status contest.',
          bullets: [
            'Ask about the source rather than attacking the claim',
            'Give people a method they can use themselves instead of just a correction',
            'Model it publicly and calmly — visible checking normalises checking',
          ],
        },
      ],
    },
    {
      id: 'at3l5',
      diagram: 'ScepticalNotParanoid',
      title: 'Sceptical, Not Paranoid',
      slides: [
        {
          heading: 'Cynicism Is Not Critical Thinking',
          body: 'It is tempting, after learning how much can be faked, to conclude that nothing can be known. That feels sophisticated and is actually a failure mode. Someone who believes nothing is not harder to manipulate than someone who believes everything — they are just manipulated differently, usually by whoever confirms their suspicion that it is all corrupt. Genuine scepticism is effortful and specific: it asks what evidence exists, how strong it is, and what would change the answer. Blanket disbelief asks nothing and costs nothing, which is exactly why it is so appealing and so useless.',
          bullets: [
            '"You cannot trust anything" is a conclusion that stops thinking rather than starting it',
            'Universal doubt is a manipulation surface, not a defence against manipulation',
            'Real scepticism is proportionate: extraordinary claims need stronger support than ordinary ones',
            'Being able to say "I do not know yet" is a skill, not a failure',
          ],
        },
        {
          heading: 'Calibrating How Much to Care',
          body: 'You cannot verify everything, so spend your effort where it matters. Big claims that would change what you do, think, or say to other people deserve checking. Small claims that are interesting but inconsequential can simply sit in your head as "possibly true, unverified", which is a perfectly respectable state. The most important calibration is inward: apply the most scrutiny to things you want to be true, because that is where your checking instinct switches itself off. Almost nobody fact-checks a claim that flatters their existing view, and that is precisely the material designed to reach you.',
          bullets: [
            'Match verification effort to consequences, not to how interesting something is',
            'Holding a claim as unverified is a valid position — you do not owe every topic an opinion',
            'Your weakest checking happens on claims you already agree with',
            'Notice satisfaction as a warning sign: "I knew it" is when to slow down',
          ],
        },
        {
          heading: 'Building a Diet You Actually Trust',
          body: 'Rather than evaluating every item as it arrives, invest once in the sources you rely on. Look for outlets that correct themselves publicly, distinguish reporting from opinion, name their sources, and occasionally publish things their audience does not want to hear. Then include a few that you disagree with but that meet the same standards, because sources that only confirm you cannot tell you when you are wrong. This takes an afternoon and then works quietly for years. It is a much better use of your attention than becoming a full-time debunker of things that reached you at random.',
          bullets: [
            'Prefer sources that visibly issue corrections — it signals a process, not perfection',
            'Reporting and opinion should be clearly distinguishable; if they are not, be careful',
            'Include credible sources you disagree with, for the same reason you check your own answers',
            'Curate once, benefit continuously — this beats reacting item by item',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why is "look for visual glitches" a weak long-term strategy for spotting AI-generated video?',
      options: [
        'Video files are too compressed for glitches to appear',
        'Generators are improved specifically to remove the flaws people learn to notice',
        'Most fakes are audio-only',
        'Glitches only appear on large screens',
      ],
      correct: 1,
    },
    {
      q: 'What is the "liar\'s dividend"?',
      options: [
        'Money earned from producing deepfakes',
        'The advantage held by whoever posts first in a news cycle',
        'The benefit people gain from being able to dismiss genuine evidence as AI-generated',
        'The extra engagement false posts receive over true ones',
      ],
      correct: 2,
    },
    {
      q: 'What makes AI-assisted misinformation structurally hard to counter?',
      options: [
        'Producing false claims became nearly free while verifying them stayed slow and expensive',
        'Fact-checkers are not allowed to use AI tools',
        'False claims are usually written more clearly than true ones',
        'Social platforms cannot detect duplicated text',
      ],
      correct: 0,
    },
    {
      q: 'A recommendation feed is primarily optimising for:',
      options: [
        'Accuracy of the information shown',
        'An even spread of viewpoints',
        'Content from accounts you follow most closely',
        'Predicted engagement from someone with your behaviour profile',
      ],
      correct: 3,
    },
    {
      q: 'What does "reading sideways" mean when checking a source?',
      options: [
        'Skimming the page quickly for key claims',
        'Leaving the page and seeing what other sources say about it',
        'Comparing the headline against the body text',
        'Reading the comments before the article',
      ],
      correct: 1,
    },
    {
      q: 'You find a claim you cannot trace to any original source. The right conclusion is:',
      options: [
        'It is probably true, since nobody has denied it',
        'It is definitely fabricated',
        'It is unsupported, and should not be shared or used as evidence',
        'It should be shared with a note saying it is unverified',
      ],
      correct: 2,
    },
    {
      q: 'Which claims are you personally most likely to under-check?',
      options: [
        'Ones that confirm what you already believe',
        'Ones that come from unfamiliar websites',
        'Ones that involve statistics',
        'Ones that contradict your existing views',
      ],
      correct: 0,
    },
  ],
};

export default atM3;
