import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { personal } from '../data/portfolio'

const NAV = ['About','Skills','Projects','Testimonials','Contact']

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <footer style={{
      position:'relative', zIndex:1,
      background:'var(--void)',
      borderTop:'1px solid var(--rim)',
    }}>
      {/* Top bar */}
      <div style={{
        maxWidth:1160, margin:'0 auto', padding:'3rem 2rem 2rem',
        display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'2rem', alignItems:'start'
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily:'var(--font)', fontWeight:900, fontSize:'1.3rem',
            letterSpacing:'-0.04em', marginBottom:'0.75rem',
            background:'linear-gradient(135deg, var(--gold), var(--violet-bright))',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            display:'inline-block'
          }}>
            {personal.name}
          </div>
          <p style={{ fontSize:'0.82rem', color:'var(--text-3)', lineHeight:1.7,
            maxWidth:240, fontWeight:300 }}>
            Building software that matters, one commit at a time.
          </p>
        </div>

        {/* Nav links */}
        <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem', alignItems:'center' }}>
          <p style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'var(--text-3)',
            letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'0.25rem' }}>
            Navigation
          </p>
          {NAV.map(n => (
            <button key={n} onClick={() => go(n.toLowerCase())}
              style={{ background:'none', border:'none', cursor:'pointer',
                fontFamily:'var(--font)', fontSize:'0.82rem', fontWeight:500,
                color:'var(--text-2)', transition:'color 0.2s', padding:'0.1rem 0' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>
              {n}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div style={{ textAlign:'right' }}>
          <p style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'var(--text-3)',
            letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'0.75rem' }}>
            Get In Touch
          </p>
          <a href={`mailto:${personal.email}`}
            style={{ fontSize:'0.84rem', color:'var(--gold)', display:'block', marginBottom:'0.4rem',
              transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity='1'}>
            {personal.email}
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer"
            style={{ fontSize:'0.82rem', color:'var(--text-2)', display:'block', marginBottom:'0.3rem',
              transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
            style={{ fontSize:'0.82rem', color:'var(--text-2)', display:'block',
              transition:'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color='var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color='var(--text-2)'}>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{
        maxWidth:1160, margin:'0 auto', padding:'1.25rem 2rem',
        borderTop:'1px solid var(--rim)',
        display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'0.75rem'
      }}>
        <p style={{ fontFamily:'var(--mono)', fontSize:'0.67rem', color:'var(--text-3)' }}>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p style={{ fontFamily:'var(--mono)', fontSize:'0.67rem', color:'var(--text-3)',
          display:'flex', alignItems:'center', gap:'0.35rem' }}>
          Built with <Heart size={11} style={{ color:'var(--gold)', fill:'var(--gold)' }} /> using React + Framer Motion
        </p>
        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          style={{
            background:'var(--surface)', border:'1px solid var(--rim)',
            color:'var(--text-2)', fontFamily:'var(--mono)', fontSize:'0.62rem',
            letterSpacing:'0.1em', textTransform:'uppercase',
            padding:'0.45rem 1rem', borderRadius:8, cursor:'pointer',
            transition:'border-color 0.2s, color 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--rim)'; e.currentTarget.style.color='var(--text-2)' }}>
          ↑ Back to top
        </button>
      </div>
    </footer>
  )
}
