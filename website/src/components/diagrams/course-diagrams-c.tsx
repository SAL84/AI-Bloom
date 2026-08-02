import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE — tokens, feeds, consent
 * ------------------------------------------------------------------ */

export const TokensAndContextDiagram = () => {
  const raw = [
    { t: 'Un', w: 44 }, { t: 'believ', w: 66 }, { t: 'ably', w: 52 }, { t: ',', w: 26 },
    { t: 'token', w: 58 }, { t: 'isation', w: 66 }, { t: 'splits', w: 58 },
    { t: 'ordinary', w: 76 }, { t: 'words', w: 62 }, { t: '.', w: 26 }
  ];
  let cursor = 106;
  const toks = raw.map((r) => { const x = cursor; cursor += r.w + 6; return { ...r, x }; });
  const left = [
    { y: 208, f: COLORS.slate200, s: COLORS.slate400, c: COLORS.slate700, t: 'System instructions' },
    { y: 238, f: COLORS.blueLight, s: COLORS.blueMid, c: COLORS.slate900, t: 'Your first question' },
    { y: 268, f: COLORS.blueLight, s: COLORS.blueMid, c: COLORS.slate900, t: 'The answer you got back' }
  ];
  const right = [
    { y: 208, f: '#fef2f2', s: COLORS.red, c: COLORS.slate500, t: 'Your first question', tag: 'DROPPED', tc: COLORS.red, cut: true },
    { y: 238, f: '#fffbeb', s: COLORS.amber, c: COLORS.slate700, t: 'Several early turns, squashed into one summary', tag: 'SUMMARISED', tc: COLORS.amber, cut: false },
    { y: 268, f: COLORS.blueLight, s: COLORS.blueMid, c: COLORS.slate900, t: 'A later answer', tag: '', tc: '', cut: false },
    { y: 298, f: COLORS.blueLight, s: COLORS.blueMid, c: COLORS.slate900, t: 'Your newest question', tag: '', tc: '', cut: false },
    { y: 328, f: COLORS.blue, s: COLORS.blue, c: COLORS.white, t: 'The reply being written right now', tag: '', tc: '', cut: false }
  ];
  const notes = [
    ['Only what is still inside the window', 'exists as far as the model is concerned'],
    ['When it seems to forget, the detail', 'was dropped or summarised away'],
    ['Re-paste what matters, or start a', 'fresh chat — that is the whole fix']
  ];
  return (
    <DiagramFrame viewBox="0 0 800 482" caption="Memory in a chat is not storage — it is a fixed-size window, and anything pushed out of it is gone unless you put it back">
      <defs>
        <marker id="arrowTAC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Tokens, and the window they have to fit in</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a model does not read words — it reads pieces</text>

      {toks.map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="50" width={k.w} height="38" rx="6" fill={COLORS.white} stroke={i < 3 ? COLORS.blue : COLORS.slate300} strokeWidth="2" />
          <text x={k.x + k.w / 2} y="74" textAnchor="middle" fill={i < 3 ? COLORS.blue : COLORS.slate900} fontSize="12" fontWeight="600">{k.t}</text>
        </g>
      ))}
      <path d="M 106 94 L 106 100 L 280 100 L 280 94" fill="none" stroke={COLORS.blue} strokeWidth="1.5" />
      <text x="193" y="114" textAnchor="middle" fill={COLORS.blue} fontSize="10" fontWeight="700">one word, three tokens</text>
      <path d="M 518 94 L 518 100 L 662 100 L 662 94" fill="none" stroke={COLORS.slate500} strokeWidth="1.5" />
      <text x="590" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="10" fontWeight="700">common words, one token each</text>
      <text x="400" y="132" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">spaces, commas and full stops are tokens too — rare words break into more pieces than common ones</text>
      <line x1="400" y1="140" x2="400" y2="158" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowTAC)" />

      <rect x="30" y="164" width="360" height="218" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="164" width="360" height="28" rx="10" fill={COLORS.emerald} />
      <text x="210" y="183" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">EARLY IN THE CHAT — ROOM TO SPARE</text>
      <rect x="50" y="202" width="320" height="156" rx="8" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      {left.map((s, i) => (
        <g key={i}>
          <rect x="60" y={s.y} width="300" height="26" rx="5" fill={s.f} stroke={s.s} strokeWidth="1.5" />
          <text x="72" y={s.y + 17} fill={s.c} fontSize="10">{s.t}</text>
        </g>
      ))}
      <rect x="60" y="298" width="300" height="56" rx="5" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="210" y="331" textAnchor="middle" fill={COLORS.emerald} fontSize="10" fontWeight="700">SPACE STILL FREE</text>

      <rect x="410" y="164" width="360" height="218" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="164" width="360" height="28" rx="10" fill={COLORS.red} />
      <text x="590" y="183" textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">LATER — THE WINDOW IS FULL</text>
      <rect x="430" y="202" width="320" height="156" rx="8" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      {right.map((s, i) => (
        <g key={i}>
          <rect x="440" y={s.y} width="300" height="26" rx="5" fill={s.f} stroke={s.s} strokeWidth="1.5" />
          <text x="452" y={s.y + 17} fill={s.c} fontSize="9.5" textDecoration={s.cut ? 'line-through' : undefined}>{s.t}</text>
          {s.tag && (
            <g>
              <rect x="640" y={s.y + 4} width="92" height="18" rx="9" fill={s.tc} />
              <text x="686" y={s.y + 17} textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{s.tag}</text>
            </g>
          )}
        </g>
      ))}

      {notes.map((n, i) => (
        <g key={i}>
          <rect x={30 + i * 254} y="394" width="232" height="56" rx="8" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
          <text x={146 + i * 254} y="418" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">{n[0]}</text>
          <text x={146 + i * 254} y="434" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">{n[1]}</text>
        </g>
      ))}
      <text x="400" y="470" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A long chat does not make the window bigger — it just decides what gets pushed out of it first</text>
    </DiagramFrame>
  );
};

