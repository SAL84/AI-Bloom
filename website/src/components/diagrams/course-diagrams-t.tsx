import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AGENT ENGINEERING — MODULES 3-4: VERIFICATION, DELEGATION, OPERATIONS ============ */

export const LoopVerificationDiagram = () => {
  const boxes = [
    { x: 50, c: COLORS.blue, h: 'THE AGENT ACTS', l: ['an edit, a write, a record', 'update — state has changed'] },
    { x: 298, c: COLORS.emerald, h: 'A CHEAP DETERMINISTIC CHECK', l: ['re-read the record, run the', 'tests, parse the file, diff'] },
    { x: 546, c: COLORS.cyan, h: 'APPENDED AS AN OBSERVATION', l: ['silent failure becomes a', 'correction in the same run'] },
  ];
  const ladder = [
    { x: 44, c: COLORS.emerald, h: '1 · DETERMINISTIC CODE', l: ['compiler, linter, validator, tests,', 'checksum — definitive and free'] },
    { x: 286, c: COLORS.blue, h: '2 · JUDGED, WITH A RUBRIC', l: ['where the property is real', 'but not computable'] },
    { x: 528, c: COLORS.amber, h: '3 · A HUMAN', l: ['for the judgement that is', 'genuinely irreducible'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 518" caption="Check work deterministically inside the loop after every state change — completion claims are the weakest evidence available">
      <defs>
        <marker id="arrowVILa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Verification is built into the loop, not requested of the model</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">an instruction to verify is weakly followed and unauditable — a harness check runs whether the model remembers or not</text>

      <rect x="30" y="58" width="740" height="134" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="740" height="24" rx="10" fill={COLORS.emerald} />
      <text x="400" y="74" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">AFTER ANY ACTION THAT CHANGES STATE, THE RUNTIME CHECKS</text>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y="96" width="204" height="58" rx="8" fill={COLORS.slate50} stroke={b.c} strokeWidth="1.8" />
          <text x={b.x + 102} y="114" textAnchor="middle" fill={b.c} fontSize="8.2" fontWeight="700">{b.h}</text>
          {b.l.map((t, j) => (
            <text key={j} x={b.x + 102} y={128 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.8">{t}</text>
          ))}
          {i < 2 && <line x1={b.x + 208} y1="125" x2={b.x + 244} y2="125" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowVILa)" />}
        </g>
      ))}
      <path d="M 648 158 L 648 172 L 152 172 L 152 162" fill="none" stroke={COLORS.emerald} strokeWidth="1.2" markerEnd="url(#arrowVILa)" />
      <text x="400" y="184" textAnchor="middle" fill={COLORS.emerald} fontSize="7.8" fontStyle="italic">one extra tool execution, and the run responds to its own failures</text>

      <rect x="30" y="208" width="360" height="112" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="208" width="360" height="22" rx="10" fill={COLORS.emerald} />
      <text x="210" y="223" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">SELF-CRITIQUE — WHERE IT HELPS</text>
      <text x="44" y="246" fill={COLORS.slate600} fontSize="8.3">the check is a different operation from the</text>
      <text x="44" y="259" fill={COLORS.slate600} fontSize="8.3">generating — a rubric over an argument, an</text>
      <text x="44" y="272" fill={COLORS.slate600} fontSize="8.3">unhandled case in code, a question that was</text>
      <text x="44" y="285" fill={COLORS.slate600} fontSize="8.3">only half-answered</text>

      <rect x="410" y="208" width="360" height="112" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="208" width="360" height="22" rx="10" fill={COLORS.red} />
      <text x="590" y="223" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WHERE IT IS CLOSE TO WORTHLESS</text>
      <text x="424" y="246" fill={COLORS.slate600} fontSize="8.3">the error and the check share the same</text>
      <text x="424" y="259" fill={COLORS.slate600} fontSize="8.3">misunderstanding — most factual errors, every</text>
      <text x="424" y="272" fill={COLORS.slate600} fontSize="8.3">misread goal; the reviewer works from the</text>
      <text x="424" y="285" fill={COLORS.slate600} fontSize="8.3">context that produced the mistake</text>

      <text x="400" y="336" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4" fontStyle="italic">give the critique a checklist, not "does this look right" — for higher stakes, run it in a fresh call over the artefact alone</text>

      <rect x="30" y="352" width="740" height="100" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="352" width="740" height="22" rx="10" fill={COLORS.blue} />
      <text x="400" y="367" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">REACH FOR CHECKERS IN THIS ORDER</text>
      {ladder.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="384" width="220" height="56" rx="8" fill={COLORS.slate50} stroke={s.c} strokeWidth="1.8" />
          <text x={s.x + 110} y="401" textAnchor="middle" fill={s.c} fontSize="8" fontWeight="700">{s.h}</text>
          {s.l.map((t, j) => (
            <text key={j} x={s.x + 110} y={415 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">{t}</text>
          ))}
          {i < 2 && <line x1={s.x + 224} y1="412" x2={s.x + 238} y2="412" stroke={COLORS.emerald} strokeWidth="1.5" markerEnd="url(#arrowVILa)" />}
        </g>
      ))}

      <rect x="30" y="462" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="482" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ASK WHAT CODE COULD ESTABLISH BEFORE ASKING WHAT PROMPT COULD ESTABLISH</text>
      <text x="400" y="498" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">teams skip to the judged middle option and pay model tokens for questions a regular expression would settle</text>
    </DiagramFrame>
  );
};

