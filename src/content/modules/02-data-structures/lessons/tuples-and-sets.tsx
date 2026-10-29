import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Tuples are lists you cannot change; sets keep only unique values. Cover when to reach for each.
		</p>
		<CodeCell>
{`point = (3, 4)
colors = {"red", "green", "red"}
print(point, colors)`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'tuples-and-sets',
	title: 'Tuples & Sets',
	summary: 'Immutable sequences and collections of unique values.',
	sections: [
		{ id: 'overview', eyebrow: 'Tuples & Sets', title: 'Fixed and Unique', body: overview },
	],
}

export default lesson
