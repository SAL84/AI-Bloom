import React from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

const CATEGORIES = [
  {
    glyph: '☁', color: '#2c6db0',
    title: 'Cloud AI Platforms',
    summary: 'AWS, Azure, and Google Cloud — the infrastructure layer powering most enterprise AI deployments.',
    examples: ['AWS Bedrock', 'Azure OpenAI Service', 'Google Vertex AI', 'Cloudflare AI'],
  },
  {
    glyph: '◎', color: '#5a4ec0',
    title: 'Foundation Model Providers',
    summary: 'The labs building and serving frontier models that everyone else builds on.',
    examples: ['OpenAI (GPT-4o, o3)', 'Anthropic (Claude)', 'Google (Gemini)', 'Meta (Llama)', 'Mistral', 'Cohere'],
  },
  {
    glyph: '◈', color: '#c9421f',
    title: 'AI-Powered Security Tools',
    summary: 'Security vendors embedding AI into detection, response, and analyst assistance workflows.',
    examples: ['CrowdStrike Charlotte AI', 'Microsoft Security Copilot', 'Darktrace', 'Palo Alto Precision AI', 'Google SecOps AI'],
  },
  {
    glyph: '⌥', color: '#3f8a5e',
    title: 'AI Developer Tools',
    summary: 'Tools that put AI into the hands of developers — from code completion to full agent frameworks.',
    examples: ['GitHub Copilot', 'Cursor', 'Claude Code', 'Amazon Q Developer', 'Tabnine'],
  },
  {
    glyph: '⋈', color: '#b78320',
    title: 'AI in Business Applications',
    summary: 'Enterprise software embedding AI into workflows that millions of people use every day.',
    examples: ['Salesforce Einstein', 'ServiceNow AI', 'Workday AI', 'Microsoft 365 Copilot', 'Notion AI'],
  },
];

export const IndustryView = ({ setView }: Props) => (
  <div className="bg-studio-bg min-h-screen">
    <StudioNavLite crumbs={['AI in Industry']} setView={setView} />

    <div className="px-12 pt-12 pb-8 border-b border-studio-rule" style={{ background: '#b78320' }}>
      <div className="font-studio-mono text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
        Catalog №04 · Product landscape
      </div>
      <h1 className="font-studio-display text-[52px] font-normal tracking-[-1px] text-white leading-[1.0] mb-3">
        AI in Industry
      </h1>
      <p className="font-studio-serif italic text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
        A practical field map of where AI is being built, deployed, and used — across infrastructure, applications, and security.
      </p>
    </div>

    <div className="px-12 py-10 max-w-4xl">
      <div className="font-studio-mono text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-6">◆ Five sectors</div>

      <div className="divide-y divide-studio-rule border-t border-studio-rule">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="py-8 grid grid-cols-[48px_1fr] gap-7 items-start">
            <div className="font-studio-serif italic text-[36px] leading-none mt-1" style={{ color: cat.color }}>{cat.glyph}</div>
            <div>
              <h2 className="font-studio-display text-[26px] font-normal tracking-[-0.3px] text-studio-ink mb-2 leading-[1.1]">{cat.title}</h2>
              <p className="font-studio-sans text-[14px] text-studio-ink-dim leading-[1.6] mb-4">{cat.summary}</p>
              <div className="flex flex-wrap gap-2">
                {cat.examples.map(ex => (
                  <span key={ex} className="font-studio-mono text-[11px] text-studio-ink-dim tracking-[0.3px] px-3 py-1.5 border border-studio-rule rounded-full bg-studio-paper">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 px-6 py-5 bg-studio-paper border border-studio-rule rounded-[4px]">
        <div className="font-studio-mono text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase mb-2">In the kiln</div>
        <p className="font-studio-serif italic text-[17px] text-studio-ink-dim leading-[1.5]">
          Detailed breakdowns of each product — capabilities, limitations, and positioning — coming next quarter.
        </p>
      </div>
    </div>

    <StudioFooter />
  </div>
);
