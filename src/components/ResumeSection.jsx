import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const RESUME_URL = '/Jayesh_Yadav_Resume.pdf'

function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      {/* Top bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 900,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Resume &mdash; Jayesh Yadav
        </span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a
            href={RESUME_URL}
            download="Jayesh_Yadav_Resume.pdf"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--accent)',
              textDecoration: 'none',
              border: '1px solid var(--accent)',
              padding: '6px 16px',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--accent)'
              e.target.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--accent)'
            }}
          >
            Download PDF
          </a>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-mono)',
              fontSize: 18,
              width: 36,
              height: 36,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#fff'
              e.target.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.3)'
              e.target.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            &times;
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 900,
          height: 'calc(100vh - 120px)',
          backgroundColor: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={`${RESUME_URL}#toolbar=0&navpanes=0`}
          title="Jayesh Yadav Resume"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <section
        ref={ref}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
      >
        <div className="flex items-center" style={{ gap: 16, marginBottom: 48 }}>
          <hr className="rule" style={{ flex: 1 }} />
          <span className="section-label">Resume</span>
          <hr className="rule" style={{ flex: 1 }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 480,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          {/* PDF thumbnail preview */}
          <div
            onClick={() => setModalOpen(true)}
            style={{
              width: '100%',
              aspectRatio: '8.5 / 11',
              border: '1px solid var(--rule-color)',
              backgroundColor: '#fff',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
              e.currentTarget.querySelector('.resume-overlay').style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.querySelector('.resume-overlay').style.opacity = '0'
            }}
          >
            <iframe
              src={`${RESUME_URL}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume Preview"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'none',
              }}
            />

            {/* Hover overlay */}
            <div
              className="resume-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.25s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.6)',
                  padding: '10px 24px',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                }}
              >
                Click to View
              </span>
            </div>
          </div>

          {/* Download button */}
          <a
            href={RESUME_URL}
            download="Jayesh_Yadav_Resume.pdf"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--accent)',
              textDecoration: 'none',
              border: '1px solid var(--accent)',
              padding: '10px 28px',
              letterSpacing: '0.08em',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--accent)'
              e.target.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--accent)'
            }}
          >
            Download Resume &darr;
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
