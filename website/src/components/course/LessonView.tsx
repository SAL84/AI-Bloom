import React, { useState, useEffect } from 'react';
import { StudioNavLite } from './StudioChrome';
import { COURSES } from '../../data/modules';
import type { CourseModule, CourseId, Lesson, View, RoleKey } from '../../types/course';
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

// ── Diagram zoom modal ───────────────────────────────────────────────────────
interface SvgZoomModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const SvgZoomModal = ({ open, onClose, title, children }: SvgZoomModalProps) => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => { if (open) setZoom(1); }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') setZoom(z => Math.min(z + 0.25, 4));
      else if (e.key === '-') setZoom(z => Math.max(z - 0.25, 0.5));
      else if (e.key === '0') setZoom(1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-studio-bg">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-studio-rule bg-studio-paper">
        <div className="font-studio-mono text-[10.5px] sm:text-[11px] uppercase tracking-[1.2px] text-studio-ink-mute truncate min-w-0">
          {title ?? 'Diagram'}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button onClick={() => setZoom(z => Math.max(z - 0.25, 0.5))} aria-label="Zoom out"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-studio-rule grid place-items-center text-studio-ink hover:border-studio-ink-dim transition-colors">
            −
          </button>
          <span className="font-studio-mono text-[10.5px] sm:text-[11px] text-studio-ink-mute min-w-[3ch] text-center tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(z => Math.min(z + 0.25, 4))} aria-label="Zoom in"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-studio-rule grid place-items-center text-studio-ink hover:border-studio-ink-dim transition-colors">
            +
          </button>
          <button onClick={() => setZoom(1)} aria-label="Reset zoom"
            className="hidden sm:inline-flex font-studio-mono text-[11px] px-3 py-2 rounded-full border border-studio-rule text-studio-ink-dim hover:border-studio-ink-dim hover:text-studio-ink transition-colors">
            Reset
          </button>
          <button onClick={onClose} aria-label="Close diagram"
            className="ml-1 sm:ml-2 font-studio-sans text-[12.5px] sm:text-[13px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-studio-ink text-studio-bg hover:opacity-90 transition-opacity whitespace-nowrap">
            Close ✕
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto" style={{ touchAction: 'pinch-zoom pan-x pan-y' }}>
        <div className="p-4 sm:p-6" style={{ zoom }}>
          {children}
        </div>
      </div>
      <div className="px-4 py-2 border-t border-studio-rule bg-studio-paper font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.5px] text-center">
        Pinch to zoom · drag to pan · Esc to close
      </div>
    </div>
  );
};

interface LessonViewProps {
  module: CourseModule;
  lesson: Lesson;
  modules: CourseModule[];
  courseId: CourseId;
  setView: (view: View) => void;
  completedLessons: Record<string, boolean>;
  markComplete: (lessonId: string) => void;
  savedLessons: Record<string, boolean>;
  toggleSaved: (lessonId: string) => void;
}

