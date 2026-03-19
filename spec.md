# Komofast Social

## Current State
Admin dashboard at `/admin` has an Owner tab with: Admin Management, Platform Settings, Danger Zone, Customer Support, and Transfer Ownership sections.

## Requested Changes (Diff)

### Add
- **Revenue Settings** card in Owner tab: creator revenue share % slider, platform commission %, ad revenue distribution toggle, payout threshold input, payout schedule (weekly/monthly)
- **Banned Words Filter** card in Owner tab: add/remove banned words list, enable/disable filter toggle, auto-action selector (hide/remove/warn)

### Modify
- Owner tab layout: insert Revenue Settings and Banned Words Filter cards between Platform Settings and Danger Zone

### Remove
- Nothing removed

## Implementation Plan
1. Add `revenueSettings` state (creatorShare, platformCommission, adRevenue, payoutThreshold, payoutSchedule)
2. Add `bannedWords` state with a default list, plus input to add/remove words
3. Add filter toggle and auto-action selector state
4. Render Revenue Settings card with sliders/inputs
5. Render Banned Words Filter card with word chips and add input
