import { Suspense, lazy } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const showcaseMap = {
  'ai-web-design-agency': lazy(() =>
    import('@/pages/showcase/AiWebDesignAgencyPage').then((module) => ({
      default: module.AiWebDesignAgencyPage,
    })),
  ),
  'asme-studio': lazy(() =>
    import('@/pages/showcase/AsmeStudioPage').then((module) => ({
      default: module.AsmeStudioPage,
    })),
  ),
  'aethera-hero': lazy(() =>
    import('@/pages/showcase/AetheraHeroPage').then((module) => ({
      default: module.AetheraHeroPage,
    })),
  ),
  bloom: lazy(() =>
    import('@/pages/showcase/BloomPage').then((module) => ({
      default: module.BloomPage,
    })),
  ),
  mindloop: lazy(() =>
    import('@/pages/showcase/MindloopPage').then((module) => ({
      default: module.MindloopPage,
    })),
  ),
  'orbis-nft': lazy(() =>
    import('@/pages/showcase/OrbisNftPage').then((module) => ({
      default: module.OrbisNftPage,
    })),
  ),
  prisma: lazy(() =>
    import('@/pages/showcase/PrismaPage').then((module) => ({
      default: module.PrismaPage,
    })),
  ),
  'velorah-hero': lazy(() =>
    import('@/pages/showcase/VelorahHeroPage').then((module) => ({
      default: module.VelorahHeroPage,
    })),
  ),
  'vex-hero': lazy(() =>
    import('@/pages/showcase/VexHeroPage').then((module) => ({
      default: module.VexHeroPage,
    })),
  ),
  'viktor-oddy': lazy(() =>
    import('@/pages/showcase/ViktorOddyPage').then((module) => ({
      default: module.ViktorOddyPage,
    })),
  ),
} as const

type ShowcaseSlug = keyof typeof showcaseMap

export function ShowcasePage() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate replace to="/" />
  }

  const Component = showcaseMap[slug as ShowcaseSlug]
  if (!Component) {
    return <Navigate replace to="/" />
  }

  return (
    <Suspense fallback={<ShowcaseLoadingFallback />}>
      <Component />
    </Suspense>
  )
}

function ShowcaseLoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
      <div className="space-y-3">
        <p className="font-heading text-4xl italic text-white">Loading</p>
        <p className="font-body text-sm text-white/55">作品页面加载中…</p>
      </div>
    </div>
  )
}
