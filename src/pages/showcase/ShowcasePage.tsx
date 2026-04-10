import type { ComponentType } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { AiWebDesignAgencyPage } from '@/pages/showcase/AiWebDesignAgencyPage'
import { OrbisNftPage } from '@/pages/showcase/OrbisNftPage'
import { VelorahHeroPage } from '@/pages/showcase/VelorahHeroPage'

const showcaseMap: Record<string, ComponentType> = {
  'ai-web-design-agency': AiWebDesignAgencyPage,
  'orbis-nft': OrbisNftPage,
  'velorah-hero': VelorahHeroPage,
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
