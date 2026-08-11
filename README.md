# Till Infinity Play — React rebuild

This project converts the supplied single-file site into the requested React/Vite structure:

- React + Vite
- React Router
- Tailwind CSS
- HLS.js player with supplied multi-route fallback data
- Search and category filtering
- Responsive channel cards
- Favorites with localStorage
- Login/signup UI + AuthContext
- Profile page
- Categories guide
- Watch page + simulated live chat
- Dark premium obsidian/gold visual system
- Monetag meta tag supplied by the user

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Important

The stream URLs in `src/data/channels.js` are copied from the supplied source. Playback depends on the stream provider's availability, CORS policy, HTTPS/mixed-content rules, geo restrictions, and the provider's authorization/rights. Replace them with feeds you are authorized to publish.

The ad component is intentionally a safe placeholder. Insert your ad network's current authorized script in the indicated location instead of blindly reusing third-party scripts.
