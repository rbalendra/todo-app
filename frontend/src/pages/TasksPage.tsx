import { useEffect, useState } from 'react'
import { getAllTodos, type Todo } from '../services/todos'

const TasksPage = () => {
	const [tasks, setTasks] = useState<Todo[]>([])

	useEffect(() => {
		getAllTodos()
			.then((response) => {
				console.log('Fetched tasks:', response)
				setTasks(response)
			})
			.catch(console.warn)
	}, [])

	return (
		<div className='min-h-screen bg-gray-50 p-6'>
			<div className='max-w-6xl mx-auto'>
				<h1 className='text-3xl font-bold text-gray-900 mb-8'>My Tasks</h1>

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
		</div>
	)
}

export default TasksPage
