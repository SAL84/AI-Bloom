import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import lgM1 from './lg-m1';
import lgM2 from './lg-m2';
import lgM3 from './lg-m3';
import lgM4 from './lg-m4';

const aiLegal: Course = {
  id: 'ai-legal',
  title: 'AI for Legal',
  subtitle: 'Contracts, discovery, research, and the professional-responsibility questions practitioners actually ask.',
  modules: [lgM1, lgM2, lgM3, lgM4],
  glossary: CORE_GLOSSARY,
};

export default aiLegal;
