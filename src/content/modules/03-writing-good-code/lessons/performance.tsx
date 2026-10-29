import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const overview = () => (
	<div>
		<p>
			TODO: Measuring run time, avoiding repeated work and choosing the right data structure.
		</p>
		<CodeCell>
{`import time
start = time.time()
total = sum(range(1_000_000))
print(total, time.time() - start)`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'performance',
	title: 'Performance',
	summary: 'Code that runs faster is better.',
	sections: [
		{ id: 'overview', eyebrow: 'Performance', title: 'Doing Less Work', body: overview },
	],
}

export default lesson
