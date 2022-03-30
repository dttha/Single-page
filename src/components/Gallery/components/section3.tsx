import { Col, Row } from 'antd'
import Button from '../../Button'
import img from "../../../../public/asia-businesswoman-social-distancing-new-normal-situation-virus-prevention-while-using-laptop-presentation-colleagues-about-plan-video-call-while-work-office-life-after-corona-virus 1.png"
import styles from '../../../../src/components/Gallery/gallery.module.css'
import Image from 'next/image'


export default function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.section3_container}>
        <div className={styles.section3_container_block1}>
          <div>
            <div style={{ fontFamily: "Manrope", fontSize: "13px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
              Try before you buy
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.section3_block1_des}>
                7-day&nbsp;
                <span>free trial.&nbsp;</span>
                No credit card required
              </div>
            </div>
          </div>
        </div>
        <Row gutter={[30, 30]}>
          <Col span={8}>
            <div className={styles.section3_block_box}>
              <div className={styles.section3_block_box_container}>
                <div style={{ fontFamily: "Manrope", fontSize: "20px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
                  Free
                </div>
                <div style={{ marginTop: "5", fontFamily: "Source Serif Pro", fontSize: "28px", lineHeight: "32px", textAlign: "center", fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
                  Free member
                </div>
                <div className={styles.line2}></div>
                <div className={styles.section3_text}>
                  <span>Maximum upload: 12 images</span>
                  <span>Gallery types: Grid, Masonry, Justified, Stack</span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.section3_block_box} style={{ background: "#f2f2f2", border: "1px solid rgba(0, 0, 0, 0.1)", boxSizing: "border-box" }}>
              <div className={styles.section3_block_box_container}>
                <div style={{ fontFamily: "Manrope", fontSize: "20px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
                  Basic
                </div>
                <div style={{ marginTop: "5", fontFamily: "Source Serif Pro", fontSize: "28px", lineHeight: "32px", textAlign: "center", fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
                  $5.95/month
                </div>
                <div className={styles.line2}></div>
                <div className={styles.section3_text}>
                  <span> Unlimited images</span>
                  <span>Unlimited galleries</span>
                  <span>All gallery types </span>
                  <span>Multiple languages </span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.section3_block_box} style={{ background: "#f2f2f2", border: "1px solid rgba(0, 0, 0, 0.1)", boxSizing: "border-box" }}>
              <div className={styles.section3_block_box_container}>
                <div style={{ fontFamily: "Manrope", fontSize: "20px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
                  Pro
                </div>
                <div style={{ marginTop: "5", fontFamily: "Source Serif Pro", fontSize: "28px", lineHeight: "32px", textAlign: "center", fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
                  $14.95/month
                </div>
                <div className={styles.line2}></div>
                <div className={styles.section3_text}>
                  <span>Unlimited images</span>
                  <span>Tag products/links to images (hotspot)</span>
                  <span>Unlimited galleries</span>
                  <span>All gallery types</span>
                  <span>Unlimited albums</span>
                  <span>Multiple languages</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: "28px", marginLeft: "5px" }}>
          <div className={styles.section3_text} style={{ fontSize: "13px", lineHeight: "21px" }}>
            <span>* All charges are billed in USD.</span>
            <span>** Recurring charges, including monthly or usage-based charges, are billed every 30 days.</span>
          </div>
        </div>
        <div className={styles.section3_container_block2}>
          <div style={{ display: "flex" }}>
            <div className={styles.section3_container_block2_content}>
              <div className={styles.section3_container_block2_title}>
                text us your message
              </div>
              <div className={styles.section3_container_block2_question}>
                XO Gallery lacks features you love?
              </div>
              <div className={styles.section3_container_block2_des}>
                We are willing to hear from you. All your comments will be appreciated and considered for the next update ;)
              </div>
              <div style={{ width: "200px", marginBottom: "120px" }}>
                <Button>Send message</Button>
              </div>
            </div>
            <div className={styles.section3_container_block2_img}>
              <Image src={img} alt="" width="100%" height="100%"></Image>
            </div>
          </div>
        </div>
        <div className={styles.section3_container_block3}>
          <div className={styles.section3_container_block3_title}>
            Frequently asked questions
          </div>
        </div>
      </div>
    </div>
  )
}
