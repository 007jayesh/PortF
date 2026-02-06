import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Editorial() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      <div className="flex items-center" style={{ gap: 16, marginBottom: 48 }}>
        <hr className="rule" style={{ flex: 1 }} />
        <span className="section-label">Editorial</span>
        <hr className="rule" style={{ flex: 1 }} />
      </div>

      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        {/* Pull Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 500,
            color: 'var(--black)',
            lineHeight: 1.35,
            marginBottom: 40,
            padding: '0 20px',
          }}
        >
          &ldquo;I don&rsquo;t build dashboards. I build systems that make dashboards unnecessary.&rdquo;
        </motion.blockquote>

        <hr className="rule" style={{ maxWidth: 100, margin: '0 auto 40px' }} />

        {/* Editorial Prose */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            textAlign: 'left',
          }}
        >
          <p style={{ marginBottom: 20 }}>
            Every system I build starts with a single question: <em>should a human really be doing this?</em> If
            the answer is no, I architect a solution that eliminates the manual step entirely &mdash; not with a
            prettier interface, but with intelligent automation that handles edge cases, self-heals on failure,
            and scales without human intervention.
          </p>
          <p>
            My engineering philosophy is built on four pillars: <strong>automation over manual processes</strong>,
            where if a task is repeated twice, the third time should be handled by code; <strong>AI agents over
            human toil</strong>, deploying intelligent systems that reason about problems rather than just follow
            rules; <strong>universal solutions over quick fixes</strong>, building abstractions that solve classes
            of problems, not individual instances; and <strong>production-grade from day one</strong>, because a
            prototype that can't scale is just a demo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
