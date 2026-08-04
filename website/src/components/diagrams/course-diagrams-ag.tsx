import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ PROMPTING — MODULE 1 & START OF MODULE 2 ============ */

export const EverythingInTheBoxDiagram = () => {
  const kinds = [
    { x: 44, c: COLORS.blue, h: 'INSTRUCTION', l: ['the verb — summarise,', 'draft, compare, check,', 'rewrite'] },
    { x: 226, c: COLORS.cyan, h: 'CONTEXT', l: ['who it is for, what it is', 'for, and what must', 'be true'] },
    { x: 408, c: COLORS.emerald, h: 'EXAMPLES', l: ['one or two samples of', 'an answer you would', 'accept'] },
    { x: 590, c: COLORS.amber, h: 'DATA', l: ['the material itself,', 'pasted in — not described', 'from memory'] },
  ];
  const missing = ['context — missing', 'examples — missing', 'data — missing'];
  const strong = [
    { h: 'INSTRUCTION', t: '"write the delivery-delay email"' },
    { h: 'CONTEXT', t: 'our fault, second slip, keep the client' },
    { h: 'LIMITS', t: 'direct, apologetic, under 150 words' },
    { h: 'DATA', t: 'the facts to use, pasted in' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 510" caption="A prompt is everything sent in one request — strong prompts add the context, examples and data that weak prompts leave the model to guess.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A prompt is everything the model receives in one request</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">not just the question you typed — up to four kinds of content travel in the same box</text>

      <rect x="30" y="58" width="740" height="150" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">ONE REQUEST — EVERYTHING THE MODEL WILL SEE</text>
      {kinds.map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="88" width="172" height="104" rx="8" fill={COLORS.white} stroke={k.c} strokeWidth="2" />
          <rect x={k.x} y="88" width="172" height="18" rx="8" fill={k.c} />
          <text x={k.x + 86} y="101" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{k.h}</text>
          {k.l.map((t, j) => (
            <text key={j} x={k.x + 10} y={122 + j * 13} fill={COLORS.slate600} fontSize="7.8">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="222" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="222" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="236" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE WEAK PROMPT — INSTRUCTION ONLY</text>
      <rect x="46" y="252" width="328" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="210" y="267" textAnchor="middle" fill={COLORS.slate700} fontSize="8">"Write an email about the delay."</text>
      {missing.map((t, i) => (
        <g key={i}>
          <rect x="46" y={284 + i * 26} width="328" height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="210" y={298 + i * 26} textAnchor="middle" fill={COLORS.slate500} fontSize="7.8">{t}</text>
        </g>
      ))}

      <rect x="410" y="222" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="222" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="236" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE STRONG PROMPT — ALL FOUR PARTS</text>
      {strong.map((s, i) => (
        <g key={i}>
          <rect x="426" y={250 + i * 28} width="328" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="434" y={265 + i * 28} fill={COLORS.emerald} fontSize="6.8" fontWeight="700">{s.h}</text>
          <text x="492" y={265 + i * 28} fill={COLORS.slate600} fontSize="7.8">{s.t}</text>
        </g>
      ))}

      <rect x="30" y="386" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="405" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">LABEL THE PARTS — TASK FIRST, PASTED MATERIAL LAST UNDER A HEADING</text>
      <text x="400" y="421" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">the model reads one continuous text with no slot marked "important" — a heading like "Draft to edit:" tells it which part is which</text>

      <rect x="30" y="446" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="466" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE MODEL ANSWERS FROM WHAT IS IN THE BOX — AND NOTHING ELSE</text>
      <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the test: could a new colleague do the task from your message alone? if not, add the missing parts</text>
    </DiagramFrame>
  );
};

export const NoMemoryDiagram = () => {
  const turns = ['message 1 — you explain the project', 'message 2 — its answer', 'message 3 — your follow-up'];
  const blanks = ['your job — unknown', 'your writing style — unknown', "yesterday's long explanation — gone", 'the thing you said in another chat — gone'];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="The model keeps nothing between chats — apparent memory is just the transcript, or saved text, being re-sent with every message.">
      <defs>
        <marker id="arrowNMDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">It seems to remember — because the transcript is resent every time</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model itself carries nothing from one conversation to the next</text>

      <rect x="30" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WITHIN ONE CHAT — THE ILLUSION OF MEMORY</text>
      {turns.map((t, i) => (
        <g key={i}>
          <rect x="46" y={88 + i * 24} width="328" height="20" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x="210" y={101 + i * 24} textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">{t}</text>
        </g>
      ))}
      <line x1="210" y1="158" x2="210" y2="170" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowNMDa)" />
      <rect x="46" y="174" width="328" height="26" rx="7" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="210" y="190" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8" fontWeight="700">your new message re-sends all of the above</text>
      <text x="210" y="226" textAnchor="middle" fill={COLORS.blue} fontSize="7.8" fontStyle="italic">the "memory" is the transcript being re-read each time</text>

      <rect x="410" y="58" width="360" height="190" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A NEW CHAT — A GENUINE BLANK SLATE</text>
      {blanks.map((t, i) => (
        <g key={i}>
          <rect x="426" y={88 + i * 28} width="328" height="22" rx="6" fill="none" stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="590" y={102 + i * 28} textAnchor="middle" fill={COLORS.slate500} fontSize="7.8">{t}</text>
        </g>
      ))}
      <text x="590" y="226" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontStyle="italic">nothing carries over unless the app stores and re-sends it</text>

      <rect x="30" y="262" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="281" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">WHAT "MEMORY" FEATURES ACTUALLY DO</text>
      <text x="400" y="297" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">the app stores text you saved and quietly pastes it into your prompt — real, useful, and it can go stale</text>
      <text x="400" y="311" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">if answers keep coming out odd, check what your saved context still says about you</text>

      <rect x="30" y="336" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="355" textAnchor="middle" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">WORK WITH THE BLANK SLATE</text>
      <text x="400" y="371" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">keep a ten-line standing block — your role, audience, constraints, tone — and paste it at the top of a new chat</text>
      <text x="400" y="385" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">when a long thread has drifted, restart clean with one good first message instead of a fifth correction</text>

      <rect x="30" y="410" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A FRESH CHAT KNOWS NOTHING ABOUT YOU — RESTATE, OR SAVE AND RE-SEND</text>
      <text x="400" y="447" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">restating context costs a paste; assuming it was remembered costs the whole answer</text>
    </DiagramFrame>
  );
};

export const WordingMattersDiagram = () => {
  const asks = [
    {
      x: 30, c: COLORS.amber, h: '"IS THIS PLAN GOOD?"', f: 'invites agreement',
      l: ['a broadly positive review', 'with a few gentle caveats —', 'it took your framing as', 'the goal'],
    },
    {
      x: 282, c: COLORS.blue, h: '"WHAT ARE THE RISKS?"', f: 'aims the answer',
      l: ['a solid list of risks —', 'analysis, because that is', 'what the question aimed at'],
    },
    {
      x: 534, c: COLORS.emerald, h: '"WHAT WOULD A SCEPTIC SAY?"', f: 'invites real criticism',
      l: ['sharp, specific objections', 'about cost and assumptions', '— the kind you can prepare', 'against'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="The same question worded three ways steers three different answers — phrasing sets the direction, so aim it deliberately.">
      <defs>
        <marker id="arrowWMDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Same plan, same model — three questions, three different answers</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">your phrasing does not just describe the request; it sets the direction the answer travels in</text>

      <rect x="300" y="58" width="200" height="28" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">THE SAME PLAN</text>
      <line x1="330" y1="90" x2="150" y2="114" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWMDa)" />
      <line x1="400" y1="88" x2="400" y2="114" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWMDa)" />
      <line x1="470" y1="90" x2="650" y2="114" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowWMDa)" />

      {asks.map((a, i) => (
        <g key={i}>
          <rect x={a.x} y="120" width="236" height="118" rx="9" fill={COLORS.white} stroke={a.c} strokeWidth="2" />
          <rect x={a.x} y="120" width="236" height="18" rx="9" fill={a.c} />
          <text x={a.x + 118} y="133" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{a.h}</text>
          {a.l.map((t, j) => (
            <text key={j} x={a.x + 12} y={152 + j * 13} fill={COLORS.slate600} fontSize="7.9">{t}</text>
          ))}
          <text x={a.x + 12} y="226" fill={a.c} fontSize="7.6" fontStyle="italic">{a.f}</text>
        </g>
      ))}
      <text x="400" y="256" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">none of the three is wrong — and none of them is neutral; a vague question just gets the generic one</text>

      <rect x="30" y="270" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="270" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="284" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE LEADING QUESTION</text>
      <text x="46" y="304" fill={COLORS.slate600} fontSize="8.2">"Explain why remote work is more productive"</text>
      <text x="46" y="318" fill={COLORS.slate600} fontSize="8.2">the conclusion is baked in — you get your own</text>
      <text x="46" y="332" fill={COLORS.slate600} fontSize="8.2">assumption back, in better sentences</text>
      <text x="46" y="352" fill={COLORS.red} fontSize="7.8" fontWeight="700">it feels like research; it is an echo</text>

      <rect x="410" y="270" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="270" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="284" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE OPEN QUESTION</text>
      <text x="426" y="304" fill={COLORS.slate600} fontSize="8.2">"Summarise the evidence on both sides, and</text>
      <text x="426" y="318" fill={COLORS.slate600} fontSize="8.2">say where it is genuinely contested"</text>
      <text x="426" y="332" fill={COLORS.slate600} fontSize="8.2">now it can tell you something you had not seen</text>
      <text x="426" y="352" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">ask for the counter-argument by name</text>

      <rect x="30" y="380" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="399" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">SOME VARIATION IS SIMPLY BUILT IN</text>
      <text x="400" y="415" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">the same prompt can come back worded differently on different runs — judge it over several attempts, not one</text>

      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IF YOU WANT CRITICISM, ASK FOR CRITICISM — BY NAME</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">when the answer keeps agreeing with you, reread your question before congratulating yourself</text>
    </DiagramFrame>
  );
};

export const CommonPromptMistakeDiagram = () => {
  const upgrade = [
    { h: 'AUDIENCE', t: '"for the client\'s operations lead — detail-oriented, dislikes vague language"' },
    { h: 'PURPOSE', t: '"flag the two-week slip and get her to approve the revised date"' },
    { h: 'QUALITY BAR', t: '"a good update names the slip in the first sentence — and skips background she already knows"' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Most weak prompts are missing who the answer is for and what it is for — add those two facts and the generic output disappears.">
      <defs>
        <marker id="arrowCPMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
        <marker id="arrowCPMb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The most common weak prompt is perfectly polite — and aimed at nobody</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">two facts are missing: who it is for, and what it is for — so the model has to pick, and it picks the safe middle</text>

      <rect x="250" y="58" width="300" height="46" rx="9" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <text x="400" y="75" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontWeight="700">THE REQUEST</text>
      <text x="400" y="91" textAnchor="middle" fill={COLORS.slate900} fontSize="9">"Write a project update."</text>
      <line x1="270" y1="92" x2="214" y2="114" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowCPMa)" />
      <line x1="530" y1="92" x2="586" y2="114" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowCPMa)" />

      <rect x="30" y="120" width="360" height="100" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="120" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="210" y="134" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOR WHOM? — IT HAS TO GUESS</text>
      <text x="210" y="156" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">your manager? the client?</text>
      <text x="210" y="170" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">the whole company? a board?</text>
      <text x="210" y="200" textAnchor="middle" fill={COLORS.amber} fontSize="7.8" fontWeight="700">each reader needs a different update</text>

      <rect x="410" y="120" width="360" height="100" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="120" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="590" y="134" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOR WHAT? — IT HAS TO GUESS</text>
      <text x="590" y="156" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">to reassure? to escalate a problem?</text>
      <text x="590" y="170" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">to ask for budget? to create a record?</text>
      <text x="590" y="200" textAnchor="middle" fill={COLORS.amber} fontSize="7.8" fontWeight="700">each purpose needs a different update</text>

      <line x1="210" y1="224" x2="326" y2="248" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowCPMb)" />
      <line x1="590" y1="224" x2="474" y2="248" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowCPMb)" />
      <rect x="160" y="252" width="480" height="52" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="272" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">THE SAFE MIDDLE — WHAT GUESSING PRODUCES</text>
      <text x="400" y="289" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">a neutral, medium-length, generic update aimed at nobody in particular</text>
      <text x="400" y="320" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">people then call the output bland — it is bland because the request was aimed at no one</text>

      <rect x="30" y="334" width="740" height="108" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="334" width="740" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="348" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE THREE-LINE UPGRADE — ABOUT FORTY SECONDS</text>
      {upgrade.map((u, i) => (
        <g key={i}>
          <rect x="46" y={360 + i * 26} width="708" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="56" y={374 + i * 26} fill={COLORS.emerald} fontSize="7.2" fontWeight="700">{u.h}</text>
          <text x="150" y={374 + i * 26} fill={COLORS.slate600} fontSize="8">{u.t}</text>
        </g>
      ))}

      <rect x="30" y="452" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ADD WHO IT IS FOR AND WHAT IT IS FOR — BEFORE YOU PRESS SEND</text>
      <text x="400" y="489" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">audience and purpose are not polish; they are the two facts that decide what a good answer looks like</text>
    </DiagramFrame>
  );
};

