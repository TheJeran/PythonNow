import type { ReactNode } from 'react'

export interface LessonSection {
	/** Unique within the lesson. */
	id: string
	eyebrow: string
	title: string
	body: (isActive: boolean) => ReactNode
	/** Label in the sidebar. Defaults to `eyebrow`. */
	tocLabel?: string
	/** Indent under the previous non-nested section in the sidebar. */
	nested?: boolean
}

export interface Lesson {
	slug: string
	title: string
	summary: string
	sections: LessonSection[]
}

export interface Exercise {
	slug: string
	title: string
	summary: string
	/** Instructions shown above the editor. */
	prompt: ReactNode
	starterCode: string
	// TODO: tests/checker, solution, hints, difficulty
}

export interface Module {
	slug: string
	title: string
	description: string
	/** Read in order on the course page. */
	lessons: Lesson[]
	/** Opened individually, on top of the course page. */
	exercises: Exercise[]
}
