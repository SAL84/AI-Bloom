import type { CourseModule } from '../../types/course';

const atM4: CourseModule = {
  id: 'at-m4',
  title: 'AI, You, and Your Data',
  icon: 'shield',
  summary: 'What happens to what you type, the footprint you are building before you have a career, how bias shows up in things you actually encounter, and the consent problem around AI images of real people.',
  lessons: [
    {
      id: 'at4l1',
      diagram: 'DigitalFootprint',
      title: 'What Happens to What You Type',
      slides: [
        {
          heading: 'Where the Text Goes',
          body: 'When you send a message to a chatbot, it usually leaves your device and is processed on the company\'s servers. What happens next depends entirely on the product. It may be stored against your account so you can see your history. It may be reviewed by humans for safety or quality. It may be used to train future models, depending on the settings and the plan you are on. Consumer free tiers are generally the most permissive about training on your data; paid and school-provided accounts are often more restrictive. None of this is hidden, but almost nobody reads it, which is how people end up surprised.',
          bullets: [
            'Your input typically leaves your device and is processed remotely',
            'Storage, human review and training use vary by product, plan and settings',
            'Free consumer tiers are usually the most permissive; check before assuming',
            'Look for a setting like "improve the model for everyone" and decide deliberately',
          ],
        },
        {
          heading: 'The Practical Rule',
          body: 'You do not need to memorise privacy policies. Use one heuristic: do not type anything you would not be comfortable existing on a company server indefinitely. That covers most real decisions. Specifically, keep out passwords, ID numbers, bank details, your exact address, and anything about your health or your family\'s. Also keep out other people\'s information — a classmate\'s messages, a friend\'s situation, a private photo — because they never agreed to anything. It is fine to describe a problem in general terms; you rarely need real names and specifics to get a useful answer anyway.',
          bullets: [
            'Never: passwords, ID or bank numbers, exact address, login codes',
            'Careful: health details, family circumstances, anything you would not say publicly',
            'Other people\'s private information is not yours to upload',
            'Anonymise — describe the situation without the identifying specifics',
          ],
        },
        {
          heading: 'Free Products and What You Pay With',
          body: 'Running these models costs real money in hardware and electricity, so a free product is being funded somehow. Sometimes it is a paid tier subsidising you. Sometimes it is data, attention or advertising. Sometimes it is investment money buying growth now for revenue later. None of these are automatically bad, but they tell you where the incentives point. A product funded by your attention will be designed to hold it. A product funded by subscriptions has some reason to actually serve you. Ask this about any tool you are about to hand a lot of your life to, and the surprises get much smaller.',
          bullets: [
            'Ask how the product makes money and what that incentivises it to do',
            'Attention-funded products optimise for time spent, which is not the same as usefulness',
            'Check whether the company sells or shares data with third parties',
            'A free tool from an unknown company with no clear business model deserves real caution',
          ],
        },
      ],
    },
    {
      id: 'at4l2',
      diagram: 'FootprintOverTime',
      title: 'Your Digital Footprint',
      slides: [
        {
          heading: 'You Are Building a Record Early',
          body: 'Your generation is accumulating a searchable public record from a younger age than any before it, and the tools for searching it are getting sharper. AI makes it cheap to gather scattered fragments — an old username, a tagged photo, a comment on a forum, a public profile — and assemble them into a coherent picture of a person. That was previously tedious enough that nobody bothered unless you were notable. This is not a reason to panic about every post. It is a reason to understand that the audience for what you publish now includes people you have not met, at times you cannot predict.',
          bullets: [
            'Scattered public fragments can now be assembled automatically and cheaply',
            'Old accounts and reused usernames are the most common link between identities',
            'Deleting later does not reliably remove copies, archives or screenshots',
            'Assume anything public is permanent and searchable by people you have not met',
          ],
        },
        {
          heading: 'The Settings That Actually Matter',
          body: 'Most privacy advice is a long list nobody completes. A short one you will actually finish: turn off precise location sharing for apps that do not genuinely need it, and check what your photos are tagged with. Review which apps you have logged into using a social account, because that link shares more than you think. Set a passcode and turn on two-factor authentication on your main email, since it is the recovery route for everything else. Check who can see your posts and who can tag you. And search your own name occasionally to see what someone else would find. That is under an hour, once.',
          bullets: [
            'Location: off by default for anything that is not a map or a delivery app',
            'Two-factor on your primary email first — it controls every other account',
            'Audit third-party logins and remove ones you no longer use',
            'Search your own name and usernames periodically to see the public picture',
          ],
        },
        {
          heading: 'Proportion, Not Panic',
          body: 'The goal is not to disappear. Having no online presence has its own costs, and a curated one you control is genuinely useful — for university applications, jobs, and finding people who share your interests. The realistic aim is to be deliberate: publish things you would be comfortable being associated with, keep the genuinely private things off public platforms, and separate identities where it makes sense. Also worth knowing: in many places you have legal rights to see and delete data held about you. Those rights are underused mainly because people do not know they exist, and requesting your data is often genuinely eye-opening.',
          bullets: [
            'A deliberate public presence beats both oversharing and total absence',
            'Keep separate identities for separate contexts where it makes sense',
            'Many jurisdictions give you rights to access and delete your data — check yours',
            'Deleting an account is not the same as deleting the data; look for the actual deletion route',
          ],
        },
      ],
    },
    {
      id: 'at4l3',
      diagram: 'BiasInEverydayAI',
      title: 'Bias: Where It Actually Shows Up',
      slides: [
        {
          heading: 'Bias Is Inherited, Not Invented',
          body: 'AI systems learn patterns from data produced by people and institutions, and those patterns include historical unfairness. A model is not deciding to be prejudiced; it is reproducing what was statistically common in what it read. If a role was overwhelmingly filled by one group historically, the model learns that association and will reproduce it in text and images unless something corrects it. If a facial analysis system was developed and tested mostly on some kinds of faces, it performs worse on others. If moderation was trained mostly on one dialect of English, it will misjudge others. Same mechanism throughout.',
          bullets: [
            'Training data reflects the world including its inequalities, and the model compresses all of it',
            'Nobody has to intend the bias for the system to produce it',
            'Underrepresentation in training and testing data becomes worse performance for those groups',
            'Scale is what makes it serious: one biased decision repeated at machine speed',
          ],
        },
        {
          heading: 'Where You Will Actually Meet It',
          body: 'Not in abstract examples. Try asking an image generator for pictures of people in various professions and look at who shows up. Notice which accents voice assistants and automatic captions handle well. Notice whose posts get flagged by automated moderation and whose slang gets read as a violation. Notice which languages an AI writing tool handles fluently and which it mangles. And when you start applying for jobs, know that automated screening is common, and it learns from previous hiring decisions — including the patterns nobody would defend out loud if you asked them directly.',
          bullets: [
            'Image generators reveal occupational and demographic assumptions instantly — test it yourself',
            'Speech recognition and captioning quality varies sharply by accent and dialect',
            'Automated moderation misreads slang, dialect and reclaimed language',
            'Application screening systems learn from past decisions, including the biased ones',
          ],
        },
        {
          heading: 'What Can Actually Be Done',
          body: 'Bias is not fully solvable, partly because different reasonable definitions of fairness are mathematically incompatible with each other — you have to choose which one you are optimising for, and that is a values decision, not a technical one. But plenty is possible: broader and better-documented training data, testing performance separately across groups rather than reporting one average, human review for consequential decisions, and a route to appeal. The most important habit for you personally is noticing. Systems get fixed when people notice and say something, and being able to describe the problem precisely makes you far more effective than being vaguely annoyed.',
          bullets: [
            'Different fairness definitions conflict mathematically — someone is always choosing',
            'One overall accuracy number hides failures concentrated in specific groups',
            'Consequential automated decisions need human review and a genuine appeal route',
            'Naming the problem precisely is what gets it fixed — vague complaints do not',
          ],
        },
      ],
    },
    {
      id: 'at4l4',
      diagram: 'ConsentAndImages',
      title: 'Consent and Images of Real People',
      slides: [
        {
          heading: 'The Problem, Stated Plainly',
          body: 'Tools now exist that take an ordinary photo of a real person — from a public profile, a group chat, a school event — and generate sexual images of them. This is being done to teenagers, mostly to girls, by classmates, in schools. It is not a hypothetical future risk and it is not a prank. The harm to the person targeted is severe and well documented: humiliation, anxiety, withdrawal from school and online life. It does not matter that the image is synthetic. Its function is to sexually humiliate a real, identifiable person, and that function does not depend on the pixels being authentic.',
          bullets: [
            '"It is not a real photo" is not a defence — the target and the harm are real',
            'Overwhelmingly aimed at girls and women, and frequently by people they know',
            'Consequences for the person targeted are serious and lasting',
            'This is happening in ordinary schools now, not somewhere distant',
          ],
        },
        {
          heading: 'It Is Also Illegal in Many Places, and Increasingly So',
          body: 'Laws are moving quickly. In a growing number of jurisdictions, creating or sharing sexualised synthetic images of a real person without consent is a criminal offence, and where the person is under eighteen it is generally treated as child sexual abuse material regardless of how it was produced — including when the person who made it is also a minor. The consequences are not a school detention. They include criminal records, permanent registration requirements in some places, and exclusion from education. Sharing on is treated as an offence too. "I only forwarded it" has not protected anyone.',
          bullets: [
            'Many jurisdictions now criminalise non-consensual synthetic intimate images explicitly',
            'If the subject is a minor, this is treated as CSAM in most legal systems, whoever made it',
            'Forwarding and re-sharing carry liability, not just creating',
            'Being a minor yourself is not the protection people assume it is',
          ],
        },
        {
          heading: 'If It Happens to You or Someone You Know',
          body: 'The instinct is silence and shame, and that instinct serves the person who did it. Do the opposite, quickly. Screenshot everything including usernames, URLs and timestamps before it disappears — evidence vanishes fast. Report it to the platform, which usually has a specific route for non-consensual intimate imagery and must respond. Tell an adult you trust, and the school, and consider the police. Specialist organisations exist that help get images removed, including services for under-eighteens, and they do this every day. If it is someone else, believe them immediately and do not ask what they did to invite it.',
          bullets: [
            'Preserve evidence first: screenshots with usernames, links and timestamps',
            'Report through the platform\'s non-consensual intimate imagery route specifically',
            'Tell a trusted adult and the school; police involvement is reasonable and increasingly common',
            'Specialist takedown services exist, including ones dedicated to under-eighteens',
          ],
        },
        {
          heading: 'The Wider Principle: Someone\'s Likeness Is Theirs',
          body: 'The nudify case is the most severe, but the underlying principle covers a lot of ordinary situations. Generating a video of a classmate saying something they never said, cloning a teacher\'s voice as a joke, making a fake screenshot of someone\'s messages, putting a friend\'s face into a meme they would hate — all of these use a real person\'s identity without their agreement. Some are minor and some end careers. The test that works: would this person agree if you asked them first? If you would avoid asking because you know the answer, you already have the answer. Ask before, not after.',
          bullets: [
            'A person\'s face, voice and likeness are theirs, not raw material for your content',
            'Fabricated screenshots and quotes are the same category as fabricated images',
            'Consent means asking beforehand, not apologising afterwards',
            'If you would not ask them because you know they would say no, that is your answer',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Which is the most reliable rule for what to type into a chatbot?',
      options: [
        'Anything is fine as long as you delete the chat afterwards',
        'Only avoid passwords; everything else is safe',
        'Nothing you would be uncomfortable having sit on a company server indefinitely',
        'Anything is fine if the tool is from a large, well-known company',
      ],
      correct: 2,
    },
    {
      q: 'Why does it matter how a free AI product makes money?',
      options: [
        'Free products are always worse at their core task',
        'The funding model tells you what the product is designed to optimise for',
        'Paid products never use your data',
        'It determines whether the model hallucinates',
      ],
      correct: 1,
    },
    {
      q: 'What has changed about digital footprints because of AI?',
      options: [
        'Deleted posts can now be fully recovered by anyone',
        'Social platforms are required to keep everything permanently',
        'Private accounts are no longer private',
        'Scattered public fragments can be gathered and assembled into a profile cheaply and automatically',
      ],
      correct: 3,
    },
    {
      q: 'Where does bias in an AI system usually originate?',
      options: [
        'Patterns in the training data, which reflect the world including its inequalities',
        'Deliberate choices by the engineers who wrote the code',
        'Random errors introduced during inference',
        'Users deliberately trying to make the model behave badly',
      ],
      correct: 0,
    },
    {
      q: 'Why is a single overall accuracy figure a misleading way to judge fairness?',
      options: [
        'Accuracy is impossible to measure for language models',
        'Overall accuracy can look good while performance is much worse for specific groups',
        'It only applies to image systems, not text systems',
        'Accuracy figures are usually estimated rather than measured',
      ],
      correct: 1,
    },
    {
      q: 'Someone argues that AI-generated sexual images of a classmate are not a serious issue because the images are not real photographs. What is wrong with that argument?',
      options: [
        'Nothing — the harm depends on whether the image is authentic',
        'It is wrong only if the image is shared publicly',
        'The image is identifiable as a real person and the humiliation and harm are entirely real',
        'It is wrong only where a specific law exists',
      ],
      correct: 2,
    },
    {
      q: 'What is the correct first step if a non-consensual synthetic image of you is circulating?',
      options: [
        'Ask the person who made it to delete it and say nothing else',
        'Wait to see whether it spreads before acting',
        'Delete your own accounts so it cannot be linked to you',
        'Preserve evidence with screenshots, then report to the platform and tell a trusted adult',
      ],
      correct: 3,
    },
  ],
};

export default atM4;
