import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Database,
  Globe,
  Smartphone,
  Cpu,
} from "lucide-react";
import Tilt from "react-parallax-tilt"; // Import Tilt

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Projects grid animation
      gsap.fromTo(
        projectsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

    const projects = [
      {
        title:
          "WealthSync – AI-Powerd Budgeting and Finance Optimization System",
        description:
          "An AI-powered system to track expenses, automate recurring payments, and give smart insights for better budgeting and financial control — all through a secure, personalized, and seamless user experience.",
        icon: Database,
        technologies: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Shadcn UI",
          "Framer Motion",
          "Zustand",
          "React Hook Form",
          "Zod",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Prisma",
          "Supabase",

          "JWT",
          "Clerk",
          "Inngest",
          "Arcjet",
          "Cloudinary",
        ],
        features: [
          "AI-Powered Smart Transaction Categorization",

          "Real-Time Expense Tracking and Analytics",
          "State Management with Zustand",

          "Form Handling and Validation with React Hook Form + Zod",

          "Scalable Backend with Node.js, Express & Prisma",

          "Managed Database with Supabase (PostgreSQL)",

          "OCR-Based Receipt Scanning and Auto-Fill",

          "Multi-Account and Transaction Type Support",

          "Intelligent Budget Creation and Management",

          "Personalized Budget Suggestions and Email Alerts using AI",

          "Secure User Authentication via Clerk (OAuth)",

          "Bot Protection and Rate Limiting via Arcjet",

          "Fast Server-Side Rendering with Next.js",

          "Cloud-Based Receipt and Media Storage (Cloudinary)",

          "Event-Driven and Cron-Based Workflows (using Inngest)",

          "Budget Limit Alerts and Notifications",
        ],
        githubUrl: "https://github.com/aabidali641/WealthSync-",
        liveUrl: "#",
        category: "Full Stack With AI Integration",
      },
      {
        title:
          "Nexus Society – The Smart And Complete Solution for Campus Societies",
        description:
          "A full-stack, university-authenticated web platform for managing campus societies — offering secure student registration, digital notice boards, event creation, result announcements, online payments, merchandise handling, real-time email alerts, and an interactive dashboard for admins and students alike — all designed to bring efficiency, transparency, and digital empowerment to student life..",
        icon: Globe,
        technologies: [
          "React",
          "Vite",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Tailwind CSS",
          "Shadcn UI",
          "Framer Motion",
          "React Parallax Tilt",

          "Redux Toolkit",
          "React Router DOM",
          "JWT",

          "Nodemailer",
          "Razorpay",
          "Cloudinary",
          "Recharts",
          "React Toastify",
          "Vercel",
          "Render",
          "GitHub Actions",
        ],

        features: [
          "University-verified registration and role-based access control for students and admins",
          "Secure JWT-based authentication with protected routes and session handling",
          "Event creation, editing, registration, and real-time result announcements",
          "Merchandise listing, order management, and secure payment integration using Razorpay",
          "Digital notice board with downloadable PDFs and email notifications",
          "Merchandise listing and order management with admin control panel",
          "Bulk and individual email communication using Nodemailer with password recovery support",
          "Admin dashboard with stats and charts powered by Recharts for analytics",
          "Suggestion and feedback module with admin inbox for two-way communication",
          
          "Form handling and validation using React Hook Form, client-side routing via React Router",
          "Image and media storage using Cloudinary with secure access and display",
          "State management using Redux Toolkit and global context for user and event data",

          "Paperless, eco-friendly, eliminating need for WhatsApp, Google Forms, physical notices",
        ],
        githubUrl: "https://github.com/sachinchauhan010/NexusSocietyFrontend",
        liveUrl: "https://nexussociety.vercel.app/",
        category: "Full Stack",
      },
      {
        title: "Talkify – Real-Time Chat Application",
        description:
          "A full-stack MERN-based real-time chat application with secure authentication, live socket communication, custom group and private chat rooms, message notifications, and a modern responsive UI built for seamless communication.",
        icon: Smartphone,
        technologies: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "Socket.IO",
          "JWT",
          "Tailwind CSS",
          "Axios",
          "React Router DOM",
          "React Icons",
          "Cloudinary",
          "Multer",
          "Vercel",
          "Render",
        ],

        features: [
          "Real-time messaging using Socket.IO for both private and group chats",
          "Secure user registration and login with JWT-based authentication",
          "Custom chat rooms for one-on-one and group communication",
          "Online/offline user status indicators and typing notifications",
          "Message delivery acknowledgment and seen status",
          "Search functionality for users and chat conversations",
          "Dynamic chat list and chat preview with latest message and timestamp",
          "User profile customization with avatar upload",
          "Responsive and modern UI using Tailwind CSS and React",
          "Authentication flow and protected routes with token management",
          "Real-time updates and new message notifications using sockets",
          "MongoDB schema design for users, chats, and messages",
          "Scalable architecture to handle multiple concurrent users",
          "Fully responsive layout for mobile and desktop compatibility",
          "Clean chat scroll management and auto-scrolling on new messages",
        ],

        githubUrl: "https://github.com/aabidali641/Talkify",
        liveUrl: "https://talkify-1qom.onrender.com/",
        category: "Full Stack With Socket.IO",
      },
      {
        title: "TazZA – Fresh Food & Juice Delivery Web Application",
        description:
          "A dynamic and user-friendly web platform built with EJS, Bootstrap, and Node.js, TazZA ensures doorstep delivery of fresh food, vegetables, and juice with secure user authentication, category-based ordering, and admin-side control — optimized for freshness, speed, and simplicity.",
        icon: Smartphone,
        technologies: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "EJS",
          "Bootstrap",
          "Passport.js",
          "Express-Session",
          "Connect-Flash",
          "Cloudinary",
          "Multer",
          "Dotenv",
          "Render",
        ],
        features: [
          "Category-based ordering system for fresh food, vegetables, and juices",
          "User registration and login with secure authentication using Passport.js",
          "Product listings with images, pricing, and detailed descriptions",
          "Admin panel for managing products, categories, and orders",
          "Cart functionality with dynamic item addition and quantity updates",
          "Order placement with order summary and confirmation",
          "EJS templating for fast server-side rendering and dynamic content",
          "Session management using Express-session and cookie handling",
          "Bootstrap-based responsive design for mobile and desktop views",
          "Flash messages for actions like login, logout, and order success",
          "Cloudinary integration for storing and serving product images",
          "Modular route handling for clean and maintainable backend code",
          "Fully secured routes for both users and admin panels",
          "Scalable MVC architecture for easy feature addition",
        ],
        githubUrl: "https://github.com/aabidali641/TazZA",
        liveUrl: "https://github.com/aabidali641/TazZA",
        category: "Full Stack With EJS",
      },
    ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/10">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-gradient"
          >
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </Tilt>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-10xl mx-auto px-4 sm:px-6"
        >
          {/* Render project cards as before */}
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary text-xs sm:text-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary text-base sm:text-lg">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
