import { motion } from 'framer-motion'
import data from '../data/portfolio.json'

export default function Masthead() {
  const currentDate = new Date()
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full pt-8 pb-12"
      style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px 48px' }}
    >
      {/* Top double rule */}
      <hr className="rule-double" />

      {/* Volume & Date row */}
      <div
        className="flex justify-between items-center"
        style={{ padding: '12px 0', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
      >
        <span>Vol. I</span>
        <span>{monthYear}</span>
      </div>

      <hr className="rule" />

      {/* Nameplate */}
      <div className="text-center" style={{ padding: '40px 0 24px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: 'var(--black)',
          }}
        >
          The Jayesh Yadav Times
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginTop: 16,
            fontWeight: 500,
          }}
        >
          {data.title} | {data.location}
        </motion.p>
      </div>

      <hr className="rule" />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center"
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(16px, 2.2vw, 22px)',
          color: 'var(--text-secondary)',
          padding: '24px 0',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.5,
        }}
      >
        &ldquo;{data.tagline}&rdquo;
      </motion.p>

      <hr className="rule" />

      {/* Contact Links */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex justify-center items-center flex-wrap"
        style={{
          gap: '8px 24px',
          padding: '20px 0',
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          letterSpacing: '0.08em',
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
      </motion.nav>

      <hr className="rule-thick" />
    </motion.header>
  )
}
