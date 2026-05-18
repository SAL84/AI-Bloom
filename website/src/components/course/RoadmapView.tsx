import React from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import { COURSES } from '../../data/modules';
import type { CourseId, View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

type CourseStatus = 'live' | 'expanding' | 'partial' | 'field-notes';

const STATUS_LABEL: Record<CourseStatus, string> = {
  live: 'Live',
  expanding: 'Live · expanding',
  partial: 'Live · partial',
  'field-notes': 'Field notes',
};

const STATUS_COLOR: Record<CourseStatus, string> = {
  live: '#3f8a5e',
  expanding: '#3f8a5e',
  partial: '#b78320',
  'field-notes': '#5d5045',
};

interface CourseEntry {
  id: string;
  no: string;
  title: string;
  track: string;
  color: string;
  status: CourseStatus;
  note: string;
  gaps?: string[];
  view?: View;
}

const ENTRIES: CourseEntry[] = [
  {
    id: 'ai-kids', no: '01', title: 'AI for Kids', track: 'Foundations',
    color: '#d96a3a', status: 'live',
    note: 'Full course with career explorer and three in-browser games.',
    view: { type: 'home', courseId: 'ai-kids' },
  },
  {
    id: 'ai-essentials', no: '02', title: 'AI Essentials', track: 'Literacy',
    color: '#3f8a5e', status: 'live',
    note: 'Complete course with role-specific content tabs across all lessons.',
    view: { type: 'home', courseId: 'ai-essentials' },
  },
  {
    id: 'ai-deep-dive', no: '03', title: 'AI Deep Dive', track: 'Building',
    color: '#5a4ec0', status: 'expanding',
    note: 'Core modules live. Technical depth being added to slides.',
    gaps: ['Deeper technical slides for M3 / M4', 'Evals module in draft'],
    view: { type: 'home', courseId: 'ai-deep-dive' },
  },
  {
    id: 'ai-industry', no: '04', title: 'AI in Industry', track: 'Orientation',
    color: '#b78320', status: 'partial',
    note: 'Landscape map and category overview live. Per-product breakdowns pending.',
    gaps: ['Product breakdown cards for all 5 categories — Q3 2026'],
    view: { type: 'industry' },
  },
  {
    id: 'ai-cybersec-se', no: '05', title: 'AI for Cybersecurity Sales', track: 'Vertical',
    color: '#2c6db0', status: 'live',
    note: 'Three-module course for security SEs and AEs. Full lesson and quiz coverage.',
    view: { type: 'home', courseId: 'ai-cybersec-se' },
  },
  {
    id: 'agentic-ai', no: '¶', title: 'Agentic AI', track: 'Building · field notes',
    color: '#5d5045', status: 'field-notes',
    note: 'Live agent anatomy diagram and three interactive scenarios. Full course in development.',
    gaps: ['Structured module format', 'Hands-on exercises'],
    view: { type: 'agentic-ai' },
  },
];

const PLANNED_COURSES = [
  { no: '06', title: 'Evals & Red-teaming', track: 'Safety', color: '#c9421f', target: 'Q3 2026', note: 'How to know if your AI system works. And how to break it.' },
  { no: '07', title: 'AI for Healthcare', track: 'Vertical', color: '#2c6db0', target: 'Q4 2026', note: 'Clinical decision support, imaging AI, and the regulatory landscape.' },
  { no: '08', title: 'AI for Legal', track: 'Vertical', color: '#5a4ec0', target: 'TBD', note: 'Contracts, discovery, and the liability questions practitioners actually ask.' },
];

const PLANNED_FEATURES = [
  { title: 'Browser back / forward navigation', note: 'History API wiring so the browser back button works inside the portal.' },
  { title: 'Mobile layout', note: 'Responsive breakpoints for phones and tablets.' },
  { title: 'Course completion certificates', note: 'Printable PDF on completion — no account required.' },
  { title: 'Full-text search', note: 'Search across lessons, glossary, and course descriptions.' },
];

export const RoadmapView = ({ setView }: Props) => (
  <div className="bg-studio-bg text-studio-ink font-studio-sans min-h-screen">
    <StudioNavLite crumbs={['Roadmap']} setView={setView} />

    <div className="px-12 pt-12 pb-8 border-b border-studio-rule" style={{ background: '#5d5045' }}>
      <div className="font-studio-mono text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
        Portal status · Spring 2026
      </div>
      <h1 className="font-studio-display text-[52px] font-normal tracking-[-1px] text-white leading-[1.0] mb-3">
        Development Roadmap
      </h1>
      <p className="font-studio-serif italic text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
        What's on the shelf, what's in the kiln, and what's on the whiteboard. Updated as courses ship.
      </p>
    </div>

    {/* Live & in-progress courses */}
    <section className="px-12 pt-10 pb-14">
      <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-6">◆ Courses</div>

      <div className="border-t border-studio-rule">
        {ENTRIES.map((e, i) => {
          const course = COURSES[e.id as CourseId];
          const moduleCount = course?.modules.length;
          const lessonCount = course?.modules.reduce((s, m) => s + m.lessons.length, 0);
          const statusColor = STATUS_COLOR[e.status];
          const isLive = e.status !== 'field-notes';

          return (
            <div key={e.id} className={`py-7 grid grid-cols-[56px_1fr_220px] gap-8 items-start border-b border-studio-rule`}>
              <div className="flex justify-center pt-1">
                <div className="w-10 h-10 rounded-full grid place-items-center font-studio-serif italic text-[15px]"
                  style={{ background: e.color, color: '#fff' }}>
                  {e.no}
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <h2 className="font-studio-display text-[26px] font-normal tracking-[-0.3px] text-studio-ink leading-none m-0">{e.title}</h2>
                  <span className="font-studio-mono text-[9.5px] tracking-[1.2px] uppercase px-2 py-[2px] rounded-full border"
                    style={{ color: statusColor, borderColor: `${statusColor}55`, background: `${statusColor}10` }}>
                    {STATUS_LABEL[e.status]}
                  </span>
                  <span className="font-studio-serif italic text-[14px] text-studio-ink-mute">· {e.track}</span>
                </div>
                <p className="font-studio-sans text-[14px] text-studio-ink-dim leading-[1.6] m-0">{e.note}</p>
                {e.gaps && (
                  <ul className="mt-3 space-y-1 list-none p-0 m-0">
                    {e.gaps.map((g, gi) => (
                      <li key={gi} className="flex items-baseline gap-2 font-studio-sans text-[13px] text-studio-ink-mute">
                        <span className="font-studio-mono text-[10px]">○</span>{g}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="text-right pt-1">
                {moduleCount !== undefined && (
                  <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px] mb-3">
                    {moduleCount} modules · {lessonCount} lessons
                  </div>
                )}
                {e.view && (
                  <button onClick={() => setView(e.view!)}
                    className="font-studio-sans text-[12.5px] font-medium px-3.5 py-2 rounded-full border border-studio-rule text-studio-ink hover:border-studio-ink-dim transition-colors duration-150">
                    {isLive ? 'Open course →' : 'See field notes →'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* Planned courses */}
    <section className="px-12 pb-14">
      <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.6px] uppercase mb-6">○ In the kiln — courses</div>
      <div className="grid grid-cols-3 gap-5">
        {PLANNED_COURSES.map(p => (
          <div key={p.no} className="border border-dashed border-studio-rule rounded-[4px] p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-full grid place-items-center font-studio-serif italic text-[14px]"
                style={{ background: `${p.color}18`, color: p.color, border: `1px dashed ${p.color}55` }}>
                {p.no}
              </div>
              <span className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[1px]">{p.target}</span>
            </div>
            <div className="font-studio-display text-[22px] font-normal tracking-[-0.3px] text-studio-ink-dim leading-[1.1] mb-1">{p.title}</div>
            <div className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[0.6px] mb-2">{p.track}</div>
            <p className="font-studio-sans text-[13px] text-studio-ink-mute leading-[1.5] m-0">{p.note}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Platform features */}
    <section className="px-12 pb-16">
      <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.6px] uppercase mb-6">○ In the kiln — platform</div>
      <div className="bg-studio-paper border border-studio-rule rounded-[4px] divide-y divide-studio-rule-soft">
        {PLANNED_FEATURES.map((f, i) => (
          <div key={i} className="px-6 py-4 flex items-baseline gap-5">
            <span className="font-studio-mono text-[11px] text-studio-ink-mute flex-shrink-0">○</span>
            <span className="font-studio-sans text-[14px] text-studio-ink font-medium flex-shrink-0">{f.title}</span>
            <span className="font-studio-sans text-[13px] text-studio-ink-mute leading-[1.5]">— {f.note}</span>
          </div>
        ))}
      </div>
    </section>

    <StudioFooter />
  </div>
);
