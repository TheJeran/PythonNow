import { forwardRef } from 'react'
import './Section.css'

interface SectionProps{
  eyebrow: string,
  title: string,
  children?: React.ReactNode,
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
	{ eyebrow, title, children} : SectionProps,
	ref,) {
	return (
	<section className="section" ref={ref}>
		<div className="section-inner">
		{eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
		{title && <h2 className="section-title">{title}</h2>}
		{children}
		</div>
	</section>
	)
	})

export default Section
