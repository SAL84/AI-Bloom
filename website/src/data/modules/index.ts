import m1 from './m1';
import m2 from './m2';
import m3 from './m3';
import m4 from './m4';
import m5 from './m5';
import m6 from './m6';
import { GLOSSARY } from '../glossary';
import type { Course } from '../../types/course';

export const COURSE: Course = {
  title: 'AI for Cybersecurity Sales Engineers',
  subtitle: 'V2 — From foundational concepts to Google-aligned positioning, with architectural diagrams',
  modules: [m1, m2, m3, m4, m5, m6],
  glossary: GLOSSARY,
};
