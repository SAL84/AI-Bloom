import React from 'react';
import {
  Home, CheckCircle2, Circle, Award, Search, Sparkles, Map,
  Zap, Brain, Layers, Shield, ShieldAlert,
  Building2, FlaskConical, Bot, Star, Cpu, Baby, GraduationCap, Briefcase, ChevronDown,
  Gamepad2, Rocket
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

const UNIFIED = 'bg-blue-600/15 border-blue-500/25 hover:bg-blue-600/25';

const COURSE_NAV: Array<{ id: CourseId; label: string; sub: string; icon: React.ReactNode }> = [
  { id: 'ai-essentials', label: 'AI Essentials', sub: 'Foundations · 4 modules', icon: <Star className="w-4 h-4 text-blue-400 flex-shrink-0" /> },
  { id: 'ai-deep-dive', label: 'AI Deep Dive', sub: 'Advanced · 4 modules', icon: <Cpu className="w-4 h-4 text-blue-400 flex-shrink-0" /> },
];

export const Sidebar = ({ open, setOpen, view, setView, modules, activeCourseId, completedLessons, totalLessons, completedCount }: SidebarProps) => {
  const courseViewCourseId = (['home', 'module', 'lesson', 'quiz'] as string[]).includes(view.type) && 'courseId' in view
    ? (view as { courseId: CourseId }).courseId
    : null;

  const [expandedCourseId, setExpandedCourseId] = React.useState<CourseId | null>(courseViewCourseId);

  // Auto-expand when navigating into a course from outside the sidebar
  React.useEffect(() => {
    if (courseViewCourseId) setExpandedCourseId(courseViewCourseId);
  }, [courseViewCourseId]);

  const toggleCourse = (courseId: CourseId) => {
    if (expandedCourseId === courseId) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(courseId);
      setView({ type: 'home', courseId });
      setOpen(false);
    }
  };

  const isCourseActive = (courseId: CourseId) =>
    activeCourseId === courseId && (['home', 'module', 'lesson', 'quiz'] as string[]).includes(view.type);

  const navBtn = (label: string, icon: React.ReactNode, active: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition ${active ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'}`}
    >
      {icon} {label}
    </button>
  );

  const ModuleList = ({ courseId }: { courseId: CourseId }) => {
    if (expandedCourseId !== courseId) return null;
    return (
      <div className="mt-1 ml-2 pl-3 border-l border-slate-700 space-y-0.5 pb-1">
        {modules.map((m, mi) => {
          const done = m.lessons.filter(l => completedLessons[l.id]).length;
          const allDone = done === m.lessons.length;
          const modActive = (view.type === 'module' || view.type === 'lesson' || view.type === 'quiz') && 'moduleId' in view && view.moduleId === m.id;
          return (
            <div key={m.id}>
              <button
                onClick={() => { setView({ type: 'module', courseId, moduleId: m.id }); setOpen(false); }}
                className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition flex items-start gap-2 ${modActive ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}
              >
                <span className="w-4 flex-shrink-0 flex items-center justify-center mt-0.5 text-slate-500">
                  {MODULE_ICONS[m.icon] ?? m.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-medium truncate">{mi + 1}. {m.title}</span>
                  <span className="text-slate-500">{done}/{m.lessons.length} {allDone && '✓'}</span>
                </span>
              </button>
              {modActive && (
                <div className="ml-3 pl-3 border-l border-slate-700/60 my-1 space-y-0.5">
                  {m.lessons.map((l, li) => (
                    <React.Fragment key={l.id}>
                      {l.sectionLabel && (
                        <div className="pt-2 pb-0.5 px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{l.sectionLabel}</div>
                      )}
                      <button
                        onClick={() => { setView({ type: 'lesson', courseId, moduleId: m.id, lessonId: l.id }); setOpen(false); }}
                        className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'lesson' && 'lessonId' in view && view.lessonId === l.id ? 'bg-blue-600/20 text-blue-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}
                      >
                        {completedLessons[l.id] ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Circle className="w-3.5 h-3.5 flex-shrink-0" />}
                        <span className="truncate">{li + 1}. {l.title}</span>
                      </button>
                    </React.Fragment>
                  ))}
                  <button
                    onClick={() => { setView({ type: 'quiz', courseId, moduleId: m.id }); setOpen(false); }}
                    className={`w-full text-left px-2 py-1.5 rounded text-xs flex items-center gap-2 transition ${view.type === 'quiz' && 'moduleId' in view && view.moduleId === m.id ? 'bg-amber-600/20 text-amber-300' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}
                  >
                    <Award className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Module Quiz</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

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
          {/* Home — always at top */}
          {navBtn('Home', <Home className="w-4 h-4" />, view.type === 'library', () => { setView({ type: 'library' }); setOpen(false); })}

          {/* ── AI FOR KIDS ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">For Kids</div>
          <button
            onClick={() => toggleCourse('ai-kids')}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              isCourseActive('ai-kids')
                ? 'bg-orange-600 text-white border-transparent'
                : 'bg-orange-600/15 border-orange-500/25 hover:bg-orange-600/25'
            }`}
          >
            <Baby className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-orange-300 leading-tight">AI for Kids</span>
              <span className="text-xs text-slate-400">Foundations + career game</span>
            </span>
            <ChevronDown className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${expandedCourseId === 'ai-kids' ? 'rotate-180' : ''}`} />
          </button>
          <ModuleList courseId="ai-kids" />
          {expandedCourseId === 'ai-kids' && (
            <div className="mt-1 ml-2 pl-3 border-l border-slate-700 space-y-0.5 pb-1">
              <button
                onClick={() => { setView({ type: 'kids-games' }); setOpen(false); }}
                className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition flex items-center gap-2 ${view.type === 'kids-games' ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}
              >
                <Gamepad2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium">AI Games</span>
              </button>
              <button
                onClick={() => { setView({ type: 'kids-careers' }); setOpen(false); }}
                className={`w-full text-left px-2 py-1.5 rounded-lg text-xs transition flex items-center gap-2 ${view.type === 'kids-careers' ? 'bg-slate-800 text-slate-100' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'}`}
              >
                <Rocket className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="font-medium">Career Explorer</span>
              </button>
            </div>
          )}

          {/* ── AI LITERACY ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">AI Literacy</div>
          {COURSE_NAV.map(c => (
            <React.Fragment key={c.id}>
              <button
                onClick={() => toggleCourse(c.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
                  isCourseActive(c.id)
                    ? 'bg-blue-600 text-white border-transparent'
                    : `${UNIFIED} border`
                }`}
              >
                {c.icon}
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold leading-tight">{c.label}</span>
                  <span className="text-xs text-slate-400">{c.sub}</span>
                </span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${expandedCourseId === c.id ? 'rotate-180' : ''}`} />
              </button>
              <ModuleList courseId={c.id} />
            </React.Fragment>
          ))}
          <button
            onClick={() => { setView({ type: 'industry' }); setOpen(false); }}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              view.type === 'industry'
                ? 'bg-blue-600 text-white border-transparent'
                : `${UNIFIED} border`
            }`}
          >
            <Briefcase className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold leading-tight">AI in the Industry</span>
              <span className="text-xs text-slate-400">Products · providers · use cases</span>
            </span>
          </button>

          {/* ── AI FOR CYBERSECURITY ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">AI for Cybersecurity</div>
          <button
            onClick={() => toggleCourse('ai-cybersec-se')}
            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-2.5 text-sm transition border ${
              isCourseActive('ai-cybersec-se')
                ? 'bg-blue-600 text-white border-transparent'
                : 'bg-sky-600/15 border-sky-500/25 hover:bg-sky-600/25'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block font-semibold text-sky-300 leading-tight">AI for Cybersecurity Sales</span>
              <span className="text-xs text-slate-400">6 modules · Live now</span>
            </span>
            <ChevronDown className={`w-4 h-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${expandedCourseId === 'ai-cybersec-se' ? 'rotate-180' : ''}`} />
          </button>
          <ModuleList courseId="ai-cybersec-se" />

          {/* ── EXPLORE ── */}
          <div className="pt-3 pb-1 px-3 text-xs uppercase tracking-wider text-slate-500 font-semibold">Explore</div>
          {navBtn('Agentic AI', <Bot className="w-4 h-4" />, view.type === 'agentic-ai', () => { setView({ type: 'agentic-ai' }); setOpen(false); })}
          {navBtn('AI Playgrounds', <FlaskConical className="w-4 h-4" />, view.type === 'playground', () => { setView({ type: 'playground' }); setOpen(false); })}
          {navBtn('Glossary', <Search className="w-4 h-4" />, view.type === 'glossary', () => { setView({ type: 'glossary' }); setOpen(false); })}
          {navBtn('Roadmap', <Map className="w-4 h-4" />, view.type === 'roadmap', () => { setView({ type: 'roadmap' }); setOpen(false); })}
        </nav>

        <div className="p-3 border-t border-slate-800 text-xs text-slate-600">
          Content current through early 2026.
        </div>
      </aside>
    </>
  );
};
