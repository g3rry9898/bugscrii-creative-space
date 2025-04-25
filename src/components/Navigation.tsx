'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center space-x-8">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/music" 
            className={`nav-link ${pathname === '/music' ? 'active' : ''}`}
          >
            Music
          </Link>
          <Link 
            href="/community" 
            className={`nav-link ${pathname === '/community' ? 'active' : ''}`}
          >
            Community
          </Link>
          <Link 
            href="/media" 
            className={`nav-link ${pathname === '/media' ? 'active' : ''}`}
          >
            Media
          </Link>
        </div>
      </div>
    </nav>
  )
} 