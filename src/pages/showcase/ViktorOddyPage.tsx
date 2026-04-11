import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

import { useInViewAnimation } from '@/hooks/useInViewAnimation'

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
]

const testimonials = [
  {
    name: 'Marcus Anderson',
    role: 'Data.storage 首席执行官',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    quote:
      '在极少前置指导下，团队依然交付了精准且具战略性的设计成果。',
  },
  {
    name: 'alexwu',
    role: 'Nexgate 创始人',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    quote:
      'Viktor 主导完成了我们至今最强融资路演，并把复杂愿景转化为有说服力的叙事。',
  },
  {
    name: 'James Mitchell',
    role: 'LaunchPad 产品副总裁',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    quote:
      '与 Viktor 合作重塑了我们的产品愿景，也让团队围绕同一叙事高效对齐。',
  },
  {
    name: 'Rachel Foster',
    role: 'Nexus Labs 联合创始人',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    quote:
      '设计质量远超预期，让我们的品牌信心实现了立竿见影的跃迁。',
  },
  {
    name: 'David Zhang',
    role: 'Paradigm Labs 设计负责人',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    quote: '从开始到结束都非常出色，速度、精度与审美兼具。',
  },
] as const

const projects = [
  {
    name: 'evr',
    desc: '从想法到融资数百万的 Web3 AI 产品',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    desc: '重构工业自动化流程效率',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    desc: '现代化投资组合管理平台',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
] as const

type StudioButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
}

function StudioButton({ children, href = '#', variant = 'primary' }: StudioButtonProps) {
  const common = 'inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base transition'

  const styles =
    variant === 'primary'
      ? 'bg-[#051A24] text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]'
      : 'bg-white text-[#051A24] shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]'

  return (
    <a className={`${common} ${styles}`} href={href}>
      {children}
    </a>
  )
}

function HeroSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section className="mx-auto max-w-[440px] px-6 pt-12 md:pt-16" ref={ref}>
      <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
        <h1 className="font-mondwest text-[32px] font-semibold tracking-tight text-[#051A24] md:text-[40px] lg:text-[44px]">
          Viktor Oddy
        </h1>
      </div>

      <p className={isVisible ? 'mt-2 font-mono text-xs text-[#051A24] md:text-sm animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
        Viktor Oddy 的创意工作室
      </p>

      <h2 className={isVisible ? 'mt-2 whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px] animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
        构建<span className="font-mondwest">下一波浪潮</span>，
        <br />
        以<span className="font-mondwest">更大胆的方式。</span>
      </h2>

      <div className={isVisible ? 'mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
        <p>
          我在 Apple 工作七年，打造过服务十亿用户的产品。后来我创立 Vortex Studio，把同等级的思考方法带给下一代创新者。
        </p>
        <p>
          我们刻意保持小团队模式。每个项目都由我亲自把控创意方向，并由经验丰富的设计团队高效推进。
        </p>
        <p>项目合作起价为每月 5,000 美元。</p>
      </div>

      <div className={isVisible ? 'mt-5 flex flex-col gap-3 sm:flex-row md:mt-6 md:gap-4 animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.5s' }}>
        <StudioButton href="https://halaskastudio.com/./book" variant="primary">
          开始沟通
        </StudioButton>
        <StudioButton href="#projects" variant="secondary">
          查看项目
        </StudioButton>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const rows = useMemo(() => [...marqueeImages, ...marqueeImages], [])

  return (
    <section className="mb-16 mt-16 overflow-hidden md:mt-20">
      <div className="viktor-marquee-track flex w-max items-center">
        {rows.map((src, index) => (
          <img
            alt="工作展示"
            className="mx-3 h-[280px] rounded-2xl object-cover shadow-lg md:h-[500px]"
            key={`${src}-${index}`}
            src={src}
          />
        ))}
      </div>
    </section>
  )
}

function TestimonialQuoteSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()
  const imageRef = useRef<HTMLImageElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = wrapRef.current
    const image = imageRef.current
    if (!node || !image) return

    let raf = 0
    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - (rect.top + rect.height / 2) / vh))
      const y = (progress - 0.5) * 200
      image.style.transform = `translateY(${y}px)`
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          update()
          window.addEventListener('scroll', onScroll, { passive: true })
        } else {
          window.removeEventListener('scroll', onScroll)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(node)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="mx-auto max-w-2xl px-6 py-12" ref={ref}>
      <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
        <Quote className="h-6 w-6 text-slate-900" />
      </div>

      <h3 className={isVisible ? 'mt-6 text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px] animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
        我离开 <span className="font-mondwest">苹果</span>，
        去打造我一直想合作的那种工作室
      </h3>

      <p className={isVisible ? 'mt-4 text-sm italic text-[#273C46] animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
        Viktor Oddy
      </p>

      <div className={isVisible ? 'mt-8 flex items-center justify-between gap-4 animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
        <span className="w-[80px] text-center text-[24px] font-medium text-slate-900">苹果</span>
        <span className="w-[83px] text-center text-[24px] font-medium text-slate-900">伊迪欧</span>
        <span className="w-[110px] text-center text-[24px] font-medium text-slate-900">多边形</span>
      </div>

      <div className={isVisible ? 'mt-10 flex justify-center overflow-hidden animate-fade-in-up' : 'opacity-0'} ref={wrapRef} style={{ animationDelay: '0.5s' }}>
        <img
          alt="Chris Halaska"
          className="w-full max-w-xs rounded-2xl shadow-lg will-change-transform"
          ref={imageRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
        />
      </div>
    </section>
  )
}

function PricingSection() {
  const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

  return (
    <section className="px-6 py-12" ref={ref}>
      <div className="ml-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <article className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} rounded-[40px] bg-[#051A24] pb-10 pl-10 pr-10 pt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:pr-24`} style={{ animationDelay: '0.1s' }}>
          <h4 className="text-[22px] font-medium text-[#F6FCFF]">月度合作</h4>
          <p className="mt-4 whitespace-pre-line text-sm text-[#E0EBF0]">
            专属创意设计团队。{"\n"}你将直接与 Viktor 协作。
          </p>
          <p className="mt-8 text-2xl text-[#F6FCFF]">$5,000</p>
          <p className="text-sm text-[#E0EBF0]">每月</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StudioButton href="https://halaskastudio.com/./book" variant="primary">
              开始沟通
            </StudioButton>
            <StudioButton href="https://halaskastudio.com/./book" variant="secondary">
              合作方式
            </StudioButton>
          </div>
        </article>

        <article className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} rounded-[40px] bg-white pb-10 pl-10 pr-10 pt-3 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:pr-24`} style={{ animationDelay: '0.2s' }}>
          <h4 className="text-[22px] font-medium text-[#0D212C]">定制项目</h4>
          <p className="mt-4 whitespace-pre-line text-sm text-[#273C46]">
            固定范围，固定周期。{"\n"}同一团队，同一标准。
          </p>
          <p className="mt-8 text-2xl text-[#0D212C]">$5,000</p>
          <p className="text-sm text-[#273C46]">最低起步</p>
          <div className="mt-8">
            <StudioButton href="https://halaskastudio.com/./book" variant="secondary">
              开始沟通
            </StudioButton>
          </div>
        </article>
      </div>
    </section>
  )
}

function TestimonialCarouselSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [paused])

  const current = testimonials[index]

  return (
    <section className="px-6 py-20">
      <div className="ml-auto max-w-4xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h3 className="text-[32px] tracking-tight text-[#0D212C] md:text-[44px]">
            <span className="font-mondwest">创作者</span>怎么说
          </h3>
          <div className="flex items-center gap-2 text-[#0D212C]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star className="h-5 w-5 fill-black" key={i} />
            ))}
            <span className="ml-2 text-sm">客户评分 5/5</span>
          </div>
        </div>

        <div
          className="mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between mb-4">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20"
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              type="button"
            >
              <ChevronLeft className="h-5 w-5 text-[#0D212C]" />
            </button>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/20"
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              type="button"
            >
              <ChevronRight className="h-5 w-5 text-[#0D212C]" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              animate={{ opacity: 1, scale: 1 }}
              className="w-full rounded-[32px] bg-white px-6 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] md:rounded-[40px] md:pl-10 md:pr-24"
              exit={{ opacity: 0, scale: 0.97 }}
              initial={{ opacity: 0, scale: 0.97 }}
              key={current.name}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <svg className="mb-6 h-8 w-8 text-[#0D212C]" viewBox="0 0 24 24">
                <path
                  d="M4 14.5C4 10.9 6.1 8 9.6 7.2L10.4 8.8C8.5 9.5 7.3 10.9 7 12.8H10V18H4V14.5ZM14 14.5C14 10.9 16.1 8 19.6 7.2L20.4 8.8C18.5 9.5 17.3 10.9 17 12.8H20V18H14V14.5Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-base leading-relaxed text-[#0D212C]">{current.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  alt={current.name}
                  className="h-12 w-12 rounded-full object-cover"
                  src={current.avatar}
                />
                <div>
                  <p className="text-sm font-semibold text-[#0D212C]">{current.name}</p>
                  <p className="text-sm text-[#273C46]">→ {current.role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project) => {
          const { ref, isVisible } = useInViewAnimation<HTMLDivElement>()

          return (
            <div key={project.name} ref={ref}>
              <div className={`ml-20 md:ml-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h3 className="font-mondwest text-2xl font-semibold text-[#051A24] md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-[#051A24]/70 md:text-base">{project.desc}</p>
              </div>
              <img
                alt={project.name}
                className={`mt-8 w-full rounded-2xl object-cover shadow-lg ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                src={project.image}
                style={{ animationDelay: '0.15s' }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PartnerSection() {
  const [trails, setTrails] = useState<
    { id: number; x: number; y: number; rotation: number; src: string }[]
  >([])
  const lastSpawn = useRef(0)

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now()
    if (now - lastSpawn.current < 80) return
    lastSpawn.current = now

    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotation = Math.random() * 20 - 10
    const src = marqueeImages[Math.floor(Math.random() * marqueeImages.length)]
    const id = now + Math.floor(Math.random() * 1000)

    setTrails((prev) => [...prev, { id, x, y, rotation, src }])
    window.setTimeout(() => {
      setTrails((prev) => prev.filter((item) => item.id !== id))
    }, 1000)
  }

  return (
    <section className="px-6 py-12">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-white py-48 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        onMouseMove={onMove}
      >
        {trails.map((trail) => (
          <motion.img
            animate={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-none absolute h-24 w-24 rounded-xl object-cover"
            initial={{ opacity: 0.9, scale: 1 }}
            key={trail.id}
            src={trail.src}
            style={{
              left: trail.x - 48,
              top: trail.y - 48,
              rotate: `${trail.rotation}deg`,
            }}
            transition={{ duration: 1 }}
          />
        ))}

        <div className="relative z-10 text-center">
          <h3 className="font-mondwest text-[48px] text-[#0D212C] md:text-[64px] lg:text-[80px]">
            与我们合作
          </h3>
          <a
            className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full bg-[#051A24] px-7 py-3 text-white shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]"
            href="https://halaskastudio.com/./book"
          >
            <img
              alt="Viktor 头像"
              className="h-10 w-10 rounded-full object-cover"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            />
            与 Viktor 开始沟通
          </a>
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <>
      <footer className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-6 py-12 md:flex-row">
        <StudioButton href="https://halaskastudio.com/./book" variant="primary">
          开始沟通
        </StudioButton>

        <div className="flex items-start gap-8">
          <ArrowUpRight className="mt-1 h-5 w-5 text-[#051A24]" />
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 text-base text-[#051A24]">
              <a className="block transition hover:opacity-70" href="#">
                服务
              </a>
              <a className="block transition hover:opacity-70" href="#">
                作品
              </a>
              <a className="block transition hover:opacity-70" href="#">
                关于
              </a>
            </div>
            <div className="space-y-3 text-base text-[#051A24]">
              <a
                className="block transition hover:opacity-70"
                href="https://x.com"
                rel="noreferrer"
                target="_blank"
              >
                x.com
              </a>
              <a
                className="block transition hover:opacity-70"
                href="https://www.linkedin.com"
                rel="noreferrer"
                target="_blank"
              >
                领英
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 text-sm text-[#051A24]">
        <span>涡流工作室有限公司</span>
        <span>美国·奥斯汀</span>
      </div>
    </>
  )
}

function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white px-8 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]">
      <div className="flex items-center gap-4">
        <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
        <StudioButton href="https://halaskastudio.com/./book" variant="primary">
          开始沟通
        </StudioButton>
      </div>
    </div>
  )
}

export function ViktorOddyPage() {
  return (
    <main className="viktor-page bg-white text-[#051A24]">
      <HeroSection />
      <MarqueeSection />
      <TestimonialQuoteSection />
      <PricingSection />
      <TestimonialCarouselSection />
      <ProjectsSection />
      <PartnerSection />
      <FooterSection />
      <BottomNav />
    </main>
  )
}
