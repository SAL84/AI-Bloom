export interface Slide {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface RoleContent {
  role: 'general' | 'security-se' | 'developer' | 'consultant';
  label: string;
  body: string;
  bullets?: string[];
}

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
}

export interface Lesson {
  id: string;
  title: string;
  diagram?: string;
  inlineSvg?: string;
  inlineSvgId?: string;
  sectionLabel?: string;
  slides: Slide[];
  roleContent?: RoleContent[];
}

export interface CourseModule {
  id: string;
  title: string;
  icon: string;
  summary: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface GlossaryEntry {
  term: string;
  def: string;
}

export type CourseId = 'ai-essentials' | 'ai-deep-dive' | 'ai-kids' | 'ai-cybersec-se';

export interface Course {
  id: CourseId;
  title: string;
  subtitle: string;
  modules: CourseModule[];
  glossary: GlossaryEntry[];
}

export interface Progress {
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
}

export type View =
  | { type: 'library' }
  | { type: 'home'; courseId?: CourseId }
  | { type: 'module'; courseId?: CourseId; moduleId: string }
  | { type: 'lesson'; courseId?: CourseId; moduleId: string; lessonId: string }
  | { type: 'quiz'; courseId?: CourseId; moduleId: string }
  | { type: 'glossary' }
  | { type: 'roadmap' }
  | { type: 'playground' }
  | { type: 'agentic-ai' }
  | { type: 'industry' };
