import { useEffect, useRef, useState } from 'react'
import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

// ─── Sidebar nav items ────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    id: 'trending',
    label: 'Trending Tokens',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 12L6 7l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'stats',
    label: 'Smart Stats',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="9" width="3" height="5" rx="1" fill="currentColor" opacity=".5"/>
        <rect x="6.5" y="6" width="3" height="8" rx="1" fill="currentColor" opacity=".7"/>
        <rect x="11" y="2" width="3" height="12" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'mentions',
    label: 'Top Mentions',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 8.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="5.5" cy="6.5" r="1" fill="currentColor"/>
        <circle cx="10.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'search',
    label: 'Multi Keyword',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'events',
    label: 'Event Summary',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'contracts',
    label: 'Trending Contracts',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 2h6l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2v4h4M6 9h4M6 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
] as const

type NavId = typeof NAV_ITEMS[number]['id']

// ─── Panel components ─────────────────────────────────────────────────────────

function TrendingPanel() {
  const rows = [
    { symbol: 'SOL',  name: 'Solana',   mentions: '18.4K', change: '+42%' },
    { symbol: 'BTC',  name: 'Bitcoin',  mentions: '15.2K', change: '+31%' },
    { symbol: 'ETH',  name: 'Ethereum', mentions: '12.8K', change: '+24%' },
    { symbol: 'PEPE', name: 'Pepe',     mentions: '9.1K',  change: '+18%' },
    { symbol: 'ARB',  name: 'Arbitrum', mentions: '7.3K',  change: '+12%' },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Trending Tokens</span>
        <span className="pp-badge-live">LIVE</span>
      </div>
      <div className="pp-col-row">
        <span className="pp-col">#</span>
        <span className="pp-col">Token</span>
        <span className="pp-col right">Mentions</span>
        <span className="pp-col right">24h</span>
        <span className="pp-col center">Signal</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.symbol} className="pp-row" style={{ '--i': i } as React.CSSProperties}>
          <span className="pp-rank">{i + 1}</span>
          <span className="pp-token-id">
            <TokenIcon symbol={r.symbol} image={getTokenData(r.symbol).image} size={22} />
            <span className="pp-token-name">{r.name}</span>
            <span className="pp-token-sym">${r.symbol}</span>
          </span>
          <span className="pp-mentions">{r.mentions}</span>
          <span className="pp-change pos">{r.change}</span>
          <span className="pp-dot-live" />
        </div>
      ))}
    </>
  )
}

function StatsPanel() {
  const cards = [
    { label: 'Total Mentions',    value: '124.8K', sub: 'Last 24h',         pos: true  },
    { label: 'Bullish Sentiment', value: '72%',    sub: '+8% vs yesterday', pos: true  },
    { label: 'Active Tokens',     value: '452',    sub: 'Tracked now',      pos: true  },
    { label: 'Bearish Signals',   value: '14',     sub: 'Flagged tokens',   pos: false },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Smart Stats</span>
        <span className="pp-badge-live">LIVE</span>
      </div>
      <div className="pp-stats-grid">
        {cards.map((c, i) => (
          <div key={i} className="pp-stat-card" style={{ '--i': i } as React.CSSProperties}>
            <div className="pp-stat-label">{c.label}</div>
            <div className={`pp-stat-val ${c.pos ? 'pos' : 'neg'}`}>{c.value}</div>
            <div className="pp-stat-sub">{c.sub}</div>
          </div>
        ))}
      </div>
      <div className="pp-sentiment-block">
        <div className="pp-sb-label">Market Sentiment</div>
        <div className="pp-sb-track"><div className="pp-sb-fill" /></div>
        <div className="pp-sb-ends">
          <span className="pos">72% Bullish</span>
          <span className="neg">28% Bearish</span>
        </div>
      </div>
    </>
  )
}

