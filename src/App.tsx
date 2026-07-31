import { CredentialsSection } from './components/CredentialsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { ProcessSection } from './components/ProcessSection'
import { ProfileSection } from './components/ProfileSection'
import { ProjectSection } from './components/ProjectSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" className="site-main">
        <Hero />
        <ProfileSection />
        <ProjectSection />
        <ProcessSection />
        <ExperienceSection />
        <CredentialsSection />
      </main>
      <Footer />
    </>
  )
}

export default App

