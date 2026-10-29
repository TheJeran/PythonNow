import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Naming, comments, small functions and the style conventions of PEP 8.
		</p>
		<CodeCell>
{`def area_of_circle(radius):
    return 3.14159 * radius ** 2

print(area_of_circle(5))`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'readability',
	title: 'Readability',
	summary: 'Code that is easier to read is better.',
	sections: [
		{ id: 'overview', eyebrow: 'Readability', title: 'Code Is Read More Than Written', body: overview },
	],
}

export default lesson
