import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { getAllPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Blog & Recent News"
          paragraph="Here you can find the latest news and updates about AliasVault."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.slice(0, 3).map((blog) => (
            <div key={blog.slug} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
