import { useEffect, useRef, useState, useCallback } from 'react'
import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  'Trending Tokens',
  'Smart Stats',
  'Top Mentions',
  'Multi Keyword Search',
  'Event Summary',
  'Trending Contracts',
] as const

type Tab = typeof TABS[number]

// ─── Individual tab content panels ───────────────────────────────────────────

function TrendingTokensPanel() {
  const rows = [
    { symbol: 'SOL',  name: 'Solana',   mentions: '18.4K', change: '+42%', rank: 1 },
    { symbol: 'BTC',  name: 'Bitcoin',  mentions: '15.2K', change: '+31%', rank: 2 },
    { symbol: 'ETH',  name: 'Ethereum', mentions: '12.8K', change: '+24%', rank: 3 },
    { symbol: 'PEPE', name: 'Pepe',     mentions: '9.1K',  change: '+18%', rank: 4 },
    { symbol: 'ARB',  name: 'Arbitrum', mentions: '7.3K',  change: '+12%', rank: 5 },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Trending Tokens</span>
        <span className="tab-live-badge">LIVE</span>
      </div>
      <div className="tab-panel-cols">
        <span className="col-label">#</span>
        <span className="col-label">Token</span>
        <span className="col-label right">Mentions</span>
        <span className="col-label right">24h</span>
        <span className="col-label right">Signal</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.symbol} className="tab-token-row" style={{ animationDelay: `${i * 60}ms` }}>
          <span className="tab-rank">{r.rank}</span>
          <span className="tab-token-identity">
            <TokenIcon symbol={r.symbol} image={getTokenData(r.symbol).image} size={20} />
            <span className="tab-token-symbol">{r.name}</span>
            <span className="tab-token-ticker">${r.symbol}</span>
          </span>
          <span className="tab-mentions">{r.mentions}</span>
          <span className="tab-change positive">{r.change}</span>
          <span className="tab-signal-dot"></span>
        </div>
      ))}
    </div>
  )
}

function SmartStatsPanel() {
  const stats = [
    { label: 'Total Mentions',    value: '124.8K', sub: 'Last 24h',      up: true  },
    { label: 'Bullish Sentiment', value: '72%',    sub: '+8% vs yesterday', up: true  },
    { label: 'Active Tokens',     value: '452',    sub: 'Tracked now',   up: true  },
    { label: 'Bearish Signals',   value: '14',     sub: 'Flagged tokens', up: false },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Smart Stats</span>
        <span className="tab-live-badge">LIVE</span>
      </div>
      <div className="tab-stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="tab-stat-card" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="tab-stat-label">{s.label}</div>
            <div className={`tab-stat-value ${s.up ? 'positive' : 'negative'}`}>{s.value}</div>
            <div className="tab-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="tab-sentiment-bar-wrap">
        <div className="tab-sb-label">Market Sentiment</div>
        <div className="tab-sb-track">
          <div className="tab-sb-fill" style={{ width: '72%' }} />
        </div>
        <div className="tab-sb-ends">
          <span className="positive">72% Bullish</span>
          <span className="negative">28% Bearish</span>
        </div>
      </div>
    </div>
  )
}

function TopMentionsPanel() {
  const items = [
    { symbol: 'SOL',  ticker: '$SOL',  count: '18,412', pct: 92 },
    { symbol: 'BTC',  ticker: '$BTC',  count: '15,280', pct: 76 },
    { symbol: 'ETH',  ticker: '$ETH',  count: '12,804', pct: 64 },
    { symbol: 'PEPE', ticker: '$PEPE', count: '9,103',  pct: 46 },
    { symbol: 'ARB',  ticker: '$ARB',  count: '7,341',  pct: 37 },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Top Mentions</span>
        <span className="tab-period-badge">24h</span>
      </div>
      {items.map((item, i) => (
        <div key={item.symbol} className="tab-mention-row" style={{ animationDelay: `${i * 60}ms` }}>
          <TokenIcon symbol={item.symbol} image={getTokenData(item.symbol).image} size={18} />
          <span className="tab-mention-ticker">{item.ticker}</span>
          <div className="tab-mention-bar-wrap">
            <div className="tab-mention-bar" style={{ width: `${item.pct}%` }} />
          </div>
          <span className="tab-mention-count">{item.count}</span>
        </div>
      ))}
    </div>
  )
}

