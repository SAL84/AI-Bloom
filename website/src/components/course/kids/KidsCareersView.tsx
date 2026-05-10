import React, { useState } from 'react';
import { ChevronLeft, RotateCcw } from 'lucide-react';
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
      { label: "🔧 Building and fixing things that work", scores: { engineer: 2 } },
      { label: "📚 Teaching and explaining things to others", scores: { teacher: 2 } },
      { label: "🔭 Discovering how things work", scores: { researcher: 2 } },
    ],
  },
  {
    q: "Your superpower is...",
    options: [
      { label: "✨ Imagination — you see things others don't", scores: { artist: 2 } },
      { label: "🧩 Logic — you love patterns and systems",    scores: { engineer: 1, data: 1 } },
      { label: "❤️ Empathy — you understand how people feel", scores: { ethicist: 2, teacher: 1 } },
      { label: "❓ Curiosity — you always ask 'why?'",       scores: { researcher: 2 } },
    ],
  },
  {
    q: "In a group project, you're the one who...",
    options: [
      { label: "🎨 Makes it look amazing",               scores: { artist: 2 } },
      { label: "⚙️ Makes sure it actually works",        scores: { engineer: 1, data: 1 } },
      { label: "🤝 Makes sure everyone's included",      scores: { ethicist: 1, teacher: 2 } },
      { label: "💡 Comes up with the big idea",          scores: { researcher: 2 } },
    ],
  },
  {
    q: "Your dream is to...",
    options: [
      { label: "🎮 Create AI art, music, or games",             scores: { artist: 2 } },
      { label: "🤖 Build a robot or AI system",                 scores: { engineer: 2 } },
      { label: "⚖️ Make AI fair and safe for everyone",        scores: { ethicist: 2 } },
      { label: "🚀 Discover something nobody has before",       scores: { researcher: 2 } },
    ],
  },
  {
    q: "When something doesn't work, you...",
    options: [
      { label: "🎨 Try a totally different creative approach",    scores: { artist: 1, researcher: 1 } },
      { label: "🔍 Debug it step by step until it's fixed",      scores: { engineer: 1, data: 2 } },
      { label: "💬 Think about how it affects the people using it", scores: { ethicist: 2 } },
      { label: "📖 Research the root cause deeply",              scores: { researcher: 1, data: 1 } },
    ],
  },
  {
    q: "Your friends call you the...",
    options: [
      { label: "🎨 Creative one",  scores: { artist: 2 } },
      { label: "🧠 Smart one",     scores: { engineer: 1, data: 1 } },
      { label: "💛 Kind one",      scores: { ethicist: 1, teacher: 2 } },
      { label: "🌍 Curious one",   scores: { researcher: 2 } },
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
  gradient: string;
  badge: string;
}

const CAREERS: CareerResult[] = [
  {
    key: 'artist',
    title: 'AI Creative',
    emoji: '🎨',
    tagline: 'You see beauty in code',
    desc: "You don't just use AI — you make it beautiful. You'll design AI-powered games, art generators, music tools, and experiences that move people.",
    roles: ['AI Game Designer', 'Creative Technologist', 'AI Music Composer', 'Digital Experience Designer'],
    gradient: 'from-pink-500 to-purple-500',
    badge: 'bg-pink-100 text-pink-800',
  },
  {
    key: 'engineer',
    title: 'AI Engineer',
    emoji: '🔧',
    tagline: 'You build the future',
    desc: "You're the architect of tomorrow's AI systems. You'll design and build the models, apps, and robots that everyone else uses.",
    roles: ['Machine Learning Engineer', 'Robotics Engineer', 'AI Software Developer', 'Systems Architect'],
    gradient: 'from-blue-500 to-cyan-500',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    key: 'teacher',
    title: 'AI Educator',
    emoji: '📚',
    tagline: 'You make the complex simple',
    desc: "You have a rare gift: making hard things easy to understand. You'll help the world learn to use AI safely and confidently.",
    roles: ['AI Curriculum Designer', 'Technology Teacher', 'AI Trainer', 'Educational Content Creator'],
    gradient: 'from-emerald-500 to-teal-500',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  {
    key: 'ethicist',
    title: 'AI Ethicist',
    emoji: '⚖️',
    tagline: 'You make AI fair for everyone',
    desc: "You're the guardian of AI fairness. You'll make sure AI systems don't discriminate, protect people's privacy, and work for everyone — not just a few.",
    roles: ['AI Ethics Researcher', 'AI Policy Advisor', 'Trust & Safety Lead', 'AI Auditor'],
    gradient: 'from-orange-500 to-amber-500',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    key: 'researcher',
    title: 'AI Researcher',
    emoji: '🔭',
    tagline: 'You ask questions nobody has asked',
    desc: "You push the boundaries of what AI can do. You'll work on problems nobody has solved yet, publishing discoveries that change the entire field.",
    roles: ['AI Research Scientist', 'ML Researcher', 'Neuro-AI Pioneer', 'AI Safety Researcher'],
    gradient: 'from-violet-500 to-indigo-500',
    badge: 'bg-violet-100 text-violet-800',
  },
  {
    key: 'data',
    title: 'Data Scientist',
    emoji: '📊',
    tagline: 'You see patterns where others see chaos',
    desc: "You turn mountains of raw data into AI that actually works. You'll find the signal in the noise and teach AI what the real world looks like.",
    roles: ['Data Scientist', 'ML Data Engineer', 'Analytics Lead', 'AI Training Specialist'],
    gradient: 'from-red-500 to-rose-500',
    badge: 'bg-red-100 text-red-800',
  },
];

const EMPTY_SCORES: Record<CareerKey, number> = { artist: 0, engineer: 0, teacher: 0, ethicist: 0, researcher: 0, data: 0 };

export const KidsCareersView = ({ setView: _setView }: { setView: (v: View) => void }) => {
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

  if (step === 'intro') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="text-6xl mb-4">🚀</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">AI Career Explorer</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          AI is creating amazing new careers — and you could be part of it!<br />
          Answer 6 quick questions to discover which AI career fits YOUR personality.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-8 text-sm">
          {CAREERS.map(c => (
            <div key={c.key} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">{c.emoji}</div>
              <div className="font-semibold text-slate-700 text-xs leading-tight">{c.title}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setStep('quiz')}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-lg"
        >
          Start the Quiz! 🎯
        </button>
      </div>
    );
  }

  if (step === 'result' && result) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className={`inline-block rounded-3xl bg-gradient-to-br ${result.gradient} p-1 mb-6`}>
          <div className="bg-white rounded-[22px] px-8 py-6">
            <div className="text-6xl mb-3">{result.emoji}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Your AI Career</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">{result.title}</h2>
            <p className={`font-semibold text-lg bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>{result.tagline}</p>
          </div>
        </div>
        <p className="text-slate-700 mb-5 leading-relaxed">{result.desc}</p>
        <div className="bg-slate-50 rounded-2xl p-5 mb-5 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Roles you might love:</div>
          <div className="flex flex-wrap gap-2">
            {result.roles.map(r => (
              <span key={r} className={`rounded-full px-3 py-1 text-sm font-medium ${result.badge}`}>{r}</span>
            ))}
          </div>
        </div>
        <p className="text-sm text-slate-500 mb-6">
          Remember — many of these careers didn't exist 10 years ago.<br />
          The ones <strong>you</strong> will work in might not exist yet! 🌟
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition">
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[current];

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <button onClick={reset} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back to Intro
      </button>
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Question {current + 1} of {QUESTIONS.length}</span>
          <span>{Math.round((current / QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${(current / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>
      <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">{q.q}</h2>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.scores)}
            className="w-full text-left p-4 bg-white border-2 border-slate-200 hover:border-purple-400 hover:bg-purple-50 rounded-2xl text-slate-800 font-medium transition hover:scale-[1.01]"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
