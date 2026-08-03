import type { CourseModule } from '../../types/course';

const prM2: CourseModule = {
  id: 'pr-m2',
  title: 'The Anatomy of a Good Prompt',
  icon: 'layers',
  summary: 'The parts that reliably help — perspective, context, constraints, outcome, format and worked examples — plus when showing beats telling and why negative instructions are weaker than positive ones.',
  lessons: [
    {
      id: 'pr2l1',
      title: 'Role and Perspective',
      slides: [
        {
          heading: 'A Perspective Sets the Register',
          body: 'Telling the model what point of view to write from is one of the cheapest upgrades available. Not because there is a magic persona that unlocks hidden ability, but because a perspective carries a whole bundle of assumptions with it: vocabulary, level of detail, what counts as important, what gets skipped. "Explain compound interest" gets you a textbook paragraph. "Explain compound interest the way a financial adviser would explain it to a client who is nervous about money and has never invested" gets you a different vocabulary, a slower pace, and worked numbers instead of a formula. The perspective did not add knowledge. It selected which parts of a very general capability to bring forward.',
          bullets: [
            'Weak: "Explain compound interest"',
            'Strong: "Explain compound interest as a financial adviser would to a nervous first-time investor — use a worked example with real numbers, no formulas"',
            'Perspective changes vocabulary, pace and what gets treated as important',
            'It does not add expertise the model lacks — do not expect a title to make it accurate',
          ],
        },
        {
          heading: 'Reader Perspective Beats Writer Perspective',
          body: 'Most people reach for "act as an expert" and stop there. Specifying the reader is usually more powerful, because the reader determines what actually needs to be on the page. "You are a senior lawyer" gives you dense, hedged prose. "Explain this contract clause to a small business owner who has never had a lawyer and needs to know if they can sign it today" gives you plain language, the actual risk, and a recommendation. When you can, name both: the voice writing and the person reading. And be honest about the reader\'s starting point — saying "assume they know nothing about the technical side but are commercially sharp" prevents both a patronising answer and an impenetrable one.',
          bullets: [
            'Name the reader as precisely as the writer — the reader shapes content, the writer shapes tone',
            'State what the reader already knows and what they will do with the answer',
            '"They are smart but new to this field" is a very effective single line',
            'Where relevant, name the reader\'s worry: what are they actually afraid of getting wrong?',
          ],
        },
        {
          heading: 'Adversarial Perspectives Are Underused',
          body: 'The most valuable perspective is often not a helpful expert but a hostile one. "Review my proposal" produces polite, balanced feedback that makes you feel fine and changes nothing. "You are the client\'s CFO. You did not want this project and you are looking for reasons to reject it. Give me your three strongest objections in the order you would raise them" produces something you can actually prepare against. The same trick works everywhere: the reviewer who will reject your paper, the sceptic in the audience, the support agent who has to handle the complaint your email will cause. Asking for the attack is a far better test of your work than asking for an opinion.',
          bullets: [
            'Weak: "What do you think of this proposal?"',
            'Strong: "You are the budget holder looking for a reason to say no. Give your three strongest objections, ranked."',
            'Adversarial framing surfaces problems that polite review never reaches',
            'Pair it: get the attack first, then ask for the strongest defence of each point',
          ],
        },
      ],
    },
    {
      id: 'pr2l2',
      title: 'Context and Constraints',
      slides: [
        {
          heading: 'Context Is the Information Only You Have',
          body: 'The model has broad general knowledge and zero knowledge of your situation. Context is where you close that gap, and the useful test is simple: what would a capable freelancer need to know before starting this task? Usually it is the same short list. The background — what happened before this, why the task exists. The people — who is involved and what the relationship is like. The history — what has already been tried, and what went badly. The stakes — what happens if this is wrong. None of that is available anywhere else. Every minute you spend supplying it is worth roughly five minutes of rewriting the output afterwards.',
          bullets: [
            'Background: how the situation arose and why the task matters now',
            'Relationships: who is involved and how much political care is required',
            'What has already been tried and rejected — this alone prevents a lot of wasted output',
            'Stakes: what happens if the answer is wrong, so effort lands in the right place',
          ],
        },
        {
          heading: 'Constraints Are What Make an Answer Usable',
          body: 'Constraints are the boundaries the answer must respect, and they are the difference between a plausible answer and a usable one. Weak: "Suggest ideas for our team offsite." Strong: "Suggest ideas for a one-day team offsite. Constraints: eleven people, four of whom are remote and joining by video for part of it; budget under 2,000; one person uses a wheelchair; no alcohol-centred activities; must include one hour of actual planning work. Give six options, each with a one-line reason it fits these constraints." The second version cannot produce the useless suggestions the first one will, because you removed them in advance. Most people supply constraints only after seeing a bad answer. Supplying them first is the whole trick.',
          bullets: [
            'Weak: "Suggest ideas for our team offsite"',
            'Strong: adds headcount, budget, accessibility, format and a required outcome',
            'Constraints eliminate whole categories of bad answers before they are generated',
            'Ask for a stated reason each option fits the constraints — it makes checking fast',
          ],
        },
        {
          heading: 'Say What Is Out of Scope',
          body: 'One constraint deserves its own mention because people forget it constantly: what you do not want covered. AI outputs sprawl by default. Ask about a pricing change and you will get sections on market research, competitor analysis and communication strategy that you did not ask for and will delete. Naming the boundary is quick. "Only cover the internal finance impact — I already have the customer communications handled." "Assume the technology decision is fixed and do not revisit it." "No legal advice, we have counsel for that." Scope boundaries also do something subtler: they stop the answer from being diluted across five topics when you needed depth on one.',
          bullets: [
            'Sprawl is the default; boundaries are cheap to state and rarely stated',
            '"Assume X is already decided" prevents the model reopening settled questions',
            'Narrow scope produces depth; broad scope produces a shallow tour',
            'If you keep deleting the same section from outputs, put it in the prompt as out of scope',
          ],
        },
      ],
    },
    {
      id: 'pr2l3',
      title: 'The Task as an Outcome',
      slides: [
        {
          heading: 'Describe the Result, Not the Activity',
          body: 'There is a real difference between naming an activity and naming an outcome. "Analyse this customer feedback" is an activity — it could mean twenty things and the model will pick one. "Read these forty pieces of customer feedback and tell me the three issues most likely to be causing cancellations, with the number of mentions for each and one representative quote" is an outcome. You can tell whether you got it. Outcome-shaped prompts do two things at once: they tell the model what to produce, and they tell you how to check it. If you find yourself unable to describe the outcome, that is genuinely useful information — it usually means you have not decided what you want yet, and no amount of prompting technique substitutes for that decision.',
          bullets: [
            'Weak: "Analyse this customer feedback"',
            'Strong: "Find the three issues most likely to be driving cancellations, with mention counts and one quote each"',
            'An outcome is something you can hold the answer against; an activity is not',
            'If you cannot state the outcome, the prompt is not the problem — the thinking is',
          ],
        },
        {
          heading: 'Say What Happens Next',
          body: 'A small addition with a big effect: tell the model what the output is for downstream. "This will be pasted into a slide, so it needs to fit six bullets of under ten words each." "This goes into a formal report, so full sentences and no contractions." "I am going to read this aloud in a meeting, so write it to be spoken." "This is a first draft I will heavily edit, so prioritise coverage over polish." Each of these changes the shape of a good answer substantially, and none of them is obvious from the task alone. Downstream use is one of those facts that lives entirely in your head and costs one sentence to share.',
          bullets: [
            '"This goes on a slide" produces very different text from "this goes in a report"',
            '"I will edit this heavily" tells the model to favour coverage over polish',
            '"I will read this aloud" changes sentence length and rhythm noticeably',
            'Naming the destination is often more effective than describing the style you want',
          ],
        },
        {
          heading: 'One Task, Not Five',
          body: 'Prompts that ask for a summary, an analysis, three recommendations, a risk assessment and a draft email all in one message tend to produce five mediocre things instead of one good one. Attention gets spread and the later items are usually thinner than the earlier ones. Splitting is nearly always better: get the summary right, then use it as input to the analysis, then ask for the recommendations. This is slower in wall-clock terms and much faster in total, because you are not rewriting a compound answer where only part of it was wrong. A reasonable rule: if your prompt contains more than about three distinct deliverables, split it.',
          bullets: [
            'Compound prompts produce compound mediocrity — the later asks get the least effort',
            'Chain instead: output of step one becomes the input to step two',
            'Splitting makes it obvious which step failed when something is wrong',
            'Rule of thumb: more than three deliverables in one message, break it up',
          ],
        },
      ],
    },
    {
      id: 'pr2l4',
      title: 'Show, Do Not Tell',
      slides: [
        {
          heading: 'One Example Beats a Paragraph of Instruction',
          body: 'You can spend four sentences describing the tone you want — "professional but warm, concise, no jargon, no exclamation marks, slightly informal openings" — and still get something off. Or you can paste one message you wrote yourself last month and say "match this voice". The example carries all of it at once, including the parts you could not articulate. This is usually called few-shot prompting, and it is the highest-leverage technique in this entire course. Anywhere you have a real sample of the output you want, showing it is more reliable than describing it. This is especially true for style, formatting and structure, which are exactly the things that are hard to put into words and easy to demonstrate.',
          bullets: [
            'Weak: four sentences describing the tone you want',
            'Strong: "Match the voice of this message I wrote: [paste]"',
            'Examples carry the details you cannot articulate, which is most of style',
            'Two examples are usually enough; twenty is rarely better than three',
          ],
        },
        {
          heading: 'Show the Shape, Not Just the Vibe',
          body: 'Examples are just as useful for structure as for tone. If you want a specific format, give one filled-in instance rather than a description of the fields. Weak: "Write a bug report with a title, steps, expected and actual behaviour, and severity." Strong: paste a real bug report you consider good, then say "write one in exactly this format for the following issue". The model will match the field order, the level of detail, the way you abbreviate, and the conventions you never thought to mention. When you have no real example, write a short fake one — even an obviously invented sample is more precise than a list of field names.',
          bullets: [
            'For formats, one filled-in example beats a list of the fields you want',
            'Made-up examples work too — precision matters more than authenticity here',
            'Include an example of an edge case if edge cases are where things usually go wrong',
            'Say "exactly this format" explicitly, or you may get a loose interpretation',
          ],
        },
        {
          heading: 'When Examples Backfire',
          body: 'Two failure modes are worth knowing. The first is over-copying: if all your examples share an incidental feature — every one starts with a question, every one is exactly three sentences — the model will treat that as the rule, because it cannot tell which properties you meant. Vary the examples on the dimensions that should vary. The second is contradiction: an instruction that says "keep it under 50 words" alongside an example that runs to 200 words puts the model in an impossible position, and behaviour in that situation is unpredictable. When instruction and example disagree, fix the example — it is doing more of the work anyway.',
          bullets: [
            'Examples that all share an accidental trait will teach that trait as a rule',
            'Vary examples on the dimensions you want varied; keep them identical only where it matters',
            'A contradiction between your instructions and your examples produces unpredictable output',
            'When the two conflict, trust the example and rewrite the instruction to match',
          ],
        },
      ],
      roleContent: [
        {
          role: 'general',
          label: 'Everyone',
          body: 'Start a folder of your own good examples. Emails you were pleased with, a summary that worked, a note that got the response you wanted. Pasting one of those is faster than describing what you want.',
          bullets: [
            'Save three or four pieces of your own writing you would be happy to sound like',
            'Reuse them across tasks — the same sample can anchor tone for many prompts',
            'If output is close but not right, add an example rather than more adjectives',
          ],
        },
        {
          role: 'security-se',
          label: 'Security and Privacy',
          body: 'Examples are real material by definition, which makes them the easiest place to leak something without noticing. Build your example library deliberately rather than pasting whatever is open.',
          bullets: [
            'Redact examples once and keep the redacted version — do not re-redact under time pressure',
            'Replace real names, clients and figures with placeholders; the model learns the shape, not the data',
            'Be careful with examples drawn from customer correspondence or internal incidents',
          ],
        },
        {
          role: 'developer',
          label: 'Builders',
          body: 'In an application, examples are the most reliable lever you have over output format — more so than instructions, which tend to erode as prompts grow.',
          bullets: [
            'Prefer a worked example of the exact output shape over a prose description of the schema',
            'Keep examples in version control next to the prompt so drift is visible in diffs',
            'Watch for examples accidentally teaching an incidental pattern — vary anything that should vary',
          ],
        },
        {
          role: 'consultant',
          label: 'Advising Others',
          body: 'When a client says the output does not sound like them, do not debate adjectives. Ask them for three pieces of writing they consider on-brand and put those in the prompt.',
          bullets: [
            'Collect real artefacts early — a style guide is far weaker than three real documents',
            'Show the same task with and without examples; the difference argues for itself',
            'Watch for contradictions between an organisation\'s written style guide and what they actually publish',
          ],
        },
      ],
    },
    {
      id: 'pr2l5',
      title: 'Reasoning First, and the Weakness of Negatives',
      slides: [
        {
          heading: 'Ask for the Working Before the Answer',
          body: 'On problems with several steps — comparisons, calculations, anything where a conclusion depends on a chain of logic — asking the model to work through it before stating the answer generally improves the result. The mechanism is not mysterious: the intermediate steps become part of the text the model is conditioning on, so the conclusion is drawn from worked reasoning rather than produced cold. Frontier models increasingly do some of this by default, but making it explicit still helps, and it has a second benefit that matters more. You can read the working. A wrong answer with visible steps is debuggable; a wrong answer on its own is just a wrong answer.',
          bullets: [
            'Weak: "Which of these three options is cheapest overall?"',
            'Strong: "Work out the three-year total cost for each option, showing the numbers, then state which is cheapest and why"',
            'Visible reasoning lets you find where it went wrong instead of just rejecting the answer',
            'Read the steps — a confident conclusion sitting on a flawed step is the main risk',
          ],
        },
        {
          heading: 'Structured Thinking Beats "Think Step by Step"',
          body: 'The generic instruction helps, but naming the actual steps helps more, because you know your problem and the model does not. For a hiring decision: "First list the requirements. Then score each candidate against each requirement with a one-line justification. Then note where the evidence is thin. Only then give a recommendation." For a bug: "First restate what the code is supposed to do, then trace what it actually does with this input, then identify the first point where they diverge." You are supplying the method, not just asking for effort. This is also where a lot of professional expertise lives — the steps you take are the thing you know that a general-purpose model does not.',
          bullets: [
            'Name the actual steps of your method rather than asking generically for reasoning',
            'Insert a step for "where is the evidence weakest?" before the conclusion',
            'Ask for the conclusion last, explicitly, so it does not lead the reasoning',
            'Your professional method is valuable prompt content — write it down once and reuse it',
          ],
        },
        {
          heading: 'Why "Do Not" Is Weaker Than "Do"',
          body: 'Negative instructions work, but less reliably than positive ones, and it is worth understanding why. A negative tells the model what to avoid without saying what to do instead, which leaves the space of acceptable answers wide open. It also puts the unwanted thing in the context, where it exerts some pull. "Do not use bullet points" is weaker than "write this as three flowing paragraphs". "Do not be too formal" is weaker than "write it the way you would message a colleague you like". The practical rule: whenever you catch yourself writing a "do not", ask what you want instead and write that. Keep the negative too if it is a hard boundary, but never let it be the only instruction.',
          bullets: [
            'Weak: "Do not make it sound corporate." Strong: "Write it the way you would explain it to a friend over coffee."',
            'Weak: "Do not include a conclusion." Strong: "End on the last recommendation, with no summary section."',
            'A negative alone leaves everything else permitted; a positive narrows the target',
            'Keep hard prohibitions, but always pair them with the desired behaviour',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'What does assigning a role or perspective in a prompt actually do?',
      options: [
        'It gives the model access to specialised knowledge it otherwise withholds',
        'It switches the model into a different underlying system',
        'It increases the accuracy of factual claims in that field',
        'It selects vocabulary, depth and priorities from general capability it already has',
      ],
      correct: 3,
    },
    {
      q: 'Which is generally the more useful thing to specify?',
      options: [
        'The writer\'s job title, since it sets expertise',
        'The reader and what they already know, since it determines what needs to be said',
        'The word count, since everything else follows from length',
        'The date, so the model knows how current to be',
      ],
      correct: 1,
    },
    {
      q: 'You want genuinely useful feedback on a proposal. Which prompt is most likely to deliver it?',
      options: [
        '"What do you think of this proposal?"',
        '"Please give me honest feedback on this proposal."',
        '"You are the budget holder looking for a reason to reject this. Give your three strongest objections, ranked."',
        '"Rate this proposal out of ten and explain the score."',
      ],
      correct: 2,
    },
    {
      q: 'Why does stating constraints up front beat correcting the answer afterwards?',
      options: [
        'They rule out whole categories of unusable answers before they are generated',
        'Constraints make the model process the request faster',
        'Later messages are given less weight than earlier ones',
        'Constraints reduce the cost of each request',
      ],
      correct: 0,
    },
    {
      q: 'Your prompt asks for a summary, an analysis, three recommendations and a draft email in one message. What usually happens?',
      options: [
        'The model handles all four equally well since they are related',
        'The model will ask you which one to do first',
        'Only the first item is answered and the rest are ignored',
        'You get four mediocre outputs, with the later items thinnest',
      ],
      correct: 3,
    },
    {
      q: 'All five examples you supplied happen to begin with a rhetorical question. What is the likely effect?',
      options: [
        'The model ignores opening style and focuses on content',
        'It averages the openings out across your examples',
        'It treats "begins with a rhetorical question" as a rule you intended',
        'It asks you to clarify whether that pattern is deliberate',
      ],
      correct: 2,
    },
    {
      q: 'Your instructions say "under 50 words" but your example is 200 words long. What should you do?',
      options: [
        'Leave it — the explicit instruction always wins over the example',
        'Repeat the word limit three times to reinforce it',
        'Fix the example to match, since the example does most of the work',
        'Remove all examples, as they conflict with instructions by nature',
      ],
      correct: 2,
    },
    {
      q: 'Why is "do not use bullet points" weaker than "write this as three flowing paragraphs"?',
      options: [
        'Negative instructions are ignored entirely by language models',
        'Positive instructions are processed earlier in the prompt',
        'A negative rules one thing out but leaves everything else open, while a positive names the target',
        'Bullet points are a special case that cannot be suppressed',
      ],
      correct: 2,
    },
  ],
};

export default prM2;
