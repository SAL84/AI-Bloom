import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { View } from '../../types/course';
import { COURSE } from '../../data/modules';

interface GlossaryViewProps {
  setView: (view: View) => void;
}

export const GlossaryView = ({ setView }: GlossaryViewProps) => {
  const [search, setSearch] = useState('');
  const filtered = COURSE.glossary.filter(g =>
    g.term.toLowerCase().includes(search.toLowerCase()) ||
    g.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['Glossary']} setView={setView} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 lg:py-14">
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-3 lg:mb-4">◆ Reference</div>
        <h1 className="font-studio-display text-[36px] sm:text-[44px] lg:text-[52px] font-normal tracking-[-0.8px] lg:tracking-[-1.2px] text-studio-ink leading-[1.0] mb-3">
          Glossary
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] text-studio-ink-dim leading-[1.5] mb-8 lg:mb-10">
          Every term used across the courses — keep it open during prospect calls.
        </p>

        <div className="mb-8">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms or definitions…"
            className="w-full px-4 py-3 bg-studio-paper border border-studio-rule rounded-[4px] font-studio-sans text-[14px] text-studio-ink placeholder:text-studio-ink-mute focus:outline-none focus:border-studio-ink-dim transition-colors"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="divide-y divide-studio-rule border-t border-studio-rule">
            {filtered.map((g, i) => (
              <div key={i} className="py-5">
                <div className="font-studio-serif italic text-[20px] text-studio-ink mb-1.5 font-normal">{g.term}</div>
                <p className="font-studio-sans text-[14px] text-studio-ink-dim leading-[1.65]">{g.def}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center font-studio-serif italic text-[18px] text-studio-ink-mute">
            No matches for "{search}"
          </div>
        )}
      </div>

      <StudioFooter />
    </div>
  );
};
