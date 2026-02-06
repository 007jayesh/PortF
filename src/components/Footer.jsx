import data from '../data/portfolio.json'

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px 60px',
      }}
    >
      <hr className="rule-thick" style={{ marginBottom: 32 }} />

      <div className="text-center">
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--text-muted)',
            marginBottom: 20,
          }}
        >
          &copy; 2026 {data.name} | Published from {data.location}
        </p>

        <nav
          className="flex justify-center items-center flex-wrap"
          style={{
            gap: '8px 24px',
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '0.05em',
          }}
        >
          <a
            href={`mailto:${data.contact.email}`}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--rule-color)' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            Email
          </a>
          <span style={{ color: 'var(--rule-color)' }}>|</span>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--rule-color)' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--rule-color)' }}>|</span>
          <a
            href={data.contact.medium}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--rule-color)' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            Medium
          </a>
          <span style={{ color: 'var(--rule-color)' }}>|</span>
          <a
            href="/Jayesh_Yadav_Resume.pdf"
            download
            style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid var(--accent)' }}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </footer>
  )
}
