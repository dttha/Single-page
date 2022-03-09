import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../../../styles/Header.module.css'
import Image from 'next/image'
import img from '../../../public/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    useEffect(() => {
        const btnMenu = document.getElementById("btn-menu")
        const menu = document.getElementById("menu")
        btnMenu?.addEventListener("click", () => {
            menu?.classList.toggle(styles["show_menu"])
        })
    }, [])
    return (
        <div className={styles.header}>
            <div className={"container flex justify-content-between align-items-center "}>
                <div className='flex'>
                <button id="btn-menu" className={styles.btn_menu}>
                    <FontAwesomeIcon className={styles.font_icon} icon={faBars} />
                </button>
                <Image className={styles.logo} src={img} alt="logo" width={'100%'} height={'100%'} />
                </div>
                <ul className={'flex ' + styles.menu} id="menu">
                    <li className={styles.active}>
                        <Link href=''>Product</Link>
                    </li>
                    <li className={styles.active+" "+styles.menu_item_link}><Link href=''>Theme gallery</Link></li>
                    <li className={styles.active}><Link href=''>Blog</Link></li>
                    <li className={styles.active}><Link href=''>About us</Link></li>
                    <li className={styles.active}><Link href=''>Contact</Link></li>
                </ul>
                <div className={"button "+ styles.button_header}>Get started</div>
                </div>
                <div>
            </div>
        </div>
    )
}
