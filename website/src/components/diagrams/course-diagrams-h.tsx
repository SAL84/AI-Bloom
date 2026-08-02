import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — choosing a default model instead of the best one
 * ------------------------------------------------------------------ */

export const CostLatencyFrontierDiagram = () => {
  const reasons = [
    { t: 'Most requests are easy', s: 'a small model already answers them well' },
    { t: 'Latency is part of quality', s: 'a slow right answer can still miss the moment' },
    { t: 'Cost caps usage', s: 'expensive per call means fewer calls get made' },
    { t: 'Quality has a useful ceiling', s: 'past the bar your users need, the gains go unused' },
    { t: 'Hard cases still exist', s: 'so the stronger option has to stay available' },
    { t: 'You can have both', s: 'route per request instead of choosing once' }
  ];
  const levers = [
    { t: 'Caching', a: ['identical and near-identical asks', 'should not be paid for twice'] },
    { t: 'Batching', a: ['group the work that is not urgent', 'and run it when capacity is cheap'] },
    { t: 'Trim the context', a: ['every unnecessary token is paid for', 'in latency as well as in cost'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 544" caption="The right default is the cheapest option that clears the bar — the strongest model is an escalation path">
      <defs>
        <marker id="arrowCLF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Quality against cost and latency — and why the best is rarely the default</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">axes are qualitative on purpose — the shape holds even as the individual options change</text>

      <rect x="30" y="52" width="380" height="250" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="42" y="70" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">QUALITY</text>
      <line x1="76" y1="76" x2="76" y2="268" stroke={COLORS.slate400} strokeWidth="1.5" />
      <line x1="76" y1="268" x2="392" y2="268" stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="76" y="286" fill={COLORS.slate400} fontSize="8.4" fontWeight="700">COST AND LATENCY →</text>

      <path d="M 96 252 C 150 252, 168 140, 240 124 C 310 108, 340 100, 384 94" fill="none" stroke={COLORS.blue} strokeWidth="2.5" />
      <line x1="76" y1="140" x2="392" y2="140" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="390" y="134" textAnchor="end" fill={COLORS.amber} fontSize="8" fontWeight="700">the bar your task actually needs</text>

      <circle cx="118" cy="214" r="6" fill={COLORS.emerald} />
      <text x="130" y="218" fill={COLORS.slate700} fontSize="8.6" fontWeight="700">small and fast</text>
      <circle cx="216" cy="132" r="6" fill={COLORS.cyan} />
      <text x="228" y="136" fill={COLORS.slate700} fontSize="8.6" fontWeight="700">mid-sized</text>
      <circle cx="352" cy="98" r="6" fill={COLORS.slate900} />
      <text x="344" y="88" textAnchor="end" fill={COLORS.slate700} fontSize="8.6" fontWeight="700">strongest</text>
      <text x="96" y="240" fill={COLORS.slate500} fontSize="8">each further step buys less</text>

      <rect x="430" y="52" width="340" height="250" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="430" y="52" width="340" height="28" rx="10" fill={COLORS.slate700} />
      <text x="600" y="71" textAnchor="middle" fill={COLORS.white} fontSize="10.2" fontWeight="700">WHY NOT SIMPLY ALWAYS USE THE BEST ONE</text>
      {reasons.map((r, i) => (
        <g key={i}>
          <circle cx="448" cy={102 + i * 36} r="3" fill={COLORS.blue} />
          <text x="460" y={106 + i * 36} fill={COLORS.slate900} fontSize="9.2" fontWeight="700">{r.t}</text>
          <text x="460" y={119 + i * 36} fill={COLORS.slate600} fontSize="8.2">{r.s}</text>
        </g>
      ))}

      <rect x="30" y="314" width="740" height="118" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="314" width="740" height="26" rx="10" fill={COLORS.blue} />
      <text x="400" y="332" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ROUTING — THE DEFAULT BECOMES A DECISION MADE PER REQUEST</text>

      <rect x="44" y="356" width="124" height="56" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="106" y="380" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">Incoming</text>
      <text x="106" y="394" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">requests</text>
      <line x1="170" y1="384" x2="184" y2="384" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCLF)" />

      <rect x="186" y="356" width="148" height="56" rx="8" fill={COLORS.slate700} />
      <text x="260" y="380" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">Router</text>
      <text x="260" y="394" textAnchor="middle" fill={COLORS.white} fontSize="8.4" opacity="0.9">how hard is this one?</text>

      <path d="M 334 384 L 344 384 M 344 364 L 344 408" fill="none" stroke={COLORS.slate500} strokeWidth="2" />
      <line x1="344" y1="364" x2="356" y2="364" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCLF)" />
      <line x1="344" y1="408" x2="356" y2="408" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCLF)" />

      <rect x="358" y="348" width="196" height="32" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="456" y="368" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">Easy → small, fast model</text>
      <rect x="358" y="392" width="196" height="32" rx="8" fill={COLORS.white} stroke={COLORS.slate900} strokeWidth="2" />
      <text x="456" y="412" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">Hard → stronger model</text>
      <line x1="556" y1="386" x2="570" y2="386" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCLF)" />

      <rect x="574" y="356" width="182" height="56" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
      <text x="665" y="378" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">Quality where it counts</text>
      <text x="665" y="394" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">at a fraction of the spend</text>

      {levers.map((l, i) => (
        <g key={i}>
          <rect x={30 + i * 250} y="444" width="240" height="54" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.5" />
          <text x={150 + i * 250} y="464" textAnchor="middle" fill={COLORS.cyan} fontSize="9.6" fontWeight="700">{l.t}</text>
          <text x={150 + i * 250} y="478" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{l.a[0]}</text>
          <text x={150 + i * 250} y="490" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{l.a[1]}</text>
        </g>
      ))}
      <text x="400" y="526" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Decide the quality bar first; everything after that is arithmetic about what clears it</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * HEALTHCARE — conceptual orientation only, no figures, no guidance
 * ------------------------------------------------------------------ */

