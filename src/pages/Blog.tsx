import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Blog = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
    );
  }, []);

  return (
    <section className="py-20 bg-secondary/20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* TITLE */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient"
        >
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Developer Blogs
          </span>
        </h1>

        {/* BLOG CARD */}
        <div ref={cardRef} className="max-w-3xl mx-auto">
          <Link
            to="/blog/nexus-society"
            className="block glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow"
          >
            <h2 className="text-2xl font-bold mb-3 text-primary">
              Building a Fully Animated Developer Portfolio
            </h2>

            <p className="text-muted-foreground mb-4">
              Deep dive into how I built a scalable, animated portfolio using
              React, GSAP, and modern tools.
            </p>

            <span className="text-sm text-primary">Read More →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
