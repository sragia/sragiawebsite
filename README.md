# sragiawebsite

Personal landing page for [sragia.com](https://sragia.com) — React, TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 20+ (see `.nvmrc`)
- npm 10+
- Docker & Docker Compose (optional, for containerized dev/prod)

## Local development (without Docker)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Docker — development

Hot-reload dev server with source mounted into the container:

```bash
npm run docker:dev
# or
docker compose up --build
```

Stop with `npm run docker:dev:down` or `Ctrl+C` then `docker compose down`.

## Docker — production

Builds the static site and serves it with nginx on port 8080:

```bash
npm run docker:prod
# or
docker compose -f docker-compose.prod.yml up --build -d
```

Open [http://localhost:8080](http://localhost:8080).

Stop with `npm run docker:prod:down`.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format with Prettier |
| `npm run type-check` | TypeScript check only |

## Project structure

```
├── docker/           # nginx config for production
├── src/              # React application source
├── Dockerfile        # Production multi-stage build
├── Dockerfile.dev    # Development image
├── docker-compose.yml
└── docker-compose.prod.yml
```
