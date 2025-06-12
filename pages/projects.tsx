import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
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
        <title>Projects | Chaïmae Sriti</title>
        <meta name="description" content="Chaïmae Sriti's projects and work" />
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
          <h1 className="text-base mb-2">Selected Projects</h1>
          <p className="opacity-90 leading-relaxed text-xs">
            A collection of projects I've built, ranging from research prototypes to production systems.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 mt-12">
          {/* Project 1 */}
          <div className="border-l-2 border-gray-500 pl-6">
            <h3 className="text-sm font-medium mb-2">
              Customer Churn Prediction System
            </h3>
            <p className="opacity-80 mb-4 leading-relaxed text-xs">
              Developed a comprehensive ML solution to predict customer churn for a telecommunications company. The model achieved 92% accuracy and helped reduce churn rate by 18% through targeted retention campaigns.
            </p>
            <div className="opacity-60 text-xs mb-3">
              <span className="mr-4">Python</span>
              <span className="mr-4">scikit-learn</span>
              <span className="mr-4">XGBoost</span>
              <span className="mr-4">Streamlit</span>
            </div>
            <div className="flex space-x-6 text-xs">
              <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
                code
              </a>
              <Link href="/projects/churn-prediction" className="underline hover:opacity-80">
                details
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-l-2 border-gray-500 pl-6">
            <h3 className="text-sm font-medium mb-2">
              Multilingual Sentiment Analysis Tool
            </h3>
            <p className="opacity-80 mb-4 leading-relaxed text-xs">
              Created an NLP tool that analyzes sentiment across Arabic, French, and English. The tool processes social media data and customer reviews to provide real-time sentiment insights for businesses operating in diverse markets.
            </p>
            <div className="opacity-60 text-xs mb-3">
              <span className="mr-4">Python</span>
              <span className="mr-4">Transformers</span>
              <span className="mr-4">NLTK</span>
              <span className="mr-4">Flask</span>
            </div>
            <div className="flex space-x-6 text-xs">
              <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
                code
              </a>
              <Link href="/projects/sentiment-analysis" className="underline hover:opacity-80">
                demo
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border-l-2 border-gray-500 pl-6">
            <h3 className="text-sm font-medium mb-2">
              Medical Image Classification System
            </h3>
            <p className="opacity-80 mb-4 leading-relaxed text-xs">
              Developed a deep learning system for automated pneumonia detection in chest X-rays. The model achieved 95% accuracy and assists healthcare professionals in diagnosis, potentially improving patient outcomes in resource-limited settings.
            </p>
            <div className="opacity-60 text-xs mb-3">
              <span className="mr-4">Python</span>
              <span className="mr-4">TensorFlow</span>
              <span className="mr-4">Keras</span>
              <span className="mr-4">OpenCV</span>
            </div>
            <div className="flex space-x-6 text-xs">
              <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
                code
              </a>
              <Link href="/projects/medical-imaging" className="underline hover:opacity-80">
                paper
              </Link>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border-l-2 border-gray-500 pl-6">
            <h3 className="text-sm font-medium mb-2">
              Financial Market Prediction Platform
            </h3>
            <p className="opacity-80 mb-4 leading-relaxed text-xs">
              Built an intelligent trading assistant combining technical analysis with ML 
              to predict market movements. The platform analyzes financial indicators and news sentiment 
              to provide trading recommendations with risk assessment.
            </p>
            <div className="opacity-60 text-xs mb-3">
              <span className="mr-4">Python</span>
              <span className="mr-4">PyTorch</span>
              <span className="mr-4">Alpha Vantage API</span>
              <span className="mr-4">Plotly</span>
            </div>
            <div className="flex space-x-6 text-xs">
              <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
                code
              </a>
              <Link href="/projects/financial-prediction" className="underline hover:opacity-80">
                analysis
              </Link>
            </div>
          </div>

          {/* Project 5 */}
          <div className="border-l-2 border-gray-500 pl-6">
            <h3 className="text-sm font-medium mb-2">
              Data Science Toolkit
            </h3>
            <p className="opacity-80 mb-4 leading-relaxed text-xs">
              Developed a comprehensive toolkit of reusable Python modules for common data science tasks. 
              This open-source project includes automated EDA, feature engineering pipelines, and model evaluation utilities 
              used by fellow data scientists in the community.
            </p>
            <div className="opacity-60 text-xs mb-3">
              <span className="mr-4">Python</span>
              <span className="mr-4">Jupyter</span>
              <span className="mr-4">Pandas</span>
              <span className="mr-4">Matplotlib</span>
            </div>
            <div className="flex space-x-6 text-xs">
              <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
                code
              </a>
              <Link href="/projects/data-science-toolkit" className="underline hover:opacity-80">
                docs
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 dark:border-gray-700">
          <p className="opacity-60 text-sm mb-4">
            More projects available on{' '}
            <a href="https://github.com/chaimaesriti" className="underline hover:opacity-80">
              GitHub
            </a>
          </p>
          <Link href="/" className="underline hover:opacity-80 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 