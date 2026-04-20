import React from 'react'

// Beautiful auto-generated SVG placeholder per theme
const themes = {
  violet: {
    bg: ['#1A0F3D', '#2D1B69'],
    accent: '#8B5CF6',
    accent2: '#A78BFA',
    grid: 'rgba(139,92,246,0.15)',
    dots: '#6D28D9',
  },
  amber: {
    bg: ['#1C1200', '#2D1E00'],
    accent: '#F5A623',
    accent2: '#FFD07A',
    grid: 'rgba(245,166,35,0.12)',
    dots: '#B45309',
  },
  rose: {
    bg: ['#1F0A14', '#2D1020'],
    accent: '#EC4899',
    accent2: '#F9A8D4',
    grid: 'rgba(236,72,153,0.12)',
    dots: '#9D174D',
  },
  teal: {
    bg: ['#00181A', '#002A2D'],
    accent: '#14B8A6',
    accent2: '#5EEAD4',
    grid: 'rgba(20,184,166,0.12)',
    dots: '#0F766E',
  },
}

function PlaceholderSVG({ theme = 'violet', title = '', num = '01' }) {
  const t = themes[theme] || themes.violet
  const id = `grad-${theme}-${num}`

  return (
    <svg
      viewBox="0 0 480 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
      aria-label={`${title} project preview`}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={t.bg[0]} />
          <stop offset="100%" stopColor={t.bg[1]} />
        </linearGradient>
        <radialGradient id={`orb-${id}`} cx="70%" cy="30%" r="50%">
          <stop offset="0%" stopColor={t.accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={t.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`orb2-${id}`} cx="20%" cy="80%" r="40%">
          <stop offset="0%" stopColor={t.accent2} stopOpacity="0.12" />
          <stop offset="100%" stopColor={t.accent2} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="480" height="260" fill={`url(#${id})`} />
      <rect width="480" height="260" fill={`url(#orb-${id})`} />
      <rect width="480" height="260" fill={`url(#orb2-${id})`} />

      {/* Grid lines */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <line key={`v${i}`} x1={i*60} y1="0" x2={i*60} y2="260" stroke={t.grid} strokeWidth="1" />
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={`h${i}`} x1="0" y1={i*65} x2="480" y2={i*65} stroke={t.grid} strokeWidth="1" />
      ))}

      {/* Decorative corner bracket */}
      <path d="M20,20 L20,36 M20,20 L36,20" stroke={t.accent} strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M460,20 L444,20 M460,20 L460,36" stroke={t.accent} strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M20,240 L20,224 M20,240 L36,240" stroke={t.accent} strokeWidth="2" fill="none" opacity="0.7"/>
      <path d="M460,240 L444,240 M460,240 L460,224" stroke={t.accent} strokeWidth="2" fill="none" opacity="0.7"/>

      {/* Mock browser bar */}
      <rect x="60" y="50" width="360" height="160" rx="8" fill="rgba(0,0,0,0.5)" stroke={t.accent} strokeWidth="1" strokeOpacity="0.3"/>
      <rect x="60" y="50" width="360" height="28" rx="8" fill="rgba(0,0,0,0.7)"/>
      <rect x="60" y="64" width="360" height="14" fill="rgba(0,0,0,0.7)"/>
      {/* Browser dots */}
      <circle cx="78" cy="64" r="4" fill="#FF5F57" />
      <circle cx="90" cy="64" r="4" fill="#FEBC2E" />
      <circle cx="102" cy="64" r="4" fill="#28C840" />
      {/* URL bar */}
      <rect x="118" y="58" width="200" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
      <text x="128" y="68" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,0.3)">localhost:3000/{title.toLowerCase().replace(' ','')}</text>

      {/* Mock UI content */}
      <rect x="76" y="92" width="100" height="8" rx="4" fill={t.accent} fillOpacity="0.7"/>
      <rect x="76" y="108" width="260" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
      <rect x="76" y="120" width="220" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
      <rect x="76" y="132" width="240" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>

      {/* Buttons mock */}
      <rect x="76" y="150" width="70" height="22" rx="6" fill={t.accent} fillOpacity="0.85"/>
      <rect x="156" y="150" width="70" height="22" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

      {/* Side card mock */}
      <rect x="300" y="92" width="104" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke={t.accent} strokeWidth="1" strokeOpacity="0.25"/>
      <rect x="312" y="104" width="50" height="5" rx="2.5" fill={t.accent2} fillOpacity="0.5"/>
      <rect x="312" y="116" width="80" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="312" y="126" width="65" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
      <circle cx="370" cy="152" r="10" fill={t.accent} fillOpacity="0.2" stroke={t.accent} strokeWidth="1" strokeOpacity="0.4"/>
      <text x="366" y="156" fontFamily="monospace" fontSize="8" fill={t.accent} fillOpacity="0.8">↗</text>

      {/* Project num watermark */}
      <text x="420" y="240" fontFamily="monospace" fontSize="36" fontWeight="900"
        fill={t.accent} fillOpacity="0.06" textAnchor="middle">{num}</text>
    </svg>
  )
}

export default function ProjectImage({ image, imageTheme, title, num, className = '' }) {
  if (image) {
    return (
      <div className={className} style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
        <img
          src={image}
          alt={`${title} screenshot`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.5s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    )
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <PlaceholderSVG theme={imageTheme} title={title} num={num} />
    </div>
  )
}
