import React, { useState } from 'react';
import { Sigma, AlertTriangle } from 'lucide-react';

const POPS = [1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];

const MIN_PREV = 0.01;
const MAX_PREV = 20;
const SPAN = MAX_PREV / MIN_PREV;

const prevToT = (p: number) => (100 * Math.log(p / MIN_PREV)) / Math.log(SPAN);
const tToPrev = (t: number) => MIN_PREV * Math.pow(SPAN, t / 100);

const fmt = (n: number) => Math.round(n).toLocaleString('en-US');
const pctText = (p: number) => (p < 0.1 ? p.toFixed(3) : p < 1 ? p.toFixed(2) : p.toFixed(1));

const PRESETS = [
  { label: 'Security alerts', pop: 1000000, prev: 0.05, sens: 95, spec: 99 },
  { label: 'Disease screening', pop: 100000, prev: 0.5, sens: 99, spec: 98 },
  { label: 'Payment fraud', pop: 500000, prev: 0.2, sens: 90, spec: 99.5 },
  { label: 'Common condition', pop: 10000, prev: 10, sens: 90, spec: 90 },
];

export const BaseRatePlayground: React.FC = () => {
  const [pop, setPop] = useState(1000000);
  const [prev, setPrev] = useState(0.05);
  const [sens, setSens] = useState(95);
  const [spec, setSpec] = useState(99);

  // Confusion matrix — counts are integers and sum exactly to the population.
  const positives = Math.round(pop * (prev / 100));
  const negatives = pop - positives;
  const tp = Math.round(positives * (sens / 100));
  const fn = positives - tp;
  const tn = Math.round(negatives * (spec / 100));
  const fp = negatives - tn;

  const flagged = tp + fp;
  const precision = flagged > 0 ? tp / flagged : 0;
  const falsePerReal = tp > 0 ? fp / tp : null;
  const oneIn = prev > 0 ? Math.round(100 / prev) : 0;

  const precColor =
    precision >= 0.75 ? 'text-emerald-600' : precision >= 0.4 ? 'text-amber-600' : 'text-red-600';

  const cell = (label: string, value: number, tone: string) => (
    <div className={`rounded-lg border p-3 ${tone}`}>
      <div className="text-lg font-bold">{fmt(value)}</div>
      <div className="text-xs mt-0.5 leading-tight">{label}</div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Sigma className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-bold text-slate-900">Base Rate Calculator</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        A detector's accuracy tells you how it behaves on a single case. It does not tell you what an alert means. When the thing you are looking for is rare, even an excellent detector spends most of its alerts on cases that are perfectly fine. Move the sliders and watch precision collapse.
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {PRESETS.map(p => (
          <button
            key={p.label}
            onClick={() => { setPop(p.pop); setPrev(p.prev); setSens(p.sens); setSpec(p.spec); }}
            className="text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 mb-5 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">Population (cases screened)</label>
            <span className="text-sm font-bold text-slate-900">{fmt(pop)}</span>
          </div>
          <input
            type="range" min={0} max={POPS.length - 1} step={1}
            value={Math.max(0, POPS.indexOf(pop))}
            onChange={e => setPop(POPS[parseInt(e.target.value, 10)])}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-sm font-medium text-slate-700">Base rate (how common the thing is)</label>
            <span className="text-sm font-bold text-blue-600">{pctText(prev)}% — 1 in {fmt(oneIn)}</span>
          </div>
          <input
            type="range" min={0} max={100} step={0.5}
            value={prevToT(prev)}
            onChange={e => setPrev(tToPrev(parseFloat(e.target.value)))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0.01% — very rare</span>
            <span>20% — common</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-slate-700">Sensitivity</label>
              <span className="text-sm font-bold text-emerald-600">{sens.toFixed(1)}%</span>
            </div>
            <input
              type="range" min={80} max={99.9} step={0.1}
              value={sens}
              onChange={e => setSens(parseFloat(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <p className="text-xs text-slate-400 mt-1">Of real cases, the share it catches.</p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-medium text-slate-700">Specificity</label>
              <span className="text-sm font-bold text-emerald-600">{spec.toFixed(1)}%</span>
            </div>
            <input
              type="range" min={80} max={99.9} step={0.1}
              value={spec}
              onChange={e => setSpec(parseFloat(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <p className="text-xs text-slate-400 mt-1">Of clean cases, the share it leaves alone.</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 mb-4">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Confusion matrix</p>
        <div className="grid grid-cols-[auto_1fr_1fr] gap-2 items-stretch">
          <div />
          <div className="text-xs font-semibold text-slate-500 text-center pb-1">Detector says ALERT</div>
          <div className="text-xs font-semibold text-slate-500 text-center pb-1">Detector says clear</div>

          <div className="text-xs font-semibold text-slate-500 flex items-center pr-1">Really a case</div>
          {cell('True positives — real, caught', tp, 'border-emerald-200 bg-emerald-50 text-emerald-800')}
          {cell('False negatives — real, missed', fn, 'border-red-200 bg-red-50 text-red-800')}

          <div className="text-xs font-semibold text-slate-500 flex items-center pr-1">Not a case</div>
          {cell('False positives — false alarms', fp, 'border-amber-200 bg-amber-50 text-amber-800')}
          {cell('True negatives — correctly ignored', tn, 'border-slate-200 bg-slate-50 text-slate-700')}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          {fmt(tp)} + {fmt(fn)} + {fmt(fp)} + {fmt(tn)} = {fmt(tp + fn + fp + tn)} cases.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 mb-4">
        <div className="flex items-end gap-3 mb-3">
          <span className={`text-4xl font-bold ${precColor}`}>{(precision * 100).toFixed(1)}%</span>
          <span className="text-sm font-semibold text-slate-500 mb-1">precision — of everything flagged, this much is real</span>
        </div>
        <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${Math.min(100, precision * 100)}%` }}
          />
        </div>
        <p className="text-sm text-slate-800 leading-relaxed">
          {flagged === 0 ? (
            <>Nothing was flagged at all at these settings.</>
          ) : falsePerReal === null ? (
            <>Of <strong>{fmt(flagged)}</strong> alerts raised, <strong>none</strong> are real — every single one is a false alarm.</>
          ) : (
            <>
              Of <strong>{fmt(flagged)}</strong> alerts raised, <strong>{fmt(tp)}</strong> are real — you chase{' '}
              <strong>{falsePerReal < 10 ? falsePerReal.toFixed(1) : fmt(falsePerReal)}</strong> false alarms for every real case.
              {fn > 0 && <> Meanwhile <strong>{fmt(fn)}</strong> real cases are missed entirely.</>}
            </>
          )}
        </p>
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 flex gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-amber-700 mb-1">Alert fatigue is a base-rate problem, not a model-quality problem</p>
          <p className="text-xs text-amber-700 leading-relaxed">
            Push sensitivity and specificity to 99% and precision still craters when the base rate is low, because the enormous pool of clean cases generates false positives faster than the tiny pool of real ones generates true positives. Buying a "more accurate" detector barely moves this. What moves it is raising the base rate in the population you screen — filtering, triaging, or enriching first so the detector only sees candidates where the thing is plausibly present.
          </p>
        </div>
      </div>
    </div>
  );
};