export const RolePerspectiveDiagram = () => {
  const reader = [
    'the writer sets the tone; the reader decides',
    'what actually needs to be on the page',
    '"smart, but new to this field" is one very',
    'effective line — say what they know and',
    'what they will do with the answer',
  ];
  const hostile = [
    '"You are the budget holder looking for a',
    'reason to say no. Give your three strongest',
    'objections, in the order you would raise',
    'them." — then ask for the best defence',
    'of each point',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 440" caption="Naming a perspective — especially the reader's, or a hostile one — re-aims vocabulary, depth and priorities without adding any knowledge.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A perspective adds no knowledge — it aims what is already there</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a point of view carries vocabulary, pace and what counts as important, all in one line</text>

      <rect x="30" y="58" width="360" height="108" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">NO PERSPECTIVE</text>
      <text x="46" y="92" fill={COLORS.slate600} fontSize="8.2">"Explain compound interest"</text>
      <text x="46" y="108" fill={COLORS.slate600} fontSize="8.2">a textbook paragraph — accurate, general,</text>
      <text x="46" y="122" fill={COLORS.slate600} fontSize="8.2">and pitched at nobody in particular</text>
      <text x="46" y="150" fill={COLORS.red} fontSize="7.8" fontWeight="700">correct is not the same as useful to this reader</text>

      <rect x="410" y="58" width="360" height="108" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A PERSPECTIVE FOR THE READER</text>
      <text x="426" y="92" fill={COLORS.slate600} fontSize="8.2">"…as a financial adviser would, to a nervous</text>
      <text x="426" y="106" fill={COLORS.slate600} fontSize="8.2">first-time investor" — slower pace, plain</text>
      <text x="426" y="120" fill={COLORS.slate600} fontSize="8.2">words, worked numbers instead of a formula</text>
      <text x="426" y="150" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">it selected which parts of a general ability to use</text>

      <rect x="30" y="180" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="180" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="194" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">NAME THE READER, NOT JUST THE WRITER</text>
      {reader.map((t, i) => (
        <text key={i} x="46" y={214 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
      ))}

      <rect x="410" y="180" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="410" y="180" width="360" height="20" rx="9" fill={COLORS.cyan} />
      <text x="590" y="194" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE HOSTILE READER — UNDERUSED</text>
      {hostile.map((t, i) => (
        <text key={i} x="426" y={214 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
      ))}

      <rect x="30" y="316" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="335" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">A JOB TITLE DOES NOT MAKE IT ACCURATE</text>
      <text x="400" y="351" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">"act as an expert" changes the register, not the facts — check important claims exactly as you would anyway</text>

      <rect x="30" y="376" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="396" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SAY WHO IS WRITING AND WHO IS READING — THE ANSWER RESHAPES ITSELF</text>
      <text x="400" y="413" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">polite review changes nothing — the attack you asked for is the better test of your work</text>
    </DiagramFrame>
  );
};
