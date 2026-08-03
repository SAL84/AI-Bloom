import { SVG_ROBOT_LEARNER, SVG_CHATBOT, SVG_AGENT_LOOP, SVG_TIMELINE, SVG_HOW_AI_LEARNS, SVG_AI_ML_DL, SVG_HALLUCINATION, SVG_PROMPTING, SVG_AI_CREATIVE, SVG_STEP_LOOP } from '../svgs/kids-art-a';
import { SVG_CAREERS, SVG_CYBERSAFETY, SVG_DEEPFAKE, SVG_AI_DECISIONS, SVG_AI_SENSES, SVG_FAIR_AI, SVG_TRICK, SVG_SAFETY_RULES, SVG_GENAI_LLM } from '../svgs/kids-art-b';
import type { Course } from '../../types/course';
import { KIDS_GLOSSARY } from '../glossary';

// ── Inline SVG diagrams for kids ─────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────

const aiKids: Course = {
  id: 'ai-kids',
  title: 'AI for Kids',
  subtitle: 'Discover how AI works, what it can do, and where YOU fit in the future it\'s creating',
  glossary: KIDS_GLOSSARY,
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
          inlineSvg: SVG_ROBOT_LEARNER,
          inlineSvgId: 'ak1l1',
          slides: [{
            heading: 'Meet AI — Your New Digital Helper',
            body: 'Imagine a student who has read every book in every library on Earth. Ask about any of them, and you get an answer in seconds. That\'s a little like AI. But AI didn\'t read books. It learned from billions of websites, articles, and chats.',
            bullets: [
              'AI stands for Artificial Intelligence — "artificial" means made by humans',
              'AI is not magic — it\'s a program that learned patterns from lots and lots of examples',
              'AI is very good at some things (writing, answering questions, recognising pictures)',
              'AI is not good at everything — it can\'t taste food, feel emotions, or truly understand the world',
            ],
          }, {
            heading: 'Training vs Using: The Bike Trick',
            body: 'Here\'s a secret about AI: there are two totally different moments in its life. First comes training — that\'s when the AI is learning, like the wobbly weeks when you were learning to ride a bike. It takes ages, uses giant computers, and involves millions of mistakes. Then comes using the AI — like riding your bike once you\'ve got it. Fast, smooth, done in seconds. When you chat with an AI, you\'re talking to one that already finished its training. It\'s not learning from you in that moment — it\'s riding the bike it already learned to ride.',
            bullets: [
              'Training = the learning phase: slow, expensive, millions of examples',
              'Using = the riding phase: quick answers from what it already learned',
              'You practised riding a bike for weeks — but now you just hop on and go',
              'The AI you chat with finished its "practice" long before you said hello',
            ],
          }, {
            heading: 'AI Is Hiding in Your Day',
            body: 'You probably used AI five times today without noticing. Did your phone unlock by looking at a face? AI. Did a video app pick the exact next video you wanted to watch? AI. Did autocorrect fix "teh" into "the"? AI again. Try this at home: for one whole day, be an AI detective with a grown-up. Every time a machine seems to guess, suggest, recognise, or predict something, write it down. Most families spot ten or more before dinner. Once you start looking, you\'ll see AI everywhere — quietly working in the background of your day.',
            bullets: [
              'Face unlock, autocorrect, video suggestions, map directions — all AI',
              'AI detective challenge: count every "machine guess" you spot in one day',
              'Clue words to listen for: suggests, recognises, predicts, recommends',
              'Compare notes with your family — who spotted the sneakiest one?',
            ],
          }],
        },
        {
          id: 'ak1l2',
          title: 'AI Through the Ages',
          inlineSvg: SVG_TIMELINE,
          inlineSvgId: 'ak1l2',
          slides: [{
            heading: 'A Quick Tour of AI History',
            body: 'People have dreamed about thinking machines for a long time. Let\'s take a quick trip through the highlights — from robots in stories to the AI assistants you can talk to today.',
            bullets: [
              '1950s: Scientists started wondering — could a machine ever be smart like a person? They got curious and went looking for the answer',
              '1997: a computer beat the world chess champion — but it could only play chess',
              '2012: AI got dramatically better at recognising pictures — a big breakthrough',
              '2017: A new invention called the "transformer" made language AI possible',
              '2022: ChatGPT launched — and AI became something everyone could use',
            ],
          }, {
            heading: 'Why Did AI Suddenly Get So Good?',
            body: 'For decades, AI moved slowly. Then — boom! — in just a few years it went from clumsy to amazing. Why? Two things happened at once. First, computers got much, much faster — like swapping a tricycle for a rocket. Second, the internet filled up with examples for AI to learn from: photos, stories, questions, answers. And remember, AI learns from examples — so more examples plus faster computers meant much smarter AI. It\'s a bit like a chef: give them a bigger kitchen and way more ingredients, and suddenly the meals get really, really good.',
            bullets: [
              'Faster computers let AI practise billions of times instead of thousands',
              'The internet gave AI mountains of examples to learn from',
              'The big lesson of AI history: more examples + more computing = smarter AI',
              'Nobody knows what the next breakthrough will be — maybe you\'ll help make it!',
            ],
          }],
        },
        {
          id: 'ak1l3',
          title: 'How Does AI Actually Learn?',
          inlineSvg: SVG_HOW_AI_LEARNS,
          inlineSvgId: 'ak1l3',
          slides: [{
            heading: 'Learning Like You — But Very Different',
            body: 'When you learn to ride a bike, you practice, fall down, and get better. AI learns in a similar way — but instead of bikes, it practices with data. Millions and millions of examples.',
            bullets: [
              'Show AI 10,000 pictures of cats with the label "cat" — it learns what a cat looks like',
              'If it guesses wrong, it adjusts — like correcting a mistake in your homework',
              'Do this billions of times and the AI gets very good',
              'AI doesn\'t understand cats the way you do — it just learned the pattern',
            ],
          }, {
            heading: 'Why SO Many Examples?',
            body: 'You can learn what a cat is from meeting just one cat. AI can\'t. Why not? Because you already know a LOT about the world — you know animals have fur, that a kitten is a small cat, that a drawing of a cat still counts. AI starts with nothing. Zero. So it needs to see cats from every angle: sleepy cats, wet cats, cartoon cats, cats hiding in boxes. Miss a kind, and the AI gets confused — show it only fluffy cats and it might decide a hairless cat isn\'t a cat at all! That\'s why more examples, and more different examples, make AI both smarter and fairer.',
            bullets: [
              'You learn fast because you already understand the world — AI starts from zero',
              'It needs cats of every shape, colour, pose, and costume',
              'Weird examples matter — a cat in a party hat is still a cat!',
              'Missing examples = confused AI (remember this for the fairness lesson later)',
            ],
          }, {
            heading: 'Be the Teacher: Labels Are Everything',
            body: 'Here\'s the part most people miss: AI doesn\'t just need pictures — it needs pictures with labels. A photo of a cat teaches nothing until someone tags it "cat." Real people spend whole workdays labelling data: this is a dog, this is a stop sign, this message is friendly. If the labels are wrong, the AI learns the wrong lesson — label ten dogs as "cat" and it will happily call dogs cats forever. Good teaching in, good AI out. Sloppy teaching in, silly AI out. Want to feel what being the teacher is like?',
            bullets: [
              'A label is the answer key: picture + "cat" = one lesson learned',
              'Wrong labels teach wrong lessons — and the AI never suspects a thing',
              'Humans check and fix labels to keep the AI on track',
              'Try it: play "Label It" in AI Games (in the catalog) — you\'ll be the AI trainer',
            ],
          }],
        },
        {
          id: 'ak1l4',
          title: 'AI, ML, and Deep Learning',
          inlineSvg: SVG_AI_ML_DL,
          inlineSvgId: 'ak1l4',
          slides: [{
            heading: 'What\'s the Difference?',
            body: 'You\'ve probably heard these three words used to mean the same thing. They\'re not the same. Think of "sport," then "football," then "penalty kicks." Each one fits inside the one before it.',
            bullets: [
              'AI is the big idea: machines that do smart things',
              'Machine Learning is one way to make AI: teach it from examples',
              'Deep Learning is a powerful type of ML: uses layers of virtual "neurons"',
              'It\'s like: sport → football → penalty kicks. Each one fits inside the next',
            ],
          }, {
            heading: 'Spot Them in the Wild',
            body: 'Let\'s make those three circles stick with real examples. A calculator following fixed rules a human wrote? That\'s plain programming — not really AI at all. A game character that seems clever because of clever rules? Simple AI. Your video app noticing you love animal clips and suggesting more? That\'s machine learning — it learned from your taps; nobody programmed "this kid likes penguins." And the chatbot that writes you a poem? Deep learning — layers of virtual neurons working together. Next time someone says "AI," you can ask the expert question: "Which kind?"',
            bullets: [
              'Fixed rules a human typed in = programming, not learning',
              'Learning from your taps and clicks = machine learning',
              'Chatbots and image generators = deep learning, the inner circle',
              'Family quiz: pick a gadget at home and guess which circle it lives in',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'How does AI learn?', options: ['It is programmed with all the answers', 'It learns from millions of examples and corrects its mistakes', 'It reads books on its own', 'Scientists tell it what to do every time'], correct: 1 },
        { q: 'AI has been around for a long time. What made it suddenly so much better in recent years?', options: ['Computers got much faster and AI could learn from way more examples', 'Scientists finally wrote down all the answers', 'The internet was invented', 'Robots started building other robots'], correct: 0 },
        { q: 'Which of these best describes the relationship between AI, ML, and Deep Learning?', options: ['They are three different names for the same thing', 'ML is inside AI, Deep Learning is inside ML', 'Deep Learning came before AI', 'They are completely unrelated fields'], correct: 1 },
      ],
    },
    {
      id: 'ak-m2',
      title: 'Chat with AI',
      icon: 'brain',
      summary: 'Meet the AI you can talk to, peek behind the scenes at the LLMs powering it, and learn how to spot when it\'s wrong.',
      lessons: [
        {
          id: 'ak2l1',
          title: 'What Is a Chatbot?',
          inlineSvg: SVG_CHATBOT,
          inlineSvgId: 'ak2l1',
          slides: [{
            heading: 'Meet the AI That Talks',
            body: 'A chatbot is an AI you can have a conversation with. You type something (or say it), and it replies. But unlike texting a friend, the chatbot doesn\'t actually understand what you\'re saying — it\'s doing something much more clever.',
            bullets: [
              'Chatbots predict what words should come next based on what you wrote',
              'They learned how to do this from billions of conversations and articles',
              'Famous chatbots: ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google)',
              'They can write stories, explain science, help with homework, and answer questions',
            ],
          }, {
            heading: 'Play the Next-Word Game',
            body: 'Want to think like a chatbot for a minute? Play this with someone: one of you says the start of a sentence — "The dog chased the..." — and the other guesses the next word. "Ball!" "Cat!" "Postman!" You just did exactly what a chatbot does. It looks at all the words so far and predicts the most likely next word. Then it does it again for the word after that, and again, thousands of times, until a whole answer appears. The amazing part: just by predicting the next word really, really well, AI ends up writing stories, explaining science, and cracking jokes.',
            bullets: [
              'Chatbots build answers one predicted word at a time',
              'Your brain plays this game too — that\'s how you finish a friend\'s sentence',
              'Try it at dinner: start a sentence and let everyone guess the next word',
              'The AI is just much faster — and has read more than any human ever could',
            ],
          }],
        },
        {
          id: 'ak2l0',
          title: 'What\'s Behind a Chatbot? (Meet the LLM)',
          inlineSvg: SVG_GENAI_LLM,
          inlineSvgId: 'ak2l0',
          slides: [{
            heading: 'AI That Generates — Not Just Looks Things Up',
            body: 'You just met a chatbot. Now let\'s open the hood. Every chatbot you\'ve heard of has a "brain" inside called a Large Language Model — or LLM for short. An LLM is a kind of AI that has read billions of texts and learned how words fit together. LLMs are the engine of what we call Generative AI: AI that doesn\'t just look things up — it generates brand-new stuff every time.',
            bullets: [
              'Large Language Model (LLM) — an AI trained on billions of texts that learned how language works',
              'LLMs work by predicting the next word, then the next, then the next — over and over at enormous scale',
              'The "large" in LLM means the model saw billions of examples while it was learning',
              'Generative AI (GenAI) is the bigger family — AI that can generate text, images, music, code or video',
              'Unlike a search engine (which finds existing pages), GenAI makes something new each time',
            ],
          }, {
            heading: 'Autocomplete\'s Giant Cousin',
            body: 'You\'ve already met an LLM\'s little cousin: the autocomplete on a phone keyboard. Type "see you..." and it suggests "later." Cute — but it only looks at the last few words. An LLM is like autocomplete after a thousand years of homework. It pays attention to your whole question, every single word, and it learned from so much text that it picked up grammar, facts, jokes, and different styles of writing along the way. That\'s why the same LLM can write a pirate story, explain volcanoes, or help plan a lemonade stand. Same trick as autocomplete — just at a mind-boggling scale.',
            bullets: [
              'Phone autocomplete: guesses from the last few words only',
              'LLM: pays attention to everything you wrote, all at once',
              'Scale changes everything — a puddle and an ocean are both water, but only one has whales',
              'One model, many talents: stories, facts, code, jokes',
            ],
          }],
        },
        {
          id: 'ak2l2',
          title: 'Why AI Sometimes Makes Things Up',
          inlineSvg: SVG_HALLUCINATION,
          inlineSvgId: 'ak2l2',
          slides: [{
            heading: 'When AI Gets It Wrong',
            body: 'AI chatbots are designed to always give you a response. The problem is: sometimes they don\'t know the answer — but instead of saying "I don\'t know," they make up something that sounds right. This is called a "hallucination."',
            bullets: [
              'AI generates the most likely-sounding answer — but likely isn\'t always correct',
              'It\'s like someone confidently giving you directions even when they don\'t know the way',
              'Always double-check important facts from an AI with a reliable source',
              'AI companies are working hard to make this happen less often',
            ],
          }, {
            heading: 'Why Does It Sound So Sure?',
            body: 'Here\'s the tricky part: AI sounds exactly as confident when it\'s wrong as when it\'s right. Why? Because it isn\'t checking facts in a big book of truth — it\'s producing the most likely-sounding words. And "sounding sure" is part of the pattern it learned, because most writing it studied sounds sure! It\'s like a friend who answers every quiz question in a big, confident voice — even the ones they\'re totally guessing. The confidence tells you nothing about whether the answer is right. So never judge an AI answer by its tone. Judge it by checking.',
            bullets: [
              'AI has no "I\'m not sure" alarm bell inside — confidence is just part of the pattern',
              'Right answers and wrong answers come out sounding exactly the same',
              'A confident voice is not evidence — for AI or for people!',
            ],
          }, {
            heading: 'Become a Fact-Checking Hero',
            body: 'So how do you catch a hallucination? With a two-minute check. First, ask yourself: does this actually matter? If AI names the wrong colour for a dragon in your story, no problem. If it\'s a fact for homework, a health question, or something you\'ll tell friends — check it. Look for the same fact in a place that\'s careful about truth: a school book, an encyclopedia, a trusted website, or just ask an adult. One thing that does NOT work: asking the AI "Are you sure?" It will often just agree with you — even when it was right the first time. That is why you check a real source instead of asking the AI to mark its own homework. Fact-checking is a superpower, and you can start today.',
            bullets: [
              'Small stuff for fun? Relax. Facts for school or health? Always check',
              'Compare with a source that\'s careful about truth — books, encyclopedias, trusted sites',
              'Ask the AI to double-check itself — "are you sure?" works surprisingly often',
              'The best AI users aren\'t the fastest typers — they\'re the best checkers',
            ],
          }],
        },
        {
          id: 'ak2l3',
          title: 'Prompting: Talk to AI Like a Pro',
          inlineSvg: SVG_PROMPTING,
          inlineSvgId: 'ak2l3',
          slides: [{
            heading: 'The Better You Ask, the Better the Answer',
            body: 'The words you use when talking to AI really matter. A vague question gets a vague answer. A clear, detailed question gets a much better one. This skill is called "prompting" — and it\'s one of the most useful things you can learn.',
            bullets: [
              'Bad prompt: "Tell me about space" → very general answer',
              'Better prompt: "Explain how black holes form in simple terms for a 12-year-old"',
              'You can tell AI what role to play: "Act as a friendly science teacher and explain..."',
              'You can ask for a specific format: "Give me 5 bullet points" or "Write it as a story"',
            ],
          }, {
            heading: 'Prompt Makeover: Before and After',
            body: 'Let\'s fix some real prompts together. Before: "help with homework." After: "I\'m 11 and learning fractions. Can you explain how to add 1/2 and 1/3, step by step, then give me two practice problems?" Feel the difference? The first one makes the AI guess everything. The second tells it who you are, what you need, and what shape the answer should take. One more. Before: "write a story." After: "Write a funny 10-sentence story about a hamster who becomes a school principal, for me to read to my little sister." Same AI, wildly better answer — because the prompt did the steering.',
            bullets: [
              'Weak prompts make the AI guess; strong prompts do the steering',
              'Say who it\'s for: "I\'m 11" or "for my little sister" changes everything',
              'Say the shape: how long, what style, how many steps',
            ],
          }, {
            heading: 'Your Prompt Recipe Card',
            body: 'Good prompts follow a simple recipe you can reuse forever. Ingredient one: WHO — who are you, or who should the AI pretend to be? Ingredient two: WHAT — exactly what do you want? Ingredient three: SHAPE — a list, a story, three steps, one paragraph? Ingredient four: LEVEL — simple words, or expert mode? You don\'t need all four every time, but the more you add, the better the answer gets. And here\'s a pro move: if the first answer isn\'t right, don\'t start over — reply with "shorter please" or "explain that middle part again." Prompting is a conversation, not a single shot.',
            bullets: [
              'WHO + WHAT + SHAPE + LEVEL = the four-ingredient prompt recipe',
              'Follow-up messages count — polish the answer like a draft',
              'Practise on silly topics: "explain why socks disappear, as a detective report"',
              'Try it: play "Prompt Master" in AI Games (in the catalog) — level up your prompting powers',
            ],
          }],
        },
        {
          id: 'ak2l4',
          title: 'AI Art, Music & Videos',
          inlineSvg: SVG_AI_CREATIVE,
          inlineSvgId: 'ak2l4',
          slides: [{
            heading: 'AI Gets Creative',
            body: 'AI isn\'t just for words. Tell it what you want and it can paint you a picture. It can write a song. It can even make a video. That\'s pretty cool. It also brings up some tricky questions.',
            bullets: [
              'Image AI: type "a cat wearing a space suit on the moon" and get a picture',
              'Music AI: generate a song in any style or mood',
              'Video AI: describe a scene and watch it appear (Sora, Runway)',
              'Big question: if AI made it, who owns it? Should it say it was AI-made?',
            ],
          }, {
            heading: 'Where Do AI\'s Ideas Come From?',
            body: 'When AI paints "a cat in a space suit," it isn\'t copying one picture from somewhere. In training, it studied millions of images and learned patterns: how fur looks, how helmets shine, how moonlight falls. Then it mixes those patterns into something new — like a chef who tasted a thousand meals and then made up a fresh one. But here\'s the tricky bit. Lots of those training images came from real artists. Most were never asked, and never paid. Some feel their style was taken. It\'s a real debate, with kind people on both sides — well worth talking about together.',
            bullets: [
              'AI art = learned patterns remixed, not a copy-paste of one image',
              'The patterns came from millions of pictures made by real artists',
              'Many artists were never asked — that\'s why some feel hurt or worried',
              'Good dinner question: is learning from art the same as copying it?',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What does LLM stand for?', options: ['Logic Learning Machine', 'Large Language Model', 'Layered Logic Module', 'Language Learning Mechanism'], correct: 1 },
        { q: 'What is an AI "hallucination"?', options: ['When the AI sees images that aren\'t there', 'When the AI makes up a confident-sounding but incorrect answer', 'When the AI refuses to answer a question', 'When the AI generates weird images'], correct: 1 },
        { q: 'What is "prompting" when talking to AI?', options: ['Restarting the AI when it gets stuck', 'Choosing how to ask your question to get a better answer', 'Giving the AI a personality', 'Uploading files to the AI'], correct: 1 },
        { q: 'When AI makes a picture or a song, where do the ideas come from?', options: ['It copies one picture from the internet', 'It imagines things the way people do', 'It mixes patterns it learned from millions of examples into something new', 'An artist secretly draws it'], correct: 2 },
      ],
    },
    {
      id: 'ak-m3',
      title: 'Agentic AI',
      icon: 'layers',
      summary: 'When AI stops just chatting and starts taking real-world actions — searching, coding, booking, deciding — what changes?',
      lessons: [
        {
          id: 'ak3l1',
          title: 'What Is an AI Agent?',
          inlineSvg: SVG_AGENT_LOOP,
          inlineSvgId: 'ak3l1',
          slides: [{
            heading: 'AI That Takes Action',
            body: 'A chatbot answers questions. An AI agent goes further — it can take actions: search the web, write code and run it, send emails, or book a flight. It\'s like the difference between giving someone advice and actually doing the task for them.',
            bullets: [
              'A chatbot: "Here\'s how you could book a flight..."',
              'An AI agent: searches flights, compares prices, and books one for you',
              'Agents use "tools" — like a web browser, calculator, or email app',
              'Examples: AI that does your research, writes code, or manages your calendar',
            ],
          }, {
            heading: 'An Agent\'s Toolbox',
            body: 'A person gets smarter with tools — a map, a phone, a calculator. Agents are the same. On its own, an AI can only talk. Give it tools, and it can act. A web search tool lets it look up fresh information. A calculator tool means no more maths slips. A calendar tool lets it add events. A code tool lets it write a little program and actually run it. Before each step, the agent picks the right tool — the way you\'d pick scissors instead of a spoon for cutting paper. And here\'s the important bit: an agent can only use the tools it\'s been given. No tool, no action. That\'s one way humans keep agents on a safe leash.',
            bullets: [
              'Tools turn a talking AI into a doing AI',
              'Common tools: web search, calculator, calendar, files, running code',
              'The agent picks the right tool for each step of the job',
              'No tool, no action — humans decide which tools an agent gets',
            ],
          }],
        },
        {
          id: 'ak3l2',
          title: 'The Agent Loop: Think, Try, Learn',
          inlineSvg: SVG_STEP_LOOP,
          inlineSvgId: 'ak3l2',
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
          }, {
            heading: 'The Birthday Party Agent (That\'s You!)',
            body: 'Imagine you\'re planning your best friend\'s surprise birthday party. Watch yourself become an agent! Think: "What do I need? Guests, cake, a place, games." Do: message the guests. Check: three said yes, two haven\'t replied — better remind them tomorrow. Think again: "Cake next. Chocolate or vanilla?" Do: secretly ask their sister. Check: chocolate it is! You didn\'t plan every step at the start — you did one thing, looked at what happened, and let that decide your next move. That think → do → check rhythm is exactly the agent loop. AI agents tackle a research task or a coding job the very same way.',
            bullets: [
              'Think: break the big goal into the next small step',
              'Do: take one action — send the message, ask the question',
              'Check: did it work? Let the answer shape your next move',
              'You already run the agent loop every time you plan something big',
            ],
          }],
        },
        {
          id: 'ak3l3',
          title: 'Should AI Make Decisions for Us?',
          inlineSvg: SVG_AI_DECISIONS,
          inlineSvgId: 'ak3l3',
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
          }, {
            heading: 'Why a Human Stays the Boss',
            body: 'Imagine handing an agent your pocket money and saying "buy me the best trainers." Efficient? Maybe. But what if it spends everything on trainers you hate? Or picture a quiz-app agent that answers for you — you\'d get the points but learn nothing. Now make the stakes bigger: an agent choosing who makes the team, or what medicine someone takes. Mistakes there don\'t just waste money — they hurt people. So the rule is simple: agents can do the legwork, but a human makes the final call on anything big. The agent gathers, compares, and suggests. You decide. Being the decider is a job that should never be handed over.',
            bullets: [
              'Let agents fetch, sort, draft, and suggest — the boring legwork',
              'Keep the final "yes" for humans on money, feelings, health, and fairness',
              'A good agent shows its work so you can check before saying yes',
              'Practice now: when AI helps you, always ask "do I agree with this?"',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'What makes an AI agent different from a chatbot?', options: ['Agents are smarter than chatbots', 'Agents can take actions in the world, not just answer questions', 'Agents never make mistakes', 'Agents don\'t need the internet'], correct: 1 },
        { q: 'An agent follows a loop when it works. What are the three steps?', options: ['Guess, hope, repeat', 'Think, try, look at what happened', 'Download, install, restart', 'Ask, wait, forget'], correct: 1 },
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
          inlineSvg: SVG_AI_SENSES,
          inlineSvgId: 'ak4l1',
          slides: [{
            heading: 'Beyond Words',
            body: 'AI isn\'t just about text and chat. Modern AI can look at a photo and tell you what\'s in it. It can hear a song and name the artist. It can watch a video and sum up what happened. This is called multimodal AI.',
            bullets: [
              'Vision AI: recognises faces, reads text in images, spots objects in photos',
              'Voice AI: turns speech into text, generates speech from text',
              'Medical AI: analyses X-rays and scans to help doctors spot problems',
              'These AIs are already in your life: face unlock, voice assistants, photo search',
            ],
          }, {
            heading: 'One Brain, Many Senses',
            body: 'Multimodal is a fancy word with a simple meaning: many modes — words, pictures, and sounds, all understood by one AI. Try these party tricks. Show a multimodal AI a photo of your messy desk and ask for a funny poem about it — it can do that. Hum a tune to a music app and it names the song. Point a camera at a plant and ask "what is this, and is it safe for my cat?" Snap your maths homework and ask it to check your working. The magic is the mixing: it can look at a picture AND talk about it, hear a question AND answer in words. Just like you use eyes and ears together, multimodal AI blends senses into one understanding.',
            bullets: [
              '"Multimodal" = one AI that handles words, images, and sound together',
              'Photo in, poem out — hummed tune in, song name out',
              'The clever part is mixing the senses, not just having them',
              'Family experiment: photograph something odd and ask an AI to describe it',
            ],
          }],
        },
        {
          id: 'ak4l2',
          title: 'Being Fair with AI',
          inlineSvg: SVG_FAIR_AI,
          inlineSvgId: 'ak4l2',
          slides: [{
            heading: 'AI Can Be Biased — Here\'s Why',
            body: 'AI learns from data created by humans. And humans aren\'t always fair. So sometimes AI picks up unfair patterns from the data and repeats them. This is called bias — and fixing it is one of the most important challenges in AI.',
            bullets: [
              'If most photos of doctors in training data show men, AI may assume doctors are men',
              'This can cause real harm: unfair job rejections, wrong medical diagnoses',
              'Fixing it requires diverse data, careful testing, and human review',
              'People who care about fairness AND understand AI are incredibly valuable',
            ],
          }, {
            heading: 'The Golden Retriever Judge',
            body: 'Here\'s a story that shows how unfairness sneaks in. Imagine a robot judge for a dog show, trained to spot dogs — but every single training photo was a golden retriever. Now a chihuahua trots in. "Not a dog," says the robot. A poodle? "Not a dog." The robot isn\'t mean. Nobody typed "only golden retrievers count." The unfairness snuck in through what was missing from the examples. That\'s how real AI bias usually happens — not because of a villain, but because of lopsided data. And it matters when the "dog show" is really loan approvals, face recognition, or medical scans. The fix starts with one question: who\'s missing from the examples?',
            bullets: [
              'Bias usually sneaks in through missing examples, not evil intentions',
              'The AI can\'t be fair to dogs — or people — it never saw',
              'Great question to ask about any AI: "who was missing from its training?"',
              'Diverse examples + careful testing + human review = fairer AI',
            ],
          }],
        },
        {
          id: 'ak4l3',
          title: 'Careers with AI — What Will You Build?',
          inlineSvg: SVG_CAREERS,
          inlineSvgId: 'ak4l3',
          slides: [{
            heading: 'The Jobs of the Future Need You',
            body: 'AI is creating whole new careers — and changing existing ones. The people who will shape the future of AI aren\'t just coders. Some build the AI, and some connect it to the people who actually use it. Both kinds of jobs matter.',
            bullets: [
              'AI Engineer: builds the systems and models that power AI products',
              'AI Ethicist: makes sure AI is used fairly and safely',
              'Data Scientist: finds patterns in data that teach AI what to do',
              'AI Product Manager: decides what AI products to build and why',
              'Forward Deployed Engineer: goes into companies and makes AI actually work for the teams there',
              'Chief Agent Officer: a brand-new leadership job — runs the AI agents that help a whole company',
              'AI Sales / PreSales Engineer: shows companies how AI tools can help them and helps them get started',
              'AI in Every Field: medicine, music, law, education, gaming — AI is in all of them',
            ],
          }, {
            heading: 'Skills That Never Go Out of Style',
            body: 'Here\'s a secret about the future: nobody knows exactly which jobs will exist when you grow up. Some don\'t even have names yet! But we do know which skills will matter, because they\'re the ones AI is worst at. Curiosity — asking the question nobody thought to ask. Checking — noticing when an answer smells wrong (you\'ve been training that skill this whole course!). Kindness — understanding how people feel and what they really need. Creativity — wanting to make something new just because. Machines get better at answers every year. The humans who matter most will be the ones with the best questions, the sharpest checks, and the biggest hearts.',
            bullets: [
              'Curiosity: great questions beat quick answers',
              'Checking: you practise this every time you verify an AI answer',
              'Kindness and teamwork: understanding people is a human superpower',
              'You don\'t have to pick a job today — just keep these skills growing',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'An AI can see a photo and describe it out loud. What is this ability called?', options: ['Multimodal AI — working with images, sound, and words together', 'Deep dreaming', 'Photo mode', 'Robot vision 2.0'], correct: 0 },
        { q: 'What is "bias" in AI?', options: ['When AI gets tired from too much use', 'When AI picks up and repeats unfair patterns from its training data', 'When AI prefers certain users over others intentionally', 'When AI\'s code has programming errors'], correct: 1 },
        { q: 'What does an AI Ethicist do?', options: ['Builds robots', 'Makes sure AI treats people fairly and safely', 'Sells AI to companies', 'Fixes broken computers'], correct: 1 },
      ],
    },
    {
      id: 'ak-m5',
      title: 'Staying Safe with AI',
      icon: 'shield-alert',
      summary: 'AI is powerful — and that means knowing how to use it safely matters. Learn to protect yourself online.',
      lessons: [
        {
          id: 'ak5l1',
          title: 'Your Personal Info Is Precious',
          inlineSvg: SVG_CYBERSAFETY,
          inlineSvgId: 'ak5l1',
          slides: [{
            heading: 'What Should You Never Tell an AI?',
            body: 'Chatbots feel like friendly conversations — but they\'re software. The company behind the AI may store what you type. Some things should stay private, no matter who (or what) is asking.',
            bullets: [
              'Never share your full name, home address, school name, or phone number with AI',
              'Never share passwords — not even with "helpful" AI assistants',
              'Treat an AI chatbot like a public notice board, not a private diary',
              'If a website asks for personal info before letting you use AI, ask a trusted adult first',
              'Your data is valuable — protect it like you\'d protect your lunch money',
            ],
          }, {
            heading: 'Postcards, Not Diaries',
            body: 'Where does your chat go when you press send? It travels to computers owned by the AI company, and it can be stored there. Some companies even use conversations to help train future AI. So here\'s a picture to keep in your head: a diary is private — locked, just for you. A postcard travels through many hands, and anyone along the way might read it. Treat every AI chat like a postcard. Writing about your favourite dinosaur? Perfect postcard material. Your address, your secrets, something embarrassing about a friend? That belongs in the diary — which means: not in the chat. Quick test before typing: "would I be okay with a stranger reading this?" If not, don\'t send it.',
            bullets: [
              'What you type can be stored on the company\'s computers',
              'Postcard rule: only type what a stranger could safely read',
              'Secrets, addresses, and friends\' private stuff stay in the "diary"',
              'Not sure? Ask a grown-up before you send',
            ],
          }],
        },
        {
          id: 'ak5l2',
          title: 'Deepfakes: When Seeing Isn\'t Believing',
          inlineSvg: SVG_DEEPFAKE,
          inlineSvgId: 'ak5l2',
          slides: [{
            heading: 'AI Can Create Things That Never Happened',
            body: 'AI can now generate photos, videos, and audio of real people saying or doing things they never said or did. These are called deepfakes — and they\'re getting harder to spot.',
            bullets: [
              'A deepfake video might show a famous person saying something they never said',
              'Deepfake photos can create fake "evidence" of events that didn\'t happen',
              'Signs of a deepfake: blurry edges, weird eyes, unnatural shadows, voice that sounds slightly off',
              'Rule of thumb: if something seems shocking or unbelievable — it might be fake',
              'Always check the original source before sharing anything that could be a deepfake',
            ],
          }, {
            heading: 'Your Double-Check Move',
            body: 'You see a shocking video: a famous footballer saying something awful, or a "news clip" of a disaster. Your thumb hovers over Share. Stop! Here\'s your double-check move — it takes two minutes. Step one: notice the feeling. Deepfakes are built to make you gasp, laugh, or rage instantly, so big feelings are your alarm bell. Step two: grab a grown-up and watch it together. Step three: search for the story on a real news site — if it truly happened, careful reporters will have it too. Step four: if you can\'t confirm it, don\'t share it. Passing on a fake — even by accident — spreads the trick to everyone who trusts you.',
            bullets: [
              'Shocking + urgent feelings = your alarm bell for fakes',
              'Check with a grown-up and a trusted news source before believing',
              'Can\'t confirm it? Don\'t share it — not even "just in case"',
              'Every un-shared fake is a win for the truth team',
            ],
          }],
        },
        {
          id: 'ak5l3',
          title: 'AI Trying to Trick You',
          inlineSvg: SVG_TRICK,
          inlineSvgId: 'ak5l3',
          slides: [{
            heading: 'Scams, Manipulation, and AI-Powered Tricks',
            body: 'Some people use AI to trick you. They write fake messages. They fake voices. They fake a rush, so you act before you think. These tricks have a name: social engineering. And AI makes them much easier to pull off.',
            bullets: [
              'Scam messages: AI can write very convincing fake emails pretending to be your bank or school',
              'Voice cloning: AI can clone a voice — a "phone call from mum" might not be mum',
              'Fake urgency: "You must act NOW!" is almost always a manipulation tactic',
              'If something feels off, it probably is — slow down and check',
              'When in doubt, contact the real person or organisation directly (don\'t use the number in the message)',
            ],
          }, {
            heading: 'The Family Code Word Trick',
            body: 'Voice-cloning scams have one simple enemy: a family code word. Sit down together and pick a secret word — something silly nobody would ever guess, like "pickle-rocket." Here\'s the rule. Does someone call or text asking for money, passwords, or fast help? Ask for the code word. Real mum knows it. A fake voice doesn\'t. There\'s one more golden move for any odd message. Close it. Then call the real person on a number you already have — never the one in the message. Scammers can fake a voice. They can\'t fake your family\'s inside joke.',
            bullets: [
              'Pick a silly family code word tonight — and keep it off the internet',
              'Panic + a request for money or secrets = ask for the code word',
              'Always call back on the number you already have, never the one given',
              'Try it: play "Spot the Bot" in AI Games (in the catalog) — can you catch the fake?',
            ],
          }],
        },
        {
          id: 'ak5l4',
          title: 'Your AI Safety Rules',
          inlineSvg: SVG_SAFETY_RULES,
          inlineSvgId: 'ak5l4',
          slides: [{
            heading: 'Five Rules Every Digital Kid Should Know',
            body: 'You know the rules for crossing the road safely. Using AI has rules too. These five will keep you safe today — and keep you safe as AI gets even stronger.',
            bullets: [
              '1. Pause before you share — does this AI need this information?',
              '2. Verify before you trust — check important AI answers with another source',
              '3. Question what you see — photos, videos, and audio can be AI-generated',
              '4. Tell a trusted adult — if anything online makes you uncomfortable',
              '5. Be kind — AI learns from humans; don\'t teach it unkind patterns',
            ],
          }, {
            heading: 'Make It a Family Thing',
            body: 'Rules work best when the whole team knows them. So make AI safety a family thing, not just a you thing. Tonight at dinner, share your five rules and agree on them together: pause before you share, check before you trust, question what you see, tell a trusted adult, be kind. Then add your own house extras — like the family code word, or "AI helps with homework, it doesn\'t do the homework." Finally, make a no-trouble promise. If anyone gets tricked or sees something upsetting, telling the family brings help, never trouble. Grown-ups get fooled by AI tricks too. With these rules, you might be the one keeping them safe.',
            bullets: [
              'Teach the five rules to your family — teaching locks in learning',
              'Add house rules: code words, homework rules, sharing rules',
              'Agree together: getting tricked brings help, never trouble',
              'Safety is a team sport — and you\'re now a trained player',
            ],
          }],
        },
      ],
      quiz: [
        { q: 'Which of these is safe to share with an AI chatbot?', options: ['Your home address', 'Your school name', 'A question about your homework topic', 'Your phone number'], correct: 2 },
        { q: 'What is a "deepfake"?', options: ['A very deep photo filter', 'AI-generated media showing real people doing things they never did', 'A type of AI chatbot that refuses to answer', 'A fake AI company'], correct: 1 },
        { q: 'If you get a message saying "Act NOW or your account will be deleted!" — what should you do?', options: ['Act immediately — it must be important', 'Slow down, verify the message is real before doing anything', 'Share it with friends so they know too', 'Reply to ask for more information'], correct: 1 },
        { q: 'A video shows a famous person saying something shocking. What is the smart first move?', options: ['Believe it — videos can\'t lie', 'Share it right away', 'Check if a trusted news source also reports it — it could be a deepfake', 'Ask the AI if it made the video'], correct: 2 },
      ],
    },
  ],
};

export default aiKids;
