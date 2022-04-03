import { Col, Pagination, Row, Tabs } from 'antd'
import Image from 'next/image'
import image1 from "../../../../public/post1.png"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';
import styles from '../contentBlog.module.css'
import SwipeableViews from "react-swipeable-views";
import { useEffect, useState } from 'react';


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


export default function Section1({ posts }: { posts: any }) {
  const { TabPane } = Tabs;
  const pageSize = 15;
  const [pagination, setPagination] = useState({
    current: 1,
    min: 0,
    limit: 0,
    totalPage: 0
  })

  const [filter, setFilter] = useState({
    // page: 1,
    min: 0,
    limit: pageSize,
    totalPage: posts.length / pageSize
  })

  function callback(key: any) {
    console.log(key);
  }

  function handleChange(page: number) {
    setPagination({
      current: page,
      min: (page - 1) * pageSize,
      limit: page * pageSize,
      totalPage: posts.length / pageSize
    })
  }

  // useEffect(() => {
  //   setPagination(pagination)
  // }, [filter])

  return (
    <div className={styles.wrap_tabs}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="All posts" key="1">
          <div className={styles.section1}>
            <div className={styles.container_blog_section}>
              <Row gutter={[25, 25]}>
                {posts.map((item: any, index: any) => {
                  return (
                    <Col key={index} span={8}>
                      <div className={styles.block_post}>
                        <div className={styles.block_post_img}>
                          <Image className={styles.img_blog} alt='post-1' src={image1} />
                        </div>
                        <div className={styles.block_post_title}>
                          <Link href={`blog/${item.slug}`}>{item.title}</Link>
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
        </TabPane>
        <TabPane tab="E-commerce tips" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Success customers" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Others" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
      <div className={styles.tab_line}></div>
      <div style={{ paddingTop: "18px", paddingBottom: "75px" }}>
        <Pagination
          // pageSize={itemsPerPage}
          // current={}
          onChange={handleChange}
          defaultCurrent={1}
          total={posts.length}
        />
      </div>
    </div>
  )
}



