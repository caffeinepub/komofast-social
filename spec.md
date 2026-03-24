# Komofast Social

## Current State
Full-featured social media PWA with posts, reels, stories, chat, creator tools, academy, wallet, admin dashboard, multi-language support (10 Indian languages), and more.

## Requested Changes (Diff)

### Add
- Friend Request system: Send, Accept, Decline friend requests
- Friends list page (`/friends`) with tabs: Requests, Friends, Suggestions
- Accept/Decline buttons on incoming requests
- Friend badge on user profiles (Friends indicator)
- Chat now accessible directly from friend profile
- Notification indicator for pending friend requests (top bar)

### Modify
- Profile page: Add "Add Friend" / "Friends" / "Pending" button
- Chat page: Show friends list for easy messaging

### Remove
- Nothing removed

## Implementation Plan
1. Add `FriendsPage` component at `/friends` with 3 tabs: Friend Requests, My Friends, Suggested People
2. Add friend request state management (mock data: sent, received, accepted)
3. Update Profile page with dynamic friend button (Add Friend → Pending → Friends)
4. Add notification badge on top bar for pending friend requests
5. Update Chat page to show friends list as quick-start contacts
