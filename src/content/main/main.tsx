import type { ReactNode } from 'react'
import ShikiHighlighter from 'react-shiki'
import CodeCell from '../../components/CodeCell'


const PythonHighlighter = ({children} : {children: ReactNode}) => {
	return(
		<ShikiHighlighter language={'py'} theme={'dark-plus'}>
			{children as string}
		</ShikiHighlighter>
	)
}

const dedent = (str: string) => str.replace(/^[ \t]+/gm, '');

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
			often enough to maintain the illusion that things are working. <br/>

			Unfortunately for those seeking certainty and absolutes, coding is no different. None of us are objectively 
			correct in our implementation of code and there is no rigidly “true” way to develop code for a given problem. 
			This ambiguity can be uncomfortable—learning becomes harder when right and wrong blur together. "<span className='text-red-200'><i>I don't have 
			the mental energy to parse this uncertainty. Just tell me what's right.</i></span>" Unfortunately it’s not that simple :/
			The reality is, if your code yields the result you want, it is correct. That being said—although there is no objectively “correct” 
			way to write code—there are objectively better and worse ways to write. Being a good coder means adhering to principles that 
			distinguish better code from worse code. <br/><br/>

			Assuming two scripts perform the same task, then: <br/>
			<br/>
			<ul className='text-xl text-mauve-200'>
				<li>Code that is easier to read is better ✔</li>
				<li>Code that runs faster is better ✔</li>
				<li>Code that is more flexible is better ✔</li>
			</ul>
			<br/>
			Each of these points are nuanced and merit further discussion. But before we explore them, we need to develop an intuition 
			for the coding landscape. If I were to ask you to solve a problem, you have no framework with which to approach this. 
			You don’t know what information is available and you don’t know how you can manipulate that information. 
			Therefore for our first steps, it’s absolutely prudent we build up the intuition of how code behaves and the logic behind it. 
			Once we understand what kind of information we can work with and what we can do with it, then we can worry about presentation and code structure.
		</p>
	</div>
)

export const types = (
	<div>
		<p>
			At a fundamental level, coding is passing a bunch of 0s and 1s to your CPU along with instructions of how to move them around. 
			Although computers think and operate differently than us, they are just as confused by 01010000 as you are. For this reason we 
			need to also tell the CPU how to interpret the 0s and 1s. 01010000 could either be a capital P or 80 or any other arbitrary way 
			of decoding it. Python explains this to the CPU implicitly for us based on how we input the data. How we write data defines the 
			data type of the information being sent to the CPU. There are only 4 data types you need to concern yourself with today: <br/>
			<br/>

			<ul>
				<li>Float</li>
				<li>Int</li>
				<li>String</li>
				<li>Bool</li>
			</ul>
			<br/>
			Float and int are number data and as such, can be manipulated exactly as you would expect. In Python, ints and floats can be manipulated 
			together without thought. You can apply any operation to a float with an int and vice versa. This may seem like something trivial 
			to mention, of course you can add an integer number to a float or decimal number. But don’t forget, in the computer world we aren’t 
			dealing with numbers the way humans think about them. Numbers are 0s and 1s. And how you add 0s and 1s together to achieve the kind 
			of math you are familiar with depends on the data type. 1.0 + 2.0 is a completely different shuffling of 0s and 1s compared to 1 + 2. 
			For convenience sake,  Python converts all int datatypes into floats anytime they are used together in a calculation. As a result, a user 
			will never notice and may never consider why that shouldn’t be the case. Below, try running some simple arithmetic operations: <br/>
		</p>
		<CodeCell>
			{dedent(`print(2 + 2)
			print(4.0 + 5)`)}
		</CodeCell>
		<p>
			The string type belongs to text-like data. It is denoted by writing information wrapped in quotations. <b className='text-white text-xl'>"</b>
			Either with a double quote<b className='text-white text-xl'>"</b> or <b className='text-white text-xl'>'</b>with a single quote<b className='text-white text-xl'>'</b>. 
			It’s up to you which you like more. Just like how 1 + 2 was different from 1.0 + 2.0,  “1” + “2”  is yet another 
			operation of 0s and 1s. For this reason, operations cannot be performed between str and number types. Below try to add “1” + 2
		</p>
		<CodeCell>
			"1" + 2
		</CodeCell>
		<p>
			Unlike with ints and floats—where one can always be converted into the other—str data types cannot always be interpreted as a number 
			and so python will not even try. However, because all data types are simply 0s and 1s, we can of course convert or cast one datatype 
			into another. Type out float(“1”) + 2 into the field below. The float( ) function converts whatever data is inside to a float. 
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