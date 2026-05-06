import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Award } from 'lucide-react';
import type { CourseModule, View } from '../../types/course';

interface ModuleViewProps {
  module: CourseModule;
  modules: CourseModule[];
  setView: (view: View) => void;
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
}

export const ModuleView = ({ module, modules, setView, completedLessons, quizScores }: ModuleViewProps) => {
  const moduleIndex = modules.findIndex(m => m.id === module.id);
  const moduleLessonsCompleted = module.lessons.filter(l => completedLessons[l.id]).length;

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'home' })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> Course Home
      </button>

      <div className="mb-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Module {moduleIndex + 1}</span>
        <h1 className="text-3xl font-bold text-slate-900 mt-1 flex items-center gap-3">
          <span className="text-3xl">{module.icon}</span> {module.title}
        </h1>
        <p className="text-slate-600 mt-2">{module.summary}</p>
      </div>

      <div className="space-y-2 mb-6">
        {module.lessons.map((l, li) => (
          <button key={l.id} onClick={() => setView({ type: 'lesson', moduleId: module.id, lessonId: l.id })} className="w-full text-left bg-white border border-slate-200 hover:border-blue-300 rounded-lg p-4 transition flex items-center gap-3 group">
            <div className="flex-shrink-0">
              {completedLessons[l.id] ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-slate-300" />}
            </div>
            <div className="flex-1">
              <div className="text-xs text-slate-500">Lesson {li + 1}{l.diagram && ' · includes diagram'}</div>
              <div className="font-medium text-slate-900 group-hover:text-blue-700">{l.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
          </button>
        ))}

        <button onClick={() => setView({ type: 'quiz', moduleId: module.id })} className="w-full text-left bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-400 rounded-lg p-4 transition flex items-center gap-3 group">
          <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-xs text-amber-700 font-semibold">MODULE QUIZ</div>
            <div className="font-medium text-slate-900">Test your understanding</div>
          </div>
          {quizScores[module.id] !== undefined && (
            <span className="text-sm font-semibold text-amber-700">{quizScores[module.id]}/{module.quiz.length}</span>
          )}
          <ChevronRight className="w-5 h-5 text-amber-600" />
        </button>
      </div>

      <div className="text-sm text-slate-500 text-center">
        {moduleLessonsCompleted} of {module.lessons.length} lessons completed
      </div>
    </div>
  );
};
