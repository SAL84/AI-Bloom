import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Circle, Award, Search, Sparkles, Map, Library, Lightbulb, Flame, Zap, Brain, Layers, Shield, ShieldAlert, Building2, Rocket, FlaskConical, Bot } from 'lucide-react';

const MODULE_ICONS: Record<string, React.ReactNode> = {
  zap: <Zap className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  layers: <Layers className="w-4 h-4" />,
  shield: <Shield className="w-4 h-4" />,
  'shield-alert': <ShieldAlert className="w-4 h-4" />,
  'building-2': <Building2 className="w-4 h-4" />,
};
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

const INSPIRATIONAL = [
  'The best time to understand AI was five years ago. The second best time is right now.',
  'Everyone around you is already using AI. The question is whether you\'re shaping it or just reacting to it.',
  'AI won\'t replace you. Someone who understands AI might. Choose which side of that sentence you\'re on.',
  'You don\'t need to build AI to master it. You just need to understand it well enough to ask better questions than anyone else in the room.',
  'The people who thrive in the next decade won\'t be the ones who feared AI — they\'ll be the ones who got curious first.',
  'Every expert was once a beginner who decided not to stay one.',
  'Understanding AI is not a technical skill anymore. It\'s a leadership skill.',
  'The most powerful thing you can learn today is how to think alongside machines — and know when not to trust them.',
  'AI is moving fast. The gap between those who understand it and those who don\'t is widening every month. Which side are you on?',
  'Curiosity about how things work has always been the unfair advantage. AI is just the latest frontier.',
];

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
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * AI_FACTS.length));
  const [inspIndex, setInspIndex] = useState(() => Math.floor(Math.random() * INSPIRATIONAL.length));

  useEffect(() => {
    if (view.type === 'library') {
      setFactIndex(Math.floor(Math.random() * AI_FACTS.length));
      setInspIndex(Math.floor(Math.random() * INSPIRATIONAL.length));
    }
  }, [view.type]);

  const fact = AI_FACTS[factIndex];
  const inCourse = view.type === 'home' || view.type === 'module' || view.type === 'lesson' || view.type === 'quiz';

  return (
    <>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
      <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 transition-transform duration-200 flex flex-col`}>
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{inCourse ? 'SE Course' : 'AI Literacy'}</span>
          </div>
          <h1 className="text-lg font-bold leading-tight">{inCourse ? 'AI for Cybersecurity Sales Engineers' : 'Free Courses for Every Level'}</h1>
        </div>

        {/* Scrollable middle section */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {/* Top-level navigation — always visible */}
          <button onClick={() => { setView({ type: 'library' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'library' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
            <Library className="w-4 h-4" /> Course Library
          </button>

          {!inCourse && (
            <>
              {/* Course nav item */}
              <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Courses</div>
              <button
                onClick={() => { setView({ type: 'home' }); setOpen(false); }}
                className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition bg-emerald-600/15 border border-emerald-500/25 hover:bg-emerald-600/25"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-emerald-300 leading-tight">AI for Cybersecurity SEs</span>
                  <span className="text-xs text-slate-400">6 modules · Live now</span>
                </span>
              </button>

              {/* Curated reads label */}
              <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">While You're Here</div>

              {/* Inspirational nudge */}
              <div className="mx-1 mt-3 mb-1 rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Flame className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Think about it</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">{INSPIRATIONAL[inspIndex]}</p>
              </div>

              {/* Rotating AI fact */}
              <div className="mx-1 mt-2 mb-1 rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{fact.label}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{fact.text}</p>
              </div>

              {/* CTA */}
              <div className="mx-1 mt-2 mb-1 rounded-xl bg-blue-600/15 border border-blue-500/30 p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <Rocket className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Your move</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">Every expert you admire started exactly where you are. Pick a course and begin — right now.</p>
              </div>

              <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Cybersecurity Agentic AI</div>
              <button onClick={() => { setView({ type: 'agentic-ai' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'agentic-ai' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Bot className="w-4 h-4" /> Agentic AI
              </button>

              <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Other Sections</div>
              <button onClick={() => { setView({ type: 'playground' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'playground' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <FlaskConical className="w-4 h-4" /> AI Playgrounds
              </button>
              <button onClick={() => { setView({ type: 'glossary' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'glossary' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Search className="w-4 h-4" /> Glossary
              </button>
              <button onClick={() => { setView({ type: 'roadmap' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'roadmap' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Map className="w-4 h-4" /> Roadmap
              </button>
            </>
          )}

          {/* Agentic AI, Playgrounds, and Glossary always accessible when inside a course */}
          {inCourse && (
            <>
              <button onClick={() => { setView({ type: 'agentic-ai' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'agentic-ai' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Bot className="w-4 h-4" /> Agentic AI
              </button>
              <button onClick={() => { setView({ type: 'playground' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'playground' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <FlaskConical className="w-4 h-4" /> AI Playgrounds
              </button>
              <button onClick={() => { setView({ type: 'glossary' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'glossary' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <Search className="w-4 h-4" /> Glossary
              </button>
            </>
          )}

          {/* Course navigation — only when inside a course */}
          {inCourse && (
            <>
              <div className="pt-4 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Course</div>

              <button onClick={() => { setView({ type: 'home' }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <BookOpen className="w-4 h-4" /> Course Home
              </button>

              <div className="pt-2 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Modules</div>

              {modules.map((m, mi) => {
                const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
                const allDone = moduleLessonsCompleted === m.lessons.length;
                return (
                  <div key={m.id}>
                    <button onClick={() => { setView({ type: 'module', moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-start gap-2 ${view.type === 'module' && view.moduleId === m.id ? 'bg-slate-800' : 'hover:bg-slate-800/60'}`}>
                      <span className="w-5 flex items-center justify-center text-slate-400">{MODULE_ICONS[m.icon] ?? m.icon}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-medium truncate">{mi + 1}. {m.title}</span>
                        <span className="text-xs text-slate-400">{moduleLessonsCompleted}/{m.lessons.length} lessons {allDone && '✓'}</span>
                      </span>
                    </button>
                    {view.type === 'module' && view.moduleId === m.id && (
                      <div className="ml-3 pl-3 border-l border-slate-700 my-1 space-y-0.5">
                        {m.lessons.map((l, li) => (
                          <React.Fragment key={l.id}>
                            {l.sectionLabel && (
                              <div className="pt-2 pb-0.5 px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{l.sectionLabel}</div>
                            )}
                            <button onClick={() => { setView({ type: 'lesson', moduleId: m.id, lessonId: l.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'lesson' && view.lessonId === l.id ? 'bg-blue-600/20 text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                              {completedLessons[l.id] ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-3.5 h-3.5 flex-shrink-0" />}
                              <span className="truncate">{li + 1}. {l.title}</span>
                            </button>
                          </React.Fragment>
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
            </>
          )}
        </nav>

        <div className="p-3 border-t border-slate-800 text-xs text-slate-600">
          Content current through early 2026.
        </div>
      </aside>
    </>
  );
};
