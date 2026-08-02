import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE (14–18)
 * ------------------------------------------------------------------ */

export const NextWordPredictionDiagram = () => {
  const tokens = ['The', 'best', 'thing', 'about', 'summer', 'is', 'the', '?'];
  const candidates = [
    { word: 'sunshine', bar: 88, pct: '34%', chosen: true },
    { word: 'beach', bar: 49, pct: '19%', chosen: false },
    { word: 'freedom', bar: 31, pct: '12%', chosen: false },
    { word: 'heat', bar: 21, pct: '8%', chosen: false },
    { word: 'every other token', bar: 70, pct: '27%', chosen: false }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="A language model is a next-token guesser, not a fact lookup — it answers with what usually follows, not with what it checked">
      <defs>
        <marker id="arrowNWP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One token at a time</text>
      <text x="60" y="40" fill={COLORS.slate500} fontSize="10" fontWeight="700">THE TEXT SO FAR</text>

      {tokens.map((t, i) => (
        <g key={i}>
          <rect
            x={60 + i * 88}
            y="48"
            width="78"
            height="40"
            rx="6"
            fill={i === 7 ? COLORS.blueLight : COLORS.white}
            stroke={i === 7 ? COLORS.blue : COLORS.slate300}
            strokeWidth="2"
            strokeDasharray={i === 7 ? '5 4' : undefined}
          />
          <text x={60 + i * 88 + 39} y="73" textAnchor="middle" fill={i === 7 ? COLORS.blue : COLORS.slate900} fontSize="13" fontWeight={i === 7 ? '700' : '600'}>{t}</text>
        </g>
      ))}

      <line x1="400" y1="92" x2="400" y2="114" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowNWP)" />

      <rect x="280" y="118" width="240" height="52" rx="8" fill={COLORS.slate700} />
      <text x="400" y="141" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">Language model</text>
      <text x="400" y="159" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">scores every token in its vocabulary</text>

      <line x1="400" y1="170" x2="400" y2="186" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowNWP)" />

      <rect x="100" y="190" width="600" height="176" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="400" y="208" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontWeight="700">HOW LIKELY IS EACH POSSIBLE NEXT TOKEN?</text>

      {candidates.map((c, i) => {
        const y = 216 + i * 30;
        return (
          <g key={i}>
            <text x="280" y={y + 15} textAnchor="end" fill={c.chosen ? COLORS.slate900 : COLORS.slate600} fontSize="11" fontWeight={c.chosen ? '700' : '400'}>{c.word}</text>
            <rect x="290" y={y} width="260" height="20" rx="4" fill={COLORS.slate100} />
            <rect x="290" y={y} width={c.bar} height="20" rx="4" fill={c.chosen ? COLORS.blue : COLORS.blueMid} />
            <text x="558" y={y + 15} fill={c.chosen ? COLORS.blue : COLORS.slate500} fontSize="11" fontWeight={c.chosen ? '700' : '400'}>{c.pct}</text>
            {c.chosen && (
              <g>
                <rect x="600" y={y} width="88" height="20" rx="10" fill={COLORS.blue} />
                <text x="644" y={y + 14} textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">CHOSEN</text>
              </g>
            )}
          </g>
        );
      })}

      <rect x="100" y="380" width="600" height="46" rx="8" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="400" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">The best thing about summer is the sunshine</text>
      <text x="400" y="417" textAnchor="middle" fill={COLORS.slate600} fontSize="10">the picked token is glued on the end, and the whole thing runs again</text>

      <text x="400" y="448" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Nothing here is a database lookup — a confident sentence is just a chain of likely tokens</text>
    </DiagramFrame>
  );
};

