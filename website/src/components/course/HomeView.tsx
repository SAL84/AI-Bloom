import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { Course, CourseId, CourseModule, View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
  course: Course;
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
  savedLessons: Record<string, boolean>;
  toggleSaved: (lessonId: string) => void;
}

type ModStatus = 'done' | 'now' | 'next'; // used by getStatuses

const META: Record<CourseId, {
  color: string; no: string; kicker: string;
  level: string; duration: string;
  outcomes: string[];
  audience: string[];
  quote: string;
  related: Array<{ no: string; title: string; sub: string; color: string; view: View }>;
}> = {
  'ai-kids': {
    color: '#d96a3a', no: '01', kicker: 'Catalog №01 · Foundations track',
    level: 'Beginner', duration: '2.5h',
    outcomes: ['How AI learns — and why it sometimes gets things completely wrong', "What AI agents are and why they're such a big deal", 'Jobs in the AI world — which one might be yours', 'How to stay safe: deepfakes, scams, and what never to share'],
    audience: ['◆ Curious kids ages 8–14 reading with a grown-up', '◆ Parents who want to talk about AI without the fear', '◇ Not for: people who want to build AI systems'],
    quote: '"The best time to get curious about AI is right now. This course is designed so a ten-year-old and a parent can read it together."',
    related: [
      { no: '02', title: 'AI Essentials', sub: 'The grown-up version', color: '#3f8a5e', view: { type: 'home', courseId: 'ai-essentials' } },
      { no: '§', title: 'AI Playgrounds', sub: 'Try things, break things', color: '#3f8a5e', view: { type: 'playground' } },
      { no: '05', title: 'Cybersec Sales', sub: 'When the kid grows up', color: '#2c6db0', view: { type: 'home', courseId: 'ai-cybersec-se' } },
    ],
  },
  'ai-essentials': {
    color: '#3f8a5e', no: '02', kicker: 'Catalog №02 · AI Literacy track',
    level: 'Beginner', duration: '2h',
    outcomes: ['A working mental model of how language models actually work', 'Vocabulary that survives the next product launch cycle', "A pragmatic prompting toolkit that isn't cargo-culted", 'The confidence to call BS when you smell BS'],
    audience: ["◆ Anyone who's tired of sounding lost in AI conversations", '◆ PMs, designers, marketers, lawyers — "non-technical" isn\'t a barrier', '◇ Not for: people building production LLM systems (try Deep Dive)'],
    quote: '"If you only read one course in this library, read this one. Everything else assumes you\'ve read this one."',
    related: [
      { no: '03', title: 'AI Deep Dive', sub: "When Essentials isn't enough", color: '#5a4ec0', view: { type: 'home', courseId: 'ai-deep-dive' } },
      { no: '04', title: 'AI in Industry', sub: 'Now you can read the field map', color: '#b78320', view: { type: 'industry' } },
      { no: '¶', title: 'Agentic AI', sub: 'For builders ready for the loop', color: '#5d5045', view: { type: 'agentic-ai' } },
    ],
  },
  'ai-deep-dive': {
    color: '#5a4ec0', no: '03', kicker: 'Catalog №03 · Building track',
    level: 'Advanced', duration: '3.5h',
    outcomes: ['Transformer internals — attention, embeddings, the full stack', 'Fine-tuning vs. prompting vs. RAG — when to use which', 'Evals: how to know if your system actually works', "The production failure modes that don't make it onto slides"],
    audience: ['◆ Engineers and technical leads who want the full picture', '◆ Product managers and architects building on top of AI', '◇ Not for: people who found AI Essentials enough'],
    quote: '"The course for people who noticed that AI Essentials glossed over the interesting bits."',
    related: [
      { no: '02', title: 'AI Essentials', sub: "Start here if you haven't", color: '#3f8a5e', view: { type: 'home', courseId: 'ai-essentials' } },
      { no: '04', title: 'AI in Industry', sub: 'Where this goes in the real world', color: '#b78320', view: { type: 'industry' } },
      { no: '¶', title: 'Agentic AI', sub: 'The next logical step', color: '#5d5045', view: { type: 'agentic-ai' } },
    ],
  },
  'ai-cybersec-se': {
    color: '#2c6db0', no: '05', kicker: 'Catalog №05 · Vertical track',
    level: 'Intermediate', duration: '2h',
    outcomes: ['Explain AI/ML/LLM/agent concepts in customer language', 'Whiteboard the AI stack — MCP, A2A, and agent identity', 'Understand how major security vendors are embedding AI', 'Run discovery, demos, and objection handling that set you apart'],
    audience: ['◆ Cybersecurity SEs and AEs selling into security teams', '◆ Security architects evaluating AI-powered products', '◇ Not for: people without a security sales context'],
    quote: '"The only course that treats security sales engineers as the technical people they are."',
    related: [
      { no: '02', title: 'AI Essentials', sub: 'Prerequisite reading', color: '#3f8a5e', view: { type: 'home', courseId: 'ai-essentials' } },
      { no: '03', title: 'AI Deep Dive', sub: 'When customers go deeper', color: '#5a4ec0', view: { type: 'home', courseId: 'ai-deep-dive' } },
      { no: '04', title: 'AI in Industry', sub: 'The competitive landscape', color: '#b78320', view: { type: 'industry' } },
    ],
  },
};

function getStatuses(modules: CourseModule[], done: Record<string, boolean>): ModStatus[] {
  const doneFlags = modules.map(m => m.lessons.every(l => done[l.id]));
  const nowIdx = doneFlags.findIndex(d => !d);
  return modules.map((_, i) => {
    if (doneFlags[i]) return 'done';
    if (i === nowIdx) return 'now';
    return 'next';
  });
}

// ── Syllabus section ─────────────────────────────────────────────────────────
interface SyllabusProps {
  modules: CourseModule[];
  statuses: ModStatus[];
  nowIdx: number;
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
  course: Course;
  meta: { color: string };
  setView: (v: View) => void;
  savedLessons: Record<string, boolean>;
  toggleSaved: (lessonId: string) => void;
}

const SyllabusSection = ({ modules, statuses, nowIdx, completedLessons, quizScores, course, meta, setView, savedLessons, toggleSaved }: SyllabusProps) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(nowIdx >= 0 ? nowIdx : 0);
  const safeIdx = Math.min(Math.max(selectedIdx, 0), modules.length - 1);
  const selected = modules[safeIdx];
  const selectedStatus = statuses[safeIdx];
  const selectedDone = selected.lessons.filter(l => completedLessons[l.id]).length;
  const firstIncomplete = selected.lessons.find(l => !completedLessons[l.id]) ?? selected.lessons[0];
  const ctaLabel = selectedStatus === 'done'
    ? 'Re-read first lesson →'
    : selectedDone > 0
      ? `Resume · ${firstIncomplete.title} →`
      : 'Start this module →';

  return (
    <section className="px-4 sm:px-6 lg:px-12 pt-6 pb-10 lg:pb-14">
      <div className="max-w-[1280px] mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5 lg:mb-6">
          <h2 className="font-studio-display text-[28px] sm:text-[32px] lg:text-[36px] text-studio-ink m-0 font-normal tracking-[-0.5px] lg:tracking-[-0.6px]">
            The {modules.length === 1 ? 'module' : `${modules.length} modules`}
          </h2>
          <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1px]">Pick a module · open any lesson</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 lg:gap-8 items-start">
          {/* ── Left rail: module list (horizontal scroll on mobile) ── */}
          <aside className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 pb-2 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-thin">
            {modules.map((m, i) => {
              const status = statuses[i];
              const isDone = status === 'done';
              const isNow = status === 'now';
              const isSelected = i === safeIdx;
              const lessonDone = m.lessons.filter(l => completedLessons[l.id]).length;
              const progressPct = m.lessons.length > 0 ? (lessonDone / m.lessons.length) * 100 : 0;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedIdx(i)}
                  className="text-left px-4 py-3.5 rounded-[4px] border bg-studio-paper hover:border-studio-ink-dim transition-colors duration-100 flex-shrink-0 w-[260px] lg:w-full snap-start"
                  style={{
                    borderColor: isSelected ? meta.color : isNow ? `${meta.color}66` : 'var(--tw-border-opacity-studio-rule, #e8dfc8)',
                    background: isSelected ? `${meta.color}0d` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full grid place-items-center font-studio-serif italic text-[13px] flex-shrink-0"
                      style={{
                        background: isDone || isNow || isSelected ? meta.color : 'transparent',
                        border: `1px solid ${isDone || isNow || isSelected ? meta.color : '#d9cfb8'}`,
                        color: isDone || isNow || isSelected ? '#fff' : '#8c8273',
                      }}>
                      {isDone ? '✓' : i + 1}
                    </span>
                    <span className={`flex-1 min-w-0 font-studio-display text-[16px] font-normal tracking-[-0.2px] leading-[1.15] truncate ${status === 'next' && !isSelected ? 'text-studio-ink-dim' : 'text-studio-ink'}`}>
                      {m.title}
                    </span>
                    {isNow && (
                      <span className="font-studio-mono text-[9px] text-studio-bg tracking-[1.2px] uppercase px-1.5 py-[2px] rounded-[2px] flex-shrink-0" style={{ background: meta.color }}>Now</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-2 pl-10">
                    <div className="flex-1 h-[3px] bg-studio-rule-soft rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-200" style={{ width: `${progressPct}%`, background: meta.color }} />
                    </div>
                    <span className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[0.4px] flex-shrink-0">
                      {lessonDone}/{m.lessons.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </aside>

          {/* ── Right pane: selected module detail ── */}
          <div
            className="bg-studio-paper border rounded-[4px] overflow-hidden"
            style={{ borderColor: selectedStatus === 'now' ? meta.color : '#e8dfc8' }}
          >
            {/* Module header */}
            <div className="px-5 sm:px-6 lg:px-7 py-5 lg:py-6 border-b border-studio-rule" style={selectedStatus === 'now' ? { background: `${meta.color}0d` } : undefined}>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: meta.color }}>
                  Module {safeIdx + 1} of {modules.length}
                </span>
                {selectedStatus === 'now' && (
                  <span className="font-studio-mono text-[9.5px] text-studio-bg tracking-[1.2px] uppercase px-[7px] py-[2px] rounded-[2px]" style={{ background: meta.color }}>Up next</span>
                )}
                {selectedStatus === 'done' && (
                  <span className="font-studio-mono text-[10px] uppercase tracking-[1px]" style={{ color: meta.color }}>Complete</span>
                )}
              </div>
              <h3 className="font-studio-display text-[22px] sm:text-[26px] lg:text-[28px] font-normal tracking-[-0.4px] text-studio-ink mt-2 leading-[1.1]">
                {selected.title}
              </h3>
              <p className="font-studio-sans text-[13.5px] lg:text-[14px] text-studio-ink-dim leading-[1.55] mt-2 max-w-[640px]">
                {selected.summary}
              </p>
              <div className="flex items-center gap-4 mt-4 flex-wrap">
                <button
                  onClick={() => setView({ type: 'lesson', courseId: course.id, moduleId: selected.id, lessonId: firstIncomplete.id })}
                  className="font-studio-sans text-[13.5px] font-medium text-studio-bg py-[10px] px-5 rounded-full hover:opacity-90 transition-opacity duration-150"
                  style={{ background: meta.color }}
                >
                  {ctaLabel}
                </button>
                <span className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
                  {selectedDone}/{selected.lessons.length} lessons read
                </span>
              </div>
            </div>

            {/* Lesson list */}
            <div>
              {selected.lessons.map((l, li) => {
                const done = !!completedLessons[l.id];
                const saved = !!savedLessons[l.id];
                return (
                  <React.Fragment key={l.id}>
                    {l.sectionLabel && (
                      <div className="py-2 px-7 font-studio-mono text-[10px] text-studio-ink-mute tracking-[1.4px] uppercase border-b border-dashed border-studio-rule-soft" style={{ background: 'rgba(245,239,228,0.5)' }}>
                        {l.sectionLabel}
                      </div>
                    )}
                    <div className="flex items-stretch border-b border-studio-rule-soft hover:bg-studio-bg transition-colors duration-100 group">
                      <button
                        onClick={() => setView({ type: 'lesson', courseId: course.id, moduleId: selected.id, lessonId: l.id })}
                        className="flex-1 min-w-0 text-left px-5 sm:px-6 lg:px-7 py-3.5 flex items-baseline gap-3 sm:gap-5"
                      >
                        <span className="font-studio-mono text-[11px] text-studio-ink-mute w-7 flex-shrink-0">{String(li + 1).padStart(2, '0')}</span>
                        <span className="flex-1 font-studio-sans text-[14px] text-studio-ink-dim group-hover:text-studio-ink leading-[1.3]">
                          {l.title}
                          {l.diagram && <span className="ml-2 font-studio-mono text-[10px] text-studio-ink-mute">· diagram</span>}
                        </span>
                        <span className="font-studio-mono text-[10.5px] tracking-[0.5px] flex-shrink-0">
                          {done
                            ? <span style={{ color: meta.color }}>✓ done</span>
                            : <span className="text-studio-ink-mute group-hover:text-studio-ink transition-colors">read →</span>}
                        </span>
                      </button>
                      <button
                        onClick={() => toggleSaved(l.id)}
                        aria-label={saved ? 'Remove from shelf' : 'Save to shelf'}
                        title={saved ? 'Remove from shelf' : 'Save to shelf'}
                        className="flex-shrink-0 px-3 sm:px-4 grid place-items-center font-studio-mono text-[14px] transition-colors duration-100"
                        style={{ color: saved ? meta.color : undefined }}
                      >
                        <span className={saved ? '' : 'text-studio-ink-mute hover:text-studio-ink'}>
                          {saved ? '★' : '☆'}
                        </span>
                      </button>
                    </div>
                  </React.Fragment>
                );
              })}

              {/* Quiz row */}
              <button
                onClick={() => setView({ type: 'quiz', courseId: course.id, moduleId: selected.id })}
                className="w-full text-left px-5 sm:px-6 lg:px-7 py-3.5 flex items-baseline gap-3 sm:gap-5 hover:bg-studio-bg transition-colors duration-100 group border-t border-dashed border-studio-rule"
              >
                <span className="font-studio-mono text-[11px] text-studio-ink-mute w-7 flex-shrink-0">✦</span>
                <span className="flex-1 font-studio-serif italic text-[14px] text-studio-ink-dim group-hover:text-studio-ink">Module quiz · {selected.quiz.length} questions</span>
                {quizScores[selected.id] !== undefined
                  ? <span className="font-studio-mono text-[10.5px] flex-shrink-0" style={{ color: meta.color }}>{quizScores[selected.id]}/{selected.quiz.length}</span>
                  : <span className="font-studio-mono text-[10.5px] text-studio-ink-mute group-hover:text-studio-ink transition-colors flex-shrink-0">take →</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────

export const HomeView = ({ setView, course, completedLessons, quizScores, savedLessons, toggleSaved }: Props) => {
  const meta = META[course.id];
  const { modules } = course;
  const statuses = getStatuses(modules, completedLessons);
  const nowIdx = statuses.findIndex(s => s === 'now');

  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = modules.reduce((s, m) => s + m.lessons.filter(l => completedLessons[l.id]).length, 0);
  const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const resumeModule = nowIdx >= 0 ? modules[nowIdx] : null;
  const resumeLesson = resumeModule?.lessons.find(l => !completedLessons[l.id]);
  const resumeView: View | undefined = resumeModule && resumeLesson
    ? { type: 'lesson', courseId: course.id, moduleId: resumeModule.id, lessonId: resumeLesson.id }
    : undefined;

  const crumbs = ['Catalog', course.id === 'ai-kids' ? 'Kids' : course.id === 'ai-cybersec-se' ? 'Industry' : 'AI Literacy', course.title];

  return (
    <div className="bg-studio-bg text-studio-ink font-studio-sans min-h-screen">
      <StudioNavLite crumbs={crumbs} crumbViews={[{ type: 'library' }, undefined, undefined]} setView={setView} resumeView={resumeView} />

      {/* Hero */}
      <header className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-14 pb-6 lg:pb-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 lg:items-end">
        <div>
          <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3 lg:mb-[18px]" style={{ color: meta.color }}>{meta.kicker}</div>
          <h1 className="font-studio-display text-[52px] sm:text-[72px] lg:text-[96px] leading-[0.92] tracking-[-1.2px] sm:tracking-[-1.8px] lg:tracking-[-2.6px] text-studio-ink m-0 font-normal">
            {course.title.split(' ').length > 2
              ? <>{course.title.split(' ').slice(0, -1).join(' ')}{' '}<span className="font-studio-serif italic font-normal" style={{ color: meta.color }}>{course.title.split(' ').slice(-1)}</span></>
              : <>{course.title.split(' ')[0]}{' '}<span className="font-studio-serif italic font-normal" style={{ color: meta.color }}>{course.title.split(' ').slice(1).join(' ')}</span></>
            }
          </h1>
          <p className="font-studio-serif italic text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.45] text-studio-ink-dim mt-4 lg:mt-[22px] max-w-[560px] font-normal">{course.subtitle}</p>
          <div className="flex gap-3 lg:gap-[18px] mt-5 lg:mt-[26px] flex-wrap">
            {[[String(modules.length), 'modules'], [meta.duration, 'reading time'], [meta.level, 'level']].map(([k, v], i, arr) => (
              <div key={i} className={`flex flex-col gap-0.5 pr-3 lg:pr-[18px] ${i < arr.length - 1 ? 'border-r border-studio-rule' : ''}`}>
                <span className="font-studio-serif text-[18px] lg:text-[22px] text-studio-ink font-normal leading-none">{k}</span>
                <span className="font-studio-mono text-[10px] lg:text-[10.5px] text-studio-ink-mute tracking-[1px] uppercase">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-[26px]">
          <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase" style={{ color: meta.color }}>
            Your card · {progress > 0 ? 'in progress' : 'not started'}
          </div>
          <div className="font-studio-display text-[32px] text-studio-ink leading-[1.05] mt-1.5 tracking-[-0.5px]">
            {progress > 0 ? `${progress}% through` : 'Ready to start'}
          </div>
          <div className="h-1.5 bg-studio-rule-soft rounded-full overflow-hidden mt-4">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: meta.color }} />
          </div>
          <div className="flex justify-between font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.8px] mt-2">
            <span>{completedCount} of {totalLessons} lessons</span>
            {progress > 0 && <span>~{Math.round((totalLessons - completedCount) * 5)} min left</span>}
          </div>
          {resumeView ? (
            <button onClick={() => setView(resumeView)}
              className="w-full mt-[18px] font-studio-sans text-[13.5px] font-medium text-studio-bg py-[11px] px-4 rounded-[4px] hover:opacity-90 transition-opacity duration-150"
              style={{ background: meta.color }}>
              {progress > 0 ? `Resume ${resumeModule!.title} →` : `Start ${resumeModule!.title} →`}
            </button>
          ) : (
            <div className="mt-[18px] font-studio-sans text-[13px] text-studio-ink-dim text-center py-3">
              ✓ Course complete
            </div>
          )}
          <div className="flex justify-between mt-3 font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.6px]">
            <span>Library №{meta.no}</span>
            <button onClick={() => setView({ type: 'glossary' })} className="text-studio-ink hover:underline">↗ Glossary</button>
          </div>
        </aside>
      </header>

      {/* Modules: syllabus left-rail + selected-module detail */}
      <SyllabusSection
        modules={modules}
        statuses={statuses}
        nowIdx={nowIdx}
        completedLessons={completedLessons}
        quizScores={quizScores}
        course={course}
        meta={meta}
        setView={setView}
        savedLessons={savedLessons}
        toggleSaved={toggleSaved}
      />

      {/* Three sidebars */}
      <section className="px-4 sm:px-6 lg:px-12 pb-10 lg:pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] gap-4 lg:gap-6">
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-7">
          <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-3.5" style={{ color: meta.color }}>What you'll walk away with</div>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {meta.outcomes.map((t, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr] items-baseline gap-2">
                <span className="font-studio-serif italic text-[18px] font-normal" style={{ color: meta.color }}>§{i + 1}</span>
                <span className="font-studio-serif text-[16px] text-studio-ink leading-[1.4]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-7">
          <div className="font-studio-mono text-[11px] tracking-[1.4px] uppercase mb-3.5" style={{ color: meta.color }}>Who this is for</div>
          <div className="flex flex-col gap-3.5">
            {meta.audience.map((t, i) => (
              <div key={i} className="grid grid-cols-[20px_1fr] gap-2 items-baseline">
                <span className="font-studio-mono text-[12px]" style={{ color: t.startsWith('◆') ? meta.color : '#8c8273' }}>{t[0]}</span>
                <span className={`font-studio-sans text-[13.5px] leading-[1.5] ${t.startsWith('◇') ? 'text-studio-ink-mute' : 'text-studio-ink'}`}>{t.slice(2)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-studio-ink rounded-[4px] p-5 lg:p-7 md:col-span-2 lg:col-span-1">
          <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.4px] uppercase mb-3.5">From the librarians</div>
          <p className="font-studio-serif italic text-[18px] leading-[1.45] m-0" style={{ color: 'rgba(245,239,228,0.92)' }}>{meta.quote}</p>
          <div className="font-studio-mono text-[10.5px] tracking-[1px] uppercase mt-[18px]" style={{ color: 'rgba(245,239,228,0.55)' }}>— editorial board, Issue 06</div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 sm:px-6 lg:px-12 pb-12 lg:pb-16">
        <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-5">
          <h2 className="font-studio-display text-[24px] sm:text-[26px] lg:text-[28px] text-studio-ink m-0 font-normal tracking-[-0.4px]">Read after this</h2>
          <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1px]">Curated by the editors</div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {meta.related.map(it => (
            <button key={it.no} onClick={() => setView(it.view)}
              className="flex items-center gap-4 lg:gap-[18px] p-4 lg:p-[22px] bg-studio-paper border border-studio-rule rounded-[4px] text-left hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
              <div className="w-14 h-[76px] rounded-[2px] flex flex-col justify-between p-2 text-white" style={{ background: it.color }}>
                <span className="font-studio-mono text-[9px] tracking-[1px]">№{it.no}</span>
                <span className="font-studio-serif italic text-[13px] leading-none">a</span>
              </div>
              <div className="flex-1">
                <div className="font-studio-display text-[22px] text-studio-ink leading-[1.05] font-normal tracking-[-0.3px]">{it.title}</div>
                <div className="font-studio-serif italic text-[14px] text-studio-ink-dim mt-1">{it.sub}</div>
              </div>
              <span className="font-studio-mono text-[12px] text-studio-ink-mute">→</span>
            </button>
          ))}
        </div>
      </section>

      <StudioFooter />
    </div>
  );
};
