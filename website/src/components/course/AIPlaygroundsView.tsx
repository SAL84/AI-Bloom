import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { View } from '../../types/course';
import { TokenizerPlayground } from './playgrounds/TokenizerPlayground';
import { ContextWindowPlayground } from './playgrounds/ContextWindowPlayground';
import { TemperaturePlayground } from './playgrounds/TemperaturePlayground';
import { EmbeddingsSimilarityPlayground } from './playgrounds/EmbeddingsSimilarityPlayground';

interface AIPlaygroundsViewProps {
  setView: (view: View) => void;
}

const TABS = [
  { id: 'tokenizer',   label: 'Tokeniser',      glyph: '§' },
  { id: 'context',     label: 'Context Window',  glyph: '¶' },
  { id: 'temperature', label: 'Temperature',     glyph: '~' },
  { id: 'embeddings',  label: 'Embeddings',      glyph: '∿' },
] as const;

type TabId = typeof TABS[number]['id'];

export const AIPlaygroundsView = ({ setView }: AIPlaygroundsViewProps) => {
  const [activeTab, setActiveTab] = useState<TabId>('tokenizer');

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['AI Playgrounds']} setView={setView} />

      <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule" style={{ background: '#3f8a5e' }}>
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Try things · break things · no API keys
        </div>
        <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-white leading-[1.0] mb-3">
          AI Playgrounds
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
          Runnable toys that make abstract concepts tangible. Four experiments, all in your browser.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 pt-5 lg:pt-7 pb-0 border-b border-studio-rule bg-studio-paper">
        <div className="flex gap-0 overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
          {TABS.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 lg:px-5 py-3 font-studio-sans text-[13px] lg:text-[13.5px] border-b-2 transition-all duration-100 whitespace-nowrap -mb-px flex-shrink-0"
                style={isActive
                  ? { borderBottomColor: '#3f8a5e', color: '#1d1916', fontWeight: 500 }
                  : { borderBottomColor: 'transparent', color: '#8c8273' }}
              >
                <span className="font-studio-serif italic text-[16px]">{tab.glyph}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-8">
          {activeTab === 'tokenizer'   && <TokenizerPlayground />}
          {activeTab === 'context'     && <ContextWindowPlayground />}
          {activeTab === 'temperature' && <TemperaturePlayground />}
          {activeTab === 'embeddings'  && <EmbeddingsSimilarityPlayground />}
        </div>
      </div>

      <StudioFooter />
    </div>
  );
};
