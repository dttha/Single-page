import { Col, Row } from 'antd'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../Button'
import img from "../../../../public/asia-businesswoman-social-distancing-new-normal-situation-virus-prevention-while-using-laptop-presentation-colleagues-about-plan-video-call-while-work-office-life-after-corona-virus 1.png"
import styles from '../../../../src/components/Gallery/gallery.module.css'
import { useState } from 'react'


export default function Section3() {
  const [indexExpand, setIndexExpand] = useState(-1);
  const onToggleClick = function (index: number) {
    if (index != indexExpand) {
      setIndexExpand(index)
    } else {
      setIndexExpand(-1)
    }
  }

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
                  <div><div className={styles.dot}></div>Maximum upload: 12 images</div>
                  <div><div className={styles.dot}></div>Gallery types: Grid, Masonry, Justified, Stack</div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.section3_block_box} >
              <div className={styles.section3_block_box_container}>
                <div style={{ fontFamily: "Manrope", fontSize: "20px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
                  Basic
                </div>
                <div style={{ marginTop: "5", fontFamily: "Source Serif Pro", fontSize: "28px", lineHeight: "32px", textAlign: "center", fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
                  $5.95/month
                </div>
                <div className={styles.line2}></div>
                <div className={styles.section3_text}>
                  <div><div className={styles.dot}></div>Unlimited images</div>
                  <div><div className={styles.dot}></div>Unlimited galleries</div>
                  <div><div className={styles.dot}></div>All gallery types </div>
                  <div><div className={styles.dot}></div>Multiple languages </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.section3_block_box}>
              <div className={styles.section3_block_box_container}>
                <div style={{ fontFamily: "Manrope", fontSize: "20px", lineHeight: "26px", fontWeight: "600", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(0, 0, 0, 0.4)" }}>
                  Pro
                </div>
                <div style={{ marginTop: "5", fontFamily: "Source Serif Pro", fontSize: "28px", lineHeight: "32px", textAlign: "center", fontWeight: "600", color: "rgba(0, 0, 0, 0.9)" }}>
                  $14.95/month
                </div>
                <div className={styles.line2}></div>
                <div className={styles.section3_text}>
                  <div><div className={styles.dot}></div>Unlimited images</div>
                  <div><div className={styles.dot}></div>Tag products/links to images (hotspot)</div>
                  <div><div className={styles.dot}></div>Unlimited galleries</div>
                  <div><div className={styles.dot}></div>All gallery types</div>
                  <div><div className={styles.dot}></div>Unlimited albums</div>
                  <div><div className={styles.dot}></div>Multiple languages</div>
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
              <Image src={img} alt="" width="100%" quality={100} objectFit="cover"></Image>
            </div>
          </div>
        </div>
        <div className={styles.section3_container_block3}>
          <div className={styles.section3_container_block3_title}>
            Frequently asked questions
          </div>
          <div className={styles.section3_container_block3_dropdown}>
            <div className={styles.section3_container_block3_line}></div>
            <div className={styles.section3_container_block3_wrap_dropdown_item} onClick={() => { onToggleClick(0) }}>
              <div className={styles.wrap_title_dropdown}>
                <div className={styles.section3_container_block3_dropdown_item}>How many galleries can I create using XO Gallery?</div>
                <FontAwesomeIcon style={{ width: "23px", height: "23px", color: "#C4C4C4" }} className={styles.plus_icon} icon={indexExpand == 0 ? faMinus : faPlus}></FontAwesomeIcon>
              </div>
              <div style={{ maxHeight: indexExpand == 0 ? 100 : 0 }} className={styles.section3_container_block3_dropdown_item_content_show}>The number of galleries you can create with XO Gallery is unlimited.</div>
            </div>
            <div>
              <div className={styles.section3_container_block3_line}></div>
              <div className={styles.section3_container_block3_wrap_dropdown_item} onClick={() => { onToggleClick(1) }}>
                <div className={styles.wrap_title_dropdown}>
                  <div className={styles.section3_container_block3_dropdown_item}>Can I try it before purchasing?</div>
                  <FontAwesomeIcon style={{ width: "23px", height: "23px", color: "#C4C4C4" }} icon={indexExpand == 1 ? faMinus : faPlus}></FontAwesomeIcon>
                </div>
                <div style={{ maxHeight: indexExpand == 1 ? 100 : 0 }} className={styles.section3_container_block3_dropdown_item_content_show}>The number of galleries you can create with XO Gallery is unlimited.</div>
              </div>
            </div>
            <div>
              <div className={styles.section3_container_block3_line}></div>
              <div className={styles.section3_container_block3_wrap_dropdown_item} onClick={() => { onToggleClick(2) }}>
                <div className={styles.wrap_title_dropdown}>
                  <div className={styles.section3_container_block3_dropdown_item}>Does XO Gallery work with my theme?</div>
                  <FontAwesomeIcon style={{ width: "23px", height: "23px", color: "#C4C4C4" }} icon={indexExpand == 2 ? faMinus : faPlus}></FontAwesomeIcon>
                </div>
                <div style={{ maxHeight: indexExpand == 2 ? 100 : 0 }} className={styles.section3_container_block3_dropdown_item_content_show}>The number of galleries you can create with XO Gallery is unlimited.</div>
              </div>
            </div>
            <div>
              <div className={styles.section3_container_block3_line}></div>
              <div className={styles.section3_container_block3_wrap_dropdown_item} onClick={() => { onToggleClick(3) }}>
                <div className={styles.wrap_title_dropdown}>
                  <div className={styles.section3_container_block3_dropdown_item}>What will happen after my trial ends?</div>
                  <FontAwesomeIcon style={{ width: "23px", height: "23px", color: "#C4C4C4" }} icon={indexExpand == 3 ? faMinus : faPlus}></FontAwesomeIcon>
                </div>
                <div style={{ maxHeight: indexExpand == 3 ? 100 : 0 }} className={styles.section3_container_block3_dropdown_item_content_show}>The number of galleries you can create with XO Gallery is unlimited.</div>
              </div>
            </div>
            <div>
              <div className={styles.section3_container_block3_line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
