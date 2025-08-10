import React, { forwardRef, useEffect, useRef } from "react";
import { Award, ExternalLink, BadgeCheck, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certifications = forwardRef<HTMLDivElement>((_, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const heading = sectionRef.current.querySelector(".cert-heading");
      const cards = sectionRef.current.querySelectorAll(".cert-card");

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

  const certifications = [
    {
      name: "AWS Cloud Assessment",
      issuer: "Learn Tube",
      date: "2024",
      description:
        "Successfully completed AWS core services, cloud computing fundamentals",
      icon: BadgeCheck,
      link: "https://drive.google.com/file/d/1D5vo8O-uTXUjto2ED2U4ecDcsmGPFk-U/view?usp=drive_link",
      linkText: "View Certification",
    },
    {
      name: "Oracle SQL Certification",
      issuer: "Great Learning",
      date: "2024",
      description:
        "Oracle SQL course covering queries, data manipulation, database design",
      icon: GraduationCap,
      link: "https://www.mygreatlearning.com/certificate/KTWJFHVC",
      linkText: "Verify Credential",
    },
    {
      name: "Alpha 5.0 DSA with Java",
      issuer: "Apna College",
      date: "2024",
      description:
        "Successfully improved Data Structures and Algorithms using Java",
      icon: BadgeCheck,
      link: "https://drive.google.com/file/d/1SEGnpKHFi8CvlX5i3RAj7fTDKScupJor/view?usp=drive_link",
      linkText: "Show Certificate",
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className=" py-0 scroll-mt-24"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16 text-center text-gradient">
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h3>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="cert-card glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:neon-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    {cert.icon ? (
                      <cert.icon className="h-5 w-5 text-primary" />
                    ) : (
                      <Award className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1 text-xl">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      {cert.issuer}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/30"
                    >
                      {cert.date}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {cert.description}
                </p>
                {cert.link && (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 mt-3"
                    asChild
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {cert.linkText || "View Certificate"}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

Certifications.displayName = "Certifications";
export default Certifications;
