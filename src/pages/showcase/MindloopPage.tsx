import {
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { useRef, type CSSProperties } from 'react'

import { HlsVideo } from '@/components/media/HlsVideo'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

function LogoMark({ outer = 7, inner = 3 }: { outer?: number; inner?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border-2 border-foreground/60"
      style={{ height: `${outer * 0.25}rem`, width: `${outer * 0.25}rem` }}
    >
      <span
        className="rounded-full border border-foreground/60"
        style={{ height: `${inner * 0.25}rem`, width: `${inner * 0.25}rem` }}
      />
    </span>
  )
}

function Navbar() {
  const links = ['首页', '工作方式', '理念', '应用场景'] as const

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-8 py-4 md:px-28">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="text-lg font-semibold">Mindloop</span>
        </div>

        <nav className="hidden items-center gap-3 text-sm md:flex">
          {links.map((link, index) => (
            <div className="flex items-center gap-3" key={link}>
              <a className="text-muted-foreground transition-colors hover:text-foreground" href="#">
                {link}
              </a>
              {index < links.length - 1 ? <span className="text-muted-foreground">•</span> : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
            <a
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              href="#"
              key={idx}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center md:pt-32">
        <motion.div {...fadeUp(0)} className="flex items-center gap-3">
          <div className="-space-x-2 flex">
            {['/images/avatar-1.png', '/images/avatar-2.png', '/images/avatar-3.png'].map((src) => (
              <img
                alt="订阅用户头像"
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
                key={src}
                src={src}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">已有 7,000+ 人订阅</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-6 text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
        >
          与我们一起获取
          <span className="font-serif text-[hsl(var(--foreground))] italic font-normal">灵感</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-6 max-w-3xl text-lg"
          style={{ color: 'hsl(var(--hero-subtitle))' }}
        >
          订阅我们的内容流，获取有价值的更新与技术观察，一起走向更有深度、更有方向的创作旅程。
        </motion.p>

        <motion.form {...fadeUp(0.24)} className="liquid-glass mt-10 flex w-full max-w-lg items-center rounded-full p-2">
          <input
            className="flex-1 bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            placeholder="输入你的邮箱"
            type="email"
          />
          <motion.button
            className="rounded-full bg-foreground px-8 py-3 text-sm text-background"
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            立即订阅
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

function SearchSection() {
  const platforms = [
    {
      name: 'ChatGPT',
      icon: '/images/icon-chatgpt.png',
      description: '用户的第一入口已从传统搜索转向 AI 对话。',
    },
    {
      name: 'Perplexity',
      icon: '/images/icon-perplexity.png',
      description: '答案引擎更偏好清晰、权威且持续输出的内容。',
    },
    {
      name: 'Google AI',
      icon: '/images/icon-google.png',
      description: '生成式摘要会在用户点击前就决定你的可见度。',
    },
  ] as const

  return (
    <section className="px-8 pb-6 pt-52 text-center md:px-28 md:pb-9 md:pt-64">
      <motion.h2 {...fadeUp(0)} className="text-5xl md:text-7xl lg:text-8xl">
        搜索已经<span className="font-serif italic">改变。</span>你呢？
      </motion.h2>
      <motion.p {...fadeUp(0.08)} className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
        今天的可见度，属于那些持续产出、观点清晰且内容有深度的品牌。
      </motion.p>

      <div className="mx-auto mb-20 mt-24 grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
        {platforms.map((platform, index) => (
          <motion.article {...fadeUp(0.16 + index * 0.08)} key={platform.name}>
            <img
              alt={platform.name}
              className="mx-auto h-[200px] w-[200px] object-contain"
              src={platform.icon}
            />
            <h3 className="mt-6 text-base font-semibold">{platform.name}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">
              {platform.description}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.p {...fadeUp(0.36)} className="text-sm text-muted-foreground">
        如果你不回答用户的问题，就会有别人替你回答。
      </motion.p>
    </section>
  )
}

function MissionWord({
  word,
  index,
  total,
  progress,
  highlight = false,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
  highlight?: boolean
}) {
  const start = index / total - 0.1
  const end = index / total + 0.05
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  return (
    <motion.span
      className={highlight ? 'text-foreground' : ''}
      style={{ color: highlight ? undefined : 'hsl(var(--hero-subtitle))', opacity }}
    >
      {word}{' '}
    </motion.span>
  )
}

function RevealParagraph({
  text,
  className,
  highlights = [],
}: {
  text: string
  className: string
  highlights?: string[]
}) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const words = text.split(' ')

  return (
    <p className={className} ref={ref}>
      {words.map((word, index) => (
        <MissionWord
          highlight={highlights.includes(word.replace(/[—,.]/g, ''))}
          index={index}
          key={`${word}-${index}`}
          progress={scrollYProgress}
          total={words.length}
          word={word}
        />
      ))}
    </p>
  )
}

function MissionSection() {
  return (
    <section className="px-8 pb-32 pt-0 md:px-28 md:pb-44">
      <motion.video
        {...fadeUp(0)}
        autoPlay
        className="mx-auto aspect-square w-full max-w-[800px] object-cover"
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
          type="video/mp4"
        />
      </motion.video>

      <div className="mx-auto mt-16 max-w-6xl">
        <RevealParagraph
          className="text-2xl font-medium tracking-[-1px] md:text-4xl lg:text-5xl"
          highlights={['好奇', '清晰', '相遇']}
          text="我们正在构建一个让好奇与清晰相遇的空间——让读者获得深度，让作者获得触达，让每一封通讯都成为值得发生的对话。"
        />
        <RevealParagraph
          className="mt-10 text-xl font-medium tracking-[-0.5px] md:text-2xl lg:text-3xl"
          text="一个让内容、社区与洞察协同流动的平台——更少噪音、更少摩擦、更多意义。"
        />
      </div>
    </section>
  )
}

function SolutionSection() {
  const features = [
    ['精选信息流', '为高质量读者定制的个性化发现路径。'],
    ['作者工具', '保证稳定输出与质量的编辑流程。'],
    ['社区关系', '超越单篇内容的长期读者连接。'],
    ['分发体系', '内置触达通道，减少无效噪音。'],
  ] as const

  return (
    <section className="border-t border-border/30 px-8 py-32 md:px-28 md:py-44">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[3px] text-muted-foreground">解决方案</p>
        <h2 className="mt-5 text-4xl md:text-6xl">
          面向<span className="font-serif italic">高价值</span>内容的平台
        </h2>

        <motion.video
          {...fadeUp(0.08)}
          autoPlay
          className="mt-10 aspect-[3/1] w-full rounded-2xl object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </motion.video>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {features.map(([title, desc], index) => (
            <motion.div {...fadeUp(0.12 + index * 0.06)} key={title}>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/30 px-8 py-32 md:px-28 md:py-44">
      <HlsVideo
        autoPlay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
      />
      <div className="absolute inset-0 z-[1] bg-background/45" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/60">
          <span className="h-5 w-5 rounded-full border border-foreground/60" />
        </div>
        <h2 className="mt-6 text-4xl md:text-6xl">
          开始你的<span className="font-serif italic">旅程</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          用结构、深度与增长节奏，建立你的长期发布系统。
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-foreground px-8 py-3.5 text-background" type="button">
            立即订阅
          </button>
          <button className="liquid-glass rounded-lg px-8 py-3.5" type="button">
            开始写作
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col gap-4 px-8 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-28">
      <p>© 2026 Mindloop。保留所有权利。</p>
      <div className="flex items-center gap-6">
        {['隐私', '条款', '联系'].map((item) => (
          <a className="transition-colors hover:text-foreground" href="#" key={item}>
            {item}
          </a>
        ))}
      </div>
    </footer>
  )
}

export function MindloopPage() {
  return (
    <main
      className="bg-black text-foreground"
      style={
        {
          '--background': '0 0% 0%',
          '--foreground': '0 0% 100%',
          '--card': '0 0% 5%',
          '--card-foreground': '0 0% 100%',
          '--primary': '0 0% 100%',
          '--primary-foreground': '0 0% 0%',
          '--secondary': '0 0% 12%',
          '--secondary-foreground': '0 0% 85%',
          '--muted': '0 0% 15%',
          '--muted-foreground': '0 0% 65%',
          '--accent': '170 15% 45%',
          '--accent-foreground': '0 0% 100%',
          '--border': '0 0% 20%',
          '--input': '0 0% 18%',
          '--ring': '0 0% 40%',
          '--hero-subtitle': '210 17% 95%',
        } as CSSProperties
      }
    >
      <Navbar />
      <HeroSection />
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
