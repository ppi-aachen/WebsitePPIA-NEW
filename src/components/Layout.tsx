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
      <main className="flex-1 min-w-0 desktop:mt-[64px]">
        {children}
      </main>
      <Footer />
    </div>
  )
}

