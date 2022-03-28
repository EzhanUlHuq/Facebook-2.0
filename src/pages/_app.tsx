import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <SessionProvider><Component {...pageProps} />
   <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
  </SessionProvider>
}

export default MyApp
