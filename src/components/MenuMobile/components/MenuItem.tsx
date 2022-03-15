import { Drawer } from 'antd';
import Link from 'next/link'
import React, { useState } from 'react'
import { INavItem } from '../../../model'
import styles from '../menu.module.css'

interface IMenuItem {
  item: INavItem;

}

export const MenuItemMobile = (props: IMenuItem) => {
  const [open, setOpen] = useState<boolean>(false)
  const { item } = props
  return (
    <>
      {item.subMenu ? <>
        <div className={`${styles.menu_item} ${item.className}`} onClick={() => {
          setOpen(!open)
        }}>
          <div className={styles.link + " flex align-items-center"}>
            <div >{item.title}</div>
          </div>
        </div>
        <Drawer
          handler={false}
          visible={open}
          placement="left"
          className={styles.drawer}
          onClose={() => {
            setOpen(false)
          }}>
          {item.subMenu.map((i) => {
            return 123
          })}
        </Drawer>
      </> :
        <>
          <div className={`${styles.menu_item} ${item.className}`}>
            <div className={styles.link + " flex align-items-center"}>
              <Link href={item.href}>{item.title}</Link>
            </div>
          </div>
        </>}
    </>
  )
}
