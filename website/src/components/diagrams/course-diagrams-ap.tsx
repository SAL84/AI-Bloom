import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULE 5 CAPSTONE: THE WHOLE METHOD, ONCE THROUGH ============ */

export const CapstoneWalkthroughDiagram = () => {
  const stations = [
    {
      c: COLORS.blue,
      h: '1 · SIZE IT DOWN',
      l: ['the full idea is a year of work', 'keep one action, cut the rest', 'fake payments and reminders'],
      al: 'THE ONE SENTENCE',
      a: ['"a dog owner picks a free slot', 'and the groomer gets an email"', 'three sentences, one first user'],
    },
    {
      c: COLORS.cyan,
      h: '2 · SPEC AND BUILD',
      l: ['three questions, plain words', 'one small piece at a time', 'save a copy after each step'],
      al: 'THE SPEC IN MINIATURE',
      a: ['for: a dog owner, on a phone', 'must: book a slot, email me', 'never: show others\' bookings'],
    },
    {
      c: COLORS.amber,
      h: '3 · WHEN IT BREAKS',
      l: ['a small change blanks the page', 'paste the whole error message', 'two bad fixes? do not stack three'],
      al: 'THE THREE-PART REPORT',
      a: ['did: pressed Confirm', 'expected: a thank-you message', 'got: blank page + [full error]'],
    },
    {
      c: COLORS.emerald,
      h: '4 · GOOD ENOUGH TO SHARE?',
      l: ['run the whole list every time', 'one friend, one task, silence', 'then the duty-of-care checks'],
      al: 'THE GATE QUESTIONS',
      a: ['whose data does it hold?', 'are the keys out of the code?', 'are the spending caps set?'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="One worked example walks the four stations — size it down, spec and build, survive the break, and pass the gate before anyone else sees it.">
      <defs>
        <marker id="arrowCPWa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowCPWb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One small idea, walked through all four stations</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a worked example — a booking page for a dog-grooming business — every project walks these same stations</text>

      {stations.map((s, i) => (
        <g key={i}>
          <rect x={20 + i * 196} y="58" width="170" height="140" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={20 + i * 196} y="58" width="170" height="20" rx="9" fill={s.c} />
          <text x={105 + i * 196} y="72" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <text key={j} x={30 + i * 196} y={90 + j * 12} fill={COLORS.slate600} fontSize="7.5">{t}</text>
          ))}
          <rect x={28 + i * 196} y="122" width="154" height="68" rx="6" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.2" />
          <text x={34 + i * 196} y="135" fill={s.c} fontSize="7" fontWeight="700">{s.al}</text>
          {s.a.map((t, j) => (
            <text key={j} x={34 + i * 196} y={148 + j * 11} fill={COLORS.slate600} fontSize="7">{t}</text>
          ))}
          {i < 3 && <line x1={192 + i * 196} y1="118" x2={212 + i * 196} y2="118" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowCPWa)" />}
        </g>
      ))}

      <path d="M 497 198 L 497 220 L 301 220 L 301 202" fill="none" stroke={COLORS.amber} strokeWidth="1.4" markerEnd="url(#arrowCPWb)" />
      <text x="400" y="236" textAnchor="middle" fill={COLORS.amber} fontSize="7.6" fontStyle="italic">a fix breaks something new? go back to the last working copy — never forwards into the mess</text>

      <line x1="693" y1="198" x2="693" y2="246" stroke={COLORS.slate400} strokeWidth="1.6" markerEnd="url(#arrowCPWa)" />

      <rect x="30" y="252" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="272" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">THE GATE: DO NOT SHARE UNTIL EVERY ANSWER IS GOOD</text>
      <text x="400" y="288" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">whose data it holds · keys out of the code · caps set · the whole checklist run as a stranger, on a phone</text>

      <rect x="30" y="316" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="316" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="330" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">GOOD ANSWERS → SHARE SMALL</text>
      <text x="44" y="350" fill={COLORS.slate600} fontSize="8.2">a few forgiving people first, while</text>
      <text x="44" y="362" fill={COLORS.slate600} fontSize="8.2">you watch the first arrivals</text>

      <rect x="410" y="316" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="316" width="360" height="20" rx="9" fill={COLORS.amber} />
      <text x="590" y="330" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">ANY ANSWER SHAKY → NOT YET</text>
      <text x="424" y="350" fill={COLORS.slate600} fontSize="8.2">fix it first, or do not share at all —</text>
      <text x="424" y="362" fill={COLORS.slate600} fontSize="8.2">not shipping is a real decision too</text>

      <rect x="30" y="392" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="412" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">YOUR PROJECT WILL DIVERGE FROM THIS EXAMPLE AT EVERY STEP — THAT IS NORMAL</text>
      <text x="400" y="429" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the example does not transfer — the method does: size it down, spec it, expect the breaks, gate the share</text>
    </DiagramFrame>
  );
};
