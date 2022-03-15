import React from 'react'
import Image from 'next/image'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import line from '../../../public/line 4_1.png'
import banner from '../../../public/iStock_627198666.png'
import styles from '../Content/content.module.css'

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.wrap_content}>
        <div className={styles.wrap_row}>
          <div>
            <div className={styles.context}>
              <span className={styles.fontWhite}>Create</span>
              <span className={styles.fontGreen}> Branded</span>
              <span className={styles.fontWhite}> eCommerce Experience that</span>
              <span className={styles.fontGreen}> converts!</span>
            </div>
            <div className={styles.description}>
              We champion meaningful brands, products and services by creating an intuitive and codeless eCommerce experience that helps you to engagingly communicate your brand and build a strong connection with your audience.
            </div>
          </div>
          <div className="flex">
            <div className={styles.select_btn}>Explore</div>&nbsp;&nbsp;
            <FontAwesomeIcon className={styles.font_icon} icon={faCaretDown} />
          </div>
        </div>
      </div>
      <div className={styles.line}>
        <Image alt='line' src={line} width="2327" height="725.05" />
      </div>
      <div className={styles.banner}>
        <Image alt='banner' src={banner} width="2195" height="1463" />
      </div>
    </div>
  )
}
