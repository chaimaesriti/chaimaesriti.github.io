import React from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children?: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({ 
  children, 
  title = 'The Last Living Data Scientist',
  description = 'Surviving the AI apocalypse, one machine learning model at a time'
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white text-gray-900 font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout 