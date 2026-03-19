# Komofast Social

## Current State
Profile page shows creator earnings for creators only. Regular (non-creator) users have no earning/reward section. There is no honor points or customer reward system.

## Requested Changes (Diff)

### Add
- **Honor Earning System** for all customers (Redmi-style honor points)
  - Honor Points balance displayed prominently on profile
  - Earning history: points earned from activities (watch reels, like posts, share, daily login, refer friend, purchase)
  - Honor Level/Tier badge: Bronze, Silver, Gold, Platinum based on total points
  - Redeem section: redeem points for discounts, marketplace credits, or exclusive badges
  - Progress bar showing points needed to reach next tier
- **Customer Earning Profile tab** on Profile page
  - New "Earning" tab alongside Posts and Saved tabs
  - Shows honor points overview card with tier badge
  - Activity breakdown: daily login streak, watch count, likes given, shares, referrals
  - Earning history list with timestamps
  - Redeem button with available rewards

### Modify
- Profile page: add "Earning" tab in tab row
- Profile stats: show Honor Points alongside followers/following for all users

### Remove
- Nothing removed

## Implementation Plan
1. Create mock honor earning data (points, tier, history, rewards)
2. Add HonorEarning tab section in Profile.tsx with:
   - Tier card (Bronze/Silver/Gold/Platinum) with gradient and badge
   - Points progress bar to next tier
   - Activity summary grid (login streak, watches, likes, shares)
   - Earning history list
   - Redeem rewards section
3. Add "Earning" tab button to profile tab row
4. Add small honor points display in profile stats row
