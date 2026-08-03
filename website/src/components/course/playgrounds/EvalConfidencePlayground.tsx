import React, { useState } from 'react';
import { BarChart3, Info } from 'lucide-react';

const Z = 1.96;
const Z2 = Z * Z;

interface Interval { lo: number; hi: number; centre: number; }

// Wilson score interval at 95%.
function wilson(p: number, n: number): Interval {
  const denom = 1 + Z2 / n;
  const centre = (p + Z2 / (2 * n)) / denom;
  const half = (Z * Math.sqrt((p * (1 - p)) / n + Z2 / (4 * n * n))) / denom;
  return { lo: Math.max(0, centre - half), hi: Math.min(1, centre + half), centre };
}

const separated = (pA: number, pB: number, n: number) => {
  const a = wilson(pA, n);
  const b = wilson(pB, n);
  return a.hi < b.lo || b.hi < a.lo;
};

// Smallest n (same for both arms) at which the two intervals stop overlapping.
function requiredN(pA: number, pB: number): number | null {
  if (pA === pB) return null;
  const MAX = 2000000;
  let lo = 2;
  let hi = 2;
  while (hi <= MAX && !separated(pA, pB, hi)) { lo = hi; hi *= 2; }
  if (hi > MAX) return null;
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (separated(pA, pB, mid)) hi = mid; else lo = mid;
  }
  return hi;
}

const PRESETS = [
  { label: 'n=30, 80% vs 87%', n: 30, a: 80, b: 87 },
  { label: 'n=100, 72% vs 79%', n: 100, a: 72, b: 79 },
  { label: 'n=1,000, 72% vs 79%', n: 1000, a: 72, b: 79 },
  { label: 'n=200, 61% vs 84%', n: 200, a: 61, b: 84 },
];

const fmt = (n: number) => n.toLocaleString('en-US');
const p1 = (x: number) => (x * 100).toFixed(1);

const Bar: React.FC<{ name: string; rate: number; n: number; ci: Interval; color: string }> = ({
  name, rate, n, ci, color,
}) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-sm font-medium text-slate-700">
        {name} <span className="text-slate-400 font-normal">· {Math.round((rate / 100) * n).toLocaleString('en-US')} of {fmt(n)} passed</span>
      </span>
      <span className="text-sm font-bold text-slate-900">
        {rate.toFixed(0)}% <span className="text-xs font-normal text-slate-500">[{p1(ci.lo)}–{p1(ci.hi)}]</span>
      </span>
    </div>
    <div className="relative h-8 rounded-lg bg-slate-100 overflow-hidden">
      <div className={`absolute inset-y-0 left-0 ${color} opacity-25`} style={{ width: `${rate}%` }} />
      <div
        className={`absolute inset-y-2 ${color} opacity-40 rounded`}
        style={{ left: `${ci.lo * 100}%`, width: `${(ci.hi - ci.lo) * 100}%` }}
      />
      <div className={`absolute inset-y-1 w-0.5 ${color}`} style={{ left: `${ci.lo * 100}%` }} />
      <div className={`absolute inset-y-1 w-0.5 ${color}`} style={{ left: `calc(${ci.hi * 100}% - 2px)` }} />
      <div className={`absolute inset-y-0 w-1 ${color}`} style={{ left: `calc(${rate}% - 2px)` }} />
    </div>
  </div>
);

