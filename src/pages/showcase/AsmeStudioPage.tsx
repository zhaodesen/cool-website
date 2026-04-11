import { useEffect, useRef, type RefObject } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Instagram,
  Twitter,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'
const featuredVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4'
const philosophyVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const serviceCards = [
  {
    tag: '策略',
    title: '研究与洞察',
    description:
      '我们深挖数据、文化与行为模式，提炼能够驱动长期增长的关键洞察。',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    tag: '创作',
    title: '设计与落地',
    description:
      '从概念到上线，我们打磨每一个细节，交付顺滑且出众的体验。',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function useCrossfadeLoop(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return undefined
    }

    let raf = 0
    let fadingOut = false

    const animateOpacity = (
      from: number,
      to: number,
      durationMs: number,
      done?: () => void,
    ) => {
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1)
        const next = from + (to - from) * progress
        video.style.opacity = String(next)
        if (progress < 1) {
          raf = requestAnimationFrame(step)
          return
        }
        done?.()
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(step)
    }

    const onCanPlay = () => {
      video.play().catch(() => undefined)
      animateOpacity(0, 1, 500)
    }

    const onTimeUpdate = () => {
      if (fadingOut || !video.duration) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55) {
        fadingOut = true
        animateOpacity(Number(video.style.opacity || 1), 0, 500)
      }
    }

    const onEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => undefined)
        animateOpacity(0, 1, 500, () => {
          fadingOut = false
        })
      }, 100)
    }

    video.style.opacity = '0'
    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [videoRef])
}

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useCrossfadeLoop(videoRef)

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        loop
        muted
        playsInline
        preload="auto"
        ref={videoRef}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-20 px-6 py-6">
        <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center gap-4">
            <Globe className="size-6 text-white" />
            <span className="text-lg font-semibold text-white">Asme</span>
            <div className="ml-6 hidden items-center gap-8 md:flex">
              {['功能', '定价', '关于'].map((item) => (
                <a
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  href="#"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-white" type="button">
              注册
            </button>
            <button
              className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white"
              type="button"
            >
              登录
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-112px)] flex-1 flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-7xl tracking-tight text-white md:text-8xl lg:text-9xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          洞察之后，<em className="italic">掌控全局</em>
        </h1>

        <div className="liquid-glass mt-8 flex w-full max-w-xl items-center gap-3 rounded-full py-2 pl-6 pr-2">
          <input
            className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
            placeholder="输入你的邮箱"
            type="email"
          />
          <button
            className="rounded-full bg-white p-3 text-black"
            type="button"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>

        <p className="mt-5 px-4 text-sm leading-relaxed text-white">
          订阅最新动态与洞察更新，第一时间获取我们的新观点与新作品。
        </p>

        <button
          className="liquid-glass mt-8 rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          type="button"
        >
          查看宣言
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {[Instagram, Twitter, Globe].map((Icon, i) => (
          <button
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
            key={i}
            type="button"
          >
            <Icon className="size-5" />
          </button>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="overflow-hidden bg-black px-6 pb-10 pt-32 md:pb-14 md:pt-44">
      <div
        className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-8 py-16 text-center md:py-24"
        ref={ref}
      >
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-sm uppercase tracking-widest text-white/40"
          transition={{ duration: 0.6 }}
        >
          关于我们
        </motion.p>

        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          className="mt-6 text-4xl leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          以前沿<span className="italic text-white/60">想法</span>驱动
          <span className="hidden md:block" />
          <span className="italic text-white/60">创造、构建与启发。</span>
        </motion.h2>
      </div>
    </section>
  )
}

function FeaturedVideoSection() {
  return (
    <section className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeUp(0)}
          className="relative aspect-video overflow-hidden rounded-3xl"
          transition={{ duration: 0.9 }}
        >
          <video
            autoPlay
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={featuredVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-white/50">
                  我们的方法
                </p>
                <p className="text-sm leading-relaxed text-white md:text-base">
                  我们相信好奇心驱动的探索。每个项目始于一个问题，每个答案都通向新的可能。
                </p>
              </div>

              <motion.button
                className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white"
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                继续探索
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...fadeUp(0)}
          className="mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
        >
          创新 <span className="italic text-white/40">×</span> 远见
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            {...fadeUp(0.05)}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
            transition={{ duration: 0.8 }}
          >
            <video autoPlay className="h-full w-full object-cover" loop muted playsInline preload="auto">
              <source src={philosophyVideo} type="video/mp4" />
            </video>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="text-white/70">
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                选择你的方向
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                真正的突破，总发生在严谨策略与创造远见的交汇处。我们在这里，把大胆想法转化为可落地结果。
              </p>
            </div>
            <div className="my-8 h-px w-full bg-white/10" />
            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
                塑造未来
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                我们相信，当好奇与信念结合时，优秀作品自然产生。我们的流程旨在发现隐藏机会，并将其转化为长效体验。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] p-2 md:p-4">
        <motion.div
          {...fadeUp(0)}
          className="mb-10 flex items-end justify-between md:mb-14"
        >
          <h2 className="text-3xl tracking-tight text-white md:text-5xl">我们做什么</h2>
          <p className="hidden text-sm text-white/40 md:block">核心服务</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {serviceCards.map((card, index) => (
            <motion.article
              {...fadeUp(index * 0.15)}
              className="group liquid-glass overflow-hidden rounded-3xl"
              key={card.title}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={card.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {card.tag}
                  </p>
                  <span className="liquid-glass rounded-full p-2">
                    <ArrowUpRight className="size-4 text-white" />
                  </span>
                </div>
                <h3 className="mb-3 text-xl tracking-tight text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AsmeStudioPage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  )
}
