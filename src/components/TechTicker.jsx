import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

export default function TechTicker() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const techItems = data.techStack
  // Duplicate for seamless loop
  const doubled = [...techItems, ...techItems]

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        overflow: 'hidden',
        borderTop: '1px solid var(--rule-color)',
        borderBottom: '1px solid var(--rule-color)',
        padding: '20px 0',
      }}
    >
      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              paddingRight: 16,
            }}
          >
            {tech}
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                backgroundColor: 'var(--accent)',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </motion.section>
  )
}
