import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CredentialsSection } from './CredentialsSection'
import { ExperienceSection } from './ExperienceSection'
import { Hero } from './Hero'
import { Navigation } from './Navigation'

describe('portfolio essentials', () => {
  it('presents the portfolio positioning and two primary actions', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: 'Adeoye Precious',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('I turn raw data into decisions.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute(
      'href',
      '#work',
    )
    expect(screen.getByRole('link', { name: /start a conversation/i })).toHaveAttribute(
      'href',
      'mailto:omoadoni.adeoye03@gmail.com',
    )
  })

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation' })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('cycles through verified credentials', async () => {
    const user = userEvent.setup()
    render(<CredentialsSection />)

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /data analyst associate/i,
      }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next credential' }))

    expect(
      screen.queryByRole('heading', {
        level: 3,
        name: /data analyst associate/i,
      }),
    ).not.toBeInTheDocument()
    expect(screen.getByText('02 / 07')).toBeInTheDocument()
  })

  it('presents the complete experience timeline', () => {
    render(<ExperienceSection />)

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /supervisor.*sales representative/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Data Analytics Intern',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Vice President',
      }),
    ).toBeInTheDocument()
  })
})