export const SubAgentDelegationDiagram = () => {
  const buys = [
    { h: 'A SEPARATE CONTEXT', l: ['the worker reads twenty', 'files and burns a big', 'budget, then returns three', 'paragraphs — the parent', 'stays clean for decisions'] },
    { h: 'PARALLELISM, SECOND', l: ['independent subtasks', 'fanned out together'] },
  ];
  const adds = [
    ['confident wrong answers,', 'trusted by a parent that', 'cannot check them'],
    ['fan-out waits on the', 'slowest child'],
    ['parallel writes conflict as', 'state inconsistencies'],
    ['budgets multiply unless', 'children draw from the', "parent's allowance"],
    ['debugging is two levels', 'deep without nested traces'],
  ];
  const brief = ['goal', 'constraints', 'success criterion', 'budget'];
  const ret = ['the fields the', 'parent needs', 'status: done,', 'partial, failed'];
  return (
    <DiagramFrame viewBox="0 0 800 480" caption="A sub-agent reliably buys a separate context window and nothing else — make the brief and the return a structured contract">
      <defs>
        <marker id="arrowSBDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
        <marker id="arrowSBDb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.cyan} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Delegation buys a context window, not intelligence</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the same model does the work — with less shared context and a lossy interface in the middle</text>

      <rect x="30" y="58" width="200" height="250" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="200" height="22" rx="10" fill={COLORS.emerald} />
      <text x="130" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WHAT IT RELIABLY BUYS</text>
      <text x="44" y="98" fill={COLORS.emerald} fontSize="8" fontWeight="700">{buys[0].h}</text>
      {buys[0].l.map((t, i) => (
        <text key={i} x="44" y={112 + i * 12} fill={COLORS.slate600} fontSize="7.8">{t}</text>
      ))}
      <text x="44" y="184" fill={COLORS.emerald} fontSize="8" fontWeight="700">{buys[1].h}</text>
      {buys[1].l.map((t, i) => (
        <text key={i} x="44" y={198 + i * 12} fill={COLORS.slate600} fontSize="7.8">{t}</text>
      ))}

      <rect x="570" y="58" width="200" height="250" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="570" y="58" width="200" height="22" rx="10" fill={COLORS.red} />
      <text x="670" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">WHAT IT ADDS</text>
      {adds.map((group, gi) => {
        const starts = [98, 140, 170, 200, 242];
        return (
          <g key={gi}>
            <circle cx="580" cy={starts[gi] - 3} r="2.2" fill={COLORS.red} />
            {group.map((t, i) => (
              <text key={i} x="588" y={starts[gi] + i * 12} fill={COLORS.slate600} fontSize="7.8">{t}</text>
            ))}
          </g>
        );
      })}

      <rect x="250" y="70" width="300" height="52" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="92" textAnchor="middle" fill={COLORS.blue} fontSize="9.5" fontWeight="700">PARENT — THE ONE ACCOUNTABLE OWNER</text>
      <text x="400" y="108" textAnchor="middle" fill={COLORS.slate600} fontSize="8">holds the decisions, verifies the returns</text>

      <line x1="282" y1="126" x2="282" y2="236" stroke={COLORS.blue} strokeWidth="1.5" markerEnd="url(#arrowSBDa)" />
      <line x1="518" y1="236" x2="518" y2="126" stroke={COLORS.cyan} strokeWidth="1.5" markerEnd="url(#arrowSBDb)" />

      <rect x="306" y="138" width="118" height="94" rx="8" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.5" />
      <text x="365" y="153" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">THE BRIEF — DATA</text>
      {brief.map((t, i) => (
        <g key={i}>
          <circle cx="316" cy={166 + i * 13} r="2" fill={COLORS.blue} />
          <text x="323" y={169 + i * 13} fill={COLORS.slate700} fontSize="7.6">{t}</text>
        </g>
      ))}
      <rect x="436" y="138" width="118" height="94" rx="8" fill={COLORS.slate50} stroke={COLORS.cyan} strokeWidth="1.5" />
      <text x="495" y="153" textAnchor="middle" fill={COLORS.cyan} fontSize="7.4" fontWeight="700">RETURN — SCHEMA</text>
      {ret.map((t, i) => (
        <text key={i} x="448" y={169 + i * 13} fill={COLORS.slate700} fontSize="7.6">{t}</text>
      ))}

      <rect x="250" y="240" width="300" height="52" rx="9" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="262" textAnchor="middle" fill={COLORS.cyan} fontSize="9.5" fontWeight="700">SUB-AGENT — A COMPONENT</text>
      <text x="400" y="278" textAnchor="middle" fill={COLORS.slate600} fontSize="8">a defined contract, not a colleague</text>
      <text x="400" y="310" textAnchor="middle" fill={COLORS.slate600} fontSize="8.2" fontStyle="italic">same model, same tools — the system did not get smarter</text>

      <rect x="30" y="326" width="740" height="72" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="326" width="740" height="22" rx="10" fill={COLORS.amber} />
      <text x="400" y="341" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">MOST SUB-AGENT FAILURES ARE INTERFACE FAILURES</text>
      <text x="400" y="364" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">an under-specified brief produces work that is reasonable for the wrong task · a prose return re-imports the ambiguity</text>
      <text x="400" y="380" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">and full transcripts returned upward recreate the very bloat the split was meant to remove</text>

      <rect x="30" y="412" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="434" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DELEGATE WHERE CONTEXT ISOLATION EARNS IT — KEEP ONE ACCOUNTABLE PARENT</text>
      <text x="400" y="452" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">role metaphors are a poor guide to a better trajectory — a hierarchy with one parent beats a mesh of peers</text>
    </DiagramFrame>
  );
};

