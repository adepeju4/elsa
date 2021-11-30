import BlogItem from "./BlogItem";
import {
  Container,
  Heading,
  Blogs
} from "../../styles/blogs.module.scss";

function Blog() {
    return (
      <div className={Container}>
        <div className={Heading}>
          <h3>OUR BLOG</h3>
          <p>
            We write various things that can help you find various references in
            making your home more attractive
          </p>
        </div>
        <div className={Blogs}>
          <BlogItem/>
        </div>
      </div>
    );
}

export default Blog
