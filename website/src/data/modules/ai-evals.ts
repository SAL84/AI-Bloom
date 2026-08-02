import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import evM1 from './ev-m1';
import evM2 from './ev-m2';
import evM3 from './ev-m3';
import evM4 from './ev-m4';

const aiEvals: Course = {
  id: 'ai-evals',
  title: 'Evals & Red-teaming',
  subtitle: 'How to know your AI system works — and how to break it before someone else does',
  glossary: CORE_GLOSSARY,
  modules: [evM1, evM2, evM3, evM4],
};

export default aiEvals;
