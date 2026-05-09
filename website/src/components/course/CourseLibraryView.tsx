import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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

export const CourseLibraryView = ({ setView }: Props) => {
  const [heroImage] = useState(() => HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Free AI Education</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Are you ready to ride<br className="hidden sm:block" /> the AI journey?
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            AI is reshaping every industry. The people who understand it will lead. The ones who don't will follow. Your move.
          </p>

          <button
            onClick={() => setView({ type: 'home' })}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-7 py-3.5 rounded-xl text-base transition shadow-lg shadow-emerald-500/30 active:scale-95"
          >
            <Sparkles className="w-5 h-5" />
            Start: AI for Cybersecurity SEs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 text-center">
        <p className="text-xs text-slate-500">
          Built free. Because understanding AI shouldn't depend on who you work for.
        </p>
      </div>
    </div>
  );
};
