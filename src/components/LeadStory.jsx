import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

function SubStoryCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      style={{
        border: '1px solid var(--rule-color)',
        padding: 'var(--card-padding)',
        backgroundColor: 'var(--bg-primary)',
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
      <span className="section-label" style={{ color: 'var(--accent)', fontSize: 11, fontWeight: 700 }}>
        {project.category}
      </span>

      <h4
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 700,
          marginTop: 10,
          marginBottom: 8,
          color: 'var(--black)',
          lineHeight: 1.3,
        }}
      >
        {project.headline}
      </h4>

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
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--rule-color)',
              color: 'var(--text-secondary)',
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
  )
}

export default function LeadStory() {
  const quantifai = data.experience[0]
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: 48 }}>
        <div className="flex items-center" style={{ gap: 16, marginBottom: 16 }}>
          <hr className="rule" style={{ flex: 1 }} />
          <span className="section-label">Lead Story</span>
          <hr className="rule" style={{ flex: 1 }} />
        </div>
      </div>

      {/* 2-column layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 'var(--column-gap)',
        }}
      >
        {/* Left column — Editorial text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label" style={{ color: 'var(--accent)' }}>
            {quantifai.company}
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              color: 'var(--black)',
              marginTop: 8,
              marginBottom: 8,
              lineHeight: 1.15,
            }}
          >
            {quantifai.headline}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--text-muted)',
              marginBottom: 24,
              fontStyle: 'italic',
            }}
          >
            {quantifai.role} &middot; {quantifai.period}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            {quantifai.subtitle} &mdash; building the infrastructure that powers automated
            reconciliation, vendor connectivity, and self-healing data pipelines for India's
            leading finance automation platform. Every project here reduced manual toil and
            replaced fragile processes with production-grade AI systems.
          </p>

          <hr className="rule" style={{ marginBottom: 32 }} />

          {/* First two sub-stories in left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {quantifai.projects.slice(0, 2).map((p, i) => (
              <SubStoryCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Right column — remaining stories + visual elements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          {/* System Architecture Visual Square */}
          <div
            className="square"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--rule-color)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 32,
              position: 'relative',
            }}
          >
            <span className="section-label" style={{ marginBottom: 24 }}>System Architecture</span>
            {/* ASCII-style diagram */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: 1.8,
                whiteSpace: 'pre',
              }}
            >
{`  VENDOR PORTALS
      |
  [Browser-to-API]
      |
  UNIFIED DATA LAYER
   /     |     \\
RECON  FABRIC  AGENTS
  |      |       |
  v      v       v
ZERO   SELF    AUTO
ERROR  HEAL   RESOLVE`}
            </div>
          </div>

          {/* Remaining sub-stories */}
          {quantifai.projects.slice(2).map((p, i) => (
            <SubStoryCard key={p.name} project={p} index={i + 2} />
          ))}

          {/* Core Stack Visual — categorized grid */}
          <div
            style={{
              backgroundColor: 'var(--black)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}
            >
              Core Stack
            </span>

            {[
              { label: 'AI / ML', items: ['LLM Pipelines', 'AI Agents', 'RAG', 'NER', 'Gen AI', 'LangChain', 'OpenAI API'] },
              { label: 'Data Engineering', items: ['Python', 'SQL', 'Pandas', 'Docling', 'ETL', 'Airflow', 'Pydantic'] },
              { label: 'Backend / Infra', items: ['FastAPI', 'Selenium', 'REST APIs', 'Docker', 'PostgreSQL', 'Redis', 'AWS'] },
              { label: 'Models', items: ['CatBoost', 'BiLSTM', 'Scikit-Learn', 'AutoML', 'TensorFlow'] },
            ].map(group => (
              <div key={group.label}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  {group.label}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {group.items.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        padding: '3px 8px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.3,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 768px) {
          section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          .square {
            aspect-ratio: auto !important;
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  )
}
