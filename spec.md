# Komofast Social

## Current State
Social media PWA with blue-purple gradient UI, posts/stories/reels, profile, admin panel, marketplace, chat, honor earning system. No Academy or Wallet pages currently.

## Requested Changes (Diff)

### Add
- `/academy` page: course grid, course detail modal, Netflix-style subscription (₹199/month, ₹999/year), teacher dashboard with earnings/payout, buy individual courses
- `/wallet` page: ₹ balance card, KomoCoin balance, withdraw modal (UPI/Bank), transaction history, earning breakdown
- Admin Monetization tab: revenue stats, commission rate slider, ads toggle, payout approvals
- Academy and Wallet routes in App.tsx
- BottomNav: add Academy (GraduationCap icon) tab replacing or alongside existing tabs

### Modify
- App.tsx: add academy and wallet lazy imports and routes
- BottomNav: add Academy nav item
- Admin.tsx: add Monetization tab with commission/ads/payout controls

### Remove
- Nothing

## Implementation Plan
1. Create Academy.tsx - course grid, tabs (Browse/My Learning/Teach), subscription modal, course buy modal
2. Create Wallet.tsx - balance cards, withdraw modal, transaction history
3. Update App.tsx to add routes
4. Update BottomNav to add Academy tab
5. Update Admin.tsx to add Monetization tab
