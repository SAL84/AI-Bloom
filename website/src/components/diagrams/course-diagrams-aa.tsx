import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ VIBECODING — MODULES 4-5: AI FEATURES & BEFORE ANYONE ELSE USES IT ============ */

export const AIFeatureWrongDiagram = () => {
  const pills = [
    { x: 46, w: 168, t: 'collect 10–20 real examples' },
    { x: 232, w: 168, t: 'write the good answer first' },
    { x: 418, w: 160, t: 'compare by eye, one at a time' },
    { x: 596, w: 158, t: 'redo after each change' },
  ];
  const design = [
    { x: 46, l: ['a draft a person approves —', 'never an automatic action'] },
    { x: 288, l: ['show where the answer came', 'from, so it can be checked'] },
    { x: 530, l: ['say on screen: AI wrote this,', 'and it may be wrong'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 466" caption="An AI feature fails looking fine — check it against real examples you wrote answers for, and keep its output as a draft a person approves.">
      <defs>
        <marker id="arrowAFWa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A wrong answer from your AI feature looks exactly like a right one</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a broken button looks broken — a wrong summary just looks like a summary</text>

      <rect x="30" y="58" width="360" height="124" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="210" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE REST OF YOUR APP — BREAKS LOUDLY</text>
      <rect x="50" y="94" width="110" height="28" rx="7" fill={COLORS.slate100} stroke={COLORS.slate300} strokeWidth="1.3" />
      <text x="105" y="112" textAnchor="middle" fill={COLORS.slate600} fontSize="8.5">Book now</text>
      <line x1="172" y1="98" x2="188" y2="114" stroke={COLORS.red} strokeWidth="2.2" />
      <line x1="172" y1="114" x2="188" y2="98" stroke={COLORS.red} strokeWidth="2.2" />
      <text x="204" y="100" fill={COLORS.slate600} fontSize="8">a broken button does</text>
      <text x="204" y="113" fill={COLORS.slate600} fontSize="8">nothing — you notice it</text>
      <text x="204" y="126" fill={COLORS.slate600} fontSize="8">the moment you try it</text>
      <text x="50" y="162" fill={COLORS.blue} fontSize="8" fontWeight="700">failure announces itself</text>

      <rect x="410" y="58" width="360" height="124" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE AI FEATURE — WRONG QUIETLY</text>
      <rect x="430" y="94" width="150" height="44" rx="7" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="1.3" />
      <rect x="438" y="101" width="134" height="3.5" fill={COLORS.slate300} />
      <rect x="438" y="110" width="120" height="3.5" fill={COLORS.slate300} />
      <rect x="438" y="119" width="130" height="3.5" fill={COLORS.slate300} />
      <rect x="438" y="128" width="90" height="3.5" fill={COLORS.slate300} />
      <text x="505" y="152" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">well written · specific · plausible</text>
      <text x="594" y="100" fill={COLORS.slate600} fontSize="8">nothing on the screen</text>
      <text x="594" y="113" fill={COLORS.slate600} fontSize="8">marks it as wrong — and</text>
      <text x="594" y="126" fill={COLORS.slate600} fontSize="8">your user asked because</text>
      <text x="594" y="139" fill={COLORS.slate600} fontSize="8">they cannot check it</text>
      <text x="430" y="170" fill={COLORS.red} fontSize="8" fontWeight="700">riskiest exactly where answers cannot be checked</text>

      <rect x="30" y="194" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="194" width="740" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="208" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">CHECK IT THE BORING WAY — REAL EXAMPLES, ANSWERS WRITTEN FIRST</text>
      {pills.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="226" width={p.w} height="30" rx="15" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="245" textAnchor="middle" fill={COLORS.slate700} fontSize="7.5">{p.t}</text>
          {i < 3 && <line x1={p.x + p.w + 4} y1="241" x2={pills[i + 1].x - 4} y2="241" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowAFWa)" />}
        </g>
      ))}
      <text x="400" y="284" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">an afternoon of dull work — and honestly how the professional version starts too</text>

      <rect x="30" y="310" width="740" height="88" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="310" width="740" height="20" rx="9" fill={COLORS.cyan} />
      <text x="400" y="324" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">DESIGN FOR BEING WRONG — WHERE THE OUTPUT GOES MATTERS MOST</text>
      {design.map((d, i) => (
        <g key={i}>
          <rect x={d.x} y="342" width="224" height="44" rx="7" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.4" />
          <text x={d.x + 112} y="359" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{d.l[0]}</text>
          <text x={d.x + 112} y="372" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{d.l[1]}</text>
        </g>
      ))}

      <rect x="30" y="410" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="430" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">TRUST IT LESS THAN THE REST OF YOUR APP — IT FAILS LOOKING FINE</text>
      <text x="400" y="447" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">keep the output as a draft, show the source, and re-run your examples after every instruction change</text>
    </DiagramFrame>
  );
};

