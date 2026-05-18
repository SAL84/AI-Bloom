import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from '../StudioChrome';
import type { View } from '../../../types/course';

type CareerKey = 'artist' | 'engineer' | 'teacher' | 'ethicist' | 'researcher' | 'data';

interface Option {
  label: string;
  scores: Partial<Record<CareerKey, number>>;
}

interface Question {
  q: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    q: "What sounds most fun to you?",
    options: [
      { label: "🎨 Creating digital art, games, or music", scores: { artist: 2 } },
      { label: "🔧 Building and fixing things that work",   scores: { engineer: 2 } },
      { label: "📚 Teaching and explaining things to others", scores: { teacher: 2 } },
      { label: "🔭 Discovering how things work",            scores: { researcher: 2 } },
    ],
  },
  {
    q: "Your superpower is…",
    options: [
      { label: "✨ Imagination — you see things others don't", scores: { artist: 2 } },
      { label: "🧩 Logic — you love patterns and systems",    scores: { engineer: 1, data: 1 } },
      { label: "❤️ Empathy — you understand how people feel", scores: { ethicist: 2, teacher: 1 } },
      { label: "❓ Curiosity — you always ask 'why?'",       scores: { researcher: 2 } },
    ],
  },
  {
    q: "In a group project, you're the one who…",
    options: [
      { label: "🎨 Makes it look amazing",          scores: { artist: 2 } },
      { label: "⚙️ Makes sure it actually works",   scores: { engineer: 1, data: 1 } },
      { label: "🤝 Makes sure everyone's included", scores: { ethicist: 1, teacher: 2 } },
      { label: "💡 Comes up with the big idea",     scores: { researcher: 2 } },
    ],
  },
  {
    q: "Your dream is to…",
    options: [
      { label: "🎮 Create AI art, music, or games",        scores: { artist: 2 } },
      { label: "🤖 Build a robot or AI system",            scores: { engineer: 2 } },
      { label: "⚖️ Make AI fair and safe for everyone",   scores: { ethicist: 2 } },
      { label: "🚀 Discover something nobody has before", scores: { researcher: 2 } },
    ],
  },
  {
    q: "When something doesn't work, you…",
    options: [
      { label: "🎨 Try a totally different creative approach",      scores: { artist: 1, researcher: 1 } },
      { label: "🔍 Debug it step by step until it's fixed",        scores: { engineer: 1, data: 2 } },
      { label: "💬 Think about how it affects the people using it", scores: { ethicist: 2 } },
      { label: "📖 Research the root cause deeply",                scores: { researcher: 1, data: 1 } },
    ],
  },
  {
    q: "Your friends call you the…",
    options: [
      { label: "🎨 Creative one", scores: { artist: 2 } },
      { label: "🧠 Smart one",    scores: { engineer: 1, data: 1 } },
      { label: "💛 Kind one",     scores: { ethicist: 1, teacher: 2 } },
      { label: "🌍 Curious one",  scores: { researcher: 2 } },
    ],
  },
];

interface CareerResult {
  key: CareerKey;
  title: string;
  emoji: string;
  tagline: string;
  desc: string;
  roles: string[];
  color: string;
}

