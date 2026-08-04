import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ SECURING AI SYSTEMS — MODULE 1: THREAT MODELLING FOR AI ============ */

export const ClassicThreatModelsDiagram = () => {
  const cards = [
    {
      h: 'ASSUMED: CONTROL FLOW IS FIXED',
      classic: 'classic: enumerate the paths, cover each one',
      br: ['the model chooses the next call at runtime —', 'path enumeration is incomplete by construction'],
    },
    {
      h: 'ASSUMED: INSTRUCTIONS ≠ DATA, ENFORCED',
      classic: 'classic: the interface separates them, like a parameterised query',
      br: ['a prompt is one undifferentiated string —', 'instructions and data share the channel'],
    },
    {
      h: 'ASSUMED: SAME INPUT, SAME OUTPUT',
      classic: 'classic: a passing test stays passed',
      br: ['sampling makes behaviour a distribution —', 'one green run says little about the next'],
    },
    {
      h: 'ASSUMED: INSIDE THE BOUNDARY = TRUSTED',
      classic: 'classic: validate at the edge, process freely inside',
      br: ['your own indexed corpus can carry instructions', 'that redirect the system reading it'],
    },
  ];
  const chain = [
    { x: 46, w: 176, l: ['attacker writes a paragraph', 'of instructions'] },
    { x: 240, w: 186, l: ['into a page, ticket, doc or', 'review your pipeline ingests'] },
    { x: 444, w: 160, l: ['your system reads it on', 'behalf of a real user'] },
    { x: 622, w: 132, l: ['no session to revoke,', 'no credential used'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 494" caption="Classic threat modelling assumes fixed paths, separable instructions, repeatable behaviour and trustable insides — an LLM feature violates all four, and adds an attacker who never authenticates.">
      <defs>
        <marker id="arrowCTMa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Four assumptions that quietly fail when a model sits in the system</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the discipline survives — what changes is the catalogue of instances hanging off each category</text>

      {cards.map((c, i) => {
        const x = 30 + (i % 2) * 380;
        const y = 58 + Math.floor(i / 2) * 104;
        return (
          <g key={i}>
            <rect x={x} y={y} width="360" height="92" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
            <rect x={x} y={y} width="360" height="18" rx="9" fill={COLORS.amber} />
            <text x={x + 180} y={y + 13} textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">{c.h}</text>
            <text x={x + 16} y={y + 34} fill={COLORS.slate500} fontSize="7.8" fontStyle="italic">{c.classic}</text>
            <text x={x + 16} y={y + 53} fill={COLORS.red} fontSize="7.8">{c.br[0]}</text>
            <text x={x + 16} y={y + 66} fill={COLORS.red} fontSize="7.8">{c.br[1]}</text>
          </g>
        );
      })}

      <rect x="30" y="266" width="740" height="42" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="283" textAnchor="middle" fill={COLORS.blue} fontSize="8.8" fontWeight="700">THE METHOD SURVIVES — STRIDE TRANSFERS ONCE YOU SWAP THE INSTANCES</text>
      <text x="400" y="299" textAnchor="middle" fill={COLORS.slate600} fontSize="8">spoofing → agent identity · tampering → poisoned corpus and memory · EoP → confused deputy and excessive agency</text>

      <rect x="30" y="322" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="322" width="740" height="20" rx="9" fill={COLORS.red} />
      <text x="400" y="336" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE NEW PRIMITIVE — INFLUENCE WITHOUT ACCESS</text>
      {chain.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="352" width={p.w} height="36" rx="8" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" />
          <text x={p.x + p.w / 2} y="366" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.l[0]}</text>
          <text x={p.x + p.w / 2} y="378" textAnchor="middle" fill={COLORS.slate700} fontSize="7.4">{p.l[1]}</text>
          {i < 3 && <line x1={p.x + p.w + 4} y1="370" x2={chain[i + 1].x - 4} y2="370" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowCTMa)" />}
        </g>
      ))}
      <text x="400" y="410" textAnchor="middle" fill={COLORS.slate600} fontSize="7.8" fontStyle="italic">enumerate positions, not identities — user · content author · tool supplier · co-tenant · corpus writer</text>

      <rect x="30" y="440" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="460" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A DECISION-MAKER WITH A PERSUASION SURFACE, NOT A PROGRAM WITH AN ATTACK SURFACE</text>
      <text x="400" y="477" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">what the model can reach once persuaded — not the attacker's identity — sets the severity</text>
    </DiagramFrame>
  );
};

