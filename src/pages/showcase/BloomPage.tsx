import {
  ArrowRight,
  BookOpen,
  Download,
  Instagram,
  Linkedin,
  Menu,
  Sparkles,
  Twitter,
  Wand2,
} from 'lucide-react'

import heroFlowers from '@/assets/hero-flowers.png'

function LeftPanel() {
  return (
    <section className="relative flex w-full flex-col lg:w-[52%]">
      <div className="liquid-glass-strong absolute inset-4 rounded-3xl lg:inset-6" />

      <div className="relative z-10 flex h-full flex-col p-8 lg:p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img alt="Bloom 标志" className="h-8 w-8 object-contain" src="/logo.png" />
            <span className="text-2xl font-semibold tracking-tighter text-white">bloom</span>
          </div>
          <button
            className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105"
            type="button"
          >
            <Menu className="h-4 w-4" />
            菜单
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <img alt="Bloom 标志" className="h-20 w-20 object-contain" src="/logo.png" />
          <h1 className="mt-8 text-5xl font-medium tracking-[-0.05em] text-white lg:text-7xl">
            重塑
            <br />
            <em className="text-white/80">Bloom AI</em> 的生长美学
          </h1>

          <button
            className="liquid-glass-strong mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3 text-white transition-transform hover:scale-105 active:scale-95"
            type="button"
          >
            立即探索
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <Download className="h-4 w-4" />
            </span>
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['艺术画廊', 'AI 生成', '3D 结构'].map((item) => (
              <span className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto text-center">
          <p className="text-xs uppercase tracking-widest text-white/50">前瞻设计</p>
          <p className="mt-3 text-xl text-white/90">
            我们想象了一个<em>没有终点</em>的领域。
          </p>
          <div className="mt-5 flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-white/70">
            <span className="h-px w-10 bg-white/30" />
            <span>马库斯·奥勒留</span>
            <span className="h-px w-10 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

function RightPanel() {
  return (
    <section className="hidden w-[48%] flex-col p-6 lg:flex">
      <div className="flex items-center justify-between">
        <div className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2">
          {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
            <a
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:text-white/80"
              href="#"
              key={idx}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

          <button
            className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white transition-transform hover:scale-105"
            type="button"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <Sparkles className="h-4 w-4" />
          </span>
          账号
        </button>
      </div>

      <div className="mt-10">
        <article className="liquid-glass w-56 rounded-3xl p-5 text-white">
          <h3 className="text-lg">进入我们的生态</h3>
          <p className="mt-2 text-sm text-white/70">
            与正在定义下一代花艺智能的创作者建立连接。
          </p>
        </article>
      </div>

      <div className="mt-auto liquid-glass rounded-[2.5rem] p-4">
        <div className="grid grid-cols-2 gap-4">
          <article className="liquid-glass rounded-3xl p-5 text-white transition-transform hover:scale-105">
            <Wand2 className="h-5 w-5" />
            <h4 className="mt-6 text-lg">生成流程</h4>
            <p className="mt-2 text-sm text-white/70">面向生命形态的生成式流程。</p>
          </article>
          <article className="liquid-glass rounded-3xl p-5 text-white transition-transform hover:scale-105">
            <BookOpen className="h-5 w-5" />
            <h4 className="mt-6 text-lg">生长档案</h4>
            <p className="mt-2 text-sm text-white/70">可跨项目复用的设计记忆。</p>
          </article>
        </div>

        <article className="liquid-glass mt-4 flex items-center gap-4 rounded-3xl p-4 text-white transition-transform hover:scale-105">
          <img alt="花朵" className="h-16 w-24 rounded-2xl object-cover" src={heroFlowers} />
          <div className="flex-1">
            <h4 className="text-base">高级植物雕塑</h4>
            <p className="mt-1 text-sm text-white/70">与自然节律同步的参数化形态。</p>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg" type="button">
            +
          </button>
        </article>
      </div>
    </section>
  )
}

export function BloomPage() {
  return (
    <main className="bloom-page relative min-h-screen overflow-hidden bg-black text-white">
      <video
        autoPlay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loop
        muted
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </main>
  )
}
