import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULES 4-5: OPERATIONS & OVERSIGHT ============ */

export const CostLatencyRequirementsDiagram = () => {
  const bars = [14, 26, 38, 50, 62, 74];
  const levers = [
    { c: COLORS.emerald, h: 'REMOVE STEPS FIRST', l: ['right-sized tools mean one', 'call does what three did —', 'the biggest single win'] },
    { c: COLORS.blue, h: 'PARALLELISE IN A STEP', l: ['independent tool calls', 'dispatched together, on', 'tools safe to run at once'] },
    { c: COLORS.cyan, h: 'ROUTE BY STEP', l: ['a smaller model for the', 'mechanical steps; the large', 'one only for real decisions'] },
    { c: COLORS.amber, h: 'MANAGE PERCEPTION', l: ['stream progress when a user', 'waits; honest status and a', 'notification for background'] },
  ];
  const money = ['input tokens dominate output by a wide', 'margin — the naive loop\'s cost grows', 'with roughly the square of run length'];
  const money2 = ['as a cost lever — and the re-sent prefix', 'is exactly the part caching can absorb'];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Set cost per successful task and tail latency as budgets before building — input tokens dominate, so context discipline and step count are the levers">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Cost and latency are requirements, not reports</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">they determine the architecture — a few seconds of tolerance cannot contain a ten-step sequential loop</text>

      <rect x="30" y="58" width="360" height="112" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="22" rx="10" fill={COLORS.blue} />
      <text x="210" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WRITE THE NUMBERS DOWN BEFORE YOU BUILD</text>
      <text x="44" y="100" fill={COLORS.slate600} fontSize="8.3">derive from the alternative: what the task</text>
      <text x="44" y="113" fill={COLORS.slate600} fontSize="8.3">costs when a person does it, and how long</text>
      <text x="44" y="126" fill={COLORS.slate600} fontSize="8.3">the user or the queue will actually wait</text>
      <text x="44" y="146" fill={COLORS.blue} fontSize="8.2" fontWeight="700">then allocate: steps × context size × model tier</text>

      <rect x="410" y="58" width="360" height="112" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="22" rx="10" fill={COLORS.red} />
      <text x="590" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE TAIL OF LONG RUNS DRIVES THE SPEND</text>
      <text x="424" y="100" fill={COLORS.slate600} fontSize="8.3">a small fraction of long, confused runs</text>
      <text x="424" y="113" fill={COLORS.slate600} fontSize="8.3">frequently accounts for a large share of</text>
      <text x="424" y="126" fill={COLORS.slate600} fontSize="8.3">the bill — a step ceiling is a cost</text>
      <text x="424" y="139" fill={COLORS.slate600} fontSize="8.3">control, not only a safety one</text>

      <rect x="30" y="182" width="740" height="146" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="182" width="740" height="22" rx="10" fill={COLORS.amber} />
      <text x="400" y="197" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WHERE THE MONEY GOES — EVERY STEP RE-SENDS THE ACCUMULATED CONTEXT</text>
      <rect x="60" y="208" width="7" height="7" fill={COLORS.blueMid} />
      <text x="71" y="214" fill={COLORS.slate500} fontSize="7">history, re-sent again</text>
      <rect x="175" y="208" width="7" height="7" fill={COLORS.cyan} />
      <text x="186" y="214" fill={COLORS.slate500} fontSize="7">new this step</text>
      {bars.map((h, i) => (
        <g key={i}>
          {i > 0 && <rect x={60 + i * 60} y={296 - h + 12} width="36" height={h - 12} fill={COLORS.blueMid} />}
          <rect x={60 + i * 60} y={296 - h} width="36" height={i === 0 ? h : 12} fill={COLORS.cyan} />
          <text x={78 + i * 60} y="307" textAnchor="middle" fill={COLORS.slate500} fontSize="7">{i + 1}</text>
        </g>
      ))}
      <line x1="50" y1="296" x2="430" y2="296" stroke={COLORS.slate300} strokeWidth="1.2" />
      {money.map((t, i) => (
        <text key={i} x="446" y={228 + i * 14} fill={COLORS.slate600} fontSize="8.3">{t}</text>
      ))}
      <text x="446" y="274" fill={COLORS.amber} fontSize="8.2" fontWeight="700">CONTEXT DISCIPLINE OUTRANKS MODEL CHOICE</text>
      {money2.map((t, i) => (
        <text key={i} x="446" y={290 + i * 14} fill={COLORS.slate600} fontSize="8.3">{t}</text>
      ))}
      <text x="400" y="321" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">attribute cost per step and per tool, or the one verbose tool result funding the bill stays invisible</text>

      <text x="400" y="346" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">LATENCY IS STRUCTURAL — SEQUENTIAL STEPS × TIME PER STEP; ONLY STRUCTURAL WINS ARE LARGE</text>
      {levers.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="354" width="172" height="78" rx="9" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={30 + i * 190} y="354" width="172" height="20" rx="9" fill={p.c} />
          <text x={116 + i * 190} y="368" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">{p.h}</text>
          {p.l.map((t, j) => (
            <text key={j} x={40 + i * 190} y={388 + j * 13} fill={COLORS.slate600} fontSize="7.9">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="444" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">MEASURE COST AND LATENCY PER SUCCESSFUL TASK — FAILURES AND RETRIES ARE PART OF THE PRICE</text>
      <text x="400" y="481" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">derive the budget from the human alternative and real waiting tolerance, then allocate it across steps before building</text>
    </DiagramFrame>
  );
};

export const GracefulDegradationDiagram = () => {
  const exits = ['budget exhausted', 'missing precondition', 'permission / approval', 'dependency unavailable', 'unrecoverably confused'];
  const rungs = [
    { c: COLORS.emerald, h: '1 · RETRY THE RUN', l: 'transients only — classify the failure first, cap the attempts' },
    { c: COLORS.blue, h: '2 · FALL BACK TO ANOTHER MODEL', l: 'needs portability you have actually tested, not assumed' },
    { c: COLORS.cyan, h: '3 · FALL BACK TO THE DETERMINISTIC PATH', l: 'another reason the hybrid design keeps one around' },
    { c: COLORS.amber, h: '4 · HAND OVER TO A HUMAN', l: 'the most reliable option — design the handover' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 510" caption="Enumerate every non-success exit and fall down a bounded, visible ladder of fallbacks — a silent fallback reports success while quality drifts">
      <defs>
        <marker id="arrowGDDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Every run needs an exit that is not success</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">enumerate the ways a run can fail to complete and design each one — an exception discards the work and explains nothing</text>

      <rect x="30" y="58" width="740" height="104" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">THE NON-SUCCESS EXITS — EACH ONE A DESIGNED BEHAVIOUR</text>
      {exits.map((t, i) => (
        <g key={i}>
          <rect x={34 + i * 148} y="86" width="140" height="26" rx="13" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.4" />
          <text x={104 + i * 148} y="103" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">{t}</text>
        </g>
      ))}
      <text x="400" y="132" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2">each exit checkpoints state · emits usable partial output · records a specific reason · returns a branchable status</text>
      <text x="400" y="148" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">the caller can branch on the status without reading a stack trace</text>

      <text x="30" y="180" fill={COLORS.slate700} fontSize="9" fontWeight="700">FALL DOWN A LADDER, NOT OFF A CLIFF — EACH RUNG BOUNDED AND VISIBLE</text>
      {rungs.map((r, i) => (
        <g key={i}>
          <rect x={30 + i * 18} y={190 + i * 50} width="330" height="40" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="2" />
          <text x={44 + i * 18} y={206 + i * 50} fill={r.c} fontSize="8" fontWeight="700">{r.h}</text>
          <text x={44 + i * 18} y={220 + i * 50} fill={COLORS.slate600} fontSize="7.6">{r.l}</text>
          {i < 3 && <line x1={54 + i * 18} y1={230 + i * 50} x2={54 + i * 18} y2={238 + i * 50} stroke={COLORS.slate400} strokeWidth="1.5" markerEnd="url(#arrowGDDa)" />}
        </g>
      ))}

      <rect x="430" y="176" width="340" height="118" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="430" y="176" width="340" height="22" rx="10" fill={COLORS.red} />
      <text x="600" y="191" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE SILENT FALLBACK — THE SHARED FAILURE MODE</text>
      <text x="444" y="216" fill={COLORS.slate600} fontSize="8.3">the system quietly degrades to a worse path</text>
      <text x="444" y="230" fill={COLORS.slate600} fontSize="8.3">and reports ordinary success — nobody</text>
      <text x="444" y="244" fill={COLORS.slate600} fontSize="8.3">notices until quality has drifted for weeks</text>
      <text x="444" y="272" fill={COLORS.red} fontSize="8.2" fontWeight="700">record every fallback in the result and the metrics</text>

      <rect x="430" y="306" width="340" height="74" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="444" y="326" fill={COLORS.blue} fontSize="9" fontWeight="700">THE OPERABILITY TEST</text>
      <text x="444" y="342" fill={COLORS.slate600} fontSize="8.3">the person receiving a failed run knows what</text>
      <text x="444" y="356" fill={COLORS.slate600} fontSize="8.3">happened and what to do next — not a stack</text>
      <text x="444" y="370" fill={COLORS.slate600} fontSize="8.3">trace and a question</text>

      <rect x="30" y="396" width="740" height="50" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="416" textAnchor="middle" fill={COLORS.amber} fontSize="8.8" fontWeight="700">PARTIAL RESULTS BEAT NOTHING — WITH HONEST, MACHINE-READABLE LABELLING</text>
      <text x="400" y="432" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">an unlabelled sixty-of-a-hundred is consumed as complete and becomes a later data incident — state coverage, make it resumable</text>

      <rect x="30" y="458" width="740" height="46" rx="10" fill={COLORS.slate900} />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN OPERABLE SYSTEM FAILS WITH A REASON, PARTIAL OUTPUT AND A NEXT STEP</text>
      <text x="400" y="493" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">and for some tasks half an answer is a wrong answer, not a smaller one — decide that per feature, in advance</text>
    </DiagramFrame>
  );
};

export const AgentLoggingDiagram = () => {
  const fields = [
    'run and step identifiers, propagated everywhere',
    'the assembled prompt, per model call',
    'tool arguments as sent, and raw results',
    'model version and prompt version in play',
    'budget state at each step',
    'gate and policy decisions — allows as well as denials',
    'the final status, with its specific reason',
  ];
  const metrics = [
    ['success rate by task type', 'cost per success, as a distribution', 'steps per success · tail latency', 'failures counted by class'],
    ['per-tool volume and error rates', 'argument error rate per tool', 'budget trips and escalations', 'cache hit rate — drifts silently'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Log the full non-negotiable set in structured fields, treat the trace store as sensitive data, and scrub secrets at write time">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The trace is a copy of everything the model saw</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the assembled context includes retrieved documents, user data and tool results — handle the trace store like the data itself</text>

      <rect x="30" y="58" width="740" height="64" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="80" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">A FULL-FIDELITY TRACE STORE IS A COPY OF A LARGE SLICE OF YOUR SENSITIVE DATA</text>
      <text x="400" y="96" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">provisioned as observability infrastructure — give it the access controls and retention of the data, not of a log store</text>
      <text x="400" y="110" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">the set of people who can read production traces is defined, not incidental</text>

      <rect x="30" y="136" width="380" height="184" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="136" width="380" height="22" rx="10" fill={COLORS.emerald} />
      <text x="220" y="151" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">LOG — THE NON-NEGOTIABLE SET</text>
      {fields.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={171 + i * 14.5} r="2" fill={COLORS.emerald} />
          <text x="56" y={174 + i * 14.5} fill={COLORS.slate600} fontSize="8.1">{t}</text>
        </g>
      ))}
      <text x="44" y="288" fill={COLORS.emerald} fontSize="8" fontWeight="700">structured fields, not prose — aggregate questions</text>
      <text x="44" y="301" fill={COLORS.emerald} fontSize="8" fontWeight="700">need queries, not parsers</text>

      <rect x="430" y="136" width="340" height="184" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="430" y="136" width="340" height="22" rx="10" fill={COLORS.red} />
      <text x="600" y="151" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">NEVER IN THE LOG — AND NOT BY MEMORY</text>
      <text x="444" y="176" fill={COLORS.slate600} fontSize="8.3">credentials, tokens and keys are scrubbed</text>
      <text x="444" y="190" fill={COLORS.slate600} fontSize="8.3">structurally in the logging layer, not by</text>
      <text x="444" y="204" fill={COLORS.slate600} fontSize="8.3">remembering not to log them</text>
      <rect x="444" y="220" width="150" height="38" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.5" />
      <text x="519" y="235" textAnchor="middle" fill={COLORS.emerald} fontSize="7" fontWeight="700">WRITE-TIME REDACTION</text>
      <text x="519" y="248" textAnchor="middle" fill={COLORS.slate600} fontSize="7">never written, never exposed</text>
      <rect x="606" y="220" width="150" height="38" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.5" />
      <text x="681" y="235" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">READ-TIME FILTERING</text>
      <text x="681" y="248" textAnchor="middle" fill={COLORS.slate600} fontSize="7">a filter someone can bypass</text>
      <text x="600" y="284" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontStyle="italic">the redaction that matters is the one</text>
      <text x="600" y="297" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontStyle="italic">applied before storage</text>

      <rect x="30" y="332" width="740" height="94" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="332" width="740" height="22" rx="10" fill={COLORS.blue} />
      <text x="400" y="347" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">METRICS YOU CAN ANSWER FROM — ONE SCREEN, LOOKED AT WEEKLY</text>
      {metrics.map((row, ri) => (
        <g key={ri}>
          {row.map((t, i) => (
            <g key={i}>
              <rect x={44 + i * 182} y={364 + ri * 28} width="176" height="22" rx="11" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
              <text x={132 + i * 182} y={378 + ri * 28} textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{t}</text>
            </g>
          ))}
        </g>
      ))}

      <rect x="30" y="438" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">WRITE FOR THE PERSON WHO DID NOT BUILD IT, READING AT THREE IN THE MORNING</text>
      <text x="400" y="475" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">under-logging produces incidents nobody can explain; over-retention copies data nobody should be holding</text>
    </DiagramFrame>
  );
};

export const ApprovalGateDesignDiagram = () => {
  const levers = [
    { c: COLORS.blue, h: 'VOLUME — KEEP THE LIST SHORT', l: ['every gate you remove makes the', 'remaining ones more likely to be', 'read — review the list as a set,', 'not grown one incident at a time'] },
    { c: COLORS.emerald, h: 'TIMING — PREFER ASYNCHRONOUS', l: ['checkpoint the run and resume when', 'the decision arrives — removing the', 'time pressure is worth the state-', 'management work it requires'] },
    { c: COLORS.cyan, h: 'GROUPING — BATCH HONESTLY', l: ['related approvals as one decision', 'with shared context — but only', 'where it is genuinely one decision,', 'not five inside a single click'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="A gate is an interruption someone must absorb — cut volume, go asynchronous, default timeouts to hold, and make rejection cheap">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Design the gate for the fortieth request, not the first</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">approving without reading is the rational response to a queue that is almost always fine — design against that, not against people</text>

      <rect x="30" y="58" width="740" height="90" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="78" textAnchor="middle" fill={COLORS.slate700} fontSize="9" fontWeight="700">ONE WEEK OF THE QUEUE — THE DANGEROUS REQUEST LOOKS LIKE EVERYTHING ELSE</text>
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i}>
          <rect x={44 + i * 72} y="90" width="64" height="30" rx="6" fill={COLORS.white} stroke={i === 6 ? COLORS.red : COLORS.slate300} strokeWidth={i === 6 ? 1.8 : 1.2} />
          <text x={76 + i * 72} y="109" textAnchor="middle" fill={i === 6 ? COLORS.red : COLORS.slate500} fontSize="7.2">{i === 6 ? 'wrong' : 'fine'}</text>
        </g>
      ))}
      <text x="400" y="138" textAnchor="middle" fill={COLORS.slate600} fontSize="8" fontStyle="italic">the approver is busy, has seen forty of these this week, and is being asked for one more</text>

      {levers.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="160" width="236" height="94" rx="9" fill={COLORS.white} stroke={c.c} strokeWidth="2" />
          <rect x={30 + i * 252} y="160" width="236" height="20" rx="9" fill={c.c} />
          <text x={148 + i * 252} y="174" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => (
            <text key={j} x={42 + i * 252} y={194 + j * 13} fill={COLORS.slate600} fontSize="8">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="266" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="44" y="286" fill={COLORS.red} fontSize="8.4" fontWeight="700">TIMEOUT → PROCEED — THE GATE IS NOW A DELAY</text>
      <text x="44" y="302" fill={COLORS.slate600} fontSize="8.2">chosen quietly, because a blocked queue is visible</text>
      <text x="44" y="315" fill={COLORS.slate600} fontSize="8.2">and a skipped approval is not</text>
      <rect x="410" y="266" width="360" height="64" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="424" y="286" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">TIMEOUT → HOLD, WITH THE STATE PRESERVED</text>
      <text x="424" y="302" fill={COLORS.slate600} fontSize="8.2">the honest default — the run parks at its</text>
      <text x="424" y="315" fill={COLORS.slate600} fontSize="8.2">checkpoint and the decision stays available</text>

      <rect x="30" y="342" width="740" height="68" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="362" textAnchor="middle" fill={COLORS.amber} fontSize="8.6" fontWeight="700">MAKE SAYING NO CHEAP — IF DECLINING KILLS THE RUN, APPROVERS SAY YES</text>
      <rect x="44" y="374" width="350" height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
      <text x="219" y="389" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">decline with a reason — returned to the agent as an observation</text>
      <rect x="410" y="374" width="350" height="24" rx="12" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
      <text x="585" y="389" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">modify, then approve — the nearly-right case is the common case</text>

      <rect x="30" y="422" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="442" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A GATE APPROVED ALMOST ALWAYS, IN A COUPLE OF SECONDS, IS NOT FUNCTIONING</text>
      <text x="400" y="459" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">whatever the policy says — measure approval rate and decision latency per gate, and treat them as engagement metrics</text>
    </DiagramFrame>
  );
};

export const EscalationOutcomeDiagram = () => {
  const flow = [
    { c: COLORS.blue, h: 'THE RUN BLOCKS', l: 'rather than improvising' },
    { c: COLORS.cyan, h: 'IT ESCALATES', l: 'a schema\'d tool call' },
    { c: COLORS.blue, h: 'A PERSON DECIDES', l: 'routed by decision type' },
    { c: COLORS.emerald, h: 'THE RUN RESUMES', l: 'from its checkpoint' },
  ];
  const schema = ['what it was trying to do', 'what it has established so far', 'what is blocking it', 'what it would do next, if told to proceed', 'what it needs from a person'];
  const handover = ['the goal, in the user\'s original words', 'what was done, and the state it leaves', 'the specific question being asked', 'the options seen, with the agent\'s pick and why', 'a link to the full trace, for whoever wants it'];
  const triggers = ['missing precondition · required record absent · action out of scope', 'value over threshold · stuck-detector fired · budget near exhaustion', 'a verification step failed twice'];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Give the agent a schema'd escalation tool with runtime triggers as the floor, hand over context rather than a notification, and count escalation as success">
      <defs>
        <marker id="arrowEODa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
        <marker id="arrowEODb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Asking for help is an action, not a failure</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an agent with no way to stop and ask will improvise, because continuing is the only action available to it</text>

      {flow.map((f, i) => (
        <g key={i}>
          <rect x={30 + i * 194} y="58" width="170" height="56" rx="9" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <text x={115 + i * 194} y="81" textAnchor="middle" fill={f.c} fontSize="8.4" fontWeight="700">{f.h}</text>
          <text x={115 + i * 194} y="97" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">{f.l}</text>
          {i < 3 && <line x1={202 + i * 194} y1="86" x2={220 + i * 194} y2="86" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowEODa)" />}
        </g>
      ))}
      <path d="M 697 114 L 697 132 L 115 132 L 115 122" fill="none" stroke={COLORS.emerald} strokeWidth="1.3" markerEnd="url(#arrowEODb)" />
      <text x="400" y="146" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">the answer resumes the checkpointed run — it never requires starting a fresh one</text>

      <rect x="30" y="158" width="360" height="148" rx="10" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <rect x="30" y="158" width="360" height="22" rx="10" fill={COLORS.cyan} />
      <text x="210" y="173" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE ESCALATION SCHEMA — WHAT IT SENDS</text>
      {schema.map((t, i) => (
        <g key={i}>
          <circle cx="48" cy={195 + i * 15} r="2" fill={COLORS.cyan} />
          <text x="56" y={198 + i * 15} fill={COLORS.slate600} fontSize="8.1">{t}</text>
        </g>
      ))}
      <text x="210" y="290" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">the schema is what makes asking a legitimate outcome</text>

      <rect x="410" y="158" width="360" height="148" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="158" width="360" height="22" rx="10" fill={COLORS.blue} />
      <text x="590" y="173" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE HANDOVER — A DELIVERABLE, NOT A PING</text>
      {handover.map((t, i) => (
        <g key={i}>
          <circle cx="428" cy={195 + i * 15} r="2" fill={COLORS.blue} />
          <text x="436" y={198 + i * 15} fill={COLORS.slate600} fontSize="8.1">{t}</text>
        </g>
      ))}
      <text x="590" y="290" textAnchor="middle" fill={COLORS.slate600} fontSize="7.9" fontStyle="italic">a bare notification moves the work without the context</text>

      <rect x="30" y="320" width="430" height="112" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="320" width="430" height="22" rx="10" fill={COLORS.amber} />
      <text x="245" y="335" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">TRIGGERS ARE STRUCTURAL FIRST — THE RUNTIME IS THE FLOOR</text>
      {triggers.map((t, i) => (
        <text key={i} x="44" y={356 + i * 14} fill={COLORS.slate600} fontSize="8.2">{t}</text>
      ))}
      <text x="44" y="402" fill={COLORS.amber} fontSize="8.2" fontWeight="700">the model is an added sensor — best for an instruction</text>
      <text x="44" y="415" fill={COLORS.amber} fontSize="8.2" fontWeight="700">with two readings that no rule could anticipate</text>

      <rect x="480" y="320" width="290" height="112" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="480" y="320" width="290" height="22" rx="10" fill={COLORS.red} />
      <text x="625" y="335" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">A ZERO RATE IS A WARNING</text>
      <text x="494" y="358" fill={COLORS.slate600} fontSize="8.2">count escalation separately from</text>
      <text x="494" y="372" fill={COLORS.slate600} fontSize="8.2">failure — or prompt authors and the</text>
      <text x="494" y="386" fill={COLORS.slate600} fontSize="8.2">model both learn to avoid it</text>
      <text x="494" y="406" fill={COLORS.red} fontSize="8.2" fontWeight="700">zero means unreachable,</text>
      <text x="494" y="419" fill={COLORS.red} fontSize="8.2" fontWeight="700">not unnecessary</text>

      <rect x="30" y="444" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ESCALATION IS A LEGITIMATE OUTCOME — TREAT IT AS SUCCESS IN THE METRICS</text>
      <text x="400" y="481" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">and set an expiry on waiting escalations — a run parked indefinitely is a resource leak and a stale question nobody answers</text>
    </DiagramFrame>
  );
};
