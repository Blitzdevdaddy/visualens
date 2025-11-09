# Design Guidelines: Windows AI Agent Landing Page

## Design Approach
**Reference-Based Approach** drawing inspiration from modern AI product sites (Google Lens, Midjourney, OpenAI) and software download pages (VS Code, Figma). Focus on clean, capability-driven design that builds trust while showcasing the AI agent's power.

## Core Design Elements

### Typography
- **Primary Font**: Inter or DM Sans via Google Fonts - modern, tech-forward sans-serif
- **Heading Hierarchy**: 
  - Hero headline: Bold, 3.5-4rem (desktop), 2.5rem (mobile)
  - Section headings: Semibold, 2.5-3rem (desktop), 2rem (mobile)
  - Feature titles: Semibold, 1.5rem
  - Body text: Regular, 1.125rem for primary content, 1rem for secondary
- **Line Height**: 1.2 for headings, 1.6 for body text

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-6 for cards
- Container max-width: max-w-7xl with px-6 horizontal padding

### Page Structure (7 Sections)

**1. Hero Section** (80vh)
- Full-width background with AI-generated imagery or Windows desktop screenshot showing the agent in action
- Centered content with headline, subheadline (max-w-3xl), and dual CTAs
- Primary CTA: "Download for Windows" (prominent, blurred background)
- Secondary CTA: "Watch Demo" (ghost button style)
- Trust indicator below CTAs: "Trusted by 50,000+ Windows users" with user avatars

**2. Capabilities Showcase** (Grid)
- 4-column grid (lg:grid-cols-4 md:grid-cols-2 grid-cols-1)
- Each capability card includes icon (from Heroicons), title, and brief description
- Features: Visual Search, Text Extraction, Object Recognition, Task Automation, Translation, Shopping Assistant, Plant/Animal ID, Code Detection

**3. Demo Section** (Asymmetric Split)
- 60/40 split layout with screenshot gallery on left, feature list on right
- Multiple screenshots showing different use cases in a subtle card grid
- Right side: Detailed feature descriptions with checkmarks

**4. How It Works** (3-Step Process)
- 3-column grid with numbered steps
- Icons representing: Download → Install → Use
- Brief description under each step
- Clean, linear progression with connecting elements

**5. Feature Deep Dive** (Alternating Layout)
- 3 major features with alternating image-text layouts
- Odd features: Image left, text right
- Even features: Text left, image right
- Each section includes headline, paragraph, and 3-4 bullet points

**6. Download Section** (Centered, Prominent)
- Eye-catching container (max-w-4xl)
- Large headline: "Ready to Experience AI-Powered Vision?"
- System requirements below (Windows 10/11, 4GB RAM, etc.)
- Prominent download button with file size indicator
- Secondary links: "View Documentation" | "Report an Issue"

**7. Footer** (Comprehensive)
- 4-column grid: Product (features, pricing), Resources (docs, tutorials), Company (about, contact), Social
- Newsletter signup with inline form
- Copyright and legal links at bottom

### Component Library

**Navigation**
- Fixed header with blur backdrop
- Logo left, navigation links center, download CTA right
- Mobile: Hamburger menu with slide-out drawer

**Buttons**
- Primary: Solid with subtle shadow, rounded-lg, px-8 py-4
- Secondary: Outline with border, matching padding
- Download buttons: Include download icon (Heroicons arrow-down-tray)
- Blurred backgrounds on hero buttons: backdrop-blur-md bg-white/10

**Cards**
- Subtle border with rounded-xl
- Padding: p-6 to p-8
- Hover effect: subtle lift (transform translate-y-1)

**Images/Screenshots**
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadows for depth
- Responsive sizing with object-fit: cover

### Images Section

**Hero Image**: Full-width background showing the AI agent interface overlaid on a Windows desktop, demonstrating visual recognition in action. Image should feel modern, clean, with the agent analyzing an object/text in real-time.

**Demo Screenshots** (3-4 images): 
- Screenshot 1: Text extraction from image
- Screenshot 2: Object recognition identifying products
- Screenshot 3: Translation feature in action
- Screenshot 4: Task automation workflow

**Feature Images** (3 detailed images):
- AI visual search analyzing complex scenes
- Multi-language text recognition
- Smart shopping assistant identifying products

All images should have consistent styling, professional quality, showing actual UI in realistic Windows environment.

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements (ring-2 ring-offset-2)
- Alt text on all images describing functionality

### Animations
Use sparingly for polish:
- Fade-in on scroll for section reveals (subtle, once)
- Smooth hover transitions on cards (transition-all duration-200)
- Download button pulse effect (very subtle)
- NO complex scroll-triggered animations