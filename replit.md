# VisuaLens AI - Landing Page

## Overview

VisuaLens AI is a marketing landing page for a Windows AI-powered visual assistant application. The site showcases the product's capabilities including visual search, text extraction, object recognition, translation, and code detection. Built as a single-page application with React, it features a hero section, capability showcase, demo galleries, feature deep-dives, and download functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (only Home page and 404 implemented)

**UI Component System**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- "New York" style variant with neutral color scheme and CSS variables for theming
- Custom spacing system based on Tailwind units (4, 6, 8, 12, 16, 20, 24)

**Styling Approach**
- Dark/light mode support via class-based theme switching
- Inter font family from Google Fonts for modern typography
- Custom CSS variables for colors, shadows, and elevation effects
- Responsive design with mobile-first breakpoints

**State Management**
- React Query (TanStack Query) for server state management and API interactions
- React hooks for local component state
- Toast notifications for user feedback via shadcn/ui toast system

**Page Structure**
The landing page follows a 7-section layout pattern:
1. Hero section with full-screen background image and dual CTAs
2. Capabilities showcase in a 4-column responsive grid
3. Demo section with asymmetric split (60/40) showing screenshots and features
4. How It Works - 3-step process visualization
5. Feature deep dive with alternating image-text layouts
6. Download section with CTA
7. Footer with navigation and newsletter subscription

### Backend Architecture

**Server Framework**
- Express.js running on Node.js for HTTP server
- TypeScript throughout the stack for type safety
- ESM (ES Modules) for modern JavaScript module system

**API Structure**
- Routes defined in `server/routes.ts` with `/api` prefix convention
- Currently minimal backend - primarily serves as static file server and Vite middleware host
- Request/response logging middleware for debugging

**Development Mode**
- Vite middleware integration for HMR during development
- Server-side rendering setup for production builds
- Custom error overlays via Replit Vite plugins

**Storage Layer**
- In-memory storage implementation (`MemStorage` class) as baseline
- Interface-based design (`IStorage`) allows swapping to database-backed storage
- User model defined with basic username/password structure
- Drizzle ORM configured for PostgreSQL (not yet implemented)

### Data Storage

**Database Setup (Configured but Not Active)**
- Drizzle ORM with PostgreSQL dialect
- Neon serverless PostgreSQL client (`@neondatabase/serverless`)
- Schema defined in `shared/schema.ts` with Users table
- Migrations directory configured at `./migrations`
- Zod integration for schema validation via `drizzle-zod`

**Current State**
- Application uses in-memory storage (`MemStorage`)
- Database credentials expected via `DATABASE_URL` environment variable
- Ready to migrate to PostgreSQL by switching storage implementation

**Data Models**
- User model: id (UUID), username (unique), password
- Shared schema between client and server via `@shared` alias

### External Dependencies

**UI & Styling**
- Radix UI primitives (accordion, dialog, dropdown, popover, etc.) for accessible components
- Tailwind CSS with PostCSS for styling pipeline
- Lucide React for icon system
- Google Fonts (Inter) for typography

**Build & Development Tools**
- Vite with React plugin for fast development and optimized builds
- TypeScript compiler for type checking
- esbuild for server-side bundling in production
- Replit-specific plugins: runtime error modal, cartographer, dev banner

**State & Data Management**
- TanStack React Query for async state management
- React Hook Form with Zod resolvers for form validation
- date-fns for date manipulation

**Backend Dependencies**
- Express.js for HTTP server
- Drizzle ORM for database interactions
- connect-pg-simple for PostgreSQL session store (configured but unused)
- Neon serverless driver for database connections

**Asset Management**
- Generated images stored in `attached_assets/generated_images/` directory
- Windows installer placeholder in `public/downloads/` directory
- Static assets served from `public/` directory

**Third-Party Services**
- Google Fonts CDN for Inter font family
- No analytics, authentication, or payment services currently integrated
- No external API integrations (self-contained application)