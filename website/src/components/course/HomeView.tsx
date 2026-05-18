import React from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { Course, CourseId, CourseModule, View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
  course: Course;
  completedLessons: Record<string, boolean>;
  quizScores: Record<string, number>;
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

// ── Main ──────────────────────────────────────────────────────────────────────

export const HomeView = ({ setView, course, completedLessons, quizScores }: Props) => {
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
      <header className="px-12 pt-14 pb-8 grid grid-cols-[1.4fr_1fr] gap-14 items-end">
        <div>
          <div className="font-studio-mono text-[11px] tracking-[1.6px] uppercase mb-[18px]" style={{ color: meta.color }}>{meta.kicker}</div>
          <h1 className="font-studio-display text-[96px] leading-[0.92] tracking-[-2.6px] text-studio-ink m-0 font-normal">
            {course.title.split(' ').length > 2
              ? <>{course.title.split(' ').slice(0, -1).join(' ')}{' '}<span className="font-studio-serif italic font-normal" style={{ color: meta.color }}>{course.title.split(' ').slice(-1)}</span></>
              : <>{course.title.split(' ')[0]}{' '}<span className="font-studio-serif italic font-normal" style={{ color: meta.color }}>{course.title.split(' ').slice(1).join(' ')}</span></>
            }
          </h1>
          <p className="font-studio-serif italic text-[22px] leading-[1.45] text-studio-ink-dim mt-[22px] max-w-[560px] font-normal">{course.subtitle}</p>
          <div className="flex gap-[18px] mt-[26px] flex-wrap">
            {[[String(modules.length), 'modules'], [meta.duration, 'reading time'], [meta.level, 'level']].map(([k, v], i, arr) => (
              <div key={i} className={`flex flex-col gap-0.5 pr-[18px] ${i < arr.length - 1 ? 'border-r border-studio-rule' : ''}`}>
                <span className="font-studio-serif text-[22px] text-studio-ink font-normal leading-none">{k}</span>
                <span className="font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[1px] uppercase">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="bg-studio-paper border border-studio-rule rounded-[4px] p-[26px]">
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

      {/* Modules with inline lessons */}
      <section className="px-12 pt-6 pb-14">
        <header className="flex items-baseline justify-between mb-5">
          <h2 className="font-studio-display text-[36px] text-studio-ink m-0 font-normal tracking-[-0.6px]">
            The {modules.length === 1 ? 'module' : `${modules.length} modules`}
          </h2>
          <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">Read in order · skip whenever</div>
        </header>

        <div className="flex flex-col gap-5">
          {modules.map((m, i) => {
            const status = statuses[i];
            const isDone = status === 'done';
            const isNow = status === 'now';
            const lessonDoneCount = m.lessons.filter(l => completedLessons[l.id]).length;
            return (
              <div key={m.id}
                className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden"
                style={isNow ? { borderColor: meta.color } : undefined}
              >
                {/* Module header */}
                <div className="px-6 py-5 flex items-center gap-5 border-b border-studio-rule"
                  style={isNow ? { background: `${meta.color}0d` } : undefined}>
                  <span className="w-9 h-9 rounded-full grid place-items-center font-studio-serif italic text-[16px] font-normal flex-shrink-0"
                    style={{ background: isDone || isNow ? meta.color : 'transparent', border: `1px solid ${isDone || isNow ? meta.color : '#d9cfb8'}`, color: isDone || isNow ? '#fff' : '#8c8273' }}>
                    {isDone ? '✓' : i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className={`font-studio-display text-[22px] font-normal tracking-[-0.3px] leading-none ${status === 'next' ? 'text-studio-ink-dim' : 'text-studio-ink'}`}>{m.title}</span>
                      {isNow && <span className="font-studio-mono text-[9.5px] text-studio-bg tracking-[1.2px] uppercase px-[7px] py-[2px] rounded-[2px]" style={{ background: meta.color }}>Up next</span>}
                      {isDone && <span className="font-studio-mono text-[10px] uppercase tracking-[1px]" style={{ color: meta.color }}>Complete</span>}
                    </div>
                    <p className={`font-studio-sans text-[13px] leading-[1.5] mt-1 m-0 ${status === 'next' ? 'text-studio-ink-mute' : 'text-studio-ink-dim'}`}>{m.summary}</p>
                  </div>
                  <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px] flex-shrink-0">
                    {lessonDoneCount}/{m.lessons.length}
                  </div>
                </div>

                {/* Lesson list */}
                <div>
                  {m.lessons.map((l, li) => {
                    const done = !!completedLessons[l.id];
                    return (
                      <React.Fragment key={l.id}>
                        {l.sectionLabel && (
                          <div className="py-2 px-6 font-studio-mono text-[10px] text-studio-ink-mute tracking-[1.4px] uppercase border-b border-dashed border-studio-rule-soft" style={{ background: 'rgba(245,239,228,0.5)' }}>
                            {l.sectionLabel}
                          </div>
                        )}
                        <button
                          onClick={() => setView({ type: 'lesson', courseId: course.id, moduleId: m.id, lessonId: l.id })}
                          className="w-full text-left px-6 py-3.5 flex items-baseline gap-5 border-b border-studio-rule-soft hover:bg-studio-bg transition-colors duration-100 group"
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
                      </React.Fragment>
                    );
                  })}

                  {/* Quiz row */}
                  <button
                    onClick={() => setView({ type: 'quiz', courseId: course.id, moduleId: m.id })}
                    className="w-full text-left px-6 py-3.5 flex items-baseline gap-5 hover:bg-studio-bg transition-colors duration-100 group border-t border-dashed border-studio-rule"
                  >
                    <span className="font-studio-mono text-[11px] text-studio-ink-mute w-7 flex-shrink-0">✦</span>
                    <span className="flex-1 font-studio-serif italic text-[14px] text-studio-ink-dim group-hover:text-studio-ink">Module quiz · {m.quiz.length} questions</span>
                    {quizScores[m.id] !== undefined
                      ? <span className="font-studio-mono text-[10.5px] flex-shrink-0" style={{ color: meta.color }}>{quizScores[m.id]}/{m.quiz.length}</span>
                      : <span className="font-studio-mono text-[10.5px] text-studio-ink-mute group-hover:text-studio-ink transition-colors flex-shrink-0">take →</span>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Three sidebars */}
      <section className="px-12 pb-14 grid grid-cols-[1.2fr_1fr_1fr] gap-6">
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-7">
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
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-7">
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
        <div className="bg-studio-ink rounded-[4px] p-7">
          <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.4px] uppercase mb-3.5">From the librarians</div>
          <p className="font-studio-serif italic text-[18px] leading-[1.45] m-0" style={{ color: 'rgba(245,239,228,0.92)' }}>{meta.quote}</p>
          <div className="font-studio-mono text-[10.5px] tracking-[1px] uppercase mt-[18px]" style={{ color: 'rgba(245,239,228,0.55)' }}>— editorial board, Issue 06</div>
        </div>
      </section>

      {/* Related */}
      <section className="px-12 pb-16">
        <header className="flex items-baseline justify-between mb-5">
          <h2 className="font-studio-display text-[28px] text-studio-ink m-0 font-normal tracking-[-0.4px]">Read after this</h2>
          <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">Curated by the editors</div>
        </header>
        <div className="grid grid-cols-3 gap-5">
          {meta.related.map(it => (
            <button key={it.no} onClick={() => setView(it.view)}
              className="flex items-center gap-[18px] p-[22px] bg-studio-paper border border-studio-rule rounded-[4px] text-left hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
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
