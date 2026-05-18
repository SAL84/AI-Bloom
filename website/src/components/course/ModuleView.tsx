import React from 'react';
import { COURSES } from '../../data/modules';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { CourseModule, CourseId, View } from '../../types/course';

const COURSE_COLORS: Record<string, string> = {
  'ai-kids':       '#d96a3a',
  'ai-essentials': '#3f8a5e',
  'ai-deep-dive':  '#5a4ec0',
  'ai-cybersec-se':'#2c6db0',
};

interface ModuleViewProps {
  module: CourseModule;
  modules: CourseModule[];
  courseId: CourseId;
  setView: (view: View) => void;
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
}

export const ModuleView = ({ module, modules, courseId, setView, completedLessons, quizScores }: ModuleViewProps) => {
  const moduleIndex = modules.findIndex(m => m.id === module.id);
  const completedCount = module.lessons.filter(l => completedLessons[l.id]).length;
  const color = COURSE_COLORS[courseId] ?? '#5b5347';
  const course = COURSES[courseId];
  const nextLesson = module.lessons.find(l => !completedLessons[l.id]);

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite
        crumbs={[course?.title ?? 'Course', module.title]}
        crumbViews={[{ type: 'home', courseId }, undefined]}
        setView={setView}
        resumeView={nextLesson ? { type: 'lesson', courseId, moduleId: module.id, lessonId: nextLesson.id } : undefined}
      />

      {/* Module header */}
      <div className="px-12 py-12 border-b border-studio-rule" style={{ background: color }}>
        <div className="max-w-3xl">
          <div className="font-studio-mono text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Module {moduleIndex + 1} of {modules.length}
          </div>
          <h1 className="font-studio-display text-[52px] leading-[1.0] font-normal tracking-[-1px] text-white">
            {module.title}
          </h1>
          <p className="font-studio-serif italic text-[18px] mt-4 leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {module.summary}
          </p>
          <div className="flex items-center gap-4 mt-6 font-studio-mono text-[11px] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span>{module.lessons.length} lessons</span>
            <span>·</span>
            <span>{completedCount} of {module.lessons.length} complete</span>
            {quizScores[module.id] !== undefined && (
              <><span>·</span><span>Quiz {quizScores[module.id]}/{module.quiz.length}</span></>
            )}
          </div>
        </div>
      </div>

      {/* Lesson list */}
      <div className="px-12 py-10 max-w-3xl">
        <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-5">◆ Lessons</div>

        <div className="border-t border-studio-rule">
          {module.lessons.map((l, li) => {
            const done = !!completedLessons[l.id];
            return (
              <React.Fragment key={l.id}>
                {l.sectionLabel && (
                  <div className="py-2.5 px-1 font-studio-mono text-[10px] text-studio-ink-mute tracking-[1.4px] uppercase border-b border-dashed border-studio-rule-soft">
                    {l.sectionLabel}
                  </div>
                )}
                <button
                  onClick={() => setView({ type: 'lesson', courseId, moduleId: module.id, lessonId: l.id })}
                  className="w-full text-left py-4 px-1 flex items-baseline gap-5 border-b border-studio-rule hover:bg-studio-paper transition-colors duration-100 group"
                >
                  <span className="font-studio-mono text-[11px] text-studio-ink-mute w-7 flex-shrink-0">{String(li + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-studio-sans text-[15px] text-studio-ink-dim group-hover:text-studio-ink leading-[1.3]">
                    {l.title}
                    {l.diagram && <span className="ml-2.5 font-studio-mono text-[10px] text-studio-ink-mute">· diagram</span>}
                  </span>
                  <span className="flex-shrink-0 font-studio-mono text-[10.5px] tracking-[0.5px]">
                    {done
                      ? <span style={{ color }}>✓ done</span>
                      : <span className="text-studio-ink-mute group-hover:text-studio-ink transition-colors">read →</span>}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Quiz */}
        <button
          onClick={() => setView({ type: 'quiz', courseId, moduleId: module.id })}
          className="w-full mt-6 text-left px-6 py-5 bg-studio-paper border border-studio-rule rounded-[4px] flex items-center justify-between hover:border-studio-ink-dim transition-colors duration-150"
        >
          <div>
            <div className="font-studio-mono text-[10px] tracking-[1.4px] uppercase text-studio-ink-mute mb-1.5">End of module</div>
            <div className="font-studio-serif italic text-[22px] text-studio-ink font-normal leading-[1.1]">Check your understanding</div>
            <div className="font-studio-sans text-[13px] text-studio-ink-dim mt-1">{module.quiz.length} questions · multiple choice</div>
          </div>
          {quizScores[module.id] !== undefined ? (
            <div className="text-right ml-8">
              <div className="font-studio-display text-[38px] leading-none font-normal" style={{ color }}>{quizScores[module.id]}/{module.quiz.length}</div>
              <div className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[0.6px] mt-1">Retake →</div>
            </div>
          ) : (
            <span className="font-studio-mono text-[12px] text-studio-ink tracking-[0.5px] ml-8">Take quiz →</span>
          )}
        </button>
      </div>

      <StudioFooter />
    </div>
  );
};
