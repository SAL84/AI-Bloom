import React, { useState, useEffect, useRef } from 'react';
import { COURSES, COURSE } from '../data/modules';
import { HomeView } from './course/HomeView';
import { ModuleView } from './course/ModuleView';
import { LessonView } from './course/LessonView';
import { QuizView } from './course/QuizView';
import { GlossaryView } from './course/GlossaryView';
import { RoadmapView } from './course/RoadmapView';
import { AIPlaygroundsView } from './course/AIPlaygroundsView';
import { AgenticAIView } from './course/AgenticAIView';
import { IndustryView } from './course/IndustryView';
import { CourseLibraryView } from './course/CourseLibraryView';
import { KidsGamesView } from './course/kids/KidsGamesView';
import { KidsCareersView } from './course/kids/KidsCareersView';
import type { View, Progress } from '../types/course';

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

export default function App() {
  const [view, setView] = useState<View>({ type: 'library' });
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
    scrollRef.current?.scrollTo({ top: 0 });
  }, [view]);

  const markComplete = (lessonId: string) => {
    setCompletedLessons(prev => ({ ...prev, [lessonId]: true }));
  };

  const recordQuizScore = (moduleId: string, score: number) => {
    setQuizScores(prev => ({ ...prev, [moduleId]: score }));
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
    <div ref={scrollRef} style={{ height: '100vh', overflowY: 'auto' }}>
      {view.type === 'library' && (
        <CourseLibraryView setView={setView} completedLessons={completedLessons} />
      )}
      {view.type === 'home' && (
        <HomeView setView={setView} course={activeCourse} completedLessons={completedLessons} quizScores={quizScores} />
      )}
      {view.type === 'module' && currentModule && (
        <ModuleView module={currentModule} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} completedLessons={completedLessons} quizScores={quizScores} />
      )}
      {view.type === 'lesson' && currentModule && currentLesson && (
        <LessonView key={currentLesson.id} module={currentModule} lesson={currentLesson} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} completedLessons={completedLessons} markComplete={markComplete} />
      )}
      {view.type === 'quiz' && currentModule && (
        <QuizView module={currentModule} modules={activeCourse.modules} courseId={activeCourseId} setView={setView} recordQuizScore={recordQuizScore} />
      )}
      {view.type === 'glossary' && <GlossaryView setView={setView} />}
      {view.type === 'roadmap' && <RoadmapView setView={setView} />}
      {view.type === 'playground' && <AIPlaygroundsView setView={setView} />}
      {view.type === 'agentic-ai' && <AgenticAIView setView={setView} />}
      {view.type === 'industry' && <IndustryView setView={setView} />}
      {view.type === 'kids-games' && <KidsGamesView setView={setView} />}
      {view.type === 'kids-careers' && <KidsCareersView setView={setView} />}
    </div>
  );
}
