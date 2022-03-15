import { Layout } from 'antd'
import React from 'react'
import styles from './contentBlog.module.css'

export default function ContentBlog() {
  return (
    <Layout className={styles.wrapper}>
      <div className={styles.content_title}>
        Latest Updates
      </div>
    </Layout>
  )
}
