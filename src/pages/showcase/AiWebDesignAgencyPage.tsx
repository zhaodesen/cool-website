import {
  ArrowUpRight,
  BarChart3,
  Palette,
  Play,
  Shield,
  Zap,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import feature1Mp4 from '@/assets/feature-1.mp4'
import feature1Webm from '@/assets/feature-1.webm'
import feature2Mp4 from '@/assets/feature-2.mp4'
import feature2Webm from '@/assets/feature-2.webm'
import logoIcon from '@/assets/logo-icon.png'
import { BlurText } from '@/components/motion/BlurText'
import { HlsVideo } from '@/components/media/HlsVideo'
import { reveal, smoothEase } from '@/lib/motion'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'
const startVideo =
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'
const statsVideo =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'
const ctaVideo =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

const navItems = ['首页', '服务', '作品', '流程', '定价'] as const
const navAnchors: Record<(typeof navItems)[number], string> = {
  首页: '#home',
  服务: '#services',
  作品: '#work',
  流程: '#process',
  定价: '#pricing',
}

const partnerNames = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'] as const

const featureRows = [
  {
    title: '为转化而设计，为性能而构建。',
    description:
      '每一个像素都经过推敲。我们的 AI 会分析海量顶级网站，再为你构建更高表现的版本。',
    cta: '了解更多',
    video: { webm: feature1Webm, mp4: feature1Mp4 },
    reverse: false,
  },
  {
    title: '它会自动变得更聪明。',
    description:
      '你的网站会自行进化。AI 监测每次点击、滚动与转化，并实时优化。无需手动更新。',
    cta: '查看原理',
    video: { webm: feature2Webm, mp4: feature2Mp4 },
    reverse: true,
  },
] as const

const valueCards = [
  {
    icon: Zap,
    title: '按天交付，而非按月等待',
    description:
      '从概念到上线，速度重新定义“快”。等待从来不是策略。',
  },
  {
    icon: Palette,
    title: '细节偏执打磨',
    description:
      '每个细节都被反复考量，每个元素都被打磨到位。设计精准到仿佛理所当然。',
  },
  {
    icon: BarChart3,
    title: '为转化而生',
    description:
      '布局由数据驱动，决策由表现验证，结果可量化、可复盘。',
  },
  {
    icon: Shield,
    title: '默认即安全',
    description:
      '企业级防护默认内置，SSL、DDoS 防护与合规能力全部包含在内。',
  },
] as const

const stats = [
  ['200+', '已上线网站'],
  ['98%', '客户满意度'],
  ['3.2x', '转化提升'],
  ['5 天', '平均交付周期'],
] as const

const testimonials = [
  {
    quote:
      '5 天完成整站重建，效果超过我们此前数月投入的版本。',
    name: 'Sarah Chen',
    role: 'Luminary 首席执行官',
  },
  {
    quote:
      '转化提升 4 倍，这不是夸张。基于真实数据构建的设计，结果就是不一样。',
    name: 'Marcus Webb',
    role: 'Arcline 增长负责人',
  },
  {
    quote:
      '他们不只是设计了网站，而是定义了品牌。用“世界级”都不足以形容。',
    name: 'Elena Voss',
    role: 'Helix 品牌总监',
  },
] as const

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-8 py-3 lg:px-16">
      <nav className="relative mx-auto flex max-w-7xl items-center">
        <Link aria-label="返回首页" className="block" to="/">
          <img
            alt="工作室标志"
            className="h-12 w-12 object-contain"
            height={48}
            src={logoIcon}
            width={48}
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full px-1.5 py-1 md:flex liquid-glass">
          {navItems.map((item) => (
            <a
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body"
              href={navAnchors[item]}
              key={item}
            >
              {item}
            </a>
          ))}
          <a
            className="ml-1 inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-black"
            href="#pricing"
          >
            立即开始
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[1000px] overflow-visible" id="home">
      <video
        aria-hidden="true"
        autoPlay
        className="absolute left-0 z-0 h-auto w-full object-contain"
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        style={{ top: '20%' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-black/5" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-[300px]"
        style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center px-6 pt-[150px] text-center">
        <motion.div
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-1 py-1"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: smoothEase, delay: 0.15 }}
        >
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black font-body">
            新功能
          </span>
          <span className="pr-2 text-xs text-white/90 font-body">
            介绍 AI 驱动网页设计。
          </span>
        </motion.div>

        <BlurText
          className="mt-6 max-w-2xl text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px]"
          delay={100}
          direction="bottom"
          splitBy="words"
          text="给品牌真正配得上的网站"
        />

        <motion.p
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          className="mt-7 max-w-xl text-sm md:text-base text-white font-body font-light leading-tight"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.8 }}
        >
          惊艳设计，极速性能。由 AI 构建，由专家精修。网页设计，从此被重新定义。
        </motion.p>

        <motion.div
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          className="mt-8 flex items-center gap-5"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 1.1 }}
        >
          <a
            className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white font-body"
            href="#pricing"
          >
            立即开始
            <ArrowUpRight className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 font-body"
            href="#process"
          >
            <Play className="size-4 fill-current" />
            观看短片
          </a>
        </motion.div>

        <div className="mt-auto w-full pb-8 pt-16">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-white/85 font-body liquid-glass">
            以下团队共同信赖
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partnerNames.map((name) => (
              <span
                className="text-2xl md:text-3xl font-heading italic text-white"
                key={name}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StartSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24" id="process">
      <HlsVideo
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        src={startVideo}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[200px]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      <motion.div
        {...reveal}
        className="relative z-10 mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center text-center"
        id="services"
      >
        <span className="section-badge">工作方式</span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          你提出想法，我们负责上线。
        </h2>
        <p className="mt-5 max-w-2xl text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          只需描述你的愿景，AI 会完成线框、设计、代码与上线。周期按天计算，而不是按季度。
        </p>
        <a
          className="mt-9 liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white font-body"
          href="#pricing"
        >
          立即开始
        </a>
      </motion.div>
    </section>
  )
}

