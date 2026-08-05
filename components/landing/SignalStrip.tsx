import type { Signal } from '@/types/landing'

export default function SignalStrip() {
  const signals: Signal[] = [
    { label: 'Trending Tokens' },
    { label: 'Social Sentiment' },
    { label: 'News' },
    { label: 'Engagement' },
    { label: 'AI Insights' }
  ]

  return (
    <section className="signal-strip">
      <div className="signal-strip-content">
        <div className="signal-strip-title">REAL-TIME SIGNALS</div>
        <div className="signal-strip-items">
          {signals.map((signal, index) => (
            <div key={index} className="signal-item">
              <span className="signal-label">{signal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
