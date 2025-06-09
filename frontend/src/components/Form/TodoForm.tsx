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

	//update the form
	useEffect(() => {
		if (initialData) {
			setFormData({
				id: initialData.id,
				name: initialData.name,
				dueDate: initialData.dueDate,
				isCompleted: initialData.isCompleted,
				categoryIds: initialData.todoCategories.map((tc) => tc.category.id),
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

		try {
			setIsCreatingCategory(true)
			const newCategory = await createCategory({ name: newCategoryName.trim() })
			setCategories((prev) => [...prev, newCategory])
			setNewCategoryName('')
			// Auto-select the new category
			setFormData((prev) => ({
				...prev,
				categoryIds: [...prev.categoryIds, newCategory.id],
			}))
		} catch (error) {
			console.error('Failed to create category:', error)
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
				<label className='block text-sm font-medium text-gray-700 mb-1'>
					Task Name
				</label>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					required
					className='input-field text-gray-900 bg-slate-200 p-2.5 rounded-md w-full'
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
					className='input-field text-gray-900 bg-slate-200 p-2.5 rounded-md w-full'
				/>
			</div>

			{/* Categories Section */}
			<div>
				<label className='block text-sm font-medium text-gray-700 mb-2'>
					Categories
				</label>

				{isLoadingCategories ? (
					<p className='text-sm text-gray-500'>Loading categories...</p>
				) : (
					<div className='space-y-2 max-h-32 overflow-y-auto flex flex-col'>
						{categories.map((category) => (
							<label
								key={category.id}
								className='checkbox-label flex flex-row items-center flex-end justify-between p-1 bg-slate-200 rounded-md'>
								<input
									type='checkbox'
									checked={formData.categoryIds.includes(category.id)}
									onChange={() => handleCategoryToggle(category.id)}
									className='checkbox-input '
								/>
								<span className='p-1 text-gray-900'>{category.name}</span>
								<button
									type='button'
									onClick={() => handleDeleteCategory(category.id)}
									className='text-red-500 hover:text-red-700 text-xs ml-2 font-semibold'>
									Delete
								</button>
							</label>
						))}
					</div>
				)}

				{/* Add New Category */}
				<div className='mt-3 pt-3 border-t border-blue-900'>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Create New Category
					</label>
					<div className='flex gap-2'>
						<input
							type='text'
							value={newCategoryName}
							onChange={(e) => setNewCategoryName(e.target.value)}
							placeholder='Category name'
							className='flex-1 input-field-sm p-2 rounded-md bg-slate-200 text-gray-900'
						/>
						<Button
							type='button'
							variant='SECONDARY'
							onClick={handleCreateCategory}
							disabled={!newCategoryName.trim() || isCreatingCategory}
							className='px-2 py-1 text-xs'>
							{isCreatingCategory ? 'Creating...' : 'Add'}
						</Button>
					</div>
				</div>
			</div>

			{/* Completed Checkbox */}
			<div className='checkbox-label p-1'>
				<input
					type='checkbox'
					name='isCompleted'
					checked={formData.isCompleted}
					onChange={handleChange}
					className='checkbox-input p-1'
				/>
				<span className='p-1 text-gray-900'>Mark as completed</span>
			</div>

			{/* Form Buttons */}
			<div className='flex gap-3 pt-4'>
				<Button
					type='submit'
					variant='PRIMARY'
					disabled={isSubmitting}
					className='flex-1'>
					{isSubmitting
						? formData.id
							? 'Saving…'
							: 'Creating…'
						: formData.id
						? 'Save Changes'
						: 'Create Task'}
				</Button>
				<Button
					type='button'
					variant='SECONDARY'
					onClick={onClose}
					className='flex-1'>
					Cancel
				</Button>
			</div>
		</form>
	)
}
