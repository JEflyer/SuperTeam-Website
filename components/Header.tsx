import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-md'>
      <nav className='container mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/' passHref>
              <span className='text-gray-800 text-xl font-bold cursor-pointer'>
                Superteam UK
              </span>
            </Link>
            {/* Navigation Links */}
            <div className='ml-10 space-x-4'>
              <Link href='/learn' passHref>
                <span className='text-gray-800 hover:text-gray-600 cursor-pointer'>
                  Learn
                </span>
              </Link>
              <Link href='/earn' passHref>
                <span className='text-gray-800 hover:text-gray-600 cursor-pointer'>
                  Earn
                </span>
              </Link>
              <Link href='/build' passHref>
                <span className='text-gray-800 hover:text-gray-600 cursor-pointer'>
                  Build
                </span>
              </Link>
              <Link href='/community' passHref>
                <span className='text-gray-800 hover:text-gray-600 cursor-pointer'>
                  Community
                </span>
              </Link>
              <Link href='/about' passHref>
                <span className='text-gray-800 hover:text-gray-600 cursor-pointer'>
                  About
                </span>
              </Link>
            </div>
          </div>
          {/* Additional header content such as search or account links could be added here */}
        </div>
      </nav>
    </header>
  )
}

export default Header
