import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import HeaderBlog from '../../src/components/HeaderBlog';
import ContextFooter from '../../src/components/Footer/components/footer';
import BlogDetail from '../../src/components/BlogDetail';
import { IPost } from '../../src/model';

interface IPostDetails {
  post: IPost
}

export default function BlogDetailPage(props: IPostDetails) {
  const { post } = props;
  return (
    <div>
      <HeaderBlog></HeaderBlog>
      {post && <BlogDetail post={post} />}
      <ContextFooter></ContextFooter>
    </div >
  );
};

export async function getStaticProps({ params }: { params: any }) {
  const client = new ApolloClient({
    uri: 'https://cms.awe7.com/api/graphql',
    cache: new InMemoryCache()
  });
  let post = null;
  const { data } = await client.query({
    query: gql`
      query post {
        posts (where: { slug: { equals: "${params.slug}"} }){
          title
          slug
          status
        }
      }
      `
  })
  post = data.posts[0];

  return {
    props: {
      post
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
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

  const paths = data.posts.map((item: any) => {
    return {
      params: { slug: item.slug },
    }
  })

  return {
    paths,
    fallback: false
  }
}
