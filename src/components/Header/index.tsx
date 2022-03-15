import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../../public/Group 18 Copy.png'
import Button from '../Button'
import NavItem from '../NavItem'
import { MENU } from '../../constants'
import MenuMobile from '../MenuMobile'
import styles from '../../components/Header/header.module.css'

export default function Header() {
  const [checked, setChecked] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(true)

  return (
    <div className={styles.header}>
      <MenuMobile open={checked} data={MENU} setOpen={setChecked}></MenuMobile>
      <div className="container flex justify-content-between align-items-center">
        <div className="flex">
          <Image className={styles.logo} src={img} alt="logo" width="160" height="47" />
        </div>
        <div className={styles.wrap_btn_checkbox}>
          <input type="checkbox" id="btn-checkbox"
            className={styles.btn_checkbox}
            onChange={(e) => { setChecked(e.target.checked) }}
            checked={checked}
          />
          <div id="btn-menu" className={styles.btn_menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`flex ${styles.menu}`} id="menu">
          {MENU.map((item) => {
            return <NavItem
              key={item.href}
              title={item.title}
              href={item.href}
              subMenu={item.subMenu}
              className={item.className}
            ></NavItem>
          })}
        </ul>
        <Button className={styles.btn_start_xl}>Get started</Button>
      </div>
    </div>
  )
}
