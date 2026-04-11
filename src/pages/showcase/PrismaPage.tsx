import { ArrowRight, Check } from 'lucide-react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import {
  useMemo,
  useRef,
  type ReactNode,
  type CSSProperties,
} from 'react'

type WordPullUpProps = {
  text: string
  className?: string
  showAsterisk?: boolean
}

type MultiStyleSegment = {
  text: string
  className?: string
}

type WordsPullUpMultiStyleProps = {
  segments: MultiStyleSegment[]
  className?: string
}

const featureCards = [
  {
    id: '01',
    title: '项目分镜板',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      '制作前逐帧规划，明确每个镜头目标。',
      '按情绪节奏编排场景推进。',
      '与所有关键角色实时协同。',
      '从概念到交付全程清晰可控。',
    ],
  },
  {
    id: '02',
    title: '智能评审',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      '针对叙事质量优化的 AI 分析。',
      '结合上下文的创意建议，而非泛化反馈。',
      '可接入团队现有工具链。',
    ],
  },
  {
    id: '03',
    title: '沉浸舱',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      '屏蔽打扰，保护深度专注。',
      '环境声景帮助进入持续心流。',
      '按创作节律同步日程。',
    ],
  },
] as const

function WordsPullUp({ text, className, showAsterisk = false }: WordPullUpProps) {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const words = text.split(' ')

  return (
    <h1 className={className} ref={ref}>
      <span className="inline-flex flex-wrap">
        {words.map((word, index) => {
          const isLastWord = index === words.length - 1
          return (
            <motion.span
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="mr-[0.2em] inline-block"
              initial={{ opacity: 0, y: 20 }}
              key={`${word}-${index}`}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {showAsterisk && isLastWord && word.endsWith('a') ? (
                <span className="relative inline-block pr-[0.16em]">
                  {word.slice(0, -1)}a
                  <sup className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">*</sup>
                </span>
              ) : (
                word
              )}
            </motion.span>
          )
        })}
      </span>
    </h1>
  )
}

function WordsPullUpMultiStyle({
  segments,
  className,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const words = useMemo(
    () =>
      segments.flatMap((segment) =>
        segment.text
          .split(' ')
          .filter(Boolean)
          .map((word) => ({
            word,
            className: segment.className ?? '',
          })),
      ),
    [segments],
  )

  return (
    <div className={className} ref={ref}>
      <span className="inline-flex flex-wrap justify-center">
        {words.map((item, index) => (
          <motion.span
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className={`mr-[0.25em] inline-block ${item.className}`}
            initial={{ opacity: 0, y: 20 }}
            key={`${item.word}-${index}`}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.word}
          </motion.span>
        ))}
      </span>
    </div>
  )
}

function AnimatedLetter({
  char,
  index,
  totalChars,
  progress,
}: {
  char: string
  index: number
  totalChars: number
  progress: MotionValue<number>
}) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1],
  )

  return (
    <motion.span className="whitespace-pre-wrap" style={{ opacity }}>
      {char}
    </motion.span>
  )
}

function AnimatedParagraph() {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const content =
    '过去七年里，我与柏林制作团队 Parallax 以及巴黎 Noir Studio 深度合作，共同创作了在多个国际电影节获得认可的作品。'
  const chars = Array.from(content)

  return (
    <p className="mx-auto mt-8 max-w-4xl text-xs text-[#DEDBC8] sm:text-sm md:text-base" ref={ref}>
      {chars.map((char, index) => (
        <AnimatedLetter
          char={char}
          index={index}
          key={`${char}-${index}`}
          progress={scrollYProgress}
          totalChars={chars.length}
        />
      ))}
    </p>
  )
}

function HeroSection() {
  return (
    <section className="h-screen bg-black p-4 md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <nav className="rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {['我们的故事', '创作社群', '工作坊', '项目计划', '联系咨询'].map((item) => (
                <li key={item}>
                  <a
                    className="text-[10px] sm:text-xs md:text-sm transition-colors"
                    href="#"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-8 sm:px-8 md:px-10 md:pb-10 lg:px-12 lg:pb-12">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                showAsterisk
                text="Prisma"
              />
            </div>

            <div className="col-span-12 pb-4 lg:col-span-4">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Prisma 是一个全球视觉艺术家、导演与叙事者网络。我们不以地域和头衔划分，只以热爱与创造力连接彼此。
              </motion.p>
              <motion.button
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-black transition-all hover:gap-3 sm:px-4 sm:py-2 sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                加入实验室
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-[#DEDBC8]" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="bg-black px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-6 py-12 text-center md:px-10 md:py-16">
        <p className="text-[10px] text-primary sm:text-xs">视觉艺术</p>

        <WordsPullUpMultiStyle
          className="mx-auto mt-5 max-w-3xl text-3xl leading-[0.95] text-[#E1E0CC] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          segments={[
            { text: '我是陈马克，' },
            { text: '一名自学成才的导演。', className: 'font-serif italic' },
            {
              text: '擅长调色、视觉特效与叙事设计。',
            },
          ]}
        />

        <AnimatedParagraph />
      </div>
    </section>
  )
}

function FeatureCard({
  delay,
  children,
}: {
  delay: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.article
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      className="h-full rounded-3xl bg-[#212121] p-5"
      initial={{ opacity: 0, scale: 0.95 }}
      ref={ref}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  )
}

function FeaturesSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-16 md:py-24">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <WordsPullUpMultiStyle
          className="mx-auto max-w-5xl text-center text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
          segments={[
            {
              text: '面向远见创作者的工作室级流程。',
              className: 'text-[#E1E0CC]',
            },
          ]}
        />
        <WordsPullUpMultiStyle
          className="mx-auto mt-3 max-w-5xl text-center text-xl font-normal text-gray-500 sm:text-2xl md:text-3xl lg:text-4xl"
          segments={[{ text: '为纯粹表达而生，以艺术驱动。' }]}
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-2 lg:h-[480px] lg:grid-cols-4 lg:gap-1">
          <FeatureCard delay={0}>
            <div className="relative h-full overflow-hidden rounded-2xl">
              <video autoPlay className="h-full w-full object-cover" loop muted playsInline>
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="absolute bottom-4 left-4 text-sm text-[#E1E0CC]">你的创意画布。</p>
            </div>
          </FeatureCard>

          {featureCards.map((card, index) => (
            <FeatureCard delay={0.15 * (index + 1)} key={card.title}>
              <div className="flex h-full flex-col">
                <img
                  alt={card.title}
                  className="h-10 w-10 rounded object-cover sm:h-12 sm:w-12"
                  src={card.icon}
                />
                <h3 className="mt-6 text-lg text-[#E1E0CC] sm:text-xl">
                  {card.title} <span className="text-gray-500">({card.id})</span>
                </h3>

                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li className="flex items-start gap-2" key={item}>
                      <Check className="mt-[2px] h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>

                <a className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-[#E1E0CC]" href="#">
                  了解更多
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PrismaPage() {
  return (
    <main
      className="prisma-page bg-black text-white"
      style={
        {
          '--primary': '48 20% 84%',
        } as CSSProperties
      }
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  )
}
