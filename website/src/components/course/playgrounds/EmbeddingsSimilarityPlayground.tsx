import React, { useState, useMemo } from 'react';
import { GitMerge } from 'lucide-react';

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of',
  'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'that',
  'this', 'it', 'its', 'not', 'no', 'from', 'as', 'than', 'then', 'so', 'if',
  'what', 'which', 'who', 'how', 'all', 'each', 'both', 'any', 'more', 'also',
]);

function getWords(text: string): string[] {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

function cosineSimilarity(text1: string, text2: string): { score: number; shared: string[] } {
  const words1 = getWords(text1);
  const words2 = getWords(text2);
  if (words1.length === 0 || words2.length === 0) return { score: 0, shared: [] };

  const set2 = new Set(words2);
  const shared = [...new Set(words1.filter(w => set2.has(w)))];

  const vocab = new Set([...words1, ...words2]);
  const tf = (words: string[]) => {
    const c: Record<string, number> = {};
    words.forEach(w => { c[w] = (c[w] || 0) + 1; });
    return c;
  };
  const tf1 = tf(words1);
  const tf2 = tf(words2);

  let dot = 0, mag1 = 0, mag2 = 0;
  vocab.forEach(w => {
    const v1 = (tf1[w] || 0) / words1.length;
    const v2 = (tf2[w] || 0) / words2.length;
    dot += v1 * v2;
    mag1 += v1 * v1;
    mag2 += v2 * v2;
  });

  const score = mag1 === 0 || mag2 === 0 ? 0 : Math.min(dot / (Math.sqrt(mag1) * Math.sqrt(mag2)), 1);
  return { score, shared };
}

const EXAMPLES = [
  { label: 'Identical',      a: 'A firewall blocks unauthorized network traffic.',              b: 'A firewall blocks unauthorized network traffic.' },
  { label: 'Similar meaning', a: 'The firewall blocked the intrusion attempt.',                 b: 'The network security device prevented the attack.' },
  { label: 'Same topic',     a: 'Phishing emails steal credentials from users.',               b: 'Cybersecurity teams defend against social engineering attacks.' },
  { label: 'Unrelated',      a: 'Machine learning models require large training datasets.',    b: 'The coffee shop opens at 7am on weekdays.' },
];

function getLabel(score: number): { text: string; color: string } {
  if (score > 0.9) return { text: 'Nearly identical', color: 'text-emerald-600' };
  if (score > 0.6) return { text: 'Very similar', color: 'text-green-600' };
  if (score > 0.3) return { text: 'Somewhat similar', color: 'text-amber-600' };
  if (score > 0.05) return { text: 'Loosely related', color: 'text-orange-500' };
  return { text: 'Very different', color: 'text-red-500' };
}

export const EmbeddingsSimilarityPlayground: React.FC = () => {
  const [textA, setTextA] = useState(EXAMPLES[1].a);
  const [textB, setTextB] = useState(EXAMPLES[1].b);

  const { score, shared } = useMemo(() => cosineSimilarity(textA, textB), [textA, textB]);
  const pct = Math.round(score * 100);
  const { text: label, color: labelColor } = getLabel(score);

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <GitMerge className="w-5 h-5 text-purple-500" />
        <h2 className="text-lg font-bold text-slate-900">Embeddings Similarity</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        Embeddings convert text into vectors so models can measure meaning, not just word overlap. This demo uses word-frequency similarity — try the examples below to see where it agrees and disagrees with real embeddings.
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {EXAMPLES.map(ex => (
          <button
            key={ex.label}
            onClick={() => { setTextA(ex.a); setTextB(ex.b); }}
            className="text-xs px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition"
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        <div>
          <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Text A</label>
          <textarea
            value={textA}
            onChange={e => setTextA(e.target.value)}
            rows={3}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none bg-white"
          />
        </div>
        <div>
          <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Text B</label>
          <textarea
            value={textB}
            onChange={e => setTextB(e.target.value)}
            rows={3}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none bg-white"
          />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 mb-4">
        <div className="flex items-end gap-3 mb-3">
          <span className="text-4xl font-bold text-slate-900">{pct}%</span>
          <span className={`text-sm font-semibold mb-1 ${labelColor}`}>{label}</span>
        </div>
        <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-purple-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>0% — Completely different</span>
          <span>100% — Identical</span>
        </div>
        {shared.length > 0 && (
          <div className="mt-3 pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-400 mb-1.5">Shared meaningful words:</p>
            <div className="flex flex-wrap gap-1.5">
              {shared.map(w => (
                <span key={w} className="px-2 py-0.5 rounded-full bg-purple-50 border border-purple-200 text-xs text-purple-700">{w}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
        <p className="text-xs font-semibold text-amber-700 mb-1">Why real embeddings are more powerful</p>
        <p className="text-xs text-amber-700 leading-relaxed">
          Try typing "car" in Text A and "automobile" in Text B — this tool scores 0% (no shared words). Real neural network embeddings would score ~90% because they learn that these words are semantically equivalent from billions of examples. That gap is exactly what makes RAG and vector search so powerful in production.
        </p>
      </div>
    </div>
  );
};