const CAREERS: CareerResult[] = [
  { key: 'artist',     title: 'AI Creative',     emoji: '🎨', color: '#5a4ec0',
    tagline: 'You see beauty in code',
    desc: "You don't just use AI — you make it beautiful. You'll design AI-powered games, art generators, music tools, and experiences that move people.",
    roles: ['AI Game Designer', 'Creative Technologist', 'AI Music Composer', 'Digital Experience Designer'] },
  { key: 'engineer',   title: 'AI Engineer',     emoji: '🔧', color: '#2c6db0',
    tagline: 'You build the future',
    desc: "You're the architect of tomorrow's AI systems. You'll design and build the models, apps, and robots that everyone else uses.",
    roles: ['Machine Learning Engineer', 'Robotics Engineer', 'AI Software Developer', 'Systems Architect'] },
  { key: 'teacher',    title: 'AI Educator',     emoji: '📚', color: '#3f8a5e',
    tagline: 'You make the complex simple',
    desc: "You have a rare gift: making hard things easy to understand. You'll help the world learn to use AI safely and confidently.",
    roles: ['AI Curriculum Designer', 'Technology Teacher', 'AI Trainer', 'Educational Content Creator'] },
  { key: 'ethicist',   title: 'AI Ethicist',     emoji: '⚖️', color: '#b78320',
    tagline: 'You make AI fair for everyone',
    desc: "You're the guardian of AI fairness. You'll make sure AI systems don't discriminate, protect people's privacy, and work for everyone — not just a few.",
    roles: ['AI Ethics Researcher', 'AI Policy Advisor', 'Trust & Safety Lead', 'AI Auditor'] },
  { key: 'researcher', title: 'AI Researcher',   emoji: '🔭', color: '#5d5045',
    tagline: 'You ask questions nobody has asked',
    desc: "You push the boundaries of what AI can do. You'll work on problems nobody has solved yet, publishing discoveries that change the entire field.",
    roles: ['AI Research Scientist', 'ML Researcher', 'Neuro-AI Pioneer', 'AI Safety Researcher'] },
  { key: 'data',       title: 'Data Scientist',  emoji: '📊', color: '#c9421f',
    tagline: 'You see patterns where others see chaos',
    desc: "You turn mountains of raw data into AI that actually works. You'll find the signal in the noise and teach AI what the real world looks like.",
    roles: ['Data Scientist', 'ML Data Engineer', 'Analytics Lead', 'AI Training Specialist'] },
];

const EMPTY_SCORES: Record<CareerKey, number> = { artist: 0, engineer: 0, teacher: 0, ethicist: 0, researcher: 0, data: 0 };

