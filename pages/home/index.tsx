import Head from 'next/head'
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Header from '../../src/components/Header'
import SectionHome from '../../src/components/Content/components/Section'
import Footer from '../../src/components/Footer'
import HomeCopy from '../../src/components/HomeCopy'

export default function HomePage() {
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
      {activeBtnTop && <div className="go-to-top-btn" onClick={goToTop}>
        <FontAwesomeIcon className="go-to-top-icon" icon={faArrowUp}></FontAwesomeIcon>
      </div>}
      <HomeCopy></HomeCopy>
      <Footer />

    </div>
  )
}
