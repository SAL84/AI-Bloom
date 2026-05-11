# Claude Code — Project Configuration

## Skills

- Never use `gsd:*` skills in this project

## Rules

- Do what has been asked; nothing more, nothing less
- NEVER create files unless absolutely necessary — prefer editing existing files
- NEVER create documentation files unless explicitly requested
- NEVER save working files or tests to root — use `/src`, `/tests`, `/docs`, `/config`, `/scripts`
- ALWAYS read a file before editing it
- NEVER commit secrets, credentials, or .env files
- Keep files under 500 lines
- Validate input at system boundaries

## Build & Verify

- ALWAYS verify build succeeds after code changes and before committing

```bash
cd website && npm run build
```
