import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

      // Timeline items animation
      gsap.fromTo(timelineRef.current?.children || [], 
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
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Java Intern",
      company: "Intern",
      period: "07/2024 - 09/2024",
      location: "Remote",
      type: "Internship",
      description: "Designed and developed four interactive Java-based applications during internship.",
      achievements: [
        "Guessing Game - Interactive number guessing game with user feedback",
        "Rock-Paper-Scissors - Classic game implementation with clean UI",
        "Tic-Tac-Toe - Two-player game with win detection logic",
        "Connect Four Game - Strategic board game with advanced algorithms"
      ],
      technologies: ["Java", "OOP", "Game Development", "Algorithms"]
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      location: "Self-Directed",
      type: "Personal Development",
      description: "Building modern web applications using MERN stack and exploring new technologies.",
      achievements: [
        "AI-Powered Budget Management System with MERN Stack",
        "Chat Authentication system with secure login via GitHub and LinkedIn",
        "RESTful APIs with Node.js and Express.js",
        "Real-time transaction management with automated categorization"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "OAuth"]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Experience
        </h2>
        
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
              
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow ml-0 md:ml-20">
                <CardContent className="p-8">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
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
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30 text-primary">
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