# The AI Learning Hub — aibloom.io

A free public library for AI literacy: **thirteen courses, ~320 lessons,
~400 quiz questions, and a teaching diagram on every lesson** — from
eight-year-olds to regulated industries, plus a dated journal of essays.

Live at **[aibloom.io](https://aibloom.io)**.

## The catalog

| № | Course | For |
|---|--------|-----|
| 01 | AI for Kids | Ages 8–14, reading with a grown-up |
| 02 | AI for School Students | Ages 14–18 |
| 03 | AI Essentials | Everyone |
| 04 | AI Deep Dive | Builders |
| 05 | Prompting | The everyday skill |
| 06 | Vibecoding | Non-engineers building real things |
| 07 | Agent Engineering | Engineers shipping agents |
| 08 | Does Your AI Actually Work? | Testing without statistics |
| 09 | Securing AI Systems | Defending what you built |
| 10 | AI for Cybersecurity | Security teams, both directions |
| 11 | AI for Healthcare | Orientation, not clinical guidance |
| 12 | AI for Legal | Orientation, not legal advice |
| 13 | AI for Finance | Risk, compliance, credit — orientation only |

## Stack

Astro + React + Tailwind, statically built and deployed to GitHub Pages.
Course content is plain data in `website/src/data/modules/`; diagrams are
React SVG components in `website/src/components/diagrams/`; blog posts
are markdown in `website/src/content/blog/`. Every course and lesson is
prerendered to its own crawlable page.

```sh
cd website
npm ci
npm run build     # builds ~315 static pages into dist/
npm run dev       # local dev server
```

## Honesty notes

The content is model-drafted under editorial rules (measured reading
levels, no false promises, scope boundaries on regulated verticals) and
is **not yet practitioner-reviewed or cited** — the Healthcare and Legal
courses say so explicitly and should be treated as orientation. If you
are a practising clinician, lawyer, or agent-infrastructure engineer and
would like to review a course, please open an issue.

## License

- **Code:** MIT — see [LICENSE](LICENSE).
- **Content** (lessons, quizzes, diagrams, blog posts): CC BY-NC-SA 4.0 —
  see [LICENSE-CONTENT.md](LICENSE-CONTENT.md).
