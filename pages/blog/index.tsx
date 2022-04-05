import ContentBlog from '../../src/components/ContentBlog';
import Section1 from '../../src/components/ContentBlog/components/section1';
import Footer from '../../src/components/Footer';
import HeaderBlog from '../../src/components/HeaderBlog';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Slider from '../../src/components/ContentBlog/components/slider';
import ContextFooter from '../../src/components/Footer/components/footer';
import Header from '../../src/components/Header';

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
    },
    revalidate: 10,
  }
}


export default function BlogPage({ posts }: { posts: any }) {
  return (
    <div>
      <div className="add-header-blog">
      <HeaderBlog></HeaderBlog>
      </div>
      <div className="add-header-home">
        <Header></Header>
      </div>
      <Slider></Slider>
      <ContentBlog></ContentBlog>
      <Section1 posts={posts}></Section1>
      <div className="footer-blog-container">
        <Footer></Footer>
      </div>
      <ContextFooter></ContextFooter>
    </div>
  );
};

