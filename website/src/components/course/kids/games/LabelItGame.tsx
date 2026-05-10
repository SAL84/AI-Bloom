import React, { useState } from 'react';
import { ChevronLeft, RotateCcw } from 'lucide-react';

interface LabelItGameProps {
  onBack: () => void;
}

type Category = 'Animal' | 'Vehicle' | 'Food';

const ITEMS = [
  { id: 1, emoji: '🐶', label: 'Dog',       category: 'Animal'  as Category },
  { id: 2, emoji: '🚗', label: 'Car',        category: 'Vehicle' as Category },
  { id: 3, emoji: '🍎', label: 'Apple',      category: 'Food'    as Category },
  { id: 4, emoji: '🐱', label: 'Cat',        category: 'Animal'  as Category },
  { id: 5, emoji: '✈️', label: 'Plane',      category: 'Vehicle' as Category },
  { id: 6, emoji: '🍕', label: 'Pizza',      category: 'Food'    as Category },
  { id: 7, emoji: '🐘', label: 'Elephant',   category: 'Animal'  as Category },
  { id: 8, emoji: '🚢', label: 'Ship',       category: 'Vehicle' as Category },
  { id: 9, emoji: '🍌', label: 'Banana',     category: 'Food'    as Category },
  { id: 10, emoji: '🦋', label: 'Butterfly', category: 'Animal'  as Category },
  { id: 11, emoji: '🚂', label: 'Train',     category: 'Vehicle' as Category },
  { id: 12, emoji: '🍦', label: 'Ice Cream', category: 'Food'    as Category },
];

const CATEGORIES: Category[] = ['Animal', 'Vehicle', 'Food'];

const CAT_STYLE: Record<Category, string> = {
  Animal:  'bg-green-100 border-green-400 text-green-800 hover:bg-green-200',
  Vehicle: 'bg-blue-100 border-blue-400 text-blue-800 hover:bg-blue-200',
  Food:    'bg-orange-100 border-orange-400 text-orange-800 hover:bg-orange-200',
};

const CAT_EMOJI: Record<Category, string> = {
  Animal: '🐾 Animal',
  Vehicle: '🚀 Vehicle',
  Food: '🍽️ Food',
};

export const LabelItGame = ({ onBack }: LabelItGameProps) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Category>>({});
  const [done, setDone] = useState(false);

  const item = ITEMS[current];
  const total = ITEMS.length;
  const correct = Object.entries(answers).filter(([id, cat]) =>
    ITEMS.find(i => i.id === Number(id))?.category === cat
  ).length;

  const handlePick = (cat: Category) => {
    const updated = { ...answers, [item.id]: cat };
    setAnswers(updated);
    if (current + 1 < total) {
      setCurrent(c => c + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setCurrent(0); setAnswers({}); setDone(false); };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Training Complete!</h2>
        <p className="text-slate-600 mb-2">You labeled <strong>{total}</strong> examples for the AI.</p>
        <p className="text-slate-600 mb-6">
          You got <strong className="text-emerald-600">{correct} / {total}</strong> correct!
          {correct === total && " Perfect score — you're a natural AI trainer! 🌟"}
        </p>
        <div className="bg-purple-50 rounded-2xl p-5 text-left mb-6 text-sm text-purple-900">
          <strong>What just happened? 🤔</strong><br />
          Real AI systems need humans to label millions of examples — just like you did! This is called <em>supervised learning</em>. Your labels teach the AI the difference between a dog and a pizza.
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition">
            <RotateCcw className="w-4 h-4" /> Play Again
          </button>
          <button onClick={onBack} className="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition">
            Back to Games
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 mb-6">
        <ChevronLeft className="w-4 h-4" /> Back to Games
      </button>
      <div className="text-center mb-8">
        <div className="text-sm font-semibold text-purple-600 mb-1">{current + 1} / {total}</div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-6">
          <div className="bg-purple-500 h-2 rounded-full transition-all" style={{ width: `${(current / total) * 100}%` }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-1">Help train the AI!</h2>
        <p className="text-slate-500 text-sm">What category does this belong to?</p>
      </div>
      <div className="text-center mb-8">
        <div className="text-8xl mb-3">{item.emoji}</div>
        <div className="text-2xl font-bold text-slate-900">{item.label}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handlePick(cat)}
            className={`py-4 px-3 rounded-2xl border-2 font-bold text-lg transition hover:scale-105 ${CAT_STYLE[cat]}`}
          >
            {CAT_EMOJI[cat]}
          </button>
        ))}
      </div>
    </div>
  );
};
