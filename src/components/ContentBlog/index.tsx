import { Layout } from 'antd'
import React from 'react'
import image1 from '../../../public/image 1.png'
import image2 from '../../../public/unsplash_qCi_MzVODoU.png'
import image3 from '../../../public/unsplash_nNMBa7Y1Ymk.png'
import image4 from '../../../public/unsplash_gMsnXqILjp4.png'
import image5 from '../../../public/unsplash_K_VeavYEfdA.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import styles from './contentBlog.module.css'

export default function ContentBlog() {
  return (
    <Layout className={styles.wrapper}>
      <div className={styles.content_title}>
        Latest Updates
      </div>
      <div className={`flex justify-content-between ${styles.container_blog}`}>
        <div className={styles.wrap_img_blog}>
          <div className={styles.image_blog}>
            <Image className={styles.img_blog} alt='image-blog-1' src={image1} width='920' />
          </div>
          <div className={styles.wrap_content_img}>
            <div className={styles.date}>
              E-commerce tips • 19 January 2020
            </div>
            <div className={styles.des}>
              Tips and observations on remote working from a remote company. (Hint: It’s us!)
            </div>
          </div>
        </div>
        <div className={styles.block_casestudy}>
          <div className={styles.container_block_casestudy}>
            <div className={styles.title_block_casestudy}>
              Casestudy
            </div>
            <div className={styles.line_block_casestudy}></div>
            <div className={styles.row}>
              <div className={styles.image_row}>
                <Image className={styles.img_row} alt='image-blog-row-1' src={image2} width='110' height="100%" />
              </div>
              <div className={styles.content_row}>
                How Createur Made Waves for Client Sunny Life
                <span>12 January 2022</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.image_row}>
                <Image className={styles.img_row} alt='image-blog-row-2' src={image3} width='110' height="100%" />
              </div>
              <div className={styles.content_row}>
                Talk show: with our leader, “No pressure, no diamond”
                <span>09 January 2022</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.image_row}>
                <Image className={styles.img_row} alt='image-blog-row-2' src={image4} width='110' height="100%" />
              </div>
              <div className={styles.content_row}>
                Survey questions 101: over 70 survey question examples
                <span>30 December 2021</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.image_row}>
                <Image className={styles.img_row} alt='image-blog-row-2' src={image5} width='110' height="100%" />
              </div>
              <div className={styles.content_row}>
                Using heat maps to improve your website’s UX: 5 ways
                <span>20 August 2021</span>
              </div>
            </div>
            <div className={styles.line_block_casestudy}></div>
            <div className={styles.end_block_casestudy}>
              See our case studies
              <FontAwesomeIcon icon={faCaretRight} style={{ marginLeft: 10 }}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