export const ReaderAssistanceModesDiagram = () => {
  const modes = [
    {
      c: COLORS.blue, n: 'PRE-READ TRIAGE', s: 'before anyone reads',
      does: ['Sorts the worklist so likely', 'urgent studies surface', 'earlier in the queue.'],
      ov: ['Every study is still read', 'by a person, in some order.'],
      ev: ['Lowest bar — the order', 'changes, the reading does not.']
    },
    {
      c: COLORS.cyan, n: 'CONCURRENT ASSIST', s: 'shown while reading',
      does: ['Marks or scores appear', 'beside the images while the', 'reader is still reading.'],
      ov: ['The reader still decides, but', 'is anchored by the output.'],
      ev: ['Must show it helps without', 'importing automation bias.']
    },
    {
      c: COLORS.amber, n: 'SECOND READ', s: 'after an independent read',
      does: ['The human reads and commits', 'first; the model then flags', 'anything it thinks was missed.'],
      ov: ['Human judgement is formed', 'before the model speaks.'],
      ev: ['Needs evidence the extra', 'flags are worth the work.']
    },
    {
      c: COLORS.red, n: 'AUTONOMOUS', s: 'no human read at all',
      does: ['Issues a result for a defined', 'subset with no clinician', 'reading that case at all.'],
      ov: ['None per case — oversight', 'only at the system level.'],
      ev: ['Highest bar: prospective', 'evidence, and a safety net.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 436" caption="Autonomy is not a ladder you climb because you can — each rung is unlocked by evidence, not by capability">
      <defs>
        <linearGradient id="gradRAMov" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="55%" stopColor={COLORS.amber} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
        <linearGradient id="gradRAMev" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.blueMid} />
          <stop offset="55%" stopColor={COLORS.blue} />
          <stop offset="100%" stopColor={COLORS.slate900} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four ways an imaging model can sit in a reading workflow</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the further right you go, the less human oversight is left — and the more evidence is required</text>

      {modes.map((m, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="54" width="176" height="196" rx="10" fill={COLORS.white} stroke={m.c} strokeWidth="2" />
          <rect x={30 + i * 188} y="54" width="176" height="30" rx="10" fill={m.c} />
          <text x={118 + i * 188} y="74" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{m.n}</text>
          <text x={118 + i * 188} y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{m.s}</text>
          <text x={42 + i * 188} y="118" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">WHAT IT DOES</text>
          {m.does.map((t, j) => (
            <text key={j} x={42 + i * 188} y={130 + j * 11} fill={COLORS.slate700} fontSize="8.2">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="160" x2={194 + i * 188} y2="160" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={42 + i * 188} y="173" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">HUMAN OVERSIGHT</text>
          {m.ov.map((t, j) => (
            <text key={j} x={42 + i * 188} y={185 + j * 11} fill={COLORS.slate700} fontSize="8.2">{t}</text>
          ))}
          <line x1={42 + i * 188} y1="204" x2={194 + i * 188} y2="204" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={42 + i * 188} y="217" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">EVIDENCE BAR</text>
          {m.ev.map((t, j) => (
            <text key={j} x={42 + i * 188} y={229 + j * 11} fill={m.c} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="272" fill={COLORS.slate400} fontSize="8.6" fontWeight="700">HUMAN OVERSIGHT PER CASE</text>
      <rect x="30" y="278" width="740" height="20" rx="10" fill="url(#gradRAMov)" />
      <text x="46" y="292" fill={COLORS.white} fontSize="9" fontWeight="700">HIGHEST</text>
      <text x="754" y="292" textAnchor="end" fill={COLORS.white} fontSize="9" fontWeight="700">LOWEST</text>

      <text x="30" y="316" fill={COLORS.slate400} fontSize="8.6" fontWeight="700">EVIDENCE REQUIRED BEFORE USE</text>
      <rect x="30" y="322" width="740" height="20" rx="10" fill="url(#gradRAMev)" />
      <text x="46" y="336" fill={COLORS.slate900} fontSize="9" fontWeight="700">LOWEST</text>
      <text x="754" y="336" textAnchor="end" fill={COLORS.white} fontSize="9" fontWeight="700">HIGHEST</text>

      <rect x="30" y="356" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="374" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Oversight and evidence move in opposite directions — that is the whole design constraint</text>
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A mode is not better for being more autonomous; it is only allowed if the evidence carries it</text>
      <text x="400" y="420" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — the mode a service actually adopts is a local governance decision</text>
    </DiagramFrame>
  );
};

export const ClinicalDriftMonitoringDiagram = () => {
  const causes = [
    {
      n: 'POPULATION CHANGE',
      l: ['Who comes through the door', 'shifts — case mix, ages,', 'referral routes, seasons.']
    },
    {
      n: 'EQUIPMENT OR PROTOCOL',
      l: ['A new scanner, new settings,', 'a revised protocol, another', 'assay or another supplier.']
    },
    {
      n: 'UPSTREAM DATA CHANGE',
      l: ['Coding practice shifts, a', 'field gets repurposed, a', 'feed changes its format.']
    },
    {
      n: 'CLINICIAN BEHAVIOUR',
      l: ['People learn what the model', 'flags, and change what they', 'send it in the first place.']
    }
  ];
  const loop = [
    {
      t: 'Define the signals',
      l: ['Which outputs, which', 'subgroups, and what counts', 'as a warning — agreed first.']
    },
    {
      t: 'Measure on live data',
      l: ['Sample real cases and get', 'outcomes back, on a stated', 'cadence rather than rumour.']
    },
    {
      t: 'Compare to the bar',
      l: ['Against the threshold set', 'before go-live, not against', 'whatever now looks fine.']
    },
    {
      t: 'Act on the finding',
      l: ['Recalibrate, revalidate,', 'narrow the scope, or take', 'it out of use altogether.']
    }
  ];
  const outcomes = [
    { c: COLORS.emerald, t: 'Continue unchanged', l: ['performance is still inside', 'the limits agreed up front'] },
    { c: COLORS.amber, t: 'Revalidate or recalibrate', l: ['with the change documented', 'and the bar re-agreed'] },
    { c: COLORS.red, t: 'Restrict or withdraw', l: ['when it cannot be brought', 'back inside those limits'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="Validation is a photograph of one moment — monitoring is the only thing that tells you it still holds">
      <defs>
        <marker id="arrowCDM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why a model that passed validation quietly stops working</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nothing broke — the setting it was measured in moved, and the model did not move with it</text>

      {causes.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="52" width="176" height="94" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
          <rect x={30 + i * 188} y="52" width="176" height="26" rx="10" fill={COLORS.amber} />
          <text x={118 + i * 188} y="70" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">{c.n}</text>
          {c.l.map((t, j) => (
            <text key={j} x={42 + i * 188} y={96 + j * 12} fill={COLORS.slate700} fontSize="8.4">{t}</text>
          ))}
          <line x1={118 + i * 188} y1="146" x2={118 + i * 188} y2="158" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCDM)" />
        </g>
      ))}

      <rect x="30" y="160" width="740" height="34" rx="8" fill={COLORS.slate700} />
      <text x="400" y="182" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A model in live use — the same weights, quietly meeting a different world each month</text>

      <text x="30" y="218" fill={COLORS.blue} fontSize="10" fontWeight="700">THE MONITORING LOOP THAT CATCHES IT BEFORE ANYBODY ELSE DOES</text>
      {loop.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="226" width="170" height="80" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <circle cx={50 + i * 190} cy="248" r="11" fill={COLORS.blue} />
          <text x={50 + i * 190} y="252" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{i + 1}</text>
          <text x={68 + i * 190} y="252" fill={COLORS.slate900} fontSize="10" fontWeight="700">{s.t}</text>
          {s.l.map((t, j) => (
            <text key={j} x={44 + i * 190} y={272 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
          {i < 3 && <line x1={202 + i * 190} y1="266" x2={216 + i * 190} y2="266" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCDM)" />}
        </g>
      ))}
      <path d="M 745 306 L 745 320 L 115 320 L 115 308" fill="none" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCDM)" />
      <text x="430" y="334" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">the loop runs for as long as the model is in use — drift has no end date</text>

      {outcomes.map((o, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="346" width="236" height="64" rx="10" fill={COLORS.white} stroke={o.c} strokeWidth="2" />
          <text x={148 + i * 252} y="368" textAnchor="middle" fill={o.c} fontSize="9.8" fontWeight="700">{o.t}</text>
          <text x={148 + i * 252} y="386" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">{o.l[0]}</text>
          <text x={148 + i * 252} y="398" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">{o.l[1]}</text>
        </g>
      ))}

      <rect x="30" y="422" width="740" height="34" rx="8" fill={COLORS.slate900} />
      <text x="400" y="444" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Without the loop, the first signal that something changed arrives as a complaint or a harm</text>
      <text x="400" y="484" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — what to monitor, and how often, is a local clinical decision</text>
    </DiagramFrame>
  );
};

export const ModelChangeControlDiagram = () => {
  const stages = [
    {
      c: COLORS.blue, t: ['Change', 'proposed'],
      l: ['A retrain, a new build,', 'a threshold tweak, a new', 'population or setting.']
    },
    {
      c: COLORS.cyan, t: ['Impact', 'assessed'],
      l: ['Does it alter intended', 'use, risk, or who it is', 'safe for? Answer first.']
    },
    {
      c: COLORS.amber, t: ['Revalidation', 'planned and run'],
      l: ['Proportionate to the', 'change — local data and', 'an agreed acceptance bar.']
    },
    {
      c: COLORS.emerald, t: ['Approval', 'documented'],
      l: ['A named owner signs, with', 'scope, limits and the', 'evidence kept together.']
    },
    {
      c: COLORS.blue, t: ['Staged rollout', 'and monitoring'],
      l: ['A slice first, watched', 'against the bar, before', 'it becomes the default.']
    }
  ];
  const locked = [
    'Behaviour only changes when somebody changes it',
    'Each version is a discrete, testable artefact',
    'Revalidation is an event you can plan and schedule',
    'The burden sits on keeping versions traceable',
    'Risk: it silently ages while the setting moves on'
  ];
  const learning = [
    'Behaviour can change without any release happening',
    'There may be no frozen version to test against',
    'Monitoring has to be continuous, not periodic',
    'Change control must cover the update rule itself',
    'Risk: drift and improvement look identical at first'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 468" caption="A model that can change needs a gate that never does — the governance burden follows the update mechanism">
      <defs>
        <marker id="arrowMCC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowMCCrb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Governing a model that keeps changing after go-live</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same gate for every change, whether it came from you or arrived from the supplier</text>

      <rect x="30" y="52" width="740" height="34" rx="8" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Every proposed change enters one gate, and the first question is whether it alters the intended use</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 150} y="96" width="140" height="104" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 150} y="96" width="140" height="24" rx="10" fill={s.c} />
          <text x={100 + i * 150} y="113" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">STEP {i + 1}</text>
          <text x={100 + i * 150} y="138" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{s.t[0]}</text>
          <text x={100 + i * 150} y="150" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{s.t[1]}</text>
          {s.l.map((t, j) => (
            <text key={j} x={40 + i * 150} y={170 + j * 11} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
          {i < 4 && <line x1={172 + i * 150} y1="148" x2={186 + i * 150} y2="148" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowMCC)" />}
        </g>
      ))}

      <line x1="100" y1="222" x2="700" y2="222" stroke={COLORS.red} strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={100 + i * 150} y1="222" x2={100 + i * 150} y2="206" stroke={COLORS.red} strokeWidth="2" markerEnd="url(#arrowMCCrb)" />
      ))}
      <text x="400" y="240" textAnchor="middle" fill={COLORS.red} fontSize="9.6" fontWeight="700">ROLLBACK AVAILABLE AT EVERY STAGE — AND REHEARSED, NOT ASSUMED</text>

      <rect x="30" y="252" width="740" height="30" rx="8" fill={COLORS.amber} />
      <text x="400" y="272" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">Monitoring after rollout feeds the next proposed change straight back into the same gate</text>

      <rect x="30" y="294" width="360" height="126" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="294" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="210" y="312" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A LOCKED MODEL</text>
      {locked.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={338 + i * 18} r="2.5" fill={COLORS.blue} />
          <text x="60" y={342 + i * 18} fill={COLORS.slate700} fontSize="9.2">{t}</text>
        </g>
      ))}

      <rect x="410" y="294" width="360" height="126" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="294" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="312" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A CONTINUOUSLY LEARNING MODEL</text>
      {learning.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={338 + i * 18} r="2.5" fill={COLORS.red} />
          <text x="440" y={342 + i * 18} fill={COLORS.slate700} fontSize="9.2">{t}</text>
        </g>
      ))}
      <text x="400" y="450" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — the actual approval route depends on the setting and the product</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * LEGAL — where the effort goes once drafting gets cheap
 * ------------------------------------------------------------------ */

export const ReviewBurdenShiftDiagram = () => {
  const harder = [
    'A fluent draft looks finished long before it is correct',
    'Errors sit inside plausible, well-formed prose',
    'You have to know the answer to notice the wrong one',
    'Checking has none of the momentum that writing has'
  ];
  const degrades = [
    'The queue grows faster than the time left to read it',
    'The first hundred drafts were fine, so trust builds',
    'Reading becomes scanning, scanning becomes signing',
    'Nothing visibly fails until something finally does'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 482" caption="The saving is real only if the time taken out of drafting is deliberately put back into verification">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The work does not disappear — it moves from drafting to checking</text>
      <text x="400" y="38" textAnchor="middle" fill={COLORS.slate500} fontSize="10">same matter, roughly the same total effort, a different half of it carrying the load</text>

      <text x="450" y="56" textAnchor="middle" fill={COLORS.slate400} fontSize="8.6" fontWeight="700">ROUGHLY THE SAME TOTAL EFFORT</text>
      <path d="M 150 68 L 150 62 L 750 62 L 750 68" fill="none" stroke={COLORS.slate400} strokeWidth="1.5" />

      <text x="30" y="92" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">BEFORE</text>
      <text x="30" y="106" fill={COLORS.slate500} fontSize="8.6">the old split</text>
      <rect x="150" y="72" width="420" height="48" rx="6" fill={COLORS.blue} />
      <rect x="570" y="72" width="180" height="48" rx="6" fill={COLORS.amber} />
      <text x="360" y="94" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">Drafting and producing</text>
      <text x="360" y="108" textAnchor="middle" fill={COLORS.white} fontSize="8.2" opacity="0.9">writing the first version yourself</text>
      <text x="660" y="94" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">Verifying</text>
      <text x="660" y="108" textAnchor="middle" fill={COLORS.white} fontSize="8.2" opacity="0.9">checking your own work</text>

      <text x="30" y="160" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">AFTER</text>
      <text x="30" y="174" fill={COLORS.slate500} fontSize="8.6">the new split</text>
      <rect x="150" y="140" width="160" height="48" rx="6" fill={COLORS.blue} />
      <rect x="310" y="140" width="440" height="48" rx="6" fill={COLORS.amber} />
      <text x="230" y="162" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">Drafting</text>
      <text x="230" y="176" textAnchor="middle" fill={COLORS.white} fontSize="8.2" opacity="0.9">faster, and easier</text>
      <text x="530" y="162" textAnchor="middle" fill={COLORS.white} fontSize="9.6" fontWeight="700">Verifying, correcting, deciding what to keep</text>
      <text x="530" y="176" textAnchor="middle" fill={COLORS.white} fontSize="8.2" opacity="0.9">the half that now takes most of the time</text>

      <text x="400" y="208" textAnchor="middle" fill={COLORS.slate600} fontSize="9.6" fontStyle="italic">Total effort is roughly conserved — the shape of it is not</text>

      <rect x="30" y="220" width="360" height="122" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="220" width="360" height="26" rx="10" fill={COLORS.amber} />
      <text x="210" y="238" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHY VERIFYING IS THE HARDER HALF</text>
      {harder.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={264 + i * 18} r="2.5" fill={COLORS.amber} />
          <text x="60" y={268 + i * 18} fill={COLORS.slate700} fontSize="9.2">{t}</text>
        </g>
      ))}

      <rect x="410" y="220" width="360" height="122" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="220" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="590" y="238" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HOW REVIEW QUIETLY DEGRADES</text>
      {degrades.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={264 + i * 18} r="2.5" fill={COLORS.red} />
          <text x="440" y={268 + i * 18} fill={COLORS.slate700} fontSize="9.2">{t}</text>
        </g>
      ))}

      <rect x="30" y="354" width="740" height="32" rx="8" fill={COLORS.amber} />
      <text x="400" y="375" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A fluent wrong draft is more persuasive than an obviously rough one — that is the trap</text>

      <rect x="30" y="398" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="416" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Budget the time you removed from drafting back into review, or the saving is borrowed</text>
      <text x="400" y="430" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Sample the reviews themselves — one that never rejects anything has already stopped happening</text>
      <text x="400" y="464" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Educational orientation only — supervision duties in any given practice come from elsewhere</text>
    </DiagramFrame>
  );
};
