import { FaCheck } from 'react-icons/fa'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { MdContentCopy } from 'react-icons/md'
import { ThreeDot } from 'react-loading-indicators'
import type { Todo } from '../../services/todos'

interface TaskCardProps {
	task: Todo
	isDeleting: number | null
	selectedCategoryId: number | null
	onToggleComplete: (task: Todo) => Promise<void> // toggle task completion status
	onEdit: (id: number) => void
	onDuplicate: (task: Todo) => Promise<void>
	onDelete: (id: number) => Promise<void>
	onFilterByCategory: (categoryId: number) => void
}

const TaskCard = ({
	task,
	isDeleting,
	selectedCategoryId,
	onToggleComplete,
	onEdit,
	onDuplicate,
	onDelete,
	onFilterByCategory,
}: TaskCardProps) => {
	// Helper function to check if a date is today or in the past
	const isOverdue = (dateString: string): boolean => {
		const today = new Date()
		today.setHours(0, 0, 0, 0)
		const dueDate = new Date(dateString)
		dueDate.setHours(0, 0, 0, 0)
		return dueDate <= today
	}

	return (
		<div
			className={`
        flex items-center justify-between p-4 rounded-xl border-1 border-slate-600
        hover:bg-purple-100 transition-colors
        ${isDeleting === task.id ? 'opacity-50 pointer-events-none' : ''}
        ${task.isCompleted ? 'bg-green-50 border-green-300' : ''}
      `}>
			{/* Left side - Task info */}
			<div className='flex-1'>
				<h3
					className={`font-medium text-gray-600 mb-1 text-2xl ${
						task.isCompleted ? 'line-through decoration-pink-500' : ''
					}`}>
					{task.name}
				</h3>
				{isOverdue(task.dueDate) ? (
					<p className='text-sm text-red-500 font-bold'>OVERDUE</p>
				) : (
					<p className='text-sm text-gray-500'>Due: {task.dueDate}</p>
				)}

				{/* Categories display */}
				{task.todoCategories && task.todoCategories.length > 0 && (
					<div className='flex flex-wrap gap-1 mt-2'>
						{task.todoCategories.map((todoCat) => (
							<span
								key={todoCat.id}
								onClick={() => onFilterByCategory(todoCat.category.id)}
								className='bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full border-1 cursor-pointer hover:bg-purple-200 transition-colors'
								style={
									selectedCategoryId === todoCat.category.id
										? {
												backgroundColor: '#d8b4fe',
												fontWeight: 'bold',
												textTransform: 'uppercase',
										  }
										: {}
								}>
								{todoCat.category.name}
							</span>
						))}
					</div>
				)}
			</div>

			{/* Right side - Action buttons */}
			<div className='flex items-center gap-2 ml-4'>
				{/* Complete/Incomplete button */}
				<button
					onClick={() => onToggleComplete(task)}
					className={`p-2 rounded-full transition-colors ${
						task.isCompleted
							? 'bg-green-500 text-white hover:bg-green-600'
							: 'bg-gray-200 text-gray-400 hover:bg-green-500 hover:text-white transition-all ease-in-out duration-500'
					}`}
					title={task.isCompleted ? 'Mark as incomplete' : 'Mark as complete'}>
					<FaCheck className='w-6 h-6' />
				</button>

				{/* Edit button */}
				<button
					onClick={() => onEdit(task.id)}
					className='text-gray-400 hover:text-green-500 p-2 rounded-lg hover:bg-green-50 transition-colors border-1'
					title='Edit task'>
					<FiEdit className='w-4 h-4' />
				</button>

				{/* Duplicate button */}
				<button
					onClick={() => onDuplicate(task)}
					className='text-gray-400 hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 transition-colors border-1'
					title='Duplicate task'>
					<MdContentCopy className='w-4 h-4' />
				</button>

				{/* Delete button */}
				<button
					onClick={() => onDelete(task.id)}
					className='text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors border-1'
					title='Delete task'>
					{isDeleting === task.id ? (
						<ThreeDot color='#ef4444' size='small' />
					) : (
						<FiTrash2 className='w-4 h-4' />
					)}
				</button>
			</div>
		</div>
	)
}

export default TaskCard
