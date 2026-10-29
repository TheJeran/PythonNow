import { useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import { exercisePath, lessonPath, modulePath, moduleEntries, modules } from '../course/registry'
import type { Exercise, Module } from '../course/types'
import './Sidebar.css'

interface SidebarProps {
	/** Module whose lessons are on the scroller. */
	shownModule: Module
	/** Index into the shown module's entries; null while an exercise is open. */
	activeIndex: number | null
	activeExercise?: Exercise
	onSectionClick: (index: number) => void
}

// `jump` tells the scroller to scroll even if the URL already matches.
const jump = { jump: true }

interface CollapsibleProps {
	id: string
	open: boolean
	onToggle: () => void
	header: ReactNode
	label: string
	className?: string
	children: ReactNode
}

function Collapsible({ id, open, onToggle, header, label, className = '', children }: CollapsibleProps) {
	return (
		<div className={className}>
			<div className="sidebar-toggle-row">
				<button
					type="button"
					className={`sidebar-chevron ${open ? 'is-open' : ''}`}
					aria-expanded={open}
					aria-controls={id}
					aria-label={`${open ? 'Collapse' : 'Expand'} ${label}`}
					onClick={onToggle}
				>
					▸
				</button>
				{header}
			</div>
			{open && <div id={id}>{children}</div>}
		</div>
	)
}

export function Sidebar({ shownModule, activeIndex, activeExercise, onSectionClick }: SidebarProps) {
	const entries = moduleEntries(shownModule)
	const active = activeIndex === null ? undefined : entries[activeIndex]

	// Only menus the user has toggled are stored; the rest follow their defaults.
	const [toggled, setToggled] = useState<Record<string, boolean>>({})
	const isOpen = (key: string, byDefault: boolean) => toggled[key] ?? byDefault
	const toggle = (key: string, byDefault: boolean) =>
		setToggled((t) => ({ ...t, [key]: !(t[key] ?? byDefault) }))

	return (
		<aside className="sidebar" aria-label="Course contents">
			{modules.map((module, m) => {
				const isCurrent = activeExercise ? module.exercises.includes(activeExercise) : module === shownModule
				const moduleKey = module.slug
				const lessonsKey = `${module.slug}/lessons`
				const exercisesKey = `${module.slug}/exercises`

				return (
					<Collapsible
						key={module.slug}
						id={`sidebar-${moduleKey}`}
						className="sidebar-module"
						label={module.title}
						open={isOpen(moduleKey, isCurrent)}
						onToggle={() => toggle(moduleKey, isCurrent)}
						header={
							<Link
								to={modulePath(module)}
								state={jump}
								className={`sidebar-module-title ${isCurrent ? 'is-active' : ''}`}
							>
								<span className="sidebar-module-number">{String(m + 1).padStart(2, '0')}</span>
								{module.title}
							</Link>
						}
					>
						<Collapsible
							id={`sidebar-${lessonsKey}`}
							className="sidebar-group"
							label={`${module.title} lessons`}
							open={isOpen(lessonsKey, true)}
							onToggle={() => toggle(lessonsKey, true)}
							header={
								<button type="button" className="sidebar-group-title" onClick={() => toggle(lessonsKey, true)}>
									Lessons <span className="sidebar-count">{module.lessons.length}</span>
								</button>
							}
						>
							<ul className="sidebar-list">
								{module.lessons.map((lesson) => {
									const isActive = active?.lesson === lesson
									return (
										<li key={lesson.slug}>
											<Link
												to={lessonPath(module, lesson)}
												state={jump}
												className={`sidebar-link ${isActive ? 'is-active' : ''}`}
												aria-current={isActive ? 'location' : undefined}
											>
												{lesson.title}
											</Link>
											{isActive && lesson.sections.length > 1 && (
												<ul className="sidebar-sections">
													{entries.map((entry, i) => entry.lesson === lesson && entry.section && (
														<li key={entry.key}>
															<button
																type="button"
																onClick={() => onSectionClick(i)}
																className={[
																	'sidebar-section',
																	entry.section.nested ? 'is-nested' : '',
																	i === activeIndex ? 'is-active' : '',
																].join(' ')}
															>
																{entry.section.tocLabel ?? entry.section.eyebrow}
															</button>
														</li>
													))}
												</ul>
											)}
										</li>
									)
								})}
							</ul>
						</Collapsible>

						{module.exercises.length > 0 && (
							<Collapsible
								id={`sidebar-${exercisesKey}`}
								className="sidebar-group"
								label={`${module.title} exercises`}
								open={isOpen(exercisesKey, true)}
								onToggle={() => toggle(exercisesKey, true)}
								header={
									<button type="button" className="sidebar-group-title" onClick={() => toggle(exercisesKey, true)}>
										Exercises <span className="sidebar-count">{module.exercises.length}</span>
									</button>
								}
							>
								<ul className="sidebar-list">
									{module.exercises.map((exercise) => (
										<li key={exercise.slug}>
											<Link
												to={exercisePath(module, exercise)}
												className={`sidebar-link is-exercise ${activeExercise === exercise ? 'is-active' : ''}`}
												aria-current={activeExercise === exercise ? 'page' : undefined}
											>
												{exercise.title}
											</Link>
										</li>
									))}
								</ul>
							</Collapsible>
						)}
					</Collapsible>
				)
			})}
		</aside>
	)
}
