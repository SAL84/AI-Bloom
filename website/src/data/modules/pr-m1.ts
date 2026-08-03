import type { CourseModule } from '../../types/course';

const prM1: CourseModule = {
  id: 'pr-m1',
  title: 'What a Prompt Actually Is',
  icon: 'zap',
  summary: 'A prompt is not a search query. It is everything you hand over in one request — and understanding what the model can and cannot see explains almost every disappointing answer you have ever had.',
  lessons: [
    {
      id: 'pr1l1',
      title: 'Everything in the Box',
      slides: [
        {
          heading: 'Four Kinds of Content, One Request',
          body: 'Most people picture a prompt as the question they typed. It is broader than that. A prompt is everything the model receives in a single request, and it usually contains up to four kinds of content. The instruction is what you want done. The context is the background that makes the task make sense — who you are, what this is for, what constraints apply. The examples are samples of what a good answer looks like. The data is the raw material to work on: the email to reply to, the notes to summarise, the numbers to check. Weak prompts almost always contain only the instruction. Strong prompts contain the other three as well, because those are the parts that carry the information the model has no other way to get.',
          bullets: [
            'Instruction: the verb — summarise, draft, compare, check, rewrite',
            'Context: who it is for, what it is for, what must be true',
            'Examples: one or two samples of the output you would accept',
            'Data: the actual material, pasted in, not described from memory',
          ],
        },
        {
          heading: 'Weak and Strong, Side by Side',
          body: 'Weak: "Write an email about the delay." Strong: "Write an email to a client whose delivery has slipped by two weeks. Context: the delay is our fault, a supplier missed a deadline, and this is the second delay on this account. They are annoyed but we want to keep them. Tone: direct and apologetic, no corporate padding. Length: under 150 words. Do not offer a discount — I have not approved one. Here are the facts to use: [paste]." Both are one message. The second one takes forty seconds longer to write and produces something you can send rather than something you have to rewrite. Nothing clever is happening in the second version. It just contains the information a competent colleague would have needed too.',
          bullets: [
            'Weak: "Write an email about the delay" — no reader, no history, no limits',
            'Strong: names the reader, the cause, the relationship, the tone, the length',
            'The strong version also says what NOT to do, which prevents a whole class of bad drafts',
            'Test: could a new colleague do this task from your prompt alone? If not, it is underspecified',
          ],
        },
        {
          heading: 'Order and Labels Help More Than You Expect',
          body: 'The model reads your prompt as one continuous piece of text. It has no special slot marked "this is the important bit". So when a prompt mixes instructions, background and pasted data into one paragraph, the boundaries get blurry — and you occasionally get the model treating your data as instructions, or your instructions as something to summarise. The fix is boring and effective: label the sections. Put the task at the top, the constraints next, and the raw material at the bottom under an obvious heading such as "Document to review:". Frontier models generally handle long, well-structured prompts far better than long, unstructured ones. Structure is not decoration; it tells the model which part is which.',
          bullets: [
            'Label pasted material explicitly: "Transcript:", "Draft to edit:", "Data:"',
            'Put the task first so everything after it is read as serving that task',
            'Keep constraints together rather than sprinkled through the paragraph',
            'Long is fine; long and undifferentiated is where things get lost',
          ],
        },
      ],
    },
    {
      id: 'pr1l2',
      title: 'It Does Not Remember You',
      slides: [
        {
          heading: 'Each Request Starts From Nothing',
          body: 'This is the single most misunderstood thing about talking to AI. The model itself does not carry anything from one conversation to the next. It is not building a picture of you over time. When a new chat opens, it knows nothing about your job, your last project, your writing style, or the thing you explained in enormous detail yesterday. Within one conversation it seems to remember, but only because the app is quietly resending the earlier messages along with your new one every single time. The apparent memory is the transcript being re-read, not a mind holding on to something. Once you internalise this, a lot of odd behaviour stops being mysterious.',
          bullets: [
            'Within a chat: earlier turns are resent with every message, so it "remembers"',
            'Between chats: nothing carries over unless the product deliberately stores and re-injects it',
            'The model is not learning from your conversations as you have them',
            'Starting a fresh chat is a genuine reset, not a polite restart',
          ],
        },
        {
          heading: 'What Memory Features Actually Do',
          body: 'Many AI products now offer memory, saved instructions, project files, or a profile you fill in once. These are real and useful, but it is worth knowing the mechanism: the application stores that text somewhere and pastes it into your prompt automatically before sending. It is context supplied on your behalf, not knowledge inside the model. Two consequences follow. First, anything the app has not stored is invisible, no matter how many times you have said it in other chats. Second, stored context can quietly go stale — an old preference you set months ago is still being sent, still shaping answers, and you have forgotten it exists. If a model keeps doing something odd and you cannot see why, check what your saved context says.',
          bullets: [
            'Memory features work by re-injecting stored text, not by changing the model',
            'If it was never saved, it is not there — repetition in other chats does nothing',
            'Stale saved instructions are a common and invisible cause of weird output',
            'Review your saved context occasionally the way you would review email filters',
          ],
        },
        {
          heading: 'How to Work With a Blank Slate',
          body: 'The practical move is to stop resenting the restatement and start systematising it. Keep a short block of standing context you can paste at the top of a new chat: your role, your audience, your usual constraints, your tone preferences. Ten lines is plenty. It costs one paste and removes an entire category of bad first answers. The other move is to notice when a long conversation has drifted — you corrected it four times, the thread is cluttered with dead ends, and each new answer is worse. That is the moment to open a fresh chat and write one good prompt containing everything you learned, rather than piling correction number five onto a confused transcript.',
          bullets: [
            'Keep a reusable standing-context block: role, audience, constraints, tone',
            'Restating context is cheap; assuming it is remembered is expensive',
            'When a thread has drifted, restart clean with a better first message',
            'A messy transcript keeps influencing every later answer in that chat',
          ],
        },
      ],
    },
    {
      id: 'pr1l3',
      title: 'Why Wording Changes the Answer',
      slides: [
        {
          heading: 'You Are Steering, Not Just Asking',
          body: 'Ask "what are the risks of this plan?" and you get risks. Ask "is this plan good?" and you get a broadly positive assessment with a few caveats. Ask "what would a sceptical finance director say about this plan?" and you get sharp, specific objections about cost and assumptions. Same plan, same model, three genuinely different outputs — and none of them is wrong. Your phrasing does not merely describe the request; it sets the direction the answer travels in. This is why two people can use the same tool on the same problem and come away with completely different impressions of how useful it is. The one getting better answers is usually asking better-aimed questions, not using a better product.',
          bullets: [
            '"Is this good?" invites agreement; "what breaks here?" invites analysis',
            'Naming a perspective changes vocabulary, depth and what gets prioritised',
            'Vague questions do not produce neutral answers, they produce generic ones',
            'If you want criticism, you have to ask for criticism explicitly',
          ],
        },
        {
          heading: 'Leading Questions Get Leading Answers',
          body: 'Compare two versions of the same request. Weak: "Explain why remote work is more productive." Strong: "Summarise the main arguments and evidence on both sides of whether remote work improves productivity, and say where the evidence is genuinely contested." The first one has the conclusion baked into the question, so you will get a fluent, one-sided case that feels like research and is actually just your own assumption returned to you with better sentences. This is a real trap for anyone using AI to think rather than to write. If you notice the answer agreeing with you suspiciously often, look at how you phrased the question before you congratulate yourself.',
          bullets: [
            'Weak: "Explain why X is better" — assumes the conclusion you wanted',
            'Strong: "Give the strongest case for and against X, and note where evidence is weak"',
            'Ask for the counter-argument by name, not as an afterthought',
            'A useful habit: ask the same question twice, once phrased the opposite way',
          ],
        },
        {
          heading: 'Some Variation Is Just Built In',
          body: 'Even with an identical prompt, you will not always get an identical answer. Text generation involves an element of sampling, so wording, structure and emphasis shift between runs. Most products expose this indirectly rather than as a setting you control. Two things follow. First, do not read too much into one output — a single bad answer may be a bad roll rather than a bad prompt, and a single great answer is not proof your prompt is reliable. Second, if you need consistency across many uses, that comes from a tighter prompt with an explicit format, not from hoping. Ask for the same structure every time and the variation lands in the wording rather than in the shape of the result.',
          bullets: [
            'The same prompt can produce different text on different runs — this is normal',
            'Judge a prompt on several attempts, not on the first one you liked',
            'Specifying an explicit output format is the main lever for consistency',
            'Regenerating is a legitimate move, but it is not a substitute for a fix',
          ],
        },
      ],
    },
    {
      id: 'pr1l4',
      title: 'The Mistake Almost Everyone Makes',
      slides: [
        {
          heading: 'Asking for a Thing With No Reader and No Purpose',
          body: 'The most common bad prompt is not rude, lazy or badly spelled. It is a perfectly reasonable request with two things missing: who it is for, and what it is for. "Write a project update." For whom — your manager, the client, the whole company, a board? For what — to reassure them, to escalate a problem, to ask for more budget, to create a record? Without those, the model has to pick, and it picks the safe middle: a neutral, medium-length, generic update aimed at nobody in particular. Then people conclude the output is bland. It is bland because the request was aimed at no one. Audience and purpose are not polish. They are the two facts that determine what a good answer even looks like.',
          bullets: [
            'Weak: "Write a project update" — no reader, no goal, no stakes',
            'Strong: "Write a project update for our client\'s operations lead. Purpose: flag a two-week slip and get her to approve a revised date. She is detail-oriented and dislikes vague language."',
            'Missing audience produces generic output; missing purpose produces unfocused output',
            'Most "AI writing sounds like AI" complaints trace back to exactly this gap',
          ],
        },
        {
          heading: 'Why "Be More Specific" Is True and Useless',
          body: 'It is the advice everyone gives and almost nobody can act on, because it does not say specific about what. Adding more words is not the fix — a longer vague prompt is still vague. What actually helps is knowing which dimensions matter. Specific about the audience: who reads this and what do they already know? Specific about the purpose: what should happen after they read it? Specific about scope: what is deliberately out of scope? Specific about format: how long, what shape, what sections? Specific about quality: what would make this answer wrong or unusable? Naming those five turns an abstract instruction into a checklist you can actually run.',
          bullets: [
            'Audience: who reads it, what they already know, what they care about',
            'Purpose: what you want to happen as a result',
            'Scope: what to include and what to deliberately leave out',
            'Format and quality bar: shape, length, and what would make it unusable',
          ],
        },
        {
          heading: 'The Three-Line Upgrade',
          body: 'You can fix most weak prompts by adding three lines, and you can do it in under a minute. Line one: this is for [audience], who [what they know or want]. Line two: the purpose is [what should happen next]. Line three: a good answer would [test of quality] — and it should not [the thing you keep getting that you do not want]. Take "summarise this report". Add: "This is for a busy director who has not read the report and will act on the summary. Purpose: decide whether to fund phase two. A good summary states the recommendation in the first sentence and flags anything that would change the decision. Do not include background the director already knows."',
          bullets: [
            'Line 1 — audience: who reads this and what they already know',
            'Line 2 — purpose: the decision or action this is meant to enable',
            'Line 3 — quality bar plus one explicit exclusion',
            'Three lines is roughly forty seconds and eliminates most rewriting',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'If you only take one habit from this whole course, take this one: before you press send, add who it is for and what it is for. It costs a sentence and changes the output more than any clever phrasing.',
          bullets: [
            'Say the reader out loud in the prompt, even if the reader is you',
            'Say what should happen after someone reads the answer',
            'If the output feels generic, check whether you named an audience at all',
          ],
        },
        {
          role: 'security-se',
          label: 'Security and Privacy',
          body: 'Context is the part of a prompt that carries real information, which means it is also the part that carries real exposure. Get in the habit of asking what the context actually needs to contain.',
          bullets: [
            'Supply the minimum context that makes the task work — not the whole document because it was easier to paste',
            'Real names, account numbers and personal details are rarely needed for the model to do the task well',
            'Standing-context blocks you reuse are worth reviewing: they get pasted everywhere, including places you did not intend',
          ],
        },
        {
          role: 'developer',
          label: 'Builders',
          body: 'The same principle scales to anything you build. A system prompt is just standing context supplied by your application, and every failure mode in this lesson shows up there too — usually harder to debug because users never see it.',
          bullets: [
            'Treat audience and purpose as explicit fields in your prompt template, not prose you hope someone wrote',
            'Label injected material clearly so user data is never read as instructions',
            'Log the fully assembled prompt in development — most "the model is broken" reports are assembly bugs',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising Others',
          body: 'When someone tells you AI is useless for their work, ask to see the actual prompt. Nine times out of ten it is a bare instruction with no audience, no purpose and no source material.',
          bullets: [
            'Ask for the real prompt, not a description of it — the gap is usually visible immediately',
            'Do not lead with "be more specific"; give them the audience/purpose/scope checklist instead',
            'Rewriting one of their real prompts in front of them is more persuasive than any explanation',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Which of these best describes what a "prompt" includes?',
      options: [
        'Only the question you type in the box',
        'The question plus any settings you have chosen in the app',
        'Everything sent in one request: instruction, context, examples and data',
        'The full history of everything you have ever asked the model',
      ],
      correct: 2,
    },
    {
      q: 'Within a single conversation, why does the model appear to remember what you said earlier?',
      options: [
        'It stores a summary of you and updates it as you talk',
        'The earlier messages are resent with each new message as part of the prompt',
        'It has been fine-tuned on your previous conversations',
        'It keeps a private index of your account history',
      ],
      correct: 1,
    },
    {
      q: 'A colleague says the model "learned" their writing style because they explained it in a chat last week. What is the most accurate correction?',
      options: [
        'The model updates itself gradually from frequent users',
        'Style preferences are the one thing models retain permanently',
        'It only remembers style if you used the same device',
        'Nothing carries across chats unless the app stores that text and re-sends it',
      ],
      correct: 3,
    },
    {
      q: 'Why is "Explain why remote work is more productive" a weak research prompt?',
      options: [
        'It is too short for the model to process properly',
        'It uses a topic the model has no information about',
        'It bakes the conclusion into the question, so you get your own assumption back',
        'Questions beginning with "explain" are always answered less accurately',
      ],
      correct: 2,
    },
    {
      q: 'You send the exact same prompt twice and get two differently worded answers. What does this tell you?',
      options: [
        'Some variation between runs is normal, so judge a prompt over several attempts',
        'Your account settings changed between the two requests',
        'The first answer must have been wrong',
        'The model has started learning from your feedback',
      ],
      correct: 0,
    },
    {
      q: 'Which two missing pieces most often make AI output feel generic?',
      options: [
        'Politeness and correct spelling',
        'Who it is for and what it is for',
        'Prompt length and the number of examples',
        'The topic and the language',
      ],
      correct: 1,
    },
    {
      q: 'Why is "be more specific" poor advice on its own?',
      options: [
        'Specificity actually makes outputs worse',
        'Models are trained to prefer short prompts',
        'It only applies to creative writing tasks',
        'It does not say which dimensions to be specific about, so people just write longer vague prompts',
      ],
      correct: 3,
    },
    {
      q: 'You paste a long document into a prompt with your instructions and get a confused answer. What is the most likely structural fix?',
      options: [
        'Shorten the document until the answer improves',
        'Ask the question again in a new chat with no changes',
        'Label the sections so the task, constraints and pasted material are clearly separated',
        'Move the instructions to the very end and remove all headings',
      ],
      correct: 2,
    },
  ],
};

export default prM1;
