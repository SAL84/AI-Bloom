import React, { useState } from 'react';
import type { RoleContent } from '../../types/course';

const ROLE_META: Record<string, { label: string; pill: string; activePill: string; dot: string }> = {
  general: {
    label: 'General User',
    pill: 'border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50',
    activePill: 'bg-slate-800 text-white border-slate-800',
    dot: 'bg-slate-500',
  },
  'security-se': {
    label: 'Security SE',
    pill: 'border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50',
    activePill: 'bg-blue-600 text-white border-blue-600',
    dot: 'bg-blue-500',
  },
  developer: {
    label: 'Developer',
    pill: 'border-emerald-300 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50',
    activePill: 'bg-emerald-600 text-white border-emerald-600',
    dot: 'bg-emerald-500',
  },
  consultant: {
    label: 'AI Consultant',
    pill: 'border-purple-300 text-purple-700 hover:border-purple-400 hover:bg-purple-50',
    activePill: 'bg-purple-600 text-white border-purple-600',
    dot: 'bg-purple-500',
  },
};

const ROLE_ORDER = ['general', 'security-se', 'developer', 'consultant'];

interface Props {
  roleContent: RoleContent[];
}

export const RoleTabPanel = ({ roleContent }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  if (!roleContent || roleContent.length === 0) return null;

  const ordered = ROLE_ORDER.map(r => roleContent.find(rc => rc.role === r)).filter(Boolean) as RoleContent[];
  const active = ordered.find(r => r.role === selected) ?? null;

  return (
    <div className="mt-8 pt-6 border-t border-slate-200">
      <p className="text-sm font-semibold text-slate-500 text-center mb-4 tracking-wide">
        How is this related to me?
      </p>

      <div className="flex flex-wrap gap-2 justify-center">
        {ordered.map(rc => {
          const meta = ROLE_META[rc.role];
          const isActive = selected === rc.role;
          return (
            <button
              key={rc.role}
              onClick={() => setSelected(isActive ? null : rc.role)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${isActive ? meta.activePill : meta.pill}`}
            >
              {rc.label}
            </button>
          );
        })}
      </div>

      {active && (() => {
        const meta = ROLE_META[active.role];
        return (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 animate-none">
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${meta.dot}`} />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{active.label}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{active.body}</p>
            {active.bullets && active.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${meta.dot}`} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })()}
    </div>
  );
};
