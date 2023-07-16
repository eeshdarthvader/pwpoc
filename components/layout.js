import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ preview, children, theme }) {
  return (
    <div className={theme}>
      <Meta />
      <Header />
      <div className={`min-h-screen dark:bg-black dark:text-white`} >
        <main>{children}</main>
      </div>
    </div>
  )
}
