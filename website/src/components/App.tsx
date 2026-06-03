import React, { useState, useEffect, useCallback } from 'react';
import { COURSES, COURSE } from '../data/modules';
import { HomeView } from './course/HomeView';
import { ModuleView } from './course/ModuleView';
import { LessonView } from './course/LessonView';
import { QuizView } from './course/QuizView';
import { GlossaryView } from './course/GlossaryView';
import { RoadmapView } from './course/RoadmapView';
import { AIPlaygroundsView } from './course/AIPlaygroundsView';
import { IndustryView } from './course/IndustryView';
import { CourseLibraryView } from './course/CourseLibraryView';
import { KidsGamesView } from './course/kids/KidsGamesView';
import { KidsCareersView } from './course/kids/KidsCareersView';
import { ShelfView } from './course/ShelfView';
import type { View, Progress } from '../types/course';

const STORAGE_KEY = 'ai_cybersec_se_progress_v2';

const loadProgress = (): Progress => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || { completedLessons: {}, quizScores: {}, savedLessons: {} };
  } catch {
    return { completedLessons: {}, quizScores: {}, savedLessons: {} };
  }
};

const saveProgress = (progress: Progress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Save failed:', e);
  }
};

export default function App() {
  const [view, setViewRaw] = useState<View>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appView) {
      return window.history.state.appView as View;
    }
    return { type: 'library' };
  });
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [savedLessons, setSavedLessons] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  const setView = useCallback<React.Dispatch<React.SetStateAction<View>>>((next) => {
    setViewRaw((prev) => {
      const resolved = typeof next === 'function' ? (next as (p: View) => View)(prev) : next;
      if (typeof window !== 'undefined') {
        window.history.pushState({ appView: resolved }, '');
      }
      return resolved;
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.history.state?.appView) {
      window.history.replaceState({ appView: { type: 'library' } }, '');
    }
    const onPop = (e: PopStateEvent) => {
      const v: View | undefined = e.state?.appView;
      setViewRaw(v ?? { type: 'library' });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const p = loadProgress();
    setCompletedLessons(p.completedLessons || {});
    setQuizScores(p.quizScores || {});
    setSavedLessons(p.savedLessons || {});
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveProgress({ completedLessons, quizScores, savedLessons });
  }, [completedLessons, quizScores, savedLessons, loaded]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const markComplete = (lessonId: string) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
  };

  const recordQuizScore = (moduleId: string, score: number) => {
    setQuizScores(prev => ({ ...prev, [moduleId]: score }));
  };

  const toggleSaved = (lessonId: string) => {
    setSavedLessons(prev => {
      if (prev[lessonId]) {
        const { [lessonId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [lessonId]: true };
    });
  };

  const activeCourseId = ('courseId' in view && view.courseId) ? view.courseId : 'ai-cybersec-se';
  const activeCourse = COURSES[activeCourseId] ?? COURSE;

  const currentModule = ('moduleId' in view)
    ? activeCourse.modules.find(m => m.id === (view as { moduleId: string }).moduleId) ?? null
    : null;
  const currentLesson = view.type === 'lesson' && currentModule
    ? currentModule.lessons.find(l => l.id === (view as { lessonId: string }).lessonId) ?? null
    : null;

  return (
    <>
      {view.type === 'library' && (
        <CourseLibraryView setView={setView} completedLessons={completedLessons} />
      )}
      {view.type === 'home' && (
        <HomeView setView={setView} course={activeCourse} completedLessons={completedLessons} quizScores={quizScores} savedLessons={savedLessons} toggleSaved={toggleSaved} initialModuleId={view.moduleId} />
      )}
      {view.type === 'module' && currentModule && (
        <ModuleView module={currentModule} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} completedLessons={completedLessons} quizScores={quizScores} />
      )}
      {view.type === 'lesson' && currentModule && currentLesson && (
        <LessonView key={currentLesson.id} module={currentModule} lesson={currentLesson} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} completedLessons={completedLessons} markComplete={markComplete} savedLessons={savedLessons} toggleSaved={toggleSaved} />
      )}
      {view.type === 'quiz' && currentModule && (
        <QuizView module={currentModule} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} recordQuizScore={recordQuizScore} />
      )}
      {view.type === 'glossary' && <GlossaryView setView={setView} />}
      {view.type === 'roadmap' && <RoadmapView setView={setView} />}
      {view.type === 'shelf' && <ShelfView setView={setView} savedLessons={savedLessons} toggleSaved={toggleSaved} completedLessons={completedLessons} />}
      {view.type === 'playground' && <AIPlaygroundsView setView={setView} initialSection="playgrounds" />}
      {view.type === 'agentic-ai' && <AIPlaygroundsView setView={setView} initialSection="agentic" />}
      {view.type === 'industry' && <IndustryView setView={setView} />}
      {view.type === 'kids-games' && <KidsGamesView setView={setView} />}
      {view.type === 'kids-careers' && <KidsCareersView setView={setView} />}
    </>
  );
}
