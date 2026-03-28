import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Tilt from "react-parallax-tilt";

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
        },
      );

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
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    // 🔥 Assistant Professor (Added)
    {
      title: "Assistant Professor (BCA)",
      company: "Meerut Institute of Technology",
      period: "2025 - Present",
      location: "Meerut, Uttar Pradesh",
      type: "Full-Time",
      description:
        "Working as an Assistant Professor in the Department of Computer Application, focusing on delivering concept-driven and practical-oriented education.",

      achievements: [
        "Teaching Web Technologies (HTML, CSS, JavaScript, Bootstrap) with practical implementation",
        "Handling Emerging Trends including IoT, Cloud Computing, Blockchain, Robotics, and Industry 4.0",
        "Conducting lab sessions to strengthen students’ hands-on coding skills",
        "Mentoring students in academic projects, assignments, and technical development",
        "Guiding final year students in project development, documentation, and viva preparation",
        "Supporting students on CodeTantra platform for Java and C programming",
        "Providing academic counseling and assisting in admission-related guidance",
        "Participating in institutional activities including Hobby Club and cultural events",
        "Enhancing student engagement through competitions and technical activities",
        "Supporting academic coordination and institutional processes",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "MERN Stack",
        "GitHub",
        "CodeTantra",
        "Teaching & Mentoring",
      ],
    },

    // Internship 1
    {
      title: "Full Stack Developer Intern",
      company: "Academic Internship – MMMUT",
      period: "2025",
      location: "MMMUT, Gorakhpur",
      type: "Academic Internship",
      description:
        "Worked on Nexus Society — a full-stack campus management system for handling events, memberships, and payments.",

      achievements: [
        "Developed authentication, event registration, and merchandise modules",
        "Integrated Razorpay payment gateway",
        "Implemented email system using Nodemailer",
        "Built UI with React, Tailwind CSS, and Framer Motion",
        "Connected frontend & backend via REST APIs",
        "Used MongoDB and Mongoose for database management",
        "Implemented JWT-based authentication",
        "Deployed on Vercel and Render",
      ],

      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Cloudinary",
        "Vercel",
        "Render",
      ],
    },

    // Internship 2
    {
      title: "Java Intern",
      company: "InternPe",
      period: "07/2024 - 09/2024",
      location: "Remote",
      type: "Internship",
      description:
        "Developed multiple Java-based applications focusing on logic building and problem-solving.",

      achievements: [
        "Built Guessing Game with user feedback",
        "Developed Rock-Paper-Scissors game",
        "Created Tic-Tac-Toe with win logic",
        "Implemented Connect Four game",
      ],

      technologies: ["Java", "OOP", "Algorithms"],
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
