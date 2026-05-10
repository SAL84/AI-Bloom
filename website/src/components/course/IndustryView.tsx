import React from 'react';
import { Cpu, Shield, Code2, Cloud, BarChart3, ChevronRight } from 'lucide-react';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

const CATEGORIES = [
  {
    icon: <Cloud className="w-6 h-6" />,
    color: 'bg-sky-100 text-sky-700',
    title: 'Cloud AI Platforms',
    summary: 'AWS, Azure, and Google Cloud — the infrastructure layer powering most enterprise AI deployments.',
    examples: ['AWS Bedrock', 'Azure OpenAI Service', 'Google Vertex AI', 'Cloudflare AI'],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-700',
    title: 'Foundation Model Providers',
    summary: 'The labs building and serving frontier models that everyone else builds on.',
    examples: ['OpenAI (GPT-4o, o3)', 'Anthropic (Claude)', 'Google (Gemini)', 'Meta (Llama)', 'Mistral', 'Cohere'],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-red-100 text-red-700',
    title: 'AI-Powered Security Tools',
    summary: 'Security vendors embedding AI into detection, response, and analyst assistance workflows.',
    examples: ['CrowdStrike Charlotte AI', 'Microsoft Security Copilot', 'Darktrace', 'Palo Alto Precision AI', 'Google SecOps AI'],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    color: 'bg-emerald-100 text-emerald-700',
    title: 'AI Developer Tools',
    summary: 'Tools that put AI into the hands of developers — from code completion to full agent frameworks.',
    examples: ['GitHub Copilot', 'Cursor', 'Claude Code', 'Amazon Q Developer', 'Tabnine'],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'bg-amber-100 text-amber-700',
    title: 'AI in Business Applications',
    summary: 'Enterprise software embedding AI into workflows that millions of people use every day.',
    examples: ['Salesforce Einstein', 'ServiceNow AI', 'Workday AI', 'Microsoft 365 Copilot', 'Notion AI'],
  },
];

export const IndustryView = ({ setView }: Props) => (
  <div className="max-w-4xl mx-auto p-6 lg:p-10">
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
        <Cpu className="w-3.5 h-3.5" /> Product Landscape
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">AI in the Industry</h1>
      <p className="text-lg text-slate-600">
        A practical map of where AI is being built, deployed, and used — across infrastructure, applications, and security.
      </p>
    </div>

    <div className="space-y-4">
      {CATEGORIES.map((cat, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition">
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${cat.color}`}>
              {cat.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-slate-900 mb-1">{cat.title}</h2>
              <p className="text-sm text-slate-600 mb-3">{cat.summary}</p>
              <div className="flex flex-wrap gap-2">
                {cat.examples.map(ex => (
                  <span key={ex} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">{ex}</span>
                ))}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0 mt-1" />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
      <p className="text-sm text-slate-600">Detailed breakdowns of each product — capabilities, limitations, and positioning — coming soon.</p>
    </div>
  </div>
);
