import React from 'react';
import { Map, Users, Code2, Sparkles, Star, ArrowRight, Baby, FlaskConical, MessageSquare } from 'lucide-react';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

type Status = 'live' | 'building' | 'planned';

interface RoadmapItem {
  status: Status;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  accent: string;
  textAccent: string;
  bgAccent: string;
  borderAccent: string;
}

const STATUS_LABEL: Record<Status, string> = {
  live: 'Live',
  building: 'Building',
  planned: 'Planned',
};

const STATUS_STYLE: Record<Status, string> = {
  live: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  building: 'bg-blue-100 text-blue-700 border border-blue-200',
  planned: 'bg-slate-100 text-slate-600 border border-slate-200',
};

const ITEMS: RoadmapItem[] = [
  {
    status: 'live',
    title: 'AI for Cybersecurity Sales Engineers',
    subtitle: 'Current product — you are here',
    description:
      'A technical fast-pass through AI fundamentals, ML concepts, agentic architecture, and security-specific AI positioning. Built for SEs who need to hold intelligent conversations with customers — not become researchers.',
    bullets: [
      '6 modules covering foundations to advanced agentic patterns',
      'Interactive SVG diagrams with clickable explanations',
      'Quiz assessments with SE-focused discovery questions',
      'Covers Google security AI positioning and competitive landscape',
    ],
    icon: <Sparkles className="w-6 h-6" />,
    accent: 'text-emerald-700',
    textAccent: 'text-emerald-600',
    bgAccent: 'bg-emerald-50',
    borderAccent: 'border-emerald-200',
  },
  {
    status: 'planned',
    title: 'AI Fundamentals — General Audience',
    subtitle: 'For everyone, no tech background needed',
    description:
      'Plain-language AI literacy for people who want to understand AI without becoming engineers. Practical, opinionated, and honest — covering what AI actually is, what it can and cannot do, and how to think critically about AI claims.',
    bullets: [
      'No jargon — every concept explained in everyday terms',
      'Focus on how AI affects daily life, work, and society',
      'Critical thinking toolkit: spotting AI hype vs. real capability',
      'Interactive examples with real-world analogies',
    ],
    icon: <Users className="w-6 h-6" />,
    accent: 'text-violet-700',
    textAccent: 'text-violet-600',
    bgAccent: 'bg-violet-50',
    borderAccent: 'border-violet-200',
  },
  {
    status: 'planned',
    title: 'AI for Developers',
    subtitle: 'Hands-on, API-first, production-ready',
    description:
      'A developer-track course covering how to build with AI: prompting, RAG, embeddings, function calling, agentic patterns, evals, and production concerns. Less theory, more code — everything illustrated with runnable examples.',
    bullets: [
      'Prompt engineering and context management patterns',
      'RAG pipelines: chunking, embedding, retrieval, re-ranking',
      'Tool use and function calling with real API examples',
      'Agentic orchestration: planning loops, memory, multi-agent coordination',
      'Evals, observability, and cost management in production',
    ],
    icon: <Code2 className="w-6 h-6" />,
    accent: 'text-blue-700',
    textAccent: 'text-blue-600',
    bgAccent: 'bg-blue-50',
    borderAccent: 'border-blue-200',
  },
  {
    status: 'planned',
    title: 'Deep Dives — Advanced Content for Geeks',
    subtitle: 'Optional rabbit holes for the technically curious',
    description:
      'Optional deep-dive sections attached to existing lessons for learners who want to go further. No hand-holding — papers, math, architecture details, and the reasoning behind design decisions that the fast-pass intentionally skips.',
    bullets: [
      'Expandable "Go Deeper" sections inside lessons — hidden by default, opt-in',
      'Transformer internals: attention heads, positional encoding, KV cache',
      'Training mechanics: loss functions, gradient descent, backprop intuition',
      'Security-specific deep dives: embedding attack surfaces, prompt injection mechanics, model extraction',
      'Links to seminal papers (Attention Is All You Need, InstructGPT, Constitutional AI, etc.)',
    ],
    icon: <FlaskConical className="w-6 h-6" />,
    accent: 'text-rose-700',
    textAccent: 'text-rose-600',
    bgAccent: 'bg-rose-50',
    borderAccent: 'border-rose-200',
  },
  {
    status: 'planned',
    title: 'AI Chatbot on Diagram Nodes',
    subtitle: 'Click any SVG node — talk to an AI about it',
    description:
      'Replace the static explanation panel on interactive diagrams with a live AI chatbot. Clicking a node opens a conversation — ask follow-up questions, request examples, go deeper, or challenge what you just read. Learning becomes a dialogue, not a tooltip.',
    bullets: [
      'Each clickable node seeds the chatbot with its concept and the lesson context',
      'Ask follow-ups: "Give me a real-world example", "How does this affect a SOC?", "What goes wrong here?"',
      'Conversation scoped to the course topic — not a general-purpose assistant',
      'Response streamed inline so the experience feels fast and natural',
      'Session history kept per lesson so you can pick up where you left off',
    ],
    icon: <MessageSquare className="w-6 h-6" />,
    accent: 'text-cyan-700',
    textAccent: 'text-cyan-600',
    bgAccent: 'bg-cyan-50',
    borderAccent: 'border-cyan-200',
  },
  {
    status: 'planned',
    title: 'AI Basics for Kids',
    subtitle: 'A standalone visual-first website for young learners',
    description:
      'A separate, purpose-built website that teaches children how AI works through stories, games, and visual metaphors. No code, no math — just curiosity. Designed for ages 8–14, usable in classrooms or at home.',
    bullets: [
      'Separate site with a child-friendly design and navigation',
      'AI concepts taught through relatable characters and storylines',
      'Interactive "train your own" mini-games to build intuition',
      'Parent and teacher guide with discussion prompts',
      'Covers: what AI is, how it learns, when it makes mistakes, and why fairness matters',
    ],
    icon: <Baby className="w-6 h-6" />,
    accent: 'text-amber-700',
    textAccent: 'text-amber-600',
    bgAccent: 'bg-amber-50',
    borderAccent: 'border-amber-200',
  },
];

export const RoadmapView = ({ setView }: Props) => {
  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Map className="w-5 h-5 text-blue-600" />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Product Roadmap</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">Where We Are Going</h1>
        <p className="mt-2 text-slate-500 leading-relaxed">
          AI literacy for every kind of learner — from cybersecurity professionals to curious kids.
        </p>
      </div>

      <div className="space-y-6">
        {ITEMS.map((item, i) => (
          <div key={i} className={`rounded-xl border ${item.borderAccent} ${item.bgAccent} p-6`}>
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${item.bgAccent} border ${item.borderAccent} ${item.accent}`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="font-bold text-slate-900 text-lg leading-tight">{item.title}</h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[item.status]}`}>
                    {STATUS_LABEL[item.status]}
                  </span>
                </div>
                <p className={`text-xs font-medium mb-3 ${item.textAccent}`}>{item.subtitle}</p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.textAccent.replace('text-', 'bg-')}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                {item.status === 'live' && (
                  <button
                    onClick={() => setView({ type: 'home' })}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Go to course <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 flex items-start gap-4">
        <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-slate-800 mb-1">Have feedback or a request?</p>
          <p className="text-sm text-slate-500">
            This roadmap reflects current priorities. If you have specific topics, audiences, or use cases in mind,
            we want to hear them — the best content gets built from real learner needs.
          </p>
        </div>
      </div>
    </div>
  );
};
