import type { ReactNode } from 'react';

export type EditorEntry = {
  preTitle: string;
  kickerTitle: string;
  text: string;
  meta: string[];
};

export type MarginaliaEntry = {
  factoid: ReactNode;
  expansion: string;
  tags: string[];
};

export const EDITORS_DESK: EditorEntry[] = [
  {
    preTitle: 'A short, honest argument for',
    kickerTitle: 'doing the homework.',
    text: "Curiosity about how things work has always been the unfair advantage. AI is just the latest frontier — and the syllabus is shorter than you'd think.",
    meta: ['4 MIN READ', 'Issue 06', 'By the librarians'],
  },
  {
    preTitle: 'Why we built this library',
    kickerTitle: 'in the open.',
    text: "Knowledge that costs $300 a month is knowledge that mostly serves the people who can afford $300 a month. We thought we'd try something different.",
    meta: ['3 MIN READ', 'Issue 04', 'By the librarians'],
  },
  {
    preTitle: 'Using AI is easy.',
    kickerTitle: 'Understanding it is the unfair advantage.',
    text: "Anyone can prompt a chatbot. The people who'll do well in the next decade are the ones who know why it answers the way it does — and when not to trust it.",
    meta: ['5 MIN READ', 'Issue 02', 'By the librarians'],
  },
];

export const MARGINALIA: MarginaliaEntry[] = [
  {
    factoid: (
      <>
        The word "robot" comes from the Czech <span className="not-italic">robota</span> — forced labor.
      </>
    ),
    expansion: "Coined in a 1920 play. We've worried about this for over a century. So far the robots are still doing the paperwork.",
    tags: ['Origins', '1920', 'Karel Čapek'],
  },
  {
    factoid: (
      <>
        The first chatbot, <span className="not-italic">ELIZA</span>, was built in 1966 — to parody therapy.
      </>
    ),
    expansion: "Joseph Weizenbaum wrote it as a satire of how machines fake understanding. People started treating it like a real therapist anyway. He spent the rest of his career warning us.",
    tags: ['ELIZA', '1966', 'MIT'],
  },
  {
    factoid: (
      <>
        <span className="not-italic">GPT</span> stands for Generative Pre-trained Transformer.
      </>
    ),
    expansion: "Each word does real work. Generative: it produces, doesn't classify. Pre-trained: the heavy lifting happened before you arrived. Transformer: the 2017 paper that changed everything.",
    tags: ['Acronyms', 'Transformer', '2017'],
  },
];
