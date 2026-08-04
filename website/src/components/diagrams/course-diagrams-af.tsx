import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ SECURING AI SYSTEMS — MODULE 4 (TESTING, RESPONSE, GOVERNANCE) ============ */

export const SecurityRegressionCIDiagram = () => {
  const invariants = [
    '· no privileged call after untrusted ingestion',
    '· no canary record in any output',
    '· no request to a non-allowlisted destination',
  ];
  const structural = [
    ['tool list matches the', 'approved manifest'],
    ['schema text hashes', 'match approved values'],
    ['credential scopes stay', 'inside the declared set'],
    ['egress allowlist growth', 'needs a change record'],
    ['privileged interface', 'accepts typed fields only'],
  ];
  const gating = [
    { c: COLORS.emerald, h: 'invariant or structural failure', b: 'blocks — a known-closed path reopened' },
    { c: COLORS.amber, h: 'threshold movement', b: 'review, not auto-block — models move' },
    { c: COLORS.red, h: 'a suite that cries wolf', b: 'gets bypassed — you lose the control' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="Every accepted finding becomes a CI test against the condition — zero tolerance for invariants, thresholds with trend for probabilistic properties, and cheap structural checks built first.">
      <defs>
        <marker id="arrowSRCa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Closed means a test now fails if the path reopens</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">write the test against the condition, not the attempt — the attempt gets patched, the condition recurs</text>

      <rect x="30" y="66" width="150" height="44" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="105" y="84" textAnchor="middle" fill={COLORS.slate700} fontSize="6.9" fontWeight="700">finding from the</text>
      <text x="105" y="97" textAnchor="middle" fill={COLORS.slate700} fontSize="6.9" fontWeight="700">exercise</text>
      <line x1="180" y1="88" x2="210" y2="88" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowSRCa)" />
      <rect x="216" y="66" width="180" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="306" y="84" textAnchor="middle" fill={COLORS.emerald} fontSize="6.9" fontWeight="700">regression test against</text>
      <text x="306" y="97" textAnchor="middle" fill={COLORS.emerald} fontSize="6.9" fontWeight="700">the condition</text>
      <line x1="396" y1="88" x2="426" y2="88" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowSRCa)" />
      <rect x="432" y="66" width="160" height="44" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="512" y="84" textAnchor="middle" fill={COLORS.slate700} fontSize="6.9" fontWeight="700">runs on every</text>
      <text x="512" y="97" textAnchor="middle" fill={COLORS.slate700} fontSize="6.9" fontWeight="700">change, in CI</text>
      <line x1="592" y1="88" x2="622" y2="88" stroke={COLORS.emerald} strokeWidth="1.6" markerEnd="url(#arrowSRCa)" />
      <rect x="628" y="66" width="142" height="44" rx="8" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="699" y="84" textAnchor="middle" fill={COLORS.slate700} fontSize="6.2">stays closed across</text>
      <text x="699" y="96" textAnchor="middle" fill={COLORS.slate700} fontSize="6.2">model + prompt changes</text>
      <text x="400" y="124" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">plant benign marker content in the test corpus → assert no privileged tool call appears in the trace</text>

      <rect x="30" y="136" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="136" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="149" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">INVARIANTS — ZERO ACROSS ALL RUNS</text>
      {invariants.map((t, i) => (
        <text key={i} x="46" y={170 + i * 15} fill={COLORS.slate600} fontSize="6.9">{t}</text>
      ))}
      <text x="210" y="226" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontStyle="italic">a single violation in any run is a real failure</text>

      <rect x="410" y="136" width="360" height="104" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="136" width="360" height="18" rx="9" fill={COLORS.amber} />
      <text x="590" y="149" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">PROBABILISTIC — THRESHOLD PLUS TREND</text>
      <text x="426" y="170" fill={COLORS.slate600} fontSize="6.9">· run each scenario several times, assert the aggregate</text>
      <text x="426" y="185" fill={COLORS.slate600} fontSize="6.9">· drifting from rarely to often succeeding is a</text>
      <text x="434" y="197" fill={COLORS.slate600} fontSize="6.9">regression even while the suite still passes</text>
      <text x="590" y="226" textAnchor="middle" fill={COLORS.amber} fontSize="6.8" fontStyle="italic">small and fast on every change beats comprehensive and weekly</text>

      <rect x="30" y="252" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="252" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="265" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">STRUCTURAL TESTS — NO MODEL CALL, NEVER FLAKY</text>
      {structural.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 146} y="278" width="140" height="36" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={116 + i * 146} y="292" textAnchor="middle" fill={COLORS.slate700} fontSize="6.2">{s[0]}</text>
          <text x={116 + i * 146} y="304" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{s[1]}</text>
        </g>
      ))}
      <text x="400" y="332" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontStyle="italic">milliseconds, never flaky — they catch the configuration drift behind most real exposure; build these first</text>

      <rect x="30" y="360" width="740" height="66" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="378" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHAT BLOCKS THE RELEASE</text>
      {gating.map((g, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="386" width="228" height="30" rx="6" fill={COLORS.white} stroke={g.c} strokeWidth="1.4" />
          <text x={160 + i * 240} y="398" textAnchor="middle" fill={g.c} fontSize="6.6" fontWeight="700">{g.h}</text>
          <text x={160 + i * 240} y="410" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{g.b}</text>
        </g>
      ))}

      <rect x="30" y="438" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">ASSERT ON TRACES — TOOLS, IDENTITY, DESTINATIONS — NOT ON OUTPUT TEXT THAT DRIFTS</text>
      <text x="400" y="475" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">keep markers controlled and rotated, and run against the deployed configuration, guardrails included</text>
    </DiagramFrame>
  );
};

