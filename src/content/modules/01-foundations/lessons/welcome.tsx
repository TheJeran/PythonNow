import { CodeCell } from '../../../../components'
import type { Lesson } from '../../../../course/types'

const introduction = () => (
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

const principles = () => (
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

const lesson: Lesson = {
	slug: 'welcome',
	title: 'Welcome',
	summary: 'What this course is and how to think about \'correct\' code.',
	sections: [
		{ id: 'intro', eyebrow: 'Welcome', title: 'Learn Python, right here and right now in the browser.', body: introduction },
		{ id: 'principles', eyebrow: 'Principles', title: 'The Correct Way to Code', body: principles },
	],
}

export default lesson
