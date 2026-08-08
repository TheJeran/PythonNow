import type { ReactNode } from 'react'
import ShikiHighlighter from 'react-shiki'
import { CodeCell } from '../../components'


const PythonHighlighter = ({children} : {children: ReactNode}) => {
	return(
		<ShikiHighlighter language={'py'} theme={'dark-plus'}>
			{children as string}
		</ShikiHighlighter>
	)
}

export const introduction = (
    <div>
		<p>
        So you wanna learn how to _code_. In a time with an ever growing influence of AI and vibe coded repositories, 
        this may seem like a foolish or poorly timed decision. But alas no, the world will always need clever minds and 
        it’s important we don’t forget how to think because something else can do that for us. Every code block on this page is live. 
        Nothing installs, nothing to configure — just scroll, read, and run.
		</p>
        <CodeCell>
            print("hello world")
        </CodeCell>
    </div>
)

export const principles = (
    <div>
		<p>
			As children, we absorbed the structure of the world through our parents' authority, believing that some 
			societal force created and maintained order. We assumed that with age, we would unlock this knowledge to 
			understand how to function within this rigidly orchestrated system. Adulthood brings a humbling realization: 
			no one really knows what they're doing. Everything is held together loosely by norms, and we get things right
			often enough to maintain the illusion that things are working. 
			<br/><br/>
			Unfortunately for those seeking certainty and absolutes, coding is no different. None of us are objectively 
			correct in our implementation of code and there is no rigidly “true” way to develop code for a given problem. 
			This ambiguity can be uncomfortable. Learning feels fruitless when right and wrong blur together "<span className='text-red-200'><i>I don't have 
			the mental energy to parse this uncertainty. Just tell me what's right.</i></span>" 
			<br/>
			Unfortunately it’s not that simple :/
			<br/><br/>
			The reality is, if your code yields the result you want, it is correct. That being said—although there is no objectively “correct” 
			way to write code—there are objectively better and worse ways to write. Being a good coder means adhering to principles that 
			distinguish better code from worse code. <br/><br/>

			Assuming two scripts perform the same task, then: <br/>
			<br/>
		</p>
		<ul className='text-xl text-mauve-200'>
			<li>Code that is easier to read is better ✔</li>
			<li>Code that runs faster is better ✔</li>
			<li>Code that is more flexible is better ✔</li>
		</ul>
		<p>
			<br/>
			Each of these points are nuanced and merit further discussion. But before we explore them, we need to develop an intuition 
			for the coding landscape. If I were to ask you to solve a problem, you have no framework with which to approach this. 
			You don’t know what information is available and you don’t know how you can manipulate that information. 
			Therefore for our first steps, it’s absolutely prudent we build up the intuition of how code behaves and the logic behind it. 
			Once we understand what kind of information we can work with and what we can do with it, then we can worry about presentation and code structure.
		</p>
	</div>
)

