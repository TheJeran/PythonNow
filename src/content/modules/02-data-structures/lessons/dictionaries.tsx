import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Dictionaries map keys to values. Cover creating, reading, updating and looping over them.
		</p>
		<CodeCell>
{`ages = {"ada": 36, "alan": 41}
print(ages["ada"])`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'dictionaries',
	title: 'Dictionaries',
	summary: 'Looking up values by key.',
	sections: [
		{ id: 'overview', eyebrow: 'Dictionaries', title: 'Labels for Your Data', body: overview },
	],
}

export default lesson
