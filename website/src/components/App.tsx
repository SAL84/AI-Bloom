import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { COURSE } from '../data/modules';
import { Sidebar } from './course/Sidebar';
import { HomeView } from './course/HomeView';
import { ModuleView } from './course/ModuleView';
import { LessonView } from './course/LessonView';
import { QuizView } from './course/QuizView';
import { GlossaryView } from './course/GlossaryView';
import { RoadmapView } from './course/RoadmapView';
import { CourseLibraryView } from './course/CourseLibraryView';
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
  const mainScrollRef = useRef<HTMLDivElement>(null);
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

  const totalLessons = COURSE.modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;

  const currentModule = view.type !== 'home' && view.type !== 'glossary' && 'moduleId' in view
    ? COURSE.modules.find(m => m.id === view.moduleId) ?? null
    : null;
  const currentLesson = view.type === 'lesson' && currentModule
    ? currentModule.lessons.find(l => l.id === view.lessonId) ?? null
    : null;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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

      <main className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(true)} className="p-1.5 rounded hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold">AI for Cybersec SEs · V2</span>
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
        </div>
      </main>
    </div>
  );
}