export const TrainingVsUsingDiagram = () => {
  const panels = [
    {
      x: 30,
      color: COLORS.amber,
      head: 'TRAINING — happens once, before you ever see it',
      steps: [
        { t: 'Billions of examples go in', s: 'books, code, web pages, conversations' },
        { t: 'Predict, compare, adjust', s: 'the model guesses the next token, checks the', s2: 'real one, and nudges its weights a fraction' },
        { t: 'Finished weights come out', s: 'a fixed file of numbers — that file is the model' }
      ],
      facts: ['Takes weeks or months of compute', 'Costs millions and needs a datacentre', 'Done by the lab, long before your chat']
    },
    {
      x: 410,
      color: COLORS.blue,
      head: 'USING IT — happens every single time you ask',
      steps: [
        { t: 'One prompt goes in', s: 'your question, plus the chat so far' },
        { t: 'The frozen weights run', s: 'one pass through the same unchanged numbers', s2: 'for every token it writes back to you' },
        { t: 'An answer comes out', s: 'the weights are exactly as they were before' }
      ],
      facts: ['Takes a second or two', 'Costs a fraction of a penny', 'Happens millions of times a day']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="Training builds the model, using it only reads the model — your chat does not teach it anything on the spot">
      <defs>
        <marker id="arrowTVU" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two completely different things people both call &quot;AI&quot;</text>

      {panels.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="42" width="360" height="340" rx="10" fill={COLORS.white} stroke={p.color} strokeWidth="2" />
          <rect x={p.x} y="42" width="360" height="32" rx="10" fill={p.color} />
          <text x={p.x + 180} y="63" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{p.head}</text>

          {p.steps.map((s, j) => {
            const y = j === 0 ? 88 : j === 1 ? 158 : 240;
            const h = j === 1 ? 64 : 52;
            return (
              <g key={j}>
                <rect x={p.x + 20} y={y} width="320" height={h} rx="8" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
                <text x={p.x + 180} y={y + 22} textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontWeight="700">{s.t}</text>
                <text x={p.x + 180} y={y + 40} textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{s.s}</text>
                {s.s2 && <text x={p.x + 180} y={y + 55} textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{s.s2}</text>}
                {j < 2 && <line x1={p.x + 180} y1={y + h} x2={p.x + 180} y2={y + h + 14} stroke={COLORS.slate400} strokeWidth="2" markerEnd="url(#arrowTVU)" />}
              </g>
            );
          })}

          {p.facts.map((f, j) => (
            <g key={j}>
              <circle cx={p.x + 32} cy={312 + j * 20} r="3" fill={p.color} />
              <text x={p.x + 46} y={316 + j * 20} fill={COLORS.slate700} fontSize="10.5">{f}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="398" width="740" height="46" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="400" y="419" textAnchor="middle" fill={COLORS.slate900} fontSize="11.5" fontWeight="700">Correcting the model in a chat does not update it — it only adds text to that one conversation</text>
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate600} fontSize="10">Your messages may still be stored, and may be used to help train a future version — that is a separate decision</text>
    </DiagramFrame>
  );
};

export const PromptAnatomyDiagram = () => {
  const parts = [
    { tag: 'ROLE + CONTEXT', text: 'You are helping me revise for GCSE geography.' },
    { tag: 'TASK', text: 'Explain why sea levels are rising.' },
    { tag: 'FORMAT', text: 'Five bullet points, then one summary line.' },
    { tag: 'LENGTH', text: 'Under 150 words in total.' },
    { tag: 'AUDIENCE', text: 'Write for a 15-year-old, no science jargon.' },
    { tag: 'EXAMPLE', text: 'Match this style: ice melts, water expands, coasts shrink.' }
  ];
  const weakOut = ['A generic 600-word essay', 'No angle you can actually use', 'Wrong length for the task', 'Reads like every other answer', 'You end up rewriting it anyway'];
  const strongOut = ['Five tight bullets plus a one-line summary', 'Under 150 words, in plain language', 'Pitched at a 15-year-old, no jargon', 'Usable straight away — maybe one tweak'];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="Six named parts turn a wish into a brief — the model cannot guess the constraints you never wrote down">
      <defs>
        <marker id="arrowPA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Anatomy of a prompt that works</text>

      {/* Weak side */}
      <rect x="30" y="44" width="250" height="28" rx="8" fill={COLORS.red} />
      <text x="155" y="63" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">WEAK PROMPT</text>
      <rect x="30" y="80" width="250" height="48" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="155" y="110" textAnchor="middle" fill={COLORS.slate900} fontSize="12" fontStyle="italic">write about climate change</text>
      <line x1="155" y1="130" x2="155" y2="160" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowPA)" />
      <text x="30" y="176" fill={COLORS.slate500} fontSize="10" fontWeight="700">WHAT YOU GET BACK</text>
      <rect x="30" y="184" width="250" height="122" rx="8" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      {weakOut.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={205 + i * 22} r="3" fill={COLORS.red} />
          <text x="60" y={209 + i * 22} fill={COLORS.slate700} fontSize="10">{t}</text>
        </g>
      ))}
      <rect x="30" y="322" width="250" height="52" rx="8" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="155" y="344" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">Vague in, vague out</text>
      <text x="155" y="362" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">the model had to guess what you meant</text>

      {/* Strong side */}
      <rect x="300" y="44" width="470" height="28" rx="8" fill={COLORS.emerald} />
      <text x="535" y="63" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">STRONG PROMPT — six parts, each doing a job</text>
      {parts.map((p, i) => {
        const y = 80 + i * 42;
        return (
          <g key={i}>
            <rect x="306" y={y} width="458" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.slate200} strokeWidth="1.5" />
            <rect x="312" y={y + 6} width="110" height="24" rx="12" fill={COLORS.emerald} />
            <text x="367" y={y + 22} textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{p.tag}</text>
            <text x="432" y={y + 23} fill={COLORS.slate900} fontSize="10.5">{p.text}</text>
          </g>
        );
      })}
      <line x1="535" y1="326" x2="535" y2="352" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowPA)" />
      <rect x="300" y="356" width="470" height="112" rx="8" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="2" />
      <text x="316" y="378" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT YOU GET BACK</text>
      {strongOut.map((t, i) => (
        <g key={i}>
          <circle cx="322" cy={398 + i * 20} r="3" fill={COLORS.emerald} />
          <text x="334" y={402 + i * 20} fill={COLORS.slate700} fontSize="10.5">{t}</text>
        </g>
      ))}

      <text x="400" y="490" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Every part you leave out is a decision you have handed to the model</text>
    </DiagramFrame>
  );
};

