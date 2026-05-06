import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import type { CourseModule, View } from '../../types/course';

interface QuizViewProps {
  module: CourseModule;
  modules: CourseModule[];
  setView: (view: View) => void;
  recordQuizScore: (moduleId: string, score: number) => void;
}

export const QuizView = ({ module, modules, setView, recordQuizScore }: QuizViewProps) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const moduleIdx = modules.findIndex(m => m.id === module.id);

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
      setView({ type: 'module', moduleId: modules[moduleIdx + 1].id });
    } else {
      setView({ type: 'home' });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'module', moduleId: module.id })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> {module.title}
      </button>

      <div className="mb-6">
        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Module {moduleIdx + 1} Quiz</span>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-1 flex items-center gap-2">
          <Award className="w-7 h-7 text-amber-500" /> Test Your Understanding
        </h1>
      </div>

      {submitted && (
        <div className={`mb-6 p-5 rounded-xl border-2 ${score === module.quiz.length ? 'bg-emerald-50 border-emerald-200' : score >= module.quiz.length * 0.7 ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'}`}>
          <div className="text-3xl font-bold text-slate-900">{score} / {module.quiz.length}</div>
          <p className="text-slate-700 mt-1">
            {score === module.quiz.length ? 'Perfect score — you have got this module locked in.' : score >= module.quiz.length * 0.7 ? 'Solid work. Review the missed questions and you are set.' : 'Worth another pass through the lessons before moving on.'}
          </p>
        </div>
      )}

      <div className="space-y-6 mb-6">
        {module.quiz.map((q, qi) => (
          <div key={qi} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-semibold text-slate-900 mb-3 flex gap-2">
              <span className="text-blue-600">Q{qi + 1}.</span>
              <span>{q.q}</span>
            </div>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === oi;
                const isCorrect = q.correct === oi;
                let cls = 'w-full text-left p-3 rounded-lg border text-sm transition ';
                if (submitted) {
                  if (isCorrect) cls += 'bg-emerald-50 border-emerald-300 text-emerald-900';
                  else if (isSelected) cls += 'bg-red-50 border-red-300 text-red-900';
                  else cls += 'bg-white border-slate-200 text-slate-600';
                } else {
                  cls += isSelected ? 'bg-blue-50 border-blue-400 text-blue-900' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-700';
                }
                return (
                  <button key={oi} disabled={submitted} onClick={() => setAnswers({ ...answers, [qi]: oi })} className={cls}>
                    <span className="font-mono text-xs text-slate-400 mr-2">{String.fromCharCode(65 + oi)}.</span>
                    {opt}
                    {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 inline ml-2 text-emerald-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
        {!submitted ? (
          <button onClick={handleSubmit} disabled={Object.keys(answers).length < module.quiz.length} className="ml-auto px-5 py-2.5 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold shadow-sm">
            Submit ({Object.keys(answers).length}/{module.quiz.length})
          </button>
        ) : (
          <>
            <button onClick={handleRetry} className="px-4 py-2 text-slate-700 hover:text-slate-900 text-sm">Try Again</button>
            <button onClick={handleNext} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1.5 text-sm font-semibold shadow-sm">
              {moduleIdx < modules.length - 1 ? 'Next Module' : 'Back to Course'} <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
