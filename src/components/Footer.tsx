import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-muted-foreground">
            <p className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 text-sm sm:text-base">
              © {currentYear} Aabid Ali. Made with
              <Heart className="h-4 w-4 text-red-500 fill-current mx-1" />
              and
              <Code className="h-4 w-4 text-primary mx-1" />
              using React, TypeScript & GSAP
            </p>
          </div>

          <div className="text-muted-foreground text-xs sm:text-sm">
            <p>Full Stack Developer • MERN Stack Specialist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
