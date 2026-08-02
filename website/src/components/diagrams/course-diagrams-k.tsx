import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * TEEN AUDIENCE — studying, judgement, calibrated doubt, and footprint
 * ------------------------------------------------------------------ */

export const StudyingWithAIDiagram = () => {
  const lanes = [
    {
      c: COLORS.emerald, x: 30, tx: 210, ix: 48, nx: 64, lx: 44,
      head: 'USES IT TO UNDERSTAND THE THING',
      sub: 'same tool, same amount of time',
      steps: [
        { t: 'Explain it again, differently', l: ['Ask why this works, not just what', 'the steps are — then ask simpler.'] },
        { t: 'Generate practice, then attempt', l: ['Five questions like the ones in the', 'exam. Answer them cold, no notes.'] },
        { t: 'Hand it your reasoning', l: ['Explain your answer back to it and', 'ask where the logic actually breaks.'] }
      ]
    },
    {
      c: COLORS.red, x: 410, tx: 590, ix: 428, nx: 444, lx: 424,
      head: 'USES IT TO PRODUCE THE ANSWER',
      sub: 'same tool, a lot less time spent',
      steps: [
        { t: 'Paste the question in', l: ['The whole task, exactly as it was', 'set, with no thinking done first.'] },
        { t: 'Take the answer as given', l: ['Skim it, tidy the wording, accept', 'the parts you cannot really check.'] },
        { t: 'Hand it in', l: ['It reads well and it is on time.', 'Nothing has been learned yet.'] }
      ]
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 482" caption="Same tool and similar marks — the gap only shows up the moment the tool is taken away">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two students, one tool, two completely different outcomes</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nothing about the tool is different — only what each of them asks it to do</text>

      {lanes.map((ln, i) => (
        <g key={i}>
          <rect x={ln.x} y="52" width="360" height="182" rx="10" fill={COLORS.white} stroke={ln.c} strokeWidth="2" />
          <rect x={ln.x} y="52" width="360" height="26" rx="10" fill={ln.c} />
          <text x={ln.tx} y="70" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{ln.head}</text>
          <text x={ln.tx} y="92" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{ln.sub}</text>
          {ln.steps.map((s, j) => (
            <g key={j}>
              <circle cx={ln.ix} cy={112 + j * 40} r="9" fill={ln.c} />
              <text x={ln.ix} y={115 + j * 40} textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{j + 1}</text>
              <text x={ln.nx} y={116 + j * 40} fill={COLORS.slate900} fontSize="9.4" fontWeight="700">{s.t}</text>
              {s.l.map((t, k) => (
                <text key={k} x={ln.lx} y={131 + j * 40 + k * 11} fill={COLORS.slate600} fontSize="8.4">{t}</text>
              ))}
            </g>
          ))}
        </g>
      ))}

      <text x="30" y="258" fill={COLORS.slate700} fontSize="10" fontWeight="700">WHAT THE TWO OF THEM ACTUALLY HAVE AFTER A TERM</text>
      <rect x="30" y="266" width="740" height="118" rx="10" fill={COLORS.white} stroke={COLORS.slate200} strokeWidth="1.5" />
      <line x1="70" y1="280" x2="70" y2="364" stroke={COLORS.slate300} strokeWidth="1.5" />
      <line x1="70" y1="364" x2="560" y2="364" stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="64" y="284" textAnchor="end" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">HIGH</text>
      <text x="64" y="366" textAnchor="end" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">LOW</text>
      <text x="70" y="378" fill={COLORS.slate500} fontSize="8">Start of term</text>
      <text x="560" y="378" textAnchor="end" fill={COLORS.slate500} fontSize="8">End of term</text>
      <polyline points="70,318 560,318" fill="none" stroke={COLORS.slate300} strokeWidth="2" strokeDasharray="5 4" />
      <polyline points="70,352 168,336 266,318 364,300 462,288 560,282" fill="none" stroke={COLORS.emerald} strokeWidth="2.5" />
      <polyline points="70,350 168,348 266,350 364,347 462,349 560,348" fill="none" stroke={COLORS.red} strokeWidth="2.5" />
      <text x="572" y="282" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">Understanding: climbing</text>
      <text x="572" y="294" fill={COLORS.slate600} fontSize="8.2">can rebuild it without help</text>
      <text x="572" y="306" fill={COLORS.slate500} fontSize="8.2" fontWeight="700">Marks on handed-in work</text>
      <text x="572" y="318" fill={COLORS.slate500} fontSize="8.2">similar for both, all term</text>
      <text x="572" y="344" fill={COLORS.red} fontSize="8.8" fontWeight="700">Understanding: flat</text>
      <text x="572" y="356" fill={COLORS.slate600} fontSize="8.2">depends on the tool being there</text>

      <rect x="30" y="396" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The exam, the interview and the real task all test the understanding, not the output</text>
      <text x="400" y="428" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Both hand in similar work — only one of them can do it again without the tool</text>
      <text x="400" y="462" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Ask which one of you could still answer it with the laptop shut</text>
    </DiagramFrame>
  );
};

export const WhenNotToUseAIDiagram = () => {
  const rows = [
    {
      c: COLORS.red, t: 'When the point is that you build the skill',
      d: 'The task exists to change you, not to produce a file — outsourcing it skips the change',
      n: 'you are the deliverable'
    },
    {
      c: COLORS.amber, t: 'When you cannot check it and it matters',
      d: 'Fluent and wrong look identical from outside, so unverifiable plus consequential is a bad pair',
      n: 'no way to catch a mistake'
    },
    {
      c: COLORS.blue, t: 'When the input is private, or not yours to share',
      d: "Someone else's messages, medical details, ID documents, or anything under a confidentiality rule",
      n: 'not your data to paste'
    },
    {
      c: COLORS.cyan, t: 'When a real person should be in it',
      d: 'An apology, a hard conversation, a message that only counts because you wrote it yourself',
      n: 'the sender is the point'
    },
    {
      c: COLORS.slate700, t: 'When it is simply not allowed',
      d: 'Exam rules, school policy, a workplace or client agreement — the rule holds whether you agree or not',
      n: 'know the rule first'
    }
  ];
  const asks = [
    { t: 'What is this task for?', l: ['If the point is the learning,', 'doing it yourself is the point.'] },
    { t: 'Could I tell if it were wrong?', l: ['If not, and it matters, get a', 'source or a person involved.'] },
    { t: 'Whose is this, really?', l: ["Someone else's information,", "or someone else's decision."] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 540" caption="Judgement, not a ban list — the same tool is right in one task and wrong in the next">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Five situations where the right move is to keep AI out of it</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">none of these is about the tool being bad — each is about what this particular task needs</text>

      {rows.map((r, i) => (
        <g key={i}>
          <rect x="30" y={56 + i * 60} width="740" height="54" rx="10" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
          <rect x="30" y={56 + i * 60} width="8" height="54" fill={r.c} />
          <circle cx="66" cy={83 + i * 60} r="13" fill={r.c} />
          <text x="66" y={87 + i * 60} textAnchor="middle" fill={COLORS.white} fontSize="11" fontWeight="700">{i + 1}</text>
          <text x="90" y={79 + i * 60} fill={COLORS.slate900} fontSize="10.5" fontWeight="700">{r.t}</text>
          <text x="90" y={95 + i * 60} fill={COLORS.slate600} fontSize="8.8">{r.d}</text>
          <text x="756" y={87 + i * 60} textAnchor="end" fill={r.c} fontSize="8.4" fontStyle="italic">{r.n}</text>
        </g>
      ))}

      <text x="30" y="372" fill={COLORS.blue} fontSize="10" fontWeight="700">THE THREE QUESTIONS THAT COVER ALL FIVE</text>
      {asks.map((a, i) => (
        <g key={i}>
          <rect x={30 + i * 250} y="380" width="240" height="62" rx="10" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
          <text x={150 + i * 250} y="402" textAnchor="middle" fill={COLORS.slate900} fontSize="9.8" fontWeight="700">{a.t}</text>
          {a.l.map((t, j) => (
            <text key={j} x={150 + i * 250} y={422 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="454" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Most everyday uses are fine — these five are the ones worth stopping for</text>
      <text x="400" y="486" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">The question is never whether AI is allowed in general, but whether it belongs in this task</text>
      <text x="400" y="520" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">If you would not be comfortable saying you used it here, that is the signal</text>
    </DiagramFrame>
  );
};

export const ScepticalNotParanoidDiagram = () => {
  const zones = [
    {
      c: COLORS.red, x: 30, cx: 148, tx: 44,
      head: 'BELIEVE EVERYTHING', sub: 'no filter at all',
      body: ['Anything confident sounds', 'true. A screenshot counts as', 'proof. You pass it on first.'],
      lab: 'HOW IT FAILS',
      out: ['Easy to steer, and you end up', 'carrying things that are false.']
    },
    {
      c: COLORS.emerald, x: 282, cx: 400, tx: 296,
      head: 'SCEPTICAL', sub: 'the workable middle',
      body: ['Check what you will act on or', 'repeat. Notice who gains if', 'you believe it. Let the rest go.'],
      lab: 'WHY IT WORKS',
      out: ['You can still act, and still', 'change your mind on evidence.']
    },
    {
      c: COLORS.red, x: 534, cx: 652, tx: 548,
      head: 'TRUST NOTHING', sub: 'the other failure',
      body: ['Everything is staged. Every', 'source is bought. No claim', 'can ever really be settled.'],
      lab: 'HOW IT FAILS',
      out: ['Nothing is ever good enough,', 'so you cannot decide anything.']
    }
  ];
  const habit = [
    { t: 'Check the things that matter', l: ['Not everything. The claims you', 'are about to act on or repeat,', 'and nothing beyond that.'] },
    { t: 'Ask who benefits', l: ['Who gains if you believe this?', 'That is not proof on its own,', 'but it is a reason to look.'] },
    { t: 'Assume most things are ordinary', l: ['Most content is exactly what it', 'looks like. Rare things stay', 'rare, even in a bad year.'] }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Both ends of the dial leave you unable to tell true from false — one by accepting, one by refusing">
      <defs>
        <linearGradient id="gradSNPdial" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={COLORS.red} />
          <stop offset="50%" stopColor={COLORS.emerald} />
          <stop offset="100%" stopColor={COLORS.red} />
        </linearGradient>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Sceptical is a setting, and both extremes of the dial are broken</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">one extreme believes whatever arrives, the other cannot be convinced by anything at all</text>

      <rect x="30" y="56" width="740" height="16" rx="8" fill="url(#gradSNPdial)" />
      <text x="40" y="68" fill={COLORS.white} fontSize="8.6" fontWeight="700">BELIEVES EVERYTHING</text>
      <text x="400" y="68" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">CALIBRATED</text>
      <text x="760" y="68" textAnchor="end" fill={COLORS.white} fontSize="8.6" fontWeight="700">TRUSTS NOTHING</text>

      {zones.map((z, i) => (
        <g key={i}>
          <rect x={z.x} y="84" width="236" height="134" rx="10" fill={COLORS.white} stroke={z.c} strokeWidth="2" />
          <rect x={z.x} y="84" width="236" height="26" rx="10" fill={z.c} />
          <text x={z.cx} y="102" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">{z.head}</text>
          <text x={z.cx} y="122" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">{z.sub}</text>
          {z.body.map((t, j) => (
            <text key={j} x={z.tx} y={138 + j * 11} fill={COLORS.slate700} fontSize="8.4">{t}</text>
          ))}
          <line x1={z.tx} y1="176" x2={z.x + 222} y2="176" stroke={COLORS.slate200} strokeWidth="1" />
          <text x={z.tx} y="188" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">{z.lab}</text>
          {z.out.map((t, j) => (
            <text key={j} x={z.tx} y={200 + j * 11} fill={z.c} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <text x="30" y="234" fill={COLORS.emerald} fontSize="10" fontWeight="700">THE MIDDLE, AS A HABIT YOU CAN ACTUALLY RUN</text>
      {habit.map((h, i) => (
        <g key={i}>
          <rect x={30 + i * 250} y="242" width="240" height="72" rx="10" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
          <text x={150 + i * 250} y="262" textAnchor="middle" fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{h.t}</text>
          {h.l.map((t, j) => (
            <text key={j} x={42 + i * 250} y={279 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="326" width="740" height="32" rx="8" fill={COLORS.red} />
      <text x="400" y="347" textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700">Refusing to believe anything is not safety — it is being wrong in a different direction</text>

      <rect x="30" y="370" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="388" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Scepticism is a dial you set per claim, not a personality you adopt once</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Verify what you will act on or pass along, and let the rest of it be ordinary</text>
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">The goal is being right more often, not being impossible to convince</text>
    </DiagramFrame>
  );
};

export const FootprintOverTimeDiagram = () => {
  const cats = [
    { c: COLORS.blue, n: 'Posts and comments', lx: 40 },
    { c: COLORS.cyan, n: 'Searches and watch history', lx: 160 },
    { c: COLORS.blueMid, n: 'AI chats', lx: 320 },
    { c: COLORS.amber, n: 'Accounts and sign-ups', lx: 392 },
    { c: COLORS.red, n: 'Photos others post of you', lx: 528 }
  ];
  const stages = [
    { x: 70, n: 'First phone', v: [10, 12, 0, 8, 4] },
    { x: 208, n: 'Early teens', v: [18, 20, 6, 12, 6] },
    { x: 346, n: 'Right now', v: [26, 28, 16, 16, 10] },
    { x: 484, n: 'Leaving school', v: [34, 36, 28, 20, 14] },
    { x: 622, n: 'First job or uni', v: [40, 44, 38, 24, 18] }
  ];
  const fate = [
    {
      c: COLORS.emerald, t: 'Some of it you can delete',
      l: ['Your own posts, your own', 'account, on a service that', 'still exists and still lets you.']
    },
    {
      c: COLORS.amber, t: 'Some of it you cannot',
      l: ['Backups, logs, screenshots,', 'and anything a friend or a', 'school already holds a copy of.']
    },
    {
      c: COLORS.red, t: 'Some is already elsewhere',
      l: ['Reposts, archives, scrapes and', 'training sets — copied long', 'before you thought to remove it.']
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 504" caption="The moment passes in a day and the record does not — so the only real lever is today's addition">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A digital footprint is not an event, it is an accumulation</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nothing here was a big decision — the pile is built out of things that felt small at the time</text>

      <text x="30" y="62" fill={COLORS.slate400} fontSize="7.6" fontWeight="700">HOW MUCH IS OUT THERE</text>
      <line x1="60" y1="224" x2="770" y2="224" stroke={COLORS.slate300} strokeWidth="1.5" />
      {stages.map((s, i) => {
        let acc = 0;
        const segs = s.v.map((h, j) => {
          const y = 224 - acc - h;
          acc += h;
          return h > 0 ? <rect key={j} x={s.x} y={y} width="108" height={h} fill={cats[j].c} /> : null;
        });
        return (
          <g key={i}>
            {segs}
            <text x={s.x + 54} y="238" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">{s.n}</text>
          </g>
        );
      })}
      {cats.map((c, i) => (
        <g key={i}>
          <rect x={c.lx} y="252" width="10" height="9" rx="2" fill={c.c} />
          <text x={c.lx + 15} y="260" fill={COLORS.slate600} fontSize="8.4">{c.n}</text>
        </g>
      ))}

      <text x="30" y="278" fill={COLORS.slate700} fontSize="10" fontWeight="700">AND WHAT HAPPENS WHEN YOU LATER TRY TO TAKE IT BACK</text>
      {fate.map((f, i) => (
        <g key={i}>
          <rect x={30 + i * 250} y="286" width="240" height="72" rx="10" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <text x={150 + i * 250} y="306" textAnchor="middle" fill={f.c} fontSize="9.6" fontWeight="700">{f.t}</text>
          {f.l.map((t, j) => (
            <text key={j} x={42 + i * 250} y={323 + j * 12} fill={COLORS.slate600} fontSize="8.4">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="370" width="740" height="44" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="388" textAnchor="middle" fill={COLORS.blue} fontSize="10.5" fontWeight="700">You cannot edit the pile — you can only choose what you add to it today</text>
      <text x="400" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="9">Each addition feels tiny and is permanent in the same moment, which is why it is easy to miss</text>

      <rect x="30" y="426" width="740" height="38" rx="10" fill={COLORS.slate900} />
      <text x="400" y="444" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">The moment is over in a day; the record of it runs on a much longer clock</text>
      <text x="400" y="458" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">Posts, searches, chats, sign-ups and other people's photos all land in the same pile</text>
      <text x="400" y="490" textAnchor="middle" fill={COLORS.slate500} fontSize="11" fontStyle="italic">Before you post, ask whether you would still want it findable in five years</text>
    </DiagramFrame>
  );
};
