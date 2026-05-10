import React from 'react';
import { ChevronRight, Sparkles, Zap, Brain, Layers, Shield, ShieldAlert, Building2, CheckCircle2 } from 'lucide-react';
import type { Course, CourseId, View } from '../../types/course';

const MODULE_ICONS: Record<string, React.ReactNode> = {
  zap: <Zap className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  'shield-alert': <ShieldAlert className="w-6 h-6" />,
  'building-2': <Building2 className="w-6 h-6" />,
};

interface HomeViewProps {
  setView: (view: View) => void;
  course: Course;
  completedLessons: Record<string, boolean>;
}

export const HomeView = ({ setView, course, completedLessons }: HomeViewProps) => {
  const { modules } = course;
  const courseId: CourseId = course.id;
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;

  const isKids = courseId === 'ai-kids';

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> {modules.length} modules · {totalLessons} lessons
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">{course.title}</h1>
        <p className="text-lg text-slate-600">{course.subtitle}</p>
      </div>

      {courseId === 'ai-cybersec-se' && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">What you will be able to do</h2>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-blue-600">▸</span> Explain AI/ML/LLM/agent concepts in customer language without hand-waving</li>
            <li className="flex gap-2"><span className="text-blue-600">▸</span> Whiteboard the AI stack — including MCP, A2A, and agent identity</li>
            <li className="flex gap-2"><span className="text-blue-600">▸</span> Understand how major security vendors are embedding AI into their products</li>
            <li className="flex gap-2"><span className="text-blue-600">▸</span> Run discovery, demos, and objection handling that distinguish you from product-pitchers</li>
            <li className="flex gap-2"><span className="text-blue-600">▸</span> Use AI tools effectively in your own SE workflows</li>
          </ul>
        </div>
      )}

      {courseId === 'ai-essentials' && (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">What you will understand</h2>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-emerald-600">▸</span> How AI actually works — without the hype or the jargon</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span> Why LLMs are both powerful and unreliable, and what to do about it</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span> What agentic AI means and why it matters for every industry</li>
            <li className="flex gap-2"><span className="text-emerald-600">▸</span> Where AI is heading and how to stay ahead of the curve</li>
          </ul>
        </div>
      )}

      {courseId === 'ai-deep-dive' && (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">Who this is for</h2>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-purple-600">▸</span> Engineers and technical leads who want the full picture, not the summary</li>
            <li className="flex gap-2"><span className="text-purple-600">▸</span> Product managers and architects building on top of AI</li>
            <li className="flex gap-2"><span className="text-purple-600">▸</span> Anyone who found AI Essentials too shallow</li>
          </ul>
        </div>
      )}

      {isKids && (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">You will discover</h2>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li className="flex gap-2"><span className="text-orange-500">▸</span> How AI learns (it\'s not magic — and it\'s actually pretty cool)</li>
            <li className="flex gap-2"><span className="text-orange-500">▸</span> Why chatbots sometimes get things completely wrong</li>
            <li className="flex gap-2"><span className="text-orange-500">▸</span> What AI agents are and why they\'re such a big deal</li>
            <li className="flex gap-2"><span className="text-orange-500">▸</span> What kinds of jobs exist in the AI world — and which one might be for you</li>
            <li className="flex gap-2"><span className="text-orange-500">▸</span> How to stay safe online — deepfakes, scams, and what never to share with AI</li>
          </ul>
        </div>
      )}

      <h2 className="text-xl font-bold text-slate-900 mb-4">Modules</h2>
      <div className="space-y-3">
        {modules.map((m, mi) => {
          const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
          const allDone = moduleLessonsCompleted === m.lessons.length;
          return (
            <button
              key={m.id}
              onClick={() => setView({ type: 'module', courseId, moduleId: m.id })}
              className="w-full text-left bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition group"
            >
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

      {isKids && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-5">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-bold text-slate-900 mb-1">Career Discovery Game</h3>
            <p className="text-sm text-slate-600">Answer a few questions and find out which AI career might suit you — engineer, ethicist, creator, or something else?</p>
            <button className="mt-3 text-xs font-semibold text-pink-700 hover:text-pink-900 transition">
              Coming soon →
            </button>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-5">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-bold text-slate-900 mb-1">Careers with AI</h3>
            <p className="text-sm text-slate-600">Explore what jobs look like when AI is your teammate — from AI engineers to AI ethicists to AI-powered doctors.</p>
            <button className="mt-3 text-xs font-semibold text-sky-700 hover:text-sky-900 transition">
              Coming soon →
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-slate-500">
        {completedCount} of {totalLessons} lessons completed
      </div>
    </div>
  );
};
