import { useEffect, useState } from 'react'

import {
	createTodo,
	getAllCategories,
	createCategory,
	deleteCategory,
	updateTodo,
	type Category,
	type Todo,
} from '../../services/todos'
import Button from '../Button/Button'

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
	// Main form state
	const [formData, setFormData] = useState({
		id: initialData?.id,
		name: initialData?.name ?? '',
		dueDate: initialData?.dueDate ?? '',
		isCompleted: initialData?.isCompleted ?? false,
		categoryIds: initialData?.todoCategories.map((tc) => tc.category.id) ?? [],
	})

	// Loading states
	const [isSubmitting, setIsSubmitting] = useState(false) // to show creating in button
	const [categories, setCategories] = useState<Category[]>([]) // store all avail categories from db
	const [isLoadingCategories, setIsLoadingCategories] = useState(true) // to show loading categories while api fetch

	// New category state
	const [newCategoryName, setNewCategoryName] = useState('') // input for new category name
	const [isCreatingCategory, setIsCreatingCategory] = useState(false) // shows creating catgory in button
	const [categoryError, setCategoryError] = useState('') // error message for category creation
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
				isCompleted: initialData.isCompleted,
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
					isCompleted: formData.isCompleted,
					categoryIds: formData.categoryIds,
				})
			} else {
				await createTodo({
					name: formData.name.trim(),
					dueDate: formData.dueDate,
					isCompleted: formData.isCompleted,
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
		const { name, value, type, checked } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
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

	/* ---------------------- create new category function ---------------------- */
	const handleCreateCategory = async () => {
		if (!newCategoryName.trim()) return

		// Clear previous error
		setCategoryError('')
		//check if category already exists
		const categoryExists = categories.some(
			(category) =>
				category.name.toLowerCase() === newCategoryName.trim().toLowerCase()
		)

		if (categoryExists) {
			setCategoryError('Category already exists!')
			return
		}

		setIsCreatingCategory(true)

		try {
			const newCategory = await createCategory({ name: newCategoryName.trim() })
			setCategories((prev) => [...prev, newCategory])

			// Auto-select the new category
			setFormData((prev) => ({
				...prev,
				categoryIds: [...prev.categoryIds, newCategory.id],
			}))
			setNewCategoryName('')
		} catch (error) {
			setCategoryError('Failed to create category. Please try again.' + error)
		} finally {
			setIsCreatingCategory(false)
		}
	}

	/* ----------------------- delete category function ------------------------- */
	const handleDeleteCategory = async (categoryId: number) => {
		try {
			await deleteCategory(categoryId)
			setCategories((prev) => prev.filter((cat) => cat.id !== categoryId))
			setFormData((prev) => ({
				...prev,
				categoryIds: prev.categoryIds.filter((id) => id !== categoryId),
			}))
		} catch (error) {
			console.error('Failed to delete category:', error)
		}
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

			{/* Categories Section */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-3'>
					Categories
				</label>
				<div className='min-h-[120px]'>
					{isLoadingCategories ? (
						<div className='flex items-center justify-center '>
							<p className='text-sm text-gray-500'>Loading categories...</p>
						</div>
					) : (
						<div className='space-y-2 max-h-[190px] overflow-y-auto no-scrollbar'>
							{categories.map((category) => (
								<label
									key={category.id}
									className='flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer'>
									<div className='flex items-center gap-3'>
										<input
											type='checkbox'
											checked={formData.categoryIds.includes(category.id)}
											onChange={() => handleCategoryToggle(category.id)}
											className='w-4 h-4 accent-purple-500 bg-gray-100 border-gray-300 rounded'
										/>
										<span className='text-gray-700'>{category.name}</span>
									</div>
									<button
										type='button'
										onClick={() => handleDeleteCategory(category.id)}
										className='text-red-400 hover:text-red-600 text-sm font-bold px-2 py-1 rounded-lg hover:bg-red-100 transition-colors duration-200'>
										Delete
									</button>
								</label>
							))}
						</div>
					)}
				</div>

				{/* Add New Category */}
				<div className='mt-3 pt-3 border-t border-purple-900'>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Create New Category
					</label>
					<div className='flex gap-2'>
						<input
							type='text'
							value={newCategoryName}
							onChange={(e) => {
								setNewCategoryName(e.target.value)
								setCategoryError('') // Clear error when user types
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									e.preventDefault() // Prevent form submission
									handleCreateCategory() // Create the category instead
								}
							}}
							placeholder='New Category name'
							className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500  outline-none transition-all duration-200 text-gray-900'
						/>
						<Button
							type='button'
							onClick={handleCreateCategory}
							disabled={!newCategoryName.trim() || isCreatingCategory}
							className='px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
							{isCreatingCategory ? 'Creating category...' : 'Add'}
						</Button>
					</div>
					{/* Error message */}
					{categoryError && (
						<p className='text-red-500 text-sm mt-1'>{categoryError}</p>
					)}
				</div>
			</div>

			{/* Completed Checkbox */}
			<label className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200'>
				<input
					type='checkbox'
					name='isCompleted'
					checked={formData.isCompleted}
					disabled={!formData.id} // Disable if creating new task
					onChange={handleChange}
					className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 transition-colors duration-200'
				/>
				<span className='text-gray-700'>Mark as completed</span>
			</label>

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
