import { useState, useEffect } from 'react'

export function useTypewriter(phrases, typeSpeed = 80, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState('')
  const [pi, setPi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = phrases[pi]
    let t
    if (!deleting && ci < word.length) {
      t = setTimeout(() => setCi(i => i + 1), typeSpeed)
    } else if (!deleting && ci === word.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && ci > 0) {
      t = setTimeout(() => setCi(i => i - 1), deleteSpeed)
    } else {
      setDeleting(false)
      setPi(i => (i + 1) % phrases.length)
    }
    setText(word.slice(0, ci))
    return () => clearTimeout(t)
  }, [ci, deleting, pi, phrases, typeSpeed, deleteSpeed, pause])

  return text
}
