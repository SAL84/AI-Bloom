import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE — synthetic media, everyday bias, and where AI work is
 * ------------------------------------------------------------------ */

export const SyntheticMediaTypesDiagram = () => {
  const families = [
    {
      c: COLORS.blue,
      n: 'FULLY GENERATED',
      what: ['A scene that never existed,', 'built from a description.'],
      good: ['Illustration, concept art,', 'jokes, storyboards, mock-ups.'],
      bad: ['Invented “photos” of events', 'that never happened at all.']
    },
    {
      c: COLORS.cyan,
      n: 'FACE SWAPPED',
      what: ['Real footage with someone', 'else’s face mapped onto it.'],
      good: ['Film effects, dubbing, and', 'parody people agreed to.'],
      bad: ['Putting a classmate into', 'something they never did.']
    },
    {
      c: COLORS.amber,
      n: 'VOICE CLONED',
      what: ['A copy of a real voice,', 'saying brand new words.'],
      good: ['Narration, accessibility,', 'giving a lost voice back.'],
      bad: ['Scam calls — “it’s me, I’m', 'stuck, send it right now”.']
    },
    {
      c: COLORS.red,
      n: 'REAL, OUT OF CONTEXT',
      what: ['Genuine footage relabelled', 'as a different event.'],
      good: ['Archive clips with a clear', 'caption, source and date.'],
      bad: ['An old clip reposted as', 'today’s crisis, recaptioned.']
    }
  ];
  const holds = [
    {
      t: 'Trace where it came from',
      l: ['Where did this file first appear,', 'and who posted it there? Any', 'capture or edit history attached?']
    },
    {
      t: 'Cross-check the event itself',
      l: ['If it really happened, other', 'outlets and other angles exist.', 'One account is not a source.']
    },
    {
      t: 'Slow down before resharing',
      l: ['Anything built to make you angry', 'fast was built to be shared', 'before anybody checked it.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Spotting fakes by eye is a skill with a shrinking shelf life — tracing where a file came from is not">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The four kinds of fake you will actually run into</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each family has a real use and a matching misuse — the technology does not choose between them</text>

      {families.map((f, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="52" width="176" height="160" rx="10" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <rect x={30 + i * 188} y="52" width="176" height="28" rx="10" fill={f.c} />
          <text x={118 + i * 188} y="71" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{f.n}</text>
          {f.what.map((t, j) => (
            <text key={j} x={42 + i * 188} y={96 + j * 12} fill={COLORS.slate900} fontSize="8.6" fontWeight="600">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="118" x2={194 + i * 188} y2="118" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={42 + i * 188} y="132" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">LEGITIMATE USE</text>
          {f.good.map((t, j) => (
            <text key={j} x={42 + i * 188} y={145 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
          <text x={42 + i * 188} y="176" fill={COLORS.red} fontSize="7.8" fontWeight="700">HOW IT GETS MISUSED</text>
          {f.bad.map((t, j) => (
            <text key={j} x={42 + i * 188} y={189 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="224" width="740" height="36" rx="8" fill={COLORS.amber} />
      <text x="400" y="242" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The old advice — count the fingers, check the teeth — is running out of road</text>
      <text x="400" y="255" textAnchor="middle" fill={COLORS.white} fontSize="9.2" opacity="0.95">Generators keep improving, so the visual tells that worked last year quietly stop working</text>

      <text x="30" y="286" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT STILL HOLDS UP ONCE THE VISUAL TELLS ARE GONE</text>
      {holds.map((h, i) => (
        <g key={i}>
          <rect x={30 + i * 250} y="294" width="240" height="88" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <text x={150 + i * 250} y="316" textAnchor="middle" fill={COLORS.slate900} fontSize="10" fontWeight="700">{h.t}</text>
          {h.l.map((t, j) => (
            <text key={j} x={44 + i * 250} y={334 + j * 14} fill={COLORS.slate600} fontSize="8.6">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="394" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="412" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Provenance and cross-checking beat eyeballing, and they keep working as the fakes improve</text>
      <text x="400" y="426" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The question is not “does this look real” but “where did it come from, and who else has it”</text>
      <text x="400" y="458" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Being unsure is the correct state — say so, rather than passing it on with a guess attached</text>
    </DiagramFrame>
  );
};

export const BiasInEverydayAIDiagram = () => {
  const places = [
    {
      c: COLORS.blue,
      n: 'SEARCH AND FEEDS',
      what: ['What gets ranked first is', 'what people like you already', 'clicked. Whole views vanish.'],
      root: ['Learned from the clicks of', 'whoever was already there']
    },
    {
      c: COLORS.cyan,
      n: 'IMAGE GENERATION',
      what: ['Ask for “a doctor” and one', 'kind of face keeps arriving', 'as the unstated default.'],
      root: ['Learned from captions that', 'skewed heavily one way']
    },
    {
      c: COLORS.amber,
      n: 'AUTOCORRECT AND TEXT',
      what: ['Names, dialects and slang', 'from outside the training', 'mix get “fixed” into others.'],
      root: ['Learned from a narrow slice', 'of how people write']
    },
    {
      c: COLORS.red,
      n: 'GRADING AND SCREENING',
      what: ['Trained on past decisions,', 'so it repeats who used to', 'get picked — and who did not.'],
      root: ['Learned from decisions that', 'were never neutral either']
    }
  ];
  const dos = [
    { t: 'Notice the default', a: ['when the same kind of', 'answer keeps coming back'] },
    { t: 'Ask who is missing', a: ['whose examples would not', 'have made it into the pile'] },
    { t: 'Change the ask', a: ['spell out what you want', 'instead of taking default'] },
    { t: 'Never let it decide', a: ['a judgement about a person', 'needs a person in the loop'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 454" caption="Bias is not a setting somebody switched on — it is the training examples showing through the output">
      <defs>
        <marker id="arrowBEA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where bias actually shows up in the tools you use</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">four very different surfaces, and one root cause sitting behind all of them</text>

      <rect x="130" y="50" width="540" height="56" rx="10" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">ROOT CAUSE: who and what the training examples over- and under-represented</text>
      <text x="400" y="91" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a model reproduces the pattern of its examples, including the gaps in them</text>

      <path d="M 400 106 L 400 116 M 118 116 L 682 116" fill="none" stroke={COLORS.slate500} strokeWidth="2" />
      {[118, 306, 494, 682].map((cx, i) => (
        <line key={i} x1={cx} y1="116" x2={cx} y2="128" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowBEA)" />
      ))}

      {places.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="130" width="176" height="132" rx="10" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={30 + i * 188} y="130" width="176" height="26" rx="10" fill={p.c} />
          <text x={118 + i * 188} y="148" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">{p.n}</text>
          {p.what.map((t, j) => (
            <text key={j} x={42 + i * 188} y={172 + j * 12} fill={COLORS.slate700} fontSize="8.6">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="204" x2={194 + i * 188} y2="204" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={42 + i * 188} y="217" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">WHERE IT COMES FROM</text>
          {p.root.map((t, j) => (
            <text key={j} x={42 + i * 188} y={229 + j * 12} fill={p.c} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="274" width="740" height="34" rx="8" fill={COLORS.slate900} />
      <text x="400" y="296" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Nobody typed in a rule saying be unfair — the system learned a pattern that was already there</text>

      <text x="30" y="334" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT YOU CAN ACTUALLY DO WHEN YOU MEET IT</text>
      {dos.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="342" width="176" height="64" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={118 + i * 188} y="362" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{d.t}</text>
          <text x={118 + i * 188} y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{d.a[0]}</text>
          <text x={118 + i * 188} y="390" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{d.a[1]}</text>
        </g>
      ))}
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">If you cannot say who was in the examples, you cannot say who the output was built to fit</text>
    </DiagramFrame>
  );
};

export const AICareerMapDiagram = () => {
  const groups = [
    {
      x: 30, c: COLORS.blue, h: 'BUILDING IT', s: 'the smallest group, and the loudest',
      rows: [
        { t: 'Engineering', d: 'training, serving and tooling' },
        { t: 'Data', d: 'collection, labelling, quality' },
        { t: 'Research', d: 'new methods, and testing them' },
        { t: 'Infrastructure', d: 'the machines and networks under it' }
      ]
    },
    {
      x: 287, c: COLORS.cyan, h: 'APPLYING IT IN A FIELD', s: 'your subject, plus the tool',
      rows: [
        { t: 'Health', d: 'imaging, triage, notes, records' },
        { t: 'Law', d: 'discovery, drafting, research' },
        { t: 'Design and media', d: 'concept, production, editing' },
        { t: 'Education', d: 'materials, tutoring, assessment' }
      ]
    },
    {
      x: 544, c: COLORS.amber, h: 'GOVERNING IT', s: 'deciding what is allowed',
      rows: [
        { t: 'Safety and testing', d: 'red-teaming, evals, guardrails' },
        { t: 'Policy', d: 'rules, standards, public interest' },
        { t: 'Audit and assurance', d: 'checking claims against reality' },
        { t: 'Law and ethics', d: 'liability, rights, consent' }
      ]
    }
  ];
  const chips = [
    { t: 'Nursing', s: 'notes and handover' },
    { t: 'Teaching', s: 'planning and marking' },
    { t: 'Trades', s: 'quotes and scheduling' },
    { t: 'Retail and admin', s: 'rotas, stock, email' },
    { t: 'Journalism', s: 'research and checking' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 464" caption="Most careers around AI are not AI jobs — they are ordinary jobs where the tool became part of the day">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Jobs around AI, grouped by what you would actually do</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">no salaries and no forecasts — just the shape of where the work sits</text>

      {groups.map((g, i) => (
        <g key={i}>
          <rect x={g.x} y="54" width="226" height="200" rx="10" fill={COLORS.white} stroke={g.c} strokeWidth="2" />
          <rect x={g.x} y="54" width="226" height="28" rx="10" fill={g.c} />
          <text x={g.x + 113} y="73" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{g.h}</text>
          <text x={g.x + 113} y="98" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">{g.s}</text>
          {g.rows.map((r, j) => (
            <g key={j}>
              <rect x={g.x + 14} y={108 + j * 36} width="4" height="26" rx="2" fill={g.c} />
              <text x={g.x + 26} y={122 + j * 36} fill={COLORS.slate900} fontSize="10" fontWeight="700">{r.t}</text>
              <text x={g.x + 26} y={136 + j * 36} fill={COLORS.slate600} fontSize="8.4">{r.d}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="268" width="740" height="148" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="268" width="740" height="30" rx="10" fill={COLORS.emerald} />
      <text x="400" y="288" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">AND THE GROUP ALMOST EVERYONE ACTUALLY LANDS IN</text>
      <text x="400" y="316" textAnchor="middle" fill={COLORS.slate700} fontSize="9.6">Ordinary jobs, where the tool is part of the working day rather than the job title</text>
      {chips.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="328" width="134" height="44" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={109 + i * 146} y="346" textAnchor="middle" fill={COLORS.slate900} fontSize="9.2" fontWeight="700">{c.t}</text>
          <text x={109 + i * 146} y="360" textAnchor="middle" fill={COLORS.slate600} fontSize="8">{c.s}</text>
        </g>
      ))}
      <text x="400" y="390" textAnchor="middle" fill={COLORS.slate600} fontSize="9.4">Most people will never train a model or write the rules that govern one.</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="9.4">They will use these tools inside a job that already existed before them.</text>
      <text x="400" y="446" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Pick the field you care about first — the tool is something you add on top of it</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — uncertainty in evals, and a defender's jailbreak map
 * ------------------------------------------------------------------ */

export const EvalStatisticsDiagram = () => {
  const panels = [
    {
      x: 30, c: COLORS.amber, h: 'SMALL n — WIDE INTERVAL', s: 'the two intervals overlap heavily',
      bars: [
        { label: 'MODEL A', ly: 117, y: 126, lo: 70, hi: 280, mid: 170 },
        { label: 'MODEL B', ly: 161, y: 170, lo: 110, hi: 330, mid: 225 }
      ],
      v: 'You cannot tell these two apart yet'
    },
    {
      x: 410, c: COLORS.emerald, h: 'LARGER n — INTERVAL NARROWS', s: 'same two systems, more samples',
      bars: [
        { label: 'MODEL A', ly: 117, y: 126, lo: 145, hi: 195, mid: 170 },
        { label: 'MODEL B', ly: 161, y: 170, lo: 215, hi: 265, mid: 240 }
      ],
      v: 'Now the gap clears both intervals'
    }
  ];
  const kappa = [
    'Two raters will agree some of the time by luck alone.',
    'Raw agreement quietly counts that luck as success.',
    'A chance-corrected figure subtracts what random',
    'marking would have handed you anyway.'
  ];
  const paired = [
    'Run both versions over the same items, rather than',
    'two separately drawn samples.',
    'Compare the per-item differences, so the shared',
    'difficulty of the items cancels itself out.'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 458" caption="An eval score without an interval is a rumour — the interval is what tells you whether to act on it">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why an eval number needs an interval around it</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same comparison, measured twice — once on a small sample, once on a larger one</text>

      {panels.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="52" width="360" height="184" rx="10" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={p.x} y="52" width="360" height="26" rx="10" fill={p.c} />
          <text x={p.x + 180} y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{p.h}</text>
          <text x={p.x + 180} y="94" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">{p.s}</text>
          {p.bars.map((b, j) => (
            <g key={j}>
              <text x={p.x + 46} y={b.ly} fill={COLORS.slate400} fontSize="8.2" fontWeight="700">{b.label}</text>
              <line x1={p.x + 46} y1={b.y} x2={p.x + 346} y2={b.y} stroke={COLORS.slate200} strokeWidth="1" />
              <line x1={p.x + b.lo} y1={b.y} x2={p.x + b.hi} y2={b.y} stroke={p.c} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
              <line x1={p.x + b.lo} y1={b.y - 7} x2={p.x + b.lo} y2={b.y + 7} stroke={p.c} strokeWidth="2" />
              <line x1={p.x + b.hi} y1={b.y - 7} x2={p.x + b.hi} y2={b.y + 7} stroke={p.c} strokeWidth="2" />
              <circle cx={p.x + b.mid} cy={b.y} r="5" fill={COLORS.white} stroke={COLORS.slate900} strokeWidth="2" />
            </g>
          ))}
          <line x1={p.x + 46} y1="196" x2={p.x + 346} y2="196" stroke={COLORS.slate400} strokeWidth="1.5" />
          <text x={p.x + 46} y="210" fill={COLORS.slate500} fontSize="8.4">lower score</text>
          <text x={p.x + 346} y="210" textAnchor="end" fill={COLORS.slate500} fontSize="8.4">higher score</text>
          <text x={p.x + 180} y="228" textAnchor="middle" fill={p.c} fontSize="9.4" fontWeight="700">{p.v}</text>
        </g>
      ))}

      <rect x="30" y="248" width="740" height="34" rx="8" fill={COLORS.slate900} />
      <text x="400" y="270" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A difference smaller than the interval is not a result — it is the sample size talking</text>

      <rect x="30" y="294" width="360" height="116" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="294" width="360" height="26" rx="10" fill={COLORS.cyan} />
      <text x="210" y="312" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CHANCE-CORRECTED AGREEMENT</text>
      {kappa.map((t, i) => (
        <text key={i} x="46" y={340 + i * 17} fill={COLORS.slate700} fontSize="9.4">{t}</text>
      ))}

      <rect x="410" y="294" width="360" height="116" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="294" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="590" y="312" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PAIRED COMPARISON FOR A/B CHANGES</text>
      {paired.map((t, i) => (
        <text key={i} x="426" y={340 + i * 17} fill={COLORS.slate700} fontSize="9.4">{t}</text>
      ))}
      <text x="400" y="440" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Report the interval and the sample size beside every score, or the score cannot be argued with</text>
    </DiagramFrame>
  );
};

export const JailbreakTaxonomyDiagram = () => {
  const cats = [
    {
      c: COLORS.blue, n: ['ROLE-PLAY AND', 'PERSONA FRAMING'],
      idea: ['Wrapping a request in', 'a fictional frame so', 'rules feel suspended.'],
      test: ['Probe with in-character', 'framings and check the', 'policy still applies.']
    },
    {
      c: COLORS.cyan, n: ['INSTRUCTION', 'OVERRIDE'],
      idea: ['Claiming authority and', 'telling the model to', 'discard what came first.'],
      test: ['Test whether later text', 'can outrank the system', 'instructions at all.']
    },
    {
      c: COLORS.amber, n: ['ENCODING AND', 'OBFUSCATION'],
      idea: ['Hiding the request in', 'another representation', 'so filters do not match.'],
      test: ['Decode first, then run', 'the same checks over', 'the decoded content.']
    },
    {
      c: COLORS.amber, n: ['CONTEXT STUFFING', 'AND DISTRACTION'],
      idea: ['Burying the ask inside', 'a very long input until', 'it is no longer salient.'],
      test: ['Measure whether safety', 'holds at long context', 'as well as at short.']
    },
    {
      c: COLORS.red, n: ['MULTI-TURN', 'ESCALATION'],
      idea: ['Every turn is harmless;', 'the trajectory is not.', 'The drift is the point.'],
      test: ['Evaluate whole sessions', 'rather than messages,', 'and score the drift.']
    }
  ];
  const defs = [
    { t: 'Layer, do not rely', a: ['input checks, output checks', 'and least privilege'] },
    { t: 'Test whole sessions', a: ['single-turn suites miss', 'the escalation pattern'] },
    { t: 'Log and replay', a: ['keep every attempt as a', 'permanent regression case'] },
    { t: 'Contain the blast radius', a: ['assume something lands, and', 'limit what it can reach'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 428" caption="Defences hold at the level of the category — patch one phrasing and the same idea returns in another">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A defender’s map of jailbreak categories</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">five recurring shapes, and the test that tells you whether you are covered</text>

      <rect x="30" y="52" width="740" height="30" rx="8" fill={COLORS.red} />
      <text x="400" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Categories and detection strategies only — no payloads, templates or working examples here</text>

      {cats.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 148} y="88" width="140" height="148" rx="10" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={30 + i * 148} y="88" width="140" height="32" rx="10" fill={c.c} />
          <text x={100 + i * 148} y="103" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{c.n[0]}</text>
          <text x={100 + i * 148} y="115" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{c.n[1]}</text>
          <text x={40 + i * 148} y="134" fill={COLORS.slate400} fontSize="7.4" fontWeight="700">THE SHAPE OF IT</text>
          {c.idea.map((t, j) => (
            <text key={j} x={40 + i * 148} y={146 + j * 11} fill={COLORS.slate700} fontSize="8">{t}</text>
          ))}
          <line x1={40 + i * 148} y1="176" x2={160 + i * 148} y2="176" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={40 + i * 148} y="190" fill={c.c} fontSize="7.4" fontWeight="700">DEFENSIVE TEST</text>
          {c.test.map((t, j) => (
            <text key={j} x={40 + i * 148} y={202 + j * 11} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="262" fill={COLORS.emerald} fontSize="10" fontWeight="700">DEFENCES THAT APPLY ACROSS EVERY ONE OF THE FIVE</text>
      {defs.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="270" width="176" height="64" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={118 + i * 188} y="290" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{d.t}</text>
          <text x={118 + i * 188} y="306" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{d.a[0]}</text>
          <text x={118 + i * 188} y="318" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{d.a[1]}</text>
        </g>
      ))}

      <rect x="30" y="346" width="740" height="36" rx="10" fill={COLORS.slate900} />
      <text x="400" y="364" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Blocking one wording is not a fix — the category comes back wearing a different costume</text>
      <text x="400" y="377" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Measure by category, keep the failures, and rerun them on every model and prompt change</text>
      <text x="400" y="410" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Assume some attempt eventually succeeds, and design so that success still reaches very little</text>
    </DiagramFrame>
  );
};
