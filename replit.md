# Austin Tables and Chairs - Event Rental Guide

## Overview

Austin Tables and Chairs is a modern, static website built as an unbiased guide for event rentals in Austin, Texas. The site provides comprehensive, research-based information about event rental companies, pricing, equipment options, and planning resources without sponsored content or sales pitches. It's designed to be a trusted resource similar to Wirecutter or Consumer Reports, focusing on educational content that helps users make informed decisions about event planning and rental services.

The application is built as a single-page application (SPA) using React with a static site architecture optimized for SEO and performance, intended for deployment on Cloudflare Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture with the following key decisions:
- **React 18 with TypeScript** for type safety and modern React features
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** with shadcn/ui components for consistent, modern styling
- **Tanstack Query** for client-side state management and data fetching

### Component Structure
- **Modular UI Components**: Uses shadcn/ui component library built on Radix UI primitives
- **Page-based Routing**: Clear separation between pages (home, guides, blog, etc.)
- **Layout Components**: Reusable header and footer components with responsive navigation
- **SEO Components**: Dedicated components for structured data and meta tags

### Styling System
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **CSS Custom Properties**: Comprehensive color system supporting light/dark themes
- **Typography**: Inter font family for modern, readable typography
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Content Management
- **Static Content**: All content is managed through TypeScript/JavaScript data files
- **Blog System**: Static blog implementation with categorized articles
- **Guide Sections**: Structured guide content with consistent formatting
- **SEO Optimization**: Built-in structured data, meta tags, and semantic HTML

### Development Setup
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Vite Configuration**: Custom aliases and development server setup
- **PostCSS**: Tailwind CSS processing with autoprefixer

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for components like dialogs, dropdowns, navigation
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe component variants
- **clsx**: Utility for conditional CSS classes

### Routing and Navigation
- **wouter**: Lightweight routing library for single-page application navigation

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching library

### Forms and Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **typescript**: Type checking and development tooling
- **esbuild**: Fast JavaScript bundler for production builds

### Database and Backend (Configured but Minimal)
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: Database migration and schema management tools

### Utilities and Helpers
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel component functionality

### Development Enhancement
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment