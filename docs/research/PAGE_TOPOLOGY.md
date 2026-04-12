# Causaly.com Page Topology

## Page Overview
- **URL:** https://www.causaly.com/
- **Title:** Causaly: The Agentic AI Platform For Life Sciences
- **Total height:** ~6116px
- **Sections:** 8 `<section>` elements + fixed navbar + banner
- **Tech stack:** Webflow, Swiper.js for carousels
- **Fonts:** Inter Tight (body), Neue Regrade Variable (headings), Inter (misc)

## Section Map (top to bottom)

### Fixed Overlay: Banner Bar
- **Class:** `nav-banner`
- **Background:** `rgb(60, 31, 250)` (bright indigo/purple)
- **Height:** ~37px
- **Content:** "Watch Now" badge + Pulitzer Prize webinar promo + close X
- **Position:** Fixed, z-index 1000 (part of nav)

### Fixed Overlay: Navigation Bar
- **Class:** `navbar-component`
- **Background:** transparent (becomes white on scroll)
- **Height:** ~126px (incl banner)
- **Position:** fixed, top: 0, z-index: 1000
- **Content:** Logo + AI PLATFORM | PRODUCTS | USE CASES (dropdowns) | RESOURCES | ABOUT + LOGIN + REQUEST A DEMO buttons
- **Behavior:** Sticky with banner; dropdowns are mega-menus

### S0: Hero Section
- **Class:** `section position-relative`
- **Background:** white/transparent
- **Height:** ~1000px
- **Content:**
  - H1: "Unlock R&D decision velocity with the Agentic AI platform for life sciences"
  - Subtitle paragraph
  - "REQUEST A DEMO" button
  - Decorative SVG/Lottie animations (nodes/connections graph on right side)
  - "Trusted by the world's best companies" logo bar (L'Oreal, IPSEN, Lupin, Teva, UCB, Eisai, ProQR, Scripps Research)
- **Images:** 9 (logo images for partner companies)
- **Interaction model:** Static with decorative animations

### S1: Causaly Platform (Tabbed Section)
- **Class:** `section`
- **Background:** white/transparent
- **Height:** ~1091px
- **Content:**
  - Eyebrow: "CAUSALY PLATFORM" (uppercase, letter-spacing 3.2px)
  - H2: "An enterprise AI workspace for science-backed decisions"
  - Description paragraph
  - **4 Tabs:** Agentic Research | BIO GRAPH | PIPELINE GRAPH | PRIVATE DATA
  - Each tab shows: H3 title + description + "Learn more" link + full-width image
- **Tab Content:**
  - Tab 1 (Agentic Research): "Your Science-Grade AI Partner for R&D"
  - Tab 2 (Bio Graph): "Cause-and-Effect Biology At A Glance"
  - Tab 3 (Pipeline Graph): "Science Meets Competitive Intelligence"
  - Tab 4 (Private Data): "Amplify R&D With Your IP"
- **Images:** 2 (full-width product screenshots per tab)
- **Interaction model:** Click-driven tabs (Webflow w-tab)

### S2: Use Cases (R&D Pipeline)
- **Class:** `section navy-blue-bg`
- **Background:** `rgb(16, 31, 51)` (dark navy)
- **Height:** ~998px
- **Content:**
  - Eyebrow: "USE CASES" (uppercase, letter-spacing 3.2px)
  - H2: "Supporting the full R&D pipeline"
  - Description paragraph
  - 3 cards in horizontal layout:
    1. "Identify and prioritize targets"
    2. "Discover novel indications"
    3. "Validate evidence for regulatory filings"
  - Each card has description + "Learn more" link + image
- **Images:** 3 (use case thumbnail images, ~940x451)
- **Interaction model:** Static with hover states on cards

### S3: Why Causaly (Differentiators)
- **Class:** `section`
- **Background:** white/transparent
- **Height:** ~992px
- **Content:**
  - Eyebrow: "WHAT MAKES CAUSALY DIFFERENT"
  - H2: "AI for high-stakes science. Not generic chat."
  - Description paragraph
  - 4 feature cards (swiper/carousel):
    1. "Continuity and quality, end-to-end" (icon + description)
    2. "Rigorous, relevant scientific search" (icon + description)
    3. "Grounded in fact, not fiction" (icon + description)
    4. "Firm data foundations" (icon + description)
- **Images:** 4 (64x65 icon images)
- **Interaction model:** Swiper carousel with nav arrows + drag scrollbar

### S4: Testimonial
- **Class:** `section navy-blue-bg`
- **Background:** `rgb(16, 31, 51)` (dark navy)
- **Height:** ~358px
- **Content:**
  - Quote: "We previously conducted a big proteomics study..."
  - Attribution: "Senior Scientist, Top 20 Pharma"
  - 5-star rating image
  - Author photo + Causaly logo
- **Images:** 3 (stars, photo, logo)
- **Interaction model:** Static

### S5: Professional Services
- **Class:** `section`
- **Background:** white/transparent
- **Height:** ~617px
- **Content:**
  - H2: "Explore science. Automate work. We'll support you all the way."
  - Long description paragraph about PhD scientists, workflow optimization
- **Images:** 0
- **Interaction model:** Static

### S6: CTA Block
- **Class:** `section light-steel-bg`
- **Background:** `rgb(242, 242, 242)` (light gray)
- **Height:** ~669px
- **Content:**
  - H2: "Get started with Causaly" (white text on dark?)
  - Description + "Request a demo" button
  - Gradient decorative lines
  - Decorative images
- **Images:** 2 (decorative CTA images)
- **Interaction model:** Static

### S7: Footer
- **Class:** `section mid-steel-bg`
- **Background:** `rgb(212, 223, 228)` (mid gray)
- **Height:** ~391px
- **Content:**
  - Causaly logo
  - Description text
  - Link columns: About, Request a demo, Contact us, Resources, Careers
  - Legal: Privacy policy, Terms of service, Cookies settings
  - Copyright 2026
  - Social icons (LinkedIn)
- **Images:** 1 (footer logo)
- **Interaction model:** Static

## Color Palette
- **Primary dark (navy):** `rgb(16, 31, 51)` — #101F33
- **Accent purple (indigo):** `rgb(60, 31, 250)` — #3C1FFA
- **Accent red (coral):** `rgb(255, 80, 56)` — #FF5038
- **Text muted:** `rgb(85, 103, 126)` — #55677E
- **Text muted lighter:** `rgb(104, 126, 155)` — #687E9B
- **Borders:** `rgb(212, 223, 228)` — #D4DFE4
- **Light BG:** `rgb(242, 242, 242)` — #F2F2F2
- **Mid BG:** `rgb(212, 223, 228)` — #D4DFE4
- **White:** `rgb(255, 255, 255)`

## Typography
- **H1:** 64px/76.8px, Neue Regrade Variable, weight 500, color navy
- **H2:** 48px/57.6px, Neue Regrade Variable, weight 500
- **H3:** 24-32px, Neue Regrade Variable, weight 500
- **Body:** 16px/22.4px, Inter Tight, weight 300-400
- **Description:** 18px/27px, Inter Tight, weight 300, color muted
- **Eyebrow/Label:** 16px, Inter Tight, weight 500, uppercase, letter-spacing 3.2px, color muted
- **Button:** 20px, Inter Tight, weight 500, uppercase, padding 16px 32px, border-radius 4px
- **Nav links:** 14px, Inter Tight, weight 500
