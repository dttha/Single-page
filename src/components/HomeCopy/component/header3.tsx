import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import img from '../../../../public/Group 18 Copy.png'
import styles from '../../../components/HomeCopy/home.module.css'
import MenuMobile from '../../MenuMobile';
import { MENU } from '../../../constants';
import NavItem from '../../NavItem';
import anime from 'animejs';

interface IStylesNav {
  top: number;
  position: "static" | "relative" | "absolute" | "sticky" | "fixed"
}

export default function Header3() {
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

  const updateText = (text: string) => {
    Array.from(document.querySelectorAll(`.${styles["text"]}`)).forEach(
      (e) => (e.innerHTML = text)
    );
  };

  const reset = () => {
    const count = 110;
    const size = 50;
    const dots = Array.from(document.getElementsByClassName(`${styles["dot"]}`)) as HTMLElement[];
    dots.forEach((dot, i) => {
      console.log("🚀 ~ file: index.tsx ~ line 16 ~ reset ~ dots", dot.style.opacity, dot.style.transform)
      const x = (i / count) * (190 + size) - size / 2;
      const y = Math.random() * 52 - size / 2;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.opacity = `1`;
      dot.style.transform = "scale(1) translateX(0) translateY(0)";
      console.log("🚀 ~ file: index.tsx ~ line 16 ~ reset ~ dots", dot.style.opacity, dot.style.transform)
    });
  };

  useEffect(() => {
    const bottom = document.querySelector(`.${styles["bottom"]}`) as HTMLElement;
    const overlay = document.querySelector(`.${styles["overlay"]}`) as HTMLElement;
    const count = 110;
    const size = 50;
    for (let i = 0; i <= count; i += 1) {
      const dot = document.createElement("div") as HTMLElement;
      dot.classList.add(styles["dot"]);
      bottom.appendChild(dot);
    }
    reset();
  }, [])

  const onClick = () => {
    console.log(document.querySelectorAll(`.${styles["dot"]}`));
    anime({
      easing: "linear",
      targets: `.${styles["dot"]}`,
      opacity: [{ value: 0, duration: 600, delay: anime.stagger(10) }],
      translateX: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 400,
        delay: anime.stagger(10)
      },
      translateY: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 400,
        delay: anime.stagger(10)
      },
      scale: {
        value: function () {
          return 0;
        },
        duration: 400,
        delay: anime.stagger(10)
      }
    });
    anime({
      easing: "linear",
      delay: 4000,
      complete: () => {
        updateText("Started");
        setTimeout(() => {
          updateText("Get start");
          reset();
        }, 3000);
      }
    });
  }

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
        <div className={styles["container"]}>
          <div className={styles["bottom"]}></div>
          <div className={`${styles["cover"]} ${styles["cut"]}`}></div>
          <div className={styles["text-container"]}>
            <div className={`${styles["text"]} ${styles["text-dark"]}`}>Get start</div>
          </div>
          <div className={`${styles["text-container"]} ${styles["cut"]}`}>
            <div className={styles["text"]}>Get start</div>
          </div>
          <div className={styles["overlay"]} onClick={onClick}></div>
        </div>
      </div>
    </div>
  )
}
