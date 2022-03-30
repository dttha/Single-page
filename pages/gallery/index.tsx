import ContextFooter from "../../src/components/Footer/components/footer";
import Section1 from "../../src/components/Gallery/components/section1";
import Section2 from "../../src/components/Gallery/components/section2";
import Section3 from "../../src/components/Gallery/components/section3";
import HeaderBlog from "../../src/components/HeaderBlog";

export default function GalleryPage() {
  return (
    <div>
      <HeaderBlog></HeaderBlog>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <ContextFooter></ContextFooter>
    </div>
  );
};
