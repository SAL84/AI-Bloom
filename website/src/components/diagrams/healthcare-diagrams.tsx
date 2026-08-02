import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============================ HEALTHCARE ============================ */

export const CareAIMapDiagram = () => {
  const pathway = ['Access & booking', 'Consultation & notes', 'Tests & imaging', 'Diagnosis & plan', 'Follow-up & admin'];
  const bands = [
    {
      c: COLORS.emerald, t: ['Administrative', '& documentation'], m: 'MOST ESTABLISHED',
      w: 'Around the visit', u: ['Scheduling and triage of admin', 'Ambient note drafting', 'Letters, summaries, coding'],
      n: ['Mistakes are visible and', 'a clinician still signs.']
    },
    {
      c: COLORS.blue, t: ['Imaging triage', '& prioritisation'], m: 'ESTABLISHED IN PLACES',
      w: 'Between test and report', u: ['Flags studies for earlier look', 'Re-orders the worklist', 'Measurement and labelling'],
      n: ['Order of reading changes;', 'a reader still reads it.']
    },
    {
      c: COLORS.cyan, t: ['Clinical decision', 'support'], m: 'EMERGING',
      w: 'At the point of decision', u: ['Risk flags and alerts', 'Suggested next steps', 'Surfacing missed context'],
      n: ['Sits inside a judgement,', 'so alert fatigue is a cost.']
    },
    {
      c: COLORS.amber, t: ['Patient-facing', 'tools'], m: 'LEAST SETTLED',
      w: 'Before and after contact', u: ['Symptom and triage chat', 'Self-management coaching', 'Explaining results plainly'],
      n: ['Least supervised use, and', 'the thinnest safety net.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 430" caption="AI is not one thing in healthcare — maturity falls steadily as you move from paperwork towards the patient">
      <defs>
        <linearGradient id="gradCAMmaturity" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="38%" stopColor={COLORS.blue} />
          <stop offset="70%" stopColor={COLORS.cyan} />
          <stop offset="100%" stopColor={COLORS.amber} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where AI sits across a care pathway</text>
      <text x="30" y="46" fill={COLORS.slate400} fontSize="9" fontWeight="700">THE PATHWAY IT ATTACHES TO</text>
      {pathway.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 150} y="52" width="140" height="42" rx="6" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={100 + i * 150} y="78" textAnchor="middle" fill={COLORS.slate700} fontSize="10" fontWeight="600">{p}</text>
        </g>
      ))}

      <rect x="30" y="112" width="740" height="22" rx="6" fill="url(#gradCAMmaturity)" />
      <text x="42" y="127" fill={COLORS.white} fontSize="9.5" fontWeight="700">MOST MATURE</text>
      <text x="400" y="127" textAnchor="middle" fill={COLORS.white} fontSize="9.5">maturity is a direction of travel, not a score</text>
      <text x="758" y="127" textAnchor="end" fill={COLORS.white} fontSize="9.5" fontWeight="700">LEAST SETTLED</text>

      {bands.map((b, i) => {
        const x = 30 + i * 188;
        return (
          <g key={i}>
            <rect x={x} y="150" width="176" height="244" rx="10" fill={COLORS.white} stroke={b.c} strokeWidth="2" />
            <rect x={x} y="150" width="176" height="42" rx="10" fill={b.c} />
            <text x={x + 88} y="170" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">{b.t[0]}</text>
            <text x={x + 88} y="185" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">{b.t[1]}</text>
            <text x={x + 88} y="206" textAnchor="middle" fill={b.c} fontSize="8.5" fontWeight="700">{b.m}</text>
            <text x={x + 88} y="222" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">{b.w}</text>
            <line x1={x + 12} y1="232" x2={x + 164} y2="232" stroke={COLORS.slate200} strokeWidth="1" />
            <text x={x + 14} y="248" fill={COLORS.slate400} fontSize="8.5" fontWeight="700">TYPICAL USES</text>
            {b.u.map((u, j) => (
              <g key={j}>
                <circle cx={x + 18} cy={261 + j * 17} r="2.5" fill={b.c} />
                <text x={x + 27} y={264 + j * 17} fill={COLORS.slate700} fontSize="9">{u}</text>
              </g>
            ))}
            <line x1={x + 12} y1="320" x2={x + 164} y2="320" stroke={COLORS.slate200} strokeWidth="1" />
            <text x={x + 88} y="338" textAnchor="middle" fill={b.c} fontSize="9" fontStyle="italic">{b.n[0]}</text>
            <text x={x + 88} y="352" textAnchor="middle" fill={b.c} fontSize="9" fontStyle="italic">{b.n[1]}</text>
          </g>
        );
      })}
      <text x="400" y="414" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The further left, the more the system tolerates a mistake — that tolerance, not cleverness, is what makes a use case ready</text>
    </DiagramFrame>
  );
};

