import type { Course } from '../../types/course';
import { CORE_GLOSSARY } from '../glossary';
import rpM1 from './rp-m1';
import rpM2 from './rp-m2';
import rpM3 from './rp-m3';
import rpM4 from './rp-m4';
import rpM5 from './rp-m5';

const aiRealProduct: Course = {
  id: 'ai-real-product',
  title: 'From Prototype to Real Product',
  subtitle: 'The honest second half of building with AI — data, accounts, shipping, cost, support and the second year, walked on one real example with the effort counted at every stage.',
  glossary: CORE_GLOSSARY,
  modules: [rpM1, rpM2, rpM3, rpM4, rpM5],
};

export default aiRealProduct;