export const VerifyBeforeYouShareDiagram = () => {
  const questions = [
    {
      q: '1 · Is a trusted source reporting it?',
      s: 'Search the claim itself, not the post. Two independent newsrooms, not two reposts.',
      good: 'Yes — several outlets, separately',
      bad: 'No, or only aggregator accounts'
    },
    {
      q: '2 · Can you find the original?',
      s: 'Earliest post, original account, original file. Reverse-image search the frame.',
      good: 'Yes — traced back to a source',
      bad: 'Only reposts of reposts, no origin'
    },
    {
      q: '3 · Does the detail hold up?',
      s: 'Hands, text on signs, shadows, edges, lip sync, weather, timestamps, background.',
      good: 'Consistent all the way through',
      bad: 'Warped detail, odd audio, no metadata'
    },
    {
      q: '4 · What does the account gain?',
      s: 'Money, outrage, followers, a sale, a political win. Motive is evidence too.',
      good: 'Nothing obvious to gain',
      bad: 'Clear incentive to make you share'
    }
  ];
  const outcomes = [
    { x: 60, cx: 170, color: COLORS.emerald, head: 'SHARE', l1: 'The checks pass.', l2: 'Post the source link alongside it.' },
    { x: 290, cx: 400, color: COLORS.amber, head: 'CHECK FURTHER', l1: 'Mixed signals.', l2: 'Ask a teacher or a fact-check site.' },
    { x: 520, cx: 630, color: COLORS.red, head: 'DO NOT SHARE', l1: 'Any red flag, or you cannot tell.', l2: 'Staying quiet costs you nothing.' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Four cheap checks beat one gut feeling — and &quot;I cannot tell&quot; is a reason not to share, not a reason to share">
      <defs>
        <marker id="arrowVBS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Before you hit share</text>

      <rect x="60" y="38" width="680" height="40" rx="8" fill={COLORS.slate700} />
      <text x="400" y="63" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">A shocking image, clip or claim lands in your feed</text>
      <line x1="260" y1="78" x2="260" y2="98" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowVBS)" />

      {questions.map((item, i) => {
        const y = 100 + i * 76;
        return (
          <g key={i}>
            <rect x="60" y={y} width="400" height="58" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
            <text x="76" y={y + 24} fill={COLORS.slate900} fontSize="12" fontWeight="700">{item.q}</text>
            <text x="76" y={y + 43} fill={COLORS.slate500} fontSize="9.5">{item.s}</text>

            <rect x="490" y={y + 2} width="280" height="26" rx="6" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="1.5" />
            <circle cx="504" cy={y + 15} r="4" fill={COLORS.emerald} />
            <text x="516" y={y + 19} fill={COLORS.slate700} fontSize="9.5">{item.good}</text>

            <rect x="490" y={y + 30} width="280" height="26" rx="6" fill="#fef2f2" stroke={COLORS.red} strokeWidth="1.5" />
            <circle cx="504" cy={y + 43} r="4" fill={COLORS.red} />
            <text x="516" y={y + 47} fill={COLORS.slate700} fontSize="9.5">{item.bad}</text>

            {i < 3 && <line x1="260" y1={y + 58} x2="260" y2={y + 74} stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowVBS)" />}
          </g>
        );
      })}

      <line x1="260" y1="386" x2="260" y2="396" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="170" y1="396" x2="630" y2="396" stroke={COLORS.slate500} strokeWidth="2" />
      {[170, 400, 630].map((x, i) => (
        <line key={i} x1={x} y1="396" x2={x} y2="404" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowVBS)" />
      ))}

      {outcomes.map((o, i) => (
        <g key={i}>
          <rect x={o.x} y="406" width="220" height="70" rx="8" fill={COLORS.white} stroke={o.color} strokeWidth="2" />
          <rect x={o.x} y="406" width="220" height="24" rx="8" fill={o.color} />
          <text x={o.cx} y="423" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{o.head}</text>
          <text x={o.cx} y="450" textAnchor="middle" fill={COLORS.slate900} fontSize="10" fontWeight="600">{o.l1}</text>
          <text x={o.cx} y="466" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{o.l2}</text>
        </g>
      ))}

      <text x="400" y="496" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Sharing is publishing — once it is out of your account, the correction never travels as far</text>
    </DiagramFrame>
  );
};

