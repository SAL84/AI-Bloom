import type { CourseModule } from '../../types/course';

const prM5: CourseModule = {
  id: 'pr-m5',
  title: 'Prompting for Real Work',
  icon: 'brain',
  summary: 'Turning one-off requests into reusable assets, sharing them across a team, supplying your own material safely, and recognising the point where a better prompt is no longer the answer.',
  lessons: [
    {
      id: 'pr5l1',
      title: 'Prompts You Reuse',
      slides: [
        {
          heading: 'Stop Rewriting the Same Prompt',
          body: 'Most people prompt from scratch every time, including for tasks they do weekly. Every Monday they rewrite roughly the same request for a status summary, get roughly the same mediocre answer, and edit it in roughly the same way. The alternative takes twenty minutes once. Take a task you repeat, write the best prompt you can for it, use it a few times, and each time you have to correct the output, fold that correction back into the prompt permanently. After four or five rounds you have something that produces usable output on the first try. This is the difference between using AI and having a small set of tools you built.',
          bullets: [
            'Pick tasks by frequency, not by difficulty — weekly beats impressive',
            'Every correction you make twice belongs in the prompt permanently',
            'Four or five improvement rounds is usually enough to reach first-try usable',
            'Keep them somewhere you will actually find them, not scattered in old chats',
          ],
        },
        {
          heading: 'Build It With Slots',
          body: 'A reusable prompt is a template with obvious gaps. Everything constant lives in the template; everything variable becomes a clearly marked slot. A weekly update prompt: "You are writing a weekly update for [AUDIENCE], who care most about [WHAT THEY CARE ABOUT]. Format: three sections — shipped, in progress, blocked. Each item one line, plain language, no adjectives. Lead with anything that changes a decision. Do not include work that has not started. Raw notes: [PASTE NOTES]." Capital-letter slots are easy to spot and hard to leave unfilled by accident. Keep the slot list short — a template with eleven variables is not a template, it is a form nobody completes.',
          bullets: [
            'Constant parts in the template, variable parts as clearly marked slots',
            'Use an obvious slot convention such as [AUDIENCE] so blanks are visible',
            'Three or four slots is usually the practical limit before people stop using it',
            'Put the pasted material last, under a labelled heading',
          ],
        },
        {
          heading: 'Test It Like a Tool',
          body: 'A prompt you will rely on deserves a small amount of testing, and this is where a surprising number of team prompt libraries fall over. Run it on three or four real cases, not one — including a hard case and an edge case where the input is messy or incomplete. Because output varies between runs, one good result is not evidence of reliability. Look specifically at how it behaves when information is missing: does it say so, or does it invent something? Adding one line such as "if the notes do not say, write \'not stated\' rather than guessing" is often the difference between a template you can trust and one that quietly produces confident fiction on a bad week.',
          bullets: [
            'Test on several real cases including a messy one, not on your best example',
            'One good run is not evidence — variation between runs is normal',
            'Check behaviour when input is incomplete; that is where templates fail badly',
            'Add an explicit instruction for missing information: "write not stated rather than guessing"',
          ],
        },
      ],
    },
    {
      id: 'pr5l2',
      title: 'Prompts as Team Assets',
      slides: [
        {
          heading: 'One Person\'s Good Prompt Is Everyone\'s',
          body: 'In most teams, prompting knowledge is invisible. One person has quietly worked out a genuinely good prompt for meeting notes; everyone else is still writing "summarise this" and being unimpressed. Nobody is hiding anything — it simply never occurs to people that a prompt is a shareable artefact rather than something you type and discard. Making them shared changes the economics: the twenty minutes one person spends refining a prompt pays off across everyone who uses it, and the improvements compound because more people hit more edge cases. The bar is low. A shared document with a handful of good prompts, each with a note on what it is for, beats nothing by a very large margin.',
          bullets: [
            'Prompting skill spreads through sharing artefacts, not through training sessions',
            'A shared doc with ten good prompts is enough to start — do not over-engineer it',
            'Label each prompt with what it is for and what it is not for',
            'The refinement cost is paid once and the benefit is spread across the team',
          ],
        },
        {
          heading: 'Version Them Like Anything Else You Rely On',
          body: 'Once several people depend on a prompt, it needs the ordinary discipline of a shared asset. Keep the current version in one place rather than in five copies drifting apart in different inboxes. Note when it changed and why, because "we changed the output format in March" explains a lot of confusion later. Keep the old version until the new one has been used in anger. And name an owner — shared assets with no owner decay quietly, and prompts decay in a particularly hard-to-notice way, because the output keeps looking fine while slowly drifting from what anyone actually wanted. None of this needs tooling. A dated document and a named person is genuinely sufficient for most teams.',
          bullets: [
            'One canonical copy — forked copies drift and nobody knows which is current',
            'Record what changed and why; output changes confuse people who missed the update',
            'Name an owner, or the library rots while still looking healthy',
            'A dated shared document is enough; the discipline matters more than the tooling',
          ],
        },
        {
          heading: 'Document the Judgement, Not Just the Text',
          body: 'The most valuable thing to write down alongside a shared prompt is not the prompt. It is what someone learned using it. Which cases it handles badly. What to check in the output before sending it. Which correction people keep having to make. Whether the thing it produces is a final draft or a starting point. A prompt with three lines of honest usage notes is far more useful than a prompt on its own, because it transfers the judgement rather than just the words — and judgement is the part that takes weeks to acquire and thirty seconds to write down once someone has it.',
          bullets: [
            'Note the known failure cases — that is the expensive knowledge',
            'State what to check before the output is used or sent',
            'Say plainly whether the result is a draft or something near-final',
            'Three lines of usage notes double the value of any shared prompt',
          ],
        },
      ],
    },
    {
      id: 'pr5l3',
      title: 'Giving It Your Own Material',
      slides: [
        {
          heading: 'Your Material Beats Its General Knowledge',
          body: 'For anything specific to your world, pasting the actual material is worth more than any amount of clever instruction. The real meeting transcript, the real policy document, the real thread of correspondence, the real numbers. General knowledge produces general answers; your material produces answers about your situation. Two habits make this work much better. Say what to do with the material, not just that it is there — "using only the document below, answer these four questions" is very different from "here is a document, thoughts?". And say what to do when the material does not contain the answer, because otherwise the gap gets filled.',
          bullets: [
            'Weak: "What are best practices for handover notes?"',
            'Strong: "Using only the three handover notes below, list what each one covers and what is missing from all three."',
            '"Using only the material provided" meaningfully constrains the answer',
            'Add: "if the material does not say, write \'not stated\' rather than inferring"',
          ],
        },
        {
          heading: 'Quote It Back So You Can Check',
          body: 'When you supply a document, ask the answer to point at it. "For each finding, quote the sentence it came from." "Give the section number beside each point." "Separate what the document says from what you inferred." This turns an answer you have to trust into one you can spot-check in seconds, and it has a second effect: an answer that must be anchored to specific text has much less room to drift into general knowledge dressed up as your document. It is also how you catch the most annoying failure mode with long documents — a summary that is broadly right but silently missed the one section that mattered most to you.',
          bullets: [
            'Ask for a quoted sentence or section number beside every finding',
            'Ask it to separate what the document states from what it inferred',
            'Anchored answers drift much less into generic content',
            'Spot-check two or three quotes rather than re-reading the whole source',
          ],
        },
        {
          heading: 'What Not to Paste',
          body: 'Pasting is frictionless, which is exactly the problem — it is easier to paste the whole file than to extract the two paragraphs the task needs. Before you paste, ask two questions. Would I be comfortable if this text appeared somewhere I did not control? And does the task actually need this part? Other people\'s personal information, customer records, anything under a confidentiality obligation, credentials of any kind, and material you do not own are all worth pausing over. Most of the time the task works just as well with names replaced by placeholders and figures rounded. Know your organisation\'s rules and which tools are approved — and remember that pasting into a personal account is a different decision from using a sanctioned one.',
          bullets: [
            'Paste the part the task needs, not the whole document because it was easier',
            'Placeholders and rounded figures usually preserve the task completely',
            'Credentials, personal data and confidential material deserve a deliberate pause',
            'Know which tools are approved where you work; personal accounts are a separate decision',
          ],
        },
      ],
    },
    {
      id: 'pr5l4',
      title: 'The Ceiling of Prompting',
      slides: [
        {
          heading: 'Prompting Fixes Some Problems and Not Others',
          body: 'Prompting is the right first move for an enormous range of tasks, and it is genuinely surprising how far it goes. But it has a ceiling, and knowing where it sits saves a lot of wasted effort. Prompting is the answer when the gap is instruction: the model could do this if it understood what you wanted. It is not the answer when the gap is knowledge — the information simply is not available to it, and the fix is supplying that information rather than asking more elegantly. It is not the answer when the gap is capability — the task needs precise calculation, live data, or an action in a real system. And it is not the answer when the gap is judgement that should not be delegated at all.',
          bullets: [
            'Instruction gap → prompting is exactly the right tool',
            'Knowledge gap → supply the material, or use a system that retrieves it',
            'Capability gap → use a real tool: a calculator, a database, a proper source',
            'Judgement gap → this one is yours, and no prompt changes that',
          ],
        },
        {
          heading: 'Signals You Have Hit It',
          body: 'A few reliable signs. Your prompt is now longer than the output and still not working. You are handling exceptions in the prompt — "if it is a refund, do X, unless the customer is on the old plan, in which case Y" — which means you are writing software in prose. You need the same answer every single time and are not getting it. You are asking for something that depends on information nobody wrote down. Or three genuinely different approaches have all failed. Each of these points somewhere other than a better prompt: a different tool, a properly built process, a person who knows, or accepting that the task is yours to do.',
          bullets: [
            'The prompt is longer than the output and still unreliable',
            'You are encoding branching rules in prose — that is a job for actual software',
            'You need identical output every time and cannot get it from wording alone',
            'Three different approaches failed, not three rewordings',
          ],
        },
        {
          heading: 'The Skill Underneath',
          body: 'Here is the part that outlasts every tool. To write a good prompt you must decide what you want, who it is for, what a good result looks like, and what would make it wrong. That is specification, and it is the same skill behind a clear brief, a good delegation, and a well-defined problem. It is why the interfaces keep getting easier while the underlying ability keeps mattering — and why people who can specify clearly get more from every tool they touch, including the ones that do not exist yet. If you cannot describe the outcome you want, no amount of technique produces it. The prompting is the easy half; deciding what you actually want is the work.',
          bullets: [
            'Prompting is applied specification — the same skill as a good brief or a clear delegation',
            'Interfaces will keep improving; knowing what you want will not become obsolete',
            'The habits transfer to briefing people, not just models',
            'If you cannot say what good looks like, that is your first task, not the model\'s',
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Which task is the best candidate for building a reusable prompt template?',
      options: [
        'A one-off creative brainstorm you may never repeat',
        'The single hardest analytical question you have faced this year',
        'Anything you have only ever done once',
        'A weekly status summary you write in roughly the same way every time',
      ],
      correct: 3,
    },
    {
      q: 'You are testing a prompt template you plan to share. What is the most important thing to test?',
      options: [
        'That it works on your cleanest example',
        'That it produces output of exactly the right length',
        'How it behaves on messy or incomplete input, where templates fail worst',
        'That it never uses bullet points',
      ],
      correct: 2,
    },
    {
      q: 'Why does one successful run not prove a template is reliable?',
      options: [
        'Output varies between runs, so a single result is weak evidence',
        'Templates degrade after their first use',
        'The first run always uses different settings',
        'Reliability can only be measured over hundreds of runs',
      ],
      correct: 0,
    },
    {
      q: 'What is the most valuable thing to record alongside a shared team prompt?',
      options: [
        'The date it was written and who wrote it',
        'The number of times it has been used',
        'Its known failure cases and what to check before using the output',
        'A list of alternative wordings that were rejected',
      ],
      correct: 2,
    },
    {
      q: 'You paste a policy document and ask questions about it. Which addition most improves your ability to check the answer?',
      options: [
        'Asking for the answer in a more formal tone',
        'Asking for a quoted sentence or section number beside each finding',
        'Asking it to be as concise as possible',
        'Asking it to rate its own confidence out of ten and nothing else',
      ],
      correct: 1,
    },
    {
      q: 'Your prompt now contains branching rules — "if it is a refund do X, unless the customer is on the old plan, then Y". What does this usually indicate?',
      options: [
        'The prompt is maturing and should be shared widely',
        'The model needs the rules repeated for emphasis',
        'You should convert the rules to bullet points',
        'You are writing software in prose and have reached the ceiling of prompting',
      ],
      correct: 3,
    },
    {
      q: 'A colleague cannot get good answers about a topic where the needed information was never written down anywhere. What kind of gap is this?',
      options: [
        'An instruction gap — the prompt needs rewording',
        'A formatting gap — the output shape is wrong',
        'A knowledge gap — the fix is supplying the information, not prompting better',
        'A tone gap — the perspective needs changing',
      ],
      correct: 2,
    },
  ],
};

export default prM5;
