import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import ProjectImage from '../components/ProjectImage'
import s from './Projects.module.css'

const FILTERS = ['All', 'Featured', 'Other']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = projects.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Featured') return p.featured
    return !p.featured
  })

  const featured = visible.filter(p => p.featured)
  const others   = visible.filter(p => !p.featured)

  return (
    <section id="projects" className={s.section}>
      <div className="section-wrapper">

        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}>
          <p className="section-eyebrow">03 / Projects</p>
          <h2 className="section-title">Selected <em>Work</em></h2>
          <div className="section-rule" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div className={s.filters}
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ delay:0.2 }}>
          {FILTERS.map(f => (
            <button key={f}
              className={`${s.filterBtn} ${filter === f ? s.filterOn : ''}`}
              onClick={() => setFilter(f)}>
              {filter === f && <motion.span className={s.filterBg} layoutId="fp" />}
              <span style={{ position:'relative', zIndex:1 }}>{f}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={filter}
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0 }} transition={{ duration:0.35 }}>

            {/* ── Featured: large horizontal cards with image ── */}
            {featured.length > 0 && (
              <div className={s.featuredGrid}>
                {featured.map((p, i) => (
                  <motion.div key={p.id} className={s.featuredCard}
                    initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }} transition={{ duration:0.55, delay:i*0.12 }}
                    whileHover={{ y:-4 }}>

                    {/* Image panel */}
                    <div className={s.imgPanel}>
                      <ProjectImage
                        image={p.image}
                        imageTheme={p.imageTheme}
                        title={p.title}
                        num={p.num}
                        className={s.imgInner}
                      />
                      {/* Overlay on hover */}
                      <div className={s.imgOverlay}>
                        <a href={p.link} target="_blank" rel="noreferrer" className={s.liveBtn}>
                          <ArrowUpRight size={18} /> Live Demo
                        </a>
                      </div>
                    </div>

                    {/* Text panel */}
                    <div className={s.textPanel}>
                      <div className={s.featuredLabel}>
                        <Star size={10} fill="currentColor" /> Featured Project
                      </div>
                      <span className={s.projNum}>{p.num}</span>
                      <h3 className={s.projTitle}>{p.title}</h3>
                      <p className={s.projSubtitle}>{p.subtitle}</p>
                      <p className={s.projDesc}>{p.description}</p>
                      <div className={s.tags}>
                        {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                      <div className={s.cardLinks}>
                        <a href={p.github} target="_blank" rel="noreferrer" className={s.iconBtn}>
                          <Github size={15} /> Code
                        </a>
                        <a href={p.link} target="_blank" rel="noreferrer" className={s.iconBtn}>
                          <ExternalLink size={15} /> Live
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Others: smaller cards with image thumbnail ── */}
            {others.length > 0 && (
              <div className={s.othersGrid}>
                {others.map((p, i) => (
                  <motion.div key={p.id} className={s.otherCard}
                    initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}
                    whileHover={{ y:-5 }}>

                    {/* Image thumbnail */}
                    <div className={s.thumbPanel}>
                      <ProjectImage
                        image={p.image}
                        imageTheme={p.imageTheme}
                        title={p.title}
                        num={p.num}
                        className={s.thumbInner}
                      />
                      <div className={s.thumbOverlay}>
                        <a href={p.link} target="_blank" rel="noreferrer" className={s.thumbLive}>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>

                    <div className={s.otherBody}>
                      <div className={s.otherTop}>
                        <span className={s.projNum}>{p.num}</span>
                        <div style={{ display:'flex', gap:'0.6rem' }}>
                          <a href={p.github} target="_blank" rel="noreferrer" className={s.iconLink}>
                            <Github size={14} />
                          </a>
                          <a href={p.link} target="_blank" rel="noreferrer" className={s.iconLink}>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                      <h3 className={s.otherTitle}>{p.title}</h3>
                      <p className={s.projSubtitle}>{p.subtitle}</p>
                      <p className={s.otherDesc}>{p.description}</p>
                      <div className={s.tags}>
                        {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
