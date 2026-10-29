import { forwardRef } from 'react'
import './Section.css'

interface SectionProps{
  eyebrow: string,
  title: string,
  isActive: boolean,
  children?: (isActive: boolean) => React.ReactNode,
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
	{ eyebrow, title, isActive, children} : SectionProps,
	ref,) {
	return (
	<section className="section" ref={ref}>
		<div className="section-inner">
		{eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
		{title && <h2 className="section-title">{title}</h2>}
		{children?.(isActive)}
		</div>
	</section>
	)
	})
