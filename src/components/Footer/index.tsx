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
      <div className={"flex " + styles.wrap_footer}>
        <div className={styles.logo_footer}>
          <Image alt='logo' className={styles.logo} src={img} width="175" height="51" />
        </div>
        <div className={styles.footer_content}>
          <div className={styles.wrap_list}>
            <div className={styles.list_title}>
              Product
            </div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                XO Section
              </li>
              <li className={styles.list_item}>
                XO Gallery
              </li>
              <li className={styles.list_item}>
                XO Shop The Look
              </li>
              <li className={styles.list_item}>
                XO Cart Upsell
              </li>
            </ul>
          </div>
          <div className={styles.wrap_list}>
            <div className={styles.list_title}>
              more about xo
            </div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                Theme gallery
              </li>
              <li className={styles.list_item}>
                Casestudy
              </li>
              <li className={styles.list_item}>
                About us
              </li>
            </ul>
          </div>
          <div className={styles.wrap_list}>
            <div className={styles.list_title}>
              Support
            </div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                Document
              </li>
              <li className={styles.list_item}>
                Email: ciao@xopify.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="flex justify-content-between">
          <div className={styles.font_copyright}>
            XOpify ©2021. All rights resserved.
          </div>
          <div className={styles.font_copyright}>
            <div className={styles.font_copyright_text}>
              Document&nbsp;
              <FontAwesomeIcon className={styles.font_icon} icon={faCircle} style={{ fontSize: 5, marginBottom: 3, marginLeft: 3, marginRight: 5 }} />
              Chanelog
            </div>
            <FontAwesomeIcon className={styles.font_icon} icon={faFacebook} />
            <FontAwesomeIcon className={styles.font_icon} icon={faTwitter} />
          </div>
        </div>
      </div >
    </div>
  )
}
