import { useEffect, useState } from 'react'
import { getAllTodos, type Todo } from '../services/todos'
import './TaskPage.css'

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
		<div className='tasks-container'>
			<div className='cards-grid'>
				{tasks.map((task) => (
					<div className='task-card' key={task.id}>
						<h3 className='task-name'>{task.name}</h3>
						<p className='task-date'>Due: {task.dueDate}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default TasksPage
