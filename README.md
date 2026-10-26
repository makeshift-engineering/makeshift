# Makeshift Engineering

The public website for [Makeshift Engineering](https://makeshift.pro), a small team of friends building open-source software that matters.

The site showcases our projects, engineering philosophy, and writing. Visit the organisation on [GitHub](https://github.com/makeshift-engineering).

## Tech stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules
- [Bun](https://bun.sh/)

## Development

### Prerequisites

- [Bun](https://bun.sh/docs/installation)
- Node.js compatible with the installed Next.js version

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
bun run build
```

To serve the production build locally:

```bash
bun run start
```

## Project structure

```text
app/
├── components/       Reusable site components
├── globals.css       Global styles and design tokens
├── layout.tsx        Root layout and site metadata
├── page.tsx          Homepage
└── page.module.css   Homepage styles
public/               Static assets, including the site logo
```

## Contributing

This repository contains the Makeshift Engineering website. If you spot a problem or have an idea for improvement, please open an issue or pull request in [makeshift-engineering/makeshift](https://github.com/makeshift-engineering/makeshift).

Before opening a pull request, run:

```bash
bun run build
```

## Related links

- [Makeshift Engineering](https://makeshift.pro)
- [GitHub organisation](https://github.com/makeshift-engineering)
- [PenguinDB](https://penguindb.makeshift.pro)
- [Blog](https://blog.makeshift.pro)
