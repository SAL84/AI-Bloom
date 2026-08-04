import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ PROMPTING — REST OF MODULE 3 & START OF MODULE 4 ============ */

export const LengthAndToneDiagram = () => {
  const padding = [
    { x: 46, w: 168, t: 'restates your question' },
    { x: 228, w: 168, t: 'praises the topic' },
    { x: 410, w: 168, t: 'closing summary' },
    { x: 592, w: 162, t: 'offer to help further' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Set length with a shape or a container, set tone with a comparison or a sample, and ban the default padding by name.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Length and tone have defaults — override them on purpose</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">word counts and adjectives are weak instruments; shapes, containers and comparisons are strong ones</text>

      <rect x="30" y="58" width="360" height="170" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">LENGTH — SHAPE BEATS ARITHMETIC</text>
      <rect x="46" y="86" width="328" height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="210" y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">"about 40 words" — a steer, not a guarantee</text>
      <rect x="46" y="114" width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="210" y="128" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">"three bullets, maximum one line each"</text>
      <rect x="46" y="142" width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="210" y="156" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">"one paragraph" · "one sentence per item"</text>
      <rect x="46" y="170" width="328" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="210" y="182" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">strongest: name the container —</text>
      <text x="210" y="194" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">"this has to fit in a text message" · "one slide"</text>
      <text x="210" y="216" textAnchor="middle" fill={COLORS.blue} fontSize="7.6" fontStyle="italic">a shape constrains the answer; a number asks for arithmetic</text>

      <rect x="410" y="58" width="360" height="170" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TONE — COMPARE, DO NOT DESCRIBE</text>
      <rect x="426" y="86" width="328" height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.3" strokeDasharray="4 3" />
      <text x="590" y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">"make it professional" — professional where?</text>
      <rect x="426" y="114" width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="128" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">"the way a good colleague explains it in a corridor"</text>
      <rect x="426" y="142" width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="156" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">a pasted sample of your own writing — most precise</text>
      <rect x="426" y="170" width="328" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="590" y="182" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">adjectives only in pairs —</text>
      <text x="590" y="194" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">"warm but not chatty" · "confident but not salesy"</text>
      <text x="590" y="216" textAnchor="middle" fill={COLORS.cyan} fontSize="7.6" fontStyle="italic">name the habits you hate — exclamation marks, "delve"</text>

      <rect x="30" y="242" width="740" height="130" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="242" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="256" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE DEFAULT PADDING — THE SAME FOUR PIECES OF FURNITURE EVERY TIME</text>
      {padding.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="270" width={p.w} height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="4 3" />
          <text x={p.x + p.w / 2} y="284" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">{p.t}</text>
        </g>
      ))}
      <rect x="46" y="300" width="708" height="26" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.8" />
      <text x="400" y="316" textAnchor="middle" fill={COLORS.slate700} fontSize="8.2" fontWeight="700">"Start with the answer. No preamble, no summary at the end, no offer to help."</text>
      <text x="400" y="344" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">one sentence, saved into your standing instructions once — probably the biggest editing-time saver in this course</text>

      <rect x="30" y="386" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="406" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SET LENGTH BY SHAPE, TONE BY COMPARISON — AND CUT THE PADDING BY NAME</text>
      <text x="400" y="423" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">defaults are what you get when you leave the decision to the model — make all three on purpose</text>
    </DiagramFrame>
  );
};

