import React from 'react';
import {
  BookOpen, CheckCircle2, Circle, Award, Search, Sparkles, Map,
  Library, Zap, Brain, Layers, Shield, ShieldAlert,
  Building2, FlaskConical, Bot, Star, Cpu, Baby, GraduationCap, Briefcase
} from 'lucide-react';
import type { CourseModule, CourseId, View } from '../../types/course';

const MODULE_ICONS: Record<string, React.ReactNode> = {
  zap: <Zap className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  layers: <Layers className="w-4 h-4" />,
  shield: <Shield className="w-4 h-4" />,
  'shield-alert': <ShieldAlert className="w-4 h-4" />,
  'building-2': <Building2 className="w-4 h-4" />,
};

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  view: View;
  setView: (view: View) => void;
  modules: CourseModule[];
  activeCourseId: CourseId;
  completedLessons: Record<string, boolean>;
  totalLessons: number;
  completedCount: number;
}


const COURSE_NAV: Array<{ id: CourseId; label: string; sub: string; icon: React.ReactNode; color: string }> = [
  { id: 'ai-essentials', label: 'AI Essentials', sub: 'Foundations · 4 modules', icon: <Star className="w-4 h-4 text-emerald-400 flex-shrink-0" />, color: 'bg-emerald-600/15 border-emerald-500/25 hover:bg-emerald-600/25' },
  { id: 'ai-deep-dive', label: 'AI Deep Dive', sub: 'Advanced · 4 modules', icon: <Cpu className="w-4 h-4 text-purple-400 flex-shrink-0" />, color: 'bg-purple-600/15 border-purple-500/25 hover:bg-purple-600/25' },
];

export const Sidebar = ({ open, setOpen, view, setView, modules, activeCourseId, completedLessons, totalLessons, completedCount }: SidebarProps) => {
  const inCourse = view.type === 'home' || view.type === 'module' || view.type === 'lesson' || view.type === 'quiz';

  const navBtn = (label: string, icon: React.ReactNode, active: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${active ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}
    >
      {icon} {label}
    </button>
  );

  return (
    <>
      {open && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setOpen(false)} />}
      <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-100 transition-transform duration-200 flex flex-col`}>
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">AI Learning Hub</span>
          </div>
          <h1 className="text-lg font-bold leading-tight">Free Courses for Every Level</h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {/* Library — always visible */}
          {navBtn('Course Library', <Library className="w-4 h-4" />, view.type === 'library', () => { setView({ type: 'library' }); setOpen(false); })}

          {/* ── AI FOR KIDS ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">For Kids</div>
          <button
            onClick={() => { setView({ type: 'home', courseId: 'ai-kids' }); setOpen(false); }}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              activeCourseId === 'ai-kids' && inCourse
                ? 'bg-orange-600 text-white border-transparent'
                : 'bg-orange-600/15 border-orange-500/25 hover:bg-orange-600/25'
            }`}
          >
            <Baby className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-orange-300 leading-tight">AI for Kids</span>
              <span className="text-xs text-slate-400">Foundations + career game</span>
            </span>
          </button>

          {/* ── AI LITERACY ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">AI Literacy</div>
          {COURSE_NAV.map(c => (
            <button
              key={c.id}
              onClick={() => { setView({ type: 'home', courseId: c.id }); setOpen(false); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
                activeCourseId === c.id && inCourse
                  ? 'bg-blue-600 text-white border-transparent'
                  : `${c.color} border`
              }`}
            >
              {c.icon}
              <span className="flex-1 min-w-0">
                <span className="block font-semibold leading-tight">{c.label}</span>
                <span className="text-xs text-slate-400">{c.sub}</span>
              </span>
            </button>
          ))}
          <button
            onClick={() => { setView({ type: 'industry' }); setOpen(false); }}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              view.type === 'industry'
                ? 'bg-blue-600 text-white border-transparent'
                : 'bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50'
            }`}
          >
            <Briefcase className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold leading-tight">AI in the Industry</span>
              <span className="text-xs text-slate-400">Products · providers · use cases</span>
            </span>
          </button>

          {/* ── AI FOR CYBERSECURITY ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">AI for Cybersecurity</div>
          <button
            onClick={() => { setView({ type: 'home', courseId: 'ai-cybersec-se' }); setOpen(false); }}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              activeCourseId === 'ai-cybersec-se' && inCourse
                ? 'bg-blue-600 text-white border-transparent'
                : 'bg-sky-600/15 border-sky-500/25 hover:bg-sky-600/25'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-sky-300 leading-tight">AI for Cybersecurity Sales</span>
              <span className="text-xs text-slate-400">6 modules · Live now</span>
            </span>
          </button>

          {/* ── EXPLORE ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Explore</div>
          {navBtn('Agentic AI', <Bot className="w-4 h-4" />, view.type === 'agentic-ai', () => { setView({ type: 'agentic-ai' }); setOpen(false); })}
          {navBtn('AI Playgrounds', <FlaskConical className="w-4 h-4" />, view.type === 'playground', () => { setView({ type: 'playground' }); setOpen(false); })}
          {navBtn('Glossary', <Search className="w-4 h-4" />, view.type === 'glossary', () => { setView({ type: 'glossary' }); setOpen(false); })}
          {navBtn('Roadmap', <Map className="w-4 h-4" />, view.type === 'roadmap', () => { setView({ type: 'roadmap' }); setOpen(false); })}

          {/* ── In-course module nav ── */}
          {inCourse && (
            <>
              <div className="pt-4 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Course</div>
              <button onClick={() => { setView({ type: 'home', courseId: activeCourseId }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${view.type === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}>
                <BookOpen className="w-4 h-4" /> Course Home
              </button>
              <div className="pt-2 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Modules</div>
              {modules.map((m, mi) => {
                const moduleLessonsCompleted = m.lessons.filter(l => completedLessons[l.id]).length;
                const allDone = moduleLessonsCompleted === m.lessons.length;
                return (
                  <div key={m.id}>
                    <button onClick={() => { setView({ type: 'module', courseId: activeCourseId, moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition flex items-start gap-2 ${view.type === 'module' && view.moduleId === m.id ? 'bg-slate-800' : 'hover:bg-slate-800/60'}`}>
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
                            <button onClick={() => { setView({ type: 'lesson', courseId: activeCourseId, moduleId: m.id, lessonId: l.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'lesson' && view.lessonId === l.id ? 'bg-blue-600/20 text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
                              {completedLessons[l.id] ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-3.5 h-3.5 flex-shrink-0" />}
                              <span className="truncate">{li + 1}. {l.title}</span>
                            </button>
                          </React.Fragment>
                        ))}
                        <button onClick={() => { setView({ type: 'quiz', courseId: activeCourseId, moduleId: m.id }); setOpen(false); }} className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'quiz' && view.moduleId === m.id ? 'bg-amber-600/20 text-amber-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}>
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
