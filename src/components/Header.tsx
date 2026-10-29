import { Link } from 'react-router'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <Link className="header-logo" to="/" state={{ jump: true }}>
        py<span className="header-logo-accent">.</span>school
      </Link>
      <a
        className="header-link"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        source
      </a>
    </header>
  )
}
