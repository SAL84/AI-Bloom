import React from 'react';
import { ChevronRight, Sparkles, Zap, Brain, Layers, Shield, ShieldAlert, Building2, CheckCircle2 } from 'lucide-react';

const MODULE_ICONS: Record<string, React.ReactNode> = {
  zap: <Zap className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  'shield-alert': <ShieldAlert className="w-6 h-6" />,
  'building-2': <Building2 className="w-6 h-6" />,
};
import type { CourseModule, View } from '../../types/course';
import { COURSE } from '../../data/modules';

interface HomeViewProps {
  setView: (view: View) => void;
  modules: CourseModule[];
  completedLessons: Record<string, boolean>;
}

export const HomeView = ({ setView, modules, completedLessons }: HomeViewProps) => {
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> 7 modules · ~26 lessons · 18 diagrams
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">{COURSE.title}</h1>
        <p className="text-lg text-slate-600">{COURSE.subtitle}</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-slate-900 mb-2">What you will be able to do</h2>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Explain AI/ML/LLM/agent concepts in customer language without hand-waving</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Whiteboard the AI stack — including MCP, A2A, and agent identity</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Understand how major security vendors are embedding AI into their products — and what that actually means under the hood</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Run discovery, demos, and objection handling that distinguish you from product-pitchers</li>
          <li className="flex gap-2"><span className="text-blue-600">▸</span> Use AI tools effectively in your own SE workflows</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-4">Modules</h2>
      <div className="space-y-3">
        {modules.map((m, mi) => {
          const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
          const allDone = moduleLessonsCompleted === m.lessons.length;
          return (
            <button key={m.id} onClick={() => setView({ type: 'module', moduleId: m.id })} className="w-full text-left bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition group">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${allDone ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                  {allDone ? <CheckCircle2 className="w-6 h-6" /> : (MODULE_ICONS[m.icon] ?? <span className="text-xl">{m.icon}</span>)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-500">MODULE {mi + 1}</span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500">{moduleLessonsCompleted}/{m.lessons.length} lessons</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition">{m.title}</h3>
                  <p className="text-sm text-slate-600">{m.summary}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        {completedCount} of {totalLessons} lessons completed
      </div>
    </div>
  );
};
