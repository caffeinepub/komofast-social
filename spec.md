# Komofast Social

## Current State
App has Wallet (/wallet), Creator Studio (/creator), and Profile Earning tab. No dedicated Earning Account panel exists.

## Requested Changes (Diff)

### Add
- New `/earning-account` page: a dedicated Earning Account Panel with account overview, all income sources (Ad Revenue, Course Sales, Referrals, Subscriptions, Honor Points), linked bank/UPI accounts, monthly earnings chart, pending payouts, and withdraw button.
- Route for `/earning-account` in App.tsx
- "Earning A/C" link from Profile page (Earning tab)

### Modify
- App.tsx: add route for EarningAccount page
- Profile.tsx: add "Earning Account" button in Earning tab

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/EarningAccount.tsx` with full earning account dashboard
2. Add lazy import + route in App.tsx
3. Add button in Profile Earning tab to navigate to /earning-account