export const OtherPeoplesDataDiagram = () => {
  const fields = [
    { t: 'name — you reply to them', keep: true },
    { t: 'email — you reply to them', keep: true },
    { t: 'date of birth — "for demographics"', keep: false },
    { t: 'phone — you will never ring it', keep: false },
    { t: 'postal address — service is by email', keep: false },
  ];
  const nevers = [
    'card numbers — a payment company holds them, not you',
    'passwords — use the platform\'s sign-in, never your own',
    'health details, ID documents',
    'anything about children',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="The first time a real person types their details in, you are holding something for them — and the fields you never collect are the only ones that can never leak.">
      <defs>
        <marker id="arrowOPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The moment someone else's name lands in your app, the job changes</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">they trusted you because the form looked normal — they cannot see how carefully you treat it</text>

      <rect x="30" y="58" width="740" height="110" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="50" y="74" width="300" height="74" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="200" y="92" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">BEFORE — A PERSONAL PROJECT</text>
      <text x="200" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="8">your details, your risk —</text>
      <text x="200" y="124" textAnchor="middle" fill={COLORS.slate600} fontSize="8">mistakes cost only you</text>
      <rect x="450" y="74" width="300" height="74" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="600" y="92" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">AFTER — HOLDING THEIR DETAILS</text>
      <text x="600" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="8">their trust, your responsibility —</text>
      <text x="600" y="124" textAnchor="middle" fill={COLORS.slate600} fontSize="8">and they cannot check on you</text>
      <line x1="400" y1="66" x2="400" y2="142" stroke={COLORS.red} strokeWidth="1.4" strokeDasharray="5 3" />
      <line x1="356" y1="111" x2="444" y2="111" stroke={COLORS.red} strokeWidth="1.6" markerEnd="url(#arrowOPDa)" />
      <text x="400" y="160" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6" fontStyle="italic">crossed the first time a stranger types their name and presses send</text>

      <rect x="30" y="182" width="360" height="168" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="182" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="196" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE BEST PROTECTION: COLLECT LESS</text>
      <text x="210" y="216" textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">ask of each field: will I truly use this, soon?</text>
      {fields.map((f, i) => (
        <g key={i}>
          <text x="48" y={234 + i * 22} fill={COLORS.slate600} fontSize="7.8">{f.t}</text>
          {!f.keep && <line x1="46" y1={231 + i * 22} x2={50 + f.t.length * 4.7} y2={231 + i * 22} stroke={COLORS.red} strokeWidth="1.1" />}
          <text x="372" y={234 + i * 22} textAnchor="end" fill={f.keep ? COLORS.emerald : COLORS.red} fontSize="6.8" fontWeight="700">{f.keep ? 'KEEP' : 'CUT'}</text>
        </g>
      ))}
      <text x="210" y="340" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">every field you cut is a risk that is simply gone</text>

      <rect x="410" y="182" width="360" height="168" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="182" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="196" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">NOT FOR A FIRST PROJECT — DO NOT STORE THESE YET</text>
      {nevers.map((t, i) => (
        <g key={i}>
          <rect x="424" y={212 + i * 30} width="332" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x="590" y={227 + i * 30} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <text x="590" y="342" textAnchor="middle" fill={COLORS.red} fontSize="7.8" fontWeight="700">these punish small mistakes, silently</text>

      <rect x="30" y="362" width="740" height="72" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="382" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">WHY "I'LL FIX IT LATER" IS HOW LEAKS HAPPEN</text>
      <text x="400" y="399" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">unsafe looks exactly like safe from the outside, so nothing ever reminds you — the shortcut quietly becomes permanent</text>
      <text x="400" y="415" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">write down every corner you cut, and close that list before you share the link</text>

      <rect x="30" y="446" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="466" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">COLLECT LESS, AND TIGHTEN BEFORE YOU SHARE — NOT AFTER</text>
      <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">data you never collected is the only data that can never leak</text>
    </DiagramFrame>
  );
};

export const SecretsAndKeysDiagram = () => {
  const cols = [
    {
      x: 30, c: COLORS.red, h: 'NEVER IN YOUR CODE',
      l: ['code gets copied, pasted into', 'chats, zipped up and shared —', 'the key travels with it,', 'invisibly'],
      i: '"just for now" becomes forever',
    },
    {
      x: 282, c: COLORS.red, h: 'NEVER IN A PUBLIC FOLDER',
      l: ['public project folders are', 'scanned by robots around the', 'clock, hunting for exposed', 'keys'],
      i: 'exposure is minutes, not days',
    },
    {
      x: 534, c: COLORS.emerald, h: 'THE RIGHT HOME',
      l: ['your platform\'s settings page', '(often called "secrets"):', 'paste it in once and the', 'running app can read it'],
      i: 'it never sits in a file',
    },
  ];
  const steps = [
    { x: 46, w: 150, t: 'revoke the old key' },
    { x: 214, w: 140, t: 'create a new one' },
    { x: 372, w: 190, t: 'put it in the settings page' },
    { x: 580, w: 174, t: 'check usage and billing' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 462" caption="A key is a password used by software — keep it in your platform's settings, never in code, and revoke it fast if it ever gets out.">
      <defs>
        <marker id="arrowSAKa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A key is a password for your app — lying around in plain text</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">any outside service your app uses — AI, email, payments — gives you one, and it proves the app is you</text>

      <rect x="30" y="58" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="20" rx="9" fill={COLORS.blue} />
      <text x="400" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">WHAT A KEY ACTUALLY IS</text>
      <rect x="50" y="90" width="300" height="26" rx="6" fill={COLORS.slate900} />
      <text x="200" y="107" textAnchor="middle" fill={COLORS.white} fontSize="9">sk-live-9f2a4bd117c8…c41</text>
      <text x="200" y="132" textAnchor="middle" fill={COLORS.slate500} fontSize="7.4" fontStyle="italic">anything called key, token or secret works like this</text>
      <text x="380" y="98" fill={COLORS.slate600} fontSize="8.2">whoever holds this string can do everything you can,</text>
      <text x="380" y="111" fill={COLORS.slate600} fontSize="8.2">billed to you — no login screen, no second check,</text>
      <text x="380" y="124" fill={COLORS.slate600} fontSize="8.2">no confirmation email — the service assumes it is you</text>

      {cols.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="156" width="236" height="132" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="156" width="236" height="20" rx="9" fill={c.c} />
          <text x={c.x + 118} y="170" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x={c.x + 14} y={192 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
          <text x={c.x + 14} y="266" fill={c.c} fontSize="7.6" fontStyle="italic">{c.i}</text>
        </g>
      ))}

      <rect x="30" y="302" width="740" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="302" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="316" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">IF ONE GETS OUT — ASSUME IT WAS SEEN, EVEN IF NOTHING LOOKS WRONG</text>
      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="334" width={s.w} height="30" rx="15" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={s.x + s.w / 2} y="353" textAnchor="middle" fill={COLORS.slate700} fontSize="7.5">{s.t}</text>
          {i < 3 && <line x1={s.x + s.w + 4} y1="349" x2={steps[i + 1].x - 4} y2="349" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowSAKa)" />}
        </g>
      ))}
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">deleting the file does not help — copies and history remain; only replacing the key ends it</text>

      <rect x="30" y="406" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="426" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">REVOKE FAST AND FEEL NO SHAME — EVERY ENGINEER HAS DONE THIS</text>
      <text x="400" y="443" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the only bad version of this mistake is the slow one</text>
    </DiagramFrame>
  );
};

