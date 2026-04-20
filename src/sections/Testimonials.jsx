import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio'

const C = {
  violet: { bg:'var(--violet-dim)', border:'rgba(139,92,246,0.22)', text:'var(--violet-bright)' },
  amber:  { bg:'var(--gold-dim)',   border:'var(--gold-glow)',       text:'var(--gold)' },
  rose:   { bg:'var(--magenta-dim)',border:'rgba(236,72,153,0.2)',   text:'var(--magenta)' },
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" style={{ background:'var(--depth)' }}>
      <div className="section-wrapper">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">04 / Testimonials</p>
          <h2 className="section-title">What People <em>Say</em></h2>
          <div className="section-rule" />
        </motion.div>

        {/* Desktop grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }}
          className="testimonials-desktop">
          {testimonials.map((t, i) => {
            const c = C[t.color] || C.violet
            return (
              <motion.div key={t.name} className="card"
                style={{ padding:'2rem', borderRadius:16 }}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.12 }}
                whileHover={{ y:-5 }}>
                <Quote size={28} style={{ color:c.text, opacity:0.4, marginBottom:'1rem' }} />
                <p style={{ fontSize:'0.86rem', color:'var(--text-2)', lineHeight:'1.95',
                  marginBottom:'1.75rem', fontWeight:300 }}>{t.quote}</p>
                <div style={{ display:'flex', alignItems:'center', gap:'0.85rem' }}>
                  <div style={{
                    width:44, height:44, borderRadius:'50%',
                    background:c.bg, border:`1px solid ${c.border}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontWeight:700, fontSize:'0.75rem', color:c.text, flexShrink:0
                  }}>{t.initials}</div>
                  <div>
                    <p style={{ fontSize:'0.84rem', fontWeight:700 }}>{t.name}</p>
                    <p style={{ fontSize:'0.7rem', color:c.text, marginTop:2 }}>{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile carousel */}
        <div className="testimonials-mobile">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="card" style={{ padding:'2rem', borderRadius:16 }}
              initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:-40 }} transition={{ duration:0.3 }}>
              <Quote size={28} style={{ color:'var(--gold)', opacity:0.4, marginBottom:'1rem' }} />
              <p style={{ fontSize:'0.88rem', color:'var(--text-2)', lineHeight:'1.95',
                marginBottom:'1.75rem', fontWeight:300 }}>{testimonials[active].quote}</p>
              <div style={{ display:'flex', alignItems:'center', gap:'0.85rem' }}>
                <div style={{
                  width:44, height:44, borderRadius:'50%',
                  background:'var(--gold-dim)', border:'1px solid var(--gold-glow)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:700, fontSize:'0.75rem', color:'var(--gold)'
                }}>{testimonials[active].initials}</div>
                <div>
                  <p style={{ fontSize:'0.84rem', fontWeight:700 }}>{testimonials[active].name}</p>
                  <p style={{ fontSize:'0.7rem', color:'var(--gold)', marginTop:2 }}>
                    {testimonials[active].role} · {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginTop:'1.5rem' }}>
            <button onClick={prev} style={{ background:'var(--surface)', border:'1px solid var(--rim)',
              color:'var(--text-2)', width:36, height:36, borderRadius:8, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--rim)'; e.currentTarget.style.color='var(--text-2)' }}>
              <ChevronLeft size={16}/>
            </button>
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{ width: i===active?20:7, height:7, borderRadius:100, border:'none', cursor:'pointer',
                  background: i===active ? 'var(--gold)' : 'var(--rim)', transition:'all 0.2s' }} />
            ))}
            <button onClick={next} style={{ background:'var(--surface)', border:'1px solid var(--rim)',
              color:'var(--text-2)', width:36, height:36, borderRadius:8, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--rim)'; e.currentTarget.style.color='var(--text-2)' }}>
              <ChevronRight size={16}/>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .testimonials-mobile { display: none; }
        @media (max-width: 820px) {
          .testimonials-desktop { display: none !important; }
          .testimonials-mobile { display: block; }
        }
      `}</style>
    </section>
  )
}
