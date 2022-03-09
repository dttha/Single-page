import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import img from '../../../public/logo.png'
import styles from '../../../src/components/Footer/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.background_image}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.context}>
                                <span className={styles.fontWhite}>Building your</span>
                                <span className={styles.fontGreen}> Branded eCommerce Experience</span>
                                <span className={styles.fontWhite}> today with Xopify!</span>
                            </div>
                            <div className={"button " + styles.button_footer} >Get started</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-content-between container mt-5">
                <div>
                    <Image alt='logo' className={styles.logo} src={img} width="100" height="40" />
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.grid_container}>
                        <div className={styles.grid_item + " " + styles.font}>PRODUCT</div>
                        <div className={styles.grid_item + " " + styles.font}>MORE ABOUT TO</div>
                        <div className={styles.grid_item + " " + styles.font}>SUPPORT</div>
                        <div className={styles.grid_item}>Pagebuilder</div>
                        <div className={styles.grid_item}>Theme gallery</div>
                        <div className={styles.grid_item}>Document</div>
                        <div className={styles.grid_item}>XO gallery</div>
                        <div className={styles.grid_item}>Casestudy</div>
                        <div className={styles.grid_item}>Email@gmail.com   </div>
                        <div className={styles.grid_item}></div>
                        <div className={styles.grid_item}>About us</div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="flex justify-content-between container p-2">
                    <div className={styles.font}>
                        Copyright@120213 Hello
                    </div>
                    <div className={styles.font}>
                        Document copyright
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