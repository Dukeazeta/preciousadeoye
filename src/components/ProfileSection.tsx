import { useGSAP } from '@gsap/react'
import {
  ArrowLeft,
  ArrowRight,
  ChartLineUp,
  Code,
  Database,
} from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'
import heroDataStory from '../assets/illustrations/hero-data-story.webp'
import { skills } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const skillGroups = [
  {
    title: 'Languages',
    description: 'The languages I use to query, model, and automate analysis.',
    values: skills.languages,
    icon: Code,
    accent: 'blue',
  },
  {
    title: 'Tools',
    description: 'The working environment I use to move from raw data to a useful view.',
    values: skills.tools,
    icon: ChartLineUp,
    accent: 'green',
  },
  {
    title: 'Practice',
    description: 'The habits that keep the analysis accurate, practical, and easy to use.',
    values: skills.concepts,
    icon: Database,
    accent: 'orange',
  },
]

const storySlides = [
  'I enjoy the point where a messy spreadsheet starts making sense. I turn that evidence into a clear next move.',
  'Projects and simulations taught me to ask the useful question first, test the evidence, then explain the answer without jargon.',
]

const marqueeSkills = [...skills.languages, ...skills.tools, ...skills.concepts]

export function ProfileSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStory, setActiveStory] = useState(0)
  const [activeSkill, setActiveSkill] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  const showPreviousStory = () =>
    setActiveStory((current) => (current - 1 + storySlides.length) % storySlides.length)
  const showNextStory = () =>
    setActiveStory((current) => (current + 1) % storySlides.length)

  useGSAP(
    () => {
      if (prefersReducedMotion) return

      gsap.fromTo(
        '.profile-title-word',
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '.profile-heading',
            start: 'top 82%',
            end: 'bottom 42%',
            scrub: 0.7,
          },
        },
      )

      const storyLayers = gsap.utils.toArray<HTMLElement>('.profile-story-sheet')
      gsap.fromTo(
        storyLayers,
        {
          y: (index) => 90 + index * 34,
          rotate: (index) => (index === 0 ? -7 : 7),
        },
        {
          y: 0,
          rotate: (index) => (index === 0 ? -2.5 : 2.5),
          stagger: 0.12,
          ease: 'none',
          scrollTrigger: {
            trigger: '.profile-layout',
            start: 'top 88%',
            end: 'top 42%',
            scrub: 0.8,
          },
        },
      )
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <section
      ref={sectionRef}
      id="profile"
      className="chapter profile-section"
      aria-labelledby="profile-title"
    >
      <div className="page-shell">
        <div className="chapter-heading profile-heading">
          <p className="eyebrow">How I work with data</p>
          <h2 id="profile-title">
            <span className="profile-title-word">I</span>{' '}
            <span className="profile-title-word">turn</span>{' '}
            <span className="profile-title-word">messy</span>{' '}
            <span className="profile-title-word">rows</span>{' '}
            <span className="profile-title-word">into</span>{' '}
            <span className="profile-title-word">a</span>{' '}
            <span className="profile-title-word">clear</span>
            <span
              className="inline-story-image"
              style={{ backgroundImage: `url(${heroDataStory})` }}
              aria-hidden="true"
            />
            <span className="profile-title-word">next</span>{' '}
            <span className="profile-title-word">move.</span>
          </h2>
        </div>

        <div className="profile-layout">
          <div className="profile-story-stage">
            <span className="profile-story-sheet profile-story-sheet--blue" aria-hidden="true" />
            <span className="profile-story-sheet profile-story-sheet--green" aria-hidden="true" />

            <article className="profile-story-card">
              <div className="profile-story-meta">
                <span>Analyst mindset</span>
                <span aria-hidden="true">Lagos, NG</span>
              </div>

              <p className="profile-story-copy" key={activeStory} aria-live="polite">
                {storySlides[activeStory]}
              </p>

              <div className="profile-story-footer">
                <p>
                  {String(activeStory + 1).padStart(2, '0')} /{' '}
                  {String(storySlides.length).padStart(2, '0')}
                </p>
                <div className="profile-story-controls" aria-label="Profile story controls">
                  <button type="button" onClick={showPreviousStory} aria-label="Previous profile story">
                    <ArrowLeft size={20} weight="bold" aria-hidden="true" />
                  </button>
                  <button type="button" onClick={showNextStory} aria-label="Next profile story">
                    <ArrowRight size={20} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="skill-accordion" aria-label="Data analysis skills">
            {skillGroups.map(({ title, description, values, icon: Icon, accent }, index) => {
              const isActive = index === activeSkill
              const panelId = `skill-panel-${title.toLowerCase()}`

              return (
                <article
                  className={`skill-panel accent-${accent}${isActive ? ' skill-panel--active' : ''}`}
                  key={title}
                >
                  <button
                    type="button"
                    className="skill-panel-button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveSkill(index)}
                  >
                    <span className="skill-panel-icon" aria-hidden="true">
                      <Icon size={25} weight="duotone" />
                    </span>
                    <span className="skill-panel-title">{title}</span>
                    <span className="skill-panel-toggle" aria-hidden="true">
                      {isActive ? '—' : '+'}
                    </span>
                  </button>

                  <div className="skill-panel-content" id={panelId} aria-hidden={!isActive}>
                    <p>{description}</p>
                    <ul>
                      {values.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="profile-marquee" aria-hidden="true">
          <div className="profile-marquee-track">
            {[0, 1].map((copy) => (
              <div className="profile-marquee-group" key={copy}>
                {marqueeSkills.map((skill) => (
                  <span key={`${copy}-${skill}`}>
                    {skill}
                    <i />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
