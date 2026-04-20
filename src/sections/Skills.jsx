import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const ICON = { 'Languages':'⌨️', 'Frontend':'🎨', 'Backend':'⚙️', 'Tools/Cloud':'☁️' }

export default function Skills() {
  return (
    <section id="skills" style={{ background:'var(--depth)' }}>
      <div className="section-wrapper">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">02 / Skills</p>
          <h2 className="section-title">My <em>Stack</em></h2>
          <div className="section-rule" />
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.25rem' }}>
          {skills.map((cat, ci) => (
            <motion.div key={cat.category} className="card"
              style={{ padding:'2rem' }}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:ci*0.1 }}
              whileHover={{ y:-4 }}>

              <div style={{ display:'flex', alignItems:'center', gap:'0.6rem',
                marginBottom:'1.25rem', paddingBottom:'1rem', borderBottom:'1px solid var(--rim)' }}>
                <span style={{ fontSize:'1.2rem' }}>{ICON[cat.category] || '🔧'}</span>
                <span style={{ fontWeight:700, fontSize:'0.95rem' }}>{cat.category}</span>
                <span style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'var(--text-3)', marginLeft:'auto' }}>
                  0{ci+1}
                </span>
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem' }}>
                {cat.items.map((skill, si) => (
                  <motion.span key={skill} className="pill"
                    initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }} transition={{ duration:0.3, delay:ci*0.08 + si*0.04 }}
                    whileHover={{ scale:1.05, background:'var(--violet-dim)', borderColor:'var(--violet)' }}
                    style={{ cursor:'default' }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
