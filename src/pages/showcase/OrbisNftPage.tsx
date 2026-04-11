import { Github, Mail, Twitter } from 'lucide-react'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'
const aboutVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'
const finalVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const nftVideos = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
] as const

const navLinks = ['首页', '画廊', '购买 NFT', '常见问题', '联系'] as const

const aboutText =
  '一个超越时间与地点的数字对象，对距离、形态与太空静默的持续探索。'

function SocialButtons({ className }: { className?: string }) {
  const items = [Mail, Twitter, Github] as const

  return (
    <div className={className}>
      {items.map((Icon, index) => (
        <button
          className="liquid-glass inline-flex h-14 w-14 items-center justify-center rounded-[1rem] text-cream transition hover:bg-white/10"
          key={index}
          type="button"
        >
          <Icon className="size-5" />
        </button>
      ))}
    </div>
  )
}

function FinalSocialRail() {
  const items = [Mail, Twitter, Github] as const

  return (
    <div className="absolute left-[8%] bottom-[12%] sm:bottom-[15%] lg:bottom-[20%] z-20">
      <div className="liquid-glass overflow-hidden rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem]">
        {items.map((Icon, index) => (
          <div className={index < items.length - 1 ? 'border-b border-white/10' : ''} key={index}>
            <button
              className="flex items-center justify-center text-cream transition hover:bg-white/10 w-[14vw] h-[11vw] min-w-[3.5rem] min-h-[3.5rem] sm:w-[14.375rem] sm:h-[5.5rem] md:w-[10.78125rem] md:h-[4.75rem] lg:w-[16.77rem] lg:h-[6.5rem]"
              type="button"
            >
              <Icon className="size-5 sm:size-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen px-3 sm:px-4 md:px-6 pt-3 sm:pt-4">
      <div className="relative mx-auto max-w-[1831px] min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-b-[32px]">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-[calc(100vh-1.5rem)] flex-col px-5 py-8 sm:px-8 md:px-12 lg:px-16">
          <header className="flex items-center justify-between uppercase">
            <div className="font-grotesk text-[16px] tracking-[0.04em] text-cream">
              Orbis.Nft
            </div>
            <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
              <ul className="flex items-center gap-8">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      className="font-grotesk text-[13px] tracking-[0.08em] text-cream transition hover:text-neon"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <div className="relative mt-auto pb-10 sm:pb-14 lg:pb-20">
            <h1 className="relative max-w-[780px] font-grotesk uppercase text-cream text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] md:leading-[1] lg:ml-32">
              <span className="block">超越地球</span>
              <span className="block">以及（它）熟悉的边界之外</span>
              <span className="pointer-events-none absolute right-[-5%] top-[12%] rotate-[-1deg] font-condiment normal-case text-neon opacity-90 mix-blend-exclusion text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
                NFT 合集
              </span>
            </h1>

            <SocialButtons className="absolute right-0 top-0 hidden flex-col gap-3 lg:flex" />
            <SocialButtons className="mt-8 flex justify-center gap-3 lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="relative min-h-screen px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
      <div className="relative mx-auto max-w-[1831px] min-h-[calc(100vh-3rem)] overflow-hidden">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-[calc(100vh-3rem)] flex-col justify-between px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24 uppercase">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="relative w-fit">
              <h2 className="font-grotesk text-cream leading-[1] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
                <span className="block">你好！</span>
                <span className="block">我是 orbis</span>
              </h2>
              <span className="pointer-events-none absolute -bottom-3 right-0 rotate-[-2deg] font-condiment normal-case text-neon opacity-90 mix-blend-exclusion text-[36px] sm:text-[50px] md:text-[58px] lg:text-[68px]">
                Orbis
              </span>
            </div>

            <p className="max-w-[266px] font-mono text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em] text-cream">
              {aboutText}
            </p>
          </div>

          <div className="mt-12 flex justify-between gap-8 lg:mt-20">
            <div className="max-w-[300px] space-y-6">
              <p className="font-mono text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em] text-[#010828] lg:text-cream/10">
                {aboutText}
              </p>
              <p className="font-mono text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em] text-[#010828] lg:text-cream/10">
                {aboutText}
              </p>
            </div>

            <div className="hidden max-w-[300px] space-y-6 lg:block">
              <p className="font-mono text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em] text-cream/10">
                {aboutText}
              </p>
              <p className="font-mono text-[14px] md:text-[16px] leading-relaxed tracking-[0.02em] text-cream/10">
                {aboutText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CollectionSection() {
  return (
    <section className="bg-[#010828] px-3 sm:px-4 md:px-6 py-14 sm:py-16 md:py-20 uppercase">
      <div className="mx-auto max-w-[1831px] px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-grotesk text-cream leading-[1] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
            <span className="block">收藏系列</span>
            <span className="block ml-12 sm:ml-24 md:ml-32">
              <span className="font-condiment normal-case text-neon">太空</span>{' '}
              <span>物件</span>
            </span>
          </h2>

          <button className="group inline-flex flex-col items-start" type="button">
            <span className="inline-flex items-end gap-3">
              <span className="font-grotesk text-cream leading-none text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
                查看
              </span>
              <span className="mb-1 flex flex-col font-grotesk leading-[0.92] text-cream text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px]">
                <span>全部</span>
                <span>创作者</span>
              </span>
            </span>
            <span className="mt-3 h-[6px] w-full bg-neon transition group-hover:opacity-90 sm:h-[8px] lg:h-[10px]" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nftVideos.map((item) => (
            <article
              className="liquid-glass rounded-[32px] p-[18px] transition hover:bg-white/10"
              key={item.url}
            >
              <div className="relative overflow-hidden rounded-[24px] pb-[100%]">
                <video
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src={item.url} type="video/mp4" />
                </video>

                <div className="liquid-glass absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-[20px] px-5 py-4">
                  <div>
                    <p className="font-grotesk text-[11px] tracking-[0.08em] text-cream/70">
                      稀有度评分：
                    </p>
                    <p className="mt-1 font-grotesk text-[16px] text-cream">
                      {item.score}
                    </p>
                  </div>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition hover:scale-110"
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalSection() {
  return (
    <section className="relative bg-[#010828] uppercase">
      <video autoPlay className="block h-auto w-full" loop muted playsInline>
        <source src={finalVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10">
        <div className="relative mx-auto h-full max-w-[1831px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="absolute right-0 top-[14%] w-full text-right lg:pr-[20%] lg:pl-[15%]">
            <div className="relative inline-block">
              <span className="pointer-events-none absolute left-0 top-[-18%] rotate-[-2deg] font-condiment normal-case text-neon opacity-90 mix-blend-exclusion text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px]">
                去往更远处
              </span>
              <h2 className="font-grotesk text-cream leading-[1.02] text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px]">
                <span className="block mb-4 sm:mb-8 md:mb-10 lg:mb-12">加入我们。</span>
                <span className="block">揭示隐藏之物。</span>
                <span className="block">定义下一步。</span>
                <span className="block">跟随信号前行。</span>
              </h2>
            </div>
          </div>

          <FinalSocialRail />
        </div>
      </div>
    </section>
  )
}

export function OrbisNftPage() {
  return (
    <main className="relative min-h-screen bg-[#010828] text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-60 mix-blend-lighten"
        style={{
          backgroundImage: "url('/texture.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <FinalSection />
      </div>
    </main>
  )
}
