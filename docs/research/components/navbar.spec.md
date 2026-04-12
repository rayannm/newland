# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** Sticky with dropdown menus (simplified for clone)

## DOM Structure
Fixed nav bar below announcement banner. Contains: Logo (left) + nav links (center) + Login + Request Demo buttons (right).

## Computed Styles

### Container (nav)
- position: fixed
- top: 0
- left: 0
- right: 0
- zIndex: 1000
- backgroundColor: transparent (on page load), becomes white with shadow on scroll
- height: ~90px (nav portion, excluding banner)
- display: flex
- alignItems: center
- padding: 0 ~96px (padding-global)

### Logo
- Causaly SVG logo, 162x32
- color: rgb(16, 31, 51) (navy)

### Nav Links (center)
- display: flex
- gap: ~32px
- Items: "AI PLATFORM" | "PRODUCTS" | "USE CASES" | "RESOURCES" | "ABOUT"
- fontSize: 14px
- fontWeight: 500
- color: rgb(16, 31, 51)
- textTransform: uppercase
- letterSpacing: ~1px
- Some have dropdown chevron icon (ChevronDownIcon, 17x17)

### Login Button
- border: 1px solid rgb(16, 31, 51)
- borderRadius: 4px
- padding: 8px 20px
- fontSize: 14px
- fontWeight: 500
- color: rgb(16, 31, 51)
- backgroundColor: transparent
- textTransform: uppercase

### Request Demo Button
- backgroundColor: rgb(16, 31, 51)
- color: white
- borderRadius: 4px
- padding: 8px 20px
- fontSize: 14px
- fontWeight: 500
- textTransform: uppercase

## States & Behaviors
- Dropdowns: For this clone, nav links are non-functional (no dropdown menus)
- Scroll: Nav background changes from transparent to white with subtle shadow

## Responsive Behavior
- Desktop: full horizontal nav
- Mobile: hamburger menu (simplified)
