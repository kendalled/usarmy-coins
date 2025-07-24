# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-ready Nuxt 4 e-commerce site for US Army Coins, specializing in custom military challenge coins for all branches of the US military. The site features a modern, responsive design with dynamic quote building, trust-building elements, and a comprehensive gallery of delivered coins.

## Development Commands

### Core Development
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

### Installation
```bash
# Install dependencies (any of these work)
npm install
# or yarn install, pnpm install, bun install
```

## Architecture & Structure

### Tech Stack
- **Framework**: Nuxt 4 (Vue 3, Vite)
- **Styling**: Tailwind CSS v4
- **Content**: @nuxt/content module for markdown pages
- **Routing**: File-based routing with pages/

### Key Architectural Patterns

#### Component Organization
- **Pages** (`pages/`): Route components (index.vue, [...slug].vue for dynamic routes)
- **Components** (`components/`): Reusable UI components with clear naming
- **Content** (`content/`): Markdown files for SEO pages and military branch content
- **Public** (`public/`): Static assets organized by type (images/, coins/, gallery/, etc.)

#### Component Naming & Structure
- Use PascalCase for component names (e.g., `ZeroNavbar`, `AnimatedHero`)
- Prefix alternative components with "Alt" (e.g., `AltAnimatedHero`)
- Use Zero-prefixed components for the current design system
- Keep components in `components/alts/` for alternative versions

#### Design System Standards

**Colors & Styling**:
- Primary: `orange-500/600` for CTAs and accents
- Backgrounds: `slate-700/800` for dark themes
- Text: `white/slate-200` for readability
- Gradients: `bg-linear-to-r from-orange-500 to-orange-600` for buttons

**Layout Patterns**:
- Container: `max-w-336` with `mx-auto px-4 sm:px-6 lg:px-8`
- Fixed navbar spacing: `pt-24` to account for fixed header
- Responsive: Mobile-first with `grid-cols-1 md:grid-cols-2` patterns

**Interactive Elements**:
- Smooth transitions: `transition-all duration-300`
- Subtle hover effects: `hover:-translate-y-0.5`
- Backdrop blur for overlays: `backdrop-blur-sm`

### Content Management

#### Military Branch Content
- Each branch has dedicated markdown files in `content/coins/`
- Consistent structure across branches with branch-specific terminology
- Content includes specifications, customization options, and use cases

#### Image Organization
- `public/images/coins/`: Rendered coin images for each military branch
- `public/images/gallery/`: Delivered coin examples
- `public/images/plating/`: Different plating options (gold, silver, copper, etc.)
- `public/images/misc/`: General site imagery

### Key Features

#### Quote Builder System
- Image-based selection interface for coin customization
- Dynamic pricing and option selection
- Trust indicators and social proof integration

#### Trust Building Elements
- Live order counters and production timers
- "Made in USA" badges and quality indicators
- Real testimonials and delivered coin gallery

#### SEO & Content Strategy
- Dynamic routing with `[...slug].vue` for content pages
- Military branch-specific landing pages
- Structured content with proper meta information

## Development Notes

### Component Development
- Use `<script setup>` syntax for all new components
- Follow Vue 4 Composition API patterns
- Maintain single responsibility principle
- Extract reusable logic to composables when appropriate

### State Management
- Use `ref()` for primitive values, `reactive()` for objects
- Prefer computed properties over watchers
- Keep component state minimal, use props for data flow

### Performance Considerations
- Lazy load heavy components
- Use `v-show` for frequent toggles
- Keep expensive operations out of templates
- Optimize images in the public directory

### Military Content Guidelines
- Maintain respectful military terminology
- Include branch-specific traditions and insignias
- Focus on ceremonial and recognition use cases
- Ensure content accuracy for military audience

### Testing & Development Guidelines
- DO NOT run `npm run dev` or `npm run build` automatically to test changes
- The user will handle running development server and builds manually
- Focus on making code changes and explaining what was done
- Let the user verify functionality in their own environment