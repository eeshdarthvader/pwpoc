import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ children }) {
  return (
    <div
      
    >
      <Container>
        <div className="py-2 text-center text-m">
          {children}
        </div>
      </Container>
    </div>
  )
}
