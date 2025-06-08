import { useEffect, useState } from 'react'
import {
	createTodo,
	getAllCategories,
	type Category,
	type CreateTodoDTO,
} from '../../services/todos'
import Button from '../Button/Button'

interface TodoFormProps {
	onSuccess: () => void // Called after successful todo creation
	onClose: () => void // Called to close the form
}

export default function TodoForm({ onSuccess, onClose }: TodoFormProps) {
	// Main form state
	const [formData, setFormData] = useState({
		name: '',
		dueDate: '',
		isCompleted: false,
		categoryIds: [] as number[],
	})

	// Loading states
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoadingCategories, setIsLoadingCategories] = useState(true)

	// New category state
	const [newCategoryName, setNewCategoryName] = useState('')
	const [isCreatingCategory, setIsCreatingCategory] = useState(false)

	// ===== DATA FETCHING ===== //
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

	// ===== FORM HANDLERS ===== //
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!formData.name.trim() || !formData.dueDate) return

		setIsSubmitting(true)

		try {
			await createTodo({
				name: formData.name.trim(),
				dueDate: formData.dueDate,
				isCompleted: formData.isCompleted,
				categoryIds: formData.categoryIds,
			})
			onSuccess()
			onClose()
		} catch (error) {
			console.error('Failed to create todo:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	// ===== CATEGORY HANDLERS ===== //
	const handleCategoryToggle = (categoryId: number) => {
		setFormData((prev) => ({
			...prev,
			categoryIds: prev.categoryIds.includes(categoryId)
				? prev.categoryIds.filter((id) => id !== categoryId)
				: [...prev.categoryIds, categoryId],
		}))
	}

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

	// ===== RENDER SECTION ===== //
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
					className='input-field'
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
					className='input-field'
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
					<div className='space-y-2 max-h-32 overflow-y-auto'>
						{categories.map((category) => (
							<label key={category.id} className='checkbox-label '>
								<input
									type='checkbox'
									checked={formData.categoryIds.includes(category.id)}
									onChange={() => handleCategoryToggle(category.id)}
									className='checkbox-input'
								/>
								<span className='p-2'>{category.name}</span>
							</label>
						))}
					</div>
				)}

				{/* Add New Category */}
				<div className='mt-3 pt-3 border-t border-gray-200'>
					<label className='block text-xs font-medium text-gray-600 mb-1'>
						Create New Category
					</label>
					<div className='flex gap-2'>
						<input
							type='text'
							value={newCategoryName}
							onChange={(e) => setNewCategoryName(e.target.value)}
							placeholder='Category name'
							className='flex-1 input-field-sm'
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
			<div className='checkbox-label'>
				<input
					type='checkbox'
					name='isCompleted'
					checked={formData.isCompleted}
					onChange={handleChange}
					className='checkbox-input'
				/>
				<span>Mark as completed</span>
			</div>

			{/* Form Buttons */}
			<div className='flex gap-3 pt-4'>
				<Button
					type='submit'
					variant='PRIMARY'
					disabled={isSubmitting}
					className='flex-1'>
					{isSubmitting ? 'Creating...' : 'Create Task'}
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

// CSS classes extracted for readability
const inputField =
	'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
const inputFieldSm =
	'px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
const checkboxInput =
	'h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
const checkboxLabel = 'flex items-center space-x-2 cursor-pointer'
