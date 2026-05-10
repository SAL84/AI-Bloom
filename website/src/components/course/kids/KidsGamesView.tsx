import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import type { View } from '../../../types/course';
import { LabelItGame } from './games/LabelItGame';
import { SpotTheBotGame } from './games/SpotTheBotGame';
import { PromptMasterGame } from './games/PromptMasterGame';

interface KidsGamesViewProps {
  setView: (view: View) => void;
}

const GAMES = [
  {
    id: 'label-it' as const,
    emoji: '🏷️',
    label: 'Label It!',
    desc: 'Sort examples into categories to teach an AI — just like real AI trainers do.',
    color: 'hover:border-purple-400',
    badge: 'Supervised Learning',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'spot-the-bot' as const,
    emoji: '🤖',
    label: 'Spot the Bot',
    desc: 'Read 5 messages and decide: was this written by a human or an AI?',
    color: 'hover:border-blue-400',
    badge: 'AI Detection',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'prompt-master' as const,
    emoji: '🪄',
    label: 'Prompt Master',
    desc: 'Write the perfect instruction to get exactly what you want from AI.',
    color: 'hover:border-yellow-400',
    badge: 'Prompt Engineering',
    badgeColor: 'bg-yellow-100 text-yellow-700',
  },
];

type GameId = typeof GAMES[number]['id'];

export const KidsGamesView = ({ setView: _setView }: KidsGamesViewProps) => {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  if (activeGame === 'label-it')     return <LabelItGame onBack={() => setActiveGame(null)} />;
  if (activeGame === 'spot-the-bot') return <SpotTheBotGame onBack={() => setActiveGame(null)} />;
  if (activeGame === 'prompt-master') return <PromptMasterGame onBack={() => setActiveGame(null)} />;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-2">
        <Gamepad2 className="w-7 h-7 text-purple-500" />
        <h1 className="text-2xl font-bold text-slate-900">AI Games</h1>
      </div>
      <p className="text-sm text-slate-500 mb-8 leading-relaxed">
        Learn how AI really works — by playing! Each game teaches you a real AI concept used by engineers today.
      </p>
      <div className="grid gap-5 sm:grid-cols-3">
        {GAMES.map(g => (
          <button
            key={g.id}
            onClick={() => setActiveGame(g.id)}
            className={`text-left bg-white border-2 border-slate-200 ${g.color} rounded-2xl p-6 transition group hover:shadow-md`}
          >
            <div className="text-5xl mb-4">{g.emoji}</div>
            <div className="font-bold text-slate-900 text-lg group-hover:text-slate-700 mb-1">{g.label}</div>
            <div className="text-sm text-slate-500 mb-4 leading-snug">{g.desc}</div>
            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${g.badgeColor}`}>
              {g.badge}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
