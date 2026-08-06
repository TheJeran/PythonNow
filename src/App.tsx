import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { sections } from './content/sections'
import './App.css'
import { getPyodide } from './pyodide/pyodideProvider'
export default function App() {
	const scrollerRef = useRef<HTMLElement>(null)
	const sectionRefs = useRef<(HTMLElement | null)[]>([])
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const index = sectionRefs.current.indexOf(entry.target as HTMLElement | null)
				if (index !== -1) setActiveIndex(index)
			}
			})
		},
		{ root: scrollerRef.current, threshold: 0.5 },
		)

		sectionRefs.current.forEach((el) => el && observer.observe(el))
		return () => observer.disconnect()
	}, [])

	function goTo(index: number) {
		sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' })
	}
	useEffect(()=>{
		// Load python module on load
		getPyodide()
	},[])

	return (
		<>
		<Header />
		<main className="scroller" ref={scrollerRef}>
			{sections.map((s, i) => (
			<Section
				key={s.id}
				ref={(el) => {
					sectionRefs.current[i] = el
				}}
				eyebrow={s.eyebrow}
				title={s.title}
			>
				{s.body}
			</Section>
			))}
		</main>

		<Footer sections={sections} activeIndex={activeIndex} onNavigate={goTo} />
		</>
	)
}
