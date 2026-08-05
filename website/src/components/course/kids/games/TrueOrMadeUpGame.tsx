import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface TrueOrMadeUpGameProps {
  onBack: () => void;
}

interface Statement {
  id: number;
  text: string;
  isTrue: boolean;
  hint: string;
}

const ROUNDS_PER_GAME = 8;

const STATEMENTS: Statement[] = [
  {
    id: 1,
    text: "Octopuses have three hearts.",
    isTrue: true,
    hint: "Really true! Two hearts pump blood to the gills, and one pumps it to the rest of the body. Sometimes the truth is weirder than anything made up!",
  },
  {
    id: 2,
    text: "Goldfish can only remember things for three seconds.",
    isTrue: false,
    hint: "This is a famous myth! Scientists have trained goldfish to do tricks and remember them for months. An AI can repeat a myth because so many people have written it down.",
  },
  {
    id: 3,
    text: "Honey found in ancient Egyptian tombs was still safe to eat after thousands of years.",
    isTrue: true,
    hint: "Really true! Honey almost never spoils because it has very little water and is naturally acidic, so germs can't grow in it.",
  },
  {
    id: 4,
    text: "Humans only use 10% of their brains.",
    isTrue: false,
    hint: "A famous myth! Brain scans show we use pretty much all of our brain — just different parts for different jobs. This myth is everywhere, so AI has read it a lot.",
  },
  {
    id: 5,
    text: "Venus is hotter than Mercury, even though Mercury is closer to the Sun.",
    isTrue: true,
    hint: "Really true! Venus has a super-thick atmosphere that traps heat like a blanket, making it around 460°C — hotter than Mercury.",
  },
  {
    id: 6,
    text: "The Great Wall of China is easy to see from space with just your eyes.",
    isTrue: false,
    hint: "A famous myth! Astronauts say the wall is too narrow to pick out with the naked eye from orbit. Cities at night are much easier to spot.",
  },
  {
    id: 7,
    text: "Bananas are berries, but strawberries are not.",
    isTrue: true,
    hint: "Really true! In botany (plant science), a berry grows from one flower with one ovary — bananas qualify, strawberries don't. Weird but real!",
  },
  {
    id: 8,
    text: "Lightning never strikes the same place twice.",
    isTrue: false,
    hint: "A famous myth! Tall buildings get hit all the time — the Empire State Building is struck by lightning about 20 times every year.",
  },
  {
    id: 9,
    text: "A day on Venus is longer than a year on Venus.",
    isTrue: true,
    hint: "Really true! Venus spins so slowly that one full spin (a day) takes longer than one full trip around the Sun (a year). Space is strange!",
  },
  {
    id: 10,
    text: "Eating carrots gives you super night vision.",
    isTrue: false,
    hint: "A famous myth! Carrots are healthy for your eyes, but they can't make you see in the dark. This story was actually spread on purpose during World War II.",
  },
  {
    id: 11,
    text: "Sharks were swimming in the oceans before trees existed on land.",
    isTrue: true,
    hint: "Really true! Sharks appeared around 450 million years ago — tens of millions of years before the first real trees grew.",
  },
  {
    id: 12,
    text: "Cats can see Wi-Fi signals as a faint blue glow.",
    isTrue: false,
    hint: "We made this one up — but it sounds sciency, right? That's the trick: a wrong 'fact' can sound just as confident as a real one. Wi-Fi is invisible to cats and humans alike.",
  },
];

function shuffledRounds(): Statement[] {
  const pool = [...STATEMENTS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, ROUNDS_PER_GAME);
}

export const TrueOrMadeUpGame = ({ onBack }: TrueOrMadeUpGameProps) => {
  const [rounds, setRounds] = useState<Statement[]>(() => shuffledRounds());
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const item = rounds[current];
  const score = answers.filter((a, i) => a === rounds[i].isTrue).length;
  const lastAnswer = answers[answers.length - 1];
  const wasCorrect = revealed && lastAnswer === item.isTrue;

  const handleGuess = (guessTrue: boolean) => {
    setAnswers(prev => [...prev, guessTrue]);
    setRevealed(true);
  };

  const handleNext = () => {
    setRevealed(false);
    if (current + 1 < rounds.length) {
      setCurrent(c => c + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setRounds(shuffledRounds());
    setCurrent(0);
    setAnswers([]);
    setRevealed(false);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / rounds.length) * 100);
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🔎' : pct >= 60 ? '🧐' : '😅'}</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {pct >= 80 ? 'Fact-Checking Champion!' : pct >= 60 ? 'Sharp thinking!' : 'Tricky ones, right?'}
        </h2>
        <p className="text-slate-600 mb-6">You got <strong className="text-purple-600">{score} / {rounds.length}</strong> right.</p>
        <div className="bg-purple-50 rounded-2xl p-5 text-left mb-6 text-sm text-purple-900">
          <strong>The lesson 🔎</strong><br />
          Did you notice? The AI sounded exactly as sure when it was wrong as when it was right. AI doesn't get a nervous voice when it makes a mistake! That's why smart people double-check surprising "facts" — in a book, on a trusted website, or with an adult — before repeating them.
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
      <div className="text-center mb-6">
        <div className="text-sm font-semibold text-purple-600 mb-1">{current + 1} / {rounds.length}</div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
          <div className="bg-purple-500 h-2 rounded-full transition-all" style={{ width: `${(current / rounds.length) * 100}%` }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">True or Made Up? 🔎</h2>
        <p className="text-sm text-slate-500">An AI wrote this. Is it a real fact?</p>
      </div>
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 mb-6 text-slate-800 text-lg leading-relaxed">
        <span className="text-2xl mr-2">🤖</span>
        <span className="italic">"{item.text}"</span>
      </div>
      {!revealed ? (
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => handleGuess(true)} className="flex flex-col items-center gap-2 py-5 bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 rounded-2xl font-bold text-emerald-800 text-lg transition hover:scale-105">
            <CheckCircle2 className="w-8 h-8" /> True
          </button>
          <button onClick={() => handleGuess(false)} className="flex flex-col items-center gap-2 py-5 bg-rose-50 border-2 border-rose-300 hover:border-rose-500 rounded-2xl font-bold text-rose-800 text-lg transition hover:scale-105">
            <XCircle className="w-8 h-8" /> Made Up
          </button>
        </div>
      ) : (
        <div className={`rounded-2xl p-5 ${wasCorrect ? 'bg-emerald-50 border border-emerald-300' : 'bg-red-50 border border-red-300'}`}>
          <div className="font-bold text-lg mb-1">
            {wasCorrect ? '✅ Correct!' : '❌ Not quite!'}
            {' '}<span className="font-normal text-base">This one is <strong>{item.isTrue ? 'TRUE ✅' : 'MADE UP 🚫'}</strong></span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{item.hint}</p>
          <button onClick={handleNext} className="w-full py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition">
            {current + 1 < rounds.length ? 'Next Statement →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};
