import { useEffect, useRef, useState } from 'react'
import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

const TOKENS = [
  { symbol: 'SOL', mentions: 18.4, change: '+42%' },
  { symbol: 'BTC', mentions: 15.2, change: '+31%' },
  { symbol: 'ETH', mentions: 12.8, change: '+24%' },
  { symbol: 'PEPE', mentions: 9.1, change: '+18%' },
]

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(1)))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return value
}

function TokenRow({ symbol, mentions, change, delay, active }: {
  symbol: string
  mentions: number
  change: string
  delay: number
  active: boolean
}) {
  const count = useCountUp(mentions, active, 1200)

  return (
    <div
      className="preview-token-row"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
      }}
    >
      <span className="preview-rank-dot"></span>
      <TokenIcon symbol={symbol} image={getTokenData(symbol).image} size={18} />
      <span className="preview-token-symbol">${symbol}</span>
      <span className="preview-token-mentions">{count.toFixed(1)}K</span>
      <span className="preview-token-change positive">{change}</span>
      <span className="preview-live-dot"></span>
    </div>
  )
}

function SentimentBar({ active }: { active: boolean }) {
  return (
    <div className="preview-sentiment-bar-track">
      <div
        className="preview-sentiment-bar-fill"
        style={{
          width: active ? '72%' : '0%',
          transition: active ? 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 300ms' : 'none',
        }}
      />
    </div>
  )
}

export default function ProductPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="product" className="product-preview" ref={sectionRef}>
      <div className="section-content">
        <div className="section-header">
          <h2>One dashboard. The signals that matter.</h2>
          <p className="section-description">
            Stop jumping between charts, social feeds, and news tabs. Neko Singa brings the most relevant market signals into one place.
          </p>
        </div>

        <div
          className="product-screenshot"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="browser-frame">
            {/* Browser chrome */}
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-address">app-nekosinga.vercel.app</div>
            </div>

            {/* Dashboard */}
            <div className="preview-dashboard">
              {/* Sidebar */}
              <div className="preview-sidebar">
                <div className="preview-sidebar-logo">
                  <img src="/nekosinga-icon.png" alt="Neko Singa" width={22} height={22} />
                </div>
                <div className="preview-sidebar-nav">
                  {['▦', '↑', '◎', '⊡', '✦'].map((icon, i) => (
                    <div key={i} className={`preview-nav-item ${i === 0 ? 'active' : ''}`}>{icon}</div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="preview-main">
                {/* Top row */}
                <div className="preview-top-row">

                  {/* Trending Tokens panel */}
                  <div className="preview-panel preview-panel-trending">
                    <div className="preview-panel-header">
                      <span className="preview-panel-title">Trending Tokens</span>
                      <span className="preview-panel-badge">LIVE</span>
                    </div>
                    <div className="preview-token-list">
                      {TOKENS.map((t, i) => (
                        <TokenRow
                          key={t.symbol}
                          symbol={t.symbol}
                          mentions={t.mentions}
                          change={t.change}
                          delay={i * 90}
                          active={active}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="preview-right-col">

                    {/* Sentiment panel */}
                    <div className="preview-panel preview-panel-sentiment">
                      <div className="preview-panel-header">
                        <span className="preview-panel-title">Market Sentiment</span>
                      </div>
                      <SentimentBar active={active} />
                      <div className="preview-sentiment-labels">
                        <span className="bullish-label">72% Bullish</span>
                        <span className="bearish-label">28% Bearish</span>
                      </div>
                      <div className="preview-sentiment-stats">
                        <div className="preview-stat">
                          <span className="preview-stat-value">124K</span>
                          <span className="preview-stat-label">Engagement</span>
                        </div>
                        <div className="preview-stat">
                          <span className="preview-stat-value">8.4K</span>
                          <span className="preview-stat-label">Posts</span>
                        </div>
                      </div>
                    </div>

                    {/* News panel */}
                    <div className="preview-panel preview-panel-news">
                      <div className="preview-panel-header">
                        <span className="preview-panel-title">Latest News</span>
                      </div>
                      {[
                        { source: 'CoinDesk', title: 'ETH upgrade goes live on mainnet', time: '2h', symbol: 'ETH' },
                        { source: 'The Block', title: 'SOL DEX hits record $1B volume', time: '4h', symbol: 'SOL' },
                        { source: 'Decrypt', title: 'PEPE surges 31% on social spike', time: '6h', symbol: 'PEPE' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="preview-news-item"
                          style={{
                            opacity: active ? 1 : 0,
                            transition: `opacity 0.4s ease ${300 + i * 100}ms`,
                          }}
                        >
                          <div className="preview-news-meta">
                            <TokenIcon symbol={item.symbol} image={getTokenData(item.symbol).image} size={13} />
                            <span className="preview-news-source">{item.source}</span>
                            <span className="preview-news-time">{item.time} ago</span>
                          </div>
                          <div className="preview-news-title">{item.title}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* AI bar */}
                <div
                  className="preview-ai-bar"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 0.5s ease 700ms, transform 0.5s ease 700ms',
                  }}
                >
                  <span className="preview-ai-icon">✦</span>
                  <span className="preview-ai-text">What tokens are gaining the most social momentum today?</span>
                  <div className="preview-ai-chips">
                    {['$SOL +42%', '$PEPE +31%', '$ARB +24%'].map((chip, i) => (
                      <span key={i} className="preview-ai-chip">{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
