import Image from "next/image";
import fill1 from "../../../../../public/Group 6.png"
import img from "../../../../../public/people working.png"
import img2 from "../../../../../public/Group 5484.png"
import img3 from "../../../../../public/16410.png"
import img4 from "../../../../../public/Group 7.png"
import websitePerformance from "../../../../../public/Group 2.png"
import bitmap from "../../../../../public/Group 26.png"
import bitmap2 from "../../../../../public/Bitmap Copy 6.png"
import arrow from "../../../../../public/Group 6 arrow.png"
import arrow2 from "../../../../../public/Group 6 Copy.png"
import img5 from "../../../../../public/people working2.png"
import Button from "../../../Button";
import { useEffect, useState } from "react";
import styles from './section.module.css';

export default function SectionHome() {
  useEffect(() => {
    const group = document.getElementById("group") as HTMLElement;
    const groupImg = document.getElementById("group-img") as HTMLElement;
    const a = groupImg.getBoundingClientRect();
    if (a) {
      if (window.innerHeight > a.top + 100) {
        group?.classList.add(styles["active"])
      }
    }
    const eventScroll = window.addEventListener('scroll', () => {
      const group = document.getElementById("group") as HTMLElement;
      const groupImg = document.getElementById("group-img") as HTMLElement;
      const a = groupImg.getBoundingClientRect();
      if (a) {
        if (window.innerHeight > a.top + 100) {
          console.log("🚀 ~ file: index.tsx ~ line 33 ~ eventScroll ~ window.innerHeight", window.innerHeight)
          console.log("🚀 ~ file: index.tsx ~ line 33 ~ eventScroll ~ a.top + 100", a.top + 100)
          group?.classList.add(styles["active"])
        }
      }
    })
  }, [])

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
            The first&nbsp;<span>“all in one”&nbsp;</span>intuitive and educational eCommerce experience
          </div>
          <div className={styles.description}>
            Why efficiency and user-friendly can’t get along? Build your pages in confidence with the most optimized experience and informative instructions along the way that ensures success for even a first-time & non-technical eCommerce store owner.
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className={styles.wrap_image}>
        <div className={styles.img_pc}>
          <Image src={img} alt="people working image" width="1454" height="710" />
        </div>
        <div className={styles.img_mobile}>
          <Image src={img5} alt="people working image" width="326" height="506" objectFit="cover" objectPosition="top" />
        </div>
        <div className={styles.background_linear}></div>
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
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75%", flexDirection: "column" }}>
                <Image src={img3} alt="" width="100" height="88" />
              </div>
              <div>
                <div className={styles.form_field}>Add image <span>(file size should lower than 1kb)</span></div>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className={styles.img4}>
              <Image src={img4} alt="" layout="fill" />
            </div>
            <div className={styles.form_text} style={{ marginTop: "19px", width: "215px", maxWidth: "100%" }}>
              Note for a better ecommerce experience
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center"
        className={styles.powerful}>
        <div className={styles.title}>
          Powerful technology for&nbsp;<span>powerful story/&nbsp;</span>brand
        </div>
        <div className={styles.description}>
          Our powerful tools are designed with advanced development languages that helps optimize any brand experience to work faster and consistently across any devices
        </div>
      </div>
      <div
        data-aos="fade-up"
        className={styles.btn}>
        <Button>Try our tools for free</Button>
      </div>
      <div className={styles.group}>
        <div className={styles.hidden_group} id="group">
          <div
            className={styles.websitePerformance}>
            <Image src={websitePerformance} alt="" width="267" height="142" objectFit="cover" />
          </div>
          <div
            className={styles.bitmap}>
            <Image src={bitmap} alt="" width="288" height="263" objectFit="cover" />
          </div>
          <div
            className={styles.bitmap2}>
            <Image src={bitmap2} alt="" width="265" height="263" objectFit="cover" />
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          id="group-img"
          data-aos-duration="500"
          className={styles.group_img}>
          <Image src={img2} alt="" width="927" height="568" objectFit="cover" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-out-sine"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-left"
          data-aos-delay="1500"
          className={styles.arrow}>
          <Image src={arrow} alt="" width="45" height="35" objectFit="cover" />
          <div className={styles.suggestion1}>
            Tool Booking
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-sine"
          data-aos-duration="1000"
          data-aos-delay="1500"
          data-aos-anchor-placement="center-right"
          className={styles.arrow2}>
          <Image src={arrow2} alt="" width="45" height="35" objectFit="cover" />
          <div className={styles.suggestion2}>
            Consistent across devices
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-sine"
          data-aos-duration="1000"
          data-aos-delay="1500"
          className={styles.arrow3}>
          <div style={{ transform: 'rotate(180deg)' }}>
            <Image src={arrow} alt="" width="45" height="35" objectFit="cover" />
          </div>
          <div className={styles.suggestion1}>
            Tool Booking
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-sine"
          data-aos-duration="1000"
          data-aos-delay="1500"
          data-aos-anchor-placement="center-bottom"
          className={styles.arrow4}>
          <div style={{ transform: 'rotate(100deg)' }}>
            <Image src={arrow2} alt="" width="45" height="35" objectFit="cover" />
          </div>
          <div className={styles.suggestion2}>
            Consistent across devices
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.btn2}>
            <Button>Create your website</Button>
          </div>
        </div>
      </div>
      {/* <div style={{ transform: "rotate(16.89deg)" }}> */}
      <div style={{ overflow: "hidden" }}>
        <svg width="100%" height="602" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 391.541C6.15723 404.241 29.7978 447.716 83.4013 491.754C119.845 521.693 162.677 545.655 210.707 562.976C270.519 584.544 338.602 595.809 413.067 596.457C415.003 596.475 416.921 596.482 418.847 596.482C497.936 596.482 568.335 582.209 628.091 554.061C681.466 528.916 737.515 476.379 757.257 449.189C777 422 787 402.5 798.477 369.335C809.954 336.17 815.684 275.978 803.132 238.304C793.101 208.194 777.635 184.904 758.408 170.951C745.268 161.416 730.612 156.376 716.024 156.376C711.464 156.376 706.918 156.872 702.465 157.857C687.122 161.264 673.687 170.465 664.966 183.541C655.607 197.459 651.805 214.77 653.971 233.601C655.897 250.34 664.359 271.019 677.8 291.826C693.375 315.603 712.762 336.649 735.183 354.119C747.335 363.642 760.303 372.073 773.937 379.315L798.477 390.684C827.868 402.39 859.238 408.367 890.895 408.28C902.62 408.266 914.332 407.504 925.959 406.001C978.882 399.198 1019.21 374.156 1049.25 329.445C1075.15 290.896 1089.79 243.799 1103.96 198.196C1111.16 175.031 1117.97 153.152 1125.97 133.286C1147.67 79.4375 1185.66 40.4376 1235.82 20.502C1260.63 10.7631 1287.07 5.83713 1313.73 5.98726C1348.15 5.98726 1383.59 13.9257 1416.24 28.9453C1472.09 54.6425 1518.11 117.311 1566.84 183.671C1609.32 241.513 1653.24 301.325 1706.36 338.718C1738.46 361.313 1777.03 373.758 1814.96 373.756C1816.26 373.756 1817.58 373.741 1818.88 373.712C1860.45 372.767 1898.15 357.486 1927.91 329.522C1972.11 287.987 1991.11 226.778 2007.87 172.769L2011.14 162.258C2015.99 146.68 2021 130.609 2026.78 115.112"
            stroke="#15bcaf"
            strokeWidth="10"
            className="line_svg" />
        </svg>
      </div>
    </div>
    // </div>
  )
}
