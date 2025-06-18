import { useState } from 'react'
import {
	createCategory,
	deleteCategory,
	type Category,
} from '../../services/todos'
import Button from '../Button/Button'

interface CategoryManagerProps {
	categories: Category[] //list of all avail cats from parent
	selectedCategoryIds: number[]
	onCategoriesUpdate: (categories: Category[]) => void
	onCategoryToggle: (categoryId: number) => void
	isLoading: boolean
}
// props from todoform below
const CategoryManager = ({
	categories,
	selectedCategoryIds,
	onCategoriesUpdate,
	onCategoryToggle,
	isLoading,
}: CategoryManagerProps) => {
	// state for creating new categories
	const [newCategoryName, setNewCategoryName] = useState('')
	const [categoryError, setCategoryError] = useState('')

	/* ----------------- CREATING NEW CATEGORY HANDLER FUNCTION ----------------- */
	const handleCreateCategory = async () => {
		if (!newCategoryName.trim()) return // dont create empty cats
		setCategoryError('') // clear prev errors

		//checking if cat exists
		const categoryExists = categories.some(
			(category) =>
				category.name.toLowerCase() === newCategoryName.trim().toLowerCase()
		)
		if (categoryExists) {
			setCategoryError('Category already exists!') // no duplicates
			return
		}

		try {
			//create new category in db
			const newCategory = await createCategory({ name: newCategoryName.trim() })

			//update the categorylist in parent
			const updatedCategories = [...categories, newCategory]
			onCategoriesUpdate(updatedCategories) // telling todoform about the new category

			//auto toggle the new category created for this task
			onCategoryToggle(newCategory.id)

			//clear the input field
			setNewCategoryName('')
		} catch (error) {
			setCategoryError('Failed to create category. Please try again!' + error)
		}
	}

	/* ---------------- CREATING DELETE CATEGORY HANDLER FUNCTION --------------- */

	const handleDeleteCategory = async (categoryId: number) => {
		try {
			// Delete category from database
			await deleteCategory(categoryId)

			// Remove category from the list and update parent
			const updatedCategories = categories.filter(
				(cat) => cat.id !== categoryId
			)
			onCategoriesUpdate(updatedCategories)

			if (selectedCategoryIds.includes(categoryId)) {
				onCategoryToggle(categoryId) // Tell TodoForm to remove this from selected categories
			}
		} catch (error) {
			console.error('Failed to delete category:', error)
		}
	}

	return (
		<div>
			<label className='block text-sm font-medium text-gray-700 mb-3'>
				Categories
			</label>

			{/* Display all available categories with checkboxes */}
			<div className='min-h-[120px] border-1 text-slate-300 rounded-xl p-2 shadow-sm'>
				{isLoading ? (
					// Show loading message while categories are being fetched
					<div className='flex items-center justify-center'>
						<p className='text-sm text-gray-500'>Loading categories...</p>
					</div>
				) : (
					// Show list of categories with checkboxes
					<div className='space-y-2 max-h-[190px] overflow-y-auto no-scrollbar'>
						{categories.map((category) => (
							<label
								key={category.id}
								className='flex items-center justify-between p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer'>
								<div className='flex items-center gap-3'>
									{/* Checkbox that shows if this category is selected for the current todo */}
									<input
										type='checkbox'
										// Check if this category ID is in the selected list
										checked={selectedCategoryIds.includes(category.id)}
										// When clicked, tell parent to toggle this category
										onChange={() => onCategoryToggle(category.id)}
										className='w-4 h-4 accent-purple-500 bg-gray-100 border-gray-300 rounded'
									/>
									<span className='text-gray-700'>{category.name}</span>
								</div>
								{/* Delete button for each category */}
								<Button
									type='button'
									onClick={() => handleDeleteCategory(category.id)}
									variant='DANGER'
									className='hover:text-red-200 text-sm font-bold px-2 py-1 rounded-3xl hover:bg-red-100 transition-colors duration-200'>
									Delete
								</Button>
							</label>
						))}
					</div>
				)}
			</div>

			{/* Section for creating new categories */}
			<div className='mt-3 pt-3 border-t border-purple-900'>
				<label className='block text-sm font-medium text-gray-700 mb-2'>
					Create New Category
				</label>
				<div className='flex gap-2'>
					{/* Input field for new category name */}
					<input
						type='text'
						value={newCategoryName}
						onChange={(e) => {
							setNewCategoryName(e.target.value)
							setCategoryError('') // Clear error when user starts typing
						}}
						// Allow creating category by pressing Enter
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								e.preventDefault()
								handleCreateCategory()
							}
						}}
						placeholder='New Category name'
						className='w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-200 text-gray-900'
					/>
					{/* Button to create new category */}
					<Button
						type='button'
						onClick={handleCreateCategory}
						variant='PRIMARY'
						disabled={!newCategoryName.trim()} // Disable if input is empty
						className='px-4 py-2 text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
						ADD
					</Button>
				</div>
				{/* Show error message if category creation fails */}
				{categoryError && (
					<p className='text-red-500 text-sm mt-1'>{categoryError}</p>
				)}
			</div>
		</div>
	)
}

export default CategoryManager
