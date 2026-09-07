import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantClasses = {
      primary: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      secondary: 'bg-gray-800 text-white border border-gray-700 hover:border-red-500 hover:bg-gray-700 focus:ring-red-500',
      ghost: 'text-white hover:bg-white hover:bg-opacity-10 focus:ring-red-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
