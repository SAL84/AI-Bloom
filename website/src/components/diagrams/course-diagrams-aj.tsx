import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ PROMPTING — REST OF MODULE 4 & START OF MODULE 5 ============ */

export const SycophancyTrapDiagram = () => {
  const moves = [
    { x: 46, y: 230, t: '"give me the three strongest arguments that this is a bad idea"' },
    { x: 412, y: 230, t: '"what would have to be true for this to be wrong?"' },
    { x: 46, y: 262, t: 'ask the same question both ways round and compare the answers' },
    { x: 412, y: 262, t: 'when it reverses, ask what changed its mind — often nothing did' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="A model leans towards agreeing with you — hide your preference and ask for the case against, or you get a mirror, not a check.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A model that agrees with everything is a mirror, not a second opinion</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">it tends to support whatever you suggest — confidence without information, strongest when you most want to be right</text>

      <rect x="30" y="58" width="360" height="130" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE TRAP — YOU REVEALED YOUR PREFERENCE</text>
      <rect x="46" y="86" width="328" height="22" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="210" y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">you: "I think we should go with option B — agree?"</text>
      <rect x="46" y="114" width="328" height="32" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="210" y="127" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">it: "Yes — option B looks strong. A few small</text>
      <text x="210" y="139" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">caveats to consider…"</text>
      <text x="210" y="170" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontWeight="700">your own hope, returned in better sentences</text>

      <rect x="410" y="58" width="360" height="130" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE FIX — WITHHOLD IT</text>
      <rect x="426" y="86" width="328" height="32" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="99" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">you: "Rank these three options against the</text>
      <text x="590" y="111" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">criteria — I will not say which one I prefer."</text>
      <rect x="426" y="124" width="328" height="22" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="590" y="138" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">it: a ranking argued on the merits</text>
      <text x="590" y="170" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">the answer cannot chase a preference it never saw</text>

      <rect x="30" y="202" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="202" width="740" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="216" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOUR WAYS TO INVITE HONEST PUSHBACK</text>
      {moves.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y={m.y} width="342" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x={m.x + 171} y={m.y + 15} textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{m.t}</text>
        </g>
      ))}

      <rect x="30" y="312" width="740" height="60" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="331" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">WHERE IT DOES REAL DAMAGE</text>
      <text x="400" y="347" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">agreement about an email's wording is harmless — about a business plan, a diagnosis, money or the law, it is not</text>
      <text x="400" y="361" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">most dangerous when nobody else is checking your reasoning — exactly when people reach for AI</text>

      <rect x="30" y="386" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="406" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AGREEMENT WITH WHAT YOU ALREADY BELIEVED IS NOT CONFIRMATION</text>
      <text x="400" y="423" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">when something significant depends on it, go looking for the disagreeing view — by name</text>
    </DiagramFrame>
  );
};

