import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * AI SAFETY — what happens after a red-team finding
 * ------------------------------------------------------------------ */

export const SafetyDisclosureFlowDiagram = () => {
  const chain = [
    { c: COLORS.blue, n: 'FINDING', l: ['Something turned up', 'in red-teaming, or in', 'ordinary use.'] },
    { c: COLORS.amber, n: 'TRIAGE', l: ['How bad is it, and', 'how easily could', 'somebody do it?'] },
    { c: COLORS.cyan, n: 'FIX OR MITIGATE', l: ['Remove it, or reduce', 'what it can reach', 'while it stays open.'] },
    { c: COLORS.emerald, n: 'VERIFY', l: ['Re-run the original', 'reproduction and', 'confirm it is closed.'] }
  ];
  const cells = [
    { x: 140, y: 240, c: COLORS.amber, t: 'Fix on a schedule', s: 'and track it openly' },
    { x: 254, y: 240, c: COLORS.red, t: 'Fix first', s: 'ahead of everything' },
    { x: 140, y: 282, c: COLORS.slate500, t: 'Log and batch', s: 'with the rest' },
    { x: 254, y: 282, c: COLORS.amber, t: 'Mitigate now', s: 'then fix it properly' }
  ];
  const routes = [
    {
      c: COLORS.blue, n: 'INTERNAL ONLY',
      l: ['The issue and the fix both sit inside one', 'organisation, so nothing needs to go out.']
    },
    {
      c: COLORS.cyan, n: 'COORDINATED WITH THE AFFECTED VENDOR',
      l: ['Someone else has to ship the fix, so they get', 'notice, a reproduction, and a window to act.']
    },
    {
      c: COLORS.emerald, n: 'PUBLIC, AFTER REMEDIATION',
      l: ['Published once the fix is out, so everyone', 'else can check whether they were affected.']
    }
  ];
  const timing = [
    {
      c: COLORS.red, t: 'Too early',
      l: ['The details are public while people are', 'still exposed and no fix exists yet.']
    },
    {
      c: COLORS.amber, t: 'Too late',
      l: ['Somebody finds the same thing on their', 'own, and nobody was warned in between.']
    },
    {
      c: COLORS.emerald, t: 'What actually decides it',
      l: ['Who is exposed, whether a fix exists,', 'and whether it is already being used.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 546" caption="Finding the problem is the easy half — the judgement is who needs to know, and how soon they need it">
      <defs>
        <marker id="arrowSDF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What happens after red-teaming finds something</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the pipeline is routine; the last step is the one that needs actual judgement</text>

      {chain.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="52" width="170" height="80" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 190} y="52" width="170" height="24" rx="10" fill={s.c} />
          <text x={115 + i * 190} y="69" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">{s.n}</text>
          {s.l.map((t, j) => (
            <text key={j} x={40 + i * 190} y={92 + j * 12} fill={COLORS.slate700} fontSize="8.2">{t}</text>
          ))}
          {i < 3 && <line x1={202 + i * 190} y1="92" x2={216 + i * 190} y2="92" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowSDF)" />}
        </g>
      ))}

      <rect x="30" y="142" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="163" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A finding nobody can reproduce on demand is an anecdote — triage has nothing to act on</text>

      <rect x="30" y="186" width="352" height="172" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="186" width="352" height="26" rx="10" fill={COLORS.amber} />
      <text x="206" y="204" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">TRIAGE — WHAT SETS THE ORDER</text>
      <text x="195" y="230" textAnchor="middle" fill={COLORS.slate400} fontSize="7.8" fontWeight="700">LOW EXPLOITABILITY</text>
      <text x="309" y="230" textAnchor="middle" fill={COLORS.slate400} fontSize="7.8" fontWeight="700">HIGH EXPLOITABILITY</text>
      <text x="134" y="264" textAnchor="end" fill={COLORS.slate400} fontSize="7.8" fontWeight="700">HIGH SEVERITY</text>
      <text x="134" y="306" textAnchor="end" fill={COLORS.slate400} fontSize="7.8" fontWeight="700">LOW SEVERITY</text>
      {cells.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="110" height="38" rx="6" fill={COLORS.white} stroke={c.c} strokeWidth="1.8" />
          <text x={c.x + 55} y={c.y + 17} textAnchor="middle" fill={c.c} fontSize="8.6" fontWeight="700">{c.t}</text>
          <text x={c.x + 55} y={c.y + 29} textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">{c.s}</text>
        </g>
      ))}
      <text x="44" y="338" fill={COLORS.slate600} fontSize="8">Severity alone does not set the order — exploitability moves it.</text>

      <rect x="418" y="186" width="352" height="172" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="418" y="186" width="352" height="26" rx="10" fill={COLORS.blue} />
      <text x="594" y="204" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DISCLOSURE — WHERE IT CAN GO</text>
      {routes.map((r, i) => (
        <g key={i}>
          <rect x="430" y={222 + i * 44} width="4" height="34" rx="2" fill={r.c} />
          <text x="442" y={234 + i * 44} fill={r.c} fontSize="9.2" fontWeight="700">{r.n}</text>
          {r.l.map((t, j) => (
            <text key={j} x="442" y={246 + i * 44 + j * 11} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="382" fill={COLORS.slate700} fontSize="10" fontWeight="700">AND THE TIMING IS THE PART NO CHECKLIST DECIDES FOR YOU</text>
      {timing.map((t, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="390" width="236" height="68" rx="10" fill={COLORS.white} stroke={t.c} strokeWidth="2" />
          <text x={148 + i * 252} y="412" textAnchor="middle" fill={t.c} fontSize="9.8" fontWeight="700">{t.t}</text>
          {t.l.map((s, j) => (
            <text key={j} x={42 + i * 252} y={430 + j * 12} fill={COLORS.slate600} fontSize="8.4">{s}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="468" width="740" height="36" rx="10" fill={COLORS.slate900} />
      <text x="400" y="486" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Disclosure is a decision about other people’s exposure, not about who gets the credit</text>
      <text x="400" y="499" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Write the report so a stranger can reproduce it, or the fix cannot be verified by anyone else</text>
      <text x="400" y="528" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — any real programme sets its own disclosure policy in advance</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * HEALTHCARE — conceptual orientation only, no figures, no guidance
 * ------------------------------------------------------------------ */

export const ImagingAICapabilitiesDiagram = () => {
  const strong = [
    { t: 'Detection of specified findings', l: ['Looking for exactly the thing it was trained to look', 'for, on every study, without getting tired.'] },
    { t: 'Measurement and quantification', l: ['Sizes, volumes and densities, computed the same way', 'each time rather than estimated by eye.'] },
    { t: 'Prioritising a worklist', l: ['Reordering the queue so studies that look urgent', 'surface earlier than they otherwise would.'] },
    { t: 'Flagging comparisons', l: ['Pointing at the prior study and at where something', 'appears to have changed since it was taken.'] }
  ];
  const weak = [
    { t: 'Anything outside its trained scope', l: ['A finding it was never taught to look for is, as far', 'as the output is concerned, simply not present.', 'Silence is not the same as a negative.'] },
    { t: 'Clinical context', l: ['The history, the examination, the reason the study', 'was requested and what has already been tried all', 'sit outside the pixels it was given.'] },
    { t: 'Judgement about the whole patient', l: ['What this finding means for this person, what to do', 'next, and whether it matters at all is a question', 'the model was never asked to answer.'] }
  ];
  const practice = [
    { t: 'A clean output is not a clean study', l: ['Nothing flagged only means nothing', 'on the list it was trained to flag.'] },
    { t: 'The reader still owns the rest', l: ['Everything outside the trained scope', 'is exactly as unassisted as before.'] },
    { t: 'Scope has to be written down', l: ['If nobody can state what it looks', 'for, nobody can state what it missed.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="It answers the question it was trained on and stays silent on every other one — silence reads as reassurance">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What imaging AI genuinely does well, and what it does not</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the split is not about difficulty — it is about whether the question was specified in advance</text>

      <rect x="30" y="52" width="360" height="232" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="52" width="360" height="28" rx="10" fill={COLORS.emerald} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">GENUINELY STRONG AT</text>
      {strong.map((s, i) => (
        <g key={i}>
          <circle cx="50" cy={93 + i * 46} r="3" fill={COLORS.emerald} />
          <text x="62" y={97 + i * 46} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x="62" y={110 + i * 46 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="410" y="52" width="360" height="232" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="52" width="360" height="28" rx="10" fill={COLORS.red} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">NOT WHAT IT IS FOR</text>
      {weak.map((w, i) => (
        <g key={i}>
          <circle cx="430" cy={93 + i * 62} r="3" fill={COLORS.red} />
          <text x="442" y={97 + i * 62} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{w.t}</text>
          {w.l.map((t, j) => (
            <text key={j} x="442" y={110 + i * 62 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="296" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="314" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Strong wherever the question was specified in advance, weak wherever it was not</text>
      <text x="400" y="328" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Nothing in the output distinguishes “there is nothing there” from “nothing I was taught to see”</text>

      <text x="30" y="358" fill={COLORS.slate700} fontSize="10" fontWeight="700">WHAT THAT MEANS FOR THE PERSON READING THE STUDY</text>
      {practice.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="366" width="236" height="66" rx="10" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={148 + i * 252} y="388" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{p.t}</text>
          {p.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={406 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}
      <text x="400" y="458" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — what any given tool is cleared to do is stated by its own labelling</text>
    </DiagramFrame>
  );
};

export const HealthDatasetBiasDiagram = () => {
  const sources = [
    { n: 'UNDER-REPRESENTATION', l: ['Whole groups appear rarely', 'or not at all, so nothing', 'ever forced the model to', 'get them right.'] },
    { n: 'PROXY VARIABLES', l: ['Something easy to record', 'stands in for the thing', 'actually being predicted,', 'and carries its history.'] },
    { n: 'MEASUREMENT DIFFERENCES', l: ['Devices, settings and skin', 'tones change the signal', 'itself, long before any', 'model has seen it.'] },
    { n: 'LABEL NOISE', l: ['Documentation practice', 'varies between people and', 'sites, so the same case is', 'written down differently.'] }
  ];
  const groups = [
    { n: 'Largest group in the training data', w: 148, c: COLORS.emerald },
    { n: 'Another well-represented group', w: 138, c: COLORS.emerald },
    { n: 'Different device or setting', w: 108, c: COLORS.amber },
    { n: 'Under-represented group', w: 78, c: COLORS.red },
    { n: 'Rarely and unevenly documented', w: 60, c: COLORS.red }
  ];
  const detect = [
    { t: 'Pre-specify the subgroups', l: ['Decide before you measure, so the', 'cut is not chosen after the fact.'] },
    { t: 'Report every subgroup, always', l: ['A single headline figure is the one', 'number able to hide all of this.'] },
    { t: 'Set the bar on the worst one', l: ['If the weakest subgroup fails then', 'the model fails, not the average.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 546" caption="An average is a summary of everyone and a description of no one — bias hides in exactly that gap">
      <defs>
        <marker id="arrowHDB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How bias gets into health data, and what it does once there</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">four ordinary, unglamorous routes in — and one reporting habit that makes them visible</text>

      {sources.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="52" width="176" height="104" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
          <rect x={30 + i * 188} y="52" width="176" height="26" rx="10" fill={COLORS.amber} />
          <text x={118 + i * 188} y="70" textAnchor="middle" fill={COLORS.white} fontSize="9.2" fontWeight="700">{s.n}</text>
          {s.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={94 + j * 12} fill={COLORS.slate700} fontSize="8.4">{t}</text>
          ))}
          <line x1={118 + i * 188} y1="156" x2={118 + i * 188} y2="168" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowHDB)" />
        </g>
      ))}

      <rect x="30" y="172" width="740" height="34" rx="8" fill={COLORS.slate700} />
      <text x="400" y="194" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">None of these announce themselves — they arrive as a model that works less well for some people</text>

      <rect x="30" y="218" width="360" height="144" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <rect x="30" y="218" width="360" height="26" rx="10" fill={COLORS.slate600} />
      <text x="210" y="236" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT THE HEADLINE NUMBER SHOWS</text>
      <text x="44" y="262" fill={COLORS.slate700} fontSize="9">One overall figure, averaged across everybody who</text>
      <text x="44" y="276" fill={COLORS.slate700} fontSize="9">happened to be in the evaluation set. It looks fine,</text>
      <text x="44" y="290" fill={COLORS.slate700} fontSize="9">and it is not wrong — it is simply not an answer.</text>
      <rect x="44" y="304" width="300" height="18" rx="9" fill={COLORS.emerald} />
      <text x="194" y="317" textAnchor="middle" fill={COLORS.white} fontSize="8.8" fontWeight="700">OVERALL — LOOKS ACCEPTABLE</text>
      <text x="44" y="342" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">The average is held up by whoever the data had most of.</text>

      <rect x="410" y="218" width="360" height="144" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="218" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="236" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE SAME MODEL, SPLIT BY SUBGROUP</text>
      {groups.map((g, i) => (
        <g key={i}>
          <text x="424" y={264 + i * 20} fill={COLORS.slate700} fontSize="8.2">{g.n}</text>
          <rect x="600" y={255 + i * 20} width="156" height="11" rx="5.5" fill={COLORS.slate100} />
          <rect x="600" y={255 + i * 20} width={g.w} height="11" rx="5.5" fill={g.c} />
        </g>
      ))}

      <text x="30" y="386" fill={COLORS.blue} fontSize="10" fontWeight="700">HOW YOU FIND IT BEFORE SOMEBODY ELSE DOES</text>
      {detect.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="394" width="236" height="64" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <text x={148 + i * 252} y="414" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{d.t}</text>
          {d.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={432 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="468" width="740" height="36" rx="10" fill={COLORS.slate900} />
      <text x="400" y="486" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Unequal performance is the symptom; the data collection is where it was decided</text>
      <text x="400" y="499" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A model can only be as fair as the record it learned from, and records were never neutral</text>
      <text x="400" y="528" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — which subgroups matter is a question for the setting and its people</text>
    </DiagramFrame>
  );
};

export const ClinicalGovernanceCommitteeDiagram = () => {
  const seats = [
    { c: COLORS.blue, n: 'CLINICAL LEADS', l: ['Does the claim match', 'how care is actually', 'delivered here?'] },
    { c: COLORS.cyan, n: 'INFORMATICS', l: ['Can it integrate,', 'and can it be run', 'and supported?'] },
    { c: COLORS.slate600, n: 'PRIVACY, SECURITY', l: ['Where does the data', 'go, who sees it,', 'and on what basis?'] },
    { c: COLORS.slate700, n: 'LEGAL, COMPLIANCE', l: ['Obligations, records', 'and who answers for', 'it when it is wrong.'] },
    { c: COLORS.amber, n: 'EQUITY', l: ['Who might this work', 'less well for, and', 'who is not here?'] },
    { c: COLORS.emerald, n: 'FRONTLINE USERS', l: ['What happens on a', 'busy day, with a', 'real queue waiting?'] }
  ];
  const decides = [
    { n: 'INTAKE REQUESTS', l: ['Who is asking, for what,', 'and does it belong in the', 'queue at all?'] },
    { n: 'DEPLOYMENT APPROVAL', l: ['Scope, limits, training,', 'and the named owner who', 'answers for it.'] },
    { n: 'MONITORING REVIEW', l: ['Reports read on a stated', 'cadence, against the bar', 'agreed before go-live.'] },
    { n: 'WITHDRAWAL AUTHORITY', l: ['The power to stop it, held', 'here rather than by the', 'people who wanted it.'] }
  ];
  const escalate = [
    { c: COLORS.amber, t: 'Monitoring flags it', l: ['A signal crosses the', 'threshold that was', 'agreed at the start.'] },
    { c: COLORS.amber, t: 'The owner triages', l: ['The named owner checks', 'it and writes it up for', 'the committee.'] },
    { c: COLORS.blue, t: 'Reviewed out of cycle', l: ['The committee meets', 'without waiting for', 'the next scheduled slot.'] },
    { c: COLORS.red, t: 'Restrict, pause, withdraw', l: ['A decision is made and', 'recorded, along with', 'who made it and why.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="A committee is only real if it can say no and make it stick — otherwise it is a mailing list with minutes">
      <defs>
        <marker id="arrowCGC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Who sits on an institutional AI governance committee</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each seat is there because it asks a question none of the others would think to ask</text>

      {seats.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 124} y="52" width="118" height="96" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 124} y="52" width="118" height="26" rx="10" fill={s.c} />
          <text x={89 + i * 124} y="70" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{s.n}</text>
          {s.l.map((t, j) => (
            <text key={j} x={39 + i * 124} y={96 + j * 12} fill={COLORS.slate600} fontSize="7.8">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="158" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="179" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">One committee, one register of what is in use, and one place where a deployment can be stopped</text>

      <text x="30" y="212" fill={COLORS.blue} fontSize="10" fontWeight="700">WHAT IT ACTUALLY DECIDES</text>
      {decides.map((d, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="220" width="176" height="84" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <rect x={30 + i * 188} y="220" width="176" height="24" rx="10" fill={COLORS.blue} />
          <text x={118 + i * 188} y="237" textAnchor="middle" fill={COLORS.white} fontSize="9.2" fontWeight="700">{d.n}</text>
          {d.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={260 + j * 12} fill={COLORS.slate700} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="328" fill={COLORS.red} fontSize="10" fontWeight="700">THE ESCALATION PATH WHEN MONITORING FLAGS A PROBLEM</text>
      {escalate.map((e, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="336" width="170" height="68" rx="10" fill={COLORS.white} stroke={e.c} strokeWidth="2" />
          <text x={115 + i * 190} y="358" textAnchor="middle" fill={e.c} fontSize="9.4" fontWeight="700">{e.t}</text>
          {e.l.map((t, j) => (
            <text key={j} x={40 + i * 190} y={374 + j * 11} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          {i < 3 && <line x1={202 + i * 190} y1="370" x2={216 + i * 190} y2="370" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCGC)" />}
        </g>
      ))}

      <rect x="30" y="416" width="740" height="36" rx="10" fill={COLORS.slate900} />
      <text x="400" y="434" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The seat that matters most is the one that can pull something out of use</text>
      <text x="400" y="447" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Approval is easy to give and hard to take back unless somebody was handed that job up front</text>
      <text x="400" y="478" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — how any institution constitutes this group is a local decision</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * LEGAL — reviewing many documents without reading them all the same
 * ------------------------------------------------------------------ */

export const DiligenceAtVolumeDiagram = () => {
  const cols = ['Liability', 'Indemnity', 'Termination', 'Assignment'];
  const grid = [
    { n: 'Contract A', cells: [1, 0, 2, 0] },
    { n: 'Contract B', cells: [0, 0, 0, 1] },
    { n: 'Contract C', cells: [2, 2, 1, 2] },
    { n: 'Contract D', cells: [0, 0, 0, 0] },
    { n: 'Contract E', cells: [1, 0, 1, 0] }
  ];
  const fills = [COLORS.emerald, COLORS.amber, COLORS.red];
  const ranked = [
    { n: 'Contract C', w: 206, c: COLORS.red },
    { n: 'Contract A', w: 154, c: COLORS.red },
    { n: 'Contract E', w: 112, c: COLORS.amber },
    { n: 'Contract B', w: 70, c: COLORS.emerald },
    { n: 'Contract D', w: 38, c: COLORS.emerald }
  ];
  const routes = [
    {
      c: COLORS.red, t: 'FURTHEST FROM STANDARD', s: 'senior review, read in full',
      l: ['Read end to end by somebody', 'who can decide whether the', 'departure is acceptable.']
    },
    {
      c: COLORS.amber, t: 'SOMEWHERE IN BETWEEN', s: 'ordinary review',
      l: ['Checked against the terms the', 'extraction actually flagged,', 'not read cover to cover.']
    },
    {
      c: COLORS.emerald, t: 'ROUTINE', s: 'lighter check',
      l: ['Confirmed as standard on the', 'extracted terms and moved', 'through without a deep read.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 526" caption="Ranking tells you where to look first; sampling the bottom of the pile is how you learn the ranking was wrong">
      <defs>
        <marker id="arrowDAV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Reviewing many documents without reading them all the same way</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">extract into a common shape, rank by how far each one departs from it, then spend attention unevenly</text>

      <rect x="30" y="52" width="380" height="206" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="52" width="380" height="26" rx="10" fill={COLORS.blue} />
      <text x="220" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EXTRACT INTO A STRUCTURED COMPARISON</text>
      <text x="220" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">every document reduced to the same handful of columns</text>
      <rect x="44" y="100" width="10" height="8" rx="2" fill={COLORS.emerald} />
      <text x="58" y="107" fill={COLORS.slate600} fontSize="7.4">standard</text>
      <rect x="106" y="100" width="10" height="8" rx="2" fill={COLORS.amber} />
      <text x="120" y="107" fill={COLORS.slate600} fontSize="7.4">minor deviation</text>
      <rect x="196" y="100" width="10" height="8" rx="2" fill={COLORS.red} />
      <text x="210" y="107" fill={COLORS.slate600} fontSize="7.4">off standard</text>
      {cols.map((c, i) => (
        <text key={i} x={130 + i * 68} y="124" textAnchor="middle" fill={COLORS.slate400} fontSize="7.4" fontWeight="700">{c}</text>
      ))}
      {grid.map((r, i) => (
        <g key={i}>
          <text x="90" y={145 + i * 24} textAnchor="end" fill={COLORS.slate600} fontSize="7.8">{r.n}</text>
          {r.cells.map((v, j) => (
            <rect key={j} x={98 + j * 68} y={130 + i * 24} width="64" height="20" rx="4" fill={fills[v]} opacity="0.85" />
          ))}
        </g>
      ))}

      <rect x="430" y="52" width="340" height="206" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="430" y="52" width="340" height="26" rx="10" fill={COLORS.slate700} />
      <text x="600" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RANK BY DEVIATION FROM STANDARD</text>
      <text x="600" y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">the order tells you where to spend the scarce attention</text>
      {ranked.map((r, i) => (
        <g key={i}>
          <text x="444" y={128 + i * 26} fill={COLORS.slate700} fontSize="8.2">{r.n}</text>
          <rect x="524" y={119 + i * 26} width="232" height="12" rx="6" fill={COLORS.slate100} />
          <rect x="524" y={119 + i * 26} width={r.w} height="12" rx="6" fill={r.c} />
        </g>
      ))}
      <text x="444" y="252" fill={COLORS.slate500} fontSize="8" fontStyle="italic">Deviation is not risk — it is where risk is worth looking for.</text>

      <rect x="30" y="270" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="291" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The point is not to read less — it is to stop reading everything at exactly the same depth</text>

      <text x="30" y="326" fill={COLORS.slate700} fontSize="10" fontWeight="700">ROUTE BY WHERE EACH DOCUMENT LANDED IN THAT ORDER</text>
      {routes.map((r, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="334" width="236" height="84" rx="10" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="334" width="236" height="24" rx="10" fill={r.c} />
          <text x={148 + i * 252} y="351" textAnchor="middle" fill={COLORS.white} fontSize="9.2" fontWeight="700">{r.t}</text>
          <text x={148 + i * 252} y="371" textAnchor="middle" fill={r.c} fontSize="8.6" fontWeight="700">{r.s}</text>
          {r.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={387 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}
      <path d="M 660 418 L 660 428" fill="none" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowDAV)" />
      <text x="648" y="427" textAnchor="end" fill={COLORS.emerald} fontSize="8" fontWeight="700">random sample back out</text>

      <rect x="30" y="436" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Sample the routine bucket at random and read those ones in full</text>
      <text x="400" y="470" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Whatever the ranking scored wrongly is invisible precisely because it scored it low</text>
      <text x="400" y="482" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The sample is the only feedback the ranking will ever get about its own misses</text>
      <text x="400" y="510" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — what counts as a standard position is set by the practice, not the tool</text>
    </DiagramFrame>
  );
};
