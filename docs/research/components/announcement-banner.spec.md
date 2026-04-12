# AnnouncementBanner Specification

## Overview
- **Target file:** `src/components/AnnouncementBanner.tsx`
- **Interaction model:** Static with close button

## DOM Structure
Full-width bar at the very top. Contains: "Watch Now" badge + text + link + close X button.

## Computed Styles

### Container
- background: rgb(60, 31, 250) (#3C1FFA - indigo)
- padding: 6px 0
- height: ~37px
- display: flex
- justifyContent: center
- alignItems: center
- color: rgb(255, 255, 255)
- fontSize: 14px
- fontFamily: Inter Tight
- position: relative (part of sticky nav)

### "Watch Now" badge
- background: white
- color: rgb(16, 31, 51) (navy)
- fontSize: 14px
- fontWeight: 400
- padding: 2px 8px
- borderRadius: 4px
- marginRight: 8px

### Text
- color: white
- fontSize: 14px
- fontWeight: 400

### Link "Access the recording here"
- color: white
- textDecoration: underline

### Close button (X)
- position: absolute right
- color: white
- cursor: pointer
- 16x16 icon

## Text Content
"Watch Now" | "Learn from Pulitzer Prize winning author Dr. Siddhartha Mukherjee in a conversation with Causaly on the New Pace of Drug Discovery." | "Access the recording here."

## Responsive Behavior
- Desktop: single line
- Mobile: may wrap or hide