export const PilotToProductionDiagram = () => {
  const stages = [
    { w: 420, c: COLORS.slate700, t: 'A promising pilot', s: 'a published result, or a vendor demonstration' },
    { w: 372, c: COLORS.blue, t: 'Validated on local data', s: 'same task, your patients, your equipment' },
    { w: 324, c: COLORS.blue, t: 'Fits the actual workflow', s: 'someone’s day gets better, not longer' },
    { w: 276, c: COLORS.cyan, t: 'Integrated with the record', s: 'no re-typing, no second screen' },
    { w: 228, c: COLORS.cyan, t: 'Monitored in use', s: 'someone would notice a change' },
    { w: 180, c: COLORS.emerald, t: 'Deployed and owned', s: 'named owner, funded' }
  ];
  const failures = [
    'NO LOCAL VALIDATION|Never checked on this population or setting',
    'THE WORKFLOW DOES NOT FIT|Right answer, wrong moment, no time to use it',
    'NO INTEGRATION PATH|Lives outside the record; data gets re-entered',
    'NO MONITORING PLAN|Nothing would tell you if it quietly got worse',
    'UNCLEAR OWNERSHIP|No named owner, no budget, nobody to escalate to'
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Most tools are lost after the pilot succeeds — the science was never the narrow part of the funnel">
      <defs>
        <marker id="arrowP2P" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">From promising pilot to deployed tool</text>
      {stages.map((s, i) => {
        const y = 56 + i * 62;
        return (
          <g key={i}>
            <rect x={250 - s.w / 2} y={y} width={s.w} height="48" rx="8" fill={s.c} />
            <text x="250" y={y + 21} textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">{s.t}</text>
            <text x="250" y={y + 37} textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">{s.s}</text>
          </g>
        );
      })}
      {failures.map((f, i) => {
        const parts = f.split('|');
        const cy = 111 + i * 62;
        return (
          <g key={i}>
            <line x1={448 - i * 24} y1={cy} x2={496} y2={cy} stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowP2P)" />
            <rect x="500" y={cy - 24} width="270" height="48" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
            <text x="514" y={cy - 6} fill={COLORS.red} fontSize="9.5" fontWeight="700">{parts[0]}</text>
            <text x="514" y={cy + 12} fill={COLORS.slate600} fontSize="9.5">{parts[1]}</text>
          </g>
        );
      })}
      <text x="250" y="440" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">every gap is where projects leak</text>
      <text x="635" y="440" textAnchor="middle" fill={COLORS.slate500} fontSize="10" fontStyle="italic">all five are organisational, not technical</text>
    </DiagramFrame>
  );
};

