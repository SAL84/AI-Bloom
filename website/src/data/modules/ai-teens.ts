import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import atM1 from './at-m1';
import atM2 from './at-m2';
import atM3 from './at-m3';
import atM4 from './at-m4';
import atM5 from './at-m5';

export const aiTeens: Course = {
  id: 'ai-teens',
  title: 'AI for School Students',
  subtitle: 'How AI actually works, how to use it well in school and life, and where it\'s taking your generation',
  glossary: CORE_GLOSSARY,
  modules: [atM1, atM2, atM3, atM4, atM5],
};

export default aiTeens;
