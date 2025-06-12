import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
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
        <title>ML Resources & Interviews | Chaïmae Sriti</title>
        <meta name="description" content="Resources for data science, ML interviews, statistics, and system design" />
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
          <h1 className="text-xl font-bold mb-1">ML Interview Prep</h1>
          <p className="text-sm opacity-80 mb-6">Comprehensive resources for machine learning and data science interviews</p>
          <p className="opacity-90 text-sm mb-8">
            A collection of guides, checklists and resources for those preparing for machine learning, data science, 
            and statistics interviews. What you need to know before applying to ML positions.
          </p>
        </div>

        {/* Core Topics */}
        <div className="mb-12">
          <h2 className="text-base font-medium mb-4 border-b border-gray-600 pb-2">Core Topics</h2>
          <div className="space-y-8">
            {/* Statistics */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/statistics" className="hover:opacity-80">
                  Statistics Fundamentals
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                Key statistical concepts for ML interviews: probability, distributions, hypothesis testing, 
                A/B testing, Bayesian statistics, and common statistical pitfalls.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Probability</span>
                <span>•</span>
                <span>Inference</span>
                <span>•</span>
                <span>Bayesian</span>
              </div>
            </div>
            
            {/* ML Theory */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/ml-theory" className="hover:opacity-80">
                  ML Theory Checklist
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                Core machine learning algorithms and concepts: supervised vs unsupervised, model evaluation, 
                bias-variance tradeoff, regularization, and gradient descent variations.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Algorithms</span>
                <span>•</span>
                <span>Models</span>
                <span>•</span>
                <span>Evaluation</span>
              </div>
            </div>
            
            {/* Coding */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/coding" className="hover:opacity-80">
                  Coding Interview Guide
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                Data structures, algorithms, and Python proficiency for technical interviews. 
                Includes common patterns in ML coding questions and data manipulation challenges.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Python</span>
                <span>•</span>
                <span>Algorithms</span>
                <span>•</span>
                <span>Data Structures</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Advanced Topics */}
        <div className="mb-12">
          <h2 className="text-base font-medium mb-4 border-b border-gray-600 pb-2">Advanced Topics</h2>
          <div className="space-y-8">
            {/* System Design */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/ml-system-design" className="hover:opacity-80">
                  ML System Design
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                How to approach ML system design interviews: requirement gathering, feature engineering, 
                model selection, evaluation strategies, and production considerations.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Architecture</span>
                <span>•</span>
                <span>Scalability</span>
                <span>•</span>
                <span>Deployment</span>
              </div>
            </div>
            
            {/* Deep Learning */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/deep-learning" className="hover:opacity-80">
                  Deep Learning Interview Topics
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                Neural network architectures, optimization algorithms, backpropagation, CNNs, RNNs, 
                transformers, and common practices in training deep models.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Neural Networks</span>
                <span>•</span>
                <span>Architectures</span>
                <span>•</span>
                <span>Optimization</span>
              </div>
            </div>
            
            {/* Case Studies */}
            <div>
              <h3 className="font-medium mb-2">
                <Link href="/blog/case-studies" className="hover:opacity-80">
                  ML Case Studies
                </Link>
              </h3>
              <p className="opacity-80 mb-3 text-xs">
                Walkthrough of real-world ML problems and how to solve them in interviews. 
                Examples from recommendation systems, anomaly detection, and forecasting.
              </p>
              <div className="flex space-x-2 opacity-60 text-xs">
                <span>Examples</span>
                <span>•</span>
                <span>Solutions</span>
                <span>•</span>
                <span>Industry Problems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick References */}
        <div>
          <h2 className="text-base font-medium mb-4 border-b border-gray-600 pb-2">Quick References</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/blog/formula-sheet" className="border border-gray-700 p-3 hover:bg-gray-900 rounded-sm">
              <h3 className="text-sm font-medium mb-1">Formula Sheet</h3>
              <p className="opacity-70 text-xs">Key equations and mathematical notation for ML interviews</p>
            </Link>
            <Link href="/blog/ml-glossary" className="border border-gray-700 p-3 hover:bg-gray-900 rounded-sm">
              <h3 className="text-sm font-medium mb-1">ML Glossary</h3>
              <p className="opacity-70 text-xs">Common terms and definitions for quick reference</p>
            </Link>
            <Link href="/blog/algorithm-cheatsheet" className="border border-gray-700 p-3 hover:bg-gray-900 rounded-sm">
              <h3 className="text-sm font-medium mb-1">Algorithm Cheatsheet</h3>
              <p className="opacity-70 text-xs">When to use what algorithm and their trade-offs</p>
            </Link>
            <Link href="/blog/interview-checklist" className="border border-gray-700 p-3 hover:bg-gray-900 rounded-sm">
              <h3 className="text-sm font-medium mb-1">Interview Checklist</h3>
              <p className="opacity-70 text-xs">Step-by-step preparation plan for ML interviews</p>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 dark:border-gray-700">
          <p className="opacity-70 text-xs mb-4">
            These resources are based on my experience preparing for and conducting ML interviews. 
            I hope they help you navigate the challenging landscape of technical interviews in the field.
          </p>
          <Link href="/" className="underline hover:opacity-80 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 