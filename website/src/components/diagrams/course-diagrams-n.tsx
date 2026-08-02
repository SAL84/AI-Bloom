import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * COURSE SCOPE — what an educational orientation is, and is not
 * ------------------------------------------------------------------ */

export const CourseScopeSafetyDiagram = () => {
  const provides = [
    { t: 'A shared vocabulary', l: ['The words these systems are described with, so you can', 'follow the discussion and ask a precise question.'] },
    { t: 'How to read the evidence critically', l: ['What a study design can and cannot support, and where a', 'claim runs ahead of what was actually measured.'] },
    { t: 'Categories of capability and failure', l: ['What this class of tool tends to do well, and the shapes', 'its mistakes tend to take.'] },
    { t: 'Governance concepts', l: ['Oversight, accountability, monitoring and withdrawal —', 'the ideas, not any one institution’s policy.'] }
  ];
  const excludes = [
    { t: 'Clinical guidance', l: ['Nothing here tells you what to do for the patient in', 'front of you.'] },
    { t: 'Thresholds, criteria or protocols', l: ['No cut-offs, and no pathway you could lift from a slide', 'into practice.'] },
    { t: 'Product endorsement', l: ['No tool is recommended, compared, ranked or ruled out', 'anywhere in this material.'] },
    { t: 'Regulatory or legal advice', l: ['Obligations differ by place and change over time; this', 'is orientation, not compliance.'] }
  ];
  const rules = [
    { c: COLORS.amber, t: 'If it sounds like a recommendation', l: ['It is not one. Read it as how', 'people reason about these', 'tools, not as what to do.'] },
    { c: COLORS.blue, t: 'If you need a threshold or a rule', l: ['This is the wrong source. Those', 'come from your protocol and', 'your own clinical judgement.'] },
    { c: COLORS.emerald, t: 'If it would touch a patient', l: ['It goes through the institution’s', 'own governance long before it', 'goes anywhere near care.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Educational orientation only — clinical judgement, local protocol and regulatory approval always govern">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What this course is, and what it is not</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an educational orientation — vocabulary and judgement, never clinical guidance</text>

      <rect x="30" y="56" width="360" height="212" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="28" rx="10" fill={COLORS.emerald} />
      <text x="210" y="75" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT THIS COURSE DOES PROVIDE</text>
      {provides.map((p, i) => (
        <g key={i}>
          <circle cx="50" cy={95 + i * 44} r="3" fill={COLORS.emerald} />
          <text x="62" y={98 + i * 44} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{p.t}</text>
          {p.l.map((t, j) => (
            <text key={j} x="62" y={111 + i * 44 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="410" y="56" width="360" height="212" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="28" rx="10" fill={COLORS.red} />
      <text x="590" y="75" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT IT EXPLICITLY DOES NOT</text>
      {excludes.map((e, i) => (
        <g key={i}>
          <circle cx="430" cy={95 + i * 44} r="3" fill={COLORS.red} />
          <text x="442" y={98 + i * 44} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{e.t}</text>
          {e.l.map((t, j) => (
            <text key={j} x="442" y={111 + i * 44 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="280" width="740" height="68" rx="10" fill={COLORS.slate900} />
      <text x="400" y="304" textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">THE STANDING RULE FOR EVERYTHING THAT FOLLOWS</text>
      <text x="400" y="324" textAnchor="middle" fill={COLORS.white} fontSize="10.5">Clinical judgement, institutional protocol and regulatory approval govern every real decision</text>
      <text x="400" y="340" textAnchor="middle" fill={COLORS.slate300} fontSize="9.6">Nothing in this course displaces any of them, and nothing here substitutes for them</text>

      <text x="30" y="364" fill={COLORS.slate700} fontSize="10" fontWeight="700">HOW TO READ IT WHEN SOMETHING STARTS TO SOUND LIKE ADVICE</text>
      {rules.map((r, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="372" width="236" height="66" rx="10" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
          <text x={148 + i * 252} y="392" textAnchor="middle" fill={r.c} fontSize="9.2" fontWeight="700">{r.t}</text>
          {r.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={408 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * DECISION-SUPPORT SPECTRUM — proximity to the clinical decision
 * ------------------------------------------------------------------ */

export const DecisionSupportSpectrumDiagram = () => {
  const tiers = [
    {
      c: COLORS.slate400, n: 'Information and navigation', s: 'furthest from the decision',
      d: ['Surfaces material and answers general questions, so', 'someone can find their way to the right service.'],
      w: ['The reader, with no', 'clinical claim attached.'], g: 13
    },
    {
      c: COLORS.cyan, n: 'Documentation support', s: 'close by, but one step back',
      d: ['Drafts, summarises or structures what a clinician has', 'already said or written down.'],
      w: ['The clinician, who signs', 'what the record says.'], g: 26
    },
    {
      c: COLORS.blue, n: 'Alerting and flagging', s: 'interrupts the workflow',
      d: ['Draws attention to something in the data and asks for', 'it to be looked at again.'],
      w: ['The clinician — but the', 'agenda has been set.'], g: 39
    },
    {
      c: COLORS.amber, n: 'Recommendation', s: 'proposes a specific course',
      d: ['Names a preferred option, so declining it becomes an', 'active choice somebody has to make.'],
      w: ['Still the clinician,', 'now against a default.'], g: 52
    },
    {
      c: COLORS.red, n: 'Autonomous action', s: 'acts without a person in the loop',
      d: ['Takes the action directly, with review after the fact', 'if it happens at all.'],
      w: ['The system, until', 'somebody intervenes.'], g: 66
    }
  ];
  const moves = [
    { t: 'Framing does not set the tier', l: ['A tool described as informational', 'but read as an instruction is', 'operating a tier further down.'] },
    { t: 'Defaults are decisions', l: ['When declining a suggestion takes', 'effort, the suggestion is nearer', 'the decision than it looks.'] },
    { t: 'Oversight has to be real', l: ['Someone who cannot realistically', 'review every output is not the', 'oversight the tier assumes.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 578" caption="Educational orientation only — no tool, tier or threshold here is a recommendation for practice">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How directly does the tool touch the clinical decision?</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the further down this list a tool sits, the more oversight it needs and the higher the bar</text>

      <text x="44" y="70" fill={COLORS.slate400} fontSize="8" fontWeight="700">TIER</text>
      <text x="210" y="70" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT THE TOOL DOES</text>
      <text x="482" y="70" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHO DECIDES</text>
      <text x="632" y="70" fill={COLORS.slate400} fontSize="8" fontWeight="700">OVERSIGHT / EVIDENCE</text>

      {tiers.map((t, i) => (
        <g key={i}>
          <rect x="30" y={82 + i * 56} width="740" height="50" rx="8" fill={COLORS.white} stroke={t.c} strokeWidth="1.8" />
          <rect x="30" y={82 + i * 56} width="7" height="50" rx="3" fill={t.c} />
          <text x="46" y={104 + i * 56} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{t.n}</text>
          <text x="46" y={118 + i * 56} fill={COLORS.slate500} fontSize="7.8">{t.s}</text>
          {t.d.map((s, j) => (
            <text key={j} x="210" y={100 + i * 56 + j * 12} fill={COLORS.slate600} fontSize="8.2">{s}</text>
          ))}
          {t.w.map((s, j) => (
            <text key={j} x="482" y={100 + i * 56 + j * 12} fill={COLORS.slate600} fontSize="8.2">{s}</text>
          ))}
          <text x="632" y={99 + i * 56} fill={COLORS.slate400} fontSize="7" fontWeight="700">OVERSIGHT</text>
          <rect x="690" y={92 + i * 56} width="66" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="690" y={92 + i * 56} width={t.g} height="8" rx="4" fill={t.c} />
          <text x="632" y={118 + i * 56} fill={COLORS.slate400} fontSize="7" fontWeight="700">EVIDENCE</text>
          <rect x="690" y={111 + i * 56} width="66" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="690" y={111 + i * 56} width={t.g} height="8" rx="4" fill={t.c} />
        </g>
      ))}

      <rect x="30" y="368" width="740" height="32" rx="8" fill={COLORS.slate700} />
      <text x="400" y="389" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The bar rises with proximity to the decision — one tier down is a different evidence case</text>

      <text x="30" y="412" fill={COLORS.blue} fontSize="10" fontWeight="700">WHAT QUIETLY MOVES A TOOL DOWN THE SPECTRUM</text>
      {moves.map((m, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="420" width="236" height="68" rx="10" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={148 + i * 252} y="440" textAnchor="middle" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{m.t}</text>
          {m.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={456 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="500" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="520" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Where a tool sits is set by what it does to the decision, not by how it is described</text>
      <text x="400" y="536" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Two tools with identical outputs sit on different tiers if one of them is harder to ignore</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * REGULATION — the conceptual shape only, jurisdiction-neutral
 * ------------------------------------------------------------------ */

export const RegulatoryLandscapeHCDiagram = () => {
  const stages = [
    {
      c: COLORS.blue, n: 'RISK-PROPORTIONATE CLASSIFICATION',
      items: [
        { t: 'Scaled to what could go wrong', l: ['Severity of the harm, and how', 'reversible it would be.'] },
        { t: 'Not every tool is treated alike', l: ['A reminder and a treatment', 'decision sit far apart.'] },
        { t: 'Classification drives the rest', l: ['Evidence, depth of review and', 'record-keeping all follow.'] }
      ]
    },
    {
      c: COLORS.cyan, n: 'PRE-MARKET EVALUATION',
      items: [
        { t: 'Stated intended use', l: ['What it is for, and for whom,', 'written down in advance.'] },
        { t: 'Evidence must match the claim', l: ['A broader claim calls for', 'broader evidence.'] },
        { t: 'Review before it reaches care', l: ['How deep that review goes', 'follows the class it landed in.'] }
      ]
    },
    {
      c: COLORS.amber, n: 'POST-MARKET SURVEILLANCE',
      items: [
        { t: 'Approval is not the finish', l: ['Real-world performance is', 'watched after release.'] },
        { t: 'Problems get reported', l: ['There are duties to notice', 'and to escalate.'] },
        { t: 'Changes can reopen review', l: ['An updated model may not be', 'the one that was approved.'] }
      ]
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 550" caption="Educational orientation only — a conceptual map, not regulatory advice for any jurisdiction">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How the regulatory picture fits together, conceptually</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the shape is broadly shared; the categories, duties and thresholds differ by jurisdiction</text>

      <rect x="30" y="52" width="740" height="78" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="30" y="52" width="740" height="26" rx="10" fill={COLORS.slate700} />
      <text x="400" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IT ALL STARTS WITH THE INTENDED-USE STATEMENT</text>
      <rect x="44" y="84" width="340" height="38" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="214" y="100" textAnchor="middle" fill={COLORS.blue} fontSize="9.2" fontWeight="700">Claims a clinical purpose</text>
      <text x="214" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">diagnose, treat, triage, or guide a clinical decision</text>
      <rect x="416" y="84" width="340" height="38" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.8" />
      <text x="586" y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="9.2" fontWeight="700">Claims only information or administration</text>
      <text x="586" y="114" textAnchor="middle" fill={COLORS.slate500} fontSize="7.8">reference material, scheduling, record-keeping</text>

      <rect x="30" y="140" width="740" height="30" rx="8" fill={COLORS.slate700} />
      <text x="400" y="160" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The same software can land on either side of that line purely on the strength of its claim</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="182" width="236" height="160" rx="10" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="182" width="236" height="26" rx="10" fill={s.c} />
          <text x={148 + i * 252} y="200" textAnchor="middle" fill={COLORS.white} fontSize="9.2" fontWeight="700">{s.n}</text>
          {s.items.map((it, j) => (
            <g key={j}>
              <circle cx={44 + i * 252} cy={221 + j * 40} r="3" fill={s.c} />
              <text x={56 + i * 252} y={224 + j * 40} fill={COLORS.slate900} fontSize="9.2" fontWeight="700">{it.t}</text>
              {it.l.map((t, k) => (
                <text key={k} x={56 + i * 252} y={236 + j * 40 + k * 11} fill={COLORS.slate600} fontSize="8">{t}</text>
              ))}
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="354" width="740" height="92" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="400" y="374" textAnchor="middle" fill={COLORS.slate700} fontSize="10.5" fontWeight="700">AND IN SOME PLACES, TWO LAYERS AT ONCE</text>
      <rect x="44" y="386" width="712" height="22" rx="6" fill={COLORS.blue} />
      <text x="400" y="401" textAnchor="middle" fill={COLORS.white} fontSize="9">Medical-device style rules — triggered by the clinical claim being made</text>
      <rect x="44" y="412" width="712" height="22" rx="6" fill={COLORS.cyan} />
      <text x="400" y="427" textAnchor="middle" fill={COLORS.white} fontSize="9">General AI rules — triggered by the technology and its risk tier, whatever the sector</text>

      <rect x="30" y="458" width="740" height="50" rx="10" fill={COLORS.slate900} />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Where both layers apply, the obligations add up rather than substitute for one another</text>
      <text x="400" y="492" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The shape is broadly shared; the categories, the duties and the thresholds are not</text>
      <text x="400" y="504" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Specifics differ by jurisdiction and change over time — check what applies where you are</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * DE-IDENTIFICATION AND CONSENT — risk as a spectrum
 * ------------------------------------------------------------------ */

export const DeidentificationConsentDiagram = () => {
  const removed = [
    'Names, contact details and addresses',
    'Record, account and device identifiers',
    'Exact dates tied to the individual',
    'Photographs and free text that name someone'
  ];
  const remaining = [
    'Age band, sex, and rough location',
    'Admission and discharge timing',
    'A rare diagnosis or unusual care pathway',
    'Occupation, employer, or referring service'
  ];
  const ticks = [
    { x: 128, l: ['Aggregate counts', 'released alone'] },
    { x: 312, l: ['Coarsened bands,', 'small cells suppressed'] },
    { x: 495, l: ['Full record with', 'quasi-identifiers intact'] },
    { x: 672, l: ['Rare profile that can be', 'matched to outside data'] }
  ];
  const words = [
    { c: COLORS.amber, n: 'DE-IDENTIFIED', l: ['Direct identifiers removed. Risk', 'is reduced, not removed, and the', 'residue is rarely measured.'] },
    { c: COLORS.blue, n: 'PSEUDONYMISED', l: ['A key still exists somewhere, so', 'somebody can reverse it. Still', 'personal data.'] },
    { c: COLORS.emerald, n: 'ANONYMOUS', l: ['Re-identification not reasonably', 'possible by anyone — a high bar,', 'and claimed far too readily.'] }
  ];
  const duties = [
    { x: 44, t: 'Consent', l: ['What the patient agreed to, and', 'whether this use was within what', 'they were actually told.'] },
    { x: 290, t: 'Transparency', l: ['Whether patients can find out that', 'their data is used this way at', 'all, and by whom.'] },
    { x: 536, t: 'Secondary-use limits', l: ['Data gathered for care and reused', 'for something else needs its own', 'basis, not a lighter identifier.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 626" caption="Educational orientation only — what is permitted, and on what basis, is set locally and differs by place">
      <defs>
        <linearGradient id="gradReidDCD" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.emerald} />
          <stop offset="50%" stopColor={COLORS.amber} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What removing identifiers does, and what it does not</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">de-identification lowers the chance of re-identification; it does not remove it</text>

      <rect x="30" y="52" width="360" height="140" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="52" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="210" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT COMES OUT — DIRECT IDENTIFIERS</text>
      {removed.map((r, i) => (
        <g key={i}>
          <circle cx="48" cy={91 + i * 20} r="3" fill={COLORS.emerald} />
          <text x="60" y={94 + i * 20} fill={COLORS.slate700} fontSize="8.6">{r}</text>
        </g>
      ))}
      <text x="44" y="180" fill={COLORS.slate500} fontSize="8" fontStyle="italic">Removing these is necessary, and it is the straightforward part.</text>

      <rect x="410" y="52" width="360" height="140" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="52" width="360" height="26" rx="10" fill={COLORS.amber} />
      <text x="590" y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT STAYS — QUASI-IDENTIFIERS</text>
      {remaining.map((r, i) => (
        <g key={i}>
          <circle cx="428" cy={91 + i * 20} r="3" fill={COLORS.amber} />
          <text x="440" y={94 + i * 20} fill={COLORS.slate700} fontSize="8.6">{r}</text>
        </g>
      ))}
      <text x="424" y="180" fill={COLORS.slate500} fontSize="8" fontStyle="italic">None names anyone alone — in combination they can still single one out.</text>

      <rect x="30" y="204" width="740" height="112" rx="10" fill={COLORS.white} stroke={COLORS.slate700} strokeWidth="2" />
      <rect x="30" y="204" width="740" height="26" rx="10" fill={COLORS.slate700} />
      <text x="400" y="222" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RE-IDENTIFICATION RISK IS A SPECTRUM, NOT A SOLVED STATE</text>
      <text x="60" y="240" fill={COLORS.slate500} fontSize="8">harder to re-identify</text>
      <text x="740" y="240" textAnchor="end" fill={COLORS.slate500} fontSize="8">easier to re-identify</text>
      <rect x="60" y="244" width="680" height="16" rx="8" fill="url(#gradReidDCD)" />
      {ticks.map((t, i) => (
        <g key={i}>
          <line x1={t.x} y1="260" x2={t.x} y2="268" stroke={COLORS.slate500} strokeWidth="1.5" />
          {t.l.map((s, j) => (
            <text key={j} x={t.x} y={278 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">{s}</text>
          ))}
        </g>
      ))}
      <text x="400" y="308" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">Nothing here is a fixed property — a new outside dataset moves any point rightwards</text>

      <text x="30" y="334" fill={COLORS.slate700} fontSize="10" fontWeight="700">THREE WORDS THAT ARE NOT SYNONYMS</text>
      {words.map((w, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="342" width="236" height="76" rx="10" fill={COLORS.white} stroke={w.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="342" width="236" height="22" rx="10" fill={w.c} />
          <text x={148 + i * 252} y="357" textAnchor="middle" fill={COLORS.white} fontSize="9.2" fontWeight="700">{w.n}</text>
          {w.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={382 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="430" width="740" height="98" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="430" width="740" height="26" rx="10" fill={COLORS.blue} />
      <text x="400" y="448" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AND IDENTIFIERS ARE NOT THE WHOLE OF THE PROTECTION</text>
      {duties.map((d, i) => (
        <g key={i}>
          <text x={d.x} y="476" fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{d.t}</text>
          {d.l.map((t, j) => (
            <text key={j} x={d.x} y={492 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="540" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="560" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">De-identified is a direction of travel, not a destination that has been reached</text>
      <text x="400" y="576" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Ask what the data could be linked against, not only what was taken out of it</text>
    </DiagramFrame>
  );
};
