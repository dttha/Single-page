import { useRouter } from 'next/router';
import BlogDetail from '../src/components/BlogDetail';
import ContextFooter from '../src/components/Footer/components/footer';
import HeaderBlog from '../src/components/HeaderBlog';

const BlogDetailPage = () => {

  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <BlogDetail></BlogDetail>
      <ContextFooter></ContextFooter>
    </div>
  );
};

export default BlogDetailPage;
