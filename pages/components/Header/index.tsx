import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={"container flex justify-content-between align-items-center "}>
                <img className={styles.logo} src='/download.png' width={'100%'} height={'100%'} />
                <div className={styles.menu}>
                    <ul className={'flex ' + styles.menu}>
                        <li>
                            <Link href=''>Product</Link>
                        </li>
                        <li>Theme gallery</li>
                        <li>Blog</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <div className="button">Get started</div>
                </div>
            </div>
        </div>
    )
}
