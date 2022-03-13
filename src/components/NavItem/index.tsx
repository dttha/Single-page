import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'
import styles from '../../components/Header/header.module.css'

export interface INavItem {
  title: string;
  href: string;
  subMenu?: INavItem[];
  className?: string;
}

export default function NavItem(props: INavItem) {
  return (
    <li className={`${styles.menu_item} ${props.className}`}>
      <div className={styles.link + " flex align-items-center"}>
        <Link href={props.href}>{props.title}</Link>
        {props.subMenu &&
          <>
            <div className={styles.wrap_icon}>
              <div className={styles.icon_fake_arrow}></div>
              <FontAwesomeIcon className={styles.font_icon_down} icon={faChevronDown} />
            </div>
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