export const EditableDraftsDiagram = () => {
  const bars = [300, 284, 296, 268, 290];
  const sections = [
    { t: 'OPENING', a: 'keep', c: COLORS.emerald },
    { t: 'BACKGROUND', a: 'cut whole', c: COLORS.red },
    { t: 'OPTIONS', a: 'reorder', c: COLORS.amber },
    { t: 'THE ASK', a: 'keep', c: COLORS.emerald },
  ];
  const options = [
    { x: 46, t: 'A — leads with the problem' },
    { x: 266, t: 'B — leads with a story' },
    { x: 486, t: 'C — leads with the number' },
  ];
  const passes = [
    { x: 46, w: 210, t: 'pass 1 — outline only, no prose' },
    { x: 294, w: 220, t: 'pass 2 — fill the approved sections' },
    { x: 552, w: 160, t: 'pass 3 — tone and cuts' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Ask for a draft with visible seams — labelled sections, short options, one pass per dimension — instead of a finished-sounding blob.">
      <defs>
        <marker id="arrowEDDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Editable beats finished — ask for the seams</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same content can arrive as a blob you must rewrite or as pieces you can cut, keep and reorder</text>

      <rect x="30" y="58" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE BLOB — EXPENSIVE TO EDIT</text>
      {bars.map((w, i) => (
        <rect key={i} x="46" y={88 + i * 9} width={w} height="4" fill={COLORS.slate300} />
      ))}
      <text x="46" y="150" fill={COLORS.slate600} fontSize="8.1">smooth, evenly weighted, every sentence</text>
      <text x="46" y="163" fill={COLORS.slate600} fontSize="8.1">entangled with its neighbours — changing one</text>
      <text x="46" y="176" fill={COLORS.slate600} fontSize="8.1">part means re-reading the whole thing</text>
      <text x="46" y="196" fill={COLORS.red} fontSize="7.8" fontWeight="700">polish hides the weak parts</text>

      <rect x="410" y="58" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SEAMS — CHEAP TO EDIT</text>
      {sections.map((s, i) => (
        <g key={i}>
          <rect x="426" y={86 + i * 26} width="328" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.2" />
          <text x="436" y={99 + i * 26} fill={COLORS.slate700} fontSize="7" fontWeight="700">{s.t}</text>
          <text x="744" y={99 + i * 26} textAnchor="end" fill={s.c} fontSize="7" fontWeight="700">{s.a}</text>
        </g>
      ))}
      <text x="426" y="200" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">"labelled sections I can cut and reorder" — say it</text>

      <text x="400" y="222" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">"leave gaps marked [TBC] rather than inventing detail" is a useful standing instruction for anything you will edit</text>

      <rect x="30" y="236" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="236" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="250" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">OPTIONS BEFORE COMMITMENT — WHEN YOU DO NOT YET KNOW WHAT YOU WANT</text>
      {options.map((o, i) => (
        <g key={i}>
          <rect x={o.x} y="262" width="200" height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.4" />
          <text x={o.x + 100} y="277" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{o.t}</text>
        </g>
      ))}
      <rect x="702" y="262" width="52" height="24" rx="12" fill={COLORS.blueLight} stroke={COLORS.cyan} strokeWidth="1.4" />
      <text x="728" y="277" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontWeight="700">pick 1</text>
      <text x="400" y="310" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">two lines each, "clearly different" — then ask for depth on the one you chose; anchoring to a single draft is the trap</text>

      <rect x="30" y="342" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="342" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="356" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">REFINE IN PASSES — ONE DIMENSION PER ROUND</text>
      {passes.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="368" width={p.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="384" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
          {i < 2 && <line x1={p.x + p.w + 4} y1="381" x2={passes[i + 1].x - 4} y2="381" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowEDDa)" />}
        </g>
      ))}
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">fixing the shape costs one line at outline stage — and a full regeneration after 900 words have been written around it</text>

      <rect x="30" y="448" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="468" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ASK FOR EDITABLE, NOT FINISHED — SEAMS, THEN OPTIONS, THEN PASSES</text>
      <text x="400" y="485" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the expensive mistake is polishing the wrong thing, not writing the right thing slowly</text>
    </DiagramFrame>
  );
};

