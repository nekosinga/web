import { useEffect, useState, useRef } from 'react'

const METRICS = [
  'Social mentions tracked: 15,170/min',
  'Tokens analyzed: 452+',
  'Signals processed: 150/sec',
]

const TYPING_SPEED = 45    // ms per character
const DELETING_SPEED = 25  // ms per character
const PAUSE_AFTER_TYPE = 1800  // ms before deleting
const PAUSE_AFTER_DELETE = 400 // ms before typing next

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [metricIndex, setMetricIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Cursor blink — independent of typing state
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    const current = METRICS[metricIndex]

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, TYPING_SPEED)
      } else {
        // Fully typed — pause then start deleting
        timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, DELETING_SPEED)
      } else {
        // Fully deleted — pause then move to next
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(false)
          setMetricIndex((prev) => (prev + 1) % METRICS.length)
        }, PAUSE_AFTER_DELETE)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayed, isDeleting, metricIndex])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">CRYPTO MARKET INTELLIGENCE</div>

        <div className="hero-typewriter">
          <span className="typewriter-text">{displayed}</span>
          <span className={`typewriter-cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
        </div>

        <h1 className="hero-headline">
          Know what the crypto market is talking about.
        </h1>

        <p className="hero-description">
          Track trending tokens, social sentiment, news, and market signals in one focused intelligence dashboard.
        </p>

        <div className="hero-cta">
          <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
            Explore Neko Singa →
          </a>
          <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-large">
            See Trending Tokens
          </a>
        </div>

        <div className="hero-trust">
          <span>Real-time signals from social activity, market data, and AI analysis</span>
        </div>
      </div>
    </section>
  )
}
