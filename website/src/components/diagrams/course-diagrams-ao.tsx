import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ============ AI FOR CYBERSECURITY — MODULE 8: BRINGING AI INTO YOUR SOC ============ */

export const FirstUseCaseDiagram = () => {
  const good = [
    { h: 'phishing triage', d: 'volume enough to measure a real effect in weeks' },
    { h: 'alert enrichment', d: 'context analysts would fetch manually anyway' },
    { h: 'drafting summaries', d: 'a human reads before anything happens' },
  ];
  const bad = [
    { h: 'autonomous response', d: 'isolating hosts, accounts, traffic, email' },
    { h: 'irreversible actions', d: 'deletions, account changes, external comms' },
    { h: 'externally visible', d: 'customer notices, takedowns, prod detections' },
  ];
  const criteria = [
    ['MEASURABLE BASELINE', "today's numbers written down", 'before the AI arrives, not after'],
    ['TOLERABLE FAILURE', 'a wrong answer is cheap and', 'caught in normal workflow'],
    ['BOUNDED SCOPE', 'one queue, one alert type, one', 'team — a watchable perimeter'],
  ];
  const anti = [
    ['HARDEST PROBLEM FIRST', 'if seniors cannot judge the', "answer, nobody judges the AI's"],
    ['WHERE THE DEMO SHONE', 'demos are optimized to impress,', 'not to represent your telemetry'],
    ['EVERYWHERE AT ONCE', 'a dozen half-watched deployments', 'prove nothing about any of them'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Pick high-volume, well-understood work with a measurable baseline, tolerable failure, and bounded scope — and never start with autonomous response.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Start where the failure mode is annoyance</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">you will encounter the failure mode — choose a first use case that survives it</text>

      <rect x="30" y="58" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="58" width="360" height="18" rx="9" fill={COLORS.emerald} />
      <text x="210" y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHERE AI EARNS ITS PLACE FIRST</text>
      {good.map((g, i) => (
        <g key={i}>
          <rect x="44" y={86 + i * 26} width="118" height="16" rx="4" fill={COLORS.emerald} />
          <text x="103" y={97 + i * 26} textAnchor="middle" fill={COLORS.white} fontSize="6.2" fontWeight="700">{g.h}</text>
          <text x="170" y={97 + i * 26} fill={COLORS.slate600} fontSize="6.6">{g.d}</text>
        </g>
      ))}
      <text x="210" y="180" textAnchor="middle" fill={COLORS.emerald} fontSize="6.8" fontStyle="italic">common thread: humans know what good looks like and stay in the path</text>

      <rect x="410" y="58" width="360" height="140" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="58" width="360" height="18" rx="9" fill={COLORS.red} />
      <text x="590" y="71" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">WHERE NEVER TO START</text>
      {bad.map((b, i) => (
        <g key={i}>
          <rect x="424" y={86 + i * 26} width="118" height="16" rx="4" fill={COLORS.red} />
          <text x="483" y={97 + i * 26} textAnchor="middle" fill={COLORS.white} fontSize="6.2" fontWeight="700">{b.h}</text>
          <text x="550" y={97 + i * 26} fill={COLORS.slate600} fontSize="6.6">{b.d}</text>
        </g>
      ))}
      <text x="590" y="180" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">one visible early failure becomes the organizational verdict on AI itself</text>

      <rect x="30" y="210" width="740" height="90" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="210" width="740" height="18" rx="9" fill={COLORS.blue} />
      <text x="400" y="223" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THREE CRITERIA — FAIL ONE AND IT IS NOT A FIRST USE CASE</text>
      {criteria.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="236" width="228" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={160 + i * 240} y="249" textAnchor="middle" fill={COLORS.blue} fontSize="6.6" fontWeight="700">{c[0]}</text>
          <text x={160 + i * 240} y="261" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{c[1]}</text>
          <text x={160 + i * 240} y="271" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{c[2]}</text>
        </g>
      ))}
      <text x="400" y="293" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">failing one disqualifies it as a first use case — it may still be a fine third one</text>

      <rect x="30" y="312" width="740" height="78" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="330" textAnchor="middle" fill={COLORS.amber} fontSize="8" fontWeight="700">THE ANTI-PATTERNS THAT FEEL LIKE GOOD IDEAS</text>
      {anti.map((a, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="338" width="228" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" />
          <text x={160 + i * 240} y="351" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">{a[0]}</text>
          <text x={160 + i * 240} y="363" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{a[1]}</text>
          <text x={160 + i * 240} y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{a[2]}</text>
        </g>
      ))}

      <rect x="30" y="402" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="422" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE BORING FIRST USE CASE IS A FEATURE — ITS MEASURED WIN FUNDS THE AMBITIOUS SECOND</text>
      <text x="400" y="439" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">a wrong answer should cost minutes of correction — not an outage, and not the CFO&apos;s account</text>
    </DiagramFrame>
  );
};

