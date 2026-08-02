import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import hcM1 from './hc-m1';
import hcM2 from './hc-m2';
import hcM3 from './hc-m3';
import hcM4 from './hc-m4';

const aiHealthcare: Course = {
  id: 'ai-healthcare',
  title: 'AI for Healthcare',
  subtitle: 'Where AI is actually used in clinical settings, what the evidence supports, and the regulatory reality — for clinicians, builders, and administrators evaluating it.',
  modules: [hcM1, hcM2, hcM3, hcM4],
  glossary: CORE_GLOSSARY,
};

export default aiHealthcare;
