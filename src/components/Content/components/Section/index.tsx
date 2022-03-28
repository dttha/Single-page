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
      <div style={{ transform: "rotate(16.89deg)" }}>
        <svg viewBox="0 0 2037.12 616.8">
          <defs xmlns="http://www.w3.org/2000/svg">
            <clipPath id="clip-path" transform="translate(5.08617 5.23892)">
              <path className="cls-1" d="M418.84668,606.48242c-1.92578,0-3.84375-.00781-5.77979-.02539C338.60205,605.80859,270.519,594.544,210.707,572.97559c-48.03027-17.32032-90.8623-41.28223-127.30566-71.22168C29.79785,457.71582,6.15723,414.24121,0,401.541l14.78076-6.26856c6.15723,12.26563,29.46631,53.94141,79.92188,95.05371,35.03174,28.54688,76.22119,51.41016,122.4248,67.9541C274.99463,579.002,340.96436,589.82812,413.20459,590.459c1.80811.01465,3.62207.02247,5.41895.02247,76.86621,0,145.04687-13.75977,202.64941-40.89649,50.915-23.98437,92.31348-57.56543,123.0459-99.80859a280.64505,280.64505,0,0,0,31.42676-55.36426l1.43261-3.37793-3.24121-1.71875a262.37088,262.37088,0,0,1-38.7539-25.19629,258.60524,258.60524,0,0,1-57.38282-62.293c-13.4414-20.80762-21.90332-41.48633-23.8291-58.22558-2.166-18.83106,1.63574-36.14161,10.99512-50.05957a60.952,60.952,0,0,1,37.499-25.6836,62.7423,62.7423,0,0,1,13.5586-1.48144c14.58789,0,29.24414,5.04,42.38378,14.57519,19.22754,13.95313,34.69336,37.24317,44.72461,67.35254,12.55176,37.67383,10.89844,84.208-4.65527,131.03125l-1.16894,3.51856,3.41992,1.43164a232.63179,232.63179,0,0,0,90.32617,17.98242,258.73086,258.73086,0,0,0,32.86426-2.13672c48.43066-6.22559,85.30371-29.29,112.72754-70.51465,24.05957-36.166,38.27343-81.8916,52.01953-126.11035,7.31054-23.51856,14.21093-45.71582,22.46582-66.2002,23.37695-58.00781,64.45117-100.081,118.78125-121.67187A225.847,225.847,0,0,1,1313.71729,0c36.73535,0,74.499,8.44043,109.208,24.41016,59.61426,27.42675,106.82325,91.71582,156.80371,159.77929,41.71875,56.8125,84.8545,115.55567,135.83887,151.44532,29.42871,20.71484,64.70117,32.123,99.32031,32.123q1.81788,0,3.62989-.042c37.55957-.85352,71.59863-14.63477,98.43554-39.85352,41.12891-38.64648,58.67285-95.17089,75.63868-149.833l3.27441-10.53223c4.93652-15.84668,10.02734-32.18848,15.98144-48.12207l14.93653,5.7373c-5.78418,15.49708-10.79,31.56739-15.64258,47.14551l-3.26855,10.51172c-16.76368,54.00879-35.76172,115.21777-79.96387,156.75293-29.75781,27.96387-67.46,43.24414-109.0293,44.18945-1.30469.0293-2.61621.04395-3.92285.04395-37.93066.002-76.499-12.44238-108.59863-35.03809-53.12012-37.39257-97.042-97.20507-139.51758-155.04687-48.72949-66.35938-94.749-129.02832-150.60352-154.72559-32.6455-15.01953-68.09179-22.958-102.50879-22.958A209.99389,209.99389,0,0,0,1235.82178,30.502c-50.16407,19.93555-88.14942,58.93555-109.85059,112.78418-8.00586,19.86621-14.80762,41.74512-22.00879,64.91016-14.17578,45.60254-28.81445,92.69922-54.71386,131.249-30.03809,44.71094-70.36622,69.75293-123.28907,76.55567a276.19159,276.19159,0,0,1-35.06445,2.27929,247.92324,247.92324,0,0,1-95.62109-18.89843l-3.6543-1.51758-1.55762,3.63867a296.504,296.504,0,0,1-32.80469,57.68652c-32.333,44.44336-75.791,79.72657-129.166,104.8711C568.33545,592.209,497.936,606.48242,418.84668,606.48242Zm297.105-424.09375a46.44813,46.44813,0,0,0-10.02441,1.08985c-20.75782,4.5996-39.959,24.4082-36.06055,58.29394,3.19629,27.792,30.0459,74.41406,75.17871,109.74805a246.16079,246.16079,0,0,0,33.52051,22.09668l4.26172,2.33105,1.46972-4.63086a246.71268,246.71268,0,0,0,6.77539-26.21c6.63477-33.21094,5.52637-65.79394-3.12011-91.74707-8.96875-26.91992-22.43457-47.48047-38.94141-59.459C738.63232,186.37012,727.20068,182.38867,715.95166,182.38867Z" /></clipPath>
            <clipPath id="clip-path-2" transform="translate(5.08617 5.23892)"><rect className="cls-1" x="-5.00032" y="-4.99989" width="2036.78674" height="616.48218" /></clipPath></defs>
          <path xmlns="http://www.w3.org/2000/svg" className="cls-1"
            stroke="#65FECC"
            // strokeWidth="15"
            d="M418.84668,606.48242c-1.92578,0-3.84375-.00781-5.77979-.02539C338.60205,605.80859,270.519,594.544,210.707,572.97559c-48.03027-17.32032-90.8623-41.28223-127.30566-71.22168C29.79785,457.71582,6.15723,414.24121,0,401.541l14.78076-6.26856c6.15723,12.26563,29.46631,53.94141,79.92188,95.05371,35.03174,28.54688,76.22119,51.41016,122.4248,67.9541C274.99463,579.002,340.96436,589.82812,413.20459,590.459c1.80811.01465,3.62207.02247,5.41895.02247,76.86621,0,145.04687-13.75977,202.64941-40.89649,50.915-23.98437,92.31348-57.56543,123.0459-99.80859a280.64505,280.64505,0,0,0,31.42676-55.36426l1.43261-3.37793-3.24121-1.71875a262.37088,262.37088,0,0,1-38.7539-25.19629,258.60524,258.60524,0,0,1-57.38282-62.293c-13.4414-20.80762-21.90332-41.48633-23.8291-58.22558-2.166-18.83106,1.63574-36.14161,10.99512-50.05957a60.952,60.952,0,0,1,37.499-25.6836,62.7423,62.7423,0,0,1,13.5586-1.48144c14.58789,0,29.24414,5.04,42.38378,14.57519,19.22754,13.95313,34.69336,37.24317,44.72461,67.35254,12.55176,37.67383,10.89844,84.208-4.65527,131.03125l-1.16894,3.51856,3.41992,1.43164a232.63179,232.63179,0,0,0,90.32617,17.98242,258.73086,258.73086,0,0,0,32.86426-2.13672c48.43066-6.22559,85.30371-29.29,112.72754-70.51465,24.05957-36.166,38.27343-81.8916,52.01953-126.11035,7.31054-23.51856,14.21093-45.71582,22.46582-66.2002,23.37695-58.00781,64.45117-100.081,118.78125-121.67187A225.847,225.847,0,0,1,1313.71729,0c36.73535,0,74.499,8.44043,109.208,24.41016,59.61426,27.42675,106.82325,91.71582,156.80371,159.77929,41.71875,56.8125,84.8545,115.55567,135.83887,151.44532,29.42871,20.71484,64.70117,32.123,99.32031,32.123q1.81788,0,3.62989-.042c37.55957-.85352,71.59863-14.63477,98.43554-39.85352,41.12891-38.64648,58.67285-95.17089,75.63868-149.833l3.27441-10.53223c4.93652-15.84668,10.02734-32.18848,15.98144-48.12207l14.93653,5.7373c-5.78418,15.49708-10.79,31.56739-15.64258,47.14551l-3.26855,10.51172c-16.76368,54.00879-35.76172,115.21777-79.96387,156.75293-29.75781,27.96387-67.46,43.24414-109.0293,44.18945-1.30469.0293-2.61621.04395-3.92285.04395-37.93066.002-76.499-12.44238-108.59863-35.03809-53.12012-37.39257-97.042-97.20507-139.51758-155.04687-48.72949-66.35938-94.749-129.02832-150.60352-154.72559-32.6455-15.01953-68.09179-22.958-102.50879-22.958A209.99389,209.99389,0,0,0,1235.82178,30.502c-50.16407,19.93555-88.14942,58.93555-109.85059,112.78418-8.00586,19.86621-14.80762,41.74512-22.00879,64.91016-14.17578,45.60254-28.81445,92.69922-54.71386,131.249-30.03809,44.71094-70.36622,69.75293-123.28907,76.55567a276.19159,276.19159,0,0,1-35.06445,2.27929,247.92324,247.92324,0,0,1-95.62109-18.89843l-3.6543-1.51758-1.55762,3.63867a296.504,296.504,0,0,1-32.80469,57.68652c-32.333,44.44336-75.791,79.72657-129.166,104.8711C568.33545,592.209,497.936,606.48242,418.84668,606.48242Zm297.105-424.09375a46.44813,46.44813,0,0,0-10.02441,1.08985c-20.75782,4.5996-39.959,24.4082-36.06055,58.29394,3.19629,27.792,30.0459,74.41406,75.17871,109.74805a246.16079,246.16079,0,0,0,33.52051,22.09668l4.26172,2.33105,1.46972-4.63086a246.71268,246.71268,0,0,0,6.77539-26.21c6.63477-33.21094,5.52637-65.79394-3.12011-91.74707-8.96875-26.91992-22.43457-47.48047-38.94141-59.459C738.63232,186.37012,727.20068,182.38867,715.95166,182.38867Z" />
        </svg>
      </div>
    </div>
  )
}
