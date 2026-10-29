import { PythonHighlighter } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const syntax = () => (
	<div>
		<p>
			Before we dive into how Python interprets data, we need to understand how Python reads code itself. Syntax is the set of rules 
			that dictate how code must be written for Python to understand it. Think of it like grammar in English—if you don't follow the 
			rules, the meaning becomes unclear or incomprehensible.
			<br/><br/>
			Python's syntax is relatively forgiving compared to other programming languages, but there is one rule that is absolutely 
			critical:<br/>
			<span className='keyword ml-8'>indentation</span>. 
			<br/>
			<b>Indentation</b> refers to the blank spaces at the beginning of a line of code. In Python, indentation is 
			not just for readability—it's functional. It tells Python which lines of code belong together as a group.
			<br/><br/>
			For example, when we write a function or a conditional statement (which we'll discuss later), the code that belongs to that 
			function or statement must be indented. If you don't indent properly, Python will either throw an error or your code will behave 
			in ways you didn't intend.
		</p>
		<PythonHighlighter>
{`def greet():
	# This code is indented—it belongs to the function
    print("Hello!")

# This code is NOT indented—it's separate from the function
print("Goodbye!")`}
		</PythonHighlighter>
		<p>
			In the example above, the print("Hello!") line is indented with spaces, which tells Python it's part of the function. 
			The print("Goodbye!") line has no indentation, so Python knows it runs independently.
			<br/><br/>
			For now, just know that indentation matters. As we move forward and start writing functions, loops, and conditional 
			statements, you'll see indentation in action. It's one of Python's defining features and makes code visually clear 
			about which lines work together.
		</p>
	</div>
)

const lesson: Lesson = {
	slug: 'syntax',
	title: 'Syntax',
	summary: 'How Python reads code, and why indentation matters.',
	sections: [
		{ id: 'syntax', eyebrow: 'Syntax', title: 'Proper "Grammar"', body: syntax },
	],
}

export default lesson
