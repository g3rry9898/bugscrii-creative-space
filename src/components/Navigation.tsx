'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="nav-container fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              BUGS-CRII
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/music" 
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${pathname === '/music' ? 'active' : ''}`}
              >
                Music
              </Link>
              <Link 
                href="/community" 
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${pathname === '/community' ? 'active' : ''}`}
              >
                Community
              </Link>
              <Link 
                href="/media" 
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${pathname === '/media' ? 'active' : ''}`}
              >
                Media
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 