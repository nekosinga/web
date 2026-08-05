import { useEffect, useState } from 'react'
import type { Metrics } from '@/types/landing'

export default function MetricTicker() {
  const [metrics, setMetrics] = useState<Metrics>({
    mentions: 15234,
    tokens: 487,
    signals: 142
  })

  useEffect(() => {
    // Simulate live metrics
    const interval = setInterval(() => {
      setMetrics({
        mentions: Math.floor(Math.random() * 1000) + 15000,
        tokens: Math.floor(Math.random() * 100) + 400,
        signals: Math.floor(Math.random() * 50) + 120
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="metric-ticker">
      <div className="metric-ticker-content">
        <span className="metric-item">
          Social mentions tracked: <strong>{metrics.mentions.toLocaleString()}/min</strong>
        </span>
        <span className="metric-separator">•</span>
        <span className="metric-item">
          Tokens analyzed: <strong>{metrics.tokens}+</strong>
        </span>
        <span className="metric-separator">•</span>
        <span className="metric-item">
          Signals processed: <strong>{metrics.signals}/sec</strong>
        </span>
      </div>
    </div>
  )
}
