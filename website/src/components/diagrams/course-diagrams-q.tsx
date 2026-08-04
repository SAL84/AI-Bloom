import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULE 1: THE LOOP ============ */

export const LoopOwnershipDiagram = () => {
  const stages = [
    { c: COLORS.cyan, h: 'ASSEMBLE', own: 'YOUR CODE', l: ['builds the exact', 'context this call', 'will receive'] },
    { c: COLORS.blue, h: 'MODEL CALL', own: "THE MODEL'S ONLY PART", l: ['receives a context,', 'emits one response,', 'then stops'] },
    { c: COLORS.cyan, h: 'RUN TOOLS', own: 'YOUR CODE', l: ['executes the tool', 'calls, collects the', 'observations'] },
    { c: COLORS.emerald, h: 'DECIDE', own: 'YOUR CODE', l: ['append or trim,', 'gate tools, check', 'budgets — continue', 'or stop the run'] },
  ];
  const pills = [
    { x: 151, w: 85, t: 'iteration count' },
    { x: 246, w: 99, t: 'what gets appended' },
    { x: 355, w: 94, t: 'what gets dropped' },
    { x: 459, w: 71, t: 'when to stop' },
    { x: 540, w: 108, t: 'what tools come next' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 396" caption="The model emits one response and stops — every further iteration is a decision your code makes between calls">
      <defs>
        <marker id="arrowLOa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowLOb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The loop is yours — the model only ever takes one turn of it</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">iteration, appending, trimming, gating and stopping are all decided between calls</text>

      <rect x="30" y="56" width="740" height="204" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5" fontWeight="700">YOUR RUNTIME — EVERY ARROW IN THIS BOX IS YOUR CODE</text>
      {stages.map((s, i) => {
        const x = 48 + i * 186;
        return (
          <g key={i}>
            <rect x={x} y="92" width="160" height="104" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x={x} y="92" width="160" height="22" rx="9" fill={s.c} />
            <text x={x + 80} y="107" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{s.h}</text>
            <text x={x + 80} y="128" textAnchor="middle" fill={s.c} fontSize="7.2" fontStyle="italic" fontWeight="700">{s.own}</text>
            {s.l.map((t, j) => (
              <text key={j} x={x + 10} y={143 + j * 13} fill={COLORS.slate700} fontSize="8.3">{t}</text>
            ))}
            {i < 3 && <line x1={x + 162} y1="146" x2={x + 183} y2="146" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowLOa)" />}
          </g>
        );
      })}
      <path d="M 686 198 L 686 226 L 128 226 L 128 202" fill="none" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowLOb)" />
      <text x="400" y="244" textAnchor="middle" fill={COLORS.emerald} fontSize="8.6" fontStyle="italic">the next iteration exists because your code decided to call the model again</text>

      <text x="400" y="272" textAnchor="middle" fill={COLORS.slate400} fontSize="7.5" fontWeight="700">DECISIONS THAT LIVE IN THE GAPS BETWEEN MODEL CALLS</text>
      {pills.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="278" width={p.w} height="20" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={p.x + p.w / 2} y="291" textAnchor="middle" fill={COLORS.blue} fontSize="7.8">{p.t}</text>
        </g>
      ))}

      <rect x="30" y="312" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="334" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A FRAMEWORK LOOP IS STILL A LOOP YOU OWN THE CONSEQUENCES OF</text>
      <text x="400" y="352" textAnchor="middle" fill={COLORS.white} fontSize="9.5" opacity="0.9">Write the loop yourself at least once — it forces the questions that decide whether it works unattended</text>
    </DiagramFrame>
  );
};

