import React, { useState } from 'react';
import { MessageSquareText, RotateCcw, Dices } from 'lucide-react';

const STEM = 'The security team reviewed the';

type Cand = [string, number];

// A word ending in "." is terminal — the model has emitted its stop token.
const TREE: Record<string, Cand[]> = {
  '': [['alert', 30], ['logs', 25], ['incident', 18], ['report', 13], ['request', 9], ['footage', 5]],

  'alert': [['and', 44], ['but', 22], ['again.', 20], ['twice.', 14]],
  'logs': [['and', 38], ['from', 28], ['again.', 20], ['twice.', 14]],
  'incident': [['and', 41], ['report', 25], ['again.', 20], ['quietly.', 14]],
  'report': [['and', 40], ['before', 26], ['again.', 20], ['twice.', 14]],
  'request': [['and', 46], ['from', 24], ['again.', 18], ['twice.', 12]],
  'footage': [['and', 42], ['from', 26], ['again.', 20], ['twice.', 12]],

  'alert and': [['escalated', 48], ['closed.', 34], ['ignored.', 18]],
  'alert but': [['found', 52], ['missed.', 28], ['ignored.', 20]],
  'logs and': [['found', 50], ['flagged.', 31], ['archived.', 19]],
  'logs from': [['the', 58], ['yesterday.', 25], ['everywhere.', 17]],
  'incident and': [['escalated', 45], ['closed.', 33], ['reopened.', 22]],
  'incident report': [['and', 47], ['twice.', 30], ['carefully.', 23]],
  'report and': [['found', 49], ['signed.', 30], ['filed.', 21]],
  'report before': [['the', 55], ['lunch.', 26], ['anyone.', 19]],
  'request and': [['approved', 46], ['denied.', 32], ['escalated.', 22]],
  'request from': [['the', 57], ['legal.', 24], ['nowhere.', 19]],
  'footage and': [['found', 47], ['saw.', 30], ['archived.', 23]],
  'footage from': [['the', 56], ['yesterday.', 26], ['outside.', 18]],

  'alert and escalated': [['it.', 61], ['immediately.', 24], ['everything.', 15]],
  'alert but found': [['nothing.', 55], ['everything.', 26], ['three.', 19]],
  'logs and found': [['nothing.', 52], ['evidence.', 29], ['everything.', 19]],
  'logs from the': [['firewall.', 46], ['endpoint.', 33], ['printer.', 21]],
  'incident and escalated': [['it.', 60], ['immediately.', 25], ['nothing.', 15]],
  'incident report and': [['signed.', 48], ['filed.', 33], ['shredded.', 19]],
  'report and found': [['nothing.', 54], ['errors.', 28], ['everything.', 18]],
  'report before the': [['meeting.', 51], ['deadline.', 30], ['weekend.', 19]],
  'request and approved': [['it.', 63], ['everything.', 22], ['nothing.', 15]],
  'request from the': [['vendor.', 43], ['auditor.', 33], ['intern.', 24]],
  'footage and found': [['nothing.', 53], ['someone.', 28], ['everything.', 19]],
  'footage from the': [['garage.', 45], ['lobby.', 30], ['rooftop.', 25]],
};

const BAR_COLORS = [
  'bg-indigo-500', 'bg-indigo-400', 'bg-indigo-300',
  'bg-slate-400', 'bg-slate-300', 'bg-slate-200',
];

const isTerminal = (w: string) => w.endsWith('.');

function weightedPick(cands: Cand[]): string {
  const total = cands.reduce((s, c) => s + c[1], 0);
  let r = Math.random() * total;
  for (const [w, p] of cands) {
    r -= p;
    if (r <= 0) return w;
  }
  return cands[cands.length - 1][0];
}

