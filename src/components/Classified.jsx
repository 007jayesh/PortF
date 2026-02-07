import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function Classified() {
  const neuracer = data.neuracer
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 48 }}>
        <div className="flex items-center" style={{ gap: 16, marginBottom: 8 }}>
          <hr className="rule" style={{ flex: 1 }} />
          <span className="section-label">
            Current Venture
          </span>
          <hr className="rule" style={{ flex: 1 }} />
        </div>
      </div>

      {/* Company header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: 48 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          {neuracer.role} &middot; {neuracer.period}
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 900,
            color: 'var(--black)',
            marginTop: 12,
            marginBottom: 8,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {neuracer.company}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 15,
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            maxWidth: 500,
            margin: '0 auto',
          }}
        >
          {neuracer.subtitle}
        </p>
      </motion.div>

      {/* Headline + Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
        style={{ maxWidth: 780, margin: '0 auto 48px', textAlign: 'center' }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.3,
            marginBottom: 20,
          }}
        >
          {neuracer.headline}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}
        >
          {neuracer.description}
        </p>
      </motion.div>

      {/* Capabilities grid — 2x2 */}
      <div
        className="neuracer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          marginBottom: 48,
        }}
      >
        {neuracer.capabilities.map((cap, i) => (
          <motion.div
            key={cap.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            style={{
              border: '1px solid var(--rule-color)',
              padding: 'var(--card-padding)',
              backgroundColor: 'var(--bg-secondary)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--black)',
                marginBottom: 10,
                lineHeight: 1.3,
              }}
            >
              {cap.name}
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Differentiators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          border: '1px solid var(--rule-color)',
          padding: 'var(--card-padding)',
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Why Neuracer
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {neuracer.differentiators.map(d => (
            <div
              key={d}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  backgroundColor: 'var(--accent)',
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {d}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .neuracer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