export const ProvingPilotDiagram = () => {
  const stages = [
    { x: 30, c: COLORS.blue, h: 'BASELINE FIRST', t: ['two to four weeks measuring', 'the team you have: medians,', '90th percentiles, volumes,', 'escalation + reopen rates —', 'before the AI touches anything'] },
    { x: 218, c: COLORS.emerald, h: 'CRITERIA IN WRITING', t: ['numeric targets, measurement', 'method, and time window', 'fixed before day one —', 'including a quality floor,', 'not just a speed target'] },
    { x: 406, c: COLORS.amber, h: 'RUN IT HONESTLY', t: ['live alerts from your own', 'queue, a window long', 'enough to include normal', 'chaos, and a control queue', 'or team where feasible'] },
    { x: 594, c: COLORS.cyan, h: 'DECIDE AGAINST THEM', t: ['criteria met — a decision;', 'missed — a walk-away;', 'kill criteria written in', 'advance are the only', 'ones that ever fire'] },
  ];
  const modes = [
    ['demo data', 'vendor-supplied or sanitized alerts', 'instead of your broken live queue'],
    ['cherry-picked period', 'six quiet weeks in August prove', 'little about the rest of the year'],
    ['no control group', 'tool plus reorg at once — nothing', 'attributes the improvement'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 456" caption="Measure the baseline, write success and kill criteria before day one, and run on live data with a control — sentiment alone is not a result.">
      <defs>
        <marker id="arrowPPDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A pilot that can fail is the only pilot that proves</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">criteria written after exposure to results are indistinguishable from criteria fitted to them</text>

      {stages.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="64" width="170" height="82" rx="8" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
          <rect x={s.x} y="64" width="170" height="16" rx="8" fill={s.c} />
          <text x={s.x + 85} y="75.5" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{s.h}</text>
          {s.t.map((t, j) => (
            <text key={j} x={s.x + 85} y={92 + j * 10.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>
          ))}
          {i < 3 && <line x1={s.x + 172} y1="105" x2={s.x + 186} y2="105" stroke={COLORS.slate500} strokeWidth="1.5" markerEnd="url(#arrowPPDa)" />}
        </g>
      ))}
      <text x="400" y="162" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">&quot;the AI triages in 4 minutes&quot; means nothing if nobody recorded that analysts averaged 6</text>

      <rect x="30" y="176" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="176" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="189" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THREE FAILURE MODES THAT MAKE PILOTS MISLEAD</text>
      {modes.map((m, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="200" width="228" height="48" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={160 + i * 240} y="213" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">{m[0]}</text>
          <text x={160 + i * 240} y="225" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{m[1]}</text>
          <text x={160 + i * 240} y="235" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{m[2]}</text>
        </g>
      ))}

      <rect x="30" y="272" width="740" height="58" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="290" textAnchor="middle" fill={COLORS.amber} fontSize="8" fontWeight="700">&quot;THE ANALYSTS LIKED IT&quot; IS A PRECONDITION, NOT A RESULT</text>
      <text x="400" y="305" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">novelty and survey framing inflate early enthusiasm predictably — sentiment is an adoption signal only</text>
      <text x="400" y="319" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">the pairing that matters: analysts like it AND the measured numbers moved</text>

      <rect x="30" y="342" width="740" height="28" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="360" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontWeight="700">DECIDE WHAT KILLS THE PILOT BEFORE IT RUNS — DECIDED AFTER, NOTHING EVER KILLS IT</text>

      <rect x="30" y="382" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="402" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A PILOT THAT CANNOT FAIL IS A ROLLOUT WEARING A PILOT&apos;S BADGE</text>
      <text x="400" y="419" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">without a baseline, the result is a number with nothing to stand next to</text>
    </DiagramFrame>
  );
};

