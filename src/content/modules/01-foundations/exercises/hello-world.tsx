import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'hello-world',
	title: 'Hello, World',
	summary: 'Print your first line of output.',
	prompt: (
		<p>
			Make Python print <span className="code-inline">Hello, World!</span> to the output.
		</p>
	),
	starterCode: `# TODO: print "Hello, World!"
`,
}

export default exercise
