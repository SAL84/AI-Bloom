import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, SendHorizontal } from 'lucide-react';

interface PromptMasterGameProps {
  onBack: () => void;
}

type ScoreLevel = 'weak' | 'medium' | 'strong';

interface Challenge {
  id: number;
  goal: string;
  hint: string;
  keywords: string[];
  formatWords: string[];
  responses: Record<ScoreLevel, string>;
  tip: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: 1,
    goal: "Get the AI to tell you a joke about penguins 🐧",
    hint: "Be clear about what you want (a joke), who it's about (penguins), and maybe what style (funny? silly?).",
    keywords: ['penguin'],
    formatWords: ['joke', 'funny', 'humor', 'laugh', 'silly'],
    responses: {
      weak:   "Hello! How can I help you today?",
      medium: "Sure! Here's one: Why don't penguins fly? Because they can't afford plane tickets! 😄",
      strong: "Here's a penguin joke just for you! 🐧 Why did the penguin bring an umbrella? It heard there was a chance of 'fowl' weather! ☂️ Want another one?",
    },
    tip: "The more specific you are — topic + format + tone — the better the AI response!",
  },
  {
    id: 2,
    goal: "Get the AI to explain why the sky is blue 🌤️",
    hint: "Include: the topic (sky, blue), the format (explain, tell me), and your level (simple, easy words).",
    keywords: ['sky', 'blue'],
    formatWords: ['explain', 'tell', 'why', 'how', 'describe'],
    responses: {
      weak:   "That's an interesting topic! Could you tell me more about what you'd like to know?",
      medium: "The sky is blue because of Rayleigh scattering. Sunlight has all colors, but blue light bounces around more when it hits air molecules.",
      strong: "Great question! 🌈 The sky is blue because of something called Rayleigh scattering. Sunlight is all the rainbow colors mixed together. When it hits tiny air molecules, blue light bounces around way more than other colors — so when you look up, you see blue everywhere!",
    },
    tip: "Adding context like 'explain simply' or 'for a kid' helps AI match its language to your needs!",
  },
  {
    id: 3,
    goal: "Get the AI to write a short poem about space 🚀",
    hint: "Mention: poem/poetry, the topic (space, stars), length (short, 4 lines), and maybe a mood (exciting, mysterious).",
    keywords: ['space', 'star', 'universe', 'galaxy', 'planet', 'rocket'],
    formatWords: ['poem', 'poetry', 'verse', 'rhyme', 'write'],
    responses: {
      weak:   "I'd be happy to help with creative writing! What subject interests you?",
      medium: "Here's a poem about space:\nStars shine bright across the night,\nPlanets spin in endless flight,\nThe universe is vast and wide,\nWith mysteries hidden deep inside.",
      strong: "Here's a short, exciting space poem just for you! 🌌\n\n*Among the Stars*\nRockets roar and comets fly,\nNebulas paint the endless sky,\nPlanets spin in cosmic grace —\nWe're tiny explorers of infinite space! 🚀✨",
    },
    tip: "The best creative prompts include format (poem), subject (space), length (short), and mood (exciting)!",
  },
];

