import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function KpmgSection() {
  const kpmg = data.experience[2]
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
            Earlier Edition: {kpmg.company} ({kpmg.period})
          </span>
          <hr className="rule" style={{ flex: 1 }} />
        </div>
        <p
          className="text-center"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          {kpmg.subtitle}
        </p>
      </div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(22px, 3vw, 32px)',
          fontWeight: 700,
          color: 'var(--black)',
          marginBottom: 12,
          lineHeight: 1.25,
          maxWidth: 700,
          margin: '0 auto 12px',
        }}
      >
        {kpmg.headline}
      </motion.h2>

      <p
        className="text-center"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          marginBottom: 40,
        }}
      >
        {kpmg.role}
      </p>

      {/* 2-column project cards */}
      <div
        className="kpmg-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        {kpmg.projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
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
            <span className="section-label" style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 700 }}>
              {project.category}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--black)',
                marginTop: 10,
                marginBottom: 8,
                lineHeight: 1.3,
              }}
            >
              {project.headline}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap" style={{ gap: 6, marginBottom: 12 }}>
              {project.tech.map(t => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    padding: '3px 8px',
                    border: '1px solid var(--rule-color)',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-primary)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Impact */}
            <div style={{ borderTop: '1px solid var(--rule-color)', paddingTop: 12 }}>
              <span className="section-label" style={{ fontSize: 10 }}>Impact</span>
              <div className="flex flex-wrap" style={{ gap: '4px 16px', marginTop: 4 }}>
                {project.impact.map(imp => (
                  <span
                    key={imp}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--accent)',
                    }}
                  >
                    {imp}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .kpmg-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