export const DistributionShiftDiagram = () => {
  const causes = [
    { t: 'Equipment', l: ['Different makes, ages and', 'settings; different image quality'] },
    { t: 'Protocols', l: ['How the test is ordered, run,', 'labelled and reported'] },
    { t: 'Population', l: ['Age, comorbidity, body habitus,', 'ancestry, referral route'] },
    { t: 'Prevalence', l: ['How common the finding is here', 'changes what a flag means'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="A model learns its training environment as well as its task — performance is a property of the pairing, not of the model alone">
      <defs>
        <marker id="arrowDSH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The same model, a different setting</text>

      <rect x="30" y="44" width="220" height="110" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="44" width="220" height="26" rx="10" fill={COLORS.blue} />
      <text x="140" y="62" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE IT WAS BUILT</text>
      {['One service, its scanners', 'its protocols and staff', 'its patient mix', 'measured performance lives here'].map((t, i) => (
        <text key={i} x="44" y={88 + i * 16} fill={i === 3 ? COLORS.blue : COLORS.slate700} fontSize="9.5" fontWeight={i === 3 ? '700' : '400'}>{t}</text>
      ))}

      <line x1="254" y1="99" x2="286" y2="99" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowDSH)" />
      <rect x="290" y="58" width="220" height="82" rx="10" fill={COLORS.slate700} />
      <text x="400" y="84" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">The model travels</text>
      <text x="400" y="104" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">carrying patterns from where it</text>
      <text x="400" y="119" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">learned, intended or not</text>
      <line x1="514" y1="99" x2="546" y2="99" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowDSH)" />

      <rect x="550" y="44" width="220" height="110" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="550" y="44" width="220" height="26" rx="10" fill={COLORS.amber} />
      <text x="660" y="62" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE IT GETS USED</text>
      {['Another service, other kit', 'other protocols and staff', 'another patient mix', 'performance is unknown until tested'].map((t, i) => (
        <text key={i} x="564" y={88 + i * 16} fill={i === 3 ? COLORS.amber : COLORS.slate700} fontSize="9.5" fontWeight={i === 3 ? '700' : '400'}>{t}</text>
      ))}

      <rect x="30" y="174" width="740" height="112" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="196" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">WHAT ACTUALLY CHANGED BETWEEN THE TWO</text>
      {causes.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 181} y="208" width="173" height="64" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
          <text x={128 + i * 181} y="228" textAnchor="middle" fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{c.t}</text>
          <text x={128 + i * 181} y="245" textAnchor="middle" fill={COLORS.slate500} fontSize="8.5">{c.l[0]}</text>
          <text x={128 + i * 181} y="259" textAnchor="middle" fill={COLORS.slate500} fontSize="8.5">{c.l[1]}</text>
        </g>
      ))}

      {[
        { x: 30, c: COLORS.emerald, h: 'BEFORE DEPLOYMENT — VALIDATE LOCALLY', l: ['Test on your own cases, not the vendor set', 'Compare against how the work is done today', 'Agree in advance what good enough here means'] },
        { x: 410, c: COLORS.cyan, h: 'AFTER DEPLOYMENT — WATCH FOR DRIFT', l: ['Equipment, staffing and case mix keep moving', 'Track inputs and outputs, not just uptime', 'Re-check whenever anything upstream changes'] }
      ].map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="306" width="360" height="106" rx="10" fill={COLORS.white} stroke={m.c} strokeWidth="2" />
          <rect x={m.x} y="306" width="360" height="26" rx="10" fill={m.c} />
          <text x={m.x + 180} y="324" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{m.h}</text>
          {m.l.map((t, j) => (
            <g key={j}>
              <circle cx={m.x + 20} cy={j * 22 + 351} r="3" fill={m.c} />
              <text x={m.x + 34} y={j * 22 + 355} fill={COLORS.slate700} fontSize="10">{t}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Evidence from somewhere else is a reason to test here — never a substitute for testing here</text>
    </DiagramFrame>
  );
};

export const ClinicalEvidenceLadderDiagram = () => {
  const rungs = [
    { c: COLORS.slate400, t: 'Internal retrospective', l: ['Old data, from the same place', 'the model was developed'], n: 'The easiest test to pass' },
    { c: COLORS.blue, t: 'External retrospective', l: ['Old data, from services the', 'model has never seen'], n: 'Shows it travels' },
    { c: COLORS.cyan, t: 'Prospective', l: ['Runs live in the real workflow,', 'with real interruptions'], n: 'Now the mess is included' },
    { c: COLORS.emerald, t: 'Randomised / outcome', l: ['Does care, or the patient,', 'actually end up better?'], n: 'Strongest and rarest' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 475" caption="Read any AI claim by asking which rung it stands on — most sit on the bottom one and are described as though they sat on the top">
      <defs>
        <marker id="arrowCEL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How strong is the evidence behind the claim?</text>
      <line x1="22" y1="400" x2="22" y2="112" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowCEL)" />
      <text x="14" y="260" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontWeight="700" transform="rotate(-90 14 260)">STRENGTH OF THE CLAIM</text>
      {rungs.map((r, i) => {
        const x = 40 + i * 172;
        const y = 320 - i * 66;
        return (
          <g key={i}>
            <rect x={x} y={y} width="168" height="78" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
            <rect x={x} y={y} width="168" height="6" rx="3" fill={r.c} />
            <text x={x + 84} y={y + 26} textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">{r.t}</text>
            <text x={x + 84} y={y + 43} textAnchor="middle" fill={COLORS.slate600} fontSize="8.8">{r.l[0]}</text>
            <text x={x + 84} y={y + 55} textAnchor="middle" fill={COLORS.slate600} fontSize="8.8">{r.l[1]}</text>
            <text x={x + 84} y={y + 71} textAnchor="middle" fill={r.c} fontSize="9" fontStyle="italic">{r.n}</text>
            {i < 3 && <line x1={x + 170} y1={y + 10} x2={x + 170} y2={y - 56} stroke={COLORS.slate300} strokeWidth="1.5" strokeDasharray="4 3" />}
          </g>
        );
      })}
      <text x="40" y="416" fill={COLORS.slate500} fontSize="9.5">weakest</text>
      <text x="708" y="112" textAnchor="end" fill={COLORS.slate500} fontSize="9.5">strongest</text>
      <rect x="40" y="424" width="730" height="46" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="405" y="444" textAnchor="middle" fill={COLORS.amber} fontSize="10.5" fontWeight="700">DISCRIMINATION IS NOT UTILITY</text>
      <text x="405" y="461" textAnchor="middle" fill={COLORS.slate700} fontSize="10">A model can separate cases well and still change nothing about what happens to the patient</text>
    </DiagramFrame>
  );
};

export const SaMDGovernanceDiagram = () => {
  const layers = [
    { y: 104, c: COLORS.emerald, t: 'Monitoring in use', s: 'performance, incidents, and whether it is still used as intended' },
    { y: 168, c: COLORS.cyan, t: 'Change control for model updates', s: 'an update is a change: re-check, re-approve, re-communicate' },
    { y: 232, c: COLORS.blue, t: 'Institutional review and sign-off', s: 'clinical, safety, information governance and IT each hold a veto' },
    { y: 296, c: COLORS.slate600, t: 'Regulatory pathway', s: 'what kind of product this is, and what that classification demands' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Intended use is the foundation, not the paperwork — every layer above it is only meaningful relative to the claim being made">
      <defs>
        <marker id="arrowSMD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The governance stack around a deployed clinical AI tool</text>

      <rect x="90" y="44" width="430" height="48" rx="10" fill={COLORS.slate900} />
      <text x="305" y="64" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">The tool, in front of a patient</text>
      <text x="305" y="81" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.85">everything below has to hold for this to be safe</text>

      {layers.map((l, i) => (
        <g key={i}>
          <rect x="90" y={l.y} width="430" height="56" rx="8" fill={COLORS.white} stroke={l.c} strokeWidth="2" />
          <rect x="90" y={l.y} width="8" height="56" rx="4" fill={l.c} />
          <text x="110" y={l.y + 23} fill={COLORS.slate900} fontSize="11.5" fontWeight="700">{l.t}</text>
          <text x="110" y={l.y + 41} fill={COLORS.slate500} fontSize="9.5">{l.s}</text>
          <line x1="522" y1={l.y + 28} x2="570" y2={l.y + 28} stroke={COLORS.slate300} strokeWidth="1.5" strokeDasharray="4 3" />
        </g>
      ))}

      <rect x="70" y="360" width="470" height="72" rx="10" fill={COLORS.amber} />
      <text x="305" y="384" textAnchor="middle" fill={COLORS.white} fontSize="12.5" fontWeight="700">INTENDED-USE STATEMENT — the foundation</text>
      <text x="305" y="403" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.95">which population, which task, which setting, which claim</text>
      <text x="305" y="420" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.95">use it outside this and none of the assurance above applies</text>
      <line x1="70" y1="396" x2="48" y2="396" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="48" y1="396" x2="48" y2="66" stroke={COLORS.amber} strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowSMD)" />
      <text x="38" y="230" textAnchor="middle" fill={COLORS.amber} fontSize="9" fontWeight="700" transform="rotate(-90 38 230)">GOVERNS EVERY LAYER ABOVE IT</text>

      <rect x="572" y="104" width="198" height="328" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="572" y="104" width="198" height="28" rx="10" fill={COLORS.slate700} />
      <text x="671" y="123" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ACCOUNTABILITY</text>
      <text x="586" y="152" fill={COLORS.slate500} fontSize="8.5" fontWeight="700">CUTS ACROSS ALL OF IT</text>
      {['A named clinical owner', 'A named technical owner', 'A route to raise concerns', 'A record of who decided what', 'A defined way to switch it off'].map((t, i) => (
        <g key={i}>
          <circle cx="590" cy={i * 34 + 178} r="3" fill={COLORS.slate700} />
          <text x="602" y={i * 34 + 182} fill={COLORS.slate700} fontSize="9.8">{t}</text>
        </g>
      ))}
      <line x1="586" y1="356" x2="756" y2="356" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="671" y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="9.5" fontStyle="italic">The tool never holds</text>
      <text x="671" y="392" textAnchor="middle" fill={COLORS.slate600} fontSize="9.5" fontStyle="italic">the responsibility. A</text>
      <text x="671" y="406" textAnchor="middle" fill={COLORS.slate600} fontSize="9.5" fontStyle="italic">clinician remains</text>
      <text x="671" y="420" textAnchor="middle" fill={COLORS.slate600} fontSize="9.5" fontStyle="italic">answerable for the care.</text>

      <text x="400" y="456" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Read the intended-use statement first — it tells you what every other document in the stack is actually about</text>
    </DiagramFrame>
  );
};

/* =============================== LEGAL =============================== */
