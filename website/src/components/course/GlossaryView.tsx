import React, { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';
import type { View } from '../../types/course';
import { COURSE } from '../../data/modules';

interface GlossaryViewProps {
  setView: (view: View) => void;
}

export const GlossaryView = ({ setView }: GlossaryViewProps) => {
  const [search, setSearch] = useState('');
  const filtered = COURSE.glossary.filter(g => g.term.toLowerCase().includes(search.toLowerCase()) || g.def.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <button onClick={() => setView({ type: 'home' })} className="text-sm text-slate-500 hover:text-slate-900 mb-4 flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> Course Home
      </button>
      <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
        <Search className="w-7 h-7 text-blue-500" /> Glossary
      </h1>
      <p className="text-slate-600 mb-5 text-sm">Quick reference for every term used in the course — keep it open during prospect calls.</p>

      <div className="relative mb-6">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search terms or definitions..." className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
      </div>

      <div className="space-y-3">
        {filtered.map((g, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="font-semibold text-slate-900">{g.term}</div>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && <div className="text-center text-slate-500 py-8">No matches.</div>}
      </div>
    </div>
  );
};
