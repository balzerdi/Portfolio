import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Work from '../components/sections/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dimitri Balzer - Interaction Designer and Frontend Developer</title>
        <meta name="description" content='Dimitri Balzer is an interaction designer and frontend developer, specialized in the design and development of digital products such as interactive web apps and cross platform mobile applications.' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default Home