export const EvalConfidencePlayground: React.FC = () => {
  const [n, setN] = useState(30);
  const [rateA, setRateA] = useState(80);
  const [rateB, setRateB] = useState(87);

  const pA = rateA / 100;
  const pB = rateB / 100;
  const ciA = wilson(pA, n);
  const ciB = wilson(pB, n);

  const overlap = !(ciA.hi < ciB.lo || ciB.hi < ciA.lo);
  const gap = Math.abs(rateB - rateA);
  const needed = requiredN(pA, pB);
  const leader = rateB > rateA ? 'B' : 'A';

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <BarChart3 className="w-5 h-5 text-cyan-500" />
        <h2 className="text-lg font-bold text-slate-900">Eval Confidence Intervals</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        An eval score is a measurement, and every measurement has noise. Run 30 test cases and a 7-point lead is indistinguishable from a coin landing your way. Set the sample size and the two observed pass rates, then look at how much of each bar is uncertainty.
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {PRESETS.map(p => (
          <button
            key={p.label}
            onClick={() => { setN(p.n); setRateA(p.a); setRateB(p.b); }}
            className="text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 mb-5 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">Sample size (test cases per model)</label>
            <span className="text-sm font-bold text-cyan-600">n = {fmt(n)}</span>
          </div>
          <input
            type="range" min={10} max={2000} step={10}
            value={n}
            onChange={e => setN(parseInt(e.target.value, 10))}
            className="w-full accent-cyan-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-slate-700">Model A pass rate</label>
              <span className="text-sm font-bold text-slate-900">{rateA}%</span>
            </div>
            <input
              type="range" min={0} max={100} step={1}
              value={rateA}
              onChange={e => setRateA(parseInt(e.target.value, 10))}
              className="w-full accent-slate-500"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-slate-700">Model B pass rate</label>
              <span className="text-sm font-bold text-slate-900">{rateB}%</span>
            </div>
            <input
              type="range" min={0} max={100} step={1}
              value={rateB}
              onChange={e => setRateB(parseInt(e.target.value, 10))}
              className="w-full accent-cyan-500"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 mb-4 space-y-5">
        <p className="text-xs uppercase tracking-wider text-slate-400">95% Wilson score intervals</p>
        <Bar name="Model A" rate={rateA} n={n} ci={ciA} color="bg-slate-600" />
        <Bar name="Model B" rate={rateB} n={n} ci={ciB} color="bg-cyan-600" />
        <div className="flex justify-between text-xs text-slate-400">
          <span>0%</span><span>50%</span><span>100%</span>
        </div>
      </div>

      <div className={`rounded-xl border p-5 mb-4 ${overlap ? 'border-amber-200 bg-amber-50' : 'border-emerald-200 bg-emerald-50'}`}>
        <p className={`text-sm font-bold mb-1.5 ${overlap ? 'text-amber-800' : 'text-emerald-800'}`}>
          {gap === 0
            ? 'Identical observed rates — nothing to distinguish.'
            : overlap
              ? `Not distinguishable from noise at n = ${fmt(n)}.`
              : `Model ${leader} is ahead by more than the noise at n = ${fmt(n)}.`}
        </p>
        <p className={`text-xs leading-relaxed ${overlap ? 'text-amber-700' : 'text-emerald-700'}`}>
          {gap === 0 ? (
            <>Both intervals are [{p1(ciA.lo)}%–{p1(ciA.hi)}%]. Move one of the rate sliders to create a gap.</>
          ) : overlap ? (
            <>
              The intervals overlap: A spans {p1(ciA.lo)}%–{p1(ciA.hi)}% and B spans {p1(ciB.lo)}%–{p1(ciB.hi)}%.
              The observed {gap}-point gap is well inside what {fmt(n)} samples could produce by chance alone. Reporting
              "Model {leader} is better" from this data is reporting a coin flip.
            </>
          ) : (
            <>
              The intervals are disjoint: A spans {p1(ciA.lo)}%–{p1(ciA.hi)}% and B spans {p1(ciB.lo)}%–{p1(ciB.hi)}%.
              A {gap}-point gap at this sample size is unlikely to be pure sampling noise.
            </>
          )}
        </p>
        <p className="text-xs text-slate-500 mt-2 italic">
          Non-overlapping intervals are a rough screen, not a formal test. Two 95% intervals can overlap while a proper
          two-proportion test still finds a significant difference, so treat overlap as "do not celebrate yet" rather
          than a verdict.
        </p>
      </div>

      <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 flex gap-3">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-slate-700 mb-1">How many test cases would you actually need?</p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {gap === 0 ? (
              <>With identical observed rates, no sample size separates them.</>
            ) : needed === null ? (
              <>This gap is too small to resolve at any practical sample size.</>
            ) : needed <= n ? (
              <>This gap separates from about <strong>n = {fmt(needed)}</strong> per model, and you already have {fmt(n)}.</>
            ) : (
              <>
                To keep these observed rates and get non-overlapping intervals you would need roughly{' '}
                <strong>n = {fmt(needed)}</strong> cases per model — about {Math.round(needed / n)}× your current eval set.
                Halving the gap you care about roughly quadruples the cases required, which is why "we ran it on 20 prompts"
                can never settle a close call.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
