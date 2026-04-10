import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { PortfolioHomePage } from '@/pages/PortfolioHomePage'
import { ShowcasePage } from '@/pages/showcase/ShowcasePage'

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