function MultiKeywordPanel() {
  const keywords = ['solana', 'bullrun', 'defi summer']
  const results = [
    { kw: 'solana',    count: '12.4K', change: '+38%', color: '#F97316' },
    { kw: 'bullrun',   count: '8.1K',  change: '+22%', color: '#3B82F6' },
    { kw: 'defi summer', count: '5.7K', change: '+15%', color: '#8B5CF6' },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Multi Keyword Search</span>
      </div>
      <div className="tab-keyword-chips">
        {keywords.map((k, i) => (
          <span key={i} className="tab-keyword-chip">{k} ×</span>
        ))}
        <span className="tab-keyword-add">+ Add keyword</span>
      </div>
      <div className="tab-kw-results">
        {results.map((r, i) => (
          <div key={i} className="tab-kw-row" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="tab-kw-dot" style={{ background: r.color }} />
            <span className="tab-kw-label">{r.kw}</span>
            <div className="tab-kw-bar-wrap">
              <div className="tab-kw-bar" style={{ width: `${60 + i * 15}%`, background: r.color + '33', borderColor: r.color }} />
            </div>
            <span className="tab-kw-count">{r.count}</span>
            <span className="tab-change positive">{r.change}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventSummaryPanel() {
  const events = [
    {
      title: 'ETH Pectra Upgrade Live',
      summary: 'Ethereum\'s Pectra upgrade activated on mainnet. Social mentions spiked 340% within 2 hours.',
      time: '2h ago',
      symbol: 'ETH',
      impact: 'High',
    },
    {
      title: 'SOL DEX Volume Record',
      summary: 'Solana-based DEXs hit $1.2B in 24h volume. Community discussion trending across X and Farcaster.',
      time: '5h ago',
      symbol: 'SOL',
      impact: 'Medium',
    },
    {
      title: 'PEPE Social Surge',
      summary: 'PEPE token gained 31% in social mentions. Coordinated community campaign detected.',
      time: '8h ago',
      symbol: 'PEPE',
      impact: 'Medium',
    },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Event Summary</span>
        <span className="tab-period-badge">Today</span>
      </div>
      {events.map((e, i) => (
        <div key={i} className="tab-event-row" style={{ animationDelay: `${i * 80}ms` }}>
          <div className="tab-event-top">
            <TokenIcon symbol={e.symbol} image={getTokenData(e.symbol).image} size={16} />
            <span className="tab-event-title">{e.title}</span>
            <span className={`tab-event-impact ${e.impact.toLowerCase()}`}>{e.impact}</span>
            <span className="tab-event-time">{e.time}</span>
          </div>
          <div className="tab-event-summary">{e.summary}</div>
        </div>
      ))}
    </div>
  )
}

function TrendingContractsPanel() {
  const contracts = [
    { address: '0x6982...7855', label: 'PEPE',  chain: 'ETH', mentions: '4.2K', change: '+88%' },
    { address: '7vfCX...Hp2j', label: 'BONK',  chain: 'SOL', mentions: '3.1K', change: '+64%' },
    { address: '0x1f98...0505', label: 'UNI V3', chain: 'ETH', mentions: '2.8K', change: '+41%' },
    { address: 'EPjFW...ut1v', label: 'USDC',  chain: 'SOL', mentions: '2.3K', change: '+29%' },
  ]
  return (
    <div className="tab-panel">
      <div className="tab-panel-header">
        <span className="tab-panel-title">Trending Contract Addresses</span>
        <span className="tab-live-badge">LIVE</span>
      </div>
      <div className="tab-panel-cols">
        <span className="col-label">Contract</span>
        <span className="col-label">Chain</span>
        <span className="col-label right">Mentions</span>
        <span className="col-label right">24h</span>
      </div>
      {contracts.map((c, i) => (
        <div key={i} className="tab-contract-row" style={{ animationDelay: `${i * 70}ms` }}>
          <span className="tab-contract-identity">
            <span className="tab-contract-label">{c.label}</span>
            <span className="tab-contract-address">{c.address}</span>
          </span>
          <span className={`tab-chain-badge chain-${c.chain.toLowerCase()}`}>{c.chain}</span>
          <span className="tab-mentions">{c.mentions}</span>
          <span className="tab-change positive">{c.change}</span>
        </div>
      ))}
    </div>
  )
}

const PANEL_MAP: Record<Tab, React.ReactNode> = {
  'Trending Tokens':      <TrendingTokensPanel />,
  'Smart Stats':          <SmartStatsPanel />,
  'Top Mentions':         <TopMentionsPanel />,
  'Multi Keyword Search': <MultiKeywordPanel />,
  'Event Summary':        <EventSummaryPanel />,
  'Trending Contracts':   <TrendingContractsPanel />,
}

const TAB_INTERVAL = 4000

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProductPreview() {
  const sectionRef  = useRef<HTMLElement>(null)
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const [active, setActive]     = useState(false)
  const [tab, setTab]           = useState<Tab>('Trending Tokens')
  const [animKey, setAnimKey]   = useState(0)   // forces re-mount of panel for animation
  const [paused, setPaused]     = useState(false)

  // Trigger entrance when section enters viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const switchTab = useCallback((next: Tab) => {
    setTab(next)
    setAnimKey(k => k + 1)
  }, [])

  // Auto-advance tabs
  useEffect(() => {
    if (!active || paused) return
    timerRef.current = setInterval(() => {
      setTab(prev => {
        const idx  = TABS.indexOf(prev)
        const next = TABS[(idx + 1) % TABS.length]
        setAnimKey(k => k + 1)
        return next
      })
    }, TAB_INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [active, paused])

  const handleTabClick = (t: Tab) => {
    switchTab(t)
    setPaused(true) // user took control — stop auto-advance
  }

  // Progress bar resets on tab change
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (!active || paused) return
    setProgress(0)
    const start = Date.now()
    const raf = () => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / TAB_INTERVAL) * 100, 100))
      if (elapsed < TAB_INTERVAL) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [tab, active, paused])

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
            transform: active ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="browser-frame">
            {/* Browser chrome */}
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="browser-address">app-nekosinga.vercel.app</div>
            </div>

            {/* Tab bar */}
            <div className="preview-tab-bar">
              {TABS.map(t => (
                <button
                  key={t}
                  className={`preview-tab-btn ${tab === t ? 'active' : ''}`}
                  onClick={() => handleTabClick(t)}
                >
                  {t}
                  {tab === t && !paused && (
                    <span
                      className="preview-tab-progress"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Panel content */}
            <div className="preview-panel-wrap">
              <div key={animKey} className="preview-panel-animate">
                {PANEL_MAP[tab]}
              </div>
            </div>
          </div>
        </div>

        {!paused && (
          <p className="preview-hint">Click any tab to explore</p>
        )}
      </div>
    </section>
  )
}
