export const smoothEase = [0.22, 1, 0.36, 1] as const

export const reveal = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  whileInView: { filter: 'blur(0px)', opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, ease: smoothEase },
} as const
