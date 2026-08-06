import React from 'react';
import { DiagramFrame, COLORS } from './shared';

/* ------------------------------------------------------------------ *
 * SOURCE LADDER — how much weight a claim can carry on its own
 * ------------------------------------------------------------------ */

export const HealthSourceLadderDiagram = () => {
  const rungs = [
    {
      c: COLORS.blue, w: 58,
      n: 'Primary regulation and rules',
      s: 'binding — everything below describes this',
      d: [
        'The actual text that creates the duty. Every',
        'rung below is somebody’s reading of it, and',
        'readings drift from the text over time.'
      ],
      e: [
        'HIPAA and GDPR; the EU AI Act;',
        'EU MDR and its diagnostics',
        'counterpart; your local policy'
      ]
    },
    {
      c: COLORS.cyan, w: 47,
      n: 'Official guidance',
      s: 'how the enforcing body reads its own rules',
      d: [
        'Not law, but the nearest thing to knowing how',
        'the law will be applied. Reissued often, so',
        'check the version, not a summary of it.'
      ],
      e: [
        'FDA’s AI device list and its Change',
        'Control Plan guidance; IMDRF and',
        'WHO framing; college positions'
      ]
    },
    {
      c: COLORS.emerald, w: 36,
      n: 'Standards and evidence',
      s: 'no product to sell, and the method is shown',
      d: [
        'Disinterested, and the method is on the page.',
        'Slow, and general — it describes a population,',
        'not the patient in front of you.'
      ],
      e: [
        'CONSORT-AI, SPIRIT-AI, TRIPOD’s',
        'AI extension, STARD, PROBAST; the',
        '2019 Obermeyer study in Science'
      ]
    },
    {
      c: COLORS.amber, w: 24,
      n: 'Practitioner commentary',
      s: 'fast and concrete, but nobody checked it',
      d: [
        'Says what a deployment actually feels like,',
        'which no regulator writes down. Generalises',
        'from one site, and is reviewed by no one.'
      ],
      e: [
        'Conference talks, blog posts,',
        'webinars, and single-site',
        'experience written up informally'
      ]
    },
    {
      c: COLORS.red, w: 12,
      n: 'Vendor material',
      s: 'written by the party selling the answer',
      d: [
        'The only source for what a product actually',
        'does, and the least disinterested one. Read',
        'each claim as something to test.'
      ],
      e: [
        'Brochures, demos, benchmark',
        'figures, and case studies with no',
        'independent replication'
      ]
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Educational orientation only — this course sits below the bottom rung, and every claim in it should be checked upwards">
      <defs>
        <marker id="arrowHSLa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Weighing what you read about AI in healthcare</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the higher the rung, the more weight a claim carries on its own — weight increases upwards</text>

      <text x="44" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">RUNG</text>
      <text x="258" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT IT IS, AND WHY IT SITS HERE</text>
      <text x="510" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">EXAMPLES IN THIS COURSE</text>
      <text x="706" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WEIGHT</text>

      <line x1="17" y1="392" x2="17" y2="72" stroke={COLORS.slate300} strokeWidth="2" markerEnd="url(#arrowHSLa)" />

      {rungs.map((r, i) => (
        <g key={i}>
          <rect x="30" y={70 + i * 66} width="740" height="58" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          <rect x="30" y={70 + i * 66} width="7" height="58" rx="3" fill={r.c} />
          <text x="46" y={92 + i * 66} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{r.n}</text>
          <text x="46" y={106 + i * 66} fill={COLORS.slate500} fontSize="7.8">{r.s}</text>
          {r.d.map((t, j) => (
            <text key={j} x="258" y={90 + i * 66 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          {r.e.map((t, j) => (
            <text key={j} x="510" y={90 + i * 66 + j * 12} fill={COLORS.slate700} fontSize="8">{t}</text>
          ))}
          <rect x="706" y={95 + i * 66} width="58" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="706" y={95 + i * 66} width={r.w} height="8" rx="4" fill={r.c} />
        </g>
      ))}

      <rect x="30" y="404" width="740" height="30" rx="8" fill={COLORS.slate700} />
      <text x="400" y="424" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Every rung has a use — the ladder is about how much weight a claim carries unsupported</text>

      <rect x="30" y="442" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Read downwards to find what binds you; read upwards to check what you were told</text>
      <text x="400" y="480" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">This course is not on the ladder — it is a map of these sources, not one of them</text>
    </DiagramFrame>
  );
};

/* ------------------------------------------------------------------ *
 * SOURCE LADDER — the same weighting, for legal practice
 * ------------------------------------------------------------------ */

export const LegalSourceLadderDiagram = () => {
  const rungs = [
    {
      c: COLORS.blue, w: 58,
      n: 'Primary law and court rules',
      s: 'binding — and what the court itself applies',
      d: [
        'Statute, procedure, evidence, and decided cases.',
        'A conduct rule binds you personally whether',
        'or not you have ever read it.'
      ],
      e: [
        'FRCP Rule 11; FRE Rule 502(d);',
        'Mata v. Avianca (S.D.N.Y. 2023);',
        'your state’s conduct rules'
      ]
    },
    {
      c: COLORS.cyan, w: 47,
      n: 'Regulator and court guidance',
      s: 'issued by the bodies that judge your work',
      d: [
        'How the rules are read — and the only rung that',
        'answers whether this judge wants disclosure.',
        'It differs by forum and it changes.'
      ],
      e: [
        'Standing orders and practice',
        'directions; ABA Model Rules and',
        'ethics opinions; SRA guidance'
      ]
    },
    {
      c: COLORS.emerald, w: 36,
      n: 'Evidence and scholarship',
      s: 'disinterested, method shown, and slow',
      d: [
        'Independent testing of what these tools do,',
        'with the method on the page. General rather',
        'than about your matter or your forum.'
      ],
      e: [
        'Empirical evaluations of legal AI',
        'tools in law reviews and preprints;',
        'peer-reviewed analysis'
      ]
    },
    {
      c: COLORS.amber, w: 24,
      n: 'Practitioner commentary',
      s: 'fast and concrete, but nobody reviewed it',
      d: [
        'Fills the gap the formal sources leave, and',
        'reaches you first. Generalises from one firm,',
        'and has no checking behind it.'
      ],
      e: [
        'CLE material, client alerts,',
        'conference panels, blog posts,',
        'and practice-group notes'
      ]
    },
    {
      c: COLORS.red, w: 12,
      n: 'Vendor material',
      s: 'written by the party selling the answer',
      d: [
        'The only source for what a product actually',
        'does, and the least disinterested one. Treat',
        'accuracy claims as claims to test.'
      ],
      e: [
        'Product pages, benchmark claims,',
        'demos, and case studies with no',
        'independent replication'
      ]
    }
  ];
  return (
    <DiagramFrame viewBox="0 0 800 500" caption="Educational orientation only, not legal advice — check every claim here against the rung above it">
      <defs>
        <marker id="arrowLSLa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={COLORS.slate400} />
        </marker>
      </defs>
      <text x="400" y="22" textAnchor="middle" fill={COLORS.slate900} fontSize="14" fontWeight="700">Weighing what you read about AI in legal practice</text>
      <text x="400" y="40" textAnchor="middle" fill={COLORS.slate500} fontSize="10">the higher the rung, the more weight a claim carries on its own — weight increases upwards</text>

      <text x="44" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">RUNG</text>
      <text x="258" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WHAT IT IS, AND WHY IT SITS HERE</text>
      <text x="510" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">EXAMPLES IN THIS COURSE</text>
      <text x="706" y="62" fill={COLORS.slate400} fontSize="8" fontWeight="700">WEIGHT</text>

      <line x1="17" y1="392" x2="17" y2="72" stroke={COLORS.slate300} strokeWidth="2" markerEnd="url(#arrowLSLa)" />

      {rungs.map((r, i) => (
        <g key={i}>
          <rect x="30" y={70 + i * 66} width="740" height="58" rx="8" fill={COLORS.white} stroke={r.c} strokeWidth="1.8" />
          <rect x="30" y={70 + i * 66} width="7" height="58" rx="3" fill={r.c} />
          <text x="46" y={92 + i * 66} fill={COLORS.slate900} fontSize="9.6" fontWeight="700">{r.n}</text>
          <text x="46" y={106 + i * 66} fill={COLORS.slate500} fontSize="7.8">{r.s}</text>
          {r.d.map((t, j) => (
            <text key={j} x="258" y={90 + i * 66 + j * 12} fill={COLORS.slate600} fontSize="8.2">{t}</text>
          ))}
          {r.e.map((t, j) => (
            <text key={j} x="510" y={90 + i * 66 + j * 12} fill={COLORS.slate700} fontSize="8">{t}</text>
          ))}
          <rect x="706" y={95 + i * 66} width="58" height="8" rx="4" fill={COLORS.slate100} />
          <rect x="706" y={95 + i * 66} width={r.w} height="8" rx="4" fill={r.c} />
        </g>
      ))}

      <rect x="30" y="404" width="740" height="30" rx="8" fill={COLORS.slate700} />
      <text x="400" y="424" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">No rung here is useless — the ladder is about how much weight a claim carries alone</text>

      <rect x="30" y="442" width="740" height="44" rx="10" fill={COLORS.slate900} />
      <text x="400" y="464" textAnchor="middle" fill={COLORS.white} fontSize="10.5" fontWeight="700">Read downwards to find what binds you; read upwards to check what you were told</text>
      <text x="400" y="480" textAnchor="middle" fill={COLORS.slate300} fontSize="9.2">A course that cites its sources is asking to be checked against them — please do</text>
    </DiagramFrame>
  );
};
