import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [openSections, setOpenSections] = useState({
    about: true,
    previously: false,
    interests: false,
    contact: false
  })
  
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

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'} style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
      <Head>
        <title>Chaïmae Sriti</title>
        <meta name="description" content="Chaïmae Sriti - Founder of Actuarially, an AI-native workspace for insurance teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/3.png" />
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
            {/* <Link href="/archive" className="hover:opacity-80 text-sm">Archive</Link> */}
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
          <h1 className="text-xl font-bold mb-1">Chaïmae Sriti</h1>
          <p className="text-sm opacity-80">Founder of <a href="https://actuarially.co" className="underline hover:opacity-100" target="_blank" rel="noopener noreferrer">Actuarially</a></p>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <button 
            onClick={() => toggleSection('about')} 
            className="flex items-center hover:opacity-80 mb-3 text-sm"
          >
            <span className="mr-2">{openSections.about ? '▼' : '▶'}</span>
            [About]
          </button>
          {openSections.about && (
            <div className="ml-6 space-y-4 opacity-90 leading-relaxed text-sm">
              <p>
                I'm the Founder of Actuarially, an AI-native workspace for insurance teams—built to replace actuarial data science with fast, compliant, and interpretable automation. We're quietly building the future of pricing and risk intelligence, with strong early traction and a clear product thesis.
              </p>
              <p>
                I'm a data scientist by training, statistician by obsession, and founder by necessity. My background spans insurance, AI, and experimentation—previously leading pricing sophistication at Aviva Canada and Beneva. I studied computer science at McGill and statistics at Laval and INSEA.
              </p>
              <p>
                I grew up in Rabat and currently live between Montreal and wherever the work feels most alive.
              </p>
            </div>
          )}
        </div>

        {/* Previously Section */}
        <div className="mb-8">
          <button 
            onClick={() => toggleSection('previously')} 
            className="flex items-center hover:opacity-80 mb-3 text-sm"
          >
            <span className="mr-2">{openSections.previously ? '▼' : '▶'}</span>
            [Previously]
          </button>
          {openSections.previously && (
            <div className="ml-6 space-y-4 opacity-90 leading-relaxed text-sm">
              <p>
                I led experimentation frameworks and model deployment for a $10B portfolio, built AI tools to cut pricing timelines from 6 months to days, and scaled drift-detection platforms for high-stakes underwriting.
              </p>
              <p>
                Before Actuarially, I consulted on pricing and risk at top Canadian insurers, taught probability and time series, and occasionally coached startups on data strategy and analytics tooling.
              </p>
              <p>
                I originally got into tech by way of math contests, economic modeling, and a lifelong obsession with how systems break—and how to rebuild them better.
              </p>
            </div>
          )}
        </div>

        {/* Interests Section */}
        <div className="mb-8">
          <button 
            onClick={() => toggleSection('interests')} 
            className="flex items-center hover:opacity-80 mb-3 text-sm"
          >
            <span className="mr-2">{openSections.interests ? '▼' : '▶'}</span>
            [Interests]
          </button>
          {openSections.interests && (
            <div className="ml-6 space-y-4 opacity-90 leading-relaxed text-sm">
              <p>
                Deep thinking, aesthetic systems, infrastructure design, probability, actuarial science, philosophy, Morocco, and helping mission-driven builders take moonshots seriously.
              </p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mb-12">
          <button 
            onClick={() => toggleSection('contact')} 
            className="flex items-center hover:opacity-80 mb-3 text-sm"
          >
            <span className="mr-2">{openSections.contact ? '▼' : '▶'}</span>
            [Contact]
          </button>
          {openSections.contact && (
            <div className="ml-6 space-y-4 opacity-90 leading-relaxed text-sm">
              <p>
                If you're obsessed with turning legacy industries into first-principled systems—or just want to talk startups, AI, or pricing: <a href="mailto:chaimaesriti@gmail.com" className="underline hover:opacity-80">chaimaesriti@gmail.com</a>
              </p>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 text-sm opacity-80">
          <a href="https://twitter.com/chaimaesriti" className="hover:underline hover:opacity-100">X</a>
          <a href="https://linkedin.com/in/chaimaesriti" className="hover:underline hover:opacity-100">LinkedIn</a>
          <a href="https://github.com/chaimaesriti" className="hover:underline hover:opacity-100">GitHub</a>
        </div>
      </div>
    </div>
  )
} 