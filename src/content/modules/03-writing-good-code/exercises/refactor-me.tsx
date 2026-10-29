import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'refactor-me',
	title: 'Refactor Me',
	summary: 'Rewrite messy working code to be readable and flexible.',
	prompt: (
		<p>
			This code works. Rewrite it so it is easier to read and works for any list of prices, not just three.
		</p>
	),
	starterCode: `p1 = 4.99
p2 = 12.50
p3 = 3.25
t = p1 + p2 + p3
print(t * 1.19)
`,
}

export default exercise
