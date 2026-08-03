import React, { useState } from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { View } from '../../types/course';
import { TokenizerPlayground } from './playgrounds/TokenizerPlayground';
import { ContextWindowPlayground } from './playgrounds/ContextWindowPlayground';
import { TemperaturePlayground } from './playgrounds/TemperaturePlayground';
import { EmbeddingsSimilarityPlayground } from './playgrounds/EmbeddingsSimilarityPlayground';
import { BaseRatePlayground } from './playgrounds/BaseRatePlayground';
import { NextWordPlayground } from './playgrounds/NextWordPlayground';
import { EvalConfidencePlayground } from './playgrounds/EvalConfidencePlayground';
import { AgentAnatomy } from './agentic/AgentAnatomy';
import { AgentScenario } from './agentic/AgentScenario';
import type { ScenarioStep } from './agentic/AgentScenario';
import { RESEARCH_ASSISTANT, TRIP_PLANNER, BUG_INVESTIGATION } from './agentic/general-scenarios';

interface AIPlaygroundsViewProps {
  setView: (view: View) => void;
  initialSection?: 'playgrounds' | 'agentic';
}

// ── Playgrounds tab config ───────────────────────────────────────────────────
const PLAYGROUND_TABS = [
  { id: 'tokenizer',   label: 'Tokeniser',      glyph: '§' },
  { id: 'context',     label: 'Context Window',  glyph: '¶' },
  { id: 'temperature', label: 'Temperature',     glyph: '~' },
  { id: 'embeddings',  label: 'Embeddings',      glyph: '∿' },
  { id: 'nextword',    label: 'Next Word',       glyph: '→' },
  { id: 'baserate',    label: 'Base Rate',       glyph: '%' },
  { id: 'evalci',      label: 'Eval Confidence', glyph: '±' },
] as const;
type PlaygroundTabId = typeof PLAYGROUND_TABS[number]['id'];

// ── Agentic tab config ───────────────────────────────────────────────────────
const AGENTIC_TABS = [
  { id: 'anatomy',  label: 'The Agent Loop',    glyph: '◎', desc: 'How agents think and act' },
  { id: 'research', label: 'Research Assistant', glyph: '◍', desc: 'Sources disagree — the agent notices and digs deeper' },
  { id: 'trip',     label: 'Trip Planner',      glyph: '◔', desc: 'Constraints, a wrong turn, and a human approval gate' },
  { id: 'bug',      label: 'Bug Investigation', glyph: '◌', desc: 'A hypothesis that turns out wrong, then the real cause' },
] as const;
type AgenticTabId = typeof AGENTIC_TABS[number]['id'];

// ── Agentic scenario data ────────────────────────────────────────────────────

// ── View ──────────────────────────────────────────────────────────────────────

const SECTION_META = {
  playgrounds: {
    color: '#3f8a5e',
    kicker: 'Try things · break things · no API keys',
    title: 'AI Studio',
    subtitle: 'Playgrounds',
    blurb: 'Runnable toys that make abstract concepts tangible. Four experiments, all in your browser.',
  },
  agentic: {
    color: '#5d5045',
    kicker: 'Field notes · not yet a course',
    title: 'AI Studio',
    subtitle: 'Agentic AI',
    blurb: "Tools, memory, the loop. A working developer's tour of why agents fail in production — and three live scenarios.",
  },
} as const;

