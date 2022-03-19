import '../styles/globals.css'
import Head from 'next/head'
import '../utils/index'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = localStorage.getItem('theme');
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
