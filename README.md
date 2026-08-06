# Neko Singa — Landing Page

The marketing landing page for **Neko Singa**, a crypto market intelligence platform. It highlights trending tokens, social sentiment tracking, and AI-powered market analysis to drive traffic toward the main app.

🔗 Live app: [app-nekosinga.vercel.app](https://app-nekosinga.vercel.app/)

## Features

- **Animated hero** with a typewriter-style ticker cycling through live metrics (mentions tracked, tokens analyzed, signals processed)
- **Trending Tokens** preview showing top movers by social mentions
- **Social Sentiment** gauge visualizing bullish/bearish market mood
- **AI Intelligence** section showcasing sample "Neko Singa AI" conversations
- **Token showcase**, how-it-works steps, and final call-to-action
- Token icons and metadata sourced from CoinGecko

## Tech Stack

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/)
- TypeScript
- Plain CSS (`styles/globals.css`)

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
web-main/
├── components/
│   ├── TokenIcon.tsx
│   └── landing/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── SignalStrip.tsx
│       ├── ProductPreview.tsx
│       ├── MascotSection.tsx
│       ├── FeatureGrid.tsx
│       ├── AIIntelligence.tsx
│       ├── TokenShowcase.tsx
│       ├── HowItWorks.tsx
│       ├── FinalCTA.tsx
│       ├── Footer.tsx
│       └── MetricTicker.tsx
├── lib/
│   └── tokenData.ts       # Token metadata (symbol, name, CoinGecko image)
├── pages/
│   ├── _app.tsx
│   └── index.tsx           # Assembles all landing sections
├── public/                 # Logo & icon assets
├── styles/
│   └── globals.css
├── types/
│   └── landing.ts          # Shared TypeScript interfaces
├── next.config.ts
└── tsconfig.json
```

## Scripts

| Command         | Description                  |
|-----------------|-------------------------------|
| `npm run dev`   | Start the development server  |
| `npm run build` | Build for production          |
| `npm run start` | Start the production server   |

## Notes

- Token images are loaded from `assets.coingecko.com`, whitelisted in `next.config.ts` under `images.remotePatterns`.
- Data shown on the landing page (trending tokens, sentiment stats, AI responses) is illustrative/sample data for presentation purposes — the real data lives in the main app.
