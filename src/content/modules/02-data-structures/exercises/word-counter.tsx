import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'word-counter',
	title: 'Word Counter',
	summary: 'Count how often each word appears using a dictionary.',
	prompt: (
		<p>
			Count how many times each word appears in the sentence and print the result.
		</p>
	),
	starterCode: `sentence = "the cat and the hat and the bat"
# TODO: build a dictionary of word counts
`,
}

export default exercise
