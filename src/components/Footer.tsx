import './Footer.css'

interface Footer{
  sections: { id: string; eyebrow: string; title: string; body: string; code: string; }[]
  activeIndex: number,
  onNavigate: Function
}

export default function Footer({ sections, activeIndex, onNavigate }: Footer) {
  return (
    <footer className="footer">
      <span className="footer-count">
        {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
      </span>

      <nav className="footer-dots" aria-label="Sections">
        {sections.map((s, i) => (
          <button
            key={s.id}
            className={`footer-dot ${i === activeIndex ? 'is-active' : ''}`}
            aria-label={s.eyebrow}
            aria-current={i === activeIndex}
            onClick={() => onNavigate(i)}
          />
        ))}
      </nav>
    </footer>
  )
}
