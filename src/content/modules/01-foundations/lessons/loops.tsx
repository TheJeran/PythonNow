import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const loops = () => (
	<div>
		<p>
			Repetition is one of the things computers excel at. They don't get bored. They don't get tired. Ask a computer to do the same thing a thousand times, 
			and it will do it without complaint or error (assuming your code is correct). Humans, on the other hand, would never want to write the same line of 
			code a thousand times. This is where <b>loops</b> come in.
			<br/><br/>
			A loop is a block of code that executes repeatedly. Instead of writing the same instruction over and over, we write it once inside a loop and tell
			Python how many times—or under what conditions—to repeat it. Loops are essential for writing efficient code and handling large amounts of data.
			<br/><br/>
			There are two main types of loops in Python: <span className='keyword'>for</span> loops and <span className='keyword'>while</span> loops.
			<br/>
			<b>The <span className='keyword'>for</span> loop</b> is used when you know in advance how many times you want to repeat something. It iterates through a sequence—like a list of numbers 
			or files in a folder—and executes the indented code block once for each item.
		</p>
		<CodeCell>
{`for item in [1, 2, 3, 4]:
	# This code runs once for each item in the sequence ([1, 2, 3, 4])
	print(item)`}
		</CodeCell>
		<p>
			Each time the loop runs, <span className='keyword'>item</span> takes on the value of the next element in the sequence. On the first iteration, item occupies the first element. 
			On the second iteration, it's the second element. And so on, until the loop has gone through every element.
			<br/><br/>
			<b>The <span className='keyword'>while</span> loop</b> is used when you want to repeat something as long as a condition remains true. It's similar to an if statement, but instead of executing once, 
			it keeps executing the indented code block over and over as long as the condition is true. The moment the condition becomes false, the loop stops.
		</p>
		<CodeCell>
{`counter = 0
while counter < 5:
	# This code runs repeatedly as long as the condition (counter is less than 5) is True
	print(counter)
	counter = counter + 1
print("finished with loop")`}
		</CodeCell>
		<p>
			The key difference is this: with a <span className='keyword'>for</span> loop, you're iterating through something concrete—a list, a range, a string. With 
			a <span className='keyword'>while</span> loop, you're checking a condition that might change during execution.
			<br/><br/>
			Consider this: if you're told "repeat this 10 times," you'd use a <span className='keyword'>for</span> loop. If you're told "repeat this until the user types 'quit'," 
			you'd use a <span className='keyword'>while</span> loop, because you don't know in advance how many iterations it will take.
			<br/><br/>
			Again, remember indentation. All code inside a loop must be indented to tell Python it belongs to the loop. And remember the 
			colon—both <span className='keyword'>for</span> and <span className='keyword'>while</span> require one.
			<br/>
			Loops unlock a new level of capability. Combined with conditionals, they let you write programs that can process data at scale, respond to user input 
			dynamically, and automate tasks that would be tedious to do manually. 
			You're no longer writing code that does one specific thing once—you're writing code that can adapt and repeat.
		</p>
	</div>
)

const lesson: Lesson = {
	slug: 'loops',
	title: 'Loops',
	summary: 'Repeating yourself, on purpose, with for and while.',
	sections: [
		{ id: 'loops', eyebrow: 'Loops', title: 'Repeating yourself, on purpose', body: loops },
	],
}

export default lesson
