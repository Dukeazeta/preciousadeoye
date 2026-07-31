import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react'
import heroDataStory from '../assets/illustrations/hero-data-story.webp'
import portrait from '../assets/portrait/precious-cutout-original.webp'

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="page-shell hero-grid">
        <div className="hero-poster">
          <h1 id="hero-title" aria-label="Adeoye Precious">
            <span aria-hidden="true">Adeoye</span>
            <span aria-hidden="true">Precious</span>
          </h1>
          <div
            className="hero-stage"
            aria-label="Portrait of Adeoye Precious surrounded by data illustrations"
          >
            <img
              className="hero-stage-art"
              src={heroDataStory}
              alt="Friendly illustrated charts, a spreadsheet, magnifying glass, and database"
              width="1536"
              height="1024"
            />
          </div>
          <figure className="portrait-card">
            <img
              className="portrait-image"
              src={portrait}
              alt="Adeoye Precious smiling"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
          </figure>
        </div>

        <div className="hero-resolution">
          <div className="hero-message">
            <p className="hero-promise">I turn raw data into decisions.</p>
            <p className="hero-intro">
              I am a data analyst and Computer Science graduate. I work through messy data until the
              pattern is clear, then explain the result in plain language.
            </p>
          </div>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button--ink" href="#work">
              View my work
              <ArrowDown size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="button button--paper" href="mailto:omoadoni.adeoye03@gmail.com">
              Start a conversation
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
