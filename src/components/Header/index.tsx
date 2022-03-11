import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import img from '../../../public/Group 18 Copy.png'
import btnmenu from '../../../public/btnmenu.png'
import styles from '../../components/Header/header.module.css'

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
            <div className="container flex justify-content-between align-items-center">
                <div className="flex">
                    <Image className={styles.logo} src={img} alt="logo" width="160" height="47" />
                </div>
                <button id="btn-menu" className={styles.btn_menu}>
                    <Image className={styles.font_icon} src={btnmenu} alt="btnmenu" width="24" height="18" />
                </button>
                <ul className={"flex " + styles.menu} id="menu">
                    <div className={styles.dropdown}>
                        <li className={styles.dropbtn + " " + styles.menu_item}>
                            <div>
                                <Link href=''>Product</Link>
                                &nbsp;
                                <FontAwesomeIcon className={styles.font_icon} icon={faChevronDown} />
                            </div>
                            {/* <ul className={styles.dropdown_content}>
                                <li className={styles.dropdown_item}><Link href="#">A</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">B</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">C</Link></li>
                            </ul> */}
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
                            {/* <ul className={styles.dropdown_content}>
                                <li className={styles.dropdown_item}><Link href="#">A</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">B</Link></li>
                                <li className={styles.dropdown_item}><Link href="#">C</Link></li>
                            </ul> */}
                        </li>
                    </div>
                    <li className={styles.menu_item}>
                        <Link href=''>About us</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href=''>Contact</Link>
                    </li>
                </ul>
                <div className={"button " + styles.hidden}>
                    <div className="content_btn">Get started</div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
