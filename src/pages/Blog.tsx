import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Developer Insights & Portfolio Breakdown
      </h1>

      {/* Intro */}
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Explore how I built a fully animated, scalable and interactive developer
        portfolio using modern technologies like React, TypeScript, GSAP and
        more.
      </p>

      {/* Blog Card */}
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          to="/blog/nexus-society"
          className="block border border-gray-700 rounded-xl p-6 hover:bg-gray-900 transition"
        >
          <h2 className="text-2xl font-semibold mb-3">
            ✨ Building a Fully Animated Developer Portfolio (MERN + GSAP)
          </h2>

          <p className="text-gray-400 mb-4">
            A deep dive into creating an advanced portfolio with animations,
            interactive UI, scalable architecture, and modern tools.
          </p>

          <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
            <li>GSAP & Framer Motion animations</li>
            <li>Interactive UI with ShadCN & Radix UI</li>
            <li>React + TypeScript architecture</li>
            <li>Real-world scalable project structure</li>
          </ul>
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-16"></div>

      {/* Extra Sections (branding style) */}

      <div className="text-center space-y-10">
        <h2 className="text-2xl font-semibold">🌟 Permissions</h2>
        <p className="text-gray-400">
          MIT License | Open Source | Community Driven
        </p>

        <h2 className="text-2xl font-semibold">🌐 Digital Handshake</h2>
        <div className="flex flex-wrap justify-center gap-4 text-blue-400">
          <a href="mailto:your@email.com">Email</a>
          <a href="https://linkedin.com">LinkedIn</a>
          <a href="https://github.com">GitHub</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="/">Portfolio</a>
          <a href="#">LeetCode</a>
        </div>

        <h2 className="text-2xl font-semibold">💬 Let's Talk Tech</h2>
        <p className="text-gray-400">
          Always open to discussing new projects, ideas, and opportunities.
        </p>

        <h2 className="text-2xl font-semibold">✨ Tech Heartbeat</h2>
        <p className="text-gray-400">
          Crafted with passion using React, TypeScript, Tailwind CSS, GSAP, and
          modern web technologies.
        </p>
      </div>
    </div>
  );
};

export default Blog;
