import React, { useState } from 'react';
import type { View } from '../../../types/course';
import { StudioNavLite } from '../StudioChrome';
import { LabelItGame } from './games/LabelItGame';
import { SpotTheBotGame } from './games/SpotTheBotGame';
import { PromptMasterGame } from './games/PromptMasterGame';
import { TrueOrMadeUpGame } from './games/TrueOrMadeUpGame';
import { ShareOrNotGame } from './games/ShareOrNotGame';

interface KidsGamesViewProps {
  setView: (view: View) => void;
  gameScores?: Record<string, number>;
  onGameScore?: (gameId: string, score: number) => void;
}

const GAMES = [
  {
    id: 'label-it' as const,
    max: 12, unit: 'labels',
    glyph: '◧',
    label: 'Label It!',
    desc: 'Sort examples into categories to teach an AI — just like real AI trainers do.',
    badge: 'Supervised Learning',
    color: '#5a4ec0',
  },
  {
    id: 'spot-the-bot' as const,
    max: 5, unit: 'spotted',
    glyph: '◉',
    label: 'Spot the Bot',
    desc: 'Read 5 messages and decide: was this written by a human or an AI?',
    badge: 'AI Detection',
    color: '#2c6db0',
  },
  {
    id: 'prompt-master' as const,
    max: 9, unit: 'stars',
    glyph: '◈',
    label: 'Prompt Master',
    desc: 'Write the perfect instruction to get exactly what you want from AI.',
    badge: 'Prompt Engineering',
    color: '#d96a3a',
  },
  {
    id: 'true-or-made-up' as const,
    max: 8, unit: 'facts',
    glyph: '◍',
    label: 'True or Made Up?',
    desc: 'An AI wrote these facts — but it makes things up with a straight face. Can you tell?',
    badge: 'Fact Checking',
    color: '#8a1e2e',
  },
  {
    id: 'share-or-not' as const,
    max: 8, unit: 'scenarios',
    glyph: '◐',
    label: 'Share or Don\'t Share?',
    desc: 'A chatbot is asking questions. Which answers are fine, and which are never OK?',
    badge: 'Staying Safe',
    color: '#0f8a7a',
  },
];

type GameId = typeof GAMES[number]['id'];

export const KidsGamesView = ({ setView, gameScores = {}, onGameScore }: KidsGamesViewProps) => {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  const finish = (id: string) => (score: number) => onGameScore?.(id, score);
  if (activeGame === 'label-it')      return <LabelItGame onBack={() => setActiveGame(null)} onFinish={finish('label-it')} />;
  if (activeGame === 'spot-the-bot')  return <SpotTheBotGame onBack={() => setActiveGame(null)} onFinish={finish('spot-the-bot')} />;
  if (activeGame === 'prompt-master') return <PromptMasterGame onBack={() => setActiveGame(null)} onFinish={finish('prompt-master')} />;
  if (activeGame === 'true-or-made-up') return <TrueOrMadeUpGame onBack={() => setActiveGame(null)} onFinish={finish('true-or-made-up')} />;
  if (activeGame === 'share-or-not')    return <ShareOrNotGame onBack={() => setActiveGame(null)} onFinish={finish('share-or-not')} />;

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
          Each game teaches a real AI concept used by engineers today. Five games, all in your browser.
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
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-studio-mono text-[11px] tracking-[0.5px]" style={{ color: g.color }}>Play now →</span>
                  {gameScores[g.id] !== undefined && (
                    <span className="font-studio-mono text-[10.5px] tracking-[0.5px] text-studio-ink-mute">Best: {gameScores[g.id]}/{g.max} {g.unit}</span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
