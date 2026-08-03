import React from 'react';
import { StudioNavLite, StudioFooter } from './StudioChrome';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

const CATEGORIES = [
  {
    glyph: '◎', color: '#5a4ec0',
    title: 'Foundation Model Providers',
    summary: 'The labs that train and serve general-purpose models, absorbing the cost of frontier research so everyone downstream can rent capability instead of building it.',
    examples: ['OpenAI', 'Anthropic', 'Google DeepMind', 'Meta AI', 'Mistral AI', 'Cohere'],
  },
  {
    glyph: '☁', color: '#2c6db0',
    title: 'Cloud AI Platforms',
    summary: 'The hyperscaler layer that packages models with identity, networking, billing and data residency, so an enterprise can adopt AI inside the account and contracts it already has.',
    examples: ['Amazon Bedrock', 'Azure AI Foundry', 'Google Vertex AI', 'IBM watsonx', 'Cloudflare Workers AI'],
  },
  {
    glyph: '▦', color: '#c9421f',
    title: 'AI Infrastructure & Silicon',
    summary: 'The physical layer — accelerators, high-bandwidth memory, interconnect, and the data centres around them — that sets the ceiling on how much AI anyone can actually run.',
    examples: ['NVIDIA', 'AMD', 'Google TPU', 'AWS Trainium', 'Broadcom', 'SK hynix'],
  },
  {
    glyph: '⟐', color: '#0f8a7a',
    title: 'Agent Platforms & Orchestration',
    summary: 'Frameworks and runtimes for building systems that plan, call tools and act over many steps, plus the permissions and handoffs that keep those actions accountable.',
    examples: ['LangChain', 'LlamaIndex', 'Claude Agent SDK', 'Microsoft AutoGen', 'CrewAI', 'Temporal'],
  },
  {
    glyph: '⌥', color: '#3f8a5e',
    title: 'AI Developer Tools',
    summary: 'Assistants that sit inside the software development loop — reading a codebase, writing and reviewing changes, or turning a prompt into a working application.',
    examples: ['GitHub Copilot', 'Cursor', 'Claude Code', 'Amazon Q Developer', 'Replit', 'Lovable'],
  },
  {
    glyph: '⊞', color: '#b78320',
    title: 'Retrieval & Vector Data',
    summary: 'Storage and search layers that find the right passages, records or documents at query time, so a model answers from your material rather than from memory alone.',
    examples: ['Pinecone', 'Weaviate', 'Qdrant', 'Elastic', 'pgvector', 'Chroma'],
  },
  {
    glyph: '⌗', color: '#3b82f6',
    title: 'Evaluation & Observability',
    summary: 'Tooling that measures whether an AI system is behaving — test sets and scoring before release, tracing and monitoring after it, because non-deterministic systems drift quietly.',
    examples: ['LangSmith', 'Braintrust', 'Arize', 'Weights & Biases', 'Langfuse', 'Datadog'],
  },
  {
    glyph: '⚖', color: '#8b2f5f',
    title: 'Guardrails, Safety & Governance',
    summary: 'Controls that screen inputs and outputs, enforce policy at runtime, and produce the audit trail that regulators, security teams and customers ask for.',
    examples: ['NVIDIA NeMo Guardrails', 'Guardrails AI', 'Lakera', 'Protect AI', 'Credo AI', 'HiddenLayer'],
  },
  {
    glyph: '⬡', color: '#3f8a5e',
    title: 'Open-Weight Models & Self-Hosting',
    summary: 'Downloadable model weights and the serving stack around them, for teams that need to run inference on their own hardware, inspect what they deploy, or avoid a vendor dependency.',
    examples: ['Hugging Face', 'Meta Llama', 'Mistral', 'Qwen', 'vLLM', 'Ollama'],
  },
  {
    glyph: '✦', color: '#c9421f',
    title: 'Generative Media',
    summary: 'Systems that produce images, video, music, speech and sound, changing what a small team can create and forcing new questions about provenance and consent.',
    examples: ['Midjourney', 'Adobe Firefly', 'Runway', 'ElevenLabs', 'Black Forest Labs', 'Suno'],
  },
  {
    glyph: '⋈', color: '#b78320',
    title: 'AI in Business Applications',
    summary: 'AI folded into the software people already open every day — CRM, HR, ticketing, documents and email — where adoption happens without anyone choosing a model.',
    examples: ['Microsoft 365 Copilot', 'Salesforce Agentforce', 'ServiceNow', 'Workday', 'SAP', 'Notion'],
  },
  {
    glyph: '◈', color: '#5a4ec0',
    title: 'Vertical AI',
    summary: 'Products built for one sector, where the value is in the domain data, workflow and regulation around the model rather than in the model itself.',
    examples: ['CrowdStrike', 'Microsoft Security Copilot', 'Darktrace', 'Abridge', 'Harvey', 'Ramp'],
  },
];

