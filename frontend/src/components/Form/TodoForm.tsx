import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { getAllCategories, updateTodo, createTodo } from '../../services/todos'
import CategoryManager from '../CategoryManager/CategoryManager'
import { todoFormSchema, type TodoFormData } from './schema'

interface TodoFormProps {
	onSuccess: () => void
	onClose: () => void
	initialData?: Todo
}

interface Todo {
	id: number
	name: string
	dueDate: string
	isCompleted: boolean
	isArchived: boolean
	todoCategories: {
		id: number
		category: {
			id: number
			name: string
		}
	}[]
}

interface Category {
	id: number
	name: string
}

const TodoForm = ({ onSuccess, onClose, initialData }: TodoFormProps) => {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoadingCategories, setIsLoadingCategories] = useState(true)

	const {
		register, // connects form inputs to react-hook-form
		handleSubmit, // handles form submission
		formState: { errors }, // contains zod powered errors
		watch, // read current categoryIds value
		setValue, // update CategoryId'
		reset,
	} = useForm<TodoFormData>({
		resolver: zodResolver(todoFormSchema),
		defaultValues: {
			name: initialData?.name || '',
			dueDate: initialData?.dueDate || '',
			categoryIds:
				initialData?.todoCategories?.map((cat) => cat.category.id) || [],
		},
	})

	/* ------------------------- data fetching from API ------------------------- */
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoriesData = await getAllCategories()
				setCategories(categoriesData)
			} catch (error) {
				console.error('Failed to fetch categories:', error)
			} finally {
				setIsLoadingCategories(false)
			}
		}

		fetchCategories()
	}, [])

	useEffect(() => {
		if (initialData) {
			reset({
				name: initialData.name,
				dueDate: initialData.dueDate,
				categoryIds:
					initialData.todoCategories.map((tc) => tc.category.id) ?? [],
			})
		}
	}, [initialData, reset])

	const onSubmit = async (data: TodoFormData) => {
		try {
			console.log('validated form data', data)

			if (initialData) {
				// Update existing todo
				await updateTodo(initialData.id, data)
			} else {
				// Create new todo
				await createTodo(data)
			}

			onSuccess() // Call success callback
		} catch (error) {
			console.error('Failed to save todo:', error)
			// You might want to show an error message to the user
		}
	}
	const selectedIds = watch('categoryIds') as number[] // always current 🩺

	const handleCategoryToggle = (categoryId: number) => {
		const next = selectedIds.includes(categoryId)
			? selectedIds.filter((id) => id !== categoryId) // remove
			: [...selectedIds, categoryId] // add

		setValue('categoryIds', next, { shouldValidate: true })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			{/* --- Task Name --- */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-2'>
					Task Name
				</label>

				<input
					type='text'
					{...register('name')}
					className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900'
					placeholder='Enter task name'
				/>
				{/* Zod error message */}
				{errors.name && (
					<p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>
				)}
			</div>

			{/* --- Due Date --- */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Due Date
				</label>

				<input
					type='date'
					{...register('dueDate')} // 🔗 RHF + Zod
					className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900'
				/>

				{errors.dueDate && (
					<p className='text-red-600 text-sm mt-1'>{errors.dueDate.message}</p>
				)}
			</div>

			<CategoryManager
				categories={categories}
				selectedCategoryIds={selectedIds}
				onCategoriesUpdate={setCategories}
				onCategoryToggle={handleCategoryToggle}
				isLoading={isLoadingCategories}
			/>
			{/* Add form buttons */}
			<div className='flex gap-2 pt-4'>
				<button
					type='submit'
					className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'>
					{initialData ? 'Update Task' : 'Create Task'}
				</button>
				<button
					type='button'
					onClick={onClose}
					className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors'>
					Cancel
				</button>
			</div>
		</form>
	)
}

export default TodoForm
