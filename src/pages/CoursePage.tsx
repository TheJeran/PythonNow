import { useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { Sidebar } from '../components'
import Footer from '../components/Footer'
import { moduleEntries, modules, parseCoursePath, routeModule } from '../course/registry'
import ExercisePage from './ExercisePage'
import ModuleScroller, { type ModuleScrollerHandle } from './ModuleScroller'
import NotFound from './NotFound'

/**
 * Shows one module's lessons at a time. Exercises open on top of the
 * scroller, which stays mounted so its scroll position and editor contents
 * survive a round trip.
 */
export default function CoursePage() {
	const location = useLocation()
	const route = parseCoursePath(location.pathname)
	const covered = route.kind === 'exercise' || route.kind === 'notfound'

	const [shownModule, setShownModule] = useState(() => routeModule(route) ?? modules[0])
	const [activeIndex, setActiveIndex] = useState(0)
	const scroller = useRef<ModuleScrollerHandle>(null)

	// Navigating to another module's lesson swaps the scroller. Opening an
	// exercise doesn't, so Back lands where you left off.
	const target = route.kind === 'module' || route.kind === 'lesson' ? route.module : undefined
	if (target && target !== shownModule) {
		setShownModule(target)
		setActiveIndex(0)
	}

	const entries = moduleEntries(shownModule)
	const footerSections = entries.map((entry) => ({
		id: entry.key,
		eyebrow: entry.section ? (entry.section.tocLabel ?? entry.section.eyebrow) : entry.module.title,
	}))

	return (
		<>
		<Sidebar
			shownModule={shownModule}
			activeIndex={covered ? null : activeIndex}
			activeExercise={route.kind === 'exercise' ? route.exercise : undefined}
			onSectionClick={(i) => scroller.current?.goTo(i)}
		/>
		<ModuleScroller
			key={shownModule.slug}
			ref={scroller}
			module={shownModule}
			activeIndex={activeIndex}
			onActiveChange={setActiveIndex}
			covered={covered}
		/>

		{covered ? (
			<div className="overlay">
				{route.kind === 'exercise'
					? <ExercisePage key={location.pathname} module={route.module} exercise={route.exercise} />
					: <NotFound />}
			</div>
		) : (
			<Footer
				sections={footerSections}
				activeIndex={activeIndex}
				onNavigate={(i) => scroller.current?.goTo(i)}
			/>
		)}
		</>
	)
}
