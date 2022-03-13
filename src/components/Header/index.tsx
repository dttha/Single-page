import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import img from '../../../public/Group 18 Copy.png'
import styles from '../../components/Header/header.module.css'
import Button from '../Button'
import NavItem, { INavItem } from '../NavItem'


const menu: INavItem[] = [
  {
    title: 'Product',
    href: '/product',
    subMenu: [
      {
        title: 'Shooes',
        href: '/product/1'
      },
      {
        title: 'Theme gallery',
        href: '/product/2'
      },
      {
        title: 'Blog',
        href: '/product/3'
      }
    ]
  },
  {
    title: 'Theme gallery',
    href: '/theme-gallery'
  },
  {
    title: 'Blog',
    href: '/blog',
    subMenu: [
      {
        title: 'Blog 1',
        href: '/blog/1'
      },
    ]
  },
  {
    title: 'About us',
    href: '/about-us'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]

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
          {menu.map((item) => {
            return <NavItem
              key={item.href}
              title={item.title}
              href={item.href}
              subMenu={item.subMenu}
              className={item.className}
            ></NavItem>
          })}
          <li className={styles.btn_start_lg}>
            <Button>Get started</Button>
          </li>
        </ul>
        <Button className={styles.btn_start_xl}>Get started</Button>
      </div>
    </div>
  )
}
