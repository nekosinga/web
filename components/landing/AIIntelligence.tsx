import TokenIcon from '@/components/TokenIcon'
import { getTokenData } from '@/lib/tokenData'

export default function AIIntelligence() {
  const samplePrompts: string[] = [
    "Should I pay attention to BTC's recent social momentum?",
    "Which tokens are gaining the most attention today?",
    "What changed around this token's sentiment?",
    "What narratives are starting to accelerate?"
  ]

  return (
    <section id="intelligence" className="ai-intelligence">
      <div className="section-content">
        <div className="section-header">
          <div className="section-eyebrow">AI MARKET INTELLIGENCE</div>
          <h2>Ask better questions about the market.</h2>
          <p className="section-description">
            Turn market signals into focused questions. Neko Singa AI helps connect social activity, trends, and market context so you can investigate faster.
          </p>
        </div>

        <div className="ai-interface">
          <div className="ai-header">
            <span className="ai-title">Neko Singa AI</span>
          </div>
          
          <div className="ai-conversation">
            <div className="ai-prompt">
              What tokens are gaining social momentum?
            </div>
            
            <div className="ai-response">
              <div className="response-item">
                <span className="response-number">1.</span>
                <TokenIcon symbol="SOL" image={getTokenData('SOL').image} size={20} />
                <span className="response-token">$SOL</span>
                <span className="response-status">Rising mentions</span>
                <span className="response-change positive">+42%</span>
              </div>
              <div className="response-item">
                <span className="response-number">2.</span>
                <TokenIcon symbol="PEPE" image={getTokenData('PEPE').image} size={20} />
                <span className="response-token">$PEPE</span>
                <span className="response-status">Rising mentions</span>
                <span className="response-change positive">+31%</span>
              </div>
              <div className="response-item">
                <span className="response-number">3.</span>
                <TokenIcon symbol="ARB" image={getTokenData('ARB').image} size={20} />
                <span className="response-token">$ARB</span>
                <span className="response-status">Rising mentions</span>
                <span className="response-change positive">+24%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sample-prompts">
          <div className="prompts-label">Try asking:</div>
          <div className="prompts-list">
            {samplePrompts.map((prompt, index) => (
              <div key={index} className="prompt-chip">
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
