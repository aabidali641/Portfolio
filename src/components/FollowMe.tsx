// FollowMe.tsx
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
    <div className="mt-16 text-center">
      <h4 className="font-semibold mb-6 text-primary text-2xl">Follow Me</h4>
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.title}
            >
              <social.icon className="h-6 w-6" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
