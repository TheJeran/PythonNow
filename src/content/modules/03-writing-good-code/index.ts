import type { Module } from '../../../course/types'
import readability from './lessons/readability'
import performance from './lessons/performance'
import flexibility from './lessons/flexibility'
import refactorMe from './exercises/refactor-me'

const writingGoodCode: Module = {
	slug: 'writing-good-code',
	title: 'Writing Good Code',
	description: 'Readable, fast and flexible: the principles that separate better code from worse code.',
	lessons: [readability, performance, flexibility],
	exercises: [refactorMe],
}

export default writingGoodCode
