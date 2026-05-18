import React, { useState, useMemo } from 'react';
import { COURSES } from '../../data/modules';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { CourseModule, CourseId, View } from '../../types/course';

const COURSE_COLORS: Record<string, string> = {
  'ai-kids':       '#d96a3a',
  'ai-essentials': '#3f8a5e',
  'ai-deep-dive':  '#5a4ec0',
  'ai-cybersec-se':'#2c6db0',
};

interface QuizViewProps {
  module: CourseModule;
  modules: CourseModule[];
  courseId: CourseId;
  setView: (view: View) => void;
  recordQuizScore: (moduleId: string, score: number) => void;
}

export const QuizView = ({ module, modules, courseId, setView, recordQuizScore }: QuizViewProps) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const moduleIdx = modules.findIndex(m => m.id === module.id);
  const color = COURSE_COLORS[courseId] ?? '#5b5347';
  const course = COURSES[courseId];

  const score = useMemo(() => module.quiz.filter((q, i) => answers[i] === q.correct).length, [answers, module.quiz]);

  const handleSubmit = () => {
    setSubmitted(true);
    recordQuizScore(module.id, score);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const handleNext = () => {
    if (moduleIdx < modules.length - 1) {
      setView({ type: 'module', courseId, moduleId: modules[moduleIdx + 1].id });
    } else {
      setView({ type: 'home', courseId });
    }
  };

  const answered = Object.keys(answers).length;

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite
        crumbs={[course?.title ?? 'Course', module.title, 'Quiz']}
        setView={setView}
      />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-4" style={{ color }}>
          Module {moduleIdx + 1} · End-of-module quiz
        </div>
        <h1 className="font-studio-display text-[44px] font-normal tracking-[-1px] text-studio-ink leading-[1.05] mb-10">
          {module.title}
        </h1>

        {submitted && (
          <div className="mb-10 px-7 py-6 bg-studio-paper border border-studio-rule rounded-[4px]">
            <div className="font-studio-display text-[56px] leading-none font-normal" style={{ color }}>
              {score}/{module.quiz.length}
            </div>
            <p className="font-studio-serif italic text-[18px] text-studio-ink-dim mt-2 leading-[1.4]">
              {score === module.quiz.length
                ? 'Perfect — you have this module locked in.'
                : score >= module.quiz.length * 0.7
                ? 'Solid work. Review the missed questions and you are set.'
                : 'Worth another pass through the lessons before moving on.'}
            </p>
          </div>
        )}

        <div className="space-y-7">
          {module.quiz.map((q, qi) => (
            <div key={qi} className="border-t border-studio-rule pt-7">
              <div className="flex gap-4 mb-4">
                <span className="font-studio-mono text-[11px] text-studio-ink-mute mt-1.5 flex-shrink-0">{String(qi + 1).padStart(2, '0')}</span>
                <span className="font-studio-serif text-[19px] text-studio-ink leading-[1.4] font-normal">{q.q}</span>
              </div>
              <div className="space-y-2 pl-9">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = q.correct === oi;
                  let style: React.CSSProperties = {};
                  let cls = 'w-full text-left px-4 py-3 rounded-[4px] border font-studio-sans text-[14px] transition-all duration-100 flex items-center gap-3 ';
                  if (submitted) {
                    if (isCorrect) { style = { background: color + '18', borderColor: color, color: '#1d1916' }; }
                    else if (isSelected) { style = { background: '#fef2f2', borderColor: '#fca5a5', color: '#7f1d1d' }; }
                    else { cls += 'border-studio-rule text-studio-ink-mute bg-transparent'; }
                  } else {
                    cls += isSelected
                      ? 'bg-studio-paper border-studio-ink text-studio-ink'
                      : 'bg-transparent border-studio-rule text-studio-ink-dim hover:border-studio-ink-dim hover:text-studio-ink';
                  }
                  return (
                    <button key={oi} disabled={submitted} onClick={() => setAnswers({ ...answers, [qi]: oi })} className={cls} style={style}>
                      <span className="font-studio-mono text-[10.5px] text-studio-ink-mute flex-shrink-0 w-4">{String.fromCharCode(65 + oi)}</span>
                      <span className="flex-1">{opt}</span>
                      {submitted && isCorrect && <span className="font-studio-mono text-[10px] tracking-[0.5px] flex-shrink-0" style={{ color }}>✓ correct</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 pt-10 mt-8 border-t border-studio-rule">
          {!submitted ? (
            <>
              <span className="font-studio-mono text-[12px] text-studio-ink-mute">{answered} of {module.quiz.length} answered</span>
              <button
                onClick={handleSubmit}
                disabled={answered < module.quiz.length}
                className="font-studio-sans text-[13.5px] font-medium px-5 py-2.5 rounded-full text-studio-bg disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                style={{ background: color }}
              >
                Submit answers →
              </button>
            </>
          ) : (
            <>
              <button onClick={handleRetry} className="font-studio-sans text-[14px] text-studio-ink-dim hover:text-studio-ink transition-colors">
                ← Try again
              </button>
              <button
                onClick={handleNext}
                className="font-studio-sans text-[13.5px] font-medium px-5 py-2.5 rounded-full text-studio-bg hover:opacity-90 transition-opacity"
                style={{ background: color }}
              >
                {moduleIdx < modules.length - 1 ? 'Next module →' : 'Back to course →'}
              </button>
            </>
          )}
        </div>
      </div>

      <StudioFooter />
    </div>
  );
};
