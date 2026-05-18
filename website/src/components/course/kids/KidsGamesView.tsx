import React, { useState } from 'react';
import type { View } from '../../../types/course';
import { StudioNavLite } from '../StudioChrome';
import { LabelItGame } from './games/LabelItGame';
import { SpotTheBotGame } from './games/SpotTheBotGame';
import { PromptMasterGame } from './games/PromptMasterGame';

interface KidsGamesViewProps {
  setView: (view: View) => void;
}

const GAMES = [
  {
    id: 'label-it' as const,
    glyph: '◧',
    label: 'Label It!',
    desc: 'Sort examples into categories to teach an AI — just like real AI trainers do.',
    badge: 'Supervised Learning',
    color: '#5a4ec0',
  },
  {
    id: 'spot-the-bot' as const,
    glyph: '◉',
    label: 'Spot the Bot',
    desc: 'Read 5 messages and decide: was this written by a human or an AI?',
    badge: 'AI Detection',
    color: '#2c6db0',
  },
  {
    id: 'prompt-master' as const,
    glyph: '◈',
    label: 'Prompt Master',
    desc: 'Write the perfect instruction to get exactly what you want from AI.',
    badge: 'Prompt Engineering',
    color: '#d96a3a',
  },
];

type GameId = typeof GAMES[number]['id'];

export const KidsGamesView = ({ setView }: KidsGamesViewProps) => {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  if (activeGame === 'label-it')      return <LabelItGame onBack={() => setActiveGame(null)} />;
  if (activeGame === 'spot-the-bot')  return <SpotTheBotGame onBack={() => setActiveGame(null)} />;
  if (activeGame === 'prompt-master') return <PromptMasterGame onBack={() => setActiveGame(null)} />;

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['AI for Kids', 'Games']} crumbViews={[{ type: 'home', courseId: 'ai-kids' }, undefined]} setView={setView} />

      <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule" style={{ background: '#d96a3a' }}>
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Learn by playing · ages 8–14
        </div>
        <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-white leading-[1.0] mb-3">
          AI Games
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
          Each game teaches a real AI concept used by engineers today. Three games, all in your browser.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-5 lg:mb-6">◆ Pick a game</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {GAMES.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id)}
              className="text-left bg-studio-paper border border-studio-rule rounded-[4px] overflow-hidden hover:-translate-y-px hover:border-studio-ink-dim transition-all duration-200 cursor-pointer"
            >
              <div className="px-6 py-5 flex justify-between items-center" style={{ background: g.color }}>
                <div className="font-studio-serif italic text-[48px] leading-none text-white font-normal">{g.glyph}</div>
                <div className="font-studio-mono text-[10px] tracking-[1.4px] uppercase" style={{ color: 'rgba(255,255,255,0.7)' }}>{g.badge}</div>
              </div>
              <div className="px-6 py-5">
                <div className="font-studio-display text-[22px] font-normal text-studio-ink mb-2 leading-[1.1]">{g.label}</div>
                <p className="font-studio-sans text-[13px] text-studio-ink-dim leading-[1.55]">{g.desc}</p>
                <div className="mt-4 font-studio-mono text-[11px] tracking-[0.5px]" style={{ color: g.color }}>Play now →</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
