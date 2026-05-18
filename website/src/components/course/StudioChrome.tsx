import React from 'react';
import type { View } from '../../types/course';

interface NavLiteProps {
  crumbs: string[];
  crumbViews?: (View | undefined)[];
  setView: (v: View) => void;
  resumeView?: View;
}

export function StudioNavLite({ crumbs, crumbViews, setView, resumeView }: NavLiteProps) {
  return (
    <nav className="flex items-center gap-6 px-12 py-5 border-b border-studio-rule bg-studio-paper">
      <button
        onClick={() => setView({ type: 'library' })}
        aria-label="Go to AI Learning Hub home"
        className="group flex items-center gap-2.5 cursor-pointer transition-opacity hover:opacity-90"
      >
        <div className="w-7 h-7 rounded-full bg-studio-ink text-studio-bg grid place-items-center font-studio-serif italic text-[17px] transition-transform group-hover:scale-105">a</div>
        <div className="font-studio-serif italic text-[17px] text-studio-ink leading-none group-hover:underline decoration-studio-ink-dim underline-offset-[5px] decoration-1">The AI Learning Hub</div>
      </button>
      <div className="flex items-center gap-2.5 ml-6 font-studio-sans text-[13.5px] text-studio-ink-dim">
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
      <div className="ml-auto flex items-center gap-2.5">
        <button className="font-studio-sans text-[13px] text-studio-ink bg-transparent border border-studio-rule px-3.5 py-2 rounded-full hover:border-studio-ink-dim transition-colors duration-150">
          Save to shelf
        </button>
        {resumeView && (
          <button
            onClick={() => setView(resumeView)}
            className="font-studio-sans text-[13px] text-studio-bg bg-studio-ink px-4 py-[9px] rounded-full font-medium hover:opacity-90 transition-opacity duration-150"
          >
            Resume →
          </button>
        )}
      </div>
    </nav>
  );
}

export function StudioFooter() {
  return (
    <footer className="px-12 py-8 border-t border-studio-rule bg-studio-paper">
      <div className="flex justify-between items-baseline">
        <div className="font-studio-serif italic text-[15px] text-studio-ink-dim max-w-[540px] leading-[1.5]">
          A free public library for AI literacy. Built by people who'd rather you understand than subscribe.
        </div>
        <div className="flex gap-5 font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">
          <span>RSS</span><span>NEWSLETTER</span><span>SOURCE</span><span>EST. MMXXV</span>
        </div>
      </div>
    </footer>
  );
}