export const ConfidentFabricationDiagram = () => {
  const lower = [
    'general explanations of well-established topics',
    'summaries of material you pasted in full',
    'rewrites and rephrasing of your own text',
  ];
  const higher = [
    'exact figures, dates, page and version numbers',
    'citations, quotations, names',
    'the detail that "should" exist for your argument',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="Fabrication reads exactly like knowledge because the confident tone never tracked truth — verify specifics at the source, in proportion to consequence.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">True and invented arrive in the same confident voice</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the polish of an answer tells you nothing about its accuracy — "it sounded sure" is not a reason to believe it</text>

      <text x="400" y="64" textAnchor="middle" fill={COLORS.slate500} fontSize="8.2" fontStyle="italic">two answers, identical in fluency, formatting and confidence — one of them is invented</text>
      <rect x="30" y="76" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <rect x="30" y="76" width="360" height="18" rx="9" fill={COLORS.slate600} />
      <text x="210" y="89" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">ANSWER A</text>
      <text x="46" y="110" fill={COLORS.slate600} fontSize="8.1">"The Eiffel Tower was completed in 1889,</text>
      <text x="46" y="124" fill={COLORS.slate600} fontSize="8.1">built for the Paris World's Fair."</text>
      <text x="46" y="156" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">grounded — the record confirms it</text>

      <rect x="410" y="76" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <rect x="410" y="76" width="360" height="18" rx="9" fill={COLORS.slate600} />
      <text x="590" y="89" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">ANSWER B</text>
      <text x="426" y="110" fill={COLORS.slate600} fontSize="8.1">"A 2019 Stanford study (Chen et al., p. 41)</text>
      <text x="426" y="124" fill={COLORS.slate600} fontSize="8.1">found that 68.4% of managers agree…"</text>
      <text x="426" y="156" fill={COLORS.red} fontSize="7.8" fontWeight="700">invented — no such study exists</text>

      <rect x="30" y="186" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="186" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="200" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">LOWER RISK — CHECK LIGHTLY</text>
      {lower.map((t, i) => (
        <g key={i}>
          <rect x="46" y={212 + i * 28} width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="210" y={226 + i * 28} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}

      <rect x="410" y="186" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="186" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="200" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">HIGHER RISK — CHECK FIRST, EVERY TIME</text>
      {higher.map((t, i) => (
        <g key={i}>
          <rect x="426" y={212 + i * 28} width="328" height="22" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x="590" y={226 + i * 28} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}

      <rect x="30" y="312" width="740" height="76" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="312" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="326" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">VERIFY IN PROPORTION TO CONSEQUENCE — ASK "WHAT HAPPENS IF THIS IS WRONG?"</text>
      <rect x="46" y="340" width="330" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="211" y="355" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">a sentence reads differently → move on</text>
      <rect x="424" y="340" width="330" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="589" y="355" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">a client, a decision, the public → check the source itself</text>
      <text x="400" y="380" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">never check by asking the model if it is sure — the process that invented it will confidently confirm it</text>

      <rect x="30" y="402" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="422" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FLUENT, SPECIFIC, CONFIDENT — AND POSSIBLY INVENTED</text>
      <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a citation you cannot find in a minute is a fabricated citation; anything you will repeat deserves thirty seconds</text>
    </DiagramFrame>
  );
};

export const ModelSimplyWrongDiagram = () => {
  const limits = [
    { x: 46, t: 'long multi-step arithmetic with no calculator or tool' },
    { x: 412, t: 'what happened recently, or what is true right now' },
    { x: 46, t: 'counting or editing individual letters and characters' },
    { x: 412, t: 'facts that were never written down anywhere' },
  ];
  const attempts = [
    { x: 46, w: 170, t: 'attempt 1 — added context' },
    { x: 240, w: 170, t: 'attempt 2 — task split up' },
    { x: 434, w: 170, t: 'attempt 3 — new angle' },
  ];
  const exits = [
    { x: 84, w: 150, t: 'shrink the task' },
    { x: 246, w: 196, t: 'supply what was missing' },
    { x: 454, w: 180, t: 'switch to a proper tool' },
    { x: 646, w: 108, t: 'do it yourself' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 454" caption="Some tasks sit outside what a model does reliably — after three genuinely different attempts, change something structural instead of the wording.">
      <defs>
        <marker id="arrowMSWa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">When no rephrasing will fix it</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">not every bad output means you prompted badly — knowing the difference is a real skill that saves real hours</text>

      <rect x="30" y="58" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">OUTSIDE WHAT IT DOES RELIABLY — NO PROMPT FIXES THESE</text>
      {limits.map((l, i) => (
        <g key={i}>
          <rect x={l.x} y={84 + Math.floor(i / 2) * 30} width="342" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x={l.x + 171} y={99 + Math.floor(i / 2) * 30} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{l.t}</text>
        </g>
      ))}
      <text x="400" y="166" textAnchor="middle" fill={COLORS.slate500} fontSize="8" fontStyle="italic">here a better prompt improves the presentation, not the correctness — which makes the wrong answer more persuasive</text>

      <rect x="30" y="180" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="180" width="740" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="194" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE STOPPING RULE — THREE GENUINELY DIFFERENT ATTEMPTS</text>
      {attempts.map((a, i) => (
        <g key={i}>
          <rect x={a.x} y="208" width={a.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={a.x + a.w / 2} y="224" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{a.t}</text>
          <line x1={a.x + a.w + 4} y1="221" x2={a.x + a.w + 20} y2="221" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowMSWa)" />
        </g>
      ))}
      <rect x="628" y="208" width="126" height="26" rx="13" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="691" y="224" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">still wrong? stop</text>
      <text x="400" y="252" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">three rephrasings of the same request do not count — each attempt must change something real</text>
      <text x="52" y="281" fill={COLORS.blue} fontSize="7.4" fontWeight="700">then:</text>
      {exits.map((e, i) => (
        <g key={i}>
          <rect x={e.x} y="266" width={e.w} height="24" rx="12" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={e.x + e.w / 2} y="281" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{e.t}</text>
        </g>
      ))}

      <rect x="30" y="312" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="330" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">ERRORS YOU CANNOT SEE</text>
      <text x="400" y="346" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">catching a mistake takes knowledge you may not have — in a new field, everything reads equally plausible</text>
      <text x="400" y="360" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">there, lean on external sources — use the model to learn the shape of a subject, not as the authority on its details</text>

      <rect x="30" y="390" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="410" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THREE DIFFERENT ATTEMPTS, THEN CHANGE SOMETHING STRUCTURAL</text>
      <text x="400" y="427" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">cheap retries feel productive — that is how an hour disappears into a five-minute task</text>
    </DiagramFrame>
  );
};

export const ReusablePromptsDiagram = () => {
  return (
    <DiagramFrame viewBox="0 0 800 428" caption="A prompt that worked becomes a tool: constants in the template, marked slots for what changes, and every repeated correction folded back in.">
      <defs>
        <marker id="arrowRPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.cyan} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">From a prompt that worked to a tool you own</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">most people rewrite the same weekly prompt from scratch every Monday — twenty minutes once ends that</text>

      <rect x="30" y="58" width="430" height="190" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="430" height="20" rx="9" fill={COLORS.blue} />
      <text x="245" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE TEMPLATE — CONSTANT TEXT, MARKED SLOTS</text>
      <text x="46" y="98" fill={COLORS.slate600} fontSize="8">You are writing a weekly update for</text>
      <rect x="220" y="85" width="76" height="18" rx="4" fill="none" stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="258" y="97" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">[AUDIENCE]</text>
      <text x="46" y="120" fill={COLORS.slate600} fontSize="8">who care most about</text>
      <rect x="144" y="107" width="158" height="18" rx="4" fill="none" stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="223" y="119" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">[WHAT THEY CARE ABOUT]</text>
      <text x="46" y="140" fill={COLORS.slate600} fontSize="8">Format: three sections — shipped, in progress, blocked.</text>
      <text x="46" y="155" fill={COLORS.slate600} fontSize="8">Each item one line, plain language, no adjectives.</text>
      <text x="46" y="170" fill={COLORS.slate600} fontSize="8">Lead with anything that changes a decision.</text>
      <text x="46" y="192" fill={COLORS.slate600} fontSize="8">Raw notes:</text>
      <rect x="104" y="179" width="104" height="18" rx="4" fill="none" stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="156" y="191" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontWeight="700">[PASTE NOTES]</text>
      <text x="46" y="216" fill={COLORS.slate500} fontSize="7.4" fontStyle="italic">three or four slots max — an eleven-slot template is a form nobody completes</text>
      <text x="46" y="232" fill={COLORS.amber} fontSize="7.4" fontWeight="700">amber = what changes each week; everything else never changes</text>

      <rect x="476" y="58" width="294" height="190" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="476" y="58" width="294" height="20" rx="9" fill={COLORS.cyan} />
      <text x="623" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">IMPROVE IT IN USE</text>
      <rect x="492" y="88" width="254" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
      <text x="619" y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">use it on a real task</text>
      <line x1="619" y1="116" x2="619" y2="124" stroke={COLORS.cyan} strokeWidth="1.5" markerEnd="url(#arrowRPDa)" />
      <rect x="492" y="128" width="254" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
      <text x="619" y="143" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">correct the output as usual</text>
      <line x1="619" y1="156" x2="619" y2="164" stroke={COLORS.cyan} strokeWidth="1.5" markerEnd="url(#arrowRPDa)" />
      <rect x="492" y="168" width="254" height="32" rx="7" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.3" />
      <text x="619" y="181" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">fold every repeated correction</text>
      <text x="619" y="193" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">into the prompt — permanently</text>
      <path d="M 750 184 L 760 184 L 760 100 L 752 100" fill="none" stroke={COLORS.cyan} strokeWidth="1.5" markerEnd="url(#arrowRPDa)" />
      <text x="619" y="218" textAnchor="middle" fill={COLORS.cyan} fontSize="7.6" fontWeight="700">four or five rounds → first-try usable</text>
      <text x="619" y="234" textAnchor="middle" fill={COLORS.slate500} fontSize="7.2" fontStyle="italic">pick tasks by frequency — weekly beats impressive</text>

      <rect x="30" y="262" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="262" width="740" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="276" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TEST IT LIKE A TOOL — BEFORE YOU RELY ON IT</text>
      <text x="400" y="298" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">run it on three or four real cases, including a messy or incomplete one — one good run is not evidence</text>
      <text x="400" y="314" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">for missing input, add: "if the notes do not say, write 'not stated' rather than guessing"</text>
      <text x="400" y="332" textAnchor="middle" fill={COLORS.slate500} fontSize="7.9" fontStyle="italic">behaviour on a bad week is what separates a template you can trust from confident fiction</text>

      <rect x="30" y="364" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EVERY CORRECTION YOU MAKE TWICE BELONGS IN THE PROMPT PERMANENTLY</text>
      <text x="400" y="401" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">this is the difference between using AI and owning a small set of tools you built</text>
    </DiagramFrame>
  );
};

export const TeamPromptAssetsDiagram = () => {
  const spread = ['more people using it', 'more edge cases found', 'improvements compound'];
  const version = [
    'one canonical copy — forked copies drift apart',
    'note what changed and why, with a date',
    'keep the old version until the new one survives real use',
    'name an owner — unowned libraries rot quietly',
  ];
  const notes = [
    'the cases it handles badly — the expensive knowledge',
    'what to check in the output before it is sent',
    'whether the result is a draft or something near-final',
    'the correction people keep having to make',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 468" caption="A prompt is a shareable artefact — one canonical copy with an owner, plus the usage notes that transfer the judgement, not just the words.">
      <defs>
        <marker id="arrowTPAa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A working prompt is a team asset — share it, version it, annotate it</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">one person's twenty minutes of refinement pays off across everyone who uses it — if it leaves their head</text>

      <rect x="30" y="80" width="190" height="44" rx="8" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <text x="125" y="97" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">one person quietly refines</text>
      <text x="125" y="110" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">a meeting-notes prompt</text>
      <line x1="224" y1="102" x2="272" y2="102" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowTPAa)" />
      <rect x="280" y="66" width="240" height="72" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="88" textAnchor="middle" fill={COLORS.cyan} fontSize="8.6" fontWeight="700">THE SHARED LIBRARY</text>
      <text x="400" y="104" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">a doc with ten good prompts,</text>
      <text x="400" y="117" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">each labelled: what for, and what not for</text>
      <line x1="524" y1="84" x2="564" y2="74" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowTPAa)" />
      <line x1="524" y1="102" x2="564" y2="106" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowTPAa)" />
      <line x1="524" y1="120" x2="564" y2="138" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowTPAa)" />
      {spread.map((t, i) => (
        <g key={i}>
          <rect x="570" y={62 + i * 32} width="200" height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.4" />
          <text x="670" y={77 + i * 32} textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{t}</text>
        </g>
      ))}
      <path d="M 620 158 C 540 178, 470 170, 418 144" fill="none" stroke={COLORS.slate400} strokeWidth="1.3" strokeDasharray="4 3" markerEnd="url(#arrowTPAa)" />
      <text x="530" y="182" textAnchor="middle" fill={COLORS.slate500} fontSize="7.4" fontStyle="italic">edge cases flow back into the canonical copy</text>

      <rect x="30" y="196" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="196" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="210" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">VERSION IT LIKE ANYTHING YOU RELY ON</text>
      {version.map((t, i) => (
        <g key={i}>
          <rect x="46" y={224 + i * 28} width="328" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x="56" y={239 + i * 28} fill={COLORS.slate600} fontSize="7.6">{t}</text>
        </g>
      ))}

      <rect x="410" y="196" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="196" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="590" y="210" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WRITE DOWN THE JUDGEMENT, NOT JUST THE TEXT</text>
      {notes.map((t, i) => (
        <g key={i}>
          <rect x="426" y={224 + i * 28} width="328" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="436" y={239 + i * 28} fill={COLORS.slate600} fontSize="7.6">{t}</text>
        </g>
      ))}

      <rect x="30" y="350" width="740" height="46" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">NO TOOLING REQUIRED</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">a dated shared document and a named owner is genuinely enough — the discipline matters more than the tooling</text>

      <rect x="30" y="410" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SHARE THE PROMPT AND THE JUDGEMENT THAT CAME WITH IT</text>
      <text x="400" y="447" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">three lines of honest usage notes double the value of any shared prompt</text>
    </DiagramFrame>
  );
};
