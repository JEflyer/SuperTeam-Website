import React from 'react'

interface TestimonialProps {
  text: string
  author: string
  position?: string
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  position
}) => {
  return (
    <div className='testimonial-container bg-gray-100 p-4 rounded-lg shadow'>
      <p className='text-gray-600 italic'>"{text}"</p>
      <div className='author-info mt-4'>
        <p className='font-semibold text-gray-800'>{author}</p>
        {position && <p className='text-gray-500'>{position}</p>}
      </div>
    </div>
  )
}

export default Testimonial
