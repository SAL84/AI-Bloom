import React, { useState } from 'react';
import type { RoleContent, RoleKey } from '../../types/course';

const ROLE_META: Record<string, { label: string; color: string }> = {
  general:       { label: 'General User',  color: '#5d5045' },
  'security-se': { label: 'Security SE',   color: '#2c6db0' },
  developer:     { label: 'Developer',     color: '#5a4ec0' },
  consultant:    { label: 'AI Consultant', color: '#b78320' },
};

const ROLE_ORDER = ['general', 'security-se', 'developer', 'consultant'];

interface Props {
  roleContent: RoleContent[];
  selected?: RoleKey | null;
  setSelected?: (role: RoleKey | null) => void;
}

export const RoleTabPanel = ({ roleContent, selected: selectedProp, setSelected: setSelectedProp }: Props) => {
  const [localSelected, setLocalSelected] = useState<RoleKey | null>(null);
  const selected = selectedProp !== undefined ? selectedProp : localSelected;
  const setSelected = setSelectedProp ?? setLocalSelected;

  if (!roleContent || roleContent.length === 0) return null;

  const ordered = ROLE_ORDER.map(r => roleContent.find(rc => rc.role === r)).filter(Boolean) as RoleContent[];
  const active = ordered.find(r => r.role === selected) ?? null;

  return (
    <div className="mt-10 pt-8 border-t border-studio-rule">
      <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase text-center mb-4">
        How does this apply to me?
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {ordered.map(rc => {
          const meta = ROLE_META[rc.role];
          const isActive = selected === rc.role;
          return (
            <button
              key={rc.role}
              onClick={() => setSelected(isActive ? null : rc.role)}
              className="px-4 py-2 rounded-full border font-studio-sans text-[13px] transition-all duration-150"
              style={isActive
                ? { background: meta.color, color: '#fbf6ec', borderColor: meta.color }
                : { background: 'transparent', color: '#5b5347', borderColor: '#d9cfb8' }}
            >
              {rc.label}
            </button>
          );
        })}
      </div>

      {active && (() => {
        const meta = ROLE_META[active.role];
        return (
          <div className="bg-studio-paper border border-studio-rule rounded-[4px] px-6 py-5">
            <div className="font-studio-mono text-[10px] tracking-[1.4px] uppercase mb-3" style={{ color: meta.color }}>
              ◆ {active.label}
            </div>
            <p className="font-studio-sans text-[14px] text-studio-ink-dim leading-[1.6]">{active.body}</p>
            {active.bullets && active.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-studio-sans text-[13.5px] text-studio-ink-dim leading-[1.5]">
                    <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: meta.color }} />
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
