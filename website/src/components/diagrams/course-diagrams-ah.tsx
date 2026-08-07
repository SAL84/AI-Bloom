import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ PROMPTING — REST OF MODULE 2 & START OF MODULE 3 ============ */

export const ContextConstraintsDiagram = () => {
  const ctx = [
    { h: 'BACKGROUND', t: 'why this task exists now' },
    { h: 'THE PEOPLE', t: 'who is involved, how carefully to tread' },
    { h: 'HISTORY', t: 'what was tried already, and went badly' },
    { h: 'THE STAKES', t: 'what happens if the answer is wrong' },
  ];
  const fences = [
    'eleven people — four joining by video',
    'budget under 2,000',
    'step-free access for everyone',
    'no alcohol-centred activities',
    'must include an hour of real planning work',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Context supplies what only you know and constraints fence off unusable answers — give both before the answer, not after.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Context closes the gap; constraints fence off the useless answers</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model knows the world in general and your situation not at all — you hold all of the missing pieces</text>

      <rect x="30" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CONTEXT — WHAT ONLY YOU KNOW</text>
      {ctx.map((c, i) => (
        <g key={i}>
          <rect x="46" y={88 + i * 30} width="328" height="26" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x="56" y={104 + i * 30} fill={COLORS.blue} fontSize="6.9" fontWeight="700">{c.h}</text>
          <text x="140" y={104 + i * 30} fill={COLORS.slate600} fontSize="7.8">{c.t}</text>
        </g>
      ))}
      <text x="210" y="230" textAnchor="middle" fill={COLORS.blue} fontSize="7.8" fontStyle="italic">the test: what would a capable freelancer need to know?</text>

      <rect x="410" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CONSTRAINTS — THE FENCES</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8">"Suggest ideas for a one-day team offsite…" plus:</text>
      {fences.map((t, i) => (
        <g key={i}>
          <rect x="426" y={100 + i * 24} width="328" height="20" rx="10" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="590" y={113 + i * 24} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <text x="590" y="234" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">each fence removes a category of useless ideas</text>

      <rect x="30" y="262" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="281" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">SAY WHAT IS OUT OF SCOPE — ANSWERS SPRAWL BY DEFAULT</text>
      <text x="400" y="297" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">"assume the technology choice is fixed" · "I have the customer emails handled" · "no legal advice, we have counsel"</text>
      <text x="400" y="311" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">narrow scope buys depth on one thing — broad scope buys a shallow tour of everything</text>

      <rect x="30" y="336" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="354" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">SUPPLY THE FENCES FIRST, NOT AFTER THE BAD ANSWER</text>
      <text x="400" y="370" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">most people state constraints only once they have seen what they did not want — saying them up front is the whole trick</text>

      <rect x="30" y="394" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CONTEXT IS WHAT ONLY YOU HAVE — CONSTRAINTS MAKE THE ANSWER FIT</text>
      <text x="400" y="431" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a minute spent supplying them saves five minutes of rewriting what comes back</text>
    </DiagramFrame>
  );
};

export const TaskAsOutcomeDiagram = () => {
  const dests = [
    { x: 46, w: 150, t: 'a slide — six short bullets' },
    { x: 208, w: 140, t: 'a report — full sentences' },
    { x: 360, w: 148, t: 'read aloud — spoken rhythm' },
    { x: 520, w: 196, t: 'a rough draft — coverage over polish' },
  ];
  const chain = [
    { x: 60, w: 140, t: 'get the summary right' },
    { x: 240, w: 150, t: 'feed it into the analysis' },
    { x: 430, w: 190, t: 'then ask for the recommendations' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="State the outcome you want and where it goes next — an outcome can be checked, an activity can only be attempted.">
      <defs>
        <marker id="arrowTAOa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Name the result you want, not the activity</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">"analyse this" could mean twenty things — an outcome is something you can hold the answer against</text>

      <rect x="30" y="58" width="360" height="116" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE ACTIVITY — IT PICKS A MEANING</text>
      <text x="46" y="92" fill={COLORS.slate600} fontSize="8.2">"Analyse this customer feedback"</text>
      <text x="46" y="108" fill={COLORS.slate600} fontSize="8.2">twenty possible readings — the model picks</text>
      <text x="46" y="122" fill={COLORS.slate600} fontSize="8.2">one, and you cannot tell whether the</text>
      <text x="46" y="136" fill={COLORS.slate600} fontSize="8.2">answer did the job</text>
      <text x="46" y="160" fill={COLORS.red} fontSize="7.8" fontWeight="700">there is no way to check it</text>

      <rect x="410" y="58" width="360" height="116" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE OUTCOME — YOU CAN CHECK IT</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8.2">"Find the three issues most likely to be</text>
      <text x="426" y="106" fill={COLORS.slate600} fontSize="8.2">driving cancellations, with mention counts</text>
      <text x="426" y="120" fill={COLORS.slate600} fontSize="8.2">and one representative quote for each"</text>
      <text x="426" y="160" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">the answer can be held against the ask</text>

      <text x="400" y="192" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">cannot describe the outcome? that is useful information — you have not decided what you want yet</text>

      <rect x="30" y="206" width="740" height="82" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="206" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="220" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SAY WHAT HAPPENS NEXT — THE DESTINATION SHAPES THE ANSWER</text>
      {dests.map((d, i) => (
        <g key={i}>
          <rect x={d.x} y="234" width={d.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.4" />
          <text x={d.x + d.w / 2} y="251" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{d.t}</text>
        </g>
      ))}
      <text x="400" y="278" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">one sentence about the destination often beats a whole paragraph about style</text>

      <rect x="30" y="302" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="302" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="316" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">ONE TASK, NOT FIVE — CHAIN INSTEAD</text>
      {chain.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="332" width={c.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={c.x + c.w / 2} y="349" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{c.t}</text>
          {i < 2 && <line x1={c.x + c.w + 4} y1="345" x2={chain[i + 1].x - 4} y2="345" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowTAOa)" />}
        </g>
      ))}
      <text x="400" y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">more than three deliverables in one message? split it — compound prompts produce compound mediocrity</text>

      <rect x="30" y="402" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="422" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN OUTCOME TELLS IT WHAT TO MAKE — AND TELLS YOU HOW TO CHECK IT</text>
      <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">state the result, name the destination, and keep it to one job per message</text>
    </DiagramFrame>
  );
};

export const ShowDontTellDiagram = () => {
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="One real example of what you want beats a paragraph describing it — just vary your examples on what should vary, and never contradict them.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One example carries what four sentences of description cannot</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">anywhere you have a sample of what you want, showing beats telling — especially for style and format</text>

      <rect x="30" y="58" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TELLING — A PARAGRAPH OF ADJECTIVES</text>
      <text x="46" y="92" fill={COLORS.slate600} fontSize="8.1">"professional but warm, concise, no jargon,</text>
      <text x="46" y="105" fill={COLORS.slate600} fontSize="8.1">no exclamation marks, slightly informal</text>
      <text x="46" y="118" fill={COLORS.slate600} fontSize="8.1">openings…" — and the voice still comes</text>
      <text x="46" y="131" fill={COLORS.slate600} fontSize="8.1">out slightly off</text>
      <text x="46" y="168" fill={COLORS.red} fontSize="7.8" fontWeight="700">words cannot quite carry a voice</text>

      <rect x="410" y="58" width="360" height="128" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SHOWING — ONE REAL SAMPLE</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8.1">"Match the voice of this message I wrote</text>
      <text x="426" y="105" fill={COLORS.slate600} fontSize="8.1">last month: [pasted]" — the sample carries</text>
      <text x="426" y="118" fill={COLORS.slate600} fontSize="8.1">everything at once, including the parts</text>
      <text x="426" y="131" fill={COLORS.slate600} fontSize="8.1">you could not articulate</text>
      <text x="426" y="168" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">two or three samples are plenty</text>

      <rect x="30" y="200" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="219" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">IT WORKS FOR SHAPE AS WELL AS TONE</text>
      <text x="400" y="235" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">paste one filled-in sample — a good bug report, a past status note — and say "in exactly this format"</text>
      <text x="400" y="249" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">no real one to hand? a made-up sample is still more precise than a list of the fields you want</text>

      <rect x="30" y="274" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="274" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="210" y="288" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHEN EXAMPLES OVER-TEACH</text>
      <text x="46" y="308" fill={COLORS.slate600} fontSize="8">if every sample you give happens to start</text>
      <text x="46" y="321" fill={COLORS.slate600} fontSize="8">with a question, that becomes a rule —</text>
      <text x="46" y="334" fill={COLORS.slate600} fontSize="8">it cannot tell which traits you meant</text>
      <text x="46" y="366" fill={COLORS.amber} fontSize="7.8" fontWeight="700">vary the examples on what should vary</text>

      <rect x="410" y="274" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="274" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="288" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHEN THEY CONTRADICT YOU</text>
      <text x="426" y="308" fill={COLORS.slate600} fontSize="8">"keep it under 50 words" sitting beside a</text>
      <text x="426" y="321" fill={COLORS.slate600} fontSize="8">200-word example is an impossible brief —</text>
      <text x="426" y="334" fill={COLORS.slate600} fontSize="8">the result is unpredictable</text>
      <text x="426" y="366" fill={COLORS.red} fontSize="7.8" fontWeight="700">fix the example — it does most of the work</text>

      <rect x="30" y="400" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CLOSE BUT NOT RIGHT? ADD AN EXAMPLE, NOT MORE ADJECTIVES</text>
      <text x="400" y="437" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">save a few pieces of your own writing you like — one paste anchors tone better than any description</text>
    </DiagramFrame>
  );
};

export const ReasoningFirstDiagram = () => {
  const steps = [
    { x: 46, w: 118, t: 'list the requirements' },
    { x: 180, w: 160, t: 'score each option, with reasons' },
    { x: 356, w: 146, t: 'note where evidence is thin' },
    { x: 518, w: 156, t: 'only then, the recommendation' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Ask for the working you need to check the answer — numbers, assumptions, evidence — and pair every 'do not' with the 'do' you actually want.">
      <defs>
        <marker id="arrowREFa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Ask for working you can check — and say what to do, not what to avoid</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">visible steps make a wrong answer debuggable, and a named target beats a named ban</text>

      <rect x="30" y="58" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE COLD ANSWER</text>
      <text x="46" y="92" fill={COLORS.slate600} fontSize="8.2">"Which of these three options is cheapest?"</text>
      <text x="46" y="106" fill={COLORS.slate600} fontSize="8.2">"Option B." — take it or leave it; if it is</text>
      <text x="46" y="120" fill={COLORS.slate600} fontSize="8.2">wrong, there is nothing to see</text>
      <text x="46" y="146" fill={COLORS.red} fontSize="7.8" fontWeight="700">a bare conclusion cannot be checked</text>

      <rect x="410" y="58" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE ANSWER AFTER THE WORKING</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8.2">"Work out the three-year total for each,</text>
      <text x="426" y="106" fill={COLORS.slate600} fontSize="8.2">showing the numbers, then say which is</text>
      <text x="426" y="120" fill={COLORS.slate600} fontSize="8.2">cheapest and why"</text>
      <text x="426" y="146" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">a flawed step is now findable — read them</text>

      <rect x="30" y="176" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="176" width="740" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="190" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">BETTER STILL — NAME YOUR OWN STEPS; YOU KNOW THE METHOD, IT DOES NOT</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="206" width={s.w} height="28" rx="14" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={s.x + s.w / 2} y="223" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">{s.t}</text>
          {i < 3 && <line x1={s.x + s.w + 3} y1="220" x2={steps[i + 1].x - 3} y2="220" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowREFa)" />}
        </g>
      ))}
      <text x="400" y="250" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">ask for the conclusion last, so it cannot lead the working — your method is valuable prompt content</text>

      <rect x="30" y="274" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="274" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="288" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">"DO NOT…" — THE WEAK FENCE</text>
      <text x="46" y="308" fill={COLORS.slate600} fontSize="8">it says what to avoid but not what to do,</text>
      <text x="46" y="321" fill={COLORS.slate600} fontSize="8">so everything else stays permitted — and</text>
      <text x="46" y="334" fill={COLORS.slate600} fontSize="8">the unwanted thing now sits in view,</text>
      <text x="46" y="347" fill={COLORS.slate600} fontSize="8">exerting a quiet pull</text>
      <text x="46" y="370" fill={COLORS.red} fontSize="7.8" fontWeight="700">"do not sound corporate" — still corporate</text>

      <rect x="410" y="274" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="274" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="288" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">"DO…" — THE NARROW TARGET</text>
      <text x="426" y="308" fill={COLORS.slate600} fontSize="8">"write it the way you would message a</text>
      <text x="426" y="321" fill={COLORS.slate600} fontSize="8">colleague you like"</text>
      <text x="426" y="334" fill={COLORS.slate600} fontSize="8">"end on the last recommendation, with</text>
      <text x="426" y="347" fill={COLORS.slate600} fontSize="8">no summary section"</text>
      <text x="426" y="370" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">a positive names the destination</text>

      <rect x="30" y="398" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="416" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">KEEP THE HARD BANS — JUST NEVER ALONE</text>
      <text x="400" y="432" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">each time you write a "do not", ask what you want instead — and write that beside it</text>

      <rect x="30" y="456" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SHOW THE WORKING, THEN THE ANSWER — AND TURN EVERY BAN INTO A TARGET</text>
      <text x="400" y="493" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">read the steps: a confident conclusion resting on one flawed step is the main risk</text>
    </DiagramFrame>
  );
};

export const AskForStructureDiagram = () => {
  const bars = [300, 280, 296, 240, 288];
  const rows = [
    { y: 106, s: 'Supplier A', d: '10 days', v: 'yes', gap: false },
    { y: 124, s: 'Supplier B', d: '—', v: '?', gap: true },
    { y: 142, s: 'Supplier C', d: '12 days', v: 'yes', gap: false },
  ];
  const shapes = [
    { x: 46, y: 240, t: 'a comparison → a table with named columns' },
    { x: 412, y: 240, t: 'a process → numbered steps' },
    { x: 46, y: 272, t: 'a decision → the verdict first, then the reasoning' },
    { x: 412, y: 272, t: 'data to reuse → named fields, "only the data, no commentary"' },
  ];
  const checks = [
    'a confidence column — high, medium or low',
    'a closing section: "what I could not determine from the material you gave me"',
    'a separate list of the assumptions it made',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Asking for the answer in a shape — a table, numbered steps, named sections — turns something you would have to trust into something you can check.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A paragraph you trust — or a table you can check</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same information in a different shape becomes a different object: gaps and contradictions turn visible</text>

      <rect x="30" y="58" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PROSE — SMOOTH AND HARD TO AUDIT</text>
      {bars.map((w, i) => (
        <rect key={i} x="46" y={88 + i * 9} width={w} height="4" fill={COLORS.slate300} />
      ))}
      <text x="46" y="146" fill={COLORS.slate600} fontSize="8.1">reads well, sounds right — and a missing</text>
      <text x="46" y="159" fill={COLORS.slate600} fontSize="8.1">item or a contradiction hides inside it</text>
      <text x="46" y="183" fill={COLORS.red} fontSize="7.8" fontWeight="700">you read it, nod, and move on</text>

      <rect x="410" y="58" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A TABLE — SCANNABLE AT A GLANCE</text>
      <rect x="426" y="88" width="328" height="18" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1" />
      <text x="496" y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">supplier</text>
      <text x="616" y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">lead time</text>
      <text x="710" y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">2 weeks?</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="426" y={r.y} width="140" height="18" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1" />
          <rect x="566" y={r.y} width="100" height="18" fill={COLORS.white} stroke={r.gap ? COLORS.amber : COLORS.slate300} strokeWidth={r.gap ? 1.5 : 1} strokeDasharray={r.gap ? '4 3' : undefined} />
          <rect x="666" y={r.y} width="88" height="18" fill={COLORS.white} stroke={r.gap ? COLORS.amber : COLORS.slate300} strokeWidth={r.gap ? 1.5 : 1} strokeDasharray={r.gap ? '4 3' : undefined} />
          <text x="496" y={r.y + 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7">{r.s}</text>
          <text x="616" y={r.y + 12} textAnchor="middle" fill={r.gap ? COLORS.amber : COLORS.slate600} fontSize="7" fontWeight={r.gap ? '700' : '400'}>{r.d}</text>
          <text x="710" y={r.y + 12} textAnchor="middle" fill={r.gap ? COLORS.amber : COLORS.emerald} fontSize="7" fontWeight="700">{r.v}</text>
        </g>
      ))}
      <text x="426" y="183" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">the empty cell and the hedge show instantly</text>

      <rect x="30" y="212" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="212" width="740" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="226" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">PICK THE SHAPE FROM WHAT YOU WILL DO NEXT</text>
      {shapes.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width="342" height="26" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x={s.x + 171} y={s.y + 17} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{s.t}</text>
        </g>
      ))}

      <rect x="30" y="322" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="322" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">BUILD THE CHECKING INTO THE FORMAT</text>
      {checks.map((t, i) => (
        <g key={i}>
          <rect x="46" y={350 + i * 22} width="708" height="18" rx="9" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
          <text x="400" y={362 + i * 22} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
        </g>
      ))}

      <rect x="30" y="432" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="452" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">STRUCTURE TURNS "SOUNDS RIGHT" INTO "CAN BE CHECKED"</text>
      <text x="400" y="469" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">name the columns and sections — and give uncertainty a home, or it will be smoothed away</text>
    </DiagramFrame>
  );
};
