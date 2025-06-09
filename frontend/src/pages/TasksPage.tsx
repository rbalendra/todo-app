import { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos, type Todo } from '../services/todos'
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Form/TodoForm'

const TasksPage = () => {
	const [tasks, setTasks] = useState<Todo[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingTask, setEditingTask] = useState<Todo | undefined>(undefined)

	useEffect(() => {
		fetchTasks()
	}, [])

	// Function to fetch all tasks
	const fetchTasks = async () => {
		try {
			const response = await getAllTodos()
			console.log('Fetched tasks:', response)
			setTasks(response)
		} catch (error) {
			console.warn(error)
		}
	}

	// Handle opening the modal
	const handleAddTask = () => {
		setEditingTask(undefined)
		setIsModalOpen(true)
	}

	// Handle closing the modal
	const handleCloseModal = () => {
		setEditingTask(undefined)
		setIsModalOpen(false)
	}

	// Handle successful task creation
	const handleTaskCreated = () => {
		fetchTasks() // Refresh the task list
	}

	//handle edit task
	const handleEditTask = (id: number) => {
		const taskToEdit = tasks.find((task) => task.id === id)
		if (taskToEdit) {
			setEditingTask(taskToEdit)
			setIsModalOpen(true)
		}
	}

	const handleDeleteTask = async (id: number) => {
		try {
			await deleteTodo(id)
			// remove the deleted task from local state so UI updates immediately
			setTasks((prev) => prev.filter((task) => task.id !== id))
		} catch (error) {
			console.error('Failed to delete task', error)
		}
	}

	return (
		<div className='min-h-screen bg-slate-500 p-6   rounded-xl shadow-lg'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 p-3 mr-2'>
						TASK MANAGEMENT
					</h1>
					<Button
						className=' p-3 text-white bg-rose-900 hover:bg-rose-800 shadow-blue-950 shadow-xs transition-colors duration-500 size-9/17 rounded-md'
						variant='PRIMARY'
						onClick={handleAddTask}>
						Add Task
					</Button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{tasks.map((task) => (
						<div
							key={task.id}
							className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200'>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								{task.name}
							</h3>
							<p className='text-gray-600 text-sm'>Due: {task.dueDate}</p>
							<p className='text-gray-600 text-sm'>
								Status: {task.isCompleted ? 'Completed' : 'Pending'}
							</p>
							{/* Categories Display */}
							{task.todoCategories && task.todoCategories.length > 0 && (
								<div className='mt-2 mb-3'>
									<p className='text-gray-600 text-xs mb-1'>Categories:</p>
									<div className='flex flex-wrap gap-1'>
										{task.todoCategories.map((todoCat) => (
											<span
												key={todoCat.id}
												className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
												{todoCat.category.name}
											</span>
										))}
									</div>
								</div>
							)}
							<div className='flex justify-between mt-4'>
								<Button
									variant='SECONDARY'
									onClick={() => handleEditTask(task.id)}>
									Edit
								</Button>
								<Button
									variant='DANGER'
									onClick={() => handleDeleteTask(task.id)}>
									Delete
								</Button>
							</div>
						</div>
					))}
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
