import React, { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface LayoutProps {
  children: ReactNode
  pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  // Set the page title if provided
  if (pageTitle) {
    if (typeof document !== 'undefined') {
      document.title = pageTitle
    }
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