export const SOCMetricsDiagram = () => {
  const rows = [
    { m: 'time-to-triage', g: 'closing fast scores well — dispositions go shallow', c: 'a quality floor on sampled dispositions' },
    { m: 'false-positive burden', g: 'dismiss harder — fatigue becomes silent misses', c: 'sampled review of dismissed alerts' },
    { m: 'escalation quality', g: 'only sure things go up — ambiguity dies in queue', c: 'the receiving tier judges what arrives' },
    { m: 'analyst hours returned', g: 'freed hours evaporate into unmeasured slack', c: 'show where the hours actually went' },
  ];
  const sampling = [
    ['a random slice of dismissed', 'alerts — daily in pilot,', 'weekly in steady state'],
    ['reviewers work the sample', "cold — blind to the AI's", 'verdict and reasoning'],
    ['rising disagreement is a', 'drift alarm before it is', 'a miss statistic'],
    ['review time is a permanent', 'operating cost — budget it,', 'or the miss rate is unknown'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 504" caption="Track time-to-triage, false-positive burden, escalation quality, and hours returned — each with its counter-metric — and sample dismissed alerts forever to measure the misses.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Every metric, paired with the way it gets gamed</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">when a measure becomes the number leadership watches, it stops being a good measure</text>

      <rect x="30" y="58" width="740" height="164" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="76" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">FOUR METRICS WORTH TRACKING — EACH WITH ITS FAILURE DIRECTION AND ITS COUNTER</text>
      <rect x="46" y="86" width="170" height="14" rx="3" fill={COLORS.blue} />
      <text x="131" y="96" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">METRIC</text>
      <rect x="226" y="86" width="270" height="14" rx="3" fill={COLORS.red} />
      <text x="361" y="96" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">HOW IT GETS GAMED</text>
      <rect x="506" y="86" width="248" height="14" rx="3" fill={COLORS.emerald} />
      <text x="630" y="96" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">THE COUNTER-METRIC</text>
      {rows.map((r, i) => {
        const y = 108 + i * 26;
        return (
          <g key={i}>
            <rect x="46" y={y} width="170" height="22" rx="4" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.1" />
            <text x="131" y={y + 14.5} textAnchor="middle" fill={COLORS.blue} fontSize="6.6" fontWeight="700">{r.m}</text>
            <rect x="226" y={y} width="270" height="22" rx="4" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.1" />
            <text x="361" y={y + 14.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{r.g}</text>
            <rect x="506" y={y} width="248" height="22" rx="4" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="1.1" />
            <text x="630" y={y + 14.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{r.c}</text>
          </g>
        );
      })}

      <rect x="30" y="234" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <text x="400" y="250" textAnchor="middle" fill={COLORS.amber} fontSize="8" fontWeight="700">&quot;CUT ALERT VOLUME BY 70%&quot; — THE SAME HEADLINE, TWO DIFFERENT FUNNELS</text>
      <rect x="46" y="258" width="340" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.3" />
      <text x="216" y="271" textAnchor="middle" fill={COLORS.emerald} fontSize="6.6" fontWeight="700">THE SMARTER FUNNEL</text>
      <text x="216" y="283" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">deduplication, correlation into cases,</text>
      <text x="216" y="293" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">documented suppression rules</text>
      <rect x="414" y="258" width="340" height="40" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.3" />
      <text x="584" y="271" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">THE NARROWER FUNNEL</text>
      <text x="584" y="283" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">raised thresholds, harder dismissal —</text>
      <text x="584" y="293" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">an identical headline number</text>
      <text x="400" y="312" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">a reduction claim without analysis of the discarded alerts is unverified — demand the method</text>

      <rect x="30" y="332" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" />
      <rect x="30" y="332" width="740" height="18" rx="9" fill={COLORS.emerald} />
      <text x="400" y="345" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">MEASURE THE MISSES — SAMPLE WHAT IT DISMISSED, FOREVER</text>
      {sampling.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 186} y="356" width="172" height="52" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {s.map((t, j) => (
            <text key={j} x={132 + i * 186} y={370 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>
          ))}
        </g>
      ))}

      <rect x="30" y="430" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="450" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">PAIR EVERY HEADLINE METRIC WITH THE COUNTER-METRIC THAT CATCHES ITS ABUSE</text>
      <text x="400" y="467" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the dismissed queue is where unmeasured risk pools — unsampled, the miss rate is a number nobody knows</text>
    </DiagramFrame>
  );
};

export const AnalystRoleShiftDiagram = () => {
  const oldChips = ['open the alert', 'gather context', 'decide and close', 'repeat'];
  const newChips = [
    ['drafted verdict', 'arrives with context'],
    ['check claimed evidence', 'against raw telemetry'],
    ['notice what the', 'summary does not say'],
    ['dig further, or', 'sign off — decide'],
  ];
  const zones = [
    { x: 60, c: COLORS.red, l: 'override rate ≈ 0', d: ['approval as reflex — automation bias:', 'accuracy itself breeds the complacency'] },
    { x: 273, c: COLORS.emerald, l: 'calibrated trust', d: ['the real product of the adoption', 'period — managed, not assumed'] },
    { x: 486, c: COLORS.red, l: 'override rate very high', d: ['quiet full re-verification — paying', 'for the AI and the manual workload'] },
  ];
  const partials = [
    'rotate juniors through dismissed-alert sampling',
    "investigate first, then compare with the AI's take",
    'accept some manual triage as deliberate training volume',
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Assisted triage turns analysts into verifiers — watch override rates for rubber-stamping and distrust alike, and rebuild the apprenticeship the automation removed.">
      <defs>
        <marker id="arrowARSa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The job inverts: from clearing the queue to catching the wrong</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a fluent, confident, well-formatted summary reads as correct whether or not it is</text>

      <rect x="30" y="58" width="740" height="34" rx="8" fill={COLORS.white} stroke={COLORS.slate400} strokeWidth="1.5" />
      <text x="42" y="79" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">QUEUE-CLEARING</text>
      {oldChips.map((t, i) => (
        <g key={i}>
          <rect x={160 + i * 155} y="64" width="135" height="22" rx="5" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" />
          <text x={227 + i * 155} y="78" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>
          {i < 3 && <line x1={297 + i * 155} y1="75" x2={311 + i * 155} y2="75" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowARSa)" />}
        </g>
      ))}

      <rect x="30" y="102" width="740" height="46" rx="8" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="42" y="128" fill={COLORS.blue} fontSize="6.8" fontWeight="700">VERIFICATION</text>
      {newChips.map((c, i) => (
        <g key={i}>
          <rect x={160 + i * 155} y="109" width="135" height="32" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={227 + i * 155} y="122" textAnchor="middle" fill={COLORS.slate700} fontSize="6.2">{c[0]}</text>
          <text x={227 + i * 155} y="133" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{c[1]}</text>
          {i < 3 && <line x1={297 + i * 155} y1="125" x2={311 + i * 155} y2="125" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowARSa)" />}
        </g>
      ))}
      <text x="400" y="160" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontStyle="italic">an analyst who never disagrees with the tool is a rubber stamp, not a control</text>

      <rect x="30" y="172" width="740" height="104" rx="9" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      <text x="400" y="190" textAnchor="middle" fill={COLORS.slate700} fontSize="8" fontWeight="700">TRUST CALIBRATION CUTS BOTH WAYS — READ PER-ANALYST OVERRIDE RATES, NOT TEAM AVERAGES</text>
      {zones.map((z, i) => (
        <g key={i}>
          <rect x={z.x} y="200" width="213" height="14" rx="4" fill={COLORS.white} stroke={z.c} strokeWidth="1.6" />
          <text x={z.x + 106} y="228" textAnchor="middle" fill={z.c} fontSize="6.8" fontWeight="700">{z.l}</text>
          <text x={z.x + 106} y="240" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{z.d[0]}</text>
          <text x={z.x + 106} y="250" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{z.d[1]}</text>
        </g>
      ))}
      <text x="400" y="268" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6" fontStyle="italic">the rate alone cannot say which failure — read it against sampled-dismissal ground truth</text>

      <rect x="30" y="288" width="740" height="108" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="288" width="740" height="18" rx="9" fill={COLORS.amber} />
      <text x="400" y="301" textAnchor="middle" fill={COLORS.white} fontSize="7.8" fontWeight="700">THE LADDER PROBLEM — THE AI NOW ABSORBS THE REPS THAT BUILT SENIOR JUDGMENT</text>
      <text x="46" y="318" fill={COLORS.slate600} fontSize="6.8">tier-one repetition was the apprenticeship —</text>
      <text x="46" y="330" fill={COLORS.slate600} fontSize="6.8">how juniors built intuition for what normal</text>
      <text x="46" y="342" fill={COLORS.slate600} fontSize="6.8">looks like in real telemetry</text>
      <text x="46" y="366" fill={COLORS.red} fontSize="6.8" fontStyle="italic">what fails is pretending</text>
      <text x="46" y="378" fill={COLORS.red} fontSize="6.8" fontStyle="italic">the ladder is intact</text>
      <text x="565" y="318" textAnchor="middle" fill={COLORS.slate700} fontSize="6.4" fontWeight="700">PARTIAL ANSWERS, HONESTLY LABELLED</text>
      {partials.map((t, i) => (
        <g key={i}>
          <rect x="376" y={326 + i * 22} width="378" height="18" rx="5" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          <text x="565" y={338 + i * 22} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>
        </g>
      ))}

      <rect x="30" y="408" width="740" height="28" rx="8" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="2" />
      <text x="400" y="426" textAnchor="middle" fill={COLORS.cyan} fontSize="7.6" fontWeight="700">TRAIN ON FAILURES: DELIBERATELY WRONG DISPOSITIONS IN THE EXERCISES, GRADED ON CATCHING THEM</text>

      <rect x="30" y="448" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="468" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE SCARCE SKILL IS CATCHING WRONG RECOMMENDATIONS — TEACH IT DELIBERATELY</text>
      <text x="400" y="485" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">watch both failures: the analyst who never disagrees, and the one who quietly redoes everything</text>
    </DiagramFrame>
  );
};

export const StagedAutonomyDiagram = () => {
  const steps = [
    { x: 40, c: COLORS.blue, h: 'SUGGEST', t: ['AI recommends the action;', 'a human performs it'] },
    { x: 230, c: COLORS.cyan, h: 'APPROVE', t: ['AI prepares it fully; a', 'human approves each run'] },
    { x: 420, c: COLORS.amber, h: 'ACT WITH REVIEW', t: ['AI executes; every action', 'lands in mandatory review'] },
    { x: 610, c: COLORS.emerald, h: 'ACT ALONE', t: ['AI executes;', 'sampled review only'] },
  ];
  const examples = [
    { n: 'enrich alerts', d: 'act-alone, earned on sampled accuracy' },
    { n: 'phishing triage', d: 'act-with-review — still climbing' },
    { n: 'disable accounts', d: 'approve — perhaps permanently' },
  ];
  const gated = [
    ['IRREVERSIBLE', 'no restore path means no', 'acceptable autonomous error rate'],
    ['EXTERNAL-FACING', 'crossing the org boundary is', 'a human commitment to make'],
    ['UNBOUNDED BLAST RADIUS', 'stays gated until it is a', 'known, bounded blast radius'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 520" caption="Each action type earns autonomy stage by stage against written criteria, some actions never climb at all, and the ladder runs both ways.">
      <defs>
        <marker id="arrowSAUa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.amber} />
        </marker>
      </defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A ladder each action type climbs on its own evidence</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">suggest first, act-alone last — no stage skipped, and the unit that climbs is the action type</text>

      {steps.map((s, i) => {
        const top = 186 - i * 42;
        return (
          <g key={i}>
            <rect x={s.x} y={top} width="160" height={230 - top} rx="8" fill={COLORS.white} stroke={s.c} strokeWidth="2" />
            <rect x={s.x} y={top} width="160" height="16" rx="8" fill={s.c} />
            <text x={s.x + 80} y={top + 11.5} textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{i + 1} · {s.h}</text>
            <text x={s.x + 80} y={top + 30} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{s.t[0]}</text>
            <text x={s.x + 80} y={top + 40} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{s.t[1]}</text>
            {i < 3 && (
              <line x1={s.x + 145} y1={top - 6} x2={s.x + 200} y2={top - 46} stroke={COLORS.amber} strokeWidth="1.6" markerEnd="url(#arrowSAUa)" />
            )}
          </g>
        );
      })}
      <text x="400" y="248" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">every arrow is a gate: written promotion criteria sustained over a defined period — vendor defaults are a posture, not a decision</text>

      <rect x="30" y="262" width="740" height="52" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <text x="400" y="278" textAnchor="middle" fill={COLORS.blue} fontSize="7.6" fontWeight="700">THE SAME PRODUCT, THREE LADDERS — EACH ACTION TYPE CLIMBS ON ITS OWN EVIDENCE</text>
      {examples.map((e, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="286" width="228" height="18" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          <text x={160 + i * 240} y="298" textAnchor="middle" fontSize="6.4">
            <tspan fill={COLORS.slate700} fontWeight="700">{e.n}</tspan>
            <tspan fill={COLORS.slate600}> — {e.d}</tspan>
          </text>
        </g>
      ))}

      <rect x="30" y="326" width="740" height="72" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="326" width="740" height="18" rx="9" fill={COLORS.red} />
      <text x="400" y="339" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT NEVER CLIMBS — THE ARGUMENT WAS NEVER ABOUT ACCURACY</text>
      {gated.map((g, i) => (
        <g key={i}>
          <rect x={46 + i * 240} y="350" width="228" height="38" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          <text x={160 + i * 240} y="362" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">{g[0]}</text>
          <text x={160 + i * 240} y="373" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{g[1]}</text>
          <text x={160 + i * 240} y="382" textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{g[2]}</text>
        </g>
      ))}
      <text x="400" y="412" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontStyle="italic">keep the standing-gate list written down — shrinking it is a leadership decision, not a configuration ticket</text>

      <rect x="30" y="424" width="740" height="28" rx="8" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <text x="400" y="442" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontWeight="700">THE LADDER RUNS BOTH WAYS — A MISS, RISING DISAGREEMENT, OR AN ENVIRONMENT CHANGE DROPS A STAGE</text>

      <rect x="30" y="464" width="740" height="48" rx="10" fill={COLORS.slate900} />
      <text x="400" y="484" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SUGGEST → APPROVE → ACT-WITH-REVIEW → ACT-ALONE, EARNED PER ACTION TYPE, IN WRITING</text>
      <text x="400" y="501" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">log what it saw, what it recommended, and what happened — demotion deserves the same rigor as promotion</text>
    </DiagramFrame>
  );
};
