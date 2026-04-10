import type { ComponentType } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { AiWebDesignAgencyPage } from '@/pages/showcase/AiWebDesignAgencyPage'

const showcaseMap: Record<string, ComponentType> = {
  'ai-web-design-agency': AiWebDesignAgencyPage,
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
