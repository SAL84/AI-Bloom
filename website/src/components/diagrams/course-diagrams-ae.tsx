import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ SECURING AI SYSTEMS — MODULE 3 (CONT.) + MODULE 4 START ============ */

export const IrreversibleActionGatesDiagram = () => {
  const fields = [
    { l: 'EXACT PARAMETERS', c: COLORS.blue, t: ['the actual recipient, amount, record id —', 'never a generated summary of intent'] },
    { l: 'SOURCE CONTENT', c: COLORS.amber, t: ['the content that motivated the action,', 'and whether it came from outside'] },
    { l: 'REACH', c: COLORS.blue, t: ['how many records, whose data,', 'which systems are affected'] },
    { l: 'ON TIMEOUT', c: COLORS.emerald, t: ['abandon, never proceed —', 'doing nothing must be safe'] },
  ];
  const defeats = [
    { n: 'SPLITTING', d: ' — ungated steps reach the same effect; gate the effect' },
    { n: 'FATIGUE', d: ' — volume until clicks are automatic; watch decision time' },
    { n: 'MISLEADING RATIONALE', d: ' — show parameters, not the summary' },
    { n: 'TIMING', d: ' — asked deep inside a long run, attention lapsed' },
    { n: 'BYPASS', d: ' — another code path hits the capability; test for it' },
  ];
  const subs = [
    { h: 'deterministic policy checks', b: 'ceilings · allowlists · provenance rules' },
    { h: 'staged execution', b: 'drafts, holds, delay windows buy time' },
    { h: 'sampled post-hoc review', b: 'catches drift, never the individual event' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 504" caption="Place gates on reversibility and reach, show the approver exact parameters with their source, and keep the gated list short enough to be read.">
      <defs>
        <marker id="arrowIAGa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Gate the actions that cannot be undone — and only those</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">high volume produces reflexive approval — a documented human decision that did not occur</text>

      <rect x="30" y="58" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHY GATING EVERYTHING FAILS</text>
      <rect x="46" y="88" width="100" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="96" y="104" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">every call gated</text>
      <line x1="146" y1="101" x2="160" y2="101" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowIAGa)" />
      <rect x="162" y="88" width="96" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="210" y="104" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">queue volume</text>
      <line x1="258" y1="101" x2="272" y2="101" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowIAGa)" />
      <rect x="274" y="88" width="102" height="26" rx="5" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" />
      <text x="325" y="104" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">reflexive clicking</text>
      <text x="210" y="132" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">worse than none — it documents a human decision that did not occur</text>
      <text x="210" y="144" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">approval rate and time-to-decision are security metrics</text>

      <rect x="410" y="58" width="360" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">PLACE GATES ON TWO AXES</text>
      <rect x="426" y="84" width="104" height="15" rx="4" fill={COLORS.emerald} />
      <text x="478" y="94.5" textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">REVERSIBILITY</text>
      <text x="540" y="94.5" fill={COLORS.slate600} fontSize="6.8">can it be undone, by whom, how quickly?</text>
      <rect x="426" y="105" width="104" height="15" rx="4" fill={COLORS.emerald} />
      <text x="478" y="115.5" textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">REACH</text>
      <text x="540" y="115.5" fill={COLORS.slate600} fontSize="6.8">how many records, whose data, which systems?</text>
      <text x="590" y="134" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">send · transfer · delete · grant · deploy · publish</text>
      <text x="590" y="146" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontStyle="italic">irreversible = a third party has already been affected</text>

      <rect x="30" y="168" width="360" height="158" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="168" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="210" y="181" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE APPROVAL SCREEN IS A SECURITY INTERFACE</text>
      {fields.map((f, i) => {
        const y = 208 + i * 32;
        return (
          <g key={i}>
            <rect x="46" y={y - 12} width="104" height="16" rx="4" fill={f.c} />
            <text x="98" y={y - 1} textAnchor="middle" fill={COLORS.white} fontSize="6.4" fontWeight="700">{f.l}</text>
            <text x="162" y={y - 3} fill={COLORS.slate600} fontSize="7.2">{f.t[0]}</text>
            <text x="162" y={y + 9} fill={COLORS.slate600} fontSize="7.2">{f.t[1]}</text>
          </g>
        );
      })}

      <rect x="410" y="168" width="360" height="158" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="168" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="181" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">FIVE WAYS GATES ARE DEFEATED</text>
      {defeats.map((d, i) => {
        const y = 194 + i * 26;
        return (
          <g key={i}>
            <rect x="426" y={y} width="328" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.1" />
            <text x="434" y={y + 14.5} fontSize="6.5">
              <tspan fill={COLORS.red} fontWeight="700">{d.n}</tspan>
              <tspan fill={COLORS.slate600}>{d.d}</tspan>
            </text>
          </g>
        );
      })}

      <rect x="30" y="340" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="358" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">WHEN A HUMAN CANNOT BE IN THE LOOP — SUBSTITUTES AND THEIR HONEST LIMITS</text>
      {subs.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="366" width="228" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="378" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{s.h}</text>
          <text x={160 + i * 240} y="390" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{s.b}</text>
        </g>
      ))}
      <text x="400" y="412" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">a second model judging the action is a signal with an error rate — not a boundary</text>

      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">GATE ON REVERSIBILITY AND REACH — A SHORT LIST PEOPLE READ BEATS ONE THEY CLICK THROUGH</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">monitor approval rate and time-to-decision — a two-second average means nobody is reading</text>
    </DiagramFrame>
  );
};

