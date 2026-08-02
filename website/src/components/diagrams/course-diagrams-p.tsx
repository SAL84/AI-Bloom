import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ LEGAL ORIENTATION — SUPERVISION, COMPETENCE, COMMERCIAL EDGES ============ */

export const SupervisingJuniorsDiagram = () => {
  const practices = [
    { c: COLORS.blue, h: 'SET EXPECTATIONS FIRST', l: ['Say which tasks may use a', 'tool and what verification', 'is expected, before the', 'work starts — not after.'] },
    { c: COLORS.blue, h: 'ASK TO SEE SOURCES', l: ['Ask for the underlying', 'material, not a confident', 'summary of it. A source', 'you can open, or nothing.'] },
    { c: COLORS.cyan, h: 'REVIEW THE REASONING', l: ['Ask how the conclusion was', 'reached. Output can be', 'right by accident; the', 'reasoning cannot.'] },
    { c: COLORS.emerald, h: 'MAKE ADMITTING IT SAFE', l: ['A junior has to be able to', 'say the tool produced this', 'and I could not verify it,', 'without it costing them.'] }
  ];
  const failure = [
    { t: 'TIME PRESSURE', l: ['a deadline that leaves', 'no room to check'] },
    { t: 'SILENCE', l: ['admitting tool use', 'feels like a risk'] },
    { t: 'NO SUPERVISION', l: ['nobody knows there is', 'anything to check'] },
    { t: 'UNVERIFIED WORK', l: ['goes out under a', "supervisor's name"] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="A junior who cannot safely say the tool produced this and I could not verify it will hand you something unverified instead">
      <defs>
        <marker id="arrowSJDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Supervising people who use these tools</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the aim is not to police use — it is to make verification the normal, sayable thing</text>
      {practices.map((p, i) => {
        const x = 30 + i * 188;
        return (
          <g key={i}>
            <rect x={x} y="56" width="176" height="106" rx="9" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
            <rect x={x} y="56" width="176" height="26" rx="9" fill={p.c} />
            <text x={x + 88} y="74" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{p.h}</text>
            {p.l.map((t, j) => (
              <text key={j} x={x + 12} y={102 + j * 16} fill={COLORS.slate700} fontSize="8.8">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="182" width="740" height="140" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="182" width="740" height="28" rx="10" fill={COLORS.red} />
      <text x="400" y="201" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE FAILURE MODE THIS PREVENTS</text>
      {failure.map((f, i) => {
        const x = 44 + i * 176;
        return (
          <g key={i}>
            <rect x={x} y="222" width="160" height="64" rx="8" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.5" />
            <text x={x + 80} y="244" textAnchor="middle" fill={COLORS.red} fontSize="9.5" fontWeight="700">{f.t}</text>
            {f.l.map((t, j) => (
              <text key={j} x={x + 80} y={260 + j * 14} textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{t}</text>
            ))}
            {i < 3 && <line x1={x + 162} y1="254" x2={x + 174} y2="254" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowSJDa)" />}
          </g>
        );
      })}
      <text x="400" y="306" textAnchor="middle" fill={COLORS.slate700} fontSize="10">Fear of the second box is what produces the fourth — removing that fear is supervision</text>

      <rect x="30" y="340" width="740" height="76" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="362" textAnchor="middle" fill={COLORS.emerald} fontSize="10.5" fontWeight="700">WHAT THE SUPERVISOR IS ACTUALLY ACCOUNTABLE FOR</text>
      <text x="400" y="384" textAnchor="middle" fill={COLORS.slate700} fontSize="10">The output carries your name as well as theirs — reviewing the reasoning is how you supervise it</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5" fontStyle="italic">Common professional principles, described generally; how supervision duties apply to you varies by jurisdiction</text>

      <text x="400" y="440" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Verification you can see beats verification you were promised</text>
    </DiagramFrame>
  );
};

export const TechCompetenceDiagram = () => {
  const areas = [
    { c: COLORS.blue, t: 'What the tool does, and does not do', a: 'The task it is genuinely good at, and the edge of that task —', b: 'stated plainly enough that you could explain it to a client.' },
    { c: COLORS.blue, t: 'How it fails', a: 'Fluent, confident and wrong is a normal output of these systems,', b: 'not a rare defect you would notice by reading carefully.' },
    { c: COLORS.cyan, t: "Where the client's data goes", a: 'Who receives it, what they may do with it, how long it is kept', b: '— and whether your confidentiality duties survive the trip.' },
    { c: COLORS.amber, t: 'When not to use it at all', a: 'Matters, data and decisions that stay off the tool entirely,', b: 'decided in advance rather than in the middle of a deadline.' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Competence in the tools is a supervision standard rather than a technical one — and the specifics of the duty vary by jurisdiction">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Competence as an ongoing duty that now includes the tools</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a common professional principle, described generally — the specific wording varies by jurisdiction</text>
      {areas.map((a, i) => {
        const y = 60 + i * 76;
        return (
          <g key={i}>
            <rect x="30" y={y} width="440" height="66" rx="9" fill={COLORS.white} stroke={a.c} strokeWidth="2" />
            <circle cx="58" cy={y + 33} r="14" fill={a.c} />
            <text x="58" y={y + 37} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{i + 1}</text>
            <text x="88" y={y + 24} fill={COLORS.slate900} fontSize="11.5" fontWeight="700">{a.t}</text>
            <text x="88" y={y + 42} fill={COLORS.slate600} fontSize="9.3">{a.a}</text>
            <text x="88" y={y + 57} fill={COLORS.slate600} fontSize="9.3">{a.b}</text>
          </g>
        );
      })}

      <rect x="486" y="60" width="284" height="294" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="486" y="60" width="284" height="30" rx="10" fill={COLORS.amber} />
      <text x="628" y="80" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT IT DOES NOT MEAN</text>
      {['Competence here does not mean', 'expertise in the underlying', 'technology.'].map((t, i) => (
        <text key={i} x="628" y={112 + i * 16} textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">{t}</text>
      ))}
      {['You do not need to know how a', 'model is built or trained, or how', 'to evaluate one against another.'].map((t, i) => (
        <text key={i} x="628" y={170 + i * 16} textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">{t}</text>
      ))}
      <line x1="500" y1="218" x2="756" y2="218" stroke={COLORS.slate200} strokeWidth="1" />
      {['It means knowing enough to', 'supervise the output, judge', 'whether a task suits the tool, and', 'ask sharp questions of a vendor.'].map((t, i) => (
        <text key={i} x="628" y={240 + i * 16} textAnchor="middle" fill={COLORS.slate900} fontSize="9.5" fontWeight="600">{t}</text>
      ))}
      <rect x="500" y="306" width="256" height="34" rx="8" fill={COLORS.emerald} />
      <text x="628" y="328" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">SUPERVISION, NOT ENGINEERING</text>

      <rect x="30" y="372" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="394" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">COMPETENCE IS ONGOING — THE TOOLS CHANGE, SO THE DUTY DOES NOT SETTLE</text>
      <text x="400" y="412" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">What you learned about a tool last year describes a tool that no longer exists in that form</text>

      <text x="400" y="446" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Knowing enough to supervise is the standard — not knowing enough to build</text>
    </DiagramFrame>
  );
};

export const BillingConsentMalpracticeDiagram = () => {
  const cols = [
    {
      x: 30, c: COLORS.amber, h: 'BILLING',
      s1: 'When the work takes far less', s2: 'time than it used to',
      body: ['Hours billed fall; the value delivered', 'does not. Fees have to stay', 'reasonable, and reasonableness is', 'judged on more than a clock.'],
      q: ['Do you bill time, or value?', 'Who benefits from the time saved?', 'Are tool costs recovered, and how?', 'Is any of this visible to the client?']
    },
    {
      x: 280, c: COLORS.blue, h: 'CONSENT AND TRANSPARENCY',
      s1: 'What the client is told,', s2: 'and when they are told it',
      body: ['Engagement terms are where tool use', 'is either disclosed or left implied.', 'Some clients will have their own', 'rules, and those rules win.'],
      q: ['Does the engagement letter say?', 'Is consent asked for, or assumed?', 'Which matters need tighter limits?', 'Who checks client-side restrictions?']
    },
    {
      x: 530, c: COLORS.red, h: 'MALPRACTICE EXPOSURE',
      s1: 'Where liability sits when', s2: 'unverified output goes out',
      body: ['The tool has no duty to the client', 'and cannot be sued for the advice.', 'Exposure stays with the people and', 'the firm that put a name on it.'],
      q: ['Who signs off before it leaves?', 'Is the review step recorded?', 'Does the insurer know the practice?', 'What happens when it goes wrong?']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 436" caption="The efficiency arrives before the policy does — these are questions a firm has to answer for itself, not answers this course can give">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The commercial and liability edges — questions, not answers</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each is a decision the firm makes in policy; none of it is advice on your obligations</text>
      {cols.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="56" width="240" height="248" rx="10" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="56" width="240" height="30" rx="10" fill={c.c} />
          <text x={c.x + 120} y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{c.h}</text>
          <text x={c.x + 120} y="104" textAnchor="middle" fill={c.c} fontSize="9.5" fontWeight="700">{c.s1}</text>
          <text x={c.x + 120} y="119" textAnchor="middle" fill={c.c} fontSize="9.5" fontWeight="700">{c.s2}</text>
          <line x1={c.x + 14} y1="130" x2={c.x + 226} y2="130" stroke={COLORS.slate200} strokeWidth="1" />
          {c.body.map((t, j) => (
            <text key={j} x={c.x + 14} y={148 + j * 14} fill={COLORS.slate600} fontSize="8.6">{t}</text>
          ))}
          <text x={c.x + 14} y="216" fill={COLORS.slate400} fontSize="8.5" fontWeight="700">QUESTIONS THE POLICY MUST ANSWER</text>
          {c.q.map((t, j) => (
            <g key={j}>
              <circle cx={c.x + 17} cy={229 + j * 18} r="2.5" fill={c.c} />
              <text x={c.x + 26} y={232 + j * 18} fill={COLORS.slate700} fontSize="8.8">{t}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="322" width="740" height="76" rx="10" fill={COLORS.slate900} />
      <text x="400" y="346" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THESE ARE POLICY QUESTIONS, NOT SETTLED ANSWERS</text>
      <text x="400" y="368" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">There is no single correct answer to any of them — but a firm that has not answered has answered by default</text>
      <text x="400" y="386" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.75" fontStyle="italic">How the underlying duties apply is jurisdiction-specific; treat this as a checklist for your own policy work</text>

      <text x="400" y="422" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The efficiency arrives before the policy does — which is exactly why the questions need answering first</text>
    </DiagramFrame>
  );
};
