import { useRouter } from 'next/router';
import ContentBlog from '../src/components/ContentBlog';
import Footer from '../src/components/Footer';
import HeaderBlog from '../src/components/HeaderBlog';

const BlogPage = () => {
  const router = useRouter();

  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <ContentBlog></ContentBlog>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
