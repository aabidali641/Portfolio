import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      // Content animation
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats cards animation
      gsap.fromTo(statsRef.current?.children || [], 
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "Master's Degree",
      description: "Computer Applications"
    },
    {
      icon: Code,
      title: "Experience",
      value: "2+ Years",
      description: "Development Experience"
    },
    {
      icon: Users,
      title: "Projects",
      value: "10+ Projects",
      description: "Completed Successfully"
    },
    {
      icon: Award,
      title: "Certifications",
      value: "5+ Certs",
      description: "AWS, Oracle, Java"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with a Master's degree in Computer Applications 
                from Maulana Azad University of Technology. My journey in software development 
                has been driven by curiosity and a constant desire to learn new technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in Java, React, Node.js, and the MERN stack, I love building 
                scalable web applications that solve real-world problems. I'm particularly 
                interested in creating interactive user experiences and optimizing application 
                performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to 
                open source projects, or working on innovative side projects that challenge 
                my technical skills.
              </p>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">Azamgarh, UP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">aabidali641@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Degree</span>
                <span className="font-medium">MCA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Specialization</span>
                <span className="font-medium">Full Stack Development</span>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4 className="text-2xl font-bold text-primary mb-2">{stat.value}</h4>
                <p className="font-medium mb-1">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;