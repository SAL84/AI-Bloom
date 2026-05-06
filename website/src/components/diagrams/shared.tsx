import React from 'react';

export const COLORS = {
  blue: '#2563eb',
  blueLight: '#dbeafe',
  blueMid: '#93c5fd',
  cyan: '#06b6d4',
  slate900: '#0f172a',
  slate700: '#334155',
  slate500: '#64748b',
  slate400: '#94a3b8',
  slate300: '#cbd5e1',
  slate200: '#e2e8f0',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  amber: '#f59e0b',
  emerald: '#10b981',
  red: '#ef4444',
  white: '#ffffff'
};

interface DiagramFrameProps {
  children: React.ReactNode;
  viewBox?: string;
  caption?: string;
}

export const DiagramFrame = ({ children, viewBox = '0 0 800 500', caption }: DiagramFrameProps) => (
  <div className="my-4">
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
      <svg viewBox={viewBox} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
    {caption && <div className="text-xs text-slate-500 mt-1.5 text-center italic">{caption}</div>}
  </div>
);
