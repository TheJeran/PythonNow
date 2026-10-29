import { useEffect } from 'react'
import { Header } from './components'
import CoursePage from './pages/CoursePage'
import { getPyodide } from './pyodide/pyodideProvider'
import './App.css'

export default function App() {
	useEffect(()=>{
		// Load python module on load
		getPyodide()
	},[])

	return (
		<>
		<Header />
		<CoursePage />
		</>
	)
}
