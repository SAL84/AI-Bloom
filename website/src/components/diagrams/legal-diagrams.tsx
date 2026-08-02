import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============================ HEALTHCARE ============================ */

export const LegalTaskSuitabilityDiagram = () => {
  const rows = [
    { c: COLORS.emerald, t: 'Summarisation and first drafts', s: 'internal material, reworked before it leaves', r: ['Errors surface during the editing', 'you were going to do anyway'], sup: ['NORMAL REVIEW', 'read it as you would a junior draft'] },
    { c: COLORS.blue, t: 'Document review and issue spotting', s: 'narrowing a large set down for a human', r: ['Silent misses and confident false', 'flags — both need sampling'], sup: ['SUPERVISED AND SAMPLED', 'check a slice, not just the hits'] },
    { c: COLORS.amber, t: 'Research, authority and citation', s: 'anything you would put in front of a court', r: ['Fluent text can point at nothing,', 'or at something it misstates'], sup: ['VERIFY EVERY SOURCE', 'unverified means unusable'] },
    { c: COLORS.red, t: 'Advice, strategy and judgement', s: 'what the client should actually do', r: ['The duty, the licence and the', 'liability all sit with a person'], sup: ['NOT DELEGABLE', 'a tool can inform it, never make it'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Suitability tracks how visible the failure is — the tasks where a mistake hides longest are the ones that need a human hardest">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Legal tasks by how safely AI can touch them</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">supervision required rises as you go down</text>
      <text x="46" y="60" fill={COLORS.slate400} fontSize="8.5" fontWeight="700">TASK</text>
      <text x="408" y="60" fill={COLORS.slate400} fontSize="8.5" fontWeight="700">WHERE IT GOES WRONG</text>
      <text x="602" y="60" fill={COLORS.slate400} fontSize="8.5" fontWeight="700">SUPERVISION REQUIRED</text>
      {rows.map((r, i) => {
        const y = 68 + i * 96;
        return (
          <g key={i}>
            <rect x="30" y={y} width="740" height="88" rx="10" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
            <rect x="30" y={y} width="9" height="88" rx="4.5" fill={r.c} />
            <text x="52" y={y + 32} fill={COLORS.slate900} fontSize="12.5" fontWeight="700">{r.t}</text>
            <text x="52" y={y + 52} fill={COLORS.slate500} fontSize="10">{r.s}</text>
            <text x="52" y={y + 74} fill={r.c} fontSize="9.5" fontWeight="700">{i === 3 ? 'the line AI does not cross' : 'AI can carry real weight here'}</text>
            <line x1="396" y1={y + 14} x2="396" y2={y + 74} stroke={COLORS.slate200} strokeWidth="1" />
            <text x="408" y={y + 40} fill={COLORS.slate700} fontSize="9.8">{r.r[0]}</text>
            <text x="408" y={y + 56} fill={COLORS.slate700} fontSize="9.8">{r.r[1]}</text>
            <rect x="598" y={y + 20} width="158" height="48" rx="8" fill={r.c} />
            <text x="677" y={y + 40} textAnchor="middle" fill={COLORS.white} fontSize="9.8" fontWeight="700">{r.sup[0]}</text>
            <text x="677" y={y + 56} textAnchor="middle" fill={COLORS.white} fontSize="8.3" opacity="0.95">{r.sup[1]}</text>
          </g>
        );
      })}
      <text x="400" y="462" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Nothing here says do not use it — it says decide, in advance, who is checking what</text>
    </DiagramFrame>
  );
};

export const CitationVerificationDiagram = () => {
  const gates = [
    { t: 'Does the source exist?', s: 'a real record, not a plausible-looking one' },
    { t: 'Is the reference accurate?', s: 'it points at that record, not a neighbour' },
    { t: 'Does it say what is claimed?', s: 'read the passage, not the summary of it' },
    { t: 'Is it still good law?', s: 'later history can undo what it once held' },
    { t: 'Is the check recorded?', s: 'a named person signs off, not the tool' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 505" caption="Every sanctioned filing is a skipped step, not a missing rule — verification belongs inside the filing workflow, not beside it">
      <defs>
        <marker id="arrowCVD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowCVF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Verifying an authority before anything is filed</text>

      <rect x="40" y="38" width="430" height="32" rx="8" fill={COLORS.slate700} />
      <text x="255" y="59" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Any authority an AI tool produced, suggested or reformatted</text>
      <line x1="255" y1="70" x2="255" y2="84" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowCVD)" />

      {gates.map((g, i) => {
        const y = 86 + i * 68;
        return (
          <g key={i}>
            <rect x="40" y={y} width="430" height="54" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
            <circle cx="66" cy={y + 27} r="13" fill={COLORS.emerald} />
            <text x="66" y={y + 31} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{i + 1}</text>
            <text x="88" y={y + 23} fill={COLORS.slate900} fontSize="11.5" fontWeight="700">{g.t}</text>
            <text x="88" y={y + 41} fill={COLORS.slate500} fontSize="9.5">{g.s}</text>
            {i < 4 && <line x1="255" y1={y + 56} x2="255" y2={y + 66} stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowCVD)" />}
            <line x1="472" y1={y + 27} x2="496" y2={y + 27} stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowCVF)" />
          </g>
        );
      })}
      <line x1="255" y1="412" x2="255" y2="424" stroke={COLORS.emerald} strokeWidth="2" markerEnd="url(#arrowCVD)" />
      <rect x="40" y="426" width="430" height="48" rx="8" fill={COLORS.emerald} />
      <text x="255" y="446" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">Verified — safe to rely on and to file</text>
      <text x="255" y="463" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.95">with a note of who checked it and against what</text>

      <rect x="500" y="86" width="260" height="326" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="500" y="86" width="260" height="30" rx="10" fill={COLORS.red} />
      <text x="630" y="106" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A NO AT ANY STEP STOPS IT</text>
      {['It is not quoted', 'It is not cited', 'It is not filed', 'The point is re-sourced', 'or the point is dropped'].map((t, i) => (
        <g key={i}>
          <circle cx="518" cy={i * 26 + 142} r="3" fill={COLORS.red} />
          <text x="530" y={i * 26 + 146} fill={COLORS.slate700} fontSize="10.5">{t}</text>
        </g>
      ))}
      <line x1="516" y1="288" x2="744" y2="288" stroke={COLORS.slate200} strokeWidth="1" />
      {['Steps get skipped under time', 'pressure, and under the belief', 'that a fluent answer has already', 'been checked by something.', 'Neither is a defence.'].map((t, i) => (
        <text key={i} x="630" y={i * 17 + 312} textAnchor="middle" fill={COLORS.slate600} fontSize="9.8" fontStyle="italic">{t}</text>
      ))}
      <text x="630" y="404" textAnchor="middle" fill={COLORS.red} fontSize="9.5" fontWeight="700">The signature is yours, not the tool&apos;s</text>

      <text x="400" y="494" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Existing, accurate, on point, still good, and signed off — five separate questions, and none implies another</text>
    </DiagramFrame>
  );
};

export const HallucinatedCitationDiagram = () => {
  const slots = ['party names', 'reporter form', 'court', 'year'];
  const lanes = [
    {
      x: 30, c: COLORS.red, h: 'GENERATION ONLY — NOTHING IS LOOKED UP',
      s1: 'You ask for supporting authority',
      s2: ['The model continues the text', 'predicting what a citation looks like here'],
      lab: 'SLOTS FILLED BY PLAUSIBILITY',
      sub: 'shaped right',
      n: ['Every part is well-formed.', 'No record was ever consulted.'],
      out: 'An authority that looks correct and is not'
    },
    {
      x: 410, c: COLORS.emerald, h: 'RETRIEVAL-BACKED — A CORPUS IS QUERIED',
      s1: 'You ask for supporting authority',
      s2: ['The tool searches a real collection', 'and writes from what it got back'],
      lab: 'SLOTS FILLED FROM RECORDS',
      sub: 'retrieved',
      n: ['Grounded in documents that exist.', 'The link back can be followed.'],
      out: 'An authority you can open and read'
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 465" caption="A fabricated citation is not a lie — it is a well-formed guess at the shape of one, produced by a system that was never looking anything up">
      <defs>
        <marker id="arrowHCD" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 0 L 5 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why a model invents case law that reads perfectly</text>
      {lanes.map((l, i) => (
        <g key={i}>
          <rect x={l.x} y="40" width="360" height="336" rx="10" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <rect x={l.x} y="40" width="360" height="30" rx="10" fill={l.c} />
          <text x={l.x + 180} y="60" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{l.h}</text>

          <rect x={l.x + 18} y="86" width="324" height="40" rx="7" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={l.x + 180} y="111" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="600">{l.s1}</text>
          <line x1={l.x + 180} y1="128" x2={l.x + 180} y2="142" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowHCD)" />

          <rect x={l.x + 18} y="146" width="324" height="52" rx="7" fill={COLORS.slate700} />
          <text x={l.x + 180} y="169" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{l.s2[0]}</text>
          <text x={l.x + 180} y="186" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">{l.s2[1]}</text>
          <line x1={l.x + 180} y1="200" x2={l.x + 180} y2="214" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowHCD)" />

          <text x={l.x + 180} y="230" textAnchor="middle" fill={l.c} fontSize="9" fontWeight="700">{l.lab}</text>
          {slots.map((s, j) => (
            <g key={j}>
              <rect x={l.x + 18 + j * 82} y="238" width="76" height="46" rx="6" fill={COLORS.white} stroke={l.c} strokeWidth="1.5" strokeDasharray={i === 0 ? '4 3' : undefined} />
              <text x={l.x + 56 + j * 82} y="259" textAnchor="middle" fill={COLORS.slate900} fontSize="8.6" fontWeight="700">{s}</text>
              <text x={l.x + 56 + j * 82} y="273" textAnchor="middle" fill={l.c} fontSize="8" fontStyle="italic">{l.sub}</text>
            </g>
          ))}
          <text x={l.x + 180} y="302" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">{l.n[0]}</text>
          <text x={l.x + 180} y="316" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">{l.n[1]}</text>
          <rect x={l.x + 18} y="324" width="324" height="40" rx="7" fill={l.c} />
          <text x={l.x + 180} y="349" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{l.out}</text>
        </g>
      ))}
      <rect x="30" y="392" width="740" height="56" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.amber} fontSize="10.5" fontWeight="700">RETRIEVAL LOWERS THE ODDS — IT DOES NOT RETIRE THE DUTY</text>
      <text x="400" y="434" textAnchor="middle" fill={COLORS.slate700} fontSize="10">A retrieved authority can still be summarised wrongly, stretched too far, or cited for a proposition it never supported</text>
    </DiagramFrame>
  );
};

