import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import vcM1 from './vc-m1';
import vcM2 from './vc-m2';
import vcM3 from './vc-m3';
import vcM4 from './vc-m4';
import vcM5 from './vc-m5';

// Note: 'ai-vibecoding' is not yet a member of the CourseId union in
// src/types/course.ts. Registering this course (adding it to CourseId and to
// COURSES in modules/index.ts) is a separate, deliberate change to those files.
const aiVibecoding: Course = {
  id: 'ai-vibecoding',
  title: 'Vibecoding: Build Your Idea with AI',
  subtitle: 'Turn a business idea into a working prototype using AI — and know exactly what you have actually got',
  glossary: CORE_GLOSSARY,
  modules: [vcM1, vcM2, vcM3, vcM4, vcM5],
};

export default aiVibecoding;