export const AutoAdversarialTestingDiagram = () => {
  const shapes = [
    { h: 'PROBE LIBRARY', b: ['maintained attempts across', 'known attack categories'] },
    { h: 'MUTATION ENGINE', b: ['varies phrasing, framing,', 'encoding, language at volume'] },
    { h: 'ATTACKER-MODEL LOOP', b: ['generates, observes success,', 'iterates against your system'] },
  ];
  const human = [
    ['the business-logic path that needs', 'knowing what the system is for'],
    ['mechanisms nobody has described', '— outside every probe library'],
    ['outputs catastrophic in your', 'domain, unremarkable elsewhere'],
  ];
  const limits = [
    { h: 'the success judge bounds the pipeline', b: ['most pipelines grade success with a model —', 'its error rate bounds every reported number'] },
    { h: 'a clean suite can mean a tuned defence', b: ['tuned until the suite passes = tuned to the suite;', 'an adapting attacker is not constrained by it'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Automated adversarial testing gives breadth, repeatability and permanent regression over known attack classes — business-logic paths, undescribed mechanisms and domain-specific severity still need a human adversary.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Automation searches the space it was given</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">breadth and repeatability on every change — and a boundary a human adversary is not constrained by</text>

      {shapes.map((s, i) => (
        <g key={i}>
          <rect x={30 + i * 252} y="58" width="236" height="52" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
          <text x={148 + i * 252} y="74" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">{s.h}</text>
          <text x={148 + i * 252} y="88" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{s.b[0]}</text>
          <text x={148 + i * 252} y="100" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{s.b[1]}</text>
        </g>
      ))}

      <rect x="30" y="120" width="740" height="172" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="138" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">THE ATTACK SPACE AGAINST YOUR FEATURE — WHAT AUTOMATION REACHES</text>
      <rect x="60" y="150" width="420" height="130" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" strokeDasharray="6 4" />
      <text x="270" y="166" textAnchor="middle" fill={COLORS.blue} fontSize="7.4" fontWeight="700">WHERE AUTOMATION SEARCHES</text>
      <text x="270" y="182" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">novel instances within known, described categories —</text>
      <text x="270" y="194" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">not mechanisms nobody has written down</text>
      <rect x="76" y="204" width="388" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.1" />
      <text x="270" y="217" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">known injection phrasings · encodings · exfil patterns · past findings</text>
      <text x="270" y="244" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontStyle="italic">highest return: replay the conditions of every past finding, on every change, forever</text>
      <text x="270" y="258" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">a clean run means known paths stayed closed — not that no path exists</text>
      <text x="632" y="166" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">WHAT ONLY A HUMAN FINDS</text>
      {human.map((h, i) => (
        <g key={i}>
          <rect x="508" y={176 + i * 36} width="248" height="30" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.3" />
          <text x="632" y={188 + i * 36} textAnchor="middle" fill={COLORS.slate700} fontSize="6.3">{h[0]}</text>
          <text x="632" y={200 + i * 36} textAnchor="middle" fill={COLORS.slate600} fontSize="6.3">{h[1]}</text>
        </g>
      ))}

      <rect x="30" y="302" width="740" height="74" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="320" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">TWO MORE LIMITS LIVE INSIDE THE NUMBERS</text>
      {limits.map((l, i) => (
        <g key={i}>
          <rect x={46 + i * 372} y="328" width="352" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={222 + i * 372} y="341" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{l.h}</text>
          <text x={222 + i * 372} y="352" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{l.b[0]}</text>
          <text x={222 + i * 372} y="362" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{l.b[1]}</text>
        </g>
      ))}

      <rect x="30" y="386" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="400" y="403" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">REPORT COVERAGE, NOT EFFORT</text>
      <text x="400" y="417" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">attempt counts measure effort spent — report categories exercised per component, rates, configuration</text>
      <text x="400" y="430" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">name what was not covered; keep human and automated results in separate sections</text>

      <rect x="30" y="450" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AUTOMATION KEEPS CLOSED PATHS CLOSED — HUMANS FIND THE ONES NOBODY DESCRIBED</text>
      <text x="400" y="487" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">an automated-only report says nobody has examined this system specifically — usually the bigger finding</text>
    </DiagramFrame>
  );
};

export const AIIncidentDetectionDiagram = () => {
  const absent = [
    '✕ no malware, no anomalous process',
    '✕ no credential brute force',
    '✕ no failed or denied requests',
    '✕ nothing host or network telemetry flags',
  ];
  const behavioural = [
    '· an answer contains data the user should not see',
    '· a record modified nobody can account for',
    '· a message sent that no one wrote',
    '· a destination contacted for no reason',
  ];
  const signals = [
    ['privileged call after external', 'ingestion, same run — highest value'],
    ['first-seen outbound', 'destination, per agent'],
    ['canary records that should', 'never move — cheap, unambiguous'],
    ['retrieval unrelated to the', 'user’s request'],
    ['rate shifts: refusals, errors,', 'approvals, run length'],
    ['cross-user content', 'appearing in a session'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="AI incidents present as permitted, successful actions with behavioural symptoms, so detection lives in your traces — and the first signal is usually a person, who must reach security rather than a support queue.">
      <defs>
        <marker id="arrowAIDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
        <marker id="arrowAIDb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Nothing failed, and that is the problem</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the mechanism is persuasion, not intrusion — every call is authenticated, authorised, and successful</text>

      <rect x="30" y="58" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CLASSIC IOCs — ABSENT</text>
      {absent.map((t, i) => (
        <text key={i} x="46" y={92 + i * 15} fill={COLORS.slate600} fontSize="6.9">{t}</text>
      ))}
      <text x="210" y="160" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">the agent was permitted to do what it did</text>

      <rect x="410" y="58" width="360" height="112" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="18" rx="9" fill={COLORS.blue} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT ACTUALLY SURFACES — BEHAVIOUR</text>
      {behavioural.map((t, i) => (
        <text key={i} x="426" y={92 + i * 15} fill={COLORS.slate600} fontSize="6.9">{t}</text>
      ))}
      <text x="590" y="160" textAnchor="middle" fill={COLORS.blue} fontSize="6.8" fontStyle="italic">semantic symptoms, visible only in your traces</text>

      <rect x="30" y="182" width="740" height="124" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="182" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="195" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">SIGNALS WORTH BUILDING — SEQUENCE AND DESTINATION, NOT CONTENT</text>
      {signals.map((s, i) => (
        <g key={i}>
          <rect x={46 + (i % 3) * 246} y={208 + Math.floor(i / 3) * 38} width="232" height="32" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x={162 + (i % 3) * 246} y={221 + Math.floor(i / 3) * 38} textAnchor="middle" fill={COLORS.slate700} fontSize="6.4" fontWeight="700">{s[0]}</text>
          <text x={162 + (i % 3) * 246} y={233 + Math.floor(i / 3) * 38} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{s[1]}</text>
        </g>
      ))}
      <text x="400" y="296" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">each signal needs an owner, a documented response, and a tuned threshold — or it is another unread dashboard</text>

      <rect x="30" y="318" width="740" height="112" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">PLAN FOR THE FIRST SIGNAL BEING A PERSON</text>
      <rect x="46" y="346" width="190" height="48" rx="7" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" />
      <text x="141" y="362" textAnchor="middle" fill={COLORS.slate700} fontSize="6.3">a user, a customer, a partner</text>
      <text x="141" y="374" textAnchor="middle" fill={COLORS.slate700} fontSize="6.3">or a researcher reports</text>
      <text x="141" y="386" textAnchor="middle" fill={COLORS.slate700} fontSize="6.3">odd behaviour</text>
      <line x1="236" y1="362" x2="294" y2="358" stroke={COLORS.red} strokeWidth="1.4" markerEnd="url(#arrowAIDb)" />
      <line x1="236" y1="382" x2="294" y2="406" stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowAIDa)" />
      <rect x="300" y="342" width="290" height="36" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="445" y="356" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">product support queue — logged as</text>
      <text x="445" y="368" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">a quality complaint; incident lost</text>
      <rect x="300" y="390" width="290" height="36" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.8" />
      <text x="445" y="404" textAnchor="middle" fill={COLORS.emerald} fontSize="6.4" fontWeight="700">security triage — trained to tell a</text>
      <text x="445" y="416" textAnchor="middle" fill={COLORS.emerald} fontSize="6.4" fontWeight="700">poor answer from signs of influence</text>
      <text x="604" y="356" fill={COLORS.red} fontSize="6.2" fontStyle="italic">the most common way real</text>
      <text x="604" y="367" fill={COLORS.red} fontSize="6.2" fontStyle="italic">incidents are lost</text>
      <text x="604" y="404" fill={COLORS.emerald} fontSize="6.2" fontStyle="italic">publish the researcher channel</text>
      <text x="604" y="415" fill={COLORS.emerald} fontSize="6.2" fontStyle="italic">before you need one</text>

      <rect x="30" y="444" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">DETECTION SITS ON YOUR TRACES — TRACE COMPLETENESS DECIDES IF IT IS POSSIBLE</text>
      <text x="400" y="481" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">route behavioural reports about AI features to security, not into a support queue</text>
    </DiagramFrame>
  );
};

export const ModelIncidentResponseDiagram = () => {
  const pairs = [
    { a: 'isolate the host — there is none', b: "narrow or revoke the agent's tools" },
    { a: 'kill the process — it will recur', b: 'quarantine the content source' },
    { a: 'patch the binary — no patch exists', b: 'close the capability path' },
  ];
  const phases: { c: string; h: string; lines: string[] }[] = [
    {
      c: COLORS.emerald, h: 'CONTAIN',
      lines: ['· narrow or revoke tools first', '· revoke agent credentials —', '  all their scope was reachable', '· disable or fall back to a', '  constrained mode', '· cut egress to involved', '  destinations', '· suspend memory reads and', '  writes for affected scopes'],
    },
    {
      c: COLORS.blue, h: 'SCOPE',
      lines: ['· find the distinguishing feature:', '  doc, chunk, sequence, destination', '· every run that touched it is', '  in scope, visible harm or not', '· window back to when content', '  could have been planted —', '  not to the report date', '· map runs to users, data read,', '  written, and exfiltrated'],
    },
    {
      c: COLORS.red, h: 'ERADICATE',
      lines: ['· remove the source and every', '  derived artefact: embeddings,', '  caches, summaries, memory', '· purge contaminated memory', '  by origin; verify the purge', '· revert prompt or config', '  changes that introduced it', '· then close the path: narrow,', '  scope, deny, gate'],
    },
    {
      c: COLORS.cyan, h: 'RECOVER',
      lines: ['· staged restore: reduced', '  capability, more monitoring', '· verify with benign markers:', '  the path fails, not just the', '  original attempt', '· explain manipulation through', '  content, plainly', '· obligations follow the data', '  reached, not the vector'],
    },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 412" caption="When the failing component is a model there is nothing to patch: contain by narrowing capability, quarantine the content that triggered it, scope from traces back to the planting, and close the capability path.">
      <defs>
        <marker id="arrowMIRa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowMIRb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.emerald} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">There is no patch — remove the input, close the capability</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model will behave the same way again given the same context; what changed is what reached it and what it could do</text>

      {pairs.map((p, i) => {
        const x = 30 + i * 252;
        return (
          <g key={i}>
            <rect x={x} y="58" width="236" height="20" rx="5" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.3" strokeDasharray="4 3" />
            <text x={x + 118} y="71" textAnchor="middle" fill={COLORS.red} fontSize="6.6">{p.a}</text>
            <line x1={x + 30} y1="68" x2={x + 206} y2="68" stroke={COLORS.red} strokeWidth="1" />
            <line x1={x + 118} y1="80" x2={x + 118} y2="86" stroke={COLORS.emerald} strokeWidth="1.4" markerEnd="url(#arrowMIRb)" />
            <rect x={x} y="90" width="236" height="22" rx="5" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.6" />
            <text x={x + 118} y="104" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontWeight="700">{p.b}</text>
          </g>
        );
      })}

      {phases.map((ph, i) => {
        const x = 30 + i * 188;
        return (
          <g key={i}>
            <rect x={x} y="124" width="176" height="150" rx="9" fill={COLORS.white} stroke={ph.c} strokeWidth="2" />
            <rect x={x} y="124" width="176" height="18" rx="9" fill={ph.c} />
            <text x={x + 88} y="137" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">{ph.h}</text>
            {ph.lines.map((t, j) => (
              <text key={j} x={x + 10} y={156 + j * 13} fill={COLORS.slate600} fontSize="6.4">{t}</text>
            ))}
            {i < 3 && <line x1={x + 178} y1="199" x2={x + 186} y2="199" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowMIRa)" />}
          </g>
        );
      })}

      <rect x="30" y="286" width="740" height="48" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="304" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">CHANGING MODEL FAMILY OR VERSION IS NOT REMEDIATION</text>
      <text x="400" y="320" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">occasionally part of the response, rarely the fix on its own — an upgrade leaves the same capability path open for the next model</text>

      <rect x="30" y="348" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="368" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">CONTAIN CAPABILITY, QUARANTINE INPUT, SCOPE FROM TRACES, VERIFY THE PATH IS CLOSED</text>
      <text x="400" y="385" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a compromised run could use everything in its credentials&apos; scope — assume it did until traces say otherwise</text>
    </DiagramFrame>
  );
};

export const PostIncidentGovernanceDiagram = () => {
  const questions = [
    '· why did the agent have that capability at that moment?',
    '· why did that content reach the context — source reviewed?',
    '· which control was expected to catch it — absent,',
    '  misconfigured, bypassed, or out of scope?',
    '· why did detection take that long — which signal was missing?',
    '· was it in the threat model — was it knowingly accepted?',
  ];
  const artefacts = [
    { n: 'THREAT MODEL', d: ' — add the scenario, or correct the discounted likelihood' },
    { n: 'ACCEPTED-RISK REGISTER', d: ' — reopen any acceptance built on a disproven assumption' },
    { n: 'CONTROL SET', d: ' — the change at the containing layer, with an owner and a date' },
    { n: 'REGRESSION SUITE', d: ' — a test asserting the condition; recurrence is a build failure' },
    { n: 'DETECTION', d: " — build the missing signal while the event's shape is still concrete" },
  ];
  const gov = [
    { h: 'inventory per AI system', b: 'owner · purpose · data classes · tools · last review' },
    { h: 'review triggered by change', b: 'a new tool, source, scope, or agent — proportionate' },
    { h: 'named accountability', b: 'for systems, controls, and report routing' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 514" caption="A useful review asks which control was expected to catch the incident and what it actually did, then updates the threat model, the risk register, the controls, the regression suite, and detection.">
      <defs>
        <marker id="arrowPIGa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The review&apos;s output is four updated artefacts and a test</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">&quot;the model was tricked&quot; names a property of the technology — control questions name a fixable cause</text>

      <rect x="30" y="58" width="300" height="96" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="58" width="300" height="16" rx="9" fill={COLORS.red} />
      <text x="180" y="70" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">THE UNPRODUCTIVE REVIEW</text>
      <rect x="46" y="82" width="268" height="16" rx="4" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.1" />
      <text x="180" y="93" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">&quot;the model was tricked&quot;</text>
      <line x1="180" y1="99" x2="180" y2="103" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowPIGa)" />
      <rect x="46" y="105" width="268" height="16" rx="4" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.1" />
      <text x="180" y="116" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">&quot;improve the prompt&quot;</text>
      <line x1="180" y1="122" x2="180" y2="126" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowPIGa)" />
      <rect x="46" y="128" width="268" height="18" rx="4" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="180" y="140" textAnchor="middle" fill={COLORS.red} fontSize="6.4" fontWeight="700">unverifiable action — repeat finding later</text>

      <rect x="350" y="58" width="420" height="96" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="350" y="58" width="420" height="16" rx="9" fill={COLORS.emerald} />
      <text x="560" y="70" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">CONTROL QUESTIONS THAT YIELD OWNED CHANGES</text>
      {questions.map((q, i) => (
        <text key={i} x="366" y={86 + i * 11.5} fill={COLORS.slate600} fontSize="6.7">{q}</text>
      ))}

      <rect x="30" y="164" width="740" height="176" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="182" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">EVERY INCIDENT UPDATES FIVE ARTEFACTS — FEWER, AND THE REVIEW LEAKED ITS LESSONS</text>
      <rect x="50" y="232" width="190" height="56" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="145" y="255" textAnchor="middle" fill={COLORS.blue} fontSize="7.2" fontWeight="700">the incident, reviewed</text>
      <text x="145" y="268" textAnchor="middle" fill={COLORS.blue} fontSize="7.2" fontWeight="700">with control questions</text>
      {artefacts.map((a, i) => {
        const y = 192 + i * 30;
        return (
          <g key={i}>
            <line x1="240" y1="260" x2="296" y2={y + 13} stroke={COLORS.slate500} strokeWidth="1.2" markerEnd="url(#arrowPIGa)" />
            <rect x="300" y={y} width="456" height="26" rx="6" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.4" />
            <text x="312" y={y + 16.5} fontSize="6.6">
              <tspan fill={COLORS.emerald} fontWeight="700">{a.n}</tspan>
              <tspan fill={COLORS.slate600}>{a.d}</tspan>
            </text>
          </g>
        );
      })}

      <rect x="30" y="348" width="740" height="90" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="366" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">GOVERNANCE THAT OPERATES — AND METRICS THAT DESCRIBE POSTURE, NOT ACTIVITY</text>
      {gov.map((g, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="374" width="228" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="386" textAnchor="middle" fill={COLORS.slate700} fontSize="6.6" fontWeight="700">{g.h}</text>
          <text x={160 + i * 240} y="397" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{g.b}</text>
        </g>
      ))}
      <text x="400" y="416" textAnchor="middle" fill={COLORS.emerald} fontSize="6.5">measure: threat-model coverage · trifecta components trending down · time-to-detect from first trace evidence · regression coverage</text>
      <text x="400" y="429" textAnchor="middle" fill={COLORS.red} fontSize="6.5">avoid: attempt counts · blocked-request totals · policies published — they move independently of whether anything is safer</text>

      <rect x="30" y="450" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">IF THE REVIEW PRODUCED NO TEST, NOTHING CLOSED — IF GOVERNANCE CANNOT ANSWER, IT IS PAPER</text>
      <text x="400" y="487" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">feed the threat model, the register, the controls, the suite and the detection layer — then measure posture</text>
    </DiagramFrame>
  );
};
