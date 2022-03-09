import React from 'react'
import styles from '../../../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>
                <img className={styles.background} src='/download.png' width={'100%'} height={'100%'} />
            </div>
            <div className={"flex justify-content-between container mt-5"}>
                <div>
                    <img className={styles.logo} src='/download.png' width={'100%'} />
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
                <div className={"flex justify-content-between container p-2"}>
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