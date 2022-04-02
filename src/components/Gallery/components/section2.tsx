import Image from "next/image"
import img from "../../../../public/Group 5437.png"
import img2 from "../../../../public/Ellipse 43.png"
import styles from '../../../../src/components/Gallery/gallery.module.css'

export default function Section2() {
  return (
    <div className={styles.section2}>
      <div className={styles.section2_container}>
        <div className={styles.section2_title}>
          Our customers say
        </div>
        <div className={styles.section2_block}>
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="50" viewBox="0 0 62 50" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.1875 45.5C20.6792 48.0667 17.5583 49.35 13.825 49.35C9.85833 49.35 6.5625 47.8917 3.9375 44.975C1.3125 42.0583 0 38.3833 0 33.95C0 27.0667 2.39167 20.4167 7.175 14C11.725 7.7 17.85 3.03333 25.55 0L29.4 5.425C23.2167 8.34167 18.8417 11.8417 16.275 15.925C14.525 18.8417 13.65 20.825 13.65 21.875C13.65 22.6917 14.175 23.2167 15.225 23.45C18.8417 24.0333 21.7 25.4333 23.8 27.65C25.9 29.8667 26.95 32.6083 26.95 35.875C26.95 39.725 25.6958 42.9333 23.1875 45.5ZM55.3867 45.5C52.8784 48.0667 49.7576 49.35 46.0242 49.35C42.0576 49.35 38.7617 47.8917 36.1367 44.975C33.5117 42.0583 32.1992 38.3833 32.1992 33.95C32.1992 27.0667 34.5909 20.4167 39.3742 14C43.9242 7.7 50.0492 3.03333 57.7492 0L61.5992 5.425C55.4159 8.34167 51.0409 11.8417 48.4742 15.925C46.7242 18.8417 45.8492 20.825 45.8492 21.875C45.8492 22.6917 46.3742 23.2167 47.4242 23.45C51.0409 24.0333 53.8992 25.4333 55.9992 27.65C58.0992 29.8667 59.1492 32.6083 59.1492 35.875C59.1492 39.725 57.8951 42.9333 55.3867 45.5Z"
              fill="#13157F" />
          </svg>
          <div className={styles.section2_block_des}>
            Xopify is not like any other online store builder, it helps us to tell our story in the most meaningful way that reacts the deeper emotional level of our target customer. We would have never reached such success like today if we used a simple ecommerce page builder.
          </div>
        </div>
        <div className={styles.section2_block2}>
          <div className={styles.section2_block_img}>
            <Image src={img2} alt="" width="52" height="52" ></Image>
          </div>
          <div>
            <div style={{ fontFamily: "Manrope", fontSize: "16px", lineHeight: "22px", fontWeight: "700", color: "#13157f" }}>Reese Hammerson</div>
            <div style={{ fontFamily: "Manrope", fontSize: "15px", lineHeight: "24px", color: "rgba(0, 0, 0, 0.6)" }}>Director of Ecommerce</div>
          </div>
        </div>
        <div className={styles.section2_block3}>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
          <div className={styles.rectangle2}></div>
        </div>
      </div>
      <div className={styles.section2_background}>
        <Image className={styles.section2_background_img} src={img} alt="" width="100%"></Image>
      </div>
    </div>
  )
}
