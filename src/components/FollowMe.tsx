import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    url: "https://github.com/aabidali641",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    url: "https://linkedin.com/in/aabidali641",
  },
  {
    icon: Twitter,
    title: "X",
    url: "https://x.com/641Aabid",
  },
  {
    icon: Globe,
    title: "Portfolio",
    url: "https://portfolio-aabidali641s-projects.vercel.app/",
  },
  {
    icon: Mail,
    title: "Email",
    url: "mailto:mdaabidali28@gmail.com",
  },
];

export default function FollowMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-0 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
    >
      <h4
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gradient"
      >
        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
          Follow Me
        </span>
      </h4>

      <div
        ref={buttonsRef}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-16"
      >
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              className="flex items-center justify-center"
            >
              <social.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