export const NonDeterminismDiagram = () => {
  const runs = [
    { y: 112, c: COLORS.blue, steps: [200, 260, 320, 380], label: '4 steps, done' },
    { y: 136, c: COLORS.cyan, steps: [190, 240, 290, 340, 390, 440], label: '6 steps, done' },
    { y: 160, c: COLORS.blue, steps: [210, 270, 330, 390, 450], label: '5 steps, done' },
  ];
  const practices = [
    { c: COLORS.emerald, h: 'MAKE RE-RUNNING SAFE', l: ['retry is the main recovery', 'path, so tool idempotency', 'is a reliability feature,', 'not only a correctness one'] },
    { c: COLORS.blue, h: 'ENFORCE INVARIANTS', l: ['never writes outside these', 'records, never exceeds this', 'spend — checked in the', 'runtime, not trusted'] },
    { c: COLORS.cyan, h: 'PREFER CHEAP RETRIES', l: ['over expensive attempts', 'that must therefore', 'succeed — failure becomes', 'a handled, ordinary event'] },
    { c: COLORS.amber, h: 'PIN WHAT YOU CAN', l: ['model, prompt, schema and', 'index versions recorded on', 'every run — to tell what', 'moved when behaviour shifts'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 472" caption="Non-determinism is survived, not eliminated — judge outcomes and invariants, and evaluate changes on distributions">
      <defs>
        <marker id="arrowNDEa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Two runs of the same task will legitimately differ</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">per-call sampling variance compounds into divergent trajectories — engineer for outcomes and invariants, not the path</text>

      <rect x="30" y="58" width="740" height="134" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="78" textAnchor="middle" fill={COLORS.slate700} fontSize="9.5" fontWeight="700">ONE TASK, THREE LEGITIMATE RUNS — JUDGED ONLY WHERE THEY END</text>
      <rect x="44" y="104" width="110" height="44" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.8" />
      <text x="99" y="122" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">the same task,</text>
      <text x="99" y="134" textAnchor="middle" fill={COLORS.slate700} fontSize="7.8">the same prompt</text>
      {runs.map((r, i) => (
        <g key={i}>
          <line x1="170" y1={r.y} x2="610" y2={r.y} stroke={COLORS.slate300} strokeWidth="1.2" markerEnd="url(#arrowNDEa)" />
          {r.steps.map((sx, j) => (
            <circle key={j} cx={sx} cy={r.y} r="4.5" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          ))}
          <text x="515" y={r.y - 6} fill={COLORS.slate500} fontSize="7.2">{r.label}</text>
        </g>
      ))}
      <rect x="616" y="100" width="140" height="72" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="686" y="122" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">OUTCOMES AND</text>
      <text x="686" y="134" textAnchor="middle" fill={COLORS.emerald} fontSize="8" fontWeight="700">INVARIANTS</text>
      <text x="686" y="150" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">the only stable</text>
      <text x="686" y="162" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">things to judge</text>
      <text x="400" y="208" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4" fontStyle="italic">reducing randomness narrows the spread but does not remove it — and any prompt or index change reshuffles behaviour</text>

      {practices.map((p, i) => (
        <g key={i}>
          <rect x={30 + i * 190} y="224" width="172" height="96" rx="9" fill={COLORS.white} stroke={p.c} strokeWidth="2" />
          <rect x={30 + i * 190} y="224" width="172" height="20" rx="9" fill={p.c} />
          <text x={116 + i * 190} y="238" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">{p.h}</text>
          {p.l.map((t, j) => (
            <text key={j} x={40 + i * 190} y={258 + j * 13} fill={COLORS.slate600} fontSize="7.9">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="336" width="740" height="54" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="356" textAnchor="middle" fill={COLORS.red} fontSize="8.8" fontWeight="700">ONE SUCCESSFUL TRY IS NOT EVIDENCE</text>
      <text x="400" y="374" textAnchor="middle" fill={COLORS.slate600} fontSize="8.4">the engineer runs the new prompt once, it works, it ships — and the regression ships with it</text>

      <rect x="30" y="404" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="426" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">JUDGE CHANGES ON DISTRIBUTIONS — PASS RATE AGAINST PASS RATE</text>
      <text x="400" y="444" textAnchor="middle" fill={COLORS.white} fontSize="9.3" opacity="0.9">build repeatable execution in from the start: environment reset, seeded fixtures, a runner over stored cases</text>
    </DiagramFrame>
  );
};

export const RunTracingDiagram = () => {
  const record = [
    'the assembled prompt, as sent —',
    'the most often missing field',
    '',
    'raw tool results — the external',
    'system has moved on',
    '',
    'arguments as sent · versions in',
    'play · budget state · which',
    'assembly branch ran',
  ];
  const omit = ['token counts you', 'can recompute', '', 'formatting you', 'can regenerate'];
  const tiers = [
    { c: COLORS.emerald, h: 'FULL FIDELITY', l: ['every failure, budget trip, gate', 'or escalation + a success sample'] },
    { c: COLORS.blue, h: 'SKELETONS FOR EVERYTHING', l: ['steps, tools, timings, cost,', 'outcome — what analysis runs on'] },
    { c: COLORS.cyan, h: 'RETENTION SET PER CLASS', l: ['after an incident, the window', 'you had is the window you have'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 496" caption="Model the run as a tree and store what cannot be reconstructed — above all the assembled prompt each call actually saw">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A trace you can reconstruct the run from</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">model the run as a tree of spans, and record everything that cannot be recovered afterwards</text>

      <rect x="30" y="58" width="330" height="250" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="58" width="330" height="22" rx="10" fill={COLORS.blue} />
      <text x="195" y="73" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">THE RUN IS A TREE, NOT A LOG</text>
      <rect x="44" y="92" width="180" height="20" rx="5" fill={COLORS.blue} />
      <text x="52" y="105" fill={COLORS.white} fontSize="7.8">run 7c4f — one id, everywhere</text>
      <line x1="54" y1="112" x2="54" y2="266" stroke={COLORS.slate300} strokeWidth="1.2" />
      <line x1="54" y1="129" x2="64" y2="129" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="64" y="120" width="110" height="18" rx="4" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
      <text x="119" y="132" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">step 1</text>
      <line x1="74" y1="138" x2="74" y2="174" stroke={COLORS.slate300} strokeWidth="1.2" />
      <line x1="74" y1="152" x2="84" y2="152" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="84" y="144" width="120" height="16" rx="4" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="144" y="155" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">model call</text>
      <line x1="74" y1="174" x2="84" y2="174" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="84" y="166" width="120" height="16" rx="4" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="144" y="177" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">tool: search</text>
      <line x1="54" y1="201" x2="64" y2="201" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="64" y="192" width="110" height="18" rx="4" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
      <text x="119" y="204" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">step 2</text>
      <line x1="74" y1="210" x2="74" y2="266" stroke={COLORS.slate300} strokeWidth="1.2" />
      <line x1="74" y1="222" x2="84" y2="222" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="84" y="214" width="120" height="16" rx="4" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="144" y="225" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">tool: update</text>
      <line x1="94" y1="230" x2="94" y2="244" stroke={COLORS.slate300} strokeWidth="1.2" />
      <line x1="94" y1="244" x2="104" y2="244" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="104" y="236" width="100" height="16" rx="4" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.4" />
      <text x="154" y="247" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">retry</text>
      <text x="214" y="247" fill={COLORS.slate500} fontSize="7.2">nests under the call it repeats</text>
      <line x1="74" y1="266" x2="84" y2="266" stroke={COLORS.slate300} strokeWidth="1.2" />
      <rect x="84" y="258" width="120" height="16" rx="4" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.4" />
      <text x="144" y="269" textAnchor="middle" fill={COLORS.cyan} fontSize="7.4">sub-agent</text>
      <text x="214" y="269" fill={COLORS.slate500} fontSize="7.2">nests under the spawning step</text>
      <text x="44" y="294" fill={COLORS.slate600} fontSize="7.8" fontStyle="italic">propagate the id into every downstream system the tools touch</text>

      <rect x="380" y="58" width="390" height="250" rx="10" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="380" y="58" width="390" height="24" rx="10" fill={COLORS.emerald} />
      <text x="575" y="74" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">STORE WHAT CANNOT BE RECONSTRUCTED AFTERWARDS</text>
      <text x="394" y="100" fill={COLORS.emerald} fontSize="8.2" fontWeight="700">UNRECOVERABLE — RECORD IT</text>
      {record.map((t, i) => (
        t ? <text key={i} x="398" y={118 + i * 13} fill={COLORS.slate600} fontSize="8">{t}</text> : null
      ))}
      <line x1="600" y1="92" x2="600" y2="228" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="616" y="100" fill={COLORS.slate500} fontSize="8.2" fontWeight="700">DERIVABLE — OMIT</text>
      {omit.map((t, i) => (
        t ? <text key={i} x="616" y={118 + i * 13} fill={COLORS.slate500} fontSize="8">{t}</text> : null
      ))}
      <text x="575" y="256" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontStyle="italic">store the inputs to decisions, not the narrative of them</text>
      <text x="575" y="274" textAnchor="middle" fill={COLORS.slate500} fontSize="8">the missing assembled prompt is what most often ends an investigation</text>

      <rect x="30" y="324" width="740" height="100" rx="10" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="324" width="740" height="22" rx="10" fill={COLORS.amber} />
      <text x="400" y="339" textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">TIER THE VOLUME BEFORE LAUNCH — FULL TRACES CAN OUTWEIGH THE WORK PRODUCT</text>
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x={44 + i * 246} y="356" width="232" height="56" rx="8" fill={COLORS.slate50} stroke={t.c} strokeWidth="1.5" />
          <text x={160 + i * 246} y="372" textAnchor="middle" fill={t.c} fontSize="7.8" fontWeight="700">{t.h}</text>
          {t.l.map((s, j) => (
            <text key={j} x={160 + i * 246} y={386 + j * 12} textAnchor="middle" fill={COLORS.slate600} fontSize="7.5">{s}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="438" width="740" height="52" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A FLAT LOG FROM A CONCURRENT AGENT DOES NOT GET READ</text>
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the tree lets you collapse forty steps to a shape, expand the step that went wrong, and see the sub-agent at once</text>
    </DiagramFrame>
  );
};

export const AgentFailureTaxonomyDiagram = () => {
  const families = [
    {
      x: 30, y: 58, c: COLORS.blue, h: 'THE TWO MOST COMMON — SELECTION AND ARGUMENTS',
      minis: [
        { c: COLORS.blue, h: 'WRONG TOOL — INDICTS THE TOOLSET', l: ["overlapping capabilities, a missing 'when", "not to use this', or an absent tool"] },
        { c: COLORS.blue, h: 'RIGHT TOOL, WRONG ARGUMENTS — THE SCHEMA', l: ['loose types, unstated formats and units,', 'undescribed fields invite plausible wrong values'] },
      ],
      note: 'one tool usually dominates the metric — the fix is one description',
    },
    {
      x: 410, y: 58, c: COLORS.cyan, h: 'INVENTED CALLS — SIGNALS ABOUT YOUR CONTEXT',
      minis: [
        { c: COLORS.cyan, h: 'HALLUCINATED TOOL — A SPECIFICATION', l: ['the invented name describes the capability', 'the agent needed and was not given'] },
        { c: COLORS.cyan, h: 'INVENTED PARAMETER — A SCHEMA GAP', l: ['the schema cannot express something', 'the task genuinely requires'] },
      ],
      note: 'validate against the registry before dispatch, and count them',
    },
    {
      x: 30, y: 262, c: COLORS.amber, h: 'TERMINATION — COMPLETION LEFT TO JUDGEMENT',
      minis: [
        { c: COLORS.red, h: 'PREMATURE STOP — THE QUIET ONE', l: ['success declared on partial work — surfaces', 'downstream as a data problem, unattributed'] },
        { c: COLORS.amber, h: 'INFINITE LOOP — THE LOUD ONE', l: ['repeated action fingerprints, a flat', 'progress predicate, a tripped budget'] },
      ],
      note: 'checkable completion, evidence-carrying terminals, in-loop detection',
    },
    {
      x: 410, y: 262, c: COLORS.red, h: 'CONTEXT — THE CAUSE FAR FROM THE SYMPTOM',
      minis: [
        { c: COLORS.red, h: 'CONTEXT EXHAUSTION — MID-RUN DECAY', l: ['quality falls as the window fills — track', 'context size per step; find the threshold'] },
        { c: COLORS.red, h: 'COMPOUNDING PREMISE ERROR', l: ['step two read the wrong record; every later', 'step worked competently on a false premise'] },
      ],
      note: 'assert after premise-establishing steps, so the run fails where it broke',
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Classify failures before fixing them — each class indicts a specific component and carries its own metric">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Eight failures, four families — each points at a different fix</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">classify before you fix: each class indicts a specific part of the system, and the metric that finds it differs</text>

      {families.map((f, fi) => (
        <g key={fi}>
          <rect x={f.x} y={f.y} width="360" height="190" rx="10" fill={COLORS.white} stroke={f.c} strokeWidth="2" />
          <rect x={f.x} y={f.y} width="360" height="24" rx="10" fill={f.c} />
          <text x={f.x + 180} y={f.y + 16} textAnchor="middle" fill={COLORS.white} fontSize="8.6" fontWeight="700">{f.h}</text>
          {f.minis.map((m, mi) => (
            <g key={mi}>
              <rect x={f.x + 12} y={f.y + 34 + mi * 66} width="336" height="58" rx="8" fill={COLORS.slate50} stroke={m.c} strokeWidth="1.4" />
              <text x={f.x + 24} y={f.y + 52 + mi * 66} fill={m.c} fontSize="8" fontWeight="700">{m.h}</text>
              <text x={f.x + 24} y={f.y + 66 + mi * 66} fill={COLORS.slate600} fontSize="7.8">{m.l[0]}</text>
              <text x={f.x + 24} y={f.y + 78 + mi * 66} fill={COLORS.slate600} fontSize="7.8">{m.l[1]}</text>
            </g>
          ))}
          <text x={f.x + 180} y={f.y + 180} textAnchor="middle" fill={f.c} fontSize="7.6" fontStyle="italic">{f.note}</text>
        </g>
      ))}

      <rect x="30" y="464" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="484" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">COUNT FAILURES BY CLASS — THAT IS WHAT TURNS A TAXONOMY INTO A WORK QUEUE</text>
      <text x="400" y="500" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the aggregate failure rate hides all of this; the class distribution tells you what to fix next</text>
    </DiagramFrame>
  );
};
