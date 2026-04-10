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

import feature1Gif from '@/assets/feature-1.gif'
import feature2Gif from '@/assets/feature-2.gif'
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

const navItems = ['Home', 'Services', 'Work', 'Process', 'Pricing'] as const
const navAnchors: Record<(typeof navItems)[number], string> = {
  Home: '#home',
  Services: '#services',
  Work: '#work',
  Process: '#process',
  Pricing: '#pricing',
}

const partnerNames = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma'] as const

const featureRows = [
  {
    title: 'Designed to convert. Built to perform.',
    description:
      "Every pixel is intentional. Our AI studies what works across thousands of top sites--then builds yours to outperform them all.",
    cta: 'Learn more',
    image: feature1Gif,
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    description:
      'Your site evolves on its own. AI monitors every click, scroll, and conversion--then optimizes in real time. No manual updates. Ever.',
    cta: 'See how it works',
    image: feature2Gif,
    reverse: true,
  },
] as const

const valueCards = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    description:
      "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    description:
      'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    description:
      'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description:
      'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
] as const

const stats = [
  ['200+', 'Sites launched'],
  ['98%', 'Client satisfaction'],
  ['3.2x', 'More conversions'],
  ['5 days', 'Average delivery'],
] as const

const testimonials = [
  {
    quote:
      "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
] as const

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-8 py-3 lg:px-16">
      <nav className="relative mx-auto flex max-w-7xl items-center">
        <Link aria-label="Back to home" className="block" to="/">
          <img
            alt="Studio logo"
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
            Get Started
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
            New
          </span>
          <span className="pr-2 text-xs text-white/90 font-body">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        <BlurText
          className="mt-6 max-w-2xl text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px]"
          delay={100}
          direction="bottom"
          splitBy="words"
          text="The Website Your Brand Deserves"
        />

        <motion.p
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          className="mt-7 max-w-xl text-sm md:text-base text-white font-body font-light leading-tight"
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.8 }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
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
            Get Started
            <ArrowUpRight className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 font-body"
            href="#process"
          >
            <Play className="size-4 fill-current" />
            Watch the Film
          </a>
        </motion.div>

        <div className="mt-auto w-full pb-8 pt-16">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-white/85 font-body liquid-glass">
            Trusted by the teams behind
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
        <span className="section-badge">How It Works</span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          You dream it. We ship it.
        </h2>
        <p className="mt-5 max-w-2xl text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          Share your vision. Our AI handles the rest--wireframes, design, code,
          launch. All in days, not quarters.
        </p>
        <a
          className="mt-9 liquid-glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white font-body"
          href="#pricing"
        >
          Get Started
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
          <span className="section-badge">Capabilities</span>
          <h2 className="mt-5 section-heading">Pro features. Zero complexity.</h2>
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
                <img
                  alt={feature.title}
                  className="aspect-[16/10] w-full object-cover"
                  src={feature.image}
                />
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
          <span className="section-badge">Why Us</span>
          <h2 className="mt-5 section-heading">The difference is everything.</h2>
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
          <span className="section-badge">What They Say</span>
          <h2 className="mt-5 section-heading">Don&apos;t take our word for it.</h2>
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
          Your next website starts here.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-white/65 font-body font-light leading-relaxed">
          Book a free strategy call. See what AI-powered design can do. No
          commitment, no pressure. Just possibilities.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="liquid-glass-strong inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white font-body"
            href="#"
          >
            Book a Call
          </a>
          <a
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black font-body"
            href="#"
          >
            View Pricing
          </a>
        </div>

        <footer className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-xs text-white/40 font-body">
              (c) 2026 Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
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
