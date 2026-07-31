import hrIllustration from '../assets/illustrations/project-hr.webp'
import movieLensIllustration from '../assets/illustrations/project-movielens.webp'
import ridesIllustration from '../assets/illustrations/project-rides.webp'
import weatherIllustration from '../assets/illustrations/project-weather.webp'
import type {
  ArchiveProject,
  Credential,
  Education,
  Experience,
  NavigationItem,
  ProcessStep,
  Project,
  SocialLink,
} from '../types/portfolio'

export const navigation: NavigationItem[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#credentials' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:omoadoni.adeoye03@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adeoye-precious-0a8499241/' },
  { label: 'GitHub', href: 'https://github.com/Adeoye03' },
]

export const skills = {
  languages: ['Python', 'SQL', 'DAX'],
  tools: ['Power BI', 'Tableau', 'Excel', 'Pandas', 'scikit-learn'],
  concepts: ['Data cleaning', 'Predictive modeling', 'Dashboarding', 'Report writing'],
}

export const featuredProjects: Project[] = [
  {
    id: 'atlas-labs',
    title: 'HR Attrition Analysis',
    discipline: 'Power BI / Business Analytics',
    summary:
      'I built a five-table workforce model from employee, performance, satisfaction, and education records to study attrition.',
    outcome:
      'I used it to identify the employee groups most at risk of leaving and the factors worth investigating first.',
    tags: ['Power BI', 'DAX', 'Data modeling'],
    href: 'https://github.com/Adeoye03/HR-Analytics',
    linkLabel: 'View repository',
    image: hrIllustration,
    imageAlt: 'Illustration of employees moving through an attrition analytics dashboard',
    accent: 'orange',
    span: 'wide',
  },
  {
    id: 'ride-hailing',
    title: 'Ride-Hailing Analysis',
    discipline: 'SQL / Transactional Analytics',
    summary:
      'I used SQL to analyze several years of rider, driver, trip, payment, retention, cancellation, and revenue data.',
    outcome:
      'I answered questions about cohorts, quarterly growth, driver performance, city cancellations, and loyal riders.',
    tags: ['SQL', 'Cohorts', 'Revenue'],
    href: 'https://github.com/Adeoye03/RidesAnalysis',
    linkLabel: 'View repository',
    image: ridesIllustration,
    imageAlt: 'Illustration of a ride-hailing route connected to charts and databases',
    accent: 'blue',
    span: 'compact',
  },
  {
    id: 'weather-model',
    title: 'Weather Prediction Model',
    discipline: 'Python / Machine Learning',
    summary:
      'I prepared the data, explored it, trained a weather prediction model, and evaluated its performance in one notebook.',
    outcome:
      'I turned changing weather signals into a repeatable model workflow with measurable results.',
    tags: ['Python', 'scikit-learn', 'Pandas'],
    href: 'https://github.com/Adeoye03/ML/blob/main/WeatherPrediction.ipynb',
    linkLabel: 'View notebook',
    image: weatherIllustration,
    imageAlt: 'Illustration of a cloud connecting weather signals to a prediction model',
    accent: 'green',
    span: 'compact',
  },
  {
    id: 'movielens',
    title: 'MovieLens Rating Analysis',
    discipline: 'Python / Exploratory Analysis',
    summary:
      'I joined ratings, genres, users, and timestamps to understand what people watch and how they score it.',
    outcome:
      'I explored rating distributions, popular films and genres, user activity, and changes in engagement over time.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    href: 'https://github.com/Adeoye03/MovieLensAnalysis',
    linkLabel: 'View repository',
    image: movieLensIllustration,
    imageAlt: 'Illustration of a film character studying ratings, clusters, and trend charts',
    accent: 'pink',
    span: 'wide',
  },
]

