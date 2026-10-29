import type { Exercise } from '../../../../course/types'

const exercise: Exercise = {
	slug: 'fizzbuzz',
	title: 'FizzBuzz',
	summary: 'Combine loops and conditionals in a classic exercise.',
	prompt: (
		<p>
			Print the numbers 1 to 20. For multiples of 3 print <b>Fizz</b>, for multiples of 5 print <b>Buzz</b>, and for multiples of both print <b>FizzBuzz</b>.
		</p>
	),
	starterCode: `for number in range(1, 21):
    # TODO: replace with Fizz / Buzz / FizzBuzz logic
    print(number)
`,
}

export default exercise