export const AIAttackSurfaceMapDiagram = () => {
  const comps = [
    { x: 30, y: 58, c: COLORS.slate400, h: 'MODEL', l: ['writes: the provider,', 'your fine-tuning jobs'], tag: 'often hosted, opaque', tc: COLORS.slate500 },
    { x: 218, y: 58, c: COLORS.blue, h: 'PROMPT LAYER', l: ['writes: templates + any', 'data field spliced in'], tag: 'a write path into instructions', tc: COLORS.red },
    { x: 406, y: 58, c: COLORS.blue, h: 'RETRIEVAL CORPUS', l: ['writes: uploads, wiki edits,', 'third-party doc sync'], tag: 'auto-sync = unreviewed', tc: COLORS.red },
    { x: 594, y: 58, c: COLORS.blue, h: 'TOOLS', l: ['writes: tool definitions,', 'MCP servers, config'], tag: 'can change without a deploy', tc: COLORS.red },
    { x: 30, y: 136, c: COLORS.blue, h: 'MEMORY', l: ['writes: model-requested', 'entries, across sessions'], tag: 'persists between users?', tc: COLORS.amber },
    { x: 218, y: 136, c: COLORS.cyan, h: 'OUTPUTS', l: ['read by: renderers, parsers,', 'logs, downstream systems'], tag: 'everywhere text lands', tc: COLORS.amber },
    { x: 406, y: 136, c: COLORS.cyan, h: 'HUMANS', l: ['read: approval summaries', 'written by the system'], tag: 'attacker-influenceable input', tc: COLORS.red },
  ];
  const write = [
    'the fastest way to find AI-specific',
    'exposure: trace, for each component,',
    'the concrete code path that writes',
    'to it',
    'unreviewed auto-sync, prompts fed',
    'from data fields, tool definitions',
    'that change without a deploy',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Enumerate all seven components and their write paths, then rank by reach and reversibility — most of the exposure lives outside the model.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Seven components — and the model is the least interesting one</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">for each, name who can write to it and who reads from it — the exposure lives mostly in the other six</text>

      {comps.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width="176" height="70" rx="8" fill={COLORS.white} stroke={c.c} strokeWidth="1.8" />
          <rect x={c.x} y={c.y} width="176" height="16" rx="8" fill={c.c} />
          <text x={c.x + 88} y={c.y + 11.5} textAnchor="middle" fill={COLORS.white} fontSize="7.2" fontWeight="700">{c.h}</text>
          <text x={c.x + 8} y={c.y + 30} fill={COLORS.slate600} fontSize="6.8">{c.l[0]}</text>
          <text x={c.x + 8} y={c.y + 41} fill={COLORS.slate600} fontSize="6.8">{c.l[1]}</text>
          <text x={c.x + 8} y={c.y + 58} fill={c.tc} fontSize="6.4" fontStyle="italic">{c.tag}</text>
        </g>
      ))}
      <rect x="594" y="136" width="176" height="70" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.4" strokeDasharray="5 3" />
      <text x="682" y="154" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontWeight="700">FOR EVERY COMPONENT</text>
      <text x="682" y="172" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">who can write to it?</text>
      <text x="682" y="184" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">who can read from it?</text>

      <rect x="30" y="218" width="400" height="172" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="230" y="236" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">RANK BY REACH × IRREVERSIBILITY</text>
      <line x1="70" y1="246" x2="70" y2="362" stroke={COLORS.slate400} strokeWidth="1.2" />
      <line x1="70" y1="362" x2="400" y2="362" stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="76" y="252" fill={COLORS.slate500} fontSize="6.8">irreversibility ↑</text>
      <text x="396" y="376" textAnchor="end" fill={COLORS.slate500} fontSize="6.8">reach of data →</text>
      <rect x="260" y="246" width="140" height="64" fill={COLORS.red} fillOpacity="0.08" stroke={COLORS.red} strokeWidth="1" strokeDasharray="4 3" />
      <text x="330" y="258" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">spend the session here</text>
      <circle cx="340" cy="344" r="4" fill={COLORS.emerald} />
      <text x="330" y="347" textAnchor="end" fill={COLORS.slate600} fontSize="6.6">read-only doc search</text>
      <circle cx="150" cy="310" r="4" fill={COLORS.amber} />
      <text x="158" y="313" fill={COLORS.slate600} fontSize="6.6">per-user memory write</text>
      <circle cx="268" cy="286" r="4" fill={COLORS.amber} />
      <text x="260" y="282" textAnchor="end" fill={COLORS.slate600} fontSize="6.6">posts to a shared channel</text>
      <circle cx="350" cy="270" r="4" fill={COLORS.red} />
      <text x="344" y="266" textAnchor="end" fill={COLORS.red} fontSize="6.6">moves money · deletes records</text>
      <circle cx="312" cy="296" r="4" fill={COLORS.red} />
      <text x="318" y="299" fill={COLORS.red} fontSize="6.6">merges code</text>

      <rect x="450" y="218" width="320" height="172" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="450" y="218" width="320" height="20" rx="9" fill={COLORS.blue} />
      <text x="610" y="232" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOLLOW THE WRITE PATH</text>
      {write.map((t, i) => (
        <text key={i} x="466" y={254 + i * 13 + (i > 3 ? 8 : 0)} fill={COLORS.slate600} fontSize="7.9">{t}</text>
      ))}
      <text x="466" y="368" fill={COLORS.blue} fontSize="7.4" fontWeight="700">a write path you cannot name is one you cannot control</text>

      <rect x="30" y="402" width="740" height="44" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="419" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">THE SURFACE GROWS THROUGH CONFIGURATION — CONVENTIONAL REVIEW MISSES IT</text>
      <text x="400" y="434" textAnchor="middle" fill={COLORS.slate600} fontSize="8">generate tool and permission inventories from config so drift shows in a diff — demo scope-widening is the most permanent change there is</text>

      <rect x="30" y="458" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="478" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">RANK BY REACH × IRREVERSIBILITY — THAT ORDER PLACES YOUR GATES AND EGRESS RULES</text>
      <text x="400" y="495" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">irreversible means a third party has already seen or acted on the effect by the time you notice</text>
    </DiagramFrame>
  );
};

