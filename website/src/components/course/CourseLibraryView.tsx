import React, { useState } from 'react';
import { Sparkles, Flame, Lightbulb, ArrowLeft } from 'lucide-react';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1655720408254-7e32b93fdbcb?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1591453089816-0fbb883e73a8?w=1400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&auto=format&fit=crop&q=80',
];

const INSPIRATIONAL = [
  'The best time to understand AI was five years ago. The second best time is right now.',
  'Everyone around you is already using AI. The question is whether you\'re shaping it or just reacting to it.',
  'AI won\'t replace you. Someone who understands AI might. Choose which side of that sentence you\'re on.',
  'You don\'t need to build AI to master it. You just need to understand it well enough to ask better questions than anyone else in the room.',
  'The people who thrive in the next decade won\'t be the ones who feared AI — they\'ll be the ones who got curious first.',
  'Every expert was once a beginner who decided not to stay one.',
  'Understanding AI is not a technical skill anymore. It\'s a leadership skill.',
  'The most powerful thing you can learn today is how to think alongside machines — and know when not to trust them.',
  'AI is moving fast. The gap between those who understand it and those who don\'t is widening every month. Which side are you on?',
  'Curiosity about how things work has always been the unfair advantage. AI is just the latest frontier.',
];

const AI_FACTS = [
  { label: 'Hot take', text: 'GPT stands for "Generative Pre-trained Transformer." Not "Generally Pretty Terrifying," though both apply depending on the day.' },
  { label: 'Fun fact', text: 'The attention mechanism in transformers was introduced in 2017. Before that, AI had to read sentences like a toddler — left to right, one word at a time, forgetting the beginning by the end.' },
  { label: 'Reality check', text: 'LLMs don\'t "know" anything. They\'re very confident pattern-completion machines. Your overconfident colleague is basically a human LLM.' },
  { label: 'True story', text: 'The term "hallucination" for AI making things up was borrowed from psychology. Turns out the most human thing about AI is its relationship with facts.' },
  { label: 'Did you know', text: 'A single training run for a frontier model can cost tens of millions of dollars. And it still can\'t reliably count the R\'s in "strawberry."' },
  { label: 'Perspective', text: 'RAG (Retrieval-Augmented Generation) is essentially giving an AI a cheat sheet during the exam. Somehow this is considered cheating for students but innovation in AI.' },
  { label: 'Fun fact', text: 'The word "robot" comes from the Czech word "robota," meaning forced labor. We\'ve been worried about this for over 100 years. The robots are still doing the paperwork.' },
  { label: 'Hot take', text: 'Prompt engineering is the art of asking a very powerful computer the right question. We have spent billions of dollars to create something we have to talk to nicely.' },
  { label: 'True story', text: 'AI models are trained on internet text, which means they\'ve read more Reddit arguments than any human alive. Make of that what you will.' },
  { label: 'Reality check', text: 'An "agent" in AI just means a model that can use tools and remember what it did. Congratulations — you\'ve been an agent your whole career.' },
];

export const CourseLibraryView = ({ setView }: Props) => {
  const [heroImage] = useState(() => HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]);
  const [fact] = useState(() => AI_FACTS[Math.floor(Math.random() * AI_FACTS.length)]);
  const [quote] = useState(() => INSPIRATIONAL[Math.floor(Math.random() * INSPIRATIONAL.length)]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '65vh' }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Free AI Education</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Are you ready to ride<br className="hidden sm:block" /> the AI journey?
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            AI is reshaping every industry. The people who understand it will lead.<br className="hidden sm:block" />
            The ones who don't will follow.
          </p>

          {/* Course picker nudge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-xl text-sm font-medium">
            <ArrowLeft className="w-4 h-4 text-blue-300 flex-shrink-0" />
            Pick your course from the menu on the left
          </div>
        </div>
      </div>

      {/* Cards strip */}
      <div className="bg-slate-900 border-t border-slate-800 flex-1">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Think about it */}
          <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Think about it</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">{quote}</p>
          </div>

          {/* Rotating AI fact */}
          <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{fact.label}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{fact.text}</p>
          </div>

        </div>

        <div className="border-t border-slate-800 px-6 py-4 text-center">
          <p className="text-xs text-slate-600">
            Built free. Because understanding AI shouldn't depend on who you work for.
          </p>
        </div>
      </div>
    </div>
  );
};
