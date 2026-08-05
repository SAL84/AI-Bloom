import React, { useState } from 'react';
import { ChevronLeft, RotateCcw, ThumbsUp, Users, ShieldAlert } from 'lucide-react';

interface ShareOrNotGameProps {
  onBack: () => void;
}

type Answer = 'fine' | 'grownup' | 'never';

interface Scenario {
  id: number;
  text: string;
  answer: Answer;
  hint: string;
}

const ROUNDS_PER_GAME = 8;

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    text: "A homework helper app asks for your first name so it can say hi to you.",
    answer: 'fine',
    hint: "Your first name by itself is okay — lots of people share the same one, so it doesn't tell strangers who or where you are. Just keep it to your first name only.",
  },
  {
    id: 2,
    text: "A game chatbot asks for your home address so it can 'send you a prize.'",
    answer: 'never',
    hint: "A chatbot never needs to know where you live — and real prizes don't work this way. Your address stays private, always. If it keeps asking, tell a grown-up.",
  },
  {
    id: 3,
    text: "An AI drawing app asks you to pick a fun made-up nickname to use in the app.",
    answer: 'fine',
    hint: "A made-up nickname is a great idea! It lets you play and chat without giving away your real identity. SparkleDragon99 tells nobody anything. 🐉",
  },
  {
    id: 4,
    text: "An AI asks you to upload a photo of yourself in your school uniform so it can rate it.",
    answer: 'never',
    hint: "A school uniform tells strangers exactly which school you go to — that's like sharing your location. Photos with school logos, street signs, or your house stay private.",
  },
  {
    id: 5,
    text: "A chatbot says it can 'keep your account extra safe' if you tell it your password.",
    answer: 'never',
    hint: "Passwords are for you (and maybe your parents) only — never for chatbots, apps, or even friends. Anything that asks for your password is a red flag. 🚩",
  },
  {
    id: 6,
    text: "A quiz app asks for your favourite colour so it can decorate the screen for you.",
    answer: 'fine',
    hint: "Totally fine! Your favourite colour, food, or animal doesn't tell anyone who you are or where to find you. Sharing likes and dislikes is safe.",
  },
  {
    id: 7,
    text: "An app asks for your age so it can show you the right games for kids your age.",
    answer: 'grownup',
    hint: "Apps sometimes really do need your age — but a grown-up can check if the app is trustworthy first. Asking is the smart move here, not the scared one.",
  },
  {
    id: 8,
    text: "A chatbot in a game says you can buy a cool upgrade — it just needs a card number.",
    answer: 'grownup',
    hint: "Money decisions always go through a grown-up — it's their card and their call! Some apps make buying things look easy on purpose. Ask first, every time. 💳",
  },
  {
    id: 9,
    text: "A photo filter app asks you to upload a selfie so it can turn you into a cartoon.",
    answer: 'grownup',
    hint: "Photo apps can be fun, but your face is part of your identity, and some apps keep the pictures you upload. Let a grown-up check the app before you send a selfie.",
  },
  {
    id: 10,
    text: "A study buddy chatbot asks for your full name and your school's name for a 'class leaderboard.'",
    answer: 'never',
    hint: "Your full name plus your school pinpoints exactly who you are and where to find you every day. A leaderboard only needs a nickname — real ones work that way too!",
  },
];

const CHOICES: { key: Answer; label: string; icon: typeof ThumbsUp; classes: string }[] = [
  { key: 'fine',    label: 'Fine to share',       icon: ThumbsUp,    classes: 'bg-emerald-50 border-emerald-300 hover:border-emerald-500 text-emerald-800' },
  { key: 'grownup', label: 'Ask a grown-up first', icon: Users,       classes: 'bg-amber-50 border-amber-300 hover:border-amber-500 text-amber-800' },
  { key: 'never',   label: 'Never share',          icon: ShieldAlert, classes: 'bg-rose-50 border-rose-300 hover:border-rose-500 text-rose-800' },
];

const ANSWER_LABELS: Record<Answer, string> = {
  fine: 'Fine to share 👍',
  grownup: 'Ask a grown-up first 🧑‍🤝‍🧑',
  never: 'Never share 🛡️',
};

function shuffledRounds(): Scenario[] {
  const pool = [...SCENARIOS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, ROUNDS_PER_GAME);
}

export const ShareOrNotGame = ({ onBack }: ShareOrNotGameProps) => {
  const [rounds, setRounds] = useState<Scenario[]>(() => shuffledRounds());
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const scenario = rounds[current];
  const score = answers.filter((a, i) => a === rounds[i].answer).length;
  const lastAnswer = answers[answers.length - 1];
  const wasCorrect = revealed && lastAnswer === scenario.answer;

  const handleGuess = (choice: Answer) => {
    setAnswers(prev => [...prev, choice]);
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
        <div className="text-6xl mb-4">{pct >= 80 ? '🛡️' : pct >= 60 ? '🙂' : '💪'}</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {pct >= 80 ? 'Privacy Pro!' : pct >= 60 ? 'Great instincts!' : 'You\'re learning fast!'}
        </h2>
        <p className="text-slate-600 mb-6">You got <strong className="text-teal-600">{score} / {rounds.length}</strong> right.</p>
        <div className="bg-teal-50 rounded-2xl p-5 text-left mb-6 text-sm text-teal-900">
          <strong>The lesson 🛡️</strong><br />
          A chatbot never needs to know where you live, what your password is, or which school you go to — it can help you just fine without any of that. And here's a secret: asking a grown-up first isn't babyish at all. It's what smart, confident people do when something feels even a little bit off.
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition">
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
        <div className="text-sm font-semibold text-teal-600 mb-1">{current + 1} / {rounds.length}</div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
          <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${(current / rounds.length) * 100}%` }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Share or Don't Share? 🛡️</h2>
        <p className="text-sm text-slate-500">What's the smart move here?</p>
      </div>
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 mb-6 text-slate-800 text-lg leading-relaxed">
        <span className="text-2xl mr-2">💬</span>{scenario.text}
      </div>
      {!revealed ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CHOICES.map(({ key, label, icon: Icon, classes }) => (
            <button
              key={key}
              onClick={() => handleGuess(key)}
              className={`flex flex-col items-center gap-2 py-5 px-2 border-2 rounded-2xl font-bold text-base transition hover:scale-105 ${classes}`}
            >
              <Icon className="w-8 h-8" /> {label}
            </button>
          ))}
        </div>
      ) : (
        <div className={`rounded-2xl p-5 ${wasCorrect ? 'bg-emerald-50 border border-emerald-300' : 'bg-red-50 border border-red-300'}`}>
          <div className="font-bold text-lg mb-1">
            {wasCorrect ? '✅ Correct!' : '❌ Not quite!'}
            {' '}<span className="font-normal text-base">The smart move: <strong>{ANSWER_LABELS[scenario.answer]}</strong></span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{scenario.hint}</p>
          <button onClick={handleNext} className="w-full py-2.5 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition">
            {current + 1 < rounds.length ? 'Next Scenario →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
};