export const UntrustedModelBoundaryDiagram = () => {
  const inputs = [
    { y: 230, c: COLORS.amber, t: 'user input (authenticated)' },
    { y: 262, c: COLORS.red, t: 'retrieved content (mixed)' },
    { y: 294, c: COLORS.red, t: 'tool results (untrusted)' },
  ];
  const consumers = [
    { y: 228, c: COLORS.blue, h: 'renderer', n: 'sanitise like internet input' },
    { y: 266, c: COLORS.blue, h: 'parser · shell · DB', n: 'validate before anything executes' },
    { y: 304, c: COLORS.amber, h: 'tool dispatcher', n: 'an authorisation decision, not a call' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 514" caption="Place the trust boundary around the model: its output is untrusted by every consumer, and a tool call is an authorisation decision.">
      <defs>
        <marker id="arrowUMBa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
        <marker id="arrowUMBb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Draw the boundary around the model — not behind it</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the model processes untrusted input, so it produces untrusted output — every consumer sits across a boundary</text>

      <rect x="30" y="58" width="740" height="124" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="46" y="78" fill={COLORS.red} fontSize="8.6" fontWeight="700">THE INTUITIVE PLACEMENT — WRONG FOR AN LLM FEATURE</text>
      <rect x="46" y="94" width="96" height="28" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="94" y="112" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">user input</text>
      <line x1="146" y1="108" x2="176" y2="108" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <rect x="180" y="94" width="86" height="28" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="223" y="112" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">validate</text>
      <line x1="300" y1="88" x2="300" y2="156" stroke={COLORS.slate500} strokeWidth="1.4" strokeDasharray="5 3" />
      <text x="300" y="168" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">the only boundary drawn</text>
      <rect x="316" y="88" width="434" height="68" rx="8" fill={COLORS.blueLight} fillOpacity="0.5" />
      <text x="740" y="100" textAnchor="end" fill={COLORS.blue} fontSize="6.6">assumed trusted</text>
      <rect x="336" y="104" width="84" height="30" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="378" y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">model</text>
      <line x1="424" y1="119" x2="454" y2="119" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <rect x="458" y="104" width="270" height="30" rx="6" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.4" />
      <text x="593" y="123" textAnchor="middle" fill={COLORS.slate600} fontSize="7">renderer · parser · shell · DB — unchecked</text>
      <line x1="270" y1="108" x2="332" y2="116" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <text x="400" y="174" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontStyle="italic">this placement implies model output can be trusted by whatever consumes it</text>

      <rect x="30" y="196" width="740" height="196" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <text x="46" y="216" fill={COLORS.emerald} fontSize="8.6" fontWeight="700">DRAW IT AROUND THE MODEL — OUTPUT IS UNTRUSTED, EVERY TIME</text>
      {inputs.map((p, i) => (
        <g key={i}>
          <rect x="46" y={p.y} width="130" height="26" rx="6" fill={COLORS.white} stroke={p.c} strokeWidth="1.6" />
          <text x="111" y={p.y + 16} textAnchor="middle" fill={COLORS.slate600} fontSize="7">{p.t}</text>
        </g>
      ))}
      <line x1="180" y1="243" x2="218" y2="258" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <line x1="180" y1="275" x2="218" y2="275" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <line x1="180" y1="307" x2="218" y2="292" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowUMBa)" />
      <rect x="222" y="228" width="170" height="100" rx="10" fill="none" stroke={COLORS.red} strokeWidth="1.6" strokeDasharray="6 4" />
      <text x="307" y="244" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">UNTRUSTED ZONE</text>
      <rect x="250" y="254" width="114" height="44" rx="7" fill={COLORS.white} stroke={COLORS.slate600} strokeWidth="1.6" />
      <text x="307" y="272" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">context window</text>
      <text x="307" y="284" textAnchor="middle" fill={COLORS.slate700} fontSize="7.2">+ model</text>
      <line x1="396" y1="262" x2="510" y2="242" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowUMBb)" />
      <line x1="396" y1="278" x2="510" y2="282" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowUMBb)" />
      <line x1="396" y1="294" x2="510" y2="318" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowUMBb)" />
      <text x="452" y="254" textAnchor="middle" fill={COLORS.red} fontSize="6.6">untrusted output</text>
      {consumers.map((c, i) => (
        <g key={i}>
          <rect x="514" y={c.y} width="240" height="32" rx="7" fill={COLORS.white} stroke={c.c} strokeWidth="1.6" />
          <text x="526" y={c.y + 13} fill={COLORS.slate700} fontSize="7.2" fontWeight="700">{c.h}</text>
          <text x="526" y={c.y + 25} fill={COLORS.slate600} fontSize="6.6">{c.n}</text>
        </g>
      ))}
      <text x="400" y="378" textAnchor="middle" fill={COLORS.emerald} fontSize="7.6" fontStyle="italic">every arrow leaving the model crosses a trust boundary — treat each as input arriving from the internet</text>

      <rect x="30" y="406" width="740" height="42" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="423" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">PROVENANCE MAKES THE BOUNDARY ENFORCEABLE — BY THE RUNTIME, NOT THE MODEL</text>
      <text x="400" y="438" textAnchor="middle" fill={COLORS.slate600} fontSize="8">tag content by source, keep tags through summarisation and handoffs, and gate privileged tools on what entered the turn</text>

      <rect x="30" y="460" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="480" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">MODEL OUTPUT IS UNTRUSTED — NO MATTER HOW TRUSTED THE INPUT LOOKED</text>
      <text x="400" y="497" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">every agent-to-agent edge is a boundary too, and delegation must never silently upgrade authority</text>
    </DiagramFrame>
  );
};

