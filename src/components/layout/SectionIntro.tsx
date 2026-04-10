import { motion } from 'motion/react'

import { reveal } from '@/lib/motion'

type SectionIntroProps = {
  badge: string
  title: string
}

export function SectionIntro({ badge, title }: SectionIntroProps) {
  return (
    <motion.div {...reveal} className="max-w-3xl">
      <span className="section-badge">{badge}</span>
      <h2 className="section-heading mt-5">{title}</h2>
    </motion.div>
  )
}
