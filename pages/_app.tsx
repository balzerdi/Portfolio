import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/modules/Footer'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../redux/store'
import Header from '../components/modules/Header'
import { useEffect, useState } from 'react'
import { add } from '../redux/toastSlices'

function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        setTimeout(() => {
            store.dispatch(add('Please note that this site is still a work in progress.'))
        }, 2000)

    }, [])

    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    )
}

export default MyApp
