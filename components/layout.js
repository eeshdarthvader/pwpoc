import Alert from '../components/alert'
import Meta from '../components/meta'
import { Footer } from './footer'
import Header from './header'

export default function Layout({ preview, children, theme }) {
  return (
    <div className={theme}>
      <Meta />
      <Header />
      <div className={`min-h-screen dark:bg-black dark:text-white`} >
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {/* include the footer component here */}
      <Footer />
    </div>
  )
}
