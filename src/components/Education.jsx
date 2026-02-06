import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      <div className="flex items-center" style={{ gap: 16, marginBottom: 48 }}>
        <hr className="rule" style={{ flex: 1 }} />
        <span className="section-label">Education & Credentials</span>
        <hr className="rule" style={{ flex: 1 }} />
      </div>

      <div
        className="edu-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          maxWidth: 700,
          margin: '0 auto',
        }}
      >
        {data.education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{
              border: '1px solid var(--rule-color)',
              padding: 'var(--card-padding)',
              textAlign: 'center',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--black)',
                marginBottom: 8,
              }}
            >
              {edu.institution}
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--text-secondary)',
                marginBottom: 12,
              }}
            >
              {edu.degree}
            </p>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              CGPA: {edu.cgpa}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
