export type Accent = 'blue' | 'orange' | 'green' | 'yellow' | 'pink'

export interface NavigationItem {
  label: string
  href: `#${string}`
}

export interface SocialLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  discipline: string
  summary: string
  outcome: string
  tags: string[]
  href: string
  linkLabel: string
  image: string
  imageAlt: string
  accent: Accent
  span: 'wide' | 'compact'
}

export interface ArchiveProject {
  title: string
  discipline: string
  summary: string
  href: string
  linkLabel: string
  tags: string[]
}

export interface Experience {
  period: string
  role: string
  organization: string
  location?: string
  details: string[]
  accent: Accent
}

export interface Education {
  period: string
  qualification: string
  institution: string
  location: string
}

export interface Credential {
  title: string
  issuer: string
  date: string
  href: string
  accent: Accent
}

export interface ProcessStep {
  title: string
  summary: string
  detail: string
  accent: Accent
}

