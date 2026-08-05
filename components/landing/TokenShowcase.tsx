import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

export default function TokenShowcase() {
  const sol = getTokenData('SOL')

  return (
    <section className="token-showcase">
      <div className="section-content">
        <div className="section-header">
          <h2>Go from a token name to the full picture.</h2>
        </div>

        <div className="token-detail-card">
          <div className="token-detail-header">
            <div className="token-info">
              <TokenIcon symbol="SOL" image={sol.image} size={48} />
              <div>
                <div className="token-symbol">$SOL</div>
                <div className="token-name">Solana</div>
              </div>
            </div>
          </div>

          <div className="token-metrics">
            <div className="metric-group">
              <div className="metric-item">
                <div className="metric-label">Price</div>
                <div className="metric-value">$142.50</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">24h Change</div>
                <div className="metric-value positive">+8.4%</div>
              </div>
            </div>

            <div className="metric-group">
              <div className="metric-item">
                <div className="metric-label">Social Mentions</div>
                <div className="metric-value">18.4K</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Engagement</div>
                <div className="metric-value">124K</div>
              </div>
            </div>
          </div>

          <div className="token-activity">
            <div className="activity-header">Social Activity</div>
            <div className="activity-chart">
              <div className="activity-bar" style={{height: '60%'}}></div>
              <div className="activity-bar" style={{height: '75%'}}></div>
              <div className="activity-bar" style={{height: '85%'}}></div>
              <div className="activity-bar" style={{height: '95%'}}></div>
              <div className="activity-bar" style={{height: '100%'}}></div>
              <div className="activity-bar" style={{height: '90%'}}></div>
              <div className="activity-bar" style={{height: '80%'}}></div>
            </div>
          </div>

          <div className="token-signals">
            <div className="signals-header">Latest Signals</div>
            <div className="signals-list">
              <div className="signal-item-showcase">
                <span className="signal-dot rising"></span>
                Rising mentions
              </div>
              <div className="signal-item-showcase">
                <span className="signal-dot positive"></span>
                Positive engagement
              </div>
              <div className="signal-item-showcase">
                <span className="signal-dot active"></span>
                New market discussion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
