import { z } from 'zod'

export const todoFormSchema = z.object({
	name: z
		.string()
		.min(10, 'Task name needs to be at least 10 characters')
		.max(200, 'Max 200 characters')
		.refine((value) => value.trim().length > 0, {
			message: 'Task name cannot be empty or just spaces',
		}),
	dueDate: z.string().min(1, 'Due date is required'),
	categoryIds: z.array(z.number()).optional().default([]), // Optional but defaults to empty array
})

export type TodoFormData = z.infer<typeof todoFormSchema>
