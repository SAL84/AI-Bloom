import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { CourseId, View } from '../../types/course';
import { CORE_GLOSSARY, SECURITY_GLOSSARY, KIDS_GLOSSARY } from '../../data/glossary';
import { COURSES } from '../../data/modules';

interface GlossaryViewProps {
  setView: (view: View) => void;
  courseId?: CourseId;
}

// Kids get their own plain-language definitions; the security course gets the
// security terms on top of the core vocabulary; everyone else gets the core set.
function sectionsFor(courseId?: CourseId) {
  if (courseId === 'ai-kids') return [{ label: 'Words to know', entries: KIDS_GLOSSARY }];
  const core = { label: 'Core AI vocabulary', entries: CORE_GLOSSARY };
  if (courseId === 'ai-cybersec-se') {
    return [core, { label: 'Security & agent-platform terms', entries: SECURITY_GLOSSARY }];
  }
  if (courseId) return [core];
  return [core, { label: 'Security & agent-platform terms', entries: SECURITY_GLOSSARY }];
}

export const GlossaryView = ({ setView, courseId }: GlossaryViewProps) => {
  const [search, setSearch] = useState('');
  const match = (g: { term: string; def: string }) =>
    g.term.toLowerCase().includes(search.toLowerCase()) ||
    g.def.toLowerCase().includes(search.toLowerCase());
  const course = courseId ? COURSES[courseId] : undefined;
  const sections = sectionsFor(courseId)
    .map(s => ({ ...s, entries: s.entries.filter(match) }))
    .filter(s => s.entries.length > 0);

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={course ? [course.title, 'Glossary'] : ['Glossary']} setView={setView} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 lg:py-14">
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-3 lg:mb-4">◆ Reference</div>
        <h1 className="font-studio-display text-[36px] sm:text-[44px] lg:text-[52px] font-normal tracking-[-0.8px] lg:tracking-[-1.2px] text-studio-ink leading-[1.0] mb-3">
          Glossary
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] text-studio-ink-dim leading-[1.5] mb-8 lg:mb-10">
          {courseId === 'ai-kids'
            ? 'Every tricky word in this course, explained simply. Keep it open while you read.'
            : course
              ? `The terms used in ${course.title} — keep it open while you read.`
              : 'Every term used across the courses — keep it open while you read.'}
        </p>

        <div className="mb-8">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search terms or definitions…"
            className="w-full px-4 py-3 bg-studio-paper border border-studio-rule rounded-[4px] font-studio-sans text-[14px] text-studio-ink placeholder:text-studio-ink-mute focus:outline-none focus:border-studio-ink-dim transition-colors"
          />
        </div>

        {sections.length > 0 ? (
          <div>
            {sections.map(section => (
              <div key={section.label} className="mb-8">
                <div className="font-studio-mono text-[10.5px] text-studio-kids tracking-[1.6px] uppercase mb-2">{section.label}</div>
                <div className="divide-y divide-studio-rule border-t border-studio-rule">
                  {section.entries.map((g, i) => (
                    <div key={i} className="py-5">
                      <div className="font-studio-serif italic text-[20px] text-studio-ink mb-1.5 font-normal">{g.term}</div>
                      <p className="font-studio-sans text-[14px] text-studio-ink-dim leading-[1.65]">{g.def}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center font-studio-serif italic text-[18px] text-studio-ink-mute">
            No matches for "{search}"
          </div>
        )}
      </div>

      <StudioFooter />
    </div>
  );
};
