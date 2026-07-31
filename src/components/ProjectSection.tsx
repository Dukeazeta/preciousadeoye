import { useGSAP } from '@gsap/react'
import { ArrowUpRight, CaretDown } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { archiveProjects, featuredProjects } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const projectTools = [...new Set(featuredProjects.flatMap((project) => project.tags))]

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      const media = gsap.matchMedia()
      media.add('(min-width: 761px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-feature')

        cards.forEach((card, index) => {
          const visual = card.querySelector<HTMLElement>('.project-feature-visual')

          gsap.fromTo(
            card,
            { y: 92, scale: 0.94, opacity: 0.45 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 94%',
                end: 'top 58%',
                scrub: true,
              },
            },
          )

          if (visual) {
            gsap.fromTo(
              visual,
              { scale: 0.82, opacity: 0.5 },
              {
                scale: 1,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 94%',
                  end: 'top 52%',
                  scrub: true,
                },
              },
            )
          }

          const nextCard = cards[index + 1]
          if (nextCard) {
            gsap.to(card, {
              scale: 0.95,
              opacity: 0.28,
              filter: 'brightness(0.72)',
              ease: 'none',
              scrollTrigger: {
                trigger: nextCard,
                start: 'top 78%',
                end: 'top 30%',
                scrub: true,
              },
            })
          }
        })
      })

      media.add('(max-width: 760px)', () => {
        gsap.utils.toArray<HTMLElement>('.project-feature-visual').forEach((visual) => {
          gsap.fromTo(
            visual,
            { scale: 0.9, opacity: 0.62 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: { trigger: visual, start: 'top 90%' },
            },
          )
        })
      })

      return () => media.revert()
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion], revertOnUpdate: true },
  )

  return (
    <section id="work" ref={sectionRef} className="chapter work-section" aria-labelledby="work-title">
      <div className="page-shell work-layout">
        <div className="work-heading">
          <h2 id="work-title">
            I turn the question
            <span
              className="work-inline-image"
              style={{ backgroundImage: `url(${featuredProjects[0].image})` }}
              aria-hidden="true"
            />
            into evidence.
          </h2>
          <p>
            These four projects show how I move from raw records and practical questions to analysis
            someone can use.
          </p>
        </div>

        <div className="project-marquee" aria-hidden="true">
          <div className="project-marquee-track">
            {[...projectTools, ...projectTools].map((tool, index) => (
              <span key={`${tool}-${index}`}>
                <i />
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="project-column">
          <div className="project-stack">
            {featuredProjects.map((project, index) => (
              <article
                className={`project-feature project-feature--${index + 1} accent-${project.accent}`}
                key={project.id}
              >
                <div className="project-feature-media">
                  <div className="project-feature-visual">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width="1200"
                      height="1200"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="project-feature-copy">
                  <p className="project-discipline">{project.discipline}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-outcome">{project.outcome}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                    <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <details className="project-archive">
            <summary>
              <span>Open my project archive</span>
              <CaretDown size={20} weight="bold" aria-hidden="true" />
            </summary>
            <div className="archive-list">
              {archiveProjects.map((project) => (
                <article className="archive-row" key={project.title}>
                  <div>
                    <p>{project.discipline}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.summary}</p>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                    <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
                  </a>
                </article>
              ))}
              <a
                className="python-scripts-link"
                href="https://github.com/Adeoye03/Python-Scripts"
                target="_blank"
                rel="noreferrer"
              >
                My smaller Python experiments and scripts
                <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
