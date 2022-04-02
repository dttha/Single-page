import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../../../../public/Group 18 Copy.png'
import styles from '../../../components/Header/header.module.css'
import MenuMobile from '../../MenuMobile';
import { MENU } from '../../../constants';
import NavItem from '../../NavItem';
import Button from '../../Button';
interface IStylesNav {
  top: number;
  position: "static" | "relative" | "absolute" | "sticky" | "fixed"
}

export default function Header2() {
  const [checked, setChecked] = useState<boolean>(false)
  const [y, setY] = useState(0)
  const [stylesNav, setStylesNav] = useState<IStylesNav>({
    top: 0,
    position: "sticky"
  })

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (stylesNav.top === -80) {
          setStylesNav({
            top: 0,
            position: 'sticky',
          });
        }
      } else if (y < window.scrollY) {
        if (stylesNav.top === 0) {
          setStylesNav({
            top: -80,
            position: 'fixed',
          });
        }
      }
      setY(window.scrollY)
    },
    [y, stylesNav]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div
      className={styles.header}
      style={{ top: stylesNav.top, position: stylesNav.position }}
    >
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
        <div className="btn2">
          <div className={styles.btn_start_xl}>Get started</div>
        </div>
      </div>
    </div>
  )
}
