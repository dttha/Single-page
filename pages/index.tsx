import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Content from '../src/components/Content'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import SectionHome from '../src/components/Content/components/Section'
import ContextFooter from '../src/components/Footer/components/footer'

const Home: NextPage = () => {
  const [activeBtnTop, setActiveBtnTop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setActiveBtnTop(true)
      } else {
        setActiveBtnTop(false)
      }
    })
  })
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {activeBtnTop && <div className="go-to-top-btn" onClick={goToTop}>
        <FontAwesomeIcon className="go-to-top-icon" icon={faArrowUp}></FontAwesomeIcon>
      </div>}
      <Header />
      {/* <Content /> */}
      <SectionHome />
      <Footer />
      <ContextFooter></ContextFooter>
    </div>
  )
}

export default Home


