import React from 'react';
import type { View } from '../../types/course';

interface NavLiteProps {
  crumbs: string[];
  crumbViews?: (View | undefined)[];
  setView: (v: View) => void;
}

export function StudioNavLite({ crumbs, crumbViews, setView }: NavLiteProps) {
  return (
    <nav className="flex items-center gap-3 sm:gap-4 lg:gap-6 px-4 sm:px-6 lg:px-12 py-3 lg:py-5 border-b border-studio-rule bg-studio-paper">
      <button
        onClick={() => setView({ type: 'library' })}
        aria-label="Go to AI Learning Hub home"
        className="group flex items-center gap-2 sm:gap-2.5 cursor-pointer transition-opacity hover:opacity-90 flex-shrink-0"
      >
        <div className="w-7 h-7 rounded-full bg-studio-ink text-studio-bg grid place-items-center font-studio-serif italic text-[17px] transition-transform group-hover:scale-105">a</div>
        <div className="font-studio-serif italic text-[15px] sm:text-[17px] text-studio-ink leading-none group-hover:underline decoration-studio-ink-dim underline-offset-[5px] decoration-1">
          <span className="hidden sm:inline">The AI Learning Hub</span>
          <span className="sm:hidden">AI Hub</span>
        </div>
      </button>
      <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 sm:ml-3 lg:ml-6 font-studio-sans text-[13px] lg:text-[13.5px] text-studio-ink-dim flex-wrap min-w-0">
        {crumbs.map((c, i) => {
          const view = crumbViews?.[i];
          const isLast = i === crumbs.length - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-studio-ink-mute">›</span>}
              {view && !isLast ? (
                <button
                  onClick={() => setView(view)}
                  className="cursor-pointer text-studio-ink-dim underline decoration-studio-rule decoration-1 underline-offset-[3px] hover:text-studio-ink hover:decoration-studio-ink-dim transition-colors duration-100"
                >
                  {c}
                </button>
              ) : (
                <span className={isLast ? 'text-studio-ink font-medium' : 'text-studio-ink-dim'}>{c}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="ml-auto flex items-center gap-2 lg:gap-2.5 flex-shrink-0">
        <button
          onClick={() => setView({ type: 'shelf' })}
          className="hidden sm:inline-flex items-center gap-1.5 font-studio-sans text-[13px] text-studio-ink-dim hover:text-studio-ink hover:underline decoration-studio-ink-dim underline-offset-[3px] decoration-1 transition-colors duration-100 whitespace-nowrap"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="flex-shrink-0">
            <rect x="1.5" y="2" width="2.5" height="10" rx="0.4" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="5" y="3" width="2.5" height="9" rx="0.4" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="8.5" y="2.5" width="2.5" height="9.5" rx="0.4" stroke="currentColor" strokeWidth="1" fill="none" />
            <line x1="0.5" y1="12.5" x2="13.5" y2="12.5" stroke="currentColor" strokeWidth="1" />
          </svg>
          Shelf
        </button>
        <button
          onClick={() => setView({ type: 'playground' })}
          className="font-studio-sans text-[12.5px] sm:text-[13px] text-white px-3 sm:px-[18px] py-2 sm:py-[9px] rounded-full font-medium hover:opacity-90 transition-opacity duration-150 whitespace-nowrap"
          style={{ background: '#b85c3a' }}
        >
          AI Studio →
        </button>
      </div>
    </nav>
  );
}

export function StudioFooter() {
  return (
    <footer className="px-4 sm:px-6 lg:px-12 py-6 lg:py-8 border-t border-studio-rule bg-studio-paper">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
        <div className="font-studio-serif italic text-[14px] lg:text-[15px] text-studio-ink-dim max-w-[540px] leading-[1.5]">
          A free public library for AI literacy. Built by people who'd rather you understand than subscribe.
          <br />
          Developed by Salih AA
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-5 font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">
          <span>RSS</span><span>NEWSLETTER</span><span>SOURCE</span><span>EST. MMXXV</span>
        </div>
      </div>
    </footer>
  );
}
