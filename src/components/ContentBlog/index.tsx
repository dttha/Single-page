import { Layout } from 'antd'
import React from 'react'
import styles from './contentBlog.module.css'
import image1 from '../../../public/image 1.png'
import image2 from '../../../public/unsplash_qCi_MzVODoU.png'
import image3 from '../../../public/unsplash_nNMBa7Y1Ymk.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function ContentBlog() {
  return (
    <Layout className={styles.wrapper}>
      <div className={styles.content_title}>
        Latest Updates
      </div>
      <div className={`flex justify-content-between align-items-center ${styles.container_blog}`}>
        <div className={styles.wrap_img_blog}>
          <div className={styles.image_blog}>
            <Image className={styles.img_blog} alt='image-blog-1' src={image1} width='990' height="650" />
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