export const LessonView = ({ module, lesson, modules, courseId, setView, completedLessons, markComplete, savedLessons, toggleSaved }: LessonViewProps) => {
  const isSaved = !!savedLessons[lesson.id];
  const [slideMode, setSlideMode] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [zoomedDiagram, setZoomedDiagram] = useState<React.ReactNode>(null);
  const [selectedRole, setSelectedRole] = useState<RoleKey | null>(null);

  useEffect(() => { setSelectedRole(null); }, [lesson.id]);

  // Close drawer on lesson change or Escape
  useEffect(() => { setNavOpen(false); }, [lesson.id]);
  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setNavOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navOpen]);

  const lessonIdx = module.lessons.findIndex(l => l.id === lesson.id);
  const moduleIdx = modules.findIndex(m => m.id === module.id);
  const isLast = lessonIdx === module.lessons.length - 1;
  const effectiveDiagramKey = (selectedRole && lesson.roleDiagrams?.[selectedRole]) || lesson.diagram;
  const DiagramComponent = effectiveDiagramKey ? DIAGRAM_REGISTRY[effectiveDiagramKey] : null;
  const ExtraDiagramComponent = lesson.extraDiagram ? DIAGRAM_REGISTRY[lesson.extraDiagram] : null;
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
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border-b gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="font-studio-mono text-[11px] lg:text-[12px] truncate" style={{ color: 'rgba(245,239,228,0.5)' }}>
            <span style={{ color }}>{course?.title}</span> · {module.title} · {lesson.title}
          </div>
          <button
            onClick={() => setSlideMode(false)}
            className="flex-shrink-0 font-studio-sans text-[12px] lg:text-[13px] px-3 py-1.5 rounded-[4px] transition-colors whitespace-nowrap"
            style={{ color: 'rgba(245,239,228,0.7)', background: 'rgba(255,255,255,0.06)' }}
          >
            ← Study mode
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
          <div className="max-w-4xl w-full">
            <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-4 lg:mb-6" style={{ color: 'rgba(245,239,228,0.35)' }}>
              {slideIdx + 1} / {totalSlides}
            </div>
            {isVisualSlide ? (
              <div>
                <h2 className="font-studio-display text-[28px] sm:text-[36px] lg:text-[48px] font-normal leading-[1.05] tracking-[-0.6px] lg:tracking-[-1px] mb-6 lg:mb-8 whitespace-pre-line" style={{ color: '#fbf6ec' }}>
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
                <h2 className="font-studio-display text-[30px] sm:text-[40px] lg:text-[52px] font-normal leading-[1.0] tracking-[-0.8px] lg:tracking-[-1.5px] mb-4 lg:mb-6" style={{ color: '#fbf6ec' }}>
                  {slide!.heading}
                </h2>
                <p className="font-studio-serif text-[17px] sm:text-[19px] lg:text-[22px] leading-[1.55]" style={{ color: 'rgba(245,239,228,0.78)' }}>
                  {slide!.body}
                </p>
                {slide!.bullets && (
                  <ul className="mt-4 lg:mt-5 space-y-2.5">
                    {slide!.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 font-studio-sans text-[14.5px] sm:text-[16px] lg:text-[17px]" style={{ color: 'rgba(245,239,228,0.7)' }}>
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

        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border-t gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => setSlideIdx(Math.max(0, slideIdx - 1))}
            disabled={slideIdx === 0}
            className="font-studio-sans text-[12px] lg:text-[13px] px-3 lg:px-4 py-2 rounded-[4px] disabled:opacity-20 transition"
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
        crumbViews={[{ type: 'home', courseId }, { type: 'home', courseId, moduleId: module.id }, undefined]}
        setView={setView}
      />

      {/* Mobile drawer overlay */}
      {navOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}
      {/* Mobile drawer panel */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-[300px] max-w-[85vw] bg-studio-bg border-r border-studio-rule shadow-xl transform transition-transform duration-200 ease-out ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!navOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-studio-rule">
          <span className="font-studio-mono text-[11px] tracking-[1.2px] uppercase text-studio-ink-mute">Course outline</span>
          <button
            onClick={() => setNavOpen(false)}
            className="font-studio-sans text-[13px] text-studio-ink-dim hover:text-studio-ink"
            aria-label="Close lesson outline"
          >
            Close ✕
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-57px)] px-4 py-4">
          <CourseNav
            modules={modules}
            completedLessons={completedLessons}
            color={color}
            courseId={courseId}
            setView={setView}
            activeLessonId={lesson.id}
          />
        </div>
      </aside>

      <div className="max-w-[1440px] mx-auto flex gap-10 px-4 sm:px-6 lg:px-12 items-start">
        <div className="hidden lg:block w-[260px] flex-shrink-0 sticky top-6 py-14">
          <CourseNav
            modules={modules}
            completedLessons={completedLessons}
            color={color}
            courseId={courseId}
            setView={setView}
            activeLessonId={lesson.id}
          />
        </div>

        <article className="flex-1 min-w-0 max-w-3xl py-8 lg:py-14">
        <div className="flex items-center justify-between mb-3 lg:mb-4 gap-3">
          <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase" style={{ color }}>
            Module {moduleIdx + 1} · Lesson {lessonIdx + 1}
          </div>
          <button
            onClick={() => setNavOpen(true)}
            className="lg:hidden font-studio-mono text-[11px] tracking-[1px] text-studio-ink-dim hover:text-studio-ink border border-studio-rule px-3 py-1.5 rounded-full transition-colors duration-150"
            aria-label="Open lesson outline"
          >
            ☰ Lessons
          </button>
        </div>

        <div className="flex items-start justify-between gap-3 mb-8 lg:mb-10">
          <h1 className="font-studio-display text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.05] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-studio-ink whitespace-pre-line">
            {lesson.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 mt-1 lg:mt-2">
            <button
              onClick={() => toggleSaved(lesson.id)}
              aria-label={isSaved ? 'Remove from shelf' : 'Save to shelf'}
              className={`font-studio-mono text-[11px] tracking-[1px] border px-3 lg:px-3.5 py-1.5 rounded-full transition-colors duration-150 whitespace-nowrap ${isSaved ? 'text-white' : 'text-studio-ink-mute hover:text-studio-ink border-studio-rule'}`}
              style={isSaved ? { background: color, borderColor: color } : undefined}
            >
              {isSaved ? '★ Saved' : '☆ Save'}
            </button>
            <button
              onClick={() => { setSlideIdx(0); setSlideMode(true); }}
              className="font-studio-mono text-[11px] tracking-[1px] text-studio-ink-mute hover:text-studio-ink border border-studio-rule px-3 lg:px-3.5 py-1.5 rounded-full transition-colors duration-150 whitespace-nowrap"
            >
              Slides →
            </button>
          </div>
        </div>

        {lesson.imageUrl && (
          <div className="mb-8 lg:mb-10 xl:-mr-20 2xl:-mr-40">
            <img src={lesson.imageUrl} alt={lesson.title}
              className="w-full h-48 sm:h-64 lg:h-72 xl:h-96 object-cover rounded-[4px]"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
        )}

        {DiagramComponent && (
          <div className="mb-8 lg:mb-10 xl:-mr-20 2xl:-mr-40 relative bg-studio-paper border border-studio-rule rounded-[4px] p-3 sm:p-4 lg:p-6 overflow-x-auto">
            <button
              onClick={() => setZoomedDiagram(<DiagramComponent />)}
              aria-label="Expand diagram"
              className="absolute top-2 right-2 z-10 font-studio-mono text-[10.5px] tracking-[0.6px] px-2.5 py-1.5 rounded-full bg-studio-bg/90 backdrop-blur-sm border border-studio-rule text-studio-ink-dim hover:text-studio-ink hover:border-studio-ink-dim transition-colors"
            >
              ⤢ Expand
            </button>
            <DiagramComponent />
          </div>
        )}
        {ExtraDiagramComponent && (
          <div className="mb-8 lg:mb-10 xl:-mr-20 2xl:-mr-40 relative bg-studio-paper border border-studio-rule rounded-[4px] p-3 sm:p-4 lg:p-6 overflow-x-auto">
            <button
              onClick={() => setZoomedDiagram(<ExtraDiagramComponent />)}
              aria-label="Expand diagram"
              className="absolute top-2 right-2 z-10 font-studio-mono text-[10.5px] tracking-[0.6px] px-2.5 py-1.5 rounded-full bg-studio-bg/90 backdrop-blur-sm border border-studio-rule text-studio-ink-dim hover:text-studio-ink hover:border-studio-ink-dim transition-colors"
            >
              ⤢ Expand
            </button>
            <ExtraDiagramComponent />
          </div>
        )}
        {hasInlineSvg && (
          <div className="mb-8 lg:mb-10 xl:-mr-20 2xl:-mr-40 relative bg-studio-paper border border-studio-rule rounded-[4px] p-3 sm:p-4 lg:p-6">
            <button
              onClick={() => setZoomedDiagram(
                <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={`${lesson.inlineSvgId ?? lesson.id}-zoom`} />
              )}
              aria-label="Expand diagram"
              className="absolute top-2 right-2 z-10 font-studio-mono text-[10.5px] tracking-[0.6px] px-2.5 py-1.5 rounded-full bg-studio-bg/90 backdrop-blur-sm border border-studio-rule text-studio-ink-dim hover:text-studio-ink hover:border-studio-ink-dim transition-colors"
            >
              ⤢ Expand
            </button>
            <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={lesson.inlineSvgId ?? lesson.id} />
          </div>
        )}

        <div className="space-y-8 lg:space-y-10">
          {lesson.slides.map((s, i) => (
            <section key={i} className="border-t border-studio-rule-soft pt-7 lg:pt-8 first:border-0 first:pt-0">
              <h2 className="font-studio-display text-[22px] sm:text-[24px] lg:text-[28px] font-normal tracking-[-0.3px] lg:tracking-[-0.4px] text-studio-ink mb-3 leading-[1.15]">
                {s.heading}
              </h2>
              <p className="font-studio-sans text-[14.5px] lg:text-[15.5px] text-studio-ink-dim leading-[1.7]">{s.body}</p>
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
          <RoleTabPanel roleContent={lesson.roleContent} selected={selectedRole} setSelected={setSelectedRole} />
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

      <SvgZoomModal
        open={!!zoomedDiagram}
        onClose={() => setZoomedDiagram(null)}
        title={lesson.title}
      >
        {zoomedDiagram}
      </SvgZoomModal>
    </div>
  );
};
