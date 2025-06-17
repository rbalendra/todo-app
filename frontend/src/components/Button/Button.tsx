// Define possible button styles (variants)
type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER' | 'WARNING'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant // Single variant instead of array
}

export default function Button({
	variant = 'PRIMARY', // Default to primary
	children,
	className = '',
	...rest
}: ButtonProps) {
	// Object mapping each variant to its corresponding Tailwind classes
	const variantStyles = {
		PRIMARY: 'bg-purple-600 text-white hover:bg-purple-900 rounded-xl',
		SECONDARY: 'bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-xl',
		SUCCESS: 'bg-green-600 text-white hover:bg-green-700 rounded-xl',
		DANGER: 'bg-red-600 text-white hover:bg-red-700 rounded-xl',
		WARNING: 'bg-yellow-500 text-white hover:bg-yellow-600 rounded-xl',
	}

	// Base button styles that apply to all variants
	const baseStyles =
		'px-4 py-1 rounded-full font-medium transition-colors duration-200'

	// Combine base styles with variant-specific styles and any additional classes
	const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	)
}
