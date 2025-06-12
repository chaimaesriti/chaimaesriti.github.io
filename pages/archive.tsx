import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Archive() {
  const [darkMode, setDarkMode] = useState(true)
  
  // Initialize dark mode from user preference or system preference
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDarkMode)
  }, [])
  
  // Update localStorage and apply dark mode when changed
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'} style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
      <Head>
        <title>Archive | Chaïmae Sriti</title>
        <meta name="description" content="Chaïmae Sriti's thoughts on AI, insurance, and startups" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/1.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="max-w-3xl mx-auto px-6 py-24 text-sm relative">
        {/* Navigation */}
        <nav className="absolute top-4 right-0 z-50">
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:opacity-80 text-sm">Home</Link>
            <Link href="/projects" className="hover:opacity-80 text-sm">Projects</Link>
            <Link href="/blog" className="hover:opacity-80 text-sm">Blog</Link>
            <Link href="/archive" className="hover:opacity-80 text-sm">Archive</Link>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'bg-transparent text-white hover:bg-gray-800' : 'bg-transparent text-black hover:bg-gray-100'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-10 pt-16">
          <h1 className="text-xl font-bold mb-1">Archive</h1>
          <p className="text-sm opacity-80 mb-6">Past essays on AI, insurance, and startup building</p>
        </div>

        {/* Archive Posts */}
        <div className="space-y-12">
          {/* Post 1 */}
          <div className="mb-12">
            <h2 className="text-base font-medium mb-2">The Coming Revolution in Actuarial Science</h2>
            <p className="opacity-60 text-xs mb-4">October 15, 2023</p>
            <p className="opacity-80 text-sm mb-4">
              How machine learning and automation are transforming risk assessment in insurance, 
              with implications for pricing, underwriting, and the future of the industry.
            </p>
            <Link href="/archive/actuarial-revolution" className="underline hover:opacity-80 text-xs">
              Read more →
            </Link>
          </div>

          {/* Post 2 */}
          <div className="mb-12">
            <h2 className="text-base font-medium mb-2">First Principles in Insurance Tech</h2>
            <p className="opacity-60 text-xs mb-4">September 3, 2023</p>
            <p className="opacity-80 text-sm mb-4">
              Why building from first principles matters when creating new infrastructure for 
              legacy industries, and how to balance innovation with regulatory compliance.
            </p>
            <Link href="/archive/first-principles" className="underline hover:opacity-80 text-xs">
              Read more →
            </Link>
          </div>

          {/* Post 3 */}
          <div className="mb-12">
            <h2 className="text-base font-medium mb-2">Interpretability vs Performance in AI Models</h2>
            <p className="opacity-60 text-xs mb-4">August 17, 2023</p>
            <p className="opacity-80 text-sm mb-4">
              Exploring the tension between model interpretability and performance in 
              high-stakes domains like insurance pricing and risk assessment.
            </p>
            <Link href="/archive/interpretability" className="underline hover:opacity-80 text-xs">
              Read more →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 dark:border-gray-700">
          <Link href="/" className="underline hover:opacity-80 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 