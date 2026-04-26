import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";

const Blog = () => {
  return (
    <section className="py-20 bg-secondary/20 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient">
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Developer Blogs
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition hover:neon-glow"
            >
              <h2 className="text-xl font-bold text-primary mb-2">
                {blog.title}
              </h2>
              <p className="text-muted-foreground">{blog.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
