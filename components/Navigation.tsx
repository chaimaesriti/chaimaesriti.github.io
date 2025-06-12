import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-700">
            Chaïmae Sriti
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium">
              Projects
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              Writing
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 