export const StructuredOutputControlDiagram = () => {
  const objFields = [
    { m: 'action: "refund"', c: COLORS.emerald, a: 'enum — bounded by the schema' },
    { m: 'customer_id: "C-1042"', c: COLORS.emerald, a: 'pattern-validated reference' },
    { m: 'amount: 4900', c: COLORS.amber, a: 'valid value — still attacker-influenceable' },
    { m: 'note: "Please expedite…"', c: COLORS.red, a: 'free text — an unconstrained channel' },
  ];
  const permissive = [
    { h: 'identifier typed as loose string', b: 'instead of a validated pattern' },
    { h: 'enum still lists an unused', b: 'destructive option' },
    { h: 'additionalProperties left', b: 'open on the object' },
  ];
  const consumers = [
    { h: 'browser rendering', b: ['encode; no automatic', 'remote fetch'] },
    { h: 'shell · query · template', b: ['treat exactly as', 'user input'] },
    { h: 'identifiers', b: ['resolve + authorise', 'at the consumer'] },
    { h: 'another agent', b: ['data, unless deliberately', 'decided otherwise'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 514" caption="Constrained decoding removes format confusion and bounds what a persuaded model can attempt — but every value and free-text field still needs validation and authorisation at each consumer.">
      <defs>
        <marker id="arrowSODa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Constrain the shape, and you constrain the reachable outcomes</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">tokens that would break the schema are never emitted — but the schema constrains form, not intent</text>

      <rect x="30" y="64" width="200" height="56" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="130" y="87" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontWeight="700">model, possibly persuaded</text>
      <text x="130" y="101" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">proposes next tokens</text>
      <line x1="234" y1="92" x2="264" y2="92" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowSODa)" />
      <rect x="270" y="64" width="240" height="56" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="390" y="83" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontWeight="700">CONSTRAINED DECODER</text>
      <text x="390" y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">tokens that would invalidate</text>
      <text x="390" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">the schema are never emitted</text>
      <line x1="514" y1="92" x2="544" y2="92" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowSODa)" />
      <rect x="550" y="64" width="220" height="56" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="660" y="87" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2" fontWeight="700">always a schema-valid object</text>
      <text x="660" y="101" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">no free text left to parse</text>
      <text x="400" y="136" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">no extra fields, no trailing content, no format confusion for the consumer to misread</text>

      <rect x="30" y="148" width="460" height="128" rx="9" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="2" />
      <rect x="30" y="148" width="460" height="18" rx="9" fill={COLORS.slate600} />
      <text x="260" y="161" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">ONE VALID OBJECT — FIELD BY FIELD</text>
      <text x="46" y="184" fill={COLORS.slate700} fontSize="6.8" fontFamily="monospace">{'{'}</text>
      {objFields.map((f, i) => {
        const y = 200 + i * 16;
        return (
          <g key={i}>
            <text x="58" y={y} fill={COLORS.slate700} fontSize="6.8" fontFamily="monospace">{f.m}</text>
            <text x="250" y={y} fill={f.c} fontSize="6.6">{f.a}</text>
          </g>
        );
      })}
      <text x="46" y="276" fill={COLORS.slate700} fontSize="6.8" fontFamily="monospace">{'}'}</text>

      <rect x="510" y="148" width="260" height="128" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="510" y="148" width="260" height="18" rx="9" fill={COLORS.red} />
      <text x="640" y="161" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">VALID IS NOT SAFE</text>
      <text x="640" y="182" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">a transfer object can be schema-perfect</text>
      <text x="640" y="195" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">with the wrong recipient and the wrong</text>
      <text x="640" y="208" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">amount — chosen because a document</text>
      <text x="640" y="221" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">told the model to choose them</text>
      <text x="640" y="248" textAnchor="middle" fill={COLORS.red} fontSize="7" fontStyle="italic">the policy check still has to happen</text>

      <rect x="30" y="288" width="740" height="64" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="306" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">PERMISSIVE SCHEMAS GIVE THE GROUND BACK</text>
      {permissive.map((p, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="314" width="228" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="326" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{p.h}</text>
          <text x={160 + i * 240} y="338" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{p.b}</text>
        </g>
      ))}

      <rect x="30" y="364" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="364" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="377" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">MODEL OUTPUT IS UNTRUSTED INPUT AT EVERY CONSUMER</text>
      {consumers.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="392" width="172" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={132 + i * 186} y="405" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{c.h}</text>
          <text x={132 + i * 186} y="416" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{c.b[0]}</text>
          <text x={132 + i * 186} y="425" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{c.b[1]}</text>
        </g>
      ))}

      <rect x="30" y="450" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">STRUCTURE IS NOT AUTHORISATION — SCHEMA-VALID CAN STILL BE THE WRONG ACTION</text>
      <text x="400" y="487" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the recurring failure: validated once at the model boundary, trusted by five components downstream</text>
    </DiagramFrame>
  );
};

