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
    id: 'ai-teens', no: '02', title: 'AI for School Students', track: 'Foundations',
    color: '#c4623a', status: 'live',
    note: 'Five modules for ages 14-18 — how AI works, using it well in school, deepfakes, data, and careers.',
    view: { type: 'home', courseId: 'ai-teens' },
  },
  {
    id: 'ai-essentials', no: '03', title: 'AI Essentials', track: 'Literacy',
    color: '#3f8a5e', status: 'live',
    note: 'Complete course — foundations, frontiers, LLMs, the agent stack, ethics, and what is next. Role-specific tabs on key lessons.',
    view: { type: 'home', courseId: 'ai-essentials' },
  },
  {
    id: 'ai-deep-dive', no: '04', title: 'AI Deep Dive', track: 'Building',
    color: '#5a4ec0', status: 'expanding',
    note: 'All four modules at practitioner depth — architecture, training, agents, evals, and the frontier.',
    gaps: ['Diagrams for the newer lessons', 'Hands-on exercises'],
    view: { type: 'home', courseId: 'ai-deep-dive' },
  },
  {
    id: 'ai-industry', no: '05', title: 'AI in Industry', track: 'Orientation',
    color: '#b78320', status: 'partial',
    note: 'Landscape map and category overview live. Per-product breakdowns pending.',
    gaps: ['Product breakdown cards for all 5 categories — Q3 2026'],
    view: { type: 'industry' },
  },
  {
    id: 'ai-cybersec-se', no: '06', title: 'AI for Cybersecurity Sales', track: 'Vertical',
    color: '#2c6db0', status: 'live',
    note: 'Four-module course for security SEs and AEs — the stack, the adversarial side, the vendors, and how to sell it. Full quiz coverage.',
    view: { type: 'home', courseId: 'ai-cybersec-se' },
  },
  {
    id: 'ai-evals', no: '07', title: 'Evals & Red-teaming', track: 'Safety',
    color: '#c9421f', status: 'live',
    note: 'Four modules on eval sets, LLM-as-judge, regression suites, and adversarial testing of systems you own.',
    view: { type: 'home', courseId: 'ai-evals' },
  },
  {
    id: 'ai-healthcare', no: '08', title: 'AI for Healthcare', track: 'Vertical',
    color: '#0f8a7a', status: 'live',
    note: 'Orientation, not clinical guidance — where AI sits in care, reading the evidence, bias, and regulation.',
    gaps: ['Awaiting review by a practising clinician'],
    view: { type: 'home', courseId: 'ai-healthcare' },
  },
  {
    id: 'ai-legal', no: '09', title: 'AI for Legal', track: 'Vertical',
    color: '#5a4ec0', status: 'live',
    note: 'Not legal advice — task suitability, contracts and discovery, the citation problem, and professional duties.',
    gaps: ['Awaiting review by a practising lawyer', 'Jurisdiction-specific detail kept deliberately general'],
    view: { type: 'home', courseId: 'ai-legal' },
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
  { no: '10', title: 'AI for Educators', track: 'Vertical', color: '#3f8a5e', target: 'TBD', note: 'Assessment design, academic honesty, and using AI to teach rather than to grade.' },
  { no: '11', title: 'AI for Finance', track: 'Vertical', color: '#b78320', target: 'TBD', note: 'Risk models, fraud detection, and what regulators expect you to be able to explain.' },
];

const PLANNED_FEATURES = [
  { title: 'Course completion certificates', note: 'Printable PDF on completion — no account required.' },
  { title: 'Dark mode', note: 'Light, dark, and midnight theme toggle in the nav. Toggle component built; needs dark variants for the Studio palette.' },
  { title: 'Search everywhere', note: 'Search is live on the library page (courses, lessons, glossary) — next: reachable from every view, with a keyboard shortcut and deep links into glossary terms.' },
  { title: 'Full-text lesson search', note: 'Today search covers titles and glossary terms; slide bodies are next.' },
];

export const RoadmapView = ({ setView }: Props) => (
  <div className="bg-studio-bg text-studio-ink font-studio-sans min-h-screen">
    <StudioNavLite crumbs={['Roadmap']} setView={setView} />

    <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule" style={{ background: '#5d5045' }}>
      <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
        Portal status · Spring 2026
      </div>
      <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-white leading-[1.0] mb-3">
        Development Roadmap
      </h1>
      <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
        What's on the shelf, what's in the kiln, and what's on the whiteboard. Updated as courses ship.
      </p>
    </div>

    {/* Live & in-progress courses */}
    <section className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-10 pb-10 lg:pb-14">
      <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-6">◆ Courses</div>

      <div className="border-t border-studio-rule">
        {ENTRIES.map((e, i) => {
          const course = COURSES[e.id as CourseId];
          const moduleCount = course?.modules.length;
          const lessonCount = course?.modules.reduce((s, m) => s + m.lessons.length, 0);
          const statusColor = STATUS_COLOR[e.status];
          const isLive = e.status !== 'field-notes';

          return (
            <div key={e.id} className={`py-6 lg:py-7 grid grid-cols-[44px_1fr] lg:grid-cols-[56px_1fr_220px] gap-4 lg:gap-8 items-start border-b border-studio-rule`}>
              <div className="flex justify-center pt-1">
                <div className="w-9 lg:w-10 h-9 lg:h-10 rounded-full grid place-items-center font-studio-serif italic text-[14px] lg:text-[15px]"
                  style={{ background: e.color, color: '#fff' }}>
                  {e.no}
                </div>
              </div>

              <div className="lg:col-span-1 col-span-1 min-w-0">
                <div className="flex items-baseline gap-2 lg:gap-3 mb-2 flex-wrap">
                  <h2 className="font-studio-display text-[20px] sm:text-[22px] lg:text-[26px] font-normal tracking-[-0.3px] text-studio-ink leading-tight m-0">{e.title}</h2>
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

              <div className="lg:text-right pt-1 col-span-2 lg:col-span-1 lg:col-start-3 flex flex-wrap items-center lg:items-end lg:flex-col gap-3 lg:gap-0">
                {moduleCount !== undefined && (
                  <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px] lg:mb-3">
                    {moduleCount} modules · {lessonCount} lessons
                  </div>
                )}
                {e.view && (
                  <button onClick={() => setView(e.view!)}
                    className="font-studio-sans text-[12.5px] font-medium px-3.5 py-2 rounded-full border border-studio-rule text-studio-ink hover:border-studio-ink-dim transition-colors duration-150 whitespace-nowrap">
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
    <section className="px-4 sm:px-6 lg:px-12 pb-10 lg:pb-14">
      <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1.6px] uppercase mb-5 lg:mb-6">○ In the kiln — courses</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
    <section className="px-4 sm:px-6 lg:px-12 pb-12 lg:pb-16">
      <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1.6px] uppercase mb-5 lg:mb-6">○ In the kiln — platform</div>
      <div className="bg-studio-paper border border-studio-rule rounded-[4px] divide-y divide-studio-rule-soft">
        {PLANNED_FEATURES.map((f, i) => (
          <div key={i} className="px-4 lg:px-6 py-4 flex flex-wrap items-baseline gap-x-3 lg:gap-x-5 gap-y-1">
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
