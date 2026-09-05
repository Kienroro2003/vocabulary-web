import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the frontend foundation status', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Vocabulary Manager' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Desktop-first responsive')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Kiểm tra nền tảng' }),
    ).toHaveAttribute('href', '#setup-status')
  })
})