export const RunTerminationDiagram = () => {
  const outcomes = [
    { t: 'DECLARES VICTORY EARLY', l: 'partial work, a plausible report, nothing alerts' },
    { t: 'NEVER STOPS', l: 'there is always one more thing it could check' },
    { t: 'THE POLITE LOOP', l: 're-verifying what it has already verified' },
  ];
  const schema = [
    'the answer or artefact produced',
    'identifiers touched, checks run',
    'confidence and caveats',
    'required fields stop empty successes',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="The model may propose completion; only a termination condition your runtime evaluates can end the run">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Termination is a property of the runtime</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model may propose that it is finished; only your code can decide that the loop ends</text>

      <rect x="30" y="56" width="360" height="300" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="26" rx="10" fill={COLORS.red} />
      <text x="210" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">STOP CONDITION IN THE PROMPT</text>
      <rect x="44" y="94" width="332" height="26" rx="13" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
      <text x="210" y="111" textAnchor="middle" fill={COLORS.red} fontSize="9" fontStyle="italic">"continue until the task is complete"</text>
      <text x="44" y="140" fill={COLORS.slate600} fontSize="8.6">completion left to the model's judgement, against a</text>
      <text x="44" y="153" fill={COLORS.slate600} fontSize="8.6">context that no longer states the requirements clearly</text>
      {outcomes.map((o, i) => (
        <g key={i}>
          <rect x="44" y={168 + i * 46} width="332" height="40" rx="8" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x="56" y={184 + i * 46} fill={COLORS.red} fontSize="8.8" fontWeight="700">{o.t}</text>
          <text x="56" y={198 + i * 46} fill={COLORS.slate600} fontSize="8.2">{o.l}</text>
        </g>
      ))}
      <text x="210" y="326" textAnchor="middle" fill={COLORS.red} fontSize="8.6" fontStyle="italic">a control-flow decision delegated to a sampler</text>
      <text x="210" y="340" textAnchor="middle" fill={COLORS.slate500} fontSize="8.2">none of these are interesting model failures</text>

      <rect x="410" y="56" width="360" height="300" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="590" y="74" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FINISH BY CALLING A TERMINAL TOOL</text>
      <rect x="424" y="94" width="332" height="114" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
      <text x="436" y="112" fill={COLORS.slate900} fontSize="8.8" fontWeight="700">submit(&#123; … &#125;) — completion carries the artefact</text>
      {schema.map((s, i) => (
        <g key={i}>
          <circle cx="442" cy={126 + i * 15} r="2.5" fill={COLORS.emerald} />
          <text x="452" y={129 + i * 15} fill={COLORS.slate700} fontSize="8.2">{s}</text>
        </g>
      ))}
      <rect x="424" y="224" width="160" height="66" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.8" />
      <rect x="424" y="224" width="160" height="18" rx="8" fill={COLORS.emerald} />
      <text x="504" y="237" textAnchor="middle" fill={COLORS.white} fontSize="7.5" fontWeight="700">SUCCESS TERMINAL</text>
      <text x="504" y="256" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">done, with the result</text>
      <text x="504" y="268" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">and the evidence</text>
      <text x="504" y="280" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">attached</text>
      <rect x="596" y="224" width="160" height="66" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.8" />
      <rect x="596" y="224" width="160" height="18" rx="8" fill={COLORS.amber} />
      <text x="676" y="237" textAnchor="middle" fill={COLORS.white} fontSize="7.5" fontWeight="700">ESCALATION TERMINAL</text>
      <text x="676" y="256" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">"I could not do this"</text>
      <text x="676" y="268" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">as a legitimate</text>
      <text x="676" y="280" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">outcome, not a failure</text>
      <text x="590" y="316" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6" fontStyle="italic">the end of a run becomes a discrete, loggable event</text>
      <text x="590" y="330" textAnchor="middle" fill={COLORS.slate500} fontSize="8.2">not an inference from prose</text>

      <rect x="30" y="372" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="394" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE MODEL PROPOSES COMPLETION — THE RUNTIME DECIDES IT</text>
      <text x="400" y="412" textAnchor="middle" fill={COLORS.white} fontSize="9.4" opacity="0.9">Where done is mechanically checkable, check it in code — the model that did the work is the weakest judge of it</text>
    </DiagramFrame>
  );
};

export const AgentBudgetsDiagram = () => {
  const budgets = [
    {
      c: COLORS.blue, n: 'STEPS', u: 'decisions',
      b: ['how many decisions the agent', 'gets to make in one run'],
      w: ['twenty cheap steps and twenty steps', 'carrying a huge context both pass'],
    },
    {
      c: COLORS.cyan, n: 'TOKENS', u: 'context size',
      b: ['context growth — superlinear in a', 'naive loop; each step re-sends all'],
      w: ['a run inside its step limit can still', 'consume a startling amount of money'],
    },
    {
      c: COLORS.amber, n: 'WALL-CLOCK', u: 'time',
      b: ['how long a caller, a queue or', 'a lock is kept waiting'],
      w: ['a budget-legal run can still block', 'a queue for an hour on a slow tool'],
    },
    {
      c: COLORS.red, n: 'SPEND', u: 'money',
      b: ['the actual liability, denominated', 'in the unit finance recognises'],
      w: ['the only ceiling stated in money —', 'the number the business actually feels'],
    },
  ];
  const ceiling = [
    { t: 'CHECKPOINT STATE', l: ['the stop is clean and', 'attributable'] },
    { t: 'RETURN PARTIAL WORK', l: ['whatever it', 'legitimately has'] },
    { t: 'REPORT WHICH BUDGET', l: ['tripped, and at', 'which step'] },
    { t: 'STAY RESUMABLE', l: ['extending budget must', 'not mean re-running'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 518" caption="Steps, tokens, wall-clock and spend fail independently — enforce all four in the runtime and record which one tripped">
      <defs>
        <marker id="arrowABa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four budgets, not one — they fail independently</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">checked at the top of each iteration and before each dispatch — a budget in the prompt is context, not a control</text>

      <text x="46" y="72" fill={COLORS.slate400} fontSize="8" fontWeight="700">BUDGET</text>
      <text x="160" y="72" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT IT BOUNDS</text>
      <text x="470" y="72" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHY THE OTHER THREE DO NOT COVER IT</text>
      {budgets.map((r, i) => {
        const y = 82 + i * 58;
        return (
          <g key={i}>
            <rect x="30" y={y} width="740" height="50" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
            <rect x="30" y={y} width="7" height="50" rx="3" fill={r.c} />
            <text x="46" y={y + 21} fill={COLORS.slate900} fontSize="10" fontWeight="700">{r.n}</text>
            <text x="46" y={y + 35} fill={COLORS.slate500} fontSize="7.5">{r.u}</text>
            {r.b.map((t, j) => (
              <text key={j} x="160" y={y + 20 + j * 13} fill={COLORS.slate600} fontSize="8.4">{t}</text>
            ))}
            {r.w.map((t, j) => (
              <text key={j} x="470" y={y + 20 + j * 13} fill={COLORS.slate600} fontSize="8.4">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="30" y="320" width="740" height="108" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="320" width="740" height="24" rx="10" fill={COLORS.emerald} />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">AT THE CEILING — A DESIGNED OUTCOME, NOT A GENERIC FAILURE</text>
      {ceiling.map((c, i) => {
        const x = 44 + i * 176;
        return (
          <g key={i}>
            <rect x={x} y="354" width="160" height="48" rx="8" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
            <text x={x + 80} y="370" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontWeight="700">{c.t}</text>
            {c.l.map((t, j) => (
              <text key={j} x={x + 80} y={383 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">{t}</text>
            ))}
            {i < 3 && <line x1={x + 162} y1="378" x2={x + 173} y2="378" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowABa)" />}
          </g>
        );
      })}
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">subagents draw from the parent's remaining allowance — fresh budgets multiply the ceiling by the number of children</text>

      <rect x="30" y="440" width="740" height="46" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">WORST OPTION: silently truncate and continue — a clean stop becomes amnesia, then confidently wrong work</text>
      <text x="400" y="474" textAnchor="middle" fill={COLORS.slate600} fontSize="8.6">Instead, warn the model a step before the ceiling so it can wrap up and write a useful handover</text>
    </DiagramFrame>
  );
};

export const StuckAgentDetectionDiagram = () => {
  const shapes = [
    {
      c: COLORS.red, h: 'REPETITION',
      l: ['the same tool with materially the', 'same arguments — it assumes it', 'made a formatting mistake'],
    },
    {
      c: COLORS.amber, h: 'OSCILLATION',
      l: ['two states alternate and each', 'action undoes the last — edit', 'and revert, add and remove'],
    },
    {
      c: COLORS.cyan, h: 'DRIFT',
      l: ['varied, sensible-looking activity', 'that never changes the state', 'the goal is defined by'],
    },
  ];
  const sigL = [
    'fingerprint = tool name + normalised arguments',
    'two or three identical fingerprints in a window fires',
    'repeated sequences, not just actions, catch cycles',
  ];
  const sigR = [
    'near-identical reasoning text means regenerating',
    'progress predicate: has the success state changed?',
    'several flat checkpoints = stuck, however busy',
  ];
  const ladder = [
    { c: COLORS.blue, h: '1 · NAME THE LOOP', l: ['say: three identical calls, same', 'result — take a different approach'] },
    { c: COLORS.amber, h: '2 · REMOVE THE TOOL', l: ['make the repeated action', 'unavailable for the next step'] },
    { c: COLORS.red, h: '3 · STOP AND ESCALATE', l: ['terminate, and attach the run', 'state to the escalation'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="A stuck agent looks exactly like a working one — detect it structurally and escalate the intervention rather than raising the budget">
      <defs>
        <marker id="arrowSADa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowSADb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Stuck looks exactly like working</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">fluent reasoning and steady tool calls prove nothing — detection has to be structural, and in the loop</text>

      {shapes.map((s, i) => {
        const x = 30 + i * 252;
        return (
          <g key={i}>
            <rect x={x} y="58" width="236" height="122" rx="9" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x={x} y="58" width="236" height="22" rx="9" fill={s.c} />
            <text x={x + 118} y="73" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">{s.h}</text>
            {s.l.map((t, j) => (
              <text key={j} x={x + 12} y={130 + j * 13} fill={COLORS.slate700} fontSize="8.2">{t}</text>
            ))}
          </g>
        );
      })}
      {[70, 118, 166].map((cx, i) => (
        <g key={i}>
          <circle cx={30 + cx} cy="99" r="10" fill={COLORS.red} fillOpacity="0.14" stroke={COLORS.red} strokeWidth="1.5" />
          <text x={30 + cx} y="102.5" textAnchor="middle" fill={COLORS.red} fontSize="8" fontWeight="700">A</text>
        </g>
      ))}
      <rect x="322" y="88" width="64" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="354" y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="8">edit</text>
      <rect x="414" y="88" width="64" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.5" />
      <text x="446" y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="8">revert</text>
      <line x1="388" y1="94" x2="410" y2="94" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowSADb)" />
      <line x1="412" y1="104" x2="390" y2="104" stroke={COLORS.amber} strokeWidth="1.5" markerEnd="url(#arrowSADb)" />
      <polyline points="564,105 604,88 644,102 684,86 724,100" fill="none" stroke={COLORS.cyan} strokeWidth="2" />
      <circle cx="724" cy="100" r="3" fill={COLORS.cyan} />

      <rect x="30" y="192" width="740" height="100" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="192" width="740" height="24" rx="10" fill={COLORS.blue} />
      <text x="400" y="208" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">SIGNALS YOUR LOOP COMPUTES — ARITHMETIC ON THE TRACE, DURING THE RUN</text>
      {sigL.map((t, i) => (
        <g key={i}>
          <circle cx="50" cy={230 + i * 18} r="2.5" fill={COLORS.blue} />
          <text x="60" y={233 + i * 18} fill={COLORS.slate700} fontSize="8.4">{t}</text>
        </g>
      ))}
      {sigR.map((t, i) => (
        <g key={i}>
          <circle cx="416" cy={230 + i * 18} r="2.5" fill={COLORS.blue} />
          <text x="426" y={233 + i * 18} fill={COLORS.slate700} fontSize="8.4">{t}</text>
        </g>
      ))}

      <text x="30" y="314" fill={COLORS.emerald} fontSize="9.5" fontWeight="700">WHEN IT FIRES — THREE ESCALATING INTERVENTIONS</text>
      {ladder.map((s, i) => {
        const x = 30 + i * 258;
        return (
          <g key={i}>
            <rect x={x} y="322" width="224" height="58" rx="8" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x={x} y="322" width="224" height="20" rx="8" fill={s.c} />
            <text x={x + 112} y="336" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{s.h}</text>
            {s.l.map((t, j) => (
              <text key={j} x={x + 12} y={356 + j * 12} fill={COLORS.slate700} fontSize="8">{t}</text>
            ))}
            {i < 2 && <line x1={x + 227} y1="351" x2={x + 254} y2="351" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowSADa)" />}
          </g>
        );
      })}

      <rect x="30" y="392" width="740" height="32" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="412" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">What buys more looping: an identical retry, a generic "try harder", or a bigger budget</text>
    </DiagramFrame>
  );
};

export const ScriptVsAgentDiagram = () => {
  const fixedEx = [
    'fetch the ticket · parse the payload',
    'look up the account · apply the rule',
    'write the record · send the notification',
  ];
  const varEx = [
    'debugging an unfamiliar failure',
    'research across sources you cannot predict',
    'state you can only discover by looking',
  ];
  const pipe = [
    { t: 'fetch', m: false }, { t: 'parse', m: false }, { t: 'classify', m: true },
    { t: 'apply rule', m: false }, { t: 'extract', m: true }, { t: 'write', m: false }, { t: 'notify', m: false },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 460" caption="If a week of thought would produce the flowchart, write the flowchart — spend the loop only where the next action depends on the last result">
      <defs>
        <marker id="arrowSVAa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowSVAb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
        <marker id="arrowSVAc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Put the model where the variance is</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">mark each part of the workflow fixed or variable before choosing an architecture</text>

      <rect x="245" y="58" width="310" height="32" rx="16" fill={COLORS.slate900} />
      <text x="400" y="78" textAnchor="middle" fill={COLORS.white} fontSize="9.5" fontWeight="700">Could you draw the flowchart, given a week?</text>
      <line x1="330" y1="92" x2="242" y2="116" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowSVAa)" />
      <text x="266" y="100" fill={COLORS.emerald} fontSize="8.5" fontWeight="700">yes</text>
      <line x1="470" y1="92" x2="558" y2="116" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowSVAb)" />
      <text x="524" y="100" fill={COLORS.blue} fontSize="8.5" fontWeight="700">no</text>

      <rect x="30" y="122" width="360" height="164" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="122" width="360" height="26" rx="10" fill={COLORS.emerald} />
      <text x="210" y="140" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FIXED — WRITE THE SCRIPT</text>
      <text x="44" y="164" fill={COLORS.emerald} fontSize="8.8" fontWeight="700">the steps are known, the order is known</text>
      {fixedEx.map((t, i) => (
        <text key={i} x="44" y={182 + i * 14} fill={COLORS.slate600} fontSize="8.4">{t}</text>
      ))}
      <line x1="44" y1="234" x2="376" y2="234" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="44" y="252" fill={COLORS.slate700} fontSize="8.4" fontStyle="italic">a model choosing these steps adds latency,</text>
      <text x="44" y="266" fill={COLORS.slate700} fontSize="8.4" fontStyle="italic">cost and variance, and removes testability</text>

      <rect x="410" y="122" width="360" height="164" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="122" width="360" height="26" rx="10" fill={COLORS.blue} />
      <text x="590" y="140" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">VARIABLE — EARN THE LOOP</text>
      <text x="424" y="164" fill={COLORS.blue} fontSize="8.8" fontWeight="700">the next action depends on the last result</text>
      {varEx.map((t, i) => (
        <text key={i} x="424" y={182 + i * 14} fill={COLORS.slate600} fontSize="8.4">{t}</text>
      ))}
      <line x1="424" y1="234" x2="756" y2="234" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="424" y="252" fill={COLORS.slate700} fontSize="8.4" fontStyle="italic">classification, extraction and judgement —</text>
      <text x="424" y="266" fill={COLORS.slate700} fontSize="8.4" fontStyle="italic">where a model beats the alternatives</text>

      <rect x="30" y="300" width="740" height="40" rx="8" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="316" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">NOT REASONS FOR AN AGENT</text>
      <text x="400" y="331" textAnchor="middle" fill={COLORS.slate700} fontSize="8.6">many known cases is a branch · several tools is a function · an unclear spec is a design problem the agent inherits</text>

      <text x="400" y="364" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5" fontWeight="700">THE COMMON END STATE — A DETERMINISTIC PIPELINE WITH MODEL-SHAPED HOLES</text>
      {pipe.map((p, i) => {
        const x = 32 + i * 108;
        return (
          <g key={i}>
            <rect x={x} y="374" width="88" height="30" rx="6" fill={p.m ? COLORS.blueLight : COLORS.slate50} stroke={p.m ? COLORS.blue : COLORS.slate400} strokeWidth={p.m ? 2 : 1.2} />
            <text x={x + 44} y="393" textAnchor="middle" fill={p.m ? COLORS.blue : COLORS.slate600} fontSize="8" fontWeight={p.m ? 700 : 400}>{p.t}</text>
            {p.m && <text x={x + 44} y="414" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontWeight="700">MODEL</text>}
            {i < 6 && <line x1={x + 90} y1="389" x2={x + 105} y2="389" stroke={COLORS.slate400} strokeWidth="1.2" markerEnd="url(#arrowSVAc)" />}
          </g>
        );
      })}
      <text x="400" y="436" textAnchor="middle" fill={COLORS.slate500} fontSize="9" fontStyle="italic">Ship the agent to discover the workflow, then harden the dominant paths into code and keep the loop for the tail</text>
    </DiagramFrame>
  );
};
