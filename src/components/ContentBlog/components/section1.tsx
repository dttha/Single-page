import { Col, Row } from 'antd'
import Image from 'next/image'
import image1 from "../../../../public/post1.png"
import styles from '../contentBlog.module.css'

export default function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.container_blog + " " + styles.container_post}>
        <Row gutter={[25, 25]}>
          <Col span={8}>
            <div className={styles.block_post}>
              <div className={styles.block_post_img}>
                <Image className={styles.img_blog} alt='post-1' src={image1} width='470' height="357" />
              </div>
              <div className={styles.block_post_title}>
                #9 Deep talk show: with our leader, “No pressure, no diamond”
              </div>
              <div className={styles.block_post_date}>
                SME Insight • 19 January 2020
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.block_post}>
              <div className={styles.block_post_img}>
                <Image className={styles.img_blog} alt='post-1' src={image1} width='470' height="357" />
              </div>
              <div className={styles.block_post_title}>
                #9 Deep talk show: with our leader, “No pressure, no diamond”
              </div>
              <div className={styles.block_post_date}>
                SME Insight • 19 January 2020
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.block_post}>
              <div className={styles.block_post_img}>
                <Image className={styles.img_blog} alt='post-1' src={image1} width='470' height="357" />
              </div>
              <div className={styles.block_post_title}>
                #9 Deep talk show: with our leader, “No pressure, no diamond”
              </div>
              <div className={styles.block_post_date}>
                SME Insight • 19 January 2020
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}
