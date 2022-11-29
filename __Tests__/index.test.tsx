import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('landing page is loaded', () => {
  it('renders a heading in landing page', () => {
    render(<Home />)
    const title = screen.getByText('Welcome to employee management portal')  
  })
})
