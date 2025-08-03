import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Database, Globe, Smartphone, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects grid animation
      gsap.fromTo(projectsRef.current?.children || [], 
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
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "WealthSync – AI-Powerd Budgeting and Finance Optimization System",
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
        "Responsive mobile-first UI with Tailwind CSS, Framer Motion, and interactive UI effects",
        "Form handling and validation using React Hook Form, and client-side routing via React Router",
        "Image and media storage using Cloudinary with secure access and display",
        "State management using Redux Toolkit and global context for user and event data",

        "Paperless, eco-friendly system eliminating need for WhatsApp, Google Forms, or physical notices",
      ],
      githubUrl: "https://github.com/sachinchauhan010/NexusSocietyFrontend",
      liveUrl: "https://nexussociety.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "Interactive Java Games",
      description:
        "Collection of four interactive Java-based games including Guessing Game, Rock-Paper-Scissors, Tic-Tac-Toe, and Connect Four. Demonstrates OOP principles and game logic implementation.",
      icon: Smartphone,
      technologies: ["Java", "OOP", "Swing", "Game Logic", "Algorithms"],
      features: [
        "Multiple game implementations",
        "Clean user interface design",
        "Advanced game algorithms",
        "Object-oriented architecture",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Java Applications",
    },
    {
      title: "RESTful API Development",
      description:
        "Comprehensive REST API built with Node.js and Express.js, featuring automated recurring payments, transaction scheduling using Cron jobs, and merchant payment integration.",
      icon: Cpu,
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cron Jobs",
        "REST API",
      ],
      features: [
        "Automated payment scheduling",
        "Merchant payment integration",
        "Error handling & validation",
        "API documentation",
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Backend",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Featured Projects
        </h2>
        
        <div ref={projectsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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