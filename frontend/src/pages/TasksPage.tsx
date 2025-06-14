import { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos, type Todo } from '../services/todos'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Form/TodoForm'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

const TasksPage = () => {
	// managing states for tasks and modal
	const [tasks, setTasks] = useState<Todo[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingTask, setEditingTask] = useState<Todo | undefined>(undefined)

	// fetch tasks when component mounts
	useEffect(() => {
		fetchTasks()
	}, [])

	// Function to fetch all tasks from API
	const fetchTasks = async () => {
		try {
			const response = await getAllTodos()
			setTasks(response)
		} catch (error) {
			console.warn(error)
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
		try {
			await deleteTodo(id) //archive in server
			//remove from local state so UI shows no tasks
			setTasks((prev) => prev.filter((task) => task.id !== id))
		} catch (error) {
			console.error('Failed to delete task', error)
		}
	}

	return (
		<div className='min-h-screen py-8 rounded-4xl '>
			<div className='max-w-2xl mx-auto'>
				{' '}
				{/* Header section with title and add button */}
				<div className='bg-white rounded-2xl shadow-sm p-6 mb-6 border-2 border-slate-600'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<HiOutlineClipboardList className='text-3xl text-slate-500' />
							<h1 className='text-3xl font-bold text-gray-500'>TASK MANAGER</h1>
						</div>
						<button
							onClick={handleAddTask}
							className='bg-purple-500 hover:bg-purple-600 text-white rounded-full w-15 h-10 flex items-center justify-center transition-colors shadow-sm hover:shadow-sm font-bold'>
							+
						</button>
					</div>
				</div>
				{/* Tasks list container */}
				<div className='bg-white rounded-2xl shadow-sm p-6 border-2 border-slate-600'>
					{tasks.length === 0 ? (
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
							{tasks.map((task) => (
								<div
									key={task.id}
									className={`
                                        flex items-center justify-between p-4 rounded-xl  border-1 border-slate-600
                                        hover:bg-purple-50 transition-colors
                                    `}>
									{/* Left side - Task info */}
									<div className='flex-1'>
										<h3 className='font-medium text-gray-800 mb-1 text-xl'>
											{task.name}
										</h3>
										<p className='text-sm text-gray-500'>Due: {task.dueDate}</p>

										{/* Categories display */}
										{task.todoCategories && task.todoCategories.length > 0 && (
											<div className='flex flex-wrap gap-1 mt-2'>
												{task.todoCategories.map((todoCat) => (
													<span
														key={todoCat.id}
														className='bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full border-1'>
														{todoCat.category.name}
													</span>
												))}
											</div>
										)}
									</div>

									{/* Right side - Action buttons */}
									<div className='flex items-center gap-2 ml-4'>
										{/* Edit button */}
										<button
											onClick={() => handleEditTask(task.id)}
											className='text-gray-400 hover:text-green-500 p-2 rounded-lg hover:bg-green-50 transition-colors border-1'
											title='Edit task'>
											<FiEdit className='w-4 h-4' />
										</button>

										{/* Delete button */}
										<button
											onClick={() => handleDeleteTask(task.id)}
											className='text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors border-1'
											title='Delete task'>
											<FiTrash2 className='w-4 h-4' />
										</button>
									</div>
								</div>
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
