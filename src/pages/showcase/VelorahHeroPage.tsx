import type { CSSProperties } from 'react'

import { Button } from '@/components/ui/button'

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const themeVars = {
  '--font-display': "'Instrument Serif', serif",
  '--font-body': "'Inter', sans-serif",
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

const navLinks = ['Studio', 'About', 'Journal', 'Reach Us'] as const

export function VelorahHeroPage() {
  return (
    <main
      className="min-h-screen bg-[hsl(var(--background))] text-foreground [font-family:var(--font-body)]"
      style={themeVars}
    >
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          className="absolute inset-0 z-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
            <div
              className="text-3xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-xs">®</sup>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a className="text-sm text-foreground transition-colors" href="#">
                Home
              </a>
              {navLinks.map((item) => (
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                  key={item}
                >
                  {item}
                </a>
              ))}
            </nav>

            <Button
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.03]"
              type="button"
              variant="ghost"
            >
              Begin Journey
            </Button>
          </header>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[90px] pt-32 pb-40 text-center">
            <h1
              className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Where <em className="not-italic text-muted-foreground">dreams</em>{' '}
              rise <em className="not-italic text-muted-foreground">through the silence.</em>
            </h1>

            <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We&apos;re designing tools for deep thinkers, bold creators, and
              quiet rebels. Amid the chaos, we build digital spaces for sharp
              focus and inspired work.
            </p>

            <Button
              className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform duration-300 hover:scale-[1.03]"
              type="button"
              variant="ghost"
            >
              Begin Journey
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
