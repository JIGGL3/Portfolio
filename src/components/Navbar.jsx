import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/portfolio'
import s from './Navbar.module.css'

const NAV = ['About','Skills','Projects','Testimonials','Contact']

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [progress, setProgress]   = useState(0)
  const [active, setActive]       = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const el  = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setMenuOpen(false) }

  return (
    <>
      <motion.nav
        className={`${s.nav} ${scrolled ? s.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      >
        <div className={s.inner}>
          <button className={s.logo} onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>
            <span className={s.logoMark}>{personal.nameShort}</span>
          </button>

          <ul className={s.links}>
            {NAV.map(n => (
              <li key={n}>
                <button
                  className={`${s.link} ${active === n.toLowerCase() ? s.active : ''}`}
                  onClick={() => go(n.toLowerCase())}
                >
                  {n}
                  {active === n.toLowerCase() && (
                    <motion.span className={s.underline} layoutId="nav-pill" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <a href={personal.resume} className={`btn btn-gold ${s.resumeBtn}`} download>
            Resume
          </a>

          <button className={s.burger} onClick={() => setMenuOpen(o => !o)} aria-label="menu">
            <span className={`${s.bar} ${menuOpen ? s.b1 : ''}`} />
            <span className={`${s.bar} ${menuOpen ? s.b2 : ''}`} />
            <span className={`${s.bar} ${menuOpen ? s.b3 : ''}`} />
          </button>
        </div>

        {/* Progress bar */}
        <div className={s.progressTrack}>
          <motion.div className={s.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className={s.mobileMenu}
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-16 }} transition={{ duration:0.22 }}>
            {NAV.map((n, i) => (
              <motion.button key={n} className={s.mobileLink}
                onClick={() => go(n.toLowerCase())}
                initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                transition={{ delay: i * 0.05 }}>
                <span className={s.mobileNum}>0{i+1}</span>{n}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