export const GuardrailModelsDiagram = () => {
  const costs = [
    { h: 'professional users hit hardest', b: 'their legitimate work looks borderline' },
    { h: 'users route around the tool', b: 'activity moves somewhere unmonitored' },
    { h: 'the review queue degrades', b: 'alerts nobody can triage go unread' },
  ];
  const honest = [
    { h: 'the guardrail is itself a model', b: 'evading phrasings are cheap to search for' },
    { h: 'vendor numbers describe a corpus', b: 'measure on fresh post-deploy attempts' },
    { h: 'define the miss case in advance', b: 'which control catches it, which signal fires' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 492" caption="Guardrail classifiers earn their keep against high-volume unsophisticated attempts, but at realistic base rates their false positives land on legitimate users — measure both error rates and define what happens on a miss.">
      <defs>
        <marker id="arrowGRMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">What the guardrail buys — and who pays for its errors</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">classifiers on input, output and tool calls — a detective control that also blocks, on top of structural controls</text>

      <rect x="30" y="66" width="110" height="30" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="85" y="85" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8">user + external input</text>
      <line x1="140" y1="81" x2="164" y2="81" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowGRMa)" />
      <rect x="170" y="66" width="130" height="30" rx="6" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.8" />
      <text x="235" y="85" textAnchor="middle" fill={COLORS.cyan} fontSize="6.8" fontWeight="700">input classifier</text>
      <line x1="300" y1="81" x2="324" y2="81" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowGRMa)" />
      <rect x="330" y="66" width="110" height="30" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="385" y="85" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8">model + tool calls</text>
      <line x1="440" y1="81" x2="464" y2="81" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowGRMa)" />
      <rect x="470" y="66" width="130" height="30" rx="6" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.8" />
      <text x="535" y="85" textAnchor="middle" fill={COLORS.cyan} fontSize="6.8" fontWeight="700">output classifier</text>
      <line x1="600" y1="81" x2="624" y2="81" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowGRMa)" />
      <rect x="630" y="66" width="140" height="30" rx="6" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="700" y="85" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8">consumer / action</text>
      <text x="400" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">block · flag · route for review — and generate the signal detection depends on</text>

      <rect x="30" y="128" width="740" height="126" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="146" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE BASE-RATE ARITHMETIC — ACCURACY IN ISOLATION IS THE WRONG QUESTION</text>
      <text x="770" y="152" textAnchor="end" fill={COLORS.red} fontSize="6.2">5 real attacks in 10,000 requests</text>
      <text x="142" y="168" textAnchor="end" fill={COLORS.slate600} fontSize="6.6">all traffic</text>
      <rect x="150" y="156" width="548" height="18" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1" />
      <rect x="698" y="156" width="12" height="18" fill={COLORS.red} />
      <text x="424" y="188" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">genuine attacks are a small fraction of everything the system serves</text>
      <text x="142" y="216" textAnchor="end" fill={COLORS.slate600} fontSize="6.6">blocked set</text>
      <rect x="150" y="204" width="112" height="18" fill={COLORS.blueLight} stroke={COLORS.blue} strokeWidth="1" />
      <rect x="262" y="204" width="6" height="18" fill={COLORS.red} />
      <text x="280" y="216" fill={COLORS.slate600} fontSize="6.6">at a 1% false-positive rate: ≈100 legitimate requests blocked · 4 of 5 attacks caught</text>
      <text x="400" y="242" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontStyle="italic">even a low false-positive rate blocks far more legitimate work than attacks — the cost lands on users</text>

      <rect x="30" y="266" width="740" height="66" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="284" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">WHERE THE FALSE-POSITIVE COST LANDS</text>
      {costs.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="292" width="228" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="304" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{c.h}</text>
          <text x={160 + i * 240} y="316" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{c.b}</text>
        </g>
      ))}

      <rect x="30" y="344" width="740" height="70" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="362" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">AN ADAPTIVE ATTACKER EVALUATES AGAINST IT</text>
      {honest.map((h, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="370" width="228" height="32" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={160 + i * 240} y="383" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{h.h}</text>
          <text x={160 + i * 240} y="395" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{h.b}</text>
        </g>
      ))}

      <rect x="30" y="428" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="448" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A GUARDRAIL WHOSE FAILURE MODE IS UNDEFINED IS BEING USED AS A BOUNDARY</text>
      <text x="400" y="465" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">tune with both error rates measured on your own traffic — never against the tuning set</text>
    </DiagramFrame>
  );
};

