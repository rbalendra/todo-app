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
import { ThreeDot } from 'react-loading-indicators'
import { MdDateRange } from 'react-icons/md'
import { IoIosAddCircle } from 'react-icons/io'
import { FaSort } from 'react-icons/fa'
import toast from 'react-hot-toast'
import TaskCard from '../components/TaskCard/TaskCard'

const TasksPage = () => {
	// managing states for tasks and modal
	const [tasks, setTasks] = useState<Todo[]>([]) // main array of todo tasks from API
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingTask, setEditingTask] = useState<Todo | undefined>(undefined) //Holds the task data being edited (undefined when creating a new task)

	// states for loading and errors
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string>('')
	const [isDeleting, setIsDeleting] = useState<number | null>(null) // loading indicator on button

	//ID of the currently selected category for filtering tasks
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	)

	//  Controls how tasks are sorted (by date or by name)
	const [sortBy, setSortBy] = useState<'date' | 'name'>('date')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

	// computed values
	const totalTasks = tasks.length
	const completedCount = tasks.filter((task) => task.isCompleted).length
	const activeCount = totalTasks - completedCount

	/* ----- Fetches tasks from API whenever filters or sort options change ----- */

	useEffect(() => {
		fetchTasks()
	}, [selectedCategoryId, sortBy, sortOrder])

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

	/* ---------------------- HANDLER FUNCTIONS FOR EVENTS ---------------------- */
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
	//called from todo form component
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

	//handle duplicatation tasks by copying all task propers except completion status and adds (copy)
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

	//toggle filter on click and off
	//If the same category is clicked again, removes the filter
	const handleFilterByCategory = (categoryId: number) => {
		setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId))
	}

	//handle toggle function for task's completion status
	// Updates both backend and local state, shows appropriate toast message
	const handleToggleComplete = async (task: Todo) => {
		// Calculate the new completion status once
		const newCompletionStatus = !task.isCompleted
		//update local state
		setTasks(
			(prev) =>
				prev.map((t) =>
					t.id === task.id ? { ...t, isCompleted: newCompletionStatus } : t
				) // !t.isCompleted toggles the completion status: if true, sets to false and vice versa
		)
		try {
			await updateTodo(task.id, {
				isCompleted: newCompletionStatus, // ✅ Use the calculated value
			})
			// Update the backend

			if (newCompletionStatus) {
				toast.success('Task completed! Well done! 🎉')
			} else {
				toast('Task marked as incomplete', {
					icon: '↩️',
				})
			}
		} catch (error) {
			setTasks((prev) =>
				prev.map((t) =>
					t.id === task.id ? { ...t, isCompleted: task.isCompleted } : t
				)
			)
			setError('Failed to update task. Please try again.' + error)
			toast.error('Failed to update task. Please try again.')
		}
	}
	/* -------------------------- CONDITIONAL RENDERING ------------------------- */
	// Error display component if backend is not running
	if (error) {
		return (
			<div className='min-h-screen py-8'>
				<div className='max-w-2xl mx-auto'>
					<div className='bg-red-50 border border-red-200 rounded-2xl p-6 text-center'>
						<div className=' mb-4'>
							<div className='text-7xl mb-4'>⚠️</div>
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
	/* -------------------------------------------------------------------------- */
	return (
		<div className='min-h-screen py-8 rounded-4xl '>
			<div className='max-w-2xl mx-auto'>
				{/* Header section with title and add task button */}
				<div className='bg-gray-50 rounded-2xl shadow-sm p-6 mb-6 border-2 border-slate-600'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<HiOutlineClipboardList className='text-3xl text-slate-900' />
							<h1 className='text-3xl font-bold text-gray-800'>TASK MANAGER</h1>
						</div>
						<button onClick={handleAddTask}>
							<IoIosAddCircle className='w-15 h-15 bg-green-600 hover:bg-purple-900 rounded-full transition-colors shadow-sm hover:shadow-sm' />
						</button>
					</div>
				</div>

				{/* Clear filter button - only shown when a category filter is active  */}
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
						<div className='flex gap-2'>
							<div className='select-none px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm border border-green-300 flex items-center gap-1'>
								Completed: {completedCount}
							</div>
							<div className='select-none px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-sm border border-orange-300 flex items-center gap-1'>
								Active: {activeCount}
							</div>
						</div>

						{/* Sort by buttons (date or name) */}
						<div className='flex gap-2'>
							<button
								onClick={() => setSortBy('date')}
								className={`cursor-pointer px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${
									sortBy === 'date'
										? 'cursor-pointer bg-purple-200 text-purple-800 border border-purple-300'
										: 'cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
								}`}>
								<MdDateRange className='w-4 h-4' />
								Sort by Date
							</button>
							<button
								onClick={() => setSortBy('name')}
								className={`cursor-pointer px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-1 ${
									sortBy === 'name'
										? 'cursor-pointer bg-purple-200 text-purple-800 border border-purple-300'
										: 'cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 '
								}`}>
								<FaSort className='w-4 h-4' />
								Sort by Name
							</button>
						</div>

						{/* Sort order toggle */}
						<button
							onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
							className='px-3 py-1  cursor-pointer bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 border border-purple-300'>
							{sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
						</button>
					</div>
				</div>

				{/* Tasks list container: displays loading, empty, or task list states  */}
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
						// List of tasks using TaskCard component
						<div className='space-y-3'>
							{tasks.map((task) => (
								<TaskCard
									key={task.id}
									task={task}
									isDeleting={isDeleting}
									selectedCategoryId={selectedCategoryId}
									onToggleComplete={handleToggleComplete}
									onEdit={handleEditTask}
									onDuplicate={handleDuplicateTask}
									onDelete={handleDeleteTask}
									onFilterByCategory={handleFilterByCategory}
								/>
							))}
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
