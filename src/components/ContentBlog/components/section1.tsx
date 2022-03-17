import { Col, Row } from 'antd'
import Image from 'next/image'
import image1 from "../../../../public/post1.png"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from '../contentBlog.module.css'
import Link from 'next/link';

export default function Section1({ posts }: { posts: any }) {
  console.log('posts', posts);

  return (
    <div className={styles.section1}>
      <div className={styles.container_blog + " " + styles.container_post}>
        <Row gutter={[25, 25]}>
          {posts.map((item: any, index: any) => {
            return (
              <Col key={index} span={8}>
                <div className={styles.block_post}>
                  <div className={styles.block_post_img}>
                    <Image className={styles.img_blog} alt='post-1' src={image1} />
                  </div>
                  <div className={styles.block_post_title}>
                    <Link href={item.slug}>{item.title}</Link>
                  </div>
                  <div className={styles.block_post_date}>
                    {item.publishDate}
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://cms.awe7.com/api/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query posts{
      posts{
        slug
        title
        publishDate
      }
    }
    `
  });

  return {
    props: {
      posts: data.posts
    }
  }
}
