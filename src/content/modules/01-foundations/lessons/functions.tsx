import { CodeCell, PythonHighlighter } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const functions = () => (
	<div>
		<p>
			Along with variables, functions are essential tools for making code more legible and human friendly. While variables can be—as I 
			mentioned earlier—any arbitrary length of code, it’s kind of confusing to define a variable like this. 
		</p>
		<PythonHighlighter>
user_authentication_status = database.query("users").filter(id=current_user_id).fetch().get("is_authenticated")
		</PythonHighlighter>
		<p>
			Remember, variables are an art in balancing clarity against conciseness. When we pair an easy to read variable name with a large 
			quantity of operations, we are losing clarity. But sometimes we want a variable to be the result of a more complicated operation. 
			Or maybe we want to run the same operation but on different values. These limitations are addressed through the use of Functions
		</p>
		<PythonHighlighter>
{`def calculate_average_grade(scores):
    total = sum(scores)
    average = total / len(scores)
    return round(average, 1)`}
		</PythonHighlighter>
		<p>
			A function is a reusable block of code designed to perform a specific task. Rather than writing the same code over and over, 
			we can write it once inside a function and call it whenever we need it. This saves time, reduces errors, and keeps our code organized.
			<br/><br/>
			In Python, creating a function requires <b>five</b> key components:
		</p>
		<ol className='text-l text-red-200'>
			<li><b>The <span className='keyword'>def</span> keyword </b> – 
				<span className='text-[var(--text-dim)]'>This tells Python that we are defining a function.</span></li>
			<li><b>The function name </b>– 
				<span className='text-[var(--text-dim)]'>A descriptive name that tells us what the function does (like calculate_total or greet_user).</span></li>
			<li><b>Parentheses </b>– 
				<span className='text-[var(--text-dim)]'>These come right after the function name and hold any inputs the function might need (called parameters).</span></li>
			<li><b>A colon </b>– 
				<span className='text-[var(--text-dim)]'>This signals the end of the function's header and comes right before the code block.</span></li>
			<li><b>An indented code block</b> – 
				<span className='text-[var(--text-dim)]'>All the code that makes up the function must be indented. This tells Python which lines belong to the function.</span></li>
		</ol>
		<br/>
		<CodeCell>
{`def function_name(): 
	# function code goes here 
	print("Function executed")
# Execute functions by typing it without the def
function_name()`}
		</CodeCell>
	</div>
)

const lesson: Lesson = {
	slug: 'functions',
	title: 'Functions',
	summary: 'Bundling behavior into reusable blocks.',
	sections: [
		{ id: 'functions', eyebrow: 'Functions', title: 'Bundling Behavior', body: functions },
	],
}

export default lesson