export const RecommendationFeedDiagram = () => {
  const cols = [
    {
      x: 30, c: COLORS.blue, h: '1 · SIGNALS YOU GIVE OFF',
      s: 'most of them without deciding to',
      l: ['How long you watched before scrolling', 'The clip you replayed or paused on', 'Likes, saves, shares and comments', 'Accounts you follow and search for', 'Time of day, and how long you stay']
    },
    {
      x: 290, c: COLORS.slate700, h: '2 · RANKING',
      s: 'one question, asked of every candidate',
      l: ['How likely are you to engage with this?', 'Every possible post is scored', 'The highest scores go to the top', 'The question is never is this true', 'and never is this good for you']
    },
    {
      x: 550, c: COLORS.cyan, h: '3 · WHAT YOU GET SHOWN',
      s: 'the winners of that scoring',
      l: ['More of whatever held you longest', 'A slightly stronger version of it', 'Whatever kept people like you watching', 'The edges get amplified, not the middle', 'You never see what was filtered out']
    }
  ];
  const notList = ['true, or checked', 'good for you', 'what you would pick on reflection', 'what most people actually think'];
  const doList = ['Every second you linger is a vote', 'Follow and search on purpose', 'Notice how you feel after 20 minutes', 'A feed you did not choose is still a choice'];
  return (
    <DiagramFrame viewBox="0 0 800 465" caption="The feed is not showing you the world — it is showing you the version of the world that kept you scrolling last time">
      <defs>
        <marker id="arrowRFD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">How a feed decides what you see next</text>

      {cols.map((col, i) => (
        <g key={i}>
          <rect x={col.x} y="40" width="220" height="200" rx="10" fill={COLORS.white} stroke={col.c} strokeWidth="2" />
          <rect x={col.x} y="40" width="220" height="28" rx="10" fill={col.c} />
          <text x={col.x + 110} y="59" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{col.h}</text>
          <text x={col.x + 110} y="84" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">{col.s}</text>
          {col.l.map((t, j) => (
            <g key={j}>
              <circle cx={col.x + 18} cy={104 + j * 26} r="2.5" fill={col.c} />
              <text x={col.x + 28} y={107 + j * 26} fill={COLORS.slate700} fontSize="9.3">{t}</text>
            </g>
          ))}
          {i < 2 && <line x1={col.x + 222} y1="140" x2={col.x + 256} y2="140" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowRFD)" />}
        </g>
      ))}

      <path d="M 660 242 L 660 268 L 140 268 L 140 246" fill="none" stroke={COLORS.amber} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowRFD)" />
      <rect x="252" y="256" width="296" height="24" rx="12" fill={COLORS.amber} />
      <text x="400" y="272" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">4 · WHAT YOU WERE SHOWN BECOMES YOUR NEXT SIGNAL</text>

      <rect x="30" y="292" width="360" height="132" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="292" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="210" y="310" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ENGAGEMENT IS NOT THE SAME AS</text>
      {notList.map((t, i) => (
        <g key={i}>
          <circle cx="50" cy={340 + i * 22} r="3" fill={COLORS.red} />
          <text x="62" y={344 + i * 22} fill={COLORS.slate700} fontSize="10.3">{t}</text>
        </g>
      ))}

      <rect x="410" y="292" width="360" height="132" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="292" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="590" y="310" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HOW TO GET SOME CONTROL BACK</text>
      {doList.map((t, i) => (
        <g key={i}>
          <circle cx="430" cy={340 + i * 22} r="3" fill={COLORS.emerald} />
          <text x="442" y={344 + i * 22} fill={COLORS.slate700} fontSize="10.3">{t}</text>
        </g>
      ))}
      <text x="400" y="452" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A ranking system optimises for what you do, not for what you would say you wanted</text>
    </DiagramFrame>
  );
};

