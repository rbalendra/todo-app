import './App.css'
import TasksPage from './pages/TasksPage'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<div className='min-h-screen bg-gray-300 text-white '>
			<div className='max-w-3xl mx-auto p-3'>
				<Toaster
					position='bottom-center'
					toastOptions={{
						duration: 5000,
						style: {
							background: '#1E2939',
							color: '#fff',
							borderRadius: '12px',
							fontSize: '14px',
							padding: '10px',
							border: '3px solid #9AE600',
						},
						success: {
							iconTheme: {
								primary: '#10b981',
								secondary: '#fff',
							},
						},
						error: {
							iconTheme: {
								primary: '#ef4444',
								secondary: '#fff',
							},
						},
					}}
				/>
				<TasksPage />
			</div>
		</div>
	)
}

export default App
