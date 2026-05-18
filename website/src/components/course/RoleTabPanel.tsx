import React, { useState } from 'react';
import type { RoleContent, RoleKey } from '../../types/course';

const ROLE_META: Record<string, { label: string; color: string; icon: string; tagline: string }> = {
  general:       { label: 'General User',  color: '#5d5045', icon: '🙋', tagline: 'Curious learner' },
  'security-se': { label: 'Security SE',   color: '#2c6db0', icon: '🔒', tagline: 'Sells security' },
  developer:     { label: 'Developer',     color: '#5a4ec0', icon: '💻', tagline: 'Builds with AI' },
  consultant:    { label: 'AI Consultant', color: '#b78320', icon: '💼', tagline: 'Advises clients' },
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
      <div className="text-center mb-5 lg:mb-6">
        <div className="font-studio-display text-[22px] sm:text-[26px] lg:text-[30px] text-studio-ink font-normal tracking-[-0.4px] leading-[1.15]">
          How does this apply to <span className="font-studio-serif italic">me</span>?
        </div>
        <div className="font-studio-mono text-[10.5px] sm:text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase mt-1.5">
          Tap your role — see what changes for you
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 lg:mb-6">
        {ordered.map(rc => {
          const meta = ROLE_META[rc.role];
          const isActive = selected === rc.role;
          return (
            <button
              key={rc.role}
              onClick={() => setSelected(isActive ? null : rc.role)}
              aria-pressed={isActive}
              className="group relative flex flex-col items-center justify-center gap-2 px-3 sm:px-4 py-4 sm:py-5 rounded-[10px] border-2 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={isActive
                ? { background: meta.color, color: '#fbf6ec', borderColor: meta.color, boxShadow: `0 6px 18px -8px ${meta.color}88` }
                : { background: '#fbf6ec', color: '#3d3631', borderColor: '#e2d7c1' }}
            >
              <span
                className="text-[32px] sm:text-[40px] lg:text-[44px] leading-none transition-transform duration-200 group-hover:scale-110"
                style={{ filter: isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' : 'none' }}
                aria-hidden="true"
              >
                {meta.icon}
              </span>
              <span className="font-studio-sans text-[13px] sm:text-[14.5px] font-semibold leading-tight text-center">
                {rc.label}
              </span>
              <span
                className="font-studio-mono text-[9.5px] sm:text-[10px] tracking-[0.8px] uppercase leading-tight text-center"
                style={{ color: isActive ? 'rgba(251,246,236,0.8)' : '#8a7e6f' }}
              >
                {meta.tagline}
              </span>
              {isActive && (
                <span
                  className="absolute -top-2 right-3 font-studio-mono text-[9px] tracking-[1px] uppercase px-2 py-0.5 rounded-full bg-studio-bg text-studio-ink border"
                  style={{ borderColor: meta.color }}
                >
                  ✓ You
                </span>
              )}
            </button>
          );
        })}
      </div>

      {active && (() => {
        const meta = ROLE_META[active.role];
        return (
          <div className="bg-studio-paper border-l-4 border border-studio-rule rounded-[4px] px-5 sm:px-6 py-5 lg:py-6" style={{ borderLeftColor: meta.color }}>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[22px] leading-none">{meta.icon}</span>
              <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: meta.color }}>
                For the {active.label}
              </div>
            </div>
            <p className="font-studio-sans text-[14px] sm:text-[15px] text-studio-ink-dim leading-[1.6]">{active.body}</p>
            {active.bullets && active.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-studio-sans text-[13.5px] sm:text-[14px] text-studio-ink-dim leading-[1.55]">
                    <span className="mt-[8px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: meta.color }} />
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
