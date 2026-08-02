import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ==================== LEGAL ORIENTATION — SCOPE, EXPOSURE, WORKFLOW ==================== */

export const LegalScopeSafetyDiagram = () => {
  const provides = [
    ['Task suitability', 'which work AI can touch, and how closely to watch it'],
    ['Failure modes', 'how these tools go wrong, and why it reads convincingly'],
    ['A verification workflow', 'the steps that check output before anyone else sees it'],
    ['Questions to ask a vendor', 'what to establish before a tool touches client work'],
    ['Policy building blocks', 'the parts a firm has to decide for itself']
  ];
  const excludes = [
    ['Legal advice', 'Nothing here is advice on your matters, your', 'clients, or your professional position.'],
    ['Jurisdiction-specific rules', 'Duties differ by jurisdiction and by regulator.', 'The specifics are always local to you.'],
    ['A substitute for your obligations', 'Your regulator sets what you must do. This does', 'not restate, replace or interpret any of it.']
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Fix the boundary first: this course builds judgement about the tools, it does not tell you what your professional duties are">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What this course is — and what it is not</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">educational orientation for legal professionals — this is not legal advice</text>

      <rect x="30" y="56" width="365" height="280" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="56" width="365" height="30" rx="10" fill={COLORS.emerald} />
      <text x="212" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT THIS COURSE DOES PROVIDE</text>
      {provides.map((p, i) => {
        const y = 96 + i * 44;
        return (
          <g key={i}>
            <rect x="44" y={y} width="337" height="38" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
            <circle cx="60" cy={y + 19} r="4" fill={COLORS.emerald} />
            <text x="74" y={y + 16} fill={COLORS.slate900} fontSize="10.3" fontWeight="700">{p[0]}</text>
            <text x="74" y={y + 30} fill={COLORS.slate600} fontSize="8.8">{p[1]}</text>
          </g>
        );
      })}
      <text x="212" y="326" textAnchor="middle" fill={COLORS.emerald} fontSize="9.2" fontStyle="italic">All of it is orientation you can act on</text>

      <rect x="405" y="56" width="365" height="280" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="405" y="56" width="365" height="30" rx="10" fill={COLORS.red} />
      <text x="587" y="76" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHAT IT DOES NOT PROVIDE</text>
      {excludes.map((e, i) => {
        const y = 96 + i * 62;
        return (
          <g key={i}>
            <rect x="419" y={y} width="337" height="54" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.5" />
            <text x="433" y={y + 18} fill={COLORS.slate900} fontSize="10.3" fontWeight="700">{e[0]}</text>
            <text x="433" y={y + 33} fill={COLORS.slate600} fontSize="8.8">{e[1]}</text>
            <text x="433" y={y + 46} fill={COLORS.slate600} fontSize="8.8">{e[2]}</text>
          </g>
        );
      })}
      <line x1="419" y1="290" x2="756" y2="290" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="587" y="306" textAnchor="middle" fill={COLORS.slate600} fontSize="9.2" fontStyle="italic">Ethics duties appear here as common principles only —</text>
      <text x="587" y="320" textAnchor="middle" fill={COLORS.slate600} fontSize="9.2" fontStyle="italic">how they apply to you varies by jurisdiction</text>

      <rect x="30" y="352" width="740" height="64" rx="10" fill={COLORS.slate900} />
      <text x="400" y="376" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE STANDING RULE FOR EVERYTHING THAT FOLLOWS</text>
      <text x="400" y="398" textAnchor="middle" fill={COLORS.white} fontSize="11" opacity="0.95">You remain personally responsible for your work product, whichever tool produced it</text>

      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">Orientation, not advice — this sharpens the questions; your regulator and your judgement supply the answers</text>
    </DiagramFrame>
  );
};