export const IndustryView = ({ setView }: Props) => (
  <div className="bg-studio-bg min-h-screen">
    <StudioNavLite crumbs={['AI in Industry']} setView={setView} />

    <div className="px-4 sm:px-6 lg:px-12 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-studio-rule" style={{ background: '#b78320' }}>
      <div className="font-studio-mono text-[10.5px] lg:text-[11px] tracking-[1.6px] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
        Catalog №05 · Product landscape
      </div>
      <h1 className="font-studio-display text-[32px] sm:text-[40px] lg:text-[52px] font-normal tracking-[-0.6px] lg:tracking-[-1px] text-white leading-[1.0] mb-3">
        AI in Industry
      </h1>
      <p className="font-studio-serif italic text-[16px] lg:text-[18px] leading-[1.5]" style={{ color: 'rgba(255,255,255,0.82)' }}>
        A practical field map of where AI is being built, deployed, and used — across infrastructure, applications, and security.
      </p>
    </div>

    <div className="px-4 sm:px-6 lg:px-12 py-8 lg:py-10 max-w-4xl">
      <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-kids tracking-[1.6px] uppercase mb-5 lg:mb-6">◆ Twelve categories</div>

      <p className="font-studio-sans text-[13.5px] lg:text-[14px] text-studio-ink-dim leading-[1.6] mb-6 lg:mb-8">
        This is a map of categories, not a ranking or a recommendation — nothing here is an endorsement of one vendor over another. The company names are examples at the time of writing and will go out of date faster than anything else in this library; the categories are the part worth remembering.
      </p>

      <div className="divide-y divide-studio-rule border-t border-studio-rule">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="py-6 lg:py-8 grid grid-cols-[40px_1fr] lg:grid-cols-[48px_1fr] gap-4 lg:gap-7 items-start">
            <div className="font-studio-serif italic text-[28px] lg:text-[36px] leading-none mt-1" style={{ color: cat.color }}>{cat.glyph}</div>
            <div className="min-w-0">
              <h2 className="font-studio-display text-[20px] sm:text-[22px] lg:text-[26px] font-normal tracking-[-0.3px] text-studio-ink mb-2 leading-[1.1]">{cat.title}</h2>
              <p className="font-studio-sans text-[13.5px] lg:text-[14px] text-studio-ink-dim leading-[1.6] mb-4">{cat.summary}</p>
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

      <div className="mt-6 lg:mt-8 px-5 lg:px-6 py-4 lg:py-5 bg-studio-paper border border-studio-rule rounded-[4px]">
        <div className="font-studio-mono text-[10.5px] lg:text-[11px] text-studio-ink-mute tracking-[1.4px] uppercase mb-2">In the kiln</div>
        <p className="font-studio-serif italic text-[15px] lg:text-[17px] text-studio-ink-dim leading-[1.5]">
          Detailed breakdowns of each product — capabilities, limitations, and positioning — coming next quarter.
        </p>
      </div>
    </div>

    <StudioFooter />
  </div>
);
