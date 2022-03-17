import React from 'react';
import styles from './blogDetail.module.css'

export default function BlogDetail({ post }: { post: any }) {
  return (
    <div className={styles.blog_detail}>
      <div className={styles.blog_detail_title}>{post.title}</div>
    </div>
  )
}
