import type { ComponentType } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { AiWebDesignAgencyPage } from '@/pages/showcase/AiWebDesignAgencyPage'
import { AsmeStudioPage } from '@/pages/showcase/AsmeStudioPage'
import { AetheraHeroPage } from '@/pages/showcase/AetheraHeroPage'
import { BloomPage } from '@/pages/showcase/BloomPage'
import { MindloopPage } from '@/pages/showcase/MindloopPage'
import { OrbisNftPage } from '@/pages/showcase/OrbisNftPage'
import { PrismaPage } from '@/pages/showcase/PrismaPage'
import { VelorahHeroPage } from '@/pages/showcase/VelorahHeroPage'
import { VexHeroPage } from '@/pages/showcase/VexHeroPage'
import { ViktorOddyPage } from '@/pages/showcase/ViktorOddyPage'

const showcaseMap: Record<string, ComponentType> = {
  'ai-web-design-agency': AiWebDesignAgencyPage,
  'asme-studio': AsmeStudioPage,
  'aethera-hero': AetheraHeroPage,
  bloom: BloomPage,
  mindloop: MindloopPage,
  'orbis-nft': OrbisNftPage,
  prisma: PrismaPage,
  'velorah-hero': VelorahHeroPage,
  'vex-hero': VexHeroPage,
  'viktor-oddy': ViktorOddyPage,
}

export function ShowcasePage() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate replace to="/" />
  }

  const Component = showcaseMap[slug]
  if (!Component) {
    return <Navigate replace to="/" />
  }

  return <Component />
}
