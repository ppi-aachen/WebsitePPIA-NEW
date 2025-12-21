import { useState } from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

interface SideNavigationProps {
  currentPath: string
}

const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Lapor Diri', path: '/lapor-diri' },
  { label: 'Events', path: '/events' },
  { label: 'Communities', path: '/communities' },
  { label: 'Merchandise', path: '/merchandise' },
  {
    label: 'Organization',
    path: '/organization',
    children: [
      { label: 'Sejarah', path: '/sejarah' },
      { label: 'Kepengurusan', path: '/kepengurusan' },
      { label: 'AD/ART PPI Aachen', path: '/ad-art' },
      { label: 'SPA PPI Aachen', path: '/spa' },
      { label: 'Arsip LPJ', path: '/arsip-lpj' },
      { label: 'Arsip Pengurus', path: '/arsip-pengurus' },
      { label: 'Kontak Email', path: '/kontak-email' },
    ],
  },
  {
    label: 'Others',
    path: '/others',
    children: [
      { label: 'Linktree', path: '/linktree' },
      { label: 'ACOP 2025', path: '/acop-2025' },
      { label: 'Wiki Aachen für Dummies', path: '/wiki-aachen' },
      { label: 'Funmatch', path: '/funmatch' },
      { label: 'Press Kit', path: '/press-kit' },
    ],
  },
]

export default function SideNavigation({ currentPath }: SideNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null)

  const toggleGroup = (path: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedGroups(newExpanded)
  }

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/'
    }
    return currentPath.startsWith(path)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 desktop:hidden bg-dark text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Top Navigation Bar (Desktop) */}
      <nav
        className="hidden desktop:flex desktop:fixed desktop:top-0 desktop:left-0 desktop:right-0 desktop:bg-dark desktop:z-40 desktop:shadow-md h-16"
        role="navigation"
      >
        <div className="w-full flex items-center justify-between px-8">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center h-full py-2">
              <img
                src="/logo.png"
                alt="PPI Aachen"
                className="h-12 object-contain"
                onError={(e) => {
                  // Fallback to text if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-text')) {
                    const text = document.createElement('span');
                    text.className = 'logo-text text-white text-xl font-light';
                    text.textContent = 'PPI Aachen';
                    parent.appendChild(text);
                  }
                }}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-1 flex-shrink-0">
            {navigationItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setHoveredGroup(item.path)}
                onMouseLeave={() => item.children && setHoveredGroup(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`
                        px-4 py-3
                        text-white text-[15pt] font-light
                        transition-colors duration-200
                        hover:text-primary-light
                        ${isActive(item.path) ? 'text-primary-light' : ''}
                      `}
                    >
                      {item.label}
                      <span className="ml-1">▼</span>
                    </button>
                    {hoveredGroup === item.path && (
                      <div
                        className="absolute top-full left-0 bg-dark shadow-lg min-w-[200px] py-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`
                              block px-4 py-2
                              text-white text-[12pt] font-light
                              transition-colors duration-200
                              hover:bg-primary/20 hover:text-primary-light
                              ${isActive(child.path) ? 'text-primary-light font-normal bg-primary/10' : ''}
                            `}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`
                      px-4 py-3
                      text-white text-[15pt] font-light
                      transition-colors duration-200
                      hover:text-primary-light
                      ${isActive(item.path) ? 'text-primary-light' : ''}
                    `}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Side Navigation (Mobile) */}
      <nav
        className={`
          fixed desktop:hidden
          w-sidebar bg-dark font-sans
          pt-12
          h-screen
          z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        role="navigation"
      >
        <div className="px-2">
          {navigationItems.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleGroup(item.path)}
                    className={`
                      w-full text-left py-[11.5px] px-2
                      text-white text-[15pt] font-light
                      transition-colors duration-200
                      hover:text-white
                      ${isActive(item.path) ? 'text-primary-light' : ''}
                    `}
                  >
                    {item.label}
                    <span className="float-right">
                      {expandedGroups.has(item.path) ? '−' : '+'}
                    </span>
                  </button>
                  {expandedGroups.has(item.path) && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={`
                            block py-[11.5px] px-2
                            text-white text-[12pt] font-light
                            transition-colors duration-200
                            hover:text-white
                            ${isActive(child.path) ? 'text-primary-light font-normal' : ''}
                          `}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block py-[11.5px] px-2
                    text-white text-[15pt] font-light
                    transition-colors duration-200
                    hover:text-white
                    ${isActive(item.path) ? 'text-primary-light' : ''}
                  `}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 desktop:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

