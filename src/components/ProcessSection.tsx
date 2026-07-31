import { ArrowRight } from '@phosphor-icons/react'
import { useState } from 'react'
import { processSteps } from '../data/portfolio'

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="chapter process-section" aria-labelledby="process-title">
      <div className="page-shell">
        <div className="chapter-heading process-heading">
          <p className="eyebrow">Working method</p>
          <h2 id="process-title">I use a careful process to reach a clear answer.</h2>
        </div>

        <div className="process-accordion">
          {processSteps.map((step, index) => {
            const isActive = index === activeStep
            return (
              <article
                className={`process-panel accent-${step.accent} ${isActive ? 'process-panel--active' : ''}`}
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="process-panel-dot" aria-hidden="true" />
                  <span className="process-panel-title">{step.title}</span>
                  <ArrowRight size={20} weight="bold" aria-hidden="true" />
                </button>
                <div className="process-panel-content">
                  <h3>{step.summary}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
