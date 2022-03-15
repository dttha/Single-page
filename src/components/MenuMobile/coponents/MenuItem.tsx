import { faArrowRight, faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Menu } from 'antd';
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
            <FontAwesomeIcon className={styles.font_icon_arrow_right} icon={faArrowRight} />
          </div>
        </div>
        <Drawer
          handler={false}
          visible={open}
          placement="left"
          width="250px"
          className={styles.drawer}
          level={null}
          onClose={() => {
            setOpen(false)
          }}
          bodyStyle={{ backgroundColor: "#13157F" }}
          headerStyle={{ backgroundColor: "#13157F", color: "#fff" }}
          closeIcon={<FontAwesomeIcon icon={faClose} color="#fff" fontSize="18px"></FontAwesomeIcon>}
          contentWrapperStyle={{ color: "#fff" }}
        >
          {item.subMenu.map((i, index) => {
            return <MenuItemMobile item={i} key={index} />
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
