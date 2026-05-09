import React, { useState, useMemo } from 'react';
import { Hash } from 'lucide-react';

const TOKEN_COLORS = [
  'bg-blue-100 text-blue-800 border-blue-200',
  'bg-emerald-100 text-emerald-800 border-emerald-200',
  'bg-purple-100 text-purple-800 border-purple-200',
  'bg-amber-100 text-amber-800 border-amber-200',
  'bg-rose-100 text-rose-800 border-rose-200',
  'bg-cyan-100 text-cyan-800 border-cyan-200',
];

const PRICING = [
  { model: 'GPT-4o', price: 2.50 },
  { model: 'GPT-4o mini', price: 0.15 },
  { model: 'Claude 3.5 Sonnet', price: 3.00 },
  { model: 'Claude 3.5 Haiku', price: 0.80 },
];

function tokenize(text: string): string[] {
  if (!text.trim()) return [];
  const tokens: string[] = [];
  const re = /\s*(?:[a-zA-Z]+(?:'[a-zA-Z]+)?|\d+|[^\s\w])/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const raw: string = m[0];
    const word = raw.trimStart();
    const space = raw.slice(0, raw.length - word.length);
    if (/^[a-zA-Z]{10,}$/.test(word)) {
      const mid = Math.ceil(word.length / 2);
      tokens.push(space + word.slice(0, mid));
      tokens.push(word.slice(mid));
    } else {
      tokens.push(raw);
    }
  }
  return tokens;
}

const DEFAULT = 'The quick brown fox jumps over the lazy dog. Cybersecurity professionals need to understand tokenization to accurately estimate API costs and context limits.';

export const TokenizerPlayground: React.FC = () => {
  const [text, setText] = useState(DEFAULT);
  const tokens = useMemo(() => tokenize(text), [text]);
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Hash className="w-5 h-5 text-emerald-500" />
        <h2 className="text-lg font-bold text-slate-900">Tokeniser</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        LLMs don't read words — they read tokens. Type anything below and see it split in real time. Token count is what vendors bill on.
      </p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
        placeholder="Type or paste text here…"
        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 resize-none font-mono bg-white"
      />

      <div className="mt-3 p-3 rounded-lg bg-slate-50 border border-slate-200 min-h-14">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">Tokens (· = space)</p>
        <div className="flex flex-wrap gap-1">
          {tokens.length === 0
            ? <span className="text-xs text-slate-400 italic">Start typing to see tokens appear…</span>
            : tokens.map((t, i) => (
                <span key={i} className={`px-1.5 py-0.5 rounded text-xs font-mono border ${TOKEN_COLORS[i % TOKEN_COLORS.length]}`}>
                  {t.replace(/ /g, '·')}
                </span>
              ))
          }
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {([['Tokens', tokens.length], ['Words', wordCount], ['Characters', text.length]] as [string, number][]).map(([label, val]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-3 text-center">
            <div className="text-xl font-bold text-slate-900">{val.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {tokens.length > 0 && (
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">Cost for this input (approximate)</p>
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
            {PRICING.map((row, i) => {
              const cost = (tokens.length / 1_000_000) * row.price;
              return (
                <div key={row.model} className={`flex items-center justify-between px-3 py-2.5 text-sm ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                  <span className="font-medium text-slate-800">{row.model}</span>
                  <span className="text-slate-400 text-xs">${row.price.toFixed(2)} / 1M</span>
                  <span className="font-mono text-slate-900 text-xs">{cost < 0.000001 ? '< $0.000001' : `$${cost.toFixed(6)}`}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-400 mt-1.5 italic">Prices approximate as of early 2026. Real tokenization may vary slightly.</p>
        </div>
      )}
    </div>
  );
};
