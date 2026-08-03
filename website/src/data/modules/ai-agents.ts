import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import agM1 from './ag-m1';
import agM2 from './ag-m2';
import agM3 from './ag-m3';
import agM4 from './ag-m4';
import agM5 from './ag-m5';

const aiAgents: Course = {
  id: 'ai-agents',
  title: 'Agent Engineering: Building the Harness',
  subtitle: 'The scaffolding that turns a model into a working system — loops, context, tools, and the failures that only appear in production',
  glossary: CORE_GLOSSARY,
  modules: [agM1, agM2, agM3, agM4, agM5],
};

export default aiAgents;
