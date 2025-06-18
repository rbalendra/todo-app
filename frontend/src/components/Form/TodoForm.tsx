import { useEffect, useState } from 'react'

import {
	createTodo,
	getAllCategories,
	updateTodo,
	type Category,
	type Todo,
} from '../../services/todos'
import Button from '../Button/Button'
import CategoryManager from '../CategoryManager/CategoryManager'

interface TodoFormProps {
	onSuccess: () => void //  Refreshes todo list after creation
	onClose: () => void // Closes the modal/form
	initialData?: Todo
}

export default function TodoForm({
	onSuccess,
	onClose,
	initialData,
}: TodoFormProps) {
	// Main form state - stores all todo information
	const [formData, setFormData] = useState({
		id: initialData?.id, // If editing, store the todo ID
		name: initialData?.name ?? '', // Todo name (empty string if creating new)
		dueDate: initialData?.dueDate ?? '',
		// Extract category IDs from existing todo, or empty array if creating new
		categoryIds: initialData?.todoCategories.map((tc) => tc.category.id) ?? [],
	})

	// Loading states
	const [isSubmitting, setIsSubmitting] = useState(false) // to show creating in button
	const [categories, setCategories] = useState<Category[]>([]) // store all avail categories from db
	const [isLoadingCategories, setIsLoadingCategories] = useState(true) // to show loading categories while api fetch

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

	//update the form when initialdate changes (for editing)
	useEffect(() => {
		if (initialData) {
			setFormData({
				id: initialData.id,
				name: initialData.name,
				dueDate: initialData.dueDate,
				categoryIds:
					initialData.todoCategories.map((tc) => tc.category.id) ?? [],
			})
		}
	}, [initialData])

	/* ---------------------------- Handler fucntions --------------------------- */
	/* ------------------------- handles form submission ------------------------ */
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!formData.name.trim() || !formData.dueDate) return

		setIsSubmitting(true)

		try {
			if (formData.id) {
				await updateTodo(formData.id, {
					name: formData.name.trim(),
					dueDate: formData.dueDate,
					categoryIds: formData.categoryIds,
				})
			} else {
				await createTodo({
					name: formData.name.trim(),
					dueDate: formData.dueDate,
					categoryIds: formData.categoryIds,
				})
			}
			onSuccess()
			onClose()
		} catch (error) {
			console.error('Failed to create todo:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	/* ------------------- handler function for input changes ------------------- */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	/* ------------------------ Category handler function ----------------------- */
	const handleCategoryToggle = (categoryId: number) => {
		setFormData((prev) => ({
			...prev,
			categoryIds: prev.categoryIds.includes(categoryId)
				? prev.categoryIds.filter((id) => id !== categoryId)
				: [...prev.categoryIds, categoryId],
		}))
	}

	// Handle when CategoryManager updates the categories list (after creating/deleting)
	const handleCategoriesUpdate = (updatedCategories: Category[]) => {
		setCategories(updatedCategories)
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			{/* Task Name */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-2'>
					Task Name
				</label>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
					className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900'
					placeholder='Enter task name'
				/>
			</div>

			{/* Due Date */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Due Date
				</label>
				<input
					type='date'
					name='dueDate'
					value={formData.dueDate}
					onChange={handleChange}
					required
					className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900'
				/>
			</div>

			<CategoryManager
				categories={categories} // Pass current categories list
				selectedCategoryIds={formData.categoryIds} // Pass which categories are selected for this todo
				onCategoriesUpdate={handleCategoriesUpdate} // Pass function to update categories when new ones are created/deleted
				onCategoryToggle={handleCategoryToggle} // Pass function to handle checkbox clicks
				isLoading={isLoadingCategories} // Pass loading state
			/>

			{/* Form Buttons */}
			<div className='flex gap-3 pt-2'>
				<button
					type='submit'
					disabled={isSubmitting}
					className='flex-1 bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]'>
					{isSubmitting
						? formData.id
							? 'Saving...'
							: 'Creating...'
						: formData.id
						? 'Save Changes'
						: 'Create Task'}
				</button>
				<button
					type='button'
					onClick={onClose}
					className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]'>
					Cancel
				</button>
			</div>
		</form>
	)
}
