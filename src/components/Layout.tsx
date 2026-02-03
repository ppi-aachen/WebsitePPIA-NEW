import { ReactNode } from 'react'
import SideNavigation from './SideNavigation'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <SideNavigation currentPath={location.pathname} />

      {/* 1. flex-1: Ensures this section takes up remaining height 
        2. w-full: Ensures the background spans the full width
      */}
      <main className="flex-1 w-full min-w-0 desktop:mt-[48px]">

        {/* Render children directly - pages manage their own layout containers */}
        {children}

      </main>
      <Footer />
    </div>
  )
}