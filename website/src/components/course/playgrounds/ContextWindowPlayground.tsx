import React, { useState, useMemo } from 'react';
import { Layers } from 'lucide-react';

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

const MODELS = [
  { name: 'GPT-4o', context: 128_000, color: 'bg-green-500' },
  { name: 'GPT-4o mini', context: 128_000, color: 'bg-teal-500' },
  { name: 'Claude 3.5 Sonnet', context: 200_000, color: 'bg-purple-500' },
  { name: 'Gemini 1.5 Pro', context: 1_000_000, color: 'bg-blue-500' },
];

export const ContextWindowPlayground: React.FC = () => {
  const [text, setText] = useState('');
  const tokenCount = useMemo(() => tokenize(text).length, [text]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Layers className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-bold text-slate-900">Context Window Counter</h2>
      </div>
      <p className="text-sm text-slate-500 mb-4 leading-relaxed">
        Paste a prompt, document, or conversation transcript and see how much of each model's context window it fills. When a context limit is exceeded, the model loses access to earlier parts of the conversation.
      </p>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows={6}
        placeholder="Paste your text here — try a long document, a system prompt, or a conversation transcript…"
        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none font-mono bg-white"
      />

      <div className="mt-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
        <span className="text-2xl font-bold text-slate-900">{tokenCount.toLocaleString()}</span>
        <span className="text-base text-slate-500 ml-1.5">tokens</span>
        {tokenCount > 0 && (
          <span className="text-xs text-slate-400 ml-3">
            ≈ {Math.round(tokenCount * 0.75).toLocaleString()} words · {(tokenCount * 4).toLocaleString()} characters
          </span>
        )}
      </div>

      <div className="mt-4 space-y-4">
        {MODELS.map(model => {
          const pct = tokenCount === 0 ? 0 : Math.min((tokenCount / model.context) * 100, 100);
          const warning = pct > 90;
          const caution = pct > 70 && !warning;
          return (
            <div key={model.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-700">{model.name}</span>
                <span className={`text-xs font-mono ${warning ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                  {tokenCount.toLocaleString()} / {model.context.toLocaleString()} ({pct.toFixed(1)}%)
                </span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${warning ? 'bg-red-500' : caution ? 'bg-amber-500' : model.color}`}
                  style={{ width: `${Math.max(pct, 0)}%` }}
                />
              </div>
              {warning && (
                <p className="text-xs text-red-500 mt-1">Context limit nearly reached — the model will start forgetting earlier parts of the conversation.</p>
              )}
            </div>
          );
        })}
      </div>

      {tokenCount === 0 && (
        <p className="text-xs text-slate-400 text-center mt-6 italic">Paste some text above to see the context bars fill.</p>
      )}
    </div>
  );
};
