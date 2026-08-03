import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import secM1 from './sec-m1';
import secM2 from './sec-m2';
import secM3 from './sec-m3';
import secM4 from './sec-m4';

const aiSecure: Course = {
  id: 'ai-secure',
  title: 'Securing AI Systems',
  subtitle: 'Threat-model, test, harden and respond — defending AI and agentic systems in practice',
  glossary: CORE_GLOSSARY,
  modules: [secM1, secM2, secM3, secM4],
};

export default aiSecure;