function FeaturesChess() {
  return (
    <section className="bg-black px-6 py-24" id="work">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="max-w-3xl">
          <span className="section-badge">能力</span>
          <h2 className="mt-5 section-heading">专业能力，零复杂度。</h2>
        </motion.div>

        <div className="mt-16 space-y-10 md:space-y-14">
          {featureRows.map((feature, index) => (
            <motion.article
              {...reveal}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${feature.reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
              key={feature.title}
              transition={{ ...reveal.transition, delay: index * 0.06 }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic tracking-tight leading-[0.92] text-white">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-xl text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
                <button className="mt-7 liquid-glass-strong inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white font-body">
                  {feature.cta}
                </button>
              </div>

              <div className="liquid-glass overflow-hidden rounded-2xl">
                <video
                  autoPlay
                  className="aspect-[16/10] w-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src={feature.video.webm} type="video/webm" />
                  <source src={feature.video.mp4} type="video/mp4" />
                </video>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesGrid() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="max-w-3xl">
          <span className="section-badge">为什么选择我们</span>
          <h2 className="mt-5 section-heading">差异，决定一切。</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                {...reveal}
                className="liquid-glass rounded-2xl p-6"
                key={item.title}
                transition={{ ...reveal.transition, delay: index * 0.06 }}
              >
                <div className="liquid-glass-strong flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon className="size-4 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-heading italic text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 font-body font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <HlsVideo
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        src={statsVideo}
        style={{ filter: 'saturate(0)' }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[200px]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      <motion.div {...reveal} className="relative z-10 mx-auto max-w-7xl">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none">
                  {value}
                </p>
                <p className="mt-3 text-sm text-white/60 font-body font-light">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="max-w-3xl">
          <span className="section-badge">客户评价</span>
          <h2 className="mt-5 section-heading">不妨听听他们怎么说。</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              {...reveal}
              className="liquid-glass rounded-2xl p-8"
              key={item.name}
              transition={{ ...reveal.transition, delay: index * 0.06 }}
            >
              <p className="text-sm italic text-white/80 font-body font-light leading-relaxed">
                {item.quote}
              </p>
              <p className="mt-8 text-sm text-white font-body font-medium">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-white/50 font-body font-light">
                {item.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaFooter() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-28" id="pricing">
      <HlsVideo
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        src={ctaVideo}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[200px]"
        style={{ background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px]"
        style={{ background: 'linear-gradient(to top, black, transparent)' }}
      />

      <motion.div
        {...reveal}
        className="relative z-10 mx-auto max-w-7xl text-center"
      >
        <h2 className="mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight">
          你的下一代网站，从这里开始。
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-white/65 font-body font-light leading-relaxed">
          预约免费策略沟通，看看 AI 驱动设计能带来什么。无需承诺，没有压力，只有可能性。
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="liquid-glass-strong inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white font-body"
            href="#"
          >
            预约沟通
          </a>
          <a
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black font-body"
            href="#"
          >
            查看价格
          </a>
        </div>

        <footer className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-xs text-white/40 font-body">
              © 2026 工作室。保留所有权利。
            </p>
            <div className="flex items-center gap-6">
              {['隐私', '条款', '联系'].map((item) => (
                <a className="text-xs text-white/40 font-body" href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </section>
  )
}

export function AiWebDesignAgencyPage() {
  return (
    <main className="bg-black">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />

        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <StatsSection />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </main>
  )
}
