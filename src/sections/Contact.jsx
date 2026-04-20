import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { personal } from '../data/portfolio'

const SOCIALS = [
  { icon: Mail,     label:'Email',    sub: personal.email,      href:`mailto:${personal.email}` },
  { icon: Github,   label:'GitHub',   sub:'@JIGGL3',       href:personal.github },
  { icon: Linkedin, label:'LinkedIn', sub:'in/Ankit Yadav',     href:personal.linkedin },
  { icon: FileText, label:'Resume',   sub:'Download PDF',        href:personal.resume, download:true },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    // 👇 Replace this with EmailJS / Formspree / your API
    await new Promise(r => setTimeout(r, 1400))
    setStatus('sent')
    setForm({ name:'', email:'', subject:'', message:'' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact">
      <div className="section-wrapper">
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">05 / Contact</p>
          <h2 className="section-title">Let's <em>Connect</em></h2>
          <div className="section-rule" />
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:'4rem', alignItems:'start' }}>

          {/* Left */}
          <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
            <h3 style={{ fontFamily:'var(--font)', fontSize:'clamp(2rem,3.5vw,3rem)',
              fontWeight:900, letterSpacing:'-0.04em', lineHeight:1.05, marginBottom:'1.25rem' }}>
              Got an idea?<br/>Let's build<br/>
              <span style={{ color:'var(--gold)' }}>something great.</span>
            </h3>
            <p style={{ fontSize:'0.9rem', color:'var(--text-2)', lineHeight:1.85,
              marginBottom:'2.5rem', fontWeight:300, maxWidth:360 }}>
              Open to full-time roles, internships, and exciting freelance projects.
              I typically respond within 24 hours.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'0.65rem' }}>
              {SOCIALS.map(s => (
                <motion.a key={s.label} href={s.href}
                  target={s.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  download={s.download || undefined}
                  className="card"
                  style={{ display:'flex', alignItems:'center', gap:'1rem',
                    padding:'1rem 1.25rem', borderRadius:12, textDecoration:'none' }}
                  whileHover={{ x:6, borderColor:'var(--rim-bright)' }}>
                  <div style={{ width:38, height:38, borderRadius:10,
                    background:'var(--gold-dim)', border:'1px solid var(--gold-glow)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'var(--gold)', flexShrink:0 }}>
                    <s.icon size={15} />
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:'0.65rem', color:'var(--text-3)', letterSpacing:'0.1em',
                      textTransform:'uppercase', fontFamily:'var(--mono)' }}>{s.label}</div>
                    <div style={{ fontSize:'0.82rem', color:'var(--text)', marginTop:2 }}>{s.sub}</div>
                  </div>
                  <ArrowRight size={14} style={{ color:'var(--text-3)' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }}>
            <div className="card" style={{ borderRadius:20, overflow:'hidden' }}>
              {/* Card header */}
              <div style={{ background:'var(--surface2)', borderBottom:'1px solid var(--rim)',
                padding:'1rem 1.5rem', display:'flex', alignItems:'center', gap:'6px' }}>
                <span style={{ width:10, height:10, borderRadius:'50%', background:'#FF5F57' }} />
                <span style={{ width:10, height:10, borderRadius:'50%', background:'#FEBC2E' }} />
                <span style={{ width:10, height:10, borderRadius:'50%', background:'#28C840' }} />
                <span style={{ fontFamily:'var(--mono)', fontSize:'0.68rem', color:'var(--text-3)', marginLeft:'0.5rem' }}>
                  new_message.js
                </span>
              </div>

              {status === 'sent' ? (
                <motion.div style={{ display:'flex', flexDirection:'column', alignItems:'center',
                  justifyContent:'center', gap:'1rem', padding:'4rem 2rem', textAlign:'center', minHeight:320 }}
                  initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}>
                  <CheckCircle size={48} style={{ color:'var(--gold)' }} />
                  <h4 style={{ fontFamily:'var(--font)', fontSize:'1.5rem', fontWeight:800 }}>Message sent!</h4>
                  <p style={{ fontSize:'0.86rem', color:'var(--text-2)' }}>
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} style={{ padding:'1.75rem', display:'flex', flexDirection:'column', gap:'1.1rem' }}>
                  {[
                    { name:'name',    label:'Name',    type:'text',  placeholder:'Your name' },
                    { name:'email',   label:'Email',   type:'email', placeholder:'your@email.com' },
                    { name:'subject', label:'Subject', type:'text',  placeholder:"What's this about?" },
                  ].map(f => (
                    <div key={f.name} style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                      <label style={{ fontFamily:'var(--mono)', fontSize:'0.63rem', color:'var(--gold)',
                        letterSpacing:'0.14em', textTransform:'uppercase' }}>{f.label}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder}
                        value={form[f.name]} onChange={set} required
                        style={{ background:'var(--surface2)', border:'1px solid var(--rim)',
                          color:'var(--text)', fontFamily:'var(--font)', fontSize:'0.88rem',
                          padding:'0.75rem 1rem', borderRadius:10, outline:'none', width:'100%',
                          transition:'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor='var(--gold)'}
                        onBlur={e => e.target.style.borderColor='var(--rim)'}
                      />
                    </div>
                  ))}
                  <div style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                    <label style={{ fontFamily:'var(--mono)', fontSize:'0.63rem', color:'var(--gold)',
                      letterSpacing:'0.14em', textTransform:'uppercase' }}>Message</label>
                    <textarea name="message" placeholder="Tell me about your project..." rows={4}
                      value={form.message} onChange={set} required
                      style={{ background:'var(--surface2)', border:'1px solid var(--rim)',
                        color:'var(--text)', fontFamily:'var(--font)', fontSize:'0.88rem',
                        padding:'0.75rem 1rem', borderRadius:10, outline:'none', width:'100%',
                        resize:'vertical', minHeight:100, transition:'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor='var(--gold)'}
                      onBlur={e => e.target.style.borderColor='var(--rim)'}
                    />
                  </div>
                  <motion.button type="submit" className="btn btn-gold"
                    style={{ width:'100%', justifyContent:'center', fontSize:'0.85rem' }}
                    disabled={status==='sending'}
                    whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}>
                    {status==='sending'
                      ? <span style={{ width:16, height:16, border:'2px solid var(--void)',
                          borderTopColor:'transparent', borderRadius:'50%',
                          animation:'spin 0.7s linear infinite', display:'inline-block' }} />
                      : <><Send size={15}/> Send Message</>}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
