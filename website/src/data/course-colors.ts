import type { CourseId } from '../types/course';

/** Single source of truth for per-course accent colours. */
export const COURSE_COLORS: Record<CourseId, string> = {
  'ai-kids':        '#d96a3a',
  'ai-teens':       '#c4623a',
  'ai-essentials':  '#3f8a5e',
  'ai-deep-dive':   '#5a4ec0',
  'ai-cybersec-se': '#2c6db0',
  'ai-evals':       '#c9421f',
  'ai-healthcare':  '#0f8a7a',
  'ai-legal':       '#5a4ec0',
  'ai-secure':      '#8b2f5f',
  'ai-vibecoding':  '#d4711f',
  'ai-prompting':   '#1f7a8c',
  'ai-agents':      '#5d5045',
};

export const DEFAULT_COURSE_COLOR = '#5b5347';

export const courseColor = (id: string): string =>
  COURSE_COLORS[id as CourseId] ?? DEFAULT_COURSE_COLOR;