export const DigitalFootprintDiagram = () => {
  const journey = [
    { x: 30, w: 170, step: '1 · YOU', t: 'You type a message', s: 'question, homework, a photo, a secret' },
    { x: 230, w: 170, step: '2 · THE TRIP', t: 'It crosses the internet', s: 'encrypted in transit, not invisible' },
    { x: 430, w: 170, step: '3 · THE PROVIDER', t: 'Their servers process it', s: 'the model runs, the answer comes back' },
    { x: 630, w: 140, step: '4 · THE COPY', t: 'A copy may remain', s: 'on their systems' }
  ];
  const next = [
    { x: 30, cx: 150, color: COLORS.blue, head: 'RETENTION', lines: ['Kept for a period set by policy', 'Days, months, or until you delete', 'Deleting a chat may not clear backups'] },
    { x: 280, cx: 400, color: COLORS.amber, head: 'HUMAN REVIEW', lines: ['Staff may read sampled conversations', 'For safety, abuse and quality checks', 'A small sample — but it could be yours'] },
    { x: 530, cx: 650, color: COLORS.slate700, head: 'TRAINING USE', lines: ['May help train a future model', 'Free consumer tiers often default to yes', 'School and work tiers usually default to no'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 436" caption="Everything you type leaves your device — settings shrink the footprint, but only what you never type is guaranteed private">
      <defs>
        <marker id="arrowDF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>

      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where your words actually go</text>

      {journey.map((j, i) => (
        <g key={i}>
          <rect x={j.x} y="42" width={j.w} height="72" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <text x={j.x + j.w / 2} y="62" textAnchor="middle" fill={COLORS.blue} fontSize="9" fontWeight="700">{j.step}</text>
          <text x={j.x + j.w / 2} y="82" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{j.t}</text>
          <text x={j.x + j.w / 2} y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="9">{j.s}</text>
          {i < 3 && <line x1={j.x + j.w} y1="78" x2={j.x + j.w + 26} y2="78" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowDF)" />}
        </g>
      ))}

      <line x1="700" y1="114" x2="700" y2="128" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="150" y1="128" x2="700" y2="128" stroke={COLORS.slate500} strokeWidth="2" />
      {[150, 400, 650].map((x, i) => (
        <line key={i} x1={x} y1="128" x2={x} y2="144" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowDF)" />
      ))}

      {next.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y="146" width="240" height="104" rx="8" fill={COLORS.white} stroke={n.color} strokeWidth="2" />
          <rect x={n.x} y="146" width="240" height="26" rx="8" fill={n.color} />
          <text x={n.cx} y="164" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{n.head}</text>
          {n.lines.map((l, j) => (
            <text key={j} x={n.x + 12} y={196 + j * 20} fill={j === 0 ? COLORS.slate900 : COLORS.slate600} fontSize="9.5" fontWeight={j === 0 ? '600' : '400'}>{l}</text>
          ))}
        </g>
      ))}

      <line x1="400" y1="250" x2="400" y2="274" stroke={COLORS.slate500} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowDF)" />

      <rect x="30" y="280" width="360" height="118" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="280" width="360" height="28" rx="8" fill={COLORS.emerald} />
      <text x="210" y="299" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">SETTINGS YOU CAN CHANGE</text>
      {['Turn off chat history and training use', 'Delete conversations and account data', 'Check what a school or work account allows'].map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={328 + i * 22} r="3" fill={COLORS.emerald} />
          <text x="60" y={332 + i * 22} fill={COLORS.slate700} fontSize="10.5">{t}</text>
        </g>
      ))}

      <rect x="410" y="280" width="360" height="118" rx="8" fill={COLORS.white} stroke={COLORS.slate900} strokeWidth="2" />
      <rect x="410" y="280" width="360" height="28" rx="8" fill={COLORS.slate900} />
      <text x="590" y="299" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">THE CONTROL THAT ALWAYS WORKS</text>
      {['What you decide not to type in the first place', 'No passwords, addresses or ID numbers', 'Nothing about a friend they would not post'].map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={328 + i * 22} r="3" fill={COLORS.slate900} />
          <text x="440" y={332 + i * 22} fill={COLORS.slate700} fontSize="10.5">{t}</text>
        </g>
      ))}

      <text x="400" y="424" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Assume a human could read it one day — then decide whether to send it</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AI EVALS PRACTITIONER
 * ------------------------------------------------------------------ */
