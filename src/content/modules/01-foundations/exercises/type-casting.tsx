import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'type-casting',
	title: 'Type Casting',
	summary: 'Convert strings into numbers and add them.',
	prompt: (
		<p>
			The two values below are strings. Convert them so that adding them gives <b>7.5</b> instead of <b>"52.5"</b>.
		</p>
	),
	starterCode: `a = "5"
b = "2.5"
# TODO: cast a and b so the sum is 7.5
print(a + b)
`,
}

export default exercise
