import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import data from '../data/portfolio.json'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target])

  const formatNumber = (num) => {
    if (target >= 1000000) return `${(num / 1000000).toFixed(num >= 1000000 ? 0 : 1)}M+`
    if (target >= 1000) return `${Math.floor(num / 1000)}K+`
    return `${num}`
  }

  // Use the display value from data directly once animation completes
  const displayValue = count >= target ? null : formatNumber(count)

  return <span ref={ref}>{displayValue !== null ? displayValue : null}</span>
}

export default function MetricsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 16,
        }}
      >
        {data.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="square flex flex-col items-center justify-center text-center"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--rule-color)',
              padding: 16,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: 700,
                color: 'var(--black)',
                lineHeight: 1.1,
              }}
            >
              {metric.value}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(10px, 1.2vw, 13px)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: 8,
              }}
            >
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Responsive: on small screens, switch to different grid */}
      <style>{`
        @media (max-width: 768px) {
          .grid { grid-template-columns: repeat(2, 1fr) !important; }
          .grid > :last-child { grid-column: span 2; max-width: 50%; margin: 0 auto; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
