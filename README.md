# Second Brain – Landing Page

A modern, responsive landing page for the Second Brain productivity platform built with Next.js 15, Tailwind CSS 4, and shadcn/ui components.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com/)

## Overview

This landing page showcases the Second Brain platform - a comprehensive productivity and knowledge management system that serves as an extension of your mind. The platform features a modular architecture with specialized modules for tasks, projects, notes, databases, and more.

## Features

### 🏗️ **Modular Architecture**
- **Tasks Management**: Organize and track tasks with advanced filtering and views
- **Projects**: Plan and manage projects with timelines and dependencies
- **Notes & Journal**: Rich text editing with Notion-like capabilities
- **Databases**: Custom databases with flexible property types
- **Calendar Integration**: Schedule and time management
- **PARA Method**: Organize knowledge using Projects, Areas, Resources, Archive
- **People & Teams**: Contact management and collaboration features
- **Finance Tracking**: Budget and expense management
- **Templates**: Reusable templates for common workflows
- **Search**: Powerful full-text search across all content

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark Mode**: Built-in theme switching with next-themes
- **Accessible**: WCAG compliant with proper ARIA labels
- **Fast Performance**: Optimized with Next.js 15 and modern web standards

### 🛠️ **Technical Stack**
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety throughout
- **Animations**: Smooth transitions and micro-interactions

## Project Structure

```
landing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Landing page sections
│   │   ├── cta/          # Call-to-action section
│   │   ├── faq/          # FAQ section
│   │   ├── footer/       # Footer section
│   │   ├── hero/         # Hero section
│   │   ├── items/        # Features showcase
│   │   ├── navbar/       # Navigation bar
│   │   ├── pricing/      # Pricing plans
│   │   └── stats/        # Statistics section
│   ├── ui/               # shadcn/ui components
│   └── contexts/         # React contexts
├── config/               # Configuration files
│   └── site.ts           # Site configuration
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

Update `config/site.ts` to customize:
- Site name and URLs
- Social media links
- Pricing information
- Statistics and metrics

## Deployment

This project is configured for deployment on Vercel, Netlify, or any static hosting service:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `out` directory
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

This project is part of the Second Brain platform. See LICENSE.md for details.

---

<p align="center">
  <strong>Second Brain</strong> – Your digital second brain for productivity and knowledge management
</p>
