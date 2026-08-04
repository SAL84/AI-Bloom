import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULES 2-3: CACHE LAYOUT & TOOLS ============ */

export const CacheAwareLayoutDiagram = () => {
  const prefix = ['system instructions', 'tool definitions, in a fixed order', 'durable reference material'];
  const suffix = ['conversation turns', 'tool observations', 'freshly retrieved material'];
  const breakers = [
    { h: 'A TIMESTAMP IN THE SYSTEM INSTRUCTIONS', l: 'invalidates everything after it, on every single call' },
    { h: 'TOOL LIST FROM AN UNORDERED COLLECTION', l: 'a different order per process — misses across instances' },
    { h: 'PER-USER CONTENT AT THE TOP', l: 'fragments the cache across your whole user base' },
    { h: 'RETRIEVED DOCUMENTS BEFORE THE TOOL DEFINITIONS', l: 'pushes volatile content into the stable region' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Keep a byte-stable prefix with everything volatile after it — and when quality disappoints, read the context before blaming the model">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Stable prefix first, everything volatile after</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the loop re-sends the prefix on every step — cache-friendly layout is a structural cost and latency lever</text>

      <rect x="30" y="58" width="310" height="124" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="310" height="22" rx="10" fill={COLORS.emerald} />
      <text x="185" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">STABLE PREFIX — BYTE-IDENTICAL EVERY CALL</text>
      {prefix.map((t, i) => (
        <g key={i}>
          <rect x="44" y={88 + i * 26} width="282" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x="185" y={103 + i * 26} textAnchor="middle" fill={COLORS.slate700} fontSize="8.2">{t}</text>
        </g>
      ))}
      <text x="185" y="196" textAnchor="middle" fill={COLORS.emerald} fontSize="8.2" fontStyle="italic">reused at a discount, with a real latency saving</text>

      <line x1="30" y1="208" x2="340" y2="208" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="185" y="222" textAnchor="middle" fill={COLORS.red} fontSize="7.8">one divergent byte above invalidates everything below</text>

      <rect x="30" y="232" width="310" height="124" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="232" width="310" height="22" rx="10" fill={COLORS.amber} />
      <text x="185" y="247" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">VOLATILE SUFFIX — CHANGES EVERY STEP</text>
      {suffix.map((t, i) => (
        <g key={i}>
          <rect x="44" y={262 + i * 26} width="282" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x="185" y={277 + i * 26} textAnchor="middle" fill={COLORS.slate700} fontSize="8.2">{t}</text>
        </g>
      ))}

      <rect x="360" y="58" width="410" height="192" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="360" y="58" width="410" height="24" rx="10" fill={COLORS.red} />
      <text x="565" y="74" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WHAT BREAKS THE PREFIX — USUALLY BY ACCIDENT</text>
      {breakers.map((b, i) => (
        <g key={i}>
          <text x="376" y={100 + i * 34} fill={COLORS.red} fontSize="8.2" fontWeight="700">{b.h}</text>
          <text x="376" y={113 + i * 34} fill={COLORS.slate600} fontSize="8.2">{b.l}</text>
        </g>
      ))}
      <text x="565" y="238" textAnchor="middle" fill={COLORS.red} fontSize="8.2" fontStyle="italic">invisible in output quality — which is why they persist</text>

      <rect x="360" y="264" width="410" height="92" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="360" y="264" width="410" height="22" rx="10" fill={COLORS.amber} />
      <text x="565" y="279" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">CACHE HIT RATE IS A MONITORED METRIC</text>
      <text x="376" y="302" fill={COLORS.slate600} fontSize="8.4">give it an owner, review it after every prompt</text>
      <text x="376" y="316" fill={COLORS.slate600} fontSize="8.4">change, and treat a sudden drop the way you</text>
      <text x="376" y="330" fill={COLORS.slate600} fontSize="8.4">would treat a latency regression</text>

      <rect x="30" y="372" width="740" height="48" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="392" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">QUALITY DISAPPOINTING? CONTEXT FAILURE IS THE DEFAULT HYPOTHESIS — DIAGNOSE BEFORE UPGRADING THE MODEL</text>
      <text x="400" y="408" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">read the assembled context at the failing step — would a careful person, given only that, have erred the same way?</text>

      <rect x="30" y="432" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="454" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE PREFIX IS A COST LEVER; THE CONTEXT IS THE QUALITY LEVER</text>
      <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">design the layout for caching from the start — retrofitting means moving content other code depends on the position of</text>
    </DiagramFrame>
  );
};

export const ToolApiDesignDiagram = () => {
  const pills = ['reads the docs exactly once', 'cannot experiment safely', 'cannot read the implementation', 'guesses rather than asks'];
  const cards = [
    { x: 30, c: COLORS.red, h: 'TOO FINE', l: ['the model composes long chains', 'of primitives — an agent that', 'must call six tools to update a', 'record will eventually call five'] },
    { x: 282, c: COLORS.emerald, h: 'THE UNIT OF INTENT', l: ['one tool per task a user would', 'name — update the delivery', 'address, refund the order, find', 'open tickets for this account'] },
    { x: 534, c: COLORS.red, h: 'TOO COARSE', l: ['a free-text instruction, under-', 'determined inside — ambiguity', 'moves out of sight, into code', 'that has to interpret prose'] },
  ];
  const rules = [
    { h: 'ONE TOOL, MODE ENUMERATED', l: 'beats three near-siblings' },
    { h: 'NAME FOR THE OUTCOME', l: 'not your internal service' },
    { h: 'ONE VOCABULARY THROUGHOUT', l: 'customer or account, never both' },
    { h: 'MCP COMES WHOLESALE', l: 'its whole list joins your context' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="A tool is an API for a consumer that reads once and never asks — cut the toolset at the unit of intent and keep it small and distinct">
      <defs>
        <marker id="arrowTADa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Design tools for a consumer that cannot ask questions</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model reads the documentation once, guesses instead of asking, and pays for ambiguity on every run</text>

      <rect x="30" y="58" width="740" height="74" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="22" rx="10" fill={COLORS.cyan} />
      <text x="400" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">YOUR ONLY CONSUMER IS A MODEL, NOT A HUMAN INTEGRATOR</text>
      {pills.map((p, i) => (
        <g key={i}>
          <rect x={44 + i * 182} y="92" width="168" height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.2" />
          <text x={128 + i * 182} y="109" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{p}</text>
        </g>
      ))}

      <text x="400" y="154" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">GRANULARITY — AIM AT THE UNIT OF INTENT</text>
      {cards.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="164" width="236" height="114" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={c.x} y="164" width="236" height="22" rx="9" fill={c.c} />
          <text x={c.x + 118} y="179" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x={c.x + 12} y={204 + j * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}
      <line x1="268" y1="221" x2="279" y2="221" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowTADa)" />
      <line x1="532" y1="221" x2="521" y2="221" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowTADa)" />
      <text x="400" y="296" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4" fontStyle="italic">a sequence that never varies should be one tool — the model gains nothing from being trusted with the ordering</text>

      <rect x="30" y="312" width="740" height="86" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="312" width="740" height="22" rx="10" fill={COLORS.blue} />
      <text x="400" y="327" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">KEEP THE SURFACE SMALL AND DISTINCT — SELECTION ACCURACY FALLS AS TOOLS OVERLAP</text>
      {rules.map((r, i) => (
        <g key={i}>
          <rect x={44 + i * 184} y="344" width="172" height="42" rx="8" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={130 + i * 184} y="360" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">{r.h}</text>
          <text x={130 + i * 184} y="374" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">{r.l}</text>
        </g>
      ))}

      <rect x="30" y="414" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="436" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CONSISTENCY ACROSS THE TOOLSET BEATS ELEGANCE IN ANY SINGLE TOOL</text>
      <text x="400" y="454" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">a bad tool is paid for on every run forever — the highest-leverage, most under-invested work in the system</text>
    </DiagramFrame>
  );
};

export const ToolSchemasDiagram = () => {
  const def = [
    { t: 'description: Refunds a settled order.', b: false },
    { t: '  Use once payment has settled.', b: false },
    { t: '  Not for pending orders — prefer', b: false },
    { t: '  cancel_order. Returns the refund id.', b: false },
    { t: 'arguments:', b: true },
    { t: '  order_id · "8-digit order number"', b: false },
    { t: '  amount · "minor units (pence)"', b: false },
    { t: '  reason · one of [duplicate,', b: false },
    { t: '           faulty, goodwill]', b: false },
    { t: '  required: order_id, amount', b: false },
  ];
  const notes = [
    { c: COLORS.blue, h: 'SELECTION FIRST: WHEN, AND WHEN NOT', l: 'it names the sibling to prefer in the adjacent case' },
    { c: COLORS.cyan, h: 'THEN USE: EFFECT, RETURN, PRECONDITIONS', l: 'plus an example call where argument shapes are unobvious' },
    { c: COLORS.emerald, h: 'ENUMS AND FORMATS, STATED', l: 'a free string invites invented values and formats' },
    { c: COLORS.amber, h: 'REQUIRED MARKED REQUIRED', l: 'omission fails loudly at the boundary, not with a silent default' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Descriptions and schemas are prompt content — write for selection first, enumerate and describe every field, and validate before executing">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The definition is prompt content the model actually reads</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">wording and schema shape selection and invocation — fix systematic misuse here before touching the system prompt</text>

      <rect x="30" y="58" width="360" height="78" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="24" rx="10" fill={COLORS.blue} />
      <text x="210" y="74" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">THE TOOL THE AGENT LACKS</text>
      <text x="44" y="102" fill={COLORS.slate600} fontSize="8.4">fails cleanly — the agent cannot do the thing,</text>
      <text x="44" y="116" fill={COLORS.slate600} fontSize="8.4">says so, and you learn something</text>

      <rect x="410" y="58" width="360" height="78" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="24" rx="10" fill={COLORS.red} />
      <text x="590" y="74" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">THE VAGUELY DESCRIBED TOOL</text>
      <text x="424" y="102" fill={COLORS.slate600} fontSize="8.4">confident misuse, trusted because it returned</text>
      <text x="424" y="116" fill={COLORS.slate600} fontSize="8.4">something — misdiagnosed as reasoning for months</text>

      <rect x="30" y="148" width="740" height="30" rx="8" fill={COLORS.slate900} />
      <text x="400" y="167" textAnchor="middle" fill={COLORS.white} fontSize="8.8" fontWeight="700">THE BAR — a competent new engineer, with no access to the code, would use it correctly every time</text>

      <rect x="30" y="196" width="380" height="204" rx="10" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="2" />
      <rect x="30" y="196" width="380" height="22" rx="10" fill={COLORS.slate600} />
      <text x="220" y="211" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE DEFINITION AS SENT — READ AS LANGUAGE</text>
      <text x="46" y="236" fill={COLORS.slate900} fontSize="8.4" fontWeight="700">refund_order</text>
      {def.map((d, i) => (
        <text key={i} x="46" y={252 + i * 14} fill={d.b ? COLORS.slate900 : COLORS.slate600} fontSize="8" fontWeight={d.b ? 700 : 400}>{d.t}</text>
      ))}
      <rect x="36" y="244" width="4" height="56" rx="2" fill={COLORS.blue} />
      <rect x="36" y="314" width="4" height="72" rx="2" fill={COLORS.emerald} />

      {notes.map((n, i) => (
        <g key={i}>
          <line x1="410" y1={260 + i * 36} x2="440" y2={227 + i * 50} stroke={COLORS.slate300} strokeWidth="1" />
          <rect x="440" y={204 + i * 50} width="330" height="46" rx="8" fill={COLORS.white} stroke={n.c} strokeWidth="1.8" />
          <text x="452" y={222 + i * 50} fill={n.c} fontSize="8.2" fontWeight="700">{n.h}</text>
          <text x="452" y={237 + i * 50} fill={COLORS.slate600} fontSize="7.9">{n.l}</text>
        </g>
      ))}

      <rect x="30" y="416" width="740" height="56" rx="10" fill={COLORS.slate900} />
      <text x="400" y="438" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">VALIDATE BEFORE EXECUTING — RETURN THE CORRECTABLE ERROR</text>
      <text x="400" y="456" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">"reason must be one of duplicate, faulty, goodwill" is fixable in one step. Fail the bar? Do not ship.</text>
    </DiagramFrame>
  );
};

export const ToolReturnRecoveryDiagram = () => {
  const flow = [
    { c: COLORS.cyan, t: 'the tool executes' },
    { c: COLORS.blue, t: 'its return value' },
    { c: COLORS.cyan, t: 'becomes context' },
    { c: COLORS.emerald, t: 'steers the next action' },
  ];
  const carries = [
    { c: COLORS.blue, h: 'THE OUTCOME, STATED', l: ['an empty result and a failed', 'query are different situations', 'that look identical when both', 'render as nothing'] },
    { c: COLORS.cyan, h: 'THE RESULTING STATE', l: ['after a mutation, return what', 'the record now reads — saving', 'a verification step on every', 'single call'] },
    { c: COLORS.emerald, h: 'THE AFFORDANCES', l: ['what can be done next — above', 'all the identifiers the', 'follow-up call will need'] },
  ];
  const errors = [
    { c: COLORS.amber, h: 'TRANSIENT — WAIT AND RETRY', l: ['say it is temporary and', 'indicate how long to wait', 'before trying again'] },
    { c: COLORS.blue, h: 'CORRECTABLE — SAY THE FIX', l: ['identifiers for this resource', 'are eight digits — actionable', 'in a single step'] },
    { c: COLORS.red, h: 'TERMINAL — STOP TRYING', l: ['this account is closed — no', 'retry will help; reroute or', 'escalate instead'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="Design returns as the model's next prompt — explicit outcome, resulting state, affordances, and errors that name their class">
      <defs>
        <marker id="arrowTRRa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The return value is the next prompt</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">whatever the tool returns is the material the model chooses its next action from — design it for that reader</text>

      {flow.map((f, i) => (
        <g key={i}>
          <rect x={38 + i * 188} y="58" width="170" height="44" rx="9" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <text x={123 + i * 188} y="84" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">{f.t}</text>
          {i < 3 && <line x1={210 + i * 188} y1="80" x2={224 + i * 188} y2="80" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowTRRa)" />}
        </g>
      ))}
      <text x="400" y="122" textAnchor="middle" fill={COLORS.slate500} fontSize="8.4" fontStyle="italic">designed for a human reading a log is the wrong target</text>

      <text x="400" y="144" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">WHAT ALMOST EVERY RETURN SHOULD CARRY</text>
      {carries.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="152" width="236" height="98" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="152" width="236" height="22" rx="9" fill={c.c} />
          <text x={148 + i * 252} y="167" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={192 + j * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}

      <text x="400" y="272" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">ERRORS ARE INSTRUCTIONS — NAME THE CLASS, BECAUSE THE RIGHT RESPONSE DIFFERS</text>
      {errors.map((e, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="280" width="236" height="82" rx="9" fill={COLORS.white} stroke={e.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="280" width="236" height="20" rx="9" fill={e.c} />
          <text x={148 + i * 252} y="294" textAnchor="middle" fill={COLORS.white} fontSize="8.2" fontWeight="700">{e.h}</text>
          {e.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={316 + j * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
        </g>
      ))}
      <text x="400" y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4" fontStyle="italic">most looping in production traces back to error text that failed to say which class applied</text>

      <rect x="30" y="398" width="740" height="56" rx="10" fill={COLORS.slate900} />
      <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">BOUND EVERY RETURN AT THE TOOL — SUMMARIES WITH RETRIEVAL PATHS, NOT PAYLOAD DUMPS</text>
      <text x="400" y="438" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a page with the total count · visible truncation with a handle for the rest · large artefacts stored, a reference returned</text>
    </DiagramFrame>
  );
};

export const ToolErrorsSideEffectsDiagram = () => {
  const chain = [
    { x: 44, w: 108, c: COLORS.emerald, t: 'record created' },
    { x: 168, w: 108, c: COLORS.amber, t: 'notify failed' },
    { x: 292, w: 128, c: COLORS.red, t: 'reported: "failed"' },
    { x: 436, w: 108, c: COLORS.red, t: 'model retries' },
    { x: 560, w: 110, c: COLORS.red, t: 'two records' },
  ];
  const cap = ['an agent that retries a tool', 'which retries internally can', 'hammer a struggling dependency'];
  const cap2 = ['decide the retry layer per', 'tool, note timing in the', 'description, cap total', 'attempts per tool per run'];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Retry transients inside the tool, make every side effect idempotent, and report partial completion exactly rather than as failure">
      <defs>
        <marker id="arrowTESa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowTESb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Retry below the loop, and make repeats safe</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">transient noise is handled inside the tool; the model sees only decisions — and every side effect assumes at-least-once</text>

      <rect x="30" y="58" width="480" height="64" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="7" height="64" rx="3" fill={COLORS.blue} />
      <text x="48" y="78" fill={COLORS.blue} fontSize="9" fontWeight="700">THE MODEL'S LOOP</text>
      <text x="48" y="94" fill={COLORS.slate600} fontSize="8.2">sees only errors that need a decision — every visible</text>
      <text x="48" y="108" fill={COLORS.slate600} fontSize="8.2">retry costs a full step and can trigger a strategy change</text>

      <line x1="110" y1="154" x2="110" y2="126" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowTESa)" />
      <text x="122" y="143" fill={COLORS.emerald} fontSize="7.5">needs a decision — surface it</text>
      <line x1="330" y1="154" x2="330" y2="134" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="322" y1="132" x2="338" y2="132" stroke={COLORS.red} strokeWidth="2" />
      <text x="344" y="143" fill={COLORS.red} fontSize="7.5">transient — never surfaces</text>

      <rect x="30" y="158" width="480" height="66" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="158" width="7" height="66" rx="3" fill={COLORS.emerald} />
      <text x="48" y="178" fill={COLORS.emerald} fontSize="9" fontWeight="700">THE TOOL LAYER</text>
      <text x="48" y="194" fill={COLORS.slate600} fontSize="8.2">timeouts, rate limits, brief unavailability retried</text>
      <text x="48" y="208" fill={COLORS.slate600} fontSize="8.2">here with bounded backoff — invisible to the model</text>
      <path d="M 470 176 a 12 12 0 1 1 -12 14" fill="none" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowTESa)" />

      <rect x="530" y="58" width="240" height="166" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="530" y="58" width="240" height="22" rx="9" fill={COLORS.amber} />
      <text x="650" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">RETRIES COMPOSE BADLY</text>
      {cap.map((t, i) => (
        <text key={i} x="544" y={98 + i * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}
      <text x="544" y="150" fill={COLORS.amber} fontSize="8.2" fontWeight="700">THE CAP LIVES IN THE RUNTIME</text>
      {cap2.map((t, i) => (
        <text key={i} x="544" y={166 + i * 13} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}

      <rect x="30" y="240" width="740" height="112" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="240" width="740" height="24" rx="10" fill={COLORS.emerald} />
      <text x="400" y="256" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">IDEMPOTENCY — AT-LEAST-ONCE IS THE HONEST ASSUMPTION FOR ANY SIDE EFFECT</text>
      <rect x="44" y="280" width="160" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="124" y="298" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">run id + logical action</text>
      <line x1="206" y1="294" x2="218" y2="294" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTESb)" />
      <rect x="222" y="280" width="150" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="297" y="298" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">stable idempotency key</text>
      <line x1="374" y1="294" x2="386" y2="294" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTESb)" />
      <rect x="390" y="280" width="120" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="450" y="298" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">seen before?</text>
      <line x1="510" y1="288" x2="556" y2="278" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTESb)" />
      <line x1="510" y1="300" x2="556" y2="310" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTESb)" />
      <rect x="560" y="266" width="196" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
      <text x="658" y="282" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">no → perform, record the key</text>
      <rect x="560" y="298" width="196" height="24" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
      <text x="658" y="314" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">yes → return the original result</text>
      <text x="400" y="338" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">derive the key from intent, not the argument text the model rendered — and if downstream offers nothing, keep the ledger yourself</text>

      <rect x="30" y="368" width="740" height="92" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="368" width="740" height="24" rx="10" fill={COLORS.red} />
      <text x="400" y="384" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">FAILURE AFTER PARTIAL COMPLETION — WHERE THE WORST INCIDENTS COME FROM</text>
      {chain.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="404" width={c.w} height="26" rx="6" fill={COLORS.slate50} stroke={c.c} strokeWidth="1.5" />
          <text x={c.x + c.w / 2} y="421" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">{c.t}</text>
          {i < 4 && <line x1={c.x + c.w + 2} y1="417" x2={chain[i + 1].x - 3} y2="417" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowTESb)" />}
        </g>
      ))}
      <text x="400" y="448" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">prefer atomic operations · else report exactly what did and did not happen, with identifiers · expose the compensating action</text>
    </DiagramFrame>
  );
};
