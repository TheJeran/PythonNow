import { useLocation, useNavigate } from 'react-router'
import { CodeCell } from '../components'
import { modulePath } from '../course/registry'
import type { Exercise, Module } from '../course/types'

interface ExercisePageProps {
	module: Module
	exercise: Exercise
}

// Placeholder layout — exercise mechanics (checking, hints, solutions) come later.
export default function ExercisePage({ module, exercise }: ExercisePageProps) {
	const navigate = useNavigate()
	const location = useLocation()

	function goBack() {
		// Opened from a pasted link there is no in-app history to return to.
		if (location.key === 'default') navigate(modulePath(module))
		else navigate(-1)
	}

	return (
		<main className="page">
			<button type="button" className="back-button" onClick={goBack}>← Back</button>
			<p className="page-eyebrow">{module.title} · Exercise</p>
			<h1 className="page-title">{exercise.title}</h1>
			<div className="page-prose">{exercise.prompt}</div>
			<CodeCell>{exercise.starterCode}</CodeCell>
		</main>
	)
}
