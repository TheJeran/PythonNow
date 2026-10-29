import { PythonHighlighter } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const conditionals = () => (
	<div>
		<p>
			Up until now, our code has been deterministic. We write instructions, Python executes them in order, and we get a result. 
			But the real world isn't deterministic. We encounter situations constantly where our next action depends on whether something is true or false. 
			"If it's raining, I'll take an umbrella. If it's not, I won't." Our code needs the same capacity.
			<br/><br/>
			<b>Conditionals</b> allow our programs to make decisions. They let us say: "If this condition is true, do this. Otherwise, do that." 
			Without conditionals, our code is just a fixed sequence of steps. With them, our code can branch and adapt based on the data it encounters.
			In Python, we use three keywords to build conditionals: 
			{' '}<span className='keyword'>if</span>, <span className='keyword'>elif</span>, and <span className='keyword'>else</span>.
			<br/><br/>
			<b>The <span className='keyword'>if</span> statement is the foundation.</b> It checks whether a condition is true. If the condition is true, Python executes the indented 
			code block beneath it. If the condition is false, Python skips that block entirely and moves on.
		</p>
		<PythonHighlighter>
{`if condition:
	 # This code runs only if condition is True`}
		</PythonHighlighter>
		<p>
			<b>The <span className='keyword'>else</span> statement provides an alternative.</b> If the if condition is false, the else block runs instead. 
			Think of it as: "If this, then do that. Otherwise, do this other thing."
		</p>
		<PythonHighlighter>
{`if condition:
    # This code runs if condition is True
else:
    # This code runs if condition is False`}
		</PythonHighlighter>
		<p>
			<b>The <span className='keyword'>elif</span> statement</b> (short for "else if") lets us check multiple conditions in sequence. If the first if is false, Python checks the elif. 
			If that's false, it checks the next elif, and so on. Only when all conditions fail does the else block run (if you have one).
		</p>
		<PythonHighlighter>
{`if condition1:
    # Runs if condition1 is True
elif condition2:
    # Runs if condition1 is False AND condition2 is True
elif condition3:
    # Runs if condition1 and condition2 are False AND condition3 is True
else:
    # Runs if all above conditions are False`}
		</PythonHighlighter>
		<br/>
		<p>
			Remember: indentation matters. The code inside an <span className='keyword'>if</span>, <span className='keyword'>elif</span> or <span className='keyword'>else</span> block 
			must be indented to tell Python it belongs to that block. 
			If you forget to indent, Python won't understand which code is conditional and which isn't.
			<br/><br/>
			Also remember the colon. Just like with functions, <span className='keyword'>if</span>, <span className='keyword'>elif</span> and <span className='keyword'>else</span> all 
			require a colon at the end of the line to signal that a code block follows.
			<br/>
			At this point, you have the tools to write programs that adapt and respond. Your code is no longer just a fixed script—it can make decisions 
			based on the data it encounters. This is where code begins to feel alive.
		</p>
	</div>
)

const lesson: Lesson = {
	slug: 'conditionals',
	title: 'Conditionals',
	summary: 'Making decisions with if, elif and else.',
	sections: [
		{ id: 'conditionals', eyebrow: 'Conditionals', title: 'Making decisions', body: conditionals },
	],
}

export default lesson