export const PrivilegeDataFlowDiagram = () => {
  const table = [
    ['Training on your inputs', 'may be used to improve the service', 'contractually excluded, in writing'],
    ['Retention', 'kept by default, window often unclear', 'defined, deletable, configurable'],
    ['Sub-processors', 'listed, not negotiated with you', 'disclosed, with flow-down obligations'],
    ['Human review', 'possible for safety and quality work', 'restricted and contractually bounded']
  ];
  const controls = [
    ['Approved tools only', 'no client data in unvetted tools'],
    ['Minimise and redact', 'send the least that does the job'],
    ['Consent where required', 'engagement terms say it plainly'],
    ['Log and review', 'know what left, and who sent it']
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Confidentiality does not end at the firm boundary — the contract, not the interface, decides what happens to the data on the other side">
      <defs>
        <marker id="arrowPDF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate700} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Client data crossing the trust boundary</text>

      <rect x="30" y="44" width="290" height="106" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="44" width="290" height="26" rx="10" fill={COLORS.blue} />
      <text x="175" y="62" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">INSIDE THE FIRM</text>
      {['Client confidences and instructions', 'Privileged work product', 'Duties owed to the client'].map((t, i) => (
        <text key={i} x="46" y={90 + i * 18} fill={COLORS.slate700} fontSize="9.8">{t}</text>
      ))}

      <line x1="345" y1="40" x2="345" y2="152" stroke={COLORS.red} strokeWidth="2" strokeDasharray="6 4" />
      <text x="345" y="167" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">TRUST BOUNDARY — DATA LEAVES YOUR CONTROL</text>
      <line x1="324" y1="97" x2="366" y2="97" stroke={COLORS.slate700} strokeWidth="2" markerEnd="url(#arrowPDF)" />

      <rect x="370" y="44" width="400" height="106" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="370" y="44" width="400" height="26" rx="10" fill={COLORS.slate700} />
      <text x="570" y="62" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THIRD-PARTY MODEL PROVIDER</text>
      {['Receives the prompt, the attachments and the context', 'What happens next is set by the terms you agreed', 'Your duty to the client does not transfer with the data'].map((t, i) => (
        <text key={i} x="386" y={90 + i * 18} fill={COLORS.slate700} fontSize="9.8">{t}</text>
      ))}

      <rect x="30" y="176" width="740" height="172" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="30" y="176" width="740" height="30" rx="10" fill={COLORS.slate100} />
      <text x="44" y="196" fill={COLORS.slate600} fontSize="9.5" fontWeight="700">WHAT THE TERMS DECIDE</text>
      <text x="264" y="196" fill={COLORS.amber} fontSize="9.5" fontWeight="700">CONSUMER OR FREE TIER</text>
      <text x="524" y="196" fill={COLORS.emerald} fontSize="9.5" fontWeight="700">NEGOTIATED ENTERPRISE TERMS</text>
      {table.map((r, i) => {
        const y = 206 + i * 35;
        return (
          <g key={i}>
            {i > 0 && <line x1="44" y1={y} x2="756" y2={y} stroke={COLORS.slate200} strokeWidth="1" />}
            <text x="44" y={y + 22} fill={COLORS.slate900} fontSize="10" fontWeight="700">{r[0]}</text>
            <text x="264" y={y + 22} fill={COLORS.slate600} fontSize="9.8">{r[1]}</text>
            <text x="524" y={y + 22} fill={COLORS.slate600} fontSize="9.8">{r[2]}</text>
          </g>
        );
      })}
      <line x1="254" y1="206" x2="254" y2="346" stroke={COLORS.slate200} strokeWidth="1" />
      <line x1="514" y1="206" x2="514" y2="346" stroke={COLORS.slate200} strokeWidth="1" />

      <rect x="30" y="366" width="740" height="80" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="386" textAnchor="middle" fill={COLORS.emerald} fontSize="10.5" fontWeight="700">CONTROLS THAT KEEP CONFIDENTIALITY INTACT</text>
      {controls.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 181} y="394" width="173" height="40" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={128 + i * 181} y="412" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{c[0]}</text>
          <text x={128 + i * 181} y="426" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4">{c[1]}</text>
        </g>
      ))}
      <text x="400" y="466" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Ask what the terms permit before you ask what the tool can do — the answer changes which matters it may touch</text>
    </DiagramFrame>
  );
};

