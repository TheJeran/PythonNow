import type { ReactNode } from 'react'
import * as Sections from './main/main'
import type { TocItem } from '../components/TableofContents'

interface SectionConfig {
  id: string
  eyebrow: string
  title: string
  body: ReactNode
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
    id: 'syntax',
    eyebrow: '02 — Syntax',
    title: 'Proper "Grammar"',
    body: Sections.syntax
  },
  {
    id: 'types',
    eyebrow: '03 — Data-types',
    title: 'How Computers Read',
    body: Sections.types
  },
  {
    id: 'variables',
    eyebrow: '04 — Variables',
    title: 'How Humans Read',
    body: Sections.variables,
  },
  {
    id: 'functions',
    eyebrow: '05 — Functions',
    title: 'Bundling Behaviour',
    body: Sections.functions,
  },
  {
    id: 'conditionals',
    eyebrow: '06 — Conditionals',
    title: 'Making decisions',
    body: Sections.conditionals,
  },
  {
    id: 'loops',
    eyebrow: '07 — Loops',
    title: 'Repeating yourself, on purpose',
    body: Sections.loops,
  }
]

const tocLabels = Object.values(sections).map(v => v.eyebrow)

export const tableOfContents: TocItem[] = [
  {
    id: 0,
    label: tocLabels[0],
  },
  {
    id: 1,
    label: tocLabels[1],
  },
  {
    id: 2,
    label: tocLabels[2],
  },
  {
    id: 3,
    label: tocLabels[3],
  },
  {
    id: 4,
    label: tocLabels[4],
  },
  {
    id: 5,
    label: tocLabels[5],
  },
  {
    id: 6,
    label: tocLabels[6],
  },
  {
    id: 7,
    label: tocLabels[7],
  },
]