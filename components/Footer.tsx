import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-200 text-center lg:text-left'>
      <div className='container p-6'>
        <div className='flex justify-center items-center lg:justify-between'>
          <div className='flex justify-center'>
            {/* Internal navigation links */}
            <Link href='/about'>
              <span className='mr-6 text-gray-600 cursor-pointer'>
                About Us
              </span>
            </Link>
            <Link href='/contact'>
              <span className='mr-6 text-gray-600 cursor-pointer'>Contact</span>
            </Link>
            {/* More Link components for other internal routes */}
          </div>
          <div className='flex justify-center'>
            {/* External links can remain as <a> tags */}
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-6 text-gray-600'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-6 text-gray-600'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='mr-6 text-gray-600'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='text-gray-600 text-center p-4 bg-gray-100'>
        © {currentYear} Superteam UK. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
