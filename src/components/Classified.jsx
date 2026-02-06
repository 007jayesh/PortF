import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function Classified() {
  const { entrepreneurial } = data
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      <div className="flex items-center" style={{ gap: 16, marginBottom: 48 }}>
        <hr className="rule" style={{ flex: 1 }} />
        <span className="section-label">Classifieds</span>
        <hr className="rule" style={{ flex: 1 }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 560,
          margin: '0 auto',
          border: '3px double var(--black)',
          padding: 48,
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* NOW BUILDING label */}
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--bg-primary)',
            padding: '0 20px',
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          Now Building
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 36,
            fontWeight: 800,
            color: 'var(--black)',
            marginBottom: 8,
            letterSpacing: '-0.01em',
          }}
        >
          {entrepreneurial.name}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: 'var(--text-secondary)',
            marginBottom: 28,
            fontStyle: 'italic',
          }}
        >
          {entrepreneurial.description}
        </p>

        <hr className="rule" style={{ marginBottom: 24 }} />

        <div className="flex flex-wrap justify-center" style={{ gap: '8px 20px', marginBottom: 24 }}>
          {entrepreneurial.features.map(f => (
            <span
              key={f}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-primary)',
                fontWeight: 500,
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}
        >
          {entrepreneurial.note}
        </p>
      </motion.div>
    </section>
  )
}
