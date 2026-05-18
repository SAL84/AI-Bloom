import React from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import { COURSES } from '../../data/modules';
import type { View, CourseId, Course, Lesson, CourseModule } from '../../types/course';

interface Props {
  setView: (view: View) => void;
  savedLessons: Record<string, boolean>;
  toggleSaved: (lessonId: string) => void;
  completedLessons: Record<string, boolean>;
}

const COURSE_COLORS: Record<CourseId, string> = {
  'ai-kids':       '#d96a3a',
  'ai-essentials': '#3f8a5e',
  'ai-deep-dive':  '#5a4ec0',
  'ai-cybersec-se':'#2c6db0',
};

interface SavedItem {
  course: Course;
  module: CourseModule;
  lesson: Lesson;
}

function collectSaved(savedLessons: Record<string, boolean>): Record<CourseId, SavedItem[]> {
  const byCourse = {} as Record<CourseId, SavedItem[]>;
  for (const courseId of Object.keys(COURSES) as CourseId[]) {
    const course = COURSES[courseId];
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        if (savedLessons[lesson.id]) {
          if (!byCourse[courseId]) byCourse[courseId] = [];
          byCourse[courseId].push({ course, module, lesson });
        }
      }
    }
  }
  return byCourse;
}

export const ShelfView = ({ setView, savedLessons, toggleSaved, completedLessons }: Props) => {
  const grouped = collectSaved(savedLessons);
  const courseIds = (Object.keys(grouped) as CourseId[]);
  const totalSaved = courseIds.reduce((s, id) => s + grouped[id].length, 0);

  return (
    <div className="bg-studio-bg text-studio-ink font-studio-sans min-h-screen">
      <StudioNavLite crumbs={['Shelf']} setView={setView} />

      <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule" style={{ background: '#1d1916' }}>
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(245,239,228,0.55)' }}>
          Your reading desk
        </div>
        <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-studio-bg leading-[1.0] mb-3">
          The <span className="font-studio-serif italic text-studio-kids">shelf</span>
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(245,239,228,0.78)' }}>
          Lessons you've saved to come back to. {totalSaved > 0 ? `${totalSaved} on the shelf right now.` : 'Save lessons as you read to build your shelf.'}
        </p>
      </div>

      <section className="px-4 sm:px-6 lg:px-12 py-8 lg:py-14 max-w-4xl">
        {totalSaved === 0 ? (
          <div className="border border-dashed border-studio-rule rounded-[4px] px-6 py-10 lg:px-10 lg:py-14 text-center">
            <div className="font-studio-serif italic text-[20px] lg:text-[24px] text-studio-ink-dim leading-[1.4] mb-3">
              Nothing on the shelf yet.
            </div>
            <p className="font-studio-sans text-[14px] text-studio-ink-mute leading-[1.6] max-w-[420px] mx-auto mb-6">
              Tap <span className="font-studio-mono text-[12px] text-studio-ink">★ Save</span> on any lesson and it'll appear here — grouped by course, ready to resume.
            </p>
            <button
              onClick={() => setView({ type: 'library' })}
              className="font-studio-sans text-[13.5px] font-medium px-5 py-2.5 rounded-full bg-studio-ink text-studio-bg hover:opacity-90 transition-opacity"
            >
              Browse the catalog →
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-8 lg:gap-10">
            {courseIds.map(id => {
              const color = COURSE_COLORS[id];
              const items = grouped[id];
              const course = items[0].course;
              return (
                <div key={id}>
                  <div className="flex items-baseline gap-3 mb-3 lg:mb-4 flex-wrap">
                    <button
                      onClick={() => setView({ type: 'home', courseId: id })}
                      className="font-studio-display text-[22px] lg:text-[26px] font-normal tracking-[-0.3px] text-studio-ink leading-none hover:underline decoration-studio-ink-dim underline-offset-[4px] decoration-1"
                    >
                      {course.title}
                    </button>
                    <span className="font-studio-mono text-[10.5px] tracking-[1.2px] uppercase" style={{ color }}>
                      {items.length} {items.length === 1 ? 'lesson' : 'lessons'}
                    </span>
                  </div>
                  <div className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden">
                    {items.map(({ module, lesson }, i) => {
                      const done = !!completedLessons[lesson.id];
                      return (
                        <div
                          key={lesson.id}
                          className={`flex items-center gap-3 px-4 sm:px-5 py-3.5 ${i > 0 ? 'border-t border-studio-rule-soft' : ''}`}
                        >
                          <button
                            onClick={() => setView({ type: 'lesson', courseId: id, moduleId: module.id, lessonId: lesson.id })}
                            className="flex-1 min-w-0 text-left group"
                          >
                            <div className="font-studio-sans text-[14px] lg:text-[15px] text-studio-ink leading-[1.3] group-hover:underline decoration-studio-ink-dim underline-offset-[3px] decoration-1">
                              {lesson.title}
                            </div>
                            <div className="font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.5px] mt-1">
                              {module.title}{done && <span className="ml-2" style={{ color }}>· ✓ done</span>}
                            </div>
                          </button>
                          <button
                            onClick={() => toggleSaved(lesson.id)}
                            aria-label="Remove from shelf"
                            className="flex-shrink-0 font-studio-mono text-[11px] tracking-[0.5px] text-studio-ink-mute hover:text-studio-ink px-2.5 py-1 rounded-full hover:bg-studio-bg transition-colors"
                          >
                            ✕ Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <StudioFooter />
    </div>
  );
};
