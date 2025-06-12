import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 - Built with Next.js and Tailwind CSS
          </p>
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700 text-sm">
              Email
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700 text-sm">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700 text-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 