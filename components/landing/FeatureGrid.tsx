import type { Feature } from '@/types/landing'
import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

export default function FeatureGrid() {
  const features: Feature[] = [
    {
      title: 'Trending Tokens',
      description: 'See what is gaining attention.',
      detail: 'Track tokens with rising social activity and quickly identify where attention is moving.',
      visual: (
        <div className="feature-visual trending">
          <div className="trend-item">
            <span className="rank">#1</span>
            <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={24} />
            <span className="token">$SOL</span>
            <span className="mentions">18.4K</span>
            <span className="change positive">+42%</span>
          </div>
          <div className="trend-item">
            <span className="rank">#2</span>
            <TokenIcon symbol="BTC" image={getTokenData('BTC').image} size={24} />
            <span className="token">$BTC</span>
            <span className="mentions">15.2K</span>
            <span className="change positive">+31%</span>
          </div>
          <div className="trend-item">
            <span className="rank">#3</span>
            <TokenIcon symbol="ETH" image={getTokenData('ETH').image} size={24} />
            <span className="token">$ETH</span>
            <span className="mentions">12.8K</span>
            <span className="change positive">+24%</span>
          </div>
        </div>
      )
    },
    {
      title: 'Social Sentiment',
      description: 'Understand the conversation behind the chart.',
      detail: 'Explore social activity and engagement to understand how the market is reacting.',
      visual: (
        <div className="feature-visual sentiment">
          <div className="sentiment-gauge">
            <div className="gauge-label">Market Sentiment</div>
            <div className="gauge-bar">
              <div className="gauge-fill bullish" style={{width: '72%'}}></div>
            </div>
            <div className="gauge-stats">
              <span className="bullish-stat">72% Bullish</span>
              <span className="bearish-stat">28% Bearish</span>
            </div>
          </div>
          <div className="engagement-stats">
            <div className="stat-item">
              <span className="stat-value">124K</span>
              <span className="stat-label">Engagement</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">8.4K</span>
              <span className="stat-label">Posts</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Market News',
      description: 'Stay close to what is happening.',
      detail: 'Bring relevant crypto news and social activity into the same workflow.',
      visual: (
        <div className="feature-visual news">
          <div className="news-item">
            <div className="news-source">CoinDesk</div>
            <div className="news-title">Major protocol upgrade announced</div>
            <div className="news-meta">
              <span className="news-time">2h ago</span>
              <span className="news-tag">
                <TokenIcon symbol="ETH" image={getTokenData('ETH').image} size={14} />
                $ETH
              </span>
            </div>
          </div>
          <div className="news-item">
            <div className="news-source">The Block</div>
            <div className="news-title">New DEX reaches $1B volume</div>
            <div className="news-meta">
              <span className="news-time">4h ago</span>
              <span className="news-tag">
                <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={14} />
                $SOL
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Token Intelligence',
      description: 'Zoom into any token.',
      detail: 'Open a token profile to see price, movement, mentions, social activity, and related signals.',
      visual: (
        <div className="feature-visual token">
          <div className="token-header">
            <div className="token-name-row">
              <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={28} />
              <div className="token-name">$SOL</div>
            </div>
            <div className="token-price">$142.50</div>
          </div>
          <div className="token-stats">
            <div className="token-stat">
              <span className="stat-label">24h Change</span>
              <span className="stat-value positive">+8.4%</span>
            </div>
            <div className="token-stat">
              <span className="stat-label">Mentions</span>
              <span className="stat-value">18.4K</span>
            </div>
          </div>
          <div className="token-chart">
            <div className="chart-line"></div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="features" className="feature-grid">
      <div className="section-content">
        <div className="section-header">
          <h2>From market noise to useful signals.</h2>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <p className="feature-detail">{feature.detail}</p>
              <div className="feature-visual-container">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
