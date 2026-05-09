import React, { useState } from 'react';
import { Palette } from 'lucide-react';

export type Theme = 'light' | 'dark' | 'midnight';

interface Props {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const THEMES: { id: Theme; label: string; bg: string; ring: string }[] = [
  { id: 'light',    label: 'Light',    bg: 'bg-slate-100',   ring: 'ring-slate-400' },
  { id: 'dark',     label: 'Dark',     bg: 'bg-slate-800',   ring: 'ring-slate-500' },
  { id: 'midnight', label: 'Midnight', bg: 'bg-indigo-950',  ring: 'ring-indigo-400' },
];

export const ThemeToggle = ({ theme, setTheme }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        title="Change theme"
        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white border border-slate-200 shadow-sm transition text-slate-500 hover:text-slate-900"
      >
        <Palette className="w-4 h-4" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-10 z-50 bg-white border border-slate-200 rounded-xl shadow-lg p-3 flex flex-col gap-1 min-w-[130px]">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1 mb-1">Theme</p>
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-sm transition hover:bg-slate-50 ${theme === t.id ? 'font-semibold text-slate-900' : 'text-slate-600'}`}
              >
                <span className={`w-4 h-4 rounded-full ${t.bg} ${theme === t.id ? `ring-2 ring-offset-1 ${t.ring}` : ''}`} />
                {t.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
