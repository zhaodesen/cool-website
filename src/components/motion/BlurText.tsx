import { motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'

type BlurTextProps = {
  text: string
  className?: string
  splitBy?: 'words' | 'letters'
  delay?: number
  direction?: 'bottom' | 'top'
}

export function BlurText({
  text,
  className,
  splitBy = 'words',
  delay = 200,
  direction = 'bottom',
}: BlurTextProps) {
  const smoothEase = [0.22, 1, 0.36, 1] as const
  const ref = useRef<HTMLHeadingElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const parts = useMemo(
    () => (splitBy === 'words' ? text.split(' ') : Array.from(text)),
    [splitBy, text],
  )

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const startY = direction === 'bottom' ? 50 : -50
  return (
    <h1 ref={ref} className={className}>
      {parts.map((part, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          initial={{ filter: 'blur(10px)', opacity: 0, y: startY }}
          animate={
            isVisible
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [startY, direction === 'bottom' ? -5 : 5, 0],
                }
              : undefined
          }
          key={`${part}-${index}`}
          transition={{
            delay: (delay / 1000) * index,
            duration: 1.05,
            ease: smoothEase,
            times: [0, 0.5, 1],
          }}
        >
          {part}
          {splitBy === 'words' ? '\u00A0' : null}
        </motion.span>
      ))}
      <span className="sr-only">{text}</span>
    </h1>
  )
}
