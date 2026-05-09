import React, { useState } from 'react';
import { FlaskConical, Hash, Layers, Thermometer, GitMerge } from 'lucide-react';
import type { View } from '../../types/course';
import { TokenizerPlayground } from './playgrounds/TokenizerPlayground';
import { ContextWindowPlayground } from './playgrounds/ContextWindowPlayground';
import { TemperaturePlayground } from './playgrounds/TemperaturePlayground';
import { EmbeddingsSimilarityPlayground } from './playgrounds/EmbeddingsSimilarityPlayground';

interface AIPlaygroundsViewProps {
  setView: (view: View) => void;
}

const TABS = [
  { id: 'tokenizer',   label: 'Tokeniser',       icon: Hash },
  { id: 'context',     label: 'Context Window',   icon: Layers },
  { id: 'temperature', label: 'Temperature',      icon: Thermometer },
  { id: 'embeddings',  label: 'Embeddings',       icon: GitMerge },
] as const;

type TabId = typeof TABS[number]['id'];

export const AIPlaygroundsView = ({ setView: _setView }: AIPlaygroundsViewProps) => {
  const [activeTab, setActiveTab] = useState<TabId>('tokenizer');

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center gap-3 mb-2">
        <FlaskConical className="w-7 h-7 text-emerald-500" />
        <h1 className="text-2xl font-bold text-slate-900">AI Playgrounds</h1>
      </div>
      <p className="text-sm text-slate-500 mb-6 leading-relaxed">
        Interactive demos that make abstract AI concepts tangible. No setup, no sign-in — just experiment.
      </p>

      <div className="flex gap-0 overflow-x-auto pb-px mb-6 border-b border-slate-200">
        {TABS.map(tab => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition -mb-px ${
                active
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {activeTab === 'tokenizer'   && <TokenizerPlayground />}
        {activeTab === 'context'     && <ContextWindowPlayground />}
        {activeTab === 'temperature' && <TemperaturePlayground />}
        {activeTab === 'embeddings'  && <EmbeddingsSimilarityPlayground />}
      </div>
    </div>
  );
};
