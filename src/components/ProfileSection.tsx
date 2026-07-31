import { ChartLineUp, Code, Database } from '@phosphor-icons/react'
import heroDataStory from '../assets/illustrations/hero-data-story.webp'
import { skills } from '../data/portfolio'

const skillGroups = [
  { title: 'Languages', values: skills.languages, icon: Code, accent: 'blue' },
  { title: 'Tools', values: skills.tools, icon: ChartLineUp, accent: 'green' },
  { title: 'Practice', values: skills.concepts, icon: Database, accent: 'orange' },
]

export function ProfileSection() {
  return (
    <section id="profile" className="chapter profile-section" aria-labelledby="profile-title">
      <div className="page-shell">
        <div className="chapter-heading profile-heading">
          <p className="eyebrow">Profile</p>
          <h2 id="profile-title">
            I turn messy rows into a clear
            <span
              className="inline-story-image"
              style={{ backgroundImage: `url(${heroDataStory})` }}
              aria-hidden="true"
            />
            next move.
          </h2>
        </div>

        <div className="profile-layout">
          <div className="profile-story">
            <p>
              I like the point where a messy spreadsheet finally starts to make sense. My work
              covers business intelligence, SQL analysis, data visualization, and machine learning.
            </p>
            <p>
              My Deloitte and Accenture simulations, along with my own analytics projects, taught me
              to ask a useful question before I reach for a tool. Then I test the evidence and explain
              what I found without jargon.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map(({ title, values, icon: Icon, accent }) => (
              <article className={`skill-card accent-${accent}`} key={title}>
                <div className="skill-card-icon" aria-hidden="true">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3>{title}</h3>
                <ul>
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
