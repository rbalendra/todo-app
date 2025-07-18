// Denfine the shape of the data we expect from the API
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
	// optional for partial updates
	name?: string
	dueDate?: string
	isCompleted?: boolean
	categoryIds?: number[]
	isArchived?: boolean
}

// const API_BASE_URL = 'http://localhost:8080'
const API_BASE_URL = 'https://deployedweb.site'
//get all active todos with optional filtering and sorting
export const getAllTodos = async (params?: {
	categoryId?: number // Filter by specific category
	sortBy?: 'date' | 'name' // Sort by due date or task name
	sortOrder?: 'asc' | 'desc' // Ascending or descending order
}): Promise<Todo[]> => {
	try {
		const searchParams = new URLSearchParams() // URLSearchParams helps build query strings like "?categoryId=1&sortBy=date"

		// add parameters if they exist (optional)
		if (params?.categoryId) {
			searchParams.append('categoryId', params.categoryId.toString()) // this is for filtering by category
			console.log('categoryId:', params.categoryId)
		}

		if (params?.sortBy) {
			searchParams.append('sortBy', params.sortBy) // this is for sorting by date or name
			console.log('sortBy:', params.sortBy)
		}
		if (params?.sortOrder) {
			searchParams.append('sortOrder', params.sortOrder) // this is for sorting order (asc or desc)
			console.log('sortOrder:', params.sortOrder)
		}
		// Construct the URL with query parameters
		// Build final URL: either "/todos" or "/todos?categoryId=1&sortBy=date"
		const url = `${API_BASE_URL}/todos${
			searchParams.toString() ? `?${searchParams.toString()}` : ''
		}`
		console.log('Fetching todos from:', url) // Log the URL being fetched

		const response = await fetch(url) // make GET request to the API
		if (!response.ok) {
			throw new Error(`Error fetching todos: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		console.error('Failed to fetch todos:', error)
		throw error
	}
}

//create todo - POST request to create a new todo
export const createTodo = async (todoData: CreateTodoDTO): Promise<Todo> => {
	const response = await fetch(`${API_BASE_URL}/todos`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todoData),
	})

	if (!response.ok) throw new Error(`Error: ${response.status}`)
	return await response.json()
}

//delete todo - DELETE request to specific ID
export const deleteTodo = async (id: number): Promise<void> => {
	const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
		method: 'DELETE',
	})
	if (!response.ok) {
		throw new Error(`Failed to delete todo ${id}: ${response.status}`)
	}
}

// update Todo - PATCH request for partial updates
export const updateTodo = async (
	id: number,
	updateData: UpdateTodoDTO // Only the fields that changed
): Promise<Todo> => {
	const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updateData),
	})
	if (!response.ok) throw new Error(`Error updating todo: ${response.status}`)
	return await response.json()
}

// Get all categories - simple GET request
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
// create categories - POST request
export const createCategory = async (
	categoryData: CreateCategoryDTO // only name is required
): Promise<Category> => {
	const response = await fetch(`${API_BASE_URL}/categories`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(categoryData),
	})

	if (!response.ok) throw new Error(`Error: ${response.status}`)
	return await response.json()
}

//delete categories - DELETE request
export const deleteCategory = async (id: number): Promise<void> => {
	const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		throw new Error('Failed to delete category')
	}
}
