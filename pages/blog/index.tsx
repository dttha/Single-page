import ContentBlog from '../../src/components/ContentBlog';
import Section1 from '../../src/components/ContentBlog/components/section1';
import Footer from '../../src/components/Footer';
import HeaderBlog from '../../src/components/HeaderBlog';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

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


export default function BlogPage({ posts }: { posts: any }) {
  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <ContentBlog></ContentBlog>
      <Section1 posts={posts}></Section1>
      <Footer></Footer>
    </div>
  );
};