export const DefenseInDepthAIDiagram = () => {
  const identity = [
    { h: 'a distinct identity per agent', b: 'owner · purpose · review date · decommission path' },
    { h: 'on behalf of this user, expressed', b: 'authorisation applies the user’s scope' },
    { h: 'a run id on every downstream call', b: 'attribution: which run, which user, which version' },
  ];
  const trace = [
    'the prompt as assembled, post-templating', 'retrieved items with source identifiers',
    'tool calls: arguments, identity, result', 'policy + guardrail decisions — allows too',
    'approval events as displayed', 'memory writes with their context',
  ];
  const table = [
    { c: 'least privilege', g: 'misuse within the granted scope remains', by: 'gates + deterministic policy checks' },
    { c: 'sandbox', g: 'legitimate tool calls sit outside it', by: 'least privilege · approval gates' },
    { c: 'default-deny egress', g: 'delete, spend, send need no egress', by: 'gates on irreversible actions' },
    { c: 'approval gates', g: 'splitting, fatigue, misleading rationale', by: 'policy checks · gate metrics watched' },
    { c: 'constrained decoding', g: 'shapes structure, not intent or values', by: 'validation + authz at every consumer' },
    { c: 'guardrail classifiers', g: 'error rates; an evadable input surface', by: 'the structural layers beneath it' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 514" caption="Give each agent an identity and a full trace, then layer individually defeatable controls so no single failure is sufficient — and document each control's gap alongside the control that covers it.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Every layer has a gap — the arrangement is the defence</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">attribution, a full trace, and detection are what turn six defeatable controls into a position</text>

      <rect x="30" y="58" width="740" height="54" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="16" rx="9" fill={COLORS.blue} />
      <text x="400" y="70" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">IDENTITY — THIS AGENT, ON BEHALF OF THIS USER, THIS RUN</text>
      {identity.map((d, i) => (
        <g key={i}>
          <rect x={46 + i * 246} y="80" width="232" height="26" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={162 + i * 246} y="91" textAnchor="middle" fill={COLORS.slate700} fontSize="6.5" fontWeight="700">{d.h}</text>
          <text x={162 + i * 246} y="101.5" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{d.b}</text>
        </g>
      ))}

      <rect x="30" y="124" width="740" height="110" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="124" width="740" height="16" rx="9" fill={COLORS.cyan} />
      <text x="400" y="136" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE TRACE — WHAT DID IT DO, WHY, AND WHAT INFLUENCED IT</text>
      {trace.map((t, i) => (
        <g key={i}>
          <rect x={46 + (i % 3) * 246} y={148 + Math.floor(i / 3) * 30} width="232" height="24" rx="5" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.2" />
          <text x={162 + (i % 3) * 246} y={163 + Math.floor(i / 3) * 30} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{t}</text>
        </g>
      ))}
      <text x="400" y="214" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">correlated by run id — forensic when read afterwards, a control when it feeds detection</text>
      <text x="400" y="226" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontStyle="italic">the signals are sequence and destination: privileged call after ingestion, first-seen egress, canaries</text>

      <rect x="30" y="246" width="740" height="190" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="264" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">EACH CONTROL&apos;S GAP, AND THE CONTROL EXPECTED TO COVER IT</text>
      <rect x="46" y="274" width="170" height="14" rx="3" fill={COLORS.emerald} />
      <text x="131" y="284" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">CONTROL</text>
      <rect x="226" y="274" width="280" height="14" rx="3" fill={COLORS.red} />
      <text x="366" y="284" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">WHAT IT DOES NOT COVER</text>
      <rect x="516" y="274" width="238" height="14" rx="3" fill={COLORS.blue} />
      <text x="635" y="284" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">EXPECTED TO CATCH THAT</text>
      {table.map((r, i) => {
        const y = 294 + i * 22;
        return (
          <g key={i}>
            <rect x="46" y={y} width="170" height="20" rx="4" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.1" />
            <text x="131" y={y + 13.5} textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontWeight="700">{r.c}</text>
            <rect x="226" y={y} width="280" height="20" rx="4" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.1" />
            <text x="366" y={y + 13.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{r.g}</text>
            <rect x="516" y={y} width="238" height="20" rx="4" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.1" />
            <text x="635" y={y + 13.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.5">{r.by}</text>
          </g>
        );
      })}

      <rect x="30" y="450" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">NO SINGLE FAILURE IS SUFFICIENT — WRITE DOWN EACH GAP AND NAME WHAT COVERS IT</text>
      <text x="400" y="487" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a stack described without its gaps is marketing, not a security position</text>
    </DiagramFrame>
  );
};

export const AuthorisedExerciseDiagram = () => {
  const stages: { c: string; h: string; chips: string[][] }[] = [
    {
      c: COLORS.emerald, h: '1 · AUTHORISATION AND SCOPE — IN WRITING, BEFORE ANYTHING RUNS',
      chips: [
        ['in-scope and excluded', 'systems, endpoints, envs'],
        ['accounts, credentials,', 'data that may be used'],
        ['time window + named', 'contacts on both sides'],
        ['stop condition if a real', 'compromise is found'],
      ],
    },
    {
      c: COLORS.amber, h: '2 · RULES OF ENGAGEMENT — THE CLAUSES THAT PREVENT HARM',
      chips: [
        ['synthetic data only —', 'in attacks and in evidence'],
        ['planted content stays in', 'the agreed env, removed after'],
        ['rollback agreed; rate limits', 'on shared dependencies'],
        ['stop and escalate on signs', 'of a real intrusion'],
      ],
    },
    {
      c: COLORS.blue, h: '3 · SAFE METHOD — DEMONSTRATE THE PATH, NOT THE HARM',
      chips: [
        ['benign objectives: marker', 'tokens, no-op tools, canaries'],
        ['marker reaches destination', '= path proven, harmlessly'],
        ['record attempts, success', 'rate, turns — effort matters'],
        ['test the deployed stack,', 'guardrails active; say so'],
      ],
    },
    {
      c: COLORS.cyan, h: '4 · REPORT — WRITTEN SO SOMETHING CHANGES',
      chips: [
        ['impact and affected parties', 'first; technique second'],
        ['preconditions, config,', 'attempts, success rate'],
        ['mechanisms and conditions,', 'not pasteable payloads'],
        ['fix at the containing layer', '+ retest criteria written in'],
      ],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Written authorisation, explicit scope, harm-preventing rules of engagement, benign-marker methodology, and a report with retest criteria — what makes an exercise legitimate and useful.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Authorised, scoped, harmless by design, reported to be fixed</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an exercise against your own systems, under written authorisation — nothing that follows is legitimate without it</text>

      <rect x="30" y="58" width="740" height="54" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.red} fontSize="9" fontWeight="700">WITHOUT WRITTEN AUTHORISATION, IT IS UNAUTHORISED ACCESS — NOT RESEARCH</text>
      <text x="400" y="91" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">someone else&apos;s product, a hosted model you have an account with, a supplier&apos;s agent — all out of bounds</text>
      <text x="400" y="103" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">provider terms prohibit adversarial probing independently of the law</text>

      <line x1="56" y1="157" x2="56" y2="397" stroke={COLORS.slate300} strokeWidth="2" />
      {stages.map((s, i) => {
        const y = 122 + i * 80;
        return (
          <g key={i}>
            <circle cx="56" cy={y + 35} r="12" fill={s.c} />
            <text x="56" y={y + 39} textAnchor="middle" fill={COLORS.white} fontSize="8.5" fontWeight="700">{i + 1}</text>
            <rect x="84" y={y} width="686" height="70" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x="84" y={y} width="686" height="16" rx="9" fill={s.c} />
            <text x="427" y={y + 11.5} textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">{s.h}</text>
            {s.chips.map((ch, j) => (
              <g key={j}>
                <rect x={98 + j * 170} y={y + 24} width="158" height="38" rx="6" fill={COLORS.slate50} stroke={s.c} strokeWidth="1.1" />
                <text x={177 + j * 170} y={y + 39} textAnchor="middle" fill={COLORS.slate700} fontSize="6.3">{ch[0]}</text>
                <text x={177 + j * 170} y={y + 51} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{ch[1]}</text>
              </g>
            ))}
          </g>
        );
      })}

      <rect x="30" y="444" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SYNTHETIC DATA, BENIGN MARKERS, AGREED SCOPE — PROVE THE PATH WITHOUT THE HARM</text>
      <text x="400" y="481" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a finding nobody fixes was not worth discovering — write the retest criteria into the report</text>
    </DiagramFrame>
  );
};