function MentionsPanel() {
  const items = [
    { symbol: 'SOL',  pct: 92, count: '18,412' },
    { symbol: 'BTC',  pct: 74, count: '15,280' },
    { symbol: 'ETH',  pct: 62, count: '12,804' },
    { symbol: 'PEPE', pct: 44, count: '9,103'  },
    { symbol: 'ARB',  pct: 36, count: '7,341'  },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Top Mentions</span>
        <span className="pp-badge-period">24h</span>
      </div>
      {items.map((r, i) => (
        <div key={r.symbol} className="pp-mention-row" style={{ '--i': i } as React.CSSProperties}>
          <TokenIcon symbol={r.symbol} image={getTokenData(r.symbol).image} size={20} />
          <span className="pp-mention-sym">${r.symbol}</span>
          <div className="pp-bar-track">
            <div className="pp-bar-fill" style={{ '--pct': `${r.pct}%` } as React.CSSProperties} />
          </div>
          <span className="pp-mention-count">{r.count}</span>
        </div>
      ))}
    </>
  )
}

function SearchPanel() {
  const kws = [
    { label: 'solana',      pct: 72, count: '12.4K', change: '+38%', color: '#F97316' },
    { label: 'bullrun',     pct: 52, count: '8.1K',  change: '+22%', color: '#3B82F6' },
    { label: 'defi summer', pct: 38, count: '5.7K',  change: '+15%', color: '#8B5CF6' },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Multi Keyword Search</span>
      </div>
      <div className="pp-kw-chips">
        {kws.map((k, i) => (
          <span key={i} className="pp-kw-chip" style={{ '--c': k.color } as React.CSSProperties}>{k.label} ×</span>
        ))}
        <span className="pp-kw-add">+ Add keyword</span>
      </div>
      <div className="pp-kw-list">
        {kws.map((k, i) => (
          <div key={i} className="pp-kw-row" style={{ '--i': i } as React.CSSProperties}>
            <span className="pp-kw-dot" style={{ background: k.color }} />
            <span className="pp-kw-label">{k.label}</span>
            <div className="pp-bar-track">
              <div className="pp-kw-bar" style={{ '--pct': `${k.pct}%`, '--c': k.color } as React.CSSProperties} />
            </div>
            <span className="pp-mention-count">{k.count}</span>
            <span className="pp-change pos">{k.change}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function EventsPanel() {
  const events = [
    { symbol: 'ETH',  title: 'ETH Pectra Upgrade Live',   time: '2h ago', impact: 'High',   summary: "Ethereum's Pectra upgrade activated on mainnet. Social mentions spiked 340% within 2 hours." },
    { symbol: 'SOL',  title: 'SOL DEX Volume Record',     time: '5h ago', impact: 'Medium', summary: 'Solana-based DEXs hit $1.2B in 24h volume. Community discussion trending across X and Farcaster.' },
    { symbol: 'PEPE', title: 'PEPE Social Surge',         time: '8h ago', impact: 'Medium', summary: 'PEPE token gained 31% in social mentions. Coordinated community campaign detected.' },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Event Summary</span>
        <span className="pp-badge-period">Today</span>
      </div>
      {events.map((e, i) => (
        <div key={i} className="pp-event" style={{ '--i': i } as React.CSSProperties}>
          <div className="pp-event-top">
            <TokenIcon symbol={e.symbol} image={getTokenData(e.symbol).image} size={16} />
            <span className="pp-event-title">{e.title}</span>
            <span className={`pp-impact ${e.impact.toLowerCase()}`}>{e.impact}</span>
            <span className="pp-event-time">{e.time}</span>
          </div>
          <p className="pp-event-body">{e.summary}</p>
        </div>
      ))}
    </>
  )
}

function ContractsPanel() {
  const rows = [
    { label: 'PEPE',  addr: '0x6982...7855', chain: 'ETH', mentions: '4.2K', change: '+88%' },
    { label: 'BONK',  addr: '7vfCX...Hp2j', chain: 'SOL', mentions: '3.1K', change: '+64%' },
    { label: 'UNI V3',addr: '0x1f98...0505', chain: 'ETH', mentions: '2.8K', change: '+41%' },
    { label: 'USDC',  addr: 'EPjFW...ut1v', chain: 'SOL', mentions: '2.3K', change: '+29%' },
  ]
  return (
    <>
      <div className="pp-panel-head">
        <span className="pp-panel-title">Trending Contracts</span>
        <span className="pp-badge-live">LIVE</span>
      </div>
      <div className="pp-col-row" style={{ gridTemplateColumns: '1fr 56px 80px 60px' }}>
        <span className="pp-col">Contract</span>
        <span className="pp-col center">Chain</span>
        <span className="pp-col right">Mentions</span>
        <span className="pp-col right">24h</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="pp-contract-row" style={{ '--i': i } as React.CSSProperties}>
          <span className="pp-contract-id">
            <span className="pp-contract-label">{r.label}</span>
            <span className="pp-contract-addr">{r.addr}</span>
          </span>
          <span className={`pp-chain chain-${r.chain.toLowerCase()}`}>{r.chain}</span>
          <span className="pp-mentions">{r.mentions}</span>
          <span className="pp-change pos">{r.change}</span>
        </div>
      ))}
    </>
  )
}

const PANELS: Record<NavId, React.ReactNode> = {
  trending:  <TrendingPanel />,
  stats:     <StatsPanel />,
  mentions:  <MentionsPanel />,
  search:    <SearchPanel />,
  events:    <EventsPanel />,
  contracts: <ContractsPanel />,
}

const SWITCH_MS = 5000

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ProductPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible]   = useState(false)
  const [active, setActive]     = useState<NavId>('trending')
  const [animKey, setAnimKey]   = useState(0)
  const [paused, setPaused]     = useState(false)
  const [progress, setProgress] = useState(0)

  // Intersection observer — trigger once
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    if (!visible || paused) return
    const ids = NAV_ITEMS.map(n => n.id)
    const t = setInterval(() => {
      setActive(prev => {
        const next = ids[(ids.indexOf(prev) + 1) % ids.length]
        setAnimKey(k => k + 1)
        return next
      })
    }, SWITCH_MS)
    return () => clearInterval(t)
  }, [visible, paused])

  // Progress bar
  useEffect(() => {
    if (!visible || paused) return
    setProgress(0)
    const start = Date.now()
    let raf: number
    const tick = () => {
      const p = Math.min(((Date.now() - start) / SWITCH_MS) * 100, 100)
      setProgress(p)
      if (p < 100) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, visible, paused])

  const handleNav = (id: NavId) => {
    setActive(id)
    setAnimKey(k => k + 1)
    setPaused(true)
  }

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
          className="pp-shell"
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.97)',
            transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {/* ── Browser chrome ── */}
          <div className="pp-chrome">
            <div className="pp-dots">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            </div>
            <div className="pp-address">app-nekosinga.vercel.app</div>
          </div>

          {/* ── App layout ── */}
          <div className="pp-app">

            {/* Sidebar */}
            <aside className="pp-sidebar">
              <div className="pp-sidebar-brand">
                <img src="/nekosinga-icon.png" alt="" width={24} height={24} />
                <span className="pp-sidebar-name">Neko Singa</span>
              </div>

              <nav className="pp-nav">
                {NAV_ITEMS.map(item => (
                  <button
                    key={item.id}
                    className={`pp-nav-item ${active === item.id ? 'active' : ''}`}
                    onClick={() => handleNav(item.id)}
                  >
                    <span className="pp-nav-icon">{item.icon}</span>
                    <span className="pp-nav-label">{item.label}</span>
                    {active === item.id && !paused && (
                      <span className="pp-nav-progress" style={{ width: `${progress}%` }} />
                    )}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <main className="pp-content">
              <div key={animKey} className="pp-panel-in">
                {PANELS[active]}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}
