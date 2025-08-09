import React, { forwardRef, useEffect, useRef } from "react";
import { Code2, Award, Mic, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievements = forwardRef<HTMLDivElement>((_, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const heading = sectionRef.current.querySelector(".ach-heading");
      const cards = sectionRef.current.querySelectorAll(".ach-card");

      // Heading animation
      gsap.fromTo(
        heading,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
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
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <h3 className="ach-heading text-3xl font-bold text-center mb-12 text-primary">
          Achievements
        </h3>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <Card
              key={index}
              className="ach-card glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {ach.icon && <ach.icon className="h-5 w-5 text-primary" />}
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
          ))}
        </div>
      </div>
    </section>
  );
});

Achievements.displayName = "Achievements";
export default Achievements;
