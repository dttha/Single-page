import Image from "next/image";
import fill1 from "../../../../../public/Group 6.png"
import img from "../../../../../public/people working.png"
import img2 from "../../../../../public/Group 5483.png"
import img3 from "../../../../../public/16410.png"
import img4 from "../../../../../public/Group 7.png"
import Button from "../../../Button";
import styles from './section.module.css';

export default function SectionHome() {
  return (
    <div className={styles.wrap_section}>
      <div className={styles.wrap_content_title}>
        <div className={styles.wrap_first}>
          <div className={styles.number}>
            #1
          </div>
          <div className={styles.text}>
            Intuitive & educational eCommerce
          </div>
        </div>
        <div className={styles.wrap_text}>
          <div className={styles.title}>
            The first&nbsp;<span>“all in one”</span>&nbsp;intuitive and educational eCommerce experience
          </div>
          <div className={styles.description}>
            Why efficiency and user-friendly can’t get along? Build your pages in confidence with the most optimized experience and informative instructions along the way that ensures success for even a first-time & non-technical eCommerce store owner.
          </div>
        </div>
      </div>
      <div className={styles.wrap_image}>
        <Image src={img} alt="people working image" width="1454" height="710" />
        <div className={styles.form}>
          <div className={styles.content_suggestion}>
            <Image src={fill1} alt="" width="45" height="47" />
            <div className={styles.form_text}>Content suggestion</div>
          </div>
          <div className={styles.form_input}>
            <div className={styles.form_input_icon}><div style={{ color: "#696969" }}>Aa</div></div>
            <div className={styles.form_box}>
              <div className={styles.form_field}>Your company mission</div>
            </div>
          </div>
          <div className={styles.form_input}>
            <div className={styles.form_input_icon}></div>
            <div className={styles.form_box2}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75%" }}>
                <Image src={img3} alt="" width="100" height="88" />
              </div>
              <div className={styles.form_field}>Add image <span>(file size should lower than 1kb)</span></div>
            </div>
          </div>
          <div className={styles.img4}>
            <Image src={img4} alt="" width="25" height="38" />
          </div>
          <div className={styles.form_text} style={{ marginTop: "19px", width: "215px", maxWidth: "100%" }}>
            Note for a better ecommerce experience
          </div>
        </div>
      </div>
      <div className={styles.powerful}>
        <div className={styles.title}>
          Powerful technology for&nbsp;<span>powerful story/</span>&nbsp;brand
        </div>
        <div className={styles.description}>
          Our powerful tools are designed with advanced development languages that helps optimize any brand experience to work faster and consistently across any devices
        </div>
      </div>
      <div className={styles.btn}>
        <Button>Try our tools for free</Button>
      </div>
      <div className={styles.group_img}>
        <Image src={img2} alt="" width="1340" height="800" />
      </div>
    </div>
  )
}
