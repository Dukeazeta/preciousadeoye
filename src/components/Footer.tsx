import { ArrowUpRight, At, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import heroDataStory from '../assets/illustrations/hero-data-story.webp'

const contactLinks = [
  {
    label: 'Email me',
    detail: 'omoadoni.adeoye03@gmail.com',
    href: 'mailto:omoadoni.adeoye03@gmail.com',
    icon: At,
  },
  {
    label: 'Connect with me on LinkedIn',
    detail: 'Adeoye Precious',
    href: 'https://www.linkedin.com/in/adeoye-precious-0a8499241/',
    icon: LinkedinLogo,
  },
  {
    label: 'Explore my GitHub',
    detail: 'Adeoye03',
    href: 'https://github.com/Adeoye03',
    icon: GithubLogo,
  },
]

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell footer-cta">
        <div className="footer-art" aria-hidden="true">
          <img src={heroDataStory} alt="" width="1536" height="1024" loading="lazy" />
        </div>
        <div className="footer-copy">
          <p className="eyebrow">Available for opportunities</p>
          <h2>I am open to my next data role.</h2>
          <p>
            I am interested in graduate trainee and data analyst roles. I would also like to work on
            collaborative projects and talk with people who care about useful data.
          </p>
        </div>
      </div>

      <div className="page-shell footer-links">
        {contactLinks.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon size={25} weight="duotone" aria-hidden="true" />
            <span>
              <strong>{label}</strong>
              <small>{detail}</small>
            </span>
            <ArrowUpRight size={19} weight="bold" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="page-shell footer-bottom">
        <p>© {new Date().getFullYear()} Adeoye Precious</p>
        <p>This portfolio reflects my real project work.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
