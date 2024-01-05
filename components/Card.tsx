import React from 'react'

interface CardProps {
  title: string
  description: string
  imageSrc?: string
  link?: string
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      {imageSrc && <img className='w-full' src={imageSrc} alt={title} />}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      {link && (
        <div className='px-6 pt-4 pb-2'>
          <a
            href={link}
            className='text-indigo-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            Learn More
          </a>
        </div>
      )}
    </div>
  )
}

export default Card
