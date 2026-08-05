import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <span className="header-logo">
        py<span className="header-logo-accent">.</span>school
      </span>
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