export const syntax =(
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

export const types = (
	<div>
		<p>
			At a fundamental level, coding is passing a bunch of <b>0</b>s and <b>1</b>s to your CPU along with instructions of how to move them around. 
			Although computers think and operate differently than us, they are just as confused by 01010000 as you are. For this reason we 
			need to also tell the CPU how to interpret the 0s and 1s. 01010000 could either be a capital P or 80 or any other arbitrary way 
			of decoding it. Python explains this to the CPU implicitly for us based on how we input the data. How we write data defines the 
			data type of the information being sent to the CPU. There are only 4 data types you need to concern yourself with today: <br/>
			<br/>
		</p>
		<ul>
			<li><b><span className='highlight'>Float</span></b> – <span className='text-[var(--text-dim)]'>Fractional numbers or decimals: <b>4.5</b></span></li>
			<li><b><span className='highlight'>Int</span></b>– <span className='text-[var(--text-dim)]'>Whole numbers: <b>4</b></span></li>
			<li><b><span className='highlight'>String</span></b>– <span className='text-[var(--text-dim)]'>Unicode characters like what you are reading now.</span></li>
			<li><b><span className='highlight'>Bool</span></b>– <span className='text-[var(--text-dim)]'>Logical 
				states: <span className='text-[var(--ok)]'>True</span>/<span className='text-[var(--err)]'>False</span></span></li>
		</ul>
		<p>
			<br/>
			<span className='highlight'>Float</span> and <span className='highlight'>Int</span> are number data and as such, can be manipulated exactly as you would expect. 
			In Python, ints and floats can be manipulated together without thought. You can apply any operation to a float with an int and vice versa. This may seem like something trivial 
			to mention, of course you can add an integer number to a <span className='highlight'>float</span> or decimal number. But don’t forget, in the computer world we aren’t 
			dealing with numbers the way humans think about them. Numbers are <span className='highlight'>0</span>s and <span className='highlight'>1</span>s. 
			And how you add <span className='highlight'>0</span>s and <span className='highlight'>1</span>s together to achieve the kind 
			of math you are familiar with depends on the data type. <span className='code-inline'>1.0 + 2.0</span> is a completely different shuffling of 0s and 1s compared 
			to <span className='code-inline'>1 + 2</span>. 
			For convenience sake,  Python converts all int datatypes into floats anytime they are used together in a calculation. As a result, a user 
			will never notice and may never consider why that shouldn’t be the case. Below, try running some simple arithmetic operations: <br/>
		</p>
		<CodeCell>
{`print(2 + 2)
print(4.0 + 5)`}
		</CodeCell>
		<p>
			Notice how the <b>4</b> lacks a decimal while the <b>9.0</b> has a trailing zero. This is not arbitrary. They represent different patterns
			of <b>0</b>s and <b>1</b>s stored in memory. But... you won't be punished for ignoring this nuance. 
			<br/><br/> 
			The string type belongs to text-like data. It is denoted by writing information wrapped in quotations. <b className='text-white text-xl'>"</b>
			Either with a double quote<b className='text-white text-xl'>"</b> or <b className='text-white text-xl'>'</b>with a single quote<b className='text-white text-xl'>'</b>. 
			It’s up to you which you like more. Just like how <span className='code-inline'>1 + 2</span> was different from <span className='code-inline'>1.0 + 2.0</span>,  <span className='code-inline'>“1” + “2”</span> is 
			yet another operation of 0s and 1s. For this reason, operations cannot be performed between str and number types.
		</p>
		<CodeCell>
			"1" + 2
		</CodeCell>
		<p>
			Unlike with <span className='highlight'>int</span>s and <span className='highlight'>float</span>s—where one can always be converted into the other—<span className='highlight'>str</span> data 
			types cannot always be interpreted as a number and so python will not even try. However, because all data types are simply 0s and 1s, we can of course convert or cast one datatype 
			into another. The <span className='code-inline'>float( )</span> function used below converts whatever data is inside to a float (if possible). 
		</p>
		<CodeCell>
			float("1") + 2
		</CodeCell>
		<p>
			We’ll discuss the significance of its existence in the next section. But what you need to understand now, is that different data-types 
			can be converted or cast into other data types. This is important if you ever want to get a numerical input from a user, as user inputs 
			typed from their keyboard will always be a str type. <br/>
			The Last datatype to concern ourselves with today is the bool data type. This is the logic data type and is used for coding logical 
			conditions and execution of code. A bool or boolean has either two values. True or False. We use bools to check if things are how we 
			need them to be before executing further code. So if a user provided an input, we can check if that input can be cast to a number. 
			If so (True) then we can continue on with our code, if the user mistyped and the input cannot be cast to a number (False) then we don’t 
			execute any further code and instead signal a warning to let the user know something went wrong.
		</p>
	</div>
)

export const variables = (
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

export const verbosity = (
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

export const functions = (
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

export const conditionals = (
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

export const loops = (
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