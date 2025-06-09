interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title: string
	children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 bg-slate-500 bg-opacity-25 flex items-center justify-center z-5'>
			<div className='bg-white rounded-lg p-6 w-full max-w-md mx-4'>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-xl font-bold text-gray-900'>{title}</h2>
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-gray-600 text-2xl'>
						×
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Modal
