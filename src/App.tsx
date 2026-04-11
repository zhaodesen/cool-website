import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

const PortfolioHomePage = lazy(() =>
  import('@/pages/PortfolioHomePage').then((module) => ({
    default: module.PortfolioHomePage,
  })),
)

const ShowcasePage = lazy(() =>
  import('@/pages/showcase/ShowcasePage').then((module) => ({
    default: module.ShowcasePage,
  })),
)

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [hash, pathname])

  return null
}

function AppShell() {
  return (
    <div className="min-h-screen bg-black font-body text-foreground">
      <ScrollToHash />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route element={<PortfolioHomePage />} path="/" />
          <Route element={<ShowcasePage />} path="/showcase/:slug" />
          <Route element={<Navigate replace to="/" />} path="/works" />
          <Route
            element={<Navigate replace to="/showcase/ai-web-design-agency" />}
            path="/works/:slug"
          />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </Suspense>
    </div>
  )
}

function RouteLoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
      <div className="space-y-3">
        <p className="font-heading text-4xl italic text-white">Loading</p>
        <p className="font-body text-sm text-white/55">页面资源加载中…</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <AppShell />
    </BrowserRouter>
  )
}

export default App
