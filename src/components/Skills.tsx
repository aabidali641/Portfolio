import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Code, Database, Globe, Wrench, Cloud } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Three.js",
        "GSAP",
        "Tailwind CSS",
        "Bootstrap",
        "EJS",
        "DaisyUI",
        "Aceternity UI",
        "Material UI",
        "spline",
        "Framer Motion",
        "shadcn/ui",
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices",
        "Passport.js",
        "Inngest",
        "Socket.IO",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "JWT",
        "OAuth",
        "Cron Jobs",
        "Cloudinary",
        "Nodemailer",
        "Razorpay",
        "Render",
        "Vercel",
        "Clerk",
        "Redux Toolkit",
        "React Hook Form",
        "Zustand",
        "Recharts",
        "npm",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Linux", "Shell Scripting", "Arcjet"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <Tilt
          tiltEnable={true}
          glareEnable={true}
          glareMaxOpacity={0.25}
          glareColor="white"
          glarePosition="bottom"
          glareBorderRadius="1rem"
          scale={1.5}
          transitionSpeed={900}
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          className="block mx-auto max-w-max cursor-pointer mb-12 sm:mb-16"
        >
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gradient"
          >
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
        </Tilt>

        
        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
