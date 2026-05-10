import type { Course } from '../../types/course';

const aiKids: Course = {
  id: 'ai-kids',
  title: 'AI for Kids',
  subtitle: 'Discover how AI works, what it can do, and where YOU fit in the future it\'s creating',
  glossary: [],
  modules: [
    {
      id: 'ak-m1',
      title: 'What Is AI?',
      icon: 'zap',
      summary: 'Meet your new digital helper — and find out how it actually thinks (spoiler: not like you do).',
      lessons: [
        {
          id: 'ak1l1',
          title: 'AI Is Like a Very Fast Learner',
          slides: [{
            heading: 'Meet AI — Your New Digital Helper',
            body: 'Imagine a student who has read every book in every library in the world, and can answer questions about any of them in seconds. That\'s a little like what AI can do — except instead of reading books, it learned from billions of websites, articles, and conversations.',
            bullets: [
              'AI stands for Artificial Intelligence — "artificial" means made by humans',
              'AI is not magic — it\'s a program that learned patterns from lots and lots of examples',
              'AI is very good at some things (writing, answering questions, recognising pictures)',
              'AI is not good at everything — it can\'t taste food, feel emotions, or truly understand the world',
            ],
          }],
        },
        {
          id: 'ak1l2',
          title: 'AI Through the Ages',
          slides: [{
            heading: 'A Quick Tour of AI History',
            body: 'People have dreamed about thinking machines for a long time. Let\'s take a quick trip through the highlights — from robots in stories to the AI assistants you can talk to today.',
            bullets: [
              '1950s: Scientists first asked "can machines think?" — and started trying to find out',
              '1980s: AI could beat humans at chess — but only at chess',
              '2012: AI learned to recognise pictures better than humans — a big breakthrough',
              '2017: A new invention called the "transformer" made language AI possible',
              '2022: ChatGPT launched — and AI became something everyone could use',
            ],
          }],
        },
        {
          id: 'ak1l3',
          title: 'How Does AI Actually Learn?',
          slides: [{
            heading: 'Learning Like You — But Very Different',
            body: 'When you learn to ride a bike, you practice, fall down, and get better. AI learns in a similar way — but instead of bikes, it practices with data. Millions and millions of examples.',
            bullets: [
              'Show AI 10,000 pictures of cats with the label "cat" — it learns what a cat looks like',
              'If it guesses wrong, it adjusts — like correcting a mistake in your homework',
              'Do this billions of times and the AI gets very good',
              'AI doesn\'t understand cats the way you do — it just learned the pattern',
            ],
          }],
        },
        {
          id: 'ak1l4',
          title: 'AI, ML, and Deep Learning',
          slides: [{
            heading: 'What\'s the Difference?',
            body: 'You\'ve probably heard these words used interchangeably. But they\'re actually different things — like how "sport" is different from "football" which is different from "penalty kicks."',
            bullets: [
              'AI is the big idea: machines that do smart things',
              'Machine Learning is one way to make AI: teach it from examples',
              'Deep Learning is a powerful type of ML: uses layers of virtual "neurons"',
              'It\'s like: sport → football → penalty kicks. Each one fits inside the next',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'How does AI learn?', options: ['It is programmed with all the answers', 'It learns from millions of examples and corrects its mistakes', 'It reads books on its own', 'Scientists tell it what to do every time'], correct: 1 },
        { q: 'Which of these best describes the relationship between AI, ML, and Deep Learning?', options: ['They are three different names for the same thing', 'ML is inside AI, Deep Learning is inside ML', 'Deep Learning came before AI', 'They are completely unrelated fields'], correct: 1 },
      ],
    },
    {
      id: 'ak-m2',
      title: 'Talking AI',
      icon: 'brain',
      summary: 'ChatGPT, Claude, Gemini — how do they work? And why do they sometimes make things up?',
      lessons: [
        {
          id: 'ak2l1',
          title: 'What Is a Chatbot?',
          slides: [{
            heading: 'Meet the AI That Talks',
            body: 'A chatbot is an AI you can have a conversation with. You type something (or say it), and it replies. But unlike texting a friend, the chatbot doesn\'t actually understand what you\'re saying — it\'s doing something much more clever.',
            bullets: [
              'Chatbots predict what words should come next based on what you wrote',
              'They learned how to do this from billions of conversations and articles',
              'Famous chatbots: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)',
              'They can write stories, explain science, help with homework, and answer questions',
            ],
          }],
        },
        {
          id: 'ak2l2',
          title: 'Why AI Sometimes Makes Things Up',
          slides: [{
            heading: 'When AI Gets It Wrong',
            body: 'AI chatbots are designed to always give you a response. The problem is: sometimes they don\'t know the answer — but instead of saying "I don\'t know," they make up something that sounds right. This is called a "hallucination."',
            bullets: [
              'AI generates the most likely-sounding answer — but likely isn\'t always correct',
              'It\'s like someone confidently giving you directions even when they don\'t know the way',
              'Always double-check important facts from an AI with a reliable source',
              'AI companies are working hard to make this happen less often',
            ],
          }],
        },
        {
          id: 'ak2l3',
          title: 'Prompting: Talk to AI Like a Pro',
          slides: [{
            heading: 'The Better You Ask, the Better the Answer',
            body: 'The words you use when talking to AI really matter. A vague question gets a vague answer. A clear, detailed question gets a much better one. This skill is called "prompting" — and it\'s one of the most useful things you can learn.',
            bullets: [
              'Bad prompt: "Tell me about space" → very general answer',
              'Better prompt: "Explain how black holes form in simple terms for a 12-year-old"',
              'You can tell AI what role to play: "Act as a friendly science teacher and explain..."',
              'You can ask for a specific format: "Give me 5 bullet points" or "Write it as a story"',
            ],
          }],
        },
        {
          id: 'ak2l4',
          title: 'AI Art, Music & Videos',
          slides: [{
            heading: 'AI Gets Creative',
            body: 'AI isn\'t just for text. Today\'s AI can generate stunning images from a description, compose music, and even create video. This raises exciting questions — and tricky ones too.',
            bullets: [
              'Image AI: type "a cat wearing a space suit on the moon" and get a picture',
              'Music AI: generate a song in any style or mood',
              'Video AI: describe a scene and watch it appear (Sora, Runway)',
              'Big question: if AI made it, who owns it? Should it say it was AI-made?',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is an AI "hallucination"?', options: ['When the AI sees images that aren\'t there', 'When the AI makes up a confident-sounding but incorrect answer', 'When the AI refuses to answer a question', 'When the AI generates weird images'], correct: 1 },
        { q: 'What is "prompting" when talking to AI?', options: ['Restarting the AI when it gets stuck', 'Choosing how to ask your question to get a better answer', 'Giving the AI a personality', 'Uploading files to the AI'], correct: 1 },
      ],
    },
    {
      id: 'ak-m3',
      title: 'AI Agents',
      icon: 'layers',
      summary: 'When AI stops just talking and starts actually doing things in the world — what changes?',
      lessons: [
        {
          id: 'ak3l1',
          title: 'What Is an AI Agent?',
          slides: [{
            heading: 'AI That Takes Action',
            body: 'A chatbot answers questions. An AI agent goes further — it can take actions: search the web, write code and run it, send emails, or book a flight. It\'s like the difference between giving someone advice and actually doing the task for them.',
            bullets: [
              'A chatbot: "Here\'s how you could book a flight..."',
              'An AI agent: searches flights, compares prices, and books one for you',
              'Agents use "tools" — like a web browser, calculator, or email app',
              'Examples: AI that does your research, writes code, or manages your calendar',
            ],
          }],
        },
        {
          id: 'ak3l2',
          title: 'The Agent Loop: Think, Try, Learn',
          slides: [{
            heading: 'How Agents Solve Problems Step by Step',
            body: 'AI agents don\'t just guess once — they work through problems in a loop: think about what to do, try an action, see what happens, then think again. This is called the "agent loop."',
            bullets: [
              'Think: "What\'s the best next step to solve this problem?"',
              'Act: try something — search the web, run some code, read a file',
              'Observe: see what the result was',
              'Repeat until the job is done (or until they give up!)',
              'It\'s like how you work through a difficult puzzle — step by step',
            ],
          }],
        },
        {
          id: 'ak3l3',
          title: 'Should AI Make Decisions for Us?',
          slides: [{
            heading: 'The Big Question About Autonomy',
            body: 'When AI agents can take actions in the world, we have to decide: how much should they do on their own? Some decisions are fine to delegate. Others should always have a human in charge.',
            bullets: [
              'Fine to delegate: organising your calendar, finding information, writing first drafts',
              'Be careful: sending important emails, spending money, making medical decisions',
              'Never without a human: decisions that could hurt someone',
              'Good rule of thumb: the bigger the consequence, the more a human should be involved',
              'Your job isn\'t to be replaced by AI — it\'s to be the human who decides wisely',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What makes an AI agent different from a chatbot?', options: ['Agents are smarter than chatbots', 'Agents can take actions in the world, not just answer questions', 'Agents never make mistakes', 'Agents don\'t need the internet'], correct: 1 },
        { q: 'Which decision should ALWAYS involve a human?', options: ['Picking a playlist', 'Organising a to-do list', 'Decisions that could hurt someone', 'Setting a morning alarm'], correct: 2 },
      ],
    },
    {
      id: 'ak-m4',
      title: 'AI & Your Future',
      icon: 'shield',
      summary: 'What AI can and can\'t do, why fairness matters, and the amazing careers waiting for the people who understand it.',
      lessons: [
        {
          id: 'ak4l1',
          title: 'AI That Sees and Hears',
          slides: [{
            heading: 'Beyond Words',
            body: 'AI isn\'t just about text and chat. Modern AI can look at a photo and describe what\'s in it, listen to music and identify the artist, or watch a video and summarise what happened. This is called multimodal AI.',
            bullets: [
              'Vision AI: recognises faces, reads text in images, spots objects in photos',
              'Voice AI: turns speech into text, generates speech from text',
              'Medical AI: analyses X-rays and scans to help doctors spot problems',
              'These AIs are already in your life: face unlock, voice assistants, photo search',
            ],
          }],
        },
        {
          id: 'ak4l2',
          title: 'Being Fair with AI',
          slides: [{
            heading: 'AI Can Be Biased — Here\'s Why',
            body: 'AI learns from data created by humans. And humans aren\'t always fair. So sometimes AI picks up unfair patterns from the data and repeats them. This is called bias — and fixing it is one of the most important challenges in AI.',
            bullets: [
              'If most photos of doctors in training data show men, AI may assume doctors are men',
              'This can cause real harm: unfair job rejections, wrong medical diagnoses',
              'Fixing it requires diverse data, careful testing, and human review',
              'People who care about fairness AND understand AI are incredibly valuable',
            ],
          }],
        },
        {
          id: 'ak4l3',
          title: 'Careers with AI — What Will You Build?',
          slides: [{
            heading: 'The Jobs of the Future Need You',
            body: 'AI is creating whole new careers — and changing existing ones. The people who will shape the future of AI aren\'t just coders. They\'re also artists, ethicists, teachers, doctors, storytellers, and problem-solvers.',
            bullets: [
              'AI Engineer: builds the systems and models that power AI products',
              'AI Ethicist: makes sure AI is used fairly and safely',
              'Data Scientist: finds patterns in data that teach AI what to do',
              'AI Product Manager: decides what AI products to build and why',
              'AI in Every Field: medicine, music, law, education, gaming — AI is in all of them',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What is "bias" in AI?', options: ['When AI gets tired from too much use', 'When AI picks up and repeats unfair patterns from its training data', 'When AI prefers certain users over others intentionally', 'When AI\'s code has programming errors'], correct: 1 },
        { q: 'Which of these is NOT an AI-related career?', options: ['AI Engineer', 'AI Ethicist', 'Data Scientist', 'Mechanical plumber (non-AI)'], correct: 3 },
      ],
    },
  ],
};

export default aiKids;
