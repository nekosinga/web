import { useEffect, useState } from 'react'
import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

export default function Hero() {
  const metrics = [
    { label: 'Social mentions tracked', value: '15,170/min' },
    { label: 'Tokens analyzed', value: '452+' },
    { label: 'Signals processed', value: '150/sec' }
  ]

  const [currentMetricIndex, setCurrentMetricIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % metrics.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">CRYPTO MARKET INTELLIGENCE</div>
        
        <div className="hero-metric-rotator">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`hero-metric ${index === currentMetricIndex ? 'active' : ''}`}
            >
              {metric.label}: <strong>{metric.value}</strong>
            </div>
          ))}
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

      <div className="hero-visuals">
        <div className="hero-mascot">
          <img src="/nekosinga-logo.png" alt="Neko Singa" className="mascot-image" />
        </div>
        
        <div className="floating-card card-1">
          <div className="card-label">TRENDING</div>
          <div className="card-token-row">
            <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={20} />
            <span className="card-token">$SOL</span>
          </div>
          <div className="card-metric positive">+42.8% mentions</div>
        </div>

        <div className="floating-card card-2">
          <div className="card-label">SENTIMENT</div>
          <div className="card-token-row">
            <TokenIcon symbol="BTC" image={getTokenData('BTC').image} size={20} />
            <span className="card-token">BTC</span>
          </div>
          <div className="card-sentiment">
            <span className="sentiment-badge bullish">Bullish</span>
            <span className="sentiment-value">72%</span>
          </div>
        </div>

        <div className="floating-card card-3">
          <div className="card-label">SOCIAL SIGNAL</div>
          <div className="card-token-row">
            <TokenIcon symbol="PEPE" image={getTokenData('PEPE').image} size={20} />
            <span className="card-token">$PEPE</span>
          </div>
          <div className="card-metric">18.4K mentions</div>
          <div className="card-change positive">↑ 31%</div>
        </div>
      </div>
    </section>
  )
}
