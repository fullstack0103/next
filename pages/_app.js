import '../styles/globals.css'
import { SessionProvider } from '../src/contexts/SessionContext'
import { WebStrategy } from '../src/webStrategy'

function MyApp({ Component, pageProps }) {
  const webStrategy = new WebStrategy()

  return (
    <SessionProvider strategy={webStrategy}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
