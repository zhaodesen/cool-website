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
]
