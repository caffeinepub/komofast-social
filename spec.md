# Komofast Social

## Current State
Admin panel exists at `/admin` with 7 tabs: Posts, Users, Moderation, Marketplace, Monetization, Support, Owner. It is functional but not optimized for mobile screens.

## Requested Changes (Diff)

### Add
- Mobile-first responsive layout for Admin panel
- Bottom tab navigation on mobile (replaces horizontal tab bar)
- Mobile-friendly cards, padding, touch targets
- Collapsible sidebar on mobile with hamburger menu
- Mobile header with back button and title
- Stats cards in 2-column grid on mobile
- Swipeable tabs on mobile

### Modify
- Admin.tsx: make all tab navigation, tables, forms, and cards fully responsive for small screens
- Tab bar: on mobile, show scrollable horizontal tabs or bottom nav with icons
- Tables: convert to card-based list on mobile
- Buttons: larger touch targets (min 44px) on mobile

### Remove
- Nothing removed

## Implementation Plan
1. Refactor Admin.tsx tab navigation to be mobile-responsive (horizontal scrollable tabs with icons on mobile)
2. Convert data tables to mobile card layout using responsive CSS
3. Improve mobile header (sticky, with tab title)
4. Make all buttons and inputs mobile touch-friendly
5. Ensure stats/metric cards use 2-column grid on mobile
6. Test all 7 tabs for mobile layout
