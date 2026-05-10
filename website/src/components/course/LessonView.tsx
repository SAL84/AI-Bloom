import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, FileText, Presentation } from 'lucide-react';
import type { CourseModule, CourseId, Lesson, View } from '../../types/course';
import { DIAGRAM_REGISTRY } from '../diagrams';
import { InlineSVGDiagram } from '../diagrams/InlineSVGDiagram';
import { RoleTabPanel } from './RoleTabPanel';

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

  if (slideMode) {
    const hasVisual = !!(DiagramComponent || hasInlineSvg || lesson.imageUrl);
    const totalSlides = (hasVisual ? 1 : 0) + lesson.slides.length;
    const isVisualSlide = hasVisual && slideIdx === 0;
    const contentSlideIdx = hasVisual ? slideIdx - 1 : slideIdx;
    const slide = !isVisualSlide ? lesson.slides[contentSlideIdx] : null;

    return (
      <div className="min-h-full bg-slate-900 text-white flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="text-sm text-slate-400">
            <span className="font-semibold text-blue-400">M{moduleIdx + 1}.{lessonIdx + 1}</span> · {lesson.title}
          </div>
          <button onClick={() => setSlideMode(false)} className="text-sm text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-slate-800">
            <FileText className="w-4 h-4" /> Study Mode
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-4xl w-full">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3">Slide {slideIdx + 1} of {totalSlides}</div>
            {isVisualSlide ? (
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{lesson.title}</h2>
                {lesson.imageUrl ? (
                  <img
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    className="w-full max-h-72 object-cover rounded-xl"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <div className="bg-white rounded-xl p-4">
                    {DiagramComponent
                      ? <DiagramComponent />
                      : <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={lesson.inlineSvgId ?? lesson.id} />
                    }
                  </div>
                )}
              </div>
            ) : (
              <>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{slide!.heading}</h2>
                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">{slide!.body}</p>
                {slide!.bullets && (
                  <ul className="mt-4 space-y-2">
                    {slide!.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-lg text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-slate-800 gap-3">
          <button onClick={() => setSlideIdx(Math.max(0, slideIdx - 1))} disabled={slideIdx === 0} className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 text-sm">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button key={i} onClick={() => setSlideIdx(i)} className={`h-2 rounded-full transition-all ${i === slideIdx ? 'w-8 bg-blue-400' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} />
            ))}
          </div>
          {slideIdx < totalSlides - 1 ? (
            <button onClick={() => setSlideIdx(slideIdx + 1)} className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 text-sm font-semibold">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => { setSlideMode(false); goNext(); }} className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 text-sm font-semibold">
              Finish Lesson <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      {/* Header — constrained */}
      <div className="max-w-3xl mx-auto">
        <button onClick={() => setView({ type: 'module', courseId, moduleId: module.id })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
          <ChevronLeft className="w-4 h-4" /> {module.title}
        </button>

        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Module {moduleIdx + 1} · Lesson {lessonIdx + 1}</span>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1">{lesson.title}</h1>
          </div>
          <button onClick={() => { setSlideIdx(0); setSlideMode(true); }} className="flex-shrink-0 px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-sm flex items-center gap-1.5 font-medium">
            <Presentation className="w-4 h-4" /> Slide Mode
          </button>
        </div>
      </div>

      {/* Photo — shown for all lessons that have an imageUrl */}
      {lesson.imageUrl && (
        <div className="max-w-3xl mx-auto mb-6">
          <img
            src={lesson.imageUrl}
            alt={lesson.title}
            className="w-full h-52 lg:h-64 object-cover rounded-xl shadow-sm"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      )}

      {/* Diagram — wider container so it scales up on large screens */}
      {DiagramComponent && (
        <div className="max-w-5xl mx-auto mb-6">
          <DiagramComponent />
        </div>
      )}
      {hasInlineSvg && (
        <div className="max-w-5xl mx-auto mb-6">
          <InlineSVGDiagram svgContent={lesson.inlineSvg!} diagramId={lesson.inlineSvgId ?? lesson.id} />
        </div>
      )}

      {/* Lesson content — constrained for readability */}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 mb-8">
          {lesson.slides.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                <h3 className="font-semibold text-slate-900">{s.heading}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{s.body}</p>
              {s.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {lesson.roleContent && lesson.roleContent.length > 0 && (
          <RoleTabPanel roleContent={lesson.roleContent} />
        )}

        <div className="flex items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-200">
          <button onClick={goPrev} className="px-4 py-2 text-slate-600 hover:text-slate-900 flex items-center gap-1.5 text-sm">
            <ChevronLeft className="w-4 h-4" /> {lessonIdx === 0 ? 'Module' : 'Previous'}
          </button>
          <button onClick={goNext} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1.5 text-sm font-semibold shadow-sm">
            {isLast ? 'Take Quiz' : 'Next Lesson'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
