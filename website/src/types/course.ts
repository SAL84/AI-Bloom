export interface Slide {
  heading: string;
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
  diagram?: string;    // key in DIAGRAM_REGISTRY (React SVG component)
  inlineSvg?: string;  // raw SVG string rendered by InlineSVGDiagram
  inlineSvgId?: string;// short id for arrow marker namespacing
  slides: Slide[];
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

export interface Course {
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
  | { type: 'home' }
  | { type: 'module'; moduleId: string }
  | { type: 'lesson'; moduleId: string; lessonId: string }
  | { type: 'quiz'; moduleId: string }
  | { type: 'glossary' };
