import m4 from './m4';
import m5 from './m5';
import m6 from './m6';
import m7 from './m7';
import { GLOSSARY } from '../glossary';
import aiEssentials from './ai-essentials';
import aiDeepDive from './ai-deep-dive';
import aiKids from './ai-kids';
import aiTeens from './ai-teens';
import aiEvals from './ai-evals';
import aiHealthcare from './ai-healthcare';
import aiLegal from './ai-legal';
import aiSecure from './ai-secure';
import aiVibecoding from './ai-vibecoding';
import aiPrompting from './ai-prompting';
import type { Course, CourseId } from '../../types/course';

const CYBERSEC_SE: Course = {
  id: 'ai-cybersec-se',
  title: 'AI for Cybersecurity Sales Engineers',
  subtitle: 'From foundational concepts to practical positioning, with architectural diagrams',
  modules: [m4, m5, m6, m7],
  glossary: GLOSSARY,
};

export const COURSES: Record<CourseId, Course> = {
  'ai-cybersec-se': CYBERSEC_SE,
  'ai-essentials': aiEssentials,
  'ai-deep-dive': aiDeepDive,
  'ai-kids': aiKids,
  'ai-teens': aiTeens,
  'ai-evals': aiEvals,
  'ai-healthcare': aiHealthcare,
  'ai-legal': aiLegal,
  'ai-secure': aiSecure,
  'ai-vibecoding': aiVibecoding,
  'ai-prompting': aiPrompting,
};

export const COURSE = CYBERSEC_SE;
