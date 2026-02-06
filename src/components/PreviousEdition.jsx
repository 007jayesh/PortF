import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function PreviousEdition() {
  const log9 = data.experience[1]
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
            Previous Edition: {log9.company} ({log9.period})
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
          {log9.subtitle}
        </p>
      </div>

      {/* 3-column grid of square cards */}
      <div
        className="prev-edition-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {log9.projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="square"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--rule-color)',
              padding: 'var(--card-padding)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default',
              overflow: 'hidden',
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
            <div>
              <span className="section-label" style={{ color: 'var(--accent)', fontSize: 10 }}>
                {project.category}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontWeight: 700,
                  color: 'var(--black)',
                  marginTop: 12,
                  marginBottom: 4,
                  lineHeight: 1.25,
                }}
              >
                {project.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  marginBottom: 12,
                }}
              >
                {project.headline}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                {project.description}
              </p>
            </div>

            <div>
              {/* Pull quote if exists */}
              {project.pullQuote && (
                <div
                  style={{
                    borderLeft: '3px solid var(--accent)',
                    paddingLeft: 16,
                    marginBottom: 16,
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 13,
                    color: 'var(--accent)',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{project.pullQuote}&rdquo;
                </div>
              )}

              {/* Tech */}
              <div className="flex flex-wrap" style={{ gap: 4, marginBottom: 12 }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      padding: '2px 6px',
                      border: '1px solid var(--rule-color)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Impact metrics */}
              <hr className="rule" style={{ marginBottom: 10 }} />
              <div className="flex flex-wrap" style={{ gap: '2px 12px' }}>
                {project.impact.map(imp => (
                  <span
                    key={imp}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--black)',
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
        @media (max-width: 768px) {
          .prev-edition-grid {
            grid-template-columns: 1fr !important;
          }
          .prev-edition-grid .square {
            aspect-ratio: auto !important;
            min-height: 280px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .prev-edition-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .prev-edition-grid > :last-child {
            grid-column: span 2;
            max-width: calc(50% - 12px);
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
