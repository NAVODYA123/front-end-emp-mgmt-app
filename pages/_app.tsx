import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../src/store/store'
import { Provider } from 'react-redux'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
     <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  )
}
