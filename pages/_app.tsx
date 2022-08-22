import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/modules/Footer'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import ToastContainer from '../components/atoms/ToastContainer'
import Header from '../components/modules/Header'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    )
}

export default MyApp
