import React from 'react';
import { Sparkles, Briefcase, Users, Code2, Baby, ArrowRight, Lock, Library } from 'lucide-react';
import type { View } from '../../types/course';

interface Props {
  setView: (view: View) => void;
}

type Status = 'live' | 'building' | 'planned';

interface CourseCard {
  status: Status;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  bgAccent: string;
  borderAccent: string;
  textAccent: string;
  funnyLocked?: string;
}

const COURSES: CourseCard[] = [
  {
    status: 'live',
    title: 'AI for Cybersecurity Sales Engineers',
    tagline: 'The fast-pass for SEs who need to speak AI fluently',
    description:
      'Technical AI fundamentals, agentic architecture, and Google security positioning — built for SEs who need to hold smart customer conversations, not become researchers.',
    icon: <Sparkles className="w-7 h-7" />,
    accent: 'text-emerald-700',
    bgAccent: 'bg-emerald-50',
    borderAccent: 'border-emerald-200',
    textAccent: 'text-emerald-600',
  },
  {
    status: 'building',
    title: 'Building & Transforming Business with AI',
    tagline: 'What you actually need to do — a practitioner\'s playbook',
    description:
      'For leaders and teams who want to move from AI curiosity to AI action. Identifying opportunities, building the business case, running AI projects, and avoiding the classic failure modes.',
    icon: <Briefcase className="w-7 h-7" />,
    accent: 'text-orange-700',
    bgAccent: 'bg-orange-50',
    borderAccent: 'border-orange-200',
    textAccent: 'text-orange-600',
    funnyLocked: "We're building it. Ironic, given the course title.",
  },
  {
    status: 'planned',
    title: 'AI Fundamentals — General Audience',
    tagline: 'For everyone. No tech background required.',
    description:
      'Plain-language AI literacy — what AI actually is, what it can and cannot do, and how to think critically about AI claims without needing an engineering degree.',
    icon: <Users className="w-7 h-7" />,
    accent: 'text-violet-700',
    bgAccent: 'bg-violet-50',
    borderAccent: 'border-violet-200',
    textAccent: 'text-violet-600',
    funnyLocked: "Coming soon. The AI doesn't know when. Neither do we.",
  },
  {
    status: 'planned',
    title: 'AI for Developers',
    tagline: 'Hands-on, API-first, production-ready',
    description:
      'Build with AI: prompting, RAG, embeddings, function calling, agentic orchestration, evals, and cost management. Less theory, more code.',
    icon: <Code2 className="w-7 h-7" />,
    accent: 'text-blue-700',
    bgAccent: 'bg-blue-50',
    borderAccent: 'border-blue-200',
    textAccent: 'text-blue-600',
    funnyLocked: 'Still being written. By a human. With AI help. Naturally.',
  },
  {
    status: 'planned',
    title: 'AI Basics for Kids',
    tagline: 'Stories, games, and zero jargon. Ages 8–14.',
    description:
      'A separate visual-first site that teaches children how AI works through stories and mini-games — usable in classrooms or at home, with parent and teacher guides.',
    icon: <Baby className="w-7 h-7" />,
    accent: 'text-amber-700',
    bgAccent: 'bg-amber-50',
    borderAccent: 'border-amber-200',
    textAccent: 'text-amber-600',
    funnyLocked: "Patience. Even the kids will have to wait.",
  },
];

const STATUS_BADGE: Record<Status, string> = {
  live: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  building: 'bg-blue-100 text-blue-700 border border-blue-200',
  planned: 'bg-slate-100 text-slate-500 border border-slate-200',
};

const STATUS_LABEL: Record<Status, string> = {
  live: 'Live',
  building: 'Building',
  planned: 'Coming Soon',
};

export const CourseLibraryView = ({ setView }: Props) => {
  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1">
          <Library className="w-5 h-5 text-blue-600" />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Course Library</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">All Courses</h1>
        <p className="mt-2 text-slate-500 leading-relaxed">
          AI literacy built for real audiences — pick your track.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {COURSES.map((course, i) => (
          <div
            key={i}
            className={`rounded-2xl border ${course.borderAccent} ${course.bgAccent} p-6 flex items-center gap-6`}
          >
            <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${course.bgAccent} border ${course.borderAccent} ${course.accent}`}>
              {course.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h2 className="text-base font-bold text-slate-900 leading-snug">{course.title}</h2>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[course.status]}`}>
                  {STATUS_LABEL[course.status]}
                </span>
              </div>
              <p className={`text-xs font-medium mb-1 ${course.textAccent}`}>{course.tagline}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{course.description}</p>
            </div>

            <div className="flex-shrink-0 pl-4">
              {course.status === 'live' ? (
                <button
                  onClick={() => setView({ type: 'home' })}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap ${course.accent} hover:opacity-80 transition`}
                >
                  Enter Course <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-slate-400 max-w-[180px]">
                  <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs italic">{course.funnyLocked}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
