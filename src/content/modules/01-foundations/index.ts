import type { Module } from '../../../course/types'
import welcome from './lessons/welcome'
import syntax from './lessons/syntax'
import dataTypes from './lessons/data-types'
import variables from './lessons/variables'
import functions from './lessons/functions'
import conditionals from './lessons/conditionals'
import loops from './lessons/loops'
import helloWorld from './exercises/hello-world'
import typeCasting from './exercises/type-casting'
import nameThatVariable from './exercises/name-that-variable'
import fizzbuzz from './exercises/fizzbuzz'

const foundations: Module = {
	slug: 'foundations',
	title: 'Foundations',
	description: 'Syntax, data types, variables, functions and control flow — the building blocks of every Python program.',
	lessons: [welcome, syntax, dataTypes, variables, functions, conditionals, loops],
	exercises: [helloWorld, typeCasting, nameThatVariable, fizzbuzz],
}

export default foundations
