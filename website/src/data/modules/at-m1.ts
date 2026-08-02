import type { CourseModule } from '../../types/course';

const atM1: CourseModule = {
  id: 'at-m1',
  title: 'How AI Actually Works',
  icon: 'zap',
  summary: 'No mysticism, no dumbing down. What a language model is really doing when it answers you — prediction, tokens, training, and why confident nonsense is a feature of the design, not a bug in it.',
  lessons: [
    {
      id: 'at1l1',
      diagram: 'NextWordPrediction',
      title: 'Prediction, Not Understanding',
      slides: [
        {
          heading: 'The One Sentence That Explains Most of It',
          body: 'A large language model is a system that predicts what text should come next. That is the whole trick. You give it some words, it calculates which word is most likely to follow, adds that word, then does the same thing again with the slightly longer text. Repeat a few hundred times and you get an essay. It feels like conversation because human writing is full of patterns, and the model has absorbed an enormous number of them. But there is no moment where the model steps back and thinks "do I actually know this?" It is producing plausible continuations, and plausible is not the same as true.',
          bullets: [
            'The model works one small chunk of text at a time, left to right, never planning the whole answer in advance the way you would',
            '"Most likely next word" is calculated from patterns in text, not from checking reality',
            'Fluent and correct are two separate properties — the model is optimised hard for the first one',
            'This single fact explains almost every strange thing AI does',
          ],
        },
        {
          heading: 'Does It Understand Anything?',
          body: 'This is a genuinely contested question, and anyone who gives you a confident one-word answer is oversimplifying. What is not contested: the model has no body, no memory of yesterday unless the app gives it one, no goals of its own, and no way to check a claim against the world. What is also true: to predict text well across millions of topics, it has clearly built internal representations that behave a lot like concepts. It can apply an idea to a situation it has never seen. Somewhere between "just autocomplete" and "it thinks like you" is the honest answer, and researchers are still arguing about where.',
          bullets: [
            'It has no senses, no continuous existence, and no stake in whether it is right',
            'It can still generalise — apply a pattern to a new case — which pure lookup could never do',
            'Useful working stance: treat it as an extremely well-read pattern machine, not a mind and not a database',
            'Be suspicious of both hype ("it is basically conscious") and dismissal ("it is just autocomplete")',
          ],
        },
        {
          heading: 'Why This Matters for You Right Now',
          body: 'If you think of AI as a search engine, you will trust it in exactly the wrong places. Search returns documents that exist; a model generates text that did not exist until you asked. If you think of it as a person, you will assume it remembers your last conversation, cares about your grade, or would tell you when it is unsure. It does none of those by default. Getting the mental model right changes your behaviour: you start checking the things worth checking, and you stop wasting energy checking the things it is genuinely reliable at, like rephrasing a paragraph you wrote yourself.',
          bullets: [
            'Not a search engine: it writes an answer rather than retrieving one, unless the tool explicitly searches',
            'Not a person: no memory across chats by default, no stake in your outcome',
            'Very reliable at transforming text you supply — summarising, restructuring, translating tone',
            'Much less reliable at facts it has to produce from nowhere, especially specific ones',
          ],
        },
      ],
    },
    {
      id: 'at1l2',
      diagram: 'TokensAndContext',
      title: 'Tokens and Context: The Units It Thinks In',
      slides: [
        {
          heading: 'It Does Not See Letters or Words',
          body: 'Before a model reads anything, your text is chopped into tokens — chunks that are usually a short word or a piece of a longer one. "Understanding" might become "under" plus "standing". Spaces, punctuation and emoji all become tokens too. The model never sees the letters inside a token as separate things, which is exactly why models have historically been bad at questions like "how many r\'s are in this word" or at counting characters. It is not stupid. It is looking at a unit that has the letters welded shut. Once you know this, a whole category of weird failures stops being mysterious.',
          bullets: [
            'A token is roughly a word-fragment; common words are usually one token, rare ones split into several',
            'Letter-level tasks, precise counting and some rhyming puzzles fight against tokenisation',
            'Numbers get split oddly too, which is part of why raw arithmetic can go wrong',
            'Give it a calculator or code to run and the same model gets the sum right — the tool covers the weakness',
          ],
        },
        {
          heading: 'The Context Window Is Its Whole World',
          body: 'Everything the model can see at once — your message, the conversation so far, any file you pasted, and its own reply as it writes it — has to fit inside a limit called the context window, measured in tokens. Inside that window it is remarkably capable. Outside it, nothing exists. This is why a long chat starts to feel like it has forgotten the beginning: the beginning may literally have fallen out of view, or is still there but competing with everything else for attention. It is also why pasting your actual essay draft in beats describing it, and why starting a fresh chat for a new topic usually gets you sharper answers.',
          bullets: [
            'Context window = the maximum amount of text the model can hold in view for one response',
            'Modern models hold a lot, but quality often sags for details buried in the middle of very long inputs',
            'Practical move: paste the source material rather than summarising it from memory',
            'Practical move: start a new chat when you switch topic, so old text stops crowding the window',
          ],
        },
        {
          heading: 'Why "Say Nothing About X" Sometimes Backfires',
          body: 'Because generation is prediction over the text in front of it, whatever is in the window influences what comes next — including things you told it to avoid. Mention a wrong answer while asking it not to use that answer, and you have just made those words highly available. The same mechanism works in your favour: put a good example in the window and the output starts to resemble it. This is the real reason "show, don\'t tell" is the strongest prompting technique there is. You are not persuading the model. You are changing the statistical neighbourhood it is generating inside.',
          bullets: [
            'Positive instructions beat negative ones: describe what you want, not a list of what you do not',
            'Anything you paste becomes influence, including sloppy notes and half-finished ideas',
            'One good example in the prompt often outperforms three paragraphs of description',
            'If a chat has gone badly off track, editing the window (or restarting) beats arguing with it',
          ],
        },
      ],
    },
    {
      id: 'at1l3',
      diagram: 'TrainingVsUsing',
      title: 'Trained Once, Used Millions of Times',
      slides: [
        {
          heading: 'Two Completely Different Phases',
          body: 'There is a moment when a model is built and a moment when it is used, and they have almost nothing in common. Training happens once, takes months of work, runs on enormous clusters of specialised chips, and costs an amount of money that only large organisations can spend. It produces a fixed set of numbers — the model\'s weights. After that, using the model is a comparatively small computation that happens every time anyone sends a message. When you chat, you are not training anything. You are running a finished artefact, the same frozen set of numbers everyone else is running.',
          bullets: [
            'Training: one-time, enormous, produces the weights that define the model',
            'Inference: what happens on every single message, fast and comparatively cheap',
            'Your conversation does not update the weights — the model does not "learn from you" mid-chat',
            'Newer versions come from new training runs, not from the model quietly improving on its own',
          ],
        },
        {
          heading: 'What "Learning From Data" Actually Means',
          body: 'It does not mean the model stored the internet somewhere and looks things up. Training adjusts billions of numerical weights so that the model gets better at one task: predicting the next token in real text. Statistical regularities in language get compressed into those weights — grammar, facts that appear consistently, the shape of a good argument, how code is structured, and also every bias and error that recurs in the source material. What survives compression is what was common and consistent. Rare details get blurred or lost, which is precisely where confident invention creeps in later.',
          bullets: [
            'The output of training is weights — numbers — not a stored copy of the training text',
            'Frequently repeated, consistent information survives compression well; one-off details often do not',
            'Patterns in the data become patterns in the output, including the unfair ones',
            'A later stage tunes the model with human feedback so it answers helpfully rather than just continuing text',
          ],
        },
        {
          heading: 'Knowledge Cutoffs and Why Memory Is a Product Feature',
          body: 'Because the weights were fixed at the end of training, a model\'s built-in knowledge stops at a certain point. Anything after that is invisible unless the product goes and fetches it — which is what happens when a tool searches the web, reads a file you upload, or pulls from a company\'s documents. Similarly, when an assistant "remembers" your name across sessions, that is the app storing text and quietly re-inserting it into the context window. Both memory and up-to-date knowledge are things built around the model, not properties of the model itself. Knowing the difference tells you what to trust.',
          bullets: [
            'Knowledge cutoff: the model has no built-in awareness of events after training ended',
            'Search, file upload and retrieval add fresh information by putting it into the context window',
            'Persistent "memory" is stored text replayed to the model, not the model recalling you',
            'When accuracy on recent events matters, use a tool that cites sources and check them',
          ],
        },
      ],
    },
    {
      id: 'at1l4',
      title: 'Why It Makes Things Up',
      slides: [
        {
          heading: 'Hallucination Is the System Working as Designed',
          body: 'When a model invents a quotation, a statistic, a court case or a book that does not exist, that is called a hallucination. It is tempting to read it as the model lying, but nothing has gone wrong internally. The model was asked to produce the most plausible continuation and it did. A fake citation looks exactly like a real one — author, year, plausible title — because it was generated from the pattern of real citations. There is no separate fact-checking stage inside the model that could have caught it. Truth is not a variable the system tracks; plausibility is.',
          bullets: [
            'Made-up references, dates and quotes are the classic failure, and they look completely normal',
            'The model cannot flag them because it has no independent record of what is true',
            'Risk is highest for specific, verifiable, rarely-written-about details',
            'Risk is lowest for restructuring or explaining material you supplied yourself',
          ],
        },
        {
          heading: 'Confidence Is a Writing Style, Not a Signal',
          body: 'Human writers usually hedge when they are unsure. That correlation makes us read confident prose as informed prose, and models write in confident prose almost always, because most of the text they learned from was written by people who were confident. So the usual social cue you rely on — does this person sound sure? — has been decoupled from whether the content is right. Some systems now express uncertainty more, but you should never treat tone as evidence. A fabricated answer and a correct answer arrive with identical body language.',
          bullets: [
            'Fluency and confidence tell you nothing about accuracy — they are style, not evidence',
            'Asking "are you sure?" often produces a confident correction rather than a genuine confidence estimate',
            'It may also cave and agree with you when you were wrong, because agreement is a common pattern too',
            'Trust verification, not tone',
          ],
        },
        {
          heading: 'Where the Danger Actually Sits for You',
          body: 'The realistic risk is not a wild, obvious lie. It is a small, confident, wrong detail sitting inside four correct paragraphs, in a subject you do not know well enough to notice. That is exactly the situation you are in when you use AI for homework in a topic you are still learning. The defence is not paranoia, it is proportion: verify anything that carries a name, a number, a date, a source or a formula, and relax about phrasing, structure and explanation. Ask yourself what happens if this specific claim is wrong. If the answer is "I lose marks" or "I mislead someone", check it.',
          bullets: [
            'Highest risk: named sources, statistics, dates, legal or medical specifics, anything niche',
            'Lower risk: rewording your own work, generating practice questions, explaining a concept several ways',
            'Ask the model to show its reasoning — errors are easier to spot in steps than in conclusions',
            'If two independent sources cannot confirm it, do not put it in your work',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'Build one habit: before you use an AI-produced fact, ask whether you could defend it if someone asked "where did you get that?" If not, either verify it or cut it.',
          bullets: [
            'Separate the claim from the writing — the writing is usually fine, the claim may not be',
            'Verify anything specific enough to be wrong: names, numbers, dates, sources',
            'Never quote a source the model gave you without opening it first',
          ],
        },
        {
          role: 'security-se',
          label: 'Staying Safe Online',
          body: 'The same fluency that makes hallucinations convincing makes AI-written scams convincing. The old advice about spotting bad grammar in a phishing message is finished — assume any text can be produced perfectly.',
          bullets: [
            'Judge messages by what they ask you to do and how urgent they feel, not by how well written they are',
            'Any request that combines urgency, secrecy and money or login details is suspicious regardless of polish',
            'Verify through a channel you chose — a number you already have, an app you opened yourself',
          ],
        },
        {
          role: 'developer',
          label: 'If You Build Things',
          body: 'Models invent APIs, functions and package names that sound completely reasonable. Compilers and tests are your fact-checkers, and they are much better at it than you are by eye.',
          bullets: [
            'Never install a package a model suggested without confirming it genuinely exists — invented names get squatted by attackers',
            'Run the code and read the error rather than trusting an explanation of what the code does',
            'Ask for small pieces you can verify, not a whole system you have to trust wholesale',
          ],
        },
        {
          role: 'consultant',
          label: 'If People Ask You',
          body: 'You are probably the person friends and family come to about tech. The most useful thing you can give them is not a list of tools — it is the idea that confidence is not evidence.',
          bullets: [
            'Explain hallucination with an example they can check themselves, not with theory',
            'Give one rule people will actually follow: verify anything you would repeat to someone else',
            'Correct the two extremes you will meet — "it is always right" and "it is useless"',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What is a language model fundamentally doing when it writes an answer?',
      options: [
        'Looking up the closest matching document in its training data',
        'Predicting likely next chunks of text, one after another',
        'Reasoning from a stored set of verified facts',
        'Searching the live internet and summarising the results',
      ],
      correct: 1,
    },
    {
      q: 'Why do models struggle with questions like "how many letters are in this word"?',
      options: [
        'They deliberately refuse tasks that are too simple',
        'Counting requires a bigger context window than most models have',
        'They process text as tokens, so individual letters are not separate units to them',
        'Their training data contained very few words',
      ],
      correct: 2,
    },
    {
      q: 'What is the context window?',
      options: [
        'The maximum amount of text the model can hold in view for a single response',
        'The period of time a chat session stays open before it expires',
        'The part of the training data most relevant to your question',
        'The number of messages the company stores about you',
      ],
      correct: 0,
    },
    {
      q: 'Your conversation with a chatbot today will most likely:',
      options: [
        'Immediately update the model\'s weights so it gets smarter',
        'Retrain the model overnight for all users',
        'Be added directly to the next version\'s knowledge automatically',
        'Leave the model itself unchanged, since you are using an already-trained system',
      ],
      correct: 3,
    },
    {
      q: 'What does "learning from data" produce at the end of training?',
      options: [
        'A searchable copy of everything the model read',
        'A set of numerical weights that encode statistical patterns',
        'A list of verified facts with sources attached',
        'A database of question and answer pairs',
      ],
      correct: 1,
    },
    {
      q: 'A model gives you a citation with a real-sounding author, year and title. What should you assume?',
      options: [
        'It is real, because inventing a full citation is beyond what models do',
        'It is real if the model sounded confident about it',
        'It might not exist, so you need to find the source yourself before using it',
        'It is definitely fake, since models cannot reproduce real references',
      ],
      correct: 2,
    },
    {
      q: 'When an assistant appears to remember your name from last week, what is usually happening?',
      options: [
        'The model has permanently learned who you are',
        'The app stored that text and inserts it into the context window again',
        'Your account is running a personalised copy of the model',
        'The model retrained itself on your conversations',
      ],
      correct: 1,
    },
  ],
};

export default atM1;
