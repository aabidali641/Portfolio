import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench, Award, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

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

      // Skills cards animation
      gsap.fromTo(skillsRef.current?.children || [], 
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
            toggleActions: "play none none reverse"
          }
        }
      );

      // Certifications animation
      gsap.fromTo(certificationsRef.current?.children || [], 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: certificationsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Next.js", "TypeScript", "Three.js", "GSAP", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "JWT", "OAuth", "Cron Jobs"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "CI/CD", "Linux", "Shell Scripting"]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Assessment",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Successfully completed AWS core services, cloud computing fundamentals"
    },
    {
      name: "Oracle SQL Certification",
      issuer: "Oracle",
      date: "2024",
      description: "Oracle SQL course covering queries, data manipulation, database design"
    },
    {
      name: "Alpha 5 DRA with Java",
      issuer: "Professional Certification",
      date: "2024",
      description: "Successfully improved Data Java, enhancing problem-solving and programming using Java"
    },
    {
      name: "Oracle Database Foundations",
      issuer: "Oracle",
      date: "2023",
      description: "Oracle Database Foundations covering database concepts and SQL fundamentals"
    },
    {
      name: "Java Development",
      issuer: "Industry Certification",
      date: "2023",
      description: "Comprehensive Java programming and OOP principles certification"
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Skills & Expertise
        </h2>
        
        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Certifications & Achievements
          </h3>
          <div ref={certificationsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs border-primary/30">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;