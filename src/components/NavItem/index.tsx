import React from 'react'
import Link from 'next/link';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { INavItem } from '../../model';
import styles from '../../components/Header/header.module.css'

export default function NavItem(props: INavItem) {
  return (
    <li className={`${styles.menu_item} ${props.className}`}>
      <div className="flex align-items-center">
        <div className={styles.link}>
          <Link href={props.href}>{props.title}</Link>
        </div>
        {props.subMenu &&
          <>
            <FontAwesomeIcon className={styles.font_icon_down} icon={faChevronDown} />
            <div className={styles.sub_menu}>
              {props.subMenu.map((i, index) => {
                return <div className={`${styles.menu_item} ${i.className}`} key={index}>
                  <div className={styles.link}>
                    <Link href={i.href}>{i.title}</Link>
                  </div>
                </div>
              })}
            </div>
          </>
        }
      </div>
    </li>
  )
}
