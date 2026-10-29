import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const types = () => (
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

const lesson: Lesson = {
	slug: 'data-types',
	title: 'Data Types',
	summary: 'Floats, ints, strings and bools — how computers interpret data.',
	sections: [
		{ id: 'types', eyebrow: 'Data-types', title: 'How Computers Read', body: types },
	],
}

export default lesson
