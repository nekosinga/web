import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

export default function MascotSection() {
  return (
    <section className="mascot-section">
      <div className="mascot-section-inner">

        <div className="floating-card mascot-card-1">
          <div className="card-label">TRENDING</div>
          <div className="card-token-row">
            <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={20} />
            <span className="card-token">$SOL</span>
          </div>
          <div className="card-metric positive">+42.8% mentions</div>
        </div>

        <div className="floating-card mascot-card-2">
          <div className="card-label">SOCIAL SIGNAL</div>
          <div className="card-token-row">
            <TokenIcon symbol="PEPE" image={getTokenData('PEPE').image} size={20} />
            <span className="card-token">$PEPE</span>
          </div>
          <div className="card-metric">18.4K mentions</div>
          <div className="card-change positive">↑ 31%</div>
        </div>

        <img
          src="/nekosinga-logo.png"
          alt="Neko Singa"
          className="mascot-section-img"
        />

        <div className="floating-card mascot-card-3">
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

        <div className="floating-card mascot-card-4">
          <div className="card-label">AI SIGNAL</div>
          <div className="card-token-row">
            <TokenIcon symbol="ETH" image={getTokenData('ETH').image} size={20} />
            <span className="card-token">$ETH</span>
          </div>
          <div className="card-metric positive">+24% mentions</div>
        </div>

      </div>
    </section>
  )
}