export const WhyLegalExposedDiagram = () => {
  const cards = [
    {
      x: 30, y: 56, c: COLORS.amber, h: '1  CITATION-DENSE, FORMALLY STRUCTURED',
      l: ['Legal writing runs on references and fixed structure.', 'A fabricated authority inherits that structure, so it', 'arrives already wearing the marks of something real.'],
      n: 'Shape is not evidence — but it reads like it'
    },
    {
      x: 405, y: 56, c: COLORS.amber, h: '2  READERS ARE TRAINED TO TRUST FORMAT',
      l: ['A correctly formed reference normally means someone', 'looked it up. That habit is a good one, and it is', 'exactly the habit these tools quietly exploit.'],
      n: 'The format no longer certifies the checking'
    },
    {
      x: 30, y: 198, c: COLORS.red, h: '3  ERRORS SURFACE LATE, AND IN PUBLIC',
      l: ['A mistake in a draft is cheap. The same mistake in a', 'filing or an advice letter is found by a court, an', 'opponent or the client — after it has been relied on.'],
      n: 'The cheapest place to catch it is the earliest'
    },
    {
      x: 405, y: 198, c: COLORS.red, h: '4  THE CONSEQUENCE LANDS ON A PERSON',
      l: ['The tool carries no licence, no duty and no standing', 'to be sanctioned. The practitioner who signed carries', 'all three, plus the reputation attached to them.'],
      n: 'Exposure does not distribute — it concentrates'
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 440" caption="Fluent-but-wrong is a general property of these tools; what makes it acute in legal work is that the output looks like something already checked">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Why legal work is unusually exposed to fluent-but-wrong output</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">four properties of the work itself, not of any particular tool</text>
      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="365" height="126" rx="10" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y={c.y} width="365" height="28" rx="10" fill={c.c} />
          <text x={c.x + 182} y={c.y + 19} textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x={c.x + 18} y={c.y + 50 + j * 16} fill={COLORS.slate700} fontSize="9.8">{t}</text>
          ))}
          <line x1={c.x + 18} y1={c.y + 94} x2={c.x + 347} y2={c.y + 94} stroke={COLORS.slate200} strokeWidth="1" />
          <text x={c.x + 182} y={c.y + 112} textAnchor="middle" fill={c.c} fontSize="9.2" fontStyle="italic">{c.n}</text>
        </g>
      ))}
      <rect x="30" y="342" width="740" height="60" rx="10" fill={COLORS.slate900} />
      <text x="400" y="366" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PUT TOGETHER: A HIGH-CREDIBILITY ERROR THAT SURFACES LATE, ON YOUR NAME</text>
      <text x="400" y="388" textAnchor="middle" fill={COLORS.white} fontSize="10" opacity="0.9">None of the four is about the technology being bad — each is about where legal work places its trust</text>
      <text x="400" y="424" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The exposure comes from the medium as much as the model — dense, formal, trusted, and signed by a person</text>
    </DiagramFrame>
  );
};

