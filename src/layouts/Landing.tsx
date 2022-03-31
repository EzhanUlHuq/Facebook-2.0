import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
//import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
const  Landing = ({ children, header,}: any) => {
  return (
    <div>
      <Head>
        <title>Facebook 2.0</title>
        <meta name='description' content='Facebook web' />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
       
      </Head>
      <Navbar />
      {
        header && <div className="w-full">{header}</div>
      }
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Landing