export const archiveProjects: ArchiveProject[] = [
  {
    title: 'First ML Project',
    discipline: 'Python / Predictive Modeling',
    summary: 'I built my first complete model as part of a structured machine learning path.',
    href: 'https://github.com/Adeoye03/ML/blob/main/First_project.ipynb',
    linkLabel: 'View notebook',
    tags: ['Python', 'scikit-learn'],
  },
  {
    title: 'Accenture Analytics Simulation',
    discipline: 'Data Analytics / Visualization',
    summary: 'I cleaned, modeled, and analyzed seven datasets, then presented what I found for stakeholders.',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_6zYJrahasJayNESb8_1724756484231_completion_certificate.pdf',
    linkLabel: 'View certificate',
    tags: ['Data cleaning', 'Data modeling', 'PowerPoint'],
  },
  {
    title: 'Deloitte Analytics Simulation',
    discipline: 'Analytics / Forensic Technology',
    summary: 'I built a Tableau dashboard and used Excel classification to support my conclusions.',
    href: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6zYJrahasJayNESb8_1758541399592_completion_certificate.pdf',
    linkLabel: 'View certificate',
    tags: ['Tableau', 'Excel', 'Classification'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Clean',
    summary: 'I start with trustworthy inputs.',
    detail: 'I resolve missing values, inconsistent categories, duplicates, and structural issues before I draw conclusions from the data.',
    accent: 'blue',
  },
  {
    title: 'Explore',
    summary: 'I look for the useful pattern.',
    detail: 'I test practical questions, trace relationships, and examine trends and outliers until the important pattern is clear.',
    accent: 'yellow',
  },
  {
    title: 'Communicate',
    summary: 'I make the answer easy to use.',
    detail: 'I shape my findings into a dashboard, model, or report that a non-technical reader can understand in thirty seconds.',
    accent: 'green',
  },
]

export const experiences: Experience[] = [
  {
    period: 'Feb – May 2026',
    role: 'Supervisor / Sales Representative',
    organization: 'Oxford Communications',
    location: 'Auchi, Edo State',
    details: [
      'I verified daily sales records for accuracy and accountability.',
      'I monitored inventory and prepared daily reports for the CEO.',
    ],
    accent: 'orange',
  },
  {
    period: 'Sep 2025',
    role: 'Data Analytics Intern',
    organization: 'Deloitte Australia via Forage',
    details: [
      'I completed a data analysis and forensic technology simulation.',
      'I built a Tableau dashboard and classified records in Excel.',
    ],
    accent: 'blue',
  },
  {
    period: 'Aug 2024',
    role: 'Data Analytics & Visualization Intern',
    organization: 'Accenture North America via Forage',
    details: [
      'I modeled and analyzed seven datasets for a social media client.',
      'I created a stakeholder presentation and recorded walkthrough.',
    ],
    accent: 'green',
  },
  {
    period: '2023 – 2024',
    role: 'Vice President',
    organization: 'NACOS, Edo State University Iyamho',
    details: [
      'I served on the pioneer executive team that established the chapter.',
      'I co-led a two-day academic and community event programme.',
    ],
    accent: 'yellow',
  },
]

export const education: Education[] = [
  {
    period: 'Oct 2022 – Oct 2025',
    qualification: 'B.Sc. Computer Science',
    institution: 'Edo University Iyamho',
    location: 'Edo State, Nigeria',
  },
  {
    period: 'Nov 2019 – Mar 2022',
    qualification: 'OND, Computer Science',
    institution: 'Auchi Polytechnic',
    location: 'Edo State, Nigeria',
  },
]

export const credentials: Credential[] = [
  {
    title: 'Data Analyst Associate',
    issuer: 'DataCamp',
    date: 'Jul 2024',
    href: 'https://www.datacamp.com/certificate/DAA0010308347751',
    accent: 'blue',
  },
  {
    title: 'Google Data Analytics Specialization',
    issuer: 'Coursera',
    date: 'Aug 2024',
    href: 'https://www.coursera.org/account/accomplishments/specialization/EJB3NOLTXUGN',
    accent: 'yellow',
  },
  {
    title: 'Data Analyst Certificate',
    issuer: 'DataCamp',
    date: 'Sep 2024',
    href: 'https://www.datacamp.com/certificate/DA0020028475696',
    accent: 'green',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'Apr 2025',
    href: 'https://www.credly.com/badges/fd6119ac-1a82-45b5-abe6-4c1af9ec6e5c/linked_in_profile',
    accent: 'orange',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'May 2024',
    href: 'https://www.credly.com/badges/b6c69c13-b28c-4c68-9adf-f0111965d7f3/public_url',
    accent: 'pink',
  },
  {
    title: 'Analytics & Visualization Simulation',
    issuer: 'Accenture North America',
    date: 'Aug 2024',
    href: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_6zYJrahasJayNESb8_1724756484231_completion_certificate.pdf',
    accent: 'blue',
  },
  {
    title: 'Data Analytics Simulation',
    issuer: 'Deloitte Australia',
    date: 'Sep 2025',
    href: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6zYJrahasJayNESb8_1758541399592_completion_certificate.pdf',
    accent: 'green',
  },
]
