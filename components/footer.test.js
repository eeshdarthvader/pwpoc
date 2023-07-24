/**
 * Write tests to cover footer UI
 */
import { render, screen } from '@testing-library/react'
import { Footer } from '../components/footer'

describe('Footer', () => {
    it('renders footer with text', () => {
        render(<Footer />)
        expect(screen.getByText('All rights reserved')).toBeInTheDocument()
    })
    it('renders footer with logo', () => {
        render(<Footer />)
        expect(screen.getByAltText('scalable capital logo')).toBeInTheDocument()
    })
}
)


