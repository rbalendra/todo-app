import { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
	isOpen: boolean
	onClose: () => void // function to close modal
	title: string
	children: React.ReactNode // content inside modal
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setIsVisible(true), 10)
		} else {
			setIsVisible(false)
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		// Full screen overlay with blur effect
		<div
			className={`
            fixed inset-0 z-50 flex items-center justify-center p-4
            transition-all duration-300 ease-out
            ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
			<div
				className={`
                    absolute inset-0  backdrop-blur-sm
                    transition-all ease-in-out duration-300
					${isVisible ? 'bg-gray-800' : 'bg-transparent'}
                `}
				onClick={onClose}
			/>

			{/* Modal container - centered and responsive */}
			<div className='relative z-10 bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border-5 border-purple-500 no-scrollbar h-[700px] '>
				{/* Header with title and close button */}
				<div className='flex justify-between items-center p-6 border-b border-gray-100'>
					<h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-gray-600 text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors'>
						<IoClose className='w-6 h-6' />
					</button>
				</div>

				{/* Modal content */}
				<div className='p-6'>{children}</div>
			</div>
		</div>
	)
}

export default Modal
