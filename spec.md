# Komofast Social

## Current State
Large-scale social PWA with 52+ features including social feed, reels, chat, video calls, admin panel, marketplace, wallet, creator studio, AI music studio, and monetization tools.

## Requested Changes (Diff)

### Add
- `/ai-voice-bot` page: AI Call Voice Bot with mic button, voice waveform animation, call controls (mute/end), conversation transcript display, voice prompt configuration
- `/ai-support-chat` page: AI Customer Support Chatbot with chat bubble UI, preset FAQ quick-replies, typing indicator, conversation history, escalate to human option
- `/ai-sales-chat` page: AI Sales Chat with product recommendation UI, lead capture form, chat bubbles, sales prompts, product card previews
- All 3 pages accessible from Profile → AI Tools section or bottom nav / home shortcuts
- Route entries in App.tsx for the 3 new pages

### Modify
- App.tsx: Add 3 new lazy imports and route cases
- Profile.tsx or Home.tsx: Add shortcut cards/buttons to navigate to the 3 AI tools

### Remove
- Nothing removed

## Implementation Plan
1. Create `AIVoiceBot.tsx` page
2. Create `AICustomerSupport.tsx` page  
3. Create `AISalesChat.tsx` page
4. Add lazy imports and routes in App.tsx
5. Add AI Tools section in Profile page
