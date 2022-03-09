import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../../../styles/Header.module.css'
import Image from 'next/image'
import img from '../../../public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    useEffect(() => {
        const btnMenu = document.getElementById("btn-menu") as HTMLElement;
        const menu = document.getElementById("menu")
        btnMenu.addEventListener("click", () => {
            menu?.classList.toggle(styles["show_menu"])
        })
    }, [])
    return (
        <div className={styles.header}>
            <div className={"container flex justify-content-between align-items-center "}>
                <div className='flex'>
                    <button id="btn-menu" className={styles.btn_menu}>
                        <FontAwesomeIcon className={styles.font_icon} icon={faBars} style={{ fontSize: 20 }} />
                    </button>
                    <Image className={styles.logo} src={img} alt="logo" width="100" height="40" />
                </div>
                <ul className={'flex ' + styles.menu} id="menu">
                    <div className={styles.dropdown}>
                        <li className={styles.dropbtn + " " + styles.menu_item}>
                            <Link href=''>Product</Link>
                            &nbsp;
                            <FontAwesomeIcon className={styles.font_icon} icon={faChevronDown} />
                            <ul className={styles.dropdown_content}>
                                <li className={styles.dropdown_item}><Link href="#">A</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">B</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">C</Link></li>
                            </ul>
                        </li>
                    </div>
                    <li className={styles.menu_item}>
                        <Link href=''>Theme gallery</Link>
                    </li>
                    <div className={styles.dropdown}>
                        <li className={styles.dropbtn + " " + styles.menu_item}>
                            <Link href=''>Blog</Link>
                            &nbsp;
                            <FontAwesomeIcon className={styles.font_icon} icon={faChevronDown} />
                            <ul className={styles.dropdown_content}>
                                <li className={styles.dropdown_item}><Link href="#">A</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">B</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">C</Link></li>
                            </ul>
                        </li>
                    </div>
                    <li className={styles.menu_item}>
                        <Link href=''>About us</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href=''>Contact</Link>
                    </li>
                </ul>
                <div className={"button " + styles.button_header}>Get started</div>
            </div>
            <div>
            </div>
        </div>
    )
}
