import React from 'react';
import { X } from 'lucide-react';

interface Props {
  text: string | null;
  onClose: () => void;
}

export const ExplanationPanel = ({ text, onClose }: Props) => {
  if (!text) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      {/* Drawer — slides up from bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 rounded-t-2xl shadow-xl p-6 max-h-[50vh] overflow-y-auto animate-slide-up">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="w-10 h-1 rounded-full bg-slate-300 mx-auto absolute top-3 left-1/2 -translate-x-1/2" />
          <button
            onClick={onClose}
            className="ml-auto flex-shrink-0 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-slate-700 leading-relaxed text-sm lg:text-base">{text}</p>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.22s ease-out;
        }
      `}</style>
    </>
  );
};
