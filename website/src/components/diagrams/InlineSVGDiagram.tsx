import React, { useRef, useEffect, useMemo, useState } from 'react';
import { ExplanationPanel } from './ExplanationPanel';

interface Props {
  svgContent: string;
  /** Short unique id used to namespace arrow marker ids, e.g. "d0a" */
  diagramId: string;
}

// CSS variables + class definitions matching the diagram design system.
// Classes: t (text), ts (text-small), th (text-heading), box, node, arr, c-blue, c-teal, etc.
const DIAGRAM_CSS = `
  .idg-wrap {
    --b:  #0f172a;
    --b2: #334155;
    --b3: #64748b;
    --bg: #ffffff;
    --bg2: #f8fafc;
    --bd: #e2e8f0;
    --blue:  #2563eb;
    --teal:  #0d9488;
    --green: #10b981;
    --amber: #f59e0b;
    --red:   #ef4444;
    --purple: #7c3aed;

    /* Map to named CSS vars the SVGs may reference */
    --color-text-primary:        var(--b);
    --color-text-secondary:      var(--b2);
    --color-text-muted:          var(--b3);
    --color-background-primary:  var(--bg);
    --color-background-secondary:var(--bg2);
    --color-border:              var(--bd);
    --color-accent-blue:         var(--blue);
    --color-accent-teal:         var(--teal);
  }

  /* Text utility classes */
  .idg-wrap .t  { fill: var(--b);  font-family: system-ui, sans-serif; }
  .idg-wrap .ts { fill: var(--b3); font-size: 11px; font-family: system-ui, sans-serif; }
  .idg-wrap .th { fill: var(--b);  font-size: 14px; font-weight: 600; font-family: system-ui, sans-serif; }

  /* Box / node shapes */
  .idg-wrap .box  { fill: var(--bg2); stroke: var(--bd); }
  .idg-wrap .node { cursor: pointer; }
  .idg-wrap .node:hover > rect,
  .idg-wrap .node:hover > circle { opacity: 0.82; }
  .idg-wrap .node:hover { filter: brightness(0.95); }

  /* Arrow lines */
  .idg-wrap .arr { stroke: var(--b3); fill: none; }

  /* Colour modifier classes */
  .idg-wrap .c-blue  { fill: #dbeafe; stroke: var(--blue); }
  .idg-wrap .c-teal  { fill: #ccfbf1; stroke: var(--teal); }
  .idg-wrap .c-green { fill: #d1fae5; stroke: var(--green); }
  .idg-wrap .c-amber { fill: #fef3c7; stroke: var(--amber); }
  .idg-wrap .c-red   { fill: #fee2e2; stroke: var(--red); }
  .idg-wrap .c-purple{ fill: #ede9fe; stroke: var(--purple); }
  .idg-wrap .c-slate { fill: var(--bg2); stroke: var(--bd); }

  /* Responsive SVG — fills container on desktop, scrollable on mobile */
  .idg-wrap svg { width: 100%; min-width: 560px; height: auto; display: block; }
`;

function preprocessSVG(raw: string, id: string): string {
  return raw
    // Namespace arrow marker ids
    .replace(/\bid="arrow"/g, `id="arrow-${id}"`)
    .replace(/url\(#arrow\)/g, `url(#arrow-${id})`)
    // Convert sendPrompt onclick to data-prompt attribute
    .replace(/onclick="sendPrompt\('([^']*)'\)"/g, (_m, txt) => `data-prompt="${txt.replace(/"/g, '&quot;')}"`)
    .replace(/onclick='sendPrompt\("([^"]*)"\)'/g, (_m, txt) => `data-prompt="${txt.replace(/"/g, '&quot;')}"`);
}

export const InlineSVGDiagram = ({ svgContent, diagramId }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [explanation, setExplanation] = useState<string | null>(null);

  const processed = useMemo(
    () => preprocessSVG(svgContent, diagramId),
    [svgContent, diagramId]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-prompt]');
      if (target) {
        setExplanation(target.getAttribute('data-prompt'));
      }
    };

    wrapper.addEventListener('click', handleClick);
    return () => wrapper.removeEventListener('click', handleClick);
  }, [processed]);

  return (
    <>
      <style>{DIAGRAM_CSS}</style>
      <div className="idg-wrap my-4 bg-slate-50 border border-slate-200 rounded-lg p-3 overflow-x-auto">
        <div
          ref={wrapperRef}
          dangerouslySetInnerHTML={{ __html: processed }}
        />
        <p className="text-xs text-slate-400 mt-2 text-center italic">
          Tap any highlighted node to learn more
        </p>
      </div>
      <ExplanationPanel text={explanation} onClose={() => setExplanation(null)} />
    </>
  );
};