export const MakeItAskQuestionsDiagram = () => {
  const qs = [
    'who is the audience? what is the budget?',
    'what has been tried? what counts as success?',
    '— the exact things you left out, and often',
    'things you had not decided yet',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Handing over a rough prompt and letting the model question you first finds the gaps you cannot see from the inside.">
      <defs>
        <marker id="arrowMIQa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Let it interview you before it answers</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">instead of polishing the prompt alone, hand over a rough one and make the model find what is missing</text>

      <rect x="30" y="58" width="360" height="250" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE MOVE — ONE ADDED LINE</text>
      <rect x="46" y="86" width="328" height="28" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
      <text x="210" y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">you: a rough prompt, plus — "before you answer,</text>
      <text x="210" y="108" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">ask me up to five questions that would improve it"</text>
      <line x1="210" y1="118" x2="210" y2="128" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowMIQa)" />
      <rect x="46" y="132" width="328" height="60" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
      {qs.map((t, i) => (
        <text key={i} x="210" y={145 + i * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">{t}</text>
      ))}
      <line x1="210" y1="196" x2="210" y2="206" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowMIQa)" />
      <rect x="46" y="210" width="328" height="22" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
      <text x="210" y="224" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">you: two minutes of answers</text>
      <line x1="210" y1="236" x2="210" y2="246" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowMIQa)" />
      <rect x="46" y="250" width="328" height="22" rx="7" fill={COLORS.blueLight} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="210" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">a far better answer than solo prompt-polishing</text>
      <text x="210" y="292" textAnchor="middle" fill={COLORS.blue} fontSize="7.6" fontStyle="italic">best at the start of anything long, expensive or hard to redo</text>

      <rect x="410" y="58" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">QUICK VARIANT — RESTATE AND WAIT</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8">"Restate what you think I am asking for, list</text>
      <text x="426" y="105" fill={COLORS.slate600} fontSize="8">your assumptions, then wait." — a misread shows</text>
      <text x="426" y="118" fill={COLORS.slate600} fontSize="8">in ten seconds instead of after 1,500 words,</text>
      <text x="426" y="131" fill={COLORS.slate600} fontSize="8">usually on a word your organisation uses oddly</text>
      <text x="426" y="162" fill={COLORS.cyan} fontSize="7.8" fontWeight="700">the assumptions list is often the more valuable half</text>

      <rect x="410" y="190" width="360" height="118" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="190" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="204" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">INTERVIEW MODE — YOU HOLD THE KNOWLEDGE</text>
      <text x="426" y="224" fill={COLORS.slate600} fontSize="8">"Interview me one question at a time, then</text>
      <text x="426" y="237" fill={COLORS.slate600} fontSize="8">write it from my answers" — you get your own</text>
      <text x="426" y="250" fill={COLORS.slate600} fontSize="8">material, structured, instead of a generic</text>
      <text x="426" y="263" fill={COLORS.slate600} fontSize="8">piece that happens to be about your topic</text>
      <text x="426" y="294" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">one at a time — a list of twelve gets skimmed</text>

      <rect x="30" y="322" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="340" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">TWO SMALL PRINTS</text>
      <text x="400" y="356" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">cap the questions ("up to five"), and note the limit of self-critique — good on structure and clarity, weak on facts</text>

      <rect x="30" y="382" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE QUESTIONS ARE A FREE AUDIT OF WHAT YOUR PROMPT LEFT OUT</text>
      <text x="400" y="419" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">you were never going to guess which gaps mattered from the inside — make it tell you</text>
    </DiagramFrame>
  );
};

