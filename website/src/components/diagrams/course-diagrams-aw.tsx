import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ REAL PRODUCTS — MODULE 4: SHIPPING AND RUNNING IT ============ */
export const DeployRollbackDiagram = () => {
  const yours = ['edit it, look at it, edit it again —', 'the way you would edit a document', 'mistakes here cost nobody anything,', 'because nobody is standing on it'];
  const theirs = ['a dog owner may be halfway', 'through booking on it right now', 'you never change the thing', 'people are standing on'];
  const decisions = [
    ['choose the moment —', 'a quiet Tuesday evening, not a', 'Saturday while the diary fills'],
    ['choose what goes — one small', 'change you can describe in a', 'sentence, not a month of edits'],
    ['look afterwards — book a slot', 'yourself and watch the', 'confirmation email arrive'],
  ];
  const versions = [
    { x: 46, t: 'last week', s: 'worked', bad: false },
    { x: 190, t: 'yesterday', s: 'worked', bad: false },
    { x: 334, t: 'today', s: 'misbehaves', bad: true },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Shipping is a deliberate move at a chosen moment — and rollback is the saved-copy habit, one level up.">
      <defs>
        <marker id="arrowRPd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker>
        <marker id="arrowRPd1e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} /></marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two copies: the one customers use, and the one you change</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the day the first real booking lands, the edit-it-and-look era ends</text>
      <rect x="30" y="56" width="320" height="118" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="56" width="320" height="18" rx="9" fill={COLORS.amber} />
      <text x="190" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE COPY YOU CHANGE</text>
      {yours.map((t, i) => <text key={i} x="190" y={92 + i * 14} textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="190" y="162" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">somewhere customers aren’t — it costs almost nothing to keep</text>
      <rect x="450" y="56" width="320" height="118" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="450" y="56" width="320" height="18" rx="9" fill={COLORS.blue} />
      <text x="610" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE COPY CUSTOMERS USE</text>
      {theirs.map((t, i) => <text key={i} x="610" y={92 + i * 14} textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="610" y="162" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">edit this live and a customer meets your mistake before you do</text>
      <line x1="354" y1="112" x2="444" y2="112" stroke={COLORS.slate500} strokeWidth="1.8" markerEnd="url(#arrowRPd1)" />
      <text x="399" y="104" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">SHIPPING</text>
      <text x="399" y="124" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">a deliberate move,</text>
      <text x="399" y="133" textAnchor="middle" fill={COLORS.slate500} fontSize="6.4">at a chosen moment</text>
      <rect x="30" y="186" width="740" height="98" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="204" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">SHIPPING IS A DECISION, NOT AN ACCIDENT — THREE CHOICES, MINUTES EACH</text>
      {decisions.map((d, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="212" width="228" height="46" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {d.map((t, j) => <text key={j} x={160 + i * 240} y={226 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <text x="400" y="274" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the same care a groomer takes before handing a dog back — a deliberate check at a chosen moment, rather than a hope</text>
      <rect x="30" y="294" width="740" height="114" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="294" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="307" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">SOME SHIPPED CHANGES WILL BE WRONG — NOT MIGHT, WILL</text>
      {versions.map((v, i) => (
        <g key={i}>
          <rect x={v.x} y="322" width="128" height="30" rx="6" fill={COLORS.slate50} stroke={v.bad ? COLORS.red : COLORS.emerald} strokeWidth="1.4" />
          <text x={v.x + 64} y="334" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{v.t}</text>
          <text x={v.x + 64} y="346" textAnchor="middle" fill={v.bad ? COLORS.red : COLORS.emerald} fontSize="6.6">{v.s}</text>
          {i < 2 && <line x1={v.x + 132} y1="337" x2={v.x + 140} y2="337" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowRPd1)" />}
        </g>
      ))}
      <path d="M 398 358 C 360 376, 296 376, 262 360" fill="none" stroke={COLORS.emerald} strokeWidth="1.6" strokeDasharray="5 3" markerEnd="url(#arrowRPd1e)" />
      <text x="332" y="384" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">ROLLBACK — put back the last version that worked, quickly, while you think</text>
      <rect x="490" y="320" width="264" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
      <text x="622" y="333" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontWeight="700">a bad five minutes: the steps known in advance,</text>
      <text x="622" y="345" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">a button already pressed once, calmly, in practice</text>
      <rect x="490" y="360" width="264" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="622" y="373" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">a bad weekend: the fix improvised live,</text>
      <text x="622" y="385" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">customers meeting each attempt as it happens</text>
      <text x="240" y="398" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the live copy has real data, real phones, and people doing things you never pictured —</text>
      <text x="240" y="407" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">this is Vibecoding’s save-a-working-copy habit, now living on the platform</text>
      <rect x="30" y="416" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="436" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ROLLBACK IS A PRODUCT FEATURE, NOT AN ADMISSION OF FAILURE</text>
      <text x="400" y="453" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">whether you knew the steps before you needed them is the difference between a bad five minutes and a bad weekend</text>
    </DiagramFrame>
  );
};
export const ShippingPipelinePlainDiagram = () => {
  const fear = ['· shipping feels frightening, so it happens rarely', '· changes pile up for weeks, then travel together', '· forty changes go out in one batch — on a Friday,', '  for reasons nobody can defend', '· when it breaks, nobody can tell which change did it'];
  const often = ['· the checks run every single time, so fear fades', '· one small change a day, each thoroughly boring', '· each one small enough to describe in a sentence', '· each one can be taken back on its own', '· boring is the goal'];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="A machine stands between your edits and your customers, and it refuses anything that breaks a promise.">
      <defs>
        <marker id="arrowRPd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker>
        <marker id="arrowRPd2e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} /></marker>
        <marker id="arrowRPd2r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The entire idea in one sentence: the checks run first</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the ceremony can look elaborate, but this is all it is for</text>
      <rect x="30" y="54" width="740" height="152" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT HAPPENS EVERY TIME YOU SHIP</text>
      <rect x="46" y="88" width="150" height="42" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="121" y="105" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">your change</text>
      <text x="121" y="118" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">one small, describable edit</text>
      <line x1="200" y1="109" x2="240" y2="109" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPd2)" />
      <rect x="244" y="82" width="210" height="54" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="349" y="99" textAnchor="middle" fill={COLORS.blue} fontSize="7" fontWeight="700">THE CHECKS RUN FIRST</text>
      <text x="349" y="112" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the list of promises from Module 2,</text>
      <text x="349" y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">tried automatically, every one</text>
      <line x1="458" y1="100" x2="548" y2="100" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowRPd2e)" />
      <text x="502" y="93" textAnchor="middle" fill={COLORS.emerald} fontSize="6.4" fontWeight="700">every check passes</text>
      <rect x="552" y="82" width="202" height="38" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.6" />
      <text x="653" y="98" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">the copy customers use</text>
      <text x="653" y="111" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">the change moves on</text>
      <line x1="410" y1="140" x2="480" y2="160" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowRPd2r)" />
      <text x="428" y="160" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">one check fails</text>
      <rect x="486" y="150" width="268" height="34" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="620" y="164" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">the change never reaches customers at all</text>
      <text x="620" y="176" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">you fix it on your copy, at leisure — nobody saw it</text>
      <text x="60" y="152" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">what this replaces: your own memory, on a busy day,</text>
      <text x="60" y="163" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">at whatever hour you happened to ship</text>
      <text x="400" y="198" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the machine does not have busy days — it runs the whole list, every time, without being asked twice</text>
      <rect x="30" y="216" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="216" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="229" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FEAR → BATCHING → THE BIG BAD FRIDAY CHANGE</text>
      {fear.map((t, i) => <text key={i} x="44" y={250 + i * 13} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="44" y="326" fill={COLORS.red} fontSize="6.8" fontStyle="italic">the fear itself is what makes the breakage bigger</text>
      <rect x="410" y="216" width="360" height="122" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="216" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="229" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CHECKED EVERY TIME → SMALL AND OFTEN</text>
      {often.map((t, i) => <text key={i} x="424" y={250 + i * 13} fill={COLORS.slate600} fontSize="7">{t}</text>)}
      <text x="424" y="326" fill={COLORS.emerald} fontSize="6.8" fontStyle="italic">the groomer’s app might ship one small change a day for a week</text>
      <rect x="30" y="348" width="740" height="60" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="366" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHAT SETTING IT UP HONESTLY COSTS</text>
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">about a day — mostly connecting things that already want to connect, because hosting platforms are built around working this way</text>
      <text x="400" y="396" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">describe the goal in plain words — when I ship, run my checks first, and stop the change if one fails — and let the AI translate</text>
      <rect x="30" y="416" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="436" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">TWO DAYS ON THE LEDGER — THE CHEAPEST LINE FOR WHAT IT BUYS</text>
      <text x="400" y="453" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a day of setup, a day learning the rhythm — then every future change, checked before it can reach a customer, for years</text>
    </DiagramFrame>
  );
};
export const KnowingItBrokeDiagram = () => {
  const watchers = [
    { h: 'A HEARTBEAT', c: COLORS.emerald, l: ['something checks the page every', 'few minutes, and messages you', 'the moment it isn’t there', 'a standard, cheap service — silent', 'until the day it earns its keep'], tag: 'catches dead' },
    { h: 'AN ERROR LOG', c: COLORS.amber, l: ['a running list of things the app', 'found wrong, glanced at over', 'coffee once a day', 'small problems surface before', 'they have time to grow'], tag: 'catches sick' },
    { h: 'A WEEKLY NUMBER', c: COLORS.blue, l: ['for the groomer: bookings made', 'this week — a number you would', 'notice going to zero', 'failures that look healthy from', 'every other angle show up here'], tag: 'catches looks-healthy-but-isn’t' },
  ];
  const order = [
    { n: '1', h: 'LOOK', l: ['open the page yourself and', 'see what a customer sees'] },
    { n: '2', h: 'PUT IT BACK', l: ['roll back to the last version', 'that worked — steps practised'] },
    { n: '3', h: 'DIAGNOSE', l: ['only now, with customers back', 'on a page that works'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Silence cannot tell a healthy week from a locked door — you need something other than silence.">
      <defs>
        <marker id="arrowRPd3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} /></marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A broken booking page is quiet: no bookings, and no complaints</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">customers do not report problems — they leave, and what you notice is a quiet week, days later</text>
      <rect x="30" y="54" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">TWO SILENCES — IDENTICAL FROM THE INSIDE</text>
      <rect x="50" y="82" width="310" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
      <text x="205" y="100" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontWeight="700">a quiet inbox — everything is fine</text>
      <text x="205" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">bookings arriving, nothing to say</text>
      <rect x="440" y="82" width="310" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="595" y="100" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">a quiet inbox — the door is locked</text>
      <text x="595" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">customers have stopped knocking</text>
      <text x="400" y="102" textAnchor="middle" fill={COLORS.slate700} fontSize="8" fontWeight="700">=</text>
      <text x="400" y="146" textAnchor="middle" fill={COLORS.slate600} fontSize="7">a dog owner who meets a blank page at nine in the evening does not email you — they ring in the morning, or try the place across town</text>
      <text x="400" y="160" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontStyle="italic">“nobody has complained” is the most dangerous sentence in running a product</text>
      <rect x="30" y="182" width="740" height="128" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="200" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">THREE MODEST WATCHERS — NOT A WALL OF SCREENS, ONE DAY ON THE LEDGER</text>
      {watchers.map((w, i) => (
        <g key={i}>
          <rect x={44 + i * 240} y="208" width="228" height="76" rx="6" fill={COLORS.slate50} stroke={w.c} strokeWidth="1.4" />
          <text x={158 + i * 240} y="221" textAnchor="middle" fill={w.c} fontSize="7" fontWeight="700">{w.h}</text>
          {w.l.map((t, j) => <text key={j} x={158 + i * 240} y={233 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
          <text x={158 + i * 240} y="298" textAnchor="middle" fill={w.c} fontSize="6.6" fontWeight="700">{w.tag}</text>
        </g>
      ))}
      <rect x="30" y="320" width="740" height="108" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="338" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">WHEN THE ALARM GOES — THE ORDER MATTERS MORE THAN THE SKILL</text>
      {order.map((o, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="348" width="220" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x={70 + i * 246} y="368" fill={COLORS.emerald} fontSize="11" fontWeight="700">{o.n}</text>
          <text x={166 + i * 246} y="363" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{o.h}</text>
          {o.l.map((t, j) => <text key={j} x={166 + i * 246} y={374 + j * 10} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
          {i < 2 && <line x1={268 + i * 246} y1="370" x2={288 + i * 246} y2="370" stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowRPd3)" />}
        </g>
      ))}
      <text x="400" y="408" textAnchor="middle" fill={COLORS.red} fontSize="7.2">running the broken thing while you investigate is optional, and it is the option to decline — customers do not benefit from your curiosity</text>
      <text x="400" y="420" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the heartbeat message arrives while you are making dinner — this order is what turns that moment into a routine</text>
      <rect x="30" y="436" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WATCHING BUYS TIMING, NOT PERFECTION</text>
      <text x="400" y="473" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">knowing within minutes instead of next morning is the difference between a hiccup nobody noticed and a story your customers tell</text>
    </DiagramFrame>
  );
};
export const CostAtRealUsageDiagram = () => {
  const steps = [
    { x: 60, h: 8, p: '£0–15', u: 'prototype', n: 'free tiers and pocket change' },
    { x: 180, h: 38, p: '£40–60', u: '~200 customers', n: 'a real product' },
    { x: 300, h: 120, p: '£120–200', u: '~1,000 users', n: 'illustrative' },
  ];
  const buys = [
    { t: 'the computers serving your pages', w: 40, c: COLORS.slate400 },
    { t: 'backups you have actually restored', w: 150, c: COLORS.blue },
    { t: 'email that reaches inboxes, not spam', w: 140, c: COLORS.blue },
    { t: 'monitoring that messages you when it dies', w: 120, c: COLORS.blue },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="Honest illustrative figures for the worked example, not promises about your product.">
      <defs>
        <marker id="arrowRPd4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The steep jump is getting real, not getting big</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the cost of getting real is not the cost of getting big — after the jump, cost grows more slowly than usage</text>
      <rect x="30" y="54" width="410" height="182" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="235" y="72" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE BILL, IN THREE HONEST LINES — PER MONTH</text>
      <line x1="56" y1="204" x2="424" y2="204" stroke={COLORS.slate400} strokeWidth="1.2" />
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={204 - s.h} width="100" height={s.h} rx="3" fill={i === 0 ? COLORS.slate300 : i === 1 ? COLORS.blue : COLORS.blueMid} />
          <text x={s.x + 50} y={196 - s.h} textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">{s.p}</text>
          <text x={s.x + 50} y="216" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{s.u}</text>
          <text x={s.x + 50} y="227" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">{s.n}</text>
        </g>
      ))}
      <path d="M 165 186 C 175 172, 185 166, 195 162" fill="none" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowRPd4)" />
      <text x="140" y="130" fill={COLORS.red} fontSize="6.6" fontWeight="700">the proportionally steep jump:</text>
      <text x="140" y="140" fill={COLORS.red} fontSize="6.6" fontWeight="700">from prototype to product</text>
      <text x="140" y="152" fill={COLORS.slate500} fontSize="6.2" fontStyle="italic">this is where you start paying for the</text>
      <text x="140" y="161" fill={COLORS.slate500} fontSize="6.2" fontStyle="italic">properties Module 3 taught you to want</text>
      <rect x="460" y="54" width="310" height="182" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="460" y="54" width="310" height="18" rx="9" fill={COLORS.blue} />
      <text x="615" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT THE MONEY ACTUALLY BUYS</text>
      <text x="615" y="86" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the surprise in the bill: mostly, not computers</text>
      {buys.map((b, i) => (
        <g key={i}>
          <text x="476" y={104 + i * 30} fill={i === 0 ? COLORS.slate500 : COLORS.slate700} fontSize="6.6" fontWeight={i === 0 ? '400' : '700'}>{b.t}</text>
          <rect x="476" y={108 + i * 30} width={b.w} height="9" rx="3" fill={b.c} />
        </g>
      ))}
      <text x="522" y="112" fill={COLORS.slate500} fontSize="6.2" fontStyle="italic">— the cheap part</text>
      <text x="615" y="230" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontStyle="italic">you are paying for the properties, not the pixels</text>
      <rect x="30" y="248" width="740" height="90" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="248" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="261" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE FREE-TIER MOMENT THAT CATCHES EVERYONE</text>
      <rect x="46" y="276" width="200" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="146" y="288" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the free version — built for prototypes</text>
      <text x="146" y="298" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">generous while nothing depends on it</text>
      <line x1="250" y1="289" x2="290" y2="289" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowRPd4)" />
      <rect x="294" y="276" width="210" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
      <text x="399" y="288" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the day you start depending on it</text>
      <text x="399" y="298" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">real bookings, real reliance</text>
      <line x1="508" y1="289" x2="548" y2="289" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowRPd4)" />
      <rect x="552" y="276" width="202" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="653" y="288" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">the free tier ends — exactly then</text>
      <text x="653" y="298" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">not a scam, and not bad luck</text>
      <text x="400" y="322" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">it is the pricing telling you the truth a little before you were ready to hear it: your product got real, and real products pay for what they rely on</text>
      <rect x="30" y="348" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="348" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="361" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CHEAP TO BUILD, EXPENSIVE TO RUN — THE SECOND NUMBER IS THE ONE THAT MATTERS</text>
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the clearest example: a feature that calls an AI service each time it is used — a friendly reminder written for every booking</text>
      <text x="400" y="396" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">pennies per use × every booking, forever = a line on the bill that grows exactly as fast as your success</text>
      <text x="400" y="412" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">build such things when they earn their keep, not because they were easy to add — this is Module 1’s not-list wearing its other hat</text>
      <text x="400" y="426" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">before you add anything, ask what it would cost at a thousand users — then decide</text>
      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FOR A BUSINESS TAKING ITS BOOKINGS ALL WEEK, £40–60 A MONTH IS NOT A TECHNOLOGY BILL</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">it is a phone bill — and every feature you decline protects it</text>
    </DiagramFrame>
  );
};
export const ElevenPmEmailDiagram = () => {
  const emails = [
    ['“I can’t get in”', 'a locked-out customer'],
    ['“the invoice looks wrong”', 'a hand-sent charge, mistyped'],
    ['“my booking has vanished”', 'as far as they can tell'],
  ];
  const decisions = [
    { h: 'ONE CHANNEL YOU READ', c: COLORS.blue, l: ['a single address on the page,', 'checked at times you chose —', 'not messages scattered across', 'texts, social accounts and a', 'form nobody watches'] },
    { h: 'AN HONEST REPLY-TIME', c: COLORS.emerald, l: ['“within a day”, kept, beats', '“within an hour”, claimed', 'and missed — the broken', 'promise costs more trust than', 'the slower reply ever would'] },
    { h: 'THE FIVE RECURRING PROBLEMS', c: COLORS.amber, l: ['written down with the fix,', 'while it is fresh — questions', 'repeat far more than they', 'surprise; an evening the first', 'time, five minutes the second'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="Support is a job the product creates on day one — survivable by design, and secretly valuable.">
      <defs>
        <marker id="arrowRPd5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker>
        <marker id="arrowRPd5b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} /></marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The email at eleven at night is not a malfunction</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the day the page becomes how the business takes bookings, it creates a job — and the job is yours</text>
      <rect x="30" y="54" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE JOB STARTS ON DAY ONE — AT HOURS YOU DID NOT CHOOSE</text>
      {emails.map((e, i) => (
        <g key={i}>
          <rect x="46" y={80 + i * 26} width="220" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          <text x="120" y={94 + i * 26} textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{e[0]}</text>
          <text x="216" y={94 + i * 26} textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">{e[1]}</text>
          <line x1="270" y1={91 + i * 26} x2="330" y2="118" stroke={COLORS.slate400} strokeWidth="1.1" markerEnd="url(#arrowRPd5)" />
        </g>
      ))}
      <rect x="336" y="100" width="150" height="36" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.8" />
      <text x="411" y="115" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">your inbox, eleven at night</text>
      <text x="411" y="128" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">whatever address they could find</text>
      <text x="630" y="96" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">honestly costed:</text>
      <text x="630" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">two to four hours a week, indefinitely</text>
      <text x="630" y="122" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">not a launch-week surge that fades —</text>
      <text x="630" y="134" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">a permanent feature of the product,</text>
      <text x="630" y="146" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">as real as any button on the screen</text>
      <text x="200" y="158" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">real users means each of these, eventually — and none of them is your product going wrong</text>
      <rect x="30" y="176" width="740" height="122" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="194" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">THREE SMALL DECISIONS THAT TURN DREAD INTO ROUTINE</text>
      {decisions.map((d, i) => (
        <g key={i}>
          <rect x={44 + i * 240} y="202" width="228" height="72" rx="6" fill={COLORS.slate50} stroke={d.c} strokeWidth="1.4" />
          <text x={158 + i * 240} y="215" textAnchor="middle" fill={d.c} fontSize="6.8" fontWeight="700">{d.h}</text>
          {d.l.map((t, j) => <text key={j} x={158 + i * 240} y={227 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="290" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the fixes list quietly becomes the start of the handover file Module 5 will ask you for</text>
      <rect x="30" y="308" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="308" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="321" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE CONSOLATION HIDDEN IN THE INBOX — EXPLORATION THAT WRITES TO YOU UNPROMPTED</text>
      <rect x="46" y="336" width="220" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="156" y="350" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">every locked-out customer, every confused</text>
      <text x="156" y="362" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">question, every request for the thing</text>
      <text x="156" y="372" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">you deliberately left out</text>
      <line x1="270" y1="356" x2="306" y2="356" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowRPd5b)" />
      <rect x="310" y="336" width="220" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="420" y="352" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">your not-list review, arriving for free</text>
      <text x="420" y="365" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">which refusals to keep, and which have</text>
      <text x="420" y="374" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">finally earned their date</text>
      <line x1="534" y1="356" x2="570" y2="356" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowRPd5b)" />
      <rect x="574" y="336" width="180" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
      <text x="664" y="352" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">what the product does next</text>
      <text x="664" y="365" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">Module 1 sent you out to ask people —</text>
      <text x="664" y="374" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">from launch day, they write to you</text>
      <text x="400" y="396" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and the ledger closes: shipping 2 + watching 1 + launch fixes 2 = 5 days this module — 23 days in total, of which the demo was 2</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">under a tenth — and you have now seen every line of that number, which was the promise</text>
      <rect x="30" y="426" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="446" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SUPPORT IS WHAT HAVING USERS IS — AND THE BEST EXPLORATION YOU WILL EVER GET</text>
      <text x="400" y="463" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">one channel, an honest promise, five fixes written down — survivable by design, valuable by accident</text>
    </DiagramFrame>
  );
};
