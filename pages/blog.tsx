import { useRouter } from 'next/router';
import ContentBlog from '../src/components/ContentBlog';
import Section1 from '../src/components/ContentBlog/components/section1';
import Footer from '../src/components/Footer';
import HeaderBlog from '../src/components/HeaderBlog';

const BlogPage = () => {
  const router = useRouter();

  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <ContentBlog></ContentBlog>
      <Section1></Section1>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
