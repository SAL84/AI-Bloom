import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import fnM1 from './fn-m1';
import fnM2 from './fn-m2';
import fnM3 from './fn-m3';
import fnM4 from './fn-m4';

const aiFinance: Course = {
  id: 'ai-finance',
  title: 'AI for Finance',
  subtitle: 'Where AI sits in financial services, the model risk and explainability duties it lands inside, the failure modes that cost money, and what has to be true before it touches a customer.',
  modules: [fnM1, fnM2, fnM3, fnM4],
  glossary: CORE_GLOSSARY,
};

export default aiFinance;
