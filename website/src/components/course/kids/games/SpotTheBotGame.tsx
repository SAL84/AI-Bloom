import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, User, Bot } from 'lucide-react';

interface SpotTheBotGameProps {
  onBack: () => void;
}

const MESSAGES = [
  {
    id: 1,
    text: "omg I literally just spilled my coffee all over my homework lol send help",
    isBot: false,
    hint: "Casual language, real panic, 'lol send help' — this is how humans talk when stressed!",
  },
  {
    id: 2,
    text: "Certainly! I would be happy to assist you. Photosynthesis is the process by which plants convert light energy into chemical energy, storing it in glucose molecules through a series of complex biochemical reactions.",
    isBot: true,
    hint: "Starts with 'Certainly!', perfectly formal, zero personality — classic AI response patterns.",
  },
  {
    id: 3,
    text: "wait wait wait did you see the ending?? I actually screamed out loud my whole family thought I was dying 😭",
    isBot: false,
    hint: "Excitement, physical reaction, family mention, emojis used naturally — very human!",
  },
  {
    id: 4,
    text: "Great question! There are several factors to consider when choosing a programming language. Python is widely used for data science, while JavaScript dominates web development.",
    isBot: true,
    hint: "Starts with 'Great question!', balanced, neutral, lists multiple options without a personal take.",
  },
  {
    id: 5,
    text: "idk man I've been feeling really off lately and I can't even explain it, just everything feels heavy you know?",
    isBot: false,
    hint: "Vague, emotional, vulnerable — AI is trained to be helpful and clear, not uncertain like this.",
  },
];

export const SpotTheBotGame = ({ onBack }: SpotTheBotGameProps) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const msg = MESSAGES[current];
  const score = answers.filter((a, i) => a === MESSAGES[i].isBot).length;
  const lastAnswer = answers[answers.length - 1];
  const wasCorrect = revealed && lastAnswer === msg.isBot;

  const handleGuess = (guessBot: boolean) => {
    setAnswers(prev => [...prev, guessBot]);
    setRevealed(true);
  };

  const handleNext = () => {
    setRevealed(false);
    if (current + 1 < MESSAGES.length) {
      setCurrent(c => c + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => { setCurrent(0); setAnswers([]); setRevealed(false); setDone(false); };

  if (done) {
    const pct = Math.round((score / MESSAGES.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🕵️' : pct >= 60 ? '🤔' : '🤖'}</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {pct >= 80 ? 'AI Detective!' : pct >= 60 ? 'Not bad, detective!' : 'The bots fooled you!'}
        </h2>
        <p className="text-slate-600 mb-6">You spotted <strong className="text-blue-600">{score} / {MESSAGES.length}</strong> correctly.</p>
        <div className="bg-blue-50 rounded-2xl p-5 text-left mb-6 text-sm text-blue-900">
          <strong>The tells 🔍</strong><br />
          AI text is often perfectly grammatical, neutral in tone, and starts with phrases like "Certainly!" or "Great question!" Humans use slang, emotions, imperfect grammar — especially when stressed or excited.
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
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
      <div className="text-center mb-6">
        <div className="text-sm font-semibold text-blue-600 mb-1">{current + 1} / {MESSAGES.length}</div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
          <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${(current / MESSAGES.length) * 100}%` }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Human or Bot? 🤔</h2>
        <p className="text-sm text-slate-500">Who wrote this message?</p>
      </div>
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 mb-6 text-slate-800 text-lg leading-relaxed italic">
        "{msg.text}"
      </div>
      {!revealed ? (
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => handleGuess(false)} className="flex flex-col items-center gap-2 py-5 bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 rounded-2xl font-bold text-emerald-800 text-lg transition hover:scale-105">
            <User className="w-8 h-8" /> Human
          </button>
          <button onClick={() => handleGuess(true)} className="flex flex-col items-center gap-2 py-5 bg-blue-50 border-2 border-blue-300 hover:border-blue-500 rounded-2xl font-bold text-blue-800 text-lg transition hover:scale-105">
            <Bot className="w-8 h-8" /> AI Bot
          </button>
        </div>
      ) : (
        <div className={`rounded-2xl p-5 ${wasCorrect ? 'bg-emerald-50 border border-emerald-300' : 'bg-red-50 border border-red-300'}`}>
          <div className="font-bold text-lg mb-1">
            {wasCorrect ? '✅ Correct!' : '❌ Not quite!'}
            {' '}<span className="font-normal text-base">This was written by a <strong>{msg.isBot ? 'Bot 🤖' : 'Human 👤'}</strong></span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{msg.hint}</p>
          <button onClick={handleNext} className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
            {current + 1 < MESSAGES.length ? 'Next Message →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};
