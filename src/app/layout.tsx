import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'
import { Bangers, Comic_Neue, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const comic = Comic_Neue({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-comic'
})
const bangers = Bangers({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bangers'
})

export const metadata: Metadata = {
  title: 'Bugs-crii - Creative Label',
  description: 'Welcome to Bugs-crii, your destination for innovative music and art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${comic.variable} ${bangers.variable}`}>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1692431561589800"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          
          <main className="flex-grow pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
} 