import React, { useState, useEffect, useRef } from 'react';
import { Menu, Library, BookOpen } from 'lucide-react';
import { COURSE } from '../data/modules';
import { Sidebar } from './course/Sidebar';
import { HomeView } from './course/HomeView';
import { ModuleView } from './course/ModuleView';
import { LessonView } from './course/LessonView';
import { QuizView } from './course/QuizView';
import { GlossaryView } from './course/GlossaryView';
import { RoadmapView } from './course/RoadmapView';
import { AIPlaygroundsView } from './course/AIPlaygroundsView';
import { CourseLibraryView } from './course/CourseLibraryView';
import { ThemeToggle } from './course/ThemeToggle';
import type { Theme } from './course/ThemeToggle';
import type { View, Progress } from '../types/course';

// ============================================================
// STORAGE — standard localStorage (fixes window.storage bug)
// ============================================================

const STORAGE_KEY = 'ai_cybersec_se_progress_v2';

const loadProgress = (): Progress => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || { completedLessons: {}, quizScores: {} };
  } catch {
    return { completedLessons: {}, quizScores: {} };
  }
};

const saveProgress = (progress: Progress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Save failed:', e);
  }
};

// ============================================================
// APP
// ============================================================

export default function App() {
  const [view, setView] = useState<View>({ type: 'library' });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setThemeState] = useState<Theme>(() => (typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme) : null) || 'light');
  const mainScrollRef = useRef<HTMLDivElement>(null);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  };
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setCompletedLessons(p.completedLessons || {});
    setQuizScores(p.quizScores || {});
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveProgress({ completedLessons, quizScores });
  }, [completedLessons, quizScores, loaded]);

  useEffect(() => {
    mainScrollRef.current?.scrollTo({ top: 0 });
  }, [view]);

  const markComplete = (lessonId: string) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
  };

  const recordQuizScore = (moduleId: string, score: number) => {
    setQuizScores(prev => ({ ...prev, [moduleId]: score }));
  };

  const inCourse = view.type === 'home' || view.type === 'module' || view.type === 'lesson' || view.type === 'quiz';
  const totalLessons = COURSE.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;

  const currentModule = view.type !== 'home' && view.type !== 'glossary' && 'moduleId' in view
    ? COURSE.modules.find(m => m.id === view.moduleId) ?? null
    : null;
  const currentLesson = view.type === 'lesson' && currentModule
    ? currentModule.lessons.find(l => l.id === view.lessonId) ?? null
    : null;

  const outerBg = theme === 'dark' ? '#0f172a' : theme === 'midnight' ? '#080f1c' : '';

  return (
    <div
      className="flex min-h-screen bg-slate-50 text-slate-900"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', ...(outerBg ? { backgroundColor: outerBg } : {}) }}
      data-theme={theme === 'light' ? undefined : theme}
    >
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        view={view}
        setView={setView}
        modules={COURSE.modules}
        completedLessons={completedLessons}
        totalLessons={totalLessons}
        completedCount={completedCount}
      />

      <main className="flex-1 min-w-0 flex flex-col relative">
        {/* Top-right controls — always visible */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
          <button
            onClick={() => setView({ type: 'library' })}
            title="Course Library"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white border border-slate-200 shadow-sm transition text-slate-500 hover:text-slate-900"
          >
            <Library className="w-4 h-4" />
          </button>
          {inCourse && (
            <button
              onClick={() => setView({ type: 'home' })}
              title="Course Home"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white border border-slate-200 shadow-sm transition text-slate-500 hover:text-slate-900"
            >
              <BookOpen className="w-4 h-4" />
            </button>
          )}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold">AI for Cybersec SEs</span>
          <div className="w-7" />
        </header>

        <div ref={mainScrollRef} className="flex-1 overflow-y-auto">
          {view.type === 'library' && (
            <CourseLibraryView setView={setView} />
          )}
          {view.type === 'home' && (
            <HomeView setView={setView} modules={COURSE.modules} completedLessons={completedLessons} />
          )}
          {view.type === 'module' && currentModule && (
            <ModuleView module={currentModule} modules={COURSE.modules} setView={setView} completedLessons={completedLessons} quizScores={quizScores} />
          )}
          {view.type === 'lesson' && currentModule && currentLesson && (
            <LessonView key={currentLesson.id} module={currentModule} lesson={currentLesson} modules={COURSE.modules} setView={setView} completedLessons={completedLessons} markComplete={markComplete} />
          )}
          {view.type === 'quiz' && currentModule && (
            <QuizView module={currentModule} modules={COURSE.modules} setView={setView} recordQuizScore={recordQuizScore} />
          )}
          {view.type === 'glossary' && (
            <GlossaryView setView={setView} />
          )}
          {view.type === 'roadmap' && (
            <RoadmapView setView={setView} />
          )}
          {view.type === 'playground' && (
            <AIPlaygroundsView setView={setView} />
          )}

          <footer className="mt-auto border-t border-slate-200 px-6 py-4 flex items-center justify-between text-xs text-slate-400">
            <span>Built by <span className="font-semibold text-slate-500">Salih A</span></span>
            <span className="italic text-right max-w-xs leading-relaxed">
              Built free. Because understanding AI<br />
              shouldn't depend on who you work for.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
