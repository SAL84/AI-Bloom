import React, { useState } from 'react';
import { MessageSquareText, RotateCcw, Dices } from 'lucide-react';

const STEM = 'The old lighthouse keeper opened the';

type Cand = [string, number];

// A word ending in "." is terminal — the model has emitted its stop token.
const TREE: Record<string, Cand[]> = {
  '': [['door', 30], ['window', 25], ['logbook', 18], ['letter', 13], ['gate', 9], ['crate', 5]],

  'door': [['and', 44], ['but', 22], ['slowly.', 20], ['again.', 14]],
  'window': [['and', 38], ['to', 28], ['slowly.', 20], ['again.', 14]],
  'logbook': [['and', 41], ['to', 25], ['carefully.', 20], ['again.', 14]],
  'letter': [['and', 40], ['from', 26], ['carefully.', 20], ['twice.', 14]],
  'gate': [['and', 46], ['for', 24], ['slowly.', 18], ['again.', 12]],
  'crate': [['and', 42], ['from', 26], ['carefully.', 20], ['twice.', 12]],

  'door and': [['stepped', 48], ['waited.', 34], ['listened.', 18]],
  'door but': [['found', 52], ['hesitated.', 28], ['stopped.', 20]],
  'window and': [['looked', 50], ['waited.', 31], ['listened.', 19]],
  'window to': [['the', 58], ['listen.', 25], ['breathe.', 17]],
  'logbook and': [['wrote', 45], ['read.', 33], ['sighed.', 22]],
  'logbook to': [['the', 47], ['check.', 30], ['remember.', 23]],
  'letter and': [['read', 49], ['paused.', 30], ['smiled.', 21]],
  'letter from': [['the', 55], ['home.', 26], ['nowhere.', 19]],
  'gate and': [['walked', 46], ['waited.', 32], ['listened.', 22]],
  'gate for': [['the', 57], ['nobody.', 24], ['hours.', 19]],
  'crate and': [['found', 47], ['paused.', 30], ['frowned.', 23]],
  'crate from': [['the', 56], ['storage.', 26], ['harbour.', 18]],

  'door and stepped': [['outside.', 61], ['back.', 24], ['through.', 15]],
  'door but found': [['nothing.', 55], ['someone.', 26], ['everything.', 19]],
  'window and looked': [['out.', 52], ['down.', 29], ['away.', 19]],
  'window to the': [['sea.', 46], ['storm.', 33], ['garden.', 21]],
  'logbook and wrote': [['nothing.', 48], ['everything.', 27], ['slowly.', 25]],
  'logbook to the': [['date.', 51], ['end.', 30], ['margin.', 19]],
  'letter and read': [['it.', 60], ['aloud.', 25], ['nothing.', 15]],
  'letter from the': [['mainland.', 43], ['harbour.', 33], ['company.', 24]],
  'gate and walked': [['through.', 53], ['away.', 28], ['back.', 19]],
  'gate for the': [['visitor.', 45], ['delivery.', 30], ['storm.', 25]],
  'crate and found': [['nothing.', 53], ['papers.', 28], ['everything.', 19]],
  'crate from the': [['harbour.', 45], ['cellar.', 30], ['ship.', 25]],
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