export const KidsCareersView = ({ setView }: { setView: (v: View) => void }) => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<CareerKey, number>>({ ...EMPTY_SCORES });
  const [result, setResult] = useState<CareerResult | null>(null);

  const handleAnswer = (optionScores: Partial<Record<CareerKey, number>>) => {
    const updated = { ...scores };
    for (const [key, val] of Object.entries(optionScores)) {
      updated[key as CareerKey] = (updated[key as CareerKey] ?? 0) + (val ?? 0);
    }
    setScores(updated);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(c => c + 1);
    } else {
      const winner = (Object.entries(updated) as [CareerKey, number][]).reduce((a, b) => b[1] > a[1] ? b : a);
      setResult(CAREERS.find(c => c.key === winner[0]) ?? CAREERS[0]);
      setStep('result');
    }
  };

  const reset = () => {
    setStep('intro');
    setCurrent(0);
    setScores({ ...EMPTY_SCORES });
    setResult(null);
  };

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (step === 'intro') {
    return (
      <div className="bg-studio-bg min-h-screen">
        <StudioNavLite crumbs={['AI for Kids', 'Career Explorer']} crumbViews={[{ type: 'home', courseId: 'ai-kids' }, undefined]} setView={setView} />
        <div className="max-w-2xl mx-auto px-6 py-14 text-center">
          <div className="text-[56px] mb-4">🚀</div>
          <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-4">◆ Discover your path</div>
          <h1 className="font-studio-display text-[44px] font-normal tracking-[-1px] text-studio-ink leading-[1.05] mb-4">
            AI Career Explorer
          </h1>
          <p className="font-studio-serif italic text-[18px] text-studio-ink-dim leading-[1.5] mb-10">
            AI is creating amazing new careers — and you could be part of it.<br />
            Answer 6 quick questions to discover which fits your personality.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {CAREERS.map(c => (
              <div key={c.key} className="bg-studio-paper border border-studio-rule rounded-[4px] p-4 text-center">
                <div className="text-[28px] mb-1.5">{c.emoji}</div>
                <div className="font-studio-sans text-[13px] text-studio-ink font-medium">{c.title}</div>
                <div className="font-studio-mono text-[10px] text-studio-ink-mute mt-0.5 tracking-[0.3px]">{c.tagline}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep('quiz')}
            className="font-studio-sans text-[15px] font-medium px-8 py-3.5 rounded-full text-studio-bg hover:opacity-90 transition-opacity"
            style={{ background: '#d96a3a' }}
          >
            Start the quiz →
          </button>
        </div>
        <StudioFooter />
      </div>
    );
  }

  // ── Result ─────────────────────────────────────────────────────────────────
  if (step === 'result' && result) {
    return (
      <div className="bg-studio-bg min-h-screen">
        <StudioNavLite crumbs={['AI for Kids', 'Career Explorer', 'Your result']} setView={setView} />
        <div className="max-w-2xl mx-auto px-6 py-14">
          <div className="bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden mb-8">
            <div className="px-8 py-8 text-center" style={{ background: result.color }}>
              <div className="text-[52px] mb-3">{result.emoji}</div>
              <div className="font-studio-mono text-[10px] tracking-[1.6px] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Your AI career</div>
              <h2 className="font-studio-display text-[40px] font-normal tracking-[-0.8px] text-white leading-[1.05] mb-1">{result.title}</h2>
              <p className="font-studio-serif italic text-[18px]" style={{ color: 'rgba(255,255,255,0.85)' }}>{result.tagline}</p>
            </div>
            <div className="px-8 py-7">
              <p className="font-studio-sans text-[15px] text-studio-ink-dim leading-[1.65] mb-6">{result.desc}</p>
              <div className="font-studio-mono text-[10px] text-studio-ink-mute tracking-[1.4px] uppercase mb-3">Roles you might love</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {result.roles.map(r => (
                  <span key={r} className="font-studio-mono text-[11px] px-3 py-1.5 rounded-full border"
                    style={{ color: result.color, borderColor: result.color + '55', background: result.color + '10' }}>
                    {r}
                  </span>
                ))}
              </div>
              <p className="font-studio-serif italic text-[15px] text-studio-ink-mute leading-[1.5]">
                Many of these careers didn't exist 10 years ago. The ones you will work in might not exist yet. 🌟
              </p>
            </div>
          </div>
          <div className="text-center">
            <button onClick={reset}
              className="font-studio-sans text-[14px] font-medium px-6 py-2.5 rounded-full text-studio-bg hover:opacity-90 transition-opacity"
              style={{ background: '#d96a3a' }}>
              Try again →
            </button>
          </div>
        </div>
        <StudioFooter />
      </div>
    );
  }

  // ── Quiz ───────────────────────────────────────────────────────────────────
  const q = QUESTIONS[current];
  const pct = Math.round((current / QUESTIONS.length) * 100);

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['AI for Kids', 'Career Explorer']} setView={setView} />
      <div className="max-w-xl mx-auto px-6 py-14">
        <div className="mb-8">
          <div className="flex justify-between font-studio-mono text-[11px] text-studio-ink-mute tracking-[0.5px] mb-2">
            <span>Question {current + 1} of {QUESTIONS.length}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1.5 bg-studio-rule rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${pct}%`, background: '#d96a3a' }} />
          </div>
        </div>

        <h2 className="font-studio-display text-[32px] font-normal tracking-[-0.5px] text-studio-ink leading-[1.15] mb-8 text-center">
          {q.q}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.scores)}
              className="w-full text-left px-5 py-4 bg-studio-paper border border-studio-rule rounded-[4px] font-studio-sans text-[15px] text-studio-ink-dim hover:border-studio-ink hover:text-studio-ink transition-all duration-100"
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={reset} className="font-studio-mono text-[11px] text-studio-ink-mute hover:text-studio-ink tracking-[0.5px] transition-colors">
            ← Start over
          </button>
        </div>
      </div>
    </div>
  );
};
