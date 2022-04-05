import { Col, Pagination, Row, Tabs } from 'antd'
import Image from 'next/image'
import image1 from "../../../../public/post1.png"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';
import styles from '../contentBlog.module.css'
import SwipeableViews from "react-swipeable-views";
import { useEffect, useState } from 'react';
import { IPost } from '../../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


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


export default function Section1({ posts }: { posts: IPost[] }) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([])
  const { TabPane } = Tabs;

  useEffect(() => {
    setCurrentPosts(posts.slice((page - 1) * limit, page * limit));
  }, [page, limit, posts])

  function callback(key: any) {
    console.log(key);
  }

  function handleChange(page: number) {
    setPage(page);
  }

  return (
    <div className={styles.wrap_tabs}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="All posts" key="1">
          <div className={styles.section1}>
            <div className={styles.container_blog_section}>
              <Row gutter={[25, 25]}>
                {currentPosts.map((item, index) => {
                  return (
                    <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} >
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
          <div className={styles.tab_line}></div>
          <div style={{ paddingTop: "18px", paddingBottom: "75px" }}>
            <Pagination
              pageSize={limit}
              current={page}
              onChange={handleChange}
              total={posts.length}
              itemRender={(page, type) => {
                if (type === "next") {
                  return <FontAwesomeIcon style={{ color: "#808080" }} icon={faArrowRight}></FontAwesomeIcon>;
                }
                if (type === "prev") {
                  return <FontAwesomeIcon style={{ color: "#808080" }} icon={faArrowLeft}></FontAwesomeIcon>;
                }
                else return page
              }}
            />
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

    </div>
  )
}



