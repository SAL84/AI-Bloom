import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, SkipForward, RotateCcw } from 'lucide-react';

export type StepType = 'think' | 'tool-call' | 'tool-result' | 'answer';

export interface ScenarioStep {
  type: StepType;
  label: string;
  content: string;
}

interface AgentScenarioProps {
  trigger: string;
  steps: ScenarioStep[];
}

const STYLES: Record<StepType, { border: string; bg: string; label: string; icon: string }> = {
  'think':       { border: 'border-l-blue-400',    bg: 'bg-blue-50',    label: 'text-blue-700',    icon: '🤔' },
  'tool-call':   { border: 'border-l-amber-400',   bg: 'bg-amber-50',   label: 'text-amber-700',   icon: '🔧' },
  'tool-result': { border: 'border-l-emerald-400', bg: 'bg-emerald-50', label: 'text-emerald-700', icon: '📥' },
  'answer':      { border: 'border-l-green-500',   bg: 'bg-green-50',   label: 'text-green-800',   icon: '✅' },
};

const isCode = (type: StepType) => type === 'tool-call' || type === 'tool-result';

export const AgentScenario: React.FC<AgentScenarioProps> = ({ trigger, steps }) => {
  const [visible, setVisible] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (visible >= steps.length) { setPlaying(false); return; }
    const t = setTimeout(() => setVisible(v => v + 1), 1800);
    return () => clearTimeout(t);
  }, [playing, visible, steps.length]);

  const reset = () => { setVisible(0); setPlaying(false); };

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 mb-5">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Trigger</p>
        <p className="text-sm font-medium text-slate-800">{trigger}</p>
      </div>

      <div className="flex gap-2 mb-5 flex-wrap">
        {visible === 0 && (
          <button
            onClick={() => { setVisible(1); setPlaying(true); }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
          >
            <Play className="w-4 h-4" /> Run Agent
          </button>
        )}
        {visible > 0 && visible < steps.length && (
          <>
            <button
              onClick={() => setPlaying(p => !p)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm text-slate-700 transition"
            >
              {playing ? 'Pause' : <><Play className="w-3.5 h-3.5" /> Resume</>}
            </button>
            <button
              onClick={() => { setPlaying(false); setVisible(v => Math.min(v + 1, steps.length)); }}
              disabled={playing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm text-slate-700 transition disabled:opacity-40"
            >
              <ChevronRight className="w-3.5 h-3.5" /> Next Step
            </button>
            <button
              onClick={() => { setPlaying(false); setVisible(steps.length); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm text-slate-700 transition"
            >
              <SkipForward className="w-3.5 h-3.5" /> Skip to end
            </button>
          </>
        )}
        {visible > 0 && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-sm text-slate-700 transition ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        )}
      </div>

      <div className="space-y-2.5">
        {visible === 0 && (
          <p className="text-sm text-slate-400 text-center py-10 italic">Press "Run Agent" to watch it work through this scenario step by step.</p>
        )}
        {steps.slice(0, visible).map((step, i) => {
          const s = STYLES[step.type];
          return (
            <div key={i} className={`rounded-lg border-l-4 ${s.border} ${s.bg} p-4`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${s.label}`}>
                {s.icon} {step.label}
              </p>
              <pre className={`text-xs whitespace-pre-wrap leading-relaxed ${isCode(step.type) ? 'font-mono text-slate-700' : 'font-sans text-slate-800'}`}>
                {step.content}
              </pre>
            </div>
          );
        })}
        {playing && visible < steps.length && (
          <div className="text-xs text-slate-400 italic px-4 py-2 animate-pulse">Agent is reasoning…</div>
        )}
      </div>
    </div>
  );
};
