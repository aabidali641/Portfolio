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
      title: "AI Budget Management System",
      description: "Advanced budget management system built with MERN Stack, integrated with Braintree, Prisma, and JWT for secure payments. Features AI-powered auto-categorization and real-time transaction management.",
      icon: Database,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Braintree", "Prisma", "JWT"],
      features: [
        "Secure user authentication with JWT",
        "AI-powered transaction categorization",
        "Real-time payment processing",
        "Interactive dashboard with charts"
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Chat Authentication System",
      description: "Secure authentication system enabling seamless login via GitHub and LinkedIn using OAuth. Built with React for frontend and Node.js for backend with JWT token management.",
      icon: Globe,
      technologies: ["React", "Node.js", "OAuth", "GitHub API", "LinkedIn API", "JWT"],
      features: [
        "OAuth integration with GitHub & LinkedIn",
        "Secure JWT token management",
        "Real-time user session handling",
        "Responsive design"
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Authentication"
    },
    {
      title: "Interactive Java Games",
      description: "Collection of four interactive Java-based games including Guessing Game, Rock-Paper-Scissors, Tic-Tac-Toe, and Connect Four. Demonstrates OOP principles and game logic implementation.",
      icon: Smartphone,
      technologies: ["Java", "OOP", "Swing", "Game Logic", "Algorithms"],
      features: [
        "Multiple game implementations",
        "Clean user interface design",
        "Advanced game algorithms",
        "Object-oriented architecture"
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Java Applications"
    },
    {
      title: "RESTful API Development",
      description: "Comprehensive REST API built with Node.js and Express.js, featuring automated recurring payments, transaction scheduling using Cron jobs, and merchant payment integration.",
      icon: Cpu,
      technologies: ["Node.js", "Express.js", "MongoDB", "Cron Jobs", "REST API"],
      features: [
        "Automated payment scheduling",
        "Merchant payment integration",
        "Error handling & validation",
        "API documentation"
      ],
      githubUrl: "#",
      liveUrl: "#",
      category: "Backend"
    }
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