export const NextWordPlayground: React.FC = () => {
  const [path, setPath] = useState<string[]>([]);
  const [mode, setMode] = useState<'top' | 'sample'>('sample');

  const done = path.length > 0 && isTerminal(path[path.length - 1]);
  const key = path.join(' ');
  const cands: Cand[] = done ? [] : TREE[key] ?? [];
  const sentence = [STEM, ...path].join(' ');

  const choose = (word: string) => setPath(p => [...p, word]);

  const auto = () => {
    if (cands.length === 0) return;
    if (mode === 'top') {
      const best = cands.reduce((a, b) => (b[1] > a[1] ? b : a));
      choose(best[0]);
    } else {
      choose(weightedPick(cands));
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <MessageSquareText className="w-5 h-5 text-indigo-500" />
        <h2 className="text-lg font-bold text-slate-900">Next Word Predictor</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        A language model does not look anything up. At every step it produces a probability distribution over possible next words and picks one. Build a sentence word by word below — click a candidate yourself, or let the model choose — and watch how a different pick early on sends the whole sentence somewhere else.
      </p>

      <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-4 mb-4">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-1.5">Sentence so far</p>
        <p className="text-base text-slate-900 font-medium leading-relaxed">
          {sentence}
          {!done && <span className="text-slate-300"> ▌</span>}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-0.5">
          {(['top', 'sample'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`text-xs px-3 py-1 rounded-full transition ${
                mode === m ? 'bg-indigo-500 text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {m === 'top' ? 'Most likely only' : 'Sample (weighted)'}
            </button>
          ))}
        </div>
        <button
          onClick={auto}
          disabled={done}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition ${
            done
              ? 'text-slate-300 border-slate-200 cursor-not-allowed'
              : 'text-slate-600 border-slate-300 hover:bg-slate-50'
          }`}
        >
          <Dices className="w-3 h-3" /> {mode === 'top' ? 'Take the top word' : 'Sample a word'}
        </button>
        <button
          onClick={() => setPath([])}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 transition"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 mb-4">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">
          {done ? 'Stop token emitted' : 'Candidate next words'}
        </p>

        {done ? (
          <p className="text-sm text-slate-600 leading-relaxed">
            The model sampled a word that ends the sentence — the equivalent of a stop token. Reset and take a different early branch to get a completely different, equally confident sentence.
          </p>
        ) : cands.length === 0 ? (
          <p className="text-sm text-slate-600 leading-relaxed">
            This demo's hand-authored tree ends here. Reset to start again.
          </p>
        ) : (
          <div className="space-y-2">
            {cands.map(([word, p], i) => {
              const isTop = i === 0;
              return (
                <button
                  key={word}
                  onClick={() => choose(word)}
                  className={`w-full text-left rounded-lg border px-3 py-2 transition ${
                    isTop ? 'border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-mono font-medium text-slate-800">
                      {word}
                      {isTerminal(word) && <span className="ml-1.5 text-xs font-sans text-slate-400">(ends here)</span>}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{p.toFixed(0)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${BAR_COLORS[i % BAR_COLORS.length]}`}
                      style={{ width: `${p}%` }}
                    />
                  </div>
                </button>
              );
            })}
            <p className="text-xs text-slate-400 pt-1">
              Probabilities sum to {cands.reduce((s, c) => s + c[1], 0)}%.{' '}
              {mode === 'top'
                ? 'In "most likely only" mode the model takes the top bar every time — the same sentence, every run.'
                : 'In "sample" mode the model rolls a weighted die, so low-probability words occasionally win.'}
            </p>
          </div>
        )}
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
        <p className="text-xs font-semibold text-amber-700 mb-1">The model has no idea whether any of this is true</p>
        <p className="text-xs text-amber-700 leading-relaxed">
          Nothing in this process consults a record of what actually happened. Every candidate above is simply a word that tends to follow the words before it, and the model is exactly as fluent and exactly as confident whether it says "found nothing" or "found evidence". That is what a hallucination is: not a lookup failure, but a well-formed continuation that nobody checked against reality.
        </p>
      </div>
    </div>
  );
};
