import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { warpper } from '../src/store/store'
import { Provider, useSelector } from 'react-redux'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import { FC } from 'react'
import LayoutWrapper from '../src/components/LayoutWrapper'

const App: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props } = warpper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <LayoutWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LayoutWrapper>
    </Provider>
  )
}

export default App
