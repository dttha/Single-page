import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import img from '../../../public/Group 18 Copy.png'
import styles from '../../components/Header/header.module.css'
import Button from '../Button'

export default function Header() {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className={styles.header}>
      <div className="container flex justify-content-between align-items-center">
        <div className="flex">
          <Image className={styles.logo} src={img} alt="logo" width="160" height="47" />
        </div>
        <div className={styles.wrap_btn_checkbox}>
          <input type="checkbox" id="btn-checkbox"
            className={styles.btn_checkbox}
            onChange={(e) => { setChecked(e.target.checked) }}
          />
          <div id="btn-menu" className={styles.btn_menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`flex ${styles.menu}  ${checked ? styles.showMenu : ''}`} id="menu">
          <li className={styles.menu_item}>
            <div className={styles.link}>
              <Link href=''>Product</Link>
              &nbsp;
              <FontAwesomeIcon className={styles.font_icon_down} icon={faChevronDown} />
            </div>
          </li>

          <li className={styles.menu_item}>
            <div className={styles.link}>
              <Link href=''>Theme gallery</Link>
            </div>
          </li>

          <li className={styles.menu_item}>
            <div className={styles.link}>
              <Link href=''>Blog</Link>
              &nbsp;
              <FontAwesomeIcon className={styles.font_icon_down} icon={faChevronDown} />
            </div>
          </li>

          <li className={styles.menu_item}>
            <div className={styles.link}>
              <Link href=''>About us</Link>
            </div>
          </li>

          <li className={styles.menu_item}>
            <div className={styles.link}>
              <Link href=''>Contact</Link>
            </div>
          </li>
          <li className={styles.btn_start_lg}>
            <Button>Get started</Button>
          </li>
        </ul>
        <Button className={styles.btn_start_xl}>Get started</Button>
      </div>
    </div>
  )
}
