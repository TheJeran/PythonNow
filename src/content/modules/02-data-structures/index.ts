import type { Module } from '../../../course/types'
import lists from './lessons/lists'
import dictionaries from './lessons/dictionaries'
import tuplesAndSets from './lessons/tuples-and-sets'
import shoppingList from './exercises/shopping-list'
import wordCounter from './exercises/word-counter'

const dataStructures: Module = {
	slug: 'data-structures',
	title: 'Data Structures',
	description: 'Lists, dictionaries, tuples and sets — ways to hold and organize many values at once.',
	lessons: [lists, dictionaries, tuplesAndSets],
	exercises: [shoppingList, wordCounter],
}

export default dataStructures
