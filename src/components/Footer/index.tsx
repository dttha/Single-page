import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import img from '../../../public/Group 18 Copy.png'
import styles from '../../../src/components/Footer/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.background_image}>
                <div className={styles.wrap_content_footer}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.context}>
                                <span className={styles.fontWhite}>Building your</span>
                                <span className={styles.fontGreen}> Branded eCommerce Experience</span>
                                <span className={styles.fontWhite}> today with Xopify!</span>
                            </div>
                            <div className={styles.description}>
                                Try it for free and create a meaningful connection with your audiences with our professionally designed tools!
                            </div>
                        </div>
                        <div className="button">
                            <div className="content_btn">Get started</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex " + styles.wrap_footer}>
                <div className={styles.logo_footer}>
                    <Image alt='logo' className={styles.logo} src={img} width="175" height="51" />
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.grid_container}>
                        <div className={styles.grid_item + " " + styles.font}>PRODUCT</div>
                        <div className={styles.grid_item + " " + styles.font}>MORE ABOUT XO</div>
                        <div className={styles.grid_item + " " + styles.font}>SUPPORT</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>Pagebuilder</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>Theme gallery</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>Document</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>XO gallery</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>Casestudy</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>Email: ciao@xopify.com</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>XO lookbook</div>
                        <div className={styles.grid_item} style={{ marginTop: 19 }}>About us</div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="flex justify-content-between">
                    <div className={styles.font_copyright} style={{ marginLeft: 85, marginTop: 20, marginBottom: 23 }}>
                        XOpify ©2021. All rights resserved.
                    </div>
                    <div className={styles.font_copyright} style={{ marginRight: 85, marginTop: 20, marginBottom: 23 }}>
                        Document&nbsp;
                        <FontAwesomeIcon className={styles.font_icon} icon={faCircle} style={{ fontSize: 5, marginBottom: 3, marginLeft: 3, marginRight: 5 }} />
                        Chanelog
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon className={styles.font_icon} icon={faFacebook} />
                        &nbsp;&nbsp;
                        <FontAwesomeIcon className={styles.font_icon} icon={faTwitter} />
                    </div>
                </div>
            </div >
        </div>
    )
}