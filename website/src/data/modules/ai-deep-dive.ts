import type { Course } from '../../types/course';
import adM1 from './ad-m1';
import adM2 from './ad-m2';
import adM3 from './ad-m3';
import adM4 from './ad-m4';
import { CORE_GLOSSARY } from '../glossary';

const aiDeepDive: Course = {
  id: 'ai-deep-dive',
  title: 'AI Deep Dive',
  subtitle: 'Practitioner-level AI — architecture, training, agent design, and the frontier for those who want the full picture',
  glossary: CORE_GLOSSARY,
  modules: [adM1, adM2, adM3, adM4],
};

export default aiDeepDive;
