export interface SlideExercise {
  task: string;
  copyText?: string;
  selfCheck: string[];
}

export interface Slide {
  heading: string;
  body: string;
  bullets?: string[];
  exercise?: SlideExercise;
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

export type RoleKey = 'general' | 'security-se' | 'developer' | 'consultant';

export interface Lesson {
  id: string;
  title: string;
  diagram?: string;
  inlineSvg?: string;
  inlineSvgId?: string;
  imageUrl?: string;
  sectionLabel?: string;
  slides: Slide[];
  roleContent?: RoleContent[];
  roleDiagrams?: Partial<Record<RoleKey, string>>;
  extraDiagram?: string;
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

export type CourseId =
  | 'ai-essentials'
  | 'ai-deep-dive'
  | 'ai-kids'
  | 'ai-teens'
  | 'ai-cybersec-se'
  | 'ai-evals'
  | 'ai-healthcare'
  | 'ai-legal'
  | 'ai-secure'
  | 'ai-vibecoding'
  | 'ai-prompting'
  | 'ai-agents';

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
  savedLessons?: Record<string, boolean>;
  gameScores?: Record<string, number>;
}

export type View =
  | { type: 'library' }
  | { type: 'home'; courseId?: CourseId; moduleId?: string }
  | { type: 'module'; courseId?: CourseId; moduleId: string }
  | { type: 'lesson'; courseId?: CourseId; moduleId: string; lessonId: string }
  | { type: 'quiz'; courseId?: CourseId; moduleId: string }
  | { type: 'glossary'; courseId?: CourseId }
  | { type: 'roadmap' }
  | { type: 'shelf' }
  | { type: 'playground' }
  | { type: 'agentic-ai' }
  | { type: 'kids-games' }
  | { type: 'kids-careers' };
