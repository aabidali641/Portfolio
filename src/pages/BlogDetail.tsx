import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BlogDetail = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 },
    );
  }, []);

  return (
    <section className="py-20 bg-secondary/20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* TITLE */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold mb-10 text-gradient"
        >
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            How I Built My Developer Portfolio
          </span>
        </h1>

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="glass p-8 rounded-2xl space-y-8 leading-relaxed"
        >
          <p className="text-lg text-muted-foreground">
            This blog explains how I built a modern, animated developer
            portfolio using React, TypeScript, GSAP, and Tailwind CSS.
          </p>

          <h2 className="text-2xl font-semibold text-primary">🚀 Overview</h2>
          <p className="text-muted-foreground">
            The goal was to create a portfolio that is visually stunning and
            highly interactive.
          </p>

          <h2 className="text-2xl font-semibold text-primary">✨ Features</h2>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>GSAP animations</li>
            <li>Interactive UI</li>
            <li>Responsive design</li>
            <li>Modern architecture</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary">🛠 Tech Stack</h2>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            <li>React + TypeScript</li>
            <li>GSAP + Framer Motion</li>
            <li>Tailwind CSS</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary">⚡ Challenges</h2>
          <p className="text-muted-foreground">
            Managing animations without affecting performance was the biggest
            challenge.
          </p>

          <h2 className="text-2xl font-semibold text-primary">🎯 Conclusion</h2>
          <p className="text-muted-foreground">
            This project helped me improve my frontend architecture and
            animation skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
