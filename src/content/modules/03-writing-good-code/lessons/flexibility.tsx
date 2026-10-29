import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Parameters instead of hard-coded values, and writing functions that work for many inputs.
		</p>
		<CodeCell>
{`def greet(name="world"):
    print(f"Hello, {name}!")

greet()
greet("Ada")`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'flexibility',
	title: 'Flexibility',
	summary: 'Code that is more flexible is better.',
	sections: [
		{ id: 'overview', eyebrow: 'Flexibility', title: 'Code That Bends, Not Breaks', body: overview },
	],
}

export default lesson