export const FourReasonsBadDiagram = () => {
  const causes = [
    {
      x: 30, c: COLORS.blue, h: 'AMBIGUOUS',
      sig: ['a competent answer to a', 'question you did not ask —', 'consistent, well made,', 'aimed elsewhere'],
      fix: ['state the reading you', 'meant: "our cost, not', 'the customer\'s"'],
    },
    {
      x: 218, c: COLORS.cyan, h: 'MISSING CONTEXT',
      sig: ['generic filler — or', 'confident claims about', 'your situation that', 'are not true'],
      fix: ['supply the fact: "team', 'of four, not 400 —', 'redo on that basis"'],
    },
    {
      x: 406, c: COLORS.amber, h: 'TASK TOO BIG',
      sig: ['everything covered,', 'nothing developed — a', 'table of contents that', 'got expanded'],
      fix: ['shrink and chain:', '"just the first section,', 'in depth"'],
    },
    {
      x: 594, c: COLORS.red, h: 'SIMPLY WRONG',
      sig: ['reads perfectly, is', 'false — the only one', 'that style cannot', 'reveal'],
      fix: ['verify externally or', 'change approach —', 'rewording will not fix it'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 414" caption="A bad answer has one of four causes — and only the first is fixed by rewording, so diagnose before you retry.">
      <defs>
        <marker id="arrowFRBa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four causes, four signatures, four different fixes</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">rewriting the prompt or hitting regenerate are guesses — fifteen seconds of diagnosis beats three more attempts</text>

      <rect x="270" y="58" width="260" height="44" rx="9" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.slate900} fontSize="8.4" fontWeight="700">THE ANSWER DISAPPOINTS</text>
      <text x="400" y="91" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">before retrying, ask: which of the four?</text>
      <line x1="300" y1="104" x2="130" y2="124" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowFRBa)" />
      <line x1="360" y1="106" x2="316" y2="124" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowFRBa)" />
      <line x1="440" y1="106" x2="484" y2="124" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowFRBa)" />
      <line x1="500" y1="104" x2="670" y2="124" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowFRBa)" />

      {causes.map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="128" width="176" height="146" rx="8" fill={COLORS.white} stroke={k.c} strokeWidth="2" />
          <rect x={k.x} y="128" width="176" height="18" rx="8" fill={k.c} />
          <text x={k.x + 88} y="141" textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{k.h}</text>
          <text x={k.x + 12} y="159" fill={k.c} fontSize="6.4" fontWeight="700">THE SIGNATURE</text>
          {k.sig.map((t, j) => (
            <text key={j} x={k.x + 12} y={171 + j * 11} fill={COLORS.slate600} fontSize="7.4">{t}</text>
          ))}
          <text x={k.x + 12} y="222" fill={k.c} fontSize="6.4" fontWeight="700">THE FIX</text>
          {k.fix.map((t, j) => (
            <text key={j} x={k.x + 12} y={234 + j * 11} fill={COLORS.slate700} fontSize="7.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="288" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="306" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">ONLY ONE OF THE FOUR IS A WORDING PROBLEM</text>
      <text x="400" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">missing context needs facts, an oversized task needs splitting, and a plain error needs checking — not better phrasing</text>

      <rect x="30" y="348" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DIAGNOSE FIRST — THE FOUR CAUSES NEED FOUR DIFFERENT FIXES</text>
      <text x="400" y="385" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a fourth rewrite of the prompt is the signature of a skipped diagnosis</text>
    </DiagramFrame>
  );
};

export const DescribeAnswerGapDiagram = () => {
  const pairs = [
    { w: '"That is not what I wanted."', s: '"You gave the process — I need the decision and who signs it off."' },
    { w: '"Too long."', s: '"Cut sections two and three entirely; halve the rest."' },
    { w: '"Wrong tone."', s: '"It reads like marketing — I want an internal note between engineers."' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="A follow-up improves the next answer only when it names the gap — what to keep, what to change, and changed into what.">
      <defs>
        <marker id="arrowDAGa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">"Not right" tells it nothing — describe the distance instead</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">say precisely what sits between the answer you got and the answer you needed — you are specifying, not complaining</text>

      <text x="160" y="66" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontWeight="700">THE VERDICT — NO INFORMATION</text>
      <text x="561" y="66" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontWeight="700">THE SPECIFICATION — ALL OF IT</text>
      {pairs.map((p, i) => (
        <g key={i}>
          <rect x="30" y={74 + i * 32} width="260" height="24" rx="7" fill="none" stroke={COLORS.red} strokeWidth="1.4" strokeDasharray="4 3" />
          <text x="160" y={89 + i * 32} textAnchor="middle" fill={COLORS.slate500} fontSize="7.8">{p.w}</text>
          <line x1="296" y1={86 + i * 32} x2="344" y2={86 + i * 32} stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowDAGa)" />
          <rect x="352" y={74 + i * 32} width="418" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x="561" y={89 + i * 32} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{p.s}</text>
        </g>
      ))}

      <rect x="30" y="176" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="195" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">SAY WHAT TO KEEP BEFORE WHAT TO CHANGE</text>
      <text x="400" y="211" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">"Keep the structure and the first section exactly as they are" — then name the change</text>
      <text x="400" y="225" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">otherwise the wholesale rewrite takes the good parts with it</text>

      <rect x="30" y="250" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="269" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">THE IMPERFECT ANSWER IS INFORMATION — CORRECT IT, DO NOT RESTART</text>
      <text x="400" y="285" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">it shows what was ambiguous, which defaults got filled in, and which assumptions you never stated</text>
      <text x="400" y="299" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">after about five corrections the transcript is the problem — restart clean with everything you learned</text>

      <rect x="30" y="324" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="343" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">LOUDER IS NOT CLEARER</text>
      <text x="400" y="359" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">capitals and "IMPORTANT" do not fix an unclear instruction — repetition without change is the same experiment twice</text>
      <text x="400" y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">an ignored instruction usually means another line of your own prompt is quietly pulling the opposite way</text>

      <rect x="30" y="398" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="418" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">NAME THE DISTANCE — WHAT TO KEEP, WHAT TO CHANGE, INTO WHAT</text>
      <text x="400" y="435" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">each round should shrink the remaining gap, and it only can if you measured it out loud</text>
    </DiagramFrame>
  );
};
