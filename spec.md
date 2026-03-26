# Komofast Social

## Current State
App has Reels camera with 100+ live filters, Beauty Camera, music, GPS, video quality settings, and a separate Video Editor with zoom keyframes. Filters are applied as CSS/canvas overlays on the camera preview.

## Requested Changes (Diff)

### Add
- **Inbuilt Reel Filter Editor** — a full-featured post-capture editing suite inspired by InShot, PicsArt, and VSCO
- **Edit tabs**: Filters, Adjust, Effects, Text, Stickers, Crop/Trim
- **Filters tab**: VSCO-style filter presets grid (C1, A4, HB1, Fade, Moody, Film, etc.) with intensity slider
- **Adjust tab**: Brightness, Contrast, Saturation, Highlights, Shadows, Warmth, Vignette, Sharpness sliders (InShot/VSCO style)
- **Effects tab**: Glitch, Blur, Bokeh, Neon, VHS, Cinematic, Dust & Scratches (PicsArt style)
- **Text tab**: Add text overlays with font styles, colors, background, and size
- **Stickers tab**: Emoji + animated sticker grid (categories: Trending, Emoji, Fun, Love)
- **Crop/Trim tab**: Aspect ratio presets (9:16, 1:1, 4:5, 16:9) and video trim timeline
- New `/reel-editor` route for the editor page
- Access from Reels camera after recording via "Edit" button

### Modify
- Reels camera "Next" button should navigate to `/reel-editor`

### Remove
- Nothing removed

## Implementation Plan
1. Create `/reel-editor` page with full-screen editor UI
2. Bottom tab bar: Filters | Adjust | Effects | Text | Stickers | Trim
3. Filters tab: scrollable horizontal grid of filter thumbnails with preview and intensity slider
4. Adjust tab: vertical list of sliders (Brightness, Contrast, Saturation, Warmth, Highlights, Shadows, Vignette, Sharpness)
5. Effects tab: grid of special effects with preview thumbnails
6. Text tab: tap to add text overlay, font/color/size picker
7. Stickers tab: emoji/sticker grid with categories
8. Trim tab: video timeline scrubber with start/end handles
9. Top bar: Back, Undo, Redo, Export/Share button
10. Full-screen video/image preview with applied effects
11. Add to App.tsx routing
