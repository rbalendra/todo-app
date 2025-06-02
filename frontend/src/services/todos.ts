export interface TodoCategory {
	id: number
	categoryName: string
	categoryId: number
}

export interface Todo {
	id: number
	name: string
	dueDate: string
	isCompleted: boolean
	isArchived: boolean
	todoCategories: TodoCategory[]
}

export interface CreateTodoDTO {
	name: string
	dueDate: string
	isCompleted?: boolean
	categoryIds?: number[]
}

// export interface UpdateTodoDTO {
// 	name?: string
// 	dueDate?: string
// 	isCompleted?: boolean
// 	isArchived?: boolean
// 	categoryIds?: number[]
// }

const API_BASE_URL = 'http://localhost:8080'

//get all active todos
export const getAllTodos = async (): Promise<Todo[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/todos`)
		if (!response.ok) {
			throw new Error(`Error fetching todos: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error('Failed to fetch todos:', error)
		throw error
	}
}
