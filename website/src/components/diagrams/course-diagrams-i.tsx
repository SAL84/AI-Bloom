import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE — checking output, cheap fakes, and who the tool helps
 * ------------------------------------------------------------------ */

export const CheckingAIOutputDiagram = () => {
  const tiers = [
    {
      c: COLORS.emerald, n: 'LOW STAKES', s: 'nobody is relying on this',
      ex: ['A caption idea, a rough plan,', 'a way to get yourself unstuck.'],
      dd: ['A quick plausibility read —', 'does this look about right?'],
      cost: 'Costs you a few seconds'
    },
    {
      c: COLORS.amber, n: 'IT ACTUALLY MATTERS', s: 'someone will act on it',
      ex: ['A message you send on, an', 'answer somebody else uses.'],
      dd: ['Check names, numbers, dates', 'and quotes against a source.'],
      cost: 'Costs you a few minutes'
    },
    {
      c: COLORS.red, n: 'YOU WILL BE JUDGED ON IT', s: 'your name is on the result',
      ex: ['Coursework, an application,', 'anything graded or public.'],
      dd: ['Verify every factual claim,', 'one at a time, at its source.'],
      cost: 'Costs less than being wrong'
    }
  ];
  const when = [
    {
      c: COLORS.emerald, tag: 'CHEAPEST', t: 'Right after you get it',
      l: ['You still remember what you asked', 'for, and nothing depends on it yet.', 'The fix is: ask again, or delete it.']
    },
    {
      c: COLORS.amber, tag: 'HARDER', t: 'Just before you hand it in',
      l: ['Now you are re-reading something', 'you already decided was finished,', 'which is harder than it sounds.']
    },
    {
      c: COLORS.red, tag: 'MOST EXPENSIVE', t: 'After you relied on it',
      l: ['Somebody else found the error', 'first, so you are correcting it', 'in public and defending the rest.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Checking costs about the same whatever the stakes — not checking is what gets steadily more expensive">
      <defs>
        <linearGradient id="gradCAOtime" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="52%" stopColor={COLORS.amber} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How much checking an AI answer actually deserves</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same habit at three sizes — you pick the size from what happens if it is wrong</text>

      {tiers.map((t, i) => (
        <g key={i}>
          <rect x={30 + i * 257} y="52" width="226" height="186" rx="10" fill={COLORS.white} stroke={t.c} strokeWidth="2" />
          <rect x={30 + i * 257} y="52" width="226" height="30" rx="10" fill={t.c} />
          <text x={143 + i * 257} y="72" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{t.n}</text>
          <text x={143 + i * 257} y="98" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{t.s}</text>
          <text x={44 + i * 257} y="118" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">WHAT IT LOOKS LIKE</text>
          {t.ex.map((s, j) => (
            <text key={j} x={44 + i * 257} y={131 + j * 12} fill={COLORS.slate700} fontSize="8.6">{s}</text>
          ))}
          <line x1={44 + i * 257} y1="156" x2={242 + i * 257} y2="156" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={44 + i * 257} y="169" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">THE CHECK THAT FITS</text>
          {t.dd.map((s, j) => (
            <text key={j} x={44 + i * 257} y={182 + j * 12} fill={COLORS.slate700} fontSize="8.6">{s}</text>
          ))}
          <line x1={44 + i * 257} y1="205" x2={242 + i * 257} y2="205" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={143 + i * 257} y="223" textAnchor="middle" fill={t.c} fontSize="9.2" fontWeight="700">{t.cost}</text>
        </g>
      ))}

      <text x="30" y="262" fill={COLORS.slate700} fontSize="10" fontWeight="700">AND THE SAME CHECK GETS MORE EXPENSIVE THE LONGER YOU LEAVE IT</text>
      {when.map((w, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="270" width="236" height="92" rx="10" fill={COLORS.white} stroke={w.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="270" width="236" height="22" rx="10" fill={w.c} />
          <text x={148 + i * 252} y="285" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{w.tag}</text>
          <text x={148 + i * 252} y="308" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{w.t}</text>
          {w.l.map((s, j) => (
            <text key={j} x={42 + i * 252} y={324 + j * 12} fill={COLORS.slate600} fontSize="8.4">{s}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="372" width="740" height="18" rx="9" fill="url(#gradCAOtime)" />
      <text x="44" y="385" fill={COLORS.white} fontSize="8.6" fontWeight="700">SECONDS TO FIX</text>
      <text x="756" y="385" textAnchor="end" fill={COLORS.white} fontSize="8.6" fontWeight="700">EXPENSIVE TO FIX</text>

      <rect x="30" y="402" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Size the check to what happens if the answer turns out to be wrong</text>
      <text x="400" y="434" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">and run it while the answer is still fresh, not after somebody else has found the mistake</text>
      <text x="400" y="468" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">“It sounded right” is not a check — a check is you looking at something that is not the AI</text>
    </DiagramFrame>
  );
};

export const MisinformationScaleDiagram = () => {
  const before = [
    'Making something convincing took time,',
    'skill, patience and a person willing to',
    'sit down and actually do it.',
    'That effort was the filter — and it was',
    'quietly doing most of the work.'
  ];
  const after = [
    'Producing something convincing now',
    'costs close to nothing, per item.',
    'The filter was not replaced by a better',
    'one. It was simply removed, and nothing',
    'took its place.'
  ];
  const jumps = [
    {
      c: COLORS.blue, n: 'VOLUME', bw: 42, aw: 196,
      b: ['A handful of convincing fakes', 'was a whole day of work.'],
      a: ['The limit is how fast you can', 'post them, not make them.']
    },
    {
      c: COLORS.cyan, n: 'PERSONALISATION', bw: 34, aw: 188,
      b: ['One message, written once,', 'sent to everyone the same.'],
      a: ['A different version per person,', 'built from what is known of them.']
    },
    {
      c: COLORS.amber, n: 'SPEED', bw: 50, aw: 202,
      b: ['Hours or days between a real', 'event and a fake about it.'],
      a: ['The fake can arrive before the', 'real account is even posted.']
    }
  ];
  const oldWay = [
    'Inspect each thing you see and judge whether it',
    'looks real to you. That works while there are few',
    'of them, and breaks the moment there are more',
    'than any person could ever look at.'
  ];
  const newWay = [
    'Ask where it came from and who else is carrying it.',
    'This takes the same effort whether there is one of',
    'them or ten thousand, because you are checking the',
    'source once instead of every copy.'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 522" caption="Once making a fake is free, inspecting them one by one stops being a defence and starts being a queue">
      <defs>
        <marker id="arrowMIS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What changes when making convincing content becomes free</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">one bottleneck disappears, and three separate things jump at the same time</text>

      <rect x="30" y="52" width="340" height="104" rx="10" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <rect x="30" y="52" width="340" height="26" rx="10" fill={COLORS.slate700} />
      <text x="200" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT USED TO LIMIT FAKE CONTENT</text>
      {before.map((t, i) => (
        <text key={i} x="44" y={94 + i * 14} fill={COLORS.slate700} fontSize="9">{t}</text>
      ))}

      <rect x="430" y="52" width="340" height="104" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="430" y="52" width="340" height="26" rx="10" fill={COLORS.red} />
      <text x="600" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT THE BOTTLENECK GOING AWAY DID</text>
      {after.map((t, i) => (
        <text key={i} x="444" y={94 + i * 14} fill={COLORS.slate700} fontSize="9">{t}</text>
      ))}
      <line x1="374" y1="104" x2="424" y2="104" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowMIS)" />

      {jumps.map((j, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="172" width="236" height="138" rx="10" fill={COLORS.white} stroke={j.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="172" width="236" height="24" rx="10" fill={j.c} />
          <text x={148 + i * 252} y="189" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">{j.n}</text>
          <text x={44 + i * 252} y="212" fill={COLORS.slate400} fontSize="7.4" fontWeight="700">BEFORE</text>
          <rect x={44 + i * 252} y="218" width={j.bw} height="7" rx="3.5" fill={COLORS.slate300} />
          {j.b.map((t, k) => (
            <text key={k} x={44 + i * 252} y={240 + k * 11} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          <text x={44 + i * 252} y="274" fill={j.c} fontSize="7.4" fontWeight="700">NOW THAT IT IS FREE</text>
          <rect x={44 + i * 252} y="280" width={j.aw} height="7" rx="3.5" fill={j.c} />
          {j.a.map((t, k) => (
            <text key={k} x={44 + i * 252} y={302 + k * 11} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="334" fill={COLORS.slate700} fontSize="10" fontWeight="700">SO THE DEFENCE HAS TO CHANGE SHAPE TOO</text>

      <rect x="30" y="342" width="330" height="86" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="342" width="330" height="26" rx="10" fill={COLORS.red} />
      <text x="195" y="360" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">THE OLD DEFENCE: SPOT THE FAKE</text>
      {oldWay.map((t, i) => (
        <text key={i} x="44" y={384 + i * 12} fill={COLORS.slate700} fontSize="8.6">{t}</text>
      ))}

      <rect x="440" y="342" width="330" height="86" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="440" y="342" width="330" height="26" rx="10" fill={COLORS.emerald} />
      <text x="605" y="360" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">THE ONE THAT SCALES: CHECK THE SOURCE</text>
      {newWay.map((t, i) => (
        <text key={i} x="454" y={384 + i * 12} fill={COLORS.slate700} fontSize="8.6">{t}</text>
      ))}
      <line x1="364" y1="385" x2="434" y2="385" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowMIS)" />

      <rect x="30" y="440" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Volume beats inspection — you cannot personally examine everything that arrives</text>
      <text x="400" y="472" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Checking who is behind something costs the same no matter how many copies of it exist</text>
      <text x="400" y="504" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">If the only place a claim exists is the post in front of you, that is the finding, not the caption</text>
    </DiagramFrame>
  );
};

export const AmplifierNotReplacementDiagram = () => {
  const lanes = [
    {
      c: COLORS.emerald, y: 100, tag: 'SOMEONE WHO BRINGS JUDGEMENT AND SUBJECT KNOWLEDGE',
      bring: ['You know the subject well enough', 'to tell a good answer from a', 'confident wrong one.'],
      out: ['A real lift. Drafts you correct,', 'ideas you filter, and work that', 'still ends up sounding like you.']
    },
    {
      c: COLORS.red, y: 210, tag: 'SOMEONE WHO HAS NOT BUILT THAT YET',
      bring: ['You cannot yet tell whether the', 'answer is right, so anything', 'fluent reads as correct.'],
      out: ['Plausible output you have no way', 'to check, and no way to notice', 'the moment it quietly goes wrong.']
    }
  ];
  const mult = [
    { t: 'Subject knowledge', a: ['enough of it to notice the', 'answer that is quietly wrong'] },
    { t: 'Taste and judgement', a: ['knowing which draft is the', 'one actually worth keeping'] },
    { t: 'Knowing what you want', a: ['a vague ask gets a vague', 'answer, every single time'] },
    { t: 'Willingness to check', a: ['the lift only pays off if', 'you verify what came back'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 528" caption="A multiplier does nothing to a zero — the tool returns whatever ability you were already able to bring">
      <defs>
        <marker id="arrowANR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why the same tool helps two people by wildly different amounts</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">it multiplies what you already have rather than handing you something you did not</text>

      <rect x="30" y="52" width="740" height="38" rx="10" fill={COLORS.slate700} />
      <text x="150" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">What you already bring</text>
      <text x="275" y="77" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">×</text>
      <text x="400" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The same tool, the same prompt</text>
      <text x="525" y="77" textAnchor="middle" fill={COLORS.white} fontSize="13" fontWeight="700">=</text>
      <text x="650" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">What you get out of it</text>

      {lanes.map((l, i) => (
        <g key={i}>
          <rect x="30" y={l.y} width="740" height="22" rx="6" fill={l.c} />
          <text x="44" y={l.y + 15} fill={COLORS.white} fontSize="9.2" fontWeight="700">{l.tag}</text>

          <rect x="30" y={l.y + 26} width="270" height="72" rx="10" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <text x="44" y={l.y + 42} fill={COLORS.slate400} fontSize="7.6" fontWeight="700">WHAT YOU BRING</text>
          {l.bring.map((t, j) => (
            <text key={j} x="44" y={l.y + 56 + j * 12} fill={COLORS.slate700} fontSize="8.6">{t}</text>
          ))}
          <line x1="302" y1={l.y + 62} x2="316" y2={l.y + 62} stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowANR)" />

          <rect x="320" y={l.y + 26} width="160" height="72" rx="10" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x="400" y={l.y + 58} textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">THE SAME TOOL</text>
          <text x="400" y={l.y + 74} textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">no setting is different</text>
          <line x1="482" y1={l.y + 62} x2="496" y2={l.y + 62} stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowANR)" />

          <rect x="500" y={l.y + 26} width="270" height="72" rx="10" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <text x="514" y={l.y + 42} fill={COLORS.slate400} fontSize="7.6" fontWeight="700">WHAT COMES OUT</text>
          {l.out.map((t, j) => (
            <text key={j} x="514" y={l.y + 56 + j * 12} fill={l.c} fontSize="8.6">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="320" width="740" height="32" rx="8" fill={COLORS.amber} />
      <text x="400" y="341" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Nothing about the tool changed between those two rows — the person in front of it did</text>

      <text x="30" y="376" fill={COLORS.slate700} fontSize="10" fontWeight="700">WHAT IS ACTUALLY GETTING MULTIPLIED</text>
      {mult.map((m, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="384" width="176" height="62" rx="8" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={118 + i * 188} y="404" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{m.t}</text>
          <text x={118 + i * 188} y="420" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{m.a[0]}</text>
          <text x={118 + i * 188} y="432" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{m.a[1]}</text>
        </g>
      ))}

      <rect x="30" y="458" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The tool is not a shortcut around learning the subject — it is a reason to learn it</text>
      <text x="400" y="490" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Whatever you cannot evaluate, you have to take on trust, and it is confident either way</text>
      <text x="400" y="516" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Ask what you would have to know to catch it being wrong — then go and know that</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — evals against unit tests, and where cases come from
 * ------------------------------------------------------------------ */

export const EvalsAsUnitTestsDiagram = () => {
  const rows = [
    {
      d: 'THE OUTCOME', s: 'what a run gives you',
      u: ['Binary. It passed or it failed, and', 'there is nothing in between.'],
      e: ['Graded. A score, a rubric band, or a', 'judgement that has degrees in it.']
    },
    {
      d: 'REPEATABILITY', s: 'run it twice',
      u: ['Deterministic. The same input gives', 'the same result every single time.'],
      e: ['Probabilistic. The same input can', 'give a different answer next run.']
    },
    {
      d: 'ONE CASE', s: 'how much it tells you',
      u: ['One failing case is conclusive, and', 'it localises a real defect.'],
      e: ['One case proves almost nothing on', 'its own. You need many, sampled well.']
    },
    {
      d: 'THE THRESHOLD', s: 'what counts as passing',
      u: ['Every assertion must hold. A single', 'failure fails the whole build.'],
      e: ['An aggregate bar across a suite, with', 'the run-to-run spread reported too.']
    }
  ];
  const carries = [
    'Fast feedback, while the change is still in your head',
    'Runs automatically on every change, not when remembered',
    'Lives in version control beside the thing it tests',
    'Can fail the build and hold back a release',
    'Every failure found becomes a permanent case in the suite'
  ];
  const breaks = [
    'Exact-match assertions over free-form output',
    'One run being enough to call it passed or failed',
    'A single case pinpointing a single broken line',
    'A green suite meaning the behaviour is actually correct',
    'Thresholds chosen without knowing the run-to-run spread'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 510" caption="Borrow the discipline of testing and the place it sits in the pipeline — not its idea of what a pass means">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Evals are like unit tests — right up until they are not</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the analogy earns its keep on process and fails on everything about the assertion itself</text>

      <rect x="30" y="54" width="176" height="28" rx="6" fill={COLORS.slate700} />
      <text x="118" y="73" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">DIMENSION</text>
      <rect x="210" y="54" width="276" height="28" rx="6" fill={COLORS.blue} />
      <text x="348" y="73" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">A UNIT TEST</text>
      <rect x="490" y="54" width="280" height="28" rx="6" fill={COLORS.cyan} />
      <text x="630" y="73" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">AN EVAL</text>

      {rows.map((r, i) => (
        <g key={i}>
          <rect x="30" y={86 + i * 46} width="176" height="42" rx="6" fill={COLORS.slate100} stroke={COLORS.slate200} strokeWidth="1" />
          <text x="44" y={104 + i * 46} fill={COLORS.slate900} fontSize="9.2" fontWeight="700">{r.d}</text>
          <text x="44" y={117 + i * 46} fill={COLORS.slate500} fontSize="8">{r.s}</text>
          <rect x="210" y={86 + i * 46} width="276" height="42" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.5" />
          {r.u.map((t, j) => (
            <text key={j} x="222" y={104 + i * 46 + j * 13} fill={COLORS.slate700} fontSize="8.8">{t}</text>
          ))}
          <rect x="490" y={86 + i * 46} width="280" height="42" rx="6" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
          {r.e.map((t, j) => (
            <text key={j} x="502" y={104 + i * 46 + j * 13} fill={COLORS.slate700} fontSize="8.8">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="284" width="360" height="132" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="284" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="210" y="302" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT CARRIES OVER FROM TESTING</text>
      {carries.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={326 + i * 20} r="2.5" fill={COLORS.emerald} />
          <text x="60" y={330 + i * 20} fill={COLORS.slate700} fontSize="9">{t}</text>
        </g>
      ))}

      <rect x="410" y="284" width="360" height="132" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="284" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="302" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT DOES NOT SURVIVE THE MOVE</text>
      {breaks.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={326 + i * 20} r="2.5" fill={COLORS.red} />
          <text x="440" y={330 + i * 20} fill={COLORS.slate700} fontSize="9">{t}</text>
        </g>
      ))}

      <rect x="30" y="428" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="446" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Many cases and an aggregate threshold do the job that one assertion used to do</text>
      <text x="400" y="460" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A single run is a sample of the behaviour, so treat a one-run difference as noise until it repeats</text>
      <text x="400" y="492" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Keep the pipeline habits of testing and replace its arithmetic — that is the whole translation</text>
    </DiagramFrame>
  );
};

export const SourcingEvalCasesDiagram = () => {
  const sources = [
    {
      c: COLORS.emerald, t: 'Real production traffic',
      d: 'Actual inputs your users sent, drawn across the whole distribution',
      note: 'the only source that matches reality'
    },
    {
      c: COLORS.emerald, t: 'Real failures and incidents',
      d: 'Everything that already went wrong, kept forever as a regression case',
      note: 'each one is only paid for once'
    },
    {
      c: COLORS.cyan, t: 'Support tickets and complaints',
      d: 'Where users told you it was wrong, in their own words and context',
      note: 'skewed to the vocal, but still real'
    },
    {
      c: COLORS.blue, t: 'Expert-authored edge cases',
      d: 'The rare and awkward cases a domain expert already knows to fear',
      note: 'covers what traffic has not hit yet'
    },
    {
      c: COLORS.amber, t: 'Synthetic and generated cases',
      d: 'Model-written variations that fill a coverage gap you can name',
      note: 'gap filler, never the baseline'
    }
  ];
  const steps = [
    { t: 'Pool the candidates', l: ['Everything eligible from', 'the sources above, before', 'anybody picks favourites.'] },
    { t: 'Stratify it', l: ['Split by what actually', 'changes difficulty: type,', 'length, language, user.'] },
    { t: 'Sample within strata', l: ['Draw from every stratum so', 'rare-but-real slices are', 'not rounded away to zero.'] },
    { t: 'Freeze and version', l: ['Lock the set, record how', 'it was drawn, and change', 'it only on purpose.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 534" caption="Cases you invent test the system you imagined — cases you collect test the one your users actually met">
      <defs>
        <marker id="arrowSEC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where eval cases come from, best source first</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">ranked by how much a passing score on them tells you about live behaviour</text>

      {sources.map((s, i) => (
        <g key={i}>
          <rect x="30" y={56 + i * 54} width="740" height="50" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x="30" y={56 + i * 54} width="8" height="50" fill={s.c} />
          <circle cx="66" cy={81 + i * 54} r="13" fill={s.c} />
          <text x="66" y={85 + i * 54} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{i + 1}</text>
          <text x="90" y={77 + i * 54} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{s.t}</text>
          <text x="90" y={93 + i * 54} fill={COLORS.slate600} fontSize="8.8">{s.d}</text>
          <text x="756" y={86 + i * 54} textAnchor="end" fill={s.c} fontSize="8.4" fontStyle="italic">{s.note}</text>
        </g>
      ))}

      <text x="30" y="352" fill={COLORS.blue} fontSize="10" fontWeight="700">THE STEP THAT KEEPS THE SET REPRESENTATIVE RATHER THAN CHERRY-PICKED</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="360" width="170" height="80" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <circle cx={50 + i * 190} cy="382" r="11" fill={COLORS.blue} />
          <text x={50 + i * 190} y="386" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{i + 1}</text>
          <text x={68 + i * 190} y="386" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x={44 + i * 190} y={406 + j * 11} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          {i < 3 && <line x1={202 + i * 190} y1="400" x2={216 + i * 190} y2="400" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSEC)" />}
        </g>
      ))}

      <rect x="30" y="452" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Keep only the interesting cases and the score describes your taste, not the system</text>
      <text x="400" y="484" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The set has to look like the traffic, including the boring majority nobody wants to write down</text>
      <text x="400" y="516" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Every incident is a free case — the expensive part already happened, so at least keep it</text>
    </DiagramFrame>
  );
};
