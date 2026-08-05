import React, { useState } from 'react';
import type { SlideExercise } from '../../types/course';

interface Props {
  exercise: SlideExercise;
  color: string;
  dark?: boolean;
}

export function ExercisePanel({ exercise, color, dark = false }: Props) {
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const copy = async () => {
    if (!exercise.copyText) return;
    try {
      await navigator.clipboard.writeText(exercise.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the text is selectable below */
    }
  };

  const ink = dark ? 'rgba(245,239,228,0.85)' : undefined;
  const inkDim = dark ? 'rgba(245,239,228,0.65)' : undefined;

  return (
    <div
      className={`mt-6 rounded-[4px] border-[1.5px] border-dashed p-5 lg:p-6 ${dark ? '' : 'bg-studio-paper'}`}
      style={{ borderColor: color, background: dark ? 'rgba(255,255,255,0.04)' : undefined }}
    >
      <div className="font-studio-mono text-[10.5px] tracking-[1.6px] uppercase mb-2.5" style={{ color }}>
        ◆ Try it yourself
      </div>
      <p className={`font-studio-sans text-[14.5px] leading-[1.65] m-0 ${dark ? '' : 'text-studio-ink'}`} style={{ color: ink }}>
        {exercise.task}
      </p>

      {exercise.copyText && (
        <div className="mt-4">
          <pre
            className={`font-studio-mono text-[12px] leading-[1.6] whitespace-pre-wrap rounded-[4px] border p-3.5 m-0 ${dark ? '' : 'bg-studio-bg border-studio-rule text-studio-ink-dim'}`}
            style={dark ? { background: 'rgba(0,0,0,0.25)', borderColor: 'rgba(255,255,255,0.12)', color: inkDim } : undefined}
          >{exercise.copyText}</pre>
          <button
            onClick={copy}
            className="mt-2 font-studio-sans text-[12.5px] font-medium px-3.5 py-1.5 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ background: color }}
          >
            {copied ? 'Copied ✓' : 'Copy, then paste into your AI tool'}
          </button>
        </div>
      )}

      <div className={`font-studio-mono text-[10.5px] tracking-[1.4px] uppercase mt-5 mb-2 ${dark ? '' : 'text-studio-ink-mute'}`} style={{ color: inkDim }}>
        How you'll know it worked
      </div>
      <ul className="m-0 p-0 list-none space-y-1.5">
        {exercise.selfCheck.map((item, i) => (
          <li key={i}>
            <label className={`flex items-start gap-2.5 font-studio-sans text-[13.5px] leading-[1.55] cursor-pointer ${dark ? '' : 'text-studio-ink-dim'}`} style={{ color: inkDim }}>
              <input
                type="checkbox"
                checked={!!checked[i]}
                onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
                className="mt-[3px] accent-current"
                style={{ accentColor: color }}
              />
              <span className={checked[i] ? 'line-through opacity-60' : ''}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
