import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import logoIcon from '@/assets/logo-icon.png'
import { FadeEdges } from '@/components/layout/FadeEdges'
import { SectionIntro } from '@/components/layout/SectionIntro'
import { HlsVideo } from '@/components/media/HlsVideo'
import { Button } from '@/components/ui/button'
import { landingPages } from '@/data/landing-pages'
import { ctaVideo, heroVideo } from '@/data/media'
import { reveal, smoothEase } from '@/lib/motion'

function PortfolioNav() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-8 py-3 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link aria-label="Back to portfolio home" className="block" to="/">
          <img
            alt="Portfolio"
            className="h-12 w-12 object-contain"
            height={48}
            src={logoIcon}
            width={48}
          />
        </Link>

        <div className="liquid-glass hidden items-center rounded-full px-1.5 py-1 md:flex">
          {['Intro', 'Pages', 'Contact'].map((item) => (
            <a
              className="rounded-full px-3 py-2 font-body text-sm font-medium text-foreground/75 transition hover:text-white"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
          <Button
            asChild
            className="ml-1 rounded-full bg-white px-3.5 py-1.5 text-sm text-black hover:bg-white/90"
          >
            <a href="#pages">
              View Work
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  )
}

function MobilePagesLink() {
  return (
    <a
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white px-5 py-2.5 font-body text-sm font-medium text-black shadow-2xl md:hidden"
      href="#pages"
    >
      View Pages
    </a>
  )
}

export function PortfolioHomePage() {
  return (
    <main className="min-h-screen bg-black">
      <PortfolioNav />
      <MobilePagesLink />

      <section
        className="relative min-h-[900px] overflow-hidden px-6 pt-36"
        id="intro"
      >
        <video
          aria-hidden="true"
          autoPlay
          className="absolute left-0 top-0 h-full w-full object-cover opacity-70 saturate-0"
          loop
          muted
          playsInline
          poster="/images/hero_bg.jpeg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <FadeEdges />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col">
          <motion.div {...reveal} className="max-w-4xl">
            <span className="section-badge">Portfolio</span>
            <h1 className="mt-6 max-w-5xl font-heading text-6xl italic leading-[0.82] tracking-[-3px] text-white md:text-7xl lg:text-[6.5rem]">
              I build landing pages with atmosphere, clarity, and motion.
            </h1>
            <p className="mt-7 max-w-2xl font-body text-sm font-light leading-relaxed text-white/65 md:text-base">
              我是 Zhaodesen，专注把产品想法做成可展示、可交互、能被记住的网页体验。下面是我的
              landing page 作品列表。
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-full px-6 py-3 text-white"
                variant="glass"
              >
                <a href="#pages">
                  View Landing Pages
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                className="rounded-full bg-white px-6 py-3 text-black hover:bg-white/90"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-auto grid gap-4 pb-14 md:grid-cols-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: smoothEase }}
          >
            {[
              ['01', 'Live showcase'],
              ['React', 'Frontend stack'],
              ['Motion', 'Interaction style'],
            ].map(([value, label]) => (
              <div className="liquid-glass rounded-2xl p-5" key={label}>
                <p className="font-heading text-4xl italic text-white">
                  {value}
                </p>
                <p className="mt-2 font-body text-xs font-light text-white/55">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-black px-6 py-24" id="pages">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionIntro badge="Landing Pages" title="Selected pages." />
            <motion.p
              {...reveal}
              className="max-w-md font-body text-sm font-light leading-relaxed text-white/55 md:text-right"
            >
              每一项都是一个完整页面。点击卡片即可进入作品，后续新增页面会继续出现在这里。
            </motion.p>
          </div>

          <div className="mt-14 grid gap-6">
            {landingPages.map((page, index) => (
              <motion.article
                {...reveal}
                className="group liquid-glass rounded-2xl p-2"
                key={page.slug}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
              >
                <Link
                  className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center"
                  to={`/showcase/${page.slug}`}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      alt={`${page.title} preview`}
                      className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      src={page.image}
                    />
                  </div>
                  <div className="p-5 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 font-body text-xs text-white/45">
                      <span>{page.category}</span>
                      <span className="h-1 w-1 rounded-full bg-white/35" />
                      <span>{page.year}</span>
                      <span className="h-1 w-1 rounded-full bg-white/35" />
                      <span>{page.outcome}</span>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-6">
                      <div>
                        <h2 className="font-heading text-4xl italic leading-none text-white md:text-6xl">
                          {page.title}
                        </h2>
                        <p className="mt-5 max-w-2xl font-body text-sm font-light leading-relaxed text-white/60 md:text-base">
                          {page.summary}
                        </p>
                      </div>
                      <span className="liquid-glass-strong hidden h-11 w-11 shrink-0 items-center justify-center rounded-full md:flex">
                        <ArrowUpRight className="size-4 text-white" />
                      </span>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {page.tags.map((tag) => (
                        <span
                          className="rounded-full border border-white/10 px-3 py-1 font-body text-xs text-white/50"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-black px-6 py-28"
        id="contact"
      >
        <HlsVideo
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          loop
          muted
          playsInline
          src={ctaVideo}
        />
        <div className="absolute inset-0 bg-black/55" />
        <FadeEdges />
        <motion.div
          {...reveal}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <span className="section-badge">Contact</span>
          <h2 className="mt-5 font-heading text-5xl italic leading-[0.85] tracking-tight text-white md:text-6xl lg:text-7xl">
            More pages are coming next.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-sm font-light leading-relaxed text-white/60 md:text-base">
            新的 landing page 作品会继续补充到这里，保持同一套路由和展示结构。
          </p>
        </motion.div>
      </section>
    </main>
  )
}
