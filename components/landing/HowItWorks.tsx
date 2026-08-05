import type { Step } from '@/types/landing'

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Discover',
      description: 'Find tokens and narratives gaining attention.'
    },
    {
      number: '02',
      title: 'Investigate',
      description: 'Explore social sentiment, engagement, news, and token-level activity.'
    },
    {
      number: '03',
      title: 'Decide',
      description: 'Use the combined signals to form a clearer market view.'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-content">
        <div className="section-header">
          <h2>Three steps from noise to signal.</h2>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
