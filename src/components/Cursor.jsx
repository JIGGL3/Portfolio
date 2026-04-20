import React, { useEffect, useRef, useState } from 'react'

// Uses RAF + direct DOM manipulation — zero React re-renders, zero lag
export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0   // mouse pos
    let rx = 0, ry = 0   // ring pos (lerped)
    let raf = null

    const onMove = e => {
      mx = e.clientX
      my = e.clientY
      // Dot moves instantly via transform — GPU composited
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
      setVisible(true)
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      // Ring smoothly follows at 12% per frame (~8px lag at fast speed)
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }

    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onDown   = () => setClicked(true)
    const onUp     = () => setClicked(false)

    // Detect hoverable elements
    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => setHovering(true),  { passive: true })
        el.addEventListener('mouseleave', () => setHovering(false), { passive: true })
      })
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave, { passive: true })
    document.addEventListener('mouseenter', onEnter, { passive: true })
    document.addEventListener('mousedown',  onDown,  { passive: true })
    document.addEventListener('mouseup',    onUp,    { passive: true })

    raf = requestAnimationFrame(tick)
    addHover()

    // Re-scan for new elements (sections load after mount)
    const rescan = setInterval(addHover, 2000)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
      cancelAnimationFrame(raf)
      clearInterval(rescan)
    }
  }, [])

  return (
    <>
      <style>{`
        @media (pointer: coarse) { .cursor-dot, .cursor-ring { display: none !important; } }
        * { cursor: none !important; }
      `}</style>

      {/* Dot — instant */}
      <div ref={dotRef} className="cursor-dot" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99999,
        width:  clicked ? '6px'  : hovering ? '6px'  : '8px',
        height: clicked ? '6px'  : hovering ? '6px'  : '8px',
        borderRadius: '50%',
        background: hovering ? 'var(--void)' : 'var(--gold)',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        willChange: 'transform',
        transition: 'width 0.2s, height 0.2s, background 0.2s, opacity 0.3s',
      }} />

      {/* Ring — lerped */}
      <div ref={ringRef} className="cursor-ring" style={{
        position: 'fixed', top: 0, left: 0, zIndex: 99998,
        width:  hovering ? '44px' : clicked ? '28px' : '36px',
        height: hovering ? '44px' : clicked ? '28px' : '36px',
        borderRadius: '50%',
        border: `1.5px solid ${hovering ? 'var(--gold)' : 'rgba(245,166,35,0.5)'}`,
        background: hovering ? 'rgba(245,166,35,0.08)' : 'transparent',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        willChange: 'transform',
        transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s, background 0.25s, opacity 0.3s',
      }} />
    </>
  )
}
