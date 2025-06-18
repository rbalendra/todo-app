import { useEffect, useState } from 'react'
import {
	createTodo,
	deleteTodo,
	getAllTodos,
	updateTodo,
	type Todo,
} from '../services/todos'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Form/TodoForm'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { ThreeDot } from 'react-loading-indicators'
import { MdContentCopy, MdDateRange } from 'react-icons/md'
import { IoIosAddCircle } from 'react-icons/io'
import { FaCheck, FaSort } from 'react-icons/fa'
import toast from 'react-hot-toast'

const TasksPage = () => {
	// managing states for tasks and modal
	const [tasks, setTasks] = useState<Todo[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingTask, setEditingTask] = useState<Todo | undefined>(undefined)

	// states for loading and errors
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string>('')
	const [isDeleting, setIsDeleting] = useState<number | null>(null)

	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	)

	// states for sorting
	const [sortBy, setSortBy] = useState<'date' | 'name'>('date')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
	// const [showCompleted, setShowCompleted] = useState<boolean | undefined>(
	// 	undefined
	// )

	// Add these computed values for task counts
	const totalTasks = tasks.length
	const completedCount = tasks.filter((task) => task.isCompleted).length
	const activeCount = totalTasks - completedCount
	// fetch tasks when component mounts
	useEffect(() => {
		fetchTasks()
	}, [selectedCategoryId, sortBy, sortOrder])

	// Function to fetch all tasks from API
	const fetchTasks = async () => {
		try {
			const response = await getAllTodos({
				categoryId: selectedCategoryId || undefined,
				sortBy,
				sortOrder,
			})
			setTasks(response)
			setError('')
		} catch (error) {
			setError('Failed to load tasks. Please refresh the page.' + error)
		} finally {
			setIsLoading(false)
		}
	}

	// open modal for creating new task
	const handleAddTask = () => {
		setEditingTask(undefined) // reset fields if you were editing previously
		setIsModalOpen(true)
	}

	// close modal and reset editing state
	const handleCloseModal = () => {
		setEditingTask(undefined)
		setIsModalOpen(false)
	}

	// After task is created/update: refresh the list and close modal
	const handleTaskCreated = () => {
		fetchTasks()
		handleCloseModal()
	}

	// Open modal for editing existing task
	const handleEditTask = (id: number) => {
		const taskToEdit = tasks.find((task) => task.id === id)
		if (taskToEdit) {
			setEditingTask(taskToEdit)
			setIsModalOpen(true)
		}
	}
	//handle delete task and update UI
	const handleDeleteTask = async (id: number) => {
		setIsDeleting(id)
		try {
			await deleteTodo(id) //archive in server
			//remove from local state so UI shows no tasks
			setTasks((prev) => prev.filter((task) => task.id !== id))
			toast.success('Task deleted successfully! 🗑️')
		} catch (error) {
			setError('Failed to delete task. Please Try again' + error)
			toast.error('Failed to delete task. Please try again.')
		} finally {
			setIsDeleting(null)
		}
	}

	//handle duplicatation tasks
	const handleDuplicateTask = async (taskToDuplicate: Todo) => {
		try {
			// Create the duplicate task data
			const duplicateData = {
				name: `${taskToDuplicate.name} (Copy)`,
				dueDate: taskToDuplicate.dueDate,
				isCompleted: false,
				categoryIds: taskToDuplicate.todoCategories.map((tc) => tc.category.id),
			}

			// Call the API to create the duplicate task
			await createTodo(duplicateData)

			// Refresh the tasks list to show the new duplicate
			fetchTasks()
			toast.success('Task duplicated successfully! 📋')
		} catch (error) {
			setError('Failed to duplicate task. Please try again.' + error)
			toast.error('Failed to duplicate task. Please try again.')
		}
	}
	//toggle filter on click
	const handleFilterByCategory = (categoryId: number) => {
		setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId))
	}

	//handle toggle function
	const handleToggleComplete = async (task: Todo) => {
		try {
			// Update the backend
			await updateTodo(task.id, {
				name: task.name,
				dueDate: task.dueDate,
				isCompleted: !task.isCompleted,
			})
			setTasks((prev) =>
				prev.map((t) =>
					t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
				)
			)
			if (!task.isCompleted) {
				toast.success('Task completed! Well done! 🎉')
			} else {
				toast('Task marked as incomplete', {
					icon: '↩️',
				})
			}
		} catch (error) {
			setError('Failed to update task. Please try again.' + error)
			toast.error('Failed to update task. Please try again.')
		}
	}

	// Helper function to check if a date is today or in the past
	const isOverdue = (dateString: string): boolean => {
		// this function will return a boolean
		const today = new Date() // (eg: June 16, 2025, 11:30 AM)
		today.setHours(0, 0, 0, 0) // Reset time part for accurate date comparison

		const dueDate = new Date(dateString) //dateString to obj
		dueDate.setHours(0, 0, 0, 0)
		// console.log(dueDate)
		// console.log(today)
		return dueDate <= today // today or day in the past
	}

	// Error display component if backend is not running
	if (error) {
		return (
			<div className='min-h-screen py-8'>
				<div className='max-w-2xl mx-auto'>
					<div className='bg-red-50 border border-red-200 rounded-2xl p-6 text-center'>
						<div className=' mb-4'>
							<div className='text-4xl mb-4'>⚠️</div>
						</div>

						<h2 className='text-red-800 text-xl font-semibold mb-2'>
							Something went wrong
						</h2>
						<h3 className='text-red-600 mb-4'>{error}</h3>
						<button
							onClick={fetchTasks}
							className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors'>
							Try Again
						</button>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className='min-h-screen py-8 rounded-4xl '>
			<div className='max-w-2xl mx-auto'>
				{/* Header section with title and add task button */}
				<div className='bg-gray-50 rounded-2xl shadow-sm p-6 mb-6 border-2 border-slate-600'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<HiOutlineClipboardList className='text-3xl text-slate-900' />
							<h1 className='text-3xl font-bold text-gray-800'>TASK MANAGER</h1>
							<div className='pl-10 flex gap-3 text-sm'>
								<span className='bg-green-100 text-green-700 px-4 py-1 rounded-full border-1'>
									Completed: {completedCount}
								</span>
								<span className='bg-orange-100 text-orange-700 px-4 py-1 rounded-full border-1'>
									Active: {activeCount}
								</span>
							</div>
						</div>
						<button onClick={handleAddTask}>
							<IoIosAddCircle className='w-10 h-10 bg-purple-400 hover:bg-purple-900 rounded-full transition-colors shadow-sm hover:shadow-sm' />
						</button>
					</div>
				</div>

				{/* Clear filter button */}
				{selectedCategoryId && (
					<div className='mb-4 text-right'>
						<button
							onClick={() => setSelectedCategoryId(null)}
							className='text-sm font-bold text-red-600 hover:underline bg-red-100 rounded-md p-1 border-1 '>
							Clear filter
						</button>
					</div>
				)}

				<div className='bg-gray-50 rounded-xl p-4 mb-4 border-2 border-slate-600 '>
					<div className='flex flex-wrap gap-3 items-center justify-center'>
						{/* Sort by dropdown */}
						<div className='flex gap-2'>
							<button
								onClick={() => setSortBy('date')}
								className={`px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${
									sortBy === 'date'
										? 'bg-purple-200 text-purple-800 border border-purple-300'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
								}`}>
								<MdDateRange className='w-4 h-4' />
								Sort by Date
							</button>
							<button
								onClick={() => setSortBy('name')}
								className={`px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${
									sortBy === 'name'
										? 'bg-purple-200 text-purple-800 border border-purple-300'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 '
								}`}>
								<FaSort className='w-4 h-4' />
								Sort by Name
							</button>
						</div>

						{/* Sort order toggle */}
						<button
							onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
							className='px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 border border-purple-300'>
							{sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
						</button>
					</div>
				</div>

				{/* Tasks list container */}
				<div className='bg-gray-50 rounded-2xl shadow-sm p-6 border-2 border-slate-600'>
					{isLoading ? (
						// Loading state
						<div className='text-center py-12'>
							<ThreeDot color={['#7c31cc', '#cc3133', '#81cc31', '#31ccc9']} />
							<p className='text-gray-500 mt-4'>Loading your tasks...</p>
						</div>
					) : tasks.length === 0 ? (
						// Empty state when no tasks
						<div className='text-center py-12 text-gray-500'>
							<div className='text-6xl mb-4'>📋</div>
							<p className='text-lg'>No tasks yet</p>
							<p className='text-sm'>
								Click the + button to add your first task
							</p>
						</div>
					) : (
						//List of tasks
						<div className='space-y-3'>
							{tasks.map((task) => {
								const isFilteredOut =
									selectedCategoryId !== null &&
									!task.todoCategories.some(
										(tc) => tc.category.id === selectedCategoryId
									)

								return (
									<div
										key={task.id}
										className={`
								flex items-center justify-between p-4 rounded-xl border-1 border-slate-600
								hover:bg-purple-100 transition-colors
								${isDeleting === task.id ? 'opacity-50 pointer-events-none' : ''}
								${task.isCompleted ? 'bg-green-50 border-green-300' : ''}
								
							  `}>
										{' '}
										{/* Left side - Task info */}
										<div className='flex-1'>
											<h3
												className={`font-medium text-gray-600 mb-1 text-2xl ${
													task.isCompleted // Use backend data
														? 'line-through decoration-pink-500 '
														: ''
												}`}>
												{task.name}
											</h3>
											{isOverdue(task.dueDate) ? (
												<p className='text-sm text-red-500 font-bold'>
													OVERDUE
												</p>
											) : (
												<p className='text-sm text-gray-500'>
													Due: {task.dueDate}
												</p>
											)}

											{/* Categories display */}
											{task.todoCategories &&
												task.todoCategories.length > 0 && (
													<div className='flex flex-wrap gap-1 mt-2'>
														{task.todoCategories.map((todoCat) => (
															<span
																key={todoCat.id}
																onClick={() =>
																	handleFilterByCategory(todoCat.category.id)
																}
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
											{/* Add check button before edit button */}
											<button
												onClick={() => handleToggleComplete(task)}
												className={`p-2 rounded-full transition-colors ${
													task.isCompleted
														? 'bg-green-500 text-white hover:bg-green-600'
														: 'bg-gray-200 text-gray-400 hover:bg-green-500 hover:text-white transition-all ease-in-out duration-500'
												}`}
												title={
													task.isCompleted
														? 'Mark as incomplete'
														: 'Mark as complete'
												}>
												<FaCheck className='w-6 h-6' />
											</button>
											{/* Edit button */}
											<button
												onClick={() => handleEditTask(task.id)}
												className='text-gray-400 hover:text-green-500 p-2 rounded-lg hover:bg-green-50 transition-colors border-1'
												title='Edit task'>
												<FiEdit className='w-4 h-4' />
											</button>
											{/* Duplicate button */}
											<button
												onClick={() => handleDuplicateTask(task)}
												className='text-gray-400 hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 transition-colors border-1'
												title='Duplicate task'>
												<MdContentCopy className='w-4 h-4' />
											</button>
											{/* Delete button */}
											<button
												onClick={() => handleDeleteTask(task.id)}
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
							})}
						</div>
					)}
				</div>
			</div>

			{/* Modal with TodoForm */}
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				title={editingTask ? 'Edit Task' : 'Create New Task'}>
				<TodoForm
					onSuccess={handleTaskCreated}
					onClose={handleCloseModal}
					initialData={editingTask}
				/>
			</Modal>
		</div>
	)
}

export default TasksPage
