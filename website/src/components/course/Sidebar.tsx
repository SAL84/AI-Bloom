import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Circle, Award, Search, Sparkles, Map, Library, Lightbulb } from 'lucide-react';
import type { CourseModule, View } from '../../types/course';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  view: View;
  setView: (view: View) => void;
  modules: CourseModule[];
  completedLessons: Record<string, boolean>;
  totalLessons: number;
  completedCount: number;
}

const AI_FACTS = [
  { label: 'Hot take', text: 'GPT stands for "Generative Pre-trained Transformer." Not "Generally Pretty Terrifying," though both apply depending on the day.' },
  { label: 'Fun fact', text: 'The attention mechanism in transformers was introduced in 2017. Before that, AI had to read sentences like a toddler — left to right, one word at a time, forgetting the beginning by the end.' },
  { label: 'Reality check', text: 'LLMs don\'t "know" anything. They\'re very confident pattern-completion machines. Your overconfident colleague is basically a human LLM.' },
  { label: 'True story', text: 'The term "hallucination" for AI making things up was borrowed from psychology. Turns out the most human thing about AI is its relationship with facts.' },
  { label: 'Did you know', text: 'A single training run for a frontier model can cost tens of millions of dollars. And it still can\'t reliably count the R\'s in "strawberry."' },
  { label: 'Perspective', text: 'RAG (Retrieval-Augmented Generation) is essentially giving an AI a cheat sheet during the exam. Somehow this is considered cheating for students but innovation in AI.' },
  { label: 'Fun fact', text: 'The word "robot" comes from the Czech word "robota," meaning forced labor. We\'ve been worried about this for over 100 years. The robots are still doing the paperwork.' },
  { label: 'Hot take', text: 'Prompt engineering is the art of asking a very powerful computer the right question. We have spent billions of dollars to create something we have to talk to nicely.' },
  { label: 'True story', text: 'AI models are trained on internet text, which means they\'ve read more Reddit arguments than any human alive. Make of that what you will.' },
  { label: 'Reality check', text: 'An "agent" in AI just means a model that can use tools and remember what it did. Congratulations — you\'ve been an agent your whole career.' },
];

export const Sidebar = ({ open, setOpen, view, setView, modules, completedLessons, totalLessons, completedCount }: SidebarProps) => {
  const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * AI_FACTS.length));

  useEffect(() => {
    if (view.type === 'library') {
      setFactIndex(Math.floor(Math.random() * AI_FACTS.length));
    }
  }, [view.type]);

  const fact = AI_FACTS[factIndex];

  return (
    <>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
      <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 overflow-y-auto transition-transform duration-200 flex flex-col`}>
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">SE Course · V2</span>
          </div>
          <h1 className="text-lg font-bold leading-tight">AI for Cybersecurity Sales Engineers</h1>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Progress</span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <button onClick={() => { setView({ type: 'library' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'library' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <Library className="w-4 h-4" /> Course Library
          </button>

          {view.type === 'library' ? (
            <div className="mt-6 mx-1 rounded-xl bg-slate-800/60 border border-slate-700 p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{fact.label}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{fact.text}</p>
            </div>
          ) : (
            <>
              <button onClick={() => { setView({ type: 'home' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <BookOpen className="w-4 h-4" /> Course Home
              </button>

              <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Modules</div>

              {modules.map((m, mi) => {
                const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
                const allDone = moduleLessonsCompleted === m.lessons.length;
                return (
                  <div key={m.id}>
                    <button onClick={() => { setView({ type: 'module', moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-start gap-2 ${view.type === 'module' && view.moduleId === m.id ? 'bg-slate-800' : 'hover:bg-slate-800/60'}`}>
                      <span className="text-base leading-none mt-0.5 w-5 text-center">{m.icon}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-medium truncate">{mi + 1}. {m.title}</span>
                        <span className="text-xs text-slate-400">{moduleLessonsCompleted}/{m.lessons.length} lessons {allDone && '✓'}</span>
                      </span>
                    </button>
                    {view.type === 'module' && view.moduleId === m.id && (
                      <div className="ml-3 pl-3 border-l border-slate-700 my-1 space-y-0.5">
                        {m.lessons.map((l, li) => (
                          <button key={l.id} onClick={() => { setView({ type: 'lesson', moduleId: m.id, lessonId: l.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'lesson' && view.lessonId === l.id ? 'bg-blue-600/20 text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                            {completedLessons[l.id] ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-3.5 h-3.5 flex-shrink-0" />}
                            <span className="truncate">{li + 1}. {l.title}</span>
                          </button>
                        ))}
                        <button onClick={() => { setView({ type: 'quiz', moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'quiz' && view.moduleId === m.id ? 'bg-amber-600/20 text-amber-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                          <Award className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>Module Quiz</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Reference</div>
              <button onClick={() => { setView({ type: 'glossary' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'glossary' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Search className="w-4 h-4" /> Glossary
              </button>
              <button onClick={() => { setView({ type: 'roadmap' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'roadmap' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Map className="w-4 h-4" /> Roadmap
              </button>
            </>
          )}
        </nav>

        <div className="p-3 border-t border-slate-800 text-xs text-slate-500">
          V2 includes architectural diagrams. Content current through early 2026.
        </div>
      </aside>
    </>
  );
};
