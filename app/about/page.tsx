import React from 'react'

const About: React.FC = () => {
  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-3xl font-semibold text-gray-800'>About Us</h1>
      <p className='mt-4 text-gray-600'>
        Welcome to Superteam UK, a collaborative platform dedicated to
        supporting the Solana ecosystem in the United Kingdom. Our mission is to
        foster a thriving community of creatives, developers, and operators who
        are passionate about the potential of blockchain technology and
        decentralized applications.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>Our Journey</h2>
      <p className='mt-4 text-gray-600'>
        Superteam UK was founded in [Year] by a group of blockchain enthusiasts
        and tech innovators. Our team has grown significantly since then,
        encompassing a diverse range of talents and backgrounds, all united by a
        shared vision for the future of technology and finance.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>What We Do</h2>
      <p className='mt-4 text-gray-600'>
        Our activities range from educational initiatives and workshops to
        support aspiring Solana developers, to offering resources for building
        and growing technology businesses within the Solana ecosystem. We
        believe in the power of collaboration and open-source development, and
        we aim to be at the forefront of innovation in the blockchain space.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>
        Join Our Community
      </h2>
      <p className='mt-4 mb-8 text-gray-600'>
        Whether you're a seasoned developer, a budding entrepreneur, or simply
        curious about blockchain technology, Superteam UK offers a range of
        opportunities to learn, earn, and build. Join our community to be a part
        of this exciting journey and help shape the future of decentralized
        technology.
      </p>
    </div>
  )
}

export default About
