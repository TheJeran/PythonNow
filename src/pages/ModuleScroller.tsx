import { useEffect, useImperativeHandle, useRef, type Ref } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { Section } from '../components'
import { entryIndexForRoute, modulePath, moduleEntries, modules, nextModule, parseCoursePath } from '../course/registry'
import type { Module } from '../course/types'

export interface ModuleScrollerHandle {
	goTo: (index: number) => void
}

interface ModuleScrollerProps {
	module: Module
	activeIndex: number
	onActiveChange: (index: number) => void
	/** True while an exercise or 404 covers the scroller. */
	covered: boolean
	ref?: Ref<ModuleScrollerHandle>
}

const moduleNumber = (m: Module) => String(modules.indexOf(m) + 1).padStart(2, '0')

function ModuleIntro({ module }: { module: Module }) {
	return (
		<p>
			{module.description}
			<br /><br />
			{module.lessons.length} lessons · {module.exercises.length} exercises
		</p>
	)
}

function NextModule({ module }: { module: Module }) {
	const next = nextModule(module)
	if (!next) {
		return <p className="next-module-end">That's the end of the course — nice work.</p>
	}
	return (
		<Link className="next-module" to={modulePath(next)}>
			<span className="next-module-label">Up next · Module {moduleNumber(next)}</span>
			<span className="next-module-title">{next.title} →</span>
		</Link>
	)
}

/**
 * One module's lessons on a scroll-snap page, with the URL kept in sync both ways:
 * - Navigating (sidebar, back/forward, a pasted link) scrolls to the lesson.
 * - Scrolling replaces the URL with the lesson on screen, so a back press
 *   returns to where you were before the last jump rather than every section.
 */
export default function ModuleScroller({ module, activeIndex, onActiveChange, covered, ref }: ModuleScrollerProps) {
	const location = useLocation()
	const navigate = useNavigate()
	const entries = moduleEntries(module)

	const scrollerRef = useRef<HTMLElement>(null)
	const sectionRefs = useRef<(HTMLElement | null)[]>([])
	// Last path we scrolled to or wrote while scrolling, to tell our own URL updates apart from real navigation.
	const syncedPath = useRef<string | null>(null)
	// Latest values for the observer callback, which is created once.
	const latest = useRef({ pathname: location.pathname, covered, navigate, onActiveChange })
	useEffect(() => {
		latest.current = { pathname: location.pathname, covered, navigate, onActiveChange }
	})

	function goTo(index: number) {
		sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
	}
	useImperativeHandle(ref, () => ({ goTo }))

	// URL -> scroll position. Declared before the observer so a deep link is scrolled to before the first intersection report.
	useEffect(() => {
		const target = parseCoursePath(location.pathname)
		if (target.kind !== 'module' && target.kind !== 'lesson' && target.kind !== 'course') return
		const jump = (location.state as { jump?: boolean } | null)?.jump
		if (!jump && location.pathname === syncedPath.current) return
		const behavior = syncedPath.current === null ? 'auto' : 'smooth'
		syncedPath.current = location.pathname
		sectionRefs.current[entryIndexForRoute(entries, target)]?.scrollIntoView({ behavior })
	}, [location, entries])

	// Scroll position -> active section + URL.
	useEffect(() => {
		const observer = new IntersectionObserver(
		(observed) => {
			observed.forEach((entry) => {
			if (!entry.isIntersecting) return
			const index = sectionRefs.current.indexOf(entry.target as HTMLElement | null)
			if (index === -1) return
			const { pathname, covered, navigate, onActiveChange } = latest.current
			onActiveChange(index)

			const path = entries[index].path
			if (covered || path === pathname) return
			syncedPath.current = path
			navigate(path, { replace: true })
			})
		},
		// A section is active while it crosses the middle of the viewport, however tall it is.
		{ root: scrollerRef.current, rootMargin: '-50% 0px -50% 0px' },
		)

		sectionRefs.current.forEach((el) => el && observer.observe(el))
		return () => observer.disconnect()
	}, [entries])

	const lastIndex = entries.length - 1

	return (
		<main className="scroller" ref={scrollerRef} inert={covered}>
			{entries.map((entry, i) => (
			<Section
				key={entry.key}
				ref={(el) => {
					sectionRefs.current[i] = el
				}}
				eyebrow={entry.section ? entry.section.eyebrow : `Module ${moduleNumber(module)}`}
				title={entry.section ? entry.section.title : module.title}
				isActive={Math.abs(activeIndex - i) <= 1}
			>
				{(isActive) => (
					<>
					{entry.section ? entry.section.body(isActive) : <ModuleIntro module={module} />}
					{i === lastIndex && <NextModule module={module} />}
					</>
				)}
			</Section>
			))}
		</main>
	)
}
