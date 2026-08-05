import m4 from './m4';
import m5 from './m5';
import m7 from './m7';
import m8 from './m8';
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
import aiAgents from './ai-agents';
import type { Course, CourseId } from '../../types/course';

const CYBERSEC_SE: Course = {
  id: 'ai-cybersec-se',
  title: 'AI for Cybersecurity',
  subtitle: 'Defending with AI, and defending the AI you deploy — for security teams on both sides of the shift',
  modules: [m4, m5, m8, m7],
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
  'ai-agents': aiAgents,
};

export const COURSE = CYBERSEC_SE;
