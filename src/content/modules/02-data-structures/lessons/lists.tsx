import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Lists hold many values in a single variable, in order. Cover indexing, slicing, appending and removing.
		</p>
		<CodeCell>
{`fruits = ["apple", "banana", "cherry"]
print(fruits[0])`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'lists',
	title: 'Lists',
	summary: 'Ordered, changeable collections of values.',
	sections: [
		{ id: 'overview', eyebrow: 'Lists', title: 'Keeping Things in Order', body: overview },
	],
}

export default lesson
