import type { Exercise, Lesson, LessonSection, Module } from './types'
import foundations from '../content/modules/01-foundations'
import dataStructures from '../content/modules/02-data-structures'
import writingGoodCode from '../content/modules/03-writing-good-code'

export const modules: Module[] = [foundations, dataStructures, writingGoodCode]

export const modulePath = (m: Module) => `/${m.slug}`
export const lessonPath = (m: Module, l: Lesson) => `/${m.slug}/${l.slug}`
export const exercisePath = (m: Module, e: Exercise) => `/${m.slug}/exercises/${e.slug}`

/**
 * One full-screen page on the course scroller: either a module's intro
 * (no `lesson`) or one section of a lesson.
 */
export interface CourseEntry {
	key: string
	module: Module
	lesson?: Lesson
	section?: LessonSection
	/** URL shown while this entry is on screen. */
	path: string
}

const entryCache = new Map<Module, CourseEntry[]>()

/** The pages of one module's scroller: its intro, then every lesson section in order. */
export function moduleEntries(module: Module): CourseEntry[] {
	let entries = entryCache.get(module)
	if (!entries) {
		entries = [
			{ key: module.slug, module, path: modulePath(module) },
			...module.lessons.flatMap((lesson) =>
				lesson.sections.map((section) => ({
					key: `${module.slug}/${lesson.slug}/${section.id}`,
					module,
					lesson,
					section,
					path: lessonPath(module, lesson),
				})),
			),
		]
		entryCache.set(module, entries)
	}
	return entries
}

export function nextModule(module: Module): Module | undefined {
	return modules[modules.indexOf(module) + 1]
}

export type CourseRoute =
	| { kind: 'course' }
	| { kind: 'module'; module: Module }
	| { kind: 'lesson'; module: Module; lesson: Lesson }
	| { kind: 'exercise'; module: Module; exercise: Exercise }
	| { kind: 'notfound' }

export function parseCoursePath(pathname: string): CourseRoute {
	const [moduleSlug, second, third, ...rest] = pathname.split('/').filter(Boolean)
	if (!moduleSlug) return { kind: 'course' }
	const module = modules.find((m) => m.slug === moduleSlug)
	if (!module || rest.length) return { kind: 'notfound' }
	if (!second) return { kind: 'module', module }
	if (second === 'exercises') {
		const exercise = module.exercises.find((e) => e.slug === third)
		return exercise ? { kind: 'exercise', module, exercise } : { kind: 'notfound' }
	}
	const lesson = module.lessons.find((l) => l.slug === second)
	return lesson && !third ? { kind: 'lesson', module, lesson } : { kind: 'notfound' }
}

/** The module a route belongs to, if any. */
export function routeModule(route: CourseRoute): Module | undefined {
	return 'module' in route ? route.module : undefined
}

/** Index in `entries` to scroll to for a route (0 = the module intro). */
export function entryIndexForRoute(entries: CourseEntry[], route: CourseRoute): number {
	if (route.kind !== 'lesson') return 0
	return Math.max(0, entries.findIndex((e) => e.lesson === route.lesson))
}
