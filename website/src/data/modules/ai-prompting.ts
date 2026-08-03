import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import prM1 from './pr-m1';
import prM2 from './pr-m2';
import prM3 from './pr-m3';
import prM4 from './pr-m4';
import prM5 from './pr-m5';

const aiPrompting: Course = {
  id: 'ai-prompting',
  title: 'Prompting: Getting What You Want From AI',
  subtitle: 'The one skill that improves every other thing you do with AI — what a prompt really is, how to build one, and what to do when the answer comes back wrong',
  glossary: CORE_GLOSSARY,
  modules: [prM1, prM2, prM3, prM4, prM5],
};

export default aiPrompting;
