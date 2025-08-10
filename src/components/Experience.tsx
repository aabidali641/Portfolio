import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Tilt from "react-parallax-tilt"; // Import Tilt

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Timeline items animation
      gsap.fromTo(
        timelineRef.current?.children || [],
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  
     const experiences = [
       {
         title: "Full Stack Developer Intern",
         company: "Academic Internship – MMMUT",
         period: "2025",
         location: "MMMUT, Gorakhpur",
         type: "Academic Internship",
         description:
           "Contributed as a full stack developer in building Nexus Society — a centralized, full-stack campus society management web application aimed at simplifying and digitalizing society operations. Worked closely with the team to implement secure authentication, responsive user interfaces, real-time communications, and payment integration.",
         achievements: [
           "Developed core modules including user authentication, event registration, and merchandise management.",
           "Integrated Razorpay payment gateway for secure online transactions.",
           "Implemented password reset and email notification system using Nodemailer.",
           "Built responsive and interactive UI using Tailwind CSS, Framer Motion, and React Parallax Tilt.",
           "Used React Hook Form and Redux Toolkit for state and form handling across the application.",
           "Connected frontend and backend using RESTful APIs built with Express.js and Node.js.",
           "Managed database schemas and operations using MongoDB and Mongoose.",
           "Ensured role-based access control with JWT to separate user and admin privileges.",
           "Collaborated on GitHub and participated in CI/CD automation using GitHub Actions.",
           "Deployed frontend on Vercel and backend on Render ensuring production readiness.",
         ],
         technologies: [
           "React.js",
           "TypeScript",
           "Vite",
           "Tailwind CSS",
           "Framer Motion",
           "Redux Toolkit",
           "React Hook Form",
           "React Router DOM",
           "Recharts",
           "React Toastify",
           "Lucide React",
           "React Parallax Tilt",
           "Node.js",
           "Express.js",
           "MongoDB",
           "Mongoose",
           "JWT",
           "Nodemailer",
           "Razorpay",
           "Cloudinary",
           "Vercel",
           "Render",
           "GitHub Actions",
         ],
       },
       {
         title: "Java Intern",
         company: "InternPe",
         period: "07/2024 - 09/2024",
         location: "Remote",
         type: "Internship",
         description:
           "Designed and developed four interactive Java-based applications during internship.",
         achievements: [
           "Guessing Game - Interactive number guessing game with user feedback",
           "Rock-Paper-Scissors - Classic game implementation with clean UI",
           "Tic-Tac-Toe - Two-player game with win detection logic",
           "Connect Four Game - Strategic board game with advanced algorithms",
         ],
         technologies: ["Java", "OOP", "Game Development", "Algorithms"],
       },
     ];

  return (
    <section ref={sectionRef} id="experience" className="py-20">
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
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gradient"
          >
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </Tilt>

        <div ref={timelineRef} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              
              <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow ml-0 md:ml-20">
                <CardContent className="p-8">
                 
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