export const FirmAIPolicyDiagram = () => {
  const parts = [
    { c: COLORS.blue, t: 'Approved tools', l: ['Named, reviewed, contracted', 'Anything else is off-limits', 'One owner keeps it current'], w: 'Shadow tools are the real exposure' },
    { c: COLORS.blue, t: 'Permitted tasks', l: ['What AI may touch freely', 'What needs supervision', 'What is never delegated'], w: 'Ambiguity gets resolved badly' },
    { c: COLORS.cyan, t: 'Human review points', l: ['Named checkpoints, in writing', 'Before anything leaves', 'Before anything is filed'], w: 'Review has to be scheduled' },
    { c: COLORS.cyan, t: 'Client consent', l: ['Engagement-letter wording', 'Matters with tighter limits', 'Client instructions win'], w: 'Assume nothing on their behalf' },
    { c: COLORS.amber, t: 'Billing treatment', l: ['Charge for work, not keystrokes', 'Say how savings are passed on', 'Settle it before the matter runs'], w: 'Fee disputes start right here' },
    { c: COLORS.amber, t: 'Training', l: ['Everyone who touches a tool', 'Refreshed as the tools change', 'Teaches the failure modes'], w: 'Policy without training is decor' },
    { c: COLORS.red, t: 'Incident path', l: ['How to report a bad output', 'Who to tell, and how fast', 'What gets fixed afterwards'], w: 'Silence is what makes it worse' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 445" caption="A firm AI policy works only when the approved tools, the permitted tasks and the review points all describe the same job">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What a workable firm AI policy has to contain</text>
      <rect x="30" y="38" width="740" height="32" rx="8" fill={COLORS.slate900} />
      <text x="400" y="59" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SEVEN PARTS — a policy missing any one of them is a policy people quietly work around</text>
      {parts.map((p, i) => {
        const x = i < 4 ? 30 + i * 188 : 124 + (i - 4) * 188;
        const y = i < 4 ? 88 : 244;
        return (
          <g key={i}>
            <rect x={x} y={y} width="176" height="144" rx="10" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
            <rect x={x} y={y} width="176" height="28" rx="10" fill={p.c} />
            <text x={x + 88} y={y + 19} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{p.t}</text>
            {p.l.map((t, j) => (
              <g key={j}>
                <circle cx={x + 18} cy={y + 48 + j * 22} r="2.5" fill={p.c} />
                <text x={x + 27} y={y + 51 + j * 22} fill={COLORS.slate700} fontSize="9">{t}</text>
              </g>
            ))}
            <line x1={x + 12} y1={y + 112} x2={x + 164} y2={y + 112} stroke={COLORS.slate200} strokeWidth="1" />
            <text x={x + 88} y={y + 130} textAnchor="middle" fill={p.c} fontSize="8.6" fontStyle="italic">{p.w}</text>
          </g>
        );
      })}
      <text x="400" y="422" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Written once and never taught is the common failure — the incident path is what tells you whether the rest is real</text>
    </DiagramFrame>
  );
};
