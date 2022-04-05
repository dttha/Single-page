import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import img from '../../../public/Group 18 Copy.png'
import Button from '../Button'
import styles from '../../../src/components/Footer/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.background_linear}></div>
      <div className={styles.background_image}>
        <div className={styles.wrap_content_footer}>
          <div className={styles.try_profession}>
            Try professional tools for free
          </div>
          <div className={styles.title}>
            Building your&nbsp;
            <span>Branded&nbsp;</span>
            <span>eCommerce&nbsp;</span>
            <span>Experience&nbsp;</span>
            today with Xopify!
          </div>
          <div className={styles.try_it}>
            Try it for free and create a meaningful connection with your audiences with our professionally designed tools!
          </div>
          <div className={styles.btn}>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
