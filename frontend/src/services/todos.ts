export interface TodoCategory {
	id: number
	category: {
		id: number
		name: string
	}
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

export interface Category {
	id: number
	name: string
}

export interface CreateCategoryDTO {
	name: string
}

export interface UpdateTodoDTO {
	name?: string
	dueDate?: string
	isCompleted?: boolean
	categoryIds?: number[]
	isArchived?: boolean
}

// export interface UpdateTodoDTO {
// 	name?: string
// 	dueDate?: string
// 	isCompleted?: boolean
// 	isArchived?: boolean
// 	categoryIds?: number[]
// }

const API_BASE_URL = 'http://localhost:8080'
// const API_BASE_URL =
// 	'http://ec2-3-106-122-62.ap-southeast-2.compute.amazonaws.com:8080'
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

//create todo
export const createTodo = async (todoData: CreateTodoDTO): Promise<Todo> => {
	const response = await fetch(`${API_BASE_URL}/todos`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todoData),
	})

	if (!response.ok) throw new Error(`Error: ${response.status}`)
	return await response.json()
}

//delete todo
export const deleteTodo = async (id: number): Promise<void> => {
	const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`Failed to delete todo ${id}: ${response.status}`)
	}
}

// update Todo
export const updateTodo = async (
	id: number,
	updateData: UpdateTodoDTO
): Promise<Todo> => {
	const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updateData),
	})
	if (!response.ok) throw new Error(`Error updating todo: ${response.status}`)
	return await response.json()
}

// Get all categories
export const getAllCategories = async (): Promise<Category[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/categories`)
		if (!response.ok) {
			throw new Error(`Error fetching categories: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error('Failed to fetch categories:', error)
		throw error
	}
}
// create categories
export const createCategory = async (
	categoryData: CreateCategoryDTO
): Promise<Category> => {
	const response = await fetch(`${API_BASE_URL}/categories`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(categoryData),
	})

	if (!response.ok) throw new Error(`Error: ${response.status}`)
	return await response.json()
}

//delete categories
export const deleteCategory = async (id: number): Promise<void> => {
	const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		throw new Error('Failed to delete category')
	}
}
