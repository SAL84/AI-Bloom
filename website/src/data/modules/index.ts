import m2 from './m2';
import m3 from './m3';
import m4 from './m4';
import m5 from './m5';
import m6 from './m6';
import { GLOSSARY } from '../glossary';
import aiEssentials from './ai-essentials';
import aiDeepDive from './ai-deep-dive';
import aiKids from './ai-kids';
import type { Course, CourseId } from '../../types/course';

const CYBERSEC_SE: Course = {
  id: 'ai-cybersec-se',
  title: 'AI for Cybersecurity Sales Engineers',
  subtitle: 'From foundational concepts to practical positioning, with architectural diagrams',
  modules: [m2, m3, m4, m5, m6],
  glossary: GLOSSARY,
};

export const COURSES: Record<CourseId, Course> = {
  'ai-cybersec-se': CYBERSEC_SE,
  'ai-essentials': aiEssentials,
  'ai-deep-dive': aiDeepDive,
  'ai-kids': aiKids,
};

export const COURSE = CYBERSEC_SE;
