import type { ReactNode } from 'react'
import ShikiHighlighter from 'react-shiki'

export const PythonHighlighter = ({children} : {children: ReactNode}) => {
	return(
		<ShikiHighlighter language={'py'} theme={'dark-plus'}>
			{children as string}
		</ShikiHighlighter>
	)
}
