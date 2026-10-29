import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'shopping-list',
	title: 'Shopping List',
	summary: 'Add, remove and print items in a list.',
	prompt: (
		<p>
			Start from the list below. Add <b>milk</b>, remove <b>eggs</b>, then print each item on its own line.
		</p>
	),
	starterCode: `shopping_list = ["bread", "eggs", "apples"]
# TODO
`,
}

export default exercise
