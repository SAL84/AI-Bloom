import React, { useState, useEffect, useMemo, useRef } from 'react';
import { COURSES, COURSE } from '../../data/modules';
import type { CourseId, View } from '../../types/course';

interface Props {
  open: boolean;
  onClose: () => void;
  setView: (v: View) => void;
}

type ResultKind = 'course' | 'lesson' | 'glossary';

interface Result {
  kind: ResultKind;
  title: string;
  subtitle: string;
  view: View;
}

function searchAll(rawQuery: string): Result[] {
  const q = rawQuery.toLowerCase().trim();
  if (!q) return [];
  const results: Result[] = [];

  for (const courseId of Object.keys(COURSES) as CourseId[]) {
    const course = COURSES[courseId];
    if (course.title.toLowerCase().includes(q) || course.subtitle.toLowerCase().includes(q)) {
      results.push({
        kind: 'course',
        title: course.title,
        subtitle: course.subtitle,
        view: { type: 'home', courseId },
      });
    }
    for (const m of course.modules) {
      for (const l of m.lessons) {
        if (l.title.toLowerCase().includes(q)) {
          results.push({
            kind: 'lesson',
            title: l.title,
            subtitle: `${course.title} · ${m.title}`,
            view: { type: 'lesson', courseId, moduleId: m.id, lessonId: l.id },
          });
        }
      }
    }
  }

  for (const entry of COURSE.glossary) {
    if (entry.term.toLowerCase().includes(q) || entry.def.toLowerCase().includes(q)) {
      results.push({
        kind: 'glossary',
        title: entry.term,
        subtitle: entry.def.length > 90 ? `${entry.def.slice(0, 90)}…` : entry.def,
        view: { type: 'glossary' },
      });
    }
  }

  return results.slice(0, 40);
}

const KIND_LABEL: Record<ResultKind, string> = {
  course: 'Course',
  lesson: 'Lesson',
  glossary: 'Term',
};

const KIND_COLOR: Record<ResultKind, string> = {
  course: '#3f8a5e',
  lesson: '#2c6db0',
  glossary: '#b78320',
};

export const SearchModal = ({ open, onClose, setView }: Props) => {
  const [q, setQ] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchAll(q), [q]);

  useEffect(() => {
    if (!open) {
      setQ('');
      setActiveIdx(0);
      return;
    }
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => { setActiveIdx(0); }, [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown' && results.length > 0) {
        e.preventDefault();
        setActiveIdx(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp' && results.length > 0) {
        e.preventDefault();
        setActiveIdx(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[activeIdx]) {
        e.preventDefault();
        setView(results[activeIdx].view);
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, results, activeIdx, setView]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 grid place-items-start pt-16 sm:pt-20 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl mx-auto bg-studio-bg rounded-[6px] shadow-2xl overflow-hidden border border-studio-rule"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 border-b border-studio-rule bg-studio-paper">
          <span className="text-studio-ink-mute text-[18px]">⌕</span>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search courses, lessons, glossary…"
            className="flex-1 bg-transparent outline-none font-studio-sans text-[14px] sm:text-[15px] text-studio-ink placeholder:text-studio-ink-mute"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="font-studio-mono text-[10.5px] tracking-[1px] text-studio-ink-mute hover:text-studio-ink border border-studio-rule px-2 py-1 rounded-[3px]"
          >
            Esc
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {!q ? (
            <div className="px-5 py-10 sm:py-14 text-center font-studio-serif italic text-[15px] sm:text-[16px] text-studio-ink-mute">
              Type to search across the catalog.
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-10 sm:py-14 text-center font-studio-serif italic text-[15px] sm:text-[16px] text-studio-ink-mute">
              No matches for "{q}"
            </div>
          ) : (
            results.map((r, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={`${r.kind}-${r.title}-${i}`}
                  onClick={() => { setView(r.view); onClose(); }}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`w-full text-left px-4 sm:px-5 py-3 flex items-baseline gap-3 sm:gap-4 transition-colors duration-75 ${isActive ? 'bg-studio-paper' : ''} ${i < results.length - 1 ? 'border-b border-studio-rule-soft' : ''}`}
                >
                  <span
                    className="font-studio-mono text-[9.5px] tracking-[1px] uppercase w-[54px] flex-shrink-0"
                    style={{ color: KIND_COLOR[r.kind] }}
                  >
                    {KIND_LABEL[r.kind]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-studio-sans text-[13.5px] sm:text-[14px] text-studio-ink leading-[1.3] truncate">{r.title}</div>
                    <div className="font-studio-sans text-[12px] text-studio-ink-mute mt-0.5 truncate leading-[1.4]">{r.subtitle}</div>
                  </div>
                  {isActive && (
                    <span className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[0.5px] flex-shrink-0">↵</span>
                  )}
                </button>
              );
            })
          )}
        </div>
        {results.length > 0 && (
          <div className="px-4 sm:px-5 py-2 border-t border-studio-rule bg-studio-paper font-studio-mono text-[10.5px] tracking-[0.5px] text-studio-ink-mute flex justify-between">
            <span>{results.length} result{results.length === 1 ? '' : 's'}</span>
            <span className="hidden sm:inline">↑↓ navigate · ↵ open · Esc close</span>
          </div>
        )}
      </div>
    </div>
  );
};
