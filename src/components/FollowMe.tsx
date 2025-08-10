import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    url: "https://github.com/aabidali641",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    url: "https://linkedin.com/in/aabidali641",
  },
  {
    icon: Twitter,
    title: "X",
    url: "https://x.com/641Aabid",
  },
  {
    icon: Globe,
    title: "Portfolio",
    url: "https://yourportfolio.com",
  },
  {
    icon: Mail,
    title: "Email",
    url: "mailto:mdaabidali28@gmail.com",
  },
];

export default function FollowMe() {
  return (
    <div className="mt-0 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gradient">
        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
          Follow Me
        </span>
      </h4>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-16">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center"
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
              className="flex items-center justify-center"
            >
              <social.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-12 md:w-12" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