export const ConsentAndImagesDiagram = () => {
  const harms = [
    ['The person in it is real', 'the harm lands on them, not on a made-up face'],
    ['Fake does not mean harmless', 'reputation, safety and mental health all take the hit'],
    ['Making, asking, saving, sending', 'each one is part of it — passing it on is not neutral'],
    ['It is often a criminal offence', 'especially where anyone involved is under eighteen']
  ];
  const routes = [
    { t: 'A TRUSTED ADULT', a: 'a parent, carer or teacher —', b: 'you can tell someone today' },
    { t: 'THE PLATFORM', a: 'report it and ask for takedown,', b: 'then keep the reference' },
    { t: 'THE SCHOOL', a: 'safeguarding staff can act,', b: 'and are required to' },
    { t: 'THE POLICE', a: 'a route that exists and is', b: 'used for exactly this' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Consent is the whole issue — a synthetic image of a real person is a real harm to that person, and there are routes out of it">
      <defs>
        <marker id="arrowCAI" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Synthetic images of real people</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">what happens, why it is serious, and who to tell</text>

      <rect x="30" y="54" width="222" height="118" rx="10" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <text x="141" y="74" textAnchor="middle" fill={COLORS.slate600} fontSize="9" fontWeight="700">1 · A PHOTO OF A REAL PERSON</text>
      <rect x="106" y="82" width="70" height="56" rx="6" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.5" />
      <circle cx="141" cy="103" r="10" fill={COLORS.slate300} />
      <path d="M 122 138 A 19 17 0 0 1 160 138 Z" fill={COLORS.slate300} />
      <text x="141" y="158" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">taken from a profile or a group chat</text>

      <line x1="254" y1="113" x2="286" y2="113" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCAI)" />
      <text x="270" y="140" textAnchor="middle" fill={COLORS.red} fontSize="8.5" fontWeight="700">NEVER</text>
      <text x="270" y="152" textAnchor="middle" fill={COLORS.red} fontSize="8.5" fontWeight="700">ASKED</text>

      <rect x="289" y="54" width="222" height="118" rx="10" fill={COLORS.slate700} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700" opacity="0.85">2 · A GENERATION MODEL</text>
      <text x="400" y="102" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">Edits or generates</text>
      <text x="400" y="120" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">an image of that person</text>
      <text x="400" y="146" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">a few seconds, no skill needed,</text>
      <text x="400" y="160" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">and no one asked them</text>

      <line x1="513" y1="113" x2="545" y2="113" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowCAI)" />

      <rect x="548" y="54" width="222" height="118" rx="10" fill="#fef2f2" stroke={COLORS.red} strokeWidth="2" />
      <text x="659" y="74" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">3 · A FAKE IMAGE, A REAL VICTIM</text>
      <rect x="624" y="82" width="70" height="56" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="659" y="116" textAnchor="middle" fill={COLORS.red} fontSize="10" fontWeight="700">NOT REAL</text>
      <text x="659" y="158" textAnchor="middle" fill={COLORS.slate700} fontSize="9.8">it never happened; they never agreed</text>

      <text x="30" y="196" fill={COLORS.slate500} fontSize="10" fontWeight="700">WHY THIS IS TREATED SERIOUSLY</text>
      {harms.map((h, i) => (
        <g key={i}>
          <rect x="30" y={204 + i * 38} width="740" height="32" rx="7" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
          <rect x="30" y={204 + i * 38} width="8" height="32" rx="4" fill={COLORS.red} />
          <text x="50" y={225 + i * 38} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{h[0]}</text>
          <text x="300" y={225 + i * 38} fill={COLORS.slate600} fontSize="10">{h[1]}</text>
        </g>
      ))}

      <text x="30" y="378" fill={COLORS.emerald} fontSize="10" fontWeight="700">IF IT HAPPENS TO YOU, OR TO SOMEONE YOU KNOW — THESE ROUTES ALL WORK, AND YOU CAN USE MORE THAN ONE</text>
      {routes.map((r, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="386" width="176" height="64" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <rect x={30 + i * 188} y="386" width="176" height="24" rx="8" fill={COLORS.emerald} />
          <text x={118 + i * 188} y="403" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">{r.t}</text>
          <text x={118 + i * 188} y="424" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">{r.a}</text>
          <text x={118 + i * 188} y="438" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">{r.b}</text>
        </g>
      ))}
      <rect x="30" y="458" width="740" height="30" rx="8" fill={COLORS.slate900} />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Keep the evidence, do not forward it, and tell someone the same day — the person targeted has done nothing wrong</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * AI PRACTITIONER — measurement and testing
 * ------------------------------------------------------------------ */

export const GoodhartsTrapDiagram = () => {
  const metric = '70,252 130,231 190,208 250,183 310,157 370,133 430,113 460,104';
  const value = '70,250 130,227 190,203 250,181 310,177 370,188 430,213 460,229';
  const gaming = [
    { h: 'Optimising for the judge', l: ['the model learns what the grader rewards —', 'warmth, confidence, agreement — rather', 'than what the task actually asked for'] },
    { h: 'Verbosity', l: ['coverage-shaped rubrics pay by the yard,', 'so answers get longer without getting', 'more useful to the person reading them'] },
    { h: 'Benchmark shape', l: ['answers get fitted to the format of the', 'test set — its phrasing, its options, its', 'length — instead of to the real task'] },
    { h: 'Stripped hedging', l: ['uncertainty scores badly, so it is removed', 'from answers that genuinely are uncertain,', 'and the score rises as the honesty falls'] }
  ];
  const fixes = [
    { h: 'Hold a set back', a: 'never optimised against, and', b: 'rotated once it starts to leak' },
    { h: 'Pair every metric', a: 'add a counter-metric that gaming', b: 'would push the wrong way' },
    { h: 'Read raw outputs', a: 'sample by hand every cycle —', b: 'scores hide what reading finds' },
    { h: 'Retire saturated ones', a: 'a number that has stopped moving', b: 'has stopped measuring anything' }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="A proxy is trustworthy only while nobody is pushing on it — the moment it becomes the target, it starts to part company with the thing it stood for">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">When the metric keeps rising and the value does not</text>

      <rect x="30" y="40" width="440" height="272" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="70" y1="60" x2="70" y2="280" stroke={COLORS.slate400} strokeWidth="1.5" />
      <line x1="70" y1="280" x2="460" y2="280" stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="46" y="70" fill={COLORS.slate500} fontSize="9" fontWeight="700">high</text>
      <text x="46" y="278" fill={COLORS.slate500} fontSize="9" fontWeight="700">low</text>
      <text x="265" y="298" textAnchor="middle" fill={COLORS.slate500} fontSize="9.5">optimisation pressure over successive releases</text>

      <polyline points={metric} fill="none" stroke={COLORS.blue} strokeWidth="3" />
      <polyline points={value} fill="none" stroke={COLORS.red} strokeWidth="3" strokeDasharray="7 4" />
      <line x1="250" y1="66" x2="250" y2="280" stroke={COLORS.amber} strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="250" cy="182" r="5" fill={COLORS.amber} />
      <text x="258" y="82" fill={COLORS.amber} fontSize="9.5" fontWeight="700">DIVERGENCE POINT</text>
      <text x="258" y="95" fill={COLORS.slate600} fontSize="9">the metric becomes the target</text>
      <text x="258" y="107" fill={COLORS.slate600} fontSize="9">and stops tracking the thing</text>
      <text x="80" y="128" fill={COLORS.slate600} fontSize="9">they agree</text>
      <text x="80" y="140" fill={COLORS.slate600} fontSize="9">while nobody</text>
      <text x="80" y="152" fill={COLORS.slate600} fontSize="9">is pushing</text>
      <rect x="80" y="238" width="150" height="34" rx="6" fill={COLORS.white} stroke={COLORS.slate200} strokeWidth="1" />
      <line x1="90" y1="249" x2="112" y2="249" stroke={COLORS.blue} strokeWidth="3" />
      <text x="118" y="253" fill={COLORS.slate700} fontSize="9">the metric you report</text>
      <line x1="90" y1="264" x2="112" y2="264" stroke={COLORS.red} strokeWidth="3" strokeDasharray="7 4" />
      <text x="118" y="268" fill={COLORS.slate700} fontSize="9">the value it stood for</text>

      <rect x="490" y="40" width="280" height="272" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="490" y="40" width="280" height="28" rx="10" fill={COLORS.red} />
      <text x="630" y="59" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">HOW THE GAP GETS OPENED</text>
      {gaming.map((g, i) => (
        <g key={i}>
          <text x="506" y={90 + i * 58} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{g.h}</text>
          {g.l.map((t, j) => (
            <text key={j} x="506" y={105 + i * 58 + j * 12} fill={COLORS.slate600} fontSize="8.6">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="336" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT KEEPS A PROXY HONEST</text>
      {fixes.map((f, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="344" width="176" height="72" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={118 + i * 188} y="366" textAnchor="middle" fill={COLORS.slate900} fontSize="10" fontWeight="700">{f.h}</text>
          <text x={118 + i * 188} y="386" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{f.a}</text>
          <text x={118 + i * 188} y="399" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">{f.b}</text>
        </g>
      ))}
      <text x="400" y="442" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The divergence is invisible from the dashboard — it only shows up when someone reads the outputs</text>
    </DiagramFrame>
  );
};

export const NonDeterminismTestingDiagram = () => {
  const dots = [
    { x: 402, y: 112, o: false }, { x: 455, y: 100, o: false }, { x: 508, y: 128, o: false },
    { x: 561, y: 106, o: false }, { x: 424, y: 146, o: false }, { x: 486, y: 155, o: false },
    { x: 540, y: 140, o: false }, { x: 592, y: 150, o: false }, { x: 445, y: 128, o: false },
    { x: 606, y: 120, o: false }, { x: 318, y: 132, o: true }, { x: 706, y: 148, o: true }
  ];
  const strategies = [
    { h: 'Run it many times', l: ['One run is an anecdote. Report a', 'pass rate across repeated runs and', 'treat a single green as noise.'] },
    { h: 'Assert invariants', l: ['Valid schema, required fields, the', 'right tool called, no leaked context', '— not the exact wording it chose.'] },
    { h: 'Use tolerance bands', l: ['Accept a range, and alert when the', 'distribution drifts rather than when', 'one run falls outside the band.'] },
    { h: 'Pin what can be pinned', l: ['Fix temperature and seed, freeze the', 'model version and prompt, and log', 'all of them beside the result.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="The spread is the system behaving normally, not a bug — so the suite has to test the distribution, not one lucky sample">
      <defs>
        <marker id="arrowNDT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Testing something that answers differently every time</text>

      <rect x="30" y="88" width="200" height="88" rx="10" fill={COLORS.slate700} />
      <text x="130" y="114" textAnchor="middle" fill={COLORS.white} fontSize="11.5" fontWeight="700">One fixed input</text>
      <text x="130" y="136" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">same prompt, same model,</text>
      <text x="130" y="150" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">same tools, nothing changed</text>
      <text x="130" y="166" textAnchor="middle" fill={COLORS.blueMid} fontSize="9" fontWeight="700">run it again and again</text>
      <line x1="232" y1="132" x2="256" y2="132" stroke={COLORS.slate500} strokeWidth="2" markerEnd="url(#arrowNDT)" />

      <rect x="260" y="40" width="510" height="184" rx="10" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="515" y="60" textAnchor="middle" fill={COLORS.slate900} fontSize="11" fontWeight="700">The spread of outputs you actually get</text>
      <rect x="380" y="76" width="250" height="104" rx="8" fill="#ecfdf5" stroke={COLORS.emerald} strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="505" y="92" textAnchor="middle" fill={COLORS.emerald} fontSize="9" fontWeight="700">TOLERANCE BAND — VARIATION YOU ACCEPT</text>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="6" fill={d.o ? COLORS.red : COLORS.blue} opacity={d.o ? 1 : 0.75} />
      ))}
      <text x="318" y="176" textAnchor="middle" fill={COLORS.red} fontSize="8.5" fontWeight="700">outlier</text>
      <text x="706" y="176" textAnchor="middle" fill={COLORS.red} fontSize="8.5" fontWeight="700">outlier</text>
      <line x1="290" y1="196" x2="740" y2="196" stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="290" y="214" fill={COLORS.slate500} fontSize="9">terser, thinner, fewer steps</text>
      <text x="740" y="214" textAnchor="end" fill={COLORS.slate500} fontSize="9">longer, more elaborate, more steps</text>

      <rect x="30" y="238" width="740" height="52" rx="10" fill="#fef2f2" stroke={COLORS.red} strokeWidth="2" />
      <text x="46" y="260" fill={COLORS.red} fontSize="10.5" fontWeight="700">THE TEST THAT WILL NOT WORK</text>
      <text x="46" y="274" fill={COLORS.slate700} fontSize="10">Asserting one exact output string from one run: it fails on harmless rewording,</text>
      <text x="46" y="288" fill={COLORS.slate700} fontSize="10">and passes confident nonsense that happens to match.</text>

      <text x="30" y="312" fill={COLORS.emerald} fontSize="10" fontWeight="700">WHAT TO DO INSTEAD</text>
      {strategies.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 188} y="320" width="176" height="102" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
          <rect x={30 + i * 188} y="320" width="176" height="26" rx="8" fill={COLORS.emerald} />
          <text x={118 + i * 188} y="338" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">{s.h}</text>
          {s.l.map((l, j) => (
            <text key={j} x={40 + i * 188} y={364 + j * 16} fill={COLORS.slate600} fontSize="8.7">{l}</text>
          ))}
        </g>
      ))}
      <text x="400" y="450" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">A flaky suite is usually a suite asserting on wording — pin what you can, and assert on what has to be true</text>
    </DiagramFrame>
  );
};
