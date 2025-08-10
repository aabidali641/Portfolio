import React, { forwardRef, useEffect, useRef } from "react";
import { Code2, Mic, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const Achievements = forwardRef<HTMLDivElement>((_, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.fromTo(
        sectionRef.current?.querySelector("h3"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".ach-card") || [],
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      title: "Active Open-Source Project Contributor",
      organization: "GitHub Community",
      date: "2025",
      description:
        "Contributed to open-source projects showcasing coding, collaboration, and real-world problem-solving skills.",
      icon: Code2,
    },
    {
      title: "First Prize - English Speaking Contest",
      organization: "Howard International Institute Of English Language",
      date: "2022",
      description:
        "Won first prize for outstanding communication skills and confident stage presence.",
      icon: Mic,
    },
    {
      title: "Anchoring - Juniors’ Fresher’s Party",
      organization: "College Cultural Committee",
      date: "2025",
      description:
        "Hosted an event with 150+ attendees, showcasing public speaking, event management, and confidence.",
      icon: Users,
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="mt-16 py-0 scroll-mt-24"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        
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
          className="block mx-auto max-w-max mb-12 sm:mb-16"
        >
          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gradient text-center">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
        </Tilt>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <Tilt
              key={index}
              tiltEnable={true}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="white"
              glarePosition="bottom"
              glareBorderRadius="1rem"
              scale={1.05}
              transitionSpeed={600}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="block"
            >
              <Card className="ach-card glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      {ach.icon && (
                        <ach.icon className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1 text-xl">
                        {ach.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {ach.organization}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/30"
                      >
                        {ach.date}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ach.description}
                  </p>
                </CardContent>
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
});

Achievements.displayName = "Achievements";
export default Achievements;