export const LLMDataFlowDiagram = () => {
  const sources = [
    { y: 134, c: COLORS.amber, t: 'wiki — staff-edited' },
    { y: 162, c: COLORS.red, t: 'ticket text — user-written' },
    { y: 190, c: COLORS.red, t: 'vendor doc sync — unreviewed' },
  ];
  const tools = [
    { y: 74, c: COLORS.blue, h: 'customer record lookup', n: 'acting id: service acct — whose scope?', nc: COLORS.red },
    { y: 116, c: COLORS.blue, h: 'create ticket', n: 'write — reversible, logged', nc: COLORS.slate600 },
    { y: 158, c: COLORS.blue, h: 'post to shared channel', n: 'outbound — visible beyond the team', nc: COLORS.amber },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Annotate every flow with trust level, acting identity and outbound reach, then hunt the process that combines untrusted input, private data and an exit.">
      <defs>
        <marker id="arrowLDFa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
        <marker id="arrowLDFb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
        </marker>
        <marker id="arrowLDFc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.cyan} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">One worked feature: the internal support assistant</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">ordinary DFD notation plus three annotations — trust level inbound, acting identity on tool edges, outbound reach</text>

      <rect x="30" y="58" width="740" height="272" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <rect x="46" y="74" width="112" height="26" rx="6" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="1.6" />
      <text x="102" y="91" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">staff user</text>
      <rect x="46" y="112" width="160" height="118" rx="8" fill="none" stroke={COLORS.slate400} strokeWidth="1.2" strokeDasharray="5 3" />
      <text x="126" y="126" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">RETRIEVAL INDEX</text>
      {sources.map((s, i) => (
        <g key={i}>
          <rect x="60" y={s.y} width="132" height="24" rx="5" fill={COLORS.white} stroke={s.c} strokeWidth="1.4" />
          <text x="126" y={s.y + 15} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{s.t}</text>
        </g>
      ))}
      <rect x="46" y="248" width="150" height="26" rx="5" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.6" />
      <text x="121" y="264" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">per-user memory (store)</text>

      <rect x="330" y="150" width="150" height="60" rx="10" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="405" y="174" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6" fontWeight="700">context window</text>
      <text x="405" y="188" textAnchor="middle" fill={COLORS.slate700} fontSize="7.6">+ model</text>

      <line x1="158" y1="87" x2="330" y2="158" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowLDFa)" />
      <text x="236" y="104" fill={COLORS.amber} fontSize="6.2">question · authenticated</text>
      <line x1="206" y1="171" x2="330" y2="180" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowLDFa)" />
      <text x="242" y="166" fill={COLORS.red} fontSize="6.2">chunks · mixed trust</text>
      <line x1="196" y1="252" x2="330" y2="196" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowLDFa)" />
      <text x="234" y="232" fill={COLORS.cyan} fontSize="6.2">memory · user-scoped</text>
      <line x1="335" y1="212" x2="204" y2="264" stroke={COLORS.cyan} strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrowLDFc)" />
      <text x="252" y="262" fill={COLORS.cyan} fontSize="6.2">model-requested write</text>

      {tools.map((t, i) => (
        <g key={i}>
          <rect x="560" y={t.y} width="196" height="34" rx="6" fill={COLORS.white} stroke={t.c} strokeWidth="1.6" />
          <text x="570" y={t.y + 13} fill={COLORS.slate700} fontSize="7" fontWeight="700">{t.h}</text>
          <text x="570" y={t.y + 25} fill={t.nc} fontSize="6.2">{t.n}</text>
        </g>
      ))}
      <rect x="560" y="216" width="196" height="34" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" />
      <text x="570" y="229" fill={COLORS.slate700} fontSize="7" fontWeight="700">answer → rich text + links</text>
      <text x="570" y="241" fill={COLORS.red} fontSize="6.2">renders in browser — leaves your control</text>
      <line x1="480" y1="166" x2="556" y2="91" stroke={COLORS.blue} strokeWidth="1.3" markerEnd="url(#arrowLDFb)" />
      <line x1="480" y1="176" x2="556" y2="133" stroke={COLORS.blue} strokeWidth="1.3" markerEnd="url(#arrowLDFb)" />
      <line x1="480" y1="186" x2="556" y2="175" stroke={COLORS.blue} strokeWidth="1.3" markerEnd="url(#arrowLDFb)" />
      <line x1="480" y1="200" x2="556" y2="233" stroke={COLORS.blue} strokeWidth="1.3" markerEnd="url(#arrowLDFb)" />

      <rect x="60" y="304" width="10" height="10" fill={COLORS.amber} />
      <text x="76" y="313" fill={COLORS.slate600} fontSize="6.8">authenticated / reviewed</text>
      <rect x="240" y="304" width="10" height="10" fill={COLORS.red} />
      <text x="256" y="313" fill={COLORS.slate600} fontSize="6.8">untrusted / unreviewed</text>
      <rect x="430" y="304" width="10" height="10" fill={COLORS.cyan} />
      <text x="446" y="313" fill={COLORS.slate600} fontSize="6.8">per-user store</text>
      <text x="746" y="313" textAnchor="end" fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">coloured annotations = the three additions</text>

      <rect x="30" y="344" width="360" height="94" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="344" width="360" height="20" rx="9" fill={COLORS.red} />
      <text x="210" y="358" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">THE COMBINATION TO FIND</text>
      <text x="46" y="378" fill={COLORS.slate600} fontSize="7.8">an untrusted inbound flow, a private data</text>
      <text x="46" y="391" fill={COLORS.slate600} fontSize="7.8">store, and an outbound flow that leaves</text>
      <text x="46" y="404" fill={COLORS.slate600} fontSize="7.8">your control — this process has all three,</text>
      <text x="46" y="417" fill={COLORS.slate600} fontSize="7.8">and that combination is the design test</text>

      <rect x="410" y="344" width="360" height="94" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="410" y="344" width="360" height="20" rx="9" fill={COLORS.blue} />
      <text x="590" y="358" textAnchor="middle" fill={COLORS.white} fontSize="8.4" fontWeight="700">FOUR MORE READS OF THE SAME DIAGRAM</text>
      <text x="426" y="378" fill={COLORS.slate600} fontSize="7.8">tool edges under the wrong identity ·</text>
      <text x="426" y="391" fill={COLORS.slate600} fontSize="7.8">stores written by one user, read by</text>
      <text x="426" y="404" fill={COLORS.slate600} fontSize="7.8">another · untrusted sources upstream of</text>
      <text x="426" y="417" fill={COLORS.slate600} fontSize="7.8">irreversible actions · unlogged crossings</text>

      <rect x="30" y="452" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE DIAGRAM IS A QUESTION-GENERATING DEVICE — ITS QUESTIONS ARE THE DELIVERABLE</text>
      <text x="400" y="489" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">every finding becomes a named change with an owner and a date — or an entry in the accepted-risk register</text>
    </DiagramFrame>
  );
};
