import type { ReactNode } from 'react'
import Markdown from 'react-markdown'
import ShikiHighlighter from 'react-shiki'
import remarkGfm from 'remark-gfm'
import * as Sections from './main/main'

const dedent = (str: string) => str.replace(/^[ \t]+/gm, '');

interface SectionConfig {
  id: string
  eyebrow: string
  title: string
  body: ReactNode
}

const PythonHighlighter = ({children} : {children: ReactNode}) => {
	return(
		<ShikiHighlighter language={'py'} theme={'dark-plus'}>
			{children as string}
		</ShikiHighlighter>
	)
}

const ReMarkdown = ({children} : {children: ReactNode}) => {
	return(
		<Markdown remarkPlugins={[remarkGfm]}>
			{children as string}
		</Markdown>
	)
}

export const sections: SectionConfig[] = [
  {
    id: 'intro',
    eyebrow: '00 — Welcome',
    title: 'Learn Python, right here and right now in the browser.',
    body:Sections.introduction
  },
  {
    id: 'principles',
    eyebrow: '01 — Principles',
    title: 'The Correct Way to Code',
    body: Sections.principles
  },
  {
    id: 'types',
    eyebrow: '02 — Data-types',
    title: 'Repeating yourself, on purpose',
    body: Sections.types
  },
  {
    id: 'functions',
    eyebrow: '03 — Functions',
    title: 'Packaging up behaviour',
    body: 'Functions let you name a piece of logic and reuse it.',
  },
]
