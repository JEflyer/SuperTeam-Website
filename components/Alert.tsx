import React from 'react'

type AlertProps = {
  type: 'error' | 'warning' | 'info' | 'success'
  message: string
  onClose?: () => void // Optional close function
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return 'bg-red-500'
      case 'warning':
        return 'bg-yellow-400'
      case 'info':
        return 'bg-blue-500'
      case 'success':
        return 'bg-green-500'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <div
      className={`p-4 mb-4 text-sm text-white ${getBackgroundColor()}`}
      role='alert'
    >
      <span className='block sm:inline'>{message}</span>
      {onClose && (
        <span
          className='absolute top-0 bottom-0 right-0 px-4 py-3'
          onClick={onClose}
        >
          <svg
            className='fill-current h-6 w-6 text-white'
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <title>Close</title>
            <path d='M14.348 14.849a1 1 0 00-1.414 0L10 18.192 7.152 15.345a1 1 0 10-1.414 1.414L8.586 19.607 5.737 22.455a1 1 0 101.414 1.414L10 21.021l2.848 2.848a1 1 0 001.414-1.414l-2.848-2.848 2.848-2.848a1 1 0 000-1.414z'></path>
          </svg>
        </span>
      )}
    </div>
  )
}

export default Alert
