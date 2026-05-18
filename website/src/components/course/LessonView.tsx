import React, { useState } from 'react';
import { StudioNavLite } from './StudioChrome';
import { COURSES } from '../../data/modules';
import type { CourseModule, CourseId, Lesson, View } from '../../types/course';
import { DIAGRAM_REGISTRY } from '../diagrams';
import { InlineSVGDiagram } from '../diagrams/InlineSVGDiagram';
import { RoleTabPanel } from './RoleTabPanel';
import { CourseNav } from './CourseNav';

const COURSE_COLORS: Record<string, string> = {
  'ai-kids':       '#d96a3a',
  'ai-essentials': '#3f8a5e',
  'ai-deep-dive':  '#5a4ec0',
  'ai-cybersec-se':'#2c6db0',
};

interface LessonViewProps {
  module: CourseModule;
  lesson: Lesson;
  modules: CourseModule[];
  courseId: CourseId;
  setView: (view: View) => void;
  completedLessons: Record<string, boolean>;
  markComplete: (lessonId: string) => void;
}

export const LessonView = ({ module, lesson, modules, courseId, setView, completedLessons, markComplete }: LessonViewProps) => {
  const [slideMode, setSlideMode] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const lessonIdx = module.lessons.findIndex(l => l.id === lesson.id);
  const moduleIdx = modules.findIndex(m => m.id === module.id);
  const isLast = lessonIdx === module.lessons.length - 1;
  const DiagramComponent = lesson.diagram ? DIAGRAM_REGISTRY[lesson.diagram] : null;
  const hasInlineSvg = !!lesson.inlineSvg;
  const color = COURSE_COLORS[courseId] ?? '#5b5347';
  const course = COURSES[courseId];

  const goNext = () => {
    if (!completedLessons[lesson.id]) markComplete(lesson.id);
    if (isLast) {
      setView({ type: 'quiz', courseId, moduleId: module.id });
    } else {
      setView({ type: 'lesson', courseId, moduleId: module.id, lessonId: module.lessons[lessonIdx + 1].id });
    }
  };

  const goPrev = () => {
    if (lessonIdx > 0) {
      setView({ type: 'lesson', courseId, moduleId: module.id, lessonId: module.lessons[lessonIdx - 1].id });
    } else {
      setView({ type: 'module', courseId, moduleId: module.id });
    }
  };

  // ── Slide mode ───────────────────────────────────────────────────────────────
  if (slideMode) {
    const hasVisual = !!(DiagramComponent || hasInlineSvg || lesson.imageUrl);
    const totalSlides = (hasVisual ? 1 : 0) + lesson.slides.length;
    const isVisualSlide = hasVisual && slideIdx === 0;
    const contentSlideIdx = hasVisual ? slideIdx - 1 : slideIdx;
    const slide = !isVisualSlide ? lesson.slides[contentSlideIdx] : null;

    return (
      <div className="min-h-full flex flex-col" style={{ background: '#1d1916', color: '#f5efe4' }}>
        <div className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="font-studio-mono text-[12px]" style={{ color: 'rgba(245,239,228,0.5)' }}>
            <span style={{ color }}>{course?.title}</span> · {module.title} · {lesson.title}
          </div>
          <button
            onClick={() => setSlideMode(false)}
            className="font-studio-sans text-[13px] px-3 py-1.5 rounded-[4px] transition-colors"
            style={{ color: 'rgba(245,239,228,0.7)', background: 'rgba(255,255,255,0.06)' }}
          >
            ← Study mode
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-12 py-10">
          <div className="max-w-4xl w-full">
            <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-6" style={{ color: 'rgba(245,239,228,0.35)' }}>
              {slideIdx + 1} / {totalSlides}
            </div>
            {isVisualSlide ? (
              <div>
                <h2 className="font-studio-display text-[48px] font-normal leading-[1.05] tracking-[-1px] mb-8" style={{ color: '#fbf6ec' }}>
                  {lesson.title}
                </h2>
                {lesson.imageUrl ? (
                  <img src={lesson.imageUrl} alt={lesson.title} className="w-full max-h-80 object-cover rounded-[4px]"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                ) : (
                  <div className="bg-studio-paper rounded-[4px] p-4">
                    {DiagramComponent
                      ? <DiagramComponent />
                      : <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={lesson.inlineSvgId ?? lesson.id} />}
                  </div>
                )}
              </div>
            ) : (
              <>
                <h2 className="font-studio-display text-[52px] font-normal leading-[1.0] tracking-[-1.5px] mb-6" style={{ color: '#fbf6ec' }}>
                  {slide!.heading}
                </h2>
                <p className="font-studio-serif text-[22px] leading-[1.55]" style={{ color: 'rgba(245,239,228,0.78)' }}>
                  {slide!.body}
                </p>
                {slide!.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {slide!.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 font-studio-sans text-[17px]" style={{ color: 'rgba(245,239,228,0.7)' }}>
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between px-8 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => setSlideIdx(Math.max(0, slideIdx - 1))}
            disabled={slideIdx === 0}
            className="font-studio-sans text-[13px] px-4 py-2 rounded-[4px] disabled:opacity-20 transition"
            style={{ background: 'rgba(255,255,255,0.06)', color: '#f5efe4' }}
          >
            ← Prev
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button key={i} onClick={() => setSlideIdx(i)}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{ width: i === slideIdx ? 28 : 6, background: i === slideIdx ? color : 'rgba(255,255,255,0.2)' }}
              />
            ))}
          </div>
          {slideIdx < totalSlides - 1 ? (
            <button onClick={() => setSlideIdx(slideIdx + 1)}
              className="font-studio-sans text-[13px] font-medium px-4 py-2 rounded-[4px]"
              style={{ background: color, color: '#fbf6ec' }}>
              Next →
            </button>
          ) : (
            <button onClick={() => { setSlideMode(false); goNext(); }}
              className="font-studio-sans text-[13px] font-medium px-4 py-2 rounded-[4px]"
              style={{ background: color, color: '#fbf6ec' }}>
              Finish ✓
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Study mode ───────────────────────────────────────────────────────────────
  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite
        crumbs={[course?.title ?? 'Course', module.title, lesson.title]}
        crumbViews={[{ type: 'home', courseId }, { type: 'module', courseId, moduleId: module.id }, undefined]}
        setView={setView}
      />

      <div className="max-w-[1440px] mx-auto flex gap-10 px-12 items-start">
        <div className="w-[260px] flex-shrink-0 sticky top-6 py-14">
          <CourseNav
            modules={modules}
            completedLessons={completedLessons}
            color={color}
            courseId={courseId}
            setView={setView}
            activeLessonId={lesson.id}
          />
        </div>

        <article className="flex-1 min-w-0 max-w-3xl py-14">
        <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-4" style={{ color }}>
          Module {moduleIdx + 1} · Lesson {lessonIdx + 1}
        </div>

        <div className="flex items-start justify-between gap-4 mb-10">
          <h1 className="font-studio-display text-[44px] leading-[1.05] font-normal tracking-[-1px] text-studio-ink">
            {lesson.title}
          </h1>
          <button
            onClick={() => { setSlideIdx(0); setSlideMode(true); }}
            className="flex-shrink-0 font-studio-mono text-[11px] tracking-[1px] text-studio-ink-mute hover:text-studio-ink border border-studio-rule px-3.5 py-1.5 rounded-full transition-colors duration-150 mt-2"
          >
            Slides →
          </button>
        </div>

        {lesson.imageUrl && (
          <div className="mb-10 xl:-mr-20 2xl:-mr-40">
            <img src={lesson.imageUrl} alt={lesson.title}
              className="w-full h-72 xl:h-96 object-cover rounded-[4px]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        )}

        {DiagramComponent && (
          <div className="mb-10 xl:-mr-20 2xl:-mr-40 bg-studio-paper border border-studio-rule rounded-[4px] p-6">
            <DiagramComponent />
          </div>
        )}
        {hasInlineSvg && (
          <div className="mb-10 xl:-mr-20 2xl:-mr-40 bg-studio-paper border border-studio-rule rounded-[4px] p-6">
            <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={lesson.inlineSvgId ?? lesson.id} />
          </div>
        )}

        <div className="space-y-10">
          {lesson.slides.map((s, i) => (
            <section key={i} className="border-t border-studio-rule-soft pt-8 first:border-0 first:pt-0">
              <h2 className="font-studio-display text-[28px] font-normal tracking-[-0.4px] text-studio-ink mb-3 leading-[1.15]">
                {s.heading}
              </h2>
              <p className="font-studio-sans text-[15.5px] text-studio-ink-dim leading-[1.7]">{s.body}</p>
              {s.bullets && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 font-studio-sans text-[15px] text-studio-ink-dim leading-[1.6]">
                      <span className="mt-[9px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {lesson.roleContent && lesson.roleContent.length > 0 && (
          <RoleTabPanel roleContent={lesson.roleContent} />
        )}

        <div className="flex items-center justify-between gap-3 pt-10 mt-10 border-t border-studio-rule">
          <button onClick={goPrev} className="font-studio-sans text-[14px] text-studio-ink-dim hover:text-studio-ink transition-colors">
            ← {lessonIdx === 0 ? 'Module' : 'Previous'}
          </button>
          <button
            onClick={goNext}
            className="font-studio-sans text-[13.5px] font-medium px-5 py-2.5 rounded-full text-studio-bg hover:opacity-90 transition-opacity"
            style={{ background: color }}
          >
            {isLast ? 'Take the quiz →' : 'Next lesson →'}
          </button>
        </div>
        </article>
      </div>
    </div>
  );
};
