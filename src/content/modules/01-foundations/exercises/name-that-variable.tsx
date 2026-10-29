import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'name-that-variable',
	title: 'Name That Variable',
	summary: 'Rename cryptic variables so the code explains itself.',
	prompt: (
		<p>
			This code works, but nobody can read it. Rename every variable so its purpose is obvious.
		</p>
	),
	starterCode: `x = 20
y = 1.5
z = x * y
print(z)
`,
}

export default exercise