export const RunawayCostsDiagram = () => {
  const caps = [
    'a hard cap you could afford to lose entirely',
    'an alert set well below the cap',
    'alerts sent somewhere you read at weekends',
    'no cap on offer? lowest alert, checked often',
  ];
  const blows = [
    'something calls itself in a loop — one action becomes thousands',
    'failed calls retried forever against a broken service',
    'a page re-requesting on a timer, left open all week',
    'no per-person limit on the AI, found by a bored stranger',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Usage-based bills grow at machine speed while you sleep — set hard caps and alerts on every service before you share the link.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Pay-per-use has no ceiling unless you build one</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">AI calls, emails, storage — cheap while you build, unlimited once your link is public and you are asleep</text>

      <rect x="30" y="58" width="380" height="216" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="220" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="8.8" fontWeight="700">THE BILL, OVERNIGHT</text>
      <rect x="180" y="88" width="160" height="152" fill={COLORS.slate200} />
      <text x="260" y="100" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8">while you sleep</text>
      <line x1="60" y1="88" x2="60" y2="240" stroke={COLORS.slate400} strokeWidth="1.2" />
      <line x1="60" y1="240" x2="390" y2="240" stroke={COLORS.slate400} strokeWidth="1.2" />
      <line x1="60" y1="180" x2="390" y2="180" stroke={COLORS.emerald} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="66" y="174" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">your hard cap</text>
      <path d="M 60 234 C 120 230, 170 224, 210 208 C 250 190, 300 130, 385 94" fill="none" stroke={COLORS.red} strokeWidth="2" />
      <path d="M 60 234 C 120 230, 170 224, 210 208 C 235 196, 255 184, 275 180 L 385 180" fill="none" stroke={COLORS.emerald} strokeWidth="2" />
      <text x="352" y="100" fill={COLORS.red} fontSize="6.8" fontWeight="700">no cap</text>
      <text x="352" y="194" fill={COLORS.emerald} fontSize="6.8" fontWeight="700">capped</text>
      <text x="64" y="252" fill={COLORS.slate500} fontSize="6.8">evening</text>
      <text x="386" y="252" textAnchor="end" fill={COLORS.slate500} fontSize="6.8">morning</text>
      <text x="220" y="266" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">the first sign is the invoice — nothing in the app looks different</text>

      <rect x="430" y="58" width="340" height="216" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="430" y="58" width="340" height="20" rx="9" fill={COLORS.emerald} />
      <text x="600" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SET THE CAPS FIRST — BEFORE YOU SHARE THE LINK</text>
      {caps.map((t, i) => (
        <g key={i}>
          <rect x="446" y={88 + i * 34} width="308" height="26" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="600" y={104 + i * 34} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <text x="600" y="248" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">ten minutes of caps is the whole protection</text>

      <rect x="30" y="288" width="740" height="110" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="288" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="302" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">HOW BILLS ACTUALLY EXPLODE — FINE IN TESTING, NOT FINE UNATTENDED</text>
      {blows.map((t, i) => (
        <g key={i}>
          <rect x={46 + (i % 2) * 362} y={318 + Math.floor(i / 2) * 36} width="348" height="28" rx="7" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
          <text x={220 + (i % 2) * 362} y={336 + Math.floor(i / 2) * 36} textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
        </g>
      ))}

      <rect x="30" y="412" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="432" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CAPS AND ALERTS ON EVERY SERVICE — BEFORE THE LINK GOES OUT</text>
      <text x="400" y="449" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">by the time a cap becomes relevant, it is already too late to set one</text>
    </DiagramFrame>
  );
};

export const WorksOnMyMachineDiagram = () => {
  const mine = ['files sitting in your folders', 'settings you set and forgot', 'a browser already signed in', 'fast, stable home wifi', 'leftover data from testing'];
  const theirs = ['none of your files', 'none of your settings', 'signed out', 'patchy mobile signal', 'an empty, first-time app'];
  const row1 = [
    { x: 46, w: 230, t: 'open the live link, not your local copy' },
    { x: 292, w: 230, t: 'a private window, signed out' },
    { x: 538, w: 216, t: 'a phone on mobile data' },
  ];
  const row2 = [
    { x: 150, w: 240, t: 'make a brand-new account' },
    { x: 410, w: 260, t: 'walk your whole checklist that way' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 486" caption="Working on your machine only proves your machine helps — test the live link signed out, on a phone, as a stranger, before anyone else does.">
      <defs>
        <marker id="arrowWMMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">"It works on my machine" — because your machine is quietly helping</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">files, settings, sign-ins and leftover test data prop your app up — and none of it travels with the code</text>

      <rect x="30" y="58" width="330" height="170" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="330" height="20" rx="9" fill={COLORS.blue} />
      <text x="195" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">YOUR MACHINE — FULL OF QUIET HELP</text>
      {mine.map((t, i) => (
        <g key={i}>
          <rect x="46" y={88 + i * 27} width="298" height="22" rx="11" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
          <text x="195" y={102 + i * 27} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}

      <line x1="364" y1="140" x2="436" y2="140" stroke={COLORS.slate400} strokeWidth="1.8" markerEnd="url(#arrowWMMa)" />
      <text x="400" y="120" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">only the code</text>
      <text x="400" y="131" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">travels</text>

      <rect x="440" y="58" width="330" height="170" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="440" y="58" width="330" height="20" rx="9" fill={COLORS.red} />
      <text x="605" y="72" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">A STRANGER'S PHONE — NONE OF IT</text>
      {theirs.map((t, i) => (
        <g key={i}>
          <rect x="456" y={88 + i * 27} width="298" height="22" rx="11" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" strokeDasharray="4 3" />
          <text x="605" y={102 + i * 27} textAnchor="middle" fill={COLORS.slate500} fontSize="7.6">{t}</text>
        </g>
      ))}

      <rect x="30" y="242" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="242" width="740" height="20" rx="9" fill={COLORS.emerald} />
      <text x="400" y="256" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">TEST IT LIKE A STRANGER — TEN MINUTES, BEFORE YOU SHARE</text>
      {row1.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="272" width={p.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="289" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
        </g>
      ))}
      {row2.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="304" width={p.w} height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="321" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.t}</text>
        </g>
      ))}

      <rect x="30" y="352" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="372" textAnchor="middle" fill={COLORS.cyan} fontSize="8.8" fontWeight="700">THE FIRST FIVE MINUTES AFTER SHARING — WATCH</text>
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">keep the link and the service dashboards open as the first people arrive — noticing in minutes keeps problems small</text>
      <text x="400" y="403" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">start with a few forgiving people, and know in advance how you would switch it off</text>

      <rect x="30" y="428" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="448" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WORKING FOR YOU IS EVIDENCE ABOUT YOUR MACHINE — NOT YOUR APP</text>
      <text x="400" y="465" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a fresh visitor gets none of your scaffolding — be that person before they are</text>
    </DiagramFrame>
  );
};

export const UnreadableCodeDiagram = () => {
  const supervise = ['a few users, not the public', 'low-value data, nothing sensitive', 'only actions you can undo', 'nothing automatic that touches a person'];
  const stops = ['money moves through it', 'it stores anything you would hate to see published', 'people outside now depend on it', 'it acts on its own, or a law has been named at you'];
  const drift = [
    { x: 46, w: 180, t: 'a prototype works' },
    { x: 244, w: 230, t: 'more people use it each month' },
    { x: 512, w: 242, t: 'the business now depends on it' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="You cannot review code you cannot read, so keep its blast radius small — and when money, outsiders or automatic actions arrive, stop and get help.">
      <defs>
        <marker id="arrowUCDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">You have built something you cannot fully check — build accordingly</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">that is a permanent condition of building this way, not a phase you grow out of</text>

      <rect x="30" y="58" width="740" height="66" rx="9" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <rect x="46" y="70" width="180" height="42" rx="7" fill={COLORS.slate900} />
      <rect x="56" y="78" width="120" height="3.5" fill={COLORS.slate600} />
      <rect x="56" y="86" width="150" height="3.5" fill={COLORS.slate600} />
      <rect x="56" y="94" width="100" height="3.5" fill={COLORS.slate600} />
      <rect x="56" y="102" width="134" height="3.5" fill={COLORS.slate600} />
      <text x="244" y="84" fill={COLORS.slate600} fontSize="8.2">it works — and it may hold mistakes, odd choices and gaps you cannot see</text>
      <text x="244" y="99" fill={COLORS.slate600} fontSize="8.2">reviewing the code is not one of your options — your safety must come from elsewhere</text>

      <rect x="30" y="138" width="360" height="164" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="138" width="360" height="20" rx="9" fill={COLORS.emerald} />
      <text x="210" y="152" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">MATCH IT TO WHAT YOU CAN SUPERVISE</text>
      {supervise.map((t, i) => (
        <g key={i}>
          <rect x="46" y={168 + i * 30} width="328" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
          <text x="210" y={183 + i * 30} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <text x="210" y="296" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontWeight="700">a small blast radius is the whole strategy</text>

      <rect x="410" y="138" width="360" height="164" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="138" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="590" y="152" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">STOP AND BRING IN AN ENGINEER WHEN</text>
      {stops.map((t, i) => (
        <g key={i}>
          <rect x="426" y={168 + i * 30} width="328" height="24" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
          <text x="590" y={183 + i * 30} textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <text x="590" y="296" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">a review is a few hours — far cheaper than what it prevents</text>

      <rect x="30" y="316" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="316" width="740" height="20" rx="9" fill={COLORS.amber} />
      <text x="400" y="330" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE DRIFT — NOBODY DECIDES TO DEPEND ON A PROTOTYPE</text>
      {drift.map((d, i) => (
        <g key={i}>
          <rect x={d.x} y="346" width={d.w} height="28" rx="14" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.4" />
          <text x={d.x + d.w / 2} y="364" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{d.t}</text>
          {i < 2 && <line x1={d.x + d.w + 4} y1="360" x2={drift[i + 1].x - 4} y2="360" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowUCDa)" />}
        </g>
      ))}

      <rect x="30" y="404" width="740" height="50" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="423" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">NOT SHIPPING IS A REAL ANSWER — OFTEN THE PROFESSIONAL ONE</text>
      <text x="400" y="439" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">a spent weekend is the worst reason to expose people to risk — the prototype already answered your question</text>

      <rect x="30" y="466" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="486" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IF YOU CANNOT READ IT, KEEP IT SMALL, SLOW AND SUPERVISED</text>
      <text x="400" y="503" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">limits, caps, checklists and other people testing — those controls work, and they are the only ones you have</text>
    </DiagramFrame>
  );
};
