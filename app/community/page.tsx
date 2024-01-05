import React from 'react'

const Community: React.FC = () => {
  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-3xl font-semibold text-gray-800'>Our Community</h1>
      <p className='mt-4 text-gray-600'>
        The Superteam UK community is at the heart of everything we do. It's a
        vibrant network of developers, creators, and blockchain enthusiasts.
        Join us to connect, share, and learn in a collaborative environment.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>
        Forums and Discussions
      </h2>
      <p className='mt-4 text-gray-600'>
        Dive into discussions, ask questions, and share your knowledge in our
        forums. It's a great place to get feedback, find answers, and stay
        informed about the latest trends and topics in the blockchain world.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>
        Upcoming Events
      </h2>
      <p className='mt-4 text-gray-600'>
        Participate in our events, workshops, and meetups. Whether online or
        in-person, our events are designed to foster learning, networking, and
        collaboration within the Solana ecosystem.
      </p>

      <h2 className='text-2xl font-semibold text-gray-800 mt-6'>
        Member Stories
      </h2>
      <p className='mt-4 mb-8 text-gray-600'>
        Hear from our community members about their experiences and journeys in
        blockchain and technology. Get inspired by their stories and see how you
        can also contribute to and benefit from the Superteam UK community.
      </p>
    </div>
  )
}

export default Community
