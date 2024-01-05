
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-4xl font-bold text-gray-800 text-center'>
        Welcome to Superteam UK
      </h1>
      <p className='mt-4 text-gray-600 text-center'>
        Empowering the Solana Ecosystem in the UK
      </p>

      <div className='mt-8 flex flex-wrap justify-center'>
        <div className='w-full md:w-1/3 p-4'>
          <h2 className='text-xl font-semibold text-gray-800'>Learn</h2>
          <p className='text-gray-600'>
            Access educational resources and enhance your skills in blockchain
            and Solana development.
          </p>
          <Link href='/learn' className='text-indigo-600 hover:text-indigo-800'>
            Explore Learning Resources →
          </Link>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <h2 className='text-xl font-semibold text-gray-800'>Earn</h2>
          <p className='text-gray-600'>
            Discover opportunities to earn within the Solana ecosystem through
            jobs, bounties, and more.
          </p>
          <Link href='/earn' className='text-indigo-600 hover:text-indigo-800'>
            Find Earning Opportunities →
          </Link>
        </div>

        <div className='w-full md:w-1/3 p-4'>
          <h2 className='text-xl font-semibold text-gray-800'>Build</h2>
          <p className='text-gray-600'>
            Collaborate on Solana projects and build innovative solutions with
            the support of our community.
          </p>
          <Link href='/build' className='text-indigo-600 hover:text-indigo-800'>
            Start Building →
          </Link>
        </div>
      </div>
    </div>
  )
}
