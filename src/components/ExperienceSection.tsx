import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { experiences } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      gsap.utils.toArray<HTMLElement>('.experience-entry').forEach((entry) => {
        const rule = entry.querySelector<HTMLElement>('.experience-entry-rule')

        gsap.fromTo(
          entry,
          { y: 42, opacity: 0.42 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: entry,
              start: 'top 88%',
              end: 'top 56%',
              scrub: true,
            },
          },
        )

        if (!rule) return

        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: entry,
              start: 'top 92%',
              end: 'top 62%',
              scrub: true,
            },
          },
        )
      })
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion], revertOnUpdate: true },
  )

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="chapter experience-section"
      aria-labelledby="experience-title"
    >
      <div className="page-shell experience-ledger">
        <header className="experience-ledger-header">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">I learned the work by doing the work.</h2>
          </div>
          <p>
            I have checked daily sales, built analytical dashboards, presented findings, and helped
            lead a student chapter. Each role made me more precise, accountable, and useful.
          </p>
        </header>

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className={`experience-entry accent-${experience.accent}`}
              key={`${experience.role}-${experience.organization}`}
            >
              <span className="experience-entry-rule" aria-hidden="true" />

              <div className="experience-entry-period">
                <span className="experience-entry-marker" aria-hidden="true" />
                <time>{experience.period}</time>
              </div>

              <div className="experience-entry-position">
                <h3>{experience.role}</h3>
                <p>{experience.organization}</p>
                {experience.location ? <span>{experience.location}</span> : null}
              </div>

              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>
                    <span className="experience-detail-marker" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="experience-ledger-note">
          <span aria-hidden="true">Current principle</span>
          <p>I take responsibility for the details, then make the result easy to use.</p>
        </footer>
      </div>
    </section>
  )
}
