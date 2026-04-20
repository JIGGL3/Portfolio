import React from 'react'
import { motion } from 'framer-motion'
import { personal, positions, achievements } from '../data/portfolio'

export function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">01 / About</p>
          <h2 className="section-title">Who I <em>Am</em></h2>
          <div className="section-rule" />
        </motion.div>

        {/* Bio + photo row */}
        <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:'4rem', alignItems:'start', marginBottom:'4rem' }}>
          <div>
            {personal.bio.map((p, i) => (
              <motion.p key={i} style={{ fontSize:'0.92rem', color:'var(--text-2)', lineHeight:'1.9',
                marginBottom:'1.25rem', fontWeight:300 }}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
                {p}
              </motion.p>
            ))}

            {/* Achievements */}
            <motion.div style={{ marginTop:'1.5rem', padding:'1.25rem 1.5rem',
              background:'var(--surface)', border:'1px solid var(--rim)', borderRadius:12 }}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:0.35 }}>
              <p style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:'var(--gold)',
                letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'0.75rem' }}>
                Achievements
              </p>
              {achievements.map((a, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.75rem',
                  fontSize:'0.84rem', color:'var(--text-2)', marginBottom: i < achievements.length-1 ? '0.5rem' : 0 }}>
                  <span style={{ fontSize:'1rem' }}>{a.icon}</span>
                  {a.text}
                </div>
              ))}
            </motion.div>

            <motion.div style={{ display:'flex', gap:'1rem', marginTop:'1.5rem' }}
              initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.4 }}>
              <a href={`mailto:${personal.email}`} className="btn btn-gold">Say Hello</a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            </motion.div>
          </div>

          {/* Right — photo + stats */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {/* Photo card */}
            <motion.div style={{ position:'relative', borderRadius:20, overflow:'hidden',
              border:'1px solid var(--rim-bright)', background:'var(--surface2)' }}
              initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ duration:0.5 }}>
              <img src={personal.photo} alt="Ankit Yadav"
                style={{ width:'100%', height:280, objectFit:'cover', objectPosition:'top center', display:'block' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0,
                background:'linear-gradient(to top, rgba(8,6,15,0.95), transparent)',
                padding:'1.5rem 1.25rem 1rem' }}>
                <p style={{ fontFamily:'var(--font)', fontWeight:800, fontSize:'1.1rem', letterSpacing:'-0.03em' }}>
                  Ankit Yadav
                </p>
                <p style={{ fontFamily:'var(--mono)', fontSize:'0.68rem', color:'var(--gold)', marginTop:2 }}>
                  MCA · NIT Trichy · CGPA 8.45
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.65rem' }}>
              {personal.stats.map((st, i) => (
                <motion.div key={st.label} className="card"
                  style={{ padding:'1.25rem', textAlign:'center' }}
                  initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
                  viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}
                  whileHover={{ y:-3 }}>
                  <div style={{ fontFamily:'var(--font)', fontSize:'1.8rem', fontWeight:900,
                    background:'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>
                    {st.value}
                  </div>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:'var(--text-3)',
                    textTransform:'uppercase', letterSpacing:'0.12em', marginTop:'0.35rem' }}>
                    {st.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Positions of Responsibility */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p style={{ fontFamily:'var(--mono)', fontSize:'0.65rem', color:'var(--gold)',
            letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'1.5rem',
            display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <span style={{ width:'1.5rem', height:'1px', background:'var(--gold)', display:'inline-block' }} />
            Positions of Responsibility
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1rem' }}>
            {positions.map((pos, i) => (
              <motion.div key={pos.title} className="card"
                style={{ padding:'1.5rem', borderRadius:14 }}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                whileHover={{ y:-4 }}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'0.85rem' }}>
                  <span style={{ fontSize:'1.5rem', flexShrink:0 }}>{pos.icon}</span>
                  <div>
                    <p style={{ fontWeight:700, fontSize:'0.9rem', letterSpacing:'-0.01em', marginBottom:'0.15rem' }}>
                      {pos.title}
                    </p>
                    <p style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:'var(--gold)',
                      marginBottom:'0.5rem' }}>{pos.org} · {pos.period}</p>
                    <p style={{ fontSize:'0.8rem', color:'var(--text-2)', lineHeight:1.7, fontWeight:300 }}>
                      {pos.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
