# Carlos Nduva — Portfolio

Run: `npm install` then `npm run dev` (http://localhost:3000). Build: `npm run build`.

## Structure
- `src/data.js` — all copy (roles, skills, projects, experience, chapters, soft skills)
- `src/main.js` — page markup + loader, typing, lanyard physics, Beyond Code deck
- `src/styles.css` — all styles
- `src/visuals.js` — vector project previews (swap for real screenshots when available)
- `public/media/` — hero loop video (webm/mp4), poster, ID-card portrait
- `source/carlos-startup-original.mp4` — your original video (not used by the site)

## Completed
- Process timeline: dots 2 and 4 offset fixed (steps now use `--step-off` for stagger margin)
- Project cards: made equal height (`align-items: stretch`, flex column), buttons pinned to bottom with `margin-top: auto`
- Physics: added rest threshold to harmonic pendulum loop to eliminate idle CPU drain
- Accessibility: updated all micro-typography to fluid minimum `clamp(10px, 0.75rem, 11px)`
- Folder restructure: repository moved to root and git initialized

## Known to-do
- About: ID-card crop is tight; consider a looser portrait
- Add real LinkedIn/other social links and a resume PDF (button currently replaced by GitHub)
- Replace illustrative project visuals with real screenshots
