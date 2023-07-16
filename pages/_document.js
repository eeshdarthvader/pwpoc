import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getProductSelectorBroker } from '../lib/api'

export default function Document({ theme }) {
  const isDarkTheme  = theme.toLowerCase() === 'dark'
  return (
    <Html lang="en" className={isDarkTheme ? 'bg-black': 'ng-white'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await NextDocument.getInitialProps(ctx)
  const { productSelectorBroker } = (await getProductSelectorBroker()) ?? {}
  return { ...initialProps, theme: productSelectorBroker.theme }
}
