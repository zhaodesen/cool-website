import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

function FadeIn({ children, delay = 0, duration = 800, className }: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={`transition-opacity ${className ?? ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

type AnimatedHeadingProps = {
  text: string
  className?: string
  charDelay?: number
  initialDelay?: number
  duration?: number
}

function AnimatedHeading({
  text,
  className,
  charDelay = 30,
  initialDelay = 200,
  duration = 500,
}: AnimatedHeadingProps) {
  const [ready, setReady] = useState(false)
  const lines = useMemo(() => text.split('\n'), [text])

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), initialDelay)
    return () => window.clearTimeout(timeout)
  }, [initialDelay])

  return (
    <h1
      className={className}
      style={{
        letterSpacing: '-0.04em',
      }}
    >
      {lines.map((line, lineIndex) => (
        <span className="block" key={`${line}-${lineIndex}`}>
          {Array.from(line).map((char, charIndex) => {
            const delay =
              initialDelay +
              lineIndex * line.length * charDelay +
              charIndex * charDelay

            return (
              <span
                className="inline-block"
                key={`${lineIndex}-${char}-${charIndex}`}
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? 'translateX(0)' : 'translateX(-18px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: `${duration}ms`,
                  transitionTimingFunction: 'ease',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export function VexHeroPage() {
  return (
    <main
      className="vex-hero min-h-screen bg-[hsl(var(--background))] text-white font-sans"
      style={
        {
          '--background': '201 100% 13%',
          '--foreground': '0 0% 100%',
          '--muted-foreground': '240 4% 66%',
          '--primary': '0 0% 100%',
          '--primary-foreground': '0 0% 4%',
          '--secondary': '0 0% 10%',
          '--muted': '0 0% 10%',
          '--accent': '0 0% 10%',
          '--border': '0 0% 18%',
          '--input': '0 0% 18%',
        } as CSSProperties
      }
    >
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover z-0"
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="px-6 md:px-12 lg:px-16 pt-6">
            <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
              <div className="text-2xl font-semibold tracking-tight text-white">VEX</div>

              <div className="hidden md:flex items-center gap-8 text-sm text-white">
                {['品牌故事', '投资', '共建', '顾问'].map((item) => (
                  <a className="transition-colors hover:text-gray-300" href="#" key={item}>
                    {item}
                  </a>
                ))}
              </div>

              <button
                className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100"
                type="button"
              >
                开始咨询
              </button>
            </nav>
          </div>

          <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
              <div>
                <AnimatedHeading
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                  text={'以远见与行动\n塑造明日。'}
                />

                <FadeIn className="text-base md:text-lg text-gray-300 mb-5" delay={800} duration={1000}>
                  我们支持有远见的行动者，打造定义下一阶段的事业与产品。
                </FadeIn>

                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium"
                      type="button"
                    >
                      开始咨询
                    </button>
                    <button
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-white hover:text-black"
                      type="button"
                    >
                      立即探索
                    </button>
                  </div>
                </FadeIn>
              </div>

              <FadeIn
                className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end"
                delay={1400}
                duration={1000}
              >
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <p className="text-lg md:text-xl lg:text-2xl font-light">
                    投资 · 共建 · 顾问
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
