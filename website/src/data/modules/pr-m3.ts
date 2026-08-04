import type { CourseModule } from '../../types/course';

const prM3: CourseModule = {
  id: 'pr-m3',
  title: 'Getting Output You Can Use',
  icon: 'target',
  summary: 'The gap between an impressive answer and a usable one — asking for structure, controlling length and tone, getting editable drafts, and making the model interrogate you before it answers.',
  lessons: [
    {
      id: 'pr3l1',
      title: 'Ask for Structure',
      diagram: 'AskForStructure',
      slides: [
        {
          heading: 'Structure Makes an Answer Checkable',
          body: 'A paragraph of confident prose is hard to audit. You read it, it sounds right, you move on. The same information in a table with one row per item and one column per criterion is a different object: you can scan it, spot the empty cell, notice that two rows contradict each other, and see immediately that it only covered four of the six things you asked about. Weak: "Compare these five suppliers." Strong: "Compare these five suppliers in a table. Columns: supplier, lead time, minimum order, price per unit, one risk, and whether they meet our two-week requirement — yes or no." Structure is not a formatting preference. It is what turns an answer into something you can verify rather than trust.',
          bullets: [
            'Weak: "Compare these five suppliers"',
            'Strong: names the exact columns, including a yes/no verdict column',
            'Gaps and contradictions are visible in a table and invisible in prose',
            'A forced yes/no or number column stops the answer hiding behind hedging',
          ],
        },
        {
          heading: 'Pick the Shape That Matches the Job',
          body: 'Different jobs want different shapes. Comparisons want tables. Sequences want numbered steps. Decisions want a recommendation first, then the reasoning, then what would change the answer. Data you will process wants a strict format such as JSON or CSV with named fields — and if you ask for that, say "return only the data, no commentary", or you will get a friendly sentence wrapped around it that breaks whatever you paste it into. Recurring documents want a template you supply. The general principle: decide what you will do with the output, then ask for the shape that makes that easy. Reformatting an answer by hand is work you can eliminate in one sentence.',
          bullets: [
            'Comparison → table; process → numbered steps; decision → verdict first, then reasoning',
            'Machine-readable output → name the fields and say "return only the data, no commentary"',
            'Recurring work → supply your template and say "fill this in exactly"',
            'Choose the shape from what you will do next, not from what looks tidy',
          ],
        },
        {
          heading: 'Build the Checking Into the Format',
          body: 'You can go further and make the format carry your quality controls. Add a column for "confidence: high, medium or low". Add a final section headed "what I could not determine from the material you gave me". Ask for "source: which paragraph of the document this came from" beside each claim. Ask for "assumptions I made" as a separate list. These are not decorative — they concentrate the uncertainty in one place instead of leaving it distributed invisibly through fluent prose. A summary with an honest "not stated in the source" line is far more useful than one that silently filled the gap, and you only get it if you asked for somewhere to put it.',
          bullets: [
            'Add a confidence column and a "not determinable from this material" section',
            'Ask for a source or paragraph reference beside each factual claim',
            'Request an explicit "assumptions I made" list — it surfaces the silent ones',
            'Give uncertainty a home in the format, or it will be smoothed away',
          ],
        },
      ],
    },
    {
      id: 'pr3l2',
      title: 'Length and Tone on Purpose',
      slides: [
        {
          heading: 'Length Controls That Actually Work',
          body: 'Exact word counts are followed loosely — treat a number as a strong steer rather than a guarantee. Structural limits work far better, because they constrain the shape rather than asking for arithmetic. "Three bullets, one line each" is more reliable than "about 40 words". "One paragraph" beats "roughly 100 words". "One sentence per item" beats "keep it brief". And the strongest length control of all is a stated container: "this has to fit in a text message", "this is the preview line in an email", "this goes on one slide with a picture". The container tells the model what the real constraint is, and it will size the content to fit it.',
          bullets: [
            'Weak: "Keep it brief." Strong: "Three bullets, maximum one line each."',
            'Structural limits are followed more reliably than word counts',
            'Name the container — a text message, a slide, an email preview line',
            'For long outputs, specify sections rather than a total length',
          ],
        },
        {
          heading: 'Tone by Comparison, Not by Adjective',
          body: 'Adjectives are slippery. "Professional" means one thing in a law firm and something else in a startup; "friendly" produces exclamation marks you did not want. Two things work better. The first is comparison: "write it the way a good colleague explains something in a corridor", "the tone of a well-written newspaper explainer", "how you would text a friend who asked for a favour". The second is an example of your own writing, which is the most precise instrument available. If you must use adjectives, pair each one with a negative boundary — "warm but not chatty", "confident but not salesy" — because the pair defines a narrower band than either word alone.',
          bullets: [
            'Weak: "Make it professional." Strong: "Write it the way a well-edited news explainer would."',
            'A pasted sample of your own writing beats any description of tone',
            'Pair adjectives with boundaries: "direct but not blunt", "warm but not chatty"',
            'Name the specific habits you dislike — exclamation marks, rhetorical questions, "delve"',
          ],
        },
        {
          heading: 'Cut the Padding Explicitly',
          body: 'Default output has recognisable furniture: a restatement of your question, a preamble about how great the topic is, a closing paragraph summarising what it just said, and an offer to help further. None of it is wrong; all of it is padding when you are going to paste the result somewhere. You can remove it in one line. "Start with the answer. No preamble, no summary at the end, no offer to help." For repeated work, put that line into your standing instructions once and stop thinking about it. This single sentence probably saves more editing time than any other prompt habit in this course, precisely because the padding is so consistent.',
          bullets: [
            '"Start with the answer, no preamble" removes the most common wasted paragraph',
            'Ban the closing summary explicitly if you do not want it',
            'Name any specific verbal tics you keep having to delete',
            'Put this line in your saved instructions rather than retyping it daily',
          ],
        },
      ],
    },
    {
      id: 'pr3l3',
      title: 'Drafts You Can Edit',
      slides: [
        {
          heading: 'Aim for Editable, Not Finished',
          body: 'There is a difference between output you can work with and output you have to rewrite. A blob — one long, smooth, evenly-weighted piece of prose — is expensive to edit, because changing any part means re-reading the whole thing and every sentence is entangled with its neighbours. A draft with visible seams is cheap to edit: sections you can cut whole, bullets you can reorder, paragraphs that stand alone. Asking for the second is a choice you make in the prompt. "Give me this in labelled sections I can cut and reorder" produces a different artefact from "write me a report", even when the underlying content is identical.',
          bullets: [
            'Ask for labelled sections you can cut, keep or reorder independently',
            'Blobs hide their weak parts; segmented drafts make them obvious',
            'For anything you will edit, coverage matters more than polish — say so',
            '"Leave gaps marked [TBC] rather than inventing detail" is a useful standing instruction',
          ],
        },
        {
          heading: 'Options Before Commitment',
          body: 'When you do not yet know what you want, do not ask for one answer — you will end up anchored to it and spend the next twenty minutes nudging a direction you never chose. Ask for several genuinely different options instead. "Give me three openings that take clearly different approaches: one that leads with the problem, one that leads with a story, one that leads with the number. Two lines each." Short options, real variety, no commitment. You pick a direction, then ask for depth on that one. This costs one extra round and routinely saves several, because the expensive mistake is polishing the wrong thing rather than writing the right thing slowly.',
          bullets: [
            'Weak: "Write an opening for this article"',
            'Strong: "Three openings taking clearly different approaches, two lines each" — then expand one',
            'Say "clearly different", or you will get three versions of the same idea',
            'Keep exploratory options short; length is for the direction you have chosen',
          ],
        },
        {
          heading: 'Refine in Passes',
          body: 'Trying to get structure, content, tone and length right in a single request is how you end up with an answer that is nearly right in four ways at once. Passes work better. Pass one: the outline only, no prose — is the shape right? Pass two: fill in the sections you approved. Pass three: tone and cuts. Fixing the structure while it is still an outline takes one line; fixing it after 900 words have been written around it means regenerating everything. This is exactly how experienced writers work anyway, and it maps onto prompting without modification. It also makes each round easy to judge, because each round is about one thing.',
          bullets: [
            'Pass 1: outline only, no prose — cheapest possible place to fix the shape',
            'Pass 2: draft the approved sections, coverage over polish',
            'Pass 3: tone, cuts, and the specific bits you flagged',
            'Judging one dimension at a time is far easier than judging four at once',
          ],
        },
      ],
    },
    {
      id: 'pr3l4',
      title: 'Make It Ask You Questions',
      slides: [
        {
          heading: 'Invert the Direction',
          body: 'One of the most useful moves available is also the least used: instead of trying to write a complete prompt, hand over a rough one and say "before you answer, ask me up to five questions that would most improve your answer." What comes back is often uncomfortable, in a productive way. It asks who the audience is, what the budget is, what has already been tried, what would count as success — the exact things you left out, and frequently things you had not decided. Answering them takes two minutes and produces a far better result than any amount of solo prompt-polishing, because you were never going to guess which gaps mattered from the inside.',
          bullets: [
            'Add: "Before answering, ask me up to five questions that would most improve your answer"',
            'The questions are a free audit of what your prompt was missing',
            'Cap the number, or you may get a long interview you did not want',
            'Best used at the start of anything long, expensive or hard to redo',
          ],
        },
        {
          heading: 'Ask It to Restate the Task',
          body: 'A quicker variant for anything complicated: "Before you start, restate what you think I am asking for and list any assumptions you are making. Then wait." Misunderstandings become visible in ten seconds rather than after 1,500 words. It is remarkably common to read the restatement and realise the model has interpreted something reasonably but not the way you meant — usually a word that means something specific in your organisation and something general everywhere else. This is also a good habit for human work: if a task is worth a long answer, it is worth thirty seconds confirming the question. The assumptions list is often the more valuable half.',
          bullets: [
            '"Restate the task and list your assumptions, then wait" catches misreads early',
            'Ambiguous internal jargon is the most common source of a wrong interpretation',
            'The assumptions list frequently surfaces decisions you had not actually made',
            'Cheap on anything where the full answer would be long or costly to redo',
          ],
        },
        {
          heading: 'Interviews and Self-Critique',
          body: 'The same inversion works in other shapes. For anything where you hold the knowledge — a case study, a personal statement, a process nobody has documented — ask it to interview you one question at a time and then write from your answers. You get your own material, structured, instead of a generic piece that happens to be about your topic. And once you have a draft, "critique this against the brief, list the three weakest points, then rewrite only those" is a cheap quality upgrade. Note the limit: a model reviewing its own work catches structural and clarity problems well, but it is not a reliable check on whether the facts are true.',
          bullets: [
            '"Interview me one question at a time, then write it from my answers" preserves your material',
            '"Critique this, list the three weakest points, then rewrite only those" is a cheap upgrade',
            'Self-critique is good at structure and clarity, weak at verifying facts',
            'One question at a time matters — a list of twelve questions gets skimmed',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'The two habits with the best return here are asking for a shape and asking for questions back. Neither requires any technical knowledge and both work on the first try.',
          bullets: [
            'For anything you will compare or check, ask for a table with named columns',
            'For anything important, ask it to question you before it answers',
            'Add "start with the answer, no preamble" to your saved instructions once',
          ],
        },
        {
          role: 'security-se',
          label: 'Security and Privacy',
          body: 'Structured output is a quiet security benefit: it makes it obvious what a response contains, which matters when output gets forwarded, pasted or stored somewhere more permanent than a chat.',
          bullets: [
            'Structured answers are easier to review before forwarding than fluent prose',
            'Ask for a "sources and assumptions" section so unverified claims are labelled, not buried',
            'Be deliberate about what ends up in a shared document — chat output travels further than people expect',
          ],
        },
        {
          role: 'developer',
          label: 'Builders',
          body: 'If you are parsing output, structure is not a nicety. Specify the exact schema, give one worked example, and validate what comes back rather than assuming it conformed.',
          bullets: [
            'Name every field, give one filled-in example, and say "return only the data"',
            'Validate the parsed result and handle failure — format adherence is high but not guaranteed',
            'Include an explicit representation for unknown or not-applicable so the model does not invent a value',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising Others',
          body: 'Teams usually complain about quality when the real problem is shape. Output they must reformat by hand feels worse than output that lands ready to use, even when the content is identical.',
          bullets: [
            'Standardise output formats for recurring deliverables across the team',
            'Introduce the "ask me five questions first" move in workshops — it demonstrates itself',
            'Segmented drafts make review meetings far shorter than reviewing prose blobs',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Why does asking for a table instead of prose improve quality control?',
      options: [
        'Gaps, contradictions and missing items become visible instead of being smoothed over',
        'Tables are generated more accurately than paragraphs',
        'Tables use fewer tokens, leaving more room for reasoning',
        'The model checks its own tables before returning them',
      ],
      correct: 0,
    },
    {
      q: 'Which length instruction is most likely to be followed closely?',
      options: [
        '"Approximately 120 words"',
        '"Keep it concise"',
        '"Three bullets, one line each"',
        '"No more than 8% of the source length"',
      ],
      correct: 2,
    },
    {
      q: 'You keep deleting the same opening paragraph restating your question. What is the fix?',
      options: [
        'Ask the question more directly so there is nothing to restate',
        'Use shorter prompts so the model has less to echo back',
        'Regenerate until an answer comes back without it',
        'Add "start with the answer — no preamble, no closing summary" to your standing instructions',
      ],
      correct: 3,
    },
    {
      q: 'What is the advantage of asking for three short, clearly different options rather than one full answer?',
      options: [
        'Three attempts are more likely to contain a correct one',
        'It avoids anchoring on the first direction and stops you polishing the wrong thing',
        'Shorter outputs are always more accurate',
        'It forces the model to reason step by step',
      ],
      correct: 1,
    },
    {
      q: 'Why is it better to fix the structure at outline stage than after a full draft?',
      options: [
        'Outlines are generated with more care than drafts',
        'The model cannot edit text it has already produced',
        'A structural fix costs one line at outline stage and a full regeneration afterwards',
        'Outlines are more accurate because they contain fewer claims',
      ],
      correct: 2,
    },
    {
      q: 'What is the main value of "before you answer, ask me up to five questions"?',
      options: [
        'It makes the model think longer, which improves accuracy',
        'It reveals which parts of your prompt were missing, including things you had not decided',
        'It is the only way to get the model to use context you provided',
        'It stops the model from making assumptions of any kind',
      ],
      correct: 1,
    },
    {
      q: 'You ask the model to critique its own draft. What is a realistic expectation?',
      options: [
        'It reliably catches factual errors in its own output',
        'Self-critique makes the second draft objectively correct',
        'Self-critique produces no useful improvement at all',
        'It is useful on structure and clarity but not a dependable check on truth',
      ],
      correct: 3,
    },
  ],
};

export default prM3;
