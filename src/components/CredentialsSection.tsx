import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Certificate,
  GraduationCap,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { credentials, education } from '../data/portfolio'

export function CredentialsSection() {
  const [activeCredential, setActiveCredential] = useState(0)
  const credential = credentials[activeCredential]

  const showPrevious = () =>
    setActiveCredential((current) => (current - 1 + credentials.length) % credentials.length)
  const showNext = () => setActiveCredential((current) => (current + 1) % credentials.length)

  return (
    <section id="credentials" className="chapter credentials-section" aria-labelledby="credentials-title">
      <div className="page-shell">
        <div className="chapter-heading credentials-heading">
          <p className="eyebrow">Credentials</p>
          <h2 id="credentials-title">I keep building on a practical foundation.</h2>
        </div>

        <div className="education-grid">
          {education.map((entry) => (
            <article className="education-card" key={entry.qualification}>
              <GraduationCap size={31} weight="duotone" aria-hidden="true" />
              <p>{entry.period}</p>
              <h3>{entry.qualification}</h3>
              <p>{entry.institution}</p>
              <span>{entry.location}</span>
            </article>
          ))}
        </div>

        <div className="credential-carousel" aria-live="polite">
          <div className="credential-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <article className={`credential-card accent-${credential.accent}`}>
            <div className="credential-icon" aria-hidden="true">
              <Certificate size={36} weight="duotone" />
            </div>
            <div className="credential-copy">
              <p className="credential-count">
                {String(activeCredential + 1).padStart(2, '0')} / {String(credentials.length).padStart(2, '0')}
              </p>
              <h3>{credential.title}</h3>
              <p>{credential.issuer}</p>
              <span>{credential.date}</span>
            </div>
            <a href={credential.href} target="_blank" rel="noreferrer">
              Verify credential
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
          </article>

          <div className="carousel-controls" aria-label="Credential carousel controls">
            <button type="button" onClick={showPrevious} aria-label="Previous credential">
              <ArrowLeft size={20} weight="bold" aria-hidden="true" />
            </button>
            <button type="button" onClick={showNext} aria-label="Next credential">
              <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