export const AIPlaygroundsView = ({ setView, initialSection = 'playgrounds' }: AIPlaygroundsViewProps) => {
  const [section, setSection] = useState<'playgrounds' | 'agentic'>(initialSection);
  const [playgroundTab, setPlaygroundTab] = useState<PlaygroundTabId>('tokenizer');
  const [agenticTab, setAgenticTab] = useState<AgenticTabId>('anatomy');
  const meta = SECTION_META[section];
  const activeAgentic = AGENTIC_TABS.find(t => t.id === agenticTab)!;

  return (
    <div className="bg-studio-bg min-h-screen">
      <StudioNavLite crumbs={['AI Studio', meta.subtitle]} crumbViews={[undefined, undefined]} setView={setView} />

      <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule transition-colors duration-200" style={{ background: meta.color }}>
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {meta.kicker}
        </div>
        <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-white leading-[1.0] mb-3">
          AI <span className="font-studio-serif italic">Studio</span>
          <span className="font-studio-serif italic font-normal ml-3 text-[20px] sm:text-[24px] lg:text-[30px]" style={{ color: 'rgba(255,255,255,0.65)' }}>· {meta.subtitle}</span>
        </h1>
        <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
          {meta.blurb}
        </p>
      </div>

      {/* Section toggle */}
      <div className="px-4 sm:px-6 lg:px-12 pt-4 lg:pt-5 pb-0 border-b border-studio-rule bg-studio-paper">
        <div className="flex gap-2 items-center">
          {(['playgrounds', 'agentic'] as const).map(s => {
            const isActive = s === section;
            const sMeta = SECTION_META[s];
            return (
              <button
                key={s}
                onClick={() => setSection(s)}
                className="font-studio-sans text-[12.5px] lg:text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-150 whitespace-nowrap"
                style={isActive
                  ? { background: sMeta.color, color: '#fff' }
                  : { background: 'transparent', color: '#8c8273', border: '1px solid #e8dfc8' }}
              >
                {s === 'playgrounds' ? 'AI Playgrounds' : 'Agentic AI'}
              </button>
            );
          })}
        </div>

        {/* Sub-tab strip */}
        <div className="flex gap-0 overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 mt-3 lg:mt-4">
          {section === 'playgrounds'
            ? PLAYGROUND_TABS.map(tab => {
                const isActive = playgroundTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setPlaygroundTab(tab.id)}
                    className="flex items-center gap-2 px-4 lg:px-5 py-3 font-studio-sans text-[13px] lg:text-[13.5px] border-b-2 transition-all duration-100 whitespace-nowrap -mb-px flex-shrink-0"
                    style={isActive
                      ? { borderBottomColor: meta.color, color: '#1d1916', fontWeight: 500 }
                      : { borderBottomColor: 'transparent', color: '#8c8273' }}
                  >
                    <span className="font-studio-serif italic text-[16px]">{tab.glyph}</span>
                    {tab.label}
                  </button>
                );
              })
            : AGENTIC_TABS.map(tab => {
                const isActive = agenticTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setAgenticTab(tab.id)}
                    className="flex items-center gap-2 px-4 lg:px-5 py-3 font-studio-sans text-[13px] lg:text-[13.5px] border-b-2 transition-all duration-100 whitespace-nowrap -mb-px flex-shrink-0"
                    style={isActive
                      ? { borderBottomColor: meta.color, color: '#1d1916', fontWeight: 500 }
                      : { borderBottomColor: 'transparent', color: '#8c8273' }}
                  >
                    <span className="font-studio-serif text-[15px]">{tab.glyph}</span>
                    {tab.label}
                  </button>
                );
              })}
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        {section === 'agentic' && agenticTab !== 'anatomy' && (
          <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1px] mb-4 lg:mb-5 uppercase">{activeAgentic.desc}</div>
        )}
        <div className="bg-studio-paper border border-studio-rule rounded-[4px] p-5 lg:p-8">
          {section === 'playgrounds' && playgroundTab === 'tokenizer'   && <TokenizerPlayground />}
          {section === 'playgrounds' && playgroundTab === 'context'     && <ContextWindowPlayground />}
          {section === 'playgrounds' && playgroundTab === 'temperature' && <TemperaturePlayground />}
          {section === 'playgrounds' && playgroundTab === 'embeddings'  && <EmbeddingsSimilarityPlayground />}
          {section === 'playgrounds' && playgroundTab === 'nextword'    && <NextWordPlayground />}
          {section === 'playgrounds' && playgroundTab === 'baserate'    && <BaseRatePlayground />}
          {section === 'playgrounds' && playgroundTab === 'evalci'      && <EvalConfidencePlayground />}
          {section === 'agentic' && agenticTab === 'anatomy' && <AgentAnatomy />}
          {section === 'agentic' && agenticTab === 'research' && <AgentScenario trigger='Should we adopt approach A or approach B for the team? Give me a recommendation with your reasoning.' steps={RESEARCH_ASSISTANT} />}
          {section === 'agentic' && agenticTab === 'trip'     && <AgentScenario trigger='Book me three nights next month, under budget, somewhere I can get to without flying.' steps={TRIP_PLANNER} />}
          {section === 'agentic' && agenticTab === 'bug'      && <AgentScenario trigger="Error rate jumped from baseline to roughly 8% after this morning's deploy. Find out why." steps={BUG_INVESTIGATION} />}
        </div>
      </div>

      <StudioFooter />
    </div>
  );
};
