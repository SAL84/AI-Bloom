import React, { useState } from 'react';
import { COURSES } from '../../data/modules';
import type { CourseId, View } from '../../types/course';
import { SearchModal } from './SearchModal';
import { VisitCounter } from './VisitCounter';
import { EDITORS_DESK, MARGINALIA } from '../../data/reading-room';

interface Props {
  setView: (view: View) => void;
  completedLessons: Record<string, boolean>;
  posts?: BlogPostMeta[];
}

export interface BlogPostMeta {
  id: string;
  title: string;
  description: string;
  date: string;
}


function moduleCount(id: CourseId): number {
  return COURSES[id]?.modules.length ?? 0;
}

function courseProgress(id: CourseId, done: Record<string, boolean>): number {
  const c = COURSES[id];
  if (!c) return 0;
  const total = c.modules.reduce((s, m) => s + m.lessons.length, 0);
  if (!total) return 0;
  const completed = c.modules.reduce((s, m) => s + m.lessons.filter(l => done[l.id]).length, 0);
  return Math.round((completed / total) * 100);
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function StudioNav({ setView, onOpenSearch }: { setView: (v: View) => void; onOpenSearch: () => void }) {
  const links: Array<{ label: string; view?: View }> = [
    { label: 'Catalog', view: { type: 'library' } },
    { label: 'Glossary', view: { type: 'glossary' } },
    { label: 'Shelf', view: { type: 'shelf' } },
    { label: 'Roadmap', view: { type: 'roadmap' } },
  ];
  return (
    <nav className="flex items-center gap-3 lg:gap-6 px-4 sm:px-6 lg:px-12 py-3 lg:py-[22px] border-b border-studio-rule bg-studio-paper">
      <div className="flex items-center gap-2.5 lg:gap-3 flex-shrink-0">
        <div className="w-[28px] h-[28px] lg:w-[30px] lg:h-[30px] rounded-full bg-studio-ink text-studio-bg grid place-items-center font-studio-serif italic text-[17px] lg:text-[19px]">a</div>
        <div>
          <div className="font-studio-serif italic text-[16px] sm:text-[18px] lg:text-[19px] text-studio-ink leading-none">
            <span className="hidden sm:inline">The AI Learning Hub</span>
            <span className="sm:hidden">AI Hub</span>
          </div>
          <div className="hidden sm:block font-studio-mono text-[10px] text-studio-ink-mute tracking-[1.4px] uppercase mt-0.5">A free public library</div>
        </div>
      </div>
      <div className="hidden md:flex gap-4 lg:gap-[26px] md:ml-4 lg:ml-9 flex-1 flex-wrap">
        {links.map((it, i) => (
          <button key={it.label} onClick={() => it.view && setView(it.view)}
            className={`font-studio-sans text-[13px] lg:text-[13.5px] flex items-center hover:underline transition-all duration-100 ${i === 0 ? 'text-studio-ink font-semibold' : 'text-studio-ink-dim font-normal'}`}>
            {it.label}{i === 0 && <span className="text-studio-kids ml-1.5">·</span>}
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2 lg:gap-2.5 flex-shrink-0">
        <button
          onClick={onOpenSearch}
          aria-label="Search the catalog"
          className="lg:hidden w-9 h-9 grid place-items-center rounded-full border border-studio-rule text-studio-ink-dim hover:text-studio-ink hover:border-studio-ink-dim transition-colors duration-150"
        >
          <span className="text-[16px]">⌕</span>
        </button>
        <button
          onClick={onOpenSearch}
          className="hidden lg:inline-flex font-studio-sans text-[13px] text-studio-ink-dim hover:text-studio-ink hover:border-studio-ink-dim px-3.5 py-2 border border-studio-rule rounded-full items-center gap-2 bg-studio-bg transition-colors duration-150"
        >
          <span className="opacity-60">⌕</span> Search the catalog
        </button>
        <button
          onClick={() => setView({ type: 'playground' })}
          className="font-studio-sans text-[12.5px] sm:text-[13px] text-white px-3 sm:px-[18px] py-2 sm:py-[9px] rounded-full font-medium hover:opacity-90 transition-opacity duration-150 whitespace-nowrap"
          style={{ background: '#b85c3a' }}
        >
          AI Studio →
        </button>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function StudioHero({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-12 pt-10 lg:pt-16 pb-8 lg:pb-12 relative">
      <div className="hidden sm:block absolute top-6 lg:top-9 right-6 lg:right-14 font-studio-mono text-[10px] lg:text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase">
        Vol. VI · No. 03 — Spring 2026
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 lg:items-end">
        <div>
          <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-3 lg:mb-[18px]">
            ◆ Open shelves · all welcome
          </div>
          <h1 className="font-studio-display text-[64px] sm:text-[88px] lg:text-[116px] leading-[0.93] tracking-[-1.4px] sm:tracking-[-2px] lg:tracking-[-3px] text-studio-ink m-0 font-normal">
            Curious<br />
            <span className="font-studio-serif italic text-studio-kids font-normal">about </span>AI?
          </h1>
          <p className="font-studio-serif italic text-[17px] sm:text-[20px] lg:text-[24px] leading-[1.4] text-studio-ink-dim mt-5 lg:mt-7 max-w-[520px] font-normal">
            Twelve courses. From eight-year-olds to regulated industries. Everything is free, everything is real, nothing's on a corporate calendar.
          </p>
        </div>
        <aside className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-[26px] relative mt-6">
          <div className="absolute -top-3 left-6 bg-studio-kids text-studio-bg font-studio-mono text-[10px] tracking-[1.6px] uppercase px-3 py-1 rounded-[2px]">
            From the journal
          </div>
          <h3 className="font-studio-serif italic text-[26px] text-studio-ink mt-1.5 mb-2 font-normal leading-[1.1]">
            Fresh off the desk
          </h3>
          <p className="font-studio-sans text-[13px] text-studio-ink-dim leading-[1.5] mb-[14px]">
            Dated essays on the questions people actually search for.
          </p>
          <div className="flex flex-col divide-y divide-studio-rule-soft">
            {posts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}/`} className="py-2.5 no-underline group">
                <div className="font-studio-mono text-[9.5px] text-studio-ink-mute tracking-[1.2px] uppercase mb-0.5">{post.date}</div>
                <div className="font-studio-serif italic text-[15.5px] text-studio-ink leading-[1.25] group-hover:underline underline-offset-[3px]">{post.title}</div>
              </a>
            ))}
          </div>
          <a href="/blog/"
            className="block w-full mt-3.5 font-studio-sans text-[13.5px] font-medium text-center text-studio-bg bg-studio-ink py-[11px] px-4 rounded-[4px] no-underline hover:opacity-90 transition-opacity duration-150">
            Read the journal →
          </a>
        </aside>
      </div>
    </section>
  );
}

// ── Catalog ───────────────────────────────────────────────────────────────────

function RowLabel({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="flex items-baseline gap-3.5 mb-3.5 mt-2">
      <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase whitespace-nowrap">{children}</div>
      <div className="flex-1 h-px bg-studio-rule" />
      {sub && <div className="font-studio-serif italic text-[14px] text-studio-ink-mute whitespace-nowrap">{sub}</div>}
    </div>
  );
}

interface CardData {
  no: string; title: string; kicker: string; blurb: string;
  modules: number; unit?: string; level: string; progress: number; badge: string;
  color: string; onClick: () => void;
}

function CatalogCard({ no, title, kicker, blurb, modules, unit = 'modules', level, progress, badge, color, onClick }: CardData) {
  return (
    <article onClick={onClick}
      className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
      <div className="px-6 py-[22px] flex justify-between items-start" style={{ background: color }}>
        <div>
          <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{kicker}</div>
          <h3 className="font-studio-display text-[30px] text-white mt-1.5 leading-[1.04] font-normal tracking-[-0.5px]">{title}</h3>
        </div>
        <div className="font-studio-serif italic text-[32px] leading-none font-normal" style={{ color: 'rgba(255,255,255,0.7)' }}>№{no}</div>
      </div>
      <div className="px-6 py-5 flex-1 flex flex-col gap-4">
        <p className="font-studio-sans text-[13px] text-studio-ink-dim leading-[1.55] m-0 flex-1">{blurb}</p>
        {progress > 0 && (
          <div>
            <div className="flex justify-between font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.8px] mb-1.5">
              <span>Your progress</span><span className="text-studio-ink">{progress}%</span>
            </div>
            <div className="h-[5px] bg-studio-rule-soft rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${progress}%`, background: color }} />
            </div>
          </div>
        )}
        <div className="flex justify-between items-center pt-3.5 border-t border-dashed border-studio-rule font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
          <span>{modules} {unit} · {level}</span>
          <span className="text-studio-ink font-medium">{badge}</span>
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ no, title, kicker, blurb, modules, level, progress, badge, color, onClick }: CardData) {
  return (
    <article onClick={onClick}
      className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1.6fr] md:min-h-[220px] cursor-pointer hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
      <div className="p-6 lg:p-8 flex flex-col justify-between relative" style={{ background: color }}>
        <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{kicker}</div>
        <h3 className="font-studio-display text-[40px] sm:text-[48px] lg:text-[56px] text-white mt-3 leading-[0.96] font-normal tracking-[-0.8px] lg:tracking-[-1.2px]">{title}</h3>
        <div className="absolute top-4 lg:top-5 right-5 lg:right-6 font-studio-serif italic text-[28px] lg:text-[36px] leading-none" style={{ color: 'rgba(255,255,255,0.7)' }}>№{no}</div>
        <div className="font-studio-serif italic text-[15px] lg:text-[16px] mt-2" style={{ color: 'rgba(255,255,255,0.85)' }}>A book for two — read it together.</div>
      </div>
      <div className="p-6 lg:p-8 flex flex-col gap-[18px] justify-center">
        <p className="font-studio-serif text-[19px] text-studio-ink leading-[1.45] m-0 font-normal">{blurb}</p>
        {progress > 0 && (
          <div>
            <div className="flex justify-between font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.8px] mb-1.5">
              <span>Your progress</span><span className="text-studio-ink">{progress}%</span>
            </div>
            <div className="h-[5px] bg-studio-rule-soft rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${progress}%`, background: color }} />
            </div>
          </div>
        )}
        <div className="flex justify-between items-center pt-3.5 border-t border-dashed border-studio-rule font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
          <span>{modules} modules · {level} · includes a career-game</span>
          <button onClick={e => { e.stopPropagation(); onClick(); }}
            className="font-studio-sans text-[13px] font-medium text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-150" style={{ background: color }}>
            {badge}
          </button>
        </div>
      </div>
    </article>
  );
}

type Filter = 'all' | 'kids' | 'core' | 'build' | 'industry';

function StudioCatalog({ setView, completedLessons }: { setView: (v: View) => void; completedLessons: Record<string, boolean> }) {
  const [filter, setFilter] = useState<Filter>('all');

  const pKids  = courseProgress('ai-kids', completedLessons);
  const pEss   = courseProgress('ai-essentials', completedLessons);
  const pDeep  = courseProgress('ai-deep-dive', completedLessons);
  const pCyber = courseProgress('ai-cybersec-se', completedLessons);
  const pTeens = courseProgress('ai-teens', completedLessons);
  const pEvals = courseProgress('ai-evals', completedLessons);
  const pHealth = courseProgress('ai-healthcare', completedLessons);
  const pLegal = courseProgress('ai-legal', completedLessons);
  const pSecure = courseProgress('ai-secure', completedLessons);
  const pVibe = courseProgress('ai-vibecoding', completedLessons);
  const pPrompt = courseProgress('ai-prompting', completedLessons);
  const pAgents = courseProgress('ai-agents', completedLessons);

  const kidsCard: CardData = {
    no: '01', title: 'AI for Kids', kicker: 'For ages 8–14', color: '#d96a3a',
    blurb: 'Foundations through stories and a career-game. The kind of book a parent reads alongside.',
    modules: moduleCount('ai-kids'), level: 'Beginner', progress: pKids,
    badge: pKids > 0 ? 'Resume →' : 'Open →',
    onClick: () => setView({ type: 'home', courseId: 'ai-kids' }),
  };
  const teensCard: CardData = {
    no: '02', title: 'AI for School Students', kicker: 'For ages 14–18', color: '#d96a3a',
    blurb: 'How LLMs actually work, prompting as a real skill, deepfakes, and where the line sits on schoolwork.',
    modules: moduleCount('ai-teens'), level: 'Beginner', progress: pTeens,
    badge: pTeens > 0 ? 'Resume →' : 'Open →',
    onClick: () => setView({ type: 'home', courseId: 'ai-teens' }),
  };
  const coreCards: CardData[] = [
    { no: '03', title: 'AI Essentials', kicker: 'For everyone', color: '#3f8a5e',
      blurb: "Vocabulary, history, honest limits. What an LLM is — and isn't — without the marketing.",
      modules: moduleCount('ai-essentials'), level: 'Beginner', progress: pEss,
      badge: pEss > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-essentials' }) },
    { no: '04', title: 'AI Deep Dive', kicker: 'For builders', color: '#3f8a5e',
      blurb: "Transformers, embeddings, fine-tuning, evals. The trade-offs that don't fit on a slide.",
      modules: moduleCount('ai-deep-dive'), level: 'Advanced', progress: pDeep,
      badge: pDeep > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-deep-dive' }) },
    { no: '05', title: 'Prompting', kicker: 'The everyday skill', color: '#3f8a5e',
      blurb: 'The one skill that improves everything else you do with AI. Built on before-and-after examples, not abstract advice.',
      modules: moduleCount('ai-prompting'), level: 'Beginner', progress: pPrompt,
      badge: pPrompt > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-prompting' }) },
  ];
  const industryCards: CardData[] = [
    { no: '10', title: 'AI for Cybersecurity', kicker: 'For security teams', color: '#2c6db0',
      blurb: 'AI in the security stack and the security of AI itself — defence, the adversarial side, and how to evaluate the products.',
      modules: moduleCount('ai-cybersec-se'), level: 'Intermediate', progress: pCyber,
      badge: pCyber > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-cybersec-se' }) },
  ];

  const buildTestSecureCards: CardData[] = [
    { no: '06', title: 'Vibecoding', kicker: '① Build it', color: '#8a1e2e',
      blurb: 'Turn an idea into a working prototype using AI — with no coding background, and knowing what you have actually got.',
      modules: moduleCount('ai-vibecoding'), level: 'Beginner', progress: pVibe,
      badge: pVibe > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-vibecoding' }) },
    { no: '07', title: 'Agent Engineering', kicker: '② Engineer it', color: '#8a1e2e',
      blurb: 'The scaffolding that turns a model into a working system — loops, context, tools, and the failures that only appear in production.',
      modules: moduleCount('ai-agents'), level: 'Advanced', progress: pAgents,
      badge: pAgents > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-agents' }) },
    { no: '08', title: 'Does Your AI Actually Work?', kicker: '③ Test it', color: '#8a1e2e',
      blurb: 'An eval is a test for AI. Build real test cases, judge quality honestly, and catch problems before your users find them.',
      modules: moduleCount('ai-evals'), level: 'Advanced', progress: pEvals,
      badge: pEvals > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-evals' }) },
    { no: '09', title: 'Securing AI Systems', kicker: '④ Secure it', color: '#8a1e2e',
      blurb: 'Threat-model, harden and red-team AI and agentic systems. The hands-on counterpart to the sales course.',
      modules: moduleCount('ai-secure'), level: 'Advanced', progress: pSecure,
      badge: pSecure > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-secure' }) },
  ];
  const pFinance = courseProgress('ai-finance', completedLessons);
  const verticalCards: CardData[] = [
    { no: '11', title: 'AI for Healthcare', kicker: 'For clinical & health-tech', color: '#2c6db0',
      blurb: 'Where AI actually sits in care, how to read the evidence, and the regulatory reality. Orientation, not clinical guidance.',
      modules: moduleCount('ai-healthcare'), level: 'Intermediate', progress: pHealth,
      badge: pHealth > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-healthcare' }) },
    { no: '13', title: 'AI for Finance', kicker: 'For risk, compliance & credit', color: '#2c6db0',
      blurb: 'AI inside the model risk duties finance already has — explainability, fair lending, and the failure modes that cost money.',
      modules: moduleCount('ai-finance'), level: 'Intermediate', progress: pFinance,
      badge: pFinance > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-finance' }) },
    { no: '12', title: 'AI for Legal', kicker: 'For legal practice', color: '#2c6db0',
      blurb: 'Contracts, discovery, and the citation problem that has already cost lawyers their credibility.',
      modules: moduleCount('ai-legal'), level: 'Intermediate', progress: pLegal,
      badge: pLegal > 0 ? 'Resume →' : 'Open →',
      onClick: () => setView({ type: 'home', courseId: 'ai-legal' }) },
  ];

  const filterBtns: Array<{ key: Filter; label: string }> = [
    { key: 'all', label: 'All' }, { key: 'kids', label: 'For kids' },
    { key: 'core', label: 'Core literacy' }, { key: 'build', label: 'Build · Test · Secure' }, { key: 'industry', label: 'Industry' },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 pt-6 pb-10 lg:pb-14">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-6 lg:mb-7">
        <h2 className="font-studio-display text-[32px] sm:text-[38px] lg:text-[44px] text-studio-ink m-0 font-normal tracking-[-0.6px] lg:tracking-[-0.8px]">
          The catalog<span className="hidden sm:inline font-studio-serif italic font-normal text-studio-ink-dim text-[20px] lg:text-[28px] ml-3">— twelve on the shelf</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {filterBtns.map(({ key, label }) => (
            <button key={key} onClick={() => setFilter(key)}
              className={`font-studio-sans text-[12px] lg:text-[12.5px] font-medium px-3 lg:px-3.5 py-[6px] lg:py-[7px] rounded-full border transition-all duration-150 ${filter === key ? 'text-studio-bg bg-studio-ink border-studio-ink' : 'text-studio-ink bg-studio-paper border-studio-rule hover:border-studio-ink-dim'}`}>
              {label}
            </button>
          ))}
        </div>
      </header>

      {(filter === 'all' || filter === 'kids') && (
        <div className="mb-7 lg:mb-9">
          <RowLabel sub="Two courses — one for 8–14, a deeper one for 14–18">For young readers · ages 8–18</RowLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <CatalogCard {...kidsCard} />
            <CatalogCard {...teensCard} />
            <button
              onClick={() => setView({ type: 'kids-games' })}
              className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden text-left cursor-pointer flex flex-col hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200"
            >
              <div className="px-6 py-[22px] flex justify-between items-start" style={{ background: '#d96a3a' }}>
                <div>
                  <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>Learn by playing</div>
                  <h3 className="font-studio-display text-[30px] text-white mt-1.5 leading-[1.04] font-normal tracking-[-0.5px]">AI Games</h3>
                </div>
                <span className="text-[34px] leading-none">🎮</span>
              </div>
              <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                <p className="font-studio-sans text-[13px] text-studio-ink-dim leading-[1.55] m-0 flex-1">Five quick games — Spot the Bot, True or Made Up?, Share or Don\'t Share?, and friends — that teach real AI concepts. All in your browser, no setup.</p>
                <div className="flex justify-between items-center pt-3.5 border-t border-dashed border-studio-rule font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
                  <span>5 games · ages 8–14</span>
                  <span className="text-studio-ink font-medium">Play now →</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
      {(filter === 'all' || filter === 'core') && (
        <div className="mb-7 lg:mb-9">
          <RowLabel sub="Read in any order — each stands alone">Core literacy</RowLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {coreCards.map(c => <CatalogCard key={c.no} {...c} />)}
          </div>
        </div>
      )}
      {(filter === 'all' || filter === 'build') && (
        <div className="mb-7 lg:mb-9">
          <RowLabel sub="Read in order — this is the path from idea to something real people use">Build · Test · Secure</RowLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {buildTestSecureCards.map(c => <CatalogCard key={c.no} {...c} />)}
          </div>
        </div>
      )}
      {(filter === 'all' || filter === 'industry') && (
        <div>
          <RowLabel sub="Vertical, role-specific. More on the way.">Industry courses</RowLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {industryCards.map(c => <CatalogCard key={c.no} {...c} />)}
            {verticalCards.map(c => <CatalogCard key={c.no} {...c} />)}
            <div className="border-[1.5px] border-dashed border-studio-rule rounded-[4px] p-7 flex flex-col justify-center gap-2">
              <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase">In the kiln</div>
              <div className="font-studio-serif italic text-[22px] text-studio-ink-dim leading-[1.2]">More verticals next quarter</div>
              <div className="font-studio-sans text-[13px] text-studio-ink-mute leading-[1.5]">Healthcare, legal, and field-sales drafts are in review. Suggest one →</div>
            </div>
            <div className="border-[1.5px] border-dashed border-studio-rule rounded-[4px] p-7 flex flex-col justify-center gap-2">
              <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase">Run a cohort with us</div>
              <div className="font-studio-serif italic text-[22px] text-studio-ink-dim leading-[1.2]">Bring your team</div>
              <div className="font-studio-sans text-[13px] text-studio-ink-mute leading-[1.5]">We co-author industry courses with practitioners. If that's you, get in touch.</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Side stuff ────────────────────────────────────────────────────────────────

function StudioSideStuff({ setView }: { setView: (v: View) => void }) {
  const playgroundItems = [['Next word', 'Watch a sentence get predicted, one word at a time'], ['Base rate', 'Why an accurate detector still cries wolf'], ['Eval confidence', 'Is that improvement real, or is it noise?'], ['Tokeniser', 'See how your sentence becomes numbers']];
  const agenticItems = [['I.', 'The agent loop — how agents think and act', 'anatomy'], ['II.', 'Research: when the sources disagree', 'scenario'], ['III.', 'Trip planner: stopped at the payment gate', 'scenario'], ['IV.', 'Bug hunt: the first hypothesis was wrong', 'scenario']];
  return (
    <section className="px-4 sm:px-6 lg:px-12 pb-10 lg:pb-14">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-5 lg:mb-6">
        <h2 className="font-studio-display text-[32px] sm:text-[38px] lg:text-[44px] text-studio-ink m-0 font-normal tracking-[-0.6px] lg:tracking-[-0.8px]">
          Side stuff<span className="hidden sm:inline font-studio-serif italic font-normal text-studio-ink-dim text-[18px] lg:text-[24px] ml-3">— not courses, still worth your time</span>
        </h2>
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1px]">Two rabbit holes · enter at your own risk</div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        <article onClick={() => setView({ type: 'playground' })}
          className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
          <div className="px-[26px] py-[22px] flex justify-between items-start" style={{ background: '#3f8a5e' }}>
            <div>
              <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>Try things · break things</div>
              <h3 className="font-studio-display text-[34px] text-white mt-1.5 leading-[1.04] font-normal tracking-[-0.6px]">AI Playgrounds</h3>
            </div>
            <div className="font-studio-serif italic text-[30px] leading-none" style={{ color: 'rgba(255,255,255,0.7)' }}>§</div>
          </div>
          <div className="px-[26px] py-5 flex-1 flex flex-col gap-4">
            <p className="font-studio-sans text-[13.5px] text-studio-ink-dim leading-[1.55] m-0">A wall of small, runnable toys. Tokenizer in your browser. Embeddings on a 2D plane. Ten minutes teaches you what an hour of reading wouldn't.</p>
            <ul className="list-none p-0 m-0">
              {playgroundItems.map(([k, v], i) => (
                <li key={i} className="grid grid-cols-[1fr_auto] gap-3 items-baseline py-2.5 border-t border-dashed border-studio-rule">
                  <span><span className="font-studio-serif italic text-[16px] text-studio-ink">{k}</span><span className="font-studio-sans text-[12.5px] text-studio-ink-dim ml-2.5">{v}</span></span>
                  <span className="font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.8px]">RUN →</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center pt-3.5 border-t border-studio-rule font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
              <span>7 toys · all in-browser · no API keys</span>
              <span className="text-studio-ink font-medium">Open the room →</span>
            </div>
          </div>
        </article>
        <article onClick={() => setView({ type: 'agentic-ai' })}
          className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200">
          <div className="px-[26px] py-[22px] flex justify-between items-start" style={{ background: '#5d5045' }}>
            <div>
              <div className="font-studio-mono text-[10.5px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>Field notes · not yet a course</div>
              <h3 className="font-studio-display text-[34px] text-white mt-1.5 leading-[1.04] font-normal tracking-[-0.6px]">Agentic AI</h3>
            </div>
            <div className="font-studio-serif italic text-[30px] leading-none" style={{ color: 'rgba(255,255,255,0.7)' }}>¶</div>
          </div>
          <div className="px-[26px] py-5 flex-1 flex flex-col gap-4">
            <p className="font-studio-sans text-[13.5px] text-studio-ink-dim leading-[1.55] m-0">Tools, memory, the loop. Watch an agent reason, call tools, and act — an interactive anatomy plus three step-by-step investigation scenarios.</p>
            <ul className="list-none p-0 m-0">
              {agenticItems.map(([k, t, dur], i) => (
                <li key={i} className="grid grid-cols-[32px_1fr_auto] gap-3 items-baseline py-2.5 border-t border-dashed border-studio-rule">
                  <span className="font-studio-serif italic text-[16px] text-studio-ink-mute">{k}</span>
                  <span className="font-studio-serif text-[16px] text-studio-ink leading-[1.3]">{t}</span>
                  <span className="font-studio-mono text-[10.5px] text-studio-ink-mute tracking-[0.8px]">{dur}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center pt-3.5 border-t border-studio-rule font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.6px]">
              <span>1 interactive anatomy · 3 scenarios</span>
              <span className="text-studio-ink font-medium">Read the notes →</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ── Reading Room ──────────────────────────────────────────────────────────────

function StudioReadingRoom({ setView }: { setView: (v: View) => void }) {
  const [editor] = useState(() => EDITORS_DESK[Math.floor(Math.random() * EDITORS_DESK.length)]);
  const [tidbit] = useState(() => MARGINALIA[Math.floor(Math.random() * MARGINALIA.length)]);
  return (
    <section className="px-4 sm:px-6 lg:px-12 pb-10 lg:pb-14 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 lg:gap-6">
      <button
        type="button"
        onClick={() => setView({ type: 'roadmap' })}
        aria-label={`Open the roadmap: ${editor.preTitle} ${editor.kickerTitle}`}
        className="text-left bg-studio-ink rounded-[4px] px-6 sm:px-8 lg:px-10 pt-7 lg:pt-10 pb-7 lg:pb-9 cursor-pointer hover:opacity-95 transition-opacity duration-150 block w-full"
      >
        <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.4px] uppercase mb-3.5">From the editor's desk</div>
        <h3 className="font-studio-display text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.05] m-0 font-normal tracking-[-0.4px] lg:tracking-[-0.6px] text-studio-bg">
          {editor.preTitle}{' '}
          <span className="font-studio-serif italic text-studio-kids">{editor.kickerTitle}</span>
        </h3>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5] mt-5 lg:mt-[22px] max-w-[520px]" style={{ color: 'rgba(245,239,228,0.78)' }}>
          {editor.text}
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-6 mt-5 lg:mt-7 font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1px]" style={{ color: 'rgba(245,239,228,0.55)' }}>
          {editor.meta.map((m, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span>·</span>}
              <span>{m}</span>
            </React.Fragment>
          ))}
        </div>
      </button>
      <article className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-7">
        <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.4px] uppercase mb-3.5">Marginalia · Did you know</div>
        <p className="font-studio-serif text-[18px] lg:text-[22px] leading-[1.4] text-studio-ink m-0 italic font-normal">
          {tidbit.factoid}
        </p>
        <p className="font-studio-sans text-[13px] text-studio-ink-dim leading-[1.55] mt-4">
          {tidbit.expansion}
        </p>
        <div className="flex flex-wrap gap-2 mt-[18px]">
          {tidbit.tags.map(t => (
            <span key={t} className="font-studio-mono text-[10.5px] text-studio-ink-dim tracking-[0.6px] px-2.5 py-1 border border-studio-rule rounded-full bg-studio-bg">{t}</span>
          ))}
        </div>
      </article>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function StudioFooter() {
  return (
    <footer className="px-4 sm:px-6 lg:px-12 py-6 lg:py-8 border-t border-studio-rule bg-studio-paper">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4">
        <div className="font-studio-serif italic text-[14px] lg:text-[15px] text-studio-ink-dim max-w-[540px] leading-[1.5]">
          A free public library for AI literacy. Built by people who'd rather you understand than subscribe.
          <br />
          Developed by Salih AA
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-5 font-studio-mono text-[11px] text-studio-ink-mute tracking-[1px]">
          <VisitCounter />
          <span>RSS</span><span>NEWSLETTER</span><span>SOURCE</span><span>EST. MMXXV</span>
        </div>
      </div>
    </footer>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export const CourseLibraryView = ({ setView, completedLessons, posts = [] }: Props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="bg-studio-bg text-studio-ink font-studio-sans min-h-screen">
      <StudioNav setView={setView} onOpenSearch={() => setSearchOpen(true)} />
      <StudioHero posts={posts} />
      <StudioCatalog setView={setView} completedLessons={completedLessons} />
      <StudioSideStuff setView={setView} />
      <StudioReadingRoom setView={setView} />
      <StudioFooter />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} setView={setView} />
    </div>
  );
};
