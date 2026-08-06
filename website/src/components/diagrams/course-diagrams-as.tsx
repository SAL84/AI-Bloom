import React from 'react';
import { DiagramFrame, COLORS } from './shared';
/* ============ AI FOR FINANCE — MODULE 3: THE FAILURE MODES THAT COST MONEY ============ */
export const ConfidentWrongNumbersDiagram = () => {
  const signals = [['a ratio quoted to two', 'decimal places'], ['a spread given in', 'basis points'], ['a change that sounds', 'about right'], ['a source-shaped', 'attribution']];
  const surfaces = ['summarised filings and prospectuses', 'condensed earnings calls', 'credit memos assembled from a data room', 'market commentary and pitch material', 'any spreadsheet formula a model drafted'];
  const defects = ['the right number from the wrong period', 'a restated figure presented as originally reported', 'consolidated confused with segment', 'currency and units silently converted — or silently not', 'a percentage change computed against the wrong base', 'totals that do not tie to their components', 'a real figure attached to the wrong document'];
  const checks = [
    ['treat every figure as', 'unsourced until a person', 'has opened the source'],
    ['demand a locator —', 'document, statement,', 'period, page or note'],
    ['never a source name —', 'that is what the model is', 'best at inventing'],
    ['recompute anything', 'derived: ratios and', 'growth rates compound'],
    ['never ask the model to', 'confirm its own figure —', 'it will simply confirm it'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 450" caption="Financial formatting reads as evidence of care the process never involved — check at the point of entry, not the point of exit.">
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">It looks like work, because it is written in your own conventions</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a model asked for a figure produces the most probable-looking one, not a retrieved one</text>
      <rect x="30" y="56" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.red} /> <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHY FINANCE IS AN UNUSUALLY BAD PLACE FOR A FABRICATED FIGURE TO LAND</text>
      {signals.map((s, i) => (
        <g key={i}>
          <rect x={46 + i * 180} y="84" width="170" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {s.map((t, j) => <text key={j} x={131 + i * 180} y={97 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
        </g>
      ))}
      <text x="400" y="130" textAnchor="middle" fill={COLORS.red} fontSize="7.6" fontStyle="italic">the output carries exactly the signals the profession uses to indicate care — supplied by a process that used none of them</text>
      <rect x="30" y="150" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="150" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="210" y="163" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHERE WRONG NUMBERS ENTER THE WORK</text>
      {surfaces.map((t, i) => <text key={i} x="44" y={186 + i * 14} fill={COLORS.slate600} fontSize="7.4">{'· ' + t}</text>)}
      <text x="44" y="258" fill={COLORS.slate500} fontSize="7" fontStyle="italic">compression is where the risk sits — a long document into a short claim</text>
      <rect x="410" y="150" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="150" width="360" height="18" rx="9" fill={COLORS.red} /> <text x="590" y="163" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE RECURRING DEFECTS, NOT RANDOM ONES</text>
      {defects.map((t, i) => <text key={i} x="424" y={184 + i * 12} fill={COLORS.slate600} fontSize="7.2">{'· ' + t}</text>)}
      <text x="424" y="262" fill={COLORS.slate500} fontSize="7" fontStyle="italic">none of these announces itself until somebody opens the source</text>
      <rect x="30" y="280" width="740" height="106" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="298" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">TIE IT BACK TO THE SOURCE — CHEAP, SPECIFIC, AND IT SURVIVES A DEADLINE</text>
      {checks.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 146} y="306" width="136" height="54" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={110 + i * 146} y={322 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="376" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">check at the point where the number enters the institution’s work — by committee stage it has been believed several times</text>
      <rect x="30" y="394" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="414" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">FLUENCY IN YOUR OWN CONVENTIONS IS WHAT MAKES IT PERSUASIVE</text> <text x="400" y="431" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">domain expertise is not protection here — checking that totals tie is the cheapest test and the most often skipped</text>
    </DiagramFrame>
  );
};
export const BacktestOverfittingDiagram = () => {
  const steps = ['the idea is tested — the result is unremarkable', 'a parameter is adjusted', 'a different lookback window is tried', 'two loss-making years are set aside', 'a filter drops the trades that went wrong', 'the universe is narrowed to cleaner names', 'the curve is smooth and the drawdowns shallow'];
  const bars = [4, 7, 11, 17, 25, 34, 44, 52, 58, 60, 58, 52, 44, 34, 25, 17, 11, 7, 5, 3];
  const honest = [
    ['record and report how many', 'configurations were tried —', 'it changes how to read it'],
    ['pre-specify rule, universe,', 'horizon and criterion — the', 'timestamp is what makes it one'],
    ['use trial-count-aware', 'statistics and multiple-', 'testing adjustments'],
    ['hold one untouched period', 'outside the researcher’s', 'control, and spend it once'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 490" caption="Ask how many things were tried against this same history, not whether an out-of-sample test was run.">
      <defs><marker id="arrowBTOa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">The strategy got beautiful because it was selected, not because it is real</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">nobody sets out to overfit — the process that produces it is ordinary and looks like diligence</text>
      <rect x="30" y="56" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="56" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="210" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">HOW A STRATEGY BECOMES BEAUTIFUL</text>
      {steps.map((t, i) => (
        <g key={i}>
          <text x="44" y={90 + i * 16} fill={i === 6 ? COLORS.red : COLORS.slate600} fontSize="7" fontWeight={i === 6 ? '700' : '400'}>{t}</text>
          <rect x={302} y={84 + i * 16} width={10 + i * 10} height="6" rx="3" fill={i === 6 ? COLORS.red : COLORS.amber} />
        </g>
      ))}
      <text x="44" y="198" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">the smoother the backtested curve, the more selection went into producing it</text>
      <rect x="410" y="56" width="360" height="150" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="56" width="360" height="18" rx="9" fill={COLORS.red} /> <text x="590" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">A REPORTED FIGURE IS THE MAXIMUM OF UNKNOWN DRAWS</text> <text x="424" y="88" fill={COLORS.slate600} fontSize="7">enough variants against one history and some look excellent by chance</text>
      {bars.map((h, i) => <rect key={i} x={426 + i * 16} y={176 - h} width="14" height={h} rx="2" fill={i > 17 ? COLORS.red : COLORS.slate300} />)}
      <line x1="426" y1="176" x2="754" y2="176" stroke={COLORS.slate400} strokeWidth="1.2" />
      <text x="700" y="112" textAnchor="end" fill={COLORS.red} fontSize="6.6">the one that reached you</text>
      <line x1="706" y1="109" x2="734" y2="164" stroke={COLORS.red} strokeWidth="1.2" markerEnd="url(#arrowBTOa)" />
      <text x="426" y="188" fill={COLORS.slate500} fontSize="6.6">backtested performance of every variant tried, including the ones nobody recorded →</text>
      <text x="424" y="200" fill={COLORS.slate600} fontSize="6.8">a threshold calibrated to be crossed occasionally by noise means little</text>
      <rect x="30" y="216" width="740" height="96" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="400" y="234" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">“WE VALIDATED IT OUT OF SAMPLE” OFTEN MEANS “WE KEPT TRYING”</text>
      <rect x="46" y="246" width="150" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" /> <text x="121" y="264" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">it fails the holdout</text>
      <line x1="200" y1="260" x2="222" y2="260" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowBTOa)" />
      <rect x="226" y="246" width="110" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" /> <text x="281" y="264" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">it is revised</text>
      <line x1="340" y1="260" x2="362" y2="260" stroke={COLORS.slate500} strokeWidth="1.3" markerEnd="url(#arrowBTOa)" />
      <rect x="366" y="246" width="170" height="28" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.2" /> <text x="451" y="264" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">it is tested on the same holdout</text>
      <line x1="540" y1="260" x2="562" y2="260" stroke={COLORS.red} strokeWidth="1.3" markerEnd="url(#arrowBTOa)" />
      <rect x="566" y="240" width="188" height="40" rx="6" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" /> <text x="660" y="256" textAnchor="middle" fill={COLORS.red} fontSize="6.8" fontWeight="700">the holdout is now spent</text> <text x="660" y="270" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">the second test is in-sample</text>
      <text x="400" y="292" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">across a long programme the same history is reused by the same team until nothing in the building is genuinely unseen</text>
      <text x="400" y="304" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">forward-dated live or paper trading is the only sample the researcher could not have fitted</text>
      <rect x="30" y="322" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="340" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">WHAT HONEST EVALUATION LOOKS LIKE — MOSTLY PROCESS, NOT MATHEMATICS</text>
      {honest.map((c, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="350" width="176" height="52" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {c.map((t, j) => <text key={j} x={130 + i * 182} y={366 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="7.4">and treat economic rationale as a filter — an unexplainable signal is more likely a coincidence found by search</text>
      <rect x="30" y="434" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="454" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A STRATEGY THAT SURVIVED ONE ATTEMPT AND ONE THAT SURVIVED FOUR HUNDRED DESERVE DIFFERENT SCEPTICISM</text> <text x="400" y="471" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the trial count includes abandoned ideas and inherited configurations, and it is almost never recorded</text>
    </DiagramFrame>
  );
};
export const LeakageLookAheadDiagram = () => {
  const known = ['· as-reported figures, at their publication date', '· prices as they stood, before later adjustment', '· features rebuilt as of this date, missingness included'];
  const later = ['· a restatement published afterwards', '· index membership as it stands today', '· a corporate action announced later', '· the outcome the label already encodes'];
  const hidesL = ['· fundamentals dated to the period, not to publication', '· prices adjusted for corporate actions announced later', '· universes built from today’s membership — survivorship renamed'];
  const hidesR = ['· delisted, defaulted or acquired entities dropped from the sample', '· target leakage: collections flags, write-off codes, closure reasons', '· scaling, imputation and feature engineering before the split'];
  const segs = [{ x: 46, w: 384, c: COLORS.blue, t: 'TRAIN — THE PAST ONLY' }, { x: 430, w: 70, c: COLORS.amber, t: 'PURGE' }, { x: 500, w: 60, c: COLORS.amber, t: 'EMBARGO' }, { x: 560, w: 194, c: COLORS.emerald, t: 'TEST' }];
  return (
    <DiagramFrame viewBox="0 0 800 474" caption="Leakage means training on information that would not have been there — and the result will not reproduce live.">
      <defs><marker id="arrowLLAa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker></defs>
      <text x="400" y="24" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Information that would not have been there</text>
      <text x="400" y="42" textAnchor="middle" fill={COLORS.slate500} fontSize="10">financial databases store a current best view of history, not what was known on each date</text>
      <rect x="30" y="56" width="740" height="152" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="16" rx="9" fill={COLORS.red} /> <text x="400" y="68" textAnchor="middle" fill={COLORS.white} fontSize="7.6" fontWeight="700">AS-REPORTED IS WHAT YOU HAD · AS-RESTATED IS WHAT TURNED OUT TO BE TRUE</text> <text x="402" y="82" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8" fontWeight="700">the decision date</text>
      <line x1="402" y1="86" x2="402" y2="162" stroke={COLORS.slate400} strokeWidth="1.4" strokeDasharray="5 3" />
      <rect x="46" y="88" width="348" height="74" rx="7" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.4" /> <text x="58" y="102" fill={COLORS.emerald} fontSize="7" fontWeight="700">AVAILABLE AT THE DECISION</text>
      {known.map((t, i) => <text key={i} x="58" y={118 + i * 13} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <rect x="410" y="88" width="344" height="74" rx="7" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.4" /> <text x="422" y="102" fill={COLORS.red} fontSize="7" fontWeight="700">ARRIVES ONLY AFTERWARDS</text>
      {later.map((t, i) => <text key={i} x="422" y={116 + i * 12} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <path d="M 600 166 C 500 196, 250 196, 150 168" fill="none" stroke={COLORS.red} strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowLLAa)" />
      <text x="375" y="202" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontStyle="italic">used in training anyway — performance looks excellent, and it cannot be reproduced in production</text>
      <rect x="30" y="218" width="740" height="78" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="236" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">WHERE IT HIDES IN FINANCIAL DATA — CONSISTENT ENOUGH TO MAKE A CHECKLIST</text>
      {hidesL.map((t, i) => <text key={i} x="46" y={254 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      {hidesR.map((t, i) => <text key={i} x="410" y={254 + i * 14} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <rect x="30" y="306" width="740" height="104" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="324" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">SPLITTING TIME HONESTLY</text>
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="334" width={s.w} height="26" rx="4" fill={s.c} /> <text x={s.x + s.w / 2} y="351" textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{s.t}</text>
        </g>
      ))}
      <text x="400" y="374" textAnchor="middle" fill={COLORS.red} fontSize="7.2">random train-test splits are the default in most tooling and are wrong for anything with a time dimension</text>
      <text x="400" y="386" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the purge and embargo gap stops overlapping label horizons and slow-moving features crossing the boundary</text>
      <text x="400" y="398" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">keep the same borrower, account, household or issuer out of both sides — or the model recognises the entity, not the pattern</text>
      <rect x="30" y="418" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="438" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">EXCELLENT RESULTS THAT COLLAPSE IN PRODUCTION ARE THE SIGNATURE</text> <text x="400" y="455" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the cause sits upstream of the model, in how the data was assembled and how it was split</text>
    </DiagramFrame>
  );
};
export const RegimeChangeDiagram = () => {
  const encoded = ['a level and shape of rates', 'a volatility regime', 'a default environment', 'a set of correlations', 'a liquidity condition', 'the policy in force'];
  const mon = [
    { h: 'INPUT MONITORING', w: 90, c: COLORS.emerald, n: 'distributions, missingness, new categories, out-of-range values' },
    { h: 'OUTPUT MONITORING', w: 160, c: COLORS.amber, n: 'score and approval rates, flag rates, human override frequency' },
    { h: 'OUTCOME MONITORING', w: 260, c: COLORS.red, n: 'an outcome may take a year — the exposure is booked long before' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 494" caption="The conditions that break a model are the same conditions that make being wrong expensive.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">A model learns an environment, not a law</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">when the world it was fitted to stops existing, the output format and the confidence do not change</text>
      <rect x="30" y="54" width="740" height="172" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" /> <text x="424" y="72" textAnchor="middle" fill={COLORS.red} fontSize="7.4" fontWeight="700">the regime turns</text>
      <line x1="424" y1="78" x2="424" y2="196" stroke={COLORS.red} strokeWidth="1.4" strokeDasharray="5 3" />
      <rect x="424" y="82" width="236" height="108" fill={COLORS.red} fillOpacity="0.05" />
      <line x1="60" y1="190" x2="660" y2="190" stroke={COLORS.slate400} strokeWidth="1.2" />
      <line x1="60" y1="82" x2="60" y2="190" stroke={COLORS.slate400} strokeWidth="1.2" />
      <polyline points="60,150 120,142 180,148 240,138 300,144 360,136 424,140 460,168 500,120 540,178 580,116 620,172 660,132" fill="none" stroke={COLORS.blue} strokeWidth="1.8" />
      <polyline points="60,100 660,100" fill="none" stroke={COLORS.slate500} strokeWidth="1.6" strokeDasharray="4 3" />
      <polyline points="60,166 120,166 180,165 240,166 300,165 360,166 424,166 470,174 520,180 580,184 660,186" fill="none" stroke={COLORS.emerald} strokeWidth="1.8" />
      <rect x="670" y="92" width="10" height="4" fill={COLORS.blue} /><text x="686" y="98" fill={COLORS.slate600} fontSize="6.2">fitted relationship</text>
      <rect x="670" y="112" width="10" height="4" fill={COLORS.slate500} /><text x="686" y="118" fill={COLORS.slate600} fontSize="6.2">output confidence</text>
      <rect x="670" y="132" width="10" height="4" fill={COLORS.emerald} /><text x="686" y="138" fill={COLORS.slate600} fontSize="6.2">actual accuracy</text>
      <text x="660" y="204" textAnchor="end" fill={COLORS.slate500} fontSize="6.6">time →</text>
      <text x="400" y="218" textAnchor="middle" fill={COLORS.slate600} fontSize="7.6">no field in the output says the world it was fitted to has stopped existing — and there is no reason to expect one</text>
      <rect x="30" y="236" width="740" height="70" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="400" y="254" textAnchor="middle" fill={COLORS.blue} fontSize="8.4" fontWeight="700">WHAT THE TRAINING DATA ACTUALLY ENCODED</text>
      {encoded.map((t, i) => (
        <g key={i}>
          <rect x={42 + i * 122} y="262" width="116" height="24" rx="5" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" /> <text x={100 + i * 122} y="277" textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>
        </g>
      ))}
      <text x="400" y="300" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">none of it is a law of nature, and a model has no representation of the difference between a stable relationship and a coincidence</text>
      <rect x="30" y="316" width="740" height="114" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" /> <text x="400" y="334" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">MONITORING THAT FIRES BEFORE THE LOSS — THREE SIGNALS, THREE LAGS</text> <text x="170" y="345" fill={COLORS.slate400} fontSize="6.2">time to detection →</text>
      {mon.map((m, i) => (
        <g key={i}>
          <text x="46" y={359 + i * 22} fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{m.h}</text>
          <rect x="170" y={350 + i * 22} width={m.w} height="12" rx="3" fill={m.c} /> <text x="444" y={359 + i * 22} fill={COLORS.slate600} fontSize="6.6">{m.n}</text>
        </g>
      ))}
      <text x="400" y="418" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">pre-commit the threshold that escalates, name who may suspend the model without reconvening a committee, and decide the fallback first</text>
      <rect x="30" y="438" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="458" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A MODEL CALIBRATED ON BENIGN YEARS IS MOST WRONG DURING THE FIRST BAD ONE</text> <text x="400" y="475" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">discovery by loss is the default outcome unless the monitoring was designed to fire before it</text>
    </DiagramFrame>
  );
};
export const CorrelatedModelsDiagram = () => {
  const firms = ['your institution', 'a peer', 'a peer', 'a peer', 'a peer'];
  const shared = ['the same general-purpose models', 'the same market and alternative data', 'the same benchmark indices', 'the same hosting and pricing sources'];
  const breaks = ['· liquidity assumptions measured in normal conditions', '· strategies uncorrelated by construction can be tightly', '  correlated in practice through shared positioning', '· deleveraging in similar portfolios has produced losses', '  that forced further deleveraging'];
  const acts = [
    ['procyclical behaviour', 'amplified by automation, and', 'compressed reaction time'],
    ['concentration in a few', 'critical third parties — a', 'supervisory concern, not only', 'a vendor question'],
    ['find out which dependencies', 'you share with peers — that', 'answer is not on your own', 'risk register'],
    ['keep a fallback that does', 'not rest on the same', 'provider, and name', 'concentration as a risk'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="A common dependency is a common failure mode, and no single-firm risk view has a vantage point on it.">
      <defs><marker id="arrowCMDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Different institutions, correlated behaviour — and nobody coordinated it</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">single-firm risk management assumes your decisions are yours, and increasingly they are not</text>
      <rect x="30" y="54" width="740" height="172" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" />
      {firms.map((t, i) => (
        <g key={i}>
          <rect x="46" y={76 + i * 28} width="110" height="22" rx="5" fill={COLORS.white} stroke={i === 0 ? COLORS.blue : COLORS.slate400} strokeWidth="1.3" /> <text x="101" y={90 + i * 28} textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">{t}</text>
          <line x1="160" y1={87 + i * 28} x2="196" y2="150" stroke={COLORS.slate300} strokeWidth="1" />
        </g>
      ))}
      {shared.map((t, i) => (
        <g key={i}>
          <rect x="200" y={80 + i * 32} width="212" height="26" rx="5" fill={COLORS.white} stroke={COLORS.cyan} strokeWidth="1.4" /> <text x="306" y={97 + i * 32} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>
        </g>
      ))}
      <line x1="416" y1="150" x2="452" y2="150" stroke={COLORS.slate400} strokeWidth="1.4" markerEnd="url(#arrowCMDa)" />
      <rect x="456" y="80" width="298" height="126" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="456" y="80" width="298" height="18" rx="9" fill={COLORS.red} /> <text x="605" y="93" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CORRELATED DECISIONS</text> <text x="468" y="114" fill={COLORS.slate600} fontSize="7">two firms running genuinely independent processes</text>
      <text x="468" y="126" fill={COLORS.slate600} fontSize="7">over shared inputs make correlated decisions — and</text>
      <text x="468" y="138" fill={COLORS.slate600} fontSize="7">neither can see it from the inside</text>
      <text x="468" y="158" fill={COLORS.red} fontSize="7">the dependency map that matters is your providers’</text>
      <text x="468" y="170" fill={COLORS.red} fontSize="7">providers, and few firms have ever drawn it</text>
      <text x="468" y="190" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">concentration runs through data vendors, hosting,</text>
      <text x="468" y="200" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">ratings inputs and the sources that feed valuation</text>
      <rect x="30" y="236" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="30" y="236" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="210" y="249" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">CROWDING, HERDING AND THE UNWIND</text> <text x="210" y="268" textAnchor="middle" fill={COLORS.slate600} fontSize="7">crowding is invisible in calm conditions and reads</text>
      <text x="210" y="279" textAnchor="middle" fill={COLORS.slate600} fontSize="7">as confirmation that the signal works</text>
      <polygon points="52,290 368,290 240,330 180,330" fill={COLORS.amber} fillOpacity="0.14" stroke={COLORS.amber} strokeWidth="1.3" />
      <text x="210" y="303" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">many participants, similar positions, similar reasoning</text>
      <text x="210" y="325" textAnchor="middle" fill={COLORS.red} fontSize="6.6" fontWeight="700">the exit is narrower</text>
      <text x="210" y="347" textAnchor="middle" fill={COLORS.red} fontSize="7">correlated exits are the mechanism of the loss</text>
      <rect x="410" y="236" width="360" height="120" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="410" y="236" width="360" height="18" rx="9" fill={COLORS.red} /> <text x="590" y="249" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT BREAKS FIRST</text>
      {breaks.map((t, i) => <text key={i} x="424" y={270 + i * 13} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="424" y="342" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">quantitative equity strategies have already demonstrated the pattern</text>
      <rect x="30" y="366" width="740" height="78" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="384" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHAT SUPERVISORS WATCH, AND WHAT ONE INSTITUTION CAN ACTUALLY DO</text>
      {acts.map((a, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="392" width="176" height="44" rx="6" fill={COLORS.white} stroke={i > 1 ? COLORS.emerald : COLORS.slate400} strokeWidth="1.3" />
          {a.map((t, j) => <text key={j} x={130 + i * 182} y={(a.length === 3 ? 411 : 403) + j * 9.5} textAnchor="middle" fill={COLORS.slate600} fontSize="6.2">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="452" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="472" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">SHARED PROVIDERS AND SHARED DATA PRODUCE CORRELATED DECISIONS WITH NO COORDINATION</text> <text x="400" y="489" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">automation compresses the time available for human intervention, and the exit is narrower than the entrance was</text>
    </DiagramFrame>
  );
};
/* ============ AI FOR FINANCE — MODULE 4: DEPLOYING WITHOUT BECOMING THE CASE STUDY ============ */
export const HumanInTheDecisionDiagram = () => {
  const duties = [
    ['a credit decline in the US —', 'ECOA and Regulation B require', 'specific principal reasons on', 'an adverse action'],
    ['a solely automated decision', 'with significant effects in the', 'EU — rights to human', 'intervention and to contest'],
    ['a retail recommendation —', 'MiFID II suitability in the EU;', 'Regulation Best Interest and the', 'fiduciary standard in the US'],
    ['account freezes and exits,', 'claim declines, suspicious-', 'activity filings — each lands', 'on an identifiable person'],
  ];
  const needs = [
    ['the inputs and the reasons,', 'not only a score — otherwise', 'they cannot disagree'],
    ['time proportionate to the', 'decision being reviewed'],
    ['authority to overturn, without', 'a personal cost for doing it'],
    ['monitored override rates —', 'the metric that shows whether', 'review happens at all'],
  ];
  const chain = [['an owner for the model', 'named, and currently in post'], ['an owner for the process', 'the model sits inside'], ['a line to a senior individual', 'answerable for the outcome']];
  return (
    <DiagramFrame viewBox="0 0 800 470" caption="A reviewer with only a score, no time, or no authority to overturn is documentation, not control.">
      <defs><marker id="arrowHIDa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Where a human must stay in the decision — and what makes that real</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">explanation and appeal duties attach to the decision, not to the technology that produced it</text>
      <rect x="30" y="56" width="740" height="100" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="740" height="18" rx="9" fill={COLORS.blue} /> <text x="400" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">DECISIONS WHERE A DUTY SURVIVES AUTOMATION — NAME THE REGIME BEFORE ASSUMING IT</text>
      {duties.map((d, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="84" width="176" height="52" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.2" />
          {d.map((t, j) => <text key={j} x={130 + i * 182} y={98 + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <text x="400" y="150" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontStyle="italic">“the model said no” satisfies none of them — and elsewhere the duty may be differently drawn, or absent</text>
      <rect x="30" y="166" width="740" height="144" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="184" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">WHAT MEANINGFUL REVIEW NEEDS — FOUR THINGS THE DESIGN USUALLY OMITS</text>
      {needs.map((n, i) => (
        <g key={i}>
          <rect x={42 + i * 182} y="192" width="176" height="44" rx="6" fill={COLORS.slate50} stroke={COLORS.emerald} strokeWidth="1.2" />
          {n.map((t, j) => <text key={j} x={130 + i * 182} y={(n.length === 3 ? 206 : 212) + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>)}
        </g>
      ))}
      <rect x="140" y="252" width="520" height="16" rx="4" fill={COLORS.emerald} />
      <rect x="140" y="252" width="90" height="16" rx="4" fill={COLORS.red} />
      <rect x="570" y="252" width="90" height="16" rx="4" fill={COLORS.red} /> <text x="400" y="264" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">the review step is doing work</text> <text x="140" y="282" fill={COLORS.red} fontSize="6.6">near-zero overrides: deference to a confident system</text>
      <text x="660" y="282" textAnchor="end" fill={COLORS.red} fontSize="6.6">near-total: the output is being ignored</text>
      <text x="400" y="300" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">automation bias is a design problem — telling people to be sceptical does not fix an interface</text>
      <rect x="30" y="320" width="740" height="86" rx="9" fill={COLORS.white} stroke={COLORS.slate300} strokeWidth="2" /> <text x="400" y="338" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHO IS ACCOUNTABLE WHEN THE MODEL IS WRONG</text>
      {chain.map((c, i) => (
        <g key={i}>
          <rect x={46 + i * 230} y="346" width="210" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.blue} strokeWidth="1.3" /> <text x={151 + i * 230} y="359" textAnchor="middle" fill={COLORS.slate700} fontSize="6.8" fontWeight="700">{c[0]}</text> <text x={151 + i * 230} y="370" textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{c[1]}</text>
          {i < 2 && <line x1={258 + i * 230} y1="361" x2={272 + i * 230} y2="361" stroke={COLORS.slate400} strokeWidth="1.3" markerEnd="url(#arrowHIDa)" />}
        </g>
      ))}
      <text x="400" y="390" textAnchor="middle" fill={COLORS.red} fontSize="7.2">a named role with nobody currently in it is an unowned model — check the name, not the org chart</text>
      <text x="400" y="402" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">the test: when a supervisor asks who decided, is there a name — and can that person describe the basis?</text>
      <rect x="30" y="414" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="434" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">A RATE NEAR ZERO AND A RATE NEAR TOTAL BOTH MEAN THE REVIEW IS NOT FUNCTIONING</text> <text x="400" y="451" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">accountability rests with a named person inside the institution — never with a model, a vendor or a committee</text>
    </DiagramFrame>
  );
};
export const WhatYouPasteFinanceDiagram = () => {
  const lost = ['· processed under its terms, in its jurisdiction', '· possibly retained, reviewed by humans, or used to improve a model', '· subject to another country’s disclosure laws', '· no contract, no assessment, and no instruction to delete'];
  const cats = [
    { x: 30, h: 'CLIENT AND CUSTOMER DATA', l: ['contractual confidentiality and duties of', 'confidence, plus data protection where', 'individuals are identifiable — GDPR in the', 'EU, UK GDPR with the Data Protection Act', '2018 in the UK, or the local statute'], n: ['the institution loses the ability to establish', 'who else saw the material'] },
    { x: 280, h: 'PRICE-SENSITIVE INFORMATION', l: ['engages insider dealing and market abuse', 'regimes, not confidentiality alone — US', '“material non-public information” and the', 'EU Market Abuse Regulation’s “inside', 'information” are not interchangeable'], n: ['deal codenames, draft announcements and', 'pipeline material stay price-sensitive'] },
    { x: 530, h: 'PERSONAL FINANCIAL DATA', l: ['of customers or of staff — the exposure', 'here is a data protection question, not a', 'procurement one, and the material is', 'often pasted precisely because it is the', 'awkward part of the task'], n: ['each of the three needs a rule applicable', 'without judgement in the moment'] },
  ];
  const tiers = [
    { c: COLORS.red, n: 'a consumer tool, no agreement', d: 'public information only — and nothing about the firm’s business, its clients or its pipeline' },
    { c: COLORS.amber, n: 'an enterprise deployment', d: 'internal and client material within stated limits, under contracted retention and training restrictions' },
    { c: COLORS.emerald, n: 'inside your own boundary', d: 'anything sensitive or regulated, where the material never leaves the institution’s control' },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 512" caption="Nothing marks the boundary at the time, so the rule has to be applicable without judgement in the moment.">
      <defs><marker id="arrowWYPa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.red} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Nothing in the interface marks the boundary</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">a paste is a disclosure to a third party the institution has not assessed and cannot instruct to delete</text>
      <rect x="30" y="56" width="740" height="110" rx="10" fill={COLORS.slate50} stroke={COLORS.slate300} strokeWidth="1.5" /> <text x="400" y="72" textAnchor="middle" fill={COLORS.slate700} fontSize="8.4" fontWeight="700">WHAT ACTUALLY LEAVES THE BUILDING</text>
      <line x1="400" y1="84" x2="400" y2="150" stroke={COLORS.slate400} strokeWidth="1.6" strokeDasharray="6 4" />
      <rect x="60" y="100" width="180" height="32" rx="7" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="1.6" /> <text x="150" y="114" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">text pasted into a tool with</text> <text x="150" y="125" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">no institutional agreement</text>
      <line x1="246" y1="116" x2="394" y2="116" stroke={COLORS.red} strokeWidth="1.5" markerEnd="url(#arrowWYPa)" />
      <text x="320" y="110" textAnchor="middle" fill={COLORS.red} fontSize="6.6">a disclosure</text>
      <text x="60" y="146" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">it runs to a party you have not assessed</text>
      {lost.map((t, i) => <text key={i} x="420" y={98 + i * 14} fill={COLORS.slate600} fontSize="6.9">{t}</text>)}
      <text x="400" y="160" textAnchor="middle" fill={COLORS.red} fontSize="7.2" fontStyle="italic">nothing marks this line at the time, so the failure does not feel like a breach when it happens</text>
      <rect x="30" y="176" width="740" height="126" rx="10" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.5" />
      {cats.map((c, i) => (
        <g key={i}>
          <rect x={c.x + 12} y="186" width="216" height="16" rx="4" fill={COLORS.red} /> <text x={c.x + 120} y="197" textAnchor="middle" fill={COLORS.white} fontSize="6.6" fontWeight="700">{c.h}</text>
          {c.l.map((t, j) => <text key={j} x={c.x + 12} y={216 + j * 11} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
          {c.n.map((t, j) => <text key={j} x={c.x + 12} y={282 + j * 11} fill={COLORS.slate500} fontSize="6.6" fontStyle="italic">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="312" width="740" height="136" rx="9" fill={COLORS.white} stroke={COLORS.emerald} strokeWidth="2" /> <text x="400" y="330" textAnchor="middle" fill={COLORS.emerald} fontSize="8.4" fontWeight="700">APPROVED-TOOL TIERS — NAME THEM, AND STATE FOR EACH WHICH CLASS OF MATERIAL MAY ENTER</text>
      {tiers.map((t, i) => (
        <g key={i}>
          <rect x="46" y={340 + i * 28} width="210" height="24" rx="5" fill={t.c} /> <text x="151" y={356 + i * 28} textAnchor="middle" fill={COLORS.white} fontSize="7" fontWeight="700">{t.n}</text> <text x="270" y={356 + i * 28} fill={COLORS.slate600} fontSize="7.2">{t.d}</text>
        </g>
      ))}
      <text x="400" y="428" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">a prohibition with no permitted alternative produces quiet unapproved use — exception requests are the health signal</text>
      <text x="400" y="440" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">and somebody has to maintain the list, because AI features keep arriving inside software the institution already licenses</text>
      <rect x="30" y="456" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="476" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">THE EXPOSURE IS A MARKET ABUSE OR DATA PROTECTION QUESTION, NOT A PROCUREMENT ONE</text> <text x="400" y="493" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">publish the tiers where people will actually look, and give every prohibition a permitted alternative</text>
    </DiagramFrame>
  );
};
export const RecordsSupervisionDiagram = () => {
  const logs = ['which tool', 'which version', 'what was asked', 'what it returned', 'what a human changed', 'who approved it'];
  const vol = ['review programmes calibrated on human-written', 'communications meet a far larger volume of fluent,', 'near-uniform text — exactly the material that', 'sampling-based review triages worst'];
  const mkt = ['the same fair, clear and not misleading standard applies —', 'in the US it turns on firm type: FINRA Rule 2210 for broker-', 'dealers, the SEC marketing rule for advisers; personalisation', 'at scale can cross into a recommendation, engaging MiFID II', 'suitability or Regulation Best Interest; and overstating your', 'own use of AI is a regulated-communications problem too'];
  return (
    <DiagramFrame viewBox="0 0 800 476" caption="Retention and supervision duties attach to the communication, not to how it was drafted.">
      <defs><marker id="arrowRSUa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.slate500} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">An AI-drafted message is still a business communication</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">record-keeping and supervision regimes are indifferent to how a communication was produced</text>
      <rect x="30" y="56" width="740" height="118" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="46" y="76" width="200" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" /> <text x="146" y="95" textAnchor="middle" fill={COLORS.slate600} fontSize="7">written by a person from scratch</text>
      <rect x="46" y="116" width="200" height="30" rx="6" fill={COLORS.slate50} stroke={COLORS.slate400} strokeWidth="1.3" /> <text x="146" y="135" textAnchor="middle" fill={COLORS.slate600} fontSize="7">drafted by a model, edited by a person</text>
      <line x1="250" y1="91" x2="326" y2="105" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRSUa)" />
      <line x1="250" y1="131" x2="326" y2="117" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRSUa)" />
      <rect x="330" y="86" width="190" height="50" rx="7" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" /> <text x="425" y="104" textAnchor="middle" fill={COLORS.blue} fontSize="7.6" fontWeight="700">THE SAME OBLIGATIONS</text> <text x="425" y="118" textAnchor="middle" fill={COLORS.slate600} fontSize="7">retention · retrieval · supervision</text>
      <text x="425" y="130" textAnchor="middle" fill={COLORS.slate500} fontSize="6.6">a marketing post and an internal instruction too</text>
      <line x1="524" y1="111" x2="552" y2="111" stroke={COLORS.slate500} strokeWidth="1.4" markerEnd="url(#arrowRSUa)" />
      <rect x="556" y="86" width="198" height="50" rx="7" fill={COLORS.white} stroke={COLORS.red} strokeWidth="1.6" /> <text x="655" y="104" textAnchor="middle" fill={COLORS.red} fontSize="7" fontWeight="700">the failure mode is constant</text> <text x="655" y="117" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">work done where the firm cannot</text>
      <text x="655" y="128" textAnchor="middle" fill={COLORS.slate600} fontSize="6.8">retain it or produce it later</text>
      <text x="400" y="156" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">in the US, broker-dealer supervision runs through FINRA Rule 3110 and communications with the public through FINRA Rule 2210,</text>
      <text x="400" y="168" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">while adviser books-and-records requirements sit with the SEC · in the EU, MiFID II covers transaction-related communications</text>
      <rect x="30" y="184" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="184" width="360" height="18" rx="9" fill={COLORS.blue} /> <text x="210" y="197" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE COMMUNICATION AS SENT</text> <text x="44" y="218" fill={COLORS.slate600} fontSize="7.4">held in the existing retained channel — that part of</text>
      <text x="44" y="230" fill={COLORS.slate600} fontSize="7.4">the obligation has not changed at all</text>
      <line x1="44" y1="242" x2="376" y2="242" stroke={COLORS.slate200} strokeWidth="1" />
      <text x="44" y="258" fill={COLORS.amber} fontSize="7.4">set retention periods from your firm’s records</text>
      <text x="44" y="270" fill={COLORS.amber} fontSize="7.4">policy, never from a tool vendor’s default</text>
      <text x="44" y="286" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">an AI tool outside the retained estate is another unrecorded channel</text>
      <rect x="410" y="184" width="360" height="110" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" />
      <rect x="410" y="184" width="360" height="18" rx="9" fill={COLORS.amber} /> <text x="590" y="197" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">RECONSTRUCTING HOW IT WAS PRODUCED</text>
      {logs.map((t, i) => (
        <g key={i}>
          <rect x={424 + (i % 3) * 114} y={210 + Math.floor(i / 3) * 26} width="108" height="20" rx="5" fill={COLORS.slate50} stroke={COLORS.amber} strokeWidth="1.2" /> <text x={478 + (i % 3) * 114} y={224 + Math.floor(i / 3) * 26} textAnchor="middle" fill={COLORS.slate600} fontSize="6.4">{t}</text>
        </g>
      ))}
      <text x="424" y="274" fill={COLORS.slate600} fontSize="7.4">a logging decision taken before deployment — it</text>
      <text x="424" y="286" fill={COLORS.slate600} fontSize="7.4">cannot be recovered afterwards</text>
      <rect x="30" y="304" width="740" height="110" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" /> <text x="400" y="322" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">TWO PLACES A REVIEW PROGRAMME BREAKS</text> <text x="46" y="340" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">VOLUME AND UNIFORMITY</text>
      {vol.map((t, i) => <text key={i} x="46" y={354 + i * 12} fill={COLORS.slate600} fontSize="7.2">{t}</text>)}
      <text x="410" y="340" fill={COLORS.slate700} fontSize="7.4" fontWeight="700">MARKETING, RESEARCH AND RECOMMENDATIONS</text>
      {mkt.map((t, i) => <text key={i} x="410" y={354 + i * 10} fill={COLORS.slate600} fontSize="6.8">{t}</text>)}
      <rect x="30" y="422" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="442" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">AN AI TOOL OUTSIDE THE RETAINED ESTATE IS SIMPLY ANOTHER UNRECORDED CHANNEL</text> <text x="400" y="459" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">decide what the record consists of before deployment — the production trail cannot be recovered later</text>
    </DiagramFrame>
  );
};
export const GovernanceCaseDiagram = () => {
  const six = [
    ['PURPOSE', 'what decision or task, for whom, and what success is'],
    ['DATA', 'what goes in, from where, on what basis — and what may not'],
    ['VALIDATION', 'what evidence, against what comparator, on data like ours'],
    ['MONITORING', 'which metrics, at what cadence, and on whose desk'],
    ['FALLBACK', 'what we run on when it is wrong, and who switches it off'],
    ['OWNER', 'the person accountable for the outcome, not for the project'],
  ];
  const asks = ['· what is the worst realistic outcome for a customer?', '· how would we discover that it had happened?', '· what population was this validated on, and how does ours differ?', '· which process does it replace, and how good is that one — measured?', '· who is accountable when it is wrong?', '· what does switching it off cost, and could we still operate?', '· which obligations does it touch — conduct, records, data', '  protection, model risk, third-party?', '· what did we actually commit to in the contract?'];
  const exit = [
    ['set a review date with a named decision', 'maker — the date passing unnoticed is how', 'a tool becomes load-bearing'],
    ['define what result would end the pilot,', 'and write it down before any results exist'],
    ['record what the firm would do if the', 'provider withdrew tomorrow — dependency', 'accumulates faster than anyone plans for'],
  ];
  return (
    <DiagramFrame viewBox="0 0 800 502" caption="Every line needs a named person or a number — and a stop condition written before any results exist.">
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Write the assumptions down while they can still be checked</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the point of a pre-deployment case is not to slow the pilot down, and the questions that stall one are rarely technical</text>
      <rect x="30" y="56" width="380" height="200" rx="9" fill={COLORS.white} stroke={COLORS.blue} strokeWidth="2" />
      <rect x="30" y="56" width="380" height="18" rx="9" fill={COLORS.blue} /> <text x="220" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">THE PRE-DEPLOYMENT CASE — SIX ANSWERS</text>
      {six.map((s, i) => (
        <g key={i}>
          <rect x="44" y={84 + i * 28} width="18" height="18" rx="4" fill={COLORS.blue} /> <text x="53" y={97 + i * 28} textAnchor="middle" fill={COLORS.white} fontSize="7.4" fontWeight="700">{String(i + 1)}</text> <text x="70" y={97 + i * 28} fill={COLORS.slate700} fontSize="7" fontWeight="700">{s[0]}</text>
          <text x="142" y={97 + i * 28} fill={COLORS.slate600} fontSize="6.8">{s[1]}</text>
        </g>
      ))}
      <text x="44" y="248" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">state success as a number against a comparator, not as an efficiency ambition</text>
      <rect x="430" y="56" width="340" height="200" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" />
      <rect x="430" y="56" width="340" height="18" rx="9" fill={COLORS.red} /> <text x="600" y="69" textAnchor="middle" fill={COLORS.white} fontSize="8" fontWeight="700">WHAT A RISK COMMITTEE WILL ASK</text>
      {asks.map((t, i) => <text key={i} x="444" y={92 + i * 15} fill={COLORS.slate600} fontSize="6.9">{t}</text>)}
      <text x="444" y="240" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">bring answers, or the meeting produces an action</text>
      <text x="444" y="250" fill={COLORS.slate500} fontSize="6.8" fontStyle="italic">list instead of a decision</text>
      <rect x="30" y="266" width="740" height="84" rx="9" fill={COLORS.white} stroke={COLORS.amber} strokeWidth="2" /> <text x="400" y="284" textAnchor="middle" fill={COLORS.amber} fontSize="8.4" fontWeight="700">SCALE THE CASE TO CONSEQUENCE — NOT EVERY USE NEEDS THE SAME WEIGHT</text>
      <rect x="100" y="294" width="560" height="14" rx="7" fill={COLORS.slate200} />
      <rect x="100" y="294" width="180" height="14" rx="7" fill={COLORS.emerald} />
      <rect x="500" y="294" width="160" height="14" rx="7" fill={COLORS.red} /> <text x="100" y="322" fill={COLORS.slate600} fontSize="7">an internal drafting aid — no customer effect, no confidential input</text> <text x="660" y="322" textAnchor="end" fill={COLORS.slate600} fontSize="7">a credit decisioning model</text>
      <text x="400" y="340" textAnchor="middle" fill={COLORS.slate600} fontSize="7.2">running both through the identical process teaches everybody that the process is theatre</text>
      <rect x="30" y="360" width="740" height="78" rx="9" fill={COLORS.white} stroke={COLORS.red} strokeWidth="2" /> <text x="400" y="378" textAnchor="middle" fill={COLORS.red} fontSize="8.4" fontWeight="700">THE PILOT THAT NEVER ENDS — WHAT DOES NEED DISCIPLINE AT ANY SCALE IS THE EXIT</text>
      {exit.map((e, i) => (
        <g key={i}>
          <rect x={42 + i * 244} y="386" width="228" height="42" rx="6" fill={COLORS.slate50} stroke={COLORS.red} strokeWidth="1.2" />
          {e.map((t, j) => <text key={j} x={156 + i * 244} y={(e.length === 3 ? 400 : 406) + j * 11} textAnchor="middle" fill={COLORS.slate600} fontSize="6.6">{t}</text>)}
        </g>
      ))}
      <rect x="30" y="446" width="740" height="48" rx="10" fill={COLORS.slate900} /> <text x="400" y="466" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">GET THE ASSUMPTIONS WRITTEN WHILE THEY CAN STILL BE CHECKED</text> <text x="400" y="483" textAnchor="middle" fill={COLORS.white} fontSize="9" opacity="0.9">the owner is accountable for the outcome; a project sponsor is a different role entirely</text>
    </DiagramFrame>
  );
};
export const FinanceSourceLadderDiagram = () => {
  const rungs = [
    { c: COLORS.blue, w: 58, n: 'Primary regulation and rules', s: 'binding — everything below it is a reading', d: ['The text that creates the duty. Every rung', 'below is somebody reading it, and readings', 'drift from the text over time.'], e: ['The EU AI Act, GDPR, MiFID II, the', 'Market Abuse Regulation and DORA;', 'ECOA with Regulation B in the US'] },
    { c: COLORS.cyan, w: 47, n: 'Supervisory expectations', s: 'how the bodies that examine you read them', d: ['Not law, but the closest available statement', 'of how the rules will be applied to your firm.', 'Reissued often — check the version.'], e: ['US banking agencies on model risk;', 'the UK PRA’s model risk principles;', 'FINRA Rules 3110 and 2210; the FCA'] },
    { c: COLORS.emerald, w: 36, n: 'Standards and evidence', s: 'disinterested, and the method is shown', d: ['No product to sell, and the method is on the', 'page. General and slow — it describes a', 'population, not your book.'], e: ['The NIST AI Risk Management', 'Framework; FSB, IOSCO and Basel', 'Committee work on AI in finance'] },
    { c: COLORS.amber, w: 24, n: 'Practitioner commentary', s: 'fast and concrete, but nobody checked it', d: ['Says what a deployment actually feels like,', 'which no supervisor writes down. Generalises', 'from one firm, and is reviewed by no one.'], e: ['Conference talks, client alerts,', 'blog posts, and single-firm', 'experience written up informally'] },
    { c: COLORS.red, w: 12, n: 'Vendor material', s: 'written by the party selling the answer', d: ['The only source for what a product actually', 'does, and the least disinterested one you', 'will read. Each claim is one to test.'], e: ['Product pages, benchmark claims,', 'demos, and case studies with no', 'independent replication'] },
  ];
  return (
    <DiagramFrame viewBox="0 0 800 508" caption="Every rung has a use — the ladder is about how much weight a claim carries on its own.">
      <defs><marker id="arrowFSLa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill={COLORS.slate400} /></marker></defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Weighing what you read about AI in finance</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the higher the rung, the more weight a claim carries on its own — weight increases upwards</text>
      <text x="44" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">RUNG</text>
      <text x="258" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT IT IS, AND WHY IT SITS HERE</text>
      <text x="510" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">EXAMPLES BEHIND THIS COURSE</text>
      <text x="706" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WEIGHT</text>
      <line x1="17" y1="392" x2="17" y2="72" stroke={COLORS.slate300} strokeWidth="2" markerEnd="url(#arrowFSLa)" />
      {rungs.map((r, i) => (
        <g key={i}>
          <rect x="30" y={70 + i * 66} width="740" height="58" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          <rect x="30" y={70 + i * 66} width="7" height="58" rx="3" fill={r.c} /> <text x="46" y={92 + i * 66} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{r.n}</text> <text x="46" y={106 + i * 66} fill={COLORS.slate500} fontSize="7.8">{r.s}</text>
          {r.d.map((t, j) => <text key={j} x="258" y={90 + i * 66 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>)}
          {r.e.map((t, j) => <text key={j} x="510" y={90 + i * 66 + j * 12} fill={COLORS.slate700} fontSize="8">{t}</text>)}
          <rect x="706" y={95 + i * 66} width="58" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="706" y={95 + i * 66} width={r.w} height="8" rx="4" fill={r.c} />
        </g>
      ))}
      <rect x="30" y="404" width="740" height="38" rx="8" fill={COLORS.slate700} /> <text x="400" y="420" textAnchor="middle" fill={COLORS.white} fontSize="9" fontWeight="700">Closest to you and not on this ladder: your own regulator’s guidance, your model risk policy and inventory,</text> <text x="400" y="434" textAnchor="middle" fill={COLORS.slate300} fontSize="8.4">your compliance and records retention rules, and your approved-tool list — the group that settles the most real questions</text>
      <rect x="30" y="450" width="740" height="44" rx="10" fill={COLORS.slate900} /> <text x="400" y="470" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Read downwards to find what binds you; read upwards to check what you were told</text> <text x="400" y="486" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">This course is not on the ladder — it is model-drafted orientation, and it carries no authority at all</text>
    </DiagramFrame>
  );
};
