import { CodeCell, PythonHighlighter } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const variables1 = () => (
	<div>
		<p>
			While computers just need a series of 0s and 1s and instructions on what to do with that information, for humans we need more context and 
			clarity to parse out what code is doing. To make things easier for ourselves we write our code with variables. Named snippets of information 
			and data. Python is an object oriented coding language, that means that those variables can be more than just little snippets of information. 
			They can be entire blocks of code. An entire coding library can be represented as a single variable. Storing information in variables and 
			objects is essential for making code easier and user friendly. Consider the following example:
			<br/>
		</p>
		<PythonHighlighter>
{`print(3.14159 * 5**2)`}
		</PythonHighlighter>
		<p>
			This displays the area of a circle with a radius of 5. Without any context, deciphering this code relies entirely on the reader recognizing 
			3.14159 is PI and that PI multiplied by a number squared is the formula to calculate the area of a circle. Now consider this: 
		</p>
		<PythonHighlighter>
{`PI = 3.14159 
radius = 5
area = PI * radius**2
print(area)`}
		</PythonHighlighter>
		<p>
			In Python, variables are for the reader's benefit. And since you will inevitably forget why/how you wrote code, variables are for your benefit.
			How you name it or what you name it has no precedence on how Python will execute it. 
			For this reason, the best name for a variable is the one that's clearest. And while you can name a variable whatever you want, there 
			are conventions within Python that one should follow so that your code is interpretable and  meshes with code from fellow coders. 
			Variables in python are written in what’s called “Snake Case”. All text is lowercase and spaces are replaced with underscores. “My variable” 
			becomes “my_variable”. The only time you should stray away from this convention is when you are declaring variables as Constants. 
			Constants are variables whose values will never change during the life of the program. <br/>
			These can be used for physical constants:
		</p>
		<PythonHighlighter>
{`PI					= 3.14159
AVOGADROS_NUMBER 	= 6.022e23
BOLTZMAN_CONSTANT 	= 1.38e-23`}
		</PythonHighlighter>
		<p>
			Or any other arbitrary number or bit of information you want to reference in your script. Choosing what to store in variables and how to 
			name those variables will be the primary difference between code that is either easy or difficult to read. Consider this example.
		</p>
		<PythonHighlighter>
{`# Poor naming - confusing and unclear
a = 9.81
v = 0
t = 5
d = v * t + 0.5 * a * t ** 2
print(d)

# Good naming - clear and self-documenting
GRAVITY = 9.81  # m/s^2 (constant)
initial_velocity = 0  # m/s
time_elapsed = 5  # seconds
distance_fallen = initial_velocity * time_elapsed + 0.5 * GRAVITY * time_elapsed ** 2
print(distance_fallen)`}
		</PythonHighlighter>

	</div>
)

const variables2 = () => (
	<div>
		<p>
			Variables can also store other variables. This can make things confusing as variables aren’t actually “things” in the sense of the text you 
			use to write the variable. They are references to locations in memory containing the data you’ve assigned to it. If I create a variable 
			called obvious = 2 + 2. That takes the operation 2 + 2, parses it into 0s and 1s and stores that sequence somewhere in a computer's memory. 
			Now when I call obvious as a variable, it looks at obvious which points to the address in the memory with the sequence of 0s and 1s that 
			represents 2 + 2. If I now make another variable less_so = obvious. Just because less_so is a new string of characters, it still represents 
			a location of memory. When we assign less_so = obvious, we are saying that less_so as a variable will point to the same bit of memory as 
			obvious. That is to say less_so is now 2+2. Because these two variables are now pointing to the same address in memory. 
			Modifying one will modify the other. Try it out:
		</p>
		<CodeCell>
		
		</CodeCell>
	</div>
)

const variables3 = () => (
	<div>
		<p>
			The last thing to highlight with variables is well… their variability. A variable references the last bit of information handed to it. 
			That means a variable can be reassigned and any future reference to the variable will see that newly reassigned data. This doesn’t have 
			particularly grave consequences, but if you are uncreative in naming your variables, you may accidentally re-use the same name later in 
			the script. This is also useful for reducing memory use. In for loops, we reuse the same variable name over and over, this prevents 
			copies of data from accumulating for each iteration in the loop.
		</p>
	</div>
)

const verbosity = () => (
	<div>
		Handling variables becomes an art in balancing clarity against conciseness. Naming every intermediate step makes code easier to follow but 
		adds lines and writing time. Conversely, chaining operations into fewer variables writes faster but becomes harder to read. As you grow 
		familiar with coding conventions and common practices, you'll recognize when chaining is acceptable. This difference in writing is called 
		the verbosity. Verbose code uses a greater number of lines or characters than necessary. For beginners I would recommend writing verbose 
		code. The explicit acknowledgement of every step will help you develop the intuition and mental framework of how data in code is
		manipulated and passed around. <br/>
		<br/>
		

	</div>
)

const lesson: Lesson = {
	slug: 'variables',
	title: 'Variables',
	summary: 'Naming data so humans can read code.',
	sections: [
		{ id: 'variables', eyebrow: 'Variables', title: 'How Humans Read', body: variables1 },
		{ id: 'variability', eyebrow: 'Variables', title: 'How Variables Vary', tocLabel: 'Variability', nested: true, body: variables2 },
		{ id: 'immutability', eyebrow: 'Variables', title: "When They Don't", tocLabel: 'Immutability', nested: true, body: variables3 },
		{ id: 'verbosity', eyebrow: 'Variables', title: 'Clarity vs. Conciseness', tocLabel: 'Verbosity', nested: true, body: verbosity },
	],
}

export default lesson
