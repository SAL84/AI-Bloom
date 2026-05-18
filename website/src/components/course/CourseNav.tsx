import React, { useState } from 'react';
import type { CourseModule, CourseId, View } from '../../types/course';

interface CourseNavProps {
  modules: CourseModule[];
  completedLessons: Record<string, boolean>;
  color: string;
  courseId: CourseId;
  setView: (view: View) => void;
  activeLessonId?: string;
}

export const CourseNav = ({ modules, completedLessons, color, courseId, setView, activeLessonId }: CourseNavProps) => {
  const defaultOpen = activeLessonId
    ? modules.findIndex(m => m.lessons.some(l => l.id === activeLessonId))
    : modules.findIndex(m => !m.lessons.every(l => completedLessons[l.id]));
  const [open, setOpen] = useState<number>(defaultOpen >= 0 ? defaultOpen : 0);

  return (
    <div className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden">
      <div className="px-4 py-3 border-b border-studio-rule">
        <div className="font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[1.4px] uppercase">Course contents</div>
      </div>
      {modules.map((m, mi) => {
        const isOpen = open === mi;
        const modDone = m.lessons.every(l => completedLessons[l.id]);
        return (
          <div key={m.id} className="border-b border-studio-rule last:border-b-0">
            <button
              onClick={() => setOpen(isOpen ? -1 : mi)}
              className="w-full text-left px-4 py-3 flex items-center gap-2.5 hover:bg-studio-bg transition-colors duration-100"
            >
              <span
                className="w-5 h-5 rounded-full flex-shrink-0 grid place-items-center font-studio-mono text-[9px]"
                style={{ background: modDone ? color : 'transparent', border: `1px solid ${modDone ? color : '#d9cfb8'}`, color: modDone ? '#fff' : '#8c8273' }}
              >
                {modDone ? '✓' : mi + 1}
              </span>
              <span className="flex-1 font-studio-sans text-[12.5px] text-studio-ink leading-[1.3] font-medium">{m.title}</span>
              <span className="font-studio-mono text-[10px] text-studio-ink-mute">{isOpen ? '▴' : '▾'}</span>
            </button>
            {isOpen && (
              <div className="border-t border-studio-rule-soft">
                {m.lessons.map((l, li) => {
                  const done = !!completedLessons[l.id];
                  const isActive = l.id === activeLessonId;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setView({ type: 'lesson', courseId, moduleId: m.id, lessonId: l.id })}
                      className="w-full text-left pl-10 pr-4 py-2 flex items-baseline gap-2.5 hover:bg-studio-bg transition-colors duration-100 border-b border-studio-rule-soft last:border-b-0"
                      style={isActive ? { background: `${color}12` } : undefined}
                    >
                      <span className="font-studio-mono text-[10px] text-studio-ink-mute w-5 flex-shrink-0">{String(li + 1).padStart(2, '0')}</span>
                      <span
                        className="flex-1 font-studio-sans text-[12px] leading-[1.3]"
                        style={{ color: isActive ? color : '#6b5f52', fontWeight: isActive ? 500 : undefined }}
                      >
                        {l.title}
                      </span>
                      {done && !isActive && <span className="font-studio-mono text-[10px] flex-shrink-0" style={{ color }}>✓</span>}
                      {isActive && <span className="font-studio-mono text-[10px] flex-shrink-0" style={{ color }}>▶</span>}
                    </button>
                  );
                })}
                <button
                  onClick={() => setView({ type: 'quiz', courseId, moduleId: m.id })}
                  className="w-full text-left pl-10 pr-4 py-2 flex items-baseline gap-2.5 hover:bg-studio-bg transition-colors duration-100"
                >
                  <span className="font-studio-mono text-[10px] text-studio-ink-mute w-5 flex-shrink-0">✦</span>
                  <span className="font-studio-sans text-[12px] italic text-studio-ink-mute">Quiz</span>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
