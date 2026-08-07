import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ REAL PRODUCTS — MODULE 3: THE PARTS THAT AREN'T THE SCREEN ============ */
export const WhereDataLivesDiagram = () => {
  const missing = ['· the customer emails to ask what happened', '· the page has an obvious, visible gap', '· somebody notices within days', '· the record is absent — and absence is loud'];
  const wrong = ['· the groomer preps the table for a large dog', '· a small one arrives at the door', '· Tuesday on the doorstep, Thursday in the files', '· both sides did exactly what the record said'];
  const decisions = [
    ['WHAT IS RECORDED?', 'a name, an email, a slot,', 'a dog and its size'],
    ['WHAT IS REQUIRED?', 'can a booking exist without an', 'owner’s email — and should it?'],
    ['WHAT IS ‘ONE BOOKING’?', 'two dogs on the same morning —', 'one booking, or two?'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="The app repeats whatever the filing system says — so what goes into the files is a decision, not an accident.">
      <defs><marker id="arrowRPc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A booking is a promise two people plan around</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the screen only ever shows what the files behind it say — this lesson is about the files</text>
      <rect x="30" y="56" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE RECORD, THE FILING SYSTEM THAT HOLDS IT, AND THE WINDOW EVERYONE LOOKS THROUGH</text>
      <rect x="46" y="84" width="190" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" />
      <text x="141" y="98" textAnchor="middle" fill={COLORS.slate700} fontSize="7" fontWeight="700">SATURDAY 10:00 · BELLA (LARGE)</text>
      <text x="141" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the groomer sets up the table for it</text>
      <text x="141" y="121" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the owner drives across town for it</text>
      <line x1="240" y1="106" x2="296" y2="106" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPc1)" />
      <text x="268" y="99" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">lives in</text>
      <rect x="300" y="84" width="210" height="44" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="405" y="100" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">A FILING SYSTEM</text>
      <text x="405" y="113" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the app trusts it completely —</text>
      <text x="405" y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">without doubt or embarrassment</text>
      <line x1="514" y1="106" x2="570" y2="106" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPc1)" />
      <text x="542" y="99" textAnchor="middle" fill={COLORS.slate500} fontSize="6.2">shown by</text>
      <rect x="574" y="84" width="180" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="664" y="100" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">THE SCREEN</text>
      <text x="664" y="113" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">only ever a window</text>
      <text x="664" y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">onto those files</text>
      <text x="400" y="146" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">whatever the files say, the app repeats — a free slot that is not free, an appointment for a dog that does not exist</text>
      <text x="400" y="158" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">shown with total confidence, because the app has no other source of truth than the files</text>
      <rect x="30" y="178" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="178" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="210" y="191" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A MISSING BOOKING ANNOUNCES ITSELF</text>
      {missing.map((t, i) => <text key={i} x="44" y={210 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="44" y="278" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">you hear about it quickly — so you can fix it</text>
      <rect x="410" y="178" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="178" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="191" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A WRONG BOOKING STAYS QUIET</text>
      {wrong.map((t, i) => <text key={i} x="424" y={210 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="278" fill={COLORS.red} fontSize="6.8" fontStyle="italic">trust is spent one confused doorstep at a time</text>
      <text x="400" y="306" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">wrongness is quiet, and that is what makes it expensive — you cannot fix an error you never hear about</text>
      <rect x="30" y="318" width="740" height="94" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">DECIDE WHAT GOES INTO THE FILES — ON PURPOSE THIS TIME</text>
      {decisions.map((d, i) => (
        <g key={i}>
          <rect x={42 + i * 246} y="344" width="230" height="42" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={157 + i * 246} y="358" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{d[0]}</text>
          <text x={157 + i * 246} y="369" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{d[1]}</text>
          <text x={157 + i * 246} y="379" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{d[2]}</text>
        </g>
      ))}
      <text x="400" y="402" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the prototype answered all three by accident, during the build weekend, mostly by the AI — and nobody looked</text>
      <rect x="30" y="420" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ABSENCE ANNOUNCES ITSELF; WRONGNESS DOES NOT</text>
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">fuzzy answers make fuzzy records, and the truth arrives on a busy Saturday — write the rules in plain words</text>
    </DiagramFrame>
  );
};
export const MigrationsBackupsDiagram = () => {
  const danger = ['ask the AI to add ‘with whom’ — it obliges, cheerfully', 'the form changes in minutes and looks perfect', 'the 200 old bookings: stranded under the new rules,', 'rewritten with a guess — or simply gone', 'the page still loads, still takes new bookings'];
  const safe = [
    ['copy first', 'a copy makes every mistake survivable'],
    ['change the copy', 'the version customers depend on stays untouched'],
    ['look at old records through the new shape', 'the standing Saturday, the two-dog morning — open them'],
    ['only then touch the real thing', 'once the copy behaves and the history reads correctly'],
  ];
  const backupQs = [['does the platform', 'keep copies at all?'], ['how far back do', 'the copies go?'], ['have I actually', 'restored one?'], ['putting one back: minutes,', 'or a lost afternoon?']];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Change the copy, check the history through the new shape, and only then touch the version people depend on.">
      <defs><marker id="arrowRPc2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The first change after real records exist is the dangerous one</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a second groomer joins — every booking now needs ‘with whom’, and 200 were made before the question existed</text>
      <rect x="30" y="54" width="740" height="60" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="46" y="66" width="190" height="36" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.3" />
      <text x="141" y="81" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the form gains a choice —</text>
      <text x="141" y="93" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">easy, done in minutes</text>
      <line x1="240" y1="84" x2="268" y2="84" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRPc2)" />
      <rect x="272" y="66" width="216" height="36" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="380" y="81" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">behind the form: 200 bookings made</text>
      <text x="380" y="93" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">under the old rules — none says with whom</text>
      <text x="512" y="76" fill={COLORS.red} fontSize="6.8">all with the original groomer? probably —</text>
      <text x="512" y="87" fill={COLORS.red} fontSize="6.8">but ‘probably’ is not something a</text>
      <text x="512" y="98" fill={COLORS.red} fontSize="6.8">filing system can hold</text>
      <rect x="30" y="124" width="360" height="178" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="124" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="137" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE DANGER PATH — STRAIGHT AT THE REAL THING</text>
      {danger.map((t, i) => <text key={i} x="44" y={158 + i * 15} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="44" y="238" width="332" height="30" rx="6" fill={COLORS.red} fillOpacity="0.08" stroke={COLORS.red} strokeWidth="1.3" />
      <text x="210" y="251" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">a regular arrives for an appointment</text>
      <text x="210" y="262" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">the system no longer remembers</text>
      <text x="44" y="282" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">the AI is not careless with code — it is careless with</text>
      <text x="44" y="292" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">history, because nobody said the history mattered</text>
      <rect x="410" y="124" width="360" height="178" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="124" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="137" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE SAFE PATH — COPY, CHANGE, LOOK, THEN TOUCH</text>
      {safe.map((s, i) => (
        <g key={i}>
          <rect x="424" y={150 + i * 30} width="18" height="18" rx="4" fill={COLORS.emerald} />
          <text x="433" y={163 + i * 30} textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{String(i + 1)}</text>
          <text x="450" y={159 + i * 30} fill={COLORS.slate700} fontSize="7.2" fontWeight="700">{s[0]}</text>
          <text x="450" y={170 + i * 30} fill={COLORS.slate600} fontSize="6.6">{s[1]}</text>
        </g>
      ))}
      <text x="424" y="282" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">slower than letting the AI loose on live records —</text>
      <text x="424" y="292" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">it is meant to be</text>
      <rect x="30" y="312" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="312" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="325" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A COPY NOBODY HAS RESTORED IS A HOPE, NOT A BACKUP</text>
      {backupQs.map((q, i) => (
        <g key={i}>
          <rect x={46 + i * 180} y="338" width="168" height="34" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          {q.map((t, j) => <text key={j} x={130 + i * 180} y={352 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <text x="400" y="388" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">all four answered: a backup · only the first: a feeling</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the drill, done calmly before it is needed: take a copy, practise putting it back somewhere safe,</text>
      <text x="400" y="413" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and write the steps down while they are fresh — the worst day is not the day to learn them</text>
      <text x="400" y="425" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">plenty of businesses found out, on the worst possible day, that their copies were empty or impossible to put back</text>
      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE PAGE CAN LOOK PERFECT WHILE THE HISTORY BEHIND IT IS GONE</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the extra hour is the whole difference between ‘we changed how bookings work’ and ‘we lost the bookings’</text>
    </DiagramFrame>
  );
};
export const AccountsAndResetsDiagram = () => {
  const lockedOut = ['· somebody is locked out most weeks — not carelessness,', '  just what 200 real people and their passwords do', '· the reset lands late, in spam, or at the old address', '  from two phones ago', '· from their side there is no nuance: the business', '  cannot take bookings', '· they phone the groomer, and the groomer phones you'];
  const neverA = ['‘I’ll set it to something and read it out’', 'feels helpful — never do it', 'a properly built system will not even', 'show you their password — be glad', 'the moment you can read passwords,', 'every leak becomes your fault'];
  const neverB = ['hand over the existing admin sign-in and', 'two people become one person', 'nobody can tell who changed a booking', 'when someone leaves, changing the lock', 'logs everyone out', 'separate people, separate sign-ins'];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="A screen that does not show other people’s bookings is not the same as a product that refuses to hand them over.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two kinds of people — and the product must enforce the difference</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">keep using the sign-in your platform provides — this lesson is everything around it that nobody mentions</text>
      <rect x="30" y="54" width="740" height="126" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">ENFORCED BY THE PRODUCT, NOT HIDDEN BY THE SCREEN</text>
      <rect x="46" y="82" width="200" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="146" y="98" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">THE GROOMER</text>
      <text x="146" y="111" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">sees everything — every booking,</text>
      <text x="146" y="121" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">every customer, every dog</text>
      <rect x="554" y="82" width="200" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.4" />
      <text x="654" y="98" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">A CUSTOMER</text>
      <text x="654" y="111" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">sees their own bookings —</text>
      <text x="654" y="121" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">and nobody else’s</text>
      <rect x="260" y="80" width="280" height="22" rx="5" fill={COLORS.red} fillOpacity="0.08" stroke={COLORS.red} strokeWidth="1.2" />
      <text x="400" y="94" textAnchor="middle" fill={COLORS.red} fontSize="6.6">the screen hides it: no button — but the files would still hand it over</text>
      <rect x="260" y="106" width="280" height="22" rx="5" fill={COLORS.emerald} fillOpacity="0.1" stroke={COLORS.emerald} strokeWidth="1.2" />
      <text x="400" y="120" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontWeight="700">the product enforces it: the request itself is refused</text>
      <text x="400" y="146" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">ask the AI directly: if a customer tries to reach another customer’s booking, is it refused — or was there just no button?</text>
      <text x="400" y="160" textAnchor="middle" fill={COLORS.slate600} fontSize="7">the prototype almost certainly does the hiding; the product needs the refusing</text>
      <text x="400" y="172" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">still true from Vibecoding, and not aged a day: never build your own sign-in</text>
      <rect x="30" y="190" width="740" height="128" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="190" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="203" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE LOCKED-OUT CUSTOMER — THE RUNNING COST NOBODY BUDGETS FOR</text>
      {lockedOut.map((t, i) => <text key={i} x="46" y={224 + i * 12.5} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="470" y="216" width="284" height="66" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.3" />
      <text x="612" y="231" textAnchor="middle" fill={COLORS.amber} fontSize="7.2" fontWeight="700">THE DRILL, WHILE NOTHING IS WRONG</text>
      <text x="612" y="245" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">lock yourself out on purpose · request the reset</text>
      <text x="612" y="257" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">watch where it lands and how long it takes</text>
      <text x="612" y="269" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">on a phone, in a hurry — the way a customer would</text>
      <text x="400" y="306" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">reset email is your problem even when the platform sends it — the customer will never phone the platform</text>
      <rect x="30" y="328" width="740" height="98" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="328" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="341" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE NEVER-DO LIST — TWO HABITS THAT WILL TEMPT YOU</text>
      <rect x="46" y="354" width="350" height="62" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="221" y="366" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">NEVER LOOK UP OR SET A CUSTOMER’S PASSWORD</text>
      {neverA.map((t, i) => <text key={i} x={i % 2 === 0 ? 58 : 232} y={380 + Math.floor(i / 2) * 12} fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
      <rect x="404" y="354" width="350" height="62" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="579" y="366" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">NEVER SHARE ONE ADMIN SIGN-IN</text>
      {neverB.map((t, i) => <text key={i} x={i % 2 === 0 ? 416 : 590} y={380 + Math.floor(i / 2) * 12} fill={COLORS.slate600} fontSize="6.3">{t}</text>)}
      <rect x="30" y="434" width="740" height="42" rx="10" fill={COLORS.slate900} />
      <text x="400" y="452" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SEND THE RESET, EVERY TIME — AND ONE SIGN-IN PER PERSON, FROM DAY ONE OF TWO</text>
      <text x="400" y="468" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">who sees what is a fact of the product, tested on purpose — not a hope about which buttons the screen shows</text>
    </DiagramFrame>
  );
};
export const HiddenServicesDiagram = () => {
  const stack = [
    ['HOSTING', 'serves the pages'],
    ['THE FILING SYSTEM', 'holds the bookings'],
    ['EMAIL', 'sends the confirmations'],
    ['PAYMENT — LATER, MAYBE', 'takes the money'],
  ];
  const listCols = ['THE SERVICE', 'ITS JOB FOR YOU', 'WHERE ITS BILL LIVES', 'ITS BAD DAY, TO YOU'];
  const listRow = ['email', 'confirmations arrive', 'a monthly card charge', 'nothing arrives at all'];
  const emailFlow = [['the app sends the', 'confirmation flawlessly'], ['it lands in spam —', 'or nowhere at all'], ['the customer assumes', 'the booking failed'], ['books again · phones ·', 'goes elsewhere']];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="From the outside, one page with your name on it — underneath, other people’s services, each with its own bad days.">
      <defs><marker id="arrowRPc4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One page on the outside — a stack of other people’s services underneath</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">each service brings its own bill, its own limits and its own way of failing — and your product inherits all three</text>
      <rect x="30" y="54" width="360" height="188" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="210" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE STACK YOU ARE STANDING ON</text>
      <rect x="70" y="80" width="280" height="24" rx="5" fill={COLORS.blue} />
      <text x="210" y="95" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">your booking page — the only part with your name on it</text>
      {stack.map((s, i) => (
        <g key={i}>
          <rect x="70" y={108 + i * 26} width="280" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          <text x="84" y={122 + i * 26} fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{s[0]}</text>
          <text x="336" y={122 + i * 26} textAnchor="end" fill={COLORS.slate500} fontSize="6.6">{s[1]}</text>
        </g>
      ))}
      <text x="210" y="222" textAnchor="middle" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">this is how nearly all modern software is made —</text>
      <text x="210" y="232" textAnchor="middle" fill={COLORS.slate500} fontSize="6.7" fontStyle="italic">including by large teams; it is not a flaw in yours</text>
      <rect x="410" y="54" width="360" height="188" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" />
      <text x="590" y="72" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WRITE THE LIST — ON PAPER, NOT IN YOUR HEAD</text>
      {listCols.map((t, i) => <text key={i} x={424 + i * 86} y="90" fill={COLORS.slate400} fontSize="6" fontWeight="700">{t}</text>)}
      <line x1="424" y1="96" x2="756" y2="96" stroke={COLORS.slate200} strokeWidth="1" />
      {listRow.map((t, i) => <text key={i} x={424 + i * 86} y="108" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
      <text x="424" y="122" fill={COLORS.slate500} fontSize="6.4" fontStyle="italic">…one row for every service in the stack</text>
      <text x="424" y="144" fill={COLORS.slate600} fontSize="7">professionals do not depend on fewer services —</text>
      <text x="424" y="156" fill={COLORS.slate600} fontSize="7">they can name what they stand on</text>
      <rect x="424" y="168" width="332" height="30" rx="6" fill={COLORS.amber} fillOpacity="0.12" stroke={COLORS.amber} strokeWidth="1.3" />
      <text x="590" y="181" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">spending caps on every service in the stack</text>
      <text x="590" y="192" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">Vibecoding’s final module in one sentence: set them</text>
      <text x="424" y="216" fill={COLORS.slate600} fontSize="6.8">the last column is the plan: what does your product</text>
      <text x="424" y="227" fill={COLORS.slate600} fontSize="6.8">look like on the day that service is down?</text>
      <rect x="30" y="252" width="740" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="252" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="265" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">EMAIL — WHERE ‘WORKING’ AND ‘ARRIVING’ QUIETLY PART COMPANY</text>
      {emailFlow.map((f, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="278" width="160" height="32" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {f.map((t, j) => <text key={j} x={126 + i * 186} y={291 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{t}</text>)}
          {i < 3 && <line x1={208 + i * 186} y1="294" x2={228 + i * 186} y2="294" stroke={COLORS.red} strokeWidth="1.3" markerEnd="url(#arrowRPc4)" />}
        </g>
      ))}
      <text x="400" y="326" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">the diary says one thing, the customer’s memory another — and the customer’s version has no nuance: ‘your app lost my booking’</text>
      <text x="400" y="340" textAnchor="middle" fill={COLORS.emerald} fontSize="7">arriving is a feature you buy and test, not one you assume: a proper email service, a sending address that matches your product,</text>
      <text x="400" y="351" textAnchor="middle" fill={COLORS.emerald} fontSize="7">and a habit of sending yourself test bookings — then checking the spam folder the way a stranger would</text>
      <rect x="30" y="374" width="360" height="56" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="210" y="390" textAnchor="middle" fill={COLORS.emerald} fontSize="7.4" fontWeight="700">FAIL LOUDLY AND HONESTLY</text>
      <text x="210" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">‘bookings are having trouble — please phone’</text>
      <text x="210" y="416" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the business keeps running, the customer stays informed</text>
      <rect x="410" y="374" width="360" height="56" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="590" y="390" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">FAIL SILENTLY</text>
      <text x="590" y="404" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">a form that accepts bookings that go nowhere —</text>
      <text x="590" y="416" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">someone else’s hour of trouble becomes wrong data of your own</text>
      <rect x="30" y="440" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="459" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WHEN A SERVICE YOU STAND ON HAS A BAD DAY, YOUR PRODUCT HAS A BAD DAY</text>
      <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">that cannot be avoided, only prepared for — the written list, the caps, and a plan that fails loudly</text>
    </DiagramFrame>
  );
};
export const BelowScreenLedgerDiagram = () => {
  const lines = [
    ['the data, done properly', 4, 'deciding · copy-change-look · the restore drill'],
    ['accounts and the locked-out customer', 3, 'two kinds of people · resets tested · the never-list'],
    ['the services underneath', 2, 'the list · email that arrives · the bad-day plan'],
  ];
  const props = [
    ['SURVIVES-A-RESTORE', 'the worst day becomes an', 'inconvenience, not an ending'],
    ['ENFORCES-WHO-SEES-WHAT', 'trust is a fact of the filing system,', 'not a hope about the screen'],
    ['ARRIVES-IN-INBOXES', 'the confirmation email', 'does its one job'],
  ];
  const screenLines = [0, 1, 2];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="Nine days, the biggest line in the ledger — and nothing to screenshot, because what was bought is properties, not pixels.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Nine days that leave the screen looking exactly the same</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the single biggest line in the ledger buys nothing anyone can screenshot — which is rather the point</text>
      <rect x="30" y="54" width="450" height="180" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="54" width="450" height="18" rx="9" fill={COLORS.blue} />
      <text x="255" y="67" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE LEDGER — THIS MODULE’S LINE</text>
      {lines.map((l, i) => (
        <g key={i}>
          <text x="46" y={90 + i * 26} fill={COLORS.slate700} fontSize="7" fontWeight="700">{l[0] as string}</text>
          <text x="46" y={100 + i * 26} fill={COLORS.slate500} fontSize="6.2">{l[2] as string}</text>
          <rect x="286" y={84 + i * 26} width={(l[1] as number) * 32} height="12" rx="3" fill={COLORS.blue} />
          <text x={292 + (l[1] as number) * 32} y={94 + i * 26} fill={COLORS.slate600} fontSize="6.8" fontWeight="700">{String(l[1]) + ' days'}</text>
        </g>
      ))}
      <line x1="46" y1="158" x2="464" y2="158" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="46" y="172" fill={COLORS.slate900} fontSize="7.4" fontWeight="700">the parts that aren’t the screen — more than the plan, more than the build</text>
      <rect x="46" y="178" width="288" height="12" rx="3" fill={COLORS.slate900} />
      <text x="340" y="188" fill={COLORS.slate900} fontSize="6.8" fontWeight="700">9 days — the biggest line</text>
      <rect x="46" y="196" width="64" height="12" rx="3" fill={COLORS.slate400} />
      <text x="116" y="206" fill={COLORS.slate500} fontSize="6.8">2 days — the weekend demo · this whole line is 4× that</text>
      <rect x="46" y="214" width="280" height="12" rx="6" fill={COLORS.slate200} />
      <rect x="46" y="214" width="219" height="12" rx="6" fill={COLORS.emerald} />
      <text x="334" y="224" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">18 of 23 days now spent</text>
      <rect x="500" y="54" width="270" height="180" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="635" y="72" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">BEFORE AND AFTER THE NINE DAYS</text>
      {[0, 1].map((k) => (
        <g key={k}>
          <rect x={522 + k * 120} y="84" width="106" height="72" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.3" />
          <rect x={522 + k * 120} y="84" width="106" height="12" rx="6" fill={COLORS.slate300} />
          {screenLines.map((j) => <rect key={j} x={532 + k * 120} y={104 + j * 14} width={j === 2 ? 56 : 86} height="7" rx="3" fill={COLORS.slate200} />)}
          <text x={575 + k * 120} y="168" textAnchor="middle" fill={COLORS.slate500} fontSize="6.8" fontWeight="700">{k === 0 ? 'before' : 'after'}</text>
        </g>
      ))}
      <text x="635" y="188" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">identical — no new screens, nothing to show anyone</text>
      <text x="635" y="202" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">the screen is how non-engineers — reasonably —</text>
      <text x="635" y="212" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">judge progress, and these days bought none of it</text>
      <text x="635" y="226" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">why professional estimates sound absurd next to a demo</text>
      <rect x="30" y="244" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="244" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="257" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT THE NINE DAYS BOUGHT — PROPERTIES, NOT PIXELS</text>
      {props.map((p, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="270" width="226" height="46" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={159 + i * 246} y="285" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontWeight="700">{p[0]}</text>
          <text x={159 + i * 246} y="297" textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{p[1]}</text>
          <text x={159 + i * 246} y="308" textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{p[2]}</text>
        </g>
      ))}
      <text x="400" y="332" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">a property is invisible right up until the day it is the only thing that matters</text>
      <text x="400" y="346" textAnchor="middle" fill={COLORS.red} fontSize="7.2">a demo can show every pixel and no properties — and look identical to the real thing</text>
      <text x="400" y="378" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">this is also the cheapest moment for a professional review — a few hours on keeping, enforcing and restoring, not a rebuild,</text>
      <text x="400" y="390" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">because below the screen everything looks fine right up until it is not</text>
      <rect x="30" y="404" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="424" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DATA 4 + ACCOUNTS 3 + SERVICES 2 = 9 DAYS · RUNNING TOTAL 18 OF 23</text>
      <text x="400" y="441" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">most of the difference between a two-day prototype and a shipped product stands quietly below the screen</text>
    </DiagramFrame>
  );
};
