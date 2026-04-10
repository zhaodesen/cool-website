export type LandingPageMeta = {
  slug: string
  title: string
  category: string
  year: string
  outcome: string
  image: string
  summary: string
  tags: string[]
}

export const landingPages: LandingPageMeta[] = [
  {
    slug: 'ai-web-design-agency',
    title: 'AI-Powered Web Design Agency',
    category: 'Landing Page',
    year: '2026',
    outcome: 'Cinematic glass website',
    image: '/images/hero_bg.jpeg',
    summary:
      'A dark premium agency page with video backgrounds, liquid glass UI, motion reveals, and full conversion sections.',
    tags: ['React', 'Vite', 'Tailwind', 'Motion'],
  },
  {
    slug: 'orbis-nft',
    title: 'Orbis.Nft',
    category: 'Landing Page',
    year: '2026',
    outcome: 'Space-themed NFT experience',
    image: '/images/orbis_nft_cover.jpg',
    summary:
      'A dark space NFT landing page with liquid glass surfaces, cinematic video backdrops, and bold editorial typography.',
    tags: ['React', 'Vite', 'Tailwind', 'Lucide'],
  },
  {
    slug: 'velorah-hero',
    title: 'Velorah Hero',
    category: 'Landing Page',
    year: '2026',
    outcome: 'Minimal cinematic hero',
    image: '/images/velorah_hero_cover.jpg',
    summary:
      'A fullscreen cinematic hero with glass navigation, restrained typography, and a pure video-led visual language.',
    tags: ['React', 'Vite', 'Tailwind', 'shadcn/ui'],
  },
]
