import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { internships } from '../data/portfolio'

const COLOR_MAP = {
  violet: { accent:'var(--violet)', dim:'var(--violet-dim)', border:'rgba(139,92,246,0.25)' },
  amber:  { accent:'var(--gold)',   dim:'var(--gold-dim)',   border:'var(--gold-glow)' },
}

export default function Internships() {
  return (
    <section id="internships">
      <div className="section-wrapper">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">04 / Experience</p>
          <h2 className="section-title">Work <em>Experience</em></h2>
          <div className="section-rule" />
        </motion.div>

        <div style={{ position:'relative', paddingLeft:'2.5rem' }}>
          {/* Timeline line */}
          <motion.div style={{
            position:'absolute', left:10, top:0, bottom:0, width:1,
            background:'linear-gradient(to bottom, var(--gold), rgba(245,166,35,0.05))',
            transformOrigin:'top'
          }}
            initial={{ scaleY:0 }} whileInView={{ scaleY:1 }}
            viewport={{ once:true }} transition={{ duration:1.2, ease:[0.22,1,0.36,1] }} />

          <div style={{ display:'flex', flexDirection:'column', gap:'2rem' }}>
            {internships.map((job, i) => {
              const c = COLOR_MAP[job.color] || COLOR_MAP.violet
              return (
                <motion.div key={job.company}
                  initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, margin:'-60px' }}
                  transition={{ duration:0.6, delay:i*0.15, ease:[0.22,1,0.36,1] }}>

                  {/* Timeline dot */}
                  <motion.div style={{
                    position:'absolute', left:2, marginTop:'1.75rem',
                    width:18, height:18, borderRadius:'50%',
                    background:'var(--surface)', border:`2px solid ${c.accent}`,
                    display:'flex', alignItems:'center', justifyContent:'center'
                  }}
                    initial={{ scale:0 }} whileInView={{ scale:1 }}
                    viewport={{ once:true }} transition={{ delay:i*0.15+0.3 }}>
                    <span style={{ width:6, height:6, borderRadius:'50%', background:c.accent }} />
                  </motion.div>

                  <motion.div className="card" style={{ padding:'2rem', borderRadius:16 }}
                    whileHover={{ x:6, borderColor: c.border }}>

                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start',
                      flexWrap:'wrap', gap:'1rem', marginBottom:'1.25rem' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                        {/* Company avatar */}
                        <div style={{
                          width:48, height:48, borderRadius:12,
                          background:c.dim, border:`1px solid ${c.border}`,
                          display:'flex', alignItems:'center', justifyContent:'center',
                          fontWeight:900, fontSize:'0.85rem', color:c.accent, flexShrink:0
                        }}>
                          {job.companyShort}
                        </div>
                        <div>
                          <h3 style={{ fontWeight:900, fontSize:'1.2rem', letterSpacing:'-0.03em',
                            color:c.accent }}>{job.company}</h3>
                          <p style={{ fontSize:'0.86rem', color:'var(--text-2)', marginTop:2 }}>{job.role}</p>
                        </div>
                      </div>
                      <div style={{ display:'flex', flexDirection:'column', gap:'0.3rem', alignItems:'flex-end' }}>
                        <span style={{ display:'flex', alignItems:'center', gap:'0.4rem',
                          fontSize:'0.7rem', color:'var(--text-3)', fontFamily:'var(--mono)' }}>
                          <Calendar size={11}/> {job.period}
                        </span>
                        <span style={{ display:'flex', alignItems:'center', gap:'0.4rem',
                          fontSize:'0.7rem', color:'var(--text-3)', fontFamily:'var(--mono)' }}>
                          <MapPin size={11}/> {job.location}
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize:'0.85rem', color:'var(--text-2)', lineHeight:'1.9',
                      marginBottom:'1.25rem', fontWeight:300 }}>{job.description}</p>

                    <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
                      {job.tags.map(t => (
                        <span key={t} style={{
                          fontFamily:'var(--mono)', fontSize:'0.67rem', padding:'0.25rem 0.7rem',
                          borderRadius:100, background:c.dim, color:c.accent,
                          border:`1px solid ${c.border}`
                        }}>{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
