# ForexTrade Landing Page Clone

## Overview
A pixel-perfect clone of the ForexTrade landing page (https://forexsite.pages.dev/). Dark-themed single page forex trading platform website.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS + Shadcn UI + Framer Motion
- **Backend**: Express (minimal, serves static frontend)
- **Styling**: Dark theme with primary color #615FFF (HSL 242 100% 69%)
- **Fonts**: Poppins (body), Plus Jakarta Sans (headings)

## Project Structure
- `client/src/pages/home.tsx` - Main landing page with all sections
- `client/src/App.tsx` - Router setup
- `client/public/images/` - All downloaded assets (chart2.png, fit1.png, log1-5.png, av1-4.png)
- `client/src/index.css` - CSS variables for dark theme

## Sections
1. Sticky navbar with glass-morphism
2. Hero section with gradient text and dashboard screenshot
3. Partner logos in infinite scroll marquee
4. Features section with interactive feature cards
5. Pricing section with 3 plan tiers
6. Testimonials in auto-scrolling carousel
7. CTA section
8. Footer

## Running
- `npm run dev` starts Express + Vite on port 5000
