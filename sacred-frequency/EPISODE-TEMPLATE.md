# Sacred Frequency — Episode Template

Brand: `video-toolkit/brands/josnify` (font is a placeholder; swap in `brand.json` once chosen).

## Workflow (run from `video-toolkit/`)
1. `/video` → pick `product-demo` or `sprint-review` as a base, brand `josnify`
2. Write the script below (about 150 words/min; a 10-min video is about 1,500 words)
3. Visuals: `uv run tools/flux2.py --prompt "sacred geometry, deep indigo and gold, no text"`
4. Music: `uv run tools/music_gen.py --preset ambient --duration 600 --output music.mp3`
5. Voiceover: `uv run tools/voiceover.py --scene-dir public/audio/scenes --json`
6. Thumbnail: `uv run tools/ideogram4.py --prompt "Thumbnail: '528 Hz' gold on deep indigo" --output thumb.png`
7. `npm run render`, then `/publish` (uploads private by default)

## Episode
- Title:
- Frequency (Hz):
- Intention / benefit:

## Script
### Scene 1 — Hook (5–10s)
### Scene 2 — Intro to the frequency
### Scene 3 — Guided listening / main track
### Scene 4 — Outro + subscribe