export const RedliningFlowDiagram = () => {
  const stages = [
    { c: COLORS.slate700, h: '1  INCOMING DRAFT', l: ["The counterparty's draft,", 'unmarked, as received.'] },
    { c: COLORS.blue, h: '2  COMPARED TO STANDARD', l: ["Checked against the firm's", 'agreed positions and the', 'fallbacks already approved.'] },
    { c: COLORS.blue, h: '3  EDITS WITH RATIONALE', l: ['Each proposed change comes', 'with a stated reason: what', 'it fixes and why it matters.'] },
    { c: COLORS.amber, h: '4  DEVIATIONS FLAGGED', l: ['Departures from standard', 'are ranked by risk, not', 'listed alphabetically.'] }
  ];
  const outcomes = [
    { c: COLORS.emerald, t: 'ACCEPT', l: ['the rationale holds and the', 'position is one you would', 'have taken yourself'] },
    { c: COLORS.blue, t: 'MODIFY', l: ['the direction is right, the', 'drafting or the strength of', 'it is not'] },
    { c: COLORS.red, t: 'REJECT', l: ['the standard position does', 'not apply here, or the edit', 'misreads the deal'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 452" caption="First-pass markup earns its time only when every proposed edit arrives with a reason a lawyer can accept, modify or reject">
      <defs>
        <marker id="arrowRDFa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">First-pass redlining, and where the lawyer stays in it</text>
      {stages.map((s, i) => {
        const x = 30 + i * 188;
        return (
          <g key={i}>
            <rect x={x} y="48" width="176" height="92" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x={x} y="48" width="176" height="26" rx="9" fill={s.c} />
            <text x={x + 88} y="66" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">{s.h}</text>
            {s.l.map((t, j) => (
              <text key={j} x={x + 12} y={94 + j * 16} fill={COLORS.slate700} fontSize="8.8">{t}</text>
            ))}
            {i < 3 && <line x1={x + 177} y1="94" x2={x + 187} y2="94" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowRDFa)" />}
          </g>
        );
      })}
      <line x1="400" y1="140" x2="400" y2="156" stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowRDFa)" />

      <rect x="30" y="158" width="740" height="150" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="158" width="740" height="28" rx="10" fill={COLORS.emerald} />
      <text x="400" y="177" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">5  LAWYER REVIEW — EVERY PROPOSED CHANGE GETS A DECISION</text>
      {outcomes.map((o, i) => {
        const x = 44 + i * 242;
        return (
          <g key={i}>
            <rect x={x} y="196" width="228" height="92" rx="8" fill={COLORS.slate50} stroke={o.c} strokeWidth="2" />
            <text x={x + 114} y="220" textAnchor="middle" fill={o.c} fontSize="12" fontWeight="700">{o.t}</text>
            {o.l.map((t, j) => (
              <text key={j} x={x + 114} y={242 + j * 15} textAnchor="middle" fill={COLORS.slate600} fontSize="8.8">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="326" width="740" height="88" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="400" y1="336" x2="400" y2="404" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="220" y="350" textAnchor="middle" fill={COLORS.emerald} fontSize="9.5" fontWeight="700">WITH A RATIONALE PER EDIT</text>
      <text x="220" y="374" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8">You are checking a stated reason against your own</text>
      <text x="220" y="390" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8">judgement — fast, and it either holds or it does not.</text>
      <text x="580" y="350" textAnchor="middle" fill={COLORS.red} fontSize="9.5" fontWeight="700">WITHOUT ONE</text>
      <text x="580" y="374" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8">You must reconstruct the reasoning for every change</text>
      <text x="580" y="390" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8">before you can judge it — slower than no markup at all.</text>

      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The rationale is not documentation — it is the thing that makes review possible at speed</text>
    </DiagramFrame>
  );
};

export const SanctionsPatternDiagram = () => {
  const chain = [
    { c: COLORS.slate600, t: 'Time pressure', s: 'a deadline, a late instruction, a long list' },
    { c: COLORS.amber, t: 'The tool produces plausible authorities', s: 'well-formed, on point, confidently stated' },
    { c: COLORS.red, t: 'No independent verification', s: 'the shape of the answer is taken as the check' },
    { c: COLORS.red, t: 'The work is filed or sent', s: 'a signature attaches a person to the content' },
    { c: COLORS.red, t: 'Someone goes looking for the authority', s: 'an opponent, a judge or the client cannot find it' },
    { c: COLORS.red, t: 'Consequences follow the person and the firm', s: 'professional, reputational and commercial at once' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 472" caption="Every step but one is ordinary professional life — the pattern survives because the missing step is the only unusual thing about it">
      <defs>
        <marker id="arrowSPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The recurring anatomy of an AI-citation failure</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a pattern, not an incident — no matter, forum, outcome or figure is described here</text>
      {chain.map((s, i) => {
        const y = 60 + i * 64;
        return (
          <g key={i}>
            <rect x="30" y={y} width="470" height="54" rx="8" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <circle cx="56" cy={y + 27} r="13" fill={s.c} />
            <text x="56" y={y + 31} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">{i + 1}</text>
            <text x="88" y={y + 24} fill={COLORS.slate900} fontSize="11.5" fontWeight="700">{s.t}</text>
            <text x="88" y={y + 41} fill={COLORS.slate500} fontSize="9.5">{s.s}</text>
            {i < 5 && <line x1="265" y1={y + 54} x2="265" y2={y + 62} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowSPDa)" />}
          </g>
        );
      })}
      <rect x="24" y="182" width="482" height="66" rx="11" fill="none" stroke={COLORS.emerald} strokeWidth="2" strokeDasharray="6 4" />
      <line x1="506" y1="215" x2="514" y2="215" stroke={COLORS.emerald} strokeWidth="2" />

      <rect x="516" y="60" width="254" height="374" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="516" y="60" width="254" height="30" rx="10" fill={COLORS.emerald} />
      <text x="643" y="80" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHERE THE CHAIN BREAKS</text>
      {['Every other step here is ordinary', 'practice. Deadlines are normal.', 'Fluent text is what these tools', 'produce. Filing is the job.'].map((t, i) => (
        <text key={i} x="643" y={112 + i * 16} textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">{t}</text>
      ))}
      <line x1="530" y1="176" x2="756" y2="176" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="643" y="196" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">Only one step is missing, and it</text>
      <text x="643" y="212" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">is the one that stops all of it:</text>
      <rect x="530" y="224" width="226" height="52" rx="8" fill={COLORS.emerald} />
      <text x="643" y="248" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">OPEN THE ACTUAL SOURCE</text>
      <text x="643" y="266" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.95">AND READ IT BEFORE FILING</text>
      {["Not the tool's summary of it.", "Not a second tool's agreement.", 'The source itself, read by you.'].map((t, i) => (
        <text key={i} x="643" y={294 + i * 16} textAnchor="middle" fill={COLORS.slate600} fontSize="9.5">{t}</text>
      ))}
      <line x1="530" y1="342" x2="756" y2="342" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="643" y="362" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">Insert that one step and the</text>
      <text x="643" y="378" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5">rest of the chain cannot form.</text>
      <text x="643" y="402" textAnchor="middle" fill={COLORS.emerald} fontSize="9.5" fontWeight="700" fontStyle="italic">One habit, applied every time</text>

      <text x="400" y="458" textAnchor="middle" fill={COLORS.slate500} fontSize="10.5" fontStyle="italic">The pattern is mundane at every step except one — which is why it repeats, and why a single habit interrupts it</text>
    </DiagramFrame>
  );
};
