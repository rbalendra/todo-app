import { useEffect, useState } from 'react'
import { getAllTodos, type Todo } from '../services/todos'
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal'
import TodoForm from '../components/Form/TodoForm'

const TasksPage = () => {
	const [tasks, setTasks] = useState<Todo[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)

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

	// Fetch tasks when component mounts
	useEffect(() => {
		fetchTasks()
	}, [])

	// Handle opening the modal
	const handleAddTask = () => {
		setIsModalOpen(true)
	}

	// Handle closing the modal
	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	// Handle successful task creation
	const handleTaskCreated = () => {
		fetchTasks() // Refresh the task list
	}

	return (
		<div className='min-h-screen bg-gray-50 p-6'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>My Tasks</h1>
					<Button variant='PRIMARY' onClick={handleAddTask}>
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
						</div>
					))}
				</div>
			</div>

			{/* Modal with TodoForm */}
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				title='Create New Task'>
				<TodoForm onSuccess={handleTaskCreated} onClose={handleCloseModal} />
			</Modal>
		</div>
	)
}

export default TasksPage
