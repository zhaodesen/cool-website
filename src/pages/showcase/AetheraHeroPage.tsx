import { useEffect, useRef, type CSSProperties, type RefObject } from 'react'

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

function useSmoothLoop(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    let raf = 0

    const tick = () => {
      const duration = video.duration || 0
      const current = video.currentTime || 0
      if (duration > 0) {
        const fadeWindow = 0.5
        let opacity = 1

        if (current <= fadeWindow) {
          opacity = current / fadeWindow
        } else if (duration - current <= fadeWindow) {
          opacity = Math.max((duration - current) / fadeWindow, 0)
        }

        video.style.opacity = String(opacity)
      }
      raf = requestAnimationFrame(tick)
    }

    const onCanPlay = () => {
      video.play().catch(() => undefined)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    const onEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => undefined)
      }, 100)
    }

    video.style.opacity = '0'
    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('ended', onEnded)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('ended', onEnded)
    }
  }, [videoRef])
}

export function AetheraHeroPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  useSmoothLoop(videoRef)

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-white font-sans text-black"
      style={{ '--background': '0 0% 100%' } as CSSProperties}
    >
      <video
        autoPlay
        className="absolute z-0 block h-auto w-full"
        muted
        playsInline
        ref={videoRef}
        style={{ inset: 'auto 0 0 0', top: '300px' }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div
          className="text-3xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Aethera<sup className="text-xs">®</sup>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-black transition-colors" href="#">
            首页
          </a>
          {['工作室', '关于', '日志', '联系'].map((item) => (
            <a
              className="text-sm text-[#6F6F6F] transition-colors hover:text-black"
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03]"
          type="button"
        >
          开启旅程
        </button>
      </header>

      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center" style={{ paddingTop: 'calc(8rem - 75px)' }}>
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-black sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          超越
          <em className="not-italic text-[#6F6F6F]">静默</em>
          ，我们构建
          <em className="not-italic text-[#6F6F6F]">恒久价值</em>。
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          为聪明的头脑、无畏的创造者与深思者打造平台。穿过噪声，我们只保留深度工作与纯粹创作。
        </p>

        <button
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
          type="button"
        >
          开启旅程
        </button>
      </section>
    </main>
  )
}
