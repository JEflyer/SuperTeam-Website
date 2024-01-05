import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  imageSrc?: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className='hero-container bg-gray-200 text-center py-16 px-4'>
      {imageSrc && (
        <img src={imageSrc} alt='Hero' className='mx-auto h-48 w-auto' />
      )}
      <h1 className='mt-4 text-4xl font-bold text-gray-800'>{title}</h1>
      {subtitle && <p className='mt-2 text-xl text-gray-600'>{subtitle}</p>}
      {/* Additional content like buttons or links can be added here */}
    </div>
  )
}

export default Hero
