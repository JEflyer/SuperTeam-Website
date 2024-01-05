import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  ...props
}) => {
  // Add different styles for different variants
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-black',
    danger: 'bg-red-500 hover:bg-red-700 text-white'
  }

  // Combine the default styles with variant specific styles
  const buttonStyles = `py-2 px-4 rounded focus:outline-none focus:shadow-outline ${variantStyles[variant]}`

  return (
    <button className={buttonStyles} {...props}>
      {label}
    </button>
  )
}

export default Button