const SCORE_META: Record<ScoreLevel, { label: string; color: string; bg: string }> = {
  weak:   { label: '⭐ Try again!',        color: 'text-slate-600',  bg: 'bg-slate-50 border-slate-200' },
  medium: { label: '⭐⭐ Good start!',      color: 'text-blue-600',   bg: 'bg-blue-50 border-blue-200' },
  strong: { label: '⭐⭐⭐ Prompt Master!', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' },
};

function scorePrompt(prompt: string, challenge: Challenge): ScoreLevel {
  const lower = prompt.toLowerCase();
  const hasKeyword = challenge.keywords.some(k => lower.includes(k));
  const hasFormat  = challenge.formatWords.some(f => lower.includes(f));
  const hasDetail  = prompt.trim().length > 25;
  if (hasKeyword && hasFormat && hasDetail) return 'strong';
  if (hasKeyword || hasFormat) return 'medium';
  return 'weak';
}

export const PromptMasterGame = ({ onBack }: PromptMasterGameProps) => {
  const [idx, setIdx] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<{ score: ScoreLevel; response: string } | null>(null);
  const [scores, setScores] = useState<ScoreLevel[]>([]);
  const [done, setDone] = useState(false);

  const challenge = CHALLENGES[idx];

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    const score = scorePrompt(prompt, challenge);
    setResult({ score, response: challenge.responses[score] });
    setScores(prev => [...prev, score]);
  };

  const handleNext = () => {
    setPrompt('');
    setResult(null);
    if (idx + 1 < CHALLENGES.length) {
      setIdx(i => i + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setIdx(0); setPrompt(''); setResult(null); setScores([]); setDone(false); };

  if (done) {
    const stars = scores.reduce((s, sc) => s + (sc === 'strong' ? 3 : sc === 'medium' ? 2 : 1), 0);
    const max = CHALLENGES.length * 3;
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="text-6xl mb-4">🪄</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Prompt Master Complete!</h2>
        <p className="text-slate-600 mb-2">You scored <strong className="text-yellow-600">{stars} / {max} stars</strong></p>
        <div className="flex justify-center gap-0.5 text-2xl mb-6">
          {Array.from({ length: max }).map((_, i) => <span key={i}>{i < stars ? '⭐' : '☆'}</span>)}
        </div>
        <div className="bg-yellow-50 rounded-2xl p-5 text-left mb-6 text-sm text-yellow-900">
          <strong>The secret to great prompts 🪄</strong><br />
          The best prompts have a clear <em>goal</em>, a specific <em>subject</em>, a <em>format</em> you want, and sometimes <em>context</em> about who you are or what level you need.
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition">
            <RotateCcw className="w-4 h-4" /> Play Again
          </button>
          <button onClick={onBack} className="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition">
            Back to Games
          </button>
        </div>
      </div>
    );
  }

  const meta = result ? SCORE_META[result.score] : null;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back to Games
      </button>
      <div className="text-center mb-6">
        <div className="text-sm font-semibold text-yellow-600 mb-1">Challenge {idx + 1} / {CHALLENGES.length}</div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
          <div className="bg-yellow-400 h-2 rounded-full transition-all" style={{ width: `${(idx / CHALLENGES.length) * 100}%` }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-1">Your Challenge:</h2>
        <p className="text-slate-700 font-medium">{challenge.goal}</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-5">
        💡 <strong>Hint:</strong> {challenge.hint}
      </div>
      {!result ? (
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Your prompt:</label>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            rows={3}
            className="w-full border-2 border-slate-200 focus:border-yellow-400 rounded-xl p-3 text-slate-800 resize-none outline-none transition"
          />
          <button
            onClick={handleSubmit}
            disabled={!prompt.trim()}
            className="mt-3 w-full flex items-center justify-center gap-2 py-3 bg-yellow-500 hover:bg-yellow-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition"
          >
            <SendHorizontal className="w-4 h-4" /> Send to AI
          </button>
        </div>
      ) : (
        <div>
          <div className={`rounded-xl border p-5 mb-4 ${meta!.bg}`}>
            <div className={`font-bold text-lg mb-2 ${meta!.color}`}>{meta!.label}</div>
            <div className="text-sm font-semibold text-slate-600 mb-1">AI Response:</div>
            <div className="bg-white rounded-lg p-3 text-slate-800 text-sm whitespace-pre-line border border-slate-100">{result.response}</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 mb-4">
            💡 {challenge.tip}
          </div>
          {result.score !== 'strong' && (
            <button onClick={() => { setPrompt(''); setResult(null); }} className="w-full mb-3 py-2.5 border-2 border-yellow-400 text-yellow-700 rounded-xl font-semibold hover:bg-yellow-50 transition">
              🔄 Try a Better Prompt
            </button>
          )}
          <button onClick={handleNext} className="w-full py-2.5 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition">
            {idx + 1 < CHALLENGES.length ? 'Next Challenge →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};
