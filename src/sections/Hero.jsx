import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { personal, typewriterPhrases } from '../data/portfolio'
import s from './Hero.module.css'

const up = (d=0) => ({
  initial: { opacity:0, y:36 },
  animate: { opacity:1, y:0 },
  transition: { duration:0.8, delay:d, ease:[0.22,1,0.36,1] }
})

function Kw({c}) { return <span style={{color:'#C792EA'}}>{c}</span> }
function Fn({c}) { return <span style={{color:'#82AAFF'}}>{c}</span> }
function Str({c}) { return <span style={{color:'#C3E88D'}}>{c}</span> }
function Cm({c}) { return <span style={{color:'var(--text-3)'}}>{c}</span> }
function Nm({c}) { return <span style={{color:'#F78C6C'}}>{c}</span> }
function Row({children}) { return <div style={{lineHeight:'1.9'}}>{children}</div> }

export default function Hero() {
  const typed = useTypewriter(typewriterPhrases)

  return (
    <section className={s.hero} id="hero">
      <motion.div className={s.orb1}
        animate={{ scale:[1,1.15,1], opacity:[0.6,1,0.6] }}
        transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }} />
      <motion.div className={s.orb2}
        animate={{ scale:[1,1.1,1], opacity:[0.4,0.7,0.4] }}
        transition={{ duration:11, repeat:Infinity, ease:'easeInOut', delay:2 }} />

      <div className={s.inner}>
        {/* ── Left text ── */}
        <div className={s.left}>
          <motion.div className={s.badge} {...up(0.1)}>
            <span className={s.badgeDot} />
            Open to opportunities · NIT Trichy
          </motion.div>

          <motion.h1 className={s.name} {...up(0.2)}>
            Ankit<br /><span className={s.nameGold}>Yadav</span>
          </motion.h1>

          <motion.div className={s.roleRow} {...up(0.3)}>
            <span className={s.roleLine} />
            <span className={s.role}>{personal.role}</span>
          </motion.div>

          <motion.p className={s.typeRow} {...up(0.4)}>
            Building&nbsp;
            <span className={s.typed}>{typed}</span>
            <span className={s.cursor} />
          </motion.p>

          <motion.p className={s.bio} {...up(0.5)}>
            MCA student at <strong style={{color:'var(--gold)'}}>NIT Trichy</strong> — passionate about
            full-stack web development, DSA, and competitive programming.
          </motion.p>

          <motion.div className={s.locationRow} {...up(0.52)}>
            <MapPin size={13} style={{color:'var(--gold)'}} />
            <span>{personal.location}</span>
          </motion.div>

          <motion.div className={s.cta} {...up(0.6)}>
            <button className="btn btn-gold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>
              See My Work <ArrowDown size={15} />
            </button>
            <a href={personal.resume} className="btn btn-outline" download>
              Download CV <Download size={15} />
            </a>
          </motion.div>

          <motion.div className={s.statsRow} {...up(0.7)}>
            {personal.stats.map((st, i) => (
              <div key={st.label} className={s.stat}>
                {i > 0 && <div className={s.statDivider} />}
                <span className={s.statVal}>{st.value}</span>
                <span className={s.statLabel}>{st.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: photo + code card ── */}
        <motion.div className={s.right}
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1, delay:0.35, ease:[0.22,1,0.36,1] }}>

          {/* Profile photo */}
          <div className={s.photoWrap}>
            <div className={s.photoGlow} />
            <img src={personal.photo} alt="Ankit Yadav" className={s.photo} />
            <div className={s.photoRing} />
          </div>

          {/* Code card below photo */}
          <div className={s.cardGlow} />
          <div className={s.codeCard}>
            <div className={s.codeBar}>
              <span className={s.dot} style={{background:'#FF5F57'}} />
              <span className={s.dot} style={{background:'#FEBC2E'}} />
              <span className={s.dot} style={{background:'#28C840'}} />
              <span className={s.codeFile}>ankit.js</span>
              <span className={s.codeLang}>JavaScript</span>
            </div>
            <motion.div className={s.scanLine}
              animate={{ y: [0, 200, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />
            <div className={s.codeBody}>
              <Row><Cm c="// NIT Trichy, Tamil Nadu 🇮🇳" /></Row>
              <Row><Kw c="const" /> <Fn c="me" /> = {'{'}</Row>
              <Row>&nbsp;&nbsp;name:&nbsp;&nbsp;<Str c='"Ankit Yadav"' />,</Row>
              <Row>&nbsp;&nbsp;degree: <Str c='"MCA @ NIT Trichy"' />,</Row>
              <Row>&nbsp;&nbsp;cgpa:&nbsp;&nbsp;<Nm c="8.45" />,</Row>
              <Row>&nbsp;&nbsp;loves:&nbsp;&nbsp;[<Str c='"DSA"' />, <Str c='"WebDev"' />],</Row>
              <Row>&nbsp;&nbsp;cr:&nbsp;&nbsp;&nbsp;&nbsp;<Kw c="true" />,</Row>
              <Row>{'}'}</Row>
              <Row>&nbsp;</Row>
              <Row><Fn c="console" />.<Fn c="log" />(<Str c={'"Let\'s build! 🚀"'} />);</Row>
            </div>
          </div>

          {/* Floating pills */}
          <motion.div className={`${s.pill} ${s.pill1}`}
            animate={{ y:[0,-10,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}>
            ⚛️ React
          </motion.div>
          <motion.div className={`${s.pill} ${s.pill2}`}
            animate={{ y:[0,10,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:1 }}>
            ⚡ C++
          </motion.div>
          <motion.div className={`${s.pill} ${s.pill3}`}
            animate={{ y:[0,-7,0] }} transition={{ duration:3.5, repeat:Infinity, ease:'easeInOut', delay:2 }}>
            🟢 Node.js
          </motion.div>
        </motion.div>
      </div>

      <motion.button className={s.scrollHint}
        animate={{ y:[0,8,0] }} transition={{ duration:2, repeat:Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
        <span>scroll</span>
        <ArrowDown size={12} />
      </motion.button>
    </section>
  )
}
