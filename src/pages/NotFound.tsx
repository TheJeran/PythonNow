import { Link } from 'react-router'

export default function NotFound() {
	return (
		<main className="page">
			<p className="page-eyebrow">404</p>
			<h1 className="page-title">Nothing here.</h1>
			<p className="page-prose">
				That module or lesson doesn't exist. <Link to="/">Back to the course</Link>.
			</p>
		</main>
	)
}
