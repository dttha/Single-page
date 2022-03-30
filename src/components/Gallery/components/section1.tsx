import { Col, Row } from 'antd'
import Image from 'next/image'
import img1 from "../../../../public/Vector.png"
import img2 from "../../../../public/Group.png"
import img3 from "../../../../public/Group1.png"
import img4 from "../../../../public/Vector1.png"
import styles from '../../../../src/components/Gallery/gallery.module.css'

export default function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.section1_container}>
        <div className={styles.section1_title}>
          <span>All-in-one&nbsp;</span>
          <span>app&nbsp;</span>
          your business can count on
        </div>
        <div className={styles.section1_key}>
          key features
        </div>
        <Row gutter={[25, 25]}>
          <Col span={6}>
            <div className={styles.section1_block}>
              <div className={styles.section1_inside_block}>
                <div className={styles.section1_inside_block_img}>
                  <Image objectFit="contain" src={img1} height="54" width="54" alt="vector"></Image>
                </div>
                <div className={styles.section1_inside_block_content}>
                  <div style={{ fontFamily: "Manrope", fontWeight: "600", fontSize: "18px", lineHeight: "30px", color: "rgba(255, 255, 255, 0.9)" }}>
                    Image Optimization
                  </div>
                  <div style={{ fontFamily: "Manrope", fontSize: "15px", lineHeight: "24px", color: "rgba(255, 255, 255, 0.5)" }}>
                    Option to add filters will maximize user experience by letting them esily search through your galleries.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section1_block} style={{ background: "#072AC8", border: "1px solid rgba(255, 255, 255, 0.07)", boxSizing: "border-box" }}>
              <div className={styles.section1_inside_block}>
                <div className={styles.section1_inside_block_img}>
                  <Image src={img2} height="54" width="54" alt="vector"></Image>
                </div>
                <div className={styles.section1_inside_block_content}>
                  <div style={{ fontFamily: "Manrope", fontWeight: "600", fontSize: "18px", lineHeight: "30px", color: "rgba(255, 255, 255, 0.9)" }}>
                    Drag & Drop Builder
                  </div>
                  <div style={{ fontFamily: "Manrope", fontSize: "15", lineHeight: "24px", color: "rgba(255, 255, 255, 0.5)" }}>
                    A few clicks to quickly create and modify your gallery without any coding knowledge required.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section1_block} style={{ background: "#072AC8", border: "1px solid rgba(255, 255, 255, 0.07)", boxSizing: "border-box" }}>
              <div className={styles.section1_inside_block}>
                <div className={styles.section1_inside_block_img}>
                  <Image src={img3} height="54" width="54" alt="vector"></Image>
                </div>
                <div className={styles.section1_inside_block_content}>
                  <div style={{ fontFamily: "Manrope", fontWeight: "600", fontSize: "18px", lineHeight: "30px", color: "rgba(255, 255, 255, 0.9)" }}>
                    Smart Filters
                  </div>
                  <div style={{ fontFamily: "Manrope", fontSize: "15px", lineHeight: "24px", color: "rgba(255, 255, 255, 0.5)" }}>
                    Option to add filters will maximize user experience by letting them esily search through your galleries.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section1_block} style={{ background: "#072AC8", border: "1px solid rgba(255, 255, 255, 0.07)", boxSizing: "border-box" }}>
              <div className={styles.section1_inside_block}>
                <div className={styles.section1_inside_block_img}>
                  <Image src={img4} height="54" width="54" alt="vector"></Image>
                </div>
                <div className={styles.section1_inside_block_content}>
                  <div style={{ fontFamily: "Manrope", fontWeight: "600", fontSize: "18", lineHeight: "30px", color: "rgba(255, 255, 255, 0.9)" }}>
                    16/7 Support
                  </div>
                  <div style={{ fontFamily: "Manrope", fontSize: "15", lineHeight: "24px", color: "rgba(255, 255, 255, 0.5)" }}>
                    Just relax, we got your problem. Our dedicated support is always available 16/7 upon your requests.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <div style={{ fontFamily: "Manrope", fontSize: "13px", fontWeight: "600", lineHeight: "26px", letterSpacing: "1px", color: "rgba(255, 255, 255, 0.6)", textTransform: "uppercase" }}>other features</div>
        <div className={styles.section1_block2}>
          <Row gutter={[60, 60]}>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Bulk upload images
              </div>
              <div className={styles.section1_block_other_features_des}>
                Save your valued time by uploading multiple images in gallery in single click by bulk image upload system
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Import images from URLs
              </div>
              <div className={styles.section1_block_other_features_des}>
                Apart from manually uploading, online photos can be automatically imported. All you need is just the images url
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                30+ hover effects
              </div>
              <div className={styles.section1_block_other_features_des}>
                Up to 37 magical hovering effects, making your own gallery to be unique and impressive has never been easier
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Create custom effects
              </div>
              <div className={styles.section1_block_other_features_des}>
                If up to 37 fantastic effects dont satisfy you, with a little knowledge about CSS, you can create your own easily
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Duplicate existing gallery
              </div>
              <div className={styles.section1_block_other_features_des}>
                You will have all your existing galleries, including their settings, duplicated into new ones within a second
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Embed videos
              </div>
              <div className={styles.section1_block_other_features_des}>
                Add video from Youtube and Vimeo to your gallery with ease to make your gallery much more dymanic ang intuitive
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Limit display
              </div>
              <div className={styles.section1_block_other_features_des}>
                You can set how many images you want to display to fit your shop theme and content layout
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Loadmore
              </div>
              <div className={styles.section1_block_other_features_des}>
                Arousing curiousity and enaging users with infinity scrolling with load more option
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Fullscreen lightbox
              </div>
              <div className={styles.section1_block_other_features_des}>
                Let your images speak with XO. Let your users feel the story and the value behind each maximum screen size picture
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Link & caption on image
              </div>
              <div className={styles.section1_block_other_features_des}>
                You can add caption to each image and even make it clickable by linking those captions to any page
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Custom hover layer
              </div>
              <div className={styles.section1_block_other_features_des}>
                In addition to the two available hover layers, it depends on you to add more with your own HTML/CSS understading
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Image layer manager
              </div>
              <div className={styles.section1_block_other_features_des}>
                A bunch of setting and modify options which are iconized to help you quickly and easily customize your gallery
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Import & export
              </div>
              <div className={styles.section1_block_other_features_des}>
                You have the tool to quickly export your gallery with all settings then easily import it to any of your other shops
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Easily preview your gallery
              </div>
              <div className={styles.section1_block_other_features_des}>
                Save your time with preview mode to insantly see any change of your galllerys settings without saving again and again
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Hide image on different devices
              </div>
              <div className={styles.section1_block_other_features_des}>
                Advanced display option will surely amaze you. You can choose to show specific images on specific devices
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.section1_block_other_features_title}>
                Easy publishing
              </div>
              <div className={styles.section1_block_other_features_des}>
                Just some simple clicks to push your gallery online without any coding knowledge and skills required
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
